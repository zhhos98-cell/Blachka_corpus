(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="14"]')) return;

  const records = [
    {
      year: 2017,
      citation: 'N. Astrid R. van Giffen, “The Secret of the Glass Sea Cucumbers,” <em>Corning Museum of Glass Blog</em>, 2 January 2017. Conservation and making-technique note from the <em>Fragile Legacy</em> treatment campaign. [institutional publication]',
      links: '<a href="https://blog.cmog.org/2017/secret-glass-sea-cucumbers" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2021,
      citation: 'Fuller Craft Museum, <em>Glass Lifeforms 2021</em>, exhibition, 6 November 2021–24 April 2022. Contemporary glass works explicitly developed in response to the Blaschka plant and invertebrate models. [exhibition record]',
      links: '<a href="https://fullercraft.org/exhibitions/glass-lifeforms-2021/" target="_blank" rel="noopener">Fuller Craft Museum ↗</a>'
    },
    {
      year: 2024,
      citation: 'Paleontological Research Institution / Museum of the Earth, <em>The Blaschka Glass Invertebrates</em>, exhibition and online exhibit, opened 29 August 2024. [institutional exhibition publication]',
      links: '<a href="https://www.museumoftheearth.org/exhibit/blaschka" target="_blank" rel="noopener">Museum of the Earth ↗</a>'
    },
    {
      year: 2026,
      citation: 'Patricia Egan, “Researching the Blaschka Glass Models,” <em>Australian Museum</em>, collection-history feature, updated 8 July 2026. [institutional publication]',
      links: '<a href="https://australian.museum/about/history/stories/researching-the-blaschka-glass-models/" target="_blank" rel="noopener">Australian Museum ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '14';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · fourteenth expanded pass';
})();
