# deTube Channel Blocker

![License](https://img.shields.io/badge/license-MIT-red)
![Issues](https://img.shields.io/github/issues/polymegos/deTube_channel_blocker)
![Last Commit](https://img.shields.io/github/last-commit/polymegos/deTube_channel_blocker)

**deTube Channel Blocker** is a userscript to hide any videos from specific YT channels from ever appearing in your feed.
In your suggested video feed, you will notice a three-dot menu (`⋮`) to the right of each video's title.
If you click this menu, you will be shown three additional options:

- Hide the videos of entire channels with the `🚫 Block Channel` option
- Hide just a specific video with the `🚧 Block This Video` option
- Add a channel to a whitelist; when you toggle whitelist mode, only whitelisted channels will have their videos remain in the suggested videos feed
- In the top right corner of the page, a `🚫` icon appears, leading to the blocker's management page

## Why use it?

* **Block channels directly from the video menu** (three-dot menu)
* **No reloads required**, videos disappear immediately
* **Saves your preferences** using your browser's local storage
* **Very lightweight**, uses dynamic CSS rules instead of heavy DOM manipulation
* **Works across YT surfaces** including mobile, music, and embeds

## How the script works

This userscript injects a custom "Block Channel" option into YT's menu system.
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

## Technical Notes

```
deTube_block_channels/
├── detube_channel_blocker.js  # Main userscript file
├── README.md                  # This file
└── LICENSE                    # MIT License
```

- Does **not** interact with the API or send network requests at any point
- Monitors navigation and dynamic content loading via `MutationObserver`
- Uses `GM_getValue` and `GM_setValue` for safe, persistent blocklist storage
- Does **not** track or transmit any user data

## Usage Examples

### Blocking a Channel
1. Find a video from a channel you want to block in the suggested videos feed
2. Click the three-dot menu (`⋮`) next to the video (on the right)
3. Click `🚫 Block [Channel Name]`
4. All videos from this channel will immediately disappear from your view

### Blocking a Specific Video
1. Find the video you want to block in the suggested videos feed
2. Click the three-dot menu (`⋮`) next to the video (on the right)
3. Click `🚧 Block This Video`. This specific video will be hidden from all views.

### Whitelisting a Channel
1. Open the Blocked Channels Manager (click the 🚫 icon in the top right of the page)
2. Find a video of the channel you want to whitelist in the suggested videos list
3. Click the `⚪ Whitelist [Channel Name]` button. The channel will be moved to the "Whitelisted Channels" section.

### Using Whitelist Mode
1. In the Blocked Channels Manager (click the 🚫 icon in the top right of the page), enable "Whitelist Mode"
2. In this mode, only channels in your whitelist will be shown, all other channels will be hidden
3. You only ever see the whitelist when in whitelist mode (otherwise the UI would be to full)

### Blocking by Title Pattern
1. In the Blocked Channels Manager, go to the "Title Patterns" section
2. Enter a regular expression pattern to match video titles, e.g. `\b(React)\b` for videos with "react" or "React" in the title
3. Click "Add"
4. Any video with a title matching this pattern will be hidden

## License

MIT.

This script is provided "as is", with no warranty of any kind.
**Use at your own risk.** You are responsible for compliance with YT's Terms of Service and applicable laws.
