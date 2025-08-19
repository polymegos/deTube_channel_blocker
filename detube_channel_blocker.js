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
// @version         0.1.6
// @description     Adds a "Block Channel", a "Block Video", and a "Whitelist Channel" option to YT video menus. Hides videos from blocked channels and blocked videos automatically. Also supports blocking Shorts.
// @description:el  Προσθέτει στο μενού των βίντεο στο YT τις επιλογές «Αποκλεισμός καναλιού», «Αποκλεισμός βίντεο» και «Προσθήκη καναλιού στη λίστα επιτρεπόμενων». Αποκρύπτει αυτόματα βίντεο από αποκλεισμένα κανάλια και μεμονωμένα βίντεο. Αποκλείει επίσης τα Shorts.
// @description:es  Agrega al menú de videos de YT las opciones “Bloquear canal”, “Bloquear video” y “Poner canal en lista blanca”. Oculta automáticamente los videos de canales bloqueados y videos bloqueados. También bloquea Shorts.
// @description:fr  Ajoute aux menus vidéo de YT les options « Bloquer la chaîne », « Bloquer la vidéo » et « Mettre la chaîne en liste blanche ». Masque automatiquement les contenus des chaînes et vidéos bloquées. Bloque aussi les Shorts.
// @description:it  Aggiunge ai menu dei video di YT le opzioni “Blocca canale”, “Blocca video” e “Inserisci canale nella whitelist”. Nasconde automaticamente i video da canali o video bloccati. Blocca anche i Shorts.
// @description:pt  Adiciona ao menu de vídeos do YT as opções “Bloquear canal”, “Bloquear vídeo” e “Colocar canal na lista branca”. Oculta automaticamente vídeos de canais e vídeos bloqueados. Também bloqueia os Shorts.
// @description:ru  Добавляет в меню видео на YT опции «Заблокировать канал», «Заблокировать видео» и «Добавить канал в белый список». Автоматически скрывает видео из заблокированных каналов и отдельных видео. Также блокирует Shorts.
// @description:ja  YTの動画メニューに「チャンネルをブロック」「動画をブロック」「チャンネルをホワイトリストに登録」オプションを追加します。ブロックされたチャンネルや動画を自動的に非表示にします。Shortsもブロックします。
// @description:ko  YT 비디오 메뉴에 “채널 차단”, “동영상 차단”, “화이트리스트 채널 추가” 옵션을 추가합니다. 차단된 채널과 동영상을 자동으로 숨깁니다. Shorts도 차단합니다.
// @description:zh-CN  在 YT 视频菜单中添加“屏蔽频道”“屏蔽视频”和“将频道加入白名单”选项。自动隐藏来自被屏蔽频道和被屏蔽视频的内容。同时也屏蔽 Shorts。
// @description:zh-TW  在 YT 影片選單中新增“封鎖頻道”、“封鎖影片”與“將頻道加入白名單”選項。自動隱藏被封鎖頻道或影片的內容，並同時封鎖 Shorts。
// @description:nl  Voegt de opties “Kanaal blokkeren”, “Video blokkeren” en “Kanaal op de witte lijst zetten” toe aan YT‑videomenu’s. Verbergt automatisch video’s van geblokkeerde kanalen en geblokkeerde video’s. Blokkeert ook Shorts.
// @description:de  Fügt YT‑Videomenüs die Optionen „Kanal blockieren“, „Video blockieren“ und „Kanal auf Whitelist setzen“ hinzu. Blendet automatisch Videos blockierter Kanäle und einzelner Videos aus. Unterstützt auch Shorts.
// @description:pl  Dodaje do menu wideo YT opcje „Zablokuj kanał”, „Zablokuj wideo” i „Dodaj kanał do białej listy”. Automatycznie ukrywa filmy z zablokowanych kanałów i pojedyncze zablokowane filmy. Blokuje także Shorts.
// @description:sv  Lägger till alternativen “Blockera kanal”, “Blockera video” och “Vitlista kanal” i YTs videomenyer. Dölj automatiskt videor från blockerade kanaler och blockerade videor. Blockerar även Shorts.
// @description:da  Tilføjer mulighederne “Bloker kanal”, “Bloker video” og “Whitelist kanal” til YTs videomenuer. Skjuler automatisk videoer fra blokerede kanaler og blokerede videoer. Blokerer også Shorts.
// @description:no  Legger til alternativene “Blokker kanal”, “Blokker video” og “Whitelist kanal” i YT‑videomenyer. Skjuler automatisk videoer fra blokkerte kanaler og blokkerte videoer. Blokkerer også Shorts.
// @description:fi  Lisää YT‑videovalikoihin vaihtoehdot “Estä kanava”, “Estä video” ja “Lisää kanava valkoiselle listalle”. Piilottaa automaattisesti estettyjen kanavien ja videoiden sisällöt. Estää myös Shorts.
// @description:tr  YT video menülerine “Kanalı Engelle”, “Videoyu Engelle” ve “Kanalı Beyaz Listeye Ekle” seçeneklerini ekler. Engellenen kanalların ve videoların içeriklerini otomatik olarak gizler. Ayrıca Shorts’ları da engeller.
// @description:ar  يضيف إلى قوائم فيديو يوتيوب خيارات "حظر القناة" و"حظر الفيديو" و"إضافة القناة إلى القائمة البيضاء". يخفي تلقائيًا مقاطع الفيديو من القنوات المحظورة والفيديوهات المحظورة. كما يحظر Shorts أيضًا.
// @description:he  מוסיף לתפריטי הווידאו של YT את האפשרויות "חסום ערוץ", "חסום סרטון" ו"הוסף ערוץ לרשימה לבנה". מסתיר באופן אוטומטי סרטונים מערוצים חסומים וסרטונים חסומים. וגם חוסם Shorts.
// @description:hi  YT वीडियो मेनू में “चैनल ब्लॉक करें”, “वीडियो ब्लॉक करें” और “चैनल को व्हाइटलिस्ट में जोड़ें” विकल्प जोड़ता है। ब्लॉक किए गए चैनलों और वीडियो को स्वचालित रूप से छुपाता है। Shorts को भी ब्लॉक करता है।
// @description:th  เพิ่มตัวเลือก “บล็อกช่อง”, “บล็อกวิดีโอ” และ “เพิ่มช่องในรายการที่ไวท์ลิสต์” ในเมนูวิดีโอของ YT ซ่อนวิดโอจากช่องและวิดีโอที่ถูกบล็อกโดยอัตโนมัติ และบล็อก Shorts ด้วย.
// @description:vi  Thêm tùy chọn "Chặn kênh", "Chặn video" và "Thêm kênh vào danh sách trắng" vào menu video của YT. Tự động ẩn video từ các kênh bị chặn và các video bị chặn. Cũng chặn cả Shorts.
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
  const version = "0.1.6";

  // Channel blocker persistence
  const STORAGE_KEY = 'detube_blocked_channels_store';
  let blocked = new Set();
  let lastRenderer = null;

  // Whitelist persistence
  const WHITELIST_STORAGE_KEY = 'detube_whitelist_channels_store';
  let whitelisted = new Set();
  const WHITELIST_MODE_STORAGE_KEY = 'detube_whitelist_mode_enabled';
  let whitelistModeEnabled = false;

  // Video blocker persistence
  const VIDEOS_STORAGE_KEY = 'detube_blocked_videos_store_v1';
  let blockedVideos = {};

  // Regex persistence
  const REGEX_STORAGE_KEY = 'detube_blocked_title_patterns';
  let blockedTitlePatterns = [];

  // Shorts blocker persistence
  const SHORTS_STORAGE_KEY = 'detube_shorts_block_enabled';
  let shortsEnabled = false;
  let shortsUrlObserver = null;
  let shortsDomObserver = null;

  const log = (...a) => console.log('%c[deTube Block Channels]', 'color: green; font-weight: bold;', ...a);

  // Block shorts if user toggled
  const SHORTS_BLOCK_SELECTORS = [
    'ytd-reel-shelf-renderer',
    'grid-shelf-view-model.ytGridShelfViewModelHost',
    'a[title="Shorts"]',
    'div#dismissible.style-scope.ytd-rich-shelf-renderer'
  ];

  // Tag matching for videos and channels
  const TAG_VIDEO_SELECTORS = [
    // Generic
    '#channel-name a',
    'ytd-channel-name a',
    'a[href*="/@"]',
    'a[href*="/channel/"]',
    'a[href*="/c/"]',
    'a[href*="/user/"]',
    // Sidebars
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

  const TITLE_SELECTORS = [
    'a#video-title',
    'h3 .yt-lockup-metadata-view-model-wiz__title span.yt-core-attributed-string',
    '.yt-lockup-view-model-wiz__content-image span.yt-core-attributed-string',
    'span.yt-core-attributed-string[role="text"]',
    'a.yt-lockup-metadata-view-model-wiz__title span.yt-core-attributed-string',
    'yt-formatted-string#video-title',
    'yt-formatted-string[id="video-title"]',
    'yt-formatted-string[class="style-scope ytd-video-renderer"]',
    'a#video-title-link span.yt-core-attributed-string',
  ];

  const VIDEO_SELECTORS = [
    'yt-lockup-view-model',
    'ytd-grid-video-renderer',
    'ytd-video-renderer',
    'ytd-compact-video-renderer',
    'ytd-rich-item-renderer'
  ];

  async function loadBlocked() {
    // Load blocked channels map
    const raw = await GM_getValue(STORAGE_KEY, '[]');
    try {
      blocked = new Set(JSON.parse(raw));
      //log('Loaded blocked:', [...blocked]);
    } catch(e){ blocked = new Set(); log('Load-error', e); }
  }

  async function loadWhitelist() {
    // Load whitelisted channels
    try {
      const raw = await GM_getValue(WHITELIST_STORAGE_KEY, '[]');
      const arr = JSON.parse(raw);
      whitelisted = new Set(Array.isArray(arr) ? arr.filter(x => typeof x === 'string') : []);
      //log('Loaded whitelist:', [...whitelisted]);
    } catch (e) {
      whitelisted = new Set();
      log('Load-error whitelist', e);
    }

    try {
      const raw = await GM_getValue(WHITELIST_MODE_STORAGE_KEY, 'false');
      whitelistModeEnabled = String(raw) === 'true';
    } catch (e) {
      whitelistModeEnabled = false;
      log('Load-error whitelist mode', e);
    }
  }

  async function saveWhitelist() {
    await GM_setValue(WHITELIST_STORAGE_KEY, JSON.stringify([...whitelisted]));
  }

  async function saveWhitelistMode() {
    await GM_setValue(WHITELIST_MODE_STORAGE_KEY, whitelistModeEnabled ? 'true' : 'false');
  }

  async function loadBlockedVideos() {
    // Load blocked videos map
    try {
      const raw = await GM_getValue(VIDEOS_STORAGE_KEY, '{}');
      blockedVideos = JSON.parse(raw) || {};
      if (typeof blockedVideos !== 'object' || Array.isArray(blockedVideos)) blockedVideos = {};
      //log('Loaded blocked videos:', Object.keys(blockedVideos));
    } catch (e) {
      blockedVideos = {};
      log('Load-error videos', e);
    }
  }

  async function loadBlockedTitlePatterns() {
      // Load blocked title patterns
      try {
      const raw = await GM_getValue(REGEX_STORAGE_KEY, '[]');
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
          // Handle both old format (strings) and new format (objects with pattern and scope)
          blockedTitlePatterns = arr.map(p => {
          if (typeof p === 'string') {
              // Convert old format to new format
              return { pattern: p, scope: 'both' };
          } else if (typeof p === 'object' && p.pattern) {
              return {
              pattern: p.pattern,
              scope: p.scope || 'both'
              };
          }
          return null;
          }).filter(p => p !== null);
      } else {
          blockedTitlePatterns = [];
      }
        log('Loaded title patterns:', blockedTitlePatterns);
      } catch (e) {
        blockedTitlePatterns = [];
        log('Load-error title patterns', e);
      }
  }

  function redirectIfShortsURL(url) {
    if (url.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})(\?.*)?$/)) {
      window.location.replace(`https://www.youtube.com/watch?v=${match[1]}${window.location.search || ''}`);
    }
  }

  function removeShortsElements() {
    if (!shortsEnabled) return;
    SHORTS_BLOCK_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => el.remove());
    });
  }

  function setupShortsBlocking(enable) {
    // Tear down observers
    if (shortsUrlObserver) { try { shortsUrlObserver.disconnect(); } catch(_){} shortsUrlObserver = null; }
    if (shortsDomObserver) { try { shortsDomObserver.disconnect(); } catch(_){} shortsDomObserver = null; }

    shortsEnabled = !!enable;
    if (!shortsEnabled) return;

    redirectIfShortsURL(window.location.href);

    // Observe SPA URL evolution
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
  }

  async function saveBlockedVideos() {
    // Persist blocked videos
    await GM_setValue(VIDEOS_STORAGE_KEY, JSON.stringify(blockedVideos));
  }

  async function saveBlockedTitlePatterns() {
    await GM_setValue(REGEX_STORAGE_KEY, JSON.stringify(blockedTitlePatterns));
  }

  async function loadShortsSetting() {
    try {
      const raw = await GM_getValue(SHORTS_STORAGE_KEY, 'false');
      shortsEnabled = String(raw) === 'true';
    } catch (e) {
      shortsEnabled = false;
      log('Load-error shorts', e);
    }
  }

  async function saveShortsSetting() {
    await GM_setValue(SHORTS_STORAGE_KEY, shortsEnabled ? 'true' : 'false');
  }

  function tagVideo(el) {
    // Early exit if already tagged
    if (el.dataset.detube) return true;
    
    for (const selector of TAG_VIDEO_SELECTORS) {
      const candidate = el.querySelector(selector);
      if (candidate && candidate.textContent) {
        const name = candidate.textContent.trim();
        if (name) { // Additional check for non-empty after trim
          el.dataset.detube = name;
          // log(`[+] Tagged video with channel: "${name}" using selector "${selector}"`);
          return true;
        }
      }
    }

    // log('[!] Could not find channel name with any selector inside:', el);
    return false;
  }

  // Literally "best-effort" video id and title extraction
  function getVideoInfo(el) {
    // Early exit if already extracted
    if (el.dataset.detubeVidId && el.dataset.detubeVidTitle) {
      return { id: el.dataset.detubeVidId, title: el.dataset.detubeVidTitle };
    }
    
    let id = el.dataset.detubeVidId || '';
    let title = el.dataset.detubeVidTitle || '';

    // Only extract missing information
    if (!id) {
      // Try common anchor patterns to get id
      const a = el.querySelector('a[href*="/watch?v="]');
      if (a) {
        try {
          const href = a.getAttribute('href') || '';
          // Use relative /watch?v=... or absolute URL
          const url = href.startsWith('http') ? new URL(href) : new URL(href, 'https://www.youtube.com');
          id = url.searchParams.get('v') || '';
        } catch (_) {}
      }

      if (!id) {
        const lockup = el.querySelector('div[class*="content-id-"]');
        if (lockup) {
          const m = Array.from(lockup.classList).map(c => c.match(/^content-id-([A-Za-z0-9_-]{6,})$/)).find(Boolean);
          if (m && m[1]) id = m[1];
        }
      }
      
      if (id) el.dataset.detubeVidId = id;
    }

    if (!title) {
      for (const ts of TITLE_SELECTORS) {
        const n = el.querySelector(ts);
        if (n && n.textContent) { 
          const trimmed = n.textContent.trim();
          if (trimmed) {
            title = trimmed; 
            break; 
          }
        }
      }
      if (title) el.dataset.detubeVidTitle = title;
    }
    
    return { id, title };
}

  function tagAllVideos() {
    const els = document.querySelectorAll([
      'yt-lockup-view-model',
      'ytd-video-renderer',
      'ytd-compact-video-renderer',
      'ytd-grid-video-renderer',
      'ytd-rich-item-renderer'
    ].join(','));
    let count = 0;
    for (let el of els) if (tagVideo(el)) count++;
    //log(`Tagged ${count}/${els.length} videos.`);
  }

  function removeBlockedVideos() {
    // Batch process videos to reduce DOM reflows
    const videos = document.querySelectorAll(VIDEO_SELECTORS.join(','));
    const fragment = document.createDocumentFragment();
    const toRemove = [];
    
    for (const item of videos) {
      // Ensure we have a tag
      if (!item.dataset.detube) {
        tagVideo(item);
      }
      // Channel-based removal
      const name = item.dataset.detube && item.dataset.detube.trim();
      if (whitelistModeEnabled) {
        // In whitelist mode: remove anything NOT in the whitelist
        if (!name || !whitelisted.has(name)) { 
          toRemove.push(item); 
          continue; 
        }
      } else {
        if (name && blocked.has(name)) { 
          toRemove.push(item); 
          continue; 
        }
      }
      // Video-based removal
      const info = getVideoInfo(item);
      const id = info.id;
      if (!whitelistModeEnabled && id && blockedVideos[id]) { 
        toRemove.push(item); 
        continue; 
      }
      // Title/channel-regex based removal
      const title = (item.dataset.detubeVidTitle || info.title || '').trim();
      const channelName = (item.dataset.detube || '').trim();
      if (!whitelistModeEnabled && blockedTitlePatterns.length > 0) {
        for (const patternObj of blockedTitlePatterns) {
          try {
            const re = new RegExp(patternObj.pattern, 'i');
            const scope = patternObj.scope || 'both';
            
            let shouldRemove = false;
            
            if (scope === 'channel' && channelName && re.test(channelName)) {
              shouldRemove = true;
            } else if (scope === 'title' && title && re.test(title)) {
              shouldRemove = true;
            } else if (scope === 'both' && (
              (title && re.test(title)) || 
              (channelName && re.test(channelName))
            )) {
              shouldRemove = true;
            }
            
            if (shouldRemove) {
              toRemove.push(item);
              break; // Exit pattern loop
            }
          } catch (err) {
            // invalid pattern, doesn't matter, skip
          }
        }
      }
    }
    
    // Remove all marked elements in batch
    for (const item of toRemove) {
      item.remove();
    }
  }

  function applyCSS() {
    let s = document.getElementById('detube_style');
    if (!s) { s = document.createElement('style'); s.id = 'detube_style'; document.head.append(s); }
    // In whitelist mode we rely on DOM removal for performance correctness.
    // Only apply CSS rules for explicit blocked channels when not in whitelist mode.
    const rules = whitelistModeEnabled ? '' : [...blocked].map(n =>
      `${VIDEO_SELECTORS.map(t => `${t}[data-detube="${CSS.escape(n)}"]`).join(', ')} { display: none !important; }`
    ).join('\n');
    s.textContent = rules;
    //log(`Applied ${blocked.size} CSS rules.`);
  }

  function observeMenus() {
    const observer = new MutationObserver(() => {
      const menu = document.querySelector('yt-list-view-model');
      if (menu && lastRenderer) {
        // Re-tag in case the dataset wasn't updated yet
        tagVideo(lastRenderer);
        // Get channel name from storage
        const channel = lastRenderer.dataset.detube;
        if (channel) {
          injectButton(channel); // Refresh channel name every time
          lastRenderer = null;   // Reset, prevent same renderer reuse
        } else {
          log('[!] Menu opened but no channel found on lastRenderer.');
        }
      }

      // Also handle search results popup menu structure
      const popupList = document.querySelector('ytd-menu-popup-renderer tp-yt-paper-listbox');
      if (popupList && lastRenderer) {
        // Re-tag and inject for search results menu
        tagVideo(lastRenderer);
        const channel = lastRenderer.dataset.detube;
        const rendererRef = lastRenderer;
        if (channel) {
          // Defer and retry briefly to allow YouTube to finish rendering items
          scheduleSearchMenuInjection(channel, rendererRef);
        } else {
          log('[!] Search menu opened but no channel found on lastRenderer.');
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Retry helper to wait for popup items to render before injection
  function scheduleSearchMenuInjection(channel, renderer) {
    let tries = 0;
    const maxTries = 10; // ~500ms total with 50ms spacing
    const attempt = () => {
      const list = getOpenPopupList();
      const ready = list && (list.querySelector('ytd-menu-service-item-renderer') || tries >= maxTries);
      if (ready) {
        injectSearchMenuButtons(channel, renderer);
        lastRenderer = null;
      } else if (tries < maxTries) {
        tries++;
        setTimeout(attempt, 50);
      }
    };
    // Start after a frame
    requestAnimationFrame(attempt);
  }

  function getOpenPopupList() {
    const lists = Array.from(document.querySelectorAll('ytd-menu-popup-renderer tp-yt-paper-listbox'));
    for (const list of lists) {
      const dropdown = list.closest('tp-yt-iron-dropdown');
      if (dropdown && (dropdown.hasAttribute('opened') || dropdown.style.display !== 'none')) return list;
      const rect = list.getBoundingClientRect && list.getBoundingClientRect();
      if (rect && rect.width > 0 && rect.height > 0) return list;
    }
    return null;
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
    const oldVideoButton = menu.querySelector('.detube-block-video-button');
    if (oldVideoButton) oldVideoButton.remove();
    const oldWhitelistButton = menu.querySelector('.detube-whitelist-button');
    if (oldWhitelistButton) oldWhitelistButton.remove();

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
    span.textContent = `\u00A0🚫\u00A0\u00A0 Block ${channel}`; // This is hilarious

    titleWrapper.appendChild(span);
    textWrapper.appendChild(titleWrapper);
    labelDiv.appendChild(textWrapper);
    button.appendChild(labelDiv);

    button.addEventListener('click', () => {
      blocked.add(channel);
      saveBlocked();
      applyCSS();
      tagAllVideos();
      log(`[>] Blocked channel: ${channel}`);
    });

    menu.appendChild(button);
    //log(`[+] Injected block button for "${channel}"`);

    // Inject "Block Video" button just below
    const videoInfo = lastRenderer ? getVideoInfo(lastRenderer) : { id: '', title: '' };
    if (!videoInfo.id) {
      log('[!] Could not determine video id for Block Video');
      return;
    }

    const vBtn = document.createElement('yt-list-item-view-model');
    vBtn.className = 'detube-block-video-button';
    vBtn.setAttribute('role', 'menuitem');
    vBtn.setAttribute('tabindex', '0');

    const vLabelDiv = document.createElement('div');
    vLabelDiv.className = 'yt-list-item-view-model-wiz__label yt-list-item-view-model-wiz__container yt-list-item-view-model-wiz__container--compact yt-list-item-view-model-wiz__container--tappable yt-list-item-view-model-wiz__container--in-popup';

    const vTextWrapper = document.createElement('div');
    vTextWrapper.className = 'yt-list-item-view-model-wiz__text-wrapper';

    const vTitleWrapper = document.createElement('div');
    vTitleWrapper.className = 'yt-list-item-view-model-wiz__title-wrapper';

    const vSpan = document.createElement('span');
    vSpan.className = 'yt-core-attributed-string yt-list-item-view-model-wiz__title';
    vSpan.setAttribute('role', 'text');
    vSpan.textContent = `\u00A0🚧\u00A0\u00A0 Block This Video`;

    vTitleWrapper.appendChild(vSpan);
    vTextWrapper.appendChild(vTitleWrapper);
    vLabelDiv.appendChild(vTextWrapper);
    vBtn.appendChild(vLabelDiv);

    vBtn.addEventListener('click', () => {
      const id = videoInfo.id;
      const title = videoInfo.title || id;
      blockedVideos[id] = title;
      saveBlockedVideos();
      removeBlockedVideos();
      log(`[>] Blocked video: ${title} (${id})`);
    });

    menu.appendChild(vBtn);
    //log(`[+] Injected block video button for id "${videoInfo.id}"`);

    // Inject "Whitelist Channel" button
    const wBtn = document.createElement('yt-list-item-view-model');
    wBtn.className = 'detube-whitelist-button';
    wBtn.setAttribute('role', 'menuitem');
    wBtn.setAttribute('tabindex', '0');

    const wLabelDiv = document.createElement('div');
    wLabelDiv.className = 'yt-list-item-view-model-wiz__label yt-list-item-view-model-wiz__container yt-list-item-view-model-wiz__container--compact yt-list-item-view-model-wiz__container--tappable yt-list-item-view-model-wiz__container--in-popup';

    const wTextWrapper = document.createElement('div');
    wTextWrapper.className = 'yt-list-item-view-model-wiz__text-wrapper';

    const wTitleWrapper = document.createElement('div');
    wTitleWrapper.className = 'yt-list-item-view-model-wiz__title-wrapper';

    const wSpan = document.createElement('span');
    wSpan.className = 'yt-core-attributed-string yt-list-item-view-model-wiz__title';
    wSpan.setAttribute('role', 'text');
    wSpan.textContent = `\u00A0⚪\u00A0\u00A0 Whitelist ${channel}`;

    wTitleWrapper.appendChild(wSpan);
    wTextWrapper.appendChild(wTitleWrapper);
    wLabelDiv.appendChild(wTextWrapper);
    wBtn.appendChild(wLabelDiv);

    wBtn.addEventListener('click', () => {
      whitelisted.add(channel);
      saveWhitelist();
      if (whitelistModeEnabled) {
        // Recompute view when whitelist is active
        tagAllVideos();
        removeBlockedVideos();
      }
      log(`[>] Whitelisted channel: ${channel}`);
    });

    menu.appendChild(wBtn);
    //log(`[+] Injected whitelist button for "${channel}"`);
  }

  // Inject items into the search results popup menu (tp-yt-paper-listbox)
  function injectSearchMenuButtons(channel, renderer) {
    const list = getOpenPopupList();
    if (!list) {
      log('[!] Search popup listbox not found for injection');
      return;
    }

    // Clean previously injected items (idempotent)
    list.querySelectorAll('.detube-menu-item').forEach(el => el.remove());

    // Build a plain paper item for robust rendering inside the popup
    const createPaperItem = (label, onClick, kind) => {
      // Host wrapper like native items
      const host = document.createElement('ytd-menu-service-item-renderer');
      host.className = 'style-scope ytd-menu-popup-renderer detube-menu-item';
      try { host.dataset.detubeLabel = label; } catch(_) {}
      try { if (kind) host.dataset.detubeKind = kind; } catch(_) {}

      const paper = document.createElement('tp-yt-paper-item');
      paper.className = 'style-scope ytd-menu-service-item-renderer';
      paper.setAttribute('role', 'option');
      paper.setAttribute('tabindex', '0');
      paper.setAttribute('aria-disabled', 'false');
      paper.setAttribute('style-target', 'host');
      // Ensure visible sizing even if YouTube styles change
      paper.style.minHeight = '40px';
      paper.style.display = 'flex';
      paper.style.alignItems = 'center';
      paper.style.padding = '0 16px';
      paper.style.cursor = 'pointer';
      try { paper.setAttribute('aria-label', label); } catch(_) {}

      const text = document.createElement('yt-formatted-string');
      text.id = 'label';
      text.className = 'style-scope ytd-menu-service-item-renderer';
      text.textContent = label;
      try { text.removeAttribute('is-empty'); } catch(_) {}
      paper.appendChild(text);

      const handler = (ev) => {
        ev.stopPropagation();
        try { onClick(); } catch(_) {}
        // Try to close the popup after action
        try {
          const dropdown = host.closest('tp-yt-iron-dropdown');
          if (dropdown && typeof dropdown.close === 'function') {
            dropdown.close();
          } else if (dropdown) {
            // Simulate Escape to close
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
          }
        } catch(_) {}
      };
      paper.addEventListener('click', handler);
      host.addEventListener('click', handler);
      host.appendChild(paper);
      return host;
    };

    // Resolve video info once, tied to provided renderer (fallback to global)
    const ref = renderer || lastRenderer;
    const videoInfo = ref ? getVideoInfo(ref) : { id: '', title: '' };

    // Block Channel
    const blockChannelItem = createPaperItem(`\u00A0🚫\u00A0\u00A0 Block ${channel}`, () => {
      blocked.add(channel);
      saveBlocked();
      applyCSS();
      tagAllVideos();
      log(`[>] Blocked channel: ${channel}`);
    }, 'blockChannel');

    // Block This Video (if id available)
    let blockVideoItem = null;
    if (videoInfo.id) {
      blockVideoItem = createPaperItem('\u00A0🚧\u00A0\u00A0 Block This Video', () => {
        const id = videoInfo.id;
        const title = videoInfo.title || id;
        blockedVideos[id] = title;
        saveBlockedVideos();
        removeBlockedVideos();
        log(`[>] Blocked video: ${title} (${id})`);
      }, 'blockVideo');
    } else {
      log('[!] Could not determine video id for Block Video (search)');
    }

    // Whitelist Channel
    const whitelistItem = createPaperItem(`\u00A0⚪\u00A0\u00A0 Whitelist ${channel}`, () => {
      whitelisted.add(channel);
      saveWhitelist();
      if (whitelistModeEnabled) {
        tagAllVideos();
        removeBlockedVideos();
      }
      log(`[>] Whitelisted channel: ${channel}`);
    }, 'whitelist');

    // Append to listbox (keep order consistent with other menus)
    list.appendChild(blockChannelItem);
    if (blockVideoItem) list.appendChild(blockVideoItem);
    list.appendChild(whitelistItem);

    // Late hydration of labels to ensure they render after YT icons set up
    scheduleSearchMenuLabelHydration(list);
    //log(`[+] Injected search menu buttons for "${channel}"`);
  }

  function hydrateDetubeSearchMenuLabels(list) {
    try {
      const items = list.querySelectorAll('ytd-menu-service-item-renderer.detube-menu-item');
      items.forEach(host => {
        const desired = host.dataset && host.dataset.detubeLabel ? String(host.dataset.detubeLabel) : '';
        const paper = host.querySelector('tp-yt-paper-item') || host;
        let labelEl = host.querySelector('yt-formatted-string#label') || host.querySelector('yt-formatted-string');
        if (!labelEl) {
          labelEl = document.createElement('yt-formatted-string');
          labelEl.id = 'label';
          labelEl.className = 'style-scope ytd-menu-service-item-renderer';
          paper.appendChild(labelEl);
        }
        if (desired) labelEl.textContent = desired;
        try { labelEl.removeAttribute('is-empty'); } catch(_) {}
        try { paper.setAttribute('aria-label', desired || labelEl.textContent || ''); } catch(_) {}
      });
    } catch(_) {}
  }

  function scheduleSearchMenuLabelHydration(list) {
    let tries = 0;
    const maxTries = 12; // ~600ms
    const attempt = () => {
      const iconReady = list.querySelector('span.yt-icon-shape.style-scope.yt-icon.yt-spec-icon-shape') || list.querySelector('yt-icon');
      if (iconReady || tries >= maxTries) {
        hydrateDetubeSearchMenuLabels(list);
      } else {
        tries++;
        setTimeout(attempt, 50);
      }
    };
    requestAnimationFrame(attempt);
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
    // Best way to manage is to direct away to local page
    // Generate HTML for blocked channels overview
    const blockedArray = [...blocked].sort();
    const videosArray = Object.entries(blockedVideos)
      .map(([id, title]) => ({ id, title: String(title || id) }))
      .sort((a, b) => a.title.localeCompare(b.title));
    const channelItems = blockedArray.map(channel => `
      <div class="channel-item" data-channel="${channel.replace(/"/g, '&quot;')}">
        <span class="channel-name">${channel.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
        <button class="unblock-btn" onclick="unblockChannel('${channel.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `).join('');
    const whitelistArray = [...whitelisted].sort();
    const whitelistItems = whitelistArray.map(channel => `
      <div class="channel-item" data-wchannel="${channel.replace(/"/g, '&quot;')}">
        <span class="channel-name">${channel.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
        <button class="unblock-btn" onclick="removeFromWhitelist('${channel.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `).join('');
    const videoItems = videosArray.map(v => `
      <div class="channel-item" data-video-id="${v.id.replace(/"/g, '&quot;')}">
        <span class="channel-name">${v.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
        <button class="unblock-btn" onclick="unblockVideo('${v.id.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `).join('');
    const patternsArray = blockedTitlePatterns.slice();
    const patternItems = patternsArray.map(patternObj => {
    const displayText = (patternObj.scope !== 'both' ? `[${patternObj.scope}]\u00A0\u00A0` : '[both]\u00A0\u00A0') + patternObj.pattern;
    return `
    <div class="channel-item" data-pattern="${patternObj.pattern.replace(/"/g, '&quot;')}" data-scope="${patternObj.scope}">
      <span class="channel-name">${displayText.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
      <button class="unblock-btn" onclick="removePattern(decodeURIComponent('${encodeURIComponent(patternObj.pattern)}'), '${patternObj.scope}')">
        <span>✕</span>
      </button>
    </div>`}).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>deTube Blocker</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        h2 {
            margin-bottom: 10px;
        }

        @media (prefers-color-scheme: light) {
            body {
                background: linear-gradient(135deg, #f2f2f2 0%, #ffffff 100%);
            }

            .container {
                background: rgba(255, 255, 255, 0.95);
                color: #2c3e50;
            }

            #pattern-scope {
                background: #f5f5f5;
                border: 1px solid #f5f5f5;
                color: #2e2e2e;
            }

            #pattern-input {
                background: #f5f5f5;
                border: 1px solid #f5f5f5;
                color: #2e2e2e;
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

            #pattern-scope {
                background: #2e2e2e;
                border: 1px solid #2e2e2e;
                color: #f5f5f5;
            }

            #pattern-input {
                background: #2e2e2e;
                border: 1px solid #2e2e2e;
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

        input {
            background: #2e2e2e;
            color: #f5f5f5;
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
            padding: 20px 10px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .controls .btn {
            flex: 0 0 auto;
            white-space: nowrap;
        }

        .controls .pattern-row {
            flex: 1 1 100%;
            display: flex;
            gap: 5px;
            align-items: center;
        }

        /* Toggle switch */
        .toggle {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 13px;
            padding: 10px 8px;
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
            padding: 10px 20px;
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
            padding-top: 2px;
            padding-bottom: 2px;
            padding-left: 20px;
            padding-right: 10px;
            margin-bottom: 5px;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            border-left: 4px solid #ee5a24;
            max-height: 80px;
            overflow: hidden;
            animation: detube-appear 220ms ease;
        }

        @keyframes detube-appear {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: none; }
        }

        .channel-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .footer-link {
            color: inherit;
            text-decoration: none;
        }

        .footer-link:hover {
            text-decoration: underline;
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

        #pattern-scope {
            padding: 7px 8px;
            border-radius: 5px;
            width: 120px;
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
            padding: 40px 20px;
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
            <h1>🚫 deTube Blocker</h1>
        </div>
        <div class="controls">
            <button class="btn" onclick="refreshPage()">Refresh</button>
            <button class="btn danger" onclick="clearAll()" ${(blockedArray.length + videosArray.length) === 0 ? 'disabled' : ''}>
                Clear (${blockedArray.length + videosArray.length + patternsArray.length})
            </button>
            <div class="toggle" title="Toggle Blocking of Short-Form Content">
              <label class="switch">
                <input id="shorts-toggle" type="checkbox" ${shortsEnabled ? 'checked' : ''} />
                <span class="slider"></span>
              </label>
              <span>Block Shorts</span>
            </div>
            <div class="toggle" title="Toggle Whitelist Mode">
              <label class="switch">
                <input id="whitelist-toggle" type="checkbox" ${whitelistModeEnabled ? 'checked' : ''} />
                <span class="slider"></span>
              </label>
              <span>Whitelist Mode</span>
            </div>
            <button class="btn" onclick="exportData()" title="Export the current state of the blocker to a JSON file">Export</button>
            <button class="btn" onclick="triggerImport()" title="Import the state of the blocker from a JSON file">Import</button>
            <input id="import-file" type="file" accept="application/json" style="display:none" />
            ${whitelistModeEnabled ? '' : `
            <div class="pattern-row" style="flex:1; min-width:250px; display:flex; gap:5px; align-items:center;">
              <input id="pattern-input" type="text" placeholder="Block via Regex (JavaScript)" style="flex:1; padding:8px; border-radius:5px;">
              <select id="pattern-scope" title="Toggle the scope to apply the pattern to">
                  <option value="channel">Channels</option>
                  <option value="title" selected>Video Titles</option>
                  <option value="both">Both</option>
              </select>
              <button class="btn" onclick="addPattern()">Add</button>
            </div>`}
        </div>

        <div class="channels-list">
            ${whitelistModeEnabled ? `
              <h2 style=\"padding: 0 20px;\">Whitelist Channels (${whitelistArray.length})</h2>
              ${whitelistArray.length === 0 ? `
                  <div class=\"empty-state\">
                      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">
                          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z\"/>
                      </svg>
                      <h3>No whitelisted channels yet!</h3>
                      <p>Use the three-dot menu on a video to select \"Whitelist [Channel]\"</p>
                  </div>
              ` : whitelistItems}
            ` : `
              <h2 style=\"padding: 0 20px;\">Blocked Channels (${blockedArray.length})</h2>
              ${blockedArray.length === 0 ? `
                  <div class=\"empty-state\">
                      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">
                          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z\"/>
                      </svg>
                      <h3>No blocked channels yet!</h3>
                      <p>Use the three-dot menu on a video to select \"Block Channel\"</p>
                  </div>
              ` : channelItems}
              <hr style=\"margin: 10px 0; border: none; border-top: 1px solid rgba(0,0,0,0.1);\" />
              <h2 style=\"padding: 0 20px;\">Blocked Videos (${videosArray.length})</h2>
              ${videosArray.length === 0 ? `
                  <div class=\"empty-state\">
                      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">
                          <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z\"/>
                      </svg>
                      <h3>No blocked videos yet!</h3>
                      <p>Use the three-dot menu on a video to select \"Block Video\"</p>
                  </div>
              ` : videoItems}
              <hr style=\"margin: 10px 0; border: none; border-top: 1px solid rgba(0,0,0,0.1);\" />
              <h2 style=\"padding: 0 20px;\">Blocked Title Patterns (${patternsArray.length})</h2>
              ${patternsArray.length === 0 ? `
                <div class=\"empty-state\">
                  <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">
                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z\"/>
                  </svg>
                  <h3>No title patterns yet!</h3>
                  <p>Enter a regex above to block matching titles</p>
                </div>
              ` : patternItems}
            `}
        </div>
        <div class="footer" style="display:flex; justify-content:space-between; align-items:center; padding: 12px 20px;">
          <span>deTube Blocker ${version}</span>
          <span><a class="footer-link" href="https://github.com/polymegos/deTube_channel_blocker" target="_blank">Help & Feedback</a></span>
          <span><a class="footer-link" href="https://greasyfork.org/scripts/545112-detube-disable-ai-audio" target="_blank">Disable AI Translations</a></span>
        </div>
    </div>

    <script>
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

        function unblockChannel(channelName) {
            if (!confirm('Are you sure you want to unblock "' + channelName + '"?')) return;
            const item = document.querySelector('.channel-item[data-channel="' + channelName.replace(/"/g, '\\"') + '"]');
            const finish = () => {
                window.name = JSON.stringify({ action: 'unblock', channel: channelName });
                // Refresh only after the animation completed and action was posted
                setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
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
        function unblockVideo(videoId) {
            if (!confirm('Unblock this video?')) return;
            const item = document.querySelector('.channel-item[data-video-id="' + videoId.replace(/"/g, '\\"') + '"]');
            const finish = () => {
                window.name = JSON.stringify({ action: 'unblockVideo', videoId });
                setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
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

        function clearAll() {
            if (!confirm('Are you sure you want to clear all ${blockedArray.length} channels, ${videosArray.length} videos and ${patternsArray.length} patterns? This cannot be undone.')) return;
            const items = Array.from(document.querySelectorAll('.channel-item'));
            if (items.length === 0) {
                window.name = JSON.stringify({ action: 'clearAll' });
                return;
            }
            items.forEach((el, i) => setTimeout(() => el.classList.add('removing'), i * 25));
            const totalAnimMs = 300 + items.length * 25; // match CSS transition + stagger
            setTimeout(() => {
                // Post action after animations have (mostly) completed
                window.name = JSON.stringify({ action: 'clearAll' });
                // Then refresh the UI slightly after to allow parent to process
                setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
            }, totalAnimMs);
        }

        function clearAllWhitelist() {
            if (!confirm('Are you sure you want to clear all ${whitelistArray.length} whitelisted channels? This cannot be undone.')) return;
            const items = Array.from(document.querySelectorAll('.channel-item'));
            if (items.length === 0) {
                window.name = JSON.stringify({ action: 'clearAllWhitelist' });
                return;
            }
            items.forEach((el, i) => setTimeout(() => el.classList.add('removing'), i * 25));
            const totalAnimMs = 300 + items.length * 25;
            setTimeout(() => {
                window.name = JSON.stringify({ action: 'clearAllWhitelist' });
                setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
            }, totalAnimMs);
        }

        function exportData() {
          try {
            const payload = {
              version: 'detube ${version}',
              blockedNames: ${JSON.stringify(blockedArray)},
              blockedVideos: ${JSON.stringify(blockedVideos)},
              blockedTitlePatterns: ${JSON.stringify(patternsArray)},
              whitelisted: ${JSON.stringify(whitelistArray)}
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
                // Accept either legacy array, or object with channels/videos/patterns
                let names = [];
                let videos = {};
                let patterns = [];
                let whitelist = [];
                if (Array.isArray(data)) {
                  names = data;
                } else if (data && typeof data === 'object') {
                  if (Array.isArray(data.blockedNames)) names = data.blockedNames;
                  if (data.blockedVideos && typeof data.blockedVideos === 'object') videos = data.blockedVideos;
                  if (Array.isArray(data.blockedTitlePatterns)) {
                    // Handle both old format (strings) and new format (objects)
                    patterns = data.blockedTitlePatterns.map(p => {
                      if (typeof p === 'string') {
                        return { pattern: p, scope: 'both' };
                      } else if (typeof p === 'object' && p.pattern) {
                        return {
                          pattern: p.pattern,
                          scope: p.scope || 'both'
                        };
                      }
                      return null;
                    }).filter(p => p !== null);
                  }
                  if (Array.isArray(data.whitelisted)) whitelist = data.whitelisted.filter(x => typeof x === 'string');
                }
                if (!Array.isArray(names)) throw new Error('Invalid format for channels');
                window.name = JSON.stringify({ action: 'importData', data: { blockedNames: names, blockedVideos: videos, blockedTitlePatterns: patterns, whitelisted: whitelist } });
                // Ask parent to rebuild UI
                try { refreshPage(); } catch(_) {}
              } catch (e) {
                try { alert('Import failed: ' + e); } catch(_){ }
              }
            };
            reader.readAsText(file);
          };
          input.click();
        }

        // Shorts + Whitelist toggle handling
        document.addEventListener('DOMContentLoaded', () => {
            const t = document.getElementById('shorts-toggle');
            if (t) {
                t.addEventListener('change', () => {
                    window.name = JSON.stringify({ action: 'toggleShorts', enabled: t.checked });
                });
            }
            const w = document.getElementById('whitelist-toggle');
            if (w) {
                w.addEventListener('change', () => {
                    window.name = JSON.stringify({ action: 'toggleWhitelist', enabled: w.checked });
                });
            }
        });

        function addPattern() {
          const input = document.getElementById('pattern-input');
          const scopeSelect = document.getElementById('pattern-scope');
          const val = (input.value || '').trim();
          const scope = scopeSelect.value;

          if (!val) return alert('Please enter a pattern');
          try {
            new RegExp(val); // validate
          } catch (e) {
            return alert('Invalid regex: ' + e.message);
          }
          window.name = JSON.stringify({ action: 'addPattern', pattern: val, scope: scope });
          input.value = '';
          try { refreshPage(); } catch(_) {}
        }

        function removePattern(pattern, scope = 'both') {
          if (!confirm('Remove pattern "' + pattern + '"?')) return;
          // Find item by comparing dataset to avoid CSS escaping pitfalls
          const item = Array.from(document.querySelectorAll('.channel-item'))
            .find(el => (el.dataset && el.dataset.pattern) === String(pattern) && (el.dataset.scope || 'both') === scope);
          const finish = () => {
            window.name = JSON.stringify({ action: 'removePattern', pattern, scope });
            setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
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

        function removeFromWhitelist(channelName) {
            if (!confirm('Remove "' + channelName + '" from whitelist?')) return;
            const item = document.querySelector('.channel-item[data-wchannel="' + channelName.replace(/"/g, '\\"') + '"]');
            const finish = () => {
                window.name = JSON.stringify({ action: 'removeFromWhitelist', channel: channelName });
                setTimeout(() => { try { refreshPage(); } catch(_) {} }, 150);
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
            tagAllVideos();
            log(`[>] Unblocked channel: ${action.channel}`);
            newTab.window.name = ''; // Clear action
          } else if (action.action === 'unblockVideo' && action.videoId) {
            try { delete blockedVideos[action.videoId]; } catch(_) {}
            saveBlockedVideos();
            removeBlockedVideos();
            log(`[>] Unblocked video: ${action.videoId}`);
            newTab.window.name = '';
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
              // Merge videos
              const vids = action.data.blockedVideos && typeof action.data.blockedVideos === 'object' ? action.data.blockedVideos : {};
              let vAdded = 0;
              for (const [vid, title] of Object.entries(vids)) {
                if (!vid || typeof vid !== 'string') continue;
                if (!blockedVideos[vid]) { blockedVideos[vid] = String(title || vid); vAdded++; }
              }
              // Merge whitelisted channels
              const wlist = Array.isArray(action.data.whitelisted) ? action.data.whitelisted.filter(x => typeof x === 'string') : [];
              let wAdded = 0, wDupes = 0;
              for (const w of wlist) {
                if (whitelisted.has(w)) { wDupes++; continue; }
                whitelisted.add(w); wAdded++;
              }
              // Merge title patterns
              let pats = [];
              if (Array.isArray(action.data.blockedTitlePatterns)) {
                  // Handle both old format (strings) and new format (objects)
                  pats = action.data.blockedTitlePatterns.map(p => {
                  if (typeof p === 'string') {
                      return { pattern: p, scope: 'both' };
                  } else if (typeof p === 'object' && p.pattern) {
                      return {
                      pattern: p.pattern,
                      scope: p.scope || 'both'
                      };
                  }
                  return null;
                  }).filter(p => p !== null);
              }
              
              let pAdded = 0, pDupes = 0;
              for (const patObj of pats) {
                  // Check if pattern with same scope already exists
                  const exists = blockedTitlePatterns.some(p => 
                  p.pattern === patObj.pattern && p.scope === patObj.scope
                  );
                  
                  if (!exists) {
                  blockedTitlePatterns.push(patObj);
                  pAdded++;
                  } else {
                  pDupes++;
                  }
              }
              saveBlocked();
              saveBlockedVideos();
              saveWhitelist();
              saveBlockedTitlePatterns();
              applyCSS();
              tagAllVideos();
              removeBlockedVideos();
              //log(`[>] Import merged: +${added} channels, +${vAdded} videos, +${pAdded} patterns, +${wAdded} whitelisted; dupes channels ${duplicates}, patterns ${pDupes}, whitelist ${wDupes}; invalid ${invalid}`);
            } catch (e) {
              log('Import error:', e);
            }
            // Ask the manager page to refresh
            try { newTab.window.name = JSON.stringify({ action: 'refreshManager' }); } catch(_) {}
          } else if (action.action === 'clearAll') {
            blocked.clear();
            blockedVideos = {};
            blockedTitlePatterns = [];
            saveBlocked();
            saveBlockedVideos();
            saveBlockedTitlePatterns();
            applyCSS();
            tagAllVideos();
            removeBlockedVideos();
            log('[>] Cleared all blocked channels and videos');
            newTab.window.name = ''; // Clear action again
          } else if (action.action === 'clearAllWhitelist') {
            whitelisted.clear();
            saveWhitelist();
            tagAllVideos();
            removeBlockedVideos();
            log('[>] Cleared whitelist');
            newTab.window.name = '';
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
          } else if (action.action === 'toggleWhitelist') {
            whitelistModeEnabled = !!action.enabled;
            saveWhitelistMode();
            // Recompute filtering and CSS
            applyCSS();
            tagAllVideos();
            removeBlockedVideos();
            log(`[>] Whitelist mode: ${whitelistModeEnabled ? 'ENABLED' : 'DISABLED'}`);
            // Ask manager page to refresh so the correct list and controls are shown
            try { newTab.window.name = JSON.stringify({ action: 'refreshManager' }); } catch(_) {}
          } else if (action.action === 'addPattern' && action.pattern) {
              const newPattern = {
                  pattern: action.pattern,
                  scope: action.scope || 'both'
              };
              
              // Check if pattern with same scope already exists
              const exists = blockedTitlePatterns.some(p => 
              p.pattern === newPattern.pattern && p.scope === newPattern.scope
              );
              
              if (!exists) {
                  blockedTitlePatterns.push(newPattern);
                  saveBlockedTitlePatterns();
                  removeBlockedVideos();
                  log(`[>] Added title pattern: ${action.pattern} (${action.scope || 'both'})`);
              }
              // Refresh manager to show the newly added pattern (and allow any UI animation)
              try { newTab.window.name = JSON.stringify({ action: 'refreshManager' }); } catch(_) {}
          } else if (action.action === 'removePattern' && action.pattern) {
              const scope = action.scope || 'both';
              blockedTitlePatterns = blockedTitlePatterns.filter(p => 
              !(p.pattern === action.pattern && p.scope === scope)
              );
              saveBlockedTitlePatterns();
              removeBlockedVideos();
              log(`[>] Removed title pattern: ${action.pattern} (${scope})`);
              newTab.window.name = '';
          } else if (action.action === 'removeFromWhitelist' && action.channel) {
            whitelisted.delete(action.channel);
            saveWhitelist();
            tagAllVideos();
            removeBlockedVideos();
            log(`[>] Removed from whitelist: ${action.channel}`);
            newTab.window.name = '';
          }
        }
      } catch (e) {
        // Cross-origin errors are really to be expected here ...
      }
    }, 500);

    // Stop checking after ~5 minutes
    setTimeout(() => {
      clearInterval(checkForActions);
      URL.revokeObjectURL(url);
    }, 300000);
  }

  function observeNewVideos() {
    // Debounce processing to avoid excessive calls
    let processingTimeout = null;
    
    const observer = new MutationObserver(mutations => {
      // Clear existing timeout to debounce
      if (processingTimeout) {
        clearTimeout(processingTimeout);
      }
      
      // Schedule processing with debounce
      processingTimeout = setTimeout(() => {
        let newVideosFound = false;
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            // More specific selectors for better performance
            if (node.matches(VIDEO_SELECTORS.join(',')) || 
                node.querySelector && node.querySelector(VIDEO_SELECTORS.join(','))) {
              newVideosFound = true;
              break;
            }
          }
          if (newVideosFound) break;
        }
        
        if (newVideosFound) {
          // Only process newly added videos instead of all videos
          for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
              if (!(node instanceof HTMLElement)) continue;
              if (node.matches(VIDEO_SELECTORS.join(','))) {
                if (tagVideo(node)) {
                  // Apply filtering to just this video
                  filterVideo(node);
                }
              } else if (node.querySelector) {
                // Process child videos
                const videos = node.querySelectorAll(VIDEO_SELECTORS.join(','));
                for (const video of videos) {
                  if (tagVideo(video)) {
                    filterVideo(video);
                  }
                }
              }
            }
          }
        }
      }, 100); // 100ms debounce
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Add filterVideo function for single video processing
    function filterVideo(video) {
      // Channel-based removal
      const name = video.dataset.detube && video.dataset.detube.trim();
      if (whitelistModeEnabled) {
        // In whitelist mode: remove anything NOT in the whitelist
        if (!name || !whitelisted.has(name)) { video.remove(); return; }
      } else {
        if (name && blocked.has(name)) { video.remove(); return; }
      }
      // Video-based removal
      const info = getVideoInfo(video);
      const id = info.id;
      if (!whitelistModeEnabled && id && blockedVideos[id]) { video.remove(); return; }
      // Title/channel-regex based removal
      const title = (video.dataset.detubeVidTitle || info.title || '').trim();
      const channelName = (video.dataset.detube || '').trim();
      if (!whitelistModeEnabled && blockedTitlePatterns.length > 0) {
        // Reuse regex cache from improvement 4
        if (!this.regexCache) this.regexCache = new Map();
        
        for (const patternObj of blockedTitlePatterns) {
          try {
            const cacheKey = patternObj.pattern;
            let re = this.regexCache.get(cacheKey);
            if (!re) {
              re = new RegExp(patternObj.pattern, 'i');
              this.regexCache.set(cacheKey, re);
            }
            
            const scope = patternObj.scope || 'both';
            let shouldRemove = false;
            
            if (scope === 'channel' && channelName && re.test(channelName)) {
              shouldRemove = true;
            } else if (scope === 'title' && title && re.test(title)) {
              shouldRemove = true;
            } else if (scope === 'both' && (
              (title && re.test(title)) || 
              (channelName && re.test(channelName))
            )) {
              shouldRemove = true;
            }
            
            if (shouldRemove) {
              video.remove();
              return;
            }
          } catch (err) {
            // invalid pattern, doesn't matter, skip
          }
        }
      }
    }
  }

  // Handler for three-dot menu clicks
  const handleThreeDotClick = (renderer) => {
    if (!renderer) return;

    // Re-tag renderer with fresh channel name
    if (tagVideo(renderer)) {
      lastRenderer = renderer;
      // log('Three-dot clicked for:', renderer.dataset.detube);
    } else {
      log('Could not tag renderer.');
    }
  };

  // Handle clicks on the original three-dot menu button
  document.body.addEventListener('click', e => {
    const dot = e.target.closest('div.yt-spec-touch-feedback-shape__fill');
    if (!dot) return;
    const renderer = dot.closest('yt-lockup-view-model, ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer, ytd-rich-item-renderer');
    handleThreeDotClick(renderer);
    // Proactively schedule search popup injection
    try {
      if (renderer && tagVideo(renderer)) {
        const ch = renderer.dataset.detube;
        if (ch) { scheduleSearchMenuInjection(ch, renderer); scheduleClickLabelInit(ch, renderer); }
      }
    } catch(_) {}
  }, true);

  // Handle clicks on the new three-dot menu button
  document.body.addEventListener('click', e => {
    const button = e.target.closest('button.style-scope.yt-icon-button');
    if (!button) return;

    // Check if this is a three-dot menu button by its icon or by being inside ytd-menu-renderer
    let isThreeDot = false;
    const icon = button.querySelector('yt-icon');
    if (icon && icon.getAttribute('icon')?.includes('more_vert')) isThreeDot = true;
    if (!isThreeDot && button.id === 'button' && button.closest('ytd-menu-renderer')) isThreeDot = true;
    if (!isThreeDot) return;

    const renderer = button.closest('yt-lockup-view-model, ytd-video-renderer, ytd-compact-video-renderer, ytd-grid-video-renderer, ytd-rich-item-renderer');
    handleThreeDotClick(renderer);
    // Proactively schedule search popup injection
    try {
      if (renderer && tagVideo(renderer)) {
        const ch = renderer.dataset.detube;
        if (ch) { scheduleSearchMenuInjection(ch, renderer); scheduleClickLabelInit(ch, renderer); }
      }
    } catch(_) {}
  }, true);

  (async () => {
    await loadBlocked();
    await loadBlockedVideos();
    await loadShortsSetting();
    await loadBlockedTitlePatterns();
    await loadWhitelist();

    tagAllVideos();
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
  })();

})();
