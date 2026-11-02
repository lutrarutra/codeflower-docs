---
title: VS Code extension
description: "Release notes of the VS Code extension."
sidebar:
  order: 3
---

<!-- The ship skill adds an entry for each release, newest first. -->

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
