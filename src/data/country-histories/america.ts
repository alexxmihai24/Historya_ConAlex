import type { CountryHistory } from '../types.ts'

/** América del Norte, Central, del Sur y Oceanía. */
export const AMERICA: Record<string, CountryHistory> = {
  Argentina: {
    text: [
      'Antes de los europeos, el noroeste formaba parte de la periferia del Imperio inca, mientras que en la Pampa y la Patagonia vivían pueblos cazadores. Pedro de Mendoza fundó Buenos Aires en 1536, abandonada y refundada por Juan de Garay en 1580. La región dependió del virreinato del Perú hasta que en 1776 se creó el virreinato del Río de la Plata, con capital en Buenos Aires.',
      'La Revolución de Mayo de 1810 inició la independencia, declarada en Tucumán en 1816; José de San Martín cruzó los Andes para liberar Chile y Perú. Siguieron décadas de guerras civiles entre unitarios y federales y la dictadura de Juan Manuel de Rosas. Tras la Constitución de 1853, llegaron millones de inmigrantes, sobre todo italianos y españoles, y Argentina se convirtió hacia 1900 en uno de los países más ricos del mundo gracias a la carne y el trigo. La «conquista del desierto» de 1878-1885 sometió a los pueblos indígenas de la Patagonia.',
      'El siglo XX alternó democracia y golpes militares. Juan Domingo Perón, presidente desde 1946, con su esposa Eva, creó un movimiento de masas que marcó toda la política posterior. La dictadura de 1976-1983 hizo desaparecer a unas treinta mil personas y perdió la guerra de las Malvinas contra Gran Bretaña en 1982, lo que trajo la democracia en 1983. El país ha sufrido crisis económicas recurrentes, como el corralito de 2001.',
    ],
    dates: [['1580', 'Refundación de Buenos Aires.'], ['1816', 'Declaración de independencia.'], ['1853', 'Constitución.'], ['1946', 'Perón, presidente.'], ['1976-1983', 'Dictadura militar.'], ['1982', 'Guerra de las Malvinas.']],
  },
  Bolivia: {
    text: [
      'Junto al lago Titicaca floreció entre los siglos V y XI la civilización de Tiahuanaco. En el siglo XV los incas conquistaron el altiplano. Los españoles llegaron en la década de 1530, y en 1545 descubrieron la montaña de plata de Potosí, que fue durante un siglo la mayor fuente de plata del mundo; los indígenas trabajaban en sus minas mediante el sistema forzoso de la mita.',
      'El territorio, llamado Alto Perú, dependió de Lima y después de Buenos Aires. En 1780-1781 las rebeliones de Túpac Amaru II y Túpac Katari sacudieron los Andes. Tras la guerra de independencia, Bolivia nació en 1825 y tomó su nombre de Simón Bolívar. Perdió su costa ante Chile en la guerra del Pacífico (1879-1884) y el Chaco ante Paraguay en la guerra de 1932-1935.',
      'La revolución de 1952 nacionalizó las minas, hizo la reforma agraria y dio el voto a los indígenas. Siguieron años de golpes militares; en 1967 el Che Guevara fue capturado y ejecutado en Bolivia. En 2006 Evo Morales se convirtió en el primer presidente indígena, y en 2009 una nueva constitución declaró el país Estado Plurinacional.',
    ],
    dates: [['s. V-XI', 'Civilización de Tiahuanaco.'], ['1545', 'Descubrimiento de la plata de Potosí.'], ['1825', 'Independencia.'], ['1879-1884', 'Pérdida del litoral en la guerra del Pacífico.'], ['1952', 'Revolución nacional.'], ['2006', 'Evo Morales, primer presidente indígena.']],
  },
  Brasil: {
    text: [
      'Brasil estaba habitado por millones de indígenas de pueblos como los tupí y los guaraní cuando Pedro Álvares Cabral llegó en 1500 y lo reclamó para Portugal. El primer negocio fue el palo brasil, que dio nombre al país, y después el azúcar, cultivado en el nordeste con esclavos africanos. Brasil fue el mayor destino de la trata atlántica: recibió unos cuatro millones de africanos. En el siglo XVIII el oro de Minas Gerais trasladó el centro de la colonia hacia el sur.',
      'Huyendo de Napoleón, la corte portuguesa se instaló en Río de Janeiro en 1808. En 1822 el príncipe Pedro proclamó la independencia y se convirtió en emperador: Brasil fue una monarquía hasta 1889. Fue el último país de América en abolir la esclavitud, en 1888, y al año siguiente se proclamó la república.',
      'En el siglo XX el café, la industria y la inmigración europea y japonesa transformaron el país. Getúlio Vargas gobernó entre 1930 y 1954 y creó el Estado Novo. En 1960 se inauguró la nueva capital, Brasilia. Tras la dictadura militar de 1964 a 1985, Brasil volvió a la democracia. Hoy es la mayor economía de América Latina.',
    ],
    dates: [['1500', 'Llegada de Cabral.'], ['1808', 'La corte portuguesa se instala en Río.'], ['1822', 'Independencia.'], ['1888', 'Abolición de la esclavitud.'], ['1889', 'República.'], ['1964-1985', 'Dictadura militar.']],
  },
  Chile: {
    text: [
      'El norte de Chile fue parte del Imperio inca, pero en el sur los mapuches resistieron tanto a los incas como a los españoles. Pedro de Valdivia fundó Santiago en 1541. La guerra de Arauco contra los mapuches duró más de tres siglos, y el poema La Araucana de Ercilla la cantó ya en el siglo XVI.',
      'Chile proclamó su primer gobierno propio en 1810 y se independizó tras la victoria de Chacabuco de 1817, con San Martín y Bernardo O’Higgins. Tuvo un Estado estable y pronto consolidado. Venció a Perú y Bolivia en la guerra del Pacífico (1879-1884) y ganó los desiertos del norte, ricos en salitre y más tarde en cobre. A finales del siglo XIX ocupó definitivamente las tierras mapuches.',
      'En 1970 fue elegido el socialista Salvador Allende. El 11 de septiembre de 1973 un golpe militar dirigido por Augusto Pinochet bombardeó el palacio de La Moneda, donde murió Allende. La dictadura asesinó e hizo desaparecer a miles de personas y aplicó reformas económicas neoliberales. En el plebiscito de 1988 los chilenos dijeron no a Pinochet, y en 1990 volvió la democracia.',
    ],
    dates: [['1541', 'Fundación de Santiago.'], ['1818', 'Proclamación de la independencia.'], ['1879-1884', 'Guerra del Pacífico.'], ['1973', 'Golpe de Pinochet.'], ['1988', 'Plebiscito del no.'], ['1990', 'Retorno a la democracia.']],
  },
  Colombia: {
    text: [
      'Antes de los españoles, los muiscas del altiplano de Bogotá eran famosos por su orfebrería en oro, que dio origen a la leyenda de El Dorado, y los tayronas vivían en la sierra Nevada de Santa Marta. Los españoles fundaron Santa Marta en 1525, Cartagena de Indias en 1533 y Bogotá en 1538. Desde 1739 la región fue el virreinato de Nueva Granada.',
      'El grito de independencia de 1810 fue seguido de guerras hasta que Simón Bolívar venció en Boyacá en 1819. Nació la Gran Colombia, que incluía Venezuela, Ecuador y Panamá y se deshizo en 1830. El siglo XIX estuvo marcado por las guerras entre liberales y conservadores; la guerra de los Mil Días, de 1899 a 1902, fue seguida de la pérdida de Panamá en 1903.',
      'El asesinato del líder liberal Jorge Eliécer Gaitán en 1948 desató el Bogotazo y un periodo de violencia con cientos de miles de muertos. Desde los años sesenta surgieron guerrillas como las FARC y el ELN, y en los ochenta el narcotráfico, con Pablo Escobar, sumió al país en el terror. El acuerdo de paz con las FARC de 2016 puso fin al conflicto armado más largo de América. Gabriel García Márquez, premio Nobel en 1982, contó ese país en Cien años de soledad.',
    ],
    dates: [['1538', 'Fundación de Bogotá.'], ['1819', 'Batalla de Boyacá.'], ['1903', 'Separación de Panamá.'], ['1948', 'Bogotazo.'], ['1964', 'Nacen las FARC.'], ['2016', 'Acuerdo de paz.']],
  },
  Ecuador: {
    text: [
      'En la costa de Ecuador floreció la cultura Valdivia, una de las primeras de América en fabricar cerámica, hacia el 3500 a. C. Los incas conquistaron la región a finales del siglo XV, y Quito fue la segunda capital del imperio. La guerra entre Atahualpa, que reinaba desde Quito, y su hermano Huáscar facilitó la conquista española de 1532-1534.',
      'Quito fue sede de una audiencia española y un gran centro de arte colonial, la Escuela Quiteña. El primer grito de independencia de América del Sur se dio en Quito en 1809. Sucre venció en la batalla de Pichincha en 1822, y Ecuador formó parte de la Gran Colombia hasta separarse en 1830.',
      'El siglo XIX enfrentó a conservadores de la sierra, como Gabriel García Moreno, y liberales de la costa, como Eloy Alfaro. El cacao, los plátanos y, desde 1972, el petróleo sostuvieron la economía. Ecuador perdió gran parte de la Amazonia ante Perú en 1942 y firmó la paz definitiva en 1998. En 2000 adoptó el dólar como moneda. En 2008 su constitución fue la primera en reconocer derechos a la naturaleza.',
    ],
    dates: [['c. 3500 a. C.', 'Cultura Valdivia.'], ['1534', 'Conquista española de Quito.'], ['1809', 'Primer grito de independencia.'], ['1822', 'Batalla de Pichincha.'], ['1830', 'Separación de la Gran Colombia.'], ['2000', 'Dolarización.']],
  },
  Guyana: {
    text: [
      'La región estaba habitada por pueblos caribes y arahuacos. Los neerlandeses establecieron colonias en el siglo XVII a lo largo de los ríos Esequibo, Demerara y Berbice, con plantaciones de azúcar trabajadas por esclavos africanos. La gran rebelión de esclavos de Berbice en 1763 duró casi un año.',
      'Gran Bretaña ocupó las colonias y las unió en 1831 como Guayana Británica. Tras la abolición de la esclavitud en 1834, los británicos trajeron cientos de miles de trabajadores de la India, que hoy son el grupo más numeroso de la población.',
      'Guyana se independizó en 1966 y es el único país de América del Sur con el inglés como lengua oficial. La política ha estado marcada por la rivalidad entre la población de origen indio y la de origen africano. Venezuela reclama el territorio al oeste del Esequibo, dos tercios del país. El descubrimiento de petróleo en el mar en 2015 ha convertido a Guyana en una de las economías que más crecen del mundo.',
    ],
    dates: [['1763', 'Rebelión de esclavos de Berbice.'], ['1831', 'Guayana Británica.'], ['1834', 'Abolición de la esclavitud.'], ['1966', 'Independencia.'], ['2015', 'Descubrimiento de petróleo.']],
  },
  Paraguay: {
    text: [
      'La región estaba habitada por el pueblo guaraní, cuya lengua sigue siendo hoy oficial y la habla la mayoría de los paraguayos. Los españoles fundaron Asunción en 1537, que fue durante un tiempo el centro de la colonización del Río de la Plata. Entre 1609 y 1767 los jesuitas crearon las reducciones, pueblos misioneros guaraníes con gran autonomía, hasta su expulsión.',
      'Paraguay se independizó en 1811, y el doctor José Gaspar Rodríguez de Francia lo gobernó como dictador perpetuo hasta 1840, aislándolo del exterior. Bajo Francisco Solano López, el país se enfrentó en la guerra de la Triple Alianza (1864-1870) a Brasil, Argentina y Uruguay: murió quizá más de la mitad de la población y la gran mayoría de los hombres adultos.',
      'Paraguay ganó la guerra del Chaco contra Bolivia en 1932-1935. Alfredo Stroessner gobernó como dictador de 1954 a 1989, una de las dictaduras más largas de América. Desde entonces es una democracia. Su gran riqueza es la energía hidroeléctrica de las presas de Itaipú y Yacyretá.',
    ],
    dates: [['1537', 'Fundación de Asunción.'], ['1609', 'Primeras reducciones jesuitas.'], ['1811', 'Independencia.'], ['1864-1870', 'Guerra de la Triple Alianza.'], ['1932-1935', 'Guerra del Chaco.'], ['1954-1989', 'Dictadura de Stroessner.']],
  },
  Perú: {
    text: [
      'Perú es una de las cunas de la civilización: la ciudad de Caral tiene casi cinco mil años. Después florecieron Chavín, Paracas, Nazca con sus líneas en el desierto, los mochicas, Wari y Chimú. Desde el siglo XV el Imperio inca, con capital en Cuzco, dominó los Andes desde Colombia hasta Chile, con una red de caminos de miles de kilómetros y ciudades como Machu Picchu.',
      'Francisco Pizarro capturó al inca Atahualpa en Cajamarca en 1532 y fundó Lima en 1535. El virreinato del Perú fue durante dos siglos el centro del poder español en América del Sur, gracias a la plata de Potosí. La rebelión de Túpac Amaru II en 1780 fue aplastada. San Martín proclamó la independencia en 1821, y la victoria de Ayacucho en 1824 puso fin al dominio español en el continente.',
      'Perú perdió territorio ante Chile en la guerra del Pacífico (1879-1884). El siglo XX alternó gobiernos civiles y militares. En los años ochenta la guerrilla maoísta Sendero Luminoso desató un conflicto que causó unos setenta mil muertos. Alberto Fujimori, presidente de 1990 a 2000, derrotó a Sendero y dio un autogolpe en 1992; fue condenado por violaciones de derechos humanos.',
    ],
    dates: [['c. 2600 a. C.', 'Ciudad de Caral.'], ['1532', 'Captura de Atahualpa en Cajamarca.'], ['1535', 'Fundación de Lima.'], ['1821', 'Proclamación de la independencia.'], ['1824', 'Batalla de Ayacucho.'], ['1980-2000', 'Conflicto armado con Sendero Luminoso.']],
  },
  Surinam: {
    text: [
      'Habitado por pueblos arahuacos y caribes, el territorio fue colonizado por los ingleses y, en 1667, cedido a los Países Bajos a cambio de Nueva Ámsterdam, la futura Nueva York. Las plantaciones de azúcar se basaban en el trabajo de esclavos africanos; muchos huyeron a la selva y formaron comunidades libres, los cimarrones, que todavía existen.',
      'Los Países Bajos abolieron la esclavitud en 1863. Después trajeron trabajadores de la India, de Java y de China, lo que hizo de Surinam uno de los países más diversos del mundo. La bauxita se convirtió en el siglo XX en su principal riqueza.',
      'Surinam se independizó en 1975, y muchos surinameses emigraron a los Países Bajos. En 1980 el sargento Desi Bouterse dio un golpe de Estado, y en 1982 su régimen asesinó a quince opositores en los «asesinatos de diciembre». Tras una guerra civil con los cimarrones, volvió la democracia en 1991. Bouterse fue elegido presidente en 2010 y condenado por aquellos asesinatos en 2019.',
    ],
    dates: [['1667', 'Pasa a los Países Bajos.'], ['1863', 'Abolición de la esclavitud.'], ['1975', 'Independencia.'], ['1980', 'Golpe de Bouterse.'], ['1991', 'Retorno a la democracia.']],
  },
  Uruguay: {
    text: [
      'La Banda Oriental del río Uruguay estaba habitada por los charrúas. Los portugueses fundaron Colonia del Sacramento en 1680, y los españoles respondieron fundando Montevideo en 1724. La región fue disputada durante un siglo entre ambas coronas.',
      'José Gervasio Artigas encabezó la revolución oriental a partir de 1811, pero el territorio fue ocupado por Portugal y después por Brasil. Tras una guerra entre Brasil y Argentina, Uruguay nació como Estado independiente en 1828, en parte como Estado tapón. El siglo XIX estuvo marcado por la guerra civil entre blancos y colorados.',
      'José Batlle y Ordóñez, presidente a comienzos del siglo XX, creó uno de los primeros Estados del bienestar del mundo, con divorcio, jornada de ocho horas y separación de Iglesia y Estado; Uruguay fue llamado «la Suiza de América». En 1930 organizó y ganó el primer Mundial de fútbol. Tras la dictadura militar de 1973 a 1985, recuperó la democracia y es hoy uno de los países más estables de la región.',
    ],
    dates: [['1724', 'Fundación de Montevideo.'], ['1811', 'Revolución de Artigas.'], ['1828', 'Independencia.'], ['1930', 'Primer Mundial de fútbol.'], ['1973-1985', 'Dictadura militar.']],
  },
  Venezuela: {
    text: [
      'La costa estaba habitada por pueblos caribes y arahuacos. Colón llegó en 1498, y al ver los palafitos del lago de Maracaibo los españoles la llamaron Venezuela, «pequeña Venecia». Caracas fue fundada en 1567. Durante la colonia el cacao fue su principal riqueza.',
      'Venezuela declaró su independencia el 5 de julio de 1811, la primera de América del Sur. Simón Bolívar, nacido en Caracas, dirigió la guerra que terminó con la batalla de Carabobo en 1821. Tras formar parte de la Gran Colombia, Venezuela se separó en 1830. El siglo XIX y comienzos del XX estuvieron dominados por caudillos, como Juan Vicente Gómez, que gobernó de 1908 a 1935.',
      'El petróleo, explotado desde los años veinte, convirtió a Venezuela en un gran exportador. Tras la caída de la dictadura de Pérez Jiménez en 1958, hubo cuarenta años de democracia. Hugo Chávez, elegido en 1998, impulsó la «revolución bolivariana». Tras su muerte en 2013, con Nicolás Maduro, el país sufrió una grave crisis económica y política, y más de siete millones de venezolanos han emigrado.',
    ],
    dates: [['1567', 'Fundación de Caracas.'], ['1811', 'Declaración de independencia.'], ['1821', 'Batalla de Carabobo.'], ['1958', 'Caída de Pérez Jiménez.'], ['1998', 'Elección de Hugo Chávez.'], ['2013', 'Maduro llega al poder.']],
  },
  Canadá: {
    text: [
      'Canadá estaba habitado por las Primeras Naciones y los inuit. Los vikingos llegaron hacia el año 1000 a Terranova. Jacques Cartier exploró el río San Lorenzo en 1534 y Samuel de Champlain fundó Quebec en 1608, capital de Nueva Francia, que vivía del comercio de pieles.',
      'Tras la guerra de los Siete Años, Francia cedió Canadá a Gran Bretaña en 1763, pero la población francófona conservó su lengua, su religión católica y sus leyes civiles. Muchos leales a la corona británica llegaron desde Estados Unidos tras la independencia de ese país. En 1867 se creó la Confederación canadiense, un dominio autónomo del Imperio británico, y el ferrocarril transcontinental unió el país hasta el Pacífico.',
      'Canadá combatió en las dos guerras mundiales y obtuvo la plena soberanía por el Estatuto de Westminster de 1931 y la repatriación de su constitución en 1982. Quebec vivió en los años sesenta la «Revolución Tranquila» y rechazó la independencia en referendos en 1980 y 1995. Canadá ha reconocido los abusos de los internados donde se separaba a los niños indígenas de sus familias.',
    ],
    dates: [['c. 1000', 'Asentamiento vikingo en Terranova.'], ['1608', 'Fundación de Quebec.'], ['1763', 'Pasa a Gran Bretaña.'], ['1867', 'Confederación canadiense.'], ['1982', 'Constitución repatriada.'], ['1995', 'Referéndum de Quebec.']],
  },
  'Costa Rica': {
    text: [
      'La región estaba habitada por pueblos indígenas influidos por Mesoamérica y por las culturas de Sudamérica, que dejaron grandes esferas de piedra. Colón llegó en 1502. La colonia, pobre y sin oro, formó parte de la Capitanía General de Guatemala y tuvo una sociedad de pequeños campesinos.',
      'Costa Rica se independizó con el resto de Centroamérica en 1821, formó parte de la Federación Centroamericana y se separó en 1838. El café, exportado desde la década de 1840, y después los plátanos, fueron su riqueza. En 1856 los costarricenses derrotaron al filibustero estadounidense William Walker.',
      'Tras una breve guerra civil en 1948, José Figueres abolió el ejército, algo único en el mundo, y dedicó esos recursos a la educación y la sanidad. Costa Rica es desde entonces una de las democracias más estables de América. El presidente Óscar Arias recibió el Nobel de la Paz en 1987 por su plan de paz para Centroamérica.',
    ],
    dates: [['1502', 'Llegada de Colón.'], ['1821', 'Independencia.'], ['1856', 'Victoria sobre William Walker.'], ['1948', 'Abolición del ejército.'], ['1987', 'Nobel de la Paz para Óscar Arias.']],
  },
  Cuba: {
    text: [
      'Cuba estaba habitada por taínos cuando Colón llegó en 1492. Diego Velázquez la conquistó a partir de 1511, y la población indígena desapareció casi por completo. La Habana se convirtió en el puerto donde se reunían las flotas de Indias. Desde finales del siglo XVIII el azúcar, trabajado por cientos de miles de esclavos africanos, hizo de Cuba la colonia más rica de España.',
      'La guerra de los Diez Años (1868-1878) fue el primer intento de independencia. La esclavitud se abolió en 1886. En 1895 José Martí inició una nueva guerra, y en 1898 intervino Estados Unidos, que venció a España. Cuba se independizó en 1902, pero bajo tutela estadounidense, que conservó la base de Guantánamo.',
      'Tras la dictadura de Fulgencio Batista, la revolución de Fidel Castro y el Che Guevara triunfó el 1 de enero de 1959. Castro se alió con la URSS y creó un régimen comunista de partido único. Estados Unidos impuso un embargo y apoyó la fallida invasión de bahía de Cochinos en 1961, y en 1962 los misiles soviéticos en la isla provocaron la crisis más grave de la Guerra Fría. Tras la caída de la URSS, Cuba vivió el «periodo especial» de escasez.',
    ],
    dates: [['1492', 'Llegada de Colón.'], ['1868-1878', 'Guerra de los Diez Años.'], ['1898', 'Guerra hispano-estadounidense.'], ['1959', 'Revolución de Castro.'], ['1962', 'Crisis de los misiles.'], ['1991', 'Comienza el periodo especial.']],
  },
  'El Salvador': {
    text: [
      'El territorio estaba habitado por los pipiles, de lengua náhuatl, y por los lencas; el pueblo maya de Joya de Cerén, sepultado por una erupción hacia el año 600, se ha llamado la Pompeya de América. Pedro de Alvarado lo conquistó a partir de 1524. En la colonia se cultivó el añil.',
      'El Salvador se independizó en 1821 con Centroamérica y se separó de la Federación en 1841. Desde finales del siglo XIX el café concentró la tierra en manos de unas pocas familias. En 1932 una rebelión campesina e indígena fue aplastada en «La Matanza», con miles de muertos.',
      'Tras décadas de gobiernos militares, estalló una guerra civil entre el gobierno y la guerrilla del FMLN (1980-1992), con unos 75.000 muertos; el arzobispo Óscar Romero fue asesinado en 1980 mientras oficiaba misa. Los acuerdos de paz de 1992 trajeron la democracia. Las maras, pandillas violentas, dominaron el país hasta que el presidente Nayib Bukele, desde 2022, las combatió con un régimen de excepción.',
    ],
    dates: [['1524', 'Conquista española.'], ['1821', 'Independencia.'], ['1932', 'La Matanza.'], ['1980', 'Asesinato de Óscar Romero.'], ['1980-1992', 'Guerra civil.'], ['1992', 'Acuerdos de paz.']],
  },
  'Estados Unidos': {
    text: [
      'Norteamérica estaba habitada por cientos de pueblos indígenas cuando llegaron los europeos. Inglaterra fundó Jamestown en 1607 y Plymouth en 1620, y a mediados del siglo XVIII había trece colonias en la costa atlántica, con esclavitud en el sur. Las colonias se rebelaron contra los impuestos británicos, declararon la independencia el 4 de julio de 1776 y la ganaron en 1783. La Constitución de 1787 sigue vigente.',
      'En el siglo XIX el país se expandió hasta el Pacífico, comprando la Luisiana a Francia y arrebatando a México la mitad de su territorio, a costa de los pueblos indígenas. La cuestión de la esclavitud desembocó en la guerra de Secesión (1861-1865), en la que el norte de Lincoln venció al sur y se abolió la esclavitud. Tras la guerra, Estados Unidos se convirtió en la primera potencia industrial del mundo y recibió millones de inmigrantes.',
      'Decisivo en las dos guerras mundiales, en 1945 era la mayor potencia del planeta y lideró el bloque occidental en la Guerra Fría. El movimiento por los derechos civiles de Martin Luther King acabó con la segregación en los años sesenta. Tras la caída de la URSS quedó como única superpotencia. La biblioteca tiene su historia completa.',
    ],
    dates: [['1607', 'Fundación de Jamestown.'], ['1776', 'Declaración de Independencia.'], ['1787', 'Constitución.'], ['1861-1865', 'Guerra de Secesión.'], ['1941', 'Entrada en la Segunda Guerra Mundial.'], ['1964', 'Ley de Derechos Civiles.']],
  },
  Groenlandia: {
    text: [
      'Pueblos paleoesquimales llegaron a Groenlandia desde Norteamérica hace unos 4.500 años, y los antepasados de los inuit actuales, la cultura Thule, lo hicieron hacia el siglo XIII. El vikingo Erik el Rojo fundó en 985 las primeras colonias nórdicas en el suroeste, que desaparecieron misteriosamente en el siglo XV.',
      'En 1721 el misionero noruego Hans Egede restableció el contacto europeo, y Groenlandia pasó a ser colonia de Dinamarca-Noruega y, desde 1814, solo de Dinamarca. Durante la Segunda Guerra Mundial, con Dinamarca ocupada, Estados Unidos instaló bases militares, entre ellas la de Thule.',
      'En 1953 Groenlandia dejó de ser colonia y pasó a formar parte del reino de Dinamarca. Obtuvo la autonomía en 1979, abandonó la Comunidad Europea en 1985 y en 2009 amplió su autogobierno, con reconocimiento del derecho a la independencia. La mayoría de sus 56.000 habitantes son inuit.',
    ],
    dates: [['985', 'Colonia de Erik el Rojo.'], ['1721', 'Llegada de Hans Egede.'], ['1953', 'Deja de ser colonia.'], ['1979', 'Autonomía.'], ['2009', 'Autogobierno ampliado.']],
  },
  Guatemala: {
    text: [
      'Guatemala fue uno de los centros de la civilización maya, que levantó entre los siglos III y IX ciudades como Tikal, con templos piramidales en plena selva. Tras el colapso de las ciudades de las tierras bajas, los reinos mayas de las tierras altas, como los quichés, siguieron prosperando. El Popol Vuh recoge su mitología.',
      'Pedro de Alvarado conquistó la región a partir de 1524. La Capitanía General de Guatemala gobernaba toda Centroamérica, con capital en Antigua. Guatemala se independizó en 1821 y formó parte de la Federación Centroamericana hasta 1839. Desde finales del siglo XIX, el café y la compañía estadounidense United Fruit dominaron la economía.',
      'Los gobiernos reformistas de Arévalo y Árbenz (1944-1954) intentaron una reforma agraria, pero un golpe apoyado por la CIA derrocó a Árbenz en 1954. Siguió una guerra civil de 36 años, hasta 1996, con unos 200.000 muertos, la mayoría indígenas mayas; la comisión de la verdad calificó de genocidio las masacres de los años ochenta. La líder maya Rigoberta Menchú recibió el Nobel de la Paz en 1992.',
    ],
    dates: [['s. III-IX', 'Apogeo de Tikal.'], ['1524', 'Conquista de Alvarado.'], ['1821', 'Independencia.'], ['1954', 'Golpe contra Árbenz.'], ['1960-1996', 'Guerra civil.'], ['1992', 'Nobel de la Paz para Rigoberta Menchú.']],
  },
  Haití: {
    text: [
      'La isla de La Española estaba habitada por taínos cuando llegó Colón en 1492; en pocas décadas la población indígena casi desapareció. En 1697 España cedió a Francia la parte occidental, Saint-Domingue, que se convirtió en la colonia más rica del mundo gracias al azúcar y el café producidos por casi medio millón de esclavos.',
      'En 1791 los esclavos se rebelaron, en la única revolución de esclavos triunfante de la historia. Toussaint Louverture la dirigió hasta ser capturado por Napoleón, y Jean-Jacques Dessalines derrotó a los franceses y proclamó la independencia de Haití el 1 de enero de 1804, primera república negra del mundo y segundo país independiente de América. Francia le exigió en 1825 una enorme indemnización que lo endeudó durante más de un siglo.',
      'Haití vivió una gran inestabilidad, una ocupación estadounidense de 1915 a 1934 y la dictadura de los Duvalier, «Papa Doc» y «Baby Doc», de 1957 a 1986. Es el país más pobre de América. El terremoto de 2010 mató a más de doscientas mil personas, y desde el asesinato del presidente en 2021 las bandas armadas controlan gran parte de la capital.',
    ],
    dates: [['1697', 'Saint-Domingue, colonia francesa.'], ['1791', 'Rebelión de los esclavos.'], ['1804', 'Independencia.'], ['1957-1986', 'Dictadura de los Duvalier.'], ['2010', 'Terremoto.']],
  },
  Honduras: {
    text: [
      'En el oeste de Honduras floreció la ciudad maya de Copán, famosa por sus estelas y su gran escalinata jeroglífica, entre los siglos V y IX. Colón llegó a la costa en 1502, en su cuarto viaje. La conquista española fue dura: el cacique lenca Lempira, que da nombre a la moneda, resistió hasta su muerte en 1537.',
      'Honduras se independizó en 1821 y formó parte de la Federación Centroamericana, cuyo gran líder fue el hondureño Francisco Morazán. Se separó en 1838. A comienzos del siglo XX las compañías bananeras estadounidenses dominaron el país hasta el punto de que se acuñó para él la expresión «república bananera».',
      'Honduras vivió décadas de gobiernos militares y en 1969 una breve guerra con El Salvador, la «guerra del fútbol». En los años ochenta sirvió de base a la Contra nicaragüense apoyada por Estados Unidos. Volvió a la democracia en 1982. El huracán Mitch arrasó el país en 1998, y en 2009 un golpe derrocó al presidente Manuel Zelaya.',
    ],
    dates: [['s. V-IX', 'Esplendor de Copán.'], ['1537', 'Muerte de Lempira.'], ['1821', 'Independencia.'], ['1969', 'Guerra con El Salvador.'], ['1998', 'Huracán Mitch.']],
  },
  Jamaica: {
    text: [
      'Jamaica estaba poblada por taínos cuando Colón llegó en 1494. España la colonizó, pero la población indígena desapareció. En 1655 la conquistaron los ingleses, y Port Royal fue una base de piratas y bucaneros hasta que un terremoto la destruyó en 1692.',
      'Jamaica se convirtió en una gran productora de azúcar trabajada por esclavos africanos, que llegaron a ser la inmensa mayoría de la población. Los cimarrones, esclavos huidos a las montañas, resistieron a los británicos, y la rebelión de 1831 dirigida por Samuel Sharpe aceleró la abolición de la esclavitud en el Imperio británico en 1834.',
      'En el siglo XX surgieron los primeros partidos y sindicatos, y el jamaicano Marcus Garvey creó un influyente movimiento panafricanista. Jamaica se independizó en 1962 dentro de la Commonwealth. Su cultura, sobre todo el reggae de Bob Marley y el movimiento rastafari, ha tenido una proyección mundial.',
    ],
    dates: [['1494', 'Llegada de Colón.'], ['1655', 'Conquista inglesa.'], ['1831', 'Rebelión de Samuel Sharpe.'], ['1834', 'Abolición de la esclavitud.'], ['1962', 'Independencia.']],
  },
  México: {
    text: [
      'México fue una de las grandes cunas de la civilización: los olmecas, Teotihuacán, los mayas, los zapotecas y los toltecas precedieron a los mexicas o aztecas, que fundaron Tenochtitlan en 1325 y dominaron el centro del país. Hernán Cortés conquistó su imperio en 1519-1521 con la ayuda de miles de aliados indígenas enemigos de los mexicas.',
      'El virreinato de Nueva España fue durante tres siglos la joya del imperio español, gracias a la plata de Zacatecas y Guanajuato. En 1810 el cura Miguel Hidalgo lanzó el grito de Dolores, y en 1821 México se independizó. En la guerra de 1846-1848 perdió la mitad de su territorio ante Estados Unidos. Benito Juárez, indígena zapoteco, impulsó la Reforma liberal y derrotó al emperador Maximiliano, impuesto por Francia, en 1867.',
      'Tras la larga dictadura de Porfirio Díaz, la Revolución mexicana de 1910 a 1920, con Villa, Zapata y Carranza, costó cientos de miles de vidas y dio la Constitución de 1917. Lázaro Cárdenas hizo la reforma agraria y nacionalizó el petróleo en 1938. El Partido Revolucionario Institucional gobernó más de setenta años hasta que perdió las elecciones en el año 2000. En 2024 Claudia Sheinbaum fue elegida primera presidenta.',
    ],
    dates: [['1325', 'Fundación de Tenochtitlan.'], ['1521', 'Caída de Tenochtitlan.'], ['1810', 'Grito de Dolores.'], ['1846-1848', 'Guerra con Estados Unidos.'], ['1910', 'Revolución mexicana.'], ['2000', 'Fin de la hegemonía del PRI.']],
  },
  Nicaragua: {
    text: [
      'El país toma su nombre del cacique Nicarao, que gobernaba junto al lago de Nicaragua cuando llegaron los españoles en 1522. Francisco Hernández de Córdoba fundó León y Granada en 1524. La costa caribeña, habitada por los misquitos, quedó bajo influencia británica.',
      'Nicaragua se independizó en 1821 y se separó de la Federación Centroamericana en 1838. En 1856 el filibustero estadounidense William Walker se proclamó presidente, hasta ser expulsado. Estados Unidos ocupó el país entre 1912 y 1933, y Augusto César Sandino encabezó la guerrilla contra los marines. Fue asesinado en 1934 por orden de Anastasio Somoza, cuya familia gobernó como dictadura hasta 1979.',
      'La revolución sandinista derribó a Somoza en 1979. En los años ochenta, el gobierno sandinista de Daniel Ortega combatió a la Contra, financiada por Estados Unidos. En 1990 perdió las elecciones ante Violeta Chamorro. Ortega volvió al poder en 2007 y, tras reprimir las protestas de 2018 con cientos de muertos, gobierna de forma autoritaria.',
    ],
    dates: [['1524', 'Fundación de León y Granada.'], ['1927-1933', 'Guerrilla de Sandino.'], ['1936-1979', 'Dictadura de los Somoza.'], ['1979', 'Revolución sandinista.'], ['1990', 'Elección de Violeta Chamorro.'], ['2018', 'Represión de las protestas.']],
  },
  Panamá: {
    text: [
      'Rodrigo de Bastidas llegó a la costa en 1501, y en 1513 Vasco Núñez de Balboa atravesó el istmo y fue el primer europeo en ver el océano Pacífico desde América. La ciudad de Panamá, fundada en 1519, fue el punto de paso de la plata del Perú hacia España. El pirata Henry Morgan la saqueó en 1671.',
      'Panamá se independizó de España en 1821 y se unió a la Gran Colombia, y después a Colombia. En 1855 se inauguró el ferrocarril que cruzaba el istmo. Tras el fracaso francés de Ferdinand de Lesseps en la construcción de un canal, Estados Unidos apoyó en 1903 la separación de Panamá de Colombia a cambio de la zona del canal.',
      'El canal de Panamá se inauguró en 1914 y la zona del canal quedó bajo soberanía estadounidense. Los tratados Torrijos-Carter de 1977 acordaron su devolución, que se completó el 31 de diciembre de 1999. En 1989 Estados Unidos invadió Panamá para derrocar al general Manuel Noriega.',
    ],
    dates: [['1513', 'Balboa ve el océano Pacífico.'], ['1519', 'Fundación de Panamá.'], ['1903', 'Separación de Colombia.'], ['1914', 'Inauguración del canal.'], ['1989', 'Invasión estadounidense.'], ['1999', 'Devolución del canal.']],
  },
  'Rep. Dominicana': {
    text: [
      'En la isla de La Española, poblada por los taínos, desembarcó Colón en 1492, y Santo Domingo, fundada en 1496, fue la primera ciudad europea de América, con la primera catedral y la primera universidad del continente. La población indígena desapareció en pocas décadas, y la colonia fue perdiendo importancia frente a México y Perú.',
      'España cedió la parte occidental a Francia en 1697, que se convirtió en Haití. Haití ocupó toda la isla de 1822 a 1844, año en que Juan Pablo Duarte y los trinitarios proclamaron la República Dominicana. España volvió a anexionarla entre 1861 y 1865. Estados Unidos la ocupó entre 1916 y 1924.',
      'Rafael Leónidas Trujillo gobernó como dictador de 1930 a 1961 y ordenó en 1937 la matanza de miles de haitianos en la frontera. Tras su asesinato y una guerra civil, Estados Unidos intervino de nuevo en 1965. Joaquín Balaguer dominó la política durante décadas. Desde los años noventa el país ha crecido gracias al turismo y es una democracia.',
    ],
    dates: [['1496', 'Fundación de Santo Domingo.'], ['1844', 'Independencia.'], ['1861-1865', 'Anexión a España.'], ['1930-1961', 'Dictadura de Trujillo.'], ['1965', 'Guerra civil e intervención estadounidense.']],
  },
  Australia: {
    text: [
      'Los pueblos aborígenes llegaron a Australia hace al menos 50.000 años y tienen la cultura continua más antigua del mundo, con cientos de lenguas y una rica tradición de arte rupestre y relatos del «tiempo del sueño». Los neerlandeses exploraron sus costas en el siglo XVII, y James Cook reclamó la costa este para Gran Bretaña en 1770.',
      'En 1788 llegó a Sídney la primera flota británica con presos: Australia fue durante décadas una colonia penal. Los colonos se expandieron por el continente, y los aborígenes fueron desposeídos de sus tierras, sufrieron matanzas y epidemias. Las fiebres del oro de la década de 1850 atrajeron a cientos de miles de inmigrantes. En 1901 las seis colonias se unieron en la Mancomunidad de Australia, que aplicó durante décadas la política de la «Australia blanca».',
      'Australia combatió en las dos guerras mundiales; el desembarco de Galípoli de 1915 se convirtió en un mito nacional. Tras 1945 recibió millones de inmigrantes europeos y, desde los años setenta, asiáticos. Los aborígenes obtuvieron derechos plenos a partir de 1967, y en 2008 el gobierno pidió perdón por las «generaciones robadas» de niños separados de sus familias.',
    ],
    dates: [['c. 50.000 a. C.', 'Llegada de los primeros pobladores.'], ['1788', 'Primera flota británica en Sídney.'], ['1851', 'Fiebre del oro.'], ['1901', 'Federación australiana.'], ['1915', 'Galípoli.'], ['1967', 'Referéndum sobre los derechos aborígenes.']],
  },
  'Nueva Zelanda': {
    text: [
      'Nueva Zelanda fue una de las últimas grandes tierras pobladas del mundo: los maoríes, navegantes polinesios, llegaron hacia el año 1300. El neerlandés Abel Tasman la avistó en 1642 y James Cook la cartografió en 1769.',
      'En 1840 los jefes maoríes y la corona británica firmaron el Tratado de Waitangi, cuya interpretación ha sido motivo de disputa hasta hoy. La llegada masiva de colonos provocó las guerras de Nueva Zelanda de 1845 a 1872, tras las cuales los maoríes perdieron gran parte de sus tierras.',
      'Nueva Zelanda fue pionera en reformas sociales: en 1893 fue el primer país del mundo en dar el voto a las mujeres. Se convirtió en dominio autónomo en 1907 y combatió junto a Gran Bretaña en las dos guerras mundiales. En 1953 el neozelandés Edmund Hillary coronó el Everest. Desde los años setenta ha reconocido y compensado las injusticias contra los maoríes, cuya lengua es oficial.',
    ],
    dates: [['c. 1300', 'Llegada de los maoríes.'], ['1642', 'Llegada de Abel Tasman.'], ['1840', 'Tratado de Waitangi.'], ['1893', 'Primer país con voto femenino.'], ['1907', 'Dominio autónomo.']],
  },
  'Papúa Nueva Guinea': {
    text: [
      'La isla de Nueva Guinea fue poblada hace más de 40.000 años, y en sus tierras altas se desarrolló hace unos 7.000 años una de las primeras agriculturas independientes del mundo. Es el país con más lenguas del planeta: más de ochocientas.',
      'Los europeos llegaron en el siglo XVI, pero no colonizaron la isla hasta finales del XIX. En 1884 Alemania se quedó con el noreste y Gran Bretaña con el sureste, que pasó después a Australia. Tras la Primera Guerra Mundial Australia administró todo el territorio. En la Segunda Guerra Mundial fue escenario de durísimos combates entre japoneses y aliados, como la campaña del sendero de Kokoda.',
      'Papúa Nueva Guinea se independizó de Australia en 1975. Entre 1988 y 1998 una guerra civil en la isla de Bougainville, en torno a una gran mina de cobre, causó miles de muertos; en 2019 sus habitantes votaron por la independencia, aún pendiente. El país es muy rico en recursos naturales, pero la mayoría de la población vive de la agricultura tradicional.',
    ],
    dates: [['c. 7000 a. C.', 'Agricultura en las tierras altas.'], ['1884', 'Reparto entre Alemania y Gran Bretaña.'], ['1942-1943', 'Campaña de Kokoda.'], ['1975', 'Independencia.'], ['1988-1998', 'Guerra de Bougainville.']],
  },
}
