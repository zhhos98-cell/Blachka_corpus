(() => {
  const topNav = document.querySelector('.top-nav');
  if (topNav) {
    topNav.innerHTML = `
      <a href="#project">Project</a>
      <a href="#cases">Cases</a>
      <a href="auctions/">Auctions</a>
      <a href="blog/">Blog</a>
    `;
  }

  const firstSample = document.querySelector('.sample');
  if (firstSample && !document.querySelector('#cases')) {
    firstSample.insertAdjacentHTML('beforebegin', `
      <section class="case-index" id="cases" aria-labelledby="case-index-title">
        <div class="case-index-head">
          <div>
            <p class="eyebrow">Case index</p>
            <h2 id="case-index-title">Five documentary lives</h2>
          </div>
          <p>Each case closes a different part of the object chain. The index records place, time span, research emphasis and the strongest currently documented bridge.</p>
        </div>

        <div class="case-index-table" role="list" aria-label="Public case studies">
          <a class="case-index-row" href="#sample-liverpool" role="listitem">
            <span class="case-no">001</span>
            <strong>Liverpool</strong>
            <span class="case-years">1887–2019</span>
            <span class="case-tags">order · accounting · freight</span>
            <span class="case-closure">manufacture → shipment → survival</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-auckland" role="listitem">
            <span class="case-no">002</span>
            <strong>Auckland</strong>
            <span class="case-years">1882–2019</span>
            <span class="case-tags">exchange · samples · Ward</span>
            <span class="case-closure">7-model register + prices</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-florence" role="listitem">
            <span class="case-no">003</span>
            <strong>Florence</strong>
            <span class="case-years">1891–2023</span>
            <span class="case-tags">catalogue · conservation · 3D</span>
            <span class="case-closure">118/111 + item price</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-tufts" role="listitem">
            <span class="case-no">004</span>
            <strong>Tufts</strong>
            <span class="case-years">1885–2025</span>
            <span class="case-tags">custody · false loss · recovery</span>
            <span class="case-closure">purchase → loan → return</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-michigan" role="listitem">
            <span class="case-no">005</span>
            <strong>Michigan</strong>
            <span class="case-years">1890s–2019</span>
            <span class="case-tags">teaching · Harvard gift · fragments</span>
            <span class="case-closure">two acquisition strata</span>
            <i aria-hidden="true">↘</i>
          </a>
        </div>
      </section>
    `);
  }

  const mapFor = {
    'sample-liverpool': `
      <figure class="case-map" aria-label="Diagrammatic map of the documented Liverpool shipment geography">
        <div class="case-map-head"><span>Documentary geography</span><small>Europe</small></div>
        <div class="case-map-frame">
          <svg viewBox="0 0 220 132" role="img" aria-hidden="true">
            <path class="map-land" d="M39 36 C44 29 52 29 57 36 L55 46 60 54 57 65 49 64 44 55 40 49 Z"/>
            <path class="map-land" d="M31 52 C34 47 39 47 41 53 L39 61 34 66 30 61 Z"/>
            <path class="map-land" d="M72 45 C89 33 111 32 127 37 C143 32 166 38 178 51 L175 62 186 72 174 82 165 98 145 105 126 98 116 84 101 79 92 67 78 62 Z"/>
            <path class="map-coast-ghost" d="M89 44 Q102 54 94 69 M126 38 Q125 50 132 59 M158 43 Q153 60 164 72"/>
            <path class="map-route" d="M124 68 Q116 58 108 54 Q80 48 52 58"/>
            <circle class="map-point secondary" cx="124" cy="68" r="2.6"/>
            <circle class="map-point secondary" cx="108" cy="54" r="2.6"/>
            <circle class="map-ring" cx="52" cy="58" r="4.4"/>
            <circle class="map-point" cx="52" cy="58" r="3.2"/>
            <text class="map-label" x="128" y="73">Dresden</text>
            <text class="map-label" x="112" y="50">Hamburg</text>
            <text class="map-label primary" x="18" y="56">Liverpool</text>
            <text class="map-note" x="76" y="91">I.B. 268 · 1887</text>
          </svg>
        </div>
        <figcaption>Documented workshop dispatch through Hamburg to Liverpool.</figcaption>
      </figure>`,

    'sample-auckland': `
      <figure class="case-map" aria-label="Diagrammatic world map of Auckland, Rochester and Dresden documentary relations">
        <div class="case-map-head"><span>Documentary geography</span><small>World</small></div>
        <div class="case-map-frame">
          <svg viewBox="0 0 240 132" role="img" aria-hidden="true">
            <path class="map-land" d="M11 28 L29 19 51 20 70 29 74 42 61 50 55 62 42 64 32 55 18 51 10 39 Z"/>
            <path class="map-land" d="M53 67 L64 72 68 86 63 103 54 116 48 103 49 88 45 77 Z"/>
            <path class="map-land" d="M103 27 L126 20 155 23 176 30 193 29 211 39 207 52 189 57 173 54 160 61 145 55 132 49 117 52 104 43 Z"/>
            <path class="map-land" d="M120 53 L137 58 144 72 137 89 126 101 116 87 114 70 Z"/>
            <path class="map-land" d="M191 85 L207 82 220 90 216 103 202 108 190 101 Z"/>
            <path class="map-land" d="M220 108 L225 111 224 119 218 117 Z"/>
            <path class="map-route relational" d="M137 40 Q93 17 50 42 M50 42 Q136 57 221 113"/>
            <circle class="map-point secondary" cx="137" cy="40" r="2.3"/>
            <circle class="map-point secondary" cx="50" cy="42" r="2.3"/>
            <circle class="map-ring" cx="221" cy="113" r="4.4"/>
            <circle class="map-point" cx="221" cy="113" r="3.1"/>
            <text class="map-label" x="140" y="36">Dresden</text>
            <text class="map-label" x="21" y="38">Rochester</text>
            <text class="map-label primary" x="181" y="124">Auckland</text>
            <text class="map-note" x="89" y="114">documentary relation</text>
          </svg>
        </div>
        <figcaption>Catalogue, dealer and museum relations; the lines do not claim a reconstructed freight route.</figcaption>
      </figure>`,

    'sample-florence': `
      <figure class="case-map" aria-label="Diagrammatic map of Florence within Italy">
        <div class="case-map-head"><span>Documentary geography</span><small>Italy</small></div>
        <div class="case-map-frame">
          <svg viewBox="0 0 220 132" role="img" aria-hidden="true">
            <path class="map-land" d="M89 12 L110 17 121 28 116 39 123 49 132 56 137 69 150 78 157 91 151 98 139 94 130 84 119 79 110 68 102 61 96 50 88 42 79 37 73 27 78 18 Z"/>
            <path class="map-land" d="M143 101 L154 102 160 109 154 117 144 115 139 108 Z"/>
            <path class="map-land" d="M76 96 L84 101 83 112 74 118 68 108 Z"/>
            <path class="map-boundary" d="M80 31 Q100 29 116 36 M94 49 Q106 47 123 54 M108 68 Q122 66 137 74"/>
            <circle class="map-ring" cx="96" cy="48" r="4.6"/>
            <circle class="map-point" cx="96" cy="48" r="3.2"/>
            <text class="map-label primary" x="103" y="45">Florence</text>
            <text class="map-note" x="82" y="70">FST collection</text>
          </svg>
        </div>
        <figcaption>Single institutional focus: Florence and the historical teaching collection now held by FST.</figcaption>
      </figure>`,

    'sample-tufts': `
      <figure class="case-map" aria-label="Diagrammatic northeastern United States map showing Medford and Corning">
        <div class="case-map-head"><span>Documentary geography</span><small>Northeast U.S.</small></div>
        <div class="case-map-frame">
          <svg viewBox="0 0 220 132" role="img" aria-hidden="true">
            <path class="map-land" d="M20 82 C37 66 55 62 70 58 C88 54 100 48 117 45 L136 35 157 31 177 34 194 43 190 53 175 58 168 70 149 73 134 81 111 84 90 88 65 92 42 92 Z"/>
            <path class="map-boundary" d="M53 62 L61 91 M86 55 L91 87 M118 45 L123 81 M151 33 L149 73 M174 36 L168 69"/>
            <path class="map-route" d="M77 68 Q124 52 173 47"/>
            <circle class="map-point secondary" cx="77" cy="68" r="2.7"/>
            <circle class="map-ring" cx="173" cy="47" r="4.5"/>
            <circle class="map-point" cx="173" cy="47" r="3.2"/>
            <text class="map-label" x="47" y="64">Corning</text>
            <text class="map-label primary" x="148" y="42">Medford</text>
            <text class="map-note" x="91" y="47">loan custody</text>
          </svg>
        </div>
        <figcaption>Tufts / Medford and Corning form the documented off-site custody and return axis.</figcaption>
      </figure>`,

    'sample-michigan': `
      <figure class="case-map" aria-label="Diagrammatic eastern United States map showing Ann Arbor and Cambridge">
        <div class="case-map-head"><span>Documentary geography</span><small>Eastern U.S.</small></div>
        <div class="case-map-frame">
          <svg viewBox="0 0 220 132" role="img" aria-hidden="true">
            <path class="map-land" d="M20 30 L47 23 76 25 101 31 122 30 146 24 174 28 195 39 191 53 182 61 178 74 165 80 153 92 133 99 109 101 88 95 68 91 50 81 36 69 26 54 Z"/>
            <path class="map-lake" d="M69 37 C77 31 87 32 91 38 C86 43 76 44 69 41 Z"/>
            <path class="map-lake" d="M92 39 C99 32 109 34 113 40 C108 45 99 46 93 44 Z"/>
            <path class="map-lake" d="M111 39 C117 35 124 37 127 42 C123 46 116 46 112 44 Z"/>
            <path class="map-boundary" d="M52 26 L54 80 M84 27 L86 93 M120 31 L123 98 M154 28 L153 91"/>
            <path class="map-route relational" d="M94 58 Q139 43 183 49"/>
            <circle class="map-ring" cx="94" cy="58" r="4.6"/>
            <circle class="map-point" cx="94" cy="58" r="3.2"/>
            <circle class="map-point open" cx="183" cy="49" r="2.8"/>
            <text class="map-label primary" x="66" y="70">Ann Arbor</text>
            <text class="map-label" x="155" y="45">Cambridge</text>
            <text class="map-note" x="117" y="50">1928 gift</text>
          </svg>
        </div>
        <figcaption>Ann Arbor is the collection focus; Cambridge marks the documented Harvard gift stratum of 1928.</figcaption>
      </figure>`
  };

  Object.entries(mapFor).forEach(([id, markup]) => {
    const sample = document.getElementById(id);
    if (!sample || sample.querySelector('.case-map')) return;
    const side = sample.querySelector('.sample-side');
    if (!side) return;
    const note = side.querySelector('.sample-note');
    if (note) note.insertAdjacentHTML('afterend', markup);
    else side.insertAdjacentHTML('beforeend', markup);
  });

  if (!document.querySelector('#case-index-style')) {
    const caseIndexStyle = document.createElement('style');
    caseIndexStyle.id = 'case-index-style';
    caseIndexStyle.textContent = `
      .case-index {
        padding: 24px 0 118px;
        border-top: 1px solid var(--line);
        scroll-margin-top: 86px;
      }
      .case-index-head {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
        gap: clamp(38px, 8vw, 118px);
        align-items: end;
        padding: 48px 0 42px;
      }
      .case-index-head .eyebrow { margin-bottom: 12px; }
      .case-index-head h2 {
        margin: 0;
        font-size: clamp(2.35rem, 5vw, 4.7rem);
        line-height: .96;
        letter-spacing: -.045em;
        font-weight: 500;
      }
      .case-index-head > p {
        max-width: 520px;
        margin: 0 0 5px;
        color: var(--muted);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .75rem;
        line-height: 1.62;
      }
      .case-index-table { border-top: 2px solid var(--ink); }
      .case-index-row {
        display: grid;
        grid-template-columns: 58px minmax(130px, .85fr) 112px minmax(210px, 1.35fr) minmax(190px, 1.2fr) 24px;
        gap: 20px;
        align-items: center;
        min-height: 88px;
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
        color: inherit;
        text-decoration: none;
        transition: background 180ms ease, padding 180ms ease;
      }
      .case-index-row:hover {
        padding-left: 12px;
        padding-right: 12px;
        background: rgba(255, 255, 255, .025);
      }
      .case-index-row .case-no,
      .case-index-row .case-years,
      .case-index-row .case-tags,
      .case-index-row .case-closure,
      .case-index-row i { font-family: Arial, Helvetica, sans-serif; }
      .case-index-row .case-no {
        color: var(--accent);
        font-size: .66rem;
        font-weight: 700;
        letter-spacing: .08em;
      }
      .case-index-row strong { font-size: 1.24rem; font-weight: 500; }
      .case-index-row .case-years { color: var(--muted); font-size: .7rem; }
      .case-index-row .case-tags { color: #d9cfc6; font-size: .72rem; line-height: 1.45; }
      .case-index-row .case-closure { color: var(--accent); font-size: .67rem; line-height: 1.45; }
      .case-index-row i {
        color: var(--muted);
        font-size: .8rem;
        font-style: normal;
        text-align: right;
        transition: color 180ms ease, transform 180ms ease;
      }
      .case-index-row:hover i { color: var(--accent); transform: translate(2px, 2px); }

      .case-map {
        --map-red: #a94f42;
        width: min(218px, 100%);
        margin: 30px 0 24px;
        padding: 13px 0 11px;
        border-top: 1px solid rgba(243, 238, 231, .08);
        border-bottom: 1px solid rgba(243, 238, 231, .07);
        color: var(--muted);
        font-family: Arial, Helvetica, sans-serif;
      }
      .case-map-head {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 7px;
        font-size: .56rem;
        line-height: 1;
        letter-spacing: .105em;
        text-transform: uppercase;
      }
      .case-map-head span { color: rgba(208, 160, 120, .76); font-weight: 700; }
      .case-map-head small { color: rgba(185, 173, 162, .42); font-size: .48rem; letter-spacing: .09em; }
      .case-map-frame {
        position: relative;
        overflow: hidden;
        min-height: 126px;
        background:
          radial-gradient(circle at 56% 46%, rgba(169, 79, 66, .045), transparent 38%),
          linear-gradient(rgba(243, 238, 231, .016), rgba(243, 238, 231, 0));
      }
      .case-map-frame::before,
      .case-map-frame::after { content: ''; position: absolute; inset: 0; pointer-events: none; }
      .case-map-frame::before {
        background-image:
          linear-gradient(to right, rgba(243, 238, 231, .018) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(243, 238, 231, .014) 1px, transparent 1px);
        background-size: 36px 36px;
        opacity: .48;
      }
      .case-map-frame::after {
        background: linear-gradient(90deg, var(--paper), transparent 13%, transparent 87%, var(--paper));
        opacity: .22;
      }
      .case-map svg { position: relative; z-index: 1; display: block; width: 100%; height: auto; overflow: visible; }
      .case-map .map-land {
        fill: rgba(208, 160, 120, .018);
        stroke: rgba(208, 160, 120, .17);
        stroke-width: 1.05;
        vector-effect: non-scaling-stroke;
      }
      .case-map .map-coast-ghost,
      .case-map .map-boundary,
      .case-map .map-lake {
        fill: none;
        stroke: rgba(208, 160, 120, .085);
        stroke-width: .75;
        vector-effect: non-scaling-stroke;
      }
      .case-map .map-lake { fill: rgba(33, 26, 23, .46); stroke: rgba(208, 160, 120, .12); }
      .case-map .map-route {
        fill: none;
        stroke: rgba(169, 79, 66, .46);
        stroke-width: 1.05;
        vector-effect: non-scaling-stroke;
      }
      .case-map .map-route.relational { stroke: rgba(169, 79, 66, .34); stroke-dasharray: 4 4; }
      .case-map .map-route.open { stroke: rgba(185, 173, 162, .25); stroke-dasharray: 2 5; }
      .case-map .map-point {
        fill: var(--map-red);
        stroke: rgba(243, 238, 231, .6);
        stroke-width: .75;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 4px rgba(169, 79, 66, .28));
      }
      .case-map .map-point.secondary { fill: rgba(169, 79, 66, .62); stroke: rgba(243, 238, 231, .32); }
      .case-map .map-point.open { fill: var(--paper); stroke: rgba(169, 79, 66, .72); filter: none; }
      .case-map .map-ring {
        fill: none;
        stroke: rgba(169, 79, 66, .30);
        stroke-width: .8;
        transform-box: fill-box;
        transform-origin: center;
        animation: case-map-pulse 5.4s ease-out infinite;
      }
      .case-map .map-label,
      .case-map .map-note {
        font-family: Arial, Helvetica, sans-serif;
        paint-order: stroke;
        stroke: rgba(33, 26, 23, .9);
        stroke-width: 2.4px;
        stroke-linejoin: round;
      }
      .case-map .map-label { fill: rgba(243, 238, 231, .72); font-size: 7px; letter-spacing: .02em; }
      .case-map .map-label.primary { fill: rgba(243, 238, 231, .9); font-weight: 700; }
      .case-map .map-note { fill: rgba(185, 173, 162, .46); font-size: 5.4px; letter-spacing: .055em; }
      .case-map figcaption { margin-top: 5px; color: rgba(185, 173, 162, .52); font-size: .53rem; line-height: 1.45; }
      @keyframes case-map-pulse {
        0%, 52%, 100% { opacity: .18; transform: scale(1); }
        67% { opacity: .55; transform: scale(1.65); }
        80% { opacity: 0; transform: scale(2.25); }
      }

      @media (max-width: 900px) {
        .case-index-head { grid-template-columns: 1fr; gap: 20px; }
        .case-index-row { grid-template-columns: 44px minmax(120px, 1fr) 96px minmax(0, 1.45fr) 20px; }
        .case-index-row .case-closure { grid-column: 2 / -1; margin-top: -8px; }
        .sample-side .case-map { flex: 1 1 260px; max-width: 360px; margin: 6px 0 4px auto; }
        .sample-side { flex-wrap: wrap; }
      }
      @media (max-width: 650px) {
        .case-index { padding-bottom: 86px; }
        .case-index-row { grid-template-columns: 40px 1fr 20px; gap: 12px 14px; min-height: 108px; }
        .case-index-row strong { font-size: 1.12rem; }
        .case-index-row .case-years { grid-column: 2; }
        .case-index-row .case-tags { grid-column: 2 / -1; }
        .case-index-row .case-closure { grid-column: 2 / -1; margin-top: 0; }
        .case-index-row i { grid-column: 3; grid-row: 1; }
        .sample-side .case-map { flex-basis: 100%; width: 100%; max-width: none; margin-left: 0; }
        .case-map-frame { min-height: 150px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .case-map .map-ring { animation: none; }
      }
    `;
    document.head.appendChild(caseIndexStyle);
  }

  const hero = document.querySelector('.hero');
  const navLinks = [...document.querySelectorAll('.top-nav a[href^="#"]')];
  const samples = [...document.querySelectorAll('.sample')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sectionTargets = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute('href'));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateNavigation = () => {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    document.documentElement.classList.toggle('nav-scrolled', heroBottom <= 82);

    const marker = 150;
    let active = null;
    sectionTargets.forEach((item) => {
      const rect = item.target.getBoundingClientRect();
      if (rect.top <= marker) active = item;
    });

    navLinks.forEach((link) => link.classList.remove('is-active'));
    if (active && heroBottom < window.innerHeight * 0.8) {
      active.link.classList.add('is-active');
    }
  };

  const updateDocumentaryProgress = () => {
    samples.forEach((sample) => {
      const timeline = sample.querySelector('.timeline');
      const caseMeter = sample.querySelector('.case-meter span');

      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const trigger = window.innerHeight * 0.52;
        const progress = clamp((trigger - rect.top) / Math.max(rect.height, 1), 0, 1);
        timeline.style.setProperty('--timeline-progress', `${(progress * 100).toFixed(2)}%`);
      }

      if (caseMeter) {
        const rect = sample.getBoundingClientRect();
        const distance = Math.max(rect.height - window.innerHeight * 0.55, 1);
        const progress = clamp((window.innerHeight * 0.28 - rect.top) / distance, 0, 1);
        caseMeter.style.setProperty('--case-progress', `${(progress * 100).toFixed(2)}%`);
      }
    });
  };

  let utilityTicking = false;
  const updateUtilities = () => {
    updateNavigation();
    updateDocumentaryProgress();
    utilityTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (utilityTicking) return;
    utilityTicking = true;
    requestAnimationFrame(updateUtilities);
  }, { passive: true });

  window.addEventListener('resize', updateUtilities, { passive: true });
  updateUtilities();

  if (reduced) return;

  document.documentElement.classList.add('motion-ready');

  const revealGroups = [
    ['.section-heading', 0],
    ['.project-lede > p', 80],
    ['.research-chain', 0],
    ['.evidence-key', 0],
    ['.project-item', 35],
    ['.case-index-head', 0],
    ['.case-index-row', 45],
    ['.sample-side', 0],
    ['.case-map', 0],
    ['.sample-main > h2', 0],
    ['.standfirst', 70],
    ['.case-figure', 0],
    ['.event', 45],
    ['.object-register', 0],
    ['.status', 0],
    ['.case-sources', 0],
    ['.source-note', 0],
    ['footer', 0]
  ];

  const items = [];
  revealGroups.forEach(([selector, stagger]) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${index * stagger}ms`);
      items.push(el);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px'
  });

  items.forEach((item) => observer.observe(item));

  requestAnimationFrame(() => {
    document.documentElement.classList.add('hero-in');
  });

  const heroImage = document.querySelector('.hero-image');
  let heroTicking = false;

  const updateHero = () => {
    if (!heroImage) return;
    const y = Math.min(window.scrollY * 0.07, 42);
    heroImage.style.transform = `translate3d(0, ${y}px, 0) scale(1.025)`;
    heroTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (heroTicking) return;
    heroTicking = true;
    requestAnimationFrame(updateHero);
  }, { passive: true });

  updateHero();
})();