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

### Where the project is

| Given | Project folder |
| --- | --- |
| nothing | `~/codeflower/projects/default` |
| `-p NAME` | `~/codeflower/projects/NAME` |
| `--projects-dir DIR` (or `projects_dir:` in the [settings](/reference/config/)) | `DIR/NAME`, or `DIR/default` |
| `--state DIR` | `DIR` itself, whatever `--project` says |

`--projects-dir` beats `projects_dir:`. The app window reads `projects_dir:` when it starts, so restart it after a
change. Every sandbox started without `-p` belongs to the project `default`, sharing its chats, environment and
workspace: give each study its own name so they do not mix.

### Sandboxes of a project share it

Every sandbox of a project, one after another or at the same time, on any computer that sees its folder, uses the
same chats, workspace and software environment. That is how a later batch job finds the packages an earlier one
installed.

:::caution
Do not let two sandboxes of a project install packages at the same time, e.g. two `conda install`s into the same
environment: they can leave it broken. Several sandboxes using the environment at once is fine.
:::

### Environments on scratch

Conda environments and download caches can grow to many gigabytes, more than a home quota on a cluster may allow.
`--env-dir DIR` (or `env_dir:` in the settings; the flag beats the setting) keeps each project's software
environment and caches in `DIR/NAME` instead, for example on scratch, while its chats, sign-ins and workspace stay
in the project:

```yaml
# ~/.codeflower/config.yaml
env_dir: /scratch/$USER/codeflower   # ~ and $VARIABLES are expanded
```

- Inside the sandbox nothing changes: the agent installs with uv, pip, conda, R or npm as before.
- The environment's recipe, which the agent writes with `codeflower-env-export`, stays in the project
  (`env/exports`), so an environment that scratch's clean-up deleted can be rebuilt from it.
- The folder must be visible wherever the project's sandboxes run, so a node's local disk will not do.
- `NAME` is the name of the project's folder. Projects whose folders have the same name, e.g. `--state /a/study`
  and `--state /b/study`, or `-p study` with two `--projects-dir`, share one environment there.
- A project that already has an environment keeps it in the project folder, unused: delete `env/venv`,
  `env/conda` and `cache/` there to free the space.

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
codeflower sandbox -p study42 \
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
