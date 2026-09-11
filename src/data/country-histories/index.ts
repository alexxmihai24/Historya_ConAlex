import type { CountryHistory } from '../types.ts'
import { EUROPA } from './europa.ts'
import { ASIA } from './asia.ts'
import { AFRICA } from './africa.ts'
import { AMERICA } from './america.ts'

/* Historia breve de cada país del atlas, por su nombre en español (ES_NAMES).
   Viaja en el paquete como los datos de Wikidata: la PWA funciona sin red. */
export const COUNTRY_HISTORIES: Record<string, CountryHistory> = { ...EUROPA, ...ASIA, ...AFRICA, ...AMERICA }

export function countryHistory(name: string): CountryHistory | null {
  return Object.hasOwn(COUNTRY_HISTORIES, name) ? COUNTRY_HISTORIES[name] : null
}
