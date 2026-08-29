import type { TopicModule } from '../types.ts'

export const japon: TopicModule = {
  topic: {
    id: 'japon',
    era: 'Edad Media',
    title: 'Japón: de Heian a Meiji',
    years: '794–1912',
    country: 'Japón',
    description: 'Mil años entre una corte aristocrática y una potencia industrial: el archipiélago que adoptó modelos ajenos sin ser conquistado nunca.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⛩',
    color: 'plum',
    summary:
      'Japón es el caso que obliga a revisar casi todas las generalizaciones sobre la historia mundial. Adoptó de China la escritura, el budismo y un modelo de Estado, y los transformó hasta hacerlos irreconocibles. Desarrolló durante seiscientos años un régimen de poder guerrero con un emperador que reinaba sin gobernar, una fórmula que ninguna otra sociedad reprodujo. Pasó dos siglos y medio bajo un régimen que restringió severamente los contactos exteriores y que, lejos de estancarse, alcanzó tasas de alfabetización, urbanización y comercio interior comparables a las europeas. Y cuando la presión occidental llegó en 1853, en lugar de ser colonizado ejecutó en tres décadas la transformación más rápida que se conoce, hasta convertirse él mismo en potencia imperial. Explicar cómo ocurrió eso es una de las preguntas más productivas de la historia global.',
    keyDates: [
      { date: '794', event: 'La corte se traslada a Heian, la actual Kioto. Comienza el período clásico aristocrático.' },
      { date: 'siglos X–XI', event: 'Dominio de la familia Fujiwara sobre la corte mediante regencias y alianzas matrimoniales.' },
      { date: 'c. 1008', event: 'Murasaki Shikibu escribe el Genji monogatari, una de las primeras novelas psicológicas del mundo.' },
      { date: '1185–1192', event: 'Victoria de los Minamoto y creación del shogunato de Kamakura. El poder efectivo pasa a los guerreros.' },
      { date: '1274 y 1281', event: 'Dos invasiones mongolas fracasan, en parte por tifones que la tradición llamará vientos divinos.' },
      { date: '1467–1477', event: 'Guerra Onin. Kioto es destruida y comienza el siglo de los Estados en guerra.' },
      { date: '1543 y 1549', event: 'Llegada de armas de fuego portuguesas y de la misión jesuita de Francisco Javier.' },
      { date: '1582–1600', event: 'Unificación por Oda Nobunaga, Toyotomi Hideyoshi y Tokugawa Ieyasu, que vence en Sekigahara.' },
      { date: '1603–1639', event: 'Shogunato Tokugawa, prohibición del cristianismo y edictos que restringen los contactos exteriores.' },
      { date: '1720–1850', event: 'Estudios holandeses, expansión editorial y alfabetización amplia bajo una paz de dos siglos y medio.' },
      { date: '1853–1854', event: 'Llegada de la escuadra de Perry y Tratado de Kanagawa. Comienza el bakumatsu.' },
      { date: '1868', event: 'Restauración Meiji: caída del shogunato y Carta del Juramento de los Cinco Artículos.' },
      { date: '1889–1905', event: 'Constitución Meiji, victoria sobre China en 1895 y sobre Rusia en 1905.' },
    ],
    sections: [
      {
        title: 'Heian: una corte y un Estado que se deshace',
        body: [
          'El Estado japonés del siglo VIII se construyó copiando el modelo chino Tang: códigos legales llamados ritsuryō, una burocracia de rangos, un catastro que asignaba tierra a los campesinos y un budismo patrocinado por la corte. La copia fue deliberada y selectiva. Dos elementos centrales del modelo chino no se importaron: los exámenes como vía de acceso al cargo, que en Japón quedaron subordinados al linaje, y el mandato del Cielo, que habría permitido derribar a la dinastía. El emperador japonés no gobierna por virtud sino por descendencia divina, y por eso ninguna dinastía lo ha sustituido.',
          'El traslado de la capital a Heian en 794 abrió cuatro siglos de dominio aristocrático. En la práctica, el Estado ritsuryō se desmontó desde dentro: las tierras públicas se convirtieron en shōen, dominios privados exentos de impuestos vinculados a templos y familias nobles, y el poder efectivo pasó a la familia Fujiwara, que gobernó mediante regencias y casando a sus hijas con emperadores sucesivos. El emperador siguió siendo la fuente de legitimidad mientras otros ejercían el poder: la fórmula se repetiría durante mil años con actores distintos.',
          'La cultura de esa corte es uno de los momentos más singulares de la historia literaria. Las mujeres de la aristocracia, excluidas de la escritura china que usaban los hombres para los asuntos serios, escribieron en la silábica kana y produjeron la obra mayor del período: el Genji monogatari de Murasaki Shikibu, una novela de más de mil páginas sobre la psicología, el deseo y el paso del tiempo, y el Libro de la almohada de Sei Shōnagon.',
          'Mientras la corte refinaba su estética, en las provincias crecía otra cosa. Los propietarios de shōen necesitaban hombres armados para proteger sus tierras y cobrar sus rentas, y de ahí salieron los grupos guerreros que las fuentes llaman bushi. No eran una casta cerrada ni un producto de la corte, sino una élite provincial armada que fue acumulando poder militar mientras la capital dejaba de tener ejército propio.',
          'El desenlace llegó a finales del siglo XII con la guerra Genpei entre los clanes Taira y Minamoto, narrada en el Heike monogatari con un tono de melancolía budista sobre la caída de los poderosos. La victoria de Minamoto no Yoritomo en 1185 y su nombramiento como shōgun en 1192 crearon un poder militar con sede en Kamakura, lejos de Kioto, que gobernaba en nombre de un emperador que conservaba el trono. Ese doble sistema es la clave institucional de la historia japonesa.',
        ].join('\n\n'),
        callout:
          'Japón importó de China la escritura, el budismo y el modelo de Estado, y dejó fuera precisamente las dos piezas que habrían permitido cambiar de dinastía: los exámenes y el mandato del Cielo.',
      },
      {
        title: 'Seis siglos de poder guerrero',
        body: [
          'El shogunato de Kamakura gobernó mediante vasallos, recompensas en tierra y un derecho propio, el código Jōei de 1232, que aplicaba criterios prácticos en vez de los códigos cortesanos. Su prueba mayor fueron las dos invasiones mongolas de 1274 y 1281, repelidas con enormes fortificaciones costeras y con la ayuda de dos tifones que la tradición posterior llamó vientos divinos. La victoria arruinó al régimen: no hubo tierras conquistadas con las que pagar a los vasallos movilizados.',
          'El shogunato Ashikaga, desde 1336 y con sede en el barrio de Muromachi de Kioto, fue mucho más débil pero culturalmente decisivo. En su época se formaron el teatro nō, la ceremonia del té, el jardín seco, la pintura a tinta y el budismo zen como estética de élite, en gran medida por contacto con la China Ming. También fue el período en que el poder real se desplazó a los gobernadores provinciales.',
          'La guerra Onin, entre 1467 y 1477, destruyó Kioto y abrió el sengoku, el siglo de los Estados en guerra. El país se fragmentó en dominios gobernados por daimyō que legislaban, recaudaban, construían castillos y competían militarmente. Fue una época de destrucción y a la vez de crecimiento: los daimyō promovían roturaciones, minas, mercados y rutas para financiar sus ejércitos, y aparecieron ciudades libres de comerciantes como Sakai.',
          'La llegada de portugueses en 1543 introdujo el arcabuz, que los talleres japoneses copiaron y produjeron en masa con extraordinaria rapidez, y en 1549 la misión jesuita de Francisco Javier. El cristianismo llegó a tener varios cientos de miles de fieles y el apoyo de algunos daimyō del sur, interesados también en el comercio. Su prohibición posterior no fue un rechazo cultural abstracto: los unificadores vieron una lealtad exterior incompatible con el orden que estaban construyendo.',
          'La unificación la ejecutaron tres hombres en medio siglo. Oda Nobunaga rompió el poder de los monasterios armados y usó la infantería con armas de fuego a gran escala; Toyotomi Hideyoshi, de origen campesino, completó la conquista, separó por decreto a guerreros y campesinos mediante la requisa de armas y ordenó un catastro nacional; Tokugawa Ieyasu venció en Sekigahara en 1600 y recibió el título de shōgun en 1603. Las dos invasiones de Corea lanzadas por Hideyoshi en la década de 1590 fueron un desastre y la última aventura exterior japonesa en dos siglos y medio.',
        ].join('\n\n'),
      },
      {
        title: 'El orden Tokugawa',
        body: [
          'El régimen Tokugawa organizó el país en unos doscientos sesenta dominios o han, con daimyō que gobernaban internamente y un shogunato que controlaba las ciudades clave, la moneda, la política exterior y las relaciones entre dominios. La pieza de control más eficaz fue el sankin-kōtai: la obligación de que cada daimyō residiera en años alternos en Edo y dejara allí a su familia. El sistema funcionaba como rehén institucionalizado y, de paso, creó una red de carreteras, posadas y consumo urbano que integró la economía nacional.',
          'La sociedad se ordenó teóricamente en cuatro estamentos, guerreros, campesinos, artesanos y comerciantes, con el neoconfucianismo como marco justificativo. La práctica se apartó pronto del esquema. Los samuráis, sin guerras que librar, se convirtieron en funcionarios asalariados y con frecuencia endeudados; los comerciantes de Osaka, situados en el escalón más bajo, acumularon una riqueza que financiaba a los dominios; y en las ciudades floreció una cultura urbana propia, con teatro kabuki, novela popular y estampa ukiyo-e.',
          'Edo llegó a superar el millón de habitantes hacia 1720 y era probablemente la ciudad más grande del mundo. La alfabetización creció con una red de escuelas de templo, y a comienzos del siglo XIX una proporción alta de varones y una parte considerable de mujeres sabían leer, con una industria editorial de préstamo de libros que no tenía equivalente fuera de Europa occidental. La agricultura se intensificó con abonos comerciales y cultivos de mercado, y la población se estabilizó en torno a los treinta millones mediante mecanismos de control demográfico dentro de la familia.',
          'La política de sakoku, el país cerrado, se estableció entre 1633 y 1639 tras la rebelión de Shimabara: prohibición del cristianismo, expulsión de los portugueses, prohibición a los japoneses de salir del país bajo pena de muerte. Ronald Toby demostró que la etiqueta induce a error: el archipiélago mantuvo cuatro puertas abiertas y reguladas, con los neerlandeses en Deshima, los chinos en Nagasaki, Corea a través de Tsushima y los ainu y Ryukyu por otros dominios. No fue aislamiento, sino monopolio estatal de las relaciones exteriores.',
          'Por la rendija de Deshima entraron los estudios holandeses o rangaku. Médicos japoneses tradujeron manuales de anatomía europeos y comprobaron su exactitud con disecciones; se estudió astronomía, cartografía, botánica y balística. Cuando llegaron los barcos estadounidenses, había en Japón un grupo pequeño pero real de personas que sabían lo que estaba ocurriendo en el mundo, y esa preparación previa forma parte de la explicación de lo que vino después.',
        ].join('\n\n'),
        callout:
          'La palabra sakoku no aparece hasta 1801, en la traducción de un texto europeo. El régimen no se veía a sí mismo como cerrado, sino como titular exclusivo de unas relaciones exteriores estrictamente reguladas.',
      },
      {
        title: 'La crisis del bakumatsu y la Restauración',
        body: [
          'La escuadra del comodoro Perry llegó en 1853 con buques de vapor y la exigencia de abrir puertos. El shogunato, sin capacidad militar para negarse, firmó el Tratado de Kanagawa en 1854 y después acuerdos comerciales que incluían aranceles fijados desde fuera y extraterritorialidad para los extranjeros, es decir, el mismo esquema impuesto a China. La diferencia estuvo en la reacción interna.',
          'La crisis desató quince años de conflicto conocidos como bakumatsu. Contra la humillación se formó un movimiento con la consigna de venerar al emperador y expulsar a los bárbaros, alimentado por la escuela de estudios nacionales kokugaku, que llevaba décadas reivindicando una tradición japonesa anterior a la influencia china. Los dominios de Satsuma y Chōshū, en el suroeste, tras comprobar en combate directo la superioridad naval occidental, cambiaron de estrategia: dejaron de querer expulsar a los extranjeros y decidieron adquirir su tecnología para poder resistirlos.',
          'En 1868, una coalición de esos dominios derribó al shogunato en una guerra civil breve y proclamó la restauración del gobierno directo del emperador Meiji, un adolescente. La palabra restauración es exacta en su forma y engañosa en su fondo: se presentó como retorno a un orden antiguo y fue una revolución dirigida desde arriba por samuráis de rango medio que desmontaron su propia clase.',
          'El programa se anunció en la Carta del Juramento de los Cinco Artículos y se ejecutó con una velocidad asombrosa. En 1871 los dominios fueron abolidos y sustituidos por prefecturas; los estipendios de los samuráis se convirtieron en bonos y después se liquidaron; se estableció el servicio militar obligatorio, que acabó con el monopolio guerrero; se implantó un impuesto sobre la tierra pagadero en dinero, la educación primaria universal en 1872 y un sistema bancario y postal. La rebelión de Satsuma de 1877, aplastada por un ejército de reclutas campesinos, cerró la resistencia samurái.',
          'La consigna era enriquecer el país y fortalecer el ejército. El Estado creó industrias piloto y después las vendió a grupos privados que se convertirían en los zaibatsu; envió misiones al extranjero, como la misión Iwakura, para estudiar sistemas educativos, jurídicos y militares; contrató expertos extranjeros con la instrucción explícita de formar sustitutos japoneses. La Constitución de 1889, inspirada en el modelo prusiano, estableció una dieta electa con poderes limitados y un emperador sagrado e inviolable, y el Rescripto sobre la Educación de 1890 formuló una ideología de lealtad que se enseñó en todas las escuelas.',
        ].join('\n\n'),
      },
      {
        title: 'Qué explica el caso japonés',
        body: [
          'Los resultados llegaron pronto y fueron ambivalentes. Japón derrotó a China en 1895 y se anexionó Taiwán, venció a Rusia en 1905 en la primera derrota de una potencia europea por un Estado asiático en la era moderna, anexionó Corea en 1910 y consiguió el fin de los tratados desiguales en 1911. Se convirtió en modelo para nacionalistas de toda Asia y, a la vez, en potencia colonial con las mismas prácticas que había sufrido.',
          'La pregunta de por qué Japón lo consiguió y otros no admite varias respuestas complementarias. Una es institucional: el país tenía ya un Estado centralizado con capacidad fiscal, una red de comunicaciones, una élite letrada y una experiencia de gobierno en dominios que se reconvirtió en administración nacional. Otra es económica: la agricultura comercial, la alfabetización y los mercados internos de la época Tokugawa proporcionaron una base que no había que crear desde cero. Thomas Smith documentó esa continuidad frente a la idea de que Meiji partió de la nada.',
          'Una tercera es geopolítica y de calendario: Japón se abrió cuando las potencias estaban ocupadas en China y en otros escenarios, carecía de recursos que justificaran una conquista costosa y dispuso de dos décadas de margen. Y una cuarta es de decisión política: la élite que tomó el poder en 1868 optó por transformar el país en lugar de defender su posición dentro del viejo orden, lo que exigía disolver el estamento del que ella misma procedía.',
          'La historiografía discute cómo calificar 1868. La tradición marxista japonesa lo trató como una revolución burguesa incompleta que dejó intactos elementos feudales; otros lo han descrito como una revolución desde arriba comparable a la unificación alemana; y hay quien subraya la continuidad con las tendencias tardías del período Tokugawa y niega el corte. La discusión importa porque de ella depende cómo se explica el militarismo posterior.',
          'También se discute el propio vocabulario. Llamar feudal a Japón fue durante mucho tiempo una comparación con Europa que Marc Bloch admitió y que después se ha matizado: la relación de vasallaje, el beneficio en tierra y la fragmentación del poder existieron, pero el papel del emperador, la ausencia de Iglesia autónoma y la fuerza de la burocracia guerrera hacen del caso japonés algo distinto. Y el bushidō como código coherente de honor guerrero es en gran medida una construcción de época Tokugawa y sobre todo Meiji, cuando ya no había guerra que librar.',
        ].join('\n\n'),
        callout:
          'El bushidō que se cita como esencia inmemorial del samurái se codificó cuando los samuráis llevaban siglos sin combatir, y se popularizó fuera de Japón con un libro escrito en inglés en 1900 para un público occidental.',
      },
    ],
    concepts: [
      { term: 'Ritsuryō', definition: 'Sistema de códigos legales y administrativos del siglo VIII copiado del modelo Tang. Se desmontó desde dentro con la privatización de las tierras.' },
      { term: 'Shōen', definition: 'Dominio privado exento de impuestos vinculado a templos o familias nobles. Su expansión vació de recursos al Estado central de Heian.' },
      { term: 'Bushi', definition: 'Guerreros de origen provincial surgidos de la necesidad de proteger y cobrar los shōen. No fueron una creación de la corte.' },
      { term: 'Shogunato', definition: 'Gobierno militar que ejerce el poder efectivo en nombre de un emperador que conserva la legitimidad. Fórmula institucional característica de Japón.' },
      { term: 'Sengoku', definition: 'Siglo de los Estados en guerra, entre 1467 y 1600: fragmentación en dominios, castillos y competencia militar, con crecimiento económico simultáneo.' },
      { term: 'Daimyō', definition: 'Señor de un dominio con capacidad de legislar, recaudar y mantener ejército propio, bajo la autoridad general del shogunato.' },
      { term: 'Separación de estamentos', definition: 'Medida de Hideyoshi que requisó las armas de los campesinos y fijó la frontera entre guerreros y productores, base del orden social Tokugawa.' },
      { term: 'Sankin-kōtai', definition: 'Obligación de residencia alterna de los daimyō en Edo dejando allí a su familia. Control político que además integró la economía nacional.' },
      { term: 'Sakoku', definition: 'Política de restricción de contactos exteriores desde 1639. Más que aislamiento fue un monopolio estatal de unas relaciones exteriores reguladas.' },
      { term: 'Rangaku', definition: 'Estudios holandeses: medicina, astronomía, cartografía y balística europeas aprendidas por la rendija comercial de Deshima.' },
      { term: 'Kokugaku', definition: 'Escuela de estudios nacionales que reivindicaba una tradición japonesa anterior a la influencia china. Base intelectual del movimiento imperial de 1868.' },
      { term: 'Bakumatsu', definition: 'Últimos quince años del shogunato, entre 1853 y 1868: tratados desiguales, conflicto interno y reorientación estratégica de los dominios del suroeste.' },
      { term: 'Fukoku kyōhei', definition: 'Consigna Meiji de enriquecer el país y fortalecer el ejército. Resume el programa de transformación dirigida desde el Estado.' },
      { term: 'Zaibatsu', definition: 'Grandes grupos empresariales familiares formados al comprar al Estado las industrias piloto creadas en los primeros años Meiji.' },
    ],
    debates: [
      {
        question: '¿Tiene sentido llamar feudal al Japón medieval?',
        positions: [
          {
            school: 'Comparación válida (Bloch; Hall)',
            argument:
              'Existieron vasallaje personal, concesión de tierra a cambio de servicio militar y fragmentación de la autoridad pública, que son los rasgos definitorios del modelo europeo.',
          },
          {
            school: 'Categoría engañosa (Friday y otros)',
            argument:
              'El emperador nunca fue desplazado, no hubo una Iglesia con poder autónomo y la administración guerrera fue mucho más burocrática de lo que sugiere la analogía. El término importa un marco europeo que oculta lo específico.',
          },
        ],
        state:
          'Se usa hoy con cautela y entrecomillado. La discusión ha resultado útil sobre todo para revisar el propio concepto de feudalismo en Europa.',
      },
      {
        question: '¿Estuvo Japón realmente aislado entre 1639 y 1853?',
        positions: [
          {
            school: 'Aislamiento (lectura tradicional)',
            argument:
              'La prohibición del cristianismo, la expulsión de los europeos y la pena de muerte para quien saliera del país cortaron el contacto exterior durante dos siglos y explican el atraso técnico frente a Occidente.',
          },
          {
            school: 'Cuatro puertas reguladas (Toby, 1984)',
            argument:
              'Neerlandeses en Deshima, chinos en Nagasaki, Corea vía Tsushima y los ainu y Ryukyu por otros dominios mantuvieron comercio, información y diplomacia. Fue monopolio estatal de las relaciones exteriores, no ausencia de ellas.',
          },
        ],
        state:
          'La revisión de Toby es hoy la posición estándar. La palabra sakoku ni siquiera se usaba en la época: aparece en 1801 traduciendo un texto europeo.',
      },
      {
        question: '¿Fue 1868 una restauración, una revolución o una continuidad?',
        positions: [
          {
            school: 'Revolución desde arriba',
            argument:
              'Una élite de samuráis de rango medio abolió los dominios, liquidó los estipendios de su propia clase, implantó el servicio militar obligatorio y reorganizó el Estado en menos de una década.',
          },
          {
            school: 'Revolución burguesa incompleta (historiografía marxista japonesa)',
            argument:
              'El cambio no eliminó las estructuras agrarias ni el poder de las viejas élites, y la Constitución de 1889 consagró un autoritarismo que explica la deriva militarista posterior.',
          },
          {
            school: 'Continuidad Tokugawa (Smith; Totman)',
            argument:
              'La alfabetización, la agricultura comercial, los mercados internos y la capacidad administrativa ya existían. Meiji no partió de cero: aceleró y reorientó tendencias en marcha.',
          },
        ],
        state:
          'Predomina una lectura que combina la continuidad de las bases materiales con el carácter deliberadamente revolucionario de las decisiones políticas de 1868 a 1877.',
      },
    ],
    sources: [
      { author: 'Murasaki Shikibu', title: 'La historia de Genji', year: 'c. 1008', kind: 'primaria', note: 'Novela de la corte de Heian escrita en kana por una dama al servicio de la emperatriz. Retrato interior de una élite.' },
      { author: 'Sei Shōnagon', title: 'El libro de la almohada', year: 'c. 1002', kind: 'primaria', note: 'Anotaciones, listas y juicios de una dama de corte. Fuente insustituible sobre sensibilidad y vida cotidiana aristocrática.' },
      { author: 'Anónimo', title: 'Heike monogatari', year: 'siglo XIII', kind: 'primaria', note: 'Épica recitada sobre la guerra Genpei, con la caída de los poderosos como tema budista central.' },
      { author: 'Shogunato de Kamakura', title: 'Código Jōei', year: '1232', kind: 'primaria', note: 'Derecho propio de los guerreros, con criterios prácticos frente a los códigos cortesanos.' },
      { author: 'Toyotomi Hideyoshi', title: 'Edicto de requisa de espadas', year: '1588', kind: 'primaria', note: 'Separación jurídica de guerreros y campesinos, base del orden social de los dos siglos siguientes.' },
      { author: 'Shogunato Tokugawa', title: 'Buke shohatto', year: '1615', kind: 'primaria', note: 'Leyes para las casas guerreras: control de castillos, matrimonios y conducta de los daimyō.' },
      { author: 'Sugita Genpaku', title: 'Kaitai shinsho y memorias del rangaku', year: '1774 y 1815', kind: 'primaria', note: 'Traducción de un manual de anatomía holandés y relato del proceso. Documento del contacto científico durante el sakoku.' },
      { author: 'Yamamoto Tsunetomo', title: 'Hagakure', year: 'c. 1716', kind: 'primaria', note: 'Reflexiones de un samurái sin guerra sobre la muerte y el servicio. Fuente sobre la codificación tardía del ideal guerrero.' },
      { author: 'Japón y Estados Unidos', title: 'Tratado de Kanagawa', year: '1854', kind: 'primaria', note: 'Primer acuerdo impuesto tras la llegada de Perry. Inicio de la serie de tratados desiguales.' },
      { author: 'Gobierno Meiji', title: 'Carta del Juramento de los Cinco Artículos', year: '1868', kind: 'primaria', note: 'Programa inicial del nuevo régimen: asambleas deliberantes y búsqueda del conocimiento en todo el mundo.' },
      { author: 'Fukuzawa Yukichi', title: 'Autobiografía y Estímulo al aprendizaje', year: '1872–1899', kind: 'primaria', note: 'Voz del principal divulgador del pensamiento occidental en Japón y fundador de una universidad.' },
      { author: 'Imperio del Japón', title: 'Constitución Meiji', year: '1889', kind: 'primaria', note: 'Modelo prusiano: dieta electa con poderes limitados y emperador sagrado e inviolable como fuente de soberanía.' },
      { author: 'Gobierno Meiji', title: 'Rescripto Imperial sobre la Educación', year: '1890', kind: 'primaria', note: 'Texto de lealtad y piedad filial leído en todas las escuelas. Núcleo de la ideología oficial hasta 1945.' },
      { author: 'Nitobe Inazō', title: 'Bushido, el alma de Japón', year: '1900', kind: 'primaria', note: 'Escrito en inglés para lectores occidentales. Fuente de la imagen internacional del samurái y no descripción histórica.' },
      { author: 'John Whitney Hall', title: 'El imperio japonés', year: '1968', kind: 'estudio', note: 'Síntesis clásica que estableció el marco de la historiografía occidental sobre Japón.' },
      { author: 'Thomas C. Smith', title: 'The Agrarian Origins of Modern Japan', year: '1959', kind: 'estudio', note: 'Documenta la agricultura comercial y la base económica Tokugawa sobre la que se construyó Meiji.' },
      { author: 'Ronald Toby', title: 'State and Diplomacy in Early Modern Japan', year: '1984', kind: 'estudio', note: 'Desmonta la idea del aislamiento total y describe las cuatro vías reguladas de contacto exterior.' },
      { author: 'Conrad Totman', title: 'A History of Japan', year: '2000', kind: 'estudio', note: 'Historia general con atención al medio ambiente, los recursos y la demografía.' },
      { author: 'Eiko Ikegami', title: 'The Taming of the Samurai', year: '1995', kind: 'estudio', note: 'Sociología histórica de la transformación del guerrero en funcionario y de la construcción del honor.' },
      { author: 'Marius Jansen', title: 'The Making of Modern Japan', year: '2000', kind: 'estudio', note: 'Síntesis de referencia sobre el período que va de los Tokugawa al siglo XX.' },
      { author: 'Andrew Gordon', title: 'A Modern History of Japan', year: '2003', kind: 'estudio', note: 'Manual actual desde el bakumatsu, con atención a trabajo, género y vida cotidiana.' },
      { author: 'Carol Gluck', title: 'Japans Modern Myths', year: '1985', kind: 'estudio', note: 'Analiza la construcción deliberada de la ideología nacional en el último período Meiji.' },
    ],
  },
  questions: [
    {
      id: 'japon-1', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué dos elementos del modelo chino no importó Japón?',
      options: [
        'La escritura y el budismo',
        'Los exámenes como vía de acceso al cargo y el mandato del Cielo',
        'El catastro y los códigos legales',
        'La burocracia de rangos y el patrocinio religioso',
      ],
      answer: 1,
      explanation: 'Sin mandato del Cielo no hay doctrina que autorice a sustituir a la dinastía: el emperador japonés reina por descendencia divina y ninguna otra casa lo ha reemplazado.',
    },
    {
      id: 'japon-2', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué fueron los shōen y qué efecto tuvieron?',
      options: [
        'Guarniciones militares provinciales que reforzaron el poder central',
        'Dominios privados exentos de impuestos que vaciaron de recursos al Estado de Heian',
        'Escuelas de formación de funcionarios',
        'Puertos abiertos al comercio con China',
      ],
      answer: 1,
      explanation: 'Sus propietarios necesitaban hombres armados para protegerlos y cobrar rentas, y de ahí salieron los grupos guerreros que acabaron gobernando.',
    },
    {
      id: 'japon-3', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Por qué escribieron en kana las autoras de la corte de Heian?',
      options: [
        'Porque el kana era la escritura oficial del Estado',
        'Porque estaban excluidas de la escritura china, reservada a los asuntos serios de los hombres',
        'Porque el chino no permitía expresar poesía',
        'Porque lo ordenó la familia Fujiwara',
      ],
      answer: 1,
      explanation: 'De esa exclusión salieron el Genji monogatari y el Libro de la almohada, las obras mayores del período.',
    },
    {
      id: 'japon-4', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Por qué arruinó al shogunato de Kamakura la victoria sobre los mongoles?',
      options: [
        'Porque las fortificaciones costeras se destruyeron en los tifones',
        'Porque no hubo tierras conquistadas con las que recompensar a los vasallos movilizados',
        'Porque perdió el apoyo del emperador',
        'Porque los mongoles impusieron un tributo anual',
      ],
      answer: 1,
      explanation: 'El sistema se sostenía sobre la concesión de tierra a cambio de servicio, y una guerra defensiva no genera botín territorial.',
    },
    {
      id: 'japon-5', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué caracterizó al período sengoku?',
      options: [
        'Un cierre completo del país al comercio exterior',
        'Fragmentación en dominios en guerra y, a la vez, crecimiento económico impulsado por los daimyō para financiar sus ejércitos',
        'La restauración del gobierno directo del emperador',
        'El dominio de los monasterios budistas sobre todo el territorio',
      ],
      answer: 1,
      explanation: 'Hubo roturaciones, minas, mercados, castillos y ciudades libres de comerciantes como Sakai.',
    },
    {
      id: 'japon-6', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Por qué prohibieron los unificadores el cristianismo?',
      options: [
        'Por incompatibilidad doctrinal con el budismo zen',
        'Porque veían en él una lealtad exterior incompatible con el orden político que estaban construyendo',
        'Porque los misioneros se negaban a comerciar',
        'Porque lo exigieron los comerciantes neerlandeses',
      ],
      answer: 1,
      explanation: 'El cristianismo llegó a tener varios cientos de miles de fieles y el apoyo de daimyō del sur interesados también en el comercio.',
    },
    {
      id: 'japon-7', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué hizo Hideyoshi con la requisa de armas de 1588?',
      options: [
        'Desarmó a los daimyō rivales',
        'Separó jurídicamente a guerreros y campesinos, fijando la base del orden social Tokugawa',
        'Prohibió la fabricación de armas de fuego',
        'Creó un ejército nacional de reclutas',
      ],
      answer: 1,
      explanation: 'Ordenó además un catastro nacional. Sus dos invasiones de Corea en la década de 1590 fueron un desastre y la última aventura exterior en siglos.',
    },
    {
      id: 'japon-8', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué función tenía el sankin-kōtai?',
      options: [
        'Recaudar el impuesto sobre la tierra en los dominios',
        'Obligar a los daimyō a residir en años alternos en Edo dejando allí a su familia, como control político',
        'Rotar a los gobernadores de las ciudades del shogunato',
        'Organizar el comercio con los neerlandeses',
      ],
      answer: 1,
      explanation: 'Funcionaba como rehén institucionalizado y, de paso, creó una red de carreteras, posadas y consumo urbano que integró la economía nacional.',
    },
    {
      id: 'japon-9', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué ocurrió con el orden estamental teórico durante el período Tokugawa?',
      options: [
        'Se aplicó con rigidez completa durante dos siglos y medio',
        'Se apartó pronto de la práctica: samuráis convertidos en funcionarios endeudados y comerciantes de Osaka con gran riqueza',
        'Desapareció tras la rebelión de Shimabara',
        'Se sustituyó por un sistema de castas hereditarias cerradas',
      ],
      answer: 1,
      explanation: 'En las ciudades floreció además una cultura urbana propia con kabuki, novela popular y estampa ukiyo-e.',
    },
    {
      id: 'japon-10', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué demostró Ronald Toby sobre la política de sakoku?',
      options: [
        'Que el aislamiento fue aún más estricto de lo que se creía',
        'Que hubo cuatro vías reguladas de contacto y que se trató de un monopolio estatal de las relaciones exteriores, no de su ausencia',
        'Que el comercio con Europa continuó sin restricciones',
        'Que la prohibición nunca llegó a aplicarse',
      ],
      answer: 1,
      explanation: 'Neerlandeses en Deshima, chinos en Nagasaki, Corea vía Tsushima y los ainu y Ryukyu por otros dominios. La palabra sakoku ni siquiera se usaba entonces.',
    },
    {
      id: 'japon-11', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué fue el rangaku y por qué importa?',
      options: [
        'Una escuela de artes marciales para samuráis sin guerra',
        'Los estudios holandeses de medicina, astronomía y balística, que dejaron un grupo de japoneses informados sobre el mundo antes de 1853',
        'La doctrina neoconfuciana oficial del shogunato',
        'El sistema de escuelas de templo para la alfabetización popular',
      ],
      answer: 1,
      explanation: 'Médicos japoneses tradujeron manuales de anatomía europeos y comprobaron su exactitud con disecciones.',
    },
    {
      id: 'japon-12', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Cómo cambió la estrategia de Satsuma y Chōshū durante el bakumatsu?',
      options: [
        'Pasaron de apoyar al shogunato a defenderlo militarmente',
        'Pasaron de querer expulsar a los extranjeros a adquirir su tecnología para poder resistirlos',
        'Renunciaron a la restauración imperial',
        'Se aliaron con Rusia contra Estados Unidos',
      ],
      answer: 1,
      explanation: 'El cambio se produjo tras comprobar en combate directo la superioridad naval occidental.',
    },
    {
      id: 'japon-13', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Por qué es engañoso llamar restauración a lo ocurrido en 1868?',
      options: [
        'Porque el emperador no llegó a recuperar el trono',
        'Porque se presentó como retorno a un orden antiguo y fue una revolución dirigida desde arriba por samuráis que desmontaron su propia clase',
        'Porque el shogunato siguió gobernando hasta 1877',
        'Porque no cambió la estructura administrativa del país',
      ],
      answer: 1,
      explanation: 'En una década se abolieron los dominios, se liquidaron los estipendios samuráis y se implantó el servicio militar obligatorio.',
    },
    {
      id: 'japon-14', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué modelo siguió la Constitución Meiji de 1889?',
      options: [
        'El británico, con un gabinete responsable ante el Parlamento',
        'El prusiano: dieta electa con poderes limitados y emperador sagrado e inviolable',
        'El estadounidense, con separación estricta de poderes',
        'El francés de la Tercera República',
      ],
      answer: 1,
      explanation: 'El Rescripto sobre la Educación de 1890 completó el marco con una ideología de lealtad enseñada en todas las escuelas.',
    },
    {
      id: 'japon-15', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: 'Según Thomas Smith, ¿qué base heredó el Japón Meiji del período Tokugawa?',
      options: [
        'Un ejército moderno ya organizado',
        'Agricultura comercial, alfabetización amplia, mercados internos y capacidad administrativa',
        'Una industria pesada en funcionamiento',
        'Un sistema bancario de crédito internacional',
      ],
      answer: 1,
      explanation: 'Meiji no partió de cero: aceleró y reorientó tendencias que llevaban un siglo en marcha.',
    },
    {
      id: 'japon-16', era: 'Edad Media', topicId: 'japon', topic: 'Japón: de Heian a Meiji',
      question: '¿Qué hay que tener en cuenta al usar el término bushidō?',
      options: [
        'Que es un código escrito del siglo XII conservado íntegramente',
        'Que se codificó cuando los samuráis llevaban siglos sin combatir y se popularizó con un libro escrito en inglés en 1900',
        'Que fue una invención de los misioneros jesuitas',
        'Que solo se aplicaba a los daimyō y no a sus vasallos',
      ],
      answer: 1,
      explanation: 'Como categoría de análisis exige la misma cautela que llamar feudal a Japón: ambas importan marcos que ocultan lo específico del caso.',
    },
  ],
}
