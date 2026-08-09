# Blachka_corpus

Working repository for the Blaschka project and the nineteenth-century microscope-slide backend experiments. This branch, `slide-survey-actions-pilot`, is the frozen microscope-slide survey branch; the Blaschka research log remains separate.

## Nineteenth-century microscope-slide survey — frozen 2026-08-09

- Status: **CLOSED_2026-08-09**.
- Spatial scope: global.
- Historical scope: **1800-1899**.
- Frozen canonical discovery layer: **307 unique collection/subcollection/batch/database entries**.
- Frozen strict nineteenth-century layer: **155 entries**.
- Strict data batches: `07K`-`07AQ`.
- `07AR` is closure/audit metadata only and adds no discovery rows.
- Raw modular ledger immediately before closure canonicalisation: **328 rows**. The difference is explained by 20 superseded alias IDs plus one repeated Hubrecht `entry_id`; Pieter Harting remains in discovery but is `POSSIBLE_19C`, outside the strict 155.

The human-readable closure audit is `data/survey/07AR_CLOSURE_AUDIT_2026-08-09.md`. The machine-readable alias map is `data/survey/07AR_SUPERSEDED_ALIASES_2026-08-09.json`; the final closure manifest is `data/survey/07AR_CLOSURE_MANIFEST_2026-08-09.json`.

New discoveries after this point belong to a later reopening/version. They should not silently extend this frozen directory state.

### Frozen membership is now executable

The closure count is no longer reconstructed from the heuristic `CORE_19C` classifier. `scripts/build_frozen_strict_membership.py` rebuilds the active set directly from the frozen 07K-07AQ strict batches and applies the 07AR closure rules: twenty superseded distinct-ID aliases are removed, the repeated identical Hubrecht entry is collapsed, and the explicit Harting demotion is applied. The script asserts the full closure arithmetic `177 -> 155` and writes `data/normalized/scope_19c_active_ids.json` for downstream use.

`scripts/audit_19c_scope.py` still runs over the complete discovery layer because its diagnostic labels are useful for review. Its heuristic `CORE_19C` count is **diagnostic only** and cannot enlarge the frozen census. `scripts/apply_19c_scope.py` filters against the closure-derived 155 active IDs.

## Method

The survey works backwards from surviving microscope slides, preparations, cases, cabinets, numbered sets and current collection records. The event corpus can work forwards from catalogues, journals, archives, correspondence and institutional documentation. The two sides are intended to cross-check preparation, collection, sale, exchange, gift, lending, transfer, use, exhibition, damage, relabelling, recataloguing and current custody.

Core rule: **current museum custody is not historical ownership**. Preserve source relationships such as `prepared by`, `mounted by`, `collected by`, `assembled by`, `used by`, `sent to`, `received by`, `exchanged by`, `presented to`, `donated by`, `purchased by`, `sold by`, `distributed by`, `lent by`, `transferred from`, `from the collection of`, `belonging to`, `held by`, `catalogued by`, `digitised by`, `inscribed`, `labelled by`, `part of`, and `from the period of` as distinct claims when the source distinguishes them.

Quantity namespaces also remain separate. Slide count, microscopic-preparation count, specimen count, serial-set position, historical inventory state, current surviving total, box/tray/drawer count, cabinet capacity, sample/catalogue/accession number, database row, image count and mixed-period aggregate are not interchangeable. Register-number endpoints are never subtracted to manufacture a slide count, and present totals are never projected backward without source evidence.

## Architecture

- `data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv`: canonical runtime survey input.
- `data/survey/07B_*` onward: modular discovery and strict expansion batches retained as an audit trail.
- `data/survey/07AR_SUPERSEDED_ALIASES_2026-08-09.json`: frozen cross-batch duplicate-alias map.
- `data/survey/scope_19c_overrides.json`: conservative temporal/medium overrides, including the Harting held-out disposition.
- `data/survey/site_adapters.json` plus expansion files: institution/site-specific metadata adapters.
- `data/survey/harvest_families_v1.json` plus expansion files: shared extraction contracts.
- `data/survey/institution_harvest_profiles.json`: institution profiles plus automatic fallback profiles.
- `data/evidence/targeted_deep_4/`: normalised evidence and residual checklist from the final targeted harvest pass. It is an enrichment layer and does not reopen the census.
- `docs/19C_SCOPE_RULES.md`: nineteenth-century scope rule.
- `scripts/prepare_survey_inputs.py`: merges modular inputs, skips 07AR superseded aliases, and collapses repeated `entry_id`s.
- `scripts/build_frozen_strict_membership.py`: reconstructs and count-checks the immutable 155-entry closure membership.
- `scripts/validate_survey.py`: validates schema, adapters, media-risk language and provenance relationships.
- `scripts/audit_19c_scope.py`: diagnostic classification of `CORE_19C`, `POSSIBLE_19C`, `MODERN_COMPARATOR` and `OUT_OF_SCOPE`; it no longer defines frozen membership.
- `scripts/apply_19c_scope.py`: restricts active processing to the closure-derived 155.
- `scripts/build_harvest_batches.py`: groups active entries by harvest family.
- `scripts/harvest_catalogue.py`: dry-run-first collection-page metadata harvester.
- `scripts/build_institution_matrix.py`: converts the strict survey into an institution-level GitHub Actions matrix.
- `scripts/harvest_institution.py`: bounded institution-specific metadata harvester for HTML, JSON/JSON-LD, metadata links and small PDFs.
- `scripts/aggregate_institution_harvest.py`: combines per-institution outputs into one downloadable bundle index.

The crawler layer is deliberately not universal. Known sites get small adapters and recurring systems share harvest families. The workflow does not bulk-download specimen images or bypass login, paywalls, anti-bot systems, robots restrictions or access controls. PDFs larger than the configured small-file threshold are skipped whole rather than stored as corrupt partial files.

## Harvesting status

The automatic reconnaissance/enumeration phase is complete. Four manual workflow runs were used to test, broaden and finally target the high-value public catalogues. Run #4 (`31287016342`) was the final `targeted-deep` pass. Its overall GitHub conclusion is `cancelled` because the Sorbonne job was interrupted, but the combined artifact was produced for seven completed institutions. The useful output is normalised under `data/evidence/targeted_deep_4/`; the partial Sorbonne raw artifact is intentionally ignored.

The final targeted pass yielded particularly strong machine-readable evidence at Copenhagen (510 unique SNM slide identifiers after de-duplicating repeated species rows), Farlow/Cheever (3,363 public position rows with 3,362 unique box/slide tokens, retained as mixed-period position evidence), and the St Andrews Bell-Pettigrew hierarchy. ANSP Symbiota results are retained only as a review pool because a nominal `pre-1900` query demonstrably returned later material, including 1938 Preston Smith records.

No further general-purpose Actions harvesting is recommended for this closed version. Remaining edge cases are listed in `data/evidence/targeted_deep_4/MANUAL_RESIDUALS.md` and should be handled manually when a specific research use justifies the effort.

## Closure notes

The 07AR audit identified twenty distinct-ID rediscoveries of already catalogued physical nodes and one repeated Hubrecht entry with the same ID. These are canonicalised rather than counted twice. Parent-child structures, distributed institutional copies, bounded subseries and separate custody nodes remain distinct where they represent different physical objects or evidentiary relations.

Held-out closure decisions are recorded in the audit. Pieter Harting remains a discovery node but is excluded from strict because the current public UMU source does not close the surviving preparations specifically as glass microscope slides. Walther Flemming is excluded because the relevant Kiel institutional history reports the anatomical preparations lost in 1944. KCL's generic historical slide lead remains unresolved, while the named Dawes cabinets are twentieth-century. Perroncito remains held out because date and histological-preparation claims are not yet closed onto the same surviving objects.

The 07AR freeze itself was recorded before a fresh final CI run existed. Later harvesting runs validate the operational tooling on subsequent heads, but they do not retroactively change the closure manifest's contemporaneous statement or the frozen 307/155 counts.
