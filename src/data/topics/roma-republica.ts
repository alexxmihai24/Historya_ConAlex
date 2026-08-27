import type { TopicModule } from '../types'

export const romaRepublica: TopicModule = {
  topic: {
    id: 'roma-republica',
    era: 'Antigüedad',
    title: 'Roma: la República',
    years: '509–27 a. C.',
    country: 'Italia',
    description: 'Instituciones republicanas, conflicto patricio-plebeyo, expansión mediterránea y crisis final.',
    duration: '50 min',
    level: 'Universidad',
    progress: 0,
    visual: 'SPQR',
    color: 'terracotta',
    summary:
      'La República romana fue un régimen oligárquico con mecanismos de participación popular reales, capaz de conquistar el Mediterráneo y de ser destruido por esa misma conquista. Entender su historia consiste sobre todo en explicar dos cosas: cómo una constitución no escrita, hecha de costumbre y equilibrios, sostuvo cinco siglos de expansión; y por qué las tensiones que esa expansión generó —tierra, ejército, dinero, clientelas— acabaron liquidándola.',
    keyDates: [
      { date: '509 a. C.', event: 'Fecha tradicional de la expulsión del último rey y fundación de la República.' },
      { date: '494 a. C.', event: 'Primera secesión de la plebe; creación del tribunado.' },
      { date: '451–450 a. C.', event: 'Ley de las Doce Tablas: primer derecho romano escrito.' },
      { date: '367 a. C.', event: 'Leyes Licinias-Sextias: acceso plebeyo al consulado.' },
      { date: '287 a. C.', event: 'Lex Hortensia: los plebiscitos obligan a todo el pueblo. Fin del conflicto de órdenes.' },
      { date: '264–241 a. C.', event: 'Primera guerra púnica; Roma se convierte en potencia naval.' },
      { date: '218–201 a. C.', event: 'Segunda guerra púnica: Aníbal en Italia; victoria de Escipión en Zama.' },
      { date: '146 a. C.', event: 'Destrucción de Cartago y de Corinto. Hegemonía mediterránea.' },
      { date: '133 a. C.', event: 'Tribunado y asesinato de Tiberio Graco. Comienza la crisis.' },
      { date: '107–100 a. C.', event: 'Reforma militar de Mario: reclutamiento de proletarios.' },
      { date: '91–88 a. C.', event: 'Guerra Social; extensión de la ciudadanía a los itálicos.' },
      { date: '82–79 a. C.', event: 'Dictadura de Sila y proscripciones.' },
      { date: '60 a. C.', event: 'Primer triunvirato: César, Pompeyo y Craso.' },
      { date: '49–45 a. C.', event: 'Guerra civil; César dictador.' },
      { date: '44 a. C.', event: 'Asesinato de César en los idus de marzo.' },
      { date: '31–27 a. C.', event: 'Accio y establecimiento del principado de Augusto.' },
    ],
    sections: [
      {
        title: 'El problema de las fuentes de la Roma arcaica',
        body: [
          'Casi todo lo que la tradición cuenta sobre los orígenes de Roma —Rómulo, los siete reyes, la expulsión de Tarquinio el Soberbio en 509 a. C.— procede de autores que escriben cuatro o cinco siglos después: Tito Livio y Dionisio de Halicarnaso, ambos de época augústea. No son testigos, sino recopiladores de una tradición ya elaborada.',
          'Esa tradición fue moldeada retrospectivamente. Las familias aristocráticas conservaban elogios fúnebres y listas de magistrados que tendían a exagerar sus méritos e insertar antepasados en episodios gloriosos. Además, los relatos de la monarquía y de la primera República están construidos con categorías políticas del siglo I a. C.: proyectan hacia atrás conflictos y conceptos contemporáneos a sus autores.',
          'La arqueología ha corregido y a veces confirmado partes del relato. Muestra un núcleo urbano organizado en el Palatino y el Foro ya en el siglo VII a. C., con un fuerte influjo etrusco y griego, lo que contradice la imagen de una aldea de pastores. Pero no permite verificar nombres ni fechas concretas.',
          'La consecuencia metodológica es clara: para el periodo anterior al siglo IV a. C. conviene leer la tradición como memoria cultural —lo que los romanos creían sobre sí mismos y les servía para justificar su orden político— más que como crónica. Que sea memoria y no crónica no la hace inútil: explica cómo Roma se pensaba a sí misma.',
        ].join('\n\n'),
        callout:
          'El relato de Lucrecia y la expulsión de los reyes cumple una función precisa: fundar la República sobre el rechazo a la arbitrariedad personal. El odio al título de rex duró hasta César, y contribuyó a su muerte.',
      },
      {
        title: 'La constitución republicana: un equilibrio sin texto',
        body: [
          'Roma no tuvo constitución escrita. Su sistema era un conjunto de instituciones, leyes y costumbres —el mos maiorum, la «costumbre de los antepasados»— que evolucionó por acumulación y precedente. Polibio, historiador griego rehén en Roma, la describió en el libro VI de sus *Historias* como una constitución mixta que combinaba monarquía (los cónsules), aristocracia (el Senado) y democracia (las asambleas), y atribuyó a ese equilibrio la estabilidad romana.',
          'Las magistraturas eran colegiadas, anuales y gratuitas. Dos cónsules dirigían el Estado y el ejército, con derecho de veto mutuo; los pretores administraban justicia; los cuestores gestionaban finanzas; los ediles, la ciudad; y los censores, cada cinco años, revisaban las listas de ciudadanos y del Senado y vigilaban las costumbres. El cursus honorum fijaba el orden y las edades mínimas de esa carrera. En emergencias podía nombrarse un dictador con poderes plenos por un máximo de seis meses.',
          'El Senado, integrado por exmagistrados y vitalicio, no legislaba formalmente: emitía senadoconsultos, opiniones de enorme peso moral y práctico. Controlaba de hecho las finanzas, la política exterior y la asignación de provincias y mandos. Era el órgano de continuidad frente a magistrados que cambiaban cada año.',
          'Las asambleas votaban leyes y elegían magistrados, pero su diseño limitaba el peso de los pobres. Los comicios centuriados, organizados por clases de fortuna, distribuían el voto por centurias y no por cabeza, y las centurias de los más ricos votaban primero: cuando se alcanzaba la mayoría, la votación se detenía y las clases inferiores a menudo ni llegaban a pronunciarse. Que las asambleas fueran soberanas en teoría no significa que el pueblo decidiera en la práctica.',
          'La verdadera argamasa del sistema era la clientela: una relación asimétrica y hereditaria entre un patrono, que proporcionaba protección jurídica y ayuda material, y sus clientes, que le debían apoyo político, acompañamiento público y voto. La política romana funcionaba sobre esas redes personales mucho más que sobre programas.',
        ].join('\n\n'),
      },
      {
        title: 'El conflicto de los órdenes',
        body: [
          'Durante los dos primeros siglos de la República, la plebe —el conjunto de ciudadanos no pertenecientes a las familias patricias— luchó por acceder a las magistraturas, al sacerdocio y a la tierra pública, y por protegerse del abuso jurídico y del endeudamiento.',
          'Su arma más eficaz fue la secesión: retirarse en masa fuera de la ciudad y negarse a combatir. Roma, en guerra permanente con sus vecinos, no podía prescindir de sus soldados. La primera secesión (494 a. C.) arrancó la creación del tribunado de la plebe, magistratura con dos rasgos excepcionales: la sacrosanctitas —quien agrediera a un tribuno quedaba maldito y podía ser muerto impunemente— y el derecho de intercessio, que permitía vetar cualquier acto de un magistrado.',
          'La Ley de las Doce Tablas (451-450 a. C.) fijó por escrito el derecho. Su contenido no era favorable a la plebe en muchos puntos —mantenía la ejecución sobre la persona del deudor y prohibía inicialmente los matrimonios mixtos—, pero eliminó el monopolio patricio sobre el conocimiento de la norma, que hasta entonces era interpretada oralmente por los pontífices.',
          'El proceso culminó en tres etapas: las leyes Licinias-Sextias (367 a. C.) abrieron el consulado a los plebeyos; la lex Poetelia (326 a. C.) abolió el nexum, la servidumbre por deudas; y la lex Hortensia (287 a. C.) estableció que los plebiscitos —acuerdos de la asamblea de la plebe— obligaban a todo el pueblo, incluidos los patricios.',
          'El resultado no fue igualdad, sino sustitución de una élite por otra más amplia. Se formó la nobilitas patricio-plebeya: familias que habían alcanzado el consulado y que monopolizaron los cargos durante siglos. Un homo novus —el primero de su familia en llegar al consulado, como Cicerón— era una rareza señalada. La apertura formal de las magistraturas convivió con un cierre sociológico muy estricto.',
        ].join('\n\n'),
        callout:
          'La sacrosanctitas del tribuno era una garantía religiosa, no jurídica. Cuando en 133 a. C. Tiberio Graco fue asesinado siendo tribuno, se rompió un tabú que había sostenido el sistema durante tres siglos.',
      },
      {
        title: 'La expansión mediterránea y sus mecanismos',
        body: [
          'Roma sometió Italia entre los siglos IV y III a. C. mediante una combinación de guerra y de ingeniería jurídica. En lugar de reducir a los vencidos a súbditos uniformes, creó un mosaico de estatutos: colonias latinas, municipios con distintos grados de ciudadanía, aliados (socii) obligados a aportar tropas pero no impuestos. Esa flexibilidad, que integraba a las élites locales en el sistema, explica la resistencia romana a las derrotas: cuando Aníbal esperaba que Italia se sublevara, la mayor parte de los aliados permaneció fiel.',
          'Las guerras púnicas transformaron a Roma. La primera (264-241 a. C.) la obligó a construir una flota desde cero y le dio Sicilia, su primera provincia. La segunda (218-201 a. C.) fue existencial: Aníbal cruzó los Alpes, destruyó tres ejércitos consulares y aniquiló en Cannas (216 a. C.) a unos 50.000 romanos en una sola jornada. Roma sobrevivió por su capacidad de reponer ejércitos y por la estrategia de desgaste de Fabio Máximo, y ganó cuando Escipión llevó la guerra a África.',
          'A partir de 200 a. C., la expansión hacia el este fue rápida: Macedonia, Grecia, Asia Menor. En 146 a. C. Roma destruyó Cartago y Corinto en el mismo año. Polibio, testigo de la caída de Cartago, se planteó explícitamente la pregunta que da sentido a su obra: cómo en menos de cincuenta y tres años casi todo el mundo conocido quedó bajo dominio romano.',
          'La explicación del imperialismo romano se ha discutido intensamente. La lectura tradicional, apoyada en las propias fuentes romanas, hablaba de un «imperialismo defensivo»: Roma habría hecho guerras justas, provocada siempre por terceros. William Harris demostró en *War and Imperialism in Republican Rome* (1979) que la sociedad romana tenía incentivos estructurales para la guerra: el prestigio militar era requisito de la carrera política, el triunfo y el botín enriquecían a los generales, y las campañas anuales eran la norma y no la excepción.',
          'Las consecuencias internas fueron desestabilizadoras. La conquista trajo esclavos en masa —cientos de miles— que sustituyeron mano de obra libre; permitió a los senadores acumular latifundios trabajados por esclavos; arruinó a los pequeños propietarios, ausentes en campañas de años; y creó una plebe urbana sin tierra ni empleo estable. La riqueza provincial, gestionada por gobernadores con escasísimo control, generó además una corrupción de escala nueva.',
        ].join('\n\n'),
      },
      {
        title: 'La crisis: de los Gracos a Sila',
        body: [
          'En 133 a. C., el tribuno Tiberio Graco propuso aplicar un límite legal existente pero incumplido sobre la ocupación de tierra pública, y repartir el excedente entre ciudadanos sin tierra. El objetivo era militar además de social: solo los propietarios podían ser reclutados, así que la desaparición del campesinado amenazaba el reclutamiento.',
          'La reacción del Senado fue brutal. Tiberio fue asesinado junto a centenares de partidarios; su hermano Cayo, tras un programa más amplio, murió en circunstancias similares en 121 a. C. Ese episodio inauguró el uso sistemático de la violencia política en Roma y dividió la vida pública entre populares —quienes buscaban apoyo en las asambleas y en la plebe— y optimates —quienes defendían la primacía del Senado—. Conviene subrayar que no eran partidos ni ideologías, sino métodos de acción política.',
          'Cayo Mario abrió la brecha decisiva. Al reclutar proletarios sin propiedad, resolvió el problema de efectivos pero creó un ejército cuyos soldados no esperaban tierra del Estado, sino de su general. La lealtad militar se personalizó. A partir de ahí, quien mandaba legiones disponía de un instrumento político, y las guerras civiles se volvieron posibles.',
          'La Guerra Social (91-88 a. C.) enfrentó a Roma con sus aliados itálicos, que exigían la ciudadanía tras siglos aportando tropas. Roma perdió militarmente el conflicto en buena medida y lo resolvió concediendo lo que se le pedía: la ciudadanía se extendió a toda Italia al sur del Po. Fue una integración forzada por la guerra, no una generosidad.',
          'Sila llevó la lógica hasta el final: en 88 a. C. marchó con sus legiones sobre Roma, algo hasta entonces impensable; en 82 a. C. se hizo nombrar dictador sin límite temporal e instauró las proscripciones, listas públicas de enemigos cuya muerte era recompensada y cuyos bienes se confiscaban. Reforzó el Senado y limitó el tribunado, y después se retiró. Su precedente —tomar el poder por las armas y reorganizar el Estado— resultó más duradero que sus reformas.',
        ].join('\n\n'),
        callout:
          'Populares y optimates no eran partidos con programa ni afiliación estable. Un mismo aristócrata podía usar métodos populares en una coyuntura y defender al Senado en otra: eran estrategias, no ideologías.',
      },
      {
        title: 'El derrumbe final y la cuestión de por qué',
        body: [
          'La generación siguiente actuó ya sobre un sistema descompuesto. Pompeyo obtuvo mandos extraordinarios de amplitud inédita; Craso aportó una fortuna colosal; César combinó ambición, capacidad militar y apoyo popular. El acuerdo privado de los tres en 60 a. C. —el llamado primer triunvirato— no fue una institución, sino un pacto para repartirse el control de las elecciones y los mandos, y muestra hasta qué punto las instituciones habían dejado de decidir.',
          'La conquista de la Galia dio a César una clientela militar, un prestigio inmenso y un botín enorme. Cuando el Senado le exigió licenciar sus tropas, cruzó el Rubicón (49 a. C.). Tras vencer, acumuló cargos, se hizo nombrar dictador perpetuo y aceptó honores que evocaban la realeza y el culto divino. Fue asesinado en 44 a. C. por un grupo de senadores que decían restaurar la República, y cuyo golpe solo produjo trece años más de guerra civil.',
          'La derrota de Marco Antonio y Cleopatra en Accio (31 a. C.) dejó a Octavio como único poder. En 27 a. C. devolvió formalmente sus poderes al Senado y recibió a cambio el nombre de Augusto y una posición que conservaba todas las apariencias republicanas: magistraturas tradicionales, Senado en funcionamiento, ausencia de título real. Tácito resumió la operación con una frase demoledora: conservó los nombres de las cosas y cambió su sustancia.',
          'Sobre las causas del derrumbe hay varias líneas de explicación. Una subraya los factores socioeconómicos: la ruina del campesinado, la esclavitud masiva y la concentración de la tierra. Otra insiste en el desajuste institucional: instituciones diseñadas para una ciudad-Estado gobernando un imperio mediterráneo, sin administración profesional, sin control efectivo de los gobernadores y con magistraturas anuales incompatibles con guerras de años. Una tercera, desarrollada por Ronald Syme en *The Roman Revolution* (1939), analiza el cambio como sustitución de una oligarquía por otra mediante la violencia y el clientelismo, y desmonta la retórica de la restauración augústea.',
          'La lectura más aceptada hoy combina las tres y añade un factor cultural: la competencia aristocrática por el honor, que había sido el motor de la expansión, dejó de tener límites eficaces cuando los premios se volvieron desmesurados y los ejércitos, personales. La República no fue derribada por enemigos externos ni por una revolución popular, sino por la propia clase que la dirigía.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Mos maiorum', definition: 'Costumbre de los antepasados: conjunto de normas no escritas que hacía de constitución romana.' },
      { term: 'Cursus honorum', definition: 'Orden legal de las magistraturas, con edades mínimas e intervalos obligatorios entre cargos.' },
      { term: 'Imperium', definition: 'Poder de mando militar y jurisdiccional que ostentaban cónsules, pretores y dictadores.' },
      { term: 'Intercessio', definition: 'Derecho de veto de los tribunos de la plebe frente a actos de cualquier magistrado.' },
      { term: 'Sacrosanctitas', definition: 'Inviolabilidad religiosa del tribuno de la plebe: agredirlo suponía maldición y muerte impune.' },
      { term: 'Clientela', definition: 'Vínculo asimétrico y hereditario entre patrono y cliente. Base real de la política romana.' },
      { term: 'Nobilitas', definition: 'Élite patricio-plebeya formada por familias que habían alcanzado el consulado.' },
      { term: 'Homo novus', definition: 'Primer miembro de una familia en llegar al consulado. Caso excepcional, como Cicerón.' },
      { term: 'Ager publicus', definition: 'Tierra pública conquistada, ocupada de hecho por grandes propietarios pese a los límites legales.' },
      { term: 'Populares / optimates', definition: 'Métodos de acción política —apoyo en las asambleas o en el Senado—, no partidos ni ideologías.' },
      { term: 'Proscripción', definition: 'Lista pública de enemigos cuya muerte se recompensaba y cuyos bienes se confiscaban. Instaurada por Sila.' },
      { term: 'Socii', definition: 'Aliados itálicos obligados a aportar tropas sin ser ciudadanos. Origen de la Guerra Social.' },
    ],
    debates: [
      {
        question: '¿Fue el imperialismo romano defensivo o estructuralmente agresivo?',
        positions: [
          {
            school: 'Imperialismo defensivo (Mommsen; tradición apoyada en las fuentes romanas)',
            argument:
              'Roma habría entrado en guerra siempre provocada, aplicando el procedimiento del bellum iustum y respondiendo a amenazas o a peticiones de aliados. La expansión sería un resultado no buscado de una política de seguridad.',
          },
          {
            school: 'Agresividad estructural (Harris, 1979)',
            argument:
              'El prestigio militar era requisito del ascenso político, el botín enriquecía a generales y soldados, y la guerra era la actividad normal de casi todos los años. Los incentivos internos empujaban a la expansión con independencia de las provocaciones externas.',
          },
        ],
        state:
          'La tesis de Harris se ha impuesto mayoritariamente en su núcleo: la sociedad romana estaba organizada para la guerra. Se discute cuánta planificación consciente hubo y cuánto peso tuvieron los intereses económicos frente a los del honor aristocrático.',
      },
      {
        question: '¿Fue la República romana en algún sentido democrática?',
        positions: [
          {
            school: 'Elementos democráticos reales (Millar, 1998)',
            argument:
              'El pueblo reunido en asamblea elegía magistrados y aprobaba leyes; los políticos debían persuadirlo en la contio. La política romana se hacía en público y la retórica popular tenía efectos, lo que impide reducirla a mera fachada oligárquica.',
          },
          {
            school: 'Oligarquía con consentimiento (Mouritsen; tradición de Gelzer y Syme)',
            argument:
              'La estructura de voto por centurias favorecía a los ricos, la asistencia efectiva a las asambleas era baja, no existía debate ni enmienda en la votación, y las clientelas condicionaban el resultado. El pueblo ratificaba decisiones tomadas en otro sitio.',
          },
        ],
        state:
          'El debate abierto por Millar renovó el campo. La posición dominante reconoce una dimensión pública y persuasiva de la política romana, sin aceptar que existiera soberanía popular efectiva: se habla de «oligarquía que necesitaba legitimación popular».',
      },
      {
        question: '¿Por qué cayó la República?',
        positions: [
          {
            school: 'Explicación socioeconómica',
            argument:
              'La conquista arruinó al pequeño campesinado, sustituyó trabajo libre por esclavo y concentró la tierra. Sin propietarios no había reclutas ni base social del régimen, y el conflicto por la tierra se hizo insoluble.',
          },
          {
            school: 'Desajuste institucional',
            argument:
              'Instituciones de ciudad-Estado gobernaban un imperio: magistraturas anuales frente a guerras de años, sin administración profesional ni control de los gobernadores. Los mandos extraordinarios eran la única solución práctica y a la vez el instrumento de su destrucción.',
          },
          {
            school: 'Revolución de la clase dirigente (Syme, 1939)',
            argument:
              'Lo ocurrido fue la sustitución de una oligarquía por otra mediante violencia, clientelismo y propaganda. La «restauración» augústea fue una operación retórica sobre un cambio de régimen efectivo.',
          },
        ],
        state:
          'Se prefieren hoy explicaciones combinadas. Se subraya además un factor cultural: la competencia aristocrática por el honor perdió sus límites cuando los premios se hicieron desmesurados y los ejércitos, personales.',
      },
    ],
    sources: [
      { author: 'Polibio', title: 'Historias, libro VI', year: 'c. 140 a. C.', kind: 'primaria', note: 'Análisis de la constitución mixta romana por un testigo griego contemporáneo.' },
      { author: 'Tito Livio', title: 'Ab Urbe condita', year: 'c. 27 a. C.–17 d. C.', kind: 'primaria', note: 'Relato monumental desde los orígenes. Fuente esencial y a la vez construcción ideológica augústea.' },
      { author: 'Salustio', title: 'La conjuración de Catilina; La guerra de Yugurta', year: 'c. 42–40 a. C.', kind: 'primaria', note: 'Análisis contemporáneo de la corrupción de la élite republicana.' },
      { author: 'Cicerón', title: 'Cartas a Ático; discursos', year: '68–43 a. C.', kind: 'primaria', note: 'Correspondencia privada excepcional: la política republicana vista desde dentro y en tiempo real.' },
      { author: 'Plutarco', title: 'Vidas paralelas', year: 'c. 100 d. C.', kind: 'primaria', note: 'Biografías de los Gracos, Mario, Sila, Pompeyo y César. Interés moral más que analítico.' },
      { author: 'Ronald Syme', title: 'The Roman Revolution', year: '1939', kind: 'estudio', note: 'Analiza el ascenso de Augusto como sustitución de oligarquías. Obra fundacional de la prosopografía romana.' },
      { author: 'William V. Harris', title: 'War and Imperialism in Republican Rome, 327–70 BC', year: '1979', kind: 'estudio', note: 'Demuele la tesis del imperialismo defensivo.' },
      { author: 'Fergus Millar', title: 'The Crowd in Rome in the Late Republic', year: '1998', kind: 'estudio', note: 'Reabre el debate sobre los elementos democráticos de la República.' },
      { author: 'Henrik Mouritsen', title: 'Plebs and Politics in the Late Roman Republic', year: '2001', kind: 'estudio', note: 'Respuesta crítica a Millar sobre la participación popular efectiva.' },
      { author: 'Mary Beard', title: 'SPQR: A History of Ancient Rome', year: '2015', kind: 'estudio', note: 'Síntesis reciente muy atenta a los problemas de fuentes y a la vida de la gente común.' },
    ],
  },
  questions: [
    {
      id: 'roma-republica-1', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Por qué el relato tradicional sobre los orígenes de Roma debe leerse con cautela?',
      options: [
        'Porque no existe ninguna evidencia arqueológica de Roma',
        'Porque Livio y Dionisio escriben cuatro o cinco siglos después sobre una tradición ya elaborada por las familias aristocráticas',
        'Porque fue escrito en griego',
        'Porque los romanos no conocían la escritura',
      ],
      answer: 1,
      explanation: 'Los elogios fúnebres y las listas familiares exageraban méritos, y el relato proyecta hacia atrás categorías políticas del siglo I a. C. Es memoria cultural, no crónica.',
    },
    {
      id: 'roma-republica-2', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Cómo describió Polibio la constitución romana?',
      options: [
        'Como una monarquía absoluta',
        'Como una constitución mixta que combinaba elementos monárquicos, aristocráticos y democráticos',
        'Como una democracia directa',
        'Como una teocracia sacerdotal',
      ],
      answer: 1,
      explanation: 'Cónsules, Senado y asambleas representarían los tres principios. Polibio atribuía a ese equilibrio la estabilidad y el éxito expansivo de Roma.',
    },
    {
      id: 'roma-republica-3', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué efecto tenía la organización del voto en los comicios centuriados?',
      options: [
        'Un ciudadano, un voto',
        'Las centurias de los más ricos votaban primero y la votación se detenía al alcanzar la mayoría',
        'Solo votaban los tribunos',
        'El voto era secreto y ponderado por edad',
      ],
      answer: 1,
      explanation: 'Las clases inferiores a menudo ni llegaban a pronunciarse. Que las asambleas fueran soberanas en teoría no implicaba que el pueblo decidiera en la práctica.',
    },
    {
      id: 'roma-republica-4', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Cuál fue el arma más eficaz de la plebe en el conflicto de los órdenes?',
      options: [
        'El asesinato de cónsules',
        'La secesión: retirarse en masa y negarse a combatir',
        'La alianza con Cartago',
        'La huelga de impuestos',
      ],
      answer: 1,
      explanation: 'Roma estaba en guerra permanente y no podía prescindir de sus soldados. La primera secesión, en 494 a. C., arrancó la creación del tribunado.',
    },
    {
      id: 'roma-republica-5', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué importancia tuvo la Ley de las Doce Tablas?',
      options: [
        'Concedió la ciudadanía a los itálicos',
        'Eliminó el monopolio patricio sobre el conocimiento del derecho, hasta entonces interpretado oralmente por los pontífices',
        'Abolió la esclavitud',
        'Creó el Senado',
      ],
      answer: 1,
      explanation: 'Su contenido no era especialmente favorable a la plebe, pero la publicidad de la norma limitaba la arbitrariedad de los jueces aristocráticos.',
    },
    {
      id: 'roma-republica-6', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Cuál fue el resultado social del conflicto de los órdenes?',
      options: [
        'La igualdad política plena entre todos los ciudadanos',
        'La formación de una nueva élite patricio-plebeya, la nobilitas, que monopolizó los cargos',
        'La abolición del Senado',
        'La expulsión de los patricios de Roma',
      ],
      answer: 1,
      explanation: 'La apertura formal de las magistraturas convivió con un cierre sociológico muy estricto. Un homo novus como Cicerón era una rareza señalada.',
    },
    {
      id: 'roma-republica-7', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Por qué la mayoría de los aliados itálicos no se pasó a Aníbal?',
      options: [
        'Porque temían a los cartagineses más que a Roma',
        'Porque Roma había integrado a las élites locales mediante un mosaico de estatutos jurídicos',
        'Porque Aníbal no llegó a entrar en Italia',
        'Porque estaban desarmados',
      ],
      answer: 1,
      explanation: 'Colonias latinas, municipios y aliados con distintos grados de derechos daban a las élites locales intereses propios en el sistema romano.',
    },
    {
      id: 'roma-republica-8', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué argumenta William Harris contra el «imperialismo defensivo»?',
      options: [
        'Que Roma nunca fue atacada',
        'Que el prestigio militar era requisito del ascenso político y el botín enriquecía a generales y soldados, lo que generaba incentivos internos para la guerra',
        'Que las guerras las decidían las asambleas populares',
        'Que Roma solo luchó contra Cartago',
      ],
      answer: 1,
      explanation: 'La guerra era la actividad normal de casi todos los años. La estructura de incentivos empujaba a la expansión al margen de las provocaciones externas.',
    },
    {
      id: 'roma-republica-9', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué problema militar pretendía resolver la reforma agraria de Tiberio Graco?',
      options: [
        'La falta de caballería',
        'Que solo los propietarios podían ser reclutados, y el campesinado estaba desapareciendo',
        'El exceso de soldados voluntarios',
        'La deserción de los aliados griegos',
      ],
      answer: 1,
      explanation: 'La reforma tenía una dimensión militar además de social: sin pequeños propietarios no había base de reclutamiento para las legiones.',
    },
    {
      id: 'roma-republica-10', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué consecuencia decisiva tuvo la reforma militar de Mario?',
      options: [
        'Redujo el tamaño del ejército',
        'Los soldados sin propiedad esperaban tierra de su general, no del Estado: la lealtad militar se personalizó',
        'Prohibió el reclutamiento de itálicos',
        'Sustituyó la infantería por la caballería',
      ],
      answer: 1,
      explanation: 'A partir de ahí, quien mandaba legiones disponía de un instrumento político propio, y las guerras civiles se hicieron posibles.',
    },
    {
      id: 'roma-republica-11', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Cómo terminó la Guerra Social de 91-88 a. C.?',
      options: [
        'Con la expulsión de los itálicos de Italia',
        'Con la concesión de la ciudadanía a Italia al sur del Po, es decir, cediendo lo que los aliados exigían',
        'Con la victoria total de Roma sin concesiones',
        'Con la independencia de los aliados itálicos',
      ],
      answer: 1,
      explanation: 'Roma perdió en buena medida militarmente y resolvió el conflicto integrando por la fuerza de los hechos, no por generosidad.',
    },
    {
      id: 'roma-republica-12', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué precedente estableció Sila que resultó más duradero que sus reformas?',
      options: [
        'La limitación del tribunado',
        'Tomar el poder marchando con las legiones sobre Roma y reorganizar el Estado desde la victoria militar',
        'El refuerzo del Senado',
        'La creación del cursus honorum',
      ],
      answer: 1,
      explanation: 'Marchar sobre Roma con un ejército era impensable antes de 88 a. C. Después, dejó de serlo.',
    },
    {
      id: 'roma-republica-13', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué eran realmente populares y optimates?',
      options: [
        'Partidos políticos con programa y afiliación',
        'Métodos de acción política: buscar apoyo en las asambleas o en el Senado',
        'Clases sociales legalmente definidas',
        'Facciones religiosas',
      ],
      answer: 1,
      explanation: 'Un mismo aristócrata podía usar métodos populares en una coyuntura y defender al Senado en otra. Eran estrategias, no ideologías.',
    },
    {
      id: 'roma-republica-14', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué representa el pacto de 60 a. C. entre César, Pompeyo y Craso?',
      options: [
        'Una magistratura creada por ley',
        'Un acuerdo privado para repartirse elecciones y mandos, señal de que las instituciones habían dejado de decidir',
        'Una alianza militar contra Cartago',
        'Un tratado con el Senado',
      ],
      answer: 1,
      explanation: 'El llamado primer triunvirato no fue una institución. Su existencia misma muestra el grado de descomposición del sistema republicano.',
    },
    {
      id: 'roma-republica-15', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: '¿Qué tesis defiende Ronald Syme en The Roman Revolution?',
      options: [
        'Que Augusto restauró genuinamente la República',
        'Que lo ocurrido fue la sustitución de una oligarquía por otra mediante violencia, clientelismo y propaganda',
        'Que la República cayó por invasión extranjera',
        'Que el pueblo romano derrocó a la aristocracia',
      ],
      answer: 1,
      explanation: 'Syme desmonta la retórica de la restauración augústea. Tácito ya había resumido la operación: se conservaron los nombres y cambió la sustancia.',
    },
    {
      id: 'roma-republica-16', era: 'Antigüedad', topicId: 'roma-republica', topic: 'Roma republicana',
      question: 'En el debate abierto por Fergus Millar, ¿qué sostiene la posición hoy dominante?',
      options: [
        'Que Roma fue una democracia plena',
        'Que fue una oligarquía que necesitaba legitimación popular, con política pública y persuasiva pero sin soberanía popular efectiva',
        'Que el pueblo no participaba en absoluto',
        'Que las asambleas nunca se reunieron',
      ],
      answer: 1,
      explanation: 'Se acepta la dimensión pública y retórica que Millar subrayó, sin conceder que la asamblea decidiera realmente: la estructura de voto y las clientelas lo impedían.',
    },
  ],
}
