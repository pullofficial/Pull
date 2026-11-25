# Authentication and age-assurance integration contract

**Status: implementation specification only.** No authentication provider or age-assurance provider is connected. Do not treat these requirements as working product features.

## Trust model

- The browser is untrusted. It may display status but cannot decide that a member is 18+.
- Authentication proves control of an account credential; it does not prove adult age.
- Only a trusted server-side verifier may change the authoritative age-check result.
- Every protected server action must check the current authenticated account and its authoritative verification state. Hiding a button is not access control.
- The service-role key and age-provider secret must remain in server-only deployment configuration.

## Required member lifecycle

1. **Visitor:** can view public information, safety guidance, privacy notice and terms.
2. **Account created:** account exists, but member discovery and interactions remain unavailable.
3. **Age check pending:** member may see only the verification journey and support/safety information.
4. **Verified adult:** member may access permitted member features, subject to visibility, blocks, reports and account status.
5. **Review required / rejected:** protected member actions remain denied; provide a clear appeal or support route without exposing internal fraud signals.
6. **Suspended / closed:** revoke sessions and deny protected actions; preserve only records justified by a documented safety or legal basis.
7. **Deletion requested / completed:** follow the approved retention and deletion plan, including downstream processors and backup lifecycle.

## Provider callback requirements

The server-side callback handler must:

- Verify the provider signature using a secret stored only on the server.
- Reject invalid signatures, expired events and replayed event identifiers.
- Bind the provider result to the exact internal account and verification session created by the server.
- Validate provider event type and allowed status transitions.
- Be idempotent: duplicate delivery must not create duplicate or contradictory state.
- Record minimal audit metadata, not raw identity documents or unnecessary provider payloads.
- Handle provider outages and ambiguous results by keeping access pending or requiring manual review.
- Never accept a client-submitted `verified=true`, age status, provider result or callback payload as proof.

## Session and account security

- Use the selected provider's supported secure session mechanism and rotate/revoke sessions on password reset, account closure and security events.
- Rate-limit signup, login, recovery and verification initiation.
- Use generic login and recovery responses to reduce account enumeration.
- Require verified email or equivalent contact control where appropriate to the selected provider and market.
- Protect state-changing routes against cross-site request forgery where cookie-based sessions are used.
- Do not put access tokens, secrets or verification payloads in URLs, analytics or client logs.
- Provide accessible recovery and support routes without bypassing age assurance.

## Server authorization checklist

Before enabling each route or server action, verify all relevant conditions server-side:

- [ ] Valid authenticated session.
- [ ] Account is active and not suspended or closed.
- [ ] Age-assurance status is verified by the trusted server workflow.
- [ ] Target member is eligible and discoverable where relevant.
- [ ] Neither party has blocked the other where relevant.
- [ ] Rate and abuse limits permit the action.
- [ ] Input is validated and output is minimised for the intended purpose.

## Provider selection and launch gates

Choose providers only after reviewing coverage in every intended market, assurance method, accessibility, false acceptance/rejection handling, privacy terms, subprocessors, data residency, deletion support, callback security, pricing and app-store/payment requirements.

Do not choose a provider solely on a marketing claim or assume one verification method is lawful or sufficient in every country. Obtain legal and privacy review for each launch market.

## Not implemented

The repository currently has no live signup/login integration, provider SDK, callback endpoint, session management, age-check journey, account suspension workflow or server-side authorization layer. The join and login pages are previews only. All checkboxes above remain launch requirements, not completed controls.
