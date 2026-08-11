(() => {
  if (window.__blaschkaUnifiedUI) return;
  window.__blaschkaUnifiedUI = true;

  const isSubpage = document.body.classList.contains('subpage');
  const staticBrandHref = document.querySelector('.subpage-brand')?.getAttribute('href');
  const prefix = isSubpage ? (staticBrandHref || '../') : '';

  const addStyle = (href, token) => {
    const wanted = new URL(href, location.href).href;
    const existing = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes(token));
    if (existing) return;
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

  /* Static HTML now carries the canonical shell. Keep these as fail-safe additions
     for older or specialist pages without rewriting page-family CSS or navigation. */
  if (isSubpage) {
    addStyle(`${prefix}navigation-shell.css?v=20260811-2`, 'navigation-shell.css');
    addStyle(`${prefix}accessibility.css?v=20260810-2`, 'accessibility.css');
  }
  addScript(`${prefix}accessibility.js?v=20260810-2`, 'accessibility.js');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = `${prefix}feed.xml`;
    document.head.appendChild(rss);
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
