/* Reglas de puntuación de la partida contrarreloj.
 *
 * Están aquí y no dentro de QuizView por dos motivos:
 *   1. Son la única lógica no trivial del quiz y así se pueden comprobar sin
 *      montar el componente (`npm test`).
 *   2. Cuando se persistan los puntos harán falta las mismas reglas en el
 *      servidor. Tenerlas en un módulo aparte evita que se copien mal.
 *
 * OJO (SPEC §10.4): estos puntos son de la sesión. Lo que se guarda en Supabase
 * son los aciertos, y los calcula el servidor a partir de las respuestas. El
 * reloj lo pone el cliente y es falsificable, así que una puntuación calculada
 * aquí nunca puede aceptarse tal cual en la base de datos.
 */

export const SECONDS_PER_QUESTION = 20
export const LIVES = 3
export const BASE_POINTS = 100
export const TIME_BONUS = 5
export const MAX_MULTIPLIER = 4

/** Cada dos aciertos seguidos sube el multiplicador, hasta ×4. */
export function multiplierFor(streak: number): number {
  return Math.min(MAX_MULTIPLIER, 1 + Math.floor(Math.max(0, streak) / 2))
}

/**
 * Puntos de un acierto. `streak` es la racha YA contando este acierto, y
 * `secondsLeft` lo que quedaba en el reloj al responder.
 */
export function pointsFor(streak: number, secondsLeft: number): number {
  const seconds = Math.min(Math.max(0, secondsLeft), SECONDS_PER_QUESTION)
  return BASE_POINTS * multiplierFor(streak) + seconds * TIME_BONUS
}
