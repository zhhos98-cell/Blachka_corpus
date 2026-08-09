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
