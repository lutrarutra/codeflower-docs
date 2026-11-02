---
title: Sandbox
description: "Release notes of the sandbox image and the agents in it."
sidebar:
  order: 2
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.20.0

*2026-11-02*

- At the end of `codeflower tui`, the sandbox finds the chat the agent's terminal UI used (Claude Code, Codex or OpenCode), so the app can say how to open it again.

## v0.19.0

*2026-11-02*

- Subagents run in chats of their own: Claude Code's and Codex's subagents no longer show their work in the chat that started them, and each one's chat is recorded beside it, opened only when you ask, and deleted with it. Their permission requests and questions come to the chat you work in.
- The default model of Claude Code's subagents, and the model and effort of Codex's, can be set per project from the chat's **More** menu; Codex takes them at its next start. OpenCode and DeepSeek Harness keep showing subagents as tool calls for now.
- The page comes from ui 0.14.0.

## v0.18.0

*2026-11-02*

- Chats can be opened in the agent's own terminal UI with [`codeflower attach`](/guides/terminal-ui/): OpenCode and Codex share the chat live with the page and VS Code, and Claude Code takes it over while its terminal UI runs, with the page following along. Files the agent shows come as links that open beside the chat in your browser; `codeflower-open FILE` gives one yourself.
- Agents know where the mounted folders are on your computer: `codeflower-path` translates paths either way, so they understand paths from your notes, sample sheets and data files, and tell you where results are on your computer.
- Claude Code writes its plans to `plans/` in the workspace, and the plan it asks to approve opens beside the chat, to read and edit before you answer.
- Images in chats are thumbnails the sandbox draws, including microscopy TIFFs, which previews now show too.
- Long chats open with their newest messages and load earlier ones as you scroll up.
- The worker's start message gives a link that connects VS Code on the same computer, or over Remote-SSH, in one click.
- Files in the project's private state stay hidden when the project folder is reached through a link.
- The page comes from ui 0.13.0.

## v0.17.0

*2026-11-01*

- Agents get the [Single-cell best practices](https://www.sc-best-practices.org/) book as a skill: every chapter with its references, to look up and cite when analysing single-cell or spatial omics data.
- The page comes from ui 0.12.0.

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
