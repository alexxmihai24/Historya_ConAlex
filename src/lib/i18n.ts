/* Idioma de la interfaz: español o rumano (petición del cliente, 14/09/2026).
 *
 * Sin dependencias: un `ref` global, dos diccionarios y una función `t`. Los
 * datos siguen identificándose por su nombre en español (rutas, banderas,
 * temas); estas funciones solo deciden qué texto se pinta.
 *
 * Lo que aún no está traducido cae al español en vez de enseñar la clave. */
import { ref } from 'vue'
import { ES, type MessageKey } from '../i18n/es.ts'
import { RO } from '../i18n/ro.ts'
import { COUNTRY_NAMES_RO, CONTINENT_NAMES_RO, ERA_NAMES_RO } from '../i18n/names-ro.ts'

export type Locale = 'es' | 'ro'
export const LOCALES: Locale[] = ['es', 'ro']

const STORAGE_KEY = 'historya:idioma'
const MESSAGES: Record<Locale, Record<MessageKey, string>> = { es: ES, ro: RO }

/** El elegido antes; si no hay, rumano cuando el navegador está en rumano. */
function initialLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'es' || saved === 'ro') return saved
  } catch {
    /* Sin almacenamiento (navegación privada): se decide por el navegador. */
  }
  return typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ro') ? 'ro' : 'es'
}

export const locale = ref<Locale>(typeof window === 'undefined' ? 'es' : initialLocale())

if (typeof document !== 'undefined') document.documentElement.lang = locale.value

export function setLocale(next: Locale) {
  if (!LOCALES.includes(next)) return
  locale.value = next
  document.documentElement.lang = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* Sin almacenamiento el idioma dura lo que la visita. No es un error. */
  }
}

/** Texto de la interfaz. `{nombre}` se sustituye por `params.nombre`. */
export function t(key: MessageKey, params?: Record<string, string | number>, lang: Locale = locale.value): string {
  const template = MESSAGES[lang][key] ?? ES[key] ?? key
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.hasOwn(params, name) ? String(params[name]) : match,
  )
}

function fromTable(table: Record<string, string>, name: string, lang: Locale) {
  return lang === 'ro' && Object.hasOwn(table, name) ? table[name] : name
}

/** Nombre de un país o región para pintar. La clave sigue siendo el español. */
export function countryLabel(name: string, lang: Locale = locale.value): string {
  return fromTable(COUNTRY_NAMES_RO, name, lang)
}

export function eraLabel(name: string, lang: Locale = locale.value): string {
  return fromTable(ERA_NAMES_RO, name, lang)
}

export function continentLabel(name: string, lang: Locale = locale.value): string {
  return fromTable(CONTINENT_NAMES_RO, name, lang)
}

/** Para `toLocaleString` y `toLocaleDateString`. */
export function intlLocale(lang: Locale = locale.value): string {
  return lang === 'ro' ? 'ro-RO' : 'es-ES'
}
