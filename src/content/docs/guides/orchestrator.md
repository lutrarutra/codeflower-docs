---
title: Sensitive data and orchestrators
description: Let a hosted model direct and check a model on your cluster that works with data you may not send out, without giving it the data.
---

Some data may not go to a hosted model such as Claude: patient data, for example. A model on your own cluster may
work with it, but such models are smaller and make more mistakes. An **orchestrator** brings the two together: a
Claude chat that directs a chat on your cluster's model, its **executor**, and checks its work, without access to
the data. The executor reads, processes and plots the data; the orchestrator plans, reviews and corrects.

## Starting one

1. Open, or start, a chat with an agent that uses your cluster's model, for example DeepSeek Harness with an
   OpenAI-compatible endpoint (see [Sign-in](/guides/sign-in/)). This is the executor.
2. In its header, open the **Tools** menu (the wrench) and choose *Add an orchestrator*.

A new Claude Code chat opens, *Orchestrator of …*, linked to that chat for good. Talk to it as to any agent: say
what you want done, and it sends the executor one step at a time, reads the reply and the commands the executor
ran, and asks for checks or fixes. You can also keep talking to the executor directly.

A chat can have several orchestrators. An orchestrator directs only its one chat.

## What each side sees

The orchestrator has none of Claude Code's tools for files or commands. It can:

- send the executor a message and get back its final reply with the **commands and code it ran** (for file edits
  only which files, never what was written; no output), so it can check how a result was computed;
- answer the executor's questions: the executor runs `codeflower-orchestrator ask "…"` when it is stuck;
- search the web, list the names and sizes of the files the executor works with, and see the figures and reports
  you allow; you choose each of these, see below.

The executor is told to send code, file and column names, data types, counts, aggregates and errors, never rows,
identifiers or anything else that could identify a person.

In the executor's chat, the orchestrator's messages show as cards of their own, and under each reply a line
*Sent to the orchestrator* unfolds to exactly what it got. Its footer shows a compass badge with the
orchestrators that direct it.

## What the orchestrator may do

In the orchestrator's chat, unfold *What it may do* under its header (or open the badge in the executor's chat):

| Setting | Default | |
|---|---|---|
| Web | on | search the web and read pages; a change applies when its chat starts again |
| File names | on | list the folders the executor works in: names, types and sizes, never contents |
| Figures | Shared | *Never*, only those you share, or *All* the executor's chat showed |
| Reports | Shared | likewise, read as text |
| Ask me first | off | you allow each reply and question before it goes to the orchestrator |

With *Shared*, files the executor shows you get a *Share with the orchestrator* button. Turn *File names* off
when the names themselves identify people, e.g. a folder per patient.

*Disconnect* in the badge ends the link: the orchestrator's chat stays, read-only.

## What it does not guarantee

Nothing checks what the executor sends: the orchestrator keeps away from the data because both models follow their
instructions, and because you see everything that went to it. It prevents mistakes, not a determined leak. Both
chats run in the same sandbox, so the executor could reach Claude's service and read its login. For data that must
not leave your cluster:

- use a model on your cluster for the executor, and [isolate the network](/guides/network-isolation/);
- turn on *Ask me first* while you learn how the executor answers;
- write no data in your own messages to the orchestrator: it reads them too.
