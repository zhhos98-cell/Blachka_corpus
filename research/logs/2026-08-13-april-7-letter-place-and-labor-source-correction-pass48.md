# 7 April 1892 letter: place correction and retrospective labour evidence — pass 48 — 13 August 2026

## Purpose

The master source table currently describes `HARV-007` as `Rudolf Blaschka to Leopold and Karolina Blaschka, 7 April 1892`, place `Jamaica`, and uses it for the evidence that Rudolf sometimes worked/wrote until about 11:30 or 11:45 at night. A direct sequence re-read of the 017 archive shows that the date is plausible but the **place and evidential situation need correction**.

## Result

The relevant English translation is `BLA-D00736–38 / 017:90–92`. Rudolf begins:

- he arrived in Cambridge `the afternoon of the day before yesterday`;
- he has just received a parental letter dated 25 March;
- he retrospectively reconstructs the Jamaica voyage and correspondence;
- in that retrospective paragraph he says daytime drawing work in Jamaica was so heavy that, when writing to his parents, he sometimes had to stay up until **11:30 or 11:45**.

The following source sequence is decisive:

- `BLA-D00736 / 017:90`: Cambridge arrival and retrospective Jamaica narrative;
- `BLA-D00737 / 017:91`: return voyage on *Albert Dumois*, Boston arrival, current Cambridge/Boston activities;
- `BLA-D00738 / 017:92`: current Cambridge drawing and plans for western fieldwork;
- `BLA-D00739 / 017:93`: the adjacent German manuscript sequence explicitly contains `Cambridge Mass.` and a date line OCR-read as **10 April 1892** for the next/adjacent letter, confirming the post-Jamaica Cambridge run of the archive.

The exact date of `BLA-D00736` still needs image-level header verification. The source table's 7 April date is chronologically plausible and is supported by the sequence/postal evidence, but the **place is securely Cambridge, not Jamaica**.

---

## 1. The 11:30/11:45 evidence remains good, but it is retrospective

The historical claim survives:

> Rudolf says that in Jamaica daytime drawing demands were sometimes so heavy that writing home pushed him to 11:30 or 11:45 at night.

What changes is source classification:

- old shorthand: `late-Jamaica fieldwork letter records work until 11:30/11:45`;
- corrected: `post-return Cambridge letter retrospectively reports the Jamaica work/writing regime`.

This distinction matters because the late-night hours refer specifically to **correspondence after a day of drawing**, not necessarily continuous drawing until midnight. The translation says that because he had so much drawing during the day, when he wrote to his parents he sometimes had to stay up that late.

Do not convert this into `Rudolf drew until 11:45 every night`.

---

## 2. The same letter is a high-value itinerary/control source

`BLA-D00736–38` is more important than the old source row suggested. In one retrospective document Rudolf supplies:

- Jamaica health/risk perception;
- postal delay and a possibly lost Annotto Bay letter;
- Port Antonio → Annotto Bay routing on *Bowden*;
- fruit-delivery calls at Port Maria and Rio Novo;
- Boston Fruit Company employee Kennedy's postal help;
- the labour/correspondence rhythm at Hope Garden;
- the 28 March return to Annotto Bay;
- *Albert Dumois* cargo/passenger movement and fruit-loading circuit;
- Boston/Cambridge arrival;
- immediate Arboretum/Botanical Garden work;
- current plans for the western expedition.

It is therefore a **post-leg accounting letter**: Rudolf turns a completed Jamaica mobility episode into an ordered narrative just as he prepares the next field phase.

This is useful for source criticism because later retrospective descriptions can be compared against dated Jamaica letters rather than treated as interchangeable with them.

---

## 3. A small chronology correction improves the Jamaica count analysis

Pass 47 fixed Rudolf's terminal Jamaica count at 106 on 27 March (`BLA-D00721/725`). The 7-April-ish Cambridge letter does not revise that species total in the surviving translation. It instead narrates workload and travel after the fact.

Therefore the 116 figure in the Jamaican official report cannot currently be reconciled by treating the supposed `7 April Jamaica letter` as evidence of additional Jamaica work after 27 March. Rudolf had already left the island and reached Cambridge.

This makes the 106/116 discrepancy slightly sharper.

---

## 4. Master/source-table correction to carry forward

For `HARV-007` use:

- title: Rudolf Blaschka to Leopold and Karolina Blaschka, c. 7 April 1892 — exact header image check pending;
- place: **Cambridge, Massachusetts**;
- archival anchor: `BLA-D00736–38 / 017:90–92`;
- evidence type: retrospective account of Jamaica labour/correspondence and return voyage;
- direct labour claim: daytime drawing made correspondence difficult; letters sometimes kept him up to 11:30/11:45;
- guard: the source does not say drawing itself continued until 11:45.

The current CSV row should eventually be corrected rather than silently reused.

---

## 5. Source-critical guards

1. Place is securely post-return Cambridge from the letter's own opening and current activities.
2. Exact date `7 April 1892` remains plausible but should be verified against the manuscript/header rather than inferred only from the old source table.
3. `11:30 or 11:45` describes the late hour at which Rudolf sometimes remained up when writing after heavy daytime drawing.
4. The letter is retrospective for Jamaica events and contemporary for Cambridge events; tag individual statements accordingly.
5. Do not use it as evidence that Rudolf remained working in Jamaica after the 27 March terminal 106-species statement.
6. Later current Cambridge studies (Arboretum/Botanical Garden) belong to a new field/reference phase and should not be added to Jamaica totals.

## Next retrievals

1. Image-check the first/header page corresponding to `BLA-D00736` to close the exact date.
2. Correct `HARV-007` in the persistent source/master CSV when the next source-audit synchronization is made.
3. Split long retrospective letters into event-level statements with `event_date` and `letter_date` instead of assigning every sentence the letter's current place/date.
4. Compare the *Bowden*/*Albert Dumois* retrospective details with the earlier dated Jamaica letters and keep any disagreements explicit.

## Working conclusion

The source survives the audit but changes category. **The late-night line is evidence about Jamaica's labour burden remembered immediately after return, not a Jamaica-dated diary entry.** That small correction matters because the project increasingly depends on separating event time, writing time and later administrative memory.