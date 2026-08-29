import type { TopicModule } from '../types.ts'

export const helenismo: TopicModule = {
  topic: {
    id: 'helenismo',
    era: 'Antigüedad',
    title: 'Alejandro y el mundo helenístico',
    years: '359–30 a. C.',
    country: 'Mediterráneo oriental',
    description: 'De la Macedonia de Filipo a los reinos helenísticos: conquista, koiné y negociación cultural.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: 'Ω',
    color: 'gold',
    summary:
      'El relato tradicional resume estos tres siglos en una biografía: un joven rey macedonio conquista el imperio persa, difunde la cultura griega por Oriente y funda un mundo nuevo. Casi todo en esa frase merece revisión. El ejército que venció a Persia lo construyó Filipo II; ninguna fuente contemporánea sobre Alejandro ha llegado hasta nosotros, y lo que leemos se escribió entre tres y cinco siglos después; y la supuesta helenización fue mucho menos una difusión en un solo sentido que una negociación permanente entre unas monarquías de conquista y unas élites locales que conservaron sus lenguas, sus templos y su derecho. Lo que sí es indiscutible es la escala: por primera vez, un espacio continuo desde el Adriático hasta el Indo compartió una lengua administrativa, una moneda de referencia y una circulación de personas, textos y técnicas.',
    keyDates: [
      { date: '359–336 a. C.', event: 'Reinado de Filipo II: reforma del ejército macedonio y hegemonía sobre Grecia.' },
      { date: '338 a. C.', event: 'Queronea: derrota de Atenas y Tebas; al año siguiente, Liga de Corinto.' },
      { date: '336 a. C.', event: 'Asesinato de Filipo en Egas; Alejandro accede al trono.' },
      { date: '334–331 a. C.', event: 'Gránico, Issos, asedio de Tiro, Egipto y fundación de Alejandría.' },
      { date: '331 a. C.', event: 'Gaugamela: derrota decisiva de Darío III.' },
      { date: '330 a. C.', event: 'Incendio de Persépolis y muerte de Darío a manos de Beso.' },
      { date: '326 a. C.', event: 'Batalla del Hidaspes y motín del Hífasis: el ejército se niega a seguir.' },
      { date: '323 a. C.', event: 'Muerte de Alejandro en Babilonia; comienzan las guerras de los diádocos.' },
      { date: '301 a. C.', event: 'Ipsos: muere Antígono Monoftalmos y se frustra la reunificación del imperio.' },
      { date: '281 a. C.', event: 'Curupedio: quedan consolidados los tres grandes reinos.' },
      { date: 'c. 280 a. C.', event: 'Museo y Biblioteca de Alejandría en pleno funcionamiento.' },
      { date: '268 a. C.', event: 'Cilindro de Antíoco I en Borsipa, en acadio y con formulario babilonio tradicional.' },
      { date: '196 a. C.', event: 'Decreto de Menfis, conservado en la piedra de Rosetta.' },
      { date: '167–164 a. C.', event: 'Revuelta macabea en Judea.' },
      { date: '168–30 a. C.', event: 'De Pidna a la anexión de Egipto: Roma absorbe uno tras otro los reinos helenísticos.' },
    ],
    sections: [
      {
        title: 'Filipo antes que Alejandro',
        body: [
          'Macedonia era en 360 a. C. un reino periférico, inestable y amenazado por ilirios y peonios, al que los griegos del sur consideraban medio bárbaro. En veinticinco años Filipo II lo convirtió en la primera potencia del Egeo, y lo hizo con un instrumento militar nuevo. La falange macedonia sustituyó la lanza hoplita por la sarisa, una pica de cinco a seis metros que exigía las dos manos y un escudo menor: menos maniobrable pero mucho más profunda y capaz de fijar al enemigo. Su función era retener, no vencer; la decisión la daba la caballería de los *hetairoi*, la caballería de los compañeros, cargando sobre el punto débil que la falange había abierto.',
          'Filipo añadió ingeniería de asedio permanente, tropas ligeras, entrenamiento continuo durante todo el año y una cadena de mando estable. Lo financiaron las minas de oro del Pangeo, que le rindieron según Diodoro unos mil talentos anuales, y lo consolidaron el matrimonio como instrumento diplomático y la corrupción sistemática de las élites griegas: la frase que Plutarco le atribuye sobre que ninguna muralla resiste a un asno cargado de oro describe bien su método.',
          'Queronea, en 338, liquidó la resistencia de Atenas y Tebas. Al año siguiente la Liga de Corinto agrupó a las ciudades griegas bajo hegemonía macedonia, con una paz general, prohibición de cambiar los regímenes existentes y una guerra panhelénica de venganza contra Persia ya declarada. Cuando Filipo fue asesinado en 336, el ejército, el plan de campaña y hasta la avanzadilla en Asia Menor estaban en su sitio.',
          'Esto no reduce a Alejandro, pero cambia la pregunta. La historiografía del siglo XIX, y buena parte de la divulgación posterior, atribuyó al hijo un genio fundador que corresponde en gran medida al padre. Los estudios de las últimas décadas han restituido a Filipo su papel, y con él una idea menos heroica del proceso: la conquista de Persia fue posible porque un Estado pequeño se había militarizado durante una generación entera.',
          'Queda un problema de fondo que la propia Antigüedad discutía: si los macedonios eran griegos. Hablaban una lengua o dialecto que los griegos del sur no entendían sin más, participaban en los Juegos Olímpicos por decisión de los jueces y eran llamados bárbaros en los discursos de Demóstenes. La cuestión sigue politizada en el presente, y por eso conviene formularla con cuidado: la identidad antigua era gradual y negociable, no una etiqueta binaria.',
        ].join('\n\n'),
        callout:
          'La falange de sarisas no ganaba las batallas: las fijaba. El golpe decisivo lo daba la caballería de los compañeros. Es un sistema de armas combinadas, y su autor fue Filipo, no Alejandro.',
      },
      {
        title: 'Alejandro: la campaña y el problema de las fuentes',
        body: [
          'La campaña ocupó once años. Gránico (334) abrió Asia Menor; Issos (333) rompió el ejército de Darío III en Cilicia; el asedio de Tiro (332) duró siete meses y terminó con una matanza y la venta como esclavos de los supervivientes; Egipto recibió al conquistador sin resistencia y allí se fundó Alejandría; Gaugamela (331) decidió la guerra. Persépolis fue saqueada e incendiada en 330. Después vinieron tres años durísimos en Bactriana y Sogdiana contra una resistencia local que no combatía en batallas campales, la campaña de la India y la victoria sobre Poro en el Hidaspes (326), hasta que el ejército se negó a avanzar más allá del Hífasis. El regreso por el desierto de Gedrosia costó, según las fuentes, más vidas que ninguna batalla. Alejandro murió en Babilonia en junio de 323, a los treinta y dos años.',
          'El problema es cómo sabemos todo esto. No se conserva ni un solo relato contemporáneo. Calístenes, el cronista oficial de la expedición, fue ejecutado y su obra se perdió; también se perdieron las memorias de Ptolomeo, Aristóbulo, Nearco y Onesícrito. Lo que leemos son cinco autores muy posteriores: Diodoro (siglo I a. C.), Curcio Rufo y Plutarco (siglo I y comienzos del II d. C.), Arriano (siglo II d. C.) y el resumen de Justino. Es decir, entre trescientos y quinientos años después, con agendas propias y con el material ya filtrado por la propaganda de la corte y por la tradición novelesca.',
          'Arriano se considera el más fiable porque declara seguir a Ptolomeo y Aristóbulo, dos participantes; pero Ptolomeo escribía como rey de Egipto, con interés directo en su propio papel. Los demás forman la llamada vulgata, más dada a lo dramático y lo prodigioso. Cualquier afirmación sobre las intenciones o el carácter de Alejandro descansa sobre este material, y conviene decirlo antes que la afirmación.',
          'Sobre esa base se libró el debate historiográfico decisivo. William Tarn presentó en 1948 a un Alejandro visionario, portador de una idea de hermandad de la humanidad y de fusión entre vencedores y vencidos, apoyándose en las bodas de Susa, en la incorporación de persas al ejército y en la oración de Opis. Ernst Badian desmontó esa lectura en 1958 y en trabajos posteriores: las medidas de integración se explican por necesidad de gobernar un imperio inmenso con pocos macedonios, y el registro incluye la ejecución de Filotas y el asesinato de su padre Parmenión, la muerte de Clito a manos del propio rey en un banquete, la eliminación de Calístenes tras el conflicto por la *proskynesis* y matanzas de población civil en Tiro, Gaza, Masaga y el valle del Cofén.',
          'La posición dominante hoy, formulada sobre todo por A. B. Bosworth, describe a un gobernante extraordinariamente capaz y extraordinariamente violento, cuya política de integración fue pragmática y cuyo proyecto último no puede reconstruirse porque las fuentes no permiten llegar hasta ahí. El Alejandro de la cultura popular —unificador de pueblos, cosmopolita avant la lettre— procede en línea directa de Droysen y de Tarn, no de los documentos.',
        ].join('\n\n'),
        callout:
          'No existe ninguna fuente contemporánea sobre Alejandro. Todo lo que sabemos procede de autores que escriben entre tres y cinco siglos después, a partir de memorias perdidas de participantes interesados.',
      },
      {
        title: 'Los reinos: cómo se gobernaba una monarquía de conquista',
        body: [
          'Alejandro murió sin sucesor viable y con un imperio que solo su persona mantenía unido. Siguieron cuarenta años de guerras entre sus generales, los diádocos. Ipsos (301) acabó con Antígono Monoftalmos y con la última posibilidad de reunificación; Curupedio (281) fijó el mapa. Quedaron tres grandes monarquías —la Ptolemaica en Egipto, la Seléucida en Asia y la Antigónida en Macedonia— y una periferia de reinos menores: Pérgamo de los Atálidas, el reino grecobactriano y, más al este, los reinos indogriegos.',
          'La realeza helenística no se legitimaba por sangre ni por institución, sino por victoria. La tierra era *doríktetos chóra*, tierra conquistada con la lanza, y una definición antigua recogida en la Suda dice que la basileia no la dan la naturaleza ni el derecho, sino la capacidad de mandar un ejército y administrar los asuntos. De ahí la necesidad permanente de victorias, la centralidad de la corte y de los amigos del rey por encima de cualquier órgano representativo, y la difusión del culto al soberano: Ptolomeo I como Sóter, los honores divinos votados por Atenas a Antígono y Demetrio en 307, las dinastías divinizadas en vida.',
          'El sostén militar y social eran los colonos grecomacedonios instalados en lotes de tierra a cambio de servicio, los cleruquías en Egipto y las *katoikíai* seléucidas, y una red de fundaciones urbanas —Antioquía, Seleucia del Tigris, Ai Khanum en el actual Afganistán— que servían a la vez de guarnición, de centro fiscal y de referencia cultural.',
          'El Egipto ptolemaico es el caso mejor documentado del mundo antiguo, porque el clima conservó los papiros. El archivo de Zenón, administrador de una gran finca en el Fayum hacia mediados del siglo III a. C., reúne miles de documentos de gestión: contratos, cuentas, cartas, quejas de campesinos. Lo que muestran es una maquinaria fiscal de extraordinaria densidad —monopolios reales del aceite y de otros productos, banca estatal, catastro, control de la circulación— superpuesta a una estructura agraria y sacerdotal egipcia que siguió funcionando como antes.',
          'El reino seléucida, mucho más extenso y heterogéneo, funcionó de otra manera: menos control directo y más pacto con las ciudades griegas, los templos babilonios, las dinastías locales de Anatolia y las satrapías orientales. La historiografía lo trató durante décadas como un imperio fracasado y en descomposición permanente, en buena parte porque se leía a través de fuentes griegas y romanas hostiles. Los trabajos de Susan Sherwin-White y Amélie Kuhrt, apoyados en documentación cuneiforme, lo han reevaluado como un Estado que gobernó Mesopotamia con instrumentos aqueménidas y babilonios y que duró dos siglos y medio.',
        ].join('\n\n'),
      },
      {
        title: 'Koiné, ciudad y saber',
        body: [
          'El resultado cultural más duradero fue lingüístico. La *koiné*, un griego simplificado nacido del ático con influencias jónicas, se convirtió en lengua de administración, comercio y cultura desde el Adriático hasta Bactriana. En ella se redactaron contratos en el Fayum, inscripciones en Afganistán, la traducción de los Setenta de la Biblia hebrea en Alejandría y, tres siglos después, el Nuevo Testamento.',
          'La polis no desapareció bajo las monarquías, como sostuvo durante mucho tiempo un relato de decadencia. Perdió autonomía en política exterior, pero conservó asambleas, magistraturas, finanzas y una vida cívica intensa, ahora sostenida por el evergetismo: notables y reyes financiaban murallas, gimnasios, fiestas y reparto de grano a cambio de honores públicos. El gimnasio se volvió la institución decisiva, porque marcaba quién pertenecía al cuerpo cívico griego: se era griego, en la práctica, por educación y por acceso a esa institución, no solo por origen.',
          'Alejandría concentró el proyecto intelectual más ambicioso. El Museo era una institución de investigación financiada por la corona, con salarios y manutención, y la Biblioteca aspiraba a reunir todos los libros del mundo; las cifras de rollos que dan las fuentes antiguas, de cuatrocientos mil a setecientos mil, no son verificables. Allí nació la filología como disciplina: Zenódoto, Aristófanes de Bizancio y Aristarco de Samotracia establecieron el texto de Homero, inventaron los signos críticos para marcar versos sospechosos y sistematizaron acentuación y puntuación. Calímaco compuso los *Pínakes*, un catálogo razonado en ciento veinte libros que es el antepasado de toda bibliografía.',
          'La ciencia helenística alcanzó cotas que Europa tardaría casi dos milenios en recuperar. Euclides sistematizó la geometría hacia 300 a. C.; Arquímedes trabajó en estática, hidrostática y métodos de exhaución; Eratóstenes midió la circunferencia terrestre comparando la sombra del sol en Siena y Alejandría, con un error que no puede evaluarse con precisión porque no conocemos el valor exacto de su estadio; Aristarco de Samos propuso un sistema heliocéntrico que conocemos sobre todo porque Arquímedes lo cita para discutirlo; Hiparco descubrió la precesión de los equinoccios y catalogó estrellas. En Alejandría, Herófilo y Erasístrato practicaron disección humana sistemática, algo excepcional en la Antigüedad, y describieron el sistema nervioso distinguiendo nervios de tendones. El mecanismo de Anticitera, un calculador astronómico de engranajes del siglo II o I a. C. recuperado del mar, demuestra que la ingeniería de precisión existía y que hemos perdido casi todo su contexto.',
          'La filosofía se desplazó hacia la conducta individual. Zenón de Citio fundó la Estoa hacia 300 a. C., Epicuro había abierto el Jardín en 306, y junto a cínicos y escépticos compartieron una pregunta común: cómo alcanzar la imperturbabilidad en un mundo que el individuo no controla. Se ha explicado ese giro como refugio ante la pérdida de la libertad política de la polis; la explicación es discutible, porque la vida cívica siguió siendo intensa, pero el desplazamiento del centro de gravedad hacia la ética personal es innegable.',
          'En religión convivieron el culto a los soberanos, la fortuna personificada en Tyche, los cultos mistéricos y las divinidades mixtas creadas o promovidas por los reyes, como Sarapis en Alejandría. Isis inició desde Egipto una difusión mediterránea que llegaría hasta el corazón del Imperio romano.',
        ].join('\n\n'),
        callout:
          'Aristarco de Samos propuso el heliocentrismo hacia 270 a. C. Su obra se perdió: lo sabemos porque Arquímedes resume la hipótesis para discutirla. La historia de la ciencia antigua se lee en gran parte a través de sus huecos.',
      },
      {
        title: '¿Helenización o negociación?',
        body: [
          'El término «helenismo» como nombre de época lo acuñó Johann Gustav Droysen entre 1836 y 1843, y con él una tesis: la fusión de Grecia y Oriente habría creado el terreno cultural en el que después arraigó el cristianismo. La idea de una helenización entendida como difusión en un solo sentido —los griegos aportan cultura, los pueblos locales la reciben— dominó la disciplina más de un siglo, y encajaba sin esfuerzo con las categorías coloniales del XIX.',
          'La documentación local ha obligado a revisarla. El cilindro de Antíoco I de Borsipa, de 268 a. C., está escrito en acadio, en escritura cuneiforme y con el formulario de los reyes babilonios: el monarca seléucida se presenta como restaurador del templo Ezida y usa títulos que se remontan mil quinientos años atrás. La piedra de Rosetta conserva un decreto sacerdotal de Menfis de 196 a. C. en jeroglífico, demótico y griego, en el que el clero egipcio concede honores cultuales a Ptolomeo V a cambio de privilegios fiscales confirmados: es un acta de negociación entre dos poderes, no una imposición.',
          'Los diarios astronómicos babilonios siguieron redactándose en cuneiforme hasta el siglo I a. C., dos siglos después de la conquista; los templos egipcios continuaron construyéndose con formas faraónicas —Edfú, Dendera y File son en buena parte de época ptolemaica—; el derecho egipcio siguió aplicándose en tribunales propios y el demótico siguió siendo lengua de contratos. Sherwin-White y Kuhrt propusieron por eso leer los reinos helenísticos desde el interior, con sus fuentes locales, y no solo como episodios de la historia griega.',
          'El estatuto de «griego» funcionó además como categoría jurídica y fiscal más que étnica. En Egipto determinaba a qué tribunal se acudía y qué impuestos se pagaban, y era accesible por educación, servicio y lengua, de modo que hubo egipcios que aparecen en la documentación con dos nombres, uno griego y otro egipcio, según el contexto. Al mismo tiempo, el acceso a las posiciones de mando quedó reservado durante generaciones a la minoría grecomacedonia: hubo permeabilidad cultural y una jerarquía muy firme.',
          'El caso más discutido es Judea. La revuelta macabea de 167-164 a. C. se ha contado como el choque frontal entre helenismo y judaísmo tras las medidas de Antíoco IV contra el culto del Templo. Elias Bickerman sostuvo en 1937 que la iniciativa partió de una élite judía helenizante de Jerusalén, y que el rey intervino en un conflicto ya interno; Martin Hengel mostró en 1969 que el judaísmo de esa época estaba ya profundamente helenizado en lengua, formas literarias y organización, de manera que la oposición tajante entre ambos términos es insostenible. La lectura actual describe una guerra civil judía con intervención real, y no un choque de civilizaciones.',
          'Nada de esto convierte el periodo en un idilio multicultural. Hubo conquista, expropiación de tierra, fiscalidad pesada, deportaciones y revueltas indígenas recurrentes en Egipto durante los siglos III y II. Pero el modelo explicativo válido no es la difusión, sino la negociación asimétrica entre unos conquistadores minoritarios y unas estructuras locales que ni podían ser sustituidas ni tenían intención de desaparecer.',
        ].join('\n\n'),
      },
      {
        title: 'El final romano y lo que quedó',
        body: [
          'Roma absorbió los reinos helenísticos en siglo y medio, y en gran medida por invitación: fueron las potencias menores del Egeo, Rodas y Pérgamo, quienes la llamaron contra Macedonia. Cinoscéfalas (197) y Magnesia (190) redujeron a Antigónidas y Seléucidas; Pidna (168) liquidó el reino de Macedonia; en 146 Corinto fue destruida y Grecia quedó bajo control romano; en 133 Átalo III legó Pérgamo por testamento; Pompeyo terminó con lo que quedaba del reino seléucida en 63; y en 30, tras Accio, Egipto se convirtió en provincia con la muerte de Cleopatra VII, última soberana de una dinastía macedonia que había gobernado el país durante trescientos años.',
          'El final es político y no cultural, y conviene subrayarlo porque la periodización engaña. El Mediterráneo oriental siguió funcionando en griego bajo dominio romano: la administración provincial, las ciudades, la filosofía, la medicina y la literatura. El Nuevo Testamento se escribió en koiné. El Imperio de Oriente que llamamos bizantino es la continuación institucional de ese mundo, y se llamaba a sí mismo romano mientras hablaba griego.',
          'La herencia científica siguió otro camino. Los textos de Euclides, Arquímedes, Ptolomeo, Hiparco y los médicos alejandrinos fueron traducidos al siríaco y al árabe entre los siglos VIII y X, se estudiaron y corrigieron en Bagdad, El Cairo y Córdoba, y regresaron a Europa por vía latina desde el siglo XII. La cadena de transmisión que hizo posible la astronomía y la matemática europeas pasa por el helenismo y por el mundo islámico, no por una línea directa de Atenas a Florencia.',
          'Queda por último una advertencia de método. «Helenismo» y sus fechas canónicas, 323 a 30 a. C., son una construcción del siglo XIX: nadie vivió pensando que habitaba una época intermedia entre Grecia clásica y Roma. La etiqueta sigue siendo útil para nombrar un espacio y un tiempo con rasgos comunes —monarquías de conquista, koiné, ciudades nuevas, ciencia de corte—, siempre que no se confunda la etiqueta con una explicación.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Sarisa', definition: 'Pica macedonia de cinco a seis metros, manejada a dos manos. Daba profundidad a la falange a costa de su maniobrabilidad.' },
      { term: 'Hetairoi', definition: 'Caballería de los compañeros del rey. Arma decisiva del sistema macedonio: la falange fijaba, la caballería cargaba.' },
      { term: 'Liga de Corinto', definition: 'Alianza de las ciudades griegas bajo hegemonía macedonia (337 a. C.), con paz general y guerra declarada a Persia.' },
      { term: 'Diádocos', definition: 'Los generales sucesores de Alejandro. Sus guerras, entre 323 y 281 a. C., fijaron el mapa de los reinos helenísticos.' },
      { term: 'Doríktetos chóra', definition: 'Tierra conquistada con la lanza. Fundamento de legitimidad de la realeza helenística: el poder lo da la victoria.' },
      { term: 'Culto al soberano', definition: 'Honores divinos rendidos al rey vivo o a la dinastía. Instrumento de cohesión en monarquías sin legitimidad tradicional.' },
      { term: 'Cleruquía', definition: 'Lote de tierra concedido a un colono grecomacedonio a cambio de servicio militar. Base social del Egipto ptolemaico.' },
      { term: 'Koiné', definition: 'Griego común derivado del ático. Lengua de administración, comercio y cultura desde el Adriático hasta Bactriana.' },
      { term: 'Evergetismo', definition: 'Financiación de obras y fiestas públicas por notables y reyes a cambio de honores. Sostuvo la vida cívica bajo las monarquías.' },
      { term: 'Gimnasio', definition: 'Institución educativa que marcaba la pertenencia al cuerpo cívico griego. Ser griego dependía en gran parte del acceso a ella.' },
      { term: 'Museo y Biblioteca', definition: 'Instituciones de investigación financiadas por los Ptolomeos en Alejandría. Origen de la filología y de la bibliografía.' },
      { term: 'Pínakes', definition: 'Catálogo razonado de la Biblioteca compuesto por Calímaco en ciento veinte libros. Antepasado de todo repertorio bibliográfico.' },
      { term: 'Ataraxia', definition: 'Imperturbabilidad del ánimo. Objetivo compartido por estoicos, epicúreos y escépticos en un mundo que el individuo no controla.' },
      { term: 'Helenización', definition: 'Modelo de difusión cultural en un solo sentido, hoy sustituido por el de negociación asimétrica entre conquistadores y estructuras locales.' },
    ],
    debates: [
      {
        question: '¿Qué proyecto tenía Alejandro?',
        positions: [
          {
            school: 'Fusión y hermandad (Tarn, 1948)',
            argument:
              'Alejandro perseguía la unidad del género humano: bodas de Susa, incorporación de persas al ejército y a la administración, adopción de usos orientales y la oración de Opis sobre la concordia entre macedonios y persas.',
          },
          {
            school: 'Poder y violencia (Badian, 1958; Bosworth)',
            argument:
              'Las medidas de integración fueron pragmáticas: no había macedonios suficientes para gobernar un imperio así. El registro incluye la eliminación de Filotas y Parmenión, la muerte de Clito, el caso de Calístenes y matanzas civiles en Tiro, Gaza y Masaga.',
          },
        ],
        state:
          'La lectura idealista está abandonada en la investigación, aunque sigue viva en la cultura popular. El límite real es documental: sin fuentes contemporáneas, cualquier reconstrucción de sus intenciones descansa sobre autores que escriben tres siglos después.',
      },
      {
        question: '¿Hubo helenización o negociación cultural?',
        positions: [
          {
            school: 'Difusión (Droysen y la tradición del siglo XIX)',
            argument:
              'La conquista extendió la lengua, las instituciones y la cultura griegas por Oriente, y esa fusión creó el terreno común sobre el que se levantaron el Imperio romano y el cristianismo.',
          },
          {
            school: 'Negociación asimétrica (Sherwin-White y Kuhrt, 1993)',
            argument:
              'Las fuentes locales muestran continuidad: cilindro de Antíoco I en acadio con formulario babilonio, decreto sacerdotal de Rosetta, diarios astronómicos cuneiformes hasta el siglo I a. C., templos y derecho egipcios en funcionamiento. Los reyes gobernaron pactando con estructuras que no podían sustituir.',
          },
        ],
        state:
          'El modelo difusionista está descartado. Se estudia cada región con su documentación propia, y la discusión se ha desplazado a medir el grado de permeabilidad: hubo movilidad cultural real y, a la vez, una jerarquía de acceso al poder muy firme.',
      },
      {
        question: '¿Fue la revuelta macabea un choque entre helenismo y judaísmo?',
        positions: [
          {
            school: 'Conflicto interno (Bickerman, 1937)',
            argument:
              'La iniciativa de las reformas partió de una élite judía helenizante de Jerusalén enfrentada a los sectores tradicionalistas. Antíoco IV intervino en un conflicto que ya existía dentro de la comunidad.',
          },
          {
            school: 'Judaísmo ya helenizado (Hengel, 1969)',
            argument:
              'Para el siglo II a. C. el judaísmo estaba impregnado de lengua, formas literarias y organización griegas, incluida la traducción de los Setenta. Oponer helenismo y judaísmo como bloques cerrados es insostenible.',
          },
        ],
        state:
          'Se describe como guerra civil judía con intervención real, no como choque de civilizaciones. Persiste la discusión sobre el peso relativo de las decisiones de Antíoco IV y de la dinámica interna de Jerusalén.',
      },
    ],
    sources: [
      { author: 'Arriano', title: 'Anábasis de Alejandro Magno', year: 's. II d. C.', kind: 'primaria', note: 'Relato mejor valorado; declara seguir a Ptolomeo y Aristóbulo, ambos participantes e interesados.' },
      { author: 'Diodoro Sículo', title: 'Biblioteca histórica, libros XVII-XX', year: 's. I a. C.', kind: 'primaria', note: 'Fuente principal para los diádocos, además de la campaña de Alejandro.' },
      { author: 'Plutarco', title: 'Vida de Alejandro', year: 'c. 100 d. C.', kind: 'primaria', note: 'Biografía moral, no crónica militar. Fuente de buena parte de las anécdotas célebres.' },
      { author: 'Quinto Curcio Rufo', title: 'Historia de Alejandro Magno', year: 's. I d. C.', kind: 'primaria', note: 'Tradición «vulgata», atenta al drama y a la degradación moral del conquistador.' },
      { author: 'Antíoco I', title: 'Cilindro de Borsipa', year: '268 a. C.', kind: 'primaria', note: 'En acadio y con formulario babilonio milenario: un rey seléucida como restaurador del templo Ezida.' },
      { author: 'Clero de Menfis', title: 'Decreto de Menfis (piedra de Rosetta)', year: '196 a. C.', kind: 'primaria', note: 'Trilingüe. Honores cultuales a Ptolomeo V a cambio de privilegios: acta de negociación, no de imposición.' },
      { author: 'Archivo de Zenón', title: 'Papiros de gestión de una finca del Fayum', year: 'c. 260-240 a. C.', kind: 'primaria', note: 'Miles de documentos sobre la maquinaria fiscal ptolemaica y la vida rural egipcia.' },
      { author: 'Polibio', title: 'Historias', year: 's. II a. C.', kind: 'primaria', note: 'Griego deportado a Roma; explica a sus compatriotas cómo Roma absorbió el mundo helenístico.' },
      { author: 'Anónimo', title: 'Primer libro de los Macabeos', year: 's. II-I a. C.', kind: 'primaria', note: 'Relato hasmoneo de la revuelta. Fuente de parte y no crónica neutral.' },
      { author: 'Escribas babilonios', title: 'Diarios astronómicos', year: 's. VII-I a. C.', kind: 'primaria', note: 'Observación continuada en cuneiforme dos siglos después de la conquista macedonia.' },
      { author: 'Johann Gustav Droysen', title: 'Geschichte des Hellenismus', year: '1836-1843', kind: 'estudio', note: 'Acuña el término y la tesis de la fusión greco-oriental como antesala del cristianismo.' },
      { author: 'William W. Tarn', title: 'Alexander the Great', year: '1948', kind: 'estudio', note: 'Formula la idea de Alejandro como promotor de la hermandad de la humanidad.' },
      { author: 'Ernst Badian', title: 'Alexander the Great and the Unity of Mankind', year: '1958', kind: 'estudio', note: 'Demolición de la lectura de Tarn a partir del propio registro de las fuentes.' },
      { author: 'Martin Hengel', title: 'Judentum und Hellenismus', year: '1969', kind: 'estudio', note: 'Demuestra hasta qué punto el judaísmo del siglo II a. C. estaba ya helenizado.' },
      { author: 'A. B. Bosworth', title: 'Conquest and Empire', year: '1988', kind: 'estudio', note: 'Síntesis de referencia: capacidad militar y violencia sistemática, sin proyecto reconstruible.' },
      { author: 'Peter Green', title: 'Alexander to Actium', year: '1990', kind: 'estudio', note: 'Panorama general del periodo, crítico con la idealización del helenismo.' },
      { author: 'Susan Sherwin-White y Amélie Kuhrt', title: 'From Samarkhand to Sardis', year: '1993', kind: 'estudio', note: 'Relee el reino seléucida desde la documentación local y no desde las fuentes grecorromanas.' },
      { author: 'Dorothy J. Thompson', title: 'Memphis under the Ptolemies', year: '1988', kind: 'estudio', note: 'Convivencia de estructuras griegas y egipcias en una gran ciudad del valle del Nilo.' },
    ],
  },
  questions: [
    {
      id: 'helenismo-1', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Cuál era la función de la falange de sarisas en el sistema militar macedonio?',
      options: [
        'Decidir la batalla mediante la carga frontal',
        'Fijar al enemigo mientras la caballería de los compañeros daba el golpe decisivo',
        'Proteger el campamento durante los asedios',
        'Sustituir a la caballería, cuyo uso se abandonó',
      ],
      answer: 1,
      explanation: 'Es un sistema de armas combinadas. La sarisa daba profundidad a costa de maniobrabilidad; la decisión venía del ala de caballería.',
    },
    {
      id: 'helenismo-2', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué encontró Alejandro ya preparado al acceder al trono en 336 a. C.?',
      options: [
        'Un imperio persa en descomposición interna',
        'Una alianza con Roma contra Persia',
        'El ejército reformado, la hegemonía sobre Grecia y la guerra contra Persia ya declarada por la Liga de Corinto',
        'Un tesoro real intacto y sin deudas',
      ],
      answer: 2,
      explanation: 'Filipo II había militarizado Macedonia durante veinticinco años, vencido en Queronea y enviado ya una avanzadilla a Asia Menor.',
    },
    {
      id: 'helenismo-3', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué financió la transformación de Macedonia bajo Filipo II?',
      options: [
        'Las minas de oro del Pangeo',
        'Los tributos de las ciudades jonias',
        'El comercio de grano del mar Negro',
        'Los subsidios del rey persa',
      ],
      answer: 0,
      explanation: 'Diodoro cifra su rendimiento en unos mil talentos anuales, que pagaron el ejército permanente y la corrupción de élites griegas.',
    },
    {
      id: 'helenismo-4', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Cuál es el problema central de las fuentes sobre Alejandro?',
      options: [
        'Que solo se conservan en traducción árabe',
        'Que ningún relato contemporáneo se ha conservado: los autores que leemos escriben entre tres y cinco siglos después',
        'Que todas fueron escritas por persas derrotados',
        'Que son exclusivamente inscripciones oficiales',
      ],
      answer: 1,
      explanation: 'Calístenes, Ptolomeo, Aristóbulo y Nearco se perdieron. Arriano, Diodoro, Curcio, Plutarco y Justino trabajan sobre ese material ya filtrado.',
    },
    {
      id: 'helenismo-5', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué sostuvo William Tarn en 1948 y por qué se abandonó su lectura?',
      options: [
        'Que Alejandro fue un mal general; se abandonó por las victorias documentadas',
        'Que Alejandro nunca llegó a la India; se abandonó por hallazgos arqueológicos',
        'Que Alejandro buscaba la hermandad de la humanidad; Badian mostró que la integración fue pragmática y que el registro incluye purgas y matanzas civiles',
        'Que Alejandro era persa de origen; se abandonó por razones filológicas',
      ],
      answer: 2,
      explanation: 'La posición actual, formulada por Bosworth, describe a un gobernante muy capaz y muy violento cuyo proyecto último las fuentes no permiten reconstruir.',
    },
    {
      id: 'helenismo-6', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué batalla frustró definitivamente la reunificación del imperio de Alejandro?',
      options: [
        'Gaugamela (331 a. C.)',
        'Ipsos (301 a. C.), donde murió Antígono Monoftalmos',
        'Queronea (338 a. C.)',
        'Pidna (168 a. C.)',
      ],
      answer: 1,
      explanation: 'Curupedio, en 281, terminó de fijar el mapa: tres grandes reinos y una periferia de monarquías menores.',
    },
    {
      id: 'helenismo-7', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿En qué se fundaba la legitimidad de la realeza helenística?',
      options: [
        'En la elección por una asamblea de ciudadanos',
        'En la consagración por el oráculo de Delfos',
        'En la herencia dinástica reconocida por las poleis',
        'En la victoria militar: la tierra era *doríktetos chóra*, conquistada con la lanza',
      ],
      answer: 3,
      explanation: 'De ahí la necesidad permanente de victorias, el peso de la corte sobre cualquier órgano representativo y la difusión del culto al soberano.',
    },
    {
      id: 'helenismo-8', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Por qué el Egipto ptolemaico es el reino helenístico mejor documentado?',
      options: [
        'Porque el clima seco conservó decenas de miles de papiros de gestión, como el archivo de Zenón',
        'Porque sus reyes escribieron autobiografías',
        'Porque Roma conservó sus archivos en el Capitolio',
        'Porque fue el único con escritura propia',
      ],
      answer: 0,
      explanation: 'Los papiros muestran una maquinaria fiscal densa superpuesta a una estructura agraria y sacerdotal egipcia que siguió funcionando.',
    },
    {
      id: 'helenismo-9', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué era la koiné?',
      options: [
        'La moneda común de los reinos helenísticos',
        'El griego común derivado del ático, lengua de administración y cultura del Adriático a Bactriana',
        'La asamblea federal de las ciudades griegas',
        'El tratado de paz entre los diádocos',
      ],
      answer: 1,
      explanation: 'En koiné se redactaron los contratos del Fayum, la traducción de los Setenta y, tres siglos después, el Nuevo Testamento.',
    },
    {
      id: 'helenismo-10', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué ocurrió con la polis bajo las monarquías helenísticas?',
      options: [
        'Desapareció como institución',
        'Fue sustituida por asambleas de campesinos',
        'Perdió autonomía exterior pero conservó asambleas, magistraturas y una vida cívica intensa, sostenida por el evergetismo',
        'Se convirtió en una entidad puramente religiosa',
      ],
      answer: 2,
      explanation: 'El relato de una decadencia general de la ciudad ha sido revisado. El gimnasio pasó a marcar la pertenencia al cuerpo cívico griego.',
    },
    {
      id: 'helenismo-11', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué disciplina nació en la Biblioteca de Alejandría?',
      options: [
        'La filología: establecimiento del texto de Homero, signos críticos, acentuación y puntuación',
        'La retórica judicial',
        'La historiografía política',
        'La lógica formal',
      ],
      answer: 0,
      explanation: 'Zenódoto, Aristófanes de Bizancio y Aristarco de Samotracia fijaron el método. Calímaco compuso los *Pínakes*, primer catálogo razonado.',
    },
    {
      id: 'helenismo-12', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Cómo conocemos la hipótesis heliocéntrica de Aristarco de Samos?',
      options: [
        'Por el hallazgo de su tratado original en Herculano',
        'Porque Arquímedes la resume para discutirla; la obra de Aristarco se perdió',
        'Por una inscripción en el Museo de Alejandría',
        'Por su transmisión directa hasta Copérnico',
      ],
      answer: 1,
      explanation: 'La ciencia helenística se lee en gran parte a través de sus huecos: obras perdidas conocidas por citas de terceros.',
    },
    {
      id: 'helenismo-13', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Qué demuestra el cilindro de Antíoco I de Borsipa (268 a. C.)?',
      options: [
        'Que los seléucidas prohibieron las lenguas locales',
        'Que Babilonia había sido despoblada tras la conquista',
        'Que un rey seléucida se presentaba en acadio y con el formulario babilonio tradicional como restaurador del templo Ezida',
        'Que el griego era la única lengua de las inscripciones reales',
      ],
      answer: 2,
      explanation: 'Junto con el decreto de Rosetta y los diarios astronómicos cuneiformes, es la base para sustituir la difusión por la negociación.',
    },
    {
      id: 'helenismo-14', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: 'En el Egipto ptolemaico, ¿qué era ser «griego»?',
      options: [
        'Una condición estrictamente hereditaria y cerrada',
        'Una categoría jurídica y fiscal accesible por lengua, educación y servicio, aunque el mando siguió reservado a la minoría grecomacedonia',
        'Una designación religiosa vinculada al culto de Sarapis',
        'Un título concedido por el faraón a título individual',
      ],
      answer: 1,
      explanation: 'Determinaba tribunal e impuestos. Hay egipcios documentados con dos nombres, uno griego y otro egipcio, según el contexto.',
    },
    {
      id: 'helenismo-15', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Cómo describe hoy la investigación la revuelta macabea?',
      options: [
        'Como una guerra civil judía con intervención real, y no como un choque entre helenismo y judaísmo',
        'Como una invasión romana de Judea',
        'Como una revuelta campesina sin contenido religioso',
        'Como el primer conflicto entre judíos y cristianos',
      ],
      answer: 0,
      explanation: 'Bickerman situó la iniciativa en la élite helenizante de Jerusalén y Hengel mostró que el judaísmo del siglo II a. C. estaba ya profundamente helenizado.',
    },
    {
      id: 'helenismo-16', era: 'Antigüedad', topicId: 'helenismo', topic: 'Helenismo',
      question: '¿Por qué el final político de los reinos helenísticos no es un final cultural?',
      options: [
        'Porque Roma prohibió el latín en Oriente',
        'Porque los reinos siguieron existiendo como protectorados hasta el siglo IV',
        'Porque el Mediterráneo oriental siguió funcionando en griego bajo Roma, y de ahí arrancan el Nuevo Testamento y el Imperio bizantino',
        'Porque la ciencia helenística se perdió íntegramente en 30 a. C.',
      ],
      answer: 2,
      explanation: 'Además, los textos científicos pasaron al siríaco y al árabe entre los siglos VIII y X y regresaron a Europa por vía latina desde el XII.',
    },
  ],
}
