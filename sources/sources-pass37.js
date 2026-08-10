(() => {
  const exchangeHeading = document.querySelector('#dealer-epistemic-exchange-title');
  const exchangeSection = exchangeHeading?.closest('.source-section');
  if (!exchangeSection || document.querySelector('#dealer-transaction-anatomy-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-transaction-anatomy-title');
  section.innerHTML = `
    <p class="source-kicker">What a transaction leaves behind</p>
    <h2 id="dealer-transaction-anatomy-title">A dealer transaction was a document bundle, not a single invoice</h2>
    <p class="source-note">Receiving-side archives preserve different fragments of the same commercial process: catalogue or price list, enquiry, estimate, invoice, payment request, receipt, bill of lading, insurance certificate, account statement and museum distribution record. This vocabulary is now a search template for incomplete Blaschka transactions: <a href="dealer-transaction-anatomy-register.json" target="_blank" rel="noopener">dealer-transaction-anatomy-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Damon · 1868 · invoice inside institutional accounting',
      title: 'ANSP Conchological Section: a Damon shell invoice survives beside cash books, ledgers, receipts and vouchers.',
      meta: 'The point is archival as much as commercial. A dealer document can migrate into the customer’s financial series and survive after the dealer-side file disappears. This suggests that name-indexed correspondence alone will systematically undercount dealer transactions.',
      links: '<a href="https://findingaids.library.upenn.edu/records/ANSP_ANSP.COLL.0081" target="_blank" rel="noopener">ANSP finding aid ↗</a>'
    },
    {
      type: 'Ward · 1889 · payment + freight bundle',
      title: 'Missouri Box 7 FF 2G groups Ward correspondence with payment requests and bills of lading.',
      meta: 'The file shows purchasing and transport as one administrative bundle on the receiving side. It is not a Blaschka file, but it gives a concrete model for what should be sought around Ward-mediated glass-model shipments when an invoice alone survives.',
      links: '<a href="https://muarchives.missouri.edu/uw-rg1-s1-4.html" target="_blank" rel="noopener">Missouri archival inventory ↗</a>'
    },
    {
      type: 'Smithsonian · document-field schema',
      title: 'RU000208 combines a Ward correspondence file with an invoice system recording catalogue number, collector, locality and transfer terms.',
      meta: 'The Division of Mammals records contain Ward’s Natural Science Establishment correspondence in Box 13 Folder 6. Series 5 invoices preserve specimen descriptions, catalogue number, collector, locality and terms under which material was sent. These fields offer a practical coding schema for dealer transactions even when the commercial letter itself is missing.',
      links: '<a href="https://siarchives.si.edu/collections/siris_arc_216776" target="_blank" rel="noopener">Smithsonian RU000208 ↗</a>'
    },
    {
      type: 'Ward · later longitudinal controls',
      title: 'AMNH Hovey papers preserve estimates, postal receipts, account statements, invoices and shipping-insurance certificates around Ward purchases.',
      meta: 'Box 4 Folder 206 (1907, 1913–1914) contains purchase negotiations, postal receipts, a cost estimate and an account statement. Box 4 Folder 204 (1918–1921) contains correspondence, notes, invoices and shipping-insurance certificates. These post-Blaschka files are controls for the documentary repertoire of the same firm, not evidence for nineteenth-century glass-model shipments.',
      links: '<a href="https://data.library.amnh.org/archives/repositories/3/archival_objects/6934" target="_blank" rel="noopener">AMNH Folder 206 ↗</a> · <a href="https://data.library.amnh.org/archives/repositories/3/archival_objects/6932" target="_blank" rel="noopener">AMNH Folder 204 ↗</a>'
    },
    {
      type: 'Retrieval consequence',
      title: 'Known Blaschka transactions can now be audited layer by layer instead of labelled simply “invoice missing”.',
      meta: 'For each order the search can ask separately for catalogue/price list, enquiry, selection list, estimate, invoice, remittance, receipt, freight document, insurance, account reconciliation and accession record. Absence should be recorded only after the relevant institutional series has been checked.',
      links: '<a href="dealer-transaction-anatomy-register.json" target="_blank" rel="noopener">document-type vocabulary ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '37';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  exchangeSection.insertAdjacentElement('afterend', section);
})();
