---
title: Files and previews
description: See what the agent made, give feedback on figures, edit files, and move files in and out of a sandbox.
---

## Files the agent shows you

When the agent has something to show (a figure, a table, a report), it runs `codeflower-show`, and the files open
in tabs beside the chat, in the window you last sent a message from. Paths in the chat open the same way when you
click them, and so do files in the sandbox's folder list.

A preview follows its file: when the agent changes it, the tab updates.

| Kind | Shown as |
| --- | --- |
| Images (PNG, JPEG, SVG, …) | the image, with comments on regions and SVG elements |
| Markdown | rendered |
| HTML, including [reports](/guides/reports/) | rendered (reports also open interactively) |
| CSV, TSV | a table |
| JSON, text and code | an editor; text files can be edited and saved |

PDFs cannot be previewed yet.

## Feedback on a figure

Under a preview, *Tell the agent* sends your feedback to the chat the file came from (or one you pick). On a figure:

- **drag** over an area, or **click** an element of an SVG, and write a comment for it
- add as many as you like; each is numbered on the figure

They go to the agent together, as one message about that file. If the agent is busy, it reads them when its turn
ends.

## Editing

Text files open in an editor. Save writes them back into the sandbox, into the workspace or a read-write folder. If
the agent changed the file since you started editing, you choose: *Load theirs* or *Keep mine*.

## Uploading and downloading

In the app's window, a sandbox's *Files* lists its folders: the workspace, then Inputs, Outputs, Code and Skills.

- **Upload**: drop files or folders onto a writable folder, or use its menu's *Upload files…* and
  *Upload folder…*. When names are taken already, choose *Replace* or *Keep both*.
- **Download**: a file's *Download…*, or a folder's, which saves it as a zip.

Uploads are checked end to end and can be up to 1 GB per file; a folder downloads up to 10 GB. Progress shows under
*Transfers*.

Inputs and Skills are read-only in the sandbox, so uploads go to the workspace, Outputs or Code. In VS Code, use the
app's window for transfers; there, *Save* on a preview keeps a copy on your computer.

## Where files are allowed

The agent's tools and these windows reach only the sandbox's folders: the workspace and your mounted folders.
Writes go only to the workspace and read-write folders, never into hidden folders such as `.git`.
