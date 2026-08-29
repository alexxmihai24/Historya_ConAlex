// Copia a public/img/flags/ solo las banderas de los países del atlas.
//
//   npm run flags
//
// Las banderas viajan EN EL REPOSITORIO, no de un CDN: la aplicación es una PWA
// y tiene que funcionar sin red (SPEC §14.1). Se copian de `flag-icons`, que es
// una dependencia de desarrollo: en producción no se importa nada del paquete,
// solo se sirven los SVG copiados.
//
// Origen: flag-icons (MIT, Panayiotis Lipiridis). El diseño de una bandera
// nacional no es obra protegida; el archivo concreto sí puede serlo, y por eso
// se anota de dónde sale. La licencia se copia junto a los archivos.
//
// Solo se copian los ~140 países que el atlas Natural Earth 110m dibuja y que
// están en src/lib/country-codes.ts. Copiar los 271 del paquete engordaría el
// repositorio con banderas que ninguna vista puede pedir.

import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { FLAG_CODES } from '../src/lib/country-codes.ts'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = join(root, 'node_modules', 'flag-icons', 'flags', '4x3')
const target = join(root, 'public', 'img', 'flags')

let available
try {
  available = new Set((await readdir(source)).filter((name) => name.endsWith('.svg')))
} catch {
  throw new Error('No se encuentra flag-icons. Ejecuta `npm install` antes de `npm run flags`.')
}

await mkdir(target, { recursive: true })

const missing = []
let copied = 0
for (const code of FLAG_CODES) {
  const file = `${code}.svg`
  if (!available.has(file)) {
    missing.push(code)
    continue
  }
  await copyFile(join(source, file), join(target, file))
  copied += 1
}

await writeFile(
  join(target, 'ORIGEN.md'),
  [
    '# Banderas',
    '',
    'Archivos copiados de [flag-icons](https://github.com/lipis/flag-icons) (MIT,',
    'Panayiotis Lipiridis), carpeta `flags/4x3`. Regenerar con `npm run flags`.',
    '',
    'Se sirven **siempre** con `<img src>` y nunca incrustados en la plantilla: un',
    'SVG es un documento ejecutable y admite `<script>`; dentro de `<img>` el',
    'navegador no ejecuta nada (SPEC §14.1).',
    '',
    'No editar a mano: este directorio se sobrescribe.',
    '',
  ].join('\n'),
  'utf8',
)

console.log(`banderas copiadas: ${copied} de ${FLAG_CODES.length}.`)
if (missing.length) {
  console.warn(`sin archivo en flag-icons: ${missing.join(', ')}`)
  process.exitCode = 1
}
