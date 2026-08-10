(() => {
  if (!document.querySelector('link[data-shuge-inspired]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'shuge-inspired.css?v=20260810-1';
    link.dataset.shugeInspired = 'true';
    document.head.appendChild(link);
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
          <a href="#cases">Cases</a>
          <a href="bibliography/">Bibliography</a>
          <a href="sources/">Sources</a>
          <a href="auctions/">Auctions</a>
        </div>
        <p class="network-search-status" id="network-search-status" aria-live="polite"></p>
      </form>
    `);
  }

  const projectGrid = document.querySelector('.project-grid');
  if (projectGrid && !document.querySelector('.network-pillars')) {
    projectGrid.insertAdjacentHTML('beforebegin', `
      <section class="network-pillars" aria-label="Project principles in brief">
        <article class="network-pillar">
          <span class="network-pillar-mark" aria-hidden="true">01</span>
          <h3>Traceable</h3>
          <p>Public claims stay tied to identifiable records, object numbers, catalogues or published evidence.</p>
        </article>
        <article class="network-pillar">
          <span class="network-pillar-mark" aria-hidden="true">02</span>
          <h3>Connected</h3>
          <p>Objects are followed across workshop, dealer, shipment, institution, conservation and later custody.</p>
        </article>
        <article class="network-pillar">
          <span class="network-pillar-mark" aria-hidden="true">03</span>
          <h3>Open gaps</h3>
          <p>Unresolved joins remain visible. Similar catalogue numbers, model types or collection stories are kept distinct until the evidence closes them.</p>
        </article>
      </section>
    `);
  }

  const table = document.querySelector('.case-index-table');
  if (table && !table.querySelector('a[href="#sample-mexico"]')) {
    const title = document.getElementById('case-index-title');
    if (title) title.textContent = 'Ten documentary lives';
    const intro = document.querySelector('.case-index-head > p');
    if (intro) intro.textContent = 'Ten cases now test different parts of the object chain: manufacture, agency, purchase, institutional succession, conservation, rediscovery and present custody.';

    table.insertAdjacentHTML('beforeend', `
      <a class="case-index-row" href="#sample-mexico" role="listitem">
        <span class="case-no">006</span><strong>Mexico City</strong><span class="case-years">1885–present</span><span class="case-tags">national museum · fission · successors</span><span class="case-closure">1895 display → UNAM + MHNCA</span><i aria-hidden="true">↘</i>
      </a>
      <a class="case-index-row" href="#sample-newcastle" role="listitem">
        <span class="case-no">007</span><strong>Newcastle</strong><span class="case-years">1884–2025</span><span class="case-tags">survival · X-ray · exhibition</span><span class="case-closure">modern collection / acquisition open</span><i aria-hidden="true">↘</i>
      </a>
      <a class="case-index-row" href="#sample-nottingham" role="listitem">
        <span class="case-no">008</span><strong>Nottingham</strong><span class="case-years">1887–2026</span><span class="case-tags">Carr · Damon · municipal custody</span><span class="case-closure">ledger + agency + INV 2000</span><i aria-hidden="true">↘</i>
      </a>
      <a class="case-index-row" href="#sample-vassar" role="listitem">
        <span class="case-no">009</span><strong>Vassar</strong><span class="case-years">1887–2018</span><span class="case-tags">purchase · conservation · rescue</span><span class="case-closure">1887 → Koob → Jelly Fish 229</span><i aria-hidden="true">↘</i>
      </a>
      <a class="case-index-row" href="#sample-milwaukee" role="listitem">
        <span class="case-no">010</span><strong>Milwaukee</strong><span class="case-years">1883–2027</span><span class="case-tags">70 models · Ward · catalogue study</span><span class="case-closure">firm quantity / exact invoice open</span><i aria-hidden="true">↘</i>
      </a>
    `);
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
      { terms: ['florence', 'firenze', 'marchi', 'tubipora'], href: '#sample-florence', label: 'Florence case' },
      { terms: ['tufts', 'barnum', 'corning custody'], href: '#sample-tufts', label: 'Tufts case' },
      { terms: ['michigan', 'vitreous ecology'], href: '#sample-michigan', label: 'Michigan case' },
      { terms: ['mexico', 'mexico city', 'unam', 'chopo'], href: '#sample-mexico', label: 'Mexico City case' },
      { terms: ['newcastle', 'hancock'], href: '#sample-newcastle', label: 'Newcastle case' },
      { terms: ['nottingham', 'carr', 'wollaton'], href: '#sample-nottingham', label: 'Nottingham case' },
      { terms: ['vassar', 'swift hall'], href: '#sample-vassar', label: 'Vassar case' },
      { terms: ['milwaukee'], href: '#sample-milwaukee', label: 'Milwaukee case' },
      { terms: ['case', 'cases', 'collection', 'collections'], href: '#cases', label: 'case index' },
      { terms: ['bibliography', 'book', 'books', 'article', 'literature', 'publication'], href: 'bibliography/', label: 'bibliography' },
      { terms: ['source', 'sources', 'archive', 'archives', 'dealer', 'packing', 'invoice', 'correspondence'], href: 'sources/', label: 'sources directory' },
      { terms: ['auction', 'auctions', 'market', 'sale', 'sales'], href: 'auctions/', label: 'auction research' },
      { terms: ['blog', 'news', 'update', 'updates'], href: 'blog/', label: 'research blog' },
      { terms: ['method', 'project', 'about'], href: '#project', label: 'project method' }
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

      const rows = [...document.querySelectorAll('.case-index-row')];
      const row = rows.find((item) => normalise(item.textContent).includes(query));
      if (row) {
        if (status) status.textContent = `Opening ${row.querySelector('strong')?.textContent || 'case'}…`;
        window.location.href = row.getAttribute('href');
        return;
      }

      if (status) status.textContent = 'No direct match here. Try a city, “bibliography”, “sources”, “auctions”, or “cases”.';
    });
  }
})();