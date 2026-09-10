/* Ficha de datos de un país del atlas.
 *
 * Por qué existe: el globo dibuja 142 países y solo 22 tienen lección escrita.
 * Al pinchar en cualquiera de los otros 120 no aparecía nada, y esa fue una de
 * las quejas del cliente. Con estos datos, todo país del globo tiene ficha.
 *
 * Los datos son de Wikidata, que es CC0 y por tanto utilizable sin la
 * obligación de share-alike que descartó el texto de Wikipedia (SPEC §13).
 * Viajan empaquetados en `src/data/country-facts.ts`, no se piden en tiempo de
 * ejecución: la PWA funciona sin red.
 *
 * El formateo vive aquí, fuera de los componentes, para poder comprobarlo con
 * `npm test` sin montar Vue.
 */

import { COUNTRY_FACTS } from '../data/country-facts.ts'
import type { CountryFacts } from '../data/types.ts'

export type { CountryFacts }

/** Datos de un país por su nombre en español, o `null` si no es del atlas. */
export function countryFacts(name: string): CountryFacts | null {
  return COUNTRY_FACTS[name] ?? null
}

/** «41454761» → «41,5 M». Las cifras de población no se leen con nueve dígitos. */
export function formatPopulation(value: number | null): string | null {
  if (value === null || !Number.isFinite(value) || value <= 0) return null
  if (value >= 1_000_000) return `${(value / 1_000_000).toLocaleString('es', { maximumFractionDigits: 1 })} M`
  if (value >= 1_000) return `${Math.round(value / 1_000).toLocaleString('es')} mil`
  return value.toLocaleString('es')
}

/** «652230» → «652.230 km²». */
export function formatArea(value: number | null): string | null {
  if (value === null || !Number.isFinite(value) || value <= 0) return null
  return `${Math.round(value).toLocaleString('es')} km²`
}

/** Las filas de datos que la ficha pinta, sin los campos que Wikidata no tiene.
 *
 *  Devolver solo lo que existe evita que la ficha muestre huecos o guiones:
 *  un país sin capital registrada simplemente no enseña esa fila. */
export function factRows(facts: CountryFacts | null): Array<{ k: string; v: string }> {
  if (!facts) return []
  const rows: Array<{ k: string; v: string }> = []
  if (facts.capital) rows.push({ k: 'Capital', v: facts.capital })
  const population = formatPopulation(facts.population)
  if (population) rows.push({ k: 'Población', v: population })
  const area = formatArea(facts.area)
  if (area) rows.push({ k: 'Superficie', v: area })
  if (facts.continent) rows.push({ k: 'Continente', v: facts.continent })
  return rows
}
