# 2026-08-10 — Auction deep sweep, pass 09: Science Museum recipient web audit

## Research question

Can another named recipient of the Science Museum's 1925-1927 Blaschka deaccession be recovered from the currently indexed public web before moving into the exact archive series?

Structured output: `../../auctions/auction-science-museum-recipient-audit.json`.

## Secure public statements

UCL's Grant Museum states that the Science Museum deaccessioned its glass-model collection between 1925 and 1927 and that models went to University College London and six other institutions.

Cardiff is independently secure. Museum Wales and NatSCA state that 62 Blaschka models came from the Science Museum in 1927. Cardiff therefore supplies one of the six institutions other than UCL.

A fresh targeted web sweep with Science Museum, South Kensington, deaccession, 1925/1927, transfer and Blaschka combinations did not securely identify another recipient. Search results repeatedly returned UCL, Cardiff, the later Christie’s objects and general histories.

This negative result is bounded. It is not evidence that the other five names are absent from the archive or from print literature.

## Why this matters for the auction layer

The Science Museum dispersal already has at least two demonstrably different afterlives:

- institutional transfer: UCL and Cardiff;
- later market survival: Science Museum numbers 1877-360, 1877-376 and 1877-381 reappeared at Christie's in 2019 after their 1925-27 deaccession.

The public web does not currently explain the split. Maker-name search is therefore the wrong unit for the next stage.

## Archive route retained

1. `CORP/SCM/02/02/7/421` — transfer/disposal index, recovered in the project provenance backend; use it to locate nominal file numbers and recipient headings.
2. Relevant 1920-1927 transfer/disposal file portions — inspect only after index routing.
3. `CORP/SCM/Z/048` — Museum Store Registers. The official Science Museum Group catalogue describes the series as a running-number sequence with notes on store location and ultimate disposal.
4. `CORP/SCM/Z/039/02` — rough copy of 1877-1900 Science Library register entries for Western Galleries / Educational Division objects; possible bridge to the original 1877 cohort.

## Exact number strategy

Priority numbers remain:

`1877-360, 1877-361, 1877-376, 1877-380, 1877-381, 1877-385, 1877-397`

The point is to reconstruct neighbourhoods and destinations even when a disposal record never says `Blaschka`.

## Admission guard

Any newly recovered institutional recipient remains outside the canonical auction count. The auction layer only resumes when a later public-market event occurs without a documented institutional buyer.
