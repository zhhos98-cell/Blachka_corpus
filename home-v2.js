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

    .transit-strip{background:#211916;color:#f4efe8;border-top:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07)}
    .transit-strip-inner{width:min(calc(100% - 40px),1340px);margin:auto;padding:42px 0 46px}
    .transit-strip-head{display:grid;grid-template-columns:minmax(180px,.42fr) minmax(0,1.58fr);gap:clamp(30px,6vw,86px);align-items:start;margin-bottom:25px}
    .transit-strip-head h2{margin:0;font-size:clamp(2rem,3.7vw,3.7rem);font-weight:500;letter-spacing:-.035em;line-height:.94}
    .transit-strip-head p:last-child{max-width:650px;margin:5px 0 0;color:#bfaea4;font-size:.98rem;line-height:1.52}
    .transit-card{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(230px,.6fr);gap:26px;align-items:stretch;padding:24px 25px 22px;border:1px solid rgba(255,255,255,.13);border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.025));box-shadow:0 18px 44px rgba(0,0,0,.12)}
    .transit-main{min-width:0}
    .transit-meta{display:flex;flex-wrap:wrap;gap:8px 14px;margin:0 0 18px;color:#d7a88b;font:700 .64rem/1.3 var(--ui);letter-spacing:.11em;text-transform:uppercase}
    .transit-route{display:grid;grid-template-columns:auto minmax(28px,1fr) auto minmax(28px,1fr) auto;align-items:center;gap:10px;max-width:900px;margin:0 0 20px}
    .transit-stop{min-width:0;color:#f2e9e1;font:650 .72rem/1.35 var(--ui);white-space:normal}
    .transit-line{position:relative;height:1px;background:rgba(255,255,255,.23)}
    .transit-line::before,.transit-line::after{content:'';position:absolute;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:#cf8e6b}
    .transit-line::before{left:0}.transit-line::after{right:0}
    .transit-title{margin:0 0 7px;font-size:clamp(1.55rem,2.5vw,2.6rem);font-weight:500;letter-spacing:-.025em;line-height:1.02}
    .transit-detail{max-width:840px;margin:0;color:#c9bbb1;font-size:.97rem;line-height:1.56}
    .transit-side{display:flex;flex-direction:column;justify-content:space-between;gap:20px;padding-left:24px;border-left:1px solid rgba(255,255,255,.1);font-family:var(--ui)}
    .transit-tag{margin:0;color:rgba(255,255,255,.46);font-size:.62rem;font-weight:650;letter-spacing:.12em;text-transform:uppercase}
    .transit-actions{display:flex;flex-wrap:wrap;gap:8px}
    .transit-actions a,.transit-actions button{display:inline-flex;align-items:center;justify-content:center;min-height:39px;padding:0 13px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.055);color:#f4efe8;font:650 .67rem/1 var(--ui);text-decoration:none;cursor:pointer;transition:background .2s ease,transform .2s ease,border-color .2s ease}
    .transit-actions a:hover,.transit-actions button:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.24);transform:translateY(-1px)}
    .transit-actions a:focus-visible,.transit-actions button:focus-visible{outline:2px solid #d7a88b;outline-offset:3px}

    @media (max-width:820px){
      .transit-strip-head{grid-template-columns:1fr;gap:12px}
      .transit-card{grid-template-columns:1fr}
      .transit-side{padding:20px 0 0;border-left:0;border-top:1px solid rgba(255,255,255,.1)}
      .transit-route{grid-template-columns:1fr;gap:7px}
      .transit-line{width:1px;height:22px;margin-left:4px;background:rgba(255,255,255,.23)}
      .transit-line::before,.transit-line::after{left:50%;right:auto;margin-left:-3px}
      .transit-line::before{top:0}.transit-line::after{top:auto;bottom:0;margin-top:0}
    }
    @media (max-width:680px){
      .network-quicklinks{margin-left:4px;margin-right:4px}.network-quicklinks-label{width:100%;margin-bottom:1px}
      .transit-strip-inner{width:min(calc(100% - 28px),1340px);padding:34px 0 38px}
      .transit-card{padding:21px 19px 19px;border-radius:18px}
    }
  `;
  document.head.appendChild(style);

  if (!form.querySelector('.network-quicklinks')) {
    const quick = document.createElement('div');
    quick.className = 'network-quicklinks';
    quick.setAttribute('aria-label', 'Quick exploration');
    quick.innerHTML = '<span class="network-quicklinks-label">Explore</span><button type="button" data-random-case>Random trail</button><a href="cases/prague/">New · Prague</a><a href="cases/field-museum/">New · Field Museum</a><a href="cases/geneva/">New · Geneva</a>';
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

  const movements = [
    {
      date:'December 1887',
      place:'Liverpool',
      stops:['Workshop','Hamburg','Liverpool'],
      title:'Freight case I.B. 268',
      detail:'A marked case moved through M. O. W. Möller in Hamburg for onward delivery to Liverpool. The shipment is documented; the object-level bridge from the case to individual surviving models remains open.',
      href:'cases/#sample-liverpool',
      tag:'crate · freight · open join'
    },
    {
      date:'1885',
      place:'Auckland',
      stops:['Ward network','Charles Adams','Auckland Museum'],
      title:'Seven models delivered safely',
      detail:'The surviving group contains seven catalogue-numbered models with Ward prices and Auckland registrations. The exact delivery date and whether all seven travelled together remain unresolved.',
      href:'cases/#sample-auckland',
      tag:'samples · handoff · mediated payment'
    },
    {
      date:'8 November 1884',
      place:'Prague',
      stops:['Blaschka workshop','Václav Frič','National Museum'],
      title:'Four catalogue-numbered gifts',
      detail:'Four named models entered the Prague chain through Frič. One original survives, one is documented as destroyed in May 1945, and two fates remain open; the complete 1884 commercial shipment is still unitemised.',
      href:'cases/prague/',
      tag:'gift · intermediary · split fate'
    },
    {
      date:'1893–1894',
      place:'Chicago',
      stops:['World’s Fair','Ward acquisition','Field Museum'],
      title:'A fair display becomes a museum collection',
      detail:'Ward material moved from the 1893 exposition into the new museum collection and was reinstalled by January 1894. Blaschka models survive in the Field Museum, but the exact fair-to-object subset remains open.',
      href:'cases/field-museum/',
      tag:'exhibition · acquisition · reinstallation'
    },
    {
      date:'Renovation phase',
      place:'Geneva',
      stops:['Museum display','Protective packing','Heritage storage'],
      title:'Moved because the building began to move',
      detail:'Geneva boxed and moved the models off-site because construction vibration posed a risk. Their return depends on further conservation and showcases adapted for vibration, climate and light.',
      href:'cases/geneva/',
      tag:'packing-out · vibration · preventive conservation'
    }
  ];

  const journey = document.querySelector('.journey-feature');
  if (journey && !document.querySelector('.transit-strip')) {
    const transit = document.createElement('section');
    transit.className = 'transit-strip';
    transit.id = 'in-transit';
    transit.setAttribute('aria-labelledby', 'in-transit-title');
    transit.innerHTML = `
      <div class="transit-strip-inner">
        <div class="transit-strip-head">
          <div><p class="eyebrow">In transit</p><h2 id="in-transit-title">One movement at a time.</h2></div>
          <p>Small shipments, handoffs and conservation moves make the network visible at object scale. Each card keeps the documented route separate from what remains unresolved.</p>
        </div>
        <article class="transit-card" aria-live="polite">
          <div class="transit-main">
            <p class="transit-meta"><span data-transit-date></span><span data-transit-place></span></p>
            <div class="transit-route" aria-label="Movement route">
              <span class="transit-stop" data-transit-stop="0"></span><span class="transit-line" aria-hidden="true"></span>
              <span class="transit-stop" data-transit-stop="1"></span><span class="transit-line" aria-hidden="true"></span>
              <span class="transit-stop" data-transit-stop="2"></span>
            </div>
            <h3 class="transit-title" data-transit-title></h3>
            <p class="transit-detail" data-transit-detail></p>
          </div>
          <div class="transit-side">
            <p class="transit-tag" data-transit-tag></p>
            <div class="transit-actions"><a data-transit-link href="cases/">Open chain ↗</a><button type="button" data-next-transit>Another movement</button></div>
          </div>
        </article>
      </div>`;
    journey.insertAdjacentElement('beforebegin', transit);

    const dateEl = transit.querySelector('[data-transit-date]');
    const placeEl = transit.querySelector('[data-transit-place]');
    const stopEls = [...transit.querySelectorAll('[data-transit-stop]')];
    const titleEl = transit.querySelector('[data-transit-title]');
    const detailEl = transit.querySelector('[data-transit-detail]');
    const tagEl = transit.querySelector('[data-transit-tag]');
    const linkEl = transit.querySelector('[data-transit-link]');
    const nextButton = transit.querySelector('[data-next-transit]');
    let movementIndex = Math.floor(Math.random() * movements.length);

    const renderMovement = index => {
      const item = movements[index];
      dateEl.textContent = item.date;
      placeEl.textContent = item.place;
      stopEls.forEach((el, i) => { el.textContent = item.stops[i] || ''; });
      titleEl.textContent = item.title;
      detailEl.textContent = item.detail;
      tagEl.textContent = item.tag;
      linkEl.href = item.href;
      linkEl.setAttribute('aria-label', `Open ${item.place} documentary chain`);
    };
    renderMovement(movementIndex);

    nextButton?.addEventListener('click', () => {
      let next = movementIndex;
      while (movements.length > 1 && next === movementIndex) next = Math.floor(Math.random() * movements.length);
      movementIndex = next;
      renderMovement(movementIndex);
    });
  }

  const viewAll = document.querySelector('.feature-footer .view-all');
  if (viewAll) viewAll.textContent = 'View all thirteen cases ↗';
})();