# Blaschka surviving-collection census audit — 2026-08-09

## Scope

This branch separates the global **surviving-collection census** from the existing deep provenance/event backend and from the nineteenth-century microscope-slide survey.

The historical baseline to audit is the Corning Museum of Glass interactive-map state reported in the 2017 conservation literature: **179 discrete collections, 68 surviving in museums, schools and individuals**. The earlier 2016 Corning report gave 174 historical collections and 64 current collections. The map was explicitly described as expected to grow.

A present institution enters the census only with current or recent reliable proof that at least one genuine Blaschka marine-invertebrate model survives there. Historical purchase/order evidence alone creates a successor lead, not a current census row.

`baseline_2017_match` remains `unresolved` until the 68 surviving rows of the 2017 map are reconstructed at institution level. A 2026 node is therefore not called a '69th collection' merely because it is absent from the existing deep backend.

## First current-proof seed

Ten current nodes are now written to `data/blaschka_census/2026_surviving_census_seed.csv`. The first audit deliberately mixes likely old-baseline calibrators with possible delta candidates so that map reconstruction can be tested against positive controls.

- Universität Leipzig: current university history explicitly states six surviving Blaschka glass models; the collection remains a teaching/study collection.
- Stiftung Friedenstein Gotha: institution states 28 acquired in 1881/82 and seven survive today.
- Universalmuseum Joanneum Graz: current 2024–2026 exhibition explicitly displays Blaschka models; historical annual reports give 19 acquired in 1868. Current exact survivor count is deliberately left blank.
- Naturhistorisches Museum Wien: NHMW publication states 50 Blaschka exhibition objects are owned by NHMW; current Hall 22 display is separately documented.
- University of Vienna Zoological Collection: current collection page states 156 Blaschka models. Other university pages give 145/146, so the count history is retained as a source conflict. The 45-model NHMW display subset is never treated as the University total or as a third collection node.
- Universiteitsmuseum Utrecht: a current Utrecht University page states 128 Blaschka marine-animal models. An earlier about-80 formulation is therefore treated as stale or scope-different, not as the present census count.
- Natural History Museum London: current institutional page states more than 180 models.
- Australian Museum: current museum page states nearly 100 sea-anemone models and remains current in 2026.
- Academy of Natural Sciences of Drexel University: current institutional finding aid scopes the collection at 48 glass models while preserving lower subset/legacy counts separately.
- Cornell University: included as a positive-control baseline match because Corning explicitly listed Cornell as current in 2016; no digital-image count is converted into a physical survivor count.

## Historical-successor audit

`data/blaschka_census/historical_successor_leads.csv` keeps obscure school/university/person leads separate from proven current nodes.

Warsaw is the strongest unresolved lead. The present University of Warsaw Faculty of Biology zoological teaching collection explicitly preserves historical material probably descending from the old Zoological Cabinet, includes didactic models, and retains labels reading `Zoołogiczeskij Kabinet` and `Zootom Kab.`. The 1907 volume *Зоотомическая лаборатория, зоотомический кабинет и преподавание анатомических дисциплин...* is confirmed as a 154-page open-access source at the Russian State Library. No current Blaschka object has yet been identified, so Warsaw remains outside the surviving census.

Jeypore/Jaipur and Indian Museum Calcutta were removed from the 'redo the history' queue. The active Blaschka backend already contains deep modules 37 and 38. Jaipur has the 1886–87 Hendley order, 640-Mark model value, Damon mediation, LB 285–286 Trieste–Bombay shipment and 1895 numbered display; Calcutta has catalogue-purchaser, 1883 shipment, Superintendent-order and 1894 glass-model display layers. For both, the remaining census problem is current Blaschka-specific survival proof.

## Baseline-source state

The live Corning legacy map remains online, and the 2017 *Journal of Glass Studies* note is identifiable as Ruggiero and Larson, “The Blaschka Legacy in Worldwide Collections: A New Resource,” pp. 419–428. The map UI itself does not expose institution rows to ordinary text indexing, and the JSTOR XML/PDF route currently exposes metadata rather than the article body in this runtime. Therefore the institution-level 68-row baseline is not yet reconstructed and remains the decisive audit dependency.

## Immediate next passes

1. Reconstruct the institution-level 2017 surviving-68 list from the Corning map or its underlying data asset.
2. Continue Warsaw with the 1907 cabinet history and present collection inventory/images.
3. Verify the exact ledger identities for Reform-Realschule Hamburg, Gymnasium Leitmeritz, König-Wilhelms-Gymnasium Breslau and the second Leipzig school lead before successor tracing.
4. Keep every loan/display relation distinct from legal/institutional collection identity, especially University of Vienna versus NHMW.
