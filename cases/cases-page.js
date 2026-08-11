(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260811-4';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const target = document.getElementById('case-sections');
  if (!target) return;

  const directoryNote = document.querySelector('.cases-directory-copy > p');
  if (directoryNote) directoryNote.textContent = 'Select a case to jump to the full documentary chain.';

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
      bar.innerHTML = '<span>Search</span><strong></strong><em></em><a href="./">Clear</a>';
      bar.querySelector('strong').textContent = `“${raw}”`;
      bar.querySelector('em').textContent = `${visible} matching case${visible === 1 ? '' : 's'}`;
      intro.insertAdjacentElement('afterend', bar);
    }
  };

  document.body.classList.add('cases-ready');
  target.querySelectorAll('.sample').forEach(sample => sample.classList.add('case-visible'));
  applyIncomingSearch();

  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({block:'start'}));
  }
})();
