---
title: App
description: "Release notes of the codeflower app: command line, window and sandboxes."
sidebar:
  order: 1
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.49.1

*2026-11-25*

- Sandboxes run sandbox 0.43.1 (codeflower-audit 0.2.0 in paper audits), `codeflower audit` is codeflower-audit 0.2.0, and the window has the changes of ui 0.46.1.

## v0.49.0

*2026-11-25*

- `codeflower images list` shows the sandbox images the engine has and whether each is still needed; `codeflower images prune` removes the unused ones after asking (`--dry-run`, `--yes`). It keeps the release the app runs and newer ones, images a sandbox or container uses, and those a project, the window, the config or the environment choose.
- Sandboxes run sandbox 0.43.0 (watches, Claude Code commands that survive *Send now*, DeepSeek Harness 0.2), and the window has the changes of ui 0.46.0.

## v0.48.0

*2026-11-25*

- **Paper audits**: `codeflower sandbox --audit DOI` starts a sandbox whose agent audits how much of that paper reproduces, in a project named `audit-…` unless you give `--project`. `--continue` keeps auditing the same paper, and with `--isolate-network` a new allowlist gets the hosts an audit needs.
- `codeflower audit` checks, scores, seals and verifies audits on your computer, with the same code as the sandbox (codeflower-audit 0.1.0): `codeflower audit verify` tells whether a sealed audit was changed.
- A new `@literature` allowlist preset: doi.org, Crossref, OpenAlex, Europe PMC, Zenodo, figshare, arXiv and bioRxiv.
- Sandboxes run sandbox 0.42.0, and the window has the changes of ui 0.45.0: forking chats, agents that read, fork and start chats, and the Roots map as a tree.

## v0.47.1

*2026-11-25*

- Sandboxes run sandbox 0.41.0: Roots, a map of the project's ideas, and newer Claude Code, Codex and OpenCode.
- The window has the changes of ui 0.44.0, including the Roots tab.

## v0.47.0

*2026-11-24*

- `codeflower projects show --size` gives the disk space of the project and of its env and workspace folders kept elsewhere. `projects list --size` now counts only the project itself, without those folders.
- A project started with a `workspace_dir` that is refused, for example because it is the env folder, no longer keeps that choice: fixing `config.yaml` fixes the next start.
- A new project no longer takes a workspace folder that already has files in it, such as the workspace of another project with the same name elsewhere.
- `--workspace-dir` naming the project's workspace folder through a link is no longer taken for a move.
- Projects started by `codeflower run`, `task` or the window with `workspace_dir` set no longer look as if they had saved settings to `sandbox --continue` and `projects list`.
- After `move-workspace --into-project`, starting the project no longer suggests moving the workspace out again.
- A copy or move continued after it was stopped removes what was deleted or renamed in the original since, and a copy that fails at the end can still be continued. `--abort` drops only an unfinished operation of its own command.
- Sandboxes run sandbox 0.40.1.

## v0.46.0

*2026-11-23*

- Copying a project, or moving it or its workspace to another file system, can be stopped and continued. A copy stopped with Ctrl+C, or one that fails, keeps what it copied: run the same command again to continue it, copying only what is missing or changed, or add `--abort` to drop it. Until it is complete, the project stays as it was. `codeflower projects show` lists an unfinished one, and a sandbox started meanwhile says so.
- These copies keep modification times (which make and Snakemake go by) and hard links, and copy several files at a time, which is much faster on network file systems. The terminal shows bytes and speed as well as files, and `move-workspace` shows how much is left.
- A project's workspace folder and env folder must be apart: starting a sandbox, or `move-workspace`, refuses a `workspace_dir` that is, holds or is in the `env_dir` folder.

## v0.45.0

*2026-11-23*

- `workspace_dir` in `config.yaml` (or `--workspace-dir`) keeps the workspace of new projects, where the agent keeps its scripts, downloads and results, in a folder of its own, e.g. on group storage when your home directory has a quota. The chats, sign-ins and settings stay in the project, and inside the sandbox and its batch jobs the workspace is at the same path. Each project remembers where its workspace is, so changing `workspace_dir` later does not move existing ones. See [Workspaces on larger storage](/guides/projects-and-folders/#workspaces-on-larger-storage).
- `codeflower projects move-workspace PROJECT DIR` moves an existing project's workspace there, and `--into-project` moves it back. `projects show`, `copy`, `move` and `remove` take the workspace folder along.
- Moving a project to a folder of the same name elsewhere keeps its env folder where it is, and a copy that would share the original's env or workspace folder is refused.
- The app's window has the changes of ui 0.43.0: a button to start a new chat from the list of the sandbox's chats, and Copy path for files in a workspace kept elsewhere.
- Uses sandbox 0.40.0.

## v0.44.0

*2026-11-22*

- `image_dir` in `config.yaml` sets the folder for the images the app downloads, besides `CODEFLOWER_IMAGE_DIR`, which still wins. When you choose a folder, Podman also keeps a copy of each image it downloads there and loads it instead of downloading again, for clusters where Podman's storage lasts only for a job. See [Engines](/guides/engines/).
- Array jobs report the state of each task while they run, so the chat shows how far an array is. A cancelled array's tasks that had already ended keep how they did.
- On PBS and Grid Engine, each task of an array writes its own scheduler log (`scheduler-INDEX.log`), as on LSF and HTCondor.
- The app's window has the changes of ui 0.42.0: batch job output tabs that say whether more is coming, an array's tasks in the jobs list, and the sandbox's own messages shown apart from yours.
- Uses sandbox 0.39.0.

## v0.43.1

*2026-11-21*

- The app's window has the changes of ui 0.41.0: take over a chat that is open in another sandbox, and closing a chat's last tab lets other sandboxes open it.
- Uses sandbox 0.38.0.

## v0.43.0

*2026-11-20*

- Agents can ask for **batch jobs**, which the app submits and runs each in a sandbox like the agent's own: the same image, data folders, workspace, software environments and network. Turn them on with `jobs.scheduler` in `config.yaml`, or `--jobs` on `codeflower sandbox`, `run` and `task`. Slurm and local runs are built in; PBS, LSF, Grid Engine and HTCondor come as example profiles, and you can define your own. The config sets defaults, limits, queues and whether you are asked in the chat for each job. See [Batch jobs](/guides/batch-jobs/).
- `codeflower jobs` lists, shows, prints and cancels a project's batch jobs from your computer, and `codeflower check` says whether jobs can be submitted there. `codeflower projects move` and `remove` refuse while a project's jobs are queued or running, and move or remove its jobs with it.
- `codeflower client stop` stops the client, also one running in the background. The sandboxes it started first ask their working chats to wrap up; `--now` stops them at once.
- The app's window has the changes of ui 0.40.0: a chat's batch jobs beside its usage.
- Uses sandbox 0.37.0.

## v0.42.2

*2026-11-19*

- The app's window has the changes of ui 0.39.0: click a chat's title to list the other chats of its sandbox, latest message first, and switch to one in its own tab.
- Uses sandbox 0.36.1.

## v0.42.1

*2026-11-19*

- The app's window has the changes of ui 0.38.0: the **All together** switch on queued messages, *Interrupt & send* where sending now stops the agent, and a subagent badge that counts the running ones.
- Uses sandbox 0.36.0.

## v0.42.0

*2026-11-19*

- The app's window has a search: press Ctrl+K (⌘K on a Mac) or click the magnifier in the rail to find chats and files in every sandbox, by name and by what they say. Searching files and chat text needs sandbox 0.35.1 or later; older sandboxes have their chat titles searched.
- The app's window has the other changes of ui 0.37.0: copying code shows a green check.
- Uses sandbox 0.35.1.

## v0.41.2

*2026-11-18*

- The app's window has the changes of ui 0.36.0: code blocks have a copy button, and clicking inline code copies it.
- Uses sandbox 0.34.0, whose `codeflower-doctor` tells the agent whether batch jobs can be submitted from the sandbox.

## v0.41.1

*2026-11-18*

- The app's window has the changes of ui 0.35.0: a report's figure opened to comment on can be downloaded, keeps the text of matplotlib SVGs, and takes the keyboard at once.
- Uses sandbox 0.33.2.

## v0.41.0

*2026-11-18*

- `codeflower sandbox` and `codeflower run` take `--forward-to HOST`: when the login node cannot reach a compute node's port, the sandbox opens an SSH tunnel back to HOST, so its `127.0.0.1` links work there. It reconnects when it drops and ends with the sandbox; `--continue` remembers it. See [HPC clusters](/guides/hpc/).
- `codeflower client restart` restarts the running client from the installed release, so its page (also through the tunnel) is the new one; open pages reconnect and offer to reload. Sandboxes started in a terminal or a batch job keep running; with sandboxes the client started itself it asks for `--force`, which lets their chats wrap up first.
- `codeflower update` offers to restart an older client (`--restart-client` restarts it without asking), and `codeflower sandbox` and `codeflower run` restart an older background client they find by themselves.
- The app's window has the changes of ui 0.34.0: crisper terminals, a reload banner after an update, and clicked files that come into view in narrow windows and Focus.
- Uses sandbox 0.33.1.

## v0.40.0

*2026-11-18*

- A sandbox's *Manage* tab in the app's window has a *Versions* card: the version of the page and which computer serves it, the app that started the sandbox, its image, the page the image serves, storyteller and each agent's version. *Copy* gives them as text for a bug report.
- The app's window has the changes of ui 0.33.0: files the agent shows are listed in the chat even when no window was open, and *Manage* and shell tabs open in view from the Server view.
- Uses sandbox 0.33.0.

## v0.39.0

*2026-11-17*

- `--env NAME=VALUE` sets an environment variable in the sandbox; `--env NAME` alone takes its value from where you start it, so secrets stay out of saved files. See [Environment variables](/guides/engines/#environment-variables).
- `--engine-args` passes container flags to the engine, such as `--gpus all` or `--shm-size 8g`, the same way on Docker, Podman and Apptainer. See [Engine flags](/guides/engines/#engine-flags) and [GPUs](/guides/engines/#gpus).
- Ctrl+C on `codeflower sandbox` or `codeflower run` first asks the chats whose agent is working to save their work and wrap up, and stops at once when no agent works. Ctrl+C twice within 3 seconds stops it at once.
- `sandbox` and `run` print where to open the sandbox as one table, each link alone on its line so Ctrl+click takes all of it, and no longer print the links twice.
- A project started again without `--continue` keeps its saved port when it is free, so VS Code's saved connection still works.
- `codeflower projects remove`, `copy` and `move` show their progress, are faster on projects with many files, and stop cleanly on Ctrl+C; run `projects remove NAME` again to finish a stopped removal.
- Uses sandbox 0.32.0.

## v0.38.0

*2026-11-17*

- `codeflower sandbox --continue NAME --create` starts the project from the flags given if it does not exist yet, and continues it with its saved settings otherwise, so a script can always use the same command. `--create` only starts a project in a folder that is empty or missing.
- When `--continue` names a project that does not exist, the error suggests the closest project name, in case of a typo.
- The help of `--env-dir` and `env_dir:` says everything the env folder holds since 0.37.0.

## v0.37.0

*2026-11-17*

- With `--env-dir` (or `env_dir:` in the config), the env folder now also holds the chats' browsers, image thumbnails and the sandbox's `~/.cache` (HuggingFace, torch and other tools' downloads), besides the software environment and download caches, so a project in your home folder keeps little more than its chats, sign-ins, workspace and environment recipes. See [Environments on scratch](/guides/projects-and-folders/#environments-on-scratch).
- A project that already uses an env folder downloads the browser again on first use and starts with empty `~/.cache` and thumbnails. What those folders held stays in the project, hidden, and can be deleted (`browser/`, `thumbnails/` and `home/.cache/` in the project's folder) while no sandbox of it runs.
- `codeflower projects list` is quick again: it shows each project's disk space only with `--size`, since counting it reads every file of large projects.
- New sandboxes use sandbox 0.31.2.

## v0.36.0

*2026-11-17*

- `codeflower projects list` shows how much disk space each project takes (its folder, settings and environment, as `du` counts them) and where its folder is.
- New sandboxes use sandbox 0.31.1.

## v0.35.1

*2026-11-16*

- `codeflower reproduce` cleans up after itself: the unpacked archive, the downloads and the throwaway project are removed when it ends, also after a failure or Ctrl-C. A run that was killed leaves them, and its container, behind; the next run removes them. See [What happens](/guides/reproduce-an-analysis/#what-happens).
- Stopping `codeflower reproduce` with Ctrl-C says so and exits with status 130, instead of reporting that the environment could not be restored.
- On Apptainer, the archive's image no longer leaves a second copy in Apptainer's cache.

## v0.35.0

*2026-11-16*

- `codeflower sandbox` saves how it started a project, next to the project folder. `codeflower sandbox --continue PROJECT` starts the project again the same way, on the same port and with the same key, so VS Code and saved page links reconnect. Flags given with it change a setting or add folders, and `--new-key` makes old links stop working. See [Starting a project again](/guides/projects-and-folders/#starting-a-project-again).
- New `codeflower projects` to list, show, copy, move and remove projects, with their settings, allowlist and environment on scratch.

## v0.34.0

*2026-11-16*

- New `codeflower reproduce ARCHIVE --output DIR`: reruns a reproducible pipeline archive in a new sandbox and compares every result with the recorded one, with no agent and no sign-in. See [Reproduce an analysis](/guides/reproduce-an-analysis/).
- Sandboxes run sandbox 0.31.0, with reproducible pipelines, and reports shown interactive in the file's own tab (ui 0.30.0).

## v0.33.2

*2026-11-15*

- Sandboxes run sandbox 0.30.1: the window has the changes of ui 0.29.0 (a way back from Focus to the editor, the chat-or-pane switch in the top bar on a phone, and the failed step that ended a turn in sight), and storyteller 0.6.2.

## v0.33.1

*2026-11-15*

- Sandboxes run sandbox 0.30.0, with more command-line tools and the system libraries common R packages need.

## v0.33.0

*2026-11-15*

- The window has the changes of ui 0.28.0: chats' browsers beside them, terminals in a panel at the foot, the model and effort in one menu, and a composer that fits a phone.
- When an agent needs you in its chat's browser, the notification says so.
- The `github` preset of an isolated sandbox also allows GitHub's release downloads (release-assets.githubusercontent.com), which failed before.
- Sandboxes run sandbox 0.29.0.

## v0.32.0

*2026-11-15*

- Remote access serves a browser's requests over one shared encrypted connection, answering them as each is ready, when the browser asks for it (the tunnel's page does from now on). Older browsers are served as before.
- Sandboxes run sandbox 0.28.2.

## v0.31.1

*2026-11-14*

- The window has the changes of ui 0.26.0: with the sidebar folded, the rail shows the chats that work, wait for you or finished unseen, and a "…" menu lists the others. A tab's close button no longer starts a drag when the mouse moves a little.
- Sandboxes run sandbox 0.28.1.

## v0.31.0

*2026-11-13*

- The window has the changes of ui 0.25.0: chats show as working while their agent runs a background command or subagent, and background work that ends no longer marks a chat finished.
- Sandboxes run sandbox 0.28.0.

## v0.30.4

*2026-11-13*

- The window has the changes of ui 0.24.0: with the sidebar folded, the rail lists the chats of the sandbox in front, or in Focus the chats of Focus's list, as numbered tiles that Alt+1 to Alt+9 open.
- Sandboxes run sandbox 0.27.1.

## v0.30.3

*2026-11-13*

- The window has the changes of ui 0.23.0: queued messages wait in the sandbox, are shared by every window with the chat open, and pause with *Resume* after a turn that did not end normally.

## v0.30.2

*2026-11-13*

- Sandboxes run sandbox 0.27.0, which keeps a chat's queued prompts in the sandbox.

## v0.30.1

*2026-11-13*

- The window opens on a home view of your sandboxes and their latest chats, with the chats that need you first, and has the other changes of ui 0.22.0.
- Sandboxes run sandbox 0.26.0, where Claude Code's turns end while background subagents still run.

## v0.30.0

*2026-11-12*

- The window shows the commands agents run and lets you watch their output read-only, opens report figures over the whole window to comment on them, and has the other changes of ui 0.21.0.
- Sandboxes run sandbox 0.25.0, and the window is ui 0.21.0.

## v0.29.0

*2026-11-11*

- The app's window can list, download and remove builds of the sandbox image (*Sandbox images* in the Server view). A remote browser can download or remove images only with `tunnel: {manage: true}`.
- While a sandbox starts, the window shows the image download's progress and when the sandbox last printed anything; progress lines no longer pile up in its log.
- Sandboxes run sandbox 0.24.0, and the window is ui 0.20.0.

## v0.28.3

*2026-11-11*

- On macOS, the app finds Docker Desktop when it is running: it now uses the current Docker context, as the `docker` command does, instead of only `DOCKER_HOST` and `/var/run/docker.sock`. This also finds Colima and rootless Docker.

## v0.28.2

*2026-11-05*

- Sandboxes run sandbox 0.23.3.

## v0.28.1

*2026-11-05*

- Sandboxes run sandbox 0.23.2.
- The app's window takes ui 0.19.1: what you are writing in a chat stays there as you switch between Chat and Focus or between chats.
- The install scripts find the latest release without GitHub's API, which refuses more than 60 lookups an hour from one address, as from a cluster's login nodes, where installing failed with "could not look up the latest release".

## v0.28.0

*2026-11-05*

- Sandboxes run sandbox 0.23.0, in which agents can make PowerPoint slide decks you watch appear beside the chat.
- The app's window takes ui 0.19.0: *Print / PDF* works for reports, a deck's slides download through your browser, and in Focus you step through the files shown beside a chat.

## v0.27.1

*2026-11-04*

- Rootless Podman starts sandboxes on machines without subuid and subgid ranges, as on many clusters, where the sandbox used to fail to start.
- `codeflower check` shows Podman's version without its warnings about a missing systemd session.
- The app's window takes ui 0.18.0: a *New chat* dialog to choose the agent and a title, and pinned models for OpenAI-compatible endpoints.
- Uses sandbox image 0.22.1.

## v0.27.0

*2026-11-04*

:::caution
`codeflower sandbox` no longer takes `--agent`: every agent runs in the sandbox, and you choose one per chat. Remove `--agent` from `codeflower sandbox` commands in scripts and batch jobs. `run`, `task`, `tui` and `plugins fetch` keep it. This release needs sandbox image 0.22.0, which it pulls.
:::

- A sandbox runs every agent (Claude Code, Codex, DeepSeek Harness and OpenCode), and each chat is one agent's ([Chatting](/guides/chatting/#choosing-the-agent)). An isolated sandbox reaches all the agents' services, and API keys and plugins from the settings reach every agent.
- `codeflower attach` asks which agent a new chat is for; `--agent` picks it with `--new`.
- `--projects-dir` (`projects_dir:` in the settings) sets the folder of named projects, and `--env-dir` (`env_dir:`) keeps the projects' software environments and download caches elsewhere, for example on scratch ([Projects and folders](/guides/projects-and-folders/)).
- Stopping a sandbox from the app's window works for Apptainer sandboxes started in a terminal, which used to keep running. A sandbox that does not stop in time is killed, and a second Ctrl+C kills it at once.
- R packages installed in a project are kept per R version, with renv's cache in the project's environment.
- The app's window takes ui 0.17.0: the agent switch for new chats, a terminal into the sandbox, and copying a file's sandbox or host path.
- Sandboxes run image 0.22.0.

## v0.26.0

*2026-11-03*

- Codex can sandbox its own commands in Docker and Podman containers: the app lets it create the user namespaces it needs, and nothing more.
- OpenCode offers OpenCode Zen's free models again.
- `--host` no longer makes Docker and Podman sandboxes unreachable: it applies to Apptainer, and Docker and Podman always publish on 127.0.0.1.
- The app's window takes ui 0.16.0: folded turns keep the agent's messages in sight, model search and pins, *Open in Focus* and *Older chats*.
- Sandboxes run image 0.21.0.

## v0.25.0

*2026-11-02*

:::caution
`codeflower interactive` is now `codeflower sandbox`: change scripts and batch jobs (`--wrap "codeflower interactive …"`) to the new name. The old one is gone.
:::

- `codeflower sandbox` starts a sandbox to work with from VS Code or the browser, with the same flags `codeflower interactive` had ([Sandbox, run and task](/guides/sandbox-run-task/)).
- Sandboxes run image 0.20.2.

## v0.24.1

*2026-11-02*

- The window's page folds each turn to your message and the agent's answer with the eye button (ui 0.15.0). Focus folds them unless you show them, the chat tabs show them unless you fold them.
- Sandboxes run image 0.20.1.

## v0.24.0

*2026-11-02*

- When `codeflower tui` ends, it prints the `codeflower` command that opens the same chat again, with your folders and the chat's id, in place of the agent's own command, which only works inside the sandbox.
- An id is given to `codeflower tui` as `--resume=ID`; the examples now say so.
- Sandboxes run image 0.20.0.

## v0.23.0

*2026-11-02*

- The window's page shows subagents in chats of their own (ui 0.14.0): a card for each in the chat that started it, a badge of the running ones, and each subagent's chat in a tab of its own, loaded when opened.
- Sandboxes run image 0.19.0.

## v0.22.0

*2026-11-02*

- **The agent's own terminal UI.** [`codeflower attach`](/guides/terminal-ui/) opens a chat of a running sandbox in Claude Code's, Codex's or OpenCode's terminal UI, while the app's page and VS Code follow it. `~s` switches chats, `~.` detaches and leaves it running, and `~l`/`~o` open the images and reports the agent showed in your browser. `codeflower chats` and `codeflower terminals` list a sandbox's chats and the terminal UIs running on them.
- `codeflower tui` starts a sandbox that only runs the agent's terminal UI, in your terminal, and ends with it; `--continue` and `--resume` open earlier chats of the project.
- When a folder you mount is reached through a link (a home folder on `/gpfs`, say), the agent knows both paths, so it understands the one you and your files use.
- The window's page has the chat improvements of ui 0.13.0, and sandboxes run image 0.18.0.

## v0.21.0

*2026-11-01*

- `codeflower tunnel pair` no longer leaves the app running in the background: if it had to start the app to answer the pairing, it quits it again once the browser paired. On a cluster, this keeps the login node from holding the tunnel, so your jobs can take it over. Add `--keep-running` to keep your computer reachable from paired browsers afterwards.

## v0.20.0

*2026-11-01*

- **The tunnel follows your batch jobs.** With a home folder shared between computers, as on a cluster, the tunnel is no longer tied to the node that signed in. A job on any node connects it by itself, so you sign in and pair once, and your browsers stay paired. One computer connects at a time: the next takes over when the previous one's app quits, or 90 seconds after its job was killed.
- On a cluster, the app no longer forgets sandboxes started on other nodes.

## v0.19.0

*2026-11-01*

- **A rail of sandboxes.** The window lists the running sandboxes in a rail on the left, by two letters and grouped by computer, with a count of the chats that finished or wait for you. Choosing one shows its chats and folders in the sidebar, which <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>B</kbd> folds away.
- **+** in the rail opens *New sandbox*, which starts a sandbox on a computer or connects one running elsewhere by its `codeflower://` line, in place of *Add remote sandbox*. The computers button at the bottom of the rail opens what was *Server*.
- Runs sandbox 0.17.0, which brings the Single-cell best practices book as a skill.

## v0.18.0

*2026-11-01*

:::caution
Update the VS Code extension to 0.13.0 as well: older extensions cannot connect to sandboxes from this release, which use TLS.
:::

- **Encrypted connections to sandboxes.** The app and VS Code reach a sandbox over TLS, checked against the certificate fingerprint in its `codeflower://` line (`fp=…`), so nobody on the network can read your chats or stand in for the sandbox. Sandboxes started with `--server` stay plain HTTP, for a [reverse proxy](/guides/sandbox-run-task/#a-browser-directly) in front.
- The app's page keeps its secret in the browser instead of a cookie, which every program listening on your computer could have received.
- A sandbox's token no longer appears in its log on the app's page.
- Sandboxes run in your computer's time zone instead of UTC.
- The tunnel is reached only over https.
- Runs sandbox 0.16.0.

## v0.17.0

*2026-11-01*

- **All your computers in one page.** Opened through the [tunnel](/guides/remote-access/#several-computers), the page shows the sandboxes of every computer the browser is paired with, side by side in the tabs and in Focus. It opens from the computer with the newest code flower, and offers another computer when one is off.
- Opening the page through the tunnel again is faster: the browser keeps the page's code.
- Runs sandbox 0.15.1.

## v0.16.0

*2026-11-01*

- **Plugins for Claude Code.** `plugins:` in [config.yaml](/reference/config/) gives the agent its own plugins in every project, and [`codeflower plugins`](/reference/cli/codeflower-plugins/) lists, adds, removes, enables and disables them for one project. They are fetched before a sandbox starts, also for network-isolated sandboxes; `codeflower plugins fetch` does it ahead, e.g. on a login node.
- **Focus** in the app's window: the chats of every sandbox in one list, in the order they need you, with the files each agent showed beside it. <kbd>Alt</kbd>+<kbd>J</kbd> goes to the next agent that waits for you.
- The app's window has a *Plugins…* dialog on a sandbox's overview, and the file editor fills its tab like VS Code's.
- Rootless Podman without the cgroup controllers to limit CPUs or memory now starts the sandbox without that limit, and says so, instead of failing.
- With Apptainer, the first start after downloading the image no longer fails to find it.
- The tunnel's account page shows how many sandboxes each computer runs.
- Runs sandbox 0.15.0.

## v0.15.1

*2026-11-01*

- Runs sandbox 0.14.1.
- Every `config.yaml` key is now described, in the [reference](/reference/config/) and in a schema that gives editors autocomplete.

## v0.15.0

*2026-11-01*

The first release documented on this site. For earlier changes, see the [repository's history](https://github.com/lutrarutra/codeflower-app/releases).
