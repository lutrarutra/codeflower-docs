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
- With two or more queued, the **All together** switch above them sends them all in the agent's next turn, as one
  message. It starts off each time a second message joins the queue.
- Queued messages wait in the sandbox, not in your window: they are still sent if you close the tab or your laptop,
  and every window with the chat open shows the same queue.
- If a turn ends without finishing normally (the agent refuses, hits its limit, or fails), the queue **pauses** so the
  rest does not run unattended. It says why above the box; choose *Resume* to go on, or remove what you no longer want.
- <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Enter</kbd> **sends now**. With Claude Code and Codex, the agent reads it while it
  works and keeps going (steering). A command Claude Code is running moves to the background and goes on, and it stops
  it only if your message asks for that; Codex reads the message at its next step. With the others, the turn stops
  first, and a command running in it stops too.
- *Stop* ends the agent's turn. Your queued messages go back into the box; queued actions and preview feedback stay,
  paused, until you choose *Resume*.

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

New chats start with the mode, model and effort you chose last for that agent in the project, in VS Code or the app
alike, where the agent still offers them. Each chat keeps its own settings, also when you open it again after the
sandbox restarted.

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

## Forking a chat

A fork is a copy of a chat to try another way from, while the original stays as it is.

- **Fork from here**: hover over one of your messages and click *Fork from here*. The fork has the chat up to
  before that message, and opens with the message in its box: send it as it is, or change it first.
- **Fork the whole chat**: open the list of chats under the chat's title and click the fork button.

A forked chat says at the top which chat it came from; click the name to open that chat. When you fork a whole
chat, Claude Code and Codex copy it themselves, so the fork keeps everything the agent knew, its tools' output
included. A fork from before a message, and any fork of another agent's chat, is a new chat that gets a summary of
the earlier one's messages and tool calls with your first message to it.

## Agents and other chats

Agents can work with the project's other chats through `codeflower-chat`:

- **Read** any chat of the project, any agent's, to see what was done there. Ask, for example, "what did we
  decide in the QC chat?". Reading changes nothing and needs no permission.
- **Fork** a chat, this one or another, to try an alternative, and send the fork its first message.
- **Start a new chat**, named, with its first message, with the same agent or another one. For example, "ask
  Codex in a new chat to review the clustering".

Each fork or new chat an agent wants asks you first, in its chat, with the agent, the title and the first message.
If you allow it, the new chat starts working on its own and shows in the list of chats, where you can open it.


## Waiting for something

When the agent has to wait for something, such as a pull request to be merged, a result file to appear or a
server to start, it starts a **watch** instead of keeping its turn busy. A watch is a command the sandbox runs every
so often, for example `gh pr view 12` every 2 minutes, until a condition holds. Then the chat gets a message with
the command's output, and the agent goes on from there. Watches keep running when you close every window, so a
sandbox on a server can wait for hours with no one connected.

Ask for one in your own words, for example "tell me when PR 12 is merged" or "carry on once the pipeline's
summary file is there".

The eye icon at the right of the chat's footer, next to background commands, batch jobs and subagents, counts
the chat's running watches. Click it to list them, with each one's command, condition and number of runs:

- Click a watch to open its output in a tab. The tab shows every run's output, and new runs as they come.
- Stop a running watch with its stop button. The agent is told that you stopped it.

A watch also ends on its own when its command fails three times in a row, or after its time limit (a day unless
the agent asks for longer). The agent is told either way. Watches stop when the sandbox stops.

In Roots, the project's map of ideas, a watch can be one of an idea's needs: the idea shows as blocked, with the
eye icon and what it waits for, and becomes active again when the watch's condition holds. Click the need in the
idea's panel to open the watch's output.
