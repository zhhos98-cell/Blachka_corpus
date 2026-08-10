(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260810-2';
    document.head.appendChild(ui);
  }
  if (!document.querySelector('link[href*="case-wall-matrix.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'case-wall-matrix.css?v=20260810-1';
    document.head.appendChild(link);
  }

  const target = document.getElementById('case-sections');
  const loading = document.getElementById('cases-loading');
  if (!target) return;

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  const revealCases = () => {
    const samples = [...document.querySelectorAll('#case-sections .sample')];
    samples.forEach((sample) => sample.classList.add('case-enter'));
    if (!('IntersectionObserver' in window)) {
      samples.forEach((sample) => sample.classList.add('case-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('case-visible');
        entry.target.querySelectorAll('.event').forEach((event) => event.classList.add('is-visible'));
        observer.unobserve(entry.target);
      });
    }, { threshold: .06, rootMargin: '0px 0px -5% 0px' });
    samples.forEach((sample) => observer.observe(sample));
  };

  const applyIncomingSearch = () => {
    const raw = (new URLSearchParams(location.search).get('q') || '').trim();
    if (!raw) return;
    const q = raw.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const samples = [...target.querySelectorAll('.sample')];
    let visible = 0;
    samples.forEach((sample) => {
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
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' });
    });
  };

  (async () => {
    try {
      const response = await fetch('./base-cases.html', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Base case source returned ${response.status}`);
      const html = await response.text();
      const doc = new DOMParser().parseFromString(`<main>${html}</main>`, 'text/html');
      const baseSamples = [...doc.querySelectorAll('main > .sample')];
      if (baseSamples.length !== 5) throw new Error(`Expected 5 base cases, found ${baseSamples.length}.`);

      baseSamples.forEach((sample) => target.appendChild(document.importNode(sample, true)));
      loading?.remove();

      await loadScript('../cases-v2.js?v=20260809-1');
      await loadScript('../maps-v3.js?v=20260809-2');
      await loadScript('../maps-v4.js?v=20260809-1');
      await loadScript('../map-ratio-fix.js?v=20260810-2');
      await loadScript('../visuals-v1.js?v=20260809-2');
      await loadScript('../visuals-v2.js?v=20260809-1');
      await loadScript('./case-wall-media.js?v=20260810-1');

      document.body.classList.add('cases-ready');
      applyIncomingSearch();
      revealCases();
      restoreHash();
    } catch (error) {
      console.error(error);
      loading?.remove();
      target.innerHTML = '<p class="case-load-error">The case page could not assemble its case markup. The source files remain available in the repository.</p>';
    }
  })();
})();