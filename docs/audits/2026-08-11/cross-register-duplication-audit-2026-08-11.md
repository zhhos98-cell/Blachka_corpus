# Cross-register duplication audit · 11 August 2026

This audit compares exact values only across current Source registers and Auction JSON layers. It does not fuzzy-match people, objects, institutions, evidence, or prose, and it does not modify canonical data.

- Input files: **50**.
- IDs reused across more than one file: **0**.
- Exact URLs reused across more than one file: **58**.
- Exact strings ≥120 characters reused across more than one file: **3**.
- Exact JSON objects (≥3 keys) reused across more than one file: **1**.

## Interpretation

- A repeated **ID** is the highest-priority integrity signal because an identifier is expected to identify one evidence unit within its intended namespace. Every cross-file reuse requires review before any merge decision.
- A repeated **URL** is usually a shared source or access route, not duplicated evidence. It is useful for building source crosswalks but is not a reason to delete records.
- Repeated **long prose** may be deliberate guard text, shared source description, or copy-forward drift. Exact repetition is a candidate for documentation-level factoring only when the wording has no record-specific evidentiary function.
- Repeated **objects** are stronger evidence of duplicated structured data, but even byte-equivalent objects can legitimately appear in different analytical registers. Prefer a cross-reference layer over destructive deduplication unless one file is explicitly derived from another.

Machine-readable detail: `../../../schemas/generated/cross-register-duplication-index.json`.
