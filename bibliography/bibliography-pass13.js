(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="13"]')) return;

  const records = [
    {
      year: 2008,
      citation: 'Özgür Tek, “Bilimin Camda Şekillenmesi: Blaschka Modelleri,” <em>Bilim ve Teknik</em>, no. 488 (July 2008): 84–89. [Turkish]',
      links: '<a href="https://bilimteknik.tubitak.gov.tr/e-arsiv/sayi-488/bilimin-camda-sekillenmesi-blaschka-modelleri/" target="_blank" rel="noopener">TÜBİTAK article archive ↗</a>'
    },
    {
      year: 2021,
      citation: 'David Waterhouse, “A Glassy Sea: where art meets science,” <em>Norwich Castle Museum & Art Gallery</em>, 15 January 2021. Museum collection feature on the Blaschka models. [institutional publication]',
      links: '<a href="https://norwichcastle.wordpress.com/2021/01/15/a-glassy-sea-where-art-meets-science/" target="_blank" rel="noopener">Norwich Castle Museum & Art Gallery ↗</a>'
    },
    {
      year: 2022,
      citation: 'Harvard Museum of Natural History, <em>From the Hands of the Makers</em>. Glass Flowers exhibition and digital interpretation, opened 3 August 2022. [institutional exhibition publication]',
      links: '<a href="https://www.hmnh.harvard.edu/makers" target="_blank" rel="noopener">Digital exhibition ↗</a> · <a href="https://www.hmnh.harvard.edu/glass-flowers-exhibition-harvard-museum" target="_blank" rel="noopener">2022 exhibition announcement ↗</a>'
    },
    {
      year: 2023,
      citation: 'Begüm Mütevellioğlu, “Bitki Temsillerinde Mimesis: Vincennes/Sèvres, Valletti ve Blaschka Koleksiyonları,” <em>Bodrum Journal of Art and Design</em> 2(2): 244–259. [Turkish]',
      links: '<a href="https://dergipark.org.tr/en/pub/bodrum/issue/79179/1276475" target="_blank" rel="noopener">DergiPark article record ↗</a> · <a href="https://doi.org/10.58850/bodrum.1276475" target="_blank" rel="noopener">DOI ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '13';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · thirteenth expanded pass';
})();
