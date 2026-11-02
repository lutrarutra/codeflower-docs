---
title: Interactive, run and task
description: Three ways to start a sandbox from the command line, from chatting to unattended batch jobs.
---

| Command | Starts | Then |
| --- | --- | --- |
| [`codeflower interactive`](/reference/cli/codeflower-interactive/) | a sandbox | you connect and chat |
| [`codeflower run TASK`](/reference/cli/codeflower-run/) | a sandbox and a chat with TASK as its first message | the agent starts at once; you connect to follow and continue |
| [`codeflower task TASK`](/reference/cli/codeflower-task/) | a sandbox that works on TASK by itself, no window | it stops when done, and leaves a report |

All three take the same [folders and project](/guides/projects-and-folders/) flags, `--agent`, `--engine`,
`--image` and the [network](/guides/network-isolation/) flags.

## interactive

```sh
codeflower interactive --agent codex -p study42 -i ~/data/study42 -o ~/results/study42
```

Prints the `codeflower://` address to paste into VS Code or the app's window, and keeps running until
<kbd>Ctrl</kbd>+<kbd>C</kbd>.

### A browser, directly

With `--server`, the sandbox also serves the chat page itself and prints a link (`http://HOST:PORT/?key=…`) that
opens it in any browser that can reach the machine. Anyone with that link controls the agent.

The page, and that sandbox's connection for VS Code, are **plain HTTP**: the key and the chats cross the network
unencrypted. Other sandboxes use TLS, but a browser cannot check a certificate the sandbox made itself, so this mode
is meant for a TLS reverse proxy in front, or for `ssh -L`. With an SSH tunnel:

```sh
codeflower interactive --server --host 127.0.0.1 --port 8800 -p study42   # on the server
ssh -L 8800:127.0.0.1:8800 server.example.org                             # on your computer
```

then open the printed link with `localhost:8800`. Behind nginx with a certificate for `chat.example.org`:

```sh
codeflower interactive --server --host 127.0.0.1 --port 8800 --advertise-host chat.example.org -p study42
```

```nginx
server {
  listen 443 ssl;
  server_name chat.example.org;
  ssl_certificate     /etc/letsencrypt/live/chat.example.org/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/chat.example.org/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:8800;
    # The sandbox answers only its advertised name, and the chat's WebSocket only from its own page.
    proxy_set_header Host $host;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 1d;
  }
}
```

Open the printed link with `https://chat.example.org/` in place of `http://chat.example.org:8800/`.

## run

```sh
codeflower run -p study42 -i ~/data/study42 -o ~/results/study42 \
  "Run quality control on the samples and summarise the problems you find."
```

TASK can also be `-` (read from standard input) or `--prompt FILE` (a Markdown file). The chat appears in the
sandbox's list of sessions, so you can open it while the agent works, answer its questions, and keep going when
it is done. If the agent is not signed in yet, the first message waits until you connect and sign in.

## task

```sh
codeflower task -p study42 -i ~/data/study42 -o ~/results/study42 --timeout 8h \
  --prompt analysis-plan.md
```

The agent gets the task as its goal and is told that nobody is there to answer questions. It works until it
judges the task done, or for at most `--max-rounds` rounds (default 3). Its results go to the first `--output`
folder, with a report, `report.html`, that it builds as it goes (`--skip-report` leaves it out).

**Stopping cleanly.** Before `--timeout` runs out (a tenth of it, between 2 and 15 minutes), or when the rounds
run out, the agent is told to stop starting new work and write up what it did, found and left open. Press
<kbd>Ctrl</kbd>+<kbd>C</kbd> to ask for the same; press it twice to cancel.

**Choosing a model.** `--model`, `--effort` and `--option ID=VALUE` choose among what the agent offers, e.g.
`--model opus --effort high` for Claude Code. Defaults can go in [config.yaml](/reference/config/) under
`agents.<id>`.

**Continuing.** The task's folder (`PROJECT/tasks/ID`) is printed when it starts.
`codeflower task --continue TASK_DIR` runs it again in the same chat: after an interruption or a failure the
agent picks up where it stopped. Add a follow-up to ask for more:

```sh
codeflower task --continue ~/codeflower/projects/study42/tasks/ab12cd "Also compare donors 3 and 4."
```

A continued task keeps its project, agent, folders, network and report settings.

**Exit status**, for scripts and batch jobs:

| Code | Meaning |
| --- | --- |
| 0 | done |
| 2 | not done: the agent judged it impossible, it ran out of rounds or time, or the report failed its check |
| 3 | the agent is not signed in |
| 130 | interrupted or timed out |
| 1 | any other error |

:::tip[Sign in first]
A batch job cannot answer a sign-in. Run `codeflower interactive -p PROJECT` once, sign in, and every task of
that project is signed in. In an interactive terminal, `task` can sign in by itself when needed.
:::

The finished task is a chat of the project: open it later in VS Code or the app to ask about the results.

To work in the agent's own terminal UI instead, in a sandbox that ends with it, see
[`codeflower tui`](/guides/terminal-ui/#a-sandbox-for-one-terminal-ui).
