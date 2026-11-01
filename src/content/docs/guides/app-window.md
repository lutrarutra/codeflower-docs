---
title: The app window
description: codeflower client, the window that starts sandboxes, connects to others, and hosts their chats.
---

`codeflower client` (also: *code flower* in the applications or Start menu) opens the app's page in your
browser. It runs on your computer and is served only to it, at `http://127.0.0.1:7720/` (or a free port when that
one is taken). Started again while it runs, it opens the running one.

## Sandboxes here and elsewhere

- **Server** shows this computer: which container engines are ready, the sandbox image, the start form, and
  [remote access](/guides/remote-access/). See the [quickstart](/start/quickstart-app/). Each sandbox running
  there shows whether its agent is signed in, with *Sign in…*, and *Plugins…* for the agent's own plugins.
- **Add remote sandbox** (in the sidebar) connects to a sandbox running elsewhere, e.g. a cluster job, by the
  `codeflower://` line it printed. The app remembers it, and relays the connection so the token never reaches the
  browser. A sandbox's own link (`http://127.0.0.1:7720/#add=…`) does the same in one click.
- Choosing a sandbox shows its chats, *New chat*, *Sign in…*, and *Open in VS Code instead*. Manage it (rename,
  change its address or token, remove it) from its menu.

With `--connect-only` (or `client.connect_only: true` in [config.yaml](/reference/config/)) the app never starts
sandboxes, e.g. on a cluster's login node.

## The page

- The sidebar folds to a rail with <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>B</kbd> and can be resized.
- Chats, folders and files open in tabs, in groups you can split and drag, like an editor. The layout is
  remembered.
- *Files* under a sandbox browses its folders, where you upload and download. See
  [Files and previews](/guides/files-and-previews/).
- A chat that finished or waits for you while you look elsewhere is marked in the sidebar, and a note at the top
  of the page opens it.
- Opened [through the tunnel](/guides/remote-access/#several-computers) with several paired computers, the sidebar
  lists the sandboxes under a heading per computer, and *Server* has a switch on top for the computer it shows.

## Tray and notifications

Where the desktop has a tray (Windows, the macOS menu bar, Linux desktops with StatusNotifierItem, e.g. KDE, or
GNOME with the AppIndicator extension), the app shows an icon that opens the page and quits. When a chat asks a
question, wants a permission, or ends its turn, the app tells the desktop. Turn them off with `--no-tray` and
`--no-notifications`, or `client.tray` and `client.notifications`.

## Quitting

Quitting (<kbd>Ctrl</kbd>+<kbd>C</kbd>, the page, or the tray) asks first when sandboxes are running:

- **Wrap up and quit**: chats that are working in the sandboxes started here are asked to save their work and
  stop, at most for 10 minutes (`client.wrap_up_minutes`), then the sandboxes stop.
- **Quit now** stops them at once (as does a second <kbd>Ctrl</kbd>+<kbd>C</kbd>).
- **Keep running** cancels.

Sandboxes started elsewhere keep running.

## On a remote machine

On a machine you reach over SSH, run the app there and forward its port:

```sh
ssh -L 7720:127.0.0.1:7720 login.cluster.example
codeflower client --no-browser   # prints the page's address to open on your computer
```

Over SSH, the app shows no tray icon or notifications.

## Running in the background

When this computer is signed in to [remote access](/guides/remote-access/), `codeflower run`, `interactive` and
`tunnel pair` start the app in the background if it is not running, so paired phones and browsers can reach
their sandboxes. Open it with `codeflower client`; it quits when you quit it there or sign out of the tunnel.
