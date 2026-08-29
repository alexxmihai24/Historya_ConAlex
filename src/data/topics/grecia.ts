import type { TopicModule } from '../types.ts'

export const grecia: TopicModule = {
  topic: {
    id: 'grecia',
    era: 'Antigüedad',
    title: 'Grecia arcaica y clásica',
    years: 'c. 800–323 a. C.',
    country: 'Grecia',
    description: 'La polis, la invención de la política, la democracia ateniense y sus límites.',
    duration: '50 min',
    level: 'Universidad',
    progress: 0,
    visual: '⌂',
    color: 'blue',
    summary:
      'Grecia no fue nunca un Estado. Fue un archipiélago de centenares de comunidades políticas autónomas que compartían lengua, panteón y santuarios, y que competían y guerreaban entre sí de forma endémica. Esa fragmentación no es un defecto que explicar, sino la condición que produjo su aportación más singular: la idea de que el poder puede ser objeto de deliberación pública entre iguales, y de que las reglas de la comunidad son un artefacto humano y no un mandato divino.',
    keyDates: [
      { date: 'c. 1200–1100 a. C.', event: 'Colapso del mundo micénico; comienza la llamada Edad Oscura.' },
      { date: 'c. 800 a. C.', event: 'Adopción del alfabeto fenicio y formación de la polis; poemas homéricos.' },
      { date: 'c. 750–550 a. C.', event: 'Gran colonización: fundaciones desde el mar Negro hasta Iberia.' },
      { date: '621 a. C.', event: 'Legislación de Dracón en Atenas.' },
      { date: '594 a. C.', event: 'Reformas de Solón: abolición de la esclavitud por deudas.' },
      { date: '561–510 a. C.', event: 'Tiranía de los Pisistrátidas en Atenas.' },
      { date: '508/507 a. C.', event: 'Reformas de Clístenes: nace la democracia ateniense.' },
      { date: '490 a. C.', event: 'Maratón: derrota del primer desembarco persa.' },
      { date: '480–479 a. C.', event: 'Termópilas, Salamina y Platea; fin de la invasión de Jerjes.' },
      { date: '478 a. C.', event: 'Fundación de la Liga de Delos, después imperio ateniense.' },
      { date: '461–429 a. C.', event: 'Hegemonía política de Pericles; construcción del Partenón desde 447.' },
      { date: '431–404 a. C.', event: 'Guerra del Peloponeso; derrota final de Atenas.' },
      { date: '399 a. C.', event: 'Proceso y ejecución de Sócrates.' },
      { date: '338 a. C.', event: 'Queronea: Filipo II de Macedonia impone su hegemonía.' },
      { date: '323 a. C.', event: 'Muerte de Alejandro Magno; fin convencional del periodo clásico.' },
    ],
    sections: [
      {
        title: 'Del colapso micénico a la polis',
        body: [
          'Hacia 1200 a. C. se derrumbaron los palacios micénicos, con su escritura silábica (Lineal B), su burocracia redistributiva y su economía centralizada. El colapso formó parte del hundimiento general del Bronce Final en el Mediterráneo oriental. Grecia perdió la escritura durante unos cuatro siglos, y con ella la administración palacial: no hay archivos, ni grandes obras, ni comercio de larga distancia comparable.',
          'De esa discontinuidad surgió algo distinto. Cuando las comunidades se reorganizaron, no reconstruyeron palacios: construyeron poleis. Una polis no es simplemente una ciudad; es una comunidad de ciudadanos —un cuerpo político— con su territorio (chora), su ágora, sus cultos y sus instituciones. Aristóteles lo formuló con precisión: la polis es una comunidad de ciudadanos, no un lugar. Por eso los griegos decían «los atenienses» y no «Atenas» al hablar de decisiones políticas.',
          'La recuperación de la escritura fue igualmente reveladora. Los griegos adoptaron el alfabeto fenicio hacia el siglo IX-VIII a. C., pero introdujeron una modificación decisiva: asignaron signos a las vocales. El resultado fue un sistema de unas veinticuatro letras, aprendible en semanas y no en años, frente al centenar largo de signos del cuneiforme o del jeroglífico. Ese abaratamiento de la alfabetización tuvo consecuencias políticas: las leyes podían exponerse por escrito y ser verificadas por cualquiera.',
          'La gran colonización (c. 750-550 a. C.) llevó fundaciones griegas desde el mar Negro hasta el sur de Francia y la costa ibérica —Emporion, la actual Empúries, entre ellas—. Sus causas fueron sobre todo agrarias: escasez de tierra cultivable (stenochoria), presión demográfica y conflictos internos. Cada colonia era, desde su fundación, una polis independiente y no una posesión de la metrópolis: un rasgo que la distingue radicalmente del colonialismo moderno.',
        ].join('\n\n'),
        callout:
          'Aristóteles define al ser humano como zoon politikon: el animal que vive en polis. La traducción «animal político» pierde el matiz: no significa aficionado a la política, sino incapaz de realizarse fuera de una comunidad de ciudadanos.',
      },
      {
        title: 'La crisis arcaica: hoplitas, deudas y legisladores',
        body: [
          'Los siglos VII y VI a. C. fueron de tensión social aguda. La concentración de tierra en manos aristocráticas y la práctica del préstamo con garantía personal produjeron una masa de campesinos endeudados que podían acabar esclavizados por sus propios acreedores. La crisis es documentada por los poemas de Solón y por Hesíodo, cuyos *Trabajos y días* describen desde abajo la dureza del campesinado y la parcialidad de los «reyes devoradores de regalos».',
          'En paralelo se transformó la guerra. La falange hoplítica —formación cerrada de infantes con escudo redondo, lanza y coraza— sustituyó al combate individual de campeones aristocráticos. Su eficacia dependía de la cohesión: cada hombre protegía con su escudo el flanco derecho del vecino. Los hoplitas se costeaban el equipo, lo que los situaba en un estrato acomodado pero no aristocrático.',
          'La llamada «tesis hoplítica», formulada por Aristóteles y desarrollada por historiadores modernos, sostiene que quienes combatían en la falange acabaron reclamando participación política proporcional a su contribución militar. La crítica reciente —Hans van Wees y Kurt Raaflaub— ha discutido tanto la cronología como el automatismo del vínculo: la falange se desarrolló de forma gradual, y muchas poleis con ejército hoplítico siguieron siendo oligarquías.',
          'La respuesta a la crisis fueron los legisladores y los tiranos. Dracón (621 a. C.) puso las leyes por escrito, y aunque su severidad hizo proverbial el adjetivo «draconiano», la simple publicidad de la norma limitaba la arbitrariedad de los jueces aristocráticos. Solón (594 a. C.) fue más lejos: canceló las deudas vigentes (seisachtheia), prohibió la esclavitud por deudas de ciudadanos atenienses, y estructuró la participación política según la renta agraria, no según el nacimiento. Fue una reforma censitaria, no democrática, pero rompió el monopolio del linaje.',
          'La tiranía griega arcaica no equivale al sentido moderno de la palabra. Los tiranos eran normalmente aristócratas que tomaban el poder al margen de la ley apoyándose en el descontento popular. Los Pisistrátidas en Atenas promovieron fiestas cívicas, obras públicas y cultos ciudadanos que, paradójicamente, debilitaron las redes clientelares de la nobleza y prepararon el terreno para la democracia.',
        ].join('\n\n'),
      },
      {
        title: 'La democracia ateniense: mecánica y alcance',
        body: [
          'Las reformas de Clístenes en 508/507 a. C. reorganizaron el cuerpo cívico sobre una base deliberadamente artificial. Sustituyó las cuatro tribus tradicionales de parentesco por diez tribus nuevas, cada una compuesta por demos de tres zonas distintas del Ática —costa, ciudad e interior—. El objetivo era romper las lealtades regionales y clientelares: la unidad política pasó a ser el demo de residencia, y los ciudadanos empezaron a identificarse por su demótico y no por su linaje.',
          'El sistema resultante descansaba en tres órganos. La Ekklesía, asamblea abierta a todos los ciudadanos varones, se reunía unas cuarenta veces al año en la Pnyx y decidía leyes, guerra, paz y finanzas. La Boulé, consejo de quinientos miembros elegidos por sorteo, preparaba el orden del día y gestionaba la administración cotidiana. Los tribunales populares (Heliea), con jurados de centenares de ciudadanos también sorteados, juzgaban sin jueces profesionales.',
          'El rasgo más ajeno a nuestra sensibilidad es el sorteo. Para los griegos, la elección era un procedimiento aristocrático —selecciona a los mejores o a los más conocidos— mientras que el sorteo era el procedimiento democrático, porque garantizaba igualdad efectiva de acceso al cargo. Solo los puestos que exigían competencia técnica, como el mando militar (estrategos), se cubrían por elección; y no es casual que fuera la estrategia el cargo desde el que Pericles gobernó de hecho durante décadas.',
          'A partir de Pericles se introdujo la misthophoría, un pago por el ejercicio de cargos y por asistir a los tribunales. La medida es decisiva: sin retribución, solo los acomodados podían permitirse dedicar días a la política. Aristóteles señala precisamente esto como el mecanismo que hizo real, y no solo formal, la participación de los pobres.',
          'Los límites del sistema son igual de importantes que sus mecanismos. La ciudadanía excluía a mujeres, a metecos (extranjeros residentes, muchos de ellos ricos y establecidos durante generaciones) y a esclavos. Las estimaciones más aceptadas para la Atenas del siglo V dan entre 30.000 y 60.000 ciudadanos varones sobre una población total de entre 250.000 y 300.000 personas: entre un 10 % y un 20 % del total. Y la ley de ciudadanía de Pericles (451 a. C.), que exigía madre y padre atenienses, restringió aún más el acceso.',
        ].join('\n\n'),
        callout:
          'El ostracismo permitía desterrar diez años a un ciudadano sin acusarlo de delito, mediante votación con fragmentos de cerámica. Era un mecanismo preventivo contra la concentración de poder, no una pena: el desterrado conservaba sus bienes.',
      },
      {
        title: 'Esparta: la anomalía que fascinó a la tradición',
        body: [
          'Esparta ha sido, desde la Antigüedad, objeto de una idealización persistente que los historiadores llaman «el espejismo espartano». La imagen de una comunidad austera, igualitaria y perfectamente estable procede en gran medida de autores admiradores y externos —Jenofonte, Plutarco escribiendo siglos después— y de la ausencia de fuentes espartanas propias, ya que la ciudad no produjo casi literatura ni documentos.',
          'Su singularidad real era estructural. Esparta sometió a la vecina Mesenia y convirtió a su población en hilotas: una masa servil adscrita a la tierra, propiedad colectiva del Estado y no de particulares. Los hilotas superaban ampliamente en número a los espartiatas, y sostenían con su trabajo la dedicación militar exclusiva de estos. El sistema exigía represión permanente: los éforos declaraban formalmente la guerra a los hilotas cada año, y la kryptéia enviaba a jóvenes espartiatas a matar selectivamente a los hilotas más destacados.',
          'La educación estatal (agogé) retiraba a los niños de sus familias a los siete años y los sometía a un entrenamiento colectivo de resistencia, disciplina y obediencia. El sistema político combinaba dos reyes hereditarios, un consejo de ancianos (gerusía), una asamblea de escasa capacidad de iniciativa y cinco éforos con amplios poderes de control anual.',
          'Las mujeres espartanas gozaban de una posición atípica en el mundo griego: recibían formación física, podían poseer y heredar tierras, y en época helenística Aristóteles calculaba que controlaban cerca de dos quintas partes del territorio. Aristóteles lo consideraba un defecto del régimen; para el historiador es un dato sobre las consecuencias de un sistema en el que los varones vivían prácticamente en cuartel.',
          'El punto ciego de la idealización es demográfico. La rígida igualdad de lotes de tierra se erosionó por herencias y concentración, y el número de espartiatas de pleno derecho se desplomó: de unos 8.000 en las guerras médicas a poco más de mil en el siglo IV. La derrota ante Tebas en Leuctra (371 a. C.) y la subsiguiente liberación de Mesenia liquidaron la base económica del sistema. Esparta no cayó por decadencia moral, sino por agotamiento de su cuerpo de ciudadanos.',
        ].join('\n\n'),
      },
      {
        title: 'Guerras médicas, imperio y guerra del Peloponeso',
        body: [
          'Las guerras médicas enfrentaron a un conjunto de poleis con el Imperio persa aqueménida entre 490 y 479 a. C. La victoria griega —Maratón, Salamina, Platea— tuvo un efecto identitario enorme: consolidó la oposición conceptual entre «griegos» y «bárbaros» que antes era mucho menos nítida, y proporcionó a Atenas un prestigio y una flota decisivos.',
          'De esa flota nació la Liga de Delos (478 a. C.), alianza defensiva con tesoro común en la isla de Delos. Su deriva es uno de los procesos mejor documentados de conversión de una alianza en imperio: Atenas trasladó el tesoro a la Acrópolis en 454 a. C., impuso el phoros como tributo, reprimió militarmente las secesiones (Naxos, Tasos, Samos), instaló guarniciones y colonos, y obligó a los aliados a litigar en tribunales atenienses. Tucídides lo dice sin eufemismos: era una tiranía.',
          'La financiación del Partenón con fondos de la Liga ilustra la tensión. Los grandes programas constructivos de Pericles, que hoy leemos como cumbre del arte clásico, fueron pagados en parte con el tributo de ciudades aliadas y criticados en su momento por eso mismo.',
          'La guerra del Peloponeso (431-404 a. C.) enfrentó a la Atenas marítima y democrática con la Esparta terrestre y oligárquica. Tucídides propone una explicación causal que sigue siendo un modelo de análisis: la causa verdadera fue el crecimiento del poder ateniense y el miedo que suscitó en Esparta, mientras que los incidentes de Corcira y Potidea fueron pretextos. La distinción entre causa profunda y ocasión inmediata es una de las aportaciones metodológicas fundacionales de la historiografía.',
          'La guerra fue devastadora. La peste de 430-426 a. C. mató quizá a un tercio de la población ateniense, incluido Pericles. El diálogo de Melos, donde los atenienses justifican el exterminio de una ciudad neutral con el argumento de que «los fuertes hacen lo que pueden y los débiles sufren lo que deben», es el texto más citado sobre la lógica del poder desnudo. La expedición a Sicilia (415-413 a. C.) destruyó la flota y el ejército atenienses. La derrota final en 404 a. C. trajo la breve tiranía de los Treinta y, tras la restauración democrática, el proceso contra Sócrates en 399 a. C.',
        ].join('\n\n'),
        callout:
          'Tucídides afirma escribir «una posesión para siempre» y no una pieza de concurso. Su renuncia a la explicación sobrenatural y su atención a los intereses y al miedo lo convierten en fundador del análisis político.',
      },
      {
        title: 'Pensamiento, teatro y el legado discutible',
        body: [
          'La filosofía griega nació en las colonias jonias con una pregunta cosmológica: de qué está hecho el mundo y por qué cambia. Tales, Anaximandro y Heráclito buscaron principios naturales sin recurrir a los dioses. El giro decisivo llegó con los sofistas y con Sócrates, que desplazaron la pregunta hacia lo humano: la justicia, la virtud, la ley, el mejor régimen.',
          'Los sofistas fueron maestros itinerantes que enseñaban retórica por dinero, algo indispensable en sociedades donde el poder se ejercía hablando en la asamblea y en los tribunales. Protágoras formuló el relativismo más citado de la Antigüedad —«el hombre es la medida de todas las cosas»— y la distinción entre physis (naturaleza) y nomos (convención) permitió por primera vez preguntarse si las leyes vigentes eran naturales o simplemente acordadas. La mala fama de los sofistas procede en buena medida de Platón, parte interesada en el debate.',
          'El teatro ateniense era una institución cívica financiada por ciudadanos ricos mediante la coregía, con asistencia masiva y contenido explícitamente político. La tragedia planteaba en escena conflictos irresolubles entre deberes legítimos —la *Antígona* de Sófocles enfrenta la ley de la ciudad y la obligación religiosa familiar—, y la comedia de Aristófanes atacaba por su nombre a políticos vivos, a generales y al propio Sócrates. Que una democracia financiara la crítica más feroz de sí misma es un dato notable.',
          'El legado griego debe manejarse con cuidado. Es habitual presentar a Grecia como «cuna de Occidente» en una línea continua hasta la democracia moderna. Esa genealogía es en buena medida una construcción del siglo XIX: la democracia ateniense era directa, no representativa; se basaba en el sorteo, que hoy no usamos; excluía a la mayoría de la población; y coexistía con la esclavitud, con el imperialismo y con la subordinación estricta de las mujeres. Además, la transmisión de los textos griegos a Europa pasó decisivamente por la traducción y el comentario árabes y por Bizancio, un recorrido que el relato de la continuidad directa suele omitir.',
          'Reconocer eso no reduce la aportación griega, la precisa. Lo verdaderamente inédito no fue un conjunto de instituciones exportables, sino una práctica: someter las reglas de la vida común a discusión pública argumentada, y considerarlas modificables. Esa idea, y no el Partenón, es lo que sigue en uso.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Polis', definition: 'Comunidad de ciudadanos con territorio, culto e instituciones propias. No equivale a «ciudad»: es un cuerpo político.' },
      { term: 'Hoplita', definition: 'Infante pesado que combatía en falange cerrada y se costeaba su equipo.' },
      { term: 'Seisachtheia', definition: '«Sacudida de cargas»: cancelación de deudas de Solón y prohibición de la esclavitud por deudas.' },
      { term: 'Ekklesía', definition: 'Asamblea de todos los ciudadanos atenienses; órgano soberano en leyes, guerra y finanzas.' },
      { term: 'Boulé', definition: 'Consejo de 500 miembros sorteados que preparaba el orden del día de la asamblea.' },
      { term: 'Misthophoría', definition: 'Retribución por ejercer cargos o formar parte de los jurados. Hizo viable la participación de los pobres.' },
      { term: 'Ostracismo', definition: 'Destierro preventivo de diez años decidido por votación, sin delito ni pérdida de bienes.' },
      { term: 'Meteco', definition: 'Extranjero residente en Atenas: libre, con obligaciones fiscales y militares, pero sin derechos políticos.' },
      { term: 'Hilota', definition: 'Población servil mesenia adscrita a la tierra, propiedad colectiva del Estado espartano.' },
      { term: 'Agogé', definition: 'Educación estatal espartana, colectiva y militarizada, desde los siete años.' },
      { term: 'Physis / nomos', definition: 'Naturaleza frente a convención. Distinción sofística que permitió cuestionar la legitimidad de las leyes.' },
      { term: 'Phoros', definition: 'Tributo pagado por los aliados a la Liga de Delos, convertido de hecho en impuesto imperial ateniense.' },
    ],
    debates: [
      {
        question: '¿Provocó la falange hoplítica la ampliación de la participación política?',
        positions: [
          {
            school: 'Tesis hoplítica clásica (Aristóteles; Andrewes, Cartledge)',
            argument:
              'Quienes sostenían la defensa de la comunidad y se costeaban el armamento reclamaron derechos proporcionales a esa contribución. El paso del combate aristocrático a la falange explicaría la apertura de los regímenes arcaicos.',
          },
          {
            school: 'Revisión gradualista (van Wees, Raaflaub)',
            argument:
              'La falange se formó de manera lenta y no marca una ruptura militar nítida. Además, numerosas poleis con ejército hoplítico permanecieron oligárquicas: la correlación entre forma de combate y forma de gobierno no se sostiene.',
          },
        ],
        state:
          'La versión fuerte de la tesis está desacreditada. Se acepta que la participación militar fue un argumento político disponible, pero no un mecanismo automático: el resultado dependió de las luchas internas de cada polis.',
      },
      {
        question: '¿Fue la Liga de Delos una alianza o un imperio?',
        positions: [
          {
            school: 'Lectura defensiva',
            argument:
              'Nació como alianza voluntaria frente a Persia, con tesoro común y asamblea de aliados. Atenas aportaba la flota y proporcionaba seguridad efectiva en el Egeo, además de reprimir la piratería.',
          },
          {
            school: 'Lectura imperial (Tucídides; Meiggs)',
            argument:
              'El traslado del tesoro a Atenas en 454, la conversión de la contribución en tributo, la represión armada de las secesiones, las guarniciones, las cleruquías y la obligación de litigar en Atenas configuran una dominación. El propio Tucídides la llama tiranía.',
          },
        ],
        state:
          'Hay consenso en que la alianza derivó en imperio; se discute el ritmo y hasta qué punto los aliados obtenían contrapartidas reales (seguridad marítima, apoyo a facciones democráticas locales) que explicarían la relativa escasez de revueltas.',
      },
      {
        question: '¿Fue la esclavitud la condición material de la democracia ateniense?',
        positions: [
          {
            school: 'Dependencia estructural (Finley; Ste. Croix)',
            argument:
              'El ocio necesario para la participación política intensiva descansaba en el trabajo esclavo. Atenas fue una «sociedad esclavista» en sentido pleno: la esclavitud no era marginal, sino la base de la producción y de la renta de las clases propietarias.',
          },
          {
            school: 'Matización (Wood)',
            argument:
              'El campesinado ateniense libre trabajaba su propia tierra y constituía el grueso del cuerpo cívico. La democracia se apoyaría más en la existencia de pequeños productores libres protegidos frente al endeudamiento que en el excedente esclavo.',
          },
        ],
        state:
          'Nadie discute la centralidad de la esclavitud —las estimaciones oscilan entre 60.000 y 100.000 esclavos en el Ática—, pero sí su papel causal exacto. El debate se cruza con la discusión más amplia sobre la naturaleza de la economía antigua.',
      },
    ],
    sources: [
      { author: 'Homero', title: 'Ilíada y Odisea', year: 'c. s. VIII a. C.', kind: 'primaria', note: 'Fuente sobre valores aristocráticos; refleja una sociedad posterior a la micénica que describe.' },
      { author: 'Hesíodo', title: 'Trabajos y días', year: 'c. 700 a. C.', kind: 'primaria', note: 'Visión campesina de la crisis agraria arcaica y de la justicia parcial de los poderosos.' },
      { author: 'Heródoto', title: 'Historias', year: 'c. 430 a. C.', kind: 'primaria', note: 'Relato de las guerras médicas y etnografía del mundo conocido. Interés por las causas y por el otro.' },
      { author: 'Tucídides', title: 'Historia de la guerra del Peloponeso', year: 'c. 400 a. C.', kind: 'primaria', note: 'Distingue causa profunda de pretexto. Diálogo de Melos y discurso fúnebre de Pericles.' },
      { author: 'Aristóteles (o su escuela)', title: 'Constitución de los atenienses', year: 'c. 330 a. C.', kind: 'primaria', note: 'Descripción del funcionamiento institucional ateniense. Redescubierta en papiro en 1879.' },
      { author: 'Aristófanes', title: 'Las nubes, Los caballeros, Lisístrata', year: '423–411 a. C.', kind: 'primaria', note: 'Comedia política que ataca por su nombre a dirigentes vivos y al propio Sócrates.' },
      { author: 'Moses I. Finley', title: 'The Ancient Economy', year: '1973', kind: 'estudio', note: 'Modelo sustantivista de la economía antigua; central en el debate sobre esclavitud y mercado.' },
      { author: 'Russell Meiggs', title: 'The Athenian Empire', year: '1972', kind: 'estudio', note: 'Estudio de referencia sobre la conversión de la Liga de Delos en imperio.' },
      { author: 'Paul Cartledge', title: 'The Spartans', year: '2002', kind: 'estudio', note: 'Revisión crítica del «espejismo espartano».' },
      { author: 'Josiah Ober', title: 'Mass and Elite in Democratic Athens', year: '1989', kind: 'estudio', note: 'Analiza cómo la retórica mediaba la relación entre élite y demos.' },
      { author: 'Hans van Wees', title: 'Greek Warfare: Myths and Realities', year: '2004', kind: 'estudio', note: 'Principal revisión de la tesis hoplítica.' },
    ],
  },
  questions: [
    {
      id: 'grecia-1', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué es exactamente una polis?',
      options: [
        'Una ciudad amurallada de gran tamaño',
        'Una comunidad de ciudadanos con territorio, cultos e instituciones propias',
        'Una provincia del Imperio persa',
        'Una alianza militar entre aldeas',
      ],
      answer: 1,
      explanation: 'Aristóteles insiste en que la polis es un cuerpo político, no un lugar. Por eso las fuentes dicen «los atenienses» y no «Atenas» al referirse a decisiones.',
    },
    {
      id: 'grecia-2', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Cuál fue la aportación griega al alfabeto fenicio?',
      options: [
        'Reducirlo a doce signos',
        'Asignar signos a las vocales, lo que abarató enormemente la alfabetización',
        'Escribirlo sobre arcilla',
        'Añadir determinativos semánticos',
      ],
      answer: 1,
      explanation: 'Un sistema de unas veinticuatro letras se aprende en semanas. Eso permitió exponer las leyes por escrito y que cualquiera pudiera verificarlas.',
    },
    {
      id: 'grecia-3', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿En qué se diferenciaban las colonias griegas del colonialismo moderno?',
      options: [
        'En que no comerciaban con la metrópolis',
        'En que cada colonia era desde su fundación una polis independiente, no una posesión',
        'En que estaban gobernadas por Persia',
        'En que solo se fundaron en Asia Menor',
      ],
      answer: 1,
      explanation: 'La colonia mantenía vínculos religiosos y sentimentales con su metrópolis, pero no dependencia política. Su causa principal fue la escasez de tierra cultivable.',
    },
    {
      id: 'grecia-4', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué estableció la seisachtheia de Solón?',
      options: [
        'El sorteo de los cargos públicos',
        'La cancelación de deudas y la prohibición de esclavizar a ciudadanos atenienses por deudas',
        'La expulsión de los metecos',
        'La creación de la Liga de Delos',
      ],
      answer: 1,
      explanation: 'Fue una reforma censitaria, no democrática: organizó la participación según la renta agraria. Pero rompió el monopolio político del linaje.',
    },
    {
      id: 'grecia-5', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Cuál fue el objetivo de la reorganización en diez tribus de Clístenes?',
      options: [
        'Facilitar el reclutamiento naval',
        'Romper las lealtades de parentesco y regionales mezclando demos de zonas distintas',
        'Reducir el número de ciudadanos',
        'Repartir la tierra de forma igualitaria',
      ],
      answer: 1,
      explanation: 'Cada tribu combinaba demos de costa, ciudad e interior. La unidad política pasó a ser el demo de residencia y los ciudadanos se identificaban por su demótico.',
    },
    {
      id: 'grecia-6', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Por qué los griegos consideraban el sorteo más democrático que la elección?',
      options: [
        'Porque era más barato de organizar',
        'Porque garantizaba igualdad efectiva de acceso, mientras la elección favorece a los notables',
        'Porque lo exigían los oráculos',
        'Porque impedía la reelección',
      ],
      answer: 1,
      explanation: 'La elección se veía como procedimiento aristocrático. Solo los cargos técnicos, como la estrategia militar, se cubrían por votación; y desde ahí gobernó Pericles.',
    },
    {
      id: 'grecia-7', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué proporción aproximada de la población del Ática tenía derechos políticos?',
      options: ['Alrededor del 50 %', 'Entre el 10 % y el 20 %', 'Más del 70 %', 'Menos del 1 %'],
      answer: 1,
      explanation: 'Entre 30.000 y 60.000 ciudadanos varones sobre 250.000-300.000 habitantes. Quedaban excluidos mujeres, metecos y esclavos.',
    },
    {
      id: 'grecia-8', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué efecto tuvo la misthophoría introducida por Pericles?',
      options: [
        'Limitó los cargos a los propietarios',
        'Hizo viable que los ciudadanos pobres ejercieran cargos y actuaran como jurados',
        'Sustituyó el sorteo por la elección',
        'Financió la construcción del Partenón',
      ],
      answer: 1,
      explanation: 'Sin retribución solo los acomodados podían dedicar días a la política. Aristóteles señala esta medida como la que hizo real la participación popular.',
    },
    {
      id: 'grecia-9', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué era el ostracismo?',
      options: [
        'Una pena de muerte por traición',
        'Un destierro preventivo de diez años, sin delito y sin pérdida de bienes',
        'La confiscación de la propiedad de los metecos',
        'La expulsión de una polis de la Liga de Delos',
      ],
      answer: 1,
      explanation: 'Funcionaba como válvula contra la concentración de poder personal. Se votaba con fragmentos de cerámica, los ostraka.',
    },
    {
      id: 'grecia-10', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué era la kryptéia espartana?',
      options: [
        'Una escuela de retórica',
        'El envío de jóvenes espartiatas a eliminar selectivamente a hilotas destacados',
        'La asamblea de los éforos',
        'Un festival religioso anual',
      ],
      answer: 1,
      explanation: 'Los hilotas superaban ampliamente en número a los espartiatas. El sistema exigía represión permanente; los éforos les declaraban formalmente la guerra cada año.',
    },
    {
      id: 'grecia-11', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué causa profunda del declive espartano señalan los historiadores?',
      options: [
        'La corrupción moral de sus reyes',
        'El desplome demográfico de los espartiatas de pleno derecho, de unos 8.000 a poco más de mil',
        'La pérdida de su flota en Salamina',
        'La conversión al culto de Atenea',
      ],
      answer: 1,
      explanation: 'La concentración de lotes de tierra redujo el cuerpo cívico. Leuctra (371 a. C.) y la liberación de Mesenia liquidaron después su base económica.',
    },
    {
      id: 'grecia-12', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué distinción metodológica introduce Tucídides al explicar la guerra del Peloponeso?',
      options: [
        'Entre fuentes escritas y orales',
        'Entre la causa profunda —el crecimiento del poder ateniense y el miedo espartano— y los pretextos inmediatos',
        'Entre historia sagrada y profana',
        'Entre guerra justa e injusta',
      ],
      answer: 1,
      explanation: 'Es una de las aportaciones fundacionales de la historiografía: separar lo que desencadena un conflicto de lo que lo hace probable.',
    },
    {
      id: 'grecia-13', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué argumento ponen los atenienses en el diálogo de Melos?',
      options: [
        'Que la guerra debe seguir reglas religiosas',
        'Que los fuertes hacen lo que pueden y los débiles sufren lo que deben',
        'Que la neutralidad debe respetarse siempre',
        'Que Esparta era la verdadera agresora',
      ],
      answer: 1,
      explanation: 'Es el texto clásico sobre la lógica del poder desnudo, y precede al exterminio de una ciudad que solo pedía permanecer neutral.',
    },
    {
      id: 'grecia-14', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué permitió cuestionar la distinción sofística entre physis y nomos?',
      options: [
        'Que los dioses existieran',
        'Si las leyes vigentes son naturales o meras convenciones humanas modificables',
        'Si la tierra era esférica',
        'Si la guerra era inevitable',
      ],
      answer: 1,
      explanation: 'Esa distinción abrió la posibilidad de criticar el orden establecido como acuerdo y no como orden natural. Protágoras la llevó al relativismo.',
    },
    {
      id: 'grecia-15', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Por qué se considera problemática la genealogía «Grecia, cuna de la democracia occidental»?',
      options: [
        'Porque Atenas nunca tuvo instituciones democráticas',
        'Porque la democracia ateniense era directa, sorteada, excluyente y esclavista, y la continuidad es una construcción del siglo XIX',
        'Porque los textos griegos se perdieron por completo',
        'Porque Grecia no influyó en Roma',
      ],
      answer: 1,
      explanation: 'Además, la transmisión de los textos griegos pasó decisivamente por el árabe y por Bizancio. Lo verdaderamente inédito fue la práctica de deliberar públicamente sobre reglas modificables.',
    },
    {
      id: 'grecia-16', era: 'Antigüedad', topicId: 'grecia', topic: 'Grecia',
      question: '¿Qué revela que Atenas financiara comedias que atacaban a sus propios dirigentes?',
      options: [
        'Que el teatro era privado y clandestino',
        'Que la crítica política formaba parte de una institución cívica financiada por ciudadanos ricos',
        'Que Aristófanes era extranjero',
        'Que la democracia había sido abolida',
      ],
      answer: 1,
      explanation: 'La coregía obligaba a los ricos a costear las representaciones. Que una democracia financiara su propia crítica más feroz es un dato notable sobre el sistema.',
    },
  ],
}
