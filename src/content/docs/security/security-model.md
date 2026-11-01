---
title: Security model
description: What the sandbox protects, who can reach a sandbox, and what the tunnel can and cannot see.
---

code flower runs autonomous agents that execute code. The sandbox **limits** what they can reach; it does not make
everything they do safe. This page says where the boundaries are.

## The sandbox

The agent runs only inside a container, as your own user (not root), and sees:

- the folders you mount: inputs and skills **read-only**, outputs and code **read-write** (it can change or delete
  files there)
- the project's folder: its workspace, environment, chats, and **the agents' sign-ins**
- the network: unrestricted by default, or only its agent's service and your allowlist with
  [network isolation](/guides/network-isolation/)

It does not see the rest of your files, your home folder, or your environment variables. The app keeps API keys out
of the agent's environment.

What remains possible: anything with the mounted data and the network it has. Mount only what the task needs, mount
data read-only, and isolate the network for sensitive data. Every allowed host is a place data could be sent to.

## Who can control a sandbox

A sandbox listens for windows (VS Code, the app) and requires its **token**: 32 random bytes, new each time the
sandbox starts, valid while it runs. The `codeflower://…?token=…` line carries it, so **anyone with the line
controls the agent**.

- Docker and Podman publish the port on `127.0.0.1` only.
- Apptainer (clusters) listens on the node's network, so other users of the cluster network can reach the port. The
  token protects it, but the connection is **not encrypted**: use it inside the cluster's network, keep job logs
  private, and do not expose the port to the internet.
- The app's window is served only to your computer, behind a secret in its address, and refuses other host names.
  It keeps the sandboxes' tokens itself: they never reach the browser.
- `--server` pages are plain HTTP; on shared networks bind to `127.0.0.1` and use `ssh -L`.

VS Code keeps the addresses you connected in its secret storage; the app keeps them in a private file.

## Remote access

[Remote access](/guides/remote-access/) goes through a tunnel server. It is designed so the tunnel can relay but
not read or take over:

- **End-to-end encryption.** Each paired browser has its own key pair (kept in the browser, not extractable); your
  computer has another. Every request, response and chat message between them is encrypted with the Noise protocol
  (`Noise_IK_25519_ChaChaPoly_SHA256`). The tunnel only passes encrypted frames along.
- **Two locks.** Opening a connection needs your tunnel account (GitHub with 2FA, Google, or a passkey), **and** a
  pairing made on your computer. A stolen tunnel login alone gives no access.
- **Fingerprints.** When pairing, compare the key fingerprint the page shows with the one your computer printed. The
  pairing link carries a one-time secret in the part of the URL browsers never send to servers; it expires after 10
  minutes.
- **The page comes from your computer.** After pairing, the app's page itself is loaded from your computer through
  the encrypted channel, not from the tunnel.

What the tunnel's operator **can** see: your account's display name and sign-in identities, your computers' names,
regions, public keys and when they were online, how many sandboxes they run, the IP addresses of browsers, and the
timing and size of traffic. **Not** your pages, chats, files, pairing secrets or device names. With `tunnel.eu_only`
the connection passes only through EU datacenters.

**The trust that remains.** The small bootstrap code a browser runs before it reaches your computer is served by the
tunnel. A compromised tunnel could serve different code there. `codeflower tunnel verify` compares it with hashes
built into the app; [self-hosting](/guides/self-host-tunnel/) removes the third party.

**A paired browser has full use of your chats**, which run code in your sandboxes. Pair only your own devices;
`tunnel.hardened` limits each browser to chosen sandboxes.

## Lifetimes and revocation

| What | Valid | Revoke |
| --- | --- | --- |
| Sandbox token | while the sandbox runs | restart the sandbox |
| App page secret | while the app runs | quit the app |
| Pairing link | 10 minutes, once | — |
| Paired browser | until revoked | `tunnel revoke`, `rotate`, `logout`, or *Unpair*; `tunnel off` stops all at once |
| Computer's tunnel sign-in | until revoked | `tunnel logout`, or revoke it on the tunnel's account page |
| Tunnel session in a browser | 14 days | sign out in that browser |

Revoking a browser closes its open pages within a second.

## Reporting a problem

Report security issues privately, not as public issues, through GitHub's security advisories on the affected
repository, e.g. [the tunnel's](https://github.com/lutrarutra/codeflower-tunnel/security/advisories/new).
