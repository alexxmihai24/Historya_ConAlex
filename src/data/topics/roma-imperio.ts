import type { TopicModule } from '../types.ts'

export const romaImperio: TopicModule = {
  topic: {
    id: 'roma-imperio',
    era: 'Antigüedad',
    title: 'El Imperio romano y su transformación',
    years: '27 a. C.–476 d. C.',
    country: 'Italia',
    description: 'Principado, romanización, crisis del siglo III, cristianización y el debate sobre la caída.',
    duration: '50 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚵',
    color: 'gold',
    summary:
      'El Imperio romano fue durante siglos el mayor Estado que había existido en Occidente: unos cincuenta millones de habitantes, cuatro millones de kilómetros cuadrados y una integración económica y cultural sin precedentes. Su historia plantea dos preguntas mayores. Cómo un sistema que nunca resolvió la sucesión ni la financiación logró mantenerse tanto tiempo; y qué significa exactamente que «cayera», una expresión que la investigación de las últimas décadas ha sometido a revisión profunda.',
    keyDates: [
      { date: '27 a. C.', event: 'Octavio recibe el nombre de Augusto: nace el principado.' },
      { date: '9 d. C.', event: 'Desastre de Teutoburgo; el Rin queda como frontera.' },
      { date: '69 d. C.', event: 'Año de los cuatro emperadores: el ejército decide la sucesión.' },
      { date: '117 d. C.', event: 'Máxima extensión territorial bajo Trajano.' },
      { date: '122 d. C.', event: 'Inicio del muro de Adriano: de la expansión a la consolidación.' },
      { date: '165–180 d. C.', event: 'Peste antonina; mortalidad estimada entre el 10 % y el 25 %.' },
      { date: '212 d. C.', event: 'Constitutio Antoniniana: ciudadanía a casi todos los habitantes libres.' },
      { date: '235–284 d. C.', event: 'Crisis del siglo III: anarquía militar, invasiones e inflación.' },
      { date: '284–305 d. C.', event: 'Diocleciano: tetrarquía, reforma fiscal y administrativa.' },
      { date: '313 d. C.', event: 'Edicto de Milán: tolerancia del cristianismo.' },
      { date: '325 d. C.', event: 'Concilio de Nicea.' },
      { date: '380 d. C.', event: 'Edicto de Tesalónica: el cristianismo niceno, religión oficial.' },
      { date: '378 d. C.', event: 'Adrianópolis: derrota y muerte del emperador Valente ante los godos.' },
      { date: '395 d. C.', event: 'División administrativa definitiva entre Oriente y Occidente.' },
      { date: '410 d. C.', event: 'Saqueo de Roma por Alarico.' },
      { date: '476 d. C.', event: 'Odoacro depone a Rómulo Augústulo: fin convencional del Imperio de Occidente.' },
    ],
    sections: [
      {
        title: 'El principado: un poder sin nombre',
        body: [
          'Augusto resolvió el problema que había matado a César: cómo ejercer un poder monárquico en una sociedad que odiaba el título de rey. Su solución fue no crear ningún cargo nuevo. Acumuló poderes republicanos existentes —imperium proconsular sobre las provincias con ejército, potestad tribunicia vitalicia, pontificado máximo— y se llamó a sí mismo princeps, «el primero», un término sin contenido jurídico.',
          'El resultado fue un régimen deliberadamente ambiguo. El Senado seguía reuniéndose, los cónsules seguían eligiéndose, las formas republicanas continuaban intactas. Augusto proclamó en sus *Res Gestae* que había devuelto la República y que solo superaba a los demás en auctoritas, prestigio. Tácito, un siglo después, describió la operación con precisión brutal: los nombres de las magistraturas permanecieron, la sustancia cambió.',
          'La ambigüedad tenía un coste: no existía una regla de sucesión. Augusto intentó resolverlo por adopción dentro de su familia, pero el sistema quedó estructuralmente indefinido. El año 69, con cuatro emperadores en doce meses, reveló lo que Tácito llamó el «secreto del imperio»: que se podía proclamar emperador fuera de Roma, y que quien decidía era el ejército.',
          'Pese a ello, el sistema funcionó durante dos siglos con notable eficacia. El llamado siglo de los Antoninos (96-180 d. C.) combinó adopción de sucesores competentes, paz interior, expansión limitada y prosperidad comercial. Edward Gibbon lo consideró el periodo más feliz de la humanidad, juicio que hoy se matiza recordando que descansaba sobre la esclavitud, una fiscalidad regresiva y una desigualdad enorme.',
        ].join('\n\n'),
        callout:
          'Las Res Gestae Divi Augusti, inscritas en bronce y copiadas por el imperio, son autobiografía política: hay que leerlas como propaganda cuidadosamente construida, no como memoria fiable.',
      },
      {
        title: 'Cómo funcionaba el imperio: fiscalidad, ejército y ciudades',
        body: [
          'El Estado romano era, para su tamaño, asombrosamente ligero. Se calcula que la administración imperial contaba con unos pocos centenares de altos funcionarios para cincuenta millones de habitantes. La gestión ordinaria recaía en las ciudades: recaudación, orden público, obras, culto. El imperio funcionaba porque cooptó a las élites locales, que asumían cargos costosos a cambio de estatus, y en cuya lealtad descansaba todo el edificio.',
          'La principal partida de gasto era el ejército: entre 300.000 y 400.000 hombres, que consumían la mayor parte del presupuesto. El grueso de los ingresos provenía de impuestos sobre la tierra y las personas en las provincias. Italia estuvo exenta del tributo directo hasta Diocleciano, una asimetría que revela el carácter originalmente extractivo del sistema.',
          'La romanización se entendió durante mucho tiempo como difusión de una cultura superior hacia periferias receptivas. Esa lectura, formulada por Theodor Mommsen y sistematizada por Francis Haverfield en un contexto de imperialismo británico, ha sido revisada a fondo. Hoy se prefiere hablar de procesos de negociación e hibridación: las élites provinciales adoptaron selectivamente lengua, urbanismo y dioses romanos porque les daban acceso a poder y estatus, y en el proceso crearon formas mixtas —cultos sincréticos, onomástica doble, arquitectura adaptada— que no son ni indígenas ni romanas.',
          'La cohesión económica fue notable. Los estudios de núcleos de hielo de Groenlandia muestran picos de contaminación por plomo en época altoimperial no igualados hasta la Revolución Industrial; los pecios mediterráneos alcanzan su máxima frecuencia entre el siglo I a. C. y el I d. C. El comercio de larga distancia movía grano egipcio y africano, aceite bético, vino itálico y galo, cerámica producida en serie.',
          'La Constitutio Antoniniana de Caracalla (212 d. C.) concedió la ciudadanía a prácticamente todos los habitantes libres del imperio. Se ha discutido si fue una medida integradora o simplemente fiscal —ampliar la base de los impuestos que solo pagaban los ciudadanos—. Probablemente ambas: cerró un proceso de siglos y disolvió la distinción jurídica que había estructurado el mundo romano, sustituida por otra nueva entre honestiores y humiliores, es decir, entre acomodados y pobres.',
        ].join('\n\n'),
      },
      {
        title: 'La crisis del siglo III',
        body: [
          'Entre 235 y 284 d. C. el imperio estuvo cerca del colapso. Hubo más de veinte emperadores reconocidos y numerosos usurpadores; casi ninguno murió de muerte natural. Las legiones proclamaban candidatos y los deponían, y la guerra civil se hizo endémica.',
          'La presión exterior aumentó simultáneamente en dos frentes. En el Rin y el Danubio, confederaciones germánicas más grandes y mejor organizadas —alamanes, francos, godos— sustituyeron a las tribus dispersas de época altoimperial. En Oriente, el Imperio sasánida, surgido en 224, era un adversario estatal de primer orden: en 260 capturó vivo al emperador Valeriano, humillación sin precedentes.',
          'A ello se sumó una crisis monetaria de manual. Para pagar al ejército, los emperadores redujeron el contenido de plata del denario, que pasó de un 90 % en época de Augusto a menos del 5 % a mediados del siglo III. El resultado fue una inflación descontrolada, la vuelta parcial a pagos en especie y la ruptura de circuitos comerciales. La peste de Cipriano, hacia 249-262, añadió mortalidad masiva.',
          'El imperio llegó a fragmentarse: el Imperio galo (260-274) y el reino de Palmira bajo Zenobia funcionaron como Estados independientes durante más de una década. Que se reunificara es tan significativo como que se rompiera.',
          'La recuperación llegó con Aureliano y, sobre todo, con Diocleciano. Este dividió el poder en la tetrarquía —dos augustos y dos césares, con sucesión planificada—, duplicó el número de provincias para reducir el poder de cada gobernador, separó mando militar y administración civil, reformó la fiscalidad con un sistema de unidades de tierra y de trabajo (iugatio-capitatio) e intentó frenar la inflación con un edicto de precios máximos que fracasó. El Estado resultante era mucho más grande, más caro y más coactivo que el altoimperial.',
        ].join('\n\n'),
        callout:
          'El Edicto de Precios Máximos de 301 fijaba tarifas para más de mil productos y servicios, con pena de muerte por incumplimiento. Es la fuente más rica sobre la economía tardorromana y, a la vez, el testimonio de su fracaso: los bienes desaparecieron del mercado.',
      },
      {
        title: 'Cristianización: de secta perseguida a religión de Estado',
        body: [
          'El cristianismo era, en el siglo I, un movimiento judío minoritario. Su expansión inicial se apoyó en las redes urbanas del imperio, en la lengua griega común y en las rutas comerciales. Las persecuciones fueron episódicas y menos masivas de lo que sugiere la tradición martirial: la de Decio (250) y la de Diocleciano (303-311) fueron las únicas de alcance imperial y sistemático.',
          'Lo que resulta históricamente notable no es la persecución, sino el crecimiento. Rodney Stark ha estimado, a partir de una tasa de crecimiento sostenido en torno al 3,4 % anual, que los cristianos pasarían de unos pocos miles a comienzos del siglo II a varios millones a comienzos del IV: en torno al 10 % de la población en vísperas de Constantino. El cálculo es una modelización discutida, pero la magnitud del orden se acepta.',
          'Las explicaciones del éxito combinan varios factores: una comunidad con asistencia mutua efectiva —viudas, huérfanos, enfermos, entierros—, una doctrina de salvación universal accesible sin requisitos de nacimiento ni de riqueza, una posición favorable entre las mujeres, y una exclusividad que, a diferencia de los cultos paganos, impedía la vuelta atrás.',
          'La conversión de Constantino cambió la escala. El Edicto de Milán (313) estableció la tolerancia; el emperador financió basílicas, concedió privilegios fiscales al clero y convocó el concilio de Nicea (325) para resolver la disputa arriana sobre la naturaleza de Cristo. La intervención imperial en cuestiones doctrinales inauguró una relación de dependencia mutua entre Iglesia e Imperio que marcaría siglos.',
          'Con el Edicto de Tesalónica (380), Teodosio hizo del cristianismo niceno la religión oficial y, en la década siguiente, prohibió los cultos tradicionales. La relación se invirtió por completo en menos de un siglo: la religión perseguida se convirtió en perseguidora. El episodio de Ambrosio de Milán obligando a Teodosio a hacer penitencia pública tras la matanza de Tesalónica (390) muestra que la Iglesia había adquirido capacidad de imponer límites al poder imperial.',
        ].join('\n\n'),
      },
      {
        title: 'El siglo V en Occidente: qué ocurrió realmente',
        body: [
          'La imagen de hordas bárbaras derribando un imperio no resiste el examen. Los grupos que entraron en el imperio eran demográficamente pequeños —las estimaciones para los vándalos que pasaron a África en 429 rondan las 80.000 personas, incluidas mujeres y niños—, estaban parcialmente romanizados, buscaban tierras y estatus dentro del sistema y a menudo servían como tropas federadas del propio ejército romano.',
          'La secuencia es más bien de erosión fiscal. Cada territorio perdido reducía los ingresos; con menos ingresos había menos ejército; con menos ejército se perdían más territorios. La pérdida de África en 439, la provincia más rica y granero de Roma, fue probablemente el golpe decisivo. Chris Wickham y Bryan Ward-Perkins han insistido en este mecanismo acumulativo.',
          'La política interna agravó el proceso. El poder efectivo pasó a manos de generales —Estilicón, Aecio, Ricimero—, con frecuencia de origen bárbaro, que hacían y deshacían emperadores. Roma dejó de ser capital, sustituida por Milán y después por Rávena. Cuando en 476 Odoacro depuso a Rómulo Augústulo, no proclamó un nuevo imperio: envió las insignias imperiales a Constantinopla y gobernó Italia como representante nominal del emperador de Oriente. Los contemporáneos no percibieron el fin de nada.',
          'Mientras tanto, el Imperio de Oriente sobrevivió otros mil años. Esa asimetría es el mejor argumento contra las explicaciones globales: cualquier causa que se invoque —cristianismo, decadencia moral, plomo en las cañerías, presión bárbara— debería explicar también por qué Oriente resistió. Oriente tenía fronteras más cortas y defendibles, una base fiscal más rica —Egipto, Siria— y una capital inexpugnable.',
          'Las consecuencias materiales en Occidente sí fueron severas. Ward-Perkins ha documentado, a partir de la cultura material, una caída drástica en la calidad y difusión de la cerámica, en el tamaño del ganado, en la circulación monetaria y en el uso de tejas: indicadores de un descenso general del nivel de vida y de la complejidad económica. Su libro *La caída de Roma y el fin de la civilización* (2005) reaccionó explícitamente contra las lecturas que presentan el periodo como una transición amable.',
        ].join('\n\n'),
        callout:
          'El propio término «bárbaro» procede del griego y designaba a quien no hablaba griego. Aplicado sin más a los pueblos del siglo V, importa una imagen de otredad radical que las fuentes arqueológicas no sostienen.',
      },
      {
        title: 'El legado: derecho, lengua y una idea de imperio',
        body: [
          'La aportación romana más duradera no fue política, sino jurídica. El derecho romano desarrolló categorías —propiedad, contrato, obligación, persona jurídica, buena fe— con un nivel de abstracción que ninguna otra tradición antigua alcanzó. Su recopilación en el *Corpus Iuris Civilis* de Justiniano (528-534) y su redescubrimiento en Bolonia en el siglo XI lo convirtieron en la base de los sistemas jurídicos continentales europeos y latinoamericanos.',
          'La huella lingüística es igualmente estructural. El latín vulgar de las provincias occidentales derivó en las lenguas romances: castellano, portugués, catalán, gallego, francés, occitano, italiano, rumano. Y el latín culto siguió siendo la lengua de la administración, la Iglesia, el derecho y la ciencia europeos hasta el siglo XVIII.',
          'La idea de imperio como orden universal legítimo sobrevivió a la desaparición del Estado que la había encarnado. Se reclamó en el imperio carolingio, en el Sacro Imperio Romano Germánico, en la Rusia que se llamó a sí misma «tercera Roma», y en la iconografía política de las monarquías modernas. La palabra káiser y la palabra zar derivan ambas de César.',
          'Conviene, sin embargo, resistir la tentación de leer Roma como antecesora directa de nada. Fue una sociedad esclavista en la que quizá entre un 10 % y un 20 % de la población carecía de personalidad jurídica; su expansión implicó exterminios documentados por sus propios autores, como el de la Galia narrado por César; y su prosperidad descansaba en una extracción fiscal sobre provincias sometidas. El interés histórico de Roma no está en su ejemplaridad, sino en que es el caso mejor documentado de cómo se construye, se mantiene y se deshace un Estado de escala continental.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Princeps', definition: '«El primero»: título sin contenido jurídico con el que Augusto disimuló un poder monárquico.' },
      { term: 'Auctoritas', definition: 'Prestigio y ascendiente moral. Augusto afirmó superar a los demás solo en esto, no en poder formal.' },
      { term: 'Potestad tribunicia', definition: 'Poder vitalicio de veto e inviolabilidad que el emperador acumulaba sin ser tribuno.' },
      { term: 'Constitutio Antoniniana', definition: 'Edicto de Caracalla (212) que concedió la ciudadanía a casi todos los habitantes libres del imperio.' },
      { term: 'Honestiores / humiliores', definition: 'Nueva distinción jurídica tras 212: acomodados frente a pobres, con penas distintas por el mismo delito.' },
      { term: 'Tetrarquía', definition: 'Sistema de Diocleciano con dos augustos y dos césares para repartir el gobierno y planificar la sucesión.' },
      { term: 'Iugatio-capitatio', definition: 'Sistema fiscal tardorromano basado en unidades de tierra y de trabajo.' },
      { term: 'Limes', definition: 'Sistema fronterizo fortificado, más zona de control y contacto que muralla estanca.' },
      { term: 'Foederati', definition: 'Pueblos asentados dentro del imperio con obligación de aportar tropas bajo sus propios jefes.' },
      { term: 'Romanización', definition: 'Antes, difusión cultural unidireccional; hoy se entiende como negociación e hibridación entre Roma y las élites locales.' },
      { term: 'Corpus Iuris Civilis', definition: 'Compilación jurídica de Justiniano (528-534), base del derecho continental europeo tras su redescubrimiento medieval.' },
    ],
    debates: [
      {
        question: '¿Por qué cayó el Imperio romano de Occidente?',
        positions: [
          {
            school: 'Decadencia interna (Gibbon, 1776-1789)',
            argument:
              'La pérdida de virtud cívica, el peso del ejército mercenario y, señaladamente, el cristianismo, que habría desviado energías hacia el más allá y debilitado el espíritu militar y la lealtad al Estado.',
          },
          {
            school: 'Erosión fiscal y militar (Ward-Perkins, Heather)',
            argument:
              'La pérdida de provincias redujo los ingresos, lo que redujo el ejército, lo que provocó nuevas pérdidas. La caída de África en 439 fue decisiva. La presión externa, real y creciente, actuó sobre un Estado fiscalmente estrangulado.',
          },
          {
            school: 'Transformación, no caída (Brown, Goffart)',
            argument:
              'No hubo colapso sino una larga transición: los reinos germánicos se instalaron dentro de estructuras romanas, conservaron la administración, el latín y la Iglesia, y la Antigüedad tardía fue una época de creatividad religiosa y cultural propia.',
          },
        ],
        state:
          'El paradigma de la «transformación» dominó los años ochenta y noventa; Ward-Perkins y Heather reaccionaron aportando evidencia material de un descenso severo del nivel de vida en Occidente. Hoy se acepta que hubo a la vez continuidad institucional y una regresión económica real, con enorme variación regional. La supervivencia de Oriente sigue siendo el mejor test de cualquier explicación.',
      },
      {
        question: '¿Qué fue la romanización?',
        positions: [
          {
            school: 'Difusión cultural (Mommsen, Haverfield)',
            argument:
              'Roma habría llevado urbanismo, derecho, lengua y civilización a pueblos menos desarrollados, que los adoptaron por su superioridad evidente. Modelo formulado en pleno auge del imperialismo europeo.',
          },
          {
            school: 'Negociación e hibridación (Woolf, Mattingly)',
            argument:
              'Las élites provinciales adoptaron selectivamente elementos romanos porque daban acceso a poder y estatus, generando formas mixtas. Hubo también resistencia, indiferencia y desigualdad: la experiencia de la conquista fue muy distinta para una élite gala y para un campesino o un esclavo.',
          },
        ],
        state:
          'El modelo difusionista está descartado como marco explicativo. Se prefieren conceptos como «identidades discrepantes» (Mattingly) que reconocen experiencias divergentes dentro de una misma provincia.',
      },
      {
        question: '¿Fue la Constitutio Antoniniana una medida integradora o fiscal?',
        positions: [
          {
            school: 'Motivo fiscal (Dión Casio, contemporáneo)',
            argument:
              'Caracalla buscaba ampliar la base de los impuestos que solo gravaban a los ciudadanos, en particular el de sucesiones. Un historiador contemporáneo se lo atribuye explícitamente.',
          },
          {
            school: 'Culminación integradora',
            argument:
              'Cerraba un proceso secular de extensión progresiva de la ciudadanía y respondía a que la distinción entre ciudadano y peregrino había perdido sentido práctico en un imperio ya homogeneizado.',
          },
        ],
        state:
          'Se admiten ambos motivos como compatibles. Lo más relevante es su consecuencia: la ciudadanía dejó de ser un privilegio distintivo y fue sustituida por la división socioeconómica entre honestiores y humiliores.',
      },
    ],
    sources: [
      { author: 'Augusto', title: 'Res Gestae Divi Augusti', year: '14 d. C.', kind: 'primaria', note: 'Autobiografía política inscrita en bronce y copiada por el imperio. Propaganda, no memoria fiable.' },
      { author: 'Tácito', title: 'Anales; Historias; Germania', year: 'c. 110–120 d. C.', kind: 'primaria', note: 'Análisis crítico del principado desde la perspectiva senatorial. Formula el «secreto del imperio».' },
      { author: 'Plinio el Joven', title: 'Cartas, libro X', year: 'c. 111 d. C.', kind: 'primaria', note: 'Correspondencia con Trajano: administración provincial y primer testimonio oficial sobre los cristianos.' },
      { author: 'Diocleciano', title: 'Edicto de Precios Máximos', year: '301 d. C.', kind: 'primaria', note: 'Tarifas para más de mil bienes y servicios. Fuente central sobre la economía tardorromana.' },
      { author: 'Amiano Marcelino', title: 'Res Gestae', year: 'c. 390 d. C.', kind: 'primaria', note: 'Última gran historia latina; narra Adrianópolis como testigo cercano.' },
      { author: 'Agustín de Hipona', title: 'La ciudad de Dios', year: '413–426', kind: 'primaria', note: 'Respuesta al saqueo de 410 y a la acusación de que el cristianismo había causado la ruina de Roma.' },
      { author: 'Edward Gibbon', title: 'The History of the Decline and Fall of the Roman Empire', year: '1776–1789', kind: 'estudio', note: 'Obra fundacional del debate; responsabiliza en parte al cristianismo.' },
      { author: 'Peter Brown', title: 'The World of Late Antiquity', year: '1971', kind: 'estudio', note: 'Funda el paradigma de la Antigüedad tardía como transformación creativa y no como decadencia.' },
      { author: 'Bryan Ward-Perkins', title: 'The Fall of Rome and the End of Civilization', year: '2005', kind: 'estudio', note: 'Reacción contra el paradigma de la transformación, con evidencia arqueológica de regresión material.' },
      { author: 'Peter Heather', title: 'The Fall of the Roman Empire: A New History', year: '2005', kind: 'estudio', note: 'Subraya el papel real de la presión externa sobre un Estado fiscalmente debilitado.' },
      { author: 'Greg Woolf', title: 'Becoming Roman: The Origins of Provincial Civilization in Gaul', year: '1998', kind: 'estudio', note: 'Modelo de romanización como negociación e hibridación.' },
      { author: 'Chris Wickham', title: 'Framing the Early Middle Ages', year: '2005', kind: 'estudio', note: 'Comparación regional sistemática de la transición entre el mundo romano y el medieval.' },
    ],
  },
  questions: [
    {
      id: 'roma-imperio-1', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Cómo resolvió Augusto el problema de ejercer un poder monárquico en Roma?',
      options: [
        'Proclamándose rey con apoyo del Senado',
        'Acumulando poderes republicanos existentes sin crear ningún cargo nuevo y llamándose princeps',
        'Aboliendo el Senado y las magistraturas',
        'Trasladando la capital fuera de Italia',
      ],
      answer: 1,
      explanation: 'Imperium proconsular, potestad tribunicia y pontificado máximo le daban el poder real. Las formas republicanas seguían intactas: Tácito dijo que cambiaron las cosas, no los nombres.',
    },
    {
      id: 'roma-imperio-2', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Cuál era el «secreto del imperio» que reveló el año 69 según Tácito?',
      options: [
        'Que el emperador podía ser depuesto por el Senado',
        'Que se podía proclamar emperador fuera de Roma y que quien decidía era el ejército',
        'Que las provincias eran más ricas que Italia',
        'Que la sucesión estaba fijada por ley',
      ],
      answer: 1,
      explanation: 'El principado nunca resolvió la sucesión. Cuatro emperadores en doce meses dejaron al descubierto quién ostentaba el poder decisivo.',
    },
    {
      id: 'roma-imperio-3', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿En qué descansaba la administración cotidiana del imperio?',
      options: [
        'En una burocracia imperial de decenas de miles de funcionarios',
        'En las ciudades y en las élites locales cooptadas, con muy pocos altos funcionarios imperiales',
        'En el ejército, que gobernaba cada provincia',
        'En el Senado, que administraba directamente cada región',
      ],
      answer: 1,
      explanation: 'Unos pocos centenares de altos funcionarios para cincuenta millones de habitantes. El sistema funcionaba porque las élites locales asumían cargos costosos a cambio de estatus.',
    },
    {
      id: 'roma-imperio-4', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Por qué se ha revisado el concepto clásico de «romanización»?',
      options: [
        'Porque Roma no influyó en las provincias',
        'Porque presentaba una difusión unidireccional de una cultura superior, modelo formulado en pleno imperialismo europeo',
        'Porque las provincias eran ya latinas antes de la conquista',
        'Porque no existen restos romanos fuera de Italia',
      ],
      answer: 1,
      explanation: 'Hoy se habla de negociación e hibridación: las élites adoptaron selectivamente lo romano por interés, y la experiencia fue muy distinta para un aristócrata galo que para un campesino.',
    },
    {
      id: 'roma-imperio-5', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué evidencia material demuestra la intensidad económica del alto imperio?',
      options: [
        'La ausencia de moneda',
        'Los picos de plomo en los núcleos de hielo de Groenlandia y la máxima frecuencia de pecios mediterráneos',
        'La desaparición de la cerámica producida en serie',
        'El abandono generalizado de las ciudades',
      ],
      answer: 1,
      explanation: 'Los niveles de contaminación por plomo no se igualaron hasta la Revolución Industrial. Los naufragios son un buen indicador indirecto del volumen de tráfico marítimo.',
    },
    {
      id: 'roma-imperio-6', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué distinción sustituyó a la de ciudadano y peregrino tras el edicto de 212?',
      options: [
        'Patricios y plebeyos',
        'Honestiores y humiliores: acomodados y pobres, con penas distintas por el mismo delito',
        'Itálicos y provinciales',
        'Cristianos y paganos',
      ],
      answer: 1,
      explanation: 'Al generalizarse la ciudadanía, dejó de ser un privilegio distintivo. La jerarquía jurídica pasó a apoyarse abiertamente en la posición socioeconómica.',
    },
    {
      id: 'roma-imperio-7', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué ocurrió con el contenido de plata del denario durante el siglo III?',
      options: [
        'Se mantuvo estable',
        'Cayó de un 90 % en época de Augusto a menos del 5 %, con inflación descontrolada',
        'Aumentó por la conquista de nuevas minas',
        'El denario fue sustituido por el oro puro',
      ],
      answer: 1,
      explanation: 'La devaluación servía para pagar al ejército. Provocó inflación, vuelta parcial a pagos en especie y ruptura de circuitos comerciales.',
    },
    {
      id: 'roma-imperio-8', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué nuevo adversario apareció en la frontera oriental en 224?',
      options: ['El reino de Palmira', 'El Imperio sasánida', 'Los alamanes', 'El reino de Armenia'],
      answer: 1,
      explanation: 'Era un adversario estatal de primer orden, no una confederación tribal. En 260 capturó vivo al emperador Valeriano.',
    },
    {
      id: 'roma-imperio-9', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué pretendía la tetrarquía de Diocleciano?',
      options: [
        'Dividir el imperio en cuatro Estados independientes',
        'Repartir el gobierno entre dos augustos y dos césares y planificar la sucesión',
        'Sustituir al ejército por milicias provinciales',
        'Restaurar la República',
      ],
      answer: 1,
      explanation: 'Junto con la duplicación de provincias y la separación de mando militar y administración civil, buscaba estabilizar el poder tras medio siglo de anarquía militar.',
    },
    {
      id: 'roma-imperio-10', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué factores explican mejor la expansión del cristianismo antes de Constantino?',
      options: [
        'La conversión forzosa impuesta por el ejército',
        'Asistencia mutua efectiva, salvación universal sin requisitos de nacimiento, posición favorable entre las mujeres y exclusividad',
        'El apoyo del Senado romano',
        'La prohibición de los cultos tradicionales',
      ],
      answer: 1,
      explanation: 'Las persecuciones fueron episódicas; solo las de Decio y Diocleciano tuvieron alcance imperial. Lo notable es el crecimiento sostenido, no la represión.',
    },
    {
      id: 'roma-imperio-11', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué inauguró la convocatoria del concilio de Nicea por Constantino en 325?',
      options: [
        'La separación entre Iglesia y Estado',
        'La intervención imperial en cuestiones doctrinales y una dependencia mutua entre Iglesia e Imperio',
        'La prohibición del cristianismo',
        'La creación del papado',
      ],
      answer: 1,
      explanation: 'El emperador convocó y presidió un concilio para resolver la disputa arriana. La relación entre poder político y autoridad religiosa quedó entrelazada durante siglos.',
    },
    {
      id: 'roma-imperio-12', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué mecanismo acumulativo señalan Ward-Perkins y Heather para explicar el siglo V?',
      options: [
        'La conversión al cristianismo de los emperadores',
        'Menos territorio implica menos ingresos, menos ingresos implica menos ejército, y menos ejército implica perder más territorio',
        'La despoblación por emigración a Oriente',
        'El agotamiento de las minas de plata',
      ],
      answer: 1,
      explanation: 'La pérdida de África en 439, la provincia más rica y granero de Roma, fue probablemente el golpe decisivo de esa espiral.',
    },
    {
      id: 'roma-imperio-13', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué hizo Odoacro en 476 tras deponer a Rómulo Augústulo?',
      options: [
        'Se proclamó emperador de Occidente',
        'Envió las insignias imperiales a Constantinopla y gobernó Italia como representante nominal del emperador de Oriente',
        'Destruyó la ciudad de Roma',
        'Restauró la República romana',
      ],
      answer: 1,
      explanation: 'Los contemporáneos no percibieron el fin de nada. La fecha de 476 como «caída» es una construcción historiográfica posterior.',
    },
    {
      id: 'roma-imperio-14', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Por qué la supervivencia del Imperio de Oriente es un problema para las explicaciones globales de la caída?',
      options: [
        'Porque Oriente también cayó en 476',
        'Porque cualquier causa invocada —cristianismo, decadencia, presión bárbara— debería explicar por qué Oriente resistió mil años más',
        'Porque Oriente no era cristiano',
        'Porque Oriente no tenía fronteras',
      ],
      answer: 1,
      explanation: 'Oriente tenía fronteras más cortas y defendibles, una base fiscal más rica —Egipto y Siria— y una capital inexpugnable. Es el mejor test de cualquier hipótesis.',
    },
    {
      id: 'roma-imperio-15', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Qué defiende el paradigma de la «Antigüedad tardía» de Peter Brown?',
      options: [
        'Que el imperio se hundió de forma súbita y catastrófica',
        'Que hubo una larga transformación creativa, con continuidad de estructuras romanas dentro de los reinos germánicos',
        'Que los bárbaros exterminaron a la población romana',
        'Que el imperio nunca existió como unidad',
      ],
      answer: 1,
      explanation: 'Ward-Perkins reaccionó después aportando evidencia material de regresión económica severa en Occidente. Hoy se acepta que hubo ambas cosas, con gran variación regional.',
    },
    {
      id: 'roma-imperio-16', era: 'Antigüedad', topicId: 'roma-imperio', topic: 'Imperio romano',
      question: '¿Cuál es el legado romano más estructural en la Europa continental actual?',
      options: [
        'La organización militar',
        'El derecho romano, recopilado por Justiniano y redescubierto en Bolonia en el siglo XI',
        'El sistema de calzadas',
        'La religión pagana tradicional',
      ],
      answer: 1,
      explanation: 'Categorías como propiedad, contrato, obligación o persona jurídica son la base de los sistemas jurídicos continentales europeos y latinoamericanos.',
    },
  ],
}
