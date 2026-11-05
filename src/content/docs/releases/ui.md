---
title: Chat (ui)
description: "Release notes of the chat, in VS Code and the app."
sidebar:
  order: 4
---

<!-- The ship skill adds an entry for each release, newest first. -->

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
