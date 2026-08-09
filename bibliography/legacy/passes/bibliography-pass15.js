(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="15"]')) return;

  const records = [
    {
      year: 2016,
      citation: 'Eva Rydlová and Ivana Kopecká, “A Blaschka Glass Model of an Octopus from the National Museum in Prague,” <em>Journal of Glass Studies</em> 58: 245–252.',
      links: '<a href="https://info.cmog.org/publication/journal-glass-studies-vol-58" target="_blank" rel="noopener">Corning Museum of Glass journal record ↗</a> · <a href="https://www.jstor.org/stable/90000978" target="_blank" rel="noopener">JSTOR record ↗</a>'
    },
    {
      year: 2020,
      citation: 'Agathe Petit, <em>“Le céphalopode brisé”: étude et conservation-restauration d’un modèle anatomique en verre de <span class="taxon">Sepia officinalis</span> de Leopold et Rudolf Blaschka, 1890 (Strasbourg, Musée zoologique)</em>. Conservation-restoration diploma thesis, Institut national du patrimoine, 2020. 331 pp. [French]',
      links: '<a href="https://mediatheque-numerique.inp.fr/documentation-oeuvres/memoires-diplome-restaurateurs-patrimoine/cephalopode-brise-etude-conservation-restauration-dun-modele-anatomique-en-verre-sepia-officinalis-leopold-rudolf-blaschka-1890" target="_blank" rel="noopener">Institut national du patrimoine ↗</a>'
    },
    {
      year: 2023,
      citation: 'Elaine Jutta Charwat, <em>The Nature of Replication: Re-contextualising 19th- and Early 20th-Century Replicas at the Oxford University Museum of Natural History – an Interdisciplinary and Comparative Approach</em>. PhD thesis, University College London, 2023.',
      links: '<a href="https://discovery.ucl.ac.uk/id/eprint/10174671/" target="_blank" rel="noopener">UCL Discovery ↗</a>'
    },
    {
      year: 2025,
      citation: 'Marek Janáč, “Skleněná chobotnice,” <em>Vesmír</em> 104, no. 4 (2025): 198. [Czech]',
      links: '<a href="https://vesmir.cz/cz/casopis/archiv-casopisu/2025/cislo-4/sklenena-chobotnice.html" target="_blank" rel="noopener">Vesmír full article ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '15';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1883–2026 · fifteenth expanded pass';

  if (!document.querySelector('script[data-bib-pass16-loader]')) {
    const pass16 = document.createElement('script');
    pass16.src = 'bibliography-pass16.js?v=20260809-1';
    pass16.dataset.bibPass16Loader = 'true';
    document.head.appendChild(pass16);
  }
})();