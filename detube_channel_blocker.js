// ==UserScript==
// @name            deTube Block Channels
// @name:el         deTube Αποκλεισμός καναλιών
// @name:es         deTube Bloquear canales
// @name:fr         deTube Bloquer des chaînes
// @name:de         deTube Kanäle blockieren
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
// @name:id         deTube Blokir channel
// @name:ms         deTube Sekat saluran
// @name:uk         deTube Заблокувати канали
// @name:cs         deTube Blokovat kanály
// @name:hu         deTube Csatornák blokkolása
// @name:ro         deTube Blochează canale
// @name:bg         deTube Блокирай канали
// @name:fa         deTube مسدود کردن کانال‌ها
// @name:bn         deTube চ্যানেল ব্লক করুন
// @name:sw         deTube Zuia vituo
// @name:ur         deTube چینلز کو بلاک کریں
// @name:tk         deTube Kanallary petikle
// @version         0.2.1 Dev
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
// @description:de  Fügt YT‑Videomenüs die Optionen „Kanal blockieren“, „Video blockieren“ und „Kanal auf Whitelist setzen“ hinzu. Blendet automatisch Videos blockierter Kanäle und einzelne Videos aus. Unterstützt auch das Blockieren von Shorts.
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
// @description:id  Menambahkan opsi “Blokir Channel”, “Blokir Video”, dan “Whitelist Channel” ke menu video YT. Secara otomatis menyembunyikan video dari channel dan video yang diblokir. Juga memblokir Shorts.
// @description:ms  Menambah pilihan “Sekat Saluran”, “Sekat Video”, dan “Masukkan Saluran ke Senarai Putih” pada menu video YT. Menyembunyikan video daripada saluran dan video yang disekat secara automatik. Juga menyekat Shorts.
// @description:uk  Додає в меню відео YT опції «Заблокувати канал», «Заблокувати відео» та «Додати канал до білого списку». Автоматично приховує відео з заблокованих каналів та окремих відео. Також блокує Shorts.
// @description:cs  Přidává do nabídky videí YT možnosti „Blokovat kanál“, „Blokovat video“ a „Přidat kanál na whitelist“. Automaticky skrývá videa z blokovaných kanálů a jednotlivých videí. Blokuje také Shorts.
// @description:hu  Hozzáadja a YT videómenükhöz a „Csatorna blokkolása”, „Videó blokkolása” és „Csatorna engedélyezése” lehetőségeket. Automatikusan elrejti a blokkolt csatornák és videók tartalmát. A Shorts-okat is blokkolja.
// @description:ro  Adaugă în meniurile video YT opțiunile „Blochează canalul”, „Blochează videoclipul” și „Adaugă canal pe lista albă”. Ascunde automat videoclipurile de la canalele și videoclipurile blocate. Blochează și Shorts.
// @description:bg  Добавя в менюто на YT видео опциите „Блокирай канал“, „Блокирай видео“ и „Добави канал в белия списък“. Автоматично скрива видеа от блокирани канали и отделни видеа. Също блокира Shorts.
// @description:fa  گزینه‌های «مسدود کردن کانال»، «مسدود کردن ویدیو» و «افزودن کانال به لیست سفید» را به منوهای ویدیوی YT اضافه می‌کند. ویدیوهای کانال‌های مسدودشده و ویدیوهای مسدودشده را به‌طور خودکار مخفی می‌کند. همچنین Shorts را مسدود می‌کند.
// @description:bn  YT ভিডিও মেনুতে "চ্যানেল ব্লক করুন", "ভিডিও ব্লক করুন" এবং "চ্যানেলকে হোয়াইটলিস্টে যুক্ত করুন" বিকল্প যোগ করে। ব্লক করা চ্যানেল এবং ভিডিও স্বয়ংক্রিয়ভাবে লুকিয়ে রাখে। Shorts-ও ব্লক করে।
// @description:sw  Huongeza chaguo za “Zuia Kituo”, “Zuia Video”, na “Ongeza Kituo kwenye Orodha Nyeupe” kwenye menyu za video za YT. Huficha kiotomatiki video kutoka vituo na video vilivyokuwa vimezuiwa. Pia huzuia Shorts.
// @description:tk  YT wideo menýularyna "Kanaly petikle", "Wideony petikle" we "Kanaly ak sanawa goş" opsiýalaryny goşýar. Petiklenen kanallardan we wideolardan wideo awtomatiki gizlener. Shorts hem petiklenýär.
// @description:ur  YT ویڈیو مینو میں "چینل کو بلاک کریں"، "ویڈیو کو بلاک کریں" اور "چینل کو وائٹ لسٹ میں شامل کریں" کے اختیارات شامل کرتا ہے۔ بلاک شدہ چینلز اور ویڈیوز کو خودکار طور پر چھپاتا ہے۔ Shorts کو بھی بلاک کرتا ہے۔
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
// @grant           GM_addValueChangeListener
// @run-at          document-end
// @compatible      firefox
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
  'use strict';
  const version = "0.2.1 Dev";

  // Channel blocker persistence
  const STORAGE_KEY = 'detube_blocked_channels_store';
  let blocked = new Map(); // Store channel names with timestamps
  let lastRenderer = null;

  // Whitelist persistence
  const WHITELIST_STORAGE_KEY = 'detube_whitelist_channels_store';
  let whitelisted = new Set();
  const WHITELIST_MODE_STORAGE_KEY = 'detube_whitelist_mode_enabled';
  let whitelistModeEnabled = false;

  // Update notification
  let updateNotificationShown = false;

  // Video blocker persistence
  const VIDEOS_STORAGE_KEY = 'detube_blocked_videos_store_v1';
  let blockedVideos = new Map(); // Store video IDs with titles and timestamps

  // Regex persistence
  const REGEX_STORAGE_KEY = 'detube_blocked_title_patterns';
  let blockedTitlePatterns = [];

  // Shorts blocker persistence
  const SHORTS_STORAGE_KEY = 'detube_shorts_block_enabled';
  let shortsEnabled = false;
  let shortsUrlObserver = null;
  let shortsDomObserver = null;

  const log = (...a) => console.log('%c[deTube Block Channels]', 'color: green; font-weight: bold;', ...a);

  // Listen for storage changes to sync blocklist across tabs
  GM_addValueChangeListener(STORAGE_KEY, async (name, oldValue, newValue, remote) => {
    if (remote) {  // Only handle changes from other tabs
      try {
        const data = JSON.parse(newValue || '{}');
        if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
          blocked = new Map(Object.entries(data));
        } else if (Array.isArray(data)) {
          // Handle legacy format
          blocked = new Map(data.map(channel => [channel, Date.now()]));
        } else {
          blocked = new Map();
        }
        // Re-apply blocking rules
        removeBlockedEntries();
      } catch (e) {
        log('Error syncing blocklist:', e);
      }
    }
  });

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
    '.yt-lockup-metadata-view-model__title a',
    'span.yt-core-attributed-string.yt-content-metadata-view-model__metadata-text',
    // Homepage
    '.yt-lockup-metadata-view-model__metadata .yt-core-attributed-string__link',
    '.yt-content-metadata-view-model__metadata-row .yt-core-attributed-string__link',
    // Search
    '#text-container a.yt-simple-endpoint.style-scope.yt-formatted-string',
    // Fallbacks
    'yt-formatted-string a',
    'yt-formatted-string',
    '.yt-lockup-metadata-view-model__title',
    '.yt-lockup-metadata-view-model',
  ];

  const TITLE_SELECTORS = [
    'a#video-title',
    'h3 .yt-lockup-metadata-view-model__title span.yt-core-attributed-string',
    '.yt-lockup-view-model__content-image span.yt-core-attributed-string',
    'span.yt-core-attributed-string[role="text"]',
    'a.yt-lockup-metadata-view-model__title span.yt-core-attributed-string',
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
    const raw = await GM_getValue(STORAGE_KEY, '{}');
    try {
      const data = JSON.parse(raw);
      if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        blocked = new Map(Object.entries(data));
      } else if (Array.isArray(data)) {
        // Handle legacy format
        blocked = new Map(data.map(channel => [channel, Date.now()]));
      } else {
        blocked = new Map();
      }
      //log('Loaded blocked:', [...blocked]);
    } catch(e){ blocked = new Map(); log('Load-error', e); }
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
      const data = JSON.parse(raw) || {};
      if (typeof data === 'object' && !Array.isArray(data)) {
        // Convert to Map with timestamp support
        blockedVideos = new Map();
        for (const [id, value] of Object.entries(data)) {
          if (typeof value === 'string') {
            // Legacy format: just title
            blockedVideos.set(id, { title: value, timestamp: Date.now() });
          } else if (typeof value === 'object' && value !== null) {
            // New format: object with title and timestamp
            blockedVideos.set(id, {
              title: value.title || id,
              timestamp: value.timestamp || Date.now()
            });
          }
        }
      } else {
        blockedVideos = new Map();
      }
      //log('Loaded blocked videos:', [...blockedVideos.keys()]);
    } catch (e) {
      blockedVideos = new Map();
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
        //log('Loaded title patterns:', blockedTitlePatterns);
      } catch (e) {
        blockedTitlePatterns = [];
        log('Load-error title patterns', e);
      }
  }

  function redirectIfShortsURL(url) {
    const match = url.match(/^https:\/\/www\.youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})(\?.*)?$/);
    if (match) {
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
    // Persist blocked channels and force update in other tabs
    const blocklist = JSON.stringify(Object.fromEntries(blocked));
    await GM_setValue(STORAGE_KEY, blocklist);
    // Force UI update in current tab
    removeBlockedEntries();
  }

  async function saveBlockedVideos() {
    // Persist blocked videos
    await GM_setValue(VIDEOS_STORAGE_KEY, JSON.stringify(Object.fromEntries(blockedVideos)));
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
    const els = document.querySelectorAll(VIDEO_SELECTORS.join(','));
    const len = els.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (tagVideo(els[i])) count++;
    }
    // log(`Tagged ${count}/${len} videos.`);
  }

  const regexCache = new Map();

  function removeBlockedEntries() {
    // Batch process videos to reduce DOM reflows
    const videos = document.querySelectorAll(VIDEO_SELECTORS.join(','));
    const channelEntries = document.querySelectorAll('div.style-scope.ytd-channel-renderer');
    const shelfRenderers = document.querySelectorAll('div.style-scope.ytd-shelf-renderer');
    const whitelistedLower = new Set([...whitelisted].map(w => w.toLowerCase()));
    const blockedLower = new Set([...blocked.keys()].map(w => w.toLowerCase()));
    const toRemove = [];

    // Process channel entries in search results
    for (const channelEntry of channelEntries) {
      const channelNameEl = channelEntry.querySelector('yt-formatted-string.style-scope.ytd-channel-name');
      if (channelNameEl) {
        const channelName = channelNameEl.textContent.trim();
        if (whitelistModeEnabled) {
          if (!whitelisted.has(channelName)) {
            toRemove.push(channelEntry);
          }
        } else if (blocked.has(channelName)) {
          toRemove.push(channelEntry);
        }
      }
    }

    // Process channel-specific suggested shelf renderers in search results
    for (const shelf of shelfRenderers) {
      const header = shelf.querySelector('div.grid-subheader.style-scope.ytd-shelf-renderer h2.style-scope.ytd-shelf-renderer span.style-scope.ytd-shelf-renderer');
      if (header) {
        const sectionText = header.textContent.trim();
        if (sectionText) {
          const sectionWords = sectionText.split(/\s+/).map(word => word.toLowerCase());
          if (whitelistModeEnabled) {
            const hasWhitelistedWord = sectionWords.some(word => whitelistedLower.has(word));
            if (!hasWhitelistedWord) {
              toRemove.push(shelf);
            }
          } else {
            const hasBlockedWord = sectionWords.some(word => blockedLower.has(word));
            if (hasBlockedWord) {
              toRemove.push(shelf);
            }
          }
        }
      }
    }

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
      if (!whitelistModeEnabled && id && blockedVideos.has(id)) {
        toRemove.push(item);
        continue;
      }
      // Title/channel-regex based removal
      const title = (item.dataset.detubeVidTitle || info.title || '').trim();
      const channelName = (item.dataset.detube || '').trim();
      if (!whitelistModeEnabled && blockedTitlePatterns.length > 0) {
        for (const patternObj of blockedTitlePatterns) {
          try {
            const cacheKey = patternObj.pattern;
            let re = regexCache.get(cacheKey);
            if (!re) {
              re = new RegExp(patternObj.pattern, 'i');
              regexCache.set(cacheKey, re);
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
    const rules = whitelistModeEnabled ? '' : [...blocked.keys()].map(n =>
      `${VIDEO_SELECTORS.map(t => `${t}[data-detube="${CSS.escape(n)}"]`).join(', ')} { display: none !important; }`
    ).join('\n');

    const loadAnimRule = `
      ytd-continuation-item-renderer.ytd-watch-next-secondary-results-renderer.style-scope {
        height: 0 !important;
        overflow: hidden !important;
      }`;

    s.textContent = rules + (rules ? '\n' : '') + loadAnimRule;
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
    labelDiv.className = 'yt-list-item-view-model__label yt-list-item-view-model__container yt-list-item-view-model__container--compact yt-list-item-view-model__container--tappable yt-list-item-view-model__container--in-popup';

    const textWrapper = document.createElement('div');
    textWrapper.className = 'yt-list-item-view-model__text-wrapper';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'yt-list-item-view-model__title-wrapper';

    const span = document.createElement('span');
    span.className = 'yt-core-attributed-string yt-list-item-view-model__title';
    span.setAttribute('role', 'text');
    span.textContent = `\u00A0🚫\u00A0\u00A0 Block ${channel}`; // This is hilarious

    titleWrapper.appendChild(span);
    textWrapper.appendChild(titleWrapper);
    labelDiv.appendChild(textWrapper);
    button.appendChild(labelDiv);

    button.addEventListener('click', () => {
      blocked.set(channel, Date.now());
      saveBlocked();
      applyCSS();
      tagAllVideos();
      refreshUI();
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
    vLabelDiv.className = 'yt-list-item-view-model__label yt-list-item-view-model__container yt-list-item-view-model__container--compact yt-list-item-view-model__container--tappable yt-list-item-view-model__container--in-popup';

    const vTextWrapper = document.createElement('div');
    vTextWrapper.className = 'yt-list-item-view-model__text-wrapper';

    const vTitleWrapper = document.createElement('div');
    vTitleWrapper.className = 'yt-list-item-view-model__title-wrapper';

    const vSpan = document.createElement('span');
    vSpan.className = 'yt-core-attributed-string yt-list-item-view-model__title';
    vSpan.setAttribute('role', 'text');
    vSpan.textContent = `\u00A0🚧\u00A0\u00A0 Block This Video`;

    vTitleWrapper.appendChild(vSpan);
    vTextWrapper.appendChild(vTitleWrapper);
    vLabelDiv.appendChild(vTextWrapper);
    vBtn.appendChild(vLabelDiv);

    vBtn.addEventListener('click', () => {
      const id = videoInfo.id;
      const title = videoInfo.title || id;
      blockedVideos.set(id, { title, timestamp: Date.now() });
      saveBlockedVideos();
      removeBlockedEntries();
      refreshUI();
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
    wLabelDiv.className = 'yt-list-item-view-model__label yt-list-item-view-model__container yt-list-item-view-model__container--compact yt-list-item-view-model__container--tappable yt-list-item-view-model__container--in-popup';

    const wTextWrapper = document.createElement('div');
    wTextWrapper.className = 'yt-list-item-view-model__text-wrapper';

    const wTitleWrapper = document.createElement('div');
    wTitleWrapper.className = 'yt-list-item-view-model__title-wrapper';

    const wSpan = document.createElement('span');
    wSpan.className = 'yt-core-attributed-string yt-list-item-view-model__title';
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
        removeBlockedEntries();
      }
      refreshUI();
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
      try { host.dataset.detubeLabel = label; } catch(_) { /* idc */ }
      try { if (kind) host.dataset.detubeKind = kind; } catch(_) { /* idc */ }

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
      try { paper.setAttribute('aria-label', label); } catch(_) { /* idc */ }

      const text = document.createElement('yt-formatted-string');
      text.id = 'label';
      text.className = 'style-scope ytd-menu-service-item-renderer';
      text.textContent = label;
      try { text.removeAttribute('is-empty'); } catch(_) { /* idc */ }
      paper.appendChild(text);

      const handler = (ev) => {
        ev.stopPropagation();
        try { onClick(); } catch(_) { /* idc */ }
        // Try to close the popup after action
        try {
          const dropdown = host.closest('tp-yt-iron-dropdown');
          if (dropdown && typeof dropdown.close === 'function') {
            dropdown.close();
          } else if (dropdown) {
            // Simulate Escape to close
            document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }));
          }
        } catch(_) { /* idc */ }
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
      blocked.set(channel, Date.now());
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
        blockedVideos.set(id, { title, timestamp: Date.now() });
        saveBlockedVideos();
        removeBlockedEntries();
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
        removeBlockedEntries();
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
        try { labelEl.removeAttribute('is-empty'); } catch(_) { /* idc */ }
        try { paper.setAttribute('aria-label', desired || labelEl.textContent || ''); } catch(_) { /* idc */ }
      });
    } catch(_) { /* idc */ }
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

  // CSS classes for management button
  const managementButtonCSS = `
    .detube-management-button {
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
      contain: content;
    }
    .detube-management-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

  // Add CSS to head
  const style = document.createElement('style');
  style.textContent = managementButtonCSS;
  document.head.appendChild(style);

  function createManagementButton() {
    const button = document.createElement('button');
    button.id = 'detube-manage-btn';
    button.className = 'detube-management-button';
    button.title = 'Manage Blocked Channels';
    button.textContent = '🚫';
    button.dataset.detubeAction = 'open-manager';
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

  function generateBlockedChannelsHTML(updateAvailable = false) {
    // Best way to manage is to direct away to local page
    // Generate HTML for blocked channels overview
    let sortMethod = localStorage.getItem('detube_sort_method') || 'alphabetical';
    
    // Convert Maps to arrays and sort
    let blockedArray = [...blocked.entries()];
    let videosArray = [...blockedVideos.entries()];
    
    if (sortMethod === 'timestamp') {
      blockedArray.sort((a, b) => b[1] - a[1]); // Sort by timestamp (newest first)
      videosArray.sort((a, b) => b[1].timestamp - a[1].timestamp); // Sort by timestamp (newest first)
    } else {
      blockedArray.sort((a, b) => a[0].localeCompare(b[0])); // Sort alphabetically
      videosArray.sort((a, b) => a[1].title.localeCompare(b[1].title)); // Sort alphabetically
    }
    
    const channelItems = blockedArray.map(([channel, timestamp]) => {
      const date = new Date(timestamp).toLocaleString();
      return `
      <div class="channel-item" data-channel="${channel.replace(/"/g, '&quot;')}"
          style="display: flex; align-items: center; justify-content: space-between; gap: 12px;">
        <div style="flex: 1; display: flex; gap: 16px;">
          <span class="channel-name" style="flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${channel.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </span>
          <div class="timestamp" style="font-size: 0.8em; opacity: 0.7; white-space: nowrap;">
            Added: ${date}
          </div>
        </div>
        <button class="unblock-btn" onclick="unblockChannel('${channel.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `}).join('');
    
    const whitelistArray = [...whitelisted].sort();
    const whitelistItems = whitelistArray.map(channel => `
      <div class="channel-item" data-wchannel="${channel.replace(/"/g, '&quot;')}">
        <span class="channel-name">${channel.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
        <button class="unblock-btn" onclick="removeFromWhitelist('${channel.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `).join('');
    
    const videoItems = videosArray.map(([id, videoData]) => {
      const date = new Date(videoData.timestamp).toLocaleString();
      return `
      <div class="channel-item" data-video-id="${id.replace(/"/g, '&quot;')}">
        <div style="flex: 1;">
          <span class="channel-name">${videoData.title.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
          <div class="timestamp" style="font-size: 0.8em; opacity: 0.7; margin-top: 2px;">Added: ${date}</div>
        </div>
        <button class="unblock-btn" onclick="unblockVideo('${id.replace(/'/g, "\\'")}')">
          <span>✕</span>
        </button>
      </div>
    `}).join('');
    
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

            #sort-select {
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

            #sort-select {
                background: #2e2e2e;
                border: 1px solid #2e2e2e;
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

        #sort-select {
            padding: 7px 8px;
            border-radius: 5px;
            width: 120px;
            margin-right: 12px;
        }

        input {
            background: #2e2e2e;
            color: #f5f5f5;
        }

        #update-notification {
          background: #2e2e2e;
          color: #fff;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1px solid #2e2e2e;
          margin-top: 20px;
          font-size: 16px;
          font-family: system-ui, sans-serif;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        #update-notification:hover {
          background: rgba(30, 30, 30, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
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
            padding: 3px 8px;
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
            padding-right: 0;
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

        .title-link {
            color: inherit;
            text-decoration: none;
        }

        .channel-name {
            font-weight: 600;
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
            <h1><a class="title-link" href="https://github.com/polymegos/deTube_channel_blocker" target="_blank">🚫 deTube Blocker</a></h1>
            ${updateAvailable ? `
            <div id="update-notification" onclick="window.open('https://greasyfork.org/scripts/545113-detube-block-channels', '_blank')">
                <b>⚠️ Update available!</b> Click to install the latest version
            </div>
            ` : ''}
        </div>
        <div class="controls">
            <button class="btn" onclick="refreshPage()">Refresh</button>
            <button class="btn danger" onclick="clearAll()" ${(blockedArray.length + videosArray.length + patternsArray.length + whitelistArray.length) === 0 ? 'disabled' : ''}>
                Clear (${blockedArray.length + videosArray.length + patternsArray.length + whitelistArray.length})
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
            <div class="toggle" title="Sort entries by" ${whitelistModeEnabled ? 'style="display:none;"' : ''}>
              <label for="sort-select" style="margin-right: 8px;">Sort by:</label>
              <select id="sort-select" onchange="changeSort(this.value)">
                <option value="alphabetical" ${sortMethod === 'alphabetical' ? 'selected' : ''}>Alphabetical</option>
                <option value="timestamp" ${sortMethod === 'timestamp' ? 'selected' : ''}>Timestamp</option>
              </select>
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
                      <p>Use the three-dot menu on a video to select \"Block This Video\"</p>
                  </div>
              ` : videoItems}
              <hr style=\"margin: 10px 0; border: none; border-top: 1px solid rgba(0,0,0,0.1);\" />
              <h2 style=\"padding: 0 20px;\">Blocked Patterns (${patternsArray.length})</h2>
              ${patternsArray.length === 0 ? `
                <div class=\"empty-state\">
                  <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">
                    <path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z\"/>
                  </svg>
                  <h3>No patterns yet!</h3>
                  <p>Enter a regex above to block matching elements</p>
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
        // API endpoint to refresh UI
        function handleRefreshRequest() {
          try {
            loadData();
            updateUI();
            refreshPage();
            return { success: true, message: 'UI refreshed successfully' };
          } catch (e) {
            console.error('Error refreshing UI:', e);
            return { success: false, message: 'Error refreshing UI: ' + e.message };
          }
        }

        window.deTubeBlocklistAPI = {
          refresh: handleRefreshRequest
        };

        function refreshPage() {
          try {
            const pending = JSON.parse(window.name || 'null');
            if (pending && pending.action && pending.action !== 'refreshManager') {
              let retries = 0;
              const waitForClear = () => {
                try {
                  const current = JSON.parse(window.name || 'null');
                  if (!current || !current.action) {
                    window.name = JSON.stringify({ action: 'refreshManager' });
                  } else if (retries < 10) { // 10x200ms max wait
                    retries++;
                    setTimeout(waitForClear, 200);
                  } else {
                    // Force refresh as ultima ratio
                    window.name = JSON.stringify({ action: 'refreshManager' });
                  }
                } catch (_) {
                  if (retries < 10) { // also 10x200ms max wait
                    retries++;
                    setTimeout(waitForClear, 200);
                  } else {
                    window.name = JSON.stringify({ action: 'refreshManager' });
                  }
                }
              };
              waitForClear();
              return;
            }
          } catch (_) { /* idc */ }
          window.name = JSON.stringify({ action: 'refreshManager' });
        }

        function unblockChannel(channelName) {
          // Remove channel from blocked list
          if (!confirm('Are you sure you want to unblock "' + channelName + '"?')) return;
          const item = document.querySelector('.channel-item[data-channel="' + channelName.replace(/"/g, '\\"') + '"]');
          const finish = () => {
            try {
              // Post unblock action
              window.name = JSON.stringify({ action: "unblock", channel: channelName });
              // Let UI finish animation before refreshing
              setTimeout(() => {
                try { refreshPage(); } catch (_) { /* idc */ }
              }, 200);
            } catch (_) {
              // Even if posting fails, still attempt refresh
              setTimeout(() => {
                try { refreshPage(); } catch (_) { /* idc */ }
              }, 200);
            }
          };
          if (item) {
            let finished = false;
            const complete = () => {
              if (finished) return;
              finished = true;
              item.removeEventListener("transitionend", complete);
              finish();
            };
            item.addEventListener("transitionend", complete, { once: true });
            setTimeout(complete, 1000); // 1s max wait
            requestAnimationFrame(() => item.classList.add("removing"));
          } else {
            finish();
          }
        }

        function unblockVideo(videoId) {
          if (!confirm('Are you sure you want to unblock this video?')) return;
          const item = document.querySelector('.channel-item[data-video-id="' + videoId.replace(/"/g, '\\"') + '"]');
          const finish = () => {
              try {
                  // Post unblock action
                  window.name = JSON.stringify({ action: 'unblockVideo', videoId });
              } catch (_) {
                  // Ignore errors
              }
              // Let UI finish animation before refreshing
              setTimeout(() => {
                  try { refreshPage(); } catch (_) { /* idc */ }
              }, 200);
          };

          if (item) {
              let finished = false;
              const complete = () => {
                  if (finished) return;
                  finished = true;
                  item.removeEventListener('transitionend', complete);
                  finish();
              };

              item.addEventListener('transitionend', complete, { once: true });
              setTimeout(complete, 1000); // Max 1s wait
              requestAnimationFrame(() => item.classList.add('removing'));
          } else {
              finish();
          }
        }

        function clearAll() {
            if (!confirm('Are you sure you want to clear all ${blockedArray.length} channels, ${videosArray.length} videos, ${patternsArray.length} patterns and ${whitelistArray.length} whitelisted channels? This cannot be undone.')) return;
            const items = Array.from(document.querySelectorAll('.channel-item'));
            const finish = () => {
                try {
                    window.name = JSON.stringify({ action: 'clearAll' });
                } catch (_) {/* idc */}
                setTimeout(() => {
                    try { refreshPage(); } catch (_) { /* idc */ }
                }, 200);
            };

            if (items.length === 0) {
                finish();
                return;
            }

            let completed = 0;
            const markComplete = (el, handler) => {
                el.removeEventListener('transitionend', handler);
                el.remove(); // actually remove from DOM
                completed++;
                if (completed >= items.length) finish();
            };

            items.forEach((el, i) => {
                const handler = () => markComplete(el, handler);
                el.addEventListener('transitionend', handler, { once: true });
                setTimeout(handler, 600 + i * 25);
                setTimeout(() => requestAnimationFrame(() => el.classList.add('removing')), i * 25);
            });
        }

        function exportData() {
          try {
            const payload = {
              version: 'detube ' + version,
              blockedNames: Object.fromEntries(blocked),
              blockedVideos: Object.fromEntries(blockedVideos),
              blockedTitlePatterns: patternsArray,
              whitelisted: whitelistArray
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

                        // Default values
                        let names = [];
                        let videos = {};
                        let patterns = [];
                        let whitelist = [];

                        if (Array.isArray(data)) {
                            // Legacy format
                            names = data;

                        } else if (data && typeof data === 'object') {
                            if (data.blockedNames || data.blockedVideos || data.blockedTitlePatterns || data.whitelisted) {
                                // Standard format
                                if (Array.isArray(data.blockedNames)) {
                                    // Handle legacy array format
                                    names = data.blockedNames;
                                } else if (data.blockedNames && typeof data.blockedNames === 'object' && data.blockedNames !== null) {
                                    // Handle new object format with timestamps
                                    names = data.blockedNames;
                                }

                                if (data.blockedVideos && typeof data.blockedVideos === 'object') {
                                    videos = data.blockedVideos;
                                }

                                if (Array.isArray(data.blockedTitlePatterns)) {
                                    patterns = data.blockedTitlePatterns.map(p => {
                                        if (typeof p === 'string') {
                                            return { pattern: p, scope: 'both' };
                                        } else if (typeof p === 'object' && p.pattern) {
                                            return { pattern: p.pattern, scope: p.scope || 'both' };
                                        }
                                        return null;
                                    }).filter(Boolean);
                                }

                                if (Array.isArray(data.whitelisted)) {
                                    whitelist = data.whitelisted.filter(x => typeof x === 'string');
                                }
                            } else if (data.filterData && typeof data.filterData === 'object') {
                                // Old plugin format
                                const fd = data.filterData;

                                // Channels (legacy names)
                                if (Array.isArray(fd.channelId)) {
                                    names = fd.channelId
                                        .map(x => {
                                            if (typeof x !== 'string') return null;
                                            const match = x.match(/^\\/\\/ Blocked by context menu\\s*\\((.*?)\\)/);
                                            return match ? match[1].replace('@', '').trim() : null;
                                        })
                                        .filter(Boolean);
                                }

                                // Videos
                                if (Array.isArray(fd.videoId)) {
                                    let lastTitle = null;
                                    fd.videoId.forEach(x => {
                                        if (typeof x !== 'string' || !x.trim()) return;
                                        if (x.startsWith('//')) {
                                            const match = x.match(/^\\/\\/ Blocked by context menu\\s*\\((.*)\\)/);
                                            if (match) {
                                                let title = match[1].trim();
                                                title = title.replace(
                                                    /\\(\\d{1,2}\\/\\d{1,2}\\/\\d{4},\\s*\\d{1,2}:\\d{2}:\\d{2}\\s*(AM|PM)\\)*$/i,
                                                    ''
                                                ).trim();
                                                if (title.includes(')') && !title.includes('(')) {
                                                    title = title.replace(/\\)$/, '').trim();
                                                }
                                                lastTitle = title;
                                            }
                                        } else {
                                            if (lastTitle) {
                                                videos[x] = lastTitle;
                                                lastTitle = null;
                                            } else {
                                                videos[x] = '';
                                            }
                                        }
                                    });
                                }

                                // Title Patterns
                                if (Array.isArray(fd.title)) {
                                    patterns = fd.title
                                        .filter(x => typeof x === 'string' && x.trim())
                                        .map(x => ({ pattern: x, scope: 'title' }));
                                }

                                // Channel Patterns
                                if (Array.isArray(fd.channelName)) {
                                    patterns = patterns.concat(
                                        fd.channelName
                                          .filter(x => typeof x === 'string' && x.trim())
                                          .map(x => ({ pattern: x, scope: 'channel' }))
                                    );
                                }
                            }
                        }

                        if (typeof names !== 'object' || names === null) {
                            throw new Error('Invalid format for channels');
                        }

                        const finish = () => {
                            try {
                                window.name = JSON.stringify({
                                    action: 'importData',
                                    data: {
                                        blockedNames: names,
                                        blockedVideos: videos,
                                        blockedTitlePatterns: patterns,
                                        whitelisted: whitelist
                                    }
                                });
                            } catch (_) {
                                // Ignore posting errors
                            }
                            setTimeout(() => {
                                try { refreshPage(); } catch (_) { /* idc */ }
                            }, 200);
                        };
                        finish();

                    } catch (e) {
                        try { alert('Import failed: ' + e.message); } catch (_) { /* idc */ }
                    } finally {
                        input.value = ''; // reset for next run
                    }
                };

                reader.onerror = () => {
                    alert('Failed to read file');
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

            if (!val || val.length === 0) {
                alert('Please enter a pattern');
                return;
            }

            try {
                new RegExp(val); // validate regex
            } catch (e) {
                alert('Invalid regex: ' + e.message);
                return;
            }

            const finish = () => {
                try {
                    // Post addPattern action
                    window.name = JSON.stringify({ action: 'addPattern', pattern: val, scope });
                } catch (_) {
                    // Ignore errors
                }
                // Refresh after a short delay
                setTimeout(() => {
                    try { refreshPage(); } catch (_) { /* idc */ }
                }, 200);
            };

            input.value = '';

            requestAnimationFrame(() => {
                const newItem = document.querySelector('.pattern-item[data-pattern="' + val.replace(/"/g, '\\"') + '"]');
                if (newItem) {
                    let finished = false;
                    const complete = () => {
                        if (finished) return;
                        finished = true;
                        newItem.removeEventListener('transitionend', complete);
                        finish();
                    };

                    newItem.addEventListener('transitionend', complete, { once: true });
                    setTimeout(complete, 1000); // That's the fallback
                    requestAnimationFrame(() => newItem.classList.add('adding'));
                } else {
                    finish();
                }
            });
        }

        function removePattern(pattern, scope = 'both') {
          if (!confirm('Remove pattern "' + pattern + '"?')) return;
          // Find item by dataset (while avoiding CSS escaping)
          const item = Array.from(document.querySelectorAll('.channel-item'))
              .find(el =>
                  (el.dataset && el.dataset.pattern) === String(pattern) &&
                  (el.dataset.scope || 'both') === scope
              );

          const finish = () => {
              try {
                  window.name = JSON.stringify({ action: 'removePattern', pattern, scope });
              } catch (_) { /* idc */ }
              setTimeout(() => {
                  try { refreshPage(); } catch (_) { /* idc */ }
              }, 200);
          };

          if (item) {
              let finished = false;
              const complete = () => {
                  if (finished) return;
                  finished = true;
                  item.removeEventListener('transitionend', complete);
                  item.remove(); // actually remove from DOM
                  finish();
              };

              item.addEventListener('transitionend', complete, { once: true });
              setTimeout(complete, 1000);
              requestAnimationFrame(() => item.classList.add('removing'));
          } else {
              finish();
          }
      }

      function changeSort(method) {
          localStorage.setItem('detube_sort_method', method);
          refreshPage();
      }

      function removeFromWhitelist(channelName) {
          if (!confirm('Remove "' + channelName + '" from whitelist?')) return;
          const item = document.querySelector('.channel-item[data-wchannel="' + channelName.replace(/"/g, '\\"') + '"]');
          const finish = () => {
              try {
                  window.name = JSON.stringify({ action: 'removeFromWhitelist', channel: channelName });
              } catch (_) { /* idc */ }
              setTimeout(() => {
                  try { refreshPage(); } catch (_) { /* idc */ }
              }, 200);
          };

          if (item) {
              let finished = false;
              const complete = () => {
                  if (finished) return;
                  finished = true;
                  item.removeEventListener('transitionend', complete);
                  item.remove(); // ensure DOM cleanup
                  finish();
              };
              item.addEventListener('transitionend', complete, { once: true });
              setTimeout(complete, 1000); // Fallback
              requestAnimationFrame(() => item.classList.add('removing'));
          } else {
              finish();
          }
      }
    </script>
  </body>
</html>`;
  }

  async function checkForUpdates() {
    if (updateNotificationShown) return; // Only check once per session
    
    try {
      const response = await fetch('https://greasyfork.org/scripts/545113-detube-block-channels/versions');
      const text = await response.text();
      
      // Parse the version from the response
      const match = text.match(/<span class="version-number">\s*<a[^>]*>v([\d.]+)<\/a>\s*<\/span>/);
      if (match) {
        const latestVersion = match[1];
        const currentVersion = version.replace(' Dev', '');
        // If the latest version "0.2.1" is greater than the current version "0.2.0", alert this
        if (latestVersion > currentVersion) {
          updateNotificationShown = true;
          return true; // Update available
        }
      }
    } catch (e) {
      // Silently fail on network errors
    }
    return false; // No update or error
  }

  async function openBlockedChannelsTab() {
    // Show management UI immediately, not waiting for update check
    const html = generateBlockedChannelsHTML(false);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const newTab = window.open(url, '_blank');

    // Store management tab reference for API access
    if (!window.detubeManagementTab) {
      window.detubeManagementTab = newTab;
    }

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
            blockedVideos.delete(action.videoId);
            saveBlockedVideos();
            removeBlockedEntries();
            log(`[>] Unblocked video: ${action.videoId}`);
            newTab.window.name = '';
          } else if (action.action === 'importData' && action.data) {
            try {
              let added = 0, duplicates = 0, invalid = 0;
              // Handle blockedNames (could be array for legacy, array of arrays for current, or object for new format)
              if (action.data.blockedNames) {
                if (Array.isArray(action.data.blockedNames)) {
                  // Could be legacy format (array of strings) or current format (array of [name, timestamp] arrays)
                  for (const entry of action.data.blockedNames) {
                    let name, timestamp;
                    if (Array.isArray(entry)) {
                      // Current format: [name, timestamp]
                      name = entry[0];
                      timestamp = entry[1];
                    } else if (typeof entry === 'string') {
                      // Legacy format: just name
                      name = entry;
                      timestamp = Date.now();
                    } else {
                      continue; // Invalid entry
                    }
                    
                    if (!name || typeof name !== 'string') { invalid++; continue; }
                    if (blocked.has(name)) { duplicates++; continue; }
                    blocked.set(name, timestamp);
                    added++;
                  }
                } else if (typeof action.data.blockedNames === 'object' && action.data.blockedNames !== null) {
                  // New object format with timestamps
                  for (const [name, timestamp] of Object.entries(action.data.blockedNames)) {
                    if (!name || typeof name !== 'string') { invalid++; continue; }
                    if (blocked.has(name)) { duplicates++; continue; }
                    blocked.set(name, timestamp);
                    added++;
                  }
                }
              }
              // Merge videos
              let vAdded = 0;
              if (action.data.blockedVideos && typeof action.data.blockedVideos === 'object' && action.data.blockedVideos !== null) {
                for (const [vid, value] of Object.entries(action.data.blockedVideos)) {
                  if (!vid || typeof vid !== 'string') continue;
                  if (!blockedVideos.has(vid)) { 
                    // Handle both legacy format (string) and new format (object)
                    if (typeof value === 'string') {
                      // Legacy format: just title
                      blockedVideos.set(vid, { title: value, timestamp: Date.now() });
                    } else if (typeof value === 'object' && value !== null) {
                      // New format: object with title and timestamp
                      blockedVideos.set(vid, { 
                        title: value.title || vid, 
                        timestamp: value.timestamp || Date.now() 
                      });
                    }
                    vAdded++; 
                  }
                }
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
              removeBlockedEntries();
              //log(`[>] Import merged: +${added} channels, +${vAdded} videos, +${pAdded} patterns, +${wAdded} whitelisted; dupes channels ${duplicates}, patterns ${pDupes}, whitelist ${wDupes}; invalid ${invalid}`);
            } catch (e) {
              log('Import error:', e);
            }
            // Ask the manager page to refresh
            try {
              newTab.window.name = JSON.stringify({ action: 'refreshManager' });
              log('Sent refresh signal to management tab');
            } catch(e) {
              log('Error refreshing management tab:', e);
            }
          } else if (action.action === 'clearAll') {
            blocked.clear();
            blockedVideos.clear();
            blockedTitlePatterns = [];
            whitelisted.clear();
            saveBlocked();
            saveBlockedVideos();
            saveBlockedTitlePatterns();
            saveWhitelist();
            applyCSS();
            tagAllVideos();
            removeBlockedEntries();
            log('[>] Cleared all blocked channels and videos');
            newTab.window.name = ''; // Clear action again
          } else if (action.action === 'refreshManager') {
            // Rebuild the manager UI from current state and navigate the tab to it
            const freshUrl = URL.createObjectURL(new Blob([generateBlockedChannelsHTML(updateNotificationShown)], { type: 'text/html' }));
            try { newTab.location.href = freshUrl; } catch (_) { /* idc */ }
            // Clear, avoids repeated triggers of refreshManager after navigating to the new URL
            try { newTab.window.name = ''; } catch (_) { /* idc */ }
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
            removeBlockedEntries();
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
                  removeBlockedEntries();
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
              removeBlockedEntries();
              log(`[>] Removed title pattern: ${action.pattern} (${scope})`);
              newTab.window.name = '';
          } else if (action.action === 'removeFromWhitelist' && action.channel) {
            whitelisted.delete(action.channel);
            saveWhitelist();
            tagAllVideos();
            removeBlockedEntries();
            log(`[>] Removed from whitelist: ${action.channel}`);
            newTab.window.name = '';
          }
        }
      } catch (e) { /* idc */}
    }, 500);

    // Check for updates in the background and update the UI if needed
    checkForUpdates().then(updateAvailable => {
      if (updateAvailable && newTab && !newTab.closed) {
        try {
          // Generate new HTML with update notification and update the tab
          const updatedHtml = generateBlockedChannelsHTML(true);
          const updatedBlob = new Blob([updatedHtml], { type: 'text/html' });
          const updatedUrl = URL.createObjectURL(updatedBlob);
          newTab.location.href = updatedUrl;
        } catch (e) {
          log('Error updating management tab with update notification:', e);
        }
      }
    });

    // Stop checking after 5 minutes
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
      }, 100); // debounce
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
      if (!whitelistModeEnabled && id && blockedVideos.has(id)) { video.remove(); return; }
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
          } catch (err) { /* idc */ }
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

  // If opened, trigger management UI refresh
  function refreshUI() {
    try {
      if (window.detubeManagementTab && !window.detubeManagementTab.closed) {
        window.detubeManagementTab.window.name = JSON.stringify({ action: 'refreshManager' });
        return true;
      }
      return false;
    } catch (e) {
      log('Error refreshing management UI:', e);
      return false;
    }
  }

  // Single delegated click handler for all detube actions
  document.body.addEventListener('click', e => {
    // Handle management button click
    const manageBtn = e.target.closest('[data-detube-action="open-manager"]');
    if (manageBtn) {
      e.preventDefault();
      e.stopPropagation();
      openBlockedChannelsTab();
      return;
    }

    // Handle three-dot menu button
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
    } catch(_) { /* idc */ }
  }, true);

  (async () => {
    await Promise.all([
      loadBlocked(),
      loadBlockedVideos(),
      loadShortsSetting(),
      loadBlockedTitlePatterns()
    ]);
    // This has to await the above pre-heating stage
    await loadWhitelist();

    tagAllVideos();
    removeBlockedEntries();
    applyCSS();
    observeMenus();
    injectManagementButton();
    observeNewVideos();
    setupShortsBlocking(shortsEnabled);

    const observer = new MutationObserver(() => {
        removeBlockedEntries();
        if (shortsEnabled) removeShortsElements();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    const handleNavigation = () => {
      removeBlockedEntries();
      if (shortsEnabled) removeShortsElements();
    };

    window.addEventListener('yt-navigate-finish', handleNavigation);
  })();

})();
