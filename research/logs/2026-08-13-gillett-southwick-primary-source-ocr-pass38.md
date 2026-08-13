# Gillett–Southwick primary-source OCR boundary — pass 38 — 13 August 2026

## Purpose

Pass 37 located a bounded Harvard/BHL counterpart archive but left the Gillett letters and invoices at metadata level. This pass moves one step down to the digitized primary-source volume itself and establishes the first usable page/OCR boundary for the Southwick material.

## Result

The Internet Archive derivative for Harvard Botany Libraries' `Asa Gray correspondence. Senders Ga-Go` (`asagraycorrespo00grayi`) exposes a full ABBYY/DjVu text stream. Within that OCR, the Gillett/Southwick block can now be bounded approximately between text-stream lines **9919 and 10620**. At about line 10623 a different correspondent begins with the printed business card of F. H. Gilson, music typographer, Boston, so the preceding block is a finite Gillett unit rather than an unbounded surname search.

Across the Gillett block the OCR repeatedly captures printed stationery:

- `Southwick Nurseries`;
- `(Gillett & Horsford)`;
- `CABLE ADDRESS: HORSFORD, SOUTHWICK`;
- an `ESTABLISHED` line on a later sheet.

This materially upgrades the source context. At least several letters in the BHL Gillett sequence were written on **Southwick Nurseries / Gillett & Horsford business stationery**, not merely catalogued later under a nursery proprietor's name. The business context of the two separately catalogued invoices is therefore structurally plausible in the primary source itself.

This still does **not** prove that any of these letters or invoices concern Blaschka, Goodale's supply work, Hosterwitz, Fritillaria, Cypripedium or a transatlantic shipment.

## 1. Sequence alignment retained from BHL metadata

The BHL table of contents gives the following order inside this Southwick/Gillett unit:

1. Edward Gillett to Sereno Watson, 24 July 1891, page 1;
2. same, page 2;
3. 22 August 1891;
4. 6 October 1891;
5. 9 November 1891, enclosed invoice;
6. 9 November 1891, letter;
7. 20 November 1891;
8. 11 November 1891, invoice.

The OCR block now gives a finite search window in which those eight page objects should be mapped to Internet Archive leaf/page indices.

## 2. What the OCR can and cannot currently do

The printed commercial headers are highly legible in machine OCR. The handwritten bodies are much poorer. Targeted text searches inside the full OCR did not recover reliable machine-readable hits for `Fritillaria` or `Gillett`; exact handwritten dates likewise do not provide a dependable way to split the documents.

Therefore OCR absence is not negative historical evidence. In particular:

- no OCR `Fritillaria` hit does not show that the taxon is absent from the letters;
- no OCR `Blaschka` hit would not safely reject the supply hypothesis;
- the two invoices cannot yet be read transactionally from the current text stream.

The next task is **page/leaf mapping followed by image-level transcription**, not broader keyword search.

## 3. New evidential status

Previous status after pass 37:

`digitized correspondence cluster + invoice metadata; content unread`.

Current status after pass 38:

`digitized correspondence cluster + invoice metadata + primary-source OCR block bounded + repeated Southwick Nurseries/Gillett & Horsford business stationery verified; handwritten transaction content unresolved`.

This is a real upgrade because it fixes the archival object and business setting while preserving the transaction-level guard.

## 4. Immediate technical retrieval plan

1. Use the Internet Archive file list / `scandata.xml` / `djvu.xml` derivative to map OCR objects or line blocks to scan/leaf numbers.
2. Crosswalk those leaves to the BHL part order above.
3. Prioritize image transcription of:
   - 24 July 1891 two-page letter;
   - 9 November enclosed invoice;
   - 11 November invoice;
   - 6 October and 20 November letters as context.
4. Extract only fields visible in the images: taxa, quantities, prices, recipient/customer, destination, packing/carriage/postage, payment, annotations and any Goodale/Harvard/Germany references.
5. Treat the 19 July 1891 Blaschka Fritillaria letter as a comparison anchor only after the July 24 Gillett letter has been transcribed.

## 5. Interpretation guard

The repeated commercial letterhead makes the cluster more relevant to a history of nursery procurement, but **commercial stationery is not transaction identity**. Watson may still have been discussing his own purchases, ordinary herbarium exchange or unrelated nursery matters. The hypothesis `Goodale ↔ Watson ↔ Gillett ↔ Hosterwitz` remains `testable_not_proven` until content-level evidence connects the actors or goods.

## Working conclusion

The source problem has narrowed again. We no longer need to search for the Gillett correspondence. We know where the complete Southwick block sits in the digitized primary-source stream and where it ends. The next research gain will come from reconstructing its page architecture and reading the handwriting/invoices at image level.