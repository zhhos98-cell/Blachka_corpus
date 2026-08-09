(() => {
  const insertAfter = (selector, anchorSelector, markup) => {
    const root = document.querySelector(selector);
    if (!root) return;
    const anchor = root.querySelector(anchorSelector);
    if (anchor && !root.querySelector('.documentary-graphic')) anchor.insertAdjacentHTML('afterend', markup);
  };

  insertAfter('#sample-mexico .sample-main', '.standfirst', `
    <figure class="documentary-graphic documentary-graphic--split" aria-label="Diagram of the Mexico City Blaschka collection splitting across successor institutions">
      <div class="graphic-head"><span>Documentary graphic</span><small>institutional fission</small></div>
      <div class="split-origin"><b>1895</b><strong>Museo Nacional</strong><span>physical Blaschka display documented</span></div>
      <div class="split-arrow" aria-hidden="true">↓</div>
      <div class="split-mid"><b>1913–29</b><strong>El Chopo / biological reorganisation</strong><span>collections change administrative homes</span></div>
      <div class="split-branches">
        <div><b>UNAM</b><strong>Animales de Cristal Blaschka</strong><span>current collection acknowledged</span></div>
        <i aria-hidden="true">↙</i><i aria-hidden="true">↘</i>
        <div><b>MHNCA</b><strong>Argonauta + Pelagia</strong><span>Chopo-derived exhibition anchors</span></div>
      </div>
      <figcaption>The graphic shows institutional succession, not a complete object-level transfer list. Exact fission of the 1895 collection remains open.</figcaption>
    </figure>`);

  insertAfter('#sample-newcastle .sample-main', '.timeline', `
    <figure class="documentary-graphic documentary-graphic--newcastle" aria-label="Diagram of Newcastle exhibition and technical-study checkpoints">
      <div class="graphic-head"><span>Documentary graphic</span><small>survival / study</small></div>
      <div class="graphic-track">
        <div><b>2008–09</b><span>sea-anemone display</span></div><i>→</i>
        <div><b>2013</b><span>jellyfish X-ray</span></div><i>→</i>
        <div><b>2025</b><span><em>Imitating Life</em></span></div>
      </div>
      <div class="graphic-open-question"><strong>?</strong><span>nineteenth-century purchaser · dealer · count</span></div>
      <figcaption>The modern collection can be followed repeatedly. The acquisition event is still the missing block.</figcaption>
    </figure>`);

  insertAfter('#sample-nottingham .sample-main', '.standfirst', `
    <figure class="documentary-graphic documentary-graphic--nottingham" aria-label="Diagram separating Nottingham account value, agency evidence and surviving object evidence">
      <div class="graphic-head"><span>Documentary graphic</span><small>ledger / agency / object</small></div>
      <div class="triple-evidence">
        <div><b>1887 account</b><strong>356</strong><span>Mark-value candidate<br>not model count</span></div>
        <div><b>agency rule</b><strong>Damon</strong><span>direct English commission restricted</span></div>
        <div><b>survival</b><strong>INV 2000</strong><span>published Nottingham octopus</span></div>
      </div>
      <figcaption>Three evidentiary layers are kept separate until an order/list or accession crosswalk connects them.</figcaption>
    </figure>`);

  insertAfter('#sample-vassar .sample-main', '.timeline', `
    <figure class="documentary-graphic documentary-graphic--vassar" aria-label="Diagram of the Vassar purchase, conservation and rescue sequence">
      <div class="graphic-head"><span>Documentary graphic</span><small>purchase / rescue</small></div>
      <div class="graphic-track">
        <div><b>1887</b><span>college purchase</span></div><i>→</i>
        <div><b>2010</b><span>Koob / Corning repair</span></div><i>→</i>
        <div><b>2013</b><span>Swift Hall rescue</span></div><i>→</i>
        <div><b>2016</b><span>named object</span></div>
      </div>
      <div class="graphic-punch"><strong>229</strong><span>Jelly Fish<br>published by Vassar</span></div>
      <figcaption>No. 229 is preserved as a published object/model number. It is not silently converted into a Vassar accession number.</figcaption>
    </figure>`);

  insertAfter('#sample-milwaukee .sample-main', '.standfirst', `
    <figure class="documentary-graphic documentary-graphic--milwaukee" aria-label="Diagram of Milwaukee's seventy-model Ward purchase and unresolved broader acquisition overlap">
      <div class="graphic-head"><span>Documentary graphic</span><small>quantity / dealer / open overlap</small></div>
      <div class="milwaukee-core"><strong>70</strong><div><b>Blaschka invertebrate models</b><span>MPM purchase · Ward's Natural Science Establishment</span></div></div>
      <div class="milwaukee-open"><b>1883–84</b><strong>$12,000 Ward collection?</strong><span>chronologically adjacent · inclusion of the 70 not yet proven</span></div>
      <div class="graphic-track graphic-track--compact"><div><b>1987</b><span>Jass catalogue study</span></div><i>→</i><div><b>2023–24</b><span><em>Glaucilla briareus</em></span></div><i>→</i><div><b>2027</b><span>museum move</span></div></div>
      <figcaption>The firm quantity is seventy. The $12,000 figure belongs to a broader Ward acquisition unless an invoice or accession record closes the overlap.</figcaption>
    </figure>`);

  const thumbs = {
    'sample-mexico': '1895 → 2 endpoints',
    'sample-newcastle': 'X-ray / 2025',
    'sample-nottingham': '356 ≠ count',
    'sample-vassar': '1887 / 229',
    'sample-milwaukee': '70 / Ward'
  };

  document.querySelectorAll('.case-index-row').forEach((row) => {
    const id = (row.getAttribute('href') || '').replace('#', '');
    if (!thumbs[id] || row.querySelector('.case-thumb')) return;
    const number = row.querySelector('.case-no');
    if (number) number.insertAdjacentHTML('afterend', `<span class="case-thumb case-thumb--text" aria-label="${id.replace('sample-', '')} documentary visual"><small>${thumbs[id]}</small></span>`);
  });

  if (!document.getElementById('visuals-v2-style')) {
    const style = document.createElement('style');
    style.id = 'visuals-v2-style';
    style.textContent = `
      .split-origin,.split-mid { max-width: 520px; margin-inline: auto; padding: 20px 22px; border-top: 1px solid rgba(212,161,116,.34); background: rgba(255,255,255,.016); text-align: center; }
      .split-origin b,.split-mid b,.split-branches b,.triple-evidence b,.milwaukee-open b,.milwaukee-core b,.graphic-open-question span { font-family: Arial,Helvetica,sans-serif; }
      .split-origin b,.split-mid b,.split-branches b,.triple-evidence b,.milwaukee-open b { display:block; color:#b44b3d; font-size:.66rem; letter-spacing:.06em; text-transform:uppercase; }
      .split-origin strong,.split-mid strong,.split-branches strong { display:block; margin:8px 0 5px; color:var(--ink); font-size:1.22rem; font-weight:500; }
      .split-origin span,.split-mid span,.split-branches span,.triple-evidence span,.milwaukee-open span,.milwaukee-core span { color:var(--muted); font-family:Arial,Helvetica,sans-serif; font-size:.64rem; line-height:1.45; }
      .split-arrow { margin:8px 0; color:rgba(180,68,52,.58); text-align:center; }
      .split-branches { display:grid; grid-template-columns:minmax(0,1fr) 24px 24px minmax(0,1fr); gap:10px; align-items:start; margin-top:10px; }
      .split-branches > div { min-height:128px; padding:18px 20px; border:1px solid rgba(245,239,232,.10); background:rgba(255,255,255,.014); }
      .split-branches i { padding-top:24px; color:rgba(180,68,52,.55); font-style:normal; text-align:center; }
      .split-branches div:last-child { grid-column:4; }
      .graphic-open-question { display:flex; align-items:center; gap:20px; margin-top:28px; padding-top:22px; border-top:1px solid rgba(245,239,232,.10); }
      .graphic-open-question strong { color:#b44b3d; font-size:4.2rem; line-height:.8; font-weight:500; }
      .graphic-open-question span { max-width:360px; color:var(--muted); font-size:.64rem; line-height:1.5; text-transform:uppercase; letter-spacing:.07em; }
      .triple-evidence { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1px; background:rgba(245,239,232,.08); }
      .triple-evidence > div { min-height:150px; padding:22px; background:var(--paper); }
      .triple-evidence strong { display:block; margin:18px 0 7px; color:var(--ink); font-size:clamp(1.75rem,4vw,3.1rem); line-height:.9; font-weight:500; }
      .milwaukee-core { display:flex; align-items:flex-end; gap:26px; padding-bottom:25px; border-bottom:1px solid rgba(245,239,232,.10); }
      .milwaukee-core > strong { color:var(--ink); font-size:clamp(4.5rem,10vw,8.5rem); font-weight:500; line-height:.72; }
      .milwaukee-core b { display:block; margin-bottom:7px; color:var(--accent); font-size:.72rem; letter-spacing:.06em; text-transform:uppercase; }
      .milwaukee-open { margin:22px 0 28px; padding:19px 21px; border-left:2px solid rgba(180,68,52,.55); background:rgba(180,68,52,.035); }
      .milwaukee-open strong { display:block; margin:7px 0; color:#ded4cb; font-size:1.25rem; font-weight:500; }
      .graphic-track--compact { grid-template-columns:repeat(5,auto); }
      @media (max-width:760px) {
        .split-branches { grid-template-columns:1fr; }
        .split-branches i { display:none; }
        .split-branches div:last-child { grid-column:auto; }
        .triple-evidence { grid-template-columns:1fr; }
        .milwaukee-core { align-items:center; }
      }
    `;
    document.head.appendChild(style);
  }
})();