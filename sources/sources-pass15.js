(() => {
  const paymentHeading = document.querySelector('#payment-regulation-title');
  const paymentSection = paymentHeading?.closest('.source-section');
  if (!paymentSection || document.querySelector('#moller-forwarding-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'moller-forwarding-title');
  section.innerHTML = `
    <p class="source-kicker">British and Irish forwarding route</p>
    <h2 id="moller-forwarding-title">M. Otto W. Möller, Hamburg: a recurrent corridor, 1887–1888</h2>
    <p class="source-note">A wider re-read of the workshop business records shows that Möller was not confined to Marlborough and Liverpool. The Hamburg node recurs across Galway, Cardiff and Dublin Museum orders as well. Several OCR year readings in this block are corrupt; the canonical register explicitly reconstructs the 1888 Galway/Cardiff/Dublin sequence from the December 1887 account and sequential case marks rather than silently accepting the OCR date. <a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">moller-hamburg-forwarding-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'October–December 1887 · Marlborough and Liverpool',
      title: 'I.B. 266 and I.B. 268: insurance, invoices, Hamburg forwarding and rolling Damon credit.',
      meta: 'Marlborough I.B. 266 is securely dated to October 1887, insured for 200 Marks and invoiced at 196 Marks. Liverpool I.B. 268 follows in December: 247 Marks had covered models only, packing was separately estimated, and the later dispatch invoice was 268 Marks. Both move through M. Otto W. Möller / M. O. W. Möller in Hamburg.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">1887 transaction records ↗</a>'
    },
    {
      type: '28 January 1888 · Galway and Cardiff · reconstructed year',
      title: 'Cases I.B. 269 and L.B. 270 move together through Möller.',
      meta: 'The OCR year reads 1886, but the transaction sequence points to 1888: Liverpool I.B. 268 in December 1887 carries credit forward toward Galway and Cardiff, followed by cases 269 and 270. The two invoices, 288 and 197 Marks, exactly exhaust 485 Marks prepaid. This reconstructed year remains flagged for manuscript-image verification.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">chronology and Galway/Cardiff record ↗</a>'
    },
    {
      type: '1888 · Dublin Museum instalments · reconstructed year',
      title: 'Cases 271–272 and later 275–276: a large museum order split across repeated Hamburg consignments.',
      meta: 'The first Dublin Museum instalment required two cases and carried a 380-Mark invoice against 264 Marks prepaid. A later July dispatch again names the Hamburg forwarder for two cases and closes a 900-Mark invoice/prepayment account. Case-prefix OCR varies and remains guarded; the 1888 placement follows the case/account sequence after Galway/Cardiff.',
      links: '<a href="moller-hamburg-forwarding-register.json" target="_blank" rel="noopener">Dublin Museum records ↗</a>'
    },
    {
      type: 'Archive target · Hamburg',
      title: 'Resolve the historical firm before searching a company archive.',
      meta: 'No secure corporate fonds has yet surfaced. The next task is identity resolution in the 1887–1888 Hamburg address books: legal firm name, occupation, principals and street address first; Handelsregister, Chamber of Commerce and Staatsarchiv records second. A modern Möller firm is not treated as successor without that bridge.',
      links: '<a href="https://adressbuecher.sub.uni-hamburg.de/" target="_blank" rel="noopener">Hamburg digitised address books ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '15';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  paymentSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass16.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
