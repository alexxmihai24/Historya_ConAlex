import type { TopicModule } from '../types.ts'

export const revolucionesLiberales: TopicModule = {
  topic: {
    id: 'revoluciones-liberales',
    era: 'Edad Contemporánea',
    title: 'Liberalismo, nacionalismo y unificaciones',
    years: '1815–1871',
    country: 'Europa',
    description: 'De la Restauración a los Estados nacionales: constituciones, oleadas revolucionarias y unificaciones.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '✺',
    color: 'red',
    summary:
      'Entre el Congreso de Viena y la proclamación del Imperio alemán, Europa pasó de un orden de dinastías legitimadas por la tradición a otro de Estados que decían representar a naciones. El relato escolar presenta ese tránsito como el avance inevitable de la libertad y del despertar de los pueblos. La investigación lo describe de otra manera: el liberalismo del siglo XIX fue, durante décadas, un proyecto de propietarios que temía tanto al absolutismo como al sufragio universal; las naciones no despertaron, se construyeron con escuela, servicio militar, ferrocarril y prensa; y las dos unificaciones que cierran el periodo las hicieron ejércitos y cancillerías, no las asambleas de 1848.',
    keyDates: [
      { date: '1814–1815', event: 'Congreso de Viena: principio de legitimidad, equilibrio y compensaciones territoriales.' },
      { date: '1815', event: 'Santa Alianza y Cuádruple Alianza: el sistema de congresos.' },
      { date: '1820', event: 'Oleada revolucionaria: Trienio Liberal en España, Nápoles y Portugal, con la Constitución de Cádiz como modelo.' },
      { date: '1821–1830', event: 'Guerra de independencia griega, primera secesión nacional reconocida por las potencias.' },
      { date: '1830', event: 'Revolución de Julio en Francia; independencia de Bélgica; insurrección polaca.' },
      { date: '1834', event: 'Entra en vigor el Zollverein, unión aduanera alemana sin Austria.' },
      { date: '1838', event: 'Carta del Pueblo: el cartismo reclama sufragio masculino universal en Gran Bretaña.' },
      { date: '1848', event: 'Primavera de los pueblos; *Manifiesto comunista*; Declaración de Seneca Falls.' },
      { date: '1848–1849', event: 'Parlamento de Fráncfort; abolición de la servidumbre en el Imperio austríaco.' },
      { date: '1859–1861', event: 'Guerra contra Austria, expedición de los Mil y proclamación del Reino de Italia.' },
      { date: '1862', event: 'Discurso de Bismarck sobre el «hierro y la sangre» ante la cámara prusiana.' },
      { date: '1864, 1866, 1870–1871', event: 'Guerras de Dinamarca, Austria y Francia: las tres etapas de la unificación alemana.' },
      { date: '1870', event: 'Roma pasa a ser capital de Italia tras la retirada de la guarnición francesa.' },
      { date: '1871', event: 'Proclamación del Imperio alemán en Versalles y Comuna de París.' },
      { date: '1882', event: 'Renan define la nación como «un plebiscito de todos los días».' },
    ],
    sections: [
      {
        title: 'La Restauración: un orden nuevo con nombre antiguo',
        body: [
          'El Congreso de Viena reunió entre septiembre de 1814 y junio de 1815 a las potencias vencedoras de Napoleón. Su vocabulario era de vuelta atrás —legitimidad dinástica, reparación del desorden revolucionario—, pero lo que construyó era inédito: un sistema de seguridad colectiva basado en el equilibrio entre cinco grandes potencias, en compensaciones territoriales calculadas y en congresos periódicos para resolver las crisis antes de que se convirtieran en guerra.',
          'Paul Schroeder ha sostenido que ese sistema fue una transformación real de la política internacional europea y no una simple reacción: sustituyó el equilibrio entendido como competencia armada por un orden pactado con reglas explícitas. El dato que suele citarse a su favor es que Europa no conoció una guerra general entre 1815 y 1914, y ninguna que enfrentase a todas las grandes potencias hasta ese último año.',
          'Tampoco fue posible desmontar la herencia napoleónica. Los códigos civiles, la administración uniforme por departamentos o provincias, la propiedad plena de la tierra frente a los derechos señoriales, el registro civil y la carrera abierta al talento sobrevivieron en buena parte del continente porque resultaban útiles para gobernar. Los monarcas restaurados heredaron un aparato estatal mucho más eficaz que el de 1789, y lo conservaron.',
          'El sistema de congresos se rompió por su propia lógica. Austria intervino en Nápoles y Piamonte en 1821, Francia en España en 1823 para liquidar el Trienio Liberal, pero cuando se trató de las colonias americanas Gran Bretaña se negó, y la independencia griega dividió a las potencias entre el principio de legitimidad y el interés estratégico en el Imperio otomano. Metternich pudo aplazar el problema; no pudo resolverlo.',
          'Conviene retener que la Restauración no fue un paréntesis sin contenido. Fue el marco dentro del cual se formaron las culturas políticas del siglo: el legitimismo, el liberalismo constitucional, el republicanismo, el nacionalismo romántico y el socialismo utópico se definieron unos frente a otros en esas tres décadas.',
        ].join('\n\n'),
        callout:
          'El sistema de Viena suele contarse como pura reacción. Duró cuarenta años sin guerra general en Europa: bastante más que cualquier orden internacional posterior, incluida la paz de 1919.',
      },
      {
        title: 'Liberalismo: qué era y para quién',
        body: [
          'Identificar liberalismo con democracia es un anacronismo. El liberalismo decimonónico defendía derechos individuales, división de poderes, imperio de la ley, libertad de prensa y de comercio y una constitución que limitara al monarca, pero desconfiaba abiertamente del sufragio universal, al que asociaba con el Terror de 1793 y con el gobierno de la muchedumbre. La condición para votar no era ser adulto, sino ser propietario.',
          'Las cifras dan la medida. En la Francia de Luis Felipe, tras rebajar el censo en 1830, el cuerpo electoral pasó de unos noventa mil a unos doscientos cuarenta mil votantes sobre más de treinta y cinco millones de habitantes: menos del uno por ciento. Cuando en 1843 Guizot resumió su respuesta a quien pedía el voto con un «enriqueceos», no estaba siendo cínico: describía con exactitud la lógica del régimen. La ciudadanía política era un premio a la acumulación.',
          'La reflexión teórica acompañó esa posición. Benjamin Constant distinguió en 1819 entre la libertad de los antiguos —participar directamente en las decisiones colectivas— y la de los modernos —disfrutar sin interferencias de la vida privada, la propiedad y la opinión—, y concluyó que la segunda era la propia de las sociedades comerciales. Cuatro décadas después John Stuart Mill defendió en *Sobre la libertad* (1859) el principio del daño, pero dedicó páginas explícitas a temer la tiranía de la mayoría.',
          'Bajo la etiqueta convivían familias enfrentadas. Los doctrinarios querían una monarquía constitucional con soberanía compartida entre rey y Cortes y sufragio censitario estrecho; los progresistas y radicales, soberanía nacional plena, milicia ciudadana y ampliación del censo; los demócratas y republicanos, sufragio masculino universal. En España esas diferencias organizaron la vida política entera del siglo, con constituciones alternándose según qué familia gobernara.',
          'El liberalismo económico avanzó en paralelo y con menos resistencia: desamortizaciones que pusieron en el mercado tierras eclesiásticas y municipales, supresión de gremios, libertad de contratación, códigos de comercio. El resultado no fue una sociedad de pequeños propietarios sino, en buena parte del sur de Europa, una concentración de la tierra en manos de quienes ya tenían capital para pujar en las subastas.',
          'La cuestión social apareció como el límite del programa. Cuando obreros y artesanos empezaron a exigir derecho de asociación, salario y voto, buena parte del liberalismo eligió el orden. Esa fractura, visible ya en el cartismo británico de 1838, será decisiva en 1848.',
        ].join('\n\n'),
      },
      {
        title: 'La nación: ¿descubrimiento o construcción?',
        body: [
          'El nacionalismo romántico presentó la nación como un hecho natural y antiguo: una comunidad con lengua, cultura y espíritu propios que había existido siempre y que ahora despertaba. Herder había situado el genio de cada pueblo en su lengua y su poesía popular; Fichte, en sus *Discursos a la nación alemana* (1808), convirtió esa idea en programa político bajo la ocupación napoleónica. Filólogos, folcloristas y compositores recopilaron cuentos, cantos y trajes, y en el proceso los seleccionaron, corrigieron y en ocasiones inventaron.',
          'La historiografía del siglo XX invirtió el planteamiento. Ernest Gellner sostuvo en 1983 que es el nacionalismo el que crea las naciones y no al revés: la sociedad industrial necesita una población móvil, alfabetizada y culturalmente homogénea, y solo un sistema educativo estatal puede producirla. Benedict Anderson describió la nación como «comunidad imaginada» —sus miembros nunca se conocerán, pero se piensan como un nosotros simultáneo— y atribuyó un papel central al capitalismo impreso: el periódico y la novela en lengua vernácula enseñaron a millones de personas a imaginarse contemporáneas entre sí.',
          'Eric Hobsbawm y Terence Ranger mostraron en *La invención de la tradición* (1983) cuántos rituales aparentemente inmemoriales —tartanes escoceses, ceremonial monárquico británico, fiestas cívicas— se diseñaron entre 1870 y 1914 para dar profundidad histórica a construcciones recientes. Frente a esta corriente modernista, Anthony D. Smith replicó que las naciones no se levantan sobre el vacío: se apoyan en *ethnies* previas con mitos de origen, memorias y símbolos compartidos que el nacionalismo reorganiza pero no inventa de la nada.',
          'La formulación más citada es anterior a todas ellas. Ernest Renan, en la Sorbona en 1882, negó que la nación se defina por raza, lengua, religión o geografía, la definió como «un plebiscito de todos los días» y añadió una observación incómoda: el olvido, e incluso el error histórico, son factores esenciales en la creación de una nación. Cada nación necesita no recordar las violencias que la fundaron.',
          'El caso francés lo documenta con precisión. Un informe oficial de 1863 calculaba que alrededor de la cuarta parte de la población de Francia no hablaba francés. Eugen Weber, en *Peasants into Frenchmen* (1976), reconstruyó cómo la escuela obligatoria, el servicio militar, el ferrocarril, la administración y el mercado nacional convirtieron a los campesinos en franceses entre 1870 y 1914, es decir, un siglo después de la Revolución hecha en su nombre. La frase atribuida a Massimo d Azeglio tras la unificación italiana —hecha Italia, falta hacer a los italianos— describe exactamente el mismo problema.',
        ].join('\n\n'),
        callout:
          'Renan definió la nación en 1882 como un plebiscito diario y añadió que exige olvidar. No es una paradoja retórica: toda nación se funda sobre conflictos internos que su relato oficial necesita no recordar.',
      },
      {
        title: 'Las oleadas: 1820, 1830 y 1848',
        body: [
          'Las revoluciones del siglo XIX llegaron en oleadas que se propagaron por Europa en cuestión de semanas. La de 1820 fue mediterránea y militar, con pronunciamientos en España, Nápoles, Piamonte y Portugal, y tuvo un texto de referencia común: la Constitución de Cádiz de 1812, traducida y adoptada como modelo por revolucionarios que nunca habían pisado España. La de 1830 empezó en París con la caída de los Borbones, dio a Bélgica su independencia, fracasó en Polonia y consolidó regímenes liberales censitarios en Francia y Gran Bretaña.',
          '1848 fue de otra magnitud. En pocas semanas cayeron o cedieron gobiernos en Francia, los Estados alemanes, el Imperio austríaco y buena parte de Italia; Metternich huyó de Viena. Los ingredientes coincidieron: una crisis agraria y alimentaria en 1845-1847, paro artesanal, una red de prensa y sociedades políticas ya organizada y la certeza de que el ejemplo de una capital arrastraría a las demás. Fue el primer acontecimiento verdaderamente europeo desde Napoleón.',
          'También fracasó casi en todas partes en menos de dieciocho meses, y las razones son instructivas. La alianza inicial entre liberales moderados y radicales se rompió en cuanto apareció la cuestión social: en junio de 1848, en París, la Guardia Nacional y el ejército aplastaron a los obreros que defendían los Talleres Nacionales, con miles de muertos y deportaciones. Los conflictos nacionales enfrentaron a los propios revolucionarios: la asamblea de Fráncfort discutió si Posnania era alemana, y los húngaros que reclamaban su independencia se encontraron con croatas, rumanos y serbios que reclamaban la suya frente a ellos. Los campesinos, principal masa disponible, se desmovilizaron en cuanto obtuvieron la abolición de las cargas señoriales. Y los ejércitos permanecieron leales a sus soberanos.',
          'El Parlamento de Fráncfort resume el problema. Elegido por un sufragio amplio, dedicó meses a debatir derechos fundamentales y fronteras, redactó una constitución razonable y en abril de 1849 ofreció la corona imperial a Federico Guillermo IV de Prusia, que la rechazó por proceder de una asamblea y no de los príncipes. Una constitución sin ejército ni administración detrás no obliga a nadie.',
          'De ahí la sentencia célebre de G. M. Trevelyan: 1848 fue el punto de inflexión en el que la historia moderna no llegó a girar. La historiografía posterior, con Jonathan Sperber a la cabeza, la ha discutido. La abolición de la servidumbre y de las cargas señoriales en las tierras de los Habsburgo fue definitiva; el sufragio masculino universal se estrenó en Francia; el Estatuto Albertino de 1848 sobrevivió como constitución italiana hasta 1946; y la política de masas —partidos, prensa barata, mítines, asociaciones— quedó instalada de manera irreversible. 1848 no logró sus objetivos declarados y sin embargo cambió el terreno de juego.',
        ].join('\n\n'),
      },
      {
        title: 'Unificaciones desde arriba: Italia y Alemania',
        body: [
          'Las dos unificaciones que cierran el periodo no las hicieron las asambleas de 1848 sino dos Estados con ejército: el Piamonte y Prusia. La secuencia es en ambos casos diplomática y militar, y el ingrediente decisivo fue elegir bien las guerras.',
          'Cavour, primer ministro piamontés, entendió que Austria no sería expulsada de Italia sin una gran potencia aliada. En Plombières, en 1858, pactó en secreto con Napoleón III una guerra contra Austria a cambio de Saboya y Niza; la guerra de 1859 dio Lombardía. Los plebiscitos en los ducados centrales y la expedición de los Mil de Garibaldi, que en 1860 derribó al reino de las Dos Sicilias, completaron un mapa que el Piamonte administró como anexión, no como federación. El Reino de Italia se proclamó en 1861; Venecia llegó en 1866 como premio por la alianza con Prusia, y Roma en 1870, cuando la guerra franco-prusiana obligó a retirar la guarnición francesa.',
          'Bismarck operó con la misma lógica y más recursos. Nombrado en 1862 en plena crisis constitucional prusiana, anunció ante la cámara que las grandes cuestiones no se resolverían con discursos ni con votaciones de mayorías, sino con hierro y sangre, y gobernó cuatro años sin presupuesto aprobado. Después vinieron tres guerras breves y calculadas: contra Dinamarca en 1864 junto a Austria, contra Austria en 1866 para expulsarla de Alemania, y contra Francia en 1870-1871 tras manipular el despacho de Ems. El Imperio alemán se proclamó en enero de 1871 en la galería de los espejos de Versalles, en territorio enemigo ocupado.',
          'Sobre las causas económicas hay discusión. El Zollverein, vigente desde 1834, creó un mercado alemán sin Austria y suele presentarse como preparación de la unidad política. La objeción es que una unión aduanera no produce por sí sola un Estado —hubo uniones aduaneras que no unificaron nada—, y que Austria quedó fuera por decisión prusiana antes de que existiera proyecto unificador alguno. Helmut Böhme y la historiografía social alemana han subrayado el peso de los intereses económicos; otros insisten en que sin las tres guerras no habría habido imperio.',
          'La forma del resultado importa tanto como el hecho. Alemania se unificó en su versión *kleindeutsch*, sin Austria y bajo hegemonía prusiana, con un Reichstag elegido por sufragio masculino universal pero sin control sobre un canciller responsable solo ante el emperador, y con Prusia votando internamente por un sistema de tres clases censitarias. Italia nació como monarquía centralizada y censitaria: en las primeras elecciones votó alrededor del dos por ciento de la población.',
          'De ahí la tesis del *Sonderweg*, el camino especial alemán, formulada por Hans-Ulrich Wehler: una modernización económica acelerada sin modernización política, con élites preindustriales intactas, que explicaría la fragilidad de Weimar y el ascenso del nazismo. David Blackbourn y Geoff Eley la desmontaron en *The Peculiarities of German History* (1984): el argumento presupone un camino normal —el británico o el francés— que ningún país recorrió realmente, e infravalora hasta qué punto la burguesía alemana sí conquistó posiciones sociales y culturales. El debate reorientó la historia alemana hacia lo específico de cada coyuntura y en contra de las explicaciones por destino nacional.',
        ].join('\n\n'),
        callout:
          'El Reichstag alemán se elegía desde 1871 por sufragio masculino universal, más amplio que el británico de la época. No controlaba al canciller. Sufragio amplio y poder parlamentario nulo podían convivir.',
      },
      {
        title: 'Quién quedó fuera',
        body: [
          'La ciudadanía que el liberalismo consagró fue masculina y propietaria por definición legal, no por descuido. Las constituciones del periodo no excluyeron a las mujeres del voto: las excluyeron de la condición de sujeto político. En julio de 1848, mientras Europa se sublevaba, la convención de Seneca Falls aprobó en el estado de Nueva York una Declaración de Sentimientos calcada de la de Independencia que reclamaba el sufragio femenino; en Francia, las mujeres que habían sostenido los clubes revolucionarios vieron cómo el sufragio universal de ese mismo año se definía como masculino.',
          'Los trabajadores fueron la otra exclusión estructural. El cartismo británico reclamó desde 1838 sufragio masculino universal, voto secreto y sueldo para los diputados, y reunió millones de firmas sin obtener nada; las jornadas de junio de 1848 en París marcaron la ruptura definitiva entre liberalismo y movimiento obrero; la Asociación Internacional de Trabajadores se fundó en Londres en 1864; y la Comuna de París de 1871, aplastada en la semana sangrienta, se convirtió en el trauma fundacional de la política europea posterior. Las cifras de víctimas se discuten: la tradición hablaba de veinte o treinta mil fusilados y las estimaciones recientes las rebajan a varios miles, sin que eso altere el significado del episodio.',
          'Dentro de los nuevos Estados nacionales quedaron minorías convertidas de golpe en problema. La Prusia unificadora aplicó políticas de germanización sobre sus súbditos polacos; la Italia unida se encontró con una insurrección en el sur, el llamado bandolerismo, que exigió años de campaña militar y decenas de miles de soldados, y con una cuestión meridional que atravesaría todo el siglo siguiente. El Estado nacional homogéneo era un proyecto, y su realización tuvo costes sobre quienes no encajaban en él.',
          'Fuera de Europa, el mismo periodo es de expansión. Francia invadió Argelia en 1830, el año de su revolución liberal, y Gran Bretaña impuso a China los tratados desiguales tras la primera guerra del opio (1839-1842). Los principios de soberanía nacional y autodeterminación que legitimaban a griegos, belgas, italianos y alemanes no se consideraban aplicables a los pueblos colonizados, y esa asimetría no fue una contradicción inadvertida sino una jerarquía explícita, formulada en el lenguaje de la civilización y del progreso.',
          'Lo que sí quedó fue el marco. En 1815 el Estado nacional era una excepción; en 1871 se había convertido en la forma política que se daba por descontada, hasta el punto de que los movimientos posteriores —incluidos los anticoloniales— tuvieron que formular sus demandas en ese idioma. Junto a él quedaron el constitucionalismo escrito, la política de masas y una idea de pertenencia que Europa exportaría al resto del mundo durante el siglo siguiente.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Legitimismo', definition: 'Principio del Congreso de Viena según el cual el poder corresponde a las dinastías desplazadas por la Revolución y Napoleón.' },
      { term: 'Sistema de congresos', definition: 'Mecanismo de reuniones periódicas entre las grandes potencias para resolver crisis sin guerra general. Se rompió con Grecia y América.' },
      { term: 'Sufragio censitario', definition: 'Derecho de voto reservado a quienes superan un nivel de renta o propiedad. Norma del liberalismo europeo hasta finales del siglo XIX.' },
      { term: 'Liberalismo doctrinario', definition: 'Corriente que defiende la soberanía compartida entre rey y Cortes y un censo electoral estrecho, frente a la soberanía nacional plena.' },
      { term: 'Soberanía nacional', definition: 'Principio según el cual el poder reside en la nación y no en el monarca. Base de las constituciones progresistas del periodo.' },
      { term: 'Desamortización', definition: 'Venta en subasta pública de tierras eclesiásticas y municipales. Amplió el mercado de la tierra y concentró la propiedad.' },
      { term: 'Comunidad imaginada', definition: 'Definición de nación de Benedict Anderson: un colectivo cuyos miembros nunca se conocerán pero se piensan simultáneos, gracias al capitalismo impreso.' },
      { term: 'Tradición inventada', definition: 'Ritual o símbolo de apariencia inmemorial diseñado en época reciente para dar profundidad histórica a una construcción política.' },
      { term: 'Primavera de los pueblos', definition: 'Nombre de la oleada revolucionaria europea de 1848, la primera simultánea en casi todo el continente.' },
      { term: 'Realpolitik', definition: 'Política basada en el cálculo de fuerzas y no en principios ideológicos. Asociada a Cavour y sobre todo a Bismarck.' },
      { term: 'Risorgimento', definition: 'Proceso de unificación italiana. Culminó como anexión al Piamonte, no como federación de Estados iguales.' },
      { term: 'Zollverein', definition: 'Unión aduanera alemana vigente desde 1834, sin Austria. Su peso causal en la unificación política se discute.' },
      { term: 'Kleindeutsch', definition: 'Solución de una Alemania «pequeña» sin Austria y bajo hegemonía prusiana, frente a la alternativa *grossdeutsch*.' },
      { term: 'Sonderweg', definition: 'Tesis del «camino especial» alemán: modernización económica sin modernización política. Muy discutida desde 1984.' },
    ],
    debates: [
      {
        question: '¿Son las naciones construcciones modernas o realidades antiguas?',
        positions: [
          {
            school: 'Modernismo (Gellner, Anderson, Hobsbawm)',
            argument:
              'Es el nacionalismo el que crea las naciones. La sociedad industrial exige una población homogénea y alfabetizada que solo la escuela estatal produce; el capitalismo impreso enseñó a millones a imaginarse simultáneos, y buena parte de las tradiciones nacionales se diseñó entre 1870 y 1914.',
          },
          {
            school: 'Etnosimbolismo (Anthony D. Smith)',
            argument:
              'Las naciones modernas no surgen del vacío: se apoyan en *ethnies* anteriores con mitos de origen, memorias, lengua y símbolos compartidos. El nacionalismo reorganiza y politiza ese material, pero no lo inventa de la nada.',
          },
        ],
        state:
          'El modernismo es la posición dominante y ha ganado el terreno metodológico, pero la objeción de Smith obligó a explicar por qué unas comunidades resultaron «nacionalizables» y otras no. El acuerdo práctico es estudiar cada caso: cuánto material previo había y cuánto aportaron escuela, ejército, prensa y mercado.',
      },
      {
        question: '¿Fracasó 1848?',
        positions: [
          {
            school: 'Fracaso (formulación clásica, Trevelyan)',
            argument:
              'En dieciocho meses cayeron todos los gobiernos revolucionarios. El punto de inflexión en que la historia moderna no llegó a girar: la alianza entre liberales y radicales se rompió con la cuestión social, los movimientos nacionales chocaron entre sí y los ejércitos siguieron leales.',
          },
          {
            school: 'Revisión (Sperber y otros)',
            argument:
              'Los resultados fueron duraderos aunque no los declarados: abolición definitiva de la servidumbre y las cargas señoriales en las tierras de los Habsburgo, estreno del sufragio masculino universal en Francia, el Estatuto Albertino vigente hasta 1946 y la instalación irreversible de la política de masas.',
          },
        ],
        state:
          'La lectura actual separa objetivos de efectos. 1848 no consiguió lo que pedía, pero cambió el terreno de juego: después de esa fecha ningún régimen europeo pudo gobernar ignorando la existencia de una opinión pública organizada.',
      },
      {
        question: '¿Existió un «camino especial» alemán?',
        positions: [
          {
            school: 'Sonderweg (Wehler y la escuela de Bielefeld)',
            argument:
              'Alemania se industrializó a gran velocidad sin democratizarse: las élites agrarias y militares prusianas conservaron el poder, la burguesía renunció a disputárselo y el Imperio de 1871 institucionalizó ese desequilibrio. De ahí la fragilidad de Weimar y el desenlace de 1933.',
          },
          {
            school: 'Crítica (Blackbourn y Eley, 1984)',
            argument:
              'La tesis presupone un camino normal —el británico o el francés— que ningún país recorrió tal como se describe, e infravalora las posiciones sociales, jurídicas y culturales que la burguesía alemana sí conquistó. Explicar 1933 desde 1871 convierte la historia en destino.',
          },
        ],
        state:
          'La versión fuerte del Sonderweg está abandonada. Persiste como descripción de un desajuste concreto —sufragio amplio para el Reichstag y canciller responsable solo ante el emperador—, no como explicación teleológica del siglo XX alemán.',
      },
    ],
    sources: [
      { author: 'Cortes de Cádiz', title: 'Constitución política de la Monarquía española', year: '1812', kind: 'primaria', note: 'Modelo exportado a Nápoles, Piamonte y Portugal en la oleada de 1820.' },
      { author: 'Potencias europeas', title: 'Acta Final del Congreso de Viena', year: '1815', kind: 'primaria', note: 'Fija el mapa, el principio de legitimidad y el sistema de congresos.' },
      { author: 'Benjamin Constant', title: 'De la libertad de los antiguos comparada con la de los modernos', year: '1819', kind: 'primaria', note: 'Fundamenta el liberalismo de la vida privada frente a la participación directa.' },
      { author: 'Convención de Seneca Falls', title: 'Declaración de Sentimientos', year: '1848', kind: 'primaria', note: 'Reclama el sufragio femenino con la forma de la Declaración de Independencia.' },
      { author: 'Karl Marx y Friedrich Engels', title: 'Manifiesto del Partido Comunista', year: '1848', kind: 'primaria', note: 'Publicado semanas antes de la oleada revolucionaria; su influencia en ella fue escasa.' },
      { author: 'John Stuart Mill', title: 'Sobre la libertad', year: '1859', kind: 'primaria', note: 'Principio del daño y advertencia expresa contra la tiranía de la mayoría.' },
      { author: 'Giuseppe Mazzini', title: 'Los deberes del hombre', year: '1860', kind: 'primaria', note: 'Nacionalismo republicano y democrático, derrotado por la vía monárquica de Cavour.' },
      { author: 'Otto von Bismarck', title: 'Discurso sobre el hierro y la sangre', year: '1862', kind: 'primaria', note: 'Ante la comisión presupuestaria prusiana, en plena crisis constitucional.' },
      { author: 'Ernest Renan', title: '¿Qué es una nación?', year: '1882', kind: 'primaria', note: 'La nación como plebiscito diario y como ejercicio de olvido compartido.' },
      { author: 'Eric Hobsbawm', title: 'La era de la revolución, 1789-1848', year: '1962', kind: 'estudio', note: 'Síntesis clásica de la doble revolución, política e industrial.' },
      { author: 'Eugen Weber', title: 'Peasants into Frenchmen', year: '1976', kind: 'estudio', note: 'Reconstruye la nacionalización de la Francia rural entre 1870 y 1914.' },
      { author: 'Ernest Gellner', title: 'Naciones y nacionalismo', year: '1983', kind: 'estudio', note: 'La homogeneidad cultural como exigencia funcional de la sociedad industrial.' },
      { author: 'Benedict Anderson', title: 'Comunidades imaginadas', year: '1983', kind: 'estudio', note: 'La nación como comunidad imaginada por el capitalismo impreso.' },
      { author: 'Eric Hobsbawm y Terence Ranger', title: 'La invención de la tradición', year: '1983', kind: 'estudio', note: 'Rituales nacionales aparentemente inmemoriales diseñados entre 1870 y 1914.' },
      { author: 'David Blackbourn y Geoff Eley', title: 'The Peculiarities of German History', year: '1984', kind: 'estudio', note: 'Desmonta el Sonderweg negando que exista un camino normal a la modernidad.' },
      { author: 'Anthony D. Smith', title: 'The Ethnic Origins of Nations', year: '1986', kind: 'estudio', note: 'Etnosimbolismo: las naciones se apoyan en comunidades étnicas previas.' },
      { author: 'Jonathan Sperber', title: 'The European Revolutions, 1848-1851', year: '1994', kind: 'estudio', note: 'Revisión de 1848 desde sus efectos duraderos y no desde sus objetivos.' },
      { author: 'Paul W. Schroeder', title: 'The Transformation of European Politics, 1763-1848', year: '1994', kind: 'estudio', note: 'El orden de Viena como innovación en política internacional, no como simple reacción.' },
    ],
  },
  questions: [
    {
      id: 'revoluciones-liberales-1', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué sostiene Paul Schroeder sobre el orden salido del Congreso de Viena?',
      options: [
        'Que fue una restauración literal del mapa anterior a 1789',
        'Que fue una transformación real de la política internacional, con reglas pactadas que evitaron una guerra general durante décadas',
        'Que careció de efectos porque se rompió en 1821',
        'Que su único objetivo era repartir las colonias americanas',
      ],
      answer: 1,
      explanation: 'Europa no conoció una guerra general entre 1815 y 1914. El sistema sustituyó el equilibrio como competencia armada por un orden con congresos periódicos.',
    },
    {
      id: 'revoluciones-liberales-2', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué herencia napoleónica conservaron los regímenes de la Restauración?',
      options: [
        'El sufragio universal masculino',
        'La república como forma de gobierno',
        'Los códigos civiles, la administración uniforme, el registro civil y la propiedad plena de la tierra',
        'La libertad de prensa sin censura previa',
      ],
      answer: 2,
      explanation: 'Los monarcas restaurados heredaron un aparato estatal mucho más eficaz que el de 1789 y lo conservaron porque servía para gobernar.',
    },
    {
      id: 'revoluciones-liberales-3', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Por qué es anacrónico identificar liberalismo decimonónico con democracia?',
      options: [
        'Porque el liberalismo rechazaba las constituciones escritas',
        'Porque defendía derechos y división de poderes, pero reservaba el voto a los propietarios y desconfiaba del sufragio universal',
        'Porque los liberales eran partidarios del absolutismo ilustrado',
        'Porque la democracia no existía como concepto en el siglo XIX',
      ],
      answer: 1,
      explanation: 'En la Francia de Luis Felipe votaba menos del uno por ciento de la población. La ciudadanía política funcionaba como premio a la propiedad.',
    },
    {
      id: 'revoluciones-liberales-4', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué distinguió Benjamin Constant en 1819?',
      options: [
        'La nación política de la nación cultural',
        'La libertad de los antiguos, participación directa en las decisiones colectivas, de la de los modernos, disfrute sin interferencias de la vida privada',
        'El liberalismo económico del liberalismo político',
        'La soberanía nacional de la soberanía compartida',
      ],
      answer: 1,
      explanation: 'Constant concluyó que la libertad de los modernos era la propia de las sociedades comerciales, y que la participación directa resultaba impracticable en ellas.',
    },
    {
      id: 'revoluciones-liberales-5', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Cuál fue el efecto social predominante de las desamortizaciones en el sur de Europa?',
      options: [
        'La creación de una sociedad de pequeños propietarios',
        'El reparto gratuito de tierras entre los jornaleros',
        'La concentración de la propiedad en manos de quienes ya tenían capital para pujar en las subastas',
        'La devolución de las tierras a los municipios',
      ],
      answer: 2,
      explanation: 'La tierra salió al mercado en subasta pública, y solo pudo comprarla quien disponía de dinero líquido.',
    },
    {
      id: 'revoluciones-liberales-6', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: 'Según Gellner, ¿cuál es la relación entre nación y nacionalismo?',
      options: [
        'La nación preexiste y el nacionalismo la despierta',
        'El nacionalismo crea las naciones: la sociedad industrial necesita una población homogénea y alfabetizada que solo la escuela estatal produce',
        'Ambos son fenómenos independientes entre sí',
        'El nacionalismo es una consecuencia tardía de las guerras napoleónicas',
      ],
      answer: 1,
      explanation: 'Es la inversión modernista del planteamiento romántico. Anderson añadió el papel del capitalismo impreso en la imaginación de la simultaneidad.',
    },
    {
      id: 'revoluciones-liberales-7', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué objeción plantea Anthony D. Smith al modernismo?',
      options: [
        'Que las naciones son eternas e inmutables',
        'Que el nacionalismo no tuvo importancia política antes de 1914',
        'Que las naciones modernas se apoyan en *ethnies* previas con mitos, memorias y símbolos que el nacionalismo reorganiza pero no inventa de la nada',
        'Que la escuela y el ejército no influyeron en la formación nacional',
      ],
      answer: 2,
      explanation: 'La objeción obliga a explicar por qué unas comunidades resultaron nacionalizables y otras no, en lugar de suponer que cualquier material sirve.',
    },
    {
      id: 'revoluciones-liberales-8', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Cómo definió Renan la nación en 1882?',
      options: [
        'Por la raza y la lengua comunes',
        'Como un plebiscito de todos los días, que además exige olvidar los conflictos que la fundaron',
        'Como la comunidad de quienes comparten religión',
        'Como el territorio delimitado por fronteras naturales',
      ],
      answer: 1,
      explanation: 'Renan negó expresamente que raza, lengua, religión o geografía definan la nación, y señaló el olvido —e incluso el error histórico— como factor esencial.',
    },
    {
      id: 'revoluciones-liberales-9', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué demuestra el informe francés de 1863 que cita Eugen Weber?',
      options: [
        'Que la alfabetización era universal en Francia',
        'Que alrededor de la cuarta parte de la población de Francia no hablaba francés',
        'Que el servicio militar era voluntario',
        'Que la mayoría de los franceses votaba en las elecciones',
      ],
      answer: 1,
      explanation: 'La nacionalización de la Francia rural la hicieron escuela, cuartel, ferrocarril y mercado entre 1870 y 1914, un siglo después de la Revolución hecha en su nombre.',
    },
    {
      id: 'revoluciones-liberales-10', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué texto sirvió de modelo común a los revolucionarios de la oleada de 1820?',
      options: [
        'La Constitución de Cádiz de 1812',
        'La Declaración de Derechos del Hombre y del Ciudadano de 1789',
        'El Acta Final del Congreso de Viena',
        'La Carta Otorgada francesa de 1814',
      ],
      answer: 0,
      explanation: 'Se tradujo y adoptó en Nápoles, Piamonte y Portugal por revolucionarios que nunca habían pisado España.',
    },
    {
      id: 'revoluciones-liberales-11', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Cuál de estos factores NO explica el fracaso de las revoluciones de 1848?',
      options: [
        'La ruptura entre liberales moderados y radicales al aparecer la cuestión social',
        'El choque entre movimientos nacionales rivales dentro del mismo territorio',
        'La desmovilización campesina tras obtener la abolición de las cargas señoriales',
        'La intervención militar de Estados Unidos en apoyo de los antiguos regímenes',
      ],
      answer: 3,
      explanation: 'No hubo intervención estadounidense. Los tres primeros factores, sumados a la lealtad de los ejércitos a sus soberanos, explican el desenlace.',
    },
    {
      id: 'revoluciones-liberales-12', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Por qué rechazó Federico Guillermo IV la corona imperial que le ofreció el Parlamento de Fráncfort en 1849?',
      options: [
        'Porque prefería que la corona la ostentara Austria',
        'Porque procedía de una asamblea elegida y no de los príncipes alemanes',
        'Porque la constitución de Fráncfort abolía la monarquía',
        'Porque Rusia se lo prohibió expresamente',
      ],
      answer: 1,
      explanation: 'El episodio resume el problema de 1848: una constitución sin ejército ni administración detrás no obliga a nadie.',
    },
    {
      id: 'revoluciones-liberales-13', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: 'Frente a la sentencia de Trevelyan sobre 1848, ¿qué resultados duraderos señala la revisión historiográfica?',
      options: [
        'La unificación inmediata de Alemania e Italia',
        'La abolición definitiva de la servidumbre en las tierras de los Habsburgo, el estreno del sufragio masculino universal en Francia y la instalación de la política de masas',
        'La disolución del Imperio austríaco',
        'La implantación del sufragio femenino en Europa central',
      ],
      answer: 1,
      explanation: '1848 no consiguió sus objetivos declarados, pero cambió el terreno de juego: después ningún régimen pudo gobernar ignorando a la opinión pública organizada.',
    },
    {
      id: 'revoluciones-liberales-14', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué pactó Cavour en Plombières en 1858?',
      options: [
        'La federación de los Estados italianos bajo el papado',
        'Una guerra contra Austria junto a Napoleón III a cambio de ceder Saboya y Niza',
        'La cesión de Venecia por parte de Austria sin guerra',
        'El apoyo británico a la expedición de Garibaldi',
      ],
      answer: 1,
      explanation: 'La unificación italiana fue una operación diplomática y militar del Piamonte, que administró el resultado como anexión y no como federación.',
    },
    {
      id: 'revoluciones-liberales-15', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Qué desajuste institucional caracterizó al Imperio alemán de 1871?',
      options: [
        'Un Reichstag elegido por sufragio masculino universal que no controlaba a un canciller responsable solo ante el emperador',
        'Un parlamento con plenos poderes frente a un emperador simbólico',
        'La ausencia de cualquier cámara elegida',
        'El sufragio femenino aplicado solo en Prusia',
      ],
      answer: 0,
      explanation: 'El sufragio del Reichstag era más amplio que el británico de la época. Sufragio amplio y poder parlamentario nulo podían convivir.',
    },
    {
      id: 'revoluciones-liberales-16', era: 'Edad Contemporánea', topicId: 'revoluciones-liberales', topic: 'Liberalismo y nacionalismo',
      question: '¿Cuál es la crítica de Blackbourn y Eley (1984) a la tesis del Sonderweg?',
      options: [
        'Que Alemania se democratizó antes que Francia',
        'Que el Imperio alemán no llegó a industrializarse',
        'Que presupone un camino normal a la modernidad que ningún país recorrió, y convierte 1933 en destino inscrito en 1871',
        'Que las élites agrarias prusianas nunca tuvieron poder político',
      ],
      answer: 2,
      explanation: 'La versión fuerte del Sonderweg está abandonada; persiste como descripción de un desajuste concreto, no como explicación teleológica del siglo XX alemán.',
    },
  ],
}
