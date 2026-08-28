import type { TopicModule } from '../types'

export const revolucionFrancesa: TopicModule = {
  topic: {
    id: 'revolucion-francesa',
    era: 'Edad Contemporánea',
    title: 'Revolución francesa y era napoleónica',
    years: '1789–1815',
    country: 'Francia',
    description: 'De una quiebra fiscal a la invención de la política moderna, el Terror y un imperio que exportó el código civil a cañonazos.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '⚑',
    color: 'red',
    summary:
      'Francia no era en 1789 un país arruinado ni atrasado: era la primera potencia demográfica de Europa occidental, con una economía en crecimiento y una administración envidiada. Lo que quebró fue su hacienda, incapaz de gravar a quienes tenían dinero porque el privilegio fiscal era la forma jurídica de la sociedad. De ese callejón salió, en cuatro meses de 1789, algo que nadie había planeado: la afirmación de que la soberanía reside en la nación y no en el rey, y de que los derechos son anteriores a la ley. En los veintiséis años siguientes esa afirmación produjo una constitución, una república, una guerra europea, el Terror, un golpe militar y un imperio. También produjo el vocabulario político con el que Europa discutiría el siglo siguiente: izquierda y derecha, nación, ciudadanía, contrarrevolución.',
    keyDates: [
      { date: '1787–1788', event: 'La Asamblea de Notables rechaza la reforma fiscal y fuerza la convocatoria de los Estados Generales.' },
      { date: '17–20 de junio de 1789', event: 'El tercer estado se proclama Asamblea Nacional y jura no separarse sin dar una constitución.' },
      { date: '14 de julio de 1789', event: 'Toma de la Bastilla; en las semanas siguientes el Gran Miedo recorre el campo.' },
      { date: '4 y 26 de agosto de 1789', event: 'Abolición nocturna de los privilegios y Declaración de Derechos del Hombre y del Ciudadano.' },
      { date: 'Julio de 1790', event: 'Constitución civil del clero: la ruptura que parte al país en dos.' },
      { date: 'Junio de 1791', event: 'Fuga a Varennes. El rey deja de ser creíble como monarca constitucional.' },
      { date: 'Abril–agosto de 1792', event: 'Guerra contra Austria y Prusia; asalto a las Tullerías y caída de la monarquía.' },
      { date: 'Enero–marzo de 1793', event: 'Ejecución de Luis XVI, coalición europea y sublevación de la Vendée.' },
      { date: 'Septiembre de 1793 – julio de 1794', event: 'Gobierno revolucionario, Ley de Sospechosos y Terror hasta el 9 de Termidor.' },
      { date: '9 de noviembre de 1799', event: '18 de Brumario: Bonaparte liquida el Directorio.' },
      { date: '1801–1804', event: 'Concordato, Banco de Francia, Código Civil y proclamación del Imperio.' },
      { date: '1812–1815', event: 'Campaña de Rusia, Leipzig, primera abdicación y Waterloo.' },
    ],
    sections: [
      {
        title: 'Una quiebra, no una decadencia',
        body: [
          'El siglo XVIII francés fue de crecimiento: la población pasó de unos veintidós a veintiocho millones, el comercio atlántico se multiplicó, la producción agraria aumentó y las ciudades se llenaron de profesionales, funcionarios y rentistas. Explicar 1789 por la miseria no funciona; la coyuntura de 1788, con una cosecha desastrosa y el pan a precios inasumibles, agravó la crisis pero no la causó.',
          'Lo que estaba roto era la hacienda. Las guerras del siglo, y sobre todo el apoyo a la independencia de las trece colonias, dejaron una deuda cuyo servicio consumía en torno a la mitad del gasto. Francia no era pobre: recaudaba mal. Los dos primeros estados y numerosas ciudades, provincias y corporaciones disfrutaban de exenciones, y los intentos de gravar la riqueza de forma general chocaron con los parlamentos, que se presentaban como defensores de la nación frente al despotismo ministerial.',
          'Cuando Calonne propuso en 1787 una contribución territorial sin exenciones, la Asamblea de Notables respondió que semejante reforma solo podía aprobarla la nación reunida. La aristocracia bloqueó el arreglo fiscal en nombre de la libertad y con ello abrió la puerta a los Estados Generales, que no se reunían desde 1614. Georges Lefebvre llamó a ese episodio revuelta aristocrática; sin ella no hay 1789.',
          'La convocatoria trajo dos novedades explosivas. Se duplicó la representación del tercer estado, sin garantizar el voto por cabeza en lugar de por orden, y se pidieron cuadernos de quejas a todas las circunscripciones. Los cahiers de doléances son la mayor encuesta de opinión del Antiguo Régimen: miles de textos que critican el privilegio fiscal, la justicia señorial y los diezmos, y que en su inmensa mayoría no piden abolir la monarquía sino repararla.',
          'El panfleto de Sieyès de enero de 1789 formuló el argumento decisivo con tres preguntas: qué es el tercer estado, todo; qué ha sido hasta ahora en el orden político, nada; qué pide, ser algo. La nación se define ahí como el conjunto de quienes trabajan y sostienen la sociedad, y el privilegio queda fuera de ella por definición.',
        ].join('\n\n'),
        callout:
          'La reforma fiscal la bloqueó la aristocracia, no el pueblo. Sin la revuelta de los privilegiados de 1787-1788 no se habrían convocado los Estados Generales.',
      },
      {
        title: '1789: cuatro meses que inventan un régimen',
        body: [
          'La cuestión del voto por cabeza paralizó la asamblea desde mayo. El 17 de junio los diputados del tercero se proclamaron Asamblea Nacional, y el 20, encontrando cerrada su sala, juraron en la del Juego de Pelota no separarse hasta dar a Francia una constitución. Es el acto fundacional: un grupo de representantes decide que la soberanía está en la nación y actúa en consecuencia.',
          'La toma de la Bastilla el 14 de julio fue militarmente menor —había siete presos— y políticamente decisiva: mostró que París podía imponerse por la fuerza y que el ejército no era fiable. En las semanas siguientes el Gran Miedo, estudiado por Lefebvre en 1932, propagó por el campo el rumor de un complot aristocrático con bandidos a sueldo; los campesinos se armaron, asaltaron castillos y quemaron sobre todo los archivos donde constaban sus obligaciones señoriales.',
          'La noche del 4 de agosto la Asamblea respondió a esa presión con una renuncia colectiva de privilegios que abolió el régimen señorial, los diezmos, la venalidad y las exenciones. La letra pequeña llegó días después: los derechos considerados propiedad debían rescatarse con pago, condición que el campesinado ignoró y que quedó suprimida sin indemnización en 1793.',
          'El 26 de agosto se aprobó la Declaración de Derechos del Hombre y del Ciudadano: los hombres nacen libres e iguales en derechos, la soberanía reside esencialmente en la nación, la ley es expresión de la voluntad general, nadie puede ser inquietado por sus opiniones ni detenido sin ley previa. No era un programa social sino una demolición jurídica del orden estamental, y como tal se leyó en toda Europa.',
          'En octubre, las mujeres de los mercados parisinos marcharon a Versalles por el precio del pan y trajeron a la familia real a París. El poder quedaba bajo la vigilancia física de la capital, un hecho que condicionará todo lo que sigue.',
        ].join('\n\n'),
      },
      {
        title: 'Reconstruir el reino y partirlo en dos',
        body: [
          'La Asamblea Constituyente hizo en dos años una obra administrativa enorme: dividió Francia en departamentos de tamaño homogéneo, suprimió las aduanas interiores, unificó pesos y medidas con el sistema métrico, abolió los gremios, declaró libre el trabajo, reorganizó la justicia con jueces electos y creó el jurado. Buena parte de esa arquitectura sigue en pie.',
          'También tomó la decisión que rompería el consenso. Para saldar la deuda nacionalizó los bienes de la Iglesia, emitió contra ellos unos títulos, los asignados, que acabaron convertidos en papel moneda inflacionario, y reorganizó la institución eclesiástica mediante la Constitución civil del clero de julio de 1790: diócesis ajustadas a los departamentos, obispos y párrocos elegidos por los ciudadanos y sueldo del Estado. Al exigir en noviembre un juramento de fidelidad, el país se partió: alrededor de la mitad del clero lo prestó y la otra mitad no, con distribución geográfica muy marcada.',
          'Timothy Tackett ha demostrado que ese juramento es el mejor predictor territorial de la contrarrevolución posterior. La Revolución dejó de ser un conflicto entre privilegio y nación y pasó a serlo también entre dos formas de entender la vida religiosa de comunidades enteras.',
          'La huida del rey a Varennes en junio de 1791, detenido a pocos kilómetros de la frontera tras dejar un manifiesto que desautorizaba todo lo hecho, destruyó la ficción del monarca constitucional. La Constitución de 1791 se aprobó igualmente, con sufragio censitario y distinción entre ciudadanos activos y pasivos, pero ya nadie creía en su viabilidad.',
          'La Asamblea legisló además contra la organización obrera: la ley Le Chapelier de junio de 1791 prohibió coaliciones y asociaciones profesionales en nombre de la libertad individual y de la unidad de la nación. Estuvo vigente hasta 1864 y es la prueba de que la igualdad proclamada era jurídica, no social.',
        ].join('\n\n'),
        callout:
          'El juramento exigido al clero en 1790 partió a Francia por la mitad y predice, comarca a comarca, dónde habrá contrarrevolución tres años después.',
      },
      {
        title: 'Guerra, república y Terror',
        body: [
          'La guerra declarada a Austria en abril de 1792 fue querida por casi todos: por los girondinos, que esperaban propagar la libertad y desenmascarar al rey; por la corte, que esperaba la derrota; solo Robespierre advirtió que nadie ama a los misioneros armados. Las derrotas iniciales y el manifiesto de Brunswick, que amenazaba a París con la destrucción, produjeron el asalto a las Tullerías del 10 de agosto y el fin de la monarquía.',
          'En septiembre, con los prusianos avanzando, multitudes asaltaron las prisiones parisinas y ejecutaron a más de mil detenidos. Las masacres de septiembre son el primer episodio de violencia masiva no espontáneamente popular sino tolerada por las autoridades, y marcan el clima en que se elige la Convención. Esta proclama la República el 21 de septiembre y juzga al rey: ejecutado el 21 de enero de 1793.',
          'La primavera de 1793 acumula catástrofes: coalición europea, traición de Dumouriez, insurrección campesina y católica en la Vendée, revueltas federalistas en Lyon, Marsella, Burdeos y Tolón, y hambre urbana. La respuesta fue el gobierno revolucionario: un Comité de Salvación Pública con poderes ejecutivos, representantes en misión con autoridad plena en provincias, tribunal revolucionario, requisas, control de precios mediante el maximum général, leva en masa de agosto y Ley de Sospechosos de septiembre, que permitía detener por conducta, relaciones o escritos.',
          'Las cifras conocidas ayudan a medir. Los tribunales revolucionarios dictaron alrededor de diecisiete mil condenas a muerte; las víctimas totales de la represión, incluidas ejecuciones sumarias y muertes en prisión, se estiman entre treinta y cuarenta mil; la guerra de la Vendée causó entre ciento cincuenta mil y doscientos cincuenta mil muertos en ambos bandos. La mayor parte de la violencia se concentra en las zonas de guerra civil y de frontera, no en París.',
          'El Terror tuvo también una dimensión cultural: descristianización, calendario republicano, culto del Ser Supremo, fiestas cívicas. Y terminó por implosión: tras la ley de Pradial que suprimió las garantías procesales y aceleró las ejecuciones, la propia Convención derribó a Robespierre el 9 de Termidor, temiendo ser la siguiente en la lista.',
        ].join('\n\n'),
      },
      {
        title: 'Cómo se explica el Terror',
        body: [
          'La lectura clásica, de Albert Mathiez a Albert Soboul, subraya las circunstancias: invasión exterior, guerra civil interior, hambre y conspiración real. El gobierno revolucionario habría sido una dictadura de salud pública, transitoria y eficaz, que salvó a la República y cuya violencia se explica por la presión de las masas urbanas y por la emergencia. Soboul añadió el análisis social de los sans-culottes: artesanos, tenderos y asalariados organizados por secciones, con una cultura política propia de democracia directa y precio justo.',
          'La crítica revisionista invirtió la causalidad. Augustin Cochin ya había señalado el papel de las sociedades de pensamiento; François Furet sostuvo en 1978 que el Terror no fue un accidente sino una consecuencia del propio lenguaje revolucionario: si la soberanía pertenece a una voluntad general única e indivisible, quien discrepa no es minoría sino enemigo, y no hay lugar institucional para la oposición. La Revolución se explicaría por su dinámica discursiva más que por su situación militar.',
          'Timothy Tackett ha propuesto una tercera vía documentada con centenares de cartas y diarios: ni pura circunstancia ni pura ideología, sino un proceso de radicalización alimentado por el miedo, la experiencia real de complots y deserciones y el aprendizaje político acelerado de gente que en 1789 no era revolucionaria. Su punto fuerte es explicar por qué unos mismos hombres cambian de posición en cuatro años.',
          'La Vendée genera un debate propio. Reynald Secher sostuvo en 1986 que las columnas infernales practicaron un genocidio planificado. Jean-Clément Martin ha respondido que la represión fue atroz pero descentralizada, sin plan de exterminio de una población definida como tal, y que la cifra de víctimas se ha inflado; la mayoría de la historiografía académica rechaza hoy la calificación de genocidio sin minimizar la magnitud de la matanza.',
          'Queda la pregunta de fondo: ¿fue la Revolución burguesa? Alfred Cobban negó en 1964 que existiera una burguesía capitalista enfrentada a una nobleza feudal: los revolucionarios eran sobre todo juristas y funcionarios, y nobles y burgueses compartían inversiones y modo de vida. Furet y Doyle desarrollaron esa crítica hasta convertir la Revolución en un acontecimiento político antes que social. La historiografía actual, con Peter McPhee o William Sewell, ha vuelto a lo social sin volver al esquema de clases: estudia el trabajo, el género, la esclavitud colonial y la cultura material.',
        ].join('\n\n'),
        callout:
          'Furet: si la soberanía es una voluntad general indivisible, el que discrepa no es adversario sino enemigo. El Terror estaría inscrito en la gramática de 1789, no solo en la guerra de 1793.',
      },
      {
        title: 'Napoleón: heredero y liquidador',
        body: [
          'El Directorio sobrevivió cuatro años entre golpes de mano contra realistas y jacobinos, con una economía sin crédito y una guerra permanente que dio a los generales un poder político creciente. El 18 de Brumario de 1799 Bonaparte, general prestigioso por Italia y hábil publicista de su campaña de Egipto, liquidó el régimen con apoyo de una parte del propio Directorio.',
          'El Consulado consolidó lo que la burguesía revolucionaria quería conservar y suprimió lo que temía. Concordato con Roma en 1801, que reconocía al catolicismo como religión de la mayoría sin devolver los bienes nacionales; Banco de Francia y franco germinal; prefectos nombrados desde París al frente de los departamentos; liceos y Universidad imperial; y sobre todo el Código Civil de 1804, que fijó igualdad ante la ley, propiedad absoluta, libertad contractual, matrimonio civil y secularización del estado civil.',
          'El mismo código consagró la autoridad marital, la incapacidad jurídica de la mujer casada y la desigualdad en el divorcio y en el adulterio. Y en 1802 el régimen restableció la esclavitud en las colonias, revocando la abolición de 1794; en Saint-Domingue la expedición enviada a imponerla fue derrotada y la colonia proclamó su independencia como Haití en 1804. La Revolución produjo la primera abolición de la esclavitud de la historia moderna y también su primera restauración.',
          'El Imperio proclamado en 1804 llevó la guerra a toda Europa. Austerlitz en 1805 marcó el cénit continental; Trafalgar, el mismo año, la imposibilidad de vencer en el mar. El bloqueo continental intentó asfixiar económicamente a Gran Bretaña y acabó asfixiando a los aliados de Francia y empujando a Napoleón a intervenir en España en 1808 y a invadir Rusia en 1812. De los más de seiscientos mil hombres de la Grande Armée regresaron pocas decenas de miles.',
          'El balance es doble y así se enseña. Napoleón exportó a media Europa la igualdad ante la ley, la abolición del régimen señorial, el registro civil y el código, disolvió el Sacro Imperio y provocó, por reacción, los nacionalismos alemán y español. Y lo hizo mediante conquista, censura, policía política y una guerra que costó entre tres y cinco millones de vidas. Los dos hechos son el mismo hecho.',
        ].join('\n\n'),
      },
    ],
    concepts: [
      { term: 'Cahiers de doléances', definition: 'Cuadernos de quejas redactados en 1789 por todas las circunscripciones. La mayor encuesta de opinión del Antiguo Régimen.' },
      { term: 'Voto por cabeza', definition: 'Reivindicación del tercer estado frente al voto por orden, que anulaba su doble representación. Origen del bloqueo de mayo de 1789.' },
      { term: 'Gran Miedo', definition: 'Pánico rural de julio-agosto de 1789 ante un supuesto complot aristocrático. Estudiado por Lefebvre en 1932.' },
      { term: 'Noche del 4 de agosto', definition: 'Renuncia colectiva de privilegios que abolió el régimen señorial y los diezmos, con rescate en dinero suprimido después en 1793.' },
      { term: 'Constitución civil del clero', definition: 'Ley de 1790 que reorganiza la Iglesia francesa y exige juramento. Divide al país y anticipa la geografía de la contrarrevolución.' },
      { term: 'Asignado', definition: 'Título emitido contra los bienes nacionalizados de la Iglesia. Convertido en papel moneda, provocó una inflación devastadora.' },
      { term: 'Ley Le Chapelier', definition: 'Norma de 1791 que prohíbe coaliciones y asociaciones profesionales. Vigente hasta 1864: la igualdad proclamada era jurídica, no social.' },
      { term: 'Sans-culottes', definition: 'Artesanos, tenderos y asalariados parisinos organizados por secciones. Democracia directa, precio justo y presión armada sobre la Convención.' },
      { term: 'Comité de Salvación Pública', definition: 'Órgano ejecutivo del gobierno revolucionario desde 1793, con poderes de guerra, policía y administración.' },
      { term: 'Ley de Sospechosos', definition: 'Norma de septiembre de 1793 que autoriza detener por conducta, relaciones o escritos. Base jurídica del Terror.' },
      { term: 'Maximum général', definition: 'Control de precios y salarios impuesto en 1793 bajo presión de los sans-culottes. Abandonado tras Termidor.' },
      { term: 'Termidor', definition: 'Caída de Robespierre el 9 de Termidor del año II (27 de julio de 1794) por iniciativa de la propia Convención.' },
      { term: 'Código Civil', definition: 'Código de 1804: igualdad ante la ley, propiedad absoluta y libertad contractual, junto a la incapacidad jurídica de la mujer casada.' },
      { term: 'Bloqueo continental', definition: 'Cierre del continente al comercio británico desde 1806. Arruinó a los aliados de Francia y arrastró al Imperio a España y a Rusia.' },
    ],
    debates: [
      {
        question: '¿Fue una revolución burguesa?',
        positions: [
          {
            school: 'Interpretación clásica (Lefebvre, Soboul)',
            argument:
              'Una burguesía en ascenso derribó el orden feudal con apoyo campesino y popular, e impuso las condiciones jurídicas del capitalismo: propiedad libre, mercado unificado, abolición del privilegio.',
          },
          {
            school: 'Revisionismo (Cobban 1964, Furet, Doyle)',
            argument:
              'No había una burguesía capitalista enfrentada a una nobleza feudal: los revolucionarios fueron juristas y funcionarios, y nobles y burgueses compartían rentas e inversiones. La Revolución fue política antes que social.',
          },
          {
            school: 'Nueva historia social (McPhee, Sewell)',
            argument:
              'Vuelve a lo social sin el esquema de clases: trabajo, género, campesinado, esclavitud colonial y cultura material explican el proceso mejor que la lucha entre dos bloques.',
          },
        ],
        state:
          'El modelo clásico de dos clases está abandonado; también lo está la reducción de todo a discurso político. La síntesis actual combina crisis fiscal, cultura política, conflicto rural y dimensión colonial.',
      },
      {
        question: 'El Terror: ¿circunstancias o ideología?',
        positions: [
          {
            school: 'Circunstancias (Mathiez, Soboul)',
            argument:
              'Invasión, guerra civil, hambre y conspiración explican una dictadura de salud pública transitoria que salvó a la República y respondió a la presión popular.',
          },
          {
            school: 'Lógica del discurso (Furet, 1978)',
            argument:
              'Una soberanía concebida como voluntad general única no deja lugar institucional a la oposición: el disidente se convierte en enemigo. El Terror es coherente con el lenguaje de 1789.',
          },
          {
            school: 'Radicalización contingente (Tackett)',
            argument:
              'Cartas y diarios muestran a hombres que no eran revolucionarios en 1789 y que se radicalizan por miedo, complots reales y aprendizaje político acelerado.',
          },
        ],
        state:
          'Se ha impuesto una lectura de proceso: la violencia no estaba escrita en 1789 ni se deduce solo de la guerra. Se estudia como resultado de decisiones sucesivas bajo presión, con la ideología funcionando como marco interpretativo del miedo.',
      },
      {
        question: '¿Fue la Vendée un genocidio?',
        positions: [
          {
            school: 'Secher (1986)',
            argument:
              'Las columnas infernales ejecutaron un plan de exterminio de una población definida por su territorio y su fe: corresponde la calificación jurídica de genocidio.',
          },
          {
            school: 'Martin y la historiografía académica mayoritaria',
            argument:
              'La represión fue atroz pero descentralizada y sin plan de exterminio poblacional; las cifras se han inflado y el marco de guerra civil describe mejor lo ocurrido.',
          },
        ],
        state:
          'La calificación de genocidio es minoritaria en la investigación académica y muy presente en el debate público francés. Hay acuerdo en la magnitud de la matanza: entre 150.000 y 250.000 muertos en ambos bandos.',
      },
    ],
    sources: [
      { author: 'Emmanuel Sieyès', title: '¿Qué es el tercer estado?', year: '1789', kind: 'primaria', note: 'Todo, nada, algo. Define la nación excluyendo al privilegio por definición.' },
      { author: 'Circunscripciones francesas', title: 'Cahiers de doléances', year: '1789', kind: 'primaria', note: 'Miles de cuadernos de quejas. Critican el privilegio fiscal sin pedir abolir la monarquía.' },
      { author: 'Asamblea Nacional', title: 'Declaración de Derechos del Hombre y del Ciudadano', year: '1789', kind: 'primaria', note: 'Soberanía nacional, igualdad ante la ley y derechos anteriores al Estado.' },
      { author: 'Asamblea Nacional', title: 'Constitución civil del clero', year: '1790', kind: 'primaria', note: 'Reorganiza la Iglesia y exige juramento. Rompe el consenso de 1789.' },
      { author: 'Edmund Burke', title: 'Reflexiones sobre la Revolución en Francia', year: '1790', kind: 'primaria', note: 'Primera gran formulación del conservadurismo moderno frente al racionalismo constituyente.' },
      { author: 'Asamblea Nacional', title: 'Ley Le Chapelier', year: '1791', kind: 'primaria', note: 'Prohíbe coaliciones y asociaciones profesionales. Vigente hasta 1864.' },
      { author: 'Olympe de Gouges', title: 'Declaración de los derechos de la mujer y de la ciudadana', year: '1791', kind: 'primaria', note: 'Denuncia que la ciudadanía proclamada excluye a la mitad de la población.' },
      { author: 'Convención Nacional', title: 'Ley de Sospechosos', year: '1793', kind: 'primaria', note: 'Permite detener por conducta, relaciones o escritos. Base jurídica del Terror.' },
      { author: 'Maximilien Robespierre', title: 'Sobre los principios de moral política', year: '1794', kind: 'primaria', note: 'Virtud y terror como principios del gobierno revolucionario en tiempo de guerra.' },
      { author: 'Toussaint Louverture', title: 'Constitución de Saint-Domingue', year: '1801', kind: 'primaria', note: 'Autonomía colonial y abolición de la esclavitud antes de la expedición napoleónica.' },
      { author: 'Estado francés', title: 'Código Civil de los franceses', year: '1804', kind: 'primaria', note: 'Igualdad ante la ley y propiedad absoluta, junto a la incapacidad jurídica de la mujer casada.' },
      { author: 'Jules Michelet', title: 'Historia de la Revolución francesa', year: '1847-1853', kind: 'estudio', note: 'El pueblo como sujeto colectivo. Fundacional para la tradición republicana francesa.' },
      { author: 'Albert Mathiez', title: 'La Revolución francesa', year: '1922-1927', kind: 'estudio', note: 'Defensa del gobierno revolucionario como dictadura de salud pública.' },
      { author: 'Georges Lefebvre', title: 'El Gran Miedo de 1789', year: '1932', kind: 'estudio', note: 'Reconstruye el pánico rural y sitúa al campesinado como actor autónomo.' },
      { author: 'Albert Soboul', title: 'Los sans-culottes parisinos en el año II', year: '1958', kind: 'estudio', note: 'Análisis social del movimiento seccional y de su cultura política.' },
      { author: 'Alfred Cobban', title: 'The Social Interpretation of the French Revolution', year: '1964', kind: 'estudio', note: 'Abre el revisionismo: no había una burguesía capitalista contra una nobleza feudal.' },
      { author: 'François Furet', title: 'Pensar la Revolución francesa', year: '1978', kind: 'estudio', note: 'El Terror como consecuencia de la lógica de la voluntad general indivisible.' },
      { author: 'Lynn Hunt', title: 'Politics, Culture, and Class in the French Revolution', year: '1984', kind: 'estudio', note: 'Giro cultural: símbolos, retórica y prácticas como objeto central del análisis.' },
      { author: 'Reynald Secher', title: 'La Vendée-Vengé: le génocide franco-français', year: '1986', kind: 'estudio', note: 'Tesis del genocidio vendeano, minoritaria en la academia y muy presente en el debate público.' },
      { author: 'William Doyle', title: 'The Oxford History of the French Revolution', year: '1989', kind: 'estudio', note: 'Síntesis revisionista de referencia en lengua inglesa.' },
      { author: 'Timothy Tackett', title: 'Becoming a Revolutionary', year: '1996', kind: 'estudio', note: 'Muestra con diarios y cartas cómo diputados no revolucionarios se radicalizan.' },
      { author: 'Laurent Dubois', title: 'Avengers of the New World', year: '2004', kind: 'estudio', note: 'La revolución haitiana como parte constitutiva, y no periférica, del ciclo revolucionario.' },
      { author: 'Jean-Clément Martin', title: 'La Vendée et la Révolution', year: '2007', kind: 'estudio', note: 'Refuta el plan de exterminio y reconstruye una represión descentralizada y atroz.' },
      { author: 'Peter McPhee', title: 'Liberty or Death', year: '2016', kind: 'estudio', note: 'Síntesis reciente que reintegra lo social, lo rural y lo colonial sin volver al esquema de clases.' },
    ],
  },
  questions: [
    {
      id: 'revolucion-francesa-1', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Cuál fue la causa inmediata de la convocatoria de los Estados Generales en 1789?',
      options: [
        'El hambre provocada por la mala cosecha de 1788',
        'El bloqueo de la reforma fiscal por la Asamblea de Notables, que remitió la decisión a la nación reunida',
        'La derrota francesa en la guerra de los Siete Años',
        'La presión de los filósofos ilustrados sobre la corte',
      ],
      answer: 1,
      explanation: 'La revuelta aristocrática de 1787-1788 abrió la puerta. La aristocracia bloqueó el arreglo fiscal en nombre de la libertad.',
    },
    {
      id: 'revolucion-francesa-2', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Por qué no funciona explicar 1789 por el empobrecimiento de Francia?',
      options: [
        'Porque la población francesa disminuía desde 1750',
        'Porque el siglo XVIII fue de crecimiento demográfico, comercial y agrario: lo que estaba roto era la hacienda, no la economía',
        'Porque Francia carecía de deuda pública',
        'Porque el precio del pan se mantuvo estable hasta 1792',
      ],
      answer: 1,
      explanation: 'Francia recaudaba mal, no era pobre. La cosecha desastrosa de 1788 agravó la crisis, no la causó.',
    },
    {
      id: 'revolucion-francesa-3', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué acto se considera fundacional del nuevo régimen?',
      options: [
        'La toma de la Bastilla el 14 de julio',
        'La autoproclamación del tercer estado como Asamblea Nacional el 17 de junio y el juramento del Juego de Pelota del 20',
        'La marcha de las mujeres a Versalles en octubre',
        'La ejecución de Luis XVI en enero de 1793',
      ],
      answer: 1,
      explanation: 'Unos representantes deciden que la soberanía reside en la nación y actúan en consecuencia. Todo lo demás se apoya en ese gesto.',
    },
    {
      id: 'revolucion-francesa-4', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué destruían preferentemente los campesinos durante el Gran Miedo?',
      options: [
        'Las cosechas de los grandes propietarios',
        'Los archivos señoriales donde constaban sus obligaciones y rentas',
        'Las iglesias parroquiales',
        'Los molinos y las herrerías',
      ],
      answer: 1,
      explanation: 'El objetivo era el título jurídico, no el edificio. Esa presión forzó la noche del 4 de agosto.',
    },
    {
      id: 'revolucion-francesa-5', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué letra pequeña tuvo la abolición de los derechos señoriales del 4 de agosto?',
      options: [
        'Se aplazaba su entrada en vigor hasta 1793',
        'Los derechos considerados propiedad debían rescatarse mediante pago, condición que el campesinado ignoró',
        'Solo afectaba a los territorios del norte',
        'Exigía la aprobación previa del rey',
      ],
      answer: 1,
      explanation: 'La supresión sin indemnización llegó en 1793. El campesinado se anticipó a la ley por la vía de los hechos.',
    },
    {
      id: 'revolucion-francesa-6', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Por qué la Constitución civil del clero fue una ruptura decisiva?',
      options: [
        'Porque prohibió el culto católico',
        'Porque el juramento exigido al clero dividió al país por la mitad y anticipa la geografía de la contrarrevolución',
        'Porque devolvió a la Iglesia los bienes nacionalizados',
        'Porque instauró el culto del Ser Supremo',
      ],
      answer: 1,
      explanation: 'Tackett demostró que el mapa del juramento de 1790-1791 predice comarca a comarca el de la resistencia posterior.',
    },
    {
      id: 'revolucion-francesa-7', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué prueba la ley Le Chapelier de 1791 sobre el alcance de la igualdad revolucionaria?',
      options: [
        'Que se extendió al ámbito económico y laboral',
        'Que era igualdad jurídica y no social: prohibió coaliciones y asociaciones profesionales, y estuvo vigente hasta 1864',
        'Que se reconocieron los derechos políticos de los asalariados',
        'Que los gremios se mantuvieron intactos',
      ],
      answer: 1,
      explanation: 'Se prohibió la organización obrera en nombre de la libertad individual y de la unidad de la nación.',
    },
    {
      id: 'revolucion-francesa-8', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Quién se opuso a declarar la guerra en 1792 y con qué argumento?',
      options: [
        'Los girondinos, por temor a la derrota militar',
        'Robespierre, con el argumento de que nadie ama a los misioneros armados',
        'La corte, que confiaba en la victoria revolucionaria',
        'Danton, por falta de recursos financieros',
      ],
      answer: 1,
      explanation: 'La guerra la querían los girondinos, para propagar la libertad, y la corte, que esperaba la derrota. Ambos por motivos opuestos.',
    },
    {
      id: 'revolucion-francesa-9', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Cuántas condenas a muerte dictaron aproximadamente los tribunales revolucionarios?',
      options: [
        'Alrededor de 2.000',
        'Alrededor de 17.000, con un total de víctimas de la represión estimado entre 30.000 y 40.000',
        'Más de 300.000',
        'Menos de 500',
      ],
      answer: 1,
      explanation: 'La mayor parte de la violencia se concentró en zonas de guerra civil y de frontera, no en París.',
    },
    {
      id: 'revolucion-francesa-10', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Cómo terminó el Terror?',
      options: [
        'Con una invasión extranjera que ocupó París',
        'Por implosión: la propia Convención derribó a Robespierre el 9 de Termidor temiendo ser la siguiente en la lista',
        'Con un plebiscito popular',
        'Con la victoria electoral de los girondinos',
      ],
      answer: 1,
      explanation: 'La ley de Pradial había suprimido las garantías procesales y acelerado las ejecuciones, incluidas las de diputados.',
    },
    {
      id: 'revolucion-francesa-11', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Cuál es el argumento de Furet sobre el origen del Terror?',
      options: [
        'Que fue una respuesta proporcionada a la invasión extranjera',
        'Que una soberanía concebida como voluntad general indivisible no deja lugar a la oposición: el que discrepa se convierte en enemigo',
        'Que lo impusieron los sans-culottes contra la voluntad de la Convención',
        'Que fue obra exclusiva de Robespierre',
      ],
      answer: 1,
      explanation: 'Frente a la lectura circunstancial de Mathiez y Soboul. Tackett propone una tercera vía: radicalización contingente por miedo y aprendizaje político.',
    },
    {
      id: 'revolucion-francesa-12', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Cuál es la posición mayoritaria de la historiografía académica sobre la Vendée?',
      options: [
        'Que hubo un plan estatal de exterminio de la población vendeana',
        'Que la represión fue atroz pero descentralizada y sin plan de exterminio poblacional, en un marco de guerra civil',
        'Que las víctimas fueron menos de diez mil',
        'Que no hubo represión significativa',
      ],
      answer: 1,
      explanation: 'La calificación de genocidio de Secher es minoritaria en la academia. Hay acuerdo en la magnitud: entre 150.000 y 250.000 muertos.',
    },
    {
      id: 'revolucion-francesa-13', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué negó Alfred Cobban en 1964?',
      options: [
        'Que hubiera existido violencia revolucionaria',
        'Que existiera una burguesía capitalista enfrentada a una nobleza feudal: los revolucionarios eran sobre todo juristas y funcionarios',
        'Que la Declaración de 1789 tuviera efectos jurídicos',
        'Que Napoleón fuera heredero de la Revolución',
      ],
      answer: 1,
      explanation: 'Abrió el revisionismo. La historiografía actual ha vuelto a lo social sin recuperar el esquema de dos clases.',
    },
    {
      id: 'revolucion-francesa-14', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué hizo el régimen napoleónico con la esclavitud colonial?',
      options: [
        'Mantuvo la abolición decretada en 1794',
        'La restableció en 1802; la expedición enviada a Saint-Domingue fue derrotada y la colonia proclamó su independencia como Haití en 1804',
        'La abolió por primera vez en 1804',
        'Delegó la decisión en las asambleas coloniales',
      ],
      answer: 1,
      explanation: 'El ciclo revolucionario produjo la primera abolición moderna de la esclavitud y también su primera restauración.',
    },
    {
      id: 'revolucion-francesa-15', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué contradicción interna contiene el Código Civil de 1804?',
      options: [
        'Reconoce la propiedad colectiva y la privada al mismo tiempo',
        'Proclama la igualdad ante la ley y la libertad contractual mientras consagra la autoridad marital y la incapacidad jurídica de la mujer casada',
        'Restablece los gremios suprimidos en 1791',
        'Devuelve la jurisdicción señorial a los antiguos propietarios',
      ],
      answer: 1,
      explanation: 'Fue exportado a media Europa con las dos caras a la vez: igualdad civil para los varones, subordinación jurídica para las mujeres.',
    },
    {
      id: 'revolucion-francesa-16', era: 'Edad Contemporánea', topicId: 'revolucion-francesa', topic: 'Revolución francesa',
      question: '¿Qué efecto no buscado tuvo el bloqueo continental decretado en 1806?',
      options: [
        'Provocó la quiebra inmediata del Banco de Inglaterra',
        'Arruinó a los aliados y satélites de Francia y empujó al Imperio a intervenir en España en 1808 y a invadir Rusia en 1812',
        'Cerró el comercio francés con América',
        'Obligó a Gran Bretaña a firmar la paz en 1807',
      ],
      answer: 1,
      explanation: 'De los más de seiscientos mil hombres de la Grande Armée que entraron en Rusia regresaron unas pocas decenas de miles.',
    },
  ],
}
