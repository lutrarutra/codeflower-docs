---
title: VS Code extension
description: "Release notes of the VS Code extension."
sidebar:
  order: 3
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.28.2

*2026-11-19*

- A chat tab shows the chat loading until its messages arrive, instead of briefly saying the chat is empty.
- The chat has the changes of ui 0.37.0: copying code shows a green check.

## v0.28.1

*2026-11-18*

- The chat has the changes of ui 0.36.0: code blocks have a copy button, and clicking inline code copies it.

## v0.28.0

*2026-11-18*

- Under a sandbox, the sidebar groups its folders under *Files* and its chats under *Chats*, after *Agents*, so a long chat list no longer hides the rest. *Files* names its folders beside it; *Chats* says how many chats need you or are working, and has a button for a new chat. *Agents* opens by itself only while no agent can answer yet.
- The chat has the changes of ui 0.35.0, and a report's figure opened to comment on can be saved with the overlay's download button.

## v0.27.0

*2026-11-18*

- A connected sandbox's row in the sidebar has a button that opens a shell in it, and *code flower: Open shell in sandbox* in the command palette does the same, asking which sandbox when several are connected. The terminal is named after the sandbox's project.
- The chat has the changes of ui 0.34.0: images the agent shows as tiles, and wider Markdown previews.

## v0.26.0

*2026-11-18*

- Files the agent shows are listed once in the chat, also in other windows that have it open, and also when they were shown while no window was connected (with sandbox 0.33.0 or later).

## v0.25.0

*2026-11-17*

- Ctrl+click on a sandbox's `codeflower://` line or its VS Code link in VS Code's terminal connects to that sandbox (after asking), instead of searching for the text.
- The chat has the changes of ui 0.32.0: times on prompts and turns, and day separators.

## v0.24.2

*2026-11-17*

- The chat has the changes of ui 0.31.1: *Copy path* follows the folders an env folder (`--env-dir`) now holds.

## v0.24.1

*2026-11-17*

- The chat has the changes of ui 0.31.0: a *Shown files* menu in the header.

## v0.24.0

*2026-11-16*

- Reports show in their preview tab, with a switch between *Interactive* (charts, explorers, comments), *Static* and *Code*, instead of a separate interactive tab. `codeflower.reports.openInteractive` picks the view a report opens in.

## v0.23.0

*2026-11-15*

- code flower's tabs come back when VS Code reloads the window or restarts: chats, file previews, interactive reports, browsers and plugin tabs, in their places. Until their sandbox is connected they say that they are connecting, or that the sandbox cannot be reached, with a button to try again, and they open as soon as it is.
- The chat has the changes of ui 0.29.0, among them the failed step that ended a turn shown outside the folded steps.

## v0.22.0

*2026-11-15*

- The *Print / PDF* button of an interactive report works: VS Code cannot print from a tab, so it opens the report in your browser, which shows the print dialog, where you can also save it as a PDF.

## v0.21.0

*2026-11-15*

- The chat has the changes of ui 0.28.0, among them the model and effort in one menu, and figure comments over the figure.
- A chat whose agent uses a browser has a button in its header that shows the browser in a tab beside the chat, where you can watch it, take it over and hand it back. The button says when the agent needs you in it.
- A button in the chat's header opens a shell in its sandbox as a VS Code terminal; closing the terminal ends the shell.

## v0.20.4

*2026-11-15*

- Maintenance release.

## v0.20.3

*2026-11-14*

- Maintenance release.

## v0.20.2

*2026-11-13*

- The chat has the changes of ui 0.25.0.

## v0.20.1

*2026-11-13*

- The chat has the changes of ui 0.24.0: the figure annotator opens in move mode, and the usage line's numbers line up with their icons.

## v0.20.0

*2026-11-13*

- Messages and preview feedback queued while the agent works wait in the sandbox, so they still run after VS Code closes, and the queue pauses with *Resume* after a turn that did not end normally (the changes of ui 0.23.0).

## v0.19.1

*2026-11-13*

- The chat has the changes of ui 0.22.0: background subagents' requests shown one after the other, a chat that waits only for one of them takes messages, and every file shown in the chat listed when it opens.

## v0.19.0

*2026-11-12*

- The chat's footer shows the commands the agent runs; *Connect* opens one in a read-only VS Code terminal with its output live. Closing the terminal only stops watching the command.
- The chat has the other changes of ui 0.21.0: the agent's background tasks in the footer, command output in tool cards, and messages sent while the agent works marked as adding to its task.

## v0.18.4

*2026-11-11*

- Maintenance release.

## v0.18.3

*2026-11-05*

- Maintenance release.

## v0.18.2

*2026-11-05*

- Maintenance release.

## v0.18.1

*2026-11-04*

- Maintenance release.

## v0.18.0

*2026-11-04*

- A worker lists its agents under *Agents*, with their logos and buttons for a new chat, sign-in and plugins. *New session* asks which agent when there is more than one.
- Chats take ui 0.17.0: each chat shows its agent's logo, and sign-in, plugins and usage are per agent.
- DeepSeek Harness's sign-in for an OpenAI-compatible endpoint offers the models the endpoint lists to pick from.
- Files and folders in the worker's tree have *Copy Path (Sandbox)* and, in a mounted folder, *Copy Path (Host)*.

## v0.17.0

*2026-11-03*

- Chats take ui 0.16.0: folded turns keep the agent's messages in sight, long model lists have a search box, and permission cards say more about what the agent wants to do.
- Models you pin in the model picker come first in every chat of that agent; VS Code remembers them.
- A new OpenCode chat shows its slash commands from the start.

## v0.16.1

*2026-11-02*

- The Workers view, while empty, says to start a worker with `codeflower sandbox` (app 0.25.0), the new name of `codeflower interactive`.

## v0.16.0

*2026-11-02*

- The chat's eye button (ui 0.15.0) folds each turn to your message and the agent's answer. VS Code keeps the choice for all chats.

## v0.15.0

*2026-11-02*

- Subagents in chats of their own (ui 0.14.0): a card for each in the chat that started it, a badge of the running ones, and their chats in tabs of their own, read-only and loaded when opened.
- Their default model and effort under **More**, and a button to restart the agent when a setting waits for it.

## v0.14.0

*2026-11-02*

- The chat improvements of ui 0.13.0: long chats load as you scroll, images show as thumbnails (also microscopy TIFFs), tool calls show how long they take, and a plan to approve opens beside its chat to read and edit.
- A chat open in the agent's [terminal UI](/guides/terminal-ui/) says so.
- *Connect to worker* also takes the `vscode://` link the worker prints.

## v0.13.1

*2026-11-01*

- Maintenance release.

## v0.13.0

*2026-11-01*

- Connects to sandboxes over TLS, checked against the certificate fingerprint in their line; a sandbox without one is marked *unencrypted* in the sidebar. Needed for sandboxes from app 0.18.0.
- Links an agent asks you to open must be web pages, and the dialog shows where they go.

## v0.12.1

*2026-11-01*

- Maintenance release.

## v0.12.0

*2026-11-01*

- *Plugins…* on a connected worker opens the agent's plugins in a tab: what is installed, its catalogs, and adding one from its source.

## v0.11.1

*2026-11-01*

- Maintenance release.

## v0.11.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-vsc-extension/releases).
