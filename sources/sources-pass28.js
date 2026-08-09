(() => {
  const dealerHeading = document.querySelector('#dealer-archives-title');
  const dealerSection = dealerHeading?.closest('.source-section');
  if (!dealerSection || document.querySelector('#dealer-cross-category-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-cross-category-title');
  section.innerHTML = `
    <p class="source-kicker">Specimens, models and teaching material</p>
    <h2 id="dealer-cross-category-title">The Blaschka dealers were already moving other forms of nature</h2>
    <p class="source-note">Ward, Damon and Frič were not specialist glass-model merchants. Each placed Blaschka models inside a broader natural-history business. The comparison is firm-level and documentary; it does not imply that an ordinary specimen supplied by a dealer became the source for a particular glass model. Register: <a href="dealer-cross-category-material-register.json" target="_blank" rel="noopener">dealer-cross-category-material-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Prague · Frič',
      title: 'One business sold Naples marine specimens and also retailed Blaschka glass invertebrates.',
      meta: 'The published reconstruction of Václav Frič’s natural-history business explicitly treats these as parts of the same commercial repertoire. This is the clearest direct overlap between natural specimens and manufactured representations in the dealer network. The source does not prove that Frič’s Naples specimens were the same preparations ordered by Leopold Blaschka in 1877.',
      links: '<a href="https://academic.oup.com/jhc/article/17/1/23/624357" target="_blank" rel="noopener">Frič business study ↗</a>'
    },
    {
      type: 'Weymouth · Damon',
      title: 'Damon’s Blaschka agency entered an older business in shells, fossils and zoological specimens.',
      meta: 'Nature described Robert Damon in 1871 as a well-known dealer in natural-history objects and credited him with procuring West Indian Pentacrini that enabled detailed anatomical study. McGill’s authority record describes the family dealership as supplying museums internationally. The 1880 Blaschka agency therefore extended an existing specimen-distribution network rather than creating a scientific market from nothing.',
      links: '<a href="https://www.nature.com/articles/004496a0" target="_blank" rel="noopener">Nature 1871 Damon evidence ↗</a> · <a href="https://archivalcollections.library.mcgill.ca/index.php/damon-robert" target="_blank" rel="noopener">McGill Damon authority record ↗</a>'
    },
    {
      type: 'Rochester · Ward',
      title: 'Ward combined specimens, scientific cabinets, casts and models with Blaschka distribution.',
      meta: 'University of Rochester describes Ward’s Natural Science Establishment as a major supplier of natural-history material to museums and teaching institutions and preserves both the personal and corporate archive. Ward’s 1879 pamphlet advertised Blaschka glass models, and surviving Academy of Natural Sciences models retain Ward’s establishment stamps. The Blaschka line can therefore be compared with the firm’s ordinary catalogue, exchange and cabinet practices.',
      links: '<a href="https://www.library.rochester.edu/rbscp/blog/searching-ward" target="_blank" rel="noopener">Rochester Ward history ↗</a> · <a href="https://archivalcollections.drexel.edu/repositories/3/resources/842" target="_blank" rel="noopener">ANSP Ward/Blaschka evidence ↗</a>'
    },
    {
      type: 'Comparative question',
      title: 'Did glass models travel through pre-existing specimen markets, or require a different commercial infrastructure?',
      meta: 'The next document-level comparison is now precise: catalogue form, exchange and credit, commission, packing, liability, insurance and museum accession can be compared across specimens, casts/models and Blaschka glass. This provides controls for deciding which practices were peculiar to fragile glass and which belonged to nineteenth-century natural-history commerce generally.',
      links: '<a href="dealer-cross-category-material-register.json" target="_blank" rel="noopener">comparison axes ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '28';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  dealerSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass29.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
