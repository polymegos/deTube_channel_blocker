# deTube Channel Blocker

![License](https://img.shields.io/badge/license-MIT-red)
![Issues](https://img.shields.io/github/issues/polymegos/deTube_channel_blocker)
![Last Commit](https://img.shields.io/github/last-commit/polymegos/deTube_channel_blocker)

**deTube Channel Blocker** is a userscript that hides videos you don't want to see.<br>
If you're tired of certain videos or channels popping up in your recommendations, this lets you block them easily.

For the videos in the suggested videos feed, you will notice a three-dot menu (`⋮`) to the right of each video's title.<br>
After installing this userscript, that menu gives you new options inside that menu:

* `🚫 Block [Channel Name]` - Hide all videos from this channel from appearing in your feeds
* `🚧 Block This Video` - Hide just this one video
* `⚪ Whitelist [Channel Name]` - Keep this channel always visible, even in "Whitelist Mode" (more on this below)
*  🚫 `Blocker Manager` - A new button in the top-right corner of the page lets you manage all your blocked and whitelisted items
*  The `Blocker Manager` provides a toggle to hide all short-form content outright

## Why use this?

* **Instant results**, videos disappear right away, no refresh needed
* **Remembers your choices** (all open source, fully local, saved in your browser)
* **Fast and lightweight**, won't slow YouTube down

* When you block a channel, the tool remembers it
* Any videos from that channel are hidden automatically
* It also works with blocking endless scrolling short-form content

## Setup

This is a *userscript*, meaning it runs with the help of a browser extension.
First, install one of these free extensions:

* **Firefox:**
  * [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/),
  * [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), or
  * [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* **Chromium browsers (Brave, Edge, etc.):**
  * [Violentmonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag), or
  * [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

*(Chrome itself isn't supported anymore, ideally use Brave instead.)*

After installing one of those, you can install the [deTube Channel Blocker](https://greasyfork.org/scripts/545113-detube-block-channels) script.

## How to use it

### Block a channel

1. Find a video from the channel you don’t like
2. Click the three-dot menu (`⋮`)
3. Select `🚫 Block [Channel Name]`
4. All of that channel’s videos disappear instantly

### Block just one video

1. Find the video
2. Click the three-dot menu (`⋮`)
3. Select `🚧 Block This Video`
4. That video will be gone for good

### Whitelist a channel (always show it)

1. Click the `🚫` icon in the top-right of the page (this opens the manager)
2. Select `⚪ Whitelist [Channel Name]`
3. Now that channel will never be hidden

### Whitelist mode (see only your favorite channels)

1. Open the `🚫` Blocker Manager (top right corner)
2. Turn on “Whitelist Mode”
3. Now *only* videos from your whitelisted channels will appear

### Block by video title

1. Open the `🚫` Blocker Manager (top right corner)
2. In the "Title Patterns" section, type a word or phrase you don’t want. For example, the pattern `\b(React)\b/i` would case-insensitively block videos with "React"/"react"/"rEaCt"/... in the title
4. Add the pattern
5. Any video with that word in the title disappears

Ideally, try formulating regex patterns [with this regex tester](https://regex101.com/) before applying them.<br>
You can learn about regex patterns in more detail [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet).

## Privacy & Safety

* The script never *ever* communicates to any servers or any third party
* Everything is stored safely in your own browser

## License

This project is free to use under the **MIT License**. It is provided "as is", with no warranty of any kind.<br>
**Use at your own risk.** You assume full responsibility for compliance with YouTube's Terms of Service and for any consequences arising from using this project.
