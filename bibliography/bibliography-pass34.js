(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="34"]')) return;

  const records = [
    {
      year: 2018,
      citation: '“Trésors de verre,” <em>Strasbourg Magazine</em>, no. 288 (2018). [French; on the Musée Zoologique’s 58 Blaschka models, their 1890 acquisition and teaching use, restoration needs, loans, photography and planned catalogue publication.]',
      links: '<a href="https://www.strasbourg.eu/documents/976405/1883461/201802_StrasMag_288.pdf/3250634f-326a-e56e-3909-9e0be35fbb8e?t=1519121901149&version=1.1" target="_blank" rel="noopener">Ville de Strasbourg magazine PDF ↗</a>'
    },
    {
      year: 2022,
      citation: 'Samuel Cordier, “Agathe Petit : « Il s’agit de la chose la plus étonnante que j’aie vue »,” interview with Agathe Petit, Musées de Strasbourg, November 2022. [French; collection-wide diagnosis and detailed conservation discussion of the Strasbourg Blaschka models.]',
      links: '<a href="https://www.musees.strasbourg.eu/documents/30424/689430/Agathe%2BPetit.%2BIl%2Bs%27agit%2Bde%2Bla%2Bchose%2Bla%2Bplus%2B%C3%A9tonnante%2Bque%2Bj%27aie%2Bvue%2B%28Entretien%2Bmen%C3%A9%2Bpar%2BSamuel%2BCordier%29.pdf/7066c3d5-7fd9-aa5a-ce2e-dbdb6e0e3d96?t=1725022232633&version=1.1" target="_blank" rel="noopener">Musées de Strasbourg interview PDF ↗</a>'
    },
    {
      year: 2025,
      citation: 'Strasbourg Culture, “Les modèles Blaschka,” in <em>À la découverte des Chefs-d’œuvres des Musées de Strasbourg</em>, 2025. [French; official current collection interpretation recording the first presentation of all 58 models together.]',
      links: '<a href="https://culture.strasbourg.eu/parcours/chefs-doeuvres-musees/" target="_blank" rel="noopener">Strasbourg Culture ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '34';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-fourth expanded pass';
})();
