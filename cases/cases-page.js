(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-15';
    ui.defer = true;
    document.head.appendChild(ui);
  }
  const matrix = document.querySelector('link[href*="case-wall-matrix.css"]');
  if (matrix) matrix.href = 'case-wall-matrix.css?v=20260810-4';

  const target = document.getElementById('case-sections');
  const loading = document.getElementById('cases-loading');
  if (!target) return;
  const compactViewport = matchMedia('(max-width:900px)').matches;

  const loadScript = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  loadScript('./case-wall-media.js?v=20260810-4').catch(console.error);

  const revealCases = () => {
    const samples = [...document.querySelectorAll('#case-sections .sample')];
    if (compactViewport || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block:'start' }));
  };

  const loadSecondaryVisuals = async () => {
    if (compactViewport) return;
    try { await loadScript('../cases-visuals-bundle.js?v=20260810-1'); }
    catch (error) { console.error(error); }
  };

  (async () => {
    try {
      const response = await fetch('./base-cases.html', { cache:'force-cache' });
      if (!response.ok) throw new Error(`Base case source returned ${response.status}`);
      const html = await response.text();
      const doc = new DOMParser().parseFromString(`<main>${html}</main>`, 'text/html');
      doc.querySelectorAll('img[src^="http://"],img[src^="https://"]').forEach(img => img.setAttribute('referrerpolicy','no-referrer'));
      doc.querySelectorAll('a[href^="http://"],a[href^="https://"]').forEach(a => a.setAttribute('rel','noopener noreferrer'));
      const baseSamples = [...doc.querySelectorAll('main > .sample')];
      if (baseSamples.length !== 5) throw new Error(`Expected 5 base cases, found ${baseSamples.length}.`);
      baseSamples.forEach(sample => target.appendChild(document.importNode(sample, true)));

      await loadScript('../cases-v2.js?v=20260809-1');
      loading?.remove();
      document.body.classList.add('cases-ready');
      applyIncomingSearch();
      revealCases();
      restoreHash();

      if ('requestIdleCallback' in window) requestIdleCallback(loadSecondaryVisuals, { timeout:900 });
      else setTimeout(loadSecondaryVisuals, 180);
    } catch (error) {
      console.error(error);
      loading?.remove();
      target.innerHTML = '<p class="case-load-error">The case page could not assemble its case markup. The source files remain available in the repository.</p>';
    }
  })();
})();