import type { TopicModule } from '../types.ts'

export const imperialismo: TopicModule = {
  topic: {
    id: 'imperialismo',
    era: 'Edad Contemporánea',
    title: 'Imperialismo y colonialismo',
    years: '1870–1914',
    country: 'Mundo',
    description: 'Cómo un puñado de Estados europeos pasó a administrar una cuarta parte del planeta en cuarenta años, con qué medios y con qué coartada.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⊕',
    color: 'blue',
    summary:
      'Entre 1870 y 1914 las potencias europeas, más Estados Unidos y Japón, sometieron a dominio formal alrededor de veinticinco millones de kilómetros cuadrados. No fue la primera expansión europea: hacía cuatro siglos que existían imperios atlánticos. Lo nuevo fue el ritmo, la escala y el paso del control indirecto mediante tratados comerciales a la administración directa con bandera, funcionarios y fronteras trazadas en Europa. Explicar ese salto ha ocupado a la historiografía durante un siglo, y ninguna de las respuestas clásicas resiste sola: ni el excedente de capital de Hobson y Lenin, ni la crisis periférica de Robinson y Gallagher, ni la política interior de Wehler. Lo que sí está fuera de discusión es el balance material, porque está documentado: hambrunas evitables, trabajo forzado, guerras de exterminio y una geografía política que sigue vigente.',
    keyDates: [
      { date: '1857–1858', event: 'La gran rebelión india acaba con la Compañía de las Indias Orientales; la Corona asume el gobierno directo.' },
      { date: '1869', event: 'Se abre el canal de Suez y Egipto pasa a ser una pieza estratégica de la ruta a la India.' },
      { date: '1882', event: 'Gran Bretaña ocupa Egipto tras la revuelta de Urabi. Prometió marcharse en unos meses; se quedó setenta años.' },
      { date: '1884–1885', event: 'Conferencia de Berlín: se fijan las reglas del reparto de África sin ningún africano presente.' },
      { date: '1885', event: 'Leopoldo II obtiene el Estado Libre del Congo como propiedad personal. Jules Ferry defiende la colonización ante la Cámara francesa.' },
      { date: '1896', event: 'Etiopía derrota a Italia en Adua: la única victoria africana que preserva un Estado independiente.' },
      { date: '1898', event: 'Omdurman y Fachoda. Guerra hispano-estadounidense: Cuba, Puerto Rico y Filipinas cambian de dueño.' },
      { date: '1899–1902', event: 'Guerra anglo-bóer. Campos de concentración para población civil y desgaste de la reputación imperial británica.' },
      { date: '1900', event: 'Rebelión de los bóxers en China y expedición punitiva de ocho potencias.' },
      { date: '1904', event: 'Informe de Roger Casement sobre las atrocidades del caucho en el Congo.' },
      { date: '1904–1908', event: 'Guerra contra los herero y los nama en el África del Sudoeste alemana, calificada hoy de genocidio.' },
      { date: '1905', event: 'Japón derrota a Rusia en Tsushima: por primera vez una potencia asiática vence a una europea en guerra abierta.' },
      { date: '1905–1907', event: 'Rebelión Maji Maji en el África oriental alemana, reprimida con hambre provocada.' },
      { date: '1908', event: 'Bélgica anexiona el Congo y pone fin al dominio personal de Leopoldo II.' },
    ],
    sections: [
      {
        title: 'Qué cambia hacia 1870',
        body: [
          'En 1800 Europa controlaba en torno al treinta y cinco por ciento de la superficie terrestre; en 1914 rondaba el ochenta y cinco por ciento si se cuentan las colonias, los protectorados y los dominios. La aceleración se concentra en cuatro décadas. Gran Bretaña sumó unos diez millones de kilómetros cuadrados, Francia unos nueve, y potencias sin tradición ultramarina como Alemania, Italia y Bélgica entraron en el reparto casi de golpe.',
          'Lo decisivo no fue solo la extensión sino el cambio de modalidad. Durante buena parte del siglo XIX Gran Bretaña había preferido lo que John Gallagher y Ronald Robinson llamaron en 1953 imperialismo del librecambio: dominio informal mediante tratados desiguales, préstamos, cañoneras y comerciantes, sin asumir el coste de administrar. La regla que ellos formularon es célebre: comercio informal si es posible, gobierno formal si es necesario. Lo que ocurre después de 1870 es que lo informal deja de bastar.',
          'Deja de bastar por tres razones convergentes. La primera es la competencia: cuando Alemania, Francia y Bélgica reclaman territorios, Gran Bretaña ya no puede confiar en que un mercado abierto siga abierto mañana, así que ocupa preventivamente. La segunda es el proteccionismo, que se generaliza tras la larga depresión de precios iniciada en 1873 y convierte la colonia en mercado reservado. La tercera es la inestabilidad en la propia periferia: sociedades africanas y asiáticas transformadas por décadas de comercio desigual entran en crisis, y la intervención se justifica como restablecimiento del orden.',
          'Conviene desconfiar de la palabra reparto, que sugiere una mesa donde se distribuye lo ya conocido. En 1884 los europeos ignoraban casi todo del interior africano y trazaron fronteras sobre mapas en blanco. Una parte sustancial de la ocupación real llegó después, negociada o impuesta sobre el terreno durante veinte años, y en muchos lugares el dominio efectivo no existió hasta el siglo XX.',
        ].join('\n\n'),
        callout:
          'La regla de Gallagher y Robinson: comercio informal si es posible, gobierno formal si es necesario. Lo que cambia en 1870 no es el apetito europeo sino que lo informal deja de garantizar el acceso.',
      },
      {
        title: 'Las herramientas del dominio',
        body: [
          'Daniel Headrick argumentó en 1981 que la conquista tardía de África se explica menos por un cambio de voluntad que por un cambio de medios. Durante siglos el interior africano fue inaccesible para los europeos por una razón sanitaria: la malaria y la fiebre amarilla mataban a más de la mitad de los recién llegados en su primer año. La producción industrial de quinina a partir de 1820 y su uso profiláctico sistemático, ensayado en la expedición del Níger de 1854, redujeron esa mortalidad a una fracción.',
          'El vapor hizo el resto en el transporte. Los buques de casco de hierro y calado escaso remontaban ríos que las embarcaciones oceánicas no podían navegar, y el canal de Suez, abierto en 1869, acortó la ruta a Asia en semanas. El telégrafo submarino, que unía Londres con Bombay desde 1870 y con El Cabo en 1879, permitió por primera vez que un gobierno metropolitano diera órdenes en horas y no en meses, lo que centralizó la decisión política y redujo el margen del funcionario sobre el terreno.',
          'La asimetría militar se hizo aplastante en los años ochenta. El fusil de retrocarga y cartucho metálico multiplicó la cadencia y permitió disparar tumbado; el Maxim de 1884 fue la primera ametralladora verdaderamente automática. En Omdurman, en 1898, un ejército anglo-egipcio perdió unos cuarenta y ocho hombres frente a más de diez mil bajas mahdistas en una sola mañana. Hilaire Belloc lo resumió con un verso cínico: nosotros tenemos la Maxim y ellos no.',
          'Ninguna de estas tecnologías explica por sí sola la expansión, y Headrick nunca lo pretendió. Explican por qué fue posible y por qué fue barata en vidas europeas, que es una condición política decisiva: una conquista que no cuesta apenas soldados propios encuentra poca resistencia en el parlamento que la financia.',
          'Y la asimetría técnica tenía límites. Etiopía derrotó a Italia en Adua en 1896 porque Menelik II había comprado fusiles modernos, unificado el país y jugado con las rivalidades europeas. Japón hizo lo mismo a mayor escala. La lección de ambos casos es que la tecnología era transferible, y que allí donde un Estado consiguió centralizarse y armarse a tiempo, la conquista fracasó.',
        ].join('\n\n'),
      },
      {
        title: 'El reparto de África',
        body: [
          'La Conferencia de Berlín, reunida entre noviembre de 1884 y febrero de 1885 por iniciativa de Bismarck, no repartió África, contra lo que suele decirse. Fijó las reglas del reparto: libertad de navegación en el Congo y el Níger, prohibición formal de la trata y, sobre todo, el principio de ocupación efectiva, que obligaba a quien reclamase un territorio costero a demostrar administración real y a notificarlo a los demás. El efecto práctico fue convertir la reclamación sobre el papel en una carrera por poner puestos, banderas y tratados firmados por jefes locales que rara vez entendían lo que cedían.',
          'El caso extremo fue el Estado Libre del Congo. Leopoldo II de Bélgica obtuvo en 1885 el reconocimiento internacional de un territorio de más de dos millones de kilómetros cuadrados como propiedad personal, no como colonia belga, presentándolo como una empresa filantrópica y antiesclavista. El auge del caucho tras la invención del neumático convirtió ese dominio en un sistema de cuotas obligatorias sostenido por la Force Publique, con rehenes, mutilaciones y aldeas quemadas. El informe consular de Roger Casement en 1904 y la campaña de Edmund Morel forzaron la anexión por el Estado belga en 1908.',
          'Las cifras de mortalidad del Congo leopoldino se discuten. Adam Hochschild popularizó en 1998 la estimación de diez millones de muertos, derivada de una comparación entre censos coloniales muy posteriores. Demógrafos como Jan Vansina han insistido en que se trata de una caída poblacional acumulada por violencia, hambre, desplazamiento y enfermedad a lo largo de décadas, imposible de imputar a una única causa y difícil de cuantificar con censos que no existían. La discusión es sobre magnitud y método, no sobre la existencia del sistema, que está documentado por sus propios administradores.',
          'La violencia no fue una anomalía belga. Alemania reprimió a los herero y los nama en el África del Sudoeste entre 1904 y 1908 con órdenes explícitas de exterminio de Lothar von Trotha, empuje al desierto y campos de trabajo; se calcula que murió en torno al ochenta por ciento de los herero. Alemania reconoció oficialmente el genocidio en 2021. En el África oriental alemana, la represión de la rebelión Maji Maji entre 1905 y 1907 empleó la destrucción sistemática de cosechas y provocó una hambruna con centenares de miles de muertos.',
          'La rivalidad europea estuvo a punto de romper el sistema en Fachoda en 1898, cuando una columna francesa y otra británica coincidieron en el alto Nilo. Francia cedió, y de esa humillación surgió paradójicamente el acercamiento que llevó a la Entente Cordiale de 1904. El reparto africano funcionó como válvula: exportó a otro continente tensiones que en Europa habrían significado guerra. Hasta que dejó de haber territorio que repartir.',
        ].join('\n\n'),
        callout:
          'Berlín no repartió África: impuso el principio de ocupación efectiva. Al exigir presencia real para reconocer una reclamación, convirtió el mapa en una carrera de puestos militares.',
      },
      {
        title: 'Asia: colonia, semicolonia y potencia',
        body: [
          'La India ilustra el modelo de colonia administrada. La rebelión de 1857 liquidó a la Compañía de las Indias Orientales y llevó a la Corona a gobernar directamente: virrey, ejército indio bajo mando británico, funcionariado propio y, desde 1877, el título imperial de Victoria. El Raj se sostenía con unos pocos miles de funcionarios europeos sobre trescientos millones de habitantes, lo que solo era posible mediante colaboración local: príncipes reconocidos, terratenientes, castas administrativas y un ejército reclutado entre las llamadas razas marciales.',
          'El balance económico del dominio indio es objeto de una discusión larga. La tesis del drenaje, formulada por Dadabhai Naoroji en 1901, sostiene que la India transfirió a Gran Bretaña una renta neta permanente mediante los home charges, los intereses de la deuda y el superávit comercial esterilizado. La cuantificación se discute, pero hay un dato menos discutible: la participación india en la producción manufacturera mundial cayó de en torno a una cuarta parte a mediados del siglo XVIII a un dos por ciento en 1900, mientras la renta por habitante se estancó durante casi un siglo.',
          'China representa la semicolonia. Tras las dos guerras del opio, los tratados desiguales impusieron puertos abiertos, aranceles fijados desde fuera, extraterritorialidad para los extranjeros e indemnizaciones que hipotecaban los ingresos aduaneros. A finales de siglo las potencias se habían repartido esferas de influencia con concesiones ferroviarias y mineras. La rebelión de los bóxers en 1900 desembocó en una expedición punitiva de ocho potencias y en una indemnización que consumió durante décadas el presupuesto imperial. China conservó formalmente su soberanía y perdió su contenido.',
          'Japón es la excepción que se convierte en sujeto. La restauración Meiji de 1868 emprendió una transformación deliberada del Estado, el ejército, la escuela y la industria con la consigna de país rico, ejército fuerte. En 1895 derrotó a China y anexionó Taiwán; en 1905 venció a Rusia y en 1910 anexionó Corea. Su ascenso demostró que la industrialización defensiva era posible y que el imperialismo no era una propiedad racial europea, dos conclusiones que reverberaron en toda Asia.',
          'Las hambrunas coloniales tardías cierran este cuadro. Entre 1876 y 1902, episodios de El Niño coincidieron con políticas de exportación de grano, doctrina de no interferencia en los mercados y sistemas fiscales rígidos en la India, China y Brasil. Mike Davis calculó en 2001 entre treinta y sesenta millones de muertos y las llamó los holocaustos de la era victoriana. Sus críticos objetan que la sequía habría matado también sin colonialismo y que los ferrocarriles a veces salvaron vidas; el punto que ha resistido es que la mortalidad dependió de decisiones políticas identificables, no solo de la lluvia.',
        ].join('\n\n'),
      },
      {
        title: 'La coartada: raza, ciencia y misión',
        body: [
          'Ningún imperio se sostiene solo con fusiles: necesita una justificación que convenza a la metrópoli. La del imperialismo tardío combinó tres discursos. El primero fue la misión civilizadora, formulada con claridad por Jules Ferry ante la Cámara francesa en 1885: las razas superiores tienen el deber de civilizar a las inferiores. El segundo fue el darwinismo social, que trasladó a la política una lectura deformada de Darwin, con Herbert Spencer y la supervivencia del más apto como fórmula de moda. El tercero fue el evangelizador, que aportó escuelas, dispensarios y también la convicción de estar salvando almas.',
          'La antropología física de la época dio apariencia de ciencia a la jerarquía: mediciones craneales, tipologías raciales y exhibiciones de personas en las exposiciones universales y en los zoológicos humanos que recorrieron Europa hasta bien entrado el siglo XX. Retrospectivamente es fácil ver la circularidad del razonamiento, que definía la superioridad por la capacidad de conquistar y luego usaba la conquista como prueba de superioridad.',
          'Edward Said propuso en 1978 leer ese aparato como un sistema de conocimiento y no solo como propaganda. El orientalismo, en su formulación, es el conjunto de saberes, imágenes y categorías con que Occidente construyó un Oriente esencializado, inmóvil y necesitado de tutela, y ese saber era inseparable del poder que lo financiaba. La tesis ha sido muy discutida, por su tratamiento selectivo de las fuentes y por atribuir demasiada coherencia a un campo diverso, y a la vez reorganizó los estudios poscoloniales.',
          'El discurso imperial fue también un discurso de género. La colonia se pensaba como espacio masculino de aventura y autodominio, y la condición de las mujeres colonizadas se usó como argumento de intervención, en lo que Gayatri Spivak resumió como hombres blancos salvando a mujeres morenas de hombres morenos. Al mismo tiempo, la administración colonial reguló matrimonios, sexualidad y mestizaje con una minuciosidad que Ann Laura Stoler ha analizado como núcleo del orden racial, no como su periferia.',
          'Conviene registrar que hubo crítica contemporánea, no solo juicio posterior. Hobson denunció el imperialismo en 1902 como captura del Estado por intereses financieros, Conrad publicó El corazón de las tinieblas en 1899, la campaña del Congo movilizó a la opinión británica y en Francia hubo diputados que votaron contra Ferry. El consenso imperial era ancho, pero no unánime.',
        ].join('\n\n'),
        callout:
          'El razonamiento era circular: la superioridad se definía por la capacidad de conquistar, y la conquista se presentaba luego como prueba de superioridad.',
      },
      {
        title: 'Balance y herencias',
        body: [
          'La pregunta de si el imperio fue rentable tiene respuestas distintas según a quién se le pregunte. Lance Davis y Robert Huttenback concluyeron en 1986, tras examinar centenares de empresas, que las colonias no fueron un buen negocio para el contribuyente británico: la defensa imperial se pagaba con impuestos generales y los rendimientos medios no superaban a los de inversiones domésticas. Sí fueron un negocio excelente para grupos concretos, sobre todo la aristocracia con capital colocado en ultramar. El imperio funcionó como transferencia interna de renta, socializando el coste y privatizando el beneficio.',
          'Eso desmonta la versión mecánica de Hobson y Lenin, que hacían del excedente de capital la causa suficiente de la expansión. Los flujos de inversión británica se dirigieron mayoritariamente a Estados Unidos, Argentina y los dominios blancos, no a las colonias tropicales recién conquistadas. Pero no desmonta la observación de Hobson sobre la captura del Estado por intereses organizados, que sigue siendo un buen instrumento de análisis de decisiones concretas.',
          'En las sociedades colonizadas el balance material es más claro. El trabajo forzado, la fiscalidad en metálico que obligaba a trabajar para pagar el impuesto, la especialización en uno o dos productos de exportación y la desarticulación de las manufacturas locales crearon estructuras que sobrevivieron a la independencia. Las fronteras trazadas en Berlín y en las cancillerías separaron comunidades y unieron a otras sin relación previa, y siguen siendo las fronteras de hoy. Mahmood Mamdani ha analizado además la invención colonial de la autoridad tradicional, con jefes designados por la administración que quedaron como estructura de poder heredada.',
          'La respuesta africana y asiática no fue pasiva en ningún momento. Hubo resistencia armada, desde Samori Turé y los ashanti hasta Maji Maji y los bóxers, y hubo apropiación selectiva: los mismos colegios coloniales que formaron funcionarios produjeron a Gandhi, Nehru, Senghor, Ho Chi Minh y Nkrumah. El derecho, la nación y la autodeterminación llegaron como discurso imperial y volvieron como argumento contra el imperio.',
          'El imperialismo alimentó por último la guerra europea. No la causó directamente, porque las crisis coloniales de Marruecos en 1905 y 1911 se resolvieron sin combate, pero normalizó la carrera naval, cimentó los bloques de alianzas, acostumbró a las opiniones públicas a un lenguaje de lucha entre razas y naciones y aportó tropas coloniales a los frentes de 1914. Los mismos soldados que combatieron en Europa exigieron después derechos en sus países, y ahí empieza el hilo que lleva a la descolonización.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Imperialismo informal', definition: 'Dominio ejercido mediante tratados comerciales, deuda y presión naval sin administrar el territorio. Formulado por Gallagher y Robinson en 1953.' },
      { term: 'Ocupación efectiva', definition: 'Principio del Acta de Berlín de 1885: solo se reconoce la reclamación de quien demuestra administración real y la notifica a las demás potencias.' },
      { term: 'Estado Libre del Congo', definition: 'Territorio de más de dos millones de kilómetros cuadrados que Leopoldo II poseyó a título personal entre 1885 y 1908, no como colonia belga.' },
      { term: 'Tratados desiguales', definition: 'Acuerdos impuestos a China, Japón o Siam con puertos abiertos, aranceles fijados desde fuera y extraterritorialidad para los extranjeros.' },
      { term: 'Esfera de influencia', definition: 'Zona de un Estado formalmente soberano donde una potencia se reserva concesiones ferroviarias, mineras y comerciales en exclusiva.' },
      { term: 'Misión civilizadora', definition: 'Justificación del dominio como deber de las razas superiores hacia las inferiores. Su formulación canónica es el discurso de Jules Ferry de 1885.' },
      { term: 'Darwinismo social', definition: 'Traslación a la política de una lectura deformada de la selección natural, con la lucha entre razas y naciones como ley histórica.' },
      { term: 'Tesis de Hobson y Lenin', definition: 'Explicación económica del imperialismo por el excedente de capital que busca colocación exterior. Hobson en 1902, Lenin en 1916.' },
      { term: 'Mente oficial', definition: 'Concepto de Robinson y Gallagher: las decisiones imperiales las toman funcionarios guiados por cálculo estratégico y no por presión directa de los inversores.' },
      { term: 'Colaboración', definition: 'Mecanismo básico del dominio colonial: príncipes, jefes y élites locales sin cuya cooperación unos pocos miles de europeos no podrían gobernar millones de personas.' },
      { term: 'Drenaje colonial', definition: 'Transferencia neta de renta de la India a Gran Bretaña mediante home charges, deuda y superávit comercial. Formulada por Dadabhai Naoroji en 1901.' },
      { term: 'Holocaustos victorianos tardíos', definition: 'Hambrunas de 1876-1902 en la India, China y Brasil, donde la sequía coincidió con exportación de grano y doctrina de no interferencia. Término de Mike Davis.' },
      { term: 'Orientalismo', definition: 'Sistema de saberes e imágenes con que Occidente construyó un Oriente esencializado y necesitado de tutela. Analizado por Edward Said en 1978.' },
      { term: 'Genocidio herero y nama', definition: 'Exterminio ordenado por Lothar von Trotha en el África del Sudoeste alemana entre 1904 y 1908. Reconocido oficialmente por Alemania en 2021.' },
    ],
    debates: [
      {
        question: '¿Por qué se produjo el reparto entre 1870 y 1900?',
        positions: [
          {
            school: 'Explicación económica (Hobson, 1902; Lenin, 1916)',
            argument:
              'El subconsumo interno genera un excedente de capital que busca colocación rentable fuera, y el Estado se pone al servicio de los grupos financieros que lo exportan. Para Lenin es además la fase superior y última del capitalismo.',
          },
          {
            school: 'Crisis periférica y mente oficial (Robinson y Gallagher, 1961)',
            argument:
              'La iniciativa no viene de la City sino de la periferia. Las crisis locales, como la revuelta de Urabi en Egipto en 1882, obligan a intervenir a funcionarios que razonan en clave estratégica, no de beneficio.',
          },
          {
            school: 'Política interior (Schumpeter, 1919; Wehler, 1969)',
            argument:
              'Schumpeter ve un atavismo de élites aristocráticas y militares sin función en una economía capitalista. Wehler habla de socialimperialismo: expansión exterior para desactivar el conflicto de clase en casa, sobre todo en Alemania.',
          },
        ],
        state:
          'Nadie sostiene ya una explicación única. Se acepta que la iniciativa periférica y la competencia entre potencias pesaron más que la exportación de capital en la fase de conquista, y que la presión económica fue decisiva en casos concretos como el Congo del caucho o Sudáfrica.',
      },
      {
        question: '¿Fue rentable el imperio?',
        positions: [
          {
            school: 'No para el contribuyente (Davis y Huttenback, 1986)',
            argument:
              'La defensa imperial la pagaban los impuestos generales y los rendimientos medios no superaban a los de inversiones domésticas. El imperio transfirió renta del contribuyente medio a una élite con capital en ultramar.',
          },
          {
            school: 'Sí para la economía metropolitana (Patrick OBrien y otros)',
            argument:
              'El cálculo debe incluir mercados protegidos, materias primas baratas, servicios financieros y de seguros, remesas y el papel de la India en el equilibrio de la balanza de pagos británica.',
          },
          {
            school: 'La cuestión mal planteada (Naoroji, 1901; Utsa Patnaik)',
            argument:
              'Preguntar si compensó a Europa ignora el otro lado del balance: la transferencia neta desde las colonias y la destrucción de capacidad productiva local son el dato central, se rentabilizaran o no en la metrópoli.',
          },
        ],
        state:
          'Hay acuerdo en que el beneficio fue muy desigual dentro de la metrópoli y en que no explica por sí solo la expansión. La cuantificación del drenaje colonial sigue abierta y las cifras varían por un factor de varias unidades según el método.',
      },
      {
        question: '¿Fueron las hambrunas coloniales un desastre natural o una política?',
        positions: [
          {
            school: 'Mortalidad política (Davis, 2001)',
            argument:
              'La sequía fue el detonante, pero la escala la fijaron la exportación de grano en plena carestía, la doctrina de no interferencia en los precios, la fiscalidad rígida y la sustitución de cultivos de subsistencia por comerciales.',
          },
          {
            school: 'Revisión económica (Tirthankar Roy y otros)',
            argument:
              'Las hambrunas precoloniales fueron también devastadoras, la capacidad estatal para socorrer era muy limitada con la tecnología de la época y el ferrocarril redujo la mortalidad de episodios posteriores.',
          },
        ],
        state:
          'El marco de Amartya Sen, según el cual las hambrunas dependen del acceso a los alimentos y no solo de su disponibilidad, se ha impuesto como herramienta de análisis. La discusión se ha desplazado de la culpa a la medida exacta de la responsabilidad administrativa en cada episodio.',
      },
    ],
    sources: [
      { author: 'Jules Ferry', title: 'Discurso ante la Cámara de Diputados', year: '1885', kind: 'primaria', note: 'Formulación canónica de la misión civilizadora y del argumento económico ante un parlamento dividido.' },
      { author: 'Conferencia de Berlín', title: 'Acta General', year: '1885', kind: 'primaria', note: 'Libertad de navegación, prohibición formal de la trata y principio de ocupación efectiva.' },
      { author: 'Cecil Rhodes', title: 'Confesión de fe y declaraciones', year: '1877–1902', kind: 'primaria', note: 'Expansión británica como deber racial y como salida a la cuestión social. Imperialismo sin coartada humanitaria.' },
      { author: 'Rudyard Kipling', title: 'La carga del hombre blanco', year: '1899', kind: 'primaria', note: 'Escrito para animar a Estados Unidos a quedarse Filipinas. La tutela presentada como sacrificio.' },
      { author: 'Joseph Conrad', title: 'El corazón de las tinieblas', year: '1899', kind: 'primaria', note: 'Crítica desde dentro de la empresa colonial congoleña, y a la vez pieza discutida por su propia mirada sobre África.' },
      { author: 'Dadabhai Naoroji', title: 'Poverty and Un-British Rule in India', year: '1901', kind: 'primaria', note: 'Primera formulación sistemática de la teoría del drenaje, hecha por un parlamentario indio en Westminster.' },
      { author: 'John A. Hobson', title: 'Imperialism: A Study', year: '1902', kind: 'primaria', note: 'El imperialismo como captura del Estado por intereses financieros. Fuente directa de Lenin.' },
      { author: 'Roger Casement', title: 'Informe consular sobre el Estado Libre del Congo', year: '1904', kind: 'primaria', note: 'Investigación oficial británica sobre el sistema de cuotas del caucho, los rehenes y las mutilaciones.' },
      { author: 'Edmund D. Morel', title: 'Red Rubber', year: '1906', kind: 'primaria', note: 'Campaña de opinión que llevó a la anexión del Congo por el Estado belga en 1908.' },
      { author: 'V. I. Lenin', title: 'El imperialismo, fase superior del capitalismo', year: '1916', kind: 'primaria', note: 'Convierte el análisis de Hobson en teoría del reparto del mundo entre monopolios y de la guerra interimperialista.' },
      { author: 'Joseph Schumpeter', title: 'Sociología del imperialismo', year: '1919', kind: 'primaria', note: 'El imperialismo como atavismo de élites precapitalistas, no como necesidad del capitalismo.' },
      { author: 'John Gallagher y Ronald Robinson', title: 'The Imperialism of Free Trade', year: '1953', kind: 'estudio', note: 'Introduce el imperio informal y la continuidad del dominio antes y después del reparto formal.' },
      { author: 'Ronald Robinson y John Gallagher', title: 'Africa and the Victorians', year: '1961', kind: 'estudio', note: 'La mente oficial y la crisis periférica como motores de la ocupación de Egipto y del reparto africano.' },
      { author: 'Hans-Ulrich Wehler', title: 'Bismarck und der Imperialismus', year: '1969', kind: 'estudio', note: 'Socialimperialismo: la expansión exterior como instrumento de estabilización interna en Alemania.' },
      { author: 'David K. Fieldhouse', title: 'Economics and Empire', year: '1973', kind: 'estudio', note: 'Desmonta la correspondencia entre flujos de inversión y territorios anexionados que exigiría la tesis de Lenin.' },
      { author: 'Edward Said', title: 'Orientalismo', year: '1978', kind: 'estudio', note: 'El saber sobre Oriente como parte del dispositivo de dominio. Origen de los estudios poscoloniales.' },
      { author: 'Daniel Headrick', title: 'The Tools of Empire', year: '1981', kind: 'estudio', note: 'Quinina, vapor fluvial, telégrafo y fusil de retrocarga como condiciones materiales de la conquista tardía.' },
      { author: 'Lance Davis y Robert Huttenback', title: 'Mammon and the Pursuit of Empire', year: '1986', kind: 'estudio', note: 'Contabilidad del imperio británico: coste socializado, beneficio concentrado en una élite inversora.' },
      { author: 'Mahmood Mamdani', title: 'Citizen and Subject', year: '1996', kind: 'estudio', note: 'El despotismo descentralizado y la invención colonial de la autoridad tradicional como herencia poscolonial.' },
      { author: 'Adam Hochschild', title: 'El fantasma del rey Leopoldo', year: '1998', kind: 'estudio', note: 'Reconstrucción del sistema congoleño y de la primera campaña internacional de derechos humanos.' },
      { author: 'Mike Davis', title: 'Los holocaustos de la era victoriana tardía', year: '2001', kind: 'estudio', note: 'El Niño, mercado mundial y política colonial como causas combinadas de las grandes hambrunas.' },
      { author: 'Ann Laura Stoler', title: 'Carnal Knowledge and Imperial Power', year: '2002', kind: 'estudio', note: 'La regulación de la intimidad, el matrimonio y el mestizaje como núcleo del orden colonial.' },
      { author: 'John Darwin', title: 'El sueño del imperio', year: '2009', kind: 'estudio', note: 'Historia comparada de los imperios euroasiáticos que relativiza la excepcionalidad del caso europeo.' },
    ],
  },
  questions: [
    {
      id: 'imperialismo-1', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué designa el imperialismo del librecambio de Gallagher y Robinson?',
      options: [
        'La política arancelaria británica posterior a 1870',
        'El dominio informal mediante tratados, deuda y presión naval sin administrar el territorio',
        'El reparto pactado de África en la Conferencia de Berlín',
        'La apertura de los mercados europeos a los productos coloniales',
      ],
      answer: 1,
      explanation: 'Su regla resume la lógica: comercio informal si es posible, gobierno formal si es necesario. Lo que cambia hacia 1870 es que lo informal deja de garantizar el acceso.',
    },
    {
      id: 'imperialismo-2', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué estableció realmente la Conferencia de Berlín de 1884-1885?',
      options: [
        'Las reglas del reparto, con el principio de ocupación efectiva y la libertad de navegación fluvial',
        'El reparto territorial concreto de África entre las potencias',
        'La independencia de los Estados africanos bajo tutela europea',
        'La creación de una administración internacional conjunta del continente',
      ],
      answer: 0,
      explanation: 'Al exigir presencia administrativa real para reconocer una reclamación, convirtió el mapa en una carrera de puestos militares y tratados con jefes locales.',
    },
    {
      id: 'imperialismo-3', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: 'Según Headrick, ¿qué factor sanitario hizo posible la penetración europea en el interior africano?',
      options: [
        'La vacuna contra la viruela',
        'La producción industrial de quinina y su uso profiláctico sistemático',
        'El descubrimiento del vector de la malaria por Ross en 1897',
        'La potabilización del agua en los puestos coloniales',
      ],
      answer: 1,
      explanation: 'Antes de la quinina profiláctica moría más de la mitad de los europeos que entraban en el primer año. Sin resolver eso, la ocupación del interior era inviable.',
    },
    {
      id: 'imperialismo-4', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Cuál era el estatuto jurídico del Estado Libre del Congo entre 1885 y 1908?',
      options: [
        'Colonia del Reino de Bélgica administrada por su parlamento',
        'Propiedad personal de Leopoldo II reconocida internacionalmente',
        'Protectorado conjunto de Bélgica, Francia y Portugal',
        'Territorio bajo mandato de la Conferencia de Berlín',
      ],
      answer: 1,
      explanation: 'Leopoldo lo obtuvo presentándolo como empresa filantrópica y antiesclavista. Bélgica solo lo anexionó en 1908, tras el escándalo del caucho.',
    },
    {
      id: 'imperialismo-5', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué se discute hoy sobre la cifra de diez millones de muertos en el Congo leopoldino?',
      options: [
        'Que el sistema de cuotas del caucho no llegó a aplicarse',
        'El método y la magnitud, no la existencia del sistema: es una caída poblacional acumulada por violencia, hambre y enfermedad, difícil de cuantificar sin censos',
        'Que las mutilaciones fueron una invención de la propaganda británica',
        'Que la mortalidad fue muy superior a la estimada por Hochschild',
      ],
      answer: 1,
      explanation: 'Vansina y otros demógrafos insisten en que la estimación deriva de censos muy posteriores. El sistema está documentado por los propios administradores.',
    },
    {
      id: 'imperialismo-6', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué ocurrió en Adua en 1896?',
      options: [
        'Francia y Gran Bretaña estuvieron a punto de entrar en guerra por el alto Nilo',
        'Alemania inició la represión de los herero',
        'Etiopía derrotó a Italia y preservó su independencia',
        'Los bóxers sitiaron el barrio de las legaciones',
      ],
      answer: 2,
      explanation: 'Menelik II había comprado armamento moderno, centralizado el país y explotado las rivalidades europeas. Demuestra que la ventaja técnica era transferible.',
    },
    {
      id: 'imperialismo-7', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué sostiene la tesis del drenaje de Dadabhai Naoroji?',
      options: [
        'Que la India perdió población por la emigración forzada a otras colonias',
        'Que la India transfería a Gran Bretaña una renta neta permanente mediante home charges, deuda y superávit comercial',
        'Que el algodón indio se agotó por la sobreexplotación del suelo',
        'Que el Raj gastaba más de lo que ingresaba y arruinaba al contribuyente británico',
      ],
      answer: 1,
      explanation: 'La cuantificación se discute. Menos discutible es la caída de la participación india en la manufactura mundial y el estancamiento de la renta por habitante.',
    },
    {
      id: 'imperialismo-8', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué caracteriza a China como semicolonia frente a la India colonial?',
      options: [
        'Que no sufrió intervención militar extranjera en ningún momento',
        'Que fue administrada conjuntamente por las ocho potencias desde 1900',
        'Que mantuvo el control de sus aranceles y de sus aduanas',
        'Que conservó la soberanía formal mientras perdía su contenido mediante tratados desiguales, extraterritorialidad y esferas de influencia',
      ],
      answer: 3,
      explanation: 'Ninguna potencia gobernaba China, pero los aranceles se fijaban desde fuera y las indemnizaciones hipotecaban durante décadas los ingresos aduaneros.',
    },
    {
      id: 'imperialismo-9', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Por qué el ascenso de Japón tuvo un efecto ideológico tan grande en Asia?',
      options: [
        'Porque renunció a expandirse y ofreció un modelo pacífico',
        'Porque demostró que la industrialización defensiva era posible y que el imperialismo no era una propiedad racial europea',
        'Porque fue el único país asiático que adoptó el cristianismo',
        'Porque logró la independencia sin transformar su Estado',
      ],
      answer: 1,
      explanation: 'La victoria sobre Rusia en 1905 fue la primera de una potencia asiática sobre una europea en guerra abierta, y resonó desde Estambul hasta Calcuta.',
    },
    {
      id: 'imperialismo-10', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué añade Mike Davis a la explicación de las hambrunas de 1876-1902?',
      options: [
        'Que la sequía por sí sola basta para explicar la mortalidad',
        'Que la escala dependió de la exportación de grano en plena carestía, la no interferencia en los precios y la fiscalidad rígida',
        'Que las hambrunas fueron menores de lo que indicaban los informes coloniales',
        'Que el ferrocarril agravó la carestía en todos los casos documentados',
      ],
      answer: 1,
      explanation: 'El marco de Amartya Sen apoya el argumento: una hambruna depende del acceso a los alimentos, no solo de su disponibilidad física.',
    },
    {
      id: 'imperialismo-11', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué explicación del reparto propusieron Robinson y Gallagher en 1961?',
      options: [
        'La crisis en la periferia y el cálculo estratégico de la mente oficial, no la presión de los inversores',
        'La exportación de capital excedente desde las metrópolis',
        'El atavismo de élites aristocráticas sin función económica',
        'La necesidad de desactivar el conflicto de clase en la metrópoli',
      ],
      answer: 0,
      explanation: 'La ocupación de Egipto en 1882, disparada por la revuelta de Urabi y por la seguridad de la ruta a la India, es su caso demostrativo.',
    },
    {
      id: 'imperialismo-12', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué concluyeron Davis y Huttenback en 1986 sobre la rentabilidad del imperio británico?',
      options: [
        'Que enriqueció por igual a todas las clases británicas',
        'Que no compensó al contribuyente medio pero sí a una élite con capital colocado en ultramar',
        'Que fue ruinoso para todos los grupos sociales implicados',
        'Que la mayor parte de la inversión británica se dirigió a las colonias tropicales',
      ],
      answer: 1,
      explanation: 'La defensa imperial se pagaba con impuestos generales. El imperio funcionó como transferencia interna: coste socializado, beneficio concentrado.',
    },
    {
      id: 'imperialismo-13', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué propone Edward Said con el concepto de orientalismo?',
      options: [
        'Un método filológico para editar textos árabes y persas',
        'Que el saber occidental sobre Oriente construyó un objeto esencializado e inmóvil, inseparable del poder que lo financiaba',
        'Que la literatura de viajes fue el único vehículo del prejuicio colonial',
        'Que Oriente y Occidente son categorías geográficas objetivas',
      ],
      answer: 1,
      explanation: 'Ha sido discutido por su selección de fuentes y por atribuir demasiada coherencia a un campo diverso, y aun así reorganizó los estudios poscoloniales.',
    },
    {
      id: 'imperialismo-14', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué papel cumplió la colaboración local en el dominio colonial?',
      options: [
        'Fue marginal: la administración europea gobernaba directamente cada aldea',
        'Se limitó a la recaudación de impuestos en las ciudades portuarias',
        'Fue estructural: unos pocos miles de europeos solo podían gobernar millones de personas con príncipes, jefes y élites locales integrados',
        'Solo existió en la India y no en el África subsahariana',
      ],
      answer: 2,
      explanation: 'Mamdani analizó la contrapartida: la administración inventó autoridades tradicionales que quedaron como estructura de poder heredada tras la independencia.',
    },
    {
      id: 'imperialismo-15', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué ocurrió con los herero y los nama entre 1904 y 1908?',
      options: [
        'Firmaron un protectorado negociado con la administración alemana',
        'Fueron objeto de una guerra de exterminio con órdenes explícitas, empuje al desierto y campos de trabajo, reconocida por Alemania como genocidio en 2021',
        'Emigraron en masa a la colonia británica de El Cabo',
        'Derrotaron a las tropas alemanas y conservaron su territorio',
      ],
      answer: 1,
      explanation: 'Se calcula que murió en torno al ochenta por ciento de los herero. La orden de von Trotha es uno de los documentos coloniales más explícitos que se conservan.',
    },
    {
      id: 'imperialismo-16', era: 'Edad Contemporánea', topicId: 'imperialismo', topic: 'Imperialismo',
      question: '¿Qué relación estableció el imperialismo con la guerra de 1914?',
      options: [
        'La causó directamente: las crisis coloniales desembocaron en combate entre potencias',
        'La preparó indirectamente: normalizó la carrera naval, cimentó los bloques de alianzas y habituó a la opinión pública a un lenguaje de lucha entre razas y naciones',
        'La retrasó, porque el reparto africano canalizó todas las tensiones hasta 1939',
        'No tuvo ninguna relación: fueron procesos independientes',
      ],
      answer: 1,
      explanation: 'Las crisis marroquíes de 1905 y 1911 se resolvieron sin guerra. El efecto fue acumulativo, no un detonante único.',
    },
  ],
}
