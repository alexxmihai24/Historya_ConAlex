/* Datos del prototipo. Los temas y las eras salen de src/data/history.ts del repo
   (10 módulos reales), así el globo sólo promete lo que la biblioteca ya tiene. */
window.HISTORYA_ES_NAMES = {
  Spain: 'España', France: 'Francia', Italy: 'Italia', Greece: 'Grecia', Portugal: 'Portugal',
  Germany: 'Alemania', 'United Kingdom': 'Reino Unido', Ireland: 'Irlanda', Netherlands: 'Países Bajos',
  Belgium: 'Bélgica', Switzerland: 'Suiza', Austria: 'Austria', Poland: 'Polonia', Czechia: 'Chequia',
  Hungary: 'Hungría', Romania: 'Rumanía', Bulgaria: 'Bulgaria', Serbia: 'Serbia', Croatia: 'Croacia',
  Albania: 'Albania', Sweden: 'Suecia', Norway: 'Noruega', Denmark: 'Dinamarca', Finland: 'Finlandia',
  Iceland: 'Islandia', Russia: 'Rusia', Ukraine: 'Ucrania', Belarus: 'Bielorrusia', Turkey: 'Turquía',
  Greenland: 'Groenlandia', Egypt: 'Egipto', Libya: 'Libia', Tunisia: 'Túnez', Algeria: 'Argelia',
  Morocco: 'Marruecos', 'W. Sahara': 'Sáhara Occidental', Mauritania: 'Mauritania', Mali: 'Malí',
  Niger: 'Níger', Chad: 'Chad', Sudan: 'Sudán', 'S. Sudan': 'Sudán del Sur', Ethiopia: 'Etiopía',
  Eritrea: 'Eritrea', Somalia: 'Somalia', Kenya: 'Kenia', Uganda: 'Uganda', Tanzania: 'Tanzania',
  Nigeria: 'Nigeria', Ghana: 'Ghana', Senegal: 'Senegal', Cameroon: 'Camerún', 'Dem. Rep. Congo': 'Rep. Dem. del Congo',
  Angola: 'Angola', Zambia: 'Zambia', Zimbabwe: 'Zimbabue', Mozambique: 'Mozambique', Madagascar: 'Madagascar',
  'South Africa': 'Sudáfrica', Namibia: 'Namibia', Botswana: 'Botsuana', Iraq: 'Irak', Iran: 'Irán',
  'Saudi Arabia': 'Arabia Saudí', Yemen: 'Yemen', Oman: 'Omán', Jordan: 'Jordania', Israel: 'Israel',
  Palestine: 'Palestina', Lebanon: 'Líbano', Syria: 'Siria', Kuwait: 'Kuwait', Qatar: 'Catar',
  'United Arab Emirates': 'Emiratos Árabes Unidos', Afghanistan: 'Afganistán', Pakistan: 'Pakistán',
  India: 'India', Nepal: 'Nepal', Bhutan: 'Bután', Bangladesh: 'Bangladés', 'Sri Lanka': 'Sri Lanka',
  China: 'China', Mongolia: 'Mongolia', 'North Korea': 'Corea del Norte', 'South Korea': 'Corea del Sur',
  Japan: 'Japón', Taiwan: 'Taiwán', Vietnam: 'Vietnam', Laos: 'Laos', Cambodia: 'Camboya',
  Thailand: 'Tailandia', Myanmar: 'Birmania', Malaysia: 'Malasia', Indonesia: 'Indonesia',
  Philippines: 'Filipinas', Kazakhstan: 'Kazajistán', Uzbekistan: 'Uzbekistán', Turkmenistan: 'Turkmenistán',
  Kyrgyzstan: 'Kirguistán', Tajikistan: 'Tayikistán', Azerbaijan: 'Azerbaiyán', Armenia: 'Armenia',
  Georgia: 'Georgia', Australia: 'Australia', 'New Zealand': 'Nueva Zelanda', 'Papua New Guinea': 'Papúa Nueva Guinea',
  'United States of America': 'Estados Unidos', Canada: 'Canadá', Mexico: 'México', Guatemala: 'Guatemala',
  Honduras: 'Honduras', 'El Salvador': 'El Salvador', Nicaragua: 'Nicaragua', 'Costa Rica': 'Costa Rica',
  Panama: 'Panamá', Cuba: 'Cuba', 'Dominican Rep.': 'Rep. Dominicana', Haiti: 'Haití', Jamaica: 'Jamaica',
  Colombia: 'Colombia', Venezuela: 'Venezuela', Ecuador: 'Ecuador', Peru: 'Perú', Bolivia: 'Bolivia',
  Chile: 'Chile', Argentina: 'Argentina', Uruguay: 'Uruguay', Paraguay: 'Paraguay', Brazil: 'Brasil',
  Guyana: 'Guyana', Suriname: 'Surinam', Cyprus: 'Chipre', Slovakia: 'Eslovaquia', Slovenia: 'Eslovenia',
  'Bosnia and Herz.': 'Bosnia y Herzegovina', Montenegro: 'Montenegro', 'North Macedonia': 'Macedonia del Norte',
  Moldova: 'Moldavia', Lithuania: 'Lituania', Latvia: 'Letonia', Estonia: 'Estonia', Luxembourg: 'Luxemburgo'
};

window.HISTORYA_DATA = {
  eras: [
    { name: 'Antigüedad', range: 'c. 3500 a. C.–476' },
    { name: 'Edad Media', range: '476–1453' },
    { name: 'Edad Moderna', range: '1453–1789' },
    { name: 'Edad Contemporánea', range: '1789–hoy' }
  ],
  countries: {
    'Egipto': {
      resumen: 'Tres mil años de estado a la orilla de un río: la civilización que convirtió una crecida anual en un calendario, un impuesto y una religión.',
      alex: 'Empieza por aquí si es tu primera vez. Egipto explica cómo nace un estado.',
      audio: '7 min',
      topics: [{ id: 'egipto', title: 'Antiguo Egipto', era: 'Antigüedad', years: 'c. 3100–30 a. C.', duration: '12 min', level: 'ESO' }],
      hitos: [
        { date: 'c. 3100 a. C.', event: 'Unificación del Alto y Bajo Egipto' },
        { date: 'c. 2560 a. C.', event: 'Gran Pirámide de Guiza' },
        { date: '1332 a. C.', event: 'Tutankamón sube al trono' },
        { date: '30 a. C.', event: 'Muerte de Cleopatra VII: Egipto pasa a Roma' }
      ]
    },
    'Grecia': {
      resumen: 'Ciudades pequeñas, ideas enormes: la polis inventa el debate público y con él la política tal como la discutimos hoy.',
      alex: 'Fíjate en el 508 a. C.: no es una fecha bonita, es el día que empieza la discusión.',
      audio: '6 min',
      topics: [{ id: 'grecia', title: 'Grecia clásica', era: 'Antigüedad', years: 'c. 800–146 a. C.', duration: '11 min', level: 'ESO' }],
      hitos: [
        { date: '508 a. C.', event: 'Reformas de Clístenes en Atenas' },
        { date: '480 a. C.', event: 'Batalla naval de Salamina' },
        { date: '431 a. C.', event: 'Comienza la guerra del Peloponeso' },
        { date: '336 a. C.', event: 'Alejandro hereda Macedonia' }
      ]
    },
    'Italia': {
      resumen: 'De una ciudad junto al Tíber a un imperio de tres continentes, y de ahí a la pregunta que nunca se cierra: ¿por qué cayó?',
      alex: 'Dos lecciones aquí: la República y el Imperio. No las mezcles, son dos animales distintos.',
      audio: '9 min',
      topics: [
        { id: 'roma-republica', title: 'Roma: la República', era: 'Antigüedad', years: '509–27 a. C.', duration: '13 min', level: 'Bachillerato' },
        { id: 'roma-imperio', title: 'Roma: el Imperio', era: 'Antigüedad', years: '27 a. C.–476', duration: '14 min', level: 'Bachillerato' }
      ],
      hitos: [
        { date: '509 a. C.', event: 'Fin de la monarquía, nace la República' },
        { date: '27 a. C.', event: 'Augusto y el principado' },
        { date: '212', event: 'Ciudadanía para casi todo el Imperio' },
        { date: '476', event: 'Depuesto el último emperador de Occidente' }
      ]
    },
    'Turquía': {
      resumen: 'Constantinopla: la ciudad que sostuvo el Imperio romano mil años más de lo que dicen los manuales.',
      alex: 'Si crees que Roma cayó en 476, Bizancio te va a incomodar. Para bien.',
      audio: '8 min',
      topics: [{ id: 'bizancio', title: 'Bizancio', era: 'Edad Media', years: '330–1453', duration: '12 min', level: 'Bachillerato' }],
      hitos: [
        { date: '330', event: 'Constantino funda Constantinopla' },
        { date: '537', event: 'Se consagra Santa Sofía' },
        { date: '1204', event: 'La Cuarta Cruzada saquea la ciudad' },
        { date: '1453', event: 'Caída de Constantinopla' }
      ]
    },
    'Irak': {
      resumen: 'Entre dos ríos se escribe por primera vez: contabilidad, leyes y literatura salen del mismo barro.',
      alex: 'La escritura no nace para poesía, nace para contar sacos de cebada. Me encanta ese detalle.',
      audio: '6 min',
      topics: [{ id: 'mesopotamia', title: 'Mesopotamia', era: 'Antigüedad', years: 'c. 3500–539 a. C.', duration: '10 min', level: 'ESO' }],
      hitos: [
        { date: 'c. 3200 a. C.', event: 'Primeras tablillas cuneiformes en Uruk' },
        { date: 'c. 1750 a. C.', event: 'Código de Hammurabi' },
        { date: '539 a. C.', event: 'Ciro toma Babilonia' }
      ]
    },
    'España': {
      resumen: 'Ocho siglos de frontera móvil: Al-Ándalus no es un paréntesis, es parte del suelo.',
      alex: 'Córdoba en el siglo X era la ciudad más grande de Europa occidental. Ahí lo dejo.',
      audio: '8 min',
      topics: [{ id: 'andalus', title: 'Al-Ándalus', era: 'Edad Media', years: '711–1492', duration: '13 min', level: 'Bachillerato' }],
      hitos: [
        { date: '711', event: 'Desembarco musulmán en la península' },
        { date: '929', event: 'Abderramán III proclama el califato de Córdoba' },
        { date: '1085', event: 'Toledo pasa a Castilla' },
        { date: '1492', event: 'Capitulación de Granada' }
      ]
    },
    'Francia': {
      resumen: 'De las cuevas del Périgord al orden feudal: el mismo territorio, dos maneras opuestas de organizar a la gente.',
      alex: 'Lascaux tiene 17.000 años y sigue siendo mejor dibujo que el mío.',
      audio: '7 min',
      topics: [
        { id: 'prehistoria', title: 'Prehistoria', era: 'Antigüedad', years: 'c. 40000–3500 a. C.', duration: '9 min', level: 'ESO' },
        { id: 'feudalismo', title: 'Feudalismo', era: 'Edad Media', years: 'c. 900–1300', duration: '11 min', level: 'Bachillerato' }
      ],
      hitos: [
        { date: 'c. 17000 a. C.', event: 'Pinturas de Lascaux' },
        { date: '800', event: 'Carlomagno, coronado emperador' },
        { date: '987', event: 'Hugo Capeto, rey de los francos' },
        { date: '1214', event: 'Bouvines consolida el poder real' }
      ]
    },
    'Arabia Saudí': {
      resumen: 'En un siglo, una comunidad de la península árabe reorganiza el mapa entre el Indo y el Atlántico.',
      alex: 'La velocidad es lo asombroso: cien años, tres continentes.',
      audio: '7 min',
      topics: [{ id: 'islam', title: 'El islam medieval', era: 'Edad Media', years: '622–1258', duration: '12 min', level: 'Bachillerato' }],
      hitos: [
        { date: '622', event: 'La hégira: de La Meca a Medina' },
        { date: '632', event: 'Muerte de Mahoma' },
        { date: '750', event: 'Los abasíes trasladan el centro a Bagdad' }
      ]
    }
  }
};

/* Mapas históricos: extensión aproximada proyectada sobre fronteras actuales
   (convención honesta: no dibujamos fronteras antiguas que no podemos verificar). */
window.HISTORYA_DATA.mapas = {
  'Italia': {
    label: 'Imperio romano, extensión máxima',
    year: '117 d. C.',
    note: 'Bajo Trajano: unos 4 millones de km² y cerca de 50 millones de habitantes.',
    countries: 'Italia,España,Portugal,Francia,Reino Unido,Bélgica,Países Bajos,Suiza,Austria,Eslovenia,Croacia,Bosnia y Herzegovina,Serbia,Montenegro,Albania,Macedonia del Norte,Grecia,Bulgaria,Rumanía,Hungría,Turquía,Siria,Líbano,Israel,Palestina,Jordania,Egipto,Libia,Túnez,Argelia,Marruecos,Chipre'
  },
  'Egipto': { label: 'Egipto faraónico y el Nilo', year: 'c. 1450 a. C.', note: 'El estado se organiza a lo largo del río, de la primera catarata al delta.', countries: 'Egipto,Sudán,Israel,Palestina,Líbano,Jordania' },
  'Grecia': { label: 'Mundo griego y colonias', year: 'c. 500 a. C.', note: 'Poleis dispersas por el Egeo, Sicilia, el sur de Italia y el mar Negro.', countries: 'Grecia,Turquía,Italia,Chipre,Albania,Bulgaria,Libia' },
  'Turquía': { label: 'Imperio bizantino bajo Justiniano', year: '565', note: 'La última reconquista del Mediterráneo desde Constantinopla.', countries: 'Turquía,Grecia,Bulgaria,Italia,Chipre,Siria,Líbano,Israel,Palestina,Jordania,Egipto,Libia,Túnez,España' },
  'España': { label: 'Al-Ándalus, califato de Córdoba', year: '1000', note: 'La frontera se mueve durante ocho siglos; Córdoba es la mayor ciudad de Europa occidental.', countries: 'España,Portugal,Marruecos' },
  'Irak': { label: 'Mesopotamia entre dos ríos', year: 'c. 1750 a. C.', note: 'Tigris y Éufrates: donde se escribe por primera vez.', countries: 'Irak,Siria,Turquía,Irán,Kuwait' },
  'Francia': { label: 'Imperio carolingio', year: '814', note: 'Carlomagno reúne el occidente latino por última vez antes del feudalismo.', countries: 'Francia,Alemania,Bélgica,Países Bajos,Luxemburgo,Suiza,Austria,Italia,Chequia,Eslovenia' },
  'Arabia Saudí': { label: 'Expansión del islam', year: '750', note: 'Del Indo al Atlántico en poco más de un siglo.', countries: 'Arabia Saudí,Yemen,Omán,Emiratos Árabes Unidos,Catar,Kuwait,Irak,Siria,Jordania,Israel,Palestina,Líbano,Egipto,Libia,Túnez,Argelia,Marruecos,España,Portugal,Irán,Afganistán,Pakistán,Turkmenistán,Uzbekistán'
  }
};

/* Biblioteca: los 10 módulos de src/data/topics/ */
window.HISTORYA_DATA.topics = [
  { id: 'prehistoria', title: 'Prehistoria', era: 'Antigüedad', country: 'Francia', years: 'c. 40000–3500 a. C.', duration: '35 min', level: 'ESO', progress: 100 },
  { id: 'mesopotamia', title: 'Mesopotamia', era: 'Antigüedad', country: 'Irak', years: 'c. 3500–539 a. C.', duration: '40 min', level: 'ESO', progress: 60 },
  { id: 'egipto', title: 'Antiguo Egipto', era: 'Antigüedad', country: 'Egipto', years: 'c. 3100–30 a. C.', duration: '45 min', level: 'ESO', progress: 25 },
  { id: 'grecia', title: 'Grecia clásica', era: 'Antigüedad', country: 'Grecia', years: 'c. 800–146 a. C.', duration: '45 min', level: 'Bachillerato', progress: 0 },
  { id: 'roma-republica', title: 'La República romana', era: 'Antigüedad', country: 'Italia', years: '509–27 a. C.', duration: '50 min', level: 'Bachillerato', progress: 0 },
  { id: 'roma-imperio', title: 'El Imperio romano y su transformación', era: 'Antigüedad', country: 'Italia', years: '27 a. C.–476 d. C.', duration: '50 min', level: 'Universidad', progress: 0 },
  { id: 'bizancio', title: 'Bizancio', era: 'Edad Media', country: 'Turquía', years: '330–1453', duration: '45 min', level: 'Bachillerato', progress: 0 },
  { id: 'islam', title: 'El islam medieval', era: 'Edad Media', country: 'Arabia Saudí', years: '622–1258', duration: '45 min', level: 'Bachillerato', progress: 0 },
  { id: 'andalus', title: 'Al-Ándalus', era: 'Edad Media', country: 'España', years: '711–1492', duration: '50 min', level: 'Bachillerato', progress: 0 },
  { id: 'feudalismo', title: 'Feudalismo', era: 'Edad Media', country: 'Francia', years: 'c. 900–1300', duration: '40 min', level: 'Bachillerato', progress: 0 }
];

/* Preguntas reales de src/data/topics/roma-imperio.ts + variantes de formato */
window.HISTORYA_DATA.quiz = [
  {
    kind: 'opciones', era: 'Antigüedad', topic: 'Imperio romano', id: 'roma-imperio-2',
    question: '¿Cuál era el «secreto del imperio» que reveló el año 69 según Tácito?',
    options: [
      'Que el emperador podía ser depuesto por el Senado',
      'Que se podía proclamar emperador fuera de Roma y que quien decidía era el ejército',
      'Que las provincias eran más ricas que Italia',
      'Que la sucesión estaba fijada por ley'
    ],
    answer: 1,
    explanation: 'El principado nunca resolvió la sucesión. Cuatro emperadores en doce meses dejaron al descubierto quién ostentaba el poder decisivo.'
  },
  {
    kind: 'mapa', era: 'Antigüedad', topic: 'Imperio romano', id: 'roma-mapa-1',
    question: '¿Dónde derrotaron los godos al emperador Valente en 378?',
    highlight: 'Turquía,Grecia,Bulgaria,Rumanía,Serbia,Italia',
    pins: '41.68,26.55,A;37.98,23.73,B;41.01,28.98,C;41.89,12.49,D',
    answer: 'A',
    answerLabel: 'A · Adrianópolis',
    explanation: 'Adrianópolis, la actual Edirne. La derrota abrió el Danubio y marcó el inicio del siglo V en los manuales.'
  },
  {
    kind: 'huecos', era: 'Antigüedad', topic: 'Imperio romano', id: 'roma-huecos-1',
    question: 'Completa el texto',
    text: 'La ___ de Caracalla, en el año 212, concedió la ciudadanía a casi todos los habitantes libres del imperio.',
    options: ['Constitutio Antoniniana', 'Lex Iulia', 'Pax Romana', 'Iugatio-capitatio'],
    answer: 0,
    explanation: 'Al generalizarse la ciudadanía dejó de ser un privilegio: la nueva frontera jurídica pasó a ser honestiores frente a humiliores.'
  }
];
