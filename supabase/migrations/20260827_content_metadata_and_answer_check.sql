-- Historia Con Alex · metadatos de presentación y corrección de quiz
-- No reescribe 20260826_initial_schema.sql: es una migración nueva, con fecha
-- posterior, tal como exige el historial de cambios del proyecto.

-- 1. Metadatos editoriales de las tarjetas de la biblioteca -----------------
-- Nullable: el contenido existente sigue siendo válido sin estos campos hasta
-- que se rellenen. "add column if not exists" hace la migración repetible.
alter table public.topics
  add column if not exists period_label text
    check (char_length(period_label) between 2 and 60);

alter table public.topics
  add column if not exists glyph text
    check (char_length(glyph) between 1 and 8);

alter table public.topics
  add column if not exists accent_color text
    check (accent_color in ('gold', 'blue', 'terracotta', 'green', 'plum', 'red'));

-- 2. Corrección inmediata de una respuesta de quiz ---------------------------
-- El navegador no tiene SELECT sobre questions ni question_options (ver
-- get_quiz_questions más abajo en el esquema inicial), así que no hay forma de
-- mostrar "correcto/incorrecto" + explicación justo tras responder sin esta
-- función. El resultado que cuenta para el usuario se sigue calculando en
-- submit_quiz_attempt; aquí solo se informa de una opción concreta, y es
-- aceptable que el cliente pueda sondear varias antes de enviar el intento.
create or replace function public.check_quiz_answer(
  p_question_id uuid,
  p_option_id uuid
)
returns table (
  is_correct boolean,
  correct_option_id uuid,
  explanation text
)
language sql stable security definer set search_path = public as $$
  select
    (p_option_id = correct.id) as is_correct,
    correct.id as correct_option_id,
    q.explanation
  from public.questions q
  join public.topics t on t.id = q.topic_id and t.published
  join public.eras e on e.id = t.era_id and e.published
  join public.question_options correct on correct.question_id = q.id and correct.is_correct
  where q.id = p_question_id
    and q.published;
$$;
-- Si p_question_id no está publicada (o su tema/era no lo están) la función no
-- devuelve fila. Si p_option_id no pertenece a la pregunta, is_correct da
-- false porque nunca coincide con el id de la opción correcta real.

revoke all on function public.check_quiz_answer(uuid, uuid) from public;
grant execute on function public.check_quiz_answer(uuid, uuid) to anon, authenticated;
