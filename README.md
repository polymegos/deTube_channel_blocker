# deTube Channel Blocker

![License](https://img.shields.io/badge/license-MIT-red)
![Issues](https://img.shields.io/github/issues/polymegos/deTube_channel_blocker)
![Last Commit](https://img.shields.io/github/last-commit/polymegos/deTube_channel_blocker)

**deTube Channel Blocker** is a userscript to hide any videos from specific YouTube channels from ever appearing in your feed.
It adds a "🚫 Block Channel" option to YouTube's menu so you can instantly block a channel without leaving the page.

## Why use it?

* **Block channels directly from the video menu** (three-dot menu)
* **No reloads required**, videos disappear immediately
* **Saves your preferences** using your browser's local storage
* **Very lightweight**, uses dynamic CSS rules instead of heavy DOM manipulation
* **Works across YouTube surfaces** including mobile, music, and embeds

## How the script works

This userscript injects a custom "Block Channel" option into YouTube's menu system.
When clicked, the selected channel is added to your personal blocklist and all its videos are hidden automatically.

- Videos are tagged on load with their channel name
- A CSS rule is generated to hide any element matching a blocked channel
- The script observes new content (e.g. infinite scroll) and applies the same logic
- Your blocklist is saved persistently using `GM_setValue`

## Supported Browsers

- Firefox
- Edge
- ~~Chrome~~
- Brave
- Safari

## Installation

To use this userscript, you will need a userscript manager extension installed in your browser:

- [Violentmonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
- [Tampermonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Greasemonkey (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
- [Violentmonkey (Chromium-based)](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
- [Tampermonkey (Chromium-based)](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

### Steps:

1. Install a userscript manager from the list above.
2. Create a new, empty userscript in your manager.
3. Copy-paste the contents of `detube_channel_blocker.js` from this repository.
4. Save the script.
5. Browse YT. Open a video menu (`⋮`) and click "🚫 Block Channel".

Blocked channels will no longer appear in your feed.

## Technical Notes

```
deTube_block_channels/
├── detube_channel_blocker.js  # Main userscript file
├── README.md                  # This file
└── LICENSE                    # MIT License
```

- Runs only when visiting `youtube.com`, `m.youtube.com`, `music.youtube.com`
- Does not interact with the API or send network requests
- Monitors navigation and dynamic content loading via `MutationObserver`
- Uses `GM_getValue` and `GM_setValue` for safe, persistent blocklist storage
- Does **not** track or transmit any user data

## License

MIT.

This script is provided "as is", with no warranty of any kind.
**Use at your own risk.** You are responsible for compliance with YouTube's Terms of Service and applicable laws.
