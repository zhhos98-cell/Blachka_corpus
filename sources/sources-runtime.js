/* Consolidated Sources runtime · generated 2026-08-10 */

/* ---- sources/sources-pass2.js ---- */
(() => {
  const css = document.querySelector('link[href*="sources.css"]');
  if (css) css.href = 'sources.css?v=20260810-7';

  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-15';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const intro = document.querySelector('.source-intro');
  const firstSection = document.querySelector('.source-section');
  const list = firstSection?.querySelector('.source-list');
  if (!intro || !list || list.querySelector('[data-source-pass="2"]')) return;

  if (!document.querySelector('.entry-first-note')) {
    const note = document.createElement('p');
    note.className = 'source-note entry-first-note';
    note.textContent = 'Entry-first policy: this index records bibliographic identity, copy or repository location, and stable catalogue locators first. Full text is retrieved only when a specific research question requires it.';
    intro.insertAdjacentElement('afterend', note);
  }

  const records = [
    {date:'1863 · contemporary notice',citation:'Ludwig Reichenbach, “Marine-Aquarien mit Actinien oder Strahlblumenpolypen in naturgetreuen Modellen,” <em>Leopoldina</em>, 4. Heft (1863).',meta:'Contemporary Dresden notice associated with the earliest phase of Leopold Blaschka’s marine models. Recorded here as a source entry; no local full-text copy is being harvested.',links:'<a href="https://de.wikisource.org/wiki/Haan:Heinrich_Gottlieb_Ludwig_Reichenbach" target="_blank" rel="noopener noreferrer">Reichenbach bibliography locator ↗</a>'},
    {date:'1864 · contemporary notice',citation:'Ludwig Reichenbach, “Glasmodelle lebender Schnecken,” <em>Allgemeine naturhistorische Zeitung</em> (1864): 231.',meta:'A second contemporary notice documenting glass models of living snails. Retained as metadata first, pending copy-level bibliographic collation.',links:'<a href="https://de.wikisource.org/wiki/Haan:Heinrich_Gottlieb_Ludwig_Reichenbach" target="_blank" rel="noopener noreferrer">Reichenbach bibliography locator ↗</a>'},
    {date:'ca. 1870 / acquired 1871 · workshop catalogue',citation:'Leopold Blaschka, <em>Marine Aquarien mit Actinien: Blumenpolypen u.s.w. Zierde für elegante Zimmer wie zur Belehrung für Unterrichtsanstalten und für Museen künstlich und höchst naturgetreu dargestellt</em>. Dresden, [ca. 1870].',meta:'The Tübingen catalogue identifies a Natural History Museum London copy whose cover note records acquisition in 1871. The catalogue is described as listing 271 models.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener noreferrer">Tübingen bibliographic record ↗</a>'},
    {date:'ca. 1872 / 1874 · workshop price list',citation:'Leopold Blaschka, <em>Wenig bekannte Seethiere, welche man in natürlichen Exemplaren in Sammlungen nicht aufbewahren kann in höchst naturgetreuen lebensfrischen und dauerhaften Modellen</em>. 3. Aufl. Dresden, [ca. 1872 / 1874].',meta:'Copy-level dating remains deliberately open. Tübingen describes the third edition as [ca. 1872] and notes a British Library acquisition estimate of 1874; Google Books metadata dates the third-edition price list to January 1874.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener noreferrer">Tübingen catalogue note ↗</a> · <a href="https://play.google.com/store/books/details?id=qUlBy2c148AC" target="_blank" rel="noopener noreferrer">Google Books metadata ↗</a>'},
    {date:'1885 · workshop catalogue',citation:'Leopold Blaschka, <em>Katalog über Blaschka’s Modelle von wirbellosen Thieren dargestellt von Leopold Blaschka in Hosterwitz bei Dresden</em>. Stolpen: Druck Gustav Winter, 1885.',meta:'The Tübingen exhibition catalogue reproduces the title and identifies the copy as National Museums and Galleries of Wales, with the scan supplied by Sternwarte Kremsmünster.',links:'<a href="https://www.stadtmuseum-tuebingen.de/wp-content/uploads/2024/06/Kunstformen-des-Meeres.pdf" target="_blank" rel="noopener noreferrer">Tübingen copy-level locator ↗</a>'}
  ];

  [...records].reverse().forEach(record => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '2';
    article.innerHTML = `<p class="source-type">${record.date}</p><h3>${record.citation}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.prepend(article);
  });
})();

/* ---- sources/sources-pass3.js ---- */
(() => {
  const heading = document.querySelector('#archives-title');
  const section = heading?.closest('.source-section');
  const list = section?.querySelector('.source-list');
  if (!section || !list || list.querySelector('[data-source-pass="3"]')) return;

  if (!section.querySelector('.global-archive-note')) {
    const note = document.createElement('p');
    note.className = 'source-note global-archive-note';
    note.textContent = 'Archive-first policy: this section records named archival collections, record groups and institutional source series only when a repository or stable locator can be identified. Object-holding institutions without a concrete archival record group are kept out until the source trail is specific enough to use.';
    heading.insertAdjacentElement('afterend', note);
  }

  const records = [
    {
      type: 'United States · dedicated Blaschka archive',
      title: 'Juliette K. and Leonard S. Rakow Research Library, Corning Museum of Glass — Leopold and Rudolf Blaschka Archive.',
      meta: 'The principal workshop archive: family photographs, travel books, sketchbooks and notebooks, correspondence, account books, and roughly one thousand botanical and marine-life drawings. Corning also holds Blaschka studio tools and related object files. This is the central source base for orders, accounts, design practice, packing, correspondence and workshop afterlives.',
      links: '<a href="https://whatson.cmog.org/exhibitions-galleries/blaschka-sea-creatures-inspiration-and-creation" target="_blank" rel="noopener">CMoG archive description ↗</a> · <a href="https://press.cmog.org/2015/2016-exhibitions-explore-intersections-science-art-17th-century" target="_blank" rel="noopener">Rakow holdings statement ↗</a>'
    },
    {
      type: 'United States · dealer and distribution archive',
      title: 'University of Rochester, Rare Books, Special Collections, and Preservation — Henry Augustus Ward Papers, 1840–1933 (A.W23), and Ward’s Natural Science Establishment Papers, 1876–1988 (D.231).',
      meta: 'The collection of record for Henry A. Ward and the business archive of Ward’s Natural Science Establishment. For Blaschka research it is the key North-American dealer archive: catalogues, correspondence, purchase and sales records, and institutional transactions can be read against the Dresden workshop books.',
      links: '<a href="https://www.library.rochester.edu/rbscp/special-collections-development-and-management" target="_blank" rel="noopener">Rochester collection statement ↗</a> · <a href="https://wardproject.org/" target="_blank" rel="noopener">Ward Project ↗</a>'
    },
    {
      type: 'United States · college museum and purchase records',
      title: 'Vassar College Archives & Special Collections — Vassar College Natural History Museum Records, 1866–1969, plus Natural History Department files for 1887–1891.',
      meta: 'The finding aid identifies vendor and collector correspondence, inventories, specimen/model descriptions, purchase records and loans. Two especially high-yield College Archives targets overlap the Blaschka purchase year exactly: Box 6 Folder 4.82, Natural History Department Reports, 1887–1891, and Box 6 Folder 4.83, Catalog of Cabinet, agreements, documents and correspondence.',
      links: '<a href="https://digitallibrary.vassar.edu/sites/default/files/2025-01/Guide%20to%20the%20Vassar%20College%20Natural%20History%20Museum%20Records%2C%201866-1969%20%28bulk%201906-1944%29.pdf" target="_blank" rel="noopener">Vassar finding aid PDF ↗</a> · <a href="https://digitallibrary.vassar.edu/onlineexhibitions" target="_blank" rel="noopener">Vassar Digital Library / finding aids ↗</a>'
    },
    {
      type: 'United States · university departmental archive',
      title: 'Tufts Archival Research Center — Department of Biology Records, 1960–1989 (UA152).',
      meta: 'TARC identifies UA152 as the archival source for the Blaschka custody story, including the Russell Carpenter–Corning correspondence surrounding the 1960s loan. It is the strongest Tufts record group for reconstructing transfer dates, ownership language, object lists and the later archival rediscovery of the models.',
      links: '<a href="https://tarc.tufts.edu/about/news/blaschka-beach-vacation" target="_blank" rel="noopener">TARC Blaschka archive note ↗</a>'
    },
    {
      type: 'New Zealand · museum manuscript correspondence',
      title: 'Auckland War Memorial Museum Tāmaki Paenga Hira — Cheeseman–Ward manuscript correspondence.',
      meta: 'Auckland Museum manuscript series preserve both sides of the procurement exchange. Published identifiers include Cheeseman outward correspondence MUS-1996-6-2 and Ward inward correspondence MUS-1995-38, covering the 1882 catalogue request, exchange terms, the 1884 sample request, 1885 payment arrangements and the repeatedly deferred larger order.',
      links: '<a href="https://doi.org/10.32912/ram.2019.54.2" target="_blank" rel="noopener">Records of the Auckland Museum archival study / locator ↗</a>'
    },
    {
      type: 'Australia · museum archives and collection registers',
      title: 'Australian Museum Archives, Rare Books and Library Collections — Blaschka glass-model archive and nineteenth-century museum records.',
      meta: 'The archival reconstruction joins the Old Collection register to Trustee Minutes, Outward Letter Books and surviving purchase correspondence. These records establish the 1879 order through Václav Frič and the three mixed shipments; the surviving glass models themselves are now held within the Museum’s Archives collection as AMS582.',
      links: '<a href="https://australian.museum/about/history/stories/researching-the-blaschka-glass-models/" target="_blank" rel="noopener">Archival reconstruction ↗</a> · <a href="https://australian.museum/learn/collections/museum-archives-library/blaschka-glass-models/" target="_blank" rel="noopener">Archive collection page ↗</a>'
    },
    {
      type: 'United Kingdom · university and museum archive',
      title: 'University of Dundee Archive Services — University collections and D’Arcy Thompson records.',
      meta: 'The University archive holds institutional minutes, reports, correspondence, photographs and staff papers, including D’Arcy Thompson material. The online catalogue exposes later Thompson correspondence such as UR-SF 2/12/2 (1891–1946). Because that sub-series begins after the 1888/1889 Blaschka acquisition, it is useful for afterlife and museum context rather than direct order proof.',
      links: '<a href="https://www.dundee.ac.uk/archives/university-collection" target="_blank" rel="noopener">University archive collection ↗</a> · <a href="https://archives.dundee.ac.uk/ur-sf-2-12-2" target="_blank" rel="noopener">D’Arcy Thompson correspondence UR-SF 2/12/2 ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '3';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });
})();

/* ---- sources/sources-pass4.js ---- */
(() => {
  const heading = document.querySelector('#archives-title');
  const section = heading?.closest('.source-section');
  const list = section?.querySelector('.source-list');
  if (!section || !list || list.querySelector('[data-source-pass="4"]')) return;

  if (!section.querySelector('.archive-data-link')) {
    const dataNote = document.createElement('p');
    dataNote.className = 'source-note archive-data-link';
    dataNote.innerHTML = 'Machine-readable archival register: <a href="global-archive-register.json" target="_blank" rel="noopener">global-archive-register.json ↗</a>. Entries distinguish direct Blaschka archives, dealer/business archives, receiving-side institutional archives and candidate archival bridges.';
    heading.insertAdjacentElement('afterend', dataNote);
  }

  const records = [
    {
      type: 'United Kingdom · direct workshop correspondence',
      title: 'Natural History Museum Archives — Keeper of Zoology’s Correspondence and Files, DF/ZOO/200.',
      meta: 'Two unusually precise Blaschka items are publicly catalogued. DF/ZOO/200/1/169–170 (1875) contains two letters from Leopold Blaschka to A. C. L. G. Günther plus an enclosed catalogue of sea-animal models with prices. DF/ZOO/200/30/38 is a postcard from Leopold Blaschka to Stuart Oliver Ridley dated 7 October 1886. The same archive series can be joined to the museum’s accession registers for the 1866, 1876 and 1889 Blaschka acquisition strata.',
      links: '<a href="https://www.nhm.ac.uk/CalmView/record/catalog/DF/ZOO/200/1/169-170" target="_blank" rel="noopener">1875 Blaschka letters + priced catalogue ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?AddBasket=DF%2FZOO%2F200%2F30%2F38&id=DF%2FZOO%2F200%2F30%2F38&src=CalmView.Catalog" target="_blank" rel="noopener">1886 postcard ↗</a>'
    },
    {
      type: 'United States · object archive with item-level descriptions',
      title: 'Academy of Natural Sciences of Drexel University Archives — Glass Models of Marine Invertebrates by Leopold and Rudolph Blaschka, ANSP-2012-027-Artifact.',
      meta: 'A rare archive in which the surviving models, original back boards, labels, fragments, condition notes and collection history are described together. The finding aid records 48 glass models and 53 descriptive units overall, including item-level physical descriptions and surviving Ward labels. Related item ANSP-2012-060 is an 1879 Ward’s Natural Science Establishment pamphlet whose final page advertised Blaschka glass models.',
      links: '<a href="https://archivalcollections.drexel.edu/repositories/3/resources/842" target="_blank" rel="noopener">ANSP Blaschka collection finding aid ↗</a> · <a href="https://archivalcollections.drexel.edu/agents/people/1269" target="_blank" rel="noopener">Related Ward pamphlet / Blaschka records ↗</a>'
    },
    {
      type: 'United States · custody, restoration and institutional memory',
      title: 'Cornell University Library, Division of Rare and Manuscript Collections — Elaine D. Engst papers (13-6-4088) and Barlow Ware papers (4-3-2587).',
      meta: 'The Engst papers contain Box 1, Folder 66, “Correspondence on the Permanent Loan of the Blaschka Models to the Corning Museum of Glass,” dated 1963 and 1990. The Barlow Ware papers preserve later restoration and exhibition history, including Box 4, Folder 18, “Blaschka Marine Invertebrate Collection project” (2006), alongside files on the Blaschka collections and publications. These archives document custody and conservation after the original Cornell acquisition rather than the nineteenth-century order alone.',
      links: '<a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA04088.html" target="_blank" rel="noopener">Elaine D. Engst papers ↗</a> · <a href="https://rmc.library.cornell.edu/EAD/htmldocs/RMA02587.html" target="_blank" rel="noopener">Barlow Ware papers ↗</a>'
    },
    {
      type: 'New Zealand · direct Canterbury order correspondence',
      title: 'Alexander Turnbull Library / National Library of New Zealand — Haast family papers and John C. Yaldwyn papers.',
      meta: 'The Haast family collection contains MS-Papers-0037-165, “Blaschka - Brahe, and Cotta,” within Sir Julius von Haast’s German letters; researchers are directed to microfilm surrogate MS-Copy-Micro-0717-13. A second direct source is Yaldwyn MS-Papers-10780-26, “Papers relating to glass models of invertebrate animals,” which explicitly includes 1879–1884 correspondence concerning acquisition by Sir Julius von Haast and 1974–1975 correspondence about a later loan from Canterbury Museum.',
      links: '<a href="https://natlib.govt.nz/records/23093415" target="_blank" rel="noopener">Haast: Blaschka - Brahe, and Cotta ↗</a> · <a href="https://natlib.govt.nz/records/22775770" target="_blank" rel="noopener">Yaldwyn papers / glass models file ↗</a>'
    },
    {
      type: 'Ireland · national museum accession and administrative archive',
      title: 'National Museum of Ireland Archives and Records Service — Natural History Division archives.',
      meta: 'NMIAS preserves administrative and collections records from 1877 onward, including Museum Accession Registers, correspondence, curator research files, exhibition briefs, minutes and draft annual reports. The Museum states that the Archives of the Natural History Division are an active cataloguing project. For the Irish Blaschka network this is the receiving-side archive needed to connect historic invoices, transfers and loans to present Natural History holdings.',
      links: '<a href="https://www.museum.ie/en-IE/Collections-Research/Research-Services/Archives-and-Records-Service" target="_blank" rel="noopener">NMI Archives and Records Service ↗</a> · <a href="https://www.museum.ie/en-ie/collections-research/registration-department/major-projects" target="_blank" rel="noopener">Natural History archives cataloguing project ↗</a>'
    },
    {
      type: 'Czech Republic · curator and museum provenance archive',
      title: 'Archiv Národního muzea, Prague — personal fonds of Antonín Frič.',
      meta: 'The National Museum Archive preserves Frič’s written estate, documenting a career that culminated in direction of the museum’s zoological and palaeontological collections. For Blaschka work this fonds is a receiving-side counterpart to the Dresden workshop correspondence and the museum’s 1884 accession evidence. A direct Frič-to-Blaschka transaction file remains to be isolated at item level, so the archive is indexed here as a high-priority provenance source rather than a completed object crosswalk.',
      links: '<a href="https://publikace.nm.cz/periodicke-publikace/anrhmah/182-1-2/archiv-narodniho-muzea-predstavuje-osobni-fondy-antonina-frice-a-bohuslava-jiruse1" target="_blank" rel="noopener">National Museum Archive description of the Frič fonds ↗</a>'
    },
    {
      type: 'Canada · receiving-side museum and curator papers',
      title: 'McGill University Archives — Dawson-Harrington Families Fonds (MG1022), especially John William Dawson correspondence and Redpath Museum files.',
      meta: 'The Dawson family archive is a promising receiving-side source for the Redpath collection. Project work has isolated CA MUA MG1022-2-1 as the main John William Dawson correspondence series and an 1880 file, CA MUA MG1022-2-3-0073, containing manuscripts on “Natural Science at McGill” and “The Peter Redpath Museum and matters connected therewith.” A Blaschka-specific invoice or order has yet to be identified, so this entry remains explicitly a candidate archival bridge.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/informationobject/browse?collection=139989&levels=224&repos=440&showAdvanced=1&sort=identifier&sortDir=desc&topLod=0&view=table" target="_blank" rel="noopener">Dawson-Harrington fonds / McGill University Archives ↗</a>'
    },
    {
      type: 'New Zealand · museum accession register and institutional papers',
      title: 'Tūhura Otago Museum Archive and Hocken Collections, University of Otago — early museum registers and Hutton/Hector papers.',
      meta: 'The project has identified the Otago Museum “First Register of Museum Specimens, 1868–1892” as the most promising accession-level source for the 57-model collection; the relevant register pages are not yet publicly digitised. Hocken Collections provides the surrounding university and scientific correspondence infrastructure, including Hutton and Hector material. This entry is retained as a register-level archive target with page-level verification still pending.',
      links: '<a href="https://www.otago.ac.nz/library/hocken" target="_blank" rel="noopener">Hocken Collections ↗</a> · <a href="https://www.otago.ac.nz/library/hocken/university-archives" target="_blank" rel="noopener">University Archives / Hākena search ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '4';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });
})();

/* ---- sources/sources-pass5.js ---- */
(() => {
  const archivesSection = document.querySelector('#archives-title')?.closest('.source-section');
  if (!archivesSection || document.querySelector('#dealer-archives-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-archives-title');
  section.innerHTML = `
    <p class="source-kicker">Dealers and distribution</p>
    <h2 id="dealer-archives-title">Dealer archives and dispersed business correspondence</h2>
    <p class="source-note">The dealer-source sweep is now closed at broad discovery level. Ward survives as a concentrated personal and corporate archive in Rochester; Damon and Frič must be reconstructed across workshop and customer-side records. Further additions are evidence-led rather than general searches. Canonical machine-readable register: <a href="dealer-archive-register.json" target="_blank" rel="noopener">dealer-archive-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'North America · intact dealer and corporate archive',
      title: 'University of Rochester — Henry Augustus Ward Papers (A.W23) and Ward’s Natural Science Establishment Papers (D.231).',
      meta: 'The strongest surviving dealer archive in the network. Rochester identifies Ward as a collection of record and preserves both his papers and the corporate archive. Direct Blaschka-linked dealer evidence can already be joined to the 1879 Ward advertising pamphlet at ANSP, the Auckland Cheeseman–Ward transaction sequence, the Boston Society invoice layer, and the 1893 Columbian Museum contract. Customer-side Ward files also survive at Smithsonian, Canterbury/Haast, Cornell and the Bayerisches Hauptstaatsarchiv. The next task is item-level retrieval inside A.W23/D.231, not more generic Ward discovery.',
      links: '<a href="https://www.library.rochester.edu/rbscp/special-collections-development-and-management" target="_blank" rel="noopener">Rochester collection of record ↗</a> · <a href="https://archivalcollections.drexel.edu/agents/corporate_entities/72" target="_blank" rel="noopener">ANSP 1879 Ward pamphlet ↗</a> · <a href="https://siarchives.si.edu/collections/siris_arc_216765" target="_blank" rel="noopener">Smithsonian Ward correspondence ↗</a>'
    },
    {
      type: 'Great Britain and Ireland · distributed dealer archive',
      title: 'Robert Damon / Robert Ferris Damon — reconstructed from Rakow workshop records and customer-side archives.',
      meta: 'No dedicated Damon corporate fonds has been identified in the public-catalogue sweep. Rakow preserves the strongest Blaschka business sequence: agency arrangements, British Museum and school orders, packing, insurance, breakage, and later Jeypore and Liverpool finance/routing. McGill adds a controlled 1877–1881 corpus of ten Robert Damon letters to John William Dawson plus one letter to Damon; NHM preserves a much wider Damon purchasing relationship; BayHStA has a dealer-specific 1873 file; Morgan and Te Papa preserve same-period business correspondence. The McGill letters remain unassigned to Blaschka until their texts are inspected.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill Damon 10+1 correspondence ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon authority and records ↗</a> · <a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Ruskin–Damon letters ↗</a>'
    },
    {
      type: 'Austria-Hungary and international resale · distributed dealer archive',
      title: 'Václav Frič / V. Frič — workshop correspondence plus institutional dealer files from Prague to Berlin, Munich, Hildesheim, Madrid and Sydney.',
      meta: 'No complete V. Frič company fonds has been identified, but the distributed archive is now substantial. Rakow preserves the 1884 Frič shipment/gift sequence; Australian Museum records directly reconstruct its 1879–1883 Blaschka procurement through Frič; Prague closes the four-model 1884 gift; Museum für Naturkunde Berlin explicitly lists correspondence with Frič’s Prague natural-history trade; Hildesheim has an 1880 dealer-specific acquisition file; BayHStA has a Frič acquisition file for 1864–1869 and 1883; Madrid preserves a digitised 1885 Frič business letter. Berlin’s written records are currently inaccessible and are expected to reopen in Q4 2027.',
      links: '<a href="https://www.museumfuernaturkunde.berlin/en/research/collection/archive/document-collection/" target="_blank" rel="noopener">MfN written records / Frič correspondence ↗</a> · <a href="https://www.arcinsys.niedersachsen.de/arcinsys/list.action?nodeid=g312285&amp;page=1" target="_blank" rel="noopener">Hildesheim Frič acquisition file ↗</a> · <a href="https://simurg.csic.es/view/CSICAR000061499/carta-de-vaclav-fric-a-ignacio-bolivar-sobre-oferta-de-compra-de-insectos" target="_blank" rel="noopener">Madrid 1885 Frič letter ↗</a>'
    },
    {
      type: 'Cross-dealer control · one receiving institution, three dealer files',
      title: 'Bayerisches Hauptstaatsarchiv — Zoologische Staatssammlung 113, 124 and 127: Frič, Damon and Ward.',
      meta: 'The same acquisition series preserves dealer-specific files for V. Frič (1864–1869, 1883), Robert Damon (1873), and Ward’s Museum of Mineralogy, Geology & Zoology (1875). This is the cleanest comparative archive yet found for studying how one nineteenth-century zoological institution documented three different natural-history dealers. The files are not counted as Blaschka evidence until inspected, but they provide an unusually controlled archive for dealer practice.',
      links: '<a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA Zoologische Staatssammlung acquisition files ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '5';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  archivesSection.insertAdjacentElement('beforebegin', section);
})();

/* ---- sources/sources-pass6.js ---- */
(() => {
  const dealerHeading = document.querySelector('#dealer-archives-title');
  const dealerSection = dealerHeading?.closest('.source-section');
  if (!dealerSection || document.querySelector('#dealer-comparators-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-comparators-title');
  section.innerHTML = `
    <p class="source-kicker">Commercial comparison</p>
    <h2 id="dealer-comparators-title">Dealer ecology and transaction comparators</h2>
    <p class="source-note">These records are controls, not additional Blaschka dealers. They preserve comparable nineteenth-century natural-history trade in the same archives, institutions, or commercial workflows and help separate object-specific practices from ordinary dealer procedure. Machine-readable register: <a href="dealer-comparator-register.json" target="_blank" rel="noopener">dealer-comparator-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Germany · controlled receiving-side dealer series',
      title: 'Bayerisches Hauptstaatsarchiv — Zoologische Staatssammlung acquisition files: Frič 113, Schlüter & Söhne 123, Damon 124, Ward 127, and adjacent dealer files.',
      meta: 'The same zoological institution filed acquisitions from all three documented Blaschka dealer routes alongside competing natural-history traders. The files are not automatically Blaschka records. Their value is comparative: one administrative system can be used to compare ordering, catalogues, prices, receipts, exchange and other acquisition paperwork across dealers.',
      links: '<a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">BayHStA Zoologische Staatssammlung finding aid ↗</a>'
    },
    {
      type: 'Germany · local dealer ecology, 1878–1884',
      title: 'Stadtarchiv Hildesheim — Best. 741, Zoologische Sammlung allgemein: V. Frič, H. Putze, Hugo Schilling, L. W. Schaufuss and Museum Godeffroy acquisition files.',
      meta: 'Hildesheim preserves a second controlled receiving-side archive. Frič file Nr. 301 (1880) sits in the same filing structure as H. Putze’s zoological-anatomical teaching-aid establishment (Nr. 304, 1880–1884), Hugo Schilling’s natural-history business (Nr. 306, 1878–1901), L. W. Schaufuss (Nr. 305, 1867–1882) and Museum Godeffroy (Nr. 294, 1878–1884). This is useful for comparing how one museum documented models, teaching aids and natural specimens without assuming Blaschka content.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/list.action?nodeid=g312285&page=1" target="_blank" rel="noopener">Hildesheim dealer acquisition series ↗</a>'
    },
    {
      type: 'United Kingdom · same-period Damon business process',
      title: 'The Morgan Library & Museum — John Ruskin letters to Robert Damon, MA 1406.1–18, 1884–1885.',
      meta: 'Not Blaschka correspondence, but an unusually compact control for Damon’s ordinary dealer workflow. Individual letters document selection from a shipment, return of a catalogue, cheque payment, goods sent on approval, requests for catalogues, retained and returned items, and later reconciliation through a list of what the customer kept. The sequence supplies a process vocabulary against which Damon-mediated Blaschka orders can be tested.',
      links: '<a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Collection record ↗</a> · <a href="https://www.themorgan.org/literary-historical/308686" target="_blank" rel="noopener">3 July 1884 shipment / catalogue / cheque ↗</a> · <a href="https://www.themorgan.org/literary-historical/308773" target="_blank" rel="noopener">31 December 1885 reconciliation ↗</a>'
    },
    {
      type: 'United States · dealer-published primary source',
      title: 'Ward’s Natural Science Bulletin, vols. 1–3 (1881–1886), Ward’s Natural Science Establishment.',
      meta: 'A public-domain run of Ward’s own commercial bulletin preserved by Smithsonian Libraries and Archives and digitised through BHL. It can be searched as dealer-produced evidence for catalogue circulation, product announcements, customer language and the wider commercial setting in which Blaschka models were marketed.',
      links: '<a href="https://www.biodiversitylibrary.org/item/212981" target="_blank" rel="noopener">BHL digitised run ↗</a>'
    },
    {
      type: 'Germany · dealer correspondence holding-level comparator',
      title: 'Museum für Naturkunde Berlin — Historical Image and Document Collections, records holding S: correspondence with Václav Frič’s natural-history trade and Firma Umlauff.',
      meta: 'The official archive description names correspondence with both Frič’s Prague natural-history trade and Firma Umlauff within the museum’s written-record holdings. The chronological overview places pre-1889 zoological records in S001, making that the first subdivision to inspect for Blaschka-era Frič material, but this is a chronological target rather than an item-level assignment. Written-record access is currently suspended during relocation.',
      links: '<a href="https://www.museumfuernaturkunde.berlin/en/research/records-collection" target="_blank" rel="noopener">MfN records holding S ↗</a> · <a href="https://www.museumfuernaturkunde.berlin/en/research/records-collection-chronological-overview" target="_blank" rel="noopener">Chronological overview ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '6';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  dealerSection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass7.js ---- */
(() => {
  const comparatorHeading = document.querySelector('#dealer-comparators-title');
  const comparatorSection = comparatorHeading?.closest('.source-section');
  if (!comparatorSection || document.querySelector('#dealer-documents-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-documents-title');
  section.innerHTML = `
    <p class="source-kicker">Retrieval layer</p>
    <h2 id="dealer-documents-title">Document-level dealer records</h2>
    <p class="source-note">A retrieval-oriented register now records stable item, folder and series references rather than repository names alone. It separates direct Blaschka evidence from dealer-business controls and uninspected receiving-side targets: <a href="dealer-document-register.json" target="_blank" rel="noopener">dealer-document-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Ward · direct print + receiving-side files',
      title: 'ANSP-2012-060; Smithsonian RU000189 Box 139 Folders 1–3; RU000073 Box 33; RU000070 Box 36 Folder 18.',
      meta: 'ANSP-2012-060 is direct Blaschka evidence: Ward’s 1879 pamphlet advertised the glass models and his American agency. Smithsonian records are separately guarded receiving-side or exposition files. RU000189 covers Ward business transactions with the U.S. National Museum from 1879–1895; RU000073 contains a Division of Mollusks Ward file beginning in 1890; RU000070 contains a Ward exposition file for 1892–1893.',
      links: '<a href="https://archivalcollections.drexel.edu/repositories/3/resources/842" target="_blank" rel="noopener">ANSP Blaschka / Ward archival context ↗</a> · <a href="https://siarchives.si.edu/collections/siris_arc_216765" target="_blank" rel="noopener">Smithsonian RU000189 ↗</a> · <a href="https://siarchives.si.edu/collections/siris_arc_216680" target="_blank" rel="noopener">Smithsonian RU000073 ↗</a>'
    },
    {
      type: 'Damon · letters, purchase records and process controls',
      title: 'McGill MG1022 Damon correspondence; NHM DF/PAL and DF/ZOO dealer records; Morgan MA 1406.1–18; Te Papa MU000147/007/0017.',
      meta: 'The item-level register distinguishes uninspected Damon-to-Dawson letters from NHM records that explicitly document purchases through Damon and from the Morgan Ruskin sequence, which is used only as a same-period workflow control. The McGill metadata correction is preserved: MG1022-2-1-109-0007 is not Damon; verified Damon examples include 117-0019, 135-0011 and 136-0004.',
      links: '<a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill Damon authority ↗</a> · <a href="https://www.nhm.ac.uk/CalmView/Record.aspx?id=PX32&amp;src=CalmView.Persons" target="_blank" rel="noopener">NHM Damon records ↗</a> · <a href="https://www.themorgan.org/literary-historical/191319" target="_blank" rel="noopener">Morgan Damon correspondence ↗</a>'
    },
    {
      type: 'Frič · receiving-side acquisition files and digitised business letter',
      title: 'Hildesheim Best. 741 Nr. 301; BayHStA Zoologische Staatssammlung 113; Madrid ACN0364/007; Museum für Naturkunde records holding S.',
      meta: 'These references move the Frič route from institution-level discovery toward document retrieval. Hildesheim and Bavaria preserve dealer-specific acquisition files; Madrid supplies a digitised 1885 commercial letter from the V. Frič business; Berlin officially identifies Frič correspondence at holding level. None is silently treated as a Blaschka transaction unless model content is explicit.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/list.action?nodeid=g312285&page=1" target="_blank" rel="noopener">Hildesheim acquisition files ↗</a> · <a href="https://www.gda.bayern.de/service/findmitteldatenbank/Kapitel/a1f20232-b9e9-410d-9ba2-131684437bc8" target="_blank" rel="noopener">Bavarian acquisition files ↗</a> · <a href="https://simurg.csic.es/view/CSICAR000061499/carta-de-vaclav-fric-a-ignacio-bolivar-sobre-oferta-de-compra-de-insectos" target="_blank" rel="noopener">Digitised 1885 Frič letter ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '7';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  comparatorSection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass8.js ---- */
(() => {
  const docsHeading = document.querySelector('#dealer-documents-title');
  const docsSection = docsHeading?.closest('.source-section');
  if (!docsSection || document.querySelector('#intermediaries-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'intermediaries-title');
  section.innerHTML = `
    <p class="source-kicker">Beyond the dealer</p>
    <h2 id="intermediaries-title">Forwarders, carriers and payment intermediaries</h2>
    <p class="source-note">The circulation chain did not end with the dealer. Named forwarding agents, shipping companies, banks and travelling preparators are recorded separately so that “shipment” can be reconstructed as a sequence of institutions and documents. Machine-readable register: <a href="commercial-intermediary-register.json" target="_blank" rel="noopener">commercial-intermediary-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Trieste–Bombay · ocean carrier archive',
      title: 'Civico Museo del Mare di Trieste — Archivio del Lloyd Triestino di Navigazione, 1801–1988.',
      meta: 'The Jeypore workshop correspondence names the Austro-Hungarian Lloyd at Trieste as ocean carrier for packages LB 285–286 to Bombay. The surviving Lloyd corporate collection contains correspondence, cost tables, schedules and routes, movement-of-goods tables, import/export values, receipts, contracts, accounting notes, bills of lading and bills of exchange. No Blaschka manifest has yet been isolated, but this is now the strongest carrier-side archive target in the project.',
      links: '<a href="https://www.archividellascienza.org/en/archivio/IT-MUST-GUI001-002072" target="_blank" rel="noopener">Lloyd archive description ↗</a> · <a href="https://museodelmaretrieste.it/en/lloyd/" target="_blank" rel="noopener">Civic Maritime Museum Lloyd collection ↗</a>'
    },
    {
      type: 'Bombay · forwarding and agency-house archive bridge',
      title: 'The London Archives — Grindlays and Company: Accounting and Financial, GB 0074 CLC/B/207/GR01, 1861–[1920].',
      meta: 'Workshop correspondence directs the Jeypore shipment to Grindlay & Groom in Bombay after sea carriage. The London archive catalogue records Grindlay & Co branch firms at Calcutta from 1854 and Bombay from 1865 and preserves ledgers from 1861 onward. This is a candidate bridge, not yet a recovered Jeypore record: the surviving sub-fonds must be checked for 1887 Bombay transactions before any direct connection is claimed.',
      links: '<a href="https://atom.aim25.com/index.php/grindlays-and-company-accounting-and-financial" target="_blank" rel="noopener">CLC/B/207/GR01 finding aid ↗</a> · <a href="https://www.natwestgroup.com/heritage/companies/grindlays-bank-ltd.html" target="_blank" rel="noopener">Grindlays corporate history / later holdings ↗</a>'
    },
    {
      type: 'Hamburg · unresolved forwarding archive',
      title: 'M. O. W. Möller, Hamburg — forwarding point for Liverpool case I.B. 268.',
      meta: 'The 1887 workshop dispatch evidence explicitly names M. O. W. Möller as the Hamburg forwarding point for the Liverpool Museum case. A dedicated company archive has not yet been located. Hamburg’s digitised address-book series includes the 1887 volume and is retained as the next identity-resolution route. No modern Möller firm is equated with this historical actor without a contemporary directory match.',
      links: '<a href="https://adressbuecher.sub.uni-hamburg.de/" target="_blank" rel="noopener">Hamburg digitised address books ↗</a>'
    },
    {
      type: 'Auckland · mobile human intermediary',
      title: 'Charles Francis Adams — carrier-preparator and payment intermediary in the 1885 Auckland transaction.',
      meta: 'Auckland evidence shows that circulation could be carried by a person rather than a formal shipping firm. Adams safely delivered the Ward-supplied Blaschka models and participated in a triangular settlement linking museum debt, his own account with Ward and Ward’s Australian creditor. The evidence survives in the Cheeseman–Ward manuscript correspondence rather than in a separately identified Adams business archive.',
      links: '<a href="https://doi.org/10.32912/ram.2019.54.2" target="_blank" rel="noopener">Auckland archival reconstruction / Records of Auckland Museum ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '8';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  docsSection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass9.js ---- */
(() => {
  const intermediaryHeading = document.querySelector('#intermediaries-title');
  const intermediarySection = intermediaryHeading?.closest('.source-section');
  if (!intermediarySection || document.querySelector('#ware-logistics-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'ware-logistics-title');
  section.innerHTML = `
    <p class="source-kicker">Longitudinal logistics</p>
    <h2 id="ware-logistics-title">Ware Collection: transatlantic forwarding, customs and clearance</h2>
    <p class="source-note">The Harvard botanical-model correspondence preserves repeated handoffs that can be followed across decades: workshop packing, Bremen forwarding, ocean carriage, bonded movement, customs brokerage, inspection, museum unpacking and repair. Canonical route register: <a href="ware-transatlantic-logistics-register.json" target="_blank" rel="noopener">ware-transatlantic-logistics-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1906 · Dresden–Bremen–Boston/Cambridge',
      title: 'Ehrhorn, Emden & Mayer → Norddeutscher Lloyd → E. A. Snow → Boston customs inspector → Harvard.',
      meta: 'Rudolf’s 27 October dispatch letter says the cases left Dresden for Bremen for the next North German Lloyd steamer, via Ehrhorn, Emden & Mayer; the shipment was insured and accompanied by a consular invoice. An adjacent workshop letter names Friedrich der Große as carrying the models. On 14 November Goodale wrote that the incoming boxes had been consigned to E. A. Snow, formerly a State Street custom-house broker, and ordered customs-supervised unpacking at the University Museum. The vessel link remains guarded pending date/image collation.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/detailAction.action?detailid=b17014" target="_blank" rel="noopener">Norddeutscher Lloyd archive, StAB 7.2010 ↗</a> · <a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">National Archives Boston maritime/customs records ↗</a>'
    },
    {
      type: '1923 · export control and customs brokerage',
      title: 'Four cases R.B. 1–4: German export/customs control → Ehrhorn, Emden & Mayer → New York → in bond to Boston → E. A. Snow / T. D. Downing Co. → Harvard.',
      meta: 'The 1923 correspondence records four sealed cases, export permission and customs intervention in Germany, forwarding through Bremen, and bonded movement from New York to Boston. A surviving T. D. Downing Co. invoice to Harvard, ref. L 16091, covers the same four RB 1/4 packages and itemises ocean freight and customs-entry charges; it also names Eastern Steamship Lines. This is a rare point where a workshop shipment and an American customs-broker document survive in the same archival chain.',
      links: '<a href="https://www.archives.gov/research/guide-fed-records/groups/036.html/1000" target="_blank" rel="noopener">U.S. Customs Service RG 36 ↗</a> · <a href="https://sova.si.edu/record/nmah.ac.0060.s01.01.steamboats/ref835" target="_blank" rel="noopener">Eastern Steamship Lines archival context, Smithsonian ↗</a>'
    },
    {
      type: '1929 · packing material becomes regulated material',
      title: 'Four outer cases, twenty-seven framed boxes, customs reclassification and local repair.',
      meta: 'The April 1929 workshop specification separates model value from four cases, twenty-seven framed boxes, packing material, packing wages, transport to the Dresden railway and a consular certificate. Receiving-side records show the shipment reaching Harvard with only slight breakage, while straw/hay used to protect the glass became a customs and plant-quarantine problem. The same packing material therefore functioned both as physical protection and as a border-regulated commodity.',
      links: '<a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">National Archives Boston customs research guide ↗</a> · <a href="https://www.historicnewengland.org/explore/collections-access/gusn/289065" target="_blank" rel="noopener">1929 Eastern Steamship Lines route ephemera ↗</a>'
    },
    {
      type: 'Carrier archive · Bremen / Hamburg',
      title: 'Staatsarchiv Bremen, StAB 7.2010 — Norddeutscher Lloyd, 1858–1985.',
      meta: 'The official finding aid is unusually useful about archival loss. Bremen holds only a fragment of the former corporate archive; approximately one thousand “ship files” containing photographs, voyage reports, passenger lists and cargo papers were transferred to the Hapag-Lloyd archive in Hamburg. This means the carrier archive is real but split, and early Blaschka cargo survival cannot be assumed from the corporate fonds alone.',
      links: '<a href="https://www.arcinsys.niedersachsen.de/arcinsys/detailAction.action?detailid=b17014" target="_blank" rel="noopener">StAB 7.2010 full finding aid ↗</a>'
    },
    {
      type: 'Customs archive · Boston',
      title: 'National Archives at Boston — Record Group 36, Records of the U.S. Customs Service.',
      meta: 'NARA’s Boston holdings document imports and exports, vessel entrance and clearance, cargo and maritime administration across the period of the Harvard shipments. These records are now a specific retrieval target for the 1906, 1923 and 1929 Blaschka consignments, especially customs entry, bonded movement, inspection, warehouse or manifest evidence.',
      links: '<a href="https://www.archives.gov/boston/holdings/rg-001-049.html" target="_blank" rel="noopener">NARA Boston RG 36 holdings ↗</a> · <a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">Customs and maritime finding guide ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '9';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  intermediarySection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass10.js ---- */
(() => {
  const logisticsHeading = document.querySelector('#ware-logistics-title');
  const logisticsSection = logisticsHeading?.closest('.source-section');
  if (!logisticsSection || document.querySelector('#customs-regulation-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'customs-regulation-title');
  section.innerHTML = `
    <p class="source-kicker">Border regimes</p>
    <h2 id="customs-regulation-title">Customs, export control and plant quarantine</h2>
    <p class="source-note">Border agencies generated their own classifications of the models and their packing. This layer indexes the government archives needed to follow export permission, customs valuation, bonded movement, inspection and plant-quarantine intervention: <a href="customs-regulation-register.json" target="_blank" rel="noopener">customs-regulation-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Germany · 1923 export/customs administration',
      title: 'Sächsisches Staatsarchiv — Oberfinanzpräsident Dresden (11177) and the post-1919 Saxon customs administration.',
      meta: 'Rudolf’s 1923 shipment encountered export permission, export-tax valuation and physical customs revision before the four R.B. cases could leave Dresden. The Landesfinanzamt/Oberfinanzpräsident Dresden supervised customs and excise through Abteilung II and the customs officers in its district. No Blaschka government file has yet been isolated, so these are jurisdiction-level retrieval targets rather than direct transaction records.',
      links: '<a href="https://www.archiv.sachsen.de/archiv/bestand.jsp?bestandid=11177&amp;oid=02.04.01.01&amp;syg_id=139233" target="_blank" rel="noopener">11177 Oberfinanzpräsident Dresden ↗</a> · <a href="https://www.archiv.sachsen.de/archiv/bestand.jsp?oid=02.04.01.03" target="_blank" rel="noopener">Saxon customs-office holdings ↗</a>'
    },
    {
      type: 'United States · customs archive',
      title: 'National Archives at Boston — Record Group 36, Records of the U.S. Customs Service.',
      meta: 'The Harvard correspondence repeatedly places the models inside Boston customs procedure: broker consignment and supervised unpacking in 1906, bonded movement and a customs-entry invoice in 1923, and border intervention again in 1929. RG 36 preserves the port-level administrative environment for imports, exports, vessel entrance and clearance, cargo and customs handling and is now a transaction-specific retrieval target rather than a generic repository lead.',
      links: '<a href="https://www.archives.gov/boston/finding-aids/maritime.html" target="_blank" rel="noopener">NARA Boston maritime/customs guide ↗</a> · <a href="https://www.archives.gov/research/guide-fed-records/groups/036.html" target="_blank" rel="noopener">RG 36 federal records guide ↗</a>'
    },
    {
      type: 'United States · plant quarantine archive',
      title: 'National Archives — Record Group 7, Bureau of Entomology and Plant Quarantine and predecessors.',
      meta: 'The 1929 Blaschka shipment shows that border regulation could attach to packing straw rather than to the glass models. RG 7 includes Bureau of Plant Quarantine records from 1912 onward, foreign-plant-quarantine records, Plant Quarantine Division correspondence and reports from 1927–1951, and violation cases from 1926–1941. These series provide a concrete archival route for testing how the packing material was classified and enforced at the border.',
      links: '<a href="https://www.archives.gov/research/guide-fed-records/groups/007.html" target="_blank" rel="noopener">RG 7 Bureau of Entomology and Plant Quarantine ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '10';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  logisticsSection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass11.js ---- */
(() => {
  const customsHeading = document.querySelector('#customs-regulation-title');
  const customsSection = customsHeading?.closest('.source-section');
  if (!customsSection || document.querySelector('#workshop-logistics-docs-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'workshop-logistics-docs-title');
  section.innerHTML = `
    <p class="source-kicker">Workshop documentary genres</p>
    <h2 id="workshop-logistics-docs-title">Waybills, customs receipts, crate sketches and shipment lists</h2>
    <p class="source-note">The Rakow finding aid itself contains a compact logistics dossier inside Series 04, Business Files. These titles are now indexed as retrieval targets rather than left under a generic archive citation. Container numbers are withheld where the PDF text extraction does not securely align them to individual titles. Machine-readable register: <a href="workshop-logistics-document-register.json" target="_blank" rel="noopener">workshop-logistics-document-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const rakowLink = '<a href="https://info.cmog.org/library" target="_blank" rel="noopener">Rakow archival collections / finding aids ↗</a>';
  const records = [
    {
      type: '1907–1911 · rail and customs documentation',
      title: 'International Rail Transport Waybill (1907) and Customs Receipts (1907–1911).',
      meta: 'Two unusually concrete documentary genres survive in the workshop Business Files. The waybill can expose consignor, consignee, route, case marks, weight, freight class and charges; the customs receipts can supply port, broker, date, payment and administrative classification. They are high-priority companions to the 1906–1911 Harvard correspondence.',
      links: rakowLink
    },
    {
      type: '1929 · case architecture and contents',
      title: '“List of Specimens Sent” (1929) and Sketches of Packed Crates (1929, 1932).',
      meta: 'These sources allow the packing chain to be reconstructed at object and container level: which subjects travelled, how inner units related to outer cases, and how crate design changed between shipments. They should be cross-walked with the surviving 1929 account, customs problem, arrival report and repair feedback.',
      links: rakowLink
    },
    {
      type: '1932 · consular and invoice layer',
      title: 'Consular Certificate for Shipment to Harvard University (1932) and Draft Invoice for Botanical Museum of Harvard University (1932).',
      meta: 'The two documents can separate administrative export identity and declared value from the workshop’s commercial invoice layer. Read beside the 1932 crate sketches, they provide an unusually complete candidate dossier for one late botanical-model shipment.',
      links: rakowLink
    },
    {
      type: '1936 · terminal shipment document',
      title: 'Waybill for Last Shipment to Harvard University (1936).',
      meta: 'The finding aid explicitly identifies the waybill for Rudolf’s final Harvard shipment. It provides a terminal comparison point for the earlier 1907 waybill and makes it possible to ask what changed, and what persisted, in route, carriers, case identity, weight and documentary procedure across nearly three decades.',
      links: rakowLink
    },
    {
      type: '1890s–1906 · value before circulation costs',
      title: 'Invoices (1890–1899) and Notebook: Lists of Models with Prices (1894–1906).',
      meta: 'These records are the workshop-side control needed to distinguish model value from the later costs generated by packing, freight, insurance, customs and brokerage. The distinction is essential wherever a surviving remittance, account figure or shipment total might otherwise be mistaken for the price of the glass itself.',
      links: rakowLink
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '11';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  customsSection.insertAdjacentElement('afterend', section);
})();

/* ---- sources/sources-pass12.js ---- */
(() => {
  const workshopHeading = document.querySelector('#workshop-logistics-docs-title');
  const workshopSection = workshopHeading?.closest('.source-section');
  if (!workshopSection || document.querySelector('#forwarder-continuity-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'forwarder-continuity-title');
  section.innerHTML = `
    <p class="source-kicker">Commercial continuity</p>
    <h2 id="forwarder-continuity-title">Ehrhorn, Emden & Mayer: a forwarding relationship across four decades</h2>
    <p class="source-note">Workshop correspondence documents repeated use of the same Bremen forwarding firm from at least 1891 to 1929. The evidence is now separated from generic carrier history because the firm supplied procedural memory: routes, bookings, documents, advice and handoffs. Machine-readable register: <a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">forwarder-longitudinal-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: '1891 · five cases to Harvard',
      title: 'Bremen forwarding and Bremerhaven–New York coordination.',
      meta: 'Leopold and Rudolf wrote that five large cases had gone to Bremen and would leave Bremerhaven for New York by express steamer; Ehrhorn, Emden & Mayer would send the shipping advice. This is the earliest direct dated use of the firm currently isolated in the project corpus.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1891 evidence record ↗</a>'
    },
    {
      type: '1892 · travel as well as freight',
      title: 'Rudolf’s Bremen journey: the firm supplied travel documents and connected him to Norddeutscher Lloyd.',
      meta: 'Rudolf described the firm as “our agent”; its comptoir was beside his hotel and it provided his travel documents before he sailed on the Saale. The relationship therefore exceeded crate forwarding and connected the workshop to a broader mobility infrastructure.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1892 evidence record ↗</a>'
    },
    {
      type: '1906 · insured Harvard consignment',
      title: 'Forwarder, North German Lloyd, insurance and consular invoice in one dispatch.',
      meta: 'The October 1906 dispatch letter places the firm between Dresden and the next North German Lloyd steamer and records insurance plus a consular invoice. The forwarding relationship therefore sat at the junction between physical carriage and documentary preparation.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1906 evidence record ↗</a>'
    },
    {
      type: '1922–1923 · postwar regulatory memory',
      title: '“Our old forwarding agents”: route advice, no-repacking requirement and bonded movement.',
      meta: 'In 1922 Rudolf explicitly called Ehrhorn, Emden & Mayer the family’s old forwarding agents while seeking advice on how to avoid repacking under changed export rules. In 1923 the firm again arranged the steamer to New York before the four cases travelled in bond to Boston and into E. A. Snow’s customs-broker chain.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1922–1923 evidence record ↗</a>'
    },
    {
      type: '1929 · route choice and documentary inertia',
      title: 'Cheaper direct Boston route rejected; President Harding booked for New York.',
      meta: 'The firm proposed a cheaper direct Boston service, but Rudolf rejected it because changing route would require new consular paperwork and delay. Two days later he reported that the cases had been loaded aboard President Harding for New York. Rudolf retrospectively described the New York-in-bond-to-Boston route as used since 1888; that date is retained as his recollection until an 1888 transaction document is isolated.',
      links: '<a href="forwarder-longitudinal-register.json" target="_blank" rel="noopener">1929 evidence record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '12';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  workshopSection.insertAdjacentElement('afterend', section);

  const loadDeepSourcePasses = () => {
    if (document.querySelector('script[src*="sources-pass13.js"]')) return;
    const next = document.createElement('script');
    next.src = 'sources-pass13.js?v=20260810-1';
    next.defer = true;
    document.body.appendChild(next);
  };
  if ('requestIdleCallback' in window) requestIdleCallback(loadDeepSourcePasses, {timeout:900});
  else setTimeout(loadDeepSourcePasses, 260);
})();

/* ---- sources/sources-az.js ---- */
(async () => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-15';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const main = document.querySelector('.subpage-main');
  const intro = document.querySelector('.source-intro');
  if (!main || !intro || document.querySelector('.source-az')) return;

  const clean = value => String(value || '').replace(/\s+/g, ' ').trim();
  const fold = value => clean(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const titleForSort = node => clean(node.querySelector('h3')?.textContent).replace(/^[“"'‘’]+/, '').replace(/^the\s+/i, '');

  const countryRules = [
    ['United States', /\bUnited States\b|Harvard|Cornell|Rochester|Tufts|Vassar|Smithsonian|Corning Museum|New York|Boston|Cambridge,? Massachusetts/i],
    ['United Kingdom', /\bUnited Kingdom\b|Oxford|Cambridge|Dundee|Liverpool|London|Manchester|Nottingham|St Andrews|Cardiff|Wales|British Library|Natural History Museum London/i],
    ['Germany', /\bGermany\b|Dresden|Hamburg|Bremen|Berlin|Tübingen|Reichsbank|Bundesarchiv|SLUB|MDZ|Bayerische Staatsbibliothek/i],
    ['France', /\bFrance\b|Paris|MNHN|Muséum national/i],['Italy', /\bItaly\b|Firenze|Florence|Naples|Napoli|Pavia|Padua/i],
    ['Belgium', /\bBelgium\b|Liège|Liege|Meise|Antwerp/i],['Austria', /\bAustria\b|Vienna|Wien/i],['Netherlands', /\bNetherlands\b|Utrecht/i],
    ['Ireland', /\bIreland\b|Dublin|Galway|Belfast/i],['Australia', /\bAustralia\b|Melbourne|Sydney/i],['New Zealand', /\bNew Zealand\b|Auckland|Te Papa/i],
    ['Canada', /\bCanada\b|Montreal|McGill/i],['Mexico', /\bMexico\b|México|UNAM/i],['Argentina', /\bArgentina\b|La Plata/i],['Japan', /\bJapan\b|Tokyo|Tōkyō/i],
    ['South Africa', /\bSouth Africa\b|Cape Town|UCT|Iziko/i],['Denmark', /\bDenmark\b|Copenhagen/i],['Sweden', /\bSweden\b/i],['Czech Republic', /\bCzech\b|Prague/i],
    ['Portugal', /\bPortugal\b|Coimbra/i],['Spain', /\bSpain\b|Madrid|Cajal/i],['Switzerland', /\bSwitzerland\b|Zurich|Zürich/i]
  ];

  const sourceKind = node => {
    const section = node.closest('.source-section');
    const heading = clean(section?.querySelector('h2')?.textContent);
    const kicker = clean(section?.querySelector('.source-kicker')?.textContent);
    const text = `${clean(node.textContent)} ${heading} ${kicker}`;
    if (/Repositories used for source discovery|Discovery infrastructure/i.test(`${heading} ${kicker}`)) return 'Discovery portal';
    if (/correspondence|letters?\b|outward letter|inward letter/i.test(text)) return 'Correspondence';
    if (/archive|finding aid|fonds\b|papers\b|record group|manuscript/i.test(text)) return 'Archive / manuscript';
    if (/catalogue|price list|inventory|register|ledger|database|index card|card catalogue/i.test(text)) return 'Catalogue / register';
    if (/freight|shipping|forwarder|customs|consular|bank|payment|dealer|commercial|invoice|order|account/i.test(text)) return 'Commercial / logistical';
    if (/published|journal|paper|notice|workshop-authored|contemporary|sales literature/i.test(text)) return 'Published primary source';
    if (/collection|museum|specimen|object/i.test(text)) return 'Institutional collection';
    return 'Other source';
  };
  const regionOf = node => {
    const text = clean(node.textContent);
    const hits = countryRules.filter(([,pattern]) => pattern.test(text)).map(([name]) => name);
    return hits.length === 1 ? hits[0] : hits.length > 1 ? 'Transnational' : 'Unspecified';
  };
  const sectionLabel = node => {
    const section = node.closest('.source-section');
    return clean(section?.querySelector('.source-kicker')?.textContent || section?.querySelector('h2')?.textContent || 'Sources');
  };
  const firstLetter = title => {
    const stripped = clean(title).replace(/^[“"'‘’]+/, '').replace(/^the\s+/i, '');
    const first = stripped.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase();
    return /[A-Z]/.test(first) ? first : '#';
  };

  if (!document.querySelector('#dealer-transaction-anatomy-title')) {
    await new Promise(resolve => {
      const deadline = Date.now() + 12000;
      const tick = () => {
        if (document.querySelector('#dealer-transaction-anatomy-title') || Date.now() >= deadline) resolve();
        else setTimeout(tick, 90);
      };
      tick();
    });
  }

  const sourceSections = [...main.querySelectorAll('.source-section')];
  const records = [...main.querySelectorAll('.source-section .source-entry')].map((node,index) => {
    const title = clean(node.querySelector('h3')?.textContent);
    const section = sectionLabel(node);
    return {
      node,index,title,sortTitle:titleForSort(node),letter:firstLetter(title),kind:sourceKind(node),region:regionOf(node),section,
      haystack:fold(`${title} ${node.querySelector('.source-type')?.textContent || ''} ${node.querySelector('.source-meta')?.textContent || ''} ${section}`)
    };
  }).filter(record => record.title);
  sourceSections.forEach(section => section.remove());
  document.querySelector('.entry-first-note')?.remove();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const browser = document.createElement('section');
  browser.className = 'source-az';
  browser.setAttribute('aria-labelledby','source-az-title');
  browser.innerHTML = `
    <div class="source-az-heading"><p class="source-kicker">Browse the source index</p><h2 id="source-az-title">A–Z Sources</h2><p class="source-az-dek">Browse archives, catalogues, correspondence, institutional collections, published primary material and discovery routes. Search matches titles, descriptions and source labels.</p></div>
    <form class="source-az-filters" role="search">
      <label><span>Source kind</span><select data-filter="kind"><option value="">All source kinds</option></select></label>
      <label><span>Region</span><select data-filter="region"><option value="">All regions</option></select></label>
      <label class="source-az-search"><span>Search</span><div><input type="search" data-filter="q" placeholder="Search sources" autocomplete="off"><button type="submit">Go</button></div></label>
    </form>
    <nav class="source-az-alpha" aria-label="Browse sources by first letter"><button type="button" data-letter="" aria-pressed="true">All</button>${alphabet.map(letter => `<button type="button" data-letter="${letter}" aria-pressed="false">${letter}</button>`).join('')}<button type="button" data-letter="#" aria-pressed="false">#</button></nav>
    <div class="source-az-reset" hidden><span>Filtered view</span><button type="button">Clear filters / browse all sources</button></div>
    <div class="source-az-results" aria-live="polite"></div>`;
  intro.insertAdjacentElement('afterend',browser);

  const results = browser.querySelector('.source-az-results');
  const kindSelect = browser.querySelector('[data-filter="kind"]');
  const regionSelect = browser.querySelector('[data-filter="region"]');
  const searchInput = browser.querySelector('[data-filter="q"]');
  const resetBar = browser.querySelector('.source-az-reset');
  let letter = '';

  const populateSelect = (select,values) => {
    const current = select.value;
    const first = select.options[0].outerHTML;
    select.innerHTML = first + values.map(value => `<option value="${value.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">${value}</option>`).join('');
    select.value = values.includes(current) ? current : '';
  };
  populateSelect(kindSelect,[...new Set(records.map(r=>r.kind))].sort());
  populateSelect(regionSelect,[...new Set(records.map(r=>r.region))].sort((a,b) => {
    if (a === 'Unspecified') return 1;if (b === 'Unspecified') return -1;if (a === 'Transnational') return 1;if (b === 'Transnational') return -1;return a.localeCompare(b);
  }));

  const updateURL = () => {
    const params = new URLSearchParams(location.search);
    const set = (key,value) => value ? params.set(key,value) : params.delete(key);
    set('q',clean(searchInput.value));set('kind',kindSelect.value);set('region',regionSelect.value);set('a',letter);
    const query = params.toString();
    history.replaceState(null,'',`${location.pathname}${query ? `?${query}` : ''}${location.hash}`);
  };

  const render = () => {
    const q = fold(searchInput.value),kind=kindSelect.value,region=regionSelect.value;
    const filtered = records.filter(record => (!q || record.haystack.includes(q)) && (!kind || record.kind===kind) && (!region || record.region===region) && (!letter || record.letter===letter))
      .sort((a,b) => a.sortTitle.localeCompare(b.sortTitle,undefined,{sensitivity:'base',numeric:true}) || a.index-b.index);
    const availableLetters = new Set(records.filter(record => (!q || record.haystack.includes(q)) && (!kind || record.kind===kind) && (!region || record.region===region)).map(record=>record.letter));
    browser.querySelectorAll('[data-letter]').forEach(button => {const key=button.dataset.letter;button.setAttribute('aria-pressed',String(key===letter));button.disabled=Boolean(key && !availableLetters.has(key));});

    results.replaceChildren();
    if (!filtered.length) results.innerHTML = '<p class="source-az-empty">No sources match these filters.</p>';
    else {
      let activeLetter = null;
      const fragment = document.createDocumentFragment();
      filtered.forEach(record => {
        if (record.letter !== activeLetter) {
          activeLetter = record.letter;
          const heading = document.createElement('h3');heading.className='source-az-letter';heading.textContent=activeLetter;fragment.appendChild(heading);
        }
        const clone = record.node.cloneNode(true);clone.classList.add('source-az-entry');clone.removeAttribute('id');clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
        const context = document.createElement('p');context.className='source-az-context';context.textContent=`${record.kind} · ${record.region} · ${record.section}`;clone.querySelector('h3')?.insertAdjacentElement('afterend',context);fragment.appendChild(clone);
      });
      results.appendChild(fragment);
    }
    resetBar.hidden = !(q || kind || region || letter);
    document.body.classList.add('sources-az-ready');
    updateURL();
  };

  const loadURL = () => {
    const params = new URLSearchParams(location.search);
    searchInput.value=params.get('q')||'';kindSelect.value=params.get('kind')||'';regionSelect.value=params.get('region')||'';
    const requested=(params.get('a')||'').toUpperCase();letter=alphabet.includes(requested)||requested==='#'?requested:'';
  };

  browser.querySelector('form').addEventListener('submit',event=>{event.preventDefault();render()});
  kindSelect.addEventListener('change',render);regionSelect.addEventListener('change',render);
  let inputTimer;searchInput.addEventListener('input',()=>{clearTimeout(inputTimer);inputTimer=setTimeout(render,70)});
  browser.querySelector('.source-az-alpha').addEventListener('click',event=>{const button=event.target.closest('[data-letter]');if(!button||button.disabled)return;letter=button.dataset.letter;render()});
  resetBar.querySelector('button').addEventListener('click',()=>{searchInput.value='';kindSelect.value='';regionSelect.value='';letter='';render()});
  window.addEventListener('popstate',()=>{loadURL();render()});

  loadURL();render();
})();
