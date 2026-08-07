# Blachka_corpus

Working repository for the Blaschka / microscope-slide backend experiments.

Current pilot:

- `07A_UK_US_Microscope_Slide_Collections_Survey`: a UK/US survey layer for microscope-slide collection entrances, finding aids, object catalogues, and batch-level collection evidence.
- The pilot treats single item pages as weak evidence unless they contribute to a collection, person, batch, label, cabinet, or circulation question.
- GitHub Actions currently runs validation and dry-run harvesting only. It does not bulk-download images, bypass logins, or treat `belonging to`, `from the collection of`, `prepared by`, `mounted by`, `donated by`, or `lent by` as the same ownership relation.

Core rule: item-level records may be thin, but they must support collection-scale evidence.
