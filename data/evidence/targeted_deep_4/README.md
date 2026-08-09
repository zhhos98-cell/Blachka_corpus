# Targeted deep harvest: run 4 normalised evidence

Source workflow run: `31287016342` (`slide-institution-harvest` run #4).

This directory preserves the useful structured output from the final targeted harvest pass without reopening the frozen 2026-08-09 survey. The closure boundary remains **307 canonical discovery entries / 155 frozen strict nineteenth-century entries**.

The workflow run itself ended `cancelled` because the Sorbonne job was interrupted, but a combined artifact was produced for the seven completed institutions. Sorbonne's partial raw-page artifact is deliberately excluded from this normalised layer.

## Files

- `manifest.json`: counts, provenance of this normalisation, and scope warnings.
- `copenhagen_desmid_objects.jsonl`: 510 unique SNM slide identifiers. Multiple species labels on one slide remain a list rather than being split into fictitious extra slides.
- `farlow_cheever_B01-B10.jsonl`, `B11-B20.jsonl`, `B26-B30.jsonl`, `B31-B40.jsonl`: public Cheever index rows. These are current indexed positions in a mixed-period collection, not automatic nineteenth-century dates.
- `st_andrews_bell_pettigrew_hierarchy.jsonl`: Bell-Pettigrew child groups recovered from the St Andrews catalogue.
- `ansp_symbiota_review_pool.jsonl`: intentionally review-only Symbiota rows. The site's `pre-1900` query did not reliably enforce an object-date filter.
- `ucl_whipple_mcz_targeted_pages.jsonl`: compact page-level metadata evidence retaining identifiers, relationship candidates and quantity candidates.
- `MANUAL_RESIDUALS.md`: the small remainder worth checking manually if needed.

## Evidence rules

These files preserve source rows and identifiers. They do not convert catalogue numbers, sample numbers, box positions, database rows or collection totals into slide counts. They also do not infer `prepared by` from a collection name, label, user or seller. Any harvested collection not already present in the frozen catalogue remains post-closure evidence only until an explicit later reopening/version.
