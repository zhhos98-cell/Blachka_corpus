(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="19"]')) return;

  const records = [
    {
      year: 2003,
      citation: 'Dick Ahlstrom, “A Thing of Beauty Is a Joy Forever,” <em>The Irish Times</em>, 14 August 2003. On the Natural History Museum, Dublin, collection of Blaschka marine models.',
      links: '<a href="https://www.irishtimes.com/news/a-thing-of-beauty-is-a-joy-forever-1.369618" target="_blank" rel="noopener">The Irish Times ↗</a>'
    },
    {
      year: 2007,
      citation: 'David Whitehouse, “Models of Invertebrate Animals (1863–1890),” in Susan M. Rossi-Wilcox and David Whitehouse, eds., <em>Drawing upon Nature: Studies for the Blaschkas’ Glass Models</em>, 7–19. Corning, NY: The Corning Museum of Glass, 2007.',
      links: '<a href="https://info.cmog.org/publication/drawing-upon-nature-studies-blaschkas-glass-models" target="_blank" rel="noopener">Corning Museum of Glass publication record ↗</a> · <a href="https://www.almendron.com/blog/wp-content/images/2021/11/los-modelos-blaschka.pdf" target="_blank" rel="noopener">Later bibliography confirming chapter pagination ↗</a>'
    },
    {
      year: 2009,
      citation: 'Helene Ragovin, “The Creatures in the Closet,” <em>Tufts Journal</em>, 18 February 2009. On the Tufts Blaschka collection, its Corning loan, rediscovery, return, and conservation.',
      links: '<a href="https://tuftsjournal.tufts.edu/2009/02_2/corner/01/" target="_blank" rel="noopener">Tufts Journal ↗</a>'
    },
    {
      year: 2009,
      citation: 'Michael Viney, “Neither Pickled nor Dried but Preserved in Pure Glass,” <em>The Irish Times</em>, 12 September 2009. On the Dublin Blaschka marine-invertebrate collection and its conservation and display history.',
      links: '<a href="https://www.irishtimes.com/news/neither-pickled-nor-dried-but-preserved-in-pure-glass-1.737142" target="_blank" rel="noopener">The Irish Times ↗</a>'
    },
    {
      year: 2010,
      citation: 'McGill University, “Blaschka Glass Models,” <em>McGill Channels</em>, 27 February 2010. On the Redpath Museum’s 31-model collection, acquisition chronology, condition, and 2010 <em>Nature in Glass</em> exhibition.',
      links: '<a href="https://www.mcgill.ca/channels/news/blaschka-glass-models-100343" target="_blank" rel="noopener">McGill University ↗</a>'
    },
    {
      year: 2016,
      citation: 'Katherine Larson, “4,747 Models, 174 Collections, 25 Countries, and Counting,” <em>Corning Museum of Glass Blog</em>, 15 May 2016. Curatorial census of surviving and historical Blaschka marine-invertebrate collections.',
      links: '<a href="https://blog.cmog.org/2016/4747-models-174-collections-25-countries-and-counting" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2016,
      citation: 'Jonathan Heath, “A Flood, A Fire, and the Case of the Missing Blaschka Models,” <em>Corning Museum of Glass Blog</em>, 5 July 2016. On the Tufts–Corning loan, 1972 flood, recovery, conservation, and return of ten models.',
      links: '<a href="https://blog.cmog.org/2016/flood-fire-and-case-missing-blaschka-models" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2016,
      citation: 'N. Astrid R. van Giffen, “Shedding Light on a Blaschka Model,” <em>Corning Museum of Glass Blog</em>, 10 August 2016. UV examination of Blaschka model no. 173, <span class="taxon">Podocoryne carnea</span>, and its glass, resins, adhesives, and assembly.',
      links: '<a href="https://blog.cmog.org/2016/shedding-light-blaschka-model" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2017,
      citation: 'Mandy Kritzeck, “3-D Printing an Arm for a Blaschka Sea Star,” <em>Corning Museum of Glass Blog</em>, 5 April 2017. Conservation and digital reconstruction study of <span class="taxon">Ophiorachna incrassata</span>, Blaschka no. 258.',
      links: '<a href="https://blog.cmog.org/2017/3-d-printing-arm-blaschka-sea-star-0" target="_blank" rel="noopener">Corning Museum of Glass ↗</a>'
    },
    {
      year: 2019,
      citation: 'Aurélie Michel, “Les fleurs en verre de Léopold et Rudolf Blaschka: Du dessin à la fabrication des plantes en volume,” <em>Modèles-didactiques</em>, May 2019. [French]',
      links: '<a href="https://www.modeles-didactiques.fr/les-fleurs-en-verre-des-blaschka/" target="_blank" rel="noopener">Modèles-didactiques full article ↗</a> · <a href="https://cv.hal.science/aurelie-michel" target="_blank" rel="noopener">HAL author bibliography ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '19';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · nineteenth expanded pass';

  if (!document.querySelector('script[data-bib-pass20-loader]')) {
    const pass20 = document.createElement('script');
    pass20.src = 'bibliography-pass20.js?v=20260809-1';
    pass20.dataset.bibPass20Loader = 'true';
    document.head.appendChild(pass20);
  }
})();
