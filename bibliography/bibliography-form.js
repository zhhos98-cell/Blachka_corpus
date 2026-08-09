(() => {
  if (document.querySelector('.bib-contribute')) return;

  const main = document.querySelector('.subpage-main');
  if (!main) return;

  const note = main.querySelector('.bib-note');
  const section = document.createElement('section');
  section.className = 'bib-contribute';
  section.id = 'contribute';
  section.setAttribute('aria-labelledby', 'bib-contribute-title');
  section.innerHTML = `
    <div class="bib-contribute-inner">
      <p class="bib-contribute-kicker">Contribute</p>
      <h2 id="bib-contribute-title">Suggest a reference or collection lead</h2>
      <p class="bib-contribute-note">A submission form will be connected here. It will be used for bibliographic references, collection records, accession numbers, archival citations, corrections, and other source-based leads relevant to the project.</p>
      <div class="bib-contribute-actions">
        <button class="bib-contribute-placeholder" type="button" disabled>Submission form coming soon</button>
        <p class="bib-contribute-status">Form provider and data-handling workflow are still being selected.</p>
      </div>
    </div>
  `;

  if (note) note.insertAdjacentElement('afterend', section);
  else main.appendChild(section);
})();
