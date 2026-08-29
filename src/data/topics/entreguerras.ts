import type { TopicModule } from '../types.ts'

export const entreguerras: TopicModule = {
  topic: {
    id: 'entreguerras',
    era: 'Edad Contemporánea',
    title: 'Crisis de 1929 y fascismos',
    years: '1919–1939',
    country: 'Europa',
    description: 'Veinte años entre dos guerras: una paz que no estabilizó nada, un hundimiento económico global y una respuesta política que destruyó las democracias por dentro.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '↯',
    color: 'plum',
    summary:
      'En 1919 Europa tenía más democracias que nunca; en 1939 quedaban una docena. El período de entreguerras es el laboratorio donde se comprueba que un régimen representativo puede desaparecer sin invasión exterior y con apoyo electoral. Tres procesos se entrelazan: una paz que dejó a los vencidos resentidos y a los vencedores sin voluntad de sostenerla, una economía internacional reconstruida sobre el crédito estadounidense y el patrón oro que se hundió a partir de 1929, y la aparición de un tipo de política nueva, movilizadora, paramilitar y antiliberal, que en Italia y Alemania llegó al gobierno por vías legales y después demolió la legalidad que la había llevado allí. Entender por qué ocurrió exige separar tres preguntas que suelen mezclarse: qué falló en Versalles, qué hizo la Depresión y qué tenía de específico el fascismo.',
    keyDates: [
      { date: '28 de junio de 1919', event: 'Firma del Tratado de Versalles: pérdidas territoriales, desarme, artículo 231 sobre la responsabilidad y reparaciones sin cifra fijada.' },
      { date: 'Octubre de 1922', event: 'Marcha sobre Roma. Víctor Manuel III nombra jefe de gobierno a Mussolini sin que se dispare un tiro.' },
      { date: '1923', event: 'Ocupación franco-belga del Ruhr, hiperinflación alemana y putsch fallido de Hitler en Múnich.' },
      { date: '1924–1929', event: 'Plan Dawes, Locarno y entrada de Alemania en la Sociedad de Naciones. Los años de estabilización relativa.' },
      { date: '24–29 de octubre de 1929', event: 'Hundimiento de la Bolsa de Nueva York. Comienza la contracción del crédito internacional.' },
      { date: '1931', event: 'Quiebra del Creditanstalt vienés, crisis bancaria centroeuropea y salida británica del patrón oro.' },
      { date: '30 de enero de 1933', event: 'Hindenburg nombra canciller a Hitler al frente de un gabinete de coalición con mayoría conservadora.' },
      { date: 'Marzo de 1933', event: 'Incendio del Reichstag, decreto de emergencia y Ley de Plenos Poderes: el fin legal de la República de Weimar.' },
      { date: '1935–1936', event: 'Invasión italiana de Etiopía, remilitarización de Renania y fracaso público de la seguridad colectiva.' },
      { date: '1936–1939', event: 'Guerra Civil española: intervención alemana e italiana, no intervención franco-británica y ayuda soviética.' },
      { date: 'Marzo de 1938', event: 'Anschluss: anexión de Austria sin resistencia internacional.' },
      { date: 'Septiembre de 1938', event: 'Conferencia de Múnich. Checoslovaquia cede los Sudetes sin estar sentada a la mesa.' },
      { date: '23 de agosto de 1939', event: 'Pacto Ribbentrop-Mólotov con protocolo secreto de reparto de Europa oriental.' },
    ],
    sections: [
      {
        title: 'Una paz que no cerró la guerra',
        body: [
          'La conferencia de París de 1919 tuvo que resolver a la vez el destino de cuatro imperios desaparecidos, las deudas de guerra entre aliados, la seguridad futura de Francia y la aplicación de un principio, el de nacionalidad, imposible de cumplir en una Europa central donde los pueblos vivían mezclados. El resultado fueron cinco tratados que crearon Estados nuevos con minorías dentro, dejaron a tres millones de alemanes en Checoslovaquia y a otros tantos húngaros fuera de Hungría, y fijaron un principio que se aplicó a los vencidos solo cuando les perjudicaba.',
          'Versalles impuso a Alemania la pérdida de una séptima parte de su territorio europeo y de todas sus colonias, un ejército de cien mil hombres sin aviación ni submarinos, la desmilitarización de Renania y el famoso artículo 231, que atribuía a Alemania y sus aliados la responsabilidad de las pérdidas causadas. Ese artículo era el fundamento jurídico de las reparaciones, pero se leyó en Alemania como una acusación moral y se convirtió en el eje de la propaganda contra el tratado, que la derecha llamó siempre Diktat.',
          'La crítica más influyente vino de dentro. John Maynard Keynes abandonó la delegación británica y publicó en 1919 un libelo brillante que sostenía que las reparaciones eran económicamente imposibles y que arruinar a Alemania arruinaba a Europa. Su libro moldeó la opinión anglosajona durante veinte años y contribuyó a que Gran Bretaña dejara de sostener el tratado que había firmado. Sally Marks y otros han mostrado después que la carga efectiva fue muy inferior a la nominal y que Alemania pagó bastante menos de lo pactado mientras se endeudaba en Nueva York.',
          'El problema mayor no fue la dureza sino la incoherencia. El tratado era demasiado severo para reconciliar y demasiado blando para incapacitar: dejó intacta la unidad alemana y su potencial industrial, y rodeó al país de Estados pequeños y divididos. Además nació sin garante. El Senado de Estados Unidos no ratificó el tratado ni el ingreso en la Sociedad de Naciones, la Unión Soviética quedó fuera del sistema y Francia se encontró sola frente a un vecino con sesenta millones de habitantes.',
          'La Sociedad de Naciones fue la primera organización internacional con vocación universal y aportó cosas duraderas: mandatos, protección de minorías, salud pública, refugiados. Pero carecía de fuerza propia, decidía por unanimidad y sus sanciones dependían de la voluntad de las grandes potencias. Su descrédito no se produjo en 1919 sino en 1931 en Manchuria y en 1935 en Etiopía, cuando se comprobó que la seguridad colectiva no se aplicaría contra un miembro poderoso.',
        ].join('\n\n'),
        callout:
          'Versalles no fue ni excepcionalmente duro ni suicida: fue un tratado sin guardián. Estados Unidos no lo ratificó y Gran Bretaña dejó de creer en él antes de que Alemania empezara a incumplirlo.',
      },
      {
        title: 'Estabilización, crédito y hundimiento',
        body: [
          'Entre 1924 y 1929 pareció que Europa se recomponía. El Plan Dawes reestructuró las reparaciones y abrió el grifo del crédito estadounidense; los acuerdos de Locarno de 1925 garantizaron las fronteras occidentales y Alemania entró en la Sociedad de Naciones. La producción industrial superó los niveles de 1913, las monedas volvieron al patrón oro y en Berlín, Viena o París hubo una explosión cultural que todavía define la imagen de la década.',
          'La base de esa prosperidad era frágil. El circuito consistía en que Estados Unidos prestaba a Alemania, Alemania pagaba reparaciones a Francia y Gran Bretaña, y estos devolvían sus deudas de guerra a Estados Unidos. Todo dependía de que el crédito norteamericano siguiera fluyendo, y en 1928 empezó a retirarse hacia la especulación bursátil interna antes incluso del crac. El patrón oro, restaurado con paridades irreales, obligaba además a cualquier país en dificultades a defender su moneda subiendo tipos y recortando gasto, es decir, a agravar la recesión.',
          'El hundimiento de Wall Street en octubre de 1929 fue el detonante, no la causa. Lo que convirtió una crisis bursátil en la Gran Depresión fue la cadena posterior: contracción del crédito, quiebras bancarias en cadena, caída de precios agrícolas que arruinó al campo mundial, guerra arancelaria tras el arancel Smoot-Hawley de 1930 y una política monetaria y fiscal que en casi todas partes hizo lo contrario de lo necesario. Charles Kindleberger lo explicó por la falta de una potencia dispuesta a estabilizar el sistema; Barry Eichengreen y Peter Temin, por las cadenas doradas del patrón oro.',
          'Las cifras son brutales. La producción industrial estadounidense cayó cerca de la mitad, la alemana un cuarenta por ciento, el comercio mundial se redujo a un tercio de su valor y en 1932 había seis millones de parados en Alemania y trece en Estados Unidos. La recuperación llegó antes y con más fuerza allí donde se abandonó pronto el patrón oro: Gran Bretaña en 1931, Estados Unidos en 1933, Francia solo en 1936, con resultados coherentes con esa secuencia.',
          'El efecto político fue el decisivo. La Depresión no creó el fascismo, que existía desde 1919 y gobernaba en Italia desde 1922, pero convirtió a los partidos antisistema en fuerzas de masas. El voto nazi pasó del dos coma seis por ciento en 1928 al dieciocho en 1930 y al treinta y siete en julio de 1932, con una correlación clara entre paro, ruina agraria y radicalización. Donde las coaliciones democráticas mantuvieron el crédito social, como en Escandinavia, la extrema derecha no despegó.',
        ].join('\n\n'),
      },
      {
        title: 'Italia: la invención del fascismo',
        body: [
          'Italia salió vencedora de la guerra y se sintió estafada. La expresión victoria mutilada resumía la frustración por lo no obtenido en el Adriático, y el clima de 1919 y 1920 añadió ocupaciones de fábricas, huelgas agrarias y un miedo de propietarios y clases medias a una revolución que en realidad no tenía dirección ni plan. Sobre ese miedo creció el escuadrismo: bandas de excombatientes que quemaban cámaras de trabajo y sedes socialistas con la tolerancia de la policía y la financiación de los agrarios del valle del Po.',
          'Mussolini, socialista expulsado del partido por defender la intervención en la guerra, fundó los Fasci di Combattimento en marzo de 1919 con un programa republicano y casi izquierdista que fracasó en las urnas. Su acierto fue reorientar el movimiento hacia el orden y la propiedad sin renunciar a la violencia ni al lenguaje de la revolución nacional. En 1921 el Partido Nacional Fascista entraba en el Parlamento en las listas del liberal Giolitti, que creía poder domesticarlo.',
          'La marcha sobre Roma de octubre de 1922 fue más teatro que asalto. Unos treinta mil camisas negras mal armados se concentraron en las afueras mientras el rey se negaba a firmar el estado de sitio que le proponía el gobierno y llamaba a Mussolini para formar gabinete. La llegada al poder fue legal y con apoyo de la derecha liberal, un patrón que se repetiría en Alemania once años más tarde.',
          'La dictadura se construyó por etapas. La ley Acerbo de 1923 daba dos tercios de los escaños a la lista más votada; el asesinato del diputado socialista Matteotti en 1924 abrió una crisis que la oposición no supo aprovechar; en enero de 1925 Mussolini asumió públicamente la responsabilidad y comenzó el desmontaje: partido único, disolución de sindicatos libres, tribunal especial, policía política y prensa controlada. Los Pactos de Letrán de 1929 le dieron la paz con la Iglesia y una legitimidad interna decisiva.',
          'El régimen se autodenominó totalitario, palabra acuñada por sus críticos y adoptada con orgullo por Giovanni Gentile. En la práctica fue un totalitarismo incompleto: la monarquía siguió existiendo, el ejército conservó su autonomía y la Iglesia mantuvo un espacio propio. Su modelo económico fue el corporativismo, que suprimió el conflicto laboral encuadrando a patronos y obreros en corporaciones estatales, y su vocación exterior, la conquista de un imperio, se cumplió en Etiopía en 1935 con gas mostaza y bombardeo de población civil.',
        ].join('\n\n'),
        callout:
          'Ni en Italia ni en Alemania el fascismo tomó el poder por la fuerza: en ambos casos lo entregó una élite conservadora que se creía capaz de utilizarlo.',
      },
      {
        title: 'Alemania: de Weimar al Tercer Reich',
        body: [
          'La República de Weimar nació derrotada, con la leyenda de la puñalada por la espalda circulando desde el primer día y con una izquierda partida en dos tras el aplastamiento de los espartaquistas por los cuerpos francos en enero de 1919. Su Constitución era técnicamente avanzada, con sufragio femenino y derechos sociales, y contenía dos piezas que resultarían letales: la representación proporcional pura, que fragmentó el Parlamento, y el artículo 48, que permitía al presidente gobernar por decreto de emergencia.',
          'La república sobrevivió a un putsch de derecha en 1920, a la hiperinflación de 1923, que arruinó a los ahorradores y quebró la confianza de la clase media, y a los golpes de ambos extremos. Entre 1924 y 1929 conoció unos años de aparente normalidad, con Stresemann en Exteriores, entrada en la Sociedad de Naciones y esplendor cultural. Detlev Peukert describió esa etapa como una modernidad en crisis: los conflictos no desaparecieron, se aplazaron mediante gasto social financiado a crédito.',
          'Desde 1930 la república dejó de funcionar como parlamentaria. Brüning gobernó por decreto con el respaldo de Hindenburg, aplicó deflación y recorte del gasto en plena depresión y convocó elecciones que solo engordaron a nazis y comunistas. El KPD, siguiendo la línea de la Internacional, combatió a los socialdemócratas como socialfascistas, lo que hizo imposible cualquier frente común. Entre 1930 y 1933 hubo tres cancilleres de gabinete presidencial y ninguna mayoría capaz de gobernar.',
          'El NSDAP era en 1933 un partido en retroceso: había perdido dos millones de votos en noviembre de 1932 y estaba endeudado. Llegó al poder porque un grupo reducido de conservadores en torno a Papen convenció a Hindenburg de que un gabinete con Hitler de canciller y solo dos ministros nazis podría ser controlado. Ian Kershaw ha insistido en que la clave no está en un ascenso irresistible sino en esa decisión de un puñado de personas en enero de 1933.',
          'La destrucción de la legalidad tomó cinco meses. El incendio del Reichstag en febrero permitió un decreto que suspendió los derechos fundamentales y no se levantó nunca; las elecciones de marzo se celebraron con la oposición comunista ya detenida; la Ley de Plenos Poderes se aprobó con los votos del Zentrum y transfirió al gobierno la potestad legislativa. Siguió la Gleichschaltung: disolución de partidos y sindicatos, depuración de la función pública, ley de restauración del funcionariado profesional que expulsó a los judíos de la administración, y en 1935 las leyes de Núremberg. La noche de los cuchillos largos de 1934 liquidó a la dirección de las SA y compró definitivamente la lealtad del ejército.',
        ].join('\n\n'),
      },
      {
        title: 'Democracias, frentes populares y España',
        body: [
          'Frente a la crisis, las democracias que sobrevivieron ensayaron respuestas distintas. Estados Unidos aplicó el New Deal de Roosevelt, que no fue un plan coherente sino una sucesión de programas de obras públicas, regulación bancaria, seguridad social y reconocimiento sindical; no acabó con el paro, que solo desapareció con el rearme, pero salvó el sistema político y cambió la relación entre Estado y economía. Suecia combinó devaluación temprana y pacto entre sindicatos y patronal.',
          'En Francia, la reacción de la izquierda a las manifestaciones antiparlamentarias de febrero de 1934 produjo el Frente Popular, coalición de socialistas, radicales y comunistas que ganó en 1936 y aprobó con los acuerdos de Matignon las cuarenta horas, las vacaciones pagadas y los convenios colectivos. Duró poco: la fuga de capitales, la devaluación y la división ante la guerra de España lo desgastaron en dos años.',
          'España condensó todo el período en cinco años. La Segunda República de 1931 emprendió una reforma agraria, una separación de Iglesia y Estado, el Estatuto catalán y una reforma militar que le enfrentaron simultáneamente con los propietarios, la jerarquía eclesiástica, buena parte del ejército y unos sindicatos que la consideraban insuficiente. La sublevación de julio de 1936 fracasó a medias y esa media victoria produjo una guerra de casi tres años.',
          'La Guerra Civil española fue el primer campo de pruebas del conflicto europeo. Alemania e Italia enviaron aviación, carros y hombres a Franco; la Unión Soviética abasteció a la República a cambio de las reservas de oro y de una influencia creciente del PCE; Gran Bretaña y Francia impusieron una no intervención que solo perjudicó al bando que era gobierno legítimo. Guernica en 1937 anticipó el bombardeo deliberado de población civil como instrumento de guerra.',
          'El resultado consolidó una lectura simple del período: allí donde las derechas prefirieron la dictadura al riesgo de una reforma social, y donde las izquierdas se dividieron entre revolución y defensa de la legalidad, la democracia no aguantó. En 1939 solo quedaban regímenes representativos en el noroeste de Europa, Suiza y Checoslovaquia, que dejó de existir ese mismo año.',
        ].join('\n\n'),
        callout:
          'La no intervención no fue neutralidad. Aplicada mientras Alemania e Italia abastecían abiertamente a un bando, funcionó como una intervención de hecho a favor de los sublevados.',
      },
      {
        title: 'El camino a la guerra',
        body: [
          'La política exterior alemana desde 1933 siguió una escalada de hechos consumados: salida de la Sociedad de Naciones ese mismo año, servicio militar obligatorio y rearme declarado en 1935, remilitarización de Renania en 1936 con unas fuerzas que tenían orden de retirarse si Francia reaccionaba, Anschluss con Austria en 1938 y crisis de los Sudetes ese otoño. Cada paso se justificaba con el principio de nacionalidad y con los agravios de Versalles, es decir, con el lenguaje de los propios vencedores.',
          'El apaciguamiento tuvo razones que hoy se enumeran mal si se leen solo como cobardía. Gran Bretaña tenía un imperio que defender en tres continentes, un rearme retrasado, un recuerdo demoledor de 1914 a 1918 y una opinión pública pacifista; muchos de sus dirigentes creían además que buena parte de las reclamaciones alemanas eran legítimas. La conferencia de Múnich de septiembre de 1938 entregó los Sudetes sin que Checoslovaquia estuviera presente y fue recibida en Londres con alivio popular.',
          'La ocupación de Praga en marzo de 1939 rompió la lógica del apaciguamiento, porque ya no se trataba de alemanes. Gran Bretaña y Francia dieron garantías a Polonia, tarde y sin capacidad de cumplirlas, e iniciaron unas negociaciones con Moscú que llevaron con desgana. El 23 de agosto de 1939 Alemania y la Unión Soviética firmaron un pacto de no agresión con un protocolo secreto que repartía Polonia, los países bálticos y Besarabia. Una semana después empezó la guerra.',
          'A. J. P. Taylor sostuvo en 1961 que Hitler fue un estadista alemán tradicional que aprovechó oportunidades y que la guerra fue fruto de errores diplomáticos por ambas partes. La tesis provocó una respuesta abrumadora: los documentos del memorando Hossbach de 1937, el Plan Cuatrienal y la propia planificación económica muestran una preparación deliberada para una guerra de conquista. Adam Tooze ha demostrado además que el rearme alemán tenía un límite temporal y que la lógica del régimen empujaba a atacar antes de que la superioridad se perdiera.',
          'Queda una conclusión que el período impone. Ninguna de las democracias europeas cayó por una invasión: cayeron por dentro, con parlamentos que votaron su propia disolución, élites que abrieron la puerta y sociedades divididas por una crisis económica que la ortodoxia agravó. Es la razón por la que este período se sigue estudiando como algo más que un preámbulo de 1939.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Diktat', definition: 'Nombre que la derecha alemana dio al Tratado de Versalles para subrayar que fue impuesto sin negociación. Se convirtió en eje de la propaganda antirrepublicana.' },
      { term: 'Artículo 231', definition: 'Cláusula de Versalles que atribuía a Alemania y sus aliados la responsabilidad de las pérdidas de la guerra. Base jurídica de las reparaciones y agravio moral permanente.' },
      { term: 'Reparaciones', definition: 'Indemnizaciones impuestas a los vencidos. La cifra nominal fue enorme y lo efectivamente pagado, mucho menor, financiado con crédito estadounidense.' },
      { term: 'Patrón oro', definition: 'Sistema que fija la moneda a una cantidad de oro. Restaurado en los años veinte con paridades irreales, obligaba a responder a la crisis con deflación.' },
      { term: 'Plan Dawes', definition: 'Acuerdo de 1924 que reestructuró las reparaciones alemanas y abrió el flujo de préstamos norteamericanos que sostuvo la estabilización.' },
      { term: 'Gran Depresión', definition: 'Contracción económica mundial iniciada en 1929: quiebras bancarias, hundimiento del comercio y paro masivo. Detonante político del período.' },
      { term: 'Escuadrismo', definition: 'Violencia organizada de las escuadras fascistas italianas contra sindicatos y ayuntamientos socialistas, tolerada por la policía y financiada por los agrarios.' },
      { term: 'Corporativismo', definition: 'Encuadramiento obligatorio de patronos y obreros en corporaciones estatales para suprimir el conflicto laboral. Núcleo del modelo económico fascista.' },
      { term: 'Totalitarismo', definition: 'Concepto acuñado por los críticos del fascismo italiano y asumido por el régimen. Designa la pretensión de un Estado que absorbe toda la vida social.' },
      { term: 'Artículo 48', definition: 'Cláusula de la Constitución de Weimar que permitía al presidente gobernar por decreto de emergencia. Desde 1930 sustituyó de hecho al Parlamento.' },
      { term: 'Gleichschaltung', definition: 'Proceso de alineamiento forzoso de partidos, sindicatos, administración y asociaciones con el Estado nazi durante 1933 y 1934.' },
      { term: 'Leyes de Núremberg', definition: 'Legislación de 1935 que privó a los judíos alemanes de la ciudadanía y prohibió matrimonios y relaciones con no judíos.' },
      { term: 'Frente Popular', definition: 'Alianza de partidos de izquierda y centro contra el fascismo adoptada por la Internacional desde 1935. Gobernó en Francia y en España en 1936.' },
      { term: 'Apaciguamiento', definition: 'Política franco-británica de conceder reclamaciones alemanas para evitar la guerra. Culminó en Múnich y se rompió con la ocupación de Praga.' },
    ],
    debates: [
      {
        question: '¿Fue el Tratado de Versalles la causa de la Segunda Guerra Mundial?',
        positions: [
          {
            school: 'Paz cartaginesa (Keynes, 1919)',
            argument:
              'Las reparaciones eran económicamente imposibles y la humillación impuesta a Alemania destruyó la posibilidad de una recuperación europea equilibrada, sembrando el resentimiento que explotaría después.',
          },
          {
            school: 'Tratado sostenible mal ejecutado (Marks; Boemeke y Feldman, 1998)',
            argument:
              'La carga efectiva fue muy inferior a la nominal y Alemania conservó unidad, población e industria. El problema no fue la dureza del texto sino que ningún vencedor estuvo dispuesto a hacerlo cumplir.',
          },
          {
            school: 'Sin conexión causal directa (Steiner, 2005)',
            argument:
              'Entre 1919 y 1939 hay veinte años con decisiones autónomas. La Depresión, la política interior alemana y el apaciguamiento explican 1939 mucho mejor que un tratado de 1919.',
          },
        ],
        state:
          'La historiografía actual ha abandonado la lectura de Versalles como causa suficiente, sin negar que su deslegitimación permanente fuese munición política para la derecha alemana.',
      },
      {
        question: '¿Existe un fascismo genérico o solo fascismos nacionales?',
        positions: [
          {
            school: 'Modelo genérico (Payne, 1980; Griffin, 1991)',
            argument:
              'Hay un núcleo común identificable: ultranacionalismo palingenésico, culto a la violencia y al líder, movilización de masas, rechazo simultáneo del liberalismo y del marxismo, y proyecto de renacimiento nacional.',
          },
          {
            school: 'Irreductibilidad nacional (De Felice; historiografía italiana)',
            argument:
              'El fascismo italiano y el nacionalsocialismo tienen orígenes, bases sociales y programas distintos, y el racismo biológico y el exterminio hacen del caso alemán algo que no cabe en una categoría común.',
          },
          {
            school: 'Definir por la práctica (Paxton, 2004)',
            argument:
              'Más que buscar una esencia doctrinal, hay que estudiar las etapas del proceso: creación del movimiento, arraigo, llegada al poder mediante alianzas conservadoras, ejercicio del poder y radicalización.',
          },
        ],
        state:
          'La propuesta de Paxton de estudiar procesos en vez de esencias es hoy la más operativa, y convive con un uso analítico del modelo genérico para la comparación.',
      },
      {
        question: '¿Por qué llegó Hitler al poder en enero de 1933?',
        positions: [
          {
            school: 'Determinismo estructural (tesis del Sonderweg)',
            argument:
              'Alemania siguió un camino singular hacia la modernidad, con industrialización sin revolución liberal y unas élites preindustriales intactas que hicieron el terreno propicio para una salida autoritaria.',
          },
          {
            school: 'Coyuntura y decisión (Kershaw, 1998)',
            argument:
              'El NSDAP retrocedía en noviembre de 1932. El nombramiento fue obra de un cálculo erróneo de un grupo reducido de conservadores convencidos de poder utilizar a Hitler dentro de un gabinete que controlaban.',
          },
          {
            school: 'Crisis de la modernidad (Peukert, 1987)',
            argument:
              'Weimar aplazó sus conflictos con gasto social financiado a crédito. Cuando la Depresión cerró esa vía, la fractura entre expectativas modernas y capacidad del Estado dejó a la república sin base social.',
          },
        ],
        state:
          'La tesis del Sonderweg ha sido muy criticada por su comparación implícita con un desarrollo occidental idealizado. Predomina hoy la combinación de crisis estructural y contingencia política.',
      },
    ],
    sources: [
      { author: 'Potencias aliadas y Alemania', title: 'Tratado de Versalles', year: '1919', kind: 'primaria', note: 'Texto completo con las cláusulas territoriales, militares y el artículo 231. Lectura imprescindible frente a su leyenda.' },
      { author: 'John Maynard Keynes', title: 'Las consecuencias económicas de la paz', year: '1919', kind: 'primaria', note: 'Panfleto de un delegado disidente que moldeó la opinión anglosajona sobre el tratado durante dos décadas.' },
      { author: 'Asamblea Nacional alemana', title: 'Constitución de Weimar', year: '1919', kind: 'primaria', note: 'Incluye el sufragio femenino, los derechos sociales y el artículo 48 de poderes de emergencia.' },
      { author: 'Adolf Hitler', title: 'Mi lucha', year: '1925', kind: 'primaria', note: 'Programa expuesto por escrito ocho años antes del poder: espacio vital, antisemitismo racial y destrucción del parlamentarismo.' },
      { author: 'Benito Mussolini y Giovanni Gentile', title: 'La doctrina del fascismo', year: '1932', kind: 'primaria', note: 'Formulación oficial tardía de una ideología que se construyó sobre la práctica y no al revés.' },
      { author: 'Reichstag alemán', title: 'Ley de Plenos Poderes', year: '1933', kind: 'primaria', note: 'Cuatro artículos que transfirieron la potestad legislativa al gobierno. El fin legal de la República de Weimar.' },
      { author: 'Estado alemán', title: 'Leyes de Núremberg', year: '1935', kind: 'primaria', note: 'Privación de ciudadanía y prohibición de matrimonios mixtos. La exclusión racial convertida en derecho positivo.' },
      { author: 'Friedrich Hossbach', title: 'Memorando de la reunión de la Cancillería', year: '1937', kind: 'primaria', note: 'Acta de la exposición de Hitler ante sus mandos sobre los objetivos expansivos. Pieza central del debate con Taylor.' },
      { author: 'George Orwell', title: 'Homenaje a Cataluña', year: '1938', kind: 'primaria', note: 'Testimonio de un voluntario del POUM sobre la guerra y sobre el conflicto interno en el bando republicano.' },
      { author: 'Alemania y la URSS', title: 'Pacto de no agresión y protocolo secreto', year: '1939', kind: 'primaria', note: 'El reparto previo de Europa oriental. El protocolo se negó oficialmente hasta 1989.' },
      { author: 'Stefan Zweig', title: 'El mundo de ayer', year: '1942', kind: 'primaria', note: 'Memoria de un europeo que vio desaparecer su mundo. Fuente sobre la experiencia cultural del hundimiento.' },
      { author: 'Victor Klemperer', title: 'Quiero dar testimonio hasta el final', year: '1995', kind: 'primaria', note: 'Diarios de un filólogo judío en Dresde. La vida cotidiana bajo la persecución, día a día.' },
      { author: 'Charles Kindleberger', title: 'La crisis económica 1929-1939', year: '1973', kind: 'estudio', note: 'Explica la profundidad de la Depresión por la ausencia de una potencia dispuesta a estabilizar el sistema.' },
      { author: 'Stanley Payne', title: 'El fascismo', year: '1980', kind: 'estudio', note: 'Definición comparada del fascismo genérico a partir de negaciones, ideología y estilo político.' },
      { author: 'Detlev Peukert', title: 'La República de Weimar', year: '1987', kind: 'estudio', note: 'Weimar como crisis de la modernidad clásica y no solo como antesala del nazismo.' },
      { author: 'Roger Griffin', title: 'The Nature of Fascism', year: '1991', kind: 'estudio', note: 'Formula el núcleo ideológico como ultranacionalismo palingenésico, hoy referencia de la discusión.' },
      { author: 'Barry Eichengreen', title: 'Golden Fetters', year: '1992', kind: 'estudio', note: 'Demuestra la relación entre permanencia en el patrón oro y duración de la Depresión país por país.' },
      { author: 'Ian Kershaw', title: 'Hitler, 1889-1936: Hubris', year: '1998', kind: 'estudio', note: 'Biografía que explica el poder por la interacción entre el líder y las estructuras que le dieron paso.' },
      { author: 'Mark Mazower', title: 'La Europa negra', year: '1998', kind: 'estudio', note: 'Historia del siglo XX europeo que trata la democracia como excepción frágil y no como destino natural.' },
      { author: 'Richard J. Evans', title: 'La llegada del Tercer Reich', year: '2003', kind: 'estudio', note: 'Reconstrucción detallada del proceso de destrucción de la democracia alemana entre 1930 y 1934.' },
      { author: 'Robert Paxton', title: 'Anatomía del fascismo', year: '2004', kind: 'estudio', note: 'Propone estudiar el fascismo por etapas de un proceso y no por su doctrina declarada.' },
      { author: 'Zara Steiner', title: 'The Lights that Failed', year: '2005', kind: 'estudio', note: 'Historia internacional de 1919 a 1933 que reconstruye el orden de entreguerras sin leerlo desde 1939.' },
      { author: 'Adam Tooze', title: 'El salario de la destrucción', year: '2006', kind: 'estudio', note: 'La economía del rearme alemán y sus límites materiales como motor del calendario de la guerra.' },
    ],
  },
  questions: [
    {
      id: 'entreguerras-1', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué establecía el artículo 231 del Tratado de Versalles?',
      options: [
        'El desarme total de la marina alemana',
        'La atribución a Alemania y sus aliados de la responsabilidad de las pérdidas de la guerra',
        'La creación de la Sociedad de Naciones',
        'La cifra exacta de las reparaciones que Alemania debía pagar',
      ],
      answer: 1,
      explanation: 'Era el fundamento jurídico de las reparaciones, pero se leyó en Alemania como una condena moral y alimentó la propaganda contra el tratado.',
    },
    {
      id: 'entreguerras-2', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Cuál fue la debilidad estructural más grave del orden de Versalles?',
      options: [
        'Que las reparaciones fueron impagables desde el primer día',
        'Que nació sin garante: Estados Unidos no lo ratificó y Gran Bretaña dejó de sostenerlo',
        'Que dividió Alemania en cuatro zonas de ocupación',
        'Que excluyó a Francia de las negociaciones',
      ],
      answer: 1,
      explanation: 'El tratado resultó demasiado severo para reconciliar y demasiado blando para incapacitar, y ninguna potencia quedó dispuesta a hacerlo cumplir.',
    },
    {
      id: 'entreguerras-3', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿En qué consistía el circuito financiero que sostuvo la estabilización de 1924 a 1929?',
      options: [
        'Alemania financiaba la reconstrucción soviética a cambio de materias primas',
        'Estados Unidos prestaba a Alemania, Alemania pagaba reparaciones y los aliados devolvían sus deudas a Estados Unidos',
        'La Sociedad de Naciones emitía deuda común europea',
        'Gran Bretaña garantizaba la moneda alemana con sus reservas coloniales',
      ],
      answer: 1,
      explanation: 'Todo dependía del crédito norteamericano, que empezó a retirarse en 1928 hacia la especulación bursátil interna, antes incluso del crac.',
    },
    {
      id: 'entreguerras-4', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: 'Según Eichengreen, ¿qué relación hay entre el patrón oro y la duración de la Depresión?',
      options: [
        'Los países que abandonaron antes el patrón oro se recuperaron antes',
        'El patrón oro protegió a las economías que lo mantuvieron',
        'No hubo relación observable entre ambos factores',
        'Solo afectó a las economías agrarias de Europa oriental',
      ],
      answer: 0,
      explanation: 'Gran Bretaña salió en 1931, Estados Unidos en 1933 y Francia solo en 1936, y las curvas de recuperación siguen ese orden.',
    },
    {
      id: 'entreguerras-5', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué efecto político tuvo la Gran Depresión sobre el voto nazi?',
      options: [
        'Ninguno: el NSDAP ya era el primer partido alemán en 1928',
        'Lo hizo pasar del dos coma seis por ciento en 1928 al treinta y siete por ciento en julio de 1932',
        'Lo redujo a la mitad al desplazar el voto obrero al KPD',
        'Lo estabilizó en torno al veinte por ciento durante toda la crisis',
      ],
      answer: 1,
      explanation: 'La Depresión no creó el fascismo, que existía desde 1919, pero convirtió a los partidos antisistema en fuerzas de masas.',
    },
    {
      id: 'entreguerras-6', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué fue el escuadrismo en la Italia de 1920 y 1921?',
      options: [
        'La milicia oficial del Estado fascista ya constituido',
        'La violencia organizada de bandas de excombatientes contra sindicatos y ayuntamientos socialistas',
        'El sistema de encuadramiento de obreros en corporaciones',
        'La organización juvenil del Partido Nacional Fascista',
      ],
      answer: 1,
      explanation: 'Actuaba con tolerancia policial y financiación de los agrarios del valle del Po, y fue la base de fuerza sobre la que creció el movimiento.',
    },
    {
      id: 'entreguerras-7', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Cómo llegó Mussolini a la jefatura del gobierno en octubre de 1922?',
      options: [
        'Tras un asalto armado que tomó los ministerios de Roma',
        'Por nombramiento del rey, que se negó a firmar el estado de sitio contra los camisas negras',
        'Tras ganar unas elecciones generales con mayoría absoluta',
        'Mediante un referéndum convocado por el Parlamento',
      ],
      answer: 1,
      explanation: 'La marcha sobre Roma fue más teatro que asalto. El acceso al poder fue legal y con apoyo de la derecha liberal, que creía poder domesticarlo.',
    },
    {
      id: 'entreguerras-8', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué consiguió Mussolini con los Pactos de Letrán de 1929?',
      options: [
        'La incorporación de Etiopía al imperio italiano',
        'La paz con la Iglesia y una legitimidad interna decisiva para el régimen',
        'La disolución del Parlamento y la implantación del partido único',
        'El reconocimiento internacional de la conquista de Albania',
      ],
      answer: 1,
      explanation: 'El acuerdo con el Vaticano dio al fascismo un aval social que ningún decreto podía proporcionarle.',
    },
    {
      id: 'entreguerras-9', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué permitía el artículo 48 de la Constitución de Weimar?',
      options: [
        'Disolver el Parlamento por votación de dos tercios',
        'Gobernar por decreto presidencial de emergencia',
        'Prohibir partidos declarados anticonstitucionales',
        'Convocar referendos vinculantes de iniciativa popular',
      ],
      answer: 1,
      explanation: 'Desde 1930 sustituyó de hecho al Parlamento: Brüning y sus sucesores gobernaron con decretos firmados por Hindenburg.',
    },
    {
      id: 'entreguerras-10', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: 'Según Kershaw, ¿qué explica el nombramiento de Hitler como canciller en enero de 1933?',
      options: [
        'Una victoria electoral por mayoría absoluta del NSDAP',
        'El cálculo erróneo de un grupo reducido de conservadores que creían poder controlarlo',
        'Un golpe militar apoyado por la Reichswehr',
        'La renuncia de Hindenburg a la presidencia',
      ],
      answer: 1,
      explanation: 'El NSDAP había perdido dos millones de votos en noviembre de 1932 y estaba endeudado. La clave fue una decisión política, no un ascenso irresistible.',
    },
    {
      id: 'entreguerras-11', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué fue la Ley de Plenos Poderes de marzo de 1933?',
      options: [
        'El decreto que suspendió los derechos fundamentales tras el incendio del Reichstag',
        'La norma que transfirió al gobierno la potestad legislativa y liquidó legalmente la República de Weimar',
        'La ley que expulsó a los judíos de la función pública',
        'El texto que unificó los cargos de presidente y canciller',
      ],
      answer: 1,
      explanation: 'Se aprobó con los votos del Zentrum y con la oposición comunista ya detenida. La legalidad se destruyó por procedimientos legales.',
    },
    {
      id: 'entreguerras-12', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué designa el término Gleichschaltung?',
      options: [
        'El plan de rearme acelerado de la industria alemana',
        'El alineamiento forzoso de partidos, sindicatos, administración y asociaciones con el Estado nazi',
        'La política de anexión de territorios de población alemana',
        'El sistema de propaganda dirigido por Goebbels',
      ],
      answer: 1,
      explanation: 'Se ejecutó entre 1933 y 1934 e incluyó la disolución de partidos y sindicatos y la depuración de la función pública.',
    },
    {
      id: 'entreguerras-13', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué efecto tuvo la política de no intervención en la Guerra Civil española?',
      options: [
        'Frenó la llegada de armas a los dos bandos por igual',
        'Perjudicó al gobierno legítimo mientras Alemania e Italia abastecían abiertamente a los sublevados',
        'Obligó a la retirada de las Brigadas Internacionales en 1936',
        'Impidió la intervención soviética a favor de la República',
      ],
      answer: 1,
      explanation: 'Aplicada de forma asimétrica, funcionó como una intervención de hecho a favor de un bando. La URSS abasteció a la República a cambio de las reservas de oro.',
    },
    {
      id: 'entreguerras-14', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué razones explican la política británica de apaciguamiento?',
      options: [
        'La convicción de que Alemania no tenía capacidad militar alguna',
        'Un imperio que defender, el rearme retrasado, la memoria de la Gran Guerra y la creencia de que parte de las reclamaciones alemanas era legítima',
        'Un tratado de alianza firmado con Alemania en 1935',
        'La presión de la Sociedad de Naciones para no aplicar sanciones',
      ],
      answer: 1,
      explanation: 'Reducirla a cobardía impide entenderla. Fue una política razonada que se rompió cuando la ocupación de Praga demostró que no se trataba solo de alemanes.',
    },
    {
      id: 'entreguerras-15', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué contenía el protocolo secreto del pacto germano-soviético de agosto de 1939?',
      options: [
        'Una alianza militar ofensiva contra Francia',
        'El reparto de Polonia, los países bálticos y Besarabia entre ambas potencias',
        'La entrega de tecnología aeronáutica alemana a la URSS',
        'El compromiso soviético de entrar en el Eje',
      ],
      answer: 1,
      explanation: 'Su existencia se negó oficialmente hasta 1989. Una semana después de la firma empezó la invasión de Polonia.',
    },
    {
      id: 'entreguerras-16', era: 'Edad Contemporánea', topicId: 'entreguerras', topic: 'Crisis de 1929 y fascismos',
      question: '¿Qué propone Robert Paxton frente a las definiciones doctrinales del fascismo?',
      options: [
        'Negar que exista un fascismo genérico comparable entre países',
        'Estudiar las etapas del proceso: creación del movimiento, arraigo, llegada al poder con aliados conservadores y radicalización',
        'Definirlo exclusivamente por su política económica corporativa',
        'Considerarlo una variante del bonapartismo del siglo XIX',
      ],
      answer: 1,
      explanation: 'La propuesta desplaza la pregunta de qué decía el fascismo a la de qué hizo y cómo llegó, que es donde los casos italiano y alemán se parecen de verdad.',
    },
  ],
}
