# Field semantic-role audit · 11 August 2026

This audit recursively inventories field names across current Source registers and Auction JSON layers. It maps functional similarity only; no research data are rewritten and no two fields are declared semantically identical merely because they occupy a similar role.

- Input JSON files: **50**.
- Distinct field names encountered: **931**.

## Role families

### guard_or_limit

Caveat, scope limit, or evidence-use restriction. Similar function does not imply identical epistemic force.

Detected fields (37): `auction_context_guard`, `blaschka_guard`, `business_history_guard`, `catalogue_guard`, `chronology_guard`, `container_guard`, `content_guard`, `correction_guard`, `count_guard`, `count_wording_guard`, `coverage_guard`, `date_guard`, `evidence_guard`, `guard`, `identity_guard`, `important_guard`, `important_negative_guard`, `important_quantity_guard`, `method_guard`, `methodological_guard`, `metric_guard`, `museum_guard`, `name_guard`, `negative_claim_guard`, `negative_guard`, `negative_scope_guard`, `negative_search_guard`, `normalization_guard`, `policy_guard`, `public_index_guard`, `role_guard`, `scope_guard`, `sequence_guard`, `source_guard`, `survival_guard`, `taxon_guard`, `taxonomic_guard`.

### interpretive_observation

Interpretive synthesis or observation produced from the register rather than a locator or raw record.

Detected fields (4): `comparative_observation`, `material_observation`, `network_observation`, `research_observation`.

### research_value

Statement of why a record matters for the project. Kept separate from evidence description.

Detected fields (1): `research_value`.

### future_work

Retrieval, comparison, or follow-up work rather than completed evidence.

Detected fields (14): `archive_targets`, `comparative_questions`, `next_actions`, `next_recovery_routes`, `next_retrieval`, `next_retrieval_targets`, `next_search`, `next_searches`, `next_step`, `next_targets`, `priority_targets`, `research_question`, `research_questions`, `route_archive_priorities`.

### locator_or_source

Repository/source/locator metadata. Same role can still encode different levels of archival precision.

Detected fields (18): `archive`, `catalogue_locator`, `collection`, `collection_number`, `locator`, `locators`, `official_locator`, `publication`, `receiving_repository`, `reference`, `references`, `repository`, `secondary_locator`, `source`, `source_locator`, `source_locators`, `sources`, `stable_locator`.

### identity_or_status

Stable/local identity or status metadata. Status labels remain governed by their local vocabulary.

Detected fields (4): `id`, `record_id`, `status`, `status_vocabulary`.

### evidence_description

Evidence statement or content description. These are not normalized because their evidentiary unit varies by register.

Detected fields (23): `auction_evidence`, `auction_record`, `catalogue_crosscheck`, `content_note`, `direct_blaschka_dealer_evidence`, `direct_blaschka_evidence`, `direct_cross_category_evidence`, `direct_evidence`, `direct_invoice_evidence`, `direct_natural_history_evidence`, `direct_object_evidence`, `direct_or_institutional_evidence`, `direct_primary_evidence`, `evidence`, `finding_aid_evidence`, `independent_contemporary_network_evidence`, `known_evidence`, `old_identifier_evidence`, `process_evidence`, `public_evidence`, `secondary_content_claim`, `transaction_evidence`, `workshop_evidence`.

## What can and cannot be standardized

1. **Safe to standardize at the tooling layer:** metadata envelope validation, manifest generation, field-role inventory, checksums, and documentation vocabulary for maintenance scripts.
2. **Map but do not rename:** guard fields, observation fields, research-value fields, future-work fields, locator/source fields, and evidence-description fields. Their names often encode the question that produced the register.
3. **Do not flatten:** `evidence`, `research_value`, and `*_guard` are analytically different layers. Evidence describes the source basis; research value states why it matters; a guard constrains permissible inference.
4. **Do not globalize status:** status labels remain local unless a later reviewed crosswalk proves equivalence. The separate status-vocabulary audit found no repeated explicit label across the four current local vocabularies.
5. **Naming drift is now observable without destructive cleanup:** future new registers can prefer documented field roles while historical registers remain intact.

Machine-readable detail: `../../../schemas/generated/field-semantic-role-map.json`.
