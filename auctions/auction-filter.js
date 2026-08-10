(() => {
  const params = new URLSearchParams(location.search);
  const raw = (params.get('q') || '').trim();
  if (!raw) return;

  const fold = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const q = fold(raw);
  const cases = [...document.querySelectorAll('.auction-case')];
  const scope = document.querySelector('.market-scope');
  const host = document.querySelector('.auction-cases');
  if (!host || !cases.length) return;

  const bar = document.createElement('div');
  bar.className = 'auction-query-bar';
  bar.innerHTML = `<span>Search</span><strong></strong><em></em><a href="./">Clear</a>`;
  bar.querySelector('strong').textContent = `“${raw}”`;
  host.insertAdjacentElement('beforebegin', bar);

  let visibleCases = 0;
  let visibleLots = 0;
  cases.forEach(article => {
    const head = article.querySelector('.auction-case-head');
    const lots = [...article.querySelectorAll('.auction-lot')];
    const headMatch = fold(head?.textContent).includes(q);
    const caseMatch = fold(article.textContent).includes(q);
    if (!caseMatch) {
      article.hidden = true;
      return;
    }
    visibleCases++;
    if (lots.length) {
      let lotMatches = 0;
      lots.forEach(lot => {
        const match = fold(lot.textContent).includes(q);
        lot.hidden = !headMatch && !match;
        if (!lot.hidden) lotMatches++;
      });
      if (!headMatch && lotMatches) visibleLots += lotMatches;
      else {
        lots.forEach(lot => { lot.hidden = false; });
        visibleLots += lots.length;
      }
    }
  });

  if (scope) scope.hidden = true;
  const note = bar.querySelector('em');
  note.textContent = visibleCases ? `${visibleCases} case${visibleCases === 1 ? '' : 's'} · ${visibleLots} lot${visibleLots === 1 ? '' : 's'}` : 'No matching public auction records';
  if (!visibleCases) {
    const empty = document.createElement('p');
    empty.className = 'auction-query-empty';
    empty.textContent = 'No public auction records match this search. The research backend may contain additional leads that are not yet promoted to the public page.';
    host.prepend(empty);
  }
})();