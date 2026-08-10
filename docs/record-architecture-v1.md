# Record architecture v1

Status: design contract for the next public-data layer. Last updated: 2026-08-10.

## Principle

Public pages should be citable records rather than transient screen layouts. Objects, institutions, orders and shipments receive stable identifiers, permanent URLs, explicit version metadata, evidence links and research-status fields. UI changes must not change record identity.

## Record types and identifiers

- `OBJ-*` — physical object or documented object group when the source does not support one-object resolution.
- `INST-*` — institution/custodial node.
- `ORD-*` — order, purchase or commission.
- `SHIP-*` — shipment, package, freight case or documented movement event.
- `PERS-*` — person record.
- `SRC-*` — source record.
- `CLM-*` — claim inside a record.

Identifiers are opaque enough to survive title/taxonomy changes. Human-readable slugs may change; IDs do not.

## Permanent URL pattern

Canonical public URLs should resolve by stable ID, for example:

- `/records/object/OBJ-LIV-0093/`
- `/records/institution/INST-UK-LIVERPOOL-WORLD-MUSEUM/`
- `/records/order/ORD-LIVERPOOL-1887/`
- `/records/shipment/SHIP-IB-268/`

A renamed object or institution keeps the same canonical record URL. Case essays may link into these records but do not replace them.

## Required record metadata

Every public record should expose:

- stable `record_id`
- `record_type`
- public title
- canonical URL
- record version, beginning at `1.0`
- `last_updated` in ISO date format
- research status
- preferred citation
- machine-readable representation URL when available
- licence/reuse statement for project-authored metadata

Preferred citation pattern:

> The Blaschka Object Network, “[Record title],” [record ID], version [x.y], updated [YYYY-MM-DD], [canonical URL].

A “Cite this record” control should copy this citation and optionally expose BibTeX/CSL JSON later.

## Versioning

Version numbers refer to evidence/content state, not CSS or design changes.

- patch-like editorial corrections that do not alter a historical claim: keep the same major/minor record version and update `last_updated`.
- new evidence, changed status, new object crosswalk or materially altered claim: increment minor version (`1.0` → `1.1`).
- changed record identity/ontology or a substantial reconstruction: increment major version (`1.x` → `2.0`).

Previous public versions should eventually remain resolvable through a version history or downloadable snapshot.

## Research-status vocabulary

Use a small controlled vocabulary:

- `documented` — the principal chain asserted on the record is directly supported.
- `partially_documented` — major sectors are supported but one or more important joins remain open.
- `open_provenance_question` — the record exists because an object/institution/order is known, but the provenance bridge is unresolved.
- `candidate` — comparative or routing evidence only; never presented as a closed identity.

Each record may additionally carry `open_questions[]`. Absence of a value is not silently translated into “unknown”; the reason for the gap should be expressible where known.

## Claim/evidence model

Conclusions should be decomposed into claims. Each claim receives a stable `CLM-*` identifier and one or more evidence links.

Suggested claim fields:

- `claim_id`
- concise statement
- confidence (`high`, `medium`, `low`, or project-specific controlled values)
- status (`supported`, `qualified`, `conflicted`, `open`)
- `evidence_ids[]`
- optional note explaining inference limits

Suggested source/evidence fields:

- `source_id`
- source type (archive letter, invoice, order book, catalogue, museum CMS, publication, institutional webpage, photograph, conservation record)
- full citation
- repository/institution
- call number or stable identifier
- page/folio/object number where applicable
- stable URL when available
- access/publication date where relevant
- OCR/image/transcription status
- reuse/rights note where relevant

The public evidence drawer may collapse these fields visually, but it must not collapse distinct sources into a generic “references” list.

## Evidence drawer

Each record should have an expandable “Evidence” area. Phase 1 may work at record level. Phase 2 should allow claim-level expansion so a user can see exactly which source supports which statement.

The drawer may point to non-public archival material without reproducing it. A valid evidence row can therefore consist of source type + citation + repository + folio/page + confidence/verification note.

## Corrections and contributed evidence

Public editing is out of scope. A record should instead expose a restrained “Report a correction / Add evidence” action carrying the record ID in the submission.

Desired workflow:

1. submission includes record ID automatically;
2. contributor may provide local accession ID, stable link, citation, label/transcription, image or current-location information;
3. spam filtering/rate limiting occurs before delivery;
4. submissions enter a moderation queue;
5. accepted evidence creates a new source/claim relation and, when material, increments the record version;
6. contributor credit is optional and subject to consent/privacy handling.

Until a low-data form backend is selected, the public site should use email/RSS rather than pretending a moderation system exists.

## Data access

The first public data release should be versioned snapshots rather than an API.

Recommended sequence:

1. CSV for flat public record fields;
2. JSON snapshot retaining relations, claims, evidence and open questions;
3. changelog and checksum;
4. API only after the public schema stabilises.

Every snapshot should state:

- dataset version
- generated date
- record counts by type
- schema version
- licence
- preferred citation
- checksum
- known exclusions

## Licence boundary

Project-authored metadata can have an explicit open-data licence only where the project has the right to license it. Third-party source text, photographs, scans and institutional metadata retain their own rights statements and should not be swept into a blanket project licence.

## Migration order

1. Freeze IDs for the ten public case institutions/orders/shipments and named object anchors.
2. Add `record_id`, version, last-updated and research status to the existing case UI.
3. Create canonical record JSON.
4. Add preferred citation controls.
5. Add record-level evidence drawers from the current source registers.
6. Split the most important conclusions into claim-level evidence mappings.
7. Publish the first CSV/JSON snapshot and Data page.
8. Add moderated correction intake only after the privacy/spam/retention workflow is specified.
