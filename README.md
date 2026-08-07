# Blachka_corpus

Working repository for the Blaschka / microscope-slide backend experiments.

Current pilot:

- `07A_Global_Microscope_Slide_Collections_Survey`: a global survey layer for microscope-slide collection entrances, finding aids, object catalogues, digitisation projects, batch-level collections, and method-only comparators.
- `site_adapters.json`: a versioned registry of institution/site-specific adapters. The pilot is intentionally not a universal crawler.
- The pilot treats single item pages as weak evidence unless they contribute to a collection, person, batch, label, cabinet, register, box, damage, conservation, or circulation question.
- GitHub Actions currently runs validation and dry-run harvesting by default. Manual full mode still fetches public metadata HTML/text only. It does not bulk-download images, bypass logins, or treat `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `donated by`, `lent by`, `held by`, `used by`, `produced by`, or `digitised by` as the same ownership relation.

Core rule: item-level records may be thin, but they must support collection-scale evidence.

Global scope rule: country is now a survey-scope marker rather than a closed UK/US filter. It accepts ISO-like tags such as `UK`, `US`, `DE`, `AU`, `NL`, `FR`, or `GLOBAL`. A `GLOBAL` row is method or infrastructure context, not a physical collection unless the row proves one.

Local commands:

```bash
python scripts/validate_survey.py
python scripts/harvest_catalogue.py --mode dry-run
python scripts/harvest_catalogue.py --mode full --adapter kew_collection_static
python scripts/harvest_catalogue.py --mode full --adapter powerhouse_object_static
python scripts/harvest_catalogue.py --mode full --entry-id UK-WELLCOME-TIMOTHY-LEWIS
```

The output files are intentionally small and auditable:

- `outputs/run_report.md`
- `outputs/harvest_plan.json`
- `outputs/adapter_registry_snapshot.json`
- `data/normalized/collections_seed.jsonl`

First global seed regions currently represented:

- UK: NHM, Kew, OUMNH, SMG, Wellcome, RMS/Quekett.
- US: OAC Hartshorn-Bolles, Smithsonian, Harvard/MCZ, Cornell candidate.
- Australia: Powerhouse, Museums Victoria.
- Continental Europe: Senckenberg/VIRMISCO, Botanische Staatssammlung Muenchen, Naturalis, MNHN Deflandre lead.
- Global method layer: DiSSCo digitisation guide.
