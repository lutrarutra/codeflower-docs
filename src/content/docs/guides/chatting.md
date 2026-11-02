---
title: Chatting
description: Talk to the agent, steer it while it works, run shell commands, answer its permission requests.
---

The chat is the same in VS Code and in the app's window.

## Sending messages

- <kbd>Enter</kbd> sends, <kbd>Shift</kbd>+<kbd>Enter</kbd> starts a new line. On a touch screen, <kbd>Enter</kbd>
  starts a new line and the *Send* button sends.
- **While the agent works**, <kbd>Enter</kbd> **queues** your message: it is sent when the agent is done, one per
  turn. Queued messages show above the box, where you can edit one (click it), remove it, or send it now.
- <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Enter</kbd> **sends now**. With Claude Code and Codex, the agent reads it right away
  and keeps going (steering); with the others, its turn stops first.
- *Stop* ends the agent's turn. Queued messages go back into the box.

## Slash commands

Type <kbd>/</kbd> for the agent's own commands (e.g. `/compact`). <kbd>Enter</kbd> runs the highlighted one,
<kbd>Tab</kbd> completes it.

## Shell commands

Start a message with `!` to run a shell command in the sandbox, in the agent's workspace, e.g.
`!ls /data/input`. Its output streams into the chat, and the agent sees it with your next message. Commands stop
after 15 minutes.

## Mode, model and effort

The bar under the box shows what the agent offers: its **mode** (e.g. for Claude Code: ask before edits, accept
edits, plan, auto), **model**, **reasoning effort**, and more under *More settings*. <kbd>Shift</kbd>+<kbd>Tab</kbd> cycles
through the modes. What each agent offers is its own: code flower shows its choices as they are.

## Permissions and questions

When the agent asks before doing something, a card shows what it wants to do, with its options (allow once,
always, …) and *Cancel*. With DeepSeek Harness, a switch in the bar allows all of its requests in that chat
(on by default). Questions the agent asks you (e.g. multiple choice) appear as forms. While the agent
waits for you, the chat and the sandbox are marked, and VS Code's status bar says *An agent needs you*.

## Actions

The *Tools* menu in the chat's header sends ready-made requests: write or update a report, answer comments on reports,
write a methods section, save a checkpoint, or wrap up. See [all chat actions](/reference/chat-actions/).

## Usage

The meter shows how full the agent's context is, the chat's tokens (and estimated cost, for Claude Code and
OpenCode), and your login's quota windows with when they reset. A sandbox nearly out of quota turns orange in VS
Code's worker list.

## Several windows at once

You can open the same sandbox, and the same chat, in VS Code and in the app's window (or on your phone) at the
same time. Messages from either take turns; a permission request shows in all of them, and the first answer
counts. **The agent keeps working when you close every window**: reopen the chat later to see what it did.

A chat can also be open in the agent's own [terminal UI](/guides/terminal-ui/) (`codeflower attach`), which the page
follows; the chat says so while it is.

## Sessions

Each chat is saved in the project, named after its first message. Rename or delete it from the sandbox's list (a
chat that is working cannot be deleted). A chat open in another sandbox of the same project shows read-only.
