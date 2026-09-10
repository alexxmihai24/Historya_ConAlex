import type { TopicLevels } from '../types.ts'

/* Un texto por apartado, en el mismo orden que `sections` de mesopotamia.ts.
   Cadena vacía = ese apartado no se da en ese nivel. */
export const mesopotamia: TopicLevels = {
  eso: [
    'Mesopotamia significa «entre ríos»: la llanura del Tigris y el Éufrates, en el actual Irak. Llueve muy poco, así que sin regadío no hay cosecha. Pero los ríos se desbordan de forma irregular, no como el Nilo, y el agua de riego deja sal en la tierra si no se drena bien. Cultivar allí exigía canales, diques y mantenimiento constante, y eso solo se consigue organizando el trabajo de mucha gente.',
    'Hacia 3500 a. C., Uruk llegó a tener decenas de miles de habitantes: la primera ciudad grande del mundo. Con tanta gente junta aparecen cosas nuevas: oficios especializados, templos enormes, almacenes y personas que no producen comida sino que administran la que producen otros. La ciudad no nace del comercio ni del azar, sino de la necesidad de gestionar el agua y el grano.',
    'La escritura nace hacia 3300 a. C. en Uruk, y no para contar historias: para llevar cuentas. Las primeras tablillas anotan sacos de cebada y cabezas de ganado. Se escribía con una caña sobre arcilla blanda, dejando marcas en forma de cuña, de ahí el nombre de cuneiforme. Con el tiempo sirvió también para leyes, cartas y literatura, como el Poema de Gilgamesh.',
    '',
    'El Código de Hammurabi, de hacia 1750 a. C., se grabó en una estela de piedra de más de dos metros. Recoge casi trescientas sentencias con la fórmula «si alguien hace esto, entonces le ocurre esto otro». Es famoso por el «ojo por ojo», pero el castigo dependía de la clase social: no era lo mismo dañar a un hombre libre que a un esclavo. No era un código como los actuales, sino una recopilación de casos que mostraba al rey como garante de la justicia.',
    'Durante siglos Mesopotamia fue un mosaico de ciudades independientes que competían y guerreaban entre sí. Hacia 2334 a. C., Sargón de Acad las sometió y creó el primer imperio conocido, con un ejército permanente y gobernadores nombrados desde arriba. Después vinieron otros: Babilonia, Asiria, de nuevo Babilonia. El modelo quedó fijado para milenios: un rey, una capital, tributos y un ejército que los cobra.',
  ],
  bachillerato: [
    [
      'La llanura aluvial del Tigris y el Éufrates es un medio hostil disfrazado de fértil. Las precipitaciones no bastan para el cereal, así que toda la agricultura depende del regadío; pero las crecidas llegan en primavera, tarde para la siembra, y son violentas e imprevisibles, muy distintas de la crecida regular del Nilo.',
      'El regadío trae además un problema propio: el agua evaporada deja sales en el suelo y la tierra pierde productividad si no se drena y se deja en barbecho. Los archivos documentan cómo el trigo fue sustituido por cebada, más tolerante a la sal, en zonas donde el rendimiento caía. Todo esto obliga a coordinar trabajo colectivo de forma permanente, y esa coordinación es la raíz del Estado mesopotámico.',
    ].join('\n\n'),
    [
      'Hacia 3500 a. C. Uruk alcanza una escala sin precedentes: decenas de miles de habitantes, murallas, templos monumentales y un territorio de aldeas dependientes. Se la suele llamar revolución urbana, aunque no fue un episodio breve sino un proceso de siglos.',
      'Lo decisivo no es el tamaño sino la especialización. Aparecen alfareros a tiempo completo, tejedores, metalúrgicos y, sobre todo, administradores: gente que no produce alimentos y que vive del excedente que otros generan. Para que ese sistema funcione hay que registrar quién entrega qué y quién recibe qué, y ahí es donde la contabilidad se vuelve inevitable. La ciudad y la burocracia nacen juntas, no una después de la otra.',
    ].join('\n\n'),
    [
      'La escritura cuneiforme aparece hacia 3300 a. C. como herramienta contable. Sus antecedentes son fichas de arcilla que representaban mercancías; el paso decisivo fue dibujar la ficha sobre la tablilla en lugar de guardarla. Los primeros textos son listas de raciones y entregas, no relatos.',
      'La evolución del sistema es lo interesante: de pictogramas a signos que representan sonidos, lo que permite escribir nombres propios, verbos y, con el tiempo, cualquier idea. Eso convirtió el cuneiforme en el sistema de escritura de varias lenguas distintas durante tres milenios y permitió leyes, tratados, tratados de matemáticas y literatura como el Poema de Gilgamesh. Como la arcilla cocida sobrevive al fuego, se conservan cientos de miles de tablillas: paradójicamente, conocemos mejor la economía de Ur que la de muchas ciudades medievales.',
    ].join('\n\n'),
    [
      'Durante décadas se defendió que la economía mesopotámica estaba controlada casi por completo por el templo, que sería propietario de la tierra y organizador del trabajo. Esa lectura se apoyaba en los archivos de un puñado de templos, que son precisamente los que se excavaron primero y los que más escribían.',
      'Investigaciones posteriores han matizado mucho el cuadro: existía propiedad privada de la tierra, préstamos entre particulares, contratos de arrendamiento y mercaderes que operaban por su cuenta aunque a veces trabajaran para el palacio. Hoy se habla de una economía mixta en la que templo, palacio y particulares coexisten, con un equilibrio que cambia según la época y la ciudad. La lección de método es útil: lo que se conserva no es una muestra neutral de lo que hubo.',
    ].join('\n\n'),
    [
      'El Código de Hammurabi, hacia 1750 a. C., se conserva en una estela de diorita con un relieve en el que el rey recibe las insignias del dios Shamash y casi trescientas sentencias debajo. Su estructura es casuística: «si ocurre A, entonces B». Aplica la ley del talión, pero graduada por estatus, de modo que la misma lesión se castiga distinto según sea la víctima un hombre libre, un dependiente o un esclavo.',
      'El problema es qué era realmente. No hay constancia de que ningún tribunal lo citase: los contratos y las sentencias conservados no lo mencionan. Por eso se discute si era derecho vigente, una recopilación de casos ejemplares o sobre todo un monumento de propaganda que presentaba al rey como pastor justo de su pueblo. Probablemente las tres cosas a la vez, y esa ambigüedad es lo que lo hace interesante.',
    ].join('\n\n'),
    [
      'El paisaje político mesopotámico fue durante siglos un conjunto de ciudades-Estado independientes —Uruk, Ur, Lagash, Kish— que competían por el agua, la tierra de frontera y el prestigio. La guerra entre ellas era endémica y ninguna lograba imponerse de forma duradera.',
      'Hacia 2334 a. C. Sargón de Acad rompe ese equilibrio: somete a las ciudades del sur, coloca gobernadores de confianza, impone una lengua administrativa y mantiene un ejército permanente. Es el primer imperio territorial documentado. Su modelo —capital, tributo, ejército y una ideología que justifica el dominio— se repite después en Ur III, Babilonia y Asiria, y llega hasta los persas. Mesopotamia no inventa solo la ciudad y la escritura: inventa también la forma imperial de gobernar.',
    ].join('\n\n'),
  ],
}
