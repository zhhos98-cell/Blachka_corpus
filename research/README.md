# Research state and handoff

This directory is the persistent working state for the Blaschka Object Network. It exists so that a new research conversation can recover the current census, open problems, evidential rules, and next actions directly from GitHub instead of relying on copied chat history.

## Canonical working files

- `current_holders.csv` — holder-first working census: one row per current/recent holder plus explicit audit tombstones or recheck candidates.
- `census.csv` — broader candidate/historical lead layer, including successor routes that do not yet meet current-holder proof.
- `survey_baselines.csv` — aggregate historical survey chronology (Meechan, Reiling, Dublin, Corning).
- `country_baseline_2016.csv` — country-level reconstruction of Corning's 64 current collections in 2016, compared with the project's current secure holder distribution.
- `RESEARCH_LOG.md` — dated research decisions, discoveries, corrections, and handoff notes.
- `logs/` — detailed session-specific research notes when a run is too granular for the main log.
- The deeper provenance/event backend remains separate. A census row can exist even when acquisition, shipment, local identifiers, or conservation history are still unknown.

## Current working position — 2026-08-09

`current_holders.csv` contains **66 audit rows**:

- **64 secure / secure-recent current-holder rows**;
- **1 needs-fresh-recheck candidate**: Senckenberg Museum für Naturkunde Görlitz;
- **1 historical exclusion / audit tombstone**: Queen's University Belfast.

The active present-holder working tally is therefore **64**, before Görlitz is resolved. This is not yet comparable one-to-one with the 2017 figure of 68 because row-level baseline matching, collection splits, transfers and ownership normalization remain incomplete.

The 2016 Corning country chart has now been converted into a gap audit. Its dark-blue `Current` bars sum exactly to the published total of 64. The most useful deficits against the present project table are: **Slovenia 2 missing**, **Germany 3 missing against secure rows (2 if Görlitz is confirmed)**, **Australia 1 missing**, **Switzerland 1 missing**, and **United Kingdom 1 missing**. These deficits are now higher-priority discovery targets than a fresh country-by-country global sweep. Surpluses in Austria, Italy, New Zealand and the United States are comparison leads only; they do not prove post-2016 additions until individual nodes are matched.

## The “68” baseline

The number 68 is treated as a historical comparison baseline, not as the project’s target count. The working chronology recovered in August 2026 is:

- 1994 Chris Meechan: 23 institutions in the bounded Great Britain/Ireland survey population.
- 1995 Chris Meechan: around 1,400 surviving models in 19 British/Irish institutions, with a further roughly 600 reported lost or destroyed.
- 2000 Henri Reiling: about 45 surviving collections and more than 3,500 models worldwide.
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

The current gap-audit variant is:

`2016 country deficit → recover old holder identity → successor/current proof → 2017 match`

Immediate order of attack: Slovenia → Germany/Görlitz → missing Australian holder → second Swiss holder → twentieth UK holder → identify the four net additions between Corning 2016 (64) and 2017 (68).

## Session protocol

At the end of a substantial research session:

1. Update `current_holders.csv` and/or `census.csv` for every node whose status changed.
2. Update aggregate baselines when a historical survey is reconstructed more precisely.
3. Append a dated entry to `RESEARCH_LOG.md` or add a detailed file in `logs/` recording the evidence and the decision made from it.
4. Keep uncertainty explicit. Do not silently convert historical counts into current counts, loans into ownership, OCR numbers into prices or object counts, or successor institutions into item-level provenance.
5. In a new conversation, read this file, `current_holders.csv`, `country_baseline_2016.csv`, `census.csv`, and the latest log entry first.

This workflow replaces manual copying of long ChatGPT conversations into new sessions.