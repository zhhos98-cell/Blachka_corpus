# Blachka_corpus

Working repository for the Blaschka / microscope-slide backend experiments.

Current slide-survey architecture:

- `07A_Global_Microscope_Slide_Collections_Survey.csv`: canonical global survey seed.
- `07B_*`, `07C_*`, `07D_*`, `07E_*`, `07F_*`, and future numbered-letter batches: modular survey expansions. `scripts/prepare_survey_inputs.py` merges them at workflow runtime without rewriting the committed 07A source file.
- `site_adapters.json` plus `site_adapters_expansion_*.json`: institution/site-specific adapter registry. The project is intentionally not a universal crawler.
- `harvest_families_v1.json` plus `harvest_families_expansion_*.json`: batch-level extraction contracts and modular adapter-to-family assignments.
- `scripts/build_harvest_batches.py`: assigns merged survey entries to harvest families and produces a ranked batch plan; it now loads modular family-assignment expansions.
- `docs/SLIDE_SURVEY_PRIORITY_RULES.md`: scoring and promotion logic for collection-scale evidence.

Current survey size: 100 collection, subcollection, archive, project, database, or method/infrastructure entries across 07A-07F. The unit is deliberately not always an institution: distinct slide collections, named personal collections, historical batches, collection codes, item databases, and materially different preparation series remain separate nodes when the sources distinguish them.

Core rule: item-level records may be thin, but they must support collection-scale evidence. Collection/person identity, count, relationship language, cabinets/boxes/labels, registers, damage/conservation, and circulation hooks are more important than simply accumulating generic slide pages.

Global scope rule: country is a survey-scope marker rather than a closed UK/US filter. A `GLOBAL` row is normally method or infrastructure context rather than a physical collection.

Relationship guard: `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `collected by`, `donated by`, `lent by`, `held by`, `used by`, `produced by`, `received by`, and `digitised by` remain separate source claims. They are never collapsed into a generic ownership field.

Media guard: microscope glass slides remain distinct from lantern slides, photographic slides, glass plate negatives, 35mm slides, plastic slides, and petrographic thin sections. Petrographic thin sections are included where they form an explicit microscope collection, but remain separately typed.

Current harvest families:

- `institution_collection_record`: one authoritative collection page; collection-scale metadata only.
- `collection_page_plus_search_portal`: collection page plus a bounded linked item/search portal.
- `specialized_collection_catalogue`: bounded specialist catalogues preserving set/subcollection hierarchy.
- `dataset_api_or_dwca`: official APIs or Darwin Core exports filtered by preparation/material fields.
- `archive_or_finding_aid_record`: finding aids, creators, extent, boxes/drawers, former ownership and container lists.
- `literature_or_project_evidence`: collection papers, programme reports, legal records, institutional stories or curatorial pages used as evidence without pretending they are object registers.
- `item_catalogue_json_or_iiif`: item metadata JSON or IIIF manifests only; no image-tile harvesting.
- `manual_or_endpoint_discovery`: candidates retained until a stable endpoint is found.

Local commands:

```bash
python scripts/prepare_survey_inputs.py
python scripts/validate_survey.py
python scripts/build_harvest_batches.py
python scripts/harvest_catalogue.py --mode dry-run
python scripts/harvest_catalogue.py --mode full --adapter kew_collection_static
python scripts/harvest_catalogue.py --mode full --entry-id UK-WELLCOME-TIMOTHY-LEWIS
```

Workflow audit outputs include:

- `outputs/prepare_survey_inputs.json`
- `outputs/run_report.md`
- `outputs/coverage_summary.json`
- `outputs/priority_queue.md`
- `outputs/harvest_batches.json`
- `outputs/harvest_batches.md`
- `outputs/harvest_plan.json`
- `outputs/adapter_registry_snapshot.json`
- `data/normalized/collections_seed.jsonl`

Survey coverage now includes the UK, US, Canada, Australia, New Zealand, continental Europe, India, Japan, Singapore, Taiwan, South Africa, Argentina, Chile, Brazil, and global method/infrastructure nodes.

Recent expansion waves add: large Smithsonian entomology and palynology collections; Harvard MCZ InSliDE; NHM palaeontology and botanical subcollections; Indian BSIP and Zoological Survey slide repositories; Argentine BA Pal and Museo de La Plata microscopic-preparation series; Chilean SGOpm project-to-collection preparations; Taiwan NMNS current palynology statistics and the 6,274-slide Lien Rih-ching donation; Tokyo NMNS microalgae and zoological permanent-slide collections; named historical St Andrews and Manchester collections; and explicit petrographic thin-section collections at Stromness and USP LitoLab.

Counts from historical reports remain dated states and are not projected into current holdings. Aggregate specimen, species, locality, index-card, pinned-specimen, wet-collection, negative, or legacy-object totals are never silently converted into slide counts.
