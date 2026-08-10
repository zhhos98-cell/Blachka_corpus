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

  addStyle(`${prefix}apple-unified.css?v=20260810-2`, 'apple-unified.css');
  if (isSubpage) addStyle(`${prefix}subpage-v2.css?v=20260810-1`, 'subpage-v2.css');
  addStyle(`${prefix}fluid-motion.css?v=20260810-3`, 'fluid-motion.css?v=20260810-3');
  addScript(`${prefix}nav-glide.js?v=20260810-1`, 'nav-glide.js');

  if (!window.__blaschkaFluidMotionRequested) {
    window.__blaschkaFluidMotionRequested = true;
    addScript(`${prefix}fluid-motion.js?v=20260810-2`, 'fluid-motion.js?v=20260810-2');
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
      footer.innerHTML = `<a href="../">The Blaschka Object Network</a><span><a href="../cases/">Cases</a> · <a href="../bibliography/">Bibliography</a> · <a href="../sources/">Sources</a> · <a href="../auctions/">Auctions</a> · <a href="../privacy/">Privacy</a></span>`;
    }
  }
})();
