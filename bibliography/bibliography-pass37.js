(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="37"]')) return;

  const records = [
    {
      year: 2007,
      citation: 'Isabelle Pirotte and Valérie Rousseau, <em>Modèles en verre d’invertébrés marins de Léopold et Rudolf Blaschka : conservation préventive et proposition d’un traitement de restauration : collection de l’Institut de zoologie de l’Université de Liège</em>. Mémoire de master, Conservation-restauration des objets d’art, option céramique et verre, ESA Saint-Luc, 2007. 199 f. [French; substantial collection-level conservation study and grey literature on the Liège Blaschka models.]',
      links: '<a href="https://bibliotheque.saint-luc.be/opac_css/index.php?id=5564&lvl=author_see" target="_blank" rel="noopener">ESA Saint-Luc library catalogue ↗</a>'
    },
    {
      year: 2019,
      citation: '西野嘉章 [Yoshiaki Nishino], ジョージ・ラウドン [George Loudon], and 秋篠宮眞子 [Mako Akishino], authors; 菊池敏正 [Toshimasa Kikuchi], 松原始 [Hajime Matsubara], and 藏田愛子 [Aiko Kurata], eds., <em>十九世紀ミラビリア博物誌――ミスター・ラウドンの蒐集室より</em> [<em>19th-Century Mirabilia Natural History: From Mr. Loudon’s Collection</em>]. Intermediatheque Natural History Series 5. Tokyo: The University Museum, The University of Tokyo, 2019. [Japanese; exhibition catalogue for a scientific-teaching-model display that included fourteen Blaschka glass biological models.]',
      links: '<a href="https://umdb.um.u-tokyo.ac.jp/dkankoub/Catalog/list/recordlist.php" target="_blank" rel="noopener">University Museum catalogue ↗</a> · <a href="https://www.intermediatheque.jp/ja/press/view/id/PR053/year/2019" target="_blank" rel="noopener">Intermediatheque exhibition record ↗</a>'
    },
    {
      year: 2025,
      citation: 'David Arnaud and Marco Saraceno, “Qui regarde la traduction métrique du geste ?” <em>Socio-anthropologie</em> 51 (2025): 189–194. [French; documents the Blaschka Renaissance reconstruction of the Liège <em>Clava multicornis</em> model and motion-capture work on contemporary lampworking gestures as material and immaterial heritage.]',
      links: '<a href="https://doi.org/10.4000/14av6" target="_blank" rel="noopener">DOI ↗</a> · <a href="https://journals.openedition.org/socio-anthropologie/19441?lang=fr" target="_blank" rel="noopener">OpenEdition full text ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '37';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  // Keep research-process bookkeeping in the repository, not in the public interface.
  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = 'Published literature and historical reception';

  document.querySelector('.bib-note')?.remove();

  const cleanPublicStatus = () => {
    const status = document.querySelector('.bib-tools-status');
    if (status) {
      const cleaned = status.textContent.replace(/^\s*\d+\s+records\s*·\s*/i, '').trim();
      if (cleaned !== status.textContent.trim()) status.textContent = cleaned;
    }
  };

  const statusObserver = new MutationObserver(() => cleanPublicStatus());
  statusObserver.observe(document.body, { childList: true, subtree: true, characterData: true });
  cleanPublicStatus();
})();
