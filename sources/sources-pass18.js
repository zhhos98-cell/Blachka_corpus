(() => {
  const receivingHeading = document.querySelector('#harvard-receiving-skill-title');
  const receivingSection = receivingHeading?.closest('.source-section');
  if (!receivingSection || document.querySelector('#dublin-failure-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dublin-failure-title');
  section.innerHTML = `
    <p class="source-kicker">Failure and recovery</p>
    <h2 id="dublin-failure-title">Dublin: wrong port, broken models and replacement through the next order</h2>
    <p class="source-note">A workshop letter preserves an unusually complete failure chain linking W. J. Sollas and A. C. Haddon. The event is separated from the general Möller route because the central evidence is the coupling of documentary error, physical damage and replacement: <a href="dublin-shipping-failure-register.json" target="_blank" rel="noopener">dublin-shipping-failure-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Trinity College Dublin · misrouting',
      title: 'Sollas consignment landed at Bristol after a mistake in the shipper’s note.',
      meta: 'The workshop reports that the models reached Sollas about two weeks late because the shipper’s note sent them to Bristol. Models nos. 239 and 356 were broken, probably in the resulting transport sequence. No carrier is invented: the source names the documentary error and wrong landing port, but not a shipping company.',
      links: '<a href="dublin-shipping-failure-register.json" target="_blank" rel="noopener">Sollas failure record ↗</a>'
    },
    {
      type: 'Royal College of Science, Dublin · insured replacement channel',
      title: 'Haddon case: 500-Mark insurance, 495-Mark invoice, and Sollas replacements inside the new consignment.',
      meta: 'A subsequent Damon letter records one very large case for A. C. Haddon with 500 Marks insurance and a 495-Mark invoice. Fresh examples of Sollas’s broken nos. 239 and 356 were enclosed in the Haddon shipment. The Hamburg forwarder is OCR-read as “M.Miller” and is treated as probable Möller only pending image verification.',
      links: '<a href="dublin-shipping-failure-register.json" target="_blank" rel="noopener">Haddon / replacement record ↗</a>'
    },
    {
      type: 'Receiving archive · UCD',
      title: 'UCD Archives — Records of the Royal College of Science for Ireland, IE UCDA RCSI, 1867–1929.',
      meta: 'The fonds contains accounts, correspondence, order books and equipment/supply records. It is now a targeted receiving-side archive for matching Haddon’s workshop invoice and insured case to college purchase, receipt or condition documentation.',
      links: '<a href="https://www.ucd.ie/archives/collections/universityarchives/items/collectionname235376en.html" target="_blank" rel="noopener">Royal College of Science fonds ↗</a>'
    },
    {
      type: 'Receiving archive · Trinity College Dublin',
      title: 'Trinity College Dublin Manuscripts & Archives — College and departmental records.',
      meta: 'Trinity’s College Archives include departmental and financial records. An exact Sollas file has not yet been isolated, so this remains a targeted archive rather than a direct citation. The retrieval question is narrow: original order, shipper, Bristol mislanding, damage report and receipt of replacement models.',
      links: '<a href="https://www.tcd.ie/library/research-collections/subject-strengths/archives.php" target="_blank" rel="noopener">Trinity College Dublin Archives ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '18';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  receivingSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass19.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
