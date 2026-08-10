# Privacy, GDPR/PECR and copyright audit — 2026-08-10

This is an internal maintenance checklist, not legal advice. The default assumption for this audit is that every collection point, external request, quotation and image reuse needs an identified basis before it is treated as safe.

## Public-data flows

### Project-controlled collection

- No project analytics script.
- No advertising or behavioural tracking.
- No project cookies or local-storage profile.
- No user accounts.
- Site search is client-side routing/filtering.
- Email newsletter collection has been removed. Updates are RSS-only until a compliant mailing workflow exists.
- Direct email remains available for corrections, source leads, rights/takedown requests and privacy requests. The public privacy notice now covers this correspondence and identifies the controller contact.

### Service-level processing

- GitHub Pages necessarily receives technical web requests. The public notice links GitHub's privacy statement.
- Project email currently uses Gmail/Google; this is disclosed.
- Some images are hot-linked from Wikimedia Commons and Museums Victoria. External image requests can expose IP address, browser/device data and request timing to those hosts. `referrerpolicy="no-referrer"` is used on the main static images and case-wall requests, and case markup is normalised before insertion.
- If the project later self-hosts the open images, remove the external-image disclosure after verifying that no other remote assets remain.

## UK GDPR / GDPR notice checklist

The public notice now covers the practical Article 13-style fields relevant to the present site:

- controller identity and contact;
- categories/purposes of data processed through voluntary correspondence;
- lawful-basis description (legitimate interests for ordinary research/site correspondence);
- service providers/recipients;
- international-processing warning;
- retention criteria;
- rights and withdrawal where applicable;
- ICO complaint route;
- change-before-collection rule.

Official baseline: ICO, “What privacy information should we provide?”
https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/

## Email / PECR gate

No automated email subscriber list is currently operated. Do not replace RSS with a mailing form until all of the following are true:

1. provider and processing terms selected;
2. controller identity and provider named at collection;
3. affirmative, specific email opt-in recorded;
4. withdrawal/unsubscribe available in every update;
5. consent evidence retained only as necessary;
6. tracking pixels disabled by default;
7. transfer and retention position documented;
8. privacy notice updated before collection starts.

Official baseline: ICO electronic-mail marketing guidance.
https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/

## Copyright: public images

A dedicated `/rights/` page now provides a consolidated attribution register and a modification notice for responsive crops/toning.

Verified active image groups:

- Daderot Harvard sea cucumber — CC0 1.0.
- Vassil London / Grant Museum / Geneva photographs used by the homepage or case matrix — CC0 1.0.
- Blaschka family garden photograph — Public Domain Mark 1.0; source file is already a cropped derivative.
- Auckland Museum `Allsortz` poster — CC BY 4.0; attribution Auckland Museum, Commons metadata also identifies Daan Hoffmann.
- Auckland Museum `Ocythoe tuberculata` ML35749 — CC BY 4.0; attribution Auckland Museum, Commons metadata identifies Denise Baynham.
- Museums Victoria case-wall photographs — Rodney Start / Museums Victoria, CC BY 4.0.
- Fondazione Scienza e Tecnica `Sala dei modelli` — CC0 1.0.

CC BY 4.0 requires appropriate credit, a licence link and indication of changes. Creative Commons expressly permits attribution through a separate page where reasonable for the medium.
https://creativecommons.org/licenses/by/4.0/

## Copyright: archival manuscripts — high-risk rule

Do **not** infer that an old archival letter is out of copyright merely because it is nineteenth- or early-twentieth-century, publicly accessible in an archive, digitised, or supplied as a research copy.

The UK IPO states that some literary, dramatic and musical works that were unpublished at the end of 1988 and whose authors died before 1969 remain protected until **31 December 2039**. This can affect historical letters and manuscripts.

Official baseline:
https://www.gov.uk/government/publications/copyright-notice-duration-of-copyright-term/copyright-notice-duration-of-copyright-term

Public-site rule until a work-by-work rights basis is recorded:

- prefer paraphrase for unpublished archival prose;
- if a verbatim fragment is necessary, keep it short, evidential and fully source-identified, and document the exception/licence/permission relied upon;
- never publish a full scan or substantial transcript just because the archive supplied a research copy;
- preserve repository credit and copy-level identifiers;
- where the rights owner or legal basis is uncertain and the extract is dispensable, remove the quotation rather than testing the boundary.

UK fair-dealing guidance confirms that quotation/criticism/review exceptions are fact-sensitive and require fair dealing and sufficient acknowledgement; amount and market effect matter.
https://www.gov.uk/guidance/exceptions-to-copyright

## Takedown and correction

The public rights page supplies a rights/takedown email route. A challenged image or extract should be removable while the rights basis is checked. Keep a minimal record of the request and resolution if needed to prevent recurrence or document the legal/research decision.

## Remaining watchlist

- Flatten the legacy Sources pass chain before adding more public material; each new pass currently increases the surface that must be rights-audited.
- When adding a new image, record creator/attribution party, source URL, licence, licence URL, and whether CSS crops/tones it.
- When adding archival quotation, record publication status, author/death date where known, repository, rights statement, amount quoted and legal basis/permission.
- Re-audit Privacy and Rights before enabling analytics, forms, donations, newsletter services, authentication, comments or third-party embeds.
