# Repository housekeeping audit — 2026-08-17

Status: **CURRENT-TREE HOUSEKEEPING COMPLETE**. The cleanup was intentionally non-destructive with respect to substantive research content. No Git-history rewrite was performed.

## Final disposition

Keep the active website/runtime files and the current research/data architecture: `research/`, `sources/`, `auctions/`, `people/`, `map/`, `scripts/`, `schemas/`, and current documentation. Existing `archive/` material remains deliberate historical preservation rather than a deletion target.

The cleaned flat backend remains under `research_backend/`: `00_MANIFEST.json`, `01_core_01.json` through `01_core_11.json`, `02_extensions_01.json` through `02_extensions_04.json`, `03_BNA.json`, and the public-safe `04_99_other_backend.json`.

## Completed: public-rights remediation

`research_backend/04_99_other_backend.json` was sanitized in the current public tree. Page-level extracted full text was removed from six known modern secondary-literature records while filenames, source identifiers, hashes, page counts and provenance metadata were retained. Archival OCR and nineteenth-century primary-source text were not targeted.

The operation is reproducible and checked by:

- `scripts/sanitize_public_research_backend.py`
- `.github/workflows/sanitize_public_research_backend.yml`

The sanitizer verified all six targeted records and updated `research_backend/00_MANIFEST.json` to the new public bundle hash/size and `all_source_json_preserved=false`. `research_backend/README.md` records the public/private distinction.

Important boundary: sanitizing the current tree does **not** erase the older rights-sensitive blobs from Git history. A repository-history rewrite would be a separate destructive operation and was deliberately not performed during housekeeping.

## Completed: bibliography build-history archive

The 32 historical build scripts `bibliography-pass6.js` through `bibliography-pass37.js` were moved losslessly from `bibliography/legacy/passes/` to:

`archive/bibliography/legacy/passes/`

The existing Git blobs were reused, so file contents and blob SHAs were unchanged. `archive/bibliography/README.md` records the relocation. The old path is absent from the current tree. The live bibliography remains flattened/canonical and does not depend on the archived pass scripts.

## Completed: Rudolf 1892 sequential state archive

A dependency check found no active repository references to the exact superseded state-snapshot filenames. The canonical research handoff instead points to `research/README.md`, canonical data tables and `research/RESEARCH_LOG.md`, while `working/` is explicitly temporary/bounded.

The following earlier snapshots were therefore moved losslessly to:

`archive/research/working/rudolf-1892/state-snapshots/`

- `rudolf-1892-current-state-pass28_2026-08-13.json`
- `rudolf-1892-current-state-pass31_2026-08-13.json`
- `rudolf-1892-current-state-pass34_2026-08-13.json`
- `rudolf-1892-current-state-pass35_2026-08-13.json`

The original Git blobs were reused. The old working paths are absent from the current tree. The active state remains in place, including:

- `research/working/rudolf-1892-current-state-pass36_2026-08-13.json`
- `research/working/rudolf-1892-transport-current-state_2026-08-13.json`
- `research/working/rudolf-preexisting-supply-ecology-pass36_2026-08-13.json`

Research logs and evidence-rich non-state working files were not bulk-moved or deleted.

## Completed: historical pull requests

### PR #1 — microscope-slide survey

Closed without merge as superseded by the dedicated repository `zhhos98-cell/slides_history_microscopy`. Representative migration checks showed identical Git blobs for the sealed 07AR QC document and `scripts/validate_survey.py` between the historical branch and the dedicated slide repository. The slide project was therefore not duplicated into Blachka main.

### PR #2 — Blaschka surviving-collection census

Closed without merge after preservation. The later `research/` architecture on `main` is broader and canonical: `research/README.md` reports 66 audit rows, with 64 secure/secure-recent holders, one fresh-recheck candidate and one historical exclusion, compared with the PR's earlier 41-node validation layer.

All 16 PR-specific changed files were preserved byte-for-byte on `main` under:

`archive/pull-requests/pr-2-blaschka-surviving-census-68-audit/`

The exact original Git blobs from PR head `ba749bd2446a8e1b961288d5f8138583fe9c3bfb` were reused. The archive is dated research provenance and does not override later canonical tables without a fresh source-level reconciliation.

## Final checks

- No open pull requests remain.
- `bibliography/legacy/passes/` is absent from the current tree; its exact historical subtree is present under `archive/bibliography/legacy/passes/`.
- The four superseded Rudolf current-state snapshots are absent from `research/working/` and present under the archive with unchanged blob identities.
- The active Rudolf pass36 state remains available in `research/working/`.
- PR #2's 16 changed files are preserved under `archive/pull-requests/` before closure.
- The public backend current tree contains the sanitized 04/99 bundle and manifest state.
- The bibliography page identifies `bibliography-data.json` as canonical machine-readable data and has no runtime dependency on the archived pass scripts.

## Explicit non-targets retained

Do not bulk-delete `research/logs/`, substantive `research/working/` evidence, `schemas/generated/`, current scripts, source/auction/people registers, map data, or the existing `archive/` tree merely to reduce file count. These remain current evidence, reproducible derived structures, or deliberate historical preservation.

## Remaining optional operation — not part of this cleanup

If the public repository must guarantee that the six modern secondary-literature full-text blobs are unreachable even through old commits, that requires a deliberate Git-history rewrite plus force-push and downstream clone/cache consequences. The current-tree public payload is sanitized; historical object removal is a separate decision and should not be conflated with ordinary repository housekeeping.
