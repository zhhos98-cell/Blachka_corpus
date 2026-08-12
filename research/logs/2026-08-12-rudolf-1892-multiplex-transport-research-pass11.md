# Rudolf 1892 multiplex transport research pass 11 — full backend + GitHub + web calibration

Date: 12 August 2026

## Purpose

This pass pauses public-interface expansion and asks a narrower research question: what exactly becomes visible if Rudolf Blaschka's 1892 American journey is reconstructed as a transport system rather than primarily as an itinerary?

The answer after a full local-backend, GitHub-register, archival-catalogue and historiographical sweep is stronger than the earlier formulation of a "mobile workshop." The workshop did not move as one unit. Work was repeatedly decomposed into heterogeneous packets — a travelling maker, finished glass models, seeds, bulbs, cacti, dried specimens, alcohol specimens, drawings, books, letters, telegrams, shipping papers and money — which moved under different material and legal regimes, at different speeds, and were only selectively reassembled. Each handoff could change the status, support, authorized handler, documentary identity or even medium of what moved.

The strongest current formulation is therefore:

> **The Blaschka workshop worked at distance by selective decomposition and serial reassembly. Transport was not what happened after representation: transport requirements helped determine the forms in which reference and representation could exist.**

1892 is unusually valuable because finished glass and Rudolf moved west while seeds and other reference material moved east; some herbarium material remained at Harvard; books and instructions continued to move after Rudolf's return; and later glass models made from American references travelled west again. The journey is thus a multiplex counterflow rather than a single outbound-and-return line.

No public UI is changed in this pass. The point is to harden the historical model and isolate the remaining archival tests before adding further object packets to the map.

---

## Corpus and source universe scanned

### Local active backend

- `04_Blaschka_Archive_015-040_MASTER.json` — 3,000 deduplicated page records from the primary correspondence/archive OCR.
- `05A_CrossProject_PostNumbered_Backend_MASTER(1).json` — earlier cross-project / newspaper / consignment layer.
- `05B_Blaschka_Digital_Archive_Literature_Technical_MASTER(1).json` — Harvard/Rakow digital archive, finding aids, technical/procedural texts and literature layer.
- `06_Blaschka_Global_Object_Archive_Provenance_BACKEND_MASTER_2026-08-10_v4_through_49(2).json` — consolidated global object/provenance backend through module 49.
- `Rudolf_Blaschka_America_1892_MASTER.csv` — 39 rows × 27 columns.
- `Rudolf_Blaschka_America_1892_sources.csv` — 23 rows × 18 columns.
- `27244037_10480415860009266(OCR).pdf` / extracted text — Susan M. Rossi-Wilcox, “The Botanical Models (1886–1936),” in *Drawing upon Nature* (2007).
- `Rakow_1000043361_BlaschkaSketchbook.pdf` — 1892 sketchbook surrogate already cross-walked in prior passes.

### GitHub research/source architecture

The entire relevant `sources/`, `research/logs/`, `research/working/`, and `map/rudolf-1892/` branch was cross-checked, especially:

- `sources/forwarder-longitudinal-register.json`
- `sources/ware-transatlantic-logistics-register.json`
- `sources/customs-regulation-register.json`
- `sources/consular-documentation-register.json`
- `sources/packing-feedback-unpacking-register.json`
- `sources/harvard-receiving-skill-register.json`
- `sources/workshop-logistics-document-register.json`
- `sources/dublin-shipping-failure-register.json`
- `sources/moller-hamburg-forwarding-register.json`
- `sources/mobile-intermediary-register.json`
- `sources/trieste-reciprocal-exchange-register.json`
- pass 01–10 logs and the current transport/handoff ledger.

### External web / archival / historiographical calibration

Official or scholarly sources checked in this pass include:

- Harvard HOLLIS finding aid `ecb00006`: https://hollisarchives.lib.harvard.edu/catalog/ecb00006
- Corning Museum of Glass, *Drawing upon Nature*: https://info.cmog.org/publication/drawing-upon-nature-studies-blaschkas-glass-models
- National Archives at Boston, maritime/customs records: https://www.archives.gov/boston/finding-aids/maritime.html
- NARA RG 36 guide: https://www.archives.gov/research/guide-fed-records/groups/036.html
- U.S. Code historical note for transportation in bond: https://uscode.house.gov/view.xhtml?edition=prelim&req=granuleid%3AUSC-prelim-title19-section1552
- Staatsarchiv Bremen / Arcinsys, StAB 7.2010 Norddeutscher Lloyd: https://www.arcinsys.niedersachsen.de/arcinsys/detailAction.action?detailid=b17014
- contemporary postal discussion: *Nature*, 30 November 1893, “The Postal Transmission of Natural History Specimens,” DOI 10.1038/049100b0
- 1892 Postal Union regulations reproduced in New Zealand parliamentary papers: samples of merchandise had to possess no saleable value and be open/easy for inspection
- James A. Secord, “Knowledge in Transit,” *Isis* 95 (2004), 654–672
- Samuel J. M. M. Alberti, “Objects and the Museum,” *Isis* 96 (2005), 559–571
- John McAleer, “‘The troubles of collecting’,” *BJHS* 55 (2022), 81–100
- Jacob Orrje, “The logistics of the Republic of Letters,” *BJHS* (2020)
- “‘Specimens Distributed’,” *Journal of the History of Collections* 32 (2020)
- McAleer's work on moving large/fragile astronomical instruments as a comparative logistics history.

These sources establish a demanding historiographical baseline. “Knowledge circulates,” “objects change status,” “logistics matters,” “customs can damage specimens,” and “intermediaries make circulation possible” are already established propositions. The Blaschka contribution must be more mechanically specific.

---

## Evidence tiers used in this pass

- **A — direct contemporaneous primary**: dated workshop/Harvard correspondence, invoices, receipts, direct procedural records, case marks.
- **B — institutional/official archival or legal evidence**: HOLLIS finding aid, NARA record-group scope, statutory history, official repository description.
- **C — retrospective primary**: Rudolf's later statements about established routes or earlier practice; useful but explicitly retrospective.
- **D — scholarly/derived reconstruction**: Corning scholarship, project registers, secondary histories, contemporary-but-reprinted public reports.
- **E — hypothesis/retrieval target**: plausible causal or institutional linkage requiring an original record before promotion.

This tiering matters because transport chains tempt false continuity. A 1929 statement that a route had been used since 1888 is not an 1888 transaction record; a 1893 freight bill cannot be silently assigned to U.B.346–350; and the existence of NARA customs holdings does not prove that a specific Blaschka customs entry survives.

---

## 1. The original 1892 data model systematically hid transport

A simple but consequential audit of both 1892 CSVs shows that the itinerary dataset contains **zero** occurrences of `Elbe`, `Snow`, `Wales`, `bond`, `freight`, `custom`, `Bremen`, `346`, `Datura`, `Saale`, or `Ehrhorn`. `seed` appears seven times and `box` once. The source CSV repeats the same pattern.

This is not evidence that the source archive lacked transport. The 04 correspondence is full of freight, forwarding, customs, cases, packing, shipping, Snow, Bremen, New York, Boston and repair. The mismatch is architectural: the original research table was built around place/person/fieldwork events, so logistics actors and object handoffs largely fell outside the schema.

This matters for the digital project itself. The new `Person | Objects | Both` distinction is not decorative enrichment. It corrects a prior ontology in which only the traveller had a legible route. The transport turn therefore produces a methodological result as well as a historical one: **a person-first itinerary can make co-temporal object traffic structurally invisible even when the source text preserves it.**

---

## 2. U.B.346–350: a shipment-level microhistory

### 20 January 1892 — dispatch architecture

`BLA-D00016 / 015:16` is the anchor document. Leopold and Rudolf tell Goodale that the next day they will forward by railway freight cases **U.B.346, 347, 348, 349, 350**, containing **60 models of plants and 329 analytical details**. The route is given as Bremen → New York → **“in Bond to Boston.”** The letter also states that finishing this unusually large consignment delayed Rudolf's own departure by several days.

The key point is temporal before it is geographical: the workshop produces a common production bottleneck and then releases two different entities into two different mobility regimes. Finished glass becomes freight; Rudolf becomes a passenger.

### 1–2 February — the same Bremen intermediary, two roles

`BLA-D00652 / 017:5` places Rudolf in Bremen. The office of **Ehrhorn, Emden & Mayer** is next to his hotel and he calls the firm “our agent.” Crucially, the same men are providing his travel documents. Rudolf then moves through the Norddeutscher Lloyd passenger system on the *Saale*.

Longitudinal GitHub evidence shows the Bremen firm again in 1891, 1906, 1922, 1923 and 1929. Its role was broader than “shipping agent”: forwarding, carrier coordination, shipping advice, passenger documentation, insurance/consular interface and route advice all appear in the record. The firm therefore carried **procedural memory** as well as cases. This is one of the clearest examples of how a durable commercial intermediary could coordinate distinct mobility regimes without collapsing them into one.

### 12–13 February — passenger customs versus bonded freight

`BLA-D00676 / 017:30` records Rudolf's personal entry. Officials board near Sandy Hook; a higher official is summoned; Rudolf explains his purpose, signs a declaration and is admitted with his articles free of duty. Ganong meets him after customs and takes him to the New York railway connection for Boston.

This procedure must remain distinct from U.B.346–350. The cases were instructed to enter New York **in bond to Boston**, a separate freight/customs regime. The historical note to 19 U.S.C. §1552 confirms that provisions for transportation in bond without appraisement existed under the Immediate Transportation Act of 10 June 1880 and its amendments. Thus “in Bond to Boston” is not colloquial shorthand for ordinary forwarding; it names a legal architecture in which arrival at one U.S. port and customs destination at another could be separated. The exact New York→Boston carrier/vehicle for the 1892 cases remains unresolved.

`BLA-D00677 / 017:31` then supplies one of the strongest statements in the whole archive: the *Elbe*, carrying the five boxes and having departed many days earlier, reached New York only the same day as Rudolf, the cargo in the morning and Rudolf in the evening. A later passenger-list index gives *Elbe* arrival 12 February and *Saale* 13 February. That one-day discrepancy must remain open until a contemporary vessel/manifest source is isolated. It may reflect different definitions of port arrival, reporting, or a secondary-index error. The project should retain Rudolf's direct wording and separately flag the external chronology conflict.

### 13 February — papers arrive before objects

Goodale's `BLA-D00023–24 / 015:23–24` says Rudolf is already in his laboratory and Ganong got him through New York. Goodale has just received advice that five cases of glass models arrived by the *Elbe* and has **turned the papers over to E. A. Snow**. He expects the new models only toward the end of the following week.

This introduces a distinct documentary packet. The cargo's legal/operational papers change hands before the physical cases reach the museum. The chain is therefore not simply object A→B; **documents can run ahead of, authorize and condition material movement.**

### circa 20 February — the archive catches two opposite flows in one letter

`BLA-D00695 / 017:49` is the single richest transport document for the 1892 project.

Rudolf first tells his father that he has sent roughly **29 species of seeds from the Cambridge Botanic Garden** as a **“sample without value,”** with written signs explaining cultivation and sowing. In the next paragraph he says that **five boxes with models arrived at the museum at noon**.

The boxes were lifted to the third floor by a chairlift/elevator. An unnamed Black porter/houseboy of the Botanical Museum skillfully removed the outer packing. Goodale personally unscrewed a case; a box with *Datura arborea* was taken out; Rudolf explicitly remarks on Goodale's skill and care in unpacking. Further opening had to wait for the customs inspector, who would choose what should be opened for inspection.

This document prevents several weak interpretations:

1. Harvard was not a passive endpoint. It possessed receiving labour, lifting infrastructure and handling skill.
2. Maker knowledge was not the only relevant tacit knowledge. The porter, Goodale, customs inspector and later assistants occupy different operational positions.
3. Arrival did not instantly convert cargo into museum objects. There was a staged receiving process with outer packing removal, preliminary opening, customs authorization, fuller unpacking and subsequent installation.
4. The same dated source records **glass westbound and seeds eastbound**. This is the cleanest counterflow moment on the map.

The phrase “sample without value” deserves a guarded administrative reading. 1892 Postal Union regulations for merchandise samples required that they have no saleable value and be packed for easy inspection. A 1893 *Nature* discussion shows that natural-history specimens had in practice sometimes been mailed internationally under “samples of merchandise,” while the U.S. Post Office regarded that classification as unauthorized. Rudolf's wording is therefore institutionally suggestive, but it is **not yet proof** of the postal category or tariff used for his seed packet. A wrapper, receipt or postal marking is required before that inference can be promoted.

### 23 February — official inspection is a second event, not the first opening

Goodale's `BLA-D00027–28 / 015:27–28` reports Rudolf already gone toward Jamaica. Goodale says Rudolf had enjoyed unpacking a specimen from the last invoice on Saturday, then: “Today we have been inspected!” Snow sent **Capt. Wales of the Custom House**; roughly eight specimens were opened and all were reported in excellent condition. The remaining material was left to wait; Goodale intended to have Ganong or another assistant available when he could not be present.

The correct microchronology therefore contains at least two Cambridge openings:

- preliminary/museum-side opening around 20 February, with Goodale and Rudolf, while further cases await the inspector;
- formal customs inspection on 23 February, with Capt. Wales sent by Snow and a sample of about eight items opened.

These events should never be collapsed into one generic “customs opening.”

---

## 3. The 1892 shipment cannot absorb the June repair story

`BLA-D00081 / 015:81` (10 June) and `BLA-D00085 / 015:85` (15 June) show Rudolf repairing Harvard models on his return to Cambridge. Most were put back in excellent order; two very badly broken examples were to return to Germany. Goodale says those two came in the OCR-corrupt “first air-pollution,” almost certainly “first consignment,” and attributes their damage to the New York custom house. By 15 June Rudolf had made some replacement petals at Harvard using local apparatus.

The earlier project cluster `CONS-1892-01` over-combined U.B.346–350, Rudolf's parallel journey, customs damage and June repair. This pass confirms that the cluster must remain analytically split. The February U.B.346–350 evidence says the samples opened in customs inspection were in excellent condition; the June statement points to an earlier/“first” consignment. Harvard's own finding aid also states that the **first models arrived in 1887 and had been broken in customs**. The June repair event is therefore a powerful example of model repair during the 1892 trip, but it is not secure evidence of damage to U.B.346–350.

A causal hypothesis remains tempting: early customs damage may have helped create the later practice of managed museum-side customs opening. The archive currently supports the sequence, not the causal link. Keep this at E-tier until an instruction or letter explicitly connects the two.

---

## 4. A second major correction: the field corpus was only selectively reassembled in Hosterwitz

Earlier “distributed workshop” language could still imply that Rudolf collected/drew/preserved material abroad and then the reference corpus returned to Hosterwitz for recombination. Harvard's official finding aid changes this substantially. It states that the Harvard University Herbaria holds **more than 300 herbarium specimens collected by Rudolf Blaschka and Harvard-affiliated botanists during the 1892 and 1895 Jamaica/U.S. expeditions, and that these specimens remained at Harvard when Rudolf returned to Germany.**

This means the return chain is not simply:

`field → mobile reference → Hosterwitz → glass`.

It is at least:

`field encounter → multiple derivatives → selective routing`.

Some references travel to Germany; some remain at Harvard; some living material or seeds move separately; drawings travel with or are retained by Rudolf; books can be purchased later and sent; missing bloom becomes a future-supply arrangement. The workshop's reassembly is therefore **partial, serial and distributed across repositories**. A reference set need not be physically reunited in one room to support later model-making.

This is a significant conceptual upgrade. “Reassembly” should no longer imply complete material reunification.

---

## 5. Transportability is a transformation, not a property

Across the 1892 corpus, the problem is repeatedly: how can a living, fragile, time-sensitive or institutionally constrained thing be made movable?

The answers differ by object:

- living plant → colour drawing / microscopic observation / alcohol specimen / herbarium specimen / seed / bulb;
- missed flowering season → named local supplier + future postal relation;
- route uncertainty → telegram to Goodale;
- library reference unavailable for long-term physical removal → purchased replacement copy sent to Hosterwitz;
- finished glass model → temporary transport support + cardboard box + wooden case + packing material;
- money/value → check, invoice, insurance, consular valuation, freight charge;
- shipment authority → advice, invoice, customs paper, bond, broker action.

The later technical text **“METHOD OF PREPARING THE MODELS FOR TRANSPORTATION AND THEIR INSTALLATION”** makes this especially concrete. A completed model is fastened to a firm cardboard plate, put into a strong cardboard box, dependent parts immobilized with crushed tissue paper, inner boxes packed in a wooden box with straw, the whole wrapped in straw and burlap. After arrival and opening in the Museum by the Customhouse Inspector, the models are removed from their cardboard supports and attached to gypsum plaques before display.

This gives a precise material sequence:

`finished model → transport assemblage → inspectable customs object → de-mounted glass component → museum-mounted object`.

The temporary support is not an incidental wrapper. It is an intermediate object state. Customs opening sits directly at the boundary between transit support and museum support.

This is one of the strongest points of differentiation from generic circulation history: **movement requires engineered changes of state and support, and those changes are part of the historical ontology of the model.**

---

## 6. Handoff means temporary authority, not merely custody

The full corpus suggests a more exact definition of “handoff.” At each handoff, ask:

1. What entity is transferred?
2. Under what category is it now recognized?
3. Who acquires the authority to open, classify, redirect, value, inspect, carry or remount it?
4. What material/documentary state change occurs?
5. What information must travel with it for the next operation to be possible?

Examples:

- workshop → railway/forwarder: finished models become numbered freight cases;
- Bremen forwarder → ocean carrier: cases become booked ocean freight with route advice;
- New York customs/bond system: imported models become bonded merchandise in onward transit;
- E. A. Snow / Boston receiving chain: shipping papers become an operational clearance problem;
- customs inspector → museum: authority to open/inspect is exercised at the museum;
- porter / Goodale / Ganong: unpacking labour turns packed units into manipulable museum objects;
- later museum technician → display: transport mounting becomes exhibition mounting;
- Cambridge Botanic Garden → Rudolf → post: seeds become a coded “sample without value” accompanied by cultivation instructions.

The category therefore changes together with the handler. “Blaschka model” is too stable a label to describe the transport chain.

---

## 7. The workshop had more than two clocks

The current page thesis says people, specimens, books and decisions moved on different clocks. Full reconstruction suggests at least four analytically separable 1892 clocks before later packet classes are added:

### production/dispatch clock

20 January notice → 21 January planned rail dispatch of U.B.346–350; finishing the consignment delays Rudolf.

### carrier/passenger clock

Cargo departs earlier on a separate schedule; Rudolf leaves later on the *Saale*; according to Rudolf the *Elbe* cargo and the *Saale* passenger converge at New York on the same day despite different departures.

### clearance/receiving clock

Rudolf passes personal customs and reaches Cambridge; Goodale receives cargo advice and transfers papers to Snow; physical boxes arrive at the museum later; preliminary opening occurs; official customs sample opening follows several days after that.

### information/public clock

The newspaper corpus repeatedly circulates a projected Jamaica → Cambridge → western collecting → Germany itinerary after Rudolf has already completed or altered stages. Public print preserves a lagging planned route rather than a real-time tracker.

Additional clocks appear later: preserved specimens lag Rudolf's own return; books are ordered and sent after he reaches Hosterwitz; future seed/bulb supply remains open after he leaves a locality; American plants only later return to Harvard as finished glass.

The analytical gain is not merely “asynchrony.” Different clocks belong to **different infrastructures** and generate different kinds of evidence.

---

## 8. Durable intermediaries create procedural memory and path dependence

The Ehrhorn, Emden & Mayer register is now central rather than contextual. The firm appears from at least 1891 to 1929, and in 1892 it provides Rudolf's passenger/travel documents as well as participating in the family's freight arrangements. By 1922 Rudolf calls them “our old forwarding agents.”

The 1929 sequence is the decisive longitudinal control. Rudolf states that the established shipment route, under Goodale's arrangements, was Norddeutscher Lloyd to New York and then in bond to Boston. The Bremen forwarder proposed a **cheaper direct steamer to Boston**. Rudolf rejected it because the route change would require new consular paperwork and create delay; he retained the longer familiar route.

This makes route choice historically measurable as **bureaucratic path dependence**. The physically shorter or cheaper route could be administratively inferior because documents, agents, brokerage relations and customs practice had already been configured around another corridor.

The best formulation is not that “paperwork accompanied transport.” **Paperwork helped constitute which transport route was practicable.**

---

## 9. The receiving side accumulated technique

1892 already shows an unnamed Botanical Museum porter/houseboy, Goodale, Snow, Capt. Wales and Ganong inside the receiving chain. Later evidence makes accumulation of museum-side skill explicit. Louis Bierweiler coordinated clearance/receiving and minor repair; his 1931 diary documents a visit to Rudolf in Hosterwitz; in 1932 Rudolf explicitly praised his skill and carefulness in unpacking complicated models.

This changes the tacit-knowledge argument. The system was not “maker knows how to pack, museum receives.” Handling knowledge became distributed and institutionalized on the receiving side. People could cross the workshop/museum boundary, while repeated shipment feedback taught the receiving institution how to manage fragile objects.

The 1930/1932 material also closes a feedback loop:

`workshop support design → transit → customs opening → skilled unpacking/remounting → condition report → revised future packing`.

Transport technique was therefore co-produced across Dresden/Hosterwitz and Cambridge.

---

## 10. Failure cases show that infrastructure redistributes risk and responsibility

The wider Blaschka corpus gives unusually good controls because failures are not all of one type.

### Dublin / Sollas, 1887

A mistake in a shipper's note sent a Dublin consignment to Bristol, producing about two weeks' delay; models 239 and 356 were reported broken; fresh examples were then inserted into a later Haddon consignment. A documentary error thus changes physical route, creates delay/damage and causes replacement material to cross order boundaries.

### NHM London, 1883

The outer package appeared to arrive in good condition while six models inside were damaged; Blaschka suspected unpacking. This is an epistemic warning: the final condition of a case does not identify the damage stage.

### 1929 Harvard

Packing straw/hay helped protect fragile glass but customs/quarantine officials regarded the plant packing material as a potential regulatory problem. Protective infrastructure could therefore reduce mechanical risk while increasing legal/border risk.

### Auckland, 1885

Charles Francis Adams was a travelling preparator/taxidermist, physical carrier of Blaschka material and payment intermediary. “Carrier” is therefore not a stable professional category; movement could be embedded in a person's other museum/commercial work.

### Trieste reciprocal exchange

Living marine animals moved from Trieste toward the Blaschka workshop while glass models moved in the other direction. Dispatch depended on temperature, robust individuals, jars and padded baskets. The 1880 institutional dispute over where the finished models should be sent threatened the quality/continuity of living-animal supply. This is a particularly strong comparator because routing in one direction could alter epistemic resources moving in the other.

Together these cases show that infrastructure protects, classifies, delays, damages, repairs, reroutes and redistributes responsibility. “Successful circulation” is too coarse a historical outcome.

---

## 11. The public newspaper route is itself a transported packet

The 1892 newspaper CSV remains useful after transport reframing, but for a different reason. The syndicated reports often repeat a forward-looking formula — Jamaica, Cambridge, westward travel, collection of typical American flowers, return to Germany — after Rudolf's dated letters show that particular stages have already been completed or altered.

The public itinerary should therefore be modeled as an **information packet with latency**. Its path differs from Rudolf's bodily route and from the cases' route. This strengthens the map's existing distinction between documented route and reported/public route and gives “different clocks” a documentary basis rather than treating newspapers as simple corroboration.

---

## 12. Historiographical calibration: what the article cannot claim as novelty

The network/literature sweep imposes useful discipline.

- Secord already makes movement, translation and transmission central to a history of science as communication.
- Alberti explicitly treats object movement together with shifts in status from manufacture/growth through collecting and museum incorporation.
- McAleer and related natural-history literature directly foreground the practical logistics, embodied skill, costs, customs problems, preservation and safe transport of specimens.
- Work on distributed specimens and museums treats collections as conduits as well as endpoints.
- Orrje shows merchants and commercial infrastructure moving letters, books, scientific objects and money.
- histories of scientific instruments already use fragility, repair and transportation to expose infrastructure and limits.

Therefore avoid novelty claims such as:

- “science depended on circulation”;
- “logistics mattered to collecting”;
- “objects changed meaning/status when moving”;
- “customs could damage scientific things”;
- “commercial intermediaries participated in science”;
- “fragile things required special packing.”

The Blaschka material is stronger at the level of mechanism:

1. **heterogeneous packetization** — one workshop decomposes work into many media and legal categories;
2. **regime switching at handoffs** — the same material becomes freight, bonded merchandise, inspectable object and museum object, with authority redistributed at each change;
3. **engineered intermediate states** — transport support and museum support are materially distinct, with customs opening between them;
4. **selective/partial reassembly** — more than 300 expedition herbarium sheets stayed at Harvard, so the reference corpus never simply reconverged in Hosterwitz;
5. **counterflow and asynchronous synchronization** — maker, finished glass, seeds, specimens, books, decisions and reports move in different directions and sometimes converge by accident;
6. **documentary path dependence** — a cheaper direct route can be rejected because the existing consular/broker/customs chain makes another route administratively easier;
7. **distributed receiving skill** — the museum learns and institutionalizes unpacking/repair rather than merely receiving finished objects;
8. **transport as a condition of representation** — a plant's possible representations are selected partly by what can survive or be legally/practically moved.

This is a sufficiently specific contribution to distinguish the project from a generic “knowledge in transit” or “object biography” article.

---

## 13. Strongest current thesis

Long form:

> **The Blaschka workshop operated across the Atlantic by selectively decomposing scientific-artisanal work into transportable packets. Finished models, living and preserved plant material, drawings, books, instructions, documents, money and people moved through different material and legal regimes and on different clocks. At each handoff, temporary authority over the packet shifted and the packet could change support, documentary identity or medium. Reassembly was serial and partial rather than a return of everything to one workshop. Transport therefore did not merely distribute representations after they were made; it helped determine what forms of reference and representation could be made in the first place.**

Shortest version:

> **Transport was not what happened after representation; transport requirements helped determine the form in which representation could exist.**

A second useful sentence for the 1892 case itself:

> **In 1892 the same workshop released a glassmaker and five cases into separate Atlantic regimes while simultaneously beginning reverse flows of seeds, specimens, drawings and later books.**

---

## 14. Corrections and guards now fixed

### Do not merge

- U.B.346–350 February 1892 shipment **≠** June repair of two badly broken models from the “first consignment.”
- Rudolf's New York passenger/customs declaration **≠** the cases' New York bonded-freight procedure.
- circa 20 February Goodale/Rudolf preliminary opening **≠** 23 February Capt. Wales customs inspection.
- 28 March 1893 Snow bill for “trip cases” **≠** evidence for 1892 U.B.346–350 unless an independent crosswalk is found.
- Rudolf's later “route since 1888” statement **≠** direct proof of every 1888–1892 shipment leg.
- external passenger-list dates for *Elbe*/*Saale* **≠** automatic correction of Rudolf's same-day-arrival statement.
- “sample without value” **≠** proven merchandise-sample postal tariff without the mailing wrapper/receipt.

### Derived-register warning

`PACK-1892-CUSTOMS-OPENING` in `sources/packing-feedback-unpacking-register.json` currently contains over-specific wording: “L.B.1–5” and “without even a scratch.” Direct 1892 evidence supports five boxes/cases, well-preserved appearance, *Datura arborea* as a directly opened example, and about eight specimens later found in excellent condition; it does not presently justify those exact case marks or phrase. Keep this register entry flagged for correction/deprecation before it is used as a citation-bearing public source.

---

## 15. Highest-value archival targets after this pass

1. **Harvard ecb00006, folder of receipts and bills, 1892.** HOLLIS explicitly says this folder exists. This is now the single highest-priority target because it may contain Snow, freight, bond, inspection, cartage, carrier or cost evidence that closes the February shipment chain.
2. **Harvard 1892 correspondence component, Oversize-box 2, Folders 1–5**, plus any digitized financial/receiving components not yet ingested.
3. **NARA Boston RG 36**, especially Boston 1892 imports/entries, bonded movement, customs correspondence, inspector/Capt. Wales, E. A. Snow, Elbe, Harvard/University Museum and five-case identifiers. Boston Customs holdings cover the period and include imports/exports, manifests, entries, accounting and administrative records.
4. **New York customs / vessel-arrival records** for *Elbe* and *Saale* around 12–13 February 1892, to resolve the one-day external-index discrepancy and establish the cargo/passenger arrival sequence on contemporary records.
5. **Staatsarchiv Bremen StAB 7.2010 / surviving NDL material and Hapag-Lloyd-related ship files.** The official finding aid includes passenger and freight shipping material but warns that the archive is only a fragment of the former corporate archive; surviving “Schiffsakten” were largely moved to Hamburg. Search must therefore be targeted and survival-sensitive.
6. **Bremen commercial/address-book evidence for Ehrhorn, Emden & Mayer**, to resolve legal identity, address, principals and continuity.
7. **Boston directories / customs-broker evidence for E. A. Snow**, especially the later address 42 Summer Street, and whether Capt. Wales can be identified in customs staff records.
8. **Image-level rereads of critical OCR**: BLA-D00016, D00695, D00028, D00081, D00140, D00321 and the Snow/Wales bills. Several actor names and technical words remain OCR-sensitive.
9. **Postal evidence for the Cambridge seed packet**: wrapper, receipt or manuscript notation that can test whether “sample without value” was an actual postal classification.
10. **Herbarium specimen-level crosswalk**: identify which 1892/1895 specimens stayed Harvard, which had duplicates, and which reference forms reached Hosterwitz. This is necessary before drawing a single “specimens → Hosterwitz” return line.

---

## 16. Implication for the current map

The public map should remain restrained for now. U.B.346–350 is sufficiently documented to remain the first independent object packet. The next packet should probably be the Cambridge seed mailing because it is documented in the same letter as the arrival of the five cases and therefore creates an immediate visual counterflow.

However, the long-term ontology should no longer be “person route versus one object route.” It should be **person route versus multiplex packets**, with each packet carrying its own:

`entity → state → origin → destination → carrier/medium → handoff actor → regulatory regime → document → date/latency → condition → transformation → evidence tier`.

For packets where the archive supports only origin/destination and not the intermediate carrier, the map should show a guarded connection rather than inventing a route. For herbarium material that stayed at Harvard, no return line should be drawn. For postal seeds, “sample without value” should be displayed as source wording, not yet as a certified tariff category.

The detail panel's current object fields — Object / Handoff / Handler / State change — remain conceptually sound. A later iteration may need two additional fields: **Regime** and **Document**, because the evidence now shows that legal/documentary status is often the mechanism of movement.

---

## Pass conclusion

This sweep changes the scale of the problem. The 1892 story is not one traveller plus cargo in the background. It is a **multiplex transport system** in which scientific-artisanal work is decomposed, transformed and routed through passenger travel, freight forwarding, bonded customs, museum inspection, postal exchange, botanical preservation, books, telegrams and later remanufacture. The most important historical operation is the handoff because it is where place, authority, category and material state can change together.

The project should now proceed shipment- and packet-first. The next research move is not another generic web search; it is retrieval of the Harvard 1892 receipts/bills and targeted customs/forwarding records, followed by a specimen-level herbarium crosswalk. Those three operations can turn the current conceptual model into a near-document-by-document reconstruction of how a glass workshop worked across the Atlantic.