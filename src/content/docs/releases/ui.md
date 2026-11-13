---
title: Chat (ui)
description: "Release notes of the chat, in VS Code and the app."
sidebar:
  order: 4
---

<!-- The ship skill adds an entry for each release, newest first. -->

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
