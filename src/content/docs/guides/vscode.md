---
title: VS Code
description: Connect VS Code to sandboxes, locally or over Remote-SSH, and work with their chats, files and reports.
---

The [code flower extension](/start/install/#the-vs-code-extension-optional) adds a *code flower* view to the
activity bar, listing the sandboxes (workers) you connected.

## Connecting

- **Paste the address.** *Connect to worker…* (the **+** in the view, or **code flower: Connect to worker** in the
  command palette), then paste the `codeflower://…` line the sandbox printed. Text around it is ignored.
- **Click a link.** Sandboxes, and the app's window (*Open in VS Code instead*), offer
  `vscode://codeflower.codeflower/connect?address=…` links. VS Code asks before connecting.

Connected workers are remembered (in VS Code's secret storage, since the address holds the token) and reconnect
when VS Code starts. One that cannot be reached stays listed as disconnected, with *Reconnect*. After
connecting, VS Code offers the agent's [sign-in](/guides/sign-in/) if it is not signed in for the project.

## Remote-SSH and clusters

The extension runs where the workspace is. Connected to a cluster's login node over Remote-SSH, it runs there and
connects to sandboxes on compute nodes, which your computer usually cannot reach. See
[HPC clusters](/guides/hpc/#connect-to-it).

## The worker list

Each worker shows:

- its **sessions**, with whether each is working or waits for you; *New session* (the speech bubbles) starts one
- **Workspace**, **Inputs**, **Outputs**, **Code** and **Skills**: the sandbox's folders, with where each comes from
  on the host in its tooltip. Click a file to open it.
- your login's **quota** windows; a worker nearly out of quota turns orange

Right-click a worker for *Sign in…* and *Reconnect*; *Remove worker* forgets it.

The status bar says *An agent needs you* when a chat waits for your answer (click it to go there), or how many
agents are working.

## Chats, files and reports

Sessions open as chat tabs; see [Chatting](/guides/chatting/). Files the agent shows, and paths you click in the
chat, open in tabs beside it, where you can comment on them. See [Files and previews](/guides/files-and-previews/).

[Reports](/guides/reports/) open in their interactive tab, with charts, explorers and comments.
The setting `codeflower.reports.openInteractive` (default on) controls this; off, they open in the plain
preview like other HTML files.

Uploading and downloading files is done in the app's window, not in VS Code.

See also: [VS Code commands and settings](/reference/vscode/).
