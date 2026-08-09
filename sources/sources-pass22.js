(() => {
  const paymentHeading = document.querySelector('#payment-regulation-title');
  const paymentSection = paymentHeading?.closest('.source-section');
  if (!paymentSection || document.querySelector('#transaction-gap-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'transaction-gap-title');
  section.innerHTML = `
    <p class="source-kicker">Unresolved transaction layer</p>
    <h2 id="transaction-gap-title">Dublin 1885: the unidentified 124-Mark “commission r”</h2>
    <p class="source-note">Some archival gaps are more useful as explicit questions than as guessed identities. The UCD/Royal College of Science invoice preserves a separate commission layer that can now be targeted against receiving-side accounts and order books: <a href="transaction-gap-register.json" target="_blank" rel="noopener">transaction-gap-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '13 June 1885 · invoice anomaly',
      title: '495 Reichsmarks becomes 619 after “commission ‘r’: 124”.',
      meta: 'The published reconstruction of the UCD collection reports that the models and boxes/transport totalled 495 Marks, while two lines in thicker black ink and different handwriting added a 124-Mark commission and produced a final total of 619 Marks. The authors considered the addition probably made by an intermediary after Leopold Blaschka signed and sent the invoice. The letter “r” is left uninterpreted.',
      links: '<a href="transaction-gap-register.json" target="_blank" rel="noopener">invoice-layer record ↗</a>'
    },
    {
      type: 'UCD Archives · receiving-side target',
      title: 'IE UCDA RCSI — Records of the Royal College of Science for Ireland, 1867–1929.',
      meta: 'The fonds contains seven boxes and 115 bound volumes. Catalogue descriptions identify consolidated College accounts for 1883–1885 and order books/journal for equipment and supplies covering 1867–1916. Those are unusually precise targets for the 1885 Blaschka order: they may preserve the college-side total, payment route, supplier/intermediary name or a separate commission entry.',
      links: '<a href="https://www.ucd.ie/archives/collections/universityarchives/items/collectionname235376en.html" target="_blank" rel="noopener">UCD RCSI fonds ↗</a> · <a href="https://history.aip.org/history/catalog/icos/2336.html" target="_blank" rel="noopener">AIP archival catalogue summary ↗</a>'
    },
    {
      type: 'Evidence guard',
      title: 'Do not turn “r” into Damon, Ward or another intermediary by association.',
      meta: 'The commission is analytically separate from model price, packing and transport. Until an account, order-book entry or correspondence identifies the recipient, the project records only an unknown intermediary layer. This keeps an archival anomaly available for investigation instead of resolving it by narrative convenience.',
      links: '<a href="transaction-gap-register.json" target="_blank" rel="noopener">method guard ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '22';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  paymentSection.insertAdjacentElement('afterend', section);
})();
