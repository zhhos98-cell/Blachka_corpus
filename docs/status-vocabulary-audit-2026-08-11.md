# Status vocabulary audit · 11 August 2026

This audit compares only explicit top-level `status_vocabulary` objects in the current Source registers. It does not rename, merge, or reinterpret any status.

- Files with explicit `status_vocabulary`: **4**.
- Unique status labels: **25**.
- Labels repeated across more than one vocabulary: **0**.
- Repeated labels with byte-equivalent JSON definitions: **0**.
- Repeated labels whose definitions differ: **0**.

## Vocabularies

- `commercial-intermediary-register.json` — 4 terms; vocabulary hash `1547e4136927`.
- `dealer-archive-register.json` — 6 terms; vocabulary hash `5102387a1580`.
- `digitized-correspondence-register.json` — 4 terms; vocabulary hash `27acf9d08b3c`.
- `global-archive-register.json` — 11 terms; vocabulary hash `35aa4029b342`.

## Repeated terms

No status label occurs in more than one explicit vocabulary. A global vocabulary would therefore add abstraction without eliminating duplication.

## Decision rule

A shared vocabulary file should contain only terms whose definitions are identical across current uses, or terms later linked by an explicit reviewed mapping. Conflicting or file-specific statuses remain local. The inventory is evidence about schema reuse, not authority to edit the underlying registers.

Machine-readable detail: `../schemas/status-vocabulary-inventory.json`.
