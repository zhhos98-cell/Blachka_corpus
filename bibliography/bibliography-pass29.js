(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="29"]')) return;

  const records = [
    {
      year: 2002,
      citation: 'Frances Richard, “Great Vitreous Tact: Thoughts (With Quotations) on The Ware Collection of Glass Flowers and Fruit, Peabody Museum, Harvard University,” <em>Cabinet</em>, no. 6 (Spring 2002).',
      links: '<a href="https://cabinetmagazine.org/issues/6/richard.php" target="_blank" rel="noopener">Cabinet full article ↗</a> · <a href="https://www.cabinetmagazine.org/issues/6/" target="_blank" rel="noopener">Issue 6 contents ↗</a>'
    },
    {
      year: 2004,
      citation: 'No author listed, “Blaschka at the Natural History Museum,” <em>The Glass Cone</em>, no. 68 (Summer 2004). [On the Natural History Museum, London collection and its conservation initiative.]',
      links: '<a href="https://www.theglasssociety.org/publication/the-glass-cone-no-68-summer-2004/" target="_blank" rel="noopener">The Glass Society full issue ↗</a>'
    },
    {
      year: 2007,
      citation: 'No author listed, “Eternal Creatures,” <em>Harvard Magazine</em>, January–February 2007; web publication 1 January 2007. [On the travelling exhibition <em>Glass Sea Treasures from Harvard: The Age of Darwin</em>.]',
      links: '<a href="https://www.harvardmagazine.com/2007/01/eternal-creatures-html" target="_blank" rel="noopener">Harvard Magazine ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '29';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-ninth expanded pass';
})();
