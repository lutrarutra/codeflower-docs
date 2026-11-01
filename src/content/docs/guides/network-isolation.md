---
title: Network isolation
description: Cut the sandbox off the network, except for its agent's service and the hosts you allow.
---

By default a sandbox has ordinary network access, like any program you run. With **network isolation** it has no
network of its own: the app is its only way out, and lets it reach only

- its **agent's service** (e.g. Anthropic's or OpenAI's API, for the agent to work at all),
- the image provider's API, when [image generation](/guides/skills-and-icons/#generating-icons) is configured,
- the hosts of [MCP servers](/guides/mcp/) at a URL,
- and the hosts in the project's **allowlist file**.

Everything else is refused, and the app prints what it refused.

```sh
codeflower interactive --isolate-network -p study42 -i ~/data/study42 -o ~/results/study42
```

In the app's window, tick *Isolate the network* when starting. `isolate_network: true` in
[config.yaml](/reference/config/) isolates every sandbox the command line starts.

## The allowlist file

Each project has one, next to the project folder: `~/codeflower/projects/study42.allowed-hosts.txt`
(`--allowlist FILE` uses another). It is created with an explanation the first time. The sandbox cannot change
it, since it is outside the project folder. **Edits apply at once**, without restarting the sandbox.

```text
# One host per line:
example.org          # example.org on ports 443 and 80
*.example.org        # every subdomain of example.org (not example.org itself)
example.org:8443     # example.org on port 8443 only
@pypi                # a preset: every host one service needs
```

Presets cover the services analyses most often need: package indexes (`@pypi`, `@conda`, `@cran`,
`@bioconductor`, `@npm`), model hubs (`@huggingface`), `@github`, and public databases (`@ncbi`, `@ensembl`,
`@uniprot`, `@ebi`). See [all presets and their hosts](/reference/allowlist-presets/).

:::caution
Every host you allow is also a place the agent could send your data to. Prefer hosts that only serve
downloads; the presets that also accept uploads say so.
:::

Private network addresses are reachable only when you list them. If the computer itself reaches the internet
through a proxy (`HTTPS_PROXY`), the app uses it.

## Inside the sandbox

The agent is told it is isolated. When it needs a host, it asks you to allow it, e.g. `@pypi` to install
packages. It can check a host with:

```sh
codeflower-network check pypi.org
```

## Where it works

| Engine | Network isolation |
| --- | --- |
| Docker, Podman on Linux | yes |
| Docker Desktop on macOS and Windows | no |
| Apptainer | where the site allows users to run `apptainer exec --net --network none`; `codeflower check` says |

No administrator rights are needed.
