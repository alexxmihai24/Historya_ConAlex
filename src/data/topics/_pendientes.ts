import type { TopicModule } from '../types'

/**
 * Temas todavía con el contenido corto de la demo inicial.
 * Cada uno se irá sacando de aquí a su propio archivo con lección completa,
 * glosario y banco de preguntas, como en `egipto.ts`.
 */
export const pendientes: TopicModule[] = [
  {
    topic: {
      id: 'renacimiento', era: 'Edad Moderna', title: 'Renacimiento y Humanismo', years: 's. XV–XVI', country: 'Europa',
      description: 'Nuevas ideas, arte y ciencia en la Europa de las ciudades.', duration: '30 min', level: 'Bachillerato', progress: 0, visual: '✦', color: 'plum',
      summary: 'El Renacimiento fue un movimiento cultural con centros diversos. La recuperación crítica de la Antigüedad convivió con profundas transformaciones políticas, religiosas y económicas.',
      keyDates: [
        { date: '1450', event: 'La imprenta de tipos móviles se extiende por Europa.' },
        { date: '1492', event: 'Viaje de Colón al continente americano.' },
        { date: '1517', event: 'Lutero publica sus 95 tesis.' },
        { date: '1543', event: 'Copérnico publica su propuesta heliocéntrica.' },
      ],
      sections: [
        { title: 'Mirar de nuevo los clásicos', body: 'Los humanistas estudiaron las lenguas y textos de Grecia y Roma. Buscaban leerlos en sus versiones más fiables y aplicaban esas herramientas a la educación y la vida cívica.' },
        { title: 'Arte, ciencia y patronazgo', body: 'Las ciudades italianas financiaron artistas y arquitectos. La perspectiva, el estudio de la anatomía y la observación de la naturaleza ampliaron el lenguaje visual de la época.' },
        { title: 'Europa y el mundo', body: 'El periodo coincidió con rutas oceánicas, expansión colonial y contactos violentos entre continentes. Es importante estudiarlo junto a sus consecuencias sociales y culturales.' },
      ],
      concepts: [],
      debates: [],
      sources: [],
    },
    questions: [
      {
        id: 'renacimiento-1', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
        question: 'El Humanismo renacentista colocaba en el centro de su reflexión a…',
        options: ['La vida urbana exclusivamente', 'El ser humano y los textos clásicos', 'La expansión colonial', 'Los gremios medievales'], answer: 1,
        explanation: 'El Humanismo recuperó críticamente los clásicos y revalorizó las capacidades humanas.',
      },
    ],
  },
  {
    topic: {
      id: 'revoluciones', era: 'Edad Contemporánea', title: 'Revoluciones e industrialización', years: '1776–1914', country: 'Europa y América',
      description: 'Cambios políticos, fábricas, derechos y nuevas clases sociales.', duration: '50 min', level: 'Bachillerato', progress: 0, visual: '✺', color: 'red',
      summary: 'Entre finales del siglo XVIII y comienzos del XX, revoluciones políticas e industriales alteraron la manera de trabajar, gobernar y habitar las ciudades.',
      keyDates: [
        { date: '1776', event: 'Declaración de Independencia de Estados Unidos.' },
        { date: '1789', event: 'Inicio de la Revolución francesa.' },
        { date: '1830–1848', event: 'Oleadas revolucionarias en Europa.' },
        { date: '1914', event: 'Comienzo de la Primera Guerra Mundial.' },
      ],
      sections: [
        { title: 'Revoluciones políticas', body: 'Las revoluciones cuestionaron el absolutismo y difundieron ideas de ciudadanía, derechos, nación y soberanía popular. Su aplicación fue desigual y estuvo llena de conflictos.' },
        { title: 'La fábrica y la ciudad', body: 'La industrialización concentró trabajo y población en ciudades crecientes. Aumentó la producción, pero también generó condiciones laborales duras, desigualdad y contaminación.' },
        { title: 'Nuevos movimientos sociales', body: 'Obreros, mujeres, grupos nacionalistas y reformistas organizaron campañas por derechos y representación. Estos movimientos cambiaron de forma duradera el debate público.' },
      ],
      concepts: [],
      debates: [],
      sources: [],
    },
    questions: [
      {
        id: 'revoluciones-1', era: 'Edad Contemporánea', topicId: 'revoluciones', topic: 'Revoluciones',
        question: '¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?',
        options: ['La toma de la Bastilla', 'El Congreso de Viena', 'La batalla de Waterloo', 'La Comuna de París'], answer: 0,
        explanation: 'La toma de la Bastilla, el 14 de julio de 1789, se convirtió en uno de los símbolos de la Revolución.',
      },
    ],
  },
]
