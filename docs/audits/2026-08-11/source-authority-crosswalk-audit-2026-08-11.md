# Source authority / locator crosswalk audit · 11 August 2026

This read-only crosswalk turns exact public locators into authority nodes and records which current Source/Auction registers point to each node. A node is an access/source identity, not a merged evidence record.

- Input JSON files: **50**.
- Exact locator nodes: **196**.
- Locator nodes used by more than one file: **58**.
- Locator nodes shared across Sources and Auctions: **1**.
- Distinct hosts: **103**.

## Highest-connectivity locators

- **6 files / 6 occurrences** — `https://www.christies.com/en/lot/lot-6188456` — roles: access_locator, evidence_source.
- **5 files / 6 occurrences** — `https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates` — roles: evidence_source, locator.
- **5 files / 5 occurrences** — `https://archivalcollections.drexel.edu/repositories/3/resources/842` — roles: evidence_source, locator.
- **5 files / 5 occurrences** — `https://www.christies.com/en/lot/lot-6188457` — roles: access_locator, evidence_source.
- **5 files / 5 occurrences** — `https://www.christies.com/lot/lot-6188458` — roles: access_locator, evidence_source.
- **4 files / 4 occurrences** — `https://www.gazette-drouot.com/lots/28984163-leopold-and-rudolf-blaschka----` — roles: evidence_source.
- **4 files / 4 occurrences** — `https://www.ucd.ie/archives/collections/universityarchives/items/collectionname235376en.html` — roles: archive_target, locator.
- **3 files / 6 occurrences** — `https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8` — roles: archive_locator, locator.
- **3 files / 6 occurrences** — `https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&src=CalmView.Persons` — roles: locator.
- **3 files / 5 occurrences** — `https://archivalcollections.library.mcgill.ca/index.php/damon-robert` — roles: evidence_source, locator.
- **3 files / 4 occurrences** — `https://blog.cmog.org/2016/modern-day-cabinet-curiosity` — roles: evidence_source, future_retrieval.
- **3 files / 3 occurrences** — `https://collections.tepapa.govt.nz/object/293561` — roles: locator.
- **3 files / 3 occurrences** — `https://data.library.amnh.org/archives/repositories/3/archival_objects/6932` — roles: locator.
- **3 files / 3 occurrences** — `https://data.library.amnh.org/archives/repositories/3/archival_objects/6934` — roles: locator.
- **3 files / 3 occurrences** — `https://hollisarchives.lib.harvard.edu/catalog/ecb00006` — roles: archive_locator, locator.

## Highest-connectivity hosts

- `www.christies.com` — **7 files**, 6 exact locators, 19 occurrences.
- `www.museumfuernaturkunde.berlin` — **6 files**, 5 exact locators, 11 occurrences.
- `archivalcollections.drexel.edu` — **6 files**, 2 exact locators, 6 occurrences.
- `www.kunstunddesign-auktionen.de` — **5 files**, 8 exact locators, 15 occurrences.
- `siarchives.si.edu` — **5 files**, 5 exact locators, 8 occurrences.
- `blog.cmog.org` — **5 files**, 4 exact locators, 8 occurrences.
- `www.nhm.ac.uk` — **5 files**, 3 exact locators, 8 occurrences.
- `www.ucl.ac.uk` — **5 files**, 3 exact locators, 8 occurrences.
- `www.biodiversitylibrary.org` — **4 files**, 5 exact locators, 7 occurrences.
- `www.gazette-drouot.com` — **4 files**, 3 exact locators, 6 occurrences.
- `archivalcollections.library.mcgill.ca` — **4 files**, 2 exact locators, 6 occurrences.
- `simurg.csic.es` — **4 files**, 2 exact locators, 4 occurrences.
- `www.arcinsys.niedersachsen.de` — **4 files**, 2 exact locators, 4 occurrences.
- `www.ucd.ie` — **4 files**, 1 exact locators, 4 occurrences.
- `www.sammlungen.hu-berlin.de` — **3 files**, 10 exact locators, 12 occurrences.

## Use rule

The crosswalk is suitable for source reuse analysis, register navigation, provenance routing, and later UI projection. It must not drive record deletion, evidence flattening, or fuzzy URL consolidation. Two different URLs on the same host remain different nodes unless a later source-level review proves equivalence.

Machine-readable detail: `../../../schemas/generated/source-authority-crosswalk.json`.
