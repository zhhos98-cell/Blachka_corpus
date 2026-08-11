# JSON schema-family audit · 11 August 2026

This is a structural audit of the current public Sources and Auctions JSON layers. It does not rewrite research records. Exact structural similarity is treated as a candidate for shared tooling, not as proof that two evidence fields mean the same thing.

### Sources registers

- Files: **34**; exact top-level key/type families: **31**; multi-file families: **3**; singleton families: **28**.
- Universal top-level fields: `generated_date`, `schema_version`, `scope`, `title`.
- Near-universal fields (≥75% but <100%): none.

Exact families with more than one file:

- `41614d916e41` · 2 files: `cornell-ward-retrieval-register.json`, `transaction-gap-register.json`
- `c713c0c9affb` · 2 files: `dealer-correspondence-reservoir-register.json`, `dealer-sales-print-register.json`
- `e683d9fe30ed` · 2 files: `dealer-epistemic-exchange-register.json`, `dealer-upstream-supply-register.json`

Most frequent top-level fields:

- `generated_date` — 34/34 (100%); string:34.
- `schema_version` — 34/34 (100%); string:34.
- `scope` — 34/34 (100%); string:34.
- `title` — 34/34 (100%); string:34.
- `research_observation` — 17/34 (50%); string:17.
- `methodological_guard` — 12/34 (35%); string:12.
- `records` — 10/34 (29%); array:10.
- `evidence_guard` — 8/34 (24%); string:8.
- `events` — 5/34 (15%); array:5.
- `network_observation` — 4/34 (12%); string:4.
- `next_retrieval` — 4/34 (12%); array:4.
- `status_vocabulary` — 4/34 (12%); object:4.
- `actor` — 3/34 (9%); object:1, string:2.
- `archive_targets` — 3/34 (9%); array:3.
- `cases` — 3/34 (9%); array:3.

Repeated list-field names occurring in at least two files: **10**. The profile records their item types and object-key shapes; repeated names are not treated as semantic equivalence.

### Auction JSON layers

- Files: **16**; exact top-level key/type families: **16**; multi-file families: **0**; singleton families: **16**.
- Universal top-level fields: `generated_date`, `schema_version`, `title`.
- Near-universal fields (≥75% but <100%): `purpose` 15/16.

Exact families with more than one file:

- None. Every file has a distinct top-level key/type signature.

Most frequent top-level fields:

- `generated_date` — 16/16 (100%); string:16.
- `schema_version` — 16/16 (100%); string:16.
- `title` — 16/16 (100%); string:16.
- `purpose` — 15/16 (94%); string:15.
- `next_actions` — 7/16 (44%); array:7.
- `canonical_auction_count_effect` — 4/16 (25%); integer:4.
- `coverage_guard` — 2/16 (12%); string:2.
- `records` — 2/16 (12%); array:2.
- `sources` — 2/16 (12%); array:2.
- `access_and_cost_strategy` — 1/16 (6%); object:1.
- `access_strategy` — 1/16 (6%); array:1.
- `archive_route` — 1/16 (6%); array:1.
- `archive_targets` — 1/16 (6%); array:1.
- `auction_evidence` — 1/16 (6%); array:1.
- `auction_record` — 1/16 (6%); object:1.

Repeated list-field names occurring in at least two files: **3**. The profile records their item types and object-key shapes; repeated names are not treated as semantic equivalence.

## Interpretation

1. Do not flatten the Sources registers into one generic table merely because they share envelope fields. Topic registers encode different research questions, guards and evidence units.
2. A shared metadata envelope is safe only for fields that are demonstrably structural (for example schema/version/title/date metadata) and should remain permissive about topic-specific fields.
3. Repeated list names such as `records`, `cases`, `sources`, `next_targets` or similar names require item-level shape and semantic review before `$ref` reuse.
4. Status vocabularies should be extracted only where definitions are identical or explicitly mapped. Similar labels are not to be normalized by spelling alone.
5. The next safe step is to define a minimal non-evidentiary envelope schema plus optional vocabulary registries, while leaving every current data file untouched.

Machine-readable detail: `../schemas/generated/schema-family-profile.json`.
