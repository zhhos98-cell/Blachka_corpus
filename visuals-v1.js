(() => {
  const commons = {
    family: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Rudolf%2C%20Leopold%20and%20Caroline%20Blaschka%20in%20garden%20cropped.jpg?width=1200',
      href: 'https://commons.wikimedia.org/wiki/File:Rudolf,_Leopold_and_Caroline_Blaschka_in_garden_cropped.jpg'
    },
    auckland: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Allsortz%20%28AM%206079%29.jpg?width=1000',
      href: 'https://commons.wikimedia.org/wiki/File:Allsortz_(AM_6079).jpg'
    },
    florence: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Fondazione%20Scienza%20e%20Tecnica%20Firenze%20-%20Sala%20dei%20modelli.jpg?width=1400',
      href: 'https://commons.wikimedia.org/wiki/File:Fondazione_Scienza_e_Tecnica_Firenze_-_Sala_dei_modelli.jpg'
    },
    liverpool: {
      src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Blaschka%20Natural%20History%20Museum%20Londres%2028072013%202.jpg?width=520'
    }
  };

  const originBody = document.querySelector('.origin-body');
  if (originBody && !originBody.querySelector('.origin-photo')) {
    const heading = originBody.querySelector('h3');
    if (heading) {
      heading.insertAdjacentHTML('afterend', `
        <figure class="origin-photo">
          <a href="${commons.family.href}" target="_blank" rel="noopener">
            <img src="${commons.family.src}" alt="Historical photograph of Rudolf, Leopold and Caroline Blaschka standing together in a garden" loading="lazy">
          </a>
          <figcaption>
            <span>Workshop family</span>
            <p>Rudolf, Leopold and Caroline Blaschka in the garden. Unknown photographer; public domain. <a href="${commons.family.href}" target="_blank" rel="noopener">Wikimedia Commons ↗</a></p>
          </figcaption>
        </figure>
      `);
    }
  }

  const auckland = document.querySelector('#sample-auckland .sample-main');
  if (auckland && !auckland.querySelector('.auckland-poster')) {
    const timeline = auckland.querySelector('.timeline');
    if (timeline) {
      timeline.insertAdjacentHTML('afterend', `
        <figure class="case-visual-panel case-visual-panel--portrait auckland-poster">
          <a class="case-visual-image" href="${commons.auckland.href}" target="_blank" rel="noopener">
            <img src="${commons.auckland.src}" alt="Auckland Museum Allsortz exhibition poster featuring a Blaschka glass octopus" loading="lazy">
          </a>
          <figcaption>
            <span>Local exhibition history</span>
            <h3>A Blaschka octopus in Auckland’s own visual record</h3>
            <p><em>Allsortz — An alphabetical collection</em>, Auckland War Memorial Museum, December 1994–February 1995. The poster uses a photograph of a Blaschka glass octopus. Auckland Museum / Daan Hoffmann, CC BY 4.0.</p>
            <p><a href="${commons.auckland.href}" target="_blank" rel="noopener">Open image and metadata ↗</a></p>
          </figcaption>
        </figure>
      `);
    }
  }

  const florence = document.querySelector('#sample-florence .sample-main');
  if (florence && !florence.querySelector('.florence-room')) {
    const standfirst = florence.querySelector('.standfirst');
    if (standfirst) {
      standfirst.insertAdjacentHTML('afterend', `
        <figure class="case-figure florence-room">
          <a href="${commons.florence.href}" target="_blank" rel="noopener">
            <img src="${commons.florence.src}" alt="Sala dei modelli at the Fondazione Scienza e Tecnica in Florence, including the Blaschka marine invertebrate collection" loading="lazy">
          </a>
          <figcaption>
            <span>Collection view</span>
            <p>The Sala dei modelli at the Fondazione Scienza e Tecnica, photographed in 2024. The room includes the museum’s group of roughly one hundred Blaschka marine-invertebrate models. Fondazione Scienza e Tecnica, CC0. <a href="${commons.florence.href}" target="_blank" rel="noopener">Wikimedia Commons ↗</a></p>
          </figcaption>
        </figure>
      `);
    }
  }

  const tufts = document.querySelector('#sample-tufts .sample-main');
  if (tufts && !tufts.querySelector('.documentary-graphic--tufts')) {
    const timeline = tufts.querySelector('.timeline');
    if (timeline) {
      timeline.insertAdjacentHTML('afterend', `
        <figure class="documentary-graphic documentary-graphic--tufts" aria-label="Diagram of the Tufts custody and rediscovery sequence">
          <div class="graphic-head"><span>Documentary graphic</span><small>custody / recovery</small></div>
          <div class="graphic-track">
            <div><b>1885</b><span>Barnum purchase</span></div><i>→</i>
            <div><b>1965</b><span>Corning custody</span></div><i>→</i>
            <div><b>2007</b><span><strong>10</strong> returned</span></div><i>→</i>
            <div><b>2008</b><span>campus rediscovery</span></div>
          </div>
          <div class="graphic-punch"><strong>24</strong><span>published 2022</span><em>→</em><strong>22</strong><span>published 2025</span></div>
          <figcaption>Two public totals remain deliberately unreconciled. The graphic visualises the documented custody sequence; it does not infer loss between 2022 and 2025.</figcaption>
        </figure>
      `);
    }
  }

  const michigan = document.querySelector('#sample-michigan .sample-main');
  if (michigan && !michigan.querySelector('.documentary-graphic--michigan')) {
    const standfirst = michigan.querySelector('.standfirst');
    if (standfirst) {
      standfirst.insertAdjacentHTML('afterend', `
        <figure class="documentary-graphic documentary-graphic--michigan" aria-label="Diagram of the two documented Michigan acquisition strata">
          <div class="graphic-head"><span>Documentary graphic</span><small>two acquisition strata</small></div>
          <div class="strata-grid">
            <div class="stratum"><b>1890s</b><strong>Teaching stock</strong><span>purchaser · vendor · count open</span></div>
            <div class="strata-join" aria-hidden="true">↘</div>
            <div class="stratum"><b>1928</b><strong>Harvard gift</strong><span>formal donor documented</span></div>
            <div class="strata-join" aria-hidden="true">↙</div>
            <div class="stratum stratum-result"><b>2017</b><strong>≈ 78 models</strong><span>many surviving as fragments</span></div>
          </div>
          <figcaption>The 1928 Harvard transfer belongs to one acquisition stratum. It should not be projected backwards onto the earlier 1890s teaching material.</figcaption>
        </figure>
      `);
    }
  }

  const caseThumbs = {
    'sample-liverpool': { type: 'image', src: commons.liverpool.src, label: 'Liverpool' },
    'sample-auckland': { type: 'image', src: commons.auckland.src, label: 'Auckland' },
    'sample-florence': { type: 'image', src: commons.florence.src, label: 'Florence' },
    'sample-tufts': { type: 'text', text: '10 → 24 / 22', label: 'Tufts' },
    'sample-michigan': { type: 'text', text: '1890s + 1928', label: 'Michigan' }
  };

  document.querySelectorAll('.case-index-row').forEach((row) => {
    const id = (row.getAttribute('href') || '').replace('#', '');
    const thumb = caseThumbs[id];
    if (!thumb || row.querySelector('.case-thumb')) return;
    const number = row.querySelector('.case-no');
    const markup = thumb.type === 'image'
      ? `<span class="case-thumb case-thumb--image" aria-label="${thumb.label} visual"><img src="${thumb.src}" alt="" loading="lazy"></span>`
      : `<span class="case-thumb case-thumb--text" aria-label="${thumb.label} documentary visual"><small>${thumb.text}</small></span>`;
    if (number) number.insertAdjacentHTML('afterend', markup);
  });

  if (!document.querySelector('#visual-density-style')) {
    const style = document.createElement('style');
    style.id = 'visual-density-style';
    style.textContent = `
      .origin-photo {
        display: grid;
        grid-template-columns: minmax(230px, .72fr) minmax(0, 1.28fr);
        gap: clamp(26px, 5vw, 58px);
        align-items: end;
        margin: 0 0 42px;
        padding: 0 0 34px;
        border-bottom: 1px solid rgba(245,239,232,.12);
      }
      .origin-photo > a {
        display: block;
        height: clamp(280px, 38vw, 430px);
        overflow: hidden;
        background: #17110f;
      }
      .origin-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 34%; filter: sepia(.08) contrast(1.03); }
      .origin-photo figcaption { max-width: 520px; padding-bottom: 7px; }
      .origin-photo figcaption span,
      .case-visual-panel figcaption > span,
      .graphic-head {
        color: var(--accent);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .64rem;
        font-weight: 700;
        letter-spacing: .11em;
        text-transform: uppercase;
      }
      .origin-photo figcaption p { margin: 10px 0 0; color: #cfc3b9; font-size: .84rem; line-height: 1.6; }
      .origin-photo a,
      .case-visual-panel a { text-decoration-color: rgba(212,161,116,.52); text-underline-offset: 3px; }

      .case-visual-panel {
        display: grid;
        grid-template-columns: minmax(220px, .75fr) minmax(0, 1.25fr);
        gap: clamp(28px, 5vw, 58px);
        align-items: center;
        margin: 62px 0 72px;
        padding: 34px 0;
        border-top: 1px solid rgba(245,239,232,.22);
        border-bottom: 1px solid rgba(245,239,232,.12);
      }
      .case-visual-panel--portrait .case-visual-image { height: clamp(360px, 54vw, 560px); }
      .case-visual-image { display: block; overflow: hidden; background: #17110f; box-shadow: 0 28px 70px rgba(0,0,0,.22); }
      .case-visual-image img { width: 100%; height: 100%; object-fit: cover; }
      .case-visual-panel figcaption h3 { margin: 12px 0 16px; font-size: clamp(1.7rem, 3.4vw, 2.8rem); line-height: 1.03; font-weight: 500; }
      .case-visual-panel figcaption p { max-width: 520px; color: #d5cac1; font-size: .88rem; line-height: 1.62; }

      .florence-room { margin-top: 0; margin-bottom: 76px; }
      .florence-room img { aspect-ratio: 3 / 2; object-fit: cover; }

      .documentary-graphic {
        margin: 64px 0 76px;
        padding: 27px 30px 24px;
        border: 1px solid rgba(245,239,232,.14);
        background:
          radial-gradient(circle at 83% 20%, rgba(169,79,66,.09), transparent 32%),
          rgba(255,255,255,.018);
        box-shadow: inset 0 1px rgba(255,255,255,.02);
      }
      .graphic-head { display: flex; justify-content: space-between; gap: 18px; margin-bottom: 28px; }
      .graphic-head small { color: rgba(185,170,158,.58); font-size: .56rem; font-weight: 400; letter-spacing: .09em; }
      .graphic-track { display: grid; grid-template-columns: repeat(7, auto); align-items: center; gap: 13px; }
      .graphic-track > div { min-width: 0; }
      .graphic-track b,
      .stratum b { display: block; color: #b44b3d; font-family: Arial, Helvetica, sans-serif; font-size: .7rem; letter-spacing: .06em; }
      .graphic-track span { display: block; margin-top: 4px; color: #ded4cb; font-size: .84rem; line-height: 1.35; }
      .graphic-track i { color: rgba(212,161,116,.46); font-style: normal; }
      .graphic-punch { display: flex; align-items: baseline; gap: 11px; margin-top: 32px; padding-top: 26px; border-top: 1px solid rgba(245,239,232,.10); }
      .graphic-punch strong { color: var(--ink); font-size: clamp(2.8rem, 6vw, 5.2rem); font-weight: 500; line-height: .8; }
      .graphic-punch span { max-width: 100px; color: var(--muted); font-family: Arial, Helvetica, sans-serif; font-size: .62rem; line-height: 1.35; }
      .graphic-punch em { margin: 0 6px; color: #b44b3d; font-style: normal; font-size: 1.5rem; }
      .documentary-graphic figcaption { margin-top: 25px; color: rgba(185,170,158,.68); font-family: Arial, Helvetica, sans-serif; font-size: .62rem; line-height: 1.55; }

      .strata-grid { display: grid; grid-template-columns: minmax(0,1fr) 34px minmax(0,1fr); grid-template-rows: auto 34px auto; align-items: center; gap: 14px; }
      .stratum { min-height: 148px; padding: 22px; border-top: 1px solid rgba(212,161,116,.38); background: rgba(255,255,255,.016); }
      .stratum strong { display: block; margin: 18px 0 8px; color: var(--ink); font-size: 1.34rem; font-weight: 500; }
      .stratum span { color: var(--muted); font-family: Arial, Helvetica, sans-serif; font-size: .66rem; line-height: 1.45; }
      .strata-join { color: rgba(180,68,52,.58); font-size: 1.25rem; text-align: center; }
      .strata-grid .strata-join:nth-of-type(2) { grid-column: 2; grid-row: 1; align-self: end; }
      .strata-grid .stratum:nth-of-type(3) { grid-column: 3; grid-row: 1; }
      .strata-grid .strata-join:nth-of-type(4) { grid-column: 2; grid-row: 2; }
      .stratum-result { grid-column: 1 / -1; grid-row: 3; min-height: 118px; text-align: center; border-top-color: rgba(180,68,52,.55); }
      .stratum-result strong { font-size: clamp(2rem, 5vw, 4rem); margin-top: 8px; }

      .case-index-row { grid-template-columns: 48px 74px minmax(118px,.78fr) 98px minmax(190px,1.25fr) minmax(170px,1.05fr) 20px !important; gap: 16px !important; }
      .case-thumb { display: block; width: 74px; height: 50px; overflow: hidden; border: 1px solid rgba(245,239,232,.10); background: rgba(255,255,255,.02); }
      .case-thumb img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.75) contrast(.96) brightness(.83); transition: transform 220ms ease, filter 220ms ease; }
      .case-index-row:hover .case-thumb img { transform: scale(1.055); filter: saturate(.9) contrast(1) brightness(.92); }
      .case-thumb--text { display: grid; place-items: center; padding: 6px; border-color: rgba(180,68,52,.22); background: radial-gradient(circle at 50% 40%, rgba(180,68,52,.12), transparent 62%); }
      .case-thumb--text small { color: rgba(225,205,188,.62); font-family: Arial, Helvetica, sans-serif; font-size: .52rem; line-height: 1.3; text-align: center; letter-spacing: .045em; }

      @media (max-width: 1000px) {
        .case-index-row { grid-template-columns: 44px 66px minmax(110px,.8fr) 86px minmax(0,1.3fr) 20px !important; }
        .case-index-row .case-closure { grid-column: 3 / -1; }
        .case-thumb { width: 66px; height: 46px; }
      }
      @media (max-width: 760px) {
        .origin-photo,
        .case-visual-panel { grid-template-columns: 1fr; }
        .origin-photo > a { height: 360px; }
        .case-visual-panel--portrait .case-visual-image { height: 520px; max-width: 390px; }
        .graphic-track { grid-template-columns: 1fr 18px 1fr; }
        .graphic-track > div:nth-of-type(3) { grid-column: 1; grid-row: 3; }
        .graphic-track > i:nth-of-type(2) { grid-column: 2; grid-row: 3; }
        .graphic-track > div:nth-of-type(4) { grid-column: 3; grid-row: 3; }
        .strata-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
        .strata-grid > * { grid-column: 1 !important; grid-row: auto !important; }
        .strata-join { transform: rotate(45deg); }
      }
      @media (max-width: 650px) {
        .case-thumb { display: none; }
        .case-index-row { grid-template-columns: 40px 1fr 20px !important; gap: 12px 14px !important; }
        .documentary-graphic { padding: 22px 20px; }
        .graphic-punch { flex-wrap: wrap; }
      }
    `;
    document.head.appendChild(style);
  }
})();