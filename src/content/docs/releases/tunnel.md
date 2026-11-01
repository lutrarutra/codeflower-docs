---
title: Tunnel
description: "Release notes of the remote-access tunnel."
sidebar:
  order: 5
---

The tunnel has no version tags: it is deployed with every change, so its entries are dated. It speaks tunnel
protocol 1.

<!-- The ship skill adds an entry for each release, newest first. -->

## 2026-11-01

- Deleting your account or a computer, approving a computer, and adding or removing a passkey ask for your passkey again (or to sign in again with GitHub or Google). The approval page shows when and from where a computer asked.
- *Sign out everywhere else* on the account page ends the sessions of your other browsers.
- The browser's key can no longer be read out of the browser.
- The page opened through the tunnel shows every computer the browser is paired with. The browser keeps the page's code, so opening it again loads faster, and when a computer cannot be reached, the page links to your other computers.
- The account page shows how many sandboxes each computer runs, and when it was last seen, also for one that went to sleep or lost its network.
