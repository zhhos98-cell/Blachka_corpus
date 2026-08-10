(() => {
  const wall = document.querySelector('.case-wall');
  if (!wall) return;

  const commons = file => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(file)}?width=420`;
  const media = [
    { src:commons('Blaschka Natural History Museum Londres 28072013 2.jpg') },
    { src:'https://collections.museumsvictoria.com.au/specimens/616326/media/1041173/medium' },
    { src:commons('Sea cucumber, model by Leopold and Rudolph Blaschka, glass - Harvard Museum of Comparative Zoology - DSC06169.jpg') },
    { src:'https://collections.museumsvictoria.com.au/specimens/2302555/media/1263220/medium' },
    { src:commons('Blaschka Grant Museum of Zoology Londres 05082013 3 B.jpg') },
    { src:'https://collections.museumsvictoria.com.au/specimens/616311/media/1251149/medium' },
    { src:commons('Museum Histoire Naturelle Geneva Blaschka Aurelia aurita 21102014.jpg') },
    { src:commons('Blaschka Grant Museum of Zoology Londres 05082013 2.jpg') },
    { src:commons('Museum Histoire Naturelle Geneva Blaschka Forskalia contorta 21102014.jpg') },
    { src:commons('Museum Histoire Naturelle Geneva Blaschka Chiroteuthis veranyi 21102014.jpg') }
  ];

  [...wall.querySelectorAll('.case-index-row')].forEach((row, index) => {
    const front = row.querySelector('.case-tile-front');
    if (!front) return;
    front.querySelector('.case-thumb')?.remove();
    const number = front.querySelector('.case-no');
    const thumb = document.createElement('span');
    thumb.className = 'case-thumb case-thumb--image case-thumb--illustrative';
    thumb.setAttribute('aria-hidden', 'true');
    thumb.innerHTML = `<img src="${media[index % media.length].src}" alt="" loading="lazy" decoding="async" fetchpriority="low">`;
    if (number) number.insertAdjacentElement('afterend', thumb);
    else front.prepend(thumb);
  });

  if (!wall.nextElementSibling?.classList.contains('case-wall-note')) {
    const note = document.createElement('p');
    note.className = 'case-wall-note';
    note.innerHTML = 'Illustrative visual index, not case-specific identification. Images are drawn from open museum records and Wikimedia Commons; Museums Victoria photographs by Rodney Start are CC BY 4.0.';
    wall.insertAdjacentElement('afterend', note);
  }
})();