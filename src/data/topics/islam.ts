import type { TopicModule } from '../types.ts'

export const islam: TopicModule = {
  topic: {
    id: 'islam',
    era: 'Edad Media',
    title: 'Nacimiento y expansión del islam',
    years: '610–1258',
    country: 'Arabia',
    description: 'De Arabia al Atlántico: revelación, califato, ciencia y fragmentación política.',
    duration: '50 min',
    level: 'Universidad',
    progress: 0,
    visual: '☾',
    color: 'green',
    summary:
      'En poco más de un siglo, un movimiento nacido en una región periférica de Arabia dio lugar al Estado más extenso que había existido hasta entonces, desde el Atlántico hasta el Indo, y a una civilización que durante siglos concentró la producción científica y filosófica más avanzada del mundo. Explicar esa expansión sin recurrir ni a la apologética ni al tópico del fanatismo es uno de los problemas más interesantes de la historia medieval.',
    keyDates: [
      { date: 'c. 570', event: 'Nacimiento de Mahoma en La Meca.' },
      { date: '610', event: 'Inicio de la revelación coránica según la tradición islámica.' },
      { date: '622', event: 'Hégira: emigración a Yathrib (Medina). Año 1 del calendario islámico.' },
      { date: '630', event: 'Toma de La Meca.' },
      { date: '632', event: 'Muerte de Mahoma; comienza el califato de los Rashidun.' },
      { date: '636–642', event: 'Conquista de Siria, Mesopotamia, Egipto y del Imperio sasánida.' },
      { date: '656–661', event: 'Primera fitna: guerra civil y origen de la división entre suníes y chiíes.' },
      { date: '661–750', event: 'Califato omeya, con capital en Damasco.' },
      { date: '711', event: 'Desembarco en la península ibérica; inicio de al-Ándalus.' },
      { date: '732', event: 'Batalla de Poitiers frente a Carlos Martel.' },
      { date: '750', event: 'Revolución abasí; traslado del poder hacia Irak.' },
      { date: '762', event: 'Fundación de Bagdad.' },
      { date: 'c. 820–1000', event: 'Movimiento de traducción y esplendor científico abasí.' },
      { date: '929', event: 'Abd al-Rahman III proclama el califato de Córdoba.' },
      { date: '1258', event: 'Los mongoles destruyen Bagdad; fin del califato abasí.' },
    ],
    sections: [
      {
        title: 'Arabia antes del islam: no un vacío',
        body: [
          'La tradición islámica llama yahiliyya —«ignorancia»— al periodo preislámico, y esa etiqueta ha alimentado la idea de una Arabia aislada y primitiva. La investigación reciente ofrece otra imagen: una península integrada en los circuitos comerciales y políticos de su época, con reinos organizados en el sur (Yemen), federaciones tribales clientes de Bizancio y Persia en el norte, y una presencia significativa de comunidades judías y cristianas.',
          'La Meca era un centro de peregrinación en torno a la Kaaba y un nudo comercial de importancia discutida. Patricia Crone cuestionó en *Meccan Trade and the Rise of Islam* (1987) la imagen de una gran ciudad mercantil intermediaria del comercio de especias, señalando que las fuentes contemporáneas apenas la mencionan.',
          'El contexto geopolítico es decisivo. La guerra entre Bizancio y la Persia sasánida de 602-628 dejó a ambos imperios exhaustos, endeudados y con sus sistemas defensivos y clientelares en el norte de Arabia desarticulados. Cuando llegaron los ejércitos árabes, se enfrentaron a dos potencias en su peor momento del siglo.',
          'La sociedad árabe era tribal y sin Estado. La lealtad se organizaba por linajes, la justicia se aplicaba por venganza de sangre y la protección dependía del grupo. La aportación política del islam fue precisamente sustituir ese vínculo por otro: la umma, comunidad de creyentes que trasciende el parentesco.',
        ].join('\n\n'),
        callout:
          'La hégira de 622 no conmemora la revelación, sino la fundación de una comunidad política en Medina. Que el calendario islámico empiece ahí, y no en 610, dice mucho sobre lo que se consideró el acontecimiento fundacional.',
      },
      {
        title: 'Mahoma, el Corán y el problema de las fuentes',
        body: [
          'Según la tradición, Mahoma comenzó a recibir revelaciones hacia 610 y predicó en La Meca un mensaje de monoteísmo estricto, juicio final y justicia social que le enfrentó a la élite de la ciudad. En 622 emigró a Yathrib, que pasó a llamarse Medina, donde actuó como árbitro entre clanes enfrentados y organizó una comunidad con dimensión política, militar y jurídica.',
          'El Corán se considera en el islam palabra divina literal e increada, transmitida en árabe. Se organiza en 114 azoras ordenadas aproximadamente por longitud, no cronológicamente, lo que dificulta su lectura histórica. La tradición sitúa su fijación escrita bajo el califa Utmán, hacia 650.',
          'El problema metodológico central es que las fuentes narrativas sobre la vida de Mahoma —la sira de Ibn Ishaq, transmitida por Ibn Hisham, y las grandes colecciones de hadices— se compilaron entre siglo y medio y dos siglos después de los hechos. La propia tradición islámica desarrolló una ciencia crítica para evaluarlas, el estudio del isnad o cadena de transmisores, con criterios estrictos de fiabilidad.',
          'La crítica occidental ha ido más lejos. La escuela revisionista de los años setenta —John Wansbrough, Patricia Crone y Michael Cook en *Hagarism* (1977)— propuso que el corpus islámico se habría formado más tarde y fuera de Arabia. Sus tesis más radicales no se han sostenido: los manuscritos de Saná, hallados en 1972, y las dataciones por radiocarbono de folios coránicos muy tempranos, como el de Birmingham, apuntan a una fijación textual temprana y estable.',
          'La posición mayoritaria hoy es intermedia: el Corán como texto es muy antiguo y coherente, mientras que los relatos biográficos posteriores deben tratarse con la misma cautela crítica que se aplica a cualquier hagiografía tardía.',
        ].join('\n\n'),
      },
      {
        title: 'La expansión: cómo explicarla',
        body: [
          'Entre 634 y 711, los ejércitos árabes tomaron Siria, Mesopotamia, Egipto, Persia entera, el norte de África y la península ibérica. Es una de las expansiones más rápidas de la historia y ha recibido explicaciones muy distintas.',
          'La explicación religiosa por sí sola es insuficiente: no explica por qué antes no ocurrió, ni por qué las conquistas se detuvieron donde lo hicieron. La explicación del fanatismo, habitual en la historiografía europea del siglo XIX, es sobre todo un prejuicio: las conquistas siguieron patrones militares y políticos convencionales, con tratados, pactos de capitulación y negociación con élites locales.',
          'Los factores que la investigación actual pondera son varios. El agotamiento mutuo de Bizancio y Persia tras veintiséis años de guerra dejó a ambos sin reservas ni fronteras defendidas. Las poblaciones de Siria y Egipto, mayoritariamente cristianas monofisitas perseguidas por la ortodoxia imperial, no tenían motivos fuertes para defender a Constantinopla. Y la nueva estructura tributaria fue, al menos inicialmente, más ligera que la bizantina o la sasánida.',
          'A ello se suma un factor interno: la unificación de las tribus árabes bajo la umma canalizó hacia el exterior una energía militar que antes se consumía en conflictos internos, y el reparto del botín proporcionó un incentivo material continuado.',
          'Las conversiones fueron lentas. Richard Bulliet estimó, a partir de la evolución de la onomástica, que las poblaciones conquistadas no alcanzaron mayoría musulmana hasta los siglos IX o X, doscientos o trescientos años después de la conquista. El estatuto de dhimmi —protegido— reconocía a judíos y cristianos libertad de culto y autonomía jurídica a cambio del impuesto de capitación (yizia), en un régimen de subordinación legal pero de tolerancia práctica muy superior a la contemporánea en Europa. De hecho, la conversión masiva reducía los ingresos fiscales, lo que durante décadas hizo que los gobernantes omeyas no la fomentaran.',
        ].join('\n\n'),
        callout:
          'La batalla de Poitiers (732) fue magnificada por la historiografía francesa del siglo XIX como salvación de Europa. Se trató probablemente de la derrota de una expedición de saqueo; el repliegue musulmán del sur de Francia respondió más a problemas internos que a esa derrota.',
      },
      {
        title: 'La primera fitna y la división suní-chií',
        body: [
          'Mahoma murió en 632 sin designar sucesor de forma inequívoca ni dejar un procedimiento establecido. La cuestión de quién debía dirigir la comunidad produjo la escisión más duradera del islam.',
          'Los cuatro primeros califas —Abu Bakr, Umar, Utmán y Alí— reciben en la tradición suní el nombre de Rashidun, «bien guiados». Pero tres de los cuatro murieron asesinados, y el conflicto entre Alí, primo y yerno del Profeta, y Muawiya, gobernador de Siria, desembocó en la primera guerra civil (656-661).',
          'De ese conflicto surgieron tres posiciones. Los partidarios de Alí (shiat Alí, de donde «chiíes») sostenían que el liderazgo correspondía a los descendientes del Profeta por línea de Alí y Fátima, y atribuían al imán una autoridad espiritual. Los que después se llamarían suníes aceptaron la legitimidad de los califas efectivos y la primacía de la sunna, la práctica del Profeta. Los jariyíes, tercera posición, sostenían que el liderazgo correspondía al más piadoso con independencia de su linaje, y llegaron a considerar apóstata a quien no compartiera su rigorismo.',
          'La muerte de Husayn, hijo de Alí, en Kerbala en 680 a manos de tropas omeyas convirtió la disputa política en identidad religiosa. Su conmemoración anual, la Ashura, sigue siendo el centro emocional del chiismo.',
          'Es importante evitar dos errores frecuentes. El primero, presentar la división como una guerra teológica permanente: durante largos periodos suníes y chiíes convivieron sin conflicto abierto, y las diferencias doctrinales son menores que las que separan a las confesiones cristianas. El segundo, proyectar sobre el pasado los alineamientos sectarios contemporáneos, que responden en buena medida a la política del siglo XX.',
        ].join('\n\n'),
      },
      {
        title: 'El califato abasí y la edad de oro científica',
        body: [
          'La revolución abasí de 750 desplazó a los omeyas y trasladó el centro de gravedad de Damasco a Irak, con la fundación de Bagdad en 762. El cambio fue también social: el nuevo régimen integró a los mawali —musulmanes no árabes, sobre todo persas—, cuya marginación había sido una de las causas de la revuelta. La administración adoptó modelos persas y el Estado se burocratizó.',
          'Entre los siglos IX y XI se produjo el llamado movimiento de traducción, sin equivalente en la historia hasta entonces. Bajo patrocinio califal y de élites privadas, se vertieron al árabe las obras científicas y filosóficas griegas, persas e indias: Aristóteles, Galeno, Ptolomeo, Euclides, Dioscórides. Dimitri Gutas ha subrayado que no fue un fenómeno espontáneo ni una simple curiosidad erudita, sino una política de Estado sostenida durante dos siglos y respaldada por una demanda social real.',
          'La aportación no fue de mera conservación. Al-Juarismi sistematizó el álgebra —la palabra procede de su tratado— e introdujo la numeración posicional india, incluido el cero, que llegaría a Europa como «números arábigos». Ibn al-Haytham (Alhacén) refutó la teoría de la visión por emisión y estableció un método experimental riguroso en óptica. Ibn Sina (Avicena) escribió el *Canon de medicina*, manual universitario europeo hasta el siglo XVII. Al-Razi describió clínicamente la viruela y el sarampión. Ibn Jaldún, ya en el siglo XIV, propuso en su *Muqaddima* una explicación de la formación y decadencia de los Estados basada en la asabiyya o cohesión de grupo, que muchos consideran el primer tratado de sociología histórica.',
          'La expresión «edad de oro» requiere matices. La producción científica no fue homogénea en el tiempo ni en el espacio, y no toda ella fue obra de musulmanes: cristianos nestorianos, judíos y zoroastrianos participaron de forma central, empezando por los traductores. Tampoco existió una «ciencia islámica» unitaria: hubo tensiones recurrentes entre la filosofía de inspiración griega (falsafa) y la teología, expresadas por ejemplo en la crítica de al-Ghazali a los filósofos y en la respuesta de Averroes.',
          'La tesis de un declive causado por al-Ghazali y por el cierre de la interpretación religiosa se repite mucho y está desacreditada: la producción científica continuó siglos después, con la escuela astronómica de Maragha en el siglo XIII, cuyos modelos matemáticos aparecen después en Copérnico, y con la observación otomana y mogola en la Edad Moderna.',
        ].join('\n\n'),
        callout:
          'La transmisión no fue solo de textos griegos. El papel llegó de China tras la batalla de Talas (751), y su difusión abarató drásticamente la producción de libros en el mundo islámico siglos antes que en Europa.',
      },
      {
        title: 'Fragmentación política y transmisión a Europa',
        body: [
          'La unidad política del califato duró poco. Ya en 756 un omeya superviviente fundó un emirato independiente en Córdoba, que sería califato en 929. Los fatimíes chiíes establecieron un califato rival en Egipto en 909 y fundaron El Cairo. Desde el siglo X, el poder efectivo en Bagdad pasó a manos de dinastías militares —buyíes, después selyúcidas turcos—, mientras el califa conservaba una autoridad simbólica.',
          'El golpe final llegó con los mongoles: en 1258 Hulagu tomó Bagdad, ejecutó al último califa abasí y destruyó la ciudad, incluidas sus bibliotecas y buena parte de su sistema de irrigación. La cifra de víctimas que dan las fuentes es probablemente exagerada, pero el fin del califato como institución universal es un hecho.',
          'La transmisión del saber árabe a Europa fue masiva y está bien documentada. Los centros fueron sobre todo Toledo, tras 1085, y Sicilia. En Toledo, traductores como Gerardo de Cremona vertieron al latín, con frecuencia a través de intermediarios judíos y mozárabes, cientos de obras: el *Almagesto* de Ptolomeo, el corpus aristotélico con los comentarios de Averroes, la medicina de Avicena, el álgebra y la óptica.',
          'El impacto fue estructural. La recuperación de Aristóteles reorganizó la filosofía escolástica y obligó a Tomás de Aquino a una síntesis entre razón y fe; la medicina árabe fundó los currículos de Montpellier, Bolonia y Salerno; la numeración posicional transformó la contabilidad y el comercio. El vocabulario castellano conserva el rastro: álgebra, algoritmo, cifra, azúcar, alcohol, alquimia, almanaque, cenit, azimut.',
          'El relato habitual de una Europa que «redescubre» la Antigüedad clásica en el Renacimiento omite este eslabón. Los textos griegos no reaparecieron por generación espontánea: llegaron traducidos, comentados y ampliados por una tradición intelectual que había trabajado sobre ellos durante cinco siglos.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Umma', definition: 'Comunidad de creyentes que sustituye al parentesco tribal como vínculo político primario.' },
      { term: 'Hégira', definition: 'Emigración a Medina en 622. Marca el año 1 del calendario islámico, lunar y de 354 días.' },
      { term: 'Califa', definition: '«Sucesor»: jefe político de la comunidad. No es profeta ni tiene autoridad para revelar.' },
      { term: 'Sunna', definition: 'Práctica y dichos del Profeta, transmitidos en los hadices. Segunda fuente del derecho tras el Corán.' },
      { term: 'Isnad', definition: 'Cadena de transmisores de un hadiz. Su análisis es la ciencia crítica desarrollada por la tradición islámica.' },
      { term: 'Fitna', definition: 'Guerra civil o discordia dentro de la comunidad musulmana.' },
      { term: 'Dhimmi', definition: 'Protegido: judío o cristiano con libertad de culto y autonomía jurídica a cambio del impuesto de capitación.' },
      { term: 'Yizia', definition: 'Impuesto personal pagado por los no musulmanes. Su cuantía desincentivó durante décadas las conversiones.' },
      { term: 'Mawali', definition: 'Musulmanes no árabes, sobre todo persas. Su marginación bajo los omeyas alimentó la revolución abasí.' },
      { term: 'Falsafa', definition: 'Filosofía de inspiración griega en el mundo islámico, en tensión recurrente con la teología.' },
      { term: 'Asabiyya', definition: 'Cohesión de grupo. Concepto central de Ibn Jaldún para explicar el auge y la caída de los Estados.' },
    ],
    debates: [
      {
        question: '¿Qué explica la rapidez de la expansión islámica?',
        positions: [
          {
            school: 'Explicación religiosa o del «fanatismo» (historiografía europea del siglo XIX)',
            argument:
              'El impulso de una fe nueva y militante habría lanzado a los árabes a una guerra santa continua contra el mundo circundante, sin más cálculo que la conversión o el sometimiento.',
          },
          {
            school: 'Explicación coyuntural y estructural (Donner, Kennedy)',
            argument:
              'Bizancio y Persia estaban exhaustos tras veintiséis años de guerra; las poblaciones monofisitas de Siria y Egipto no tenían motivos para defender a Constantinopla; la fiscalidad inicial fue más ligera; y la unificación tribal canalizó hacia fuera una energía militar antes consumida internamente.',
          },
        ],
        state:
          'Se rechaza la explicación por el fanatismo: las conquistas siguieron patrones militares convencionales, con tratados y pactos de capitulación. Se discute cuánto pesó la motivación religiosa frente al botín y a la lógica de Estado, y se subraya que las conversiones fueron lentas: no hubo mayoría musulmana hasta los siglos IX-X.',
      },
      {
        question: '¿Cuándo se fijó el texto coránico?',
        positions: [
          {
            school: 'Revisionismo radical (Wansbrough; Crone y Cook, 1977)',
            argument:
              'El corpus islámico se habría formado entre uno y dos siglos después, fuera de Arabia, como construcción retrospectiva. La escasez de fuentes contemporáneas externas justificaría la sospecha.',
          },
          {
            school: 'Fijación temprana (paleografía y radiocarbono)',
            argument:
              'Los manuscritos de Saná (1972) y las dataciones de folios como el de Birmingham apuntan a un texto estable muy temprano, coherente con la tradición que lo sitúa bajo Utmán hacia 650.',
          },
        ],
        state:
          'Las tesis revisionistas radicales no se han sostenido frente a la evidencia manuscrita. La posición mayoritaria distingue entre el Corán, texto antiguo y estable, y los relatos biográficos posteriores, que exigen la misma cautela crítica que cualquier hagiografía tardía.',
      },
      {
        question: '¿Hubo un «declive» de la ciencia islámica y a qué se debió?',
        positions: [
          {
            school: 'Tesis del cierre religioso',
            argument:
              'La crítica de al-Ghazali a los filósofos y el llamado «cierre de las puertas del iytihad» habrían sofocado la investigación racional, provocando un estancamiento a partir del siglo XII.',
          },
          {
            school: 'Crítica a la tesis (Saliba, Gutas)',
            argument:
              'La producción científica continuó siglos: la escuela astronómica de Maragha en el siglo XIII desarrolló modelos matemáticos que reaparecen en Copérnico, y hubo actividad relevante en el mundo otomano y mogol. El «declive» sería más bien un desplazamiento relativo tras la revolución científica europea.',
          },
        ],
        state:
          'La tesis del cierre religioso está desacreditada entre especialistas, aunque sigue muy difundida. Se investiga hoy por qué la ciencia islámica no dio el paso institucional que sí dio Europa en el siglo XVII, con explicaciones centradas en la financiación, las universidades y la imprenta más que en la teología.',
      },
    ],
    sources: [
      { author: 'Anónimo (tradición)', title: 'Corán', year: 'fijado c. 650', kind: 'primaria', note: '114 azoras ordenadas por longitud, no cronológicamente. Fuente primera del derecho y la doctrina.' },
      { author: 'Ibn Ishaq / Ibn Hisham', title: 'Sirat Rasul Allah', year: 'c. 760 / c. 830', kind: 'primaria', note: 'Biografía canónica del Profeta, conservada en la recensión posterior de Ibn Hisham.' },
      { author: 'Al-Tabari', title: 'Historia de los profetas y los reyes', year: 'c. 915', kind: 'primaria', note: 'Gran compilación histórica que conserva versiones divergentes con sus cadenas de transmisión.' },
      { author: 'Ibn Jaldún', title: 'Muqaddima', year: '1377', kind: 'primaria', note: 'Teoría de la asabiyya y del ciclo de los Estados. Considerado precursor de la sociología histórica.' },
      { author: 'Averroes (Ibn Rushd)', title: 'Tahafut al-Tahafut', year: 'c. 1180', kind: 'primaria', note: 'Respuesta a al-Ghazali en defensa de la filosofía. Sus comentarios a Aristóteles marcaron la escolástica latina.' },
      { author: 'Patricia Crone y Michael Cook', title: 'Hagarism: The Making of the Islamic World', year: '1977', kind: 'estudio', note: 'Manifiesto revisionista. Sus tesis fuertes no se sostienen, pero renovó el debate metodológico.' },
      { author: 'Richard W. Bulliet', title: 'Conversion to Islam in the Medieval Period', year: '1979', kind: 'estudio', note: 'Reconstruye el ritmo lento de las conversiones a partir de la onomástica.' },
      { author: 'Fred M. Donner', title: 'The Early Islamic Conquests', year: '1981', kind: 'estudio', note: 'Análisis de los factores militares, tribales y estatales de la expansión.' },
      { author: 'Dimitri Gutas', title: 'Greek Thought, Arabic Culture', year: '1998', kind: 'estudio', note: 'Demuestra que el movimiento de traducción fue una política de Estado sostenida y no un accidente erudito.' },
      { author: 'George Saliba', title: 'Islamic Science and the Making of the European Renaissance', year: '2007', kind: 'estudio', note: 'Refuta la tesis del declive por causas religiosas y documenta la continuidad científica.' },
      { author: 'Hugh Kennedy', title: 'The Great Arab Conquests', year: '2007', kind: 'estudio', note: 'Síntesis narrativa y crítica de la expansión, atenta a los problemas de fuentes.' },
    ],
  },
  questions: [
    {
      id: 'islam-1', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué acontecimiento marca el año 1 del calendario islámico y por qué?',
      options: [
        'El inicio de la revelación en 610, por su carácter fundacional religioso',
        'La hégira de 622, porque marca la fundación de una comunidad política en Medina',
        'La toma de La Meca en 630',
        'La muerte de Mahoma en 632',
      ],
      answer: 1,
      explanation: 'Que el calendario empiece en la hégira y no en la primera revelación indica qué se consideró el acontecimiento fundacional: la constitución de la umma como comunidad política.',
    },
    {
      id: 'islam-2', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué contexto geopolítico favoreció la expansión árabe?',
      options: [
        'La alianza entre Bizancio y Persia',
        'El agotamiento mutuo de Bizancio y Persia tras la guerra de 602-628',
        'La ausencia de ejércitos en Oriente Próximo',
        'El apoyo militar chino',
      ],
      answer: 1,
      explanation: 'Veintiséis años de guerra dejaron a ambos imperios sin reservas y con sus sistemas clientelares en el norte de Arabia desarticulados.',
    },
    {
      id: 'islam-3', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Cuál fue la aportación política del islam a la sociedad tribal árabe?',
      options: [
        'La creación de una monarquía hereditaria',
        'Sustituir el vínculo de parentesco por la umma, comunidad de creyentes',
        'La abolición del comercio',
        'La imposición del arameo como lengua común',
      ],
      answer: 1,
      explanation: 'La lealtad dejó de organizarse solo por linajes. Esa unificación canalizó hacia el exterior una energía militar antes consumida en conflictos internos.',
    },
    {
      id: 'islam-4', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué problema metodológico plantean las fuentes sobre la vida de Mahoma?',
      options: [
        'Que están escritas en persa',
        'Que la sira y los hadices se compilaron entre siglo y medio y dos siglos después de los hechos',
        'Que no existe ninguna fuente escrita',
        'Que fueron redactadas en el siglo XIX',
      ],
      answer: 1,
      explanation: 'La propia tradición islámica desarrolló el análisis del isnad, la cadena de transmisores, como ciencia crítica para evaluar su fiabilidad.',
    },
    {
      id: 'islam-5', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué evidencia debilitó las tesis revisionistas radicales sobre la formación tardía del Corán?',
      options: [
        'Las crónicas bizantinas',
        'Los manuscritos de Saná y las dataciones por radiocarbono de folios coránicos muy tempranos',
        'Las inscripciones de la Kaaba',
        'Los archivos otomanos',
      ],
      answer: 1,
      explanation: 'Apuntan a un texto estable muy temprano. Hoy se distingue entre el Corán, antiguo y coherente, y los relatos biográficos posteriores, que exigen cautela.',
    },
    {
      id: 'islam-6', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: 'Según Bulliet, ¿cuándo alcanzaron mayoría musulmana las poblaciones conquistadas?',
      options: [
        'Inmediatamente tras la conquista',
        'En los siglos IX o X, doscientos o trescientos años después',
        'Nunca la alcanzaron',
        'En el siglo XV',
      ],
      answer: 1,
      explanation: 'La reconstrucción a partir de la onomástica muestra conversiones lentas. Además, la conversión reducía los ingresos por yizia, así que los omeyas no la fomentaron.',
    },
    {
      id: 'islam-7', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué implicaba el estatuto de dhimmi?',
      options: [
        'La conversión forzosa al islam',
        'Libertad de culto y autonomía jurídica a cambio del impuesto de capitación, en régimen de subordinación legal',
        'La expulsión del territorio',
        'La igualdad plena con los musulmanes',
      ],
      answer: 1,
      explanation: 'Era subordinación jurídica, no igualdad, pero suponía una tolerancia práctica muy superior a la contemporánea en la Europa cristiana.',
    },
    {
      id: 'islam-8', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Cómo valora hoy la historiografía la batalla de Poitiers de 732?',
      options: [
        'Como la batalla que salvó a Europa del islam',
        'Probablemente como la derrota de una expedición de saqueo, magnificada por la historiografía francesa del siglo XIX',
        'Como una victoria musulmana',
        'Como un episodio inventado',
      ],
      answer: 1,
      explanation: 'El repliegue musulmán del sur de Francia respondió más a problemas internos —la revolución abasí se acercaba— que a esa derrota concreta.',
    },
    {
      id: 'islam-9', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Cuál fue el origen de la división entre suníes y chiíes?',
      options: [
        'Una disputa sobre el texto del Corán',
        'La cuestión de quién debía dirigir la comunidad tras la muerte del Profeta',
        'El desacuerdo sobre la fecha del Ramadán',
        'La invasión mongola',
      ],
      answer: 1,
      explanation: 'Mahoma no dejó procedimiento de sucesión establecido. Los partidarios de Alí defendían la línea familiar del Profeta; los suníes, la legitimidad de los califas efectivos.',
    },
    {
      id: 'islam-10', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué convirtió la disputa sucesoria en identidad religiosa duradera?',
      options: [
        'La fundación de Bagdad',
        'La muerte de Husayn en Kerbala en 680, conmemorada anualmente en la Ashura',
        'La conquista de al-Ándalus',
        'La traducción de Aristóteles',
      ],
      answer: 1,
      explanation: 'Kerbala es el centro emocional del chiismo. Conviene no proyectar sobre el pasado los alineamientos sectarios contemporáneos, que responden a la política del siglo XX.',
    },
    {
      id: 'islam-11', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué cambio social trajo la revolución abasí de 750?',
      options: [
        'La expulsión de los persas de la administración',
        'La integración de los mawali, musulmanes no árabes, cuya marginación bajo los omeyas había alimentado la revuelta',
        'La abolición del califato',
        'El retorno de la capital a La Meca',
      ],
      answer: 1,
      explanation: 'La administración adoptó modelos persas y el Estado se burocratizó. La capital pasó de Damasco a Bagdad, fundada en 762.',
    },
    {
      id: 'islam-12', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: 'Según Dimitri Gutas, ¿qué fue el movimiento de traducción abasí?',
      options: [
        'Una iniciativa privada de eruditos aislados',
        'Una política de Estado sostenida durante dos siglos con demanda social real',
        'Una consecuencia accidental de la conquista de Egipto',
        'Un proyecto exclusivamente religioso',
      ],
      answer: 1,
      explanation: 'Cristianos nestorianos, judíos y zoroastrianos participaron de forma central como traductores. No fue conservación pasiva, sino ampliación crítica.',
    },
    {
      id: 'islam-13', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué aportó Ibn al-Haytham (Alhacén)?',
      options: [
        'La sistematización del álgebra',
        'La refutación de la teoría de la visión por emisión y un método experimental riguroso en óptica',
        'El Canon de medicina',
        'La teoría de la asabiyya',
      ],
      answer: 1,
      explanation: 'Al-Juarismi sistematizó el álgebra, Avicena escribió el Canon e Ibn Jaldún formuló la asabiyya. Alhacén estableció bases experimentales de la óptica.',
    },
    {
      id: 'islam-14', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Por qué está desacreditada la tesis de que al-Ghazali causó el declive científico islámico?',
      options: [
        'Porque al-Ghazali nunca criticó a los filósofos',
        'Porque la producción científica continuó siglos: Maragha en el siglo XIII desarrolló modelos que reaparecen en Copérnico',
        'Porque no hubo ciencia islámica antes del siglo XIII',
        'Porque el iytihad nunca se cerró en ninguna escuela',
      ],
      answer: 1,
      explanation: 'Hoy se investiga por qué no se dio el paso institucional europeo del siglo XVII, con explicaciones centradas en financiación, universidades e imprenta.',
    },
    {
      id: 'islam-15', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué papel tuvo Toledo tras 1085 en la historia intelectual europea?',
      options: [
        'Fue la capital del califato de Córdoba',
        'Fue el principal centro de traducción del árabe al latín: Ptolomeo, Aristóteles con Averroes, Avicena, álgebra y óptica',
        'Allí se fundó la primera universidad europea',
        'Fue el puerto del comercio de especias',
      ],
      answer: 1,
      explanation: 'Gerardo de Cremona y otros trabajaron con frecuencia a través de intermediarios judíos y mozárabes. El relato del «redescubrimiento» renacentista suele omitir este eslabón.',
    },
    {
      id: 'islam-16', era: 'Edad Media', topicId: 'islam', topic: 'Islam',
      question: '¿Qué tecnología llegó al mundo islámico tras la batalla de Talas (751)?',
      options: ['La pólvora', 'El papel', 'La imprenta de tipos móviles', 'La brújula'],
      answer: 1,
      explanation: 'Su difusión abarató drásticamente la producción de libros en el mundo islámico, siglos antes de que ocurriera lo mismo en Europa.',
    },
  ],
}
