(() => {
  if (!window.__blaschkaUnifiedUIRequested) {
    window.__blaschkaUnifiedUIRequested = true;
    const ui = document.createElement('script');
    ui.src = '../unified-ui.js?v=20260811-5';
    ui.defer = true;
    document.head.appendChild(ui);
  }

  const target = document.getElementById('case-sections');
  if (!target) return;

  const standaloneCases = [
    {
      no:'011',
      place:'Prague',
      years:'1884–present',
      kicker:'gift · war loss · conservation',
      closure:'four-object split fate',
      href:'prague/'
    },
    {
      no:'012',
      place:'Field Museum',
      years:'1893–present',
      kicker:'World’s Fair · Ward · reinstallation',
      closure:'exhibition → acquisition → survival',
      href:'field-museum/'
    },
    {
      no:'013',
      place:'Geneva',
      years:'1888–present',
      kicker:'acquisition · restoration · vibration',
      closure:'117 acquired → 94 reported surviving',
      href:'geneva/'
    }
  ];

  const introTitle = document.getElementById('cases-title');
  if (introTitle) introTitle.textContent = 'Thirteen object lives';

  const introDek = document.querySelector('.page-intro .page-dek');
  if (introDek) introDek.textContent = 'Thirteen case studies follow manufacture, agency, purchase, shipment, institutional succession, teaching use, conservation, rediscovery and present custody. Open joins remain open.';

  const directoryNote = document.querySelector('.cases-directory-copy > p');
  if (directoryNote) directoryNote.textContent = 'Select a case to jump to the documentary chain or open a standalone case page.';

  const wall = document.querySelector('.case-wall');
  if (wall && !wall.querySelector('[data-standalone-case]')) {
    standaloneCases.forEach(item => {
      const link = document.createElement('a');
      link.className = 'case-index-row case-tile';
      link.href = item.href;
      link.setAttribute('role', 'listitem');
      link.dataset.standaloneCase = item.place.toLowerCase();
      link.dataset.search = `${item.place} ${item.years} ${item.kicker} ${item.closure}`.toLowerCase();
      link.innerHTML = `<span class="case-tile-inner"><span class="case-tile-face case-tile-front"><span class="case-no">${item.no}</span><span class="case-tile-front-copy"><strong>${item.place}</strong><span class="case-years">${item.years}</span></span></span><span class="case-tile-face case-tile-back"><span class="case-tile-kicker">${item.kicker}</span><strong>${item.place}</strong><span class="case-closure">${item.closure}</span><i aria-hidden="true">Open case ↗</i></span></span>`;
      wall.appendChild(link);
    });
  }

  const applyIncomingSearch = () => {
    const raw = (new URLSearchParams(location.search).get('q') || '').trim();
    if (!raw) return;
    const q = raw.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const samples = [...target.querySelectorAll('.sample')];
    const standalone = [...document.querySelectorAll('[data-standalone-case]')];
    let visible = 0;

    samples.forEach(sample => {
      const haystack = (sample.textContent || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const show = haystack.includes(q);
      sample.hidden = !show;
      if (show) visible++;
    });

    standalone.forEach(card => {
      const haystack = `${card.dataset.search || ''} ${card.textContent || ''}`.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const show = haystack.includes(q);
      card.hidden = !show;
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