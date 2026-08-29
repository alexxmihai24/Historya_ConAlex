import type { TopicModule } from '../types.ts'

export const plenaEdadMedia: TopicModule = {
  topic: {
    id: 'plena-edad-media',
    era: 'Edad Media',
    title: 'Ciudades, comercio y universidades',
    years: 'c. 1000–1300',
    country: 'Europa',
    description: 'El despegue de los siglos centrales: campo, mercado, comuna, crédito y corporación universitaria.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚖',
    color: 'terracotta',
    summary:
      'Entre el año mil y 1300 la población europea se dobló largamente, se roturaron bosques y marismas, reaparecieron las ciudades como sujetos de derecho, volvió a acuñarse oro y nacieron dos instituciones que siguen en pie: la universidad y la sociedad mercantil. Contarlo como el despertar de una Europa dormida sería repetir el error de los humanistas. Lo que ocurrió es más concreto y más interesante: un excedente agrario sostenido durante tres siglos permitió que una parte creciente de la población dejara de producir alimentos, y esa gente construyó mercados, tribunales, escuelas y créditos. También construyó, con los mismos instrumentos jurídicos y burocráticos, los mecanismos con los que Europa aprendió a perseguir de forma sistemática a sus minorías.',
    keyDates: [
      { date: '1075', event: '*Dictatus papae* de Gregorio VII: comienza la querella de las investiduras.' },
      { date: '1077', event: 'Enrique IV ante Gregorio VII en Canossa.' },
      { date: '1086', event: 'Domesday Book: el censo inglés registra más de cinco mil quinientos molinos de agua.' },
      { date: 'c. 1088', event: 'Fecha convencional de la escuela de derecho de Bolonia, fijada en 1888.' },
      { date: '1122', event: 'Concordato de Worms: se separan jurisdicción espiritual y temporal.' },
      { date: 'c. 1140', event: 'Graciano compone el *Decreto*, base del derecho canónico clásico.' },
      { date: '1155', event: '*Authentica Habita*: Federico I protege a los estudiantes en camino.' },
      { date: 'Siglos XII–XIII', event: 'Ciclo de las ferias de Champaña, bisagra entre Flandes e Italia.' },
      { date: '1209–1216', event: 'Nacen franciscanos y dominicos, órdenes de predicación urbana.' },
      { date: '1209–1229', event: 'Cruzada albigense contra los cátaros del Languedoc.' },
      { date: '1215', event: 'IV Concilio de Letrán: confesión anual, transustanciación y signos distintivos para judíos y musulmanes.' },
      { date: '1231', event: '*Parens scientiarum*: Gregorio IX consagra los privilegios de la Universidad de París.' },
      { date: '1252', event: 'Génova y Florencia acuñan de nuevo moneda de oro; Venecia lo hará en 1284.' },
      { date: '1277', event: 'El obispo Tempier condena 219 proposiciones enseñadas en París.' },
      { date: '1290', event: 'Expulsión de los judíos de Inglaterra; Francia hará lo propio en 1306.' },
    ],
    sections: [
      {
        title: 'El despegue del año mil',
        body: [
          'Todo lo demás depende de esto: entre el siglo X y el XIV la población europea pasó de unos treinta y cinco o cuarenta millones a unos setenta u ochenta. Las cifras son estimaciones construidas sobre censos fiscales parciales y registros señoriales, con márgenes amplios, pero la dirección no se discute. Ese crecimiento exigió más alimento, y el alimento salió de roturar y de producir mejor.',
          'La roturación fue el motor menos vistoso y más decisivo: se talaron bosques, se desecaron marismas, se ganó tierra al mar en Flandes y se colonizó hacia el este del Elba. En paralelo se difundieron un conjunto de técnicas que no eran nuevas pero que ahora se combinaron: el arado pesado de vertedera, capaz de voltear los suelos húmedos y arcillosos del norte, la collera rígida que permite tirar del caballo sin ahogarlo, la herradura, el enganche en fila y la rotación trienal, que deja en barbecho un tercio de la tierra en lugar de la mitad y añade una siembra de primavera de leguminosas, con el efecto adicional de fijar nitrógeno y mejorar la dieta.',
          'La energía hidráulica se generalizó. El Domesday Book de 1086 registra en Inglaterra más de cinco mil quinientos molinos de agua para una población en torno a uno o dos millones de habitantes: un molino por cada pocos centenares de personas. Los molinos no solo molían grano; se aplicaron al batán de los paños, a la sierra, al martillo de forja y al fuelle.',
          'Lynn White Jr. defendió en 1962 que estas innovaciones técnicas explican por sí solas la transformación social de Europa. La crítica posterior ha corregido su cronología —el arado pesado y el estribo aparecen antes y se difunden más despacio de lo que él suponía— y ha desconfiado del determinismo: la técnica estaba disponible mucho antes de que se generalizara, así que hay que explicar por qué se adoptó cuando se adoptó. La respuesta apunta a la demanda, a la relativa estabilidad tras el fin de las incursiones vikingas, magiares y sarracenas, y a señores interesados en un excedente comercializable.',
          'Suele añadirse un factor climático, el llamado óptimo medieval de los siglos X a XIII. Conviene manejarlo con cuidado: las reconstrucciones globales muestran que no hubo un calentamiento sincrónico en todo el planeta, sino anomalías regionales, y que en Europa occidental el efecto fue real pero moderado. Es un factor favorable, no una explicación.',
        ].join('\n\n'),
        callout:
          'La rotación trienal no solo aumenta la superficie sembrada de la mitad a dos tercios: la siembra de primavera introduce leguminosas, que fijan nitrógeno y aportan proteína. Un cambio de calendario agrícola es también un cambio de dieta.',
      },
      {
        title: 'La ciudad: un estatuto jurídico antes que un tamaño',
        body: [
          'En la Edad Media una ciudad no se define por el número de habitantes sino por el derecho. Lo que separa a la villa del campo es una carta —fuero, carta de franquicia, privilegio— que sustituye las obligaciones señoriales por un censo fijo en dinero, reconoce un tribunal propio, una milicia, un mercado y, a menudo, la libertad personal de quien reside en ella un tiempo. La fórmula alemana que resume la práctica, «el aire de la ciudad hace libre al cabo de un año y un día», es una formulación tardía de una costumbre real: el siervo huido que no era reclamado en ese plazo quedaba libre.',
          'La forma más ambiciosa fue la comuna: una asociación jurada de vecinos que se compromete mutuamente y negocia, compra o arranca por la fuerza el gobierno de la ciudad a su señor u obispo. Aparece en el norte de Italia a finales del siglo XI y se extiende por Flandes, Renania y el norte de Francia. En Italia derivó en repúblicas urbanas con cónsules y después con *podestà*, un magistrado forastero contratado por un año precisamente para que no tuviera clientela local.',
          'Dentro de la ciudad, la vida económica se organizó en gremios. Su función declarada era garantizar la calidad, formar aprendices y sostener a viudas y enfermos; su función efectiva incluía fijar precios, limitar la competencia y controlar quién podía ejercer un oficio. Fueron a la vez escuela técnica, seguro social y monopolio, y sus tensiones internas —maestros contra oficiales, oficios mayores contra menores— alimentaron los conflictos urbanos del siglo XIV.',
          'Las magnitudes conviene tenerlas presentes para no exagerar. Hacia 1300 París pudo rondar los doscientos mil habitantes, y Milán, Venecia y Florencia el entorno de los cien mil; pero la inmensa mayoría de las localidades con estatuto urbano tenían entre dos mil y diez mil, y más del ochenta por ciento de la población europea seguía viviendo en el campo. La ciudad fue decisiva por lo que concentraba —capital, derecho, escritura, información—, no por su peso demográfico.',
          'La explicación clásica del renacimiento urbano la dio Henri Pirenne: las ciudades habrían nacido del comercio de larga distancia, alrededor de mercaderes ambulantes que se asentaban junto a fortalezas y monasterios. La investigación posterior ha invertido buena parte del argumento. Muchas ciudades crecieron sobre sedes episcopales que nunca desaparecieron del todo, el motor inicial fue el excedente agrario y el mercado comarcal, y el comercio internacional llegó a menudo después. La aportación de Pirenne que sí resiste es haber puesto el foco en la ciudad como sujeto histórico con dinámica propia, y no como apéndice del mundo señorial.',
        ].join('\n\n'),
      },
      {
        title: 'Comercio: rutas, crédito e instrumentos',
        body: [
          'El eje del comercio europeo unió dos polos manufactureros: Flandes, que tejía paños con lana inglesa, e Italia, que los acababa, teñía y redistribuía, y que controlaba el acceso a las especias, la seda y el alumbre del Mediterráneo oriental. Entre ambos se situaron las ferias de Champaña, un ciclo de seis ferias anuales encadenadas en cuatro localidades que funcionó durante casi dos siglos como cámara de compensación de Europa: allí no solo se compraban mercancías, se saldaban deudas y se cambiaban monedas bajo la protección de los condes.',
          'En el norte, la Hansa articuló el Báltico y el mar del Norte desde Lübeck, con factorías permanentes en Nóvgorod, Bergen, Brujas y Londres, y un comercio de productos de volumen: cereal, madera, pescado salado, cera, pieles. En el sur, Venecia y Génova compitieron por las rutas del Levante y por colonias en el mar Negro; la cuarta cruzada, desviada en 1204 contra Constantinopla, se explica bastante mejor como operación comercial veneciana que como empresa religiosa.',
          'Lo que hizo posible ese volumen fue una batería de instrumentos jurídicos y contables. La *commenda* asociaba a quien ponía el capital con quien viajaba y trabajaba, repartiendo el beneficio —habitualmente tres cuartas partes para el capital— y limitando la pérdida al capital aportado: es el antepasado directo de la sociedad en comandita. La letra de cambio permitió pagar en una plaza y cobrar en otra, en otra moneda, sin mover metal. La contabilidad por partida doble aparece en los libros italianos a comienzos del siglo XIV, mucho antes de que Luca Pacioli la codificara en 1494. Y en el siglo XIV se documenta ya el seguro marítimo como contrato autónomo.',
          'Todo esto chocaba con la prohibición canónica de la usura, entendida como cobrar cualquier cosa por encima del principal. La respuesta no fue ignorar la norma sino rodearla con técnica jurídica: el interés se escondía en el diferencial de cambio entre dos monedas y dos plazas, en el reparto del riesgo o en penalizaciones por demora pactadas de antemano. Los teólogos afinaron las excepciones —*damnum emergens*, *lucrum cessans*— y la práctica mercantil avanzó por ese hueco. A los judíos, excluidos de gremios y de la propiedad de la tierra en muchos territorios, se les asignó el papel de prestamistas y después se les reprochó ejercerlo.',
          'El síntoma más claro del cambio de escala es monetario. Europa llevaba siglos sin acuñar oro de manera regular; en 1252 Génova y Florencia emitieron el genovino y el florín, y Venecia el ducado en 1284. El florín se convirtió en moneda de referencia internacional durante dos siglos.',
          'Robert Lopez llamó a este conjunto «revolución comercial», y la etiqueta ha hecho fortuna. Tiene un problema de perspectiva: los documentos de la Gueniza de El Cairo estudiados por Shelomo Goitein muestran que el mundo islámico usaba mucho antes instrumentos equivalentes —la *suftaya*, comparable a la letra de cambio, y el *qirad*, muy próximo a la *commenda*—, y Abraham Udovitch defendió que la transmisión fue directa. Europa no inventó tanto como difundió, sistematizó y llevó a escala.',
        ].join('\n\n'),
        callout:
          'La *commenda* limita la pérdida del inversor al capital aportado y reparte el beneficio con quien viaja. Responsabilidad limitada y separación entre capital y gestión: dos rasgos de la empresa moderna, documentados en Venecia en el siglo XI.',
      },
      {
        title: 'La universidad: una corporación con privilegios',
        body: [
          '*Universitas* no significaba universidad sino corporación: el conjunto de personas asociadas para un fin, con personalidad jurídica, estatutos y jurisdicción. La universidad medieval es, literalmente, un gremio de la enseñanza, y ese origen explica casi todo lo demás.',
          'Nacieron con dos modelos opuestos. En Bolonia la corporación era de estudiantes: contrataban a los profesores, les fijaban el programa y los multaban si se saltaban una lección o no terminaban el temario. En París la corporación era de maestros, agrupados por facultades y naciones, con el canciller de la catedral como contrapeso. De ahí derivan las dos familias europeas de gobierno universitario. La fecha de 1088 para Bolonia no procede de ningún documento: se fijó en 1888, cuando la ciudad organizó su octavo centenario.',
          'El instrumento decisivo fueron los privilegios. La *Authentica Habita* de Federico I, en 1155, protegió a los estudiantes en viaje y les permitió ser juzgados por su maestro o por el obispo, no por el tribunal local. Los papas concedieron después la *licentia ubique docendi*, la licencia para enseñar en cualquier lugar de la cristiandad, que es el origen del reconocimiento internacional de títulos. Y las corporaciones descubrieron pronto su arma: la huelga y la dispersión. Tras la revuelta y la represión de 1229, los maestros de París suspendieron las clases y se marcharon dos años; en 1231 Gregorio IX cedió con *Parens scientiarum*, que reconoció a la universidad el derecho a darse estatutos propios y a suspender la docencia.',
          'El método era tan característico como el contenido. La *lectio* comentaba un texto autorizado; la *quaestio* extraía de él un problema; la *disputatio* enfrentaba en público argumentos y contraargumentos ante un maestro que después determinaba. Abelardo había fijado el procedimiento en *Sic et non*, alineando ciento cincuenta y ocho cuestiones con autoridades contradictorias sobre cada una y dejando al lector la tarea de resolverlas. Pensar consistía en organizar el desacuerdo, no en evitarlo.',
          'El combustible llegó de fuera. Entre los siglos XII y XIII se tradujo al latín, sobre todo desde el árabe en Toledo y desde el griego en Sicilia, el corpus completo de Aristóteles junto con los comentarios de Avicena y Averroes y la medicina y matemática griegas y árabes. La incorporación fue conflictiva: la enseñanza de la física y la metafísica aristotélicas se prohibió en París en 1210, y las condenas de 1270 y 1277 —esta última con doscientas diecinueve proposiciones— muestran hasta qué punto la institución estaba discutiendo consigo misma sobre los límites entre razón y fe.',
          'Conviene no idealizarla. Se estudiaba en latín, se accedía por vía clerical, costaba dinero y las mujeres quedaban excluidas por completo. Fue una institución de una minoría muy pequeña. Su importancia está en otro sitio: creó un cuerpo profesional de intelectuales urbanos asalariados —Jacques Le Goff los llamó los intelectuales de la Edad Media— y una forma corporativa autónoma que ha sobrevivido ocho siglos.',
        ].join('\n\n'),
        callout:
          'La huelga de París de 1229 duró dos años y terminó con el papa concediendo a la universidad estatutos propios. El derecho de autogobierno académico nació de un conflicto laboral.',
      },
      {
        title: 'Reforma, derecho y persecución',
        body: [
          'La transformación institucional más profunda del periodo empezó dentro de la Iglesia. La reforma gregoriana quiso liberar al clero del control de los poderes laicos: prohibición de la simonía, celibato obligatorio, elección de los obispos sin injerencia. El *Dictatus papae* de 1075 llevó la pretensión hasta el extremo de afirmar la potestad papal para deponer emperadores, y la querella de las investiduras que siguió, con el episodio de Canossa en 1077, terminó en el compromiso de Worms de 1122: el emperador renuncia a la investidura con los símbolos espirituales y conserva la temporal.',
          'Harold Berman propuso leer ese conflicto como una «revolución papal» fundadora de la tradición jurídica occidental. Su argumento es que la separación entre dos jurisdicciones que se reconocen mutuamente competentes obligó a definir con precisión el ámbito de cada una, y de ahí salieron el derecho canónico como sistema, la recuperación del derecho romano y la idea, poco frecuente en la historia, de que el poder está sometido a un derecho que no fabrica él mismo.',
          'Los materiales acompañaron. Hacia 1140 Graciano compuso la *Concordia de los cánones discordantes*, que aplicó al derecho de la Iglesia el mismo método escolástico de armonizar autoridades enfrentadas. En Bolonia, los glosadores reconstruyeron el *Corpus iuris civilis* justinianeo y formaron a generaciones de juristas que las monarquías contrataron de inmediato: el jurista profesional es una figura de este periodo, y el crecimiento del Estado en los siglos siguientes se apoya en él.',
          'La misma capacidad de organización se aplicó a definir y perseguir la disidencia. El IV Concilio de Letrán de 1215 impuso la confesión anual y la comunión pascual, definió la transustanciación y ordenó signos distintivos para judíos y musulmanes. Los cátaros del Languedoc fueron combatidos con una cruzada interna entre 1209 y 1229, y a partir de los años treinta del siglo XIII se generalizó la *inquisitio*, un procedimiento judicial en el que el tribunal investiga de oficio sin necesidad de acusador, con registro escrito y archivo: una innovación procesal de largo recorrido, adoptada después por la justicia civil europea.',
          'R. I. Moore sintetizó esta deriva en 1987 con una tesis discutida y muy productiva: entre 1000 y 1250 Europa se convirtió en una «sociedad persecutoria», que construyó categorías estables de excluidos —herejes, judíos, leprosos, sodomitas— y desarrolló instituciones permanentes para identificarlos y castigarlos. Su punto decisivo es que la persecución no fue el desbordamiento espontáneo del fanatismo popular, sino el producto de un poder cada vez más letrado y burocrático que necesitaba definir sus fronteras. La crítica le ha reprochado agrupar fenómenos heterogéneos y minusvalorar la hostilidad social preexistente; el marco, sin embargo, se ha impuesto. Inglaterra expulsó a sus judíos en 1290 y Francia en 1306.',
          'A la vez, la religiosidad urbana produjo respuestas que la Iglesia consiguió integrar. Franciscanos y dominicos, fundados entre 1209 y 1216, predicaban en las ciudades, vivían de la limosna y ocuparon con rapidez las cátedras universitarias. Tomás de Aquino y Buenaventura fueron frailes mendicantes y profesores en París: la orden nacida para predicar a los pobres acabó administrando la alta cultura.',
        ].join('\n\n'),
      },
      {
        title: 'Los límites del crecimiento',
        body: [
          'Hacia 1270 el modelo empezó a agotarse. La roturación había llegado a tierras marginales de rendimiento bajo, las herencias fragmentaban las explotaciones, la relación entre población y superficie cultivable se deterioraba y el precio del grano subía en términos reales. La gran hambruna del norte de Europa de 1315-1317, provocada por varios años de lluvias catastróficas, encontró a una población ya en el límite. La peste negra de 1348 llegaría después sobre ese terreno.',
          'Conviene además situar el episodio en su escala real. Mientras Europa redescubría la moneda de oro, la China de los Song tenía ciudades de más de un millón de habitantes, imprenta de tipos móviles desde el siglo XI y papel moneda emitido por el Estado; el mundo islámico manejaba desde antes los instrumentos de crédito que Italia adoptó; y el comercio del océano Índico movía volúmenes que el Mediterráneo no alcanzaba. Lo que distingue a la Europa de estos siglos no es una superioridad técnica ni económica, sino una forma jurídica peculiar: la proliferación de corporaciones autónomas con personalidad propia —comunas, gremios, universidades, órdenes— capaces de contratar, litigar y perdurar más allá de sus miembros. Es un argumento institucional, no una jerarquía de civilizaciones.',
          'También quedaron fuera del reparto los de siempre. La condición campesina mejoró en libertad jurídica pero no necesariamente en nivel de vida; las mujeres trabajaban en los oficios urbanos y en algunos casos formaban gremios propios, como los de la seda en París, pero quedaron excluidas de la universidad, de las magistraturas y de la mayoría de los maestrazgos; y las minorías religiosas pasaron de tolerancia interesada a expulsión en poco más de un siglo.',
          'El balance, sin embargo, es el de una transformación de fondo. En el año mil Europa era un mundo rural, de intercambio local y cultura monástica; en 1300 tenía ciudades con derecho propio, una red mercantil que unía Nóvgorod con Alejandría, instrumentos de crédito reutilizables, un cuerpo de juristas profesionales y una veintena de universidades. Ninguna de esas cosas desapareció con la crisis del siglo XIV: fue el marco dentro del cual se afrontó.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Roturación', definition: 'Puesta en cultivo de bosques, marismas y eriales. Principal fuente de alimento adicional entre los siglos XI y XIII.' },
      { term: 'Rotación trienal', definition: 'Ciclo que deja en barbecho un tercio de la tierra en vez de la mitad e introduce una siembra de primavera de leguminosas.' },
      { term: 'Carruca', definition: 'Arado pesado de vertedera con ruedas, capaz de voltear los suelos húmedos y arcillosos del norte de Europa.' },
      { term: 'Carta de franquicia', definition: 'Documento que concede a una localidad libertades, tribunal y mercado a cambio de un censo fijo. Define jurídicamente la ciudad.' },
      { term: 'Comuna', definition: 'Asociación jurada de vecinos que arranca o negocia el gobierno de la ciudad a su señor. Origen de las repúblicas urbanas italianas.' },
      { term: 'Podestà', definition: 'Magistrado forastero contratado por un año en las ciudades italianas, precisamente para que no tuviera clientela local.' },
      { term: 'Gremio', definition: 'Corporación de oficio. Escuela técnica, seguro social y monopolio a la vez: controlaba calidad, formación, precios y acceso.' },
      { term: 'Ferias de Champaña', definition: 'Ciclo de seis ferias anuales que funcionó como cámara de compensación entre Flandes e Italia durante casi dos siglos.' },
      { term: 'Commenda', definition: 'Contrato que asocia capital y trabajo viajero, reparte el beneficio y limita la pérdida al capital aportado.' },
      { term: 'Letra de cambio', definition: 'Instrumento para pagar en una plaza y cobrar en otra, en otra moneda. Permitía además ocultar el interés en el tipo de cambio.' },
      { term: 'Usura', definition: 'Cobro de cualquier cantidad por encima del principal, prohibido por el derecho canónico. Se rodeó con técnica jurídica, no se suprimió.' },
      { term: 'Universitas', definition: 'Corporación con personalidad jurídica, estatutos y jurisdicción propias. La universidad es, literalmente, un gremio de la enseñanza.' },
      { term: 'Licentia ubique docendi', definition: 'Licencia papal para enseñar en cualquier lugar de la cristiandad. Origen del reconocimiento internacional de títulos.' },
      { term: 'Disputatio', definition: 'Ejercicio público de argumentos enfrentados ante un maestro que determina. El método escolástico organiza el desacuerdo en vez de evitarlo.' },
      { term: 'Inquisitio', definition: 'Procedimiento en el que el tribunal investiga de oficio, sin acusador, con registro escrito. Innovación procesal adoptada después por la justicia civil.' },
    ],
    debates: [
      {
        question: '¿Qué explica el renacimiento urbano europeo?',
        positions: [
          {
            school: 'Comercio de larga distancia (Pirenne)',
            argument:
              'Las ciudades nacieron del comercio: mercaderes ambulantes que se asientan junto a fortalezas y monasterios y acaban formando un núcleo con derecho propio. La burguesía es un producto del intercambio internacional.',
          },
          {
            school: 'Crecimiento agrario y mercado comarcal',
            argument:
              'Primero hubo excedente rural y mercados locales; el comercio internacional llegó después. Muchas ciudades crecieron sobre sedes episcopales que nunca desaparecieron del todo, de modo que la continuidad pesa más que la refundación.',
          },
        ],
        state:
          'La secuencia de Pirenne está invertida por la investigación posterior: el motor inicial fue agrario y local. Lo que se conserva de su aportación es haber tratado la ciudad como sujeto histórico con lógica propia y no como apéndice del mundo señorial.',
      },
      {
        question: '¿Hubo una «revolución comercial» europea?',
        positions: [
          {
            school: 'Revolución comercial (Robert S. Lopez)',
            argument:
              'Entre los siglos XI y XIII Europa creó la sociedad mercantil, la letra de cambio, la contabilidad por partida doble, el seguro y la banca, y volvió a acuñar oro. Un cambio de naturaleza, no de grado.',
          },
          {
            school: 'Difusión desde el Mediterráneo islámico (Goitein, Udovitch)',
            argument:
              'Los documentos de la Gueniza de El Cairo muestran instrumentos equivalentes en uso mucho antes: la *suftaya*, comparable a la letra de cambio, y el *qirad*, muy próximo a la *commenda*. Europa sistematizó y escaló lo que recibió.',
          },
        ],
        state:
          'Se acepta la magnitud del cambio europeo y se rechaza la idea de invención desde cero. La discusión abierta es hasta qué punto la transmisión fue directa o hubo desarrollos paralelos a partir de un fondo mediterráneo común.',
      },
      {
        question: '¿Se convirtió Europa en una «sociedad persecutoria»?',
        positions: [
          {
            school: 'Persecución construida desde arriba (R. I. Moore, 1987)',
            argument:
              'Entre 1000 y 1250 se crearon categorías estables de excluidos —herejes, judíos, leprosos, sodomitas— e instituciones permanentes para identificarlos. El motor fue un poder letrado y burocrático que necesitaba definir sus fronteras, no el fanatismo espontáneo.',
          },
          {
            school: 'Crítica',
            argument:
              'La tesis agrupa fenómenos muy distintos bajo una sola etiqueta e infravalora la hostilidad social previa y los conflictos locales concretos que precipitaron cada episodio.',
          },
        ],
        state:
          'El marco de Moore se ha impuesto como punto de partida, con matices: hoy se estudia la interacción entre la iniciativa institucional y las tensiones locales, en vez de atribuir la persecución a una sola de las dos.',
      },
    ],
    sources: [
      { author: 'Gregorio VII', title: 'Dictatus papae', year: '1075', kind: 'primaria', note: 'Veintisiete proposiciones sobre la potestad papal, incluida la de deponer emperadores.' },
      { author: 'Administración de Guillermo I', title: 'Domesday Book', year: '1086', kind: 'primaria', note: 'Censo fiscal de Inglaterra. Base cuantitativa para la economía rural y los molinos.' },
      { author: 'Pedro Abelardo', title: 'Sic et non', year: 'c. 1120', kind: 'primaria', note: 'Ciento cincuenta y ocho cuestiones con autoridades contradictorias. Fija el método de la disputa escolástica.' },
      { author: 'Graciano', title: 'Concordia discordantium canonum (Decreto)', year: 'c. 1140', kind: 'primaria', note: 'Aplica el método escolástico al derecho de la Iglesia. Base del derecho canónico clásico.' },
      { author: 'Federico I', title: 'Authentica Habita', year: '1155', kind: 'primaria', note: 'Protege a los estudiantes en viaje y los sustrae al tribunal local.' },
      { author: 'Luis VII', title: 'Carta de franquicia de Lorris', year: 'c. 1155', kind: 'primaria', note: 'Modelo de fuero urbano copiado por centenares de localidades francesas.' },
      { author: 'IV Concilio de Letrán', title: 'Cánones', year: '1215', kind: 'primaria', note: 'Confesión anual, transustanciación y signos distintivos para judíos y musulmanes.' },
      { author: 'Gregorio IX', title: 'Parens scientiarum', year: '1231', kind: 'primaria', note: 'Reconoce a la Universidad de París estatutos propios tras dos años de huelga.' },
      { author: 'Esteban Tempier', title: 'Condena de 219 proposiciones', year: '1277', kind: 'primaria', note: 'Muestra el conflicto interno de la universidad sobre los límites entre razón y fe.' },
      { author: 'Documentos de la Gueniza de El Cairo', title: 'Correspondencia y contratos mercantiles', year: 's. XI–XIII', kind: 'primaria', note: 'Archivo accidental de una comunidad judía. Fuente central sobre el comercio mediterráneo islámico.' },
      { author: 'Francesco Balducci Pegolotti', title: 'La pratica della mercatura', year: 'c. 1340', kind: 'primaria', note: 'Manual de un factor de los Bardi: pesos, monedas, aranceles y rutas hasta China.' },
      { author: 'Henri Pirenne', title: 'Las ciudades de la Edad Media', year: '1927', kind: 'estudio', note: 'Sitúa el origen urbano en el comercio de larga distancia. Secuencia hoy invertida, enfoque conservado.' },
      { author: 'Lynn White Jr.', title: 'Medieval Technology and Social Change', year: '1962', kind: 'estudio', note: 'Atribuye la transformación social a la técnica. Criticado por su cronología y su determinismo.' },
      { author: 'Jacques Le Goff', title: 'Los intelectuales en la Edad Media', year: '1957', kind: 'estudio', note: 'El maestro universitario como trabajador urbano y profesional del pensamiento.' },
      { author: 'S. D. Goitein', title: 'A Mediterranean Society', year: '1967-1993', kind: 'estudio', note: 'Reconstrucción del mundo mercantil islámico y judío a partir de la Gueniza.' },
      { author: 'Robert S. Lopez', title: 'The Commercial Revolution of the Middle Ages', year: '1971', kind: 'estudio', note: 'Formula la idea de revolución comercial entre los siglos X y XIII.' },
      { author: 'Georges Duby', title: 'Guerreros y campesinos', year: '1973', kind: 'estudio', note: 'El despegue agrario como base material de todo el proceso.' },
      { author: 'Harold J. Berman', title: 'Law and Revolution', year: '1983', kind: 'estudio', note: 'La querella de las investiduras como origen de la tradición jurídica occidental.' },
      { author: 'R. I. Moore', title: 'The Formation of a Persecuting Society', year: '1987', kind: 'estudio', note: 'La persecución sistemática como producto de un poder letrado y burocrático.' },
    ],
  },
  questions: [
    {
      id: 'plena-edad-media-1', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué ventaja añade la rotación trienal frente a la bienal, además de sembrar más superficie?',
      options: [
        'Elimina por completo la necesidad de barbecho',
        'La siembra de primavera introduce leguminosas, que fijan nitrógeno y mejoran la dieta',
        'Permite prescindir del arado pesado',
        'Duplica el rendimiento por semilla en un solo año',
      ],
      answer: 1,
      explanation: 'Un cambio de calendario agrícola es también un cambio de dieta: la leguminosa aporta proteína y devuelve fertilidad al suelo.',
    },
    {
      id: 'plena-edad-media-2', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué se le ha objetado a la tesis de Lynn White Jr. sobre la técnica medieval?',
      options: [
        'Que las innovaciones que describe nunca existieron',
        'Que su cronología adelanta o comprime la difusión real y que el determinismo técnico no explica por qué se adoptó cuando se adoptó',
        'Que ignoró por completo la energía hidráulica',
        'Que confundió el arado pesado con el romano',
      ],
      answer: 1,
      explanation: 'La técnica estaba disponible antes de generalizarse. La explicación apunta a la demanda, a la estabilidad tras las incursiones y a señores interesados en excedente comercializable.',
    },
    {
      id: 'plena-edad-media-3', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Cómo debe manejarse el llamado «óptimo climático medieval»?',
      options: [
        'Como la causa principal del crecimiento europeo',
        'Como un mito sin ninguna base en los datos',
        'Como un factor favorable pero moderado: las reconstrucciones muestran anomalías regionales, no un calentamiento global sincrónico',
        'Como un fenómeno limitado al Mediterráneo oriental',
      ],
      answer: 2,
      explanation: 'Es un factor favorable, no una explicación. El motor del crecimiento fue la roturación y la mejora técnica sostenidas durante tres siglos.',
    },
    {
      id: 'plena-edad-media-4', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: 'En la Edad Media, ¿qué define a una ciudad?',
      options: [
        'Su número de habitantes',
        'Su estatuto jurídico: una carta que concede tribunal propio, mercado, milicia y censo fijo en dinero',
        'La presencia de una catedral',
        'Estar rodeada de murallas de piedra',
      ],
      answer: 1,
      explanation: 'La mayoría de las localidades con estatuto urbano tenía entre dos mil y diez mil habitantes. Lo decisivo era el derecho, no el tamaño.',
    },
    {
      id: 'plena-edad-media-5', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué era una comuna urbana?',
      options: [
        'Un impuesto sobre el comercio local',
        'Una asamblea convocada por el obispo para administrar limosnas',
        'El conjunto de tierras comunales de una villa',
        'Una asociación jurada de vecinos que negociaba o arrancaba a su señor el gobierno de la ciudad',
      ],
      answer: 3,
      explanation: 'Aparece en el norte de Italia a finales del siglo XI. Derivó en repúblicas urbanas con cónsules y después con *podestà* forasteros.',
    },
    {
      id: 'plena-edad-media-6', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Por qué las ciudades italianas contrataban un *podestà* forastero?',
      options: [
        'Porque la ley imperial se lo imponía',
        'Precisamente para que no tuviera clientela ni familia en la ciudad que gobernaba',
        'Porque no había juristas formados en Italia',
        'Para evitar pagarle un salario',
      ],
      answer: 1,
      explanation: 'Era un magistrado contratado por un año. La imparcialidad se buscaba por diseño institucional, no por confianza personal.',
    },
    {
      id: 'plena-edad-media-7', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué función cumplían las ferias de Champaña?',
      options: [
        'Eran mercados exclusivamente agrícolas de ámbito comarcal',
        'Servían de puerto fluvial para la Hansa',
        'Funcionaban como cámara de compensación entre Flandes e Italia: allí se saldaban deudas y se cambiaban monedas, además de venderse mercancías',
        'Eran asambleas judiciales de los condes de Champaña',
      ],
      answer: 2,
      explanation: 'Un ciclo de seis ferias anuales encadenadas en cuatro localidades, bajo protección condal, durante casi dos siglos.',
    },
    {
      id: 'plena-edad-media-8', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué rasgos de la empresa moderna anticipa la *commenda*?',
      options: [
        'La cotización en bolsa y el reparto de dividendos',
        'La separación entre capital y gestión y la limitación de la pérdida al capital aportado',
        'La responsabilidad ilimitada de todos los socios',
        'La contratación de trabajo asalariado permanente',
      ],
      answer: 1,
      explanation: 'Es el antepasado directo de la sociedad en comandita. El reparto habitual daba tres cuartas partes del beneficio al capital.',
    },
    {
      id: 'plena-edad-media-9', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Cómo se convivió con la prohibición canónica de la usura?',
      options: [
        'Se suprimió el crédito en toda la cristiandad',
        'Se ignoró abiertamente sin consecuencias',
        'Se rodeó con técnica jurídica: el interés se ocultaba en el diferencial de cambio, en el reparto del riesgo o en penalizaciones pactadas',
        'Se autorizó expresamente en el IV Concilio de Letrán',
      ],
      answer: 2,
      explanation: 'Los teólogos afinaron excepciones como el *damnum emergens* y el *lucrum cessans*, y la práctica mercantil avanzó por ese hueco.',
    },
    {
      id: 'plena-edad-media-10', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué objeción plantean Goitein y Udovitch a la idea de «revolución comercial» europea?',
      options: [
        'Que el comercio europeo nunca alcanzó volumen relevante',
        'Que los documentos de la Gueniza muestran instrumentos equivalentes en uso antes en el mundo islámico: la *suftaya* y el *qirad*',
        'Que la partida doble se inventó en China',
        'Que las ferias de Champaña son una invención historiográfica',
      ],
      answer: 1,
      explanation: 'Se acepta la magnitud del cambio europeo y se rechaza la invención desde cero: Europa sistematizó y llevó a escala lo que recibió.',
    },
    {
      id: 'plena-edad-media-11', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué significaba originalmente *universitas*?',
      options: [
        'El conjunto de todas las ciencias',
        'El edificio donde se impartían las lecciones',
        'Corporación: un grupo asociado con personalidad jurídica, estatutos y jurisdicción propias',
        'La licencia concedida por el papa para fundar una escuela',
      ],
      answer: 2,
      explanation: 'La universidad medieval es literalmente un gremio de la enseñanza, y ese origen corporativo explica sus privilegios y su autogobierno.',
    },
    {
      id: 'plena-edad-media-12', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿En qué se diferenciaban los modelos de Bolonia y París?',
      options: [
        'En Bolonia la corporación era de estudiantes, que contrataban y multaban a los profesores; en París, de maestros',
        'Bolonia enseñaba en romance y París en latín',
        'París admitía mujeres y Bolonia no',
        'Bolonia dependía del papa y París del emperador',
      ],
      answer: 0,
      explanation: 'De esos dos modelos derivan las dos familias europeas de gobierno universitario. La fecha de 1088 para Bolonia se fijó en 1888.',
    },
    {
      id: 'plena-edad-media-13', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Cómo consiguió la Universidad de París sus estatutos propios en 1231?',
      options: [
        'Por concesión espontánea del rey de Francia',
        'Comprándolos al canciller de la catedral',
        'Tras una huelga de dos años en la que los maestros suspendieron las clases y abandonaron la ciudad',
        'Por decisión del IV Concilio de Letrán',
      ],
      answer: 2,
      explanation: 'Gregorio IX cedió con *Parens scientiarum*. El derecho de autogobierno académico nació de un conflicto laboral.',
    },
    {
      id: 'plena-edad-media-14', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Qué muestra el método de *Sic et non* de Abelardo?',
      options: [
        'Que la teología debía basarse solo en la Biblia',
        'Que pensar consistía en organizar el desacuerdo: alinea cuestiones con autoridades contradictorias y deja la resolución al lector',
        'Que las autoridades antiguas debían rechazarse',
        'Que la lógica era incompatible con la fe',
      ],
      answer: 1,
      explanation: 'De ahí derivan la *quaestio* y la *disputatio*, ejercicio público de argumentos enfrentados ante un maestro que determina.',
    },
    {
      id: 'plena-edad-media-15', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: 'Según Harold Berman, ¿qué consecuencia jurídica tuvo la querella de las investiduras?',
      options: [
        'La desaparición del derecho romano en Europa',
        'La sumisión completa del papado al emperador',
        'La unificación de los tribunales laicos y eclesiásticos',
        'Dos jurisdicciones que se reconocen mutuamente obligaron a delimitar competencias, y de ahí salieron el derecho canónico como sistema y la idea de un poder sometido a un derecho que no fabrica él mismo',
      ],
      answer: 3,
      explanation: 'Berman la llamó «revolución papal» y la sitúa en el origen de la tradición jurídica occidental.',
    },
    {
      id: 'plena-edad-media-16', era: 'Edad Media', topicId: 'plena-edad-media', topic: 'Plena Edad Media',
      question: '¿Cuál es el núcleo de la tesis de R. I. Moore sobre la sociedad persecutoria?',
      options: [
        'Que la persecución fue obra de un poder letrado y burocrático que necesitaba definir sus fronteras, y no solo del fanatismo popular espontáneo',
        'Que no hubo persecuciones significativas antes de 1300',
        'Que la Inquisición fue una institución exclusivamente española',
        'Que las minorías perseguidas no existían realmente como grupos',
      ],
      answer: 0,
      explanation: 'Entre 1000 y 1250 se crearon categorías estables de excluidos e instituciones permanentes para identificarlos. La crítica matiza el peso de la hostilidad social previa.',
    },
  ],
}
