import type { TopicModule } from '../types'

export const ilustracion: TopicModule = {
  topic: {
    id: 'ilustracion',
    era: 'Edad Moderna',
    title: 'La Ilustración',
    years: '1689–1789',
    country: 'Europa',
    description: 'Una práctica de crítica pública más que un sistema de ideas: cafés, enciclopedias, tolerancia y sus propios puntos ciegos.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '✷',
    color: 'gold',
    summary:
      'Cuando Kant respondió en 1784 a la pregunta de qué es la Ilustración, no describió una doctrina sino una operación: salir de la minoría de edad de la que uno mismo es culpable, atreverse a servirse del propio entendimiento y hacerlo en público. Esa definición ayuda porque el siglo XVIII no comparte un cuerpo de tesis. Voltaire admiraba a los monarcas fuertes y Rousseau desconfiaba de ellos; unos eran deístas, otros ateos y muchos cristianos convencidos; la economía política escocesa y la fisiocracia francesa se contradicen. Lo que sí comparten es una práctica: someter a examen público las autoridades heredadas, con la confianza de que la discusión impresa produce mejores decisiones que la costumbre. De ahí salió el vocabulario político con el que Occidente sigue discutiendo, incluidos los argumentos con los que hoy se critican los límites de la propia Ilustración.',
    keyDates: [
      { date: '1689', event: 'Locke publica la *Carta sobre la tolerancia* y el *Segundo tratado sobre el gobierno civil*.' },
      { date: '1721', event: '*Cartas persas* de Montesquieu: la mirada extranjera como técnica de crítica.' },
      { date: '1726–1740', event: 'Feijoo publica el *Teatro crítico universal* y abre la Ilustración española.' },
      { date: '1734', event: 'Voltaire difunde en las *Cartas filosóficas* el modelo inglés de tolerancia y libertad.' },
      { date: '1748', event: '*Del espíritu de las leyes*: separación de poderes y relativismo institucional.' },
      { date: '1751–1772', event: 'Se publica la *Encyclopédie* de Diderot y DAlembert en 28 volúmenes.' },
      { date: '1755', event: 'El terremoto de Lisboa desata el debate sobre la providencia y el mal.' },
      { date: '1762', event: '*Contrato social* y *Emilio*; ejecución de Jean Calas y campaña de Voltaire.' },
      { date: '1764', event: 'Beccaria publica *De los delitos y las penas* contra la tortura y la pena capital.' },
      { date: '1776', event: '*La riqueza de las naciones* y la Declaración de Independencia de los Estados Unidos.' },
      { date: '1784', event: 'Kant responde: *sapere aude*, atrévete a saber.' },
      { date: '1791–1792', event: 'Olympe de Gouges y Mary Wollstonecraft reclaman los derechos negados a las mujeres.' },
    ],
    sections: [
      {
        title: 'Una práctica, no un sistema',
        body: [
          'La respuesta de Kant en la *Berlinische Monatsschrift* define la Ilustración como salida de una minoría de edad autoculpable: no falta entendimiento, falta decisión para usarlo sin la guía de otro. La divisa es *sapere aude*. Y añade una precisión decisiva: lo que hace falta para ilustrarse es libertad para hacer uso público de la razón en todos los asuntos, aunque en el uso privado, es decir, en el ejercicio de un cargo, se deba obediencia.',
          'Esa distinción explica por qué la Ilustración pudo convivir con monarquías absolutas. El funcionario obedece la orden y el ciudadano que escribe la critica. Kant llama a su tiempo época de ilustración, no época ilustrada: un proceso en marcha, no un estado alcanzado.',
          'Definirla como práctica evita el error de buscar un canon coherente. Los ilustrados discrepan en casi todo: Voltaire desprecia la democracia y Rousseau la funda; Hume es escéptico y Condorcet cree en el progreso indefinido; Smith defiende el mercado y los fisiócratas la primacía agraria. Lo compartido es el gesto de someter a examen público la autoridad heredada, sea la del texto sagrado, la del privilegio o la de la costumbre.',
          'Ese gesto tiene condiciones materiales. Sin imprenta barata, sin correo regular, sin cafés, sin academias y sin un público capaz de pagar libros, la crítica no circula. Por eso la historiografía reciente estudia menos las ideas en abstracto y más los soportes por los que viajaron.',
        ].join('\n\n'),
        callout:
          'Kant llama a su tiempo «época de ilustración», no «época ilustrada». La diferencia es la tesis entera: un proceso abierto, no un resultado.',
      },
      {
        title: 'La esfera pública y sus lugares',
        body: [
          'Jürgen Habermas propuso en 1962 el concepto que organiza hoy la investigación: entre el Estado y la esfera privada se formó en el siglo XVIII una esfera pública burguesa, un espacio donde particulares razonan sobre asuntos comunes y donde, al menos como principio, vale el mejor argumento y no el rango de quien lo formula.',
          'Sus lugares son concretos. Los cafés londinenses, donde por un penique se entraba y se leían los periódicos; los salones parisinos, dirigidos por mujeres que seleccionaban invitados y moderaban la conversación, y cuyo papel Dena Goodman situó en el centro de la sociabilidad ilustrada frente a las lecturas que los tratan como decorado; las logias masónicas, con su igualdad ritual entre nobles y burgueses; las sociedades económicas de amigos del país en España, dedicadas a la agricultura, la enseñanza técnica y la estadística; las academias provinciales francesas con sus concursos de memorias.',
          'Cambió también la manera de leer. Rolf Engelsing habló de una revolución de la lectura: del modo intensivo, releer unos pocos libros venerados, al extensivo, consumir muchos títulos distintos y desecharlos. Crecieron los periódicos, las gacetas y los gabinetes de lectura por suscripción.',
          'La esfera pública tenía fronteras y conviene no idealizarla. Excluía a los analfabetos, que eran mayoría, y a las mujeres de la representación política; el propio Habermas ha admitido que su modelo describía mejor una minoría culta que un espacio abierto. Aun así, el hecho decisivo es institucional: por primera vez existía una instancia de crítica que no dependía de la corte ni de la Iglesia y a la que los gobiernos empezaron a tener que responder.',
        ].join('\n\n'),
      },
      {
        title: 'La Enciclopedia y el negocio de las luces',
        body: [
          'La *Encyclopédie ou Dictionnaire raisonné des sciences, des arts et des métiers*, dirigida por Denis Diderot y Jean le Rond dAlembert entre 1751 y 1772, reunió 28 volúmenes con más de setenta mil artículos y once tomos de láminas. Su novedad no fue acumular información, sino ordenarla: el discurso preliminar clasifica el saber según las facultades humanas —memoria, razón, imaginación— y no según la jerarquía teológica, y el sistema de reenvíos permitía decir en un artículo inocuo lo que no podía decirse en otro vigilado.',
          'La dignificación de los oficios mecánicos es igual de significativa. Las láminas describen minuciosamente talleres, herramientas y procesos, y varios artículos sostienen que el conocimiento de los artesanos merece el mismo respeto que el de los eruditos. Es una operación cultural con consecuencias sociales.',
          'Robert Darnton estudió en 1979 la empresa desde la contabilidad y los archivos de los editores. La *Encyclopédie* fue un gran negocio, atravesado por privilegios revocados, ediciones en cuarto y octavo más baratas, contrabando desde Neuchâtel, alianzas con censores tolerantes y suscriptores que incluían a clérigos y a funcionarios reales. La censura del Antiguo Régimen no era un muro: era un sistema poroso con el que se negociaba.',
          'Darnton mostró también la otra cara. Junto a los grandes nombres había un submundo de escritores fracasados que vivían de panfletos, libelos contra la corte y pornografía política, los *livres philosophiques* que los libreros clandestinos agrupaban en una misma categoría. Ese material desprestigió a la monarquía entre el público mucho más que los tratados de teoría política.',
        ].join('\n\n'),
        callout:
          'En los catálogos clandestinos, «libros filosóficos» designaba a la vez a Rousseau, a los libelos contra la corte y a la pornografía. La categoría es del propio siglo XVIII, no un invento del historiador.',
      },
      {
        title: 'Política, derecho y economía',
        body: [
          'Locke había fijado en 1689 dos piezas que el siglo desarrollará: el poder político nace del consentimiento y existe para proteger vida, libertad y hacienda, de modo que su abuso legitima la resistencia; y la coacción no puede producir fe sincera, por lo que el magistrado debe abstenerse en materia religiosa. Su tolerancia excluía a ateos y a católicos, un límite que sus continentales ampliarán.',
          'Montesquieu introdujo en 1748 dos ideas duraderas. La primera es comparativa: las leyes deben adecuarse al clima, la extensión, la religión y las costumbres de cada pueblo, lo que relativiza toda pretensión de modelo único. La segunda es institucional: para que no se abuse del poder hay que disponerlo de modo que el poder frene al poder. Su lectura de la constitución inglesa era en parte imaginaria y aun así fundó el constitucionalismo moderno.',
          'Rousseau rompió con el optimismo comercial de sus contemporáneos. En el *Discurso sobre la desigualdad* de 1755 sostuvo que la propiedad y la sociedad civil corrompieron a un ser humano originalmente no violento, y en el *Contrato social* de 1762 propuso una salida: solo es legítima la ley que uno se da a sí mismo como miembro de un cuerpo político, y la soberanía reside en una voluntad general inalienable e indelegable. De ahí procede tanto la democracia moderna como la sospecha, formulada ya en el siglo XX, de que la voluntad general puede usarse para silenciar a la minoría.',
          'La reforma penal fue el terreno donde la Ilustración obtuvo victorias más rápidas. Cesare Beccaria argumentó en 1764 que la pena debe ser proporcionada, pública, pronta y necesaria, que la tortura produce confesiones falsas y castiga antes de juzgar, y que la eficacia disuasoria depende de la certeza del castigo y no de su crueldad. Varios Estados abolieron el tormento en las dos décadas siguientes.',
          'En economía convivieron dos programas. Los fisiócratas franceses situaban en la agricultura la única fuente de producto neto y reclamaban libertad de circulación de granos; Adam Smith publicó en 1776 un análisis de la división del trabajo, del mercado y de los precios que fundó la economía política y que incluye, junto a la famosa metáfora de la mano invisible, advertencias severas contra la colusión de los comerciantes y contra los efectos embrutecedores del trabajo repetitivo.',
        ].join('\n\n'),
      },
      {
        title: 'Los límites: esclavitud, mujeres y colonias',
        body: [
          'La misma cultura que proclamó la igualdad natural sostuvo un sistema esclavista atlántico en expansión. El *Código Negro* francés seguía vigente y los beneficios de Saint-Domingue eran centrales para la economía de los puertos. Louis Sala-Molins ha reprochado a la Ilustración francesa la distancia entre su retórica y su silencio práctico; frente a él se recuerda que la *Historia de las dos Indias* de Raynal y Diderot, superventas europeo, denunció la conquista y la esclavitud con dureza y llegó a anunciar un vengador negro, texto que circuló entre los revolucionarios haitianos.',
          'La cuestión racial tiene una implicación más incómoda. Hume añadió en 1753 una nota que declaraba a los negros naturalmente inferiores; Kant escribió textos sobre las razas humanas que sostienen jerarquías; Buffon y Linneo fijaron clasificaciones que la ciencia del XIX endureció. El racismo moderno no es un residuo premoderno: se formula con el vocabulario de la historia natural ilustrada.',
          'Con las mujeres ocurre algo parecido. Poullain de la Barre había argumentado ya en 1673 que el espíritu no tiene sexo; los salones daban a algunas mujeres un papel intelectual real; y sin embargo el *Emilio* de Rousseau prescribe para Sofía una educación subordinada, y las asambleas revolucionarias negarán derechos políticos a las ciudadanas. Olympe de Gouges publicó en 1791 una *Declaración de los derechos de la mujer y de la ciudadana* calcada de la de 1789 y fue guillotinada en 1793; Mary Wollstonecraft respondió en 1792 con una *Vindicación de los derechos de la mujer* que reclamaba, sobre todo, educación igual.',
          'Estos límites alimentan la crítica más influyente del siglo XX. Max Horkheimer y Theodor Adorno escribieron en 1944 que la razón ilustrada, al convertirse en dominio instrumental de la naturaleza, se vuelve contra los seres humanos y prepara la barbarie moderna. La réplica habitual es que las herramientas para denunciar la esclavitud, el patriarcado y el colonialismo son en buena medida ilustradas, y que abandonar la crítica pública no protege a nadie.',
        ].join('\n\n'),
      },
      {
        title: 'Despotismo ilustrado y balance historiográfico',
        body: [
          'Varios monarcas adoptaron el vocabulario reformista sin ceder soberanía: Federico II de Prusia, Catalina II de Rusia, José II en los territorios habsbúrgicos y Carlos III en España. Sus políticas comparten un aire de familia: códigos legales, tolerancia limitada, desamortización parcial de bienes eclesiásticos, expulsión de los jesuitas, obras públicas, reforma agraria discutida, fomento de la enseñanza técnica y regalismo, es decir, control del Estado sobre la Iglesia nacional.',
          'La frase «todo para el pueblo, pero sin el pueblo» es una síntesis posterior, no una cita, y describe bien el límite: ninguna de estas reformas admitía participación política. José II fue además el caso extremo de reforma impuesta desde arriba y sin apoyos, y buena parte de sus decretos hubo de retirarse antes de su muerte en 1790.',
          'La historiografía ha ido desplazando el foco. Ernst Cassirer describió en 1932 una filosofía unitaria; Franco Venturi estudió las redes de reformadores europeos; Daniel Roche y Robert Darnton pasaron a las prácticas, los oficios del libro y los públicos; Roy Porter y Mikuláš Teich propusieron en 1981 hablar de Ilustraciones en plural, con contextos nacionales muy distintos, y David Sorkin ha documentado una Ilustración religiosa, católica, protestante y judía, que fue mayoritaria en muchos territorios.',
          'Jonathan Israel ha defendido desde 2001 la tesis opuesta a esa dispersión: existió un núcleo radical de origen spinozista —igualdad, democracia, materialismo, rechazo de la revelación— que fue el auténtico motor del cambio, frente a una Ilustración moderada que buscaba conciliar razón y religión. Se le objeta que reduce el proceso a la circulación de textos filosóficos y que desatiende las prácticas sociales.',
          'Queda por último la relación con 1789. Daniel Mornet reconstruyó en 1933 los orígenes intelectuales de la Revolución; Roger Chartier invirtió la fórmula en 1990 al sostener que fue la Revolución la que creó a la Ilustración como su propio origen, seleccionando y canonizando autores para legitimarse. La respuesta razonable es que los libros no hacen revoluciones por sí solos, pero sí crean el lenguaje en el que una crisis fiscal y política puede formularse como problema de soberanía y de derechos.',
        ].join('\n\n'),
        callout:
          'Chartier invierte la pregunta: quizá no fue la Ilustración la que hizo la Revolución, sino la Revolución la que se fabricó una Ilustración como antepasado legitimador.',
      },
    ],
    concepts: [
      { term: 'Sapere aude', definition: 'Atrévete a saber. Divisa con la que Kant resume en 1784 la salida de la minoría de edad autoculpable.' },
      { term: 'Uso público de la razón', definition: 'Distinción kantiana: el funcionario obedece en su cargo, pero como autor ante un público puede criticar sin límite.' },
      { term: 'Esfera pública', definition: 'Concepto de Habermas: espacio entre Estado y vida privada donde particulares razonan sobre asuntos comunes y debería valer el mejor argumento.' },
      { term: 'República de las letras', definition: 'Red europea de correspondencia, reseñas y academias que funcionaba por encima de fronteras y confesiones.' },
      { term: 'Revolución de la lectura', definition: 'Tesis de Engelsing: paso de la lectura intensiva de pocos libros venerados a la extensiva de muchos títulos.' },
      { term: 'Reenvío enciclopédico', definition: 'Recurso de la *Encyclopédie*: decir en un artículo vigilado lo que se desarrolla en otro aparentemente inocuo.' },
      { term: 'Livres philosophiques', definition: 'Categoría de los libreros clandestinos que agrupaba filosofía prohibida, libelos contra la corte y pornografía política.' },
      { term: 'Tolerancia', definition: 'Renuncia del poder civil a imponer creencias. En Locke excluía aún a ateos y católicos; el continente amplió el alcance.' },
      { term: 'Separación de poderes', definition: 'Principio de Montesquieu: disponer las instituciones de modo que el poder frene al poder para evitar el abuso.' },
      { term: 'Voluntad general', definition: 'En Rousseau, soberanía inalienable del cuerpo político. Fundamento de la democracia moderna y foco de la crítica sobre la minoría.' },
      { term: 'Fisiocracia', definition: 'Escuela francesa que sitúa en la agricultura la única fuente de producto neto y reclama libre circulación de granos.' },
      { term: 'Regalismo', definition: 'Control del Estado sobre la Iglesia nacional: nombramientos, rentas y jurisdicción. Pieza central del reformismo borbónico.' },
      { term: 'Despotismo ilustrado', definition: 'Reformas administrativas, jurídicas y económicas impulsadas desde arriba sin ceder soberanía ni admitir participación política.' },
      { term: 'Ilustración radical', definition: 'Categoría de Jonathan Israel: corriente de raíz spinozista partidaria de igualdad, democracia y rechazo de la revelación.' },
    ],
    debates: [
      {
        question: '¿Una Ilustración o muchas?',
        positions: [
          {
            school: 'Unidad filosófica (Cassirer, 1932)',
            argument:
              'Bajo la diversidad de autores hay una misma forma de pensar: análisis, crítica de la autoridad, confianza en la razón y en la reforma.',
          },
          {
            school: 'Ilustraciones en plural (Porter y Teich, 1981; Sorkin, 2008)',
            argument:
              'Los contextos nacionales son decisivos y hubo una Ilustración religiosa numéricamente mayoritaria: católica, protestante y judía, compatible con la fe.',
          },
          {
            school: 'Núcleo radical (Jonathan Israel, 2001)',
            argument:
              'Lo que produjo el cambio fue una corriente minoritaria de origen spinozista —igualdad, democracia, materialismo— frente a una Ilustración moderada conciliadora.',
          },
        ],
        state:
          'Domina la lectura plural y contextual. La tesis de Israel se valora por recuperar el pensamiento radical y se le objeta que reduce el proceso a la circulación de textos filosóficos.',
      },
      {
        question: '¿Causó la Ilustración la Revolución francesa?',
        positions: [
          {
            school: 'Orígenes intelectuales (Mornet, 1933)',
            argument:
              'Décadas de crítica difundida por libros, academias, logias y prensa erosionaron la legitimidad del Antiguo Régimen y prepararon el vocabulario de 1789.',
          },
          {
            school: 'Inversión (Chartier, 1990)',
            argument:
              'Fue la Revolución la que construyó a la Ilustración como su origen, seleccionando y canonizando autores para legitimarse retrospectivamente.',
          },
          {
            school: 'Circulación clandestina (Darnton)',
            argument:
              'Lo que desacreditó a la monarquía ante el público no fueron los tratados, sino los libelos, las crónicas escandalosas y la pornografía política de Grub Street.',
          },
        ],
        state:
          'Se rechaza la causalidad directa. La formulación aceptada es que los textos no hacen revoluciones, pero crean el lenguaje en el que una crisis fiscal puede plantearse como problema de soberanía y de derechos.',
      },
      {
        question: '¿Emancipación o dominación?',
        positions: [
          {
            school: 'Dialéctica de la Ilustración (Horkheimer y Adorno, 1944)',
            argument:
              'La razón que domina la naturaleza acaba dominando también a los seres humanos: el proyecto ilustrado contiene el germen de la barbarie técnica del siglo XX.',
          },
          {
            school: 'Crítica poscolonial y feminista',
            argument:
              'La igualdad proclamada convivió con la esclavitud atlántica, con clasificaciones raciales de origen naturalista y con la exclusión política de las mujeres.',
          },
          {
            school: 'Defensa crítica (Israel, Pagden, Outram)',
            argument:
              'Los instrumentos con los que hoy se denuncian esos límites —derechos universales, crítica pública, igualdad natural— son ilustrados; el remedio no es abandonarlos sino aplicarlos.',
          },
        ],
        state:
          'La historiografía documenta a la vez la potencia emancipadora y los puntos ciegos, y evita tanto la celebración como el ajuste de cuentas. El racismo científico se estudia hoy como producto del siglo XVIII, no como residuo anterior.',
      },
    ],
    sources: [
      { author: 'John Locke', title: 'Carta sobre la tolerancia', year: '1689', kind: 'primaria', note: 'La coacción no produce fe sincera. Excluye aún a ateos y a católicos.' },
      { author: 'Montesquieu', title: 'Cartas persas', year: '1721', kind: 'primaria', note: 'La mirada del extranjero ficticio como técnica para volver extraña la propia sociedad.' },
      { author: 'Benito Jerónimo Feijoo', title: 'Teatro crítico universal', year: '1726-1740', kind: 'primaria', note: 'Crítica de supersticiones y falsos milagros desde dentro del catolicismo español.' },
      { author: 'Voltaire', title: 'Cartas filosóficas', year: '1734', kind: 'primaria', note: 'Inglaterra como espejo: tolerancia, comercio, Newton y libertad de prensa.' },
      { author: 'Montesquieu', title: 'Del espíritu de las leyes', year: '1748', kind: 'primaria', note: 'Relativismo institucional y separación de poderes. Su Inglaterra es en parte imaginaria.' },
      { author: 'Diderot y dAlembert', title: 'Encyclopédie', year: '1751-1772', kind: 'primaria', note: '28 volúmenes. Clasificación del saber por facultades humanas y dignificación de los oficios.' },
      { author: 'Jean-Jacques Rousseau', title: 'Discurso sobre el origen de la desigualdad', year: '1755', kind: 'primaria', note: 'La propiedad y la sociedad civil como origen de la corrupción y de la desigualdad.' },
      { author: 'Jean-Jacques Rousseau', title: 'El contrato social', year: '1762', kind: 'primaria', note: 'Soberanía de la voluntad general, inalienable e indelegable.' },
      { author: 'Voltaire', title: 'Tratado sobre la tolerancia', year: '1763', kind: 'primaria', note: 'Escrito tras la ejecución de Jean Calas. Campaña pública que logró su rehabilitación.' },
      { author: 'Cesare Beccaria', title: 'De los delitos y las penas', year: '1764', kind: 'primaria', note: 'Contra la tortura y la pena capital: importa la certeza del castigo, no su crueldad.' },
      { author: 'Guillaume-Thomas Raynal y Denis Diderot', title: 'Historia de las dos Indias', year: '1770-1780', kind: 'primaria', note: 'Superventas europeo contra la conquista y la esclavitud. Anuncia un vengador negro.' },
      { author: 'Adam Smith', title: 'La riqueza de las naciones', year: '1776', kind: 'primaria', note: 'División del trabajo y mercado, con advertencias sobre la colusión mercantil y el trabajo embrutecedor.' },
      { author: 'Immanuel Kant', title: 'Respuesta a la pregunta: ¿qué es la Ilustración?', year: '1784', kind: 'primaria', note: 'Minoría de edad autoculpable, *sapere aude* y distinción entre uso público y privado de la razón.' },
      { author: 'Olympe de Gouges', title: 'Declaración de los derechos de la mujer y de la ciudadana', year: '1791', kind: 'primaria', note: 'Calco deliberado del texto de 1789. Su autora fue guillotinada en 1793.' },
      { author: 'Mary Wollstonecraft', title: 'Vindicación de los derechos de la mujer', year: '1792', kind: 'primaria', note: 'Respuesta a Rousseau: sin educación igual no hay virtud ni ciudadanía posibles.' },
      { author: 'Gaspar Melchor de Jovellanos', title: 'Informe sobre la ley agraria', year: '1795', kind: 'primaria', note: 'Diagnóstico ilustrado de los obstáculos jurídicos a la productividad agraria española.' },
      { author: 'Ernst Cassirer', title: 'La filosofía de la Ilustración', year: '1932', kind: 'estudio', note: 'Lectura unitaria: una misma forma de pensar bajo la diversidad de autores.' },
      { author: 'Daniel Mornet', title: 'Los orígenes intelectuales de la Revolución francesa', year: '1933', kind: 'estudio', note: 'Reconstruye la difusión de libros y sociabilidades antes de 1789.' },
      { author: 'Max Horkheimer y Theodor Adorno', title: 'Dialéctica de la Ilustración', year: '1944', kind: 'estudio', note: 'La razón instrumental como dominio que se vuelve contra los seres humanos.' },
      { author: 'Jürgen Habermas', title: 'Historia y crítica de la opinión pública', year: '1962', kind: 'estudio', note: 'Formula el concepto de esfera pública burguesa y su declive posterior.' },
      { author: 'Robert Darnton', title: 'The Business of Enlightenment', year: '1979', kind: 'estudio', note: 'La *Encyclopédie* como empresa editorial: costes, contrabando, suscriptores y censura negociada.' },
      { author: 'Roy Porter y Mikuláš Teich', title: 'The Enlightenment in National Context', year: '1981', kind: 'estudio', note: 'Propone hablar de Ilustraciones en plural según contextos nacionales.' },
      { author: 'Dena Goodman', title: 'The Republic of Letters', year: '1994', kind: 'estudio', note: 'Sitúa a las anfitrionas de salón en el centro de la sociabilidad ilustrada, no en su decorado.' },
      { author: 'Jonathan Israel', title: 'Radical Enlightenment', year: '2001', kind: 'estudio', note: 'Núcleo spinozista como motor del cambio frente a la Ilustración moderada.' },
      { author: 'David Sorkin', title: 'The Religious Enlightenment', year: '2008', kind: 'estudio', note: 'Documenta la Ilustración católica, protestante y judía compatible con la fe.' },
    ],
  },
  questions: [
    {
      id: 'ilustracion-1', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Cómo define Kant la Ilustración en 1784?',
      options: [
        'Como el triunfo definitivo de la razón sobre la superstición',
        'Como la salida del ser humano de una minoría de edad de la que él mismo es culpable',
        'Como el conjunto de doctrinas contenidas en la *Encyclopédie*',
        'Como la sustitución de la monarquía por la república',
      ],
      answer: 1,
      explanation: 'No falta entendimiento, falta decisión para usarlo sin guía ajena. Y Kant llama a su tiempo época de ilustración, no época ilustrada.',
    },
    {
      id: 'ilustracion-2', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué distingue Kant entre uso público y uso privado de la razón?',
      options: [
        'El uso público se hace en la corte y el privado en la universidad',
        'El uso público es el del autor ante un público lector, donde la crítica no tiene límite; el privado es el del funcionario en su cargo, donde debe obediencia',
        'El uso público corresponde a los ilustrados y el privado a los eclesiásticos',
        'El uso público requiere permiso del censor y el privado no',
      ],
      answer: 1,
      explanation: 'Esa distinción explica cómo la Ilustración pudo convivir con monarquías absolutas: se obedece la orden y se critica la norma.',
    },
    {
      id: 'ilustracion-3', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué designa la «esfera pública» de Habermas?',
      options: [
        'El conjunto de instituciones estatales encargadas de la instrucción',
        'Un espacio entre el Estado y la vida privada donde particulares razonan sobre asuntos comunes y, en principio, vale el mejor argumento',
        'La red de academias reales financiadas por los monarcas',
        'El mercado del libro clandestino',
      ],
      answer: 1,
      explanation: 'Sus lugares son cafés, salones, logias, sociedades económicas y prensa. Excluía a los analfabetos y a las mujeres de la representación política.',
    },
    {
      id: 'ilustracion-4', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Cuál fue la novedad organizativa de la *Encyclopédie*?',
      options: [
        'Ser la primera obra impresa con láminas grabadas',
        'Clasificar el saber según las facultades humanas —memoria, razón, imaginación— y usar reenvíos para sortear la censura',
        'Publicarse íntegramente sin privilegio real',
        'Estar escrita por un solo autor',
      ],
      answer: 1,
      explanation: 'La clasificación no es teológica. Y el artículo inocuo remitía al que decía lo que no podía decirse en el vigilado.',
    },
    {
      id: 'ilustracion-5', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué mostró Robert Darnton al estudiar la *Encyclopédie* desde los archivos de sus editores?',
      options: [
        'Que fue un fracaso comercial sostenido por mecenas',
        'Que fue un gran negocio atravesado por ediciones baratas, contrabando, censores tolerantes y suscriptores clérigos y funcionarios',
        'Que la mayoría de los artículos eran plagios de obras inglesas',
        'Que se distribuyó solo en París',
      ],
      answer: 1,
      explanation: 'La censura del Antiguo Régimen no era un muro, sino un sistema poroso con el que se negociaba.',
    },
    {
      id: 'ilustracion-6', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué agrupaban los libreros clandestinos bajo la etiqueta *livres philosophiques*?',
      options: [
        'Solo los tratados de metafísica prohibidos por la Sorbona',
        'Filosofía prohibida, libelos contra la corte y pornografía política, en una misma categoría comercial',
        'Las obras de autores extranjeros no traducidas',
        'Los manuales de las academias provinciales',
      ],
      answer: 1,
      explanation: 'La categoría es del propio siglo XVIII. Para Darnton, ese material desprestigió a la monarquía más que los tratados de teoría política.',
    },
    {
      id: 'ilustracion-7', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué dos ideas duraderas aporta *Del espíritu de las leyes*?',
      options: [
        'La voluntad general y el derecho de resistencia',
        'La adecuación de las leyes a las condiciones de cada pueblo y la disposición institucional para que el poder frene al poder',
        'La abolición de la tortura y la proporcionalidad de las penas',
        'La libre circulación de granos y el producto neto agrario',
      ],
      answer: 1,
      explanation: 'Su lectura de la constitución inglesa era en parte imaginaria y, aun así, fundó el constitucionalismo moderno.',
    },
    {
      id: 'ilustracion-8', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: 'En el *Contrato social*, ¿dónde reside la soberanía?',
      options: [
        'En el monarca, como representante del pueblo',
        'En la voluntad general del cuerpo político, inalienable e indelegable',
        'En la asamblea de propietarios',
        'En la constitución escrita',
      ],
      answer: 1,
      explanation: 'De ahí procede la democracia moderna y también la sospecha, formulada en el siglo XX, de que la voluntad general puede silenciar a la minoría.',
    },
    {
      id: 'ilustracion-9', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Cuál es el argumento central de Beccaria contra la tortura?',
      options: [
        'Que es contraria a la caridad cristiana',
        'Que produce confesiones falsas y castiga antes de juzgar; la disuasión depende de la certeza del castigo, no de su crueldad',
        'Que resulta demasiado costosa para el erario',
        'Que solo debería aplicarse a los delitos contra el Estado',
      ],
      answer: 1,
      explanation: 'Varios Estados abolieron el tormento en las dos décadas siguientes. Fue la victoria más rápida de la Ilustración.',
    },
    {
      id: 'ilustracion-10', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué se suele olvidar de *La riqueza de las naciones* de Adam Smith?',
      options: [
        'Que defiende el monopolio de las compañías privilegiadas',
        'Que advierte contra la colusión de los comerciantes y contra los efectos embrutecedores del trabajo repetitivo',
        'Que rechaza la división del trabajo',
        'Que fue escrita antes que la obra de los fisiócratas',
      ],
      answer: 1,
      explanation: 'La metáfora de la mano invisible aparece una vez y convive con una crítica explícita a los intereses de los mercaderes.',
    },
    {
      id: 'ilustracion-11', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué texto ilustrado denunció la conquista y la esclavitud y llegó a anunciar un vengador negro?',
      options: [
        'El *Emilio* de Rousseau',
        'La *Historia de las dos Indias* de Raynal y Diderot',
        'El *Tratado sobre la tolerancia* de Voltaire',
        'El *Informe sobre la ley agraria* de Jovellanos',
      ],
      answer: 1,
      explanation: 'Fue un superventas europeo y circuló entre los revolucionarios haitianos. Matiza, sin anularlo, el reproche de Sala-Molins a la Ilustración francesa.',
    },
    {
      id: 'ilustracion-12', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Por qué se sostiene que el racismo moderno no es un residuo premoderno?',
      options: [
        'Porque no existió antes del siglo XIX',
        'Porque se formula con el vocabulario clasificatorio de la historia natural ilustrada, en Linneo, Buffon y en textos de Hume y Kant',
        'Porque lo inventaron los abolicionistas para combatirlo',
        'Porque procede exclusivamente de la teología medieval',
      ],
      answer: 1,
      explanation: 'La jerarquía racial se articula con lenguaje científico, no con lenguaje bíblico. Es uno de los puntos ciegos mejor documentados del siglo.',
    },
    {
      id: 'ilustracion-13', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué reclamaba sobre todo Mary Wollstonecraft en 1792?',
      options: [
        'El voto femenino inmediato',
        'Educación igual para las mujeres, sin la cual no hay virtud ni ciudadanía posibles',
        'La abolición del matrimonio',
        'La igualdad salarial en los oficios',
      ],
      answer: 1,
      explanation: 'Respondía al *Emilio*, que prescribía para Sofía una educación subordinada. Olympe de Gouges había calcado en 1791 la Declaración de 1789.',
    },
    {
      id: 'ilustracion-14', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Cuál es la tesis de *Dialéctica de la Ilustración* de Horkheimer y Adorno?',
      options: [
        'Que la Ilustración fue insuficientemente racional',
        'Que la razón convertida en dominio instrumental de la naturaleza acaba volviéndose contra los seres humanos',
        'Que la Ilustración fue un fenómeno exclusivamente francés',
        'Que el progreso técnico garantiza el progreso moral',
      ],
      answer: 1,
      explanation: 'Escrito en 1944. La réplica habitual: las herramientas para denunciar esclavitud, patriarcado y colonialismo son en buena medida ilustradas.',
    },
    {
      id: 'ilustracion-15', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué caracteriza al despotismo ilustrado?',
      options: [
        'La convocatoria de asambleas representativas para aprobar las reformas',
        'Reformas administrativas, jurídicas y económicas impulsadas desde arriba sin ceder soberanía ni admitir participación política',
        'La renuncia de los monarcas al control sobre la Iglesia nacional',
        'La supresión de la nobleza como estamento',
      ],
      answer: 1,
      explanation: 'Códigos, regalismo, expulsión de los jesuitas, obras públicas y enseñanza técnica. La frase «todo para el pueblo, sin el pueblo» es una síntesis posterior, no una cita.',
    },
    {
      id: 'ilustracion-16', era: 'Edad Moderna', topicId: 'ilustracion', topic: 'Ilustración',
      question: '¿Qué sostiene Roger Chartier sobre la relación entre Ilustración y Revolución francesa?',
      options: [
        'Que la Revolución fue consecuencia directa y previsible de la difusión de los libros filosóficos',
        'Que fue la Revolución la que construyó a la Ilustración como su origen, seleccionando y canonizando autores para legitimarse',
        'Que la Ilustración fue en realidad contrarrevolucionaria',
        'Que los dos procesos no tuvieron relación alguna',
      ],
      answer: 1,
      explanation: 'Invierte la tesis de Mornet. La formulación aceptada: los textos no hacen revoluciones, pero dan el lenguaje para plantear la crisis como problema de soberanía.',
    },
  ],
}
