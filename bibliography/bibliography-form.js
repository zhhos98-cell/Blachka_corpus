(() => {
  const main = document.querySelector('.subpage-main');
  if (!main) return;

  const list = main.querySelector('.bib-list');
  if (list && !list.querySelector('[data-bib-pass="4"]')) {
    const records = [
      {
        year: 1895,
        citation: 'John Ritchie Jr., “The Ware Memorial,” <em>The Commonwealth</em> (Massachusetts), 1895. Publication details are not identified in the archival citation.',
        links: '<a href="https://thecela.org/wp-content/uploads/LRR_13_POPULAR-RECEPTION-FOR-HARVARDS-GLASS-FLOWERS.pdf" target="_blank" rel="noopener">HOLLIS reception study ↗</a>'
      },
      {
        year: 1959,
        citation: '“Glass Flowers; Ware Collection Stars Life-Size Models,” <em>The New York Times</em>, 25 January 1959.',
        links: '<a href="https://vi.web-platforms-vi.nyti.nyt.net/sitemap/1959/01/25/" target="_blank" rel="noopener">New York Times archive index ↗</a>'
      },
      {
        year: 1984,
        citation: 'Valerie G. Scoon, “Glass Flowers Show Mastery of Art, Science,” <em>The Harvard Crimson</em>, 14 December 1984.',
        links: '<a href="https://www.thecrimson.com/article/1984/12/14/glass-flowers-show-mastery-of-art/" target="_blank" rel="noopener">Harvard Crimson ↗</a>'
      },
      {
        year: 1997,
        citation: 'Gerhard Scholtz, “Glasmodell eines marinen Polychaeten aus der Werkstatt von Leopold und Rudolf Blaschka,” in Christoph von Campenhausen, ed., <em>Andenken Zoologischer Vergangenheit</em>, 78–79. Mainz, 1997.',
        links: '<a href="https://www.biologie.hu-berlin.de/de/gruppenseiten/compzool/till-ramm/people/publikationen-gerhard-scholtz/%40%40download/file/Publikationen.pdf" target="_blank" rel="noopener">Author publication list ↗</a>'
      },
      {
        year: 2000,
        citation: 'Henri Reiling, “Václav Frič (1839–1916): Traces in Archives and Museums,” in Ekkehard Höxtermann et al., eds., <em>Berichte zur Geschichte der Hydro- und Meeresbiologie und weitere Beiträge zur 8. Jahrestagung der DGGTB in Rostock 1999</em>, <em>Verhandlungen zur Geschichte und Theorie der Biologie</em> 5: 341–357. Berlin: Verlag für Wissenschaft und Bildung.',
        links: '<a href="https://publikace.nm.cz/en/file/94a339cf9d72ad02199fa24d58e8e761/15443/171-2002-Reiling.pdf" target="_blank" rel="noopener">National Museum Prague bibliography ↗</a>'
      },
      {
        year: 2000,
        citation: 'Andrew Brooks, “Care for Glass Flowers Branches Out,” <em>Harvard Gazette</em>, 16 November 2000.',
        links: '<a href="https://news.harvard.edu/gazette/story/2000/11/care-for-glass-flowers-branches-out/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
      },
      {
        year: 2001,
        citation: 'Bruno P. Kremer, “Natur im Museum: Die Glasblumen-Sammlung in Harvard,” <em>Natur &amp; Museum</em> 131: 69–74.',
        links: '<a href="https://www.stadtwikidd.de/wiki/Blaschka-Sammlung" target="_blank" rel="noopener">Dresden bibliography record ↗</a>'
      },
      {
        year: 2001,
        citation: 'William Warmus, “More Than Art: The Blaschka Marine Invertebrates,” <em>Glass</em>, Summer 2001.',
        links: '<a href="https://www.warmus.com/Blaschka%20Sea%20Creatures%20Cornell%20Warmus.htm" target="_blank" rel="noopener">Author web version ↗</a>'
      },
      {
        year: 2001,
        citation: 'Alvin Powell, “These Creatures See Dusty Duty,” <em>Harvard Gazette</em>, 6 December 2001.',
        links: '<a href="https://news.harvard.edu/gazette/story/2001/12/harvard-gazette-these-creatures-see-dusty-duty/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
      },
      {
        year: 2006,
        citation: 'Henri Reiling, “‘… von unserer aufrichtigen Vorliebe zur Naturwissenschaft geleitet’,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 37–47. Tübingen: Stadtmuseum Tübingen.',
        links: '<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Open catalogue PDF ↗</a>'
      },
      {
        year: 2006,
        citation: 'Lorraine Daston, “Appearances All the Way Down: The Glass Flowers as Scientific Models,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 60–67. Tübingen: Stadtmuseum Tübingen.',
        links: '<a href="https://www.mpg.de/14613479/publications?page=328" target="_blank" rel="noopener">Max Planck publication record ↗</a> · <a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Open catalogue PDF ↗</a>'
      },
      {
        year: 2006,
        citation: 'Sabine Hackethal, “Faszination des Unscheinbaren – Zoologische Modelle in Lehre und Ausstellungen,” in Karlheinz Wiegmann and Meike Niepelt, eds., <em>Kunstformen des Meeres: Zoologische Glasmodelle von Leopold und Rudolf Blaschka 1863–1890</em>, 69–81. Tübingen: Stadtmuseum Tübingen.',
        links: '<a href="https://artsandculture.google.com/story/works-of-art-for-science-museum-fuer-naturkunde-berlin/MwVBFWmlRzwzPQ?hl=en" target="_blank" rel="noopener">Museum für Naturkunde reference ↗</a> · <a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener">Open catalogue PDF ↗</a>'
      },
      {
        year: 2006,
        citation: 'Martin Lindner, Heidi Koch, and Hans-Jürgen Koch, “Vorsicht, Geschöpfe aus Glas!” <em>GEO</em>, no. 12 (December 2006).',
        links: '<a href="https://www.altezeitschriften.de/geo-das-neue-bild-der-erde/1028-geo-nr-12-dezember-2006-das-immunsystem.html" target="_blank" rel="noopener">Issue contents ↗</a>'
      },
      {
        year: 2006,
        citation: 'Steve Bradt, “Eclipsed for Decades, Harvard’s Glass Animals Step Out,” <em>Harvard Gazette</em>, 14 December 2006.',
        links: '<a href="https://news.harvard.edu/gazette/story/2006/12/eclipsed-for-decades-harvards-glass-animals-step-out/" target="_blank" rel="noopener">Harvard Gazette ↗</a>'
      },
      {
        year: 2008,
        citation: 'Martin Rasper, Heidi Koch, and Hans-Jürgen Koch, “Schillernde Schönheiten – Meerestiere aus Glas,” <em>Natur &amp; Kosmos</em>, no. 3 (2008).',
        links: '<a href="https://www.chemie-schule.de/KnowHow/Glasmodelle_der_Blaschkas" target="_blank" rel="noopener">Bibliographic record ↗</a>'
      },
      {
        year: 2014,
        citation: 'Henri Reiling, “In dienst van de evolutietheorie” [author’s preferred title: “The Blaschkas and Haeckel: Shared Fascination, Parallel Development”], <em>Origine: tijdschrift voor kunst, antiek en design</em> 22(1): 33–41.',
        links: '<a href="https://henrireiling.blogspot.com/2014/05/" target="_blank" rel="noopener">Author note and English version ↗</a>'
      },
      {
        year: 2015,
        citation: 'Stadt Mönchengladbach, Städtisches Museum Schloss Rheydt, and Karlheinz Wiegmann, eds., <em>Wunderkammer der Meere: Entdecken und Erforschen der Welt</em>. Mönchengladbach: Städtisches Museum Schloss Rheydt, 2015. Exhibition catalogue, 51 pp. ISBN 978-3-925256-74-5.',
        links: '<a href="https://d-nb.info/1165170612/34" target="_blank" rel="noopener">Deutsche Nationalbibliografie ↗</a> · <a href="https://schlossrheydt.de/category/rueckblick/page/3/" target="_blank" rel="noopener">Museum exhibition record ↗</a>'
      },
      {
        year: 2019,
        citation: 'Patricia Egan, “Identifying the Museum’s Blaschka Glass Models,” <em>Australian Museum</em>, updated 22 January 2019.',
        links: '<a href="https://australian.museum/about/history/stories/identifying-the-museums-blaschka-glass-models/" target="_blank" rel="noopener">Australian Museum ↗</a>'
      }
    ];

    records.forEach((record) => {
      const article = document.createElement('article');
      article.className = 'bib-entry';
      article.dataset.bibPass = '4';
      article.dataset.year = String(record.year);
      article.innerHTML = `<p class="bib-year">${record.year}</p><div><h3>${record.citation}</h3><p class="bib-links">${record.links}</p></div>`;
      list.appendChild(article);
    });

    [...list.querySelectorAll('.bib-entry')]
      .map((node, index) => ({ node, index, year: Number.parseInt(node.querySelector('.bib-year')?.textContent || '9999', 10) }))
      .sort((a, b) => (a.year - b.year) || (a.index - b.index))
      .forEach(({ node }) => list.appendChild(node));

    const scopeTitle = document.querySelector('#bib-scope-title');
    if (scopeTitle) scopeTitle.textContent = '1894–2025 · fourth expanded pass';

    const workingNote = document.querySelector('#bib-note-title')?.nextElementSibling;
    if (workingNote) {
      workingNote.textContent = 'The next passes will continue catalogue-by-catalogue and citation-by-citation. HOLLIS Series VIII remains the discovery backbone, now cross-checked more aggressively against German exhibition catalogues, author bibliographies, institutional collection histories, and mid-century reception records. Duplicate editions and modern reprints are collapsed unless they contain materially different content.';
    }
  }

  if (!document.querySelector('.bib-contribute')) {
    const note = main.querySelector('.bib-note');
    const section = document.createElement('section');
    section.className = 'bib-contribute';
    section.id = 'contribute';
    section.setAttribute('aria-labelledby', 'bib-contribute-title');
    section.innerHTML = `
      <div class="bib-contribute-inner">
        <p class="bib-contribute-kicker">Contribute</p>
        <h2 id="bib-contribute-title">Suggest a reference or collection lead</h2>
        <p class="bib-contribute-note">A submission form will be connected here. It will be used for bibliographic references, collection records, accession numbers, archival citations, corrections, and other source-based leads relevant to the project.</p>
        <div class="bib-contribute-actions">
          <button class="bib-contribute-placeholder" type="button" disabled>Submission form coming soon</button>
          <p class="bib-contribute-status">Form provider and data-handling workflow are still being selected.</p>
        </div>
      </div>
    `;

    if (note) note.insertAdjacentElement('afterend', section);
    else main.appendChild(section);
  }
})();
