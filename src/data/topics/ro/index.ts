import type { TopicTranslation } from '../../types.ts'
import { rumaniaRo } from './rumania.ts'
import { estadosUnidosRo } from './estados-unidos.ts'
import { segundaGuerraRo } from './segunda-guerra.ts'
import { espanaSigloXxRo } from './espana-siglo-xx.ts'
import { mundoActualRo } from './mundo-actual.ts'
import { guerraFriaRo } from './guerra-fria.ts'
import { entreguerrasRo } from './entreguerras.ts'
import { granGuerraRo } from './gran-guerra.ts'
import { revolucionRusaRo } from './revolucion-rusa.ts'
import { imperialismoRo } from './imperialismo.ts'
import { industrializacionRo } from './industrializacion.ts'
import { revolucionesLiberalesRo } from './revoluciones-liberales.ts'
import { revolucionFrancesaRo } from './revolucion-francesa.ts'
import { ilustracionRo } from './ilustracion.ts'
import { absolutismoRo } from './absolutismo.ts'
import { revolucionCientificaRo } from './revolucion-cientifica.ts'
import { reformaRo } from './reforma.ts'
import { descubrimientosRo } from './descubrimientos.ts'
import { renacimientoRo } from './renacimiento.ts'
import { crisisSigloXivRo } from './crisis-siglo-xiv.ts'
import { plenaEdadMediaRo } from './plena-edad-media.ts'
import { andalusRo } from './andalus.ts'
import { feudalismoRo } from './feudalismo.ts'
import { islamRo } from './islam.ts'
import { bizancioRo } from './bizancio.ts'
import { romaImperioRo } from './roma-imperio.ts'

/* Traducciones al rumano de los temas (SPEC §20, fase 3). Se van añadiendo tema
   a tema; lo que no está aquí se muestra en español, que es el original. */
export const TOPIC_TRANSLATIONS_RO: Record<string, TopicTranslation> = {
  rumania: rumaniaRo,
  'estados-unidos': estadosUnidosRo,
  'segunda-guerra': segundaGuerraRo,
  'espana-siglo-xx': espanaSigloXxRo,
  'mundo-actual': mundoActualRo,
  'guerra-fria': guerraFriaRo,
  entreguerras: entreguerrasRo,
  'gran-guerra': granGuerraRo,
  'revolucion-rusa': revolucionRusaRo,
  imperialismo: imperialismoRo,
  industrializacion: industrializacionRo,
  'revoluciones-liberales': revolucionesLiberalesRo,
  'revolucion-francesa': revolucionFrancesaRo,
  ilustracion: ilustracionRo,
  absolutismo: absolutismoRo,
  'revolucion-cientifica': revolucionCientificaRo,
  reforma: reformaRo,
  descubrimientos: descubrimientosRo,
  renacimiento: renacimientoRo,
  'crisis-siglo-xiv': crisisSigloXivRo,
  'plena-edad-media': plenaEdadMediaRo,
  andalus: andalusRo,
  feudalismo: feudalismoRo,
  islam: islamRo,
  bizancio: bizancioRo,
  'roma-imperio': romaImperioRo,
}

/** Traducción de un tema, o `null` si ese tema todavía no está traducido. */
export function topicTranslation(slug: string, lang: 'es' | 'ro' = 'es'): TopicTranslation | null {
  if (lang !== 'ro') return null
  return Object.hasOwn(TOPIC_TRANSLATIONS_RO, slug) ? TOPIC_TRANSLATIONS_RO[slug] : null
}
