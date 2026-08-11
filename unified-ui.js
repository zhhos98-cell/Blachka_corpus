(() => {
  if (window.__blaschkaUnifiedUI) return;
  window.__blaschkaUnifiedUI = true;

  const isSubpage = document.body.classList.contains('subpage');
  const isBibliography = isSubpage && Boolean(document.querySelector('.bib-list'));
  const staticBrandHref = document.querySelector('.subpage-brand')?.getAttribute('href');
  const prefix = isSubpage ? (staticBrandHref || '../') : '';

  const addStyle = (href, token) => {
    const wanted = new URL(href, location.href).href;
    const existing = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes(token));
    if (existing) {
      if (existing.href !== wanted) existing.href = wanted;
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = wanted;
    document.head.appendChild(link);
  };

  const addScript = (src, token) => {
    if ([...document.scripts].some(script => script.src.includes(token))) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  };

  const refreshPageCss = (token, version) => {
    const link = [...document.querySelectorAll('link[rel="stylesheet"]')].find(node => node.href.includes(token));
    if (!link) return;
    const url = new URL(link.href);
    url.searchParams.set('v', version);
    link.href = url.href;
  };

  if (!isBibliography) {
    addStyle(`${prefix}site-core.css?v=20260810-1`, 'site-core.css');
  } else {
    addStyle(`${prefix}navigation-shell.css?v=20260811-1`, 'navigation-shell.css');
    addStyle(`${prefix}accessibility.css?v=20260810-2`, 'accessibility.css');
  }

  addScript(`${prefix}accessibility.js?v=20260810-2`, 'accessibility.js');
  refreshPageCss('sources.css', '20260811-1');
  refreshPageCss('bibliography.css', '20260810-8');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = `${prefix}feed.xml`;
    document.head.appendChild(rss);
  }

  const path = location.pathname.replace(/index\.html$/, '');
  const current = match => path.includes(match) ? ' aria-current="page"' : '';
  const mapCurrent = path.includes('/map/');
  const journeyCurrent = path.includes('/map/rudolf-1892/');
  const canonicalNav = root => [
    `<a href="${root}cases/"${current('/cases/')}>Cases</a>`,
    `<details class="nav-map-menu"><summary class="nav-map-trigger${mapCurrent ? ' is-current' : ''}">Map</summary><div class="nav-map-panel"><a href="${root}map/"${mapCurrent && !journeyCurrent ? ' aria-current="page"' : ''}>Collections map</a><a href="${root}map/rudolf-1892/"${journeyCurrent ? ' aria-current="page"' : ''}>Rudolf 1892 journey</a></div></details>`,
    `<a href="${root}people/"${current('/people/')}>People</a>`,
    `<a href="${root}bibliography/"${current('/bibliography/')}>Bibliography</a>`,
    `<a href="${root}sources/"${current('/sources/')}>Sources</a>`,
    `<a href="${root}auctions/"${current('/auctions/')}>Auctions</a>`,
    `<a href="${root}about/"${current('/about/')}>About</a>`
  ].join('');

  if (isSubpage) {
    const brand = document.querySelector('.subpage-brand');
    const nav = document.querySelector('.subpage-nav');
    if (brand) {
      brand.href = prefix;
      brand.textContent = 'The Blaschka Object Network';
    }
    if (nav) nav.innerHTML = canonicalNav(prefix);
  }

  const closeMapMenus = except => {
    document.querySelectorAll('.nav-map-menu[open]').forEach(menu => {
      if (menu !== except) menu.removeAttribute('open');
    });
  };
  document.addEventListener('click', event => {
    const menu = event.target.closest('.nav-map-menu');
    if (menu) {
      closeMapMenus(menu);
      return;
    }
    closeMapMenus(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMapMenus(null);
  });

  document.querySelectorAll('img[src^="http://"],img[src^="https://"]').forEach(img => {
    img.referrerPolicy = 'no-referrer';
  });

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main-content';
  if (main && !document.querySelector('.ui-skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'ui-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
  }
})();
