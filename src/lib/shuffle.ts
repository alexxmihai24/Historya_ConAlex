/* Barajado de las opciones de una pregunta.
 *
 * Por qué existe: el banco de preguntas se escribió tema a tema y la respuesta
 * correcta quedó en la segunda posición en el 85 % de las 555 preguntas. Servidas
 * en el orden del archivo, la respuesta era casi siempre la «b» y el quiz se podía
 * aprobar sin leer el enunciado.
 *
 * Se baraja al servir, no en los datos, por tres motivos:
 *   1. Arregla a la vez el contenido local y el que viene de Supabase, sin tener
 *      que reescribir 555 preguntas ni volver a sembrar la base de datos.
 *   2. La corrección va por `id` de opción, nunca por posición, así que cambiar
 *      el orden no puede romperla. La letra A/B/C/D la pone QuizView al pintar.
 *   3. Cada intento sale en un orden distinto, que para repasar es mejor.
 *
 * OJO: esto es orden de presentación, no una medida de seguridad. No protege la
 * respuesta correcta y no debe usarse como si lo hiciera: de eso se encargan
 * `get_quiz_questions` y `check_quiz_answer`, que corrigen en el servidor y no
 * exponen cuál es la buena (SPEC §10.3). Por eso `Math.random` basta aquí; si
 * algún día hiciera falta un barajado impredecible por un tercero, habría que
 * cambiarlo por `crypto.getRandomValues`.
 */

/** Fisher-Yates. Devuelve una copia: no toca el array que recibe. */
export function shuffled<T>(items: readonly T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}
