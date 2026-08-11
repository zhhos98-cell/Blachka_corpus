# Auction canonical-sync audit · 11 August 2026

This is a read-only comparison between Auction supporting JSON layers and canonical `auction-data.json`. It checks explicit record references and declared `canonical_fields_to_update`; it does not apply changes.

- Canonical auction records: **11**.
- Explicit canonical/reoffer references checked: **10**.
- Unresolved references: **0**.
- Declared update blocks: **1**.
- Update fields already applied: **1**.
- Update fields still pending because canonical is empty: **3**.
- Update fields requiring review because canonical has a different non-null value: **0**.

## Declared canonical updates

- `auction-catalogue-recoveries.json:recoveries[0]` — **pending**
  - `AUC-2015-GRISEBACH-SERPULA-343.auction_title` — pending; current=null; declared="ORANGERIE. Selected Objects"
  - `AUC-2015-GRISEBACH-SERPULA-343.lot` — pending; current=null; declared="483"
  - `AUC-2015-GRISEBACH-SERPULA-343.primary_lot_page` — pending; current=null; declared="https://www.invaluable.com/auction-lot/leopold-and-rudolph-blaschka-model-of-a-serpulida-483-c-a084c25853"
  - `AUC-2015-GRISEBACH-SERPULA-343.needs_primary_lot_page` — already_applied; current=true; declared=true

A `pending` result means the supporting layer contains a proposed value while the canonical field is currently null/missing. A `conflict_or_review` result means both layers contain non-null values that differ; neither is automatically preferred.

Machine-readable detail: `../schemas/generated/auction-canonical-sync-audit.json`.
