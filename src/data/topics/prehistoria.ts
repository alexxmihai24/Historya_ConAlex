import type { TopicModule } from '../types.ts'

export const prehistoria: TopicModule = {
  topic: {
    id: 'prehistoria',
    era: 'Antigüedad',
    title: 'Prehistoria y neolitización',
    years: 'c. 3,3 M–3500 a. C.',
    country: 'Mundo',
    description: 'Evolución humana, cazadores-recolectores, arte paleolítico y la adopción de la agricultura.',
    duration: '45 min',
    level: 'Universidad',
    progress: 0,
    visual: '⋔',
    color: 'terracotta',
    summary:
      'La prehistoria abarca más del 99 % del tiempo humano y se estudia casi sin textos: con huesos, piedras, sedimentos, isótopos y ADN antiguo. Su problema central no es acumular fechas, sino explicar dos transformaciones: cómo aparece un homínido con cultura acumulativa y por qué, tras cientos de miles de años de caza y recolección, varias poblaciones adoptan en pocos milenios la agricultura y la vida sedentaria.',
    keyDates: [
      { date: 'c. 3,3 M a. C.', event: 'Herramientas líticas de Lomekwi (Kenia), anteriores al género Homo.' },
      { date: 'c. 1,9 M a. C.', event: 'Homo erectus: mayor capacidad craneal, bifaces achelenses y primeras salidas de África.' },
      { date: 'c. 400.000 a. C.', event: 'Uso controlado del fuego bien documentado; Sima de los Huesos (Atapuerca).' },
      { date: 'c. 300.000 a. C.', event: 'Restos de Homo sapiens en Jebel Irhoud (Marruecos).' },
      { date: 'c. 45.000 a. C.', event: 'Sapiens en Europa; coexistencia con neandertales durante milenios.' },
      { date: 'c. 40.000 a. C.', event: 'Arte figurativo en Chauvet, El Castillo y Sulawesi.' },
      { date: 'c. 40.000 a. C.', event: 'Extinción de los neandertales como población diferenciada.' },
      { date: 'c. 11.600 a. C.', event: 'Fin del Younger Dryas: comienza el Holoceno, cálido y estable.' },
      { date: 'c. 9500 a. C.', event: 'Göbekli Tepe: santuarios monumentales de sociedades aún no agrícolas.' },
      { date: 'c. 8500 a. C.', event: 'Domesticación de trigo, cebada, oveja y cabra en el Creciente Fértil.' },
      { date: 'c. 7000 a. C.', event: 'Çatalhöyük: gran poblado agrícola en Anatolia.' },
      { date: 'c. 5600 a. C.', event: 'La agricultura alcanza la península ibérica por vía mediterránea.' },
      { date: 'c. 4500–2500 a. C.', event: 'Megalitismo atlántico europeo: Stonehenge, Newgrange, Antequera.' },
      { date: 'c. 3300 a. C.', event: 'Metalurgia del bronce y primeras escrituras: fin convencional de la prehistoria.' },
    ],
    sections: [
      {
        title: 'Qué es la prehistoria y con qué se estudia',
        body: [
          'La prehistoria es el periodo anterior a la escritura, y por tanto una categoría relativa: termina en momentos distintos según la región. Mesopotamia sale de ella hacia 3300 a. C.; buena parte del África subsahariana o de Oceanía, milenios después. Esa relatividad ha sido criticada porque hace del alfabetismo el criterio de entrada en la historia, con una carga eurocéntrica evidente. Muchos autores prefieren hoy hablar de «sociedades sin escritura» o usar directamente las secuencias arqueológicas.',
          'La disciplina se apoya en fuentes materiales y en técnicas de laboratorio. La datación por radiocarbono, desarrollada por Willard Libby en 1949, permitió por primera vez fechar en términos absolutos hasta unos 50.000 años; la termoluminiscencia, el uranio-torio y el potasio-argón cubren horizontes más antiguos. La paleoecología reconstruye climas mediante polen, isótopos de oxígeno y sondeos de hielo.',
          'La transformación más importante de las últimas dos décadas ha sido la paleogenética. Desde que Svante Pääbo secuenció el genoma neandertal en 2010, el ADN antiguo ha reescrito la historia de las migraciones humanas: ha demostrado el mestizaje entre sapiens y neandertales, ha identificado a los denisovanos a partir de un fragmento de falange, y ha revelado que la Europa actual resulta de al menos tres oleadas superpuestas —cazadores-recolectores locales, agricultores anatolios y pastores esteparios.',
          'Conviene una advertencia metodológica: la conservación diferencial sesga lo que vemos. La piedra y el hueso perduran; la madera, la fibra, la piel y el discurso, no. Cualquier reconstrucción de la vida prehistórica trabaja sobre un registro incompleto y sistemáticamente inclinado hacia lo duradero.',
        ].join('\n\n'),
        callout:
          'La calibración del radiocarbono corrige la variación del C-14 atmosférico. Por eso las fechas se expresan «cal BP» o «cal a. C.»: una fecha sin calibrar y otra calibrada no son comparables.',
      },
      {
        title: 'Evolución humana: un arbusto, no una escalera',
        body: [
          'La imagen popular de una progresión lineal de simio a humano es incorrecta. La evidencia fósil dibuja un arbusto ramificado en el que varias especies de homínidos coexistieron durante largos periodos: australopitecos, parántropos, Homo habilis, Homo erectus, Homo naledi, Homo floresiensis, neandertales, denisovanos y sapiens.',
          'Los rasgos que asociamos a lo humano no aparecieron a la vez. El bipedismo es muy antiguo —las huellas de Laetoli tienen 3,6 millones de años—, mientras que el gran encefalización llegó mucho después. Las herramientas de Lomekwi, de 3,3 millones de años, son anteriores al género Homo, lo que rompe la ecuación entre fabricar útiles y ser humano.',
          'El control del fuego fue decisivo. Richard Wrangham ha defendido en *Catching Fire* (2009) que la cocción, al externalizar parte de la digestión, permitió reducir el aparato digestivo y sostener un cerebro metabólicamente caro. La cronología exacta se discute: hay indicios en Wonderwerk hacia 1 millón de años, pero el uso sistemático solo está bien documentado desde hace unos 400.000.',
          'El yacimiento de Atapuerca ha sido central en este debate. La Sima de los Huesos ha entregado más de 6.500 fósiles de al menos 28 individuos, un conjunto sin equivalente, y su análisis genético los sitúa en el linaje neandertal. La Gran Dolina aportó los restos de *Homo antecessor*, con marcas de corte que documentan canibalismo, probablemente de tipo nutricional.',
          'Sobre los neandertales, la revisión ha sido drástica. Enterraban a sus muertos, cuidaban de individuos con lesiones incapacitantes, usaban pigmentos, fabricaban adhesivos de brea —un proceso que exige control térmico en ausencia de oxígeno— y construyeron estructuras de espeleotemas en la cueva de Bruniquel hace 176.000 años. Su desaparición como población diferenciada no fue una extinción total: entre el 1 % y el 2 % del genoma de los humanos no africanos actuales es neandertal.',
        ].join('\n\n'),
      },
      {
        title: 'Sociedades cazadoras-recolectoras del Paleolítico',
        body: [
          'Durante casi toda la prehistoria, los humanos vivieron en grupos móviles de tamaño reducido que explotaban recursos estacionales. Esa movilidad no implica precariedad permanente. Los estudios etnográficos de sociedades cazadoras-recolectoras recientes, sintetizados en el influyente simposio *Man the Hunter* (1968), estimaron dedicaciones de subsistencia de entre tres y cinco horas diarias, lo que llevó a Marshall Sahlins a hablar de «la sociedad opulenta original».',
          'Esa formulación se ha matizado mucho: las poblaciones estudiadas en el siglo XX ocupaban ambientes marginales y no son análogos directos de las paleolíticas. Aun así, la evidencia paleopatológica apunta en la misma dirección: los primeros agricultores presentan, respecto a los cazadores-recolectores previos, menor estatura, más caries, más anemia y más marcadores de estrés nutricional.',
          'La organización social era probablemente igualitaria en lo económico, con fuertes mecanismos de reparto y de nivelación. Pero el registro funerario muestra excepciones llamativas: los enterramientos de Sunguir (Rusia, c. 34.000 a. C.) incluyen individuos cubiertos con miles de cuentas de marfil que representan miles de horas de trabajo. La desigualdad no espera a la agricultura.',
          'La división sexual del trabajo tampoco fue tan rígida como se asumió. Los análisis de restos de Wilamaya Patjxa (Perú) y las revisiones de ajuares de caza en las Américas han identificado mujeres enterradas con equipo cinegético, y el estudio de marcadores óseos de actividad muestra patrones menos dicotómicos de lo esperado.',
        ].join('\n\n'),
        callout:
          'La recolección aportaba probablemente la mayor parte de las calorías en muchos entornos. La etiqueta «cazadores-recolectores» invierte, en ese sentido, el peso real de cada actividad.',
      },
      {
        title: 'Arte, símbolo y pensamiento',
        body: [
          'El arte paleolítico europeo —Chauvet, Lascaux, Altamira, El Castillo, Tito Bustillo— constituye el corpus simbólico más antiguo conservado a gran escala. Sus temas dominantes son animales, signos geométricos y manos en negativo; las figuras humanas son escasas y a menudo esquemáticas.',
          'Las interpretaciones han cambiado con las modas teóricas. La «magia de caza» de Breuil, que veía en las pinturas un ritual propiciatorio, fue sustituida por el estructuralismo de Leroi-Gourhan, que buscaba oposiciones binarias en la distribución de las figuras, y después por lecturas chamánicas como la de David Lewis-Williams en *La mente en la caverna* (2002), basadas en la neuropsicología de los estados alterados de conciencia. Ninguna se impone hoy de forma concluyente.',
          'La datación por uranio-torio de costras calcáreas ha alterado el marco cronológico: algunas manifestaciones de La Pasiega, Maltravieso y Ardales superarían los 64.000 años, lo que las situaría antes de la llegada de sapiens a Europa y las atribuiría a neandertales. La propuesta sigue siendo discutida metodológicamente, pero, de confirmarse, elimina el último rasgo que se reservaba en exclusiva a nuestra especie.',
          'Fuera de Europa el registro es igual de antiguo: las figuras de Sulawesi y Borneo superan los 40.000 años, y en Blombos (Sudáfrica) hay grabados geométricos en ocre de hace 73.000 años. El foco europeo de los manuales refleja la historia de la investigación, no la distribución real del fenómeno.',
        ].join('\n\n'),
      },
      {
        title: 'La neolitización: cómo y por qué',
        body: [
          'Hacia el final del Pleistoceno, varias poblaciones del suroeste asiático empezaron a cultivar y a domesticar animales. El proceso fue lento —siglos de manipulación previa a la domesticación morfológica— e independiente en al menos siete focos mundiales: Creciente Fértil, China (mijo y arroz), Mesoamérica (maíz), Andes (patata, quinoa), Nueva Guinea (taro), África occidental (sorgo) y este de Norteamérica.',
          'Sobre las causas se han propuesto tres grandes familias de explicación. Gordon Childe defendió en los años treinta la «hipótesis del oasis»: la desecación posglacial habría concentrado a humanos, plantas y animales en torno a los puntos de agua. Lewis Binford y Kent Flannery reformularon el problema en clave demográfica: la presión de población en zonas marginales habría obligado a intensificar la producción. Una tercera línea, de Jacques Cauvin en *Naissance des divinités, naissance de l\'agriculture* (1994), invierte la causalidad y sitúa primero un cambio simbólico y religioso.',
          'Göbekli Tepe, excavado por Klaus Schmidt desde 1995, es la pieza que más ha forzado la revisión. Sus recintos con pilares en T de hasta cinco metros y relieves de animales datan de c. 9500 a. C. y fueron levantados por poblaciones que aún no practicaban agricultura plena. La construcción monumental precede, aquí, a la economía agrícola, y no al revés.',
          'Las consecuencias de la neolitización fueron ambivalentes. Aumentó la capacidad de carga demográfica y permitió el excedente, el almacenamiento y, con el tiempo, la desigualdad institucionalizada y el Estado. Al mismo tiempo empeoró la dieta media, aumentó la carga de trabajo, favoreció las zoonosis por convivencia con el ganado y aumentó la vulnerabilidad a las malas cosechas. Jared Diamond la llamó provocativamente «el peor error de la historia de la especie humana».',
          'En Europa el proceso fue sobre todo migratorio, no de difusión de ideas. La paleogenética muestra que los agricultores anatolios se expandieron físicamente por el continente entre 7000 y 5500 a. C., mezclándose en proporciones variables con los cazadores-recolectores locales, y que un tercer componente —los pastores de la estepa póntica asociados a la cultura Yamnaya— llegó hacia 3000 a. C. y transformó de nuevo el paisaje genético y probablemente lingüístico de Europa.',
        ].join('\n\n'),
        callout:
          'La domesticación deja huellas morfológicas: espigas que no se disgregan solas, semillas más grandes, cuernos reducidos. Esos cambios tardan siglos en fijarse, así que la frontera entre recolectar y cultivar es un gradiente, no una línea.',
      },
      {
        title: 'Megalitismo, metalurgia y el umbral de la historia',
        body: [
          'Entre el V y el III milenio a. C., la fachada atlántica europea levantó dólmenes, menhires, alineamientos y grandes tumbas de corredor. Newgrange, Stonehenge y el conjunto de Antequera implican planificación, movilización de trabajo y conocimientos astronómicos aplicados: varios monumentos están orientados a los solsticios.',
          'La datación por radiocarbono desmontó la explicación difusionista clásica, que hacía derivar el megalitismo europeo del Mediterráneo oriental. Colin Renfrew mostró en *Before Civilization* (1973) que los megalitos atlánticos son anteriores a las pirámides egipcias, lo que obligó a reconocer desarrollos autónomos y a abandonar el modelo de una civilización que irradia hacia periferias pasivas.',
          'La metalurgia introdujo un factor nuevo. El cobre primero y el bronce después —aleación con estaño, escaso y de distribución muy desigual— exigieron redes de intercambio de larga distancia y favorecieron a las élites que las controlaban. El ajuar del llamado «arquero de Amesbury», con origen isotópico centroeuropeo y enterrado cerca de Stonehenge, ilustra esa movilidad.',
          'El final convencional de la prehistoria llega con la escritura, hacia 3300 a. C. en Uruk. Es un corte útil pero arbitrario: no cambia nada en la vida de la mayoría de la población, y a menudo separa artificialmente procesos continuos. Conviene tratarlo como una frontera documental, no como un salto civilizatorio.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Homínido', definition: 'Miembro de la familia Hominidae. En uso corriente, los ancestros y parientes extintos del linaje humano.' },
      { term: 'Industria lítica', definition: 'Conjunto de útiles de piedra tallada característico de una tradición técnica (olduvayense, achelense, musteriense).' },
      { term: 'Calibración', definition: 'Corrección de las fechas de radiocarbono según la variación del C-14 atmosférico. Fechas «cal BP» o «cal a. C.».' },
      { term: 'Paleogenética', definition: 'Estudio del ADN antiguo. Ha reescrito la historia de las migraciones y demostrado el mestizaje entre especies humanas.' },
      { term: 'Neolitización', definition: 'Proceso de adopción de agricultura, ganadería, cerámica y sedentarismo. Gradual y con focos independientes.' },
      { term: 'Domesticación', definition: 'Modificación genética y morfológica de especies por selección humana sostenida durante generaciones.' },
      { term: 'Creciente Fértil', definition: 'Arco entre el Levante, Anatolia y Mesopotamia donde se documenta el primer foco de domesticación.' },
      { term: 'Megalitismo', definition: 'Tradición constructiva con grandes bloques de piedra en la Europa atlántica del V–III milenio a. C.' },
      { term: 'Yamnaya', definition: 'Cultura pastoril de la estepa póntica cuya expansión hacia 3000 a. C. transformó la genética y probablemente la lengua de Europa.' },
      { term: 'Zoonosis', definition: 'Enfermedad transmitida de animales a humanos. Su frecuencia aumentó con la convivencia ganadera del Neolítico.' },
    ],
    debates: [
      {
        question: '¿Por qué se adoptó la agricultura si empeoró la salud de quienes la practicaban?',
        positions: [
          {
            school: 'Explicación climática (Childe, años 1930)',
            argument:
              'La desecación posglacial habría concentrado a humanos, plantas y animales en torno a oasis, forzando una convivencia que desembocó en domesticación. La agricultura sería una respuesta adaptativa a la escasez.',
          },
          {
            school: 'Explicación demográfica (Binford, Flannery)',
            argument:
              'El crecimiento de población en zonas marginales, tras la ocupación de los mejores territorios, obligó a intensificar la obtención de alimento. La agricultura sería una salida forzada, no una mejora elegida.',
          },
          {
            school: 'Explicación simbólica (Cauvin, 1994)',
            argument:
              'Un cambio previo en la mentalidad y en las prácticas rituales habría creado las condiciones sociales del sedentarismo. Göbekli Tepe, monumental y preagrícola, apoyaría esta secuencia.',
          },
        ],
        state:
          'No hay una explicación única aceptada. La investigación actual tiende a modelos multicausales y regionales: el peso del clima, la demografía y la religión varía según el foco de domesticación, y el proceso se reconoce mucho más lento y reversible de lo que se creía.',
      },
      {
        question: '¿Se difundió la agricultura en Europa por migración o por adopción de ideas?',
        positions: [
          {
            school: 'Difusión cultural',
            argument:
              'Las poblaciones europeas de cazadores-recolectores habrían adoptado técnicas agrícolas por contacto e imitación, sin sustitución poblacional significativa.',
          },
          {
            school: 'Difusión démica (Ammerman y Cavalli-Sforza; paleogenética)',
            argument:
              'La expansión fue de personas: agricultores procedentes de Anatolia se desplazaron por el continente entre 7000 y 5500 a. C. El ADN antiguo muestra un reemplazo poblacional sustancial, con mezcla variable según regiones.',
          },
        ],
        state:
          'La paleogenética ha resuelto el debate mayoritariamente a favor de la migración, aunque con matices regionales importantes: en el Báltico y en zonas atlánticas la continuidad de los cazadores-recolectores locales fue mayor.',
      },
      {
        question: '¿Produjeron los neandertales arte simbólico?',
        positions: [
          {
            school: 'Atribución neandertal (Hoffmann et al., 2018)',
            argument:
              'Las dataciones por uranio-torio de costras sobre pinturas de La Pasiega, Maltravieso y Ardales superan los 64.000 años, antes de la llegada de sapiens a Europa. Sumadas a los pigmentos, adornos y estructuras de Bruniquel, indicarían capacidad simbólica plena.',
          },
          {
            school: 'Escepticismo metodológico (White et al., 2020)',
            argument:
              'La datación de costras calcáreas puede sobrestimar la edad por contaminación y por sistemas abiertos al agua. Las fechas no datan el pigmento, sino el carbonato depositado sobre él.',
          },
        ],
        state:
          'La discusión sigue abierta y es sobre todo técnica. La tendencia general de la disciplina, sin embargo, ha sido reducir la lista de capacidades exclusivamente sapiens: el debate ya no es si los neandertales eran simbólicos, sino en qué grado y con qué cronología.',
      },
    ],
    sources: [
      { author: 'V. Gordon Childe', title: 'Man Makes Himself', year: '1936', kind: 'estudio', note: 'Formula la «revolución neolítica» y la hipótesis del oasis. Referencia histórica del debate.' },
      { author: 'Richard B. Lee e Irven DeVore (eds.)', title: 'Man the Hunter', year: '1968', kind: 'estudio', note: 'Simposio que reformuló la imagen de las sociedades cazadoras-recolectoras.' },
      { author: 'Colin Renfrew', title: 'Before Civilization: The Radiocarbon Revolution and Prehistoric Europe', year: '1973', kind: 'estudio', note: 'Demuestra la anterioridad del megalitismo atlántico y liquida el difusionismo clásico.' },
      { author: 'Jacques Cauvin', title: 'Naissance des divinités, naissance de l\'agriculture', year: '1994', kind: 'estudio', note: 'Defiende la primacía del cambio simbólico sobre el económico.' },
      { author: 'David Lewis-Williams', title: 'The Mind in the Cave', year: '2002', kind: 'estudio', note: 'Interpretación neuropsicológica y chamánica del arte paleolítico.' },
      { author: 'Richard Wrangham', title: 'Catching Fire: How Cooking Made Us Human', year: '2009', kind: 'estudio', note: 'La cocción como motor de la encefalización.' },
      { author: 'Svante Pääbo', title: 'Neanderthal Man: In Search of Lost Genomes', year: '2014', kind: 'estudio', note: 'Relato de primera mano de la secuenciación del genoma neandertal.' },
      { author: 'David Reich', title: 'Who We Are and How We Got Here', year: '2018', kind: 'estudio', note: 'Síntesis del impacto del ADN antiguo sobre la historia de las migraciones.' },
      { author: 'James C. Scott', title: 'Against the Grain: A Deep History of the Earliest States', year: '2017', kind: 'estudio', note: 'Cuestiona el relato progresista de la neolitización y del Estado temprano.' },
      { author: 'Klaus Schmidt', title: 'Sie bauten die ersten Tempel', year: '2006', kind: 'estudio', note: 'Excavación e interpretación de Göbekli Tepe por su director.' },
    ],
  },
  questions: [
    {
      id: 'prehistoria-1', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Por qué se critica el criterio de la escritura como frontera de la prehistoria?',
      options: [
        'Porque la escritura no puede datarse',
        'Porque es relativo y hace del alfabetismo el requisito para «entrar en la historia», con sesgo eurocéntrico',
        'Porque ninguna sociedad antigua escribió',
        'Porque la arqueología no estudia textos',
      ],
      answer: 1,
      explanation: 'La prehistoria termina en fechas muy distintas según la región. Muchos autores prefieren hablar de «sociedades sin escritura» o usar directamente secuencias arqueológicas.',
    },
    {
      id: 'prehistoria-2', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué implican las herramientas de Lomekwi, de 3,3 millones de años?',
      options: [
        'Que Homo sapiens es más antiguo de lo que se creía',
        'Que la fabricación de útiles es anterior al género Homo',
        'Que los australopitecos usaban fuego',
        'Que el bipedismo apareció después que la talla',
      ],
      answer: 1,
      explanation: 'Rompen la ecuación entre fabricar herramientas y pertenecer al género Homo, y obligan a separar rasgos que antes se presentaban como un paquete.',
    },
    {
      id: 'prehistoria-3', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué proporción del genoma de los humanos actuales no africanos es de origen neandertal?',
      options: ['Ninguna', 'Entre el 1 % y el 2 %', 'En torno al 15 %', 'Más del 30 %'],
      answer: 1,
      explanation: 'El mestizaje quedó demostrado con la secuenciación del genoma neandertal en 2010. Los neandertales no se extinguieron sin dejar descendencia genética.',
    },
    {
      id: 'prehistoria-4', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué muestra la paleopatología al comparar los primeros agricultores con los cazadores-recolectores previos?',
      options: [
        'Mayor estatura y mejor dentadura en los agricultores',
        'Menor estatura, más caries, más anemia y más marcadores de estrés en los agricultores',
        'Ninguna diferencia apreciable',
        'Menor mortalidad infantil en los agricultores',
      ],
      answer: 1,
      explanation: 'La agricultura aumentó la capacidad de carga demográfica, pero empeoró la dieta media y la salud individual. De ahí la provocación de Diamond sobre «el peor error» de la especie.',
    },
    {
      id: 'prehistoria-5', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Por qué Göbekli Tepe obligó a revisar las explicaciones de la neolitización?',
      options: [
        'Porque es el primer poblado agrícola conocido',
        'Porque es monumental y lo levantaron poblaciones que aún no practicaban agricultura plena',
        'Porque contiene las primeras inscripciones',
        'Porque demuestra la hipótesis del oasis de Childe',
      ],
      answer: 1,
      explanation: 'Invierte la secuencia esperada: la construcción monumental precede a la economía agrícola, lo que apoya explicaciones que dan primacía al cambio simbólico.',
    },
    {
      id: 'prehistoria-6', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: 'Según la paleogenética, ¿cómo llegó la agricultura a Europa?',
      options: [
        'Solo por transmisión de ideas entre poblaciones locales',
        'Por migración de agricultores anatolios que se mezclaron en grado variable con los cazadores-recolectores',
        'Por invasión desde Egipto',
        'Por desarrollo independiente en cada región europea',
      ],
      answer: 1,
      explanation: 'El ADN antiguo muestra un reemplazo poblacional sustancial entre 7000 y 5500 a. C., con mayor continuidad local en el Báltico y en zonas atlánticas.',
    },
    {
      id: 'prehistoria-7', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué demostró Colin Renfrew sobre el megalitismo atlántico?',
      options: [
        'Que deriva de las pirámides egipcias',
        'Que es anterior a las pirámides egipcias, lo que invalida la explicación difusionista',
        'Que es posterior al Imperio romano',
        'Que no puede datarse con radiocarbono',
      ],
      answer: 1,
      explanation: 'La revolución del radiocarbono calibrado obligó a reconocer desarrollos autónomos y a abandonar el modelo de una civilización oriental que irradia hacia periferias pasivas.',
    },
    {
      id: 'prehistoria-8', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué sesgo introduce la conservación diferencial en el registro prehistórico?',
      options: [
        'Ninguno: todo se conserva por igual',
        'Sobrerrepresenta la piedra y el hueso frente a la madera, la fibra y la piel',
        'Sobrerrepresenta los objetos orgánicos',
        'Solo afecta a los yacimientos al aire libre',
      ],
      answer: 1,
      explanation: 'Lo duradero sobrevive y lo perecedero desaparece, así que la cultura material que estudiamos está sistemáticamente inclinada hacia unos materiales concretos.',
    },
    {
      id: 'prehistoria-9', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué aportó la Sima de los Huesos de Atapuerca?',
      options: [
        'Las pinturas rupestres más antiguas de Europa',
        'Más de 6.500 fósiles de al menos 28 individuos, genéticamente situados en el linaje neandertal',
        'El primer útil de bronce peninsular',
        'La tumba megalítica más antigua',
      ],
      answer: 1,
      explanation: 'Es un conjunto sin equivalente por su tamaño. La Gran Dolina, en el mismo complejo, aportó además los restos de Homo antecessor con marcas de canibalismo.',
    },
    {
      id: 'prehistoria-10', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué objeción metodológica se plantea a las dataciones que atribuyen arte rupestre a neandertales?',
      options: [
        'Que el uranio-torio no funciona en cuevas',
        'Que se data la costra de carbonato sobre el pigmento, no el pigmento, y el sistema puede estar abierto al agua',
        'Que las pinturas son demasiado recientes',
        'Que no existen pigmentos en esos yacimientos',
      ],
      answer: 1,
      explanation: 'La crítica de White y otros señala riesgo de sobrestimación por contaminación y por sistemas abiertos. El debate es fundamentalmente técnico y sigue sin cerrarse.',
    },
    {
      id: 'prehistoria-11', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: 'Los enterramientos de Sunguir, con miles de cuentas de marfil, sugieren que…',
      options: [
        'La desigualdad social solo aparece con la agricultura',
        'Existían diferencias de estatus marcadas ya entre cazadores-recolectores del Paleolítico',
        'El marfil carecía de valor',
        'Se trataba de una sociedad agrícola',
      ],
      answer: 1,
      explanation: 'Las cuentas representan miles de horas de trabajo destinadas a unos pocos individuos. La desigualdad no espera al Neolítico.',
    },
    {
      id: 'prehistoria-12', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué población transformó la genética europea hacia 3000 a. C., después de los agricultores anatolios?',
      options: ['Los fenicios', 'Los pastores esteparios de la cultura Yamnaya', 'Los egipcios', 'Los etruscos'],
      answer: 1,
      explanation: 'La expansión desde la estepa póntica aportó un tercer componente genético mayoritario en Europa y se asocia con la difusión de las lenguas indoeuropeas.',
    },
    {
      id: 'prehistoria-13', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Por qué el bronce favoreció el poder de las élites?',
      options: [
        'Porque era abundante en toda Europa',
        'Porque el estaño era escaso y de distribución desigual, lo que exigía controlar redes de intercambio largas',
        'Porque solo servía para objetos rituales',
        'Porque su fundición no requería especialistas',
      ],
      answer: 1,
      explanation: 'Quien controlaba las rutas del estaño controlaba la producción de bronce. La metalurgia introdujo una dependencia de larga distancia que el cobre local no imponía.',
    },
    {
      id: 'prehistoria-14', era: 'Antigüedad', topicId: 'prehistoria', topic: 'Prehistoria',
      question: '¿Qué significa que la domesticación deje «huellas morfológicas»?',
      options: [
        'Que aparece de golpe en una generación',
        'Que produce cambios como espigas que no se disgregan o cuernos reducidos, fijados a lo largo de siglos',
        'Que solo afecta a los animales',
        'Que es indetectable en el registro arqueológico',
      ],
      answer: 1,
      explanation: 'Por eso la frontera entre recolectar y cultivar es un gradiente: hubo siglos de manipulación humana antes de que los cambios morfológicos se consolidaran.',
    },
  ],
}
