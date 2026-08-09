(() => {
  const maps = {
    'sample-liverpool': `
      <div class="case-map-bg map-v3 map-europe" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(155 105) scale(5.65)">
            <path class="map-land" d="M39 36 C44 29 52 29 57 36 L55 46 60 54 57 65 49 64 44 55 40 49 Z"/>
            <path class="map-land" d="M31 52 C34 47 39 47 41 53 L39 61 34 66 30 61 Z"/>
            <path class="map-land" d="M72 45 C89 33 111 32 127 37 C143 32 166 38 178 51 L175 62 186 72 174 82 165 98 145 105 126 98 116 84 101 79 92 67 78 62 Z"/>
            <path class="map-boundary" d="M89 44 Q102 54 94 69 M126 38 Q125 50 132 59 M158 43 Q153 60 164 72"/>
            <path class="map-route" d="M124 68 Q116 58 108 54 Q80 48 52 58"/>
            <circle class="map-point secondary" cx="124" cy="68" r="1.8"/>
            <circle class="map-point secondary" cx="108" cy="54" r="1.8"/>
            <circle class="map-ring" cx="52" cy="58" r="3.5"/>
            <circle class="map-point" cx="52" cy="58" r="2.25"/>
            <text class="map-label" x="128" y="73">Dresden</text>
            <text class="map-label" x="112" y="50">Hamburg</text>
            <text class="map-label primary" x="18" y="56">Liverpool</text>
            <text class="map-note" x="75" y="91">I.B. 268 · 1887</text>
          </g>
        </svg>
      </div>`,

    'sample-auckland': `
      <div class="case-map-bg map-v3 map-world" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(65 90) scale(5.55)">
            <path class="map-land" d="M11 28 L29 19 51 20 70 29 74 42 61 50 55 62 42 64 32 55 18 51 10 39 Z"/>
            <path class="map-land" d="M53 67 L64 72 68 86 63 103 54 116 48 103 49 88 45 77 Z"/>
            <path class="map-land" d="M103 27 L126 20 155 23 176 30 193 29 211 39 207 52 189 57 173 54 160 61 145 55 132 49 117 52 104 43 Z"/>
            <path class="map-land" d="M120 53 L137 58 144 72 137 89 126 101 116 87 114 70 Z"/>
            <path class="map-land" d="M191 85 L207 82 220 90 216 103 202 108 190 101 Z"/>
            <path class="map-land" d="M220 108 L225 111 224 119 218 117 Z"/>
            <path class="map-route relational" d="M137 40 Q93 17 50 42 M50 42 Q136 57 221 113"/>
            <circle class="map-point secondary" cx="137" cy="40" r="1.8"/>
            <circle class="map-point secondary" cx="50" cy="42" r="1.8"/>
            <circle class="map-ring" cx="221" cy="113" r="3.5"/>
            <circle class="map-point" cx="221" cy="113" r="2.25"/>
            <text class="map-label" x="140" y="36">Dresden</text>
            <text class="map-label" x="21" y="38">Rochester</text>
            <text class="map-label primary" x="181" y="124">Auckland</text>
            <text class="map-note" x="90" y="114">documentary relation</text>
          </g>
        </svg>
      </div>`,

    'sample-florence': `
      <div class="case-map-bg map-v3 map-italy" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(300 -5) scale(7.15)">
            <path class="map-land" d="M89 12 L110 17 121 28 116 39 123 49 132 56 137 69 150 78 157 91 151 98 139 94 130 84 119 79 110 68 102 61 96 50 88 42 79 37 73 27 78 18 Z"/>
            <path class="map-land" d="M143 101 L154 102 160 109 154 117 144 115 139 108 Z"/>
            <path class="map-land" d="M76 96 L84 101 83 112 74 118 68 108 Z"/>
            <path class="map-boundary" d="M80 31 Q100 29 116 36 M94 49 Q106 47 123 54 M108 68 Q122 66 137 74"/>
            <circle class="map-ring" cx="96" cy="48" r="3.5"/>
            <circle class="map-point" cx="96" cy="48" r="2.25"/>
            <text class="map-label primary" x="103" y="45">Florence</text>
            <text class="map-note" x="82" y="70">FST collection</text>
          </g>
        </svg>
      </div>`,

    'sample-tufts': `
      <div class="case-map-bg map-v3 map-northeast" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(135 135) scale(5.7)">
            <path class="map-land" d="M20 82 C37 66 55 62 70 58 C88 54 100 48 117 45 L136 35 157 31 177 34 194 43 190 53 175 58 168 70 149 73 134 81 111 84 90 88 65 92 42 92 Z"/>
            <path class="map-boundary" d="M53 62 L61 91 M86 55 L91 87 M118 45 L123 81 M151 33 L149 73 M174 36 L168 69"/>
            <path class="map-route" d="M77 68 Q124 52 173 47"/>
            <circle class="map-point secondary" cx="77" cy="68" r="1.8"/>
            <circle class="map-ring" cx="173" cy="47" r="3.5"/>
            <circle class="map-point" cx="173" cy="47" r="2.25"/>
            <text class="map-label" x="47" y="64">Corning</text>
            <text class="map-label primary" x="148" y="42">Medford</text>
            <text class="map-note" x="91" y="47">loan custody</text>
          </g>
        </svg>
      </div>`,

    'sample-michigan': `
      <div class="case-map-bg map-v3 map-michigan" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(135 105) scale(5.75)">
            <path class="map-land" d="M20 30 L47 23 76 25 101 31 122 30 146 24 174 28 195 39 191 53 182 61 178 74 165 80 153 92 133 99 109 101 88 95 68 91 50 81 36 69 26 54 Z"/>
            <path class="map-lake" d="M69 37 C77 31 87 32 91 38 C86 43 76 44 69 41 Z"/>
            <path class="map-lake" d="M92 39 C99 32 109 34 113 40 C108 45 99 46 93 44 Z"/>
            <path class="map-lake" d="M111 39 C117 35 124 37 127 42 C123 46 116 46 112 44 Z"/>
            <path class="map-boundary" d="M52 26 L54 80 M84 27 L86 93 M120 31 L123 98 M154 28 L153 91"/>
            <path class="map-route relational" d="M94 58 Q139 43 183 49"/>
            <circle class="map-ring" cx="94" cy="58" r="3.5"/>
            <circle class="map-point" cx="94" cy="58" r="2.25"/>
            <circle class="map-point open" cx="183" cy="49" r="2.0"/>
            <text class="map-label primary" x="66" y="70">Ann Arbor</text>
            <text class="map-label" x="155" y="45">Cambridge</text>
            <text class="map-note" x="117" y="50">1928 gift</text>
          </g>
        </svg>
      </div>`
  };

  Object.entries(maps).forEach(([id, markup]) => {
    const sample = document.getElementById(id);
    if (!sample) return;
    sample.classList.add('sample-mapped', 'map-v3-host');
    sample.querySelectorAll('.case-map, .case-map-bg').forEach((node) => node.remove());
    sample.insertAdjacentHTML('afterbegin', markup);
  });

  const oldStyle = document.getElementById('map-v3-style');
  if (oldStyle) oldStyle.remove();

  const style = document.createElement('style');
  style.id = 'map-v3-style';
  style.textContent = `
    html, body { overflow-x: clip; }

    .sample.map-v3-host {
      position: relative !important;
      isolation: isolate !important;
      overflow: visible !important;
    }

    .sample.map-v3-host > .sample-side,
    .sample.map-v3-host > .sample-main {
      position: relative;
      z-index: 3;
    }

    .sample.map-v3-host > .case-map-bg.map-v3 {
      position: absolute !important;
      top: 0 !important;
      bottom: 0 !important;
      left: 50% !important;
      right: auto !important;
      width: 100vw !important;
      height: auto !important;
      transform: translateX(-50%) !important;
      z-index: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
      opacity: 1 !important;
      mix-blend-mode: normal !important;
      background:
        radial-gradient(circle at 60% 44%, rgba(142, 58, 45, .055), transparent 34%),
        linear-gradient(90deg, rgba(29, 23, 20, .22), rgba(29, 23, 20, .04) 36%, rgba(29, 23, 20, .02) 70%, rgba(29, 23, 20, .16));
    }

    .sample.map-v3-host > .case-map-bg.map-v3::before,
    .sample.map-v3-host > .case-map-bg.map-v3::after {
      content: none !important;
      display: none !important;
    }

    .case-map-bg.map-v3 svg {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      transform: none !important;
      overflow: visible !important;
      opacity: .82;
    }

    .case-map-bg.map-v3 .map-land {
      fill: rgba(205, 158, 119, .014) !important;
      stroke: rgba(205, 158, 119, .13) !important;
      stroke-width: 1.0 !important;
      vector-effect: non-scaling-stroke;
    }

    .case-map-bg.map-v3 .map-boundary,
    .case-map-bg.map-v3 .map-lake {
      fill: none !important;
      stroke: rgba(205, 158, 119, .070) !important;
      stroke-width: .78 !important;
      vector-effect: non-scaling-stroke;
    }

    .case-map-bg.map-v3 .map-lake {
      fill: rgba(23, 17, 14, .26) !important;
    }

    .case-map-bg.map-v3 .map-route {
      fill: none !important;
      stroke: rgba(178, 63, 49, .34) !important;
      stroke-width: 1.35 !important;
      vector-effect: non-scaling-stroke;
      filter: drop-shadow(0 0 7px rgba(178, 63, 49, .10));
    }

    .case-map-bg.map-v3 .map-route.relational {
      stroke: rgba(178, 63, 49, .27) !important;
      stroke-dasharray: 5 7;
    }

    .case-map-bg.map-v3 .map-point {
      fill: rgba(183, 65, 50, .86) !important;
      stroke: rgba(244, 226, 211, .34) !important;
      stroke-width: .78 !important;
      vector-effect: non-scaling-stroke;
      filter: drop-shadow(0 0 8px rgba(183, 65, 50, .30));
    }

    .case-map-bg.map-v3 .map-point.secondary {
      fill: rgba(183, 65, 50, .58) !important;
      stroke: rgba(244, 226, 211, .18) !important;
    }

    .case-map-bg.map-v3 .map-point.open {
      fill: rgba(29, 23, 20, .75) !important;
      stroke: rgba(183, 65, 50, .76) !important;
      filter: none;
    }

    .case-map-bg.map-v3 .map-ring {
      fill: none !important;
      stroke: rgba(183, 65, 50, .29) !important;
      stroke-width: .9 !important;
      transform-box: fill-box;
      transform-origin: center;
      animation: map-v3-pulse 6.4s ease-out infinite;
    }

    .case-map-bg.map-v3 .map-label,
    .case-map-bg.map-v3 .map-note {
      font-family: Arial, Helvetica, sans-serif;
      paint-order: stroke;
      stroke: rgba(29, 23, 20, .88) !important;
      stroke-width: 2px !important;
      stroke-linejoin: round;
    }

    .case-map-bg.map-v3 .map-label {
      fill: rgba(231, 208, 190, .42) !important;
      font-size: 6.6px !important;
      letter-spacing: .025em;
    }

    .case-map-bg.map-v3 .map-label.primary {
      fill: rgba(239, 217, 198, .67) !important;
      font-weight: 700;
    }

    .case-map-bg.map-v3 .map-note {
      fill: rgba(201, 172, 149, .29) !important;
      font-size: 5.1px !important;
      letter-spacing: .06em;
    }

    @keyframes map-v3-pulse {
      0%, 58%, 100% { opacity: .14; transform: scale(1); }
      71% { opacity: .48; transform: scale(1.6); }
      84% { opacity: 0; transform: scale(2.25); }
    }

    @media (max-width: 900px) {
      .case-map-bg.map-v3 svg { opacity: .64; }
    }

    @media (max-width: 650px) {
      .case-map-bg.map-v3 svg { opacity: .43; }
      .case-map-bg.map-v3 .map-label,
      .case-map-bg.map-v3 .map-note { opacity: .55; }
    }

    @media (prefers-reduced-motion: reduce) {
      .case-map-bg.map-v3 .map-ring { animation: none; }
    }
  `;
  document.head.appendChild(style);
})();