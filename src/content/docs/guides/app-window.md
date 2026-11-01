---
title: The app window
description: codeflower client, the window that starts sandboxes, connects to others, and hosts their chats.
---

`codeflower client` (also: *code flower* in the applications or Start menu) opens the app's page in your
browser. It runs on your computer and is served only to it, at `http://127.0.0.1:7720/` (or a free port when that
one is taken). Started again while it runs, it opens the running one.

## Sandboxes here and elsewhere

- The **rail** on the left lists the sandboxes that run, each by two letters (from its name, else its project),
  grouped by the computer they run on. Hover one for its name, where it runs and what it does; a number on it
  counts the chats that finished or wait for you.
- **+** at the end of the rail opens *New sandbox*: *Start a new one* (the agent, folders and network; see the
  [quickstart](/start/quickstart-app/)), or *Connect one running elsewhere*, e.g. a cluster job, by the
  `codeflower://` line it printed. The app remembers a connected sandbox, and relays the connection so the token
  never reaches the browser; it shows under *Elsewhere* in the rail. A sandbox's own link
  (`http://127.0.0.1:7720/#add=…`) opens the dialog with its line filled in.
- Choosing a sandbox in the rail shows its chats and folders in the sidebar, with *Stop*, *Manage* (rename,
  change its address or token, remove it; also a right click in the rail) and *Details* (its sign-in, *Plugins…*
  and *Open in VS Code instead*).
- The **computers** button at the bottom of the rail shows each computer: which container engines are ready,
  the sandbox image, every sandbox there, stopped ones too, and [remote access](/guides/remote-access/). A dot on
  it means some sandboxes or computers are not in the rail, because they stopped or do not answer.

With `--connect-only` (or `client.connect_only: true` in [config.yaml](/reference/config/)) the app never starts
sandboxes, e.g. on a cluster's login node.

## The page

- The sidebar folds away with <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>B</kbd>, leaving the rail, and can be resized.
- Chats, folders and files open in tabs, in groups you can split and drag, like an editor. The layout is
  remembered.
- *Files* under a sandbox browses its folders, where you upload and download. See
  [Files and previews](/guides/files-and-previews/).
- A chat that finished or waits for you while you look elsewhere is counted on its sandbox in the rail, and a
  note at the top of the page opens it. *Focus*, at the top of the rail, lists the chats of every sandbox, those
  that need you first.
- Opened [through the tunnel](/guides/remote-access/#several-computers) with several paired computers, the rail
  names each computer over its sandboxes, and the computers page has a switch on top for the computer it shows.

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

When this computer is signed in to [remote access](/guides/remote-access/), `codeflower run` and `interactive`
start the app in the background if it is not running, so paired phones and browsers can reach their sandboxes.
Open it with `codeflower client`; it quits when you quit it there or sign out of the tunnel. `tunnel pair` starts
it too, but only until the browser paired, unless you add `--keep-running`.
