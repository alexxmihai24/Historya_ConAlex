import type { TopicModule } from '../types.ts'

export const chinaImperial: TopicModule = {
  topic: {
    id: 'china-imperial',
    era: 'Edad Media',
    title: 'China imperial',
    years: '221 a. C.–1912',
    country: 'China',
    description: 'Dos mil años de un Estado burocrático que se reconstruyó una y otra vez, fue la economía más avanzada del mundo y perdió esa posición en el siglo XIX.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '龍',
    color: 'red',
    summary:
      'Ningún otro Estado del mundo ha durado tanto ni se ha reconstruido tantas veces sobre los mismos principios. Desde la unificación de Qin en 221 a. C. hasta la abdicación del último emperador en 1912, China mantuvo una fórmula reconocible: un emperador con mandato celestial, una burocracia reclutada por examen, un sistema fiscal sobre el campesinado y una ideología de Estado de raíz confuciana. Dentro de esa continuidad hubo transformaciones enormes: la revolución económica de la época Song, con papel moneda, siderurgia masiva e imprenta cuatro siglos antes que Gutenberg; la incorporación al imperio de conquistadores esteparios que lo gobernaron sin disolverse en él; y una crisis del siglo XIX que no fue simple decadencia interna, sino el choque entre un sistema agrario de enorme escala y unas potencias industriales que impusieron sus condiciones por la fuerza.',
    keyDates: [
      { date: '221 a. C.', event: 'Qin Shi Huang unifica los Reinos Combatientes: escritura, pesos, medidas y ejes de carro estandarizados.' },
      { date: '206 a. C.–220 d. C.', event: 'Dinastía Han. Confucianismo como ideología de Estado y apertura de las rutas de la seda.' },
      { date: '220–589', event: 'Fragmentación de los Seis Reinos y expansión del budismo procedente de Asia central.' },
      { date: '589–618', event: 'Reunificación bajo los Sui. Construcción del Gran Canal que une el Yangtsé con el norte.' },
      { date: '618–907', event: 'Dinastía Tang: apogeo cosmopolita, sistema de exámenes consolidado y capital, Changan, con un millón de habitantes.' },
      { date: '960–1279', event: 'Dinastía Song: papel moneda, brújula, pólvora, imprenta de tipos móviles y una economía urbana sin igual en el mundo.' },
      { date: '1279–1368', event: 'Dinastía Yuan mongola. China integrada en un imperio euroasiático y visitada por viajeros como Marco Polo.' },
      { date: '1368–1644', event: 'Dinastía Ming: restauración han, Ciudad Prohibida y expediciones navales de Zheng He entre 1405 y 1433.' },
      { date: '1644', event: 'Los manchúes toman Pekín y fundan la dinastía Qing, la última del imperio.' },
      { date: '1683–1799', event: 'Alto Qing: duplicación de la población, expansión hasta Asia central y prosperidad bajo Kangxi y Qianlong.' },
      { date: '1839–1842', event: 'Primera Guerra del Opio y Tratado de Nankín: comienzo de los tratados desiguales.' },
      { date: '1850–1864', event: 'Rebelión Taiping, la guerra civil más letal del siglo XIX, con entre veinte y treinta millones de muertos.' },
      { date: '1911–1912', event: 'Revolución Xinhai, abdicación de Puyi y proclamación de la República.' },
    ],
    sections: [
      {
        title: 'La invención del imperio: Qin y Han',
        body: [
          'El Estado de Qin ganó la guerra de los Reinos Combatientes aplicando una doctrina hoy llamada legismo: leyes públicas y uniformes, castigos severos, recompensa por mérito militar y agrícola, y desconfianza expresa hacia la moral como fundamento del gobierno. Shang Yang y Han Feizi son sus formuladores. Sobre esa base, Qin Shi Huang unificó en 221 a. C. la escritura, los pesos, las medidas y hasta el ancho de los ejes de carro, y sustituyó los señoríos hereditarios por comandancias administradas por funcionarios nombrados.',
          'El imperio Qin duró quince años y el modelo, dos milenios. La dinastía Han, que lo sucedió, conservó la maquinaria administrativa legista y le añadió una legitimación confuciana: el gobernante debía dar ejemplo moral, los ritos ordenaban la sociedad y el estudio de los clásicos formaba a los servidores del Estado. Esa combinación, a la que un historiador llamó confucianismo por fuera y legismo por dentro, es la fórmula china de gobierno.',
          'La pieza ideológica central es el mandato del Cielo, anterior a Qin pero fijada entonces. El Cielo confiere la autoridad a una dinastía mientras esta gobierne con justicia y la retira cuando no lo hace; las inundaciones, las hambrunas y las revueltas se leen como señales de esa retirada. Es una doctrina de legitimación y a la vez de justificación de la rebelión: permite que un campesino victorioso funde una dinastía legítima, como ocurrió con los Han y con los Ming.',
          'El Estado Han construyó las instituciones duraderas: censo de población y catastro para recaudar, monopolios estatales sobre la sal y el hierro, academia imperial para formar funcionarios y expansión militar hacia Asia central que abrió lo que después se llamaría la ruta de la seda. Sima Qian escribió en ese contexto las Memorias históricas, que fijaron el modelo de historiografía dinástica que se seguiría durante dos mil años.',
          'La caída de los Han en 220 abrió casi cuatro siglos de división, invasiones esteparias y reinos efímeros. Fue también el período de mayor transformación religiosa: el budismo llegó desde Asia central, se tradujo a un vocabulario chino y arraigó en todas las capas sociales, mientras el taoísmo se organizaba como iglesia. La idea de que China es un espacio culturalmente homogéneo se desmiente aquí: la síntesis posterior es el resultado de esa mezcla, no su punto de partida.',
        ].join('\n\n'),
        callout:
          'El mandato del Cielo funciona en los dos sentidos: legitima al que gobierna y autoriza a derribarlo. Es una teoría del poder que incorpora su propia cláusula de revolución.',
      },
      {
        title: 'Sui, Tang y el Estado de los exámenes',
        body: [
          'La reunificación bajo los Sui, a finales del siglo VI, se sostuvo sobre una obra material decisiva: el Gran Canal, que conectó el arroz del Yangtsé con las capitales y los ejércitos del norte y resolvió el problema logístico de gobernar un territorio continental. Costó una movilización de trabajo forzoso enorme, contribuyó a derribar a la dinastía que lo construyó y sostuvo a todas las siguientes.',
          'La dinastía Tang, entre 618 y 907, fue el período más cosmopolita de la historia china. Changan, la capital, con cerca de un millón de habitantes, albergaba comunidades sogdianas, persas, turcas, coreanas y japonesas, templos nestorianos, zoroástricos y maniqueos, y un comercio que llegaba por tierra y por mar. La poesía de Li Bai y Du Fu, la cerámica y la pintura de esa época se convirtieron en el canon clásico. Una mujer, Wu Zetian, gobernó como emperatriz por derecho propio, caso único.',
          'El sistema de exámenes, iniciado bajo los Sui y consolidado en época Tang y sobre todo Song, es la institución más característica del Estado chino. Reclutaba funcionarios mediante pruebas escritas sobre los clásicos confucianos, abiertas en principio a cualquier varón libre. No produjo una meritocracia igualitaria, porque preparar a un candidato exigía años de ocio y maestros costosos, pero sí una élite de gobierno definida por la cultura letrada y no por la sangre, algo que no existía en ningún otro imperio de la época.',
          'La rebelión de An Lushan, a partir de 755, mató o desplazó a millones de personas y quebró el sistema fiscal y militar Tang. El imperio sobrevivió siglo y medio más con un poder cada vez más delegado en gobernadores militares regionales, y su caída en 907 produjo otro período breve de división. La lección estructural se repetiría: el equilibrio entre el centro burocrático y los mandos militares de frontera fue siempre el punto débil del sistema.',
          'Ese período legó además una organización religiosa y cultural que se difundió por Asia oriental. Japón, Corea y Vietnam adoptaron la escritura china, el modelo administrativo, el budismo en su versión sinizada y el canon confuciano, creando un espacio cultural común que explica buena parte de la historia posterior de la región.',
        ].join('\n\n'),
      },
      {
        title: 'La revolución económica Song',
        body: [
          'Entre los siglos X y XIII, bajo la dinastía Song, China vivió una transformación económica que no tiene paralelo contemporáneo en ninguna otra parte del mundo. La población superó los cien millones, el arroz de ciclo corto importado de Champa permitió dos cosechas anuales en el sur, la producción de hierro alcanzó niveles que Europa no igualaría hasta el siglo XVIII, y una red de canales y mercados integró regiones enteras en una economía comercial.',
          'Las innovaciones técnicas del período son las que Joseph Needham catalogó en su obra monumental: brújula magnética aplicada a la navegación, pólvora con uso militar, imprenta de tipos móviles cuatro siglos antes que Gutenberg, esclusas de canal, relojes astronómicos mecánicos, papel moneda emitido por el Estado. Las ciudades Song, con Kaifeng y después Hangzhou por encima del millón de habitantes, tenían gremios, restaurantes, teatros y mercados nocturnos que asombraron a los viajeros extranjeros.',
          'La estructura política acompañó ese cambio. Los Song reforzaron el gobierno civil sobre el militar, ampliaron el sistema de exámenes hasta convertirlo en la vía principal de acceso al poder e imprimieron los clásicos, lo que multiplicó el número de letrados. El neoconfucianismo de Zhu Xi reorganizó la doctrina como una filosofía completa, con metafísica y programa de estudio, y su versión de los clásicos se convirtió en el temario oficial de los exámenes hasta 1905.',
          'La pregunta obvia es por qué esa economía no produjo una revolución industrial. Mark Elvin propuso la trampa del alto nivel de equilibrio: una agricultura tan productiva y una mano de obra tan abundante y barata que no había incentivo para sustituir trabajo por máquinas. Otros señalan la pérdida del norte a manos de los yurchen en 1127, la presión militar constante y la reorientación de los recursos hacia la defensa. La discusión sigue viva y es inseparable del debate sobre la Gran Divergencia.',
          'Los Song cayeron ante los mongoles en 1279 tras décadas de resistencia. La dinastía Yuan integró China en el mayor imperio terrestre de la historia, reabrió las rutas euroasiáticas, trajo administradores extranjeros y suspendió durante décadas los exámenes, marginando a la élite letrada. Fue también la China que describieron viajeros como Marco Polo o Ibn Battuta, y la puerta por la que la tecnología china llegó a Occidente.',
        ].join('\n\n'),
        callout:
          'La imprenta de tipos móviles, la brújula, la pólvora y el papel moneda son todos anteriores al año 1300 en China. La pregunta histórica no es por qué China no innovó, sino por qué esa innovación no produjo el mismo desenlace que en Europa quinientos años después.',
      },
      {
        title: 'Ming: restauración, flotas y clausura',
        body: [
          'La dinastía Ming se fundó en 1368 tras la expulsión de los mongoles por un antiguo campesino y monje, Zhu Yuanzhang, y se presentó como restauración de un orden han auténtico. Reconstruyó el sistema de exámenes, reforzó el control sobre la aldea mediante registros fiscales y de trabajo, trasladó la capital a Pekín y construyó allí la Ciudad Prohibida. También convirtió la Gran Muralla en la obra defensiva monumental que hoy se visita, muy posterior a los tramos de época Qin.',
          'Entre 1405 y 1433 el eunuco Zheng He dirigió siete expediciones navales por el sudeste asiático, la India, el golfo Pérsico y la costa oriental de África, con flotas de centenares de naves y decenas de miles de hombres, y con buques mucho mayores que cualquier cosa que Europa botara hasta el siglo XIX. No fueron viajes de conquista ni de exploración comercial, sino despliegues de prestigio destinados a integrar Estados en el sistema tributario chino.',
          'La suspensión de esas expediciones se ha usado a menudo como prueba de un rechazo chino a la apertura, pero la explicación es más concreta. Costaban una fortuna, no producían ingresos, servían al partido de los eunucos frente a la burocracia letrada que controlaba el tesoro, y la prioridad estratégica volvió al norte cuando la amenaza mongola se reactivó, con el emperador capturado en batalla en 1449. Las prohibiciones marítimas posteriores tampoco cerraron el comercio: lo empujaron a manos privadas y a menudo ilegales.',
          'De hecho la China Ming del siglo XVI estaba profundamente conectada con la primera economía global. La plata americana, llegada por Manila desde 1571 y a través del comercio portugués, entró en cantidades enormes porque China la valoraba más que ningún otro mercado, y el Estado terminó convirtiendo sus impuestos a pago en plata. Timothy Brook ha descrito esa sociedad de comercio, lujo y ansiedad moral en un libro que se lee como un retrato de época.',
          'Los Ming cayeron en 1644 por una combinación clásica: crisis fiscal, enfriamiento climático con hambrunas, epidemias, rebeliones campesinas que tomaron Pekín y una frontera norte que un general abrió a los manchúes para combatir a los rebeldes. El último emperador Ming se ahorcó en el palacio y una dinastía extranjera ocupó el trono por segunda vez.',
        ].join('\n\n'),
      },
      {
        title: 'Los Qing: apogeo y crisis',
        body: [
          'Los manchúes eran una confederación de la frontera nororiental que había construido un Estado antes de conquistar China, con su propia escritura, su organización militar en estandartes y una experiencia de gobierno sobre poblaciones mixtas. Gobernaron el imperio durante casi tres siglos mediante una fórmula dual: se presentaron como emperadores confucianos ante los chinos han y a la vez como kanes ante los mongoles y protectores del budismo tibetano, en un imperio multiétnico administrado en varias lenguas.',
          'El período llamado alto Qing, entre finales del siglo XVII y finales del XVIII, fue de expansión y prosperidad. La población se duplicó con creces hasta unos trescientos millones gracias a la paz, a nuevos cultivos americanos como el maíz y el boniato y a la roturación de tierras marginales. El imperio incorporó Taiwán, Mongolia, el Tíbet y Xinjiang, alcanzando la mayor extensión de su historia. Peter Perdue ha mostrado que esa expansión hacia Asia central fue un proceso de conquista comparable al de las potencias europeas contemporáneas.',
          'La llamada New Qing History, desde los años noventa, ha reorientado el estudio del período. Frente a la idea tradicional de que los manchúes se sinizaron hasta desaparecer culturalmente, Evelyn Rawski y otros han usado fuentes en manchú para mostrar que conservaron una identidad distinta y que el carácter multiétnico del imperio fue una estrategia deliberada de gobierno. Ho Ping-ti respondió defendiendo la centralidad de la sinización, y la polémica sigue teniendo, además, resonancia política actual.',
          'El siglo XIX rompió el equilibrio. El comercio del opio, introducido por comerciantes británicos para corregir su déficit con China, provocó una crisis social y una salida de plata que el Estado intentó cortar. La respuesta británica fue una guerra, entre 1839 y 1842, que China perdió por completa inferioridad naval y artillera. El Tratado de Nankín abrió puertos, cedió Hong Kong, fijó aranceles y estableció la extraterritorialidad: fue el primero de una serie de acuerdos que la historiografía china llama tratados desiguales.',
          'Al mismo tiempo el imperio se hundía por dentro. La rebelión Taiping, entre 1850 y 1864, dirigida por un letrado fracasado que se proclamó hermano menor de Jesucristo, controló el valle del Yangtsé y provocó entre veinte y treinta millones de muertos, la guerra civil más letal del siglo XIX en cualquier lugar del mundo. Los intentos de reforma, el movimiento de autofortalecimiento y después la reforma de los Cien Días de 1898, chocaron con la corte y con los intereses provinciales. Tras el levantamiento de los bóxers y su aplastamiento por ocho potencias en 1900, el imperio abolió los exámenes en 1905 y cayó en 1912.',
        ].join('\n\n'),
        callout:
          'El sistema de exámenes se abolió en 1905, siete años antes que el imperio. Cuando desapareció la vía que unía el estudio de los clásicos con el poder, la élite letrada dejó de tener motivos para sostener la dinastía.',
      },
      {
        title: 'La Gran Divergencia',
        body: [
          'La pregunta que organiza hoy la historia de China en el mundo es la de la Gran Divergencia: por qué la revolución industrial ocurrió en el noroeste de Europa y no en el delta del Yangtsé, que en 1750 tenía niveles de vida, esperanza de vida, mercados de tierra y trabajo y sofisticación comercial comparables.',
          'Kenneth Pomeranz sostuvo en 2000 que hasta mediados del siglo XVIII las regiones más avanzadas de ambos extremos de Eurasia eran similares y que la diferencia la marcaron dos factores contingentes: el carbón accesible cerca de los centros industriales británicos y los recursos de las colonias americanas, que liberaron a Europa de la restricción de tierra que China no podía superar. La divergencia sería tardía y coyuntural, no producto de siglos de superioridad europea.',
          'La posición contraria, defendida entre otros por David Landes y con matices por Joel Mokyr, subraya factores institucionales y culturales de largo plazo: derechos de propiedad, competencia entre Estados europeos, una cultura de investigación pública que enlazó ciencia y técnica, y patentes. Otros, como Bin Wong y Philip Huang, discuten los datos de Pomeranz o proponen comparaciones distintas, y la discusión se ha convertido en uno de los debates más productivos de la historia económica global.',
          'Lo que la discusión ha dejado claro es lo que ya no puede sostenerse: la idea de un Oriente inmóvil y despótico, formulada en el siglo XVIII por autores europeos y sistematizada por Karl Wittfogel en 1957 como despotismo hidráulico, no resiste el examen de las fuentes. China tuvo mercados de tierra y trabajo, movilidad social por examen, revoluciones tecnológicas y ciclos de expansión y crisis como cualquier otra sociedad compleja.',
          'La caída del imperio en 1912 no cerró la historia de esas estructuras. El Estado burocrático centralizado, la legitimación por el buen gobierno más que por el procedimiento, la centralidad del examen como vía de acceso al servicio público y la memoria del siglo de humillación entre 1839 y 1949 son elementos que la política china posterior ha reutilizado. Estudiar el imperio no es estudiar solo el pasado de China: es entender el vocabulario con el que sigue discutiendo su presente.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Mandato del Cielo', definition: 'Doctrina que legitima a la dinastía mientras gobierne con justicia y autoriza a derribarla cuando pierde esa virtud. Incorpora su propia cláusula de rebelión.' },
      { term: 'Legismo', definition: 'Doctrina de Shang Yang y Han Feizi: leyes uniformes, castigos severos, mérito medible y desconfianza hacia la moral como base de gobierno. Armazón administrativo del imperio.' },
      { term: 'Confucianismo de Estado', definition: 'Legitimación moral del poder adoptada por los Han: ejemplo del gobernante, ritos y estudio de los clásicos como formación de los servidores públicos.' },
      { term: 'Sistema de exámenes', definition: 'Reclutamiento de funcionarios mediante pruebas escritas sobre los clásicos. Creó una élite definida por la cultura letrada y no por la sangre. Abolido en 1905.' },
      { term: 'Gran Canal', definition: 'Vía navegable construida bajo los Sui que conecta el arroz del Yangtsé con el norte. Resolvió el problema logístico de gobernar un territorio continental.' },
      { term: 'Neoconfucianismo', definition: 'Reformulación de Zhu Xi en época Song, con metafísica y programa de estudio. Su versión de los clásicos fue el temario oficial de los exámenes durante siglos.' },
      { term: 'Trampa del alto nivel de equilibrio', definition: 'Hipótesis de Elvin: una agricultura muy productiva y mano de obra barata eliminaron el incentivo para sustituir trabajo por máquinas.' },
      { term: 'Sistema tributario', definition: 'Marco de relaciones exteriores en el que otros Estados reconocían la primacía china mediante embajadas y regalos a cambio de comercio y prestigio.' },
      { term: 'Expediciones de Zheng He', definition: 'Siete viajes navales entre 1405 y 1433 hasta África oriental, con flotas enormes. Despliegues de prestigio, no de conquista ni de exploración comercial.' },
      { term: 'Estandartes manchúes', definition: 'Organización militar y social de los Qing, base de su ejército y de su identidad separada dentro de un imperio multiétnico.' },
      { term: 'New Qing History', definition: 'Corriente que usa fuentes en manchú para mostrar que los Qing conservaron una identidad propia y gobernaron un imperio multiétnico, frente a la tesis de la sinización total.' },
      { term: 'Tratados desiguales', definition: 'Acuerdos impuestos desde 1842 con puertos abiertos, aranceles fijados desde fuera y extraterritorialidad para los extranjeros.' },
      { term: 'Rebelión Taiping', definition: 'Guerra civil de 1850 a 1864 con base religiosa sincrética y entre veinte y treinta millones de muertos. El conflicto más letal del siglo XIX.' },
      { term: 'Gran Divergencia', definition: 'Debate sobre por qué la industrialización ocurrió en el noroeste de Europa y no en las regiones más ricas de Asia, con niveles de vida comparables en 1750.' },
    ],
    debates: [
      {
        question: '¿Por qué industrializó Europa y no China?',
        positions: [
          {
            school: 'Divergencia tardía y contingente (Pomeranz, 2000)',
            argument:
              'Hasta mediados del siglo XVIII el delta del Yangtsé y el noroeste europeo eran comparables. La diferencia la marcaron el carbón accesible y los recursos coloniales, que liberaron a Europa de la restricción de tierra.',
          },
          {
            school: 'Instituciones y cultura (Landes; Mokyr)',
            argument:
              'Los derechos de propiedad, la competencia entre Estados europeos y una cultura que conectó ciencia y técnica crearon un entorno de innovación acumulativa que no existía en un imperio unificado.',
          },
          {
            school: 'Equilibrio agrario (Elvin, 1973)',
            argument:
              'Una agricultura muy productiva con mano de obra abundante y barata eliminó el incentivo para mecanizar. China no careció de capacidad técnica, sino de razones económicas para aplicarla en esa dirección.',
          },
        ],
        state:
          'El debate ha desplazado definitivamente la explicación por superioridad europea de largo plazo. Discrepan hoy sobre la fecha de la divergencia y sobre el peso relativo de recursos e instituciones.',
      },
      {
        question: '¿Se sinizaron los manchúes o gobernaron como imperio multiétnico?',
        positions: [
          {
            school: 'Sinización (Ho Ping-ti, 1967)',
            argument:
              'El éxito de los Qing se explica por su adopción de la cultura, la administración y la ideología chinas. Gobernaron porque se convirtieron en una dinastía china más.',
          },
          {
            school: 'Imperio multiétnico (Rawski, 1996; Perdue; Crossley)',
            argument:
              'Las fuentes en manchú muestran una identidad conservada y una estrategia deliberada: emperadores confucianos ante los han, kanes ante los mongoles y protectores del budismo tibetano.',
          },
        ],
        state:
          'La New Qing History ha reorientado el campo, y la discusión tiene además resonancia política actual por lo que implica sobre la relación entre el Estado chino y sus regiones fronterizas.',
      },
      {
        question: '¿Por qué se abandonaron las expediciones de Zheng He?',
        positions: [
          {
            school: 'Rechazo cultural a la apertura',
            argument:
              'Una élite letrada centrada en el orden agrario y convencida de la autosuficiencia del imperio consideró los viajes un despilfarro sin utilidad y clausuró la vocación marítima del Estado.',
          },
          {
            school: 'Prioridades fiscales y estratégicas',
            argument:
              'Costaban una fortuna sin generar ingresos, servían al partido de los eunucos frente a la burocracia que controlaba el tesoro, y la amenaza mongola en el norte reclamó los recursos tras la captura del emperador en 1449.',
          },
        ],
        state:
          'La segunda explicación predomina. Las prohibiciones marítimas tampoco cerraron el comercio: lo empujaron a manos privadas, y la China Ming del siglo XVI estaba plenamente conectada con la economía global de la plata.',
      },
    ],
    sources: [
      { author: 'Confucio y discípulos', title: 'Analectas', year: 'siglo V a. C.', kind: 'primaria', note: 'Base del canon que estructuró la educación y el reclutamiento del Estado durante dos mil años.' },
      { author: 'Han Feizi', title: 'Han Feizi', year: 'siglo III a. C.', kind: 'primaria', note: 'Formulación más completa del legismo: gobierno por ley, castigo y control, sin confianza en la virtud.' },
      { author: 'Sima Qian', title: 'Memorias históricas', year: 'c. 94 a. C.', kind: 'primaria', note: 'Fija el modelo de historiografía dinástica china, con anales, tratados y biografías.' },
      { author: 'Xuanzang', title: 'Crónica de las regiones occidentales', year: '646', kind: 'primaria', note: 'Relato del viaje de un monje a la India en busca de textos budistas. Fuente sobre Asia central e India del siglo VII.' },
      { author: 'Zhu Xi', title: 'Comentarios a los Cuatro Libros', year: 'siglo XII', kind: 'primaria', note: 'Versión neoconfuciana de los clásicos que se convirtió en el temario oficial de los exámenes.' },
      { author: 'Marco Polo', title: 'El libro de las maravillas', year: 'c. 1300', kind: 'primaria', note: 'Descripción de la China Yuan. Fuente discutida en su literalidad y decisiva en la imagen europea de Asia.' },
      { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Viajero magrebí que describió los puertos chinos del siglo XIV desde una mirada no europea.' },
      { author: 'Ma Huan', title: 'Maravillosas visiones de las costas del océano', year: '1433', kind: 'primaria', note: 'Crónica de un intérprete que acompañó a Zheng He. Fuente directa sobre las expediciones.' },
      { author: 'Matteo Ricci', title: 'Diarios de la misión en China', year: 'c. 1610', kind: 'primaria', note: 'Jesuita que trabajó en la corte Ming. Documento clave del primer encuentro intelectual sostenido con Europa.' },
      { author: 'Emperador Qianlong', title: 'Edicto a Jorge III', year: '1793', kind: 'primaria', note: 'Respuesta a la misión Macartney. Documento central sobre la concepción china de las relaciones exteriores.' },
      { author: 'Lin Zexu', title: 'Carta a la reina Victoria', year: '1839', kind: 'primaria', note: 'Argumento moral y jurídico contra el comercio del opio, escrito por el comisionado que lo prohibió.' },
      { author: 'Imperio Qing y Reino Unido', title: 'Tratado de Nankín', year: '1842', kind: 'primaria', note: 'Primero de los tratados desiguales: puertos abiertos, cesión de Hong Kong y aranceles fijados desde fuera.' },
      { author: 'Karl Wittfogel', title: 'Despotismo oriental', year: '1957', kind: 'estudio', note: 'Tesis del despotismo hidráulico, hoy rechazada, pero imprescindible para entender el debate posterior.' },
      { author: 'Joseph Needham', title: 'Ciencia y civilización en China', year: '1954–2008', kind: 'estudio', note: 'Catálogo monumental de la técnica china y formulación de la pregunta sobre por qué no hubo revolución científica.' },
      { author: 'Jacques Gernet', title: 'El mundo chino', year: '1972', kind: 'estudio', note: 'Síntesis general de referencia sobre la historia china desde los orígenes.' },
      { author: 'Mark Elvin', title: 'The Pattern of the Chinese Past', year: '1973', kind: 'estudio', note: 'Formula la trampa del alto nivel de equilibrio para explicar la ausencia de industrialización.' },
      { author: 'Evelyn Rawski', title: 'Presenting the Qing', year: '1996', kind: 'estudio', note: 'Texto fundacional de la New Qing History y de la polémica con Ho Ping-ti sobre la sinización.' },
      { author: 'Timothy Brook', title: 'El sombrero de Vermeer', year: '2008', kind: 'estudio', note: 'La China Ming dentro de la primera economía global, contada a partir de objetos y de la plata americana.' },
      { author: 'Kenneth Pomeranz', title: 'La gran divergencia', year: '2000', kind: 'estudio', note: 'Compara el delta del Yangtsé con Inglaterra y sitúa la divergencia en el siglo XVIII por carbón y colonias.' },
      { author: 'Peter Perdue', title: 'China Marches West', year: '2005', kind: 'estudio', note: 'La expansión Qing hacia Asia central como conquista imperial comparable a la europea.' },
      { author: 'William Rowe', title: 'China última: la gran dinastía Qing', year: '2009', kind: 'estudio', note: 'Síntesis actual del período Qing con el estado de la cuestión sobre su carácter imperial.' },
      { author: 'Valerie Hansen', title: 'The Open Empire', year: '2000', kind: 'estudio', note: 'Historia de China hasta 1600 centrada en su conexión permanente con el exterior.' },
    ],
  },
  questions: [
    {
      id: 'china-imperial-1', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué doctrina permitió a Qin unificar China en 221 a. C.?',
      options: [
        'El confucianismo de Estado',
        'El legismo: leyes uniformes, castigos severos y recompensa por mérito medible',
        'El budismo llegado de Asia central',
        'El neoconfucianismo de Zhu Xi',
      ],
      answer: 1,
      explanation: 'El imperio Qin duró quince años y su maquinaria administrativa, dos milenios. Los Han le añadieron la legitimación confuciana.',
    },
    {
      id: 'china-imperial-2', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué doble función cumple el mandato del Cielo?',
      options: [
        'Legitima al emperador y prohíbe expresamente la rebelión',
        'Legitima a la dinastía mientras gobierne con justicia y autoriza a derribarla cuando la pierde',
        'Establece la sucesión hereditaria por primogenitura',
        'Concede la autoridad a los funcionarios y no al emperador',
      ],
      answer: 1,
      explanation: 'Es una teoría del poder que incorpora su propia cláusula de revolución: permite que un campesino victorioso funde una dinastía legítima.',
    },
    {
      id: 'china-imperial-3', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué transformación religiosa se produjo entre los siglos III y VI?',
      options: [
        'La adopción del cristianismo nestoriano como religión de Estado',
        'La llegada del budismo desde Asia central, su traducción a un vocabulario chino y la organización del taoísmo como iglesia',
        'La prohibición de todas las religiones extranjeras',
        'La imposición del confucianismo como culto obligatorio',
      ],
      answer: 1,
      explanation: 'La síntesis cultural china posterior es resultado de esa mezcla, no su punto de partida.',
    },
    {
      id: 'china-imperial-4', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué problema resolvió el Gran Canal construido bajo los Sui?',
      options: [
        'La defensa de la frontera norte frente a los pueblos esteparios',
        'La logística de llevar el arroz del Yangtsé a las capitales y los ejércitos del norte',
        'El riego de las llanuras del sur',
        'La comunicación con las rutas de la seda',
      ],
      answer: 1,
      explanation: 'Costó una movilización de trabajo forzoso enorme, contribuyó a derribar a la dinastía que lo construyó y sostuvo a todas las siguientes.',
    },
    {
      id: 'china-imperial-5', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué tipo de élite produjo el sistema de exámenes?',
      options: [
        'Una meritocracia plenamente igualitaria abierta a todas las clases',
        'Una élite de gobierno definida por la cultura letrada y no por la sangre, aunque preparar a un candidato exigía ocio y maestros costosos',
        'Una aristocracia hereditaria con acceso reservado',
        'Un cuerpo de funcionarios de origen exclusivamente militar',
      ],
      answer: 1,
      explanation: 'No existía nada equivalente en ningún otro imperio de la época, aunque el acceso real estaba condicionado por la riqueza familiar.',
    },
    {
      id: 'china-imperial-6', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué innovaciones se generalizaron en China bajo la dinastía Song?',
      options: [
        'La rueda hidráulica y el arado de vertedera',
        'Papel moneda, brújula náutica, pólvora militar e imprenta de tipos móviles',
        'La máquina de vapor y el telar mecánico',
        'El vidrio óptico y el telescopio',
      ],
      answer: 1,
      explanation: 'Todas son anteriores al año 1300. La pregunta histórica no es por qué China no innovó, sino por qué esa innovación tuvo otro desenlace.',
    },
    {
      id: 'china-imperial-7', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué sostiene la trampa del alto nivel de equilibrio de Mark Elvin?',
      options: [
        'Que la población china era demasiado escasa para sostener la industrialización',
        'Que una agricultura muy productiva y mano de obra barata eliminaron el incentivo para sustituir trabajo por máquinas',
        'Que el Estado prohibió las innovaciones técnicas',
        'Que faltaban materias primas en el territorio chino',
      ],
      answer: 1,
      explanation: 'Otras explicaciones señalan la pérdida del norte en 1127 y la reorientación de los recursos hacia la defensa.',
    },
    {
      id: 'china-imperial-8', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Cuál era el propósito de las expediciones de Zheng He?',
      options: [
        'Conquistar territorios en África oriental',
        'Desplegar prestigio para integrar Estados en el sistema tributario chino',
        'Buscar una ruta comercial hacia Europa',
        'Establecer colonias de poblamiento en el índico',
      ],
      answer: 1,
      explanation: 'Sus flotas eran mucho mayores que cualquier cosa que Europa botara hasta el siglo XIX, pero no eran viajes de conquista ni de exploración comercial.',
    },
    {
      id: 'china-imperial-9', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué explicación predomina hoy sobre el abandono de las expediciones navales?',
      options: [
        'Un rechazo cultural chino a todo contacto exterior',
        'Su coste sin ingresos, la lucha entre eunucos y burocracia por el tesoro y el retorno de la amenaza mongola en el norte',
        'La derrota de la flota china en el océano Índico',
        'La prohibición impuesta por comerciantes portugueses',
      ],
      answer: 1,
      explanation: 'Las prohibiciones marítimas posteriores no cerraron el comercio: lo empujaron a manos privadas y a menudo ilegales.',
    },
    {
      id: 'china-imperial-10', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué papel tuvo la plata americana en la China Ming del siglo XVI?',
      options: [
        'Ninguno: el imperio estaba cerrado al comercio exterior',
        'Entró en cantidades enormes porque China la valoraba más que ningún otro mercado, y el Estado pasó a cobrar impuestos en plata',
        'Se prohibió su circulación por decreto imperial',
        'Se usó exclusivamente para acuñar moneda de prestigio',
      ],
      answer: 1,
      explanation: 'Llegaba por Manila desde 1571 y por el comercio portugués. La China Ming estaba plenamente integrada en la primera economía global.',
    },
    {
      id: 'china-imperial-11', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Cómo gobernaron los Qing un imperio multiétnico?',
      options: [
        'Imponiendo la lengua y las costumbres manchúes a toda la población',
        'Presentándose como emperadores confucianos ante los han, kanes ante los mongoles y protectores del budismo tibetano',
        'Delegando el gobierno en administradores europeos',
        'Dividiendo el imperio en Estados independientes tributarios',
      ],
      answer: 1,
      explanation: 'Traían una experiencia de gobierno sobre poblaciones mixtas y una organización militar y social propia, los estandartes.',
    },
    {
      id: 'china-imperial-12', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué ha aportado la New Qing History?',
      options: [
        'La demostración de que los Qing se sinizaron por completo',
        'El uso de fuentes en manchú para mostrar una identidad conservada y un carácter multiétnico deliberado del imperio',
        'La datación exacta de la conquista de Pekín',
        'La revisión a la baja de las cifras de población del siglo XVIII',
      ],
      answer: 1,
      explanation: 'Ho Ping-ti defendió la centralidad de la sinización, y la polémica conserva resonancia política actual.',
    },
    {
      id: 'china-imperial-13', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué estableció el Tratado de Nankín de 1842?',
      options: [
        'La apertura de puertos, la cesión de Hong Kong, aranceles fijados desde fuera y la extraterritorialidad',
        'La prohibición definitiva del comercio del opio',
        'La entrada de China en el sistema de las potencias europeas en pie de igualdad',
        'La devolución de Taiwán al imperio',
      ],
      answer: 0,
      explanation: 'Fue el primero de una serie de acuerdos que la historiografía china llama tratados desiguales.',
    },
    {
      id: 'china-imperial-14', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué magnitud tuvo la rebelión Taiping?',
      options: [
        'Una revuelta local sofocada en meses',
        'Una guerra civil de catorce años con entre veinte y treinta millones de muertos, la más letal del siglo XIX',
        'Un golpe palaciego sin consecuencias sociales',
        'Una guerra fronteriza contra los mongoles',
      ],
      answer: 1,
      explanation: 'La dirigió un letrado fracasado que se proclamó hermano menor de Jesucristo y llegó a controlar el valle del Yangtsé.',
    },
    {
      id: 'china-imperial-15', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Por qué fue significativa la abolición de los exámenes en 1905?',
      options: [
        'Porque permitió el acceso de las mujeres a la administración',
        'Porque rompió el vínculo entre el estudio de los clásicos y el poder, y la élite letrada dejó de tener motivos para sostener la dinastía',
        'Porque implantó un sistema electoral',
        'Porque obligó a formar a los funcionarios en Japón',
      ],
      answer: 1,
      explanation: 'El imperio cayó siete años después, en la revolución de 1911 y la abdicación de 1912.',
    },
    {
      id: 'china-imperial-16', era: 'Edad Media', topicId: 'china-imperial', topic: 'China imperial',
      question: '¿Qué sostiene Kenneth Pomeranz sobre la Gran Divergencia?',
      options: [
        'Que Europa fue superior a Asia desde el siglo XV',
        'Que hasta mediados del XVIII las regiones más avanzadas eran comparables y la diferencia la marcaron el carbón accesible y los recursos coloniales',
        'Que China nunca alcanzó niveles de vida europeos',
        'Que la divergencia se debió a la superioridad militar europea',
      ],
      answer: 1,
      explanation: 'El debate ha desplazado definitivamente la explicación por superioridad europea de largo plazo, y con ella la vieja tesis del despotismo oriental.',
    },
  ],
}
