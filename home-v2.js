(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compact = matchMedia('(max-width:900px)').matches;
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const saveData = Boolean(connection?.saveData);
  const slowConnection = ['slow-2g','2g'].includes(connection?.effectiveType || '');
  const bandwidthConstrained = saveData || slowConnection;

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
  const addScript = (src, token) => {
    if ([...document.scripts].some(script => script.src.includes(token))) return;
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    document.head.appendChild(script);
  };
  const afterLoadIdle = (callback, timeout = 3200) => {
    const queue = () => {
      if ('requestIdleCallback' in window) requestIdleCallback(callback, {timeout});
      else setTimeout(callback, 700);
    };
    if (document.readyState === 'complete') queue();
    else addEventListener('load', queue, {once:true});
  };

  addScript('accessibility.js?v=20260810-2', 'accessibility.js');

  if (!document.querySelector('link[type="application/rss+xml"]')) {
    const rss = document.createElement('link');
    rss.rel = 'alternate';
    rss.type = 'application/rss+xml';
    rss.title = 'The Blaschka Object Network';
    rss.href = 'feed.xml';
    document.head.appendChild(rss);
  }

  /* The navigation remains fully usable without the glide effect. Load that small
     decoration only after the page and hero have had first claim on bandwidth. */
  if (!compact && !reduced && !bandwidthConstrained && !document.querySelector('script[src*="nav-glide.js"]')) {
    afterLoadIdle(() => addScript('nav-glide.js?v=20260811-1', 'nav-glide.js'));
  }

  /* Invariant: brand = Home; the same seven primary destinations stay in the same slots. */
  const topNav = document.querySelector('.top-nav');
  if (topNav) {
    topNav.innerHTML = [
      ['Cases','cases/'],['People','people/'],['Bibliography','bibliography/'],
      ['Sources','sources/'],['Auctions','auctions/'],['About','about/']
    ].map(([label,href]) => `<a href="${href}">${label}</a>`).join('');
  }

  document.querySelectorAll('img[src^="http://"],img[src^="https://"]').forEach(img => { img.referrerPolicy = 'no-referrer'; });

  const hero = document.querySelector('.hero');
  const heroImage = hero?.querySelector('.hero-image');
  const heroCredit = hero?.querySelector('.hero-credit');
  const imageWidth = compact ? 1200 : 1800;
  const slides = [
    {
      src:`https://commons.wikimedia.org/wiki/Special:Redirect/file/Sea%20cucumber%2C%20model%20by%20Leopold%20and%20Rudolph%20Blaschka%2C%20glass%20-%20Harvard%20Museum%20of%20Comparative%20Zoology%20-%20DSC06169.jpg?width=${imageWidth}`,
      href:'https://commons.wikimedia.org/wiki/File:Sea_cucumber,_model_by_Leopold_and_Rudolph_Blaschka,_glass_-_Harvard_Museum_of_Comparative_Zoology_-_DSC06169.jpg',
      credit:'Daderot · CC0',
      alt:'Blaschka glass sea cucumber model at Harvard Museum of Comparative Zoology',
      description:'A Blaschka glass sea cucumber stretches horizontally across a dark museum display. Its long translucent, knobbled body curls in broad loops while a pale cluster of branching feeding tentacles rises near the centre.'
    },
    {
      src:`https://commons.wikimedia.org/wiki/Special:Redirect/file/Blaschka%20Glass%20Model%20-%20Natural%20History%20Museum%20London.jpg?width=${imageWidth}`,
      href:'https://commons.wikimedia.org/wiki/File:Blaschka_Glass_Model_-_Natural_History_Museum_London.jpg',
      credit:'Peter Taylor · CC BY 2.0',
      alt:'Blaschka glass radiolarian model at the Natural History Museum, London',
      description:'A close museum photograph of a Blaschka glass radiolarian model. The delicate geometric marine form is isolated against a dark display setting, with its fine glass structure catching the gallery light.'
    },
    {
      src:`https://commons.wikimedia.org/wiki/Special:Redirect/file/Blaschka%20glass%20models%20at%20Nat%20Hist%20Museum%20Pisa%20University.jpg?width=${imageWidth}`,
      href:'https://commons.wikimedia.org/wiki/File:Blaschka_glass_models_at_Nat_Hist_Museum_Pisa_University.jpg',
      credit:'Federigo Federighi · CC BY-SA 4.0',
      alt:'Group of Blaschka glass cnidarian models at the Natural History Museum of Pisa University',
      description:'Several translucent Blaschka glass cnidarian models are displayed together in a museum case at the Natural History Museum of Pisa University. Their pale branching and bell-shaped forms form a horizontal group against the darker exhibition setting.'
    }
  ];

  if (hero && heroImage && heroCredit) {
    hero.classList.add('hero-carousel-ready');
    heroImage.classList.add('hero-image-layer','is-active');
    heroImage.alt = slides[0].alt;
    heroImage.dataset.a11yDescription = slides[0].description;

    const swap = document.createElement('img');
    swap.className = 'hero-image hero-image-layer hero-image-swap';
    swap.alt = '';
    swap.setAttribute('aria-hidden','true');
    swap.decoding = 'async';
    swap.referrerPolicy = 'no-referrer';
    hero.insertBefore(swap, hero.querySelector('.hero-overlay'));

    const controls = document.createElement('div');
    controls.className = 'hero-carousel-controls';
    controls.setAttribute('role','group');
    controls.setAttribute('aria-label','Hero image controls');
    controls.innerHTML = `<div class="hero-carousel-dots">${slides.map((_,i) => `<button type="button" data-hero-slide="${i}" aria-label="Show hero image ${i+1}" aria-pressed="${i===0?'true':'false'}"><span></span></button>`).join('')}</div><button class="hero-carousel-pause" type="button" aria-label="Pause rotating hero images">Pause</button>`;
    hero.appendChild(controls);

    const description = document.createElement('details');
    description.className = 'hero-image-description';
    description.innerHTML = '<summary>Image description</summary><p></p>';
    description.querySelector('p').textContent = slides[0].description;
    hero.appendChild(description);

    const autoRotationDisabled = reduced || bandwidthConstrained;
    const pauseControl = controls.querySelector('.hero-carousel-pause');
    if (autoRotationDisabled && pauseControl) pauseControl.hidden = true;

    let current = 0;
    let active = heroImage;
    let inactive = swap;
    let timer = null;
    let manuallyPaused = false;
    let swapping = false;

    const updateMeta = index => {
      const slide = slides[index];
      heroCredit.href = slide.href;
      heroCredit.textContent = `Hero image: ${slide.credit}`;
      description.querySelector('p').textContent = slide.description;
      controls.querySelectorAll('[data-hero-slide]').forEach((button,i) => button.setAttribute('aria-pressed', String(i === index)));
    };

    const showSlide = async index => {
      if (swapping || index === current) return;
      swapping = true;
      const slide = slides[index];
      inactive.src = slide.src;
      inactive.alt = slide.alt;
      inactive.dataset.a11yDescription = slide.description;
      try { await inactive.decode(); } catch {}
      inactive.removeAttribute('aria-hidden');
      active.setAttribute('aria-hidden','true');
      inactive.classList.add('is-active');
      active.classList.remove('is-active');
      const old = active;
      active = inactive;
      inactive = old;
      current = index;
      updateMeta(index);
      swapping = false;
    };

    const stopTimer = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };
    const startTimer = () => {
      stopTimer();
      if (autoRotationDisabled || manuallyPaused || document.hidden) return;
      timer = setInterval(() => showSlide((current + 1) % slides.length), 10000);
    };

    controls.addEventListener('click', event => {
      const dot = event.target.closest('[data-hero-slide]');
      if (dot) {
        showSlide(Number(dot.dataset.heroSlide));
        startTimer();
        return;
      }
      const pause = event.target.closest('.hero-carousel-pause');
      if (!pause) return;
      manuallyPaused = !manuallyPaused;
      pause.textContent = manuallyPaused ? 'Play' : 'Pause';
      pause.setAttribute('aria-label', manuallyPaused ? 'Resume rotating hero images' : 'Pause rotating hero images');
      startTimer();
    });

    document.addEventListener('visibilitychange', startTimer);
    const preloaded = new Set();
    const preloadSlide = index => {
      if (autoRotationDisabled || index === current || preloaded.has(index)) return;
      preloaded.add(index);
      const img = new Image();
      img.decoding = 'async';
      img.src = slides[index].src;
    };
    const queueNext = () => {
      if (autoRotationDisabled) return;
      const next = (current + 1) % slides.length;
      const preload = () => {
        if ('requestIdleCallback' in window) requestIdleCallback(() => preloadSlide(next), {timeout:5000});
        else setTimeout(() => preloadSlide(next), 1200);
      };
      if (document.readyState === 'complete') preload();
      else addEventListener('load', preload, {once:true});
    };
    hero.addEventListener('transitionend', queueNext, {passive:true});
    queueNext();
    updateMeta(0);
    startTimer();
  }

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
    if (!scope.querySelector('option[value="people"]')) {
      const peopleOption = document.createElement('option');
      peopleOption.value = 'people';
      peopleOption.textContent = 'People';
      const bibliographyOption = scope.querySelector('option[value="bibliography"]');
      scope.insertBefore(peopleOption, bibliographyOption || null);
    }
    const placeholders = {cases:'e.g. Liverpool, Auckland, Tufts',people:'e.g. Ward, Ganong, curator, conservator',bibliography:'e.g. Daston, 2008, conservation',sources:'e.g. HOLLIS, Ward, invoice, Dresden',auctions:'e.g. Christie’s, Berlin, catalogue number'};
    const routes = {bibliography:'bibliography/',people:'people/',sources:'sources/',auctions:'auctions/',cases:'cases/'};
    const updatePlaceholder = () => { input.placeholder = placeholders[scope.value] || placeholders.cases; if (status) status.textContent = ''; };
    scope.addEventListener('change',updatePlaceholder);
    updatePlaceholder();
    form.addEventListener('submit',event => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) { if (status) status.textContent = 'Enter a search term.'; input.focus(); return; }
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
    const familyImage = familyFigure.querySelector('img');
    if (familyImage) familyImage.dataset.a11yDescription = 'A black-and-white garden portrait of three members of the Blaschka workshop household. Karolina sits at the left, Rudolf stands behind at centre-left, and Leopold sits at the right. Interactive gold halos connect each face to a short biography.';
    const layer = document.createElement('div');
    layer.className = 'family-portrait-layer';
    layer.setAttribute('aria-label','Blaschka family portrait biographies');
    layer.innerHTML = people.map(person => `<span class="family-person family-person--${person.key}" data-person="${person.key}"><button type="button" aria-label="Highlight ${person.name}" aria-expanded="false"></button></span>`).join('');
    familyStage.appendChild(layer);
    const cue = document.createElement('p');
    cue.className = 'origin-interaction-cue';
    cue.setAttribute('aria-hidden','true');
    cue.innerHTML = '<span>Hover a face</span>';
    familyStage.appendChild(cue);
    const mobileNav = document.createElement('div');
    mobileNav.className = 'family-mobile-nav';
    mobileNav.setAttribute('aria-label','Meet the Blaschka family');
    mobileNav.innerHTML = people.map(person => `<button type="button" data-mobile-person="${person.key}" aria-pressed="false">${person.short}</button>`).join('');
    familyFigure.appendChild(mobileNav);
    let locked = '';
    const setActive = key => {
      if (key) originStory.dataset.familyActive = key; else delete originStory.dataset.familyActive;
      layer.querySelectorAll('.family-person').forEach(person => {
        const activePerson = person.dataset.person === key;
        person.classList.toggle('is-active',activePerson);
        person.querySelector('button')?.setAttribute('aria-expanded',activePerson ? 'true' : 'false');
      });
      mobileNav.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',button.dataset.mobilePerson === key ? 'true' : 'false'));
    };
    layer.querySelectorAll('.family-person').forEach(person => {
      const key = person.dataset.person;
      const button = person.querySelector('button');
      person.addEventListener('pointerenter',() => setActive(key));
      person.addEventListener('pointerleave',() => setActive(locked));
      button.addEventListener('focus',() => setActive(key));
      button.addEventListener('blur',() => setActive(locked));
      button.addEventListener('click',event => { event.preventDefault(); event.stopPropagation(); locked = locked === key ? '' : key; setActive(locked || key); });
    });
    mobileNav.querySelectorAll('button').forEach(button => button.addEventListener('click',() => { const key = button.dataset.mobilePerson; locked = locked === key ? '' : key; setActive(locked); }));
    document.addEventListener('click',event => { if (familyFigure.contains(event.target) || originStory.querySelector('.origin-biographies')?.contains(event.target)) return; locked=''; setActive(''); });
    document.addEventListener('keydown',event => { if (event.key === 'Escape') { locked=''; setActive(''); } });
  }

  const contactActions = document.querySelector('.contact-actions');
  if (contactActions && !contactActions.querySelector('a[href="about/"]')) {
    const about = document.createElement('a'); about.href='about/'; about.textContent='About & method'; contactActions.appendChild(about);
  }
  if (contactActions && !contactActions.querySelector('a[href="people/"]')) {
    const biographies = document.createElement('a'); biographies.href='people/'; biographies.textContent='People & roles'; contactActions.appendChild(biographies);
  }

  const footer = document.querySelector('footer');
  if (footer && !document.querySelector('.home-subscribe')) {
    footer.insertAdjacentHTML('beforebegin',`<section class="home-subscribe" id="subscribe" aria-labelledby="subscribe-title"><div class="subscribe-inner"><div class="subscribe-grid reveal"><p class="eyebrow">Updates</p><div class="subscribe-copy"><h2 id="subscribe-title">Follow additions to the public project.</h2><p>New documentary cases, corrected links and substantial bibliography or source updates are published through the project feed. No email address is required.</p><div class="subscribe-actions"><a href="feed.xml" type="application/rss+xml">Follow the RSS feed</a></div><p class="subscribe-note">Email subscriptions are not currently operated.</p></div></div></div></section>`);
  }
  if (footer) {
    const inner = footer.querySelector('.footer-inner');
    if (inner) inner.innerHTML = `<div class="footer-identity"><a class="footer-title" href="#top">The Blaschka Object Network</a><span class="footer-copyright">© 2026 Haohao Zhang. Site text and design unless otherwise credited. Source images and third-party materials retain their stated licences.</span></div><div class="footer-links"><a href="mailto:zhhos98@gmail.com?subject=Blaschka%20Object%20Network">Contact</a><a href="rights/">Image rights</a><a href="privacy/">Privacy</a><a href="accessibility/">Accessibility</a><a class="footer-rss" href="feed.xml" type="application/rss+xml" aria-label="RSS feed"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="19" r="2.2"/><path d="M3 10.5v3a7.5 7.5 0 0 1 7.5 7.5h3A10.5 10.5 0 0 0 3 10.5Zm0-6v3A13.5 13.5 0 0 1 16.5 21h3C19.5 11.9 12.1 4.5 3 4.5Z"/></svg><span>RSS</span></a></div>`;
  }

  const revealNodes = document.querySelectorAll('.project-proposition,.origin-layout,.featured-head,.feature-grid,.feature-footer,.contact-grid,.subscribe-grid');
  revealNodes.forEach(node => node.classList.add('reveal'));
  if (reduced || !('IntersectionObserver' in window)) {
    revealNodes.forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },{threshold:.07,rootMargin:'0px 0px -7% 0px'});
  revealNodes.forEach(node => observer.observe(node));
})();