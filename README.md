# deTube Channel Blocker

![License](https://img.shields.io/badge/license-MIT-red)
![Issues](https://img.shields.io/github/issues/polymegos/deTube_channel_blocker)
![Last Commit](https://img.shields.io/github/last-commit/polymegos/deTube_channel_blocker)

**deTube Channel Blocker** is a userscript that hides videos you don't want to see.<br>
If you're tired of certain videos or channels popping up in your recommendations, this lets you block them easily.
The userscript is backwards-compatible wit blockTube config files. You can directly import them.

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

### Block by video title or channel name using regex patterns

1. Open the `🚫` Blocker Manager (top right corner)
2. In the "Title Patterns" section, type a regex pattern you want to block
3. Add the pattern
4. Any video with a title or channel name matching that pattern will be hidden

## Understanding Regex Patterns

The deTube Channel Blocker uses JavaScript's standard `RegExp` object for pattern matching.<br>
This means you can use any valid JavaScript regular expression to block content.

When you add a regex pattern, it will be matched against both video titles and channel names.<br>
If either matches the pattern, the video will be hidden.

### Regex Examples

#### 1. Block specific words (case-sensitive)

**Pattern:** `React`

* Blocks any video title or channel name containing **"React"** (case-sensitive).
* Would block: "Learning React", "React Native Tutorial", "ReactChannel"
* Would **not** block: "react", "REACT"

#### 2. Block specific words (case-insensitive)

**Pattern:** `React`
**Flag:** `\i`

* Use the `\i` flag for case-insensitive matching.
* `React\i` would block: "React", "react", "REACT", etc.

#### 3. Block whole word only

**Pattern:** `\bReact\b`
**Flag:** (optional `\i`)

* `\bReact\b` blocks only when "React" appears as a whole word.
* `\bReact\b` would block: "Learning React"
* `\bReact\b\i` would block: "Learning react" and "Learning ReAcT" aswell

#### 4. Block multiple words

**Pattern:** `React|Vue|Angular`
**Flag:** (optional `\i`)

* Blocks any video containing "React", "Vue", or "Angular".
* Would block: "Vue.js Tutorial", "Angular Fundamentals", "React vs Vue"

#### 5. Block specific phrases (case-insensitive)

**Pattern:** `how to.*react`
**Flag:** `\i`

* Blocks videos with titles like "How to Learn React", "How to Build a React App"
* `.*` matches any characters between "how to" and "react"

#### 6. Block by channel name (case-insensitive)

**Pattern:** `techreview`
**Flag:** `\i`

* Blocks all videos from channels with "techreview" in their name
* Would block: "TechReview Central", "NewTechReviews", etc.

#### 7. Block clickbait-style titles

**Pattern:** `\b\d+\s*(clever|genius|incredible|mind-blowing)\b`
**Flag:** `\i`

* Blocks titles like "10 Clever Hacks", "5 Incredible Tricks", etc.

#### 8. Block non-English content (example: Chinese characters)

**Pattern:** `[一-龯]+`

* Blocks content with Chinese characters
* You can adjust Unicode ranges for other languages (e.g., Cyrillic: `[А-я]`, Arabic: `[\u0600-\u06FF]`)

#### 9. Block specific content types

**Pattern:** `\b(short|compilation|fails)\b`
**Flag:** `\i`

* Blocks content categorized as shorts, compilations, or fails

### Testing Your Patterns

Before adding patterns, you can test them using online regex testers:
- [regex101.com](https://regex101.com/) (select `ECMAScript (JavaScript)` flavor)
- [regexr.com](https://regexr.com/)

When testing, remember that your patterns will be matched against both video titles and channel names.

### Important Notes

1. **Case Sensitivity**: By default, patterns are case-sensitive. Use `(?i)` at the beginning of your pattern to make it case-insensitive.
2. **Word Boundaries**: Use `\b` to match whole words only. For example, `\bReact\b` will match "React" but not "ReactNative".
3. **Special Characters**: If you want to match special regex characters literally (like `.`, `*`, `?`, etc.), you need to escape them with a backslash. For example, to match a literal question mark, use `\?`.
4. **Performance**: Very broad patterns may slow down page loading. Try to be as specific as possible.
5. **Unicode Support**: The script fully supports Unicode characters, so you can block content in any language.

## Privacy & Safety

* The script never *ever* communicates to any servers or any third party
* Everything is stored safely in your own browser

## License

This project is free to use under the **MIT License**. It is provided "as is", with no warranty of any kind.<br>
**Use at your own risk.** You assume full responsibility for compliance with YouTube's Terms of Service and for any consequences arising from using this project.
