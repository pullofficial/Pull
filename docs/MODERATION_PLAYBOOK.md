# pull — moderation operations playbook (draft)

**Status:** planning document only. No moderation queue, staffing, automated detection or enforcement workflow is currently confirmed as operational.

## 1. Operating principles

- Protect people from imminent harm first; preserve dignity and avoid discriminatory enforcement.
- Apply the Community Guidelines consistently and consider context, severity, repetition and credible risk.
- Restrict access to reports and evidence to trained, authorised personnel with audit logging.
- Collect and retain only the information necessary to assess and resolve a case.
- Never promise confidentiality beyond what law and a documented safety process can support.
- Do not ask moderators to investigate suspected crimes independently or contact an alleged offender in a way that could increase risk.

## 2. Proposed severity and response targets

These are proposed internal service targets, not a current staffed service guarantee. Before launch, assign coverage, escalation owners and an on-call rota.

| Priority | Examples | Proposed first review target | Initial handling |
| --- | --- | --- | --- |
| P0 — urgent danger | Credible imminent threat, suspected minor exploitation, trafficking indicators, non-consensual intimate imagery involving a minor | Immediate escalation; staffed coverage must be designed before launch | Restrict exposure where justified, preserve minimum necessary evidence securely, escalate to designated safety lead and follow applicable legal reporting duties |
| P1 — high risk | Stalking, blackmail, coercion, credible threats, intimate-image abuse | Within 1 hour during published coverage | Safety lead review, consider protective restrictions and urgent escalation |
| P2 — serious abuse | Harassment, impersonation, scams, repeated unwanted contact | Within 24 hours | Review report and relevant account history; apply proportionate action |
| P3 — general concern | Spam, misleading profile, non-urgent rule breach | Within 72 hours | Queue for standard review and feedback |

Do not publish these targets until operational staffing and escalation coverage can meet them.

## 3. Intake and triage workflow

1. Accept reports through an authenticated server endpoint; validate reporter identity and target reference.
2. Assign a case ID and timestamp. Prevent reporters from changing moderation status or reading other people's reports.
3. Deduplicate related reports without suppressing new evidence or urgent escalation.
4. Triage severity using the table above; urgent cases bypass the ordinary queue.
5. Give the reviewer only the profile and conversation context necessary for the decision.
6. Record the policy category, evidence references, decision, rationale, reviewer and timestamps in an access-controlled audit trail.
7. Apply an approved action, notify the affected user when safe and appropriate, and provide an appeal route where suitable.
8. Close the case only after required follow-up and escalation steps are complete.

## 4. Possible enforcement actions

Use the least restrictive action that adequately addresses the risk, except where immediate protective action is required.

- No violation found; close with documented rationale.
- Advice or warning for lower-severity first incidents.
- Remove or restrict specific content.
- Temporarily limit discovery or messaging while reviewing a credible risk.
- Temporary suspension for serious or repeated violations.
- Permanent removal for severe abuse, exploitation, credible threats, or repeated serious violations.
- Refer to the designated safety/legal lead for cases that may trigger legal obligations.

A moderator must not independently make legal determinations. Escalate potential law-enforcement requests and statutory reporting duties to qualified legal counsel.

## 5. Evidence and privacy controls

- Never put identity-document images or age-check source documents in ordinary report records.
- Store evidence in a private, access-controlled location; use expiring references rather than copying sensitive material into notes.
- Record only facts needed to explain the decision. Avoid speculative labels and unnecessary sensitive details.
- Define retention and deletion periods with counsel; apply legal holds only through an approved process.
- Log every privileged access, export, status change and evidence action.
- Require least-privilege roles, multi-factor authentication for staff, and periodic access reviews.
- Never expose service-role keys, private evidence URLs or internal notes to clients.

## 6. Suspected underage accounts

- Treat credible indications of a minor as urgent.
- Immediately route the case to the designated safety lead and restrict access as the approved policy requires.
- Do not ask the suspected minor to send identity documents or additional explicit material.
- Do not download, forward or reproduce suspected child sexual abuse material. Follow specialist legal and safety procedures for preservation and reporting.
- Do not restore access based only on a user assertion; any age appeal must use the approved independent age-assurance process.

## 7. Appeals and quality assurance

- Provide a clear appeal channel and a second reviewer for serious account actions, except where notice would create a safety or legal risk.
- Separate the original decision-maker from the appeal reviewer where staffing permits.
- Track reversal rates, time to first review, repeat reports, false positives and unresolved urgent cases.
- Run scenario-based training and periodic audits for bias, consistency and privacy handling.
- Do not use report volume alone as proof that a user violated policy.

## 8. Launch blockers

Before real members are accepted, the product owner must document and evidence:

- A staffed moderation operation with named accountable roles and coverage hours.
- Secure report intake, private case storage, queue access controls and audit logs.
- Working block/report enforcement across profiles and messages.
- Emergency escalation, suspected-minor handling and legally reviewed reporting procedures for each launch market.
- User notifications, appeals, retention and deletion procedures.
- End-to-end tests, abuse simulations and incident-response exercises.

**Current repository status:** the Safety Centre is a browser-only demonstration. It does not send reports, block real accounts, alert staff or provide emergency response. This playbook is not a substitute for legal advice or a live trust-and-safety operation.
