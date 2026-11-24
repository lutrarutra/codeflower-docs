---
title: storyteller
description: "Release notes of storyteller, the report library."
sidebar:
  order: 6
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.6.5

*2026-11-24*

- Text and captions take the column's full width, like the figures and tables beside them.
- A section moved with `move()` also moves in a report that is open, without reloading it.

## v0.6.4

*2026-11-18*

- Long paths in inline code, and long lines in the error of a section that failed to update, wrap inside their column instead of stretching it.
- Prose is justified and hyphenated in wide columns, and no word is left alone on the last line of a paragraph, caption or heading.

## v0.6.3

*2026-11-16*

- The skill describes the report tab's *Interactive* and *Static* views.

## v0.6.2

*2026-11-15*

- Parts of a report or deck moved with `move()` keep their new order when saved, also when another script rewrites one of them afterwards, and moving no longer overwrites what other scripts changed in the meantime.

## v0.6.1

*2026-11-15*

- SVG figures sized in millimetres, centimetres or inches keep their size in reports and slides, and a figure with icons nested in it gets the size of the whole figure, not of one of its icons.

## v0.6.0

*2026-11-12*

- In the code flower app, clicking a figure in a report opens it over the whole window, full size, so you can comment on its parts. Elsewhere, for example in a downloaded report, it opens in the report's own lightbox as before.
- A report's buttons go below its title whenever its header is narrow, not only in a narrow window, and tables in a narrow pane scroll sideways instead of squeezing their cells to a character a line.

## v0.5.0

*2026-11-05*

- Slides you can edit in PowerPoint. `d.chart(...)` makes real PowerPoint charts (bar, horizontal bar, line, area, pie, scatter) whose data you can change with *Edit Data*. `d.flow(...)`, `d.cards(...)` and `d.callout(...)` draw a process, a grid of findings and a take-home message as ordinary shapes and text. All of them take the template's colours, in light and dark slides.
- Matplotlib figures and SVG files go on slides as SVG, which PowerPoint can turn into shapes (*Convert to Shape*), their text included. Figures with thousands of points stay pictures, unless the points are drawn with `rasterized=True`.
- Negative values in bar charts are drawn the right way.
- In a narrow pane beside the chat, a report's or deck's buttons sit below its title, which no longer breaks mid-word.

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
