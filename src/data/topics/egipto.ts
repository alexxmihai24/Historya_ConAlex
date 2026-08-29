import type { TopicModule } from '../types.ts'

export const egipto: TopicModule = {
  topic: {
    id: 'egipto',
    era: 'Antigüedad',
    title: 'El Egipto de los faraones',
    years: 'c. 3100–30 a. C.',
    country: 'Egipto',
    description: 'Estado, ecología fluvial, ideología real y religión funeraria en tres milenios de historia egipcia.',
    duration: '45 min',
    level: 'Universidad',
    progress: 0,
    visual: '☥',
    color: 'gold',
    summary:
      'Durante más de tres mil años, las comunidades del valle del Nilo sostuvieron uno de los Estados más duraderos que se conocen. Su continuidad no se explica por una superioridad militar, sino por la articulación entre una ecología fluvial excepcionalmente previsible, una administración capaz de medir y redistribuir el excedente agrario, y una ideología real que hacía del faraón el garante del orden cósmico. Esta lección recorre esos tres ejes y presenta los debates abiertos sobre cómo interpretarlos.',
    keyDates: [
      { date: 'c. 5000–4000 a. C.', event: 'Culturas predinásticas (Badariense, Nagada I) en el Alto Egipto.' },
      { date: 'c. 3100 a. C.', event: 'Unificación del Alto y el Bajo Egipto; inicio del periodo dinástico.' },
      { date: 'c. 2686–2160 a. C.', event: 'Imperio Antiguo: Estado piramidal, complejos de Guiza y auge del culto solar.' },
      { date: 'c. 2160–2055 a. C.', event: 'Primer Periodo Intermedio: fragmentación y literatura pesimista.' },
      { date: 'c. 2055–1650 a. C.', event: 'Imperio Medio: reunificación tebana, colonización de Nubia, clasicismo literario.' },
      { date: 'c. 1650–1550 a. C.', event: 'Segundo Periodo Intermedio: dominio hicso en el delta.' },
      { date: 'c. 1550–1070 a. C.', event: 'Imperio Nuevo: Egipto como potencia imperial en Siria-Palestina y Nubia.' },
      { date: 'c. 1479–1458 a. C.', event: 'Reinado de Hatshepsut; expedición a Punt y programa monumental en Deir el-Bahari.' },
      { date: 'c. 1353–1336 a. C.', event: 'Reinado de Akenatón: reforma atoniana y nueva capital en Amarna.' },
      { date: 'c. 1274 a. C.', event: 'Batalla de Qadesh; hacia 1259 a. C., tratado egipcio-hitita conservado en ambas versiones.' },
      { date: 'c. 1155 a. C.', event: 'Huelga de los obreros de Deir el-Medina bajo Ramsés III.' },
      { date: '525 a. C.', event: 'Conquista persa aqueménida (dinastía XXVII).' },
      { date: '332 a. C.', event: 'Alejandro Magno toma Egipto; después, dinastía ptolemaica.' },
      { date: '30 a. C.', event: 'Muerte de Cleopatra VII; Egipto se convierte en provincia romana.' },
    ],
    sections: [
      {
        title: 'Ecología fluvial: por qué el Nilo condiciona el Estado',
        body: [
          'Egipto es, en términos geográficos, una franja de tierra cultivable de anchura muy variable —de pocos cientos de metros a algunas decenas de kilómetros— encajada en el desierto. La población histórica se concentró casi por completo en esa franja y en el delta, lo que produce una densidad demográfica alta sobre una superficie útil pequeña: una configuración que facilita el control administrativo y militar del territorio.',
          'El régimen hidrológico procede del monzón etíope, que alimenta el Nilo Azul y el Atbara. La crecida llegaba a Asuán entre junio y julio, alcanzaba su máximo en septiembre y descendía en octubre, depositando limo aluvial sobre los campos. Los egipcios distinguían Kemet, «la tierra negra» del limo, de Deshret, «la tierra roja» del desierto, y organizaron su calendario agrícola en tres estaciones: akhet (inundación), peret (siembra y crecimiento) y shemu (cosecha).',
          'La variable decisiva no es la fertilidad, sino la predictibilidad. Frente al régimen brusco e irregular del Tigris y el Éufrates, la crecida nilótica seguía un calendario razonablemente estable, lo que permitía anticipar la cosecha, calcular la carga fiscal y planificar la movilización de mano de obra. Karl Butzer, en *Early Hydraulic Civilization in Egypt* (1976), demostró además que la irrigación egipcia fue durante mucho tiempo de cuenca y de gestión local, no un sistema centralizado a escala nacional: el Estado se benefició del río, pero no nació de la necesidad de gestionarlo.',
          'Esa matización importa porque desmonta una explicación muy difundida. La tesis del «despotismo hidráulico» de Karl Wittfogel sostenía que los grandes Estados antiguos surgían de la necesidad de administrar sistemas de riego a gran escala. La evidencia egipcia no la sostiene: las obras hidráulicas documentadas son locales y tardías respecto a la formación del Estado.',
        ].join('\n\n'),
        callout:
          'Heródoto llamó a Egipto «un don del Nilo» (Historias II, 5). La frase describe bien la dependencia ecológica, pero oculta el trabajo social —diques, canales de cuenca, graneros, registros— que convirtió esa dependencia en excedente.',
      },
      {
        title: 'La formación del Estado y el aparato administrativo',
        body: [
          'La unificación en torno al 3100 a. C. no fue un acontecimiento único, sino el desenlace de un proceso de varios siglos de competencia entre centros del Alto Egipto —Hieracómpolis, Nagada, Abidos— documentado por la arqueología predinástica. La Paleta de Narmer, con su iconografía de la maza alzada sobre el enemigo, es un documento ideológico de ese proceso, no necesariamente el acta de un hecho concreto.',
          'El instrumento que dio continuidad al Estado fue la escritura administrativa. Los escribas medían la crecida con nilómetros, estimaban el rendimiento esperado y fijaban la carga fiscal antes de la cosecha; registraban tierras, rebaños, raciones y expediciones a las canteras del desierto y a las minas del Sinaí. Los papiros de Uadi al-Yarf, hallados en 2013 y fechados en el reinado de Keops, contienen el diario de un tal Merer, jefe de un equipo que transportaba bloques de caliza desde Tura hasta Guiza: es la documentación administrativa más antigua conservada en Egipto y confirma el funcionamiento logístico del Estado piramidal.',
          'La administración territorial se organizaba en nomos, encabezados por nomarcas. La relación entre el poder central y estas élites provinciales es un buen indicador del ciclo político egipcio: cuando los nomarcas se hacen hereditarios y construyen tumbas monumentales en sus provincias —como ocurre a finales del Imperio Antiguo—, el poder central está retrocediendo.',
          'Ser escriba constituía una vía real de promoción social. La *Sátira de los oficios* (Enseñanza de Khety), texto escolar del Imperio Medio, describe con detalle la dureza de los oficios manuales para concluir que solo el escriba escapa a ella. Se trata de propaganda gremial, pero indica que la alfabetización era un recurso escaso y valioso: se estima que menos del 1 % de la población sabía leer y escribir.',
        ].join('\n\n'),
      },
      {
        title: 'Ideología real: la maat como programa de gobierno',
        body: [
          'El faraón no era solo el detentador del poder político. La teología real lo situaba como mediador entre los dioses y los humanos, encarnación de Horus en vida y asimilado a Osiris tras la muerte. Su función declarada era mantener la maat —orden, verdad, justicia, equilibrio— frente al isfet, el caos.',
          'Esto tenía consecuencias operativas. La legitimidad del rey se medía por resultados verificables: crecidas suficientes, graneros llenos, fronteras seguras, templos en construcción. Jan Assmann ha insistido en que la maat funcionaba también como un principio de reciprocidad social —la obligación de responder al otro, de hacer justicia al débil— y no solo como una cosmología abstracta.',
          'Los textos del Primer Periodo Intermedio muestran qué ocurría cuando esa promesa fallaba. Las *Admoniciones de Ipuwer* describen un mundo invertido: los pobres visten lino fino, el río es sangre, los muertos quedan sin sepultura. Aunque el texto es literario y su datación se discute, refleja la conciencia egipcia de que la ruptura del orden era un fracaso del rey, no un accidente.',
          'El poder real se apoyaba en tres cuerpos: la administración civil, encabezada por el visir; el clero de los grandes templos; y, sobre todo desde el Imperio Nuevo, el ejército profesional. La tensión entre ellos explica buena parte de la historia política egipcia: el templo de Amón en Karnak llegó a controlar, según el papiro Harris I, una proporción muy considerable de la tierra cultivable del país, hasta convertirse en un contrapoder efectivo.',
        ].join('\n\n'),
        callout:
          'Maat era simultáneamente diosa, principio y práctica. En el juicio de Osiris el corazón del difunto se pesaba frente a su pluma: la ética individual quedaba integrada en la cosmología estatal.',
      },
      {
        title: 'Estructura social, trabajo y condiciones de vida',
        body: [
          'La inmensa mayoría de la población era campesina. Cultivaba tierras de la corona, de los templos o de grandes propietarios, entregaba una parte de la cosecha y estaba sujeta a la corvea: trabajo obligatorio en obras públicas, concentrado en los meses de inundación, cuando el campo quedaba anegado y la mano de obra estaba disponible.',
          'Esa estacionalidad explica en buena medida la viabilidad de las grandes obras. Las excavaciones de Mark Lehner y Zahi Hawass en el asentamiento de constructores al sur de Guiza documentaron panaderías, cervecerías, talleres, dormitorios colectivos y depósitos de restos de ganado en cantidad suficiente para alimentar a miles de trabajadores. La imagen herodotea de multitudes de esclavos flagelados no se sostiene: se trataba de trabajadores egipcios organizados en equipos, mantenidos por el Estado y con cierta especialización técnica.',
          'El poblado de Deir el-Medina, habitado por los artesanos que excavaban y decoraban las tumbas del Valle de los Reyes, es el yacimiento que mejor documenta la vida cotidiana del Egipto antiguo. Sus miles de ostraca conservan listas de raciones, contratos, préstamos, pleitos, partes de ausencia por enfermedad, cartas privadas e incluso conflictos vecinales. En el año 29 de Ramsés III, hacia 1155 a. C., el retraso en la entrega de raciones provocó la primera huelga documentada de la historia: los obreros abandonaron el trabajo y se sentaron ante los templos funerarios reclamando el grano debido.',
          'La posición jurídica de las mujeres egipcias era notable en el contexto del Mediterráneo antiguo: podían poseer y heredar bienes en nombre propio, otorgar contratos, litigar y divorciarse conservando parte del patrimonio. Esto no equivale a igualdad. Los cargos administrativos y sacerdotales de alto rango fueron mayoritariamente masculinos, y las escasas mujeres que gobernaron —Hatshepsut, Tausert, Cleopatra VII— lo hicieron adoptando o adaptando una titulatura concebida en masculino.',
        ].join('\n\n'),
      },
      {
        title: 'Religión funeraria: economía, ritual y creencia',
        body: [
          'La afirmación de que los egipcios estaban «obsesionados con la muerte» es un artefacto de nuestras fuentes: las necrópolis, construidas en piedra en el desierto, se conservan mucho mejor que las viviendas de adobe del valle inundable. Lo que la documentación muestra no es una obsesión, sino una inversión sostenida en la continuidad de la persona tras la muerte.',
          'Esa continuidad exigía tres condiciones: la preservación del cuerpo mediante momificación; el mantenimiento del nombre y de las ofrendas, garantizado por fundaciones funerarias con tierras asignadas; y la superación del juicio ante Osiris. Los corpus funerarios evolucionaron y se democratizaron: los Textos de las Pirámides (Imperio Antiguo) eran exclusivamente reales; los Textos de los Sarcófagos (Imperio Medio) se extendieron a la élite; y el llamado Libro de los Muertos (Imperio Nuevo) circulaba en copias adquiribles con espacios en blanco para el nombre del comprador.',
          'La religión egipcia era politeísta y marcadamente acumulativa: las divinidades se sincretizaban (Amón-Ra, Ptah-Sokar-Osiris), variaban en importancia según la ciudad hegemónica y admitían teologías locales simultáneas sin necesidad de resolverlas. Esa flexibilidad explica lo excepcional de la reforma de Akenatón, que restringió el culto al disco solar Atón, cerró templos y desplazó la corte a una capital nueva. Sus sucesores revirtieron la reforma, desmantelaron Amarna y omitieron su nombre de las listas reales.',
          'Conviene evitar dos lecturas anacrónicas. La primera es leer el atonismo como un monoteísmo precursor del judaísmo, tesis que Sigmund Freud popularizó en *Moisés y la religión monoteísta* (1939) y que la egiptología ha rechazado mayoritariamente por falta de continuidad documental. La segunda es leer las prácticas funerarias como superstición: eran una tecnología ritual coherente con una cosmología explícita y con una economía de fundaciones, sacerdocios y talleres.',
        ].join('\n\n'),
      },
      {
        title: 'Escritura, saber técnico y transmisión',
        body: [
          'El sistema gráfico egipcio combinaba signos logográficos, fonogramas consonánticos y determinativos semánticos. Se usó en tres variantes funcionales: jeroglífica, para inscripciones monumentales; hierática, cursiva sobre papiro, para la administración y la literatura; y demótica, desarrollada en el Tercer Periodo Intermedio, más rápida y más alejada del signo original.',
          'El saber egipcio era operativo antes que teórico. La geometría respondía a la necesidad de restablecer lindes tras la crecida y de calcular volúmenes de graneros y rampas: el papiro Rhind, copiado hacia 1550 a. C., recoge problemas de áreas, fracciones y pendientes. El calendario civil de 365 días, con doce meses de treinta días y cinco epagómenos, prescindía del cuarto de día sobrante, lo que producía un desfase acumulativo que los propios egipcios conocían y que la reforma juliana corrigió siglos después.',
          'En medicina, el papiro Edwin Smith presenta cuarenta y ocho casos de traumatismos ordenados de la cabeza a los pies, cada uno con examen, diagnóstico y pronóstico, incluida la fórmula «una dolencia que no trataré». Junto a ese registro clínico convivían sin conflicto los ensalmos mágicos: la distinción moderna entre medicina y magia no era operativa para sus autores.',
          'El conocimiento del sistema se perdió tras el cierre de los templos en época romana tardía; la última inscripción jeroglífica datada procede de File, en 394 d. C. La recuperación llegó con el hallazgo de la piedra de Rosetta en 1799 y con el desciframiento de Jean-François Champollion, anunciado en su *Lettre à M. Dacier* (1822), que estableció que los signos registraban a la vez sonidos y significados, frente a la interpretación puramente simbólica dominante desde Horapolo.',
        ].join('\n\n'),
        callout:
          'La piedra de Rosetta repite un decreto sacerdotal de 196 a. C. en jeroglífico, demótico y griego. El bilingüismo del soporte, y no su contenido, fue lo que abrió el sistema.',
      },
      {
        title: 'Imperio, crisis y final de la independencia',
        body: [
          'Con el Imperio Nuevo, Egipto pasó de un modelo de control de fronteras a una política imperial activa en Siria-Palestina y Nubia, sostenida por un ejército permanente con carros de guerra y arqueros. Las cartas de Amarna, correspondencia diplomática en acadio entre la corte egipcia y los reyes de Babilonia, Mitani, Hatti y los príncipes vasallos cananeos, documentan un sistema internacional con protocolos, matrimonios dinásticos e intercambio regulado de regalos.',
          'La batalla de Qadesh, hacia 1274 a. C., ilustra tanto los límites militares como la potencia propagandística del Estado: Ramsés II la presentó en sus templos como una victoria personal, mientras que el desenlace real fue un empate estratégico que condujo, hacia 1259 a. C., al tratado con Hattusili III, conservado en versión egipcia y en tablillas hititas de Hattusa.',
          'El colapso de la Edad del Bronce Final, hacia 1200-1150 a. C., afectó a todo el Mediterráneo oriental. Egipto sobrevivió como Estado —Ramsés III rechazó las incursiones de los llamados Pueblos del Mar—, pero salió debilitado: pérdida de las posesiones asiáticas, inflación del grano documentada en los archivos, y creciente autonomía del sacerdocio de Amón, que terminó gobernando de hecho el sur del país.',
          'Desde el primer milenio, Egipto fue gobernado sucesivamente por dinastías libias, la dinastía kushita procedente de Napata, los asirios, los persas aqueménidas y, desde 332 a. C., los macedonios. Los Ptolomeos mantuvieron un Estado egipcio con corte griega en Alejandría y una legitimación faraónica hacia el interior. La derrota de Cleopatra VII y Marco Antonio en Accio (31 a. C.) y la anexión por Octavio en 30 a. C. cierran la independencia política: Egipto pasó a ser una provincia de estatuto singular, administrada directamente por el emperador, y siguió siendo durante siglos el granero de Roma.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Maat', definition: 'Orden, verdad y justicia cósmica y social que el faraón debía garantizar frente al isfet (caos).' },
      { term: 'Kemet / Deshret', definition: '«Tierra negra» del limo cultivable frente a «tierra roja» del desierto: la distinción básica del espacio egipcio.' },
      { term: 'Akhet, peret, shemu', definition: 'Las tres estaciones del calendario agrícola: inundación, siembra y cosecha.' },
      { term: 'Nomo', definition: 'Circunscripción administrativa provincial, gobernada por un nomarca. Su hereditariedad señala debilidad del poder central.' },
      { term: 'Corvea', definition: 'Trabajo obligatorio en obras públicas exigido a la población campesina, concentrado en la estación de inundación.' },
      { term: 'Ostracon', definition: 'Fragmento de cerámica o caliza usado como soporte de escritura barato. Base documental de Deir el-Medina.' },
      { term: 'Sincretismo', definition: 'Fusión de divinidades (Amón-Ra, Ptah-Sokar-Osiris) sin eliminar los cultos previos.' },
      { term: 'Periodo Intermedio', definition: 'Fase de fragmentación del poder central entre dos Imperios, con dinastías simultáneas y rivales.' },
      { term: 'Epagómenos', definition: 'Los cinco días añadidos al final del calendario civil de 360 días para completar el año de 365.' },
      { term: 'Damnatio memoriae', definition: 'Borrado deliberado del nombre y la imagen de un gobernante, aplicado a Akenatón y a Hatshepsut.' },
    ],
    debates: [
      {
        question: '¿Nació el Estado egipcio de la necesidad de gestionar el riego a gran escala?',
        positions: [
          {
            school: 'Tesis hidráulica (Wittfogel, 1957)',
            argument:
              'Los grandes Estados antiguos surgirían del control centralizado de sistemas de irrigación masivos, que exigirían una burocracia coercitiva. Egipto sería el caso ejemplar de este «despotismo oriental».',
          },
          {
            school: 'Crítica ecológica y arqueológica (Butzer, 1976)',
            argument:
              'La irrigación egipcia fue de cuenca, gestionada localmente, y las grandes obras hidráulicas documentadas son posteriores a la formación del Estado. La causalidad se invierte: el Estado ya existente amplió el riego, no al revés.',
          },
        ],
        state:
          'La tesis de Wittfogel está hoy mayoritariamente rechazada como explicación causal. El debate se ha desplazado hacia el papel de la competencia entre centros predinásticos, el control del comercio de larga distancia y la ideología real como factores de formación estatal.',
      },
      {
        question: '¿Quién construyó las pirámides y en qué condiciones?',
        positions: [
          {
            school: 'Relato clásico (Heródoto, s. V a. C.)',
            argument:
              'Cien mil hombres trabajando en turnos bajo coacción durante veinte años, en una obra descrita como una tiranía que cerró los templos y arruinó al país.',
          },
          {
            school: 'Arqueología del asentamiento (Lehner y Hawass, desde 1988)',
            argument:
              'El poblado de constructores de Guiza revela panaderías, cervecerías, dormitorios y un consumo cárnico elevado, compatible con equipos rotatorios de trabajadores egipcios mantenidos por el Estado, con jerarquías técnicas y atención médica documentada en los restos óseos.',
          },
        ],
        state:
          'El consenso actual descarta la esclavitud masiva y sitúa la obra dentro del sistema de corvea estacional. Sigue discutiéndose el tamaño exacto de la fuerza de trabajo permanente frente a la estacional y el coste real de la obra sobre la economía agraria.',
      },
      {
        question: '¿Fue la reforma de Akenatón un monoteísmo?',
        positions: [
          {
            school: 'Lectura monoteísta (Breasted; Freud, 1939)',
            argument:
              'El atonismo habría sido la primera religión monoteísta de la historia y una posible fuente del monoteísmo israelita, dado el cierre de otros cultos y los himnos que atribuyen a Atón la creación universal.',
          },
          {
            school: 'Lectura contextual (Assmann; Hornung)',
            argument:
              'Se trataría más bien de una henoteísmo real y excluyente: el propio Akenatón seguía siendo objeto de culto y el acceso a Atón pasaba por él. No hay continuidad documental que enlace Amarna con Israel.',
          },
        ],
        state:
          'La egiptología actual describe la reforma como un caso singular de exclusivismo cultual impuesto desde la corona, sin descendencia religiosa directa. La comparación con el monoteísmo bíblico se considera problemática por falta de eslabones documentales.',
      },
    ],
    sources: [
      { author: 'Heródoto', title: 'Historias, libro II', year: 's. V a. C.', kind: 'primaria', note: 'Descripción griega de Egipto: valiosa como testimonio de recepción, poco fiable en cronología y en el relato de las pirámides.' },
      { author: 'Anónimo', title: 'Enseñanza de Khety (Sátira de los oficios)', year: 'Imperio Medio', kind: 'primaria', note: 'Texto escolar que exalta la condición del escriba frente a los oficios manuales.' },
      { author: 'Anónimo', title: 'Admoniciones de Ipuwer', year: 'Imperio Medio (datación discutida)', kind: 'primaria', note: 'Lamento por un orden social invertido; usado con cautela como fuente del Primer Periodo Intermedio.' },
      { author: 'Diversos autores', title: 'Cartas de Amarna', year: 'c. 1360–1330 a. C.', kind: 'primaria', note: 'Correspondencia diplomática en acadio entre Egipto y las cortes de Oriente Próximo.' },
      { author: 'Merer', title: 'Papiros de Uadi al-Yarf', year: 'c. 2560 a. C.', kind: 'primaria', note: 'Diario logístico del transporte de caliza a Guiza. Documentación administrativa más antigua conservada.' },
      { author: 'Karl W. Butzer', title: 'Early Hydraulic Civilization in Egypt: A Study in Cultural Ecology', year: '1976', kind: 'estudio', note: 'Refutación ecológica de la tesis del despotismo hidráulico.' },
      { author: 'Jan Assmann', title: 'Maat: Gerechtigkeit und Unsterblichkeit im Alten Ägypten', year: '1990', kind: 'estudio', note: 'La maat como principio de reciprocidad social, no solo cosmológico.' },
      { author: 'Barry J. Kemp', title: 'Ancient Egypt: Anatomy of a Civilization', year: '1989 (3.ª ed. 2018)', kind: 'estudio', note: 'Síntesis de referencia sobre Estado, ideología y economía egipcios.' },
      { author: 'Mark Lehner', title: 'The Complete Pyramids', year: '1997', kind: 'estudio', note: 'Arqueología constructiva y del asentamiento de trabajadores de Guiza.' },
      { author: 'Toby A. H. Wilkinson', title: 'The Rise and Fall of Ancient Egypt', year: '2010', kind: 'estudio', note: 'Narrativa general que subraya el carácter coercitivo del Estado faraónico.' },
      { author: 'Erik Hornung', title: 'Akhenaten and the Religion of Light', year: '1995 (trad. 1999)', kind: 'estudio', note: 'Análisis de la reforma atoniana frente a las lecturas monoteístas.' },
    ],
  },
  questions: [
    {
      id: 'egipto-1', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué rasgo del régimen del Nilo resultó más decisivo para la formación del Estado egipcio?',
      options: ['Su caudal absoluto', 'Su predictibilidad estacional', 'Su navegabilidad hasta el mar', 'Su riqueza pesquera'],
      answer: 1,
      explanation: 'La regularidad del ciclo permitía anticipar cosechas, fijar impuestos antes de recogerlos y planificar la corvea. El Tigris y el Éufrates, más irregulares, no ofrecían esa base.',
    },
    {
      id: 'egipto-2', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué sostiene la crítica de Karl Butzer a la tesis del «despotismo hidráulico» de Wittfogel?',
      options: [
        'Que Egipto careció por completo de irrigación',
        'Que la irrigación fue de cuenca y local, y las grandes obras posteriores a la formación del Estado',
        'Que el riego lo gestionaban exclusivamente los templos',
        'Que la crecida hacía innecesaria cualquier obra hidráulica',
      ],
      answer: 1,
      explanation: 'Butzer invierte la causalidad: no fue el riego el que creó el Estado, sino un Estado ya formado el que amplió después los sistemas hidráulicos.',
    },
    {
      id: 'egipto-3', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué documentan los papiros de Uadi al-Yarf?',
      options: [
        'El ritual de coronación de Keops',
        'El diario logístico del transporte de caliza a Guiza',
        'El tratado con los hititas',
        'El censo de sacerdotes de Amón',
      ],
      answer: 1,
      explanation: 'El diario del inspector Merer, hallado en 2013, registra los viajes de su equipo desde las canteras de Tura. Es la documentación administrativa más antigua conservada en Egipto.',
    },
    {
      id: 'egipto-4', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: 'La hereditariedad de los cargos de nomarca y la monumentalización de sus tumbas provinciales indican, sobre todo…',
      options: ['Un aumento del poder faraónico', 'Un retroceso del poder central', 'La llegada de dinastías extranjeras', 'Una reforma religiosa'],
      answer: 1,
      explanation: 'Cuando las élites provinciales se perpetúan y se entierran con lujo en sus nomos, están capturando recursos que antes fluían al centro. Es un indicador clásico de descentralización.',
    },
    {
      id: 'egipto-5', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué explica la concentración de la corvea en los meses de inundación?',
      options: [
        'Que el calor impedía trabajar el resto del año',
        'Que el campo estaba anegado y la mano de obra agraria quedaba disponible',
        'Que los templos prohibían trabajar en la siembra',
        'Que las canteras solo eran accesibles con el río bajo',
      ],
      answer: 1,
      explanation: 'La estacionalidad agraria liberaba trabajo justo cuando el transporte fluvial de bloques era además más fácil. El sistema aprovechaba ambos factores.',
    },
    {
      id: 'egipto-6', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué muestra la evidencia arqueológica del poblado de constructores de Guiza?',
      options: [
        'Barracones de esclavos extranjeros',
        'Panaderías, cervecerías y consumo cárnico propios de trabajadores mantenidos por el Estado',
        'Que la pirámide se construyó con mano de obra militar cautiva',
        'Que el poblado se abandonó antes de terminar la obra',
      ],
      answer: 1,
      explanation: 'Las excavaciones de Lehner y Hawass documentan infraestructura de abastecimiento, jerarquías técnicas y atención médica en los restos óseos: equipos organizados, no esclavitud masiva.',
    },
    {
      id: 'egipto-7', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Por qué Deir el-Medina es un yacimiento excepcional?',
      options: [
        'Porque conserva el único templo solar completo',
        'Porque sus ostraca documentan la vida cotidiana: raciones, pleitos, enfermedades y una huelga',
        'Porque contiene la tumba intacta de un faraón',
        'Porque allí se halló la piedra de Rosetta',
      ],
      answer: 1,
      explanation: 'La comunidad de artesanos del Valle de los Reyes dejó miles de textos ordinarios. En el año 29 de Ramsés III el retraso de las raciones provocó la primera huelga documentada.',
    },
    {
      id: 'egipto-8', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué proceso reflejan los Textos de las Pirámides, los Textos de los Sarcófagos y el Libro de los Muertos?',
      options: [
        'La sustitución del politeísmo por el monoteísmo',
        'La progresiva extensión del acceso al más allá desde el rey a la élite y a quien pudiera pagarlo',
        'El abandono de la momificación',
        'La centralización del culto en Karnak',
      ],
      answer: 1,
      explanation: 'Es la llamada «democratización del más allá»: lo que en el Imperio Antiguo era prerrogativa real acaba circulando en copias comerciales con espacio para el nombre del comprador.',
    },
    {
      id: 'egipto-9', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Cómo describe hoy la egiptología mayoritaria la reforma de Akenatón?',
      options: [
        'Como el primer monoteísmo, origen directo del judaísmo',
        'Como un exclusivismo cultual impuesto desde la corona, sin continuidad documental posterior',
        'Como una restauración del culto tradicional a Amón',
        'Como una invención de la historiografía del siglo XIX',
      ],
      answer: 1,
      explanation: 'Assmann y Hornung subrayan que el acceso a Atón pasaba por el propio rey, objeto de culto, y que no existen eslabones documentales que enlacen Amarna con el monoteísmo israelita.',
    },
    {
      id: 'egipto-10', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: 'El papiro Edwin Smith destaca porque…',
      options: [
        'Contiene solo ensalmos mágicos',
        'Ordena cuarenta y ocho casos de traumatismos con examen, diagnóstico y pronóstico',
        'Recoge el calendario de las crecidas',
        'Describe el proceso completo de momificación',
      ],
      answer: 1,
      explanation: 'Su estructura es clínica y llega a admitir casos intratables. La magia convivía con ese registro sin que sus autores percibieran contradicción.',
    },
    {
      id: 'egipto-11', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué desfase producía el calendario civil egipcio de 365 días?',
      options: [
        'Ninguno: era exacto',
        'Un desplazamiento acumulativo por prescindir del cuarto de día sobrante',
        'Un adelanto de un mes por siglo por contar 13 meses',
        'Un retraso causado por los cinco días epagómenos',
      ],
      answer: 1,
      explanation: 'Al no intercalar el día bisiesto, el año civil se desplazaba respecto al año solar. Los propios egipcios eran conscientes del desfase.',
    },
    {
      id: 'egipto-12', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué aportó Champollion en su Lettre à M. Dacier (1822)?',
      options: [
        'Que los jeroglíficos eran símbolos puramente conceptuales',
        'Que el sistema registraba a la vez sonidos y significados',
        'Que el egipcio derivaba del griego',
        'Que la piedra de Rosetta era una falsificación',
      ],
      answer: 1,
      explanation: 'Frente a la tradición simbolista heredada de Horapolo, Champollion demostró el carácter mixto —fonético y semántico— de la escritura.',
    },
    {
      id: 'egipto-13', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué revelan las cartas de Amarna sobre el sistema internacional del Bronce Final?',
      options: [
        'Que Egipto no mantenía relaciones exteriores',
        'Que existía una diplomacia regulada en acadio, con matrimonios dinásticos e intercambio de regalos',
        'Que los hititas eran vasallos de Egipto',
        'Que el comercio se hacía solo por vía marítima',
      ],
      answer: 1,
      explanation: 'La correspondencia con Babilonia, Mitani, Hatti y los príncipes cananeos muestra protocolos estables entre «grandes reyes» y una red de vasallaje en Siria-Palestina.',
    },
    {
      id: 'egipto-14', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Cuál fue el resultado real de la batalla de Qadesh?',
      options: [
        'Victoria egipcia decisiva, como afirman los relieves de Ramsés II',
        'Un empate estratégico que desembocó en un tratado con Hattusili III',
        'La conquista hitita del delta',
        'La pérdida egipcia de Nubia',
      ],
      answer: 1,
      explanation: 'La propaganda monumental de Ramsés II presenta una victoria personal, pero el desenlace fue un equilibrio que hacia 1259 a. C. se formalizó en un tratado conservado en ambas versiones.',
    },
    {
      id: 'egipto-15', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué consecuencia interna tuvo para Egipto el colapso del Bronce Final?',
      options: [
        'La desaparición inmediata del Estado egipcio',
        'La pérdida de las posesiones asiáticas y la creciente autonomía del sacerdocio de Amón',
        'La adopción del alfabeto fenicio como escritura oficial',
        'El traslado definitivo de la capital a Alejandría',
      ],
      answer: 1,
      explanation: 'Egipto resistió las incursiones de los Pueblos del Mar, pero salió debilitado: inflación del grano documentada y un clero tebano que acabó gobernando de hecho el sur.',
    },
    {
      id: 'egipto-16', era: 'Antigüedad', topicId: 'egipto', topic: 'Egipto',
      question: '¿Qué estatuto tuvo Egipto tras la anexión de 30 a. C.?',
      options: [
        'Provincia senatorial ordinaria',
        'Provincia de estatuto singular administrada directamente por el emperador',
        'Reino cliente con dinastía propia',
        'Territorio libre de impuestos'],
      answer: 1,
      explanation: 'Por su valor estratégico como granero, Augusto la reservó a su control personal mediante un prefecto de rango ecuestre, y vetó el acceso de senadores sin permiso imperial.',
    },
  ],
}
