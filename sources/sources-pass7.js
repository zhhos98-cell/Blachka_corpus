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
