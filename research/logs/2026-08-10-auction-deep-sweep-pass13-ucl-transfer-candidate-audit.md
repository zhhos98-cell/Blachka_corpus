# Auction deep sweep — pass 13: UCL Science Museum transfer candidate audit

Date: 2026-08-10

## Question

UCL is one of the two currently named institutional recipients in the Science Museum 1925–1927 Blaschka dispersal, but its current public Blaschka records mix an older Lankester layer with the later transfer. Can the publicly named accessions be partitioned more tightly without guessing from taxon or model type?

## 1. Collection-level rule remains secure

UCL's current Blaschka highlight states:

- twenty Blaschka models appear in an 1890 printed museum catalogue compiled by E. Ray Lankester;
- most Lankester-era models remain attached to original card labels;
- the remaining models entered from the Science Museum when it deaccessioned its glass-model collection between 1925 and 1927;
- the Science Museum models had originally been ordered in 1877;
- UCL was one of seven institutional recipients.

Source: https://www.ucl.ac.uk/museums-collections/grant-museum-zoology/highlights/blaschka-glass-models-invertebrates

UCL also states that Collections Online is ongoing / not comprehensive. Missing public records therefore remain weak negatives.

## 2. Eight public accession anchors can now be partitioned into 3 + 1 + 4

The previous UCL backend held eight accession-numbered public anchors.

### Explicit Lankester layer — three objects

Current UCL Collections Online explicitly places:

- LDUCZ-P130, *Clione limacina*;
- LDUCZ-P161, *Ercolania funerea*;
- LDUCZ-P191, *Arion ater*;

in `Blaschka Glass Model Collection, Lankester 1890 Grant Museum Catalogue`.

These are not Science Museum transfer candidates.

### Pre-transfer UCL custody — one object

LDUCZ-C182, *Haliclystus auricula*, was previously left provenance-unassigned because its current public page does not expose the acquisition layer. UCL's own 2017 feature, however, identifies this exact accession in a **1911 Practical Zoology student notebook** and states that the surviving model was produced around 1875.

Source: https://blogs.ucl.ac.uk/museums/2017/04/07/specimen-of-the-week-286-the-notebook-models/

Therefore C182 was already in UCL teaching use at least fourteen years before the Science Museum deaccession window opened. It can be **excluded from the 1925–1927 transfer candidate population**.

Guard: this does not automatically prove that C182 was one of the twenty entries in Lankester's 1890 catalogue. It establishes pre-transfer UCL custody.

### Still unresolved — four objects

- LDUCZ-P202, *Limax arborum*;
- LDUCZ-P196, *Arianta arbustorum*;
- LDUCZ-C373, *Actinia equina*;
- LDUCZ-S73, female sea cucumber, taxon unresolved.

UCL's 2018 article supplies accessions and descriptions for these objects but no object-level acquisition layer. Its general statement that the collection's models may have been ordered by Lankester is not sufficient to assign any of the four individually.

Source: https://blogs.ucl.ac.uk/researchers-in-museums/2018/04/24/of-gastropods-and-glass-the-grant-museums-blaschka-models-of-invertebrates/

## 3. The transfer candidate pool has narrowed

Previous public state:

- 3 explicitly Lankester;
- 5 unassigned;
- 0 explicitly Science Museum.

After this pass:

- 3 explicitly Lankester;
- 1 independently confirmed at UCL before 1925–27;
- 4 still unresolved;
- 0 explicitly Science Museum.

This is a useful negative/partition result. It does not identify a transfer object, but it reduces the public candidate set by 20% without relying on model-type inference.

## 4. The 1890 catalogue is now the shortest next route

A separate UCL object-history article describes the `1890 Lankester Grant Museum Catalogue` as the museum's **earliest accession register**. UCL also cautions elsewhere that Lankester's catalogue included labels for specimens he wanted to acquire as well as things that actually existed.

Source for earliest-accession-register wording:
https://blogs.ucl.ac.uk/museums/2017/05/12/specimen-of-the-week-291-leech-embryo-models/

The next useful action is therefore to recover the twenty Blaschka entries from that register and compare their historical names / catalogue numbers against P202, P196, C373 and S73. A catalogue-name hit would be strong routing evidence but still needs object-level corroboration because of UCL's own catalogue caveat.

## 5. A lost UCL inventory remains a high-value target

UCL's 2015 *Actinia equina* feature cites:

Sarah E. Parker, `Blaschka Glass Models at the Grant Museum`, formerly at:
`http://www.ucl.ac.uk/museums/zoology/documents/GMZ_Blaschkas`

The live payload is no longer available through the current URL and no indexed copy was recovered in this pass. Because the document predates the current public highlight and was used by Grant Museum staff as a reference, it may preserve precisely the model list / provenance distinctions / old labels that are missing from the current indexed catalogue.

## 6. Model-type evidence stays separate

Existing candidate model types remain useful for future register matching:

- P202 *Limax arborum* → Blaschka 529;
- C373 *Actinia equina* → Blaschka 22;
- C182 *Haliclystus auricula* → Blaschka 126;
- P191 *Arion ater* → candidate 510.

But P191 is the control case proving why model-type equivalence cannot be converted into provenance: UCL P191 is explicitly Lankester-layer, while Cardiff has a separate Science-Museum-transfer object of the same candidate commercial design.

## 7. Backend effect

New structured output:

`../../auctions/ucl-science-museum-transfer-candidate-audit.json`

Canonical auction count remains unchanged.

## 8. Next run

1. Recover the twenty Blaschka entries in the 1890 Lankester register.
2. Recover Sarah Parker's legacy `GMZ_Blaschkas` document by UCL archive / web archive / direct documentation request.
3. Request or recover a current Grant Museum Blaschka export including `Collection`, `Alternative Number`, old labels and previous-institution numbers.
4. Ask specifically for any `1877-xxx` or `1888-xx` Science Museum numbers attached to current UCL accessions.
5. Cross those numbers against the `360/361` and `380/381` Science Museum register neighborhoods already recovered in pass 12.

Pages was updated in pass 12 with the new Science Museum register-neighborhood finding. This pass does not add another public page change because it narrows a backend candidate set but does not yet recover an object-level Science Museum → UCL identifier bridge.
