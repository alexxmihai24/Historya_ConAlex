/* Qué se lee en cada nivel educativo.
 *
 * El temario se escribió a nivel universitario y `EducationLevel` admitía los
 * tres valores desde el principio, pero los 35 temas estaban en `Universidad`:
 * filtrar por ESO o Bachillerato en la biblioteca devolvía cero resultados.
 *
 * El modelo es el mismo tema contado con distinta profundidad, no tres temarios
 * sin relación: cada apartado puede tener su versión de ESO y su versión de
 * Bachillerato además del texto universitario. Un apartado sin versión para un
 * nivel sencillamente no se da en ese nivel, que es lo que hace que un tema de
 * ESO tenga menos apartados que el mismo tema en Universidad.
 *
 * Además del texto cambia lo que acompaña a la lección: el debate
 * historiográfico y la bibliografía no son material de ESO.
 *
 * La lógica vive aquí, fuera de los componentes, para poder comprobarla con
 * `npm test` sin montar Vue y porque la usan también los scripts de `scripts/`.
 */

import type { EducationLevel, StudySection } from '../data/types.ts'

/** De menos a más profundidad. El orden importa: lo usa el selector de nivel. */
export const LEVELS: EducationLevel[] = ['ESO', 'Bachillerato', 'Universidad']

/** Nivel al que se abre una lección si el lector no ha elegido ninguno. */
export const DEFAULT_LEVEL: EducationLevel = 'Bachillerato'

/** Texto de un apartado en un nivel, o `null` si ese apartado no se da ahí. */
export function bodyForLevel(section: StudySection, level: EducationLevel): string | null {
  const text =
    level === 'ESO' ? section.bodyEso : level === 'Bachillerato' ? section.bodyBachillerato : section.body
  return text && text.trim().length ? text : null
}

/** Apartados que se leen en un nivel, con su índice original.
 *
 *  El índice se conserva porque las figuras y el progreso guardado apuntan al
 *  apartado del temario completo: si se renumerasen, una figura de la sección 4
 *  aparecería en otra, y el progreso de un lector cambiaría al cambiar de nivel. */
export function sectionsForLevel(sections: StudySection[], level: EducationLevel) {
  return sections
    .map((section, index) => ({ section, index, text: bodyForLevel(section, level) }))
    .filter((entry): entry is { section: StudySection; index: number; text: string } => entry.text !== null)
}

/** Niveles en los que un tema se puede leer entero o en parte.
 *
 *  Se deriva de los apartados en vez de guardarse aparte: un campo `levels`
 *  escrito a mano se queda desfasado en cuanto alguien añade un apartado. */
export function levelsOf(sections: StudySection[]): EducationLevel[] {
  return LEVELS.filter((level) => sectionsForLevel(sections, level).length > 0)
}

/** El debate historiográfico es material universitario. */
export function showsDebates(level: EducationLevel): boolean {
  return level === 'Universidad'
}

/** La bibliografía con fuentes primarias entra en Bachillerato. */
export function showsSources(level: EducationLevel): boolean {
  return level !== 'ESO'
}
