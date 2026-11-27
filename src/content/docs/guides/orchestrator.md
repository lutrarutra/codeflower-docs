---
title: Sensitive data and orchestrators
description: Let a hosted model plan and check the work of a model on your cluster that works with data you may not send out, without giving it the data.
---

Some data may not go to a hosted model such as Claude: patient data, for example. A model on your own cluster may
work with it, but such models are smaller and make more mistakes: they choose things they should ask about, and
report results they never computed. An **orchestrated chat** brings the two together as a pair:

- the **orchestrator**, a Claude chat without access to the data, makes the decisions (which columns, how missing
  values are handled, which test, how to plot) and checks every step;
- the **executor**, a chat on your cluster's model, works with the data one small step at a time, exactly as asked,
  and asks the orchestrator about anything the step leaves open.

## Starting one

1. Sign in an agent that uses your cluster's model, for example DeepSeek Harness with an OpenAI-compatible
   endpoint (see [Sign-in](/guides/sign-in/)), and Claude Code for the orchestrator.
2. Start a new chat: in the app's page, tick *Orchestrated* in the *New chat* dialog and choose the executor's
   agent; in VS Code, right-click the sandbox and choose *New orchestrated session*.

Two chats open, *… · orchestrator* and *… · executor*, linked for good. Talk to the orchestrator as to any agent: say
what you want done. It sends the executor one step at a time, reads each reply and checks it before the next. You
can write to the executor too: your messages come before the orchestrator's. A message you send the orchestrator
while the executor works reaches it as soon as the current step is done.

An existing chat can't be made an executor. Orchestrators that an earlier version attached to an ordinary chat are
disconnected: that chat is an ordinary one again.

## The executor chat

The executor is a limited chat, which the line under its header says: it reads a short prompt written for
executors only (the sandbox's facts: folders, CPUs and memory, batch jobs, how to install software), and, with
Claude Code, gets only the tools to work with files and commands (no web, no subagents). Other agents keep their
usual tools; the line says *full tools*. Unfold *What it has* to see its tools and open its prompt.

In the executor's chat, the orchestrator's messages show as cards of their own, and under each reply a line
*Sent to the orchestrator* unfolds to exactly what it got. Its footer shows a compass badge with its orchestrator.

## What the orchestrator sees

The orchestrator has none of Claude Code's tools for files or commands. With each step it gets:

- the executor's reply, and the **commands it ran with their outcome** (ok, or failed with the exit code), never
  their output;
- the **scripts it wrote**, which it can read (*Code*);
- the **figures and reports it showed**, as you allow (below);
- a count of the step's commands, failures, scripts and questions, so it notices when the executor did more than
  asked or claims what a failed command didn't produce.

It can also answer the executor's questions, see the sandbox's resources, keep the plan and its decisions in
Roots, the project's map of ideas, and write the report, which the executor builds and then checks claim by claim against
the data until the two agree. When an answer concludes a piece of analysis, the executor rechecks its numbers
against the data before the orchestrator sends it to you; quick answers skip that.

The executor is told to send code, file and column names, data types, counts, aggregates and errors, never rows,
identifiers or anything else that could identify a person.

## Sharing figures and reports

With *Figures* or *Reports* set to *Shared*, a figure the executor shows during a step asks you in the executor's
chat: *Share km.png with the orchestrator?* The orchestrator waits for your answer before its next step, and is told
which files it may look at. The orchestrator's footer lists everything shared with it, and what waits for you.

## What the orchestrator may do

In the orchestrator's chat, unfold *What it may do* under its header (or open the badge in the executor's chat):

| Setting | Default | |
|---|---|---|
| Web | on | search the web and read pages; a change applies when its chat starts again |
| File names | on | list the folders the executor works in: names, types and sizes, never contents |
| Code | on | read the scripts the executor wrote in its steps |
| Roots | on | keep the project's map of ideas: the plan, its todos and the decisions made |
| Figures | Shared | *Never*, only those you share, or *All* the executor's chat showed |
| Reports | Shared | likewise, read as text |
| Ask me first | off | you allow each reply, question and script before it goes to the orchestrator |

Turn *File names* off when the names themselves identify people, e.g. a folder per patient.

*Disconnect* in the badge ends the link: the orchestrator's chat stays, read-only.

## What it does not guarantee

Nothing checks what the executor sends: the orchestrator keeps away from the data because both models follow their
instructions, and because you see everything that went to it. It prevents mistakes, not a determined leak. Both
chats run in the same sandbox, so the executor could reach Claude's service and read its login. For data that must
not leave your cluster:

- use a model on your cluster for the executor, and [isolate the network](/guides/network-isolation/);
- turn on *Ask me first* while you learn how the executor answers;
- write no data in your own messages to the orchestrator: it reads them too.
