# Viscardi–Reynaud packaging calibration — 13 August 2026

## Trigger

This pass records the implications of the 10 August 2026 email exchange with Paolo Viscardi (National Museum of Ireland) and Emmanuel Reynaud (UCD) for the project’s shipment/packing work.

Viscardi described the Irish Blaschka work as still ongoing, noted that Liverpool’s collection had suffered after arrival through wartime loss and later storage conditions, and said the National Museum of Ireland collection has recently been moved in its entirety across Dublin into bespoke storage and is undergoing conservation for eventual redisplay. He is preparing a paper on that move and conservation work.

Reynaud responded specifically to the shipment question. He said their database contains a long list of packaging elements charged to customers as additional shipment costs. He also flagged a measurement problem: the Blaschkas used local measures, with the Dresden foot differing from the British and Frankfurt feet. His brief technical description named cardboard bases, wire, cork elements, boxes of different sizes, and coarse or fine wood-shaving fill depending on the model. He and Viscardi offered a joint video call.

The email claims are treated here as curator/researcher testimony and as leads for source-level verification. They are not silently upgraded to archival facts until the underlying records or database fields are inspected.

## 1. Existing overlap is real but bounded

The overlap with the Irish project is strongest at the level of orders, invoices, object lists, price/value, and packing charges.

The project backend already contains Doyle, Callaghan and Reynaud, “Blaschka invertebrate models in Irish institutions,” *Journal of the History of Collections* 29.3 (2017), 439–450. Its methods section states that the two located invoices, National Museum of Ireland 14 March 1882 and UCD 13 June 1885, contain scientific names, Ward catalogue numbers, price of each model, and a breakdown of the order’s overall cost “including packaging, transport, boxes etc.” The authors converted archival documents into Word/Excel for analysis. This establishes that shipment-cost components were already part of the Irish team’s data architecture, even though the published article did not turn them into a full transport history.

Backend anchors:

- `05B_Blaschka_Digital_Archive_Literature_Technical_MASTER.json` → embedded `02_Blaschka_models_Irish_institutions_2016.pdf` / JHC 2017 article.
- Ireland network source `JHC-IRELAND-2017`.
- Ireland network priority target: UCD 1885 invoice image and full supplementary transcription, specifically because it contains model-level price, packing, transport, commission, and specially commissioned teaching models.

The current project has moved further along the event side. Its unit is no longer “invoice contains packing” but the complete shipment chain:

`workshop → temporary support/packing → case → forwarder → carrier → customs/bond/quarantine → broker/receiver → opening/unpacking → repair/remounting → condition feedback`

This distinction should structure the call. Their likely strength is database-level packing/order granularity; ours is event reconstruction across handoffs, failures, regulation, receiving skill, and feedback.

## 2. Liverpool is the cleanest immediate cross-check

The Liverpool 1887 node is already strong enough to use as a concrete database test rather than a general discussion topic.

Current project reconstruction:

- 11 October 1887: Liverpool models are an active workshop order; manufacture is about to begin.
- 23 November 1887: **247 Marks** is explicitly the value of the Liverpool models alone.
- Same account layer: roughly **50 additional Marks** are requested/estimated toward packing.
- December 1887: one freight case **I.B. 268** contains the models for Liverpool Museum.
- First forwarding point: **M. O. W. Möller, Hamburg**.
- Liverpool recipient line names Higgins, contextually likely Rev. Henry H. Higgins, with OCR guard retained.
- Enclosed invoice whole amount is OCR-read as **268 Marks**.

The accounting problem remains deliberately unresolved. `268 − 247 = 21`, but the earlier packing estimate is approximately 50 Marks. The project must therefore not infer that 21 Marks was the final packing charge. The Damon-side running account also contains remittances and credits relating to other orders.

This makes Liverpool a high-value question for Reynaud’s database:

> Does the database contain the Liverpool shipment or an equivalent Damon/workshop entry, and can its packaging fields explain the relationship between 247 Marks, the ~50-Mark packing estimate, and the later 268-Mark whole-amount reading?

If yes, the case can become a three-way crosswalk:

`workshop correspondence/account → Reynaud database / packing components → surviving World Museum Liverpool collection`

Existing deep-module reference: `world_museum_liverpool_1887_blaschka`, case I.B. 268.

## 3. Dublin supplies the strongest failure-and-recovery comparator

The workshop OCR contains a nearly complete Dublin failure chain that is analytically different from the Irish published collection reconstructions.

A June 1887 workshop letter reports a very large case for Alfred Cort Haddon at the Royal College of Science, Dublin:

- one very large case;
- case mark OCR `L.D. 262` requiring image verification;
- 500 Mark insurance;
- 495-Mark invoice;
- Hamburg forwarding name OCR `M.Miller`, unresolved and not silently normalized to Möller.

The same letter reports the preceding W. J. Sollas / Trinity College Dublin shipment. A mistake in the shipper’s note caused the consignment to be landed at **Bristol**. It arrived roughly two weeks late; models **239 and 356** were broken, probably as a consequence of the transport sequence. Fresh examples were then included in Haddon’s subsequent consignment.

Operational chain:

`shipper’s note error → wrong port → delay → breakage → replacement → consolidation into another customer’s shipment`

This is a particularly useful call topic because Reynaud’s database may recover what the order contained, how it was boxed/charged, or how the replacement was represented in the order data, while the workshop letter reconstructs what happened after dispatch.

## 4. Harvard provides a mature packing–unpacking control

The project’s Harvard transport work already provides the longitudinal mechanism against which Reynaud’s packaging typology can be tested.

### 1929

The workshop account separates:

- four outer cases;
- twenty-seven framed inner boxes;
- packing materials including canvas and straw;
- packing wages;
- transport to the Dresden railway;
- consular paperwork.

The same shipment shows the protection/regulation conflict: straw/hay protected the glass but became a plant-quarantine/customs problem at the U.S. border.

### 1930 method

The procedural source “Method of preparing the models for Transportation” describes a complete transport-state sequence:

1. secure each model to a firm cardboard plate;
2. place it in a strong cardboard box;
3. immobilise dependent parts with crushed tissue paper;
4. place those boxes inside a pinewood outer box with straw between them;
5. wrap the outer box in an elastic bale of straw and burlap;
6. open at the Museum under customs authority;
7. remove models from temporary supports;
8. remount them onto plaster plaques;
9. label and install them for display.

### 1930–1932 feedback

Oakes Ames feeds receiving knowledge back to the workshop: tissue support is recommended because transit vibration persists; hay/straw is also flagged as a regulatory risk. In 1932 Harvard reports three cases and twenty-one models with only one small broken piece. Rudolf replies that some pieces were complicated to unpack and explicitly credits Louis Bierweiler’s skill and carefulness.

Current project formulation:

> Packing functioned as a distributed instruction and feedback system. Successful arrival depended on workshop design, border procedure, receiving labour, unpacking skill, repair/remounting, and feedback into later shipments.

This remains distinct from a static list of packing materials.

## 5. Reynaud’s email adds three high-value fields that are currently missing or weak in the backend

### A. Measurement regime

Reynaud says the workshop used a local metric system in which the “foot” was not equivalent across Dresden, Britain, or Frankfurt.

Current status: **new lead from correspondence; underlying source not yet identified in our backend.**

Research implication: crate dimensions and related commercial measurements may require metrological translation before they can be compared across workshop, dealer, forwarder, and receiving records.

Potential new transformation layer:

`local workshop measure → transport/commercial measure → receiver interpretation`

This should be treated as a real research problem, not a decorative fact about historical units.

### B. Packing morphology

Reynaud names an “elaborate system” using:

- cardboard base;
- wires;
- cork elements;
- boxes of different sizes;
- model-specific geometry, including flatter sides on some models.

Current status: cardboard support is strongly documented in later Harvard transport methods. Wire is abundant in model construction/support records but should not automatically be interpreted as transport fastening. Cork as a packing element is presently a **new lead requiring source/database verification**.

Research question: was support architecture standardized by catalogue type, model geometry, price band, or destination, or was it improvised shipment by shipment?

### C. Filler specification

Reynaud says wood-shaving fill could be **coarse or fine depending on the model**.

Current status: **new lead from correspondence**. Our established Harvard sequence has tissue, straw, canvas, burlap and wooden outer cases, but does not yet provide an equivalent model-by-model coarse/fine shaving rule.

Research implication: filler was potentially a calibrated mechanical variable rather than generic waste packing.

## 6. Viscardi adds a post-arrival and contemporary-mobility layer

### Liverpool

The current deep module already records severe institutional wartime risk in May 1941 but leaves Blaschka-specific wartime losses unresolved. Viscardi’s email now adds curator testimony that:

- the Liverpool Blaschkas have suffered since arrival;
- bombing destroyed some models;
- later storage was at times poor;
- staff have become more conscious of the issue in recent years;
- problems remained when he last inspected the collection.

These statements should guide retrieval, while publication-level claims still require local records for exact loss counts, condition history, storage episodes, and object-level conservation.

Priority Liverpool archival targets therefore expand from acquisition/receipt to:

- pre-war and post-war collection registers;
- wartime loss/damage records;
- storage-move records;
- object condition surveys;
- conservation documentation;
- current CMS export / object-level status.

### Dublin / National Museum of Ireland

Viscardi says the entire collection was recently moved across Dublin into bespoke storage and is undergoing conservation for eventual redisplay; he is writing a paper on the move.

This creates a useful longitudinal control. The same class of fragile objects that had to be converted into transportable units in the nineteenth century had to undergo condition assessment, packing, movement, storage, and conservation again in the twenty-first century.

Potential formulation:

> Provenance is not a completed arrow from Dresden to a museum. Fragile models repeatedly re-enter mobility regimes, and each move redefines what counts as adequate support, handling, documentation, and acceptable risk.

The contemporary move should be used carefully as a comparator, not projected backward as evidence of nineteenth-century practice.

## 7. Revised boundary between the two projects

Best present distinction:

**Reynaud/Viscardi side, probable strengths**

- institutional order database;
- object/catalogue crosswalks;
- invoice economics;
- packing charge components;
- packaging-element typology;
- measurement conventions;
- current Irish collections and conservation knowledge.

**Current Blaschka Object Network strengths**

- shipment as multi-stage event;
- forwarders, carriers, customs, brokers and receivers as separate actors;
- misrouting and transport failure;
- replacement through later consignments;
- customs/quarantine transformation of packing material;
- skilled unpacking and remounting;
- feedback from receiver to workshop;
- accounting and settlement clocks;
- post-arrival movement, installation, damage and repair;
- 1892 multiplex movement of people, models, specimens, drawings, seeds, money and paperwork.

Working synthesis:

> Their material can supply a packaging vocabulary and database-level component structure; our event reconstruction can show how those components behaved once a shipment entered transport, customs, receiving, storage, damage and repair regimes.

## 8. Video-call agenda: keep it source-level

Do not use the first call for a broad Blaschka overview. Use three bounded cases and ask to see fields/documents.

### Emmanuel Reynaud

1. Can he show one complete database record for a shipment/order, including packaging fields rather than only object fields?
2. Which source types generated the packaging-element list: invoices, workshop notebooks, surviving packaging, crate sketches, later reconstructions, or a combination?
3. Are packaging elements tied to individual model/catalogue numbers, to boxes/cases, or only to whole orders?
4. What is the underlying source for the Dresden/British/Frankfurt foot distinction? Are original crate dimensions retained before conversion?
5. How are cardboard, wire and cork represented in the database? Is wire demonstrably a transport support in those records?
6. What is the evidence for coarse versus fine wood shavings, and is the choice tied to model type/geometry?
7. Does the database contain Liverpool 1887 / case I.B. 268 or the associated Damon account sequence?
8. Does it contain the Haddon/Sollas Dublin 1887 order, Bristol misrouting, models 239 and 356, or replacement examples?
9. Can the 247 / ~50 / 268 Liverpool accounting problem be resolved from his data or source images?
10. Is the underlying dataset still maintained, and is a field export or bounded sample shareable for research comparison?

### Paolo Viscardi

1. What record base supports the statement that Liverpool bombing destroyed some Blaschka models?
2. Are there pre/post-war inventories or condition reports that can yield a defensible loss/damage count?
3. What storage episodes caused later damage or deterioration, and are they documented at object level?
4. For the recent Dublin move, do condition surveys, packing specifications, crate plans, mover/conservator documentation, and before/after object lists survive?
5. Does the forthcoming paper include the move’s packing and risk-management procedure or mainly conservation/display outcomes?
6. Could the recent move documentation be compared against the nineteenth-century packing record without exposing restricted conservation information?

## 9. Immediate research actions after the call

If access is offered, prioritize a bounded sample before requesting an entire database:

1. Liverpool 1887 shipment/order record;
2. Haddon/Sollas Dublin 1887 records;
3. one Irish invoice with full packaging/transport breakdown;
4. one record that demonstrates the foot-unit conversion problem;
5. one record showing cork and coarse/fine shavings at source level.

Then crosswalk fields against existing repository structures:

- `sources/packing-feedback-unpacking-register.json`
- `sources/workshop-logistics-document-register.json`
- `sources/ware-transatlantic-logistics-register.json`
- `research/logs/2026-08-10-source-infrastructure-logistics-payment-pass.md`
- `research/logs/2026-08-10-source-expansion-consular-receiving-dublin.md`
- Liverpool deep module `world_museum_liverpool_1887_blaschka`

## 10. Evidential guards

- Treat the 10 August email as expert/curator testimony until linked to underlying records.
- Do not normalize `M.Miller` to M. O. W. Möller without an image check.
- Do not infer 21 Marks as the Liverpool packing charge from 268 − 247.
- Do not interpret all wire in existing model descriptions as packing wire.
- Do not claim cork or coarse/fine shavings as established project facts until the database/source is inspected.
- Do not calculate Liverpool Blaschka wartime loss from general museum bombing history.
- Do not treat the recent Dublin move as direct evidence for nineteenth-century practice; use it as a comparative mobility/conservation regime.

## Result

The email exchange materially sharpens the shipment project. The most promising overlap is not generic “transport.” It is the junction between **packing as a database of materials, dimensions and charges** and **transport as a sequence of transformations and handoffs**.

Liverpool provides an accounting and survival cross-check. Dublin provides a misrouting/breakage/replacement chain. Harvard supplies a longitudinal packing–customs–unpacking feedback control. Reynaud’s new metrology, cork and shaving claims identify fields the current backend has not yet captured. Viscardi’s Liverpool and Dublin observations open the post-arrival and repeated-mobility side of the argument.

The next interaction with them should therefore be treated as a source-comparison session, not a general networking call.