-- Historia Con Alex · contenido publicable
--
-- ARCHIVO GENERADO. No editar a mano: los cambios se pierden.
-- Fuente: src/data/topics/. Regenerar con `npm run seed`.
--
-- Ejecutar en el SQL Editor DESPUÉS de las migraciones de supabase/migrations/.
-- Idempotente: repetirlo no duplica filas.
-- Temas: 12. Preguntas: 157.

begin;

-- 1. Épocas ------------------------------------------------------------------
insert into public.eras (slug, title, sort_order, start_year, end_year, published) values
  ('antiguedad', 'Antigüedad', 0, -3500, 476, true),
  ('edad-media', 'Edad Media', 1, 476, 1453, true),
  ('edad-moderna', 'Edad Moderna', 2, 1453, 1789, true),
  ('edad-contemporanea', 'Edad Contemporánea', 3, 1789, null, true)
on conflict (slug) do update set
  title = excluded.title, sort_order = excluded.sort_order,
  start_year = excluded.start_year, end_year = excluded.end_year, published = excluded.published;

-- 2. Países ------------------------------------------------------------------
insert into public.countries (slug, title, published) values
  ('europa', 'Europa', true),
  ('europa-y-america', 'Europa y América', true),
  ('peninsula-iberica', 'Península ibérica', true),
  ('turquia', 'Turquía', true),
  ('egipto', 'Egipto', true),
  ('grecia', 'Grecia', true),
  ('arabia', 'Arabia', true),
  ('irak', 'Irak', true),
  ('mundo', 'Mundo', true),
  ('italia', 'Italia', true)
on conflict (slug) do update set title = excluded.title, published = excluded.published;

-- 3. Temas -------------------------------------------------------------------
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'renacimiento',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'Renacimiento y Humanismo', 'Nuevas ideas, arte y ciencia en la Europa de las ciudades.', 'bachillerato',
  30, 's. XV–XVI', '✦', 'plum', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'revoluciones',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'europa-y-america'),
  'Revoluciones e industrialización', 'Cambios políticos, fábricas, derechos y nuevas clases sociales.', 'bachillerato',
  50, '1776–1914', '✺', 'red', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'andalus',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'peninsula-iberica'),
  'Al-Ándalus y los reinos cristianos', 'Ocho siglos peninsulares: conquista, califato, frontera, expansión cristiana y 1492.', 'universidad',
  55, '711–1492', '⌁', 'green', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'bizancio',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'turquia'),
  'El Imperio bizantino', 'Mil años de continuidad romana en Oriente: derecho, ortodoxia, iconoclasia y caída.', 'universidad',
  45, '330–1453', '☨', 'plum', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'egipto',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'egipto'),
  'El Egipto de los faraones', 'Estado, ecología fluvial, ideología real y religión funeraria en tres milenios de historia egipcia.', 'universidad',
  45, 'c. 3100–30 a. C.', '☥', 'gold', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'feudalismo',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'La Europa feudal', 'Vasallaje, señorío, campesinado y la discusión sobre si el feudalismo existió.', 'universidad',
  45, 'c. 800–1200', '⚔', 'red', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'grecia',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'grecia'),
  'Grecia arcaica y clásica', 'La polis, la invención de la política, la democracia ateniense y sus límites.', 'universidad',
  50, 'c. 800–323 a. C.', '⌂', 'blue', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'islam',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'arabia'),
  'Nacimiento y expansión del islam', 'De Arabia al Atlántico: revelación, califato, ciencia y fragmentación política.', 'universidad',
  50, '610–1258', '☾', 'green', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'mesopotamia',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'irak'),
  'Mesopotamia y el nacimiento del Estado', 'Urbanización, escritura, derecho y los primeros imperios entre el Tigris y el Éufrates.', 'universidad',
  45, 'c. 4000–539 a. C.', '𒀭', 'blue', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'prehistoria',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'mundo'),
  'Prehistoria y neolitización', 'Evolución humana, cazadores-recolectores, arte paleolítico y la adopción de la agricultura.', 'universidad',
  45, 'c. 3,3 M–3500 a. C.', '⋔', 'terracotta', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'roma-imperio',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'italia'),
  'El Imperio romano y su transformación', 'Principado, romanización, crisis del siglo III, cristianización y el debate sobre la caída.', 'universidad',
  50, '27 a. C.–476 d. C.', '⚵', 'gold', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'roma-republica',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'italia'),
  'Roma: la República', 'Instituciones republicanas, conflicto patricio-plebeyo, expansión mediterránea y crisis final.', 'universidad',
  50, '509–27 a. C.', 'SPQR', 'terracotta', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

-- 4. Lecciones ---------------------------------------------------------------
-- El cuerpo va como array de bloques tipados: section, concepts, debates,
-- timeline y sources. No hacen falta columnas nuevas para el glosario,
-- el debate historiográfico ni la bibliografía.
insert into public.lessons (topic_id, title, body, position, published)
select id, 'Renacimiento y Humanismo', '[{"type":"section","title":"Mirar de nuevo los clásicos","text":"Los humanistas estudiaron las lenguas y textos de Grecia y Roma. Buscaban leerlos en sus versiones más fiables y aplicaban esas herramientas a la educación y la vida cívica.","callout":null},{"type":"section","title":"Arte, ciencia y patronazgo","text":"Las ciudades italianas financiaron artistas y arquitectos. La perspectiva, el estudio de la anatomía y la observación de la naturaleza ampliaron el lenguaje visual de la época.","callout":null},{"type":"section","title":"Europa y el mundo","text":"El periodo coincidió con rutas oceánicas, expansión colonial y contactos violentos entre continentes. Es importante estudiarlo junto a sus consecuencias sociales y culturales.","callout":null},{"type":"timeline","items":[{"date":"1450","event":"La imprenta de tipos móviles se extiende por Europa."},{"date":"1492","event":"Viaje de Colón al continente americano."},{"date":"1517","event":"Lutero publica sus 95 tesis."},{"date":"1543","event":"Copérnico publica su propuesta heliocéntrica."}]}]'::jsonb, 0, true
from public.topics where slug = 'renacimiento'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Revoluciones e industrialización', '[{"type":"section","title":"Revoluciones políticas","text":"Las revoluciones cuestionaron el absolutismo y difundieron ideas de ciudadanía, derechos, nación y soberanía popular. Su aplicación fue desigual y estuvo llena de conflictos.","callout":null},{"type":"section","title":"La fábrica y la ciudad","text":"La industrialización concentró trabajo y población en ciudades crecientes. Aumentó la producción, pero también generó condiciones laborales duras, desigualdad y contaminación.","callout":null},{"type":"section","title":"Nuevos movimientos sociales","text":"Obreros, mujeres, grupos nacionalistas y reformistas organizaron campañas por derechos y representación. Estos movimientos cambiaron de forma duradera el debate público.","callout":null},{"type":"timeline","items":[{"date":"1776","event":"Declaración de Independencia de Estados Unidos."},{"date":"1789","event":"Inicio de la Revolución francesa."},{"date":"1830–1848","event":"Oleadas revolucionarias en Europa."},{"date":"1914","event":"Comienzo de la Primera Guerra Mundial."}]}]'::jsonb, 0, true
from public.topics where slug = 'revoluciones'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Al-Ándalus y los reinos cristianos', '[{"type":"section","title":"711: qué ocurrió y qué no","text":"El reino visigodo se hundió con una rapidez que sigue sorprendiendo. Un contingente inicial reducido, mandado por Tariq ibn Ziyad y compuesto mayoritariamente por bereberes norteafricanos, derrotó al rey Rodrigo en 711, y en apenas siete años el control musulmán se extendía por casi toda la península.\n\nLa explicación no está en una superioridad militar abrumadora, sino en la fragilidad del Estado visigodo: una monarquía electiva con guerras sucesorias endémicas, una aristocracia dividida en facciones, una fiscalidad opresiva y una población judía perseguida por la legislación de los últimos concilios de Toledo. Varios sectores no tenían motivos para defender el régimen existente.\n\nEl mecanismo principal de la conquista fue el pacto, no la batalla. El Tratado de Teodomiro (713), conservado en fuentes árabes, es el ejemplo mejor documentado: el noble visigodo Teodomiro conserva sus territorios en el sureste, sus habitantes mantienen su religión, sus iglesias y sus propiedades, y a cambio pagan un tributo anual fijado en dinero y especie. Ese modelo de capitulación se repitió por toda la península.\n\nSobre la naturaleza de la conquista existe una polémica que conviene conocer. Ignacio Olagüe sostuvo en los años setenta que no hubo invasión, sino una revolución religiosa interna; la tesis fue reflotada después por Emilio González Ferrín. La arqueología, la numismática —hay monedas bilingües acuñadas ya en 716— y las fuentes latinas y árabes contemporáneas la contradicen frontalmente, y la posición es minoritaria y rechazada por la práctica totalidad de los arabistas y medievalistas.","callout":"El nombre «al-Ándalus» aparece por primera vez en una moneda de 716. Su etimología sigue discutida: se ha propuesto un origen relacionado con los vándalos, con el gótico *landahlauts* («sorteo de tierras») y con un topónimo prerromano."},{"type":"section","title":"El califato de Córdoba y la sociedad andalusí","text":"Abd al-Rahman I, superviviente omeya de la matanza abasí, fundó en 756 un emirato independiente de Bagdad. En 929, Abd al-Rahman III dio el paso decisivo al proclamarse califa, reclamando así la autoridad religiosa suprema frente a Bagdad y frente a los fatimíes de El Cairo. Córdoba se convirtió en una de las mayores ciudades de Europa —las estimaciones oscilan entre 100.000 y 250.000 habitantes—, con alumbrado, alcantarillado, baños públicos y una biblioteca palatina que las fuentes cifran en cientos de miles de volúmenes.\n\nLa sociedad andalusí era muy heterogénea. Convivían árabes —minoría dominante y dividida en facciones tribales—, bereberes, muladíes (hispanos convertidos al islam, mayoría de la población musulmana), mozárabes (cristianos que conservaban su religión bajo dominio islámico) y judíos, cuya situación fue en general mucho mejor que en la Europa cristiana contemporánea: llegaron a ocupar altos cargos, como Hasday ibn Shaprut, médico y diplomático de Abd al-Rahman III.\n\nLa base económica combinaba una agricultura de regadío muy productiva —con nuevos cultivos como el arroz, la caña de azúcar, el algodón, los cítricos y la berenjena, y con tecnología hidráulica de norias y acequias—, una artesanía urbana especializada en textiles, cuero y cerámica, y una integración plena en las redes comerciales del Mediterráneo y del Sáhara, que aportaba oro africano.\n\nLa producción intelectual fue de primer orden. Averroes, comentarista de Aristóteles cuya obra determinó la escolástica latina; Maimónides, filósofo judío autor de la *Guía de perplejos*; Ibn Hazm, autor de *El collar de la paloma*; Al-Zahrawi (Abulcasis), cuyo tratado quirúrgico se usó en Europa durante siglos; Ibn Tufayl y su novela filosófica. Es significativo que tanto Averroes como Maimónides sufrieran persecución o exilio bajo los almohades: el esplendor cultural no fue continuo ni universalmente tolerante.\n\nEl califato se hundió con rapidez tras la muerte de Almanzor. La fitna de 1009-1031 acabó con la unidad y dio paso a los reinos de taifas: una treintena de Estados que compitieron entre sí, mantuvieron cortes culturalmente brillantes y, para defenderse unos de otros, pagaron tributos (parias) a los reinos cristianos del norte, financiando así la expansión de sus enemigos.","callout":null},{"type":"section","title":"La frontera: guerra, pacto y tributo","text":"La imagen de dos bloques homogéneos enfrentados por la fe no corresponde a la documentación. La frontera peninsular fue durante siglos una zona porosa donde se combinaban razzias, treguas, alianzas cruzadas, comercio y matrimonios políticos.\n\nLas alianzas entre cristianos y musulmanes contra otros cristianos o musulmanes fueron constantes y no excepcionales. El Cid es el ejemplo canónico: desterrado por Alfonso VI, sirvió como jefe militar al rey musulmán de Zaragoza, combatió contra cristianos y acabó gobernando Valencia. El personaje que la tradición convirtió en símbolo de la Reconquista pasó buena parte de su carrera al servicio de un taifa.\n\nEl sistema de parias es especialmente revelador. Los reinos de taifas pagaban tributos anuales en oro a Castilla, León, Navarra o Aragón a cambio de protección o de no ser atacados. Ese oro financió la construcción de iglesias románicas, el Camino de Santiago y los ejércitos que después conquistarían esos mismos territorios. La lógica dominante no era la cruzada, sino la extracción de recursos: un taifa vivo y tributario valía más que uno conquistado.\n\nLa intervención almorávide (1086) y almohade (1147) cambió el tono. Ambos movimientos, procedentes del Magreb, llegaron llamados por los andalusíes para frenar el avance cristiano, pero impusieron un rigorismo religioso que las élites locales resistieron, endureció la posición de mozárabes y judíos —hubo emigraciones y conversiones forzosas— y elevó la temperatura ideológica del conflicto.\n\nTambién del lado cristiano creció la retórica religiosa. La influencia de Cluny, la introducción del ideal de cruzada y las bulas papales que equiparaban la lucha peninsular con la de Tierra Santa dieron cobertura ideológica a lo que hasta entonces era, sobre todo, expansión territorial. Las Navas de Tolosa (1212), organizada como cruzada con participación ultrapirenaica, marca la consolidación de ese marco.","callout":"Los mudéjares —musulmanes que permanecieron bajo dominio cristiano tras la conquista— fueron durante siglos la mano de obra especializada de Aragón y Valencia. Su arte, el mudéjar, es la manifestación más visible de que la separación entre culturas nunca fue estanca."},{"type":"section","title":"Los reinos cristianos: expansión y modelos distintos","text":"Los núcleos cristianos del norte nacieron pequeños y dispersos: el reino de Asturias, después León; el condado y luego reino de Castilla; Navarra; los condados pirenaicos que formarían Aragón y Cataluña. Su expansión fue desigual, discontinua y a menudo dirigida más contra vecinos cristianos que contra al-Ándalus.\n\nEl motor no fue solo militar. La repoblación fue el instrumento decisivo: sin colonos que ocuparan, cultivaran y defendieran el territorio, la conquista no se consolidaba. Los modelos variaron con enormes consecuencias sociales. En el valle del Duero se practicó la presura, ocupación libre por pequeños propietarios, lo que generó una sociedad de campesinos relativamente libres. Al sur del Tajo y en Extremadura se repobló mediante concejos con amplios fueros y grandes términos municipales. Y en Andalucía y Extremadura, tras las conquistas del siglo XIII, se repartió mediante grandes donadíos a la nobleza y a las órdenes militares, creando el latifundio que marcaría la estructura agraria del sur hasta el siglo XX.\n\nLas órdenes militares —Santiago, Calatrava, Alcántara— fueron un instrumento clave: combinaban función militar permanente, capacidad de repoblar y gestión de enormes patrimonios. Su poder llegó a inquietar a las propias monarquías, que acabaron incorporando sus maestrazgos a la corona.\n\nLa cultura de los reinos cristianos absorbió masivamente el legado andalusí. La Escuela de Traductores de Toledo, activa tras 1085 y sistematizada bajo Alfonso X, vertió al latín y después al castellano obras científicas y filosóficas árabes y griegas. Alfonso X impulsó además la escritura del castellano en la producción jurídica, histórica y científica, y las Cantigas de Santa María en gallego-portugués. La deuda lingüística es enorme: unas cuatro mil palabras del castellano actual proceden del árabe.\n\nLa estructura política resultante fue plural. La Corona de Aragón funcionó como una confederación con instituciones separadas para Aragón, Cataluña, Valencia y Mallorca, con Cortes potentes y el pactismo como principio: el rey gobierna con el consentimiento del reino. Castilla desarrolló una monarquía más centralizada, con Cortes menos capaces de limitar al rey. Esa diferencia pesaría durante siglos, hasta los decretos de Nueva Planta de 1707-1716.","callout":null},{"type":"section","title":"Convivencia, coexistencia o conflicto","text":"El término «convivencia» lo popularizó Américo Castro en *España en su historia* (1948) para describir la interacción productiva entre cristianos, musulmanes y judíos, y para sostener que la identidad española se formó en ese contacto. Claudio Sánchez-Albornoz le respondió con dureza defendiendo una continuidad hispana anterior y una relación fundamentalmente hostil. La polémica, mantenida durante décadas desde el exilio de ambos, condicionó el debate durante medio siglo.\n\nLa investigación posterior ha corregido a los dos. Hubo interacción intensa —préstamos lingüísticos, técnicas compartidas, traducciones, arquitectura híbrida, minorías con estatuto jurídico reconocido— y hubo simultáneamente jerarquía legal estricta, segregación residencial, violencia periódica y desconfianza. David Nirenberg mostró en *Communities of Violence* (1996) que la violencia contra las minorías no era una ruptura del sistema, sino parte de su funcionamiento ordinario: episodios rituales y controlados que reafirmaban la jerarquía sin destruir la coexistencia.\n\nEl término preferido hoy por muchos especialistas es «coexistencia» o «conveniencia»: convivir porque conviene, no por tolerancia en sentido moderno. Ni al-Ándalus ni los reinos cristianos concebían la igualdad religiosa; ambos organizaban la sociedad en comunidades jurídicamente desiguales bajo una religión dominante.\n\nEl siglo XIV marcó un empeoramiento claro. La peste negra, las crisis económicas y la agitación predicatoria desembocaron en los pogromos de 1391, que destruyeron juderías enteras y provocaron conversiones masivas. La aparición de un gran grupo de conversos generó un problema nuevo: la sospecha sobre la sinceridad de su fe, que justificó la creación de la Inquisición castellana en 1478 y la difusión de los estatutos de limpieza de sangre, un criterio de exclusión basado en el linaje y no en la creencia.\n\nEl decreto de 1492 obligó a los judíos a convertirse o abandonar los reinos de Castilla y Aragón. Las cifras se discuten —las estimaciones actuales rondan entre 50.000 y 100.000 exiliados, muy por debajo de los cálculos tradicionales—, pero el efecto cultural fue profundo: nació la diáspora sefardí, que conservó el judeoespañol durante siglos. Los musulmanes granadinos, a quienes las capitulaciones de 1491 garantizaban su religión, vieron incumplido lo pactado en 1502.","callout":"Los estatutos de limpieza de sangre desplazaron el criterio de exclusión de la fe al linaje. Un converso sincero de tercera generación seguía siendo sospechoso: es un precedente histórico relevante de la discriminación por ascendencia."},{"type":"section","title":"El concepto de Reconquista y su carga política","text":"La palabra «Reconquista» no es medieval en el sentido en que se usa hoy. Los cronistas de los siglos IX a XI hablan de restauración del reino godo, de expansión, de guerra; el término se consolida como categoría historiográfica en el siglo XIX, en pleno auge del nacionalismo, y adquiere su formulación más rígida bajo el franquismo, que lo convirtió en mito fundacional de una España católica y unitaria.\n\nLas objeciones al concepto son varias. Presupone una continuidad nacional entre el reino visigodo y los reinos medievales que la documentación no sostiene. Comprime ocho siglos de procesos heterogéneos en un proyecto único y coherente que nadie planificó. Y describe como «re-conquista» la ocupación de territorios que ninguno de los conquistadores había poseído jamás.\n\nLa discusión sigue abierta. Algunos medievalistas, como Francisco García Fitz o Martín Ríos Saloma, defienden que el término conserva utilidad si se despoja de su carga ideológica: existió efectivamente una legitimación religiosa de la guerra, una idea de restauración presente en las crónicas desde el siglo IX y una expansión territorial sostenida. Otros prefieren hablar simplemente de «expansión de los reinos cristianos» para evitar el bagaje acumulado.\n\nLo que hay consenso en rechazar es el relato de una guerra santa de ochocientos años ininterrumpidos. Hubo largos periodos de estabilidad fronteriza, alianzas cruzadas constantes, tributos que financiaron a ambos bandos y una circulación permanente de personas, técnicas y palabras. Las fases de conquista efectiva se concentran en momentos precisos: el siglo XI tras la fitna, el XIII tras Las Navas, y 1482-1492 para Granada.\n\nLa cuestión importa más allá de la academia. «Reconquista» es hoy un término activo en el discurso político europeo, empleado por movimientos identitarios con un sentido explícitamente contemporáneo. Conocer su genealogía historiográfica es, en ese contexto, una herramienta crítica y no una curiosidad erudita.","callout":null},{"type":"concepts","items":[{"term":"Muladí","definition":"Hispano convertido al islam. Constituían la mayoría de la población musulmana de al-Ándalus."},{"term":"Mozárabe","definition":"Cristiano que conservaba su religión bajo dominio islámico, con estatuto de dhimmi."},{"term":"Mudéjar","definition":"Musulmán que permaneció bajo dominio cristiano tras la conquista, conservando su religión."},{"term":"Taifa","definition":"Cada uno de los reinos surgidos de la desintegración del califato de Córdoba en 1031."},{"term":"Parias","definition":"Tributo en oro pagado por las taifas a los reinos cristianos a cambio de protección o de no ser atacadas."},{"term":"Fitna","definition":"Guerra civil. La de 1009-1031 acabó con el califato de Córdoba."},{"term":"Presura","definition":"Ocupación libre de tierras por pequeños propietarios, modelo de repoblación del valle del Duero."},{"term":"Donadío","definition":"Gran donación de tierra a nobleza y órdenes militares. Origen del latifundio andaluz y extremeño."},{"term":"Fuero","definition":"Conjunto de privilegios y normas concedidos a una localidad para atraer y fijar población."},{"term":"Converso","definition":"Judío convertido al cristianismo, especialmente tras los pogromos de 1391. Objeto de sospecha permanente."},{"term":"Limpieza de sangre","definition":"Estatutos que excluían de cargos a los descendientes de conversos: criterio de linaje, no de fe."},{"term":"Pactismo","definition":"Principio de la Corona de Aragón según el cual el rey gobierna con el consentimiento del reino en Cortes."}]},{"type":"debates","items":[{"question":"¿Es válido el concepto de «Reconquista»?","positions":[{"school":"Rechazo del término","argument":"Es una categoría del siglo XIX, endurecida bajo el franquismo. Presupone una continuidad nacional inexistente, unifica ocho siglos heterogéneos en un proyecto único y llama «re-conquista» a la ocupación de territorios que los conquistadores nunca habían poseído."},{"school":"Defensa crítica (García Fitz, Ríos Saloma)","argument":"Depurado de su carga ideológica, el término describe algo real: una legitimación religiosa de la guerra, una idea de restauración presente en las crónicas desde el siglo IX y una expansión territorial sostenida y consciente."}],"state":"No hay consenso sobre la palabra, pero sí sobre el fondo: se rechaza unánimemente el relato de una guerra santa ininterrumpida de ochocientos años. Las fases de conquista efectiva fueron concretas y estuvieron separadas por largos periodos de estabilidad, alianzas cruzadas y tributos."},{"question":"¿Hubo «convivencia» entre las tres culturas?","positions":[{"school":"Convivencia (Américo Castro, 1948)","argument":"La identidad española se formó en la interacción productiva entre cristianos, musulmanes y judíos. Lo específicamente hispano nace de ese contacto y no de una esencia anterior."},{"school":"Continuidad hispana (Sánchez-Albornoz)","argument":"Existía un sustrato hispano anterior al islam que persistió; la relación entre comunidades fue fundamentalmente hostil y el elemento islámico, un paréntesis ajeno."},{"school":"Coexistencia jerárquica (Nirenberg, 1996)","argument":"Hubo interacción intensa y a la vez jerarquía legal estricta, segregación y violencia periódica. Los episodios violentos no rompían el sistema: formaban parte de su funcionamiento y reafirmaban la jerarquía."}],"state":"La polémica Castro–Sánchez-Albornoz se considera superada en sus términos originales, ambos condicionados por el exilio y por la cuestión de la identidad nacional. Se prefiere hablar de «coexistencia» o «conveniencia»: convivir porque conviene, sin tolerancia en el sentido moderno."},{"question":"¿Hubo realmente una invasión en 711?","positions":[{"school":"Negacionismo de la invasión (Olagüe, 1974; González Ferrín)","argument":"No habría existido conquista militar, sino una evolución religiosa interna de la población hispana hacia formas de monoteísmo que acabaron confluyendo con el islam."},{"school":"Posición mayoritaria","argument":"La arqueología, la numismática —monedas bilingües acuñadas ya en 716—, las crónicas latinas contemporáneas y las fuentes árabes documentan la conquista y sus pactos de capitulación, como el Tratado de Teodomiro de 713."}],"state":"La tesis negacionista está rechazada por la práctica totalidad de arabistas y medievalistas. Su interés es historiográfico: muestra cómo la historia peninsular sigue siendo terreno de disputa identitaria."}]},{"type":"timeline","items":[{"date":"711","event":"Desembarco de Tariq; derrota de Rodrigo en el Guadalete."},{"date":"756","event":"Abd al-Rahman I funda el emirato independiente de Córdoba."},{"date":"929","event":"Abd al-Rahman III se proclama califa."},{"date":"976–1002","event":"Almanzor: dictadura militar y campañas contra los reinos del norte."},{"date":"1031","event":"Fin del califato; fragmentación en reinos de taifas."},{"date":"1085","event":"Alfonso VI toma Toledo."},{"date":"1086–1147","event":"Intervención almorávide desde el Magreb."},{"date":"1147–1212","event":"Dominio almohade."},{"date":"1212","event":"Las Navas de Tolosa: derrota almohade decisiva."},{"date":"1236–1248","event":"Conquista de Córdoba, Valencia y Sevilla."},{"date":"1238","event":"Fundación del reino nazarí de Granada, vasallo tributario de Castilla."},{"date":"1391","event":"Pogromos generalizados contra las juderías peninsulares."},{"date":"1478","event":"Establecimiento de la Inquisición castellana."},{"date":"1492","event":"Conquista de Granada y decreto de expulsión de los judíos."}]},{"type":"sources","items":[{"author":"Anónimo","title":"Crónica mozárabe de 754","year":"754","kind":"primaria","note":"Fuente latina más cercana a la conquista. Escrita bajo dominio islámico."},{"author":"Anónimo","title":"Tratado de Teodomiro","year":"713","kind":"primaria","note":"Pacto de capitulación conservado en fuentes árabes. Modelo del mecanismo de la conquista."},{"author":"Ibn Hazm","title":"El collar de la paloma","year":"c. 1022","kind":"primaria","note":"Tratado sobre el amor y la sociedad cordobesa en vísperas de la fitna."},{"author":"Maimónides","title":"Guía de perplejos","year":"c. 1190","kind":"primaria","note":"Filosofía judía escrita en árabe. Su autor tuvo que exiliarse ante la presión almohade."},{"author":"Averroes (Ibn Rushd)","title":"Comentarios a Aristóteles","year":"c. 1180","kind":"primaria","note":"Determinaron la escolástica latina. También sufrió persecución almohade."},{"author":"Alfonso X","title":"Estoria de España; Siete Partidas","year":"c. 1270–1284","kind":"primaria","note":"Fijan el castellano como lengua de la historia y del derecho, y regulan el estatuto de las minorías."},{"author":"Américo Castro","title":"España en su historia","year":"1948","kind":"estudio","note":"Formula la tesis de la convivencia como origen de la identidad española."},{"author":"Claudio Sánchez-Albornoz","title":"España, un enigma histórico","year":"1956","kind":"estudio","note":"Réplica a Castro desde la tesis de la continuidad hispana."},{"author":"Pierre Guichard","title":"Al-Andalus. Estructura antropológica de una sociedad islámica en Occidente","year":"1976","kind":"estudio","note":"Defiende el carácter plenamente islámico y oriental de la sociedad andalusí."},{"author":"David Nirenberg","title":"Communities of Violence","year":"1996","kind":"estudio","note":"Analiza la violencia contra las minorías como parte funcional del sistema de coexistencia."},{"author":"Francisco García Fitz","title":"La Reconquista","year":"2010","kind":"estudio","note":"Defensa crítica del concepto, depurado de su carga ideológica."},{"author":"Eduardo Manzano Moreno","title":"Conquistadores, emires y califas","year":"2006","kind":"estudio","note":"Síntesis de referencia sobre la formación del Estado andalusí."}]}]'::jsonb, 0, true
from public.topics where slug = 'andalus'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'El Imperio bizantino', '[{"type":"section","title":"El problema del nombre y del desprecio","text":"El término «bizantino» fue acuñado en 1557 por el humanista alemán Hieronymus Wolf, casi un siglo después de la caída del Imperio. Sus habitantes se llamaban a sí mismos rhomaioi —romanos— y a su Estado, Basileia ton Rhomaion, el Imperio de los romanos. Los turcos llamaban Rum a Anatolia por la misma razón. Nadie en Constantinopla se habría reconocido como «bizantino».\n\nEl nombre no fue neutral. Servía para negar a Constantinopla la continuidad romana y reservarla para Occidente, donde el Sacro Imperio Romano Germánico reclamaba el título. A partir de la Ilustración, la operación se completó con el desprecio: Montesquieu y Gibbon presentaron mil años de historia como una decadencia continua de intriga palaciega y disputa teológica. De ahí procede el uso del adjetivo «bizantino» como sinónimo de discusión estéril y complicación innecesaria.\n\nLa revisión de esa imagen ha sido uno de los trabajos más productivos de la medievalística del siglo XX. Un Estado que sobrevivió al islam, a los eslavos, a los búlgaros, a los normandos, a los cruzados y a los turcos durante mil años difícilmente puede describirse como decadente. Lo que la investigación reciente subraya es su extraordinaria capacidad de adaptación: perdió tres cuartas partes de su territorio en el siglo VII y se reorganizó por completo para sobrevivir.\n\nConviene también deshacer la idea de una Edad Media puramente occidental. Durante buena parte del periodo, Constantinopla fue la mayor ciudad de Europa, con cientos de miles de habitantes cuando París o Londres tenían unos pocos miles, y el nomisma bizantino fue la moneda de referencia del Mediterráneo durante siete siglos: un dólar medieval.","callout":"La continuidad institucional es literal: Bizancio no sucede al Imperio romano, es el Imperio romano. La distinción entre «romano» y «bizantino» es una convención de los historiadores, útil pero engañosa."},{"type":"section","title":"Justiniano: la última tentativa mediterránea","text":"El reinado de Justiniano (527-565) fue el intento más ambicioso de restaurar el imperio unificado. Sus generales Belisario y Narsés reconquistaron África a los vándalos, Italia a los ostrogodos y parte del sureste ibérico. El coste fue enorme: la guerra de Italia duró veinte años y devastó la península mucho más que la instalación ostrogoda que pretendía deshacer.\n\nSu obra más duradera fue jurídica. El Corpus Iuris Civilis —Código, Digesto, Instituciones y Novelas, compiladas entre 528 y 534 bajo la dirección de Triboniano— recogió y ordenó mil años de jurisprudencia romana. El Digesto, en particular, salvó fragmentos de juristas clásicos cuya obra completa se perdió. Su redescubrimiento en Bolonia en el siglo XI fundó la ciencia jurídica europea.\n\nSanta Sofía, levantada en apenas cinco años por Antemio de Tralles e Isidoro de Mileto, resolvió un problema arquitectónico mayor: cubrir un espacio cuadrado con una cúpula enorme mediante pechinas. Su interior, con la cúpula aparentemente suspendida sobre una corona de ventanas, buscaba un efecto deliberado de inmaterialidad. Fue la mayor iglesia de la cristiandad durante casi mil años.\n\nLa revuelta de Niká (532), nacida de la rivalidad entre las facciones del hipódromo —azules y verdes— y de la presión fiscal, estuvo a punto de derribarlo. Procopio cuenta que Justiniano preparaba la huida cuando la emperatriz Teodora lo disuadió; la represión posterior costó decenas de miles de vidas en el propio hipódromo.\n\nLa peste bubónica de 541-542, la primera pandemia documentada de Yersinia pestis, truncó el proyecto. Las estimaciones de mortalidad son muy discutidas —desde catástrofes del 25-50 % hasta revisiones recientes que las rebajan sustancialmente—, pero el efecto combinado de guerra, epidemia y presión fiscal dejó al imperio exhausto. Las conquistas occidentales se perdieron en pocas décadas.","callout":null},{"type":"section","title":"El siglo VII: perderlo casi todo y sobrevivir","text":"Entre 602 y 628, Bizancio libró una guerra total con la Persia sasánida que dejó a ambos imperios agotados. Heraclio logró finalmente vencer, pero apenas una década después, entre 634 y 642, los ejércitos árabes arrebataron a Bizancio Siria, Palestina y Egipto, y en las décadas siguientes el norte de África. El imperio perdió sus provincias más ricas y aproximadamente tres cuartas partes de sus ingresos.\n\nLa supervivencia exigió una reconstrucción completa. El sistema de themas reorganizó el territorio en circunscripciones bajo mando militar, donde los soldados recibían tierras a cambio del servicio hereditario. Eso redujo drásticamente el coste del ejército, que dejó de depender de un salario en metálico, y ancló la defensa en la población local. La cronología exacta de su implantación es objeto de debate, pero su efecto es claro: un Estado mucho más pobre logró mantener un ejército eficaz.\n\nLa transformación fue también urbana y cultural. Las ciudades antiguas, con sus foros, termas y consejos municipales, se contrajeron o se convirtieron en fortalezas (kastra). El griego sustituyó definitivamente al latín como lengua administrativa. La cultura clásica se replegó a círculos estrechos y la producción literaria cayó a mínimos durante casi dos siglos, en lo que se ha llamado la «edad oscura bizantina».\n\nLa defensa de Constantinopla en los asedios árabes de 674-678 y 717-718 fue probablemente el acontecimiento más consecuente de la historia europea temprana. Las murallas teodosianas, la cadena del Cuerno de Oro y el fuego griego —una mezcla incendiaria proyectada por sifones cuya fórmula exacta se perdió— permitieron detener la expansión islámica hacia Europa oriental durante siglos.","callout":"El fuego griego se mantuvo como secreto de Estado: se transmitía a un número reducido de familias y su composición nunca se puso por escrito completa. Es uno de los pocos casos documentados de tecnología militar perdida por exceso de secreto."},{"type":"section","title":"La iconoclasia: una disputa que no era solo sobre imágenes","text":"En 726, el emperador León III inició la retirada de las imágenes religiosas del culto público. La controversia iconoclasta se extendió, con una interrupción, hasta 843, y enfrentó a quienes consideraban idolatría la veneración de iconos con quienes la defendían como legítima.\n\nEl argumento iconoclasta se apoyaba en el mandamiento contra las imágenes talladas y en la imposibilidad de representar la naturaleza divina. Los iconódulos, con Juan Damasceno como principal teórico, respondieron con un argumento cristológico: si Dios se hizo carne, lo representable es precisamente esa carne, y negarlo equivale a negar la Encarnación. Añadieron una distinción decisiva entre latría, la adoración debida solo a Dios, y proskynesis, la veneración que se dirige al prototipo a través de la imagen.\n\nLas causas del conflicto se han discutido mucho. Se ha invocado la influencia del islam y del judaísmo, ambos aniconistas, y las derrotas militares interpretadas como castigo divino por idolatría. Otras lecturas subrayan factores internos: el intento imperial de someter a los monasterios, grandes propietarios de tierras, poseedores de los iconos más venerados y exentos de servicio militar y fiscal.\n\nLa restauración definitiva de las imágenes en 843 se celebra aún como «Triunfo de la Ortodoxia». Sus consecuencias fueron duraderas: el icono quedó teológicamente fundamentado, con reglas iconográficas estrictas que priorizaban la fidelidad al modelo sobre la innovación del artista, y el monacato salió reforzado frente al poder imperial.\n\nUn efecto colateral fue la pérdida documental. La destrucción de imágenes anteriores a 726 dejó un vacío casi total en el arte bizantino temprano, y los textos iconoclastas fueron a su vez eliminados por los vencedores: conocemos sus argumentos casi exclusivamente a través de las refutaciones de sus adversarios, lo que obliga a una cautela permanente.","callout":null},{"type":"section","title":"Ortodoxia, eslavos y el cisma con Roma","text":"La misión de Cirilo y Metodio en Moravia desde 863 marcó el modelo bizantino de expansión religiosa. Los dos hermanos crearon un alfabeto —el glagolítico, del que derivó el cirílico— para traducir las Escrituras y la liturgia al eslavo. Frente a la práctica latina, que imponía el latín, Bizancio aceptó la liturgia en lengua vernácula, lo que facilitó enormemente la evangelización y dio a los pueblos eslavos una cultura escrita propia.\n\nLa conversión de Bulgaria en 864 y la de la Rus de Kiev en 988, cuando Vladimir se bautizó y se casó con una princesa porfirogéneta, integraron a esos pueblos en la órbita cultural de Constantinopla. Cuando Bizancio cayó en 1453, Moscú reclamó la herencia y se proclamó «tercera Roma»: la genealogía política e ideológica de Rusia pasa por ahí.\n\nLa ruptura con Roma fue un proceso largo, no un acontecimiento. Las diferencias se acumularon durante siglos: la cláusula Filioque añadida por Occidente al credo, el celibato obligatorio del clero latino, el uso de pan ácimo, y sobre todo la cuestión de la autoridad. Roma reivindicaba una primacía jurisdiccional sobre toda la Iglesia; Constantinopla sostenía la pentarquía, un gobierno colegiado de los cinco patriarcados, en el que Roma tendría solo una primacía de honor.\n\nLos anatemas mutuos de 1054 entre el legado papal Humberto y el patriarca Miguel Cerulario fueron un episodio menor que la historiografía posterior convirtió en fecha fundacional. La ruptura se hizo irreversible más tarde y por motivos menos teológicos: el saqueo de Constantinopla por la Cuarta Cruzada en 1204, con destrucción de iglesias y profanación de reliquias, creó un rencor que los intentos de unión de Lyon (1274) y Florencia (1439) nunca lograron superar.\n\nLa resistencia popular a esas uniones fue feroz. Un alto funcionario bizantino resumió la posición mayoritaria en vísperas de la caída con una frase que se ha hecho célebre: preferir el turbante turco antes que la tiara papal. Se prefería la dominación otomana, que permitía conservar la fe, a una unión con Roma percibida como sometimiento.","callout":null},{"type":"section","title":"Declive y caída: 1204 antes que 1453","text":"La derrota de Manzikert en 1071 ante los turcos selyúcidas abrió Anatolia, la principal reserva de reclutas y de impuestos del imperio, a la ocupación turca. La dinastía Comnena logró una recuperación notable en el siglo XII, apoyándose en concesiones comerciales a Venecia y Génova que a largo plazo drenaron los ingresos aduaneros del Estado hacia las repúblicas italianas.\n\nEl golpe decisivo llegó en 1204. La Cuarta Cruzada, desviada de su objetivo egipcio por una combinación de deudas con Venecia, disputas dinásticas bizantinas y cálculo comercial, tomó y saqueó Constantinopla durante tres días. Se fundieron obras de arte antiguas, se dispersaron reliquias por Europa —los caballos de bronce de San Marcos proceden de allí— y se instauró un Imperio latino que duró hasta 1261.\n\nEl imperio restaurado por los Paleólogos nunca recuperó su base material. Su territorio se redujo progresivamente a Constantinopla, parte de Tracia y el despotado de Morea; su economía quedó en manos de mercaderes italianos; y las guerras civiles del siglo XIV, en plena expansión otomana, consumieron los últimos recursos. En 1373 el emperador era ya vasallo tributario del sultán.\n\nEl asedio final de 1453 enfrentó a unos 7.000 defensores con un ejército otomano de decenas de miles y con artillería de asedio capaz de derribar las murallas teodosianas, que habían resistido durante mil años. Constantino XI murió combatiendo. Mehmed II convirtió Santa Sofía en mezquita y estableció Constantinopla como capital otomana.\n\nLa caída tuvo consecuencias que exceden lo militar. La emigración de eruditos griegos a Italia con sus manuscritos alimentó el humanismo renacentista; el cierre de las rutas terrestres hacia Asia estimuló la búsqueda de vías marítimas; y Moscú asumió la herencia ideológica ortodoxa. Es habitual usar 1453 como fecha de inicio de la Edad Moderna: como todos los cortes de este tipo, es una convención cómoda más que un cambio real en la vida de nadie.","callout":"Steven Runciman calificó el saqueo de 1204 como un crimen sin precedentes contra la civilización. Occidente destruyó la mayor ciudad cristiana del mundo doscientos cincuenta años antes de que lo hicieran los otomanos."},{"type":"concepts","items":[{"term":"Rhomaioi","definition":"«Romanos»: como se llamaban a sí mismos los bizantinos. «Bizantino» es un término acuñado en 1557."},{"term":"Basileus","definition":"Título imperial griego adoptado formalmente en el siglo VII, en sustitución de la titulatura latina."},{"term":"Thema","definition":"Circunscripción militar y administrativa donde los soldados recibían tierras a cambio de servicio hereditario."},{"term":"Fuego griego","definition":"Mezcla incendiaria proyectada por sifones, secreto de Estado cuya fórmula acabó perdiéndose."},{"term":"Iconoclasia","definition":"Movimiento de rechazo al culto de las imágenes religiosas, vigente en dos fases entre 726 y 843."},{"term":"Latría / proskynesis","definition":"Adoración debida solo a Dios frente a veneración dirigida al prototipo a través del icono."},{"term":"Pentarquía","definition":"Gobierno colegiado de los cinco patriarcados: Roma, Constantinopla, Alejandría, Antioquía y Jerusalén."},{"term":"Filioque","definition":"Cláusula añadida en Occidente al credo, uno de los puntos doctrinales del cisma."},{"term":"Nomisma","definition":"Moneda de oro bizantina, referencia monetaria del Mediterráneo durante unos siete siglos."},{"term":"Porfirogéneta","definition":"«Nacido en la púrpura»: hijo de emperador reinante, con legitimidad dinástica superior."}]},{"type":"debates","items":[{"question":"¿Fue Bizancio una decadencia milenaria o un Estado excepcionalmente adaptativo?","positions":[{"school":"Decadencia (Montesquieu, Gibbon)","argument":"Mil años de intriga cortesana, disputa teológica estéril y pérdida progresiva de territorio. La historia bizantina sería el largo epílogo de la caída de Roma, sin aportación propia relevante."},{"school":"Revisión moderna (Ostrogorsky, Kaldellis, Cameron)","argument":"Sobrevivió mil años a persas, árabes, búlgaros, normandos, cruzados y turcos, y se reorganizó por completo tras perder tres cuartas partes de su territorio en el siglo VII. Preservó el derecho romano y la literatura griega, y evangelizó el mundo eslavo."}],"state":"La imagen de la decadencia está descartada en la investigación especializada, aunque persiste en la cultura general y en el propio uso peyorativo del adjetivo «bizantino». El debate actual se centra en cómo describir la naturaleza del Estado bizantino, con propuestas como la de Kaldellis de leerlo como una república romana con legitimidad popular más que como una autocracia teocrática."},{"question":"¿Qué causó realmente la iconoclasia?","positions":[{"school":"Influencia externa","argument":"El contacto con el islam y el judaísmo, aniconistas, y las derrotas militares interpretadas como castigo divino por idolatría habrían empujado a los emperadores a purificar el culto."},{"school":"Conflicto interno de poder","argument":"Sería un intento imperial de someter a los monasterios: grandes propietarios de tierras, custodios de los iconos más venerados y exentos de cargas fiscales y militares. La teología encubriría una disputa por recursos."}],"state":"Se admite la combinación de factores. La dificultad principal es de fuentes: los textos iconoclastas fueron destruidos por los vencedores y solo se conocen a través de refutaciones, lo que sesga sistemáticamente el debate."},{"question":"¿Cuándo cayó realmente Bizancio, en 1204 o en 1453?","positions":[{"school":"1453 como fecha canónica","argument":"Es cuando desaparece el Estado: muere el último emperador, la capital pasa a manos otomanas y Santa Sofía se convierte en mezquita."},{"school":"1204 como ruptura decisiva","argument":"El saqueo de la Cuarta Cruzada destruyó la base económica, dispersó el patrimonio, fragmentó el territorio y liquidó la posibilidad de recuperación. El imperio paleólogo fue un Estado residual desde su restauración."}],"state":"Predomina la valoración de 1204 como el golpe irreversible, sin dejar de usar 1453 como fecha formal. La discusión conecta con la crítica a los cortes cronológicos convencionales entre Edad Media y Edad Moderna."}]},{"type":"timeline","items":[{"date":"330","event":"Constantino inaugura Constantinopla sobre la antigua Bizancio."},{"date":"395","event":"División administrativa definitiva del imperio tras Teodosio."},{"date":"527–565","event":"Justiniano: Corpus Iuris Civilis, Santa Sofía y reconquista de Occidente."},{"date":"541–542","event":"Peste de Justiniano; mortalidad catastrófica en el Mediterráneo."},{"date":"634–718","event":"Conquistas árabes: pérdida de Siria, Egipto y África; dos asedios de Constantinopla."},{"date":"726–843","event":"Controversia iconoclasta, con dos fases y restauración final de las imágenes."},{"date":"863","event":"Misión de Cirilo y Metodio: evangelización eslava y alfabeto glagolítico."},{"date":"1014","event":"Basilio II derrota definitivamente al imperio búlgaro."},{"date":"1054","event":"Cisma de Oriente y Occidente entre Roma y Constantinopla."},{"date":"1071","event":"Manzikert: derrota ante los turcos selyúcidas y pérdida de Anatolia interior."},{"date":"1204","event":"La Cuarta Cruzada saquea Constantinopla e instaura el Imperio latino."},{"date":"1261","event":"Miguel VIII Paleólogo recupera Constantinopla."},{"date":"1453","event":"Mehmed II toma Constantinopla; fin del Imperio."}]},{"type":"sources","items":[{"author":"Procopio de Cesarea","title":"Historia de las guerras; Historia secreta","year":"c. 550","kind":"primaria","note":"Historiador oficial de Justiniano y autor de un libelo privado demoledor contra él. Contraste de fuentes excepcional."},{"author":"Justiniano (dir. Triboniano)","title":"Corpus Iuris Civilis","year":"528–534","kind":"primaria","note":"Código, Digesto, Instituciones y Novelas. Base del derecho continental europeo tras su redescubrimiento en Bolonia."},{"author":"Juan Damasceno","title":"Discursos sobre las imágenes","year":"c. 730","kind":"primaria","note":"Principal fundamentación teológica del culto a los iconos."},{"author":"Ana Comnena","title":"Alexíada","year":"c. 1148","kind":"primaria","note":"Biografía de su padre Alejo I y visión bizantina de la Primera Cruzada. Primera gran historiadora conocida."},{"author":"Nicetas Coniates","title":"Historia","year":"c. 1207","kind":"primaria","note":"Testimonio directo del saqueo de Constantinopla en 1204."},{"author":"Georg Ostrogorsky","title":"Historia del Estado bizantino","year":"1940","kind":"estudio","note":"Manual clásico que fijó la periodización moderna del imperio."},{"author":"Steven Runciman","title":"The Fall of Constantinople 1453","year":"1965","kind":"estudio","note":"Relato de referencia del asedio final; también autor de una historia crítica de las cruzadas."},{"author":"Averil Cameron","title":"The Byzantines","year":"2006","kind":"estudio","note":"Síntesis breve centrada en desmontar los tópicos sobre Bizancio."},{"author":"Anthony Kaldellis","title":"The Byzantine Republic","year":"2015","kind":"estudio","note":"Propone leer Bizancio como república romana con legitimidad popular, no como autocracia teocrática."},{"author":"Judith Herrin","title":"Byzantium: The Surprising Life of a Medieval Empire","year":"2007","kind":"estudio","note":"Síntesis accesible y actualizada, atenta a la vida cotidiana y al papel de las mujeres."}]}]'::jsonb, 0, true
from public.topics where slug = 'bizancio'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'El Egipto de los faraones', '[{"type":"section","title":"Ecología fluvial: por qué el Nilo condiciona el Estado","text":"Egipto es, en términos geográficos, una franja de tierra cultivable de anchura muy variable —de pocos cientos de metros a algunas decenas de kilómetros— encajada en el desierto. La población histórica se concentró casi por completo en esa franja y en el delta, lo que produce una densidad demográfica alta sobre una superficie útil pequeña: una configuración que facilita el control administrativo y militar del territorio.\n\nEl régimen hidrológico procede del monzón etíope, que alimenta el Nilo Azul y el Atbara. La crecida llegaba a Asuán entre junio y julio, alcanzaba su máximo en septiembre y descendía en octubre, depositando limo aluvial sobre los campos. Los egipcios distinguían Kemet, «la tierra negra» del limo, de Deshret, «la tierra roja» del desierto, y organizaron su calendario agrícola en tres estaciones: akhet (inundación), peret (siembra y crecimiento) y shemu (cosecha).\n\nLa variable decisiva no es la fertilidad, sino la predictibilidad. Frente al régimen brusco e irregular del Tigris y el Éufrates, la crecida nilótica seguía un calendario razonablemente estable, lo que permitía anticipar la cosecha, calcular la carga fiscal y planificar la movilización de mano de obra. Karl Butzer, en *Early Hydraulic Civilization in Egypt* (1976), demostró además que la irrigación egipcia fue durante mucho tiempo de cuenca y de gestión local, no un sistema centralizado a escala nacional: el Estado se benefició del río, pero no nació de la necesidad de gestionarlo.\n\nEsa matización importa porque desmonta una explicación muy difundida. La tesis del «despotismo hidráulico» de Karl Wittfogel sostenía que los grandes Estados antiguos surgían de la necesidad de administrar sistemas de riego a gran escala. La evidencia egipcia no la sostiene: las obras hidráulicas documentadas son locales y tardías respecto a la formación del Estado.","callout":"Heródoto llamó a Egipto «un don del Nilo» (Historias II, 5). La frase describe bien la dependencia ecológica, pero oculta el trabajo social —diques, canales de cuenca, graneros, registros— que convirtió esa dependencia en excedente."},{"type":"section","title":"La formación del Estado y el aparato administrativo","text":"La unificación en torno al 3100 a. C. no fue un acontecimiento único, sino el desenlace de un proceso de varios siglos de competencia entre centros del Alto Egipto —Hieracómpolis, Nagada, Abidos— documentado por la arqueología predinástica. La Paleta de Narmer, con su iconografía de la maza alzada sobre el enemigo, es un documento ideológico de ese proceso, no necesariamente el acta de un hecho concreto.\n\nEl instrumento que dio continuidad al Estado fue la escritura administrativa. Los escribas medían la crecida con nilómetros, estimaban el rendimiento esperado y fijaban la carga fiscal antes de la cosecha; registraban tierras, rebaños, raciones y expediciones a las canteras del desierto y a las minas del Sinaí. Los papiros de Uadi al-Yarf, hallados en 2013 y fechados en el reinado de Keops, contienen el diario de un tal Merer, jefe de un equipo que transportaba bloques de caliza desde Tura hasta Guiza: es la documentación administrativa más antigua conservada en Egipto y confirma el funcionamiento logístico del Estado piramidal.\n\nLa administración territorial se organizaba en nomos, encabezados por nomarcas. La relación entre el poder central y estas élites provinciales es un buen indicador del ciclo político egipcio: cuando los nomarcas se hacen hereditarios y construyen tumbas monumentales en sus provincias —como ocurre a finales del Imperio Antiguo—, el poder central está retrocediendo.\n\nSer escriba constituía una vía real de promoción social. La *Sátira de los oficios* (Enseñanza de Khety), texto escolar del Imperio Medio, describe con detalle la dureza de los oficios manuales para concluir que solo el escriba escapa a ella. Se trata de propaganda gremial, pero indica que la alfabetización era un recurso escaso y valioso: se estima que menos del 1 % de la población sabía leer y escribir.","callout":null},{"type":"section","title":"Ideología real: la maat como programa de gobierno","text":"El faraón no era solo el detentador del poder político. La teología real lo situaba como mediador entre los dioses y los humanos, encarnación de Horus en vida y asimilado a Osiris tras la muerte. Su función declarada era mantener la maat —orden, verdad, justicia, equilibrio— frente al isfet, el caos.\n\nEsto tenía consecuencias operativas. La legitimidad del rey se medía por resultados verificables: crecidas suficientes, graneros llenos, fronteras seguras, templos en construcción. Jan Assmann ha insistido en que la maat funcionaba también como un principio de reciprocidad social —la obligación de responder al otro, de hacer justicia al débil— y no solo como una cosmología abstracta.\n\nLos textos del Primer Periodo Intermedio muestran qué ocurría cuando esa promesa fallaba. Las *Admoniciones de Ipuwer* describen un mundo invertido: los pobres visten lino fino, el río es sangre, los muertos quedan sin sepultura. Aunque el texto es literario y su datación se discute, refleja la conciencia egipcia de que la ruptura del orden era un fracaso del rey, no un accidente.\n\nEl poder real se apoyaba en tres cuerpos: la administración civil, encabezada por el visir; el clero de los grandes templos; y, sobre todo desde el Imperio Nuevo, el ejército profesional. La tensión entre ellos explica buena parte de la historia política egipcia: el templo de Amón en Karnak llegó a controlar, según el papiro Harris I, una proporción muy considerable de la tierra cultivable del país, hasta convertirse en un contrapoder efectivo.","callout":"Maat era simultáneamente diosa, principio y práctica. En el juicio de Osiris el corazón del difunto se pesaba frente a su pluma: la ética individual quedaba integrada en la cosmología estatal."},{"type":"section","title":"Estructura social, trabajo y condiciones de vida","text":"La inmensa mayoría de la población era campesina. Cultivaba tierras de la corona, de los templos o de grandes propietarios, entregaba una parte de la cosecha y estaba sujeta a la corvea: trabajo obligatorio en obras públicas, concentrado en los meses de inundación, cuando el campo quedaba anegado y la mano de obra estaba disponible.\n\nEsa estacionalidad explica en buena medida la viabilidad de las grandes obras. Las excavaciones de Mark Lehner y Zahi Hawass en el asentamiento de constructores al sur de Guiza documentaron panaderías, cervecerías, talleres, dormitorios colectivos y depósitos de restos de ganado en cantidad suficiente para alimentar a miles de trabajadores. La imagen herodotea de multitudes de esclavos flagelados no se sostiene: se trataba de trabajadores egipcios organizados en equipos, mantenidos por el Estado y con cierta especialización técnica.\n\nEl poblado de Deir el-Medina, habitado por los artesanos que excavaban y decoraban las tumbas del Valle de los Reyes, es el yacimiento que mejor documenta la vida cotidiana del Egipto antiguo. Sus miles de ostraca conservan listas de raciones, contratos, préstamos, pleitos, partes de ausencia por enfermedad, cartas privadas e incluso conflictos vecinales. En el año 29 de Ramsés III, hacia 1155 a. C., el retraso en la entrega de raciones provocó la primera huelga documentada de la historia: los obreros abandonaron el trabajo y se sentaron ante los templos funerarios reclamando el grano debido.\n\nLa posición jurídica de las mujeres egipcias era notable en el contexto del Mediterráneo antiguo: podían poseer y heredar bienes en nombre propio, otorgar contratos, litigar y divorciarse conservando parte del patrimonio. Esto no equivale a igualdad. Los cargos administrativos y sacerdotales de alto rango fueron mayoritariamente masculinos, y las escasas mujeres que gobernaron —Hatshepsut, Tausert, Cleopatra VII— lo hicieron adoptando o adaptando una titulatura concebida en masculino.","callout":null},{"type":"section","title":"Religión funeraria: economía, ritual y creencia","text":"La afirmación de que los egipcios estaban «obsesionados con la muerte» es un artefacto de nuestras fuentes: las necrópolis, construidas en piedra en el desierto, se conservan mucho mejor que las viviendas de adobe del valle inundable. Lo que la documentación muestra no es una obsesión, sino una inversión sostenida en la continuidad de la persona tras la muerte.\n\nEsa continuidad exigía tres condiciones: la preservación del cuerpo mediante momificación; el mantenimiento del nombre y de las ofrendas, garantizado por fundaciones funerarias con tierras asignadas; y la superación del juicio ante Osiris. Los corpus funerarios evolucionaron y se democratizaron: los Textos de las Pirámides (Imperio Antiguo) eran exclusivamente reales; los Textos de los Sarcófagos (Imperio Medio) se extendieron a la élite; y el llamado Libro de los Muertos (Imperio Nuevo) circulaba en copias adquiribles con espacios en blanco para el nombre del comprador.\n\nLa religión egipcia era politeísta y marcadamente acumulativa: las divinidades se sincretizaban (Amón-Ra, Ptah-Sokar-Osiris), variaban en importancia según la ciudad hegemónica y admitían teologías locales simultáneas sin necesidad de resolverlas. Esa flexibilidad explica lo excepcional de la reforma de Akenatón, que restringió el culto al disco solar Atón, cerró templos y desplazó la corte a una capital nueva. Sus sucesores revirtieron la reforma, desmantelaron Amarna y omitieron su nombre de las listas reales.\n\nConviene evitar dos lecturas anacrónicas. La primera es leer el atonismo como un monoteísmo precursor del judaísmo, tesis que Sigmund Freud popularizó en *Moisés y la religión monoteísta* (1939) y que la egiptología ha rechazado mayoritariamente por falta de continuidad documental. La segunda es leer las prácticas funerarias como superstición: eran una tecnología ritual coherente con una cosmología explícita y con una economía de fundaciones, sacerdocios y talleres.","callout":null},{"type":"section","title":"Escritura, saber técnico y transmisión","text":"El sistema gráfico egipcio combinaba signos logográficos, fonogramas consonánticos y determinativos semánticos. Se usó en tres variantes funcionales: jeroglífica, para inscripciones monumentales; hierática, cursiva sobre papiro, para la administración y la literatura; y demótica, desarrollada en el Tercer Periodo Intermedio, más rápida y más alejada del signo original.\n\nEl saber egipcio era operativo antes que teórico. La geometría respondía a la necesidad de restablecer lindes tras la crecida y de calcular volúmenes de graneros y rampas: el papiro Rhind, copiado hacia 1550 a. C., recoge problemas de áreas, fracciones y pendientes. El calendario civil de 365 días, con doce meses de treinta días y cinco epagómenos, prescindía del cuarto de día sobrante, lo que producía un desfase acumulativo que los propios egipcios conocían y que la reforma juliana corrigió siglos después.\n\nEn medicina, el papiro Edwin Smith presenta cuarenta y ocho casos de traumatismos ordenados de la cabeza a los pies, cada uno con examen, diagnóstico y pronóstico, incluida la fórmula «una dolencia que no trataré». Junto a ese registro clínico convivían sin conflicto los ensalmos mágicos: la distinción moderna entre medicina y magia no era operativa para sus autores.\n\nEl conocimiento del sistema se perdió tras el cierre de los templos en época romana tardía; la última inscripción jeroglífica datada procede de File, en 394 d. C. La recuperación llegó con el hallazgo de la piedra de Rosetta en 1799 y con el desciframiento de Jean-François Champollion, anunciado en su *Lettre à M. Dacier* (1822), que estableció que los signos registraban a la vez sonidos y significados, frente a la interpretación puramente simbólica dominante desde Horapolo.","callout":"La piedra de Rosetta repite un decreto sacerdotal de 196 a. C. en jeroglífico, demótico y griego. El bilingüismo del soporte, y no su contenido, fue lo que abrió el sistema."},{"type":"section","title":"Imperio, crisis y final de la independencia","text":"Con el Imperio Nuevo, Egipto pasó de un modelo de control de fronteras a una política imperial activa en Siria-Palestina y Nubia, sostenida por un ejército permanente con carros de guerra y arqueros. Las cartas de Amarna, correspondencia diplomática en acadio entre la corte egipcia y los reyes de Babilonia, Mitani, Hatti y los príncipes vasallos cananeos, documentan un sistema internacional con protocolos, matrimonios dinásticos e intercambio regulado de regalos.\n\nLa batalla de Qadesh, hacia 1274 a. C., ilustra tanto los límites militares como la potencia propagandística del Estado: Ramsés II la presentó en sus templos como una victoria personal, mientras que el desenlace real fue un empate estratégico que condujo, hacia 1259 a. C., al tratado con Hattusili III, conservado en versión egipcia y en tablillas hititas de Hattusa.\n\nEl colapso de la Edad del Bronce Final, hacia 1200-1150 a. C., afectó a todo el Mediterráneo oriental. Egipto sobrevivió como Estado —Ramsés III rechazó las incursiones de los llamados Pueblos del Mar—, pero salió debilitado: pérdida de las posesiones asiáticas, inflación del grano documentada en los archivos, y creciente autonomía del sacerdocio de Amón, que terminó gobernando de hecho el sur del país.\n\nDesde el primer milenio, Egipto fue gobernado sucesivamente por dinastías libias, la dinastía kushita procedente de Napata, los asirios, los persas aqueménidas y, desde 332 a. C., los macedonios. Los Ptolomeos mantuvieron un Estado egipcio con corte griega en Alejandría y una legitimación faraónica hacia el interior. La derrota de Cleopatra VII y Marco Antonio en Accio (31 a. C.) y la anexión por Octavio en 30 a. C. cierran la independencia política: Egipto pasó a ser una provincia de estatuto singular, administrada directamente por el emperador, y siguió siendo durante siglos el granero de Roma.","callout":null},{"type":"concepts","items":[{"term":"Maat","definition":"Orden, verdad y justicia cósmica y social que el faraón debía garantizar frente al isfet (caos)."},{"term":"Kemet / Deshret","definition":"«Tierra negra» del limo cultivable frente a «tierra roja» del desierto: la distinción básica del espacio egipcio."},{"term":"Akhet, peret, shemu","definition":"Las tres estaciones del calendario agrícola: inundación, siembra y cosecha."},{"term":"Nomo","definition":"Circunscripción administrativa provincial, gobernada por un nomarca. Su hereditariedad señala debilidad del poder central."},{"term":"Corvea","definition":"Trabajo obligatorio en obras públicas exigido a la población campesina, concentrado en la estación de inundación."},{"term":"Ostracon","definition":"Fragmento de cerámica o caliza usado como soporte de escritura barato. Base documental de Deir el-Medina."},{"term":"Sincretismo","definition":"Fusión de divinidades (Amón-Ra, Ptah-Sokar-Osiris) sin eliminar los cultos previos."},{"term":"Periodo Intermedio","definition":"Fase de fragmentación del poder central entre dos Imperios, con dinastías simultáneas y rivales."},{"term":"Epagómenos","definition":"Los cinco días añadidos al final del calendario civil de 360 días para completar el año de 365."},{"term":"Damnatio memoriae","definition":"Borrado deliberado del nombre y la imagen de un gobernante, aplicado a Akenatón y a Hatshepsut."}]},{"type":"debates","items":[{"question":"¿Nació el Estado egipcio de la necesidad de gestionar el riego a gran escala?","positions":[{"school":"Tesis hidráulica (Wittfogel, 1957)","argument":"Los grandes Estados antiguos surgirían del control centralizado de sistemas de irrigación masivos, que exigirían una burocracia coercitiva. Egipto sería el caso ejemplar de este «despotismo oriental»."},{"school":"Crítica ecológica y arqueológica (Butzer, 1976)","argument":"La irrigación egipcia fue de cuenca, gestionada localmente, y las grandes obras hidráulicas documentadas son posteriores a la formación del Estado. La causalidad se invierte: el Estado ya existente amplió el riego, no al revés."}],"state":"La tesis de Wittfogel está hoy mayoritariamente rechazada como explicación causal. El debate se ha desplazado hacia el papel de la competencia entre centros predinásticos, el control del comercio de larga distancia y la ideología real como factores de formación estatal."},{"question":"¿Quién construyó las pirámides y en qué condiciones?","positions":[{"school":"Relato clásico (Heródoto, s. V a. C.)","argument":"Cien mil hombres trabajando en turnos bajo coacción durante veinte años, en una obra descrita como una tiranía que cerró los templos y arruinó al país."},{"school":"Arqueología del asentamiento (Lehner y Hawass, desde 1988)","argument":"El poblado de constructores de Guiza revela panaderías, cervecerías, dormitorios y un consumo cárnico elevado, compatible con equipos rotatorios de trabajadores egipcios mantenidos por el Estado, con jerarquías técnicas y atención médica documentada en los restos óseos."}],"state":"El consenso actual descarta la esclavitud masiva y sitúa la obra dentro del sistema de corvea estacional. Sigue discutiéndose el tamaño exacto de la fuerza de trabajo permanente frente a la estacional y el coste real de la obra sobre la economía agraria."},{"question":"¿Fue la reforma de Akenatón un monoteísmo?","positions":[{"school":"Lectura monoteísta (Breasted; Freud, 1939)","argument":"El atonismo habría sido la primera religión monoteísta de la historia y una posible fuente del monoteísmo israelita, dado el cierre de otros cultos y los himnos que atribuyen a Atón la creación universal."},{"school":"Lectura contextual (Assmann; Hornung)","argument":"Se trataría más bien de una henoteísmo real y excluyente: el propio Akenatón seguía siendo objeto de culto y el acceso a Atón pasaba por él. No hay continuidad documental que enlace Amarna con Israel."}],"state":"La egiptología actual describe la reforma como un caso singular de exclusivismo cultual impuesto desde la corona, sin descendencia religiosa directa. La comparación con el monoteísmo bíblico se considera problemática por falta de eslabones documentales."}]},{"type":"timeline","items":[{"date":"c. 5000–4000 a. C.","event":"Culturas predinásticas (Badariense, Nagada I) en el Alto Egipto."},{"date":"c. 3100 a. C.","event":"Unificación del Alto y el Bajo Egipto; inicio del periodo dinástico."},{"date":"c. 2686–2160 a. C.","event":"Imperio Antiguo: Estado piramidal, complejos de Guiza y auge del culto solar."},{"date":"c. 2160–2055 a. C.","event":"Primer Periodo Intermedio: fragmentación y literatura pesimista."},{"date":"c. 2055–1650 a. C.","event":"Imperio Medio: reunificación tebana, colonización de Nubia, clasicismo literario."},{"date":"c. 1650–1550 a. C.","event":"Segundo Periodo Intermedio: dominio hicso en el delta."},{"date":"c. 1550–1070 a. C.","event":"Imperio Nuevo: Egipto como potencia imperial en Siria-Palestina y Nubia."},{"date":"c. 1479–1458 a. C.","event":"Reinado de Hatshepsut; expedición a Punt y programa monumental en Deir el-Bahari."},{"date":"c. 1353–1336 a. C.","event":"Reinado de Akenatón: reforma atoniana y nueva capital en Amarna."},{"date":"c. 1274 a. C.","event":"Batalla de Qadesh; hacia 1259 a. C., tratado egipcio-hitita conservado en ambas versiones."},{"date":"c. 1155 a. C.","event":"Huelga de los obreros de Deir el-Medina bajo Ramsés III."},{"date":"525 a. C.","event":"Conquista persa aqueménida (dinastía XXVII)."},{"date":"332 a. C.","event":"Alejandro Magno toma Egipto; después, dinastía ptolemaica."},{"date":"30 a. C.","event":"Muerte de Cleopatra VII; Egipto se convierte en provincia romana."}]},{"type":"sources","items":[{"author":"Heródoto","title":"Historias, libro II","year":"s. V a. C.","kind":"primaria","note":"Descripción griega de Egipto: valiosa como testimonio de recepción, poco fiable en cronología y en el relato de las pirámides."},{"author":"Anónimo","title":"Enseñanza de Khety (Sátira de los oficios)","year":"Imperio Medio","kind":"primaria","note":"Texto escolar que exalta la condición del escriba frente a los oficios manuales."},{"author":"Anónimo","title":"Admoniciones de Ipuwer","year":"Imperio Medio (datación discutida)","kind":"primaria","note":"Lamento por un orden social invertido; usado con cautela como fuente del Primer Periodo Intermedio."},{"author":"Diversos autores","title":"Cartas de Amarna","year":"c. 1360–1330 a. C.","kind":"primaria","note":"Correspondencia diplomática en acadio entre Egipto y las cortes de Oriente Próximo."},{"author":"Merer","title":"Papiros de Uadi al-Yarf","year":"c. 2560 a. C.","kind":"primaria","note":"Diario logístico del transporte de caliza a Guiza. Documentación administrativa más antigua conservada."},{"author":"Karl W. Butzer","title":"Early Hydraulic Civilization in Egypt: A Study in Cultural Ecology","year":"1976","kind":"estudio","note":"Refutación ecológica de la tesis del despotismo hidráulico."},{"author":"Jan Assmann","title":"Maat: Gerechtigkeit und Unsterblichkeit im Alten Ägypten","year":"1990","kind":"estudio","note":"La maat como principio de reciprocidad social, no solo cosmológico."},{"author":"Barry J. Kemp","title":"Ancient Egypt: Anatomy of a Civilization","year":"1989 (3.ª ed. 2018)","kind":"estudio","note":"Síntesis de referencia sobre Estado, ideología y economía egipcios."},{"author":"Mark Lehner","title":"The Complete Pyramids","year":"1997","kind":"estudio","note":"Arqueología constructiva y del asentamiento de trabajadores de Guiza."},{"author":"Toby A. H. Wilkinson","title":"The Rise and Fall of Ancient Egypt","year":"2010","kind":"estudio","note":"Narrativa general que subraya el carácter coercitivo del Estado faraónico."},{"author":"Erik Hornung","title":"Akhenaten and the Religion of Light","year":"1995 (trad. 1999)","kind":"estudio","note":"Análisis de la reforma atoniana frente a las lecturas monoteístas."}]}]'::jsonb, 0, true
from public.topics where slug = 'egipto'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'La Europa feudal', '[{"type":"section","title":"El vacío estatal y la privatización del poder","text":"El Imperio carolingio había intentado reconstruir una autoridad pública de escala continental: condes nombrados por el rey, inspectores itinerantes (missi dominici), capitulares legislativos, moneda controlada. Ese proyecto se deshizo en dos generaciones. La partición de Verdún (843), las luchas dinásticas y las incursiones vikingas, magiares y sarracenas dejaron a las poblaciones sin defensa efectiva desde arriba.\n\nLo que ocurrió entonces fue una privatización de las funciones públicas. Los cargos que el rey concedía —el condado, la castellanía— se hicieron hereditarios; el derecho a juzgar, a acuñar moneda, a cobrar peajes y a exigir prestaciones militares pasó a manos de quien controlaba un castillo. La palabra clave es ban: el poder de mandar, juzgar y castigar, que en teoría emanaba del rey y que en la práctica ejercía cada señor sobre su territorio.\n\nEl castillo es el objeto material que resume el proceso. Entre los siglos X y XI se multiplicaron por Europa occidental fortificaciones privadas —primero de madera sobre motas artificiales, después de piedra— que no defendían un reino, sino que delimitaban un ámbito de dominación. Georges Duby estudió este fenómeno en la región del Mâconnais y lo llamó «encastillamiento».\n\nLa Iglesia intentó poner límites a esa violencia con los movimientos de Paz y Tregua de Dios desde finales del siglo X: prohibición de atacar a clérigos, campesinos, mujeres y mercaderes, y suspensión de la guerra en determinados días. Fue una respuesta social a la ausencia de justicia pública, y también un intento eclesiástico de encauzar a la aristocracia guerrera, que después desembocaría en la cruzada.","callout":"El «feudalismo» no fue un sistema diseñado, sino el resultado no buscado de un colapso institucional. Nadie lo inventó ni lo proclamó: se fue formando por la acumulación de soluciones locales al mismo problema."},{"type":"section","title":"Vasallaje y feudo: la relación entre poderosos","text":"El vínculo vasallático unía a dos hombres libres de posición desigual. El futuro vasallo colocaba sus manos entre las del señor (immixtio manuum) y prestaba juramento de fidelidad; el señor le concedía a cambio un beneficio, normalmente tierras con sus habitantes y rentas, que acabó llamándose feudo. La ceremonia se llamaba homenaje y creaba obligaciones recíprocas.\n\nEl vasallo debía auxilium y consilium: ayuda militar —un número determinado de días al año, generalmente cuarenta— y consejo, es decir, asistencia a la corte del señor y participación en sus juicios. Además contribuía económicamente en casos tasados: rescate del señor cautivo, armamento de su hijo mayor, matrimonio de su hija mayor. El señor debía protección y justicia.\n\nEl sistema tenía un fallo estructural: la multiplicidad de vínculos. Un mismo noble podía ser vasallo de varios señores a la vez, incluidos señores enfrentados entre sí. Para resolverlo se inventó el homenaje ligio, que establecía cuál era la fidelidad prioritaria; pero el problema nunca se resolvió del todo, y produjo situaciones tan absurdas como que el rey de Inglaterra fuera vasallo del rey de Francia por sus posesiones continentales, lo que está en el origen de la Guerra de los Cien Años.\n\nConviene desmontar la imagen de una «pirámide feudal» ordenada, con el rey en la cúspide y escalones sucesivos hasta el campesino. Esa representación procede de los manuales del siglo XIX y no de la documentación medieval. Los vínculos reales eran múltiples, contradictorios, negociados y frecuentemente incumplidos; el rey, durante largos periodos, fue un señor más entre otros, a menudo menos poderoso que sus supuestos vasallos.","callout":null},{"type":"section","title":"El señorío y la vida campesina","text":"La estructura que sostenía todo el edificio era el señorío, y afectaba a la inmensa mayoría de la población. Se distinguen dos formas de poder señorial. El señorío territorial daba al señor la propiedad de la tierra y el derecho a percibir rentas de quienes la trabajaban. El señorío jurisdiccional le daba el ban: juzgar, multar, exigir prestaciones y obligar al uso de sus instalaciones.\n\nLa explotación se dividía en reserva —la parte que el señor gestionaba directamente y que los campesinos trabajaban gratis mediante corveas— y mansos, parcelas cedidas a familias campesinas a cambio de renta en especie, en dinero o en trabajo. A ello se sumaban los monopolios señoriales o banalidades: obligación de moler en el molino del señor, cocer en su horno y prensar en su lagar, siempre pagando.\n\nLa condición jurídica de los campesinos era variada y cambiante. Los siervos estaban adscritos a la tierra: no podían abandonarla, necesitaban permiso para casarse fuera del señorío (formariage) y pagaban un derecho a la sucesión (mainmorte). Los campesinos libres tenían obligaciones menos gravosas pero seguían sujetos a la jurisdicción señorial. La esclavitud antigua desapareció progresivamente, sustituida por estas formas de dependencia.\n\nLa imagen de un campesinado pasivo es falsa. La documentación registra resistencias constantes: pleitos ante la corte señorial, negociación colectiva de cartas de franquicia, fugas hacia tierras que necesitaban repobladores, y revueltas abiertas como la de los campesinos normandos de 996. Las comunidades rurales tenían asambleas propias, gestionaban bienes comunales —pastos, bosques, aguas— y negociaban con el señor como cuerpo.\n\nDesde el siglo XI, un ciclo de crecimiento cambió las condiciones. Mejoras técnicas —arado pesado de vertedera, collera rígida que multiplicaba la fuerza de tiro del caballo, rotación trienal, molinos hidráulicos y después de viento— aumentaron los rendimientos. La población creció, se roturaron bosques y marismas, y aparecieron ciudades nuevas. Ese crecimiento fue el que empezó a erosionar el orden señorial, al ofrecer al campesinado alternativas: el aire de la ciudad, decía el proverbio alemán, hace libre.","callout":"Las banalidades son un buen indicador de qué era el poder señorial: no solo cobrar renta por la tierra, sino monopolizar servicios imprescindibles y cobrar por usarlos obligatoriamente."},{"type":"section","title":"La sociedad de los tres órdenes y la Iglesia","text":"Hacia el año 1000, los obispos Adalberón de Laon y Gerardo de Cambrai formularon un esquema destinado a una larga vida: la sociedad se divide en quienes rezan (oratores), quienes combaten (bellatores) y quienes trabajan (laboratores). Cada orden cumple una función necesaria y el conjunto forma un cuerpo armónico querido por Dios.\n\nGeorges Duby analizó este esquema en *Les trois ordres ou l''imaginaire du féodalisme* (1978) y mostró que no era una descripción, sino un arma ideológica: aparece precisamente cuando el orden social está siendo cuestionado, y sirve para justificar que unos trabajen para que otros combatan y recen. Su eficacia fue enorme: se repitió durante ochocientos años y todavía estructuraba el discurso del Antiguo Régimen en 1789.\n\nLa Iglesia no era solo una institución espiritual: era el mayor propietario de tierras de Europa y un poder señorial de pleno derecho, con obispos que ejercían el ban y abadías que poseían decenas de señoríos. Esa doble condición generó tensiones permanentes.\n\nLa Querella de las Investiduras (1075-1122) fue el enfrentamiento decisivo. El papado reformador, con Gregorio VII, reclamó que solo la Iglesia pudiera nombrar obispos y abades, frente a la práctica de que los designara el emperador. El conflicto tuvo episodios espectaculares —la excomunión de Enrique IV y su penitencia en Canossa en 1077— y se cerró con el Concordato de Worms (1122), que distinguió la investidura espiritual, reservada a la Iglesia, de la temporal, concedida por el poder laico.\n\nSus consecuencias fueron de largo alcance. Al separar por primera vez de forma explícita la esfera religiosa de la política, la Querella creó las condiciones para pensar el poder secular como algo autónomo. Varios historiadores del derecho la consideran uno de los orígenes remotos de la distinción moderna entre Iglesia y Estado.","callout":null},{"type":"section","title":"¿Existió el feudalismo? La gran polémica","text":"La palabra «feudalismo» no es medieval. Se acuñó en el siglo XVII a partir de los estudios de derecho feudal y se generalizó en el XVIII con un sentido peyorativo: Montesquieu, Voltaire y después los revolucionarios franceses la usaron para designar el conjunto de privilegios que había que abolir. Es decir, nació como categoría polémica antes que como concepto analítico.\n\nEn el siglo XX se consolidaron dos usos muy distintos. Marc Bloch, en *La sociedad feudal* (1939-1940), lo describió como un tipo de sociedad completo: dependencia personal generalizada, fragmentación del poder, predominio del guerrero, escasa circulación monetaria, vínculos de parentesco fuertes. Para la tradición marxista, en cambio, el feudalismo era un modo de producción definido por la extracción de excedente al campesinado mediante coacción extraeconómica, es decir, por la fuerza y no por el mercado.\n\nLa impugnación llegó en 1974, cuando Elizabeth Brown publicó «The Tyranny of a Construct», y sobre todo en 1994, con *Fiefs and Vassals* de Susan Reynolds. Reynolds sostuvo, a partir de la documentación, que las categorías de feudo y vasallaje que manejan los manuales fueron sistematizadas por los juristas del siglo XII y proyectadas después hacia atrás sobre siglos que funcionaban de otra manera. La palabra «feudo» aparece con significados dispares; el homenaje no siempre implica concesión de tierra; y las relaciones documentadas son mucho más variadas y locales de lo que sugiere el modelo.\n\nLa discusión conectó con otra: la del «cambio del año mil» o mutación feudal. Duby y Bonnassie defendieron una transformación brusca en torno al 1000, con hundimiento de la justicia pública y aparición súbita del señorío banal. Dominique Barthélemy respondió que el cambio fue mucho más gradual y que la impresión de ruptura se debe a un cambio en el tipo de documentos conservados, no en la realidad que describen.\n\nEl resultado práctico de estos debates es una llamada a la precisión. La mayoría de los medievalistas sigue usando «feudal» como abreviatura útil, pero especificando de qué se habla: relaciones vasalláticas entre aristócratas, señorío sobre campesinos, o un tipo general de sociedad. Confundir esos tres planos —lo que hacen la mayoría de los manuales— es lo que Reynolds considera insostenible.","callout":"La noche del 4 de agosto de 1789, la Asamblea francesa proclamó abolido «el régimen feudal». Lo que abolía eran derechos señoriales del siglo XVIII, no un sistema medieval: la propia palabra hacía el trabajo político de agrupar bajo una etiqueta odiosa realidades muy distintas."},{"type":"section","title":"Comparación y final del ciclo","text":"El uso del término fuera de Europa occidental ha sido muy discutido. Se ha aplicado al Japón de los samuráis, con su relación entre daimios y shogun, y a la Rusia moderna. Marc Bloch admitía la comparación con Japón; la mayoría de los especialistas actuales prefiere restringirla, porque las semejanzas superficiales —guerreros, lealtad personal, tierra— ocultan diferencias profundas en la estructura del Estado, la religión y el derecho.\n\nEl propio ciclo europeo se cerró desde dentro. El crecimiento económico de los siglos XII y XIII multiplicó la circulación monetaria, lo que permitió sustituir el servicio militar vasallático por impuestos y tropas mercenarias; las ciudades obtuvieron cartas de franquicia que las sustraían a la jurisdicción señorial; y los reyes reconstruyeron administraciones profesionales, tribunales de apelación y una fiscalidad regular.\n\nLa recuperación del derecho romano fue decisiva en ese proceso. El Corpus Iuris Civilis, estudiado en Bolonia desde el siglo XI, ofrecía a los monarcas un arsenal conceptual —soberanía, ley general, autoridad pública— con el que combatir la fragmentación jurisdiccional. Los juristas formados en las universidades se convirtieron en el instrumento del Estado en construcción.\n\nEse proceso no fue lineal ni uniforme. Inglaterra desarrolló pronto una monarquía centralizada con derecho común y, al mismo tiempo, un parlamento capaz de limitarla, en un equilibrio anticipado por la Carta Magna de 1215. Francia tardó siglos en someter a sus grandes feudatarios. En el Sacro Imperio, la fragmentación se consolidó hasta el siglo XIX. Y en la península ibérica, la reconquista y la repoblación generaron regímenes de franquicia y concejos con amplias libertades locales difíciles de encajar en el modelo clásico.","callout":null},{"type":"concepts","items":[{"term":"Ban","definition":"Poder de mandar, juzgar y castigar. Emanaba en teoría del rey; en la práctica lo ejercía cada señor con castillo."},{"term":"Homenaje","definition":"Ceremonia que creaba el vínculo vasallático mediante la unión de manos y el juramento de fidelidad."},{"term":"Feudo","definition":"Beneficio —normalmente tierra con sus rentas y habitantes— concedido por el señor al vasallo."},{"term":"Auxilium y consilium","definition":"Las dos obligaciones básicas del vasallo: ayuda militar y consejo en la corte del señor."},{"term":"Homenaje ligio","definition":"Fidelidad prioritaria, creada para resolver el conflicto de vínculos múltiples entre señores enfrentados."},{"term":"Reserva y mansos","definition":"Parte de la explotación gestionada por el señor frente a las parcelas cedidas a familias campesinas."},{"term":"Banalidades","definition":"Monopolios señoriales de molino, horno y lagar, de uso obligatorio y de pago."},{"term":"Corvea","definition":"Trabajo gratuito obligatorio del campesino en las tierras de reserva del señor."},{"term":"Servidumbre","definition":"Adscripción a la tierra, con restricciones al matrimonio (formariage) y a la sucesión (mainmorte)."},{"term":"Tres órdenes","definition":"Esquema ideológico —oratores, bellatores, laboratores— formulado hacia el año 1000 para justificar el orden social."},{"term":"Carta de franquicia","definition":"Documento que reconocía libertades a una comunidad rural o urbana, sustrayéndola a cargas señoriales."}]},{"type":"debates","items":[{"question":"¿Es «feudalismo» un concepto válido o una construcción de los historiadores?","positions":[{"school":"Feudalismo como tipo de sociedad (Bloch, 1939)","argument":"Describe un conjunto coherente: dependencia personal generalizada, fragmentación del poder, predominio del guerrero, economía poco monetizada y lazos de parentesco fuertes. Es una herramienta comparativa útil."},{"school":"Modo de producción (tradición marxista)","argument":"Lo definitorio es la extracción de excedente al campesinado mediante coacción extraeconómica. El vasallaje entre nobles sería secundario respecto a la relación señor-campesino."},{"school":"Impugnación del constructo (Brown, 1974; Reynolds, 1994)","argument":"Feudo y vasallaje tal como se enseñan fueron sistematizados por juristas del siglo XII y proyectados hacia atrás. La documentación muestra usos dispares y relaciones mucho más locales y variadas que el modelo."}],"state":"La crítica de Reynolds ha obligado a una precisión mayor. La mayoría de los medievalistas sigue usando «feudal» como abreviatura, pero distinguiendo entre relaciones vasalláticas, señorío campesino y tipo general de sociedad: confundir esos tres planos es lo que se considera insostenible."},{"question":"¿Hubo una «mutación feudal» brusca en torno al año 1000?","positions":[{"school":"Mutación (Duby, Bonnassie, Poly-Bournazel)","argument":"Hacia el 1000 se hunde la justicia pública carolingia y aparece de forma rápida el señorío banal, con encastillamiento, violencia caballeresca y nuevas cargas sobre el campesinado."},{"school":"Continuidad (Barthélemy)","argument":"El cambio fue gradual y la impresión de ruptura procede de una transformación en el tipo de documentos conservados —de actas públicas a cartularios monásticos—, no en la realidad social que describen."}],"state":"La versión fuerte de la mutación se ha suavizado. Se acepta una transformación real del poder local, pero más lenta, con cronologías muy distintas según regiones y sin la nitidez que sugería el modelo original."},{"question":"¿Puede hablarse de feudalismo fuera de Europa occidental?","positions":[{"school":"Uso comparativo (Bloch)","argument":"El Japón medieval presenta rasgos análogos: guerreros profesionales, lealtad personal, tierra a cambio de servicio, fragmentación del poder central. La comparación ilumina ambos casos."},{"school":"Restricción (mayoría de especialistas actuales)","argument":"Las semejanzas superficiales ocultan diferencias profundas en la estructura del Estado, el derecho, la religión y la relación con el campesinado. Extender el término lo vacía de contenido analítico."}],"state":"Predomina la cautela. Se admite la comparación explícita y acotada, y se rechaza el uso de «feudal» como sinónimo genérico de «premoderno» o «atrasado», frecuente fuera de la disciplina."}]},{"type":"timeline","items":[{"date":"800","event":"Coronación imperial de Carlomagno en Roma."},{"date":"843","event":"Tratado de Verdún: partición del Imperio carolingio."},{"date":"c. 850–950","event":"Incursiones vikingas, magiares y sarracenas; fragmentación del poder."},{"date":"910","event":"Fundación de Cluny; reforma monástica y exención de poderes laicos."},{"date":"c. 989–1030","event":"Concilios de Paz y Tregua de Dios."},{"date":"1066","event":"Conquista normanda de Inglaterra."},{"date":"1075–1122","event":"Querella de las Investiduras; Concordato de Worms."},{"date":"1086","event":"Domesday Book: censo señorial de Inglaterra."},{"date":"1095","event":"Urbano II predica la Primera Cruzada en Clermont."},{"date":"c. 1100–1200","event":"Roturaciones, crecimiento demográfico y renacimiento urbano."},{"date":"1215","event":"Carta Magna: límites contractuales al poder real inglés."}]},{"type":"sources","items":[{"author":"Fulberto de Chartres","title":"Carta a Guillermo de Aquitania","year":"1020","kind":"primaria","note":"Enumera las obligaciones recíprocas de señor y vasallo. Texto escolar clásico sobre el vasallaje."},{"author":"Galberto de Brujas","title":"De multro, traditione et occisione Karoli comitis Flandriarum","year":"1127–1128","kind":"primaria","note":"Describe ceremonias de homenaje en directo. Fuente excepcional por su inmediatez."},{"author":"Adalberón de Laon","title":"Carmen ad Robertum regem","year":"c. 1025","kind":"primaria","note":"Formulación canónica del esquema de los tres órdenes."},{"author":"Comisionados de Guillermo I","title":"Domesday Book","year":"1086","kind":"primaria","note":"Censo señorial de Inglaterra: fuente cuantitativa sin equivalente en la Europa del siglo XI."},{"author":"Anónimo","title":"Carta Magna","year":"1215","kind":"primaria","note":"Límites contractuales al poder real inglés impuestos por los barones."},{"author":"Marc Bloch","title":"La société féodale","year":"1939–1940","kind":"estudio","note":"Define el feudalismo como tipo de sociedad. Obra fundacional de la escuela de Annales en medievalística."},{"author":"Georges Duby","title":"Les trois ordres ou l''imaginaire du féodalisme","year":"1978","kind":"estudio","note":"Analiza el esquema trifuncional como ideología y no como descripción."},{"author":"Elizabeth A. R. Brown","title":"«The Tyranny of a Construct», American Historical Review","year":"1974","kind":"estudio","note":"Primer ataque frontal a la validez del concepto de feudalismo."},{"author":"Susan Reynolds","title":"Fiefs and Vassals: The Medieval Evidence Reinterpreted","year":"1994","kind":"estudio","note":"Demuestra que las categorías clásicas son una sistematización jurídica del siglo XII."},{"author":"Dominique Barthélemy","title":"La mutation de l''an mil a-t-elle eu lieu?","year":"1997","kind":"estudio","note":"Respuesta a la tesis de la mutación feudal desde la crítica documental."},{"author":"Chris Wickham","title":"Medieval Europe","year":"2016","kind":"estudio","note":"Síntesis reciente que integra los debates y evita el uso acrítico de «feudalismo»."}]}]'::jsonb, 0, true
from public.topics where slug = 'feudalismo'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Grecia arcaica y clásica', '[{"type":"section","title":"Del colapso micénico a la polis","text":"Hacia 1200 a. C. se derrumbaron los palacios micénicos, con su escritura silábica (Lineal B), su burocracia redistributiva y su economía centralizada. El colapso formó parte del hundimiento general del Bronce Final en el Mediterráneo oriental. Grecia perdió la escritura durante unos cuatro siglos, y con ella la administración palacial: no hay archivos, ni grandes obras, ni comercio de larga distancia comparable.\n\nDe esa discontinuidad surgió algo distinto. Cuando las comunidades se reorganizaron, no reconstruyeron palacios: construyeron poleis. Una polis no es simplemente una ciudad; es una comunidad de ciudadanos —un cuerpo político— con su territorio (chora), su ágora, sus cultos y sus instituciones. Aristóteles lo formuló con precisión: la polis es una comunidad de ciudadanos, no un lugar. Por eso los griegos decían «los atenienses» y no «Atenas» al hablar de decisiones políticas.\n\nLa recuperación de la escritura fue igualmente reveladora. Los griegos adoptaron el alfabeto fenicio hacia el siglo IX-VIII a. C., pero introdujeron una modificación decisiva: asignaron signos a las vocales. El resultado fue un sistema de unas veinticuatro letras, aprendible en semanas y no en años, frente al centenar largo de signos del cuneiforme o del jeroglífico. Ese abaratamiento de la alfabetización tuvo consecuencias políticas: las leyes podían exponerse por escrito y ser verificadas por cualquiera.\n\nLa gran colonización (c. 750-550 a. C.) llevó fundaciones griegas desde el mar Negro hasta el sur de Francia y la costa ibérica —Emporion, la actual Empúries, entre ellas—. Sus causas fueron sobre todo agrarias: escasez de tierra cultivable (stenochoria), presión demográfica y conflictos internos. Cada colonia era, desde su fundación, una polis independiente y no una posesión de la metrópolis: un rasgo que la distingue radicalmente del colonialismo moderno.","callout":"Aristóteles define al ser humano como zoon politikon: el animal que vive en polis. La traducción «animal político» pierde el matiz: no significa aficionado a la política, sino incapaz de realizarse fuera de una comunidad de ciudadanos."},{"type":"section","title":"La crisis arcaica: hoplitas, deudas y legisladores","text":"Los siglos VII y VI a. C. fueron de tensión social aguda. La concentración de tierra en manos aristocráticas y la práctica del préstamo con garantía personal produjeron una masa de campesinos endeudados que podían acabar esclavizados por sus propios acreedores. La crisis es documentada por los poemas de Solón y por Hesíodo, cuyos *Trabajos y días* describen desde abajo la dureza del campesinado y la parcialidad de los «reyes devoradores de regalos».\n\nEn paralelo se transformó la guerra. La falange hoplítica —formación cerrada de infantes con escudo redondo, lanza y coraza— sustituyó al combate individual de campeones aristocráticos. Su eficacia dependía de la cohesión: cada hombre protegía con su escudo el flanco derecho del vecino. Los hoplitas se costeaban el equipo, lo que los situaba en un estrato acomodado pero no aristocrático.\n\nLa llamada «tesis hoplítica», formulada por Aristóteles y desarrollada por historiadores modernos, sostiene que quienes combatían en la falange acabaron reclamando participación política proporcional a su contribución militar. La crítica reciente —Hans van Wees y Kurt Raaflaub— ha discutido tanto la cronología como el automatismo del vínculo: la falange se desarrolló de forma gradual, y muchas poleis con ejército hoplítico siguieron siendo oligarquías.\n\nLa respuesta a la crisis fueron los legisladores y los tiranos. Dracón (621 a. C.) puso las leyes por escrito, y aunque su severidad hizo proverbial el adjetivo «draconiano», la simple publicidad de la norma limitaba la arbitrariedad de los jueces aristocráticos. Solón (594 a. C.) fue más lejos: canceló las deudas vigentes (seisachtheia), prohibió la esclavitud por deudas de ciudadanos atenienses, y estructuró la participación política según la renta agraria, no según el nacimiento. Fue una reforma censitaria, no democrática, pero rompió el monopolio del linaje.\n\nLa tiranía griega arcaica no equivale al sentido moderno de la palabra. Los tiranos eran normalmente aristócratas que tomaban el poder al margen de la ley apoyándose en el descontento popular. Los Pisistrátidas en Atenas promovieron fiestas cívicas, obras públicas y cultos ciudadanos que, paradójicamente, debilitaron las redes clientelares de la nobleza y prepararon el terreno para la democracia.","callout":null},{"type":"section","title":"La democracia ateniense: mecánica y alcance","text":"Las reformas de Clístenes en 508/507 a. C. reorganizaron el cuerpo cívico sobre una base deliberadamente artificial. Sustituyó las cuatro tribus tradicionales de parentesco por diez tribus nuevas, cada una compuesta por demos de tres zonas distintas del Ática —costa, ciudad e interior—. El objetivo era romper las lealtades regionales y clientelares: la unidad política pasó a ser el demo de residencia, y los ciudadanos empezaron a identificarse por su demótico y no por su linaje.\n\nEl sistema resultante descansaba en tres órganos. La Ekklesía, asamblea abierta a todos los ciudadanos varones, se reunía unas cuarenta veces al año en la Pnyx y decidía leyes, guerra, paz y finanzas. La Boulé, consejo de quinientos miembros elegidos por sorteo, preparaba el orden del día y gestionaba la administración cotidiana. Los tribunales populares (Heliea), con jurados de centenares de ciudadanos también sorteados, juzgaban sin jueces profesionales.\n\nEl rasgo más ajeno a nuestra sensibilidad es el sorteo. Para los griegos, la elección era un procedimiento aristocrático —selecciona a los mejores o a los más conocidos— mientras que el sorteo era el procedimiento democrático, porque garantizaba igualdad efectiva de acceso al cargo. Solo los puestos que exigían competencia técnica, como el mando militar (estrategos), se cubrían por elección; y no es casual que fuera la estrategia el cargo desde el que Pericles gobernó de hecho durante décadas.\n\nA partir de Pericles se introdujo la misthophoría, un pago por el ejercicio de cargos y por asistir a los tribunales. La medida es decisiva: sin retribución, solo los acomodados podían permitirse dedicar días a la política. Aristóteles señala precisamente esto como el mecanismo que hizo real, y no solo formal, la participación de los pobres.\n\nLos límites del sistema son igual de importantes que sus mecanismos. La ciudadanía excluía a mujeres, a metecos (extranjeros residentes, muchos de ellos ricos y establecidos durante generaciones) y a esclavos. Las estimaciones más aceptadas para la Atenas del siglo V dan entre 30.000 y 60.000 ciudadanos varones sobre una población total de entre 250.000 y 300.000 personas: entre un 10 % y un 20 % del total. Y la ley de ciudadanía de Pericles (451 a. C.), que exigía madre y padre atenienses, restringió aún más el acceso.","callout":"El ostracismo permitía desterrar diez años a un ciudadano sin acusarlo de delito, mediante votación con fragmentos de cerámica. Era un mecanismo preventivo contra la concentración de poder, no una pena: el desterrado conservaba sus bienes."},{"type":"section","title":"Esparta: la anomalía que fascinó a la tradición","text":"Esparta ha sido, desde la Antigüedad, objeto de una idealización persistente que los historiadores llaman «el espejismo espartano». La imagen de una comunidad austera, igualitaria y perfectamente estable procede en gran medida de autores admiradores y externos —Jenofonte, Plutarco escribiendo siglos después— y de la ausencia de fuentes espartanas propias, ya que la ciudad no produjo casi literatura ni documentos.\n\nSu singularidad real era estructural. Esparta sometió a la vecina Mesenia y convirtió a su población en hilotas: una masa servil adscrita a la tierra, propiedad colectiva del Estado y no de particulares. Los hilotas superaban ampliamente en número a los espartiatas, y sostenían con su trabajo la dedicación militar exclusiva de estos. El sistema exigía represión permanente: los éforos declaraban formalmente la guerra a los hilotas cada año, y la kryptéia enviaba a jóvenes espartiatas a matar selectivamente a los hilotas más destacados.\n\nLa educación estatal (agogé) retiraba a los niños de sus familias a los siete años y los sometía a un entrenamiento colectivo de resistencia, disciplina y obediencia. El sistema político combinaba dos reyes hereditarios, un consejo de ancianos (gerusía), una asamblea de escasa capacidad de iniciativa y cinco éforos con amplios poderes de control anual.\n\nLas mujeres espartanas gozaban de una posición atípica en el mundo griego: recibían formación física, podían poseer y heredar tierras, y en época helenística Aristóteles calculaba que controlaban cerca de dos quintas partes del territorio. Aristóteles lo consideraba un defecto del régimen; para el historiador es un dato sobre las consecuencias de un sistema en el que los varones vivían prácticamente en cuartel.\n\nEl punto ciego de la idealización es demográfico. La rígida igualdad de lotes de tierra se erosionó por herencias y concentración, y el número de espartiatas de pleno derecho se desplomó: de unos 8.000 en las guerras médicas a poco más de mil en el siglo IV. La derrota ante Tebas en Leuctra (371 a. C.) y la subsiguiente liberación de Mesenia liquidaron la base económica del sistema. Esparta no cayó por decadencia moral, sino por agotamiento de su cuerpo de ciudadanos.","callout":null},{"type":"section","title":"Guerras médicas, imperio y guerra del Peloponeso","text":"Las guerras médicas enfrentaron a un conjunto de poleis con el Imperio persa aqueménida entre 490 y 479 a. C. La victoria griega —Maratón, Salamina, Platea— tuvo un efecto identitario enorme: consolidó la oposición conceptual entre «griegos» y «bárbaros» que antes era mucho menos nítida, y proporcionó a Atenas un prestigio y una flota decisivos.\n\nDe esa flota nació la Liga de Delos (478 a. C.), alianza defensiva con tesoro común en la isla de Delos. Su deriva es uno de los procesos mejor documentados de conversión de una alianza en imperio: Atenas trasladó el tesoro a la Acrópolis en 454 a. C., impuso el phoros como tributo, reprimió militarmente las secesiones (Naxos, Tasos, Samos), instaló guarniciones y colonos, y obligó a los aliados a litigar en tribunales atenienses. Tucídides lo dice sin eufemismos: era una tiranía.\n\nLa financiación del Partenón con fondos de la Liga ilustra la tensión. Los grandes programas constructivos de Pericles, que hoy leemos como cumbre del arte clásico, fueron pagados en parte con el tributo de ciudades aliadas y criticados en su momento por eso mismo.\n\nLa guerra del Peloponeso (431-404 a. C.) enfrentó a la Atenas marítima y democrática con la Esparta terrestre y oligárquica. Tucídides propone una explicación causal que sigue siendo un modelo de análisis: la causa verdadera fue el crecimiento del poder ateniense y el miedo que suscitó en Esparta, mientras que los incidentes de Corcira y Potidea fueron pretextos. La distinción entre causa profunda y ocasión inmediata es una de las aportaciones metodológicas fundacionales de la historiografía.\n\nLa guerra fue devastadora. La peste de 430-426 a. C. mató quizá a un tercio de la población ateniense, incluido Pericles. El diálogo de Melos, donde los atenienses justifican el exterminio de una ciudad neutral con el argumento de que «los fuertes hacen lo que pueden y los débiles sufren lo que deben», es el texto más citado sobre la lógica del poder desnudo. La expedición a Sicilia (415-413 a. C.) destruyó la flota y el ejército atenienses. La derrota final en 404 a. C. trajo la breve tiranía de los Treinta y, tras la restauración democrática, el proceso contra Sócrates en 399 a. C.","callout":"Tucídides afirma escribir «una posesión para siempre» y no una pieza de concurso. Su renuncia a la explicación sobrenatural y su atención a los intereses y al miedo lo convierten en fundador del análisis político."},{"type":"section","title":"Pensamiento, teatro y el legado discutible","text":"La filosofía griega nació en las colonias jonias con una pregunta cosmológica: de qué está hecho el mundo y por qué cambia. Tales, Anaximandro y Heráclito buscaron principios naturales sin recurrir a los dioses. El giro decisivo llegó con los sofistas y con Sócrates, que desplazaron la pregunta hacia lo humano: la justicia, la virtud, la ley, el mejor régimen.\n\nLos sofistas fueron maestros itinerantes que enseñaban retórica por dinero, algo indispensable en sociedades donde el poder se ejercía hablando en la asamblea y en los tribunales. Protágoras formuló el relativismo más citado de la Antigüedad —«el hombre es la medida de todas las cosas»— y la distinción entre physis (naturaleza) y nomos (convención) permitió por primera vez preguntarse si las leyes vigentes eran naturales o simplemente acordadas. La mala fama de los sofistas procede en buena medida de Platón, parte interesada en el debate.\n\nEl teatro ateniense era una institución cívica financiada por ciudadanos ricos mediante la coregía, con asistencia masiva y contenido explícitamente político. La tragedia planteaba en escena conflictos irresolubles entre deberes legítimos —la *Antígona* de Sófocles enfrenta la ley de la ciudad y la obligación religiosa familiar—, y la comedia de Aristófanes atacaba por su nombre a políticos vivos, a generales y al propio Sócrates. Que una democracia financiara la crítica más feroz de sí misma es un dato notable.\n\nEl legado griego debe manejarse con cuidado. Es habitual presentar a Grecia como «cuna de Occidente» en una línea continua hasta la democracia moderna. Esa genealogía es en buena medida una construcción del siglo XIX: la democracia ateniense era directa, no representativa; se basaba en el sorteo, que hoy no usamos; excluía a la mayoría de la población; y coexistía con la esclavitud, con el imperialismo y con la subordinación estricta de las mujeres. Además, la transmisión de los textos griegos a Europa pasó decisivamente por la traducción y el comentario árabes y por Bizancio, un recorrido que el relato de la continuidad directa suele omitir.\n\nReconocer eso no reduce la aportación griega, la precisa. Lo verdaderamente inédito no fue un conjunto de instituciones exportables, sino una práctica: someter las reglas de la vida común a discusión pública argumentada, y considerarlas modificables. Esa idea, y no el Partenón, es lo que sigue en uso.","callout":null},{"type":"concepts","items":[{"term":"Polis","definition":"Comunidad de ciudadanos con territorio, culto e instituciones propias. No equivale a «ciudad»: es un cuerpo político."},{"term":"Hoplita","definition":"Infante pesado que combatía en falange cerrada y se costeaba su equipo."},{"term":"Seisachtheia","definition":"«Sacudida de cargas»: cancelación de deudas de Solón y prohibición de la esclavitud por deudas."},{"term":"Ekklesía","definition":"Asamblea de todos los ciudadanos atenienses; órgano soberano en leyes, guerra y finanzas."},{"term":"Boulé","definition":"Consejo de 500 miembros sorteados que preparaba el orden del día de la asamblea."},{"term":"Misthophoría","definition":"Retribución por ejercer cargos o formar parte de los jurados. Hizo viable la participación de los pobres."},{"term":"Ostracismo","definition":"Destierro preventivo de diez años decidido por votación, sin delito ni pérdida de bienes."},{"term":"Meteco","definition":"Extranjero residente en Atenas: libre, con obligaciones fiscales y militares, pero sin derechos políticos."},{"term":"Hilota","definition":"Población servil mesenia adscrita a la tierra, propiedad colectiva del Estado espartano."},{"term":"Agogé","definition":"Educación estatal espartana, colectiva y militarizada, desde los siete años."},{"term":"Physis / nomos","definition":"Naturaleza frente a convención. Distinción sofística que permitió cuestionar la legitimidad de las leyes."},{"term":"Phoros","definition":"Tributo pagado por los aliados a la Liga de Delos, convertido de hecho en impuesto imperial ateniense."}]},{"type":"debates","items":[{"question":"¿Provocó la falange hoplítica la ampliación de la participación política?","positions":[{"school":"Tesis hoplítica clásica (Aristóteles; Andrewes, Cartledge)","argument":"Quienes sostenían la defensa de la comunidad y se costeaban el armamento reclamaron derechos proporcionales a esa contribución. El paso del combate aristocrático a la falange explicaría la apertura de los regímenes arcaicos."},{"school":"Revisión gradualista (van Wees, Raaflaub)","argument":"La falange se formó de manera lenta y no marca una ruptura militar nítida. Además, numerosas poleis con ejército hoplítico permanecieron oligárquicas: la correlación entre forma de combate y forma de gobierno no se sostiene."}],"state":"La versión fuerte de la tesis está desacreditada. Se acepta que la participación militar fue un argumento político disponible, pero no un mecanismo automático: el resultado dependió de las luchas internas de cada polis."},{"question":"¿Fue la Liga de Delos una alianza o un imperio?","positions":[{"school":"Lectura defensiva","argument":"Nació como alianza voluntaria frente a Persia, con tesoro común y asamblea de aliados. Atenas aportaba la flota y proporcionaba seguridad efectiva en el Egeo, además de reprimir la piratería."},{"school":"Lectura imperial (Tucídides; Meiggs)","argument":"El traslado del tesoro a Atenas en 454, la conversión de la contribución en tributo, la represión armada de las secesiones, las guarniciones, las cleruquías y la obligación de litigar en Atenas configuran una dominación. El propio Tucídides la llama tiranía."}],"state":"Hay consenso en que la alianza derivó en imperio; se discute el ritmo y hasta qué punto los aliados obtenían contrapartidas reales (seguridad marítima, apoyo a facciones democráticas locales) que explicarían la relativa escasez de revueltas."},{"question":"¿Fue la esclavitud la condición material de la democracia ateniense?","positions":[{"school":"Dependencia estructural (Finley; Ste. Croix)","argument":"El ocio necesario para la participación política intensiva descansaba en el trabajo esclavo. Atenas fue una «sociedad esclavista» en sentido pleno: la esclavitud no era marginal, sino la base de la producción y de la renta de las clases propietarias."},{"school":"Matización (Wood)","argument":"El campesinado ateniense libre trabajaba su propia tierra y constituía el grueso del cuerpo cívico. La democracia se apoyaría más en la existencia de pequeños productores libres protegidos frente al endeudamiento que en el excedente esclavo."}],"state":"Nadie discute la centralidad de la esclavitud —las estimaciones oscilan entre 60.000 y 100.000 esclavos en el Ática—, pero sí su papel causal exacto. El debate se cruza con la discusión más amplia sobre la naturaleza de la economía antigua."}]},{"type":"timeline","items":[{"date":"c. 1200–1100 a. C.","event":"Colapso del mundo micénico; comienza la llamada Edad Oscura."},{"date":"c. 800 a. C.","event":"Adopción del alfabeto fenicio y formación de la polis; poemas homéricos."},{"date":"c. 750–550 a. C.","event":"Gran colonización: fundaciones desde el mar Negro hasta Iberia."},{"date":"621 a. C.","event":"Legislación de Dracón en Atenas."},{"date":"594 a. C.","event":"Reformas de Solón: abolición de la esclavitud por deudas."},{"date":"561–510 a. C.","event":"Tiranía de los Pisistrátidas en Atenas."},{"date":"508/507 a. C.","event":"Reformas de Clístenes: nace la democracia ateniense."},{"date":"490 a. C.","event":"Maratón: derrota del primer desembarco persa."},{"date":"480–479 a. C.","event":"Termópilas, Salamina y Platea; fin de la invasión de Jerjes."},{"date":"478 a. C.","event":"Fundación de la Liga de Delos, después imperio ateniense."},{"date":"461–429 a. C.","event":"Hegemonía política de Pericles; construcción del Partenón desde 447."},{"date":"431–404 a. C.","event":"Guerra del Peloponeso; derrota final de Atenas."},{"date":"399 a. C.","event":"Proceso y ejecución de Sócrates."},{"date":"338 a. C.","event":"Queronea: Filipo II de Macedonia impone su hegemonía."},{"date":"323 a. C.","event":"Muerte de Alejandro Magno; fin convencional del periodo clásico."}]},{"type":"sources","items":[{"author":"Homero","title":"Ilíada y Odisea","year":"c. s. VIII a. C.","kind":"primaria","note":"Fuente sobre valores aristocráticos; refleja una sociedad posterior a la micénica que describe."},{"author":"Hesíodo","title":"Trabajos y días","year":"c. 700 a. C.","kind":"primaria","note":"Visión campesina de la crisis agraria arcaica y de la justicia parcial de los poderosos."},{"author":"Heródoto","title":"Historias","year":"c. 430 a. C.","kind":"primaria","note":"Relato de las guerras médicas y etnografía del mundo conocido. Interés por las causas y por el otro."},{"author":"Tucídides","title":"Historia de la guerra del Peloponeso","year":"c. 400 a. C.","kind":"primaria","note":"Distingue causa profunda de pretexto. Diálogo de Melos y discurso fúnebre de Pericles."},{"author":"Aristóteles (o su escuela)","title":"Constitución de los atenienses","year":"c. 330 a. C.","kind":"primaria","note":"Descripción del funcionamiento institucional ateniense. Redescubierta en papiro en 1879."},{"author":"Aristófanes","title":"Las nubes, Los caballeros, Lisístrata","year":"423–411 a. C.","kind":"primaria","note":"Comedia política que ataca por su nombre a dirigentes vivos y al propio Sócrates."},{"author":"Moses I. Finley","title":"The Ancient Economy","year":"1973","kind":"estudio","note":"Modelo sustantivista de la economía antigua; central en el debate sobre esclavitud y mercado."},{"author":"Russell Meiggs","title":"The Athenian Empire","year":"1972","kind":"estudio","note":"Estudio de referencia sobre la conversión de la Liga de Delos en imperio."},{"author":"Paul Cartledge","title":"The Spartans","year":"2002","kind":"estudio","note":"Revisión crítica del «espejismo espartano»."},{"author":"Josiah Ober","title":"Mass and Elite in Democratic Athens","year":"1989","kind":"estudio","note":"Analiza cómo la retórica mediaba la relación entre élite y demos."},{"author":"Hans van Wees","title":"Greek Warfare: Myths and Realities","year":"2004","kind":"estudio","note":"Principal revisión de la tesis hoplítica."}]}]'::jsonb, 0, true
from public.topics where slug = 'grecia'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Nacimiento y expansión del islam', '[{"type":"section","title":"Arabia antes del islam: no un vacío","text":"La tradición islámica llama yahiliyya —«ignorancia»— al periodo preislámico, y esa etiqueta ha alimentado la idea de una Arabia aislada y primitiva. La investigación reciente ofrece otra imagen: una península integrada en los circuitos comerciales y políticos de su época, con reinos organizados en el sur (Yemen), federaciones tribales clientes de Bizancio y Persia en el norte, y una presencia significativa de comunidades judías y cristianas.\n\nLa Meca era un centro de peregrinación en torno a la Kaaba y un nudo comercial de importancia discutida. Patricia Crone cuestionó en *Meccan Trade and the Rise of Islam* (1987) la imagen de una gran ciudad mercantil intermediaria del comercio de especias, señalando que las fuentes contemporáneas apenas la mencionan.\n\nEl contexto geopolítico es decisivo. La guerra entre Bizancio y la Persia sasánida de 602-628 dejó a ambos imperios exhaustos, endeudados y con sus sistemas defensivos y clientelares en el norte de Arabia desarticulados. Cuando llegaron los ejércitos árabes, se enfrentaron a dos potencias en su peor momento del siglo.\n\nLa sociedad árabe era tribal y sin Estado. La lealtad se organizaba por linajes, la justicia se aplicaba por venganza de sangre y la protección dependía del grupo. La aportación política del islam fue precisamente sustituir ese vínculo por otro: la umma, comunidad de creyentes que trasciende el parentesco.","callout":"La hégira de 622 no conmemora la revelación, sino la fundación de una comunidad política en Medina. Que el calendario islámico empiece ahí, y no en 610, dice mucho sobre lo que se consideró el acontecimiento fundacional."},{"type":"section","title":"Mahoma, el Corán y el problema de las fuentes","text":"Según la tradición, Mahoma comenzó a recibir revelaciones hacia 610 y predicó en La Meca un mensaje de monoteísmo estricto, juicio final y justicia social que le enfrentó a la élite de la ciudad. En 622 emigró a Yathrib, que pasó a llamarse Medina, donde actuó como árbitro entre clanes enfrentados y organizó una comunidad con dimensión política, militar y jurídica.\n\nEl Corán se considera en el islam palabra divina literal e increada, transmitida en árabe. Se organiza en 114 azoras ordenadas aproximadamente por longitud, no cronológicamente, lo que dificulta su lectura histórica. La tradición sitúa su fijación escrita bajo el califa Utmán, hacia 650.\n\nEl problema metodológico central es que las fuentes narrativas sobre la vida de Mahoma —la sira de Ibn Ishaq, transmitida por Ibn Hisham, y las grandes colecciones de hadices— se compilaron entre siglo y medio y dos siglos después de los hechos. La propia tradición islámica desarrolló una ciencia crítica para evaluarlas, el estudio del isnad o cadena de transmisores, con criterios estrictos de fiabilidad.\n\nLa crítica occidental ha ido más lejos. La escuela revisionista de los años setenta —John Wansbrough, Patricia Crone y Michael Cook en *Hagarism* (1977)— propuso que el corpus islámico se habría formado más tarde y fuera de Arabia. Sus tesis más radicales no se han sostenido: los manuscritos de Saná, hallados en 1972, y las dataciones por radiocarbono de folios coránicos muy tempranos, como el de Birmingham, apuntan a una fijación textual temprana y estable.\n\nLa posición mayoritaria hoy es intermedia: el Corán como texto es muy antiguo y coherente, mientras que los relatos biográficos posteriores deben tratarse con la misma cautela crítica que se aplica a cualquier hagiografía tardía.","callout":null},{"type":"section","title":"La expansión: cómo explicarla","text":"Entre 634 y 711, los ejércitos árabes tomaron Siria, Mesopotamia, Egipto, Persia entera, el norte de África y la península ibérica. Es una de las expansiones más rápidas de la historia y ha recibido explicaciones muy distintas.\n\nLa explicación religiosa por sí sola es insuficiente: no explica por qué antes no ocurrió, ni por qué las conquistas se detuvieron donde lo hicieron. La explicación del fanatismo, habitual en la historiografía europea del siglo XIX, es sobre todo un prejuicio: las conquistas siguieron patrones militares y políticos convencionales, con tratados, pactos de capitulación y negociación con élites locales.\n\nLos factores que la investigación actual pondera son varios. El agotamiento mutuo de Bizancio y Persia tras veintiséis años de guerra dejó a ambos sin reservas ni fronteras defendidas. Las poblaciones de Siria y Egipto, mayoritariamente cristianas monofisitas perseguidas por la ortodoxia imperial, no tenían motivos fuertes para defender a Constantinopla. Y la nueva estructura tributaria fue, al menos inicialmente, más ligera que la bizantina o la sasánida.\n\nA ello se suma un factor interno: la unificación de las tribus árabes bajo la umma canalizó hacia el exterior una energía militar que antes se consumía en conflictos internos, y el reparto del botín proporcionó un incentivo material continuado.\n\nLas conversiones fueron lentas. Richard Bulliet estimó, a partir de la evolución de la onomástica, que las poblaciones conquistadas no alcanzaron mayoría musulmana hasta los siglos IX o X, doscientos o trescientos años después de la conquista. El estatuto de dhimmi —protegido— reconocía a judíos y cristianos libertad de culto y autonomía jurídica a cambio del impuesto de capitación (yizia), en un régimen de subordinación legal pero de tolerancia práctica muy superior a la contemporánea en Europa. De hecho, la conversión masiva reducía los ingresos fiscales, lo que durante décadas hizo que los gobernantes omeyas no la fomentaran.","callout":"La batalla de Poitiers (732) fue magnificada por la historiografía francesa del siglo XIX como salvación de Europa. Se trató probablemente de la derrota de una expedición de saqueo; el repliegue musulmán del sur de Francia respondió más a problemas internos que a esa derrota."},{"type":"section","title":"La primera fitna y la división suní-chií","text":"Mahoma murió en 632 sin designar sucesor de forma inequívoca ni dejar un procedimiento establecido. La cuestión de quién debía dirigir la comunidad produjo la escisión más duradera del islam.\n\nLos cuatro primeros califas —Abu Bakr, Umar, Utmán y Alí— reciben en la tradición suní el nombre de Rashidun, «bien guiados». Pero tres de los cuatro murieron asesinados, y el conflicto entre Alí, primo y yerno del Profeta, y Muawiya, gobernador de Siria, desembocó en la primera guerra civil (656-661).\n\nDe ese conflicto surgieron tres posiciones. Los partidarios de Alí (shiat Alí, de donde «chiíes») sostenían que el liderazgo correspondía a los descendientes del Profeta por línea de Alí y Fátima, y atribuían al imán una autoridad espiritual. Los que después se llamarían suníes aceptaron la legitimidad de los califas efectivos y la primacía de la sunna, la práctica del Profeta. Los jariyíes, tercera posición, sostenían que el liderazgo correspondía al más piadoso con independencia de su linaje, y llegaron a considerar apóstata a quien no compartiera su rigorismo.\n\nLa muerte de Husayn, hijo de Alí, en Kerbala en 680 a manos de tropas omeyas convirtió la disputa política en identidad religiosa. Su conmemoración anual, la Ashura, sigue siendo el centro emocional del chiismo.\n\nEs importante evitar dos errores frecuentes. El primero, presentar la división como una guerra teológica permanente: durante largos periodos suníes y chiíes convivieron sin conflicto abierto, y las diferencias doctrinales son menores que las que separan a las confesiones cristianas. El segundo, proyectar sobre el pasado los alineamientos sectarios contemporáneos, que responden en buena medida a la política del siglo XX.","callout":null},{"type":"section","title":"El califato abasí y la edad de oro científica","text":"La revolución abasí de 750 desplazó a los omeyas y trasladó el centro de gravedad de Damasco a Irak, con la fundación de Bagdad en 762. El cambio fue también social: el nuevo régimen integró a los mawali —musulmanes no árabes, sobre todo persas—, cuya marginación había sido una de las causas de la revuelta. La administración adoptó modelos persas y el Estado se burocratizó.\n\nEntre los siglos IX y XI se produjo el llamado movimiento de traducción, sin equivalente en la historia hasta entonces. Bajo patrocinio califal y de élites privadas, se vertieron al árabe las obras científicas y filosóficas griegas, persas e indias: Aristóteles, Galeno, Ptolomeo, Euclides, Dioscórides. Dimitri Gutas ha subrayado que no fue un fenómeno espontáneo ni una simple curiosidad erudita, sino una política de Estado sostenida durante dos siglos y respaldada por una demanda social real.\n\nLa aportación no fue de mera conservación. Al-Juarismi sistematizó el álgebra —la palabra procede de su tratado— e introdujo la numeración posicional india, incluido el cero, que llegaría a Europa como «números arábigos». Ibn al-Haytham (Alhacén) refutó la teoría de la visión por emisión y estableció un método experimental riguroso en óptica. Ibn Sina (Avicena) escribió el *Canon de medicina*, manual universitario europeo hasta el siglo XVII. Al-Razi describió clínicamente la viruela y el sarampión. Ibn Jaldún, ya en el siglo XIV, propuso en su *Muqaddima* una explicación de la formación y decadencia de los Estados basada en la asabiyya o cohesión de grupo, que muchos consideran el primer tratado de sociología histórica.\n\nLa expresión «edad de oro» requiere matices. La producción científica no fue homogénea en el tiempo ni en el espacio, y no toda ella fue obra de musulmanes: cristianos nestorianos, judíos y zoroastrianos participaron de forma central, empezando por los traductores. Tampoco existió una «ciencia islámica» unitaria: hubo tensiones recurrentes entre la filosofía de inspiración griega (falsafa) y la teología, expresadas por ejemplo en la crítica de al-Ghazali a los filósofos y en la respuesta de Averroes.\n\nLa tesis de un declive causado por al-Ghazali y por el cierre de la interpretación religiosa se repite mucho y está desacreditada: la producción científica continuó siglos después, con la escuela astronómica de Maragha en el siglo XIII, cuyos modelos matemáticos aparecen después en Copérnico, y con la observación otomana y mogola en la Edad Moderna.","callout":"La transmisión no fue solo de textos griegos. El papel llegó de China tras la batalla de Talas (751), y su difusión abarató drásticamente la producción de libros en el mundo islámico siglos antes que en Europa."},{"type":"section","title":"Fragmentación política y transmisión a Europa","text":"La unidad política del califato duró poco. Ya en 756 un omeya superviviente fundó un emirato independiente en Córdoba, que sería califato en 929. Los fatimíes chiíes establecieron un califato rival en Egipto en 909 y fundaron El Cairo. Desde el siglo X, el poder efectivo en Bagdad pasó a manos de dinastías militares —buyíes, después selyúcidas turcos—, mientras el califa conservaba una autoridad simbólica.\n\nEl golpe final llegó con los mongoles: en 1258 Hulagu tomó Bagdad, ejecutó al último califa abasí y destruyó la ciudad, incluidas sus bibliotecas y buena parte de su sistema de irrigación. La cifra de víctimas que dan las fuentes es probablemente exagerada, pero el fin del califato como institución universal es un hecho.\n\nLa transmisión del saber árabe a Europa fue masiva y está bien documentada. Los centros fueron sobre todo Toledo, tras 1085, y Sicilia. En Toledo, traductores como Gerardo de Cremona vertieron al latín, con frecuencia a través de intermediarios judíos y mozárabes, cientos de obras: el *Almagesto* de Ptolomeo, el corpus aristotélico con los comentarios de Averroes, la medicina de Avicena, el álgebra y la óptica.\n\nEl impacto fue estructural. La recuperación de Aristóteles reorganizó la filosofía escolástica y obligó a Tomás de Aquino a una síntesis entre razón y fe; la medicina árabe fundó los currículos de Montpellier, Bolonia y Salerno; la numeración posicional transformó la contabilidad y el comercio. El vocabulario castellano conserva el rastro: álgebra, algoritmo, cifra, azúcar, alcohol, alquimia, almanaque, cenit, azimut.\n\nEl relato habitual de una Europa que «redescubre» la Antigüedad clásica en el Renacimiento omite este eslabón. Los textos griegos no reaparecieron por generación espontánea: llegaron traducidos, comentados y ampliados por una tradición intelectual que había trabajado sobre ellos durante cinco siglos.","callout":null},{"type":"concepts","items":[{"term":"Umma","definition":"Comunidad de creyentes que sustituye al parentesco tribal como vínculo político primario."},{"term":"Hégira","definition":"Emigración a Medina en 622. Marca el año 1 del calendario islámico, lunar y de 354 días."},{"term":"Califa","definition":"«Sucesor»: jefe político de la comunidad. No es profeta ni tiene autoridad para revelar."},{"term":"Sunna","definition":"Práctica y dichos del Profeta, transmitidos en los hadices. Segunda fuente del derecho tras el Corán."},{"term":"Isnad","definition":"Cadena de transmisores de un hadiz. Su análisis es la ciencia crítica desarrollada por la tradición islámica."},{"term":"Fitna","definition":"Guerra civil o discordia dentro de la comunidad musulmana."},{"term":"Dhimmi","definition":"Protegido: judío o cristiano con libertad de culto y autonomía jurídica a cambio del impuesto de capitación."},{"term":"Yizia","definition":"Impuesto personal pagado por los no musulmanes. Su cuantía desincentivó durante décadas las conversiones."},{"term":"Mawali","definition":"Musulmanes no árabes, sobre todo persas. Su marginación bajo los omeyas alimentó la revolución abasí."},{"term":"Falsafa","definition":"Filosofía de inspiración griega en el mundo islámico, en tensión recurrente con la teología."},{"term":"Asabiyya","definition":"Cohesión de grupo. Concepto central de Ibn Jaldún para explicar el auge y la caída de los Estados."}]},{"type":"debates","items":[{"question":"¿Qué explica la rapidez de la expansión islámica?","positions":[{"school":"Explicación religiosa o del «fanatismo» (historiografía europea del siglo XIX)","argument":"El impulso de una fe nueva y militante habría lanzado a los árabes a una guerra santa continua contra el mundo circundante, sin más cálculo que la conversión o el sometimiento."},{"school":"Explicación coyuntural y estructural (Donner, Kennedy)","argument":"Bizancio y Persia estaban exhaustos tras veintiséis años de guerra; las poblaciones monofisitas de Siria y Egipto no tenían motivos para defender a Constantinopla; la fiscalidad inicial fue más ligera; y la unificación tribal canalizó hacia fuera una energía militar antes consumida internamente."}],"state":"Se rechaza la explicación por el fanatismo: las conquistas siguieron patrones militares convencionales, con tratados y pactos de capitulación. Se discute cuánto pesó la motivación religiosa frente al botín y a la lógica de Estado, y se subraya que las conversiones fueron lentas: no hubo mayoría musulmana hasta los siglos IX-X."},{"question":"¿Cuándo se fijó el texto coránico?","positions":[{"school":"Revisionismo radical (Wansbrough; Crone y Cook, 1977)","argument":"El corpus islámico se habría formado entre uno y dos siglos después, fuera de Arabia, como construcción retrospectiva. La escasez de fuentes contemporáneas externas justificaría la sospecha."},{"school":"Fijación temprana (paleografía y radiocarbono)","argument":"Los manuscritos de Saná (1972) y las dataciones de folios como el de Birmingham apuntan a un texto estable muy temprano, coherente con la tradición que lo sitúa bajo Utmán hacia 650."}],"state":"Las tesis revisionistas radicales no se han sostenido frente a la evidencia manuscrita. La posición mayoritaria distingue entre el Corán, texto antiguo y estable, y los relatos biográficos posteriores, que exigen la misma cautela crítica que cualquier hagiografía tardía."},{"question":"¿Hubo un «declive» de la ciencia islámica y a qué se debió?","positions":[{"school":"Tesis del cierre religioso","argument":"La crítica de al-Ghazali a los filósofos y el llamado «cierre de las puertas del iytihad» habrían sofocado la investigación racional, provocando un estancamiento a partir del siglo XII."},{"school":"Crítica a la tesis (Saliba, Gutas)","argument":"La producción científica continuó siglos: la escuela astronómica de Maragha en el siglo XIII desarrolló modelos matemáticos que reaparecen en Copérnico, y hubo actividad relevante en el mundo otomano y mogol. El «declive» sería más bien un desplazamiento relativo tras la revolución científica europea."}],"state":"La tesis del cierre religioso está desacreditada entre especialistas, aunque sigue muy difundida. Se investiga hoy por qué la ciencia islámica no dio el paso institucional que sí dio Europa en el siglo XVII, con explicaciones centradas en la financiación, las universidades y la imprenta más que en la teología."}]},{"type":"timeline","items":[{"date":"c. 570","event":"Nacimiento de Mahoma en La Meca."},{"date":"610","event":"Inicio de la revelación coránica según la tradición islámica."},{"date":"622","event":"Hégira: emigración a Yathrib (Medina). Año 1 del calendario islámico."},{"date":"630","event":"Toma de La Meca."},{"date":"632","event":"Muerte de Mahoma; comienza el califato de los Rashidun."},{"date":"636–642","event":"Conquista de Siria, Mesopotamia, Egipto y del Imperio sasánida."},{"date":"656–661","event":"Primera fitna: guerra civil y origen de la división entre suníes y chiíes."},{"date":"661–750","event":"Califato omeya, con capital en Damasco."},{"date":"711","event":"Desembarco en la península ibérica; inicio de al-Ándalus."},{"date":"732","event":"Batalla de Poitiers frente a Carlos Martel."},{"date":"750","event":"Revolución abasí; traslado del poder hacia Irak."},{"date":"762","event":"Fundación de Bagdad."},{"date":"c. 820–1000","event":"Movimiento de traducción y esplendor científico abasí."},{"date":"929","event":"Abd al-Rahman III proclama el califato de Córdoba."},{"date":"1258","event":"Los mongoles destruyen Bagdad; fin del califato abasí."}]},{"type":"sources","items":[{"author":"Anónimo (tradición)","title":"Corán","year":"fijado c. 650","kind":"primaria","note":"114 azoras ordenadas por longitud, no cronológicamente. Fuente primera del derecho y la doctrina."},{"author":"Ibn Ishaq / Ibn Hisham","title":"Sirat Rasul Allah","year":"c. 760 / c. 830","kind":"primaria","note":"Biografía canónica del Profeta, conservada en la recensión posterior de Ibn Hisham."},{"author":"Al-Tabari","title":"Historia de los profetas y los reyes","year":"c. 915","kind":"primaria","note":"Gran compilación histórica que conserva versiones divergentes con sus cadenas de transmisión."},{"author":"Ibn Jaldún","title":"Muqaddima","year":"1377","kind":"primaria","note":"Teoría de la asabiyya y del ciclo de los Estados. Considerado precursor de la sociología histórica."},{"author":"Averroes (Ibn Rushd)","title":"Tahafut al-Tahafut","year":"c. 1180","kind":"primaria","note":"Respuesta a al-Ghazali en defensa de la filosofía. Sus comentarios a Aristóteles marcaron la escolástica latina."},{"author":"Patricia Crone y Michael Cook","title":"Hagarism: The Making of the Islamic World","year":"1977","kind":"estudio","note":"Manifiesto revisionista. Sus tesis fuertes no se sostienen, pero renovó el debate metodológico."},{"author":"Richard W. Bulliet","title":"Conversion to Islam in the Medieval Period","year":"1979","kind":"estudio","note":"Reconstruye el ritmo lento de las conversiones a partir de la onomástica."},{"author":"Fred M. Donner","title":"The Early Islamic Conquests","year":"1981","kind":"estudio","note":"Análisis de los factores militares, tribales y estatales de la expansión."},{"author":"Dimitri Gutas","title":"Greek Thought, Arabic Culture","year":"1998","kind":"estudio","note":"Demuestra que el movimiento de traducción fue una política de Estado sostenida y no un accidente erudito."},{"author":"George Saliba","title":"Islamic Science and the Making of the European Renaissance","year":"2007","kind":"estudio","note":"Refuta la tesis del declive por causas religiosas y documenta la continuidad científica."},{"author":"Hugh Kennedy","title":"The Great Arab Conquests","year":"2007","kind":"estudio","note":"Síntesis narrativa y crítica de la expansión, atenta a los problemas de fuentes."}]}]'::jsonb, 0, true
from public.topics where slug = 'islam'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Mesopotamia y el nacimiento del Estado', '[{"type":"section","title":"Un medio difícil: agua, sal y trabajo","text":"La llanura aluvial del sur de Irak carece de piedra, de madera de construcción y de metales. Tiene, en cambio, suelos fértiles y dos ríos. Pero su régimen es problemático: el Tigris y el Éufrates crecen en primavera, cuando el cereal ya está en el campo, no antes de la siembra como el Nilo, y lo hacen de manera brusca e impredecible. Cultivar allí exige control activo del agua: canales de derivación, diques, compuertas y drenaje.\n\nEse esfuerzo tuvo un coste ecológico documentado. La irrigación con evaporación intensa deposita sales en el suelo. Los archivos administrativos permiten seguir el proceso: entre 2400 y 1700 a. C., la proporción de cebada —más tolerante a la sal— frente al trigo pasó de un reparto equilibrado a un predominio casi absoluto, mientras los rendimientos registrados descendían. Thorkild Jacobsen y Robert Adams describieron esta salinización progresiva en un influyente artículo de 1958 y la vincularon al desplazamiento del centro político hacia el norte.\n\nLa escasez de materias primas explica otra característica estructural: Mesopotamia dependió siempre del intercambio de larga distancia. La madera venía del Líbano y de los Zagros, el cobre de Omán y Anatolia, el lapislázuli de Afganistán, la cornalina del valle del Indo. Esa dependencia hizo del comercio y del control de rutas un asunto de Estado, y explica buena parte de su política exterior y militar.","callout":"La cebada no solo era alimento: funcionaba como unidad de cuenta y medio de pago de salarios. Los archivos expresan sueldos en litros de cebada y en pesos de plata mucho antes de que existiera la moneda acuñada."},{"type":"section","title":"La revolución urbana de Uruk","text":"Hacia 3500 a. C., Uruk alcanzó una extensión y una población sin precedentes —las estimaciones oscilan entre 20.000 y 50.000 habitantes— y desarrolló una arquitectura monumental de templos sobre terrazas. Gordon Childe llamó a este proceso «revolución urbana» y lo caracterizó por diez rasgos: concentración demográfica, especialización artesanal, tributo, monumentalidad, clases sociales, escritura, ciencia predictiva, arte representativo, comercio exterior y un Estado con territorio.\n\nLa contabilidad precedió a la escritura. Denise Schmandt-Besserat mostró que fichas de arcilla con formas convencionales (tokens) se usaban desde el VIII milenio para registrar cantidades de bienes. Esas fichas se guardaban en bullae —esferas de arcilla selladas— y, para saber qué contenían sin romperlas, se imprimían las formas en la superficie. El paso siguiente fue prescindir del contenido y conservar solo las marcas: la tablilla.\n\nLas primeras tablillas de Uruk IV, hacia 3300 a. C., son documentos económicos: cantidades de grano, cabezas de ganado, raciones, listas de profesiones. No hay poesía ni narración. La escritura nace como tecnología de gestión, no de literatura; los textos literarios llegan siglos después.\n\nEl modelo político dominante durante el Dinástico Arcaico fue la ciudad-Estado: un núcleo urbano con su territorio agrícola, su dios tutelar, su templo y su gobernante —ensi o lugal—. Estas ciudades competían por agua y tierra de forma endémica. La disputa entre Lagash y Umma por la frontera de Guedena está documentada durante más de un siglo y produjo, en la Estela de los Buitres, uno de los primeros relatos de guerra conservados.","callout":null},{"type":"section","title":"Escritura cuneiforme y cultura del archivo","text":"El cuneiforme se escribía imprimiendo un cálamo de caña de sección triangular sobre arcilla fresca. Es un sistema mixto: signos logográficos que valen por una palabra, signos silábicos que valen por un sonido y determinativos que clasifican semánticamente. Se usó durante más de tres milenios y sirvió para lenguas muy distintas —sumerio, acadio, elamita, hitita, urartio—, del mismo modo que el alfabeto latino sirve hoy a lenguas sin parentesco.\n\nLa arcilla es un soporte afortunado para el historiador: cuando un edificio ardía, las tablillas se cocían y se conservaban mejor. Por eso disponemos de archivos enteros. Los de la Tercera Dinastía de Ur suman más de cien mil documentos administrativos y permiten reconstruir la economía de un Estado antiguo con un detalle inalcanzable en otras civilizaciones: rendimientos por parcela, raciones por trabajador, censos de ganado, cuentas de talleres textiles con centenares de operarias.\n\nLa formación de escribas se hacía en la edubba, la «casa de las tablillas». Sus ejercicios —listas léxicas, copias de proverbios, problemas matemáticos, textos de disputa entre estudiantes— revelan un currículo estable. Las matemáticas mesopotámicas usaban un sistema sexagesimal cuyo legado seguimos empleando: sesenta minutos, sesenta segundos, trescientos sesenta grados. La tablilla Plimpton 322 recoge ternas pitagóricas más de mil años antes de Pitágoras.\n\nEl desciframiento moderno se debe sobre todo a Henry Rawlinson, que copió con riesgo considerable la inscripción trilingüe de Behistún, mandada grabar por Darío I en un acantilado. La versión en persa antiguo, más simple, sirvió de puerta de entrada al elamita y al acadio, del mismo modo que el griego lo fue para los jeroglíficos.","callout":"La *Epopeya de Gilgamesh* se conoce sobre todo por la versión estándar de la biblioteca de Asurbanipal. Su relato del diluvio, con un superviviente advertido por un dios, presenta paralelos evidentes con el bíblico y desató una polémica considerable cuando George Smith lo publicó en 1872."},{"type":"section","title":"Templo, palacio y economía: el debate sobre quién manda","text":"La organización económica mesopotámica se ha interpretado de formas muy distintas. A comienzos del siglo XX, Anton Deimel propuso a partir de los archivos de Lagash el modelo de la «ciudad-templo»: el santuario poseería prácticamente toda la tierra y organizaría toda la producción, en una economía redistributiva sin propiedad privada relevante.\n\nLa revisión posterior desmontó esa imagen. Igor Diakonoff mostró que los archivos de Lagash pertenecían a un solo templo y no representaban la totalidad de la ciudad, y documentó la existencia de tierra comunal de familias extensas y de propiedad privada transferible. Hoy se acepta un modelo pluralista: coexistían el sector del templo, el del palacio y un sector privado, con proporciones variables según épocas y ciudades.\n\nEse debate se cruza con otro más amplio, el de la naturaleza de la economía antigua. Karl Polanyi sostuvo que las economías precapitalistas funcionaban por reciprocidad y redistribución, con «puertos de comercio» administrados, y no por mercados formadores de precios. Los asiriólogos que estudiaron el archivo de los mercaderes asirios de Kanesh —cartas privadas de negocios del siglo XIX a. C., con sociedades, créditos, intereses y arbitraje de precios entre Assur y Anatolia— han argumentado en sentido contrario.\n\nLa cuestión no es meramente técnica: determina si cabe hablar de «capital», «mercado» o «beneficio» en el mundo antiguo, o si esos conceptos importan categorías modernas a sociedades que funcionaban con otra lógica. La postura mayoritaria actual es intermedia y empírica: hubo mercados y precios fluctuantes, pero insertos en instituciones —templo, palacio, familia— que los modelaban de forma decisiva.","callout":null},{"type":"section","title":"Derecho, justicia y el problema del Código de Hammurabi","text":"La estela de diorita de Hammurabi, hallada en Susa en 1901, contiene un prólogo, unas 282 disposiciones y un epílogo. Es el texto jurídico antiguo más conocido, aunque no el más antiguo: le preceden las reformas de Urukagina, el código de Ur-Nammu y el de Lipit-Ishtar.\n\nSus disposiciones tienen forma casuística —«si un hombre hace X, entonces Y»— y aplican penas diferenciadas según el estatus del implicado. La sociedad distingue tres categorías: awilum (hombre libre de pleno derecho), mushkenum (dependiente) y wardum (esclavo). Golpear a un awilum y golpear a un esclavo tienen consecuencias distintas; matar a la hija de un hombre puede castigarse ejecutando a la hija del culpable. La ley del talión convive con la compensación económica según quién sea la víctima.\n\nEl debate historiográfico central es qué era realmente este texto. La lectura tradicional lo entendía como un código vigente, aplicable por los tribunales. La objeción decisiva es que los miles de documentos judiciales conservados de la época prácticamente nunca lo citan, y que en ocasiones resuelven en sentido distinto al que la estela prescribe. Jean Bottéro y F. R. Kraus propusieron por ello leerlo como un monumento ideológico: la exhibición de un rey justo ante los dioses y la posteridad, quizá también como colección de precedentes ejemplares para la formación de jueces.\n\nCon todo, el texto documenta bien la estructura social: precios máximos, salarios, responsabilidad profesional del constructor y del médico, régimen del matrimonio y del divorcio, deudas y esclavitud por deudas. Y muestra una preocupación recurrente en la ideología real mesopotámica: la proclamación periódica de misharum, cancelaciones generales de deudas destinadas a impedir que el endeudamiento privara al Estado de contribuyentes y soldados.","callout":"El prólogo de la estela afirma que la ley existe «para que el fuerte no oprima al débil». Es la formulación más antigua conservada de la justicia como límite del poder, aunque su aplicación real fuese muy desigual."},{"type":"section","title":"De la ciudad-Estado al imperio","text":"Sargón de Acad, hacia 2334 a. C., sometió las ciudades sumerias y construyó la primera estructura política que puede llamarse imperio territorial: gobernadores designados, guarniciones, una lengua administrativa común y una hija instalada como sacerdotisa en Ur —Enheduanna, autora de himnos y primera figura literaria de la historia cuyo nombre conocemos—.\n\nLa Tercera Dinastía de Ur llevó la centralización al extremo. Su documentación permite ver un Estado que controla talleres, redistribuye raciones, mide el trabajo en jornadas-hombre y penaliza los déficits de producción. Ese aparato resultó frágil: se derrumbó en pocas décadas por la combinación de presión amorrea, crisis agrarias y rigidez fiscal.\n\nEl imperio neoasirio (siglos IX-VII a. C.) fue la construcción más duradera y también la más brutal de las documentadas. Se apoyó en un ejército permanente, en el uso sistemático del terror como instrumento de disuasión —relieves palaciales que exhiben empalamientos y desollamientos— y en la deportación masiva de poblaciones enteras, calculada en varios millones de personas a lo largo de tres siglos. La política tenía una lógica administrativa: desarraigar élites locales, romper solidaridades y reasentar mano de obra donde se necesitaba.\n\nSu caída fue rápida. La coalición de medos y babilonios tomó Assur en 614 y Nínive en 612 a. C. El imperio neobabilónico de Nabopolasar y Nabucodonosor II heredó el espacio, reconstruyó Babilonia con la puerta de Ishtar y la gran ziggurat, y deportó a las élites de Judá, episodio que la Biblia hebrea convirtió en experiencia fundacional. En 539 a. C., Ciro II de Persia entró en Babilonia; el Cilindro de Ciro presenta la conquista como restauración del culto de Marduk frente a un rey impío, en un ejercicio de propaganda dirigido a la élite sacerdotal local.\n\nMesopotamia dejó de ser un centro político independiente, pero su cultura escrita continuó siglos: hay tablillas astronómicas cuneiformes fechadas ya en época romana. La astronomía babilónica, con sus registros sistemáticos de posiciones planetarias, alimentó directamente a la griega y, a través de ella, a la moderna.","callout":null},{"type":"concepts","items":[{"term":"Cuneiforme","definition":"Escritura de signos en forma de cuña impresos sobre arcilla. Sistema mixto usado para varias lenguas durante tres milenios."},{"term":"Ziggurat","definition":"Templo escalonado sobre terrazas superpuestas, centro simbólico y económico de la ciudad mesopotámica."},{"term":"Ensi / lugal","definition":"Títulos del gobernante sumerio: «gobernador» del dios de la ciudad y «hombre grande» o rey."},{"term":"Ciudad-Estado","definition":"Núcleo urbano con territorio agrícola, dios tutelar y gobierno propio. Modelo político del Dinástico Arcaico."},{"term":"Awilum / mushkenum / wardum","definition":"Las tres categorías jurídicas del Código de Hammurabi: libre pleno, dependiente y esclavo."},{"term":"Misharum","definition":"Cancelación general de deudas proclamada por el rey para evitar la ruina de los contribuyentes."},{"term":"Edubba","definition":"«Casa de las tablillas»: escuela de escribas con un currículo estable de listas, copias y matemáticas."},{"term":"Bulla y tokens","definition":"Fichas de arcilla contables y su envoltura sellada. Precedente directo de la tablilla escrita."},{"term":"Sexagesimal","definition":"Sistema numérico de base 60 mesopotámico, origen de nuestros minutos, segundos y grados."},{"term":"Salinización","definition":"Acumulación de sales en suelos irrigados con fuerte evaporación. Documentada en el paso del trigo a la cebada."}]},{"type":"debates","items":[{"question":"¿Era la economía mesopotámica una economía de templo redistributiva o existían mercados?","positions":[{"school":"Ciudad-templo (Deimel, años 1920-30)","argument":"Los archivos de Lagash mostrarían que el templo poseía la tierra y organizaba la producción y el reparto. No habría propiedad privada significativa ni mercado formador de precios."},{"school":"Revisión pluralista (Diakonoff, Gelb)","argument":"Los archivos de Lagash corresponden a un solo templo, no a la ciudad entera. Existían tierra comunal de familias extensas y propiedad privada transferible junto a los sectores del templo y del palacio."},{"school":"Sustantivismo (Polanyi) frente a formalismo","argument":"Polanyi negaba mercados formadores de precios en el mundo antiguo. Los archivos de los mercaderes asirios de Kanesh, con sociedades, créditos, intereses y arbitraje entre plazas, se han esgrimido en contra."}],"state":"Domina hoy una posición intermedia: hubo precios fluctuantes, crédito y comercio privado, pero insertos en instituciones (templo, palacio, familia) que condicionaban de forma decisiva su funcionamiento. La discusión sigue viva sobre cuánto pesaba cada sector y cómo varía por época y región."},{"question":"¿Fue el Código de Hammurabi derecho aplicado o propaganda real?","positions":[{"school":"Lectura legalista tradicional","argument":"Se trataría de una codificación vigente, destinada a unificar el derecho del reino y a ser aplicada por los tribunales, como sugiere su forma articulada y su exposición pública."},{"school":"Lectura ideológica (Kraus, Bottéro)","argument":"Los miles de documentos judiciales conservados casi nunca lo citan y a veces resuelven en sentido contrario. Sería un monumento de autolegitimación —el rey justo ante Shamash— y, quizá, una colección de precedentes ejemplares para la enseñanza."}],"state":"La lectura ideológica es hoy mayoritaria, pero se reconoce que el texto refleja normas y prácticas reales. Se prefiere hablar de «colección de sentencias» antes que de «código» en sentido moderno."},{"question":"¿Por qué se desplazó el centro de poder del sur hacia el norte de Mesopotamia?","positions":[{"school":"Degradación ecológica (Jacobsen y Adams, 1958)","argument":"La salinización progresiva de los suelos irrigados del sur redujo los rendimientos, forzó la sustitución del trigo por la cebada y minó la base agraria del poder sumerio."},{"school":"Factores políticos y militares","argument":"El desplazamiento se explicaría mejor por la presión de poblaciones amorreas y arameas, por la fragilidad fiscal de Estados hipercentralizados como Ur III y por el control de rutas comerciales del norte."}],"state":"Se admite la salinización como proceso real y bien documentado, pero se rechaza como causa única. La explicación dominante es multifactorial y subraya la interacción entre estrés ecológico, rigidez institucional y presión externa."}]},{"type":"timeline","items":[{"date":"c. 5500 a. C.","event":"Cultura de Ubaid: primeros templos y agricultura irrigada en el sur."},{"date":"c. 3500–3100 a. C.","event":"Periodo Uruk: primera gran ciudad, contabilidad y escritura protocuneiforme."},{"date":"c. 2900–2350 a. C.","event":"Dinástico Arcaico: ciudades-Estado sumerias rivales (Ur, Lagash, Umma, Kish)."},{"date":"c. 2334 a. C.","event":"Sargón de Acad funda el primer imperio territorial conocido."},{"date":"c. 2112–2004 a. C.","event":"Tercera dinastía de Ur: burocracia hiperdocumentada y códigos legales."},{"date":"c. 1792–1750 a. C.","event":"Reinado de Hammurabi de Babilonia; estela de leyes."},{"date":"c. 1595 a. C.","event":"Saqueo hitita de Babilonia; después, dominio casita."},{"date":"c. 1350–1050 a. C.","event":"Imperio asirio medio; expansión desde Assur."},{"date":"883–627 a. C.","event":"Imperio neoasirio: deportaciones sistemáticas y ejército permanente."},{"date":"668–627 a. C.","event":"Asurbanipal reúne en Nínive la gran biblioteca."},{"date":"612 a. C.","event":"Caída de Nínive ante medos y babilonios."},{"date":"605–562 a. C.","event":"Nabucodonosor II: imperio neobabilónico y deportación de Judá."},{"date":"539 a. C.","event":"Ciro II de Persia toma Babilonia; fin de la independencia mesopotámica."}]},{"type":"sources","items":[{"author":"Anónimo","title":"Epopeya de Gilgamesh (versión estándar)","year":"c. s. XII a. C.","kind":"primaria","note":"Conservada sobre todo en la biblioteca de Asurbanipal. Contiene el relato del diluvio."},{"author":"Hammurabi","title":"Estela de leyes","year":"c. 1750 a. C.","kind":"primaria","note":"Prólogo, 282 disposiciones casuísticas y epílogo. Hallada en Susa en 1901."},{"author":"Enheduanna","title":"Himnos a Inanna","year":"c. 2280 a. C.","kind":"primaria","note":"Primera autoría literaria conocida por su nombre. Hija de Sargón y sacerdotisa en Ur."},{"author":"Darío I","title":"Inscripción de Behistún","year":"c. 520 a. C.","kind":"primaria","note":"Texto trilingüe cuya copia por Rawlinson permitió descifrar el cuneiforme."},{"author":"Anónimo","title":"Cilindro de Ciro","year":"539 a. C.","kind":"primaria","note":"Presenta la conquista persa como restauración del culto de Marduk. Documento de propaganda."},{"author":"Thorkild Jacobsen y Robert Adams","title":"«Salt and Silt in Ancient Mesopotamian Agriculture», Science","year":"1958","kind":"estudio","note":"Formula la tesis de la salinización como factor de declive del sur."},{"author":"Igor M. Diakonoff","title":"Structure of Society and State in Early Dynastic Sumer","year":"1959","kind":"estudio","note":"Refuta el modelo de la ciudad-templo de Deimel."},{"author":"Denise Schmandt-Besserat","title":"Before Writing","year":"1992","kind":"estudio","note":"Traza el origen contable de la escritura a partir de las fichas de arcilla."},{"author":"Jean Bottéro","title":"Mésopotamie. L''écriture, la raison et les dieux","year":"1987","kind":"estudio","note":"Reinterpreta el Código de Hammurabi y la racionalidad mesopotámica."},{"author":"Marc Van De Mieroop","title":"A History of the Ancient Near East","year":"2004 (3.ª ed. 2015)","kind":"estudio","note":"Manual de referencia actualizado sobre el conjunto del Próximo Oriente antiguo."},{"author":"Amélie Kuhrt","title":"The Ancient Near East, c. 3000–330 BC","year":"1995","kind":"estudio","note":"Síntesis crítica de amplio alcance, atenta a los problemas de fuentes."}]}]'::jsonb, 0, true
from public.topics where slug = 'mesopotamia'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Prehistoria y neolitización', '[{"type":"section","title":"Qué es la prehistoria y con qué se estudia","text":"La prehistoria es el periodo anterior a la escritura, y por tanto una categoría relativa: termina en momentos distintos según la región. Mesopotamia sale de ella hacia 3300 a. C.; buena parte del África subsahariana o de Oceanía, milenios después. Esa relatividad ha sido criticada porque hace del alfabetismo el criterio de entrada en la historia, con una carga eurocéntrica evidente. Muchos autores prefieren hoy hablar de «sociedades sin escritura» o usar directamente las secuencias arqueológicas.\n\nLa disciplina se apoya en fuentes materiales y en técnicas de laboratorio. La datación por radiocarbono, desarrollada por Willard Libby en 1949, permitió por primera vez fechar en términos absolutos hasta unos 50.000 años; la termoluminiscencia, el uranio-torio y el potasio-argón cubren horizontes más antiguos. La paleoecología reconstruye climas mediante polen, isótopos de oxígeno y sondeos de hielo.\n\nLa transformación más importante de las últimas dos décadas ha sido la paleogenética. Desde que Svante Pääbo secuenció el genoma neandertal en 2010, el ADN antiguo ha reescrito la historia de las migraciones humanas: ha demostrado el mestizaje entre sapiens y neandertales, ha identificado a los denisovanos a partir de un fragmento de falange, y ha revelado que la Europa actual resulta de al menos tres oleadas superpuestas —cazadores-recolectores locales, agricultores anatolios y pastores esteparios.\n\nConviene una advertencia metodológica: la conservación diferencial sesga lo que vemos. La piedra y el hueso perduran; la madera, la fibra, la piel y el discurso, no. Cualquier reconstrucción de la vida prehistórica trabaja sobre un registro incompleto y sistemáticamente inclinado hacia lo duradero.","callout":"La calibración del radiocarbono corrige la variación del C-14 atmosférico. Por eso las fechas se expresan «cal BP» o «cal a. C.»: una fecha sin calibrar y otra calibrada no son comparables."},{"type":"section","title":"Evolución humana: un arbusto, no una escalera","text":"La imagen popular de una progresión lineal de simio a humano es incorrecta. La evidencia fósil dibuja un arbusto ramificado en el que varias especies de homínidos coexistieron durante largos periodos: australopitecos, parántropos, Homo habilis, Homo erectus, Homo naledi, Homo floresiensis, neandertales, denisovanos y sapiens.\n\nLos rasgos que asociamos a lo humano no aparecieron a la vez. El bipedismo es muy antiguo —las huellas de Laetoli tienen 3,6 millones de años—, mientras que el gran encefalización llegó mucho después. Las herramientas de Lomekwi, de 3,3 millones de años, son anteriores al género Homo, lo que rompe la ecuación entre fabricar útiles y ser humano.\n\nEl control del fuego fue decisivo. Richard Wrangham ha defendido en *Catching Fire* (2009) que la cocción, al externalizar parte de la digestión, permitió reducir el aparato digestivo y sostener un cerebro metabólicamente caro. La cronología exacta se discute: hay indicios en Wonderwerk hacia 1 millón de años, pero el uso sistemático solo está bien documentado desde hace unos 400.000.\n\nEl yacimiento de Atapuerca ha sido central en este debate. La Sima de los Huesos ha entregado más de 6.500 fósiles de al menos 28 individuos, un conjunto sin equivalente, y su análisis genético los sitúa en el linaje neandertal. La Gran Dolina aportó los restos de *Homo antecessor*, con marcas de corte que documentan canibalismo, probablemente de tipo nutricional.\n\nSobre los neandertales, la revisión ha sido drástica. Enterraban a sus muertos, cuidaban de individuos con lesiones incapacitantes, usaban pigmentos, fabricaban adhesivos de brea —un proceso que exige control térmico en ausencia de oxígeno— y construyeron estructuras de espeleotemas en la cueva de Bruniquel hace 176.000 años. Su desaparición como población diferenciada no fue una extinción total: entre el 1 % y el 2 % del genoma de los humanos no africanos actuales es neandertal.","callout":null},{"type":"section","title":"Sociedades cazadoras-recolectoras del Paleolítico","text":"Durante casi toda la prehistoria, los humanos vivieron en grupos móviles de tamaño reducido que explotaban recursos estacionales. Esa movilidad no implica precariedad permanente. Los estudios etnográficos de sociedades cazadoras-recolectoras recientes, sintetizados en el influyente simposio *Man the Hunter* (1968), estimaron dedicaciones de subsistencia de entre tres y cinco horas diarias, lo que llevó a Marshall Sahlins a hablar de «la sociedad opulenta original».\n\nEsa formulación se ha matizado mucho: las poblaciones estudiadas en el siglo XX ocupaban ambientes marginales y no son análogos directos de las paleolíticas. Aun así, la evidencia paleopatológica apunta en la misma dirección: los primeros agricultores presentan, respecto a los cazadores-recolectores previos, menor estatura, más caries, más anemia y más marcadores de estrés nutricional.\n\nLa organización social era probablemente igualitaria en lo económico, con fuertes mecanismos de reparto y de nivelación. Pero el registro funerario muestra excepciones llamativas: los enterramientos de Sunguir (Rusia, c. 34.000 a. C.) incluyen individuos cubiertos con miles de cuentas de marfil que representan miles de horas de trabajo. La desigualdad no espera a la agricultura.\n\nLa división sexual del trabajo tampoco fue tan rígida como se asumió. Los análisis de restos de Wilamaya Patjxa (Perú) y las revisiones de ajuares de caza en las Américas han identificado mujeres enterradas con equipo cinegético, y el estudio de marcadores óseos de actividad muestra patrones menos dicotómicos de lo esperado.","callout":"La recolección aportaba probablemente la mayor parte de las calorías en muchos entornos. La etiqueta «cazadores-recolectores» invierte, en ese sentido, el peso real de cada actividad."},{"type":"section","title":"Arte, símbolo y pensamiento","text":"El arte paleolítico europeo —Chauvet, Lascaux, Altamira, El Castillo, Tito Bustillo— constituye el corpus simbólico más antiguo conservado a gran escala. Sus temas dominantes son animales, signos geométricos y manos en negativo; las figuras humanas son escasas y a menudo esquemáticas.\n\nLas interpretaciones han cambiado con las modas teóricas. La «magia de caza» de Breuil, que veía en las pinturas un ritual propiciatorio, fue sustituida por el estructuralismo de Leroi-Gourhan, que buscaba oposiciones binarias en la distribución de las figuras, y después por lecturas chamánicas como la de David Lewis-Williams en *La mente en la caverna* (2002), basadas en la neuropsicología de los estados alterados de conciencia. Ninguna se impone hoy de forma concluyente.\n\nLa datación por uranio-torio de costras calcáreas ha alterado el marco cronológico: algunas manifestaciones de La Pasiega, Maltravieso y Ardales superarían los 64.000 años, lo que las situaría antes de la llegada de sapiens a Europa y las atribuiría a neandertales. La propuesta sigue siendo discutida metodológicamente, pero, de confirmarse, elimina el último rasgo que se reservaba en exclusiva a nuestra especie.\n\nFuera de Europa el registro es igual de antiguo: las figuras de Sulawesi y Borneo superan los 40.000 años, y en Blombos (Sudáfrica) hay grabados geométricos en ocre de hace 73.000 años. El foco europeo de los manuales refleja la historia de la investigación, no la distribución real del fenómeno.","callout":null},{"type":"section","title":"La neolitización: cómo y por qué","text":"Hacia el final del Pleistoceno, varias poblaciones del suroeste asiático empezaron a cultivar y a domesticar animales. El proceso fue lento —siglos de manipulación previa a la domesticación morfológica— e independiente en al menos siete focos mundiales: Creciente Fértil, China (mijo y arroz), Mesoamérica (maíz), Andes (patata, quinoa), Nueva Guinea (taro), África occidental (sorgo) y este de Norteamérica.\n\nSobre las causas se han propuesto tres grandes familias de explicación. Gordon Childe defendió en los años treinta la «hipótesis del oasis»: la desecación posglacial habría concentrado a humanos, plantas y animales en torno a los puntos de agua. Lewis Binford y Kent Flannery reformularon el problema en clave demográfica: la presión de población en zonas marginales habría obligado a intensificar la producción. Una tercera línea, de Jacques Cauvin en *Naissance des divinités, naissance de l''agriculture* (1994), invierte la causalidad y sitúa primero un cambio simbólico y religioso.\n\nGöbekli Tepe, excavado por Klaus Schmidt desde 1995, es la pieza que más ha forzado la revisión. Sus recintos con pilares en T de hasta cinco metros y relieves de animales datan de c. 9500 a. C. y fueron levantados por poblaciones que aún no practicaban agricultura plena. La construcción monumental precede, aquí, a la economía agrícola, y no al revés.\n\nLas consecuencias de la neolitización fueron ambivalentes. Aumentó la capacidad de carga demográfica y permitió el excedente, el almacenamiento y, con el tiempo, la desigualdad institucionalizada y el Estado. Al mismo tiempo empeoró la dieta media, aumentó la carga de trabajo, favoreció las zoonosis por convivencia con el ganado y aumentó la vulnerabilidad a las malas cosechas. Jared Diamond la llamó provocativamente «el peor error de la historia de la especie humana».\n\nEn Europa el proceso fue sobre todo migratorio, no de difusión de ideas. La paleogenética muestra que los agricultores anatolios se expandieron físicamente por el continente entre 7000 y 5500 a. C., mezclándose en proporciones variables con los cazadores-recolectores locales, y que un tercer componente —los pastores de la estepa póntica asociados a la cultura Yamnaya— llegó hacia 3000 a. C. y transformó de nuevo el paisaje genético y probablemente lingüístico de Europa.","callout":"La domesticación deja huellas morfológicas: espigas que no se disgregan solas, semillas más grandes, cuernos reducidos. Esos cambios tardan siglos en fijarse, así que la frontera entre recolectar y cultivar es un gradiente, no una línea."},{"type":"section","title":"Megalitismo, metalurgia y el umbral de la historia","text":"Entre el V y el III milenio a. C., la fachada atlántica europea levantó dólmenes, menhires, alineamientos y grandes tumbas de corredor. Newgrange, Stonehenge y el conjunto de Antequera implican planificación, movilización de trabajo y conocimientos astronómicos aplicados: varios monumentos están orientados a los solsticios.\n\nLa datación por radiocarbono desmontó la explicación difusionista clásica, que hacía derivar el megalitismo europeo del Mediterráneo oriental. Colin Renfrew mostró en *Before Civilization* (1973) que los megalitos atlánticos son anteriores a las pirámides egipcias, lo que obligó a reconocer desarrollos autónomos y a abandonar el modelo de una civilización que irradia hacia periferias pasivas.\n\nLa metalurgia introdujo un factor nuevo. El cobre primero y el bronce después —aleación con estaño, escaso y de distribución muy desigual— exigieron redes de intercambio de larga distancia y favorecieron a las élites que las controlaban. El ajuar del llamado «arquero de Amesbury», con origen isotópico centroeuropeo y enterrado cerca de Stonehenge, ilustra esa movilidad.\n\nEl final convencional de la prehistoria llega con la escritura, hacia 3300 a. C. en Uruk. Es un corte útil pero arbitrario: no cambia nada en la vida de la mayoría de la población, y a menudo separa artificialmente procesos continuos. Conviene tratarlo como una frontera documental, no como un salto civilizatorio.","callout":null},{"type":"concepts","items":[{"term":"Homínido","definition":"Miembro de la familia Hominidae. En uso corriente, los ancestros y parientes extintos del linaje humano."},{"term":"Industria lítica","definition":"Conjunto de útiles de piedra tallada característico de una tradición técnica (olduvayense, achelense, musteriense)."},{"term":"Calibración","definition":"Corrección de las fechas de radiocarbono según la variación del C-14 atmosférico. Fechas «cal BP» o «cal a. C.»."},{"term":"Paleogenética","definition":"Estudio del ADN antiguo. Ha reescrito la historia de las migraciones y demostrado el mestizaje entre especies humanas."},{"term":"Neolitización","definition":"Proceso de adopción de agricultura, ganadería, cerámica y sedentarismo. Gradual y con focos independientes."},{"term":"Domesticación","definition":"Modificación genética y morfológica de especies por selección humana sostenida durante generaciones."},{"term":"Creciente Fértil","definition":"Arco entre el Levante, Anatolia y Mesopotamia donde se documenta el primer foco de domesticación."},{"term":"Megalitismo","definition":"Tradición constructiva con grandes bloques de piedra en la Europa atlántica del V–III milenio a. C."},{"term":"Yamnaya","definition":"Cultura pastoril de la estepa póntica cuya expansión hacia 3000 a. C. transformó la genética y probablemente la lengua de Europa."},{"term":"Zoonosis","definition":"Enfermedad transmitida de animales a humanos. Su frecuencia aumentó con la convivencia ganadera del Neolítico."}]},{"type":"debates","items":[{"question":"¿Por qué se adoptó la agricultura si empeoró la salud de quienes la practicaban?","positions":[{"school":"Explicación climática (Childe, años 1930)","argument":"La desecación posglacial habría concentrado a humanos, plantas y animales en torno a oasis, forzando una convivencia que desembocó en domesticación. La agricultura sería una respuesta adaptativa a la escasez."},{"school":"Explicación demográfica (Binford, Flannery)","argument":"El crecimiento de población en zonas marginales, tras la ocupación de los mejores territorios, obligó a intensificar la obtención de alimento. La agricultura sería una salida forzada, no una mejora elegida."},{"school":"Explicación simbólica (Cauvin, 1994)","argument":"Un cambio previo en la mentalidad y en las prácticas rituales habría creado las condiciones sociales del sedentarismo. Göbekli Tepe, monumental y preagrícola, apoyaría esta secuencia."}],"state":"No hay una explicación única aceptada. La investigación actual tiende a modelos multicausales y regionales: el peso del clima, la demografía y la religión varía según el foco de domesticación, y el proceso se reconoce mucho más lento y reversible de lo que se creía."},{"question":"¿Se difundió la agricultura en Europa por migración o por adopción de ideas?","positions":[{"school":"Difusión cultural","argument":"Las poblaciones europeas de cazadores-recolectores habrían adoptado técnicas agrícolas por contacto e imitación, sin sustitución poblacional significativa."},{"school":"Difusión démica (Ammerman y Cavalli-Sforza; paleogenética)","argument":"La expansión fue de personas: agricultores procedentes de Anatolia se desplazaron por el continente entre 7000 y 5500 a. C. El ADN antiguo muestra un reemplazo poblacional sustancial, con mezcla variable según regiones."}],"state":"La paleogenética ha resuelto el debate mayoritariamente a favor de la migración, aunque con matices regionales importantes: en el Báltico y en zonas atlánticas la continuidad de los cazadores-recolectores locales fue mayor."},{"question":"¿Produjeron los neandertales arte simbólico?","positions":[{"school":"Atribución neandertal (Hoffmann et al., 2018)","argument":"Las dataciones por uranio-torio de costras sobre pinturas de La Pasiega, Maltravieso y Ardales superan los 64.000 años, antes de la llegada de sapiens a Europa. Sumadas a los pigmentos, adornos y estructuras de Bruniquel, indicarían capacidad simbólica plena."},{"school":"Escepticismo metodológico (White et al., 2020)","argument":"La datación de costras calcáreas puede sobrestimar la edad por contaminación y por sistemas abiertos al agua. Las fechas no datan el pigmento, sino el carbonato depositado sobre él."}],"state":"La discusión sigue abierta y es sobre todo técnica. La tendencia general de la disciplina, sin embargo, ha sido reducir la lista de capacidades exclusivamente sapiens: el debate ya no es si los neandertales eran simbólicos, sino en qué grado y con qué cronología."}]},{"type":"timeline","items":[{"date":"c. 3,3 M a. C.","event":"Herramientas líticas de Lomekwi (Kenia), anteriores al género Homo."},{"date":"c. 1,9 M a. C.","event":"Homo erectus: mayor capacidad craneal, bifaces achelenses y primeras salidas de África."},{"date":"c. 400.000 a. C.","event":"Uso controlado del fuego bien documentado; Sima de los Huesos (Atapuerca)."},{"date":"c. 300.000 a. C.","event":"Restos de Homo sapiens en Jebel Irhoud (Marruecos)."},{"date":"c. 45.000 a. C.","event":"Sapiens en Europa; coexistencia con neandertales durante milenios."},{"date":"c. 40.000 a. C.","event":"Arte figurativo en Chauvet, El Castillo y Sulawesi."},{"date":"c. 40.000 a. C.","event":"Extinción de los neandertales como población diferenciada."},{"date":"c. 11.600 a. C.","event":"Fin del Younger Dryas: comienza el Holoceno, cálido y estable."},{"date":"c. 9500 a. C.","event":"Göbekli Tepe: santuarios monumentales de sociedades aún no agrícolas."},{"date":"c. 8500 a. C.","event":"Domesticación de trigo, cebada, oveja y cabra en el Creciente Fértil."},{"date":"c. 7000 a. C.","event":"Çatalhöyük: gran poblado agrícola en Anatolia."},{"date":"c. 5600 a. C.","event":"La agricultura alcanza la península ibérica por vía mediterránea."},{"date":"c. 4500–2500 a. C.","event":"Megalitismo atlántico europeo: Stonehenge, Newgrange, Antequera."},{"date":"c. 3300 a. C.","event":"Metalurgia del bronce y primeras escrituras: fin convencional de la prehistoria."}]},{"type":"sources","items":[{"author":"V. Gordon Childe","title":"Man Makes Himself","year":"1936","kind":"estudio","note":"Formula la «revolución neolítica» y la hipótesis del oasis. Referencia histórica del debate."},{"author":"Richard B. Lee e Irven DeVore (eds.)","title":"Man the Hunter","year":"1968","kind":"estudio","note":"Simposio que reformuló la imagen de las sociedades cazadoras-recolectoras."},{"author":"Colin Renfrew","title":"Before Civilization: The Radiocarbon Revolution and Prehistoric Europe","year":"1973","kind":"estudio","note":"Demuestra la anterioridad del megalitismo atlántico y liquida el difusionismo clásico."},{"author":"Jacques Cauvin","title":"Naissance des divinités, naissance de l''agriculture","year":"1994","kind":"estudio","note":"Defiende la primacía del cambio simbólico sobre el económico."},{"author":"David Lewis-Williams","title":"The Mind in the Cave","year":"2002","kind":"estudio","note":"Interpretación neuropsicológica y chamánica del arte paleolítico."},{"author":"Richard Wrangham","title":"Catching Fire: How Cooking Made Us Human","year":"2009","kind":"estudio","note":"La cocción como motor de la encefalización."},{"author":"Svante Pääbo","title":"Neanderthal Man: In Search of Lost Genomes","year":"2014","kind":"estudio","note":"Relato de primera mano de la secuenciación del genoma neandertal."},{"author":"David Reich","title":"Who We Are and How We Got Here","year":"2018","kind":"estudio","note":"Síntesis del impacto del ADN antiguo sobre la historia de las migraciones."},{"author":"James C. Scott","title":"Against the Grain: A Deep History of the Earliest States","year":"2017","kind":"estudio","note":"Cuestiona el relato progresista de la neolitización y del Estado temprano."},{"author":"Klaus Schmidt","title":"Sie bauten die ersten Tempel","year":"2006","kind":"estudio","note":"Excavación e interpretación de Göbekli Tepe por su director."}]}]'::jsonb, 0, true
from public.topics where slug = 'prehistoria'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'El Imperio romano y su transformación', '[{"type":"section","title":"El principado: un poder sin nombre","text":"Augusto resolvió el problema que había matado a César: cómo ejercer un poder monárquico en una sociedad que odiaba el título de rey. Su solución fue no crear ningún cargo nuevo. Acumuló poderes republicanos existentes —imperium proconsular sobre las provincias con ejército, potestad tribunicia vitalicia, pontificado máximo— y se llamó a sí mismo princeps, «el primero», un término sin contenido jurídico.\n\nEl resultado fue un régimen deliberadamente ambiguo. El Senado seguía reuniéndose, los cónsules seguían eligiéndose, las formas republicanas continuaban intactas. Augusto proclamó en sus *Res Gestae* que había devuelto la República y que solo superaba a los demás en auctoritas, prestigio. Tácito, un siglo después, describió la operación con precisión brutal: los nombres de las magistraturas permanecieron, la sustancia cambió.\n\nLa ambigüedad tenía un coste: no existía una regla de sucesión. Augusto intentó resolverlo por adopción dentro de su familia, pero el sistema quedó estructuralmente indefinido. El año 69, con cuatro emperadores en doce meses, reveló lo que Tácito llamó el «secreto del imperio»: que se podía proclamar emperador fuera de Roma, y que quien decidía era el ejército.\n\nPese a ello, el sistema funcionó durante dos siglos con notable eficacia. El llamado siglo de los Antoninos (96-180 d. C.) combinó adopción de sucesores competentes, paz interior, expansión limitada y prosperidad comercial. Edward Gibbon lo consideró el periodo más feliz de la humanidad, juicio que hoy se matiza recordando que descansaba sobre la esclavitud, una fiscalidad regresiva y una desigualdad enorme.","callout":"Las Res Gestae Divi Augusti, inscritas en bronce y copiadas por el imperio, son autobiografía política: hay que leerlas como propaganda cuidadosamente construida, no como memoria fiable."},{"type":"section","title":"Cómo funcionaba el imperio: fiscalidad, ejército y ciudades","text":"El Estado romano era, para su tamaño, asombrosamente ligero. Se calcula que la administración imperial contaba con unos pocos centenares de altos funcionarios para cincuenta millones de habitantes. La gestión ordinaria recaía en las ciudades: recaudación, orden público, obras, culto. El imperio funcionaba porque cooptó a las élites locales, que asumían cargos costosos a cambio de estatus, y en cuya lealtad descansaba todo el edificio.\n\nLa principal partida de gasto era el ejército: entre 300.000 y 400.000 hombres, que consumían la mayor parte del presupuesto. El grueso de los ingresos provenía de impuestos sobre la tierra y las personas en las provincias. Italia estuvo exenta del tributo directo hasta Diocleciano, una asimetría que revela el carácter originalmente extractivo del sistema.\n\nLa romanización se entendió durante mucho tiempo como difusión de una cultura superior hacia periferias receptivas. Esa lectura, formulada por Theodor Mommsen y sistematizada por Francis Haverfield en un contexto de imperialismo británico, ha sido revisada a fondo. Hoy se prefiere hablar de procesos de negociación e hibridación: las élites provinciales adoptaron selectivamente lengua, urbanismo y dioses romanos porque les daban acceso a poder y estatus, y en el proceso crearon formas mixtas —cultos sincréticos, onomástica doble, arquitectura adaptada— que no son ni indígenas ni romanas.\n\nLa cohesión económica fue notable. Los estudios de núcleos de hielo de Groenlandia muestran picos de contaminación por plomo en época altoimperial no igualados hasta la Revolución Industrial; los pecios mediterráneos alcanzan su máxima frecuencia entre el siglo I a. C. y el I d. C. El comercio de larga distancia movía grano egipcio y africano, aceite bético, vino itálico y galo, cerámica producida en serie.\n\nLa Constitutio Antoniniana de Caracalla (212 d. C.) concedió la ciudadanía a prácticamente todos los habitantes libres del imperio. Se ha discutido si fue una medida integradora o simplemente fiscal —ampliar la base de los impuestos que solo pagaban los ciudadanos—. Probablemente ambas: cerró un proceso de siglos y disolvió la distinción jurídica que había estructurado el mundo romano, sustituida por otra nueva entre honestiores y humiliores, es decir, entre acomodados y pobres.","callout":null},{"type":"section","title":"La crisis del siglo III","text":"Entre 235 y 284 d. C. el imperio estuvo cerca del colapso. Hubo más de veinte emperadores reconocidos y numerosos usurpadores; casi ninguno murió de muerte natural. Las legiones proclamaban candidatos y los deponían, y la guerra civil se hizo endémica.\n\nLa presión exterior aumentó simultáneamente en dos frentes. En el Rin y el Danubio, confederaciones germánicas más grandes y mejor organizadas —alamanes, francos, godos— sustituyeron a las tribus dispersas de época altoimperial. En Oriente, el Imperio sasánida, surgido en 224, era un adversario estatal de primer orden: en 260 capturó vivo al emperador Valeriano, humillación sin precedentes.\n\nA ello se sumó una crisis monetaria de manual. Para pagar al ejército, los emperadores redujeron el contenido de plata del denario, que pasó de un 90 % en época de Augusto a menos del 5 % a mediados del siglo III. El resultado fue una inflación descontrolada, la vuelta parcial a pagos en especie y la ruptura de circuitos comerciales. La peste de Cipriano, hacia 249-262, añadió mortalidad masiva.\n\nEl imperio llegó a fragmentarse: el Imperio galo (260-274) y el reino de Palmira bajo Zenobia funcionaron como Estados independientes durante más de una década. Que se reunificara es tan significativo como que se rompiera.\n\nLa recuperación llegó con Aureliano y, sobre todo, con Diocleciano. Este dividió el poder en la tetrarquía —dos augustos y dos césares, con sucesión planificada—, duplicó el número de provincias para reducir el poder de cada gobernador, separó mando militar y administración civil, reformó la fiscalidad con un sistema de unidades de tierra y de trabajo (iugatio-capitatio) e intentó frenar la inflación con un edicto de precios máximos que fracasó. El Estado resultante era mucho más grande, más caro y más coactivo que el altoimperial.","callout":"El Edicto de Precios Máximos de 301 fijaba tarifas para más de mil productos y servicios, con pena de muerte por incumplimiento. Es la fuente más rica sobre la economía tardorromana y, a la vez, el testimonio de su fracaso: los bienes desaparecieron del mercado."},{"type":"section","title":"Cristianización: de secta perseguida a religión de Estado","text":"El cristianismo era, en el siglo I, un movimiento judío minoritario. Su expansión inicial se apoyó en las redes urbanas del imperio, en la lengua griega común y en las rutas comerciales. Las persecuciones fueron episódicas y menos masivas de lo que sugiere la tradición martirial: la de Decio (250) y la de Diocleciano (303-311) fueron las únicas de alcance imperial y sistemático.\n\nLo que resulta históricamente notable no es la persecución, sino el crecimiento. Rodney Stark ha estimado, a partir de una tasa de crecimiento sostenido en torno al 3,4 % anual, que los cristianos pasarían de unos pocos miles a comienzos del siglo II a varios millones a comienzos del IV: en torno al 10 % de la población en vísperas de Constantino. El cálculo es una modelización discutida, pero la magnitud del orden se acepta.\n\nLas explicaciones del éxito combinan varios factores: una comunidad con asistencia mutua efectiva —viudas, huérfanos, enfermos, entierros—, una doctrina de salvación universal accesible sin requisitos de nacimiento ni de riqueza, una posición favorable entre las mujeres, y una exclusividad que, a diferencia de los cultos paganos, impedía la vuelta atrás.\n\nLa conversión de Constantino cambió la escala. El Edicto de Milán (313) estableció la tolerancia; el emperador financió basílicas, concedió privilegios fiscales al clero y convocó el concilio de Nicea (325) para resolver la disputa arriana sobre la naturaleza de Cristo. La intervención imperial en cuestiones doctrinales inauguró una relación de dependencia mutua entre Iglesia e Imperio que marcaría siglos.\n\nCon el Edicto de Tesalónica (380), Teodosio hizo del cristianismo niceno la religión oficial y, en la década siguiente, prohibió los cultos tradicionales. La relación se invirtió por completo en menos de un siglo: la religión perseguida se convirtió en perseguidora. El episodio de Ambrosio de Milán obligando a Teodosio a hacer penitencia pública tras la matanza de Tesalónica (390) muestra que la Iglesia había adquirido capacidad de imponer límites al poder imperial.","callout":null},{"type":"section","title":"El siglo V en Occidente: qué ocurrió realmente","text":"La imagen de hordas bárbaras derribando un imperio no resiste el examen. Los grupos que entraron en el imperio eran demográficamente pequeños —las estimaciones para los vándalos que pasaron a África en 429 rondan las 80.000 personas, incluidas mujeres y niños—, estaban parcialmente romanizados, buscaban tierras y estatus dentro del sistema y a menudo servían como tropas federadas del propio ejército romano.\n\nLa secuencia es más bien de erosión fiscal. Cada territorio perdido reducía los ingresos; con menos ingresos había menos ejército; con menos ejército se perdían más territorios. La pérdida de África en 439, la provincia más rica y granero de Roma, fue probablemente el golpe decisivo. Chris Wickham y Bryan Ward-Perkins han insistido en este mecanismo acumulativo.\n\nLa política interna agravó el proceso. El poder efectivo pasó a manos de generales —Estilicón, Aecio, Ricimero—, con frecuencia de origen bárbaro, que hacían y deshacían emperadores. Roma dejó de ser capital, sustituida por Milán y después por Rávena. Cuando en 476 Odoacro depuso a Rómulo Augústulo, no proclamó un nuevo imperio: envió las insignias imperiales a Constantinopla y gobernó Italia como representante nominal del emperador de Oriente. Los contemporáneos no percibieron el fin de nada.\n\nMientras tanto, el Imperio de Oriente sobrevivió otros mil años. Esa asimetría es el mejor argumento contra las explicaciones globales: cualquier causa que se invoque —cristianismo, decadencia moral, plomo en las cañerías, presión bárbara— debería explicar también por qué Oriente resistió. Oriente tenía fronteras más cortas y defendibles, una base fiscal más rica —Egipto, Siria— y una capital inexpugnable.\n\nLas consecuencias materiales en Occidente sí fueron severas. Ward-Perkins ha documentado, a partir de la cultura material, una caída drástica en la calidad y difusión de la cerámica, en el tamaño del ganado, en la circulación monetaria y en el uso de tejas: indicadores de un descenso general del nivel de vida y de la complejidad económica. Su libro *La caída de Roma y el fin de la civilización* (2005) reaccionó explícitamente contra las lecturas que presentan el periodo como una transición amable.","callout":"El propio término «bárbaro» procede del griego y designaba a quien no hablaba griego. Aplicado sin más a los pueblos del siglo V, importa una imagen de otredad radical que las fuentes arqueológicas no sostienen."},{"type":"section","title":"El legado: derecho, lengua y una idea de imperio","text":"La aportación romana más duradera no fue política, sino jurídica. El derecho romano desarrolló categorías —propiedad, contrato, obligación, persona jurídica, buena fe— con un nivel de abstracción que ninguna otra tradición antigua alcanzó. Su recopilación en el *Corpus Iuris Civilis* de Justiniano (528-534) y su redescubrimiento en Bolonia en el siglo XI lo convirtieron en la base de los sistemas jurídicos continentales europeos y latinoamericanos.\n\nLa huella lingüística es igualmente estructural. El latín vulgar de las provincias occidentales derivó en las lenguas romances: castellano, portugués, catalán, gallego, francés, occitano, italiano, rumano. Y el latín culto siguió siendo la lengua de la administración, la Iglesia, el derecho y la ciencia europeos hasta el siglo XVIII.\n\nLa idea de imperio como orden universal legítimo sobrevivió a la desaparición del Estado que la había encarnado. Se reclamó en el imperio carolingio, en el Sacro Imperio Romano Germánico, en la Rusia que se llamó a sí misma «tercera Roma», y en la iconografía política de las monarquías modernas. La palabra káiser y la palabra zar derivan ambas de César.\n\nConviene, sin embargo, resistir la tentación de leer Roma como antecesora directa de nada. Fue una sociedad esclavista en la que quizá entre un 10 % y un 20 % de la población carecía de personalidad jurídica; su expansión implicó exterminios documentados por sus propios autores, como el de la Galia narrado por César; y su prosperidad descansaba en una extracción fiscal sobre provincias sometidas. El interés histórico de Roma no está en su ejemplaridad, sino en que es el caso mejor documentado de cómo se construye, se mantiene y se deshace un Estado de escala continental.","callout":null},{"type":"concepts","items":[{"term":"Princeps","definition":"«El primero»: título sin contenido jurídico con el que Augusto disimuló un poder monárquico."},{"term":"Auctoritas","definition":"Prestigio y ascendiente moral. Augusto afirmó superar a los demás solo en esto, no en poder formal."},{"term":"Potestad tribunicia","definition":"Poder vitalicio de veto e inviolabilidad que el emperador acumulaba sin ser tribuno."},{"term":"Constitutio Antoniniana","definition":"Edicto de Caracalla (212) que concedió la ciudadanía a casi todos los habitantes libres del imperio."},{"term":"Honestiores / humiliores","definition":"Nueva distinción jurídica tras 212: acomodados frente a pobres, con penas distintas por el mismo delito."},{"term":"Tetrarquía","definition":"Sistema de Diocleciano con dos augustos y dos césares para repartir el gobierno y planificar la sucesión."},{"term":"Iugatio-capitatio","definition":"Sistema fiscal tardorromano basado en unidades de tierra y de trabajo."},{"term":"Limes","definition":"Sistema fronterizo fortificado, más zona de control y contacto que muralla estanca."},{"term":"Foederati","definition":"Pueblos asentados dentro del imperio con obligación de aportar tropas bajo sus propios jefes."},{"term":"Romanización","definition":"Antes, difusión cultural unidireccional; hoy se entiende como negociación e hibridación entre Roma y las élites locales."},{"term":"Corpus Iuris Civilis","definition":"Compilación jurídica de Justiniano (528-534), base del derecho continental europeo tras su redescubrimiento medieval."}]},{"type":"debates","items":[{"question":"¿Por qué cayó el Imperio romano de Occidente?","positions":[{"school":"Decadencia interna (Gibbon, 1776-1789)","argument":"La pérdida de virtud cívica, el peso del ejército mercenario y, señaladamente, el cristianismo, que habría desviado energías hacia el más allá y debilitado el espíritu militar y la lealtad al Estado."},{"school":"Erosión fiscal y militar (Ward-Perkins, Heather)","argument":"La pérdida de provincias redujo los ingresos, lo que redujo el ejército, lo que provocó nuevas pérdidas. La caída de África en 439 fue decisiva. La presión externa, real y creciente, actuó sobre un Estado fiscalmente estrangulado."},{"school":"Transformación, no caída (Brown, Goffart)","argument":"No hubo colapso sino una larga transición: los reinos germánicos se instalaron dentro de estructuras romanas, conservaron la administración, el latín y la Iglesia, y la Antigüedad tardía fue una época de creatividad religiosa y cultural propia."}],"state":"El paradigma de la «transformación» dominó los años ochenta y noventa; Ward-Perkins y Heather reaccionaron aportando evidencia material de un descenso severo del nivel de vida en Occidente. Hoy se acepta que hubo a la vez continuidad institucional y una regresión económica real, con enorme variación regional. La supervivencia de Oriente sigue siendo el mejor test de cualquier explicación."},{"question":"¿Qué fue la romanización?","positions":[{"school":"Difusión cultural (Mommsen, Haverfield)","argument":"Roma habría llevado urbanismo, derecho, lengua y civilización a pueblos menos desarrollados, que los adoptaron por su superioridad evidente. Modelo formulado en pleno auge del imperialismo europeo."},{"school":"Negociación e hibridación (Woolf, Mattingly)","argument":"Las élites provinciales adoptaron selectivamente elementos romanos porque daban acceso a poder y estatus, generando formas mixtas. Hubo también resistencia, indiferencia y desigualdad: la experiencia de la conquista fue muy distinta para una élite gala y para un campesino o un esclavo."}],"state":"El modelo difusionista está descartado como marco explicativo. Se prefieren conceptos como «identidades discrepantes» (Mattingly) que reconocen experiencias divergentes dentro de una misma provincia."},{"question":"¿Fue la Constitutio Antoniniana una medida integradora o fiscal?","positions":[{"school":"Motivo fiscal (Dión Casio, contemporáneo)","argument":"Caracalla buscaba ampliar la base de los impuestos que solo gravaban a los ciudadanos, en particular el de sucesiones. Un historiador contemporáneo se lo atribuye explícitamente."},{"school":"Culminación integradora","argument":"Cerraba un proceso secular de extensión progresiva de la ciudadanía y respondía a que la distinción entre ciudadano y peregrino había perdido sentido práctico en un imperio ya homogeneizado."}],"state":"Se admiten ambos motivos como compatibles. Lo más relevante es su consecuencia: la ciudadanía dejó de ser un privilegio distintivo y fue sustituida por la división socioeconómica entre honestiores y humiliores."}]},{"type":"timeline","items":[{"date":"27 a. C.","event":"Octavio recibe el nombre de Augusto: nace el principado."},{"date":"9 d. C.","event":"Desastre de Teutoburgo; el Rin queda como frontera."},{"date":"69 d. C.","event":"Año de los cuatro emperadores: el ejército decide la sucesión."},{"date":"117 d. C.","event":"Máxima extensión territorial bajo Trajano."},{"date":"122 d. C.","event":"Inicio del muro de Adriano: de la expansión a la consolidación."},{"date":"165–180 d. C.","event":"Peste antonina; mortalidad estimada entre el 10 % y el 25 %."},{"date":"212 d. C.","event":"Constitutio Antoniniana: ciudadanía a casi todos los habitantes libres."},{"date":"235–284 d. C.","event":"Crisis del siglo III: anarquía militar, invasiones e inflación."},{"date":"284–305 d. C.","event":"Diocleciano: tetrarquía, reforma fiscal y administrativa."},{"date":"313 d. C.","event":"Edicto de Milán: tolerancia del cristianismo."},{"date":"325 d. C.","event":"Concilio de Nicea."},{"date":"380 d. C.","event":"Edicto de Tesalónica: el cristianismo niceno, religión oficial."},{"date":"378 d. C.","event":"Adrianópolis: derrota y muerte del emperador Valente ante los godos."},{"date":"395 d. C.","event":"División administrativa definitiva entre Oriente y Occidente."},{"date":"410 d. C.","event":"Saqueo de Roma por Alarico."},{"date":"476 d. C.","event":"Odoacro depone a Rómulo Augústulo: fin convencional del Imperio de Occidente."}]},{"type":"sources","items":[{"author":"Augusto","title":"Res Gestae Divi Augusti","year":"14 d. C.","kind":"primaria","note":"Autobiografía política inscrita en bronce y copiada por el imperio. Propaganda, no memoria fiable."},{"author":"Tácito","title":"Anales; Historias; Germania","year":"c. 110–120 d. C.","kind":"primaria","note":"Análisis crítico del principado desde la perspectiva senatorial. Formula el «secreto del imperio»."},{"author":"Plinio el Joven","title":"Cartas, libro X","year":"c. 111 d. C.","kind":"primaria","note":"Correspondencia con Trajano: administración provincial y primer testimonio oficial sobre los cristianos."},{"author":"Diocleciano","title":"Edicto de Precios Máximos","year":"301 d. C.","kind":"primaria","note":"Tarifas para más de mil bienes y servicios. Fuente central sobre la economía tardorromana."},{"author":"Amiano Marcelino","title":"Res Gestae","year":"c. 390 d. C.","kind":"primaria","note":"Última gran historia latina; narra Adrianópolis como testigo cercano."},{"author":"Agustín de Hipona","title":"La ciudad de Dios","year":"413–426","kind":"primaria","note":"Respuesta al saqueo de 410 y a la acusación de que el cristianismo había causado la ruina de Roma."},{"author":"Edward Gibbon","title":"The History of the Decline and Fall of the Roman Empire","year":"1776–1789","kind":"estudio","note":"Obra fundacional del debate; responsabiliza en parte al cristianismo."},{"author":"Peter Brown","title":"The World of Late Antiquity","year":"1971","kind":"estudio","note":"Funda el paradigma de la Antigüedad tardía como transformación creativa y no como decadencia."},{"author":"Bryan Ward-Perkins","title":"The Fall of Rome and the End of Civilization","year":"2005","kind":"estudio","note":"Reacción contra el paradigma de la transformación, con evidencia arqueológica de regresión material."},{"author":"Peter Heather","title":"The Fall of the Roman Empire: A New History","year":"2005","kind":"estudio","note":"Subraya el papel real de la presión externa sobre un Estado fiscalmente debilitado."},{"author":"Greg Woolf","title":"Becoming Roman: The Origins of Provincial Civilization in Gaul","year":"1998","kind":"estudio","note":"Modelo de romanización como negociación e hibridación."},{"author":"Chris Wickham","title":"Framing the Early Middle Ages","year":"2005","kind":"estudio","note":"Comparación regional sistemática de la transición entre el mundo romano y el medieval."}]}]'::jsonb, 0, true
from public.topics where slug = 'roma-imperio'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Roma: la República', '[{"type":"section","title":"El problema de las fuentes de la Roma arcaica","text":"Casi todo lo que la tradición cuenta sobre los orígenes de Roma —Rómulo, los siete reyes, la expulsión de Tarquinio el Soberbio en 509 a. C.— procede de autores que escriben cuatro o cinco siglos después: Tito Livio y Dionisio de Halicarnaso, ambos de época augústea. No son testigos, sino recopiladores de una tradición ya elaborada.\n\nEsa tradición fue moldeada retrospectivamente. Las familias aristocráticas conservaban elogios fúnebres y listas de magistrados que tendían a exagerar sus méritos e insertar antepasados en episodios gloriosos. Además, los relatos de la monarquía y de la primera República están construidos con categorías políticas del siglo I a. C.: proyectan hacia atrás conflictos y conceptos contemporáneos a sus autores.\n\nLa arqueología ha corregido y a veces confirmado partes del relato. Muestra un núcleo urbano organizado en el Palatino y el Foro ya en el siglo VII a. C., con un fuerte influjo etrusco y griego, lo que contradice la imagen de una aldea de pastores. Pero no permite verificar nombres ni fechas concretas.\n\nLa consecuencia metodológica es clara: para el periodo anterior al siglo IV a. C. conviene leer la tradición como memoria cultural —lo que los romanos creían sobre sí mismos y les servía para justificar su orden político— más que como crónica. Que sea memoria y no crónica no la hace inútil: explica cómo Roma se pensaba a sí misma.","callout":"El relato de Lucrecia y la expulsión de los reyes cumple una función precisa: fundar la República sobre el rechazo a la arbitrariedad personal. El odio al título de rex duró hasta César, y contribuyó a su muerte."},{"type":"section","title":"La constitución republicana: un equilibrio sin texto","text":"Roma no tuvo constitución escrita. Su sistema era un conjunto de instituciones, leyes y costumbres —el mos maiorum, la «costumbre de los antepasados»— que evolucionó por acumulación y precedente. Polibio, historiador griego rehén en Roma, la describió en el libro VI de sus *Historias* como una constitución mixta que combinaba monarquía (los cónsules), aristocracia (el Senado) y democracia (las asambleas), y atribuyó a ese equilibrio la estabilidad romana.\n\nLas magistraturas eran colegiadas, anuales y gratuitas. Dos cónsules dirigían el Estado y el ejército, con derecho de veto mutuo; los pretores administraban justicia; los cuestores gestionaban finanzas; los ediles, la ciudad; y los censores, cada cinco años, revisaban las listas de ciudadanos y del Senado y vigilaban las costumbres. El cursus honorum fijaba el orden y las edades mínimas de esa carrera. En emergencias podía nombrarse un dictador con poderes plenos por un máximo de seis meses.\n\nEl Senado, integrado por exmagistrados y vitalicio, no legislaba formalmente: emitía senadoconsultos, opiniones de enorme peso moral y práctico. Controlaba de hecho las finanzas, la política exterior y la asignación de provincias y mandos. Era el órgano de continuidad frente a magistrados que cambiaban cada año.\n\nLas asambleas votaban leyes y elegían magistrados, pero su diseño limitaba el peso de los pobres. Los comicios centuriados, organizados por clases de fortuna, distribuían el voto por centurias y no por cabeza, y las centurias de los más ricos votaban primero: cuando se alcanzaba la mayoría, la votación se detenía y las clases inferiores a menudo ni llegaban a pronunciarse. Que las asambleas fueran soberanas en teoría no significa que el pueblo decidiera en la práctica.\n\nLa verdadera argamasa del sistema era la clientela: una relación asimétrica y hereditaria entre un patrono, que proporcionaba protección jurídica y ayuda material, y sus clientes, que le debían apoyo político, acompañamiento público y voto. La política romana funcionaba sobre esas redes personales mucho más que sobre programas.","callout":null},{"type":"section","title":"El conflicto de los órdenes","text":"Durante los dos primeros siglos de la República, la plebe —el conjunto de ciudadanos no pertenecientes a las familias patricias— luchó por acceder a las magistraturas, al sacerdocio y a la tierra pública, y por protegerse del abuso jurídico y del endeudamiento.\n\nSu arma más eficaz fue la secesión: retirarse en masa fuera de la ciudad y negarse a combatir. Roma, en guerra permanente con sus vecinos, no podía prescindir de sus soldados. La primera secesión (494 a. C.) arrancó la creación del tribunado de la plebe, magistratura con dos rasgos excepcionales: la sacrosanctitas —quien agrediera a un tribuno quedaba maldito y podía ser muerto impunemente— y el derecho de intercessio, que permitía vetar cualquier acto de un magistrado.\n\nLa Ley de las Doce Tablas (451-450 a. C.) fijó por escrito el derecho. Su contenido no era favorable a la plebe en muchos puntos —mantenía la ejecución sobre la persona del deudor y prohibía inicialmente los matrimonios mixtos—, pero eliminó el monopolio patricio sobre el conocimiento de la norma, que hasta entonces era interpretada oralmente por los pontífices.\n\nEl proceso culminó en tres etapas: las leyes Licinias-Sextias (367 a. C.) abrieron el consulado a los plebeyos; la lex Poetelia (326 a. C.) abolió el nexum, la servidumbre por deudas; y la lex Hortensia (287 a. C.) estableció que los plebiscitos —acuerdos de la asamblea de la plebe— obligaban a todo el pueblo, incluidos los patricios.\n\nEl resultado no fue igualdad, sino sustitución de una élite por otra más amplia. Se formó la nobilitas patricio-plebeya: familias que habían alcanzado el consulado y que monopolizaron los cargos durante siglos. Un homo novus —el primero de su familia en llegar al consulado, como Cicerón— era una rareza señalada. La apertura formal de las magistraturas convivió con un cierre sociológico muy estricto.","callout":"La sacrosanctitas del tribuno era una garantía religiosa, no jurídica. Cuando en 133 a. C. Tiberio Graco fue asesinado siendo tribuno, se rompió un tabú que había sostenido el sistema durante tres siglos."},{"type":"section","title":"La expansión mediterránea y sus mecanismos","text":"Roma sometió Italia entre los siglos IV y III a. C. mediante una combinación de guerra y de ingeniería jurídica. En lugar de reducir a los vencidos a súbditos uniformes, creó un mosaico de estatutos: colonias latinas, municipios con distintos grados de ciudadanía, aliados (socii) obligados a aportar tropas pero no impuestos. Esa flexibilidad, que integraba a las élites locales en el sistema, explica la resistencia romana a las derrotas: cuando Aníbal esperaba que Italia se sublevara, la mayor parte de los aliados permaneció fiel.\n\nLas guerras púnicas transformaron a Roma. La primera (264-241 a. C.) la obligó a construir una flota desde cero y le dio Sicilia, su primera provincia. La segunda (218-201 a. C.) fue existencial: Aníbal cruzó los Alpes, destruyó tres ejércitos consulares y aniquiló en Cannas (216 a. C.) a unos 50.000 romanos en una sola jornada. Roma sobrevivió por su capacidad de reponer ejércitos y por la estrategia de desgaste de Fabio Máximo, y ganó cuando Escipión llevó la guerra a África.\n\nA partir de 200 a. C., la expansión hacia el este fue rápida: Macedonia, Grecia, Asia Menor. En 146 a. C. Roma destruyó Cartago y Corinto en el mismo año. Polibio, testigo de la caída de Cartago, se planteó explícitamente la pregunta que da sentido a su obra: cómo en menos de cincuenta y tres años casi todo el mundo conocido quedó bajo dominio romano.\n\nLa explicación del imperialismo romano se ha discutido intensamente. La lectura tradicional, apoyada en las propias fuentes romanas, hablaba de un «imperialismo defensivo»: Roma habría hecho guerras justas, provocada siempre por terceros. William Harris demostró en *War and Imperialism in Republican Rome* (1979) que la sociedad romana tenía incentivos estructurales para la guerra: el prestigio militar era requisito de la carrera política, el triunfo y el botín enriquecían a los generales, y las campañas anuales eran la norma y no la excepción.\n\nLas consecuencias internas fueron desestabilizadoras. La conquista trajo esclavos en masa —cientos de miles— que sustituyeron mano de obra libre; permitió a los senadores acumular latifundios trabajados por esclavos; arruinó a los pequeños propietarios, ausentes en campañas de años; y creó una plebe urbana sin tierra ni empleo estable. La riqueza provincial, gestionada por gobernadores con escasísimo control, generó además una corrupción de escala nueva.","callout":null},{"type":"section","title":"La crisis: de los Gracos a Sila","text":"En 133 a. C., el tribuno Tiberio Graco propuso aplicar un límite legal existente pero incumplido sobre la ocupación de tierra pública, y repartir el excedente entre ciudadanos sin tierra. El objetivo era militar además de social: solo los propietarios podían ser reclutados, así que la desaparición del campesinado amenazaba el reclutamiento.\n\nLa reacción del Senado fue brutal. Tiberio fue asesinado junto a centenares de partidarios; su hermano Cayo, tras un programa más amplio, murió en circunstancias similares en 121 a. C. Ese episodio inauguró el uso sistemático de la violencia política en Roma y dividió la vida pública entre populares —quienes buscaban apoyo en las asambleas y en la plebe— y optimates —quienes defendían la primacía del Senado—. Conviene subrayar que no eran partidos ni ideologías, sino métodos de acción política.\n\nCayo Mario abrió la brecha decisiva. Al reclutar proletarios sin propiedad, resolvió el problema de efectivos pero creó un ejército cuyos soldados no esperaban tierra del Estado, sino de su general. La lealtad militar se personalizó. A partir de ahí, quien mandaba legiones disponía de un instrumento político, y las guerras civiles se volvieron posibles.\n\nLa Guerra Social (91-88 a. C.) enfrentó a Roma con sus aliados itálicos, que exigían la ciudadanía tras siglos aportando tropas. Roma perdió militarmente el conflicto en buena medida y lo resolvió concediendo lo que se le pedía: la ciudadanía se extendió a toda Italia al sur del Po. Fue una integración forzada por la guerra, no una generosidad.\n\nSila llevó la lógica hasta el final: en 88 a. C. marchó con sus legiones sobre Roma, algo hasta entonces impensable; en 82 a. C. se hizo nombrar dictador sin límite temporal e instauró las proscripciones, listas públicas de enemigos cuya muerte era recompensada y cuyos bienes se confiscaban. Reforzó el Senado y limitó el tribunado, y después se retiró. Su precedente —tomar el poder por las armas y reorganizar el Estado— resultó más duradero que sus reformas.","callout":"Populares y optimates no eran partidos con programa ni afiliación estable. Un mismo aristócrata podía usar métodos populares en una coyuntura y defender al Senado en otra: eran estrategias, no ideologías."},{"type":"section","title":"El derrumbe final y la cuestión de por qué","text":"La generación siguiente actuó ya sobre un sistema descompuesto. Pompeyo obtuvo mandos extraordinarios de amplitud inédita; Craso aportó una fortuna colosal; César combinó ambición, capacidad militar y apoyo popular. El acuerdo privado de los tres en 60 a. C. —el llamado primer triunvirato— no fue una institución, sino un pacto para repartirse el control de las elecciones y los mandos, y muestra hasta qué punto las instituciones habían dejado de decidir.\n\nLa conquista de la Galia dio a César una clientela militar, un prestigio inmenso y un botín enorme. Cuando el Senado le exigió licenciar sus tropas, cruzó el Rubicón (49 a. C.). Tras vencer, acumuló cargos, se hizo nombrar dictador perpetuo y aceptó honores que evocaban la realeza y el culto divino. Fue asesinado en 44 a. C. por un grupo de senadores que decían restaurar la República, y cuyo golpe solo produjo trece años más de guerra civil.\n\nLa derrota de Marco Antonio y Cleopatra en Accio (31 a. C.) dejó a Octavio como único poder. En 27 a. C. devolvió formalmente sus poderes al Senado y recibió a cambio el nombre de Augusto y una posición que conservaba todas las apariencias republicanas: magistraturas tradicionales, Senado en funcionamiento, ausencia de título real. Tácito resumió la operación con una frase demoledora: conservó los nombres de las cosas y cambió su sustancia.\n\nSobre las causas del derrumbe hay varias líneas de explicación. Una subraya los factores socioeconómicos: la ruina del campesinado, la esclavitud masiva y la concentración de la tierra. Otra insiste en el desajuste institucional: instituciones diseñadas para una ciudad-Estado gobernando un imperio mediterráneo, sin administración profesional, sin control efectivo de los gobernadores y con magistraturas anuales incompatibles con guerras de años. Una tercera, desarrollada por Ronald Syme en *The Roman Revolution* (1939), analiza el cambio como sustitución de una oligarquía por otra mediante la violencia y el clientelismo, y desmonta la retórica de la restauración augústea.\n\nLa lectura más aceptada hoy combina las tres y añade un factor cultural: la competencia aristocrática por el honor, que había sido el motor de la expansión, dejó de tener límites eficaces cuando los premios se volvieron desmesurados y los ejércitos, personales. La República no fue derribada por enemigos externos ni por una revolución popular, sino por la propia clase que la dirigía.","callout":null},{"type":"concepts","items":[{"term":"Mos maiorum","definition":"Costumbre de los antepasados: conjunto de normas no escritas que hacía de constitución romana."},{"term":"Cursus honorum","definition":"Orden legal de las magistraturas, con edades mínimas e intervalos obligatorios entre cargos."},{"term":"Imperium","definition":"Poder de mando militar y jurisdiccional que ostentaban cónsules, pretores y dictadores."},{"term":"Intercessio","definition":"Derecho de veto de los tribunos de la plebe frente a actos de cualquier magistrado."},{"term":"Sacrosanctitas","definition":"Inviolabilidad religiosa del tribuno de la plebe: agredirlo suponía maldición y muerte impune."},{"term":"Clientela","definition":"Vínculo asimétrico y hereditario entre patrono y cliente. Base real de la política romana."},{"term":"Nobilitas","definition":"Élite patricio-plebeya formada por familias que habían alcanzado el consulado."},{"term":"Homo novus","definition":"Primer miembro de una familia en llegar al consulado. Caso excepcional, como Cicerón."},{"term":"Ager publicus","definition":"Tierra pública conquistada, ocupada de hecho por grandes propietarios pese a los límites legales."},{"term":"Populares / optimates","definition":"Métodos de acción política —apoyo en las asambleas o en el Senado—, no partidos ni ideologías."},{"term":"Proscripción","definition":"Lista pública de enemigos cuya muerte se recompensaba y cuyos bienes se confiscaban. Instaurada por Sila."},{"term":"Socii","definition":"Aliados itálicos obligados a aportar tropas sin ser ciudadanos. Origen de la Guerra Social."}]},{"type":"debates","items":[{"question":"¿Fue el imperialismo romano defensivo o estructuralmente agresivo?","positions":[{"school":"Imperialismo defensivo (Mommsen; tradición apoyada en las fuentes romanas)","argument":"Roma habría entrado en guerra siempre provocada, aplicando el procedimiento del bellum iustum y respondiendo a amenazas o a peticiones de aliados. La expansión sería un resultado no buscado de una política de seguridad."},{"school":"Agresividad estructural (Harris, 1979)","argument":"El prestigio militar era requisito del ascenso político, el botín enriquecía a generales y soldados, y la guerra era la actividad normal de casi todos los años. Los incentivos internos empujaban a la expansión con independencia de las provocaciones externas."}],"state":"La tesis de Harris se ha impuesto mayoritariamente en su núcleo: la sociedad romana estaba organizada para la guerra. Se discute cuánta planificación consciente hubo y cuánto peso tuvieron los intereses económicos frente a los del honor aristocrático."},{"question":"¿Fue la República romana en algún sentido democrática?","positions":[{"school":"Elementos democráticos reales (Millar, 1998)","argument":"El pueblo reunido en asamblea elegía magistrados y aprobaba leyes; los políticos debían persuadirlo en la contio. La política romana se hacía en público y la retórica popular tenía efectos, lo que impide reducirla a mera fachada oligárquica."},{"school":"Oligarquía con consentimiento (Mouritsen; tradición de Gelzer y Syme)","argument":"La estructura de voto por centurias favorecía a los ricos, la asistencia efectiva a las asambleas era baja, no existía debate ni enmienda en la votación, y las clientelas condicionaban el resultado. El pueblo ratificaba decisiones tomadas en otro sitio."}],"state":"El debate abierto por Millar renovó el campo. La posición dominante reconoce una dimensión pública y persuasiva de la política romana, sin aceptar que existiera soberanía popular efectiva: se habla de «oligarquía que necesitaba legitimación popular»."},{"question":"¿Por qué cayó la República?","positions":[{"school":"Explicación socioeconómica","argument":"La conquista arruinó al pequeño campesinado, sustituyó trabajo libre por esclavo y concentró la tierra. Sin propietarios no había reclutas ni base social del régimen, y el conflicto por la tierra se hizo insoluble."},{"school":"Desajuste institucional","argument":"Instituciones de ciudad-Estado gobernaban un imperio: magistraturas anuales frente a guerras de años, sin administración profesional ni control de los gobernadores. Los mandos extraordinarios eran la única solución práctica y a la vez el instrumento de su destrucción."},{"school":"Revolución de la clase dirigente (Syme, 1939)","argument":"Lo ocurrido fue la sustitución de una oligarquía por otra mediante violencia, clientelismo y propaganda. La «restauración» augústea fue una operación retórica sobre un cambio de régimen efectivo."}],"state":"Se prefieren hoy explicaciones combinadas. Se subraya además un factor cultural: la competencia aristocrática por el honor perdió sus límites cuando los premios se hicieron desmesurados y los ejércitos, personales."}]},{"type":"timeline","items":[{"date":"509 a. C.","event":"Fecha tradicional de la expulsión del último rey y fundación de la República."},{"date":"494 a. C.","event":"Primera secesión de la plebe; creación del tribunado."},{"date":"451–450 a. C.","event":"Ley de las Doce Tablas: primer derecho romano escrito."},{"date":"367 a. C.","event":"Leyes Licinias-Sextias: acceso plebeyo al consulado."},{"date":"287 a. C.","event":"Lex Hortensia: los plebiscitos obligan a todo el pueblo. Fin del conflicto de órdenes."},{"date":"264–241 a. C.","event":"Primera guerra púnica; Roma se convierte en potencia naval."},{"date":"218–201 a. C.","event":"Segunda guerra púnica: Aníbal en Italia; victoria de Escipión en Zama."},{"date":"146 a. C.","event":"Destrucción de Cartago y de Corinto. Hegemonía mediterránea."},{"date":"133 a. C.","event":"Tribunado y asesinato de Tiberio Graco. Comienza la crisis."},{"date":"107–100 a. C.","event":"Reforma militar de Mario: reclutamiento de proletarios."},{"date":"91–88 a. C.","event":"Guerra Social; extensión de la ciudadanía a los itálicos."},{"date":"82–79 a. C.","event":"Dictadura de Sila y proscripciones."},{"date":"60 a. C.","event":"Primer triunvirato: César, Pompeyo y Craso."},{"date":"49–45 a. C.","event":"Guerra civil; César dictador."},{"date":"44 a. C.","event":"Asesinato de César en los idus de marzo."},{"date":"31–27 a. C.","event":"Accio y establecimiento del principado de Augusto."}]},{"type":"sources","items":[{"author":"Polibio","title":"Historias, libro VI","year":"c. 140 a. C.","kind":"primaria","note":"Análisis de la constitución mixta romana por un testigo griego contemporáneo."},{"author":"Tito Livio","title":"Ab Urbe condita","year":"c. 27 a. C.–17 d. C.","kind":"primaria","note":"Relato monumental desde los orígenes. Fuente esencial y a la vez construcción ideológica augústea."},{"author":"Salustio","title":"La conjuración de Catilina; La guerra de Yugurta","year":"c. 42–40 a. C.","kind":"primaria","note":"Análisis contemporáneo de la corrupción de la élite republicana."},{"author":"Cicerón","title":"Cartas a Ático; discursos","year":"68–43 a. C.","kind":"primaria","note":"Correspondencia privada excepcional: la política republicana vista desde dentro y en tiempo real."},{"author":"Plutarco","title":"Vidas paralelas","year":"c. 100 d. C.","kind":"primaria","note":"Biografías de los Gracos, Mario, Sila, Pompeyo y César. Interés moral más que analítico."},{"author":"Ronald Syme","title":"The Roman Revolution","year":"1939","kind":"estudio","note":"Analiza el ascenso de Augusto como sustitución de oligarquías. Obra fundacional de la prosopografía romana."},{"author":"William V. Harris","title":"War and Imperialism in Republican Rome, 327–70 BC","year":"1979","kind":"estudio","note":"Demuele la tesis del imperialismo defensivo."},{"author":"Fergus Millar","title":"The Crowd in Rome in the Late Republic","year":"1998","kind":"estudio","note":"Reabre el debate sobre los elementos democráticos de la República."},{"author":"Henrik Mouritsen","title":"Plebs and Politics in the Late Roman Republic","year":"2001","kind":"estudio","note":"Respuesta crítica a Millar sobre la participación popular efectiva."},{"author":"Mary Beard","title":"SPQR: A History of Ancient Rome","year":"2015","kind":"estudio","note":"Síntesis reciente muy atenta a los problemas de fuentes y a la vida de la gente común."}]}]'::jsonb, 0, true
from public.topics where slug = 'roma-republica'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

-- 5. Preguntas ---------------------------------------------------------------
-- questions no tiene clave natural única, así que se borran y se reinsertan
-- por tema. question_options cae en cascada por su clave foránea.
delete from public.questions where topic_id in (select id from public.topics where slug in ('renacimiento', 'revoluciones', 'andalus', 'bizancio', 'egipto', 'feudalismo', 'grecia', 'islam', 'mesopotamia', 'prehistoria', 'roma-imperio', 'roma-republica'));

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'El Humanismo renacentista colocaba en el centro de su reflexión a…', 'El Humanismo recuperó críticamente los clásicos y revalorizó las capacidades humanas.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La vida urbana exclusivamente', false, 0),
  ('El ser humano y los textos clásicos', true, 1),
  ('La expansión colonial', false, 2),
  ('Los gremios medievales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?', 'La toma de la Bastilla, el 14 de julio de 1789, se convirtió en uno de los símbolos de la Revolución.', 3, true
  from public.topics where slug = 'revoluciones'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La toma de la Bastilla', true, 0),
  ('El Congreso de Viena', false, 1),
  ('La batalla de Waterloo', false, 2),
  ('La Comuna de París', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué explica mejor la rapidez del hundimiento del reino visigodo en 711?', 'Varios sectores no tenían motivos para defender el régimen. El mecanismo principal de la conquista fue el pacto de capitulación, no la batalla.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La superioridad tecnológica de los ejércitos musulmanes', false, 0),
  ('La fragilidad del Estado visigodo: monarquía electiva, guerras sucesorias, aristocracia dividida y minorías perseguidas', true, 1),
  ('Una epidemia previa que despobló la península', false, 2),
  ('La ausencia total de ejército visigodo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué establecía el Tratado de Teodomiro (713)?', 'Es el ejemplo mejor documentado del modelo de capitulación que se repitió por toda la península.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La conversión obligatoria de los visigodos al islam', false, 0),
  ('Que un noble visigodo conservaba sus territorios y su población su religión y propiedades, a cambio de un tributo anual', true, 1),
  ('La expulsión de los cristianos del sureste peninsular', false, 2),
  ('La alianza militar entre visigodos y bizantinos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué evidencia contradice la tesis de que no hubo invasión en 711?', 'La tesis de Olagüe y González Ferrín está rechazada por la práctica totalidad de arabistas y medievalistas.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ausencia de fuentes escritas', false, 0),
  ('La arqueología, las monedas bilingües acuñadas ya en 716 y las crónicas latinas y árabes contemporáneas', true, 1),
  ('Los estatutos de limpieza de sangre', false, 2),
  ('Las capitulaciones de Granada de 1491', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué grupo constituía la mayoría de la población musulmana de al-Ándalus?', 'Los árabes fueron siempre una minoría dominante, además dividida en facciones tribales. La conversión de la población local fue progresiva.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los árabes', false, 0),
  ('Los muladíes, hispanos convertidos al islam', true, 1),
  ('Los bereberes', false, 2),
  ('Los mozárabes', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué fue significativo que Abd al-Rahman III se proclamara califa en 929?', 'El título de califa no era solo político: implicaba la jefatura de la comunidad de creyentes, hasta entonces reivindicada desde Oriente.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque unificó la península entera', false, 0),
  ('Porque reclamaba la autoridad religiosa suprema frente a Bagdad y frente a los fatimíes de El Cairo', true, 1),
  ('Porque abolió el impuesto a los cristianos', false, 2),
  ('Porque trasladó la capital a Sevilla', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué eran las parias y qué consecuencia tuvieron?', 'La lógica dominante no era la cruzada, sino la extracción de recursos: un taifa vivo y tributario valía más que uno conquistado.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Impuestos pagados por los mozárabes al emir; financiaron las mezquitas', false, 0),
  ('Tributos en oro de las taifas a los reinos cristianos; financiaron iglesias, el Camino de Santiago y los ejércitos que después las conquistarían', true, 1),
  ('Tasas comerciales del puerto de Almería', false, 2),
  ('Rentas señoriales de los mudéjares aragoneses', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la trayectoria del Cid resulta reveladora?', 'El personaje convertido en símbolo de la Reconquista pasó buena parte de su carrera al servicio de un taifa. Las alianzas cruzadas eran la norma, no la excepción.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque nunca combatió contra musulmanes', false, 0),
  ('Porque, desterrado por Alfonso VI, sirvió al rey musulmán de Zaragoza y combatió contra cristianos', true, 1),
  ('Porque fue el primer rey de Valencia', false, 2),
  ('Porque rechazó siempre las alianzas con taifas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo la intervención almorávide y almohade?', 'Tanto Averroes como Maimónides sufrieron persecución o exilio bajo los almohades: el esplendor cultural andalusí no fue continuo ni uniformemente tolerante.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Restauró la tolerancia hacia mozárabes y judíos', false, 0),
  ('Impuso un rigorismo religioso que endureció la situación de las minorías y elevó la temperatura ideológica del conflicto', true, 1),
  ('Unificó definitivamente al-Ándalus con el Magreb sin resistencia', false, 2),
  ('Provocó el fin inmediato del dominio musulmán', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia social tuvo el modelo de repoblación por donadíos en Andalucía y Extremadura?', 'En el Duero, la presura generó campesinado libre; al sur del Tajo, concejos con grandes términos; en Andalucía, grandes donaciones a nobleza y órdenes militares.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una sociedad de pequeños propietarios libres', false, 0),
  ('La creación del latifundio, que marcaría la estructura agraria del sur hasta el siglo XX', true, 1),
  ('La desaparición de la nobleza', false, 2),
  ('El predominio de los concejos urbanos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué diferenciaba políticamente a la Corona de Aragón de Castilla?', 'Castilla desarrolló una monarquía más centralizada con Cortes menos capaces de limitarla. La diferencia pesó hasta los decretos de Nueva Planta de 1707-1716.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Aragón no tenía Cortes', false, 0),
  ('Aragón funcionaba como confederación con instituciones separadas y pactismo: el rey gobierna con el consentimiento del reino', true, 1),
  ('Castilla era una república', false, 2),
  ('Aragón no reconocía al rey como autoridad', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Nirenberg, ¿qué papel cumplía la violencia contra las minorías?', 'Por eso se prefiere hoy hablar de «coexistencia» o «conveniencia» antes que de convivencia: convivir porque conviene, no por tolerancia en sentido moderno.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Era una ruptura excepcional del orden social', false, 0),
  ('Formaba parte del funcionamiento ordinario del sistema y reafirmaba la jerarquía sin destruir la coexistencia', true, 1),
  ('No existió hasta 1492', false, 2),
  ('Se dirigía solo contra los mudéjares', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema nuevo generaron los pogromos de 1391?', 'Esa sospecha justificó la creación de la Inquisición castellana en 1478 y la difusión de los estatutos de limpieza de sangre.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La despoblación de las ciudades', false, 0),
  ('La aparición de un gran grupo de conversos cuya sinceridad religiosa se puso bajo sospecha permanente', true, 1),
  ('La expulsión inmediata de los judíos', false, 2),
  ('La conversión de los mudéjares', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué desplazamiento suponen los estatutos de limpieza de sangre?', 'Es un precedente histórico relevante de la discriminación por ascendencia, distinta de la persecución estrictamente religiosa.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('De la exclusión por linaje a la exclusión por fe', false, 0),
  ('De la exclusión por fe a la exclusión por linaje: un converso sincero de tercera generación seguía siendo sospechoso', true, 1),
  ('De la exclusión religiosa a la exclusión económica', false, 2),
  ('De la exclusión legal a la tolerancia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la principal objeción historiográfica al término «Reconquista»?', 'Además llama «re-conquista» a la ocupación de territorios que los conquistadores nunca habían poseído. El término se consolida en el siglo XIX y se endurece bajo el franquismo.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la expansión cristiana nunca ocurrió', false, 0),
  ('Que presupone una continuidad nacional inexistente y unifica ocho siglos heterogéneos en un proyecto único que nadie planificó', true, 1),
  ('Que fue inventado en el siglo XIII', false, 2),
  ('Que no aparece en ninguna crónica medieval', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué hay consenso pese al desacuerdo sobre la palabra «Reconquista»?', 'Las fases efectivas se concentran en el siglo XI tras la fitna, el XIII tras Las Navas y 1482-1492 para Granada.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En que hubo una guerra santa ininterrumpida de ochocientos años', false, 0),
  ('En rechazar ese relato: hubo largos periodos de estabilidad, alianzas cruzadas y tributos, con fases de conquista concentradas en momentos concretos', true, 1),
  ('En que no hubo conquistas cristianas', false, 2),
  ('En que el conflicto fue exclusivamente económico', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con lo pactado en las capitulaciones de Granada de 1491?', 'El mismo año 1492 el decreto de expulsión obligó a los judíos a convertirse o marchar; la diáspora sefardí conservó el judeoespañol durante siglos.', 3, true
  from public.topics where slug = 'andalus'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se cumplió íntegramente hasta 1609', false, 0),
  ('Garantizaban a los musulmanes granadinos su religión, pero se incumplieron en 1502', true, 1),
  ('Nunca incluyeron garantías religiosas', false, 2),
  ('Fueron anuladas por el papa en 1492', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se llamaban a sí mismos los llamados bizantinos?', 'El término «bizantino» lo acuñó Hieronymus Wolf en 1557. Su Estado era, sin interrupción, el Imperio romano, y los turcos llamaban Rum a Anatolia por ese motivo.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Helenos', false, 0),
  ('Rhomaioi, es decir, romanos', true, 1),
  ('Bizantinos', false, 2),
  ('Ortodoxos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función política tuvo negar a Constantinopla el nombre de «romana»?', 'A partir de la Ilustración se sumó el desprecio de Montesquieu y Gibbon, de donde procede el uso peyorativo del adjetivo «bizantino».', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Facilitar el comercio con Venecia', false, 0),
  ('Reservar la continuidad romana para Occidente, donde el Sacro Imperio reclamaba el título', true, 1),
  ('Distinguir el griego del latín', false, 2),
  ('Justificar la conquista otomana', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la obra más duradera del reinado de Justiniano?', 'El Digesto salvó fragmentos de juristas clásicos perdidos. Su redescubrimiento en Bolonia en el siglo XI fundó la ciencia jurídica europea.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La reconquista de Italia', false, 0),
  ('El Corpus Iuris Civilis, que ordenó mil años de jurisprudencia romana', true, 1),
  ('La construcción del muro de Anastasio', false, 2),
  ('La conversión de los eslavos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proporción de sus ingresos perdió Bizancio con las conquistas árabes del siglo VII?', 'Perdió Siria, Palestina, Egipto y el norte de África, sus provincias más ricas. La supervivencia exigió reconstruir por completo el Estado.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una quinta parte', false, 0),
  ('Aproximadamente tres cuartas partes', true, 1),
  ('Nada apreciable', false, 2),
  ('La mitad exacta', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistía el sistema de themas?', 'Redujo drásticamente el coste del ejército al eliminar la dependencia del salario en metálico, y ancló la defensa en la población local.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un impuesto sobre el comercio marítimo', false, 0),
  ('Circunscripciones bajo mando militar donde los soldados recibían tierras a cambio de servicio hereditario', true, 1),
  ('Una jerarquía de monasterios imperiales', false, 2),
  ('Un sistema de alianzas con los eslavos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué fueron decisivos los asedios árabes de Constantinopla de 674-678 y 717-718?', 'Las murallas teodosianas, la cadena del Cuerno de Oro y el fuego griego permitieron resistir. Es uno de los acontecimientos más consecuentes de la historia europea temprana.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque acabaron con el Imperio bizantino', false, 0),
  ('Porque detuvieron la expansión islámica hacia Europa oriental durante siglos', true, 1),
  ('Porque provocaron el cisma con Roma', false, 2),
  ('Porque destruyeron Santa Sofía', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era el argumento cristológico de los iconódulos?', 'Juan Damasceno añadió la distinción entre latría, adoración debida solo a Dios, y proskynesis, veneración dirigida al prototipo a través de la imagen.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las imágenes eran útiles para enseñar a los analfabetos', false, 0),
  ('Que si Dios se hizo carne, esa carne es representable, y negarlo equivale a negar la Encarnación', true, 1),
  ('Que los iconos tenían poder milagroso propio', false, 2),
  ('Que la Biblia ordenaba fabricar imágenes', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema de fuentes plantea el estudio de la iconoclasia?', 'El sesgo es sistemático: los vencedores conservaron su versión y eliminaron la contraria, lo que obliga a una cautela permanente.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que no se conserva ningún texto de la época', false, 0),
  ('Que los textos iconoclastas fueron destruidos y solo se conocen a través de las refutaciones de sus adversarios', true, 1),
  ('Que están escritos en latín', false, 2),
  ('Que fueron redactados en el siglo XIX', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se diferenció el modelo misionero bizantino del latino?', 'Cirilo y Metodio crearon el glagolítico, del que derivó el cirílico. Eso dio a los pueblos eslavos una cultura escrita propia.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En que no traducía las Escrituras', false, 0),
  ('En que aceptó la liturgia en lengua vernácula y creó un alfabeto para el eslavo', true, 1),
  ('En que evangelizaba por la fuerza', false, 2),
  ('En que exigía el celibato a los conversos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era la diferencia de fondo entre Roma y Constantinopla sobre la autoridad eclesiástica?', 'A eso se sumaban el Filioque, el celibato del clero latino y el pan ácimo. Los anatemas de 1054 fueron un episodio menor magnificado después.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: solo discutían sobre el calendario', false, 0),
  ('Roma reivindicaba primacía jurisdiccional universal; Constantinopla defendía la pentarquía con primacía romana solo de honor', true, 1),
  ('Constantinopla no reconocía al papa como obispo', false, 2),
  ('Roma rechazaba los concilios', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo irreversible la ruptura entre las Iglesias de Oriente y Occidente?', 'La destrucción de iglesias y la profanación de reliquias crearon un rencor que los intentos de unión de Lyon (1274) y Florencia (1439) nunca superaron.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los anatemas mutuos de 1054', false, 0),
  ('El saqueo de Constantinopla por la Cuarta Cruzada en 1204', true, 1),
  ('El concilio de Nicea', false, 2),
  ('La conversión de la Rus de Kiev', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia tuvo la derrota de Manzikert en 1071?', 'La recuperación comnena del siglo XII se apoyó en concesiones comerciales a Venecia y Génova que drenaron a largo plazo los ingresos aduaneros del Estado.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La pérdida de Egipto', false, 0),
  ('La apertura de Anatolia, principal reserva de reclutas e impuestos, a la ocupación turca', true, 1),
  ('La caída inmediata de Constantinopla', false, 2),
  ('El fin de la dinastía Comnena', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué significa la frase atribuida a un alto funcionario bizantino sobre el turbante y la tiara?', 'Resume la resistencia popular feroz a las uniones eclesiásticas, percibidas como sometimiento al papado más que como reconciliación.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que preferían aliarse con Venecia', false, 0),
  ('Que preferían la dominación otomana, que permitía conservar la fe, a la unión con Roma', true, 1),
  ('Que rechazaban toda religión', false, 2),
  ('Que apoyaban la conversión al islam', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué permitió a los otomanos derribar en 1453 unas murallas que habían resistido mil años?', 'Unos 7.000 defensores se enfrentaron a decenas de miles de sitiadores con cañones capaces de batir las murallas teodosianas. Constantino XI murió combatiendo.', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una traición desde el interior', false, 0),
  ('La artillería de asedio de gran calibre', true, 1),
  ('Un terremoto previo', false, 2),
  ('La retirada de la flota veneciana', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo la caída de Constantinopla sobre el Renacimiento?', 'También estimuló la búsqueda de rutas marítimas hacia Asia y permitió a Moscú reclamar la herencia ortodoxa como «tercera Roma».', 3, true
  from public.topics where slug = 'bizancio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno: fueron procesos independientes', false, 0),
  ('La emigración de eruditos griegos a Italia con sus manuscritos alimentó el humanismo', true, 1),
  ('Provocó el cierre de las universidades italianas', false, 2),
  ('Impuso el uso del griego en toda Europa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué rasgo del régimen del Nilo resultó más decisivo para la formación del Estado egipcio?', 'La regularidad del ciclo permitía anticipar cosechas, fijar impuestos antes de recogerlos y planificar la corvea. El Tigris y el Éufrates, más irregulares, no ofrecían esa base.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Su caudal absoluto', false, 0),
  ('Su predictibilidad estacional', true, 1),
  ('Su navegabilidad hasta el mar', false, 2),
  ('Su riqueza pesquera', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene la crítica de Karl Butzer a la tesis del «despotismo hidráulico» de Wittfogel?', 'Butzer invierte la causalidad: no fue el riego el que creó el Estado, sino un Estado ya formado el que amplió después los sistemas hidráulicos.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Egipto careció por completo de irrigación', false, 0),
  ('Que la irrigación fue de cuenca y local, y las grandes obras posteriores a la formación del Estado', true, 1),
  ('Que el riego lo gestionaban exclusivamente los templos', false, 2),
  ('Que la crecida hacía innecesaria cualquier obra hidráulica', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué documentan los papiros de Uadi al-Yarf?', 'El diario del inspector Merer, hallado en 2013, registra los viajes de su equipo desde las canteras de Tura. Es la documentación administrativa más antigua conservada en Egipto.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El ritual de coronación de Keops', false, 0),
  ('El diario logístico del transporte de caliza a Guiza', true, 1),
  ('El tratado con los hititas', false, 2),
  ('El censo de sacerdotes de Amón', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'La hereditariedad de los cargos de nomarca y la monumentalización de sus tumbas provinciales indican, sobre todo…', 'Cuando las élites provinciales se perpetúan y se entierran con lujo en sus nomos, están capturando recursos que antes fluían al centro. Es un indicador clásico de descentralización.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un aumento del poder faraónico', false, 0),
  ('Un retroceso del poder central', true, 1),
  ('La llegada de dinastías extranjeras', false, 2),
  ('Una reforma religiosa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué explica la concentración de la corvea en los meses de inundación?', 'La estacionalidad agraria liberaba trabajo justo cuando el transporte fluvial de bloques era además más fácil. El sistema aprovechaba ambos factores.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el calor impedía trabajar el resto del año', false, 0),
  ('Que el campo estaba anegado y la mano de obra agraria quedaba disponible', true, 1),
  ('Que los templos prohibían trabajar en la siembra', false, 2),
  ('Que las canteras solo eran accesibles con el río bajo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra la evidencia arqueológica del poblado de constructores de Guiza?', 'Las excavaciones de Lehner y Hawass documentan infraestructura de abastecimiento, jerarquías técnicas y atención médica en los restos óseos: equipos organizados, no esclavitud masiva.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Barracones de esclavos extranjeros', false, 0),
  ('Panaderías, cervecerías y consumo cárnico propios de trabajadores mantenidos por el Estado', true, 1),
  ('Que la pirámide se construyó con mano de obra militar cautiva', false, 2),
  ('Que el poblado se abandonó antes de terminar la obra', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué Deir el-Medina es un yacimiento excepcional?', 'La comunidad de artesanos del Valle de los Reyes dejó miles de textos ordinarios. En el año 29 de Ramsés III el retraso de las raciones provocó la primera huelga documentada.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque conserva el único templo solar completo', false, 0),
  ('Porque sus ostraca documentan la vida cotidiana: raciones, pleitos, enfermedades y una huelga', true, 1),
  ('Porque contiene la tumba intacta de un faraón', false, 2),
  ('Porque allí se halló la piedra de Rosetta', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proceso reflejan los Textos de las Pirámides, los Textos de los Sarcófagos y el Libro de los Muertos?', 'Es la llamada «democratización del más allá»: lo que en el Imperio Antiguo era prerrogativa real acaba circulando en copias comerciales con espacio para el nombre del comprador.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La sustitución del politeísmo por el monoteísmo', false, 0),
  ('La progresiva extensión del acceso al más allá desde el rey a la élite y a quien pudiera pagarlo', true, 1),
  ('El abandono de la momificación', false, 2),
  ('La centralización del culto en Karnak', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo describe hoy la egiptología mayoritaria la reforma de Akenatón?', 'Assmann y Hornung subrayan que el acceso a Atón pasaba por el propio rey, objeto de culto, y que no existen eslabones documentales que enlacen Amarna con el monoteísmo israelita.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como el primer monoteísmo, origen directo del judaísmo', false, 0),
  ('Como un exclusivismo cultual impuesto desde la corona, sin continuidad documental posterior', true, 1),
  ('Como una restauración del culto tradicional a Amón', false, 2),
  ('Como una invención de la historiografía del siglo XIX', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'El papiro Edwin Smith destaca porque…', 'Su estructura es clínica y llega a admitir casos intratables. La magia convivía con ese registro sin que sus autores percibieran contradicción.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Contiene solo ensalmos mágicos', false, 0),
  ('Ordena cuarenta y ocho casos de traumatismos con examen, diagnóstico y pronóstico', true, 1),
  ('Recoge el calendario de las crecidas', false, 2),
  ('Describe el proceso completo de momificación', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué desfase producía el calendario civil egipcio de 365 días?', 'Al no intercalar el día bisiesto, el año civil se desplazaba respecto al año solar. Los propios egipcios eran conscientes del desfase.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno: era exacto', false, 0),
  ('Un desplazamiento acumulativo por prescindir del cuarto de día sobrante', true, 1),
  ('Un adelanto de un mes por siglo por contar 13 meses', false, 2),
  ('Un retraso causado por los cinco días epagómenos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aportó Champollion en su Lettre à M. Dacier (1822)?', 'Frente a la tradición simbolista heredada de Horapolo, Champollion demostró el carácter mixto —fonético y semántico— de la escritura.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los jeroglíficos eran símbolos puramente conceptuales', false, 0),
  ('Que el sistema registraba a la vez sonidos y significados', true, 1),
  ('Que el egipcio derivaba del griego', false, 2),
  ('Que la piedra de Rosetta era una falsificación', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué revelan las cartas de Amarna sobre el sistema internacional del Bronce Final?', 'La correspondencia con Babilonia, Mitani, Hatti y los príncipes cananeos muestra protocolos estables entre «grandes reyes» y una red de vasallaje en Siria-Palestina.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Egipto no mantenía relaciones exteriores', false, 0),
  ('Que existía una diplomacia regulada en acadio, con matrimonios dinásticos e intercambio de regalos', true, 1),
  ('Que los hititas eran vasallos de Egipto', false, 2),
  ('Que el comercio se hacía solo por vía marítima', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el resultado real de la batalla de Qadesh?', 'La propaganda monumental de Ramsés II presenta una victoria personal, pero el desenlace fue un equilibrio que hacia 1259 a. C. se formalizó en un tratado conservado en ambas versiones.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Victoria egipcia decisiva, como afirman los relieves de Ramsés II', false, 0),
  ('Un empate estratégico que desembocó en un tratado con Hattusili III', true, 1),
  ('La conquista hitita del delta', false, 2),
  ('La pérdida egipcia de Nubia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia interna tuvo para Egipto el colapso del Bronce Final?', 'Egipto resistió las incursiones de los Pueblos del Mar, pero salió debilitado: inflación del grano documentada y un clero tebano que acabó gobernando de hecho el sur.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La desaparición inmediata del Estado egipcio', false, 0),
  ('La pérdida de las posesiones asiáticas y la creciente autonomía del sacerdocio de Amón', true, 1),
  ('La adopción del alfabeto fenicio como escritura oficial', false, 2),
  ('El traslado definitivo de la capital a Alejandría', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué estatuto tuvo Egipto tras la anexión de 30 a. C.?', 'Por su valor estratégico como granero, Augusto la reservó a su control personal mediante un prefecto de rango ecuestre, y vetó el acceso de senadores sin permiso imperial.', 3, true
  from public.topics where slug = 'egipto'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Provincia senatorial ordinaria', false, 0),
  ('Provincia de estatuto singular administrada directamente por el emperador', true, 1),
  ('Reino cliente con dinastía propia', false, 2),
  ('Territorio libre de impuestos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proceso describe mejor el origen del orden feudal?', 'Nadie lo inventó: se formó por acumulación de soluciones locales al mismo problema, la ausencia de una autoridad capaz de garantizar defensa y justicia.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un sistema diseñado y proclamado por Carlomagno', false, 0),
  ('La privatización de funciones públicas —justicia, moneda, peajes— tras el colapso del poder carolingio', true, 1),
  ('Una imposición de la Iglesia sobre los reyes', false, 2),
  ('La adopción del derecho romano por los señores', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era el ban?', 'El castillo delimitaba el ámbito donde ese poder se ejercía. Duby llamó «encastillamiento» a la multiplicación de fortificaciones privadas de los siglos X y XI.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un impuesto sobre el comercio', false, 0),
  ('El poder de mandar, juzgar y castigar, que en teoría emanaba del rey y en la práctica ejercía cada señor', true, 1),
  ('La ceremonia del homenaje', false, 2),
  ('El juramento de los cruzados', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué debía el vasallo a su señor?', 'Las contribuciones tasadas incluían el rescate del señor cautivo, el armamento de su hijo mayor y el matrimonio de su hija mayor. El señor debía protección y justicia.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Solo el pago de una renta anual en dinero', false, 0),
  ('Auxilium y consilium: ayuda militar y consejo, más contribuciones económicas en casos tasados', true, 1),
  ('Trabajo agrícola en la reserva señorial', false, 2),
  ('Obediencia religiosa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se creó la figura del homenaje ligio?', 'El problema nunca se resolvió del todo: que el rey de Inglaterra fuera vasallo del de Francia por sus tierras continentales está en el origen de la Guerra de los Cien Años.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Para permitir que las mujeres prestaran homenaje', false, 0),
  ('Para establecer una fidelidad prioritaria cuando un noble era vasallo de varios señores enfrentados', true, 1),
  ('Para eximir del servicio militar', false, 2),
  ('Para vincular directamente al campesinado con el rey', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es problemática la imagen de la «pirámide feudal»?', 'Durante largos periodos el rey fue un señor más entre otros, a menudo menos poderoso que sus supuestos vasallos.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque el rey no existía en la Edad Media', false, 0),
  ('Porque procede de los manuales del siglo XIX: los vínculos reales eran múltiples, contradictorios y frecuentemente incumplidos', true, 1),
  ('Porque los campesinos ocupaban la cúspide', false, 2),
  ('Porque solo se aplicaba en Inglaterra', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué eran las banalidades?', 'Muestran bien qué era el poder señorial: no solo cobrar renta por la tierra, sino monopolizar servicios imprescindibles y cobrar por su uso forzoso.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Impuestos pagados por los nobles al rey', false, 0),
  ('Monopolios señoriales de molino, horno y lagar, de uso obligatorio y de pago', true, 1),
  ('Fiestas religiosas del calendario agrícola', false, 2),
  ('Tierras comunales de la aldea', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinguía a un siervo de un campesino libre?', 'La esclavitud antigua desapareció progresivamente, sustituida por estas formas de dependencia. El campesino libre seguía sujeto a la jurisdicción señorial.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El siervo no podía trabajar la tierra', false, 0),
  ('El siervo estaba adscrito a la tierra, con restricciones al matrimonio y derechos sobre su sucesión', true, 1),
  ('El campesino libre no pagaba renta alguna', false, 2),
  ('El siervo era propiedad personal vendible, como el esclavo antiguo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué evidencia contradice la imagen de un campesinado pasivo?', 'Las comunidades rurales tenían asambleas, gestionaban pastos, bosques y aguas, y negociaban con el señor como cuerpo colectivo.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ausencia de documentación rural', false, 0),
  ('Pleitos ante la corte señorial, negociación de cartas de franquicia, fugas y revueltas abiertas', true, 1),
  ('La inexistencia de comunidades rurales', false, 2),
  ('La prohibición de los bienes comunales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué innovaciones técnicas impulsaron el crecimiento agrario desde el siglo XI?', 'La collera rígida multiplicaba la fuerza de tiro del caballo sin ahogarlo. El aumento de rendimientos permitió crecimiento demográfico, roturaciones y ciudades nuevas.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El arado romano y la rotación bienal', false, 0),
  ('Arado pesado de vertedera, collera rígida, rotación trienal y molinos hidráulicos', true, 1),
  ('El regadío por inundación y la noria', false, 2),
  ('La siembra a voleo y el barbecho permanente', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Duby, ¿qué función cumplía el esquema de los tres órdenes?', 'Se repitió durante ochocientos años y todavía estructuraba el discurso del Antiguo Régimen en 1789. Su eficacia fue política, no descriptiva.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Describir con precisión la sociedad de su tiempo', false, 0),
  ('Justificar ideológicamente que unos trabajen para que otros combatan y recen, precisamente cuando el orden se cuestiona', true, 1),
  ('Organizar la administración carolingia', false, 2),
  ('Regular las relaciones vasalláticas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia de largo alcance tuvo la Querella de las Investiduras?', 'El Concordato de Worms (1122) distinguió investidura espiritual y temporal. Varios historiadores del derecho lo consideran un origen remoto de la separación Iglesia-Estado.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La desaparición del papado', false, 0),
  ('Separar explícitamente la esfera religiosa de la política, creando condiciones para pensar el poder secular como autónomo', true, 1),
  ('La conversión de los reyes en obispos', false, 2),
  ('La abolición del vasallaje', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el origen de la palabra «feudalismo»?', 'Nació como categoría polémica antes que como concepto analítico. En 1789 la Asamblea francesa abolió «el régimen feudal», agrupando bajo esa etiqueta realidades muy distintas.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Es un término medieval usado por los propios señores', false, 0),
  ('Se acuñó en el siglo XVII y se generalizó en el XVIII con sentido peyorativo, para designar privilegios que había que abolir', true, 1),
  ('Procede del derecho romano justinianeo', false, 2),
  ('Lo inventó Marc Bloch en 1939', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene Susan Reynolds en Fiefs and Vassals?', 'La documentación muestra usos dispares de «feudo», homenajes sin concesión de tierra y relaciones mucho más locales y variadas que el modelo de los manuales.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el feudalismo fue más rígido de lo que se creía', false, 0),
  ('Que las categorías de feudo y vasallaje fueron sistematizadas por juristas del siglo XII y proyectadas hacia atrás', true, 1),
  ('Que el vasallaje nunca existió en ninguna forma', false, 2),
  ('Que el feudalismo se originó en Bizancio', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeta Barthélemy a la tesis de la «mutación del año mil»?', 'Se pasa de actas públicas a cartularios monásticos. Hoy se acepta una transformación real pero más lenta y con cronologías muy distintas según regiones.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el cambio fue aún más brusco de lo descrito', false, 0),
  ('Que la impresión de ruptura procede del cambio en el tipo de documentos conservados, no en la realidad social', true, 1),
  ('Que no hubo ningún cambio en el poder local', false, 2),
  ('Que la mutación ocurrió en el siglo XIII', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvo la recuperación del derecho romano en el fin del orden feudal?', 'Los juristas formados en Bolonia y en las universidades se convirtieron en el instrumento del Estado en construcción frente a los poderes señoriales.', 3, true
  from public.topics where slug = 'feudalismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Reforzó la fragmentación jurisdiccional', false, 0),
  ('Dio a los monarcas conceptos —soberanía, ley general, autoridad pública— para combatir la fragmentación', true, 1),
  ('Prohibió la propiedad de la tierra', false, 2),
  ('Eliminó las universidades', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué es exactamente una polis?', 'Aristóteles insiste en que la polis es un cuerpo político, no un lugar. Por eso las fuentes dicen «los atenienses» y no «Atenas» al referirse a decisiones.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una ciudad amurallada de gran tamaño', false, 0),
  ('Una comunidad de ciudadanos con territorio, cultos e instituciones propias', true, 1),
  ('Una provincia del Imperio persa', false, 2),
  ('Una alianza militar entre aldeas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la aportación griega al alfabeto fenicio?', 'Un sistema de unas veinticuatro letras se aprende en semanas. Eso permitió exponer las leyes por escrito y que cualquiera pudiera verificarlas.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Reducirlo a doce signos', false, 0),
  ('Asignar signos a las vocales, lo que abarató enormemente la alfabetización', true, 1),
  ('Escribirlo sobre arcilla', false, 2),
  ('Añadir determinativos semánticos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se diferenciaban las colonias griegas del colonialismo moderno?', 'La colonia mantenía vínculos religiosos y sentimentales con su metrópolis, pero no dependencia política. Su causa principal fue la escasez de tierra cultivable.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En que no comerciaban con la metrópolis', false, 0),
  ('En que cada colonia era desde su fundación una polis independiente, no una posesión', true, 1),
  ('En que estaban gobernadas por Persia', false, 2),
  ('En que solo se fundaron en Asia Menor', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué estableció la seisachtheia de Solón?', 'Fue una reforma censitaria, no democrática: organizó la participación según la renta agraria. Pero rompió el monopolio político del linaje.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El sorteo de los cargos públicos', false, 0),
  ('La cancelación de deudas y la prohibición de esclavizar a ciudadanos atenienses por deudas', true, 1),
  ('La expulsión de los metecos', false, 2),
  ('La creación de la Liga de Delos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el objetivo de la reorganización en diez tribus de Clístenes?', 'Cada tribu combinaba demos de costa, ciudad e interior. La unidad política pasó a ser el demo de residencia y los ciudadanos se identificaban por su demótico.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Facilitar el reclutamiento naval', false, 0),
  ('Romper las lealtades de parentesco y regionales mezclando demos de zonas distintas', true, 1),
  ('Reducir el número de ciudadanos', false, 2),
  ('Repartir la tierra de forma igualitaria', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué los griegos consideraban el sorteo más democrático que la elección?', 'La elección se veía como procedimiento aristocrático. Solo los cargos técnicos, como la estrategia militar, se cubrían por votación; y desde ahí gobernó Pericles.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque era más barato de organizar', false, 0),
  ('Porque garantizaba igualdad efectiva de acceso, mientras la elección favorece a los notables', true, 1),
  ('Porque lo exigían los oráculos', false, 2),
  ('Porque impedía la reelección', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proporción aproximada de la población del Ática tenía derechos políticos?', 'Entre 30.000 y 60.000 ciudadanos varones sobre 250.000-300.000 habitantes. Quedaban excluidos mujeres, metecos y esclavos.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Alrededor del 50 %', false, 0),
  ('Entre el 10 % y el 20 %', true, 1),
  ('Más del 70 %', false, 2),
  ('Menos del 1 %', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo la misthophoría introducida por Pericles?', 'Sin retribución solo los acomodados podían dedicar días a la política. Aristóteles señala esta medida como la que hizo real la participación popular.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Limitó los cargos a los propietarios', false, 0),
  ('Hizo viable que los ciudadanos pobres ejercieran cargos y actuaran como jurados', true, 1),
  ('Sustituyó el sorteo por la elección', false, 2),
  ('Financió la construcción del Partenón', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era el ostracismo?', 'Funcionaba como válvula contra la concentración de poder personal. Se votaba con fragmentos de cerámica, los ostraka.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una pena de muerte por traición', false, 0),
  ('Un destierro preventivo de diez años, sin delito y sin pérdida de bienes', true, 1),
  ('La confiscación de la propiedad de los metecos', false, 2),
  ('La expulsión de una polis de la Liga de Delos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era la kryptéia espartana?', 'Los hilotas superaban ampliamente en número a los espartiatas. El sistema exigía represión permanente; los éforos les declaraban formalmente la guerra cada año.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una escuela de retórica', false, 0),
  ('El envío de jóvenes espartiatas a eliminar selectivamente a hilotas destacados', true, 1),
  ('La asamblea de los éforos', false, 2),
  ('Un festival religioso anual', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué causa profunda del declive espartano señalan los historiadores?', 'La concentración de lotes de tierra redujo el cuerpo cívico. Leuctra (371 a. C.) y la liberación de Mesenia liquidaron después su base económica.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La corrupción moral de sus reyes', false, 0),
  ('El desplome demográfico de los espartiatas de pleno derecho, de unos 8.000 a poco más de mil', true, 1),
  ('La pérdida de su flota en Salamina', false, 2),
  ('La conversión al culto de Atenea', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinción metodológica introduce Tucídides al explicar la guerra del Peloponeso?', 'Es una de las aportaciones fundacionales de la historiografía: separar lo que desencadena un conflicto de lo que lo hace probable.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Entre fuentes escritas y orales', false, 0),
  ('Entre la causa profunda —el crecimiento del poder ateniense y el miedo espartano— y los pretextos inmediatos', true, 1),
  ('Entre historia sagrada y profana', false, 2),
  ('Entre guerra justa e injusta', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué argumento ponen los atenienses en el diálogo de Melos?', 'Es el texto clásico sobre la lógica del poder desnudo, y precede al exterminio de una ciudad que solo pedía permanecer neutral.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la guerra debe seguir reglas religiosas', false, 0),
  ('Que los fuertes hacen lo que pueden y los débiles sufren lo que deben', true, 1),
  ('Que la neutralidad debe respetarse siempre', false, 2),
  ('Que Esparta era la verdadera agresora', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué permitió cuestionar la distinción sofística entre physis y nomos?', 'Esa distinción abrió la posibilidad de criticar el orden establecido como acuerdo y no como orden natural. Protágoras la llevó al relativismo.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los dioses existieran', false, 0),
  ('Si las leyes vigentes son naturales o meras convenciones humanas modificables', true, 1),
  ('Si la tierra era esférica', false, 2),
  ('Si la guerra era inevitable', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se considera problemática la genealogía «Grecia, cuna de la democracia occidental»?', 'Además, la transmisión de los textos griegos pasó decisivamente por el árabe y por Bizancio. Lo verdaderamente inédito fue la práctica de deliberar públicamente sobre reglas modificables.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque Atenas nunca tuvo instituciones democráticas', false, 0),
  ('Porque la democracia ateniense era directa, sorteada, excluyente y esclavista, y la continuidad es una construcción del siglo XIX', true, 1),
  ('Porque los textos griegos se perdieron por completo', false, 2),
  ('Porque Grecia no influyó en Roma', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué revela que Atenas financiara comedias que atacaban a sus propios dirigentes?', 'La coregía obligaba a los ricos a costear las representaciones. Que una democracia financiara su propia crítica más feroz es un dato notable sobre el sistema.', 3, true
  from public.topics where slug = 'grecia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el teatro era privado y clandestino', false, 0),
  ('Que la crítica política formaba parte de una institución cívica financiada por ciudadanos ricos', true, 1),
  ('Que Aristófanes era extranjero', false, 2),
  ('Que la democracia había sido abolida', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué acontecimiento marca el año 1 del calendario islámico y por qué?', 'Que el calendario empiece en la hégira y no en la primera revelación indica qué se consideró el acontecimiento fundacional: la constitución de la umma como comunidad política.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El inicio de la revelación en 610, por su carácter fundacional religioso', false, 0),
  ('La hégira de 622, porque marca la fundación de una comunidad política en Medina', true, 1),
  ('La toma de La Meca en 630', false, 2),
  ('La muerte de Mahoma en 632', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué contexto geopolítico favoreció la expansión árabe?', 'Veintiséis años de guerra dejaron a ambos imperios sin reservas y con sus sistemas clientelares en el norte de Arabia desarticulados.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La alianza entre Bizancio y Persia', false, 0),
  ('El agotamiento mutuo de Bizancio y Persia tras la guerra de 602-628', true, 1),
  ('La ausencia de ejércitos en Oriente Próximo', false, 2),
  ('El apoyo militar chino', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la aportación política del islam a la sociedad tribal árabe?', 'La lealtad dejó de organizarse solo por linajes. Esa unificación canalizó hacia el exterior una energía militar antes consumida en conflictos internos.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La creación de una monarquía hereditaria', false, 0),
  ('Sustituir el vínculo de parentesco por la umma, comunidad de creyentes', true, 1),
  ('La abolición del comercio', false, 2),
  ('La imposición del arameo como lengua común', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema metodológico plantean las fuentes sobre la vida de Mahoma?', 'La propia tradición islámica desarrolló el análisis del isnad, la cadena de transmisores, como ciencia crítica para evaluar su fiabilidad.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que están escritas en persa', false, 0),
  ('Que la sira y los hadices se compilaron entre siglo y medio y dos siglos después de los hechos', true, 1),
  ('Que no existe ninguna fuente escrita', false, 2),
  ('Que fueron redactadas en el siglo XIX', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué evidencia debilitó las tesis revisionistas radicales sobre la formación tardía del Corán?', 'Apuntan a un texto estable muy temprano. Hoy se distingue entre el Corán, antiguo y coherente, y los relatos biográficos posteriores, que exigen cautela.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las crónicas bizantinas', false, 0),
  ('Los manuscritos de Saná y las dataciones por radiocarbono de folios coránicos muy tempranos', true, 1),
  ('Las inscripciones de la Kaaba', false, 2),
  ('Los archivos otomanos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Bulliet, ¿cuándo alcanzaron mayoría musulmana las poblaciones conquistadas?', 'La reconstrucción a partir de la onomástica muestra conversiones lentas. Además, la conversión reducía los ingresos por yizia, así que los omeyas no la fomentaron.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Inmediatamente tras la conquista', false, 0),
  ('En los siglos IX o X, doscientos o trescientos años después', true, 1),
  ('Nunca la alcanzaron', false, 2),
  ('En el siglo XV', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué implicaba el estatuto de dhimmi?', 'Era subordinación jurídica, no igualdad, pero suponía una tolerancia práctica muy superior a la contemporánea en la Europa cristiana.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La conversión forzosa al islam', false, 0),
  ('Libertad de culto y autonomía jurídica a cambio del impuesto de capitación, en régimen de subordinación legal', true, 1),
  ('La expulsión del territorio', false, 2),
  ('La igualdad plena con los musulmanes', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo valora hoy la historiografía la batalla de Poitiers de 732?', 'El repliegue musulmán del sur de Francia respondió más a problemas internos —la revolución abasí se acercaba— que a esa derrota concreta.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como la batalla que salvó a Europa del islam', false, 0),
  ('Probablemente como la derrota de una expedición de saqueo, magnificada por la historiografía francesa del siglo XIX', true, 1),
  ('Como una victoria musulmana', false, 2),
  ('Como un episodio inventado', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el origen de la división entre suníes y chiíes?', 'Mahoma no dejó procedimiento de sucesión establecido. Los partidarios de Alí defendían la línea familiar del Profeta; los suníes, la legitimidad de los califas efectivos.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una disputa sobre el texto del Corán', false, 0),
  ('La cuestión de quién debía dirigir la comunidad tras la muerte del Profeta', true, 1),
  ('El desacuerdo sobre la fecha del Ramadán', false, 2),
  ('La invasión mongola', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué convirtió la disputa sucesoria en identidad religiosa duradera?', 'Kerbala es el centro emocional del chiismo. Conviene no proyectar sobre el pasado los alineamientos sectarios contemporáneos, que responden a la política del siglo XX.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La fundación de Bagdad', false, 0),
  ('La muerte de Husayn en Kerbala en 680, conmemorada anualmente en la Ashura', true, 1),
  ('La conquista de al-Ándalus', false, 2),
  ('La traducción de Aristóteles', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué cambio social trajo la revolución abasí de 750?', 'La administración adoptó modelos persas y el Estado se burocratizó. La capital pasó de Damasco a Bagdad, fundada en 762.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La expulsión de los persas de la administración', false, 0),
  ('La integración de los mawali, musulmanes no árabes, cuya marginación bajo los omeyas había alimentado la revuelta', true, 1),
  ('La abolición del califato', false, 2),
  ('El retorno de la capital a La Meca', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Dimitri Gutas, ¿qué fue el movimiento de traducción abasí?', 'Cristianos nestorianos, judíos y zoroastrianos participaron de forma central como traductores. No fue conservación pasiva, sino ampliación crítica.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una iniciativa privada de eruditos aislados', false, 0),
  ('Una política de Estado sostenida durante dos siglos con demanda social real', true, 1),
  ('Una consecuencia accidental de la conquista de Egipto', false, 2),
  ('Un proyecto exclusivamente religioso', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aportó Ibn al-Haytham (Alhacén)?', 'Al-Juarismi sistematizó el álgebra, Avicena escribió el Canon e Ibn Jaldún formuló la asabiyya. Alhacén estableció bases experimentales de la óptica.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La sistematización del álgebra', false, 0),
  ('La refutación de la teoría de la visión por emisión y un método experimental riguroso en óptica', true, 1),
  ('El Canon de medicina', false, 2),
  ('La teoría de la asabiyya', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué está desacreditada la tesis de que al-Ghazali causó el declive científico islámico?', 'Hoy se investiga por qué no se dio el paso institucional europeo del siglo XVII, con explicaciones centradas en financiación, universidades e imprenta.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque al-Ghazali nunca criticó a los filósofos', false, 0),
  ('Porque la producción científica continuó siglos: Maragha en el siglo XIII desarrolló modelos que reaparecen en Copérnico', true, 1),
  ('Porque no hubo ciencia islámica antes del siglo XIII', false, 2),
  ('Porque el iytihad nunca se cerró en ninguna escuela', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvo Toledo tras 1085 en la historia intelectual europea?', 'Gerardo de Cremona y otros trabajaron con frecuencia a través de intermediarios judíos y mozárabes. El relato del «redescubrimiento» renacentista suele omitir este eslabón.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue la capital del califato de Córdoba', false, 0),
  ('Fue el principal centro de traducción del árabe al latín: Ptolomeo, Aristóteles con Averroes, Avicena, álgebra y óptica', true, 1),
  ('Allí se fundó la primera universidad europea', false, 2),
  ('Fue el puerto del comercio de especias', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué tecnología llegó al mundo islámico tras la batalla de Talas (751)?', 'Su difusión abarató drásticamente la producción de libros en el mundo islámico, siglos antes de que ocurriera lo mismo en Europa.', 3, true
  from public.topics where slug = 'islam'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La pólvora', false, 0),
  ('El papel', true, 1),
  ('La imprenta de tipos móviles', false, 2),
  ('La brújula', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la agricultura mesopotámica exigía más intervención humana que la egipcia?', 'El calendario del Tigris y el Éufrates no encajaba con el ciclo del cereal, así que hacían falta canales, diques y drenaje activo.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque no llovía nunca', false, 0),
  ('Porque la crecida era brusca, impredecible y llegaba con el cereal ya en el campo', true, 1),
  ('Porque los suelos eran estériles', false, 2),
  ('Porque no disponían de arado', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué revela el paso del trigo a la cebada en los archivos del sur entre 2400 y 1700 a. C.?', 'La cebada tolera mejor la sal. Jacobsen y Adams vincularon en 1958 este desplazamiento y la caída de rendimientos con la degradación del suelo.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un cambio de gustos alimentarios', false, 0),
  ('Una salinización progresiva de los suelos irrigados', true, 1),
  ('La llegada de nuevos cultivos desde la India', false, 2),
  ('Una prohibición religiosa del trigo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Schmandt-Besserat, ¿cuál fue el origen de la escritura?', 'Las primeras tablillas de Uruk son documentos económicos. La escritura nace como tecnología de gestión; la literatura llega siglos después.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La necesidad de registrar poemas religiosos', false, 0),
  ('La contabilidad: fichas de arcilla guardadas en bullae cuyas marcas externas acabaron sustituyendo al contenido', true, 1),
  ('La correspondencia diplomática', false, 2),
  ('La necesidad de escribir leyes', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué disponemos de archivos mesopotámicos tan completos?', 'La destrucción por fuego, ruinosa para el edificio, fue una suerte documental: los archivos de Ur III suman más de cien mil tablillas.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque se escribían en pergamino tratado', false, 0),
  ('Porque la arcilla se cocía en los incendios y se conservaba mejor', true, 1),
  ('Porque se copiaron en época romana', false, 2),
  ('Porque se guardaban en tumbas selladas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción decisiva se plantea a leer el Código de Hammurabi como derecho vigente?', 'Kraus y Bottéro propusieron por eso leerlo como monumento ideológico y colección de precedentes ejemplares, no como código aplicable.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la estela está incompleta', false, 0),
  ('Que los documentos judiciales de la época casi nunca lo citan y a veces resuelven en sentido contrario', true, 1),
  ('Que fue escrito en sumerio, lengua ya muerta', false, 2),
  ('Que se descubrió fuera de Mesopotamia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué eran las proclamaciones de misharum?', 'Evitaban que el endeudamiento y la esclavitud por deudas privaran al Estado de contribuyentes y de reclutas. Eran una medida de estabilidad fiscal, no de caridad.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Campañas militares anuales', false, 0),
  ('Cancelaciones generales de deudas decretadas por el rey', true, 1),
  ('Censos de población', false, 2),
  ('Fiestas de año nuevo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró Diakonoff frente al modelo de «ciudad-templo» de Deimel?', 'El modelo hoy aceptado es pluralista: templo, palacio y sector privado conviven en proporciones variables según la época y la ciudad.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los templos no existían', false, 0),
  ('Que los archivos de Lagash correspondían a un solo templo y coexistían tierra comunal y propiedad privada', true, 1),
  ('Que toda la tierra era del rey', false, 2),
  ('Que la economía era plenamente capitalista', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué documenta el archivo de los mercaderes asirios de Kanesh?', 'Es el argumento empírico más citado contra la tesis sustantivista de Polanyi sobre la ausencia de mercados en el mundo antiguo.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un sistema económico sin precios ni crédito', false, 0),
  ('Sociedades mercantiles, créditos, intereses y arbitraje de precios entre Assur y Anatolia', true, 1),
  ('La conquista de Anatolia por Sargón', false, 2),
  ('La construcción de la ziggurat de Ur', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué innovación política representa el imperio de Sargón de Acad?', 'Sargón somete las ciudades sumerias e impone una estructura supraurbana. Su hija Enheduanna, sacerdotisa en Ur, es la primera autora conocida por su nombre.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La primera ciudad-Estado', false, 0),
  ('El primer imperio territorial: gobernadores designados, guarniciones y lengua administrativa común', true, 1),
  ('La primera democracia', false, 2),
  ('La primera federación de templos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función administrativa tenían las deportaciones neoasirias?', 'La política afectó a varios millones de personas en tres siglos y combinaba disuasión mediante el terror con una lógica de gestión de recursos humanos.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: eran castigos arbitrarios', false, 0),
  ('Desarraigar élites locales, romper solidaridades y reasentar mano de obra donde se necesitaba', true, 1),
  ('Repoblar el desierto', false, 2),
  ('Financiar el ejército mediante rescates', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué legado numérico mesopotámico seguimos utilizando?', 'La base 60 sobrevive en la medida del tiempo y de los ángulos. La tablilla Plimpton 322 recoge además ternas pitagóricas mucho antes de Pitágoras.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El sistema decimal', false, 0),
  ('El sistema sexagesimal: minutos, segundos y grados', true, 1),
  ('La numeración romana', false, 2),
  ('El cero posicional', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo presenta el Cilindro de Ciro la conquista de Babilonia en 539 a. C.?', 'Es propaganda dirigida a la élite sacerdotal local: legitima al conquistador presentándolo como restaurador del orden religioso tradicional.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como una masacre ejemplar', false, 0),
  ('Como una restauración del culto de Marduk frente a un rey impío', true, 1),
  ('Como una anexión pactada con Egipto', false, 2),
  ('Como una victoria de los dioses persas sobre los babilonios', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué Mesopotamia dependió estructuralmente del comercio de larga distancia?', 'Madera del Líbano, cobre de Omán, lapislázuli de Afganistán, cornalina del Indo: el control de rutas se convirtió en un asunto de Estado.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque su población era demasiado grande para autoabastecerse de grano', false, 0),
  ('Porque la llanura aluvial carece de piedra, madera y metales', true, 1),
  ('Porque prohibía la artesanía local', false, 2),
  ('Porque su moneda solo era aceptada en el extranjero', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvo la inscripción de Behistún?', 'Rawlinson copió el texto de Darío I grabado en un acantilado. El persa antiguo, más simple, abrió la puerta al elamita y al acadio.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue el primer código legal conocido', false, 0),
  ('Su versión trilingüe permitió descifrar el cuneiforme, como la piedra de Rosetta con los jeroglíficos', true, 1),
  ('Contiene la Epopeya de Gilgamesh', false, 2),
  ('Registra el censo del imperio asirio', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinción social establece el Código de Hammurabi?', 'La misma agresión tiene consecuencias distintas según a quién se cometa. El talión convive con la compensación económica según el estatus de la víctima.', 3, true
  from public.topics where slug = 'mesopotamia'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: todos eran iguales ante la ley', false, 0),
  ('Awilum, mushkenum y wardum, con penas diferenciadas según el estatus', true, 1),
  ('Solo entre hombres y mujeres', false, 2),
  ('Solo entre sacerdotes y laicos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se critica el criterio de la escritura como frontera de la prehistoria?', 'La prehistoria termina en fechas muy distintas según la región. Muchos autores prefieren hablar de «sociedades sin escritura» o usar directamente secuencias arqueológicas.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque la escritura no puede datarse', false, 0),
  ('Porque es relativo y hace del alfabetismo el requisito para «entrar en la historia», con sesgo eurocéntrico', true, 1),
  ('Porque ninguna sociedad antigua escribió', false, 2),
  ('Porque la arqueología no estudia textos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué implican las herramientas de Lomekwi, de 3,3 millones de años?', 'Rompen la ecuación entre fabricar herramientas y pertenecer al género Homo, y obligan a separar rasgos que antes se presentaban como un paquete.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Homo sapiens es más antiguo de lo que se creía', false, 0),
  ('Que la fabricación de útiles es anterior al género Homo', true, 1),
  ('Que los australopitecos usaban fuego', false, 2),
  ('Que el bipedismo apareció después que la talla', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proporción del genoma de los humanos actuales no africanos es de origen neandertal?', 'El mestizaje quedó demostrado con la secuenciación del genoma neandertal en 2010. Los neandertales no se extinguieron sin dejar descendencia genética.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna', false, 0),
  ('Entre el 1 % y el 2 %', true, 1),
  ('En torno al 15 %', false, 2),
  ('Más del 30 %', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra la paleopatología al comparar los primeros agricultores con los cazadores-recolectores previos?', 'La agricultura aumentó la capacidad de carga demográfica, pero empeoró la dieta media y la salud individual. De ahí la provocación de Diamond sobre «el peor error» de la especie.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Mayor estatura y mejor dentadura en los agricultores', false, 0),
  ('Menor estatura, más caries, más anemia y más marcadores de estrés en los agricultores', true, 1),
  ('Ninguna diferencia apreciable', false, 2),
  ('Menor mortalidad infantil en los agricultores', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué Göbekli Tepe obligó a revisar las explicaciones de la neolitización?', 'Invierte la secuencia esperada: la construcción monumental precede a la economía agrícola, lo que apoya explicaciones que dan primacía al cambio simbólico.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque es el primer poblado agrícola conocido', false, 0),
  ('Porque es monumental y lo levantaron poblaciones que aún no practicaban agricultura plena', true, 1),
  ('Porque contiene las primeras inscripciones', false, 2),
  ('Porque demuestra la hipótesis del oasis de Childe', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según la paleogenética, ¿cómo llegó la agricultura a Europa?', 'El ADN antiguo muestra un reemplazo poblacional sustancial entre 7000 y 5500 a. C., con mayor continuidad local en el Báltico y en zonas atlánticas.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Solo por transmisión de ideas entre poblaciones locales', false, 0),
  ('Por migración de agricultores anatolios que se mezclaron en grado variable con los cazadores-recolectores', true, 1),
  ('Por invasión desde Egipto', false, 2),
  ('Por desarrollo independiente en cada región europea', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró Colin Renfrew sobre el megalitismo atlántico?', 'La revolución del radiocarbono calibrado obligó a reconocer desarrollos autónomos y a abandonar el modelo de una civilización oriental que irradia hacia periferias pasivas.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que deriva de las pirámides egipcias', false, 0),
  ('Que es anterior a las pirámides egipcias, lo que invalida la explicación difusionista', true, 1),
  ('Que es posterior al Imperio romano', false, 2),
  ('Que no puede datarse con radiocarbono', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sesgo introduce la conservación diferencial en el registro prehistórico?', 'Lo duradero sobrevive y lo perecedero desaparece, así que la cultura material que estudiamos está sistemáticamente inclinada hacia unos materiales concretos.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno: todo se conserva por igual', false, 0),
  ('Sobrerrepresenta la piedra y el hueso frente a la madera, la fibra y la piel', true, 1),
  ('Sobrerrepresenta los objetos orgánicos', false, 2),
  ('Solo afecta a los yacimientos al aire libre', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aportó la Sima de los Huesos de Atapuerca?', 'Es un conjunto sin equivalente por su tamaño. La Gran Dolina, en el mismo complejo, aportó además los restos de Homo antecessor con marcas de canibalismo.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las pinturas rupestres más antiguas de Europa', false, 0),
  ('Más de 6.500 fósiles de al menos 28 individuos, genéticamente situados en el linaje neandertal', true, 1),
  ('El primer útil de bronce peninsular', false, 2),
  ('La tumba megalítica más antigua', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción metodológica se plantea a las dataciones que atribuyen arte rupestre a neandertales?', 'La crítica de White y otros señala riesgo de sobrestimación por contaminación y por sistemas abiertos. El debate es fundamentalmente técnico y sigue sin cerrarse.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el uranio-torio no funciona en cuevas', false, 0),
  ('Que se data la costra de carbonato sobre el pigmento, no el pigmento, y el sistema puede estar abierto al agua', true, 1),
  ('Que las pinturas son demasiado recientes', false, 2),
  ('Que no existen pigmentos en esos yacimientos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Los enterramientos de Sunguir, con miles de cuentas de marfil, sugieren que…', 'Las cuentas representan miles de horas de trabajo destinadas a unos pocos individuos. La desigualdad no espera al Neolítico.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La desigualdad social solo aparece con la agricultura', false, 0),
  ('Existían diferencias de estatus marcadas ya entre cazadores-recolectores del Paleolítico', true, 1),
  ('El marfil carecía de valor', false, 2),
  ('Se trataba de una sociedad agrícola', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué población transformó la genética europea hacia 3000 a. C., después de los agricultores anatolios?', 'La expansión desde la estepa póntica aportó un tercer componente genético mayoritario en Europa y se asocia con la difusión de las lenguas indoeuropeas.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los fenicios', false, 0),
  ('Los pastores esteparios de la cultura Yamnaya', true, 1),
  ('Los egipcios', false, 2),
  ('Los etruscos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el bronce favoreció el poder de las élites?', 'Quien controlaba las rutas del estaño controlaba la producción de bronce. La metalurgia introdujo una dependencia de larga distancia que el cobre local no imponía.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque era abundante en toda Europa', false, 0),
  ('Porque el estaño era escaso y de distribución desigual, lo que exigía controlar redes de intercambio largas', true, 1),
  ('Porque solo servía para objetos rituales', false, 2),
  ('Porque su fundición no requería especialistas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué significa que la domesticación deje «huellas morfológicas»?', 'Por eso la frontera entre recolectar y cultivar es un gradiente: hubo siglos de manipulación humana antes de que los cambios morfológicos se consolidaran.', 3, true
  from public.topics where slug = 'prehistoria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que aparece de golpe en una generación', false, 0),
  ('Que produce cambios como espigas que no se disgregan o cuernos reducidos, fijados a lo largo de siglos', true, 1),
  ('Que solo afecta a los animales', false, 2),
  ('Que es indetectable en el registro arqueológico', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo resolvió Augusto el problema de ejercer un poder monárquico en Roma?', 'Imperium proconsular, potestad tribunicia y pontificado máximo le daban el poder real. Las formas republicanas seguían intactas: Tácito dijo que cambiaron las cosas, no los nombres.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Proclamándose rey con apoyo del Senado', false, 0),
  ('Acumulando poderes republicanos existentes sin crear ningún cargo nuevo y llamándose princeps', true, 1),
  ('Aboliendo el Senado y las magistraturas', false, 2),
  ('Trasladando la capital fuera de Italia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era el «secreto del imperio» que reveló el año 69 según Tácito?', 'El principado nunca resolvió la sucesión. Cuatro emperadores en doce meses dejaron al descubierto quién ostentaba el poder decisivo.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el emperador podía ser depuesto por el Senado', false, 0),
  ('Que se podía proclamar emperador fuera de Roma y que quien decidía era el ejército', true, 1),
  ('Que las provincias eran más ricas que Italia', false, 2),
  ('Que la sucesión estaba fijada por ley', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué descansaba la administración cotidiana del imperio?', 'Unos pocos centenares de altos funcionarios para cincuenta millones de habitantes. El sistema funcionaba porque las élites locales asumían cargos costosos a cambio de estatus.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En una burocracia imperial de decenas de miles de funcionarios', false, 0),
  ('En las ciudades y en las élites locales cooptadas, con muy pocos altos funcionarios imperiales', true, 1),
  ('En el ejército, que gobernaba cada provincia', false, 2),
  ('En el Senado, que administraba directamente cada región', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se ha revisado el concepto clásico de «romanización»?', 'Hoy se habla de negociación e hibridación: las élites adoptaron selectivamente lo romano por interés, y la experiencia fue muy distinta para un aristócrata galo que para un campesino.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque Roma no influyó en las provincias', false, 0),
  ('Porque presentaba una difusión unidireccional de una cultura superior, modelo formulado en pleno imperialismo europeo', true, 1),
  ('Porque las provincias eran ya latinas antes de la conquista', false, 2),
  ('Porque no existen restos romanos fuera de Italia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué evidencia material demuestra la intensidad económica del alto imperio?', 'Los niveles de contaminación por plomo no se igualaron hasta la Revolución Industrial. Los naufragios son un buen indicador indirecto del volumen de tráfico marítimo.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ausencia de moneda', false, 0),
  ('Los picos de plomo en los núcleos de hielo de Groenlandia y la máxima frecuencia de pecios mediterráneos', true, 1),
  ('La desaparición de la cerámica producida en serie', false, 2),
  ('El abandono generalizado de las ciudades', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinción sustituyó a la de ciudadano y peregrino tras el edicto de 212?', 'Al generalizarse la ciudadanía, dejó de ser un privilegio distintivo. La jerarquía jurídica pasó a apoyarse abiertamente en la posición socioeconómica.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Patricios y plebeyos', false, 0),
  ('Honestiores y humiliores: acomodados y pobres, con penas distintas por el mismo delito', true, 1),
  ('Itálicos y provinciales', false, 2),
  ('Cristianos y paganos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con el contenido de plata del denario durante el siglo III?', 'La devaluación servía para pagar al ejército. Provocó inflación, vuelta parcial a pagos en especie y ruptura de circuitos comerciales.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se mantuvo estable', false, 0),
  ('Cayó de un 90 % en época de Augusto a menos del 5 %, con inflación descontrolada', true, 1),
  ('Aumentó por la conquista de nuevas minas', false, 2),
  ('El denario fue sustituido por el oro puro', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué nuevo adversario apareció en la frontera oriental en 224?', 'Era un adversario estatal de primer orden, no una confederación tribal. En 260 capturó vivo al emperador Valeriano.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El reino de Palmira', false, 0),
  ('El Imperio sasánida', true, 1),
  ('Los alamanes', false, 2),
  ('El reino de Armenia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué pretendía la tetrarquía de Diocleciano?', 'Junto con la duplicación de provincias y la separación de mando militar y administración civil, buscaba estabilizar el poder tras medio siglo de anarquía militar.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Dividir el imperio en cuatro Estados independientes', false, 0),
  ('Repartir el gobierno entre dos augustos y dos césares y planificar la sucesión', true, 1),
  ('Sustituir al ejército por milicias provinciales', false, 2),
  ('Restaurar la República', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué factores explican mejor la expansión del cristianismo antes de Constantino?', 'Las persecuciones fueron episódicas; solo las de Decio y Diocleciano tuvieron alcance imperial. Lo notable es el crecimiento sostenido, no la represión.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La conversión forzosa impuesta por el ejército', false, 0),
  ('Asistencia mutua efectiva, salvación universal sin requisitos de nacimiento, posición favorable entre las mujeres y exclusividad', true, 1),
  ('El apoyo del Senado romano', false, 2),
  ('La prohibición de los cultos tradicionales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué inauguró la convocatoria del concilio de Nicea por Constantino en 325?', 'El emperador convocó y presidió un concilio para resolver la disputa arriana. La relación entre poder político y autoridad religiosa quedó entrelazada durante siglos.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La separación entre Iglesia y Estado', false, 0),
  ('La intervención imperial en cuestiones doctrinales y una dependencia mutua entre Iglesia e Imperio', true, 1),
  ('La prohibición del cristianismo', false, 2),
  ('La creación del papado', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué mecanismo acumulativo señalan Ward-Perkins y Heather para explicar el siglo V?', 'La pérdida de África en 439, la provincia más rica y granero de Roma, fue probablemente el golpe decisivo de esa espiral.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La conversión al cristianismo de los emperadores', false, 0),
  ('Menos territorio implica menos ingresos, menos ingresos implica menos ejército, y menos ejército implica perder más territorio', true, 1),
  ('La despoblación por emigración a Oriente', false, 2),
  ('El agotamiento de las minas de plata', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo Odoacro en 476 tras deponer a Rómulo Augústulo?', 'Los contemporáneos no percibieron el fin de nada. La fecha de 476 como «caída» es una construcción historiográfica posterior.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se proclamó emperador de Occidente', false, 0),
  ('Envió las insignias imperiales a Constantinopla y gobernó Italia como representante nominal del emperador de Oriente', true, 1),
  ('Destruyó la ciudad de Roma', false, 2),
  ('Restauró la República romana', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la supervivencia del Imperio de Oriente es un problema para las explicaciones globales de la caída?', 'Oriente tenía fronteras más cortas y defendibles, una base fiscal más rica —Egipto y Siria— y una capital inexpugnable. Es el mejor test de cualquier hipótesis.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque Oriente también cayó en 476', false, 0),
  ('Porque cualquier causa invocada —cristianismo, decadencia, presión bárbara— debería explicar por qué Oriente resistió mil años más', true, 1),
  ('Porque Oriente no era cristiano', false, 2),
  ('Porque Oriente no tenía fronteras', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué defiende el paradigma de la «Antigüedad tardía» de Peter Brown?', 'Ward-Perkins reaccionó después aportando evidencia material de regresión económica severa en Occidente. Hoy se acepta que hubo ambas cosas, con gran variación regional.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el imperio se hundió de forma súbita y catastrófica', false, 0),
  ('Que hubo una larga transformación creativa, con continuidad de estructuras romanas dentro de los reinos germánicos', true, 1),
  ('Que los bárbaros exterminaron a la población romana', false, 2),
  ('Que el imperio nunca existió como unidad', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el legado romano más estructural en la Europa continental actual?', 'Categorías como propiedad, contrato, obligación o persona jurídica son la base de los sistemas jurídicos continentales europeos y latinoamericanos.', 3, true
  from public.topics where slug = 'roma-imperio'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La organización militar', false, 0),
  ('El derecho romano, recopilado por Justiniano y redescubierto en Bolonia en el siglo XI', true, 1),
  ('El sistema de calzadas', false, 2),
  ('La religión pagana tradicional', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el relato tradicional sobre los orígenes de Roma debe leerse con cautela?', 'Los elogios fúnebres y las listas familiares exageraban méritos, y el relato proyecta hacia atrás categorías políticas del siglo I a. C. Es memoria cultural, no crónica.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque no existe ninguna evidencia arqueológica de Roma', false, 0),
  ('Porque Livio y Dionisio escriben cuatro o cinco siglos después sobre una tradición ya elaborada por las familias aristocráticas', true, 1),
  ('Porque fue escrito en griego', false, 2),
  ('Porque los romanos no conocían la escritura', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo describió Polibio la constitución romana?', 'Cónsules, Senado y asambleas representarían los tres principios. Polibio atribuía a ese equilibrio la estabilidad y el éxito expansivo de Roma.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como una monarquía absoluta', false, 0),
  ('Como una constitución mixta que combinaba elementos monárquicos, aristocráticos y democráticos', true, 1),
  ('Como una democracia directa', false, 2),
  ('Como una teocracia sacerdotal', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tenía la organización del voto en los comicios centuriados?', 'Las clases inferiores a menudo ni llegaban a pronunciarse. Que las asambleas fueran soberanas en teoría no implicaba que el pueblo decidiera en la práctica.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un ciudadano, un voto', false, 0),
  ('Las centurias de los más ricos votaban primero y la votación se detenía al alcanzar la mayoría', true, 1),
  ('Solo votaban los tribunos', false, 2),
  ('El voto era secreto y ponderado por edad', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el arma más eficaz de la plebe en el conflicto de los órdenes?', 'Roma estaba en guerra permanente y no podía prescindir de sus soldados. La primera secesión, en 494 a. C., arrancó la creación del tribunado.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El asesinato de cónsules', false, 0),
  ('La secesión: retirarse en masa y negarse a combatir', true, 1),
  ('La alianza con Cartago', false, 2),
  ('La huelga de impuestos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué importancia tuvo la Ley de las Doce Tablas?', 'Su contenido no era especialmente favorable a la plebe, pero la publicidad de la norma limitaba la arbitrariedad de los jueces aristocráticos.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Concedió la ciudadanía a los itálicos', false, 0),
  ('Eliminó el monopolio patricio sobre el conocimiento del derecho, hasta entonces interpretado oralmente por los pontífices', true, 1),
  ('Abolió la esclavitud', false, 2),
  ('Creó el Senado', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el resultado social del conflicto de los órdenes?', 'La apertura formal de las magistraturas convivió con un cierre sociológico muy estricto. Un homo novus como Cicerón era una rareza señalada.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La igualdad política plena entre todos los ciudadanos', false, 0),
  ('La formación de una nueva élite patricio-plebeya, la nobilitas, que monopolizó los cargos', true, 1),
  ('La abolición del Senado', false, 2),
  ('La expulsión de los patricios de Roma', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la mayoría de los aliados itálicos no se pasó a Aníbal?', 'Colonias latinas, municipios y aliados con distintos grados de derechos daban a las élites locales intereses propios en el sistema romano.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque temían a los cartagineses más que a Roma', false, 0),
  ('Porque Roma había integrado a las élites locales mediante un mosaico de estatutos jurídicos', true, 1),
  ('Porque Aníbal no llegó a entrar en Italia', false, 2),
  ('Porque estaban desarmados', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué argumenta William Harris contra el «imperialismo defensivo»?', 'La guerra era la actividad normal de casi todos los años. La estructura de incentivos empujaba a la expansión al margen de las provocaciones externas.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Roma nunca fue atacada', false, 0),
  ('Que el prestigio militar era requisito del ascenso político y el botín enriquecía a generales y soldados, lo que generaba incentivos internos para la guerra', true, 1),
  ('Que las guerras las decidían las asambleas populares', false, 2),
  ('Que Roma solo luchó contra Cartago', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema militar pretendía resolver la reforma agraria de Tiberio Graco?', 'La reforma tenía una dimensión militar además de social: sin pequeños propietarios no había base de reclutamiento para las legiones.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La falta de caballería', false, 0),
  ('Que solo los propietarios podían ser reclutados, y el campesinado estaba desapareciendo', true, 1),
  ('El exceso de soldados voluntarios', false, 2),
  ('La deserción de los aliados griegos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia decisiva tuvo la reforma militar de Mario?', 'A partir de ahí, quien mandaba legiones disponía de un instrumento político propio, y las guerras civiles se hicieron posibles.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Redujo el tamaño del ejército', false, 0),
  ('Los soldados sin propiedad esperaban tierra de su general, no del Estado: la lealtad militar se personalizó', true, 1),
  ('Prohibió el reclutamiento de itálicos', false, 2),
  ('Sustituyó la infantería por la caballería', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo terminó la Guerra Social de 91-88 a. C.?', 'Roma perdió en buena medida militarmente y resolvió el conflicto integrando por la fuerza de los hechos, no por generosidad.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Con la expulsión de los itálicos de Italia', false, 0),
  ('Con la concesión de la ciudadanía a Italia al sur del Po, es decir, cediendo lo que los aliados exigían', true, 1),
  ('Con la victoria total de Roma sin concesiones', false, 2),
  ('Con la independencia de los aliados itálicos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué precedente estableció Sila que resultó más duradero que sus reformas?', 'Marchar sobre Roma con un ejército era impensable antes de 88 a. C. Después, dejó de serlo.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La limitación del tribunado', false, 0),
  ('Tomar el poder marchando con las legiones sobre Roma y reorganizar el Estado desde la victoria militar', true, 1),
  ('El refuerzo del Senado', false, 2),
  ('La creación del cursus honorum', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué eran realmente populares y optimates?', 'Un mismo aristócrata podía usar métodos populares en una coyuntura y defender al Senado en otra. Eran estrategias, no ideologías.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Partidos políticos con programa y afiliación', false, 0),
  ('Métodos de acción política: buscar apoyo en las asambleas o en el Senado', true, 1),
  ('Clases sociales legalmente definidas', false, 2),
  ('Facciones religiosas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué representa el pacto de 60 a. C. entre César, Pompeyo y Craso?', 'El llamado primer triunvirato no fue una institución. Su existencia misma muestra el grado de descomposición del sistema republicano.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una magistratura creada por ley', false, 0),
  ('Un acuerdo privado para repartirse elecciones y mandos, señal de que las instituciones habían dejado de decidir', true, 1),
  ('Una alianza militar contra Cartago', false, 2),
  ('Un tratado con el Senado', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué tesis defiende Ronald Syme en The Roman Revolution?', 'Syme desmonta la retórica de la restauración augústea. Tácito ya había resumido la operación: se conservaron los nombres y cambió la sustancia.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Augusto restauró genuinamente la República', false, 0),
  ('Que lo ocurrido fue la sustitución de una oligarquía por otra mediante violencia, clientelismo y propaganda', true, 1),
  ('Que la República cayó por invasión extranjera', false, 2),
  ('Que el pueblo romano derrocó a la aristocracia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'En el debate abierto por Fergus Millar, ¿qué sostiene la posición hoy dominante?', 'Se acepta la dimensión pública y retórica que Millar subrayó, sin conceder que la asamblea decidiera realmente: la estructura de voto y las clientelas lo impedían.', 3, true
  from public.topics where slug = 'roma-republica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Roma fue una democracia plena', false, 0),
  ('Que fue una oligarquía que necesitaba legitimación popular, con política pública y persuasiva pero sin soberanía popular efectiva', true, 1),
  ('Que el pueblo no participaba en absoluto', false, 2),
  ('Que las asambleas nunca se reunieron', false, 3)
) as opcion(label, is_correct, position);

commit;
