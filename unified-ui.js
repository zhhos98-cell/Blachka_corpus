(() => {
  if (window.__blaschkaUnifiedUI) return;
  window.__blaschkaUnifiedUI = true;

  const isSubpage = document.body.classList.contains('subpage');
  const prefix = isSubpage ? '../' : '';
  const addStyle = (href, token) => {
    if ([...document.querySelectorAll('link[rel="stylesheet"]')].some(link => link.href.includes(token))) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };
  const addScript = (src, token) => {
    if ([...document.scripts].some(script => script.src.includes(token))) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  };

  addStyle(`${prefix}apple-unified.css?v=20260810-4`, 'apple-unified.css');
  if (isSubpage) addStyle(`${prefix}subpage-v2.css?v=20260810-2`, 'subpage-v2.css');
  addStyle(`${prefix}fluid-motion.css?v=20260810-4`, 'fluid-motion.css');
  addStyle(`${prefix}site-rhythm.css?v=20260810-2`, 'site-rhythm.css');
  addStyle(`${prefix}site-polish.css?v=20260810-2`, 'site-polish.css');
  addStyle(`${prefix}footer-legal.css?v=20260810-2`, 'footer-legal.css');
  addStyle(`${prefix}nav-glide.css?v=20260810-2`, 'nav-glide.css');
  addStyle(`${prefix}mobile-v3.css?v=20260810-1`, 'mobile-v3.css');
  addScript(`${prefix}nav-glide.js?v=20260810-2`, 'nav-glide.js');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = `${prefix}feed.xml`;
    document.head.appendChild(rss);
  }

  const main = document.querySelector('main');
  if (main && !main.id) main.id = 'main-content';
  if (main && !document.querySelector('.ui-skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'ui-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
  }

  if (isSubpage) {
    const path = location.pathname.toLowerCase();
    const current = path.includes('/cases/') ? 'cases'
      : path.includes('/bibliography/') ? 'bibliography'
      : path.includes('/sources/') ? 'sources'
      : path.includes('/auctions/') ? 'auctions'
      : '';

    const nav = document.querySelector('.subpage-nav');
    if (nav) {
      const items = [
        ['home','../','Home'],
        ['cases','../cases/','Cases'],
        ['bibliography','../bibliography/','Bibliography'],
        ['sources','../sources/','Sources'],
        ['auctions','../auctions/','Auctions'],
        ['contact','../#contact','Contact']
      ];
      nav.innerHTML = items.map(([key,href,label]) => `<a href="${href}"${key === current ? ' aria-current="page"' : ''}>${label}</a>`).join('');
    }

    const footer = document.querySelector('.subpage-footer');
    if (footer) {
      footer.innerHTML = `
        <span class="footer-identity">
          <a class="footer-title" href="../">The Blaschka Object Network</a>
          <span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span>
        </span>
        <span class="footer-links">
          <a href="../cases/">Cases</a>
          <a href="../bibliography/">Bibliography</a>
          <a href="../sources/">Sources</a>
          <a href="../auctions/">Auctions</a>
          <a href="../privacy/">Privacy</a>
          <a class="footer-rss" href="../feed.xml" type="application/rss+xml" aria-label="RSS feed"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="19" r="2.2"/><path d="M3 10.5v3a7.5 7.5 0 0 1 7.5 7.5h3A10.5 10.5 0 0 0 3 10.5Zm0-6v3A13.5 13.5 0 0 1 16.5 21h3C19.5 11.9 12.1 4.5 3 4.5Z"/></svg><span>RSS</span></a>
        </span>`;
    }
  }
})();