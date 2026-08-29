import type { TopicModule } from '../types.ts'

export const espanaSigloXx: TopicModule = {
  topic: {
    id: 'espana-siglo-xx',
    era: 'Edad Contemporánea',
    title: 'España en el siglo XX',
    years: '1898–1986',
    country: 'España',
    description: 'Del Desastre del 98 a la entrada en Europa: un siglo con dos dictaduras, una república, una guerra civil y una transición que sigue discutiéndose.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '✶',
    color: 'terracotta',
    summary:
      'España entró en el siglo XX perdiendo sus últimas colonias y con un sistema político que funcionaba mediante el fraude electoral organizado. Lo que vino después no fue una anomalía respecto de Europa, aunque durante mucho tiempo se contó así: fue una versión especialmente aguda de los mismos conflictos europeos, con un componente añadido, la cuestión religiosa y agraria, y con un desenlace, cuarenta años de dictadura, que la mayoría del continente evitó. El siglo se ordena en torno a cuatro momentos: la descomposición de la Restauración, el intento republicano de reformar el país en cinco años, la guerra civil que lo destruyó y la larga dictadura que la ganó, y una transición negociada que produjo una democracia estable y dejó abierta la cuenta del pasado.',
    keyDates: [
      { date: '1898', event: 'Derrota ante Estados Unidos y pérdida de Cuba, Puerto Rico y Filipinas. Crisis de conciencia nacional y regeneracionismo.' },
      { date: '1909', event: 'Semana Trágica de Barcelona: la movilización para Marruecos desemboca en revuelta y represión.' },
      { date: '1917', event: 'Crisis triple: juntas militares, asamblea de parlamentarios y huelga general revolucionaria.' },
      { date: '1921', event: 'Desastre de Annual en Marruecos. El expediente Picasso pone en cuestión al ejército y a la Corona.' },
      { date: 'Septiembre de 1923', event: 'Golpe de Primo de Rivera, aceptado por Alfonso XIII. Dictadura hasta 1930.' },
      { date: '14 de abril de 1931', event: 'Proclamación de la Segunda República tras las elecciones municipales.' },
      { date: '1931–1933', event: 'Bienio reformista: Constitución, reforma agraria, Estatuto catalán, sufragio femenino y reforma militar.' },
      { date: 'Octubre de 1934', event: 'Insurrección en Asturias y proclamación del Estado catalán. Represión y radicalización mutua.' },
      { date: '18 de julio de 1936', event: 'Sublevación militar. Su fracaso parcial abre una guerra civil de casi tres años.' },
      { date: '1 de abril de 1939', event: 'Fin de la guerra. Comienza una represión sistemática con decenas de miles de ejecuciones.' },
      { date: '1959', event: 'Plan de Estabilización: fin de la autarquía y arranque del desarrollismo.' },
      { date: '20 de noviembre de 1975', event: 'Muerte de Franco. Juan Carlos I es proclamado rey dos días después.' },
      { date: '1977–1978', event: 'Elecciones libres, Ley de Amnistía y Constitución aprobada en referéndum.' },
      { date: '1981 y 1986', event: 'Golpe fallido del 23-F e ingreso en la Comunidad Económica Europea.' },
    ],
    sections: [
      {
        title: 'La Restauración y su descomposición',
        body: [
          'El sistema de la Restauración, diseñado por Cánovas en 1876, se basaba en dos partidos dinásticos que se alternaban en el gobierno mediante un mecanismo llamado turno pacífico: la Corona nombraba al presidente, este convocaba elecciones y las ganaba. El instrumento era el caciquismo, una red de notables locales que controlaba el voto rural mediante favores, deudas y coacción. Funcionó durante veinticinco años porque España era mayoritariamente agraria y porque la abstención era la norma.',
          'La derrota de 1898 ante Estados Unidos rompió la confianza en ese arreglo. La pérdida de Cuba, Puerto Rico y Filipinas fue un desastre militar menor y una catástrofe simbólica: liquidó el imperio, arruinó a los sectores exportadores y produjo el regeneracionismo, una corriente crítica que va de Joaquín Costa, con su diagnóstico de oligarquía y caciquismo, a los escritores de la llamada generación del 98. Todos coincidían en que el país necesitaba una cirugía política; discrepaban en quién debía practicarla.',
          'El sistema no se reformó, pero la sociedad cambió. Creció una clase obrera organizada en dos familias, la socialista de la UGT y la anarcosindicalista que en 1910 fundó la CNT, con una implantación que en España fue excepcional en el contexto europeo. Creció también el catalanismo político tras la crisis del 98, y con él la primera reivindicación seria de una reorganización territorial del Estado. La conflictividad se hizo estructural: Semana Trágica de 1909, pistolerismo en Barcelona, huelgas agrarias en Andalucía.',
          'La crisis de 1917 mostró que las tres fracturas podían coincidir. Las juntas de defensa militares protestaron por los ascensos y los sueldos; una asamblea de parlamentarios, con protagonismo catalanista, pidió unas Cortes constituyentes; y UGT y CNT convocaron una huelga general que el ejército reprimió. Cada pieza tenía su propia agenda y ninguna confiaba en las otras, de modo que el sistema sobrevivió sin resolver nada.',
          'Marruecos fue el golpe final. La guerra colonial en el Rif era impopular, cara y mal dirigida, y el desastre de Annual en 1921, con unos diez mil muertos, produjo un expediente parlamentario que apuntaba a la responsabilidad de mandos y de la Corona. El golpe de Primo de Rivera en septiembre de 1923, aceptado por Alfonso XIII, cerró la investigación y sustituyó la crisis del sistema por una dictadura que se presentó como paréntesis regenerador. Duró siete años, hizo obra pública, ganó la guerra de Marruecos y, al caer, arrastró consigo a la monarquía que la había amparado.',
        ].join('\n\n'),
        callout:
          'El turno no era una democracia imperfecta que fuese mejorando: era un sistema cuyo funcionamiento requería que las elecciones no decidieran nada. Cuando el voto empezó a importar, en las ciudades, el mecanismo dejó de servir.',
      },
      {
        title: 'La Segunda República',
        body: [
          'La República se proclamó el 14 de abril de 1931 tras unas elecciones municipales que la coalición republicano-socialista ganó en las capitales de provincia. Alfonso XIII se marchó sin abdicar y sin resistencia. Llegaba con un apoyo popular enorme y con una agenda de reformas que en otros países había ocupado medio siglo y que aquí se intentó en dos años: reforma agraria, separación de Iglesia y Estado, autonomía catalana, reforma militar, educación pública masiva y sufragio femenino, aprobado en 1931 gracias sobre todo a Clara Campoamor.',
          'El bienio reformista chocó con todo a la vez. La Constitución de 1931 disolvió la Compañía de Jesús y limitó la enseñanza religiosa, lo que enfrentó al régimen con la Iglesia y con la parte católica de la población; la reforma agraria fue lenta y decepcionó tanto a los jornaleros que la esperaban como a los propietarios que la temían; la reforma militar de Azaña ofendió a una parte del ejército; y los sucesos de Casas Viejas en 1933 quebraron la confianza de la izquierda anarquista en el gobierno.',
          'Las elecciones de 1933, las primeras con voto femenino, dieron la mayoría a la derecha. El bienio siguiente paralizó las reformas y, cuando la CEDA de Gil Robles entró en el gobierno en octubre de 1934, la izquierda respondió con una insurrección. En Asturias fue una revolución obrera reprimida por el ejército de África con más de mil muertos; en Cataluña, con una proclamación del Estado catalán que terminó con el gobierno de la Generalitat en la cárcel. Fue el momento en que ambos bandos empezaron a considerar legítimo lo que negaban al contrario.',
          'La victoria del Frente Popular en febrero de 1936 devolvió el gobierno a la izquierda republicana y liberó a los presos de 1934. La primavera de 1936 fue tensa, con ocupaciones de fincas, huelgas, quema de iglesias y violencia callejera entre falangistas y militantes de izquierda, y con una conspiración militar en marcha desde marzo. El asesinato del teniente Castillo y, en represalia, el de José Calvo Sotelo el 13 de julio, aceleró un golpe que ya estaba decidido.',
          'La historiografía discute cuánto de inevitable había en ese desenlace. Una posición subraya la debilidad estructural: un país con la mitad de la población activa en el campo, una Iglesia que no aceptaba la secularización, un ejército politizado y unas izquierdas divididas entre reforma y revolución. Otra insiste en que la República funcionó como democracia durante cinco años, que su destrucción exigió un golpe de Estado y que sin ese golpe no habría habido guerra. Ambas coinciden en algo: el 18 de julio no fue el desenlace natural de la primavera de 1936, sino una decisión.',
        ].join('\n\n'),
      },
      {
        title: 'La Guerra Civil',
        body: [
          'La sublevación del 17 y 18 de julio de 1936 triunfó en la mitad agraria y conservadora del país y fracasó en Madrid, Barcelona, Valencia, Bilbao y la mayor parte de la industria. Ese fracaso parcial es lo que produjo la guerra: ni los sublevados pudieron imponerse en días ni el gobierno pudo restablecer el orden, y el Estado se descompuso en dos zonas con dos economías, dos ejércitos y dos formas de violencia.',
          'La internacionalización fue inmediata y desigual. Alemania e Italia enviaron aviación, que permitió el paso del ejército de África a la Península en el primer puente aéreo militar de la historia, y después la Legión Cóndor y decenas de miles de soldados italianos. La República recibió armamento soviético a cambio del oro del Banco de España y las Brigadas Internacionales, unos treinta y cinco mil voluntarios. Francia y Gran Bretaña impusieron un Comité de No Intervención que solo cumplían ellas y que privó al gobierno legítimo del derecho a comprar armas.',
          'La violencia en la retaguardia fue masiva en ambas zonas y de naturaleza distinta. En la republicana estalló sobre todo en los primeros meses, de forma descentralizada, con comités, checas y paseos, con unas cincuenta mil víctimas, entre ellas casi siete mil religiosos, y el gobierno fue recuperando poco a poco el control judicial. En la sublevada fue sistemática, ordenada desde arriba desde el primer día como instrumento de limpieza política, se mantuvo durante toda la guerra y continuó después: se calculan alrededor de cien mil víctimas hasta 1939 y unas cincuenta mil más en la posguerra.',
          'Dentro de la República hubo además una segunda guerra. La revolución social de 1936, con colectivizaciones agrarias e industriales sobre todo en Cataluña y Aragón, chocó con la posición del gobierno y del PCE, que sostenían que primero había que ganar la guerra construyendo un Estado y un ejército regular. Los hechos de mayo de 1937 en Barcelona, con enfrentamientos armados entre fuerzas del gobierno y militantes del POUM y la CNT, resolvieron la disputa a favor de la centralización y dejaron una herida que Orwell contó desde dentro.',
          'Militarmente, la guerra se decidió por la superioridad de recursos y por la unidad de mando. Franco fue nombrado generalísimo y jefe del Estado en septiembre de 1936, unificó por decreto a falangistas y carlistas en 1937 y dirigió una guerra deliberadamente lenta, orientada a ocupar territorio y depurarlo. La República tardó en construir un ejército, sufrió la división política y perdió sucesivamente el norte industrial en 1937, Aragón y el Mediterráneo en 1938 y Cataluña en enero de 1939. La guerra terminó el 1 de abril con una victoria sin condiciones.',
        ].join('\n\n'),
        callout:
          'La no intervención fue el factor exterior decisivo. Aplicada mientras Alemania e Italia abastecían abiertamente a los sublevados, funcionó como una intervención de hecho contra el gobierno legítimo.',
      },
      {
        title: 'El franquismo',
        body: [
          'La dictadura se construyó sobre la victoria y nunca renunció a ella. La Ley de Responsabilidades Políticas de 1939 tenía efecto retroactivo hasta 1934, los tribunales militares juzgaron por rebelión a quienes habían defendido la legalidad, y cientos de miles de personas pasaron por prisiones, batallones de trabajadores y campos de concentración. Medio millón de personas se exiliaron y buena parte de la élite científica, universitaria y cultural del país desapareció de él para siempre.',
          'La primera etapa fue de autarquía y hambre. El aislamiento internacional tras 1945, el racionamiento hasta 1952, el mercado negro y una política económica intervencionista produjeron los llamados años del hambre, con niveles de consumo inferiores a los de 1935 hasta bien entrados los cincuenta. El régimen se sostuvo con el apoyo de la Iglesia, del ejército y de los propietarios, y con un aparato de control que llegaba a cada pueblo.',
          'La Guerra Fría lo rescató. Los acuerdos con Estados Unidos de 1953, que dieron bases militares a cambio de ayuda, y el Concordato con la Santa Sede del mismo año rompieron el aislamiento. En 1959 el Plan de Estabilización, obra de tecnócratas vinculados al Opus Dei, liberalizó parcialmente la economía y abrió la etapa de mayor crecimiento del siglo: turismo, remesas de casi dos millones de emigrantes en Europa, inversión extranjera y un éxodo rural que vació el campo y llenó las periferias urbanas.',
          'El desarrollismo cambió la sociedad sin cambiar el régimen, y ahí está su contradicción. Una población más urbana, más educada y con contacto europeo produjo comisiones obreras en las fábricas, movimiento estudiantil en las universidades, curas obreros y una oposición interna que el régimen combatió con estados de excepción, tribunales de orden público y penas de muerte hasta septiembre de 1975. La aparición de ETA en 1959 y su deriva armada añadió un conflicto que sobreviviría a la dictadura.',
          'Qué tipo de régimen fue es una discusión clásica. Juan Linz propuso en 1964 el concepto de régimen autoritario, con pluralismo limitado, mentalidades en vez de ideología y desmovilización política, frente al modelo totalitario. Otros historiadores, como Ismael Saz o Stanley Payne, subrayan la fase fascistizada de los años cuarenta, con partido único, saludo romano y proyecto imperial, y describen una evolución hacia una dictadura conservadora y católica a medida que cambiaba el contexto internacional.',
        ].join('\n\n'),
      },
      {
        title: 'La Transición y su discusión',
        body: [
          'Franco murió en la cama en noviembre de 1975 dejando todo atado. Lo que ocurrió después no estaba escrito: hubo presión desde abajo, con una conflictividad laboral y estudiantil altísima, y negociación desde arriba, con un sector del régimen que entendió que el continuismo era inviable. Adolfo Suárez, nombrado presidente en 1976, consiguió que las propias Cortes franquistas aprobaran la Ley para la Reforma Política, que abría el camino a unas elecciones libres.',
          'El proceso tuvo un coste explícito. La Ley de Amnistía de 1977, reclamada por la oposición para sacar a los presos políticos, incluyó también a los responsables de delitos cometidos desde el poder, y con ella se cerró cualquier proceso penal por la represión. Los Pactos de la Moncloa repartieron el ajuste económico de la crisis del petróleo. La Constitución de 1978, votada por el ochenta y ocho por ciento de los votantes, estableció una monarquía parlamentaria, un Estado aconfesional y un modelo autonómico deliberadamente abierto.',
          'La violencia acompañó todo el proceso: atentados de ETA y del GRAPO, la matanza de los abogados de Atocha en 1977, la extrema derecha activa y un ejército que no aceptaba el rumbo. El intento de golpe del 23 de febrero de 1981, con el Congreso secuestrado durante una noche, fracasó y funcionó como vacuna. La llegada del PSOE al gobierno en 1982, el ingreso en la OTAN y la entrada en la Comunidad Económica Europea en 1986 cerraron el ciclo.',
          'Durante veinte años la Transición se contó como un modelo de reconciliación exportable. Desde los años noventa esa lectura se ha discutido a fondo. Una parte de la historiografía subraya que fue una operación negociada entre élites, que dejó intactas la administración, la judicatura y las policías del franquismo, y que el llamado pacto del olvido impidió durante décadas la investigación de los crímenes y la localización de las fosas, algo excepcional en las transiciones posteriores.',
          'La réplica es que la comparación relevante no es con un ideal sino con las alternativas realmente disponibles en 1976, con un ejército intacto y sin ninguna potencia dispuesta a intervenir, y que el resultado fue una democracia estable en un país que no la había tenido nunca de forma duradera. La Ley de Memoria Histórica de 2007 y la de Memoria Democrática de 2022 reabrieron oficialmente el asunto. Es la discusión histórica más viva del país y la única de este tema que es también un debate político en curso.',
        ].join('\n\n'),
        callout:
          'España es el país europeo con más desaparecidos sin identificar después de Camboya. Esa cifra, más que ninguna interpretación, explica por qué el debate sobre la Transición sigue abierto.',
      },
    ],
    concepts: [
      { term: 'Turno pacífico', definition: 'Alternancia pactada entre los dos partidos dinásticos de la Restauración. Las elecciones se convocaban después de nombrar gobierno y se ganaban desde él.' },
      { term: 'Caciquismo', definition: 'Red de notables locales que controlaba el voto rural mediante favores, deudas y coacción. Instrumento imprescindible del turno.' },
      { term: 'Regeneracionismo', definition: 'Corriente crítica surgida del 98 que diagnosticaba la decadencia nacional y pedía una reforma profunda del Estado y de la educación.' },
      { term: 'Annual', definition: 'Desastre militar de 1921 en el Rif, con unos diez mil muertos. Su investigación parlamentaria amenazaba al ejército y a la Corona.' },
      { term: 'Bienio reformista', definition: 'Etapa republicana de 1931 a 1933: Constitución, reforma agraria, Estatuto catalán, reforma militar y educación pública masiva.' },
      { term: 'Sufragio femenino', definition: 'Aprobado en las Cortes constituyentes de 1931, con Clara Campoamor como principal defensora. Se ejerció por primera vez en 1933.' },
      { term: 'Frente Popular', definition: 'Coalición de izquierdas que ganó las elecciones de febrero de 1936 y gobernó hasta la sublevación militar.' },
      { term: 'No Intervención', definition: 'Comité franco-británico de 1936 que prohibió vender armas a los dos bandos españoles. Solo lo cumplieron las democracias.' },
      { term: 'Colectivizaciones', definition: 'Incautación y gestión colectiva de tierras y fábricas en la zona republicana desde 1936, sobre todo en Cataluña y Aragón.' },
      { term: 'Autarquía', definition: 'Política económica de autosuficiencia e intervención del primer franquismo. Produjo racionamiento, mercado negro y los años del hambre.' },
      { term: 'Plan de Estabilización', definition: 'Reforma de 1959 que liberalizó parcialmente la economía y abrió el desarrollismo con turismo, remesas e inversión extranjera.' },
      { term: 'Régimen autoritario', definition: 'Categoría propuesta por Linz para el franquismo: pluralismo limitado, mentalidades en vez de ideología y desmovilización política.' },
      { term: 'Ley para la Reforma Política', definition: 'Norma de 1976 aprobada por las propias Cortes franquistas que abrió el paso a elecciones libres. La reforma se hizo desde la legalidad anterior.' },
      { term: 'Pacto del olvido', definition: 'Nombre dado al acuerdo tácito de no revisar judicialmente el pasado tras la Ley de Amnistía de 1977. Objeto central del debate sobre la Transición.' },
    ],
    debates: [
      {
        question: '¿Estaba condenada la Segunda República?',
        positions: [
          {
            school: 'Fragilidad estructural',
            argument:
              'Un país con la mitad de la población activa en el campo, una Iglesia que no aceptaba la secularización, un ejército politizado y unas izquierdas divididas entre reforma y revolución hacían casi imposible consolidar una democracia en cinco años.',
          },
          {
            school: 'Democracia destruida por un golpe (Casanova; Graham)',
            argument:
              'La República funcionó como régimen constitucional con alternancia real en 1933 y 1936. Hizo falta una sublevación militar para acabar con ella, y sin ella no habría habido guerra.',
          },
          {
            school: 'Responsabilidades compartidas (Payne; Ranzato)',
            argument:
              'La insurrección de octubre de 1934 contra un gobierno legítimo y la violencia de la primavera de 1936 muestran una deslegitimación mutua en la que ninguna de las dos partes defendía ya la legalidad sin condiciones.',
          },
        ],
        state:
          'Existe consenso académico en que la guerra la inició un golpe de Estado. La discusión sigue sobre el peso relativo de las responsabilidades previas y sobre la viabilidad del proyecto reformista en el plazo en que se intentó.',
      },
      {
        question: '¿Fue el franquismo un régimen fascista?',
        positions: [
          {
            school: 'Régimen autoritario (Linz, 1964)',
            argument:
              'No hubo ideología cerrada ni movilización permanente, sino pluralismo limitado entre familias del régimen, mentalidades difusas y desmovilización deliberada de la población.',
          },
          {
            school: 'Dictadura fascistizada (Saz; Payne)',
            argument:
              'Los años cuarenta muestran partido único, saludo romano, retórica imperial y alineamiento con el Eje. El régimen se desfascistizó por cálculo internacional, no por naturaleza propia.',
          },
        ],
        state:
          'La discusión se ha desplazado de la etiqueta a las fases: casi nadie sostiene hoy que fuese homogéneo entre 1939 y 1975, y se estudian por separado la etapa fascistizada, la nacionalcatólica y la tecnocrática.',
      },
      {
        question: '¿Fue la Transición un modelo o un pacto de olvido?',
        positions: [
          {
            school: 'Éxito negociado (Tusell; Juliá)',
            argument:
              'En 1976 el ejército estaba intacto y no había potencia dispuesta a intervenir. Con esas condiciones se construyó una democracia estable en un país sin tradición democrática duradera, y eso no era el resultado previsible.',
          },
          {
            school: 'Impunidad y continuidad (Espinosa; Gallego)',
            argument:
              'La Ley de Amnistía cerró toda vía penal, la administración y la judicatura franquistas permanecieron, y durante décadas no hubo investigación oficial de la represión ni apertura de fosas.',
          },
          {
            school: 'Presión desde abajo',
            argument:
              'La imagen de una operación pactada solo entre élites ignora la conflictividad laboral, vecinal y estudiantil de 1975 y 1976, que fue la que hizo inviable el continuismo.',
          },
        ],
        state:
          'Es el debate más vivo de la historiografía española y también una discusión política en curso. La legislación de memoria de 2007 y 2022 reabrió oficialmente cuestiones que la Transición había aplazado.',
      },
    ],
    sources: [
      { author: 'Joaquín Costa', title: 'Oligarquía y caciquismo como la forma actual de gobierno en España', year: '1901', kind: 'primaria', note: 'Diagnóstico regeneracionista del funcionamiento real del sistema de la Restauración.' },
      { author: 'Comisión Picasso', title: 'Expediente sobre el desastre de Annual', year: '1922', kind: 'primaria', note: 'Investigación militar cuyas conclusiones sobre responsabilidades quedaron sepultadas por el golpe de 1923.' },
      { author: 'Cortes Constituyentes', title: 'Constitución de la República Española', year: '1931', kind: 'primaria', note: 'Sufragio universal, Estado aconfesional, derecho al divorcio y autonomías. Texto central del proyecto republicano.' },
      { author: 'Clara Campoamor', title: 'El voto femenino y yo', year: '1936', kind: 'primaria', note: 'Relato de primera mano del debate parlamentario de 1931 sobre el sufragio femenino.' },
      { author: 'Manuel Azaña', title: 'Diarios y La velada en Benicarló', year: '1932–1937', kind: 'primaria', note: 'Escritos del principal dirigente republicano, con un diagnóstico lúcido y desolado de la guerra.' },
      { author: 'Manuel Chaves Nogales', title: 'A sangre y fuego', year: '1937', kind: 'primaria', note: 'Relatos de un periodista republicano que denuncia la violencia de los dos bandos desde el exilio.' },
      { author: 'George Orwell', title: 'Homenaje a Cataluña', year: '1938', kind: 'primaria', note: 'Testimonio de los hechos de mayo de 1937 en Barcelona escrito por un miliciano del POUM.' },
      { author: 'Estado español', title: 'Ley de Responsabilidades Políticas', year: '1939', kind: 'primaria', note: 'Norma retroactiva hasta 1934 que convirtió la defensa de la legalidad republicana en delito.' },
      { author: 'Arturo Barea', title: 'La forja de un rebelde', year: '1941–1946', kind: 'primaria', note: 'Trilogía autobiográfica que recorre Marruecos, la Restauración, la República y la guerra desde abajo.' },
      { author: 'Gobierno español', title: 'Plan Nacional de Estabilización Económica', year: '1959', kind: 'primaria', note: 'Documento que liquida la autarquía y abre la etapa desarrollista.' },
      { author: 'Cortes Generales', title: 'Ley de Amnistía', year: '1977', kind: 'primaria', note: 'Reclamada por la oposición para liberar presos políticos, cubrió también los delitos cometidos desde el poder.' },
      { author: 'Cortes Generales', title: 'Constitución española', year: '1978', kind: 'primaria', note: 'Monarquía parlamentaria, Estado aconfesional y modelo autonómico deliberadamente abierto.' },
      { author: 'Juan José Linz', title: 'An Authoritarian Regime: Spain', year: '1964', kind: 'estudio', note: 'Introduce la categoría de régimen autoritario, aplicada después a numerosas dictaduras.' },
      { author: 'Raymond Carr', title: 'España 1808-1975', year: '1966', kind: 'estudio', note: 'Síntesis clásica que sacó la historia contemporánea española del marco de la excepcionalidad.' },
      { author: 'Gabriel Jackson', title: 'La República española y la Guerra Civil', year: '1965', kind: 'estudio', note: 'Primera gran síntesis académica externa sobre el período republicano.' },
      { author: 'Paul Preston', title: 'El holocausto español', year: '2011', kind: 'estudio', note: 'Estudio comparado de la represión en ambas retaguardias y en la posguerra.' },
      { author: 'Julián Casanova', title: 'República y Guerra Civil', year: '2007', kind: 'estudio', note: 'Síntesis actual del período con atención a la violencia, la Iglesia y el movimiento libertario.' },
      { author: 'Helen Graham', title: 'The Spanish Republic at War', year: '2002', kind: 'estudio', note: 'Analiza el esfuerzo republicano por construir un Estado en guerra y los conflictos internos que generó.' },
      { author: 'Ángel Viñas', title: 'La soledad de la República', year: '2006', kind: 'estudio', note: 'Reconstruye con documentación diplomática y financiera el efecto de la no intervención y el papel del oro.' },
      { author: 'Ismael Saz', title: 'Fascismo y franquismo', year: '2004', kind: 'estudio', note: 'Analiza las fases del régimen y su relación cambiante con el fascismo europeo.' },
      { author: 'Santos Juliá', title: 'Transición', year: '2017', kind: 'estudio', note: 'Defiende la Transición como proceso político con lógica propia frente a las lecturas de mera continuidad.' },
      { author: 'Francisco Espinosa', title: 'Contra el olvido', year: '2006', kind: 'estudio', note: 'Documenta la represión franquista y critica el silencio institucional posterior a 1977.' },
      { author: 'Borja de Riquer', title: 'La dictadura de Franco', year: '2010', kind: 'estudio', note: 'Volumen de síntesis sobre el régimen, su economía, su sociedad y su oposición.' },
    ],
  },
  questions: [
    {
      id: 'espana-siglo-xx-1', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Cómo funcionaba el turno pacífico de la Restauración?',
      options: [
        'Los partidos alternaban tras ganar elecciones libres',
        'La Corona nombraba gobierno y este convocaba y ganaba las elecciones mediante el caciquismo',
        'El Parlamento elegía al presidente por votación secreta',
        'Los gobiernos se sorteaban entre las provincias',
      ],
      answer: 1,
      explanation: 'El sistema requería que las elecciones no decidieran nada. Cuando el voto empezó a importar en las ciudades, el mecanismo dejó de servir.',
    },
    {
      id: 'espana-siglo-xx-2', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué efecto tuvo la derrota de 1898?',
      options: [
        'Provocó la caída inmediata de la monarquía',
        'Liquidó el imperio y produjo el regeneracionismo, una corriente crítica que exigía reformar el Estado',
        'Obligó a España a entrar en la Primera Guerra Mundial',
        'Supuso la pérdida de Marruecos',
      ],
      answer: 1,
      explanation: 'Fue un desastre militar menor y una catástrofe simbólica. Joaquín Costa formuló el diagnóstico de oligarquía y caciquismo.',
    },
    {
      id: 'espana-siglo-xx-3', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué mostró la crisis de 1917?',
      options: [
        'Que el ejército, el catalanismo y el movimiento obrero podían protestar a la vez sin confiar unos en otros',
        'Que el sistema de la Restauración se había democratizado',
        'Que España entraría en la guerra europea',
        'Que la monarquía había perdido el apoyo del ejército',
      ],
      answer: 0,
      explanation: 'Juntas militares, asamblea de parlamentarios y huelga general coincidieron con agendas distintas, y el sistema sobrevivió sin resolver nada.',
    },
    {
      id: 'espana-siglo-xx-4', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué relación hubo entre el desastre de Annual y el golpe de 1923?',
      options: [
        'Ninguna: el golpe respondió a la crisis económica',
        'El expediente sobre Annual apuntaba a responsabilidades del ejército y de la Corona, y el golpe cerró la investigación',
        'El golpe se dio para reanudar la guerra de Marruecos',
        'Primo de Rivera fue el principal responsable militar de Annual',
      ],
      answer: 1,
      explanation: 'La dictadura se presentó como paréntesis regenerador, duró siete años y al caer arrastró a la monarquía que la había amparado.',
    },
    {
      id: 'espana-siglo-xx-5', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué reformas emprendió el bienio republicano de 1931 a 1933?',
      options: [
        'Nacionalización de la banca y colectivización agraria',
        'Reforma agraria, separación de Iglesia y Estado, Estatuto catalán, reforma militar y sufragio femenino',
        'Reforma fiscal y entrada en la Sociedad de Naciones',
        'Reforma electoral y abolición del ejército',
      ],
      answer: 1,
      explanation: 'Se intentó en dos años una agenda que en otros países había ocupado medio siglo, y chocó simultáneamente con la Iglesia, el ejército y los propietarios.',
    },
    {
      id: 'espana-siglo-xx-6', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué ocurrió en octubre de 1934?',
      options: [
        'Se proclamó el Frente Popular',
        'Una insurrección de izquierda contra la entrada de la CEDA en el gobierno, con revolución obrera en Asturias y proclamación del Estado catalán',
        'Se aprobó la Constitución republicana',
        'Se produjo la sublevación militar contra la República',
      ],
      answer: 1,
      explanation: 'Fue el momento en que ambos bandos empezaron a considerar legítimo lo que negaban al contrario.',
    },
    {
      id: 'espana-siglo-xx-7', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Por qué la sublevación de julio de 1936 produjo una guerra civil?',
      options: [
        'Porque triunfó en todo el país y la resistencia fue exterior',
        'Porque fracasó en las grandes ciudades y en la mayor parte de la industria, sin que ninguno de los dos bandos pudiera imponerse',
        'Porque intervinieron desde el primer día Francia y Gran Bretaña',
        'Porque el gobierno declaró la guerra a Marruecos',
      ],
      answer: 1,
      explanation: 'El Estado se descompuso en dos zonas con dos economías, dos ejércitos y dos formas de violencia.',
    },
    {
      id: 'espana-siglo-xx-8', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿En qué se diferenció la violencia en las dos retaguardias?',
      options: [
        'En que solo hubo represión en la zona sublevada',
        'En que la republicana fue sobre todo descentralizada y de los primeros meses, y la sublevada fue sistemática, ordenada desde arriba y continuó tras la guerra',
        'En que la republicana afectó únicamente a militares',
        'En que la sublevada se detuvo al terminar el conflicto',
      ],
      answer: 1,
      explanation: 'Se calculan unas cincuenta mil víctimas en la zona republicana y alrededor de cien mil en la sublevada hasta 1939, más otras cincuenta mil en la posguerra.',
    },
    {
      id: 'espana-siglo-xx-9', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué se dirimió en los hechos de mayo de 1937 en Barcelona?',
      options: [
        'La entrada de Cataluña en la guerra',
        'El conflicto entre revolución social y construcción de un Estado y un ejército regular, resuelto a favor de la centralización',
        'La firma de una paz separada con los sublevados',
        'El reparto del oro del Banco de España',
      ],
      answer: 1,
      explanation: 'Enfrentó a fuerzas del gobierno con militantes del POUM y la CNT. Orwell lo contó desde dentro en Homenaje a Cataluña.',
    },
    {
      id: 'espana-siglo-xx-10', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué caracterizó la primera etapa económica del franquismo?',
      options: [
        'Una rápida integración en el comercio internacional',
        'La autarquía: intervención, racionamiento hasta 1952, mercado negro y consumo inferior al de 1935',
        'La entrada masiva de inversión extranjera',
        'La colectivización de la agricultura',
      ],
      answer: 1,
      explanation: 'Los llamados años del hambre se prolongaron hasta bien entrados los cincuenta, cuando la Guerra Fría rompió el aislamiento del régimen.',
    },
    {
      id: 'espana-siglo-xx-11', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué supuso el Plan de Estabilización de 1959?',
      options: [
        'El regreso a la autarquía tras la crisis internacional',
        'La liberalización parcial de la economía y el arranque del desarrollismo con turismo, remesas e inversión extranjera',
        'La nacionalización de la banca española',
        'El ingreso de España en la Comunidad Económica Europea',
      ],
      answer: 1,
      explanation: 'Fue obra de tecnócratas vinculados al Opus Dei y cambió la sociedad sin cambiar el régimen, que es la contradicción del período.',
    },
    {
      id: 'espana-siglo-xx-12', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué propuso Juan Linz en 1964 sobre la naturaleza del franquismo?',
      options: [
        'Que era un régimen totalitario equiparable al nazismo',
        'Que era un régimen autoritario, con pluralismo limitado, mentalidades en vez de ideología y desmovilización política',
        'Que era una monarquía constitucional en suspenso',
        'Que era una dictadura militar sin base social',
      ],
      answer: 1,
      explanation: 'Otros historiadores subrayan la fase fascistizada de los años cuarenta. La discusión se ha desplazado de la etiqueta al estudio de las fases.',
    },
    {
      id: 'espana-siglo-xx-13', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué fue la Ley para la Reforma Política de 1976?',
      options: [
        'La ley que legalizó los partidos políticos y los sindicatos',
        'La norma aprobada por las propias Cortes franquistas que abrió el paso a elecciones libres',
        'El texto que estableció el Estado de las autonomías',
        'La ley que amnistió a los presos políticos',
      ],
      answer: 1,
      explanation: 'La reforma se hizo desde la legalidad anterior, lo que evitó la ruptura y condicionó a la vez el alcance del cambio.',
    },
    {
      id: 'espana-siglo-xx-14', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué alcance tuvo la Ley de Amnistía de 1977?',
      options: [
        'Solo liberó a los presos políticos del franquismo',
        'Liberó a los presos políticos y cubrió también los delitos cometidos desde el poder, cerrando la vía penal sobre la represión',
        'Anuló las sentencias de los tribunales militares franquistas',
        'Estableció un tribunal especial para juzgar los crímenes de la dictadura',
      ],
      answer: 1,
      explanation: 'Fue reclamada por la oposición, y su segunda cara es el núcleo del debate sobre el llamado pacto del olvido.',
    },
    {
      id: 'espana-siglo-xx-15', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué argumento sostienen quienes defienden el proceso de la Transición?',
      options: [
        'Que no hubo continuidad alguna con el aparato franquista',
        'Que la comparación relevante no es con un ideal sino con las alternativas disponibles en 1976, con el ejército intacto y sin apoyo exterior',
        'Que la represión franquista fue exagerada por la historiografía',
        'Que el 23-F demostró la lealtad del ejército a la democracia',
      ],
      answer: 1,
      explanation: 'Sus críticos responden que quedaron intactas la administración y la judicatura y que durante décadas no hubo investigación oficial de la represión.',
    },
    {
      id: 'espana-siglo-xx-16', era: 'Edad Contemporánea', topicId: 'espana-siglo-xx', topic: 'España en el siglo XX',
      question: '¿Qué acontecimientos cerraron el ciclo de la Transición?',
      options: [
        'La muerte de Franco y la coronación del rey',
        'El fracaso del golpe del 23-F en 1981, la llegada del PSOE al gobierno en 1982 y el ingreso en la Comunidad Económica Europea en 1986',
        'La aprobación de la Constitución y los Pactos de la Moncloa',
        'La legalización del PCE y las primeras elecciones municipales',
      ],
      answer: 1,
      explanation: 'El golpe fallido funcionó como vacuna, y la integración europea consolidó el nuevo régimen dentro del marco continental.',
    },
  ],
}
