---
title: Chat (ui)
description: "Release notes of the chat, in VS Code and the app."
sidebar:
  order: 4
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.14.0

*2026-11-02*

- **Subagents in chats of their own.** A chat no longer fills with its subagents' tool calls and messages. Each subagent shows as a card where it started, in one row: its name, model, effort and usage as the agent reports them, how long it runs or ran, how it ended, and buttons to open its chat or stop it.
- A badge below the composer counts the running subagents and lists them with the latest ended ones.
- A subagent's chat opens in a tab of its own, read-only: its task and its work, live while it runs. It loads only when you open it.
- A subagent's permission requests and questions show in its parent's chat, saying which subagent asks.
- Under **More**, the default model and effort of subagents ("Same as main" by default), where the agent takes them.

## v0.13.0

*2026-11-02*

- Long chats open with their newest messages and load earlier ones as you scroll up.
- Images in chats show as thumbnails, including microscopy TIFFs, and large images open in a preview instead of failing.
- Tool calls show how long they take, and a running one how long it has been going.
- A plan Claude Code asks to approve opens beside its chat, to read and edit before you answer; approved plans no longer show as "Not allowed".
- A chat open in the agent's [terminal UI](/guides/terminal-ui/) says so, with the command to open it there, and links from the terminal open their file beside the chat.

## v0.12.0

*2026-11-01*

- The app's page lists the running sandboxes in a rail on the left, by two letters, grouped by computer and colored by it, with a count of the chats that finished or wait for you. Choosing one shows its chats and folders in the sidebar beside it; the sidebar folds away and leaves the rail.
- *New sandbox* (**+** in the rail) starts a sandbox on any of your computers or connects one running elsewhere, and says why a computer cannot start one. It replaces *Add remote sandbox*.
- The computers page (what was *Server*) also lists the sandboxes connected by their line, and its button in the rail shows when some sandboxes or computers are not in the rail.

## v0.11.0

*2026-11-01*

- Connections to sandboxes are encrypted when their line has a fingerprint; the page marks a sandbox without one as unencrypted.
- Links an agent asks you to open must be web pages, and the dialog shows where they go.
- An interactive report that loads another page in its place is stopped. For a sandbox with an isolated network, reports open without their scripts unless you ask.
- Through the tunnel, the browser's key can no longer be read out of the browser.
- The agent's sign-in and plugins appear in each sandbox's card under Server, and starting sandboxes through the tunnel shows as locked, with the setting that allows it.
- Reports in the chat use the brand's fonts.

## v0.10.0

*2026-11-01*

- Through the tunnel, the app's page shows the sandboxes of every paired computer, grouped by computer in the sidebar; chats from all of them open side by side and in Focus. A computer that stops answering keeps its sandboxes and chats listed, greyed, until it is back.
- Focus connects to the next chat's sandbox ahead, and a chat whose connection was closed reconnects as soon as you look at it.

## v0.9.0

*2026-11-01*

- A Plugins view for the agent's own plugins, in VS Code and the app's window.
- The Focus view of the app's window.
- The file editor fills its tab, with line numbers at the edge, as in VS Code.

## v0.8.0

*2026-11-01*

- The chat's colours and fonts are now shared with this documentation site. The chat looks as before.

## v0.7.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-ui/tags).
