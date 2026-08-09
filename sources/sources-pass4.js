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
