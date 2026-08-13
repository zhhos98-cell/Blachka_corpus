(() => {
  const shellCss = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes('navigation-shell.css'));
  if (shellCss) shellCss.href = 'navigation-shell.css?v=20260811-2';

  const addScript = (src, token) => {
    if ([...document.scripts].some(script => script.src.includes(token))) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  };
  addScript('accessibility.js?v=20260810-2', 'accessibility.js');

  const main = document.getElementById('main-content');
  if (main && !document.querySelector('.ui-skip-link')) {
    const skip = document.createElement('a');
    skip.className = 'ui-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Skip to content';
    document.body.prepend(skip);
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

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const scope = document.getElementById('network-search-scope');
  const status = document.getElementById('network-search-status');
  if (!form || !input || !scope) return;

  const placeholders = {
    cases:'Liverpool, Auckland, Tufts…',
    people:'Ward, Ganong, curator…',
    bibliography:'author, title, year…',
    sources:'archive, invoice, Dresden…',
    auctions:'house, lot, catalogue number…'
  };
  const routes = { cases:'cases/', people:'people/', bibliography:'bibliography/', sources:'sources/', auctions:'auctions/' };

  const updatePlaceholder = () => {
    input.placeholder = placeholders[scope.value] || placeholders.cases;
    if (status) status.textContent = '';
  };
  scope.addEventListener('change', updatePlaceholder);
  updatePlaceholder();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
      if (status) status.textContent = 'Enter a search term.';
      input.focus();
      return;
    }
    location.href = `${routes[scope.value] || routes.cases}?q=${encodeURIComponent(query)}`;
  });

  const style = document.createElement('style');
  style.textContent = `
    .network-quicklinks{display:flex;flex-wrap:wrap;gap:7px;margin:11px 8px 0;align-items:center;font:600 .66rem/1 var(--ui)}
    .network-quicklinks a,.network-quicklinks button{display:inline-flex;align-items:center;min-height:31px;padding:0 11px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(20,14,12,.22);color:rgba(255,255,255,.82);text-decoration:none;cursor:pointer;backdrop-filter:blur(9px);transition:background .2s ease,transform .2s ease,border-color .2s ease}
    .network-quicklinks a:hover,.network-quicklinks button:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.34);transform:translateY(-1px)}
    .network-quicklinks .network-quicklinks-label{padding-right:3px;color:rgba(255,255,255,.5);font-weight:520;letter-spacing:.04em;text-transform:uppercase}
    @media (max-width:680px){.network-quicklinks{margin-left:4px;margin-right:4px}.network-quicklinks-label{width:100%;margin-bottom:1px}}
  `;
  document.head.appendChild(style);

  if (!form.querySelector('.network-quicklinks')) {
    const quick = document.createElement('div');
    quick.className = 'network-quicklinks';
    quick.setAttribute('aria-label', 'Quick exploration');
    quick.innerHTML = '<span class="network-quicklinks-label">Explore</span><button type="button" data-random-case>Random trail</button><a href="haohao-zhang/">Researcher · Haohao Zhang</a><a href="cases/prague/">New · Prague</a><a href="cases/field-museum/">New · Field Museum</a><a href="cases/geneva/">New · Geneva</a>';
    form.appendChild(quick);

    const randomRoutes = [
      'cases/#sample-liverpool',
      'cases/#sample-auckland',
      'cases/#sample-florence',
      'cases/#sample-tufts',
      'cases/#sample-michigan',
      'cases/#sample-mexico',
      'cases/#sample-newcastle',
      'cases/#sample-nottingham',
      'cases/#sample-vassar',
      'cases/#sample-milwaukee',
      'cases/prague/',
      'cases/field-museum/',
      'cases/geneva/'
    ];
    quick.querySelector('[data-random-case]')?.addEventListener('click', () => {
      const destination = randomRoutes[Math.floor(Math.random() * randomRoutes.length)];
      location.href = destination;
    });
  }

  const viewAll = document.querySelector('.feature-footer .view-all');
  if (viewAll) viewAll.textContent = 'View all thirteen cases ↗';

  const transitItems = [
    {
      label:'Liverpool · 1887',
      title:'One case, marked I.B. 268.',
      route:['Dresden','Hamburg','Liverpool'],
      cargo:'Blaschka models · workshop account 247 Marks',
      note:'Object-level bridge from the marked freight case to surviving Liverpool models remains open.',
      href:'cases/#sample-liverpool'
    },
    {
      label:'Auckland · 1885',
      title:'Seven samples moved through a mediated payment chain.',
      route:['Ward','Charles Adams','Auckland'],
      cargo:'7 models · published total US$14.65',
      note:'Whether all seven travelled together and the exact delivery date remain open.',
      href:'cases/#sample-auckland'
    },
    {
      label:'Prague · 1884',
      title:'Four catalogue-numbered gifts split into four later fates.',
      route:['Blaschka workshop','Václav Frič','National Museum'],
      cargo:'Nos. 36 · 224 · 235 · 553',
      note:'One survives, one was destroyed in 1945, and two original fates remain unresolved.',
      href:'cases/prague/'
    },
    {
      label:'Chicago · 1893–94',
      title:'World’s Fair material became museum collection.',
      route:['World’s Columbian Exposition','Ward acquisition','Field Museum'],
      cargo:'Blaschka models inside a larger natural-history transfer',
      note:'The exact Blaschka subset and object-level crosswalk remain open.',
      href:'cases/field-museum/'
    },
    {
      label:'Geneva · renovation',
      title:'Moved because the building began to move.',
      route:['Museum display','Protective packing','Heritage storage'],
      cargo:'Blaschka collection · vibration-sensitive glass models',
      note:'Return depends on consolidation, restoration and adapted showcases.',
      href:'cases/geneva/'
    }
  ];

  const journey = document.querySelector('.journey-feature');
  if (journey && !document.querySelector('.in-transit')) {
    const transit = document.createElement('section');
    transit.className = 'in-transit';
    transit.setAttribute('aria-labelledby', 'in-transit-title');
    transit.innerHTML = `
      <div class="in-transit-inner">
        <div class="in-transit-head"><div><p class="eyebrow">In transit</p><h2 id="in-transit-title">A small movement from the archive.</h2></div><button type="button" data-next-transit>Another movement ↻</button></div>
        <a class="in-transit-card" href="#">
          <div class="in-transit-copy"><p class="in-transit-label"></p><h3></h3><p class="in-transit-cargo"></p></div>
          <ol class="in-transit-route" aria-label="Movement route"></ol>
          <div class="in-transit-note"><span>Open join</span><p></p><b aria-hidden="true">↗</b></div>
        </a>
      </div>`;
    journey.insertAdjacentElement('beforebegin', transit);

    const transitStyle = document.createElement('style');
    transitStyle.textContent = `
      .in-transit{background:#201916;color:#f4efe8;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
      .in-transit-inner{width:min(calc(100% - 40px),1340px);margin:auto;padding:clamp(68px,8vw,106px) 0}
      .in-transit-head{display:flex;align-items:flex-end;justify-content:space-between;gap:28px;margin-bottom:30px}
      .in-transit-head h2{max-width:760px;margin:0;font-size:clamp(2.25rem,4.4vw,4.5rem);font-weight:500;letter-spacing:-.04em;line-height:.96}
      .in-transit-head button{min-height:42px;padding:0 14px;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:rgba(255,255,255,.05);color:#d6c9c0;font:620 .68rem/1 var(--ui);cursor:pointer}
      .in-transit-card{display:grid;grid-template-columns:minmax(240px,.82fr) minmax(360px,1.18fr) minmax(230px,.7fr);gap:clamp(24px,4vw,58px);align-items:center;padding:clamp(26px,4vw,44px);border:1px solid rgba(255,255,255,.11);border-radius:24px;background:linear-gradient(120deg,rgba(255,255,255,.055),rgba(255,255,255,.018));text-decoration:none;transition:background .25s ease,transform .25s ease}
      .in-transit-card:hover{background:linear-gradient(120deg,rgba(255,255,255,.08),rgba(255,255,255,.028));transform:translateY(-2px)}
      .in-transit-label{margin:0 0 9px;color:#dfa889;font:700 .67rem/1.3 var(--ui);letter-spacing:.12em;text-transform:uppercase}
      .in-transit-copy h3{margin:0;font-size:clamp(1.65rem,2.8vw,3rem);font-weight:500;line-height:1.02;letter-spacing:-.025em}
      .in-transit-cargo{margin:15px 0 0;color:#bdafa6;font:550 .7rem/1.5 var(--ui)}
      .in-transit-route{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0;margin:0;padding:0;list-style:none;counter-reset:route}
      .in-transit-route li{position:relative;padding:22px 12px 0;border-top:1px solid rgba(255,255,255,.19);color:#eee4dc;font:650 .7rem/1.35 var(--ui);text-align:center}
      .in-transit-route li::before{content:'';position:absolute;top:-5px;left:50%;width:9px;height:9px;transform:translateX(-50%);border-radius:50%;background:#d29a78;box-shadow:0 0 0 4px #201916}
      .in-transit-route li:not(:last-child)::after{content:'→';position:absolute;right:-7px;top:13px;color:rgba(255,255,255,.35)}
      .in-transit-note{display:grid;grid-template-columns:1fr auto;gap:7px 18px;padding-left:24px;border-left:1px solid rgba(255,255,255,.12)}
      .in-transit-note span{grid-column:1/-1;color:#d29a78;font:700 .62rem/1.3 var(--ui);letter-spacing:.11em;text-transform:uppercase}
      .in-transit-note p{margin:0;color:#bcaea5;font-size:.89rem;line-height:1.5}
      .in-transit-note b{align-self:end;font:400 1.05rem/1 var(--ui)}
      @media(max-width:900px){.in-transit-card{grid-template-columns:1fr}.in-transit-note{padding:20px 0 0;border-left:0;border-top:1px solid rgba(255,255,255,.1)}}
      @media(max-width:620px){.in-transit-inner{width:min(calc(100% - 28px),1340px)}.in-transit-head{display:block}.in-transit-head button{margin-top:20px}.in-transit-route li{font-size:.62rem}.in-transit-card{border-radius:19px}}
    `;
    document.head.appendChild(transitStyle);

    let transitIndex = Math.floor(Math.random() * transitItems.length);
    const renderTransit = () => {
      const item = transitItems[transitIndex];
      const card = transit.querySelector('.in-transit-card');
      card.href = item.href;
      transit.querySelector('.in-transit-label').textContent = item.label;
      transit.querySelector('.in-transit-copy h3').textContent = item.title;
      transit.querySelector('.in-transit-cargo').textContent = item.cargo;
      transit.querySelector('.in-transit-route').innerHTML = item.route.map(stop => `<li>${stop}</li>`).join('');
      transit.querySelector('.in-transit-note p').textContent = item.note;
    };
    transit.querySelector('[data-next-transit]')?.addEventListener('click', () => {
      transitIndex = (transitIndex + 1) % transitItems.length;
      renderTransit();
    });
    renderTransit();
  }
})();