(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="36"]')) return;

  const records = [
    {
      year: 2013,
      citation: '郭英剑 [Guo Yingjian], “走进哈佛自然历史博物馆” [“Entering the Harvard Museum of Natural History”], <em>中国科学报</em> [<em>China Science Daily</em>], 4 July 2013, 8. [Chinese; substantial Chinese-language reception of the Ware Collection, including its teaching purpose, patronage and glassworking techniques.]',
      links: '<a href="https://news.sciencenet.cn/sbhtmlnews/2013/7/274931.shtm" target="_blank" rel="noopener">ScienceNet / China Science Daily full article ↗</a>'
    },
    {
      year: 2017,
      citation: 'Fondazione Scienza e Tecnica, “I modelli Blaschka per la prima volta in 3D,” 15 March 2017. [Italian; direct report on experimental 3D documentation of Blaschka marine-invertebrate models in Florence, including the 118-model FST collection and material/morphological documentation.]',
      links: '<a href="https://www.fstfirenze.it/modelli-blaschka-la-volta-3d/" target="_blank" rel="noopener">Fondazione Scienza e Tecnica ↗</a>'
    },
    {
      year: 2019,
      citation: 'Teresa I. Fortoul van der Goes, “Cuando imitar se hace por amor,” <em>Revista de la Facultad de Medicina (México)</em> 62, no. 3 (May–June 2019): 57–58. [Spanish; direct Blaschka/Glass Flowers reception in a Mexican medical-education journal, using the models to discuss simulation and teaching.]',
      links: '<a href="https://doi.org/10.22201/fm.24484865e.2019.62.3.11" target="_blank" rel="noopener">DOI ↗</a> · <a href="https://www.scielo.org.mx/article_plus.php?lng=es&pid=S0026-17422019000300057&tlng=es" target="_blank" rel="noopener">SciELO full text ↗</a>'
    },
    {
      year: 2020,
      citation: 'Antonio Lazcano Araujo, “El retablo de las maravillas,” <em>Revista de la Universidad de México</em>, dossier “Animales” (May 2020). [Spanish; especially useful for the Mexican collection history: Alfonso L. Herrera, the former Museo Nacional de Historia Natural at El Chopo, and surviving Blaschka models now associated with the Museo de Historia Natural y Cultura Ambiental.]',
      links: '<a href="https://www.revistadelauniversidad.mx/articles/c71f5233-ba2f-4c01-9de1-433221050659/el-retablo-de-las-maravillas" target="_blank" rel="noopener">Revista de la Universidad de México full article ↗</a>'
    },
    {
      year: 2021,
      citation: 'Natasha Daly, “روائع بحر زجاجية” [“Glass Sea Marvels”], photographs by Guido Mocafico, <em>ناشيونال جيوغرافيك العربية</em> [<em>National Geographic AlArabiya</em>], 1 June 2021. [Arabic; direct illustrated Blaschka feature on marine models as scientific research and teaching objects and their later museum afterlives.]',
      links: '<a href="https://ngalarabiya.com/article/4193357/%D8%B1%D9%88%D8%A7%D8%A6%D8%B9-%D8%A8%D8%AD%D8%B1-%D8%B2%D8%AC%D8%A7%D8%AC%D9%8A%D8%A9" target="_blank" rel="noopener">National Geographic AlArabiya ↗</a>'
    },
    {
      year: 2023,
      citation: 'Patricia López Suárez, “Difunde cortometraje colecciones del Instituto de Biología,” <em>Gaceta UNAM</em>, 13 April 2023. [Spanish; current Mexican scientific-heritage context, explicitly identifying the Instituto de Biología / Pabellón Nacional de la Biodiversidad collection of “Animales de Cristal Blaschka.”]',
      links: '<a href="https://www.gaceta.unam.mx/difunde-cortometraje-colecciones-del-instituto-de-biologia/" target="_blank" rel="noopener">Gaceta UNAM full article ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '36';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1870–2026 · thirty-sixth expanded pass · final multilingual/global sweep';

  const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
  if (workingNote) {
    workingNote.textContent = 'This final multilingual/global sweep adds direct Chinese, Italian, Spanish and Arabic publications and extends the bibliography’s reception and collection-history geography into East Asia, Latin America and the Arabic-language sphere, while retaining earlier Australasian collection scholarship. Searches also tested Portuguese, Korean, South Asian and African routes; unverified, derivative or merely contextual hits were not promoted. The public bibliography remains Blaschka-specific: general glass history and generic natural-history model literature stay outside scope unless they substantially treat the makers, models, workshop, collection histories, conservation, scientific use or circulation.';
  }
})();
