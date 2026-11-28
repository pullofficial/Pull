# Database security findings — migration review

**Status: review notes, not a penetration-test report.** Findings below come from reading the current SQL migration only. They have not been reproduced against a Supabase project.

## Finding DB-01 — block helper can be called with arbitrary account pairs (mitigation committed; verification pending)

**Severity: review required (potential privacy disclosure)**

The original migration exposed `public.is_blocked_between(user_a, user_b)`, a `SECURITY DEFINER` function with two caller-controlled UUID arguments. That design could disclose whether unrelated accounts had blocked each other. Commit `0fdc0a0` replaces it with `public.is_blocked_with(target_user)`, deriving the caller identity from `auth.uid()`.

The function is needed by row-level security policies to check both directions of a block without being restricted by blocks-table RLS. The current two-argument public function also creates an unnecessary direct-call surface.

**Current status and required verification before production**
- The migration now derives caller identity from `auth.uid()` in the replacement helper.
- Test direct RPC calls to confirm a member cannot query block relationships between two other members. The one-argument helper still returns a boolean for the caller and target, so this needs a deliberate abuse/privacy test.
- Review whether a policy-only alternative can avoid exposing the helper as a callable RPC while preserving bidirectional block enforcement.
- Verify function ownership, schema exposure, grants, default privileges and behaviour under actual Supabase roles.
- Add automated direct-RPC and RLS tests proving one member cannot query block relationships between two other members.

**Do not hot-fix the SQL by guesswork.** The replacement must be reviewed and tested against discovery and like policies in a disposable Supabase project before the migration is changed.

## Additional migration review checks

These are validation requirements, not confirmed vulnerabilities:

1. Confirm table privileges explicitly match the intended RLS policies; RLS does not itself grant or revoke SQL privileges.
2. Confirm authenticated users can update only the intended profile columns through PostgREST, including attempts using alternate update paths.
3. Confirm the security-definer function owner is a restricted role and that its search path remains safe.
4. Confirm no default privileges or exposed RPCs grant unintended access to report contents or moderation data.
5. Confirm blocks suppress visibility and future interactions in every server endpoint added later, not only the current SQL policies.

## Release decision

The current migration remains a development starting point. Do not apply it to production or enable real member features until DB-01 and the additional checks are resolved and independently verified.
