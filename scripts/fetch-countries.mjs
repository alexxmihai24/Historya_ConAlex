// Descarga de Wikidata los datos básicos de los países del atlas y genera
// src/data/country-facts.ts.
//
//   npm run countries
//
// Por qué existe (SPEC §14.7): el globo tiene 142 países y solo 22 tienen
// lección. Al pinchar en cualquiera de los otros 120 no aparecía nada. Con
// estos datos, todo país del atlas tiene ficha: capital, población, superficie
// y continente, más las lecciones que lo mencionen si las hay.
//
// POR QUÉ WIKIDATA Y NO WIKIPEDIA: Wikidata es CC0, dominio público efectivo,
// así que sus datos no arrastran la obligación de share-alike que descartó el
// TEXTO de Wikipedia (SPEC §13). Aun así se cita la fuente en la ficha, que es
// lo correcto aunque la licencia no lo exija.
//
// Los datos se empaquetan en el repositorio, no se piden en tiempo de
// ejecución: la PWA funciona sin red y la CSP no admite conexiones a terceros
// (SPEC §10). El script corre en Node, nunca en el navegador (§14.3.5).

import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { ISO_CODES } from '../src/lib/country-codes.ts'
import { ES_NAMES } from '../src/lib/country-names.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const ENDPOINT = 'https://query.wikidata.org/sparql'
const UA = 'HistoryaConAlex/1.0 (proyecto educativo; contacto via repositorio)'

/* Los códigos alfa-2 de los países que el atlas dibuja. Pedir solo estos evita
   traerse las casi 250 entidades con ISO que hay en Wikidata. */
const CODIGOS = new Set(Object.values(ISO_CODES).map(({ a2 }) => a2.toUpperCase()))

const CONSULTA = `SELECT ?iso ?paisLabel ?capitalLabel ?continenteLabel ?poblacion ?superficie WHERE {
  ?pais wdt:P297 ?iso .
  OPTIONAL { ?pais wdt:P36 ?capital . }
  OPTIONAL { ?pais wdt:P30 ?continente . }
  OPTIONAL { ?pais wdt:P1082 ?poblacion . }
  OPTIONAL { ?pais wdt:P2046 ?superficie . }
  SERVICE wikibase:label { bd:serviceParam wikibase:language "es,en". }
}`

async function consultar() {
  const url = `${ENDPOINT}?format=json&query=${encodeURIComponent(CONSULTA)}`
  for (let intento = 0; intento < 4; intento += 1) {
    const respuesta = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: 'application/sparql-results+json' },
    })
    if (respuesta.ok) return respuesta.json()
    if (respuesta.status !== 429 && respuesta.status < 500) {
      throw new Error(`Wikidata respondió ${respuesta.status}`)
    }
    await new Promise((listo) => setTimeout(listo, 10000 * (intento + 1)))
  }
  throw new Error('Wikidata sigue rechazando la consulta tras cuatro intentos')
}

const numero = (valor) => (valor === undefined ? null : Number(valor))

/* Una etiqueta de Wikidata puede venir como el identificador Q sin traducir si
   no hay etiqueta en español ni en inglés. Eso no se pinta. */
const texto = (valor) => (valor && !/^Q\d+$/.test(valor) ? valor : null)

const datos = await consultar()
const porCodigo = new Map()

for (const fila of datos.results.bindings) {
  const codigo = fila.iso?.value?.toUpperCase()
  if (!codigo || !CODIGOS.has(codigo)) continue
  const anterior = porCodigo.get(codigo)
  const poblacion = numero(fila.poblacion?.value)
  // Los OPTIONAL multiplican filas por país. Se queda la de mayor población,
  // que es la de rango preferente en la práctica, y se completan los huecos.
  if (anterior && (anterior.population ?? 0) >= (poblacion ?? 0)) {
    anterior.capital = anterior.capital ?? texto(fila.capitalLabel?.value)
    anterior.continent = anterior.continent ?? texto(fila.continenteLabel?.value)
    anterior.area = anterior.area ?? numero(fila.superficie?.value)
    continue
  }
  porCodigo.set(codigo, {
    code: codigo.toLowerCase(),
    // El nombre lo pone el atlas, no Wikidata: es el que usan el globo, las
    // rutas y `regions.ts`, y tiene que coincidir exactamente.
    name: null,
    capital: texto(fila.capitalLabel?.value),
    continent: texto(fila.continenteLabel?.value),
    population: poblacion,
    area: numero(fila.superficie?.value),
  })
}

/* Se indexa por el nombre en español del atlas, que es la clave con la que la
   ficha de país y el panel del globo preguntan. */
const porNombre = {}
const sinDatos = []
for (const [ingles, espanol] of Object.entries(ES_NAMES)) {
  const codigo = ISO_CODES[ingles]?.a2?.toUpperCase()
  const ficha = codigo ? porCodigo.get(codigo) : null
  if (!ficha) {
    sinDatos.push(espanol)
    continue
  }
  porNombre[espanol] = { ...ficha, name: espanol }
}

const salida = [
  '// ARCHIVO GENERADO. No editar a mano: los cambios se pierden.',
  '// Fuente: Wikidata (CC0). Regenerar con `npm run countries`.',
  '//',
  '// Wikidata es CC0 y por eso sus datos SÍ se pueden usar, a diferencia del',
  '// texto de Wikipedia, que es CC BY-SA y obligaría a licenciar igual todo el',
  '// contenido derivado (SPEC §13). La ficha cita la fuente de todas formas.',
  '//',
  '// Indexado por el nombre en español del atlas, que es la clave que usan el',
  '// globo, las rutas /pais/:country y src/lib/regions.ts.',
  "import type { CountryFacts } from './types'",
  '',
  'export const COUNTRY_FACTS: Record<string, CountryFacts> = ',
  JSON.stringify(Object.fromEntries(Object.entries(porNombre).sort()), null, 2),
  '',
].join('\n')

await writeFile(join(root, 'src', 'data', 'country-facts.ts'), salida, 'utf8')

console.log(`países con datos: ${Object.keys(porNombre).length} de ${Object.keys(ES_NAMES).length}.`)
if (sinDatos.length) {
  console.warn(`\nsin datos en Wikidata (${sinDatos.length}): ${sinDatos.join(', ')}`)
}
