// ==UserScript==
// @name            deTube Block Channels
// @name:de         deTube Kanäle blockieren
// @name:es         deTube Bloquear canales
// @name:fr         deTube Bloquer des chaînes
// @name:it         deTube Blocca canali
// @name:pt         deTube Bloquear canais
// @name:ru         deTube Блокировать каналы
// @name:ja         deTube チャンネルをブロック
// @name:ko         deTube 채널 차단
// @name:zh-CN      deTube 屏蔽频道
// @name:zh-TW      deTube 封鎖頻道
// @name:nl         deTube Kanalen blokkeren
// @name:pl         deTube Blokuj kanały
// @name:sv         deTube Blockera kanaler
// @name:da         deTube Bloker kanaler
// @name:no         deTube Blokker kanaler
// @name:fi         deTube Estä kanavat
// @name:tr         deTube Kanalları Engelle
// @name:ar         deTube حظر القنوات
// @name:he         deTube חסום ערוצים
// @name:hi         deTube चैनल ब्लॉक करें
// @name:th         deTube บล็อกช่อง
// @name:vi         deTube Chặn kênh
// @version         0.1.1
// @description     Adds a "Block Channel" option to YouTube menus. Hide videos from blocked channels automatically.
// @description:de  Fügt eine Option "Kanal blockieren" zu YouTube-Menüs hinzu. Blendet Videos blockierter Kanäle automatisch aus.
// @description:es  Agrega una opción "Bloquear canal" a los menús de YouTube. Oculta automáticamente videos de canales bloqueados.
// @description:fr  Ajoute une option "Bloquer la chaîne" dans les menus de YouTube. Masque automatiquement les vidéos des chaînes bloquées.
// @description:it  Aggiunge un'opzione "Blocca canale" ai menu di YouTube. Nasconde automaticamente i video dei canali bloccati.
// @description:pt  Adiciona a opção "Bloquear canal" aos menus do YouTube. Oculta automaticamente vídeos de canais bloqueados.
// @description:ru  Добавляет опцию «Блокировать канал» в меню YouTube. Автоматически скрывает видео заблокированных каналов.
// @description:ja  YouTube のメニューに「チャンネルをブロック」オプションを追加します。ブロックしたチャンネルの動画を自動的に非表示にします。
// @description:ko  YouTube 메뉴에 "채널 차단" 옵션을 추가합니다. 차단된 채널의 동영상을 자동으로 숨깁니다.
// @description:zh-CN 在 YouTube 菜单中添加“屏蔽频道”选项。自动隐藏被屏蔽频道的视频。
// @description:zh-TW 在 YouTube 選單中新增「封鎖頻道」選項。自動隱藏來自被封鎖頻道的影片。
// @description:nl  Voegt een "Kanaal blokkeren" optie toe aan YouTube-menu's. Verbergt video's van geblokkeerde kanalen automatisch.
// @description:pl  Dodaje opcję "Zablokuj kanał" do menu YouTube. Automatycznie ukrywa filmy z zablokowanych kanałów.
// @description:sv  Lägger till ett alternativ "Blockera kanal" i YouTube-menyer. Döljer automatiskt videor från blockerade kanaler.
// @description:da  Tilføjer en "Bloker kanal" mulighed til YouTube-menuer. Skjuler automatisk videoer fra blokerede kanaler.
// @description:no  Legger til "Blokker kanal"-valg i YouTube-menyer. Skjuler automatisk videoer fra blokkerte kanaler.
// @description:fi  Lisää "Estä kanava" -valinnan YouTuben valikoihin. Piilottaa automaattisesti estettyjen kanavien videot.
// @description:tr  YouTube menülerine "Kanalı Engelle" seçeneği ekler. Engellenen kanalların videolarını otomatik gizler.
// @description:ar  يضيف خيار "حظر القناة" إلى قوائم YouTube. يخفي تلقائيًا مقاطع الفيديو من القنوات المحظورة.
// @description:he  מוסיף אפשרות "חסום ערוץ" לתפריטי YouTube. מסתיר באופן אוטומטי סרטונים מערוצים חסומים.
// @description:hi  YouTube मेनू में "चैनल ब्लॉक करें" विकल्प जोड़ता है। ब्लॉक किए गए चैनलों के वीडियो को स्वचालित रूप से छुपाता है।
// @description:th  เพิ่มตัวเลือก "บล็อกช่อง" ในเมนู YouTube ซ่อนวิดีโอจากช่องที่ถูกบล็อกโดยอัตโนมัติ
// @description:vi  Thêm tùy chọn "Chặn kênh" vào menu YouTube. Tự động ẩn video từ các kênh bị chặn.
// @author          polymegos
// @namespace       https://github.com/polymegos/deTube_channel_blocker
// @supportURL      https://github.com/polymegos/deTube_channel_blocker/issues
// @license         MIT
// @match           *://www.youtube.com/*
// @match           *://www.youtube-nocookie.com/*
// @match           *://m.youtube.com/*
// @match           *://music.youtube.com/*
// @grant           GM_getValue
// @grant           GM_setValue
// @run-at          document-end
// @compatible      firefox
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
  'use strict';

  const STORAGE_KEY = 'detube_blocked_channels_store';
  let blocked = new Set();
  let lastRenderer = null;

  // Shorts blocker persistent state
  const SHORTS_STORAGE_KEY = 'detube_shorts_block_enabled';
  let shortsEnabled = false;
  let shortsUrlObserver = null;
  let shortsDomObserver = null;

  const log = (...a) => console.log('%c[deTube Block Channels]', 'color: green; font-weight: bold;', ...a);

  async function loadBlocked() {
    // Load blocked channels from storage
    const raw = await GM_getValue(STORAGE_KEY, '[]');
    try { blocked = new Set(JSON.parse(raw)); log('Loaded blocked:', [...blocked]); }
    catch(e){ blocked = new Set(); log('Load-error', e); }
  }

  // Shorts blocking
  const SHORTS_BLOCK_SELECTORS = [
    'ytd-reel-shelf-renderer',
    'a[title="Shorts"]',
    'div#dismissible.style-scope.ytd-rich-shelf-renderer'
  ];

  function redirectIfShortsURL(url) {
    const shortsRegex = /^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})(\?.*)?$/;
    const match = url.match(shortsRegex);
    if (match) {
      const videoId = match[1];
      const query = window.location.search || '';
      const newUrl = `https://www.youtube.com/watch?v=${videoId}${query}`;
      window.location.replace(newUrl);
    }
  }

  function removeShortsElements() {
    if (!shortsEnabled) return;
    SHORTS_BLOCK_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  }

  function setupShortsBlocking(enable) {
    // Tear down previous observers
    if (shortsUrlObserver) { try { shortsUrlObserver.disconnect(); } catch(_){} shortsUrlObserver = null; }
    if (shortsDomObserver) { try { shortsDomObserver.disconnect(); } catch(_){} shortsDomObserver = null; }

    shortsEnabled = !!enable;

    if (!shortsEnabled) return;

    // Redirect current /shorts/ if needed
    redirectIfShortsURL(window.location.href);

    // Observe SPA URL changes
    let lastUrl = location.href;
    shortsUrlObserver = new MutationObserver(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        redirectIfShortsURL(currentUrl);
      }
    });
    shortsUrlObserver.observe(document, { subtree: true, childList: true });

    // Observe DOM for Shorts UI and remove them
    const initDomObs = () => {
      if (document.body) {
        shortsDomObserver = new MutationObserver(removeShortsElements);
        shortsDomObserver.observe(document.body, { childList: true, subtree: true });
        removeShortsElements();
      } else {
        requestAnimationFrame(initDomObs);
      }
    };
    initDomObs();
  }

  async function saveBlocked() {
    // Persist blocked channels
    await GM_setValue(STORAGE_KEY, JSON.stringify([...blocked]));
    log('Saved blocked list:', [...blocked]);
  }

  async function loadShortsSetting() {
    try {
      const raw = await GM_getValue(SHORTS_STORAGE_KEY, 'false');
      shortsEnabled = String(raw) === 'true';
      log('Loaded shorts setting:', shortsEnabled);
    } catch (e) {
      shortsEnabled = false;
      log('Load-error shorts', e);
    }
  }

  async function saveShortsSetting() {
    await GM_setValue(SHORTS_STORAGE_KEY, shortsEnabled ? 'true' : 'false');
    log('Saved shorts setting:', shortsEnabled);
  }

  function tagVideo(el) {
    // Tag matching for videos
    const selectorsToTry = [
      // Generic
      '#channel-name a',
      'ytd-channel-name a',
      'a[href*="/@"]',
      'a[href*="/channel/"]',
      'a[href*="/c/"]',
      'a[href*="/user/"]',
      // Lookup (sidebar/related etc.)
      '.yt-lockup-byline a',
      '.yt-lockup-metadata-view-model-wiz__title a',
      'span.yt-core-attributed-string.yt-content-metadata-view-model-wiz__metadata-text',
      // Homepage
      '.yt-lockup-metadata-view-model-wiz__metadata .yt-core-attributed-string__link',
      '.yt-content-metadata-view-model-wiz__metadata-row .yt-core-attributed-string__link',
      // Search
      '#text-container a.yt-simple-endpoint.style-scope.yt-formatted-string',
      // Fallbacks
      'yt-formatted-string a',
      'yt-formatted-string',
      '.yt-lockup-metadata-view-model-wiz__title',
      '.yt-lockup-metadata-view-model-wiz',
    ];

    for (const selector of selectorsToTry) {
      const candidate = el.querySelector(selector);
      if (candidate && candidate.textContent.trim()) {
        const name = candidate.textContent.trim();
        el.dataset.detube = name;
        log(`[+] Tagged video with channel: "${name}" using selector "${selector}"`);
        return true;
      }
    }

    log('[!] Could not find channel name with any selector inside:', el);
    return false;
  }

  function tagEmAll() {
    const els = document.querySelectorAll([
      'yt-lockup-view-model',
      'ytd-video-renderer',
      'ytd-compact-video-renderer',
      'ytd-grid-video-renderer',
      'ytd-rich-item-renderer'
    ].join(','));
    let count = 0;
    for (let el of els) if (tagVideo(el)) count++;
    log(`Tagged ${count}/${els.length} videos.`);
  }

  function removeBlockedVideos() {
    const videoSelectors = [
      'yt-lockup-view-model',
      'ytd-grid-video-renderer',
      'ytd-video-renderer',
      'ytd-compact-video-renderer',
      'ytd-rich-item-renderer'
    ];

    document.querySelectorAll(videoSelectors.join(',')).forEach(item => {
      // Ensure we have a tag
      if (!item.dataset.detube) {
        tagVideo(item);
      }
      const name = item.dataset.detube && item.dataset.detube.trim();
      if (name && blocked.has(name)) {
        item.remove();
      }
    });
  }

  function applyCSS() {
    let s = document.getElementById('detube_style_v4');
    if (!s) { s = document.createElement('style'); s.id = 'detube_style_v4'; document.head.append(s); }
    const baseTargets = [
      'yt-lockup-view-model',
      'ytd-video-renderer',
      'ytd-compact-video-renderer',
      'ytd-grid-video-renderer',
      'ytd-rich-item-renderer'
    ];
    const rules = [...blocked].map(n =>
      `${baseTargets.map(t => `${t}[data-detube="${CSS.escape(n)}"]`).join(', ')} { display: none !important; }`
    ).join('\n');
    s.textContent = rules;
    log(`Applied ${blocked.size} CSS rules.`);
  }

  function observeMenus() {
    const observer = new MutationObserver(() => {
      const menu = document.querySelector('yt-list-view-model');
      if (menu && lastRenderer) {
        // Re-tag in case the dataset wasn't updated yet
        tagVideo(lastRenderer);

        const channel = lastRenderer.dataset.detube; // Get channel name from dataset
        if (channel) {
          injectButton(channel); // Refresh channel name every time
          lastRenderer = null;   // Reset, prevent same renderer reuse
        } else {
          log('[!] Menu opened but no channel found on lastRenderer.');
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function injectButton(channel) {
    const menu = document.querySelector('yt-list-view-model');
    if (!menu) {
      log('[!] Menu not found for injection');
      return;
    }

    // Remove any previous injected button
    const oldButton = menu.querySelector('.detube-block-button');
    if (oldButton) oldButton.remove();

    const button = document.createElement('yt-list-item-view-model');
    button.className = 'detube-block-button';
    button.setAttribute('role', 'menuitem');
    button.setAttribute('tabindex', '0');

    const labelDiv = document.createElement('div');
    labelDiv.className = 'yt-list-item-view-model-wiz__label yt-list-item-view-model-wiz__container yt-list-item-view-model-wiz__container--compact yt-list-item-view-model-wiz__container--tappable yt-list-item-view-model-wiz__container--in-popup';

    const textWrapper = document.createElement('div');
    textWrapper.className = 'yt-list-item-view-model-wiz__text-wrapper';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'yt-list-item-view-model-wiz__title-wrapper';

    const span = document.createElement('span');
    span.className = 'yt-core-attributed-string yt-list-item-view-model-wiz__title';
    span.setAttribute('role', 'text');
    span.textContent = `  🚫    Block ${channel}`; // This is hilarious

    titleWrapper.appendChild(span);
    textWrapper.appendChild(titleWrapper);
    labelDiv.appendChild(textWrapper);
    button.appendChild(labelDiv);

    button.addEventListener('click', () => {
      blocked.add(channel);
      saveBlocked();
      applyCSS();
      tagEmAll();
      log(`[>] Blocked channel: ${channel}`);
    });

    menu.appendChild(button);
    log(`[+] Injected block button for "${channel}"`);
  }

  function createManagementButton() {
    const button = document.createElement('button');
    button.id = 'detube-manage-btn';
    button.title = 'Manage Blocked Channels';
    button.textContent = '🚫';

    button.style.cssText = `
      background: none;
      border: none;
      color: var(--yt-spec-text-primary);
      cursor: pointer;
      font-size: 20px;
      padding: 6px 10px;
      border-radius: 50%;
      margin-left: 8px;
      transition: background-color 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    `;

    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'transparent';
    });

    button.addEventListener('click', openBlockedChannelsTab);
    return button;
  }

  function injectManagementButton() {
    // Manager button to view list of blocked channels
    const tryInject = () => {
      const masthead = document.querySelector('ytd-masthead #end') || document.querySelector('ytd-masthead');

      if (masthead && !document.getElementById('detube-manage-btn')) {
        const managementButton = createManagementButton();
        managementButton.style.marginLeft = '8px';
        masthead.appendChild(managementButton);
        log('[+] Management button injected');
      }
    };

    tryInject();
    const mastheadObserver = new MutationObserver(tryInject);
    mastheadObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => mastheadObserver.disconnect(), 30000);
  }

  function generateBlockedChannelsHTML() {
    // Best way to manage is to direct away to local page, generate HTML for blocked channels overview
    const blockedArray = [...blocked].sort();
    const channelItems = blockedArray.map(channel => `
      <div class="channel-item" data-channel="${channel.replace(/"/g, '&quot;')}">
        <span class="channel-name">${channel.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
        <button class="unblock-btn" onclick="unblockChannel('${channel.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deTube - Blocked Channels Manager</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        @media (prefers-color-scheme: light) {
            body {
                background: linear-gradient(135deg, #f2f2f2 0%, #ffffff 100%);
            }

            .container {
                background: rgba(255, 255, 255, 0.95);
                color: #2c3e50;
            }

            .header {
                background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                color: white;
            }

            .stat-number {
                color: #ee5a24;
            }

            .stat-label {
                color: #666;
            }

            .channel-item {
                background: white;
                border-left: 4px solid #ee5a24;
            }

            .channel-name {
                color: #2c3e50;
            }

            .channels-list::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            }
            
            .channels-list::-webkit-scrollbar-track {
                background: #e1e1e1;
            }

            .footer {
                color: #666;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }

            .empty-state {
                color: #666;
            }
        }

        @media (prefers-color-scheme: dark) {
            body {
                background: linear-gradient(135deg, #222222 0%, #333333 100%);
                color: #f5f5f5;
            }

            .container {
                background: rgba(30, 30, 30, 0.95);
                color: #f5f5f5;
            }

            .header {
                background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                color: white;
            }

            .stat-number {
                color: #ff9f43;
            }

            .stat-label {
                color: #ccc;
            }

            .channel-item {
                background: #2e2e2e;
                border-left: 4px solid #ff6b6b;
            }

            .channel-name {
                color: #f5f5f5;
            }

            .channels-list::-webkit-scrollbar-thumb {
                background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            }

            .channels-list::-webkit-scrollbar-track {
                background: #414141;
            }

            .footer {
                color: #999;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }

            .empty-state {
                color: #aaa;
            }
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            border-radius: 5px;
            backdrop-filter: blur(10px);
            overflow: hidden;
        }

        .header {
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .header p {
            opacity: 0.9;
            font-size: 1.1rem;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            padding: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .stat {
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #ee5a24;
        }

        .stat-label {
            color: #666;
            font-size: 0.9rem;
            margin-top: 5px;
        }

        .controls {
            padding: 20px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        /* Toggle switch */
        .toggle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 13px;
            padding: 10px 16px;
            border-radius: 25px;
            background: rgba(0,0,0,0.06);
        }
        .switch {
            position: relative;
            display: inline-block;
            width: 46px;
            height: 26px;
        }
        .switch input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
        .slider {
            position: absolute;
            cursor: pointer;
            top: 0; left: 0; right: 0; bottom: 0;
            background: #ccc;
            transition: .3s;
            border-radius: 26px;
        }
        .switch { cursor: pointer; }
        .slider:before {
            position: absolute;
            content: '';
            height: 20px; width: 20px;
            left: 3px; bottom: 3px;
            background: white;
            transition: .3s;
            border-radius: 50%;
        }
        input:checked + .slider {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        }
        input:checked + .slider:before {
            transform: translateX(20px);
        }

        .btn {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(238, 90, 36, 0.4);
        }

        .btn.danger {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
        }

        .btn.danger:hover {
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
        }

        .channels-list {
            padding: 20px;
            max-height: 60vh;
            overflow-y: auto;
        }

        .channels-list::-webkit-scrollbar {
            width: 8px;
        }

        .channels-list::-webkit-scrollbar-track {
            border-radius: 10px;
        }

        .channels-list::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            border-radius: 10px;
        }

        .channel-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            margin-bottom: 10px;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border-left: 4px solid #ee5a24;
            max-height: 80px;
            overflow: hidden;
        }

        .channel-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .channel-name {
            font-weight: 600;
            flex: 1;
            padding-right: 15px;
        }

        .channel-item.removing {
            opacity: 0;
            transform: translateX(20px);
            max-height: 0;
            padding-top: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }

        .unblock-btn {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .unblock-btn:hover {
            background: linear-gradient(135deg, #c0392b, #a93226);
            transform: scale(1.05);
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #666;
        }

        .empty-state svg {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
            opacity: 0.5;
        }

        .footer {
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 0.9rem;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 15px;
            }

            .header h1 {
                font-size: 2rem;
            }

            .stats {
                flex-direction: column;
                gap: 15px;
            }

            .channel-item {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }

            .unblock-btn {
                align-self: flex-end;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚫 deTube Channel Blocker</h1>
        </div>
        <div class="controls">
            <button class="btn" onclick="refreshPage()">Refresh</button>
            <button class="btn danger" onclick="clearAllChannels()" ${blockedArray.length === 0 ? 'disabled' : ''}>
                Clear All (${blockedArray.length})
            </button>
            <div class="toggle" title="Toggle blocking of Shorts (persisted)">
              <label class="switch">
                <input id="shorts-toggle" type="checkbox" ${shortsEnabled ? 'checked' : ''} />
                <span class="slider"></span>
              </label>
              <span>Block Shorts</span>
            </div>
            <button class="btn" onclick="exportData()">Export</button>
            <button class="btn" onclick="triggerImport()">Import</button>
            <input id="import-file" type="file" accept="application/json" style="display:none" />
        </div>

        <div class="channels-list">
            ${blockedArray.length === 0 ? `
                <div class="empty-state">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z"/>
                    </svg>
                    <h3>No blocked channels yet!</h3>
                    <p>Start blocking channels by right-clicking on a video's three-dot menu and selecting "Block Channel"</p>
                </div>
            ` : channelItems}
        </div>
    </div>

    <script>
        function unblockChannel(channelName) {
            if (!confirm('Are you sure you want to unblock "' + channelName + '"?')) return;
            const item = document.querySelector('.channel-item[data-channel="' + channelName.replace(/"/g, '\\"') + '"]');
            const finish = () => {
                window.name = JSON.stringify({ action: 'unblock', channel: channelName });
                // Request UI rebuild from parent, i.e., refresh page
                try { refreshPage(); } catch(_) {}
            };
            if (item) {
                let done = false;
                const onEnd = () => { if (done) return; done = true; item.removeEventListener('transitionend', onEnd); finish(); };
                item.addEventListener('transitionend', onEnd);
                setTimeout(onEnd, 400);
                requestAnimationFrame(() => item.classList.add('removing'));
            } else {
                finish();
            }
        }

        function clearAllChannels() {
            if (!confirm('Are you sure you want to unblock all ${blockedArray.length} channels? This cannot be undone.')) return;
            const items = Array.from(document.querySelectorAll('.channel-item'));
            if (items.length === 0) {
                window.name = JSON.stringify({ action: 'clearAll' });
                return;
            }
            items.forEach((el, i) => setTimeout(() => el.classList.add('removing'), i * 25));
            setTimeout(() => {
                window.name = JSON.stringify({ action: 'clearAll' });
            }, 300 + items.length * 25);
        }

        function refreshPage() {
            try {
                const pending = JSON.parse(window.name || 'null');
                if (pending && pending.action && pending.action !== 'refreshManager') {
                    // Defer refresh, avoid running over pending unblock / clearAll / toggle
                    setTimeout(() => { window.name = JSON.stringify({ action: 'refreshManager' }); }, 600);
                    return;
                }
            } catch (_) { /* idc about parse errors */ }
            window.name = JSON.stringify({ action: 'refreshManager' });
        }

        function exportData() {
          try {
            const payload = {
              version: 'detube-export-1',
              blockedNames: ${JSON.stringify(blockedArray)}
            };
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const stamp = new Date().toISOString().replace(/[:.]/g,'-');
            a.download = 'detube-export-' + stamp + '.json';
            document.body.appendChild(a);
            a.click();
            setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 0);
          } catch (e) {
            try { alert('Export failed: ' + e); } catch(_){ /* no-op */ }
          }
        }

        function triggerImport() {
          const input = document.getElementById('import-file');
          if (!input) return;
          input.value = '';
          input.onchange = () => {
            const file = input.files && input.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
              try {
                const raw = String(reader.result || '').trim();
                if (!raw) throw new Error('Empty file');
                const data = JSON.parse(raw);
                // Accept either { blockedNames: [...] } or a plain array [ ... ]
                const names = Array.isArray(data) ? data : Array.isArray(data.blockedNames) ? data.blockedNames : [];
                if (!Array.isArray(names)) throw new Error('Invalid format');
                window.name = JSON.stringify({ action: 'importData', data: { blockedNames: names } });
                // Ask parent to rebuild UI
                try { refreshPage(); } catch(_) {}
              } catch (e) {
                try { alert('Import failed: ' + e); } catch(_){}
              }
            };
            reader.readAsText(file);
          };
          input.click();
        }

        // Shorts toggle handling
        document.addEventListener('DOMContentLoaded', () => {
            const t = document.getElementById('shorts-toggle');
            if (t) {
                t.addEventListener('change', () => {
                    window.name = JSON.stringify({ action: 'toggleShorts', enabled: t.checked });
                });
            }
        });
    </script>
  </body>
</html>`;
  }

  function openBlockedChannelsTab() {
    // Blocked channels management tab
    const html = generateBlockedChannelsHTML();
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const newTab = window.open(url, '_blank');

    // Monitor the new tab for actions
    const checkForActions = setInterval(() => {
      try {
        if (newTab.closed) {
          clearInterval(checkForActions);
          URL.revokeObjectURL(url);
          return;
        }

        if (newTab.window && newTab.window.name) {
          const action = JSON.parse(newTab.window.name);

          if (action.action === 'unblock' && action.channel) {
            blocked.delete(action.channel);
            saveBlocked();
            applyCSS();
            tagEmAll();
            log(`[>] Unblocked channel: ${action.channel}`);
            newTab.window.name = ''; // Clear the action
          } else if (action.action === 'importData' && action.data) {
            try {
              const arr = Array.isArray(action.data.blockedNames) ? action.data.blockedNames : [];
              let added = 0, duplicates = 0, invalid = 0;
              for (const n of arr) {
                if (!n || typeof n !== 'string') { invalid++; continue; }
                if (blocked.has(n)) { duplicates++; continue; }
                blocked.add(n);
                added++;
              }
              saveBlocked();
              applyCSS();
              tagEmAll();
              log(`[>] Import merged: +${added}, dupes ${duplicates}, invalid ${invalid}`);
            } catch (e) {
              log('Import error:', e);
            }
            // Ask the manager page to refresh
            try { newTab.window.name = JSON.stringify({ action: 'refreshManager' }); } catch(_) {}
          } else if (action.action === 'clearAll') {
            blocked.clear();
            saveBlocked();
            applyCSS();
            tagEmAll();
            log('[>] Cleared all blocked channels');
            newTab.window.name = ''; // Clear the action again
          } else if (action.action === 'refreshManager') {
            // Rebuild the manager UI from current state and navigate the tab to it
            const freshUrl = URL.createObjectURL(new Blob([generateBlockedChannelsHTML()], { type: 'text/html' }));
            try { newTab.location.href = freshUrl; } catch (_) {}
            // Clear, avoids repeated triggers of refreshManager after navigating to the new URL
            try { newTab.window.name = ''; } catch (_) {}
          } else if (action.action === 'toggleShorts') {
            shortsEnabled = !!action.enabled;
            saveShortsSetting();
            setupShortsBlocking(shortsEnabled);
            log(`[>] Shorts blocking: ${shortsEnabled ? 'ENABLED' : 'DISABLED'}`);
            newTab.window.name = '';
          }
        }
      } catch (e) {
        // Cross-origin errors are really to be expected
      }
    }, 500);

    // Stop checking after ~5 minutes
    setTimeout(() => {
      clearInterval(checkForActions);
      URL.revokeObjectURL(url);
    }, 300000);
  }

  function observeNewVideos() {
    const observer = new MutationObserver(mutations => {
      let newVideosFound = false;
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches('yt-lockup-view-model') || node.querySelector('yt-lockup-view-model')) {
            newVideosFound = true;
          }
        }
      }
      if (newVideosFound) {
        tagEmAll();
        applyCSS();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

  }

  // Run on "(...).transpose()" clicks
  document.body.addEventListener('click', e => {
    const dot = e.target.closest('div.yt-spec-touch-feedback-shape__fill');
    if (!dot) return;

    const renderer = dot.closest('yt-lockup-view-model');
    if (!renderer) return;

    // Re-tag renderer with fresh channel name
    if (tagVideo(renderer)) {
      lastRenderer = renderer;
      log('Three-dot clicked for:', renderer.dataset.detube);
    } else {
      log('Could not tag renderer.');
    }
  }, true);

  (async () => {
    log('Initializing...');
    await loadBlocked();
    await loadShortsSetting();
    tagEmAll();
    removeBlockedVideos();
    applyCSS();
    observeMenus();
    injectManagementButton();
    observeNewVideos();
    setupShortsBlocking(shortsEnabled);

    const observer = new MutationObserver(() => {
        removeBlockedVideos();
        if (shortsEnabled) removeShortsElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    window.addEventListener('yt-navigate-finish', removeBlockedVideos);
    window.addEventListener('yt-navigate-finish', () => { if (shortsEnabled) removeShortsElements(); });
    log('Ready. Await three-dot click, open menu, then see log/injected.');
  })();

})();