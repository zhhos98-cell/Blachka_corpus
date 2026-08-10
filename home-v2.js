(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const addStyle = (href, token) => {
    if (document.querySelector(`link[href*="${token}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };
  addStyle('site-polish.css?v=20260810-1', 'site-polish.css');
  addStyle('home-curation.css?v=20260810-1', 'home-curation.css');
  addStyle('home-nav-glide.css?v=20260810-1', 'home-nav-glide.css');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = 'feed.xml';
    document.head.appendChild(rss);
  }
  if (!document.querySelector('script[src*="nav-glide.js"]')) {
    const script = document.createElement('script');
    script.src = 'nav-glide.js?v=20260810-1';
    script.defer = true;
    document.head.appendChild(script);
  }

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const scope = document.getElementById('network-search-scope');
  const status = document.getElementById('network-search-status');

  if (form && input && scope) {
    const placeholders = {
      cases:'e.g. Liverpool, Auckland, Tufts',
      bibliography:'e.g. Daston, 2008, conservation',
      sources:'e.g. HOLLIS, Ward, invoice, Dresden',
      auctions:'e.g. Christie’s, Berlin, catalogue number'
    };
    const routes = { bibliography:'bibliography/', sources:'sources/', auctions:'auctions/', cases:'cases/' };
    const updatePlaceholder = () => {
      input.placeholder = placeholders[scope.value] || placeholders.cases;
      if (status) status.textContent = '';
    };
    scope.addEventListener('change', updatePlaceholder);
    updatePlaceholder();
    form.addEventListener('submit', event => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) {
        if (status) status.textContent = 'Enter a search term.';
        input.focus();
        return;
      }
      location.href = `${routes[scope.value] || routes.cases}?q=${encodeURIComponent(query)}`;
    });
  }

  /* Family image: source-backed identities; no face-recognition inference is used here. */
  const familyFigure = document.querySelector('.origin-photo');
  if (familyFigure && !familyFigure.querySelector('.family-portrait-layer')) {
    const layer = document.createElement('div');
    layer.className = 'family-portrait-layer';
    layer.setAttribute('aria-label', 'Blaschka family portrait biographies');
    const people = [
      ['karolina','Karolina (Caroline) Riegel Blaschka','Born 1834. Leopold’s second wife, married in 1854, and Rudolf’s mother. Archive records also preserve the family naturalization and later property transfers.'],
      ['leopold','Leopold Blaschka','1822–1895. Glassworker and modeller whose zoological glass models developed into an international scientific trade.'],
      ['rudolf','Rudolf Blaschka','1857–1939. Son of Leopold and Karolina. He joined the workshop in 1876 and later continued the Harvard botanical commission.']
    ];
    layer.innerHTML = people.map(([key,name,bio]) => `
      <span class="family-person family-person--${key}">
        <button type="button" aria-label="About ${name}"></button>
        <span class="family-person-tooltip" role="tooltip"><strong>${name}</strong><span>${bio}</span></span>
      </span>`).join('');
    const caption = familyFigure.querySelector('figcaption');
    familyFigure.insertBefore(layer, caption || null);
    if (caption && !familyFigure.querySelector('.family-photo-hint')) {
      const hint = document.createElement('p');
      hint.className = 'family-photo-hint';
      hint.textContent = 'Hover or focus the portrait to meet the family.';
      caption.insertAdjacentElement('afterend', hint);
    }
  }

  const originFirst = document.querySelector('.origin-columns p:first-child');
  if (originFirst && !originFirst.dataset.karolinaBridge) {
    originFirst.dataset.karolinaBridge = 'true';
    originFirst.insertAdjacentText('beforeend', ' After returning, Leopold married Karolina Riegel in 1854; their son Rudolf was born in 1857.');
  }

  /* A light subscription close: email requests now, RSS for machine-readable updates. */
  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('.home-subscribe')) {
    footer.insertAdjacentHTML('beforebegin', `
      <section class="home-subscribe" id="subscribe" aria-labelledby="subscribe-title">
        <div class="subscribe-inner">
          <div class="subscribe-grid">
            <p class="eyebrow">Updates</p>
            <div class="subscribe-copy">
              <h2 id="subscribe-title">Follow additions to the public project.</h2>
              <p>New documentary cases, corrected links and substantial bibliography or source updates can be followed without turning the site into a running research log.</p>
              <div class="subscribe-actions">
                <a href="mailto:zhhos98@gmail.com?subject=Subscribe%20to%20Blaschka%20Object%20Network%20updates">Request email updates</a>
              </div>
              <p class="subscribe-note">RSS is available in the footer for feed readers.</p>
            </div>
          </div>
        </div>
      </section>`);
  }

  if (footer) {
    const inner = footer.querySelector('.footer-inner');
    if (inner && !inner.querySelector('.footer-copyright')) {
      inner.innerHTML = `
        <div class="footer-identity">
          <a class="footer-title" href="#top">The Blaschka Object Network</a>
          <span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span>
        </div>
        <div class="footer-links">
          <a href="cases/">Cases</a>
          <a href="bibliography/">Bibliography</a>
          <a href="sources/">Sources</a>
          <a href="auctions/">Auctions</a>
          <a href="privacy/">Privacy</a>
          <a class="footer-rss" href="feed.xml" type="application/rss+xml" aria-label="RSS feed"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="19" r="2.2"/><path d="M3 10.5v3a7.5 7.5 0 0 1 7.5 7.5h3A10.5 10.5 0 0 0 3 10.5Zm0-6v3A13.5 13.5 0 0 1 16.5 21h3C19.5 11.9 12.1 4.5 3 4.5Z"/></svg><span>RSS</span></a>
        </div>`;
    }
  }

  if (reduced) return;

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold:.08, rootMargin:'0px 0px -6% 0px' });

  document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
})();
