# Blaschka surviving-collection census audit — 2026-08-09

## Scope

This branch separates the global **surviving-collection census** from the existing deep provenance/event backend and from the nineteenth-century microscope-slide survey.

The historical baseline to audit is the Corning Museum of Glass interactive-map state reported in the 2017 conservation literature: **179 discrete collections, 68 surviving in museums, schools and individuals**. The earlier 2016 Corning report gave 174 historical collections and 64 current collections. The map was explicitly described as expected to grow.

A present institution enters the census only with current or recent reliable proof that at least one genuine Blaschka marine-invertebrate model survives there. Historical purchase/order evidence alone creates a successor lead, not a current census row.

`baseline_2017_match` remains `unresolved` until the 68 surviving rows of the 2017 map are reconstructed at institution level. A 2026 node is therefore not called a '69th collection' merely because it is absent from the existing deep backend.

## First current-proof seed

Six focal nodes were written to `data/blaschka_census/2026_surviving_census_seed.csv`:

- Universität Leipzig: current university history explicitly states six surviving Blaschka glass models; the collection remains a teaching/study collection.
- Stiftung Friedenstein Gotha: institution states 28 acquired in 1881/82 and seven survive today.
- Universalmuseum Joanneum Graz: current 2024–2026 exhibition explicitly displays Blaschka models; historical annual reports give 19 acquired in 1868. Current exact survivor count is deliberately left blank.
- Naturhistorisches Museum Wien: NHMW publication states 50 Blaschka exhibition objects are owned by NHMW; current Hall 22 display is separately documented.
- University of Vienna Zoological Collection: current collection page states 156 Blaschka models. Other university pages give 145/146, so the count history is retained as a source conflict. The 45-model NHMW display subset is never treated as the University total or as a third collection node.
- Universiteitsmuseum Utrecht: current museum material reports about 80 surviving from 100 ordered in 1882.

## Historical-successor audit

`data/blaschka_census/historical_successor_leads.csv` now keeps obscure school/university/person leads separate from proven current nodes.

Warsaw is the strongest unresolved lead. The present University of Warsaw Faculty of Biology zoological teaching collection explicitly preserves historical material probably descending from the old Zoological Cabinet, includes didactic models, and retains labels reading `Zoołogiczeskij Kabinet` and `Zootom Kab.`. The 1907 volume *Зоотомическая лаборатория, зоотомический кабинет и преподавание анатомических дисциплин...* is confirmed as a 154-page open-access source at the Russian State Library. No current Blaschka object has yet been identified, so Warsaw remains outside the surviving census.

Jeypore/Jaipur and Indian Museum Calcutta were removed from the 'redo the history' queue. The active Blaschka backend already contains deep modules 37 and 38. Jaipur has the 1886–87 Hendley order, 640-Mark model value, Damon mediation, LB 285–286 Trieste–Bombay shipment and 1895 numbered display; Calcutta has catalogue-purchaser, 1883 shipment, Superintendent-order and 1894 glass-model display layers. For both, the remaining census problem is current Blaschka-specific survival proof.

## Immediate next passes

1. Reconstruct the institution-level 2017 surviving-68 list from the Corning map or its underlying data asset.
2. Continue Warsaw with the 1907 cabinet history and present collection inventory/images.
3. Verify the exact ledger identities for Reform-Realschule Hamburg, Gymnasium Leitmeritz, König-Wilhelms-Gymnasium Breslau and the second Leipzig school lead before successor tracing.
4. Keep every loan/display relation distinct from legal/institutional collection identity, especially University of Vienna versus NHMW.
