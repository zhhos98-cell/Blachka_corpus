(() => {
  const main = document.querySelector('main');
  const anchor = document.getElementById('sample-michigan');
  if (!main || !anchor || document.getElementById('sample-mexico')) return;

  anchor.insertAdjacentHTML('afterend', `
    <section class="sample sample-alt" id="sample-mexico" aria-labelledby="case-title-mexico">
      <article class="sample-main">
        <h2 id="case-title-mexico">Mexico City: one nineteenth-century collection, two successor endpoints</h2>
        <p class="standfirst">Mexico’s Blaschka history is strongest as a story of institutional fission. An 1885 workshop mailing names the national museum, an 1895 visitor independently confirms a substantial physical Blaschka display, and later natural-history reorganisation leaves identifiable glass animals at both UNAM and the city’s Museo de Historia Natural y Cultura Ambiental.</p>

        <div class="timeline" aria-label="Mexico City case timeline">
          <div class="event" data-event-label="Jul 1885">
            <time datetime="1885-07">Jul 1885</time>
            <p>A Blaschka workshop catalogue-mailing sequence contains an OCR reading normalised here as <strong>“Museo Nacional Mexico”</strong>. This proves contact or solicitation, not a completed order.</p>
          </div>
          <div class="event" data-event-label="1895">
            <time datetime="1895">1895</time>
            <p>Frank Collins Baker described a <strong>“very good collection of glass models, by Blaschka”</strong> in the Museo Nacional, including sea cucumbers, sea anemones and other invertebrates displayed in one case.</p>
          </div>
          <div class="event" data-event-label="1913–29">
            <time datetime="1913">1913–29</time>
            <p>The national natural-history collections moved into the El Chopo museum system. In 1915 they entered the Dirección de Estudios Biológicos; in 1929 historical collections passed into the newly founded Instituto de Biología at UNAM.</p>
          </div>
          <div class="event" data-event-label="1964">
            <time datetime="1964">1964</time>
            <p>The new Chapultepec natural-history museum inherited part of the old Chopo material while other historical collections remained within the UNAM biological-collection system. The Blaschka corpus therefore has to be reconstructed across successor institutions.</p>
          </div>
          <div class="event" data-event-label="2023–26">
            <time datetime="2023">2023–26</time>
            <p>UNAM publicly identifies an <strong>Animales de Cristal Blaschka</strong> collection. The city museum separately names the historical glass <em>Argonauta argo</em> and <em>Pelagia noctiluca</em> among Chopo-derived exhibition objects.</p>
          </div>
        </div>

        <aside class="status" aria-label="Mexico City evidence status">
          <div>
            <h3>What the chain closes</h3>
            <p>Workshop contact by 1885, a substantial physical national-museum display by 1895, the institutional succession through El Chopo and UNAM, and present Blaschka-labelled material at two successor endpoints.</p>
          </div>
          <div>
            <h3>What remains open</h3>
            <p>The exact acquisition date, order route, price and original count; the object-by-object split between UNAM and the 1964 city museum; local identifiers; and a published dating conflict for the two city-museum glass animals.</p>
          </div>
        </aside>

        <div class="case-sources" aria-label="Mexico City source links">
          <div class="source-row">
            <span>2023</span>
            <p><a href="https://www.gaceta.unam.mx/difunde-cortometraje-colecciones-del-instituto-de-biologia/" target="_blank" rel="noopener">Gaceta UNAM, Instituto de Biología collections feature ↗</a></p>
          </div>
          <div class="source-row">
            <span>Current</span>
            <p><a href="https://www.data.sedema.cdmx.gob.mx/museodehistorianatural/index.php/exhibiciones-y-colecciones/colecciones-museo/coleccion-exhibicion" target="_blank" rel="noopener">Museo de Historia Natural y Cultura Ambiental, exhibition collection ↗</a></p>
          </div>
          <div class="source-row">
            <span>History</span>
            <p><a href="https://www.ib.unam.mx/ib/colecciones-biologicas/colecciones-zoologicas/" target="_blank" rel="noopener">Instituto de Biología, UNAM, zoological-collections history ↗</a></p>
          </div>
          <div class="source-row">
            <span>2020</span>
            <p><a href="https://www.revistadelauniversidad.mx/articles/c71f5233-ba2f-4c01-9de1-433221050659/el-retablo-de-las-maravillas" target="_blank" rel="noopener">Antonio Lazcano Araujo, “El retablo de las maravillas” ↗</a></p>
          </div>
        </div>

        <p class="source-note">The 1885 workshop mailing is kept separate from the 1895 physical-display evidence. The later successor institutions are connected at collection-history level; no complete object-level crosswalk has yet been recovered.</p>
      </article>

      <div class="sample-side">
        <p class="eyebrow">Sample 006</p>
        <p class="sample-place">Mexico City · 1885–present</p>
        <p class="sample-note">A national collection split across later institutions, leaving a provenance problem that is administrative as much as physical.</p>
        <div class="case-meter" aria-hidden="true"><span></span></div>
        <p class="case-meter-label">1885 → present</p>
      </div>
    </section>

    <section class="sample" id="sample-newcastle" aria-labelledby="case-title-newcastle">
      <div class="sample-side">
        <p class="eyebrow">Sample 007</p>
        <p class="sample-place">Newcastle · 1884–2025</p>
        <p class="sample-note">A securely surviving collection with repeated exhibition and technical-study checkpoints, but an acquisition history that remains largely blank.</p>
        <div class="case-meter" aria-hidden="true"><span></span></div>
        <p class="case-meter-label">1884 → 2025</p>
      </div>

      <article class="sample-main">
        <h2 id="case-title-newcastle">Newcastle: a visible collection with an invisible purchase history</h2>
        <p class="standfirst">The Great North Museum: Hancock can repeatedly be seen using its Blaschka marine models in exhibitions and technical imaging. The nineteenth-century transaction that brought them to Newcastle, however, has not yet surfaced in the public record.</p>

        <div class="timeline" aria-label="Newcastle case timeline">
          <div class="event" data-event-label="1884">
            <time datetime="1884">1884</time>
            <p>The Natural History Society of Northumbria opened its new natural-history museum in Newcastle. The institution later became the Hancock Museum and, after redevelopment, the Great North Museum: Hancock.</p>
          </div>
          <div class="event" data-event-label="2008–09">
            <time datetime="2008">2008–09</time>
            <p>An NHSN report records the Society’s <strong>glass sea-anemone collection by Leopold and Rudolf Blaschka</strong> on display at the National Glass Centre in Sunderland.</p>
          </div>
          <div class="event" data-event-label="2009">
            <time datetime="2009">2009</time>
            <p>The redeveloped Great North Museum opened, bringing the historic Hancock collections into a new institutional and display framework.</p>
          </div>
          <div class="event" data-event-label="2013">
            <time datetime="2013">2013</time>
            <p>A Newcastle University research exhibition used an <strong>X-ray image of a Blaschka glass jellyfish</strong>, turning a surviving object into evidence for internal construction as well as external form.</p>
          </div>
          <div class="event" data-event-label="2025">
            <time datetime="2025">2025</time>
            <p><em>Imitating Life</em> presented the museum’s collection of Blaschka glass marine-invertebrate models as a dedicated exhibition until 21 September 2025.</p>
          </div>
        </div>

        <aside class="status" aria-label="Newcastle evidence status">
          <div>
            <h3>What the chain closes</h3>
            <p>Institutional continuity from the nineteenth-century museum to the Great North Museum, surviving sea-anemone and jellyfish material, technical imaging in 2013, and a collection-scale exhibition in 2025.</p>
          </div>
          <div>
            <h3>What remains open</h3>
            <p>The purchaser or donor, acquisition date, dealer or intermediary, original count, local object identifiers, and exact current survival/display totals. A secondary report of about fifty refers only to sea anemones and is not treated as the collection total.</p>
          </div>
        </aside>

        <div class="case-sources" aria-label="Newcastle source links">
          <div class="source-row">
            <span>2025</span>
            <p><a href="https://www.northeastmuseums.org.uk/greatnorthmuseum/whats-on/imitating-life" target="_blank" rel="noopener">Great North Museum: Hancock, <em>Imitating Life</em> ↗</a></p>
          </div>
          <div class="source-row">
            <span>2013</span>
            <p><a href="https://blogs.ncl.ac.uk/icamblog/2013/09/" target="_blank" rel="noopener">Newcastle University, International Images for Science exhibition record ↗</a></p>
          </div>
          <div class="source-row">
            <span>2008–09</span>
            <p><a href="https://www.nhsn.org.uk/wp-content/uploads/2025/06/NHSN_Transactions_2008-2009.pdf" target="_blank" rel="noopener">Natural History Society of Northumbria, Transactions / annual report ↗</a></p>
          </div>
          <div class="source-row">
            <span>Current</span>
            <p><a href="https://www.nhsn.org.uk/great-north-museum-hancock-collections/" target="_blank" rel="noopener">NHSN, Great North Museum: Hancock collections history ↗</a></p>
          </div>
        </div>

        <p class="source-note">The modern collection is secure enough to support a public case. Its nineteenth-century acquisition layer is deliberately left open rather than backfilled from nearby British dealer networks.</p>
      </article>
    </section>

    <section class="sample sample-alt" id="sample-nottingham" aria-labelledby="case-title-nottingham">
      <article class="sample-main">
        <h2 id="case-title-nottingham">Nottingham: 356 in the ledger, but not 356 models</h2>
        <p class="standfirst">Two workshop-side records make Nottingham unusually instructive. One records an 1887 “Museum Nottingham” model account with the figure 356. Another shows John Wesley Carr being told that the workshop had promised Damon it would not accept direct English commissions. The surviving museum collection therefore sits inside a dealer-agency structure that the raw ledger alone cannot explain.</p>

        <div class="timeline" aria-label="Nottingham case timeline">
          <div class="event" data-event-label="1886–87">
            <time datetime="1886">1886–87</time>
            <p>In correspondence associated with <strong>John Wesley Carr</strong> of the Nottingham Natural History Museum / University College, the workshop explained that it had promised Damon not to undertake direct commissions for England.</p>
          </div>
          <div class="event" data-event-label="1887">
            <time datetime="1887">1887</time>
            <p>The workshop account contains an OCR reading normalised as <strong>“Museum Nottingham — Modelle — 356”</strong>. The surrounding annual account is denominated in Marks, so 356 is treated as an account-value candidate, not a model count.</p>
          </div>
          <div class="event" data-event-label="1926">
            <time datetime="1926">1926</time>
            <p>Nottingham’s municipal natural-history museum moved into Wollaton Hall. A Blaschka-specific 1926 transfer list has not yet been recovered.</p>
          </div>
          <div class="event" data-event-label="Object anchor">
            <time datetime="2000">Object anchor</time>
            <p>Nottingham Museums publishes a surviving <strong>Blaschka model of an octopus, INV 2000</strong>, with a separate 1890 date layer. That object is evidence of local survival, not yet an object-level bridge to the 1887 account.</p>
          </div>
          <div class="event" data-event-label="2025–26">
            <time datetime="2025">2025–26</time>
            <p>The <em>Endangered Planet</em> gallery material identifies a <strong>selection of Blaschka glass models of sea invertebrates</strong>. Wollaton Hall marks its centenary as Nottingham Natural History Museum in 2026.</p>
          </div>
        </div>

        <aside class="status" aria-label="Nottingham evidence status">
          <div>
            <h3>What the chain closes</h3>
            <p>An 1887 museum account, Carr’s place inside the English Damon agency problem, municipal continuity to Wollaton Hall, at least one published local identifier, and plural recent display evidence.</p>
          </div>
          <div>
            <h3>What remains open</h3>
            <p>What the ledger’s 356 precisely denotes, the original order/list and payment route, the 1926 transfer crosswalk, exact survival count, and the object-level relation between INV 2000 and the 1887 transaction.</p>
          </div>
        </aside>

        <div class="case-sources" aria-label="Nottingham source links">
          <div class="source-row">
            <span>1887</span>
            <p><strong>Workshop records.</strong> Rakow notebook OCR preserves the “Museum Nottingham” account and Carr/Damon agency correspondence. Image-level verification remains a priority before quoting the original handwriting publicly.</p>
          </div>
          <div class="source-row">
            <span>Object</span>
            <p><a href="https://nottinghammuseums.org.uk/blaschka-model-of-an-octopus/" target="_blank" rel="noopener">Nottingham Museums, “Blaschka model of an octopus,” INV 2000 ↗</a></p>
          </div>
          <div class="source-row">
            <span>2025</span>
            <p><a href="https://nottinghammuseums.org.uk/wp-content/uploads/2025/03/Endangered-Planet-2.pdf" target="_blank" rel="noopener">Nottingham Museums, <em>Endangered Planet</em> resource ↗</a></p>
          </div>
          <div class="source-row">
            <span>Current</span>
            <p><a href="https://wollatonhall.org.uk/hall-and-museum/natural-history-museum/" target="_blank" rel="noopener">Wollaton Hall, Natural History Museum ↗</a></p>
          </div>
        </div>

        <p class="source-note">The case keeps three layers separate: a workshop financial/accounting trace, an agency restriction in correspondence, and modern surviving objects. None is silently substituted for the others.</p>
      </article>

      <div class="sample-side">
        <p class="eyebrow">Sample 008</p>
        <p class="sample-place">Nottingham · 1887–2026</p>
        <p class="sample-note">A British dealer-agency case in which a single ledger number is useful precisely because it cannot be read as a simple object count.</p>
        <div class="case-meter" aria-hidden="true"><span></span></div>
        <p class="case-meter-label">1887 → 2026</p>
      </div>
    </section>

    <section class="sample" id="sample-vassar" aria-labelledby="case-title-vassar">
      <div class="sample-side">
        <p class="eyebrow">Sample 009</p>
        <p class="sample-place">Vassar · 1887–2018</p>
        <p class="sample-note">A college teaching purchase that survived departmental drift, conservation intervention and a twenty-first-century rescue from renovation.</p>
        <div class="case-meter" aria-hidden="true"><span></span></div>
        <p class="case-meter-label">1887 → 2018</p>
      </div>

      <article class="sample-main">
        <h2 id="case-title-vassar">Vassar: an 1887 teaching purchase rescued from institutional drift</h2>
        <p class="standfirst">Vassar’s public record gives a rare firm acquisition year without yet giving the invoice. The models were purchased in 1887, survived into the Biology Department, entered a Corning-linked conservation programme, and later reappeared during campus artefact rescue and exhibition work.</p>

        <div class="timeline" aria-label="Vassar case timeline">
          <div class="event" data-event-label="1887">
            <time datetime="1887">1887</time>
            <p>Vassar institutional sources state that Blaschka invertebrate models were <strong>purchased for the college in 1887</strong> as part of its natural-history collection. The seller, price and exact original count remain open.</p>
          </div>
          <div class="event" data-event-label="2010">
            <time datetime="2010">2010</time>
            <p>A Vassar museum newsletter located the models in the Biology Department and described an arrangement with <strong>Stephen Koob of the Corning Museum of Glass</strong> to repair and restore them.</p>
          </div>
          <div class="event" data-event-label="2013">
            <time datetime="2013">2013</time>
            <p>The Vassar College Artifacts Project recovered glass replicas of jellyfish and other organisms by the Blaschkas during renovation of <strong>Swift Hall</strong>.</p>
          </div>
          <div class="event" data-event-label="2016">
            <time datetime="2016">2016</time>
            <p><em>Art at Vassar</em> illustrated <strong>Jelly Fish no. 229</strong>, glass on a metal mount, and explicitly labelled it “Purchased for Vassar College, 1887.” The number is treated as a likely commercial/model number, not a verified Vassar accession.</p>
          </div>
          <div class="event" data-event-label="2018">
            <time datetime="2018">2018</time>
            <p>Vassar again described a plural <strong>collection of invertebrates created by the Blaschkas</strong>. An exact current collection total was not supplied.</p>
          </div>
        </div>

        <aside class="status" aria-label="Vassar evidence status">
          <div>
            <h3>What the chain closes</h3>
            <p>A firm 1887 purchase year, twenty-first-century physical survival, Corning conservation involvement, a documented campus rescue, and a named illustrated object tied back to the 1887 purchase.</p>
          </div>
          <div>
            <h3>What remains open</h3>
            <p>The 1887 seller/intermediary, invoice, price and original count; local accession numbers; the exact conservation register; present storage/display totals; and the extent to which no. 229 can be cross-walked to Vassar’s internal records.</p>
          </div>
        </aside>

        <div class="case-sources" aria-label="Vassar source links">
          <div class="source-row">
            <span>2010</span>
            <p><a href="https://www.vassar.edu/sites/default/files/2023-03/TerraFirma2010.pdf" target="_blank" rel="noopener">Vassar, <em>Terra Firma</em>, Spring 2010 ↗</a></p>
          </div>
          <div class="source-row">
            <span>2016</span>
            <p><a href="https://www.vassar.edu/sites/default/files/2021-07/FLLAC-Art-at-Vassar-2016-Spring.pdf" target="_blank" rel="noopener">Vassar, <em>Art at Vassar</em>, Spring/Summer 2016 ↗</a></p>
          </div>
          <div class="source-row">
            <span>2013</span>
            <p><a href="https://miscellanynews.org/2013/03/27/features/artifacts-catalogue-milestones-in-vassars-rich-history/" target="_blank" rel="noopener">The Miscellany News, Vassar College Artifacts Project ↗</a></p>
          </div>
          <div class="source-row">
            <span>Archive</span>
            <p><a href="https://digitallibrary.vassar.edu/sites/default/files/2025-01/Guide%20to%20the%20Vassar%20College%20Archives%20Files%2C%20circa%201855-1969%20%28bulk%201860-1914%29.pdf" target="_blank" rel="noopener">Vassar Archives finding aid: Natural History reports, 1887–1891 ↗</a></p>
          </div>
        </div>

        <p class="source-note">The next decisive evidence is already localised archivally: the 1887–1891 Natural History Department reports and cabinet records. Ward is retained as historical context, not assigned as the 1887 supplier without documentation.</p>
      </article>
    </section>

    <section class="sample sample-alt" id="sample-milwaukee" aria-labelledby="case-title-milwaukee">
      <article class="sample-main">
        <h2 id="case-title-milwaukee">Milwaukee: seventy models, one Ward route, one unresolved overlap</h2>
        <p class="standfirst">Milwaukee Public Museum supplies an unusually firm historical quantity: the museum says it purchased seventy Blaschka invertebrate glass models offered through Ward’s Natural Science Establishment. What remains uncertain is whether those seventy were part of a much larger Ward natural-history acquisition funded in 1883–84.</p>

        <div class="timeline" aria-label="Milwaukee case timeline">
          <div class="event" data-event-label="1883–84">
            <time datetime="1883">1883–84</time>
            <p>A large Ward natural-history collection was acquired for Milwaukee through public subscription for a reported <strong>$12,000</strong> and displayed as the new museum opened in 1884. The project does <strong>not</strong> yet treat the seventy Blaschka models as proven components of that purchase.</p>
          </div>
          <div class="event" data-event-label="Historical purchase">
            <time datetime="1884">Historical purchase</time>
            <p>Milwaukee Public Museum explicitly states that it <strong>purchased 70 invertebrate glass models</strong> offered for sale through Ward’s Natural Science Establishment.</p>
          </div>
          <div class="event" data-event-label="1987">
            <time datetime="1987">1987</time>
            <p>Joan P. Jass published an MPM-specific study comparing the museum’s Blaschka models with Ward’s 1888 catalogue. The full concordance has not yet been recovered into this project.</p>
          </div>
          <div class="event" data-event-label="2023–24">
            <time datetime="2023">2023–24</time>
            <p>MPM’s annual reporting provides a recent object/media anchor, <strong><em>Glaucilla briareus</em></strong>, described as a Blaschka glass sea slug. A candidate relation to Blaschka catalogue no. 446 remains an external crosswalk, not a local identification.</p>
          </div>
          <div class="event" data-event-label="2027">
            <time datetime="2027">2027</time>
            <p>The collection is moving toward the future Nature &amp; Culture Museum of Wisconsin. A future Blaschka display has not yet been publicly confirmed, so the 2027 endpoint remains a custody transition rather than a display claim.</p>
          </div>
        </div>

        <aside class="status" aria-label="Milwaukee evidence status">
          <div>
            <h3>What the chain closes</h3>
            <p>A firm seventy-model historical purchase count, Ward as supplier/intermediary, continued institutional custody, an MPM-specific catalogue study, and a recent named object anchor.</p>
          </div>
          <div>
            <h3>What remains open</h3>
            <p>The exact purchase/receipt date, invoice and price for the seventy models, whether they belong inside the $12,000 Ward acquisition, the Jass object list, local identifiers, exact current survival count, and post-move display status.</p>
          </div>
        </aside>

        <div class="case-sources" aria-label="Milwaukee source links">
          <div class="source-row">
            <span>Current</span>
            <p><a href="https://www.mpm.edu/node/27085" target="_blank" rel="noopener">Milwaukee Public Museum, “Blaschka Glass Works” ↗</a></p>
          </div>
          <div class="source-row">
            <span>History</span>
            <p><a href="https://www.mpm.edu/index.php/history" target="_blank" rel="noopener">Milwaukee Public Museum, institutional history ↗</a></p>
          </div>
          <div class="source-row">
            <span>2023–24</span>
            <p><a href="https://fliphtml5.com/ldhib/bwip/2023-2024_Annual_Report/" target="_blank" rel="noopener">Milwaukee Public Museum, FY2023–24 annual report ↗</a></p>
          </div>
          <div class="source-row">
            <span>Research</span>
            <p><a href="https://blaschka.uwzm.integrativebiology.wisc.edu/project-timeline/" target="_blank" rel="noopener">University of Wisconsin Blaschka project timeline ↗</a></p>
          </div>
        </div>

        <p class="source-note">The case intentionally separates the museum’s explicit seventy-model Ward purchase from the broader $12,000 Ward collection. Their chronological proximity is a research question, not yet a closed transaction.</p>
      </article>

      <div class="sample-side">
        <p class="eyebrow">Sample 010</p>
        <p class="sample-place">Milwaukee · 1883–2027</p>
        <p class="sample-note">A firm historical quantity and dealer route, with an unresolved relation to the museum’s founding-era Ward purchase.</p>
        <div class="case-meter" aria-hidden="true"><span></span></div>
        <p class="case-meter-label">1883 → 2027</p>
      </div>
    </section>
  `);
})();