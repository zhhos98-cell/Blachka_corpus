# Rudolf 1892 map layout + object-route implementation pass 10 — 12 August 2026

## Purpose

Implement the transport/handoff calibration in the actual GitHub Pages map rather than as a separate illustration. The immediate design decision is to let the map occupy the full horizontal workspace, move the existing evidence/detail panel below it, and add a first independent object route for U.B. 346–350 while preserving the existing Journey / Work / Flows analytical modes.

This log is created before the code edits so the implementation sequence is recoverable. Final details, exact files changed, and any source guards discovered during implementation will be appended or superseded by a follow-up log if needed.

## Planned changes

1. Convert `journey-layout` from a map + right sticky column into a full-width map followed by a horizontal detail/evidence strip.
2. Retain the existing analytical modes `Journey`, `Work`, and `Flows`.
3. Add a second-level route filter: `Person`, `Objects`, `Both`.
4. Introduce U.B. 346–350 as the first independent object packet. It is not to be represented as a generic dashed copy of Rudolf's route; its documented sequence is Hosterwitz → railway freight / Bremen forwarding → ocean freight → New York → in bond to Boston → Harvard receiving / customs-unpacking chain.
5. Keep object handoff nodes source-critical. Where an exact route point or date remains approximate, the public UI must say so rather than silently presenting precision.
6. The existing `Flows` ontology remains available for material, information, decision, reference, and return/queue relations. Object-route work should extend it, not replace it.
7. After the first packet works, later packets such as Cambridge seeds, preserved specimens and reference books can be promoted incrementally.
