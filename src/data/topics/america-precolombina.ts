import type { TopicModule } from '../types.ts'

export const americaPrecolombina: TopicModule = {
  topic: {
    id: 'america-precolombina',
    era: 'Antigüedad',
    title: 'Mesoamérica y los Andes',
    years: '3000 a. C.–1533',
    country: 'América',
    description: 'Dos focos civilizatorios que inventaron por su cuenta la agricultura, la ciudad, la escritura y el Estado, sin contacto con el resto del mundo.',
    duration: '60 min',
    level: 'Universidad',
    progress: 0,
    visual: '☀',
    color: 'terracotta',
    summary:
      'América es el mejor experimento controlado de la historia humana. Poblada desde Asia hace al menos quince mil años y aislada después, desarrolló de forma independiente la domesticación de plantas, la vida urbana, la organización estatal, la astronomía de precisión y, en el caso maya, un sistema de escritura completo. Que llegara a resultados comparables partiendo de cero es la mejor prueba disponible de que esas invenciones no son un accidente cultural europeo. Sus dos focos, Mesoamérica y el área andina, resolvieron problemas distintos con soluciones distintas: uno con maíz, mercados y escritura; otro con tubérculos, camélidos, cuerdas anudadas y una economía sin mercado. La conquista los interrumpió en un siglo, y el debate sobre cuánta población había y por qué desapareció sigue siendo uno de los más ásperos de la historiografía.',
    keyDates: [
      { date: 'c. 15000 a. C. o antes', event: 'Poblamiento de América desde Asia. Monte Verde, en Chile, documenta ocupación anterior a la cultura Clovis.' },
      { date: 'c. 7000–4000 a. C.', event: 'Domesticación independiente del maíz en México y de la patata, la quinua y el algodón en los Andes.' },
      { date: 'c. 3000–1800 a. C.', event: 'Caral y el complejo de Norte Chico en la costa peruana: arquitectura monumental contemporánea de las pirámides egipcias.' },
      { date: 'c. 1200–400 a. C.', event: 'Cultura olmeca en la costa del Golfo: cabezas colosales, calendario y bases de la tradición mesoamericana.' },
      { date: 'c. 100–550', event: 'Apogeo de Teotihuacán, con más de cien mil habitantes y una traza urbana planificada.' },
      { date: '250–900', event: 'Período clásico maya: ciudades-Estado, escritura glífica completa, cuenta larga y astronomía de precisión.' },
      { date: 'c. 800–950', event: 'Abandono de las grandes ciudades del sur maya. Sequías documentadas y reorganización hacia el norte.' },
      { date: 'c. 500–1000', event: 'Tiahuanaco y Wari en los Andes: primeros Estados de amplia escala y precedentes administrativos del incaico.' },
      { date: '1325', event: 'Fundación de Tenochtitlan sobre una isla del lago de Texcoco.' },
      { date: '1428', event: 'Triple Alianza entre Tenochtitlan, Texcoco y Tlacopan. Comienza la expansión mexica.' },
      { date: 'c. 1438–1471', event: 'Pachacútec transforma el Cuzco en la cabeza del Tahuantinsuyu.' },
      { date: '1519–1521', event: 'Llegada de Cortés, guerra con apoyo de decenas de miles de aliados indígenas y caída de Tenochtitlan.' },
      { date: '1532–1533', event: 'Captura y ejecución de Atahualpa en plena guerra civil inca. Ocupación del Cuzco.' },
    ],
    sections: [
      {
        title: 'Poblamiento y agricultura sin contacto',
        body: [
          'El poblamiento de América se produjo desde Asia nororiental, por Beringia, en un proceso que la genética y la arqueología sitúan hace al menos quince mil años y probablemente antes. El yacimiento de Monte Verde, en el sur de Chile, con ocupación fechada en torno al 14500 a. C., obligó a abandonar el modelo que hacía de la cultura Clovis la primera del continente y abrió la hipótesis de una ruta costera del Pacífico anterior al corredor libre de hielo.',
          'Lo decisivo no es la fecha sino el aislamiento posterior. Durante milenios las poblaciones americanas se desarrollaron sin contacto con Eurasia y África, de modo que todo lo que inventaron lo inventaron de nuevo. Eso convierte al continente en el mejor caso disponible para preguntarse qué hay de necesario y qué de contingente en el paso de la caza y la recolección al Estado.',
          'La domesticación agrícola es el primer resultado. En Mesoamérica se transformó el teosinte, una gramínea de mazorca minúscula, en el maíz, en un proceso de selección de miles de años que es una de las mayores hazañas de ingeniería genética de la humanidad. Se domesticaron además frijol, calabaza, chile, tomate, cacao y aguacate. En los Andes, la patata, con miles de variedades adaptadas a distintas altitudes, la quinua, el algodón, la coca y dos animales, la llama y la alpaca, además del cuy.',
          'La combinación mesoamericana de maíz, frijol y calabaza, la milpa, es nutricionalmente completa y agronómicamente sostenible, porque el frijol fija nitrógeno y la calabaza cubre el suelo. A ella se añadió la nixtamalización, cocer el maíz con cal, que libera la niacina y sin la cual una dieta basada en ese cereal produce pelagra. Es un descubrimiento bioquímico obtenido empíricamente, y su ausencia en Europa cuando se adoptó el maíz causó epidemias de pelagra durante siglos.',
          'Faltó, en cambio, casi todo el paquete ganadero eurasiático. No había caballos, bueyes, cerdos ni ovejas, y sin animales de tiro grandes la rueda, que se conocía en juguetes mesoamericanos, carecía de aplicación práctica en un terreno además muy accidentado. Esa ausencia tuvo una consecuencia enorme y no evidente: sin convivencia estrecha con ganado, las poblaciones americanas no desarrollaron inmunidad frente a las enfermedades zoonóticas que Eurasia llevaba milenios padeciendo.',
        ].join('\n\n'),
        callout:
          'La nixtamalización es un descubrimiento bioquímico obtenido por vía empírica. Europa adoptó el maíz sin ella y pagó el error con epidemias de pelagra hasta el siglo XX.',
      },
      {
        title: 'Mesoamérica: de los olmecas a Teotihuacán',
        body: [
          'Mesoamérica funciona como un área cultural con rasgos compartidos por sociedades muy distintas: el calendario doble de 260 y 365 días, el juego de pelota ritual, la pirámide escalonada, la escritura y el cómputo con base veinte, y un panteón con divinidades reconocibles de un extremo al otro. Esa unidad no implica un imperio ni una lengua común: implica siglos de intercambio, guerra y préstamo entre pueblos.',
          'La cultura olmeca, en la costa del Golfo entre 1200 y 400 a. C., es la primera con arquitectura monumental y arte de gran escala: las cabezas colosales de basalto, de hasta cuarenta toneladas, transportadas decenas de kilómetros sin animales de tiro ni ruedas. Durante décadas se discutió si fue la cultura madre de Mesoamérica o una entre varias hermanas; la investigación actual tiende a lo segundo, sin negar su papel de innovadora en iconografía y organización política.',
          'Teotihuacán, en el altiplano central, alcanzó entre los siglos I y VI más de cien mil habitantes, lo que la sitúa entre las mayores ciudades del mundo de su tiempo. Su traza es planificada en cuadrícula, con dos grandes pirámides, una calzada ceremonial y conjuntos residenciales de varios apartamentos donde vivían grupos de artesanos, algunos procedentes de otras regiones como Oaxaca o el área maya. No se ha identificado un retrato de gobernante individual, lo que ha llevado a proponer formas de gobierno colectivo poco frecuentes en la Antigüedad.',
          'Los mayas del período clásico, entre 250 y 900, no formaron un imperio sino un sistema de ciudades-Estado rivales, con Tikal, Calakmul, Palenque, Copán y decenas más. Su escritura es el único sistema completo del continente: logosilábico, capaz de registrar cualquier enunciado en su lengua, y su desciframiento progresivo desde los años cincuenta, con aportaciones decisivas de Yuri Knórozov, Tatiana Proskuriakoff, Linda Schele y David Stuart, transformó por completo el conocimiento del período.',
          'El resultado de ese desciframiento fue demoledor para la imagen anterior. Los mayas habían sido descritos como astrónomos pacíficos gobernados por sacerdotes; los textos revelaron dinastías con nombres y fechas, guerras entre ciudades, alianzas, capturas de reyes rivales y sacrificios. Su astronomía y su matemática siguen siendo asombrosas: usaron el cero de forma posicional, calcularon el ciclo de Venus con un error mínimo y manejaron una cuenta larga que sitúa cualquier fecha en un ciclo de más de cinco mil años.',
        ].join('\n\n'),
      },
      {
        title: 'El posclásico y los mexicas',
        body: [
          'Las grandes ciudades mayas del sur fueron abandonadas entre los siglos IX y X, un proceso que la divulgación llama colapso y que la investigación actual describe con más matices. Los estudios paleoclimáticos han documentado sequías prolongadas coincidentes; a ello se suman guerra endémica creciente, presión demográfica sobre suelos frágiles y una organización política de reyes divinos cuya legitimidad dependía de garantizar la lluvia y la victoria.',
          'Hablar de colapso, sin embargo, oculta que la civilización maya no desapareció: se reorganizó hacia el norte, con Chichén Itzá y después Mayapán, y a la llegada de los españoles había ciudades mayas funcionando y millones de hablantes de lenguas mayas, que siguen existiendo hoy. La lección metodológica vale para otros casos: lo que colapsa suele ser una forma política concreta, no una población ni una cultura.',
          'En el centro de México, tras Teotihuacán y Tula, los mexicas llegaron como último grupo de una serie de migraciones y fundaron Tenochtitlan en 1325 sobre una isla del lago de Texcoco. En menos de un siglo construyeron, con la Triple Alianza de 1428, un sistema de dominación sobre buena parte de Mesoamérica basado no en la administración directa sino en el tributo: los pueblos sometidos conservaban a sus señores y entregaban cargas de maíz, mantas, cacao, plumas y trabajo.',
          'Tenochtitlan tenía a la llegada de los españoles entre ciento cincuenta y doscientos mil habitantes, más que cualquier ciudad europea del momento salvo quizá Constantinopla. Estaba construida sobre chinampas, plataformas de cultivo ganadas al lago de altísima productividad, con calzadas, acueducto de agua potable, un mercado en Tlatelolco que asombró a los conquistadores, escuelas obligatorias para los niños y un sistema jurídico propio.',
          'El sacrificio humano existió y fue central en la religión mexica, sin que quepa minimizarlo ni convertirlo en explicación total. Las cifras de las crónicas españolas son propagandísticas y la arqueología del Templo Mayor ha permitido acotarlas; su lógica era cosmológica, la alimentación del sol y la continuidad del mundo, y estaba ligada a una guerra ritualizada. También fue el argumento que legitimó la conquista, lo que obliga a examinar cada fuente con cuidado. Y conviene recordar que el tributo y el sacrificio produjeron un resentimiento entre los pueblos sometidos que resultó decisivo en 1519.',
        ].join('\n\n'),
        callout:
          'Tenochtitlan tenía acueducto, mercado diario de decenas de miles de personas y escuelas obligatorias. Los conquistadores lo escribieron con asombro antes de destruirla.',
      },
      {
        title: 'Los Andes: una civilización vertical',
        body: [
          'El área andina resolvió un problema geográfico sin equivalente: un territorio donde en pocas decenas de kilómetros se pasa del desierto costero a los cuatro mil metros y de ahí a la selva amazónica. La respuesta fue lo que John Murra llamó control vertical de pisos ecológicos: comunidades que mantenían colonias permanentes en varias altitudes para disponer de pescado, maíz, tubérculos y coca sin depender de mercados.',
          'La antigüedad de la civilización andina se ha revisado mucho. Las excavaciones de Ruth Shady en Caral y en el complejo de Norte Chico documentan arquitectura monumental, plazas circulares hundidas y planificación urbana desde el tercer milenio antes de nuestra era, contemporáneas de las pirámides de Egipto, y notablemente sin cerámica y con una base económica que combinaba agricultura de algodón y pesca. Después vinieron Chavín, con su centro ceremonial de influencia panandina, los moche, con su metalurgia y su cerámica retrato, los nazca, Tiahuanaco en el Titicaca y Wari, que anticipó buena parte de la administración imperial posterior.',
          'El Tahuantinsuyu, las cuatro regiones unidas, se construyó en menos de un siglo desde el Cuzco, sobre todo a partir de Pachacútec hacia 1438. Llegó a extenderse cuatro mil kilómetros de norte a sur, desde el sur de Colombia hasta el centro de Chile, con entre ocho y doce millones de habitantes, decenas de lenguas y una red de caminos de unos cuarenta mil kilómetros con puentes colgantes, almacenes y postas de corredores.',
          'Lo administró sin escritura alfabética, sin moneda, sin mercados desarrollados y sin rueda. En su lugar usó el quipu, cuerdas anudadas que registraban cantidades en notación posicional decimal y probablemente también información no numérica que hoy se investiga; una organización de la población en unidades decimales; y un sistema de trabajo por turnos, la mita, mediante el cual las comunidades entregaban jornadas de trabajo en obras públicas, minas o ejército en lugar de tributo en bienes.',
          'El principio económico era la reciprocidad y la redistribución, no el intercambio de mercado. El Estado exigía trabajo y a cambio alimentaba y vestía a quienes lo prestaban con lo almacenado en sus depósitos, y financiaba fiestas donde la generosidad del Inca se hacía visible. La unidad social básica era el ayllu, grupo de parentesco con tierras comunes, y la religión organizaba el paisaje en huacas, lugares y objetos sagrados con culto y propiedades asignadas. Los españoles, acostumbrados a otra economía, tardaron décadas en entender cómo funcionaba y destruyeron el sistema de almacenes en pocos años.',
        ].join('\n\n'),
      },
      {
        title: 'La conquista y el desplome demográfico',
        body: [
          'La conquista de los dos imperios por contingentes de unos cientos de hombres es un hecho que exige explicación y que las versiones tradicionales explican mal. Matthew Restall ha desmontado sistemáticamente los mitos acumulados: la superioridad tecnológica existió pero fue limitada, porque los arcabuces de la época eran lentos y escasos; el papel de las alianzas indígenas fue decisivo, con decenas de miles de tlaxcaltecas y otros pueblos combatiendo contra Tenochtitlan por sus propios motivos; y la idea de que los mexicas tomaron a Cortés por un dios es una construcción posterior.',
          'A eso se sumaron circunstancias concretas: en el Perú, los españoles llegaron en medio de una guerra civil entre Huáscar y Atahualpa que acababa de dividir el imperio; en México, la captura del gobernante en un sistema de mando muy centralizado paralizó la respuesta. Y en ambos casos la epidemia hizo el resto.',
          'La viruela llegó a México en 1520, entre el sitio y la caída de Tenochtitlan, y mató a una parte enorme de la población defensora, incluido el sucesor de Moctezuma. Después vinieron sarampión, tifus, gripe y, ya en el siglo XVII, la fiebre amarilla y la malaria. Alfred Crosby llamó intercambio colombino a ese movimiento bidireccional de plantas, animales y patógenos: América recibió trigo, caña, ganado y enfermedades, y entregó maíz, patata, tomate, cacao y tabaco, con efectos demográficos enormes en Europa, África y Asia.',
          'La magnitud del desplome es el debate más agrio del campo. Las estimaciones de población americana en 1492 van desde unos ocho millones, en las cifras bajas de la primera mitad del siglo XX, hasta más de cien millones en las propuestas más altas de la escuela de Berkeley y de Henry Dobyns. El consenso actual se sitúa en un rango amplio, en torno a cuarenta o sesenta millones, con una caída de hasta el noventa por ciento en el siglo posterior al contacto, mayor en las islas y en las tierras bajas cálidas.',
          'Sobre las causas, la posición dominante atribuye el peso principal a las epidemias frente a poblaciones sin inmunidad previa, pero la investigación reciente insiste en que esa explicación no puede aislarse de la conquista misma. Las guerras, el trabajo forzoso en minas, el desplazamiento de comunidades, la ruptura de los sistemas agrícolas y la desestructuración social multiplicaron la letalidad de unos patógenos que en una sociedad no sometida habrían causado mucha menos mortalidad. La epidemia explica la escala; la violencia y el régimen colonial explican por qué no hubo recuperación.',
        ].join('\n\n'),
        callout:
          'Atribuir el desplome solo a los microbios convierte una catástrofe política en un accidente biológico. La epidemia explica la escala; el trabajo forzoso, la guerra y la ruptura de los sistemas agrarios explican por qué la población no se recuperó.',
      },
    ],
    concepts: [
      { term: 'Beringia', definition: 'Puente terrestre entre Asia y América durante la última glaciación. La ruta costera del Pacífico compite hoy con el corredor interior como vía principal de poblamiento.' },
      { term: 'Milpa', definition: 'Cultivo asociado de maíz, frijol y calabaza. Nutricionalmente completo y agronómicamente sostenible, porque el frijol fija nitrógeno y la calabaza cubre el suelo.' },
      { term: 'Nixtamalización', definition: 'Cocción del maíz con cal, que libera la niacina. Sin ella una dieta basada en maíz produce pelagra, como ocurrió en Europa tras adoptar el cereal sin la técnica.' },
      { term: 'Cuenta larga', definition: 'Sistema calendárico maya que sitúa cualquier fecha en un ciclo de más de cinco mil años, con notación posicional y uso del cero.' },
      { term: 'Escritura glífica maya', definition: 'Único sistema completo de América: logosilábico y capaz de registrar cualquier enunciado. Su desciframiento desde los años cincuenta transformó el campo.' },
      { term: 'Chinampa', definition: 'Plataforma de cultivo construida sobre el lago con limo y vegetación. De altísima productividad, sostuvo la población de Tenochtitlan.' },
      { term: 'Triple Alianza', definition: 'Pacto de 1428 entre Tenochtitlan, Texcoco y Tlacopan. Base de un sistema de dominación tributaria, no de administración territorial directa.' },
      { term: 'Tributo mexica', definition: 'Entrega periódica de bienes y trabajo por los pueblos sometidos, que conservaban a sus señores. Su peso generó el resentimiento que Cortés aprovechó.' },
      { term: 'Control vertical', definition: 'Estrategia andina descrita por Murra: colonias permanentes en varios pisos ecológicos para obtener productos de distintas altitudes sin recurrir a mercados.' },
      { term: 'Ayllu', definition: 'Grupo de parentesco andino con tierras comunes y obligaciones recíprocas. Unidad social básica sobre la que se apoyó el Estado incaico.' },
      { term: 'Quipu', definition: 'Conjunto de cuerdas anudadas usado para registrar cantidades en notación decimal posicional y probablemente también información no numérica.' },
      { term: 'Mita', definition: 'Trabajo por turnos que las comunidades andinas debían al Estado en obras, minas o ejército. Sustituía al tributo en bienes y fue después reutilizada por los españoles.' },
      { term: 'Reciprocidad y redistribución', definition: 'Principio económico andino: el Estado exige trabajo y devuelve alimento, ropa y fiesta desde sus almacenes, sin mercado ni moneda.' },
      { term: 'Intercambio colombino', definition: 'Movimiento bidireccional de plantas, animales y patógenos tras 1492, descrito por Crosby. Reordenó la demografía de cuatro continentes.' },
    ],
    debates: [
      {
        question: '¿Qué explica el abandono de las ciudades mayas del sur?',
        positions: [
          {
            school: 'Sequía documentada',
            argument:
              'Los registros paleoclimáticos de sedimentos lacustres y espeleotemas muestran episodios de sequía prolongada entre los siglos IX y X coincidentes con las últimas fechas inscritas en las ciudades del sur.',
          },
          {
            school: 'Causas políticas y ecológicas combinadas',
            argument:
              'La guerra endémica creciente, la presión demográfica sobre suelos frágiles y una legitimidad real basada en garantizar lluvia y victoria produjeron una crisis de la forma política del reino divino.',
          },
          {
            school: 'Crítica del concepto de colapso',
            argument:
              'La población y la cultura maya no desaparecieron: se reorganizaron hacia el norte y siguen existiendo. Lo que colapsó fue una forma política concreta, no una civilización.',
          },
        ],
        state:
          'Predomina la explicación multicausal con la sequía como detonante sobre una estructura ya tensionada. La crítica al término colapso se ha impuesto en la literatura especializada.',
      },
      {
        question: '¿Cuánta población había en América en 1492 y por qué desapareció?',
        positions: [
          {
            school: 'Cifras bajas (Kroeber; Rosenblat)',
            argument:
              'Las estimaciones tempranas del siglo XX, basadas en densidades comparadas y en desconfianza hacia las cifras de los cronistas, situaban la población total en torno a ocho o quince millones.',
          },
          {
            school: 'Cifras altas (escuela de Berkeley; Dobyns)',
            argument:
              'La reconstrucción a partir de registros tributarios, capacidad agrícola y tasas de despoblación conocidas eleva la cifra por encima de los cincuenta millones y hasta más de cien en las propuestas máximas.',
          },
          {
            school: 'Epidemia dentro de la conquista (Cook; investigación reciente)',
            argument:
              'Los patógenos explican la escala de la mortalidad, pero su letalidad se multiplicó por la guerra, el trabajo forzoso, el desplazamiento de comunidades y la ruptura de los sistemas agrarios.',
          },
        ],
        state:
          'El consenso actual maneja un rango de cuarenta a sesenta millones con caídas de hasta el noventa por ciento. La discusión se ha desplazado de la cifra al peso relativo de los factores biológicos y políticos.',
      },
      {
        question: '¿Cómo pudieron unos cientos de hombres derribar dos imperios?',
        positions: [
          {
            school: 'Superioridad tecnológica y militar',
            argument:
              'Acero, caballos, arcabuces y perros de guerra dieron una ventaja táctica decisiva frente a ejércitos organizados para otro tipo de combate y con armamento de piedra y madera.',
          },
          {
            school: 'Alianzas indígenas y coyuntura (Restall, 2003)',
            argument:
              'Decenas de miles de tlaxcaltecas y otros pueblos combatieron contra Tenochtitlan por motivos propios; en el Perú los españoles llegaron en plena guerra civil entre Huáscar y Atahualpa. La conquista fue en gran medida indígena.',
          },
        ],
        state:
          'La segunda explicación es hoy dominante. Restall ha desmontado además mitos consolidados, como la idea de que los mexicas tomaron a Cortés por un dios, que es una construcción posterior.',
      },
    ],
    sources: [
      { author: 'Escribas mayas', title: 'Inscripciones de Tikal, Palenque, Copán y Calakmul', year: 'siglos IV–IX', kind: 'primaria', note: 'Textos dinásticos con fechas exactas. Su desciframiento cambió la imagen de los mayas como sociedad pacífica de sacerdotes.' },
      { author: 'Anónimo maya', title: 'Códice de Dresde', year: 'siglos XI–XII', kind: 'primaria', note: 'Uno de los cuatro códices mayas conservados. Contiene tablas de Venus y de eclipses de notable precisión.' },
      { author: 'Anónimo quiché', title: 'Popol Vuh', year: 'c. 1550', kind: 'primaria', note: 'Relato de creación y epopeya de los héroes gemelos, transcrito en alfabeto latino a partir de tradición anterior.' },
      { author: 'Escribas mexicas', title: 'Códice Mendoza', year: 'c. 1541', kind: 'primaria', note: 'Registro pictográfico de la historia mexica, de las listas de tributo y de la educación. Fuente central sobre la economía imperial.' },
      { author: 'Hernán Cortés', title: 'Cartas de relación', year: '1519–1526', kind: 'primaria', note: 'Informes al emperador escritos para justificar una empresa jurídicamente irregular. Fuente esencial y deliberadamente interesada.' },
      { author: 'Bernardino de Sahagún e informantes nahuas', title: 'Códice Florentino', year: '1577', kind: 'primaria', note: 'Enciclopedia bilingüe elaborada con informantes indígenas. La mayor fuente etnográfica sobre el mundo nahua, con voz náhuatl propia.' },
      { author: 'Bernal Díaz del Castillo', title: 'Historia verdadera de la conquista de la Nueva España', year: '1568', kind: 'primaria', note: 'Relato de un soldado escrito décadas después, en polémica con las crónicas oficiales.' },
      { author: 'Anales de Tlatelolco y cantares nahuas', title: 'Testimonios indígenas de la conquista', year: '1528 y ss.', kind: 'primaria', note: 'Versión de los vencidos, recogida por León-Portilla. Contrapunto imprescindible a las crónicas españolas.' },
      { author: 'Bartolomé de las Casas', title: 'Brevísima relación de la destrucción de las Indias', year: '1552', kind: 'primaria', note: 'Denuncia escrita para forzar un cambio legal. Sus cifras son retóricas y su testimonio sobre los métodos, de primera mano.' },
      { author: 'Pedro Cieza de León', title: 'Crónica del Perú', year: '1553', kind: 'primaria', note: 'Descripción del Tahuantinsuyu recogida de informantes andinos poco después de la conquista.' },
      { author: 'Inca Garcilaso de la Vega', title: 'Comentarios reales de los incas', year: '1609', kind: 'primaria', note: 'Historia escrita por un mestizo cuzqueño desde España. Fuente valiosa y a la vez idealización deliberada del imperio.' },
      { author: 'Felipe Guaman Poma de Ayala', title: 'Nueva corónica y buen gobierno', year: 'c. 1615', kind: 'primaria', note: 'Carta ilustrada de casi mil doscientas páginas al rey de España denunciando el régimen colonial desde una perspectiva andina.' },
      { author: 'Titu Cusi Yupanqui', title: 'Instrucción al licenciado Lope García de Castro', year: '1570', kind: 'primaria', note: 'Relato de la conquista dictado por un inca de Vilcabamba, con la versión del bando derrotado.' },
      { author: 'Alfred Crosby', title: 'El intercambio colombino', year: '1972', kind: 'estudio', note: 'Formula el concepto que reorganizó el estudio de las consecuencias biológicas de 1492.' },
      { author: 'John Murra', title: 'La organización económica del Estado inca', year: '1955', kind: 'estudio', note: 'Propone el control vertical de pisos ecológicos y la economía de reciprocidad sin mercado.' },
      { author: 'María Rostworowski', title: 'Historia del Tahuantinsuyu', year: '1988', kind: 'estudio', note: 'Síntesis andina de referencia, apoyada en documentación colonial temprana y en etnohistoria.' },
      { author: 'Miguel León-Portilla', title: 'Visión de los vencidos', year: '1959', kind: 'estudio', note: 'Recopilación y estudio de los testimonios indígenas de la conquista. Cambió la enseñanza del tema en el mundo hispánico.' },
      { author: 'Linda Schele y David Freidel', title: 'Una selva de reyes', year: '1990', kind: 'estudio', note: 'Divulgación del desciframiento glífico y de la historia dinástica maya reconstruida a partir de él.' },
      { author: 'Simon Martin y Nikolai Grube', title: 'Chronicle of the Maya Kings and Queens', year: '2000', kind: 'estudio', note: 'Reconstrucción dinástica ciudad por ciudad a partir de las inscripciones.' },
      { author: 'Noble David Cook', title: 'La conquista biológica', year: '1998', kind: 'estudio', note: 'Analiza el desplome demográfico sin separarlo del contexto de guerra y trabajo forzoso.' },
      { author: 'Matthew Restall', title: 'Los siete mitos de la conquista española', year: '2003', kind: 'estudio', note: 'Desmonta las explicaciones tradicionales y sitúa las alianzas indígenas en el centro del proceso.' },
      { author: 'Charles C. Mann', title: '1491', year: '2005', kind: 'estudio', note: 'Síntesis divulgativa del cambio de paradigma sobre demografía, agricultura y transformación del paisaje americano.' },
      { author: 'Terence DAltroy', title: 'The Incas', year: '2002', kind: 'estudio', note: 'Manual actual sobre la organización, la economía y la arqueología del Tahuantinsuyu.' },
      { author: 'Camilla Townsend', title: 'El quinto sol', year: '2019', kind: 'estudio', note: 'Historia de los mexicas escrita a partir de fuentes en náhuatl, desde su propia perspectiva.' },
    ],
  },
  questions: [
    {
      id: 'america-precolombina-1', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Por qué se considera América un caso decisivo para la historia comparada?',
      options: [
        'Porque su poblamiento fue el más reciente del planeta',
        'Porque desarrolló agricultura, ciudades, Estado y escritura de forma independiente, sin contacto con Eurasia',
        'Porque conservó economías de caza y recolección hasta 1492',
        'Porque recibió influencias asiáticas continuas por vía marítima',
      ],
      answer: 1,
      explanation: 'Que llegara a resultados comparables partiendo de cero prueba que esas invenciones no son un accidente cultural europeo.',
    },
    {
      id: 'america-precolombina-2', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué importancia tuvo el yacimiento de Monte Verde, en Chile?',
      options: [
        'Confirmó que la cultura Clovis fue la primera del continente',
        'Documentó una ocupación anterior a Clovis y abrió la hipótesis de una ruta costera del Pacífico',
        'Demostró el origen africano del poblamiento americano',
        'Fechó la domesticación del maíz en el sur del continente',
      ],
      answer: 1,
      explanation: 'Su datación en torno al 14500 a. C. obligó a abandonar el modelo que hacía de Clovis el punto de partida.',
    },
    {
      id: 'america-precolombina-3', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Por qué es nutricional y agronómicamente notable la milpa?',
      options: [
        'Porque permite tres cosechas anuales de maíz',
        'Porque combina maíz, frijol y calabaza: el frijol fija nitrógeno, la calabaza cubre el suelo y el conjunto es nutricionalmente completo',
        'Porque no requiere riego en ninguna región',
        'Porque sustituye a la ganadería como fuente de proteína animal',
      ],
      answer: 1,
      explanation: 'A ella se añadió la nixtamalización, sin la cual una dieta basada en maíz produce pelagra.',
    },
    {
      id: 'america-precolombina-4', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué consecuencia no evidente tuvo la ausencia de grandes animales domésticos en América?',
      options: [
        'Impidió el desarrollo de la agricultura intensiva',
        'Dejó a las poblaciones sin inmunidad frente a las enfermedades zoonóticas que Eurasia llevaba milenios padeciendo',
        'Obligó a abandonar la vida urbana',
        'Retrasó la domesticación del maíz varios milenios',
      ],
      answer: 1,
      explanation: 'También dejó sin aplicación práctica a la rueda, conocida en juguetes mesoamericanos, en un terreno además muy accidentado.',
    },
    {
      id: 'america-precolombina-5', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué rasgos comparten las sociedades del área cultural mesoamericana?',
      options: [
        'Una lengua común y un gobierno unificado',
        'El calendario doble de 260 y 365 días, el juego de pelota ritual, la pirámide escalonada y el cómputo con base veinte',
        'La ausencia de escritura y de astronomía',
        'La economía basada exclusivamente en la caza',
      ],
      answer: 1,
      explanation: 'Esa unidad no implica un imperio: implica siglos de intercambio, guerra y préstamo entre pueblos distintos.',
    },
    {
      id: 'america-precolombina-6', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué particularidad presenta Teotihuacán respecto de otras capitales antiguas?',
      options: [
        'Que carecía de arquitectura monumental',
        'Que no se ha identificado un retrato de gobernante individual, lo que ha llevado a proponer formas de gobierno colectivo',
        'Que estaba habitada solo por sacerdotes',
        'Que fue fundada por los mexicas en el siglo XIV',
      ],
      answer: 1,
      explanation: 'Superó los cien mil habitantes, con traza en cuadrícula y conjuntos residenciales donde vivían artesanos de otras regiones.',
    },
    {
      id: 'america-precolombina-7', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué cambió el desciframiento de la escritura maya?',
      options: [
        'Confirmó la imagen de una sociedad pacífica gobernada por astrónomos',
        'Reveló dinastías con nombres y fechas, guerras entre ciudades, alianzas y capturas de reyes rivales',
        'Demostró que los textos eran solo calendáricos',
        'Probó que la escritura era de origen olmeca',
      ],
      answer: 1,
      explanation: 'Es el único sistema completo del continente, logosilábico, y su desciframiento avanzó desde los años cincuenta con Knórozov, Proskuriakoff, Schele y Stuart.',
    },
    {
      id: 'america-precolombina-8', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué objeción se hace hoy al término colapso maya?',
      options: [
        'Que las ciudades del sur nunca fueron abandonadas',
        'Que la población y la cultura no desaparecieron: se reorganizaron hacia el norte y siguen existiendo. Lo que colapsó fue una forma política',
        'Que la sequía no está documentada en ningún registro',
        'Que el abandono ocurrió tras la llegada de los españoles',
      ],
      answer: 1,
      explanation: 'La explicación predominante combina sequía como detonante con guerra endémica y presión demográfica sobre suelos frágiles.',
    },
    {
      id: 'america-precolombina-9', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Cómo dominaban los mexicas los territorios sometidos?',
      options: [
        'Mediante administración directa con funcionarios nombrados desde Tenochtitlan',
        'Mediante tributo: los pueblos conservaban a sus señores y entregaban bienes y trabajo',
        'Mediante colonización con población procedente del valle de México',
        'Mediante alianzas matrimoniales exclusivamente',
      ],
      answer: 1,
      explanation: 'El peso del tributo y del sacrificio generó un resentimiento entre los pueblos sometidos que resultó decisivo en 1519.',
    },
    {
      id: 'america-precolombina-10', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué caracterizaba a Tenochtitlan en 1519?',
      options: [
        'Un asentamiento disperso de unos diez mil habitantes',
        'Entre ciento cincuenta y doscientos mil habitantes, chinampas, acueducto de agua potable, un gran mercado y escuelas obligatorias',
        'Una ciudad amurallada sin agricultura propia',
        'Una capital sin comercio, sostenida solo por el tributo',
      ],
      answer: 1,
      explanation: 'Era mayor que cualquier ciudad europea del momento salvo quizá Constantinopla, y las chinampas eran plataformas de cultivo de altísima productividad.',
    },
    {
      id: 'america-precolombina-11', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Cómo debe tratarse la cuestión del sacrificio humano mexica?',
      options: [
        'Negando su existencia por tratarse de propaganda española',
        'Reconociéndolo como práctica central y a la vez acotando las cifras con arqueología, sabiendo que fue el argumento que legitimó la conquista',
        'Considerándolo la causa única del hundimiento del imperio',
        'Atribuyéndolo exclusivamente a los pueblos sometidos',
      ],
      answer: 1,
      explanation: 'Su lógica era cosmológica y estaba ligada a una guerra ritualizada. Las cifras de las crónicas son propagandísticas y la arqueología del Templo Mayor las ha acotado.',
    },
    {
      id: 'america-precolombina-12', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿En qué consiste el control vertical descrito por John Murra?',
      options: [
        'En la jerarquía administrativa del Estado inca',
        'En mantener colonias permanentes en varios pisos ecológicos para obtener productos de distintas altitudes sin recurrir a mercados',
        'En la construcción de terrazas de cultivo en las laderas',
        'En el sistema de caminos que unía la costa con la sierra',
      ],
      answer: 1,
      explanation: 'Es la respuesta andina a un territorio donde en pocas decenas de kilómetros se pasa del desierto costero a los cuatro mil metros.',
    },
    {
      id: 'america-precolombina-13', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Qué han demostrado las excavaciones de Caral y Norte Chico?',
      options: [
        'Que la civilización andina comenzó con los incas',
        'Que hubo arquitectura monumental y planificación urbana desde el tercer milenio antes de nuestra era, sin cerámica',
        'Que la costa peruana estuvo deshabitada hasta el año 1000',
        'Que Chavín fue el primer centro ceremonial del continente',
      ],
      answer: 1,
      explanation: 'Son contemporáneas de las pirámides de Egipto y su economía combinaba agricultura de algodón y pesca.',
    },
    {
      id: 'america-precolombina-14', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Con qué instrumentos administró el Tahuantinsuyu a millones de personas?',
      options: [
        'Escritura alfabética, moneda y mercados regionales',
        'Quipus de notación decimal, organización decimal de la población y trabajo por turnos mediante la mita',
        'Un sistema de tributo en oro y plata',
        'Una burocracia reclutada por examen',
      ],
      answer: 1,
      explanation: 'Sin escritura alfabética, sin moneda, sin mercados desarrollados y sin rueda, con una red de unos cuarenta mil kilómetros de caminos.',
    },
    {
      id: 'america-precolombina-15', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: 'Según Matthew Restall, ¿qué factor fue decisivo en la caída de Tenochtitlan?',
      options: [
        'La superioridad absoluta del armamento de fuego español',
        'Las alianzas indígenas: decenas de miles de tlaxcaltecas y otros pueblos combatieron por sus propios motivos',
        'La creencia mexica de que Cortés era un dios',
        'La superioridad naval española en el lago',
      ],
      answer: 1,
      explanation: 'La idea de que los mexicas tomaron a Cortés por un dios es una construcción posterior, y los arcabuces de la época eran lentos y escasos.',
    },
    {
      id: 'america-precolombina-16', era: 'Antigüedad', topicId: 'america-precolombina', topic: 'Mesoamérica y los Andes',
      question: '¿Cómo se explica hoy el desplome demográfico posterior a 1492?',
      options: [
        'Como resultado exclusivo de las epidemias, sin relación con la conquista',
        'Los patógenos explican la escala, pero su letalidad se multiplicó por la guerra, el trabajo forzoso y la ruptura de los sistemas agrarios',
        'Como consecuencia de migraciones voluntarias hacia el interior',
        'Como un descenso menor, dentro de la variación demográfica normal',
      ],
      answer: 1,
      explanation: 'El consenso maneja un rango de cuarenta a sesenta millones en 1492 y caídas de hasta el noventa por ciento en el siglo posterior al contacto.',
    },
  ],
}
