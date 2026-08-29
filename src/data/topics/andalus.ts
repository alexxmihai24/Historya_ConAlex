import type { TopicModule } from '../types.ts'

export const andalus: TopicModule = {
  topic: {
    id: 'andalus',
    era: 'Edad Media',
    title: 'Al-Ándalus y los reinos cristianos',
    years: '711–1492',
    country: 'Península ibérica',
    description: 'Ocho siglos peninsulares: conquista, califato, frontera, expansión cristiana y 1492.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⌁',
    color: 'green',
    summary:
      'La historia peninsular entre 711 y 1492 ha sido, más que ninguna otra, terreno de disputa identitaria. Durante siglos se contó como una «Reconquista»: la recuperación legítima de una España perdida. Después se contó como una «convivencia» ejemplar entre tres culturas. Ninguna de las dos versiones resiste el examen documental. Lo que muestra la investigación es un espacio fragmentado, cambiante y profundamente conectado con el Mediterráneo, donde la guerra, el pacto, el tributo y el intercambio funcionaron simultáneamente durante ocho siglos.',
    keyDates: [
      { date: '711', event: 'Desembarco de Tariq; derrota de Rodrigo en el Guadalete.' },
      { date: '756', event: 'Abd al-Rahman I funda el emirato independiente de Córdoba.' },
      { date: '929', event: 'Abd al-Rahman III se proclama califa.' },
      { date: '976–1002', event: 'Almanzor: dictadura militar y campañas contra los reinos del norte.' },
      { date: '1031', event: 'Fin del califato; fragmentación en reinos de taifas.' },
      { date: '1085', event: 'Alfonso VI toma Toledo.' },
      { date: '1086–1147', event: 'Intervención almorávide desde el Magreb.' },
      { date: '1147–1212', event: 'Dominio almohade.' },
      { date: '1212', event: 'Las Navas de Tolosa: derrota almohade decisiva.' },
      { date: '1236–1248', event: 'Conquista de Córdoba, Valencia y Sevilla.' },
      { date: '1238', event: 'Fundación del reino nazarí de Granada, vasallo tributario de Castilla.' },
      { date: '1391', event: 'Pogromos generalizados contra las juderías peninsulares.' },
      { date: '1478', event: 'Establecimiento de la Inquisición castellana.' },
      { date: '1492', event: 'Conquista de Granada y decreto de expulsión de los judíos.' },
    ],
    sections: [
      {
        title: '711: qué ocurrió y qué no',
        body: [
          'El reino visigodo se hundió con una rapidez que sigue sorprendiendo. Un contingente inicial reducido, mandado por Tariq ibn Ziyad y compuesto mayoritariamente por bereberes norteafricanos, derrotó al rey Rodrigo en 711, y en apenas siete años el control musulmán se extendía por casi toda la península.',
          'La explicación no está en una superioridad militar abrumadora, sino en la fragilidad del Estado visigodo: una monarquía electiva con guerras sucesorias endémicas, una aristocracia dividida en facciones, una fiscalidad opresiva y una población judía perseguida por la legislación de los últimos concilios de Toledo. Varios sectores no tenían motivos para defender el régimen existente.',
          'El mecanismo principal de la conquista fue el pacto, no la batalla. El Tratado de Teodomiro (713), conservado en fuentes árabes, es el ejemplo mejor documentado: el noble visigodo Teodomiro conserva sus territorios en el sureste, sus habitantes mantienen su religión, sus iglesias y sus propiedades, y a cambio pagan un tributo anual fijado en dinero y especie. Ese modelo de capitulación se repitió por toda la península.',
          'Sobre la naturaleza de la conquista existe una polémica que conviene conocer. Ignacio Olagüe sostuvo en los años setenta que no hubo invasión, sino una revolución religiosa interna; la tesis fue reflotada después por Emilio González Ferrín. La arqueología, la numismática —hay monedas bilingües acuñadas ya en 716— y las fuentes latinas y árabes contemporáneas la contradicen frontalmente, y la posición es minoritaria y rechazada por la práctica totalidad de los arabistas y medievalistas.',
        ].join('\n\n'),
        callout:
          'El nombre «al-Ándalus» aparece por primera vez en una moneda de 716. Su etimología sigue discutida: se ha propuesto un origen relacionado con los vándalos, con el gótico *landahlauts* («sorteo de tierras») y con un topónimo prerromano.',
      },
      {
        title: 'El califato de Córdoba y la sociedad andalusí',
        body: [
          'Abd al-Rahman I, superviviente omeya de la matanza abasí, fundó en 756 un emirato independiente de Bagdad. En 929, Abd al-Rahman III dio el paso decisivo al proclamarse califa, reclamando así la autoridad religiosa suprema frente a Bagdad y frente a los fatimíes de El Cairo. Córdoba se convirtió en una de las mayores ciudades de Europa —las estimaciones oscilan entre 100.000 y 250.000 habitantes—, con alumbrado, alcantarillado, baños públicos y una biblioteca palatina que las fuentes cifran en cientos de miles de volúmenes.',
          'La sociedad andalusí era muy heterogénea. Convivían árabes —minoría dominante y dividida en facciones tribales—, bereberes, muladíes (hispanos convertidos al islam, mayoría de la población musulmana), mozárabes (cristianos que conservaban su religión bajo dominio islámico) y judíos, cuya situación fue en general mucho mejor que en la Europa cristiana contemporánea: llegaron a ocupar altos cargos, como Hasday ibn Shaprut, médico y diplomático de Abd al-Rahman III.',
          'La base económica combinaba una agricultura de regadío muy productiva —con nuevos cultivos como el arroz, la caña de azúcar, el algodón, los cítricos y la berenjena, y con tecnología hidráulica de norias y acequias—, una artesanía urbana especializada en textiles, cuero y cerámica, y una integración plena en las redes comerciales del Mediterráneo y del Sáhara, que aportaba oro africano.',
          'La producción intelectual fue de primer orden. Averroes, comentarista de Aristóteles cuya obra determinó la escolástica latina; Maimónides, filósofo judío autor de la *Guía de perplejos*; Ibn Hazm, autor de *El collar de la paloma*; Al-Zahrawi (Abulcasis), cuyo tratado quirúrgico se usó en Europa durante siglos; Ibn Tufayl y su novela filosófica. Es significativo que tanto Averroes como Maimónides sufrieran persecución o exilio bajo los almohades: el esplendor cultural no fue continuo ni universalmente tolerante.',
          'El califato se hundió con rapidez tras la muerte de Almanzor. La fitna de 1009-1031 acabó con la unidad y dio paso a los reinos de taifas: una treintena de Estados que compitieron entre sí, mantuvieron cortes culturalmente brillantes y, para defenderse unos de otros, pagaron tributos (parias) a los reinos cristianos del norte, financiando así la expansión de sus enemigos.',
        ].join('\n\n'),
      },
      {
        title: 'La frontera: guerra, pacto y tributo',
        body: [
          'La imagen de dos bloques homogéneos enfrentados por la fe no corresponde a la documentación. La frontera peninsular fue durante siglos una zona porosa donde se combinaban razzias, treguas, alianzas cruzadas, comercio y matrimonios políticos.',
          'Las alianzas entre cristianos y musulmanes contra otros cristianos o musulmanes fueron constantes y no excepcionales. El Cid es el ejemplo canónico: desterrado por Alfonso VI, sirvió como jefe militar al rey musulmán de Zaragoza, combatió contra cristianos y acabó gobernando Valencia. El personaje que la tradición convirtió en símbolo de la Reconquista pasó buena parte de su carrera al servicio de un taifa.',
          'El sistema de parias es especialmente revelador. Los reinos de taifas pagaban tributos anuales en oro a Castilla, León, Navarra o Aragón a cambio de protección o de no ser atacados. Ese oro financió la construcción de iglesias románicas, el Camino de Santiago y los ejércitos que después conquistarían esos mismos territorios. La lógica dominante no era la cruzada, sino la extracción de recursos: un taifa vivo y tributario valía más que uno conquistado.',
          'La intervención almorávide (1086) y almohade (1147) cambió el tono. Ambos movimientos, procedentes del Magreb, llegaron llamados por los andalusíes para frenar el avance cristiano, pero impusieron un rigorismo religioso que las élites locales resistieron, endureció la posición de mozárabes y judíos —hubo emigraciones y conversiones forzosas— y elevó la temperatura ideológica del conflicto.',
          'También del lado cristiano creció la retórica religiosa. La influencia de Cluny, la introducción del ideal de cruzada y las bulas papales que equiparaban la lucha peninsular con la de Tierra Santa dieron cobertura ideológica a lo que hasta entonces era, sobre todo, expansión territorial. Las Navas de Tolosa (1212), organizada como cruzada con participación ultrapirenaica, marca la consolidación de ese marco.',
        ].join('\n\n'),
        callout:
          'Los mudéjares —musulmanes que permanecieron bajo dominio cristiano tras la conquista— fueron durante siglos la mano de obra especializada de Aragón y Valencia. Su arte, el mudéjar, es la manifestación más visible de que la separación entre culturas nunca fue estanca.',
      },
      {
        title: 'Los reinos cristianos: expansión y modelos distintos',
        body: [
          'Los núcleos cristianos del norte nacieron pequeños y dispersos: el reino de Asturias, después León; el condado y luego reino de Castilla; Navarra; los condados pirenaicos que formarían Aragón y Cataluña. Su expansión fue desigual, discontinua y a menudo dirigida más contra vecinos cristianos que contra al-Ándalus.',
          'El motor no fue solo militar. La repoblación fue el instrumento decisivo: sin colonos que ocuparan, cultivaran y defendieran el territorio, la conquista no se consolidaba. Los modelos variaron con enormes consecuencias sociales. En el valle del Duero se practicó la presura, ocupación libre por pequeños propietarios, lo que generó una sociedad de campesinos relativamente libres. Al sur del Tajo y en Extremadura se repobló mediante concejos con amplios fueros y grandes términos municipales. Y en Andalucía y Extremadura, tras las conquistas del siglo XIII, se repartió mediante grandes donadíos a la nobleza y a las órdenes militares, creando el latifundio que marcaría la estructura agraria del sur hasta el siglo XX.',
          'Las órdenes militares —Santiago, Calatrava, Alcántara— fueron un instrumento clave: combinaban función militar permanente, capacidad de repoblar y gestión de enormes patrimonios. Su poder llegó a inquietar a las propias monarquías, que acabaron incorporando sus maestrazgos a la corona.',
          'La cultura de los reinos cristianos absorbió masivamente el legado andalusí. La Escuela de Traductores de Toledo, activa tras 1085 y sistematizada bajo Alfonso X, vertió al latín y después al castellano obras científicas y filosóficas árabes y griegas. Alfonso X impulsó además la escritura del castellano en la producción jurídica, histórica y científica, y las Cantigas de Santa María en gallego-portugués. La deuda lingüística es enorme: unas cuatro mil palabras del castellano actual proceden del árabe.',
          'La estructura política resultante fue plural. La Corona de Aragón funcionó como una confederación con instituciones separadas para Aragón, Cataluña, Valencia y Mallorca, con Cortes potentes y el pactismo como principio: el rey gobierna con el consentimiento del reino. Castilla desarrolló una monarquía más centralizada, con Cortes menos capaces de limitar al rey. Esa diferencia pesaría durante siglos, hasta los decretos de Nueva Planta de 1707-1716.',
        ].join('\n\n'),
      },
      {
        title: 'Convivencia, coexistencia o conflicto',
        body: [
          'El término «convivencia» lo popularizó Américo Castro en *España en su historia* (1948) para describir la interacción productiva entre cristianos, musulmanes y judíos, y para sostener que la identidad española se formó en ese contacto. Claudio Sánchez-Albornoz le respondió con dureza defendiendo una continuidad hispana anterior y una relación fundamentalmente hostil. La polémica, mantenida durante décadas desde el exilio de ambos, condicionó el debate durante medio siglo.',
          'La investigación posterior ha corregido a los dos. Hubo interacción intensa —préstamos lingüísticos, técnicas compartidas, traducciones, arquitectura híbrida, minorías con estatuto jurídico reconocido— y hubo simultáneamente jerarquía legal estricta, segregación residencial, violencia periódica y desconfianza. David Nirenberg mostró en *Communities of Violence* (1996) que la violencia contra las minorías no era una ruptura del sistema, sino parte de su funcionamiento ordinario: episodios rituales y controlados que reafirmaban la jerarquía sin destruir la coexistencia.',
          'El término preferido hoy por muchos especialistas es «coexistencia» o «conveniencia»: convivir porque conviene, no por tolerancia en sentido moderno. Ni al-Ándalus ni los reinos cristianos concebían la igualdad religiosa; ambos organizaban la sociedad en comunidades jurídicamente desiguales bajo una religión dominante.',
          'El siglo XIV marcó un empeoramiento claro. La peste negra, las crisis económicas y la agitación predicatoria desembocaron en los pogromos de 1391, que destruyeron juderías enteras y provocaron conversiones masivas. La aparición de un gran grupo de conversos generó un problema nuevo: la sospecha sobre la sinceridad de su fe, que justificó la creación de la Inquisición castellana en 1478 y la difusión de los estatutos de limpieza de sangre, un criterio de exclusión basado en el linaje y no en la creencia.',
          'El decreto de 1492 obligó a los judíos a convertirse o abandonar los reinos de Castilla y Aragón. Las cifras se discuten —las estimaciones actuales rondan entre 50.000 y 100.000 exiliados, muy por debajo de los cálculos tradicionales—, pero el efecto cultural fue profundo: nació la diáspora sefardí, que conservó el judeoespañol durante siglos. Los musulmanes granadinos, a quienes las capitulaciones de 1491 garantizaban su religión, vieron incumplido lo pactado en 1502.',
        ].join('\n\n'),
        callout:
          'Los estatutos de limpieza de sangre desplazaron el criterio de exclusión de la fe al linaje. Un converso sincero de tercera generación seguía siendo sospechoso: es un precedente histórico relevante de la discriminación por ascendencia.',
      },
      {
        title: 'El concepto de Reconquista y su carga política',
        body: [
          'La palabra «Reconquista» no es medieval en el sentido en que se usa hoy. Los cronistas de los siglos IX a XI hablan de restauración del reino godo, de expansión, de guerra; el término se consolida como categoría historiográfica en el siglo XIX, en pleno auge del nacionalismo, y adquiere su formulación más rígida bajo el franquismo, que lo convirtió en mito fundacional de una España católica y unitaria.',
          'Las objeciones al concepto son varias. Presupone una continuidad nacional entre el reino visigodo y los reinos medievales que la documentación no sostiene. Comprime ocho siglos de procesos heterogéneos en un proyecto único y coherente que nadie planificó. Y describe como «re-conquista» la ocupación de territorios que ninguno de los conquistadores había poseído jamás.',
          'La discusión sigue abierta. Algunos medievalistas, como Francisco García Fitz o Martín Ríos Saloma, defienden que el término conserva utilidad si se despoja de su carga ideológica: existió efectivamente una legitimación religiosa de la guerra, una idea de restauración presente en las crónicas desde el siglo IX y una expansión territorial sostenida. Otros prefieren hablar simplemente de «expansión de los reinos cristianos» para evitar el bagaje acumulado.',
          'Lo que hay consenso en rechazar es el relato de una guerra santa de ochocientos años ininterrumpidos. Hubo largos periodos de estabilidad fronteriza, alianzas cruzadas constantes, tributos que financiaron a ambos bandos y una circulación permanente de personas, técnicas y palabras. Las fases de conquista efectiva se concentran en momentos precisos: el siglo XI tras la fitna, el XIII tras Las Navas, y 1482-1492 para Granada.',
          'La cuestión importa más allá de la academia. «Reconquista» es hoy un término activo en el discurso político europeo, empleado por movimientos identitarios con un sentido explícitamente contemporáneo. Conocer su genealogía historiográfica es, en ese contexto, una herramienta crítica y no una curiosidad erudita.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Muladí', definition: 'Hispano convertido al islam. Constituían la mayoría de la población musulmana de al-Ándalus.' },
      { term: 'Mozárabe', definition: 'Cristiano que conservaba su religión bajo dominio islámico, con estatuto de dhimmi.' },
      { term: 'Mudéjar', definition: 'Musulmán que permaneció bajo dominio cristiano tras la conquista, conservando su religión.' },
      { term: 'Taifa', definition: 'Cada uno de los reinos surgidos de la desintegración del califato de Córdoba en 1031.' },
      { term: 'Parias', definition: 'Tributo en oro pagado por las taifas a los reinos cristianos a cambio de protección o de no ser atacadas.' },
      { term: 'Fitna', definition: 'Guerra civil. La de 1009-1031 acabó con el califato de Córdoba.' },
      { term: 'Presura', definition: 'Ocupación libre de tierras por pequeños propietarios, modelo de repoblación del valle del Duero.' },
      { term: 'Donadío', definition: 'Gran donación de tierra a nobleza y órdenes militares. Origen del latifundio andaluz y extremeño.' },
      { term: 'Fuero', definition: 'Conjunto de privilegios y normas concedidos a una localidad para atraer y fijar población.' },
      { term: 'Converso', definition: 'Judío convertido al cristianismo, especialmente tras los pogromos de 1391. Objeto de sospecha permanente.' },
      { term: 'Limpieza de sangre', definition: 'Estatutos que excluían de cargos a los descendientes de conversos: criterio de linaje, no de fe.' },
      { term: 'Pactismo', definition: 'Principio de la Corona de Aragón según el cual el rey gobierna con el consentimiento del reino en Cortes.' },
    ],
    debates: [
      {
        question: '¿Es válido el concepto de «Reconquista»?',
        positions: [
          {
            school: 'Rechazo del término',
            argument:
              'Es una categoría del siglo XIX, endurecida bajo el franquismo. Presupone una continuidad nacional inexistente, unifica ocho siglos heterogéneos en un proyecto único y llama «re-conquista» a la ocupación de territorios que los conquistadores nunca habían poseído.',
          },
          {
            school: 'Defensa crítica (García Fitz, Ríos Saloma)',
            argument:
              'Depurado de su carga ideológica, el término describe algo real: una legitimación religiosa de la guerra, una idea de restauración presente en las crónicas desde el siglo IX y una expansión territorial sostenida y consciente.',
          },
        ],
        state:
          'No hay consenso sobre la palabra, pero sí sobre el fondo: se rechaza unánimemente el relato de una guerra santa ininterrumpida de ochocientos años. Las fases de conquista efectiva fueron concretas y estuvieron separadas por largos periodos de estabilidad, alianzas cruzadas y tributos.',
      },
      {
        question: '¿Hubo «convivencia» entre las tres culturas?',
        positions: [
          {
            school: 'Convivencia (Américo Castro, 1948)',
            argument:
              'La identidad española se formó en la interacción productiva entre cristianos, musulmanes y judíos. Lo específicamente hispano nace de ese contacto y no de una esencia anterior.',
          },
          {
            school: 'Continuidad hispana (Sánchez-Albornoz)',
            argument:
              'Existía un sustrato hispano anterior al islam que persistió; la relación entre comunidades fue fundamentalmente hostil y el elemento islámico, un paréntesis ajeno.',
          },
          {
            school: 'Coexistencia jerárquica (Nirenberg, 1996)',
            argument:
              'Hubo interacción intensa y a la vez jerarquía legal estricta, segregación y violencia periódica. Los episodios violentos no rompían el sistema: formaban parte de su funcionamiento y reafirmaban la jerarquía.',
          },
        ],
        state:
          'La polémica Castro–Sánchez-Albornoz se considera superada en sus términos originales, ambos condicionados por el exilio y por la cuestión de la identidad nacional. Se prefiere hablar de «coexistencia» o «conveniencia»: convivir porque conviene, sin tolerancia en el sentido moderno.',
      },
      {
        question: '¿Hubo realmente una invasión en 711?',
        positions: [
          {
            school: 'Negacionismo de la invasión (Olagüe, 1974; González Ferrín)',
            argument:
              'No habría existido conquista militar, sino una evolución religiosa interna de la población hispana hacia formas de monoteísmo que acabaron confluyendo con el islam.',
          },
          {
            school: 'Posición mayoritaria',
            argument:
              'La arqueología, la numismática —monedas bilingües acuñadas ya en 716—, las crónicas latinas contemporáneas y las fuentes árabes documentan la conquista y sus pactos de capitulación, como el Tratado de Teodomiro de 713.',
          },
        ],
        state:
          'La tesis negacionista está rechazada por la práctica totalidad de arabistas y medievalistas. Su interés es historiográfico: muestra cómo la historia peninsular sigue siendo terreno de disputa identitaria.',
      },
    ],
    sources: [
      { author: 'Anónimo', title: 'Crónica mozárabe de 754', year: '754', kind: 'primaria', note: 'Fuente latina más cercana a la conquista. Escrita bajo dominio islámico.' },
      { author: 'Anónimo', title: 'Tratado de Teodomiro', year: '713', kind: 'primaria', note: 'Pacto de capitulación conservado en fuentes árabes. Modelo del mecanismo de la conquista.' },
      { author: 'Ibn Hazm', title: 'El collar de la paloma', year: 'c. 1022', kind: 'primaria', note: 'Tratado sobre el amor y la sociedad cordobesa en vísperas de la fitna.' },
      { author: 'Maimónides', title: 'Guía de perplejos', year: 'c. 1190', kind: 'primaria', note: 'Filosofía judía escrita en árabe. Su autor tuvo que exiliarse ante la presión almohade.' },
      { author: 'Averroes (Ibn Rushd)', title: 'Comentarios a Aristóteles', year: 'c. 1180', kind: 'primaria', note: 'Determinaron la escolástica latina. También sufrió persecución almohade.' },
      { author: 'Alfonso X', title: 'Estoria de España; Siete Partidas', year: 'c. 1270–1284', kind: 'primaria', note: 'Fijan el castellano como lengua de la historia y del derecho, y regulan el estatuto de las minorías.' },
      { author: 'Américo Castro', title: 'España en su historia', year: '1948', kind: 'estudio', note: 'Formula la tesis de la convivencia como origen de la identidad española.' },
      { author: 'Claudio Sánchez-Albornoz', title: 'España, un enigma histórico', year: '1956', kind: 'estudio', note: 'Réplica a Castro desde la tesis de la continuidad hispana.' },
      { author: 'Pierre Guichard', title: 'Al-Andalus. Estructura antropológica de una sociedad islámica en Occidente', year: '1976', kind: 'estudio', note: 'Defiende el carácter plenamente islámico y oriental de la sociedad andalusí.' },
      { author: 'David Nirenberg', title: 'Communities of Violence', year: '1996', kind: 'estudio', note: 'Analiza la violencia contra las minorías como parte funcional del sistema de coexistencia.' },
      { author: 'Francisco García Fitz', title: 'La Reconquista', year: '2010', kind: 'estudio', note: 'Defensa crítica del concepto, depurado de su carga ideológica.' },
      { author: 'Eduardo Manzano Moreno', title: 'Conquistadores, emires y califas', year: '2006', kind: 'estudio', note: 'Síntesis de referencia sobre la formación del Estado andalusí.' },
    ],
  },
  questions: [
    {
      id: 'andalus-1', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué explica mejor la rapidez del hundimiento del reino visigodo en 711?',
      options: [
        'La superioridad tecnológica de los ejércitos musulmanes',
        'La fragilidad del Estado visigodo: monarquía electiva, guerras sucesorias, aristocracia dividida y minorías perseguidas',
        'Una epidemia previa que despobló la península',
        'La ausencia total de ejército visigodo',
      ],
      answer: 1,
      explanation: 'Varios sectores no tenían motivos para defender el régimen. El mecanismo principal de la conquista fue el pacto de capitulación, no la batalla.',
    },
    {
      id: 'andalus-2', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué establecía el Tratado de Teodomiro (713)?',
      options: [
        'La conversión obligatoria de los visigodos al islam',
        'Que un noble visigodo conservaba sus territorios y su población su religión y propiedades, a cambio de un tributo anual',
        'La expulsión de los cristianos del sureste peninsular',
        'La alianza militar entre visigodos y bizantinos',
      ],
      answer: 1,
      explanation: 'Es el ejemplo mejor documentado del modelo de capitulación que se repitió por toda la península.',
    },
    {
      id: 'andalus-3', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué evidencia contradice la tesis de que no hubo invasión en 711?',
      options: [
        'La ausencia de fuentes escritas',
        'La arqueología, las monedas bilingües acuñadas ya en 716 y las crónicas latinas y árabes contemporáneas',
        'Los estatutos de limpieza de sangre',
        'Las capitulaciones de Granada de 1491',
      ],
      answer: 1,
      explanation: 'La tesis de Olagüe y González Ferrín está rechazada por la práctica totalidad de arabistas y medievalistas.',
    },
    {
      id: 'andalus-4', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué grupo constituía la mayoría de la población musulmana de al-Ándalus?',
      options: ['Los árabes', 'Los muladíes, hispanos convertidos al islam', 'Los bereberes', 'Los mozárabes'],
      answer: 1,
      explanation: 'Los árabes fueron siempre una minoría dominante, además dividida en facciones tribales. La conversión de la población local fue progresiva.',
    },
    {
      id: 'andalus-5', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Por qué fue significativo que Abd al-Rahman III se proclamara califa en 929?',
      options: [
        'Porque unificó la península entera',
        'Porque reclamaba la autoridad religiosa suprema frente a Bagdad y frente a los fatimíes de El Cairo',
        'Porque abolió el impuesto a los cristianos',
        'Porque trasladó la capital a Sevilla',
      ],
      answer: 1,
      explanation: 'El título de califa no era solo político: implicaba la jefatura de la comunidad de creyentes, hasta entonces reivindicada desde Oriente.',
    },
    {
      id: 'andalus-6', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué eran las parias y qué consecuencia tuvieron?',
      options: [
        'Impuestos pagados por los mozárabes al emir; financiaron las mezquitas',
        'Tributos en oro de las taifas a los reinos cristianos; financiaron iglesias, el Camino de Santiago y los ejércitos que después las conquistarían',
        'Tasas comerciales del puerto de Almería',
        'Rentas señoriales de los mudéjares aragoneses',
      ],
      answer: 1,
      explanation: 'La lógica dominante no era la cruzada, sino la extracción de recursos: un taifa vivo y tributario valía más que uno conquistado.',
    },
    {
      id: 'andalus-7', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Por qué la trayectoria del Cid resulta reveladora?',
      options: [
        'Porque nunca combatió contra musulmanes',
        'Porque, desterrado por Alfonso VI, sirvió al rey musulmán de Zaragoza y combatió contra cristianos',
        'Porque fue el primer rey de Valencia',
        'Porque rechazó siempre las alianzas con taifas',
      ],
      answer: 1,
      explanation: 'El personaje convertido en símbolo de la Reconquista pasó buena parte de su carrera al servicio de un taifa. Las alianzas cruzadas eran la norma, no la excepción.',
    },
    {
      id: 'andalus-8', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué efecto tuvo la intervención almorávide y almohade?',
      options: [
        'Restauró la tolerancia hacia mozárabes y judíos',
        'Impuso un rigorismo religioso que endureció la situación de las minorías y elevó la temperatura ideológica del conflicto',
        'Unificó definitivamente al-Ándalus con el Magreb sin resistencia',
        'Provocó el fin inmediato del dominio musulmán',
      ],
      answer: 1,
      explanation: 'Tanto Averroes como Maimónides sufrieron persecución o exilio bajo los almohades: el esplendor cultural andalusí no fue continuo ni uniformemente tolerante.',
    },
    {
      id: 'andalus-9', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué consecuencia social tuvo el modelo de repoblación por donadíos en Andalucía y Extremadura?',
      options: [
        'Una sociedad de pequeños propietarios libres',
        'La creación del latifundio, que marcaría la estructura agraria del sur hasta el siglo XX',
        'La desaparición de la nobleza',
        'El predominio de los concejos urbanos',
      ],
      answer: 1,
      explanation: 'En el Duero, la presura generó campesinado libre; al sur del Tajo, concejos con grandes términos; en Andalucía, grandes donaciones a nobleza y órdenes militares.',
    },
    {
      id: 'andalus-10', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué diferenciaba políticamente a la Corona de Aragón de Castilla?',
      options: [
        'Aragón no tenía Cortes',
        'Aragón funcionaba como confederación con instituciones separadas y pactismo: el rey gobierna con el consentimiento del reino',
        'Castilla era una república',
        'Aragón no reconocía al rey como autoridad',
      ],
      answer: 1,
      explanation: 'Castilla desarrolló una monarquía más centralizada con Cortes menos capaces de limitarla. La diferencia pesó hasta los decretos de Nueva Planta de 1707-1716.',
    },
    {
      id: 'andalus-11', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: 'Según Nirenberg, ¿qué papel cumplía la violencia contra las minorías?',
      options: [
        'Era una ruptura excepcional del orden social',
        'Formaba parte del funcionamiento ordinario del sistema y reafirmaba la jerarquía sin destruir la coexistencia',
        'No existió hasta 1492',
        'Se dirigía solo contra los mudéjares',
      ],
      answer: 1,
      explanation: 'Por eso se prefiere hoy hablar de «coexistencia» o «conveniencia» antes que de convivencia: convivir porque conviene, no por tolerancia en sentido moderno.',
    },
    {
      id: 'andalus-12', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué problema nuevo generaron los pogromos de 1391?',
      options: [
        'La despoblación de las ciudades',
        'La aparición de un gran grupo de conversos cuya sinceridad religiosa se puso bajo sospecha permanente',
        'La expulsión inmediata de los judíos',
        'La conversión de los mudéjares',
      ],
      answer: 1,
      explanation: 'Esa sospecha justificó la creación de la Inquisición castellana en 1478 y la difusión de los estatutos de limpieza de sangre.',
    },
    {
      id: 'andalus-13', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué desplazamiento suponen los estatutos de limpieza de sangre?',
      options: [
        'De la exclusión por linaje a la exclusión por fe',
        'De la exclusión por fe a la exclusión por linaje: un converso sincero de tercera generación seguía siendo sospechoso',
        'De la exclusión religiosa a la exclusión económica',
        'De la exclusión legal a la tolerancia',
      ],
      answer: 1,
      explanation: 'Es un precedente histórico relevante de la discriminación por ascendencia, distinta de la persecución estrictamente religiosa.',
    },
    {
      id: 'andalus-14', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Cuál es la principal objeción historiográfica al término «Reconquista»?',
      options: [
        'Que la expansión cristiana nunca ocurrió',
        'Que presupone una continuidad nacional inexistente y unifica ocho siglos heterogéneos en un proyecto único que nadie planificó',
        'Que fue inventado en el siglo XIII',
        'Que no aparece en ninguna crónica medieval',
      ],
      answer: 1,
      explanation: 'Además llama «re-conquista» a la ocupación de territorios que los conquistadores nunca habían poseído. El término se consolida en el siglo XIX y se endurece bajo el franquismo.',
    },
    {
      id: 'andalus-15', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿En qué hay consenso pese al desacuerdo sobre la palabra «Reconquista»?',
      options: [
        'En que hubo una guerra santa ininterrumpida de ochocientos años',
        'En rechazar ese relato: hubo largos periodos de estabilidad, alianzas cruzadas y tributos, con fases de conquista concentradas en momentos concretos',
        'En que no hubo conquistas cristianas',
        'En que el conflicto fue exclusivamente económico',
      ],
      answer: 1,
      explanation: 'Las fases efectivas se concentran en el siglo XI tras la fitna, el XIII tras Las Navas y 1482-1492 para Granada.',
    },
    {
      id: 'andalus-16', era: 'Edad Media', topicId: 'andalus', topic: 'Península ibérica',
      question: '¿Qué ocurrió con lo pactado en las capitulaciones de Granada de 1491?',
      options: [
        'Se cumplió íntegramente hasta 1609',
        'Garantizaban a los musulmanes granadinos su religión, pero se incumplieron en 1502',
        'Nunca incluyeron garantías religiosas',
        'Fueron anuladas por el papa en 1492',
      ],
      answer: 1,
      explanation: 'El mismo año 1492 el decreto de expulsión obligó a los judíos a convertirse o marchar; la diáspora sefardí conservó el judeoespañol durante siglos.',
    },
  ],
}
