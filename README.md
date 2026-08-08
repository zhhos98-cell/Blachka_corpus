# Blachka_corpus

Working repository for the Blaschka / nineteenth-century microscope-slide backend experiments.

## Current microscope-slide survey

- Spatial scope: global.
- Historical scope: **1800-1899**.
- Discovery layer: **192 collection/subcollection/batch/database entries**.
- Strict post-lock batches `07K`-`07R`: **41 entries with explicit nineteenth-century object, maker, set, use, trade, collection, or provenance evidence**.
- Earlier discovery rows remain auditable and may be classified `CORE_19C`, `POSSIBLE_19C`, `MODERN_COMPARATOR`, or `OUT_OF_SCOPE`.

The survey works backwards from surviving slides, cabinets, boxes, sets and current collection records, while the event corpus works forwards from newspapers, microscopical journals, archives, catalogues and correspondence. The two sides are intended to cross-check ownership/collection attribution, preparation, sale, exchange, gift, lending, transfer, use, exhibition, damage, relabelling and other historical events.

Core rule: current museum custody is not historical ownership. Preserve source relationship phrases such as `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `sold by`, `distributed by`, `donated by`, `lent by`, `held by`, `received by`, `exchanged by`, and `transferred from` as distinct claims.

## Architecture

- `data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv`: canonical survey input at workflow runtime.
- `data/survey/07B_*` onward: modular discovery/strict expansion batches.
- `data/survey/site_adapters.json` + expansions: institution/site-specific metadata adapters.
- `data/survey/harvest_families_v1.json` + expansions: shared extraction contracts.
- `docs/19C_SCOPE_RULES.md`: temporal-scope rule.
- `scripts/prepare_survey_inputs.py`: merge modular survey and adapter inputs.
- `scripts/validate_survey.py`: validate schema, media, provenance relationships and adapter registry.
- `scripts/audit_19c_scope.py`: classify discovery rows by nineteenth-century status.
- `scripts/apply_19c_scope.py`: restrict runtime survey to `CORE_19C` before active harvesting.
- `scripts/build_harvest_batches.py`: group active entries by harvest family.
- `scripts/harvest_catalogue.py`: dry-run-first metadata harvester.

The crawler layer is deliberately not universal. Known sites get small adapters, while recurring systems share harvest families. Metadata comes first; the workflow does not bulk-download specimen images or bypass login, paywalls, anti-bot systems, robots restrictions, or access controls.

Especially strong strict-19C nodes already include commercial maker sets (Wheeler, Cole, Norman, Collins, Enock, Dancer, Pritchard), household/workshop cabinets (Herschel, Elcock), instrument-plus-slide assemblages (Lankester), published diatom replicate sets (Cleve & Möller, Eulenstein, H. L. Smith, Van Heurck & Grunow), the Bailey and Boston Society collections at Farlow, Phoebus's Cinchona slide sets distributed through the Dutch colonial administration, Walker Arnott at RBGE, William Smith material in the NHM Data Portal, and the Grunow accession-book/slide/sample/drawing system in Vienna.

## Harvest families

- `institution_collection_record`: one authoritative collection page; collection-scale metadata only.
- `collection_page_plus_search_portal`: collection page plus a bounded linked item/search portal.
- `specialized_collection_catalogue`: bounded specialist catalogues preserving set/subcollection hierarchy.
- `dataset_api_or_dwca`: official APIs or Darwin Core exports filtered by preparation/material fields.
- `archive_or_finding_aid_record`: finding aids, creators, extent, boxes/drawers, former ownership and container lists.
- `literature_or_project_evidence`: collection papers, programme reports, legal records, institutional stories or curatorial pages used as evidence without pretending they are object registers.
- `item_catalogue_json_or_iiif`: item metadata JSON or IIIF manifests only; no image-tile harvesting.
- `manual_or_endpoint_discovery`: candidates retained until a stable endpoint is found.

Counts from historical reports remain dated states and are not projected into current holdings. Aggregate specimen, species, locality, index-card, pinned-specimen, wet-collection, negative, or legacy-object totals are never silently converted into slide counts.
