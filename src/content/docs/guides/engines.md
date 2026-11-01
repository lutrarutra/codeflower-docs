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

Apptainer images are kept as files in `~/codeflower/images` (or `CODEFLOWER_IMAGE_DIR`), named after their
release and commit. Jobs that start at the same time wait for one download.

### Claude Code

Claude Code's license does not allow passing it on in an image, so the app downloads the version the image needs
from npm, into `~/codeflower/agents` (or `CODEFLOWER_AGENTS_DIR`), and mounts it read-only into the sandbox.
`codeflower pull` downloads it too.

## Resources

On Docker and Podman, `--cpus N` and `--memory 32G` limit the sandbox. Inside a batch job, code flower reads the
job's allocation (Slurm, PBS Pro/OpenPBS/Torque, LSF, Grid Engine, HTCondor) and applies it. `--time-limit 8h`
tells the agent how long it has; it is not enforced. The agent sees all of this with `codeflower-doctor`.
