(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="8"]')) return;

  const records = [
    {
      year: 1984,
      citation: 'Harald Schwammer, “Kostbarkeiten aus Glas,” <em>Neue Museumskunde</em> 27(4): 276–278. [German]',
      links: '<a href="https://www.zobodat.at/pdf/VZBG_136_0001-0076.pdf" target="_blank" rel="noopener">Vienna zoology bibliography ↗</a> · <a href="https://henrireiling.blogspot.com/2015/06/" target="_blank" rel="noopener">Reiling bibliographic note ↗</a>'
    },
    {
      year: 2007,
      citation: 'Martin Rasper, with photographs by Heidi Koch and Hans-Jürgen Koch, <em>Blaschka: Gläserne Geschöpfe des Meeres</em>. Dölling und Galitz, 2007. 80 pp. ISBN 978-3-937904-64-1. [German]',
      links: '<a href="https://www.dugverlag.de/pdf/VorschauDuG_2022.pdf" target="_blank" rel="noopener">Publisher catalogue ↗</a> · <a href="https://www.eurobuch.de/buch/isbn/9783937904641.html" target="_blank" rel="noopener">Bibliographic record ↗</a>'
    },
    {
      year: 2008,
      citation: 'Jean Mariaux and Béatrice Pellegrini, <em>Blaschka: les dompteurs de verre</em>. Genève: Muséum d’histoire naturelle de la Ville de Genève, 2008. 47 pp. [French]',
      links: '<a href="https://institutions.ville-geneve.ch/fileadmin/user_upload/mhn/images/rapports_annuels/ra_2008.pdf" target="_blank" rel="noopener">Geneva museum annual report ↗</a> · <a href="https://www.geneve.ch/sites/default/files/fileadmin/public/Departement_3/Publications/cdo_fiches/13_FicheCdO_Blashka.pdf" target="_blank" rel="noopener">Geneva publication PDF ↗</a>'
    },
    {
      year: 2008,
      citation: 'Gianna Innocenti, “Il recupero e la valorizzazione di modelli ottocenteschi per una vetrina sui Protozoi,” <em>Museologia Scientifica</em>, nuova serie 2(1–2): 97–99. Includes the 1873 acquisition of Blaschka glass models at La Specola. [Italian]',
      links: '<a href="https://www.anms.it/upload/rivistefiles/192.PDF" target="_blank" rel="noopener">Open ANMS PDF ↗</a>'
    },
    {
      year: 2009,
      citation: 'Gianna Innocenti and Simone Cianfanelli, “Le collezioni di invertebrati,” in Giulio Barsanti and Guido Chelazzi, eds., <em>Il Museo di Storia Naturale dell’Università degli Studi di Firenze. Le collezioni della Specola: zoologia e cere anatomiche</em>, 132–171. Firenze: Firenze University Press, 2009. [Italian]',
      links: '<a href="https://www.researchgate.net/publication/260058633_Le_collezioni_di_invertebrati" target="_blank" rel="noopener">Author-uploaded chapter ↗</a> · <a href="https://www.sma.unifi.it/vp-277-invertebrati.html" target="_blank" rel="noopener">University of Florence collection bibliography ↗</a>'
    },
    {
      year: 2014,
      citation: '西 弘嗣 [Hiroshi Nishi], 「ガラス模型と博物館展示」, <em>第八回 ガラス工作技術シンポジウム 予稿集</em>, 東北大学, 16–17 October 2014. [Japanese]',
      links: '<a href="https://www2.tagen.tohoku.ac.jp/tech/glass/connect/sym-log/14tohoku.pdf" target="_blank" rel="noopener">Open Tohoku University proceedings PDF ↗</a>'
    },
    {
      year: 2017,
      citation: '佐々木 類 [Rui Sasaki], 「ブラシュカ父子のガラスの花 : ハーバード自然史博物館ウェア・コレクション」, <em>Confort = コンフォルト</em> 157 (August 2017): 103–107. [Japanese]',
      links: '<a href="https://ndlsearch.ndl.go.jp/books/R000000004-I029844658" target="_blank" rel="noopener">National Diet Library record ↗</a>'
    },
    {
      year: 2018,
      citation: 'Koordinierungsstelle für wissenschaftliche Universitätssammlungen in Deutschland, “Blaschka-Modelle der Universität Wien neu betrachtet,” 12 August 2018. On the display of five restored Vienna models in the art-historical exhibition <em>Lust der Täuschung</em>. [German]',
      links: '<a href="https://wissenschaftliche-sammlungen.de/de/nachrichten/aktuelles/blaschka-modelle-der-universitaet-wien-neu-betrachtet" target="_blank" rel="noopener">Institutional publication ↗</a> · <a href="https://www.kunsthalle-muc.de/lust-der-taeuschung/" target="_blank" rel="noopener">Kunsthalle München exhibition and catalogue ↗</a>'
    },
    {
      year: 2024,
      citation: 'Guido Mocafico, <em>Leopold & Rudolf Blaschka: les invertébrés marins</em>, with texts by Delphine Roche, Emmanuel G. Reynaud, and Isabelle Pirotte. Paris: Les Éditions de l’Amateur, 2024. ISBN 979-10-375-1299-4. [French]',
      links: '<a href="https://shop.pub-ulb.be/product/show/9791037512994/blaschka-les-invertebres-marins" target="_blank" rel="noopener">Book record ↗</a> · <a href="https://www.guidomocafico.com/" target="_blank" rel="noopener">Photographer project site ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '8';
    article.dataset.year = String(record.year);
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1894–2026 · eighth expanded pass';

  const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
  if (workingNote) {
    workingNote.textContent = 'The eighth pass prioritizes non-English literature and collection publications, especially German, French, Italian, Japanese, and Spanish records, while searches in Portuguese, Korean, and Chinese continue. Art-historical discovery is being cross-checked through KUBIKAT and exhibition catalogues alongside national-library and museum records.';
  }
})();
