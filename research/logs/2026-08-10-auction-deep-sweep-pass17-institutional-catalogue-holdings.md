# Auction deep sweep — pass 17: institutional holdings for the scientific/model catalogue family

Date: 2026-08-10

## Question

Pass 16 established high-priority old auction-catalogue families but many catalogue bodies are only offered commercially. Can institutional library holdings convert that problem from “buy isolated scans” into a reproducible catalogue-series route?

## 1. William Andrews Clark Memorial Library, UCLA

The Clark Library's ArchivesSpace catalogue describes a `Collection of auction catalogs`, Z999.A89, spanning 1922–2024 and measuring 144 linear feet / 144 boxes. The collection is open to researchers.

A high-priority exact target is already catalogued:

- Christie's South Kensington
- sale MSI-8351
- 15 April 1999
- `Exceptional Scientific and Engineering Works of Art, Instruments and Models`
- Box 65

Record:
https://public.uclaclark.aspace.cdlib.org/repositories/3/archival_objects/94030

The same Clark top-container catalogue also exposes:

- Christie's South Kensington MSI-9355
- 11 April 2002
- `Exceptional Scientific and Engineering Works of Art Including The Alfred Schett Collection`
- Box 71

These holdings do not provide remote full text in the current public interface, but they establish persistent sale codes and institutional copies.

## 2. Museo Galileo has the stronger series-level route

Museo Galileo's OPAC records a continuing Christie’s South Kensington holding:

`Scientific and engineering works of art, instruments and models` — **1997–2001**.

It also records:

`Scientific, medical and engineering works of art` — **2002–2006**.

This is more valuable than one isolated catalogue because it potentially covers a decade-long run in one specialist scientific-instrument library.

The OPAC separately confirms a held 2005 catalogue whose title explicitly combines the two categories most relevant to this project:

`Exceptional scientific and engineering works of art: including natural history and the William L. Camp Jr spectacle collection` — Christie’s South Kensington, 7 April 2005.

The library also holds the 17 April 1986 Christie's South Kensington scientific-instrument sale including the Zallinger/Brander collection.

OPAC:
https://opac.museogalileo.it/

Guard: `POSSEDUTO` / held does not mean digitized or remotely reproducible. No scan entitlement is inferred.

## 3. The Christie’s target family expands materially

The highest-priority scientific/model sequence now includes:

- 29 May 1997 — Scientific and Engineering Works of Art, Instruments and Models.
- 8 Apr 1998 — Exceptional Scientific and Engineering Works of Art, Instruments and Models.
- 28 May 1998 — Scientific and Engineering Works of Art, Instruments and Models, 223 lots.
- 15 Apr 1999 — Exceptional Scientific and Engineering Works of Art, Instruments and Models, MSI-8351.
- 11 Apr 2002 — Exceptional Scientific and Engineering Works of Art Including The Alfred Schett Collection, MSI-9355.
- 10 Apr 2003 — Exceptional Scientific & Engineering Works of Art, 59 lots.
- 8 Apr 2004 — Exceptional Scientific and Engineering Works of Art, 62 lots.
- 7 Apr 2005 — Exceptional Scientific and Engineering Works of Art, **including Natural History**, William L. Camp Jr spectacle collection.
- 29 Jun 2005 — Scientific and Medical Works of Art and Natural History, 306 lots.
- 19 Oct 2005 — Scientific, Medical and Engineering Works of Art, Instruments and Natural History.
- 8 Apr 2009 — Travel, Science & Natural History, 239 lots.

The 2005 catalogue titles move to A+ priority because they explicitly combine scientific works/models and natural history—the exact category boundary in which a provenance-lost Blaschka object could sit.

## 4. Surviving Christie’s lot pages are another partial route

Christie's public site still exposes individual historical lot pages from these sale families. For example, a historical astrolabe record cites the 8 April 1998 `Exceptional Scientific and Engineering Works of Art, Instruments and Models` catalogue and its lot number.

This proves that part of the old lot-level archive survives online even when the sale browse page is difficult to crawl.

A targeted maker-name search across those historical scientific/model pages did **not** recover an old physical Blaschka result in this pass. That remains a bounded search-engine negative. It is not equivalent to screening every lot.

## 5. Cost strategy changes

Before buying any catalogue scan:

1. use Museo Galileo's continuing-series holdings to establish issue coverage;
2. search UK institutional catalogues for the same continuing titles;
3. use UCLA Clark sale codes/box records as stable identifiers;
4. search surviving Christie’s lot pages by object class and taxon;
5. only obtain a commercial scan where the institutional/online routes remain blocked and the sale is already high-priority.

This avoids paying for dozens of plausible but low-yield catalogues.

## 6. Structured output

Created:
`../../auctions/auction-catalogue-library-holdings-router.json`

Canonical auction count remains unchanged.

## 7. Immediate next screening sequence

1. Christie’s 29 May 1997.
2. Christie’s 8 Apr 1998.
3. Christie’s 15 Apr 1999 / MSI-8351.
4. Christie’s 7 Apr 2005, including Natural History.
5. Christie’s 29 Jun 2005, Scientific and Medical Works of Art and Natural History.

For each sale, first search the surviving lot archive with object-class terms; if that remains incomplete, route to a complete catalogue scan and run the entire text.

README is synchronized after this pass. Pages does not need another update: pass 15 already added a new public scope/exclusion note, while this pass is catalogue-access infrastructure.
