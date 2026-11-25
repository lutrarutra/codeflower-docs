---
title: codeflower-audit
description: "Release notes of codeflower-audit, which checks, scores, seals and verifies paper audits."
sidebar:
  order: 7
---

<!-- The ship skill adds an entry for each release, newest first. -->

## v0.2.0

*2026-11-25*

- Every result that did not reproduce as the paper reports it now says what the paper reports, what the audit found, why they differ and the most likely cause (`finding` in `audit.json`). The report starts with these findings, right under the scorecard, each linking to its evidence; the results that reproduced share one table.
- An audit stays blind to other audits of the same paper until its own outcomes are reviewed with you: lookup records only where they are, and `compare` refuses before that. It keeps the outcomes as they were then, so any change made after reading the others shows as a recorded revision. The report has a section on how this audit compares with the others.

## v0.1.0

*2026-11-25*

- First release: `codeflower-audit` checks, scores, seals and verifies paper audits, for the sandbox and the app (`codeflower audit`).
- A sealed audit keeps the plan the auditor kept in Roots (`provenance/roots.json`), checked by `verify`; `seal --no-roots` leaves it out.
