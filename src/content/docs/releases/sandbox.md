---
title: Sandbox
description: "Release notes of the sandbox image and the agents in it."
sidebar:
  order: 2
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.36.1

*2026-11-19*

- The chat page the sandbox serves has the changes of ui 0.39.0: click a chat's title to switch to another chat of the sandbox.

## v0.36.0

*2026-11-19*

- The sandbox keeps the choice of the queue's **All together** switch, so all the queued messages of a chat can go in the agent's next turn as one message, also while no window is open.
- Programs in a terminal (your shell, an agent's own terminal UI) follow the terminal's size: `htop`, `less`, `vim` and other full-screen programs no longer keep the size the terminal had when it opened.
- The chat page the sandbox serves has the changes of ui 0.38.0.

## v0.35.1

*2026-11-19*

- The sandbox answers the search of the app's window (Ctrl+K): files by name in the workspace and the mounts, what files say (except in the inputs, whose data can be large), and what its chats say.
- The chat page the sandbox serves has the changes of ui 0.37.0.
- v0.35.0 was tagged but never published; use v0.35.1.

## v0.34.0

*2026-11-18*

- `codeflower-doctor` reports whether batch jobs can be submitted from the sandbox: which scheduler commands (`sbatch`, `qsub`, `bsub`, `condor_submit`) the site has made available, and for Slurm whether the controller answers and how many of your jobs are queued. It reminds the agent that jobs run outside the sandbox with your account's access, so they need host paths and the cluster's own software, and that it should ask you before submitting any.
- The chat page the sandbox serves has the changes of ui 0.36.0.

## v0.33.2

*2026-11-18*

- Has storyteller 0.6.4: long paths and error messages wrap in reports, and prose is justified in wide columns.
- The chat page the sandbox serves has the changes of ui 0.35.0.

## v0.33.1

*2026-11-18*

- The chat page the sandbox serves has the changes of ui 0.34.0.

## v0.33.0

*2026-11-18*

- Files the agent shows with `codeflower-show` are listed in the chat's shown files also when no window is connected, so you find them when you open the chat; the agent is told they were noted for later. Every window with the chat open lists them.
- The sandbox reports which versions it runs (the app that started it, its image, its chat page, storyteller and the agents), which the app's window shows in the sandbox's *Manage* tab.
- The chat page the sandbox serves has the changes of ui 0.33.0.

## v0.32.0

*2026-11-17*

- A wrap-up, when the sandbox stops or its batch job ends, asks only the chats whose agent or a subagent is working; idle chats are left alone, and with none working the sandbox stops at once.
- The worker prints its links as a table, each alone on its line, so a terminal's Ctrl+click takes the whole link.
- The chat page the sandbox serves has the changes of ui 0.32.0: times on prompts and turns, and day separators.

## v0.31.2

*2026-11-17*

- The chat page the sandbox serves has the changes of ui 0.31.1.

## v0.31.1

*2026-11-17*

- The chat page the sandbox serves has the changes of ui 0.31.0: a *Shown files* menu in the header.

## v0.31.0

*2026-11-16*

- The agent can package an analysis as a reproducible pipeline: the chat action *Reproducible pipeline* builds a Snakemake workflow with pinned packages, the data bundled or with download links, seeded random steps and the expected results, tests the packed archive, and hands it over for `codeflower reproduce`. See [Reproducible pipelines](/guides/reproducible-pipelines/).
- Snakemake is in the image.
- The chat page shows reports interactive in the file's own tab (ui 0.30.0), and the report skill describes it (storyteller 0.6.3).

## v0.30.1

*2026-11-15*

- The chat page the sandbox serves has the changes of ui 0.29.0, and reports and decks use storyteller 0.6.2, which saves the order of moved parts.

## v0.30.0

*2026-11-15*

- More command-line tools in the sandbox, which agents and your shells could not install without root: jq, less, file, xxd, wget, rsync, tree, ncdu, sqlite3, bc, time, pigz, GNU parallel, tmux, htop, lsof, strace, the editors nano and vim (`vi`, `vim`), and ping, dig and nc to see why a host is out of reach in an isolated sandbox.
- The system libraries common R packages need come with the image (HDF5, GLPK, GSL, cairo, udunits, SQLite and PostgreSQL clients), so packages such as hdf5r (for Seurat), igraph and units install.

## v0.29.0

*2026-11-15*

- Each chat can have its own browser, a Chromium in the sandbox: the agent uses it (`codeflower-browser`) to check web apps it serves and pages that need a real browser, and you can watch it and take it over. When a page needs a password, a two-factor code or a captcha, the agent hands the browser to you instead of asking for your credentials. Logins stay in the chat's browser until the chat is deleted. The browser is downloaded on its first use in a project (about 115 MB); in an isolated sandbox that needs the `github` preset, or the agent asks you for the file.
- Icons from Servier's slide kits: importing a kit (.pptx), or the zip of all kits, gives one SVG icon per drawing, named after its label, instead of only the kit's pictures. These icons go into slide decks as shapes you can edit and recolour.
- Files the agent shows open in the chat they come from, in a window that has it open, even when another chat or window is in front.
- The chat page served with `--server` is ui 0.28.0, and reports use storyteller 0.6.1.

## v0.28.2

*2026-11-15*

- The chat page served with `--server` is ui 0.27.0.

## v0.28.1

*2026-11-14*

- The chat page served with `--server` is ui 0.26.0.

## v0.28.0

*2026-11-13*

- The sandbox reports a chat as working while its agent runs a background command or subagent, also after the turn that started it ended. You can still send such a chat a message.
- The chat page served with `--server` is ui 0.25.0.

## v0.27.1

*2026-11-13*

- The chat page served with `--server` is ui 0.24.0.

## v0.27.0

*2026-11-13*

- The bridge keeps each chat's queued prompts and sends them one per turn, also while no window is open, so every window shows and changes the same queue. A turn that does not end normally pauses the queue until a window resumes it. The queue outlives windows and agent restarts.
- The chat page served with `--server` is ui 0.23.0.

## v0.26.0

*2026-11-13*

- Claude Code's turn ends when its answer is done, even while subagents it started in the background still run, so the chat no longer shows working all that time. Their permission requests come afterwards, and the chat takes messages meanwhile.
- When a chat opens, the bridge sends every file the agent showed in it, so windows list them all without scrolling back.
- The chat page served with `--server` is ui 0.22.0.

## v0.25.0

*2026-11-12*

- The bridge tells the windows which commands each chat's agent runs, and lets them watch a command's output live, read-only. Claude Code's foreground commands run through `codeflower-cmd` to show their output (unless you set `CLAUDE_CODE_SHELL_PREFIX` yourself); its background commands and Codex's commands stream their output too.
- A window that opens a chat while Claude Code runs background tasks sees them.
- Subagents that were still running end with their chat when the agent lets go of it, instead of showing as running for good.
- A chat's title no longer takes the note windows add to a message sent while the agent works.
- The image has storyteller 0.6.0, and the chat page served with `--server` is ui 0.21.0.

## v0.24.0

*2026-11-11*

- When Claude Code carries on by itself, for example after a background command it was waiting for finishes, the chat shows it as working, also in a window that reconnects.
- A chat whose Claude Code process ended, for example out of memory on a cluster node, resumes with its settings at your next message, instead of failing every prompt. The turn that was running says what happened.
- When Codex's server ends by itself, Codex restarts and its chats resume.
- A sandbox says what it is doing while it starts (creating the Python environment, installing storyteller, describing the input data, starting the bridge).
- The chat page served with `--server` is ui 0.20.0.

## v0.23.3

*2026-11-05*

- storyteller 0.5.0: agents build slides you can edit in PowerPoint, with native charts, diagrams and SVG figures.

## v0.23.2

*2026-11-05*

- A message sent from a window just as Claude Code's terminal UI moved to another session (`/resume`, `/clear`) is answered in the chat, instead of being typed into the other session and cancelled.

## v0.23.1

*2026-11-05*

- The page the sandbox serves with `--server` takes ui 0.19.1: what you are writing in a chat stays there as you switch views and chats.

## v0.23.0

*2026-11-05*

- Agents can make PowerPoint slide decks with storyteller 0.4.0, in code flower's look or your own template, and you watch the slides appear beside the chat. The image includes LibreOffice to draw them, which makes it about 300 MB larger.
- The page the sandbox serves with `--server` takes ui 0.19.0: printing reports, downloading a deck's slides, and stepping through the files shown beside a chat.

## v0.22.1

*2026-11-04*

- The page the sandbox serves with `--server` takes ui 0.18.0: a *New chat* dialog to choose the agent and a title, and pinned models for OpenAI-compatible endpoints.

## v0.22.0

*2026-11-04*

- Every agent of the image runs in one sandbox, side by side; each chat is one agent's, and an agent that cannot start (Claude Code without its download) is shown as unavailable while the others run.
- R 4.5 is installed, with ggplot2, ragg, svglite, patchwork, renv, pak, BiocManager and remotes. Packages you install go to the project's R library; `codeflower-env-export` records it as an renv lockfile ([Inside the sandbox](/guides/inside-the-sandbox/)).
- Before the first figure, the agent asks which plotting library you want (matplotlib, seaborn, Plotly, ggplot2…).
- The agent works as a general assistant: on a greeting it looks at what you mounted, says what it probably is, and offers next steps (analysis, coding or troubleshooting) instead of proposing a workflow you did not ask for.
- The chat page can open a terminal into the sandbox.
- For DeepSeek Harness with an OpenAI-compatible endpoint, sign-in can test the endpoint and the key, list the endpoint's models with their context windows and abilities, and edit what was saved.
- The chat page served with `--server` takes ui 0.17.0.

## v0.21.0

*2026-11-03*

- With OpenCode, each mode (build, plan) keeps its own model: switching modes switches to that mode's model, and new chats start on build's. OpenCode's terminal UI uses the same choices from the sandbox's next start ([Chatting](/guides/chatting/)).
- OpenCode offers OpenCode Zen's free models again (`"disabled_providers": ["opencode"]` in `opencode.jsonc` turns them off), and counts keys saved with `opencode auth login` as signed in.
- With DeepSeek Harness, new chats start on the model you chose last in the project, or, with only an OpenAI-compatible endpoint, on its first model, instead of failing on DeepSeek's without a DeepSeek key.
- DeepSeek Harness's commands that exit with an error show as failed, and its file and search tools name the file or what they search for.
- Codex runs with its newer subagents (multi-agent v2).
- A stopped OpenCode turn no longer resets the chat's context size.
- The chat page served with `--server` takes ui 0.16.0.

## v0.20.2

*2026-11-02*

- Tasks that need a sign-in tell you to sign in with `codeflower sandbox` (app 0.25.0), the new name of `codeflower interactive`.

## v0.20.1

*2026-11-02*

- The chat page served with `--server` folds turns to their answers with the eye button (ui 0.15.0).

## v0.20.0

*2026-11-02*

- At the end of `codeflower tui`, the sandbox finds the chat the agent's terminal UI used (Claude Code, Codex or OpenCode), so the app can say how to open it again.

## v0.19.0

*2026-11-02*

- Subagents run in chats of their own: Claude Code's and Codex's subagents no longer show their work in the chat that started them, and each one's chat is recorded beside it, opened only when you ask, and deleted with it. Their permission requests and questions come to the chat you work in.
- The default model of Claude Code's subagents, and the model and effort of Codex's, can be set per project from the chat's **More** menu; Codex takes them at its next start. OpenCode and DeepSeek Harness keep showing subagents as tool calls for now.
- The page comes from ui 0.14.0.

## v0.18.0

*2026-11-02*

- Chats can be opened in the agent's own terminal UI with [`codeflower attach`](/guides/terminal-ui/): OpenCode and Codex share the chat live with the page and VS Code, and Claude Code takes it over while its terminal UI runs, with the page following along. Files the agent shows come as links that open beside the chat in your browser; `codeflower-open FILE` gives one yourself.
- Agents know where the mounted folders are on your computer: `codeflower-path` translates paths either way, so they understand paths from your notes, sample sheets and data files, and tell you where results are on your computer.
- Claude Code writes its plans to `plans/` in the workspace, and the plan it asks to approve opens beside the chat, to read and edit before you answer.
- Images in chats are thumbnails the sandbox draws, including microscopy TIFFs, which previews now show too.
- Long chats open with their newest messages and load earlier ones as you scroll up.
- The worker's start message gives a link that connects VS Code on the same computer, or over Remote-SSH, in one click.
- Files in the project's private state stay hidden when the project folder is reached through a link.
- The page comes from ui 0.13.0.

## v0.17.0

*2026-11-01*

- Agents get the [Single-cell best practices](https://www.sc-best-practices.org/) book as a skill: every chapter with its references, to look up and cite when analysing single-cell or spatial omics data.
- The page comes from ui 0.12.0.

## v0.16.0

*2026-11-01*

:::caution
Update the VS Code extension to 0.13.0 as well: older extensions cannot connect to sandboxes from this release, which use TLS.
:::

- Sandboxes serve TLS with a certificate the app makes for each start, and their `codeflower://` line carries its fingerprint, which VS Code and the app check.
- The page `--server` serves takes its key as a bearer token instead of a cookie, and says on start that it is plain HTTP, meant for a TLS [reverse proxy](/guides/sandbox-run-task/#a-browser-directly) or `ssh -L`.
- The page comes from ui 0.11.0.

## v0.15.1

*2026-11-01*

- Maintenance release: the page `--server` serves comes from ui 0.10.0.

## v0.15.0

*2026-11-01*

- The agent's own plugins (Claude Code first), from the app's config and the chat's *Plugins…*: kept in the project and active after the agent restarts.
- The chat page served with `--server` comes from ui 0.9.0.

## v0.14.1

*2026-11-01*

- Maintenance release.

## v0.14.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-sandbox/releases).
