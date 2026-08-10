# Auction deep sweep — pass 16: historical catalogue families beyond maker-name indexing

Date: 2026-08-10

## Why this pass

Direct maker-name searching is now producing both diminishing returns and false-positive contamination. The next useful layer is not another query for `Blaschka auction`; it is to map old auction-catalogue families in which a zoological glass model could have been filed under object class, scientific apparatus, natural history or decorative glass without a searchable maker name.

This pass maps catalogue families only. It does **not** claim that any listed sale contains a Blaschka lot.

## 1. Christie’s scientific / medical / engineering model sales — priority A

The Catalog Star exposes a long South Kensington sequence whose titles are unusually relevant because several explicitly include **models** and broad scientific apparatus.

Representative targets:

- 5 Apr 1979 — `Sale of Scientific Instruments, Domestic and Other Equipment`.
- 24 Nov 1983 — `Scientific Instruments, Watches and Clocks`, 208 lots, 40 pp.
- 4 Jul 1991 — `Scientific and Medical Instruments, Models, Tools and Other Apparatus`.
- 3 Mar 1994 — `Scientific and Medical Instruments, Tools, Ornamental Turning and Other Apparatus`.
- 24 Aug 1995 — `Medical and Scientific Instruments`, 256 lots.
- 4 Oct 1995 — `Fine Scientific Instruments`, 160 lots, 49 pp.
- 16 Nov 1995 — `Scientific and Medical Instruments, Tools, Ornamental Turning and Other Apparatus`.
- 18 Jul 1996 — `Scientific Instruments, Tools and Other Apparatus`, 234 lots.
- 29 May 1997 — `Scientific and Engineering Works of Art, Instruments and Models`, 255 lots.
- 13 Nov 1997 — `Scientific Instruments, Tools and Other Apparatus`, 308 lots.

The 1991 and 1997 `Models` titles go to the front of the queue.

## 2. Christie’s Natural History sales — priority A

Catalogue-trade metadata establishes a late-1990s/early-2000s Natural History family:

- 19 May 1998 — 160 lots.
- 11 Nov 1998 — 208 lots.
- 19 Oct 1999 — 107 lots.
- 4 Jun 2001 — Natural History.

The 11 Nov 1998 catalogue is independently visible in multiple antiquarian-book listings, confirming the sale identity and a substantial illustrated catalogue. Public web searches of its title do not expose a Blaschka hit, but that is not a complete lot-text screen.

## 3. Sotheby’s English / Continental / European glass — priority B

The Catalog Star and Isle of Wight Museum of Glass together expose a dense long-running family from the 1960s onward. Representative examples include:

- 9 Jul 1962 — Fine English and Continental Glass and French Paperweights, 194 lots.
- 17 May 1965 — English & Continental Glass & French Paperweights, 208 lots.
- 25 Apr 1966 — English and Continental Glass including Thomas Webb & Sons.
- 2 Jun 1969 — Continental Glass, 142 lots.
- 1 Jun 1970 — A Collection of English and Continental Glass, 224 lots.
- 14 Oct 1974 — Fine English and Continental Glass, 213 lots.
- 14 Jul 1975 — Fine English and Continental Glass, 331 lots.
- 20 Dec 1976 — Glass Paperweights and English and Continental Glass, 253 lots.
- 17 Apr 1978 — English and Continental Glass, 184 lots.
- 12 Feb 1979 — English and Continental Glass, 205 lots.
- 30 Jun 1980 — English and Continental Glass, 233 lots.
- 26 May 1981 — English and Continental Glass, 207 lots.
- 1 Feb 1982 — English Glass, Continental Glass and Paperweights, 341 lots.
- 18 Jul 1983 — English, Continental Glass and Paperweights, 388 lots.
- 12 Nov 1984 — English and Continental Glass and Paperweights, 569 lots.
- 24 Nov 1986 — English & Continental Glass and Paperweights, 484 lots.
- 18 Jul 1989 — Later English & Continental Ceramics & Glass, 439 lots.
- 7 May 2002 — British and Continental Glass, 308 lots.

This family is lower-yield per catalogue than explicit scientific-model sales, but it is important because provenance-lost Blaschkas can be catalogued simply as nineteenth-century glass.

## 4. Phillips scientific-instrument sales — priority A

Mapped targets:

- 19 Nov 1980 — Scientific Instruments also Barometers, 104 lots.
- 10 Sep 1986 — Scientific Instruments, 251 lots.
- 16 Nov 1988 — Scientific Instruments, 198 lots.
- 26 Sep 1995 — Clocks and Watches including Scientific Instruments and Barometers, 296 lots.

No maker-name indexed physical Blaschka lot was recovered from public search, so these remain scan/OCR targets rather than negative catalogues.

## 5. Bonhams science / technology / marine — priority A

Particularly useful catalogue titles include:

- 20 May 1989 — `Science & Technology for the Collector`.
- 23 Apr 1992 — scientific instruments / mechanical music / cameras, 217 lots.
- 12 Mar 1993 — scientific instruments / mechanical music / cameras, 318 lots.
- 7 Nov 1996 — scientific instruments / mechanical music / cameras and photographs, 299 lots.
- 18 Mar 1998 — relics, scientific instruments and barometers, mechanical music, cameras and photographs, 233 lots.
- 21 Jul 1998 — scientific and medical instruments / barometers / mechanical music / cameras.
- 1 Mar 2000 — aeronautics, scientific and medical instruments, mechanical music, cameras and photographs, 457 lots.
- 28 May 2002 — Fine Clocks, Scientific Instruments and Barometers, 204 lots.
- 25 Feb 2004 — **Science and Marine**, 141 lots.
- 3 Jun 2004 — Morse to Marconi and Scientific Instruments, 248 lots.

`Science & Technology for the Collector` and `Science and Marine` are especially attractive because the category boundary is broad enough for museum/teaching objects.

## 6. Access problem

The Catalog Star offers paid scan services for many catalogues; example listings show full-catalogue scans and individual-lot scans. That proves the catalogues survive and gives exact sale metadata, but it does not make their lot text publicly searchable.

Zero-cost exact-title searches on the open web and Internet Archive did not recover free scans for several sampled high-priority sales in this pass. That is a bounded discovery result only.

The search order should remain:

1. exact sale title/date + Blaschka spelling variants;
2. exact sale title/date + taxa/model-number syntax;
3. institutional library catalogue and open scan discovery;
4. only then consider obtaining a scan for a sale already prioritized by provenance evidence.

## 7. Full-catalogue screening rule

Once a catalogue scan is obtained, run the **entire catalogue**. Do not stop at the first hit.

Search vocabulary should include:

`Blaschka / Blashka / Blauschka / Blaschke / Dresden / Blaschka's Modelle / L. No. / Nr. / glass model / zoological model / anatomical model / natural history model / teaching model / jellyfish / sea anemone / coral / hydroid / mollusc / slug / worm`.

A complete-scan negative can then be reported at catalogue level. Metadata-only searches cannot.

## 8. Backend effect

Created:
`../../auctions/auction-historical-catalogue-family-worklist.json`

No canonical lot added. No existing status changed.

## Immediate screening order

1. Christie’s, 29 May 1997, `Scientific and Engineering Works of Art, Instruments and Models`.
2. Christie’s, 4 Jul 1991, `Scientific and Medical Instruments, Models, Tools and Other Apparatus`.
3. Bonhams, 20 May 1989, `Science & Technology for the Collector`.
4. Bonhams, 25 Feb 2004, `Science and Marine`.
5. Christie’s, 11 Nov 1998, `Natural History`.
6. Christie’s, 19 May 1998, `Natural History`.
7. Phillips, 10 Sep 1986, `Scientific Instruments`.
8. Phillips, 16 Nov 1988, `Scientific Instruments`.
9. Sotheby’s glass run, initially 1978–1986.

README is synchronized after this pass. The public page receives only a brief scope/exclusion note from pass 15; the catalogue-family worklist itself remains backend methodology until a real lot is recovered.
