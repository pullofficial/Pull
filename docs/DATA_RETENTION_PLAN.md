# Data retention and deletion plan

**Status: planning draft — not an approved legal schedule and not implemented in production.**

This document records the data lifecycle decisions that must be made before Pull accepts members. Retention periods must be approved by qualified privacy counsel for each launch market and aligned with the actual age-assurance, hosting, payment and moderation providers.

## Principles

- Collect only information needed for a clearly stated product or safety purpose.
- Tell members what is collected, why, who receives it and how long it is kept.
- Keep identity and age-assurance evidence separate from public profile data.
- Do not store identity-document images in the profile database.
- Restrict staff access by role, log sensitive access and review permissions.
- Apply deletion consistently to primary databases, search indexes, analytics exports and vendor systems, subject to documented legal holds.
- Do not promise immediate erasure from immutable backups; define and disclose backup expiry and restoration procedures.
- Never reuse deleted or blocked member data for discovery.

## Data inventory and decisions required

| Data category | Purpose | Proposed handling | Decision still required |
| --- | --- | --- | --- |
| Account identifiers and login credentials | Authentication and account recovery | Store credentials only through the selected authentication provider; never store plaintext passwords | Provider, account closure workflow and post-closure retention |
| Date of birth and age-assurance result | Enforce adults-only access | Minimise stored result; keep provider reference only if necessary | Whether full birth date is needed after verification; lawful retention |
| Verification evidence | Resolve age-assurance disputes and fraud | Prefer provider-hosted evidence; do not copy ID images into profile tables | Provider deletion schedule, dispute window and lawful basis |
| Profile and preferences | Member discovery and matching | Delete or de-identify after account closure, subject to justified exceptions | Closure grace period and backup expiry |
| Likes, matches and messages | Core member interactions and safety investigations | Define separate deletion behaviour for each relationship and message type | Whether recipient copies remain, legal holds and abuse-report exceptions |
| Reports, blocks and moderation records | Protect members and investigate abuse | Limit access; retain only what is necessary for safety, appeals and legal duties | Severity-based schedule, appeal window and legal hold criteria |
| Device, security and access logs | Prevent account compromise and abuse | Minimise identifiers; restrict access and use a documented expiry | Security-log retention and incident preservation |
| Support requests | Respond to member enquiries | Keep case data in a restricted support system | Case closure and legal limitation periods |
| Product analytics | Understand reliability and usage | Prefer aggregated or pseudonymous events; avoid sensitive profile content | Vendor, consent requirements and event expiry |
| Payment and subscription records (if introduced) | Billing, refunds and accounting | Keep with approved payment provider; do not store card details | Provider acceptance, statutory accounting periods and market rules |

## Member rights workflow

Before launch, implement and test a documented process for:

1. Verifying the requester without collecting unnecessary new identity data.
2. Receiving and tracking access, correction, export, objection and deletion requests where applicable.
3. Locating data across product systems and processors.
4. Applying exceptions only when a documented legal or safety basis exists.
5. Communicating the outcome and any retained categories.
6. Recording completion without keeping a duplicate of deleted personal data.

## Deletion lifecycle

The production design must define separate events for account deactivation, account deletion request, completed deletion, safety/legal hold, backup expiry and provider-side deletion. A deletion job must be idempotent, auditable and retryable. Restoring a backup must not silently resurrect accounts already deleted; a post-restore deletion ledger or equivalent control is required.

## Launch blockers

- [ ] Privacy counsel approves market-specific retention periods and legal bases.
- [ ] Complete data map and processor/subprocessor register.
- [ ] Published privacy notice matches actual collection and retention.
- [ ] Account export and deletion workflows implemented and tested end-to-end.
- [ ] Provider-side deletion and backup expiry verified.
- [ ] Legal-hold process, access controls and audit logs tested.
- [ ] No production analytics or advertising SDK collects sensitive profile data without review.
- [ ] Support and moderation staff trained on requests and evidence handling.

**Current implementation status:** this is documentation only. It does not mean export, deletion, retention enforcement or legal compliance is operational.
