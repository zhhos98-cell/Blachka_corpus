(() => {
  const maps = {
    'sample-mexico': `
      <div class="case-map-bg map-v3 map-mexico" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(225 92) scale(6.2)">
            <path class="map-land" d="M44 24 L72 18 102 23 125 36 143 53 151 73 143 91 129 102 119 118 107 125 97 113 88 103 78 91 64 81 52 66 39 52 31 38 Z"/>
            <path class="map-boundary" d="M52 31 Q79 38 106 34 M62 61 Q88 65 122 56 M78 88 Q100 89 132 76"/>
            <circle class="map-ring" cx="98" cy="76" r="3.6"/>
            <circle class="map-point" cx="98" cy="76" r="2.25"/>
            <text class="map-label primary" x="105" y="72">Mexico City</text>
            <text class="map-note" x="82" y="97">Museo Nacional → Chopo → successor collections</text>
          </g>
        </svg>
      </div>`,

    'sample-newcastle': `
      <div class="case-map-bg map-v3 map-newcastle" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(395 35) scale(7.1)">
            <path class="map-land" d="M70 12 L83 18 87 31 82 43 86 56 80 70 74 82 76 98 67 113 58 108 54 95 47 87 49 73 42 64 45 49 52 39 55 26 63 19 Z"/>
            <path class="map-land" d="M40 88 L49 91 51 102 45 112 36 108 33 97 Z"/>
            <path class="map-boundary" d="M51 48 Q66 52 82 48 M47 72 Q62 75 78 70 M53 94 Q63 93 72 89"/>
            <circle class="map-ring" cx="69" cy="55" r="3.5"/>
            <circle class="map-point" cx="69" cy="55" r="2.25"/>
            <text class="map-label primary" x="76" y="52">Newcastle</text>
            <text class="map-note" x="76" y="65">survival secure · acquisition open</text>
          </g>
        </svg>
      </div>`,

    'sample-nottingham': `
      <div class="case-map-bg map-v3 map-nottingham" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(150 115) scale(5.75)">
            <path class="map-land" d="M39 36 C44 29 52 29 57 36 L55 46 60 54 57 65 49 64 44 55 40 49 Z"/>
            <path class="map-land" d="M31 52 C34 47 39 47 41 53 L39 61 34 66 30 61 Z"/>
            <path class="map-land" d="M72 45 C89 33 111 32 127 37 C143 32 166 38 178 51 L175 62 186 72 174 82 165 98 145 105 126 98 116 84 101 79 92 67 78 62 Z"/>
            <path class="map-route relational" d="M124 68 Q91 45 55 57"/>
            <circle class="map-point secondary" cx="124" cy="68" r="1.8"/>
            <circle class="map-ring" cx="55" cy="57" r="3.5"/>
            <circle class="map-point" cx="55" cy="57" r="2.25"/>
            <text class="map-label" x="128" y="73">Dresden</text>
            <text class="map-label primary" x="22" y="55">Nottingham</text>
            <text class="map-note" x="72" y="48">Damon / English agency relation</text>
          </g>
        </svg>
      </div>`,

    'sample-vassar': `
      <div class="case-map-bg map-v3 map-vassar" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(120 135) scale(5.8)">
            <path class="map-land" d="M20 82 C37 66 55 62 70 58 C88 54 100 48 117 45 L136 35 157 31 177 34 194 43 190 53 175 58 168 70 149 73 134 81 111 84 90 88 65 92 42 92 Z"/>
            <path class="map-boundary" d="M53 62 L61 91 M86 55 L91 87 M118 45 L123 81 M151 33 L149 73"/>
            <path class="map-route relational" d="M81 69 Q102 57 123 52"/>
            <circle class="map-point secondary" cx="81" cy="69" r="1.8"/>
            <circle class="map-ring" cx="123" cy="52" r="3.5"/>
            <circle class="map-point" cx="123" cy="52" r="2.25"/>
            <text class="map-label" x="51" y="67">Corning</text>
            <text class="map-label primary" x="129" y="49">Poughkeepsie</text>
            <text class="map-note" x="89" y="47">conservation relation</text>
          </g>
        </svg>
      </div>`,

    'sample-milwaukee': `
      <div class="case-map-bg map-v3 map-milwaukee" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g transform="translate(90 105) scale(5.75)">
            <path class="map-land" d="M20 30 L47 23 76 25 101 31 122 30 146 24 174 28 195 39 191 53 182 61 178 74 165 80 153 92 133 99 109 101 88 95 68 91 50 81 36 69 26 54 Z"/>
            <path class="map-lake" d="M69 37 C77 31 87 32 91 38 C86 43 76 44 69 41 Z"/>
            <path class="map-lake" d="M92 39 C99 32 109 34 113 40 C108 45 99 46 93 44 Z"/>
            <path class="map-lake" d="M111 39 C117 35 124 37 127 42 C123 46 116 46 112 44 Z"/>
            <path class="map-route relational" d="M82 58 Q128 49 168 55"/>
            <circle class="map-ring" cx="82" cy="58" r="3.5"/>
            <circle class="map-point" cx="82" cy="58" r="2.25"/>
            <circle class="map-point secondary" cx="168" cy="55" r="1.8"/>
            <text class="map-label primary" x="52" y="70">Milwaukee</text>
            <text class="map-label" x="171" y="51">Rochester</text>
            <text class="map-note" x="108" y="45">Ward supply relation</text>
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
})();