# People data

This directory separates the canonical authority dataset from files derived for the public interface.

- `people-data.json` is the canonical machine-readable authority dataset. Research edits belong here and must preserve the project evidence rules.
- `people-ui.json` is a derived public payload containing only fields used by the People interface. It is generated from `people-data.json` and must never be edited as an independent research source.
- `people.js` renders and filters the derived payload.

Regenerate the public payload with:

```bash
python scripts/build-people-ui.py
```

The generator validates the canonical `record_count` against the actual number of records and checks that no records are lost in projection.

Historical `people-part-01.json` through `people-part-17.json` and their stale `people-records.json` manifest were retired from the public directory on 11 August 2026 and preserved unchanged under `archive/data/people-shards-2026-08-10/`. They are provenance artefacts, not current data inputs.
