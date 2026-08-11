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

Derived files are projections or generated representations of canonical data used by the interface or maintenance tooling. They may remove fields that the interface does not need, reorder records for display, create indexes or graphs, or normalize serialization when the canonical values remain unchanged.

Requirements:

- the canonical source must be named;
- generation should be reproducible by a checked-in script when practical;
- the generated file must not become a second independent research source;
- record loss or structural drift must be detectable where practical;
- a derived file may never feed corrections back into its canonical source automatically.

Current examples:

- canonical: `people/people-data.json`
- derived: `people/people-ui.json`
- generator: `scripts/build-people-ui.py`
- structural manifests: `sources/register-manifest.json` and `auctions/data-manifest.json`
- manifest generator: `scripts/build-structural-manifests.py`
- exact-locator authority graph: `schemas/generated/source-authority-crosswalk.json`
- authority generator: `scripts/build-source-authority-crosswalk.py`
- generated structural/semantic audits: `schemas/generated/`

The source-authority graph is derived navigation/maintenance structure. Its `SRCNODE-*` identifiers do not replace source citations, archival references, object identifiers, or evidence records. See `source-authority-model.md`.

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
- generate exact-locator crosswalks or other derived indexes that preserve links back to their originating records;
- normalize filenames for new non-public tooling when stable URLs are unaffected;
- remove obsolete runtime references after verifying that the replacement is active;
- audit naming drift, duplicate locators, repeated prose or exact structured duplication without treating the audit itself as authority to merge records;
- compare support-layer references or declared canonical updates against canonical files without applying the proposed changes.

Housekeeping must not:

- change a confidence/evidence status because another label looks more consistent;
- merge two people, objects, institutions or transactions because their names look similar;
- normalize OCR or historical spellings without an evidence record;
- replace a source URL, archival shelfmark or identifier merely for stylistic consistency;
- merge URLs, hosts, redirects, language variants or repository pages because they appear to belong to the same institution;
- turn candidate/comparator material into direct evidence;
- mutate `research/data/` as a side effect of frontend work;
- retroactively rename evidence-bearing fields merely to satisfy later naming conventions;
- write a support-layer `canonical_fields_to_update` proposal back into canonical data without separate source/evidence review.

Prospective field naming for new or substantially rebuilt JSON is documented in `json-field-conventions.md` and machine-readable in `../schemas/field-role-conventions.json`. Existing fields remain authoritative in their original registers unless a separate reviewed research migration is explicitly undertaken.

## 5. Validation

For the normal derived-data maintenance cycle, run:

```bash
python scripts/build-people-ui.py
python scripts/build-structural-manifests.py
python scripts/build-source-authority-crosswalk.py
python scripts/validate-derived-data.py
```

For structural review rather than routine regeneration, the read-only audit tools are:

```bash
python scripts/audit-json-schema-families.py
python scripts/audit-status-vocabularies.py
python scripts/audit-field-semantics.py
python scripts/audit-cross-register-duplication.py
python scripts/audit-auction-canonical-sync.py
```

Generated structural outputs belong under `schemas/generated/` and dated diagnostic notes under `docs/audits/YYYY-MM-DD/`; they do not feed changes back into canonical research data.

A clean run confirms structural relationships; it does not validate historical truth. Evidence review remains a separate research operation.
