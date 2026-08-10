(() => {
  if (window.__blaschkaUnifiedUI) return;
  window.__blaschkaUnifiedUI = true;

  const isSubpage = document.body.classList.contains('subpage');
  const isBibliography = isSubpage && Boolean(document.querySelector('.bib-list'));
  const staticBrandHref = document.querySelector('.subpage-brand')?.getAttribute('href');
  const prefix = isSubpage ? (staticBrandHref || '../') : '';
  const phoneOrTablet = matchMedia('(max-width:900px)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection?.saveData);
  const slowConnection = ['slow-2g','2g'].includes(connection?.effectiveType || '');
  const bandwidthConstrained = saveData || slowConnection;

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
  const afterLoadIdle = (callback, timeout = 3200) => {
    const queue = () => {
      if ('requestIdleCallback' in window) requestIdleCallback(callback, {timeout});
      else setTimeout(callback, 700);
    };
    if (document.readyState === 'complete') queue();
    else addEventListener('load', queue, {once:true});
  };

  addStyle(`${prefix}navigation-shell.css?v=20260811-1`, 'navigation-shell.css');
  if (!isBibliography) addStyle(`${prefix}site-core.css?v=20260810-1`, 'site-core.css');
  else addStyle(`${prefix}accessibility.css?v=20260810-2`, 'accessibility.css');

  /* Navigation works without the glide. Treat it as decoration and let content,
     page CSS and search controls win the first-load bandwidth race. */
  if (!phoneOrTablet && !reducedMotion && !bandwidthConstrained) {
    afterLoadIdle(() => {
      addStyle(`${prefix}nav-glide.css?v=20260811-1`, 'nav-glide.css');
      addScript(`${prefix}nav-glide.js?v=20260811-1`, 'nav-glide.js');
    });
  }

  addScript(`${prefix}accessibility.js?v=20260810-2`, 'accessibility.js');
  refreshPageCss('sources.css', '20260810-7');
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

  /* Header invariant: the brand is Home; every public page uses the home-page seven-slot navigation. */
  if (isSubpage) {
    const header = document.querySelector('.subpage-header');
    const brand = document.querySelector('.subpage-brand');
    const nav = document.querySelector('.subpage-nav');
    if (header) header.dataset.shell = 'home-navigation';
    if (brand) {
      brand.href = prefix;
      brand.textContent = 'The Blaschka Object Network';
    }
    if (nav) nav.innerHTML = canonicalNav(prefix);
  }

  const closeMapMenus = except => {
    document.querySelectorAll('.nav-map-menu[open]').forEach(menu => { if (menu !== except) menu.removeAttribute('open'); });
  };
  document.addEventListener('click', event => {
    const menu = event.target.closest('.nav-map-menu');
    if (menu) { closeMapMenus(menu); return; }
    closeMapMenus(null);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMapMenus(null); });

  document.querySelectorAll('img[src^="http://"],img[src^="https://"]').forEach(img => { img.referrerPolicy = 'no-referrer'; });

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main-content';
  if (main && !document.querySelector('.ui-skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'ui-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
  }

  const footer = document.querySelector('.subpage-footer, footer');
  if (footer) {
    const target = footer.querySelector('.footer-inner') || footer;
    const utilityLinks = [
      ['Contact', 'mailto:zhhos98@gmail.com?subject=Blaschka%20Object%20Network', ''],
      ['Image rights', `${prefix}rights/`, '/rights/'],
      ['Privacy', `${prefix}privacy/`, '/privacy/'],
      ['Accessibility', `${prefix}accessibility/`, '/accessibility/']
    ];
    const utility = utilityLinks.map(([label, href, match]) => `<a href="${href}"${match && path.includes(match) ? ' aria-current="page"' : ''}>${label}</a>`).join('');
    target.innerHTML = `<div class="footer-identity"><a class="footer-title" href="${prefix}">The Blaschka Object Network</a><span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span></div><div class="footer-links">${utility}<a class="footer-rss" href="${prefix}feed.xml" aria-label="RSS feed">RSS</a></div>`;
  }

  if (isSubpage && !isBibliography && !phoneOrTablet && !reducedMotion && 'IntersectionObserver' in window) {
    const candidates = [...document.querySelectorAll('.subpage-main > section:not(.page-intro), #case-sections > .sample')].filter(node => !node.closest('[hidden]'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('ui-section-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold:.06, rootMargin:'0px 0px -7% 0px' });
    candidates.forEach(node => { node.classList.add('ui-section-reveal'); observer.observe(node); });
  }
})();