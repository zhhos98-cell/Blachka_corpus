(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="24"]')) return;

  const tuebingen = 'https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf';

  const records = [
    {
      year: 2006,
      citation: 'Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>. Tübinger Kataloge 74. Tübingen: Stadtmuseum Tübingen, 2006. [German; exhibition catalogue; includes a Quellen- und Literaturverzeichnis, pp. 145–148.]',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Stadtmuseum Tübingen open catalogue PDF ↗</a>`
    },
    {
      year: 2006,
      citation: 'Henri Reiling, “... von unserer aufrichtigen Vorliebe zur Naturwissenschaft geleitet,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 37–48. Tübingen: Stadtmuseum Tübingen, 2006. [German]',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Stadtmuseum Tübingen open catalogue PDF ↗</a>`
    },
    {
      year: 2006,
      citation: 'Susan M. Rossi-Wilcox, “Art or Science? The Glass Flower Models at Harvard University,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 49–60. Tübingen: Stadtmuseum Tübingen, 2006.',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Stadtmuseum Tübingen open catalogue PDF ↗</a>`
    },
    {
      year: 2006,
      citation: 'Lorraine Daston, “Appearances All the Way Down: The Glass Flowers as Scientific Models,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 61–68. Tübingen: Stadtmuseum Tübingen, 2006.',
      links: `<a href="${tuebingen}" target="_blank" rel="noopener">Stadtmuseum Tübingen open catalogue PDF ↗</a>`
    },
    {
      year: 2013,
      citation: 'Florian Huber, “Spiegelbilder vom Meeresgrund. Leopold Blaschkas marine Aquarien,” <em>Berichte zur Wissenschaftsgeschichte</em> 36, no. 2 (2013): 172–186. [German]',
      links: '<a href="https://onlinelibrary.wiley.com/doi/10.1002/bewi.201301615" target="_blank" rel="noopener">Wiley / DOI ↗</a>'
    },
    {
      year: 2014,
      citation: 'Florian Huber, “Seeanemonenmodelle der Werkstatt Blaschka,” in David Ludwig, Cornelia Weber, and Oliver Zauzig, eds., <em>Das materielle Modell: Objektgeschichten aus der wissenschaftlichen Praxis</em>, 299–303. Paderborn: Wilhelm Fink, 2014. [German]',
      links: '<a href="https://bibliothek.univie.ac.at/sammlungen/objekt_des_monats/003866.html" target="_blank" rel="noopener">University of Vienna bibliographic record ↗</a> · <a href="https://meinclio.clio-online.de/uploads/media/book/toc_book-49635.pdf" target="_blank" rel="noopener">Book table of contents ↗</a>'
    },
    {
      year: 2026,
      citation: 'Florian Huber, “Fragile Natur: Die Glasobjekte von Leopold und Rudolf Blaschka,” in Margarete Vöhringer and Christof Windgätter, eds., <em>Glaswelten: Materielle Kultur zwischen Zeigen und Verbergen</em>, 95–105. DesignWissen 4. Berlin: Kulturverlag Kadmos, 2026. [German]',
      links: '<a href="https://www.kulturverlag-kadmos.de/programm/details/glaswelten" target="_blank" rel="noopener">Kulturverlag Kadmos / open-access book ↗</a> · <a href="https://doi.org/10.55309/h8nj26p0" target="_blank" rel="noopener">Book DOI ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '24';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-fourth expanded pass';

  if (!document.querySelector('script[data-bib-pass25-loader]')) {
    const pass25 = document.createElement('script');
    pass25.src = 'bibliography-pass25.js?v=20260809-1';
    pass25.dataset.bibPass25Loader = 'true';
    document.head.appendChild(pass25);
  }
})();
