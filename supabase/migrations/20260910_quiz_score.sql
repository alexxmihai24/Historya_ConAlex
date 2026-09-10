-- Historya con Alex · puntuación del contrarreloj guardada en el servidor
-- No reescribe las migraciones anteriores: es una migración nueva, con fecha
-- posterior, tal como exige el historial de cambios del proyecto.

-- 1. Qué se guardaba y qué no ------------------------------------------------
-- `submit_quiz_attempt` guardaba aciertos y total, y los calculaba el servidor.
-- Los puntos, la racha y el tiempo eran de la sesión y se perdían al salir.
--
-- El problema para persistirlos es el de SPEC §10.4: el reloj lo pone el
-- navegador y es falsificable. La solución NO es confiar en el cliente ni
-- renunciar a la función, sino repartir:
--
--   * El ACIERTO lo decide el servidor comparando con question_options.
--   * La RACHA la calcula el servidor a partir del orden de las respuestas.
--     Por eso hace falta conservar el orden, que la versión anterior perdía con
--     un `select distinct`.
--   * El TIEMPO es lo único que aporta el cliente, y va ACOTADO: cada respuesta
--     se recorta a [0, SECONDS_PER_QUESTION]. Lo máximo que gana quien miente
--     es el bonus que habría obtenido respondiendo al instante.
--
-- Nunca se acepta una puntuación enviada por el cliente (SPEC §10.4).
alter table public.quiz_attempts
  add column if not exists points integer not null default 0 check (points >= 0),
  add column if not exists best_streak smallint not null default 0 check (best_streak >= 0),
  add column if not exists seconds_spent integer not null default 0 check (seconds_spent >= 0);

-- 2. Las reglas, en un solo sitio -------------------------------------------
-- Tienen que coincidir con src/lib/scoring.ts. `npm test` compara este archivo
-- con esas constantes y falla si se separan: con las reglas escritas dos veces,
-- es la única manera de que no divergan en silencio.
create or replace function public.quiz_scoring_rules()
returns table (
  base_points integer,
  time_bonus integer,
  max_multiplier integer,
  seconds_per_question integer
)
language sql immutable as $$
  select 100, 5, 4, 40;
$$;

comment on function public.quiz_scoring_rules is
  'Constantes de puntuación del contrarreloj. Deben coincidir con src/lib/scoring.ts; npm test lo comprueba.';

-- 3. El intento, con puntuación calculada aquí -------------------------------
-- Misma firma que antes, así que el cliente anterior sigue funcionando: si no
-- manda `seconds_left`, el bonus por tiempo es cero y los puntos salen solo de
-- aciertos y racha.
create or replace function public.submit_quiz_attempt(
  p_scope text,
  p_answers jsonb
)
returns uuid
language plpgsql security definer set search_path = public as $$
declare
  attempt_id uuid;
  total_count smallint := 0;
  correct_count smallint := 0;
  total_points integer := 0;
  streak smallint := 0;
  top_streak smallint := 0;
  total_seconds integer := 0;
  rules record;
  answer record;
  capped_seconds integer;
  multiplier integer;
begin
  if auth.uid() is null then
    raise exception 'Authentication required' using errcode = '28000';
  end if;
  if jsonb_typeof(p_answers) <> 'array' or jsonb_array_length(p_answers) < 1 or jsonb_array_length(p_answers) > 50 then
    raise exception 'Invalid quiz answers' using errcode = '22023';
  end if;

  select * into rules from public.quiz_scoring_rules();

  -- El orden del array ES el orden de juego: la racha depende de él. Y se
  -- conserva solo la PRIMERA respuesta de cada pregunta: sin esa deduplicación,
  -- enviar cincuenta veces la misma pregunta acertada inflaba la racha y los
  -- puntos sin jugar.
  for answer in
    with numbered as (
      select
        ordinality as position,
        (item ->> 'question_id')::uuid as question_id,
        (item ->> 'option_id')::uuid as option_id,
        coalesce((item ->> 'seconds_left')::numeric, 0) as seconds_left
      from jsonb_array_elements(p_answers) with ordinality as t(item, ordinality)
    ), deduped as (
      select distinct on (question_id) position, question_id, option_id, seconds_left
      from numbered
      order by question_id, position
    )
    select
      d.position,
      (o.is_correct and q.published and t.published and e.published) as is_correct,
      d.seconds_left
    from deduped d
    join public.questions q on q.id = d.question_id
    join public.topics t on t.id = q.topic_id
    join public.eras e on e.id = t.era_id
    join public.question_options o on o.id = d.option_id and o.question_id = q.id
    order by d.position
  loop
    total_count := total_count + 1;
    if answer.is_correct then
      correct_count := correct_count + 1;
      streak := streak + 1;
      if streak > top_streak then
        top_streak := streak;
      end if;
      -- El tiempo es el único dato que viene del cliente, así que se acota.
      capped_seconds := greatest(0, least(floor(answer.seconds_left)::integer, rules.seconds_per_question));
      multiplier := least(rules.max_multiplier, 1 + (streak / 2));
      total_points := total_points + rules.base_points * multiplier + capped_seconds * rules.time_bonus;
      total_seconds := total_seconds + (rules.seconds_per_question - capped_seconds);
    else
      streak := 0;
      total_seconds := total_seconds + rules.seconds_per_question;
    end if;
  end loop;

  if total_count = 0 then
    raise exception 'No valid answers' using errcode = '22023';
  end if;

  -- Red de seguridad redundante: ni con el tiempo acotado al máximo se puede
  -- pasar de aquí. Si alguna vez un cambio rompe el recorte, este techo aguanta.
  total_points := least(
    total_points,
    total_count * (rules.base_points * rules.max_multiplier + rules.seconds_per_question * rules.time_bonus)
  );

  insert into public.quiz_attempts (
    user_id, quiz_scope, total_questions, correct_answers, points, best_streak, seconds_spent
  )
  values (
    auth.uid(), left(trim(p_scope), 100), total_count, correct_count, total_points, top_streak, total_seconds
  )
  returning id into attempt_id;
  return attempt_id;
end;
$$;

revoke all on function public.submit_quiz_attempt(text, jsonb) from public;
grant execute on function public.submit_quiz_attempt(text, jsonb) to authenticated;
revoke all on function public.quiz_scoring_rules() from public;
grant execute on function public.quiz_scoring_rules() to anon, authenticated;

-- 4. Lo que sigue sin poder garantizarse -----------------------------------
-- El tiempo declarado no es verificable: un cliente modificado puede decir que
-- respondió en un segundo. El recorte limita la ganancia, no la elimina. Para
-- cerrarlo del todo haría falta que el servidor marcase el instante en que
-- entrega cada pregunta y comparase con el del envío, lo que obliga a registrar
-- estado por pregunta y por sesión. Se deja documentado a propósito: es una
-- limitación conocida y acotada, no un descuido.
