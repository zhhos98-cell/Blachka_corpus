# Research state and handoff

This directory is the persistent working state for the Blaschka Object Network. It exists so that a new research conversation can recover the current census, open problems, evidential rules, and next actions directly from GitHub instead of relying on copied chat history.

## Canonical working files

- `census.csv` — one row per candidate or confirmed collection node. This is the global census layer.
- `RESEARCH_LOG.md` — dated research decisions, discoveries, corrections, and handoff notes.
- The deeper provenance/event backend remains separate. A census row can exist even when acquisition, shipment, local identifiers, or conservation history are still unknown.

## The “68” baseline

The number 68 is treated as a historical comparison baseline, not as the project’s target count. The working chronology recovered in August 2026 is:

- 2006 Dublin Blaschka Congress: 63 known collections.
- 2016 Corning census: 174 historical collection nodes, 64 then surviving, 4,747 surviving models.
- 2017 interactive-map methodology: 179 discrete collections, 68 surviving collections.

The 2017 definition includes museums, schools, and individuals. Therefore “68” does not mean 68 museums. The project’s test is a delta audit: reconstruct the 2017 surviving baseline as closely as possible, then identify current surviving nodes that cannot be matched to that baseline.

## Two-layer data model

### 1. Census layer

Admission is deliberately permissive but evidentially strict. A node belongs in the census when a current institutional page, catalogue, recent official exhibition, curator statement, or equivalent reliable source establishes at least one genuine surviving Blaschka invertebrate model. Quantity, original purchaser, dealer, invoice, local ID, and shipment route may remain blank.

The key comparison field is `baseline_2017_match`:

- `yes` — securely matched to the 2017 surviving baseline.
- `no` — securely absent from the reconstructed 2017 baseline and therefore a candidate for a post-2017 addition to the global count.
- `unresolved` — comparison is still open.

A historical purchase or order without current-object proof remains a historical lead, not a surviving census node.

### 2. Deep provenance layer

Selected nodes are upgraded into event-rich microhistories: order, price, dealer/intermediary, manufacture, packing, shipment, receipt, local registration, movement, damage, conservation, rediscovery, and current custody. Failure to reach this threshold must never remove an otherwise secure node from the census.

## Discovery protocol

The preferred search sequence is:

`historical seed → institutional successor → current object proof → 2017 baseline match`

High-yield seeds include Blaschka order/account books, catalogue-mailing lists, Ward/Frič/Damon customer records, old museum reports, schools and university cabinets, and cities that appear only once in workshop records. This is more economical than scanning all major museums by country.

## Session protocol

At the end of a substantial research session:

1. Update `census.csv` for every node whose status changed.
2. Append a dated entry to `RESEARCH_LOG.md` recording the evidence and the decision made from it.
3. Keep uncertainty explicit. Do not silently convert historical counts into current counts, loans into ownership, OCR numbers into prices or object counts, or successor institutions into item-level provenance.
4. In a new conversation, read this directory first and continue from the open actions in the latest log entry.

This workflow is intended to replace manual copying of long ChatGPT conversations into new sessions.
