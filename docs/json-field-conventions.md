# JSON field conventions for new records

Updated: 11 August 2026

These conventions apply prospectively to new or substantially rebuilt public/working JSON layers. They do **not** authorize retroactive renaming of existing evidence-bearing fields. Historical registers preserve the vocabulary in which their research questions were built.

The field-semantic audit found 931 distinct field names across 50 current Source/Auction JSON files. Most variation is harmless historical growth, but several functional roles now have enough naming drift that new files should stop adding synonyms.

## 1. Metadata envelope

Prefer these names consistently:

- `schema_version` — schema/version identifier for the file;
- `generated_date` — ISO date for the current file generation/update;
- `title` — human-readable title;
- `scope` — what the register includes and excludes;
- `purpose` — optional statement of operational purpose where `scope` is insufficient.

Do not introduce new aliases such as `generated`, `updated_date`, `file_title`, or `coverage` when the existing envelope terms are adequate.

## 2. Identity and status

For Source/topic registers, prefer `id` for a local stable record identifier. Preserve `record_id` where it is already canonical, especially the Auction lot table.

Use `status` only when the values are documented locally or are self-evident within that register. When a register defines a controlled local status vocabulary, keep it in `status_vocabulary`. Do not import status labels from another register merely because the wording appears similar.

## 3. Evidence, interpretation, and limits are separate layers

Prefer:

- `evidence` — what the source, record, object, catalogue, or archival description actually supports;
- `research_value` — why that evidence matters for the project;
- `research_observation` — synthesis that belongs to the register as a whole;
- `guard` — a local constraint on inference when no more precise scope is needed.

Use a scoped guard only when the scope itself matters: for example `date_guard`, `blaschka_guard`, `taxonomic_guard`, `source_guard`, or `evidence_guard`. Avoid inventing stylistic synonyms for an existing role. In new files prefer `methodological_guard` over a new `method_guard`, and `evidence_guard` over a vague `important_guard`.

Never collapse `evidence`, `research_value`, and a guard into one prose field. They answer different questions.

## 4. Future work

Use three preferred structures:

- `next_actions` — concrete retrieval, checking, or processing tasks;
- `research_questions` — unresolved historical/analytical questions;
- `archive_targets` — named repositories, collections, series, or files to inspect.

Use `comparative_questions` where a register is explicitly comparative. Avoid adding new variants such as `next_search`, `next_searches`, `next_step`, `next_targets`, or `next_recovery_routes`; existing occurrences remain untouched.

## 5. Locators and source metadata

Prefer:

- `repository` — holding institution;
- `collection` — named fonds/collection/series when available;
- `reference` — shelfmark, box/folder, call number, or other archival reference;
- `locator` — one stable public URL or machine locator;
- `locators` — multiple stable locators;
- `source` / `sources` — bibliographic or documentary source identity where a repository hierarchy is not the right model.

Do not replace a precise archival hierarchy with a URL-only field. A locator is an access route, not a substitute for repository/collection/reference metadata.

## 6. When specificity beats consistency

Do not rename a field simply to satisfy these conventions when the field name carries analytical content. Examples include `finding_aid_evidence`, `secondary_content_claim`, or a scoped guard whose specificity is necessary to distinguish two different constraints in the same record.

A new specialized field is justified when it marks a genuinely different evidence unit or inferential layer. It is not justified merely because a new wording sounds cleaner.

## 7. Maintenance rule

Scripts may use the machine-readable role conventions in `../schemas/field-role-conventions.json` to warn about new naming drift. They must not automatically rewrite existing canonical JSON.

The descriptive inventory of current practice remains `../schemas/generated/field-semantic-role-map.json`.
