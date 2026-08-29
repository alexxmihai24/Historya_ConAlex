import type { TopicModule } from '../types'

export const granGuerra: TopicModule = {
  topic: {
    id: 'gran-guerra',
    era: 'Edad Contemporánea',
    title: 'Primera Guerra Mundial',
    years: '1914–1918',
    country: 'Europa',
    description: 'Cómo una crisis diplomática de cinco semanas se convirtió en cuatro años de desgaste industrial y liquidó cuatro imperios.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '✚',
    color: 'green',
    summary:
      'En julio de 1914 ningún gobierno europeo quería la guerra que estalló en agosto. Casi todos estaban dispuestos a arriesgarla. Esa distinción organiza un siglo de discusión historiográfica sobre las responsabilidades, desde la tesis de Fritz Fischer sobre la premeditación alemana hasta los sonámbulos de Christopher Clark. Lo que siguió no se parecía a ninguna guerra anterior: la potencia de fuego industrial anuló la maniobra, el frente se inmovilizó durante tres años y los Estados tuvieron que movilizar economías enteras, no solo ejércitos. Murieron entre nueve y diez millones de combatientes y una cifra comparable de civiles, contando el bloqueo, el genocidio armenio y la epidemia de gripe. Cuatro imperios desaparecieron, y la paz que se firmó en 1919 dejó abiertos casi todos los problemas que estallarían veinte años después.',
    keyDates: [
      { date: '28 de junio de 1914', event: 'Gavrilo Princip asesina en Sarajevo al archiduque Francisco Fernando y a su esposa.' },
      { date: '5 de julio de 1914', event: 'Alemania da a Austria-Hungría el llamado cheque en blanco: apoyo incondicional frente a Serbia.' },
      { date: '4 de agosto de 1914', event: 'La invasión de Bélgica lleva a Gran Bretaña a la guerra y convierte un conflicto balcánico en europeo.' },
      { date: 'Septiembre de 1914', event: 'La batalla del Marne detiene el avance alemán y liquida la guerra de movimiento en el oeste.' },
      { date: '22 de abril de 1915', event: 'Primer uso masivo de cloro en Ypres. Empieza la guerra química.' },
      { date: '24 de abril de 1915', event: 'Detención de intelectuales armenios en Constantinopla: inicio convencional del genocidio armenio.' },
      { date: '1916', event: 'Verdún y el Somme: dos batallas de desgaste con más de un millón de bajas conjuntas.' },
      { date: 'Febrero de 1917', event: 'Alemania reanuda la guerra submarina sin restricciones y acepta el riesgo de la entrada estadounidense.' },
      { date: '6 de abril de 1917', event: 'Estados Unidos declara la guerra a Alemania tras el telegrama Zimmermann.' },
      { date: 'Mayo-junio de 1917', event: 'Motines en el ejército francés tras la ofensiva del Chemin des Dames.' },
      { date: '8 de enero de 1918', event: 'Wilson presenta los Catorce Puntos: autodeterminación, diplomacia abierta y sociedad de naciones.' },
      { date: '3 de marzo de 1918', event: 'Brest-Litovsk: Rusia sale de la guerra y Alemania traslada divisiones al frente occidental.' },
      { date: 'Agosto-noviembre de 1918', event: 'Ofensiva de los Cien Días. Armisticio el 11 de noviembre con el frente aún en territorio ocupado.' },
      { date: '28 de junio de 1919', event: 'Tratado de Versalles. El artículo 231 atribuye a Alemania la responsabilidad de las pérdidas aliadas.' },
    ],
    sections: [
      {
        title: 'Julio de 1914 y el problema de la responsabilidad',
        body: [
          'El sistema europeo llevaba una década tensándose: dos bloques de alianzas convertidos en automatismos, una carrera naval anglo-alemana, dos crisis marroquíes, dos guerras balcánicas y un Imperio austrohúngaro convencido de que el nacionalismo serbio amenazaba su existencia. Nada de eso hacía inevitable la guerra. La convirtió en probable la combinación de esa tensión con una crisis mal gestionada en cinco semanas.',
          'La secuencia es conocida. Tras el atentado de Sarajevo, Viena buscó y obtuvo el 5 de julio el respaldo incondicional alemán, el llamado cheque en blanco. El ultimátum del 23 de julio se redactó para ser rechazado; Serbia aceptó casi todo y Viena declaró la guerra igualmente. La movilización rusa, general desde el 30 de julio, activó el mecanismo alemán, que no distinguía entre movilizarse y atacar. El 4 de agosto la invasión de Bélgica llevó a Gran Bretaña al conflicto.',
          'Fritz Fischer sostuvo en 1961 que Alemania había decidido conscientemente la guerra para alcanzar objetivos de gran potencia, apoyándose en el programa de septiembre de 1914 de Bethmann Hollweg y en el consejo de guerra de diciembre de 1912. Su tesis rompió el consenso alemán de posguerra sobre el deslizamiento accidental y provocó el mayor conflicto historiográfico de la República Federal. La versión fuerte de la premeditación se ha matizado; la responsabilidad principal de Berlín y Viena en la escalada sigue ampliamente aceptada.',
          'Christopher Clark propuso en 2012 la imagen contraria: sonámbulos que caminaban vigilantes pero ciegos, sin ver el abismo hacia el que se dirigían. Su reparto de responsabilidades es más equilibrado e incorpora a Rusia, Francia y Serbia. Se le ha objetado que la simetría diluye la diferencia entre quien fuerza la crisis y quien reacciona, y que su tratamiento de Serbia es severo.',
          'A. J. P. Taylor añadió en 1969 un factor material: la guerra por horario. Los planes de movilización, con millones de hombres y miles de trenes calculados al minuto, imponían a los gobiernos un plazo de decisión de horas. No sustituyen a la política, pero explican por qué en la última semana de julio la maquinaria fue más rápida que la diplomacia.',
        ].join('\n\n'),
        callout:
          'Nadie quería exactamente esta guerra y casi todos estaban dispuestos a arriesgarla. La discusión sobre la culpa gira alrededor de esa diferencia, no de un plan secreto.',
      },
      {
        title: 'El fracaso del plan y la inmovilización del frente',
        body: [
          'El plan alemán, versión modificada por Moltke el Joven del diseño de Schlieffen, apostaba por derrotar a Francia en seis semanas atravesando Bélgica, antes de que Rusia completase su movilización. Era una apuesta contra el reloj y contra la geografía: exigía marchas de treinta kilómetros diarios, dependía de ferrocarriles que quedaban atrás y suponía que el ejército francés se dejaría envolver.',
          'Falló en el Marne, en septiembre de 1914, cuando el ala derecha alemana quedó expuesta y las reservas francesas y británicas contraatacaron. Después vino la carrera hacia el mar y, para diciembre, una línea continua de trincheras desde el canal de la Mancha hasta Suiza. En el este el frente era mucho más largo y móvil, con la gran victoria alemana de Tannenberg, pero tampoco resolvió nada de forma rápida.',
          'La causa profunda de la inmovilización fue el desequilibrio entre potencia de fuego y movilidad. La ametralladora, el fusil de repetición, el alambre de espino y sobre todo la artillería de tiro rápido hacían el asalto frontal carísimo, mientras que el atacante avanzaba a pie y el defensor traía reservas en tren. La defensa tenía todas las ventajas hasta que apareciera un vehículo capaz de moverse bajo fuego, y ese vehículo aún no existía.',
          'La artillería fue el arma decisiva del conflicto: causó en torno al setenta por ciento de las bajas y consumió la producción industrial de países enteros. La escasez de proyectiles derribó un gobierno británico en 1915 y creó un ministerio de municiones. Los ejércitos aprendieron a coordinar fuego y movimiento con cortinas móviles, tiro corregido por avión y planos de batería calculados con precisión creciente.',
          'Las soluciones tácticas llegaron tarde y todas a la vez. Los alemanes desarrollaron las tropas de asalto, que infiltraban puntos débiles en vez de atacar en línea; los británicos y franceses combinaron carros, aviación, artillería silenciosa y comunicaciones en lo que se ha llamado el sistema de armas combinadas de 1918. El resultado fue que el último año de guerra volvió a ser móvil, con avances de decenas de kilómetros.',
        ].join('\n\n'),
      },
      {
        title: 'Desgaste: Verdún, el Somme y el problema de la resistencia',
        body: [
          'Falkenhayn planteó Verdún en febrero de 1916 como una batalla explícita de desgaste: atacar un punto que Francia no podría abandonar por razones de prestigio y desangrarla con artillería. La operación duró diez meses, costó en torno a trescientos mil muertos entre los dos bandos y no desplazó el frente de forma significativa. El Somme, iniciado en julio, produjo casi sesenta mil bajas británicas el primer día, la jornada más costosa de la historia del ejército británico.',
          'Esas cifras dieron pie a una interpretación duradera, la de los leones dirigidos por burros, que atribuía la carnicería a la incompetencia de generales anclados en la caballería. La historiografía militar posterior la ha matizado mucho. Los ejércitos aprendieron rápido dentro de las restricciones tecnológicas de la época, sin radio de campaña ni transporte todoterreno, y la curva de aprendizaje británica entre 1916 y 1918 es hoy un campo de estudio bien establecido. Otra cosa es que ese aprendizaje se pagara con vidas.',
          'La pregunta que más ocupa a la historia social es por qué los soldados siguieron combatiendo. Una respuesta subraya la coerción: consejos de guerra, ejecuciones ejemplares, disciplina y falta de alternativa. Otra subraya el consentimiento: Stéphane Audoin-Rouzeau y Annette Becker han defendido la existencia de una cultura de guerra con odio al enemigo, patriotismo interiorizado y consentimiento amplio, lo que explicaría la persistencia sin recurrir solo al miedo.',
          'Entre ambas está la negociación tácita. Tony Ashworth documentó el sistema de vivir y dejar vivir en sectores tranquilos, con bombardeos rituales a horas fijas y patrullas que se evitaban. Leonard Smith mostró en la división francesa que estudió una negociación permanente entre mando y tropa sobre lo que se podía exigir. Los motines franceses de 1917 encajan ahí: los amotinados no abandonaron las trincheras ni fraternizaron, se negaron a atacar. Fue una huelga, no una deserción.',
          'El resultado del desgaste no fue el hundimiento moral de un bando sino la quiebra material de las coaliciones más débiles. Rusia se retiró en 1917 tras dos revoluciones, Austria-Hungría se descompuso por nacionalidades y Alemania agotó sus reservas humanas tras la ofensiva fracasada de la primavera de 1918, justo cuando llegaban a Francia doscientos mil estadounidenses al mes.',
        ].join('\n\n'),
        callout:
          'Los motines franceses de 1917 fueron una huelga, no una deserción: los soldados sostuvieron la línea y se negaron a atacar. Pétain lo entendió y cambió las tácticas antes que los castigos.',
      },
      {
        title: 'Guerra total y frente interno',
        body: [
          'La guerra obligó a los Estados a hacer lo que ningún gobierno liberal había hecho en tiempo de paz: fijar precios, requisar producción, dirigir la mano de obra, racionar alimentos y controlar la información. Alemania creó una oficina de materias primas dirigida por Walther Rathenau ya en agosto de 1914; Gran Bretaña aprobó la Defence of the Realm Act y un ministerio de municiones; Francia integró a los sindicatos en la gestión de la producción. El Estado del siglo XX nace en buena parte en esos cuatro años.',
          'La movilización de mano de obra transformó el trabajo femenino. Cientos de miles de mujeres entraron en la industria de municiones, el transporte y la administración. Conviene precisar el alcance: muchas ya trabajaban antes en el servicio doméstico o el textil y lo que cambió fue el sector, el salario y la visibilidad, y buena parte de esos puestos se perdió en 1919. Aun así, la conexión con la extensión del voto femenino en Gran Bretaña en 1918 y en Alemania en 1919 es difícil de ignorar.',
          'El bloqueo naval británico fue un arma central y poco espectacular. Al cortar importaciones de alimentos y fertilizantes a las potencias centrales provocó el invierno del nabo de 1916 y 1917 y una desnutrición generalizada; las estimaciones alemanas de posguerra hablaron de varios centenares de miles de muertos civiles por sus efectos, cifra discutida pero indicativa. El bloqueo se mantuvo además hasta la firma de la paz en 1919, lo que pesó en la percepción alemana del tratado.',
          'La propaganda fue estatal y masiva por primera vez. Las atrocidades alemanas en Bélgica de 1914, que John Horne y Alan Kramer documentaron en 2001 como reales aunque muy exageradas en su versión propagandística, alimentaron una imagen del enemigo que después se volvió contra la credibilidad de los gobiernos: la incredulidad de los años treinta ante las noticias de persecución tuvo aquí un antecedente.',
          'El coste financiero se cubrió con deuda e inflación más que con impuestos. Todos los beligerantes abandonaron la convertibilidad en oro, Europa pasó de ser acreedora a deudora de Estados Unidos, y de ahí salieron la inflación alemana de 1923, el problema de las deudas interaliadas y la fragilidad monetaria de los años veinte.',
        ].join('\n\n'),
      },
      {
        title: 'Una guerra mundial de verdad',
        body: [
          'Llamarla mundial no es una exageración retórica. El Imperio otomano abrió frentes en el Cáucaso, Mesopotamia, Palestina y los Dardanelos; Japón ocupó posiciones alemanas en el Pacífico y en China; hubo campañas en el África oriental que duraron hasta después del armisticio; y las metrópolis reclutaron a más de cuatro millones de hombres en sus imperios. Solo la India aportó en torno a un millón trescientos mil, y Francia movilizó cientos de miles de soldados y trabajadores africanos e indochinos.',
          'El desastre de Galípoli en 1915 marcó a Australia y Nueva Zelanda como momento fundacional nacional. La campaña otomana en el este vino acompañada del genocidio armenio, iniciado convencionalmente el 24 de abril de 1915 con la detención de la élite intelectual de Constantinopla: deportaciones, marchas de muerte y masacres que costaron entre ochocientas mil y un millón y medio de vidas. Es el primer genocidio ampliamente documentado del siglo, y su negación oficial por Turquía sigue siendo un asunto diplomático abierto.',
          'La guerra en el mar tuvo menos batallas de las esperadas y más consecuencias. Jutlandia, en 1916, fue tácticamente indecisa y estratégicamente favorable a Gran Bretaña, que conservó el bloqueo. Alemania respondió con el arma asimétrica: la guerra submarina sin restricciones, reanudada en febrero de 1917 con el cálculo de rendir a Gran Bretaña antes de que Estados Unidos pudiera intervenir de forma efectiva. El cálculo falló por poco, y el sistema de convoyes redujo las pérdidas de forma drástica.',
          'Estados Unidos entró en abril de 1917 empujado por los hundimientos, por el telegrama Zimmermann, que ofrecía a México territorio estadounidense a cambio de una alianza, y por una exposición financiera enorme a la victoria aliada. Su peso inmediato fue económico y psicológico más que militar; el peso militar llegó en 1918 y fue decisivo por su efecto sobre el cálculo alemán de reservas.',
          'Rusia hizo el camino inverso. La revolución de febrero de 1917 derribó al zar sin sacar al país de la guerra, y esa continuidad hundió al gobierno provisional. Los bolcheviques tomaron el poder en octubre con la consigna de paz, tierra y pan, y firmaron en marzo de 1918 el tratado de Brest-Litovsk, que entregaba a Alemania territorios inmensos. Ese tratado, mucho más duro que Versalles, es un dato útil para juzgar lo que las potencias centrales habrían impuesto de haber ganado.',
        ].join('\n\n'),
        callout:
          'Brest-Litovsk arrebató a Rusia un tercio de su población y la mayor parte de su industria. Es el mejor argumento contra la idea de que Versalles fue excepcionalmente duro para los criterios de la época.',
      },
      {
        title: 'La paz y lo que dejó abierto',
        body: [
          'El armisticio del 11 de noviembre de 1918 llegó con el frente en territorio ocupado y sin tropas aliadas en Alemania. Esa circunstancia alimentó el mito de la puñalada por la espalda, según el cual el ejército invicto habría sido traicionado por la retaguardia, un relato falso y políticamente decisivo en los años siguientes.',
          'La conferencia de París reunió intereses incompatibles: el programa de Wilson con la autodeterminación y la Sociedad de Naciones, la exigencia francesa de seguridad frente a un vecino con más población e industria, y el interés británico en un continente equilibrado y en un mercado alemán recuperado. Versalles impuso pérdidas territoriales, desarme, ocupación de Renania y reparaciones cuya cifra se dejó para 1921, y lo hizo tras el artículo 231 sobre la responsabilidad, redactado como base jurídica de la indemnización y leído en Alemania como una condena moral.',
          'Keynes publicó en 1919 un alegato demoledor sobre la inviabilidad económica del tratado que fijó la opinión anglosajona durante décadas. La revisión posterior, de Étienne Mantoux a Sally Marks, ha señalado que las reparaciones efectivamente pagadas fueron muy inferiores a lo nominal, que Alemania conservó intacta su base industrial y que el problema fue tanto político como económico. La fórmula que resume el consenso actual es que el tratado fue demasiado duro para conciliar y demasiado blando para incapacitar.',
          'Cuatro imperios desaparecieron: el alemán, el austrohúngaro, el ruso y el otomano. En su lugar surgieron Estados nacionales en Europa central y oriental que contenían minorías enormes, protegidas por tratados que nadie hizo cumplir, y territorios de Oriente Próximo repartidos como mandatos según líneas ya negociadas en el acuerdo Sykes-Picot de 1916 y complicadas por la declaración Balfour de 1917. Casi todos los conflictos posteriores de la región arrancan ahí.',
          'El balance humano fue de unos nueve a diez millones de militares muertos y una cifra comparable de civiles si se cuentan el bloqueo, las masacres y las epidemias. La gripe llamada española de 1918 y 1919 mató más gente que la propia guerra. George Mosse propuso el concepto de brutalización para explicar la violencia política de posguerra: una generación acostumbrada al combate trasladó sus formas a la calle, en los cuerpos francos alemanes o en el escuadrismo italiano. La tesis se discute, porque países igualmente golpeados como Gran Bretaña o Francia no derivaron hacia la guerra civil, pero sigue siendo la mejor manera de vincular 1918 con lo que vino después.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Cheque en blanco', definition: 'Apoyo incondicional alemán a Austria-Hungría del 5 de julio de 1914 frente a Serbia, sin condicionar la respuesta austríaca.' },
      { term: 'Plan Schlieffen', definition: 'Diseño alemán para derrotar a Francia en seis semanas atravesando Bélgica antes de que Rusia completase su movilización.' },
      { term: 'Guerra por horario', definition: 'Tesis de A. J. P. Taylor: los planes de movilización ferroviaria reducían el plazo de decisión política a horas y aceleraron la escalada.' },
      { term: 'Guerra de desgaste', definition: 'Estrategia que busca agotar los recursos humanos y materiales del enemigo en vez de derrotarlo por maniobra. Verdún es su formulación explícita.' },
      { term: 'Cortina de fuego móvil', definition: 'Barrera de artillería que avanza por delante de la infantería a ritmo calculado. Núcleo de la táctica aliada desde 1917.' },
      { term: 'Tropas de asalto', definition: 'Unidades alemanas de infiltración que buscaban los puntos débiles en lugar de atacar en línea. Base de la ofensiva de marzo de 1918.' },
      { term: 'Guerra total', definition: 'Movilización de la economía, la mano de obra y la opinión de un país entero, con desaparición de la frontera entre frente y retaguardia.' },
      { term: 'Bloqueo naval', definition: 'Corte británico de importaciones a las potencias centrales. Provocó el invierno del nabo de 1916-1917 y se mantuvo hasta la firma de la paz.' },
      { term: 'Guerra submarina sin restricciones', definition: 'Hundimiento sin aviso de cualquier buque en la zona declarada. Reanudada en 1917 aceptando el riesgo de la entrada estadounidense.' },
      { term: 'Vivir y dejar vivir', definition: 'Sistema de tregua tácita en sectores tranquilos del frente, documentado por Tony Ashworth: bombardeos rituales y patrullas que se evitaban.' },
      { term: 'Catorce Puntos', definition: 'Programa de Wilson de enero de 1918: diplomacia abierta, autodeterminación, libertad de los mares y una sociedad de naciones.' },
      { term: 'Artículo 231', definition: 'Cláusula de Versalles que atribuye a Alemania la responsabilidad de las pérdidas aliadas. Base jurídica de las reparaciones, leída como condena moral.' },
      { term: 'Puñalada por la espalda', definition: 'Mito según el cual el ejército alemán invicto fue traicionado por la retaguardia. Falso y central en la política alemana de entreguerras.' },
      { term: 'Brutalización', definition: 'Concepto de George Mosse: traslado de la violencia y los hábitos del frente a la política civil de posguerra.' },
    ],
    debates: [
      {
        question: '¿Quién fue responsable del estallido de 1914?',
        positions: [
          {
            school: 'Premeditación alemana (Fischer, 1961)',
            argument:
              'Alemania buscó deliberadamente una guerra continental para alcanzar objetivos de gran potencia, como muestran el consejo de guerra de 1912 y el programa de objetivos de septiembre de 1914.',
          },
          {
            school: 'Responsabilidad compartida (Clark, 2012)',
            argument:
              'No hubo un culpable sino sonámbulos: dirigentes vigilantes y ciegos a la vez, en un sistema donde Rusia, Francia y Serbia también asumieron riesgos deliberados.',
          },
          {
            school: 'Sistema y calendarios (Taylor, 1969)',
            argument:
              'Las alianzas convertidas en automatismos y los planes de movilización ferroviaria dejaron a los gobiernos sin margen: la maquinaria fue más rápida que la diplomacia.',
          },
        ],
        state:
          'La versión fuerte de Fischer no se sostiene, pero su núcleo sí: Berlín y Viena forzaron la escalada. El debate actual se ocupa de cómo repartir el resto de la responsabilidad sin borrar esa asimetría.',
      },
      {
        question: '¿Fue Versalles un tratado demasiado duro?',
        positions: [
          {
            school: 'Cartaginés e inviable (Keynes, 1919)',
            argument:
              'Las reparaciones excedían la capacidad de pago alemana, la amputación territorial y colonial arruinaba su economía y el resultado sería inestabilidad y revanchismo en toda Europa.',
          },
          {
            school: 'Revisión económica (Mantoux, 1946; Marks, 1978)',
            argument:
              'Alemania pagó una fracción de lo nominal, conservó intacta su base industrial y su población, y su crisis monetaria de 1923 respondió a decisiones fiscales internas más que al tratado.',
          },
          {
            school: 'Fallo político, no económico',
            argument:
              'El problema no fue la cifra sino la combinación de humillación pública y ausencia de mecanismos de aplicación creíbles. Demasiado duro para conciliar, demasiado blando para incapacitar.',
          },
        ],
        state:
          'El consenso se ha desplazado hacia la tercera posición. Brest-Litovsk sirve de contraste: fue mucho más severo, lo que relativiza la excepcionalidad de Versalles para los criterios de la época.',
      },
      {
        question: '¿Por qué siguieron combatiendo los soldados durante cuatro años?',
        positions: [
          {
            school: 'Consentimiento y cultura de guerra (Audoin-Rouzeau y Becker, 2000)',
            argument:
              'Existió una cultura de guerra interiorizada, con odio al enemigo y sentido del deber patriótico, que explica la persistencia sin recurrir principalmente a la coacción.',
          },
          {
            school: 'Coerción y disciplina',
            argument:
              'Consejos de guerra, ejecuciones ejemplares, censura del correo y ausencia de alternativa realista pesaron más que cualquier adhesión ideológica.',
          },
          {
            school: 'Negociación tácita (Ashworth, 1980; Smith, 1994)',
            argument:
              'Entre obediencia y rebelión hubo un espacio amplio: treguas informales, ritmos pactados de violencia y límites negociados a lo que el mando podía exigir.',
          },
        ],
        state:
          'La discusión sigue viva y con acento nacional: el consentimiento se ha estudiado sobre todo en Francia, la coerción en el caso italiano y la negociación en el británico. Los motines de 1917 son el caso de prueba de las tres.',
      },
    ],
    sources: [
      { author: 'Cancillerías europeas', title: 'Documentos diplomáticos de la crisis de julio', year: '1914', kind: 'primaria', note: 'Ultimátum austríaco, respuesta serbia y telegramas de movilización. Publicados por los gobiernos para justificarse.' },
      { author: 'Henri Barbusse', title: 'El fuego', year: '1916', kind: 'primaria', note: 'Escrito durante la guerra por un combatiente. Primer gran relato desmitificador publicado en plena contienda.' },
      { author: 'Siegfried Sassoon', title: 'Declaración de un soldado', year: '1917', kind: 'primaria', note: 'Un oficial condecorado denuncia la prolongación de la guerra. El ejército prefirió declararlo enfermo antes que juzgarlo.' },
      { author: 'Arthur Zimmermann', title: 'Telegrama a la embajada alemana en México', year: '1917', kind: 'primaria', note: 'Ofrece a México territorio estadounidense a cambio de una alianza. Interceptado y descifrado por los británicos.' },
      { author: 'Woodrow Wilson', title: 'Los Catorce Puntos', year: '1918', kind: 'primaria', note: 'Programa de paz basado en la autodeterminación y la seguridad colectiva. Fija las expectativas que París defraudó.' },
      { author: 'Henry Morgenthau', title: 'Ambassador Morgenthaus Story', year: '1918', kind: 'primaria', note: 'Testimonio del embajador estadounidense en Constantinopla sobre las deportaciones armenias.' },
      { author: 'Tratado de Versalles', title: 'Texto del tratado, en especial el artículo 231', year: '1919', kind: 'primaria', note: 'Responsabilidad, desarme, reparaciones y fronteras. Su lectura completa desmiente muchas versiones divulgadas.' },
      { author: 'John Maynard Keynes', title: 'Las consecuencias económicas de la paz', year: '1919', kind: 'primaria', note: 'Alegato de un negociador dimitido. Fijó durante décadas la idea de una paz cartaginesa.' },
      { author: 'Ernst Jünger', title: 'Tempestades de acero', year: '1920', kind: 'primaria', note: 'La guerra como experiencia formativa y estética. Contrapunto imprescindible al relato desmitificador.' },
      { author: 'Erich Maria Remarque', title: 'Sin novedad en el frente', year: '1929', kind: 'primaria', note: 'La generación perdida como memoria colectiva. Su éxito internacional moldeó la imagen popular del conflicto.' },
      { author: 'Vera Brittain', title: 'Testamento de juventud', year: '1933', kind: 'primaria', note: 'La guerra desde la enfermería y la retaguardia, y el duelo como experiencia central de una generación.' },
      { author: 'Fritz Fischer', title: 'Los objetivos de guerra de la Alemania imperial', year: '1961', kind: 'estudio', note: 'Abre la mayor controversia de la historiografía alemana del siglo XX sobre la responsabilidad de 1914.' },
      { author: 'A. J. P. Taylor', title: 'War by Timetable', year: '1969', kind: 'estudio', note: 'Los planes de movilización ferroviaria como constricción decisiva en la última semana de julio.' },
      { author: 'Paul Fussell', title: 'La Gran Guerra y la memoria moderna', year: '1975', kind: 'estudio', note: 'Cómo el conflicto reconfiguró el lenguaje, la ironía y la sensibilidad literaria del siglo XX.' },
      { author: 'John Keegan', title: 'El rostro de la batalla', year: '1976', kind: 'estudio', note: 'El Somme desde la experiencia del combatiente. Inaugura una forma de historia militar centrada en el soldado.' },
      { author: 'Sally Marks', title: 'The Myths of Reparations', year: '1978', kind: 'estudio', note: 'Demuestra la distancia entre las cifras nominales de reparación y lo efectivamente pagado.' },
      { author: 'Tony Ashworth', title: 'Trench Warfare 1914-1918: The Live and Let Live System', year: '1980', kind: 'estudio', note: 'Sociología de las treguas informales entre unidades enfrentadas.' },
      { author: 'George L. Mosse', title: 'Fallen Soldiers', year: '1990', kind: 'estudio', note: 'El mito de la experiencia de guerra y la brutalización de la política de posguerra.' },
      { author: 'Jay Winter', title: 'El duelo y la memoria', year: '1995', kind: 'estudio', note: 'Monumentos, luto colectivo y formas tradicionales de consuelo frente a la tesis de la ruptura modernista.' },
      { author: 'Stéphane Audoin-Rouzeau y Annette Becker', title: '14-18: retrouver la guerre', year: '2000', kind: 'estudio', note: 'La cultura de guerra y el consentimiento como claves de la resistencia de los combatientes.' },
      { author: 'John Horne y Alan Kramer', title: 'German Atrocities, 1914', year: '2001', kind: 'estudio', note: 'Establece qué ocurrió realmente en Bélgica y cómo la propaganda lo deformó en ambas direcciones.' },
      { author: 'Hew Strachan', title: 'The First World War, vol. I: To Arms', year: '2001', kind: 'estudio', note: 'Síntesis global que devuelve el peso debido a los frentes extraeuropeos y a la economía de guerra.' },
      { author: 'Christopher Clark', title: 'Sonámbulos', year: '2012', kind: 'estudio', note: 'Reconstrucción de la crisis de julio con un reparto de responsabilidades más amplio que el de Fischer.' },
      { author: 'Adam Tooze', title: 'El diluvio', year: '2014', kind: 'estudio', note: 'El desplazamiento del centro financiero del mundo a Estados Unidos y el nuevo orden que sale de 1918.' },
    ],
  },
  questions: [
    {
      id: 'gran-guerra-1', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué fue el cheque en blanco de julio de 1914?',
      options: [
        'El crédito con que Gran Bretaña financió a sus aliados continentales',
        'El apoyo incondicional alemán a Austria-Hungría frente a Serbia, sin condicionar su respuesta',
        'La autorización rusa a Serbia para rechazar el ultimátum',
        'El compromiso francés de no intervenir en un conflicto balcánico',
      ],
      answer: 1,
      explanation: 'Dado el 5 de julio, permitió a Viena redactar un ultimátum pensado para ser rechazado. Es la pieza central de la tesis de Fischer.',
    },
    {
      id: 'gran-guerra-2', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué sostiene Christopher Clark en Sonámbulos?',
      options: [
        'Que Alemania planificó la guerra desde el consejo de 1912',
        'Que la guerra fue un accidente sin responsables identificables',
        'Que la responsabilidad fue compartida por dirigentes vigilantes y a la vez ciegos ante las consecuencias',
        'Que Serbia fue la única potencia que buscó deliberadamente el conflicto',
      ],
      answer: 2,
      explanation: 'Se le objeta que la simetría diluye la diferencia entre quien fuerza la crisis y quien reacciona.',
    },
    {
      id: 'gran-guerra-3', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Por qué el frente occidental se inmovilizó a finales de 1914?',
      options: [
        'Porque los ejércitos agotaron sus reservas de munición ese mismo año',
        'Porque la potencia de fuego favorecía abrumadoramente a la defensa mientras el atacante avanzaba a pie',
        'Porque los mandos decidieron esperar a la llegada de los carros de combate',
        'Porque el terreno belga impedía cualquier maniobra de flanqueo',
      ],
      answer: 1,
      explanation: 'El defensor traía reservas en tren y el atacante caminaba. Sin un vehículo capaz de moverse bajo fuego, el asalto frontal era insostenible.',
    },
    {
      id: 'gran-guerra-4', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué arma causó la mayoría de las bajas del conflicto?',
      options: [
        'La ametralladora',
        'El gas de combate',
        'El fusil de repetición',
        'La artillería',
      ],
      answer: 3,
      explanation: 'En torno al setenta por ciento. La escasez de proyectiles llegó a derribar un gobierno británico en 1915 y obligó a crear un ministerio de municiones.',
    },
    {
      id: 'gran-guerra-5', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Cómo planteó Falkenhayn la batalla de Verdún?',
      options: [
        'Como una ruptura del frente para retomar la guerra de movimiento',
        'Como una operación de desgaste sobre un punto que Francia no podría abandonar por prestigio',
        'Como una maniobra de distracción para atacar en el este',
        'Como un ensayo general de las tácticas de infiltración',
      ],
      answer: 1,
      explanation: 'Duró diez meses, costó unos trescientos mil muertos entre los dos bandos y no desplazó el frente de forma significativa.',
    },
    {
      id: 'gran-guerra-6', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué matiza la historiografía militar reciente sobre los leones dirigidos por burros?',
      options: [
        'Que las bajas fueron muy inferiores a las contabilizadas en su momento',
        'Que los generales no tuvieron ninguna responsabilidad en las pérdidas',
        'Que los ejércitos aprendieron con rapidez dentro de las restricciones técnicas de la época, aunque ese aprendizaje se pagara con vidas',
        'Que la ofensiva frontal era en realidad la táctica más económica disponible',
      ],
      answer: 2,
      explanation: 'La curva de aprendizaje británica entre 1916 y 1918 es un campo de estudio establecido: sin radio de campaña ni transporte todoterreno, el margen táctico era estrecho.',
    },
    {
      id: 'gran-guerra-7', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué caracterizó a los motines franceses de 1917?',
      options: [
        'La deserción masiva y el abandono de las trincheras',
        'La fraternización con las tropas alemanas del sector',
        'La negativa a atacar sin abandonar la defensa de la línea',
        'La exigencia de una paz separada con las potencias centrales',
      ],
      answer: 2,
      explanation: 'Fue una huelga, no una deserción. Pétain respondió cambiando las tácticas y las condiciones de vida además de castigar.',
    },
    {
      id: 'gran-guerra-8', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué documentó Tony Ashworth con el sistema de vivir y dejar vivir?',
      options: [
        'La organización del racionamiento en las ciudades británicas',
        'Las treguas informales entre unidades enfrentadas, con bombardeos rituales y patrullas que se evitaban',
        'El reparto de tierras a los veteranos desmovilizados',
        'La negociación entre sindicatos y gobiernos sobre la producción de municiones',
      ],
      answer: 1,
      explanation: 'Entre la obediencia y la rebelión hubo un espacio amplio de violencia regulada tácitamente por las propias tropas.',
    },
    {
      id: 'gran-guerra-9', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué efecto tuvo el bloqueo naval británico sobre las potencias centrales?',
      options: [
        'Ninguno relevante, porque Alemania era autosuficiente en alimentos',
        'Solo afectó al suministro de materias primas militares',
        'Provocó desnutrición generalizada y el invierno del nabo de 1916-1917, y se mantuvo hasta la firma de la paz',
        'Fue levantado inmediatamente tras el armisticio de noviembre de 1918',
      ],
      answer: 2,
      explanation: 'Cortó alimentos y fertilizantes. Su mantenimiento durante los meses de negociación pesó en la percepción alemana del tratado.',
    },
    {
      id: 'gran-guerra-10', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Por qué reanudó Alemania la guerra submarina sin restricciones en 1917?',
      options: [
        'Porque calculó que podía rendir a Gran Bretaña antes de que Estados Unidos interviniera de forma efectiva',
        'Porque Jutlandia le había dado el control de la superficie del mar del Norte',
        'Porque Estados Unidos ya había declarado la guerra en 1916',
        'Porque el sistema de convoyes había demostrado ser ineficaz',
      ],
      answer: 0,
      explanation: 'El cálculo falló por poco. El convoy, adoptado ese mismo año, redujo las pérdidas de forma drástica.',
    },
    {
      id: 'gran-guerra-11', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué fue el telegrama Zimmermann?',
      options: [
        'La orden alemana de iniciar la ofensiva de marzo de 1918',
        'La propuesta alemana a México de una alianza a cambio de territorio estadounidense, interceptada por los británicos',
        'La comunicación del armisticio a las tropas alemanas',
        'La oferta de paz separada de Austria-Hungría a los aliados',
      ],
      answer: 1,
      explanation: 'Junto con los hundimientos y la exposición financiera a la victoria aliada, empujó a Estados Unidos a la guerra en abril de 1917.',
    },
    {
      id: 'gran-guerra-12', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Por qué se cita Brest-Litovsk en el debate sobre la dureza de Versalles?',
      options: [
        'Porque fue el modelo textual que copiaron los negociadores de París',
        'Porque anuló todas las reparaciones exigidas a Rusia',
        'Porque las condiciones impuestas por Alemania a Rusia fueron mucho más severas, lo que relativiza la excepcionalidad de Versalles',
        'Porque nunca llegó a firmarse y quedó como una amenaza',
      ],
      answer: 2,
      explanation: 'Arrebató a Rusia un tercio de su población y la mayor parte de su industria. Indica qué habrían impuesto las potencias centrales de haber ganado.',
    },
    {
      id: 'gran-guerra-13', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué establece el artículo 231 del Tratado de Versalles?',
      options: [
        'La cifra exacta de las reparaciones alemanas',
        'La responsabilidad de Alemania por las pérdidas aliadas, como base jurídica de la indemnización',
        'La ocupación indefinida de Renania por tropas francesas',
        'La expulsión de Alemania de la Sociedad de Naciones',
      ],
      answer: 1,
      explanation: 'La cifra se dejó para 1921. El artículo se redactó como fundamento legal y se leyó en Alemania como condena moral.',
    },
    {
      id: 'gran-guerra-14', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué corrigen Mantoux y Sally Marks en la lectura de Keynes sobre las reparaciones?',
      options: [
        'Que las cifras nominales eran aún mayores de lo que Keynes calculó',
        'Que Alemania pagó una fracción de lo nominal y conservó intacta su base industrial',
        'Que las reparaciones se cobraron íntegramente antes de 1923',
        'Que Keynes no participó en la conferencia de paz',
      ],
      answer: 1,
      explanation: 'De ahí la fórmula que resume el consenso: demasiado duro para conciliar, demasiado blando para incapacitar.',
    },
    {
      id: 'gran-guerra-15', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿En qué consiste el mito de la puñalada por la espalda?',
      options: [
        'En la acusación aliada de que Alemania firmó el armisticio de mala fe',
        'En la creencia de que el ejército alemán invicto fue traicionado por la retaguardia',
        'En la versión austríaca del reparto de responsabilidades de 1914',
        'En la denuncia de los soldados franceses contra su alto mando',
      ],
      answer: 1,
      explanation: 'El armisticio llegó con el frente en territorio ocupado y sin tropas aliadas en Alemania, circunstancia que hizo verosímil un relato falso y decisivo.',
    },
    {
      id: 'gran-guerra-16', era: 'Edad Contemporánea', topicId: 'gran-guerra', topic: 'Primera Guerra Mundial',
      question: '¿Qué propone George Mosse con el concepto de brutalización?',
      options: [
        'Que la propaganda de guerra endureció el trato a los prisioneros',
        'Que la violencia y los hábitos del frente se trasladaron a la política civil de posguerra',
        'Que los ejércitos abandonaron las convenciones sobre trato a civiles desde 1914',
        'Que la memoria del conflicto impidió cualquier rearme en los años veinte',
      ],
      answer: 1,
      explanation: 'Se discute porque países igualmente golpeados como Gran Bretaña o Francia no derivaron hacia la violencia política, pero sigue siendo el mejor vínculo entre 1918 y lo que vino después.',
    },
  ],
}
