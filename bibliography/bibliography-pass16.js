(() => {
  const list = document.querySelector('.bib-list');
  if (!list || list.querySelector('[data-bib-pass="16"]')) return;

  const records = [
    {
      year: 1862,
      citation: 'Pierre Flamm, <em>Le verrier du XIXe siècle</em>. Nancy: Lepage, 1862. viii + 511 pp. [French; material-context source identified through the University of Sheffield Elmfield Collection.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a> · <a href="https://www.hachettebnf.fr/livre/le-verrier-du-xixe-siecle-9782418003378/" target="_blank" rel="noopener">BnF/Hachette bibliographic record ↗</a>'
    },
    {
      year: 1889,
      citation: 'William Ashwell Shenstone, <em>The Methods of Glass Blowing: For the Use of Physical and Chemical Students</em>. 2nd ed. London: Rivingtons, 1889. 86 pp. [Material-context source; scientific glassworking.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a> · <a href="https://openlibrary.org/books/OL7147433M/The_methods_of_glass_blowing" target="_blank" rel="noopener">Open Library / scanned work record ↗</a>'
    },
    {
      year: 1892,
      citation: 'Franz Fischer, <em>Die Kunst der Glasmasse-Verarbeitung: genaue, übersichtliche Beschreibung der Herstellung aller Glasgegenstände, nebst ausführlicher Skizzirung der wichtigsten Stadien, welche die einzelnen Gläser bei ihrer Erzeugung durchzumachen haben</em>. Vienna: Hartleben, 1892. viii + 149 pp. [German; material-context source.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a> · <a href="https://play.google.com/store/books/details/Franz_Fischer_Die_Kunst_der_Glasmasse_Verarbeitung?id=aKv3vGDXdyIC" target="_blank" rel="noopener">Google Books / free scan ↗</a>'
    },
    {
      year: 1895,
      citation: 'Dimitrij I. Djakonow and W. Lermantoff, <em>Die Bearbeitung des Glases auf dem Blasetische: ein Handbuch für Studirende, welche sich mit wissenschaftlichen Versuchen beschäftigen</em>. Berlin: R. Friedländer & Sohn, 1895. xiii + 154 pp. [German; material-context source; scientific laboratory glassworking.]',
      links: '<a href="https://www.nature.com/articles/051580b0" target="_blank" rel="noopener">Contemporary <em>Nature</em> review ↗</a> · <a href="https://play.google.com/store/books/details/Dimitrij_I_Djakonov_Die_Bearbeitung_des_Glases_auf?id=WOkKDixYl40C" target="_blank" rel="noopener">Google Books / free scan ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield 1911 edition listing ↗</a>'
    },
    {
      year: 1898,
      citation: 'Thomas Bolas, <em>Glass Blowing and Working: For Amateurs, Experimentalists, and Technicians</em>. London: Dawbarn & Ward; New York: Truslove & Comba, 1898. 212 pp. [Material-context source.]',
      links: '<a href="https://commons.wikimedia.org/wiki/File:Glass_blowing_and_working_-_for_amateurs,_experimentalists,_and_technicians_(IA_glassblowingwork00bola).pdf" target="_blank" rel="noopener">Open scan ↗</a> · <a href="https://www.nature.com/articles/058101a0" target="_blank" rel="noopener">Contemporary <em>Nature</em> review ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1914,
      citation: 'Francis C. Frary, <em>Laboratory Manual of Glass-Blowing</em>. New York and London: McGraw-Hill, 1914. vii + 60 pp. [Material-context source; laboratory repair, apparatus modification, annealing, flames, tubing, and joining operations.]',
      links: '<a href="https://www.gutenberg.org/ebooks/30066" target="_blank" rel="noopener">Project Gutenberg full text ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1925,
      citation: 'W. E. S. Turner, “An Attempt to Improve the Qualities of Glasses Intended for Lampworking Purposes,” <em>Transactions of the Society of Glass Technology</em> 9 (1925): 133–147. [Material-context source; lampworking glass properties.]',
      links: '<a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">University of Sheffield Elmfield Collection listing ↗</a>'
    },
    {
      year: 1943,
      citation: 'W. E. S. Turner, <em>The Elements of Glass Technology for Scientific Glass Blowers (Lampworkers)</em>. Monographs on Glass Technology. Sheffield: Glass Delegacy of the University of Sheffield, 1943. 29 pp. [Material-context source.]',
      links: '<a href="https://openlibrary.org/works/OL7695412W/..._The_elements_of_glass_technology_for_scientific_glass_blowers_%28lampworkers%29" target="_blank" rel="noopener">Open Library record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    },
    {
      year: 1949,
      citation: 'W. E. Barr and Victor J. Anhorn, <em>Scientific and Industrial Glass Blowing and Laboratory Techniques</em>. Pittsburgh: Instruments Publishing Co., 1949. viii + 388 pp. [Material-context source; scientific apparatus and glassworking.]',
      links: '<a href="https://www.si.edu/object/siris_sil_54944" target="_blank" rel="noopener">Smithsonian Libraries record ↗</a> · <a href="https://cdm15847.contentdm.oclc.org/digital/api/collection/p15847coll6/id/3501/download" target="_blank" rel="noopener">Sheffield Elmfield listing ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'bib-entry';
    article.dataset.bibPass = '16';
    article.dataset.year = String(record.year);
    article.dataset.bibContext = 'material';
    article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
    list.appendChild(article);
  });

  [...list.querySelectorAll('.bib-entry')]
    .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
    .sort((a, b) => (a.year - b.year) || (a.index - b.index))
    .forEach(({ node }) => list.appendChild(node));

  const scopeTitle = document.querySelector('#bib-scope-title');
  if (scopeTitle) scopeTitle.textContent = '1862–2026 · sixteenth expanded pass';

  const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
  if (workingNote) {
    workingNote.textContent = 'The bibliography now includes a deliberately bounded material-context layer. The University of Sheffield Elmfield Collection is being used as a seed bibliography for scientific glassblowing, lampworking, glass composition and durability. These entries contextualize workshop practice and conservation questions; they are marked as material-context sources and are not presented as publications about the Blaschkas themselves.';
  }

  if (!document.querySelector('script[data-bib-pass17-loader]')) {
    const pass17 = document.createElement('script');
    pass17.src = 'bibliography-pass17.js?v=20260809-1';
    pass17.dataset.bibPass17Loader = 'true';
    document.head.appendChild(pass17);
  }
})();
