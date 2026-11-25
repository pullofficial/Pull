# Member API authorization checklist

**Status: design and review checklist.** No member API routes are currently implemented. This document defines the checks each future endpoint must satisfy before it can be enabled.

## Common requirements

- Authenticate from a server-verified session; never trust a member ID supplied in request JSON as the actor.
- Load account state and authoritative age-assurance status server-side.
- Reject suspended, closed, pending, rejected or review-required accounts from protected member actions.
- Validate request shape, enum values, string lengths and identifiers; reject unexpected fields.
- Apply per-account and per-IP rate limits with monitoring and safe retry behaviour.
- Return only fields required by the caller's task; avoid leaking internal verification, report or moderation state.
- Use generic errors where detailed responses would enable account enumeration or abuse.
- Log security-relevant events without logging passwords, tokens, identity documents or sensitive report narratives.
- Ensure block relationships are checked in both directions before any contact or discovery action.
- Add integration tests for every allowed and denied role/state combination.

## Endpoint contract matrix

| Capability | Required actor | Target checks | Data returned / mutation |
| --- | --- | --- | --- |
| Read own profile | Active authenticated account | Own account only | Member-editable profile fields; never verification secrets |
| Update own profile | Active, verified account (confirm final onboarding policy) | Ignore caller-supplied owner ID; update session account only | Allowlisted fields only; age status and verification timestamp are immutable to members |
| Discover profiles | Active, verified account | Target verified, discoverable, not blocked either way | Minimal public profile projection; coarse location only |
| Like a profile | Active, verified account | Target verified and discoverable; no self-like; no block either way | Create one actor-target relationship; enforce uniqueness |
| Remove own like | Active authenticated account | Actor must own relationship | Delete only own like |
| Create block | Active authenticated account | No self-block | Create block; subsequent discovery, likes, matching and messaging must be suppressed both ways |
| Remove own block | Active authenticated account | Actor must own block | Remove only own block |
| Submit report | Active, verified account (subject to final policy) | No self-report; validate category and bounded details | Create report; never allow client to set moderation status |
| Read own report receipt | Active authenticated account | Reporter must own report | Minimal status/receipt; no internal notes or other reporter identity |
| Moderator review | Explicit audited moderator role | Least privilege and case assignment | Access only assigned case data; all actions audited |
| Age-verification result | Trusted provider callback / server verifier only | Strong account-session binding and signature validation | Update authoritative verification state; never member-editable |

## Cross-feature block consistency

A block must be checked before:
- discovery and profile detail access;
- new likes and match creation;
- message send, receive, delivery and notification;
- search indexing and recommendation generation;
- presence, online indicators and profile view notifications.

Existing conversation history and notification cleanup need a documented product and legal decision. Do not infer that the current schema handles messaging or existing conversations.

## Test coverage requirements

For every endpoint, test anonymous, pending-age, rejected-age, review-required, verified-active, suspended and closed accounts as applicable. Include actor/target UUID substitution, duplicate requests, oversized payloads, replayed callbacks, rate-limit exhaustion and both block directions.

**Release gate:** no endpoint is production-ready until its server-side authorization tests pass in an isolated environment and the security review is signed off.
