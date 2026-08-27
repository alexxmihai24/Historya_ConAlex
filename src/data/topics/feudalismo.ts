import type { TopicModule } from '../types'

export const feudalismo: TopicModule = {
  topic: {
    id: 'feudalismo',
    era: 'Edad Media',
    title: 'La Europa feudal',
    years: 'c. 800–1200',
    country: 'Europa',
    description: 'Vasallaje, señorío, campesinado y la discusión sobre si el feudalismo existió.',
    duration: '45 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚔',
    color: 'red',
    summary:
      'Entre los siglos IX y XII, Europa occidental funcionó sin Estados capaces de garantizar justicia, defensa y fiscalidad de forma centralizada. Lo que ocupó ese vacío fue un entramado de relaciones personales de dependencia y de poderes locales sobre la tierra y sobre las personas. Llamar «feudalismo» a ese entramado es cómodo, pero la propia palabra ha sido objeto de una de las polémicas más duras de la historiografía del siglo XX.',
    keyDates: [
      { date: '800', event: 'Coronación imperial de Carlomagno en Roma.' },
      { date: '843', event: 'Tratado de Verdún: partición del Imperio carolingio.' },
      { date: 'c. 850–950', event: 'Incursiones vikingas, magiares y sarracenas; fragmentación del poder.' },
      { date: '910', event: 'Fundación de Cluny; reforma monástica y exención de poderes laicos.' },
      { date: 'c. 989–1030', event: 'Concilios de Paz y Tregua de Dios.' },
      { date: '1066', event: 'Conquista normanda de Inglaterra.' },
      { date: '1075–1122', event: 'Querella de las Investiduras; Concordato de Worms.' },
      { date: '1086', event: 'Domesday Book: censo señorial de Inglaterra.' },
      { date: '1095', event: 'Urbano II predica la Primera Cruzada en Clermont.' },
      { date: 'c. 1100–1200', event: 'Roturaciones, crecimiento demográfico y renacimiento urbano.' },
      { date: '1215', event: 'Carta Magna: límites contractuales al poder real inglés.' },
    ],
    sections: [
      {
        title: 'El vacío estatal y la privatización del poder',
        body: [
          'El Imperio carolingio había intentado reconstruir una autoridad pública de escala continental: condes nombrados por el rey, inspectores itinerantes (missi dominici), capitulares legislativos, moneda controlada. Ese proyecto se deshizo en dos generaciones. La partición de Verdún (843), las luchas dinásticas y las incursiones vikingas, magiares y sarracenas dejaron a las poblaciones sin defensa efectiva desde arriba.',
          'Lo que ocurrió entonces fue una privatización de las funciones públicas. Los cargos que el rey concedía —el condado, la castellanía— se hicieron hereditarios; el derecho a juzgar, a acuñar moneda, a cobrar peajes y a exigir prestaciones militares pasó a manos de quien controlaba un castillo. La palabra clave es ban: el poder de mandar, juzgar y castigar, que en teoría emanaba del rey y que en la práctica ejercía cada señor sobre su territorio.',
          'El castillo es el objeto material que resume el proceso. Entre los siglos X y XI se multiplicaron por Europa occidental fortificaciones privadas —primero de madera sobre motas artificiales, después de piedra— que no defendían un reino, sino que delimitaban un ámbito de dominación. Georges Duby estudió este fenómeno en la región del Mâconnais y lo llamó «encastillamiento».',
          'La Iglesia intentó poner límites a esa violencia con los movimientos de Paz y Tregua de Dios desde finales del siglo X: prohibición de atacar a clérigos, campesinos, mujeres y mercaderes, y suspensión de la guerra en determinados días. Fue una respuesta social a la ausencia de justicia pública, y también un intento eclesiástico de encauzar a la aristocracia guerrera, que después desembocaría en la cruzada.',
        ].join('\n\n'),
        callout:
          'El «feudalismo» no fue un sistema diseñado, sino el resultado no buscado de un colapso institucional. Nadie lo inventó ni lo proclamó: se fue formando por la acumulación de soluciones locales al mismo problema.',
      },
      {
        title: 'Vasallaje y feudo: la relación entre poderosos',
        body: [
          'El vínculo vasallático unía a dos hombres libres de posición desigual. El futuro vasallo colocaba sus manos entre las del señor (immixtio manuum) y prestaba juramento de fidelidad; el señor le concedía a cambio un beneficio, normalmente tierras con sus habitantes y rentas, que acabó llamándose feudo. La ceremonia se llamaba homenaje y creaba obligaciones recíprocas.',
          'El vasallo debía auxilium y consilium: ayuda militar —un número determinado de días al año, generalmente cuarenta— y consejo, es decir, asistencia a la corte del señor y participación en sus juicios. Además contribuía económicamente en casos tasados: rescate del señor cautivo, armamento de su hijo mayor, matrimonio de su hija mayor. El señor debía protección y justicia.',
          'El sistema tenía un fallo estructural: la multiplicidad de vínculos. Un mismo noble podía ser vasallo de varios señores a la vez, incluidos señores enfrentados entre sí. Para resolverlo se inventó el homenaje ligio, que establecía cuál era la fidelidad prioritaria; pero el problema nunca se resolvió del todo, y produjo situaciones tan absurdas como que el rey de Inglaterra fuera vasallo del rey de Francia por sus posesiones continentales, lo que está en el origen de la Guerra de los Cien Años.',
          'Conviene desmontar la imagen de una «pirámide feudal» ordenada, con el rey en la cúspide y escalones sucesivos hasta el campesino. Esa representación procede de los manuales del siglo XIX y no de la documentación medieval. Los vínculos reales eran múltiples, contradictorios, negociados y frecuentemente incumplidos; el rey, durante largos periodos, fue un señor más entre otros, a menudo menos poderoso que sus supuestos vasallos.',
        ].join('\n\n'),
      },
      {
        title: 'El señorío y la vida campesina',
        body: [
          'La estructura que sostenía todo el edificio era el señorío, y afectaba a la inmensa mayoría de la población. Se distinguen dos formas de poder señorial. El señorío territorial daba al señor la propiedad de la tierra y el derecho a percibir rentas de quienes la trabajaban. El señorío jurisdiccional le daba el ban: juzgar, multar, exigir prestaciones y obligar al uso de sus instalaciones.',
          'La explotación se dividía en reserva —la parte que el señor gestionaba directamente y que los campesinos trabajaban gratis mediante corveas— y mansos, parcelas cedidas a familias campesinas a cambio de renta en especie, en dinero o en trabajo. A ello se sumaban los monopolios señoriales o banalidades: obligación de moler en el molino del señor, cocer en su horno y prensar en su lagar, siempre pagando.',
          'La condición jurídica de los campesinos era variada y cambiante. Los siervos estaban adscritos a la tierra: no podían abandonarla, necesitaban permiso para casarse fuera del señorío (formariage) y pagaban un derecho a la sucesión (mainmorte). Los campesinos libres tenían obligaciones menos gravosas pero seguían sujetos a la jurisdicción señorial. La esclavitud antigua desapareció progresivamente, sustituida por estas formas de dependencia.',
          'La imagen de un campesinado pasivo es falsa. La documentación registra resistencias constantes: pleitos ante la corte señorial, negociación colectiva de cartas de franquicia, fugas hacia tierras que necesitaban repobladores, y revueltas abiertas como la de los campesinos normandos de 996. Las comunidades rurales tenían asambleas propias, gestionaban bienes comunales —pastos, bosques, aguas— y negociaban con el señor como cuerpo.',
          'Desde el siglo XI, un ciclo de crecimiento cambió las condiciones. Mejoras técnicas —arado pesado de vertedera, collera rígida que multiplicaba la fuerza de tiro del caballo, rotación trienal, molinos hidráulicos y después de viento— aumentaron los rendimientos. La población creció, se roturaron bosques y marismas, y aparecieron ciudades nuevas. Ese crecimiento fue el que empezó a erosionar el orden señorial, al ofrecer al campesinado alternativas: el aire de la ciudad, decía el proverbio alemán, hace libre.',
        ].join('\n\n'),
        callout:
          'Las banalidades son un buen indicador de qué era el poder señorial: no solo cobrar renta por la tierra, sino monopolizar servicios imprescindibles y cobrar por usarlos obligatoriamente.',
      },
      {
        title: 'La sociedad de los tres órdenes y la Iglesia',
        body: [
          'Hacia el año 1000, los obispos Adalberón de Laon y Gerardo de Cambrai formularon un esquema destinado a una larga vida: la sociedad se divide en quienes rezan (oratores), quienes combaten (bellatores) y quienes trabajan (laboratores). Cada orden cumple una función necesaria y el conjunto forma un cuerpo armónico querido por Dios.',
          'Georges Duby analizó este esquema en *Les trois ordres ou l\'imaginaire du féodalisme* (1978) y mostró que no era una descripción, sino un arma ideológica: aparece precisamente cuando el orden social está siendo cuestionado, y sirve para justificar que unos trabajen para que otros combatan y recen. Su eficacia fue enorme: se repitió durante ochocientos años y todavía estructuraba el discurso del Antiguo Régimen en 1789.',
          'La Iglesia no era solo una institución espiritual: era el mayor propietario de tierras de Europa y un poder señorial de pleno derecho, con obispos que ejercían el ban y abadías que poseían decenas de señoríos. Esa doble condición generó tensiones permanentes.',
          'La Querella de las Investiduras (1075-1122) fue el enfrentamiento decisivo. El papado reformador, con Gregorio VII, reclamó que solo la Iglesia pudiera nombrar obispos y abades, frente a la práctica de que los designara el emperador. El conflicto tuvo episodios espectaculares —la excomunión de Enrique IV y su penitencia en Canossa en 1077— y se cerró con el Concordato de Worms (1122), que distinguió la investidura espiritual, reservada a la Iglesia, de la temporal, concedida por el poder laico.',
          'Sus consecuencias fueron de largo alcance. Al separar por primera vez de forma explícita la esfera religiosa de la política, la Querella creó las condiciones para pensar el poder secular como algo autónomo. Varios historiadores del derecho la consideran uno de los orígenes remotos de la distinción moderna entre Iglesia y Estado.',
        ].join('\n\n'),
      },
      {
        title: '¿Existió el feudalismo? La gran polémica',
        body: [
          'La palabra «feudalismo» no es medieval. Se acuñó en el siglo XVII a partir de los estudios de derecho feudal y se generalizó en el XVIII con un sentido peyorativo: Montesquieu, Voltaire y después los revolucionarios franceses la usaron para designar el conjunto de privilegios que había que abolir. Es decir, nació como categoría polémica antes que como concepto analítico.',
          'En el siglo XX se consolidaron dos usos muy distintos. Marc Bloch, en *La sociedad feudal* (1939-1940), lo describió como un tipo de sociedad completo: dependencia personal generalizada, fragmentación del poder, predominio del guerrero, escasa circulación monetaria, vínculos de parentesco fuertes. Para la tradición marxista, en cambio, el feudalismo era un modo de producción definido por la extracción de excedente al campesinado mediante coacción extraeconómica, es decir, por la fuerza y no por el mercado.',
          'La impugnación llegó en 1974, cuando Elizabeth Brown publicó «The Tyranny of a Construct», y sobre todo en 1994, con *Fiefs and Vassals* de Susan Reynolds. Reynolds sostuvo, a partir de la documentación, que las categorías de feudo y vasallaje que manejan los manuales fueron sistematizadas por los juristas del siglo XII y proyectadas después hacia atrás sobre siglos que funcionaban de otra manera. La palabra «feudo» aparece con significados dispares; el homenaje no siempre implica concesión de tierra; y las relaciones documentadas son mucho más variadas y locales de lo que sugiere el modelo.',
          'La discusión conectó con otra: la del «cambio del año mil» o mutación feudal. Duby y Bonnassie defendieron una transformación brusca en torno al 1000, con hundimiento de la justicia pública y aparición súbita del señorío banal. Dominique Barthélemy respondió que el cambio fue mucho más gradual y que la impresión de ruptura se debe a un cambio en el tipo de documentos conservados, no en la realidad que describen.',
          'El resultado práctico de estos debates es una llamada a la precisión. La mayoría de los medievalistas sigue usando «feudal» como abreviatura útil, pero especificando de qué se habla: relaciones vasalláticas entre aristócratas, señorío sobre campesinos, o un tipo general de sociedad. Confundir esos tres planos —lo que hacen la mayoría de los manuales— es lo que Reynolds considera insostenible.',
        ].join('\n\n'),
        callout:
          'La noche del 4 de agosto de 1789, la Asamblea francesa proclamó abolido «el régimen feudal». Lo que abolía eran derechos señoriales del siglo XVIII, no un sistema medieval: la propia palabra hacía el trabajo político de agrupar bajo una etiqueta odiosa realidades muy distintas.',
      },
      {
        title: 'Comparación y final del ciclo',
        body: [
          'El uso del término fuera de Europa occidental ha sido muy discutido. Se ha aplicado al Japón de los samuráis, con su relación entre daimios y shogun, y a la Rusia moderna. Marc Bloch admitía la comparación con Japón; la mayoría de los especialistas actuales prefiere restringirla, porque las semejanzas superficiales —guerreros, lealtad personal, tierra— ocultan diferencias profundas en la estructura del Estado, la religión y el derecho.',
          'El propio ciclo europeo se cerró desde dentro. El crecimiento económico de los siglos XII y XIII multiplicó la circulación monetaria, lo que permitió sustituir el servicio militar vasallático por impuestos y tropas mercenarias; las ciudades obtuvieron cartas de franquicia que las sustraían a la jurisdicción señorial; y los reyes reconstruyeron administraciones profesionales, tribunales de apelación y una fiscalidad regular.',
          'La recuperación del derecho romano fue decisiva en ese proceso. El Corpus Iuris Civilis, estudiado en Bolonia desde el siglo XI, ofrecía a los monarcas un arsenal conceptual —soberanía, ley general, autoridad pública— con el que combatir la fragmentación jurisdiccional. Los juristas formados en las universidades se convirtieron en el instrumento del Estado en construcción.',
          'Ese proceso no fue lineal ni uniforme. Inglaterra desarrolló pronto una monarquía centralizada con derecho común y, al mismo tiempo, un parlamento capaz de limitarla, en un equilibrio anticipado por la Carta Magna de 1215. Francia tardó siglos en someter a sus grandes feudatarios. En el Sacro Imperio, la fragmentación se consolidó hasta el siglo XIX. Y en la península ibérica, la reconquista y la repoblación generaron regímenes de franquicia y concejos con amplias libertades locales difíciles de encajar en el modelo clásico.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Ban', definition: 'Poder de mandar, juzgar y castigar. Emanaba en teoría del rey; en la práctica lo ejercía cada señor con castillo.' },
      { term: 'Homenaje', definition: 'Ceremonia que creaba el vínculo vasallático mediante la unión de manos y el juramento de fidelidad.' },
      { term: 'Feudo', definition: 'Beneficio —normalmente tierra con sus rentas y habitantes— concedido por el señor al vasallo.' },
      { term: 'Auxilium y consilium', definition: 'Las dos obligaciones básicas del vasallo: ayuda militar y consejo en la corte del señor.' },
      { term: 'Homenaje ligio', definition: 'Fidelidad prioritaria, creada para resolver el conflicto de vínculos múltiples entre señores enfrentados.' },
      { term: 'Reserva y mansos', definition: 'Parte de la explotación gestionada por el señor frente a las parcelas cedidas a familias campesinas.' },
      { term: 'Banalidades', definition: 'Monopolios señoriales de molino, horno y lagar, de uso obligatorio y de pago.' },
      { term: 'Corvea', definition: 'Trabajo gratuito obligatorio del campesino en las tierras de reserva del señor.' },
      { term: 'Servidumbre', definition: 'Adscripción a la tierra, con restricciones al matrimonio (formariage) y a la sucesión (mainmorte).' },
      { term: 'Tres órdenes', definition: 'Esquema ideológico —oratores, bellatores, laboratores— formulado hacia el año 1000 para justificar el orden social.' },
      { term: 'Carta de franquicia', definition: 'Documento que reconocía libertades a una comunidad rural o urbana, sustrayéndola a cargas señoriales.' },
    ],
    debates: [
      {
        question: '¿Es «feudalismo» un concepto válido o una construcción de los historiadores?',
        positions: [
          {
            school: 'Feudalismo como tipo de sociedad (Bloch, 1939)',
            argument:
              'Describe un conjunto coherente: dependencia personal generalizada, fragmentación del poder, predominio del guerrero, economía poco monetizada y lazos de parentesco fuertes. Es una herramienta comparativa útil.',
          },
          {
            school: 'Modo de producción (tradición marxista)',
            argument:
              'Lo definitorio es la extracción de excedente al campesinado mediante coacción extraeconómica. El vasallaje entre nobles sería secundario respecto a la relación señor-campesino.',
          },
          {
            school: 'Impugnación del constructo (Brown, 1974; Reynolds, 1994)',
            argument:
              'Feudo y vasallaje tal como se enseñan fueron sistematizados por juristas del siglo XII y proyectados hacia atrás. La documentación muestra usos dispares y relaciones mucho más locales y variadas que el modelo.',
          },
        ],
        state:
          'La crítica de Reynolds ha obligado a una precisión mayor. La mayoría de los medievalistas sigue usando «feudal» como abreviatura, pero distinguiendo entre relaciones vasalláticas, señorío campesino y tipo general de sociedad: confundir esos tres planos es lo que se considera insostenible.',
      },
      {
        question: '¿Hubo una «mutación feudal» brusca en torno al año 1000?',
        positions: [
          {
            school: 'Mutación (Duby, Bonnassie, Poly-Bournazel)',
            argument:
              'Hacia el 1000 se hunde la justicia pública carolingia y aparece de forma rápida el señorío banal, con encastillamiento, violencia caballeresca y nuevas cargas sobre el campesinado.',
          },
          {
            school: 'Continuidad (Barthélemy)',
            argument:
              'El cambio fue gradual y la impresión de ruptura procede de una transformación en el tipo de documentos conservados —de actas públicas a cartularios monásticos—, no en la realidad social que describen.',
          },
        ],
        state:
          'La versión fuerte de la mutación se ha suavizado. Se acepta una transformación real del poder local, pero más lenta, con cronologías muy distintas según regiones y sin la nitidez que sugería el modelo original.',
      },
      {
        question: '¿Puede hablarse de feudalismo fuera de Europa occidental?',
        positions: [
          {
            school: 'Uso comparativo (Bloch)',
            argument:
              'El Japón medieval presenta rasgos análogos: guerreros profesionales, lealtad personal, tierra a cambio de servicio, fragmentación del poder central. La comparación ilumina ambos casos.',
          },
          {
            school: 'Restricción (mayoría de especialistas actuales)',
            argument:
              'Las semejanzas superficiales ocultan diferencias profundas en la estructura del Estado, el derecho, la religión y la relación con el campesinado. Extender el término lo vacía de contenido analítico.',
          },
        ],
        state:
          'Predomina la cautela. Se admite la comparación explícita y acotada, y se rechaza el uso de «feudal» como sinónimo genérico de «premoderno» o «atrasado», frecuente fuera de la disciplina.',
      },
    ],
    sources: [
      { author: 'Fulberto de Chartres', title: 'Carta a Guillermo de Aquitania', year: '1020', kind: 'primaria', note: 'Enumera las obligaciones recíprocas de señor y vasallo. Texto escolar clásico sobre el vasallaje.' },
      { author: 'Galberto de Brujas', title: 'De multro, traditione et occisione Karoli comitis Flandriarum', year: '1127–1128', kind: 'primaria', note: 'Describe ceremonias de homenaje en directo. Fuente excepcional por su inmediatez.' },
      { author: 'Adalberón de Laon', title: 'Carmen ad Robertum regem', year: 'c. 1025', kind: 'primaria', note: 'Formulación canónica del esquema de los tres órdenes.' },
      { author: 'Comisionados de Guillermo I', title: 'Domesday Book', year: '1086', kind: 'primaria', note: 'Censo señorial de Inglaterra: fuente cuantitativa sin equivalente en la Europa del siglo XI.' },
      { author: 'Anónimo', title: 'Carta Magna', year: '1215', kind: 'primaria', note: 'Límites contractuales al poder real inglés impuestos por los barones.' },
      { author: 'Marc Bloch', title: 'La société féodale', year: '1939–1940', kind: 'estudio', note: 'Define el feudalismo como tipo de sociedad. Obra fundacional de la escuela de Annales en medievalística.' },
      { author: 'Georges Duby', title: 'Les trois ordres ou l\'imaginaire du féodalisme', year: '1978', kind: 'estudio', note: 'Analiza el esquema trifuncional como ideología y no como descripción.' },
      { author: 'Elizabeth A. R. Brown', title: '«The Tyranny of a Construct», American Historical Review', year: '1974', kind: 'estudio', note: 'Primer ataque frontal a la validez del concepto de feudalismo.' },
      { author: 'Susan Reynolds', title: 'Fiefs and Vassals: The Medieval Evidence Reinterpreted', year: '1994', kind: 'estudio', note: 'Demuestra que las categorías clásicas son una sistematización jurídica del siglo XII.' },
      { author: 'Dominique Barthélemy', title: 'La mutation de l\'an mil a-t-elle eu lieu?', year: '1997', kind: 'estudio', note: 'Respuesta a la tesis de la mutación feudal desde la crítica documental.' },
      { author: 'Chris Wickham', title: 'Medieval Europe', year: '2016', kind: 'estudio', note: 'Síntesis reciente que integra los debates y evita el uso acrítico de «feudalismo».' },
    ],
  },
  questions: [
    {
      id: 'feudalismo-1', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué proceso describe mejor el origen del orden feudal?',
      options: [
        'Un sistema diseñado y proclamado por Carlomagno',
        'La privatización de funciones públicas —justicia, moneda, peajes— tras el colapso del poder carolingio',
        'Una imposición de la Iglesia sobre los reyes',
        'La adopción del derecho romano por los señores',
      ],
      answer: 1,
      explanation: 'Nadie lo inventó: se formó por acumulación de soluciones locales al mismo problema, la ausencia de una autoridad capaz de garantizar defensa y justicia.',
    },
    {
      id: 'feudalismo-2', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué era el ban?',
      options: [
        'Un impuesto sobre el comercio',
        'El poder de mandar, juzgar y castigar, que en teoría emanaba del rey y en la práctica ejercía cada señor',
        'La ceremonia del homenaje',
        'El juramento de los cruzados',
      ],
      answer: 1,
      explanation: 'El castillo delimitaba el ámbito donde ese poder se ejercía. Duby llamó «encastillamiento» a la multiplicación de fortificaciones privadas de los siglos X y XI.',
    },
    {
      id: 'feudalismo-3', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué debía el vasallo a su señor?',
      options: [
        'Solo el pago de una renta anual en dinero',
        'Auxilium y consilium: ayuda militar y consejo, más contribuciones económicas en casos tasados',
        'Trabajo agrícola en la reserva señorial',
        'Obediencia religiosa',
      ],
      answer: 1,
      explanation: 'Las contribuciones tasadas incluían el rescate del señor cautivo, el armamento de su hijo mayor y el matrimonio de su hija mayor. El señor debía protección y justicia.',
    },
    {
      id: 'feudalismo-4', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Por qué se creó la figura del homenaje ligio?',
      options: [
        'Para permitir que las mujeres prestaran homenaje',
        'Para establecer una fidelidad prioritaria cuando un noble era vasallo de varios señores enfrentados',
        'Para eximir del servicio militar',
        'Para vincular directamente al campesinado con el rey',
      ],
      answer: 1,
      explanation: 'El problema nunca se resolvió del todo: que el rey de Inglaterra fuera vasallo del de Francia por sus tierras continentales está en el origen de la Guerra de los Cien Años.',
    },
    {
      id: 'feudalismo-5', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Por qué es problemática la imagen de la «pirámide feudal»?',
      options: [
        'Porque el rey no existía en la Edad Media',
        'Porque procede de los manuales del siglo XIX: los vínculos reales eran múltiples, contradictorios y frecuentemente incumplidos',
        'Porque los campesinos ocupaban la cúspide',
        'Porque solo se aplicaba en Inglaterra',
      ],
      answer: 1,
      explanation: 'Durante largos periodos el rey fue un señor más entre otros, a menudo menos poderoso que sus supuestos vasallos.',
    },
    {
      id: 'feudalismo-6', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué eran las banalidades?',
      options: [
        'Impuestos pagados por los nobles al rey',
        'Monopolios señoriales de molino, horno y lagar, de uso obligatorio y de pago',
        'Fiestas religiosas del calendario agrícola',
        'Tierras comunales de la aldea',
      ],
      answer: 1,
      explanation: 'Muestran bien qué era el poder señorial: no solo cobrar renta por la tierra, sino monopolizar servicios imprescindibles y cobrar por su uso forzoso.',
    },
    {
      id: 'feudalismo-7', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué distinguía a un siervo de un campesino libre?',
      options: [
        'El siervo no podía trabajar la tierra',
        'El siervo estaba adscrito a la tierra, con restricciones al matrimonio y derechos sobre su sucesión',
        'El campesino libre no pagaba renta alguna',
        'El siervo era propiedad personal vendible, como el esclavo antiguo',
      ],
      answer: 1,
      explanation: 'La esclavitud antigua desapareció progresivamente, sustituida por estas formas de dependencia. El campesino libre seguía sujeto a la jurisdicción señorial.',
    },
    {
      id: 'feudalismo-8', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué evidencia contradice la imagen de un campesinado pasivo?',
      options: [
        'La ausencia de documentación rural',
        'Pleitos ante la corte señorial, negociación de cartas de franquicia, fugas y revueltas abiertas',
        'La inexistencia de comunidades rurales',
        'La prohibición de los bienes comunales',
      ],
      answer: 1,
      explanation: 'Las comunidades rurales tenían asambleas, gestionaban pastos, bosques y aguas, y negociaban con el señor como cuerpo colectivo.',
    },
    {
      id: 'feudalismo-9', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué innovaciones técnicas impulsaron el crecimiento agrario desde el siglo XI?',
      options: [
        'El arado romano y la rotación bienal',
        'Arado pesado de vertedera, collera rígida, rotación trienal y molinos hidráulicos',
        'El regadío por inundación y la noria',
        'La siembra a voleo y el barbecho permanente',
      ],
      answer: 1,
      explanation: 'La collera rígida multiplicaba la fuerza de tiro del caballo sin ahogarlo. El aumento de rendimientos permitió crecimiento demográfico, roturaciones y ciudades nuevas.',
    },
    {
      id: 'feudalismo-10', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: 'Según Duby, ¿qué función cumplía el esquema de los tres órdenes?',
      options: [
        'Describir con precisión la sociedad de su tiempo',
        'Justificar ideológicamente que unos trabajen para que otros combatan y recen, precisamente cuando el orden se cuestiona',
        'Organizar la administración carolingia',
        'Regular las relaciones vasalláticas',
      ],
      answer: 1,
      explanation: 'Se repitió durante ochocientos años y todavía estructuraba el discurso del Antiguo Régimen en 1789. Su eficacia fue política, no descriptiva.',
    },
    {
      id: 'feudalismo-11', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué consecuencia de largo alcance tuvo la Querella de las Investiduras?',
      options: [
        'La desaparición del papado',
        'Separar explícitamente la esfera religiosa de la política, creando condiciones para pensar el poder secular como autónomo',
        'La conversión de los reyes en obispos',
        'La abolición del vasallaje',
      ],
      answer: 1,
      explanation: 'El Concordato de Worms (1122) distinguió investidura espiritual y temporal. Varios historiadores del derecho lo consideran un origen remoto de la separación Iglesia-Estado.',
    },
    {
      id: 'feudalismo-12', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Cuál es el origen de la palabra «feudalismo»?',
      options: [
        'Es un término medieval usado por los propios señores',
        'Se acuñó en el siglo XVII y se generalizó en el XVIII con sentido peyorativo, para designar privilegios que había que abolir',
        'Procede del derecho romano justinianeo',
        'Lo inventó Marc Bloch en 1939',
      ],
      answer: 1,
      explanation: 'Nació como categoría polémica antes que como concepto analítico. En 1789 la Asamblea francesa abolió «el régimen feudal», agrupando bajo esa etiqueta realidades muy distintas.',
    },
    {
      id: 'feudalismo-13', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué sostiene Susan Reynolds en Fiefs and Vassals?',
      options: [
        'Que el feudalismo fue más rígido de lo que se creía',
        'Que las categorías de feudo y vasallaje fueron sistematizadas por juristas del siglo XII y proyectadas hacia atrás',
        'Que el vasallaje nunca existió en ninguna forma',
        'Que el feudalismo se originó en Bizancio',
      ],
      answer: 1,
      explanation: 'La documentación muestra usos dispares de «feudo», homenajes sin concesión de tierra y relaciones mucho más locales y variadas que el modelo de los manuales.',
    },
    {
      id: 'feudalismo-14', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué objeta Barthélemy a la tesis de la «mutación del año mil»?',
      options: [
        'Que el cambio fue aún más brusco de lo descrito',
        'Que la impresión de ruptura procede del cambio en el tipo de documentos conservados, no en la realidad social',
        'Que no hubo ningún cambio en el poder local',
        'Que la mutación ocurrió en el siglo XIII',
      ],
      answer: 1,
      explanation: 'Se pasa de actas públicas a cartularios monásticos. Hoy se acepta una transformación real pero más lenta y con cronologías muy distintas según regiones.',
    },
    {
      id: 'feudalismo-15', era: 'Edad Media', topicId: 'feudalismo', topic: 'Feudalismo',
      question: '¿Qué papel tuvo la recuperación del derecho romano en el fin del orden feudal?',
      options: [
        'Reforzó la fragmentación jurisdiccional',
        'Dio a los monarcas conceptos —soberanía, ley general, autoridad pública— para combatir la fragmentación',
        'Prohibió la propiedad de la tierra',
        'Eliminó las universidades',
      ],
      answer: 1,
      explanation: 'Los juristas formados en Bolonia y en las universidades se convirtieron en el instrumento del Estado en construcción frente a los poderes señoriales.',
    },
  ],
}
