---
title: App
description: "Release notes of the codeflower app: command line, window and sandboxes."
sidebar:
  order: 1
---

<!-- The ship skill adds an entry for each release, newest first. -->

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
