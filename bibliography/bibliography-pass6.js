(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="6"]')) return;

  const records = [
    {
      year: 1984,
      citation: 'Richard Evans Schultes, Andrew H. Knoll, Elso S. Barghoorn, Phillip M. Rury, Leslie A. Garay, Scott E. Wilder, William A. Davis, and Howard J. Allgaier, “The Botanical Museum of Harvard University in Its 125th Year 1858–1983,” <em>Botanical Museum Leaflets, Harvard University</em> 30(1): 1–62.',
      links: '<a href="https://biostor.org/issn/reference/160998" target="_blank" rel="noopener">BioStor / BHL ↗</a> · <a href="https://doi.org/10.5962/p.168669" target="_blank" rel="noopener">DOI ↗</a>'
    },
    {
      year: 1987,
      citation: 'Joan P. Jass, “Milwaukee Public Museum Blaschka Glass Models, per Ward’s ‘Catalogue…’ of 1888,” <em>Shells and Sea Life</em> 18(2): 6–8, 32.',
      links: '<a href="https://www.conchology.be/?id=21626&amp;t=9001" target="_blank" rel="noopener">Jass publication list ↗</a> · <a href="https://www.mpm.edu/research-collections/zoology/invertebrate-zoology/curatorial-staff" target="_blank" rel="noopener">Milwaukee Public Museum ↗</a>'
    },
    {
      year: 2013,
      citation: 'E. Verveniotou, D. Sykes, H. Walker, C. Collins, and F. Ahmed, “Understanding Treasures: The Application of Micro-Computed Tomography on the Study of the Blaschka Models,” <em>Microscopy and Microanalysis</em> 19(S2): 1410–1411.',
      links: '<a href="https://academic.oup.com/mam/article/19/S2/1410/6934535" target="_blank" rel="noopener">Oxford Academic ↗</a> · <a href="https://doi.org/10.1017/S1431927613009045" target="_blank" rel="noopener">DOI ↗</a>'
    },
    {
      year: 2013,
      citation: 'Susan M. Rossi-Wilcox, “Blaschkas’ Glass Botanical Models (1886–1936).” Corning Museum of Glass, 2013.',
      links: '<a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">HOLLIS bibliography citation ↗</a>'
    },
    {
      year: 2015,
      citation: 'Marie-Dominique Wandhammer, <em>D’après nature: Formes de Haeckel et modèles en verre des Blaschka</em>. Strasbourg: Musées de la Ville de Strasbourg, 2015. Collection “Le Cabinet de l’amateur.” ISBN 978-2-35125-120-1.',
      links: '<a href="https://www.musees.strasbourg.eu/edition/-/entity/id/277682/D%E2%80%99apr%C3%A8s%2Bnature" target="_blank" rel="noopener">Musées de Strasbourg ↗</a>'
    },
    {
      year: 2023,
      citation: 'Tracy O. Drier, Loren Stump, Andrew Bearnot, Lauren Aria, Erich Moraine, Ilia A. Guzei, and Laura A. Halverson Monahan, “Re-Creation of Blaschka Invertebrate Models,” <em>Fusion: The Journal of the American Scientific Glassblowers Society</em> 71(2): 21–33.',
      links: '<a href="https://chem.wisc.edu/department-publications/" target="_blank" rel="noopener">UW–Madison publication record ↗</a> · <a href="https://blaschka.uwzm.integrativebiology.wisc.edu/project-timeline/" target="_blank" rel="noopener">Project timeline ↗</a>'
    },
    {
      year: 2024,
      citation: 'Harvard Museum of Natural History, “The Blaschkas at the Microscope: Lessons in Botany,” exhibition publication, 16 April 2024.',
      links: '<a href="https://www.hmnh.harvard.edu/news/new-glass-flowers-gallery-blaschkas-microscope-lessons-botany" target="_blank" rel="noopener">Harvard Museum of Natural History ↗</a>'
    },
    {
      year: 2025,
      citation: 'Julian Carter, “Packing the Blaschka Glass Models,” <em>NatSCA Blog</em>, 27 March 2025.',
      links: '<a href="https://natsca.blog/2025/03/27/packing-the-blaschka-glass-models/" target="_blank" rel="noopener">NatSCA ↗</a>'
    },
    {
      year: 2026,
      citation: 'Pauline Shongov, “Botanical Alchemy: The Blaschka Glass Flowers and the Vegetal Humanities,” Harvard Divinity School, Center for the Study of World Religions, 18 February 2026.',
      links: '<a href="https://cswr.hds.harvard.edu/news/2026/02/18/botanical-alchemy-blaschka-glass-flowers-and-vegetal-humanities" target="_blank" rel="noopener">Harvard CSWR ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '6';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1894–2026 · sixth expanded pass';

  const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
  if (workingNote) {
    workingNote.textContent = 'The bibliography is being expanded year by year from HOLLIS Series VIII and cross-checked against library catalogues, journal platforms, museum publications, author bibliographies, exhibition catalogues, conservation literature, and specialist scientific-glass sources. Primary workshop records remain catalogued separately; duplicate editions are collapsed unless materially different.';
  }

  if (!document.querySelector('script[data-bib-pass7-loader]')) {
    const pass7 = document.createElement('script');
    pass7.src = 'bibliography-pass7.js?v=20260809-1';
    pass7.dataset.bibPass7Loader = 'true';
    document.head.appendChild(pass7);
  }
})();
