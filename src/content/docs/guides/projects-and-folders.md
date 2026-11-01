---
title: Projects and folders
description: What a project keeps between runs, and how your folders appear inside the sandbox.
---

## Projects

Every sandbox belongs to a **project**, chosen with `-p`/`--project` (default: `default`). A project is a folder,
`~/codeflower/projects/NAME`, that keeps everything that should survive the sandbox:

- the **chats** (sessions), so you can reopen and continue them
- the agents' **sign-ins** and settings
- the **software environment**: a Python virtual environment, conda environments, R libraries, npm and cargo
  packages, and their download caches
- the agent's **workspace**: its scripts, notebooks, intermediate files and draft reports

So the second run of a project starts where the first stopped: signed in, with the packages the agent installed.
Use one project per study or dataset. Names may use letters, digits, `-`, `_` and `.` (at most 100 characters).

`--state DIR` uses any directory as the project instead of a name under `~/codeflower/projects`.

:::note
The project folder is only readable by you. It holds your agent sign-ins, so do not share it.
:::

## Your folders

The sandbox sees only the folders you give it. Each is mounted in a subfolder named after it:

| Flag | Inside the sandbox | Access | For |
| --- | --- | --- | --- |
| `-i`, `--input DIR` | `/data/input/NAME` | read-only | your data |
| `-o`, `--output DIR` | `/data/output/NAME` | read-write; created if missing | finished results and reports |
| `-c`, `--code DIR` | `/data/code/NAME` | read-write | your repositories and packages, which the agent may change |
| `-s`, `--skills DIR` | `/data/skills/NAME` | read-only | [skills](/guides/skills-and-icons/) for the agent |

Each flag can be given several times. When two folders have the same name, the second one gets `-2`, and so on.

```sh
codeflower interactive -p study42 \
  -i ~/data/study42/raw -i /shared/reference/genomes \
  -o ~/results/study42 \
  -c ~/src/study42-pipeline
```

### Other mounts

`--bind SOURCE[:TARGET[:ro|rw]]` mounts any folder at a place you choose. Without a target it goes to
`/data/input/NAME`, read-only. Targets cannot be `/`, `/data` itself or the folders code flower uses.

## What the agent is told

The sandbox's instructions (`AGENTS.md` in its workspace) describe this layout, so the agent knows to read from
`/data/input`, keep its work in its workspace, and deliver results to `/data/output`. It also writes a short
inventory of your data folders (file types, table shapes) when the sandbox starts.

See [Inside the sandbox](/guides/inside-the-sandbox/) for the rest of what the agent finds there.
