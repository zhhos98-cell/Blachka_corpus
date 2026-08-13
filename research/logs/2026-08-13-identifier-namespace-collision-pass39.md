# Identifier namespace collision guard — pass 39 — 13 August 2026

## Result

Pass 38 reconstructed the Harvard botanical shipment-list position of *Fritillaria parviflora* Torr. as **model no. 237**. A backend cross-check immediately exposed a dangerous integer collision: the global object backend also contains an unrelated **`Blaschka-Katalog Nr. 237`** in the invertebrate/commercial catalogue system, attached to a Museum für Naturkunde Berlin object record.

These two `237` values are different identifiers in different historical namespaces. They must never be joined by integer equality.

The project should therefore stop using bare numbers such as `237`, `433`, `93`, `268`, etc. without an explicit scheme where more than one numbering system is in play.

## Required namespace distinction

For current work use at minimum:

- `WARE-BOT-MODEL-0237` = Harvard/Ware botanical model sequence number reconstructed from the annotated shipment lists.
- `BLASCHKA-CAT-0237` = Blaschka commercial zoological/invertebrate catalogue number 237.
- `CASE-I.B.-268` = Liverpool freight-case mark, not a model/catalogue/accession number.
- local museum accession/registration identifiers retain their institutional scheme verbatim.

The prefixes are project-level disambiguators, not claims that historical actors themselves used these exact strings.

## Why this matters

The Blaschka archive combines several numbering regimes:

1. botanical model sequence numbers in Harvard shipment lists;
2. zoological commercial catalogue numbers;
3. freight case marks;
4. invoice/account numbers;
5. museum accession/registration numbers;
6. later survey numbers such as Reiling numbers;
7. current collection-management identifiers.

A bare integer can therefore create false object genealogies across otherwise unrelated corpora. The newly reconstructed botanical `237` is a concrete demonstration, not a hypothetical warning.

## Research rule

Every crosswalk table and event register should store at least:

`identifier_value` + `identifier_scheme` + `institutional/context scope` + `source`.

No match should be accepted solely because two records share the same numeric value.

Where a historical source prints only a number, the scheme must be inferred from document context and marked as reconstructed if necessary.

## Immediate consequence for pass 38

The *Fritillaria* result remains valid as a **Harvard botanical sequence reconstruction**. It has no demonstrated relationship to any zoological object carrying Blaschka commercial catalogue no. 237.

No public-map change.