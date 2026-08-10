# Privacy implementation notes

This file is the implementation checklist for personal-data handling on the public site. It is not linked from the site navigation.

## Current state

- The public site does not collect personal data through web forms.
- Email subscriptions are not operated; updates are RSS-only.
- Direct email remains available for corrections, source leads, rights/takedown requests and privacy enquiries.
- No project analytics, advertising trackers, marketing cookies or newsletter tracking pixels are deployed.
- No browser local-storage profile or user account system is deployed.
- Hosting is provided by GitHub Pages; hosting-level processing is governed separately by GitHub.
- Project email currently uses Gmail/Google.
- Some open images are served remotely by Wikimedia Commons and Museums Victoria; the privacy notice discloses this and the site suppresses referrers where feasible.

See `legal-rights-audit-2026-08-10.md` for the current combined privacy/copyright audit.

## Before activating email subscriptions

1. Select a mailing provider that supports appropriate data-processing and transfer safeguards where required.
2. Record the provider name, purpose, location/transfer position and retention behaviour in `privacy/index.html`.
3. Keep the controller identity and public contact route current.
4. Collect only the email address plus the minimum consent record needed to demonstrate subscription.
5. Use an affirmative opt-in. Double opt-in is the preferred implementation.
6. Do not pre-tick consent or bundle newsletter consent with another action.
7. Make unsubscribe available in every newsletter and process withdrawals promptly.
8. Do not use subscriber addresses for unrelated purposes or disclose them to unrelated third parties.
9. Keep a documented deletion/retention rule. Remove active subscriber data after unsubscribe except for any minimum suppression record genuinely required to prevent accidental re-mailing.
10. Do not enable newsletter tracking pixels or behavioural profiling by default.
11. Update the privacy notice before collection begins and whenever the purpose, processor or data use materially changes.

## Data map: current correspondence

| Field | Purpose | Lawful-basis model | Visibility | Retention |
| --- | --- | --- | --- | --- |
| Sender email/name | Respond to voluntary correspondence | Legitimate interests in operating/correcting the research project | Project maintainer + email service | Review after ~24 months; longer only if needed for documented research/rights issue |
| Message content/attachments | Handle correction, source, rights or privacy request | Legitimate interests / legal obligations where applicable | Project maintainer + email service | Same criteria; minimise sensitive content |

## Data map: future newsletter (inactive)

| Field | Purpose | Lawful basis / permission model | Visibility | Retention |
| --- | --- | --- | --- | --- |
| Email address | Send requested project updates | Consent / solicited electronic mail | Mailing processor + project maintainer | While subscribed, subject to deletion policy |
| Consent timestamp / source | Demonstrate subscription choice | Compliance record | Mailing processor + project maintainer | As needed to demonstrate consent |
| Confirmation state | Double opt-in workflow | Consent integrity | Mailing processor + project maintainer | While relevant to subscription |

## Public-facing notice

If a collection form is added, keep the notice at the collection point short and layered: purpose, voluntary nature, unsubscribe/withdrawal statement and a link to the full privacy page. The full notice should identify controller and processor, purposes, retention, recipients/transfers where relevant, rights, withdrawal route and complaint information where applicable.

Last reviewed: 2026-08-10
