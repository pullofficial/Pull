# Database security findings — migration review

**Status: review notes, not a penetration-test report.** Findings below come from reading the current SQL migration only. They have not been reproduced against a Supabase project.

## Finding DB-01 — block helper can be called with arbitrary account pairs

**Severity: review required (potential privacy disclosure)**

The migration defines `public.is_blocked_between(user_a, user_b)` as a `SECURITY DEFINER` SQL function and grants execution to every authenticated user. Its arguments are caller-controlled UUIDs and its result is a boolean. A signed-in member may therefore be able to call the function directly for pairs of accounts unrelated to themselves and learn whether a block exists between those accounts.

The function is needed by row-level security policies to check both directions of a block without being restricted by blocks-table RLS. The current two-argument public function also creates an unnecessary direct-call surface.

**Required resolution before production**
- Rework the policy helper so its user identity is always derived from `auth.uid()`, never supplied as an arbitrary first argument.
- Review whether the helper can be safely exposed to authenticated callers at all; do not assume changing its signature alone removes the information oracle.
- Consider an alternative policy design that preserves bidirectional block enforcement without exposing relationship data through a general-purpose RPC.
- Verify function ownership, schema exposure, grants, default privileges and behaviour under the actual Supabase roles.
- Add direct RPC tests proving one member cannot query block relationships between two other members.

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
