---
title: What is code flower
description: How code flower runs an AI agent on your data, and the parts it is made of.
sidebar:
  order: 1
---

code flower runs an AI coding agent (**Claude Code**, **Codex**, **DeepSeek Harness** or **OpenCode**) in a
container, a **sandbox**, so it can explore and analyse data, change its own software environment, run code,
and write scripts, notebooks and reports, without access to anything you did not give it.

It is built for (data) scientists, on workstations and on HPC clusters.

## How it fits together

1. **You start a sandbox** with the `codeflower` app: from its window (`codeflower client`), or from the command
   line (`codeflower sandbox`), on your computer or as a cluster job. The app downloads the sandbox image
   once and starts it with your folders mounted.
2. **You connect a window to it.** The app's own page in your browser, VS Code with the code flower extension, or
   both at once. A sandbox prints a `codeflower://` address that any of them can open.
3. **You chat with the agent.** It works inside the sandbox, on the folders you mounted: your data read-only,
   your outputs and code read-write.
4. **It reports what it found.** The agent writes its results as [reports](/guides/reports/): single HTML files
   with figures and interactive charts that open beside the chat and take your comments.

## The parts

| Part | What it is |
| --- | --- |
| **The app** (`codeflower`) | One program for Linux, macOS and Windows: starts sandboxes, and its window (`codeflower client`) lists them and hosts the chat in your browser. |
| **The sandbox** | A container image (Docker, Podman or Apptainer) with the agents, Python (conda, uv), R, Node and code flower's tools. One per project and agent. |
| **The VS Code extension** | Connects VS Code to sandboxes: chats, files and reports in tabs. Works over Remote-SSH. |
| **The tunnel** | Optional. Lets a browser or phone reach the app on your computer from anywhere, end-to-end encrypted. |
| **storyteller** | The library the agent writes its reports with. |

## Words used in these docs

- **Sandbox** (or **worker**): one running container for one project, with every agent in it.
- **Project**: a named folder (`~/codeflower/projects/NAME`) that keeps a sandbox's chats, logins, software
  environment and workspace between runs. See [Projects and folders](/guides/projects-and-folders/).
- **Chat** (or **session**): one conversation with one agent, which you choose when it starts. A sandbox can have
  many, with different agents.

Next: [install code flower](/start/install/).
