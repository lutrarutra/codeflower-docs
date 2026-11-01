---
title: App
description: "Release notes of the codeflower app: command line, window and sandboxes."
sidebar:
  order: 1
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.21.0

*2026-11-01*

- `codeflower tunnel pair` no longer leaves the app running in the background: if it had to start the app to answer the pairing, it quits it again once the browser paired. On a cluster, this keeps the login node from holding the tunnel, so your jobs can take it over. Add `--keep-running` to keep your computer reachable from paired browsers afterwards.

## v0.20.0

*2026-11-01*

- **The tunnel follows your batch jobs.** With a home folder shared between computers, as on a cluster, the tunnel is no longer tied to the node that signed in. A job on any node connects it by itself, so you sign in and pair once, and your browsers stay paired. One computer connects at a time: the next takes over when the previous one's app quits, or 90 seconds after its job was killed.
- On a cluster, the app no longer forgets sandboxes started on other nodes.

## v0.19.0

*2026-11-01*

- **A rail of sandboxes.** The window lists the running sandboxes in a rail on the left, by two letters and grouped by computer, with a count of the chats that finished or wait for you. Choosing one shows its chats and folders in the sidebar, which <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>B</kbd> folds away.
- **+** in the rail opens *New sandbox*, which starts a sandbox on a computer or connects one running elsewhere by its `codeflower://` line, in place of *Add remote sandbox*. The computers button at the bottom of the rail opens what was *Server*.
- Runs sandbox 0.17.0, which brings the Single-cell best practices book as a skill.

## v0.18.0

*2026-11-01*

:::caution
Update the VS Code extension to 0.13.0 as well: older extensions cannot connect to sandboxes from this release, which use TLS.
:::

- **Encrypted connections to sandboxes.** The app and VS Code reach a sandbox over TLS, checked against the certificate fingerprint in its `codeflower://` line (`fp=…`), so nobody on the network can read your chats or stand in for the sandbox. Sandboxes started with `--server` stay plain HTTP, for a [reverse proxy](/guides/interactive-run-task/#a-browser-directly) in front.
- The app's page keeps its secret in the browser instead of a cookie, which every program listening on your computer could have received.
- A sandbox's token no longer appears in its log on the app's page.
- Sandboxes run in your computer's time zone instead of UTC.
- The tunnel is reached only over https.
- Runs sandbox 0.16.0.

## v0.17.0

*2026-11-01*

- **All your computers in one page.** Opened through the [tunnel](/guides/remote-access/#several-computers), the page shows the sandboxes of every computer the browser is paired with, side by side in the tabs and in Focus. It opens from the computer with the newest code flower, and offers another computer when one is off.
- Opening the page through the tunnel again is faster: the browser keeps the page's code.
- Runs sandbox 0.15.1.

## v0.16.0

*2026-11-01*

- **Plugins for Claude Code.** `plugins:` in [config.yaml](/reference/config/) gives the agent its own plugins in every project, and [`codeflower plugins`](/reference/cli/codeflower-plugins/) lists, adds, removes, enables and disables them for one project. They are fetched before a sandbox starts, also for network-isolated sandboxes; `codeflower plugins fetch` does it ahead, e.g. on a login node.
- **Focus** in the app's window: the chats of every sandbox in one list, in the order they need you, with the files each agent showed beside it. <kbd>Alt</kbd>+<kbd>J</kbd> goes to the next agent that waits for you.
- The app's window has a *Plugins…* dialog on a sandbox's overview, and the file editor fills its tab like VS Code's.
- Rootless Podman without the cgroup controllers to limit CPUs or memory now starts the sandbox without that limit, and says so, instead of failing.
- With Apptainer, the first start after downloading the image no longer fails to find it.
- The tunnel's account page shows how many sandboxes each computer runs.
- Runs sandbox 0.15.0.

## v0.15.1

*2026-11-01*

- Runs sandbox 0.14.1.
- Every `config.yaml` key is now described, in the [reference](/reference/config/) and in a schema that gives editors autocomplete.

## v0.15.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-app/releases).
