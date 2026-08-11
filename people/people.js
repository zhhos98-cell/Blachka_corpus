(() => {
  const list = document.getElementById('people-list');
  const input = document.getElementById('people-search');
  const role = document.getElementById('people-role-filter');
  const count = document.getElementById('people-result-count');
  const none = document.getElementById('people-no-results');
  if (!list || !input || !role || !count) return;

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const norm = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  let records = [];
  let groups = {};

  const render = () => {
    list.innerHTML = records.map(person => {
      const project = person.project || [];
      const sources = person.external ? [person.external] : [];
      const links = [...project.map(link => ({...link, external:false})), ...sources.map(link => ({...link, external:true}))].map(link => {
        const attrs = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
        return `<a href="${esc(link.url)}"${attrs}>${esc(link.label)} ↗</a>`;
      }).join(' · ') || '<a href="../sources/">Project sources ↗</a>';
      const open = person.open ? `<p class="person-open"><span>Open:</span> ${esc(person.open)}</p>` : '';
      const dates = person.dates || 'dates under review';
      const search = [person.name, person.sort, person.dates, groups[person.group], person.roles, person.bio, ...(person.aka || [])].join(' ');
      return `<article class="person-record" id="person-${esc(person.slug)}" data-role-group="${esc(person.group)}" data-search="${esc(search)}">
        <div class="person-index"><p class="person-group">${esc(groups[person.group] || person.group)}</p><p class="person-dates">${esc(dates)}</p></div>
        <div class="person-copy"><h2>${esc(person.name)}</h2><p class="person-role">${esc(person.roles || '')}</p><p class="person-bio">${esc(person.bio)}</p>${open}<p class="person-links">${links}</p></div>
      </article>`;
    }).join('');
  };

  const apply = () => {
    const q = norm(input.value);
    const group = role.value;
    const entries = [...list.querySelectorAll('.person-record')];
    let shown = 0;
    for (const entry of entries) {
      const visible = (!q || norm(entry.dataset.search).includes(q)) && (!group || entry.dataset.roleGroup === group);
      entry.hidden = !visible;
      if (visible) shown += 1;
    }
    count.textContent = shown === entries.length ? `${shown} people` : `${shown} of ${entries.length} people`;
    if (none) none.hidden = shown !== 0;
    const next = new URL(location.href);
    const raw = input.value.trim();
    if (raw) next.searchParams.set('q', raw); else next.searchParams.delete('q');
    if (group) next.searchParams.set('role', group); else next.searchParams.delete('role');
    history.replaceState(null, '', next.pathname + next.search + next.hash);
  };

  fetch('people-ui.json?v=20260811-1', { cache:'force-cache' })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(payload => {
      groups = payload.groups || {};
      records = (payload.records || []).sort((a,b) => (a.sort || a.name).localeCompare(b.sort || b.name, 'en', {sensitivity:'base'}));
      render();
      const params = new URLSearchParams(location.search);
      if (params.get('q')) input.value = params.get('q');
      if (params.get('role') && [...role.options].some(option => option.value === params.get('role'))) role.value = params.get('role');
      input.addEventListener('input', apply);
      role.addEventListener('change', apply);
      apply();
      if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({block:'start'}));
    })
    .catch(() => {
      count.textContent = 'People index unavailable';
      list.innerHTML = '<p class="people-no-results">The people data could not be loaded. The machine-readable records remain available in <a href="people-records.json">people-records.json</a>.</p>';
    });
})();
