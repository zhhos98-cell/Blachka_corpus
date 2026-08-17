# Repository housekeeping audit — 2026-08-17

Status: audit only. No destructive cleanup is authorized by this document.

## Current production / research layers — keep

Keep the active website/runtime files and the current research/data architecture: `research/`, `sources/`, `auctions/`, `people/`, `map/`, `scripts/`, `schemas/`, and the current documentation. Existing `archive/` material is already retired correctly and should remain archival rather than be deleted.

The cleaned flat backend now lives under `research_backend/`. Keep `00_MANIFEST.json`, `01_core_01.json` through `01_core_11.json`, `02_extensions_01.json` through `02_extensions_04.json`, and `03_BNA.json` as the current uploaded corpus layer.

## Public-rights remediation — highest priority

`research_backend/04_99_other_backend.json` requires sanitisation before it should be treated as a durable public-data file. The bundle mixes archival/provenance material with extracted text from modern secondary literature. Do not merely move it elsewhere inside this public repository: build a public-safe replacement that retains citation metadata, identifiers, hashes, rights notes, and openly redistributable/archive-derived material while removing modern full-text bodies. Preserve the full research copy outside the public repository.

## Non-destructive archive candidates

### Bibliography build history

`bibliography/legacy/passes/` is historical build provenance. The live bibliography is flattened into `bibliography/bibliography-data.json` and the current page loads the current bibliography scripts rather than the legacy pass files. Move the legacy pass subtree byte-for-byte to an `archive/bibliography/` location; do not delete its contents.

### Rudolf 1892 state snapshots

The older sequential state snapshots in `research/working/` are candidates for archival relocation after a final dependency check:

- `rudolf-1892-current-state-pass28_2026-08-13.json`
- `rudolf-1892-current-state-pass31_2026-08-13.json`
- `rudolf-1892-current-state-pass34_2026-08-13.json`
- `rudolf-1892-current-state-pass35_2026-08-13.json`

Keep the latest numeric state (`pass36`) and `rudolf-1892-transport-current-state_2026-08-13.json` in place until their downstream references have been checked. Research logs and evidence-rich working files are not cleanup targets.

## Draft pull requests

### PR #1 — microscope-slide survey

Do not merge into `Blachka_corpus`. The microscope-slide project now has its own repository, `zhhos98-cell/slides_history_microscopy`. The separate repository contains the sealed 07AR survey/QC layer, survey scripts, workflows, scope rules, evidence and subsequent synthesis work. Representative migration checks show identical Git blobs for `data/survey/07AR_FINAL_QC_2026-08-09.md` and `scripts/validate_survey.py` between the old PR branch and the dedicated slide repository.

Recommended disposition: close PR #1 as superseded after one final path-level preservation check; retain the branch/history as Git history rather than merging it into the Blaschka main branch.

### PR #2 — Blaschka surviving-collection census

Relevant to this repository, but stale relative to the later `research/` state. Do not merge or close blindly. First compare its 41-node validation/delta files against `research/data/current_holders.csv`, `research/data/census.csv`, and `research/RESEARCH_LOG.md`. If unique evidence remains, preserve it under the current research/archive architecture; then close the PR as superseded. If it still contains the authoritative census layer, selectively promote that layer rather than merging the whole historical branch.

## Explicit non-targets

Do not bulk-delete `research/logs/`, substantive `research/working/` evidence, `schemas/generated/`, current scripts, source/auction/people registers, map data, or the existing `archive/` tree merely to reduce file count. The repository's documented data-layer model treats those as current evidence, reproducible derived structures, or deliberate historical preservation.

## Proposed execution order

1. Build and validate a public-safe replacement for `research_backend/04_99_other_backend.json`.
2. Move `bibliography/legacy/` into `archive/` losslessly and verify the bibliography page still resolves only current assets.
3. Dependency-check and archive the older Rudolf sequential state snapshots.
4. Finish preservation check for PR #1, then close it as superseded.
5. Reconcile PR #2 against the later research state, preserve any unique evidence, then close or selectively promote it.
6. Run a final tree/runtime check before declaring housekeeping complete.
