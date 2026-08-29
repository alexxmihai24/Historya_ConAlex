import type { TopicModule } from '../types.ts'

export const absolutismo: TopicModule = {
  topic: {
    id: 'absolutismo',
    era: 'Edad Moderna',
    title: 'El Estado moderno y el absolutismo',
    years: '1576–1715',
    country: 'Europa',
    description: 'Cómo unas monarquías compuestas y endeudadas construyeron administración, ejército e impuestos sin dejar de negociar con las élites.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚜',
    color: 'blue',
    summary:
      'Ningún rey europeo de los siglos XVI y XVII gobernó territorios homogéneos ni mandó sobre súbditos iguales. Mandó sobre agregados de reinos con fueros propios, adquiridos por herencia, matrimonio o conquista, en los que cada provincia negociaba sus impuestos y cada tribunal defendía su jurisdicción. Sobre ese material se construyó lo que la historiografía llamó absolutismo: más ejército, más impuestos, más oficiales y una teoría de la soberanía que situaba al monarca por encima de la ley positiva. El problema es que la palabra promete un poder que ningún archivo confirma. La discusión de las últimas décadas no consiste en decidir si Luis XIV era fuerte o débil, sino en entender qué clase de poder era el suyo: uno que crecía precisamente porque compraba, cooptaba y repartía beneficios entre las élites que decía someter.',
    keyDates: [
      { date: '1576', event: 'Jean Bodin publica *Los seis libros de la República* y define la soberanía como poder perpetuo y absoluto.' },
      { date: '1624–1642', event: 'Ministerio de Richelieu: razón de Estado, intendentes y entrada en la guerra de los Treinta Años.' },
      { date: '1640', event: 'Rebeliones simultáneas de Cataluña y Portugal contra la Monarquía Hispánica.' },
      { date: '1648–1653', event: 'La Fronda: parlamentarios y grandes se levantan contra la fiscalidad de guerra.' },
      { date: '1651', event: 'Hobbes publica el *Leviatán*: la soberanía nace de un pacto, no del derecho divino.' },
      { date: '1661', event: 'Muerte de Mazarino. Luis XIV asume el gobierno personal y no nombra primer ministro.' },
      { date: '1665–1683', event: 'Colbert al frente de las finanzas: manufacturas reales, aranceles y armada.' },
      { date: '1682', event: 'La corte se instala en Versalles de forma permanente.' },
      { date: '1685', event: 'Edicto de Fontainebleau: revocación del Edicto de Nantes y emigración hugonota.' },
      { date: '1688–1689', event: 'Revolución Gloriosa y Bill of Rights: en Inglaterra la corona queda bajo el Parlamento.' },
      { date: '1700–1714', event: 'Guerra de Sucesión española; los Decretos de Nueva Planta suprimen los fueros de la Corona de Aragón.' },
      { date: '1715', event: 'Muere Luis XIV tras cincuenta y cuatro años de gobierno personal y una hacienda arruinada.' },
    ],
    sections: [
      {
        title: 'Monarquías compuestas, no Estados',
        body: [
          'La unidad política característica de la Europa moderna no es el Estado nacional sino lo que John Elliott llamó en 1992 la monarquía compuesta: un conjunto de reinos, principados y señoríos reunidos bajo un mismo soberano pero conservando cada uno sus leyes, cortes, monedas, aduanas y privilegios. Carlos V reinaba en Castilla, Aragón, Nápoles, los Países Bajos y el Imperio con títulos distintos y obligaciones distintas en cada uno. Los Estuardo heredaron en 1603 tres reinos con tres iglesias diferentes. Incluso Francia, la más compacta, distinguía entre países de estados, que negociaban su contribución, y países de elección, donde la corona la fijaba.',
          'Elliott distinguió dos formas de unión. La *aeque principaliter* mantenía intactas las instituciones del territorio incorporado, como Aragón dentro de la Monarquía Hispánica. La unión accesoria asimilaba el territorio al núcleo, como Gales a Inglaterra en 1536. La primera compraba lealtad al precio de la ineficacia fiscal; la segunda ganaba recursos al precio de la resistencia. Casi todas las crisis del siglo XVII nacen del intento de convertir la primera en la segunda.',
          'Ese intento tiene nombre y fecha en la Monarquía Hispánica: la Unión de Armas propuesta por el conde-duque de Olivares en 1625, que pedía a cada reino aportar soldados y dinero en proporción a su población. Chocó con la lógica pactista de Cataluña y Portugal y desembocó en las dos rebeliones de 1640. Portugal se independizó; Cataluña volvió en 1652 con sus constituciones formalmente intactas.',
          'La conclusión historiográfica importa: hablar de construcción del Estado moderno como si un centro racionalizador venciera a unas periferias arcaicas describe mal el proceso. Lo que hubo fue una negociación permanente en la que el centro obtenía recursos a cambio de confirmar privilegios, repartir cargos y respetar jurisdicciones. Cuando dejaba de pagar ese precio, estallaban revueltas.',
        ].join('\n\n'),
        callout:
          'La monarquía compuesta no era una anomalía en el camino hacia el Estado nacional: era la forma normal de organizar el poder en Europa entre 1500 y 1700.',
      },
      {
        title: 'La guerra como motor fiscal',
        body: [
          'Lo que empujó el crecimiento del aparato estatal no fue una idea de orden sino una necesidad de dinero, y la necesidad venía de la guerra. Michael Roberts formuló en 1955 la tesis de la revolución militar: entre 1560 y 1660 el paso de la caballería pesada a la infantería con armas de fuego, la disciplina de las descargas por hileras, el aumento del tamaño de los ejércitos y la complejidad de la logística obligaron a los Estados a recaudar y administrar como nunca antes.',
          'Geoffrey Parker corrigió la tesis en 1976 y 1988 desplazando el peso hacia la fortificación abaluartada, la *trace italienne*, que hizo interminables los asedios y multiplicó los efectivos necesarios para sitiar y guarnecer plazas. Su ejemplo mayor es el ejército de Flandes, que pasó de unos diez mil hombres a más de ochenta mil. Jeremy Black replicó en 1991 que los cambios decisivos fueron posteriores, entre 1660 y 1760, con los ejércitos permanentes de la era de Luis XIV.',
          'Sea cual sea la cronología preferida, la consecuencia fiscal es la misma. Los ingresos de la corona francesa se multiplicaron por más de tres entre 1600 y 1660 y la mayor parte se fue en guerra y en servicio de deuda. Para recaudar sin administración propia, las monarquías recurrieron a tres atajos: arrendar los impuestos a financieros privados, vender oficios públicos con carácter hereditario y endeudarse mediante juros y rentas.',
          'La venalidad merece atención porque explica los límites del poder real. Al vender un cargo, la corona cobraba por adelantado y creaba a la vez un propietario: el oficial no podía ser destituido, transmitía su puesto a sus herederos y defendía su patrimonio frente al rey. Francia llegó a tener decenas de miles de oficios venales. El absolutismo francés se financió enajenando su propia capacidad de mandar sobre los administradores.',
          'La respuesta a ese bloqueo fueron los comisarios revocables, y sobre todo los intendentes, agentes enviados a las provincias con poderes amplios en justicia, policía y hacienda, que podían ser removidos porque no habían comprado el cargo. Su generalización desde Richelieu y su consolidación bajo Colbert marcan la diferencia real entre la administración del siglo XVI y la del XVIII.',
        ].join('\n\n'),
      },
      {
        title: 'La teoría: soberanía, razón de Estado y derecho divino',
        body: [
          'Jean Bodin escribió *Los seis libros de la República* en 1576, en plena guerra civil francesa de religión, y su objetivo era práctico: encontrar un principio de autoridad que ninguna facción pudiera discutir. Definió la soberanía como el poder perpetuo y absoluto de una república, indivisible y no delegado, cuya marca principal es dar la ley sin el consentimiento de nadie. Pero el propio Bodin sometía al soberano a la ley divina y natural y a las leyes fundamentales del reino, y le negaba el derecho a confiscar la propiedad de los súbditos sin causa.',
          'Ese matiz es central: absoluto significaba *legibus solutus*, liberado de la ley positiva anterior, no ilimitado ni arbitrario. Un rey absoluto podía legislar sin las Cortes, pero no podía cambiar la ley de sucesión, ni gravar sin causa justa, ni disponer del dominio de la corona.',
          'La razón de Estado, difundida por Giovanni Botero en 1589 frente a la lectura escandalosa de Maquiavelo, ofreció la justificación operativa: hay actos que la moral privada condena y la conservación del Estado exige. Richelieu la practicó al aliarse con los príncipes protestantes contra los Habsburgo católicos mientras sometía a los hugonotes franceses.',
          'La formulación teológica más acabada llegó tarde, con Bossuet: el poder real es sagrado, paternal, absoluto y sometido a la razón, y el rey responde solo ante Dios. Conviene notar que se publicó en 1709, cuando el modelo entraba en crisis. Frente a ella, Hobbes había fundado en 1651 la soberanía absoluta en un pacto entre individuos temerosos, no en la voluntad divina: una justificación laica que resultaría mucho más peligrosa a largo plazo, porque lo que se funda en un pacto puede discutirse en sus términos.',
        ].join('\n\n'),
        callout:
          'Absoluto quería decir liberado de la ley positiva anterior, no ilimitado. Ningún teórico del siglo XVII defendió que el rey pudiera hacer literalmente lo que quisiera.',
      },
      {
        title: 'Luis XIV: la imagen, la corte y el precio',
        body: [
          'Luis XIV asumió el gobierno personal en 1661, a la muerte de Mazarino, y no volvió a nombrar primer ministro. Gobernó con consejos reducidos y con secretarios de Estado salidos de familias de servicio, no de la alta nobleza. Esa fue la decisión más eficaz de su reinado: separar el honor, que siguió en manos de los grandes, del poder efectivo, que pasó a manos de administradores dependientes de la voluntad real.',
          'Versalles fue el instrumento de esa separación. Norbert Elias interpretó en *La sociedad cortesana* que la etiqueta convertía a la nobleza en un grupo dependiente, obligado a gastar en apariencia y a competir por signos de favor que solo el rey distribuía. La lectura tiene un límite documentado: no toda la nobleza vivía en Versalles, muchas casas mantuvieron poder provincial intacto y la corte era también un mercado de cargos y pensiones del que los grandes salían enriquecidos.',
          'Peter Burke mostró en 1992 que la imagen del Rey Sol fue una fabricación deliberada y coordinada: academias, medallas conmemorativas, retratos, ballets, historiografía oficial y una Petite Académie encargada de supervisar el programa simbólico. Estudiar la propaganda como fuente no consiste en desenmascarar la mentira, sino en medir el esfuerzo que costó producir la apariencia de un poder sin fisuras.',
          'El coste real fue enorme. Colbert intentó financiar la máquina con mercantilismo: manufacturas reales, compañías privilegiadas, aranceles proteccionistas, marina de guerra y reglamentos minuciosos sobre la calidad de los tejidos. Funcionó mientras hubo paz relativa; las guerras continuas desde 1672 devoraron los ingresos, obligaron a crear nuevos impuestos que alcanzaban por primera vez a los privilegiados, como la capitación de 1695 y el diezmo real de 1710, y dejaron una deuda que ningún sucesor logró enjugar.',
          'La revocación del Edicto de Nantes en 1685 resume el modelo y su falla. Buscaba un reino de una sola fe como condición de obediencia; produjo la emigración de entre doscientos y trescientos mil hugonotes, muchos de ellos artesanos y comerciantes cualificados, que llevaron sus oficios y su propaganda antifrancesa a Holanda, Inglaterra, Brandeburgo y Suiza. Fue una demostración de fuerza que salió cara.',
        ].join('\n\n'),
      },
      {
        title: 'El debate: ¿existió el absolutismo?',
        body: [
          'La discusión clásica enfrentó en los años cuarenta y cincuenta a Boris Porchnev y a Roland Mousnier a propósito de las revueltas populares francesas anteriores a la Fronda. Porchnev, desde el marxismo soviético, las leyó como lucha de clases: el Estado absoluto era el instrumento de una nobleza feudal amenazada, y las revueltas, resistencia popular contra la fiscalidad de esa nobleza. Mousnier respondió que la sociedad del Antiguo Régimen no se ordenaba por clases sino por órdenes y estatus, y que las revueltas fueron dirigidas por notables locales y agrupaban verticalmente a toda la sociedad provincial contra los agentes fiscales del centro.',
          'Perry Anderson propuso en 1974 una síntesis marxista distinta: el Estado absolutista fue un aparato de dominación feudal redesplegado y recolocado, un mecanismo para mantener la extracción del excedente campesino cuando la servidumbre había desaparecido en Occidente. Su modelo tiene el mérito de comparar Oriente y Occidente y el defecto de deducir la política de la estructura económica.',
          'El giro revisionista llegó con los estudios provinciales. William Beik demostró en 1985, estudiando el Languedoc, que la monarquía no venció a las élites regionales: se alió con ellas. La corona obtuvo dinero y obediencia; los notables obtuvieron cargos, exenciones, control del gobierno local y respaldo armado contra los de abajo. Beik llamó a eso colaboración social, y la fórmula ha hecho fortuna.',
          'Nicholas Henshall llevó el argumento al extremo en 1992: el absolutismo es un mito historiográfico construido en el siglo XIX. Los contemporáneos distinguían entre monarquía absoluta y monarquía despótica o tiránica, y entendían la primera como gobierno legítimo que respeta la propiedad, la religión y los cuerpos intermedios. La supuesta oposición entre un absolutismo continental y un constitucionalismo inglés sería una construcción retrospectiva.',
          'El estado actual de la cuestión es matizado. Casi nadie sostiene ya que el absolutismo fuera un poder ilimitado, y el término suele emplearse entre comillas o sustituirse por Estado fiscal-militar, siguiendo a John Brewer. Pero negar toda diferencia entre Francia e Inglaterra en 1700 es exagerar en sentido contrario: la Revolución Gloriosa produjo un régimen en el que los impuestos requerían aprobación parlamentaria anual, y esa diferencia institucional tuvo consecuencias fiscales y crediticias enormes.',
        ].join('\n\n'),
        callout:
          'Paradoja de Brewer: la Inglaterra parlamentaria recaudaba per cápita más que la Francia absoluta. El consentimiento resultó ser una tecnología fiscal superior a la orden.',
      },
      {
        title: 'Otras vías europeas',
        body: [
          'Inglaterra siguió un camino divergente por razones en buena medida fiscales. Los Estuardo intentaron gobernar sin Parlamento y recaudar por medios discutidos, como el ship money de Carlos I; el resultado fue una guerra civil, una república, una restauración y finalmente la Revolución Gloriosa de 1688-1689. El Bill of Rights prohibió mantener ejército en tiempo de paz y recaudar impuestos sin consentimiento del Parlamento. La monarquía perdió autonomía y ganó crédito: la fundación del Banco de Inglaterra en 1694 y la deuda pública garantizada por el Parlamento permitieron financiar guerras a un interés que Francia no podía igualar.',
          'La Monarquía Hispánica recorrió el camino inverso. Tras la Guerra de Sucesión, los Decretos de Nueva Planta suprimieron entre 1707 y 1716 las instituciones propias de Aragón, Valencia, Mallorca y Cataluña e impusieron el modelo castellano, con capitanes generales, audiencias e intendentes. Fue la conversión de una monarquía compuesta en una unión accesoria, hecha por derecho de conquista.',
          'La república nobiliaria polaco-lituana muestra el extremo opuesto. La elección del rey por la nobleza, los pactos conventa y el liberum veto, que permitía a un solo diputado anular la dieta entera, produjeron un Estado incapaz de recaudar y de mantener un ejército. Entre 1772 y 1795 sus vecinos se la repartieron. La debilidad institucional no fue una alternativa liberal al absolutismo: fue la condición previa de la desaparición.',
          'Rusia ilustra una tercera vía. Pedro I impuso desde 1698 una occidentalización coercitiva: nueva capital, tabla de rangos que ligaba el estatus nobiliario al servicio del Estado, impuesto por alma, ejército permanente y subordinación de la Iglesia a un Sínodo. Todo ello sobre una servidumbre campesina que se endureció al mismo tiempo. Anderson subrayó la paradoja: en Europa oriental la construcción del Estado moderno coincidió con la consolidación, no con la desaparición, de la servidumbre.',
          'Comparadas, las cuatro trayectorias desmienten cualquier relato de camino único. Lo que decidió el resultado no fue la voluntad de los reyes sino la relación concreta entre corona, élites terratenientes, ciudades y presión militar exterior en cada territorio.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Monarquía compuesta', definition: 'Conjunto de reinos con leyes e instituciones propias bajo un mismo soberano. Categoría de John Elliott para describir la forma normal del poder moderno.' },
      { term: 'Aeque principaliter', definition: 'Unión que conserva intactas las instituciones del territorio incorporado, frente a la unión accesoria que lo asimila al núcleo.' },
      { term: 'Soberanía', definition: 'En Bodin, poder perpetuo, absoluto e indivisible de dar la ley sin consentimiento. Sometido, aun así, a la ley divina, natural y fundamental.' },
      { term: 'Legibus solutus', definition: 'Liberado de la ley positiva anterior. Sentido técnico de «absoluto»: no equivale a poder ilimitado ni arbitrario.' },
      { term: 'Razón de Estado', definition: 'Doctrina que autoriza actos contrarios a la moral privada si la conservación del Estado lo exige. Difundida por Botero frente a Maquiavelo.' },
      { term: 'Venalidad de oficios', definition: 'Venta de cargos públicos hereditarios. Financiaba a la corona a corto plazo y creaba funcionarios propietarios inamovibles.' },
      { term: 'Intendente', definition: 'Comisario revocable enviado a provincia con poderes de justicia, policía y hacienda. Instrumento para sortear a los oficiales venales.' },
      { term: 'Fronda', definition: 'Ciclo de revueltas francesas de 1648-1653, encabezado por parlamentarios y grandes contra la fiscalidad de guerra y los comisarios.' },
      { term: 'Mercantilismo', definition: 'Política de balanza comercial favorable mediante aranceles, manufacturas privilegiadas y marina. En Francia, colbertismo.' },
      { term: 'Sociedad de órdenes', definition: 'Modelo de Mousnier: la jerarquía social se ordena por estatus y honor reconocidos jurídicamente, no por posición económica.' },
      { term: 'Colaboración social', definition: 'Tesis de Beik: la corona no derrotó a las élites provinciales, pactó con ellas repartiendo cargos, exenciones y respaldo armado.' },
      { term: 'Estado fiscal-militar', definition: 'Concepto de John Brewer: aparato de recaudación, deuda y burocracia levantado para sostener la guerra continua.' },
      { term: 'Trace italienne', definition: 'Fortificación abaluartada de muros bajos y gruesos. Para Parker, causa principal del aumento del tamaño de los ejércitos.' },
      { term: 'Liberum veto', definition: 'Facultad de un solo diputado polaco de anular la dieta entera. Bloqueó la fiscalidad y el ejército hasta las particiones.' },
    ],
    debates: [
      {
        question: '¿Existió realmente el absolutismo?',
        positions: [
          {
            school: 'Lectura tradicional (Mousnier y la historiografía institucional)',
            argument:
              'Entre 1600 y 1715 se consolidó un tipo de monarquía con soberanía indivisible, ejército permanente, fiscalidad propia y administración comisarial que rompió con el gobierno pactista medieval.',
          },
          {
            school: 'Revisionismo (Nicholas Henshall, 1992)',
            argument:
              'El absolutismo es una etiqueta del siglo XIX. Los contemporáneos oponían monarquía absoluta a despotismo, no a constitucionalismo, y ningún rey gobernó sin cuerpos intermedios, privilegios ni negociación.',
          },
        ],
        state:
          'Predomina una posición intermedia: el término se conserva con comillas o se sustituye por Estado fiscal-militar, pero se admite que la diferencia institucional entre la Francia de 1700 y la Inglaterra posterior a 1689 fue real y tuvo consecuencias fiscales medibles.',
      },
      {
        question: '¿A quién servía el Estado absoluto?',
        positions: [
          {
            school: 'Reacción feudal (Porchnev, 1948)',
            argument:
              'El Estado absoluto fue el instrumento de una nobleza feudal amenazada por el desarrollo burgués y por las revueltas populares, a las que reprimió con fiscalidad y ejército.',
          },
          {
            school: 'Sociedad de órdenes (Mousnier)',
            argument:
              'La sociedad no se ordenaba por clases sino por estatus y fidelidades verticales; las revueltas agrupaban a toda la sociedad provincial, dirigida por notables, contra los agentes fiscales del centro.',
          },
          {
            school: 'Colaboración social (Beik, 1985)',
            argument:
              'En el Languedoc la corona no venció a las élites: pactó con ellas. Recibió dinero y obediencia a cambio de cargos, exenciones y apoyo armado frente a los de abajo.',
          },
        ],
        state:
          'La lectura de Beik es hoy la más aceptada como descripción del funcionamiento cotidiano. Se le objeta que explica bien la estabilidad y peor los momentos de ruptura, cuando la colaboración se quiebra.',
      },
      {
        question: '¿Hubo una revolución militar y cuándo?',
        positions: [
          {
            school: 'Roberts (1955)',
            argument:
              'Entre 1560 y 1660 la infantería con armas de fuego, la disciplina táctica y el tamaño de los ejércitos transformaron la guerra y obligaron a construir administración fiscal.',
          },
          {
            school: 'Parker (1976 y 1988)',
            argument:
              'El motor fue la fortificación abaluartada: los asedios interminables multiplicaron los efectivos. El proceso empieza antes, en la Italia de 1500, y se extiende por vía naval y colonial.',
          },
          {
            school: 'Black (1991)',
            argument:
              'Los cambios decisivos son posteriores a 1660: ejércitos permanentes, uniformes, cuarteles y logística estatal en la era de Luis XIV y de la guerra dinástica del XVIII.',
          },
        ],
        state:
          'El concepto sobrevive como herramienta heurística, con la cronología abierta. Hay acuerdo en la consecuencia: cualquiera que fuese la secuencia, la guerra fue el principal motor de la construcción fiscal y administrativa del Estado.',
      },
    ],
    sources: [
      { author: 'Jean Bodin', title: 'Los seis libros de la República', year: '1576', kind: 'primaria', note: 'Define la soberanía como poder perpetuo y absoluto, pero sometido a la ley divina, natural y fundamental.' },
      { author: 'Giovanni Botero', title: 'De la razón de Estado', year: '1589', kind: 'primaria', note: 'Difunde la razón de Estado en versión aceptable para la Contrarreforma.' },
      { author: 'Cardenal Richelieu', title: 'Testamento político', year: 'c. 1638', kind: 'primaria', note: 'Manual de gobierno: precedencia del interés del Estado sobre la conciencia del ministro.' },
      { author: 'Thomas Hobbes', title: 'Leviatán', year: '1651', kind: 'primaria', note: 'Funda la soberanía absoluta en un pacto entre individuos, no en el derecho divino.' },
      { author: 'Luis XIV', title: 'Memorias para la instrucción del delfín', year: 'c. 1670', kind: 'primaria', note: 'Exposición del oficio de rey escrita por el propio monarca y sus secretarios.' },
      { author: 'Corona francesa', title: 'Edicto de Fontainebleau', year: '1685', kind: 'primaria', note: 'Revoca el Edicto de Nantes. Provoca la emigración de entre 200.000 y 300.000 hugonotes.' },
      { author: 'Parlamento inglés', title: 'Bill of Rights', year: '1689', kind: 'primaria', note: 'Prohíbe el ejército permanente en paz y los impuestos sin consentimiento parlamentario.' },
      { author: 'John Locke', title: 'Segundo tratado sobre el gobierno civil', year: '1689', kind: 'primaria', note: 'Poder político fundado en el consentimiento y limitado por la propiedad; derecho de resistencia.' },
      { author: 'Duque de Saint-Simon', title: 'Memorias', year: '1691-1723', kind: 'primaria', note: 'Retrato interior de Versalles. Fuente imprescindible y parcialísima: el autor es un gran resentido.' },
      { author: 'Jacques-Bénigne Bossuet', title: 'Política sacada de las Sagradas Escrituras', year: '1709', kind: 'primaria', note: 'Formulación teológica del derecho divino, publicada cuando el modelo entraba en crisis.' },
      { author: 'Felipe V', title: 'Decretos de Nueva Planta', year: '1707-1716', kind: 'primaria', note: 'Suprimen las instituciones de la Corona de Aragón por derecho de conquista.' },
      { author: 'Boris Porchnev', title: 'Las sublevaciones populares en Francia antes de la Fronda', year: '1948', kind: 'estudio', note: 'Lectura de clase: el Estado absoluto como instrumento de una nobleza feudal amenazada.' },
      { author: 'Roland Mousnier', title: 'Furores campesinos', year: '1967', kind: 'estudio', note: 'Réplica a Porchnev: sociedad de órdenes, fidelidades verticales y revueltas dirigidas por notables.' },
      { author: 'Norbert Elias', title: 'La sociedad cortesana', year: '1969', kind: 'estudio', note: 'La etiqueta como mecanismo de domesticación de la nobleza. Discutido por los estudios provinciales.' },
      { author: 'Perry Anderson', title: 'El Estado absolutista', year: '1974', kind: 'estudio', note: 'Aparato de dominación feudal redesplegado; comparación sistemática entre Occidente y Oriente.' },
      { author: 'William Beik', title: 'Absolutism and Society in Seventeenth-Century France', year: '1985', kind: 'estudio', note: 'La colaboración social entre corona y élites del Languedoc como clave del sistema.' },
      { author: 'Geoffrey Parker', title: 'La revolución militar', year: '1988', kind: 'estudio', note: 'La fortificación abaluartada como motor del crecimiento de los ejércitos y de la fiscalidad.' },
      { author: 'John Brewer', title: 'The Sinews of Power', year: '1989', kind: 'estudio', note: 'El Estado fiscal-militar británico: consentimiento parlamentario, deuda barata y superioridad recaudatoria.' },
      { author: 'John H. Elliott', title: 'A Europe of Composite Monarchies', year: '1992', kind: 'estudio', note: 'Formula la categoría de monarquía compuesta y distingue unión aeque principaliter y accesoria.' },
      { author: 'Nicholas Henshall', title: 'The Myth of Absolutism', year: '1992', kind: 'estudio', note: 'Niega la oposición entre absolutismo continental y constitucionalismo inglés como retroproyección.' },
      { author: 'Peter Burke', title: 'La fabricación de Luis XIV', year: '1992', kind: 'estudio', note: 'La imagen del Rey Sol como programa deliberado de producción simbólica.' },
    ],
  },
  questions: [
    {
      id: 'absolutismo-1', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué designa la categoría de «monarquía compuesta» de John Elliott?',
      options: [
        'Una monarquía gobernada conjuntamente por varios miembros de la misma dinastía',
        'Un agregado de reinos y territorios bajo un mismo soberano, cada uno con sus leyes, cortes y privilegios propios',
        'Una monarquía electiva sometida al control de una dieta nobiliaria',
        'La unión de la corona con la jerarquía eclesiástica en un solo cuerpo político',
      ],
      answer: 1,
      explanation: 'Era la forma normal del poder moderno, no una anomalía. Carlos V reinaba con títulos distintos y obligaciones distintas en cada uno de sus territorios.',
    },
    {
      id: 'absolutismo-2', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: 'En el vocabulario jurídico del siglo XVII, ¿qué significaba que un rey fuese «absoluto»?',
      options: [
        'Que su voluntad no tenía ningún límite y podía disponer libremente de vidas y bienes',
        'Que estaba liberado de la ley positiva anterior, pero sujeto a la ley divina, natural y fundamental del reino',
        'Que reunía en su persona el poder civil y el sacerdocio',
        'Que gobernaba sin ministros ni consejos',
      ],
      answer: 1,
      explanation: '*Legibus solutus*. El propio Bodin negaba al soberano el derecho de confiscar bienes sin causa o alterar la ley de sucesión.',
    },
    {
      id: 'absolutismo-3', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué proyecto de Olivares desencadenó las rebeliones de 1640?',
      options: [
        'La expulsión de los moriscos',
        'La Unión de Armas, que exigía a cada reino hombres y dinero en proporción a su población',
        'La imposición del castellano como lengua administrativa única',
        'La supresión de las Cortes de Castilla',
      ],
      answer: 1,
      explanation: 'Chocó con la lógica pactista de Cataluña y Portugal. Portugal se independizó; Cataluña volvió en 1652 con sus constituciones formalmente intactas.',
    },
    {
      id: 'absolutismo-4', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Por qué la venalidad de oficios limitaba el poder del rey que la practicaba?',
      options: [
        'Porque los cargos vendidos quedaban exentos de impuestos',
        'Porque el comprador se convertía en propietario inamovible del cargo y lo transmitía a sus herederos',
        'Porque los oficios se vendían solo a extranjeros',
        'Porque el precio de los cargos estaba fijado por los parlamentos',
      ],
      answer: 1,
      explanation: 'La corona cobraba por adelantado y perdía capacidad de mandar sobre sus propios administradores. Los intendentes revocables nacieron para sortear ese bloqueo.',
    },
    {
      id: 'absolutismo-5', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿En qué desplazó Geoffrey Parker la tesis de la revolución militar de Michael Roberts?',
      options: [
        'Situó el motor del cambio en la fortificación abaluartada y en los asedios prolongados',
        'Negó que hubiera existido ningún cambio militar significativo',
        'Atribuyó la transformación exclusivamente a la artillería de campaña francesa',
        'Retrasó todo el proceso al siglo XVIII',
      ],
      answer: 0,
      explanation: 'La *trace italienne* multiplicó los efectivos necesarios para sitiar y guarnecer. El ejército de Flandes pasó de unos diez mil hombres a más de ochenta mil.',
    },
    {
      id: 'absolutismo-6', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué decisión tomó Luis XIV en 1661 a la muerte de Mazarino?',
      options: [
        'Convocó los Estados Generales para legitimar su gobierno',
        'Gobernó personalmente, sin nombrar primer ministro, apoyándose en secretarios de familias de servicio',
        'Delegó el gobierno en el Parlamento de París',
        'Trasladó de inmediato la corte a Versalles',
      ],
      answer: 1,
      explanation: 'Separó el honor, que dejó a los grandes, del poder efectivo, que puso en manos de administradores dependientes de su voluntad. Versalles llegó en 1682.',
    },
    {
      id: 'absolutismo-7', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: 'Según Norbert Elias, ¿qué función cumplía la etiqueta de Versalles?',
      options: [
        'Ahorrar gastos de representación a la corona',
        'Convertir a la nobleza en un grupo dependiente que competía por signos de favor distribuidos solo por el rey',
        'Sustituir la administración civil por la doméstica',
        'Impedir el acceso de la burguesía a los cargos públicos',
      ],
      answer: 1,
      explanation: 'La lectura tiene límites: no toda la nobleza vivía en la corte, muchas casas conservaron poder provincial y Versalles era también un mercado de pensiones.',
    },
    {
      id: 'absolutismo-8', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Cuál fue la consecuencia económica más citada de la revocación del Edicto de Nantes en 1685?',
      options: [
        'La quiebra inmediata del Banco Real',
        'La emigración de entre 200.000 y 300.000 hugonotes, muchos artesanos y comerciantes cualificados, a países rivales',
        'El fin del comercio francés con el Levante',
        'La devaluación de la libra tornesa',
      ],
      answer: 1,
      explanation: 'Llevaron sus oficios y su propaganda antifrancesa a Holanda, Inglaterra, Brandeburgo y Suiza. Una demostración de fuerza que salió cara.',
    },
    {
      id: 'absolutismo-9', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué sostuvo William Beik a partir del estudio del Languedoc?',
      options: [
        'Que la monarquía destruyó el poder de las élites provinciales',
        'Que la corona y los notables locales colaboraron: dinero y obediencia a cambio de cargos, exenciones y respaldo armado',
        'Que las provincias del sur permanecieron al margen de la fiscalidad real',
        'Que el absolutismo francés fue una copia del modelo español',
      ],
      answer: 1,
      explanation: 'La «colaboración social» explica bien la estabilidad del sistema. Se le objeta que explica peor los momentos de ruptura.',
    },
    {
      id: 'absolutismo-10', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Cuál es la paradoja fiscal que señala John Brewer al comparar Inglaterra y Francia?',
      options: [
        'Francia recaudaba más per cápita pese a su desorden administrativo',
        'La Inglaterra parlamentaria recaudaba más per cápita y se endeudaba más barato que la Francia absoluta',
        'Ninguno de los dos Estados logró recaudar lo suficiente para sostener sus guerras',
        'Inglaterra financiaba sus guerras exclusivamente con el comercio colonial',
      ],
      answer: 1,
      explanation: 'El consentimiento parlamentario y el Banco de Inglaterra de 1694 hicieron creíble la deuda. El consentimiento resultó ser una tecnología fiscal superior a la orden.',
    },
    {
      id: 'absolutismo-11', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué hicieron los Decretos de Nueva Planta?',
      options: [
        'Restablecieron los fueros vascos y navarros',
        'Suprimieron las instituciones propias de la Corona de Aragón e impusieron el modelo castellano por derecho de conquista',
        'Crearon un parlamento común para toda la Monarquía',
        'Repartieron las colonias americanas entre los reinos peninsulares',
      ],
      answer: 1,
      explanation: 'Convirtieron una monarquía compuesta en una unión accesoria. Es la excepción española a la regla de negociación con las periferias.',
    },
    {
      id: 'absolutismo-12', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué era el liberum veto de la república polaco-lituana?',
      options: [
        'El derecho del rey a vetar los acuerdos de la dieta',
        'La facultad de un solo diputado de anular la dieta entera y sus acuerdos',
        'La exención fiscal universal de la nobleza',
        'El derecho de las ciudades a rechazar el reclutamiento',
      ],
      answer: 1,
      explanation: 'Bloqueó la fiscalidad y el ejército permanente. Entre 1772 y 1795 los vecinos se repartieron el país.',
    },
    {
      id: 'absolutismo-13', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué paradoja subraya Perry Anderson sobre el absolutismo de Europa oriental?',
      options: [
        'Que fue más débil que el occidental pese a disponer de más territorio',
        'Que la construcción del Estado moderno coincidió allí con el endurecimiento de la servidumbre, no con su desaparición',
        'Que se apoyó en las ciudades y no en la nobleza',
        'Que renunció a mantener ejércitos permanentes',
      ],
      answer: 1,
      explanation: 'Pedro I ligó el estatus nobiliario al servicio del Estado mediante la tabla de rangos mientras la servidumbre campesina se agravaba.',
    },
    {
      id: 'absolutismo-14', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué distinción manejaban, según Henshall, los propios contemporáneos?',
      options: [
        'Entre monarquía absoluta y monarquía constitucional',
        'Entre monarquía absoluta, legítima y respetuosa con los cuerpos intermedios, y despotismo o tiranía',
        'Entre monarquía hereditaria y monarquía electiva',
        'Entre monarquía nacional y monarquía compuesta',
      ],
      answer: 1,
      explanation: 'La oposición entre absolutismo continental y constitucionalismo inglés sería, en su lectura, una construcción retrospectiva del siglo XIX.',
    },
    {
      id: 'absolutismo-15', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Qué novedad fiscal introdujeron la capitación de 1695 y el diezmo real de 1710 en Francia?',
      options: [
        'Suprimieron los impuestos indirectos sobre la sal',
        'Alcanzaban por primera vez a los grupos privilegiados, no solo al tercer estado',
        'Transferían la recaudación a los intendentes en exclusiva',
        'Sustituían el pago en dinero por el pago en especie',
      ],
      answer: 1,
      explanation: 'La guerra continua desde 1672 obligó a tocar el privilegio fiscal. Es el primer aviso del problema que estallará en 1789.',
    },
    {
      id: 'absolutismo-16', era: 'Edad Moderna', topicId: 'absolutismo', topic: 'Absolutismo',
      question: '¿Por qué la fundación teológica del poder por Bossuet resultó menos duradera que la fundación pactista de Hobbes?',
      options: [
        'Porque Bossuet escribió en latín y no fue leído',
        'Porque lo que se funda en un pacto puede discutirse en sus términos, y esa vía quedó abierta a Locke y a la crítica ilustrada',
        'Porque Hobbes defendía la monarquía limitada',
        'Porque la Iglesia condenó la obra de Bossuet',
      ],
      answer: 1,
      explanation: 'Hobbes justificaba un poder absoluto con argumentos laicos. Locke aceptó la premisa del pacto y extrajo la conclusión contraria en 1689.',
    },
  ],
}
