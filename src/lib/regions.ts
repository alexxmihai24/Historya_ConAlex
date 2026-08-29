import { ES_NAMES } from './country-names.ts'

/* Un `topic.country` no siempre es un país del atlas: hay regiones históricas
   («Península ibérica») y ámbitos que no son un territorio («Europa», «Mundo»).
   Esta tabla dice qué países del globo se encienden por cada uno. Una lista
   vacía significa que el tema no se alcanza desde el globo, solo desde la
   biblioteca; no es un error, es que el tema no tiene un país al que apuntar. */
const REGIONS: Record<string, string[]> = {
  'Península ibérica': ['España', 'Portugal'],
  'Mediterráneo oriental': ['Grecia', 'Turquía'],
  Arabia: ['Arabia Saudí'],
  Europa: [],
  Mundo: [],
  América: ['México', 'Guatemala', 'Perú', 'Bolivia'],
  África: ['Malí', 'Etiopía', 'Zimbabue', 'Tanzania'],
}

const ATLAS_ES = new Set(Object.values(ES_NAMES))

/** Países del globo que corresponden a un `topic.country`. */
export function atlasCountries(country: string): string[] {
  const mapped = REGIONS[country]
  if (mapped) return mapped
  return ATLAS_ES.has(country) ? [country] : []
}

/** Todos los países encendidos por una lista de temas, sin repetir. */
export function coveredCountries(countries: string[]): string[] {
  const set = new Set<string>()
  for (const country of countries) for (const name of atlasCountries(country)) set.add(name)
  return [...set].sort((a, b) => a.localeCompare(b, 'es'))
}
