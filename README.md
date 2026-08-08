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
- `data/survey/institution_harvest_profiles.json`: high-yield institution profiles plus automatic fallback profiles for every other automatable strict institution.
- `docs/19C_SCOPE_RULES.md`: nineteenth-century scope rule.
- `scripts/prepare_survey_inputs.py`: merges modular inputs, skips 07AR superseded aliases, and collapses repeated `entry_id`s.
- `scripts/validate_survey.py`: validates schema, adapters, media-risk language and provenance relationships.
- `scripts/audit_19c_scope.py`: classifies `CORE_19C`, `POSSIBLE_19C`, `MODERN_COMPARATOR` and `OUT_OF_SCOPE`.
- `scripts/apply_19c_scope.py`: restricts active harvesting to `CORE_19C`.
- `scripts/build_harvest_batches.py`: groups active entries by harvest family.
- `scripts/harvest_catalogue.py`: dry-run-first collection-page metadata harvester.
- `scripts/build_institution_matrix.py`: converts the strict survey into an institution-level GitHub Actions matrix.
- `scripts/harvest_institution.py`: bounded institution-specific metadata harvester for HTML, JSON/JSON-LD, metadata links and PDFs.
- `scripts/aggregate_institution_harvest.py`: combines per-institution outputs into one downloadable bundle index.

The crawler layer is deliberately not universal. Known sites get small adapters and recurring systems share harvest families. The workflow does not bulk-download specimen images or bypass login, paywalls, anti-bot systems, robots restrictions or access controls.

## One-click institution harvest

The manual Actions workflow is `slide-institution-harvest`. It is exposed on the repository default branch only so GitHub can display and dispatch it, but every checkout in the workflow explicitly uses `slide-survey-actions-pilot`; it does not read or modify the Blaschka research data on `main`.

The recommended first run is `bundle=high-yield`, `mode=full`, `depth=balanced`. One dispatch builds the frozen 19C canonical survey, fans out institution jobs in parallel, and then aggregates all institution artifacts into a single `slide-metadata-...` artifact. The current explicit high-yield profiles cover Science Museum Group, Natural History Museum London, Farlow, St Andrews, OHSU, Powerhouse, Whipple, Smithsonian, Museums Victoria, MNHN Paris, RBGE, NHM Vienna, Hunterian/RCS, Cambridge museum systems, Oxford and BGS. Institutions outside these systems are still assigned automatically to structured/API, paginated-catalogue, document/PDF, or seed-page fallback profiles.

Available bundles are `high-yield`, `all-automatable`, `uk-high-yield`, `diatoms`, `medical-histology`, `geology-petrology`, and `single`. `quick`, `balanced`, and `deep` alter only the bounded per-institution page budget. Raw fetched metadata documents, normalized `records.jsonl`, per-institution plans/summaries, errors, hashes, count candidates and identifier candidates are retained in the workflow artifact. Image binaries and IIIF tiles are excluded.

## Closure notes

The 07AR audit identified twenty distinct-ID rediscoveries of already catalogued physical nodes and one repeated Hubrecht entry with the same ID. These are canonicalised rather than counted twice. Parent-child structures, distributed institutional copies, bounded subseries and separate custody nodes remain distinct where they represent different physical objects or evidentiary relations.

Held-out closure decisions are recorded in the audit. Pieter Harting remains a discovery node but is excluded from strict because the current public UMU source does not close the surviving preparations specifically as glass microscope slides. Walther Flemming is excluded because the relevant Kiel institutional history reports the anatomical preparations lost in 1944. KCL's generic historical slide lead remains unresolved, while the named Dawes cabinets are twentieth-century. Perroncito remains held out because date and histological-preparation claims are not yet closed onto the same surviving objects.

This freeze is not itself a CI-pass claim. Final GitHub check-run status is recorded in the closure manifest.
