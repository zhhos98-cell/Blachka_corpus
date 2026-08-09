(() => {
  const packingHeading = document.querySelector('#packing-feedback-title');
  const packingSection = packingHeading?.closest('.source-section');
  if (!packingSection || document.querySelector('#payment-regulation-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'payment-regulation-title');
  section.innerHTML = `
    <p class="source-kicker">Financial circulation</p>
    <h2 id="payment-regulation-title">Drafts, banks, balances and exchange control</h2>
    <p class="source-note">Money moved through its own chain of intermediaries. Drafts, receipts, currency conversion, securities, legal representation and Reichsbank controls are separated from model prices and dealer accounts. Machine-readable register: <a href="payment-regulation-register.json" target="_blank" rel="noopener">payment-regulation-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1903–1904 · transatlantic bank drafts',
      title: '5,000-Mark remittances and the banking chain behind Rudolf’s salary.',
      meta: 'Rudolf’s correspondence records a 5,000-Reichsmark draft in 1903 and reflects on the several banking hands and receipt procedures through which remittances passed. In 1904 Charles E. Ware sent another 5,000-Mark draft at Mary Lee Ware’s request. The OCR bank name is guarded and is not silently normalised to Dresdner Bank without image verification.',
      links: '<a href="payment-regulation-register.json" target="_blank" rel="noopener">payment evidence and identity guard ↗</a> · <a href="https://www.commerzbank.de/group/who-we-are/history/overview-archive-assets.html" target="_blank" rel="noopener">Dresdner Bank historical holdings, conditional archive target ↗</a>'
    },
    {
      type: '1934 · legal and state-regulated transfer',
      title: 'Rudolf Blaschka → Francis G. Goodale → First National Bank of Boston → German Reichsbank.',
      meta: 'Goodale’s August 1934 letter says Rudolf instructed him to convert securities into cash and deliver the proceeds through the First National Bank of Boston to the account specified by the Reichsbank. A September affidavit records $6,000 received, $4,950 paid out and a $1,050 balance transmitted for credit to Rudolf’s Reichsbank account under German law. This is a direct archival chain of patronage money becoming subject to exchange-control law.',
      links: '<a href="payment-regulation-register.json" target="_blank" rel="noopener">1934 payment-regulation chain ↗</a> · <a href="https://www.bundesarchiv.de/" target="_blank" rel="noopener">Bundesarchiv / Reichsbank archival universe ↗</a>'
    },
    {
      type: 'Archive target · Deutsche Reichsbank',
      title: 'Bundesarchiv R 2501 — Deutsche Reichsbank.',
      meta: 'Bundesarchiv guidance explicitly identifies R 2501 as the Deutsche Reichsbank fonds and documents survival of account- and securities-related individual records within it. No Rudolf Blaschka file is claimed. The fonds is now the correct institutional target for testing whether the 1934 transfer-control correspondence survives outside the Blaschka papers.',
      links: '<a href="https://www.bundesarchiv.de/im-archiv-recherchieren/archivgut-recherchieren/nach-themen/arisierung-und-sonstige-formen-des-entzugs-juedischen-vermoegens-im-nationalsozialismus/" target="_blank" rel="noopener">Bundesarchiv R 2501 context ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '14';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  packingSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass15.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
