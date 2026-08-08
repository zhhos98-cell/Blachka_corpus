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
- **University of Vienna:** current Zoological Collection page states 156 Blaschka glass models. Earlier institutional layers report 145 or 146; these count changes require reconciliation. Forty-five was an exhibition subset, not the collection total.
- **Naturhistorisches Museum Wien:** retained as a display venue / possible separate-holder lead only. Current Hall 22 wording explicitly identifies the displayed Blaschka group as belonging to the University of Vienna. A separate NHMW-owned Blaschka collection must be proven from accession/ownership evidence before it is counted as another holder.
- **Derby Museum and Art Gallery:** 1 surviving model in Corning's 2016 census; likely part of the old baseline but row-level 2017 matching remains to be done.

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

For future sessions, read `research/README.md`, `research/current_holders.csv`, `research/census.csv`, and the latest section of this log first. After any substantial research run, update the CSV and append a new dated log section. This is the canonical handoff mechanism and replaces manual transcript copying.

## 2026-08-09 — Holder-first census reset

The global census workflow is now explicitly inverted. First establish **who currently/recently holds at least one Blaschka invertebrate model**. Then audit those holder rows one by one for count, ownership, 2017-map membership, acquisition route, identifiers, conservation and current location.

A new `research/current_holders.csv` was seeded with 53 named current or recent holder candidates already supported by the active backend, numbered modules 41–49, or direct institutional evidence. This is a working seed set rather than a claim that 53 rows are all independent 2026 collections. Each row still requires duplicate/ownership and freshness audit.

The first row-by-row audit immediately exposed why this order is safer. The earlier Vienna working note had treated 45 models displayed at Naturhistorisches Museum Wien as if 45 were the University of Vienna holding total, and had also provisionally treated NHMW as a separate 50-object owner. Current University of Vienna sources instead state **156 models** in the Zoological Collection, while institutional exhibition wording identifies the NHMW Hall 22 Blaschka display as a subset of the University collection. The NHMW separate-owner claim is therefore suspended pending accession evidence. This is exactly the kind of double-count / display-versus-ownership error the holder-first audit is designed to catch.

Next unit of work: scan `current_holders.csv` sequentially. For each row, establish (1) legal/institutional holder, (2) current or latest defensible count, (3) source date and authority, (4) whether a display/loan creates no new ownership node, and (5) whether the institution can be matched to the 2017 Corning surviving baseline. Only after this normalization should the project calculate a present total or claim `>68`.

## 2026-08-09 — Holder expansion pass: 53 → 59 rows

A fresh web/institutional pass expanded `research/current_holders.csv` from 53 to 59 rows and upgraded several existing rows. Five newly added rows are already strong current/recent holders: **University of Aberdeen Zoology Museum**, **Manchester Museum**, **Carnegie Museum of Natural History**, **Corning Museum of Glass**, and **Museum of Science Boston**. A sixth new row, **Senckenberg Museum für Naturkunde Görlitz**, is retained as a candidate pending a fresher institutional check: a 2016 Senckenberg exhibition proves at least one Blaschka glass sea cucumber in its custody, while secondary collection lists report three surviving models.

The Boston node is especially useful. The UW–Madison Blaschka project records a May 2025 visit specifically to the Museum of Science's Blaschka invertebrate collection, providing unusually fresh current-holder proof. This connects to the historic Boston Society of Natural History acquisition commonly reported as 131 models, but the present surviving count remains open and will be reconstructed independently.

Corning also required a census correction. It is not merely an archive/conservation venue for Cornell. CMoG's own object database includes complete Blaschka invertebrate models acquired with remaining studio materials in 1993, including accession **93.3.291** (sea-anemone model) and **93.3.293** (jellyfish model). Cornell-owned objects in Corning custody remain a separate ownership layer and must not be folded into the CMoG-owned count.

Several existing counts were strengthened from current institutional pages: Canterbury Museum **129**; National Museum of Ireland **500+ pieces**; Trinity College Dublin **50+**; University of Galway **100+**; Australian Museum **nearly 100**; Natural History Museum London **180+**; University of Vienna **156**. UCL's current page also confirms that Science Museum deaccessions between 1925 and 1927 were distributed to UCL **and six other institutions**, creating a high-value route for discovering or reconciling additional British holder nodes.

The most important count correction of this pass is Utrecht. Current Utrecht University material now states that the University Museum holds a scientific collection of **128 Blaschkas** and that a restored Blaschka cabinet reopened in 2023. Earlier project/literature layers describing 100 ordered and about 80 surviving therefore cannot simply be merged; the 128/100/~80 discrepancy is now explicitly treated as a count-ontology/provenance problem rather than silently resolved.

Current working position: 59 rows in `current_holders.csv`; 58 are secure or secure-recent holder rows and Görlitz remains a recheck candidate. This is still not a claim of 58 independent members of the 2017/2026 census because ownership splits, historical transfers, and baseline matching remain to be audited. The immediate discovery priority is to keep expanding secure holder rows while simultaneously identifying the seven destinations of the 1925–27 Science Museum dispersal and reconstructing the 2017 68-row baseline.

## 2026-08-09 — Holder expansion pass: 59 → 63 rows

The holder census gained four rows that matter methodologically as much as numerically. **Liceo Giovanni Prati, Trento** and **Liceo Ugo Foscolo, Pavia** are now secure-recent school holders because a peer-reviewed 2025 conservation/archaeometry study physically examined five models from the two schools: two from Trento and three from Pavia. The Trento paper also connects the school to the Blaschka sales register entry for the Deutsche Gymnasium in Trient, probably September 1886; the exact school total remains unspecified. Pavia has at least three physical models and a dealer-label clue, `A. Dall’Eco, Firenze`, probably Alberto De Eccher.

A second Florence node was added and kept distinct from the Fondazione Scienza e Tecnica. The **University of Florence Natural History Museum / La Specola zoological collection** purchased Blaschka crystal models in 1873 and the last exact published surviving corpus is six: two Cnidaria, one Ctenophore, two Mollusca and one Echinoderm. A 2017 3D-documentation project independently confirms a small physical lot from the University zoological section alongside, but separate from, the FST collection.

The fourth addition is an internal-backend false negative rather than a new web discovery: **Imperial College London**. The active provenance backend already records an incomplete Royal College of Science / Science and Art Department Blaschka set as surviving in Imperial custody, with an item-level inventory made by Henri Reiling and copied to the Rakow Research Library in 2007. The census table had simply failed to surface it. This shows that global holder expansion must include systematic extraction from the deep backend, not only external discovery.

Count normalization also continued. Canterbury Museum's newer official collection page states **133 extant models**, superseding an older museum story that said 129. Cardiff's approximately 200 has been demoted from current-count status: 200 is a historical acquisition total, 138 direct plus 62 from the Science Museum in 1927, and the exact present survival count remains open. Glasgow's complete current total is also left blank because the deep module proves multiple surviving taxa but does not establish that a previously used figure of 66 is the collection total. Liège is now represented as **49 models in the permanent exhibition** from the original order of 77; the current official page does not by itself prove that 49 is the complete surviving corpus.

Working position after this pass: `current_holders.csv` has **63 rows**. Görlitz remains the one explicit recheck candidate; all other newly added rows have physical/current-recent support. This 63-row file is still a holder working set, not a declaration that 62 or 63 rows map one-to-one onto the 2017 surviving census. The next expansion should run two routes in parallel: extract every `current_collection_confirmed` institution already embedded in 06/41–49 that has not yet been surfaced, and continue searching low-visibility school/university collections of the Trento/Pavia type. The Science Museum 1925–1927 audit remains controlled: UCL and Cardiff are confirmed among seven institutional recipients, while five recipient institutions remain unnamed and must not be guessed from generic current Blaschka holdings.

## 2026-08-09 — Holder audit correction and survival-to-successor expansion

This pass produced a useful reversal: the working file did **not** simply grow. A row-by-row Irish audit exposed a false positive in the current-holder layer. **Queen's University Belfast** has strong historical transaction evidence, including a Blaschka shipment to Professor Robert Oliver Cunningham and an estimated original order of roughly 45–55 models, but the 2008 Dublin-Congress review states that no QUB or Ulster Museum Blaschka models were known to survive, and the comprehensive 2016 Irish-institutions study likewise says the collection could not be located and apparently no longer existed. `HOLD-0008` is therefore retained only as an explicit audit tombstone with `historical_not_current` status and is excluded from the active present-holder tally. A matching historical row was added to `census.csv` so the transaction is preserved without inflating survival.

This changes the working arithmetic. `current_holders.csv` still contains **63 audit rows**, but these now resolve into **61 secure/secure-recent current-holder rows**, **1 active recheck candidate** at Senckenberg Görlitz, and **1 historical exclusion** at Queen's Belfast. This is a more defensible state than the previous 62-secure + 1-candidate interpretation and should be used in all subsequent threshold reasoning.

Two count corrections went in the opposite direction. **Trinity College Dublin** should not be represented simply as `50+`: the 2016 Irish audit found four additional models, bringing the Zoology Department subset to 55, and stated an institutional total of **82 models across TCD collections**. Trinity's current Zoological Museum page, updated in 2024, independently confirms that the Blaschka collection remains part of the museum, though it does not print a fresh exact institutional total. The census therefore uses 82 as the last exact published whole-TCD count and preserves the current `over fifty` wording as a narrower museum/subset layer. **Musée Zoologique de Strasbourg** is now normalized to **58**: the renovated museum's current route explicitly says all 58 marine-organism Blaschka models are presented in their entirety. The older 53-survivor layer is superseded for present-count purposes.

The strongest new expansion lead is **Lund University**. Chris Meechan's 1995 survey explicitly identified surviving early, pre-1870 Blaschka sea anemones in Lund, Sweden. Current Lund sources show that the Biological Museum is the direct merger-successor of the former Botanical and Zoological Museums and still maintains a very large nineteenth-century zoological collection, with substantial portions still undigitized. No modern item-specific Blaschka record has yet surfaced, so Lund is not promoted into `current_holders.csv`; it enters `census.csv` as a high-priority `historical_survival_lead`. The decisive next move is an MZLU internal inventory/curator check for Blaschka, glass sea-anemone models, old teaching-model numbers, or the relevant early set.

Three additional successor/transfer leads were added without promotion. The historical **University of Illinois Museum of Natural History** explicitly held a large series of Blaschka glass invertebrate models; after that museum closed around 2001, more than 420,000 artifacts moved to the Spurlock Museum, creating a concrete successor-transfer route whose Blaschka subset still needs item-level proof. **Queensland Museum** remains an 1885 proposal/catalogue-contact lead with no demonstrated receipt. **University of Sydney** remains an 1884 educational-loan branch from the Australian Museum whose later return and ownership status are unresolved. These are exactly the cases where successor continuity is useful for discovery but insufficient for current-holder admission.

A second discovery route now deserves explicit priority: reconstruct older surveys as row sets rather than treating their aggregate numbers as background. Meechan's mid-1990s work already points to surviving British/Irish institutions plus Lund; the difference between those named historical survey populations, the 2016/2017 Corning baseline, and the present holder file may expose both forgotten survivors and collections lost after earlier surveys. The next high-yield work is therefore: (1) close Lund through MZLU; (2) reconstruct the 1994–1995 Meechan British/Irish holder list institution by institution; (3) continue the five-unknown-recipient Science Museum 1925–1927 dispersal audit; and (4) search Spurlock's transferred natural-history registrations for Blaschka before treating Illinois as lost or surviving.
