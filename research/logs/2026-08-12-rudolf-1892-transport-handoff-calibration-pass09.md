# 2026-08-12 — Rudolf 1892 transport / handoff calibration pass 09

Status: FULL BACKEND + REPOSITORY CALIBRATION. No public-map claims were changed in this pass. The purpose was to test whether transport is merely an additional theme for the existing 1892 journey reconstruction or whether it changes the historical unit of analysis. The result strongly supports the latter. It also exposes two source-critical corrections in the current transport/consignment layer that should be made before the public map is altered.

## Scope and audit base

This pass cross-read the active Blaschka backend and the present GitHub repository at current main HEAD `952b1bfa4a0d8dab8509c21423a90e5641cde479`.

Backend emphasis:

- `04_Blaschka_Archive_015-040_MASTER.json` and the clustered research derivative preserving the consignment-event layer.
- `05B_Blaschka_Digital_Archive_Literature_Technical_MASTER(1).json`, especially the Harvard/Corning archive, Rakow finding-aid and transportation-method material.
- `06_Blaschka_Global_Object_Archive_Provenance_BACKEND_MASTER_2026-08-10_v4_through_49(2).json`, used comparatively to test whether the transport problem is peculiar to Harvard or recurs across the global network.
- `Rudolf_Blaschka_America_1892_MASTER.csv` and `Rudolf_Blaschka_America_1892_sources.csv` as the trip/newspaper source ledger.

Repository emphasis:

- `map/rudolf-1892/route-data.js`
- `map/rudolf-1892/knowledge-data.js`
- `map/rudolf-1892/source-data.js`
- `map/rudolf-1892/index.html`
- the 1892 research sequence from the 10 August full-corpus/map pass through knowledge-production pass 04, Darlingtonia passes, return/reassembly pass 07 and map-granularity pass 08;
- the parallel logistics/source-infrastructure strand, especially `ware-transatlantic-logistics-register.json`, `packing-feedback-unpacking-register.json`, `harvard-receiving-skill-register.json`, `customs-regulation-register.json`, `forwarder-longitudinal-register.json`, `workshop-logistics-document-register.json`, `dublin-shipping-failure-register.json`, `moller-hamburg-forwarding-register.json`, `mobile-intermediary-register.json`, and `commercial-intermediary-register.json`.

A broad recursive keyword diagnostic was also run across the mounted 04 / 05B / 06 objects for packing, freight/forwarding, border regulation, receiving/unpacking, damage/repair and transaction-cost vocabulary. These counts are diagnostic only because nested masters repeat contextual metadata and generic words such as `case`, `support`, `receive` and `transfer` have multiple meanings. The useful result is structural rather than numerical: transport/handoff vocabulary occurs across almost the entire 06 institutional layer, with especially dense material in Liverpool, Jeypore/Jaipur, Indian Museum Calcutta, NHM London, Geneva, Perth, Cardiff, NMS and Auckland. The transport problem is therefore not a Harvard-only anomaly.

## Main calibration result

The existing 1892 argument is already much closer to a transport history than the public map makes visible. The 10 August map brief defines the journey as a `mobile extension of the Blaschka workshop`; pass 04 shifts from places to operations and explicitly separates Rudolf's bodily route from material, information and prospective-supply routes; pass 07 identifies asynchronous traveller, material, workshop and reference-literature clocks; pass 08 changes the public thesis line to `People, specimens, books and decisions moved on different clocks.` These are substantial advances.

The remaining mismatch is ontological. The public page and its canonical data remain **person-first**. `route-data.js` is organized around Rudolf's documented stops. `knowledge-data.js` adds transit, drawing, preservation, circulation, coordination, repair and reassembly, but these operations remain attached to the same bodily itinerary nodes. `source-data.js` enriches those nodes with asynchronous flows. Thus the analysis has begun to describe a multi-carrier circulation system while the map still treats Rudolf as the spine from which other movements branch.

The transport/handoff evidence suggests a stronger unit: **the transfer episode or moving packet**. The workshop did not move intact. It was repeatedly decomposed into people, finished models, temporary supports, drawings, preserved botanical material, seeds, bulbs, books, instructions, telegrams, invoices and regulatory papers. These components travelled by different infrastructures, under different legal classifications, at different speeds. They were repeatedly reassembled at Cambridge and Hosterwitz. Transport was consequently part of model-making because movement required changes of medium, container, authority and object status.

A more precise working proposition is therefore:

> The 1892 expedition and the Ware commission were one coupled system of counter-moving people, objects and references. Model-making depended on making heterogeneous things transportable and on managing the handoffs through which their meaning, condition and authority could change.

This is analytically stronger than saying that the workshop was simply `mobile` or `distributed`. Distribution can describe a spatial condition. The sources here expose operations: separation, packing, documentation, forwarding, inspection, unpacking, remounting, preservation, postal substitution, delayed arrival, selection, repair and return shipment.

## The January–February 1892 case: two outward movements begin together

The strongest opening source remains `BLA-D00016` (`015:16`, with repeated occurrences elsewhere). On 20 January 1892 Leopold and Rudolf state that the following day they will send five cases, U.B. 346–350, by railway freight. The five cases contain 60 botanical models and 329 analytical details. They are to pass through the Bremen agents, then to New York and `in Bond to Boston`. The letter explicitly calls this the largest consignment so far and says that finishing it delayed Rudolf's own American departure by several days.

This sentence should be treated as a synchronization point rather than merely a shipping notice. One workshop is about to release two different mobile entities:

1. a finished-model cargo under freight, forwarding, steamship, bonded-customs and museum-receiving regimes;
2. Rudolf as passenger and maker under ticketing, passport/travel-document, passenger-baggage and personal-customs regimes.

The Bremen relationship strengthens the connection. The longitudinal forwarder register shows Ehrhorn, Emden & Mayer as a durable Blaschka intermediary from at least 1891 to 1929. In 1892 the firm's role extends from freight forwarding to Rudolf's own travel documentation and Norddeutscher Lloyd interface. This is unusually useful because one commercial node handled both the object route and the maker's mobility while those routes remained legally and materially distinct.

Goodale then records that five cases of glass models arrived by the *Elbe* and that he handed the papers to E. A. Snow (`BLA-D00024`, `015:24`). The documentary packet and the physical cargo are already separable: papers move through the broker/receiver chain before the cases are unpacked.

Rudolf's own passenger arrival followed another border sequence. The 1892 correspondence describes officials boarding near Sandy Hook, the Hoboken customs process, Rudolf's explanation of the purpose of his journey to a senior official, a declaration, and admission of his things free. Ganong had been instructed to meet him at the customs exit. This should remain analytically distinct from the five bonded cases. `Customs` is not one event or one institutional category here: the maker and the glass cargo were processed differently.

## A crucial Cambridge letter: counterflow and receiving skill in the same page

`BLA-D00695` (`017:49`) is now one of the highest-value records for the whole project and should be promoted in any transport-centred reconstruction. The letter juxtaposes two opposed flows in a single day's writing.

First, Rudolf tells Leopold that he has sent roughly 29 species of seeds from the Cambridge Botanic Garden as a `sample without value`, with signs explaining sowing treatment. Botanical material and cultivation instructions are already moving from Cambridge back toward Hosterwitz before Rudolf has begun the major field itinerary.

Second, he says that at noon five boxes of models arrived at the museum. They were lifted to the third floor by the museum's chairlift/elevator. A Botanical Museum porter/houseboy removed the outer packing skillfully. Goodale himself unscrewed and opened the case. A box containing *Datura arborea* was taken out, and Rudolf explicitly remarks on Goodale's skill and carefulness in unpacking. The model examined was well preserved. The other boxes had to wait for a customs inspector so that opening could occur under official inspection.

This record changes the actor topology of the 1892 transport story. Successful receiving did **not** depend only on the maker supplying embodied knowledge after arrival. Harvard already possessed distributed handling skill: porter/houseboy, Goodale, customs inspector and later Ganong/other helpers each performed distinct tasks. Rudolf's presence adds observation, judgement and later repair expertise, but the successful receiving system cannot be reduced to maker knowledge.

The same letter also makes `counterflow` literal. Seeds and cultivation instructions move Cambridge → Hosterwitz while finished glass moves Hosterwitz → Cambridge. The history is already bidirectional before Jamaica, Arizona or California enter the picture.

A later Goodale letter (`BLA-D00028`, `015:28`) adds another receiving episode. E. A. Snow sends Capt. Wales of the Custom House; roughly eight specimens are opened and found in excellent condition; the remainder are left pending for Ware. Goodale plans the room and arranges for Ganong or another person to be present for unpacking. For U.B. 346–350, therefore, the direct February evidence presently supports **successful sampled arrival**, not a severe-damage event.

## Source-critical correction 1: `CONS-1892-01` currently over-merges two histories

The clustered backend currently labels `CONS-1892-01` as `Cases U.B. 346-350, Rudolf's parallel journey, customs damage and repair` and summarizes its handoff problem by saying that two severe breaks were attributed to New York customs and taken back for workshop repair. This should be split before reuse.

The January–February chain and the June repair chain are both real, but the present evidence does not support treating the two badly broken models as damage to U.B. 346–350.

`BLA-D00081` (`015:81`), Goodale on 10 June 1892, says Rudolf is repairing models already at Harvard. Most of the worst ones have been put into excellent order. Two very badly broken examples will go back with him. The critical phrase says that these came in the **first consignment** and were damaged in the New York custom house. `BLA-D00085` (`015:85`), 15 June, says Rudolf has repaired the collection so successfully that it is hard to tell which models had been broken; in some cases he made new petals at Harvard with local appliances.

The 2007 Corning narrative independently locates serious customs damage at the beginning of the botanical programme: following Goodale's initial 1886 commission, the **first shipment** was badly damaged when customs inspectors hastily unpacked it. This fits the wording in the June 1892 Goodale letter much better than assigning the two severe old breaks to the January 1892 U.B.346–350 batch. Meanwhile the direct February 1892 U.B.346–350 receiving evidence says the sampled specimens were in excellent condition.

Recommended re-segmentation:

- `CONS-1892-U.B.346-350` — January–February five-case shipment; railway freight → Bremen → *Elbe* / New York → bond / Boston → E. A. Snow → museum/elevator → Goodale/porter → customs sampling / Capt. Wales → unpacking. Condition: sampled material well preserved / excellent. Keep exact case-level condition unknown for unopened items.
- `PERSON-1892-OUTBOUND-RUDOLF` — Rudolf's separately ticketed/passenger route, Bremen agency/travel documents, Norddeutscher Lloyd, Sandy Hook/Hoboken customs, Ganong reception. Link to the shipment through synchronized origin and workshop schedule, not as one consignment event.
- `REPAIR-1892-JUNE-ACCUMULATED` — Rudolf's Harvard repair phase. Two severely damaged models explicitly belong to the `first consignment`; they are to return to Germany. Other repairs include locally remade petals. Link this event backward to the early commission/customs-damage history, with exact shipment identity guarded until the first-consignment correspondence is isolated at record level.

The old `CONS-1892-01` can remain as a historical working cluster only if marked superseded by this split.

## Source-critical correction 2: audit `PACK-1892-CUSTOMS-OPENING`

`sources/packing-feedback-unpacking-register.json` currently describes its 1892 event as five cases `L.B. 1–5` and says Rudolf reported that all five boxes had been found, the first opened before an inspector, and the contents arrived `without even a scratch` before subsequent opening.

The current code search finds `without even a scratch` only in this derived register. The direct `BLA-D00695` text instead supports a narrower statement: five boxes arrived; all **looked well-preserved**; the *Datura arborea* model directly examined was well preserved; the other boxes awaited customs inspection. `BLA-D00028` later supports roughly eight specimens opened under the Custom House visit and found in excellent condition. The present pass did not locate direct support for the case marks `L.B. 1–5` in this 1892 receiving passage.

Recommendation: do not reuse the derived wording until the source chain is rechecked. Replace the event with record-level statements and case marks only where directly documented. This is a good example of why the new transport framework requires shipment-level and handoff-level granularity rather than year-level synthesis.

## Return travel: the outward separation reverses, but asynchronous arrival remains

The post-return evidence already recovered in pass 07 becomes more significant under a transport reading.

On 5 July 1892 (`BLA-D00101`, `015:101`), Rudolf says that he reached Hosterwitz on 30 June and has already resumed work on plants flowering in the local garden. Yet the preserved specimens obtained on his journey **have not yet arrived**. Only when they reach the workshop will the Blaschkas select valuable material for the next consignment.

Thus maker and field references again travel on different clocks. The person reaches the workshop before part of the material corpus. `Return` is not a point on a route. It is a reassembly process with latency.

On 27 July Goodale says Harvard cannot practically send the required library books and will therefore obtain fresh copies from publishers for the Blaschkas' cryptogamic work. The knowledge system accordingly includes a second post-expedition transatlantic flow: published reference works Cambridge/US-side procurement → Hosterwitz.

By 31 January 1893 Goodale reports that a coming consignment will contain `a few of the American plants collected on the journey` alongside Cryptogamia (`BLA-D00131`, `015:131`). The cycle therefore does not end with botanical references reaching Dresden. Some American plants re-enter the Atlantic system as finished glass and return to Harvard months after the traveller came home.

A full 1892–93 transport loop can now be represented as:

`Hosterwitz finished glass → Harvard`

`Hosterwitz maker → America`

`Cambridge seeds/instructions → Hosterwitz`

`living American/Jamaican plants → drawings / microscopy / herbarium / alcohol / seeds / bulbs / living material`

`field references → Cambridge and/or Hosterwitz on several routes`

`Rudolf → Hosterwitz before all preserved specimens`

`reference books → Hosterwitz`

`selected American references → workshop modelling queue`

`finished American plant models → Harvard`

This loop is more historically specific than a generic circulation diagram because every arrow corresponds to a different conversion, carrier relation, regulatory/documentary form or latency.

## Transportability is a process, not an intrinsic property

The combined 1892 and longitudinal evidence supports `making transportable` as a useful first-order mechanism, with a crucial qualification: it should be shown through operations instead of used as an abstract theoretical label.

A living plant is seasonally and geographically unstable. During the expedition it can be converted into:

- coloured drawing or morphological record;
- microscopic observation;
- alcohol-preserved specimen;
- dried herbarium specimen;
- seed;
- bulb/cutting/living specimen;
- address and agreement for later supply when flowering is missed.

A finished glass model has the opposite epistemic status—it is already a durable representation—but remains physically fragile. To move, it too is transformed: temporary support, inner box, outer case, packing material, case mark, invoice/contents list, freight category, bonded object, inspectable customs cargo, unpacked model, museum mount and labelled display object.

The later `METHOD OF PREPARATION THE MODELS FOR TRANSPORTATION` in 05B makes this sequence explicit. Each glass model is fixed to a firm cardboard plate; dependent parts are immobilized with crushed tissue; inner boxes are placed in a wooden box with straw; the outer box is wrapped in a straw bale and burlap; customs opening occurs at the museum; the model is then removed from the temporary transport support and transferred to a gypsum/plaster plaque. Transport therefore includes a temporary change in the object's material configuration. It is a chain of state changes, not a blank interval between maker and museum.

The same logic applies to information. A costly Darlingtonia route problem is compressed into a telegram; a missed flowering event becomes a future-supply arrangement; botanical identification is stabilized by labels and institutional gardens; library knowledge becomes newly purchased duplicate books because Harvard's own copies cannot simply travel. The medium changes because the thing has to cross distance, time or institutional boundaries.

## Longitudinal GitHub calibration: transport is already a major project strand

A whole-repository scan shows that the new 1892 framing should not be presented as the discovery that Blaschka objects were transported. The repository already contains a mature parallel logistics architecture.

### Ware transatlantic corridor

`ware-transatlantic-logistics-register.json` reconstructs 1906, 1923 and 1929 as chains of sender → Bremen forwarder → ocean carrier → customs/bond → broker → Harvard receiver. It already treats route, consular paperwork, insurance, export regulation, customs entry and museum opening as separate operations.

### Packing–unpacking feedback

`packing-feedback-unpacking-register.json` argues that the historical unit is the **packing–unpacking loop**, not the crate. The 1930 method materializes workshop knowledge in support plates, tissue, boxes, straw and burlap. Ames's receiver feedback converts vibration and quarantine experience into future packing advice. In 1932 Rudolf explicitly credits Louis Bierweiler's careful skill for the successful unpacking of a difficult shipment.

### Receiving expertise

`harvard-receiving-skill-register.json` shows that the receiving institution accumulated technique. Bierweiler coordinates clearance and local repair, visits Hosterwitz in 1931, and is later praised for skilled unpacking. The 1892 letter now pushes this receiving-skill history backward: Goodale and a museum porter are already explicitly described by Rudolf as skilled handlers.

### Regulatory reclassification

`customs-regulation-register.json` makes an especially strong comparative point: there is no single stable administrative category `Blaschka model`. Depending on jurisdiction and the component being inspected, the same shipment can be treated as artistic/scientific work for export valuation, `glassware` in broker paperwork, bonded freight, or even a plant-quarantine problem because protective straw/hay is itself regulated material. Transport changes what the state sees.

### Durable forwarding memory

`forwarder-longitudinal-register.json` shows Ehrhorn, Emden & Mayer as a repeated mobility infrastructure. The firm is not merely a carrier subcontractor. It supplies route advice, travel documents, carrier interfaces, consular/insurance connections and long-term procedural memory. In 1929 Rudolf rejects a cheaper direct-Boston route because it would require redoing consular paperwork and create delay. Documentation can therefore make one physically plausible route institutionally expensive.

### Workshop documentary genres

`workshop-logistics-document-register.json` shows that Rakow Series 04 already contains the source genres needed for a transport history: delivery book, invoices, customs receipts, international rail waybill, shipment contents list, crate sketches, consular certificate and final-shipment waybill. These should remain an integrated logistics dossier rather than miscellaneous business ephemera.

### Failure as a transport operation

The 1887 Dublin cluster is a particularly useful control. `dublin-shipping-failure-register.json` reconstructs a shipper-note error that sent the Sollas consignment to Bristol instead of Dublin, produced roughly two weeks of delay, and was followed by broken models 239 and 356. Replacement examples were then inserted into Haddon's later shipment. The failure chain is:

`document error → wrong port → delay → damage → replacement → another customer's shipment`.

This is analytically valuable because it proves that paperwork, physical route and object condition are coupled. It also shows that a shipment can remain open after arrival through replacement traffic.

### Human carriers and mixed roles

`mobile-intermediary-register.json` uses Charles Francis Adams in the Auckland case to show a person serving simultaneously as travelling preparator, physical carrier and payment intermediary. `commercial-intermediary-register.json` extends the route archive to Jeypore/Jaipur, where cases LB 285–286 move Dresden → Trieste → Austro-Hungarian Lloyd → Bombay → Grindlay & Groom → museum. The project already has the materials to compare corporate carriers, brokers, dealers and mobile humans without flattening them into `network`.

## Global-backend calibration: comparative cases that keep 1892 from becoming exceptionalist

The active 06 v4 backend contains 41 embedded institutional/regional modules. A transport-keyword diagnostic shows that the relevant vocabulary is widespread. Several modules provide especially good comparative controls:

- **World Museum Liverpool, 1887:** manufacture schedule, models-only value, separate packing estimate, case I.B.268, M. O. W. Möller in Hamburg, onward Liverpool recipient and rolling Damon account. This is a clean commercial/logistics chain.
- **Jeypore/Jaipur, 1886–87:** manufacture from new, case marks LB285–286, route negotiation, railway to Trieste, Austro-Hungarian Lloyd to Bombay, Grindlay & Groom forwarding and final settlement. This demonstrates a genuinely multi-modal imperial route.
- **Indian Museum Calcutta:** catalogue-client evidence, Superintendent orders, Lieferungs-Buch shipment records and Hamburg routing. This provides a longer institutional logistics relation whose exact current survivors remain open.
- **Natural History Museum London, 1883:** 19-model shipment, packing/cost/insurance data and a dispute over six damaged objects despite an apparently intact outer package. The workshop argued that damage might have occurred during unpacking. This is a crucial reminder that `damage in transit` cannot be assigned to a single stage merely from final condition.
- **Geneva, 1888 and later:** 117-object acquisition with a 512-Mark cost layer that separates crates, cartons and packing/transport to station; later conservation and 2024–26 vibration-controlled rehousing. Transport risk continues long after original acquisition.
- **Auckland, 1885:** seven Ward-supplied models physically delivered by Charles Francis Adams inside a triangular payment relation. Here a person is an actual carrier, museum worker and financial actor.

These comparisons sharpen rather than dilute the 1892 case. The special value of 1892 is that it allows **finished models, the maker, botanical references, information and later workshop outputs to be observed moving in opposite directions within one tightly dated episode**. The comparative modules show that the mechanisms—packing, forwarding, border classification, receiving skill, paperwork error, repair—belong to a longer Blaschka circulation system.

## What is potentially new at paper level

Several formulations were tested against both the 1892 logs and the existing logistics registers.

### Too weak / already present

`The 1892 journey was more than a collecting trip.` Already established.

`The workshop was mobile/distributed.` Already the public-map thesis and pass-04 result.

`Logistics mattered for knowledge production.` Already explicit in pass 04 and the source-infrastructure strand.

`Blaschka models circulated through global networks.` Far too general; the backend has already moved well beyond this.

### Stronger, source-specific advance

1. **Decomposition and reassembly.** The workshop became operational at distance by splitting itself into separately transportable people, objects, media, instructions and documents and repeatedly reassembling them.
2. **Counterflow.** The commission is not a one-way Dresden → Harvard supply chain. Glass, maker, botanical material, seeds, books, instructions and later glass versions of American plants move in both directions.
3. **Handoff changes authority.** At each transfer, a different actor can temporarily define and act on the object: workshop packer, forwarder, carrier, customs official, broker, museum porter, botanist, technician, patron. The object is not merely passed along; authority over opening, classification, repair and display is redistributed.
4. **Transport forces media conversion.** Living and seasonal organisms become drawings, preserved specimens, seeds/bulbs or future-supply commitments; fragile glass becomes temporary mounts and regulated cargo; route problems become telegrams; unavailable library reference becomes purchased duplicate books.
5. **Success and failure are stage-specific.** An intact outer case does not prove intact inner models; customs opening can create risk; a carefully packed object can be damaged during unpacking; a successful arrival can depend on accumulated receiver skill. Transport history therefore needs stage-level evidence.
6. **Latency is productive.** Delays are not merely friction. A missed flowering season can generate a future supplier; preserved specimens arriving after Rudolf create a later selection stage; paperwork delays alter route choices; a broken model can re-enter the network through a later replacement shipment.

A defensible provisional paper claim is:

> In the Blaschka commission, transport was one of the operations by which knowledge and objects were made. The workshop repeatedly converted plants, models, instructions and documents into forms that could survive handoff, while forwarders, customs officers and museum receivers acquired temporary authority over what those things were and how they could be handled. Rudolf's 1892 journey is unusually revealing because the maker, an incoming model consignment and outgoing botanical references crossed the same Atlantic system on different routes and clocks, before being reassembled into later workshop production.

The novelty should therefore lie in reconstructing the **missing middle between observation/manufacture and museum object**, not in claiming that no one has noticed travel or shipment before.

## Recommended new data unit: transport / handoff ledger

Before changing the public map, build a structured ledger in which each row is one moving entity or handoff rather than one place. Minimum fields:

- `event_id`
- `moving_entity_id`
- `entity_class`: person / finished model / case / drawing / alcohol specimen / herbarium specimen / seed / bulb / living plant / book / letter / telegram / invoice / customs document / payment
- `origin`
- `destination`
- `dispatch_date_or_window`
- `arrival_date_or_window`
- `carrier_or_infrastructure`
- `forwarder_or_broker`
- `regulatory_regime`
- `container_or_case_mark`
- `sender`
- `handler`
- `receiver`
- `handoff_action`
- `state_before`
- `state_after`
- `condition_before_after`
- `media_transformation`
- `latency_or_wait`
- `decision_consequence`
- `counterflow_relation`
- `linked_taxon_or_model`
- `source_locator`
- `source_type`
- `evidence_status`
- `confidence`
- `open_question`

This would allow a map to render multiple routes without forcing everything through Rudolf's coordinates. It also makes negative evidence expressible: planned but cancelled route, dispatch without known arrival, arrival without known dispatch date, intact sample without proof of whole-case condition, repair without secure original-damage shipment.

## Proposed 1892 transport packets for the first structured pass

At minimum, distinguish:

- `P1892-GLASS-346-350`: U.B.346–350, 60 models + 329 analytical details.
- `P1892-RUDOLF-OUT`: Rudolf's outward passenger journey and baggage/equipment.
- `P1892-CAMBRIDGE-SEEDS-FEB`: c.29 species of Botanic Garden seeds + sowing instructions sent to Leopold.
- `P1892-JAMAICA-REFERENCE`: drawings, dried specimens, rum/alcohol-preserved material, seeds/bulbs and Cameron-prepared material, ideally split by medium when dates allow.
- `P1892-WESTERN-DRAWINGS`: drawings/notes carried with Rudolf.
- `P1892-WESTERN-LIVING`: cacti/bulbs/living materials carried or forwarded.
- `P1892-DELAYED-CALIFORNIA-SUPPLY`: Orcutt and other later seed/bulb supply after Rudolf leaves.
- `P1892-TELEGRAPH-SHASTA`: decision information whose delivery lags the moving party.
- `P1892-DARLINGTONIA`: cultivated St Louis encounter → colour sketch + alcohol specimen → later archival drawing/model relation.
- `P1892-RUDOLF-RETURN`: passenger return to Europe.
- `P1892-PRESERVED-RETURN`: preserved travel material reaching Hosterwitz after Rudolf.
- `P1892-REFERENCE-BOOKS`: fresh copies procured by Goodale and sent for cryptogamic work.
- `P1893-AMERICAN-MODELS`: trip-derived American plants entering a later finished-model consignment to Harvard.
- `R1892-ACCUMULATED-REPAIR`: Harvard repair event, explicitly kept separate from U.B.346–350 damage history.

## Implication for the public map

Do not add a fourth `Transport` button immediately. The current Journey / Work / Flows design can support a deeper transport layer, but the canonical data model should change first.

The likely best architecture is:

- **Journey**: Rudolf's securely documented bodily movement and corridor constraints.
- **Work**: operations at sites, retaining field/workshop practices.
- **Flows**: redefined as the main transport/handoff view, with independently moving entities, direction, medium, carrier/regulatory context and latency.

This would be more coherent than adding `Transport` beside `Flows`, because transport is what makes the existing Flows analytically specific. `Flows` should cease to mean generic arrows between journey nodes and become the representation of actual packets and handoffs.

A particularly effective visual opening would synchronize January–February 1892 in parallel lanes:

`U.B.346–350: Hosterwitz → rail → Bremen → Elbe → New York/bond → Boston/Cambridge → Snow → elevator → porter/Goodale → customs sampling → unpacking`

`Rudolf: Hosterwitz → Bremen agent/travel docs → NDL passenger ship → Sandy Hook → Hoboken customs → Ganong → New York rail → Boston/Cambridge`

Then insert the counterflow from `BLA-D00695`:

`Cambridge Botanic Garden seeds + sowing signs → Hosterwitz`

The visual point would be immediate: the workshop is already operating in both directions before the famous field route begins.

## Retrieval / verification queue produced by this pass

1. Isolate and image-check the exact **first botanical consignment** damaged by New York customs after the initial 1886 commission. This will close the June 1892 repair provenance and prevent contamination of U.B.346–350.
2. Recheck `BLA-D00695` image and adjacent date/postmark so the five-box museum-arrival event can be dated as tightly as possible; retain the historical racial descriptor only in transcription/context, not as an unmarked modern actor label.
3. Resolve whether U.B.346–350 can be cross-walked to any complete contents/invoice list beyond the aggregate 60 models / 329 details.
4. Identify vessel/arrival dates for the *Elbe* five-case cargo and the exact bonded transfer path if surviving manifests/customs records allow.
5. Search E. A. Snow / Capt. Wales / Boston customs records for the 1892 event. The later customs archive register already identifies RG 36 as the appropriate U.S. administrative universe for comparable shipments.
6. Recover the actual arrival date of Rudolf's preserved travel specimens at Hosterwitz. This gives a direct material-latency interval.
7. Determine which American plants were in the January 1893 consignment and crosswalk them to field references and later model numbers.
8. Build one negative chain where material was observed or preserved but never selected/modelled. This is necessary to demonstrate selection rather than assuming automatic conversion.
9. Audit `PACK-1892-CUSTOMS-OPENING` and the old `CONS-1892-01` before any public use.
10. Continue using 1887 Dublin, 1883 NHM London, 1929 Ware and 1932 Bierweiler as controls for paperwork failure, ambiguous damage stage, regulatory reclassification and successful skilled unpacking respectively.

## Evidential guards after calibration

- Do not infer damage stage from final breakage alone.
- Do not infer whole-shipment condition from a customs sample.
- Do not merge `customs` encounters involving a passenger, bonded freight and later museum inspection.
- Do not assume a taxon-level identity closes the genealogy between one field drawing, one preserved specimen and one model.
- Do not treat the first/earliest botanical customs-damage story as U.B.346–350 without direct shipment evidence.
- Do not use later packing methods as proof of the exact 1892 crate architecture; use them longitudinally as evidence of a developed system.
- Keep retrospective route/firm continuity claims distinct from dated transaction evidence.
- Keep administrative categories actor-specific: maker, forwarder, carrier, customs, broker and museum can describe the same material differently.

## Bottom-line assessment

The transport perspective survives the full calibration and becomes stronger after it. The important shift is not `add logistics to the 1892 map`. The source-rich proposition is that **the Blaschka workshop operated through controlled decomposition and reassembly across handoffs**. 1892 gives an unusually dense cross-section because the outgoing maker, incoming five-case model consignment, outgoing seeds, later field references, delayed preserved specimens, reference books and return-model consignments can all be placed in one chronological system. The wider repository supplies the longitudinal controls proving that these operations were neither incidental nor unique to one trip: the same project repeatedly depended on forwarder memory, regulatory paperwork, packing architecture, receiver skill, repair feedback and substitution after failure.

The next public-facing advance should therefore follow a data advance: build a transport/handoff ledger, correct the two over-merged 1892 derived records, then refactor the existing `Flows` mode around moving entities and handoff episodes rather than Rudolf's route nodes.