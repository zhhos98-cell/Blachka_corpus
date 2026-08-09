(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="35"]')) return;

  const records = [
    {
      year: 2019,
      citation: 'B. J. Gill, H. R. Grenfell, and W. M. Blom, “The Cheeseman-Ward correspondence (1878–1905) and exchanges of natural history specimens between Auckland Museum and H. A. Ward of Rochester, N.Y.,” <em>Records of the Auckland Museum</em> 54 (2019): 21–36. [Includes a dedicated Blaschka section and a seven-model table with catalogue numbers, individual prices and Auckland registration numbers.]',
      links: '<a href="https://doi.org/10.32912/ram.2019.54.2" target="_blank" rel="noopener">DOI ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '35';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-fifth expanded pass';
})();
