(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="7"]')) return;

  const records = [
    {
      year: 1908,
      citation: 'George Henry Kent, <em>The Ware Collection of Blaschka Glass Flower Models: A Short Description of Their Makers and Their Making</em>. Cambridge, MA: G. H. Kent, 1908.',
      links: '<a href="https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=ha001493740" target="_blank" rel="noopener">Online Books Page / HathiTrust lead ↗</a> · <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">HOLLIS archival copy ↗</a>'
    },
    {
      year: 1937,
      citation: 'Emily Hale, <em>Mary Lee Ware: January 7, 1858–January 9, 1937</em>. Boston, 1937.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">HOLLIS bibliography citation ↗</a>'
    },
    {
      year: 1964,
      citation: 'Paul C. Mangelsdorf, “Louis C. Bierweiler: An Appreciation,” <em>Botanical Museum Leaflets, Harvard University</em> 20: 334–335.',
      links: '<a href="https://biostor.org/issn/reference/160841" target="_blank" rel="noopener">BioStor / BHL ↗</a> · <a href="https://doi.org/10.5962/p.168547" target="_blank" rel="noopener">DOI ↗</a> · <a href="https://www.jstor.org/stable/41762238" target="_blank" rel="noopener">JSTOR ↗</a>'
    },
    {
      year: 2007,
      citation: 'Amgueddfa Cymru – Museum Wales, “Sea Creatures of the Deep – the Blaschka Glass Models,” collection publication, 15 May 2007.',
      links: '<a href="https://museum.wales/articles/2007-05-15/Sea-creatures-of-the-deep---the-Blaschka-Glass-models/" target="_blank" rel="noopener">Museum Wales ↗</a>'
    },
    {
      year: 2007,
      citation: 'Amgueddfa Cymru – Museum Wales, “Repairing the Irreplaceable – Conserving the Blaschka Glass Models,” conservation feature, 15 May 2007.',
      links: '<a href="https://museum.wales/articles/1309/Trwsior-gwaith-trwsio---Gofalu-am-fodelau-gwydr-unigryw-Blaschka/" target="_blank" rel="noopener">Museum Wales ↗</a>'
    },
    {
      year: 2010,
      citation: 'Geoff Swinney, “The Blaschka Models,” <em>National Museums Scotland Blog</em>, 1 October 2010.',
      links: '<a href="https://blog.nms.ac.uk/2010/10/01/the-blaschka-models/" target="_blank" rel="noopener">National Museums Scotland ↗</a>'
    },
    {
      year: 2011,
      citation: 'Harvard Museum of Natural History, “The Ware Collection of Glass Models of Plants,” 1 March 2011.',
      links: '<a href="https://www.hmnh.harvard.edu/news/ware-collection-glass-models-plants" target="_blank" rel="noopener">Harvard Museum of Natural History ↗</a>'
    },
    {
      year: 2015,
      citation: 'Gregor Eder, Florian Huber, Irene Lichtscheidl-Schultz, Mitchell G. Ash, Hans Leo Nemeschkal, and Maximilian Petrasko, eds., <em>Blaschka-Glasmodelle mariner Invertebraten der Zoologischen Sammlung am Department für Theoretische Biologie der Universität Wien</em>. Vienna: Universität Wien, 2015. Web publication / digital collection.',
      links: '<a href="https://ucrisportal.univie.ac.at/de/publications/blaschka-glasmodelle-mariner-invertebraten-der-zoologischen-samml/" target="_blank" rel="noopener">University of Vienna research portal ↗</a>'
    },
    {
      year: 2018,
      citation: 'Hannah L. Wills, “Of Gastropods and Glass: The Grant Museum’s Blaschka Models of Invertebrates,” <em>UCL Researchers in Museums</em>, 24 April 2018.',
      links: '<a href="https://blogs.ucl.ac.uk/researchers-in-museums/2018/04/24/of-gastropods-and-glass-the-grant-museums-blaschka-models-of-invertebrates/" target="_blank" rel="noopener">UCL ↗</a>'
    },
    {
      year: 2019,
      citation: 'William Cannon, “Leafing through Glass Flowers,” <em>Harvard Gazette</em>, 12 March 2019.',
      links: '<a href="https://news.harvard.edu/gazette/story/2019/03/new-book-captures-harvards-glass-flowers-outside-their-cases/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
    },
    {
      year: 2020,
      citation: 'Australian Museum, “Blaschka Glass Models in 3D,” digital collection feature, 13 May 2020.',
      links: '<a href="https://australian.museum/learn/collections/museum-archives-library/blaschka-glass-models/blaschka-3d/" target="_blank" rel="noopener">Australian Museum ↗</a>'
    },
    {
      year: 2026,
      citation: 'Danbi Lee, “The Museum of the Earth Features the Blaschka Glass Invertebrates Collection,” <em>The Cornell Daily Sun</em>, 18 March 2026.',
      links: '<a href="https://www.cornellsun.com/article/2026/03/the-museum-of-the-earth-features-the-blaschka-glass-invertebrates-collection" target="_blank" rel="noopener">Cornell Daily Sun ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '7';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1894–2026 · seventh expanded pass';

  const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
  if (workingNote) {
    workingNote.textContent = 'The bibliography is being expanded both chronologically and collection by collection. HOLLIS Series VIII remains a discovery backbone, while institutional publications from Vienna, Cardiff, Edinburgh, London, Sydney, Ithaca, and other collection sites are being used to recover museum-specific scholarship, conservation records, exhibition writing, and digital documentation. Primary workshop and transaction records remain catalogued separately.';
  }

  if (!document.querySelector('script[data-bib-tools-loader]')) {
    const tools = document.createElement('script');
    tools.src = 'bibliography-tools.js?v=20260809-1';
    tools.dataset.bibToolsLoader = 'true';
    document.head.appendChild(tools);
  }
})();
