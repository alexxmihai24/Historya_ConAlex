import type { TopicModule } from '../types.ts'

export const segundaGuerra: TopicModule = {
  topic: {
    id: 'segunda-guerra',
    era: 'Edad Contemporánea',
    title: 'Segunda Guerra Mundial y Holocausto',
    years: '1939–1945',
    country: 'Mundo',
    description: 'La guerra más letal de la historia y el genocidio que se cometió dentro de ella: dos procesos entrelazados que hay que estudiar juntos y distinguir con precisión.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '✠',
    color: 'blue',
    summary:
      'Entre 1939 y 1945 murieron entre cincuenta y setenta millones de personas, y por primera vez en la historia europea la mayoría fueron civiles. La guerra tuvo dos naturalezas superpuestas. Fue un conflicto entre Estados por el dominio de Europa y del Pacífico, decidido en última instancia por la capacidad industrial y por el frente oriental, donde se libró en torno al ochenta por ciento del combate terrestre contra Alemania. Y fue una guerra de exterminio con un programa ideológico propio, que en el este planificó el hambre de decenas de millones de eslavos y ejecutó el asesinato sistemático de casi seis millones de judíos europeos. Separar ambos planos sin desconectarlos es el problema central del tema: el Holocausto no fue un daño colateral de la guerra, pero tampoco habría podido ejecutarse sin ella.',
    keyDates: [
      { date: '1 de septiembre de 1939', event: 'Invasión alemana de Polonia. Dos días después Gran Bretaña y Francia declaran la guerra.' },
      { date: 'Mayo y junio de 1940', event: 'Campaña del oeste: derrota francesa en seis semanas, evacuación de Dunkerque y armisticio con el régimen de Vichy.' },
      { date: 'Julio a octubre de 1940', event: 'Batalla de Inglaterra. Primera derrota estratégica alemana y aplazamiento indefinido de la invasión.' },
      { date: '22 de junio de 1941', event: 'Operación Barbarroja: tres millones de soldados invaden la URSS. La guerra de exterminio empieza aquí.' },
      { date: '7 de diciembre de 1941', event: 'Ataque japonés a Pearl Harbor. Estados Unidos entra en la guerra y Alemania le declara la guerra cuatro días después.' },
      { date: '20 de enero de 1942', event: 'Conferencia de Wannsee: coordinación administrativa de la Solución Final ya en marcha.' },
      { date: 'Junio de 1942', event: 'Midway. La marina japonesa pierde cuatro portaaviones y la iniciativa en el Pacífico.' },
      { date: 'Noviembre de 1942 a febrero de 1943', event: 'Stalingrado: cerco y rendición del Sexto Ejército alemán. Punto de inflexión del frente oriental.' },
      { date: 'Julio de 1943', event: 'Kursk, la mayor batalla acorazada de la historia, y desembarco aliado en Sicilia.' },
      { date: '6 de junio de 1944', event: 'Desembarco de Normandía. Apertura del frente occidental en Europa.' },
      { date: 'Enero de 1945', event: 'Liberación de Auschwitz por el Ejército Rojo.' },
      { date: '8 de mayo de 1945', event: 'Capitulación incondicional de Alemania.' },
      { date: '6 y 9 de agosto de 1945', event: 'Bombas atómicas sobre Hiroshima y Nagasaki. Japón capitula el 15 de agosto.' },
    ],
    sections: [
      {
        title: 'De Polonia a Barbarroja',
        body: [
          'La invasión de Polonia en septiembre de 1939 estrenó una forma de combate que la prensa bautizó como guerra relámpago: concentración de blindados en un punto, apoyo aéreo táctico y ruptura en profundidad en lugar del frente continuo de 1914. La etiqueta ha envejecido mal. Los historiadores militares han mostrado que no existía una doctrina llamada Blitzkrieg en los manuales alemanes, que buena parte del ejército seguía moviéndose a pie y con tracción animal, y que el éxito de 1939 y 1940 dependió tanto de los errores del adversario como de la innovación propia.',
          'La caída de Francia en seis semanas fue el acontecimiento que más desconcertó a los contemporáneos. Francia tenía más carros que Alemania y de mejor blindaje, pero los tenía repartidos por las divisiones de infantería, con un mando lento y una doctrina defensiva heredada de la Gran Guerra. El golpe por las Ardenas partió el dispositivo aliado en dos y produjo un colapso de mando antes que una derrota material. Marc Bloch, historiador y oficial, lo escribió sobre el terreno en un texto que sigue siendo la mejor autopsia del desastre.',
          'Gran Bretaña quedó sola y no cedió. La batalla de Inglaterra, en el verano de 1940, fue la primera derrota estratégica alemana: la Luftwaffe no consiguió la superioridad aérea necesaria para invadir, y el sistema británico de radar y control de caza demostró que la defensa aérea integrada podía compensar la inferioridad numérica. El bombardeo de ciudades que siguió, el Blitz, mató a más de cuarenta mil civiles sin quebrar la moral, un dato que los planificadores aliados no aplicaron después a sus propias campañas.',
          'La decisión de invadir la Unión Soviética en junio de 1941 no fue un giro oportunista sino el objetivo declarado desde Mi lucha: espacio vital en el este, destrucción del bolchevismo y explotación de los recursos agrarios de Ucrania. El Plan del Hambre elaborado por Backe preveía desviar los alimentos ucranianos a Alemania asumiendo la muerte por inanición de decenas de millones de personas. La Orden de los Comisarios ordenaba fusilar a los comisarios políticos capturados, es decir, cancelaba por escrito el derecho de la guerra antes del primer disparo.',
          'Barbarroja fue el mayor despliegue militar de la historia: unos tres millones de soldados del Eje en un frente de tres mil kilómetros. Los primeros meses produjeron cercos gigantescos y millones de prisioneros soviéticos, de los cuales más de tres millones murieron de hambre y frío en cautiverio. Pero la ofensiva se detuvo ante Moscú en diciembre, con las líneas de suministro rotas, y la contraofensiva soviética demostró que la guerra corta que Alemania necesitaba ya no era posible.',
        ].join('\n\n'),
        callout:
          'El Plan del Hambre y la Orden de los Comisarios son de mayo y junio de 1941, anteriores a la invasión. La guerra en el este fue criminal por diseño, no por degradación posterior.',
      },
      {
        title: 'La guerra se hace mundial',
        body: [
          'El Pacífico tenía su propia cronología. Japón llevaba en guerra desde 1937 en China, donde la masacre de Nankín había mostrado ya la naturaleza de su ocupación, y desde 1940 avanzaba sobre Indochina. El embargo estadounidense de petróleo y chatarra en 1941 puso a Tokio ante la disyuntiva de retirarse de China o buscar los recursos del sudeste asiático por la fuerza. Pearl Harbor, en diciembre de 1941, fue un éxito táctico y un desastre estratégico: no alcanzó a los portaaviones y convirtió a Estados Unidos en beligerante.',
          'La declaración de guerra alemana a Estados Unidos cuatro días después es una de las decisiones más difíciles de explicar del conflicto y selló la formación de la Gran Alianza. Estados Unidos, Gran Bretaña y la Unión Soviética eran socios incómodos, unidos solo por un enemigo común, y su cooperación se sostuvo sobre dos instrumentos: la Ley de Préstamo y Arriendo, que abasteció a británicos y soviéticos con camiones, aviones, alimentos y material industrial, y una serie de conferencias que fueron repartiendo el esfuerzo y, de paso, la posguerra.',
          'La batalla del Atlántico fue la campaña más larga de la guerra y la única que, en palabras de Churchill, le quitó el sueño. La supervivencia británica dependía de los convoyes, y la guerra submarina alemana estuvo cerca de cortarlos en 1942. Se ganó con una combinación de escoltas, aviación de largo alcance, radar centimétrico y, sobre todo, la lectura sistemática de las comunicaciones cifradas alemanas, el material Ultra obtenido en Bletchley Park a partir del trabajo previo de los criptógrafos polacos.',
          'La superioridad material aliada terminó siendo abrumadora, pero no era automática: hubo que organizarla. Richard Overy ha subrayado que la victoria dependió de decisiones de gestión industrial, de una movilización femenina masiva y de la capacidad para convertir recursos en armas útiles y transportadas al lugar correcto. Estados Unidos produjo casi trescientos mil aviones; la URSS trasladó al este de los Urales más de mil quinientas fábricas enteras en 1941 y siguió fabricando carros T-34 mientras retrocedía.',
          'La guerra en el Pacífico tuvo un carácter propio, con saltos de isla en isla, combate anfibio y una brutalidad recíproca alimentada por el racismo de ambos bandos, que John Dower documentó en un libro clásico. Midway, en junio de 1942, invirtió la relación de fuerzas navales; después vinieron Guadalcanal, Filipinas y una campaña de submarinos estadounidense que estranguló el tráfico marítimo japonés y dejó a la isla sin petróleo antes de cualquier bombardeo.',
        ].join('\n\n'),
      },
      {
        title: 'El frente oriental decide la guerra en Europa',
        body: [
          'Entre 1941 y 1945 la Wehrmacht mantuvo en el este entre dos tercios y tres cuartas partes de sus divisiones, y allí sufrió alrededor del ochenta por ciento de sus bajas mortales. Cualquier relato que sitúe el centro de gravedad de la guerra europea en Normandía falsea la escala. La Unión Soviética pagó ese papel con unos veintisiete millones de muertos, en su mayoría civiles, y con la destrucción sistemática de sus regiones occidentales.',
          'Stalingrado, entre noviembre de 1942 y febrero de 1943, combinó una batalla urbana de desgaste con una maniobra soviética de doble envolvimiento que encerró al Sexto Ejército. La rendición de noventa mil soldados, de los que apenas volvieron unos miles, tuvo un efecto moral inmenso en toda Europa. Kursk, en julio de 1943, fue la última ofensiva estratégica alemana en el este: la defensa soviética estaba preparada, informada y escalonada en profundidad, y a partir de ahí la iniciativa no cambió de manos.',
          'La operación Bagration, en el verano de 1944, destruyó el Grupo de Ejércitos Centro y fue en términos militares un desastre alemán mayor que Stalingrado, aunque sea mucho menos conocida en Occidente. Coincidió deliberadamente con Normandía y demostró la madurez del arte operativo soviético, con engaño estratégico, concentración masiva de artillería y explotación en profundidad. David Glantz ha reconstruido esas campañas a partir de archivos soviéticos y ha corregido buena parte del relato basado únicamente en las memorias de generales alemanes.',
          'Esas memorias, escritas en la posguerra por oficiales que buscaban exculparse, crearon el mito de una Wehrmacht limpia que habría combatido con profesionalidad al margen de los crímenes de las SS. La investigación desde los años ochenta lo ha desmontado: el ejército regular participó en el hambre planificada, en el trato criminal a los prisioneros, en las represalias contra población civil y, en muchas zonas, en el apoyo logístico a los fusilamientos masivos.',
          'La aportación occidental fue decisiva de otras formas: la campaña de bombardeo obligó a Alemania a desviar cañones, munición y cazas a la defensa del territorio, el Mediterráneo abrió un frente que sacó a Italia de la guerra en 1943, y Préstamo y Arriendo dio al Ejército Rojo la movilidad que sus propias fábricas no producían. Discutir cuál fue el factor decisivo tiene menos sentido que entender que la coalición funcionó como un reparto de tareas.',
        ].join('\n\n'),
        callout:
          'Por cada soldado alemán muerto en el oeste murieron cerca de cuatro en el este. La cifra no reparte méritos morales, pero fija dónde se decidió militarmente la guerra europea.',
      },
      {
        title: 'Ocupación, colaboración y resistencia',
        body: [
          'La Europa ocupada no tuvo un régimen único. Dinamarca conservó gobierno y parlamento durante años; Francia quedó dividida entre ocupación directa y un Estado propio en Vichy que legisló por iniciativa propia contra los judíos antes de que se lo pidieran; Polonia y la Unión Soviética occidental fueron sometidas a una ocupación de exterminio, con la eliminación deliberada de las élites polacas desde 1939. La escala de la violencia dependía directamente del lugar que el racismo nazi asignaba a cada población.',
          'La colaboración fue mucho más extendida de lo que la memoria nacional de posguerra admitió durante décadas. Hubo colaboración de Estado, de administración y de vecinos, y sin ella la maquinaria de ocupación no habría podido funcionar con las tropas disponibles. Robert Paxton mostró en 1972, trabajando con archivos alemanes, que Vichy no fue un escudo protector sino un proyecto político con agenda propia, y su libro obligó a reescribir el relato francés de la guerra.',
          'La resistencia fue real, minoritaria y muy diversa. Incluyó desde redes de evasión y prensa clandestina hasta guerrillas capaces de inmovilizar divisiones enteras, como los partisanos yugoslavos de Tito o los soviéticos en Bielorrusia. Fue casi siempre política además de patriótica, y en varios países la lucha contra el ocupante y la guerra civil interna se solaparon, con consecuencias que llegaron hasta la posguerra griega o yugoslava.',
          'La represalia contra civiles fue la respuesta sistemática: Lídice, Oradour, las Fosas Ardeatinas y centenares de aldeas quemadas en Bielorrusia y Ucrania. En el este la lógica represiva se fundió con la ideológica, de modo que la lucha antipartisana funcionó también como cobertura para matanzas de judíos y de población eslava sin relación con la resistencia.',
          'Hubo, por último, resistencia dentro de Alemania, mucho más débil pero no inexistente: la Rosa Blanca de los hermanos Scholl, redes socialistas y comunistas, sectores eclesiásticos que denunciaron la eutanasia forzosa, y el atentado de julio de 1944 de un grupo de oficiales conservadores que llegó tarde y por motivos en parte distintos de los de la resistencia civil.',
        ].join('\n\n'),
      },
      {
        title: 'El Holocausto',
        body: [
          'El asesinato de casi seis millones de judíos europeos no fue un episodio de la guerra sino un programa con su propia lógica, ejecutado bajo la cobertura de la guerra. Su preparación llevaba años: exclusión legal desde 1933, leyes de Núremberg en 1935, expolio y violencia abierta en la Noche de los Cristales Rotos de 1938, y guetos en Polonia desde 1939, con hambre y epidemias que ya mataban por sí solas.',
          'El paso al asesinato de masas se produjo con Barbarroja. Los Einsatzgruppen, unidades móviles de las SS y la policía apoyadas por batallones de policía del orden y por auxiliares locales, fusilaron a más de un millón y medio de personas en fosas, aldea por aldea, entre 1941 y 1942. Babi Yar, con más de treinta y tres mil asesinados en dos días junto a Kiev, es el caso más conocido de un método que Timothy Snyder ha llamado el Holocausto de las balas y que precede a las cámaras de gas.',
          'Los centros de exterminio de la operación Reinhard, Belzec, Sobibor y Treblinka, funcionaron en 1942 y 1943 con un único propósito: matar a los deportados a su llegada. Auschwitz-Birkenau combinó campo de concentración, complejo industrial de trabajo esclavo y centro de exterminio, y por eso se convirtió en el símbolo del conjunto, aunque en Treblinka fueran asesinadas casi tantas personas en mucho menos tiempo. La conferencia de Wannsee de enero de 1942 no decidió el genocidio: coordinó administrativamente algo que ya estaba en marcha.',
          'La discusión sobre cómo se llegó a esa decisión ha estructurado la historiografía. Los intencionalistas subrayaban un plan deducible de la ideología y de las declaraciones de Hitler; los funcionalistas describieron una radicalización acumulativa producida por la competencia entre organismos, los fracasos de los planes de deportación y las iniciativas de los mandos sobre el terreno. Christopher Browning propuso una síntesis hoy mayoritaria: decisiones tomadas entre el verano y el otoño de 1941, en la euforia de la victoria esperada en el este, con impulso desde arriba y propuestas desde abajo.',
          'La segunda gran discusión es sobre los ejecutores. Browning estudió un batallón de policía de Hamburgo formado por hombres de mediana edad sin fanatismo especial y concluyó que la presión del grupo, la obediencia y la deshumanización bastaron para convertirlos en asesinos, con la posibilidad real de negarse. Daniel Goldhagen respondió que lo decisivo fue un antisemitismo eliminacionista específicamente alemán. La crítica académica ha desmontado en gran medida la segunda tesis, pero el debate fijó una pregunta que sigue siendo la más incómoda del tema: quién mata y por qué.',
          'El Holocausto no fue el único genocidio del período. Los nazis asesinaron a entre doscientos mil y quinientos mil gitanos, ejecutaron el programa de eutanasia contra personas con discapacidad, persiguieron a homosexuales y testigos de Jehová y planificaron para después de la victoria la muerte o el desplazamiento de decenas de millones de eslavos. Reconocer la especificidad del exterminio judío y situarlo en ese conjunto no son operaciones incompatibles.',
        ].join('\n\n'),
        callout:
          'Más de la mitad de las víctimas judías murieron fuera de las cámaras de gas: fusiladas en fosas, muertas de hambre en guetos o asesinadas en marchas de evacuación. La imagen de un genocidio puramente industrial es incompleta.',
      },
      {
        title: 'El final y su balance',
        body: [
          'La campaña de bombardeo estratégico sobre Alemania mató a unos cuatrocientos mil civiles y planteó desde entonces un debate moral y otro de eficacia. La producción bélica alemana siguió creciendo hasta 1944, lo que se ha usado para negar su utilidad; pero desvió a la defensa antiaérea una parte enorme de la artillería y de la industria alemanas y destruyó la producción de combustible sintético, que fue lo que finalmente paralizó a la Luftwaffe y a los blindados. Dresde, en febrero de 1945, con una ciudad llena de refugiados y sin objetivos militares claros, es el caso que concentra la discusión ética.',
          'En el Pacífico, el bombardeo incendiario de Tokio en marzo de 1945 mató a unas cien mil personas en una noche, más que cualquiera de las dos bombas atómicas. La invasión prevista de las islas japonesas se estimaba costosísima, y Japón, aunque derrotado materialmente, no aceptaba la rendición incondicional. En ese contexto se lanzaron las bombas sobre Hiroshima y Nagasaki, con unas doscientas mil muertes contando los efectos de la radiación.',
          'La justificación tradicional, formulada por Stimson, sostiene que la bomba evitó una invasión con cientos de miles de bajas aliadas. Gar Alperovitz replicó que Japón estaba a punto de rendirse y que el objetivo real era condicionar a la Unión Soviética en la posguerra. Tsuyoshi Hasegawa, trabajando con fuentes japonesas, soviéticas y estadounidenses, ha sostenido que el factor decisivo en la decisión japonesa fue la entrada soviética en la guerra el 8 de agosto, que cerró la última esperanza de una mediación negociada.',
          'El balance final es difícil de sostener con cifras porque las cifras son inabarcables. Entre cincuenta y setenta millones de muertos, la mayoría civiles; la Unión Soviética con veintisiete millones, China con entre quince y veinte, Polonia con cerca de una sexta parte de su población; decenas de millones de desplazados; ciudades enteras destruidas y una limpieza étnica de posguerra que expulsó a doce millones de alemanes de Europa oriental.',
          'De la guerra salieron el orden bipolar, la descolonización acelerada por el desprestigio y el agotamiento de las metrópolis, las Naciones Unidas y un derecho internacional nuevo. Los juicios de Núremberg y Tokio establecieron la responsabilidad penal individual por crímenes de guerra, crímenes contra la humanidad y guerra de agresión, y por primera vez la obediencia debida dejó de ser una defensa válida. La Convención sobre el Genocidio de 1948 y la Declaración Universal de Derechos Humanos del mismo año son productos directos de lo que se descubrió al abrir los campos.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Guerra relámpago', definition: 'Etiqueta periodística para la combinación de blindados y aviación táctica de 1939 y 1940. No fue una doctrina escrita ni describe bien un ejército con tracción animal.' },
      { term: 'Espacio vital', definition: 'Objetivo expansivo nazi de conquistar territorio agrario en el este europeo para colonización alemana, expuesto ya en Mi lucha.' },
      { term: 'Plan del Hambre', definition: 'Plan de 1941 para desviar los alimentos soviéticos a Alemania asumiendo la muerte por inanición de decenas de millones de personas.' },
      { term: 'Orden de los Comisarios', definition: 'Directiva de junio de 1941 que ordenaba fusilar a los comisarios políticos soviéticos capturados. Cancelaba por escrito el derecho de guerra.' },
      { term: 'Préstamo y Arriendo', definition: 'Programa estadounidense de suministro a los aliados sin pago inmediato. Aportó al Ejército Rojo la movilidad y los alimentos que sus fábricas no producían.' },
      { term: 'Ultra', definition: 'Inteligencia obtenida de la lectura de los cifrados alemanes en Bletchley Park sobre trabajo previo polaco. Decisiva en la batalla del Atlántico.' },
      { term: 'Einsatzgruppen', definition: 'Unidades móviles de las SS y la policía que fusilaron a más de un millón y medio de personas en el este entre 1941 y 1942.' },
      { term: 'Operación Reinhard', definition: 'Programa de exterminio en Belzec, Sobibor y Treblinka, campos sin otra función que matar a los deportados a su llegada.' },
      { term: 'Conferencia de Wannsee', definition: 'Reunión de enero de 1942 que coordinó administrativamente la Solución Final. No decidió el genocidio, que ya estaba en ejecución.' },
      { term: 'Solución Final', definition: 'Eufemismo administrativo nazi para el asesinato de los judíos europeos. Su uso muestra el lenguaje burocrático con que se gestionó el exterminio.' },
      { term: 'Colaboracionismo', definition: 'Cooperación de gobiernos, administraciones y particulares con la ocupación. Sin ella la maquinaria alemana no habría funcionado con las tropas disponibles.' },
      { term: 'Bombardeo estratégico', definition: 'Ataque aéreo sistemático contra la retaguardia enemiga. Discutido a la vez por su eficacia militar y por su moralidad.' },
      { term: 'Rendición incondicional', definition: 'Exigencia aliada formulada en Casablanca en 1943. Evitó una paz separada y prolongó la resistencia de los vencidos.' },
      { term: 'Crimen contra la humanidad', definition: 'Categoría jurídica consolidada en Núremberg para actos contra población civil al margen del estado de guerra. Base del derecho penal internacional posterior.' },
    ],
    debates: [
      {
        question: '¿Cómo se llegó a la decisión de exterminar a los judíos europeos?',
        positions: [
          {
            school: 'Intencionalismo (Dawidowicz, 1975)',
            argument:
              'El exterminio estaba contenido en la ideología nazi desde el principio y las declaraciones de Hitler desde 1919 permiten reconstruir un propósito continuo que solo esperaba las condiciones para ejecutarse.',
          },
          {
            school: 'Funcionalismo (Broszat, 1977; Mommsen)',
            argument:
              'No hay orden escrita. El genocidio resultó de una radicalización acumulativa: competencia entre organismos, fracaso de los planes de deportación e iniciativas de mandos locales que Berlín ratificó a posteriori.',
          },
          {
            school: 'Síntesis (Browning, 2004)',
            argument:
              'Las decisiones se tomaron entre el verano y el otoño de 1941, en la euforia de la victoria esperada en el este, con impulso desde arriba y propuestas desde abajo que se reforzaron mutuamente.',
          },
        ],
        state:
          'La síntesis de Browning es hoy mayoritaria. La discusión se ha desplazado de la fecha de la decisión al papel de las periferias, los auxiliares locales y las administraciones ocupadas.',
      },
      {
        question: '¿Qué convierte a una persona corriente en ejecutor de un genocidio?',
        positions: [
          {
            school: 'Situación y grupo (Browning, 1992)',
            argument:
              'El Batallón 101 de la policía de Hamburgo estaba formado por hombres de mediana edad sin fanatismo especial, con posibilidad real de negarse. La presión del grupo, la obediencia y la deshumanización bastaron.',
          },
          {
            school: 'Cultura antisemita específica (Goldhagen, 1996)',
            argument:
              'Lo decisivo fue un antisemitismo eliminacionista arraigado en la sociedad alemana durante generaciones, que hizo de los ejecutores voluntarios convencidos y no simples engranajes.',
          },
        ],
        state:
          'La tesis de Goldhagen ha sido ampliamente criticada por su selección de fuentes y por no explicar la participación de auxiliares no alemanes. La línea situacionista predomina, matizada por estudios sobre motivación ideológica individual.',
      },
      {
        question: '¿Fue necesaria la bomba atómica para acabar la guerra en el Pacífico?',
        positions: [
          {
            school: 'Necesidad militar (Stimson, 1947)',
            argument:
              'La invasión de las islas japonesas se estimaba en cientos de miles de bajas aliadas y muchas más japonesas. La bomba fue la alternativa menos costosa en vidas para forzar una rendición que Japón rechazaba.',
          },
          {
            school: 'Diplomacia atómica (Alperovitz, 1965)',
            argument:
              'Japón estaba materialmente derrotado y buscaba mediación. El objetivo real del lanzamiento fue condicionar a la Unión Soviética en la posguerra mostrando la nueva arma.',
          },
          {
            school: 'La entrada soviética (Hasegawa, 2005)',
            argument:
              'Las fuentes japonesas muestran que lo decisivo en el consejo imperial fue la declaración de guerra soviética del 8 de agosto, que cerró la última vía de negociación, más que el efecto de las bombas.',
          },
        ],
        state:
          'La investigación reciente tiende a explicar la rendición por la combinación de ambos golpes en tres días. La discusión moral sobre el ataque deliberado a población civil es independiente de la militar y sigue abierta.',
      },
    ],
    sources: [
      { author: 'Roosevelt y Churchill', title: 'Carta del Atlántico', year: '1941', kind: 'primaria', note: 'Principios de la posguerra formulados antes de la entrada estadounidense en la guerra. Base ideológica de las Naciones Unidas.' },
      { author: 'Alto Mando alemán', title: 'Directrices para el trato a los comisarios políticos', year: '1941', kind: 'primaria', note: 'La criminalidad de la guerra en el este ordenada por escrito antes del primer disparo.' },
      { author: 'Reinhard Heydrich y otros', title: 'Protocolo de la conferencia de Wannsee', year: '1942', kind: 'primaria', note: 'Coordinación administrativa del exterminio, con censo de la población judía de toda Europa incluida la neutral.' },
      { author: 'Emanuel Ringelblum y el archivo Oneg Shabat', title: 'Crónica del gueto de Varsovia', year: '1940–1943', kind: 'primaria', note: 'Archivo clandestino enterrado en lecheras. Documentación producida por las víctimas mientras ocurría.' },
      { author: 'Jan Karski', title: 'Historia de un Estado clandestino', year: '1944', kind: 'primaria', note: 'Informe de un correo de la resistencia polaca que entró en el gueto y llevó la noticia a Londres y Washington.' },
      { author: 'Marc Bloch', title: 'La extraña derrota', year: '1946', kind: 'primaria', note: 'Análisis del colapso francés de 1940 escrito por un historiador que fue oficial y después fusilado por la Gestapo.' },
      { author: 'Primo Levi', title: 'Si esto es un hombre', year: '1947', kind: 'primaria', note: 'Testimonio de Auschwitz y reflexión sobre la zona gris entre víctimas y ejecutores.' },
      { author: 'Ana Frank', title: 'Diario', year: '1947', kind: 'primaria', note: 'La persecución vista desde el escondite de una adolescente en Ámsterdam. Documento personal y no representativo, y por eso valioso.' },
      { author: 'Tribunal Militar Internacional', title: 'Actas del proceso de Núremberg', year: '1945–1946', kind: 'primaria', note: 'Fuente masiva sobre la maquinaria del régimen y fundación del derecho penal internacional moderno.' },
      { author: 'Vasili Grossman', title: 'Cuadernos de guerra y Vida y destino', year: '1945 y 1960', kind: 'primaria', note: 'Corresponsal en Stalingrado y primer periodista en describir un campo de exterminio. Su novela fue confiscada por el KGB.' },
      { author: 'Naciones Unidas', title: 'Convención para la prevención y sanción del delito de genocidio', year: '1948', kind: 'primaria', note: 'Categoría jurídica formulada por Raphael Lemkin a partir de lo ocurrido entre 1939 y 1945.' },
      { author: 'Raul Hilberg', title: 'La destrucción de los judíos europeos', year: '1961', kind: 'estudio', note: 'Obra fundacional: reconstruye el proceso burocrático del exterminio a partir de documentación alemana.' },
      { author: 'Gar Alperovitz', title: 'Atomic Diplomacy', year: '1965', kind: 'estudio', note: 'Formula la tesis revisionista sobre los motivos diplomáticos del lanzamiento de las bombas.' },
      { author: 'Robert Paxton', title: 'La Francia de Vichy', year: '1972', kind: 'estudio', note: 'Demuestra con archivos alemanes que Vichy tuvo iniciativa propia. Obligó a reescribir la memoria francesa de la guerra.' },
      { author: 'John Dower', title: 'War Without Mercy', year: '1986', kind: 'estudio', note: 'El racismo recíproco en la guerra del Pacífico y su efecto sobre la conducta de ambos bandos.' },
      { author: 'Christopher Browning', title: 'Aquellos hombres grises', year: '1992', kind: 'estudio', note: 'Estudio del Batallón 101 de policía: cómo hombres corrientes se convirtieron en ejecutores teniendo la opción de no hacerlo.' },
      { author: 'Omer Bartov', title: 'Hitlers Wehrmacht', year: '1991', kind: 'estudio', note: 'Desmonta el mito de la Wehrmacht limpia mostrando su implicación en la guerra ideológica del este.' },
      { author: 'Richard Overy', title: 'Por qué ganaron los aliados', year: '1995', kind: 'estudio', note: 'Sostiene que la victoria no fue automática por superioridad material: hubo que organizarla y convertirla en fuerza útil.' },
      { author: 'David Glantz y Jonathan House', title: 'Choque de titanes', year: '1995', kind: 'estudio', note: 'Reconstrucción del frente oriental con archivos soviéticos, frente al relato basado en memorias de generales alemanes.' },
      { author: 'Tsuyoshi Hasegawa', title: 'Racing the Enemy', year: '2005', kind: 'estudio', note: 'Trabaja fuentes japonesas, soviéticas y estadounidenses y sitúa el peso decisivo en la entrada soviética de agosto de 1945.' },
      { author: 'Timothy Snyder', title: 'Tierras de sangre', year: '2010', kind: 'estudio', note: 'Sitúa el Holocausto en el espacio donde coincidieron las políticas de exterminio alemana y soviética.' },
      { author: 'Antony Beevor', title: 'La Segunda Guerra Mundial', year: '2012', kind: 'estudio', note: 'Síntesis narrativa global que integra los teatros europeo y asiático en un solo relato.' },
      { author: 'Saul Friedländer', title: 'El Tercer Reich y los judíos', year: '1997–2007', kind: 'estudio', note: 'Historia integrada que combina la documentación de los perpetradores con las voces de las víctimas.' },
    ],
  },
  questions: [
    {
      id: 'segunda-guerra-1', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Por qué los historiadores militares desconfían hoy del término guerra relámpago?',
      options: [
        'Porque las campañas de 1939 y 1940 fueron en realidad muy lentas',
        'Porque no existía tal doctrina en los manuales alemanes y buena parte del ejército se movía a pie y con tracción animal',
        'Porque la inventaron los soviéticos en 1943',
        'Porque solo se aplicó en el frente del Pacífico',
      ],
      answer: 1,
      explanation: 'La etiqueta fue periodística. El éxito inicial dependió tanto de los errores del adversario como de la innovación propia.',
    },
    {
      id: 'segunda-guerra-2', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué explica mejor la derrota francesa de 1940?',
      options: [
        'La inferioridad numérica y de calidad de los carros franceses',
        'Un colapso de mando: carros dispersos entre divisiones de infantería, doctrina defensiva y ruptura por las Ardenas',
        'La falta de apoyo militar británico en el continente',
        'La rendición inmediata del ejército tras la declaración de guerra',
      ],
      answer: 1,
      explanation: 'Francia tenía más carros que Alemania y de mejor blindaje. Marc Bloch, oficial e historiador, dejó la mejor autopsia del desastre.',
    },
    {
      id: 'segunda-guerra-3', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué preveía el Plan del Hambre elaborado en 1941?',
      options: [
        'El racionamiento de alimentos en las ciudades alemanas',
        'Desviar los alimentos soviéticos a Alemania asumiendo la muerte por inanición de decenas de millones de personas',
        'La compra de trigo a Estados Unidos mediante Préstamo y Arriendo',
        'El bloqueo naval de los puertos británicos',
      ],
      answer: 1,
      explanation: 'Es anterior a la invasión, igual que la Orden de los Comisarios: la guerra en el este fue criminal por diseño.',
    },
    {
      id: 'segunda-guerra-4', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Cuál fue la consecuencia estratégica del ataque a Pearl Harbor?',
      options: [
        'La destrucción de los portaaviones estadounidenses del Pacífico',
        'Un éxito táctico que no alcanzó a los portaaviones y convirtió a Estados Unidos en beligerante',
        'La conquista inmediata de Hawái por Japón',
        'La firma de un armisticio entre Japón y Estados Unidos',
      ],
      answer: 1,
      explanation: 'Alemania declaró la guerra a Estados Unidos cuatro días después, lo que selló la formación de la Gran Alianza.',
    },
    {
      id: 'segunda-guerra-5', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué papel tuvo Ultra en la batalla del Atlántico?',
      options: [
        'Fue el nombre en clave del programa de construcción de escoltas',
        'Fue la inteligencia obtenida al leer los cifrados alemanes, decisiva para desviar los convoyes',
        'Fue el radar de superficie instalado en los submarinos alemanes',
        'Fue el plan de bombardeo de las bases submarinas francesas',
      ],
      answer: 1,
      explanation: 'Se obtuvo en Bletchley Park a partir del trabajo previo de los criptógrafos polacos y se combinó con escoltas, aviación de largo alcance y radar.',
    },
    {
      id: 'segunda-guerra-6', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué proporción de sus bajas mortales sufrió la Wehrmacht en el frente oriental?',
      options: [
        'Alrededor de una cuarta parte',
        'Alrededor de la mitad',
        'Alrededor del ochenta por ciento',
        'Prácticamente ninguna hasta 1944',
      ],
      answer: 2,
      explanation: 'Cualquier relato que sitúe el centro de gravedad de la guerra europea en Normandía falsea la escala del esfuerzo militar.',
    },
    {
      id: 'segunda-guerra-7', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué fue la operación Bagration de 1944?',
      options: [
        'El desembarco aliado en el sur de Francia',
        'La ofensiva soviética que destruyó el Grupo de Ejércitos Centro, un desastre alemán mayor que Stalingrado',
        'El plan alemán de contraataque en las Ardenas',
        'La campaña de bombardeo sobre las refinerías rumanas',
      ],
      answer: 1,
      explanation: 'Coincidió deliberadamente con Normandía y mostró la madurez del arte operativo soviético, con engaño estratégico y explotación en profundidad.',
    },
    {
      id: 'segunda-guerra-8', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué sostiene el llamado mito de la Wehrmacht limpia y por qué se ha desmontado?',
      options: [
        'Que el ejército alemán no combatió en el este, lo que contradicen las bajas',
        'Que el ejército regular actuó al margen de los crímenes de las SS, cuando participó en el hambre planificada, en el trato criminal a prisioneros y en represalias',
        'Que la Wehrmacht se opuso a Hitler desde 1938',
        'Que sus generales planificaron el atentado de julio de 1944',
      ],
      answer: 1,
      explanation: 'El mito lo crearon memorias de posguerra escritas por oficiales que buscaban exculparse. La investigación desde los años ochenta lo ha desarmado.',
    },
    {
      id: 'segunda-guerra-9', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué demostró Robert Paxton sobre el régimen de Vichy?',
      options: [
        'Que fue un escudo que protegió a Francia de una ocupación peor',
        'Que tuvo iniciativa política propia y legisló contra los judíos antes de que se lo exigieran',
        'Que careció de toda autoridad efectiva sobre el territorio',
        'Que colaboró únicamente en materia económica',
      ],
      answer: 1,
      explanation: 'Trabajó con archivos alemanes en 1972 y su libro obligó a reescribir la memoria francesa de la guerra.',
    },
    {
      id: 'segunda-guerra-10', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué fueron los Einsatzgruppen?',
      options: [
        'Las unidades de propaganda del ejército alemán',
        'Unidades móviles de las SS y la policía que fusilaron a más de un millón y medio de personas en el este',
        'Los batallones de trabajo forzoso de los campos de concentración',
        'Las brigadas antipartisanas creadas en 1944',
      ],
      answer: 1,
      explanation: 'Actuaron aldea por aldea entre 1941 y 1942 con apoyo de batallones de policía y auxiliares locales. Babi Yar es el caso más conocido.',
    },
    {
      id: 'segunda-guerra-11', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué decidió realmente la conferencia de Wannsee de enero de 1942?',
      options: [
        'Ordenó por primera vez el exterminio de los judíos europeos',
        'Coordinó administrativamente entre organismos un proceso de exterminio ya en marcha',
        'Aprobó el traslado de los judíos alemanes a Madagascar',
        'Estableció el sistema de guetos en Polonia',
      ],
      answer: 1,
      explanation: 'Los fusilamientos masivos en el este llevaban medio año ejecutándose. Wannsee es una reunión de coordinación burocrática, no de decisión.',
    },
    {
      id: 'segunda-guerra-12', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Cuál es hoy la explicación mayoritaria sobre la decisión de exterminio?',
      options: [
        'Un plan escrito y fechado en 1933',
        'Decisiones tomadas entre el verano y el otoño de 1941, con impulso desde arriba y propuestas desde abajo',
        'Una orden dictada por Himmler sin conocimiento de Hitler',
        'Una improvisación posterior a la derrota de Stalingrado',
      ],
      answer: 1,
      explanation: 'Es la síntesis de Browning entre intencionalistas y funcionalistas, y la discusión se ha desplazado al papel de periferias y auxiliares locales.',
    },
    {
      id: 'segunda-guerra-13', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué concluyó Christopher Browning al estudiar el Batallón 101 de policía?',
      options: [
        'Que sus miembros eran fanáticos seleccionados por su historial en el partido',
        'Que hombres corrientes con posibilidad real de negarse se convirtieron en asesinos por presión de grupo, obediencia y deshumanización',
        'Que la unidad se negó en bloque a participar en los fusilamientos',
        'Que solo participaron auxiliares no alemanes',
      ],
      answer: 1,
      explanation: 'Goldhagen respondió atribuyéndolo a un antisemitismo eliminacionista específicamente alemán, tesis muy criticada por su selección de fuentes.',
    },
    {
      id: 'segunda-guerra-14', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué efecto militar tuvo la campaña de bombardeo estratégico sobre Alemania?',
      options: [
        'Detuvo la producción bélica alemana ya en 1942',
        'Desvió artillería, cazas e industria a la defensa del territorio y destruyó la producción de combustible sintético',
        'No tuvo ningún efecto sobre el esfuerzo de guerra alemán',
        'Provocó el hundimiento inmediato de la moral civil',
      ],
      answer: 1,
      explanation: 'La producción siguió creciendo hasta 1944, pero la falta de combustible fue lo que finalmente paralizó a la Luftwaffe y a los blindados.',
    },
    {
      id: 'segunda-guerra-15', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: 'Según Hasegawa, ¿qué pesó más en la decisión japonesa de rendirse?',
      options: [
        'El bombardeo incendiario de Tokio de marzo de 1945',
        'La declaración de guerra soviética del 8 de agosto, que cerró la vía de una mediación negociada',
        'El bloqueo submarino estadounidense',
        'La pérdida de Okinawa',
      ],
      answer: 1,
      explanation: 'La investigación reciente tiende a explicar la rendición por la combinación de las bombas y la entrada soviética en tres días.',
    },
    {
      id: 'segunda-guerra-16', era: 'Edad Contemporánea', topicId: 'segunda-guerra', topic: 'Segunda Guerra Mundial',
      question: '¿Qué principio jurídico estableció el proceso de Núremberg?',
      options: [
        'La responsabilidad colectiva del pueblo alemán',
        'La responsabilidad penal individual por crímenes de guerra y contra la humanidad, sin que valga la obediencia debida',
        'La prohibición del bombardeo de ciudades',
        'La indemnización obligatoria a los Estados ocupados',
      ],
      answer: 1,
      explanation: 'De ahí derivan la Convención sobre el Genocidio de 1948 y el derecho penal internacional posterior.',
    },
  ],
}
