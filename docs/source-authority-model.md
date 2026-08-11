# Source authority / locator model

Updated: 11 August 2026

The project uses a derived source-authority layer to make repeated access routes visible without rewriting the evidence registers that use them.

## 1. Exact locator nodes

`schemas/generated/source-authority-crosswalk.json` treats each exact public HTTP(S) locator as one derived node. The current builder removes only terminal prose punctuation; it does not normalize hostnames, redirects, query strings, fragments, trailing slashes, language variants, or institution migrations.

Each node records:

- a deterministic maintenance identifier (`SRCNODE-*`);
- the exact locator and host;
- every Source/Auction file that uses it;
- the JSON field path of each occurrence;
- the local functional role inferred from that path;
- whether the locator is shared across files or across the Sources/Auctions layers.

## 2. What a node means

A shared locator means only that two or more records point to the same access/source URL. It does **not** mean that the surrounding evidence units are duplicates, that their claims are equivalent, or that one record can replace another.

The same archive page can legitimately function as a direct evidence source in one register, an archive target in another, and a general locator in a third. The crosswalk preserves those edges separately.

`SRCNODE-*` values are derived maintenance IDs. They are not citation identifiers, archival references, object IDs, source IDs, or public promises of permanence. If the locator changes, the derived node changes. Historical citations and shelfmarks remain authoritative in their originating records.

## 3. Host summaries

Hosts are summarized only to reveal repository/source ecosystems and concentration. A host is not automatically an institution authority record: one institution can use several hosts, and one host can serve several organizational units or content types.

Do not merge hosts, subdomains, HTTP/HTTPS variants, old/new institutional domains, or translated URLs without source-level review.

## 4. Functional roles

The builder assigns conservative occurrence-level roles such as:

- `evidence_source`;
- `archive_locator`;
- `archive_target`;
- `future_retrieval`;
- `official_locator`;
- `secondary_locator`;
- `stable_locator`;
- generic `locator` or `embedded_url`.

These roles describe how a URL is used at that field path. They do not grade source quality and they do not supersede the evidence/guard/status language inside the originating register.

## 5. Public use

A later public projection may use this graph to show, for example, that one archival catalogue or object page supports several research routes. Safe UI uses include:

- “used in these registers” links;
- source/repository reuse counts;
- related research routes from a source page;
- source-network browsing and provenance-routing aids.

The public interface should not expose every backend occurrence by default. It should project only useful, sourceable relationships and preserve the distinction between evidence, comparison, archive target, and open research route.

## 6. Maintenance

Rebuild with:

```bash
python scripts/build-source-authority-crosswalk.py
```

The builder is read-only with respect to Source/Auction research JSON. Its outputs are the machine crosswalk under `schemas/generated/` and a dated diagnostic report under `docs/audits/YYYY-MM-DD/`.

This layer follows the mutation rules in `data-layers.md` and the locator conventions in `json-field-conventions.md`.
