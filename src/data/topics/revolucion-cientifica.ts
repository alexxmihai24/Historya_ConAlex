import type { TopicModule } from '../types'

export const revolucionCientifica: TopicModule = {
  topic: {
    id: 'revolucion-cientifica',
    era: 'Edad Moderna',
    title: 'La revolución científica',
    years: '1543–1687',
    country: 'Europa',
    description: 'De la caída del cosmos aristotélico a los Principia: cómo cambió lo que Europa consideraba un conocimiento fiable.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '☉',
    color: 'green',
    summary:
      'Entre la publicación póstuma de Copérnico en 1543 y los *Principia* de Newton en 1687, Europa dejó de explicar el mundo mediante fines, cualidades y jerarquías naturales y empezó a explicarlo mediante materia, movimiento y leyes matemáticas. Lo que cambió no fue solo el contenido de las teorías: cambió quién estaba autorizado a decidir qué cuenta como prueba, dónde se producía el conocimiento y cómo se hacía público. Ese es el motivo de que la etiqueta «revolución científica» siga discutiéndose. Hubo continuidad técnica con la astronomía medieval latina e islámica, hubo tanteos, callejones sin salida y mucha alquimia. Y aun así, un europeo culto de 1700 habitaba un universo que uno de 1500 no habría reconocido.',
    keyDates: [
      { date: '1543', event: 'Copérnico publica *De revolutionibus* y Vesalio *De humani corporis fabrica*.' },
      { date: '1572 y 1577', event: 'Tycho Brahe observa una nova y un cometa por encima de la Luna: los cielos cambian.' },
      { date: '1600', event: 'Giordano Bruno es quemado en Roma; Gilbert publica *De magnete*.' },
      { date: '1609–1619', event: 'Kepler formula las tres leyes del movimiento planetario a partir de los datos de Tycho.' },
      { date: '1610', event: '*Sidereus nuncius*: Galileo publica lo que ve con el telescopio.' },
      { date: '1620', event: 'Bacon publica el *Novum Organum* y propone un método inductivo y colectivo.' },
      { date: '1628', event: 'Harvey demuestra la circulación de la sangre en *De motu cordis*.' },
      { date: '1632–1633', event: 'El *Diálogo* de Galileo y su condena por el Santo Oficio.' },
      { date: '1637', event: 'Descartes publica el *Discurso del método* con la *Geometría* como apéndice.' },
      { date: '1660–1666', event: 'Se fundan la Royal Society de Londres y la Académie des Sciences de París.' },
      { date: '1665', event: 'Aparecen las *Philosophical Transactions*, primera revista científica periódica.' },
      { date: '1687', event: 'Newton publica los *Principia*: una sola ley explica la caída de los cuerpos y las órbitas.' },
    ],
    sections: [
      {
        title: 'El cosmos que había que romper',
        body: [
          'El modelo heredado no era una superstición ingenua: era un sistema coherente, empíricamente respaldado y con siglos de refinamiento. La Tierra ocupaba el centro porque los cuerpos pesados caen hacia él; los cielos eran de una materia distinta, incorruptible, y se movían en círculos porque el círculo es el movimiento perfecto y sin principio. La física de Aristóteles explicaba el mundo sublunar por tendencias naturales de los cuatro elementos, y la astronomía de Ptolomeo salvaba los fenómenos con epiciclos, deferentes y ecuantes.',
          'Ese sistema funcionaba. Predecía eclipses con precisión razonable y encajaba con la experiencia inmediata: no notamos que la Tierra se mueva, y si girase, un objeto lanzado hacia arriba debería quedarse atrás. La objeción no era estúpida; refutarla exigió una física nueva, no solo una astronomía nueva.',
          'También tenía problemas conocidos. La acumulación de círculos hacía el modelo inelegante, el ecuante violaba el principio de movimiento circular uniforme que se suponía defender, y el calendario juliano acumulaba un desfase visible que la Iglesia quería corregir. Copérnico trabajó justamente en ese contexto de reforma calendárica.',
          'Conviene además desmontar la idea de un vacío científico anterior. La astronomía de la escuela de Maraga, en el siglo XIII, había desarrollado modelos geométricos —el par de Tusi, los modelos de Ibn al-Shatir— matemáticamente equivalentes a los que Copérnico usó. George Saliba ha documentado la coincidencia y sostiene que hubo transmisión, no invención paralela. La cuestión de la ruta exacta sigue abierta.',
        ].join('\n\n'),
        callout:
          'Los modelos lunares y planetarios de Ibn al-Shatir (siglo XIV) son matemáticamente idénticos a los de Copérnico. La discusión no es si se parecen, sino por qué vía llegaron a Cracovia.',
      },
      {
        title: 'Copérnico, Tycho, Kepler',
        body: [
          '*De revolutionibus orbium coelestium* se publicó en 1543, el año de la muerte de su autor. Copérnico ponía el Sol en el centro para recuperar la pureza del movimiento circular uniforme, no para romper con la tradición: su sistema seguía necesitando círculos auxiliares y no era mucho más preciso que el de Ptolomeo. Andreas Osiander añadió sin permiso un prefacio anónimo que presentaba la hipótesis como un mero recurso de cálculo, lo que amortiguó la reacción durante décadas.',
          'La objeción empírica más seria era la ausencia de paralaje estelar: si la Tierra se mueve, las estrellas deberían parecer desplazarse a lo largo del año. No se observaba. Los copernicanos respondieron que las estrellas están inimaginablemente lejos, lo cual era cierto pero, en su momento, indistinguible de una excusa. La primera medida de paralaje llegó en 1838.',
          'Tycho Brahe aportó lo que faltaba: datos. Desde el observatorio de Uraniborg midió posiciones planetarias con una precisión sin telescopio de alrededor de un minuto de arco, diez veces mejor que la tradición. Sus observaciones de la nova de 1572 y del cometa de 1577 mostraron fenómenos cambiantes más allá de la Luna y por tanto la falsedad de las esferas cristalinas incorruptibles. Su propio modelo era híbrido: los planetas giran alrededor del Sol y el conjunto alrededor de una Tierra inmóvil.',
          'Johannes Kepler heredó esos datos y los tomó en serio hasta el final. Su discrepancia de ocho minutos de arco en la órbita de Marte, que cualquier otro habría atribuido a error de observación, le llevó a abandonar el círculo. En 1609 publicó que las órbitas son elipses con el Sol en un foco y que el radio vector barre áreas iguales en tiempos iguales; en 1619 añadió la relación entre periodo y distancia. Con ello desapareció la necesidad de epiciclos.',
          'Kepler no era un moderno con bata. Buscaba las armonías musicales del cosmos y encajó las órbitas en sólidos platónicos. La revolución científica la hicieron personas cuyas motivaciones nos resultan hoy extrañas, y ese desajuste forma parte del objeto de estudio.',
        ].join('\n\n'),
      },
      {
        title: 'Galileo: el instrumento y el conflicto',
        body: [
          'En 1609 Galileo construyó su propio telescopio y en marzo de 1610 publicó el *Sidereus nuncius*: montañas en la Luna, innumerables estrellas invisibles a simple vista y cuatro satélites girando alrededor de Júpiter, que bautizó como astros mediceos en un movimiento de mecenazgo tan eficaz como calculado. Las fases de Venus, observadas poco después, refutaban el modelo ptolemaico puro, aunque no el de Tycho.',
          'Su aportación decisiva fue física, no astronómica: la ley de caída de los graves, el principio de inercia en su forma inicial y la relatividad del movimiento uniforme, que respondía a la vieja objeción de la piedra que cae al pie del mástil de un barco en marcha. Sin esa física, el heliocentrismo era indefendible.',
          'El conflicto con Roma se ha contado durante siglo y medio como choque entre ciencia y religión, según el esquema de Draper y White del siglo XIX. La investigación moderna lo ha complicado. En 1616 el Santo Oficio declaró la doctrina heliocéntrica formalmente herética y Belarmino advirtió a Galileo; el criterio expresado era que, sin demostración concluyente, no procedía reinterpretar la Escritura. En 1632 Galileo publicó el *Diálogo sobre los dos máximos sistemas* con licencia, pero puso los argumentos del papa Urbano VIII en boca del personaje llamado Simplicio.',
          'Pesaron el género literario elegido, el vulgar toscano en lugar del latín, la ruptura de un patronazgo personal, la presión sobre un papa acusado de blandura en plena guerra de los Treinta Años y la hostilidad de los aristotélicos universitarios, que perdían autoridad. Nada de esto convierte la condena en un episodio menor, pero explica mejor que la fórmula «ciencia contra fe» por qué ocurrió en 1633 y no antes.',
        ].join('\n\n'),
        callout:
          'La condena de 1633 no fue el choque de dos bloques. Fue un conflicto de jurisdicción sobre quién interpreta la Escritura, agravado por el mecenazgo roto y por la guerra en Alemania.',
      },
      {
        title: 'Métodos, instrumentos y hechos públicos',
        body: [
          'Francis Bacon propuso en el *Novum Organum* de 1620 una alternativa al silogismo: recoger historias naturales, ordenar tablas de presencia y ausencia y ascender por inducción a axiomas cada vez más generales. Su modelo era colectivo y cooperativo, y su imagen de la Casa de Salomón inspiraría a los fundadores de la Royal Society. Nunca hizo un descubrimiento relevante, pero definió una institución.',
          'Descartes fue en dirección contraria: certeza deductiva a partir de principios evidentes, mundo reducido a extensión y movimiento, animales como máquinas. El mecanicismo cartesiano expulsó de la naturaleza las cualidades ocultas y las causas finales; su física resultó falsa casi por completo, y aun así fijó el vocabulario en el que se discutiría durante un siglo.',
          'Lo decisivo, en la práctica, fueron los instrumentos y los protocolos. El telescopio, el microscopio de Hooke y Leeuwenhoek, el barómetro de Torricelli, el reloj de péndulo de Huygens y la bomba de vacío de Boyle y Hooke crearon fenómenos que nadie había visto y que exigían una manera nueva de acreditarlos.',
          'Steven Shapin y Simon Schaffer analizaron en 1985 esa operación. La bomba de vacío producía hechos solo si un público cualificado los presenciaba, si la prosa los describía con tal detalle que el lector se convertía en testigo virtual y si se aceptaba discutir sobre efectos observados sin remontarse a causas últimas. Hobbes objetó que ese consenso experimental era frágil y arbitrario y defendió la demostración deductiva. Ganó Boyle, y con él una forma de autoridad basada en el testimonio colectivo.',
          'Las revistas cerraron el círculo. Las *Philosophical Transactions*, desde 1665, fecharon la prioridad, sometieron los textos al juicio de otros miembros y crearon un archivo acumulativo. Con la imprenta, que Elizabeth Eisenstein situó en el centro del proceso, el conocimiento pasó a ser reproducible, comparable y corregible por terceros.',
        ].join('\n\n'),
      },
      {
        title: 'Newton y la síntesis',
        body: [
          'Los *Principia mathematica philosophiae naturalis*, de 1687, resolvieron el problema abierto por Kepler: por qué los planetas siguen esas órbitas. Newton demostró que una fuerza atractiva inversamente proporcional al cuadrado de la distancia produce las tres leyes keplerianas y explica al mismo tiempo la caída de una piedra, las mareas y la trayectoria de los cometas. Una sola física para el cielo y la tierra.',
          'El precio fue conceptual. La gravedad actuaba a distancia, sin contacto ni mecanismo visible, lo que a los cartesianos les pareció una recaída en las cualidades ocultas medievales. Newton respondió en el escolio general de 1713 con la fórmula *hypotheses non fingo*: no fabrico hipótesis sobre la causa de la gravedad, me basta con que sus efectos se deduzcan matemáticamente y se verifiquen. Es un desplazamiento de lo que se considera una explicación satisfactoria.',
          'Su *Óptica*, de 1704, escrita en inglés y organizada como serie de experimentos con prismas y cuestiones abiertas, tuvo tanta influencia como los *Principia* y dio el modelo experimental que siguió el siglo XVIII.',
          'La imagen del primer científico moderno choca con los archivos. John Maynard Keynes, tras comprar en 1936 los manuscritos no publicados, escribió que Newton no fue el primero de la edad de la razón sino el último de los magos: dedicó más páginas a la alquimia y a la cronología bíblica que a la física. La revolución científica no consistió en que unos hombres modernos derrotaran a unos antiguos, sino en que ciertas prácticas —matemáticas, experimentales, públicas— fueron seleccionadas dentro de un conjunto de intereses mucho más amplio.',
        ].join('\n\n'),
      },
      {
        title: '¿Revolución? El debate historiográfico',
        body: [
          'Pierre Duhem sostuvo a comienzos del siglo XX que la ciencia moderna nace en la Edad Media, con la condena parisina de 1277, la teoría del ímpetus de Buridán y los calculadores de Merton College. Alistair Crombie prolongó la línea subrayando la tradición experimental medieval. Desde ahí, 1543 no abre nada: culmina.',
          'Alexandre Koyré defendió lo contrario en 1939: lo ocurrido fue una mutación intelectual, el paso del cosmos cerrado y jerarquizado al universo infinito y homogéneo, y la matematización de lo real. Herbert Butterfield popularizó en 1949 la expresión revolución científica y la calificó de acontecimiento sin igual desde el surgimiento del cristianismo. Thomas Kuhn dio en 1962 el vocabulario que aún usamos —paradigma, ciencia normal, inconmensurabilidad— y con él la idea de que los cambios profundos no son acumulativos.',
          'El eje interno frente a externo cruza esa discusión. Boris Hessen defendió en 1931 que los *Principia* responden a problemas técnicos de la minería, la balística y la navegación. Edgar Zilsel atribuyó el nacimiento del método a la unión entre el saber manual de artesanos, ingenieros y navegantes y la formación matemática de los universitarios. Robert Merton correlacionó en 1938 puritanismo y actividad científica en la Inglaterra del XVII. Koyré replicó que las ideas cambian por su propia lógica. Hoy casi nadie sostiene ninguna de las dos posiciones en estado puro.',
          'La formulación más radical la dio Steven Shapin en 1996 al abrir su libro afirmando que no existió tal cosa como la revolución científica, y que sobre eso trataba precisamente el libro. Su argumento: no hubo un método único, ni un momento único, ni una comunidad unificada, sino prácticas heterogéneas agrupadas después por conveniencia narrativa.',
          'El estado actual es un equilibrio. Se conserva la etiqueta como periodización útil, se rechaza el relato heroico de genios que derrotan a la superstición, se subraya la continuidad técnica con las tradiciones latina e islámica y se admite el resultado: hacia 1700 había cambiado de manera duradera qué se aceptaba como prueba, quién podía producirla y dónde se hacía pública.',
        ].join('\n\n'),
        callout:
          'Shapin abre su libro con «no existió tal cosa como la revolución científica, y este libro trata de ella». La provocación resume el consenso: la etiqueta sirve como periodización, no como explicación.',
      },
    ],
    concepts: [
      { term: 'Ecuante', definition: 'Punto ptolemaico desde el que el movimiento parece uniforme. Violaba el principio circular que decía defender: uno de los motivos de Copérnico.' },
      { term: 'Paralaje estelar', definition: 'Desplazamiento aparente de las estrellas por el movimiento terrestre. Su ausencia fue la objeción más fuerte al heliocentrismo hasta 1838.' },
      { term: 'Escuela de Maraga', definition: 'Tradición astronómica islámica de los siglos XIII-XIV. Sus modelos, como el par de Tusi, son equivalentes a los usados por Copérnico.' },
      { term: 'Órbita elíptica', definition: 'Primera ley de Kepler (1609): los planetas describen elipses con el Sol en uno de los focos. Elimina la necesidad de epiciclos.' },
      { term: 'Ley de áreas', definition: 'Segunda ley de Kepler: el radio vector barre áreas iguales en tiempos iguales. Los planetas no se mueven a velocidad constante.' },
      { term: 'Principio de inercia', definition: 'Un cuerpo mantiene su movimiento uniforme si nada lo altera. Sin él, la objeción de la piedra y el mástil hacía indefendible el heliocentrismo.' },
      { term: 'Mecanicismo', definition: 'Explicación del mundo natural solo por materia, figura y movimiento, sin causas finales ni cualidades ocultas. Programa cartesiano.' },
      { term: 'Inducción baconiana', definition: 'Ascenso desde historias naturales y tablas de presencia y ausencia hasta axiomas generales. Modelo colectivo, no individual.' },
      { term: 'Testigo virtual', definition: 'Concepto de Shapin y Schaffer: la prosa experimental detallada convierte al lector ausente en testigo del hecho.' },
      { term: 'Hypotheses non fingo', definition: 'Fórmula de Newton (1713): describe matemáticamente los efectos de la gravedad sin postular su causa. Redefine qué es explicar.' },
      { term: 'Philosophical Transactions', definition: 'Revista de la Royal Society desde 1665. Fija prioridad, somete los textos a juicio de pares y crea archivo acumulativo.' },
      { term: 'Tesis de Zilsel', definition: 'El método experimental nace de la unión entre el saber manual de artesanos e ingenieros y la formación matemática universitaria.' },
      { term: 'Tesis de Merton', definition: 'Correlación entre ética puritana y actividad científica en la Inglaterra del siglo XVII. Muy discutida en su mecanismo causal.' },
      { term: 'Paradigma', definition: 'En Kuhn (1962), el conjunto de supuestos, problemas y modelos que define la ciencia normal. Los cambios de paradigma no son acumulativos.' },
    ],
    debates: [
      {
        question: '¿Ruptura revolucionaria o continuidad con la Edad Media?',
        positions: [
          {
            school: 'Continuidad (Duhem, Crombie)',
            argument:
              'La condena de 1277, la teoría del ímpetus, los calculadores de Merton College y la óptica medieval contienen ya lo esencial: 1543 culmina un proceso largo en lugar de abrirlo.',
          },
          {
            school: 'Mutación intelectual (Koyré, Butterfield, Kuhn)',
            argument:
              'Lo ocurrido fue un cambio de mundo: del cosmos cerrado y jerárquico al universo infinito y homogéneo, con matematización de lo real e inconmensurabilidad entre marcos.',
          },
          {
            school: 'Disolución (Shapin, 1996)',
            argument:
              'No hubo método único, ni momento único, ni comunidad unificada. La revolución científica es una agrupación retrospectiva de prácticas heterogéneas.',
          },
        ],
        state:
          'Se conserva la etiqueta como periodización útil y se descarta el relato heroico. Hay acuerdo en la continuidad técnica con las tradiciones latina e islámica y en que hacia 1700 había cambiado de forma duradera qué contaba como prueba.',
      },
      {
        question: '¿Causas internas o sociales?',
        positions: [
          {
            school: 'Externalismo (Hessen 1931, Zilsel 1942, Merton 1938)',
            argument:
              'Los problemas venían de la minería, la balística y la navegación; el método nació del contacto entre artesanos y universitarios, y ciertas confesiones favorecieron la práctica científica.',
          },
          {
            school: 'Internalismo (Koyré)',
            argument:
              'Las ideas cambian por su propia lógica. Ni la técnica ni la religión explican por qué se abandonó el círculo perfecto o se matematizó el movimiento.',
          },
        ],
        state:
          'Nadie sostiene ya ninguna posición pura. Se estudian conjuntamente las prácticas materiales, el mecenazgo, la circulación impresa y la argumentación teórica, sin reducir unas a otras.',
      },
      {
        question: 'El caso Galileo: ¿ciencia contra religión?',
        positions: [
          {
            school: 'Tesis del conflicto (Draper 1874, White 1896)',
            argument:
              'La condena de 1633 ilustra la oposición estructural entre la investigación libre y una autoridad religiosa que defiende el dogma frente a la evidencia.',
          },
          {
            school: 'Lectura contextual (Blackwell, Fantoli, Biagioli)',
            argument:
              'Pesaron la jurisdicción sobre la interpretación de la Escritura, el mecenazgo roto con Urbano VIII, la elección del vulgar toscano, la guerra de los Treinta Años y los intereses de los aristotélicos universitarios.',
          },
        ],
        state:
          'La tesis del conflicto está abandonada como marco general. La lectura contextual predomina, sin que ello reste gravedad a la condena ni convierta el episodio en un simple malentendido personal.',
      },
    ],
    sources: [
      { author: 'Nicolás Copérnico', title: 'De revolutionibus orbium coelestium', year: '1543', kind: 'primaria', note: 'Con el prefacio anónimo de Osiander que presenta el heliocentrismo como recurso de cálculo.' },
      { author: 'Andrés Vesalio', title: 'De humani corporis fabrica', year: '1543', kind: 'primaria', note: 'Anatomía basada en disección propia frente a la autoridad de Galeno.' },
      { author: 'William Gilbert', title: 'De magnete', year: '1600', kind: 'primaria', note: 'La Tierra como imán. Trabajo experimental temprano y muy citado por Galileo y Kepler.' },
      { author: 'Johannes Kepler', title: 'Astronomia nova', year: '1609', kind: 'primaria', note: 'Órbitas elípticas y ley de áreas, deducidas de los datos de Marte de Tycho Brahe.' },
      { author: 'Galileo Galilei', title: 'Sidereus nuncius', year: '1610', kind: 'primaria', note: 'Montañas lunares y satélites de Júpiter, dedicados a los Médici como operación de mecenazgo.' },
      { author: 'Francis Bacon', title: 'Novum Organum', year: '1620', kind: 'primaria', note: 'Método inductivo, crítica de los ídolos y programa de investigación colectiva.' },
      { author: 'William Harvey', title: 'De motu cordis', year: '1628', kind: 'primaria', note: 'Circulación de la sangre demostrada con medición del volumen expulsado por el corazón.' },
      { author: 'Galileo Galilei', title: 'Diálogo sobre los dos máximos sistemas del mundo', year: '1632', kind: 'primaria', note: 'En toscano y con licencia. El argumento de Urbano VIII lo pronuncia el personaje Simplicio.' },
      { author: 'Santo Oficio', title: 'Sentencia y abjuración de Galileo', year: '1633', kind: 'primaria', note: 'Documento central para reconstruir los cargos reales y el papel del precepto de 1616.' },
      { author: 'René Descartes', title: 'Discurso del método', year: '1637', kind: 'primaria', note: 'Duda metódica y mecanicismo. Incluye la *Geometría*, que une álgebra y geometría.' },
      { author: 'Robert Boyle', title: 'New Experiments Physico-Mechanical', year: '1660', kind: 'primaria', note: 'Experimentos con la bomba de vacío y protocolo de testimonio público del hecho.' },
      { author: 'Robert Hooke', title: 'Micrographia', year: '1665', kind: 'primaria', note: 'El microscopio como productor de fenómenos nuevos. Acuña el término célula.' },
      { author: 'Isaac Newton', title: 'Philosophiae naturalis principia mathematica', year: '1687', kind: 'primaria', note: 'Gravitación universal: una sola ley para la caída de los cuerpos y las órbitas planetarias.' },
      { author: 'Isaac Newton', title: 'Óptica', year: '1704', kind: 'primaria', note: 'En inglés y organizada como serie de experimentos. Modelo para la ciencia experimental del XVIII.' },
      { author: 'Boris Hessen', title: 'Las raíces socioeconómicas de la mecánica de Newton', year: '1931', kind: 'estudio', note: 'Manifiesto externalista presentado en Londres en 1931.' },
      { author: 'Robert K. Merton', title: 'Ciencia, tecnología y sociedad en la Inglaterra del siglo XVII', year: '1938', kind: 'estudio', note: 'Correlación entre puritanismo y práctica científica.' },
      { author: 'Alexandre Koyré', title: 'Estudios galileanos', year: '1939', kind: 'estudio', note: 'La revolución como mutación intelectual y matematización de lo real.' },
      { author: 'Herbert Butterfield', title: 'Los orígenes de la ciencia moderna', year: '1949', kind: 'estudio', note: 'Populariza la expresión «revolución científica» y su valoración máxima.' },
      { author: 'Thomas S. Kuhn', title: 'La estructura de las revoluciones científicas', year: '1962', kind: 'estudio', note: 'Paradigma, ciencia normal e inconmensurabilidad. Cambia el vocabulario de toda la disciplina.' },
      { author: 'Elizabeth Eisenstein', title: 'La imprenta como agente de cambio', year: '1979', kind: 'estudio', note: 'Fijeza tipográfica, reproducción de tablas y láminas, acumulación y corrección pública.' },
      { author: 'Steven Shapin y Simon Schaffer', title: 'El Leviathan y la bomba de vacío', year: '1985', kind: 'estudio', note: 'Boyle contra Hobbes: cómo se fabrica un hecho experimental y quién puede atestiguarlo.' },
      { author: 'Steven Shapin', title: 'La revolución científica', year: '1996', kind: 'estudio', note: 'Niega la existencia de un método y un momento únicos y reconstruye prácticas heterogéneas.' },
      { author: 'George Saliba', title: 'Islamic Science and the Making of the European Renaissance', year: '2007', kind: 'estudio', note: 'Documenta la equivalencia entre los modelos de Maraga y los de Copérnico.' },
    ],
  },
  questions: [
    {
      id: 'revolucion-cientifica-1', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Cuál era la objeción empírica más seria contra el heliocentrismo en el siglo XVI?',
      options: [
        'Que las mareas no podían explicarse sin una Tierra inmóvil',
        'Que no se observaba paralaje estelar: las estrellas no parecían desplazarse a lo largo del año',
        'Que el modelo de Copérnico no permitía predecir eclipses',
        'Que contradecía las observaciones de Tycho Brahe sobre los cometas',
      ],
      answer: 1,
      explanation: 'La respuesta copernicana —las estrellas están lejísimos— era cierta, pero indistinguible entonces de una excusa. El paralaje no se midió hasta 1838.',
    },
    {
      id: 'revolucion-cientifica-2', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué hizo Andreas Osiander con el libro de Copérnico?',
      options: [
        'Retrasó su publicación hasta después del Concilio de Trento',
        'Añadió sin permiso un prefacio anónimo que presentaba el heliocentrismo como simple recurso de cálculo',
        'Tradujo la obra al alemán para el gran público',
        'Suprimió los capítulos dedicados al movimiento de la Tierra',
      ],
      answer: 1,
      explanation: 'El prefacio amortiguó la reacción durante décadas. La obra no entró en el Índice hasta 1616.',
    },
    {
      id: 'revolucion-cientifica-3', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué demostraron las observaciones de Tycho Brahe de la nova de 1572 y el cometa de 1577?',
      options: [
        'Que la Tierra gira alrededor del Sol',
        'Que había fenómenos cambiantes más allá de la Luna, contra la incorruptibilidad de los cielos',
        'Que las órbitas planetarias son elípticas',
        'Que existen satélites alrededor de Júpiter',
      ],
      answer: 1,
      explanation: 'Cayeron las esferas cristalinas incorruptibles. Tycho, sin embargo, mantuvo un modelo híbrido con la Tierra inmóvil en el centro.',
    },
    {
      id: 'revolucion-cientifica-4', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué llevó a Kepler a abandonar la órbita circular?',
      options: [
        'Una discrepancia de ocho minutos de arco en los datos de Marte que se negó a atribuir a error de observación',
        'La lectura del *Sidereus nuncius* de Galileo',
        'La medición del paralaje estelar',
        'El cálculo del periodo orbital de los satélites de Júpiter',
      ],
      answer: 0,
      explanation: 'La precisión de Tycho, de alrededor de un minuto de arco, hacía inaceptable ese desajuste. Tomarse los datos en serio produjo la elipse.',
    },
    {
      id: 'revolucion-cientifica-5', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Por qué la aportación física de Galileo era imprescindible para el heliocentrismo?',
      options: [
        'Porque permitía calcular las órbitas con mayor precisión que Kepler',
        'Porque el principio de inercia y la relatividad del movimiento uniforme respondían a la objeción de que un cuerpo lanzado quedaría atrás',
        'Porque demostraba matemáticamente la gravitación universal',
        'Porque probaba la existencia del vacío',
      ],
      answer: 1,
      explanation: 'Sin física nueva, el heliocentrismo chocaba con la experiencia cotidiana. La astronomía sola no bastaba.',
    },
    {
      id: 'revolucion-cientifica-6', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué refutaban las fases de Venus observadas por Galileo?',
      options: [
        'El sistema de Tycho Brahe',
        'El modelo ptolemaico puro, aunque no el modelo híbrido de Tycho',
        'Las leyes de Kepler',
        'La teoría del ímpetus medieval',
      ],
      answer: 1,
      explanation: 'Precisión importante: la evidencia disponible en 1613 no permitía elegir entre Copérnico y Tycho, solo descartar a Ptolomeo.',
    },
    {
      id: 'revolucion-cientifica-7', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué factores, además del contenido astronómico, explican la condena de Galileo en 1633?',
      options: [
        'Únicamente la literalidad bíblica defendida por el Santo Oficio',
        'El género dialogado y el uso del toscano, el mecenazgo roto con Urbano VIII, la presión de la guerra y los intereses de los aristotélicos universitarios',
        'Su negativa a publicar en la Royal Society',
        'La prohibición general de usar telescopios en los Estados Pontificios',
      ],
      answer: 1,
      explanation: 'Poner el argumento del papa en boca de Simplicio fue un error político. La tesis del conflicto entre ciencia y fe está abandonada como marco general.',
    },
    {
      id: 'revolucion-cientifica-8', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué proponía el método de Bacon en el *Novum Organum*?',
      options: [
        'Deducir la física a partir de principios evidentes por sí mismos',
        'Recoger historias naturales y ascender por inducción a axiomas generales, mediante trabajo colectivo',
        'Reducir toda la naturaleza a extensión y movimiento',
        'Someter toda hipótesis a experimento crucial matemático',
      ],
      answer: 1,
      explanation: 'Bacon no hizo descubrimientos, pero su Casa de Salomón inspiró la Royal Society. Definió una institución más que una técnica.',
    },
    {
      id: 'revolucion-cientifica-9', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué es un «testigo virtual» según Shapin y Schaffer?',
      options: [
        'Un miembro de la Royal Society que asiste al experimento sin intervenir',
        'El lector al que la prosa experimental, minuciosamente detallada, convierte en testigo de un hecho al que no asistió',
        'Un instrumento que registra automáticamente los resultados',
        'Un aristotélico invitado a refutar el experimento',
      ],
      answer: 1,
      explanation: 'La autoridad del hecho experimental se apoya en el testimonio colectivo. Hobbes objetó que ese consenso era frágil y prefería la demostración.',
    },
    {
      id: 'revolucion-cientifica-10', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué función cumplieron las *Philosophical Transactions* desde 1665?',
      options: [
        'Sustituir a los libros como único formato aceptado',
        'Fechar la prioridad de los hallazgos, someter los textos al juicio de otros miembros y crear un archivo acumulativo',
        'Financiar los experimentos de la Royal Society',
        'Traducir al inglés las obras latinas del continente',
      ],
      answer: 1,
      explanation: 'Junto con la imprenta, hicieron el conocimiento reproducible, comparable y corregible por terceros.',
    },
    {
      id: 'revolucion-cientifica-11', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué unificaron los *Principia* de 1687?',
      options: [
        'La óptica y la acústica bajo una teoría ondulatoria',
        'La caída de los cuerpos en la Tierra y las órbitas planetarias bajo una misma ley de atracción inversa al cuadrado de la distancia',
        'La química y la alquimia en una sola disciplina',
        'La astronomía de Ptolomeo y la de Copérnico en un modelo mixto',
      ],
      answer: 1,
      explanation: 'De esa ley se deducen las tres leyes de Kepler, las mareas y las trayectorias cometarias. Una sola física para el cielo y la tierra.',
    },
    {
      id: 'revolucion-cientifica-12', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué quiso decir Newton con *hypotheses non fingo*?',
      options: [
        'Que rechazaba el uso de las matemáticas en la filosofía natural',
        'Que no proponía una causa para la gravedad y se limitaba a deducir y verificar sus efectos',
        'Que negaba la existencia de la atracción a distancia',
        'Que sus resultados no admitían discusión',
      ],
      answer: 1,
      explanation: 'A los cartesianos la acción a distancia les pareció una cualidad oculta. Newton desplazó lo que se considera una explicación satisfactoria.',
    },
    {
      id: 'revolucion-cientifica-13', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué encontró Keynes al estudiar los manuscritos inéditos de Newton?',
      options: [
        'Una demostración temprana de la relatividad',
        'Más páginas dedicadas a la alquimia y a la cronología bíblica que a la física',
        'La prueba de que no escribió los *Principia*',
        'Correspondencia inédita con Descartes',
      ],
      answer: 1,
      explanation: 'De ahí su frase: no el primero de la edad de la razón, sino el último de los magos. La modernidad de la ciencia se seleccionó dentro de intereses mucho más amplios.',
    },
    {
      id: 'revolucion-cientifica-14', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué sostiene la tesis de Zilsel sobre el origen del método experimental?',
      options: [
        'Que procede íntegramente de las universidades escolásticas',
        'Que nace del contacto entre el saber manual de artesanos, ingenieros y navegantes y la formación matemática universitaria',
        'Que es una consecuencia directa de la Reforma protestante',
        'Que fue importado del mundo islámico junto con la astronomía',
      ],
      answer: 1,
      explanation: 'Es una posición externalista, como la de Hessen. Koyré replicó desde el internalismo. Hoy no se sostiene ninguna en estado puro.',
    },
    {
      id: 'revolucion-cientifica-15', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Qué documenta George Saliba sobre la astronomía islámica?',
      options: [
        'Que Copérnico tradujo directamente los textos de Maraga al latín',
        'Que los modelos de la escuela de Maraga, como el par de Tusi, son matemáticamente equivalentes a los que empleó Copérnico',
        'Que el heliocentrismo se formuló en Bagdad en el siglo IX',
        'Que la astronomía islámica rechazó el sistema ptolemaico en bloque',
      ],
      answer: 1,
      explanation: 'La coincidencia técnica está establecida y sugiere transmisión, no invención paralela. La ruta exacta hasta Cracovia sigue discutiéndose.',
    },
    {
      id: 'revolucion-cientifica-16', era: 'Edad Moderna', topicId: 'revolucion-cientifica', topic: 'Revolución científica',
      question: '¿Cuál es el estado actual del debate sobre la etiqueta «revolución científica»?',
      options: [
        'Se ha abandonado por completo en favor de «ciencia medieval tardía»',
        'Se conserva como periodización útil, se rechaza el relato heroico y se admite que hacia 1700 había cambiado qué contaba como prueba y quién podía producirla',
        'Se ha ampliado hasta abarcar de 1200 a 1900',
        'Se reserva exclusivamente para la obra de Newton',
      ],
      answer: 1,
      explanation: 'Equilibrio entre Koyré y Shapin: la etiqueta sirve para ordenar el relato, no para explicar por sí sola lo ocurrido.',
    },
  ],
}
