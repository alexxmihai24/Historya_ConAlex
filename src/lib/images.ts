/* Validación de las rutas de imagen.
 *
 * Requisito no negociable de SPEC §10.10: ninguna URL que venga de la base de
 * datos se pinta sin validar. Las imágenes viajan dentro de `lessons.body`, así
 * que un editor con acceso podría apuntar una `src` a un dominio de terceros; el
 * navegador de cada visitante haría entonces una petición a ese dominio y le
 * entregaría su IP y su `Referer` sin que nadie se entere.
 *
 * Decisión de alojamiento (29/08/2026): las imágenes viven en el repositorio,
 * bajo `public/img/`. La PWA funciona sin red y la CSP puede quedarse en
 * `img-src 'self' data: blob:`, que es lo más estricto posible.
 *
 * Si algún día se pasa a un bucket de Supabase Storage, la allowlist de abajo es
 * el único sitio que hay que tocar, y habrá que añadir ese origen exacto a la
 * CSP de `vercel.json`. Mientras tanto no se acepta ningún origen remoto.
 *
 * Este archivo no importa nada a propósito: `scripts/generate-seed.mjs` lo carga
 * desde Node para validar también AL GUARDAR, no solo al pintar.
 */

/* `import type` se borra al compilar y al ejecutar con el stripper de Node, así
   que esta importación no contradice lo de arriba: no queda nada en tiempo de
   ejecución. */
import type { TopicImage } from '../data/types.ts'

/** Orígenes remotos permitidos. Vacío a propósito: hoy solo se sirve local. */
export const ALLOWED_IMAGE_ORIGINS: readonly string[] = []

/** Rutas locales: bajo /img/, sin recorrido de directorios y con extensión conocida. */
const LOCAL_PATH = /^\/img\/[a-z0-9][a-z0-9._/-]*\.(avif|webp|jpg|jpeg|png|svg)$/

/**
 * Devuelve la ruta si es segura de pintar, y `null` si no lo es.
 * Nunca lanza: una imagen mal escrita deja de mostrarse, no rompe la lección.
 */
export function safeImageSrc(src: unknown): string | null {
  if (typeof src !== 'string' || src.length === 0 || src.length > 300) return null
  // `..` fuera siempre, aunque el patrón ya lo impediría. Barato y explícito.
  if (src.includes('..')) return null
  if (LOCAL_PATH.test(src)) return src
  // Un origen remoto solo pasa si está en la allowlist, y solo por https.
  try {
    const url = new URL(src)
    if (url.protocol !== 'https:') return null
    return ALLOWED_IMAGE_ORIGINS.includes(url.origin) ? url.href : null
  } catch {
    return null
  }
}

/** Los campos de atribución que el pie tiene que mostrar sí o sí (SPEC §14.2). */
const REQUIRED = ['alt', 'author', 'title', 'year', 'source', 'license', 'url'] as const

/**
 * Comprueba que una imagen puede pintarse: ruta segura, tamaño declarado para
 * que la página no dé saltos, y atribución completa.
 * Devuelve el motivo del rechazo, o `null` si está bien.
 */
export function imageProblem(image: Record<string, unknown>): string | null {
  if (!safeImageSrc(image.src)) return `src no permitida: ${String(image.src)}`
  if (!Number.isFinite(image.width) || !Number.isFinite(image.height)) {
    return 'faltan width y height, y sin ellos la página da saltos al cargar'
  }
  for (const field of REQUIRED) {
    if (typeof image[field] !== 'string' || !(image[field] as string).trim()) {
      return `falta ${field}`
    }
  }
  return null
}

/**
 * Filtra una imagen que viene de la base de datos.
 * Devuelve `null` si no es segura o si le falta atribución, de modo que las
 * plantillas nunca tengan que decidir: o hay imagen válida, o no se pinta.
 */
export function safeImage(value: unknown): TopicImage | null {
  if (!value || typeof value !== 'object') return null
  const image = value as Record<string, unknown>
  const src = safeImageSrc(image.src)
  if (!src || imageProblem(image)) return null
  return { ...(image as unknown as TopicImage), src }
}

/** Igual que `safeImage`, para una lista. Las inválidas se descartan en silencio. */
export function safeImages(value: unknown): TopicImage[] {
  if (!Array.isArray(value)) return []
  return value.map(safeImage).filter((image): image is TopicImage => image !== null)
}

/** Línea de atribución del pie. Obligatoria en varias de las licencias admitidas. */
export function imageCredit(image: TopicImage): string {
  const parts = [image.author, image.title, image.year, image.source, image.license]
  return parts.filter(Boolean).join(' · ')
}
