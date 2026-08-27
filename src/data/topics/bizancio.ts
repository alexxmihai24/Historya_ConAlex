import type { TopicModule } from '../types'

export const bizancio: TopicModule = {
  topic: {
    id: 'bizancio',
    era: 'Edad Media',
    title: 'El Imperio bizantino',
    years: '330–1453',
    country: 'Turquía',
    description: 'Mil años de continuidad romana en Oriente: derecho, ortodoxia, iconoclasia y caída.',
    duration: '45 min',
    level: 'Universidad',
    progress: 0,
    visual: '☨',
    color: 'plum',
    summary:
      'Bizancio es el nombre que la erudición moderna dio a un Estado que nunca se llamó así: sus habitantes se decían romanos y su Estado era el Imperio romano, sin interrupción, hasta 1453. Ese desajuste entre el nombre y la cosa resume el problema historiográfico del periodo, tratado durante siglos como una decadencia oriental de mil años y reevaluado después como una de las construcciones políticas más resistentes de la historia.',
    keyDates: [
      { date: '330', event: 'Constantino inaugura Constantinopla sobre la antigua Bizancio.' },
      { date: '395', event: 'División administrativa definitiva del imperio tras Teodosio.' },
      { date: '527–565', event: 'Justiniano: Corpus Iuris Civilis, Santa Sofía y reconquista de Occidente.' },
      { date: '541–542', event: 'Peste de Justiniano; mortalidad catastrófica en el Mediterráneo.' },
      { date: '634–718', event: 'Conquistas árabes: pérdida de Siria, Egipto y África; dos asedios de Constantinopla.' },
      { date: '726–843', event: 'Controversia iconoclasta, con dos fases y restauración final de las imágenes.' },
      { date: '863', event: 'Misión de Cirilo y Metodio: evangelización eslava y alfabeto glagolítico.' },
      { date: '1014', event: 'Basilio II derrota definitivamente al imperio búlgaro.' },
      { date: '1054', event: 'Cisma de Oriente y Occidente entre Roma y Constantinopla.' },
      { date: '1071', event: 'Manzikert: derrota ante los turcos selyúcidas y pérdida de Anatolia interior.' },
      { date: '1204', event: 'La Cuarta Cruzada saquea Constantinopla e instaura el Imperio latino.' },
      { date: '1261', event: 'Miguel VIII Paleólogo recupera Constantinopla.' },
      { date: '1453', event: 'Mehmed II toma Constantinopla; fin del Imperio.' },
    ],
    sections: [
      {
        title: 'El problema del nombre y del desprecio',
        body: [
          'El término «bizantino» fue acuñado en 1557 por el humanista alemán Hieronymus Wolf, casi un siglo después de la caída del Imperio. Sus habitantes se llamaban a sí mismos rhomaioi —romanos— y a su Estado, Basileia ton Rhomaion, el Imperio de los romanos. Los turcos llamaban Rum a Anatolia por la misma razón. Nadie en Constantinopla se habría reconocido como «bizantino».',
          'El nombre no fue neutral. Servía para negar a Constantinopla la continuidad romana y reservarla para Occidente, donde el Sacro Imperio Romano Germánico reclamaba el título. A partir de la Ilustración, la operación se completó con el desprecio: Montesquieu y Gibbon presentaron mil años de historia como una decadencia continua de intriga palaciega y disputa teológica. De ahí procede el uso del adjetivo «bizantino» como sinónimo de discusión estéril y complicación innecesaria.',
          'La revisión de esa imagen ha sido uno de los trabajos más productivos de la medievalística del siglo XX. Un Estado que sobrevivió al islam, a los eslavos, a los búlgaros, a los normandos, a los cruzados y a los turcos durante mil años difícilmente puede describirse como decadente. Lo que la investigación reciente subraya es su extraordinaria capacidad de adaptación: perdió tres cuartas partes de su territorio en el siglo VII y se reorganizó por completo para sobrevivir.',
          'Conviene también deshacer la idea de una Edad Media puramente occidental. Durante buena parte del periodo, Constantinopla fue la mayor ciudad de Europa, con cientos de miles de habitantes cuando París o Londres tenían unos pocos miles, y el nomisma bizantino fue la moneda de referencia del Mediterráneo durante siete siglos: un dólar medieval.',
        ].join('\n\n'),
        callout:
          'La continuidad institucional es literal: Bizancio no sucede al Imperio romano, es el Imperio romano. La distinción entre «romano» y «bizantino» es una convención de los historiadores, útil pero engañosa.',
      },
      {
        title: 'Justiniano: la última tentativa mediterránea',
        body: [
          'El reinado de Justiniano (527-565) fue el intento más ambicioso de restaurar el imperio unificado. Sus generales Belisario y Narsés reconquistaron África a los vándalos, Italia a los ostrogodos y parte del sureste ibérico. El coste fue enorme: la guerra de Italia duró veinte años y devastó la península mucho más que la instalación ostrogoda que pretendía deshacer.',
          'Su obra más duradera fue jurídica. El Corpus Iuris Civilis —Código, Digesto, Instituciones y Novelas, compiladas entre 528 y 534 bajo la dirección de Triboniano— recogió y ordenó mil años de jurisprudencia romana. El Digesto, en particular, salvó fragmentos de juristas clásicos cuya obra completa se perdió. Su redescubrimiento en Bolonia en el siglo XI fundó la ciencia jurídica europea.',
          'Santa Sofía, levantada en apenas cinco años por Antemio de Tralles e Isidoro de Mileto, resolvió un problema arquitectónico mayor: cubrir un espacio cuadrado con una cúpula enorme mediante pechinas. Su interior, con la cúpula aparentemente suspendida sobre una corona de ventanas, buscaba un efecto deliberado de inmaterialidad. Fue la mayor iglesia de la cristiandad durante casi mil años.',
          'La revuelta de Niká (532), nacida de la rivalidad entre las facciones del hipódromo —azules y verdes— y de la presión fiscal, estuvo a punto de derribarlo. Procopio cuenta que Justiniano preparaba la huida cuando la emperatriz Teodora lo disuadió; la represión posterior costó decenas de miles de vidas en el propio hipódromo.',
          'La peste bubónica de 541-542, la primera pandemia documentada de Yersinia pestis, truncó el proyecto. Las estimaciones de mortalidad son muy discutidas —desde catástrofes del 25-50 % hasta revisiones recientes que las rebajan sustancialmente—, pero el efecto combinado de guerra, epidemia y presión fiscal dejó al imperio exhausto. Las conquistas occidentales se perdieron en pocas décadas.',
        ].join('\n\n'),
      },
      {
        title: 'El siglo VII: perderlo casi todo y sobrevivir',
        body: [
          'Entre 602 y 628, Bizancio libró una guerra total con la Persia sasánida que dejó a ambos imperios agotados. Heraclio logró finalmente vencer, pero apenas una década después, entre 634 y 642, los ejércitos árabes arrebataron a Bizancio Siria, Palestina y Egipto, y en las décadas siguientes el norte de África. El imperio perdió sus provincias más ricas y aproximadamente tres cuartas partes de sus ingresos.',
          'La supervivencia exigió una reconstrucción completa. El sistema de themas reorganizó el territorio en circunscripciones bajo mando militar, donde los soldados recibían tierras a cambio del servicio hereditario. Eso redujo drásticamente el coste del ejército, que dejó de depender de un salario en metálico, y ancló la defensa en la población local. La cronología exacta de su implantación es objeto de debate, pero su efecto es claro: un Estado mucho más pobre logró mantener un ejército eficaz.',
          'La transformación fue también urbana y cultural. Las ciudades antiguas, con sus foros, termas y consejos municipales, se contrajeron o se convirtieron en fortalezas (kastra). El griego sustituyó definitivamente al latín como lengua administrativa. La cultura clásica se replegó a círculos estrechos y la producción literaria cayó a mínimos durante casi dos siglos, en lo que se ha llamado la «edad oscura bizantina».',
          'La defensa de Constantinopla en los asedios árabes de 674-678 y 717-718 fue probablemente el acontecimiento más consecuente de la historia europea temprana. Las murallas teodosianas, la cadena del Cuerno de Oro y el fuego griego —una mezcla incendiaria proyectada por sifones cuya fórmula exacta se perdió— permitieron detener la expansión islámica hacia Europa oriental durante siglos.',
        ].join('\n\n'),
        callout:
          'El fuego griego se mantuvo como secreto de Estado: se transmitía a un número reducido de familias y su composición nunca se puso por escrito completa. Es uno de los pocos casos documentados de tecnología militar perdida por exceso de secreto.',
      },
      {
        title: 'La iconoclasia: una disputa que no era solo sobre imágenes',
        body: [
          'En 726, el emperador León III inició la retirada de las imágenes religiosas del culto público. La controversia iconoclasta se extendió, con una interrupción, hasta 843, y enfrentó a quienes consideraban idolatría la veneración de iconos con quienes la defendían como legítima.',
          'El argumento iconoclasta se apoyaba en el mandamiento contra las imágenes talladas y en la imposibilidad de representar la naturaleza divina. Los iconódulos, con Juan Damasceno como principal teórico, respondieron con un argumento cristológico: si Dios se hizo carne, lo representable es precisamente esa carne, y negarlo equivale a negar la Encarnación. Añadieron una distinción decisiva entre latría, la adoración debida solo a Dios, y proskynesis, la veneración que se dirige al prototipo a través de la imagen.',
          'Las causas del conflicto se han discutido mucho. Se ha invocado la influencia del islam y del judaísmo, ambos aniconistas, y las derrotas militares interpretadas como castigo divino por idolatría. Otras lecturas subrayan factores internos: el intento imperial de someter a los monasterios, grandes propietarios de tierras, poseedores de los iconos más venerados y exentos de servicio militar y fiscal.',
          'La restauración definitiva de las imágenes en 843 se celebra aún como «Triunfo de la Ortodoxia». Sus consecuencias fueron duraderas: el icono quedó teológicamente fundamentado, con reglas iconográficas estrictas que priorizaban la fidelidad al modelo sobre la innovación del artista, y el monacato salió reforzado frente al poder imperial.',
          'Un efecto colateral fue la pérdida documental. La destrucción de imágenes anteriores a 726 dejó un vacío casi total en el arte bizantino temprano, y los textos iconoclastas fueron a su vez eliminados por los vencedores: conocemos sus argumentos casi exclusivamente a través de las refutaciones de sus adversarios, lo que obliga a una cautela permanente.',
        ].join('\n\n'),
      },
      {
        title: 'Ortodoxia, eslavos y el cisma con Roma',
        body: [
          'La misión de Cirilo y Metodio en Moravia desde 863 marcó el modelo bizantino de expansión religiosa. Los dos hermanos crearon un alfabeto —el glagolítico, del que derivó el cirílico— para traducir las Escrituras y la liturgia al eslavo. Frente a la práctica latina, que imponía el latín, Bizancio aceptó la liturgia en lengua vernácula, lo que facilitó enormemente la evangelización y dio a los pueblos eslavos una cultura escrita propia.',
          'La conversión de Bulgaria en 864 y la de la Rus de Kiev en 988, cuando Vladimir se bautizó y se casó con una princesa porfirogéneta, integraron a esos pueblos en la órbita cultural de Constantinopla. Cuando Bizancio cayó en 1453, Moscú reclamó la herencia y se proclamó «tercera Roma»: la genealogía política e ideológica de Rusia pasa por ahí.',
          'La ruptura con Roma fue un proceso largo, no un acontecimiento. Las diferencias se acumularon durante siglos: la cláusula Filioque añadida por Occidente al credo, el celibato obligatorio del clero latino, el uso de pan ácimo, y sobre todo la cuestión de la autoridad. Roma reivindicaba una primacía jurisdiccional sobre toda la Iglesia; Constantinopla sostenía la pentarquía, un gobierno colegiado de los cinco patriarcados, en el que Roma tendría solo una primacía de honor.',
          'Los anatemas mutuos de 1054 entre el legado papal Humberto y el patriarca Miguel Cerulario fueron un episodio menor que la historiografía posterior convirtió en fecha fundacional. La ruptura se hizo irreversible más tarde y por motivos menos teológicos: el saqueo de Constantinopla por la Cuarta Cruzada en 1204, con destrucción de iglesias y profanación de reliquias, creó un rencor que los intentos de unión de Lyon (1274) y Florencia (1439) nunca lograron superar.',
          'La resistencia popular a esas uniones fue feroz. Un alto funcionario bizantino resumió la posición mayoritaria en vísperas de la caída con una frase que se ha hecho célebre: preferir el turbante turco antes que la tiara papal. Se prefería la dominación otomana, que permitía conservar la fe, a una unión con Roma percibida como sometimiento.',
        ].join('\n\n'),
      },
      {
        title: 'Declive y caída: 1204 antes que 1453',
        body: [
          'La derrota de Manzikert en 1071 ante los turcos selyúcidas abrió Anatolia, la principal reserva de reclutas y de impuestos del imperio, a la ocupación turca. La dinastía Comnena logró una recuperación notable en el siglo XII, apoyándose en concesiones comerciales a Venecia y Génova que a largo plazo drenaron los ingresos aduaneros del Estado hacia las repúblicas italianas.',
          'El golpe decisivo llegó en 1204. La Cuarta Cruzada, desviada de su objetivo egipcio por una combinación de deudas con Venecia, disputas dinásticas bizantinas y cálculo comercial, tomó y saqueó Constantinopla durante tres días. Se fundieron obras de arte antiguas, se dispersaron reliquias por Europa —los caballos de bronce de San Marcos proceden de allí— y se instauró un Imperio latino que duró hasta 1261.',
          'El imperio restaurado por los Paleólogos nunca recuperó su base material. Su territorio se redujo progresivamente a Constantinopla, parte de Tracia y el despotado de Morea; su economía quedó en manos de mercaderes italianos; y las guerras civiles del siglo XIV, en plena expansión otomana, consumieron los últimos recursos. En 1373 el emperador era ya vasallo tributario del sultán.',
          'El asedio final de 1453 enfrentó a unos 7.000 defensores con un ejército otomano de decenas de miles y con artillería de asedio capaz de derribar las murallas teodosianas, que habían resistido durante mil años. Constantino XI murió combatiendo. Mehmed II convirtió Santa Sofía en mezquita y estableció Constantinopla como capital otomana.',
          'La caída tuvo consecuencias que exceden lo militar. La emigración de eruditos griegos a Italia con sus manuscritos alimentó el humanismo renacentista; el cierre de las rutas terrestres hacia Asia estimuló la búsqueda de vías marítimas; y Moscú asumió la herencia ideológica ortodoxa. Es habitual usar 1453 como fecha de inicio de la Edad Moderna: como todos los cortes de este tipo, es una convención cómoda más que un cambio real en la vida de nadie.',
        ].join('\n\n'),
        callout:
          'Steven Runciman calificó el saqueo de 1204 como un crimen sin precedentes contra la civilización. Occidente destruyó la mayor ciudad cristiana del mundo doscientos cincuenta años antes de que lo hicieran los otomanos.',
      },
    ],
    concepts: [
      { term: 'Rhomaioi', definition: '«Romanos»: como se llamaban a sí mismos los bizantinos. «Bizantino» es un término acuñado en 1557.' },
      { term: 'Basileus', definition: 'Título imperial griego adoptado formalmente en el siglo VII, en sustitución de la titulatura latina.' },
      { term: 'Thema', definition: 'Circunscripción militar y administrativa donde los soldados recibían tierras a cambio de servicio hereditario.' },
      { term: 'Fuego griego', definition: 'Mezcla incendiaria proyectada por sifones, secreto de Estado cuya fórmula acabó perdiéndose.' },
      { term: 'Iconoclasia', definition: 'Movimiento de rechazo al culto de las imágenes religiosas, vigente en dos fases entre 726 y 843.' },
      { term: 'Latría / proskynesis', definition: 'Adoración debida solo a Dios frente a veneración dirigida al prototipo a través del icono.' },
      { term: 'Pentarquía', definition: 'Gobierno colegiado de los cinco patriarcados: Roma, Constantinopla, Alejandría, Antioquía y Jerusalén.' },
      { term: 'Filioque', definition: 'Cláusula añadida en Occidente al credo, uno de los puntos doctrinales del cisma.' },
      { term: 'Nomisma', definition: 'Moneda de oro bizantina, referencia monetaria del Mediterráneo durante unos siete siglos.' },
      { term: 'Porfirogéneta', definition: '«Nacido en la púrpura»: hijo de emperador reinante, con legitimidad dinástica superior.' },
    ],
    debates: [
      {
        question: '¿Fue Bizancio una decadencia milenaria o un Estado excepcionalmente adaptativo?',
        positions: [
          {
            school: 'Decadencia (Montesquieu, Gibbon)',
            argument:
              'Mil años de intriga cortesana, disputa teológica estéril y pérdida progresiva de territorio. La historia bizantina sería el largo epílogo de la caída de Roma, sin aportación propia relevante.',
          },
          {
            school: 'Revisión moderna (Ostrogorsky, Kaldellis, Cameron)',
            argument:
              'Sobrevivió mil años a persas, árabes, búlgaros, normandos, cruzados y turcos, y se reorganizó por completo tras perder tres cuartas partes de su territorio en el siglo VII. Preservó el derecho romano y la literatura griega, y evangelizó el mundo eslavo.',
          },
        ],
        state:
          'La imagen de la decadencia está descartada en la investigación especializada, aunque persiste en la cultura general y en el propio uso peyorativo del adjetivo «bizantino». El debate actual se centra en cómo describir la naturaleza del Estado bizantino, con propuestas como la de Kaldellis de leerlo como una república romana con legitimidad popular más que como una autocracia teocrática.',
      },
      {
        question: '¿Qué causó realmente la iconoclasia?',
        positions: [
          {
            school: 'Influencia externa',
            argument:
              'El contacto con el islam y el judaísmo, aniconistas, y las derrotas militares interpretadas como castigo divino por idolatría habrían empujado a los emperadores a purificar el culto.',
          },
          {
            school: 'Conflicto interno de poder',
            argument:
              'Sería un intento imperial de someter a los monasterios: grandes propietarios de tierras, custodios de los iconos más venerados y exentos de cargas fiscales y militares. La teología encubriría una disputa por recursos.',
          },
        ],
        state:
          'Se admite la combinación de factores. La dificultad principal es de fuentes: los textos iconoclastas fueron destruidos por los vencedores y solo se conocen a través de refutaciones, lo que sesga sistemáticamente el debate.',
      },
      {
        question: '¿Cuándo cayó realmente Bizancio, en 1204 o en 1453?',
        positions: [
          {
            school: '1453 como fecha canónica',
            argument:
              'Es cuando desaparece el Estado: muere el último emperador, la capital pasa a manos otomanas y Santa Sofía se convierte en mezquita.',
          },
          {
            school: '1204 como ruptura decisiva',
            argument:
              'El saqueo de la Cuarta Cruzada destruyó la base económica, dispersó el patrimonio, fragmentó el territorio y liquidó la posibilidad de recuperación. El imperio paleólogo fue un Estado residual desde su restauración.',
          },
        ],
        state:
          'Predomina la valoración de 1204 como el golpe irreversible, sin dejar de usar 1453 como fecha formal. La discusión conecta con la crítica a los cortes cronológicos convencionales entre Edad Media y Edad Moderna.',
      },
    ],
    sources: [
      { author: 'Procopio de Cesarea', title: 'Historia de las guerras; Historia secreta', year: 'c. 550', kind: 'primaria', note: 'Historiador oficial de Justiniano y autor de un libelo privado demoledor contra él. Contraste de fuentes excepcional.' },
      { author: 'Justiniano (dir. Triboniano)', title: 'Corpus Iuris Civilis', year: '528–534', kind: 'primaria', note: 'Código, Digesto, Instituciones y Novelas. Base del derecho continental europeo tras su redescubrimiento en Bolonia.' },
      { author: 'Juan Damasceno', title: 'Discursos sobre las imágenes', year: 'c. 730', kind: 'primaria', note: 'Principal fundamentación teológica del culto a los iconos.' },
      { author: 'Ana Comnena', title: 'Alexíada', year: 'c. 1148', kind: 'primaria', note: 'Biografía de su padre Alejo I y visión bizantina de la Primera Cruzada. Primera gran historiadora conocida.' },
      { author: 'Nicetas Coniates', title: 'Historia', year: 'c. 1207', kind: 'primaria', note: 'Testimonio directo del saqueo de Constantinopla en 1204.' },
      { author: 'Georg Ostrogorsky', title: 'Historia del Estado bizantino', year: '1940', kind: 'estudio', note: 'Manual clásico que fijó la periodización moderna del imperio.' },
      { author: 'Steven Runciman', title: 'The Fall of Constantinople 1453', year: '1965', kind: 'estudio', note: 'Relato de referencia del asedio final; también autor de una historia crítica de las cruzadas.' },
      { author: 'Averil Cameron', title: 'The Byzantines', year: '2006', kind: 'estudio', note: 'Síntesis breve centrada en desmontar los tópicos sobre Bizancio.' },
      { author: 'Anthony Kaldellis', title: 'The Byzantine Republic', year: '2015', kind: 'estudio', note: 'Propone leer Bizancio como república romana con legitimidad popular, no como autocracia teocrática.' },
      { author: 'Judith Herrin', title: 'Byzantium: The Surprising Life of a Medieval Empire', year: '2007', kind: 'estudio', note: 'Síntesis accesible y actualizada, atenta a la vida cotidiana y al papel de las mujeres.' },
    ],
  },
  questions: [
    {
      id: 'bizancio-1', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Cómo se llamaban a sí mismos los llamados bizantinos?',
      options: ['Helenos', 'Rhomaioi, es decir, romanos', 'Bizantinos', 'Ortodoxos'],
      answer: 1,
      explanation: 'El término «bizantino» lo acuñó Hieronymus Wolf en 1557. Su Estado era, sin interrupción, el Imperio romano, y los turcos llamaban Rum a Anatolia por ese motivo.',
    },
    {
      id: 'bizancio-2', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué función política tuvo negar a Constantinopla el nombre de «romana»?',
      options: [
        'Facilitar el comercio con Venecia',
        'Reservar la continuidad romana para Occidente, donde el Sacro Imperio reclamaba el título',
        'Distinguir el griego del latín',
        'Justificar la conquista otomana',
      ],
      answer: 1,
      explanation: 'A partir de la Ilustración se sumó el desprecio de Montesquieu y Gibbon, de donde procede el uso peyorativo del adjetivo «bizantino».',
    },
    {
      id: 'bizancio-3', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Cuál fue la obra más duradera del reinado de Justiniano?',
      options: [
        'La reconquista de Italia',
        'El Corpus Iuris Civilis, que ordenó mil años de jurisprudencia romana',
        'La construcción del muro de Anastasio',
        'La conversión de los eslavos',
      ],
      answer: 1,
      explanation: 'El Digesto salvó fragmentos de juristas clásicos perdidos. Su redescubrimiento en Bolonia en el siglo XI fundó la ciencia jurídica europea.',
    },
    {
      id: 'bizancio-4', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué proporción de sus ingresos perdió Bizancio con las conquistas árabes del siglo VII?',
      options: ['Una quinta parte', 'Aproximadamente tres cuartas partes', 'Nada apreciable', 'La mitad exacta'],
      answer: 1,
      explanation: 'Perdió Siria, Palestina, Egipto y el norte de África, sus provincias más ricas. La supervivencia exigió reconstruir por completo el Estado.',
    },
    {
      id: 'bizancio-5', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿En qué consistía el sistema de themas?',
      options: [
        'Un impuesto sobre el comercio marítimo',
        'Circunscripciones bajo mando militar donde los soldados recibían tierras a cambio de servicio hereditario',
        'Una jerarquía de monasterios imperiales',
        'Un sistema de alianzas con los eslavos',
      ],
      answer: 1,
      explanation: 'Redujo drásticamente el coste del ejército al eliminar la dependencia del salario en metálico, y ancló la defensa en la población local.',
    },
    {
      id: 'bizancio-6', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Por qué fueron decisivos los asedios árabes de Constantinopla de 674-678 y 717-718?',
      options: [
        'Porque acabaron con el Imperio bizantino',
        'Porque detuvieron la expansión islámica hacia Europa oriental durante siglos',
        'Porque provocaron el cisma con Roma',
        'Porque destruyeron Santa Sofía',
      ],
      answer: 1,
      explanation: 'Las murallas teodosianas, la cadena del Cuerno de Oro y el fuego griego permitieron resistir. Es uno de los acontecimientos más consecuentes de la historia europea temprana.',
    },
    {
      id: 'bizancio-7', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Cuál era el argumento cristológico de los iconódulos?',
      options: [
        'Que las imágenes eran útiles para enseñar a los analfabetos',
        'Que si Dios se hizo carne, esa carne es representable, y negarlo equivale a negar la Encarnación',
        'Que los iconos tenían poder milagroso propio',
        'Que la Biblia ordenaba fabricar imágenes',
      ],
      answer: 1,
      explanation: 'Juan Damasceno añadió la distinción entre latría, adoración debida solo a Dios, y proskynesis, veneración dirigida al prototipo a través de la imagen.',
    },
    {
      id: 'bizancio-8', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué problema de fuentes plantea el estudio de la iconoclasia?',
      options: [
        'Que no se conserva ningún texto de la época',
        'Que los textos iconoclastas fueron destruidos y solo se conocen a través de las refutaciones de sus adversarios',
        'Que están escritos en latín',
        'Que fueron redactados en el siglo XIX',
      ],
      answer: 1,
      explanation: 'El sesgo es sistemático: los vencedores conservaron su versión y eliminaron la contraria, lo que obliga a una cautela permanente.',
    },
    {
      id: 'bizancio-9', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿En qué se diferenció el modelo misionero bizantino del latino?',
      options: [
        'En que no traducía las Escrituras',
        'En que aceptó la liturgia en lengua vernácula y creó un alfabeto para el eslavo',
        'En que evangelizaba por la fuerza',
        'En que exigía el celibato a los conversos',
      ],
      answer: 1,
      explanation: 'Cirilo y Metodio crearon el glagolítico, del que derivó el cirílico. Eso dio a los pueblos eslavos una cultura escrita propia.',
    },
    {
      id: 'bizancio-10', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Cuál era la diferencia de fondo entre Roma y Constantinopla sobre la autoridad eclesiástica?',
      options: [
        'Ninguna: solo discutían sobre el calendario',
        'Roma reivindicaba primacía jurisdiccional universal; Constantinopla defendía la pentarquía con primacía romana solo de honor',
        'Constantinopla no reconocía al papa como obispo',
        'Roma rechazaba los concilios',
      ],
      answer: 1,
      explanation: 'A eso se sumaban el Filioque, el celibato del clero latino y el pan ácimo. Los anatemas de 1054 fueron un episodio menor magnificado después.',
    },
    {
      id: 'bizancio-11', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué hizo irreversible la ruptura entre las Iglesias de Oriente y Occidente?',
      options: [
        'Los anatemas mutuos de 1054',
        'El saqueo de Constantinopla por la Cuarta Cruzada en 1204',
        'El concilio de Nicea',
        'La conversión de la Rus de Kiev',
      ],
      answer: 1,
      explanation: 'La destrucción de iglesias y la profanación de reliquias crearon un rencor que los intentos de unión de Lyon (1274) y Florencia (1439) nunca superaron.',
    },
    {
      id: 'bizancio-12', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué consecuencia tuvo la derrota de Manzikert en 1071?',
      options: [
        'La pérdida de Egipto',
        'La apertura de Anatolia, principal reserva de reclutas e impuestos, a la ocupación turca',
        'La caída inmediata de Constantinopla',
        'El fin de la dinastía Comnena',
      ],
      answer: 1,
      explanation: 'La recuperación comnena del siglo XII se apoyó en concesiones comerciales a Venecia y Génova que drenaron a largo plazo los ingresos aduaneros del Estado.',
    },
    {
      id: 'bizancio-13', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué significa la frase atribuida a un alto funcionario bizantino sobre el turbante y la tiara?',
      options: [
        'Que preferían aliarse con Venecia',
        'Que preferían la dominación otomana, que permitía conservar la fe, a la unión con Roma',
        'Que rechazaban toda religión',
        'Que apoyaban la conversión al islam',
      ],
      answer: 1,
      explanation: 'Resume la resistencia popular feroz a las uniones eclesiásticas, percibidas como sometimiento al papado más que como reconciliación.',
    },
    {
      id: 'bizancio-14', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué permitió a los otomanos derribar en 1453 unas murallas que habían resistido mil años?',
      options: [
        'Una traición desde el interior',
        'La artillería de asedio de gran calibre',
        'Un terremoto previo',
        'La retirada de la flota veneciana',
      ],
      answer: 1,
      explanation: 'Unos 7.000 defensores se enfrentaron a decenas de miles de sitiadores con cañones capaces de batir las murallas teodosianas. Constantino XI murió combatiendo.',
    },
    {
      id: 'bizancio-15', era: 'Edad Media', topicId: 'bizancio', topic: 'Bizancio',
      question: '¿Qué efecto tuvo la caída de Constantinopla sobre el Renacimiento?',
      options: [
        'Ninguno: fueron procesos independientes',
        'La emigración de eruditos griegos a Italia con sus manuscritos alimentó el humanismo',
        'Provocó el cierre de las universidades italianas',
        'Impuso el uso del griego en toda Europa',
      ],
      answer: 1,
      explanation: 'También estimuló la búsqueda de rutas marítimas hacia Asia y permitió a Moscú reclamar la herencia ortodoxa como «tercera Roma».',
    },
  ],
}
