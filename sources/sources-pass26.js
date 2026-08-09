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
      meta: 'Leopold Blaschka’s draft correspondence asks Smith for small consignments of British sea anemones worth about 15 Reichsmarks, specifies preferred kinds, and asks about forwarding. A later draft reports anemones arriving alive and recovering immediately in the workshop tank after several days from Weymouth to Dresden; another reports weak arrivals and four specimens that failed to revive, possibly after frost during rail transit. Season, weather, packing and survival were active constraints on model production.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">Smith correspondence map ↗</a>'
    },
    {
      type: '1873–1876 · repeated microscopy-network witness',
      title: 'R. T. Smith appears repeatedly in <em>Hardwicke’s Science-Gossip</em>, not as a one-off advertisement.',
      meta: 'The project microscopy corpus now isolates five exact-name records. In 1873 Smith in Weymouth offers larvae for good microscopic slides. Three 1874 notices at 25 St. Alban’s Street offer roughly forty varieties of mounted marine-algae slides, starfish and unmounted marine material, or named algae slides for other mounted sections. A 1876 notice offers Bulla hydatis and other material for palate mounting. The repeated address and marine/microscopy exchange activity make the link to the later Blaschka supplier materially stronger.',
      links: '<a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">1873–1876 record map ↗</a>'
    },
    {
      type: '1875 · identity check still open',
      title: 'A marine-aquarium collector list gives an OCR reading “E. J. Smith, 25 St. Alban’s Row, Weymouth.”',
      meta: 'William R. Hughes’s 1875 <em>On the Principles and Management of the Marine Aquarium</em> lists collectors of marine animals, principally from W. A. Lloyd’s handbook. The project OCR gives initials E. J. at essentially the same address used by R. T. Smith. This is potentially important but is not merged: the printed page and Lloyd source must be checked to decide whether this is OCR error, another person at the address, or a separate collector.',
      links: '<a href="https://www.biodiversitylibrary.org/bibliography/158623" target="_blank" rel="noopener">Hughes 1875 BHL record ↗</a> · <a href="upstream-living-specimen-supply-register.json" target="_blank" rel="noopener">identity guard ↗</a>'
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
