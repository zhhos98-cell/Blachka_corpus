(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="27"]')) return;

  const records = [
    {
      year: 1881,
      citation: 'Rudolf Blaschka, “Die Nacktschnecken des Meeres,” <em>Sitzungs-Berichte der naturwissenschaftlichen Gesellschaft Isis zu Dresden</em>, Jahrgang 1880 (Dresden, 1881): 23–26. [German; workshop-authored zoological paper.]',
      links: '<a href="https://www.biodiversitylibrary.org/bibliography/132035" target="_blank" rel="noopener">BHL digitised Isis volume ↗</a> · <a href="https://www.deutsche-digitale-bibliothek.de/item/MTOVQQPUAMAWJX3GH6ZYANZ2O6IU24PS" target="_blank" rel="noopener">BSB / MDZ record ↗</a>'
    },
    {
      year: 1885,
      citation: 'Leopold Blaschka, <em>Katalog über Blaschka’s Modelle von wirbellosen Thieren dargestellt von Leopold Blaschka in Hosterwitz bei Dresden</em>. Druck Gustav Winter, Stolpen, 1885. [German; workshop catalogue.]',
      links: '<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen reproduction and copy-level record ↗</a> · <a href="https://doi.org/10.1515/9783110696448-010" target="_blank" rel="noopener">Short 2021 scholarly cross-check ↗</a>'
    },
    {
      year: 1996,
      citation: 'Chris Meechan, “A Glass Menagerie: The Works of Leopold and Rudolph Blaschka,” <em>The Conchologists’ Newsletter</em>, no. 138 (1996): 690–697.',
      links: '<a href="https://conchsoc.org/newsletter" target="_blank" rel="noopener">Conchological Society newsletter archive ↗</a> · <a href="https://www.theglasssociety.org/publication/the-glass-cone-no-39-spring-1995/" target="_blank" rel="noopener">Meechan’s 1995 Glass Cone precursor ↗</a>'
    },
    {
      year: 2021,
      citation: 'J. P. Short, “Arc of the Anemone: Modeling Nature from the Wunderkammer to the Warenwelt,” in Kirsten Belgum, Vance Byrd, and John D. Benjamin, eds., <em>Before Photography: German Visual Culture in the Nineteenth Century</em>, 181–204. Berlin and Boston: De Gruyter, 2021.',
      links: '<a href="https://doi.org/10.1515/9783110696448-010" target="_blank" rel="noopener">De Gruyter / DOI ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '27';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · twenty-seventh expanded pass';
})();
