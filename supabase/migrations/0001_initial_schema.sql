-- pull👙 initial Supabase schema
-- Apply only after creating a Supabase project and reviewing the security notes.
-- Age verification is provider-attested; never store identity-document images here.

create extension if not exists pgcrypto;

create type public.profile_intention as enum ('casual_dating', 'meet_people', 'meaningful_connection');
create type public.profile_visibility as enum ('discoverable', 'hidden');
create type public.age_check_status as enum ('pending', 'verified', 'rejected', 'review_required');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  bio text not null default '' check (char_length(bio) <= 500),
  city text,
  country_code char(2),
  intention public.profile_intention not null default 'meet_people',
  interests text[] not null default '{}',
  visibility public.profile_visibility not null default 'hidden',
  age_check_status public.age_check_status not null default 'pending',
  age_verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint verified_status_has_timestamp check (age_check_status <> 'verified' or age_verified_at is not null)
);

create table public.likes (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid not null references auth.users(id) on delete cascade,
  target_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint no_self_like check (actor_id <> target_id),
  constraint one_like_per_pair unique (actor_id, target_id)
);

create table public.blocks (
  blocker_id uuid not null references auth.users(id) on delete cascade,
  blocked_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_id),
  constraint no_self_block check (blocker_id <> blocked_id)
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reported_id uuid not null references auth.users(id) on delete cascade,
  category text not null check (category in ('harassment','underage_suspected','scam','impersonation','explicit_content','other')),
  details text not null default '' check (char_length(details) <= 2000),
  status text not null default 'open' check (status in ('open','reviewing','actioned','closed')),
  created_at timestamptz not null default now(),
  constraint no_self_report check (reporter_id <> reported_id)
);

create index profiles_discovery_idx on public.profiles(country_code, intention) where visibility = 'discoverable' and age_check_status = 'verified';
create index likes_target_idx on public.likes(target_id);
create index reports_queue_idx on public.reports(status, created_at);

alter table public.profiles enable row level security;
alter table public.likes enable row level security;
alter table public.blocks enable row level security;
alter table public.reports enable row level security;

-- SECURITY DEFINER helper avoids blocks-table RLS hiding the reverse block direction.
-- Keep the function narrowly scoped, schema-qualified and non-writable by members.
create or replace function public.is_blocked_between(user_a uuid, user_b uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $
  select exists (
    select 1 from public.blocks b
    where (b.blocker_id = user_a and b.blocked_id = user_b)
       or (b.blocker_id = user_b and b.blocked_id = user_a)
  );
$;

revoke all on function public.is_blocked_between(uuid, uuid) from public;
grant execute on function public.is_blocked_between(uuid, uuid) to authenticated;

-- Profiles: members can read verified, discoverable profiles only; owners can read/edit their own.
create policy "members read discoverable verified profiles" on public.profiles
 for select to authenticated
 using (
   (id = auth.uid()) or
   (visibility = 'discoverable' and age_check_status = 'verified'
    and not public.is_blocked_between(auth.uid(), id))
 );

create policy "owners create own profile" on public.profiles
 for insert to authenticated with check (id = auth.uid() and visibility = 'hidden' and age_check_status = 'pending');

create policy "owners update own profile" on public.profiles
 for update to authenticated using (id = auth.uid())
 with check (id = auth.uid());

-- Verification status must be written only by a trusted server-side verifier, not client APIs.
revoke update on public.profiles from authenticated, anon;
grant update (display_name, bio, city, country_code, intention, interests, visibility, updated_at) on public.profiles to authenticated;

create policy "members create own likes" on public.likes
 for insert to authenticated with check (
   actor_id = auth.uid()
   and exists (
     select 1 from public.profiles actor
     where actor.id = auth.uid() and actor.age_check_status = 'verified'
   )
   and exists (
     select 1 from public.profiles target
     where target.id = target_id
       and target.age_check_status = 'verified'
       and target.visibility = 'discoverable'
   )
   and not public.is_blocked_between(auth.uid(), target_id)
 );
create policy "members view likes they sent or received" on public.likes
 for select to authenticated using (actor_id = auth.uid() or target_id = auth.uid());
create policy "members remove own likes" on public.likes
 for delete to authenticated using (actor_id = auth.uid());

create policy "members manage blocks they create" on public.blocks
 for all to authenticated using (blocker_id = auth.uid()) with check (blocker_id = auth.uid());

create policy "members submit reports" on public.reports
 for insert to authenticated with check (
   reporter_id = auth.uid()
   and exists (
     select 1 from public.profiles reporter
     where reporter.id = auth.uid() and reporter.age_check_status = 'verified'
   )
 );
create policy "members view reports they submitted" on public.reports
 for select to authenticated using (reporter_id = auth.uid());

-- Important: keep moderation status changes and age verification in trusted server-side workflows.
-- Do not expose service-role keys in the browser. Add audited admin-only policies before launch.
