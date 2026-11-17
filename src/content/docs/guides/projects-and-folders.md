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
`--env-dir DIR` (or `env_dir:` in the settings; the flag beats the setting) keeps what each project can download or
rebuild in `DIR/NAME` instead, for example on scratch, while its chats, sign-ins and workspace stay in the project:

| In `DIR/NAME` | What it holds |
| --- | --- |
| `env/` | the software environment: venv, conda environments, R libraries, npm and cargo packages |
| `cache/` | download caches of uv, pip, conda, npm and R |
| `home/.cache/` | `~/.cache` in the sandbox, e.g. HuggingFace and torch models |
| `browser/` | the chats' browsers: Chromium, and each chat's browser profile with its cookies and site logins |
| `thumbnails/` | previews of the images the chats and the file tree show |

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
- If scratch's clean-up deletes the browsers, the chats' browsers are signed out of the sites they had signed in to.
- A project that started without an env folder keeps these folders in the project folder, unused: delete
  everything in `env/` but `env/exports`, and `cache/`, `home/.cache/`, `browser/` and `thumbnails/` there to free the
  space, while no sandbox of the project runs.

:::note
The project folder is only readable by you. It holds your agent sign-ins, so do not share it.
:::

### Starting a project again

Each time `codeflower sandbox` starts a project, it saves how: the folders, engine, image, network, port, and the
key and certificate its links carry. They go in `NAME.sandbox.yaml` next to the project folder. To start the
project again the same way, name it:

```sh
codeflower sandbox -p study42 -i ~/data/study42/raw -o ~/results/study42 --isolate-network
# … Ctrl+C, and later:
codeflower sandbox --continue study42
```

`--continue` takes a project name, or the path of a project folder started with `--state`. The sandbox comes back
on the same port, with the same key and certificate, so VS Code's saved connection and a saved page link
(`--server`) connect again. On a cluster, a job on another node gets that node's address, so take the new link
there.

- **Flags given with `--continue`** replace a saved setting (`--port 8890`, `--engine apptainer`), or add folders
  to the saved ones (`-i ~/data/study42/batch2`). Either way they are saved for next time.
- **`--create`** starts the project new, from the flags given, if it does not exist yet. A script can then always
  use `--continue`: `codeflower sandbox --continue study42 --create -i ~/data/study42 -o ~/results/study42`
  makes the project the first time and continues it after that (folders already saved are not added twice).
  Without `--create`, a project name that does not exist is an error, which suggests the closest name.
- **If the saved port is taken**, the sandbox does not start. Stop whatever uses the port, or give `--port 0` for
  any free one.
- **To change or remove a setting**, such as a folder you no longer need, edit the file while the sandbox is
  stopped. It is YAML, and a comment explains each setting.
- **`--new-key`** gives the project a new key and certificate, e.g. if a link leaked. Links saved before it stop
  working.
- Skills folders from `config.yaml` are not saved; the sandbox reads them from the config each time.

:::caution
The file is readable only by you, as the project folder is. It holds the key that connects to the sandbox: anyone
who has it controls the agent. It is next to the project folder, not inside it, so the agent cannot change what
its next sandbox mounts.
:::

### Managing projects

`codeflower projects` lists projects and copies, moves or removes them. Each command includes the folder's
settings, allowlist and [environment on scratch](#environments-on-scratch), and refuses while a sandbox uses the
project.

```sh
codeflower projects list                     # name, running or stopped, when it last started
codeflower projects list --size              # also the disk space each takes (slow for large projects)
codeflower projects show study42             # where its files are, and its saved folders and port
codeflower projects copy study42 study42-v2  # try something without changing the original
codeflower projects move study42 study42-old # rename it; also takes a folder elsewhere
codeflower projects remove study42-v2        # asks first; --yes to skip the question
```

A copy gets its own key and certificate, so the original's links do not open it, and any free port. A moved
project keeps its key and port. Removing a project deletes its chats, sign-ins, environment and workspace, but not
your input, output or code folders.

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
