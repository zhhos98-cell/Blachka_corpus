(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compact = matchMedia('(max-width:900px)').matches;

  const addStyle = (href, token) => {
    const wanted = new URL(href, location.href).href;
    const existing = [...document.querySelectorAll('link[rel="stylesheet"]')].find(link => link.href.includes(token));
    if (existing) {
      if (existing.href !== wanted) existing.href = wanted;
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = wanted;
    document.head.appendChild(link);
  };
  addStyle('site-polish.css?v=20260810-2', 'site-polish.css');
  addStyle('home-curation-v2.css?v=20260810-4', 'home-curation-v2.css');
  addStyle('origin-divider.css?v=20260810-2', 'origin-divider.css');
  if (!compact) addStyle('home-nav-glide.css?v=20260810-2', 'home-nav-glide.css');
  addStyle('mobile-v3.css?v=20260810-4', 'mobile-v3.css');
  addStyle('accessibility.css?v=20260810-1', 'accessibility.css');
  addStyle('scale-balance.css?v=20260810-3', 'scale-balance.css');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = 'feed.xml';
    document.head.appendChild(rss);
  }
  if (!compact && !document.querySelector('script[src*="nav-glide.js"]')) {
    const script = document.createElement('script');
    script.src = 'nav-glide.js?v=20260810-2';
    script.defer = true;
    document.head.appendChild(script);
  }

  document.querySelectorAll('img[src^="http://"],img[src^="https://"]').forEach(img => { img.referrerPolicy = 'no-referrer'; });

  const hero = document.querySelector('.hero');
  if (hero && !hero.querySelector('.hero-explore')) {
    const explore = document.createElement('a');
    explore.className = 'hero-explore';
    explore.href = '#project';
    explore.innerHTML = '<span>Explore</span><b aria-hidden="true">↓</b>';
    hero.appendChild(explore);
  }

  const form = document.getElementById('network-search');
  const input = document.getElementById('network-search-input');
  const scope = document.getElementById('network-search-scope');
  const status = document.getElementById('network-search-status');

  if (form && input && scope) {
    const placeholders = {
      cases:'e.g. Liverpool, Auckland, Tufts',
      bibliography:'e.g. Daston, 2008, conservation',
      sources:'e.g. HOLLIS, Ward, invoice, Dresden',
      auctions:'e.g. Christie’s, Berlin, catalogue number'
    };
    const routes = { bibliography:'bibliography/', sources:'sources/', auctions:'auctions/', cases:'cases/' };
    const updatePlaceholder = () => {
      input.placeholder = placeholders[scope.value] || placeholders.cases;
      if (status) status.textContent = '';
    };
    scope.addEventListener('change', updatePlaceholder);
    updatePlaceholder();
    form.addEventListener('submit', event => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) {
        if (status) status.textContent = 'Enter a search term.';
        input.focus();
        return;
      }
      location.href = `${routes[scope.value] || routes.cases}?q=${encodeURIComponent(query)}`;
    });
  }

  const people = [
    {key:'karolina',name:'Carolina (Karolina) Riegel Blaschka',short:'Carolina'},
    {key:'leopold',name:'Leopold Blaschka',short:'Leopold'},
    {key:'rudolf',name:'Rudolf Blaschka',short:'Rudolf'}
  ];

  const familyFigure = document.querySelector('.origin-photo');
  const familyStage = familyFigure?.querySelector('.origin-image-stage') || familyFigure;
  const originStory = document.querySelector('.origin-story');
  if (familyFigure && familyStage && originStory && !familyStage.querySelector('.family-portrait-layer')) {
    const layer = document.createElement('div');
    layer.className = 'family-portrait-layer';
    layer.setAttribute('aria-label', 'Blaschka family portrait biographies');
    layer.innerHTML = people.map(person => `
      <span class="family-person family-person--${person.key}" data-person="${person.key}">
        <button type="button" aria-label="Highlight ${person.name}" aria-expanded="false"></button>
      </span>`).join('');
    familyStage.appendChild(layer);

    const cue = document.createElement('p');
    cue.className = 'origin-interaction-cue';
    cue.setAttribute('aria-hidden', 'true');
    cue.innerHTML = '<span>Hover a face</span>';
    familyStage.appendChild(cue);

    const mobileNav = document.createElement('div');
    mobileNav.className = 'family-mobile-nav';
    mobileNav.setAttribute('aria-label', 'Meet the Blaschka family');
    mobileNav.innerHTML = people.map(person => `<button type="button" data-mobile-person="${person.key}" aria-pressed="false">${person.short}</button>`).join('');
    familyFigure.appendChild(mobileNav);

    let locked = '';
    const setActive = key => {
      if (key) originStory.dataset.familyActive = key;
      else delete originStory.dataset.familyActive;
      layer.querySelectorAll('.family-person').forEach(person => {
        const active = person.dataset.person === key;
        person.classList.toggle('is-active', active);
        person.querySelector('button')?.setAttribute('aria-expanded', active ? 'true' : 'false');
      });
      mobileNav.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', button.dataset.mobilePerson === key ? 'true' : 'false'));
    };

    layer.querySelectorAll('.family-person').forEach(person => {
      const key = person.dataset.person;
      const button = person.querySelector('button');
      person.addEventListener('pointerenter', () => setActive(key));
      person.addEventListener('pointerleave', () => setActive(locked));
      button.addEventListener('focus', () => setActive(key));
      button.addEventListener('blur', () => setActive(locked));
      button.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        locked = locked === key ? '' : key;
        setActive(locked || key);
      });
    });

    mobileNav.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        const key = button.dataset.mobilePerson;
        locked = locked === key ? '' : key;
        setActive(locked);
      });
    });

    document.addEventListener('click', event => {
      if (familyFigure.contains(event.target) || originStory.querySelector('.origin-biographies')?.contains(event.target)) return;
      locked = '';
      setActive('');
    });
    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      locked = '';
      setActive('');
    });
  }

  const contactActions = document.querySelector('.contact-actions');
  if (contactActions && !contactActions.querySelector('a[href="about/"]')) {
    const about = document.createElement('a');
    about.href = 'about/';
    about.textContent = 'About & method';
    contactActions.appendChild(about);
  }
  if (contactActions && !contactActions.querySelector('a[href="people/"]')) {
    const biographies = document.createElement('a');
    biographies.href = 'people/';
    biographies.textContent = 'People & roles';
    contactActions.appendChild(biographies);
  }

  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('.home-subscribe')) {
    footer.insertAdjacentHTML('beforebegin', `
      <section class="home-subscribe" id="subscribe" aria-labelledby="subscribe-title"><div class="subscribe-inner"><div class="subscribe-grid"><p class="eyebrow">Updates</p><div class="subscribe-copy"><h2 id="subscribe-title">Follow additions to the public project.</h2><p>New documentary cases, corrected links and substantial bibliography or source updates are published through the project feed. No email address is required.</p><div class="subscribe-actions"><a href="feed.xml" type="application/rss+xml">Follow the RSS feed</a></div><p class="subscribe-note">Email subscriptions are not currently operated.</p></div></div></div></section>`);
  }

  if (footer) {
    const inner = footer.querySelector('.footer-inner');
    if (inner && !inner.querySelector('.footer-copyright')) {
      inner.innerHTML = `<div class="footer-identity"><a class="footer-title" href="#top">The Blaschka Object Network</a><span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span></div><div class="footer-links"><a href="about/">About</a><a href="people/">People</a><a href="cases/">Cases</a><a href="bibliography/">Bibliography</a><a href="sources/">Sources</a><a href="auctions/">Auctions</a><a href="rights/">Image rights</a><a href="privacy/">Privacy</a><a href="accessibility/">Accessibility</a><a class="footer-rss" href="feed.xml" type="application/rss+xml" aria-label="RSS feed"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="19" r="2.2"/><path d="M3 10.5v3a7.5 7.5 0 0 1 7.5 7.5h3A10.5 10.5 0 0 0 3 10.5Zm0-6v3A13.5 13.5 0 0 1 16.5 21h3C19.5 11.9 12.1 4.5 3 4.5Z"/></svg><span>RSS</span></a></div>`;
    }
  }

  if (reduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { threshold:.08, rootMargin:'0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(node => observer.observe(node));
})();