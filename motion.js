(() => {
  const topNav = document.querySelector('.top-nav');
  if (topNav) {
    topNav.innerHTML = `
      <a href="#project">Project</a>
      <a href="#cases">Cases</a>
      <a href="auctions/">Auctions</a>
      <a href="blog/">Blog</a>
    `;
  }

  const firstSample = document.querySelector('.sample');
  if (firstSample && !document.querySelector('#cases')) {
    firstSample.insertAdjacentHTML('beforebegin', `
      <section class="case-index" id="cases" aria-labelledby="case-index-title">
        <div class="case-index-head">
          <div>
            <p class="eyebrow">Case index</p>
            <h2 id="case-index-title">Five documentary lives</h2>
          </div>
          <p>Each case closes a different part of the object chain. The index records place, time span, research emphasis and the strongest currently documented bridge.</p>
        </div>

        <div class="case-index-table" role="list" aria-label="Public case studies">
          <a class="case-index-row" href="#sample-liverpool" role="listitem">
            <span class="case-no">001</span>
            <strong>Liverpool</strong>
            <span class="case-years">1887–2019</span>
            <span class="case-tags">order · accounting · freight</span>
            <span class="case-closure">manufacture → shipment → survival</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-auckland" role="listitem">
            <span class="case-no">002</span>
            <strong>Auckland</strong>
            <span class="case-years">1882–2019</span>
            <span class="case-tags">exchange · samples · Ward</span>
            <span class="case-closure">7-model register + prices</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-florence" role="listitem">
            <span class="case-no">003</span>
            <strong>Florence</strong>
            <span class="case-years">1891–2023</span>
            <span class="case-tags">catalogue · conservation · 3D</span>
            <span class="case-closure">118/111 + item price</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-tufts" role="listitem">
            <span class="case-no">004</span>
            <strong>Tufts</strong>
            <span class="case-years">1885–2025</span>
            <span class="case-tags">custody · false loss · recovery</span>
            <span class="case-closure">purchase → loan → return</span>
            <i aria-hidden="true">↘</i>
          </a>
          <a class="case-index-row" href="#sample-michigan" role="listitem">
            <span class="case-no">005</span>
            <strong>Michigan</strong>
            <span class="case-years">1890s–2019</span>
            <span class="case-tags">teaching · Harvard gift · fragments</span>
            <span class="case-closure">two acquisition strata</span>
            <i aria-hidden="true">↘</i>
          </a>
        </div>
      </section>
    `);
  }

  if (!document.querySelector('#case-index-style')) {
    const caseIndexStyle = document.createElement('style');
    caseIndexStyle.id = 'case-index-style';
    caseIndexStyle.textContent = `
      .case-index {
        padding: 24px 0 118px;
        border-top: 1px solid var(--line);
        scroll-margin-top: 86px;
      }

      .case-index-head {
        display: grid;
        grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
        gap: clamp(38px, 8vw, 118px);
        align-items: end;
        padding: 48px 0 42px;
      }

      .case-index-head .eyebrow {
        margin-bottom: 12px;
      }

      .case-index-head h2 {
        margin: 0;
        font-size: clamp(2.35rem, 5vw, 4.7rem);
        line-height: .96;
        letter-spacing: -.045em;
        font-weight: 500;
      }

      .case-index-head > p {
        max-width: 520px;
        margin: 0 0 5px;
        color: var(--muted);
        font-family: Arial, Helvetica, sans-serif;
        font-size: .75rem;
        line-height: 1.62;
      }

      .case-index-table {
        border-top: 2px solid var(--ink);
      }

      .case-index-row {
        display: grid;
        grid-template-columns: 58px minmax(130px, .85fr) 112px minmax(210px, 1.35fr) minmax(190px, 1.2fr) 24px;
        gap: 20px;
        align-items: center;
        min-height: 88px;
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
        color: inherit;
        text-decoration: none;
        transition: background 180ms ease, padding 180ms ease;
      }

      .case-index-row:hover {
        padding-left: 12px;
        padding-right: 12px;
        background: rgba(255, 255, 255, .025);
      }

      .case-index-row .case-no,
      .case-index-row .case-years,
      .case-index-row .case-tags,
      .case-index-row .case-closure,
      .case-index-row i {
        font-family: Arial, Helvetica, sans-serif;
      }

      .case-index-row .case-no {
        color: var(--accent);
        font-size: .66rem;
        font-weight: 700;
        letter-spacing: .08em;
      }

      .case-index-row strong {
        font-size: 1.24rem;
        font-weight: 500;
      }

      .case-index-row .case-years {
        color: var(--muted);
        font-size: .7rem;
      }

      .case-index-row .case-tags {
        color: #d9cfc6;
        font-size: .72rem;
        line-height: 1.45;
      }

      .case-index-row .case-closure {
        color: var(--accent);
        font-size: .67rem;
        line-height: 1.45;
      }

      .case-index-row i {
        color: var(--muted);
        font-size: .8rem;
        font-style: normal;
        text-align: right;
        transition: color 180ms ease, transform 180ms ease;
      }

      .case-index-row:hover i {
        color: var(--accent);
        transform: translate(2px, 2px);
      }

      @media (max-width: 900px) {
        .case-index-head {
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .case-index-row {
          grid-template-columns: 44px minmax(120px, 1fr) 96px minmax(0, 1.45fr) 20px;
        }

        .case-index-row .case-closure {
          grid-column: 2 / -1;
          margin-top: -8px;
        }
      }

      @media (max-width: 650px) {
        .case-index {
          padding-bottom: 86px;
        }

        .case-index-row {
          grid-template-columns: 40px 1fr 20px;
          gap: 12px 14px;
          min-height: 108px;
        }

        .case-index-row strong {
          font-size: 1.12rem;
        }

        .case-index-row .case-years {
          grid-column: 2;
        }

        .case-index-row .case-tags {
          grid-column: 2 / -1;
        }

        .case-index-row .case-closure {
          grid-column: 2 / -1;
          margin-top: 0;
        }

        .case-index-row i {
          grid-column: 3;
          grid-row: 1;
        }
      }
    `;
    document.head.appendChild(caseIndexStyle);
  }

  const hero = document.querySelector('.hero');
  const navLinks = [...document.querySelectorAll('.top-nav a[href^="#"]')];
  const samples = [...document.querySelectorAll('.sample')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sectionTargets = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute('href'));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const updateNavigation = () => {
    const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    document.documentElement.classList.toggle('nav-scrolled', heroBottom <= 82);

    const marker = 150;
    let active = null;
    sectionTargets.forEach((item) => {
      const rect = item.target.getBoundingClientRect();
      if (rect.top <= marker) active = item;
    });

    navLinks.forEach((link) => link.classList.remove('is-active'));
    if (active && heroBottom < window.innerHeight * 0.8) {
      active.link.classList.add('is-active');
    }
  };

  const updateDocumentaryProgress = () => {
    samples.forEach((sample) => {
      const timeline = sample.querySelector('.timeline');
      const caseMeter = sample.querySelector('.case-meter span');

      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        const trigger = window.innerHeight * 0.52;
        const progress = clamp((trigger - rect.top) / Math.max(rect.height, 1), 0, 1);
        timeline.style.setProperty('--timeline-progress', `${(progress * 100).toFixed(2)}%`);
      }

      if (caseMeter) {
        const rect = sample.getBoundingClientRect();
        const distance = Math.max(rect.height - window.innerHeight * 0.55, 1);
        const progress = clamp((window.innerHeight * 0.28 - rect.top) / distance, 0, 1);
        caseMeter.style.setProperty('--case-progress', `${(progress * 100).toFixed(2)}%`);
      }
    });
  };

  let utilityTicking = false;
  const updateUtilities = () => {
    updateNavigation();
    updateDocumentaryProgress();
    utilityTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (utilityTicking) return;
    utilityTicking = true;
    requestAnimationFrame(updateUtilities);
  }, { passive: true });

  window.addEventListener('resize', updateUtilities, { passive: true });
  updateUtilities();

  if (reduced) return;

  document.documentElement.classList.add('motion-ready');

  const revealGroups = [
    ['.section-heading', 0],
    ['.project-lede > p', 80],
    ['.research-chain', 0],
    ['.evidence-key', 0],
    ['.project-item', 35],
    ['.case-index-head', 0],
    ['.case-index-row', 45],
    ['.sample-side', 0],
    ['.sample-main > h2', 0],
    ['.standfirst', 70],
    ['.case-figure', 0],
    ['.event', 45],
    ['.object-register', 0],
    ['.status', 0],
    ['.case-sources', 0],
    ['.source-note', 0],
    ['footer', 0]
  ];

  const items = [];
  revealGroups.forEach(([selector, stagger]) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', `${index * stagger}ms`);
      items.push(el);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -8% 0px'
  });

  items.forEach((item) => observer.observe(item));

  requestAnimationFrame(() => {
    document.documentElement.classList.add('hero-in');
  });

  const heroImage = document.querySelector('.hero-image');
  let heroTicking = false;

  const updateHero = () => {
    if (!heroImage) return;
    const y = Math.min(window.scrollY * 0.07, 42);
    heroImage.style.transform = `translate3d(0, ${y}px, 0) scale(1.025)`;
    heroTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (heroTicking) return;
    heroTicking = true;
    requestAnimationFrame(updateHero);
  }, { passive: true });

  updateHero();
})();