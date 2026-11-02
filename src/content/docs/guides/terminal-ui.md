---
title: The agent's terminal UI
description: Work with Claude Code, Codex or OpenCode in their own terminal UI, on a chat the page and VS Code follow, or in a sandbox of its own.
---

Claude Code, Codex and OpenCode have terminal UIs of their own. code flower can run them in a sandbox, in your
terminal, in two ways:

| Command | What it does |
| --- | --- |
| [`codeflower attach`](/reference/cli/codeflower-attach/) | opens a chat of a running sandbox in the agent's terminal UI; the [app's window](/guides/app-window/) and [VS Code](/guides/vscode/) follow the chat as it goes |
| [`codeflower tui`](/reference/cli/codeflower-tui/) | starts a sandbox that only runs the agent's terminal UI, in this terminal, and ends with it |

DeepSeek Harness has no terminal UI.

## Open a chat in the terminal

Start a sandbox as usual, e.g. with [`codeflower sandbox`](/guides/sandbox-run-task/) or from the app's
window, then, on the same computer:

```sh
codeflower chats study42                  # the sandbox's chats, numbered
codeflower attach study42 --last          # the chat that changed last
codeflower attach study42 2               # chat 2 of the list
codeflower attach study42 "PCA of batch"  # the chat whose title starts so
codeflower attach study42 --new           # a new chat
codeflower attach                         # choose the sandbox and the chat from lists
```

- **Naming the sandbox.** You can use its project's name, its id as the app's page shows it (`local-1a2b3c4d`), a
  number from the list, or the `codeflower://` line it printed. With only one sandbox running you can leave it out.
- **Other computers.** Sandboxes you [added to the app](/guides/app-window/) work too.
- **On a cluster.** Run it on the computer where the sandbox runs, e.g. `ssh -t login-node codeflower attach study42
  --last`.

The terminal UI keeps running in the sandbox when you leave it, so you can come back to it, also from another
terminal.

### Keys

After <kbd>Enter</kbd> (or before typing anything), as in ssh:

| Keys | |
| --- | --- |
| `~.` | detach; the terminal UI keeps running |
| `~s` | switch to another chat of the sandbox, or a new one |
| `~q` | quit the terminal UI |
| `~l` | links to the chat in your browser and to the files the agent showed |
| `~o` | open the file the agent showed last in your browser |
| `~?` | help |

Everything else goes to the agent's terminal UI. Each chat has its own terminal UI. Switch chats with `~s` rather than
in the UI (Claude Code's `/resume`, for example): a terminal UI that moves to another session leaves its chat, which
goes back to the page and VS Code. To work on several chats at once, run `codeflower attach` in several panes of your
own tmux.

### What the page and VS Code show

| Agent | While its terminal UI has the chat |
| --- | --- |
| OpenCode, Codex | Both show it live, and either can continue it. A permission can be answered in either place. |
| Claude Code | The terminal UI takes the chat over once its current turn has ended. The page shows what happens in it. What you send from the page is typed into the terminal UI between its turns (text only). Permissions are answered in the terminal. Quit the terminal UI (`/exit`, or `~q`) and the chat is back. |

What you type in the terminal shows in the page's chat as from the terminal, and stays in the chat's history. The
page says on a chat when its terminal UI runs, and how to open it. Codex uses the approval mode chosen in the page for
the terminal's turns too.

### Images and reports

The agent shows files with `codeflower-show`, and they open in the [page](/guides/files-and-previews/). In the terminal
they come as links: the tool's output says `Link for the user: http://…`, and the bottom row of the terminal briefly
shows the file with a link. Click it, or press `~o`. `~l` lists the files shown so far. The link opens the app's page
with the file beside its chat.

- **This computer.** Links open the page of `codeflower client`, so keep it running. The first time, `~l` also gives
  you the page's address with its key, as the client printed it.
- **Over SSH.** Links go through [remote access](/guides/remote-access/) when it is on. Otherwise forward the page:
  `ssh -L 7720:127.0.0.1:7720 login-node`.
- **No links.** `--links path` shows only the files' paths.

To get a link for a file yourself, run `codeflower-open FILE` with the terminal UI's shell escape. In OpenCode, type
`!` alone on an empty prompt first, then the command.

## A sandbox for one terminal UI

```sh
codeflower tui --agent claude --input ~/data/study42
codeflower tui --agent codex --project study42 --continue     # the last chat again
codeflower tui --agent opencode --project study42 --resume    # choose a chat
codeflower tui --agent claude --project study42 --resume=3f2a…
```

`codeflower tui` is for quick work in the terminal: a sandbox with the agent's terminal UI and nothing else. There
is no port, no link and no page, and nothing can connect to it. It stops, and its container is removed, when you quit
the terminal UI (`/exit`, or <kbd>Ctrl</kbd>+<kbd>C</kbd> the way the agent takes it).

- **Same flags as `sandbox`.** It takes the [folders and project](/guides/projects-and-folders/), engine and
  [network](/guides/network-isolation/) flags of `codeflower sandbox`, and the same default project.
- **Signing in.** Sign in in the terminal UI itself, e.g. Claude Code's `/login`. The login is kept in the project,
  so the project's other sandboxes are signed in too.
- **Your chats.** They are the agent's own, kept in the project: `--continue` opens the last one, `--resume` a list
  or one by id (`--resume=ID`). When the terminal UI ends, code flower prints the command that opens the chat
  again, with your folders and its id. They are not in the chat list of the page or VS Code.
- **From your config.** Claude Code gets the [MCP servers](/guides/mcp/) from your config; Codex and OpenCode do not
  yet. Plugins and an API key from your config work for all three.
- **Not here.** There is nothing to show files in: use `codeflower sandbox` and `codeflower attach` for that.

## Troubleshooting

- **"has no terminal UI in code flower, or its image is older".** Update the sandbox's image (`codeflower pull`),
  and start the sandbox again.
- **A link opens a page that asks for its key.** Open the client's address with `?key=…` once (`~l` shows it), then
  the links work in that browser.
- **The terminal UI looks garbled after you come back.** Resize the window, or `~.` and `codeflower attach` again:
  the terminal UI draws itself anew.
- **Windows.** Use Windows Terminal: the older console does not show the terminal UIs well.
