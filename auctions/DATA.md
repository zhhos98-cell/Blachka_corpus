# Auction structured-data contract

The Auction provenance directory intentionally keeps one canonical lot table and several separate research-support layers.

- `auction-data.json` is the canonical public-auction lot table. Evidence-bearing lot facts, result conflicts, buyer/custody status, qualified attributions and rejected false positives are maintained there under the admission rules in `README.md`.
- Other JSON files in this directory are supporting research layers: crosslinks, routers, catalogue recoveries, bounded audits, negative controls and worklists. They are not automatically flattened into canonical lot facts.
- `data-manifest.json` is a generated structural inventory. It records file roles at this coarse canonical/supporting level, byte sizes, SHA-256 checksums, top-level keys and top-level list counts. It contains no new historical claims.

Regenerate the manifest with:

```bash
python scripts/build-auction-manifest.py
```

Run `python scripts/validate-derived-data.py` to verify the manifest against current files and to check for duplicate canonical `record_id` values. The validator is read-only and does not reconcile conflicting auction evidence.
