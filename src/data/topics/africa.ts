import type { TopicModule } from '../types.ts'

export const africa: TopicModule = {
  topic: {
    id: 'africa',
    era: 'Edad Media',
    title: 'Reinos africanos: Malí, Songhay, Etiopía y Gran Zimbabue',
    years: 'siglos IV–XVII',
    country: 'África',
    description: 'Estados, universidades y redes comerciales de un continente al que la historiografía europea negó durante siglos el derecho a tener historia.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '◈',
    color: 'green',
    summary:
      'En 1830 Hegel escribió que África no era una parte histórica del mundo. Esa frase, repetida durante siglo y medio, describe un problema de fuentes y de prejuicio, no de pasado. El África precolonial tuvo Estados con administración y fiscalidad, ciudades con decenas de miles de habitantes, universidades con bibliotecas de manuscritos, redes comerciales que conectaban el Mediterráneo con el golfo de Guinea y el índico con China, y una arquitectura monumental en piedra levantada sin ninguna influencia exterior. Reconstruir esa historia exige combinar arqueología, lingüística, tradición oral y fuentes escritas en árabe, ge ez, portugués y swahili, y desmontar de paso dos operaciones ideológicas: la que negó la capacidad africana de construir y la que redujo el continente a su papel de proveedor de esclavos.',
    keyDates: [
      { date: 'siglo IV', event: 'El rey Ezana de Aksum se convierte al cristianismo. Etiopía adopta una fe que conservará dieciséis siglos.' },
      { date: 'siglos VIII–XI', event: 'Apogeo del reino de Ghana, primer gran Estado del Sahel occidental basado en el comercio de oro y sal.' },
      { date: 'siglos IX–XV', event: 'Formación de las ciudades swahilis de la costa oriental: Kilwa, Mombasa, Zanzíbar, Sofala.' },
      { date: 'c. 1235', event: 'Sundiata Keita vence en Kirina y funda el imperio de Malí. Tradición de la carta de Kurukan Fuga.' },
      { date: 'siglos XII–XIII', event: 'Iglesias excavadas en la roca de Lalibela, en la Etiopía de la dinastía Zagüe.' },
      { date: '1324', event: 'Peregrinación a La Meca del mansa Musa, que deprime el precio del oro en El Cairo con sus donaciones.' },
      { date: '1352–1353', event: 'Ibn Battuta visita Malí y deja la única descripción de un testigo externo del imperio en su apogeo.' },
      { date: '1375', event: 'El Atlas catalán representa al mansa Musa con una pepita de oro: Malí entra en la cartografía europea.' },
      { date: 'siglos XIII–XV', event: 'Auge de Gran Zimbabue, con recintos de piedra sin argamasa y comercio con la costa índica.' },
      { date: '1464–1591', event: 'Imperio Songhay: Sonni Ali y los askias. Tombuctú y Gao como centros de comercio y de saber.' },
      { date: '1493–1528', event: 'Reinado del askia Muhammad. Administración, peregrinación y patrocinio de la enseñanza.' },
      { date: '1591', event: 'Un ejército saadí cruza el Sáhara con armas de fuego y derrota a Songhay en Tondibi.' },
      { date: 'siglos XVI–XVII', event: 'Expansión de la trata atlántica y transformación de las economías políticas de África occidental y central.' },
    ],
    sections: [
      {
        title: 'Cómo se estudia el África precolonial',
        body: [
          'El primer problema del tema no es el pasado africano sino el archivo. La mayor parte del continente no produjo documentación escrita continua antes del siglo XIX, y donde la hubo, en árabe, en ge ez o en swahili, se conserva de forma desigual y ha sido menos explotada de lo que merece. Eso no significa ausencia de fuentes: significa que hay que usar otras y combinarlas con método.',
          'La arqueología ha transformado el campo. Excavaciones como las de Jenne-Jeno en el delta interior del Níger han demostrado que existían ciudades de miles de habitantes desde el siglo III, es decir, urbanización anterior a la llegada del islam y sin relación con estímulos externos. La datación por radiocarbono, la arqueometalurgia y el estudio de cerámica y abalorios permiten reconstruir cronologías y rutas comerciales sin depender de ningún texto.',
          'La lingüística histórica aporta otra vía. La reconstrucción de las familias lingüísticas, y en particular la expansión bantú desde África occidental hacia el este y el sur a lo largo de milenios, permite trazar migraciones, difusión de técnicas agrícolas y metalúrgicas y contactos entre poblaciones. Christopher Ehret ha combinado esos datos con la arqueología para escribir historia de períodos sin documentos.',
          'La tradición oral es la fuente más discutida y la que dio lugar al debate metodológico central del africanismo. Jan Vansina demostró en 1961 que las tradiciones orales pueden tratarse como fuentes históricas si se aplica una crítica análoga a la de los textos: identificar el género, la cadena de transmisión, la función social del relato y sus deformaciones sistemáticas. Los griots o jeli de África occidental eran especialistas profesionales con formación y responsabilidad, no narradores espontáneos.',
          'Las fuentes escritas externas son valiosas y hay que leerlas con cuidado. Los geógrafos árabes, de al-Bakri a Ibn Jaldún, describen los Estados del Sahel con precisión desigual y a menudo de oídas; los portugueses del siglo XVI escriben desde el interés comercial; y toda la documentación colonial posterior lleva incorporada una teoría sobre la incapacidad africana. Cruzar unas con otras y con la arqueología es la única forma de trabajar.',
        ].join('\n\n'),
        callout:
          'Jenne-Jeno prueba que hubo ciudades en el Níger medio desde el siglo III, antes del islam y sin influencia exterior. La arqueología africana ha refutado por sí sola la tesis de que los Estados llegaron siempre de fuera.',
      },
      {
        title: 'Aksum y la Etiopía cristiana',
        body: [
          'El reino de Aksum, en el actual norte de Etiopía y Eritrea, fue en los siglos III a VI una potencia comercial que Mani situó entre los cuatro grandes imperios del mundo junto a Roma, Persia y China. Controlaba el comercio del mar Rojo, acuñó su propia moneda en oro, plata y bronce, desarrolló una escritura propia, el ge ez, y levantó estelas monolíticas de más de veinte metros que se cuentan entre las mayores piedras talladas jamás erigidas.',
          'Hacia el año 340 el rey Ezana se convirtió al cristianismo, como documentan sus propias inscripciones y sus monedas, donde la cruz sustituye a los símbolos anteriores. Etiopía se convirtió así en uno de los primeros Estados cristianos del mundo, antes que la mayoría de Europa, y conservó esa identidad durante dieciséis siglos con una iglesia propia, un canon bíblico más amplio y una liturgia en ge ez.',
          'El ascenso del islam desplazó las rutas del mar Rojo y aisló relativamente al reino, que se desplazó hacia el interior montañoso. Bajo la dinastía Zagüe se excavaron en los siglos XII y XIII las iglesias de Lalibela, once templos tallados hacia abajo en la roca viva, con ventanas, columnas y drenajes, concebidos como una nueva Jerusalén tras la caída de la ciudad en manos musulmanas.',
          'La dinastía salomónica, desde 1270, legitimó su poder con el Kebra Nagast, texto que hace descender a los reyes etíopes de Salomón y la reina de Saba y sitúa el Arca de la Alianza en Aksum. Es una construcción ideológica de primer orden, comparable a cualquier mito dinástico europeo, y funcionó durante setecientos años, hasta el derrocamiento del último emperador en 1974.',
          'Etiopía mantuvo contactos diplomáticos con Europa desde el siglo XV. La leyenda del Preste Juan, un rey cristiano en Oriente que ayudaría contra el islam, orientó parte de la exploración portuguesa, y cuando en el siglo XVI el sultanato de Adal invadió el país con apoyo otomano, un contingente portugués con arcabuces participó en la guerra. Es un recordatorio útil: África estuvo integrada en la política internacional mucho antes de la colonización.',
        ].join('\n\n'),
      },
      {
        title: 'El Sahel: Ghana y Malí',
        body: [
          'La geografía del Sahel explica su historia. Al norte, el desierto con las minas de sal, un producto imprescindible y escaso; al sur, la selva y las cuencas fluviales con los yacimientos de oro más productivos del mundo medieval. Entre ambos, una franja donde los Estados se enriquecieron gravando el intercambio. El comercio transahariano, transformado por el uso del camello desde los primeros siglos de nuestra era, movía oro, sal, cobre, cuero, tejidos, libros y también personas esclavizadas.',
          'El reino de Ghana, sin relación geográfica con el país actual del mismo nombre, es el primero documentado. Al-Bakri lo describió en 1068 a partir de informantes: una capital doble con un barrio real y otro musulmán con doce mezquitas, un ejército numeroso, un impuesto sobre cada carga de sal que entraba y salía, y un monopolio real sobre las pepitas de oro que garantizaba el valor del metal en polvo que circulaba como moneda. Ese detalle, un Estado que regula la oferta monetaria, dice más sobre su sofisticación que cualquier adjetivo.',
          'Malí sucedió a Ghana en el siglo XIII. Su fundación se atribuye a Sundiata Keita, vencedor en Kirina hacia 1235, y la epopeya de Sundiata, transmitida oralmente por los jeli durante ocho siglos, es a la vez relato fundacional y carta política: la tradición de Kurukan Fuga recoge una asamblea que reparte funciones entre linajes, regula la esclavitud y establece obligaciones del gobernante. Su valor como documento histórico literal es discutible; su valor como fuente sobre la cultura política del imperio no lo es.',
          'El mansa Musa hizo en 1324 la peregrinación a La Meca más famosa de la historia. Cruzó el Sáhara con una caravana enorme y repartió tanto oro en El Cairo que, según los cronistas egipcios, deprimió su precio durante años. El efecto en la información fue duradero: en 1375 el Atlas catalán lo dibuja sentado en su trono con una pepita en la mano, y Malí entra en el imaginario europeo como sinónimo de riqueza.',
          'Ibn Battuta visitó Malí entre 1352 y 1353 y dejó la única descripción de un testigo externo. Elogió la seguridad de los caminos, la aversión a la injusticia y el cuidado con que se administraba la justicia; se escandalizó de la libertad de las mujeres y de prácticas cortesanas que le parecieron impropias de musulmanes. Ese doble registro es lo que hace la fuente valiosa: no idealiza, y sus reproches revelan una sociedad que había integrado el islam sin renunciar a sus propias formas.',
        ].join('\n\n'),
        callout:
          'El reino de Ghana retiraba de la circulación las pepitas de oro y dejaba solo el polvo para sostener su valor. Es política monetaria deliberada en el siglo XI, en un Estado que la historiografía europea describió durante siglos como tribal.',
      },
      {
        title: 'Songhay, Tombuctú y el saber escrito',
        body: [
          'El imperio Songhay, con centro en Gao, sustituyó a Malí como potencia del Níger en el siglo XV. Sonni Ali conquistó Tombuctú y Yenné y organizó una flota fluvial; el askia Muhammad, que tomó el poder en 1493, construyó una administración con provincias, gobernadores nombrados, un sistema fiscal y de pesos y medidas y un ejército permanente. Peregrinó a La Meca y volvió con el título de califa de las tierras de los negros, una legitimación que usó políticamente.',
          'Tombuctú fue en los siglos XV y XVI uno de los centros intelectuales del mundo islámico. La mezquita y universidad de Sankoré reunió a miles de estudiantes, con enseñanza de derecho maliki, teología, gramática, astronomía y matemáticas, y una industria del libro que copiaba, comerciaba e importaba manuscritos. León el Africano escribió que en Tombuctú los libros dejaban más beneficio que ninguna otra mercancía.',
          'Esos manuscritos existen. Cientos de miles se conservan en bibliotecas familiares e institucionales de Malí, muchos todavía sin catalogar, y su rescate durante el conflicto de 2012 y 2013 fue una operación internacional. Contienen crónicas, derecho, correspondencia, contratos, medicina y astronomía, y su estudio sistemático está reescribiendo la historia intelectual del África occidental.',
          'De ese medio salieron dos crónicas fundamentales escritas en el siglo XVII, el Tarij al-Sudan y el Tarij al-Fattash, que narran la historia de los imperios del Níger desde dentro. Son fuentes internas, con sus agendas y sus silencios, pero rompen definitivamente la idea de un África sin escritura propia sobre su propio pasado.',
          'Songhay cayó en 1591 de forma abrupta. El sultán saadí de Marruecos envió un ejército de unos cuatro mil hombres a través del desierto, con arcabuces y cañones, y venció en Tondibi a una fuerza mucho mayor pero sin armas de fuego. La conquista no produjo un imperio estable, sino la fragmentación de la región y el declive de las grandes rutas, en un momento en el que además el comercio atlántico empezaba a desplazar el eje económico hacia la costa.',
        ].join('\n\n'),
      },
      {
        title: 'La costa swahili y Gran Zimbabue',
        body: [
          'En la costa oriental, entre Somalia y Mozambique, se formó desde el siglo IX una civilización urbana de habla swahili, lengua bantú con préstamos árabes y persas. Kilwa, Mombasa, Lamu, Zanzíbar y Sofala eran ciudades-Estado de comerciantes musulmanes con casas de coral, mezquitas, moneda propia y una posición central en el comercio del índico: exportaban oro, marfil, madera y esclavos e importaban cerámica china, vidrio y tejidos indios.',
          'Esa cultura fue durante mucho tiempo interpretada como una colonia árabe o persa implantada sobre población africana. La arqueología y la lingüística han demostrado lo contrario: es una civilización africana que adoptó el islam y participó en una red cosmopolita, con continuidad material desde los asentamientos bantúes anteriores. Los hallazgos de porcelana Song y Ming en la costa muestran hasta dónde llegaba esa red, y una flota china llegó a Malindi en el siglo XV.',
          'Tierra adentro, en la meseta entre el Zambeze y el Limpopo, se levantó Gran Zimbabue entre los siglos XIII y XV: un conjunto de recintos de piedra de granito colocada sin argamasa, con muros de hasta once metros de altura y una torre cónica, en una ciudad que pudo albergar entre diez y veinte mil personas. Su riqueza venía del ganado, del oro y del comercio con la costa, como prueban los hallazgos de vidrio persa y porcelana china en el yacimiento.',
          'La historia de su interpretación es un caso de manual sobre ideología y arqueología. Cuando los europeos lo documentaron en el siglo XIX, la primera reacción fue atribuirlo a fenicios, árabes o a la reina de Saba, y la administración colonial de Rodesia sostuvo oficialmente esa versión. En 1929 Gertrude Caton-Thompson excavó el sitio con método estratigráfico y concluyó sin ambigüedad que era obra africana medieval; Peter Garlake lo confirmó después y fue presionado por el régimen de Rodesia por decirlo. El país independiente tomó el nombre del yacimiento en 1980.',
          'A Gran Zimbabue le sucedieron los Estados de Mutapa y Torwa, con los que trataron los portugueses desde el siglo XVI. Y en el África central, el reino del Kongo mantuvo desde 1483 una relación diplomática con Portugal, con embajadas, correspondencia real y un rey, Afonso I, cuyas cartas conservadas denuncian el efecto destructivo del comercio de esclavos sobre su propio reino. Es una de las voces africanas contemporáneas más importantes que se conservan.',
        ].join('\n\n'),
        callout:
          'Que Gran Zimbabue fuera obra africana se demostró arqueológicamente en 1929. La administración colonial siguió negándolo oficialmente durante otro medio siglo, y presionó a los arqueólogos que lo afirmaron.',
      },
      {
        title: 'La trata y la invención de un continente sin historia',
        body: [
          'La trata atlántica deportó por la fuerza a unos doce millones y medio de personas entre los siglos XVI y XIX, de las cuales alrededor de diez millones y medio llegaron vivas a América. La base de datos de viajes negreros, construida a partir de registros de embarque, ha permitido cuantificarla con una precisión que no tenía hace treinta años. A esa cifra hay que sumar las trata transahariana y la del índico, más prolongadas en el tiempo y peor documentadas.',
          'El efecto sobre África es objeto de un debate importante. Walter Rodney sostuvo en 1972 que la trata y el colonialismo posterior produjeron el subdesarrollo africano al extraer población en edad productiva, militarizar la política y destruir la producción artesanal. Joseph Inikori ha cuantificado la pérdida demográfica y su impacto de largo plazo, y Nathan Nunn ha mostrado con métodos econométricos una correlación entre la intensidad de la trata por región y los niveles actuales de renta y de confianza social.',
          'John Thornton ha matizado el cuadro desde otro ángulo: los africanos no fueron sujetos pasivos, sino que los Estados costeros controlaban las condiciones del comercio, fijaban precios, imponían aranceles y decidían con quién tratar, y los europeos no penetraron el interior hasta el siglo XIX. Esa constatación de agencia no es una atenuación moral: describe cómo funcionó realmente un sistema en el que unas élites africanas participaron y del que la mayoría de la población fue víctima.',
          'La otra herencia es intelectual. La afirmación de Hegel de que África carecía de historia, y su repetición por historiadores hasta bien entrado el siglo XX, no fue un error de información: fue una construcción que acompañó y justificó la conquista. Cuando en 1963 un catedrático de Oxford declaró que solo había en África la historia de los europeos allí, ya existían la arqueología de Jenne-Jeno, los manuscritos de Tombuctú y las excavaciones de Gran Zimbabue.',
          'El giro llegó con la descolonización y con una generación de historiadores africanos y africanistas que fundaron departamentos, revistas y proyectos como la Historia general de África de la Unesco. Hoy el campo tiene sus propios debates internos, sobre el uso de la oralidad, sobre la periodización, sobre la comparación con otras regiones, y ninguno de ellos consiste ya en demostrar que hay algo que estudiar.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Comercio transahariano', definition: 'Red de rutas que unía el Mediterráneo con el Sahel a través del desierto, transformada por el uso del camello. Movía oro, sal, cobre, libros y personas esclavizadas.' },
      { term: 'Jeli o griot', definition: 'Especialista profesional en la transmisión de genealogías, historia y derecho en África occidental. Función hereditaria con formación y responsabilidad, no narración espontánea.' },
      { term: 'Mansa', definition: 'Título del soberano de Malí. El más conocido, Musa, hizo en 1324 una peregrinación que deprimió el precio del oro en El Cairo.' },
      { term: 'Kurukan Fuga', definition: 'Asamblea fundacional atribuida al imperio de Malí, transmitida oralmente, que reparte funciones entre linajes y fija obligaciones del gobernante.' },
      { term: 'Askia', definition: 'Título de los soberanos de Songhay desde 1493. El askia Muhammad organizó provincias, fiscalidad, pesos y medidas y ejército permanente.' },
      { term: 'Sankoré', definition: 'Mezquita y centro de enseñanza de Tombuctú. Núcleo de una industria del libro que copiaba, importaba y vendía manuscritos.' },
      { term: 'Ge ez', definition: 'Lengua y escritura de Aksum y de la Iglesia etíope, todavía litúrgica. Una de las pocas escrituras propias del África antigua.' },
      { term: 'Kebra Nagast', definition: 'Texto que hace descender a los reyes etíopes de Salomón y la reina de Saba. Legitimación dinástica vigente hasta 1974.' },
      { term: 'Lalibela', definition: 'Conjunto de once iglesias excavadas hacia abajo en la roca viva en los siglos XII y XIII, concebido como una nueva Jerusalén.' },
      { term: 'Ciudades swahilis', definition: 'Ciudades-Estado musulmanas de la costa oriental africana, de cultura bantú y lengua swahili, integradas en el comercio del índico.' },
      { term: 'Dzimbahwe', definition: 'Casa de piedra en shona, origen del nombre Zimbabue. Designa los recintos de granito sin argamasa de los Estados de la meseta.' },
      { term: 'Mutapa', definition: 'Estado sucesor de Gran Zimbabue en la meseta del Zambeze, con el que trataron los portugueses desde el siglo XVI.' },
      { term: 'Crítica de la tradición oral', definition: 'Método formulado por Vansina: identificar género, cadena de transmisión, función social y deformaciones sistemáticas del relato antes de usarlo como fuente.' },
      { term: 'Trata atlántica', definition: 'Deportación forzosa de unos doce millones y medio de personas entre los siglos XVI y XIX, hoy cuantificada mediante registros de embarque.' },
    ],
    debates: [
      {
        question: '¿Puede la tradición oral usarse como fuente histórica?',
        positions: [
          {
            school: 'Sí, con crítica propia (Vansina, 1961)',
            argument:
              'Las tradiciones orales admiten un tratamiento crítico análogo al de los textos: identificar el género, la cadena de transmisión, la función social y las deformaciones sistemáticas permite extraer información histórica fiable.',
          },
          {
            school: 'Escepticismo metodológico',
            argument:
              'La transmisión oral se reestructura en cada generación según las necesidades presentes, comprime cronologías y funde personajes, de modo que su valor para fechar acontecimientos es muy limitado.',
          },
        ],
        state:
          'El método de Vansina es hoy estándar y se aplica combinado con arqueología y lingüística. La discusión se ha desplazado a qué tipo de información entrega cada género oral, no a si sirve o no.',
      },
      {
        question: '¿Quién construyó Gran Zimbabue?',
        positions: [
          {
            school: 'Origen exterior (arqueología colonial)',
            argument:
              'Los primeros europeos que lo documentaron atribuyeron los recintos a fenicios, árabes o a la reina de Saba, y la administración de Rodesia sostuvo oficialmente esa versión durante décadas.',
          },
          {
            school: 'Obra africana medieval (Caton-Thompson, 1931; Garlake)',
            argument:
              'La excavación estratigráfica y la datación establecen sin ambigüedad una construcción shona de los siglos XIII a XV, con una economía basada en ganado, oro y comercio con la costa índica.',
          },
        ],
        state:
          'Científicamente resuelto desde 1929 y políticamente combatido durante otro medio siglo. Es el ejemplo más claro de cómo un marco ideológico puede sobrevivir a la evidencia arqueológica.',
      },
      {
        question: '¿Qué efecto tuvo la trata atlántica sobre África?',
        positions: [
          {
            school: 'Subdesarrollo inducido (Rodney, 1972; Inikori)',
            argument:
              'La extracción de población en edad productiva, la militarización de la política y la destrucción de la producción artesanal bloquearon el desarrollo africano y crearon la desigualdad posterior.',
          },
          {
            school: 'Agencia africana (Thornton, 1992)',
            argument:
              'Los Estados costeros controlaban las condiciones del comercio, fijaban precios y aranceles y decidían con quién tratar. Los europeos no penetraron el interior hasta el siglo XIX.',
          },
          {
            school: 'Medición de efectos de largo plazo (Nunn, 2008)',
            argument:
              'El análisis cuantitativo muestra una correlación entre la intensidad de la trata por región de origen y los niveles actuales de renta y de confianza social interpersonal.',
          },
        ],
        state:
          'Las tres posiciones son compatibles si se distingue entre quién decidía y quién sufría. Constatar la participación de élites africanas describe el funcionamiento del sistema y no atenúa la responsabilidad de quien lo demandaba.',
      },
    ],
    sources: [
      { author: 'Ezana de Aksum', title: 'Inscripciones reales y monedas', year: 'siglo IV', kind: 'primaria', note: 'Documentan la conversión al cristianismo: la cruz sustituye a los símbolos anteriores en la acuñación.' },
      { author: 'Al-Bakri', title: 'Libro de las rutas y los reinos', year: '1068', kind: 'primaria', note: 'Descripción del reino de Ghana a partir de informantes: capital doble, fiscalidad sobre la sal y monopolio real del oro.' },
      { author: 'Al-Idrisi', title: 'Libro de Roger', year: '1154', kind: 'primaria', note: 'Geografía compilada en Sicilia con información sobre las rutas y ciudades del Sahel y de la costa oriental.' },
      { author: 'Anónimo etíope', title: 'Kebra Nagast', year: 'siglo XIV', kind: 'primaria', note: 'Fundamento ideológico de la dinastía salomónica: descendencia de Salomón y traslado del Arca a Aksum.' },
      { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Única descripción de un testigo externo del imperio de Malí. Elogia la justicia y se escandaliza de la libertad de las mujeres.' },
      { author: 'Ibn Jaldún', title: 'Muqaddima y Kitab al-Ibar', year: 'c. 1377', kind: 'primaria', note: 'Información sobre las dinastías del Sahel y marco teórico sobre la formación de Estados en zonas de frontera.' },
      { author: 'Abraham Cresques', title: 'Atlas catalán', year: '1375', kind: 'primaria', note: 'Representa al mansa Musa entronizado con una pepita de oro. Entrada de Malí en la cartografía europea.' },
      { author: 'Afonso I del Kongo', title: 'Cartas a los reyes de Portugal', year: '1526', kind: 'primaria', note: 'Un soberano africano denuncia por escrito el efecto destructivo del comercio de esclavos sobre su propio reino.' },
      { author: 'León el Africano', title: 'Descripción de África', year: '1550', kind: 'primaria', note: 'Relato de un diplomático granadino cautivo en Roma. Fuente sobre Tombuctú y su comercio de libros.' },
      { author: 'Francisco Álvares', title: 'Verdadera información de las tierras del Preste Juan', year: '1540', kind: 'primaria', note: 'Crónica de la embajada portuguesa en Etiopía, con la primera descripción europea de Lalibela.' },
      { author: 'Abderrahmán al-Sadi', title: 'Tarij al-Sudan', year: 'c. 1655', kind: 'primaria', note: 'Crónica interna de los imperios del Níger escrita en Tombuctú. Fuente africana sobre el propio pasado africano.' },
      { author: 'Anónimo', title: 'Tarij al-Fattash', year: 'siglo XVII', kind: 'primaria', note: 'Segunda gran crónica de Tombuctú, con material administrativo y genealógico sobre Songhay.' },
      { author: 'Tradición oral mandinga', title: 'Epopeya de Sundiata', year: 'transmitida desde el siglo XIII', kind: 'primaria', note: 'Relato fundacional recitado por los jeli. Fuente sobre la cultura política del imperio más que sobre hechos datables.' },
      { author: 'Jan Vansina', title: 'La tradición oral como historia', year: '1961', kind: 'estudio', note: 'Establece el método crítico que convirtió la oralidad en fuente historiográfica reconocida.' },
      { author: 'Gertrude Caton-Thompson', title: 'The Zimbabwe Culture', year: '1931', kind: 'estudio', note: 'Excavación estratigráfica que demostró el origen africano medieval de Gran Zimbabue.' },
      { author: 'Basil Davidson', title: 'Madre negra: África, los años de prueba', year: '1961', kind: 'estudio', note: 'Divulgación pionera que llevó al gran público la existencia de una historia africana precolonial.' },
      { author: 'Walter Rodney', title: 'De cómo Europa subdesarrolló a África', year: '1972', kind: 'estudio', note: 'Formula la tesis del subdesarrollo inducido por la trata y el colonialismo. Texto de enorme influencia política.' },
      { author: 'Nehemia Levtzion y J. F. P. Hopkins', title: 'Corpus of Early Arabic Sources for West African History', year: '1981', kind: 'estudio', note: 'Compilación y traducción crítica de las fuentes árabes sobre el Sahel. Herramienta básica del campo.' },
      { author: 'John Thornton', title: 'África y los africanos en la formación del mundo atlántico', year: '1992', kind: 'estudio', note: 'Documenta el control africano de las condiciones del comercio costero antes del siglo XIX.' },
      { author: 'Christopher Ehret', title: 'The Civilizations of Africa', year: '2002', kind: 'estudio', note: 'Historia de largo plazo que combina lingüística histórica y arqueología para períodos sin documentos.' },
      { author: 'Unesco', title: 'Historia general de África', year: '1980–1993', kind: 'estudio', note: 'Obra colectiva en ocho volúmenes dirigida mayoritariamente por historiadores africanos.' },
      { author: 'François-Xavier Fauvelle', title: 'El rinoceronte de oro', year: '2013', kind: 'estudio', note: 'Reconstruye la Edad Media africana a partir de fragmentos documentales y arqueológicos, explicando el método.' },
      { author: 'Toby Green', title: 'Una historia fuera del oro', year: '2019', kind: 'estudio', note: 'Historia económica de África occidental y su moneda antes y durante la trata, con fuentes locales.' },
    ],
  },
  questions: [
    {
      id: 'africa-1', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué demostró la excavación de Jenne-Jeno en el delta interior del Níger?',
      options: [
        'Que la urbanización llegó al Sahel con el comercio islámico',
        'Que existían ciudades de miles de habitantes desde el siglo III, sin relación con estímulos externos',
        'Que el yacimiento fue construido por comerciantes fenicios',
        'Que la región estuvo despoblada hasta el siglo XI',
      ],
      answer: 1,
      explanation: 'La arqueología africana ha refutado por sí sola la tesis de que los Estados y las ciudades llegaron siempre de fuera.',
    },
    {
      id: 'africa-2', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué método propuso Jan Vansina para trabajar con tradición oral?',
      options: [
        'Descartarla salvo cuando coincida con fuentes escritas',
        'Aplicar una crítica análoga a la textual: género, cadena de transmisión, función social y deformaciones sistemáticas',
        'Registrarla sin intervención y publicarla literalmente',
        'Sustituirla por reconstrucciones lingüísticas',
      ],
      answer: 1,
      explanation: 'Los jeli o griots eran especialistas profesionales con formación y responsabilidad hereditaria, no narradores espontáneos.',
    },
    {
      id: 'africa-3', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué singularidad tuvo Aksum en el siglo IV?',
      options: [
        'Fue el primer Estado africano en adoptar el islam',
        'Su rey Ezana se convirtió al cristianismo, antes que la mayoría de Europa, y el reino acuñó moneda propia',
        'Fue conquistado por el imperio romano',
        'Careció de escritura propia hasta el siglo XII',
      ],
      answer: 1,
      explanation: 'Mani lo situó entre los cuatro grandes imperios del mundo, junto a Roma, Persia y China, y sus estelas están entre las mayores piedras talladas jamás erigidas.',
    },
    {
      id: 'africa-4', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué son las iglesias de Lalibela?',
      options: [
        'Basílicas construidas por misioneros portugueses en el siglo XVI',
        'Once templos excavados hacia abajo en la roca viva en los siglos XII y XIII, concebidos como una nueva Jerusalén',
        'Monasterios rupestres de origen copto egipcio',
        'Mezquitas reconvertidas tras la conquista cristiana',
      ],
      answer: 1,
      explanation: 'Se tallaron bajo la dinastía Zagüe, tras la caída de Jerusalén en manos musulmanas, con ventanas, columnas y sistemas de drenaje.',
    },
    {
      id: 'africa-5', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué función cumplía el Kebra Nagast en Etiopía?',
      options: [
        'Era un código legal aplicado por los tribunales',
        'Legitimaba a la dinastía salomónica haciéndola descender de Salomón y la reina de Saba',
        'Recogía la liturgia de la Iglesia etíope',
        'Narraba la conquista musulmana del siglo XVI',
      ],
      answer: 1,
      explanation: 'Es una construcción ideológica comparable a cualquier mito dinástico europeo, y funcionó durante setecientos años, hasta 1974.',
    },
    {
      id: 'africa-6', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué productos articulaban el comercio transahariano?',
      options: [
        'Cereales del norte y ganado del sur',
        'Sal del desierto y oro de las cuencas fluviales del sur, además de cobre, tejidos, libros y personas esclavizadas',
        'Especias índicas y porcelana china',
        'Marfil y madera de la selva ecuatorial',
      ],
      answer: 1,
      explanation: 'Los Estados del Sahel se enriquecieron gravando ese intercambio, transformado por el uso del camello.',
    },
    {
      id: 'africa-7', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué medida monetaria describe al-Bakri en el reino de Ghana?',
      options: [
        'La acuñación de moneda de oro con el nombre del rey',
        'El monopolio real sobre las pepitas, que garantizaba el valor del polvo de oro que circulaba como moneda',
        'La prohibición del uso del oro en el comercio interior',
        'La emisión de papel moneda respaldado por sal',
      ],
      answer: 1,
      explanation: 'Es política monetaria deliberada en el siglo XI, en un Estado que la historiografía europea describió durante siglos como tribal.',
    },
    {
      id: 'africa-8', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué valor tiene la tradición de Kurukan Fuga?',
      options: [
        'Es un documento escrito contemporáneo de la fundación de Malí',
        'Es una fuente sobre la cultura política del imperio, con reparto de funciones entre linajes y obligaciones del gobernante',
        'Es una crónica portuguesa del siglo XVI',
        'Es un tratado de derecho islámico maliki',
      ],
      answer: 1,
      explanation: 'Su valor como documento histórico literal es discutible; su valor como fuente sobre cómo se concebía el poder no lo es.',
    },
    {
      id: 'africa-9', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Por qué es valiosa la descripción de Malí que dejó Ibn Battuta?',
      options: [
        'Porque idealiza el imperio y confirma la tradición oral',
        'Porque no idealiza: elogia la seguridad y la justicia y se escandaliza de prácticas que le parecían impropias de musulmanes',
        'Porque es la única fuente escrita africana del período',
        'Porque describe con detalle las minas de oro del sur',
      ],
      answer: 1,
      explanation: 'Sus reproches revelan una sociedad que había integrado el islam sin renunciar a sus propias formas.',
    },
    {
      id: 'africa-10', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué fue Tombuctú en los siglos XV y XVI?',
      options: [
        'Una fortaleza militar sin población civil',
        'Un centro intelectual del mundo islámico con enseñanza superior y una industria del libro muy rentable',
        'Un puerto de la costa atlántica dedicado a la trata',
        'La capital administrativa del imperio de Malí',
      ],
      answer: 1,
      explanation: 'León el Africano escribió que allí los libros dejaban más beneficio que ninguna otra mercancía. Cientos de miles de manuscritos se conservan hoy en Malí.',
    },
    {
      id: 'africa-11', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Cómo cayó el imperio Songhay en 1591?',
      options: [
        'Por una revuelta interna de los askias',
        'Por la derrota en Tondibi ante un ejército saadí que cruzó el desierto con armas de fuego',
        'Por la conquista portuguesa desde la costa atlántica',
        'Por una sequía prolongada que despobló el Níger',
      ],
      answer: 1,
      explanation: 'Unos cuatro mil hombres con arcabuces y cañones vencieron a una fuerza mucho mayor sin armas de fuego. La conquista no produjo un imperio estable.',
    },
    {
      id: 'africa-12', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué han demostrado la arqueología y la lingüística sobre las ciudades swahilis?',
      options: [
        'Que fueron colonias árabes y persas implantadas sobre población africana',
        'Que son una civilización africana que adoptó el islam, con continuidad material desde asentamientos bantúes anteriores',
        'Que se fundaron tras la llegada de los portugueses',
        'Que no tuvieron relación con el comercio del índico',
      ],
      answer: 1,
      explanation: 'Los hallazgos de porcelana Song y Ming muestran el alcance de esa red, y una flota china llegó a Malindi en el siglo XV.',
    },
    {
      id: 'africa-13', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué era Gran Zimbabue?',
      options: [
        'Una fortaleza portuguesa del siglo XVI',
        'Una ciudad de hasta veinte mil habitantes con recintos de granito sin argamasa, construida entre los siglos XIII y XV',
        'Un santuario religioso sin población estable',
        'Un puerto comercial en la desembocadura del Zambeze',
      ],
      answer: 1,
      explanation: 'Su riqueza venía del ganado, del oro y del comercio con la costa, como prueban los hallazgos de vidrio persa y porcelana china en el yacimiento.',
    },
    {
      id: 'africa-14', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué ocurrió con la interpretación del origen de Gran Zimbabue?',
      options: [
        'Se resolvió pacíficamente en el siglo XIX a favor del origen africano',
        'Caton-Thompson demostró en 1929 que era obra africana medieval y la administración colonial siguió negándolo durante medio siglo',
        'La datación por radiocarbono resultó imposible por falta de materia orgánica',
        'Se atribuyó a los portugueses hasta la independencia del país',
      ],
      answer: 1,
      explanation: 'Peter Garlake lo confirmó después y fue presionado por el régimen de Rodesia. El país independiente tomó en 1980 el nombre del yacimiento.',
    },
    {
      id: 'africa-15', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Qué aporta la correspondencia de Afonso I del Kongo?',
      options: [
        'La primera descripción europea del interior africano',
        'Una voz africana contemporánea que denuncia por escrito el efecto destructivo del comercio de esclavos sobre su propio reino',
        'Un tratado comercial que prohibía la trata',
        'La crónica oficial de la conversión del reino al cristianismo',
      ],
      answer: 1,
      explanation: 'El Kongo mantuvo desde 1483 una relación diplomática con Portugal, con embajadas y correspondencia real conservada.',
    },
    {
      id: 'africa-16', era: 'Edad Media', topicId: 'africa', topic: 'Reinos africanos',
      question: '¿Cómo se relacionan las posiciones de Rodney y de Thornton sobre la trata?',
      options: [
        'Se excluyen: si hubo agencia africana no hubo daño estructural',
        'Son compatibles si se distingue entre quién decidía y quién sufría, y constatar la participación de élites no atenúa la responsabilidad de quien demandaba',
        'Ambas niegan efectos de largo plazo sobre las economías africanas',
        'Thornton sostiene que la trata no existió a gran escala',
      ],
      answer: 1,
      explanation: 'Nunn ha añadido una medición econométrica que correlaciona la intensidad de la trata por región con niveles actuales de renta y confianza social.',
    },
  ],
}
