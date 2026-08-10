# 2026-08-10 — Map census sync, Corning correction, and Paris audit

## Result

The public `map/map-data.json` had drifted behind the canonical current-holder census. It contained 51 mapped endpoints, but `research/data/current_holders.csv` had already reached 66 audit rows: 64 secure/secure-recent current holders, one Görlitz recheck candidate, and one historical-not-current Queen’s Belfast tombstone. The difference was not a single Corning omission.

A census supplement, `map/map-data-census.json`, now upserts the missing current-holder rows over the earlier map data at runtime. The merged map contains 71 spatial endpoints. This total is deliberately broader than the 64 secure current-holder census because the map also retains a few historically important modern successor/custody-question endpoints and Harvard’s botanical collection.

## Secure/current holder rows missing from the 51-point map

Nineteen secure or secure-recent census holders were absent:

- Humboldt-Universität zu Berlin – Zoologische Lehrsammlung
- Stiftung Friedenstein Gotha
- Universalmuseum Joanneum – Naturkundemuseum, Graz
- Universität Leipzig – Zoologische Sammlung
- University of Vienna – Zoological Collection
- Derby Museum and Art Gallery
- University of Wisconsin–Madison Zoological Museum
- Universiteitsmuseum Utrecht
- University of Aberdeen – Zoology Museum
- Manchester Museum
- Carnegie Museum of Natural History
- Corning Museum of Glass
- Museum of Science, Boston
- Liceo Giovanni Prati, Trento
- Liceo Ugo Foscolo, Pavia
- Università di Firenze – Museo di Storia Naturale / La Specola (Zoologia)
- University of Glasgow – Hunterian Zoology Museum
- Leicester Museum & Art Gallery
- Guernsey Museums and Galleries – Guernsey Museum at Candie

Senckenberg Museum für Naturkunde Görlitz was also absent. It remains a `partial` map point rather than a secure census holder because the most recent institutional-grade proof still needs refreshing: a 2016 exhibition proves at least one Blaschka object in Senckenberg custody, while secondary sources report three survivors.

## Corning

Corning Museum of Glass must be treated as a current holder in its own right, not merely as the archive/conservation location for Cornell. CMoG object records include accessioned Blaschka invertebrate models and studio-retained material acquired in the 1993 division of the remaining Blaschka studio contents. Cornell-owned models held, photographed, conserved, or historically placed at Corning remain a separate loan/custody layer and are not folded into the CMoG-owned collection.

This distinction is now explicit in the map point. The map therefore contains both Cornell University and Corning Museum of Glass.

## Queen’s Belfast correction

The old map incorrectly labelled Queen’s University Belfast as a documented current holding and stated that the historical material survived in the university collection network. The current-holder audit had already rejected that claim. The historical order remains well documented, but both the 2008 and 2016 Irish surveys reported no known surviving Queen’s Blaschka collection.

The map now retains Belfast only as an `open` historical/survival question. It is not counted as a secure current holder.

## Paris audit

Paris was tested separately rather than inferred from institutional prestige.

Current web and repository searches were run against the Muséum national d’Histoire naturelle, Sorbonne/Paris university heritage material, Paris museum collection portals, French national heritage indexing, the project backend, GitHub research files, and the Corning-era census logic. No institution-grade evidence of a current Paris-owned Blaschka invertebrate collection was recovered.

Two stronger controls point the same way:

1. The project’s reconstruction of Corning’s 2016 country chart gives France exactly one current collection.
2. The renovated Musée Zoologique de Strasbourg currently describes its 58-model ensemble as unique in France and presents all 58 models together.

Paris nevertheless has real Blaschka history. The project archive contains the 1900 Paris Exposition chain for Harvard’s Glass Flowers: Goodale/United States Commission correspondence records the models reaching Paris, the exhibition, and the packing arrangements for their return. This is a temporary exhibition/circulation event involving Harvard objects, not a Paris collection.

The same distinction should govern future mapping. Paris belongs naturally in a later historical-circulation or exhibition layer if that layer is activated. It should not be inserted into the present `Where the collections are now` layer without accession, ownership, current-custody, or other object-level holder evidence.

## Map rule clarified

The public map method note now states that a temporary exhibition venue does not become a collection node unless the host institution holds Blaschka material in its own right. This also guards against creating false nodes from long-term or temporary loans elsewhere.

## Files changed

- `map/map-data-census.json` — census additions/corrections, including Corning and the Queen’s override
- `map/map.js` — merges the original endpoint layer with the census supplement by stable map ID
- `map/index.html` — cache-bust plus clarified exhibition/ownership rule and data-file note

The canonical holder audit remains `research/data/current_holders.csv`; the map files are a public spatial projection of that research state, not a replacement for it.
