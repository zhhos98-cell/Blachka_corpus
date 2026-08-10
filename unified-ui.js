(() => {
  if (window.__blaschkaUnifiedUI) return;
  window.__blaschkaUnifiedUI = true;

  const isSubpage = document.body.classList.contains('subpage');
  const prefix = isSubpage ? '../' : '';
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

  addStyle(`${prefix}apple-unified.css?v=20260810-4`, 'apple-unified.css');
  if (isSubpage) addStyle(`${prefix}subpage-v2.css?v=20260810-2`, 'subpage-v2.css');
  addStyle(`${prefix}fluid-motion.css?v=20260810-4`, 'fluid-motion.css');
  addStyle(`${prefix}site-rhythm.css?v=20260810-2`, 'site-rhythm.css');
  addStyle(`${prefix}site-polish.css?v=20260810-2`, 'site-polish.css');
  if (isSubpage) addStyle(`${prefix}header-minimal.css?v=20260810-1`, 'header-minimal.css');
  addStyle(`${prefix}footer-legal.css?v=20260810-2`, 'footer-legal.css');
  addStyle(`${prefix}nav-glide.css?v=20260810-2`, 'nav-glide.css');
  addStyle(`${prefix}mobile-v3.css?v=20260810-2`, 'mobile-v3.css');
  addScript(`${prefix}nav-glide.js?v=20260810-2`, 'nav-glide.js');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = `${prefix}feed.xml`;
    document.head.appendChild(rss);
  }

  const nav = document.querySelector('.subpage-nav');
  if (isSubpage && nav) {
    const links = [
      ['Home', `${prefix}`],
      ['Cases', `${prefix}cases/`],
      ['Bibliography', `${prefix}bibliography/`],
      ['Sources', `${prefix}sources/`],
      ['Auctions', `${prefix}auctions/`],
      ['Contact', `${prefix}#contact`]
    ];
    const path = location.pathname.replace(/index\.html$/, '');
    nav.innerHTML = links.map(([label,href]) => {
      const current = label !== 'Home' && path.includes(`/${label.toLowerCase()}/`);
      return `<a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a>`;
    }).join('');
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

  const footer = document.querySelector('.subpage-footer, footer');
  if (footer && !footer.querySelector('.footer-copyright')) {
    const target = footer.querySelector('.footer-inner') || footer;
    target.innerHTML = `<div class="footer-identity"><a class="footer-title" href="${prefix}">The Blaschka Object Network</a><span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span></div><div class="footer-links"><a href="${prefix}cases/">Cases</a><a href="${prefix}bibliography/">Bibliography</a><a href="${prefix}sources/">Sources</a><a href="${prefix}auctions/">Auctions</a><a href="${prefix}privacy/">Privacy</a><a class="footer-rss" href="${prefix}feed.xml" aria-label="RSS feed">RSS</a></div>`;
  }
})();