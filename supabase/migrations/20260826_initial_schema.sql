-- Historia Con Alex · esquema inicial seguro para Supabase
-- Ejecutar en un proyecto nuevo con Supabase CLI o SQL Editor.
-- La web usa únicamente la clave publishable; NUNCA service_role/secret en Vite.

do $$ begin
  create type public.education_level as enum ('eso', 'bachillerato', 'universidad', 'curioso');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.staff_role as enum ('editor', 'admin');
exception when duplicate_object then null;
end $$;

-- Roles separados del perfil. Ningún usuario puede otorgarse privilegios desde el navegador.
create table public.user_roles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role public.staff_role not null,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) between 1 and 80),
  education_level public.education_level not null default 'curioso',
  avatar_url text check (avatar_url is null or avatar_url ~ '^https://'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.eras (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9-]{2,80}$'),
  title text not null check (char_length(title) between 2 and 100),
  sort_order smallint not null unique check (sort_order >= 0),
  start_year integer,
  end_year integer,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.countries (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9-]{2,80}$'),
  title text not null check (char_length(title) between 2 and 100),
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table public.topics (
  id uuid primary key default gen_random_uuid(),
  era_id uuid not null references public.eras(id) on delete restrict,
  country_id uuid references public.countries(id) on delete set null,
  slug text unique not null check (slug ~ '^[a-z0-9-]{2,80}$'),
  title text not null check (char_length(title) between 2 and 160),
  summary text not null check (char_length(summary) between 20 and 1200),
  education_level public.education_level not null default 'curioso',
  estimated_minutes smallint not null check (estimated_minutes between 1 and 240),
  cover_image_url text check (cover_image_url is null or cover_image_url ~ '^https://'),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  title text not null check (char_length(title) between 2 and 160),
  body jsonb not null default '[]'::jsonb check (jsonb_typeof(body) = 'array'),
  position smallint not null default 0 check (position >= 0),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (topic_id, position)
);

create table public.questions (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics(id) on delete cascade,
  prompt text not null check (char_length(prompt) between 10 and 1000),
  explanation text not null check (char_length(explanation) between 10 and 1800),
  difficulty smallint not null default 1 check (difficulty between 1 and 5),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.question_options (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  label text not null check (char_length(label) between 1 and 500),
  position smallint not null check (position between 0 and 10),
  is_correct boolean not null default false,
  unique (question_id, position)
);

create table public.user_preferences (
  user_id uuid not null references public.profiles(id) on delete cascade,
  topic_slug text not null check (topic_slug ~ '^[a-z0-9-]{2,80}$'),
  created_at timestamptz not null default now(),
  primary key (user_id, topic_slug)
);

create table public.learning_progress (
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  completed_sections jsonb not null default '[]'::jsonb check (jsonb_typeof(completed_sections) = 'array'),
  percent_complete smallint not null default 0 check (percent_complete between 0 and 100),
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  quiz_scope text not null check (char_length(quiz_scope) between 1 and 100),
  total_questions smallint not null check (total_questions between 1 and 50),
  correct_answers smallint not null check (correct_answers between 0 and total_questions),
  completed_at timestamptz not null default now()
);

create index topics_published_era_idx on public.topics (era_id) where published;
create index lessons_published_topic_idx on public.lessons (topic_id, position) where published;
create index questions_published_topic_idx on public.questions (topic_id) where published;
create index quiz_attempts_user_completed_idx on public.quiz_attempts (user_id, completed_at desc);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger topics_updated_at before update on public.topics for each row execute function public.set_updated_at();
create trigger lessons_updated_at before update on public.lessons for each row execute function public.set_updated_at();
create trigger questions_updated_at before update on public.questions for each row execute function public.set_updated_at();
create trigger learning_progress_updated_at before update on public.learning_progress for each row execute function public.set_updated_at();

-- Se crea el perfil al registrarse; evita que el cliente pueda elegir un id ajeno.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, nullif(left(new.raw_user_meta_data ->> 'display_name', 80), ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- SECURITY DEFINER evita tener que exponer los roles a la API. La función no acepta
-- ids, por lo que solo puede comprobar el JWT de quien hace la petición.
create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.user_roles
    where user_id = (select auth.uid())
  );
$$;

-- Devuelve preguntas sin la respuesta correcta. No se concede SELECT directo sobre
-- questions ni question_options, lo que impide extraer el solucionario desde el navegador.
create or replace function public.get_quiz_questions(
  p_topic_slug text default null,
  p_limit smallint default 10
)
returns table (
  question_id uuid,
  topic_slug text,
  era_title text,
  prompt text,
  options jsonb
)
language sql volatile security definer set search_path = public as $$
  select available.question_id, available.topic_slug, available.era_title, available.prompt, available.options
  from (
    select q.id as question_id, t.slug as topic_slug, e.title as era_title, q.prompt,
      jsonb_agg(jsonb_build_object('id', o.id, 'label', o.label) order by o.position) as options
    from public.questions q
    join public.topics t on t.id = q.topic_id and t.published
    join public.eras e on e.id = t.era_id and e.published
    join public.question_options o on o.question_id = q.id
    where q.published
      and (p_topic_slug is null or t.slug = p_topic_slug)
    group by q.id, t.slug, e.title, q.prompt
    having count(*) >= 2
  ) available
  order by random()
  limit greatest(1, least(coalesce(p_limit, 10), 20));
$$;

-- El servidor calcula el resultado. La puntuación que envía el navegador nunca se acepta.
create or replace function public.submit_quiz_attempt(
  p_scope text,
  p_answers jsonb
)
returns uuid
language plpgsql security definer set search_path = public as $$
declare
  attempt_id uuid;
  total_count smallint;
  correct_count smallint;
begin
  if auth.uid() is null then
    raise exception 'Authentication required' using errcode = '28000';
  end if;
  if jsonb_typeof(p_answers) <> 'array' or jsonb_array_length(p_answers) < 1 or jsonb_array_length(p_answers) > 50 then
    raise exception 'Invalid quiz answers' using errcode = '22023';
  end if;

  with submitted as (
    select distinct (item ->> 'question_id')::uuid as question_id, (item ->> 'option_id')::uuid as option_id
    from jsonb_array_elements(p_answers) item
  ), marked as (
    select s.question_id, (o.is_correct and q.published and t.published) as is_correct
    from submitted s
    join public.questions q on q.id = s.question_id
    join public.topics t on t.id = q.topic_id
    join public.question_options o on o.id = s.option_id and o.question_id = q.id
  )
  select count(*)::smallint, count(*) filter (where is_correct)::smallint
  into total_count, correct_count
  from marked;

  if total_count is null or total_count = 0 then
    raise exception 'No valid answers' using errcode = '22023';
  end if;

  insert into public.quiz_attempts (user_id, quiz_scope, total_questions, correct_answers)
  values (auth.uid(), left(trim(p_scope), 100), total_count, correct_count)
  returning id into attempt_id;
  return attempt_id;
end;
$$;

-- Reemplaza los intereses de forma atómica: el cliente no borra una lista y la
-- reconstruye en dos peticiones distintas. Tampoco recibe un parámetro user_id.
create or replace function public.replace_user_preferences(p_preferences text[])
returns void
language plpgsql security definer set search_path = public as $$
declare
  preference text;
begin
  if auth.uid() is null then
    raise exception 'Authentication required' using errcode = '28000';
  end if;
  if coalesce(array_length(p_preferences, 1), 0) > 20 then
    raise exception 'Too many preferences' using errcode = '22023';
  end if;
  foreach preference in array coalesce(p_preferences, array[]::text[]) loop
    if preference !~ '^[a-z0-9-]{2,80}$' then
      raise exception 'Invalid preference' using errcode = '22023';
    end if;
  end loop;

  delete from public.user_preferences where user_id = auth.uid();
  insert into public.user_preferences (user_id, topic_slug)
  select auth.uid(), preference_value.slug
  from unnest(coalesce(p_preferences, array[]::text[])) as preference_value(slug)
  on conflict (user_id, topic_slug) do nothing;
end;
$$;

-- RLS y privilegios mínimos. Se activa en TODAS las tablas del esquema public.
alter table public.user_roles enable row level security;
alter table public.profiles enable row level security;
alter table public.eras enable row level security;
alter table public.countries enable row level security;
alter table public.topics enable row level security;
alter table public.lessons enable row level security;
alter table public.questions enable row level security;
alter table public.question_options enable row level security;
alter table public.user_preferences enable row level security;
alter table public.learning_progress enable row level security;
alter table public.quiz_attempts enable row level security;

revoke all on all tables in schema public from anon, authenticated;
revoke all on function public.is_staff() from public;
revoke all on function public.get_quiz_questions(text, smallint) from public;
revoke all on function public.submit_quiz_attempt(text, jsonb) from public;
revoke all on function public.replace_user_preferences(text[]) from public;
grant select on public.eras, public.countries, public.topics, public.lessons to anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select on public.user_preferences to authenticated;
grant select, insert, update on public.learning_progress to authenticated;
grant select on public.quiz_attempts to authenticated;
grant execute on function public.is_staff() to anon, authenticated;
grant execute on function public.get_quiz_questions(text, smallint) to anon, authenticated;
grant execute on function public.submit_quiz_attempt(text, jsonb) to authenticated;
grant execute on function public.replace_user_preferences(text[]) to authenticated;

create policy "users read own profile" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "users update own profile" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "published eras readable" on public.eras for select to anon, authenticated using (published or public.is_staff());
create policy "published countries readable" on public.countries for select to anon, authenticated using (published or public.is_staff());
create policy "published topics readable" on public.topics for select to anon, authenticated using (published or public.is_staff());
create policy "published lessons readable" on public.lessons for select to anon, authenticated using (published or public.is_staff());
create policy "users read own preferences" on public.user_preferences for select to authenticated using ((select auth.uid()) = user_id);
create policy "users read own learning progress" on public.learning_progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "users add own learning progress" on public.learning_progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "users update own learning progress" on public.learning_progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "users read own quiz attempts" on public.quiz_attempts for select to authenticated using ((select auth.uid()) = user_id);

-- No hay INSERT/UPDATE/DELETE de contenido con la clave de navegador.
-- La publicación se realiza desde el panel de Supabase o un backend seguro con una clave secreta.
