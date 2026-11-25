---
title: Container engines
description: Docker, Podman and Apptainer, how code flower picks one, and which sandbox image it runs.
---

A sandbox is a container. code flower runs it with **Docker**, **Podman** or **Apptainer** (formerly
Singularity), and needs no administrator rights for any of them.

## Which engine

`--engine auto` (the default) uses the first engine that is ready, in this order:

1. **Docker**, through its API (no `docker` command needed; `DOCKER_HOST` is honoured). Docker Desktop on macOS and
   Windows works too.
2. **Podman**.
3. **Apptainer**, or `singularity` where only that is installed.

An image that is a file (a `.sif`) always selects Apptainer. Choose one with `--engine docker|podman|apptainer`,
`CODEFLOWER_ENGINE`, or `engine:` in [config.yaml](/reference/config/). Run `codeflower check` to see which engines
are ready and how to set up the others.

| | Docker | Podman | Apptainer |
| --- | --- | --- | --- |
| Runs as | your user id | your user id (`--userns=keep-id`) | your user, with a clean environment and no home folder |
| Port | published on `127.0.0.1` only | published on `127.0.0.1` only | the host's network; the node's address is printed |
| `--cpus`, `--memory` | enforced | enforced | not enforced: the batch job's limits apply |
| Network isolation | Linux | Linux | where the site allows it (`codeflower check` says) |

## The sandbox image

The image is `ghcr.io/lutrarutra/codeflower-sandbox`. Each app release runs the sandbox release it was made and
tested with, and downloads it on first use. [Compatibility](/reference/compatibility/) lists which goes with which.

- `codeflower pull` downloads (or updates) it ahead of time. On a cluster, do this on the login node.
- `--image-tag TAG` uses another build of the published image: `latest`, a release (`0.2.1`, `v0.2.1`, or `0.2` for
  its newest patch) or a commit (`sha-abc1234`).
- `--image NAME` uses another image entirely, e.g. one you built, or a `.sif` file. It is never downloaded.

Apptainer images are kept as files in the image folder, named after their release and commit: `image_dir` in
[config.yaml](/reference/config/), else `CODEFLOWER_IMAGE_DIR`, else `~/codeflower/images`. Jobs that start at the
same time wait for one download. When you choose the folder (`image_dir` or the variable), Podman also keeps a copy
of each image it downloads there (`codeflower-sandbox_<tag>.tar`) and loads it instead of downloading again, for
clusters where Podman's storage lasts only for a job.

### Removing old images

Each app update runs a newer release and leaves the older image behind, a few GB each. `codeflower images list`
shows the images the engine has and whether each is still needed; `codeflower images prune` removes the unused ones
after asking (`--dry-run` only shows them, `--yes` does not ask). It keeps the release this app runs, images a
sandbox or container uses (running or stopped), images a project's saved settings, the window, `image` in
config.yaml or `CODEFLOWER_IMAGE`/`CODEFLOWER_IMAGE_TAG` choose, and anything newer than the app's release. With
Podman it also reviews the saved copies in the image folder. `--engine` picks the engine, as for `pull`.

### Claude Code

Claude Code's license does not allow passing it on in an image, so the app downloads the version the image needs
from npm, into `agents` next to the image folder (`~/codeflower/agents`, or `CODEFLOWER_AGENTS_DIR`), and mounts it read-only into the sandbox.
`codeflower pull` downloads it too.

## Resources

On Docker and Podman, `--cpus N` and `--memory 32G` limit the sandbox. Inside a batch job, code flower reads the
job's allocation (Slurm, PBS Pro/OpenPBS/Torque, LSF, Grid Engine, HTCondor) and applies it. `--time-limit 8h`
tells the agent how long it has; it is not enforced. The agent sees all of this with `codeflower-doctor`.

## Environment variables

`--env` sets a variable in the sandbox, on every engine. Give it once per variable:

```sh
codeflower sandbox -p study42 --env HF_HOME=/data/output/study42/hf --env WANDB_API_KEY
```

- `NAME=VALUE` sets it to that value.
- `NAME` alone takes its value from where you start the sandbox, each time it starts; it is left out if it is not
  set there. Use this for secrets: the project's settings then keep only the name.
- Values never appear in the command line of the engine, so other users cannot read them with `ps`.
- The app's own variables (`CODEFLOWER_…`, and those it sets for the sandbox, such as an isolated sandbox's proxy)
  cannot be set.

The variables are saved with the [project's settings](/guides/projects-and-folders/#starting-a-project-again). With
`--continue`, `--env` adds to the saved ones, and replaces one of the same name.

## Engine flags

`--engine-args` passes container flags to the engine, quoted as one value. It takes these flags of `docker run`,
and code flower gives each engine its own equivalent, so a project means the same on all three:

| Flag | Docker | Podman | Apptainer |
| --- | --- | --- | --- |
| `--gpus all`, `--gpus device=0,1` | NVIDIA GPUs | NVIDIA GPUs, as CDI devices (`nvidia.com/gpu=…`) | `--nv`; `device=…` sets `CUDA_VISIBLE_DEVICES` |
| `--device HOST[:CONTAINER][:rwm]` | ✓ | ✓ | not applied |
| `--shm-size 8g` | ✓ | ✓ | not applied |
| `--ulimit nofile=1024:2048` | ✓ | ✓ | not applied |
| `--cap-add`, `--cap-drop` | ✓ | ✓ | not applied |
| `--add-host HOST:IP`, `--dns IP` | ✓ | ✓ | not applied |

```sh
codeflower sandbox -p study42 --engine-args '--gpus all --shm-size 8g'
```

- A flag an engine cannot apply is left out with a note, and the sandbox still starts, so a project saved on
  Podman also starts with Apptainer on a cluster. `--add-host` and `--dns` are also left out when the sandbox has no
  network of its own (`--isolate-network`).
- Any other flag is refused before the sandbox starts. Those that code flower sets itself say what to use
  instead: `-v` and `--mount` → `--bind`, `-e` → `--env`, `--cpus`, `--memory`, `--network` →
  `--isolate-network`. `--name`, `--user`, `--privileged` and `--security-opt` are not allowed, as the sandbox
  depends on them.
- `--engine-args` is saved with the project's settings. Given with `--continue`, it replaces the saved one, and
  `--engine-args ''` removes it.

### GPUs

`--gpus` gives the sandbox NVIDIA GPUs. The host needs the NVIDIA driver, and:

- **Docker**: the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).
- **Podman**: the same toolkit, and a CDI specification made once with
  `sudo nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml`.
- **Apptainer**: nothing more. `--nv` binds the host's driver into the sandbox. In a batch job, the sandbox uses the
  job's GPUs (`CUDA_VISIBLE_DEVICES`).

The image does not include CUDA: packages that need it, such as PyTorch, bring their own.
