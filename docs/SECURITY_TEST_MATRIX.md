# Pre-launch security test matrix

**Status: test plan only.** No live Supabase project is connected, so none of these cases is marked as executed or passed. Run first in an isolated, non-production project after applying reviewed migrations.

## Test identities

Create separate fixtures for:
- anonymous visitor (no session);
- authenticated member with pending age check;
- authenticated member with rejected or review-required age check;
- authenticated member with verified age check and hidden profile;
- authenticated member with verified age check and discoverable profile;
- trusted server verifier;
- authorised moderator role (only after that role and its permissions have been designed).

Use synthetic accounts and data only.

## Required test cases

| ID | Scenario | Expected result |
|---|---|---|
| AUTH-01 | Anonymous user queries profile, likes, blocks or reports | No private member data is returned; writes are denied |
| AGE-01 | Pending member attempts discovery and likes | No other member profiles are exposed; like creation denied |
| AGE-02 | Rejected or review-required member attempts member actions | Access remains denied until trusted review completes |
| AGE-03 | Member attempts to update age status or verification timestamp | Database rejects the change |
| AGE-04 | Trusted verifier records a valid, account-bound provider result | Only the intended account's verification state changes |
| PROF-01 | Verified member reads own hidden profile | Own profile is readable |
| PROF-02 | Verified member reads another member's hidden profile | No row is returned |
| PROF-03 | Verified member reads another verified, discoverable profile | Profile is readable unless either direction is blocked |
| PROF-04 | Member attempts to edit another member's profile | Update is denied |
| LIKE-01 | Verified member likes a verified, discoverable, unblocked target | Like may be created |
| LIKE-02 | Unverified member attempts a like | Insert is denied |
| LIKE-03 | Member likes a hidden or unverified target | Insert is denied |
| LIKE-04 | Member attempts to like themselves or duplicate a pair | Constraint rejects the insert |
| BLOCK-01 | A blocks B; A tries to discover or like B | B is hidden from A and the like is denied |
| BLOCK-02 | A blocks B; B tries to discover or like A | A is hidden from B and the like is denied |
| BLOCK-03 | Member attempts to delete another person's block | Delete is denied |
| REPORT-01 | Verified member submits a valid report | Report is created and reporter can view their own report |
| REPORT-02 | Unverified member submits a report | Insert is denied |
| REPORT-03 | Reporter attempts to change report status | Update is denied |
| REPORT-04 | Member attempts to read another reporter's report | No row is returned |
| REPORT-05 | Member submits self-report or invalid category | Constraint rejects the insert |
| PRIV-01 | Browser bundle and client network traffic are inspected | No service-role key, provider secret or private moderation data is exposed |\n| DB-01 | Member directly invokes the block-check helper with two unrelated account IDs | Function does not disclose block relationships between other members |\n| DB-02 | Authenticated member attempts profile updates through every exposed API path | Only approved profile columns can be changed; age status and timestamp remain server-controlled |\n| DB-03 | Database grants and default privileges are inspected for every exposed table and function | No unintended table, RPC or moderation access is granted |

## Important integration checks

The SQL policies are only one layer. Test server routes and future matching/messaging endpoints independently. A block must also prevent existing conversations, new message delivery, notifications, search results and match creation. Do not assume the current schema implements those features.

Test age-provider callbacks for invalid signatures, expired timestamps, replayed events, wrong account identifiers, duplicate delivery, provider outages and manual-review outcomes.

Test throttling and monitoring for repeated login failures, mass likes, profile scraping, duplicate reports and abusive message attempts.

## Evidence record

For each test, record:
- test ID and date;
- migration commit and database environment;
- role and fixture account used;
- exact request/action performed (remove tokens and personal data);
- observed result and expected result;
- pass/fail/not run;
- issue link and retest result;
- reviewer and sign-off date.

Do not store identity documents, access tokens, passwords or unnecessary personal information in test evidence.

## Exit criteria

- Every case above is executed in a non-production environment.
- All access-control failures are fixed and retested.
- Independent reviewer signs off database grants, function privileges and row-level security.
- Server-side age assurance and account lifecycle workflows are tested end-to-end.
- No critical or high severity security findings remain open.
- Product, privacy, legal and trust-and-safety owners approve launch readiness.

A passing CI build validates the application build and type checks; it does not prove these security tests have passed.
