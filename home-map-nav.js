(() => {
  const nav = document.querySelector('.top-nav');
  if (nav && !nav.querySelector('a[href="map/"]')) {
    const link = document.createElement('a');
    link.href = 'map/';
    link.textContent = 'Map';
    const cases = nav.querySelector('a[href="cases/"]');
    if (cases) cases.insertAdjacentElement('afterend', link);
    else nav.prepend(link);
  }

  if (!document.querySelector('link[href^="home-journey.css"]')) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'home-journey.css?v=20260810-1';
    document.head.appendChild(style);
  }

  const featured = document.querySelector('.featured');
  if (!featured || document.querySelector('.journey-feature')) return;

  const section = document.createElement('section');
  section.className = 'journey-feature';
  section.id = 'journey-1892';
  section.setAttribute('aria-labelledby', 'journey-feature-title');
  section.innerHTML = `
    <div class="journey-feature-inner">
      <div class="journey-feature-head reveal is-visible">
        <div>
          <p class="eyebrow">Knowledge in motion</p>
          <h2 id="journey-feature-title">A workshop on the move</h2>
        </div>
        <p>Rudolf Blaschka’s 1892 journey makes it possible to follow more than a traveller. Field observation, drawing, microscopy, preservation, seeds, bulbs, correspondence and later workshop production moved through the same itinerary in different ways.</p>
      </div>

      <a class="journey-feature-card reveal is-visible" href="map/rudolf-1892/" aria-label="Open the interactive map of Rudolf Blaschka’s 1892 journey">
        <div class="journey-feature-map" aria-hidden="true">
          <svg viewBox="0 0 760 430" preserveAspectRatio="xMidYMid meet">
            <path class="journey-feature-route-shadow" d="M64 132 C124 96 167 92 213 124 C255 153 272 225 330 253 C389 282 438 245 476 198 C512 153 560 129 613 148 C659 164 691 220 715 272"/>
            <path class="journey-feature-route" d="M64 132 C124 96 167 92 213 124 C255 153 272 225 330 253 C389 282 438 245 476 198 C512 153 560 129 613 148 C659 164 691 220 715 272"/>
            <path class="journey-feature-flow" d="M213 124 C315 57 480 49 613 148"/>
            <path class="journey-feature-flow" d="M476 198 C540 291 635 330 715 272"/>

            <circle class="journey-feature-node" cx="64" cy="132" r="7"/>
            <circle class="journey-feature-node--major" cx="213" cy="124" r="9"/>
            <circle class="journey-feature-node--major" cx="330" cy="253" r="9"/>
            <circle class="journey-feature-node--major" cx="476" cy="198" r="9"/>
            <circle class="journey-feature-node--major" cx="613" cy="148" r="9"/>
            <circle class="journey-feature-node--major" cx="715" cy="272" r="9"/>

            <text class="journey-feature-label" x="44" y="108">Cambridge</text>
            <text class="journey-feature-label journey-feature-label--major" x="185" y="99">Jamaica</text>
            <text class="journey-feature-label journey-feature-label--major" x="302" y="286">Arizona</text>
            <text class="journey-feature-label journey-feature-label--major" x="445" y="176">San Diego</text>
            <text class="journey-feature-label journey-feature-label--major" x="586" y="124">St. Louis</text>
            <text class="journey-feature-label journey-feature-label--major" x="655" y="305">Hosterwitz</text>
          </svg>
          <p class="journey-feature-map-caption">Solid route: movement · dashed routes: material and information flows</p>
        </div>

        <div class="journey-feature-copy">
          <div>
            <p class="journey-feature-kicker">Rudolf Blaschka · 1892</p>
            <h3>Following how plants became knowledge for glass.</h3>
            <p>The interactive map separates bodily travel from the movement of specimens, drawings, seeds, instructions and later supply. Its nodes are working stations rather than stops on a sightseeing itinerary.</p>
            <ol class="journey-chain" aria-label="Knowledge-production chain">
              <li>Observe</li>
              <li>Draw</li>
              <li>Preserve</li>
              <li>Send</li>
              <li>Reassemble</li>
            </ol>
          </div>
          <div class="journey-feature-cta"><span>Explore the 1892 research map</span><span class="journey-feature-arrow" aria-hidden="true">↗</span></div>
        </div>
      </a>
    </div>`;

  featured.insertAdjacentElement('afterend', section);
})();
