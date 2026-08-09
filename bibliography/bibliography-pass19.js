(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="19"]')) return;

  const records = [
    {
      year: 1829,
      citation: 'Julia de Fontenelle, <em>Manuel complet du verrier et du fabricant de glaces, cristaux, pierres précieuses factices, verres colorés, yeux artificiels, etc.</em> Paris: Roret, 1829. 335 pp. [French; material-context source; coloured glass, artificial eyes and specialised glass fabrication.]',
      links: '<a href="https://upload.wikimedia.org/wikipedia/commons/2/22/Manuel_complet_du_verrier_et_du_fabricant_de_glaces%2C_cristaux_-_pierres_pr%C3%A9cieuses_factices%2C_verres_color%C3%A9s%2C_yeux_artificiels%2C_etc._%28IA_manuelcompletduv00juli%29.pdf" target="_blank" rel="noopener">Open scan ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1879,
      citation: 'James Fowler, <em>On the Process of Decay in Glass, and, Incidentally, on the Composition and Texture of Glass at Different Periods, and the History of Its Manufacture</em>. London: J. B. Nichols, 1879. 98 pp. Reprinted from <em>Archaeologia</em> 46; journal publication 1880, pp. 65–162. [Material-context source; glass deterioration and composition.]',
      links: '<a href="https://www.cambridge.org/core/journals/archaeologia/article/abs/iiion-the-process-of-decay-in-glass-and-incidentally-on-the-composition-and-texture-of-glass-at-different-periods-and-the-history-of-its-manufacture/D0C1990E9D1FD97DD99C89B223AF9BF0" target="_blank" rel="noopener">Cambridge Core journal record ↗</a> · <a href="https://katalog.ub.uni-heidelberg.de/titel/66128285" target="_blank" rel="noopener">Heidelberg / Corning rare-book record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1908,
      citation: 'Walter Rosenhain, <em>Glass Manufacture</em>. London: Archibald Constable & Co.; New York: D. Van Nostrand, 1908. xvi + 264 pp. The Westminster Series. [Material-context source; physical properties, raw materials, working processes, coloured and optical glass.]',
      links: '<a href="https://play.google.com/store/books/details/Walter_Rosenhain_Glass_Manufacture?id=H_Q0AQAAMAAJ" target="_blank" rel="noopener">Google Books free scan ↗</a> · <a href="https://search.worldcat.org/es/title/Glass-manufacture/oclc/2096263" target="_blank" rel="noopener">WorldCat record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1925,
      citation: 'W. E. S. Turner, “The Nature and Constitution of Glass,” <em>Transactions of the Society of Glass Technology</em> 9 (1925): 147–166. [Material-context source; contemporary state of knowledge on glass constitution.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield offprint record ↗</a> · <a href="https://www.nature.com/articles/121239a0" target="_blank" rel="noopener">Nature review of the later collected constitution papers ↗</a>'
    },
    {
      year: 1926,
      citation: 'W. E. S. Turner, “The Physical Properties of Glasses: The Relationship to Chemical Composition and Mode of Preparation,” <em>Journal of the Chemical Society</em> (1926): 2091–2116. [Material-context source; viscosity, annealing, chemical resistance, expansion, density and optical properties.]',
      links: '<a href="https://pubs.rsc.org/en/content/articlelanding/1926/jr/jr9262902091" target="_blank" rel="noopener">Royal Society of Chemistry article record ↗</a> · <a href="https://doi.org/10.1039/JR9262902091" target="_blank" rel="noopener">DOI ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield offprint record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '19';
    article.dataset.year = String(record.year);
    article.dataset.bibContext = 'material';
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1829–2026 · nineteenth expanded pass';
})();
