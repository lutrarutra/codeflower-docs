---
title: storyteller
description: "Release notes of storyteller, the report library."
sidebar:
  order: 6
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.4.0

*2026-11-05*

- Slide decks: `sty.Deck.open("decks/x", title=...)` builds a PowerPoint file the way reports are built, with sections and slides that scripts fill and re-run. LibreOffice draws each slide as it changes, and `decks/x.html` shows them beside the chat, updating only the slides that changed. When a script ends, it lists the picture of each slide it wrote, for the agent to check.
- Decks come in code flower's look, light or dark, with its mark and a "Made with code flower · storyteller" line, or in your own PowerPoint template (`.potx` or `.pptx`). A template's fonts in a `fonts/` folder beside it are used, and fonts that are not installed are named.
- Titles too long for their template and tables too wide for their space are flagged.
- A deck's page has a button to download the slides, and *Print / PDF* prints one slide per page.
- *Print / PDF* works for reports open in the app's window too.
- `storyteller outline`, `build`, `finalize`, `remove` and `comments` work on decks as on reports.

## v0.3.0

*2026-10-31*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/storyteller/tags).
