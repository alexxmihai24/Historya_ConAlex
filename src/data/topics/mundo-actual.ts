import type { TopicModule } from '../types.ts'

export const mundoActual: TopicModule = {
  topic: {
    id: 'mundo-actual',
    era: 'Edad Contemporánea',
    title: 'El mundo desde 1991',
    years: '1991–hoy',
    country: 'Mundo',
    description: 'Del momento unipolar y la globalización acelerada al retorno de la geopolítica: tres décadas que exigen historia y no solo actualidad.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⊛',
    color: 'green',
    summary:
      'La disolución de la Unión Soviética dejó por primera vez en siglos una sola superpotencia, y con ella la impresión de que un modelo económico y político había ganado la discusión. Treinta años después esa impresión se ha deshecho: la globalización sacó de la pobreza a cientos de millones de personas y a la vez erosionó a las clases medias occidentales, las guerras posteriores al 11 de septiembre mostraron los límites del poder militar, la crisis de 2008 rompió la confianza en la gestión tecnocrática y el ascenso chino devolvió la competencia entre grandes potencias. Estudiar este período como historia y no como actualidad exige dos disciplinas: reconocer que las fuentes están incompletas y que la distancia es escasa, y resistir la tentación de leer cada acontecimiento como confirmación de una tendencia que aún no ha terminado.',
    keyDates: [
      { date: '1991', event: 'Disolución de la URSS, primera guerra del Golfo e inicio de las guerras de Yugoslavia.' },
      { date: '1992–1993', event: 'Tratado de Maastricht y nacimiento de la Unión Europea. Entra en vigor el mercado único.' },
      { date: '1994', event: 'Genocidio de Ruanda, con unas ochocientas mil víctimas en cien días y una inacción internacional documentada.' },
      { date: '1995', event: 'Creación de la Organización Mundial del Comercio y matanza de Srebrenica.' },
      { date: '1999', event: 'Nace el euro como moneda de cuenta. Intervención de la OTAN en Kosovo sin mandato del Consejo de Seguridad.' },
      { date: '2001', event: 'Atentados del 11 de septiembre, invasión de Afganistán e ingreso de China en la OMC.' },
      { date: '2003', event: 'Invasión de Irak sin autorización de Naciones Unidas y sin que aparecieran las armas alegadas.' },
      { date: '2008', event: 'Quiebra de Lehman Brothers y crisis financiera global. Recesión y rescates bancarios masivos.' },
      { date: '2010–2012', event: 'Primaveras árabes, crisis de la deuda en la eurozona y políticas de austeridad.' },
      { date: '2014', event: 'Anexión rusa de Crimea y guerra en el este de Ucrania. Fin del orden europeo posterior a 1991.' },
      { date: '2015', event: 'Acuerdo de París sobre el clima y Objetivos de Desarrollo Sostenible de Naciones Unidas.' },
      { date: '2016', event: 'Referéndum del Brexit y elección presidencial estadounidense: dos resultados que reordenan la política occidental.' },
      { date: '2020–2022', event: 'Pandemia de covid-19, con millones de muertos, y guerra a gran escala en Ucrania desde febrero de 2022.' },
    ],
    sections: [
      {
        title: 'El momento unipolar',
        body: [
          'La década de los noventa empezó con una expectativa. Francis Fukuyama había publicado en 1989 un ensayo que sostenía que la democracia liberal y el mercado no tenían ya rival ideológico y que en ese sentido la historia había terminado. La tesis se caricaturizó mucho, porque no afirmaba que dejaran de ocurrir cosas, sino que no quedaban alternativas sistémicas con pretensión universal. Samuel Huntington respondió en 1993 que los conflictos futuros se librarían entre civilizaciones y no entre ideologías, una tesis igualmente discutida y todavía más citada.',
          'La realidad de los noventa fue menos limpia que cualquiera de las dos. Hubo una expansión democrática real, con transiciones en América Latina, Europa oriental, Sudáfrica y parte de Asia, y una integración económica sin precedentes tras la creación de la Organización Mundial del Comercio en 1995. Pero también hubo guerras de desintegración estatal en Yugoslavia y en el Cáucaso, un genocidio en Ruanda que la comunidad internacional vio venir y no detuvo, y crisis financieras en México, Asia y Rusia que mostraron la fragilidad de los flujos de capital liberalizados.',
          'El modelo económico dominante se resumió en lo que John Williamson llamó Consenso de Washington: disciplina fiscal, liberalización comercial y financiera, privatizaciones y desregulación. Se aplicó como condición de los préstamos del Fondo Monetario y del Banco Mundial y produjo resultados muy desiguales. En Europa oriental la terapia de choque provocó un hundimiento del producto y de la esperanza de vida en Rusia; en Asia oriental los países que crecieron lo hicieron con políticas industriales activas que el consenso desaconsejaba.',
          'Europa siguió su propio camino. Maastricht convirtió en 1992 la Comunidad Económica en Unión Europea, con ciudadanía común y una moneda única que llegaría en 1999. Fue una apuesta política enorme: unificar la moneda sin unificar la política fiscal, con la idea de que la integración monetaria arrastraría al resto. La ampliación al este, entre 2004 y 2007, incorporó a diez países del antiguo bloque soviético y duplicó el número de miembros.',
          'Estados Unidos ejerció una hegemonía que sus propios estrategas describían como un momento unipolar, no como un estado permanente. Intervino en los Balcanes tarde y con eficacia, promovió la ampliación de la OTAN pese a las advertencias de Kennan y otros sobre la reacción rusa, y sostuvo un orden institucional que le beneficiaba y que a la vez le imponía límites. La discusión sobre si ese orden era liberal o simplemente estadounidense sigue abierta.',
        ].join('\n\n'),
        callout:
          'Fukuyama no dijo que fueran a dejar de pasar cosas. Dijo que no quedaban alternativas sistémicas con pretensión universal. Treinta años después la primera afirmación es obviamente falsa y la segunda vuelve a discutirse.',
      },
      {
        title: 'El 11 de septiembre y las guerras del terror',
        body: [
          'Los atentados del 11 de septiembre de 2001 mataron a casi tres mil personas y reorganizaron la política internacional. La respuesta inmediata, la invasión de Afganistán, contó con amplio apoyo y derribó al régimen talibán en semanas; la ocupación duró veinte años, costó cientos de miles de millones y terminó en 2021 con el regreso del mismo régimen. La invasión de Irak en 2003, en cambio, se hizo sin autorización del Consejo de Seguridad, sobre la base de unas armas de destrucción masiva que no existían, y frente a las mayores manifestaciones simultáneas de la historia.',
          'Las consecuencias fueron mayores que la guerra. Irak se desintegró en una guerra civil sectaria, la disolución del ejército iraquí dejó a cientos de miles de hombres armados sin trabajo, y de ese caos salió una organización que en 2014 proclamó un califato sobre parte de Irak y Siria. El informe Chilcot británico de 2016 concluyó que la acción militar no era el último recurso y que las bases de inteligencia se presentaron con una certeza que no estaba justificada.',
          'La lucha antiterrorista transformó también el interior de las democracias. Legislación de excepción, vigilancia masiva de comunicaciones revelada en 2013 por documentos filtrados desde la propia inteligencia estadounidense, detenciones indefinidas sin juicio en Guantánamo y un programa de entregas y tortura que varios Estados europeos facilitaron. El debate sobre la compatibilidad entre seguridad y derechos dejó de ser teórico.',
          'En el mundo árabe, las revueltas de 2011 mostraron el otro lado. Movilizaciones masivas derribaron a gobiernos en Túnez, Egipto, Libia y Yemen, con una organización horizontal en la que las redes sociales tuvieron un papel instrumental que después se exageró. El balance a medio plazo fue duro: consolidación democrática solo en Túnez y de forma frágil, restauración autoritaria en Egipto, y guerras prolongadas en Libia, Siria y Yemen que produjeron la mayor crisis de refugiados desde 1945.',
          'La conclusión estratégica que muchos extrajeron fue la de los límites del poder militar. Dos décadas de intervenciones no produjeron ni Estados estables ni democracias, y sí un descrédito de la idea de intervención humanitaria que había ganado terreno en los noventa. La doctrina de la responsabilidad de proteger, aprobada por Naciones Unidas en 2005, quedó muy debilitada tras el uso que se hizo de ella en Libia en 2011.',
        ].join('\n\n'),
      },
      {
        title: 'La crisis de 2008 y la política que produjo',
        body: [
          'La crisis financiera de 2008 comenzó en el mercado hipotecario estadounidense, se propagó por un sistema bancario internacional cargado de productos estructurados cuyo riesgo nadie había medido bien, y se convirtió en la mayor contracción desde los años treinta tras la quiebra de Lehman Brothers en septiembre. Fue una crisis del núcleo del sistema, no de su periferia, y la respuesta requirió rescates públicos de una escala inédita.',
          'Adam Tooze ha mostrado que la crisis fue mucho más transatlántica de lo que se contó: los bancos europeos estaban entre los mayores compradores de activos estadounidenses y sobrevivieron gracias a líneas de dólares abiertas por la Reserva Federal. La eurozona, sin embargo, convirtió una crisis bancaria en una crisis de deuda soberana, porque sus Estados no emitían en una moneda que controlaran y no existía un prestamista de última instancia hasta que el Banco Central Europeo asumió ese papel en 2012.',
          'La respuesta europea fue la austeridad. Recortes de gasto y reformas estructurales en Grecia, Portugal, Irlanda, España e Italia, con caídas del producto de dos dígitos en el caso griego, paro juvenil superior al cincuenta por ciento y una emigración de jóvenes cualificados. El debate técnico sobre si el ajuste era necesario, excesivo o mal secuenciado se cruzó con otro sobre quién había decidido: los programas los negociaban instituciones sin responsabilidad electoral ante las poblaciones afectadas.',
          'Las consecuencias políticas se vieron pronto. Aparecieron o crecieron partidos que impugnaban el consenso anterior, por la izquierda y sobre todo por la derecha, con una combinación de crítica a la globalización, a la inmigración y a las élites tecnocráticas. El Brexit en 2016 y la elección presidencial estadounidense del mismo año fueron los dos resultados que hicieron visible el cambio en los dos países que habían liderado el orden liberal.',
          'Sobre por qué ocurrió hay dos grandes explicaciones. La económica, defendida entre otros por Dani Rodrik, sostiene que la deslocalización industrial, el estancamiento salarial y la crisis produjeron un electorado con motivos objetivos de agravio. La cultural, formulada por Pippa Norris y Ronald Inglehart, sostiene que lo decisivo es una reacción de valores frente al cambio social y generacional. Los datos electorales sostienen parcialmente ambas y no permiten cerrar la discusión.',
        ].join('\n\n'),
        callout:
          'La crisis de la eurozona no fue solo un problema de deuda: fue el descubrimiento de que una moneda sin Estado carece de prestamista de última instancia hasta que alguien decide serlo.',
      },
      {
        title: 'China y el retorno de la geopolítica',
        body: [
          'El acontecimiento económico más importante del período no ocurrió en Occidente. China creció a tasas de dos dígitos durante tres décadas, sacó de la pobreza extrema a más de setecientos millones de personas y pasó de representar menos del dos por ciento del producto mundial en 1980 a ser la primera economía en paridad de poder adquisitivo. Su ingreso en la Organización Mundial del Comercio en 2001 aceleró la integración de su industria en las cadenas globales de valor.',
          'La apuesta occidental fue que la integración económica produciría convergencia política. No ocurrió. El sistema chino se consolidó como un Estado de partido único con economía mixta, capacidad de planificación a largo plazo y un aparato de vigilancia tecnológica sin precedentes. Desde 2013, la Iniciativa de la Franja y la Ruta ha financiado infraestructuras en decenas de países, con debate abierto sobre si genera desarrollo o dependencia financiera.',
          'La reacción estadounidense pasó de la integración a la competencia estratégica, con aranceles desde 2018, restricciones a la exportación de semiconductores avanzados y una política de reindustrialización. El resultado no ha sido una desconexión completa sino una fragmentación selectiva de las cadenas de suministro, con costes crecientes y con terceros países intentando no elegir bando.',
          'Rusia recorrió otro camino. La década de los noventa dejó allí un hundimiento económico, una privatización que creó una oligarquía y una humillación nacional que la política posterior explotó. Desde 2000 se consolidó un régimen personalista sostenido por los ingresos energéticos, y desde 2008 en Georgia, 2014 en Crimea y 2022 en Ucrania se recurrió a la fuerza para revisar fronteras. La guerra en Ucrania desde 2022 ha sido el conflicto interestatal más grande en Europa desde 1945 y ha reactivado la OTAN, con la incorporación de Finlandia y Suecia.',
          'El resultado agregado es un sistema que no es unipolar ni bipolar. India, Brasil, Indonesia, Turquía, los Estados del Golfo y varios países africanos actúan con autonomía creciente y se niegan a alinearse automáticamente, en una actitud que recuerda al No Alineamiento sin su vocabulario. Los organismos multilaterales heredados de 1945 reflejan cada vez peor esa distribución de poder, y su reforma lleva décadas bloqueada.',
        ].join('\n\n'),
      },
      {
        title: 'Digitalización y esfera pública',
        body: [
          'La web se abrió al uso público en 1993 y en tres décadas ha reorganizado la economía, la política y la vida cotidiana. La primera fase, hasta la crisis de las puntocom en 2000, fue de expansión desordenada; la segunda, desde mediados de la década siguiente, se caracterizó por la concentración: un puñado de plataformas globales que intermedian la búsqueda, la comunicación, el comercio y la publicidad, con una capitalización superior al producto de muchos Estados.',
          'Shoshana Zuboff ha descrito ese modelo como capitalismo de vigilancia: un negocio basado en extraer datos de comportamiento para predecir y orientar la conducta futura, con la publicidad como primer producto y con la atención humana como recurso extraído. Otros análisis subrayan más los efectos de red y la lógica de monopolio natural que la novedad del modelo, pero coinciden en el diagnóstico de concentración.',
          'El efecto sobre la esfera pública ha sido profundo y no unívoco. Las plataformas han permitido organizar movilizaciones sin estructuras previas, dar voz a quien no la tenía y desintermediar el acceso a la información. También han fragmentado el espacio informativo común, premiado la indignación por su rendimiento en atención, abaratado hasta lo trivial la producción de desinformación y hundido el modelo económico del periodismo profesional, que era el principal productor de verificación.',
          'La vigilancia es la otra cara. Las revelaciones de 2013 sobre los programas de captación masiva de comunicaciones mostraron capacidades estatales que ninguna legislación había autorizado explícitamente. En paralelo, sistemas de reconocimiento facial y de puntuación social han sido desplegados con distintos grados de intensidad, y la Unión Europea ha intentado responder con normativa sobre protección de datos y sobre inteligencia artificial, con efecto extraterritorial de hecho.',
          'La irrupción de sistemas de inteligencia artificial generativa desde 2022 ha añadido una capa nueva, con efectos sobre el trabajo cualificado, la educación y la propia noción de autoría y de prueba documental. Es demasiado pronto para escribir su historia, y precisamente por eso conviene decirlo: un historiador que en 1995 hubiera pronosticado los efectos de internet se habría equivocado en casi todo.',
        ].join('\n\n'),
        callout:
          'El hundimiento económico del periodismo profesional no es un daño colateral de la digitalización: es la retirada del principal actor que producía verificación de manera sistemática.',
      },
      {
        title: 'Clima, pandemia y balance provisional',
        body: [
          'El cambio climático es el proceso de fondo del período y el que menos encaja en las periodizaciones políticas. La ciencia está establecida desde hace décadas: la concentración de gases de efecto invernadero ha subido por encima de cualquier nivel de los últimos ochocientos mil años y la temperatura media global ha aumentado más de un grado respecto de la era preindustrial. Los informes sucesivos del panel intergubernamental han ido reduciendo la incertidumbre y acortando los plazos.',
          'La respuesta institucional ha sido lenta y desigual: del Protocolo de Kioto de 1997, con objetivos vinculantes y sin Estados Unidos, al Acuerdo de París de 2015, con participación casi universal y compromisos voluntarios. El coste de las renovables se ha hundido más rápido de lo que casi nadie preveía, lo que ha hecho viable una transición que hace veinte años parecía inasumible; el ritmo sigue siendo insuficiente respecto de los objetivos declarados. La discusión sobre justicia climática, es decir, sobre quién emitió históricamente y quién sufre las consecuencias, es a la vez científica y política.',
          'La pandemia de covid-19, desde 2020, fue el primer acontecimiento verdaderamente global y simultáneo de la era digital. Provocó millones de muertes, confinamientos que afectaron a la mayor parte de la humanidad, una contracción económica seguida de una respuesta fiscal y monetaria sin precedentes, y un desarrollo de vacunas en un tiempo récord acompañado de un reparto muy desigual. Puso a prueba la capacidad estatal, la cooperación internacional y la confianza pública en la ciencia, con resultados distintos en cada país y sin una correlación simple con el tipo de régimen.',
          'Sobre el balance de la globalización hay datos que apuntan en direcciones opuestas y hay que sostener los dos. La pobreza extrema mundial cayó de cerca del cuarenta por ciento de la población en 1990 a menos del diez antes de la pandemia, la mortalidad infantil se redujo a menos de la mitad y la escolarización se generalizó. Al mismo tiempo, la desigualdad interna creció en la mayoría de los países ricos y en varios emergentes, y la curva del elefante de Branko Milanovic muestra con claridad quién ganó y quién no: las clases medias asiáticas y el uno por ciento global, no los trabajadores industriales de Occidente.',
          'Escribir la historia de este período tiene dos dificultades específicas. La primera es documental: buena parte de las fuentes está clasificada, dispersa en servidores privados o en formatos que se degradan, y la abundancia de datos no equivale a disponibilidad. La segunda es de perspectiva: no sabemos qué acontecimiento de los últimos treinta años resultará decisivo. Es exactamente el problema que tenía en 1935 alguien que intentara explicar 1919, y la única defensa disponible es la misma: describir los procesos con precisión y desconfiar de las conclusiones redondas.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Momento unipolar', definition: 'Situación posterior a 1991 con una sola superpotencia. Sus propios teóricos la describieron como transitoria y no como un estado permanente del sistema.' },
      { term: 'Consenso de Washington', definition: 'Paquete de disciplina fiscal, liberalización, privatización y desregulación promovido por los organismos financieros internacionales desde los años noventa.' },
      { term: 'Cadenas globales de valor', definition: 'Fragmentación de la producción entre países según ventajas de coste y especialización. Base material de la globalización productiva.' },
      { term: 'Fin de la historia', definition: 'Tesis de Fukuyama de 1989: no quedan alternativas sistémicas con pretensión universal frente a la democracia liberal y el mercado.' },
      { term: 'Choque de civilizaciones', definition: 'Tesis de Huntington de 1993 según la cual los conflictos futuros seguirían líneas culturales y religiosas en vez de ideológicas.' },
      { term: 'Responsabilidad de proteger', definition: 'Principio aprobado por Naciones Unidas en 2005 que admite la intervención ante atrocidades masivas. Muy debilitado tras su uso en Libia en 2011.' },
      { term: 'Vigilancia masiva', definition: 'Captación indiscriminada de comunicaciones por servicios de inteligencia, documentada en 2013. Planteó el conflicto entre seguridad y derechos en términos concretos.' },
      { term: 'Crisis de las subprime', definition: 'Colapso iniciado en el mercado hipotecario estadounidense en 2007 y extendido por productos estructurados cuyo riesgo estaba mal medido.' },
      { term: 'Austeridad', definition: 'Política de recorte del gasto público aplicada en la eurozona tras 2010 para reducir deuda. Su necesidad y su secuencia siguen discutiéndose.' },
      { term: 'Populismo', definition: 'Estilo político que opone un pueblo homogéneo a una élite corrupta. Su auge desde 2008 admite explicaciones económicas y culturales que compiten entre sí.' },
      { term: 'Capitalismo de vigilancia', definition: 'Modelo descrito por Zuboff basado en extraer datos de comportamiento para predecir y orientar la conducta, con la atención como recurso principal.' },
      { term: 'Franja y la Ruta', definition: 'Programa chino de financiación de infraestructuras en decenas de países desde 2013, discutido entre motor de desarrollo y generador de dependencia.' },
      { term: 'Acuerdo de París', definition: 'Tratado climático de 2015 con participación casi universal y compromisos nacionales voluntarios, frente al modelo vinculante y parcial de Kioto.' },
      { term: 'Curva del elefante', definition: 'Representación de Milanovic del cambio de renta global entre 1988 y 2008: ganan las clases medias asiáticas y el uno por ciento, se estancan los trabajadores occidentales.' },
    ],
    debates: [
      {
        question: '¿Cómo hay que interpretar el orden surgido en 1991?',
        positions: [
          {
            school: 'Fin de la historia (Fukuyama, 1989)',
            argument:
              'No quedan alternativas sistémicas con pretensión universal. Los conflictos seguirán, pero ya no entre modelos rivales de organización política y económica con vocación de sustituir al liberalismo.',
          },
          {
            school: 'Choque de civilizaciones (Huntington, 1993)',
            argument:
              'La ideología deja paso a la cultura como línea de fractura. Los conflictos se producirán entre bloques civilizatorios y no dentro de un marco común de valores.',
          },
          {
            school: 'Retorno del realismo (Mearsheimer; Kagan)',
            argument:
              'La unipolaridad era una anomalía transitoria. Con el ascenso de nuevos polos vuelve la competencia entre grandes potencias, que es la situación normal del sistema internacional.',
          },
        ],
        state:
          'Los tres marcos se citan más de lo que se leen. El período ha desmentido las predicciones concretas de todos ellos y ha dado la razón parcialmente al diagnóstico realista sobre la transitoriedad de la unipolaridad.',
      },
      {
        question: '¿Ha sido positiva la globalización?',
        positions: [
          {
            school: 'Convergencia global (Milanovic)',
            argument:
              'La pobreza extrema cayó del cuarenta a menos del diez por ciento de la humanidad y la desigualdad entre países se redujo por primera vez desde la revolución industrial. Es la mayor mejora material de la historia.',
          },
          {
            school: 'Coste interno y político (Rodrik; Piketty)',
            argument:
              'La desigualdad dentro de los países creció, la desindustrialización destruyó comunidades enteras en Occidente y la liberalización financiera transfirió a los Estados la factura de las crisis.',
          },
        ],
        state:
          'Las dos series de datos son correctas y describen fenómenos distintos: la global y la nacional. La discusión útil se ha desplazado a qué tipo de globalización es compatible con la cohesión política interna.',
      },
      {
        question: '¿Qué explica el auge de los populismos desde 2008?',
        positions: [
          {
            school: 'Explicación económica (Rodrik)',
            argument:
              'La deslocalización, el estancamiento salarial, la austeridad y la percepción de que las crisis las pagan siempre los mismos crearon un electorado con motivos objetivos de agravio.',
          },
          {
            school: 'Reacción cultural (Norris e Inglehart, 2019)',
            argument:
              'Lo decisivo es un rechazo generacional al cambio de valores en materia de género, inmigración y diversidad. El voto correlaciona mejor con actitudes culturales que con renta.',
          },
          {
            school: 'Fallo institucional (Levitsky y Ziblatt, 2018)',
            argument:
              'El factor crítico es la erosión de las normas no escritas de la competencia democrática y la disposición de partidos establecidos a pactar con fuerzas que no aceptan las reglas.',
          },
        ],
        state:
          'Los datos electorales sostienen parcialmente las tres. La investigación reciente tiende a combinarlas mediante mecanismos: el agravio económico activa marcos culturales preexistentes cuando las instituciones no canalizan el conflicto.',
      },
    ],
    sources: [
      { author: 'Francis Fukuyama', title: 'El fin de la Historia y el último hombre', year: '1992', kind: 'primaria', note: 'Formulación completa de una tesis que se cita casi siempre en su versión caricaturizada.' },
      { author: 'Samuel Huntington', title: 'El choque de civilizaciones', year: '1996', kind: 'primaria', note: 'Marco alternativo al anterior, enormemente influyente en el debate posterior al 11 de septiembre.' },
      { author: 'Estados miembros de la CE', title: 'Tratado de Maastricht', year: '1992', kind: 'primaria', note: 'Crea la Unión Europea y el compromiso de moneda única. Base jurídica de la integración posterior.' },
      { author: 'John Williamson', title: 'What Washington Means by Policy Reform', year: '1990', kind: 'primaria', note: 'Texto que acuñó la expresión Consenso de Washington, después usada en un sentido más amplio que el original.' },
      { author: 'Naciones Unidas', title: 'Informe Carlsson sobre Ruanda', year: '1999', kind: 'primaria', note: 'Investigación oficial sobre la inacción internacional durante el genocidio de 1994.' },
      { author: 'Comisión Nacional sobre los Ataques Terroristas', title: 'Informe del 11-S', year: '2004', kind: 'primaria', note: 'Reconstrucción oficial de los atentados y de los fallos de coordinación previos.' },
      { author: 'John Chilcot', title: 'Informe de la investigación sobre Irak', year: '2016', kind: 'primaria', note: 'Concluye que la acción militar no fue el último recurso y que la inteligencia se presentó con certeza injustificada.' },
      { author: 'Naciones Unidas', title: 'Acuerdo de París', year: '2015', kind: 'primaria', note: 'Compromisos nacionales voluntarios con revisión periódica. Modelo opuesto al vinculante de Kioto.' },
      { author: 'Grupo Intergubernamental de Expertos sobre el Cambio Climático', title: 'Informes de evaluación', year: '1990–2023', kind: 'primaria', note: 'Síntesis periódica del estado de la ciencia climática, con incertidumbres explicitadas.' },
      { author: 'Naciones Unidas', title: 'Objetivos de Desarrollo Sostenible', year: '2015', kind: 'primaria', note: 'Agenda global para 2030 que sustituye a los Objetivos del Milenio y amplía su alcance.' },
      { author: 'Eric Hobsbawm', title: 'Historia del siglo XX', year: '1994', kind: 'estudio', note: 'Cierra el siglo corto en 1991 y plantea el problema de escribir historia sin distancia.' },
      { author: 'Joseph Stiglitz', title: 'El malestar en la globalización', year: '2002', kind: 'estudio', note: 'Crítica desde dentro de las instituciones financieras internacionales a la condicionalidad de los años noventa.' },
      { author: 'Tony Judt', title: 'Postguerra', year: '2005', kind: 'estudio', note: 'Historia de Europa hasta 2005 que conecta el período posterior a 1991 con la larga posguerra.' },
      { author: 'Branko Milanovic', title: 'Desigualdad mundial', year: '2016', kind: 'estudio', note: 'Origen de la curva del elefante y del análisis de la desigualdad global frente a la nacional.' },
      { author: 'Thomas Piketty', title: 'El capital en el siglo XXI', year: '2013', kind: 'estudio', note: 'Series históricas de largo plazo sobre concentración de renta y patrimonio en los países desarrollados.' },
      { author: 'Dani Rodrik', title: 'La paradoja de la globalización', year: '2011', kind: 'estudio', note: 'Formula el trilema entre hiperglobalización, soberanía nacional y democracia.' },
      { author: 'Adam Tooze', title: 'Crash', year: '2018', kind: 'estudio', note: 'Historia global de la crisis de 2008 que muestra su carácter transatlántico y el papel de la Reserva Federal.' },
      { author: 'Shoshana Zuboff', title: 'La era del capitalismo de la vigilancia', year: '2019', kind: 'estudio', note: 'Analiza el modelo de negocio basado en datos de comportamiento y su efecto sobre la autonomía individual.' },
      { author: 'Steven Levitsky y Daniel Ziblatt', title: 'Cómo mueren las democracias', year: '2018', kind: 'estudio', note: 'Estudio comparado sobre la erosión democrática desde dentro, sin golpes de Estado.' },
      { author: 'Pippa Norris y Ronald Inglehart', title: 'Cultural Backlash', year: '2019', kind: 'estudio', note: 'Defiende la explicación cultural y generacional del voto populista frente a la puramente económica.' },
      { author: 'Peter Frankopan', title: 'Las rutas de la seda', year: '2015', kind: 'estudio', note: 'Relectura de la historia mundial que descentra Europa y ayuda a situar el ascenso asiático actual.' },
      { author: 'Mark Mazower', title: 'Gobernar el mundo', year: '2012', kind: 'estudio', note: 'Historia de las instituciones internacionales y de las ideas de gobierno global desde 1815.' },
    ],
  },
  questions: [
    {
      id: 'mundo-actual-1', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué afirmaba realmente la tesis del fin de la historia de Fukuyama?',
      options: [
        'Que dejarían de producirse acontecimientos relevantes',
        'Que no quedaban alternativas sistémicas con pretensión universal frente a la democracia liberal y el mercado',
        'Que las guerras futuras serían entre civilizaciones',
        'Que Estados Unidos gobernaría el mundo indefinidamente',
      ],
      answer: 1,
      explanation: 'La tesis se cita casi siempre en su versión caricaturizada. Huntington respondió en 1993 con el marco alternativo del choque de civilizaciones.',
    },
    {
      id: 'mundo-actual-2', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué medidas componían el llamado Consenso de Washington?',
      options: [
        'Planificación central, control de precios y política industrial',
        'Disciplina fiscal, liberalización comercial y financiera, privatizaciones y desregulación',
        'Ayuda al desarrollo sin condiciones y condonación de deuda',
        'Proteccionismo selectivo y sustitución de importaciones',
      ],
      answer: 1,
      explanation: 'Se aplicó como condición de préstamos internacionales con resultados muy desiguales: hundimiento en Rusia, crecimiento en países asiáticos que no lo siguieron.',
    },
    {
      id: 'mundo-actual-3', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué apuesta institucional hizo el Tratado de Maastricht?',
      options: [
        'Unificar la política exterior antes que la economía',
        'Unificar la moneda sin unificar la política fiscal, confiando en que la integración monetaria arrastrase al resto',
        'Crear un ejército europeo común',
        'Establecer una constitución federal para Europa',
      ],
      answer: 1,
      explanation: 'La crisis de la eurozona en 2010 mostró el coste de esa asimetría: Estados que no emitían en una moneda propia y sin prestamista de última instancia.',
    },
    {
      id: 'mundo-actual-4', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué concluyó el informe Chilcot sobre la invasión de Irak?',
      options: [
        'Que las armas de destrucción masiva existían pero fueron trasladadas',
        'Que la acción militar no fue el último recurso y que la inteligencia se presentó con una certeza injustificada',
        'Que la invasión contó con autorización expresa del Consejo de Seguridad',
        'Que la ocupación se planificó con detalle antes de la guerra',
      ],
      answer: 1,
      explanation: 'La desintegración posterior de Irak y la disolución de su ejército generaron el caos del que salió la organización que proclamó un califato en 2014.',
    },
    {
      id: 'mundo-actual-5', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Cuál fue el balance a medio plazo de las revueltas árabes de 2011?',
      options: [
        'Democratización generalizada en toda la región',
        'Consolidación frágil solo en Túnez, restauración autoritaria en Egipto y guerras prolongadas en Libia, Siria y Yemen',
        'Restauración de las monarquías derribadas',
        'Intervención militar de Naciones Unidas en todos los países afectados',
      ],
      answer: 1,
      explanation: 'Produjeron además la mayor crisis de refugiados desde 1945. El papel de las redes sociales fue instrumental y se exageró después.',
    },
    {
      id: 'mundo-actual-6', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué muestra Adam Tooze sobre la crisis de 2008?',
      options: [
        'Que fue un problema exclusivamente estadounidense',
        'Que fue profundamente transatlántica: los bancos europeos sobrevivieron gracias a líneas de dólares de la Reserva Federal',
        'Que la causó el endeudamiento público de los países del sur de Europa',
        'Que se resolvió sin intervención pública',
      ],
      answer: 1,
      explanation: 'La eurozona convirtió después una crisis bancaria en una crisis de deuda soberana por carecer de prestamista de última instancia hasta 2012.',
    },
    {
      id: 'mundo-actual-7', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué dimensión política tuvo el debate sobre la austeridad europea?',
      options: [
        'Ninguna: fue una discusión exclusivamente técnica',
        'Los programas los negociaban instituciones sin responsabilidad electoral ante las poblaciones afectadas',
        'Se aprobaron en referéndum en cada país afectado',
        'Los decidió el Parlamento Europeo por mayoría cualificada',
      ],
      answer: 1,
      explanation: 'Al debate técnico sobre si el ajuste era necesario o excesivo se sumó otro sobre quién había decidido y con qué legitimidad.',
    },
    {
      id: 'mundo-actual-8', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué apuesta occidental sobre China no se cumplió?',
      options: [
        'Que su economía crecería con rapidez',
        'Que la integración económica produciría convergencia política',
        'Que se integraría en las cadenas globales de valor',
        'Que reduciría la pobreza extrema',
      ],
      answer: 1,
      explanation: 'El sistema se consolidó como Estado de partido único con economía mixta, planificación a largo plazo y un aparato de vigilancia tecnológica sin precedentes.',
    },
    {
      id: 'mundo-actual-9', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Cómo se describe mejor la reacción comercial estadounidense frente a China desde 2018?',
      options: [
        'Una desconexión económica completa entre ambos países',
        'Una fragmentación selectiva de las cadenas de suministro con costes crecientes y terceros países evitando alinearse',
        'Un acuerdo de libre comercio bilateral',
        'La expulsión de China de la Organización Mundial del Comercio',
      ],
      answer: 1,
      explanation: 'Incluyó aranceles, restricciones a la exportación de semiconductores avanzados y política de reindustrialización, sin llegar a una separación total.',
    },
    {
      id: 'mundo-actual-10', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué caracteriza al sistema internacional actual según el tema?',
      options: [
        'Un orden bipolar entre Estados Unidos y China',
        'Un sistema ni unipolar ni bipolar, con potencias medias que actúan con autonomía y rechazan alinearse automáticamente',
        'Una hegemonía europea sobre las instituciones multilaterales',
        'Un vacío de poder sin actores relevantes',
      ],
      answer: 1,
      explanation: 'India, Brasil, Indonesia, Turquía, los Estados del Golfo y varios países africanos actúan en una posición que recuerda al No Alineamiento sin su vocabulario.',
    },
    {
      id: 'mundo-actual-11', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué designa Shoshana Zuboff como capitalismo de vigilancia?',
      options: [
        'El control estatal de las comunicaciones privadas',
        'Un modelo de negocio basado en extraer datos de comportamiento para predecir y orientar la conducta futura',
        'La venta directa de datos personales entre empresas',
        'El uso de reconocimiento facial en espacios públicos',
      ],
      answer: 1,
      explanation: 'Otros análisis subrayan más los efectos de red y la lógica de monopolio natural, pero coinciden en el diagnóstico de concentración.',
    },
    {
      id: 'mundo-actual-12', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Por qué importa históricamente el hundimiento económico del periodismo profesional?',
      options: [
        'Porque redujo el número de empleos cualificados',
        'Porque era el principal actor que producía verificación de manera sistemática',
        'Porque impidió el acceso a internet en zonas rurales',
        'Porque provocó la concentración de las plataformas digitales',
      ],
      answer: 1,
      explanation: 'A la vez que las plataformas desintermediaban el acceso a la información, abarataban hasta lo trivial la producción de desinformación.',
    },
    {
      id: 'mundo-actual-13', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿En qué se diferencia el Acuerdo de París del Protocolo de Kioto?',
      options: [
        'París es vinculante y Kioto era voluntario',
        'París tiene participación casi universal con compromisos nacionales voluntarios; Kioto era vinculante y parcial, sin Estados Unidos',
        'París solo afecta a los países desarrollados',
        'Kioto incluía objetivos de adaptación y París no',
      ],
      answer: 1,
      explanation: 'El coste de las renovables se ha hundido más rápido de lo previsto, lo que ha hecho viable una transición que hace veinte años parecía inasumible.',
    },
    {
      id: 'mundo-actual-14', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué muestra la curva del elefante de Milanovic?',
      options: [
        'Que todos los grupos de renta mundiales mejoraron por igual entre 1988 y 2008',
        'Que ganaron sobre todo las clases medias asiáticas y el uno por ciento global, mientras se estancaban los trabajadores industriales de Occidente',
        'Que la desigualdad global aumentó de forma continua',
        'Que la pobreza extrema no se redujo pese al crecimiento',
      ],
      answer: 1,
      explanation: 'La desigualdad entre países se redujo por primera vez desde la revolución industrial, mientras crecía dentro de la mayoría de los países ricos.',
    },
    {
      id: 'mundo-actual-15', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué proponen Levitsky y Ziblatt como factor crítico de la erosión democrática?',
      options: [
        'La intervención militar extranjera',
        'La erosión de las normas no escritas de la competencia democrática y el pacto de partidos establecidos con fuerzas que no aceptan las reglas',
        'La ausencia de constituciones escritas',
        'El aumento del gasto público',
      ],
      answer: 1,
      explanation: 'Su explicación compite y se combina con las económicas de Rodrik y las culturales de Norris e Inglehart.',
    },
    {
      id: 'mundo-actual-16', era: 'Edad Contemporánea', topicId: 'mundo-actual', topic: 'El mundo desde 1991',
      question: '¿Qué dificultades específicas tiene escribir la historia de este período?',
      options: [
        'La escasez de acontecimientos relevantes',
        'Fuentes clasificadas, dispersas o en formatos degradables, y falta de perspectiva para saber qué resultará decisivo',
        'La imposibilidad de acceder a datos económicos',
        'La ausencia de debate historiográfico',
      ],
      answer: 1,
      explanation: 'La abundancia de datos no equivale a disponibilidad, y la única defensa frente a la falta de distancia es describir con precisión y desconfiar de las conclusiones redondas.',
    },
  ],
}
