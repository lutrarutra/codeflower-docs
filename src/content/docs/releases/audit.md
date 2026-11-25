---
title: codeflower-audit
description: "Release notes of codeflower-audit, which checks, scores, seals and verifies paper audits."
sidebar:
  order: 7
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.1.0

*2026-11-25*

- First release: `codeflower-audit` checks, scores, seals and verifies paper audits, for the sandbox and the app (`codeflower audit`).
- A sealed audit keeps the plan the auditor kept in Roots (`provenance/roots.json`), checked by `verify`; `seal --no-roots` leaves it out.
