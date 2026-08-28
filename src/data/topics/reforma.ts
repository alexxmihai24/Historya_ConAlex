import type { TopicModule } from '../types'

export const reforma: TopicModule = {
  topic: {
    id: 'reforma',
    era: 'Edad Moderna',
    title: 'Reforma, Contrarreforma y guerras de religión',
    years: '1517–1648',
    country: 'Europa',
    description: 'De una disputa universitaria sobre indulgencias a la partición confesional del continente.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '☩',
    color: 'red',
    summary:
      'En 1517 un profesor de teología de una universidad pequeña propuso discutir noventa y cinco tesis sobre las indulgencias. No pedía romper con Roma ni fundar una iglesia: pedía una disputa académica. Ciento treinta años después Europa había quedado partida en confesiones, había perdido en el Imperio en torno a una quinta parte de su población y había construido Estados que registraban, examinaban y disciplinaban a sus súbditos con una minuciosidad desconocida. Entender el periodo exige explicar dos cosas distintas: por qué la protesta de Lutero no acabó como las de Wyclif o Hus, y por qué el conflicto religioso resultó tan productivo para el poder político de ambos bandos.',
    keyDates: [
      { date: '1517', event: 'Lutero envía sus 95 tesis al arzobispo de Maguncia.' },
      { date: '1520–1521', event: 'Excomunión y Dieta de Worms: «no puedo ni quiero retractarme».' },
      { date: '1522–1534', event: 'Traducción de la Biblia al alemán, del Nuevo Testamento a la obra completa.' },
      { date: '1524–1525', event: 'Guerra de los campesinos: Doce Artículos de Memmingen y represión con decenas de miles de muertos.' },
      { date: '1529', event: 'Coloquio de Marburgo: Lutero y Zuinglio no logran acordar la eucaristía.' },
      { date: '1534', event: 'Acta de Supremacía en Inglaterra; reino anabaptista de Münster.' },
      { date: '1536–1541', event: 'Calvino publica la *Institución* y organiza Ginebra.' },
      { date: '1540', event: 'Aprobación de la Compañía de Jesús.' },
      { date: '1545–1563', event: 'Concilio de Trento en tres periodos.' },
      { date: '1555', event: 'Paz de Augsburgo: cada príncipe fija la confesión de su territorio.' },
      { date: '1562–1598', event: 'Guerras de religión en Francia; matanza de San Bartolomé en 1572.' },
      { date: '1568–1648', event: 'Revuelta de los Países Bajos contra la monarquía hispánica.' },
      { date: '1598', event: 'Edicto de Nantes: tolerancia limitada para los hugonotes.' },
      { date: '1618–1648', event: 'Guerra de los Treinta Años.' },
      { date: '1648', event: 'Paz de Westfalia: se reconoce también el calvinismo.' },
    ],
    sections: [
      {
        title: 'Qué pedía Lutero y qué no',
        body: [
          'El detonante fue una operación financiera. Alberto de Brandeburgo quería acumular el arzobispado de Maguncia con otras sedes, lo que exigía una dispensa cara; se endeudó con la banca Fugger y obtuvo del papa el derecho a predicar en sus territorios una indulgencia para la basílica de San Pedro, con la mitad de lo recaudado destinada a saldar su deuda. El dominico Johann Tetzel la predicó con métodos comerciales agresivos. Lutero, profesor de teología en Wittenberg, reaccionó contra esa predicación.',
          'El 31 de octubre de 1517 envió las noventa y cinco tesis al propio Alberto en una carta que se conserva. La escena de las tesis clavadas en la puerta de la iglesia del castillo no aparece en ningún texto de Lutero: la cuenta Melanchthon en 1546, después de su muerte. Puede haber ocurrido —era la forma habitual de convocar una disputa universitaria— pero no está documentada, y el gesto fundacional de la Reforma es, con toda probabilidad, un recuerdo posterior.',
          'El contenido inicial es moderado. Las tesis no niegan el purgatorio ni la autoridad papal: sostienen que la indulgencia no puede sustituir al arrepentimiento interior y que vender la remisión de penas engaña a los fieles. Lutero pedía una discusión académica, y en su carta al arzobispo daba por supuesto que este ignoraba los abusos de sus predicadores.',
          'La radicalización llegó por el propio proceso. En la disputa de Leipzig de 1519, presionado por Johann Eck, Lutero admitió que también los concilios podían errar, lo que dejaba a la Escritura como única autoridad final. En 1520 publicó tres tratados que sí eran revolucionarios: *A la nobleza cristiana de la nación alemana* apelaba a los príncipes para reformar la Iglesia y negaba la distinción entre estado clerical y laico; *La cautividad babilónica* reducía los sacramentos y negaba la transustanciación; *La libertad del cristiano* formulaba la justificación por la fe. Ese mismo año llegó la bula *Exsurge Domine*, y en 1521, la excomunión y la comparecencia ante Carlos V en la dieta de Worms.',
          'Las tres fórmulas que resumen su teología —solo la fe, solo la Escritura, solo la gracia— tienen consecuencias institucionales inmediatas. Si la salvación no depende de las obras ni de la mediación sacramental, sobra buena parte del aparato eclesiástico; si la Escritura es la única autoridad, hace falta que la gente pueda leerla, y de ahí la traducción alemana que Lutero emprendió refugiado en Wartburgo y que fijó de paso la lengua literaria alemana.',
        ].join('\n\n'),
        callout:
          'La escena de las tesis clavadas en la puerta la relata Melanchthon en 1546, después de la muerte de Lutero. Lo documentado es la carta al arzobispo de Maguncia. El gesto fundacional de la Reforma es probablemente un recuerdo posterior.',
      },
      {
        title: 'Por qué prendió: imprenta, príncipes y agravios',
        body: [
          'Wyclif y Hus habían sostenido tesis comparables un siglo antes, y el segundo terminó en la hoguera. La diferencia decisiva es de comunicación. Lutero escribió en alemán, breve y polémico, en opúsculos de pocas hojas y precio bajo, ilustrados con grabados para quien no sabía leer. Andrew Pettegree ha calculado que cerca de un tercio de todos los libros impresos en alemán entre 1518 y 1525 salieron de su pluma: es el primer autor superventas de la historia europea y el primer movimiento político que se organiza mediante un mercado editorial.',
          'La segunda condición fue política. El Imperio no era una monarquía centralizada sino un mosaico de príncipes, ciudades libres y obispados con intereses propios. Federico el Sabio de Sajonia protegió a Lutero sin compartir del todo sus tesis, porque un profesor famoso daba prestigio a su universidad y porque las apelaciones a Roma erosionaban su jurisdicción. Muchos príncipes tenían agravios acumulados contra la fiscalidad pontificia, y la Reforma ofrecía además un incentivo material inmediato: secularizar los bienes eclesiásticos de sus territorios. Carlos V, que sí quería reprimirla, estuvo ocupado durante décadas con Francia, con el Mediterráneo otomano y con el avance turco sobre Hungría y Viena.',
          'La tercera fue urbana. Bernd Moeller mostró que la Reforma triunfó primero en las ciudades libres del Imperio, donde encajaba con una tradición de autogobierno comunal: la elección del predicador por la comunidad, la administración local de la caridad y el control ciudadano sobre el clero eran demandas anteriores a Lutero que su teología legitimaba. Peter Blickle amplió el argumento al campo y habló de una «reforma comunal», protagonizada por comunidades campesinas y urbanas que leyeron el evangelio como fundamento de sus derechos.',
          'Conviene por eso desconfiar del relato del monje solitario. La Reforma prendió porque conectó una crítica teológica con agravios fiscales, con ambiciones territoriales, con una tradición de autogobierno local y con una tecnología de difusión que ninguno de sus predecesores había tenido.',
        ].join('\n\n'),
      },
      {
        title: '1525: el límite social de la Reforma',
        body: [
          'La reforma comunal se puso a prueba en 1524-1525. Decenas de miles de campesinos del sur y el centro de Alemania se levantaron contra las cargas señoriales, y su programa más difundido, los Doce Artículos de Memmingen, argumentaba con citas bíblicas: reclamaba elegir al párroco, suprimir el diezmo menor, abolir la servidumbre porque Cristo redimió a todos por igual, y recuperar el uso de bosques y aguas comunales. Fue uno de los primeros textos europeos que formula derechos colectivos y se imprimió en unas veinticinco ediciones en dos meses.',
          'Lutero respondió primero con una exhortación a la paz que repartía culpas y después, cuando la revuelta se extendió, con un panfleto de una violencia extrema, *Contra las hordas asesinas y ladronas de campesinos*, en el que llamaba a los príncipes a matar sin misericordia. La represión causó entre setenta mil y cien mil muertos.',
          'Las consecuencias fueron decisivas y de largo alcance. La Reforma dejó de ser un movimiento comunal y pasó a ser un asunto de príncipes y magistrados: la llamada reforma magisterial, en la que la autoridad civil organiza la iglesia territorial, nombra a los pastores y disciplina a los fieles. El campesinado alemán quedó desmovilizado durante siglos. Y quienes mantuvieron la lectura radical del evangelio —bautismo solo de adultos, comunidad de bienes, separación de la iglesia respecto del Estado, a menudo negativa a jurar y a portar armas— quedaron fuera de la ley para católicos y protestantes por igual.',
          'Esos radicales, agrupados bajo la etiqueta genérica de anabaptistas, se dieron en 1527 una confesión propia en Schleitheim que optaba por la separación pacífica del mundo. El episodio que marcó su imagen fue el opuesto: en 1534-1535 un grupo milenarista tomó Münster, proclamó la nueva Jerusalén, impuso la comunidad de bienes y la poligamia y resistió un asedio hasta ser aniquilado. Münster sirvió durante siglos como argumento para justificar la persecución de todo el movimiento, incluidas sus ramas pacifistas, de las que descienden menonitas, huteritas y amish.',
        ].join('\n\n'),
        callout:
          'Los Doce Artículos de Memmingen piden abolir la servidumbre porque Cristo redimió a todos por igual. La Reforma dio a los campesinos un lenguaje para formular derechos; Lutero se alineó con quienes los aplastaron.',
      },
      {
        title: 'Las otras reformas',
        body: [
          'El protestantismo se fragmentó desde el principio, y no por accidente: si la Escritura es la única autoridad, no hay instancia que zanje las lecturas divergentes. En Zúrich, Ulrico Zuinglio impulsó desde 1519 una reforma más radical en materia de imágenes y de culto, sostenida por el consejo municipal. El coloquio de Marburgo de 1529 reunió a Lutero y a Zuinglio para unificar posiciones ante la amenaza imperial: acordaron catorce de los quince artículos y se rompieron en el decimoquinto, la presencia real de Cristo en la eucaristía. La Reforma nació incapaz de unificarse.',
          'Juan Calvino dio al movimiento su forma más exportable. La *Institución de la religión cristiana*, publicada en 1536 y ampliada hasta 1559, ofrecía un sistema teológico completo y ordenado, con la predestinación como consecuencia lógica de la soberanía absoluta de Dios: la salvación no depende en absoluto del mérito humano. En Ginebra organizó desde 1541 una iglesia con pastores, doctores, ancianos y diáconos y un consistorio que vigilaba la conducta de los ciudadanos. La ejecución de Miguel Servet en 1553 por negar la Trinidad mostró que la tolerancia no formaba parte del programa de ninguno de los bandos.',
          'El calvinismo se difundió por Francia, Escocia, los Países Bajos, partes de Alemania y Hungría, y con él una estructura eclesiástica de sínodos y consistorios que podía funcionar sin apoyo del príncipe e incluso contra él. Esa autonomía organizativa explica su papel en las guerras civiles francesas y en la revuelta neerlandesa.',
          'Inglaterra siguió un camino distinto. La ruptura de Enrique VIII en 1534 fue dinástica y jurisdiccional antes que teológica: el Acta de Supremacía lo hizo cabeza de la Iglesia de Inglaterra para resolver su sucesión, y la disolución de los monasterios entre 1536 y 1541 transfirió a la corona y a la nobleza un patrimonio inmenso, creando un grupo social con interés material en que la ruptura no se revirtiera. El contenido doctrinal llegó después, con Eduardo VI, se revirtió con María I y se estabilizó en 1559 en una fórmula deliberadamente ambigua que dejó dentro a sensibilidades muy distintas y fuera a católicos y a puritanos.',
        ].join('\n\n'),
      },
      {
        title: '¿Contrarreforma o Reforma católica?',
        body: [
          'El término «Contrarreforma» lo acuñó la historiografía protestante del siglo XIX y describe la respuesta católica como pura reacción. Hubert Jedin propuso en 1946 distinguir dos procesos: una reforma católica de impulso interno, con raíces anteriores a 1517 —la observancia en las órdenes religiosas, el humanismo cristiano, la reforma española de Cisneros, los oratorios italianos—, y una contrarreforma propiamente dicha, de combate contra el protestantismo. La distinción se ha impuesto, con la advertencia de que ambos procesos se entrelazan tanto que separarlos es un ejercicio analítico y no cronológico.',
          'El Concilio de Trento, reunido en tres periodos entre 1545 y 1563, hizo dos cosas. En doctrina cerró toda posibilidad de acuerdo: reafirmó la justificación por fe y obras, los siete sacramentos, la transustanciación, el purgatorio, el culto a los santos, la tradición junto a la Escritura como fuente de revelación y la Vulgata como texto oficial. En disciplina fue mucho más innovador de lo que suele recordarse: obligó a los obispos a residir en sus diócesis, creó los seminarios para formar al clero, impuso el registro sistemático de bautismos y matrimonios y reguló la predicación y la catequesis.',
          'Ese aparato disciplinar necesitaba instrumentos. La Inquisición romana se reorganizó en 1542, el primer Índice de libros prohibidos se publicó en 1559 y la censura previa se generalizó en los territorios católicos. La Compañía de Jesús, aprobada en 1540, aportó una orden móvil, sin coro ni hábito propio, con cuarto voto de obediencia al papa, especializada en educación y en misión: sus colegios formaron a las élites católicas europeas durante dos siglos, y sus misioneros llegaron a la India, Japón, China y América.',
          'La cultura fue también instrumento. El decreto tridentino sobre las imágenes de 1563 reafirmó su valor didáctico frente al iconoclasmo protestante y exigió decoro y claridad; de ahí arranca buena parte de la estética barroca, concebida para conmover y persuadir a un público amplio. Es un uso deliberadamente propagandístico del arte, y funciona.',
          'Junto a la disciplina hubo renovación espiritual genuina: Teresa de Ávila y Juan de la Cruz, los capuchinos, las ursulinas dedicadas a la educación de niñas, la extensión de la confesión individual y de la dirección espiritual. Reducir todo el catolicismo del periodo a represión es tan parcial como reducir la Reforma a Lutero.',
        ].join('\n\n'),
      },
      {
        title: 'Guerras, paces y confesionalización',
        body: [
          'La primera solución fue territorial. La paz de Augsburgo de 1555 estableció que cada príncipe del Imperio fijaba la confesión de su territorio y que los súbditos disconformes podían emigrar; el principio se resumiría después en la fórmula *cuius regio, eius religio*. Reconocía solo el catolicismo y la confesión luterana de Augsburgo, dejando fuera al calvinismo, que crecía. Fue una tregua con fecha de caducidad incorporada.',
          'Francia se desangró en ocho guerras civiles entre 1562 y 1598, con la matanza de San Bartolomé de 1572 —varios miles de hugonotes asesinados en París y en provincias— como episodio más conocido. El conflicto terminó cuando Enrique de Navarra se convirtió al catolicismo para acceder al trono y promulgó en 1598 el Edicto de Nantes, que concedía a los protestantes libertad de conciencia, culto restringido y plazas de seguridad. Fue tolerancia por agotamiento, no por principio, y sería revocada en 1685.',
          'En los Países Bajos, la revuelta contra Felipe II combinó desde 1568 defensa de privilegios locales, fiscalidad y calvinismo, y terminó ochenta años después con la independencia de las siete provincias del norte. Y la guerra de los Treinta Años, iniciada en 1618 en Bohemia como conflicto confesional, acabó siendo una guerra europea de hegemonía en la que la Francia católica financió y después combatió junto a los príncipes protestantes contra los Habsburgo. El coste demográfico en el Imperio fue devastador: se estima una pérdida en torno al veinte por ciento de la población total, con regiones enteras por encima del cincuenta por ciento.',
          'La paz de Westfalia de 1648 añadió el calvinismo a las confesiones reconocidas, fijó 1624 como año normativo para las posesiones eclesiásticas y consagró la práctica de resolver los conflictos europeos en congresos multilaterales. Conviene, eso sí, desconfiar del relato que la presenta como acta de nacimiento de la soberanía estatal moderna: Andreas Osiander mostró en 2001 que esa lectura es una construcción del siglo XIX proyectada hacia atrás, y que los tratados no contienen nada parecido a una doctrina general de soberanía ni de no injerencia.',
          'El efecto de fondo lo describe la tesis de la confesionalización, formulada por Wolfgang Reinhard y Heinz Schilling: la construcción de identidades confesionales nítidas y la construcción del Estado moderno fueron el mismo proceso. Catequesis obligatoria, escuelas, registros parroquiales, visitas de inspección, control de la moral y del matrimonio, expulsión de los disidentes: católicos, luteranos y calvinistas hicieron lo mismo con instrumentos casi idénticos, y en todos los casos el resultado fue una población más alfabetizada, más vigilada y más encuadrada.',
          'De ahí arranca la discusión económica más famosa del periodo. Max Weber propuso en 1904-1905 que la ética del calvinismo —vocación profesional, ascetismo intramundano, inquietud ante la incertidumbre de la salvación— favoreció la acumulación capitalista. La objeción moderna más eficaz es de Sascha Becker y Ludger Woessmann, que en 2009 midieron con datos de la Prusia del siglo XIX la distancia de cada comarca a Wittenberg y concluyeron que la ventaja económica protestante se explica por la alfabetización derivada de la obligación de leer la Biblia, no por una ética específica. La conexión entre religión y economía se mantiene; el mecanismo propuesto cambia.',
        ].join('\n\n'),
        callout:
          'Westfalia no inventó la soberanía estatal. Esa lectura es una retroproyección del siglo XIX: los tratados no contienen doctrina alguna de soberanía ni de no injerencia.',
      },
    ],
    concepts: [
      { term: 'Indulgencia', definition: 'Remisión de la pena temporal por el pecado. Su predicación comercial en 1517 fue el detonante de la protesta de Lutero.' },
      { term: 'Sola scriptura', definition: 'Principio según el cual la Escritura es la única autoridad final en materia de fe. Al no haber árbitro, hace inevitable la fragmentación.' },
      { term: 'Justificación por la fe', definition: 'La salvación se recibe por gracia mediante la fe, no por las obras. Priva de fundamento a buena parte de la mediación sacramental.' },
      { term: 'Flugschrift', definition: 'Opúsculo impreso, breve y barato, a menudo ilustrado. Instrumento de difusión que convirtió a Lutero en el primer autor superventas.' },
      { term: 'Reforma comunal', definition: 'Lectura de Blickle: la Reforma como movimiento de comunidades urbanas y campesinas que reclaman autogobierno, derrotado en 1525.' },
      { term: 'Reforma magisterial', definition: 'Modelo posterior a 1525 en el que la autoridad civil organiza la iglesia territorial, nombra pastores y disciplina a los fieles.' },
      { term: 'Anabaptismo', definition: 'Corriente radical partidaria del bautismo de adultos y de la separación entre iglesia y Estado. Perseguida por católicos y protestantes.' },
      { term: 'Predestinación', definition: 'Doctrina calvinista: la salvación depende únicamente del decreto divino, no del mérito humano. Consecuencia de la soberanía absoluta de Dios.' },
      { term: 'Consistorio', definition: 'Órgano ginebrino de pastores y ancianos encargado de vigilar la conducta de los ciudadanos. Modelo de disciplina eclesiástica calvinista.' },
      { term: 'Acta de Supremacía', definition: 'Ley de 1534 que hace al rey de Inglaterra cabeza de su iglesia. Ruptura jurisdiccional y dinástica antes que teológica.' },
      { term: 'Concilio de Trento', definition: 'Asamblea de 1545-1563. Cierra la doctrina frente al protestantismo y crea seminarios, residencia episcopal y registros parroquiales.' },
      { term: 'Cuius regio, eius religio', definition: 'Principio de Augsburgo (1555): el príncipe fija la confesión de su territorio. Dejaba fuera al calvinismo, que seguía creciendo.' },
      { term: 'Confesionalización', definition: 'Tesis de Reinhard y Schilling: construir identidad confesional y construir Estado moderno fueron un mismo proceso disciplinar.' },
      { term: 'Año normativo', definition: 'Fecha de referencia fijada en Westfalia —1624— para determinar la titularidad de los bienes eclesiásticos en el Imperio.' },
    ],
    debates: [
      {
        question: '¿Contrarreforma o Reforma católica?',
        positions: [
          {
            school: 'Contrarreforma (historiografía protestante del siglo XIX)',
            argument:
              'La respuesta católica fue esencialmente reacción: Trento, Inquisición romana, Índice y Compañía de Jesús se explican como maquinaria de combate contra el protestantismo.',
          },
          {
            school: 'Dos procesos (Hubert Jedin, 1946)',
            argument:
              'Existía una reforma católica de impulso interno anterior a 1517 —observancia religiosa, humanismo cristiano, reforma española, oratorios italianos— sobre la que después se superpuso la reacción antiprotestante.',
          },
        ],
        state:
          'La distinción de Jedin es hoy la norma, con la advertencia de que los dos procesos se entrelazan tanto que separarlos es un recurso analítico y no una secuencia cronológica limpia.',
      },
      {
        question: '¿Fue la Reforma un movimiento de príncipes o de comunidades?',
        positions: [
          {
            school: 'Reforma comunal (Moeller, Blickle)',
            argument:
              'Triunfó primero en ciudades libres y comunidades rurales con tradición de autogobierno, que reclamaban elegir a su predicador y administrar la caridad. Los Doce Artículos de 1525 son su programa.',
          },
          {
            school: 'Reforma de príncipes',
            argument:
              'Sin la protección de Federico el Sabio y sin el interés de los príncipes en secularizar bienes eclesiásticos y recortar la jurisdicción romana, el movimiento habría terminado como el de Hus.',
          },
        ],
        state:
          'Se acepta que ambas dimensiones existieron y que 1525 fue la bisagra: aplastada la revuelta campesina, la Reforma quedó en manos de príncipes y magistrados y la vía comunal desapareció como opción.',
      },
      {
        question: '¿Explica la ética protestante la ventaja económica del norte de Europa?',
        positions: [
          {
            school: 'Ética protestante (Max Weber, 1904-1905)',
            argument:
              'La vocación profesional, el ascetismo intramundano y la inquietud ante la incertidumbre de la salvación generaron una disposición al ahorro, al trabajo metódico y a la reinversión que favoreció la acumulación capitalista.',
          },
          {
            school: 'Capital humano (Becker y Woessmann, 2009)',
            argument:
              'Midiendo la distancia de cada comarca prusiana a Wittenberg, la ventaja económica protestante desaparece al controlar por alfabetización: lo decisivo fue la obligación de leer la Biblia, no una ética específica.',
          },
        ],
        state:
          'La correlación entre confesión y desarrollo se mantiene; el mecanismo propuesto por Weber está muy discutido. Hoy se explica sobre todo por educación y capital humano, y se subraya que la tesis original describía afinidades, no causalidad simple.',
      },
    ],
    sources: [
      { author: 'Martín Lutero', title: 'Noventa y cinco tesis y carta a Alberto de Maguncia', year: '1517', kind: 'primaria', note: 'La carta está documentada; el clavado en la puerta lo relata Melanchthon en 1546.' },
      { author: 'Martín Lutero', title: 'A la nobleza cristiana de la nación alemana', year: '1520', kind: 'primaria', note: 'Apela a los príncipes para reformar la Iglesia y niega la distinción entre clérigos y laicos.' },
      { author: 'Comunidades campesinas de Suabia', title: 'Doce Artículos de Memmingen', year: '1525', kind: 'primaria', note: 'Programa de derechos colectivos fundado en citas bíblicas. Veinticinco ediciones en dos meses.' },
      { author: 'Martín Lutero', title: 'Contra las hordas asesinas y ladronas de campesinos', year: '1525', kind: 'primaria', note: 'Llama a los príncipes a reprimir sin misericordia. Documento clave del giro magisterial.' },
      { author: 'Hermandad de Schleitheim', title: 'Confesión de Schleitheim', year: '1527', kind: 'primaria', note: 'Programa anabaptista de separación pacífica del mundo, anterior al episodio de Münster.' },
      { author: 'Felipe Melanchthon', title: 'Confesión de Augsburgo', year: '1530', kind: 'primaria', note: 'Exposición oficial de la doctrina luterana presentada ante Carlos V.' },
      { author: 'Parlamento inglés', title: 'Acta de Supremacía', year: '1534', kind: 'primaria', note: 'Convierte al rey en cabeza de la Iglesia de Inglaterra por razones sucesorias y jurisdiccionales.' },
      { author: 'Juan Calvino', title: 'Institución de la religión cristiana', year: '1536-1559', kind: 'primaria', note: 'Sistema teológico completo y exportable. Base organizativa del calvinismo internacional.' },
      { author: 'Concilio de Trento', title: 'Decretos y cánones', year: '1545-1563', kind: 'primaria', note: 'Doctrina cerrada frente al protestantismo y reforma disciplinar del clero y de la parroquia.' },
      { author: 'Enrique IV de Francia', title: 'Edicto de Nantes', year: '1598', kind: 'primaria', note: 'Tolerancia limitada por agotamiento tras ocho guerras civiles. Revocado en 1685.' },
      { author: 'Plenipotenciarios europeos', title: 'Tratados de Osnabrück y Münster', year: '1648', kind: 'primaria', note: 'Reconocen el calvinismo y fijan 1624 como año normativo. No contienen doctrina de soberanía.' },
      { author: 'Max Weber', title: 'La ética protestante y el espíritu del capitalismo', year: '1904-1905', kind: 'estudio', note: 'Propone una afinidad entre ascetismo calvinista y acumulación capitalista.' },
      { author: 'Hubert Jedin', title: 'Katholische Reformation oder Gegenreformation?', year: '1946', kind: 'estudio', note: 'Distingue reforma católica interna y contrarreforma antiprotestante.' },
      { author: 'Peter Blickle', title: 'La revolución del hombre común', year: '1975', kind: 'estudio', note: 'La reforma comunal y la guerra campesina de 1525 como movimiento con programa propio.' },
      { author: 'Diarmaid MacCulloch', title: 'Reformation: Europe s House Divided', year: '2003', kind: 'estudio', note: 'Síntesis general del periodo, atenta a las periferias y a la Reforma radical.' },
      { author: 'Andreas Osiander', title: 'Sovereignty, International Relations and the Westphalian Myth', year: '2001', kind: 'estudio', note: 'Desmonta la lectura de 1648 como acta de nacimiento de la soberanía estatal.' },
      { author: 'Sascha Becker y Ludger Woessmann', title: 'Was Weber Wrong?', year: '2009', kind: 'estudio', note: 'Atribuye la ventaja económica protestante a la alfabetización y no a la ética.' },
      { author: 'Andrew Pettegree', title: 'Brand Luther', year: '2015', kind: 'estudio', note: 'La Reforma como fenómeno editorial y Wittenberg como centro de impresión.' },
    ],
  },
  questions: [
    {
      id: 'reforma-1', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué operación financiera está detrás de la predicación de indulgencias de 1517?',
      options: [
        'La financiación de la guerra contra los turcos',
        'La deuda de Alberto de Brandeburgo con los Fugger para acumular el arzobispado de Maguncia, saldada con la mitad de lo recaudado',
        'La compra de la corona imperial por Carlos V',
        'El rescate de Francisco I tras Pavía',
      ],
      answer: 1,
      explanation: 'La otra mitad iba a las obras de San Pedro. La cumbre artística del Renacimiento romano y la protesta de Lutero comparten fuente de financiación.',
    },
    {
      id: 'reforma-2', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué se sabe con certeza sobre las 95 tesis?',
      options: [
        'Que Lutero las clavó en la puerta de la iglesia del castillo el 31 de octubre de 1517',
        'Que se conserva la carta con la que Lutero las envió al arzobispo de Maguncia; el clavado lo relata Melanchthon en 1546',
        'Que fueron redactadas en alemán para el gran público',
        'Que negaban desde el principio la autoridad del papa',
      ],
      answer: 1,
      explanation: 'Las tesis no niegan el purgatorio ni la autoridad papal: sostienen que la indulgencia no sustituye al arrepentimiento. Lutero pedía una disputa académica.',
    },
    {
      id: 'reforma-3', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué admitió Lutero en la disputa de Leipzig de 1519 y por qué fue decisivo?',
      options: [
        'Que los concilios también podían errar, lo que dejaba a la Escritura como única autoridad final',
        'Que la venta de indulgencias era legítima si el papa la autorizaba',
        'Que aceptaba la transustanciación sin reservas',
        'Que renunciaba a publicar en alemán',
      ],
      answer: 0,
      explanation: 'De ahí salen los tratados de 1520 y la ruptura. La radicalización llegó por el propio proceso de disputa, no estaba en las tesis iniciales.',
    },
    {
      id: 'reforma-4', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Por qué prendió Lutero donde Hus había fracasado un siglo antes?',
      options: [
        'Porque contaba con apoyo militar otomano',
        'Porque el papado había perdido toda autoridad tras el cisma',
        'Porque escribió en alemán, breve y barato: cerca de un tercio de todo lo impreso en alemán entre 1518 y 1525 salió de su pluma',
        'Porque sus tesis eran teológicamente más moderadas',
      ],
      answer: 2,
      explanation: 'A eso se sumaron la fragmentación política del Imperio, los agravios fiscales de los príncipes y una tradición urbana de autogobierno comunal.',
    },
    {
      id: 'reforma-5', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué incentivo material tenían los príncipes alemanes para apoyar la Reforma?',
      options: [
        'El monopolio del comercio báltico',
        'La secularización de los bienes eclesiásticos de sus territorios y el recorte de la jurisdicción y la fiscalidad romanas',
        'Las subvenciones de Carlos V a los territorios reformados',
        'La exención de participar en la defensa contra los turcos',
      ],
      answer: 1,
      explanation: 'Federico el Sabio protegió a Lutero sin compartir del todo sus tesis. Carlos V, que sí quería reprimirlo, estuvo ocupado con Francia y con el avance otomano.',
    },
    {
      id: 'reforma-6', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué reclamaban los Doce Artículos de Memmingen de 1525?',
      options: [
        'La restauración del emperador como única autoridad religiosa',
        'La expulsión de los judíos de los territorios imperiales',
        'La supresión de los gremios urbanos',
        'Elegir al párroco, suprimir el diezmo menor, abolir la servidumbre porque Cristo redimió a todos y recuperar bosques y aguas comunales',
      ],
      answer: 3,
      explanation: 'Argumentaban con citas bíblicas. Es uno de los primeros textos europeos que formula derechos colectivos, y se imprimió en unas veinticinco ediciones en dos meses.',
    },
    {
      id: 'reforma-7', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué consecuencia tuvo la guerra de los campesinos para el rumbo de la Reforma?',
      options: [
        'Consolidó la vía comunal como modelo dominante',
        'Dejó de ser un movimiento comunal y pasó a ser asunto de príncipes y magistrados, con la autoridad civil al frente de la iglesia territorial',
        'Provocó la reconciliación con Roma',
        'Llevó a Lutero a apoyar la abolición de la servidumbre',
      ],
      answer: 1,
      explanation: 'Lutero llamó a reprimir sin misericordia en *Contra las hordas asesinas*. La represión causó entre setenta mil y cien mil muertos.',
    },
    {
      id: 'reforma-8', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Por qué el coloquio de Marburgo de 1529 es significativo?',
      options: [
        'Porque unificó a luteranos y católicos',
        'Porque Lutero y Zuinglio acordaron catorce de quince artículos y rompieron por la eucaristía: la Reforma nació incapaz de unificarse',
        'Porque estableció la paz religiosa en el Imperio',
        'Porque condenó formalmente al anabaptismo',
      ],
      answer: 1,
      explanation: 'Si la Escritura es la única autoridad, no hay instancia que zanje las lecturas divergentes. La fragmentación es estructural, no accidental.',
    },
    {
      id: 'reforma-9', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué hizo del calvinismo el protestantismo más exportable?',
      options: [
        'Su alianza permanente con las monarquías',
        'Su rechazo de toda organización eclesiástica',
        'Un sistema teológico completo y una estructura de sínodos y consistorios capaz de funcionar sin el príncipe e incluso contra él',
        'Su tolerancia hacia otras confesiones',
      ],
      answer: 2,
      explanation: 'Esa autonomía organizativa explica su papel en las guerras civiles francesas y en la revuelta neerlandesa. La ejecución de Servet en 1553 muestra que la tolerancia no estaba en el programa.',
    },
    {
      id: 'reforma-10', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué caracterizó la ruptura inglesa de 1534?',
      options: [
        'Fue jurisdiccional y dinástica antes que teológica, y la disolución de monasterios creó un grupo con interés material en que no se revirtiera',
        'Fue una reforma doctrinal calvinista desde el primer momento',
        'La impuso el Parlamento contra la voluntad del rey',
        'Se produjo tras una guerra civil religiosa',
      ],
      answer: 0,
      explanation: 'El contenido doctrinal llegó con Eduardo VI, se revirtió con María I y se estabilizó en 1559 en una fórmula deliberadamente ambigua.',
    },
    {
      id: 'reforma-11', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué distinción propuso Hubert Jedin en 1946?',
      options: [
        'Entre reforma alemana y reforma suiza',
        'Entre una reforma católica de impulso interno anterior a 1517 y una contrarreforma de combate contra el protestantismo',
        'Entre Trento y el Vaticano I',
        'Entre religiosidad popular y religiosidad de élite',
      ],
      answer: 1,
      explanation: 'La distinción se ha impuesto, con la advertencia de que ambos procesos se entrelazan y que separarlos es un recurso analítico.',
    },
    {
      id: 'reforma-12', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: 'Además de cerrar la doctrina, ¿qué innovación disciplinar aportó Trento?',
      options: [
        'La elección de los obispos por los fieles',
        'La supresión de las órdenes religiosas',
        'Residencia obligatoria de los obispos, seminarios para formar al clero y registro sistemático de bautismos y matrimonios',
        'La traducción oficial de la Biblia a las lenguas vulgares',
      ],
      answer: 2,
      explanation: 'Ese aparato administrativo es tan característico del periodo como la polémica doctrinal, y encaja con la tesis de la confesionalización.',
    },
    {
      id: 'reforma-13', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué estableció la paz de Augsburgo de 1555 y cuál fue su defecto?',
      options: [
        'Libertad individual de conciencia; falló por falta de aplicación',
        'Que cada príncipe fijaba la confesión de su territorio, pero reconocía solo catolicismo y luteranismo, dejando fuera al calvinismo, que seguía creciendo',
        'La unificación religiosa del Imperio bajo el catolicismo',
        'La supresión de los principados eclesiásticos',
      ],
      answer: 1,
      explanation: 'Fue una tregua con fecha de caducidad incorporada. Westfalia añadiría el calvinismo en 1648.',
    },
    {
      id: 'reforma-14', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué muestra que la guerra de los Treinta Años dejó de ser un conflicto confesional?',
      options: [
        'Que el papa la condenó desde el principio',
        'Que los ejércitos eran mercenarios',
        'Que la Francia católica financió y después combatió junto a los príncipes protestantes contra los Habsburgo',
        'Que terminó sin tratado de paz',
      ],
      answer: 2,
      explanation: 'Acabó siendo una guerra europea de hegemonía. El Imperio perdió en torno al veinte por ciento de su población, con regiones por encima del cincuenta.',
    },
    {
      id: 'reforma-15', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Por qué es un mito que Westfalia fundara la soberanía estatal moderna?',
      options: [
        'Porque los tratados no llegaron a firmarse',
        'Porque solo participaron potencias protestantes',
        'Porque Osiander mostró en 2001 que esa lectura es una construcción del siglo XIX: los tratados no contienen doctrina de soberanía ni de no injerencia',
        'Porque la soberanía ya estaba definida en Augsburgo',
      ],
      answer: 2,
      explanation: 'Lo que sí consagró Westfalia fue la práctica de resolver los conflictos europeos en congresos multilaterales.',
    },
    {
      id: 'reforma-16', era: 'Edad Moderna', topicId: 'reforma', topic: 'Reforma',
      question: '¿Qué objeción plantearon Becker y Woessmann a la tesis de Weber?',
      options: [
        'Que el capitalismo es anterior a la Reforma',
        'Que la ventaja económica protestante desaparece al controlar por alfabetización: lo decisivo fue leer la Biblia, no una ética específica',
        'Que Weber nunca estudió datos alemanes',
        'Que el calvinismo prohibía el préstamo con interés',
      ],
      answer: 1,
      explanation: 'Midieron la distancia de cada comarca prusiana a Wittenberg. La correlación entre confesión y desarrollo se mantiene; el mecanismo cambia.',
    },
  ],
}
