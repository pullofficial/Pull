# Security review and production gates

**Status: engineering review draft — not a security certification.** The SQL migration is a starting point and has not been applied to a live Supabase project or tested against a production configuration.

## Data and trust boundaries

| Data or action | Intended authority | Member access |
|---|---|---|
| Profile fields | Authenticated member; server validates input | Own profile; only verified and discoverable profiles appear in discovery |
| Age-check result and timestamp | Trusted server-side age-assurance integration | Read-only; never member-editable |
| Likes | Authenticated, age-verified member | Create own; read sent/received; remove own |
| Blocks | Authenticated member | Manage blocks they created |
| Reports | Authenticated, age-verified member | Submit and view own submissions |
| Report status and enforcement | Audited moderation service/staff | No member status changes |
| Secrets and provider credentials | Server-side deployment environment | Never sent to browser or committed |

## Threats to test before launch

1. **Age bypass:** attempt signup, login, profile visibility, discovery, likes and reporting with pending, rejected and review-required age states. Confirm every server path denies access where required. A client-side age checkbox is not assurance.
2. **Identity spoofing:** attempt to update age_check_status and age_verified_at through REST, RPC and direct SQL as anon and authenticated. Only a trusted verifier should write these fields.
3. **Block evasion:** test both directions of a block, including discovery, likes, future matches and messaging. A block must suppress contact and visibility consistently.
4. **Object-level authorization:** try reading or changing another member's profile, likes, blocks and reports by substituting UUIDs.
5. **Report abuse:** test unauthenticated and unverified submissions, self-reports, duplicate floods, oversized details and malicious text. Add server-side rate limits and abuse monitoring.
6. **Privilege escalation:** verify ordinary members cannot change report status, access moderation queues, call privileged functions or use service-role credentials.
7. **Data exposure:** inspect browser bundles, network responses, logs, analytics and error messages for secrets, identity documents, precise location or private report details.
8. **Account lifecycle:** test deletion, export, session revocation, retention expiry, backups and removal from derived data.

## Required engineering controls

- Keep Supabase service-role credentials and age-assurance provider secrets server-side only.
- Validate and normalize all user input on the server; enforce length limits and safe rendering.
- Add rate limits for signup, login, likes, reports, password recovery and messaging.
- Add audited admin roles and moderation actions; do not grant broad table access to staff by default.
- Use generic authentication errors, secure session handling, CSRF protections where applicable, and secure HTTP headers.
- Avoid storing identity-document images or full verification payloads in profile tables. Store only the minimum provider attestation needed for eligibility and audit.
- Do not collect precise GPS location for discovery by default. Use coarse location and explicit consent.
- Define retention periods for profiles, reports, moderation evidence, logs and backups before collecting real data.
- Add dependency scanning, secret scanning, database migration review and independent penetration testing before launch.

## Retention and privacy decisions still required

The product owner and qualified privacy counsel must approve specific retention periods and lawful bases before launch. This repository does not yet define approved durations. Document, at minimum:

- profile and account data after account closure;
- age-assurance outcome and audit metadata;
- reports, evidence and enforcement history;
- security logs and abuse-prevention signals;
- backups and deletion propagation;
- legal holds and user export/deletion request handling.

Do not promise immediate erasure from backups until the backup lifecycle supports it.

## Release gate

Do not enable real registration, discovery, matching, messaging or payments until all of the following are complete:

- [ ] Apply migrations to a non-production Supabase project and run automated RLS tests as anon, ordinary authenticated members, verified members and trusted server roles.
- [ ] Independently review function ownership, grants, default privileges, RLS policies and schema exposure.
- [ ] Verify age-assurance provider integration server-side, including retries, forged callbacks, replay protection and manual review.
- [ ] Implement account deletion/export and approved retention schedules.
- [ ] Implement production reporting, blocking, moderation queue, escalation and appeals.
- [ ] Complete privacy/legal review for each launch country and app-store/payment-provider policy review.
- [ ] Complete independent security testing and resolve all critical/high findings.

## Current limitations

The current migration contains profile, like, block and report foundations. It does **not** implement authentication UI, age-assurance provider callbacks, messaging, matching, moderation tooling, rate limiting, retention automation, deletion/export workflows or payment processing. The preview pages are not live member features.
