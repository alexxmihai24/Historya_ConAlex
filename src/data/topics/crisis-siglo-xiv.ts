import type { TopicModule } from '../types'

export const crisisSigloXiv: TopicModule = {
  topic: {
    id: 'crisis-siglo-xiv',
    era: 'Edad Media',
    title: 'Peste negra y crisis bajomedieval',
    years: 'c. 1300–1450',
    country: 'Europa',
    description: 'Hambre, peste, guerra y cisma: qué se hundió, qué salió reforzado y quién ganó con ello.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⌛',
    color: 'blue',
    summary:
      'El siglo XIV europeo suele contarse como catástrofe: hambre, peste, guerra de los Cien Años y cisma de la Iglesia. La descripción es exacta y a la vez insuficiente. La mortalidad fue de una magnitud sin comparación en la historia europea —entre un tercio y la mitad de la población en cuatro años—, pero lo que interesa al historiador es lo que ocurrió después, y ahí el resultado no fue uniforme: los mismos hechos produjeron el fin de la servidumbre al oeste del Elba y su reimplantación al este, salarios reales altísimos en Inglaterra y represión señorial victoriosa en Polonia. La lección del periodo es que un choque externo no determina por sí solo el desenlace: lo decide la relación de fuerzas sobre la que cae.',
    keyDates: [
      { date: '1315–1317', event: 'Gran hambruna del norte de Europa tras varios años de lluvias catastróficas.' },
      { date: '1337', event: 'Comienza la guerra de los Cien Años entre Francia e Inglaterra.' },
      { date: '1347', event: 'La peste llega a Mesina desde el mar Negro.' },
      { date: '1348–1351', event: 'Primera oleada por toda Europa: muere entre un tercio y la mitad de la población.' },
      { date: '1348–1350', event: 'Pogromos contra las juderías acusadas de envenenar los pozos; Clemente VI los condena por bula.' },
      { date: '1349–1351', event: 'Ordenanza y Estatuto de los Trabajadores en Inglaterra: se intenta congelar los salarios por ley.' },
      { date: '1358', event: 'Jacquerie en el norte de Francia.' },
      { date: '1378', event: 'Revuelta de los Ciompi en Florencia; comienza el Cisma de Occidente.' },
      { date: '1381', event: 'Revuelta campesina inglesa; Wat Tyler muere ante el rey en Smithfield.' },
      { date: '1415', event: 'Jan Hus es quemado en Constanza pese al salvoconducto imperial.' },
      { date: '1414–1418', event: 'Concilio de Constanza: el conciliarismo cierra el cisma.' },
      { date: '1419–1434', event: 'Guerras husitas en Bohemia.' },
      { date: '1453', event: 'Fin de la guerra de los Cien Años y caída de Constantinopla.' },
      { date: '1486', event: 'Sentencia de Guadalupe: fin de la servidumbre remensa en Cataluña.' },
      { date: '2011', event: 'La secuenciación de ADN antiguo confirma *Yersinia pestis* en las víctimas de Londres.' },
    ],
    sections: [
      {
        title: 'Antes de la peste: un crecimiento que se había agotado',
        body: [
          'La peste no llegó a una Europa próspera. Llegó a una Europa que llevaba medio siglo tropezando con sus propios límites. Hacia 1270 la roturación había alcanzado tierras marginales de rendimiento bajo, las herencias fragmentaban las explotaciones hasta hacerlas inviables, la proporción entre población y superficie cultivable se deterioraba y el precio real del grano subía.',
          'La gran hambruna de 1315-1317 fue la primera advertencia seria. Varios años seguidos de lluvias excepcionales arruinaron cosechas y siegas en todo el norte de Europa; las estimaciones de mortalidad para ciudades como Ypres rondan el diez o el quince por ciento de la población en pocos meses. A ella se sumó una epizootia bovina hacia 1319-1320 que diezmó el ganado de tiro y de leche, con efectos prolongados sobre la capacidad de labrar.',
          'La interpretación clásica de este agotamiento es neomaltusiana. Michael Postan sostuvo que la población había superado la capacidad de carga de la agricultura disponible, y que la corrección demográfica era, en ese sentido, inevitable. Emmanuel Le Roy Ladurie describió el ciclo agrario del Antiguo Régimen como una respiración larga de crecimiento y colapso.',
          'Robert Brenner abrió en 1976 la polémica que reorganizó el debate. Su objeción es que el modelo demográfico describe la presión pero no explica los desenlaces: si la población y la tierra fueran las únicas variables, regiones con la misma demografía deberían haber terminado igual, y no lo hicieron. Lo decisivo, sostuvo, fue la relación de fuerzas entre señores y campesinos y la capacidad de estos de organizarse, junto con la estructura del poder político en cada territorio. La discusión, publicada después como el «debate Brenner», sigue siendo el marco por el que pasa cualquier explicación del periodo.',
          'Una tercera vía, la del modelo comercializador, subraya que hacia 1300 buena parte de la economía europea estaba ya integrada en mercados: los campesinos vendían y compraban, se endeudaban y se especializaban, de modo que su suerte dependía tanto de los precios como de la cosecha. Y Bruce Campbell ha reintroducido con datos climáticos y epidemiológicos un factor ambiental: el enfriamiento del siglo XIV y las alteraciones ecológicas que favorecieron la difusión de la enfermedad.',
        ].join('\n\n'),
      },
      {
        title: 'La peste negra: qué fue, cuánto mató',
        body: [
          'La epidemia entró por el Mediterráneo en 1347, procedente del mar Negro y transportada por las rutas comerciales genovesas; el relato del asedio de Caffa, donde los sitiadores habrían catapultado cadáveres infectados, procede de una única fuente y se cita más de lo que su fiabilidad permite. Desde Mesina y Génova avanzó por Italia y el sur de Francia en 1348, alcanzó la península ibérica, Inglaterra y el Imperio ese mismo año y el norte del continente en 1349-1351.',
          'Las cifras se han revisado al alza. Durante décadas se repitió que murió un tercio de la población, siguiendo estimaciones antiguas; el vaciado sistemático de registros señoriales, censos fiscales y series de sustituciones de beneficios eclesiásticos ha llevado a hablar hoy de entre el cuarenta y el sesenta por ciento en la primera oleada, con variaciones regionales enormes. Y no fue un episodio único: las recurrencias de 1361, 1374 y sucesivas impidieron la recuperación demográfica durante más de un siglo. Europa no volvió a los niveles de población de 1300 hasta el siglo XVI.',
          'Sobre la identidad de la enfermedad hubo una polémica larga. Graham Twigg en 1984 y sobre todo Samuel Cohn en 2002 argumentaron que los síntomas descritos, la velocidad de propagación y la estacionalidad no encajaban con la peste bubónica transmitida por pulgas de rata, y propusieron otro agente. La discusión se cerró por vía material: en 2011 la secuenciación de ADN antiguo extraído de esqueletos del cementerio de East Smithfield, en Londres, identificó *Yersinia pestis* y reconstruyó su genoma. Es uno de los casos más limpios de un debate histórico resuelto por evidencia biológica.',
          'Lo que sigue abierto es el mecanismo de transmisión. La objeción de Cohn sobre la velocidad conserva fuerza, y varios modelos recientes sostienen que la difusión se explica mejor por ectoparásitos humanos —pulgas y piojos— y por contagio directo en la forma neumónica que por el ciclo clásico rata-pulga-humano. El agente está identificado; su ecología, no del todo.',
          'La mortalidad tampoco fue ciega. Los estudios sobre restos óseos muestran que afectó más a quienes ya arrastraban desnutrición o enfermedad previa, es decir, a los pobres, lo que encaja con una población debilitada por cuatro décadas de crisis alimentaria.',
        ].join('\n\n'),
        callout:
          'La discusión sobre si la peste negra fue realmente peste bubónica duró treinta años y se cerró en 2011 con la secuenciación de *Yersinia pestis* en esqueletos de Londres. Un debate histórico resuelto por un laboratorio.',
      },
      {
        title: 'Después: escasez de brazos y reacción señorial',
        body: [
          'La consecuencia económica inmediata fue una inversión brutal de la relación entre tierra y trabajo. Con la población reducida a la mitad y la tierra intacta, el trabajo se volvió escaso y caro, y la tierra abundante y barata. Los salarios reales subieron con fuerza, las rentas cayeron, se abandonaron las parcelas peores y mejoró la dieta: más carne, más cerveza, menos pan de cereal secundario. Algunos historiadores han hablado de una edad de oro del trabajo asalariado, con la advertencia obvia de que se pagó con la muerte de la mitad de la población.',
          'Los señores reaccionaron intentando congelar por ley lo que el mercado les quitaba. En Inglaterra, la Ordenanza de 1349 y el Estatuto de los Trabajadores de 1351 fijaron los salarios en los niveles anteriores a la peste, prohibieron aceptar más y penaron abandonar el señorío en busca de mejor paga. Medidas equivalentes se tomaron en Castilla, en Francia y en las ciudades italianas. Se aplicaron con desigual éxito y generaron un contencioso permanente entre señores y trabajadores.',
          'De ahí salieron las grandes revueltas. La Jacquerie del norte de Francia (1358) estalló en plena guerra, con la nobleza desacreditada tras la derrota de Poitiers; los Ciompi de Florencia (1378) fueron obreros del textil sin gremio propio que llegaron a ocupar el gobierno de la ciudad durante seis semanas; la revuelta inglesa de 1381, desencadenada por un impuesto de capitación, llevó a los campesinos a Londres con un programa que incluía la abolición de la servidumbre, y terminó con Wat Tyler muerto ante el rey. Los remensas catalanes sostuvieron un conflicto de décadas contra los malos usos señoriales que solo se cerró con la Sentencia de Guadalupe de 1486, y los irmandiños gallegos derribaron fortalezas en 1467.',
          'Casi todas fueron aplastadas, y sin embargo el resultado a largo plazo les fue favorable en Europa occidental. La servidumbre se disolvió en Inglaterra, Francia y buena parte de la península a lo largo de los siglos XIV y XV, no por concesión sino porque retener a la fuerza a una mano de obra escasa resultaba caro e inaplicable cuando el señor vecino ofrecía mejores condiciones.',
          'Al este del Elba ocurrió lo contrario. Sobre la misma catástrofe demográfica, la nobleza de Prusia, Polonia, Bohemia y Hungría reforzó su control: ató a los campesinos a la tierra, amplió la reserva señorial y organizó una producción cerealista para exportar a Occidente a través del Báltico. Es la llamada segunda servidumbre, que duraría hasta el siglo XIX. La divergencia entre las dos mitades del continente, a partir del mismo choque, es el argumento central de Brenner: lo que difería no era la demografía, sino la capacidad de organización campesina, la densidad de las comunidades rurales y la existencia o no de un poder político capaz de arbitrar.',
        ].join('\n\n'),
        callout:
          'El mismo colapso demográfico liquidó la servidumbre al oeste del Elba y la reimplantó al este. Un choque externo no fija el desenlace: lo fija la relación de fuerzas sobre la que cae.',
      },
      {
        title: 'Guerra, impuesto y Estado',
        body: [
          'La guerra de los Cien Años (1337-1453) no fue una guerra continua sino una sucesión de campañas y treguas por la sucesión al trono francés y por los dominios ingleses en el continente. Su interés histórico está menos en las batallas que en lo que obligó a construir.',
          'Financiar ejércitos durante generaciones exigió impuestos regulares, y los impuestos regulares exigieron negociarlos: los Estados Generales franceses y el Parlamento inglés ganaron peso precisamente como órganos de consentimiento fiscal. En Inglaterra la regla de que no hay impuesto sin aprobación parlamentaria se consolidó en este periodo; en Francia, tras la crisis de mediados de siglo, la monarquía logró convertir la *taille* en un impuesto permanente sin consentimiento periódico, lo que apunta ya a dos trayectorias políticas distintas.',
          'Cambió también la guerra misma. El arco largo galés en Crécy (1346) y Azincourt (1415), la infantería de picas, la artillería de pólvora que a mediados del siglo XV derribaba murallas que habían resistido siglos, y sobre todo las compañías permanentes pagadas por la corona en lugar de la hueste feudal convocada por obligación vasallática. El caballero deja de ser el eje del sistema militar, y con él pierde peso el fundamento social de su preeminencia.',
          'La Iglesia atravesó su propia crisis institucional. El traslado de la corte pontificia a Aviñón (1309-1377) la ató a la órbita francesa y multiplicó las críticas sobre su fiscalidad; el Cisma de Occidente, iniciado en 1378, llegó a enfrentar a tres papas simultáneos con obediencias repartidas por reinos. La salida no vino del papado sino de una teoría: el conciliarismo, según el cual un concilio general representa a la Iglesia entera y su autoridad está por encima de la del papa. El Concilio de Constanza (1414-1418) cerró el cisma aplicando ese principio, y aunque el papado lo desactivó después, el episodio dejó formulada una doctrina de soberanía representativa que reaparecería en la política laica.',
          'Constanza hizo también otra cosa: quemó a Jan Hus en 1415 pese al salvoconducto imperial que lo protegía. Hus recogía las tesis de John Wyclif sobre la autoridad de la Escritura, la crítica a la riqueza eclesiástica y la comunión bajo las dos especies. Su ejecución desencadenó las guerras husitas en Bohemia, donde ejércitos campesinos derrotaron repetidamente a cruzadas imperiales durante quince años. Es el primer movimiento de reforma religiosa que consigue sostenerse militarmente y arrancar concesiones, un siglo antes de Lutero.',
        ].join('\n\n'),
      },
      {
        title: 'La cultura de la catástrofe y sus víctimas',
        body: [
          'La respuesta cultural fue inmediata y reconocible. La danza de la muerte, pintada en claustros y cementerios, coloca en fila al papa, al emperador, al mercader y al campesino conducidos por esqueletos: la muerte como igualadora es un motivo nuevo que se difunde con la epidemia. Los manuales del *ars moriendi* enseñaron a morir bien cuando el sacerdote podía no llegar a tiempo. Las procesiones de flagelantes recorrieron el continente ofreciendo penitencia colectiva como remedio, hasta que el papado las prohibió al ver que escapaban a todo control eclesiástico.',
          'La violencia buscó culpables. Entre 1348 y 1350 se difundió la acusación de que los judíos envenenaban los pozos, y centenares de comunidades del Imperio, Francia y Cataluña fueron asaltadas y destruidas; en Estrasburgo, en febrero de 1349, varios centenares de judíos fueron quemados antes incluso de que la peste llegara a la ciudad. Clemente VI publicó dos bulas desmintiendo la acusación y recordando que los judíos morían igual que los cristianos; sirvieron de poco. Muchos supervivientes emigraron hacia el este de Europa, un desplazamiento que redibujó el mapa del judaísmo europeo durante los cinco siglos siguientes.',
          'Johan Huizinga leyó el conjunto en 1919 como el otoño de la Edad Media: una cultura sobrecargada de símbolos, obsesionada con la muerte y el ceremonial, incapaz ya de renovarse. La imagen es poderosa y ha envejecido de forma desigual, porque el mismo periodo produjo la pintura al óleo flamenca, la polifonía, la carabela, el reloj mecánico público, la contabilidad perfeccionada y, hacia 1450, la imprenta. No es una cultura agotada: es una cultura que trabaja bajo presión.',
          'Conviene además no confundir la crisis con el origen de la caza de brujas. Los grandes procesos son posteriores, sobre todo de los siglos XVI y XVII; lo que el XIV aporta es la consolidación de un procedimiento judicial inquisitorial y de un repertorio de categorías de excluidos que después se aplicarán a ese fenómeno.',
        ].join('\n\n'),
        callout:
          'En Estrasburgo, en febrero de 1349, se quemó a la comunidad judía antes de que la peste llegara a la ciudad. La violencia no fue una reacción al contagio: se anticipó a él.',
      },
      {
        title: '¿Crisis o transición?',
        body: [
          'El nombre que se le dé al periodo depende de la explicación que se sostenga. Para la tradición neomaltusiana fue una crisis de subsistencias resuelta por la mortalidad: un ajuste doloroso dentro de un ciclo agrario que se repite. Para la historiografía marxista fue una crisis del modo de producción feudal —Guy Bois habló de crisis del feudalismo y Rodney Hilton estudió las revueltas como respuesta consciente de los campesinos—, es decir, la fase terminal de un sistema que ya no podía extraer excedente sin destruir su propia base. Para Brenner, ninguna de las dos: los desenlaces se explican por la relación de fuerzas de clase y por la estructura del poder político en cada región, y por eso divergen.',
          'Los tres marcos han dejado sedimento. Hoy se acepta que hubo un techo de subsistencias real hacia 1300, que la mortalidad alteró de raíz los precios relativos de tierra y trabajo, y que el resultado institucional dependió de variables políticas locales. La palabra «crisis» se usa con reservas porque describe el trauma pero no la salida.',
          'Y la salida fue en varios sentidos una mejora para los supervivientes. Los salarios reales alcanzados en el noroeste de Europa en el siglo XV no volverían a igualarse en siglos; la dieta mejoró; la movilidad aumentó; el campesinado inglés y neerlandés quedó jurídicamente libre. Robert Allen y otros han vinculado esos salarios altos con la posterior trayectoria económica del noroeste europeo, en un argumento que conecta el siglo XIV con la industrialización mucho después. Es una hipótesis discutida, no un hecho establecido, pero muestra por qué el periodo no puede leerse solo como desastre.',
          'Lo que sí desapareció fue un mundo institucional. En 1300 Europa tenía servidumbre generalizada, huestes feudales, un papado indiscutido y una economía sin Estado fiscal. En 1450 tenía ejércitos pagados, impuestos permanentes, parlamentos que los negociaban, un papado que había necesitado un concilio para existir y una mitad del continente sin siervos y otra mitad reatándolos. La Edad Moderna empieza con ese reparto ya hecho.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Gran hambruna', definition: 'Crisis alimentaria de 1315-1317 en el norte de Europa por lluvias catastróficas. Primer aviso de que el crecimiento había tocado techo.' },
      { term: 'Techo maltusiano', definition: 'Límite de población que una agricultura dada puede sostener. Explica la presión hacia 1300, no los desenlaces posteriores.' },
      { term: '*Yersinia pestis*', definition: 'Bacteria causante de la peste, identificada en 2011 por secuenciación de ADN antiguo en víctimas de Londres.' },
      { term: 'Estatuto de los Trabajadores', definition: 'Ley inglesa de 1351 que congela los salarios en niveles anteriores a la peste y penaliza abandonar el señorío por mejor paga.' },
      { term: 'Reacción señorial', definition: 'Intento de la nobleza de recuperar por vía legal y coactiva las rentas que la escasez de mano de obra le quitaba.' },
      { term: 'Segunda servidumbre', definition: 'Reimplantación de la servidumbre al este del Elba tras la peste, ligada a la exportación cerealista por el Báltico.' },
      { term: 'Remensa', definition: 'Campesino catalán sujeto a malos usos señoriales. Su conflicto se cerró con la Sentencia de Guadalupe de 1486.' },
      { term: 'Jacquerie', definition: 'Revuelta campesina del norte de Francia en 1358, en plena guerra y con la nobleza desacreditada tras Poitiers.' },
      { term: 'Ciompi', definition: 'Obreros del textil florentino sin gremio propio. Ocuparon el gobierno de la ciudad seis semanas en 1378.' },
      { term: 'Cisma de Occidente', definition: 'División del papado desde 1378, con obediencias repartidas por reinos y hasta tres papas simultáneos.' },
      { term: 'Conciliarismo', definition: 'Doctrina según la cual el concilio general representa a la Iglesia y su autoridad supera a la del papa. Cerró el cisma en Constanza.' },
      { term: 'Danza de la muerte', definition: 'Motivo iconográfico difundido con la epidemia: la muerte conduce en fila a papas, reyes, mercaderes y campesinos por igual.' },
      { term: 'Ars moriendi', definition: 'Manuales para morir bien, útiles cuando el sacerdote podía no llegar a tiempo. Género nacido de la mortalidad masiva.' },
      { term: 'Crisis del feudalismo', definition: 'Lectura marxista del periodo: fase terminal de un sistema incapaz de extraer excedente sin destruir su propia base.' },
    ],
    debates: [
      {
        question: '¿Fue la peste negra realmente peste bubónica?',
        positions: [
          {
            school: 'Otro agente (Twigg, 1984; Cohn, 2002)',
            argument:
              'Los síntomas descritos por los cronistas, la velocidad de propagación y la estacionalidad no encajaban con la peste bubónica transmitida por pulgas de rata. Debía tratarse de otra enfermedad, hoy desaparecida o irreconocible.',
          },
          {
            school: 'Confirmación por ADN antiguo (2011)',
            argument:
              'La secuenciación de restos del cementerio de East Smithfield, en Londres, identificó *Yersinia pestis* y reconstruyó su genoma. El agente está establecido.',
          },
        ],
        state:
          'El debate sobre la identidad del patógeno está cerrado. Sigue abierto el mecanismo de transmisión: la objeción sobre la velocidad conserva fuerza y varios modelos apuntan a ectoparásitos humanos y a contagio directo por vía neumónica más que al ciclo rata-pulga.',
      },
      {
        question: '¿Por qué divergieron el este y el oeste de Europa tras la peste?',
        positions: [
          {
            school: 'Modelo demográfico (Postan, Le Roy Ladurie)',
            argument:
              'La población había superado la capacidad de carga de la agricultura. La mortalidad corrigió la relación entre tierra y trabajo, y de ahí salieron salarios altos y rentas bajas.',
          },
          {
            school: 'Relación de fuerzas de clase (Brenner, 1976)',
            argument:
              'La demografía era la misma a ambos lados del Elba y el resultado fue opuesto. Lo decisivo fue la capacidad de organización de las comunidades campesinas y la estructura del poder político capaz o incapaz de arbitrar.',
          },
        ],
        state:
          'El «debate Brenner» sigue siendo el marco obligado. Se acepta el techo demográfico hacia 1300 y se acepta que no basta para explicar los desenlaces: la variable política es imprescindible.',
      },
      {
        question: '¿Crisis o transición?',
        positions: [
          {
            school: 'Crisis del feudalismo (Bois, Hilton)',
            argument:
              'Fase terminal de un modo de producción que ya no podía extraer excedente sin arruinar su base productiva. Las revueltas son la respuesta consciente de los campesinos a ese agotamiento.',
          },
          {
            school: 'Ajuste cíclico (neomaltusianos)',
            argument:
              'Un episodio más de la respiración larga del ciclo agrario preindustrial: crecimiento hasta el techo de subsistencias, corrección por mortalidad, nuevo crecimiento.',
          },
        ],
        state:
          'Se usa «crisis» con reservas: describe el trauma pero no la salida. Para los supervivientes del noroeste europeo el saldo fue de salarios reales muy altos, mejor dieta y libertad jurídica, y hay quien conecta ese nivel salarial con la trayectoria económica posterior de la región.',
      },
    ],
    sources: [
      { author: 'Giovanni Boccaccio', title: 'Decamerón (introducción)', year: '1348-1353', kind: 'primaria', note: 'Descripción de la peste en Florencia y de la ruptura de los vínculos sociales y familiares.' },
      { author: 'Agnolo di Tura del Grasso', title: 'Crónica de Siena', year: 'c. 1350', kind: 'primaria', note: 'Testimonio directo: enterró a sus cinco hijos con sus propias manos.' },
      { author: 'Clemente VI', title: 'Bulas Quamvis perfidiam', year: '1348', kind: 'primaria', note: 'Desmienten la acusación de envenenamiento de pozos y prohíben los ataques a las juderías.' },
      { author: 'Corona inglesa', title: 'Ordenanza y Estatuto de los Trabajadores', year: '1349-1351', kind: 'primaria', note: 'Congelan salarios y prohíben abandonar el señorío por mejor paga.' },
      { author: 'Guy de Chauliac', title: 'Chirurgia magna', year: '1363', kind: 'primaria', note: 'Descripción médica de las formas bubónica y neumónica por el cirujano del papa de Aviñón.' },
      { author: 'Jean Froissart', title: 'Crónicas', year: 's. XIV', kind: 'primaria', note: 'Relato caballeresco de la guerra de los Cien Años y de la Jacquerie, desde el punto de vista nobiliario.' },
      { author: 'Thomas Walsingham', title: 'Historia Anglicana', year: 'c. 1390', kind: 'primaria', note: 'Fuente principal, y hostil, sobre la revuelta inglesa de 1381.' },
      { author: 'Fernando II de Aragón', title: 'Sentencia Arbitral de Guadalupe', year: '1486', kind: 'primaria', note: 'Abolición de los malos usos y de la remensa en Cataluña tras décadas de conflicto.' },
      { author: 'Michael M. Postan', title: 'The Medieval Economy and Society', year: '1972', kind: 'estudio', note: 'Formulación clásica del modelo demográfico neomaltusiano.' },
      { author: 'Rodney Hilton', title: 'Bond Men Made Free', year: '1973', kind: 'estudio', note: 'Las revueltas campesinas como respuesta organizada, no como estallido irracional.' },
      { author: 'Guy Bois', title: 'Crise du féodalisme', year: '1976', kind: 'estudio', note: 'Crisis del modo de producción feudal a partir del caso normando.' },
      { author: 'Robert Brenner y otros', title: 'El debate Brenner', year: '1976-1985', kind: 'estudio', note: 'Sitúa la relación de fuerzas de clase y el poder político en el centro de la explicación.' },
      { author: 'David Herlihy', title: 'The Black Death and the Transformation of the West', year: '1997', kind: 'estudio', note: 'La epidemia como acelerador de cambios institucionales y técnicos.' },
      { author: 'Ole J. Benedictow', title: 'The Black Death 1346-1353', year: '2004', kind: 'estudio', note: 'Revisión al alza de la mortalidad a partir de registros locales.' },
      { author: 'Kirsten Bos y otros', title: 'A draft genome of Yersinia pestis from victims of the Black Death', year: '2011', kind: 'estudio', note: 'Cierra por vía genética el debate sobre la identidad del patógeno.' },
      { author: 'Bruce M. S. Campbell', title: 'The Great Transition', year: '2016', kind: 'estudio', note: 'Integra clima, ecología y epidemiología en la explicación del siglo XIV.' },
    ],
  },
  questions: [
    {
      id: 'crisis-siglo-xiv-1', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿En qué situación estaba Europa cuando llegó la peste en 1347?',
      options: [
        'En pleno auge demográfico y con excedentes acumulados',
        'Con el crecimiento agotado desde hacía medio siglo: tierras marginales, explotaciones fragmentadas y precios del grano al alza',
        'Recién recuperada de una guerra general europea',
        'Con la población en mínimos históricos',
      ],
      answer: 1,
      explanation: 'La hambruna de 1315-1317 y la epizootia bovina de 1319-1320 habían dejado a la población debilitada antes de la epidemia.',
    },
    {
      id: 'crisis-siglo-xiv-2', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Cuál es la objeción central de Brenner al modelo demográfico?',
      options: [
        'Que la población no creció realmente antes de 1300',
        'Que la peste no tuvo efectos económicos apreciables',
        'Que describe la presión pero no explica los desenlaces: la misma demografía produjo resultados opuestos a uno y otro lado del Elba',
        'Que los registros señoriales no son fiables',
      ],
      answer: 2,
      explanation: 'Para Brenner lo decisivo fue la relación de fuerzas entre señores y campesinos y la estructura del poder político en cada región.',
    },
    {
      id: 'crisis-siglo-xiv-3', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué mortalidad estima hoy la investigación para la primera oleada de peste?',
      options: [
        'Alrededor del diez por ciento',
        'Un tercio exacto de la población europea',
        'Entre el cuarenta y el sesenta por ciento, con grandes variaciones regionales',
        'Más del ochenta por ciento en toda Europa',
      ],
      answer: 2,
      explanation: 'La cifra tradicional de un tercio se ha revisado al alza con registros señoriales, censos fiscales y series de sustituciones de beneficios eclesiásticos.',
    },
    {
      id: 'crisis-siglo-xiv-4', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Cómo se cerró la polémica sobre la identidad de la enfermedad?',
      options: [
        'Con el hallazgo de nuevos cronistas italianos',
        'Con la secuenciación de ADN antiguo en 2011, que identificó *Yersinia pestis* en esqueletos de Londres',
        'Con el análisis estadístico de los testamentos florentinos',
        'No se ha cerrado: sigue sin conocerse el agente',
      ],
      answer: 1,
      explanation: 'Es uno de los casos más limpios de un debate histórico resuelto por evidencia biológica. Lo que sigue abierto es el mecanismo de transmisión.',
    },
    {
      id: 'crisis-siglo-xiv-5', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué parte de la objeción de Cohn conserva vigencia?',
      options: [
        'Que el agente no era una bacteria',
        'Que la mortalidad fue mucho menor de lo calculado',
        'Que la velocidad de propagación encaja mal con el ciclo rata-pulga: hoy se apunta a ectoparásitos humanos y a la forma neumónica',
        'Que la epidemia no llegó al norte de Europa',
      ],
      answer: 2,
      explanation: 'El agente está identificado; su ecología de transmisión, no del todo.',
    },
    {
      id: 'crisis-siglo-xiv-6', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué efecto económico inmediato tuvo la mortalidad masiva?',
      options: [
        'El trabajo se volvió escaso y caro, y la tierra abundante y barata: subieron los salarios reales y cayeron las rentas',
        'Subieron a la vez rentas y salarios',
        'Se hundió el precio del trabajo por exceso de oferta',
        'No hubo efectos apreciables hasta el siglo XVI',
      ],
      answer: 0,
      explanation: 'Mejoró incluso la dieta: más carne y cerveza y menos pan de cereal secundario para quienes sobrevivieron.',
    },
    {
      id: 'crisis-siglo-xiv-7', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué pretendía el Estatuto de los Trabajadores inglés de 1351?',
      options: [
        'Repartir las tierras abandonadas entre los campesinos',
        'Congelar los salarios en niveles anteriores a la peste y penar el abandono del señorío por mejor paga',
        'Abolir la servidumbre para atraer mano de obra',
        'Financiar la guerra de los Cien Años con un impuesto nuevo',
      ],
      answer: 1,
      explanation: 'Fue la respuesta señorial a lo que el mercado de trabajo les quitaba. Se aplicó con desigual éxito y generó conflicto permanente.',
    },
    {
      id: 'crisis-siglo-xiv-8', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Quiénes fueron los Ciompi?',
      options: [
        'Los mercenarios de las compañías blancas en Italia',
        'Los flagelantes que recorrieron el Imperio en 1349',
        'Obreros del textil florentino sin gremio propio, que ocuparon el gobierno de la ciudad seis semanas en 1378',
        'Los campesinos catalanes sujetos a malos usos señoriales',
      ],
      answer: 2,
      explanation: 'Su revuelta muestra que el conflicto no fue solo rural: también enfrentó a los oficios menores con el patriciado urbano.',
    },
    {
      id: 'crisis-siglo-xiv-9', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: 'Pese a ser aplastadas casi todas las revueltas, ¿por qué desapareció la servidumbre en Europa occidental?',
      options: [
        'Porque los reyes la abolieron por decreto general',
        'Porque retener por la fuerza a una mano de obra escasa resultaba caro e inaplicable cuando el señor vecino ofrecía mejores condiciones',
        'Porque la Iglesia la declaró pecado en Constanza',
        'Porque los campesinos compraron su libertad con oro americano',
      ],
      answer: 1,
      explanation: 'El resultado a largo plazo favoreció a los campesinos occidentales por presión de mercado, no por concesión política.',
    },
    {
      id: 'crisis-siglo-xiv-10', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué fue la «segunda servidumbre»?',
      options: [
        'El retorno de la esclavitud doméstica a las ciudades italianas',
        'El endurecimiento de la servidumbre en Francia durante la guerra de los Cien Años',
        'La reimplantación de la servidumbre al este del Elba, ligada a la exportación cerealista por el Báltico',
        'Un impuesto personal aplicado a los siervos liberados',
      ],
      answer: 2,
      explanation: 'Sobre la misma catástrofe demográfica, la nobleza de Prusia, Polonia, Bohemia y Hungría reforzó su control. Duró hasta el siglo XIX.',
    },
    {
      id: 'crisis-siglo-xiv-11', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué consecuencia institucional tuvo financiar la guerra de los Cien Años?',
      options: [
        'La desaparición de los parlamentos, sustituidos por consejos reales',
        'Impuestos regulares que hubo que negociar, lo que dio peso al Parlamento inglés y a los Estados Generales franceses',
        'La supresión de la nobleza como estamento fiscal',
        'La creación de un banco central en ambos reinos',
      ],
      answer: 1,
      explanation: 'En Inglaterra se consolidó la regla de que no hay impuesto sin aprobación parlamentaria; en Francia la *taille* acabó siendo permanente sin consentimiento periódico.',
    },
    {
      id: 'crisis-siglo-xiv-12', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué cambio militar erosionó la preeminencia social del caballero?',
      options: [
        'La prohibición eclesiástica de los torneos',
        'La sustitución de la caballería por la marina de guerra',
        'El arco largo, las picas, la artillería de pólvora y sobre todo las compañías permanentes pagadas por la corona',
        'El encarecimiento del hierro tras la peste',
      ],
      answer: 2,
      explanation: 'La hueste convocada por obligación vasallática deja paso al ejército contratado, y con ella pierde base el fundamento social de la nobleza militar.',
    },
    {
      id: 'crisis-siglo-xiv-13', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué doctrina permitió cerrar el Cisma de Occidente en Constanza?',
      options: [
        'El conciliarismo: el concilio general representa a la Iglesia y su autoridad supera a la del papa',
        'La infalibilidad pontificia',
        'El regalismo de las monarquías nacionales',
        'La teoría de las dos espadas de Bonifacio VIII',
      ],
      answer: 0,
      explanation: 'El papado desactivó después la doctrina, pero el episodio dejó formulada una idea de soberanía representativa que reaparecería en la política laica.',
    },
    {
      id: 'crisis-siglo-xiv-14', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Por qué es relevante el movimiento husita?',
      options: [
        'Porque restauró la unidad de la Iglesia',
        'Porque fue el primer movimiento de reforma religiosa que se sostuvo militarmente y arrancó concesiones, un siglo antes de Lutero',
        'Porque implantó el luteranismo en Bohemia',
        'Porque acabó con la guerra de los Cien Años',
      ],
      answer: 1,
      explanation: 'La ejecución de Hus en 1415, pese al salvoconducto imperial, desencadenó quince años de guerras en que ejércitos campesinos derrotaron a cruzadas imperiales.',
    },
    {
      id: 'crisis-siglo-xiv-15', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Qué demuestra el caso de Estrasburgo en febrero de 1349?',
      options: [
        'Que la Iglesia alentó los pogromos desde Aviñón',
        'Que la comunidad judía fue quemada antes de que la peste llegara a la ciudad: la violencia se anticipó al contagio',
        'Que los pogromos solo se produjeron donde la mortalidad fue mayor',
        'Que las acusaciones de envenenamiento se probaron judicialmente',
      ],
      answer: 1,
      explanation: 'Clemente VI publicó bulas desmintiendo la acusación de envenenar los pozos. Muchos supervivientes emigraron al este de Europa y redibujaron el mapa del judaísmo europeo.',
    },
    {
      id: 'crisis-siglo-xiv-16', era: 'Edad Media', topicId: 'crisis-siglo-xiv', topic: 'Crisis bajomedieval',
      question: '¿Por qué se usa hoy con reservas la palabra «crisis» para este periodo?',
      options: [
        'Porque la mortalidad fue mucho menor de lo que se creía',
        'Porque no hubo guerras significativas',
        'Porque describe el trauma pero no la salida: los supervivientes del noroeste europeo alcanzaron salarios reales, dieta y libertad jurídica sin precedentes',
        'Porque el término es un anacronismo del siglo XX sin uso académico',
      ],
      answer: 2,
      explanation: 'El mismo siglo produjo la pintura al óleo, la carabela, el reloj mecánico público y, hacia 1450, la imprenta. No es una cultura agotada: es una cultura bajo presión.',
    },
  ],
}
