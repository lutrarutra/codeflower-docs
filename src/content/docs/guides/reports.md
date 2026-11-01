---
title: Reports
description: The agent's reports, single HTML files with figures, interactive charts and your comments.
---

The agent writes its findings as **reports**: one HTML file with everything inside (figures, interactive charts,
tables, data, fonts). It works offline, can be shared by email or archived, and prints to PDF from a browser. code
flower's agent writes them with [storyteller](https://github.com/lutrarutra/storyteller), a Python library in the
sandbox.

## How a report grows

The agent builds the report **while it analyses**: it lays out the sections first, then each analysis script
fills its own section. The report opens beside the chat and updates as it goes. Unfinished sections are marked;
re-running a script replaces its section.

A report typically has:

- a **summary** at the top: the findings in plain language, what the data supports and how sure it is
- headline **numbers**
- **sections** with text, figures, interactive charts and tables
- **explorers**, where you judge thresholds and filters yourself (e.g. move a cut-off and see how many cells pass)
- **callouts** for caveats and decisions
- methods and provenance (which agent and model wrote it, and when)

## Asking for one

Ask in plain words, or use the chat's *Tools* menu:

| Action | Does |
| --- | --- |
| Generate report | writes a report from the chat's existing results |
| Update report | brings an existing report up to date |
| Answer report comments | works through open comments on reports |
| Methods section | writes a reproducible methods section |

[`codeflower task`](/guides/interactive-run-task/#task) builds a report by itself, as `report.html` in the first
output folder.

## Reading and commenting

In VS Code and the app, a report opens in an **interactive tab**: charts, explorers and **comments** work there.
Select text in the report and right-click to comment: a note for other readers, or a request for the agent.
Comments are saved in the report file itself, so they travel with it. Then ask the agent to *Answer report
comments*. Comment on a figure from its preview tab instead (see [Files and previews](/guides/files-and-previews/#feedback-on-a-figure)).

Explorer settings and comments can also go to the chat through the preview's feedback box. Nothing goes to the
agent until you send it.

## Where reports go

Drafts live in the agent's workspace (`reports/`). The agent copies a finished report to your output folder,
`/data/output/<name>/`, on your computer.
