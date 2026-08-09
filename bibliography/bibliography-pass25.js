(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="25"]')) return;

  const tuebingen = 'https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf';
  const glaswelten = 'https://www.researchgate.net/publication/404152047_Glaswelten_Materielle_Kulturen_zwischen_Zeigen_und_Verbergen';

  const records = [
    {
      year: 1982,
      citation: 'Gertrude Hofmeister, “Die Sammlung der Glasmodelle,” <em>Berichte des Anselm Desing Vereins</em>, no. 2 (1982): 4. [German; on the Kremsmünster Blaschka collection.]',
      links: '<a href="https://www.zobodat.at/pdf/ADV_41_0001-0059.pdf" target="_blank" rel="noopener">Anselm Desing Verein cumulative author index ↗</a> · <a href="https://door.donau-uni.ac.at/api/object/o%3A4489/download" target="_blank" rel="noopener">2024 collection-science citation ↗</a>'
    },
    {
      year: 1990,
      citation: 'Susan M. Rossi-Wilcox, “The Blaschkas as Scientific Glassblowers,” <em>Proceedings of the Thirty-Fifth Symposium on the Art of Glassblowing</em> (1990): 2–6.',
      links: `<a href="${glaswelten}" target="_blank" rel="noopener">Huber 2026 bibliographic citation / open book ↗</a>`
    },
    {
      year: 1998,
      citation: 'Carlo G. Pantano, Susan Rossi-Wilcox, and David Lange, “The Glass Flowers,” in Patrick McCray, ed., <em>The Prehistory &amp; History of Glassmaking Technology</em>, <em>Ceramics and Civilization</em> 8, 61–78. Westerville, OH: The American Ceramic Society, 1998.',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Tübingen bibliography confirming article and pagination ↗</a> · <a href="https://ci.nii.ac.jp/ncid/BA49944264" target="_blank" rel="noopener">Volume bibliographic record ↗</a> · <a href="https://www.psu.edu/news/research/story/flowers-out-glass" target="_blank" rel="noopener">Penn State project context ↗</a>`
    },
    {
      year: 2001,
      citation: 'Bruno P. Kremer, “Natur im Museum: Die Glasblumen-Sammlung in Harvard,” <em>Natur &amp; Museum</em> 131 (2001): 69–74. [German]',
      links: '<a href="https://www.stadtwikidd.de/wiki/Blaschka-Sammlung" target="_blank" rel="noopener">Dresden Blaschka bibliography cross-check ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '25';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-fifth expanded pass';
})();
