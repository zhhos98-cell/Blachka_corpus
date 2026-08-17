(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="18"]')) return;

  const records = [
    {
      year: 1982,
      citation: 'Richard Evans Schultes and William A. Davis, “Harvard’s Everblooming Flowers of Glass,” <em>Smithsonian</em> 13, no. 7 (1982): 101–106.',
      links: '<a href="https://openlibrary.org/works/OL44313125W/Harvard%27s_everblooming_flowers_of_glass" target="_blank" rel="noopener">Harvard-derived Open Library record ↗</a>'
    },
    {
      year: 1983,
      citation: 'Margaret Parke, “The Glass Flowers,” <em>American Horticulturist</em> 62, no. 12 (December 1983): 22–27.',
      links: '<a href="https://ahsgardening.org/wp-content/pdfs/1983-12r.pdf" target="_blank" rel="noopener">American Horticultural Society full issue PDF ↗</a>'
    },
    {
      year: 1983,
      citation: 'M. Parke, “The Glass Flowers of Harvard’s Botanical Museum,” <em>Endeavour</em> 7, no. 3 (1983): 116–122.',
      links: '<a href="https://www.sciencedirect.com/science/article/pii/0160932783900030" target="_blank" rel="noopener">ScienceDirect record ↗</a> · <a href="https://doi.org/10.1016/0160-9327(83)90003-0" target="_blank" rel="noopener">DOI ↗</a>'
    },
    {
      year: 1999,
      citation: 'Nancy Marie Brown, “Flowers Out of Glass,” <em>Research/Penn State: The Online Magazine of Scholarship and Creativity</em> 20, no. 3 (1999).',
      links: '<a href="https://www.psu.edu/news/research/story/flowers-out-glass" target="_blank" rel="noopener">Penn State full article ↗</a> · <a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Tübingen bibliography cross-check ↗</a>'
    },
    {
      year: 2016,
      citation: 'Paulette Beete, “Spotlight on Harvard’s Glass Flowers,” <em>National Endowment for the Arts</em>, 2016. Interview with Donald H. Pfister on the Blaschka collection, its history, conservation, and 2016 redisplay.',
      links: '<a href="https://www.arts.gov/stories/blog/2016/spotlight-harvards-glass-flowers" target="_blank" rel="noopener">National Endowment for the Arts ↗</a>'
    },
    {
      year: 2024,
      citation: 'Bethany Carland-Adams, “Dusting off a Microscopic Portion of Harvard’s Glass Flowers Collection,” <em>Harvard Gazette</em>, 9 September 2024. On <em>The Blaschkas at the Microscope: Lessons in Botany</em> and the redisplay of magnified botanical models made in 1889–1893.',
      links: '<a href="https://news.harvard.edu/gazette/story/2024/09/a-microscopic-portion-of-harvards-glass-flowers-collection/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '18';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · eighteenth expanded pass';

  if (!document.querySelector('script[data-bib-pass19-loader]')) {
    const pass19 = document.createElement('script');
    pass19.src = 'bibliography-pass19.js?v=20260809-1';
    pass19.dataset.bibPass19Loader = 'true';
    document.head.appendChild(pass19);
  }
})();
