import type { TopicModule } from '../types.ts'

export const mesopotamia: TopicModule = {
  topic: {
    id: 'mesopotamia',
    era: 'Antigüedad',
    title: 'Mesopotamia y el nacimiento del Estado',
    years: 'c. 4000–539 a. C.',
    country: 'Irak',
    description: 'Urbanización, escritura, derecho y los primeros imperios entre el Tigris y el Éufrates.',
    duration: '45 min',
    level: 'Universidad',
    progress: 0,
    visual: '𒀭',
    color: 'blue',
    summary:
      'Entre el Tigris y el Éufrates aparecieron, en el IV milenio a. C., las primeras ciudades de gran tamaño, la primera escritura y las primeras burocracias estatales conocidas. Mesopotamia no es solo la cuna cronológica de esos fenómenos: es el laboratorio donde mejor puede estudiarse cómo se articulan excedente agrario, templo, palacio, contabilidad y derecho, porque sus archivos en arcilla se conservan por centenares de miles de tablillas.',
    keyDates: [
      { date: 'c. 5500 a. C.', event: 'Cultura de Ubaid: primeros templos y agricultura irrigada en el sur.' },
      { date: 'c. 3500–3100 a. C.', event: 'Periodo Uruk: primera gran ciudad, contabilidad y escritura protocuneiforme.' },
      { date: 'c. 2900–2350 a. C.', event: 'Dinástico Arcaico: ciudades-Estado sumerias rivales (Ur, Lagash, Umma, Kish).' },
      { date: 'c. 2334 a. C.', event: 'Sargón de Acad funda el primer imperio territorial conocido.' },
      { date: 'c. 2112–2004 a. C.', event: 'Tercera dinastía de Ur: burocracia hiperdocumentada y códigos legales.' },
      { date: 'c. 1792–1750 a. C.', event: 'Reinado de Hammurabi de Babilonia; estela de leyes.' },
      { date: 'c. 1595 a. C.', event: 'Saqueo hitita de Babilonia; después, dominio casita.' },
      { date: 'c. 1350–1050 a. C.', event: 'Imperio asirio medio; expansión desde Assur.' },
      { date: '883–627 a. C.', event: 'Imperio neoasirio: deportaciones sistemáticas y ejército permanente.' },
      { date: '668–627 a. C.', event: 'Asurbanipal reúne en Nínive la gran biblioteca.' },
      { date: '612 a. C.', event: 'Caída de Nínive ante medos y babilonios.' },
      { date: '605–562 a. C.', event: 'Nabucodonosor II: imperio neobabilónico y deportación de Judá.' },
      { date: '539 a. C.', event: 'Ciro II de Persia toma Babilonia; fin de la independencia mesopotámica.' },
    ],
    sections: [
      {
        title: 'Un medio difícil: agua, sal y trabajo',
        body: [
          'La llanura aluvial del sur de Irak carece de piedra, de madera de construcción y de metales. Tiene, en cambio, suelos fértiles y dos ríos. Pero su régimen es problemático: el Tigris y el Éufrates crecen en primavera, cuando el cereal ya está en el campo, no antes de la siembra como el Nilo, y lo hacen de manera brusca e impredecible. Cultivar allí exige control activo del agua: canales de derivación, diques, compuertas y drenaje.',
          'Ese esfuerzo tuvo un coste ecológico documentado. La irrigación con evaporación intensa deposita sales en el suelo. Los archivos administrativos permiten seguir el proceso: entre 2400 y 1700 a. C., la proporción de cebada —más tolerante a la sal— frente al trigo pasó de un reparto equilibrado a un predominio casi absoluto, mientras los rendimientos registrados descendían. Thorkild Jacobsen y Robert Adams describieron esta salinización progresiva en un influyente artículo de 1958 y la vincularon al desplazamiento del centro político hacia el norte.',
          'La escasez de materias primas explica otra característica estructural: Mesopotamia dependió siempre del intercambio de larga distancia. La madera venía del Líbano y de los Zagros, el cobre de Omán y Anatolia, el lapislázuli de Afganistán, la cornalina del valle del Indo. Esa dependencia hizo del comercio y del control de rutas un asunto de Estado, y explica buena parte de su política exterior y militar.',
        ].join('\n\n'),
        callout:
          'La cebada no solo era alimento: funcionaba como unidad de cuenta y medio de pago de salarios. Los archivos expresan sueldos en litros de cebada y en pesos de plata mucho antes de que existiera la moneda acuñada.',
      },
      {
        title: 'La revolución urbana de Uruk',
        body: [
          'Hacia 3500 a. C., Uruk alcanzó una extensión y una población sin precedentes —las estimaciones oscilan entre 20.000 y 50.000 habitantes— y desarrolló una arquitectura monumental de templos sobre terrazas. Gordon Childe llamó a este proceso «revolución urbana» y lo caracterizó por diez rasgos: concentración demográfica, especialización artesanal, tributo, monumentalidad, clases sociales, escritura, ciencia predictiva, arte representativo, comercio exterior y un Estado con territorio.',
          'La contabilidad precedió a la escritura. Denise Schmandt-Besserat mostró que fichas de arcilla con formas convencionales (tokens) se usaban desde el VIII milenio para registrar cantidades de bienes. Esas fichas se guardaban en bullae —esferas de arcilla selladas— y, para saber qué contenían sin romperlas, se imprimían las formas en la superficie. El paso siguiente fue prescindir del contenido y conservar solo las marcas: la tablilla.',
          'Las primeras tablillas de Uruk IV, hacia 3300 a. C., son documentos económicos: cantidades de grano, cabezas de ganado, raciones, listas de profesiones. No hay poesía ni narración. La escritura nace como tecnología de gestión, no de literatura; los textos literarios llegan siglos después.',
          'El modelo político dominante durante el Dinástico Arcaico fue la ciudad-Estado: un núcleo urbano con su territorio agrícola, su dios tutelar, su templo y su gobernante —ensi o lugal—. Estas ciudades competían por agua y tierra de forma endémica. La disputa entre Lagash y Umma por la frontera de Guedena está documentada durante más de un siglo y produjo, en la Estela de los Buitres, uno de los primeros relatos de guerra conservados.',
        ].join('\n\n'),
      },
      {
        title: 'Escritura cuneiforme y cultura del archivo',
        body: [
          'El cuneiforme se escribía imprimiendo un cálamo de caña de sección triangular sobre arcilla fresca. Es un sistema mixto: signos logográficos que valen por una palabra, signos silábicos que valen por un sonido y determinativos que clasifican semánticamente. Se usó durante más de tres milenios y sirvió para lenguas muy distintas —sumerio, acadio, elamita, hitita, urartio—, del mismo modo que el alfabeto latino sirve hoy a lenguas sin parentesco.',
          'La arcilla es un soporte afortunado para el historiador: cuando un edificio ardía, las tablillas se cocían y se conservaban mejor. Por eso disponemos de archivos enteros. Los de la Tercera Dinastía de Ur suman más de cien mil documentos administrativos y permiten reconstruir la economía de un Estado antiguo con un detalle inalcanzable en otras civilizaciones: rendimientos por parcela, raciones por trabajador, censos de ganado, cuentas de talleres textiles con centenares de operarias.',
          'La formación de escribas se hacía en la edubba, la «casa de las tablillas». Sus ejercicios —listas léxicas, copias de proverbios, problemas matemáticos, textos de disputa entre estudiantes— revelan un currículo estable. Las matemáticas mesopotámicas usaban un sistema sexagesimal cuyo legado seguimos empleando: sesenta minutos, sesenta segundos, trescientos sesenta grados. La tablilla Plimpton 322 recoge ternas pitagóricas más de mil años antes de Pitágoras.',
          'El desciframiento moderno se debe sobre todo a Henry Rawlinson, que copió con riesgo considerable la inscripción trilingüe de Behistún, mandada grabar por Darío I en un acantilado. La versión en persa antiguo, más simple, sirvió de puerta de entrada al elamita y al acadio, del mismo modo que el griego lo fue para los jeroglíficos.',
        ].join('\n\n'),
        callout:
          'La *Epopeya de Gilgamesh* se conoce sobre todo por la versión estándar de la biblioteca de Asurbanipal. Su relato del diluvio, con un superviviente advertido por un dios, presenta paralelos evidentes con el bíblico y desató una polémica considerable cuando George Smith lo publicó en 1872.',
      },
      {
        title: 'Templo, palacio y economía: el debate sobre quién manda',
        body: [
          'La organización económica mesopotámica se ha interpretado de formas muy distintas. A comienzos del siglo XX, Anton Deimel propuso a partir de los archivos de Lagash el modelo de la «ciudad-templo»: el santuario poseería prácticamente toda la tierra y organizaría toda la producción, en una economía redistributiva sin propiedad privada relevante.',
          'La revisión posterior desmontó esa imagen. Igor Diakonoff mostró que los archivos de Lagash pertenecían a un solo templo y no representaban la totalidad de la ciudad, y documentó la existencia de tierra comunal de familias extensas y de propiedad privada transferible. Hoy se acepta un modelo pluralista: coexistían el sector del templo, el del palacio y un sector privado, con proporciones variables según épocas y ciudades.',
          'Ese debate se cruza con otro más amplio, el de la naturaleza de la economía antigua. Karl Polanyi sostuvo que las economías precapitalistas funcionaban por reciprocidad y redistribución, con «puertos de comercio» administrados, y no por mercados formadores de precios. Los asiriólogos que estudiaron el archivo de los mercaderes asirios de Kanesh —cartas privadas de negocios del siglo XIX a. C., con sociedades, créditos, intereses y arbitraje de precios entre Assur y Anatolia— han argumentado en sentido contrario.',
          'La cuestión no es meramente técnica: determina si cabe hablar de «capital», «mercado» o «beneficio» en el mundo antiguo, o si esos conceptos importan categorías modernas a sociedades que funcionaban con otra lógica. La postura mayoritaria actual es intermedia y empírica: hubo mercados y precios fluctuantes, pero insertos en instituciones —templo, palacio, familia— que los modelaban de forma decisiva.',
        ].join('\n\n'),
      },
      {
        title: 'Derecho, justicia y el problema del Código de Hammurabi',
        body: [
          'La estela de diorita de Hammurabi, hallada en Susa en 1901, contiene un prólogo, unas 282 disposiciones y un epílogo. Es el texto jurídico antiguo más conocido, aunque no el más antiguo: le preceden las reformas de Urukagina, el código de Ur-Nammu y el de Lipit-Ishtar.',
          'Sus disposiciones tienen forma casuística —«si un hombre hace X, entonces Y»— y aplican penas diferenciadas según el estatus del implicado. La sociedad distingue tres categorías: awilum (hombre libre de pleno derecho), mushkenum (dependiente) y wardum (esclavo). Golpear a un awilum y golpear a un esclavo tienen consecuencias distintas; matar a la hija de un hombre puede castigarse ejecutando a la hija del culpable. La ley del talión convive con la compensación económica según quién sea la víctima.',
          'El debate historiográfico central es qué era realmente este texto. La lectura tradicional lo entendía como un código vigente, aplicable por los tribunales. La objeción decisiva es que los miles de documentos judiciales conservados de la época prácticamente nunca lo citan, y que en ocasiones resuelven en sentido distinto al que la estela prescribe. Jean Bottéro y F. R. Kraus propusieron por ello leerlo como un monumento ideológico: la exhibición de un rey justo ante los dioses y la posteridad, quizá también como colección de precedentes ejemplares para la formación de jueces.',
          'Con todo, el texto documenta bien la estructura social: precios máximos, salarios, responsabilidad profesional del constructor y del médico, régimen del matrimonio y del divorcio, deudas y esclavitud por deudas. Y muestra una preocupación recurrente en la ideología real mesopotámica: la proclamación periódica de misharum, cancelaciones generales de deudas destinadas a impedir que el endeudamiento privara al Estado de contribuyentes y soldados.',
        ].join('\n\n'),
        callout:
          'El prólogo de la estela afirma que la ley existe «para que el fuerte no oprima al débil». Es la formulación más antigua conservada de la justicia como límite del poder, aunque su aplicación real fuese muy desigual.',
      },
      {
        title: 'De la ciudad-Estado al imperio',
        body: [
          'Sargón de Acad, hacia 2334 a. C., sometió las ciudades sumerias y construyó la primera estructura política que puede llamarse imperio territorial: gobernadores designados, guarniciones, una lengua administrativa común y una hija instalada como sacerdotisa en Ur —Enheduanna, autora de himnos y primera figura literaria de la historia cuyo nombre conocemos—.',
          'La Tercera Dinastía de Ur llevó la centralización al extremo. Su documentación permite ver un Estado que controla talleres, redistribuye raciones, mide el trabajo en jornadas-hombre y penaliza los déficits de producción. Ese aparato resultó frágil: se derrumbó en pocas décadas por la combinación de presión amorrea, crisis agrarias y rigidez fiscal.',
          'El imperio neoasirio (siglos IX-VII a. C.) fue la construcción más duradera y también la más brutal de las documentadas. Se apoyó en un ejército permanente, en el uso sistemático del terror como instrumento de disuasión —relieves palaciales que exhiben empalamientos y desollamientos— y en la deportación masiva de poblaciones enteras, calculada en varios millones de personas a lo largo de tres siglos. La política tenía una lógica administrativa: desarraigar élites locales, romper solidaridades y reasentar mano de obra donde se necesitaba.',
          'Su caída fue rápida. La coalición de medos y babilonios tomó Assur en 614 y Nínive en 612 a. C. El imperio neobabilónico de Nabopolasar y Nabucodonosor II heredó el espacio, reconstruyó Babilonia con la puerta de Ishtar y la gran ziggurat, y deportó a las élites de Judá, episodio que la Biblia hebrea convirtió en experiencia fundacional. En 539 a. C., Ciro II de Persia entró en Babilonia; el Cilindro de Ciro presenta la conquista como restauración del culto de Marduk frente a un rey impío, en un ejercicio de propaganda dirigido a la élite sacerdotal local.',
          'Mesopotamia dejó de ser un centro político independiente, pero su cultura escrita continuó siglos: hay tablillas astronómicas cuneiformes fechadas ya en época romana. La astronomía babilónica, con sus registros sistemáticos de posiciones planetarias, alimentó directamente a la griega y, a través de ella, a la moderna.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Cuneiforme', definition: 'Escritura de signos en forma de cuña impresos sobre arcilla. Sistema mixto usado para varias lenguas durante tres milenios.' },
      { term: 'Ziggurat', definition: 'Templo escalonado sobre terrazas superpuestas, centro simbólico y económico de la ciudad mesopotámica.' },
      { term: 'Ensi / lugal', definition: 'Títulos del gobernante sumerio: «gobernador» del dios de la ciudad y «hombre grande» o rey.' },
      { term: 'Ciudad-Estado', definition: 'Núcleo urbano con territorio agrícola, dios tutelar y gobierno propio. Modelo político del Dinástico Arcaico.' },
      { term: 'Awilum / mushkenum / wardum', definition: 'Las tres categorías jurídicas del Código de Hammurabi: libre pleno, dependiente y esclavo.' },
      { term: 'Misharum', definition: 'Cancelación general de deudas proclamada por el rey para evitar la ruina de los contribuyentes.' },
      { term: 'Edubba', definition: '«Casa de las tablillas»: escuela de escribas con un currículo estable de listas, copias y matemáticas.' },
      { term: 'Bulla y tokens', definition: 'Fichas de arcilla contables y su envoltura sellada. Precedente directo de la tablilla escrita.' },
      { term: 'Sexagesimal', definition: 'Sistema numérico de base 60 mesopotámico, origen de nuestros minutos, segundos y grados.' },
      { term: 'Salinización', definition: 'Acumulación de sales en suelos irrigados con fuerte evaporación. Documentada en el paso del trigo a la cebada.' },
    ],
    debates: [
      {
        question: '¿Era la economía mesopotámica una economía de templo redistributiva o existían mercados?',
        positions: [
          {
            school: 'Ciudad-templo (Deimel, años 1920-30)',
            argument:
              'Los archivos de Lagash mostrarían que el templo poseía la tierra y organizaba la producción y el reparto. No habría propiedad privada significativa ni mercado formador de precios.',
          },
          {
            school: 'Revisión pluralista (Diakonoff, Gelb)',
            argument:
              'Los archivos de Lagash corresponden a un solo templo, no a la ciudad entera. Existían tierra comunal de familias extensas y propiedad privada transferible junto a los sectores del templo y del palacio.',
          },
          {
            school: 'Sustantivismo (Polanyi) frente a formalismo',
            argument:
              'Polanyi negaba mercados formadores de precios en el mundo antiguo. Los archivos de los mercaderes asirios de Kanesh, con sociedades, créditos, intereses y arbitraje entre plazas, se han esgrimido en contra.',
          },
        ],
        state:
          'Domina hoy una posición intermedia: hubo precios fluctuantes, crédito y comercio privado, pero insertos en instituciones (templo, palacio, familia) que condicionaban de forma decisiva su funcionamiento. La discusión sigue viva sobre cuánto pesaba cada sector y cómo varía por época y región.',
      },
      {
        question: '¿Fue el Código de Hammurabi derecho aplicado o propaganda real?',
        positions: [
          {
            school: 'Lectura legalista tradicional',
            argument:
              'Se trataría de una codificación vigente, destinada a unificar el derecho del reino y a ser aplicada por los tribunales, como sugiere su forma articulada y su exposición pública.',
          },
          {
            school: 'Lectura ideológica (Kraus, Bottéro)',
            argument:
              'Los miles de documentos judiciales conservados casi nunca lo citan y a veces resuelven en sentido contrario. Sería un monumento de autolegitimación —el rey justo ante Shamash— y, quizá, una colección de precedentes ejemplares para la enseñanza.',
          },
        ],
        state:
          'La lectura ideológica es hoy mayoritaria, pero se reconoce que el texto refleja normas y prácticas reales. Se prefiere hablar de «colección de sentencias» antes que de «código» en sentido moderno.',
      },
      {
        question: '¿Por qué se desplazó el centro de poder del sur hacia el norte de Mesopotamia?',
        positions: [
          {
            school: 'Degradación ecológica (Jacobsen y Adams, 1958)',
            argument:
              'La salinización progresiva de los suelos irrigados del sur redujo los rendimientos, forzó la sustitución del trigo por la cebada y minó la base agraria del poder sumerio.',
          },
          {
            school: 'Factores políticos y militares',
            argument:
              'El desplazamiento se explicaría mejor por la presión de poblaciones amorreas y arameas, por la fragilidad fiscal de Estados hipercentralizados como Ur III y por el control de rutas comerciales del norte.',
          },
        ],
        state:
          'Se admite la salinización como proceso real y bien documentado, pero se rechaza como causa única. La explicación dominante es multifactorial y subraya la interacción entre estrés ecológico, rigidez institucional y presión externa.',
      },
    ],
    sources: [
      { author: 'Anónimo', title: 'Epopeya de Gilgamesh (versión estándar)', year: 'c. s. XII a. C.', kind: 'primaria', note: 'Conservada sobre todo en la biblioteca de Asurbanipal. Contiene el relato del diluvio.' },
      { author: 'Hammurabi', title: 'Estela de leyes', year: 'c. 1750 a. C.', kind: 'primaria', note: 'Prólogo, 282 disposiciones casuísticas y epílogo. Hallada en Susa en 1901.' },
      { author: 'Enheduanna', title: 'Himnos a Inanna', year: 'c. 2280 a. C.', kind: 'primaria', note: 'Primera autoría literaria conocida por su nombre. Hija de Sargón y sacerdotisa en Ur.' },
      { author: 'Darío I', title: 'Inscripción de Behistún', year: 'c. 520 a. C.', kind: 'primaria', note: 'Texto trilingüe cuya copia por Rawlinson permitió descifrar el cuneiforme.' },
      { author: 'Anónimo', title: 'Cilindro de Ciro', year: '539 a. C.', kind: 'primaria', note: 'Presenta la conquista persa como restauración del culto de Marduk. Documento de propaganda.' },
      { author: 'Thorkild Jacobsen y Robert Adams', title: '«Salt and Silt in Ancient Mesopotamian Agriculture», Science', year: '1958', kind: 'estudio', note: 'Formula la tesis de la salinización como factor de declive del sur.' },
      { author: 'Igor M. Diakonoff', title: 'Structure of Society and State in Early Dynastic Sumer', year: '1959', kind: 'estudio', note: 'Refuta el modelo de la ciudad-templo de Deimel.' },
      { author: 'Denise Schmandt-Besserat', title: 'Before Writing', year: '1992', kind: 'estudio', note: 'Traza el origen contable de la escritura a partir de las fichas de arcilla.' },
      { author: 'Jean Bottéro', title: 'Mésopotamie. L\'écriture, la raison et les dieux', year: '1987', kind: 'estudio', note: 'Reinterpreta el Código de Hammurabi y la racionalidad mesopotámica.' },
      { author: 'Marc Van De Mieroop', title: 'A History of the Ancient Near East', year: '2004 (3.ª ed. 2015)', kind: 'estudio', note: 'Manual de referencia actualizado sobre el conjunto del Próximo Oriente antiguo.' },
      { author: 'Amélie Kuhrt', title: 'The Ancient Near East, c. 3000–330 BC', year: '1995', kind: 'estudio', note: 'Síntesis crítica de amplio alcance, atenta a los problemas de fuentes.' },
    ],
  },
  questions: [
    {
      id: 'mesopotamia-1', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Por qué la agricultura mesopotámica exigía más intervención humana que la egipcia?',
      options: [
        'Porque no llovía nunca',
        'Porque la crecida era brusca, impredecible y llegaba con el cereal ya en el campo',
        'Porque los suelos eran estériles',
        'Porque no disponían de arado',
      ],
      answer: 1,
      explanation: 'El calendario del Tigris y el Éufrates no encajaba con el ciclo del cereal, así que hacían falta canales, diques y drenaje activo.',
    },
    {
      id: 'mesopotamia-2', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué revela el paso del trigo a la cebada en los archivos del sur entre 2400 y 1700 a. C.?',
      options: [
        'Un cambio de gustos alimentarios',
        'Una salinización progresiva de los suelos irrigados',
        'La llegada de nuevos cultivos desde la India',
        'Una prohibición religiosa del trigo',
      ],
      answer: 1,
      explanation: 'La cebada tolera mejor la sal. Jacobsen y Adams vincularon en 1958 este desplazamiento y la caída de rendimientos con la degradación del suelo.',
    },
    {
      id: 'mesopotamia-3', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: 'Según Schmandt-Besserat, ¿cuál fue el origen de la escritura?',
      options: [
        'La necesidad de registrar poemas religiosos',
        'La contabilidad: fichas de arcilla guardadas en bullae cuyas marcas externas acabaron sustituyendo al contenido',
        'La correspondencia diplomática',
        'La necesidad de escribir leyes',
      ],
      answer: 1,
      explanation: 'Las primeras tablillas de Uruk son documentos económicos. La escritura nace como tecnología de gestión; la literatura llega siglos después.',
    },
    {
      id: 'mesopotamia-4', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Por qué disponemos de archivos mesopotámicos tan completos?',
      options: [
        'Porque se escribían en pergamino tratado',
        'Porque la arcilla se cocía en los incendios y se conservaba mejor',
        'Porque se copiaron en época romana',
        'Porque se guardaban en tumbas selladas',
      ],
      answer: 1,
      explanation: 'La destrucción por fuego, ruinosa para el edificio, fue una suerte documental: los archivos de Ur III suman más de cien mil tablillas.',
    },
    {
      id: 'mesopotamia-5', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué objeción decisiva se plantea a leer el Código de Hammurabi como derecho vigente?',
      options: [
        'Que la estela está incompleta',
        'Que los documentos judiciales de la época casi nunca lo citan y a veces resuelven en sentido contrario',
        'Que fue escrito en sumerio, lengua ya muerta',
        'Que se descubrió fuera de Mesopotamia',
      ],
      answer: 1,
      explanation: 'Kraus y Bottéro propusieron por eso leerlo como monumento ideológico y colección de precedentes ejemplares, no como código aplicable.',
    },
    {
      id: 'mesopotamia-6', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué eran las proclamaciones de misharum?',
      options: [
        'Campañas militares anuales',
        'Cancelaciones generales de deudas decretadas por el rey',
        'Censos de población',
        'Fiestas de año nuevo',
      ],
      answer: 1,
      explanation: 'Evitaban que el endeudamiento y la esclavitud por deudas privaran al Estado de contribuyentes y de reclutas. Eran una medida de estabilidad fiscal, no de caridad.',
    },
    {
      id: 'mesopotamia-7', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué demostró Diakonoff frente al modelo de «ciudad-templo» de Deimel?',
      options: [
        'Que los templos no existían',
        'Que los archivos de Lagash correspondían a un solo templo y coexistían tierra comunal y propiedad privada',
        'Que toda la tierra era del rey',
        'Que la economía era plenamente capitalista',
      ],
      answer: 1,
      explanation: 'El modelo hoy aceptado es pluralista: templo, palacio y sector privado conviven en proporciones variables según la época y la ciudad.',
    },
    {
      id: 'mesopotamia-8', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué documenta el archivo de los mercaderes asirios de Kanesh?',
      options: [
        'Un sistema económico sin precios ni crédito',
        'Sociedades mercantiles, créditos, intereses y arbitraje de precios entre Assur y Anatolia',
        'La conquista de Anatolia por Sargón',
        'La construcción de la ziggurat de Ur',
      ],
      answer: 1,
      explanation: 'Es el argumento empírico más citado contra la tesis sustantivista de Polanyi sobre la ausencia de mercados en el mundo antiguo.',
    },
    {
      id: 'mesopotamia-9', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué innovación política representa el imperio de Sargón de Acad?',
      options: [
        'La primera ciudad-Estado',
        'El primer imperio territorial: gobernadores designados, guarniciones y lengua administrativa común',
        'La primera democracia',
        'La primera federación de templos',
      ],
      answer: 1,
      explanation: 'Sargón somete las ciudades sumerias e impone una estructura supraurbana. Su hija Enheduanna, sacerdotisa en Ur, es la primera autora conocida por su nombre.',
    },
    {
      id: 'mesopotamia-10', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué función administrativa tenían las deportaciones neoasirias?',
      options: [
        'Ninguna: eran castigos arbitrarios',
        'Desarraigar élites locales, romper solidaridades y reasentar mano de obra donde se necesitaba',
        'Repoblar el desierto',
        'Financiar el ejército mediante rescates',
      ],
      answer: 1,
      explanation: 'La política afectó a varios millones de personas en tres siglos y combinaba disuasión mediante el terror con una lógica de gestión de recursos humanos.',
    },
    {
      id: 'mesopotamia-11', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué legado numérico mesopotámico seguimos utilizando?',
      options: [
        'El sistema decimal',
        'El sistema sexagesimal: minutos, segundos y grados',
        'La numeración romana',
        'El cero posicional',
      ],
      answer: 1,
      explanation: 'La base 60 sobrevive en la medida del tiempo y de los ángulos. La tablilla Plimpton 322 recoge además ternas pitagóricas mucho antes de Pitágoras.',
    },
    {
      id: 'mesopotamia-12', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Cómo presenta el Cilindro de Ciro la conquista de Babilonia en 539 a. C.?',
      options: [
        'Como una masacre ejemplar',
        'Como una restauración del culto de Marduk frente a un rey impío',
        'Como una anexión pactada con Egipto',
        'Como una victoria de los dioses persas sobre los babilonios',
      ],
      answer: 1,
      explanation: 'Es propaganda dirigida a la élite sacerdotal local: legitima al conquistador presentándolo como restaurador del orden religioso tradicional.',
    },
    {
      id: 'mesopotamia-13', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Por qué Mesopotamia dependió estructuralmente del comercio de larga distancia?',
      options: [
        'Porque su población era demasiado grande para autoabastecerse de grano',
        'Porque la llanura aluvial carece de piedra, madera y metales',
        'Porque prohibía la artesanía local',
        'Porque su moneda solo era aceptada en el extranjero',
      ],
      answer: 1,
      explanation: 'Madera del Líbano, cobre de Omán, lapislázuli de Afganistán, cornalina del Indo: el control de rutas se convirtió en un asunto de Estado.',
    },
    {
      id: 'mesopotamia-14', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué papel tuvo la inscripción de Behistún?',
      options: [
        'Fue el primer código legal conocido',
        'Su versión trilingüe permitió descifrar el cuneiforme, como la piedra de Rosetta con los jeroglíficos',
        'Contiene la Epopeya de Gilgamesh',
        'Registra el censo del imperio asirio',
      ],
      answer: 1,
      explanation: 'Rawlinson copió el texto de Darío I grabado en un acantilado. El persa antiguo, más simple, abrió la puerta al elamita y al acadio.',
    },
    {
      id: 'mesopotamia-15', era: 'Antigüedad', topicId: 'mesopotamia', topic: 'Mesopotamia',
      question: '¿Qué distinción social establece el Código de Hammurabi?',
      options: [
        'Ninguna: todos eran iguales ante la ley',
        'Awilum, mushkenum y wardum, con penas diferenciadas según el estatus',
        'Solo entre hombres y mujeres',
        'Solo entre sacerdotes y laicos',
      ],
      answer: 1,
      explanation: 'La misma agresión tiene consecuencias distintas según a quién se cometa. El talión convive con la compensación económica según el estatus de la víctima.',
    },
  ],
}
