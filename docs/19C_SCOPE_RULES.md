# Nineteenth-century scope rule

The global survey discovers present-day institutional holdings, finding aids, databases, digitisation projects, collection histories, donation records, and specialist catalogues. The historical object of study is narrower.

## Core temporal rule

A survey entry enters the active historical census only when the surviving slide collection, batch, set, or provenance chain has explicit evidence that at least one historically meaningful node falls within **1800-1899**.

Qualifying nineteenth-century nodes include:

- slide preparation or mounting;
- collecting or acquisition;
- ownership / belonging / collection attribution;
- sale, exchange, gift, donation, loan, posting, or transfer;
- use in teaching, research, demonstration, exhibition, or publication;
- formation of a named collection, cabinet, drawer sequence, box, set, or accession batch.

A modern museum page or digitisation project may be the source used to establish the historical collection. The publication date of the web page is therefore not a scope criterion.

## Scope statuses

- `CORE_19C`: explicit evidence ties the object, collection, or provenance chain to 1800-1899.
- `POSSIBLE_19C`: collection may contain nineteenth-century material, but the current survey row does not yet prove the connection. Keep for review; do not harvest automatically.
- `MODERN_COMPARATOR`: useful for digitisation, collection-management, media, or metadata method, but the material itself is modern. Exclude from the historical harvest queue.
- `OUT_OF_SCOPE`: explicit evidence places the relevant collection/material outside 1800-1899 and no nineteenth-century node has been established. Exclude from the historical harvest queue.

## Conservative default

Uncertainty never promotes a record. If nineteenth-century evidence is absent or ambiguous, the default is `POSSIBLE_19C`, not `CORE_19C`.

Counts also inherit this rule. A present-day total may describe a mixed collection that includes nineteenth-century material. Such a total is not automatically a nineteenth-century slide count. Preserve the present-day aggregate as source evidence, then isolate the nineteenth-century subset where possible.

## Source and relation guards

Current institutional custody does not imply nineteenth-century ownership. Preserve relationship phrases such as `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `collected by`, `sold by`, `donated by`, `lent by`, `held by`, `received by`, `exchanged by`, and `transferred from` as distinct claims.

Likewise, a modern donation of nineteenth-century slides is a modern custody event attached to nineteenth-century objects. It does not move the slide itself out of the historical scope.
