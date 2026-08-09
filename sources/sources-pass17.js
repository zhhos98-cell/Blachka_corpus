(() => {
  const consularHeading = document.querySelector('#consular-documentation-title');
  const consularSection = consularHeading?.closest('.source-section');
  if (!consularSection || document.querySelector('#harvard-receiving-skill-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'harvard-receiving-skill-title');
  section.innerHTML = `
    <p class="source-kicker">Receiving-side expertise</p>
    <h2 id="harvard-receiving-skill-title">Louis Bierweiler and museum handling knowledge</h2>
    <p class="source-note">Harvard’s side of the archive preserves more than receipt. It identifies museum staff whose accumulated skill converted transported models into exhibition objects and, in Bierweiler’s case, crossed back into the Dresden workshop itself. Machine-readable register: <a href="harvard-receiving-skill-register.json" target="_blank" rel="noopener">harvard-receiving-skill-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1931 · curator enters the workshop',
      title: 'Louis Bierweiler diary: Harvard curator visits Rudolf Blaschka at Hosterwitz.',
      meta: 'Harvard’s collection-level finding aid explicitly says that a 1931 Bierweiler diary documents his trip to Hosterwitz as curator of the museum to visit Rudolf. This makes receiving-side expertise mobile: a person responsible for the collection entered the production site before later shipment handling and repair.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Blaschka archive finding aid ↗</a>'
    },
    {
      type: '1935–1964 · named staff file',
      title: 'Louis C. Bierweiler — Box Biographical 1, Folder 26, two folders.',
      meta: 'HOLLIS identifies a dedicated Bierweiler file in the Blaschka/Ware archive and notes an image of Oakes Ames and Bierweiler. This is the natural receiving-side biographical target to pair with Rudolf’s direct praise of Bierweiler’s skilled unpacking in 1932.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">ecb00006 collection ↗</a>'
    },
    {
      type: '1949–1957 / 1954 · continued collection work',
      title: 'Bierweiler at work with the glass models; assistance with the 1954 stereoscopic slide campaign.',
      meta: 'Harvard catalogues a color transparency of Bierweiler at work with the models and states that he assisted G. Blake Johnson in photographing 386 species in their exhibition cases for 638 unique stereoscopic slides in 1954. These later records show handling knowledge persisting into documentation and teaching use rather than ending at unpacking.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard Blaschka archive ↗</a>'
    },
    {
      type: 'Institutional companion archive',
      title: 'Harvard Botanical Museum records, 1869–2004 (ecb00011).',
      meta: 'The companion Museum archive contains records of administrative, research, teaching and public-exhibition activity. Its bulk is later than the principal Blaschka shipment years, so it is retained as institutional context rather than substituted for the direct Blaschka correspondence.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00011" target="_blank" rel="noopener">Harvard Botanical Museum records ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '17';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  consularSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass18.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
