(() => {
  const table = document.querySelector('.case-index-table');
  if (!table || table.querySelector('a[href="#sample-mexico"]')) return;

  const title = document.getElementById('case-index-title');
  if (title) title.textContent = 'Ten documentary lives';
  const intro = document.querySelector('.case-index-head > p');
  if (intro) intro.textContent = 'Ten cases now test different parts of the object chain: manufacture, agency, purchase, institutional succession, conservation, rediscovery and present custody.';

  table.insertAdjacentHTML('beforeend', `
    <a class="case-index-row" href="#sample-mexico" role="listitem">
      <span class="case-no">006</span><strong>Mexico City</strong><span class="case-years">1885–present</span><span class="case-tags">national museum · fission · successors</span><span class="case-closure">1895 display → UNAM + MHNCA</span><i aria-hidden="true">↘</i>
    </a>
    <a class="case-index-row" href="#sample-newcastle" role="listitem">
      <span class="case-no">007</span><strong>Newcastle</strong><span class="case-years">1884–2025</span><span class="case-tags">survival · X-ray · exhibition</span><span class="case-closure">modern collection / acquisition open</span><i aria-hidden="true">↘</i>
    </a>
    <a class="case-index-row" href="#sample-nottingham" role="listitem">
      <span class="case-no">008</span><strong>Nottingham</strong><span class="case-years">1887–2026</span><span class="case-tags">Carr · Damon · municipal custody</span><span class="case-closure">ledger + agency + INV 2000</span><i aria-hidden="true">↘</i>
    </a>
    <a class="case-index-row" href="#sample-vassar" role="listitem">
      <span class="case-no">009</span><strong>Vassar</strong><span class="case-years">1887–2018</span><span class="case-tags">purchase · conservation · rescue</span><span class="case-closure">1887 → Koob → Jelly Fish 229</span><i aria-hidden="true">↘</i>
    </a>
    <a class="case-index-row" href="#sample-milwaukee" role="listitem">
      <span class="case-no">010</span><strong>Milwaukee</strong><span class="case-years">1883–2027</span><span class="case-tags">70 models · Ward · catalogue study</span><span class="case-closure">firm quantity / exact invoice open</span><i aria-hidden="true">↘</i>
    </a>
  `);
})();