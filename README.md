# Blachka_corpus

Working repository for the Blaschka / nineteenth-century microscope-slide backend experiments.

## Current microscope-slide survey

- Spatial scope: global.
- Historical scope: **1800-1899**.
- Discovery layer: **293 collection/subcollection/batch/database entries**.
- Strict post-lock batches `07K`-`07AJ`: **142 entries with explicit nineteenth-century object, maker, set, use, trade, collection, or provenance evidence**.
- Earlier discovery rows remain auditable and may be classified `CORE_19C`, `POSSIBLE_19C`, `MODERN_COMPARATOR`, or `OUT_OF_SCOPE`.

The survey works backwards from surviving slides, cabinets, boxes, sets and current collection records, while the event corpus works forwards from newspapers, microscopical journals, archives, catalogues and correspondence. The two sides are intended to cross-check ownership/collection attribution, preparation, sale, exchange, gift, lending, transfer, use, exhibition, damage, relabelling and other historical events.

Core rule: current museum custody is not historical ownership. Preserve source relationship phrases such as `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `sold by`, `distributed by`, `donated by`, `lent by`, `held by`, `received by`, `exchanged by`, and `transferred from` as distinct claims.

## Architecture

- `data/survey/07A_Global_Microscope_Slide_Collections_Survey.csv`: canonical survey input at workflow runtime.
- `data/survey/07B_*` onward: modular discovery/strict expansion batches.
- `data/survey/site_adapters.json` + expansions: institution/site-specific metadata adapters.
- `data/survey/harvest_families_v1.json` + expansions: shared extraction contracts.
- `docs/19C_SCOPE_RULES.md`: temporal-scope rule.
- `scripts/prepare_survey_inputs.py`: merge modular survey and adapter inputs.
- `scripts/validate_survey.py`: validate schema, media, provenance relationships and adapter registry.
- `scripts/audit_19c_scope.py`: classify discovery rows by nineteenth-century status.
- `scripts/apply_19c_scope.py`: restrict runtime survey to `CORE_19C` before active harvesting.
- `scripts/build_harvest_batches.py`: group active entries by harvest family.
- `scripts/harvest_catalogue.py`: dry-run-first metadata harvester.

The crawler layer is deliberately not universal. Known sites get small adapters, while recurring systems share harvest families. Metadata comes first; the workflow does not bulk-download specimen images or bypass login, paywalls, anti-bot systems, robots restrictions, or access controls.

Especially strong strict-19C nodes already include commercial maker sets (Wheeler, Cole, Norman, Collins, Enock, Dancer, Pritchard), household/workshop cabinets (Herschel, Elcock, Sullivant), instrument-plus-slide assemblages (Lankester, Dancer/Nachet, His embryograph), published diatom replicate sets (Cleve & Möller, Eulenstein, H. L. Smith, Van Heurck & Grunow), Bailey and Boston Society collections at Farlow, Phoebus's Cinchona slide sets distributed through the Dutch colonial administration, Darwin and Balfour slides at Cambridge, W.B. Carpenter and Percy Sladen collections at RAMM, Virchow and Pacini pathological/histological preparations, Golgi and Cajal histology, Sorby's experimental glass mounts, Ross's malaria slides, the NSW Geological Survey thin-section catalogue, Brady and Parker foraminifera networks, Ferdinand I's personal microscopic preparations in Vienna, and the Williamson and Carpenter Eozoon holdings at NHM London. The latest global expansions add the 510-slide Copenhagen desmid collections, the Pantocsek wartime-remnant collection in Budapest, the historical German-University algae-slide database in Prague, Ohio State's 6,700-slide diatom cabinets, two institutional Mary Ann Booth custody nodes, three bounded ANSP diatom collections, Van Heurck's transferred collection at Meise, the NHM London diatom Data Portal layer, the 1880-1920 Technological Museum botanical-slide batch in Sydney, William Henry Symes's Canterbury box, the approximately 2,000-slide Hartshorn-Bolles teaching cabinet in San Diego, Manchester's 681-slide Gibson cabinet, the long-lived Bell-Pettigrew St Andrews zoology slide hierarchy, Haeckel's Messina study boxes and NHM distributed teaching/plankton collections, Castracane's 143-slide Challenger diatom collection, and Kitton's 100-slide Norfolk Diatoms set at Farlow. The 07AF layer adds Ypelaar's c.1800 800-preparation Van Staphorst cabinet at Rijksmuseum Boerhaave and a 24-slide c.1808-11 Yale set, the RCSEd collection-formation layer beginning with preparations dated 1850, a 19-slide British-Australian box at Powerhouse, the Francis Walker foundation layer of the NHM Thysanoptera slide collection, and the Albert Mann diatom corpus with explicit 1890s mounted-specimen roots and a later 8,000-slide accession state. Exact duplicate Wheeler and Cole rows discovered during the 07AF audit were removed because those bounded maker cases were already present in 07K. The 07AG layer adds Mantell's ten-slide 1820s-1840s case now in New Zealand custody, a late-Victorian W. Watson & Sons slide cabinet at Birr Castle whose 304-slot capacity is explicitly kept separate from extant count, and P. T. Cleve's original/personal diatom-preparation corpus at the Swedish Museum of Natural History, kept distinct from replicated Cleve & Möller sets. The 07AH layer adds Oxford's 115-slide palaeobotanical teaching collection with 113 notebook-linked slides and documented losses, a newly located mixed MNCN arthropod preparation batch with an explicit late-nineteenth-century layer, the MNCN historical sponge corpus in which more than 90% of roughly 350 late-nineteenth-century samples are microscopic preparations, the IES San Isidro nineteenth-century teaching-preparation collection, and item-level W. M. Bale hydroid type microslides in Museums Victoria dated and identified from 1882 through 1894. The 07AI layer adds Enrico Filippo Trois's long-lived comparative-anatomy microscope-slide corpus in Venice, Paul Gervais's surviving 1870s fish-skeleton histology at MNHN Paris, the 1897 Krantz 250-position petrographic teaching set at Coimbra with 248 current survivors, Franz Bauer's nine 1898 ichthyosaur tooth sections rediscovered in Zurich after their Munich parent collection was believed lost in the Second World War, Achille Costa's approximately 1,000 mite microscopic preparations at Portici, and the Saint Petersburg University Zootomy Cabinet microscopic-preparation collection whose educational/scientific formation is explicitly associated with Vladimir Shevyakov's leadership from 1896. The 07AJ layer adds the 12,541-preparation Julien Marc Deby diatom acquisition at NHM London as a bounded 1893 historical state with nested collection guardrails; Carlo Giacomini's Turin nervous-system and embryo histology linked to a purpose-built histotheque, special large-section microscope and institute archive; the University of Milan veterinary histological collection explicitly formed from the mid-nineteenth century; the surviving incomplete Perroncito nineteenth-century parasite collection and former Pathological Anatomy Institute histological material at Turin; Siena's Gabbrielli-donated microscopic preparations and approximately 100 Barth-of-Leipzig histological preparations preserved within a current museum that still displays historical microscopical preparations and period histotheques; and Oscar Schmidt's directly counted 497 surviving sponge spicule/fibre slides at Strasbourg, a working collection that can be cross-linked to envelopes, dry specimens, type status and distributed slides in London, Paris and Copenhagen.

## Harvest families

- `institution_collection_record`: one authoritative collection page; collection-scale metadata only.
- `collection_page_plus_search_portal`: collection page plus a bounded linked item/search portal.
- `specialized_collection_catalogue`: bounded specialist catalogues preserving set/subcollection hierarchy.
- `dataset_api_or_dwca`: official APIs or Darwin Core exports filtered by preparation/material fields.
- `archive_or_finding_aid_record`: finding aids, creators, extent, boxes/drawers, former ownership and container lists.
- `literature_or_project_evidence`: collection papers, programme reports, legal records, institutional stories or curatorial pages used as evidence without pretending they are object registers.
- `item_catalogue_json_or_iiif`: item metadata JSON or IIIF manifests only; no image-tile harvesting.
- `manual_or_endpoint_discovery`: candidates retained until a stable endpoint is found.

Counts from historical reports remain dated states and are not projected into current holdings. Aggregate specimen, species, locality, index-card, pinned-specimen, wet-collection, negative, or legacy-object totals are never silently converted into slide counts.
