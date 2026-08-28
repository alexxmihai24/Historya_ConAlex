import type { TopicModule } from '../types'

export const descubrimientos: TopicModule = {
  topic: {
    id: 'descubrimientos',
    era: 'Edad Moderna',
    title: 'Expansión atlántica y conquista de América',
    years: '1415–1600',
    country: 'Mundo',
    description: 'Navegación, conquista, colapso demográfico y la primera economía de escala planetaria.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚓',
    color: 'gold',
    summary:
      'Este es probablemente el tema con más mitos por metro cuadrado de todo el temario: que Colón demostró que la Tierra era redonda, que un puñado de españoles derrotó a dos imperios gracias a los caballos y la pólvora, que la conquista fue un acontecimiento y no un proceso de siglos. Ninguna de las tres afirmaciones resiste el examen. Lo que sí ocurrió es de mayor calibre que la leyenda: en menos de un siglo se conectaron por primera vez de forma estable todos los continentes habitados, murió entre el ochenta y el noventa por ciento de la población americana, se puso en marcha la deportación forzosa de doce millones y medio de africanos y la plata de una montaña andina acabó financiando el comercio de China.',
    keyDates: [
      { date: '1415', event: 'Portugal toma Ceuta: comienza la expansión atlántica ibérica.' },
      { date: '1444–1460', event: 'Colonización de Madeira y Azores; primeras plantaciones de azúcar con mano de obra esclava.' },
      { date: '1488', event: 'Bartolomeu Dias dobla el cabo de Buena Esperanza.' },
      { date: '1492', event: 'Primer viaje de Colón; conquista de Granada y expulsión de los judíos.' },
      { date: '1494', event: 'Tratado de Tordesillas: reparto del Atlántico a 370 leguas al oeste de Cabo Verde.' },
      { date: '1498', event: 'Vasco da Gama llega a Calicut por la ruta del Cabo.' },
      { date: '1507', event: 'El mapa de Waldseemüller bautiza «América» el nuevo continente.' },
      { date: '1511', event: 'Sermón de Montesinos en La Española contra el trato a los indígenas.' },
      { date: '1519–1521', event: 'Caída de Tenochtitlan; la viruela llega a la ciudad en 1520.' },
      { date: '1519–1522', event: 'Primera circunnavegación: Magallanes y Elcano.' },
      { date: '1532', event: 'Captura de Atahualpa en Cajamarca, al final de la guerra civil inca.' },
      { date: '1545', event: 'Descubrimiento del cerro de Potosí.' },
      { date: '1550–1551', event: 'Controversia de Valladolid entre Sepúlveda y Las Casas.' },
      { date: '1565–1815', event: 'Galeón de Manila: la plata americana entra directamente en el mercado chino.' },
      { date: '1697', event: 'Caída de Nojpetén, último Estado maya independiente.' },
    ],
    sections: [
      {
        title: 'Por qué Portugal y por qué entonces',
        body: [
          'La explicación escolar —los turcos cortaron la ruta de las especias y hubo que buscar otra— no se sostiene. Las especias siguieron llegando a Venecia por Alejandría durante todo el siglo XV y el XVI; el comercio con el Levante era rentable y funcionaba. Los motivos de la expansión portuguesa fueron otros y son más concretos.',
          'El primero es la continuidad de la guerra contra el islam en el norte de África: la toma de Ceuta en 1415 es una operación de esa lógica, no de la exploración. El segundo es el oro: los portugueses querían acceder por mar a las minas del Sudán occidental, saltándose las caravanas transaharianas y a los intermediarios magrebíes. El tercero, y el más consecuente, es el azúcar. Madeira, las Azores y después Cabo Verde y Santo Tomé fueron los laboratorios donde se ensayó, décadas antes de América, el modelo que definiría el Atlántico: isla despoblada o vaciada, monocultivo de exportación, mano de obra africana esclavizada y capital genovés y flamenco.',
          'La técnica acompañó. La carabela combinaba velamen latino y cuadro, lo que permitía ceñir el viento y navegar de bolina; el timón de codaste dio gobierno fiable; la brújula, el astrolabio náutico y el cuadrante permitieron estimar la latitud; y las cartas portulanas acumularon información contrastada. Pero el hallazgo decisivo no fue un instrumento sino un patrón: la *volta do mar*, es decir, comprender que para volver del sur de África hay que alejarse de la costa hacia el noroeste, entrar en los vientos del oeste y describir un gran arco por el océano abierto. Navegar dejó de ser costear.',
          'Dias dobló el cabo de Buena Esperanza en 1488 y Vasco da Gama alcanzó Calicut en 1498. El modelo portugués en Asia no fue de conquista territorial sino de red: factorías fortificadas en puntos de paso —Goa, Ormuz, Malaca— y un sistema de licencias, el *cartaz*, que obligaba a los barcos locales a pagar por navegar por unas aguas que Portugal se atribuía. Era un imperio de peajes, sostenido por artillería naval y con muy poca población detrás.',
        ].join('\n\n'),
        callout:
          'El azúcar de Madeira y Santo Tomé, con esclavos africanos y capital genovés, funcionó como prototipo de la plantación americana. El modelo estaba probado antes de que Colón zarpara.',
      },
      {
        title: '1492: el error que salió bien',
        body: [
          'Conviene despejar el mito principal. Nadie con formación discutía en 1492 que la Tierra fuera esférica: se sabía desde la Antigüedad, Eratóstenes había medido su circunferencia y los tratados universitarios lo daban por supuesto. La historia del Colón visionario frente a los sabios que temían caer por el borde procede de una biografía novelada de Washington Irving publicada en 1828 y de la propaganda decimonónica sobre el conflicto entre ciencia y religión.',
          'Lo que la junta de Salamanca objetó fue justamente lo contrario: que los cálculos de Colón eran malos. Y lo eran. Colón tomó una estimación del grado terrestre expresada en millas árabes y la trató como si fueran millas italianas, más cortas, y adoptó además la exageración de Marino de Tiro sobre la extensión de Asia hacia el este. El resultado fue situar Japón a unos tres mil setecientos kilómetros al oeste de Canarias, cuando la distancia real es de casi veinte mil. Los expertos que le negaron el apoyo tenían razón; si en medio no hubiera habido un continente, la expedición habría muerto de sed.',
          'Las Capitulaciones de Santa Fe le concedieron títulos y una participación en los beneficios desproporcionada para lo que era, en la práctica, una empresa de riesgo con financiación mixta. Colón hizo cuatro viajes y murió en 1506 sosteniendo que había llegado a Asia. Fueron los relatos atribuidos a Américo Vespucio los que difundieron la idea de un continente desconocido, y el cartógrafo Waldseemüller quien en 1507 imprimió sobre él el nombre «América».',
          'El reparto se hizo entre dos coronas y con arbitraje papal. El Tratado de Tordesillas (1494) trazó una línea a 370 leguas al oeste de Cabo Verde: al este, Portugal; al oeste, Castilla. La consecuencia mejor conocida es Brasil, que quedó del lado portugués. El de Zaragoza (1529) intentó hacer lo propio en el Pacífico, con una imprecisión inevitable porque no existía método para medir la longitud. La primera circunnavegación, iniciada por Magallanes y completada por Elcano en 1522, demostró la unidad de los océanos y el coste de conseguirlo: de doscientos cuarenta hombres regresaron dieciocho.',
        ].join('\n\n'),
      },
      {
        title: 'La conquista: por qué cayeron Tenochtitlan y Cuzco',
        body: [
          'La imagen de unos centenares de españoles derrotando a imperios de millones gracias a la superioridad tecnológica es, según Matthew Restall, el más resistente de los mitos de la conquista. Los factores reales fueron otros y actuaron juntos.',
          'El primero son los aliados indígenas. Cortés no venció con quinientos hombres: venció con decenas de miles de guerreros tlaxcaltecas, totonacas y de otros pueblos sometidos al dominio mexica, para quienes la caída de Tenochtitlan era una oportunidad de liberarse de un tributo aplastante. En el Perú ocurrió algo equivalente con cañaris y huancas. Desde la perspectiva local no fue una invasión extranjera contra un imperio, sino una guerra interna en la que un actor nuevo se alió con los descontentos.',
          'El segundo es la enfermedad. La viruela llegó a Tenochtitlan en 1520, entre el primer asalto fracasado y el asedio definitivo, y mató a una parte enorme de la población y del mando, incluido el tlatoani Cuitláhuac. En los Andes la secuencia fue aún más determinante: una epidemia se adelantó a los propios españoles, causó probablemente la muerte de Huayna Cápac y desencadenó la guerra civil entre Huáscar y Atahualpa, que acababa de terminar cuando Pizarro llegó a Cajamarca en 1532. Se conquistó un Estado que salía de una guerra de sucesión.',
          'El tercero es la fragilidad estructural de los imperios tributarios. Mexicas e incas gobernaban pueblos incorporados por la fuerza en fechas recientes, sin ciudadanía común ni integración administrativa profunda. Capturar la cúspide —Moctezuma, Atahualpa— desarticulaba el sistema con una eficacia que un Estado más integrado no habría permitido.',
          'La tecnología ayudó pero no decidió. El acero, el caballo y las armas de fuego dieron ventaja táctica en campo abierto y valor psicológico inicial, pero los arcabuces del momento eran lentos e inseguros, la pólvora escaseaba y las armaduras acolchadas indígenas resultaron a menudo más prácticas que las de metal en climas tropicales. En terrenos donde la caballería no servía, la ventaja desaparecía.',
          'Y sobre todo, la conquista no fue un acontecimiento sino un proceso de siglos, incompleto en amplias zonas. Los mayas del Petén conservaron un Estado independiente hasta 1697; los mapuches nunca fueron sometidos al sur del Biobío y la corona acabó firmando tratados con ellos; los chichimecas del norte de México sostuvieron cuarenta años de guerra; y regiones enteras de Amazonía y del Chaco quedaron fuera de todo control colonial efectivo. Contar 1521 y 1533 como final es un artificio de manual.',
        ].join('\n\n'),
        callout:
          'La viruela llegó a Tenochtitlan en 1520, entre el asalto fracasado y el asedio final. En los Andes, la epidemia se adelantó a los propios españoles y provocó la guerra civil que Pizarro encontró recién terminada.',
      },
      {
        title: 'El colapso demográfico',
        body: [
          'Cuánta gente vivía en América en 1492 es una de las preguntas más disputadas de la demografía histórica. Las estimaciones han oscilado entre los ocho millones de Kroeber y los más de cien de Dobyns, según se reconstruya a partir de censos coloniales, capacidad de carga agrícola o tasas de mortalidad epidémica. La franja que hoy manejan la mayoría de los especialistas se sitúa entre cuarenta y sesenta millones para todo el continente, con márgenes muy amplios y mucha variación regional.',
          'Sobre la magnitud del descenso hay más acuerdo: entre el ochenta y el noventa y cinco por ciento en el plazo de siglo y medio, con casos documentados de desaparición completa en las Antillas. Es la mayor catástrofe demográfica conocida.',
          'La causa principal fueron las enfermedades del Viejo Mundo en poblaciones sin inmunidad previa: viruela, sarampión, tifus, gripe, y más tarde fiebre amarilla y malaria en las tierras bajas. Pero explicar el colapso solo por los microbios tiene un problema, que Massimo Livi Bacci y otros han señalado con insistencia: convierte una catástrofe histórica en un accidente biológico sin responsables. Los datos muestran que la mortalidad fue sistemáticamente mayor donde el régimen de trabajo era más duro —minas, plantaciones, traslados forzosos de población—, donde la guerra destruyó cosechas y donde las comunidades fueron reagrupadas por la fuerza. Enfermedad y explotación no son causas alternativas: la segunda multiplicó la letalidad de la primera.',
          'La escala fue tal que ha dejado huella ambiental. Un estudio de 2019 propuso relacionar el abandono masivo de tierras cultivadas y su reforestación con la caída de dióxido de carbono atmosférico registrada en los testigos de hielo alrededor de 1610, e incluso con el enfriamiento de la pequeña edad de hielo. La hipótesis está discutida y la magnitud del efecto es objeto de debate, pero da la medida de lo que significó vaciar dos continentes.',
          'La consecuencia inmediata fue una demanda de mano de obra que la propia catástrofe había creado. De ahí, y no de ninguna teoría racial previa, surgió la escala del comercio atlántico de esclavos: alrededor de doce millones y medio de africanos embarcados y unos diez millones y medio desembarcados vivos entre el siglo XVI y el XIX, según la base de datos de expediciones hoy de referencia. Cerca de cinco millones fueron a Brasil, algo más de millón y medio a la América española y unos cuatrocientos mil a Norteamérica.',
        ].join('\n\n'),
      },
      {
        title: 'Gobernar, extraer, discutir',
        body: [
          'La corona castellana construyó en América una administración enorme: dos virreinatos iniciales, audiencias, cabildos, Casa de Contratación en Sevilla y Consejo de Indias. El trabajo indígena se organizó mediante la encomienda —lotes de indígenas asignados a un colono a cambio de su evangelización, con derecho a tributo y trabajo—, sustituida progresivamente por el repartimiento y, en el Perú, por la mita reorganizada por el virrey Toledo en 1573, que obligaba a las comunidades a enviar por turnos una parte de sus hombres a las minas.',
          'El motor económico fue la plata. Potosí se descubrió en 1545 y Zacatecas al año siguiente; el proceso de amalgamación con mercurio, alimentado por la mina de Huancavelica, multiplicó el rendimiento a partir de los años sesenta. Potosí llegó a ser una de las mayores ciudades del mundo, con más de cien mil habitantes a comienzos del siglo XVII, en un altiplano a más de cuatro mil metros.',
          'Esa plata no se quedó en Europa. Una parte sustancial acabó en China, que había monetizado su fiscalidad en plata y pagaba por ella mucho más que el mercado europeo; el galeón de Manila, en servicio entre 1565 y 1815, la llevaba directamente desde Acapulco. Es el primer circuito comercial verdaderamente planetario y funcionó por un arbitraje de precios entre dos extremos del mundo.',
          'En Europa, la llegada masiva de metal coincidió con una inflación prolongada. Earl Hamilton sostuvo en 1934 que la plata americana explicaba la revolución de los precios del siglo XVI. La crítica posterior ha rebajado el peso de ese factor: el crecimiento demográfico, la presión sobre la producción de alimentos y las devaluaciones monetarias explican buena parte del fenómeno, y la cronología no encaja del todo. Se conserva el vínculo, matizado y con otros factores en juego.',
          'Lo singular del caso español es que todo esto se discutió en público y por escrito. En 1511 Antonio de Montesinos preguntó desde el púlpito de La Española con qué derecho se sometía a los indígenas; el resultado fueron las Leyes de Burgos de 1512 y, después, el Requerimiento de 1513, un texto que se leía en castellano ante poblaciones que no lo entendían para dar cobertura jurídica al ataque. Francisco de Vitoria negó en 1539 la validez de la donación papal y del derecho de conquista, y formuló en su lugar un derecho de gentes común a todos los pueblos que se considera un antecedente del derecho internacional. Las Leyes Nuevas de 1542 intentaron suprimir la encomienda y provocaron una rebelión de encomenderos en el Perú. Y en 1550-1551, en Valladolid, Sepúlveda defendió la servidumbre natural de los indígenas frente a Las Casas.',
          'Ese debate se ha usado en las dos direcciones. La leyenda negra construida por las potencias rivales presentó la colonización española como singularmente cruel, ignorando que las demás fueron equivalentes o peores; la reacción apologética utiliza a Vitoria y a Las Casas para sostener que hubo un imperio jurídicamente escrupuloso. Ambas fallan por lo mismo: la discusión existió y las atrocidades también, y las leyes protectoras se incumplieron de forma sistemática allí donde estorbaban a la extracción.',
        ].join('\n\n'),
        callout:
          'El Requerimiento se leía en castellano, a veces desde un barco, ante poblaciones que no podían entenderlo. Su función no era informar: era producir el documento que legitimaba el ataque siguiente.',
      },
      {
        title: 'El intercambio colombino y la primera globalización',
        body: [
          'Alfred Crosby propuso en 1972 el concepto que organiza el balance: el intercambio colombino. La conexión de dos biotas separadas desde el final del Pleistoceno movió especies en ambas direcciones y transformó la agricultura y la dieta del planeta.',
          'Hacia el este viajaron el maíz, la patata, la mandioca, el tomate, el cacao, el tabaco, el chile, el cacahuete y la quinina. Su efecto demográfico fue enorme y llegó tarde: la patata sostuvo el crecimiento del norte de Europa en el siglo XVIII, el maíz y el boniato permitieron cultivar laderas antes improductivas en China, y la mandioca hizo lo propio en África central. Hacia el oeste fueron el trigo, el arroz, la caña de azúcar, el café, los cítricos, el ganado vacuno, el ovino, el cerdo y el caballo, además de los patógenos. El caballo reorganizó por completo las sociedades de las llanuras norteamericanas y de la pampa; el ganado suelto transformó paisajes enteros.',
          'La consecuencia sistémica es que a partir del siglo XVI existe, por primera vez, un mercado que conecta de forma estable América, Europa, África y Asia. Dennis Flynn y Arturo Giráldez propusieron fechar el nacimiento de la globalización en 1571, con la fundación de Manila y el cierre del último tramo del circuito. Kevin O Rourke y Jeffrey Williamson objetaron que globalización implica convergencia de precios entre mercados, y que eso no ocurre hasta el siglo XIX con el transporte a vapor: lo anterior sería comercio de lujo y de arbitraje, no integración. La discusión es sobre la definición, y ambas partes tienen razón dentro de la suya.',
          'Lo que no admite discusión es el balance de costes. La primera economía de escala planetaria se construyó sobre el mayor colapso demográfico documentado, sobre la deportación forzosa de doce millones y medio de personas y sobre un sistema de plantación cuya lógica —monocultivo, trabajo forzado, exportación— seguiría organizando el mundo atlántico durante los tres siglos siguientes.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Volta do mar', definition: 'Maniobra de alejarse de la costa para aprovechar los vientos del oeste en el regreso. Convirtió la navegación de costeo en navegación oceánica.' },
      { term: 'Carabela', definition: 'Buque de casco ligero con velamen latino y cuadro combinados, capaz de ceñir el viento. Instrumento técnico de la expansión atlántica.' },
      { term: 'Feitoría', definition: 'Factoría fortificada portuguesa en un punto de paso comercial. Modelo de imperio de red y peaje, no de ocupación territorial.' },
      { term: 'Cartaz', definition: 'Licencia de navegación que Portugal obligaba a comprar a los barcos asiáticos en aguas del Índico bajo amenaza de captura.' },
      { term: 'Tordesillas', definition: 'Tratado de 1494 que reparte el Atlántico a 370 leguas al oeste de Cabo Verde. De él resulta la pertenencia portuguesa de Brasil.' },
      { term: 'Encomienda', definition: 'Asignación de indígenas a un colono a cambio de evangelizarlos, con derecho a tributo y trabajo. Las Leyes Nuevas de 1542 intentaron abolirla.' },
      { term: 'Mita', definition: 'Turno de trabajo obligatorio exigido a las comunidades andinas, reorganizado por el virrey Toledo en 1573 para abastecer Potosí.' },
      { term: 'Requerimiento', definition: 'Texto de 1513 leído en castellano ante poblaciones que no lo entendían, para dar cobertura jurídica al ataque.' },
      { term: 'Justos títulos', definition: 'Debate sobre qué derecho legitimaba la ocupación. Vitoria rechazó la donación papal y la conquista, y propuso un derecho de gentes común.' },
      { term: 'Intercambio colombino', definition: 'Transferencia recíproca de plantas, animales y patógenos entre continentes separados desde el Pleistoceno. Concepto de Alfred Crosby.' },
      { term: 'Galeón de Manila', definition: 'Línea entre Acapulco y Filipinas (1565-1815) que llevaba plata americana directamente al mercado chino.' },
      { term: 'Revolución de los precios', definition: 'Inflación prolongada del siglo XVI europeo. Hamilton la atribuyó a la plata americana; hoy se reparte con demografía y devaluaciones.' },
      { term: 'Leyenda negra', definition: 'Construcción propagandística de las potencias rivales sobre una crueldad española singular. Su reverso apologético falla por la misma razón.' },
      { term: 'Complejo de plantación', definition: 'Monocultivo de exportación con trabajo forzado, ensayado en Madeira y Santo Tomé antes de trasladarse al Atlántico americano.' },
    ],
    debates: [
      {
        question: '¿Cuánta población había en América en 1492 y qué la mató?',
        positions: [
          {
            school: 'Cifras bajas y explicación epidemiológica',
            argument:
              'Las estimaciones prudentes parten de censos coloniales y dan totales moderados. El colapso se explica por enfermedades del Viejo Mundo en poblaciones sin inmunidad previa: un fenómeno biológico de imposible prevención.',
          },
          {
            school: 'Cifras altas y explicación combinada (Borah y Cook, Livi Bacci)',
            argument:
              'La reconstrucción por capacidad agrícola y tasas epidémicas eleva mucho el total. Y la mortalidad fue sistemáticamente mayor donde el régimen de trabajo era más duro: la explotación multiplicó la letalidad de la enfermedad.',
          },
        ],
        state:
          'La franja de consenso se sitúa hoy entre cuarenta y sesenta millones para todo el continente, con márgenes amplios. Sobre las causas, la explicación exclusivamente microbiana está descartada por despolitizar el proceso: enfermedad y régimen colonial actuaron juntos.',
      },
      {
        question: '¿Cómo se explica la caída de los imperios mexica e inca?',
        positions: [
          {
            school: 'Superioridad tecnológica (relato tradicional)',
            argument:
              'Acero, caballos, armas de fuego y una organización militar superior permitieron a unos centenares de hombres derrotar a Estados de millones de habitantes.',
          },
          {
            school: 'Aliados, epidemias y fractura interna (Restall, 2003)',
            argument:
              'Decenas de miles de guerreros indígenas combatieron del lado español contra los imperios que les imponían tributo; la viruela llegó antes o durante el asalto; y los incas salían de una guerra civil. La tecnología dio ventaja táctica, no decisiva.',
          },
        ],
        state:
          'La explicación multifactorial es la dominante. Se subraya además que la conquista no fue un acontecimiento: los mayas del Petén resistieron hasta 1697 y los mapuches nunca fueron sometidos.',
      },
      {
        question: '¿Empezó la globalización en el siglo XVI?',
        positions: [
          {
            school: 'Sí, en 1571 (Flynn y Giráldez)',
            argument:
              'Con la fundación de Manila se cierra el circuito: la plata americana llega directamente a China y por primera vez todos los continentes habitados quedan conectados por un mercado estable.',
          },
          {
            school: 'No hasta el siglo XIX (O Rourke y Williamson)',
            argument:
              'Globalización significa convergencia de precios entre mercados, y eso no ocurre hasta el transporte a vapor. Lo anterior es comercio de lujo y arbitraje entre mercados que siguen separados.',
          },
        ],
        state:
          'La discrepancia es de definición más que de hechos. Se acepta que el circuito planetario existe desde el siglo XVI y que la integración de precios es muy posterior.',
      },
    ],
    sources: [
      { author: 'Cristóbal Colón', title: 'Diario del primer viaje', year: '1492-1493', kind: 'primaria', note: 'Conservado en el resumen de Las Casas. El original se perdió.' },
      { author: 'Castilla y Portugal', title: 'Tratado de Tordesillas', year: '1494', kind: 'primaria', note: 'Reparte el Atlántico con arbitraje papal, antes de saber qué se estaba repartiendo.' },
      { author: 'Juan López de Palacios Rubios', title: 'Requerimiento', year: '1513', kind: 'primaria', note: 'Fórmula jurídica de sometimiento leída en castellano a poblaciones que no la entendían.' },
      { author: 'Hernán Cortés', title: 'Cartas de relación', year: '1519-1526', kind: 'primaria', note: 'Autojustificación dirigida al emperador por quien había desobedecido a su gobernador.' },
      { author: 'Antonio Pigafetta', title: 'Relación del primer viaje alrededor del mundo', year: 'c. 1525', kind: 'primaria', note: 'Testimonio directo de la circunnavegación: de doscientos cuarenta hombres volvieron dieciocho.' },
      { author: 'Francisco de Vitoria', title: 'Relectio de indis', year: '1539', kind: 'primaria', note: 'Niega la donación papal y el derecho de conquista; formula un derecho de gentes común a todos los pueblos.' },
      { author: 'Bartolomé de las Casas', title: 'Brevísima relación de la destrucción de las Indias', year: '1552', kind: 'primaria', note: 'Denuncia con voluntad de impacto político. Sus cifras se usaron después como munición propagandística.' },
      { author: 'Bernardino de Sahagún', title: 'Códice Florentino, libro XII', year: 'c. 1577', kind: 'primaria', note: 'Relato de la conquista en náhuatl recogido de informantes indígenas. Contrapunto imprescindible a las crónicas españolas.' },
      { author: 'Felipe Guaman Poma de Ayala', title: 'Nueva corónica y buen gobierno', year: '1615', kind: 'primaria', note: 'Mil doscientas páginas y cuatrocientos dibujos: la crítica del sistema colonial desde dentro del mundo andino.' },
      { author: 'Alfred W. Crosby', title: 'The Columbian Exchange', year: '1972', kind: 'estudio', note: 'Introduce la perspectiva biológica y ecológica en la historia de la expansión.' },
      { author: 'Earl J. Hamilton', title: 'American Treasure and the Price Revolution in Spain', year: '1934', kind: 'estudio', note: 'Atribuye la inflación del siglo XVI a la plata americana. Tesis matizada por la investigación posterior.' },
      { author: 'Dennis Flynn y Arturo Giráldez', title: 'Born with a Silver Spoon', year: '1995', kind: 'estudio', note: 'Fechan en 1571 el nacimiento de la globalización, con Manila como bisagra.' },
      { author: 'Matthew Restall', title: 'Seven Myths of the Spanish Conquest', year: '2003', kind: 'estudio', note: 'Desmonta el relato del puñado de conquistadores y restituye el papel de los aliados indígenas.' },
      { author: 'Massimo Livi Bacci', title: 'Conquista. La destrucción de los indios americanos', year: '2005', kind: 'estudio', note: 'Critica la explicación exclusivamente epidemiológica del colapso demográfico.' },
      { author: 'John H. Elliott', title: 'Empires of the Atlantic World', year: '2006', kind: 'estudio', note: 'Comparación sistemática de la colonización española y la británica.' },
      { author: 'Base de datos Slave Voyages', title: 'Trans-Atlantic Slave Trade Database', year: 'en actualización', kind: 'estudio', note: 'Reconstrucción expedición a expedición del comercio atlántico de esclavos.' },
    ],
  },
  questions: [
    {
      id: 'descubrimientos-1', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Por qué no se sostiene que la expansión portuguesa se debiera al corte turco de la ruta de las especias?',
      options: [
        'Porque los turcos nunca controlaron el Mediterráneo oriental',
        'Porque las especias siguieron llegando a Venecia por Alejandría durante todo el siglo XV y XVI',
        'Porque Portugal no comerciaba con especias',
        'Porque la ruta terrestre era más barata que la marítima',
      ],
      answer: 1,
      explanation: 'Los motivos fueron la continuidad de la guerra en el norte de África, el acceso directo al oro sudanés y el azúcar de las islas atlánticas.',
    },
    {
      id: 'descubrimientos-2', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué papel tuvieron Madeira, Azores y Santo Tomé en la historia atlántica?',
      options: [
        'Fueron simples escalas de aguada en la ruta a la India',
        'Sirvieron de bases militares contra los otomanos',
        'Funcionaron como laboratorio del complejo de plantación: monocultivo de azúcar, mano de obra esclava africana y capital genovés y flamenco',
        'Fueron colonias de poblamiento libre sin producción de exportación',
      ],
      answer: 2,
      explanation: 'El modelo estaba probado décadas antes de que Colón zarpara. La plantación americana no se improvisó.',
    },
    {
      id: 'descubrimientos-3', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué era la *volta do mar* y por qué fue decisiva?',
      options: [
        'Un tipo de vela triangular que permitía ceñir el viento',
        'Comprender que para regresar hay que alejarse de la costa y describir un arco por el océano abierto aprovechando los vientos del oeste',
        'Un impuesto sobre el comercio de retorno',
        'La técnica de cálculo de la longitud mediante relojes',
      ],
      answer: 1,
      explanation: 'No fue un instrumento sino un patrón de navegación. Con él, navegar dejó de ser costear.',
    },
    {
      id: 'descubrimientos-4', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué objetó realmente la junta de Salamanca al proyecto de Colón?',
      options: [
        'Que la Tierra era plana y se caería por el borde',
        'Que sus cálculos de distancia eran erróneos: situaba Japón a unos 3.700 km de Canarias cuando la distancia real ronda los 20.000',
        'Que el papa había concedido esas aguas a Portugal',
        'Que no existían barcos capaces de cruzar un océano',
      ],
      answer: 1,
      explanation: 'La esfericidad de la Tierra no se discutía desde la Antigüedad. El mito del Colón visionario procede de una biografía novelada de 1828.',
    },
    {
      id: 'descubrimientos-5', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Cómo llegó a llamarse «América» el nuevo continente?',
      options: [
        'Colón lo bautizó así en su tercer viaje',
        'Es un topónimo indígena adoptado por los cronistas',
        'Lo impuso el Tratado de Tordesillas',
        'El cartógrafo Waldseemüller lo imprimió en su mapa de 1507 a partir de los relatos atribuidos a Vespucio',
      ],
      answer: 3,
      explanation: 'Colón murió en 1506 sosteniendo que había llegado a Asia. Fueron los relatos de Vespucio los que difundieron la idea de un continente desconocido.',
    },
    {
      id: 'descubrimientos-6', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿En qué consistía el modelo imperial portugués en Asia?',
      options: [
        'Conquista territorial y poblamiento masivo',
        'Una red de factorías fortificadas en puntos de paso y un sistema de licencias, el *cartaz*, que cobraba peaje a la navegación local',
        'Alianzas matrimoniales con las dinastías locales',
        'Concesión de encomiendas a los colonos',
      ],
      answer: 1,
      explanation: 'Un imperio de peajes sostenido por artillería naval, con muy poca población detrás.',
    },
    {
      id: 'descubrimientos-7', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Cuál fue el factor humano decisivo en la caída de Tenochtitlan?',
      options: [
        'La superioridad numérica del ejército español',
        'La rendición voluntaria de Moctezuma',
        'Las decenas de miles de guerreros tlaxcaltecas y de otros pueblos sometidos al tributo mexica que combatieron del lado de Cortés',
        'El bloqueo naval del golfo de México',
      ],
      answer: 2,
      explanation: 'Desde la perspectiva local no fue una invasión extranjera contra un imperio, sino una guerra interna en la que un actor nuevo se alió con los descontentos.',
    },
    {
      id: 'descubrimientos-8', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué situación encontró Pizarro al llegar a Cajamarca en 1532?',
      options: [
        'Un imperio en su apogeo y plenamente unificado',
        'Un imperio que salía de una guerra civil entre Huáscar y Atahualpa, desencadenada tras una epidemia que se había adelantado a los españoles',
        'Un territorio despoblado por la sequía',
        'Una alianza inca-mexica ya formada contra los europeos',
      ],
      answer: 1,
      explanation: 'La enfermedad llegó antes que los conquistadores y desarticuló la sucesión. Se conquistó un Estado recién salido de una guerra dinástica.',
    },
    {
      id: 'descubrimientos-9', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Por qué es un artificio fechar el final de la conquista en 1521 y 1533?',
      options: [
        'Porque las fechas correctas son 1519 y 1532',
        'Porque la conquista fue un proceso de siglos e incompleto: el Petén maya resistió hasta 1697 y los mapuches nunca fueron sometidos al sur del Biobío',
        'Porque los imperios mexica e inca se restauraron después',
        'Porque la corona no reconoció esas conquistas hasta el siglo XVIII',
      ],
      answer: 1,
      explanation: 'Los chichimecas sostuvieron cuarenta años de guerra y amplias zonas de Amazonía y Chaco quedaron fuera de todo control colonial efectivo.',
    },
    {
      id: 'descubrimientos-10', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué problema plantea explicar el colapso demográfico americano solo por las epidemias?',
      options: [
        'Que las epidemias están mal documentadas',
        'Que convierte una catástrofe histórica en un accidente biológico sin responsables, cuando la mortalidad fue mayor donde el régimen de trabajo era más duro',
        'Que las enfermedades europeas no eran contagiosas en América',
        'Que la población indígena tenía inmunidad previa a la viruela',
      ],
      answer: 1,
      explanation: 'Minas, plantaciones, traslados forzosos y destrucción de cosechas multiplicaron la letalidad. Enfermedad y explotación no son causas alternativas.',
    },
    {
      id: 'descubrimientos-11', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: 'Según la base de datos de referencia, ¿cuál fue la magnitud del comercio atlántico de esclavos?',
      options: [
        'Unos dos millones de personas embarcadas',
        'Unos doce millones y medio embarcadas y unos diez millones y medio desembarcadas vivas',
        'Unos cincuenta millones embarcadas',
        'No existen cifras reconstruibles',
      ],
      answer: 1,
      explanation: 'Cerca de cinco millones fueron a Brasil, algo más de millón y medio a la América española y unos cuatrocientos mil a Norteamérica.',
    },
    {
      id: 'descubrimientos-12', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué era la mita reorganizada por el virrey Toledo en 1573?',
      options: [
        'Un impuesto sobre la plata extraída',
        'Un turno de trabajo obligatorio que forzaba a las comunidades andinas a enviar parte de sus hombres a las minas',
        'La licencia para comerciar con Filipinas',
        'El reparto de tierras entre los encomenderos',
      ],
      answer: 1,
      explanation: 'Junto con la amalgamación con mercurio de Huancavelica, hizo de Potosí una de las mayores ciudades del mundo a comienzos del siglo XVII.',
    },
    {
      id: 'descubrimientos-13', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Por qué acabó gran parte de la plata americana en China?',
      options: [
        'Porque España pagaba con ella la seda de Europa',
        'Porque China había monetizado su fiscalidad en plata y pagaba por ella mucho más que el mercado europeo',
        'Porque el papa lo estableció en el Tratado de Zaragoza',
        'Porque Portugal controlaba la ruta del Cabo y la desviaba',
      ],
      answer: 1,
      explanation: 'El galeón de Manila la llevaba desde Acapulco entre 1565 y 1815. Es el primer circuito comercial planetario, y funcionó por arbitraje de precios.',
    },
    {
      id: 'descubrimientos-14', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Qué sostuvo Francisco de Vitoria en 1539?',
      options: [
        'Que la donación papal legitimaba plenamente la conquista',
        'Que los indígenas carecían de capacidad jurídica',
        'Que ni la donación papal ni el derecho de conquista eran títulos válidos, y propuso un derecho de gentes común a todos los pueblos',
        'Que la evangelización justificaba cualquier medio',
      ],
      answer: 2,
      explanation: 'Su formulación se considera un antecedente del derecho internacional. Se discutió en Valladolid en 1550-1551 entre Sepúlveda y Las Casas.',
    },
    {
      id: 'descubrimientos-15', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Por qué fallan tanto la leyenda negra como su reverso apologético?',
      options: [
        'Porque ambas exageran el número de víctimas',
        'Porque la discusión jurídica existió y las atrocidades también, y las leyes protectoras se incumplieron donde estorbaban a la extracción',
        'Porque ninguna se basa en fuentes escritas',
        'Porque las dos fueron construidas en el siglo XX',
      ],
      answer: 1,
      explanation: 'La leyenda negra atribuye a España una crueldad singular ignorando a las demás potencias; la apologética usa a Vitoria y Las Casas para tapar la práctica.',
    },
    {
      id: 'descubrimientos-16', era: 'Edad Moderna', topicId: 'descubrimientos', topic: 'Expansión atlántica',
      question: '¿Cuál fue el mayor efecto demográfico del intercambio colombino sobre el Viejo Mundo?',
      options: [
        'La llegada del caballo, que transformó la agricultura europea',
        'La introducción del café y del té en la dieta popular',
        'Patata, maíz y mandioca, que sostuvieron el crecimiento de Europa, China y África central desde el siglo XVIII',
        'La desaparición de las hambrunas en el siglo XVI',
      ],
      answer: 2,
      explanation: 'El efecto llegó tarde: dos siglos después del contacto. Maíz y boniato permitieron cultivar laderas antes improductivas en China.',
    },
  ],
}
