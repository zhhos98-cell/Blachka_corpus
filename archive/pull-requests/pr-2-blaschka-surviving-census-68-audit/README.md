# Archived PR #2 — Blaschka surviving-census 68 audit

Archived on 2026-08-17 during repository housekeeping.

Source pull request: `#2 Audit the 2017 Blaschka surviving-collection baseline`, branch `blaschka-surviving-census-68-audit`, head commit `ba749bd2446a8e1b961288d5f8138583fe9c3bfb`.

The PR contributed 16 new census/audit files. All 16 changed files are preserved below using their exact original Git blob objects; no content was rewritten. This archive is historical research provenance, not the canonical current census.

Reason for supersession: the later `research/` architecture on `main` has a broader holder-first canonical state (`research/data/current_holders.csv`, `research/data/census.csv`, `research/README.md`, `research/RESEARCH_LOG.md`) and explicitly treats the 2017 figure of 68 as a comparison baseline rather than a target. The current handoff reports 66 audit rows, including 64 secure/secure-recent holders, one fresh-recheck candidate and one historical exclusion. The earlier PR's 41-node validation remains useful as dated evidence and audit history, so it is preserved rather than merged wholesale.

Preserved changed-file set:
- 11 files under `data/blaschka_census/`
- 5 files under `logs/`

No claim from this archived PR should override later canonical tables without a fresh source-level reconciliation.
