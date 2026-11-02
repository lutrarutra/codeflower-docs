---
title: Files and folders
description: Where code flower keeps projects, images, settings and state on your computer.
---

## In your home folder

| Path | What |
| --- | --- |
| `~/codeflower/projects/NAME/` | a [project](/guides/projects-and-folders/): chats, sign-ins, environment, workspace (private to you) |
| `~/codeflower/projects/NAME.allowed-hosts.txt` | the project's [network allowlist](/guides/network-isolation/#the-allowlist-file) |
| `~/codeflower/projects/NAME/tasks/ID/` | a [task](/guides/sandbox-run-task/#task)'s runs, for `--continue` |
| `~/codeflower/images/` | Apptainer images (`CODEFLOWER_IMAGE_DIR`) |
| `~/codeflower/agents/` | Claude Code, downloaded for the sandbox (`CODEFLOWER_AGENTS_DIR`) |
| `~/.codeflower/` | the config directory: [config.yaml](/reference/config/), `skills/`, `icons/`, `tunnel/` |

## In the system's settings folder

`~/.config/codeflower/` on Linux, `~/Library/Application Support/codeflower/` on macOS, `%AppData%\codeflower\` on
Windows:

| File | What |
| --- | --- |
| `app.json` | the app window's last start form |
| `workers.json` | sandboxes added by address, with their tokens (private) |
| `running/` | the sandboxes running on this computer |

## In a project

| Folder | Inside the sandbox | What |
| --- | --- | --- |
| `workspace/` | `/codeflower-state/workspace` | the agent's scripts, figures, results, draft reports |
| `env/` | `/codeflower-state/env` | the software environment: venv, conda environments, R and npm packages |
| `cache/` | | package download caches |
| `sessions/` | | the chats |
| `harness/<agent>/`, `dsh-home/` | | the agents' sign-ins and settings |
| `instances/` | | the address of each running sandbox, in a private file, for scripts |
| `tasks/`, `runs/` | | `codeflower task` and `codeflower run` records |
