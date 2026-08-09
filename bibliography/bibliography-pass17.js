(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="17"]')) return;

  const records = [
    {
      year: 1854,
      citation: 'William Gillinder, <em>Treatise on the Art of Glass Making: Containing 272 Practical Receipts for Flint, Coloured, Crown, German Sheet, Plate and Bottle Glass</em>. 2nd ed. Birmingham: W. Gillinder, 1854. 127 + [1] pp. Includes recipes and discussion of alkalis, oxides, silex, mixing and colouring. [Material-context source identified through the Sheffield Elmfield Collection.]',
      links: '<a href="https://americanhistory.si.edu/collections/object/nmah_590630" target="_blank" rel="noopener">Smithsonian National Museum of American History ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1885,
      citation: 'Édouard Gerspach, <em>L’art de la verrerie</em>. Paris: A. Quantin, 1885. 320 pp. Bibliothèque de l’enseignement des beaux-arts. [French; material-context source.]',
      links: '<a href="https://library.si.edu/digital-library/book/lartdelaverrerie01gers" target="_blank" rel="noopener">Smithsonian Libraries open scan ↗</a> · <a href="https://doi.org/10.5479/sil.184535.39088003397023" target="_blank" rel="noopener">Smithsonian DOI ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1917,
      citation: 'W. E. S. Turner, “A Bibliographical Contribution towards the Study of the Durability of Glass,” <em>Transactions of the Society of Glass Technology</em> 1 (1917): 213–222. [Material-context source; durability bibliography.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield Collection listing ↗</a>'
    },
    {
      year: 1922,
      citation: 'W. E. S. Turner, “A Critical Examination of Methods Commonly Used in Determining the Durability of Glass,” <em>Transactions of the Society of Glass Technology</em> 6 (1922): 30–45. [Material-context source; deterioration and testing.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield Collection listing ↗</a>'
    },
    {
      year: 1935,
      citation: 'W. E. S. Turner and W. Weyl, “Constitution and Colour of Glasses Containing Iron and Manganese Oxides,” <em>Transactions of the Society of Glass Technology</em> 19 (1935): 208–216. [Material-context source; colour chemistry.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield Collection listing ↗</a>'
    },
    {
      year: 1938,
      citation: 'W. E. S. Turner, “Glass for General Scientific and Heat-Resisting Purposes,” <em>Proceedings of the Society of Glass Technology</em> 22 (1938): 28–42. [Material-context source; scientific-glass properties.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield Collection listing ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '17';
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
  if (scopeTitle) scopeTitle.textContent = '1854–2026 · seventeenth expanded pass';
})();
