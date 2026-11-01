---
title: Ports and addresses
description: The addresses and links code flower prints and opens.
---

| Address | What |
| --- | --- |
| `codeflower://HOST:PORT?token=TOKEN` | a sandbox; paste into VS Code or the app's *New sandbox* → *Connect one running elsewhere*. Anyone with it controls the agent |
| `http://127.0.0.1:7720/?key=…` | the app's window, served only to this computer (another port when 7720 is taken) |
| `http://127.0.0.1:7720/#add=codeflower%3A%2F%2F…` | adds a sandbox to the running app, in one click |
| `vscode://codeflower.codeflower/connect?address=codeflower://…` | connects VS Code to a sandbox, after asking |
| `http://HOST:PORT/?key=…` | a sandbox's own chat page, with `--server` |
| `https://tunnels.codeflower.app/p#…` | a one-time [pairing](/guides/remote-access/) link (10 minutes) |
| `https://tunnels.codeflower.app/m/ID/` | the app's page through the tunnel, for paired browsers |

A sandbox's port is any free port unless `--port` sets one. With Docker and Podman it is published on `127.0.0.1`
only; with Apptainer it listens on the node, and the printed address is the node's (`--host`, `--advertise-host`
change this).
