---
title: Inside the sandbox
description: What the agent finds in the sandbox, how it installs software, and the tools code flower gives it.
---

## What is installed

The sandbox image is Debian with:

- **Python** with **conda** and **mamba** (conda-forge, from Miniforge), and **uv**
- **Node.js**, **git**, **curl**, **ripgrep**, and build tools (a C/C++ compiler and make)
- the agents: Claude Code (downloaded by the app, see [Container engines](/guides/engines/#claude-code)), Codex,
  DeepSeek Harness and OpenCode
- [storyteller](/guides/reports/), for reports

R, GPU tooling and other native libraries are not in the image: the agent installs what an analysis needs.

## The project's environment

The agent installs software into the **project**, not the image, so it is there next time:

- a Python virtual environment (`pip`/`uv pip install`), which also sees the image's own Python packages
- conda environments (`mamba create`), R libraries, npm and cargo packages
- their download caches

`codeflower-env-export` writes a readable recipe of everything installed (requirements files and conda
`.yml`s), to recreate it elsewhere. Behind a [network allowlist](/guides/network-isolation/), installing needs
`@pypi`, `@conda`, `@cran` or similar.

## Where the agent works

| Path | What |
| --- | --- |
| `/data/input/*`, `/data/output/*`, `/data/code/*`, `/data/skills/*` | [your folders](/guides/projects-and-folders/) |
| `/codeflower-state/workspace` | its working directory: scripts, figures, results, draft reports, logs |
| `/codeflower-state/env` | the project's software environment |

Its instructions (`AGENTS.md`, and `CLAUDE.md` for Claude Code) are in the workspace. They tell it how to work:
numbered, rerunnable scripts; checking its own results; showing figures; writing reports; delivering to
`/data/output`. You can edit them for a project; a newer image keeps your edits.

## code flower's tools

The agent uses these by itself; you can also run them with a `!` command in the [chat](/guides/chatting/#shell-commands).

| Command | What it does |
| --- | --- |
| `codeflower-show FILE…` | opens files in a tab beside the chat (figures, tables, Markdown, HTML, reports) |
| `codeflower-doctor` | what this sandbox may use: the job's CPUs, memory and end time, disk, GPUs, the network allowlist |
| `codeflower-inventory [PATHS]` | describes data folders: tables (CSV, Parquet), HDF5, AnnData, loom, 10x, Zarr, SQLite, zip |
| `codeflower-env-export` | records the installed environments |
| `codeflower-network [check HOST]` | in an [isolated](/guides/network-isolation/) sandbox: what it may reach |
| `codeflower-sketch` | the [icon gallery](/guides/skills-and-icons/#icons-for-figures) for scientific figures |

When the sandbox starts, it also writes a snapshot of its environment and an inventory of your input folders,
which the agent reads first.
