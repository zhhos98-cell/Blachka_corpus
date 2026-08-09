(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="20"]')) return;

  const records = [
    {
      year: 2016,
      citation: 'Andy Fortune, “Photographing Glass: Blaschka Glass Models of Marine Invertebrates,” <em>Corning Museum of Glass Blog</em>, 20 October 2016. On photographic documentation and lighting of Blaschka models for <em>Fragile Legacy</em>.',
      links: '<a href="https://blog.cmog.org/2016/photographing-glass-blaschka-glass-models-marine-invertebrates" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2017,
      citation: 'Université de Strasbourg, “Portrait d’objet #5 : les modèles d’invertébrés en verre des Blaschka,” <em>L’Actu</em>, no. 149, 24 November 2017. [French; Strasbourg collection history and exhibition interpretation.]',
      links: '<a href="https://numero149.lactu.unistra.fr/indexe938.html?id=26962" target="_blank" rel="noopener">Université de Strasbourg ↗</a>'
    },
    {
      year: 2023,
      citation: 'Sophia Matsas, “Mystic Seaport Museum Presents <em>Spineless: A Glass Menagerie of Blaschka Marine Invertebrates</em>,” Mystic Seaport Museum, 3 October 2023. Exhibition press release.',
      links: '<a href="https://mysticseaport.org/press-release/mystic-seaport-museum-presents-spineless-a-glass-menagerie-of-blaschka-marine-invertebrates/" target="_blank" rel="noopener">Mystic Seaport Museum ↗</a>'
    },
    {
      year: 2023,
      citation: 'Annabel Keenan, “<em>Spineless: A Glass Menagerie of Blaschka Marine Invertebrates</em>,” <em>The Brooklyn Rail</em>, Dec/Jan 2023–24. Exhibition review.',
      links: '<a href="https://brooklynrail.org/2023/12/artseen/Spineless-A-Glass-Menagerie-of-Blaschka-Marine-Invertebrates/" target="_blank" rel="noopener">The Brooklyn Rail ↗</a>'
    },
    {
      year: 2024,
      citation: 'Hannah Stamler, “Sea Creatures for Sale,” <em>Humanities</em> 45, no. 2 (Spring 2024). Originally published as “One-Off.” On the Blaschka marine models and Mystic Seaport Museum’s <em>Spineless</em> exhibition.',
      links: '<a href="https://www.neh.gov/article/sea-creatures-sale" target="_blank" rel="noopener">National Endowment for the Humanities ↗</a>'
    },
    {
      year: 2024,
      citation: 'Jonathan Heath, “The Blaschka Legacy Lives On: Exploring Blaschka Stories From the Archive,” <em>Corning Museum of Glass Blog</em>, 26 March 2024. On Rakow Research Library Blaschka notebooks, drawings, specimens, and research use.',
      links: '<a href="https://blog.cmog.org/2024/blaschka-legacy-lives-exploring-blaschka-stories-archive" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2025,
      citation: 'Kate McNally, “Blaschka Beach Vacation,” Tufts Archival Research Center, 22 July 2025. Archive-based reconstruction of the Tufts Blaschka collection and its custodial history.',
      links: '<a href="https://tarc.tufts.edu/about/news/blaschka-beach-vacation" target="_blank" rel="noopener">Tufts Archival Research Center ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '20';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · twentieth expanded pass';
})();
