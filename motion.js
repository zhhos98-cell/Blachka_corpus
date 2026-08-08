(() => {
  const topNav = document.querySelector('.top-nav');
  if (topNav) {
    topNav.innerHTML = `
      <a href="#project">Project</a>
      <a href="#cases">Cases</a>
      <a href="bibliography/">Bibliography</a>
      <a href="auctions/">Auctions</a>
      <a href="blog/">Blog</a>
    `;
  }

  const projectLede = document.querySelector('.project-lede');
  if (projectLede && !document.querySelector('.origin-story')) {
    projectLede.insertAdjacentHTML('afterend', `
      <section class="origin-story" aria-labelledby="origin-story-title">
        <p class="origin-kicker">Where the story begins</p>
        <div class="origin-body">
          <h3 id="origin-story-title">From a Bohemian glassworking family to a worldwide scientific trade</h3>
          <div class="origin-columns">
            <p><strong>Leopold Blaschka (1822–1895)</strong> came from a long glassworking family in Bohemia. His first wife, Carolina Zimmerman, and their son Josef Augustine died of cholera in 1850. His father Josef died in 1852. The sequence of losses sits immediately before the episode that later became the best-known origin story of the Blaschka marine models.</p>
            <p>In 1853 Leopold sailed to the United States. During the voyage his ship was becalmed for two weeks, and he studied and drew jellyfish and other marine invertebrates around the vessel. Their translucent bodies presented a material problem that answered unusually well to the substance his family knew best: glass. A decade later, after making botanical models and attracting scientific attention, he began producing marine invertebrates for museum display in Dresden.</p>
            <p><strong>Rudolf Blaschka (1857–1939)</strong> learned glassworking from his father and officially joined the business in 1876. Together they supplied museums and universities with hundreds of catalogue models. From 1890 the workshop turned exclusively to Harvard’s botanical commission, the Glass Flowers. What happened to the earlier zoological models after they left Dresden—their purchase, shipment, use, damage, dispersal, rediscovery, and present custody—is the subject of this project.</p>
          </div>
          <div class="origin-dates" aria-label="Selected Blaschka chronology">
            <span><b>1850</b> wife &amp; son die</span>
            <span><b>1852</b> father dies</span>
            <span><b>1853</b> Atlantic voyage</span>
            <span><b>1863</b> marine models</span>
            <span><b>1876</b> Rudolf joins</span>
            <span><b>1890</b> Harvard exclusive</span>
          </div>
          <p class="origin-source">Biographical chronology checked against <a href="https://hollisarchives.lib.harvard.edu/catalog/ecb00006" target="_blank" rel="noopener">Harvard’s Blaschka archive finding aid ↗</a> and <a href="https://press.cmog.org/2016/blaschka-glass-marine-creatures-exhibition-opens-may-2016" target="_blank" rel="noopener">The Corning Museum of Glass ↗</a>. See the project’s <a href="bibliography/">secondary literature bibliography ↗</a>.</p>
        </div>
      </section>
    `);
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

  const backgroundMapFor = {
    'sample-liverpool': `
      <div class="case-map-bg case-map-bg-europe" aria-hidden="true">
        <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <g class="map-geometry" transform="translate(80 48) scale(4.8)">
            <path class="map-land" d="M39 36 C44 29 52 29 57 36 L55 46 60 54 57 65 49 64 44 55 40 49 Z"/>
            <path class="map-land" d="M31 52 C34 47 39 47 41 53 L39 61 34 66 30 61 Z"/>
            <path class="map-land" d="M72 45 C89 33 111 32 127 37 C143 32 166 38 178 51 L175 62 186 72 174 82 165 98 145 105 126 98 116 84 101 79 92 67 78 62 Z"/>
            <path class="map-boundary" d="M89 44 Q102 54 94 69 M126 38 Q125 50 132 59 M158 43 Q153 60 164 72"/>
            <path class="map-route" d="M124 68 Q116 58 108 54 Q80 48 52 58"/>
            <circle class="map-point secondary" cx="124" cy="68" r="2.1"/>
            <circle class="map-point secondary" cx="108" cy="54" r="2.1"/>
            <circle class="map-ring" cx="52" cy="58" r="3.8"/>
            <circle class="map-point" cx="52" cy="58" r="2.6"/>
            <text class="map-label" x="128" y="73">Dresden</text>
            <text class="map-label" x="112" y="50">Hamburg</text>
            <text class="map-label primary" x="18" y="56">Liverpool</text>
            <text class="map-note" x="76" y="91">I.B. 268 · 1887</text>
          </g>
        </svg>
      </div>`,

    'sample-auckland': `
      <div class="case-map-bg case-map-bg-world" aria-hidden="true">
        <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <g class="map-geometry" transform="translate(18 24) scale(4.8)">
            <path class="map-land" d="M11 28 L29 19 51 20 70 29 74 42 61 50 55 62 42 64 32 55 18 51 10 39 Z"/>
            <path class="map-land" d="M53 67 L64 72 68 86 63 103 54 116 48 103 49 88 45 77 Z"/>
            <path class="map-land" d="M103 27 L126 20 155 23 176 30 193 29 211 39 207 52 189 57 173 54 160 61 145 55 132 49 117 52 104 43 Z"/>
            <path class="map-land" d="M120 53 L137 58 144 72 137 89 126 101 116 87 114 70 Z"/>
            <path class="map-land" d="M191 85 L207 82 220 90 216 103 202 108 190 101 Z"/>
            <path class="map-land" d="M220 108 L225 111 224 119 218 117 Z"/>
            <path class="map-route relational" d="M137 40 Q93 17 50 42 M50 42 Q136 57 221 113"/>
            <circle class="map-point secondary" cx="137" cy="40" r="2.1"/>
            <circle class="map-point secondary" cx="50" cy="42" r="2.1"/>
            <circle class="map-ring" cx="221" cy="113" r="3.8"/>
            <circle class="map-point" cx="221" cy="113" r="2.6"/>
            <text class="map-label" x="140" y="36">Dresden</text>
            <text class="map-label" x="21" y="38">Rochester</text>
            <text class="map-label primary" x="181" y="124">Auckland</text>
            <text class="map-note" x="90" y="114">documentary relation</text>
          </g>
        </svg>
      </div>`,

    'sample-florence': `
      <div class="case-map-bg case-map-bg-italy" aria-hidden="true">
        <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <g class="map-geometry" transform="translate(220 -40) scale(5.9)">
            <path class="map-land" d="M89 12 L110 17 121 28 116 39 123 49 132 56 137 69 150 78 157 91 151 98 139 94 130 84 119 79 110 68 102 61 96 50 88 42 79 37 73 27 78 18 Z"/>
            <path class="map-land" d="M143 101 L154 102 160 109 154 117 144 115 139 108 Z"/>
            <path class="map-land" d="M76 96 L84 101 83 112 74 118 68 108 Z"/>
            <path class="map-boundary" d="M80 31 Q100 29 116 36 M94 49 Q106 47 123 54 M108 68 Q122 66 137 74"/>
            <circle class="map-ring" cx="96" cy="48" r="3.8"/>
            <circle class="map-point" cx="96" cy="48" r="2.6"/>
            <text class="map-label primary" x="103" y="45">Florence</text>
            <text class="map-note" x="82" y="70">FST collection</text>
          </g>
        </svg>
      </div>`,

    'sample-tufts': `
      <div class="case-map-bg case-map-bg-northeast" aria-hidden="true">
        <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <g class="map-geometry" transform="translate(90 70) scale(5.0)">
            <path class="map-land" d="M20 82 C37 66 55 62 70 58 C88 54 100 48 117 45 L136 35 157 31 177 34 194 43 190 53 175 58 168 70 149 73 134 81 111 84 90 88 65 92 42 92 Z"/>
            <path class="map-boundary" d="M53 62 L61 91 M86 55 L91 87 M118 45 L123 81 M151 33 L149 73 M174 36 L168 69"/>
            <path class="map-route" d="M77 68 Q124 52 173 47"/>
            <circle class="map-point secondary" cx="77" cy="68" r="2.1"/>
            <circle class="map-ring" cx="173" cy="47" r="3.8"/>
            <circle class="map-point" cx="173" cy="47" r="2.6"/>
            <text class="map-label" x="47" y="64">Corning</text>
            <text class="map-label primary" x="148" y="42">Medford</text>
            <text class="map-note" x="91" y="47">loan custody</text>
          </g>
        </svg>
      </div>`,

    'sample-michigan': `
      <div class="case-map-bg case-map-bg-michigan" aria-hidden="true">
        <svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
          <g class="map-geometry" transform="translate(92 45) scale(5.0)">
            <path class="map-land" d="M20 30 L47 23 76 25 101 31 122 30 146 24 174 28 195 39 191 53 182 61 178 74 165 80 153 92 133 99 109 101 88 95 68 91 50 81 36 69 26 54 Z"/>
            <path class="map-lake" d="M69 37 C77 31 87 32 91 38 C86 43 76 44 69 41 Z"/>
            <path class="map-lake" d="M92 39 C99 32 109 34 113 40 C108 45 99 46 93 44 Z"/>
            <path class="map-lake" d="M111 39 C117 35 124 37 127 42 C123 46 116 46 112 44 Z"/>
            <path class="map-boundary" d="M52 26 L54 80 M84 27 L86 93 M120 31 L123 98 M154 28 L153 91"/>
            <path class="map-route relational" d="M94 58 Q139 43 183 49"/>
            <circle class="map-ring" cx="94" cy="58" r="3.8"/>
            <circle class="map-point" cx="94" cy="58" r="2.6"/>
            <circle class="map-point open" cx="183" cy="49" r="2.3"/>
            <text class="map-label primary" x="66" y="70">Ann Arbor</text>
            <text class="map-label" x="155" y="45">Cambridge</text>
            <text class="map-note" x="117" y="50">1928 gift</text>
          </g>
        </svg>
      </div>`
  };

  Object.entries(backgroundMapFor).forEach(([id, markup]) => {
    const sample = document.getElementById(id);
    if (!sample) return;
    sample.classList.add('sample-mapped');
    sample.querySelectorAll('.case-map').forEach((oldMap) => oldMap.remove());
    if (!sample.querySelector('.case-map-bg')) sample.insertAdjacentHTML('afterbegin', markup);
  });

  if (!document.querySelector('#case-index-style')) {
    const caseIndexStyle = document.createElement('style');
    caseIndexStyle.id = 'case-index-style';
    caseIndexStyle.textContent = `
      .origin-story {
        display: grid;
        grid-template-columns: 180px minmax(0, 1fr);
        gap: clamp(38px, 8vw, 120px);
        padding: 58px 0 66px;
        border-top: 1px solid var(--ink);
        border-bottom: 1px solid var(--line);
        background: radial-gradient(circle at 76% 46%, rgba(169, 79, 66, .055), transparent 34%);
      }
      .origin-kicker {
        margin: 6px 0 0;
        color: var(--accent);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .68rem;
        font-weight: 700;
        letter-spacing: .14em;
        text-transform: uppercase;
      }
      .origin-body h3 {
        max-width: 880px;
        margin: 0 0 34px;
        font-size: clamp(2rem, 4.2vw, 3.8rem);
        line-height: 1;
        letter-spacing: -.035em;
        font-weight: 500;
      }
      .origin-columns {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: clamp(24px, 4vw, 48px);
      }
      .origin-columns p {
        margin: 0;
        color: #ded4cb;
        font-size: .98rem;
        line-height: 1.62;
      }
      .origin-columns strong { color: var(--ink); font-weight: 600; }
      .origin-dates {
        display: grid;
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 0;
        margin-top: 40px;
        border-top: 1px solid rgba(243, 238, 231, .16);
        border-bottom: 1px solid rgba(243, 238, 231, .10);
        font-family: Arial, Helvetica, sans-serif;
      }
      .origin-dates span {
        min-height: 66px;
        padding: 14px 13px 12px 0;
        color: rgba(217, 207, 198, .72);
        font-size: .61rem;
        line-height: 1.38;
      }
      .origin-dates span + span { padding-left: 13px; border-left: 1px solid rgba(243, 238, 231, .10); }
      .origin-dates b {
        display: block;
        margin-bottom: 3px;
        color: #b44b3d;
        font-size: .66rem;
        letter-spacing: .04em;
      }
      .origin-source {
        max-width: 860px;
        margin: 20px 0 0;
        color: rgba(185, 173, 162, .68);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .62rem;
        line-height: 1.55;
      }
      .origin-source a {
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
        text-decoration-color: rgba(208, 160, 120, .55);
      }

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

      .sample.sample-mapped {
        position: relative;
        isolation: isolate;
        overflow: hidden;
      }
      .sample.sample-mapped > .sample-side,
      .sample.sample-mapped > .sample-main {
        position: relative;
        z-index: 2;
      }
      .case-map-bg {
        --map-red: #a94f42;
        position: absolute;
        inset: 0;
        z-index: 0;
        overflow: hidden;
        pointer-events: none;
        opacity: .92;
        mix-blend-mode: screen;
      }
      .case-map-bg::before {
        content: '';
        position: absolute;
        inset: 0;
        background:
          radial-gradient(circle at 58% 43%, rgba(169, 79, 66, .048), transparent 28%),
          linear-gradient(90deg, rgba(29, 22, 19, .72) 0%, rgba(29, 22, 19, .20) 22%, rgba(29, 22, 19, .05) 55%, rgba(29, 22, 19, .42) 100%);
        z-index: 1;
      }
      .case-map-bg::after {
        content: 'DOCUMENTARY GEOGRAPHY';
        position: absolute;
        right: clamp(34px, 5vw, 90px);
        bottom: 28px;
        z-index: 2;
        color: rgba(208, 160, 120, .22);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .54rem;
        font-weight: 700;
        letter-spacing: .14em;
      }
      .case-map-bg svg {
        position: absolute;
        inset: -1%;
        width: 102%;
        height: 102%;
        overflow: visible;
      }
      .case-map-bg .map-land {
        fill: rgba(208, 160, 120, .012);
        stroke: rgba(208, 160, 120, .105);
        stroke-width: .85;
        vector-effect: non-scaling-stroke;
      }
      .case-map-bg .map-boundary,
      .case-map-bg .map-lake {
        fill: none;
        stroke: rgba(208, 160, 120, .050);
        stroke-width: .6;
        vector-effect: non-scaling-stroke;
      }
      .case-map-bg .map-lake {
        fill: rgba(20, 15, 13, .18);
        stroke: rgba(208, 160, 120, .065);
      }
      .case-map-bg .map-route {
        fill: none;
        stroke: rgba(180, 68, 52, .31);
        stroke-width: 1.05;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 5px rgba(180, 68, 52, .08));
      }
      .case-map-bg .map-route.relational {
        stroke: rgba(180, 68, 52, .23);
        stroke-dasharray: 5 6;
      }
      .case-map-bg .map-point {
        fill: rgba(180, 68, 52, .78);
        stroke: rgba(238, 222, 208, .34);
        stroke-width: .72;
        vector-effect: non-scaling-stroke;
        filter: drop-shadow(0 0 7px rgba(180, 68, 52, .28));
      }
      .case-map-bg .map-point.secondary {
        fill: rgba(180, 68, 52, .50);
        stroke: rgba(238, 222, 208, .20);
      }
      .case-map-bg .map-point.open {
        fill: rgba(29, 22, 19, .62);
        stroke: rgba(180, 68, 52, .65);
        filter: none;
      }
      .case-map-bg .map-ring {
        fill: none;
        stroke: rgba(180, 68, 52, .25);
        stroke-width: .85;
        transform-box: fill-box;
        transform-origin: center;
        animation: case-map-pulse 6.4s ease-out infinite;
      }
      .case-map-bg .map-label,
      .case-map-bg .map-note {
        font-family: Arial, Helvetica, sans-serif;
        paint-order: stroke;
        stroke: rgba(29, 22, 19, .82);
        stroke-width: 2.1px;
        stroke-linejoin: round;
      }
      .case-map-bg .map-label {
        fill: rgba(225, 205, 188, .34);
        font-size: 7px;
        letter-spacing: .025em;
      }
      .case-map-bg .map-label.primary {
        fill: rgba(236, 215, 198, .58);
        font-weight: 700;
      }
      .case-map-bg .map-note {
        fill: rgba(196, 170, 149, .25);
        font-size: 5.4px;
        letter-spacing: .06em;
      }
      #sample-liverpool .case-map-bg svg { transform: translate(7%, 4%) scale(1.06); }
      #sample-auckland .case-map-bg svg { transform: translate(0, 6%) scale(1.03); }
      #sample-florence .case-map-bg svg { transform: translate(8%, 0) scale(1.06); }
      #sample-tufts .case-map-bg svg { transform: translate(3%, 5%) scale(1.04); }
      #sample-michigan .case-map-bg svg { transform: translate(2%, 4%) scale(1.04); }

      @keyframes case-map-pulse {
        0%, 56%, 100% { opacity: .16; transform: scale(1); }
        70% { opacity: .44; transform: scale(1.55); }
        84% { opacity: 0; transform: scale(2.2); }
      }

      @media (max-width: 1000px) {
        .origin-columns { grid-template-columns: 1fr; gap: 20px; }
        .origin-dates { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .origin-dates span:nth-child(4) { border-left: 0; }
      }
      @media (max-width: 900px) {
        .origin-story { grid-template-columns: 1fr; gap: 22px; }
        .case-index-head { grid-template-columns: 1fr; gap: 20px; }
        .case-index-row { grid-template-columns: 44px minmax(120px, 1fr) 96px minmax(0, 1.45fr) 20px; }
        .case-index-row .case-closure { grid-column: 2 / -1; margin-top: -8px; }
        .case-map-bg { opacity: .72; }
        .case-map-bg::before {
          background: linear-gradient(90deg, rgba(29, 22, 19, .68), rgba(29, 22, 19, .22) 42%, rgba(29, 22, 19, .34));
        }
      }
      @media (max-width: 650px) {
        .origin-story { padding: 44px 0 52px; }
        .origin-body h3 { margin-bottom: 26px; }
        .origin-dates { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .origin-dates span:nth-child(odd) { border-left: 0; }
        .origin-dates span:nth-child(even) { border-left: 1px solid rgba(243, 238, 231, .10); }
        .case-index { padding-bottom: 86px; }
        .case-index-row { grid-template-columns: 40px 1fr 20px; gap: 12px 14px; min-height: 108px; }
        .case-index-row strong { font-size: 1.12rem; }
        .case-index-row .case-years { grid-column: 2; }
        .case-index-row .case-tags { grid-column: 2 / -1; }
        .case-index-row .case-closure { grid-column: 2 / -1; margin-top: 0; }
        .case-index-row i { grid-column: 3; grid-row: 1; }
        .case-map-bg { opacity: .50; }
        .case-map-bg::after { display: none; }
        .case-map-bg svg { inset: 0; width: 100%; height: 100%; transform: scale(1.22) !important; }
        .case-map-bg .map-label,
        .case-map-bg .map-note { opacity: .42; }
      }
      @media (prefers-reduced-motion: reduce) {
        .case-map-bg .map-ring { animation: none; }
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
    ['.origin-kicker', 0],
    ['.origin-body > h3', 0],
    ['.origin-columns > p', 75],
    ['.origin-dates', 0],
    ['.origin-source', 0],
    ['.research-chain', 0],
    ['.evidence-key', 0],
    ['.project-item', 35],
    ['.case-index-head', 0],
    ['.case-index-row', 45],
    ['.sample-side', 0],
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