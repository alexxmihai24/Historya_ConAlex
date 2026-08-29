import type { TopicModule } from '../types'

export const revolucionRusa: TopicModule = {
  topic: {
    id: 'revolucion-rusa',
    era: 'Edad Contemporánea',
    title: 'Revolución rusa y URSS',
    years: '1905–1953',
    country: 'Rusia',
    description: 'Del hundimiento del zarismo al Estado estalinista: cómo un partido minoritario tomó el poder y qué construyó con él.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '☭',
    color: 'red',
    summary:
      'En febrero de 1917 el régimen que había gobernado Rusia durante tres siglos se hundió en cinco días sin que ningún partido lo derribase. En octubre, un partido que en enero apenas contaba con veinticuatro mil militantes tomó el poder en la capital y lo conservó durante setenta y cuatro años. Entre ambas fechas hay una crisis de guerra, un doble poder que no gobernaba y una radicalización social que los bolcheviques leyeron mejor que nadie. Lo que vino después no estaba escrito: guerra civil, terror, un giro de 1928 que colectivizó el campo por la fuerza y una industrialización que convirtió a un país agrario en la potencia que detuvo a la Wehrmacht, al precio de millones de muertos. La apertura de los archivos soviéticos desde 1991 no ha cerrado el debate, pero ha cambiado las cifras y ha desplazado las preguntas.',
    keyDates: [
      { date: '9 de enero de 1905', event: 'Domingo sangriento: la guardia dispara contra una manifestación pacífica que llevaba una petición al zar.' },
      { date: 'Octubre de 1905', event: 'Huelga general, primer sóviet de Petersburgo y Manifiesto de Octubre con la promesa de una Duma.' },
      { date: '1906–1911', event: 'Reformas agrarias de Stolypin: propiedad individual campesina frente a la comuna rural.' },
      { date: 'Febrero de 1917', event: 'Manifestaciones por el pan en Petrogrado, motín de la guarnición y abdicación de Nicolás II.' },
      { date: 'Abril de 1917', event: 'Tesis de Abril: Lenin rechaza apoyar al gobierno provisional y pide todo el poder para los sóviets.' },
      { date: '25 de octubre de 1917', event: 'El Comité Militar Revolucionario toma los puntos clave de Petrogrado. Decretos sobre la paz y sobre la tierra.' },
      { date: 'Enero de 1918', event: 'Disolución por la fuerza de la Asamblea Constituyente, donde los socialistas revolucionarios tenían mayoría.' },
      { date: '1918–1921', event: 'Guerra civil, comunismo de guerra, terror rojo e intervención extranjera.' },
      { date: 'Marzo de 1921', event: 'Rebelión de Kronstadt y giro a la Nueva Política Económica.' },
      { date: 'Diciembre de 1922', event: 'Constitución de la Unión de Repúblicas Socialistas Soviéticas.' },
      { date: '1928–1932', event: 'Primer plan quinquenal, colectivización forzosa y dekulakización.' },
      { date: '1932–1933', event: 'Hambruna en Ucrania, Kazajistán y el Volga. Entre cinco y siete millones de muertos.' },
      { date: '1936–1938', event: 'Gran Terror: procesos de Moscú, operaciones de masas y casi setecientas mil ejecuciones.' },
      { date: '1941–1945', event: 'Guerra contra Alemania. La URSS sufre unos veintisiete millones de muertos y sale como superpotencia.' },
    ],
    sections: [
      {
        title: 'El zarismo y el ensayo de 1905',
        body: [
          'A comienzos del siglo XX Rusia era una autocracia sin parlamento, con una policía política, una Iglesia de Estado y un zar que gobernaba por derecho divino. También era el quinto productor industrial del mundo, con fábricas enormes y modernas concentradas en pocas ciudades, financiadas con capital francés y belga y levantadas por una política deliberada de Serguéi Witte. Esa combinación de política arcaica y economía acelerada es el punto de partida de todo lo demás.',
          'El campo era el problema mayor. La emancipación de 1861 había liberado a los siervos endeudándolos con pagos de redención y dejando la tierra en manos de la comuna, el mir, que redistribuía parcelas y bloqueaba la mejora. Con una población que crecía deprisa, la aspiración campesina era simple y absoluta: toda la tierra para quien la trabaja. Ningún gobierno la satisfizo hasta que lo hizo un decreto de 1917 que se limitó a legalizar lo que los campesinos ya estaban haciendo.',
          'La derrota frente a Japón en 1905 desencadenó la primera revolución. El domingo sangriento de enero rompió el vínculo simbólico entre el zar y el pueblo; siguieron huelgas, motines, un consejo obrero en Petersburgo que inventó la forma sóviet y una huelga general en octubre. Nicolás II cedió con el Manifiesto de Octubre, que prometía libertades y una Duma electiva, y recuperó el terreno en cuanto pasó el peligro: las leyes fundamentales de 1906 reservaban al zar el gobierno y la ley electoral de 1907 recortó el sufragio.',
          'Piotr Stolypin combinó represión y reforma. Su apuesta agraria buscaba crear una clase de propietarios campesinos que sostuviera el régimen, disolviendo la comuna y favoreciendo la parcela individual. Necesitaba, como él mismo dijo, veinte años de calma. Tuvo siete y un asesinato en 1911. En 1914 el proceso estaba a medias y había producido tanto propietarios nuevos como resentimiento comunal.',
          'La guerra hizo el resto. Quince millones de movilizados, un transporte ferroviario colapsado, una inflación que devoraba salarios, ciudades sin pan pese a que había grano en el campo y una corte desacreditada por Rasputín y por la decisión del zar de asumir en persona el mando del ejército, que le hizo responsable directo de cada derrota.',
        ].join('\n\n'),
        callout:
          'El sóviet no lo inventó ningún partido: apareció en 1905 como comité de huelga elegido en las fábricas. En 1917 ya era una forma disponible que la gente sabía usar.',
      },
      {
        title: 'Febrero: un régimen que se cae solo',
        body: [
          'La revolución de febrero de 1917 empezó como una protesta por el pan en Petrogrado, el 23 de febrero del calendario juliano, jornada internacional de la mujer trabajadora. En cuatro días las huelgas se generalizaron, y el hecho decisivo fue que la guarnición de la capital, formada por reclutas que temían ser enviados al frente, se negó a disparar y se pasó a los manifestantes. Sin ejército obediente, la autocracia dejó de existir. Nicolás II abdicó el 2 de marzo, su hermano rehusó la corona y tres siglos de dinastía terminaron sin que ningún partido revolucionario hubiera dirigido nada.',
          'Lo que surgió fue un doble poder. Por un lado el gobierno provisional, formado por diputados liberales de la Duma, con legitimidad legal y ningún control sobre la calle. Por otro el sóviet de Petrogrado, elegido en fábricas y regimientos, con autoridad real y una dirección menchevique y socialista revolucionaria que no quería gobernar por convicción teórica: consideraba que a una revolución burguesa le correspondía un gobierno burgués.',
          'La Orden número 1 del sóviet, de marzo, ilustra el reparto: instruía a las unidades a obedecer al gobierno solo si sus órdenes no contradecían las del sóviet, y a elegir comités de soldados. Fue la mayor transferencia de autoridad del año y desmontó la disciplina del ejército desde abajo.',
          'El gobierno provisional acumuló decisiones aplazadas y una que no podía aplazar: continuar la guerra. Mantuvo los compromisos con los aliados, lanzó la ofensiva de junio, que fracasó, y remitió a una futura Asamblea Constituyente la reforma agraria que los campesinos ya estaban ejecutando por su cuenta. Cada aplazamiento erosionaba su base.',
          'El intento de golpe del general Kornílov en agosto liquidó lo que quedaba. Kerenski tuvo que armar a los obreros de Petrogrado y liberar a bolcheviques presos para frenarlo; el golpe se deshizo por la resistencia ferroviaria y telegráfica, pero el gobierno quedó como cómplice ante la izquierda y como traidor ante la derecha. En septiembre los bolcheviques tenían mayoría en los sóviets de Petrogrado y Moscú.',
        ].join('\n\n'),
      },
      {
        title: 'Octubre y la pregunta sobre su naturaleza',
        body: [
          'Lenin volvió del exilio en abril y rompió con la línea de su propio partido en las Tesis de Abril: ningún apoyo al gobierno provisional, todo el poder a los sóviets, paz inmediata, tierra a los campesinos y control obrero. La consigna era simple, coincidía con lo que la gente reclamaba y colocaba a los bolcheviques como única fuerza que no compartía responsabilidad de gobierno.',
          'La toma del poder, el 25 de octubre, la ejecutó el Comité Militar Revolucionario del sóviet de Petrogrado, dirigido por Trotski, con unidades que ocuparon estaciones, centrales telefónicas, puentes y finalmente el Palacio de Invierno. Hubo pocos muertos y poca resistencia. El Congreso de los Sóviets, reunido esa noche, ratificó el hecho consumado y aprobó los decretos sobre la paz y sobre la tierra mientras mencheviques y socialistas revolucionarios de derecha abandonaban la sala.',
          'De ahí arranca el debate más viejo del tema. Richard Pipes sostuvo que fue un golpe de Estado de una minoría conspirativa, ejecutado con maestría técnica y sin mandato popular, y que la violencia posterior estaba contenida en esa ilegitimidad de origen. Alexander Rabinowitch respondió con un estudio detallado de las organizaciones de base bolcheviques en Petrogrado que muestra un partido menos monolítico y mucho más receptivo a la presión de sus militantes y de los comités de fábrica.',
          'La historiografía social ha reforzado la segunda lectura sin negar la primera. Steve Smith y Diane Koenker documentaron la radicalización autónoma de obreros y soldados a lo largo de 1917: los bolcheviques crecieron porque su programa coincidió con demandas que ya existían. Orlando Figes concilia ambos planos: hubo una revolución social profunda y hubo, dentro de ella, una toma del poder minoritaria que se impuso a las demás fuerzas socialistas.',
          'La prueba llegó en enero de 1918. Las elecciones a la Asamblea Constituyente, las únicas verdaderamente libres de la Rusia moderna, dieron alrededor del cuarenta por ciento a los socialistas revolucionarios y en torno al veinticuatro por ciento a los bolcheviques. La Asamblea se reunió un día y fue disuelta por la guardia. Ese acto define el régimen que se estaba construyendo mejor que cualquier declaración de principios.',
        ].join('\n\n'),
        callout:
          'Los bolcheviques ganaron los sóviets urbanos y perdieron las elecciones generales: el campo votó socialista revolucionario. Disolver la Asamblea fue la consecuencia lógica de ese desajuste.',
      },
      {
        title: 'Guerra civil, terror y el repliegue de la NEP',
        body: [
          'La guerra civil de 1918 a 1921 enfrentó al Ejército Rojo, organizado por Trotski con oficiales zaristas vigilados por comisarios, con unos ejércitos blancos desunidos, apoyados por catorce potencias extranjeras y sin programa agrario que ofrecer al campesinado. Hubo además ejércitos verdes campesinos que combatieron a ambos. Los rojos ganaron por control del centro industrial y ferroviario, por unidad de mando y porque devolver la tierra a los terratenientes, que era lo que los blancos representaban, resultaba inaceptable para la mayoría rural.',
          'El terror fue instrumento explícito. La Checa, creada en diciembre de 1917, recibió tras el atentado contra Lenin de 1918 la orden de un terror rojo sistemático con rehenes, ejecuciones sumarias y campos de concentración. El terror blanco fue igualmente brutal y añadió pogromos que mataron a decenas de miles de judíos en Ucrania. La diferencia decisiva no fue la crueldad sino que uno de los dos bandos institucionalizó la suya y la conservó al ganar.',
          'El comunismo de guerra nacionalizó la industria, suprimió el mercado, militarizó el trabajo y requisó el grano campesino mediante destacamentos armados. Combinado con la sequía, produjo la hambruna de 1921 y 1922, con unos cinco millones de muertos y una operación internacional de socorro dirigida por Herbert Hoover. Los campesinos respondieron sembrando menos y rebelándose: Tambov fue una guerra en toda regla.',
          'La rebelión de Kronstadt, en marzo de 1921, fue el aviso definitivo, porque la protagonizaron marinos que habían sido el orgullo de 1917 y que pedían sóviets sin bolcheviques. Fue aplastada sobre el hielo, y a la vez aceptada en sustancia: el mismo congreso del partido aprobó la Nueva Política Económica, que sustituyó la requisa por un impuesto en especie y devolvió al mercado el comercio minorista y la pequeña industria.',
          'La NEP funcionó económicamente y creó una contradicción política. La producción agraria se recuperó, aparecieron comerciantes privados y campesinos acomodados, y una parte del partido vio en ello una restauración capitalista. El mismo congreso que la aprobó prohibió las fracciones dentro del partido, de modo que el debate interno quedó cerrado justo cuando más falta hacía. Esa combinación explica buena parte de lo que ocurrió tras la muerte de Lenin en 1924.',
        ].join('\n\n'),
      },
      {
        title: 'El gran giro: colectivización, planes y terror',
        body: [
          'Stalin llegó al poder desde la secretaría general, un cargo administrativo que controlaba los nombramientos, y ganó la sucesión aliándose sucesivamente con unos y otros: primero contra Trotski con la doctrina del socialismo en un solo país, después contra Zinóviev y Kámenev, y finalmente contra Bujarin y los partidarios de prolongar la NEP. La cuestión de fondo era de dónde saldrían los recursos para industrializar un país agrario y cercado.',
          'La respuesta fue el gran giro de 1928. El primer plan quinquenal fijó objetivos industriales desmesurados y la colectivización forzosa del campo debía garantizar el grano para alimentar ciudades y exportar. Entre 1929 y 1933 la práctica totalidad del campesinado fue integrada en koljoses, y la dekulakización deportó a millones de personas clasificadas como campesinos acomodados. Lynne Viola ha documentado la resistencia masiva que provocó: sabotajes, matanza de ganado, motines y revueltas de mujeres.',
          'El resultado inmediato fue una hambruna en 1932 y 1933 con entre cinco y siete millones de muertos en Ucrania, Kazajistán, el Volga y el Cáucaso norte. Si aquello fue un genocidio dirigido contra los ucranianos, el Holodomor, es una de las discusiones más cargadas de la historiografía. Robert Conquest, Anne Applebaum y Timothy Snyder subrayan las medidas específicas contra Ucrania, como el cierre de fronteras a los campesinos hambrientos y las listas negras de aldeas. R. W. Davies y Stephen Wheatcroft, trabajando sobre los archivos de planificación, sostienen que fue el resultado catastrófico de una política de requisas aplicada con brutalidad en todo el país. Los dos lados coinciden en que fue evitable y en que las decisiones que la agravaron están documentadas.',
          'La industrialización sí alcanzó buena parte de sus objetivos. Se levantaron complejos enteros como Magnitogorsk, la producción de acero, carbón y maquinaria se multiplicó, el desempleo desapareció y millones de campesinos se convirtieron en obreros urbanos con acceso a alfabetización y promoción. Stephen Kotkin ha descrito esa experiencia como una civilización con su propio lenguaje y sus formas de vida, en la que la gente aprendía a hablar bolchevique para moverse dentro del sistema, sin que eso implique adhesión ni pura simulación.',
          'El Gran Terror de 1936 a 1938 combinó los procesos públicos contra la vieja guardia bolchevique con operaciones de masas mucho menos conocidas y mucho más letales, dirigidas por cuotas contra antiguos kulaks, clérigos, criminales y minorías nacionales, sobre todo polacos y alemanes. Los archivos dan una cifra de en torno a seiscientas ochenta mil ejecuciones en dos años y alrededor de un millón trescientos mil condenas. El Gulag llegó a albergar a más de dos millones de presos a la vez, con una mortalidad que se disparó durante la guerra.',
        ].join('\n\n'),
        callout:
          'Los procesos de Moscú fueron la parte visible. Las operaciones de masas por cuotas, dirigidas contra categorías enteras de población, mataron a muchísima más gente y no se conocieron hasta la apertura de los archivos.',
      },
      {
        title: 'Balance de un experimento',
        body: [
          'La apertura de los archivos desde 1991 zanjó algunas cuestiones y abrió otras. Zanjó las cifras: las estimaciones máximas de la guerra fría, que llegaban a hablar de veinte millones de muertos solo en el Gulag, no se sostienen, y las cifras documentadas siguen siendo enormes. Abrió, en cambio, el problema de cómo funcionaba realmente el sistema, con denuncias vecinales, iniciativa local, cuotas regionales sobrecumplidas y una implicación social mucho más amplia que la de una simple maquinaria descendente.',
          'De ahí la discusión entre el modelo totalitario clásico, que explica el estalinismo por la voluntad de un aparato y de un dictador, y la corriente revisionista de Sheila Fitzpatrick y J. Arch Getty, que estudia la sociedad soviética desde abajo, con sus conflictos, oportunidades y estrategias de supervivencia. La caricatura de que los revisionistas minimizan la represión no resiste la lectura de sus obras; su aportación fue mostrar que un régimen puede ser a la vez extremadamente violento y socialmente enraizado.',
          'La otra pregunta larga es la de la continuidad. Para Pipes y Martin Malia el estalinismo estaba contenido en el leninismo: partido único, terror institucionalizado, supresión de la oposición socialista y del pluralismo dentro del partido. Para Moshe Lewin y Stephen Cohen fue una ruptura producida por la guerra civil, el atraso del campo y la derrota de la alternativa de Bujarin. La discusión permanece abierta porque ambas describen tramos distintos de un mismo camino.',
          'El balance material es contradictorio y hay que sostener las dos mitades. La URSS pasó de país agrario a segunda potencia industrial, alfabetizó a la práctica totalidad de la población, extendió la sanidad, promovió a millones de personas de origen campesino y dio a las mujeres acceso masivo a la educación y al empleo cualificado, aunque sin tocar el reparto doméstico. Con esa base ganó la guerra en el frente que decidió el conflicto en Europa, con veintisiete millones de muertos.',
          'Y todo eso se hizo con un coste que ningún balance puede compensar aritméticamente: millones de muertos por hambre, deportaciones de pueblos enteros, un archipiélago de campos, la eliminación física de la mayoría de los revolucionarios de 1917 y la clausura de cualquier debate. El modelo se exportó después a media Europa y a China, y su descrédito posterior explica buena parte de la política del siglo XX. El discurso secreto de Jruschov en 1956 abrió la primera grieta desde dentro, y con ella empezó otra historia.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Autocracia', definition: 'Sistema zarista sin parlamento ni responsabilidad ministerial. La Duma de 1906 lo limitó en el papel y muy poco en la práctica.' },
      { term: 'Mir', definition: 'Comuna campesina que repartía periódicamente la tierra entre sus miembros. Stolypin trató de disolverla para crear propietarios individuales.' },
      { term: 'Sóviet', definition: 'Consejo elegido en fábricas, regimientos y aldeas. Aparece en 1905 como comité de huelga y en 1917 es la forma organizativa disponible.' },
      { term: 'Doble poder', definition: 'Coexistencia entre febrero y octubre de 1917 del gobierno provisional, con legitimidad legal, y del sóviet de Petrogrado, con autoridad real.' },
      { term: 'Orden número 1', definition: 'Disposición del sóviet de marzo de 1917: obediencia al gobierno solo si no contradice al sóviet, y elección de comités de soldados.' },
      { term: 'Tesis de Abril', definition: 'Programa de Lenin de 1917: ningún apoyo al gobierno provisional, todo el poder a los sóviets, paz, tierra y control obrero.' },
      { term: 'Asamblea Constituyente', definition: 'Parlamento elegido en las únicas elecciones libres de la Rusia moderna, con mayoría socialista revolucionaria. Disuelta por la fuerza en enero de 1918.' },
      { term: 'Comunismo de guerra', definition: 'Nacionalización total, supresión del mercado, militarización del trabajo y requisa del grano entre 1918 y 1921.' },
      { term: 'Checa', definition: 'Policía política creada en diciembre de 1917. Ejecutó el terror rojo con rehenes, ejecuciones sumarias y los primeros campos.' },
      { term: 'NEP', definition: 'Nueva Política Económica de 1921: impuesto en especie en lugar de requisa y vuelta del mercado en el comercio minorista y la pequeña industria.' },
      { term: 'Socialismo en un solo país', definition: 'Doctrina defendida por Stalin frente a la revolución permanente de Trotski: construir el socialismo en la URSS sin esperar a la revolución mundial.' },
      { term: 'Dekulakización', definition: 'Deportación y desposesión de los campesinos clasificados como acomodados durante la colectivización de 1929 a 1933.' },
      { term: 'Holodomor', definition: 'Nombre ucraniano de la hambruna de 1932-1933. Su calificación como genocidio dirigido contra Ucrania es objeto de debate historiográfico y político.' },
      { term: 'Operaciones de masas', definition: 'Fase menos visible y más letal del Gran Terror: detenciones y ejecuciones por cuotas contra categorías sociales y minorías nacionales enteras.' },
    ],
    debates: [
      {
        question: '¿Fue Octubre una revolución o un golpe de Estado?',
        positions: [
          {
            school: 'Golpe de una minoría (Pipes, 1990)',
            argument:
              'Una organización conspirativa tomó el poder con precisión técnica y sin mandato popular, como demuestra que disolviera la Asamblea Constituyente en cuanto perdió las elecciones.',
          },
          {
            school: 'Revolución desde abajo (Rabinowitch, 1976; Smith)',
            argument:
              'Los bolcheviques crecieron porque su programa coincidía con demandas ya existentes de obreros y soldados, y el partido era mucho menos monolítico y más permeable a su base de lo que sugiere la imagen conspirativa.',
          },
          {
            school: 'Ambas cosas (Figes, 1996)',
            argument:
              'Hubo una revolución social profunda en el campo y en las fábricas, y dentro de ella una toma minoritaria del poder que se impuso al resto de las fuerzas socialistas.',
          },
        ],
        state:
          'La historiografía social ha desplazado la versión puramente conspirativa, sin borrar el hecho de que el poder se tomó y se conservó contra el resultado de las urnas.',
      },
      {
        question: '¿Estaba el estalinismo contenido en el leninismo?',
        positions: [
          {
            school: 'Continuidad (Pipes, Malia)',
            argument:
              'Partido único, terror institucionalizado, supresión de los demás partidos socialistas y prohibición de fracciones internas en 1921 son obra de Lenin. Stalin desarrolló un aparato que ya existía.',
          },
          {
            school: 'Ruptura circunstancial (Lewin, Cohen)',
            argument:
              'La guerra civil, el atraso del campo y el aislamiento internacional deformaron el proyecto. La alternativa de Bujarin, gradual y basada en la NEP, era viable y fue derrotada políticamente.',
          },
          {
            school: 'Civilización y práctica (Kotkin, 1995)',
            argument:
              'La pregunta genealógica importa menos que entender cómo se vivía y se hablaba dentro del sistema: el estalinismo fue una forma de vida con su lenguaje y sus reglas de ascenso.',
          },
        ],
        state:
          'Sigue abierta porque cada posición describe un tramo distinto del mismo proceso. Los archivos han reforzado la atención a la práctica cotidiana más que a la genealogía doctrinal.',
      },
      {
        question: '¿Fue la hambruna de 1932-1933 un genocidio?',
        positions: [
          {
            school: 'Genocidio nacional (Conquest, 1986; Applebaum, 2017; Snyder, 2010)',
            argument:
              'Hubo medidas específicas contra Ucrania: cierre de fronteras a los campesinos que huían, listas negras de aldeas, requisas intensificadas y represión simultánea de la élite cultural ucraniana.',
          },
          {
            school: 'Catástrofe de una política general (Davies y Wheatcroft, 2004)',
            argument:
              'Los archivos de planificación muestran una política de requisas aplicada con brutalidad en todo el territorio, con hambrunas también en Kazajistán y el Volga, y sin un plan de exterminio nacional documentado.',
          },
        ],
        state:
          'Ambas posiciones coinciden en que fue evitable y en que las decisiones que la agravaron están documentadas. La discrepancia es sobre la intención y sobre la aplicación de la categoría jurídica de genocidio, y tiene además una dimensión política actual.',
      },
    ],
    sources: [
      { author: 'Nicolás II', title: 'Manifiesto de Octubre', year: '1905', kind: 'primaria', note: 'Concesión de libertades y de una Duma bajo presión de la huelga general. Recortada en cuanto pasó el peligro.' },
      { author: 'Sóviet de Petrogrado', title: 'Orden número 1', year: '1917', kind: 'primaria', note: 'Comités de soldados y obediencia condicionada al gobierno. La mayor transferencia de autoridad de 1917.' },
      { author: 'V. I. Lenin', title: 'Tesis de Abril', year: '1917', kind: 'primaria', note: 'Ruptura con la línea de su propio partido y programa que define la posición bolchevique hasta octubre.' },
      { author: 'Congreso de los Sóviets', title: 'Decreto sobre la paz y decreto sobre la tierra', year: '1917', kind: 'primaria', note: 'El decreto agrario legalizó el reparto que los campesinos ya estaban ejecutando por su cuenta.' },
      { author: 'John Reed', title: 'Diez días que estremecieron el mundo', year: '1919', kind: 'primaria', note: 'Crónica de un testigo comprometido. Fuente vívida y parcial, útil leída como tal.' },
      { author: 'V. I. Lenin', title: 'Carta al congreso, llamada testamento', year: '1922–1923', kind: 'primaria', note: 'Retratos críticos de sus posibles sucesores y petición de destituir a Stalin de la secretaría general.' },
      { author: 'Emma Goldman', title: 'My Disillusionment in Russia', year: '1923', kind: 'primaria', note: 'Crítica anarquista escrita desde dentro tras Kronstadt. Contrapunto revolucionario al régimen.' },
      { author: 'León Trotski', title: 'Historia de la Revolución rusa', year: '1930', kind: 'primaria', note: 'Relato del principal organizador de Octubre, escrito ya en el exilio y contra Stalin.' },
      { author: 'URSS', title: 'Constitución de 1936', year: '1936', kind: 'primaria', note: 'Texto formalmente garantista aprobado en vísperas del Gran Terror. Documento clave sobre la distancia entre norma y práctica.' },
      { author: 'Nikita Jruschov', title: 'Discurso secreto ante el XX Congreso', year: '1956', kind: 'primaria', note: 'Primera denuncia oficial del culto a la personalidad y de la represión, desde dentro del propio sistema.' },
      { author: 'Nadiezhda Mandelstam', title: 'Contra toda esperanza', year: '1970', kind: 'primaria', note: 'Memoria del terror desde la vida cotidiana de una familia perseguida.' },
      { author: 'Alexandr Solzhenitsyn', title: 'Archipiélago Gulag', year: '1973', kind: 'primaria', note: 'Reconstrucción del sistema de campos a partir de testimonios. Documento moral decisivo y no una estadística fiable.' },
      { author: 'Robert Conquest', title: 'El gran terror', year: '1968', kind: 'estudio', note: 'Primera síntesis de la represión de los años treinta sin acceso a archivos. Sus cifras máximas se han corregido; su cuadro general resistió.' },
      { author: 'Alexander Rabinowitch', title: 'The Bolsheviks Come to Power', year: '1976', kind: 'estudio', note: 'Estudio de las organizaciones bolcheviques de Petrogrado que desmonta la imagen de un partido monolítico.' },
      { author: 'Sheila Fitzpatrick', title: 'La Revolución rusa', year: '1982', kind: 'estudio', note: 'Síntesis revisionista que trata 1917-1938 como un solo proceso y atiende a la movilidad social.' },
      { author: 'Robert Conquest', title: 'The Harvest of Sorrow', year: '1986', kind: 'estudio', note: 'Formula la tesis del hambre como arma dirigida contra el campesinado ucraniano.' },
      { author: 'Richard Pipes', title: 'La Revolución rusa', year: '1990', kind: 'estudio', note: 'Interpretación de Octubre como golpe minoritario y del terror como consecuencia de esa ilegitimidad de origen.' },
      { author: 'Stephen Kotkin', title: 'Magnetic Mountain', year: '1995', kind: 'estudio', note: 'Magnitogorsk como microcosmos: el estalinismo como civilización y como lenguaje que había que aprender.' },
      { author: 'Orlando Figes', title: 'La revolución rusa: la tragedia de un pueblo', year: '1996', kind: 'estudio', note: 'Narración amplia que integra la revolución social y la toma minoritaria del poder.' },
      { author: 'Lynne Viola', title: 'Peasant Rebels under Stalin', year: '1996', kind: 'estudio', note: 'Documenta la resistencia campesina masiva a la colectivización, incluidas las revueltas de mujeres.' },
      { author: 'J. Arch Getty y Oleg Naumov', title: 'The Road to Terror', year: '1999', kind: 'estudio', note: 'Documentos internos del partido sobre la mecánica de la represión y su dinámica burocrática.' },
      { author: 'R. W. Davies y Stephen Wheatcroft', title: 'The Years of Hunger', year: '2004', kind: 'estudio', note: 'Reconstrucción archivística de la hambruna a partir de los datos de planificación y acopio.' },
      { author: 'Timothy Snyder', title: 'Tierras de sangre', year: '2010', kind: 'estudio', note: 'Sitúa la hambruna y el terror en el marco común de las violencias de masas en Europa oriental.' },
      { author: 'S. A. Smith', title: 'Russia in Revolution', year: '2017', kind: 'estudio', note: 'Síntesis actual de 1890 a 1928 con el estado de la cuestión tras tres décadas de archivos abiertos.' },
    ],
  },
  questions: [
    {
      id: 'revolucion-rusa-1', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué fue el mir en la Rusia anterior a 1917?',
      options: [
        'El parlamento electivo concedido en 1905',
        'La comuna campesina que repartía periódicamente la tierra entre sus miembros',
        'La policía política del régimen zarista',
        'El sindicato de los obreros metalúrgicos de Petrogrado',
      ],
      answer: 1,
      explanation: 'Bloqueaba la mejora individual y sostenía la aspiración colectiva a la tierra. Stolypin trató de disolverla para crear propietarios que apoyaran al régimen.',
    },
    {
      id: 'revolucion-rusa-2', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Cuál fue la novedad organizativa aparecida en la revolución de 1905?',
      options: [
        'El partido bolchevique',
        'La Duma imperial',
        'El sóviet, consejo elegido en las fábricas',
        'El koljós agrícola',
      ],
      answer: 2,
      explanation: 'Nació como comité de huelga en Petersburgo. En 1917 ya era una forma disponible que obreros y soldados sabían usar sin que nadie la impusiera.',
    },
    {
      id: 'revolucion-rusa-3', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué hecho resultó decisivo para el triunfo de la revolución de febrero de 1917?',
      options: [
        'La llegada de Lenin a Petrogrado',
        'La negativa de la guarnición de Petrogrado a disparar contra los manifestantes',
        'La derrota militar en la ofensiva de junio',
        'La disolución de la Duma por el zar',
      ],
      answer: 1,
      explanation: 'Sin ejército obediente la autocracia dejó de existir. Ningún partido revolucionario dirigió esas jornadas.',
    },
    {
      id: 'revolucion-rusa-4', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿En qué consistía el doble poder entre febrero y octubre de 1917?',
      options: [
        'En el reparto de competencias entre el zar y la Duma',
        'En la coexistencia del gobierno provisional, con legitimidad legal, y el sóviet de Petrogrado, con autoridad real',
        'En la división del país entre zonas rojas y blancas',
        'En el gobierno conjunto de bolcheviques y mencheviques',
      ],
      answer: 1,
      explanation: 'La dirección menchevique y socialista revolucionaria del sóviet no quería gobernar: sostenía que a una revolución burguesa le tocaba un gobierno burgués.',
    },
    {
      id: 'revolucion-rusa-5', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué establecía la Orden número 1 del sóviet de Petrogrado?',
      options: [
        'La nacionalización inmediata de la banca',
        'La salida de Rusia de la guerra sin condiciones',
        'La obediencia al gobierno solo si no contradecía al sóviet, y la elección de comités de soldados',
        'La convocatoria inmediata de la Asamblea Constituyente',
      ],
      answer: 2,
      explanation: 'Fue la mayor transferencia de autoridad del año: desmontó la disciplina del ejército desde abajo.',
    },
    {
      id: 'revolucion-rusa-6', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué proponía Lenin en las Tesis de Abril?',
      options: [
        'Apoyo crítico al gobierno provisional hasta la Asamblea Constituyente',
        'Ningún apoyo al gobierno, todo el poder a los sóviets, paz, tierra y control obrero',
        'La colectivización inmediata de la agricultura',
        'Una coalición de todos los partidos socialistas',
      ],
      answer: 1,
      explanation: 'Rompía con la línea de su propio partido y dejaba a los bolcheviques como la única fuerza sin responsabilidad de gobierno.',
    },
    {
      id: 'revolucion-rusa-7', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué consecuencia tuvo el intento de golpe de Kornílov en agosto de 1917?',
      options: [
        'Consolidó a Kerenski como árbitro entre la derecha y la izquierda',
        'Obligó a armar a los obreros de Petrogrado y dejó al gobierno desacreditado ante ambos lados',
        'Provocó la salida inmediata de Rusia de la guerra',
        'Restauró la disciplina en el ejército del frente',
      ],
      answer: 1,
      explanation: 'En septiembre los bolcheviques ya tenían mayoría en los sóviets de Petrogrado y Moscú.',
    },
    {
      id: 'revolucion-rusa-8', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué resultado dieron las elecciones a la Asamblea Constituyente de noviembre de 1917?',
      options: [
        'Mayoría absoluta bolchevique',
        'Empate entre bolcheviques y mencheviques',
        'Mayoría socialista revolucionaria, con los bolcheviques en torno a la cuarta parte de los votos',
        'Mayoría de los partidos liberales',
      ],
      answer: 2,
      explanation: 'Fueron las únicas elecciones verdaderamente libres de la Rusia moderna. La Asamblea se reunió un día y fue disuelta por la guardia.',
    },
    {
      id: 'revolucion-rusa-9', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Por qué ganaron los rojos la guerra civil?',
      options: [
        'Por su superioridad numérica y armamentística desde el primer momento',
        'Por el apoyo militar de las potencias occidentales',
        'Por controlar el centro industrial y ferroviario, tener unidad de mando y porque los blancos no ofrecían nada al campesinado',
        'Porque los ejércitos verdes campesinos combatieron a su lado',
      ],
      answer: 2,
      explanation: 'Devolver la tierra a los terratenientes, que era lo que los blancos representaban, resultaba inaceptable para la mayoría rural.',
    },
    {
      id: 'revolucion-rusa-10', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué caracterizó al comunismo de guerra de 1918-1921?',
      options: [
        'La sustitución de la requisa por un impuesto en especie',
        'La nacionalización total, la supresión del mercado y la requisa armada del grano',
        'La apertura al capital extranjero para reconstruir la industria',
        'La entrega de las fábricas a cooperativas obreras autónomas',
      ],
      answer: 1,
      explanation: 'Combinado con la sequía produjo la hambruna de 1921 y 1922, con unos cinco millones de muertos.',
    },
    {
      id: 'revolucion-rusa-11', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué relación hubo entre Kronstadt y la NEP en 1921?',
      options: [
        'La rebelión fue aplastada y a la vez aceptada en sustancia: el mismo congreso aprobó el giro económico',
        'La NEP se aprobó para premiar la lealtad de los marinos de Kronstadt',
        'La rebelión triunfó e impuso el fin del partido único',
        'No hubo ninguna relación entre ambos hechos',
      ],
      answer: 0,
      explanation: 'Los marinos pedían sóviets sin bolcheviques. Ese mismo congreso prohibió además las fracciones dentro del partido.',
    },
    {
      id: 'revolucion-rusa-12', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Desde qué posición construyó Stalin su poder?',
      options: [
        'Desde el mando del Ejército Rojo',
        'Desde la dirección de la Internacional Comunista',
        'Desde la secretaría general, un cargo administrativo que controlaba los nombramientos',
        'Desde la presidencia del sóviet de Moscú',
      ],
      answer: 2,
      explanation: 'Ganó la sucesión aliándose sucesivamente contra Trotski, después contra Zinóviev y Kámenev y por último contra Bujarin.',
    },
    {
      id: 'revolucion-rusa-13', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué fue el gran giro de 1928?',
      options: [
        'La firma del pacto germano-soviético',
        'El abandono de la NEP por el plan quinquenal y la colectivización forzosa del campo',
        'La disolución de la Internacional Comunista',
        'La adopción de la Constitución de 1936',
      ],
      answer: 1,
      explanation: 'La cuestión de fondo era de dónde saldrían los recursos para industrializar un país agrario y aislado. La respuesta fue el grano campesino.',
    },
    {
      id: 'revolucion-rusa-14', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿En qué coinciden las dos posiciones del debate sobre la hambruna de 1932-1933?',
      options: [
        'En que fue consecuencia exclusiva de la sequía',
        'En que fue evitable y en que las decisiones que la agravaron están documentadas',
        'En que afectó solo a Ucrania',
        'En que las cifras de muertos son imposibles de estimar',
      ],
      answer: 1,
      explanation: 'La discrepancia entre Conquest o Applebaum y Davies o Wheatcroft es sobre la intención y sobre la aplicación de la categoría de genocidio.',
    },
    {
      id: 'revolucion-rusa-15', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué reveló la apertura de los archivos sobre el Gran Terror de 1936-1938?',
      options: [
        'Que los procesos de Moscú fueron el grueso de la represión',
        'Que las operaciones de masas por cuotas contra categorías sociales y nacionales enteras mataron a mucha más gente que los procesos públicos',
        'Que no hubo ejecuciones sistemáticas fuera del ejército',
        'Que las cifras de la guerra fría se quedaron muy cortas',
      ],
      answer: 1,
      explanation: 'Los archivos dan en torno a seiscientas ochenta mil ejecuciones en dos años. Las operaciones de masas no se conocieron hasta 1991.',
    },
    {
      id: 'revolucion-rusa-16', era: 'Edad Contemporánea', topicId: 'revolucion-rusa', topic: 'Revolución rusa',
      question: '¿Qué aportó la corriente revisionista de Fitzpatrick y Getty al estudio del estalinismo?',
      options: [
        'La demostración de que la represión fue muy inferior a lo denunciado',
        'El estudio de la sociedad desde abajo, mostrando que un régimen puede ser a la vez extremadamente violento y socialmente enraizado',
        'La tesis de que Stalin no controlaba el aparato del partido',
        'La atribución del terror exclusivamente a las autoridades locales',
      ],
      answer: 1,
      explanation: 'Denuncias vecinales, iniciativa local y cuotas regionales sobrecumplidas explican una implicación social mucho más amplia que la de una maquinaria puramente descendente.',
    },
  ],
}
