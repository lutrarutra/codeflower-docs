---
title: Sandbox
description: "Release notes of the sandbox image and the agents in it."
sidebar:
  order: 2
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.16.0

*2026-11-01*

:::caution
Update the VS Code extension to 0.13.0 as well: older extensions cannot connect to sandboxes from this release, which use TLS.
:::

- Sandboxes serve TLS with a certificate the app makes for each start, and their `codeflower://` line carries its fingerprint, which VS Code and the app check.
- The page `--server` serves takes its key as a bearer token instead of a cookie, and says on start that it is plain HTTP, meant for a TLS [reverse proxy](/guides/interactive-run-task/#a-browser-directly) or `ssh -L`.
- The page comes from ui 0.11.0.

## v0.15.1

*2026-11-01*

- Maintenance release: the page `--server` serves comes from ui 0.10.0.

## v0.15.0

*2026-11-01*

- The agent's own plugins (Claude Code first), from the app's config and the chat's *Plugins…*: kept in the project and active after the agent restarts.
- The chat page served with `--server` comes from ui 0.9.0.

## v0.14.1

*2026-11-01*

- Maintenance release.

## v0.14.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-sandbox/releases).
