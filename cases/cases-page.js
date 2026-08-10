(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260811-1';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const target = document.getElementById('case-sections');
  if (!target) return;
  const compactViewport = matchMedia('(max-width:900px)').matches;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  const revealCases = () => {
    const samples = [...target.querySelectorAll('.sample')];
    if (compactViewport || reducedMotion || !('IntersectionObserver' in window)) {
      samples.forEach(sample => sample.classList.add('case-visible'));
      return;
    }
    samples.forEach(sample => sample.classList.add('case-enter'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('case-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold:.05, rootMargin:'0px 0px -4% 0px' });
    samples.forEach(sample => observer.observe(sample));
  };

  const applyIncomingSearch = () => {
    const raw = (new URLSearchParams(location.search).get('q') || '').trim();
    if (!raw) return;
    const q = raw.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const samples = [...target.querySelectorAll('.sample')];
    let visible = 0;
    samples.forEach(sample => {
      const haystack = (sample.textContent || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const show = haystack.includes(q);
      sample.hidden = !show;
      if (show) visible++;
    });
    const intro = document.querySelector('.page-intro');
    if (intro && !document.querySelector('.cases-query-bar')) {
      const bar = document.createElement('div');
      bar.className = 'cases-query-bar';
      bar.innerHTML = `<span>Search</span><strong></strong><em></em><a href="./">Clear</a>`;
      bar.querySelector('strong').textContent = `“${raw}”`;
      bar.querySelector('em').textContent = `${visible} matching case${visible === 1 ? '' : 's'}`;
      intro.insertAdjacentElement('afterend', bar);
    }
  };

  const restoreHash = () => {
    if (!location.hash) return;
    const id = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({block:'start'}));
  };

  const loadWall = () => loadScript('./case-wall-media.js?v=20260810-4').catch(console.error);
  const loadSecondaryVisuals = () => {
    if (compactViewport) return;
    loadScript('../cases-visuals-bundle.js?v=20260810-1').catch(console.error);
  };

  document.body.classList.add('cases-ready');
  applyIncomingSearch();
  revealCases();
  restoreHash();

  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadWall, {timeout:450});
    requestIdleCallback(loadSecondaryVisuals, {timeout:1200});
  } else {
    setTimeout(loadWall, 80);
    setTimeout(loadSecondaryVisuals, 360);
  }
})();