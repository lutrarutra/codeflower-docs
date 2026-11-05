---
title: App
description: "Release notes of the codeflower app: command line, window and sandboxes."
sidebar:
  order: 1
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.28.2

*2026-11-05*

- Sandboxes run sandbox 0.23.3.

## v0.28.1

*2026-11-05*

- Sandboxes run sandbox 0.23.2.
- The app's window takes ui 0.19.1: what you are writing in a chat stays there as you switch between Chat and Focus or between chats.
- The install scripts find the latest release without GitHub's API, which refuses more than 60 lookups an hour from one address, as from a cluster's login nodes, where installing failed with "could not look up the latest release".

## v0.28.0

*2026-11-05*

- Sandboxes run sandbox 0.23.0, in which agents can make PowerPoint slide decks you watch appear beside the chat.
- The app's window takes ui 0.19.0: *Print / PDF* works for reports, a deck's slides download through your browser, and in Focus you step through the files shown beside a chat.

## v0.27.1

*2026-11-04*

- Rootless Podman starts sandboxes on machines without subuid and subgid ranges, as on many clusters, where the sandbox used to fail to start.
- `codeflower check` shows Podman's version without its warnings about a missing systemd session.
- The app's window takes ui 0.18.0: a *New chat* dialog to choose the agent and a title, and pinned models for OpenAI-compatible endpoints.
- Uses sandbox image 0.22.1.

## v0.27.0

*2026-11-04*

:::caution
`codeflower sandbox` no longer takes `--agent`: every agent runs in the sandbox, and you choose one per chat. Remove `--agent` from `codeflower sandbox` commands in scripts and batch jobs. `run`, `task`, `tui` and `plugins fetch` keep it. This release needs sandbox image 0.22.0, which it pulls.
:::

- A sandbox runs every agent (Claude Code, Codex, DeepSeek Harness and OpenCode), and each chat is one agent's ([Chatting](/guides/chatting/#choosing-the-agent)). An isolated sandbox reaches all the agents' services, and API keys and plugins from the settings reach every agent.
- `codeflower attach` asks which agent a new chat is for; `--agent` picks it with `--new`.
- `--projects-dir` (`projects_dir:` in the settings) sets the folder of named projects, and `--env-dir` (`env_dir:`) keeps the projects' software environments and download caches elsewhere, for example on scratch ([Projects and folders](/guides/projects-and-folders/)).
- Stopping a sandbox from the app's window works for Apptainer sandboxes started in a terminal, which used to keep running. A sandbox that does not stop in time is killed, and a second Ctrl+C kills it at once.
- R packages installed in a project are kept per R version, with renv's cache in the project's environment.
- The app's window takes ui 0.17.0: the agent switch for new chats, a terminal into the sandbox, and copying a file's sandbox or host path.
- Sandboxes run image 0.22.0.

## v0.26.0

*2026-11-03*

- Codex can sandbox its own commands in Docker and Podman containers: the app lets it create the user namespaces it needs, and nothing more.
- OpenCode offers OpenCode Zen's free models again.
- `--host` no longer makes Docker and Podman sandboxes unreachable: it applies to Apptainer, and Docker and Podman always publish on 127.0.0.1.
- The app's window takes ui 0.16.0: folded turns keep the agent's messages in sight, model search and pins, *Open in Focus* and *Older chats*.
- Sandboxes run image 0.21.0.

## v0.25.0

*2026-11-02*

:::caution
`codeflower interactive` is now `codeflower sandbox`: change scripts and batch jobs (`--wrap "codeflower interactive …"`) to the new name. The old one is gone.
:::

- `codeflower sandbox` starts a sandbox to work with from VS Code or the browser, with the same flags `codeflower interactive` had ([Sandbox, run and task](/guides/sandbox-run-task/)).
- Sandboxes run image 0.20.2.

## v0.24.1

*2026-11-02*

- The window's page folds each turn to your message and the agent's answer with the eye button (ui 0.15.0). Focus folds them unless you show them, the chat tabs show them unless you fold them.
- Sandboxes run image 0.20.1.

## v0.24.0

*2026-11-02*

- When `codeflower tui` ends, it prints the `codeflower` command that opens the same chat again, with your folders and the chat's id, in place of the agent's own command, which only works inside the sandbox.
- An id is given to `codeflower tui` as `--resume=ID`; the examples now say so.
- Sandboxes run image 0.20.0.

## v0.23.0

*2026-11-02*

- The window's page shows subagents in chats of their own (ui 0.14.0): a card for each in the chat that started it, a badge of the running ones, and each subagent's chat in a tab of its own, loaded when opened.
- Sandboxes run image 0.19.0.

## v0.22.0

*2026-11-02*

- **The agent's own terminal UI.** [`codeflower attach`](/guides/terminal-ui/) opens a chat of a running sandbox in Claude Code's, Codex's or OpenCode's terminal UI, while the app's page and VS Code follow it. `~s` switches chats, `~.` detaches and leaves it running, and `~l`/`~o` open the images and reports the agent showed in your browser. `codeflower chats` and `codeflower terminals` list a sandbox's chats and the terminal UIs running on them.
- `codeflower tui` starts a sandbox that only runs the agent's terminal UI, in your terminal, and ends with it; `--continue` and `--resume` open earlier chats of the project.
- When a folder you mount is reached through a link (a home folder on `/gpfs`, say), the agent knows both paths, so it understands the one you and your files use.
- The window's page has the chat improvements of ui 0.13.0, and sandboxes run image 0.18.0.

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

- **Encrypted connections to sandboxes.** The app and VS Code reach a sandbox over TLS, checked against the certificate fingerprint in its `codeflower://` line (`fp=…`), so nobody on the network can read your chats or stand in for the sandbox. Sandboxes started with `--server` stay plain HTTP, for a [reverse proxy](/guides/sandbox-run-task/#a-browser-directly) in front.
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
