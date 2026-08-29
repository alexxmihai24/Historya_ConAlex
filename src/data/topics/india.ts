import type { TopicModule } from '../types.ts'

export const india: TopicModule = {
  topic: {
    id: 'india',
    era: 'Edad Media',
    title: 'India: de los Mauryas a los mogoles',
    years: '322 a. C.–1707',
    country: 'India',
    description: 'Dos mil años de imperios, religiones y comercio en un subcontinente que casi nunca estuvo unificado y que sin embargo produjo una civilización reconocible.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '☸',
    color: 'gold',
    summary:
      'La historia del subcontinente indio se cuenta mal cuando se busca en ella una sucesión de imperios unificadores al modo chino. Lo característico es lo contrario: períodos imperiales relativamente breves, Mauryas, Guptas, Delhi, mogoles, intercalados con largas etapas de fragmentación regional en las que se produjo buena parte de la creación cultural. Sobre ese suelo político inestable se construyó una civilización de enorme densidad: el budismo y el jainismo, la matemática del cero y del sistema decimal, la poesía sánscrita y las literaturas vernáculas, la arquitectura de templos del sur, el encuentro con el islam que produjo desde el sufismo indio hasta el Taj Mahal, y una economía que en el siglo XVII generaba en torno a la cuarta parte del producto mundial. Estudiarla exige además desmontar dos herencias: la periodización colonial en épocas hindú, musulmana y británica, y la lectura de la casta como institución inmemorial e inmóvil.',
    keyDates: [
      { date: 'c. 322 a. C.', event: 'Chandragupta Maurya funda el primer imperio que domina la mayor parte del subcontinente.' },
      { date: 'c. 268–232 a. C.', event: 'Reinado de Ashoka: edictos grabados en roca y difusión del budismo tras la conquista de Kalinga.' },
      { date: '320–550', event: 'Imperio Gupta. Época clásica del sánscrito, la astronomía y la matemática con Aryabhata.' },
      { date: 'siglos VI–IX', event: 'Auge de la devoción bhakti en el sur y expansión de los templos dravídicos.' },
      { date: '985–1044', event: 'Apogeo del imperio Chola: expediciones navales al sudeste asiático y comercio en el índico.' },
      { date: '1206', event: 'Fundación del Sultanato de Delhi. El islam se convierte en poder político en el norte.' },
      { date: '1336–1565', event: 'Imperio de Vijayanagara en el sur, contemporáneo y rival de los sultanatos del Decán.' },
      { date: '1498', event: 'Vasco da Gama llega a Calicut. Comienza la presencia europea en el comercio índico.' },
      { date: '1526', event: 'Babur vence en Panipat y funda la dinastía mogola.' },
      { date: '1556–1605', event: 'Reinado de Akbar: sistema fiscal zabt, mansabdari y política de sulh-i kull o paz universal.' },
      { date: '1632–1653', event: 'Construcción del Taj Mahal bajo Shah Jahan, cumbre de la síntesis arquitectónica indoislámica.' },
      { date: '1658–1707', event: 'Reinado de Aurangzeb: máxima extensión mogola y desgaste militar en el Decán.' },
      { date: '1757', event: 'Batalla de Plassey: la Compañía Británica de las Indias Orientales toma el control de Bengala.' },
    ],
    sections: [
      {
        title: 'Los Mauryas y el experimento de Ashoka',
        body: [
          'El imperio Maurya, fundado por Chandragupta hacia 322 a. C. en el vacío que dejó la retirada de Alejandro, fue el primer Estado que controló la mayor parte del subcontinente. Su capital, Pataliputra, impresionó al embajador seléucida Megástenes, cuyo relato conocemos por citas posteriores. La organización administrativa que describe el Arthashastra, tratado atribuido a Kautilya, es la de un Estado intervencionista con espías, monopolios, catastro y una teoría del poder desprovista de sentimentalismo que se ha comparado con Maquiavelo.',
          'Ashoka, nieto de Chandragupta, es el gobernante mejor documentado de la Antigüedad india porque dejó su propia voz. Sus edictos, grabados en columnas y rocas por todo el imperio en prácrito y en otras lenguas, incluida una versión griega y aramea en el noroeste, proclaman un giro tras la conquista de Kalinga: arrepentimiento por la matanza, adopción del dharma como política de Estado, no violencia, respeto a todas las sectas religiosas, hospitales y pozos, y funcionarios encargados de vigilar el bienestar de los súbditos.',
          'Qué significa exactamente ese dharma es una discusión abierta. Romila Thapar ha argumentado que no era simplemente budismo convertido en religión oficial, sino una ética cívica pensada para cohesionar un imperio de enorme diversidad lingüística y religiosa. Lo que sí está claro es que Ashoka patrocinó al budismo y financió misiones que lo llevaron a Sri Lanka y a Asia central, y que sin ese patrocinio la expansión posterior de la religión hacia China y el sudeste asiático habría sido muy distinta.',
          'El imperio se desintegró poco después de su muerte, hacia 185 a. C. Le siguieron reinos regionales y una sucesión de dinastías de origen exterior en el noroeste, indogriegas, escitas, partas y kushanas, que acuñaron moneda, patrocinaron arte y conectaron el subcontinente con Asia central y con el comercio de la seda. El arte de Gandhara, con budas de pliegues helenísticos, es el testimonio más visible de ese cruce.',
          'De esa época proceden también las grandes construcciones de la sociedad india. Los tratados jurídicos, entre ellos las leyes de Manu, codificaron un orden de varnas, las cuatro categorías rituales, que la práctica social articuló en miles de jatis o grupos de nacimiento con reglas de matrimonio y de oficio. Conviene no leer esos textos como descripción de la realidad: son prescripciones de letrados brahmánicos, y la historia social muestra mucha más movilidad y variación regional de la que admiten.',
        ].join('\n\n'),
        callout:
          'Los edictos de Ashoka son la única voz directa de un gobernante de la Antigüedad india, y se descifraron en 1837. Hasta entonces el rey más citado de los textos budistas era, para la historiografía, un personaje sin pruebas materiales.',
      },
      {
        title: 'La era clásica: Guptas y creación intelectual',
        body: [
          'El imperio Gupta, entre los siglos IV y VI, se ha llamado tradicionalmente edad de oro clásica, una etiqueta que la historiografía actual matiza porque procede en parte del nacionalismo del siglo XX. Lo que sí ocurrió fue una concentración extraordinaria de producción intelectual bajo patrocinio cortesano: el teatro y la poesía de Kalidasa, la fijación del sánscrito como lengua culta panindia, la codificación de los sistemas filosóficos y una escultura y pintura que definieron el canon posterior, con Ajanta como testimonio superviviente.',
          'Las matemáticas del período tuvieron consecuencias mundiales. Aryabhata, en el año 499, calculó una aproximación de pi, propuso la rotación de la Tierra y trabajó con un sistema posicional decimal; Brahmagupta, en el siglo VII, formuló reglas para operar con el cero y con números negativos. Ese sistema pasó al mundo islámico, donde al-Juarismi lo difundió, y de allí a Europa con el nombre de cifras arábigas. Es probablemente la transferencia técnica más consecuente de la historia premoderna.',
          'La vida religiosa se transformó a la vez. El budismo, que había sido dominante, empezó un declive largo en su tierra de origen mientras se consolidaba en el resto de Asia; el jainismo mantuvo comunidades sólidas de comerciantes; y las tradiciones que hoy llamamos hinduismo se reorganizaron en torno al culto a Vishnu, a Shiva y a la Diosa, con templos, peregrinaciones y una relación devocional directa con la divinidad. Sheldon Pollock ha descrito la difusión del sánscrito por Asia como una cosmópolis cultural sin imperio detrás.',
          'La devoción bhakti, surgida en el sur tamil entre los siglos VI y IX y extendida después a todo el subcontinente, fue un movimiento de enorme alcance social. Sus poetas escribían en lenguas vernáculas, no en sánscrito, ponían la entrega personal por encima del ritual y del linaje, y entre ellos hubo mujeres y personas de castas bajas cuya obra se sigue cantando. Es el mejor argumento contra la imagen de una sociedad india estática y jerárquica sin fisuras.',
          'El otro gran motor fue el comercio. Los puertos del oeste comerciaban con el mundo romano, como documenta el Periplo del mar Eritreo y confirman los hallazgos de moneda romana en el sur; los del este conectaban con el sudeste asiático, donde las formas políticas, religiosas y artísticas indias se adoptaron sin conquista alguna, de Angkor a Borobudur. La india no exportó imperio: exportó modelos.',
        ].join('\n\n'),
      },
      {
        title: 'El sur y el océano Índico',
        body: [
          'La historia del sur del subcontinente sigue un ritmo propio y durante siglos fue más rica y más conectada que la del norte. Los Pallavas y después los Cholas construyeron Estados de base agraria e hidráulica en el país tamil, con templos que funcionaban como centros económicos, escuelas y bancos, y con asambleas de aldea cuyos reglamentos conocemos por inscripciones grabadas en piedra.',
          'El imperio Chola, en su apogeo entre los siglos X y XII, hizo algo insólito en la historia india: proyectó poder naval. Envió expediciones a Sri Lanka, a las Maldivas y al Srivijaya de Sumatra, y mantuvo relaciones diplomáticas con la China Song. Sus templos, como el de Brihadisvara en Thanjavur, y sus bronces de Shiva danzante están entre las obras más notables del arte mundial.',
          'Burton Stein propuso interpretar esos Estados como reinos segmentarios, con una autoridad ritual central fuerte y un control administrativo real muy limitado en la periferia. Otros historiadores han objetado que las inscripciones muestran una capacidad fiscal considerable. La discusión importa porque afecta a cómo entendemos el Estado premoderno en general: si medimos el poder por el modelo del Estado europeo moderno, casi todo lo demás parece débil por definición.',
          'El comercio del índico fue durante siglos el sistema económico más dinámico del mundo, y la India su centro geográfico y productivo. Exportaba textiles de algodón, pimienta, azúcar, acero y piedras preciosas hacia el golfo, África oriental, el sudeste asiático y China, e importaba caballos, metales y plata. Comunidades de comerciantes árabes, judíos, armenios y guyaratíes operaban en redes que funcionaban sin Estados detrás, y los documentos de la Geniza de El Cairo permiten reconstruir esos negocios con detalle.',
          'La llegada de Vasco da Gama a Calicut en 1498 introdujo un elemento nuevo: unos comerciantes dispuestos a usar artillería naval para monopolizar rutas. Los portugueses no dominaron el comercio índico, cuyo volumen los superaba con mucho, pero sí impusieron un sistema de permisos y una violencia armada que no era la práctica del océano. Neerlandeses e ingleses aplicaron después el mismo principio con más capital y mejor organización.',
        ].join('\n\n'),
        callout:
          'La influencia india en el sudeste asiático, de Angkor a Java, se difundió sin conquista militar. Es uno de los casos mejor documentados de expansión cultural sin imperio.',
      },
      {
        title: 'El islam y el Sultanato de Delhi',
        body: [
          'El islam llegó al subcontinente por tres vías distintas y no simultáneas: comerciantes árabes en las costas del sur desde el siglo VII, la conquista de Sind en 711, y las incursiones y después conquistas desde Asia central a partir del siglo XI, con Mahmud de Ghazni y más tarde los ghuríes. La fundación del Sultanato de Delhi en 1206 estableció un poder musulmán estable en el norte que duró tres siglos.',
          'El sultanato fue un Estado militar y fiscal que introdujo formas administrativas persas e islámicas, el sistema iqta de asignación de rentas a cambio de servicio, moneda de plata y una arquitectura nueva de arcos y cúpulas. Bajo Alauddin Khalji, a comienzos del siglo XIV, se ensayó un control de precios y una reforma fiscal notables, y el sultanato resistió las invasiones mongolas que arrasaron el resto del mundo islámico, lo que convirtió a Delhi en refugio de sabios y artistas.',
          'La imagen de una conquista islámica que impuso la religión por la fuerza no se sostiene demográficamente. La conversión fue lenta, desigual y sobre todo periférica: las zonas de mayoría musulmana acabaron siendo Bengala oriental y el noroeste, es decir, las regiones de frontera agraria donde el islam llegó con la roturación de tierras y con las órdenes sufíes, no los centros del poder político. Richard Eaton ha documentado ese proceso frente a las explicaciones por la espada o por el patrocinio estatal.',
          'Hubo destrucción de templos, está documentada y no debe minimizarse, pero su lógica era en buena parte política: los templos reales eran depósitos de riqueza y símbolos de soberanía, y su saqueo formaba parte de un repertorio que también practicaban los reyes hindúes contra los templos de sus rivales. Reducir siglos de historia a un conflicto religioso continuo es proyectar hacia atrás las categorías del siglo XX.',
          'Lo que sí produjo el encuentro fue una síntesis cultural de primer orden. El urdu como lengua, la música indostánica, la arquitectura indoislámica, el sufismo de las órdenes chishti con santuarios visitados por hindúes y musulmanes, y movimientos como el de Kabir o el sijismo fundado por Guru Nanak, que rechazaban explícitamente la frontera entre ambas comunidades. Sur del Vindhya, mientras tanto, Vijayanagara y los sultanatos del Decán mantenían una rivalidad en la que las alianzas cruzaban con frecuencia las líneas religiosas.',
        ].join('\n\n'),
      },
      {
        title: 'El imperio mogol',
        body: [
          'Babur, descendiente de Timur y de Gengis Kan, venció en Panipat en 1526 con artillería y caballería móvil y fundó una dinastía que gobernaría la mayor parte del subcontinente durante casi dos siglos. Su nieto Akbar, entre 1556 y 1605, fue quien construyó el imperio como sistema, y lo hizo con tres instrumentos: un ejército y una administración organizados en rangos numéricos, el mansabdari; un sistema fiscal sobre la tierra, el zabt de Todar Mal, basado en medición, clasificación de suelos y promedios de precios; y una política de integración de las élites rajputas y de otras comunidades en el gobierno.',
          'Akbar suprimió el impuesto sobre los no musulmanes, patrocinó traducciones del sánscrito al persa, organizó debates entre teólogos de todas las religiones en su casa de culto y formuló el principio de sulh-i kull, paz o entendimiento universal, que no era tolerancia moderna sino una doctrina de soberanía por encima de las comunidades religiosas. El Ain-i-Akbari de su ministro Abul Fazl es a la vez un manual administrativo y una exposición de esa ideología imperial.',
          'La economía mogola fue enorme. Bengala y Guyarat producían textiles de algodón que se vendían de Japón a México, y el imperio absorbía plata americana y japonesa en cantidades enormes para pagar por ellos. Las estimaciones sitúan al subcontinente en torno a la cuarta parte del producto mundial en el siglo XVII, con un Estado que recaudaba una proporción alta del excedente agrario y lo gastaba en ejército, corte y construcción.',
          'Aurangzeb, que reinó de 1658 a 1707, es el emperador más discutido. Restableció el impuesto a los no musulmanes, ordenó la destrucción de algunos templos, ejecutó al noveno gurú sij y llevó el imperio a su máxima extensión con una guerra interminable en el Decán. La historiografía nacionalista y la comunalista lo han convertido en símbolo, cada una en un sentido. Audrey Truschke y John Richards han insistido en leer sus decisiones en su contexto político: patrocinó también templos hindúes, empleó a más nobles hindúes que ningún predecesor y actuó por cálculo de legitimidad tanto como por convicción.',
          'El desgaste del Decán, el coste militar y las tensiones entre facciones nobiliarias debilitaron el centro tras su muerte. Durante mucho tiempo se contó como una decadencia que dejó un vacío que los británicos llenaron. La historiografía desde los años ochenta lo ve distinto: lo que hubo fue una regionalización, con Estados sucesores dinámicos, como los marathas, Awadh, Bengala o Haidarabad, con economías activas y capacidad militar. La Compañía Británica no ocupó un vacío: intervino en un sistema competitivo y ganó, empezando por Plassey en 1757.',
        ].join('\n\n'),
        callout:
          'En el siglo XVII el subcontinente producía en torno a la cuarta parte del producto mundial y sus textiles se vendían de Japón a México. La imagen de una India premoderna pobre es un efecto del siglo XIX, no una constante histórica.',
      },
      {
        title: 'Herencias historiográficas',
        body: [
          'La forma en que se estudia la historia india está condicionada por dos herencias que conviene identificar. La primera es la periodización que James Mill propuso en 1817 al dividir el pasado en épocas hindú, musulmana y británica. Esa división convirtió la religión en el criterio organizador de mil años de historia, dio a entender que el gobierno musulmán fue una ocupación extranjera permanente y sirvió de base a las lecturas comunalistas de los siglos XIX y XX. Ninguna de las tres etiquetas describe bien lo que ocurría en el territorio.',
          'La segunda es la casta. Los administradores coloniales censaron, clasificaron y fijaron por escrito categorías que en la práctica eran fluidas, negociadas y variables por región y por oficio. Nicholas Dirks ha sostenido que la casta tal como se conoce hoy es en buena medida un producto de ese proceso de gobierno; otros historiadores replican que las jerarquías existían con claridad mucho antes y que el argumento puede llegar a exculpar. La posición mayoritaria reconoce raíces antiguas y una rigidez y una centralidad muy aumentadas por la administración colonial.',
          'Una tercera discusión ha resultado especialmente productiva: la del siglo XVIII. Frente al relato de una decadencia general que justificaba la intervención británica, Christopher Bayly, Muzaffar Alam y Sanjay Subrahmanyam mostraron dinamismo comercial, formación de Estados regionales eficaces y grupos financieros indios que fueron, de hecho, socios necesarios de la expansión de la Compañía. El colonialismo se construyó sobre esas estructuras, no sobre su ausencia.',
          'La consecuencia metodológica vale para cualquier historia no europea. Las fuentes escritas dominantes son de élite, en sánscrito o en persa, y hay que completarlas con inscripciones, arqueología, numismática, documentos comerciales y tradiciones orales para acceder a la vida de la mayoría. Y las categorías con las que se pregunta, Estado, religión, nación, imperio, tienen una historia europea que hay que examinar antes de aplicarlas.',
          'Nada de esto convierte la historia india en un caso especial que solo puede compararse consigo mismo. Al contrario: las cuestiones que plantea, sobre las formas de Estado premoderno, sobre la convivencia religiosa y sus límites, sobre el comercio a larga distancia sin imperio y sobre las causas de la divergencia económica, son las mismas que organizan hoy la historia global.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Arthashastra', definition: 'Tratado de gobierno atribuido a Kautilya: Estado intervencionista con espías, monopolios y catastro, y una teoría del poder sin apelaciones morales.' },
      { term: 'Edictos de Ashoka', definition: 'Inscripciones en roca y columna, en varias lenguas, con la política de dharma del emperador. Única voz directa de un gobernante de la Antigüedad india.' },
      { term: 'Varna y jati', definition: 'Cuatro categorías rituales de los textos brahmánicos y los miles de grupos de nacimiento reales, con reglas de matrimonio y oficio, variables por región.' },
      { term: 'Sistema decimal posicional', definition: 'Notación con cero desarrollada en la India clásica, transmitida al mundo islámico y de ahí a Europa como cifras arábigas.' },
      { term: 'Bhakti', definition: 'Devoción personal a la divinidad expresada en lenguas vernáculas, con poetas mujeres y de castas bajas. Movimiento social además de religioso.' },
      { term: 'Reino segmentario', definition: 'Modelo propuesto por Stein para los Estados del sur: autoridad ritual central fuerte y control administrativo limitado en la periferia.' },
      { term: 'Iqta', definition: 'Asignación de las rentas de un territorio a un oficial a cambio de servicio militar. Instrumento fiscal del Sultanato de Delhi.' },
      { term: 'Sultanato de Delhi', definition: 'Poder musulmán en el norte entre 1206 y 1526. Introdujo administración persa, resistió a los mongoles y transformó la arquitectura.' },
      { term: 'Mansabdari', definition: 'Sistema mogol de rangos numéricos que fijaba el estatus, el sueldo y el contingente militar de cada oficial, integrando élites de distintas comunidades.' },
      { term: 'Zabt', definition: 'Sistema fiscal de Akbar diseñado por Todar Mal: medición de la tierra, clasificación de suelos y cálculo del impuesto sobre promedios de precios.' },
      { term: 'Sulh-i kull', definition: 'Principio de entendimiento universal de Akbar. No es tolerancia moderna, sino una doctrina de soberanía situada por encima de las comunidades religiosas.' },
      { term: 'Sijismo', definition: 'Tradición fundada por Guru Nanak a comienzos del siglo XVI que rechaza la frontera entre hinduismo e islam y la jerarquía ritual de casta.' },
      { term: 'Estados sucesores', definition: 'Poderes regionales que sustituyeron al centro mogol en el siglo XVIII, como marathas, Awadh o Bengala. Eran dinámicos, no un vacío de poder.' },
      { term: 'Periodización de Mill', definition: 'División colonial del pasado indio en épocas hindú, musulmana y británica. Convirtió la religión en criterio organizador de mil años de historia.' },
    ],
    debates: [
      {
        question: '¿Es la casta una institución inmemorial o una construcción colonial?',
        positions: [
          {
            school: 'Construcción colonial (Dirks, 2001)',
            argument:
              'Los censos y la clasificación administrativa británica fijaron por escrito categorías fluidas y negociadas, y convirtieron la casta en el principio organizador de la sociedad india tal como hoy se percibe.',
          },
          {
            school: 'Raíces antiguas',
            argument:
              'Los textos jurídicos, las inscripciones y las prácticas de endogamia documentan jerarquías rituales y ocupacionales muy anteriores a cualquier presencia europea, y el argumento colonial puede acabar exculpando.',
          },
        ],
        state:
          'La posición mayoritaria reconoce raíces antiguas y a la vez una rigidez, una uniformidad y una centralidad política considerablemente aumentadas por la administración colonial.',
      },
      {
        question: '¿Cómo debe interpretarse el gobierno mogol en materia religiosa?',
        positions: [
          {
            school: 'Lectura comunalista',
            argument:
              'La destrucción de templos, el impuesto a los no musulmanes y las ejecuciones de líderes religiosos muestran un dominio extranjero de carácter confesional sobre una población mayoritariamente hindú.',
          },
          {
            school: 'Contexto político (Richards; Truschke; Eaton)',
            argument:
              'Los templos reales eran depósitos de riqueza y símbolos de soberanía, y su saqueo era un repertorio que también practicaban reyes hindúes. Aurangzeb patrocinó templos y empleó a más nobles hindúes que ningún predecesor.',
          },
        ],
        state:
          'La historiografía académica rechaza el marco confesional continuo, sin negar episodios de violencia religiosa documentados. La discusión tiene hoy una carga política intensa en la India.',
      },
      {
        question: '¿Fue el siglo XVIII indio una decadencia o una regionalización?',
        positions: [
          {
            school: 'Decadencia del centro (Athar Ali)',
            argument:
              'La crisis del sistema mansabdari, la escasez de asignaciones y el desgaste militar del Decán descompusieron el imperio y dejaron un vacío de poder que la Compañía ocupó.',
          },
          {
            school: 'Estados sucesores dinámicos (Bayly; Alam; Subrahmanyam)',
            argument:
              'Marathas, Awadh, Bengala y Haidarabad tenían economías activas, capacidad fiscal y militar y grupos financieros potentes. La Compañía intervino en un sistema competitivo y ganó, no llenó un vacío.',
          },
        ],
        state:
          'La segunda lectura predomina desde los años ochenta y ha cambiado la explicación de la conquista británica: se construyó sobre estructuras indias existentes, no sobre su ausencia.',
      },
    ],
    sources: [
      { author: 'Kautilya', title: 'Arthashastra', year: 'siglos IV a. C.–II d. C.', kind: 'primaria', note: 'Manual de gobierno y estrategia. Su datación es discutida y su contenido, un retrato del Estado ideal más que del real.' },
      { author: 'Ashoka', title: 'Edictos mayores en roca y columna', year: 'siglo III a. C.', kind: 'primaria', note: 'Descifrados en 1837 por James Prinsep. Fuente directa de la política de dharma imperial.' },
      { author: 'Anónimo', title: 'Periplo del mar Eritreo', year: 'siglo I', kind: 'primaria', note: 'Guía comercial griega de los puertos del índico. Documenta el comercio entre Roma y la India.' },
      { author: 'Autores brahmánicos', title: 'Manusmriti o leyes de Manu', year: 'siglos II a. C.–III d. C.', kind: 'primaria', note: 'Texto prescriptivo sobre el orden social. No describe la práctica: propone un ideal de letrados.' },
      { author: 'Faxian y Xuanzang', title: 'Relatos de peregrinos chinos', year: '399–414 y 629–645', kind: 'primaria', note: 'Descripción externa de la India Gupta y posgupta por monjes budistas que buscaban textos.' },
      { author: 'Al-Biruni', title: 'Tarij al-Hind', year: 'c. 1030', kind: 'primaria', note: 'Estudio de la ciencia, la religión y la sociedad indias por un sabio jorasmio. Etnografía notablemente rigurosa para su época.' },
      { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Relato de su servicio como juez en el Sultanato de Delhi bajo Muhammad bin Tughluq.' },
      { author: 'Babur', title: 'Baburnama', year: 'c. 1530', kind: 'primaria', note: 'Memorias del fundador de la dinastía mogola. Autobiografía excepcional por su franqueza y su detalle.' },
      { author: 'Abul Fazl', title: 'Ain-i-Akbari', year: 'c. 1590', kind: 'primaria', note: 'Manual administrativo y estadístico del imperio de Akbar y exposición de su ideología de soberanía.' },
      { author: 'Guru Arjan y otros', title: 'Guru Granth Sahib', year: '1604', kind: 'primaria', note: 'Escritura sij que recoge himnos de autores sijs, hindúes y musulmanes de distintas castas.' },
      { author: 'François Bernier', title: 'Viajes por el imperio mogol', year: '1670', kind: 'primaria', note: 'Relato de un médico francés en la corte. Fuente valiosa y origen de tópicos europeos sobre el despotismo oriental.' },
      { author: 'Documentos de la Geniza de El Cairo', title: 'Cartas de comerciantes del índico', year: 'siglos XI–XIII', kind: 'primaria', note: 'Correspondencia mercantil que permite reconstruir el comercio entre Egipto, Arabia y la costa de Malabar.' },
      { author: 'James Mill', title: 'Historia de la India británica', year: '1817', kind: 'estudio', note: 'Origen de la periodización en épocas hindú, musulmana y británica que condicionó dos siglos de historiografía.' },
      { author: 'Romila Thapar', title: 'La India antigua', year: '2002', kind: 'estudio', note: 'Síntesis de referencia sobre el período antiguo y crítica sistemática de las lecturas nacionalistas.' },
      { author: 'Burton Stein', title: 'Peasant State and Society in Medieval South India', year: '1980', kind: 'estudio', note: 'Propone el modelo del reino segmentario para los Estados del sur.' },
      { author: 'Irfan Habib', title: 'The Agrarian System of Mughal India', year: '1963', kind: 'estudio', note: 'Estudio clásico de la economía agraria y fiscal del imperio mogol.' },
      { author: 'Christopher Bayly', title: 'Rulers, Townsmen and Bazaars', year: '1983', kind: 'estudio', note: 'Muestra el dinamismo comercial indio del siglo XVIII y el papel de los financieros locales en la expansión británica.' },
      { author: 'Richard Eaton', title: 'The Rise of Islam and the Bengal Frontier', year: '1993', kind: 'estudio', note: 'Explica la conversión al islam por la roturación agraria de frontera, frente a las tesis de la espada o del patrocinio.' },
      { author: 'John F. Richards', title: 'The Mughal Empire', year: '1993', kind: 'estudio', note: 'Síntesis de referencia sobre las instituciones y la economía del imperio mogol.' },
      { author: 'Nicholas Dirks', title: 'Castes of Mind', year: '2001', kind: 'estudio', note: 'Sostiene que la casta tal como se conoce hoy es en gran medida producto del gobierno colonial.' },
      { author: 'Sheldon Pollock', title: 'The Language of the Gods in the World of Men', year: '2006', kind: 'estudio', note: 'Analiza la difusión del sánscrito por Asia como una cosmópolis cultural sin imperio detrás.' },
      { author: 'Audrey Truschke', title: 'Aurangzeb', year: '2017', kind: 'estudio', note: 'Relectura del emperador más discutido a partir de fuentes persas, contra sus dos usos políticos actuales.' },
      { author: 'Upinder Singh', title: 'A History of Ancient and Early Medieval India', year: '2008', kind: 'estudio', note: 'Manual universitario que integra arqueología, epigrafía y textos con criterio explícito de método.' },
    ],
  },
  questions: [
    {
      id: 'india-1', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Por qué son excepcionales los edictos de Ashoka como fuente?',
      options: [
        'Porque están escritos en sánscrito clásico',
        'Porque son la única voz directa de un gobernante de la Antigüedad india, grabada en varias lenguas',
        'Porque los redactaron embajadores griegos',
        'Porque describen la vida cotidiana campesina',
      ],
      answer: 1,
      explanation: 'Se descifraron en 1837. Hasta entonces el rey más citado de los textos budistas carecía de pruebas materiales.',
    },
    {
      id: 'india-2', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué defiende Romila Thapar sobre el dharma de Ashoka?',
      options: [
        'Que fue budismo convertido en religión oficial del imperio',
        'Que fue una ética cívica pensada para cohesionar un imperio de enorme diversidad lingüística y religiosa',
        'Que fue un código penal aplicado por los funcionarios',
        'Que fue una doctrina inventada por la historiografía nacionalista',
      ],
      answer: 1,
      explanation: 'Ashoka patrocinó al budismo y financió misiones a Sri Lanka y Asia central, sin las cuales su expansión posterior habría sido distinta.',
    },
    {
      id: 'india-3', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Cómo hay que leer textos como las leyes de Manu?',
      options: [
        'Como descripción fiel de la sociedad de su tiempo',
        'Como prescripciones de letrados brahmánicos, frente a las cuales la historia social muestra más movilidad y variación regional',
        'Como recopilaciones de derecho consuetudinario local',
        'Como falsificaciones de época colonial',
      ],
      answer: 1,
      explanation: 'Las cuatro varnas rituales se articularon en la práctica en miles de jatis con reglas variables por región y por oficio.',
    },
    {
      id: 'india-4', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Cuál fue la transferencia técnica india de mayor alcance mundial?',
      options: [
        'La metalurgia del acero de Damasco',
        'El sistema decimal posicional con cero, transmitido al mundo islámico y de ahí a Europa',
        'La navegación con vela latina',
        'El cultivo del algodón',
      ],
      answer: 1,
      explanation: 'Aryabhata trabajó con notación posicional en 499 y Brahmagupta formuló en el siglo VII reglas para el cero y los números negativos.',
    },
    {
      id: 'india-5', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué caracterizó al movimiento bhakti?',
      options: [
        'La restauración del ritual védico en sánscrito',
        'La devoción personal expresada en lenguas vernáculas, con poetas mujeres y de castas bajas',
        'La organización de monasterios budistas en el sur',
        'La codificación jurídica de las obligaciones de casta',
      ],
      answer: 1,
      explanation: 'Es el mejor argumento contra la imagen de una sociedad india estática y jerárquica sin fisuras.',
    },
    {
      id: 'india-6', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué hizo insólito al imperio Chola en la historia india?',
      options: [
        'Unificó todo el subcontinente por primera vez',
        'Proyectó poder naval, con expediciones a Sri Lanka, las Maldivas y Sumatra',
        'Abolió el sistema de castas en su territorio',
        'Adoptó el islam como religión de Estado',
      ],
      answer: 1,
      explanation: 'Mantuvo además relaciones diplomáticas con la China Song, y sus templos y bronces están entre las obras mayores del arte mundial.',
    },
    {
      id: 'india-7', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Cómo se difundió la influencia india por el sudeste asiático?',
      options: [
        'Mediante campañas de conquista de los Guptas',
        'Sin conquista militar, por adopción local de formas políticas, religiosas y artísticas',
        'Por la migración masiva de población desde Bengala',
        'Por imposición de los comerciantes portugueses',
      ],
      answer: 1,
      explanation: 'Angkor y Borobudur son los ejemplos mayores. La India no exportó imperio: exportó modelos.',
    },
    {
      id: 'india-8', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué novedad introdujeron los portugueses en el comercio del índico?',
      options: [
        'El uso de la brújula y de cartas náuticas',
        'La disposición a usar artillería naval para monopolizar rutas y un sistema de permisos',
        'El comercio de textiles de algodón',
        'La creación de las primeras redes de comerciantes armenios',
      ],
      answer: 1,
      explanation: 'No dominaron el comercio índico, cuyo volumen los superaba con mucho, pero impusieron una violencia armada que no era la práctica del océano.',
    },
    {
      id: 'india-9', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: 'Según Richard Eaton, ¿por qué las zonas de mayoría musulmana acabaron siendo Bengala oriental y el noroeste?',
      options: [
        'Porque allí se concentraron las guarniciones del sultanato',
        'Porque eran regiones de frontera agraria donde el islam llegó con la roturación de tierras y las órdenes sufíes',
        'Porque fueron las primeras conquistadas en 711',
        'Porque el sultanato impuso allí la conversión obligatoria',
      ],
      answer: 1,
      explanation: 'La conversión fue lenta, desigual y periférica, y no coincidió con los centros del poder político musulmán.',
    },
    {
      id: 'india-10', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué lógica tenía en buena parte la destrucción de templos por gobernantes musulmanes?',
      options: [
        'Una campaña sistemática de conversión religiosa',
        'Una lógica política: los templos reales eran depósitos de riqueza y símbolos de soberanía, y reyes hindúes también saqueaban los de sus rivales',
        'La necesidad de materiales de construcción',
        'La prohibición coránica de las imágenes',
      ],
      answer: 1,
      explanation: 'La destrucción está documentada y no debe minimizarse, pero reducir siglos de historia a un conflicto religioso continuo proyecta hacia atrás categorías del siglo XX.',
    },
    {
      id: 'india-11', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Con qué instrumentos construyó Akbar el sistema imperial mogol?',
      options: [
        'Ejército mercenario europeo, monopolio del comercio y expulsión de las élites locales',
        'Rangos numéricos mansabdari, sistema fiscal zabt e integración de las élites rajputas en el gobierno',
        'Administración eclesiástica y tribunales religiosos únicos',
        'Delegación del gobierno en gobernadores hereditarios',
      ],
      answer: 1,
      explanation: 'El zabt de Todar Mal se basaba en medir la tierra, clasificar suelos y calcular el impuesto sobre promedios de precios.',
    },
    {
      id: 'india-12', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué significaba el principio de sulh-i kull?',
      options: [
        'La igualdad jurídica de todos los súbditos',
        'Una doctrina de soberanía situada por encima de las comunidades religiosas, y no una tolerancia en sentido moderno',
        'La obligación de convertirse al islam para servir en la administración',
        'La separación entre poder religioso y poder político',
      ],
      answer: 1,
      explanation: 'Akbar suprimió el impuesto a los no musulmanes, patrocinó traducciones del sánscrito al persa y organizó debates entre teólogos de todas las religiones.',
    },
    {
      id: 'india-13', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué peso económico tenía el subcontinente en el siglo XVII?',
      options: [
        'Marginal en el comercio mundial',
        'En torno a la cuarta parte del producto mundial, con textiles que se vendían de Japón a México',
        'Similar al de las colonias americanas',
        'Dependiente por completo de las importaciones europeas',
      ],
      answer: 1,
      explanation: 'El imperio absorbía plata americana y japonesa para pagar esos textiles. La imagen de una India premoderna pobre es un efecto del siglo XIX.',
    },
    {
      id: 'india-14', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Cómo leen historiadores como Truschke y Richards el reinado de Aurangzeb?',
      options: [
        'Como una política religiosa coherente de persecución sistemática',
        'Situando sus decisiones en su contexto político: también patrocinó templos hindúes y empleó a más nobles hindúes que ningún predecesor',
        'Como un período sin cambios respecto de Akbar',
        'Como una etapa de retirada militar del imperio',
      ],
      answer: 1,
      explanation: 'Restableció el impuesto a los no musulmanes y ordenó destrucciones de templos, y a la vez llevó el imperio a su máxima extensión con una guerra ruinosa en el Decán.',
    },
    {
      id: 'india-15', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué muestra la historiografía reciente sobre el siglo XVIII indio?',
      options: [
        'Que hubo un vacío de poder que los británicos ocuparon sin resistencia',
        'Que hubo regionalización con Estados sucesores dinámicos y financieros potentes, en cuyo sistema competitivo intervino la Compañía',
        'Que la economía india se hundió tras la muerte de Aurangzeb',
        'Que el imperio mogol conservó intacto su poder hasta 1857',
      ],
      answer: 1,
      explanation: 'Marathas, Awadh, Bengala y Haidarabad tenían capacidad fiscal y militar. El colonialismo se construyó sobre esas estructuras, no sobre su ausencia.',
    },
    {
      id: 'india-16', era: 'Edad Media', topicId: 'india', topic: 'India: de los Mauryas a los mogoles',
      question: '¿Qué problema plantea la periodización propuesta por James Mill en 1817?',
      options: [
        'Que sitúa mal las fechas de las dinastías',
        'Que convierte la religión en criterio organizador de mil años de historia y sirvió de base a las lecturas comunalistas',
        'Que ignora por completo el sur del subcontinente',
        'Que exagera la importancia del comercio índico',
      ],
      answer: 1,
      explanation: 'Dividir el pasado en épocas hindú, musulmana y británica sugiere además que el gobierno musulmán fue una ocupación extranjera permanente.',
    },
  ],
}
