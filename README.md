# Blachka_corpus

Working repository for the Blaschka / microscope-slide backend experiments.

Current pilot:

- `07A_UK_US_Microscope_Slide_Collections_Survey`: a UK/US survey layer for microscope-slide collection entrances, finding aids, object catalogues, and batch-level collection evidence.
- `site_adapters.json`: a versioned registry of institution/site-specific adapters. The pilot is intentionally not a universal crawler.
- The pilot treats single item pages as weak evidence unless they contribute to a collection, person, batch, label, cabinet, or circulation question.
- GitHub Actions currently runs validation and dry-run harvesting by default. Manual full mode still fetches metadata HTML/text only. It does not bulk-download images, bypass logins, or treat `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `donated by`, or `lent by` as the same ownership relation.

Core rule: item-level records may be thin, but they must support collection-scale evidence.

Local commands:

```bash
python scripts/validate_survey.py
python scripts/harvest_catalogue.py --mode dry-run
python scripts/harvest_catalogue.py --mode full --adapter oac_finding_aid
python scripts/harvest_catalogue.py --mode full --entry-id UK-WELLCOME-TIMOTHY-LEWIS
```

The output files are intentionally small and auditable:

- `outputs/run_report.md`
- `outputs/harvest_plan.json`
- `outputs/adapter_registry_snapshot.json`
- `data/normalized/collections_seed.jsonl`
