import type { TopicModule } from '../types.ts'

export const guerraFria: TopicModule = {
  topic: {
    id: 'guerra-fria',
    era: 'Edad Contemporánea',
    title: 'Guerra Fría y descolonización',
    years: '1945–1991',
    country: 'Mundo',
    description: 'Cuarenta y cinco años de enfrentamiento entre dos superpotencias que nunca combatieron entre sí, y el desmantelamiento simultáneo de los imperios coloniales europeos.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '☢',
    color: 'gold',
    summary:
      'La Guerra Fría fue un conflicto global que jamás enfrentó directamente a sus dos protagonistas. Estados Unidos y la Unión Soviética se disputaron el orden mundial mediante alianzas, ayuda económica, propaganda, servicios de inteligencia y guerras libradas por terceros, bajo la sombra de un arsenal nuclear que hizo impensable la victoria militar. En paralelo, y no por casualidad, los imperios europeos se deshicieron: entre 1945 y 1975 nacieron más de setenta Estados y la mayoría del planeta cambió de estatus jurídico. Los dos procesos se cruzan constantemente, porque las superpotencias intentaron capturar la descolonización y los nuevos Estados intentaron usar la rivalidad para conseguir margen propio. Contar el período solo desde Washington y Moscú es dejar fuera a la mayor parte de sus protagonistas.',
    keyDates: [
      { date: 'Febrero de 1945', event: 'Conferencia de Yalta: acuerdos sobre la posguerra, Polonia y la entrada soviética en la guerra del Pacífico.' },
      { date: 'Marzo de 1947', event: 'Doctrina Truman: ayuda a Grecia y Turquía y formulación pública de la contención.' },
      { date: '1947–1948', event: 'Plan Marshall, independencia y partición de la India, y golpe comunista en Checoslovaquia.' },
      { date: '1948–1949', event: 'Bloqueo y puente aéreo de Berlín, creación de la OTAN y primera bomba atómica soviética.' },
      { date: '1949', event: 'Victoria comunista en China y proclamación de la República Popular.' },
      { date: '1950–1953', event: 'Guerra de Corea: primer choque armado a gran escala entre los bloques, sin enfrentamiento directo entre las superpotencias.' },
      { date: 'Abril de 1955', event: 'Conferencia de Bandung: veintinueve Estados asiáticos y africanos formulan una posición propia.' },
      { date: '1956', event: 'Discurso secreto de Jruschov, crisis de Suez y aplastamiento de la revolución húngara.' },
      { date: 'Octubre de 1962', event: 'Crisis de los misiles de Cuba: trece días al borde de la guerra nuclear.' },
      { date: '1960–1965', event: 'Independencia de la mayor parte de África subsahariana. Solo en 1960 nacen diecisiete Estados.' },
      { date: '1975', event: 'Fin de la guerra de Vietnam, revolución de los claveles y Acta Final de Helsinki.' },
      { date: '1985–1989', event: 'Gorbachov: perestroika, glásnost, retirada de Afganistán y renuncia a la doctrina Brézhnev.' },
      { date: '1989–1991', event: 'Caída del Muro, revoluciones en Europa del Este y disolución de la Unión Soviética.' },
    ],
    sections: [
      {
        title: 'De la Gran Alianza a la ruptura',
        body: [
          'La coalición que derrotó a Alemania era una alianza de conveniencia entre sistemas incompatibles, y su ruptura empezó antes de que terminara la guerra. En Yalta y Potsdam se acordó lo que se podía acordar y se aplazó lo demás, sobre todo Alemania y Polonia. La cuestión polaca es la primera en romperse: los aliados occidentales pedían elecciones libres y Stalin exigía un gobierno amigo en el corredor por el que Rusia había sido invadida dos veces en treinta años.',
          'La percepción mutua se endureció con rapidez. El telegrama largo de George Kennan desde Moscú en 1946 describió a la Unión Soviética como un poder expansivo por inseguridad histórica, al que había que contener con firmeza paciente sin necesidad de guerra. La respuesta soviética, el telegrama de Novikov, describía a Estados Unidos como una potencia que buscaba el dominio mundial aprovechando su monopolio atómico. Ninguna de las dos lecturas era absurda desde su propio punto de partida.',
          'En 1947 la ruptura se formalizó. La doctrina Truman convirtió una ayuda concreta a Grecia y Turquía en una declaración general de apoyo a los pueblos que resistieran la subyugación; el Plan Marshall ofreció trece mil millones de dólares a Europa, con una condición de coordinación económica que la URSS entendió, con razón, como un instrumento de integración occidental, y prohibió a sus satélites participar. La respuesta fue el Kominform y la soviación acelerada de Europa oriental, con el golpe de Praga de 1948 como punto de no retorno.',
          'Alemania fue el problema y la solución. La unificación de las zonas occidentales y la reforma monetaria provocaron el bloqueo soviético de Berlín en 1948, respondido con un puente aéreo de once meses que abasteció a dos millones de personas. El resultado fue la consolidación de dos Estados alemanes en 1949 y la creación de la OTAN, la primera alianza militar en tiempo de paz de la historia de Estados Unidos. El Pacto de Varsovia llegó en 1955, tras el ingreso de la República Federal en la OTAN.',
          'El año 1949 cambió la escala del conflicto. La Unión Soviética hizo estallar su primera bomba atómica, mucho antes de lo previsto en Washington, y los comunistas ganaron la guerra civil china. El documento NSC-68 de 1950 tradujo esa alarma en un programa de rearme masivo y en una lectura del conflicto como enfrentamiento global entre libertad y esclavitud, es decir, en un marco en el que cualquier lugar del planeta podía ser un frente.',
        ].join('\n\n'),
        callout:
          'Ni Washington ni Moscú planeaban una guerra en 1947. Lo que hubo fue una espiral en la que cada medida defensiva de un bando resultaba, leída desde el otro, indistinguible de una preparación ofensiva.',
      },
      {
        title: 'Bloques, Corea y el equilibrio del terror',
        body: [
          'La guerra de Corea, entre 1950 y 1953, fue el primer choque armado a gran escala del conflicto y fijó sus reglas. Una invasión del sur por el norte, una intervención estadounidense bajo bandera de Naciones Unidas aprovechando la ausencia soviética del Consejo de Seguridad, una contraofensiva que llegó hasta la frontera china y la entrada masiva de voluntarios chinos que devolvió el frente al paralelo 38. Tres millones de muertos y ninguna frontera cambiada, pero también la lección de que la escalada podía y debía detenerse.',
          'La carrera armamentística siguió su propia lógica. Estados Unidos probó la bomba de hidrógeno en 1952, la URSS en 1953; llegaron los bombarderos estratégicos, después los misiles balísticos intercontinentales tras el Sputnik de 1957, y finalmente los submarinos lanzamisiles, que hacían imposible destruir el arsenal enemigo en un primer golpe. De ahí salió la destrucción mutua asegurada: una situación en la que atacar equivalía a suicidarse y en la que, paradójicamente, la vulnerabilidad recíproca era el fundamento de la estabilidad.',
          'La muerte de Stalin en 1953 abrió una etapa distinta. Jruschov denunció el culto a la personalidad en 1956 y formuló la coexistencia pacífica, es decir, la competencia sin guerra entre sistemas. Pero la misma dirección aplastó la revolución húngara ese mismo otoño, y la contradicción entre desestalinización y control del bloque marcó todo el período, hasta la Primavera de Praga de 1968 y la doctrina Brézhnev que la justificó.',
          'La crisis de los misiles de Cuba en octubre de 1962 fue el momento en que el sistema estuvo más cerca de fallar. El despliegue soviético de misiles en la isla respondía a la inferioridad estratégica y a la defensa de un aliado amenazado tras Bahía de Cochinos; el bloqueo estadounidense y trece días de negociación al filo terminaron con la retirada de los misiles a cambio del compromiso de no invadir Cuba y de la retirada discreta de los Júpiter de Turquía. Los documentos desclasificados han mostrado que hubo incidentes que ninguno de los dos gobiernos controlaba, incluido un submarino soviético con torpedo nuclear.',
          'La consecuencia fue una arquitectura de contención de riesgos: teléfono rojo, tratado de prohibición parcial de ensayos en 1963 y tratado de no proliferación en 1968. También la certeza, en ambas capitales, de que el enfrentamiento se libraría en otros escenarios. Y esos escenarios ya estaban apareciendo en Asia y en África.',
        ].join('\n\n'),
      },
      {
        title: 'La descolonización',
        body: [
          'En 1945 los imperios europeos gobernaban a un tercio de la humanidad; en 1975 casi no quedaba nada. La guerra había sido el acelerador: destruyó el prestigio de las metrópolis, obligó a movilizar tropas y recursos coloniales prometiendo contrapartidas, y dejó a Gran Bretaña y Francia arruinadas frente a dos superpotencias que, por motivos distintos, eran retóricamente anticoloniales.',
          'Asia fue primero. La India se independizó en 1947 tras décadas de movilización del Congreso, con una partición que produjo entre uno y dos millones de muertos y catorce millones de desplazados, y cuyo trazado apresurado sigue generando conflicto. Indonesia arrancó su independencia a los Países Bajos en 1949 tras cuatro años de guerra. Indochina se convirtió en una guerra larga: el Viet Minh derrotó a Francia en Dien Bien Phu en 1954 y la partición provisional del país abrió la puerta a la intervención estadounidense.',
          'África vivió su descolonización sobre todo entre 1957 y 1965. Ghana con Nkrumah abrió el camino en 1957 y solo en 1960 nacieron diecisiete Estados. Donde había colonos europeos instalados el proceso fue violento: la guerra de Argelia, de 1954 a 1962, costó cientos de miles de muertos, empleó la tortura como método y derribó de paso a la Cuarta República francesa; Kenia, Angola, Mozambique y Rodesia siguieron caminos igualmente sangrientos. Portugal solo abandonó sus colonias tras la revolución de 1974, provocada en buena medida por el desgaste de esas guerras.',
          'La independencia política no resolvió la dependencia económica. Los nuevos Estados heredaron fronteras trazadas en Berlín, economías organizadas para exportar una o dos materias primas, administraciones escasas y ejércitos que pronto aprendieron a dar golpes. Kwame Nkrumah llamó neocolonialismo a esa situación: soberanía formal con decisiones económicas tomadas fuera. Frantz Fanon, desde la guerra de Argelia, escribió sobre la violencia colonial y sobre el riesgo de que una burguesía nacional sustituyera al colonizador sin cambiar la estructura.',
          'La conferencia de Bandung de 1955 reunió a veintinueve Estados asiáticos y africanos y formuló una posición propia: anticolonialismo, soberanía, coexistencia y desarrollo. De ahí salió el Movimiento de Países No Alineados, con Nehru, Nasser, Tito, Sukarno y Nkrumah. No fue neutralidad, sino un intento de convertir la rivalidad de las superpotencias en margen de maniobra, y a menudo funcionó: Egipto financió la presa de Asuán con dinero soviético después de que Estados Unidos retirara su oferta.',
        ].join('\n\n'),
        callout:
          'La descolonización no fue una concesión graciosa de las metrópolis ni un simple efecto de la Guerra Fría: fue el resultado de movilizaciones anticoloniales que llevaban décadas organizándose y que aprovecharon una coyuntura internacional favorable.',
      },
      {
        title: 'El Tercer Mundo como campo de batalla',
        body: [
          'Odd Arne Westad ha propuesto leer la Guerra Fría desde el sur y no desde Europa, y el cambio de foco es decisivo. En Europa la línea de 1945 no se movió y no hubo guerra; fuera de ella hubo intervenciones, golpes y conflictos que costaron millones de vidas. Irán en 1953, Guatemala en 1954, el Congo en 1960 con el asesinato de Lumumba, Chile en 1973: la lista de gobiernos derribados con participación de servicios de inteligencia occidentales es larga, y la lista soviética en su propia esfera también.',
          'Vietnam fue el caso extremo. Estados Unidos heredó el conflicto de Francia, sostuvo un régimen survietnamita sin base social propia, escaló hasta más de medio millón de soldados y lanzó sobre Indochina más bombas que todas las de la Segunda Guerra Mundial. Perdió cincuenta y ocho mil hombres, mató a entre uno y tres millones de vietnamitas y salió derrotado en 1975. El coste interno fue enorme: fractura social, crisis de confianza en las instituciones y un límite político duradero a la intervención militar.',
          'Cuba muestra la otra cara: una revolución nacional propia, alineada con Moscú después y no antes, que envió tropas a Angola y a Etiopía con una agenda internacionalista que no siempre coincidía con la soviética. La idea de que los conflictos del sur eran simples marionetas de las superpotencias no resiste el examen de los archivos: los actores locales tenían proyectos propios y con frecuencia arrastraron a sus patrocinadores más que al revés.',
          'Oriente Medio combinó descolonización, conflicto árabe-israelí y petróleo. Suez en 1956 demostró que Gran Bretaña y Francia ya no podían actuar sin permiso de Washington; las guerras de 1967 y 1973 reordenaron la región y produjeron la crisis del petróleo, que multiplicó por cuatro el precio del crudo y terminó con el largo crecimiento de posguerra en Occidente. La revolución iraní de 1979 introdujo un actor que no encajaba en ninguno de los dos bloques.',
          'China merece capítulo aparte porque rompió la bipolaridad. La ruptura chino-soviética, consumada hacia 1960 por diferencias ideológicas, de liderazgo y de frontera, llegó a producir choques armados en 1969. Y abrió la puerta al viaje de Nixon a Pekín en 1972, una de las maniobras diplomáticas más consecuentes del siglo, que convirtió un conflicto de dos en un triángulo y presionó a Moscú por dos flancos.',
        ].join('\n\n'),
      },
      {
        title: 'Distensión y Segunda Guerra Fría',
        body: [
          'La distensión de los años setenta fue un intento de administrar la rivalidad en vez de eliminarla. Incluyó los acuerdos SALT sobre armas estratégicas, el reconocimiento mutuo de las dos Alemanias impulsado por la Ostpolitik de Brandt, y el Acta Final de Helsinki de 1975, que consagró las fronteras europeas a cambio de un capítulo sobre derechos humanos que Moscú firmó pensando que era retórico.',
          'Ese capítulo tuvo consecuencias imprevistas. Grupos como la Carta 77 checoslovaca o los comités de Helsinki en la URSS usaron un texto firmado por sus propios gobiernos para exigir su cumplimiento, lo que dio a la disidencia una base legal y una visibilidad internacional que no tenía antes. Solidaridad en Polonia, con diez millones de afiliados en 1980, mostró lo que podía crecer en esa grieta, aunque fuese aplastada por la ley marcial en 1981.',
          'La distensión se rompió a finales de la década. La invasión soviética de Afganistán en diciembre de 1979 inauguró una guerra de diez años que acabó siendo el Vietnam soviético, con una insurgencia financiada por Estados Unidos, Arabia Saudí y Pakistán. Reagan aumentó el gasto militar, lanzó la Iniciativa de Defensa Estratégica y elevó el tono; el despliegue de euromisiles provocó las mayores manifestaciones pacifistas de la historia europea. En 1983 hubo al menos dos incidentes que estuvieron cerca de producir una respuesta nuclear por error.',
          'La economía soviética llevaba desde los años setenta en desaceleración estructural: un sistema de planificación incapaz de asimilar la revolución informática, una agricultura deficitaria, un gasto militar que absorbía una parte desproporcionada del producto y una dependencia creciente de la exportación de crudo, cuyo precio se hundió en 1986. Nada de esto obligaba por sí solo a un cambio de régimen, pero cerraba la posibilidad de seguir igual.',
          'Mijaíl Gorbachov llegó en 1985 con la intención de salvar el socialismo reformándolo. La perestroika buscó reestructurar la economía, la glásnost abrió la discusión pública y el nuevo pensamiento en política exterior renunció a la doctrina Brézhnev. En 1987 firmó con Reagan el tratado INF, que eliminó una categoría entera de misiles; en 1989 retiró las tropas de Afganistán y dejó claro a los gobiernos de Europa oriental que no habría tanques soviéticos para sostenerlos.',
        ].join('\n\n'),
        callout:
          'El capítulo de derechos humanos de Helsinki, que Moscú consideró un precio menor, se convirtió en el instrumento legal con el que la disidencia del Este exigió cuentas a sus propios gobiernos.',
      },
      {
        title: '1989, 1991 y el balance',
        body: [
          'El año 1989 fue una cadena de acontecimientos en pocos meses: elecciones semilibres en Polonia con victoria de Solidaridad, apertura de la frontera húngara, manifestaciones masivas en Leipzig y Praga, caída del Muro de Berlín el 9 de noviembre por una combinación de presión popular y confusión administrativa, y ejecución de Ceaucescu en diciembre. Lo excepcional no fue la caída de los regímenes sino que ocurriera casi sin sangre, y eso dependió de una decisión previa: la de no intervenir.',
          'La Unión Soviética se disolvió dos años después por un camino distinto. Las reformas liberaron fuerzas centrífugas en las repúblicas bálticas, en el Cáucaso y sobre todo en Rusia, donde Yeltsin usó la soberanía rusa como palanca contra el centro. El golpe de agosto de 1991 de un sector del aparato fracasó en tres días y liquidó lo que quedaba de autoridad del partido y del propio Gorbachov. En diciembre, los dirigentes de Rusia, Ucrania y Bielorrusia disolvieron la URSS.',
          'Por qué se hundió es una discusión abierta. Una posición atribuye el desenlace a la presión estadounidense y al gasto militar que la URSS no podía igualar. Otra subraya el agotamiento estructural del modelo desde los años setenta. Una tercera, defendida entre otros por Stephen Kotkin y Archie Brown, señala la agencia de Gorbachov: fue su decisión de no usar la fuerza lo que convirtió una crisis en una disolución pacífica, y sin ella el desenlace habría sido muy distinto.',
          'La descolonización dejó un balance igual de complejo. Se acabó con la dominación formal y nació un sistema internacional con más de ciento cincuenta Estados; también quedaron fronteras artificiales, economías dependientes, guerras civiles alimentadas desde fuera y una deuda que condicionó el desarrollo. Los estudios poscoloniales, desde Edward Said, han insistido además en la persistencia de estructuras culturales y de conocimiento que sobrevivieron a la retirada de las banderas.',
          'La Guerra Fría dejó como legado la proliferación nuclear, una red de alianzas que sigue vigente, un continente europeo dividido que tardó décadas en recomponerse y la instalación duradera de la idea de que el orden internacional se decide entre pocos. Que cuarenta y cinco años de enfrentamiento entre potencias nucleares terminaran sin un disparo entre ellas es un resultado que ninguna teoría anticipaba y que sigue exigiendo explicación.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Contención', definition: 'Estrategia formulada por Kennan en 1946: frenar con firmeza paciente la expansión soviética sin buscar la guerra, esperando la transformación interna del adversario.' },
      { term: 'Doctrina Truman', definition: 'Declaración de 1947 de apoyo estadounidense a los pueblos que resistan la subyugación. Convierte una ayuda concreta en un compromiso global.' },
      { term: 'Plan Marshall', definition: 'Programa de ayuda económica a Europa desde 1948, condicionado a la coordinación entre receptores. La URSS lo entendió como integración occidental y lo vetó a sus satélites.' },
      { term: 'Destrucción mutua asegurada', definition: 'Situación en la que ambos bandos conservan capacidad de represalia tras un primer golpe, de modo que atacar equivale a suicidarse.' },
      { term: 'Coexistencia pacífica', definition: 'Doctrina formulada por Jruschov en 1956: competencia entre sistemas sin guerra directa, compatible con el control armado del propio bloque.' },
      { term: 'Doctrina Brézhnev', definition: 'Justificación de la intervención en cualquier país socialista donde el socialismo estuviera amenazado. Formulada tras la Primavera de Praga de 1968.' },
      { term: 'Guerra por delegación', definition: 'Conflicto entre terceros armados y financiados por las superpotencias, que evita el choque directo entre ellas y traslada el coste al escenario local.' },
      { term: 'Bandung', definition: 'Conferencia de 1955 de veintinueve Estados asiáticos y africanos. Origen del Movimiento de Países No Alineados y de una agenda propia del sur.' },
      { term: 'No Alineamiento', definition: 'Posición de no integrarse en ninguno de los dos bloques. No fue neutralidad pasiva sino una forma de negociar margen frente a ambos.' },
      { term: 'Neocolonialismo', definition: 'Término de Nkrumah para la soberanía formal acompañada de dependencia económica y de decisiones tomadas fuera del país.' },
      { term: 'Distensión', definition: 'Fase de los años setenta en la que la rivalidad se administra mediante acuerdos de control de armas y reconocimiento mutuo del statu quo europeo.' },
      { term: 'Acta de Helsinki', definition: 'Acuerdo de 1975 que consagró las fronteras europeas e incluyó un capítulo de derechos humanos que la disidencia del Este utilizó como base legal.' },
      { term: 'Perestroika', definition: 'Reestructuración económica y política emprendida por Gorbachov desde 1985 para reformar el sistema soviético sin abandonarlo.' },
      { term: 'Glásnost', definition: 'Apertura informativa que permitió discutir públicamente la historia y los problemas del país. Erosionó la legitimidad del sistema más rápido de lo previsto.' },
    ],
    debates: [
      {
        question: '¿Quién provocó la Guerra Fría?',
        positions: [
          {
            school: 'Ortodoxa (historiografía estadounidense de los años cincuenta)',
            argument:
              'La expansión soviética sobre Europa oriental, la imposición de regímenes satélites y el golpe de Praga obligaron a Occidente a una respuesta defensiva que no había buscado.',
          },
          {
            school: 'Revisionista (Williams, 1959; Kolko)',
            argument:
              'Estados Unidos necesitaba mercados abiertos y estabilidad capitalista global. El Plan Marshall y el monopolio atómico fueron instrumentos de una expansión económica que Moscú percibió correctamente como amenaza.',
          },
          {
            school: 'Postrevisionista y de archivos (Gaddis; Leffler; Zubok y Pleshakov)',
            argument:
              'Hubo una espiral de percepciones en la que cada medida defensiva resultaba indistinguible de una ofensiva. Los archivos soviéticos muestran a un Stalin cauteloso y a la vez decidido a asegurar una esfera de seguridad.',
          },
        ],
        state:
          'La apertura de archivos ha desplazado la pregunta de la culpa a la de los mecanismos: cómo dos potencias sin plan de guerra construyeron un enfrentamiento de cuarenta y cinco años.',
      },
      {
        question: '¿Qué explica el fin de los imperios coloniales?',
        positions: [
          {
            school: 'Presión desde abajo',
            argument:
              'Los movimientos anticoloniales llevaban décadas organizándose, movilizaron a millones de personas y elevaron el coste de la dominación hasta hacerla inviable. La independencia se arrancó, no se concedió.',
          },
          {
            school: 'Cálculo metropolitano (Darwin; Louis y Robinson)',
            argument:
              'Las metrópolis, arruinadas y presionadas por Washington, decidieron que el imperio formal ya no compensaba y buscaron conservar la influencia económica traspasando el coste administrativo.',
          },
          {
            school: 'Coyuntura internacional (Westad, 2005)',
            argument:
              'La Guerra Fría creó un espacio en el que los movimientos anticoloniales encontraron patrocinadores, foros y legitimidad, y a la vez convirtió sus países en escenarios de una disputa ajena.',
          },
        ],
        state:
          'Predomina una explicación combinada que atiende a la iniciativa anticolonial sin ignorar el contexto internacional, y que estudia cada caso por separado en vez de buscar un patrón único.',
      },
      {
        question: '¿Por qué se hundió la Unión Soviética?',
        positions: [
          {
            school: 'Victoria de la presión occidental',
            argument:
              'El rearme de los años ochenta y la Iniciativa de Defensa Estratégica impusieron a Moscú una carrera que su economía no podía sostener, y la obligaron a reformas que descontrolaron el sistema.',
          },
          {
            school: 'Agotamiento estructural',
            argument:
              'El modelo llevaba desde los años setenta en desaceleración: planificación incapaz de asimilar la informática, agricultura deficitaria y dependencia del precio del crudo, que se hundió en 1986.',
          },
          {
            school: 'Agencia de Gorbachov (Brown, 1996; Kotkin, 2001)',
            argument:
              'La crisis no imponía el desenlace. Fue la decisión de reformar y de no usar la fuerza, en el bloque y en el propio país, la que convirtió un declive en una disolución pacífica.',
          },
        ],
        state:
          'La historiografía tiende a combinar el declive estructural con la contingencia de las decisiones de 1985 a 1991, y a rechazar tanto el determinismo económico como el relato de una victoria planificada.',
      },
    ],
    sources: [
      { author: 'George Kennan', title: 'Telegrama largo y artículo Las fuentes de la conducta soviética', year: '1946–1947', kind: 'primaria', note: 'Formulación original de la contención por el diplomático que después criticó su militarización.' },
      { author: 'Winston Churchill', title: 'Discurso del telón de acero en Fulton', year: '1946', kind: 'primaria', note: 'Fija en el lenguaje público la imagen de una Europa dividida en dos.' },
      { author: 'Harry Truman', title: 'Mensaje al Congreso sobre Grecia y Turquía', year: '1947', kind: 'primaria', note: 'Texto fundacional de la doctrina Truman y de la lectura global del conflicto.' },
      { author: 'Consejo de Seguridad Nacional de Estados Unidos', title: 'NSC-68', year: '1950', kind: 'primaria', note: 'Documento interno que propone el rearme masivo y define el conflicto en términos morales absolutos.' },
      { author: 'Conferencia Asiático-Africana', title: 'Comunicado final de Bandung', year: '1955', kind: 'primaria', note: 'Diez principios de coexistencia y anticolonialismo formulados por los propios países del sur.' },
      { author: 'Nikita Jruschov', title: 'Discurso secreto ante el XX Congreso', year: '1956', kind: 'primaria', note: 'Denuncia del culto a la personalidad. Abrió la desestalinización y desestabilizó al bloque.' },
      { author: 'Frantz Fanon', title: 'Los condenados de la tierra', year: '1961', kind: 'primaria', note: 'Análisis de la violencia colonial y advertencia sobre una burguesía nacional que sustituya al colonizador sin cambiar la estructura.' },
      { author: 'Kwame Nkrumah', title: 'Neocolonialismo, última etapa del imperialismo', year: '1965', kind: 'primaria', note: 'Formula el concepto de soberanía formal con dependencia económica real.' },
      { author: 'Conferencia sobre Seguridad y Cooperación en Europa', title: 'Acta Final de Helsinki', year: '1975', kind: 'primaria', note: 'Fronteras a cambio de derechos humanos. Su tercera cesta se convirtió en herramienta de la disidencia.' },
      { author: 'Václav Havel', title: 'El poder de los sin poder', year: '1978', kind: 'primaria', note: 'Ensayo sobre la vida en la mentira bajo el socialismo real y sobre la resistencia cotidiana.' },
      { author: 'Mijaíl Gorbachov', title: 'Perestroika', year: '1987', kind: 'primaria', note: 'Exposición del programa reformista por su autor, con la intención declarada de salvar el socialismo.' },
      { author: 'William Appleman Williams', title: 'La tragedia de la diplomacia norteamericana', year: '1959', kind: 'estudio', note: 'Origen de la corriente revisionista sobre el papel económico de Estados Unidos en el conflicto.' },
      { author: 'Edward Said', title: 'Orientalismo', year: '1978', kind: 'estudio', note: 'Analiza cómo el saber sobre Oriente construyó y sostuvo la dominación. Base de los estudios poscoloniales.' },
      { author: 'John Lewis Gaddis', title: 'Estados Unidos y los orígenes de la Guerra Fría', year: '1972', kind: 'estudio', note: 'Síntesis postrevisionista sobre las percepciones mutuas y la dinámica de la espiral.' },
      { author: 'Melvyn Leffler', title: 'A Preponderance of Power', year: '1992', kind: 'estudio', note: 'Estudio de la seguridad nacional estadounidense que reconstruye las decisiones sin atribuirlas a una sola causa.' },
      { author: 'Archie Brown', title: 'El factor Gorbachov', year: '1996', kind: 'estudio', note: 'Defiende el peso decisivo de las decisiones del último dirigente soviético en el desenlace pacífico.' },
      { author: 'Vladislav Zubok y Constantine Pleshakov', title: 'Inside the Kremlins Cold War', year: '1996', kind: 'estudio', note: 'Reconstrucción de la política soviética con archivos abiertos, desde Stalin hasta Jruschov.' },
      { author: 'Stephen Kotkin', title: 'Armageddon Averted', year: '2001', kind: 'estudio', note: 'Explica la disolución soviética como un colapso institucional relativamente ordenado y no como una revolución.' },
      { author: 'Odd Arne Westad', title: 'La Guerra Fría global', year: '2005', kind: 'estudio', note: 'Desplaza el centro del relato al Tercer Mundo, donde el conflicto costó millones de vidas.' },
      { author: 'Tony Judt', title: 'Postguerra', year: '2005', kind: 'estudio', note: 'Historia de Europa desde 1945 que integra las dos mitades del continente en un solo relato.' },
      { author: 'Frederick Cooper', title: 'Africa since 1940', year: '2002', kind: 'estudio', note: 'Descolonización africana desde las sociedades africanas, no desde las metrópolis.' },
      { author: 'Eric Hobsbawm', title: 'Historia del siglo XX', year: '1994', kind: 'estudio', note: 'Síntesis del siglo corto con la Guerra Fría y la descolonización tratadas como procesos del mismo período.' },
    ],
  },
  questions: [
    {
      id: 'guerra-fria-1', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿En qué consistía la contención formulada por Kennan en 1946?',
      options: [
        'En atacar preventivamente a la URSS aprovechando el monopolio atómico',
        'En frenar con firmeza paciente la expansión soviética sin buscar la guerra, esperando su transformación interna',
        'En dividir Alemania en cuatro zonas de ocupación permanentes',
        'En retirar las tropas estadounidenses de Europa',
      ],
      answer: 1,
      explanation: 'El propio Kennan criticó después la militarización de su idea en documentos como el NSC-68.',
    },
    {
      id: 'guerra-fria-2', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Por qué prohibió la URSS a sus satélites participar en el Plan Marshall?',
      options: [
        'Porque la ayuda estaba reservada a los países vencedores',
        'Porque su condición de coordinación económica funcionaba como instrumento de integración occidental',
        'Porque la cantidad ofrecida era simbólica',
        'Porque exigía la disolución previa de los partidos comunistas',
      ],
      answer: 1,
      explanation: 'La respuesta fue el Kominform y la sovietización acelerada de Europa oriental, con el golpe de Praga de 1948 como punto de no retorno.',
    },
    {
      id: 'guerra-fria-3', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué acontecimientos de 1949 cambiaron la escala del conflicto?',
      options: [
        'La guerra de Corea y la creación del Pacto de Varsovia',
        'La primera bomba atómica soviética y la victoria comunista en China',
        'La crisis de Suez y la revolución húngara',
        'El lanzamiento del Sputnik y la construcción del Muro',
      ],
      answer: 1,
      explanation: 'Esa alarma se tradujo en el NSC-68 de 1950, que definió el conflicto como global y convirtió cualquier lugar del planeta en un frente posible.',
    },
    {
      id: 'guerra-fria-4', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué lección dejó la guerra de Corea sobre la dinámica del conflicto?',
      options: [
        'Que las superpotencias combatirían directamente en cuanto se presentara la ocasión',
        'Que la escalada podía y debía detenerse: tres millones de muertos y ninguna frontera cambiada',
        'Que las armas nucleares se usarían de forma rutinaria',
        'Que Naciones Unidas era capaz de imponer la paz por sí sola',
      ],
      answer: 1,
      explanation: 'La entrada de voluntarios chinos devolvió el frente al paralelo 38 y fijó las reglas implícitas del enfrentamiento.',
    },
    {
      id: 'guerra-fria-5', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué es la destrucción mutua asegurada?',
      options: [
        'El plan de defensa civil ante un ataque nuclear',
        'La situación en la que ambos bandos conservan capacidad de represalia, de modo que atacar equivale a suicidarse',
        'El tratado que prohibió los ensayos nucleares en la atmósfera',
        'La doctrina de primer golpe adoptada por la OTAN en 1957',
      ],
      answer: 1,
      explanation: 'La vulnerabilidad recíproca, garantizada sobre todo por los submarinos lanzamisiles, se convirtió paradójicamente en fundamento de la estabilidad.',
    },
    {
      id: 'guerra-fria-6', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Cómo se resolvió la crisis de los misiles de Cuba de 1962?',
      options: [
        'Con la invasión estadounidense de la isla',
        'Con la retirada de los misiles a cambio del compromiso de no invadir Cuba y de la retirada discreta de los Júpiter de Turquía',
        'Con la entrega de Cuba a la administración de Naciones Unidas',
        'Con un ultimátum soviético que Estados Unidos aceptó sin contrapartidas',
      ],
      answer: 1,
      explanation: 'Los documentos desclasificados muestran incidentes que ningún gobierno controlaba, incluido un submarino soviético con torpedo nuclear.',
    },
    {
      id: 'guerra-fria-7', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué factor aceleró la descolonización tras 1945?',
      options: [
        'La decisión de las Naciones Unidas de disolver los imperios por votación',
        'La guerra, que destruyó el prestigio y los recursos de las metrópolis y movilizó a las colonias con promesas de contrapartidas',
        'La retirada voluntaria de Gran Bretaña de todas sus posesiones en 1946',
        'La prohibición del comercio colonial impuesta por el Plan Marshall',
      ],
      answer: 1,
      explanation: 'A eso se sumó que las dos superpotencias emergentes eran, por motivos distintos, retóricamente anticoloniales.',
    },
    {
      id: 'guerra-fria-8', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué caracterizó a las descolonizaciones más violentas?',
      options: [
        'La ausencia de partidos nacionalistas organizados',
        'La presencia de colonos europeos instalados, como en Argelia, Kenia o las colonias portuguesas',
        'La falta de interés económico de la metrópoli',
        'La intervención directa de la Unión Soviética',
      ],
      answer: 1,
      explanation: 'La guerra de Argelia costó cientos de miles de muertos, empleó la tortura como método y derribó de paso a la Cuarta República francesa.',
    },
    {
      id: 'guerra-fria-9', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué designa el neocolonialismo en la formulación de Nkrumah?',
      options: [
        'La reconquista militar de las antiguas colonias',
        'La soberanía formal acompañada de dependencia económica y decisiones tomadas fuera del país',
        'La ocupación de África por las superpotencias',
        'El regreso de administradores europeos como asesores técnicos',
      ],
      answer: 1,
      explanation: 'Los nuevos Estados heredaron fronteras trazadas en Berlín, economías de una o dos materias primas y administraciones escasas.',
    },
    {
      id: 'guerra-fria-10', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué fue el Movimiento de Países No Alineados?',
      options: [
        'Una alianza militar alternativa a la OTAN y al Pacto de Varsovia',
        'Un intento de convertir la rivalidad de las superpotencias en margen de maniobra propio, surgido de Bandung',
        'Una organización de países neutrales europeos',
        'El bloque de países que rechazaron la ayuda económica de ambos bandos',
      ],
      answer: 1,
      explanation: 'No fue neutralidad pasiva. Egipto, por ejemplo, financió la presa de Asuán con dinero soviético tras la retirada de la oferta estadounidense.',
    },
    {
      id: 'guerra-fria-11', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué aporta la lectura de la Guerra Fría propuesta por Westad?',
      options: [
        'Que el conflicto se decidió íntegramente en Europa',
        'Que hay que leerlo desde el sur, donde hubo intervenciones y guerras que costaron millones de vidas mientras la línea europea no se movía',
        'Que las superpotencias controlaban por completo a sus aliados locales',
        'Que la descolonización fue independiente del enfrentamiento bipolar',
      ],
      answer: 1,
      explanation: 'Los archivos muestran además que los actores locales tenían proyectos propios y con frecuencia arrastraron a sus patrocinadores.',
    },
    {
      id: 'guerra-fria-12', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué consecuencia tuvo la ruptura chino-soviética?',
      options: [
        'La entrada de China en el Pacto de Varsovia',
        'La quiebra de la bipolaridad, con choques armados en 1969 y el viaje de Nixon a Pekín en 1972',
        'La unificación de los partidos comunistas asiáticos',
        'El fin de la ayuda soviética a Vietnam del Norte',
      ],
      answer: 1,
      explanation: 'Convirtió un conflicto de dos en un triángulo y permitió presionar a Moscú por dos flancos.',
    },
    {
      id: 'guerra-fria-13', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué efecto imprevisto tuvo el Acta Final de Helsinki de 1975?',
      options: [
        'Provocó la retirada soviética de Europa oriental',
        'Su capítulo de derechos humanos dio a la disidencia una base legal firmada por sus propios gobiernos',
        'Obligó a disolver el Pacto de Varsovia',
        'Impuso elecciones libres en Polonia',
      ],
      answer: 1,
      explanation: 'La Carta 77 y los comités de Helsinki lo usaron para exigir el cumplimiento de un texto que Moscú había firmado creyéndolo retórico.',
    },
    {
      id: 'guerra-fria-14', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué problemas económicos arrastraba la URSS desde los años setenta?',
      options: [
        'Una hiperinflación provocada por el gasto en consumo',
        'Planificación incapaz de asimilar la informática, agricultura deficitaria, gasto militar desproporcionado y dependencia del precio del crudo',
        'La pérdida de todos sus mercados exteriores',
        'La ausencia de industria pesada',
      ],
      answer: 1,
      explanation: 'El hundimiento del precio del petróleo en 1986 cerró la vía de seguir igual, aunque por sí solo no imponía un cambio de régimen.',
    },
    {
      id: 'guerra-fria-15', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué hizo posible que las revoluciones de 1989 fueran casi incruentas?',
      options: [
        'La mediación de Naciones Unidas en cada país',
        'La decisión previa de Gorbachov de no sostener con tropas soviéticas a los gobiernos de Europa oriental',
        'La disolución del Pacto de Varsovia en 1988',
        'La presencia de tropas de la OTAN en la frontera',
      ],
      answer: 1,
      explanation: 'La renuncia a la doctrina Brézhnev fue el cambio decisivo: lo excepcional no fue la caída de los regímenes sino que ocurriera sin sangre.',
    },
    {
      id: 'guerra-fria-16', era: 'Edad Contemporánea', topicId: 'guerra-fria', topic: 'Guerra Fría y descolonización',
      question: '¿Qué defienden Archie Brown y Stephen Kotkin sobre el hundimiento soviético?',
      options: [
        'Que fue consecuencia inevitable del gasto militar impuesto por Reagan',
        'Que la crisis no imponía el desenlace y fue la decisión de reformar y de no usar la fuerza lo que produjo una disolución pacífica',
        'Que el golpe de agosto de 1991 fue orquestado desde el exterior',
        'Que el sistema era económicamente viable hasta 1990',
      ],
      answer: 1,
      explanation: 'La historiografía tiende a combinar declive estructural y contingencia, rechazando tanto el determinismo económico como el relato de una victoria planificada.',
    },
  ],
}
