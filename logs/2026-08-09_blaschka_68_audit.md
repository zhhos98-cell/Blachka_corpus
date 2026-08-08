# Blaschka surviving-collection census audit — 2026-08-09

## Scope

This branch separates the global **surviving-collection census** from the existing deep provenance/event backend and from the nineteenth-century microscope-slide survey.

The historical baseline to audit is the Corning Museum of Glass interactive-map state reported in the 2017 conservation literature: **179 discrete collections, 68 surviving in museums, schools and individuals**. The earlier 2016 Corning report gave 174 historical collections and 64 current collections. The map was explicitly described as expected to grow.

A present institution enters the census only with current or recent reliable proof that at least one genuine Blaschka marine-invertebrate model survives there. Historical purchase/order evidence alone creates a successor lead, not a current census row.

`baseline_2017_match` remains `unresolved` until the 68 surviving rows of the 2017 map are reconstructed at institution level. A 2026 node is therefore not called a '69th collection' merely because it is absent from the existing deep backend.

## Current-proof census seed

Nineteen current nodes are now written to `data/blaschka_census/2026_surviving_census_seed.csv`. The seed deliberately mixes confirmed old-baseline calibrators with unresolved delta candidates.

The first ten were Leipzig (6), Gotha (7 from 28 acquired in 1881/82), Graz (current display; 19 historically purchased in 1868 but no current count inferred), NHMW Vienna (50 owned by NHMW), University of Vienna (156, with 145/146 retained as older conflicting count layers), Utrecht (128), NHM London (>180), Australian Museum (nearly 100), ANSP (48), and Cornell.

Nine further current-proof rows have now been added:

- Harvard MCZ: approximately 430 current invertebrate models; approximately 60 is only the HMNH rotating display subset.
- National Museum of Ireland – Natural History: current institutional page states over 500 pieces. This remains a separate collection from University College Dublin and other Irish universities.
- National Museums Scotland: 82 models are explicitly on display; therefore the surviving count is at least 82, while the whole current collection total remains open.
- University of Dundee D’Arcy Thompson Zoology Museum: current institutional Blaschka page itemizes eleven models with DUNUC identifiers. The museum's own pages give 1888 and 1889 as acquisition dates, so the one-year conflict remains visible.
- UCL Grant Museum: current Blaschka collection and gallery location are explicit; exact current total remains open. Twenty Lankester-era models in the 1890 catalogue and later Science Museum transfers remain separate acquisition strata.
- Museum für Naturkunde Berlin: the current OS001-02 institutional inventory enumerates **40** Blaschka object records. This is an especially useful census/deep bridge because it also preserves historical ZM numbers, commercial Blaschka numbers, Reiling numbers, acquisition dates and 1995–98 internal transfers into the Historical Division.
- University College Cork: current collection page confirms physical Blaschka holdings and a display subset; exact total remains open.
- UW–Madison Zoological Museum: current UWZM project states over 50 models survive. The approximately-53 historical estimate, detached fragments and modern experimental reconstructions remain separate units.
- Derby Museums: Corning's 2016 one-model minimum is now independently bridged to a 2023 Derby Museums publication illustrating a Blaschka sea-anemone model as part of the current Collections of Making.

## 2016 positive controls

A separate `baseline_2016_2017_reconstruction_worklog.csv` now records source-level baseline facts and technical blockers. Five institution matches can already be marked `yes` without recovering the 2017 pin table because Corning's 2016 text itself identifies them as current: Cornell, Derby, University of Wisconsin, University of Vienna and Australian Museum.

This matters methodologically. `baseline_2017_match=yes` is evidence of old-baseline membership, not merely a guess that a famous collection 'must have been' on the map. The same discipline will be applied to all other nodes.

## Historical-successor audit

`data/blaschka_census/historical_successor_leads.csv` keeps obscure school/university/person leads separate from proven current nodes.

Warsaw remains the strongest unresolved lead. The present University of Warsaw Faculty of Biology zoological teaching collection explicitly preserves historical material probably descending from the old Zoological Cabinet, includes didactic models, and retains labels reading `Zoołogiczeskij Kabinet` and `Zootom Kab.`. No current Blaschka object has yet been identified, so Warsaw remains outside the surviving census.

The Hamburg school lead has been tightened but not closed. The Blaschka ledger OCR reads `Reform. Realschule Hamburg M 57 50`. Ernst Schlee's Altona school is a strong candidate because it originated as a Reformrealschule, but by 1887 its formal title was **Realgymnasium mit Realschule zu Altona**. This nomenclature mismatch prevents automatic identification. Digitised 1886/87 and 1887/88 school reports now provide a primary-source route for checking acquisitions and natural-history collections before successor tracing. The school line later became the Schlee school and Ernst-Schlee-Gymnasium, eventually closing in 1997; no teaching-collection transfer is inferred from that institutional succession.

König-Wilhelms-Gymnasium Breslau is now treated as a wartime institutional discontinuity rather than a simple successor search. A digitised 1887 programme contains the 1886/87 school report. Because the school/building history ends through wartime destruction and 1945 closure, the next question is whether collections were transferred or dispersed before that point. Building destruction alone is not evidence that the Blaschka models were destroyed.

Jeypore/Jaipur and Indian Museum Calcutta stay out of the 'redo the history' queue. Their deep nineteenth-century chains already exist in modules 37 and 38; only current Blaschka-specific physical proof is needed for census promotion.

## Baseline-source state

Corning's 2016 publication states 174 historical / 64 current collections and 4,747 surviving models. The later AIC/Corning account states 179 discrete / 68 surviving collections and describes the interactive map as containing owner/institution, location, image, collection history and current status.

The legacy map remains online and visibly distinguishes current versus original collections, but ordinary text extraction exposes only the interface key rather than pin-level records. Search-engine indexing has not yet exposed the underlying JavaScript/data payload. Consequently the row-level 68 remains the decisive unresolved dependency.

## Immediate next passes

1. Keep attacking the map's underlying data asset or an archived/exported copy of its 68 current pins.
2. Continue Warsaw at object level; the next successful result must be a current Blaschka label/object/inventory record, not another general institutional-history layer.
3. Read the Altona 1886/87–1887/88 school reports and Breslau 1886/87 report for acquisitions/Sammlungen before doing modern successor searches.
4. Expand the current-proof seed through authoritative institutional inventories, especially low-visibility university/school collections, while keeping baseline matching separate.
5. Preserve every count ontology and custody distinction: acquisition count versus survivor count, collection total versus display subset, owner versus borrower, institutional transfer versus physical manufacture.
