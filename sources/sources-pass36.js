(() => {
  const upstreamHeading = document.querySelector('#dealer-upstream-supply-title');
  const upstreamSection = upstreamHeading?.closest('.source-section');
  if (!upstreamSection || document.querySelector('#dealer-epistemic-exchange-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'dealer-epistemic-exchange-title');
  section.innerHTML = `
    <p class="source-kicker">Commerce as knowledge infrastructure</p>
    <h2 id="dealer-epistemic-exchange-title">Dealers organised comparison, observation, exchange and redistribution</h2>
    <p class="source-note">Natural-history dealers did more than pass objects between seller and buyer. Contemporary evidence shows them assembling comparative teaching sets, procuring material that enabled scientific observation, arranging reciprocal exchange and breaking whole collections into new markets. These are controls for reading the Blaschka network as epistemic as well as commercial infrastructure: <a href="dealer-epistemic-exchange-register.json" target="_blank" rel="noopener">dealer-epistemic-exchange-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Ward · 1880 · model + specimen comparison',
      title: 'Joseph Leidy bought two red-coral models at Ward’s and displayed them beside an actual coral fragment.',
      meta: 'Leidy’s firsthand account describes Ward’s establishment as a stock of mounted animals, skeletons, invertebrates, models, minerals, rocks and fossils for educational museums. He bought one natural-size and one magnified red-coral model for one dollar each and used them with a real coral fragment to make the animal and its taxonomic order intelligible at a glance. The source does not name the makers of these two models, so they are not silently assigned to the Blaschkas.',
      links: '<a href="https://en.wikisource.org/wiki/Popular_Science_Monthly/Volume_16/March_1880/Ward%27s_Natural_Science_Establishment" target="_blank" rel="noopener">Leidy 1880 transcription ↗</a>'
    },
    {
      type: 'Damon · 1871 · dealer supply enabled research',
      title: 'West Indian Pentacrini procured by Robert Damon became the material basis for detailed anatomical observation.',
      meta: 'Nature identified Damon as a well-known Weymouth dealer in natural-history objects and reported that he had obtained a substantial number of West Indian Pentacrini, allowing investigators to examine both hard and soft parts in detail. This predates the Blaschka agency, but it makes the dealer’s epistemic role unusually explicit: procurement created access to otherwise rare material.',
      links: '<a href="https://www.nature.com/articles/004496a0" target="_blank" rel="noopener">Nature, 19 October 1871 ↗</a>'
    },
    {
      type: 'Damon · reciprocal exchange · Te Papa archive',
      title: 'A Damon proposal sought New Zealand fossils, land shells and animals in spirits in exchange for overseas shells.',
      meta: 'The Te Papa archival object record preserves exchange rather than a cash-only purchase: heterogeneous natural-history materials were negotiated against another stock of shells. The public discovery record used here does not securely expose a date, so no date is imposed.',
      links: '<a href="https://collections.tepapa.govt.nz/object/289103" target="_blank" rel="noopener">Te Papa exchange record ↗</a>'
    },
    {
      type: 'Damon · 1889 · collection-scale redistribution',
      title: 'Damon acquired the Godeffroy Museum zoological collections and prepared collection material for dispersal.',
      meta: 'Nature’s 1889 obituary reports the recent purchase of the Godeffroy Museum zoological collections; a surviving Damon letter at Te Papa concerns the arrangement and dispersal of a large collection rich in Australian and Polynesian material. Dealer commerce could therefore operate at collection scale, reorganising an already assembled body of objects for new destinations.',
      links: '<a href="https://www.nature.com/articles/040044a0" target="_blank" rel="noopener">Nature obituary ↗</a> · <a href="https://collections.tepapa.govt.nz/object/293561" target="_blank" rel="noopener">Te Papa 1889 Damon letter ↗</a>'
    },
    {
      type: 'Damon · Sydney · object-level dealer provenance',
      title: 'Powerhouse object 14532: a barite specimen purchased from Damon in 1886 still carries an old museum label.',
      meta: 'The object record gives a 22 December 1886 acquisition date and identifies R. Damon as the source. The surviving old museum label is a useful control for how dealer provenance, later institutional numbering and object identification can survive in different documentary layers.',
      links: '<a href="https://collection.powerhouse.com.au/object/4065" target="_blank" rel="noopener">Powerhouse object record ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '36';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  upstreamSection.insertAdjacentElement('afterend', section);

  const next = document.createElement('script');
  next.src = 'sources-pass37.js?v=20260810-1';
  next.defer = true;
  document.body.appendChild(next);
})();
