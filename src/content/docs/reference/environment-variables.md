---
title: Environment variables
description: The environment variables the codeflower app reads.
---

Command-line flags win over these, and these over [config.yaml](/reference/config/).

| Variable | Used for |
| --- | --- |
| `CODEFLOWER_CONFIG` | the config directory (default `~/.codeflower`) |
| `CODEFLOWER_AGENT` | the default `--agent` of `run`, `task`, `tui` and `plugins` |
| `CODEFLOWER_ENGINE` | the default `--engine`: `auto`, `docker`, `podman` or `apptainer` |
| `CODEFLOWER_IMAGE` | the default `--image` |
| `CODEFLOWER_IMAGE_TAG` | the default `--image-tag` |
| `CODEFLOWER_IMAGE_DIR` | where Apptainer images are kept (default `~/codeflower/images`) |
| `CODEFLOWER_AGENTS_DIR` | where Claude Code is downloaded to (default `~/codeflower/agents`) |
| `DOCKER_HOST` | the Docker engine to use |
| `HTTPS_PROXY`, `HTTP_PROXY` | the proxy a [network-isolated](/guides/network-isolation/) sandbox's traffic goes through |

The install scripts read `CODEFLOWER_VERSION` (a release to install instead of the latest) and
`CODEFLOWER_INSTALL_DIR` (where to install).

The app also reads batch schedulers' variables (Slurm, PBS, LSF, Grid Engine, HTCondor) to find a job's allocation,
and passes it to the agent.
