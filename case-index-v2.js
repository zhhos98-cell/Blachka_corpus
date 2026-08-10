(() => {
  const addStylesheet = (href, key) => {
    if (document.querySelector(`link[data-${key}]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.dataset[key] = 'true';
    document.head.appendChild(link);
  };

  addStylesheet('shuge-inspired.css?v=20260810-2', 'shugeInspired');
  addStylesheet('portal-pass2.css?v=20260810-1', 'portalPass2');
  addStylesheet('portal-pass3.css?v=20260810-1', 'portalPass3');

  if (!document.querySelector('script[data-map-ratio-fix]')) {
    const script = document.createElement('script');
    script.src = 'map-ratio-fix.js?v=20260810-1';
    script.defer = true;
    script.dataset.mapRatioFix = 'true';
    document.head.appendChild(script);
  }

  const topNav = document.querySelector('.top-nav');
  if (topNav) {
    topNav.innerHTML = `
      <a href="#project">Project</a>
      <a href="cases/">Cases</a>
      <a href="bibliography/">Bibliography</a>
      <a href="sources/">Sources</a>
      <a href="auctions/">Auctions</a>
      <a href="#contact">Contact</a>
    `;
  }

  const hero = document.querySelector('.hero-title-wrap');
  if (hero && !hero.querySelector('.network-search')) {
    hero.insertAdjacentHTML('beforeend', `
      <form class="network-search" id="network-search" role="search" aria-label="Explore the Blaschka Object Network">
        <div class="network-search-shell">
          <input id="network-search-input" type="search" autocomplete="off" placeholder="Search a place, case, archive, bibliography…" aria-label="Search cases and research sections">
          <button type="submit">Explore</button>
        </div>
        <div class="network-search-links" aria-label="Quick links">
          <a href="cases/">Cases</a>
          <a href="bibliography/">Bibliography</a>
          <a href="sources/">Sources</a>
          <a href="auctions/">Auctions</a>
        </div>
        <p class="network-search-status" id="network-search-status" aria-live="polite"></p>
      </form>
    `);
  }

  document.querySelector('.research-chain')?.remove();
  document.querySelector('.evidence-key')?.remove();
  document.querySelector('.project-grid')?.remove();
  document.querySelector('.network-pillars')?.remove();

  const origin = document.querySelector('.origin-story');
  if (origin) {
    origin.innerHTML = `
      <p class="origin-kicker">Where the story begins</p>
      <div class="origin-body">
        <div class="origin-visual">
          <figure class="origin-photo origin-photo--feature">
            <a href="https://commons.wikimedia.org/wiki/File:Rudolf,_Leopold_and_Caroline_Blaschka_in_garden_cropped.jpg" target="_blank" rel="noopener">
              <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Rudolf%2C%20Leopold%20and%20Caroline%20Blaschka%20in%20garden%20cropped.jpg?width=1200" alt="Rudolf, Leopold and Caroline Blaschka standing together in a garden" loading="lazy">
            </a>
            <figcaption><span>Workshop family</span><p>Rudolf, Leopold and Caroline Blaschka in the garden. Unknown photographer; public domain. <a href="https://commons.wikimedia.org/wiki/File:Rudolf,_Leopold_and_Caroline_Blaschka_in_garden_cropped.jpg" target="_blank" rel="noopener">Wikimedia Commons ↗</a></p></figcaption>
          </figure>
        </div>
        <div class="origin-copy">
          <h3 id="origin-story-title">From a Bohemian glassworking family to a worldwide scientific trade</h3>
          <div class="origin-columns">
            <p><strong>Leopold Blaschka (1822–1895)</strong> came from a long glassworking family in Bohemia. His first wife, Carolina Zimmerman, and their son Josef Augustine died of cholera in 1850. His father Josef died in 1852. The sequence of losses sits immediately before the episode that later became the best-known origin story of the Blaschka marine models.</p>
            <p>In 1853 Leopold sailed to the United States. During the voyage his ship was becalmed for two weeks, and he studied and drew jellyfish and other marine invertebrates around the vessel. Their translucent bodies presented a material problem that answered unusually well to the substance his family knew best: glass. A decade later, after making botanical models and attracting scientific attention, he began producing marine invertebrates for museum display in Dresden.</p>
            <p><strong>Rudolf Blaschka (1857–1939)</strong> learned glassworking from his father and officially joined the business in 1876. Together they supplied museums and universities with hundreds of catalogue models. From 1890 the workshop turned exclusively to Harvard’s botanical commission, the Glass Flowers. What happened to the earlier zoological models after they left Dresden—their purchase, shipment, use, damage, dispersal, rediscovery, and present custody—is the subject of this project.</p>
          </div>
          <p class="origin-source">Biographical chronology checked against <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard’s Blaschka archive finding aid ↗</a> and <a href="https://press.cmog.org/2016/blaschka-glass-marine-creatures-exhibition-opens-may-2016" target="_blank" rel="noopener">The Corning Museum of Glass ↗</a>. See the project’s <a href="bibliography/">secondary literature bibliography ↗</a>.</p>
        </div>
        <div class="origin-roadmap" aria-label="Selected Blaschka chronology">
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" aria-hidden="true">
            <path class="road-base" d="M35 215 C170 250 175 82 335 105 S505 260 650 170 S790 48 965 82"/>
            <path class="road-line" d="M35 215 C170 250 175 82 335 105 S505 260 650 170 S790 48 965 82"/>
          </svg>
          <div class="road-stop" style="--x:6%;--y:72%"><b>1850</b><span>wife &amp; son die</span></div>
          <div class="road-stop" style="--x:21%;--y:49%"><b>1852</b><span>father dies</span></div>
          <div class="road-stop" style="--x:35%;--y:35%"><b>1853</b><span>Atlantic voyage</span></div>
          <div class="road-stop" style="--x:51%;--y:72%"><b>1863</b><span>marine models</span></div>
          <div class="road-stop" style="--x:69%;--y:50%"><b>1876</b><span>Rudolf joins</span></div>
          <div class="road-stop" style="--x:90%;--y:26%"><b>1890</b><span>Harvard exclusive</span></div>
        </div>
      </div>
    `;
  }

  const table = document.querySelector('.case-index-table');
  if (table) {
    [...table.querySelectorAll('.case-index-row')].slice(2).forEach((row) => row.remove());
    const title = document.getElementById('case-index-title');
    if (title) title.textContent = 'Two featured documentary lives';
    const intro = document.querySelector('.case-index-head > p');
    if (intro) intro.textContent = 'Liverpool and Auckland show two different ways in which workshop records, intermediaries, shipments and surviving collections can be brought back into the same documentary frame.';
    const head = document.querySelector('.case-index-head');
    if (head && !head.querySelector('.all-cases-link')) {
      head.insertAdjacentHTML('beforeend', '<a class="all-cases-link" href="cases/">View all ten cases</a>');
    }
  }

  document.querySelectorAll('.sample').forEach((sample) => {
    if (!['sample-liverpool', 'sample-auckland'].includes(sample.id)) sample.remove();
  });

  const footer = document.querySelector('footer');
  if (footer && !document.getElementById('contact')) {
    footer.insertAdjacentHTML('beforebegin', `
      <section class="home-contact" id="contact" aria-labelledby="contact-title">
        <div class="contact-grid">
          <p class="eyebrow">Contact</p>
          <div class="contact-copy">
            <h2 id="contact-title">Corrections and source leads are welcome.</h2>
            <p>Accession numbers, labels, archival references, movement records, conservation evidence and documented corrections can help close or reopen object chains. Please include a source or collection reference where possible.</p>
            <div class="contact-actions">
              <a href="mailto:zhhos98@gmail.com">Email the project</a>
              <a href="https://github.com/zhhos98-cell/Blachka_corpus" target="_blank" rel="noopener">GitHub repository ↗</a>
              <a href="cases/">Cases</a>
              <a href="sources/">Sources</a>
              <a href="bibliography/">Bibliography</a>
            </div>
          </div>
        </div>
      </section>
    `);
    footer.innerHTML = `
      <a href="#top">The Blaschka Object Network</a>
      <span><a href="cases/">Cases</a> · <a href="bibliography/">Bibliography</a> · <a href="sources/">Sources</a> · <a href="auctions/">Auctions</a> · <a href="privacy/">Privacy</a> · Research prototype</span>
    `;
  }

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const status = document.getElementById('network-search-status');

  if (form && input && !form.dataset.bound) {
    form.dataset.bound = 'true';
    const normalise = (value) => value.toLowerCase().trim().replace(/\s+/g, ' ');
    const destinations = [
      { terms: ['liverpool', 'freight', 'i.b. 268', 'ib 268'], href: '#sample-liverpool', label: 'Liverpool case' },
      { terms: ['auckland', 'cheeseman', 'adams'], href: '#sample-auckland', label: 'Auckland case' },
      { terms: ['florence', 'firenze', 'marchi', 'tubipora'], href: 'cases/#sample-florence', label: 'Florence case' },
      { terms: ['tufts', 'barnum', 'corning custody'], href: 'cases/#sample-tufts', label: 'Tufts case' },
      { terms: ['michigan', 'vitreous ecology'], href: 'cases/#sample-michigan', label: 'Michigan case' },
      { terms: ['mexico', 'mexico city', 'unam', 'chopo'], href: 'cases/#sample-mexico', label: 'Mexico City case' },
      { terms: ['newcastle', 'hancock'], href: 'cases/#sample-newcastle', label: 'Newcastle case' },
      { terms: ['nottingham', 'carr', 'wollaton'], href: 'cases/#sample-nottingham', label: 'Nottingham case' },
      { terms: ['vassar', 'swift hall'], href: 'cases/#sample-vassar', label: 'Vassar case' },
      { terms: ['milwaukee'], href: 'cases/#sample-milwaukee', label: 'Milwaukee case' },
      { terms: ['case', 'cases', 'collection', 'collections'], href: 'cases/', label: 'case directory' },
      { terms: ['bibliography', 'book', 'books', 'article', 'literature', 'publication'], href: 'bibliography/', label: 'bibliography' },
      { terms: ['source', 'sources', 'archive', 'archives', 'dealer', 'packing', 'invoice', 'correspondence'], href: 'sources/', label: 'sources directory' },
      { terms: ['auction', 'auctions', 'market', 'sale', 'sales'], href: 'auctions/', label: 'auction research' },
      { terms: ['contact', 'email', 'correction'], href: '#contact', label: 'contact' },
      { terms: ['method', 'project', 'about'], href: '#project', label: 'project introduction' }
    ];

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = normalise(input.value);
      if (!query) {
        if (status) status.textContent = 'Try a place such as Liverpool, a record type such as invoice, or a section such as bibliography.';
        input.focus();
        return;
      }
      const match = destinations.find((item) => item.terms.some((term) => query.includes(term) || term.includes(query)));
      if (match) {
        if (status) status.textContent = `Opening ${match.label}…`;
        window.location.href = match.href;
        return;
      }
      if (status) status.textContent = 'No direct match. Try a city, “cases”, “bibliography”, “sources”, “auctions”, or “contact”.';
    });
  }
})();
