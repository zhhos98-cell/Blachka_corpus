# Blaschka research log

## 2026-08-09 — Persistent census layer established

### Why this log exists

The project had begun to outgrow individual ChatGPT conversations. The research state is now persisted in GitHub so that future sessions can resume from repository files rather than copied chat transcripts. The repository is treated as the handoff layer; the large JSON provenance backend remains the evidence-rich layer.

### “68” synchronized

The August 2026 working conclusion is that **68 is a historical baseline for delta auditing, not a target number**.

Recovered chronology:

- 2006 Dublin Blaschka Congress: 63 known collections.
- 2016 Corning work: 174 historical collection nodes, 64 then surviving, 4,747 surviving models.
- 2017 interactive-map methodology: 179 discrete collections, 68 surviving collections.
- The 2017 category includes museums, schools, and individuals.

Therefore a present count above 68 can only be demonstrated by reconstructing the 2017 surviving baseline and then proving at least one present surviving collection outside that baseline. A newly found institution cannot automatically be counted as “69”, because it may already have been one of Corning's 68.

### Data architecture decision

The project now separates two layers.

**Census layer:** one row per confirmed or candidate collection node. Current object proof is enough for admission; acquisition route, price, shipment, local IDs, conservation, and exact count may remain open.

**Deep provenance layer:** event-rich institutional/object modules requiring stronger closure across acquisition, circulation, registration, damage/conservation, and current custody.

This corrects a recurrent false-negative problem in the old workflow: institutions such as Leipzig can be secure surviving census nodes even when their purchase chain is still incomplete.

### Confirmed/current nodes brought into the census working file

- **Stiftung Friedenstein Gotha:** 28 acquired in 1881/82; 7 stated to survive.
- **Universalmuseum Joanneum, Graz:** 19 acquired in 1868; recent 2024–2026 exhibition evidence confirms surviving Blaschka material; exact present count open.
- **Universität Leipzig Zoological Collection:** 6 current models; Clava squamata highlighted by the university in 2025.
- **Naturhistorisches Museum Wien:** 50 Blaschka objects owned by NHMW; current/recent display evidence.
- **University of Vienna:** distinct ownership node; 45 models on long-term loan at NHMW. Do not merge ownership with NHMW and do not create a third node from the loan location.
- **Derby Museum and Art Gallery:** 1 surviving model in Corning's 2016 census; likely an old-baseline node, but row-level 2017 matching remains to be done.

Utrecht and UW–Madison are retained as known project leads that need clean census normalization.

### Historical leads produced by the ledger-first method

The most productive discovery method is now workshop ledger/order-book seed → successor institution → current object proof.

**Jeypore / Jaipur:** 1886 correspondence independently closes a direct order of glass invertebrate models for Jeypore Museum. Workshop ledgers in 1886 and 1887 reinforce the transaction. The likely institutional successor is Albert Hall Museum. Current survival remains open. Priority source: Hendley's 1895 Jeypore Museum handbook.

**Warsaw:** 1885 catalogue contact with Prof. Ganin plus a 1887 Universität Warschaw transaction create a strong historical chain into the university zoological/zootomical teaching cabinet. Current University of Warsaw collections preserve historical didactic material, but no Blaschka object has yet been identified. Priority source: the 1907 history/catalogue of the zootomical laboratory and cabinet.

Additional ledger leads entered into `census.csv`: Reform-Realschule Hamburg; an OCR-uncertain Realgymnasium/“Johannesburg” row; Gymnasium Leitmeritz; a second Leipzig school node; König-Wilhelms-Gymnasium Breslau; M. Wason of Burton-on-Trent; Indian Museum Calcutta; Prof. König in Münster; Royal College Dublin.

### Methodological rule retained

Do not globally scan museums country by country. The highest-yield route is:

`historical seed → successor → current proof → 2017 baseline comparison`

The classes most likely to be missed by broad web discovery are schools, university cabinets, technical institutes, older municipal collections, and private/individual collections. The workshop's own commercial records restore precisely these low-visibility nodes to the search space.

### Immediate next actions

1. Recover or reconstruct the 2017 68-row surviving baseline and begin filling `baseline_2017_match` in `census.csv`.
2. Search Hendley's 1895 Jeypore Museum handbook for the Blaschka order, model list, display, or later inventory bridge.
3. Search the 1907 Warsaw zootomical laboratory/cabinet publication for glass models, Blaschka, supplier, teaching-model lists, or inventory terms.
4. Normalize Utrecht and UW–Madison into explicit census rows with current object proof.
5. Continue extracting 1884–1892 workshop customers into a historical-customer registry only when this increases search efficiency; do not mistake the historical registry for the surviving census.
6. Promote Gotha and Graz into deep modules only after the census baseline comparison is stable enough that deep-case work will not displace the global audit.

### Repository handoff rule

For future sessions, read `research/README.md`, `research/census.csv`, and the latest section of this log first. After any substantial research run, update the CSV and append a new dated log section. This is the canonical handoff mechanism and replaces manual transcript copying.
