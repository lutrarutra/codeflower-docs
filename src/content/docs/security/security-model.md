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
  token protects it, and the connection is **encrypted with TLS**: the sandbox makes a new certificate each time it
  starts, and the line carries its fingerprint (`fp=…`). VS Code and the app accept only that certificate, so
  nobody on the network can read the chats or the token, or stand in for the sandbox. Keep job logs private all
  the same: the line in them is the key.
- The app's window is served only to your computer, behind a secret in its address, and refuses other host names.
  The page keeps the secret in the browser's storage for that address and sends it with each request, never as a
  cookie: browsers send cookies to every port of a computer, so a server a sandbox or another user starts on
  `127.0.0.1` would receive them. It keeps the sandboxes' tokens itself.
- `--server` pages are **plain HTTP**, and so is that sandbox's connection for VS Code: they are meant for a TLS
  reverse proxy in front (see [Running a task](/guides/interactive-run-task/#a-browser-directly)), or `ssh -L` with
  `--host 127.0.0.1`. VS Code and the app mark such sandboxes *unencrypted*.

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
  the encrypted channel, not from the tunnel. With [several computers](/guides/remote-access/#several-computers),
  it comes from one of them and reaches the others' sandboxes with the same pairings. This gives the page nothing a
  page from one computer could not already reach: every pairing of a browser is kept in the same place. Pair a
  browser only with computers you trust alike.
- **The browser's key cannot be copied.** It can be used by the pages while they run, but not read out of the
  browser, so it cannot be taken elsewhere.
- **Account changes are confirmed.** Deleting the account or a computer, approving a new computer, adding or removing
  a passkey and signing out everywhere ask for your passkey again (or, without one, to sign in again with GitHub or
  Google), so a page running in the browser cannot do them with your session alone. The approval page shows when
  and from which address a computer asked: approve only a code you just asked for yourself.

What the tunnel's operator **can** see: your account's display name and sign-in identities, your computers' names,
regions, public keys and when they were online, how many sandboxes they run, the IP addresses of browsers, and the
timing and size of traffic. **Not** your pages, chats, files, pairing secrets or device names. With `tunnel.eu_only`
the connection passes only through EU datacenters.

**The trust that remains.** The small bootstrap code a browser runs before it reaches your computer is served by the
tunnel, and it handles the browser's keys. A compromised tunnel could serve different code there, which could leak
them. `codeflower tunnel verify` compares it with hashes
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
| Tunnel session in a browser | 14 days | sign out in that browser, or *Sign out everywhere else* on the account page |

Revoking a browser closes its open pages within a second.

## Reporting a problem

Report security issues privately, not as public issues, through GitHub's security advisories on the affected
repository, e.g. [the tunnel's](https://github.com/lutrarutra/codeflower-tunnel/security/advisories/new).
