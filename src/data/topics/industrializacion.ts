import type { TopicModule } from '../types'

export const industrializacion: TopicModule = {
  topic: {
    id: 'industrializacion',
    era: 'Edad Contemporánea',
    title: 'La revolución industrial',
    years: '1760–1914',
    country: 'Reino Unido',
    description: 'Por qué empezó en una isla del Atlántico norte, qué costó vivirla y cuándo empezó realmente a notarse en el bolsillo.',
    duration: '55 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚙',
    color: 'terracotta',
    summary:
      'Durante milenios la producción por persona creció tan despacio que ninguna generación notaba la diferencia. A partir de algún momento entre 1760 y 1830, en una parte del noroeste de Europa, dejó de ser así: la energía fósil sustituyó al músculo, la fábrica sustituyó al taller doméstico y el crecimiento se hizo acumulativo. La palabra revolución induce a error, porque las cifras agregadas crecen despacio y buena parte del país siguió siendo agrario durante décadas. Pero el cambio de estructura fue radical, y la pregunta que organiza hoy la investigación no es cómo ocurrió, que está bien documentado, sino por qué ocurrió allí y entonces, cuando China, la India o los Países Bajos disponían de mercados, técnica y capital comparables.',
    keyDates: [
      { date: '1709', event: 'Abraham Darby funde hierro con coque en Coalbrookdale y libera a la siderurgia del carbón vegetal.' },
      { date: '1712', event: 'La máquina atmosférica de Newcomen achica agua en las minas de carbón.' },
      { date: '1764–1779', event: 'Spinning jenny, water frame y mule multiplican la productividad del hilado de algodón.' },
      { date: '1776', event: 'Watt comercializa la máquina de condensador separado; Smith publica *La riqueza de las naciones*.' },
      { date: '1784', event: 'Cort patenta el pudelado y el laminado: hierro dulce en cantidad industrial.' },
      { date: '1811–1816', event: 'Movimiento ludita en el norte de Inglaterra; el Parlamento castiga con pena capital romper máquinas.' },
      { date: '1825–1830', event: 'Stockton-Darlington y Liverpool-Manchester inauguran el ferrocarril de vapor.' },
      { date: '1832–1833', event: 'Comisión Sadler y primera Factory Act con inspectores para hacerla cumplir.' },
      { date: '1842', event: 'Informe Chadwick sobre las condiciones sanitarias y Mines Act contra el trabajo subterráneo de mujeres y niños.' },
      { date: '1845', event: 'Engels publica *La situación de la clase obrera en Inglaterra*.' },
      { date: '1851', event: 'Gran Exposición de Londres: el Reino Unido produce en torno a la mitad del hierro del mundo.' },
      { date: '1870–1914', event: 'Segunda revolución industrial: acero, química, electricidad y motor de explosión, con liderazgo alemán y estadounidense.' },
    ],
    sections: [
      {
        title: '¿Por qué allí y por qué entonces?',
        body: [
          'La pregunta tiene sentido porque en 1700 la ventaja europea no era evidente. Kenneth Pomeranz mostró en 2000 que las regiones más avanzadas de China, como el delta del Yangtsé, tenían niveles de vida, esperanza de vida, mercados de tierra y trabajo y sofisticación comercial comparables a los de Inglaterra. Su explicación de la gran divergencia es doble y contingente: el carbón británico estaba cerca de la superficie y de los centros de consumo, y las colonias americanas aportaron lo que él llama acres fantasma, tierras que suministraban algodón, azúcar y madera sin consumir suelo europeo.',
          'Robert Allen ofreció en 2009 una explicación económica más precisa. Gran Bretaña era una economía de salarios altos y energía barata: pagar a un obrero costaba mucho y quemar carbón costaba poco, de modo que las máquinas que sustituían trabajo por energía resultaban rentables allí y no en Francia, la India o China, donde la mano de obra era barata. La spinning jenny se difundió en Lancashire y no en Bengala porque el cálculo económico era distinto, no porque faltara ingenio.',
          'Joel Mokyr subraya un tercer factor: la Ilustración industrial. Existía en Gran Bretaña una cultura de conocimiento útil que conectaba filósofos naturales, ingenieros y artesanos mediante sociedades como la Lunar Society, publicaciones baratas, patentes y una actitud favorable a la mejora práctica. Sin esa circulación no se explica que las máquinas se perfeccionasen de forma acumulativa durante un siglo.',
          'A esto se añade el argumento institucional de Douglass North y Barry Weingast: tras 1688 el compromiso creíble del Parlamento sobre impuestos y deuda, junto con la seguridad de la propiedad, redujo el riesgo de invertir a largo plazo. Se le objeta que muchas instituciones citadas existían antes o también en otros lugares.',
          'La historiografía actual combina los cuatro factores en vez de elegir uno: recursos y geografía, precios relativos, cultura técnica e instituciones. Y añade un quinto, más incómodo, del que se hablará al final: la economía atlántica del azúcar, el algodón y la esclavitud.',
        ].join('\n\n'),
        callout:
          'Allen: la mecanización se adoptó donde el trabajo era caro y la energía barata. La spinning jenny era rentable en Lancashire y ruinosa en Bengala.',
      },
      {
        title: 'Las máquinas y sus ritmos',
        body: [
          'El algodón fue el sector piloto porque partía casi de cero, no tenía gremios que lo protegieran y su materia prima llegaba del Atlántico. La lanzadera volante aceleró el tejido y creó un cuello de botella en el hilado; lo resolvieron la jenny de Hargreaves, adecuada al trabajo doméstico, la water frame de Arkwright, que exigía energía hidráulica y por tanto edificio, horario y vigilancia, y la mule de Crompton, que combinaba finura y resistencia. La fábrica nace de la máquina que no cabe en una casa.',
          'La energía siguió un camino propio. La máquina atmosférica de Newcomen, de 1712, era ineficiente pero servía para achicar agua en bocamina, donde el carbón no costaba nada. El condensador separado de Watt, patentado en 1769 y comercializado desde 1776, redujo el consumo lo bastante para sacar el vapor de la mina y llevarlo a la fábrica; el movimiento rotativo hizo el resto. La alta presión, ya en el siglo XIX, permitió el transporte.',
          'La siderurgia se liberó del bosque con el coque de Darby y multiplicó su producto con el pudelado y el laminado de Cort, que hacían hierro dulce en cantidad. Con hierro barato y vapor de alta presión llegó el ferrocarril: Stockton-Darlington en 1825, Liverpool-Manchester en 1830, y a partir de ahí una fiebre inversora que reorganizó mercados, husos horarios y finanzas.',
          'Conviene medir la velocidad real. Nicholas Crafts y Knick Harley recalcularon las series y encontraron un crecimiento del producto por habitante de en torno al uno por ciento anual entre 1780 y 1830. Es transformador a escala de siglo y modesto a escala de década. En 1830 la mayoría de los trabajadores británicos no estaban en fábricas mecanizadas, sino en la agricultura, el servicio doméstico y talleres artesanales.',
          'De ahí el consenso actual: revolución en la estructura, gradualismo en los agregados. Cambió qué se producía, dónde, con qué energía y bajo qué disciplina, mucho antes de que cambiaran de forma llamativa las cifras del producto nacional.',
        ].join('\n\n'),
      },
      {
        title: 'La fábrica, el reloj y la resistencia',
        body: [
          'Edward P. Thompson describió en 1967 la transformación más profunda y menos visible: el paso de una orientación por tareas, propia del trabajo agrario y artesanal, a una disciplina del tiempo medido. En la fábrica se paga por horas, se multa el retraso, se prohíbe el San Lunes y se sincroniza a cientos de personas con un reloj que a menudo controla el patrón. La escuela, el sermón y el manual de conducta enseñaron esa nueva relación con el tiempo.',
          'El trabajo infantil no lo inventó la fábrica; lo hizo visible, lo concentró y lo sometió a horario. La Comisión Sadler de 1832 recogió testimonios de jornadas de doce a dieciséis horas, castigos físicos y deformaciones óseas. La Factory Act de 1833 prohibió emplear a menores de nueve años en la industria textil, limitó las jornadas por tramos de edad y creó algo decisivo: un cuerpo de inspectores. La Mines Act de 1842 prohibió el trabajo subterráneo de mujeres y de niños menores de diez años, y la ley de las diez horas llegó en 1847.',
          'El ludismo se malinterpreta como odio irracional a la técnica. Los luditas de 1811-1816 eran trabajadores cualificados que destruían selectivamente las máquinas empleadas para abaratar el producto degradando la calidad y saltándose las costumbres del oficio, en un contexto en que las coaliciones obreras estaban prohibidas por las Combination Acts y no existía cauce legal de negociación. Romper máquinas era, como escribió Eric Hobsbawm, negociación colectiva por otros medios. El Parlamento respondió con pena capital.',
          'Thompson sostuvo en 1963 que la clase obrera no fue un producto automático de las máquinas sino una identidad construida en esa experiencia: sociedades de socorro mutuo, prensa radical, capillas disidentes, cartismo. Es la formulación que desplazó el determinismo económico en la historia social británica.',
        ].join('\n\n'),
        callout:
          'Los luditas no atacaban a las máquinas en general: destruían las que degradaban el producto y rompían las costumbres del oficio. Con las coaliciones prohibidas, era la única negociación disponible.',
      },
      {
        title: 'La ciudad industrial',
        body: [
          'Manchester pasó de unos veinticinco mil habitantes a mediados del siglo XVIII a más de trescientos mil un siglo después. Ese crecimiento se produjo sin alcantarillado, sin agua corriente y sin regulación de la vivienda, con casas espalda contra espalda, sótanos habitados y letrinas compartidas por decenas de familias.',
          'El resultado fue lo que los demógrafos llaman penalización urbana: en las grandes ciudades industriales de los años treinta y cuarenta la esperanza de vida al nacer podía quedar en torno a los treinta años, muy por debajo de la del campo, y la mortalidad infantil superaba con holgura la rural. El tifus, la tuberculosis y sobre todo el cólera, llegado en 1831 y de nuevo en 1848, golpearon a esas poblaciones.',
          'La respuesta llegó por vía estadística. Edwin Chadwick publicó en 1842 un informe que correlacionaba mortalidad, hacinamiento y saneamiento y defendía, con argumentos utilitaristas de coste público, la intervención estatal en agua y alcantarillado; de ahí salió la Public Health Act de 1848. John Snow demostró en 1854, cartografiando los casos alrededor de la bomba de Broad Street, que el cólera se transmitía por el agua y no por miasmas, aunque su tesis tardó años en aceptarse.',
          'La contaminación fue el otro coste. El carbón que movía las fábricas llenó las ciudades de humo y hollín, y las nieblas letales continuaron hasta bien entrado el siglo XX. La industrialización británica es también el inicio documentado de la emisión masiva de dióxido de carbono, un dato que la historiografía ambiental ha incorporado al balance.',
          'Con el tiempo la ciudad industrial produjo sus propias soluciones: parques públicos, traídas de agua, hospitales, transporte urbano, escuelas y una legislación municipal que a finales de siglo había reducido de forma drástica la mortalidad. Pero ese resultado llegó dos generaciones después de quienes pagaron el coste inicial.',
        ].join('\n\n'),
      },
      {
        title: 'Difusión desigual',
        body: [
          'Bélgica industrializó pronto por su carbón y su siderurgia; Francia siguió un camino distinto, con más peso de la pequeña propiedad agraria, de los productos de calidad y de una transición demográfica temprana. Patrick OBrien y Çağlar Keyder argumentaron que ese camino no fue un fracaso frente al modelo británico sino una vía alternativa con rentas per cápita comparables a largo plazo.',
          'Alemania despegó después de 1850 y lo hizo con rasgos propios: bancos universales que financiaban a largo plazo, cárteles, escuelas técnicas y politécnicas, e industrias basadas en la ciencia como la química de tintes y la electrotecnia. Estados Unidos desarrolló el llamado sistema americano de manufacturas, con piezas intercambiables y maquinaria especializada, favorecido por la escasez de mano de obra y la abundancia de recursos.',
          'Fuera de Occidente, Japón es el caso de industrialización dirigida desde el Estado tras la Restauración Meiji de 1868: envío de estudiantes, contratación de ingenieros extranjeros, empresas públicas vendidas después a grupos privados y un esfuerzo educativo masivo.',
          'La otra cara es la desindustrialización colonial. La India producía en el siglo XVIII una parte muy alta de los textiles del mundo; entre 1810 y 1860 esa industria se hundió frente al hilado mecánico británico, en un contexto de aranceles asimétricos y de dominio político. Se discute cuánto pesó la tecnología y cuánto la política comercial, pero el hecho está establecido: la industrialización de unos coincidió con la desindustrialización de otros.',
          'A partir de 1870 llega la segunda revolución industrial: acero Bessemer y Siemens-Martin, química orgánica, electricidad, motor de combustión interna, taylorismo y producción en cadena. El liderazgo tecnológico se desplaza de Gran Bretaña a Alemania y Estados Unidos, y la investigación se institucionaliza en laboratorios de empresa y universidades técnicas.',
        ].join('\n\n'),
      },
      {
        title: 'Los grandes debates',
        body: [
          'El primero es el nivel de vida. Los optimistas, con Peter Lindert y Jeffrey Williamson, calcularon que los salarios reales casi se duplicaron entre 1820 y 1850. Los pesimistas, siguiendo a Charles Feinstein, obtienen mejoras mucho más modestas hasta mediados de siglo. La antropometría añadió un dato difícil de rebatir: la estatura media de los varones británicos disminuyó en las cohortes nacidas entre 1820 y 1850, señal de peor nutrición neta y de más enfermedad en la infancia.',
          'Robert Allen sintetizó la discusión con la expresión pausa de Engels: entre 1790 y 1840 la producción por trabajador creció y los salarios reales apenas, de modo que el excedente fue a beneficios y a inversión. La mejora general llega a partir de 1850. Es decir, tenían razón los pesimistas para la primera generación y los optimistas para la segunda.',
          'El segundo debate es el de la gran divergencia. Frente a Pomeranz, Robert Allen y Stephen Broadberry sostienen que Europa noroccidental ya llevaba ventaja antes de 1750, con salarios y productividad agraria superiores desde la crisis del siglo XIV. La discusión se dirime hoy con series de salarios, precios y producto reconstruidas para China, la India, Japón y Europa, y el punto de divergencia tiende a situarse antes de lo que proponía Pomeranz, sin volver a las explicaciones culturales del siglo XIX.',
          'El tercero es el papel de la esclavitud y del imperio. Eric Williams sostuvo en 1944 que los beneficios de la trata y del azúcar financiaron la industrialización británica y que la abolición respondió a intereses económicos, no solo a la moral. Décadas de crítica redujeron el peso cuantitativo directo de esos beneficios; investigaciones recientes, como las de Sven Beckert sobre el capitalismo del algodón, han recuperado la conexión por otra vía: el algodón esclavista del sur de Estados Unidos alimentó Lancashire, y el imperio proporcionó mercados protegidos y materias primas.',
          'El cuarto es el de la palabra misma. Desde Toynbee y Ashton se habló de revolución; el gradualismo cuantitativo de Crafts y Harley pareció desmentirla. La salida generalmente aceptada distingue niveles: en tasas agregadas de crecimiento el proceso fue lento; en estructura productiva, en fuentes de energía, en organización del trabajo y en efectos sobre el planeta fue una ruptura sin precedentes desde el Neolítico.',
        ].join('\n\n'),
        callout:
          'La pausa de Engels: entre 1790 y 1840 la producción por trabajador sube y los salarios reales no. Los pesimistas tienen razón sobre la primera generación; los optimistas, sobre la segunda.',
      },
    ],
    concepts: [
      { term: 'Sistema doméstico', definition: 'Organización previa a la fábrica: el comerciante reparte materia prima a familias que trabajan en casa a destajo.' },
      { term: 'Water frame', definition: 'Hiladora de Arkwright movida por agua. Al no caber en una casa, obliga a construir la fábrica con horario y vigilancia.' },
      { term: 'Condensador separado', definition: 'Mejora de Watt que reduce el consumo de carbón lo bastante para sacar el vapor de la bocamina y llevarlo a la fábrica.' },
      { term: 'Pudelado', definition: 'Proceso de Cort para obtener hierro dulce en grandes cantidades sin carbón vegetal. Base del ferrocarril y la construcción metálica.' },
      { term: 'Acres fantasma', definition: 'Concepto de Pomeranz: tierras coloniales que suministran algodón, azúcar y madera sin consumir suelo europeo.' },
      { term: 'Economía de salarios altos', definition: 'Tesis de Allen: trabajo caro y energía barata hacen rentable mecanizar en Gran Bretaña y no en Asia.' },
      { term: 'Ilustración industrial', definition: 'Concepto de Mokyr: cultura de conocimiento útil que conecta filósofos naturales, ingenieros y artesanos.' },
      { term: 'Disciplina del tiempo', definition: 'Paso de la orientación por tareas al tiempo medido y remunerado por horas. Analizado por E. P. Thompson en 1967.' },
      { term: 'Ludismo', definition: 'Destrucción selectiva de máquinas por trabajadores cualificados entre 1811 y 1816, con las coaliciones obreras prohibidas por ley.' },
      { term: 'Factory Acts', definition: 'Leyes fabriles británicas desde 1833. La novedad decisiva no fue el límite de edad sino el cuerpo de inspectores.' },
      { term: 'Penalización urbana', definition: 'Exceso de mortalidad de las ciudades industriales frente al campo antes del saneamiento de la segunda mitad del siglo.' },
      { term: 'Pausa de Engels', definition: 'Periodo de 1790-1840 en que crece la producción por trabajador y no los salarios reales. Formulación de Allen.' },
      { term: 'Gran divergencia', definition: 'Separación de los niveles de renta entre Europa noroccidental y Asia. Su fecha y sus causas son el gran debate abierto.' },
      { term: 'Segunda revolución industrial', definition: 'Ciclo de 1870-1914: acero, química, electricidad y motor de explosión, con investigación institucionalizada en laboratorios.' },
    ],
    debates: [
      {
        question: '¿Por qué en Gran Bretaña y no en China o la India?',
        positions: [
          {
            school: 'Contingencia ecológica (Pomeranz, 2000)',
            argument:
              'El delta del Yangtsé era comparable a Inglaterra en 1750. La diferencia la marcaron el carbón accesible y los acres fantasma del Atlántico, no una superioridad europea previa.',
          },
          {
            school: 'Precios relativos (Allen, 2009)',
            argument:
              'Solo donde el trabajo era caro y la energía barata resultaba rentable inventar y adoptar máquinas ahorradoras de mano de obra.',
          },
          {
            school: 'Cultura del conocimiento útil (Mokyr) e instituciones (North y Weingast)',
            argument:
              'La circulación entre ciencia y taller, las patentes y el compromiso creíble del Parlamento tras 1688 sostuvieron una mejora técnica acumulativa durante un siglo.',
          },
        ],
        state:
          'Se combinan los factores en lugar de elegir uno. La cronología de la divergencia tiende a adelantarse respecto a Pomeranz, sin recuperar las explicaciones culturales decimonónicas sobre la supuesta inmovilidad asiática.',
      },
      {
        question: '¿Mejoró el nivel de vida de los trabajadores?',
        positions: [
          {
            school: 'Optimistas (Lindert y Williamson)',
            argument:
              'Los salarios reales casi se duplicaron entre 1820 y 1850; el consumo de bienes básicos y la oferta de empleo aumentaron.',
          },
          {
            school: 'Pesimistas (Feinstein y la antropometría)',
            argument:
              'Las mejoras salariales fueron modestas hasta mediados de siglo y la estatura media descendió en las cohortes nacidas entre 1820 y 1850: peor nutrición neta y más enfermedad infantil.',
          },
        ],
        state:
          'La pausa de Engels concilia ambos datos: crecimiento sin reparto entre 1790 y 1840 y mejora general a partir de 1850. La discusión se ha desplazado a la salud, la mortalidad y el tiempo de trabajo, no solo al salario.',
      },
      {
        question: '¿Cuánto pesaron la esclavitud y el imperio?',
        positions: [
          {
            school: 'Tesis de Williams (1944)',
            argument:
              'Los beneficios de la trata y del azúcar financiaron la industrialización, y la abolición respondió al declive económico del sistema esclavista, no solo a la conciencia moral.',
          },
          {
            school: 'Crítica cuantitativa',
            argument:
              'Los beneficios directos de la trata fueron una fracción pequeña de la inversión británica total; el ahorro interno y la agricultura explican la mayor parte del capital.',
          },
          {
            school: 'Nueva historia del capitalismo (Beckert, 2014)',
            argument:
              'La conexión es estructural más que contable: el algodón esclavista del sur de Estados Unidos abasteció a Lancashire y el imperio aportó mercados protegidos y materias primas.',
          },
        ],
        state:
          'Se rechaza la versión fuerte de Williams sobre la financiación directa y se acepta la interdependencia estructural entre economía atlántica esclavista e industria textil británica.',
      },
    ],
    sources: [
      { author: 'Adam Smith', title: 'La riqueza de las naciones', year: '1776', kind: 'primaria', note: 'La fábrica de alfileres como análisis pionero de la división del trabajo y su efecto sobre la productividad.' },
      { author: 'Comisión Sadler', title: 'Informe sobre el trabajo infantil en las fábricas', year: '1832', kind: 'primaria', note: 'Testimonios de jornadas de doce a dieciséis horas, castigos físicos y deformaciones óseas.' },
      { author: 'Parlamento británico', title: 'Factory Act', year: '1833', kind: 'primaria', note: 'Límites de edad y jornada en la industria textil y, sobre todo, creación de inspectores.' },
      { author: 'Andrew Ure', title: 'The Philosophy of Manufactures', year: '1835', kind: 'primaria', note: 'Defensa entusiasta del sistema fabril y de la disciplina que impone. Contrapunto imprescindible a Engels.' },
      { author: 'Edwin Chadwick', title: 'Informe sobre las condiciones sanitarias de la población trabajadora', year: '1842', kind: 'primaria', note: 'Correlaciona mortalidad, hacinamiento y saneamiento con argumentos de coste público.' },
      { author: 'Friedrich Engels', title: 'La situación de la clase obrera en Inglaterra', year: '1845', kind: 'primaria', note: 'Observación directa de Manchester. Fuente y a la vez alegato: debe leerse como ambas cosas.' },
      { author: 'Charles Dickens', title: 'Tiempos difíciles', year: '1854', kind: 'primaria', note: 'Coketown como retrato literario del utilitarismo industrial y de la ciudad del humo.' },
      { author: 'John Snow', title: 'Sobre el modo de transmisión del cólera', year: '1855', kind: 'primaria', note: 'La cartografía de los casos de Broad Street frente a la teoría miasmática dominante.' },
      { author: 'Karl Marx', title: 'El capital, libro I', year: '1867', kind: 'primaria', note: 'Jornada laboral, maquinaria y gran industria a partir de los informes de los inspectores de fábricas.' },
      { author: 'Arnold Toynbee', title: 'Lectures on the Industrial Revolution', year: '1884', kind: 'primaria', note: 'Difunde el término y fija la imagen de ruptura catastrófica que discutirá el siglo XX.' },
      { author: 'T. S. Ashton', title: 'La revolución industrial', year: '1948', kind: 'estudio', note: 'Síntesis optimista clásica: sin industrialización, la población creciente habría vivido peor.' },
      { author: 'Eric Williams', title: 'Capitalismo y esclavitud', year: '1944', kind: 'estudio', note: 'Relaciona trata, azúcar, acumulación británica y abolición. Muy discutido y nunca irrelevante.' },
      { author: 'E. P. Thompson', title: 'La formación de la clase obrera en Inglaterra', year: '1963', kind: 'estudio', note: 'La clase como experiencia y construcción cultural, no como efecto automático de las máquinas.' },
      { author: 'E. P. Thompson', title: 'Tiempo, disciplina de trabajo y capitalismo industrial', year: '1967', kind: 'estudio', note: 'Del trabajo orientado por tareas al tiempo medido y remunerado por horas.' },
      { author: 'Eric Hobsbawm', title: 'Industria e imperio', year: '1968', kind: 'estudio', note: 'Interpreta el ludismo como negociación colectiva por otros medios en ausencia de derechos sindicales.' },
      { author: 'David Landes', title: 'Prometeo desencadenado', year: '1969', kind: 'estudio', note: 'Historia técnica comparada del cambio industrial en Europa occidental.' },
      { author: 'Peter Lindert y Jeffrey Williamson', title: 'English Workers Living Standards during the Industrial Revolution', year: '1983', kind: 'estudio', note: 'Revisión optimista de los salarios reales entre 1820 y 1850.' },
      { author: 'Nicholas Crafts', title: 'British Economic Growth during the Industrial Revolution', year: '1985', kind: 'estudio', note: 'Recalcula las series y obtiene un crecimiento agregado mucho más lento del supuesto.' },
      { author: 'Charles Feinstein', title: 'Pessimism Perpetuated', year: '1998', kind: 'estudio', note: 'Réplica pesimista: mejoras salariales modestas hasta mediados del siglo XIX.' },
      { author: 'Kenneth Pomeranz', title: 'La gran divergencia', year: '2000', kind: 'estudio', note: 'Compara el delta del Yangtsé con Inglaterra y explica la separación por carbón y colonias.' },
      { author: 'Robert C. Allen', title: 'The British Industrial Revolution in Global Perspective', year: '2009', kind: 'estudio', note: 'Salarios altos, energía barata y la pausa de Engels como claves del proceso.' },
      { author: 'Joel Mokyr', title: 'The Enlightened Economy', year: '2009', kind: 'estudio', note: 'La Ilustración industrial y la circulación del conocimiento útil como motor de la mejora acumulativa.' },
      { author: 'Sven Beckert', title: 'El imperio del algodón', year: '2014', kind: 'estudio', note: 'Cadena global del algodón: esclavitud, imperio y fábrica como un mismo sistema.' },
    ],
  },
  questions: [
    {
      id: 'industrializacion-1', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué muestra Pomeranz al comparar el delta del Yangtsé con Inglaterra hacia 1750?',
      options: [
        'Que China llevaba tres siglos de atraso técnico',
        'Que ambas regiones tenían niveles de vida, mercados y sofisticación comercial comparables',
        'Que Inglaterra tenía ya el doble de renta por habitante',
        'Que China carecía de mercados de tierra y de trabajo',
      ],
      answer: 1,
      explanation: 'Su explicación de la divergencia es contingente: carbón accesible y acres fantasma coloniales, no superioridad europea previa.',
    },
    {
      id: 'industrializacion-2', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: 'Según Robert Allen, ¿por qué se mecanizó primero Gran Bretaña?',
      options: [
        'Porque disponía de mejores ingenieros que el continente',
        'Porque el trabajo era caro y la energía barata, lo que hacía rentable sustituir mano de obra por máquinas',
        'Porque protegió sus inventos con patentes más estrictas',
        'Porque tenía un mercado interior mayor que el francés',
      ],
      answer: 1,
      explanation: 'La spinning jenny era rentable en Lancashire y ruinosa en Bengala. La diferencia estaba en los precios relativos, no en el ingenio.',
    },
    {
      id: 'industrializacion-3', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Por qué la water frame de Arkwright obligó a crear la fábrica?',
      options: [
        'Porque requería obreros con formación universitaria',
        'Porque necesitaba energía hidráulica y no cabía en una casa, lo que impuso edificio, horario y vigilancia',
        'Porque el Parlamento prohibió el hilado doméstico',
        'Porque su patente exigía instalarla en ciudades',
      ],
      answer: 1,
      explanation: 'La jenny todavía se usaba en el taller doméstico. La fábrica nace de la máquina que no cabe en una casa.',
    },
    {
      id: 'industrializacion-4', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué aportó el condensador separado de Watt?',
      options: [
        'Permitió por primera vez achicar agua en las minas',
        'Redujo el consumo de carbón lo suficiente para sacar el vapor de la bocamina y llevarlo a la fábrica',
        'Sustituyó el hierro por el acero en las calderas',
        'Hizo innecesaria la energía hidráulica en la siderurgia',
      ],
      answer: 1,
      explanation: 'La máquina de Newcomen ya funcionaba desde 1712, pero solo era viable donde el carbón no costaba nada: la propia mina.',
    },
    {
      id: 'industrializacion-5', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué encontraron Crafts y Harley al recalcular el crecimiento británico?',
      options: [
        'Tasas explosivas superiores al cinco por ciento anual',
        'Un crecimiento del producto por habitante de en torno al uno por ciento anual entre 1780 y 1830',
        'Un estancamiento absoluto hasta 1850',
        'Un crecimiento concentrado exclusivamente en la agricultura',
      ],
      answer: 1,
      explanation: 'Transformador a escala de siglo, modesto a escala de década. En 1830 la mayoría de los trabajadores no estaba en fábricas mecanizadas.',
    },
    {
      id: 'industrializacion-6', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿En qué consistió el cambio que E. P. Thompson analizó en 1967?',
      options: [
        'En la sustitución del salario por el pago en especie',
        'En el paso de un trabajo orientado por tareas a una disciplina del tiempo medido y remunerado por horas',
        'En la prohibición del trabajo nocturno',
        'En la generalización del contrato indefinido',
      ],
      answer: 1,
      explanation: 'Multas por retraso, fin del San Lunes y sincronización de cientos de personas con un reloj controlado a menudo por el patrón.',
    },
    {
      id: 'industrializacion-7', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Cuál fue la novedad más eficaz de la Factory Act de 1833?',
      options: [
        'La prohibición total del trabajo infantil',
        'La creación de un cuerpo de inspectores capaz de hacer cumplir la ley',
        'La jornada de ocho horas',
        'La obligación de pagar salario igual a hombres y mujeres',
      ],
      answer: 1,
      explanation: 'Sin inspección, las normas anteriores eran papel mojado. La ley de las diez horas llegó en 1847.',
    },
    {
      id: 'industrializacion-8', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Cómo se interpreta hoy el movimiento ludita?',
      options: [
        'Como rechazo irracional de la técnica por parte de trabajadores sin cualificación',
        'Como destrucción selectiva de las máquinas que degradaban el producto y rompían las costumbres del oficio, en ausencia de derecho a coaligarse',
        'Como una revuelta campesina contra el cercamiento de tierras',
        'Como una campaña organizada por los fabricantes rivales',
      ],
      answer: 1,
      explanation: 'Hobsbawm lo llamó negociación colectiva por otros medios. Las Combination Acts prohibían la vía legal y el Parlamento respondió con pena capital.',
    },
    {
      id: 'industrializacion-9', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué es la «penalización urbana»?',
      options: [
        'El impuesto municipal sobre las fábricas contaminantes',
        'El exceso de mortalidad de las ciudades industriales respecto al campo antes del saneamiento',
        'La multa a los obreros que llegaban tarde',
        'El sobreprecio del alquiler en los barrios fabriles',
      ],
      answer: 1,
      explanation: 'En los años treinta y cuarenta la esperanza de vida al nacer en las grandes ciudades industriales podía quedar en torno a los treinta años.',
    },
    {
      id: 'industrializacion-10', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué demostró John Snow en 1854?',
      options: [
        'Que el cólera era hereditario',
        'Que el cólera se transmitía por el agua, cartografiando los casos alrededor de la bomba de Broad Street',
        'Que los miasmas del aire eran la causa de la epidemia',
        'Que la vacunación prevenía el cólera',
      ],
      answer: 1,
      explanation: 'Su tesis tardó años en aceptarse. El informe Chadwick de 1842 y la Public Health Act de 1848 se movían todavía en el marco miasmático.',
    },
    {
      id: 'industrializacion-11', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué sostienen OBrien y Keyder sobre la industrialización francesa?',
      options: [
        'Que fracasó por falta de carbón',
        'Que fue una vía alternativa, con más peso de la pequeña propiedad y los productos de calidad, y rentas per cápita comparables a largo plazo',
        'Que copió exactamente el modelo británico con medio siglo de retraso',
        'Que dependió íntegramente de la inversión extranjera',
      ],
      answer: 1,
      explanation: 'Medir todas las trayectorias con la vara británica produce falsos fracasos. Alemania y Estados Unidos también siguieron caminos propios.',
    },
    {
      id: 'industrializacion-12', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué ocurrió con la industria textil de la India entre 1810 y 1860?',
      options: [
        'Se mecanizó antes que la británica',
        'Se hundió frente al hilado mecánico británico, en un contexto de aranceles asimétricos y dominio político',
        'Se mantuvo estable gracias a la demanda interna',
        'Se reconvirtió a la producción de acero',
      ],
      answer: 1,
      explanation: 'Se discute el peso relativo de la técnica y de la política comercial. El hecho está establecido: la industrialización de unos coincidió con la desindustrialización de otros.',
    },
    {
      id: 'industrializacion-13', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué dato antropométrico complica la lectura optimista del nivel de vida?',
      options: [
        'El aumento de la natalidad urbana',
        'El descenso de la estatura media de los varones nacidos entre 1820 y 1850',
        'La caída del consumo de carbón doméstico',
        'El aumento del número de horas de ocio',
      ],
      answer: 1,
      explanation: 'La estatura resume nutrición neta y enfermedad en la infancia. Es el argumento más difícil de rebatir del bando pesimista.',
    },
    {
      id: 'industrializacion-14', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué describe la «pausa de Engels»?',
      options: [
        'El paréntesis entre las dos revoluciones industriales',
        'El periodo de 1790 a 1840 en el que crece la producción por trabajador mientras los salarios reales apenas se mueven',
        'La interrupción del comercio por el bloqueo continental',
        'El retraso alemán en industrializarse',
      ],
      answer: 1,
      explanation: 'El excedente fue a beneficios e inversión. Concilia a pesimistas y optimistas: tienen razón sobre generaciones distintas.',
    },
    {
      id: 'industrializacion-15', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Cuál es el estado actual del debate sobre la tesis de Eric Williams?',
      options: [
        'Se acepta íntegramente: la trata financió directamente la industrialización',
        'Se rechaza la versión fuerte sobre la financiación directa y se acepta la interdependencia estructural entre economía atlántica esclavista e industria textil',
        'Se ha demostrado que no hubo relación alguna entre esclavitud e industria',
        'Se considera que la abolición retrasó la industrialización británica',
      ],
      answer: 1,
      explanation: 'Beckert recuperó la conexión por otra vía: el algodón esclavista del sur de Estados Unidos abastecía a Lancashire.',
    },
    {
      id: 'industrializacion-16', era: 'Edad Contemporánea', topicId: 'industrializacion', topic: 'Industrialización',
      question: '¿Qué caracteriza a la segunda revolución industrial de 1870-1914?',
      options: [
        'La generalización del vapor y del hierro dulce',
        'Acero, química orgánica, electricidad y motor de explosión, con investigación institucionalizada y liderazgo alemán y estadounidense',
        'La vuelta al taller artesanal',
        'La sustitución del carbón por la energía hidráulica',
      ],
      answer: 1,
      explanation: 'Las industrias basadas en la ciencia exigían laboratorios de empresa y escuelas técnicas. Gran Bretaña perdió ahí el liderazgo tecnológico.',
    },
  ],
}
