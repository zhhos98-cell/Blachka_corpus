(() => {
  const rakowHeading = document.querySelector('#rakow-open-business-books-title');
  const rakowSection = rakowHeading?.closest('.source-section');
  if (!rakowSection || document.querySelector('#upstream-living-supply-title')) return;

  const section = document.createElement('section');
  section.className = 'source-section';
  section.setAttribute('aria-labelledby', 'upstream-living-supply-title');
  section.innerHTML = `
    <p class="source-kicker">Before the glass object</p>
    <h2 id="upstream-living-supply-title">Living specimens moved inward before models moved outward</h2>
    <p class="source-note">The workshop’s circulation history begins before a glass model existed. Living marine organisms had to be sourced, packed, forwarded, kept alive and revived in Dresden aquaria. A cross-project source bridge now identifies one supplier in both Blaschka correspondence and the British microscopy exchange press: <a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">upstream-living-specimen-supply-register.json ↗</a>.</p>
    <div class="source-list"></div>
  `;

  const list = section.querySelector('.source-list');
  const records = [
    {
      type: 'Weymouth → Dresden · living marine supply',
      title: 'R. T. Smith, 25 St. Alban’s Street, Weymouth — aquarium/marine-specimen supplier.',
      meta: 'Leopold Blaschka’s draft correspondence asks Smith for small consignments of British sea anemones, specifies preferred kinds and price scale, and asks about forwarding. A later draft reports anemones arriving alive and recovering in the workshop tank after several days from Weymouth to Dresden; another reports weak arrivals and four specimens that failed to revive, possibly after frost during rail transit. Season, weather and survival were therefore active constraints on model production.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">Smith correspondence map ↗</a>'
    },
    {
      type: '1874 · independent microscopy-network witness',
      title: 'The same R. T. Smith and address appear in <em>Hardwicke’s Science-Gossip</em> exchanging marine-algae slides and starfish.',
      meta: 'Contemporary exchange notices list R. T. Smith, 25 St. Alban’s Street, Weymouth, offering well-mounted microscopic slides of marine algae, about forty varieties, plus starfish and small unmounted marine material in exchange for good slides. The address match ties the Blaschka supplier to an amateur microscopy and marine-specimen circulation network years before the surviving Blaschka drafts.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">cross-project evidence guard ↗</a>'
    },
    {
      type: 'Supply failure and substitution',
      title: 'When Weymouth could not supply a desired organism, the workshop searched for another Devon source.',
      meta: 'A workshop draft recalls Smith as an aquarium dealer and asks for another Devon address able to forward small quantities of marine animals, specifically because Caryophyllia Smithii could not be obtained in Weymouth. The supply network was therefore replaceable and geographically extended rather than a single bilateral relationship.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">alternative-supplier record ↗</a>'
    },
    {
      type: 'Parallel institutional route',
      title: 'Trieste Zoological Station supplied living animals alongside the English/northern-coast route.',
      meta: 'Rudolf Blaschka later described the household seawater tanks as holding living animals sent partly from the Imperial Austrian Zoological Station at Trieste and partly from England and northern coasts. This gives a useful comparator between institutional specimen supply and Smith’s small-scale commercial/exchange route.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">parallel supply routes ↗</a>'
    }
  ];

  records.forEach((record) => {
    const article = document.createElement('article');
    article.className = 'source-entry';
    article.dataset.sourcePass = '26';
    article.innerHTML = `<p class="source-type">${record.type}</p><h3>${record.title}</h3><p class="source-meta">${record.meta}</p><p class="source-links">${record.links}</p>`;
    list.appendChild(article);
  });

  rakowSection.insertAdjacentElement('afterend', section);
})();
