# Data layers and mutation rules

This project separates research evidence from public projections and historical artefacts. The purpose is to make repository cleanup possible without silently changing the historical argument.

## 1. Canonical research data

Canonical files carry evidence-bearing values used by repeated research work. Examples include:

- `research/data/` census and baseline tables;
- `people/people-data.json`;
- current evidence registers under `sources/` and `auctions/`;
- durable working records explicitly promoted into a canonical role.

Canonical data may be reformatted only when the transformation is value-preserving and reviewable. Changes to claims, evidence status, identifiers, archival references, dates, quotations, guards, locators, inferred joins or uncertainty language are research edits, not housekeeping.

Do not use repository cleanup as a reason to reconcile conflicting evidence silently. Preserve the conflict or open status until a source closes it.

## 2. Derived public data

Derived files are projections or generated representations of canonical data used by the interface. They may remove fields that the interface does not need, reorder records for display, create indexes, or normalize serialization when the canonical values remain unchanged.

Requirements:

- the canonical source must be named;
- generation should be reproducible by a checked-in script when practical;
- the generated file must not become a second independent research source;
- record loss must be detectable;
- a derived file may never feed corrections back into its canonical source automatically.

Current examples:

- canonical: `people/people-data.json`
- derived: `people/people-ui.json`
- generator: `scripts/build-people-ui.py`
- structural manifests: `sources/register-manifest.json` and `auctions/data-manifest.json`
- manifest generator: `scripts/build-structural-manifests.py`
- generated schema/vocabulary audits: `schemas/generated/`

## 3. Historical / retired data

Historical generated files, superseded supplements, old shards, and retired implementation layers belong under `archive/` when they still have provenance or rollback value.

- `archive/data/` — historical data projections, supplements and retired manifests;
- `archive/ui/` — superseded frontend layers;
- `archive/workflows/` — retired executable workflow definitions stored as passive history.

Archiving should preserve the original blob unchanged whenever possible. If a historical inconsistency is discovered, document it in an adjacent README rather than rewriting the historical file to look clean.

## 4. Safe cleanup operations

Housekeeping may:

- move confirmed unreferenced files into `archive/`;
- consolidate a supplement into its declared canonical parent while preserving record values;
- add schema metadata, counts, vocabulary definitions, manifests, documentation and validators;
- generate smaller public payloads from canonical files;
- normalize filenames for new non-public tooling when stable URLs are unaffected;
- remove obsolete runtime references after verifying that the replacement is active.

Housekeeping must not:

- change a confidence/evidence status because another label looks more consistent;
- merge two people, objects, institutions or transactions because their names look similar;
- normalize OCR or historical spellings without an evidence record;
- replace a source URL, archival shelfmark or identifier merely for stylistic consistency;
- turn candidate/comparator material into direct evidence;
- mutate `research/data/` as a side effect of frontend work.

## 5. Validation

For the normal derived-data maintenance cycle, run:

```bash
python scripts/build-people-ui.py
python scripts/build-structural-manifests.py
python scripts/validate-derived-data.py
```

For structural review rather than routine regeneration, the read-only audit tools are:

```bash
python scripts/audit-json-schema-families.py
python scripts/audit-status-vocabularies.py
```

The audit outputs belong under `schemas/generated/` and dated notes under `docs/`; they do not feed changes back into canonical research data.

A clean run confirms structural relationships; it does not validate historical truth. Evidence review remains a separate research operation.
