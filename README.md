# The Blaschka Object Network

A research prototype tracing Blaschka glass models through workshop records, dealers, shipments, museum collections, damage, conservation, rediscovery, and present custody.

**Live site:** https://zhhos98-cell.github.io/Blachka_corpus/

## About the project

The Blaschka Object Network treats the surviving glass models as objects with documentary lives. The project connects workshop-side records with museum catalogues, correspondence, shipment and accounting evidence, later collection records, conservation histories, and current institutional custody.

The aim is to keep evidential layers visible. Confirmed transactions, shipment routes, object identifiers, later rediscoveries, and unresolved gaps are recorded separately instead of being collapsed into a single provenance narrative.

## Current prototype

The public site currently uses **Liverpool Museum / World Museum Liverpool, 1887** as its principal test case. The case follows an order from workshop manufacture and accounting through a marked freight shipment, then reconnects that nineteenth-century documentary chain with modern evidence for surviving Liverpool Blaschka models.

This remains a research and design prototype. It is being used to test typography, page structure, timeline presentation, source hierarchy, and the visual treatment of uncertainty before larger structured collection and object data are exposed publicly.

## Persistent research state

The repository now also carries a lightweight research handoff layer under [`research/`](research/). This is deliberately separate from the much larger provenance backend.

- [`research/README.md`](research/README.md) — method, the “68” baseline, data rules, and session protocol.
- [`research/census.csv`](research/census.csv) — working global census: one row per confirmed or candidate collection node, including `baseline_2017_match`.
- [`research/RESEARCH_LOG.md`](research/RESEARCH_LOG.md) — dated discoveries, corrections, decisions, and next actions.

The purpose is practical: a new research session can recover the current state directly from GitHub instead of requiring copied conversation history.

## Repository structure

```text
index.html              Public prototype page
styles.css              Core site typography and layout
compact.css             Compact-layout layer
enhancements.css        Additional visual behavior
secondary.css           Secondary-page styling
motion.js               Lightweight client-side motion
blog/                   Blog prototype material
auctions/               Auction prototype material
privacy/                Privacy material
research/               Persistent census and research handoff
.nojekyll                Keeps GitHub Pages deployment simple
README.md                Project and repository documentation
```

The public site remains a lightweight GitHub Pages implementation without a framework or build system. The large research backend is not duplicated into the public presentation layer.

## Research architecture

The project distinguishes a **census layer** from a **deep provenance layer**. A secure current holding can enter the census even if the nineteenth-century purchase chain is still incomplete. Selected collections can then be upgraded into deeper microhistories covering order, price, dealer, shipment, local registration, damage, conservation, movement, rediscovery, and current custody.

The historical figure of **68 surviving collections in the 2017 Corning map** is treated as a comparison baseline. The project aims to reconstruct that baseline, match present nodes against it, and identify defensible additions without conflating newly rediscovered institutions with genuinely post-baseline nodes.

## Development direction

Future versions are intended to move from the single-case prototype toward structured pages for institutions, objects, transactions, routes, dates, and evidence states. Public-facing pages will be generated from selected research data rather than manually duplicated.

## Status

Work in progress. The current site is a research and design prototype rather than a complete catalogue or finished scholarly edition.

## Working bibliography: glass reuse, recycling, and multiple lives

Source context: **4ème colloque international, _Les multiples vies du verre. Histoire de recyclages depuis l’Antiquité_, Orléans, 3–5 June 2027** — [Verre & Histoire CFP](https://www.verre-histoire.org/2026/05/10/du-3-au-5-juin-2027-a-orleans-les-multiples-vies-du-verre-histoire-de-recyclages-depuis-lantiquite-appel-a-communications/).

### Généralités

- Mathieu Arnoux, _Un monde sans ressources. Besoin et société en Europe (XIe–XIVe siècles)_, Paris, Albin Michel, 2023.
- Philippe Bernardi, Robert Carvais, Valérie Nègre (eds.), “Recyclage et remploi : la seconde vie des matériaux de construction,” _Ædificare. Revue internationale d’histoire de la construction_, 2 (2018), no. 4. [Issue page](https://www.histoireconstruction.fr/aedificare-2018-2-n-4/)
- Charles Delattre, _Objets sacrés, objets magiques : de l’Antiquité au Moyen Âge_, Paris, Picard, 2007.
- Jean-Paul Demoule, “Archéologie, Art contemporain et recyclage des déchets, Objets irremplaçables,” _Techniques & Culture_ 58 (2012/1), pp. 160–177. [OpenEdition](https://journals.openedition.org/tc/6321)
- Philippe George, “Définition et fonction d’un trésor d’église,” _Bulletin du Centre d’études médiévales d’Auxerre_ 9 (2005).
- Michel Lauwers, “Déposer, cacher, fonder. À propos de quelques formes de dépôt rituel dans l’Occident médiéval,” in Sandrine Bonnardin, Caroline Hamon, Michel Lauwers and Bénédicte Quillec, _Du matériel au spirituel. Réalités archéologiques et historiques des ‘dépôts’ de la Préhistoire à nos jours_, XXIXe Rencontres internationales d’Archéologie et d’Histoire d’Antibes, APDCA, Antibes, 2009.
- Baptiste Monsaingeon, _Homo detritus_, Paris, Points, 2020.
- Michael B. Schiffer, _Formation Processes of the Archaeological Record_, Albuquerque, University of New Mexico Press, 1987. [Google Books](https://books.google.com/books?id=TMpVlJ8zK78C)
- Daniel Lord Smail, Gabriel H. Pizzorno and Nathaniel Hay, “Recyclage et ontologie de l’objet dans les textes du Bas Moyen Âge : l’exemple de Marseille,” in Yves Henigfeld, Philippe Husi and Fabienne Ravoire (eds.), _L’objet au Moyen Âge et à l’époque moderne : Fabriquer, échanger, consommer et recycler_, Caen, PUC, 2020, pp. 393–401. [PDF](https://scholar.harvard.edu/files/pizzorno/files/smail_pizzorno_hay_2019.pdf)

### Recyclage et production

- Anna-Isabelle Bidegaray and Alan Mark Pollard, “Recycling in the Production of Medieval Blue Window Glass,” _Archaeometry_ 60, no. 4 (2018), pp. 784–796.
- Isabelle Biron, Pete Dandridge and Mark T. Wypyski, “Techniques and Materials in Limoges Enamels,” in John P. O’Neill (ed.), _Enamels of Limoges, 1100–1350_, New York, Metropolitan Museum of Art, 1996, pp. 48–62.
- Anne-Françoise Cannella, _Gemmes, verre coloré, fausses pierres précieuses au Moyen Âge. Le quatrième livre du Trésorier de Philosophie naturelle des pierres précieuses de Jean d’Outremeuse_, Genève, Droz, 2006.
- Andrea Ceglia, Peter Cosyns, Nadine Schibille and Wendy Meulebroeck, “Unravelling Provenance and Recycling of Late Antique Glass from Cyprus with Trace Elements,” _Archaeological and Anthropological Sciences_ 11 (2019), pp. 279–271 [pagination as given in CFP].
- Ricardo Córdoba de la Llave, “Recycling of Materials and Reuse of Production Labor Residues in Late Medieval Europe / Reciclaje de materiales y reutilización de residuos de Labores Productivas en la Europa Bajomedieval,” _Anuario de Estudios Medievales_ 52/1 (2022), pp. 185–207.
- Jennifer Craig, “Project Gallery. Refining the Chronology and Distribution of mid-fifteenth to mid-seventeenth Century Indian Ocean World Glass,” _Antiquity_ (2021), pp. 1–6.
- Laure Dussubieux and M. Wood, “Indian Glass: Chronology and Distribution in Eastern Africa,” in Alok Kumar Kanungo and Laure Dussubieux (eds.), _Ancient Glass of South Asia: Archaeology, Ethnography and Global Connection_, Singapore, Springer, pp. 511–532.
- Danièle Foy and Marie-Dominique Nenna (eds.), _Échanges et commerce du verre dans le monde antique_, Actes du colloque de l’Association française pour l’Archéologie du verre, Aix-en-Provence et Marseille, 7–9 June 2001, Monographies Instrumentum 24, Montagnac, 2003.
- Ian C. Freestone, “The Recycling and Reuse of Roman Glass: Analytical Approaches,” _Journal of Glass Studies_ 57 (2015), pp. 29–40.
- María Auxiliadora Gómez-Morón, Teresa Palomar, Luis Cerqueira Alves, Pilar Ortiz, Márcia Vilarigues and Nadine Schibille, “Christian-Muslim Contacts across the Mediterranean: Byzantine Glass Mosaics in the Great Umayyad Mosque of Córdoba (Spain),” _Journal of Archaeological Science_ 129 (2021), p. 105370.
- Bernard Gratuze, Isabelle Soulier, Jean Noël Barrandon and Danielle Foy, “De l’origine du cobalt dans les verres,” _Revue d’Archéométrie_ 16 (1997), pp. 97–108.
- Bernard Gratuze, Catherine Guerrot, Danièle Foy, Adrien Arles and Florian Téreygeol, “Les galets de verre au plomb carolingiens issus des scories de Melle : élaboration et distribution,” in _Mine, métal, monnaie. Autour du cas de Melle, les voies de la quantification de l’histoire monétaire du haut Moyen Âge_, Paris, September 2011.
- Bernard Gratuze, Nadine Schibille and Inès Pactat, “Glass in the Middle East and Western Europe at the End of the First Millennium CE, Transition from Natron to Plant Ash Soda or Forest Glasses,” in Alok Kumar Kanungo and Laure Dussubieux (eds.), _Ancient Glass of South Asia_, Singapore, Springer, 2021, pp. 21–38.
- Caroline M. Jackson and S. Paynter, “Great big Melting pot: Exploring Patterns of Glass Supply, Consumption and Recycling in Roman Coppergate, York,” _Archaeometry_ 58, no. 1 (2016), pp. 68–95.
- Inès Pactat, “Le Recyclage du verre au temps des Romains, des Francs et des Byzantins,” _Reflets de la physique_, “Dans les reflets du verre,” no. 74, pp. 16–21.
- Sarah Paynter and Caroline Jackson, “Re-used Roman Rubbish: a Thousand Years of Recycling Glass,” _Post-Classical Archaeologies_ 6 (2016), pp. 31–52.
- Dominique Simon-Hiérnard and Bernard Gratuze, “Le vase de Saint-Savin en Poitou et les verres médiévaux bleu-cobalt à décors blancs,” _Bulletin de l’Association française pour l’Archéologie du verre_ (2011), pp. 69–99.
- Isabelle Soulier, Bernard Gratuze and Jean Noël Barrandon, “The Origin of Cobalt Blue Pigments in French Glass from the Thirteenth to the Eighteenth Centuries,” in Duncan R. Hook and David R. M. Gaimster (eds.), _Trade and Discovery: The Scientific Study of Artefacts from Post-Medieval Europe and Beyond_, British Museum Occasional Paper 109, London, 1995, pp. 123–133.
- Bernard Gratuze, Catherine Guerrot, Danielle Foy, Justine Bayley, Adrien Arles and Florian Tereygeol, “Melle : mise en évidence de l’utilisation des scories vitreuses issues de la chaîne opératoire de production de l’argent comme matière première de l’industrie verrière,” in Florian Téreygeol (ed.), _Du monde franc aux califats omeyyade et abbasside : extraction et produits des mines d’argent de Melle et de Jabali_, Bochum, Deutsches Bergbau-Museum, 2014, pp. 211–230.
- Nadine Schibille, Allison Sterrett-Krause and Ian C. Freestone, “Glass Groups, Glass Supply and Recycling in late Roman Carthage,” _Archaeological and Anthropological Sciences_ 9 (2017), pp. 1223–1241.
- Alberta Silvestri, Gianmario Molin, Gabriella Salviulo and Renzo Bertoncello, “The Coloured Glass of Iulia Felix,” _Journal of Archaeological Science_ 35 (2008), pp. 1489–1501.
- Elise Vanriest, “Le métier de patenôtrier boutonnier d’émail à Paris au XVIe siècle,” _Bulletin de l’Association française de l’Archéologie du Verre_ (2016), pp. 92–94.
- Bruce Velde, “Les Vitraux bleus et sodiques du XIIe siècle,” _Bulletin de l’Association Française pour l’Archéologie du Verre_ (2004), pp. 25–27.
- Marco Verità and Isabelle Biron, “Analytical Investigation of Genuine Renaissance Venetian Enameled and Gilded Glass,” _Journal of Glass Studies_ 63 (2021), pp. 157–196.
- Line Van Wersch, Laurent Verslype, David Strivay and Frans Theuws (eds.), _Early Medieval Tesserae in Northwestern Europe_, Bonn, Habelt-Verlag, 2019.
- David Whitehouse, “Glass in the Epigrams of Martial,” _Journal of Glass Studies_ 41 (1999), pp. 73–81.
- Marilee Wood, “Divergent patterns in Indian Ocean Trade to East Africa and southern Africa between the 7th and 17th Centuries CE: the Glass Bead Evidence,” in Thomas Vernet and Philippe Beaujard, _L’Afrique orientale et l’Océan Indien : connexions, réseaux d’échanges et globalisation (Ier millénaire–XIXe siècle)_, _Afriques. Historical debates, methods and fields_ 6 (2015).

### La « deuxième vie » du verre

- Jane Busch, “Second Time Around: A Look at Bottle Reuse,” _Historical Archaeology_ 21, no. 1 (1987), pp. 67–80.
- Tania Chinni, Alberta Silvestri, Sara Fiorentino and Mariangela Vandini, “Once upon a Glass—Cycles, Recycles and Reuses of a Never-Ending Material,” _Heritage_ 6 (2023), pp. 662–671. [Open access](https://www.mdpi.com/2571-9408/6/1/35)
- Francesca Dell’Acqua, “Ninth-Century Window Glass from the Monastery of San Vincenzo al Volturno (Molise, Italy),” _Journal of Glass Studies_ 39 (1997), pp. 33–41.
- Chloë N. Duckworth and Andrew Wilson (eds.), _Recycling and Reuse in the Roman Economy_, Oxford University Press, 2020. [Oxford Academic](https://academic.oup.com/book/33522)
- Danielle Foy, “Recyclages et réemplois dans l’artisanat du verre. Quelques exemples antiques et médiévaux,” in Pascale Ballet, Nadine Dieudonné-Glad and Pierre Cordier (eds.), _La ville et ses déchets dans le monde romain : rebuts et recyclages_, Éditions Mergoil, 2002, pp. 271–276.
- Danielle Foy and Gabrielle Démians d’Archimbaud, “Dépôts de verres et rites funéraires,” in _Archéologie du cimetière chrétien_, actes du 2e colloque A.R.C.H.E.A. (1994), 11e supplément à la _Revue Archéologique du Centre de la France_, Tours, 1996, pp. 225–241.
- Kenneth B. Farnsworth and John A. Walthall, _Bottled in Illinois. Embossed Bottles and Bottled Products of Early Illinois Merchants from Chicago to Cairo, 1840–1880_, Studies in Archaeology no. 6, Illinois State Archaeological Survey, University of Illinois, Urbana, 2011.
- Catherine Hébrard-Salivas, “Étude de la verrerie du site de Pey-Berland (Bordeaux),” _Bulletin de l’Association française pour l’archéologie du verre_ (2011), pp. 79–84.
- Daniel Keller, “Social and economic aspects of glass recycling,” _Theoretical Roman Archaeology Journal_ (2004), Oxford, Oxbow Books, 2005, pp. 65–78.
- Tom Licence, “Normalising bottle reuse: Lessons from the Victorians on the limits of voluntary schemes,” _History & Policy_, 30 January 2020. [Web](https://historyandpolicy.org/policy-papers/papers/normalising-bottle-return-and-reuse-lessons-from-the-victorians-on-the-limits-of-voluntary-schemes/)
- Catherine Losier, “Bouteilles et flacons : Les Contenants utilitaires français du début du XVIIIe siècle au début du XIXe siècle. Aspects techniques et sociaux,” _Journal of Glass Studies_ 54 (2012), pp. 151–180.
- Nicolas Marty, “Les entreprises de boissons et la consignation dans l’histoire : une comparaison européenne,” _Entreprises et histoire_ 2023/1, no. 110, pp. 69–86.
- Beth Munro, “Recycling, Demand for Materials, and Landownership at Villas in Italy and the Western Provinces in Late Antiquity,” _Journal of Roman Archaeology_ 25 (2012), pp. 351–370.
- Iain Stuart, “Bottles For Jam? An Example of Recycling from a Post-Contact Archaeological Site,” _Australian Archaeology_ 36 (June 1993), pp. 17–21.

### Recyclage et détournement

- Association Structures sonores Baschet. [baschet.org](https://baschet.org/)
- Christophe Baillet, “Usages du verre dans les trésors ecclésiaux de reliques (sud-ouest de la France, fin XIe–début XVIIIe s.),” _Bulletin de l’Association Française pour l’Archéologie du Verre_ (2013), pp. 135–141.
- Audrey Couineaux, _Modélisation vibro-acoustique du cristal Baschet : jouabilité et timbre du son produit par frottement_, Laboratoire d’Acoustique de l’Université du Mans / LAUM, Nantes Université, Sciences de l’ingénierie et des systèmes, Le Mans, 2024.
- Mélanie Traversier, _L’Harmonica de verre et miss Davies. Essai sur la mécanique du succès au siècle des Lumières_, Paris, Seuil, 2021.
- Jean Claude Chapuis, _Glass Harmonica et autres instruments de verre_, Les éditions de l’œil, 2017.
