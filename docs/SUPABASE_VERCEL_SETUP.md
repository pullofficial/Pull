# Supabase, GitHub and Vercel setup

This guide describes the intended connection for a private test deployment. It does not mean the application is connected or ready for public registration.

## What each service does

- **GitHub** stores Pull's source code and change history.
- **Vercel** builds and hosts the Next.js website from the GitHub repository.
- **Supabase** provides the database and, once implemented, authentication and other backend services.
- **Backups** protect Supabase data. They are important before storing real data, but a backup is not what connects Supabase to Vercel.

## Recommended order for a safe test

1. Create a separate Supabase project for development/testing. Do not use a production project for experiments.
2. Before applying database changes, review the SQL migration and security findings with a qualified engineer. In particular, the current block-check helper has a documented privacy concern and must be redesigned and tested before real member data is used.
3. Create or connect the Vercel project by importing the GitHub repository `pullofficial/Pull`, using the `main` branch.
4. In Vercel Project Settings → Environment Variables, add the values for the test Supabase project:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` only if a reviewed server-side feature requires it. Never expose it through a `NEXT_PUBLIC_` variable or browser code.
5. Add age-assurance provider secrets only after selecting and reviewing a provider. Keep all provider secrets server-side.
6. Redeploy after changing environment variables. Vercel does not automatically apply new environment values to an already-built deployment.
7. Test authentication, row-level security, authorization, age-assurance callbacks, deletion and backup restoration using test accounts and non-sensitive dummy data.

## Local development

- Copy `.env.example` to `.env.local` on a private development machine and fill it with test-project values.
- Keep `.env.local` out of Git. Never paste keys into chat, issues, commits or screenshots.
- The public anon/publishable key is intended for client use only when paired with correctly tested Row Level Security. The service-role key is highly privileged and server-only.

## Backups and recovery

- Backups are separate from deployment and environment-variable configuration.
- Check the backup and point-in-time recovery options available on the chosen Supabase plan before storing any real user data.
- For a test database, make a documented backup before applying reviewed schema changes and test restoring it into a separate project.
- A backup is not a substitute for security review, access controls, retention rules or a tested recovery procedure.

## Current Pull status

- The repository contains an initial Supabase SQL migration and an `.env.example` file.
- The current `package.json` does not yet include a Supabase client dependency.
- No Supabase project is connected, no credentials are configured, and the migration has not been applied or tested against a live database.
- Login, registration, profile saving, likes, matching, messaging and age assurance are not active.
- Do not open public registration or enter real member data until the security findings are resolved, the database policies are tested, and age assurance and moderation are operational.
