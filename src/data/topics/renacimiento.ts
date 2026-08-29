import type { TopicModule } from '../types.ts'

export const renacimiento: TopicModule = {
  topic: {
    id: 'renacimiento',
    era: 'Edad Moderna',
    title: 'Renacimiento y Humanismo',
    years: 'c. 1350–1600',
    country: 'Europa',
    description: 'Un método filológico, un mercado del arte y un concepto historiográfico en disputa.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '✦',
    color: 'plum',
    summary:
      'Pocos periodos han sido tan mitificados. El relato heredado del siglo XIX presenta el Renacimiento como el despertar de Europa tras mil años de oscuridad: el redescubrimiento de la Antigüedad, el nacimiento del individuo y el comienzo de la modernidad. Casi ningún elemento de ese relato resiste hoy sin corrección. Lo que sí puede documentarse es más interesante que el mito: un método filológico nuevo aplicado a los textos antiguos y a los documentos de la Iglesia, un mercado del arte sostenido por ciudades muy ricas y muy inseguras, una tecnología de reproducción que multiplicó por miles la circulación del saber, y una élite muy reducida que se pensó a sí misma como restauradora de un mundo perdido y logró imponer esa autodescripción a la posteridad.',
    keyDates: [
      { date: '1341', event: 'Petrarca es coronado poeta laureado en el Capitolio de Roma.' },
      { date: '1397', event: 'Manuel Crisoloras empieza a enseñar griego en Florencia.' },
      { date: '1435', event: 'Alberti codifica la perspectiva lineal en *De pictura*.' },
      { date: '1440', event: 'Lorenzo Valla demuestra que la Donación de Constantino es una falsificación.' },
      { date: 'c. 1450', event: 'Gutenberg imprime con tipos móviles metálicos en Maguncia.' },
      { date: '1453', event: 'Caída de Constantinopla; llegan a Italia eruditos y manuscritos griegos.' },
      { date: '1462', event: 'Ficino traduce a Platón y el *Corpus hermeticum* para Cosme de Médici.' },
      { date: '1486', event: 'Pico della Mirandola escribe la *Oración sobre la dignidad del hombre*.' },
      { date: '1494', event: 'Invasión francesa de Italia: comienzan las guerras italianas.' },
      { date: '1508–1512', event: 'Miguel Ángel pinta la bóveda de la Capilla Sixtina.' },
      { date: '1516', event: 'Erasmo publica el Nuevo Testamento en griego con traducción latina nueva.' },
      { date: '1527', event: 'Saco de Roma por las tropas imperiales.' },
      { date: '1543', event: '*De revolutionibus* de Copérnico y *De humani corporis fabrica* de Vesalio.' },
      { date: '1559', event: 'Primer Índice romano de libros prohibidos: la obra completa de Erasmo entra en él.' },
      { date: '1600', event: 'Giordano Bruno es quemado en el Campo dei Fiori de Roma.' },
    ],
    sections: [
      {
        title: '«Renacimiento»: historia de una palabra',
        body: [
          'El concepto no lo inventaron los historiadores: lo inventaron los interesados. Giorgio Vasari publicó en 1550, y ampliado en 1568, las *Vidas de los más excelentes arquitectos, pintores y escultores*, donde organizó tres siglos de arte italiano como una *rinascita*: un declive tras la Antigüedad, un despertar con Cimabue y Giotto, una madurez con Masaccio y Donatello y una perfección con Miguel Ángel. Vasari escribía desde Florencia, sobre artistas casi todos toscanos y con Miguel Ángel vivo como punto de llegada. La periodización que aún manejamos nació como propaganda cultural de una ciudad y de un gremio.',
          'La palabra se convirtió en periodo histórico general en el siglo XIX. Jules Michelet tituló «La Renaissance» un volumen de su historia de Francia en 1855, y cinco años después Jacob Burckhardt publicó *La cultura del Renacimiento en Italia* (1860), el libro que fijó la imagen todavía dominante: el Estado italiano como obra de arte calculada, el descubrimiento del mundo y del hombre, el nacimiento del individuo frente a la conciencia corporativa medieval y una atmósfera paganizante y secular. Burckhardt no trabajaba con archivos, sino con textos literarios; construyó un retrato de época extraordinariamente influyente y muy poco verificable.',
          'La réplica llegó desde el medievalismo. Charles Homer Haskins tituló provocadoramente *The Renaissance of the Twelfth Century* (1927) para demostrar que las universidades, la recuperación del derecho romano, la entrada de Aristóteles a través del árabe, la poesía latina y una nueva ciencia natural son fenómenos del siglo XII, no del XV. Antes ya se hablaba del renacimiento carolingio y del otoniano. Si «renacimiento» significa recuperación deliberada de la Antigüedad, la Edad Media tuvo varios.',
          'Johan Huizinga había atacado el mismo relato desde otro ángulo en *El otoño de la Edad Media* (1919). Estudiando los mismos siglos XIV y XV en Borgoña y Francia, encontró una cultura sobremadura, obsesionada con la muerte, el ceremonial y el simbolismo caballeresco: un final, no un comienzo. Los mismos años leídos desde Flandes o desde Florencia producen dos épocas distintas, lo que dice más del observador que del periodo.',
          'La misma etiqueta «Edad Media» procede del bando humanista. Fueron ellos quienes describieron los siglos intermedios como *tenebrae* y como *media aetas*: un hueco sin valor propio entre la Antigüedad admirada y su propia obra restauradora. Los historiadores heredaron sin discutirla la periodización redactada por una de las partes en litigio.',
          'Hoy el término sobrevive como convención cronológica útil, drenado de su contenido de ruptura. Nadie sostiene ya que Europa despertara de mil años de oscuridad, y la mayoría de los especialistas subraya la continuidad de instituciones, técnicas y formas de pensar entre el siglo XIII y el XVI. Lo que sigue discutiéndose es si una categoría acuñada por sus propios protagonistas con fines de autopromoción puede funcionar como herramienta analítica o solo como etiqueta de archivo.',
        ].join('\n\n'),
        callout:
          'La expresión «Edad Media» la acuñaron los humanistas para nombrar el hueco entre la Antigüedad y ellos mismos. Seguimos usando la periodización escrita por una de las partes en litigio.',
      },
      {
        title: 'El humanismo era un método, no una filosofía',
        body: [
          'El humanismo no fue una doctrina sobre el hombre, sino un programa de estudios y una profesión. Los *studia humanitatis* comprendían cinco disciplinas concretas: gramática, retórica, poesía, historia y filosofía moral, todas basadas en la lectura directa de los autores griegos y latinos. Quedaban fuera la lógica, la filosofía natural, la metafísica, el derecho, la medicina y la teología, que siguieron enseñándose en las facultades universitarias sin apenas alteración.',
          'Paul Oskar Kristeller fue quien impuso esta definición sobria. Los humanistas, sostuvo, eran profesionales de esas disciplinas —maestros de gramática, secretarios de cancillería, cronistas de corte, editores— y no miembros de una escuela filosófica: los hubo platónicos, aristotélicos, escépticos, devotos y libertinos. Buscar una «filosofía humanista» unitaria es un error de categoría. Frente a él, Eugenio Garin defendió que el humanismo sí implicaba una concepción del hombre y de la historia, y Hans Baron formuló la tesis del humanismo cívico.',
          'La herramienta que sí distingue al humanismo es la filología. El principio *ad fontes* —ir a las fuentes— exigía leer el texto en su lengua original, en la versión manuscrita más antigua disponible y depurado de los errores acumulados por siglos de copia. Petrarca es el caso fundacional: escribía cartas a Cicerón y a Livio como si estuvieran vivos, buscaba códices en bibliotecas catedralicias y, cuando encontró en Verona en 1345 las cartas privadas de Cicerón, descubrió a un político ambicioso e inseguro que arruinó la imagen que él mismo había construido. El método puede volverse contra quien lo aplica.',
          'La demostración decisiva de su potencia la dio Lorenzo Valla en 1440. La Donación de Constantino era el documento con el que el papado justificaba su soberanía temporal sobre Roma y Occidente: en él, Constantino cedía el poder al papa Silvestre. Valla probó que era una falsificación posterior analizando su lengua. El texto usa vocabulario inexistente en el siglo IV, emplea términos como *satrapa* que no pertenecen a la administración romana, comete errores sobre instituciones de la época y escribe un latín tardío imposible en la cancillería constantiniana. Nació así la crítica textual moderna: un documento puede fecharse por cómo está escrito, con independencia de lo que afirme.',
          'La filología tuvo consecuencias políticas inmediatas. En 1516 Erasmo publicó el *Novum Instrumentum*, primera edición impresa del Nuevo Testamento griego acompañada de una traducción latina nueva que corregía la Vulgata. Donde la Vulgata decía *poenitentiam agite* —«haced penitencia»—, el griego decía *metanoeite*, «cambiad de mentalidad», «arrepentíos». La base textual del sacramento de la penitencia quedaba en el aire, y Lutero abrió con exactamente ese argumento la primera de sus 95 tesis en 1517. Una corrección de traducción se convirtió en una fractura religiosa.',
          'En la península ibérica el mismo impulso produjo la *Gramática de la lengua castellana* de Nebrija (1492), primera gramática de una lengua romance, y la Biblia Políglota Complutense (1514-1517), promovida por el cardenal Cisneros, que imprimió en columnas paralelas los textos hebreo, arameo, griego y latino. Ese programa se cerró con rapidez: el Índice de 1559 prohibió la obra completa de Erasmo, y el biblismo humanista quedó bajo sospecha permanente en España e Italia.',
        ].join('\n\n'),
        callout:
          'La refutación de Valla acabó incluida en el Índice de libros prohibidos. Su método, en cambio, se volvió imprescindible para la propia Iglesia: sin crítica textual no hay edición fiable de las Escrituras ni de los concilios.',
      },
      {
        title: 'Ciudades, guerra y mecenazgo: quién pagaba',
        body: [
          'Italia no era un Estado, y esa fragmentación explica buena parte del fenómeno. Cinco potencias —Venecia, Milán, Florencia, los Estados Pontificios y Nápoles— más una constelación de señoríos menores competían entre sí, y tras la Paz de Lodi (1454) mantuvieron durante cuarenta años un equilibrio inestable basado en la diplomacia permanente y en ejércitos mercenarios mandados por condotieros. Las repúblicas comunales fueron derivando hacia señoríos personales: los Médicis gobernaron Florencia de hecho desde 1434 sin ocupar cargo formal, los Sforza tomaron Milán en 1450, los Montefeltro hicieron de Urbino una corte con el dinero de la guerra.',
          'El dinero venía de la lana y la seda florentinas, de la banca —el banco Médicis manejaba las cuentas pontificias a través de una red de filiales— y del comercio veneciano con Levante, Egipto y el Imperio otomano. El otro gran pagador era el papado, que en el siglo XVI financió la nueva basílica de San Pedro y sus decoraciones con recursos ordinarios y con indulgencias predicadas por toda Europa. La cumbre artística del Renacimiento romano y el detonante de la Reforma comparten fuente de financiación.',
          'Por qué ese dinero fue a parar al arte es objeto de un debate económico clásico. Robert Lopez propuso la tesis de las «hard times»: tras la peste negra la riqueza por habitante subió, pero la rentabilidad de la inversión productiva cayó, y el capital se desplazó hacia el lujo, el prestigio y el consumo suntuario. El Renacimiento sería, en esa lectura, un síntoma de estancamiento económico. Richard Goldthwaite lo rebatió documentando lo contrario: una expansión real y sostenida de la demanda de bienes, una industria de la construcción enorme y una cultura del consumo doméstico que llenó las casas urbanas de objetos. La discusión sigue abierta y depende mucho de qué ciudad y qué décadas se midan.',
          'Michael Baxandall cambió la manera de mirar los cuadros en *Pintura y vida cotidiana en el Renacimiento* (1972). Los contratos de encargo conservados especifican el plazo de entrega, la calidad del azul de ultramar y la cantidad de oro, y con frecuencia exigen que determinadas figuras las pinte el maestro en persona y no el taller. Baxandall añadió la noción de «ojo de la época»: el público leía las pinturas con destrezas adquiridas fuera de ellas, la geometría de los mercaderes formados en escuelas de ábaco para calcular volúmenes de barriles, los repertorios de gestos de la predicación y las figuras de la danza. La pintura era una mercancía por encargo dirigida a un público entrenado, no una expresión libre.',
          'El mecenazgo era además un instrumento político. Las capillas familiares, los retablos donados y las fachadas costeadas anunciaban jerarquía en el espacio público. Julio II movilizó a Bramante, Miguel Ángel y Rafael como programa de afirmación pontificia; Isabel de Este convirtió su *studiolo* de Mantua en un encargo intelectual documentado carta a carta; Ludovico Sforza retuvo a Leonardo en Milán casi veinte años, en buena medida como ingeniero militar y organizador de fiestas.',
          'Lisa Jardine, en *Worldly Goods* (1996), y Jerry Brotton han insistido en un punto que el relato burckhardtiano ocultaba: el Renacimiento fue también una cultura de la adquisición, y sus objetos de deseo eran en gran parte orientales. Tapices flamencos, sedas, alfombras otomanas y mamelucas, papel, pigmentos y vidrio circulaban por las mismas rutas que las ideas. Mehmet II, el conquistador de Constantinopla, pidió a Venecia un retratista en 1479 y recibió a Gentile Bellini. La frontera cultural era mucho más porosa de lo que el mito de una Europa que redescubre sus raíces clásicas permite ver.',
          'El ciclo italiano se cerró por la guerra. La invasión francesa de 1494 abrió cuarenta años de conflicto entre Francia y el Imperio con Italia como campo de batalla, y el saco de Roma de 1527 dispersó a artistas y humanistas. A partir de entonces los centros se multiplicaron: Venecia, Fontainebleau, Amberes, la corte imperial, Toledo. La difusión europea del Renacimiento fue en buena medida consecuencia de una derrota.',
        ].join('\n\n'),
        callout:
          'El contrato de la *Virgen de las rocas* (1483) fija plazos, materiales y qué figuras debía pintar Leonardo de su mano. El artista solitario y libre es una construcción romántica del siglo XIX proyectada hacia atrás.',
      },
      {
        title: 'Perspectiva, anatomía y el nuevo estatuto del artista',
        body: [
          'Hacia 1413 Brunelleschi realizó en Florencia un experimento óptico con dos tablillas: pintó el Baptisterio en perspectiva, hizo un agujero en el punto de fuga y usó un espejo para que el espectador comparara imagen y edificio real. Alberti convirtió el hallazgo en método escrito en *De pictura* (1435), con la construcción de la pirámide visual y la pintura entendida como ventana. Masaccio ya lo había aplicado en la *Trinidad* de Santa Maria Novella hacia 1427. La perspectiva lineal no es un descubrimiento sobre la naturaleza, sino una convención geométrica: una manera de representar el espacio que resultó culturalmente triunfal, no la única posible.',
          'Su éxito tuvo una base social concreta. Las escuelas de ábaco formaban a los hijos de mercaderes en geometría práctica para medir mercancías y calcular capacidades, y esa alfabetización matemática hizo legible e incluso deseable la nueva pintura. Piero della Francesca escribió tanto un tratado de perspectiva como un manual de aritmética comercial: la misma cabeza para ambas cosas.',
          'La anatomía siguió un camino paralelo. La disección de cadáveres humanos, autorizada en Bolonia y Padua desde el siglo XIV, se separó lentamente del comentario de Galeno. Leonardo realizó unas treinta disecciones y dejó láminas que no llegaron a publicarse. Quien completó la ruptura fue Andrés Vesalio en *De humani corporis fabrica* (1543): corrigió a Galeno mostrando que había descrito animales y no humanos, y presentó su argumento en forma de imágenes grabadas de altísima calidad. Solo la imprenta permitía que una lámina anatómica fuese idéntica para todos los lectores, y por tanto discutible: la reproducción exacta convirtió al dibujo en prueba.',
          'El estatuto del artista cambió con ello. En 1400 el pintor era un artesano agremiado que compraba pigmentos y firmaba contratos; en 1560 Miguel Ángel tenía dos biografías publicadas en vida, correspondencia con papas y un funeral de Estado en Florencia. Alberti y Leonardo reivindicaron la pintura como actividad intelectual —el *paragone* discutía su superioridad sobre la escultura y la poesía—, y la fundación de la Accademia del Disegno en 1563, impulsada por Vasari, institucionalizó la separación entre artista y artesano. Fue una promoción de gremio conseguida, en buena parte, escribiendo la propia historia.',
          'Tras 1527 la historiografía habló durante mucho tiempo de decadencia manierista: figuras alargadas, espacios inestables, colores ácidos en Pontormo, Rosso Fiorentino o Parmigianino. Walter Friedländer primero y John Shearman después revirtieron el juicio: el manierismo no es un fallo de la norma clásica, sino un arte de la *maniera*, deliberadamente refinado y dirigido a un público de conocedores capaz de apreciar la variación sobre modelos conocidos.',
          'Conviene resistir la tentación de convertir todo esto en el arranque de la revolución científica. Copérnico publicó en 1543 un sistema heliocéntrico movido por una insatisfacción estética muy tradicional —quería recuperar el movimiento circular uniforme que Ptolomeo había abandonado— y con una precisión predictiva no superior a la del modelo anterior. La filosofía natural renacentista incluía además astrología, alquimia y magia natural sin percibir contradicción: Ficino escribió sobre talismanes planetarios, Pico integró la cábala en la apologética cristiana, Paracelso mezcló química y ocultismo. Frances Yates llegó a sostener que la tradición hermética fue el motor de la nueva ciencia; la tesis se considera exagerada, pero sirvió para desmontar la imagen de un Renacimiento racionalista avant la lettre.',
        ].join('\n\n'),
      },
      {
        title: 'La imprenta: qué cambió y qué no',
        body: [
          'Los tipos móviles no se inventaron en Europa. China los usaba desde el siglo XI con Bi Sheng y Corea imprimió con tipos metálicos el *Jikji* en 1377. La aportación específica de Gutenberg hacia 1450 fue un sistema industrial completo: un procedimiento de punzón y matriz para fundir en serie tipos metálicos idénticos y reutilizables, una aleación adecuada, una tinta grasa que se adhería al metal y una prensa adaptada del sector vinícola. Funcionó porque el alfabeto latino necesita pocos caracteres, algo que penalizaba a los sistemas de escritura asiáticos.',
          'La escala del cambio es difícil de exagerar. Antes de 1501 se imprimieron unas 30.000 ediciones distintas —los incunables—, con tiradas medias de varios centenares de ejemplares: entre ocho y veinte millones de libros según las estimaciones, más de lo que todos los copistas europeos habían producido en el milenio anterior. Hacia 1500 funcionaban prensas en unas 250 ciudades, y Venecia era la capital editorial del continente. Allí Aldo Manuzio creó el formato en octavo y el tipo cursivo, es decir, el clásico portátil y barato: un cambio de objeto tan importante como el de tecnología.',
          'Elizabeth Eisenstein defendió en *The Printing Press as an Agent of Change* (1979) que la imprenta fue el agente causal de la modernidad intelectual. Su argumento central es la fijeza: un texto impreso es idéntico en miles de copias, puede compararse edición con edición, permite acumular correcciones en lugar de acumular errores de copia y hace posible que los datos, las tablas y las láminas circulen sin degradarse. Sin esa estabilidad, sostuvo, no habría ni ciencia acumulativa ni Reforma.',
          'Adrian Johns replicó en *The Nature of the Book* (1998) que la fijeza no fue un efecto automático de la máquina. El siglo XVI y el XVII están llenos de ediciones piratas, textos mal compuestos, pies de imprenta falsificados y atribuciones fraudulentas; los propios autores se quejaban de no reconocer sus obras. La fiabilidad del libro impreso hubo que construirla socialmente, con gremios, privilegios, censura y reputaciones. El consenso actual sitúa la imprenta como condición necesaria pero no suficiente: sus efectos dependieron de instituciones, mercados y derecho.',
          'La Reforma fue el primer acontecimiento mediático de masas. Entre 1517 y 1525 circularon miles de ediciones de opúsculos en alemán, muchos de Lutero, breves, baratos e ilustrados con grabados para quien no sabía leer. Pero la imprenta no difundió solo humanismo y crítica. El *Malleus maleficarum*, manual para identificar y perseguir brujas publicado en 1487, tuvo alrededor de treinta ediciones y acompañó la fase más dura de la caza de brujas; los almanaques astrológicos y las profecías fueron géneros de gran venta. La tecnología amplificó lo que ya circulaba, en todas direcciones.',
          'La reacción llegó pronto. El primer Índice romano de libros prohibidos (1559) incluyó la obra completa de Erasmo y decenas de autores más; se generalizaron la licencia previa, el *imprimatur* y la vigilancia de las aduanas sobre los libros. En España e Italia la censura recortó la circulación de la filología bíblica y del pensamiento político durante generaciones, mientras los centros editoriales se desplazaban a Basilea, Ginebra, Amberes y más tarde Ámsterdam.',
          'Hay que evitar además exagerar el alcance social. Las estimaciones de alfabetización dan porcentajes bajos y muy desiguales: minorías urbanas masculinas de entre el diez y el treinta por ciento en las ciudades más avanzadas, cifras mucho menores en el campo y entre las mujeres. La lectura en voz alta en talleres, tabernas y plazas, y el grabado como argumento visual, extendieron el efecto mucho más allá de quienes sabían leer, pero el libro siguió siendo un objeto minoritario.',
        ].join('\n\n'),
        callout:
          'La misma tecnología multiplicó la crítica filológica y el *Malleus maleficarum*. La imprenta no racionalizó Europa: amplificó lo que ya circulaba por ella.',
      },
      {
        title: 'Quién quedó fuera',
        body: [
          'En 1977 Joan Kelly publicó un artículo con un título que reorganizó el campo: «¿Tuvieron las mujeres un Renacimiento?». Su respuesta fue que no, o no en el mismo sentido. En el paso de la sociedad feudal a los Estados y las cortes del Renacimiento, las mujeres de la nobleza perdieron funciones económicas y políticas que sí habían tenido antes; la dama del *Cortesano* de Castiglione existe para adornar la conversación del hombre; las dotes se dispararon y con ellas la reclusión de las hijas excedentes en conventos; la exigencia de castidad y obediencia se endureció. Una mujer instruida resultaba sospechosa: la elocuencia pública se consideraba incompatible con la virtud femenina.',
          'La investigación posterior ha matizado la tesis sin desactivarla. Existieron humanistas como Isotta Nogarola, Laura Cereta y Cassandra Fedele, pintoras profesionales como Sofonisba Anguissola y Lavinia Fontana, y mecenas de primer orden como Isabel de Este. La *querella de las mujeres*, abierta en el siglo XV por Christine de Pizan, produjo hacia 1600 obras como *El mérito de las mujeres* de Moderata Fonte y la réplica de Lucrezia Marinella. La conclusión hoy dominante es que la respuesta depende de la clase, la ciudad y la década, pero que la pregunta de Kelly demostró algo más general: una periodización construida sobre la experiencia de una minoría masculina no describe automáticamente a toda la sociedad.',
          'La Italia del Renacimiento tampoco era una sociedad sin esclavitud. Génova, Venecia y Florencia mantuvieron esclavitud doméstica documentada en contratos notariales, con personas tártaras, circasianas, griegas y balcánicas, y desde el siglo XV también subsaharianas. Esos años coinciden con la apertura del comercio atlántico portugués de esclavos a partir de 1444 y, tras 1492, con la encomienda y el trabajo forzado en América. La *Oración sobre la dignidad del hombre* de Pico y la controversia de Valladolid entre Sepúlveda y Las Casas (1550-1551) sobre la humanidad y los derechos de los indígenas pertenecen al mismo mundo intelectual.',
          'Las minorías religiosas europeas vivieron un endurecimiento simultáneo. Los decretos de 1492 en Castilla y Aragón y de 1497 en Portugal expulsaron o forzaron la conversión de las comunidades judías; en 1516 Venecia encerró a la suya en el barrio de las fundiciones, el *ghetto*, dando nombre a una institución que se extendió por Italia, incluida Roma en 1555. Y a la vez florecía el hebraísmo cristiano: Reuchlin defendió la conservación de los libros hebreos, Pico construyó una cábala cristiana y las prensas italianas imprimieron textos hebreos de referencia. Interés erudito por una cultura y persecución de quienes la encarnaban avanzaron juntos.',
          'Conviene recordar además la escala. Entre el ochenta y cinco y el noventa por ciento de la población europea era rural y quedaba fuera de este circuito. La revolución de los precios del siglo XVI erosionó los salarios reales, y las hambrunas y epidemias siguieron marcando la demografía. Peter Burke, en un estudio prosopográfico de unos seiscientos creadores italianos del periodo, encontró un grupo abrumadoramente urbano, masculino, concentrado en el centro-norte de Italia y procedente de familias de artesanos y mercaderes: una élite pequeña y geográficamente muy concentrada.',
          'Por último, el mito de un Renacimiento secular no resiste el recuento. La inmensa mayoría de los encargos artísticos fueron religiosos; Ficino era sacerdote; Pico murió reconciliado con Savonarola, cuya república teocrática florentina de 1494-1498 es tan producto del Renacimiento como la corte de Lorenzo de Médicis; Bruno acabó en la hoguera en 1600 y Galileo sería juzgado en 1633. El individuo moderno y pagano de Burckhardt es en gran medida una proyección del siglo XIX sobre unas fuentes escogidas.',
          'Lo que queda, retirado el mito, es sustancial: un método crítico para tratar los textos y los documentos, una tecnología que transformó la escala del saber, un régimen de imágenes basado en la perspectiva y en el grabado reproducible, y una autodescripción cultural —Europa como heredera legítima de la Antigüedad— que el continente seguiría empleando durante siglos para definirse frente a los demás.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Studia humanitatis', definition: 'Programa de cinco disciplinas —gramática, retórica, poesía, historia y filosofía moral— basado en la lectura directa de los autores antiguos.' },
      { term: 'Ad fontes', definition: 'Principio de acudir a la fuente original, en su lengua y en el manuscrito más antiguo disponible, en lugar de a comentarios y traducciones.' },
      { term: 'Filología crítica', definition: 'Método para depurar y fechar textos por su lengua y sus anacronismos. Su acta de nacimiento es la refutación de la Donación de Constantino.' },
      { term: 'Humanismo cívico', definition: 'Tesis de Hans Baron según la cual el humanismo florentino nació como ideología de la libertad republicana frente a la amenaza de Milán.' },
      { term: 'Mecenazgo', definition: 'Financiación del arte y las letras por príncipes, papas, gremios y familias. Combinaba devoción, prestigio y afirmación política.' },
      { term: 'Perspectiva lineal', definition: 'Convención geométrica que representa el espacio mediante un punto de fuga único. Codificada por Alberti en 1435 tras el experimento de Brunelleschi.' },
      { term: 'Ojo de la época', definition: 'Concepto de Baxandall: destrezas visuales adquiridas fuera de la pintura —geometría mercantil, gesto predicatorio, danza— con las que el público leía las imágenes.' },
      { term: 'Neoplatonismo florentino', definition: 'Corriente impulsada por Ficino en torno a los Médicis, que tradujo a Platón y el *Corpus hermeticum* y unió filosofía, magia natural y teología.' },
      { term: 'Incunable', definition: 'Libro impreso antes de 1501. Se conservan unas 30.000 ediciones distintas.' },
      { term: 'Signoria', definition: 'Régimen de poder personal que sustituyó a las repúblicas comunales italianas. Los Médicis lo ejercieron en Florencia sin cargo formal desde 1434.' },
      { term: 'Condotiero', definition: 'Jefe mercenario contratado por un Estado italiano. Algunos, como los Montefeltro de Urbino, convirtieron el botín en corte humanista.' },
      { term: 'Manierismo', definition: 'Arte posterior a 1527 basado en la variación refinada sobre modelos clásicos. La historiografía dejó de leerlo como decadencia.' },
      { term: 'Querella de las mujeres', definition: 'Polémica europea sobre la capacidad y la dignidad femeninas, de Christine de Pizan a Moderata Fonte y Lucrezia Marinella.' },
    ],
    debates: [
      {
        question: '¿Existió el Renacimiento como ruptura histórica?',
        positions: [
          {
            school: 'Ruptura (Burckhardt, 1860)',
            argument:
              'El siglo XV italiano inaugura la modernidad: el Estado como obra de arte calculada, el descubrimiento del mundo y del hombre, el nacimiento del individuo y una cultura secular frente a la conciencia corporativa medieval.',
          },
          {
            school: 'Continuidad medieval (Haskins, 1927; Huizinga, 1919)',
            argument:
              'Las universidades, el derecho romano y la recuperación de Aristóteles son del siglo XII, y hubo antes un renacimiento carolingio. Leídos desde Borgoña, los mismos siglos XIV y XV son el otoño sobremaduro de la cultura medieval, no un amanecer.',
          },
          {
            school: 'Categoría heredada de los propios protagonistas',
            argument:
              'La periodización procede de Vasari y de los humanistas, que acuñaron «Edad Media» para nombrar el hueco entre la Antigüedad y ellos mismos. Es una autodescripción interesada convertida sin filtro en categoría académica.',
          },
        ],
        state:
          'Nadie defiende ya el despertar tras mil años de oscuridad. El término se conserva como convención cronológica, sin contenido de ruptura, y se discute si una etiqueta acuñada como propaganda puede funcionar como herramienta analítica o solo como marca de archivo.',
      },
      {
        question: '¿Qué era el humanismo: un programa de estudios o una filosofía?',
        positions: [
          {
            school: 'Programa profesional (Kristeller)',
            argument:
              'Los humanistas eran profesionales de cinco disciplinas concretas —gramática, retórica, poesía, historia y filosofía moral—, no una escuela de pensamiento. Los hubo platónicos, aristotélicos, escépticos y devotos: buscar una filosofía común es un error de categoría.',
          },
          {
            school: 'Humanismo cívico (Baron, 1955; Garin)',
            argument:
              'El humanismo florentino nació como ideología política en la crisis de 1402 frente a Milán: una defensa de la vida activa, la ciudadanía y la libertad republicana frente al ideal contemplativo anterior.',
          },
        ],
        state:
          'La definición de Kristeller es hoy la operativa. La cronología de los textos ha desmontado buena parte de la reconstrucción de Baron, y se ha señalado que su experiencia como exiliado de la Alemania nazi orientó la lectura. Aun así, la tesis obligó a estudiar el humanismo en su contexto político y no solo como erudición.',
      },
      {
        question: '¿Tuvieron las mujeres un Renacimiento?',
        positions: [
          {
            school: 'No (Joan Kelly, 1977)',
            argument:
              'Las mujeres de la nobleza perdieron funciones económicas y políticas que habían tenido en la sociedad feudal. Se endurecieron las normas de castidad y obediencia, se dispararon las dotes y creció la reclusión conventual: el periodo empeoró su posición mientras mejoraba la de los varones de su clase.',
          },
          {
            school: 'Revisión documental',
            argument:
              'Están documentadas humanistas como Nogarola, Cereta y Fedele, pintoras profesionales como Anguissola y Fontana, mecenas como Isabel de Este y una querella de las mujeres con obras propias hacia 1600. La respuesta varía según clase, ciudad y década.',
          },
        ],
        state:
          'La tesis se acepta con matices de clase y geografía. Su efecto duradero es metodológico: mostró que una periodización construida sobre la experiencia de una minoría masculina no describe por sí sola al conjunto de la sociedad.',
      },
    ],
    sources: [
      { author: 'Petrarca', title: 'Cartas familiares', year: 'c. 1350', kind: 'primaria', note: 'Incluye las cartas a autores muertos y el hallazgo en 1345 de la correspondencia privada de Cicerón.' },
      { author: 'Leon Battista Alberti', title: 'De pictura', year: '1435', kind: 'primaria', note: 'Primera formulación escrita de la perspectiva lineal como método.' },
      { author: 'Lorenzo Valla', title: 'Sobre la falsamente creída donación de Constantino', year: '1440', kind: 'primaria', note: 'Demuestra la falsificación por anacronismos de lengua. Acta de nacimiento de la crítica textual.' },
      { author: 'Pico della Mirandola', title: 'Oración sobre la dignidad del hombre', year: '1486', kind: 'primaria', note: 'Texto emblemático del periodo. Su autor era además cabalista cristiano y acabó cercano a Savonarola.' },
      { author: 'Erasmo de Róterdam', title: 'Novum Instrumentum', year: '1516', kind: 'primaria', note: 'Nuevo Testamento griego con traducción latina nueva. Corrige *poenitentiam agite* por *metanoeite*.' },
      { author: 'Nicolás Maquiavelo', title: 'El príncipe', year: '1513', kind: 'primaria', note: 'Escrito tras la caída de la república florentina; publicado en 1532. Analiza el poder por su eficacia, no por su legitimidad.' },
      { author: 'Baltasar de Castiglione', title: 'El cortesano', year: '1528', kind: 'primaria', note: 'Modelo europeo de conducta cortesana. Fuente central para el argumento de Joan Kelly.' },
      { author: 'Andrés Vesalio', title: 'De humani corporis fabrica', year: '1543', kind: 'primaria', note: 'Corrige a Galeno desde la disección directa. La lámina impresa convertida en prueba.' },
      { author: 'Giorgio Vasari', title: 'Vidas de los más excelentes pintores, escultores y arquitectos', year: '1550, ampliada en 1568', kind: 'primaria', note: 'Inventa el relato de la *rinascita* y su periodización, con Florencia en el centro.' },
      { author: 'Moderata Fonte', title: 'El mérito de las mujeres', year: '1600', kind: 'primaria', note: 'Diálogo veneciano de la querella de las mujeres, publicado póstumamente.' },
      { author: 'Jacob Burckhardt', title: 'La cultura del Renacimiento en Italia', year: '1860', kind: 'estudio', note: 'Fija la imagen del individuo moderno y del Estado como obra de arte. Aún es el punto de partida de toda discusión.' },
      { author: 'Johan Huizinga', title: 'El otoño de la Edad Media', year: '1919', kind: 'estudio', note: 'Lee los siglos XIV y XV desde Borgoña como final de una cultura, no como comienzo.' },
      { author: 'Charles H. Haskins', title: 'The Renaissance of the Twelfth Century', year: '1927', kind: 'estudio', note: 'Traslada al siglo XII las novedades atribuidas al XV: universidades, derecho romano, Aristóteles.' },
      { author: 'Hans Baron', title: 'The Crisis of the Early Italian Renaissance', year: '1955', kind: 'estudio', note: 'Formula el humanismo cívico a partir de la crisis florentina de 1402.' },
      { author: 'Paul Oskar Kristeller', title: 'Renaissance Thought', year: '1961', kind: 'estudio', note: 'Define el humanismo como programa de estudios profesional y no como filosofía. Definición hoy operativa.' },
      { author: 'Michael Baxandall', title: 'Pintura y vida cotidiana en el Renacimiento', year: '1972', kind: 'estudio', note: 'Los contratos de encargo y el «ojo de la época» como claves de lectura de la pintura.' },
      { author: 'Joan Kelly', title: '¿Tuvieron las mujeres un Renacimiento?', year: '1977', kind: 'estudio', note: 'Reformula la periodización desde la historia de las mujeres.' },
      { author: 'Elizabeth Eisenstein', title: 'The Printing Press as an Agent of Change', year: '1979', kind: 'estudio', note: 'La fijeza del texto impreso como condición de la ciencia acumulativa y de la Reforma.' },
      { author: 'Adrian Johns', title: 'The Nature of the Book', year: '1998', kind: 'estudio', note: 'Réplica a Eisenstein: la fiabilidad del impreso se construyó socialmente, no la garantizó la máquina.' },
      { author: 'Lisa Jardine', title: 'Worldly Goods', year: '1996', kind: 'estudio', note: 'El Renacimiento como cultura del consumo y de la adquisición, con Oriente como proveedor.' },
    ],
  },
  questions: [
    {
      id: 'renacimiento-1', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Quién construyó el relato de un «renacer» de las artes y su periodización en tres etapas?',
      options: [
        'Petrarca en sus cartas a los autores antiguos',
        'Giorgio Vasari en las *Vidas* (1550, ampliadas en 1568)',
        'Jacob Burckhardt en 1860',
        'Lorenzo Valla al refutar la Donación de Constantino',
      ],
      answer: 1,
      explanation: 'Vasari escribió desde Florencia sobre artistas casi todos toscanos, con Miguel Ángel como punto de llegada. Michelet convirtió la palabra en periodo histórico en 1855 y Burckhardt fijó su contenido en 1860.',
    },
    {
      id: 'renacimiento-2', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿De dónde procede la expresión «Edad Media»?',
      options: [
        'De las crónicas monásticas del siglo X',
        'Del Concilio de Trento, que necesitaba fechar la tradición',
        'De los propios humanistas, que llamaron así al hueco entre la Antigüedad y ellos mismos',
        'De la historiografía alemana del siglo XIX',
      ],
      answer: 2,
      explanation: 'Los humanistas hablaron de *tenebrae* y de *media aetas*. La periodización que todavía usamos la redactó una de las partes en litigio.',
    },
    {
      id: 'renacimiento-3', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué sostuvo Charles H. Haskins en 1927?',
      options: [
        'Que el Renacimiento italiano empezó antes de lo que se creía, hacia 1300',
        'Que ya hubo un renacimiento en el siglo XII: universidades, derecho romano y Aristóteles recuperado a través del árabe',
        'Que el Renacimiento fue un fenómeno exclusivamente artístico',
        'Que la imprenta explica por sí sola el cambio cultural del siglo XV',
      ],
      answer: 1,
      explanation: 'Si «renacimiento» significa recuperación deliberada de la Antigüedad, la Edad Media tuvo varios: el carolingio, el otoniano y el del siglo XII.',
    },
    {
      id: 'renacimiento-4', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué disciplinas componían los *studia humanitatis*?',
      options: [
        'Teología, derecho, medicina y artes liberales',
        'Lógica, filosofía natural, metafísica y matemáticas',
        'Gramática, retórica, poesía, historia y filosofía moral',
        'Aritmética, geometría, música y astronomía',
      ],
      answer: 2,
      explanation: 'Quedaban fuera la lógica, la filosofía natural, la metafísica, el derecho, la medicina y la teología, que siguieron enseñándose en las facultades sin apenas cambios.',
    },
    {
      id: 'renacimiento-5', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Cuál es la definición de humanismo que domina hoy la investigación?',
      options: [
        'Una filosofía unitaria sobre la dignidad del ser humano',
        'Un programa de estudios y una profesión, compatible con posiciones filosóficas y religiosas muy distintas',
        'Un movimiento antirreligioso de intelectuales laicos',
        'La ideología oficial de la república de Florencia',
      ],
      answer: 1,
      explanation: 'Es la definición de Kristeller. Hubo humanistas platónicos, aristotélicos, escépticos y devotos: buscar una filosofía común es un error de categoría.',
    },
    {
      id: 'renacimiento-6', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Cómo demostró Valla en 1440 que la Donación de Constantino era falsa?',
      options: [
        'Encontrando el original auténtico en los archivos vaticanos',
        'Analizando su lengua: vocabulario inexistente en el siglo IV, errores institucionales y latín tardío imposible en la cancillería constantiniana',
        'Comparándola con una copia griega conservada en Constantinopla',
        'Demostrando que Constantino nunca visitó Roma',
      ],
      answer: 1,
      explanation: 'Nació así la crítica textual moderna: un documento puede fecharse por cómo está escrito, con independencia de lo que afirme.',
    },
    {
      id: 'renacimiento-7', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué consecuencia tuvo que Erasmo tradujera en 1516 el griego *metanoeite* como «arrepentíos» y no como «haced penitencia»?',
      options: [
        'Ninguna: fue una discusión estrictamente académica',
        'Provocó su excomunión inmediata',
        'Dejó sin apoyo textual el sacramento de la penitencia, y Lutero abrió con ese argumento la primera de sus 95 tesis',
        'Obligó a reescribir la Vulgata por orden del papa',
      ],
      answer: 2,
      explanation: 'Una corrección filológica se convirtió en fractura religiosa. Erasmo nunca rompió con Roma, pero su obra completa acabó en el Índice de 1559.',
    },
    {
      id: 'renacimiento-8', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué muestran los contratos de encargo estudiados por Baxandall?',
      options: [
        'Que los artistas trabajaban con total libertad temática',
        'Que fijaban plazos, la calidad del azul de ultramar, la cantidad de oro y qué figuras debía pintar el maestro en persona',
        'Que la Iglesia era el único cliente posible',
        'Que los precios se pactaban siempre después de entregar la obra',
      ],
      answer: 1,
      explanation: 'La pintura era una mercancía por encargo con especificaciones, dirigida a un público entrenado. El artista libre y solitario es una construcción romántica posterior.',
    },
    {
      id: 'renacimiento-9', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿En qué consiste el debate entre Robert Lopez y Richard Goldthwaite?',
      options: [
        'En si el Renacimiento empezó en Florencia o en Venecia',
        'En si la perspectiva lineal se descubrió o se inventó',
        'En si la inversión en arte respondía a una caída de la rentabilidad productiva o a una expansión real de la demanda de bienes',
        'En si el mecenazgo era religioso o político',
      ],
      answer: 2,
      explanation: 'Para Lopez el arte absorbió capital que ya no encontraba inversión rentable; para Goldthwaite hubo un auge genuino del consumo y de la construcción. La discusión sigue abierta.',
    },
    {
      id: 'renacimiento-10', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué vínculo económico une la cumbre artística del Renacimiento romano con el estallido de la Reforma?',
      options: [
        'Las obras de San Pedro se financiaron en parte con indulgencias predicadas por toda Europa',
        'Los banqueros alemanes retiraron sus depósitos del banco Médicis',
        'Miguel Ángel fue acusado de simonía por el papa León X',
        'Las guerras italianas arruinaron a los mecenas florentinos',
      ],
      answer: 0,
      explanation: 'La basílica de Julio II y de León X y la protesta de Lutero de 1517 comparten fuente de financiación.',
    },
    {
      id: 'renacimiento-11', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Quién codificó por escrito la perspectiva lineal como método?',
      options: [
        'Masaccio en la *Trinidad* de Santa Maria Novella',
        'Brunelleschi en su experimento del Baptisterio',
        'Leonardo en sus cuadernos',
        'Alberti en *De pictura* (1435)',
      ],
      answer: 3,
      explanation: 'Brunelleschi hizo el experimento óptico hacia 1413 y Masaccio lo aplicó hacia 1427; Alberti convirtió el hallazgo en método escrito con la pirámide visual y la pintura como ventana.',
    },
    {
      id: 'renacimiento-12', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué hizo Vesalio en *De humani corporis fabrica* (1543)?',
      options: [
        'Descubrir la circulación de la sangre',
        'Corregir a Galeno desde la disección directa y presentar el argumento en láminas grabadas',
        'Traducir al latín los tratados médicos árabes',
        'Prohibir la disección de cadáveres humanos en Padua',
      ],
      answer: 1,
      explanation: 'Galeno había descrito animales, no humanos. Solo la imprenta permitía que una lámina fuese idéntica para todos los lectores y, por tanto, discutible.',
    },
    {
      id: 'renacimiento-13', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: 'Dado que China y Corea imprimían con tipos móviles antes que Europa, ¿cuál fue la aportación específica de Gutenberg?',
      options: [
        'Inventar el papel y la tinta de imprenta',
        'Aplicar por primera vez los tipos móviles a un texto religioso',
        'Un sistema de punzón y matriz para fundir en serie tipos metálicos idénticos, con tinta grasa y prensa adaptada',
        'Sustituir el pergamino por el papel en toda Europa',
      ],
      answer: 2,
      explanation: 'Funcionó porque el alfabeto latino necesita pocos caracteres, algo que penalizaba a los sistemas de escritura asiáticos.',
    },
    {
      id: 'renacimiento-14', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué objetó Adrian Johns (1998) a la tesis de Eisenstein sobre la imprenta?',
      options: [
        'Que la imprenta no se difundió realmente hasta el siglo XVII',
        'Que la fijeza del texto no fue automática: hubo piratería, ediciones defectuosas y pies de imprenta falsos, y la fiabilidad hubo que construirla socialmente',
        'Que los incunables eran demasiado caros para influir en nada',
        'Que la Reforma se habría producido igualmente sin libros',
      ],
      answer: 1,
      explanation: 'El consenso actual sitúa la imprenta como condición necesaria pero no suficiente: sus efectos dependieron de gremios, privilegios, censura y mercados.',
    },
    {
      id: 'renacimiento-15', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué muestra la difusión impresa del *Malleus maleficarum* (1487)?',
      options: [
        'Que la imprenta amplificó todo lo que circulaba, no solo la crítica humanista',
        'Que la censura eclesiástica funcionó desde el primer momento',
        'Que los libros en latín no tenían público',
        'Que la caza de brujas fue anterior a la imprenta y no guarda relación con ella',
      ],
      answer: 0,
      explanation: 'El manual tuvo alrededor de treinta ediciones. Junto a los almanaques astrológicos y las profecías, fue uno de los géneros de mayor venta.',
    },
    {
      id: 'renacimiento-16', era: 'Edad Moderna', topicId: 'renacimiento', topic: 'Renacimiento',
      question: '¿Qué respondió Joan Kelly en 1977 a su pregunta «¿Tuvieron las mujeres un Renacimiento?»?',
      options: [
        'Que sí, gracias a las humanistas y pintoras documentadas del periodo',
        'Que la pregunta no puede responderse por falta de fuentes',
        'Que no, o no en el mismo sentido: las mujeres de la nobleza perdieron funciones y se endurecieron las normas de castidad, dote y reclusión',
        'Que el Renacimiento fue indiferente a la posición de las mujeres',
      ],
      answer: 2,
      explanation: 'La revisión posterior matiza la respuesta según clase, ciudad y década, pero mantiene el hallazgo metodológico: una periodización hecha sobre una minoría masculina no describe al conjunto de la sociedad.',
    },
  ],
}
