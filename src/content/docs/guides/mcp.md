---
title: MCP servers
description: Give the agents of your sandboxes Model Context Protocol servers, from config.yaml.
---

MCP servers give the agent more tools: a database, a documentation search, a lab system. In code flower they come
only from [config.yaml](/reference/config/) on the computer that starts the sandbox, under `mcp_servers:`, and
every sandbox's agent gets them. The agent cannot add servers itself.

## A server at a URL

```yaml
mcp_servers:
  docs:
    url: https://mcp.example.org/mcp
    transport: http                       # the default; sse works for Claude Code and OpenCode only
    headers: { Authorization: "Bearer <token>" }
```

## A command in the sandbox

The command runs **inside the sandbox** (stdio), so it must be installed there:

```yaml
mcp_servers:
  files:
    command: files-mcp                    # on the sandbox's PATH, or a full path
    args: [--root, /codeflower-state/workspace]
    env: { TOKEN: "<token>" }
```

Install it into the project's environment, which persists: `uv pip install <package>` for a Python server (the
command lands in the project's venv, on `PATH`), or `npm install --prefix /codeflower-state/env/mcp <package>` for a
Node one, with the full path `/codeflower-state/env/mcp/node_modules/.bin/<command>` as `command`. The agent can do
this for you. Prefer an installed command to `npx`/`uvx`, which download the server at every start.

## Rules

- Names are 1 to 32 letters, digits, `-` or `_`.
- A server with `env` or `headers` usually holds a token: config.yaml must then not be readable by other users
  (`chmod 600 ~/.codeflower/config.yaml`), or code flower refuses to start.
- **Restart the sandbox** after a change; the list is read when it starts.
- A server that fails to start is left out, and the chat says so.
- With [network isolation](/guides/network-isolation/), the host of each `url` server is allowed by itself. A
  server on a private address, and whatever a `command` server connects to, need lines in the allowlist file.
