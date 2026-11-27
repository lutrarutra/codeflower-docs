---
title: Chat (ui)
description: "Release notes of the chat, in VS Code and the app."
sidebar:
  order: 4
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.50.0

*2026-11-27*

- Orchestrated chats: tick *Orchestrated* in the *New chat* dialog to make a pair, a Claude orchestrator that plans and checks without seeing the data, and an executor on the agent you choose, which works with the data one step at a time. *Add an orchestrator* is gone from the Tools menu.
- The executor chat has a line under its header naming its orchestrator and what it got (a short prompt, and fewer tools where its agent allows); your messages to it come before the orchestrator's.
- The orchestrator's footer lists what was shared with it and what waits for you to share. Two more settings: *Code* (it may read the executor's scripts) and *Roots* (it keeps the plan and its decisions in the map of ideas).
- *Generate report* in an executor chat goes to its orchestrator, which writes the report.
- The chat list marks orchestrators and executors with a compass.

## v0.49.0

*2026-11-27*

- *Add an orchestrator* in a chat's Tools menu starts a Claude chat that directs this one without seeing its data. Its messages show as cards of their own, and under each reply a line unfolds to exactly what went to it. The chat's footer lists its orchestrators, where you set what each may do (web, file names, figures, reports, approving each message) or disconnect it, and files the chat shows can be shared with it.
- Focus shows an orchestrator and the chat it directs in one row, and the directed chat beside the orchestrator, where its permission requests are answered.

## v0.48.0

*2026-11-27*

- Roots has a find bar (Find button, or Ctrl+F / ⌘F): the ideas whose title, conclusion, comments, todos, needs or files hold the text are highlighted, and Enter steps through them.
- Watches show two new ends: failed (the output showed the failure pattern) and exited (the processes the watch followed ended).

## v0.47.0

*2026-11-25*

- A Roots button in the chat's header shows the sandbox's map of ideas: it brings the Roots tab to the front, or opens one.

## v0.46.1

*2026-11-25*

- In Roots, zooming with Ctrl and a mouse wheel moves in even steps instead of jumping, while a trackpad pinch stays as fast.

## v0.46.0

*2026-11-25*

- **Watches**: an eye at the right of the chat's footer counts the watches its agent left running (needs sandbox 0.43.0). Its list shows each one's command, condition and runs; open a watch's output in a tab, run it now, or stop it. A tab with a watch's output says whether more is coming or how the watch ended.
- In Roots, a watch can be one of an idea's needs: the card shows the eye and what the idea waits for, and the idea's panel links to the watch's output.

## v0.45.0

*2026-11-25*

- **Fork a chat** from any of your messages, or all of it, into a new chat with that message ready to send again (needs sandbox 0.42.0). A forked chat, or one an agent started, says at the top where it came from.
- The Roots map is laid out as a tree, each idea below the ones it builds on, and a card lists every chat that worked on it. An agent can open the map for you, on one idea.

## v0.44.0

*2026-11-25*

- **Roots**: a sandbox that keeps a map of the project's ideas (sandbox 0.41.0) shows it as a tree, where you check off todos, change an idea's status, comment on it (the chat working on it is told) or start a new chat on it. In the app's window it opens from the sidebar as a Roots tab.
- Asking to submit a batch job says what the job asks for: its queue, CPUs, memory, time and GPUs, and for an array how many tasks.

## v0.43.0

*2026-11-23*

- The list of the sandbox's chats in a chat's header has a **+** button that starts a new chat in the same sandbox, with the same agent.
- *Copy path* gives the right folder on your computer for files in a workspace kept outside the project (`workspace_dir`; needs sandbox 0.40.0 and app 0.45.0 or later).
- Batch jobs in the jobs list use the row's full width for their details and progress bar.

## v0.42.0

*2026-11-22*

- A tab that shows a batch job's output says whether more is coming: while the job is queued or running it streams the output as it is written, and once the job ended it says how, with a button to open the scheduler's log when a time or memory limit or a cancel stopped it. A queued job's output opens before the job has written anything, and fills in once it does.
- The jobs list shows how far an array job is, its tasks by state in a bar, and lists its tasks so you can open each one's output. This needs app 0.44.0 or later.
- Cancelling a batch job now asks first, as it cannot be undone.
- Messages that code flower sends the agent by itself, such as a batch job that ended, the wrap-up before the sandbox stops, or the browser handed back, no longer look like yours: the chat shows them on a line of their own, with a title and a short summary, and the full text folded. This needs sandbox 0.39.0 or later.
- New chats in the app's window no longer take the mode from the browser: the sandbox now starts them with your last choices (sandbox 0.39.0).

## v0.41.0

*2026-11-21*

- A chat that is open in another sandbox is no longer stuck read-only. Its notice has a **Take over** button, which asks the other sandbox to let go of the chat once its current turn ends; the chat then opens here by itself. It also opens here by itself whenever the other sandbox lets go of it.
- When another sandbox takes a chat over, the chat turns read-only here, with Take over to move it back.
- Closing a chat's last tab lets go of it, so another sandbox can open it about a minute later. This needs sandbox 0.38.0 or later.

## v0.40.0

*2026-11-20*

- A badge beside the usage counts the batch jobs the chat's agent asked for that are queued or running. Its list shows them, and those that ended in the last day: open a job's output, or cancel one that is still active. This needs sandbox 0.37.0 or later, with batch jobs on in the app's config.

## v0.39.0

*2026-11-19*

- A chat's title in its header opens a list of every chat in the same sandbox, the one with the latest message first, with its agent, its status and when it last had a message. Choosing one brings its tab to the front, or opens it in a new tab; the chat you are in is highlighted and cannot be chosen. With more than eight chats, a filter at the top narrows the list.

## v0.38.0

*2026-11-19*

- With two or more messages queued, an **All together** switch above them sends them all in the agent's next turn, as one message, instead of one per turn. It starts off again each time a second message joins the queue. On a sandbox, this needs sandbox 0.36.0 or later.
- With agents that cannot read a message while they work, *Send now* is called *Interrupt & send*, and its hints say that it stops the agent's turn and any command it is running.
- The subagent badge beside the usage counts the subagents that are running (0 once none are); the ended ones stay in its list.

## v0.37.0

*2026-11-19*

- The app's window has a search: press Ctrl+K (⌘K on a Mac) or click the magnifier in the rail. It finds chats by title and files by name in every sandbox, tolerating skipped letters, and from three letters also what chats and files say. With nothing typed it lists your latest chats. Arrow keys move through the results; Enter opens a chat, or a file beside the chat in front. Files and chat text are searched in the sandboxes the window is connected to that run sandbox 0.35.1 or later.
- Copying code shows a green check: after copied inline code, and on a code block's copy button.

## v0.36.0

*2026-11-18*

- Code blocks in messages have a copy button in their top right corner while the pointer is over them, and clicking inline code copies it (unless it is a file path, which still opens the file).

## v0.35.0

*2026-11-18*

- A figure opened from a report to comment on can be downloaded from the overlay, as it was clicked, named after the report and the figure (`results-figure-2.svg`).
- SVG figures made with matplotlib keep their labels and titles in the comment overlay.
- The comment overlay takes the keyboard when it opens, so Esc and its shortcuts work without clicking into it first.

## v0.34.0

*2026-11-18*

- Terminals in the app's window draw box-drawing characters without seams (htop's frames and meters), redraw full screens faster, give emoji their two columns, and no longer cut off their last row.
- After the app was updated and its client restarted, the page offers to reload for the new version; *Later* puts it off until the next update.
- A file you click in a chat comes into view in a narrow window, and in Focus it shows in the pane beside the chat.
- Images the agent shows line up as equal tiles; long file names are cut short instead of overflowing. Markdown previews are wider. In Focus's pane the previous and next arrows stay at the ends of its header.

## v0.33.0

*2026-11-18*

- Files the agent shows are listed in every window that has the chat open, and in the chat even when it was not open anywhere; feedback on such a file opens its chat.
- In the app's window, a sandbox's *Manage* tab shows the versions at work, with *Copy* for a bug report.
- *Manage*, a shell's button and a new shell opened while the Server view shows now bring the chats' grid into view with their tab.

## v0.32.0

*2026-11-17*

- Each prompt shows when you sent it, and the agent's last message of a turn shows when the turn ended and how long it ran; hover for the full date.
- A line with the day sits above the first prompt of each day, in chats that go back before today.
- A message sent while the agent worked counts towards that turn.

## v0.31.1

*2026-11-17*

- *Copy path* on the computer that runs the sandbox no longer gives a path inside the project for the chats' browsers, thumbnails and `~/.cache` when the project keeps them in an env folder (`--env-dir`).

## v0.31.0

*2026-11-17*

- A *Shown files* menu in the chat's header lists every file the agent showed you in the chat, the latest first, so you can open one again without scrolling back or looking for it in the file tree.
- The header's icon buttons line up.

## v0.30.0

*2026-11-16*

- An HTML file's tab switches between *Interactive*, *Static* and *Code* in place; a report opens interactive and comes back as it was when you switch back.

## v0.29.0

*2026-11-15*

- When a turn ends because a step failed, for example a compaction that hit the session limit, that step shows after the folded steps, opened, so you see why the turn stopped without unfolding them.
- In Focus, the Focus button in the rail becomes an Editor button that takes you back to the editor with Focus's chat in front.
- In Focus on a phone, one button in the top bar switches between the chat and what its agent showed you (or its browser).

## v0.28.0

*2026-11-15*

- A chat whose agent uses a browser shows it, live, in a tab beside the chat. You can take it over (click, type, scroll, go to an address, switch its tabs, answer its dialogs) and hand it back with a note for the agent. When the agent needs you in it, for a login, a two-factor code or a captcha, the chat waits for you, the browser comes to the front (in Focus, beside the chat), and the chat's header and notifications say so.
- Terminals open in a panel across the foot of the window, as in VS Code, rather than beside the chat; you can still drag them anywhere. Ctrl+` shows the latest terminal or opens one, Ctrl+Shift+` opens a new one, and a button in the chat's header opens one in its sandbox.
- The model and the effort share one button: its menu lists the models, with a slider for the effort at its foot that shows the levels the chosen model has. The menu is wider and as tall as the window allows, and opens with the chosen model in view.
- On a phone or in a narrow side panel, the composer's controls stay on one line, showing their icons, and the line under it keeps the context, cost and quota, with what runs in the background at its right.
- When you comment on a figure, the figure keeps the whole window and the comments float over it, from a Comments button that counts them.

## v0.27.0

*2026-11-15*

- Pages opened through the tunnel share one encrypted connection per computer for all their requests, instead of opening one per request, so they load and refresh with less waiting. Large uploads still get a connection of their own, and computers running an older app are reached as before.

## v0.26.0

*2026-11-14*

- With the sidebar folded, the rail shows the chats of the sandbox in front that work, wait for you or finished while you looked elsewhere, plus the one open. With none of those, it shows the latest three. A "…" button below them opens a menu of the other chats.
- Pressing a tab's close button in the app's window closes the tab even when the mouse moves a little, instead of starting to drag the tab.

## v0.25.0

*2026-11-13*

- A chat whose agent runs a background command or a background subagent shows as working, in Focus, the sidebar, the rail and its tab, also after its turn ended.
- A chat is marked as finished only when a turn ended while you looked elsewhere and nothing of it still runs. Background work that ends, while the agent still works on its turn or after you saw the turn end, no longer marks it.

## v0.24.0

*2026-11-13*

- With the sidebar folded, the rail reaches the chats: the sandbox in front unfolds into a numbered tile for each of its latest chats, and in Focus the chats of Focus's list take the top of the rail. A tile's dot shows whether its chat works, waits for you or finished while you looked elsewhere; hover it for the title, and press Alt+1 to Alt+9 to open a tile by its number. Choosing a chat there in Focus keeps you in Focus.
- The figure annotator opens in move mode with a mouse too, so you can look a figure over before selecting a part to comment on.
- The numbers in the usage line under the message box line up with their icons.

## v0.23.0

*2026-11-13*

- Messages, actions and preview feedback you queue while the agent works wait in the sandbox instead of your window: they are still sent if you close the tab or your laptop, and every window with the chat open shows the same queue.
- When a turn ends without finishing normally (the agent refuses, hits its limit, fails, or you stop it), the queue pauses and says why above the box; choose *Resume* to go on. *Stop* still puts your own queued messages back in the box.

## v0.22.0

*2026-11-13*

- When sandboxes run but none is chosen, the app's page opens on a home view: the chats that wait for you or finished while you looked elsewhere, then each sandbox with its state and latest chats. The sidebar lists the sandboxes too, with how many chats need you in each.
- When several background subagents ask for permission or an answer at once, the chat shows each request in turn, the oldest first, instead of losing the others.
- A chat that waits only for a background subagent's request, after its turn has ended, no longer looks busy: you can send it a message.
- The Shown pane lists every file the agent showed in the chat as soon as it opens, not only those in the part of the chat that is loaded.

## v0.21.0

*2026-11-12*

- The chat's footer shows the commands the agent is running. Click the terminal badge and *Connect* to watch a command's output live in a read-only tab beside the chat; closing the tab only stops watching. Commands whose output the agent does not stream are listed, with their output in the chat when they end.
- The footer also shows the agent's other background tasks, and is more compact: the subagent, context and token counts are icons and numbers, with the details on hover.
- A command's card in the chat shows the output the agent streams, such as Codex's, and its exit code when it failed.
- A message you send while the agent works is marked for the agent as adding to its task, so it carries on with what it was doing (including waiting for background work) instead of treating your message as all there is left to do.
- In the app's interactive report tab, clicking a figure opens it over the whole window to mark parts of it and send comments to the chat.
- On touch screens the figure annotator has a move mode: drag to move, pinch to zoom, and switch to select mode to mark parts.
- In Focus, settings or comments a report sends go into the chat beside it, and a subagent's chat opened from its parent stays in Focus.
- The rail names sandbox groups in their own colour.
- Typing into a terminal no longer fails when the window has chats with several agents.

## v0.20.0

*2026-11-11*

- The + in the app window's rail starts a new chat: pick one of the sandboxes ready to chat, or make a new sandbox from the same dialog.
- The Server view has a *Sandbox images* card: see which builds of the sandbox image are on the computer, which one the app uses by default and which are in use, download a release, and remove builds you no longer need. Downloads show a progress bar and keep going when you close the page.
- A sandbox that is starting shows how long it has been starting, the image download's progress, and a warning when it has printed nothing for a while, with its log open, so you can tell a slow start from a stuck one.
- A chat's Focus button also folds the sidebar, so the chat gets the room.
- Chats whose connection to the agent dropped, for example after the computer slept, reconnect by themselves and pick up a turn that is still running.
- Web links in chat messages open in a new tab.

## v0.19.1

*2026-11-05*

- What you are writing in a chat stays there when you switch between Chat and Focus or to another chat in the app's window, and is back when you return to that chat.

## v0.19.0

*2026-11-05*

- *Print / PDF* in a report open in the app's window prints the report; it did nothing before.
- A storyteller deck's download button saves the `.pptx` through your browser.
- In Focus, arrows in the header of the pane beside a chat step back and forth through the files shown there, with each file's place in the list. A file that went behind stays open, so an interactive report keeps its state.

## v0.18.0

*2026-11-04*

- *New chat* opens a dialog: choose the agent by its logo and name, and give the chat a title if you want one; without it the chat is named after its first prompt. In Focus with several sandboxes ready, you pick the sandbox first.
- Only agents that are signed in can start a chat. The others are greyed out, and the dialog sends you to *Manage* to sign them in.
- A link an agent asks you to open, for example to sign in, names the agent that asks.
- In the sign-in for an OpenAI-compatible endpoint, a checkbox chooses the models the chat's picker offers, and a pin puts a model at the top of the picker. With the key saved, the endpoint's models are listed at once.

## v0.17.0

*2026-11-04*

- **Agents per chat.** A row of agent logos above *New chat* chooses the agent of the next chat and remembers it for the project; chats show their agent's logo. Sign-in, plugins, usage and subagent settings are per agent, and the sandbox's page lists its agents ([Chatting](/guides/chatting/#choosing-the-agent)).
- In the app's window, *Terminal* opens a shell in the sandbox in a tab beside the chats. It keeps running while the sandbox does, and closing its tab ends it.
- The file tree's menu copies a file's path in the sandbox, or on the machine that runs the sandbox when it is in a mounted folder.
- DeepSeek Harness's sign-in for an OpenAI-compatible endpoint tests the connection and the key, fetches the endpoint's models to pin (with a filter for long lists), adds models by hand, and sets each one's context window, image input and thinking. *Edit keys and models…* changes them later ([Sign in](/guides/sign-in/)).

## v0.16.0

*2026-11-03*

- **Only the messages.** Folded turns now keep every message the agent writes along the way in its place, so answers it gives mid-turn stay in sight. The steps between two messages fold into one row, such as *4 steps* ([Only the messages](/guides/chatting/#only-the-messages)).
- Long lists in the settings bar, such as OpenCode's hundreds of models, have a search box. Pin the models you use: pinned ones come first, for every chat of that agent.
- A permission card says what the agent wants to do when the agent names only the tool call (DeepSeek Harness), shows the command itself rather than "Run command" (Codex), and shows Codex's plan to review.
- In the app's window, the pulse button in a chat's header opens it in Focus, and *Older chats* at the bottom of Focus finds the chats it does not list.
- Errors and lost connections show a wilted flower with what went wrong: a file that cannot be shown, a sandbox or computer that does not answer, a chat whose sandbox is not connected.
- A new OpenCode chat shows its slash commands from the start.

## v0.15.0

*2026-11-02*

- **Only the answers.** The eye button in a chat's header folds each turn to your message and the agent's final reply. While the agent works, a spinner shows how long it has been at it and what it does now; *Worked 4m 12s · 23 steps* above the reply opens its thinking and tool calls. Files it showed, your shell commands and a stopped turn stay in sight.

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
