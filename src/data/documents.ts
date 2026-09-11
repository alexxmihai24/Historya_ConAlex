/* Documentos comentados: un extracto de fuente primaria por tema, con su
 * pregunta. Es la pieza que faltaba para que la lección se lea como una página
 * de libro de texto y no como un artículo (SPEC §14.8).
 *
 * LICENCIA. Todos los originales son de dominio público. Cuando el original no
 * está en español, la versión es propia y el pie lo dice: una traducción
 * moderna publicada SÍ puede tener derechos vivos aunque el original tenga tres
 * mil años, y ese es el error fácil de cometer aquí.
 *
 * `prehistoria` no tiene documento a propósito: es, por definición, el periodo
 * anterior a la escritura. Un tema sin entrada aquí simplemente no lo muestra.
 */

import type { TopicDocument } from './types.ts'

export const TOPIC_DOCUMENTS: Record<string, TopicDocument[]> = {
  mesopotamia: [
    {
      section: 4,
      title: 'Del Código de Hammurabi',
      text: [
        'Si un hombre ha destruido el ojo de un hombre libre, se destruirá su ojo.',
        'Si ha destruido el ojo de un subalterno o ha roto el hueso de un subalterno, pagará una mina de plata.',
        'Si ha destruido el ojo del esclavo de un hombre libre o ha roto el hueso del esclavo de un hombre libre, pagará la mitad de su precio.',
      ].join('\n\n'),
      source: 'Código de Hammurabi, leyes 196 a 199. Babilonia, hacia 1750 a. C.',
      note: 'Versión propia a partir del texto acadio. El original está grabado en la estela del Louvre.',
      question: 'La ley del talión suena a igualdad ante la ley. Lee otra vez las tres sentencias: ¿de qué depende el castigo? ¿Qué te dice eso sobre quién era igual a quién en Babilonia?',
    },
  ],
  egipto: [
    {
      section: 3,
      title: 'La primera huelga documentada',
      text: [
        'Hoy hace veinte días del mes y no hemos recibido las raciones. Hemos pasado por encima de los muros del recinto.',
        'Y dijimos: tenemos hambre. Han pasado dieciocho días de este mes. Nos sentamos aquí y no volveremos al trabajo.',
        'Que se lo digan al faraón, nuestro buen señor, y al visir, nuestro superior, para que se nos dé de qué vivir.',
      ].join('\n\n'),
      source: 'Papiro de la huelga de Deir el-Medina, reinado de Ramsés III, hacia 1155 a. C.',
      note: 'Versión propia a partir del hierático. El papiro se conserva en el Museo Egipcio de Turín.',
      question: 'Los obreros no piden libertad ni salario: piden que les entreguen el grano prometido, y apelan al faraón. ¿Qué revela eso sobre cómo funcionaba realmente la economía egipcia?',
    },
  ],
  grecia: [
    {
      section: 2,
      title: 'Pericles describe la democracia ateniense',
      text: [
        'Nuestro régimen se llama democracia porque el gobierno no depende de unos pocos, sino de la mayoría.',
        'En lo que toca a los asuntos privados, la ley concede igualdad a todos; pero en cuanto a la consideración pública, cada uno es preferido no por pertenecer a una clase, sino por su mérito.',
        'Y tampoco la pobreza es un obstáculo: quien puede hacer un bien a la ciudad no se ve impedido por la oscuridad de su condición.',
      ].join('\n\n'),
      source: 'Tucídides, Historia de la guerra del Peloponeso, II, 37. Discurso fúnebre de Pericles, 431 a. C.',
      note: 'Versión propia a partir del griego. Tucídides advierte que reconstruye los discursos, no los transcribe.',
      question: 'Pericles dice que la pobreza no impide participar. ¿A quiénes deja fuera este retrato sin mencionarlos siquiera? Compáralo con lo que el apartado dice sobre quién era ciudadano.',
    },
  ],
  helenismo: [
    {
      section: 4,
      title: 'Una ciudad griega en el Punyab',
      text: [
        'Aquí están las palabras de Clearco, traídas desde Delfos, la escritura luminosa de los antiguos:',
        'De niño, sé ordenado. De joven, dueño de ti mismo. En la madurez, justo. De anciano, buen consejero. Y al morir, sin pesadumbre.',
      ].join('\n\n'),
      source: 'Inscripción del recinto de Kineas, Ai Janum (actual Afganistán), siglo III a. C.',
      note: 'Versión propia a partir del griego. Las máximas fueron copiadas en Delfos y llevadas a más de cinco mil kilómetros.',
      question: 'Alguien se tomó la molestia de copiar unas máximas en Grecia y grabarlas en el actual Afganistán. ¿Eso es helenización, o es otra cosa? Piensa en para quién estaba escrita esta piedra.',
    },
  ],
  'roma-republica': [
    {
      section: 1,
      title: 'Polibio explica por qué Roma no tiene un solo dueño',
      text: [
        'Los tres poderes estaban repartidos de tal modo que ni un romano habría podido decir con certeza si el régimen era aristocrático, democrático o monárquico.',
        'Y era natural: fijándose en el poder de los cónsules, parecía monárquico; en el del senado, aristocrático; y si se atendía al poder del pueblo, parecía claramente democrático.',
      ].join('\n\n'),
      source: 'Polibio, Historias, VI, 11. Escrito hacia 150 a. C.',
      note: 'Versión propia a partir del griego. Polibio era un rehén griego en Roma y escribía para explicar el éxito romano a sus compatriotas.',
      question: 'Polibio presenta el equilibrio como la clave del éxito romano. Con lo que sabes del voto por centurias, ¿hasta qué punto el elemento democrático era real? ¿Y por qué le interesaba a un griego describirlo así?',
    },
  ],
  'roma-imperio': [
    {
      section: 3,
      title: 'Un gobernador pregunta qué hacer con los cristianos',
      text: [
        'He seguido este procedimiento con quienes me eran denunciados como cristianos. Les preguntaba si lo eran; a los que confesaban, se lo preguntaba una segunda y una tercera vez, amenazándolos con el suplicio; a los que persistían, mandaba ejecutarlos.',
        'Porque no dudaba de que, fuera lo que fuese lo que confesaran, había que castigar su obstinación y su terquedad inflexible.',
        'Respuesta de Trajano: no hay que buscarlos. Si son denunciados y quedan convictos, hay que castigarlos; pero de manera que quien niegue ser cristiano y lo demuestre con hechos, obtenga el perdón. Las denuncias anónimas no deben tener cabida en ningún proceso.',
      ].join('\n\n'),
      source: 'Plinio el Joven, Cartas, X, 96 y 97. Bitinia, hacia el año 112.',
      note: 'Versión propia a partir del latín.',
      question: 'Trajano prohíbe buscar cristianos y prohíbe las denuncias anónimas. ¿Encaja eso con la idea de una persecución sistemática? ¿Qué es exactamente lo que a Plinio le parece punible?',
    },
  ],
  bizancio: [
    {
      section: 1,
      title: 'Por qué Justiniano manda recopilar el derecho',
      text: [
        'Hemos encontrado que las leyes, transmitidas desde la fundación de la ciudad de Roma, se hallaban en tal confusión que se extendían hasta lo infinito y ninguna capacidad humana podía abarcarlas.',
        'Por eso hemos decidido reunir en un solo cuerpo lo que hay de útil en todas ellas, suprimir lo repetido y lo contradictorio, y darle a todo la fuerza de una sola ley.',
      ].join('\n\n'),
      source: 'Constitución Deo auctore, prefacio del Digesto. Constantinopla, 530.',
      note: 'Versión propia a partir del latín.',
      question: 'El problema que describe Justiniano no es la falta de leyes, sino su exceso y su desorden. ¿Por qué una recopilación es un acto de poder político y no solo un trabajo de archivo?',
    },
  ],
  islam: [
    {
      section: 2,
      title: 'Las condiciones de la rendición de Jerusalén',
      text: [
        'En el nombre de Dios, clemente y misericordioso. Esta es la garantía de seguridad que el siervo de Dios Umar, comendador de los creyentes, concede a la gente de Jerusalén.',
        'Les concede seguridad para sus vidas y sus bienes, para sus iglesias y sus cruces, para los enfermos y los sanos y para toda su comunidad.',
        'Sus iglesias no serán ocupadas ni destruidas, ni se reducirá su extensión, ni se tocarán sus cruces ni sus bienes. No serán forzados en su religión ni se hará daño a ninguno de ellos.',
      ].join('\n\n'),
      source: 'Capitulación de Jerusalén atribuida al califa Umar, año 638, recogida por al-Tabari.',
      note: 'Versión propia a partir del árabe. El texto se transmite en crónicas muy posteriores y su literalidad se discute.',
      question: 'El documento garantiza culto y bienes a cambio de sumisión y tributo. ¿Por qué esta fórmula favorece una conquista rápida? ¿Y en qué se diferencia de la tolerancia tal como la entendemos hoy?',
    },
  ],
  feudalismo: [
    {
      section: 1,
      title: 'Cómo se hacía un vasallo',
      text: [
        'El conde preguntó al que iba a rendirle homenaje si quería convertirse sin reservas en su hombre, y este respondió: lo quiero.',
        'Juntando entonces sus manos, las puso entre las manos del conde, y quedaron unidos por un beso.',
        'En segundo lugar, el que había rendido homenaje empeñó su fe con estas palabras: prometo por mi fe ser fiel desde ahora al conde Guillermo, y guardarle enteramente mi homenaje contra todos, de buena fe y sin engaño.',
      ].join('\n\n'),
      source: 'Galberto de Brujas, Historia del asesinato de Carlos el Bueno, 1127.',
      note: 'Versión propia a partir del latín.',
      question: 'Todo el vínculo se establece con gestos y palabras ante testigos, sin firmar nada. ¿Por qué el gesto vale como prueba en esta sociedad? ¿Qué pasa cuando alguien es vasallo de dos señores enfrentados?',
    },
  ],
  andalus: [
    {
      section: 0,
      title: 'El pacto de Teodomiro',
      text: [
        'En el nombre de Dios. Escrito de Abd al-Aziz para Teodomiro, hijo de Gandaris, sobre que acepta la paz y recibe la promesa de Dios y su protección.',
        'No se le depondrá a él ni a ninguno de los suyos, no se les matará ni cautivará ni se les separará de sus mujeres y sus hijos, no se les forzará en su religión, no se quemarán sus iglesias.',
        'A condición de que entregue siete ciudades, y de que no dé refugio a nuestros enemigos ni oculte noticia de ellos, y de que pague cada hombre libre un dinar, cuatro medidas de trigo y cuatro de cebada.',
      ].join('\n\n'),
      source: 'Tratado de Teodomiro, año 713. Conservado en crónicas árabes.',
      note: 'Versión propia a partir del árabe.',
      question: 'Un noble visigodo conserva sus ciudades, su religión y su gente a cambio de tributo. ¿Qué explica esto sobre la velocidad de la conquista de 711? ¿Fue sustitución de población o cambio de quien cobra?',
    },
  ],
  'plena-edad-media': [
    {
      section: 3,
      title: 'El emperador protege a los estudiantes',
      text: [
        'Concedemos a todos los que viajan por causa de los estudios, y sobre todo a los profesores de leyes divinas y sagradas, que ellos y sus mensajeros puedan ir y residir con seguridad en los lugares donde se practican los estudios de letras.',
        'Nos mueve la compasión hacia quienes por amor a la ciencia se hacen desterrados, se empobrecen y exponen su vida, y son con frecuencia agraviados en sus bienes por hombres viles.',
      ].join('\n\n'),
      source: 'Authentica Habita, privilegio de Federico I Barbarroja, 1155.',
      note: 'Versión propia a partir del latín. Es uno de los primeros textos que reconocen un estatuto jurídico propio a los universitarios.',
      question: 'El emperador no crea la universidad: reconoce un privilegio a quienes ya están estudiando. ¿Qué gana él con esto? Fíjate en qué disciplina menciona primero.',
    },
  ],
  'crisis-siglo-xiv': [
    {
      section: 1,
      title: 'Boccaccio describe la peste en Florencia',
      text: [
        'Y era tal la multitud de los que morían cada día y en cada lugar, que era estupor oírlo decir y más aún verlo.',
        'De ahí que nacieron casi por necesidad entre los que quedaban vivos costumbres contrarias a las antiguas. Ya no había mujer que llorase al muerto, ni vecinos que acompañasen el cuerpo.',
        'Y muchos morían de noche y muchos de día, y ninguno tenía otro cuidado sino sacarlos de casa y ponerlos delante de la puerta.',
      ].join('\n\n'),
      source: 'Giovanni Boccaccio, Decamerón, introducción a la primera jornada. Escrito hacia 1350.',
      note: 'Versión propia a partir del italiano. Boccaccio vivió la epidemia en Florencia.',
      question: 'Boccaccio no describe muertes: describe la ruptura de los ritos. ¿Por qué eso puede ser tan devastador para una sociedad como la mortalidad misma?',
    },
  ],
  renacimiento: [
    {
      section: 1,
      title: 'Lorenzo Valla demuestra una falsificación',
      text: [
        'Que no digan que el documento es antiguo: nada delata tanto a un falsario como el lenguaje.',
        'Este texto habla de sátrapas. ¿Acaso el emperador Constantino llamaba sátrapas a sus consejeros? Ni en Roma se usó nunca esa palabra, ni consta en autor alguno de aquel tiempo.',
        'Habla también de la ciudad de Constantinopla como si ya fuese patriarcado, cuando el documento pretende ser anterior a su misma fundación.',
      ].join('\n\n'),
      source: 'Lorenzo Valla, Sobre la falsamente creída y mentida donación de Constantino, 1440.',
      note: 'Versión propia y abreviada a partir del latín.',
      question: 'Valla no discute si la Donación es justa: demuestra que el latín es posterior a la fecha que dice tener. ¿Por qué esa forma de argumentar es más peligrosa para el poder que cualquier crítica moral?',
    },
  ],
  descubrimientos: [
    {
      section: 4,
      title: 'El sermón de Montesinos',
      text: [
      'Yo soy la voz de Cristo en el desierto de esta isla, y por tanto conviene que con atención, no cualquiera, sino con todo vuestro corazón y con todos vuestros sentidos, la oigáis.',
      'Decid, ¿con qué derecho y con qué justicia tenéis en tan cruel y horrible servidumbre a estos indios? ¿Con qué autoridad habéis hecho tan detestables guerras a estas gentes que estaban en sus tierras mansas y pacíficas?',
      '¿Estos no son hombres? ¿No tienen ánimas racionales? ¿No sois obligados a amarlos como a vosotros mismos?',
      ].join('\n\n'),
      source: 'Fray Antón de Montesinos, sermón de Adviento en La Española, diciembre de 1511. Recogido por Bartolomé de las Casas.',
      note: 'Texto en español. Nos llega a través de la Historia de las Indias de Las Casas, que estaba presente.',
      question: 'La denuncia viene de dentro del propio sistema colonial y apenas veinte años después de 1492. ¿Qué dice eso sobre la idea de que en aquella época nadie podía pensar de otro modo?',
    },
  ],
  reforma: [
    {
      section: 0,
      title: 'Cuatro de las noventa y cinco tesis',
      text: [
        '21. Yerran los predicadores de indulgencias cuando dicen que por las indulgencias del papa el hombre queda libre de toda pena y salvo.',
        '27. Predican una doctrina humana quienes dicen que en cuanto la moneda suena en el cofre, el alma vuela del purgatorio.',
        '43. Se ha de enseñar a los cristianos que quien da al pobre o presta al necesitado hace mejor que si comprase indulgencias.',
        '86. ¿Por qué el papa, cuya riqueza es hoy mayor que la de los más ricos, no construye la basílica de San Pedro con su propio dinero antes que con el de los pobres fieles?',
      ].join('\n\n'),
      source: 'Martín Lutero, Disputa sobre el poder de las indulgencias, 31 de octubre de 1517.',
      note: 'Versión propia a partir del latín. Las tesis se escribieron para un debate universitario, no para el público.',
      question: 'La tesis 86 no es teológica, es económica y muy directa. ¿Por qué crees que ese tipo de argumento se difundió más deprisa que los doctrinales cuando el texto se tradujo e imprimió en alemán?',
    },
  ],
  absolutismo: [
    {
      section: 2,
      title: 'Bodino define la soberanía',
      text: [
        'La soberanía es el poder absoluto y perpetuo de una República.',
        'Es necesario que quienes son soberanos no estén de ningún modo sometidos al mando de otro y puedan dar ley a los súbditos y anular las leyes inútiles para hacer otras.',
        'Pero en cuanto a las leyes divinas y naturales, todos los príncipes de la tierra están sujetos a ellas, y no está en su poder contravenirlas si no quieren ser culpables de lesa majestad divina.',
      ].join('\n\n'),
      source: 'Jean Bodin, Los seis libros de la República, I, 8. París, 1576.',
      note: 'Versión propia a partir del francés.',
      question: 'Bodino dice absoluto y a la vez sujeto a la ley divina y natural. ¿Es una contradicción o significaba otra cosa? Compáralo con lo que hoy entendemos por poder absoluto.',
    },
  ],
  'revolucion-cientifica': [
    {
      section: 2,
      title: 'Galileo sobre cómo leer la Biblia y la naturaleza',
      text: [
        'Siendo la Sagrada Escritura verdadera en muchos lugares susceptible de interpretaciones distintas del sonido literal de las palabras, y siendo la naturaleza inexorable e inmutable y nada cuidadosa de que sus razones ocultas sean o no accesibles a los hombres,',
        'me parece que ninguna proposición natural que la experiencia nos ponga ante los ojos debe ser puesta en duda, y menos condenada, por lugares de la Escritura que puedan tener mil sentidos diversos.',
      ].join('\n\n'),
      source: 'Galileo Galilei, Carta a Cristina de Lorena, 1615.',
      note: 'Versión propia a partir del italiano.',
      question: 'Galileo no niega la Escritura: discute quién tiene autoridad para interpretarla en materias naturales. ¿Por qué ese movimiento era más arriesgado para él que defender el heliocentrismo como hipótesis?',
    },
  ],
  ilustracion: [
    {
      section: 0,
      title: 'Kant responde qué es la Ilustración',
      text: [
        'La Ilustración es la salida del hombre de su minoría de edad, de la cual él mismo es culpable.',
        'Minoría de edad es la incapacidad de servirse del propio entendimiento sin la guía de otro. Uno mismo es culpable de ella cuando su causa no reside en la falta de entendimiento, sino de decisión y valor para servirse del suyo sin la guía de otro.',
        'Ten el valor de servirte de tu propio entendimiento: he aquí el lema de la Ilustración.',
      ].join('\n\n'),
      source: 'Immanuel Kant, Respuesta a la pregunta: ¿qué es la Ilustración?, Berlín, 1784.',
      note: 'Versión propia a partir del alemán.',
      question: 'Kant dice que la culpa es del propio individuo, no de quien lo tutela. ¿Te parece justo ese reproche? ¿Qué haría falta, además de valor, para pensar por cuenta propia en 1784?',
    },
  ],
  'revolucion-francesa': [
    {
      section: 2,
      title: 'Declaración de los Derechos del Hombre y del Ciudadano',
      text: [
        'Artículo 1. Los hombres nacen y permanecen libres e iguales en derechos. Las distinciones sociales solo pueden fundarse en la utilidad común.',
        'Artículo 3. El principio de toda soberanía reside esencialmente en la nación. Ningún cuerpo ni individuo puede ejercer autoridad que no emane expresamente de ella.',
        'Artículo 17. Siendo la propiedad un derecho inviolable y sagrado, nadie puede ser privado de ella salvo cuando la necesidad pública, legalmente comprobada, lo exija de modo evidente, y a condición de una justa y previa indemnización.',
      ].join('\n\n'),
      source: 'Asamblea Nacional Constituyente, 26 de agosto de 1789.',
      note: 'Versión propia a partir del francés.',
      question: 'El artículo 1 proclama la igualdad y el 17 declara la propiedad inviolable y sagrada. ¿Qué tipo de sociedad resulta de sostener las dos cosas a la vez? ¿A quién beneficia y a quién no?',
    },
  ],
  industrializacion: [
    {
      section: 2,
      title: 'Interrogatorio a un obrero sobre el trabajo infantil',
      text: [
        '¿A qué edad empezó usted a trabajar en una fábrica? A los seis años.',
        '¿Cuáles eran sus horarios en tiempo de mucho trabajo? De las cinco de la mañana a las nueve de la noche.',
        '¿Qué descanso les daban? Un cuarto de hora para el desayuno, media hora para la comida y otro cuarto para beber.',
        '¿Tenían tiempo suficiente para comer? No, teníamos que dejar la comida o llevárnosla al trabajo.',
        '¿Qué hacían para mantenerlos despiertos? Nos golpeaban cuando nos entraba el sueño.',
      ].join('\n\n'),
      source: 'Testimonio ante el Comité Sadler, Parlamento británico, 1832.',
      note: 'Versión propia y abreviada a partir del acta oficial en inglés.',
      question: 'Este testimonio se recogió en el Parlamento y se publicó. ¿Por qué crees que el Estado necesitó documentar así lo que ya estaba a la vista para poder legislar sobre ello?',
    },
  ],
  'revoluciones-liberales': [
    {
      section: 1,
      title: 'La soberanía en la Constitución de Cádiz',
      text: [
        'Artículo 1. La Nación española es la reunión de todos los españoles de ambos hemisferios.',
        'Artículo 2. La Nación española es libre e independiente, y no es ni puede ser patrimonio de ninguna familia ni persona.',
        'Artículo 3. La soberanía reside esencialmente en la Nación, y por lo mismo pertenece a esta exclusivamente el derecho de establecer sus leyes fundamentales.',
      ].join('\n\n'),
      source: 'Constitución política de la Monarquía Española, Cádiz, 19 de marzo de 1812.',
      note: 'Texto original en español.',
      question: 'El artículo 2 dice que la nación no es patrimonio de ninguna familia. ¿Contra qué idea de monarquía se está escribiendo eso? Fíjate también en la expresión de ambos hemisferios.',
    },
  ],
  imperialismo: [
    {
      section: 2,
      title: 'El Acta de Berlín fija las reglas del reparto',
      text: [
        'Artículo 34. La potencia que en adelante tome posesión de un territorio en las costas del continente africano situado fuera de sus posesiones actuales acompañará el acta respectiva de una notificación dirigida a las demás potencias firmantes, a fin de ponerlas en condiciones de hacer valer sus reclamaciones.',
        'Artículo 35. Las potencias firmantes reconocen la obligación de asegurar, en los territorios ocupados por ellas en las costas del continente africano, la existencia de una autoridad suficiente para hacer respetar los derechos adquiridos.',
      ].join('\n\n'),
      source: 'Acta General de la Conferencia de Berlín, 26 de febrero de 1885.',
      note: 'Versión propia a partir del francés.',
      question: 'Los dos artículos regulan quién avisa a quién. ¿A quién se dirige este tratado y a quién no se menciona en ningún momento? ¿Qué efecto tiene exigir ocupación efectiva para reconocer una reclamación?',
    },
  ],
  'gran-guerra': [
    {
      section: 5,
      title: 'El artículo 231 del Tratado de Versalles',
      text: [
        'Los Gobiernos aliados y asociados declaran, y Alemania reconoce, que Alemania y sus aliados son responsables, por haberlos causado, de todos los daños y pérdidas sufridos por los Gobiernos aliados y asociados y por sus súbditos como consecuencia de la guerra que les fue impuesta por la agresión de Alemania y sus aliados.',
      ].join('\n\n'),
      source: 'Tratado de Versalles, artículo 231, 28 de junio de 1919.',
      note: 'Versión propia a partir del francés. En Alemania se conoció como el artículo de la culpa de guerra.',
      question: 'El artículo se redactó como base jurídica para reclamar reparaciones, no como veredicto moral. ¿Por qué en Alemania se leyó de otra manera? ¿Qué consecuencias tuvo esa lectura en los años siguientes?',
    },
  ],
  'revolucion-rusa': [
    {
      section: 1,
      title: 'Lenin fija el rumbo al volver del exilio',
      text: [
        'Ninguna concesión al defensismo revolucionario. Terminar la guerra con una paz verdaderamente democrática es imposible sin derrocar al capital.',
        'La peculiaridad del momento actual en Rusia consiste en el paso de la primera etapa de la revolución, que dio el poder a la burguesía, a su segunda etapa, que debe poner el poder en manos del proletariado y de los campesinos pobres.',
        'No una república parlamentaria, sino una república de los Soviets de diputados obreros, braceros y campesinos en todo el país, de abajo arriba.',
      ].join('\n\n'),
      source: 'V. I. Lenin, Tesis de abril, publicadas en Pravda el 7 de abril de 1917.',
      note: 'Versión propia y abreviada a partir del ruso.',
      question: 'Lenin rompe con la posición de casi toda la izquierda rusa del momento, que apoyaba al Gobierno Provisional. ¿Qué le da ventaja a su programa en un país en guerra y con hambre?',
    },
  ],
  entreguerras: [
    {
      section: 3,
      title: 'La ley que liquidó la República de Weimar',
      text: [
        'Artículo 1. Las leyes del Reich pueden ser promulgadas por el Gobierno del Reich además de por el procedimiento previsto en la Constitución.',
        'Artículo 2. Las leyes promulgadas por el Gobierno del Reich pueden apartarse de la Constitución, siempre que no tengan por objeto la institución del Reichstag y del Reichsrat.',
        'Artículo 5. Esta ley entra en vigor el día de su promulgación y expira el 1 de abril de 1937.',
      ].join('\n\n'),
      source: 'Ley para remediar la penuria del pueblo y del Reich, 24 de marzo de 1933.',
      note: 'Versión propia a partir del alemán. Se la conoce como Ley de Plenos Poderes.',
      question: 'La ley se aprobó en el Parlamento, con la mayoría exigida y con fecha de caducidad. ¿Por qué es más inquietante que un golpe de Estado abierto? ¿Qué queda de una constitución si se puede legislar contra ella?',
    },
  ],
  'segunda-guerra': [
    {
      section: 5,
      title: 'El acta de la conferencia de Wannsee',
      text: [
        'En lugar de la emigración, y previa autorización del Führer, ha aparecido ahora como otra posible solución la evacuación de los judíos hacia el Este.',
        'En el curso de la solución final, los judíos serán llevados al Este y empleados allí en el trabajo, en columnas separadas por sexos. Una gran parte desaparecerá por disminución natural.',
        'El resto, que sin duda constituirá la parte más resistente, deberá ser tratado en consecuencia, ya que representa una selección natural y podría convertirse, en caso de ser liberado, en el germen de una nueva reconstrucción judía.',
      ].join('\n\n'),
      source: 'Acta de la Conferencia de Wannsee, Berlín, 20 de enero de 1942.',
      note: 'Versión propia a partir del alemán. Sobrevivió una de las treinta copias, hallada en 1947.',
      question: 'El documento es administrativo y no menciona la palabra asesinato. ¿Qué función cumple ese lenguaje? Fíjate en quiénes asisten a la reunión: no son militares, son funcionarios y juristas.',
    },
  ],
  'guerra-fria': [
    {
      section: 0,
      title: 'Churchill nombra el telón de acero',
      text: [
        'Desde Stettin, en el Báltico, hasta Trieste, en el Adriático, ha caído sobre el continente un telón de acero.',
        'Detrás de esa línea se encuentran todas las capitales de los antiguos Estados de Europa central y oriental. Varsovia, Berlín, Praga, Viena, Budapest, Belgrado, Bucarest y Sofía.',
        'No creo que la Rusia soviética desee la guerra. Lo que desea son los frutos de la guerra y la expansión indefinida de su poder y de sus doctrinas.',
      ].join('\n\n'),
      source: 'Winston Churchill, discurso en Fulton, Misuri, 5 de marzo de 1946.',
      note: 'Versión propia a partir del inglés. Churchill ya no era primer ministro cuando lo pronunció.',
      question: 'El discurso es de 1946, antes de la doctrina Truman y del Plan Marshall. ¿Describe una situación o ayuda a crearla? Piensa en cómo pudo leerse en Moscú.',
    },
  ],
  'espana-siglo-xx': [
    {
      section: 4,
      title: 'El artículo primero de la Constitución de 1978',
      text: [
        '1. España se constituye en un Estado social y democrático de Derecho, que propugna como valores superiores de su ordenamiento jurídico la libertad, la justicia, la igualdad y el pluralismo político.',
        '2. La soberanía nacional reside en el pueblo español, del que emanan los poderes del Estado.',
        '3. La forma política del Estado español es la Monarquía parlamentaria.',
      ].join('\n\n'),
      source: 'Constitución española, artículo 1, aprobada en referéndum el 6 de diciembre de 1978.',
      note: 'Texto original en español.',
      question: 'El apartado 2 sitúa la soberanía en el pueblo y el 3 mantiene la monarquía, que procedía de la designación hecha por Franco. ¿Cómo se sostienen juntas ambas cosas? ¿Qué te dice del carácter pactado de la Transición?',
    },
  ],
  'mundo-actual': [
    {
      section: 5,
      title: 'El objetivo del Acuerdo de París',
      text: [
        'El presente Acuerdo tiene por objeto reforzar la respuesta mundial a la amenaza del cambio climático, y para ello mantener el aumento de la temperatura media mundial muy por debajo de 2 °C con respecto a los niveles preindustriales.',
        'Y proseguir los esfuerzos para limitar ese aumento de la temperatura a 1,5 °C, reconociendo que ello reduciría considerablemente los riesgos y los efectos del cambio climático.',
        'Cada Parte deberá preparar, comunicar y mantener las sucesivas contribuciones determinadas a nivel nacional que tenga previsto efectuar.',
      ].join('\n\n'),
      source: 'Acuerdo de París, artículos 2 y 4, 12 de diciembre de 2015.',
      note: 'Texto oficial de Naciones Unidas en español.',
      question: 'El acuerdo fija objetivos ambiciosos y deja que cada país decida su contribución. ¿Qué gana con esa fórmula y qué pierde? Compáralo con lo que haría falta para que fuese exigible.',
    },
  ],
  'china-imperial': [
    {
      section: 3,
      title: 'Qianlong responde al rey de Inglaterra',
      text: [
        'Tú, oh Rey, vives más allá de los confines de muchos mares y, sin embargo, movido por el humilde deseo de participar de los beneficios de nuestra civilización, has enviado una misión que trae respetuosamente tu memorial.',
        'En cuanto a tu petición de enviar a uno de tus nacionales para que resida en mi Corte y vele por el comercio de tu país, es contraria a todos los usos de mi dinastía y no puede ser concedida.',
        'Como tu Embajador puede comprobar por sí mismo, lo poseemos todo. No concedo valor a los objetos extraños e ingeniosos y no tengo uso alguno para las manufacturas de tu país.',
      ].join('\n\n'),
      source: 'Edicto del emperador Qianlong a Jorge III, misión Macartney, 1793.',
      note: 'Versión propia y abreviada a partir de la traducción del chino.',
      question: 'Menos de cincuenta años después, la primera guerra del Opio impuso a China los términos que aquí se rechazan. ¿Era esta respuesta arrogancia, un cálculo razonable con la información de 1793, o las dos cosas?',
    },
  ],
  india: [
    {
      section: 0,
      title: 'Ashoka se arrepiente de su victoria',
      text: [
        'Ocho años después de su consagración, el rey conquistó Kalinga. Ciento cincuenta mil personas fueron deportadas, cien mil murieron y muchas más perecieron.',
        'Inmediatamente después de la anexión de Kalinga, el rey se entregó al celoso estudio del dhamma, a su amor y a su enseñanza, porque sintió remordimiento por haber conquistado Kalinga.',
        'Pues el rey considera que la mayor de todas las conquistas es la conquista por el dhamma, y esta la ha logrado aquí y en todas sus fronteras.',
      ].join('\n\n'),
      source: 'Edicto mayor sobre roca XIII de Ashoka, siglo III a. C.',
      note: 'Versión propia a partir de las traducciones del prácrito. Se grabó por todo el imperio.',
      question: 'Un rey manda grabar en piedra el número de muertos que causó y su propio arrepentimiento. ¿Es un acto de sinceridad, un instrumento de gobierno, o ambos? ¿Qué gana un Estado presentándose así?',
    },
  ],
  japon: [
    {
      section: 3,
      title: 'La Carta del Juramento de Meiji',
      text: [
        'Se establecerán asambleas deliberantes y todos los asuntos se decidirán mediante discusión pública.',
        'Todas las clases, altas y bajas, se unirán para llevar a cabo con vigor la administración de los asuntos del Estado.',
        'Se abandonarán las malas costumbres del pasado y todo se fundará en las justas leyes de la naturaleza.',
        'Se buscará el conocimiento por todo el mundo, a fin de fortalecer los cimientos del poder imperial.',
      ].join('\n\n'),
      source: 'Carta del Juramento en cinco artículos, emperador Meiji, abril de 1868.',
      note: 'Versión propia y abreviada a partir del japonés.',
      question: 'El texto se presenta como restauración del poder imperial y a la vez propone buscar el conocimiento por todo el mundo. ¿Cómo puede una apelación a la tradición servir para justificar el cambio más rápido de la historia de Japón?',
    },
  ],
  africa: [
    {
      section: 2,
      title: 'Ibn Battuta visita el imperio de Malí',
      text: [
        'Entre las buenas cualidades de esta gente está la escasez de injusticia, pues son de todas las gentes los más alejados de ella, y su sultán no perdona a nadie que cometa algo de eso.',
        'Y está también la seguridad general en su país, pues no teme el viajero ni el residente ladrón ni asaltante.',
        'Y están también atentos a aprender de memoria el Corán sublime; ponen a sus hijos cadenas si notan en ellos flojera en aprenderlo, y no se las quitan hasta que lo memorizan.',
      ].join('\n\n'),
      source: 'Ibn Battuta, Relato de viaje, sobre su estancia en Malí, 1352-1353.',
      note: 'Versión propia a partir del árabe. Ibn Battuta era un jurista marroquí que viajó durante casi treinta años.',
      question: 'Un viajero del siglo XIV describe un Estado con justicia, seguridad y escuelas. ¿Cómo encaja este testimonio con la idea de un África sin historia? Ten en cuenta también que el autor no era neutral: comparaba con lo que conocía.',
    },
  ],
  'america-precolombina': [
    {
      section: 4,
      title: 'La viruela contada por informantes nahuas',
      text: [
        'Antes de que los españoles apareciesen sobre nosotros, primero se difundió entre nosotros una gran peste, una enfermedad general.',
        'Se difundió sobre la gente una gran destrucción. Muchos en ella murieron. Ya nadie podía andar, no más estaban acostados, tendidos en su cama.',
        'Y muchos murieron solamente de hambre: hubo muertos por el hambre, ya nadie tenía cuidado de nadie, nadie de otros se preocupaba.',
      ].join('\n\n'),
      source: 'Códice Florentino, libro XII, recogido por fray Bernardino de Sahagún hacia 1577.',
      note: 'Versión propia a partir del náhuatl. Sahagún recogió el testimonio de ancianos que habían vivido la conquista.',
      question: 'El texto sitúa la epidemia antes del asalto final a Tenochtitlan. ¿Cómo cambia eso el relato habitual de la conquista? Fíjate también en la última frase: no describe solo la enfermedad.',
    },
  ],
}
