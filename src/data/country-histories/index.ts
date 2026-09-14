import type { CountryHistory } from '../types.ts'
import { EUROPA } from './europa.ts'
import { ASIA } from './asia.ts'
import { AFRICA } from './africa.ts'
import { AMERICA } from './america.ts'
import { EUROPA_RO } from './ro/europa.ts'
import { ASIA_RO } from './ro/asia.ts'
import { AFRICA_RO } from './ro/africa.ts'
import { AMERICA_RO } from './ro/america.ts'

/* Historia breve de cada país del atlas, por su nombre en español (ES_NAMES).
   Viaja en el paquete como los datos de Wikidata: la PWA funciona sin red. */
export const COUNTRY_HISTORIES: Record<string, CountryHistory> = { ...EUROPA, ...ASIA, ...AFRICA, ...AMERICA }

/* Traducción rumana, por fases (SPEC §20). Un país que aún no está traducido
   se muestra en español en vez de quedarse sin historia. */
export const COUNTRY_HISTORIES_RO: Record<string, CountryHistory> = { ...EUROPA_RO, ...ASIA_RO, ...AFRICA_RO, ...AMERICA_RO }

export function countryHistory(name: string, lang: 'es' | 'ro' = 'es'): CountryHistory | null {
  if (lang === 'ro' && Object.hasOwn(COUNTRY_HISTORIES_RO, name)) return COUNTRY_HISTORIES_RO[name]
  return Object.hasOwn(COUNTRY_HISTORIES, name) ? COUNTRY_HISTORIES[name] : null
}
