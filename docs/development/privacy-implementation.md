# Privacy implementation notes

This file is the implementation checklist for personal-data handling on the public site. It is not linked from the site navigation.

## Current state

- The public site does not currently collect personal data through forms.
- The Blog email field is disabled and has no submission endpoint.
- No project analytics, advertising trackers, marketing cookies or newsletter tracking pixels are deployed.
- Hosting is provided by GitHub Pages; hosting-level processing is governed separately by GitHub.

## Before activating email subscriptions

1. Select a mailing provider that supports a data-processing agreement and appropriate international-transfer safeguards where required.
2. Record the provider name, purpose, location/transfer position and retention behaviour in `privacy/index.html`.
3. Add the data controller's public contact details to `privacy/index.html`.
4. Collect only the email address plus the minimum consent record needed to demonstrate subscription (for example timestamp, source form and confirmation state).
5. Use an affirmative opt-in. Double opt-in is the preferred project implementation.
6. Do not pre-tick consent or bundle newsletter consent with another action.
7. Make unsubscribe available in every newsletter and process withdrawals promptly.
8. Do not use subscriber addresses for unrelated purposes or disclose them to unrelated third parties.
9. Keep a documented deletion/retention rule. Preferred baseline: remove active subscriber data after unsubscribe except for the minimum suppression record required to prevent accidental re-mailing; review inactive data periodically.
10. Do not enable newsletter tracking pixels or behavioural profiling by default.
11. Update the privacy notice before collection begins and whenever the purpose, processor or data use materially changes.

## Data map: planned newsletter

| Field | Purpose | Lawful basis / permission model | Visibility | Retention |
| --- | --- | --- | --- | --- |
| Email address | Send requested project updates | Consent / solicited electronic mail | Mailing processor + project maintainer | While subscribed, subject to deletion policy |
| Consent timestamp / source | Demonstrate subscription choice | Compliance record | Mailing processor + project maintainer | As needed to demonstrate consent |
| Confirmation state | Double opt-in workflow | Consent integrity | Mailing processor + project maintainer | While relevant to subscription |

## Public-facing notice

Keep the notice at the collection point short and layered: purpose, voluntary nature, unsubscribe statement and a link to the full privacy page. The full notice should identify the controller and processor, purposes, retention, recipients/transfers where relevant, rights, withdrawal route and complaint information where applicable.

Last reviewed: 2026-08-08
