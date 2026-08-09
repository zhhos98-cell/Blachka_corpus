(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="30"]')) return;

  const records = [
    {
      year: 2006,
      citation: 'Meike Niepelt, “Physophora magnifica: Zwischen Kunst und Wissenschaft,” in <em>Die Ausstellung „38 Dinge“</em>, Universität Tübingen, Stand 12 June 2006. [German; object study of the Tübingen Blaschka collection.]',
      links: '<a href="https://www.unimuseum.uni-tuebingen.de/fileadmin/content/01_Ausstellungen/ausstellung_38_dinge/dinge03.html" target="_blank" rel="noopener">Universität Tübingen ↗</a>'
    },
    {
      year: 2009,
      citation: 'Gunild Symes, ed., “Blaschka,” <em>X-Ray Mag</em>, no. 30 (July 2009). Interview with Harvard Museum of Comparative Zoology director James Hanken on the Blaschka marine-invertebrate collection and its redisplay.',
      links: '<a href="https://xray-mag.com/content/blaschka" target="_blank" rel="noopener">X-Ray Mag article ↗</a> · <a href="https://xray-mag.com/magazines/30" target="_blank" rel="noopener">Issue 30 ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '30';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirtieth expanded pass';
})();
