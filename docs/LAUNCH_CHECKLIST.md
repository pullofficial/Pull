# pull — launch readiness checklist

This checklist records work that must be completed before pull accepts real members. A checked item must have evidence, an owner and a review date; a written intention is not proof of implementation.

## 1. Legal and market approval
- [ ] Obtain qualified legal review for the dating / adult-connection product model in each launch country.
- [ ] Confirm minimum-age rules, age-assurance obligations and prohibited-content rules by country.
- [ ] Publish reviewed Terms, Privacy Notice, Community Guidelines and a clear complaint/contact route.
- [ ] Complete GDPR / UK GDPR and applicable US state, Canadian and other local privacy assessments.
- [ ] Define data controller / processor roles, lawful bases, retention periods and international transfer safeguards.
- [ ] Confirm business registration, consumer disclosures, subscription cancellation and refund requirements.
- [ ] Obtain written approval from payment providers for the actual product category before building payment flows.
- [ ] Review Apple App Store and Google Play policies for dating, user-generated content, moderation and age ratings.

## 2. Age assurance and access
- [ ] Select a reputable age-assurance provider after privacy, security and regional coverage review.
- [ ] Enforce age checks server-side before profile discovery, messaging or other member-only functions.
- [ ] Prevent clients from setting or editing their own verified status.
- [ ] Define retry, appeal, false-rejection and account-recovery procedures.
- [ ] Minimise age-check data; do not store identity-document images in the profile database.
- [ ] Test bypass attempts, replay, account sharing and edge cases before launch.
- [ ] Verify the age-verification provider callback is authenticated, replay-resistant and bound to the correct account.

## 3. Trust, safety and moderation
- [ ] Implement working report and block actions across profiles and conversations.
- [ ] Build a staffed moderation queue with documented response targets and escalation paths.
- [ ] Create procedures for threats, stalking, non-consensual imagery, impersonation, scams and suspected minors.
- [ ] Add spam, scraping, harassment and bulk-account rate limits.
- [ ] Provide user controls to unmatch, block, mute and manage unwanted contact.
- [ ] Publish clear rules for consent, prohibited content and repeat-offender enforcement.
- [ ] Test safety workflows end-to-end; preview buttons and policy text do not count as operational tools.
- [ ] Test that likes require both accounts to be age-verified, the target to be discoverable, and neither direction to be blocked.
- [ ] Test both directions of blocking against profile discovery and confirm report submission cannot alter moderation status.

## 4. Privacy and security
- [ ] Complete a threat model and independent security review of database schema, row-level security and server routes.
- [ ] Run automated database-policy tests for self-access, cross-account access, reverse blocks, pending-age accounts and unauthorised report access.
- [ ] Verify that users can only read and change data they are authorised to access.
- [ ] Restrict reports and moderation records to authorised personnel and audited workflows.
- [ ] Keep service-role keys and provider secrets server-side; use managed secret storage.
- [ ] Implement account export, deletion, retention and backup-expiry workflows.
- [ ] Avoid precise public location; document location collection, display and retention.
- [ ] Add monitoring, audit logs, incident response and breach-notification procedures.
- [ ] Test dependency vulnerabilities, authentication abuse and common web security risks.

## 5. Product quality and accessibility
- [ ] Test registration, sign-in, password recovery and account deletion on supported devices.
- [ ] Test keyboard navigation, screen readers, contrast, text scaling and form error messages.
- [ ] Verify responsive layouts on current iOS and Android devices and major browsers.
- [ ] Add clear empty, loading, error and offline states.
- [ ] Test moderation and safety flows in realistic scenarios with trained reviewers.
- [ ] Remove all fictional demo profiles and preview-only controls from production builds.

## 6. Operations and launch
- [ ] Configure production hosting, domain, TLS, backups and environment-specific secrets.
- [ ] Configure production database and review every migration before applying it.
- [ ] Set up support contact, incident ownership, moderation coverage and escalation rota.
- [ ] Confirm analytics are privacy-conscious and do not collect unnecessary sensitive data.
- [ ] Complete payment-provider approval and test billing, cancellation and refunds if subscriptions are offered.
- [ ] Complete store listing, age rating, privacy disclosures and review submissions for mobile apps.
- [ ] Run a limited beta, resolve critical issues and obtain launch sign-off.

## Current status

The repository currently contains a development preview and a starter database migration. Authentication, age assurance, real matching, messaging, moderation, payments and production privacy controls are not confirmed as operational. Do not launch or invite real members until the relevant checks above are evidenced and reviewed.
