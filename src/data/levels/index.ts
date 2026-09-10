/* Textos de ESO y Bachillerato, un archivo por tema.
 *
 * Viven aparte de `src/data/topics/` a propósito, por el mismo motivo que las
 * imágenes: un archivo de tema son ya 400 líneas, y el temario de cada nivel se
 * escribe y se revisa por su cuenta. `history.ts` los engancha a los apartados.
 *
 * Un tema que no aparezca en esta tabla existe solo en Universidad, que es como
 * se escribió el temario. No es un error: es la cola de trabajo editorial.
 *
 * Al añadir un tema hay que importarlo aquí y comprobar que su array tiene la
 * misma longitud que `sections`. `npm test` lo verifica.
 */

import type { StudySection, TopicLevels } from '../types.ts'
import { prehistoria } from './prehistoria.ts'
import { mesopotamia } from './mesopotamia.ts'
import { egipto } from './egipto.ts'
import { grecia } from './grecia.ts'
import { helenismo } from './helenismo.ts'
import { romaRepublica } from './roma-republica.ts'
import { romaImperio } from './roma-imperio.ts'
import { bizancio } from './bizancio.ts'
import { islam } from './islam.ts'
import { feudalismo } from './feudalismo.ts'
import { andalus } from './andalus.ts'
import { plenaEdadMedia } from './plena-edad-media.ts'
import { crisisSigloXiv } from './crisis-siglo-xiv.ts'
import { renacimiento } from './renacimiento.ts'
import { descubrimientos } from './descubrimientos.ts'
import { reforma } from './reforma.ts'
import { absolutismo } from './absolutismo.ts'
import { revolucionCientifica } from './revolucion-cientifica.ts'
import { ilustracion } from './ilustracion.ts'
import { revolucionFrancesa } from './revolucion-francesa.ts'
import { industrializacion } from './industrializacion.ts'
import { revolucionesLiberales } from './revoluciones-liberales.ts'
import { imperialismo } from './imperialismo.ts'
import { granGuerra } from './gran-guerra.ts'
import { revolucionRusa } from './revolucion-rusa.ts'
import { entreguerras } from './entreguerras.ts'
import { segundaGuerra } from './segunda-guerra.ts'
import { guerraFria } from './guerra-fria.ts'

export const TOPIC_LEVELS: Record<string, TopicLevels> = {
  prehistoria,
  mesopotamia,
  egipto,
  grecia,
  helenismo,
  'roma-republica': romaRepublica,
  'roma-imperio': romaImperio,
  bizancio,
  islam,
  feudalismo,
  andalus,
  'plena-edad-media': plenaEdadMedia,
  'crisis-siglo-xiv': crisisSigloXiv,
  renacimiento,
  descubrimientos,
  reforma,
  absolutismo,
  'revolucion-cientifica': revolucionCientifica,
  ilustracion,
  'revolucion-francesa': revolucionFrancesa,
  industrializacion,
  'revoluciones-liberales': revolucionesLiberales,
  imperialismo,
  'gran-guerra': granGuerra,
  'revolucion-rusa': revolucionRusa,
  entreguerras,
  'segunda-guerra': segundaGuerra,
  'guerra-fria': guerraFria,
}

/** Los apartados de un tema con sus textos de ESO y Bachillerato enganchados.
 *
 *  Está aquí, y no repetida en `history.ts` y en `scripts/generate-seed.mjs`,
 *  porque las dos la necesitan: el navegador para pintar la lección y el seed
 *  para escribirla en la base de datos. Con dos copias, bastaba olvidarse de una
 *  para que la web ofreciera un nivel que la base de datos no tenía. */
export function sectionsWithLevels(topicId: string, sections: StudySection[]): StudySection[] {
  const levels = TOPIC_LEVELS[topicId]
  if (!levels) return sections
  return sections.map((section, index) => ({
    ...section,
    bodyEso: levels.eso?.[index] || undefined,
    bodyBachillerato: levels.bachillerato?.[index] || undefined,
  }))
}
