---
title: Chatting
description: Talk to the agent, steer it while it works, run shell commands, answer its permission requests.
---

The chat is the same in VS Code and in the app's window.

## Choosing the agent

Each chat is one agent's, and every agent runs in the sandbox. In the app's window, the row of agent logos above
*New chat* chooses the agent of the next chat; it remembers your choice for the project. In VS Code, *New session*
on a worker asks which agent, or start one from an agent's row under *Agents*. Chats of different agents run side
by side, each with its own models, modes and settings; the chat's header shows its agent.

## Sending messages

- <kbd>Enter</kbd> sends, <kbd>Shift</kbd>+<kbd>Enter</kbd> starts a new line. On a touch screen, <kbd>Enter</kbd>
  starts a new line and the *Send* button sends.
- **While the agent works**, <kbd>Enter</kbd> **queues** your message: it is sent when the agent is done, one per
  turn. Queued messages show above the box, where you can edit one (click it), remove it, or send it now.
- <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Enter</kbd> **sends now**. With Claude Code and Codex, the agent reads it right away
  and keeps going (steering); with the others, its turn stops first.
- *Stop* ends the agent's turn. Queued messages go back into the box.

## Only the messages

The eye button in the chat's header folds each turn to your message and the agent's messages to you, so
replies it writes along the way stay in sight too. Its thinking and tool calls between two messages fold into
one row, such as *4 steps*, in their place, which opens to them; when a turn has only one such row, it says how
long the turn took (*Worked 4m 12s · 23 steps*). While the agent works, a spinner shows how long it has been at
it, with a faint line saying what it does now (the command it runs, *Thinking…*, *Writing…*). Files it showed
you, your own shell commands and a turn that stopped stay in sight, and permission requests and questions show
above the box as always.

Chats show every step unless you fold them; in the app's [Focus](/guides/app-window/) the steps are folded
unless you show them. Each keeps your choice: the app's window in the browser, VS Code for all its chats.

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
through the modes. What each agent offers is its own: code flower shows its choices as they are. A long list, such as
OpenCode's hundreds of models, has a search box (every word you type must match; <kbd>Enter</kbd> takes the first
match). Pin the models you use with the pin beside each: pinned ones come first, for every chat of that agent.

With OpenCode, each mode (build, plan) keeps its own model: the model you choose is the one for the chat's mode, and
switching modes switches to that mode's model. New chats start on build's. The choices are saved in the project, in
`codeflower-models.json` beside OpenCode's `opencode.jsonc`, so OpenCode's [terminal UI](/guides/terminal-ui/) uses them
too, from the sandbox's next start. A model you set for a mode in `opencode.jsonc` yourself
(`"agent": {"plan": {"model": "…"}}`) comes first in the terminal UI.

With DeepSeek Harness, new chats start on the model you chose last in the project, and each chat keeps its own. Before
you choose one, a project with only an OpenAI-compatible endpoint starts on the endpoint's first model.

DeepSeek Harness's picker offers DeepSeek's models when it has a DeepSeek key, and the endpoint's models you pinned or
added at [sign-in](/guides/sign-in/), not every model the endpoint serves. The effort picker shows only for a model
marked *thinks*, with the effort values given there. To change either, use *Edit keys and models…* on the sandbox's
*Manage* page; the agent restarts with them.

## Permissions and questions

When the agent asks before doing something, a card shows what it wants to do, with its options (allow once,
always, …) and *Cancel*. With DeepSeek Harness, a switch in the bar allows all of its requests in that chat
(on by default). Questions the agent asks you (e.g. multiple choice) appear as forms. A subagent's requests and
questions show in its parent's chat too, marked as the subagent's, and the subagent waits until you answer. While the agent
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
