-- Historia Con Alex · contenido publicable
--
-- ARCHIVO GENERADO. No editar a mano: los cambios se pierden.
-- Fuente: src/data/topics/. Regenerar con `npm run seed`.
--
-- Ejecutar en el SQL Editor DESPUÉS de las migraciones de supabase/migrations/.
-- Idempotente: repetirlo no duplica filas.
-- Temas: 15. Preguntas: 235.

begin;

-- 0. Comprobación previa ------------------------------------------------------
-- Sin la segunda migración, el insert de topics falla con un 42703 poco claro
-- («column period_label does not exist»). Mejor avisar de qué falta y por qué.
do $$ begin
  if not exists (select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'topics' and column_name = 'period_label') then
    raise exception 'Falta la migración 20260827_content_metadata_and_answer_check.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';
  end if;
end $$;

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
  ('peninsula-iberica', 'Península ibérica', true),
  ('turquia', 'Turquía', true),
  ('europa', 'Europa', true),
  ('egipto', 'Egipto', true),
  ('grecia', 'Grecia', true),
  ('mediterraneo-oriental', 'Mediterráneo oriental', true),
  ('arabia', 'Arabia', true),
  ('irak', 'Irak', true),
  ('mundo', 'Mundo', true),
  ('italia', 'Italia', true)
on conflict (slug) do update set title = excluded.title, published = excluded.published;

-- 3. Temas -------------------------------------------------------------------
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
select 'crisis-siglo-xiv',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'Peste negra y crisis bajomedieval', 'Hambre, peste, guerra y cisma: qué se hundió, qué salió reforzado y quién ganó con ello.', 'universidad',
  55, 'c. 1300–1450', '⌛', 'blue', true
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
select 'helenismo',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'mediterraneo-oriental'),
  'Alejandro y el mundo helenístico', 'De la Macedonia de Filipo a los reinos helenísticos: conquista, koiné y negociación cultural.', 'universidad',
  55, '359–30 a. C.', 'Ω', 'gold', true
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
select 'plena-edad-media',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'Ciudades, comercio y universidades', 'El despegue de los siglos centrales: campo, mercado, comuna, crédito y corporación universitaria.', 'universidad',
  55, 'c. 1000–1300', '⚖', 'terracotta', true
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
select 'renacimiento',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'Renacimiento y Humanismo', 'Un método filológico, un mercado del arte y un concepto historiográfico en disputa.', 'universidad',
  55, 'c. 1350–1600', '✦', 'plum', true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color, published = excluded.published;

insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, published)
select 'revoluciones-liberales',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'europa'),
  'Liberalismo, nacionalismo y unificaciones', 'De la Restauración a los Estados nacionales: constituciones, oleadas revolucionarias y unificaciones.', 'universidad',
  55, '1815–1871', '✺', 'red', true
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

-- 3b. Temas retirados --------------------------------------------------------
-- Los insert de arriba solo actualizan: un tema renombrado o eliminado del
-- repositorio seguiría publicado. Se despublica en lugar de borrarlo para no
-- perder el progreso de quien ya lo hubiera leído.
update public.topics set published = false where slug not in ('andalus', 'bizancio', 'crisis-siglo-xiv', 'egipto', 'feudalismo', 'grecia', 'helenismo', 'islam', 'mesopotamia', 'plena-edad-media', 'prehistoria', 'renacimiento', 'revoluciones-liberales', 'roma-imperio', 'roma-republica');

-- 4. Lecciones ---------------------------------------------------------------
-- El cuerpo va como array de bloques tipados: section, concepts, debates,
-- timeline y sources. No hacen falta columnas nuevas para el glosario,
-- el debate historiográfico ni la bibliografía.
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
select id, 'Peste negra y crisis bajomedieval', '[{"type":"section","title":"Antes de la peste: un crecimiento que se había agotado","text":"La peste no llegó a una Europa próspera. Llegó a una Europa que llevaba medio siglo tropezando con sus propios límites. Hacia 1270 la roturación había alcanzado tierras marginales de rendimiento bajo, las herencias fragmentaban las explotaciones hasta hacerlas inviables, la proporción entre población y superficie cultivable se deterioraba y el precio real del grano subía.\n\nLa gran hambruna de 1315-1317 fue la primera advertencia seria. Varios años seguidos de lluvias excepcionales arruinaron cosechas y siegas en todo el norte de Europa; las estimaciones de mortalidad para ciudades como Ypres rondan el diez o el quince por ciento de la población en pocos meses. A ella se sumó una epizootia bovina hacia 1319-1320 que diezmó el ganado de tiro y de leche, con efectos prolongados sobre la capacidad de labrar.\n\nLa interpretación clásica de este agotamiento es neomaltusiana. Michael Postan sostuvo que la población había superado la capacidad de carga de la agricultura disponible, y que la corrección demográfica era, en ese sentido, inevitable. Emmanuel Le Roy Ladurie describió el ciclo agrario del Antiguo Régimen como una respiración larga de crecimiento y colapso.\n\nRobert Brenner abrió en 1976 la polémica que reorganizó el debate. Su objeción es que el modelo demográfico describe la presión pero no explica los desenlaces: si la población y la tierra fueran las únicas variables, regiones con la misma demografía deberían haber terminado igual, y no lo hicieron. Lo decisivo, sostuvo, fue la relación de fuerzas entre señores y campesinos y la capacidad de estos de organizarse, junto con la estructura del poder político en cada territorio. La discusión, publicada después como el «debate Brenner», sigue siendo el marco por el que pasa cualquier explicación del periodo.\n\nUna tercera vía, la del modelo comercializador, subraya que hacia 1300 buena parte de la economía europea estaba ya integrada en mercados: los campesinos vendían y compraban, se endeudaban y se especializaban, de modo que su suerte dependía tanto de los precios como de la cosecha. Y Bruce Campbell ha reintroducido con datos climáticos y epidemiológicos un factor ambiental: el enfriamiento del siglo XIV y las alteraciones ecológicas que favorecieron la difusión de la enfermedad.","callout":null},{"type":"section","title":"La peste negra: qué fue, cuánto mató","text":"La epidemia entró por el Mediterráneo en 1347, procedente del mar Negro y transportada por las rutas comerciales genovesas; el relato del asedio de Caffa, donde los sitiadores habrían catapultado cadáveres infectados, procede de una única fuente y se cita más de lo que su fiabilidad permite. Desde Mesina y Génova avanzó por Italia y el sur de Francia en 1348, alcanzó la península ibérica, Inglaterra y el Imperio ese mismo año y el norte del continente en 1349-1351.\n\nLas cifras se han revisado al alza. Durante décadas se repitió que murió un tercio de la población, siguiendo estimaciones antiguas; el vaciado sistemático de registros señoriales, censos fiscales y series de sustituciones de beneficios eclesiásticos ha llevado a hablar hoy de entre el cuarenta y el sesenta por ciento en la primera oleada, con variaciones regionales enormes. Y no fue un episodio único: las recurrencias de 1361, 1374 y sucesivas impidieron la recuperación demográfica durante más de un siglo. Europa no volvió a los niveles de población de 1300 hasta el siglo XVI.\n\nSobre la identidad de la enfermedad hubo una polémica larga. Graham Twigg en 1984 y sobre todo Samuel Cohn en 2002 argumentaron que los síntomas descritos, la velocidad de propagación y la estacionalidad no encajaban con la peste bubónica transmitida por pulgas de rata, y propusieron otro agente. La discusión se cerró por vía material: en 2011 la secuenciación de ADN antiguo extraído de esqueletos del cementerio de East Smithfield, en Londres, identificó *Yersinia pestis* y reconstruyó su genoma. Es uno de los casos más limpios de un debate histórico resuelto por evidencia biológica.\n\nLo que sigue abierto es el mecanismo de transmisión. La objeción de Cohn sobre la velocidad conserva fuerza, y varios modelos recientes sostienen que la difusión se explica mejor por ectoparásitos humanos —pulgas y piojos— y por contagio directo en la forma neumónica que por el ciclo clásico rata-pulga-humano. El agente está identificado; su ecología, no del todo.\n\nLa mortalidad tampoco fue ciega. Los estudios sobre restos óseos muestran que afectó más a quienes ya arrastraban desnutrición o enfermedad previa, es decir, a los pobres, lo que encaja con una población debilitada por cuatro décadas de crisis alimentaria.","callout":"La discusión sobre si la peste negra fue realmente peste bubónica duró treinta años y se cerró en 2011 con la secuenciación de *Yersinia pestis* en esqueletos de Londres. Un debate histórico resuelto por un laboratorio."},{"type":"section","title":"Después: escasez de brazos y reacción señorial","text":"La consecuencia económica inmediata fue una inversión brutal de la relación entre tierra y trabajo. Con la población reducida a la mitad y la tierra intacta, el trabajo se volvió escaso y caro, y la tierra abundante y barata. Los salarios reales subieron con fuerza, las rentas cayeron, se abandonaron las parcelas peores y mejoró la dieta: más carne, más cerveza, menos pan de cereal secundario. Algunos historiadores han hablado de una edad de oro del trabajo asalariado, con la advertencia obvia de que se pagó con la muerte de la mitad de la población.\n\nLos señores reaccionaron intentando congelar por ley lo que el mercado les quitaba. En Inglaterra, la Ordenanza de 1349 y el Estatuto de los Trabajadores de 1351 fijaron los salarios en los niveles anteriores a la peste, prohibieron aceptar más y penaron abandonar el señorío en busca de mejor paga. Medidas equivalentes se tomaron en Castilla, en Francia y en las ciudades italianas. Se aplicaron con desigual éxito y generaron un contencioso permanente entre señores y trabajadores.\n\nDe ahí salieron las grandes revueltas. La Jacquerie del norte de Francia (1358) estalló en plena guerra, con la nobleza desacreditada tras la derrota de Poitiers; los Ciompi de Florencia (1378) fueron obreros del textil sin gremio propio que llegaron a ocupar el gobierno de la ciudad durante seis semanas; la revuelta inglesa de 1381, desencadenada por un impuesto de capitación, llevó a los campesinos a Londres con un programa que incluía la abolición de la servidumbre, y terminó con Wat Tyler muerto ante el rey. Los remensas catalanes sostuvieron un conflicto de décadas contra los malos usos señoriales que solo se cerró con la Sentencia de Guadalupe de 1486, y los irmandiños gallegos derribaron fortalezas en 1467.\n\nCasi todas fueron aplastadas, y sin embargo el resultado a largo plazo les fue favorable en Europa occidental. La servidumbre se disolvió en Inglaterra, Francia y buena parte de la península a lo largo de los siglos XIV y XV, no por concesión sino porque retener a la fuerza a una mano de obra escasa resultaba caro e inaplicable cuando el señor vecino ofrecía mejores condiciones.\n\nAl este del Elba ocurrió lo contrario. Sobre la misma catástrofe demográfica, la nobleza de Prusia, Polonia, Bohemia y Hungría reforzó su control: ató a los campesinos a la tierra, amplió la reserva señorial y organizó una producción cerealista para exportar a Occidente a través del Báltico. Es la llamada segunda servidumbre, que duraría hasta el siglo XIX. La divergencia entre las dos mitades del continente, a partir del mismo choque, es el argumento central de Brenner: lo que difería no era la demografía, sino la capacidad de organización campesina, la densidad de las comunidades rurales y la existencia o no de un poder político capaz de arbitrar.","callout":"El mismo colapso demográfico liquidó la servidumbre al oeste del Elba y la reimplantó al este. Un choque externo no fija el desenlace: lo fija la relación de fuerzas sobre la que cae."},{"type":"section","title":"Guerra, impuesto y Estado","text":"La guerra de los Cien Años (1337-1453) no fue una guerra continua sino una sucesión de campañas y treguas por la sucesión al trono francés y por los dominios ingleses en el continente. Su interés histórico está menos en las batallas que en lo que obligó a construir.\n\nFinanciar ejércitos durante generaciones exigió impuestos regulares, y los impuestos regulares exigieron negociarlos: los Estados Generales franceses y el Parlamento inglés ganaron peso precisamente como órganos de consentimiento fiscal. En Inglaterra la regla de que no hay impuesto sin aprobación parlamentaria se consolidó en este periodo; en Francia, tras la crisis de mediados de siglo, la monarquía logró convertir la *taille* en un impuesto permanente sin consentimiento periódico, lo que apunta ya a dos trayectorias políticas distintas.\n\nCambió también la guerra misma. El arco largo galés en Crécy (1346) y Azincourt (1415), la infantería de picas, la artillería de pólvora que a mediados del siglo XV derribaba murallas que habían resistido siglos, y sobre todo las compañías permanentes pagadas por la corona en lugar de la hueste feudal convocada por obligación vasallática. El caballero deja de ser el eje del sistema militar, y con él pierde peso el fundamento social de su preeminencia.\n\nLa Iglesia atravesó su propia crisis institucional. El traslado de la corte pontificia a Aviñón (1309-1377) la ató a la órbita francesa y multiplicó las críticas sobre su fiscalidad; el Cisma de Occidente, iniciado en 1378, llegó a enfrentar a tres papas simultáneos con obediencias repartidas por reinos. La salida no vino del papado sino de una teoría: el conciliarismo, según el cual un concilio general representa a la Iglesia entera y su autoridad está por encima de la del papa. El Concilio de Constanza (1414-1418) cerró el cisma aplicando ese principio, y aunque el papado lo desactivó después, el episodio dejó formulada una doctrina de soberanía representativa que reaparecería en la política laica.\n\nConstanza hizo también otra cosa: quemó a Jan Hus en 1415 pese al salvoconducto imperial que lo protegía. Hus recogía las tesis de John Wyclif sobre la autoridad de la Escritura, la crítica a la riqueza eclesiástica y la comunión bajo las dos especies. Su ejecución desencadenó las guerras husitas en Bohemia, donde ejércitos campesinos derrotaron repetidamente a cruzadas imperiales durante quince años. Es el primer movimiento de reforma religiosa que consigue sostenerse militarmente y arrancar concesiones, un siglo antes de Lutero.","callout":null},{"type":"section","title":"La cultura de la catástrofe y sus víctimas","text":"La respuesta cultural fue inmediata y reconocible. La danza de la muerte, pintada en claustros y cementerios, coloca en fila al papa, al emperador, al mercader y al campesino conducidos por esqueletos: la muerte como igualadora es un motivo nuevo que se difunde con la epidemia. Los manuales del *ars moriendi* enseñaron a morir bien cuando el sacerdote podía no llegar a tiempo. Las procesiones de flagelantes recorrieron el continente ofreciendo penitencia colectiva como remedio, hasta que el papado las prohibió al ver que escapaban a todo control eclesiástico.\n\nLa violencia buscó culpables. Entre 1348 y 1350 se difundió la acusación de que los judíos envenenaban los pozos, y centenares de comunidades del Imperio, Francia y Cataluña fueron asaltadas y destruidas; en Estrasburgo, en febrero de 1349, varios centenares de judíos fueron quemados antes incluso de que la peste llegara a la ciudad. Clemente VI publicó dos bulas desmintiendo la acusación y recordando que los judíos morían igual que los cristianos; sirvieron de poco. Muchos supervivientes emigraron hacia el este de Europa, un desplazamiento que redibujó el mapa del judaísmo europeo durante los cinco siglos siguientes.\n\nJohan Huizinga leyó el conjunto en 1919 como el otoño de la Edad Media: una cultura sobrecargada de símbolos, obsesionada con la muerte y el ceremonial, incapaz ya de renovarse. La imagen es poderosa y ha envejecido de forma desigual, porque el mismo periodo produjo la pintura al óleo flamenca, la polifonía, la carabela, el reloj mecánico público, la contabilidad perfeccionada y, hacia 1450, la imprenta. No es una cultura agotada: es una cultura que trabaja bajo presión.\n\nConviene además no confundir la crisis con el origen de la caza de brujas. Los grandes procesos son posteriores, sobre todo de los siglos XVI y XVII; lo que el XIV aporta es la consolidación de un procedimiento judicial inquisitorial y de un repertorio de categorías de excluidos que después se aplicarán a ese fenómeno.","callout":"En Estrasburgo, en febrero de 1349, se quemó a la comunidad judía antes de que la peste llegara a la ciudad. La violencia no fue una reacción al contagio: se anticipó a él."},{"type":"section","title":"¿Crisis o transición?","text":"El nombre que se le dé al periodo depende de la explicación que se sostenga. Para la tradición neomaltusiana fue una crisis de subsistencias resuelta por la mortalidad: un ajuste doloroso dentro de un ciclo agrario que se repite. Para la historiografía marxista fue una crisis del modo de producción feudal —Guy Bois habló de crisis del feudalismo y Rodney Hilton estudió las revueltas como respuesta consciente de los campesinos—, es decir, la fase terminal de un sistema que ya no podía extraer excedente sin destruir su propia base. Para Brenner, ninguna de las dos: los desenlaces se explican por la relación de fuerzas de clase y por la estructura del poder político en cada región, y por eso divergen.\n\nLos tres marcos han dejado sedimento. Hoy se acepta que hubo un techo de subsistencias real hacia 1300, que la mortalidad alteró de raíz los precios relativos de tierra y trabajo, y que el resultado institucional dependió de variables políticas locales. La palabra «crisis» se usa con reservas porque describe el trauma pero no la salida.\n\nY la salida fue en varios sentidos una mejora para los supervivientes. Los salarios reales alcanzados en el noroeste de Europa en el siglo XV no volverían a igualarse en siglos; la dieta mejoró; la movilidad aumentó; el campesinado inglés y neerlandés quedó jurídicamente libre. Robert Allen y otros han vinculado esos salarios altos con la posterior trayectoria económica del noroeste europeo, en un argumento que conecta el siglo XIV con la industrialización mucho después. Es una hipótesis discutida, no un hecho establecido, pero muestra por qué el periodo no puede leerse solo como desastre.\n\nLo que sí desapareció fue un mundo institucional. En 1300 Europa tenía servidumbre generalizada, huestes feudales, un papado indiscutido y una economía sin Estado fiscal. En 1450 tenía ejércitos pagados, impuestos permanentes, parlamentos que los negociaban, un papado que había necesitado un concilio para existir y una mitad del continente sin siervos y otra mitad reatándolos. La Edad Moderna empieza con ese reparto ya hecho.","callout":null},{"type":"concepts","items":[{"term":"Gran hambruna","definition":"Crisis alimentaria de 1315-1317 en el norte de Europa por lluvias catastróficas. Primer aviso de que el crecimiento había tocado techo."},{"term":"Techo maltusiano","definition":"Límite de población que una agricultura dada puede sostener. Explica la presión hacia 1300, no los desenlaces posteriores."},{"term":"*Yersinia pestis*","definition":"Bacteria causante de la peste, identificada en 2011 por secuenciación de ADN antiguo en víctimas de Londres."},{"term":"Estatuto de los Trabajadores","definition":"Ley inglesa de 1351 que congela los salarios en niveles anteriores a la peste y penaliza abandonar el señorío por mejor paga."},{"term":"Reacción señorial","definition":"Intento de la nobleza de recuperar por vía legal y coactiva las rentas que la escasez de mano de obra le quitaba."},{"term":"Segunda servidumbre","definition":"Reimplantación de la servidumbre al este del Elba tras la peste, ligada a la exportación cerealista por el Báltico."},{"term":"Remensa","definition":"Campesino catalán sujeto a malos usos señoriales. Su conflicto se cerró con la Sentencia de Guadalupe de 1486."},{"term":"Jacquerie","definition":"Revuelta campesina del norte de Francia en 1358, en plena guerra y con la nobleza desacreditada tras Poitiers."},{"term":"Ciompi","definition":"Obreros del textil florentino sin gremio propio. Ocuparon el gobierno de la ciudad seis semanas en 1378."},{"term":"Cisma de Occidente","definition":"División del papado desde 1378, con obediencias repartidas por reinos y hasta tres papas simultáneos."},{"term":"Conciliarismo","definition":"Doctrina según la cual el concilio general representa a la Iglesia y su autoridad supera a la del papa. Cerró el cisma en Constanza."},{"term":"Danza de la muerte","definition":"Motivo iconográfico difundido con la epidemia: la muerte conduce en fila a papas, reyes, mercaderes y campesinos por igual."},{"term":"Ars moriendi","definition":"Manuales para morir bien, útiles cuando el sacerdote podía no llegar a tiempo. Género nacido de la mortalidad masiva."},{"term":"Crisis del feudalismo","definition":"Lectura marxista del periodo: fase terminal de un sistema incapaz de extraer excedente sin destruir su propia base."}]},{"type":"debates","items":[{"question":"¿Fue la peste negra realmente peste bubónica?","positions":[{"school":"Otro agente (Twigg, 1984; Cohn, 2002)","argument":"Los síntomas descritos por los cronistas, la velocidad de propagación y la estacionalidad no encajaban con la peste bubónica transmitida por pulgas de rata. Debía tratarse de otra enfermedad, hoy desaparecida o irreconocible."},{"school":"Confirmación por ADN antiguo (2011)","argument":"La secuenciación de restos del cementerio de East Smithfield, en Londres, identificó *Yersinia pestis* y reconstruyó su genoma. El agente está establecido."}],"state":"El debate sobre la identidad del patógeno está cerrado. Sigue abierto el mecanismo de transmisión: la objeción sobre la velocidad conserva fuerza y varios modelos apuntan a ectoparásitos humanos y a contagio directo por vía neumónica más que al ciclo rata-pulga."},{"question":"¿Por qué divergieron el este y el oeste de Europa tras la peste?","positions":[{"school":"Modelo demográfico (Postan, Le Roy Ladurie)","argument":"La población había superado la capacidad de carga de la agricultura. La mortalidad corrigió la relación entre tierra y trabajo, y de ahí salieron salarios altos y rentas bajas."},{"school":"Relación de fuerzas de clase (Brenner, 1976)","argument":"La demografía era la misma a ambos lados del Elba y el resultado fue opuesto. Lo decisivo fue la capacidad de organización de las comunidades campesinas y la estructura del poder político capaz o incapaz de arbitrar."}],"state":"El «debate Brenner» sigue siendo el marco obligado. Se acepta el techo demográfico hacia 1300 y se acepta que no basta para explicar los desenlaces: la variable política es imprescindible."},{"question":"¿Crisis o transición?","positions":[{"school":"Crisis del feudalismo (Bois, Hilton)","argument":"Fase terminal de un modo de producción que ya no podía extraer excedente sin arruinar su base productiva. Las revueltas son la respuesta consciente de los campesinos a ese agotamiento."},{"school":"Ajuste cíclico (neomaltusianos)","argument":"Un episodio más de la respiración larga del ciclo agrario preindustrial: crecimiento hasta el techo de subsistencias, corrección por mortalidad, nuevo crecimiento."}],"state":"Se usa «crisis» con reservas: describe el trauma pero no la salida. Para los supervivientes del noroeste europeo el saldo fue de salarios reales muy altos, mejor dieta y libertad jurídica, y hay quien conecta ese nivel salarial con la trayectoria económica posterior de la región."}]},{"type":"timeline","items":[{"date":"1315–1317","event":"Gran hambruna del norte de Europa tras varios años de lluvias catastróficas."},{"date":"1337","event":"Comienza la guerra de los Cien Años entre Francia e Inglaterra."},{"date":"1347","event":"La peste llega a Mesina desde el mar Negro."},{"date":"1348–1351","event":"Primera oleada por toda Europa: muere entre un tercio y la mitad de la población."},{"date":"1348–1350","event":"Pogromos contra las juderías acusadas de envenenar los pozos; Clemente VI los condena por bula."},{"date":"1349–1351","event":"Ordenanza y Estatuto de los Trabajadores en Inglaterra: se intenta congelar los salarios por ley."},{"date":"1358","event":"Jacquerie en el norte de Francia."},{"date":"1378","event":"Revuelta de los Ciompi en Florencia; comienza el Cisma de Occidente."},{"date":"1381","event":"Revuelta campesina inglesa; Wat Tyler muere ante el rey en Smithfield."},{"date":"1415","event":"Jan Hus es quemado en Constanza pese al salvoconducto imperial."},{"date":"1414–1418","event":"Concilio de Constanza: el conciliarismo cierra el cisma."},{"date":"1419–1434","event":"Guerras husitas en Bohemia."},{"date":"1453","event":"Fin de la guerra de los Cien Años y caída de Constantinopla."},{"date":"1486","event":"Sentencia de Guadalupe: fin de la servidumbre remensa en Cataluña."},{"date":"2011","event":"La secuenciación de ADN antiguo confirma *Yersinia pestis* en las víctimas de Londres."}]},{"type":"sources","items":[{"author":"Giovanni Boccaccio","title":"Decamerón (introducción)","year":"1348-1353","kind":"primaria","note":"Descripción de la peste en Florencia y de la ruptura de los vínculos sociales y familiares."},{"author":"Agnolo di Tura del Grasso","title":"Crónica de Siena","year":"c. 1350","kind":"primaria","note":"Testimonio directo: enterró a sus cinco hijos con sus propias manos."},{"author":"Clemente VI","title":"Bulas Quamvis perfidiam","year":"1348","kind":"primaria","note":"Desmienten la acusación de envenenamiento de pozos y prohíben los ataques a las juderías."},{"author":"Corona inglesa","title":"Ordenanza y Estatuto de los Trabajadores","year":"1349-1351","kind":"primaria","note":"Congelan salarios y prohíben abandonar el señorío por mejor paga."},{"author":"Guy de Chauliac","title":"Chirurgia magna","year":"1363","kind":"primaria","note":"Descripción médica de las formas bubónica y neumónica por el cirujano del papa de Aviñón."},{"author":"Jean Froissart","title":"Crónicas","year":"s. XIV","kind":"primaria","note":"Relato caballeresco de la guerra de los Cien Años y de la Jacquerie, desde el punto de vista nobiliario."},{"author":"Thomas Walsingham","title":"Historia Anglicana","year":"c. 1390","kind":"primaria","note":"Fuente principal, y hostil, sobre la revuelta inglesa de 1381."},{"author":"Fernando II de Aragón","title":"Sentencia Arbitral de Guadalupe","year":"1486","kind":"primaria","note":"Abolición de los malos usos y de la remensa en Cataluña tras décadas de conflicto."},{"author":"Michael M. Postan","title":"The Medieval Economy and Society","year":"1972","kind":"estudio","note":"Formulación clásica del modelo demográfico neomaltusiano."},{"author":"Rodney Hilton","title":"Bond Men Made Free","year":"1973","kind":"estudio","note":"Las revueltas campesinas como respuesta organizada, no como estallido irracional."},{"author":"Guy Bois","title":"Crise du féodalisme","year":"1976","kind":"estudio","note":"Crisis del modo de producción feudal a partir del caso normando."},{"author":"Robert Brenner y otros","title":"El debate Brenner","year":"1976-1985","kind":"estudio","note":"Sitúa la relación de fuerzas de clase y el poder político en el centro de la explicación."},{"author":"David Herlihy","title":"The Black Death and the Transformation of the West","year":"1997","kind":"estudio","note":"La epidemia como acelerador de cambios institucionales y técnicos."},{"author":"Ole J. Benedictow","title":"The Black Death 1346-1353","year":"2004","kind":"estudio","note":"Revisión al alza de la mortalidad a partir de registros locales."},{"author":"Kirsten Bos y otros","title":"A draft genome of Yersinia pestis from victims of the Black Death","year":"2011","kind":"estudio","note":"Cierra por vía genética el debate sobre la identidad del patógeno."},{"author":"Bruce M. S. Campbell","title":"The Great Transition","year":"2016","kind":"estudio","note":"Integra clima, ecología y epidemiología en la explicación del siglo XIV."}]}]'::jsonb, 0, true
from public.topics where slug = 'crisis-siglo-xiv'
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
select id, 'Alejandro y el mundo helenístico', '[{"type":"section","title":"Filipo antes que Alejandro","text":"Macedonia era en 360 a. C. un reino periférico, inestable y amenazado por ilirios y peonios, al que los griegos del sur consideraban medio bárbaro. En veinticinco años Filipo II lo convirtió en la primera potencia del Egeo, y lo hizo con un instrumento militar nuevo. La falange macedonia sustituyó la lanza hoplita por la sarisa, una pica de cinco a seis metros que exigía las dos manos y un escudo menor: menos maniobrable pero mucho más profunda y capaz de fijar al enemigo. Su función era retener, no vencer; la decisión la daba la caballería de los *hetairoi*, la caballería de los compañeros, cargando sobre el punto débil que la falange había abierto.\n\nFilipo añadió ingeniería de asedio permanente, tropas ligeras, entrenamiento continuo durante todo el año y una cadena de mando estable. Lo financiaron las minas de oro del Pangeo, que le rindieron según Diodoro unos mil talentos anuales, y lo consolidaron el matrimonio como instrumento diplomático y la corrupción sistemática de las élites griegas: la frase que Plutarco le atribuye sobre que ninguna muralla resiste a un asno cargado de oro describe bien su método.\n\nQueronea, en 338, liquidó la resistencia de Atenas y Tebas. Al año siguiente la Liga de Corinto agrupó a las ciudades griegas bajo hegemonía macedonia, con una paz general, prohibición de cambiar los regímenes existentes y una guerra panhelénica de venganza contra Persia ya declarada. Cuando Filipo fue asesinado en 336, el ejército, el plan de campaña y hasta la avanzadilla en Asia Menor estaban en su sitio.\n\nEsto no reduce a Alejandro, pero cambia la pregunta. La historiografía del siglo XIX, y buena parte de la divulgación posterior, atribuyó al hijo un genio fundador que corresponde en gran medida al padre. Los estudios de las últimas décadas han restituido a Filipo su papel, y con él una idea menos heroica del proceso: la conquista de Persia fue posible porque un Estado pequeño se había militarizado durante una generación entera.\n\nQueda un problema de fondo que la propia Antigüedad discutía: si los macedonios eran griegos. Hablaban una lengua o dialecto que los griegos del sur no entendían sin más, participaban en los Juegos Olímpicos por decisión de los jueces y eran llamados bárbaros en los discursos de Demóstenes. La cuestión sigue politizada en el presente, y por eso conviene formularla con cuidado: la identidad antigua era gradual y negociable, no una etiqueta binaria.","callout":"La falange de sarisas no ganaba las batallas: las fijaba. El golpe decisivo lo daba la caballería de los compañeros. Es un sistema de armas combinadas, y su autor fue Filipo, no Alejandro."},{"type":"section","title":"Alejandro: la campaña y el problema de las fuentes","text":"La campaña ocupó once años. Gránico (334) abrió Asia Menor; Issos (333) rompió el ejército de Darío III en Cilicia; el asedio de Tiro (332) duró siete meses y terminó con una matanza y la venta como esclavos de los supervivientes; Egipto recibió al conquistador sin resistencia y allí se fundó Alejandría; Gaugamela (331) decidió la guerra. Persépolis fue saqueada e incendiada en 330. Después vinieron tres años durísimos en Bactriana y Sogdiana contra una resistencia local que no combatía en batallas campales, la campaña de la India y la victoria sobre Poro en el Hidaspes (326), hasta que el ejército se negó a avanzar más allá del Hífasis. El regreso por el desierto de Gedrosia costó, según las fuentes, más vidas que ninguna batalla. Alejandro murió en Babilonia en junio de 323, a los treinta y dos años.\n\nEl problema es cómo sabemos todo esto. No se conserva ni un solo relato contemporáneo. Calístenes, el cronista oficial de la expedición, fue ejecutado y su obra se perdió; también se perdieron las memorias de Ptolomeo, Aristóbulo, Nearco y Onesícrito. Lo que leemos son cinco autores muy posteriores: Diodoro (siglo I a. C.), Curcio Rufo y Plutarco (siglo I y comienzos del II d. C.), Arriano (siglo II d. C.) y el resumen de Justino. Es decir, entre trescientos y quinientos años después, con agendas propias y con el material ya filtrado por la propaganda de la corte y por la tradición novelesca.\n\nArriano se considera el más fiable porque declara seguir a Ptolomeo y Aristóbulo, dos participantes; pero Ptolomeo escribía como rey de Egipto, con interés directo en su propio papel. Los demás forman la llamada vulgata, más dada a lo dramático y lo prodigioso. Cualquier afirmación sobre las intenciones o el carácter de Alejandro descansa sobre este material, y conviene decirlo antes que la afirmación.\n\nSobre esa base se libró el debate historiográfico decisivo. William Tarn presentó en 1948 a un Alejandro visionario, portador de una idea de hermandad de la humanidad y de fusión entre vencedores y vencidos, apoyándose en las bodas de Susa, en la incorporación de persas al ejército y en la oración de Opis. Ernst Badian desmontó esa lectura en 1958 y en trabajos posteriores: las medidas de integración se explican por necesidad de gobernar un imperio inmenso con pocos macedonios, y el registro incluye la ejecución de Filotas y el asesinato de su padre Parmenión, la muerte de Clito a manos del propio rey en un banquete, la eliminación de Calístenes tras el conflicto por la *proskynesis* y matanzas de población civil en Tiro, Gaza, Masaga y el valle del Cofén.\n\nLa posición dominante hoy, formulada sobre todo por A. B. Bosworth, describe a un gobernante extraordinariamente capaz y extraordinariamente violento, cuya política de integración fue pragmática y cuyo proyecto último no puede reconstruirse porque las fuentes no permiten llegar hasta ahí. El Alejandro de la cultura popular —unificador de pueblos, cosmopolita avant la lettre— procede en línea directa de Droysen y de Tarn, no de los documentos.","callout":"No existe ninguna fuente contemporánea sobre Alejandro. Todo lo que sabemos procede de autores que escriben entre tres y cinco siglos después, a partir de memorias perdidas de participantes interesados."},{"type":"section","title":"Los reinos: cómo se gobernaba una monarquía de conquista","text":"Alejandro murió sin sucesor viable y con un imperio que solo su persona mantenía unido. Siguieron cuarenta años de guerras entre sus generales, los diádocos. Ipsos (301) acabó con Antígono Monoftalmos y con la última posibilidad de reunificación; Curupedio (281) fijó el mapa. Quedaron tres grandes monarquías —la Ptolemaica en Egipto, la Seléucida en Asia y la Antigónida en Macedonia— y una periferia de reinos menores: Pérgamo de los Atálidas, el reino grecobactriano y, más al este, los reinos indogriegos.\n\nLa realeza helenística no se legitimaba por sangre ni por institución, sino por victoria. La tierra era *doríktetos chóra*, tierra conquistada con la lanza, y una definición antigua recogida en la Suda dice que la basileia no la dan la naturaleza ni el derecho, sino la capacidad de mandar un ejército y administrar los asuntos. De ahí la necesidad permanente de victorias, la centralidad de la corte y de los amigos del rey por encima de cualquier órgano representativo, y la difusión del culto al soberano: Ptolomeo I como Sóter, los honores divinos votados por Atenas a Antígono y Demetrio en 307, las dinastías divinizadas en vida.\n\nEl sostén militar y social eran los colonos grecomacedonios instalados en lotes de tierra a cambio de servicio, los cleruquías en Egipto y las *katoikíai* seléucidas, y una red de fundaciones urbanas —Antioquía, Seleucia del Tigris, Ai Khanum en el actual Afganistán— que servían a la vez de guarnición, de centro fiscal y de referencia cultural.\n\nEl Egipto ptolemaico es el caso mejor documentado del mundo antiguo, porque el clima conservó los papiros. El archivo de Zenón, administrador de una gran finca en el Fayum hacia mediados del siglo III a. C., reúne miles de documentos de gestión: contratos, cuentas, cartas, quejas de campesinos. Lo que muestran es una maquinaria fiscal de extraordinaria densidad —monopolios reales del aceite y de otros productos, banca estatal, catastro, control de la circulación— superpuesta a una estructura agraria y sacerdotal egipcia que siguió funcionando como antes.\n\nEl reino seléucida, mucho más extenso y heterogéneo, funcionó de otra manera: menos control directo y más pacto con las ciudades griegas, los templos babilonios, las dinastías locales de Anatolia y las satrapías orientales. La historiografía lo trató durante décadas como un imperio fracasado y en descomposición permanente, en buena parte porque se leía a través de fuentes griegas y romanas hostiles. Los trabajos de Susan Sherwin-White y Amélie Kuhrt, apoyados en documentación cuneiforme, lo han reevaluado como un Estado que gobernó Mesopotamia con instrumentos aqueménidas y babilonios y que duró dos siglos y medio.","callout":null},{"type":"section","title":"Koiné, ciudad y saber","text":"El resultado cultural más duradero fue lingüístico. La *koiné*, un griego simplificado nacido del ático con influencias jónicas, se convirtió en lengua de administración, comercio y cultura desde el Adriático hasta Bactriana. En ella se redactaron contratos en el Fayum, inscripciones en Afganistán, la traducción de los Setenta de la Biblia hebrea en Alejandría y, tres siglos después, el Nuevo Testamento.\n\nLa polis no desapareció bajo las monarquías, como sostuvo durante mucho tiempo un relato de decadencia. Perdió autonomía en política exterior, pero conservó asambleas, magistraturas, finanzas y una vida cívica intensa, ahora sostenida por el evergetismo: notables y reyes financiaban murallas, gimnasios, fiestas y reparto de grano a cambio de honores públicos. El gimnasio se volvió la institución decisiva, porque marcaba quién pertenecía al cuerpo cívico griego: se era griego, en la práctica, por educación y por acceso a esa institución, no solo por origen.\n\nAlejandría concentró el proyecto intelectual más ambicioso. El Museo era una institución de investigación financiada por la corona, con salarios y manutención, y la Biblioteca aspiraba a reunir todos los libros del mundo; las cifras de rollos que dan las fuentes antiguas, de cuatrocientos mil a setecientos mil, no son verificables. Allí nació la filología como disciplina: Zenódoto, Aristófanes de Bizancio y Aristarco de Samotracia establecieron el texto de Homero, inventaron los signos críticos para marcar versos sospechosos y sistematizaron acentuación y puntuación. Calímaco compuso los *Pínakes*, un catálogo razonado en ciento veinte libros que es el antepasado de toda bibliografía.\n\nLa ciencia helenística alcanzó cotas que Europa tardaría casi dos milenios en recuperar. Euclides sistematizó la geometría hacia 300 a. C.; Arquímedes trabajó en estática, hidrostática y métodos de exhaución; Eratóstenes midió la circunferencia terrestre comparando la sombra del sol en Siena y Alejandría, con un error que no puede evaluarse con precisión porque no conocemos el valor exacto de su estadio; Aristarco de Samos propuso un sistema heliocéntrico que conocemos sobre todo porque Arquímedes lo cita para discutirlo; Hiparco descubrió la precesión de los equinoccios y catalogó estrellas. En Alejandría, Herófilo y Erasístrato practicaron disección humana sistemática, algo excepcional en la Antigüedad, y describieron el sistema nervioso distinguiendo nervios de tendones. El mecanismo de Anticitera, un calculador astronómico de engranajes del siglo II o I a. C. recuperado del mar, demuestra que la ingeniería de precisión existía y que hemos perdido casi todo su contexto.\n\nLa filosofía se desplazó hacia la conducta individual. Zenón de Citio fundó la Estoa hacia 300 a. C., Epicuro había abierto el Jardín en 306, y junto a cínicos y escépticos compartieron una pregunta común: cómo alcanzar la imperturbabilidad en un mundo que el individuo no controla. Se ha explicado ese giro como refugio ante la pérdida de la libertad política de la polis; la explicación es discutible, porque la vida cívica siguió siendo intensa, pero el desplazamiento del centro de gravedad hacia la ética personal es innegable.\n\nEn religión convivieron el culto a los soberanos, la fortuna personificada en Tyche, los cultos mistéricos y las divinidades mixtas creadas o promovidas por los reyes, como Sarapis en Alejandría. Isis inició desde Egipto una difusión mediterránea que llegaría hasta el corazón del Imperio romano.","callout":"Aristarco de Samos propuso el heliocentrismo hacia 270 a. C. Su obra se perdió: lo sabemos porque Arquímedes resume la hipótesis para discutirla. La historia de la ciencia antigua se lee en gran parte a través de sus huecos."},{"type":"section","title":"¿Helenización o negociación?","text":"El término «helenismo» como nombre de época lo acuñó Johann Gustav Droysen entre 1836 y 1843, y con él una tesis: la fusión de Grecia y Oriente habría creado el terreno cultural en el que después arraigó el cristianismo. La idea de una helenización entendida como difusión en un solo sentido —los griegos aportan cultura, los pueblos locales la reciben— dominó la disciplina más de un siglo, y encajaba sin esfuerzo con las categorías coloniales del XIX.\n\nLa documentación local ha obligado a revisarla. El cilindro de Antíoco I de Borsipa, de 268 a. C., está escrito en acadio, en escritura cuneiforme y con el formulario de los reyes babilonios: el monarca seléucida se presenta como restaurador del templo Ezida y usa títulos que se remontan mil quinientos años atrás. La piedra de Rosetta conserva un decreto sacerdotal de Menfis de 196 a. C. en jeroglífico, demótico y griego, en el que el clero egipcio concede honores cultuales a Ptolomeo V a cambio de privilegios fiscales confirmados: es un acta de negociación entre dos poderes, no una imposición.\n\nLos diarios astronómicos babilonios siguieron redactándose en cuneiforme hasta el siglo I a. C., dos siglos después de la conquista; los templos egipcios continuaron construyéndose con formas faraónicas —Edfú, Dendera y File son en buena parte de época ptolemaica—; el derecho egipcio siguió aplicándose en tribunales propios y el demótico siguió siendo lengua de contratos. Sherwin-White y Kuhrt propusieron por eso leer los reinos helenísticos desde el interior, con sus fuentes locales, y no solo como episodios de la historia griega.\n\nEl estatuto de «griego» funcionó además como categoría jurídica y fiscal más que étnica. En Egipto determinaba a qué tribunal se acudía y qué impuestos se pagaban, y era accesible por educación, servicio y lengua, de modo que hubo egipcios que aparecen en la documentación con dos nombres, uno griego y otro egipcio, según el contexto. Al mismo tiempo, el acceso a las posiciones de mando quedó reservado durante generaciones a la minoría grecomacedonia: hubo permeabilidad cultural y una jerarquía muy firme.\n\nEl caso más discutido es Judea. La revuelta macabea de 167-164 a. C. se ha contado como el choque frontal entre helenismo y judaísmo tras las medidas de Antíoco IV contra el culto del Templo. Elias Bickerman sostuvo en 1937 que la iniciativa partió de una élite judía helenizante de Jerusalén, y que el rey intervino en un conflicto ya interno; Martin Hengel mostró en 1969 que el judaísmo de esa época estaba ya profundamente helenizado en lengua, formas literarias y organización, de manera que la oposición tajante entre ambos términos es insostenible. La lectura actual describe una guerra civil judía con intervención real, y no un choque de civilizaciones.\n\nNada de esto convierte el periodo en un idilio multicultural. Hubo conquista, expropiación de tierra, fiscalidad pesada, deportaciones y revueltas indígenas recurrentes en Egipto durante los siglos III y II. Pero el modelo explicativo válido no es la difusión, sino la negociación asimétrica entre unos conquistadores minoritarios y unas estructuras locales que ni podían ser sustituidas ni tenían intención de desaparecer.","callout":null},{"type":"section","title":"El final romano y lo que quedó","text":"Roma absorbió los reinos helenísticos en siglo y medio, y en gran medida por invitación: fueron las potencias menores del Egeo, Rodas y Pérgamo, quienes la llamaron contra Macedonia. Cinoscéfalas (197) y Magnesia (190) redujeron a Antigónidas y Seléucidas; Pidna (168) liquidó el reino de Macedonia; en 146 Corinto fue destruida y Grecia quedó bajo control romano; en 133 Átalo III legó Pérgamo por testamento; Pompeyo terminó con lo que quedaba del reino seléucida en 63; y en 30, tras Accio, Egipto se convirtió en provincia con la muerte de Cleopatra VII, última soberana de una dinastía macedonia que había gobernado el país durante trescientos años.\n\nEl final es político y no cultural, y conviene subrayarlo porque la periodización engaña. El Mediterráneo oriental siguió funcionando en griego bajo dominio romano: la administración provincial, las ciudades, la filosofía, la medicina y la literatura. El Nuevo Testamento se escribió en koiné. El Imperio de Oriente que llamamos bizantino es la continuación institucional de ese mundo, y se llamaba a sí mismo romano mientras hablaba griego.\n\nLa herencia científica siguió otro camino. Los textos de Euclides, Arquímedes, Ptolomeo, Hiparco y los médicos alejandrinos fueron traducidos al siríaco y al árabe entre los siglos VIII y X, se estudiaron y corrigieron en Bagdad, El Cairo y Córdoba, y regresaron a Europa por vía latina desde el siglo XII. La cadena de transmisión que hizo posible la astronomía y la matemática europeas pasa por el helenismo y por el mundo islámico, no por una línea directa de Atenas a Florencia.\n\nQueda por último una advertencia de método. «Helenismo» y sus fechas canónicas, 323 a 30 a. C., son una construcción del siglo XIX: nadie vivió pensando que habitaba una época intermedia entre Grecia clásica y Roma. La etiqueta sigue siendo útil para nombrar un espacio y un tiempo con rasgos comunes —monarquías de conquista, koiné, ciudades nuevas, ciencia de corte—, siempre que no se confunda la etiqueta con una explicación.","callout":null},{"type":"concepts","items":[{"term":"Sarisa","definition":"Pica macedonia de cinco a seis metros, manejada a dos manos. Daba profundidad a la falange a costa de su maniobrabilidad."},{"term":"Hetairoi","definition":"Caballería de los compañeros del rey. Arma decisiva del sistema macedonio: la falange fijaba, la caballería cargaba."},{"term":"Liga de Corinto","definition":"Alianza de las ciudades griegas bajo hegemonía macedonia (337 a. C.), con paz general y guerra declarada a Persia."},{"term":"Diádocos","definition":"Los generales sucesores de Alejandro. Sus guerras, entre 323 y 281 a. C., fijaron el mapa de los reinos helenísticos."},{"term":"Doríktetos chóra","definition":"Tierra conquistada con la lanza. Fundamento de legitimidad de la realeza helenística: el poder lo da la victoria."},{"term":"Culto al soberano","definition":"Honores divinos rendidos al rey vivo o a la dinastía. Instrumento de cohesión en monarquías sin legitimidad tradicional."},{"term":"Cleruquía","definition":"Lote de tierra concedido a un colono grecomacedonio a cambio de servicio militar. Base social del Egipto ptolemaico."},{"term":"Koiné","definition":"Griego común derivado del ático. Lengua de administración, comercio y cultura desde el Adriático hasta Bactriana."},{"term":"Evergetismo","definition":"Financiación de obras y fiestas públicas por notables y reyes a cambio de honores. Sostuvo la vida cívica bajo las monarquías."},{"term":"Gimnasio","definition":"Institución educativa que marcaba la pertenencia al cuerpo cívico griego. Ser griego dependía en gran parte del acceso a ella."},{"term":"Museo y Biblioteca","definition":"Instituciones de investigación financiadas por los Ptolomeos en Alejandría. Origen de la filología y de la bibliografía."},{"term":"Pínakes","definition":"Catálogo razonado de la Biblioteca compuesto por Calímaco en ciento veinte libros. Antepasado de todo repertorio bibliográfico."},{"term":"Ataraxia","definition":"Imperturbabilidad del ánimo. Objetivo compartido por estoicos, epicúreos y escépticos en un mundo que el individuo no controla."},{"term":"Helenización","definition":"Modelo de difusión cultural en un solo sentido, hoy sustituido por el de negociación asimétrica entre conquistadores y estructuras locales."}]},{"type":"debates","items":[{"question":"¿Qué proyecto tenía Alejandro?","positions":[{"school":"Fusión y hermandad (Tarn, 1948)","argument":"Alejandro perseguía la unidad del género humano: bodas de Susa, incorporación de persas al ejército y a la administración, adopción de usos orientales y la oración de Opis sobre la concordia entre macedonios y persas."},{"school":"Poder y violencia (Badian, 1958; Bosworth)","argument":"Las medidas de integración fueron pragmáticas: no había macedonios suficientes para gobernar un imperio así. El registro incluye la eliminación de Filotas y Parmenión, la muerte de Clito, el caso de Calístenes y matanzas civiles en Tiro, Gaza y Masaga."}],"state":"La lectura idealista está abandonada en la investigación, aunque sigue viva en la cultura popular. El límite real es documental: sin fuentes contemporáneas, cualquier reconstrucción de sus intenciones descansa sobre autores que escriben tres siglos después."},{"question":"¿Hubo helenización o negociación cultural?","positions":[{"school":"Difusión (Droysen y la tradición del siglo XIX)","argument":"La conquista extendió la lengua, las instituciones y la cultura griegas por Oriente, y esa fusión creó el terreno común sobre el que se levantaron el Imperio romano y el cristianismo."},{"school":"Negociación asimétrica (Sherwin-White y Kuhrt, 1993)","argument":"Las fuentes locales muestran continuidad: cilindro de Antíoco I en acadio con formulario babilonio, decreto sacerdotal de Rosetta, diarios astronómicos cuneiformes hasta el siglo I a. C., templos y derecho egipcios en funcionamiento. Los reyes gobernaron pactando con estructuras que no podían sustituir."}],"state":"El modelo difusionista está descartado. Se estudia cada región con su documentación propia, y la discusión se ha desplazado a medir el grado de permeabilidad: hubo movilidad cultural real y, a la vez, una jerarquía de acceso al poder muy firme."},{"question":"¿Fue la revuelta macabea un choque entre helenismo y judaísmo?","positions":[{"school":"Conflicto interno (Bickerman, 1937)","argument":"La iniciativa de las reformas partió de una élite judía helenizante de Jerusalén enfrentada a los sectores tradicionalistas. Antíoco IV intervino en un conflicto que ya existía dentro de la comunidad."},{"school":"Judaísmo ya helenizado (Hengel, 1969)","argument":"Para el siglo II a. C. el judaísmo estaba impregnado de lengua, formas literarias y organización griegas, incluida la traducción de los Setenta. Oponer helenismo y judaísmo como bloques cerrados es insostenible."}],"state":"Se describe como guerra civil judía con intervención real, no como choque de civilizaciones. Persiste la discusión sobre el peso relativo de las decisiones de Antíoco IV y de la dinámica interna de Jerusalén."}]},{"type":"timeline","items":[{"date":"359–336 a. C.","event":"Reinado de Filipo II: reforma del ejército macedonio y hegemonía sobre Grecia."},{"date":"338 a. C.","event":"Queronea: derrota de Atenas y Tebas; al año siguiente, Liga de Corinto."},{"date":"336 a. C.","event":"Asesinato de Filipo en Egas; Alejandro accede al trono."},{"date":"334–331 a. C.","event":"Gránico, Issos, asedio de Tiro, Egipto y fundación de Alejandría."},{"date":"331 a. C.","event":"Gaugamela: derrota decisiva de Darío III."},{"date":"330 a. C.","event":"Incendio de Persépolis y muerte de Darío a manos de Beso."},{"date":"326 a. C.","event":"Batalla del Hidaspes y motín del Hífasis: el ejército se niega a seguir."},{"date":"323 a. C.","event":"Muerte de Alejandro en Babilonia; comienzan las guerras de los diádocos."},{"date":"301 a. C.","event":"Ipsos: muere Antígono Monoftalmos y se frustra la reunificación del imperio."},{"date":"281 a. C.","event":"Curupedio: quedan consolidados los tres grandes reinos."},{"date":"c. 280 a. C.","event":"Museo y Biblioteca de Alejandría en pleno funcionamiento."},{"date":"268 a. C.","event":"Cilindro de Antíoco I en Borsipa, en acadio y con formulario babilonio tradicional."},{"date":"196 a. C.","event":"Decreto de Menfis, conservado en la piedra de Rosetta."},{"date":"167–164 a. C.","event":"Revuelta macabea en Judea."},{"date":"168–30 a. C.","event":"De Pidna a la anexión de Egipto: Roma absorbe uno tras otro los reinos helenísticos."}]},{"type":"sources","items":[{"author":"Arriano","title":"Anábasis de Alejandro Magno","year":"s. II d. C.","kind":"primaria","note":"Relato mejor valorado; declara seguir a Ptolomeo y Aristóbulo, ambos participantes e interesados."},{"author":"Diodoro Sículo","title":"Biblioteca histórica, libros XVII-XX","year":"s. I a. C.","kind":"primaria","note":"Fuente principal para los diádocos, además de la campaña de Alejandro."},{"author":"Plutarco","title":"Vida de Alejandro","year":"c. 100 d. C.","kind":"primaria","note":"Biografía moral, no crónica militar. Fuente de buena parte de las anécdotas célebres."},{"author":"Quinto Curcio Rufo","title":"Historia de Alejandro Magno","year":"s. I d. C.","kind":"primaria","note":"Tradición «vulgata», atenta al drama y a la degradación moral del conquistador."},{"author":"Antíoco I","title":"Cilindro de Borsipa","year":"268 a. C.","kind":"primaria","note":"En acadio y con formulario babilonio milenario: un rey seléucida como restaurador del templo Ezida."},{"author":"Clero de Menfis","title":"Decreto de Menfis (piedra de Rosetta)","year":"196 a. C.","kind":"primaria","note":"Trilingüe. Honores cultuales a Ptolomeo V a cambio de privilegios: acta de negociación, no de imposición."},{"author":"Archivo de Zenón","title":"Papiros de gestión de una finca del Fayum","year":"c. 260-240 a. C.","kind":"primaria","note":"Miles de documentos sobre la maquinaria fiscal ptolemaica y la vida rural egipcia."},{"author":"Polibio","title":"Historias","year":"s. II a. C.","kind":"primaria","note":"Griego deportado a Roma; explica a sus compatriotas cómo Roma absorbió el mundo helenístico."},{"author":"Anónimo","title":"Primer libro de los Macabeos","year":"s. II-I a. C.","kind":"primaria","note":"Relato hasmoneo de la revuelta. Fuente de parte y no crónica neutral."},{"author":"Escribas babilonios","title":"Diarios astronómicos","year":"s. VII-I a. C.","kind":"primaria","note":"Observación continuada en cuneiforme dos siglos después de la conquista macedonia."},{"author":"Johann Gustav Droysen","title":"Geschichte des Hellenismus","year":"1836-1843","kind":"estudio","note":"Acuña el término y la tesis de la fusión greco-oriental como antesala del cristianismo."},{"author":"William W. Tarn","title":"Alexander the Great","year":"1948","kind":"estudio","note":"Formula la idea de Alejandro como promotor de la hermandad de la humanidad."},{"author":"Ernst Badian","title":"Alexander the Great and the Unity of Mankind","year":"1958","kind":"estudio","note":"Demolición de la lectura de Tarn a partir del propio registro de las fuentes."},{"author":"Martin Hengel","title":"Judentum und Hellenismus","year":"1969","kind":"estudio","note":"Demuestra hasta qué punto el judaísmo del siglo II a. C. estaba ya helenizado."},{"author":"A. B. Bosworth","title":"Conquest and Empire","year":"1988","kind":"estudio","note":"Síntesis de referencia: capacidad militar y violencia sistemática, sin proyecto reconstruible."},{"author":"Peter Green","title":"Alexander to Actium","year":"1990","kind":"estudio","note":"Panorama general del periodo, crítico con la idealización del helenismo."},{"author":"Susan Sherwin-White y Amélie Kuhrt","title":"From Samarkhand to Sardis","year":"1993","kind":"estudio","note":"Relee el reino seléucida desde la documentación local y no desde las fuentes grecorromanas."},{"author":"Dorothy J. Thompson","title":"Memphis under the Ptolemies","year":"1988","kind":"estudio","note":"Convivencia de estructuras griegas y egipcias en una gran ciudad del valle del Nilo."}]}]'::jsonb, 0, true
from public.topics where slug = 'helenismo'
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
select id, 'Ciudades, comercio y universidades', '[{"type":"section","title":"El despegue del año mil","text":"Todo lo demás depende de esto: entre el siglo X y el XIV la población europea pasó de unos treinta y cinco o cuarenta millones a unos setenta u ochenta. Las cifras son estimaciones construidas sobre censos fiscales parciales y registros señoriales, con márgenes amplios, pero la dirección no se discute. Ese crecimiento exigió más alimento, y el alimento salió de roturar y de producir mejor.\n\nLa roturación fue el motor menos vistoso y más decisivo: se talaron bosques, se desecaron marismas, se ganó tierra al mar en Flandes y se colonizó hacia el este del Elba. En paralelo se difundieron un conjunto de técnicas que no eran nuevas pero que ahora se combinaron: el arado pesado de vertedera, capaz de voltear los suelos húmedos y arcillosos del norte, la collera rígida que permite tirar del caballo sin ahogarlo, la herradura, el enganche en fila y la rotación trienal, que deja en barbecho un tercio de la tierra en lugar de la mitad y añade una siembra de primavera de leguminosas, con el efecto adicional de fijar nitrógeno y mejorar la dieta.\n\nLa energía hidráulica se generalizó. El Domesday Book de 1086 registra en Inglaterra más de cinco mil quinientos molinos de agua para una población en torno a uno o dos millones de habitantes: un molino por cada pocos centenares de personas. Los molinos no solo molían grano; se aplicaron al batán de los paños, a la sierra, al martillo de forja y al fuelle.\n\nLynn White Jr. defendió en 1962 que estas innovaciones técnicas explican por sí solas la transformación social de Europa. La crítica posterior ha corregido su cronología —el arado pesado y el estribo aparecen antes y se difunden más despacio de lo que él suponía— y ha desconfiado del determinismo: la técnica estaba disponible mucho antes de que se generalizara, así que hay que explicar por qué se adoptó cuando se adoptó. La respuesta apunta a la demanda, a la relativa estabilidad tras el fin de las incursiones vikingas, magiares y sarracenas, y a señores interesados en un excedente comercializable.\n\nSuele añadirse un factor climático, el llamado óptimo medieval de los siglos X a XIII. Conviene manejarlo con cuidado: las reconstrucciones globales muestran que no hubo un calentamiento sincrónico en todo el planeta, sino anomalías regionales, y que en Europa occidental el efecto fue real pero moderado. Es un factor favorable, no una explicación.","callout":"La rotación trienal no solo aumenta la superficie sembrada de la mitad a dos tercios: la siembra de primavera introduce leguminosas, que fijan nitrógeno y aportan proteína. Un cambio de calendario agrícola es también un cambio de dieta."},{"type":"section","title":"La ciudad: un estatuto jurídico antes que un tamaño","text":"En la Edad Media una ciudad no se define por el número de habitantes sino por el derecho. Lo que separa a la villa del campo es una carta —fuero, carta de franquicia, privilegio— que sustituye las obligaciones señoriales por un censo fijo en dinero, reconoce un tribunal propio, una milicia, un mercado y, a menudo, la libertad personal de quien reside en ella un tiempo. La fórmula alemana que resume la práctica, «el aire de la ciudad hace libre al cabo de un año y un día», es una formulación tardía de una costumbre real: el siervo huido que no era reclamado en ese plazo quedaba libre.\n\nLa forma más ambiciosa fue la comuna: una asociación jurada de vecinos que se compromete mutuamente y negocia, compra o arranca por la fuerza el gobierno de la ciudad a su señor u obispo. Aparece en el norte de Italia a finales del siglo XI y se extiende por Flandes, Renania y el norte de Francia. En Italia derivó en repúblicas urbanas con cónsules y después con *podestà*, un magistrado forastero contratado por un año precisamente para que no tuviera clientela local.\n\nDentro de la ciudad, la vida económica se organizó en gremios. Su función declarada era garantizar la calidad, formar aprendices y sostener a viudas y enfermos; su función efectiva incluía fijar precios, limitar la competencia y controlar quién podía ejercer un oficio. Fueron a la vez escuela técnica, seguro social y monopolio, y sus tensiones internas —maestros contra oficiales, oficios mayores contra menores— alimentaron los conflictos urbanos del siglo XIV.\n\nLas magnitudes conviene tenerlas presentes para no exagerar. Hacia 1300 París pudo rondar los doscientos mil habitantes, y Milán, Venecia y Florencia el entorno de los cien mil; pero la inmensa mayoría de las localidades con estatuto urbano tenían entre dos mil y diez mil, y más del ochenta por ciento de la población europea seguía viviendo en el campo. La ciudad fue decisiva por lo que concentraba —capital, derecho, escritura, información—, no por su peso demográfico.\n\nLa explicación clásica del renacimiento urbano la dio Henri Pirenne: las ciudades habrían nacido del comercio de larga distancia, alrededor de mercaderes ambulantes que se asentaban junto a fortalezas y monasterios. La investigación posterior ha invertido buena parte del argumento. Muchas ciudades crecieron sobre sedes episcopales que nunca desaparecieron del todo, el motor inicial fue el excedente agrario y el mercado comarcal, y el comercio internacional llegó a menudo después. La aportación de Pirenne que sí resiste es haber puesto el foco en la ciudad como sujeto histórico con dinámica propia, y no como apéndice del mundo señorial.","callout":null},{"type":"section","title":"Comercio: rutas, crédito e instrumentos","text":"El eje del comercio europeo unió dos polos manufactureros: Flandes, que tejía paños con lana inglesa, e Italia, que los acababa, teñía y redistribuía, y que controlaba el acceso a las especias, la seda y el alumbre del Mediterráneo oriental. Entre ambos se situaron las ferias de Champaña, un ciclo de seis ferias anuales encadenadas en cuatro localidades que funcionó durante casi dos siglos como cámara de compensación de Europa: allí no solo se compraban mercancías, se saldaban deudas y se cambiaban monedas bajo la protección de los condes.\n\nEn el norte, la Hansa articuló el Báltico y el mar del Norte desde Lübeck, con factorías permanentes en Nóvgorod, Bergen, Brujas y Londres, y un comercio de productos de volumen: cereal, madera, pescado salado, cera, pieles. En el sur, Venecia y Génova compitieron por las rutas del Levante y por colonias en el mar Negro; la cuarta cruzada, desviada en 1204 contra Constantinopla, se explica bastante mejor como operación comercial veneciana que como empresa religiosa.\n\nLo que hizo posible ese volumen fue una batería de instrumentos jurídicos y contables. La *commenda* asociaba a quien ponía el capital con quien viajaba y trabajaba, repartiendo el beneficio —habitualmente tres cuartas partes para el capital— y limitando la pérdida al capital aportado: es el antepasado directo de la sociedad en comandita. La letra de cambio permitió pagar en una plaza y cobrar en otra, en otra moneda, sin mover metal. La contabilidad por partida doble aparece en los libros italianos a comienzos del siglo XIV, mucho antes de que Luca Pacioli la codificara en 1494. Y en el siglo XIV se documenta ya el seguro marítimo como contrato autónomo.\n\nTodo esto chocaba con la prohibición canónica de la usura, entendida como cobrar cualquier cosa por encima del principal. La respuesta no fue ignorar la norma sino rodearla con técnica jurídica: el interés se escondía en el diferencial de cambio entre dos monedas y dos plazas, en el reparto del riesgo o en penalizaciones por demora pactadas de antemano. Los teólogos afinaron las excepciones —*damnum emergens*, *lucrum cessans*— y la práctica mercantil avanzó por ese hueco. A los judíos, excluidos de gremios y de la propiedad de la tierra en muchos territorios, se les asignó el papel de prestamistas y después se les reprochó ejercerlo.\n\nEl síntoma más claro del cambio de escala es monetario. Europa llevaba siglos sin acuñar oro de manera regular; en 1252 Génova y Florencia emitieron el genovino y el florín, y Venecia el ducado en 1284. El florín se convirtió en moneda de referencia internacional durante dos siglos.\n\nRobert Lopez llamó a este conjunto «revolución comercial», y la etiqueta ha hecho fortuna. Tiene un problema de perspectiva: los documentos de la Gueniza de El Cairo estudiados por Shelomo Goitein muestran que el mundo islámico usaba mucho antes instrumentos equivalentes —la *suftaya*, comparable a la letra de cambio, y el *qirad*, muy próximo a la *commenda*—, y Abraham Udovitch defendió que la transmisión fue directa. Europa no inventó tanto como difundió, sistematizó y llevó a escala.","callout":"La *commenda* limita la pérdida del inversor al capital aportado y reparte el beneficio con quien viaja. Responsabilidad limitada y separación entre capital y gestión: dos rasgos de la empresa moderna, documentados en Venecia en el siglo XI."},{"type":"section","title":"La universidad: una corporación con privilegios","text":"*Universitas* no significaba universidad sino corporación: el conjunto de personas asociadas para un fin, con personalidad jurídica, estatutos y jurisdicción. La universidad medieval es, literalmente, un gremio de la enseñanza, y ese origen explica casi todo lo demás.\n\nNacieron con dos modelos opuestos. En Bolonia la corporación era de estudiantes: contrataban a los profesores, les fijaban el programa y los multaban si se saltaban una lección o no terminaban el temario. En París la corporación era de maestros, agrupados por facultades y naciones, con el canciller de la catedral como contrapeso. De ahí derivan las dos familias europeas de gobierno universitario. La fecha de 1088 para Bolonia no procede de ningún documento: se fijó en 1888, cuando la ciudad organizó su octavo centenario.\n\nEl instrumento decisivo fueron los privilegios. La *Authentica Habita* de Federico I, en 1155, protegió a los estudiantes en viaje y les permitió ser juzgados por su maestro o por el obispo, no por el tribunal local. Los papas concedieron después la *licentia ubique docendi*, la licencia para enseñar en cualquier lugar de la cristiandad, que es el origen del reconocimiento internacional de títulos. Y las corporaciones descubrieron pronto su arma: la huelga y la dispersión. Tras la revuelta y la represión de 1229, los maestros de París suspendieron las clases y se marcharon dos años; en 1231 Gregorio IX cedió con *Parens scientiarum*, que reconoció a la universidad el derecho a darse estatutos propios y a suspender la docencia.\n\nEl método era tan característico como el contenido. La *lectio* comentaba un texto autorizado; la *quaestio* extraía de él un problema; la *disputatio* enfrentaba en público argumentos y contraargumentos ante un maestro que después determinaba. Abelardo había fijado el procedimiento en *Sic et non*, alineando ciento cincuenta y ocho cuestiones con autoridades contradictorias sobre cada una y dejando al lector la tarea de resolverlas. Pensar consistía en organizar el desacuerdo, no en evitarlo.\n\nEl combustible llegó de fuera. Entre los siglos XII y XIII se tradujo al latín, sobre todo desde el árabe en Toledo y desde el griego en Sicilia, el corpus completo de Aristóteles junto con los comentarios de Avicena y Averroes y la medicina y matemática griegas y árabes. La incorporación fue conflictiva: la enseñanza de la física y la metafísica aristotélicas se prohibió en París en 1210, y las condenas de 1270 y 1277 —esta última con doscientas diecinueve proposiciones— muestran hasta qué punto la institución estaba discutiendo consigo misma sobre los límites entre razón y fe.\n\nConviene no idealizarla. Se estudiaba en latín, se accedía por vía clerical, costaba dinero y las mujeres quedaban excluidas por completo. Fue una institución de una minoría muy pequeña. Su importancia está en otro sitio: creó un cuerpo profesional de intelectuales urbanos asalariados —Jacques Le Goff los llamó los intelectuales de la Edad Media— y una forma corporativa autónoma que ha sobrevivido ocho siglos.","callout":"La huelga de París de 1229 duró dos años y terminó con el papa concediendo a la universidad estatutos propios. El derecho de autogobierno académico nació de un conflicto laboral."},{"type":"section","title":"Reforma, derecho y persecución","text":"La transformación institucional más profunda del periodo empezó dentro de la Iglesia. La reforma gregoriana quiso liberar al clero del control de los poderes laicos: prohibición de la simonía, celibato obligatorio, elección de los obispos sin injerencia. El *Dictatus papae* de 1075 llevó la pretensión hasta el extremo de afirmar la potestad papal para deponer emperadores, y la querella de las investiduras que siguió, con el episodio de Canossa en 1077, terminó en el compromiso de Worms de 1122: el emperador renuncia a la investidura con los símbolos espirituales y conserva la temporal.\n\nHarold Berman propuso leer ese conflicto como una «revolución papal» fundadora de la tradición jurídica occidental. Su argumento es que la separación entre dos jurisdicciones que se reconocen mutuamente competentes obligó a definir con precisión el ámbito de cada una, y de ahí salieron el derecho canónico como sistema, la recuperación del derecho romano y la idea, poco frecuente en la historia, de que el poder está sometido a un derecho que no fabrica él mismo.\n\nLos materiales acompañaron. Hacia 1140 Graciano compuso la *Concordia de los cánones discordantes*, que aplicó al derecho de la Iglesia el mismo método escolástico de armonizar autoridades enfrentadas. En Bolonia, los glosadores reconstruyeron el *Corpus iuris civilis* justinianeo y formaron a generaciones de juristas que las monarquías contrataron de inmediato: el jurista profesional es una figura de este periodo, y el crecimiento del Estado en los siglos siguientes se apoya en él.\n\nLa misma capacidad de organización se aplicó a definir y perseguir la disidencia. El IV Concilio de Letrán de 1215 impuso la confesión anual y la comunión pascual, definió la transustanciación y ordenó signos distintivos para judíos y musulmanes. Los cátaros del Languedoc fueron combatidos con una cruzada interna entre 1209 y 1229, y a partir de los años treinta del siglo XIII se generalizó la *inquisitio*, un procedimiento judicial en el que el tribunal investiga de oficio sin necesidad de acusador, con registro escrito y archivo: una innovación procesal de largo recorrido, adoptada después por la justicia civil europea.\n\nR. I. Moore sintetizó esta deriva en 1987 con una tesis discutida y muy productiva: entre 1000 y 1250 Europa se convirtió en una «sociedad persecutoria», que construyó categorías estables de excluidos —herejes, judíos, leprosos, sodomitas— y desarrolló instituciones permanentes para identificarlos y castigarlos. Su punto decisivo es que la persecución no fue el desbordamiento espontáneo del fanatismo popular, sino el producto de un poder cada vez más letrado y burocrático que necesitaba definir sus fronteras. La crítica le ha reprochado agrupar fenómenos heterogéneos y minusvalorar la hostilidad social preexistente; el marco, sin embargo, se ha impuesto. Inglaterra expulsó a sus judíos en 1290 y Francia en 1306.\n\nA la vez, la religiosidad urbana produjo respuestas que la Iglesia consiguió integrar. Franciscanos y dominicos, fundados entre 1209 y 1216, predicaban en las ciudades, vivían de la limosna y ocuparon con rapidez las cátedras universitarias. Tomás de Aquino y Buenaventura fueron frailes mendicantes y profesores en París: la orden nacida para predicar a los pobres acabó administrando la alta cultura.","callout":null},{"type":"section","title":"Los límites del crecimiento","text":"Hacia 1270 el modelo empezó a agotarse. La roturación había llegado a tierras marginales de rendimiento bajo, las herencias fragmentaban las explotaciones, la relación entre población y superficie cultivable se deterioraba y el precio del grano subía en términos reales. La gran hambruna del norte de Europa de 1315-1317, provocada por varios años de lluvias catastróficas, encontró a una población ya en el límite. La peste negra de 1348 llegaría después sobre ese terreno.\n\nConviene además situar el episodio en su escala real. Mientras Europa redescubría la moneda de oro, la China de los Song tenía ciudades de más de un millón de habitantes, imprenta de tipos móviles desde el siglo XI y papel moneda emitido por el Estado; el mundo islámico manejaba desde antes los instrumentos de crédito que Italia adoptó; y el comercio del océano Índico movía volúmenes que el Mediterráneo no alcanzaba. Lo que distingue a la Europa de estos siglos no es una superioridad técnica ni económica, sino una forma jurídica peculiar: la proliferación de corporaciones autónomas con personalidad propia —comunas, gremios, universidades, órdenes— capaces de contratar, litigar y perdurar más allá de sus miembros. Es un argumento institucional, no una jerarquía de civilizaciones.\n\nTambién quedaron fuera del reparto los de siempre. La condición campesina mejoró en libertad jurídica pero no necesariamente en nivel de vida; las mujeres trabajaban en los oficios urbanos y en algunos casos formaban gremios propios, como los de la seda en París, pero quedaron excluidas de la universidad, de las magistraturas y de la mayoría de los maestrazgos; y las minorías religiosas pasaron de tolerancia interesada a expulsión en poco más de un siglo.\n\nEl balance, sin embargo, es el de una transformación de fondo. En el año mil Europa era un mundo rural, de intercambio local y cultura monástica; en 1300 tenía ciudades con derecho propio, una red mercantil que unía Nóvgorod con Alejandría, instrumentos de crédito reutilizables, un cuerpo de juristas profesionales y una veintena de universidades. Ninguna de esas cosas desapareció con la crisis del siglo XIV: fue el marco dentro del cual se afrontó.","callout":null},{"type":"concepts","items":[{"term":"Roturación","definition":"Puesta en cultivo de bosques, marismas y eriales. Principal fuente de alimento adicional entre los siglos XI y XIII."},{"term":"Rotación trienal","definition":"Ciclo que deja en barbecho un tercio de la tierra en vez de la mitad e introduce una siembra de primavera de leguminosas."},{"term":"Carruca","definition":"Arado pesado de vertedera con ruedas, capaz de voltear los suelos húmedos y arcillosos del norte de Europa."},{"term":"Carta de franquicia","definition":"Documento que concede a una localidad libertades, tribunal y mercado a cambio de un censo fijo. Define jurídicamente la ciudad."},{"term":"Comuna","definition":"Asociación jurada de vecinos que arranca o negocia el gobierno de la ciudad a su señor. Origen de las repúblicas urbanas italianas."},{"term":"Podestà","definition":"Magistrado forastero contratado por un año en las ciudades italianas, precisamente para que no tuviera clientela local."},{"term":"Gremio","definition":"Corporación de oficio. Escuela técnica, seguro social y monopolio a la vez: controlaba calidad, formación, precios y acceso."},{"term":"Ferias de Champaña","definition":"Ciclo de seis ferias anuales que funcionó como cámara de compensación entre Flandes e Italia durante casi dos siglos."},{"term":"Commenda","definition":"Contrato que asocia capital y trabajo viajero, reparte el beneficio y limita la pérdida al capital aportado."},{"term":"Letra de cambio","definition":"Instrumento para pagar en una plaza y cobrar en otra, en otra moneda. Permitía además ocultar el interés en el tipo de cambio."},{"term":"Usura","definition":"Cobro de cualquier cantidad por encima del principal, prohibido por el derecho canónico. Se rodeó con técnica jurídica, no se suprimió."},{"term":"Universitas","definition":"Corporación con personalidad jurídica, estatutos y jurisdicción propias. La universidad es, literalmente, un gremio de la enseñanza."},{"term":"Licentia ubique docendi","definition":"Licencia papal para enseñar en cualquier lugar de la cristiandad. Origen del reconocimiento internacional de títulos."},{"term":"Disputatio","definition":"Ejercicio público de argumentos enfrentados ante un maestro que determina. El método escolástico organiza el desacuerdo en vez de evitarlo."},{"term":"Inquisitio","definition":"Procedimiento en el que el tribunal investiga de oficio, sin acusador, con registro escrito. Innovación procesal adoptada después por la justicia civil."}]},{"type":"debates","items":[{"question":"¿Qué explica el renacimiento urbano europeo?","positions":[{"school":"Comercio de larga distancia (Pirenne)","argument":"Las ciudades nacieron del comercio: mercaderes ambulantes que se asientan junto a fortalezas y monasterios y acaban formando un núcleo con derecho propio. La burguesía es un producto del intercambio internacional."},{"school":"Crecimiento agrario y mercado comarcal","argument":"Primero hubo excedente rural y mercados locales; el comercio internacional llegó después. Muchas ciudades crecieron sobre sedes episcopales que nunca desaparecieron del todo, de modo que la continuidad pesa más que la refundación."}],"state":"La secuencia de Pirenne está invertida por la investigación posterior: el motor inicial fue agrario y local. Lo que se conserva de su aportación es haber tratado la ciudad como sujeto histórico con lógica propia y no como apéndice del mundo señorial."},{"question":"¿Hubo una «revolución comercial» europea?","positions":[{"school":"Revolución comercial (Robert S. Lopez)","argument":"Entre los siglos XI y XIII Europa creó la sociedad mercantil, la letra de cambio, la contabilidad por partida doble, el seguro y la banca, y volvió a acuñar oro. Un cambio de naturaleza, no de grado."},{"school":"Difusión desde el Mediterráneo islámico (Goitein, Udovitch)","argument":"Los documentos de la Gueniza de El Cairo muestran instrumentos equivalentes en uso mucho antes: la *suftaya*, comparable a la letra de cambio, y el *qirad*, muy próximo a la *commenda*. Europa sistematizó y escaló lo que recibió."}],"state":"Se acepta la magnitud del cambio europeo y se rechaza la idea de invención desde cero. La discusión abierta es hasta qué punto la transmisión fue directa o hubo desarrollos paralelos a partir de un fondo mediterráneo común."},{"question":"¿Se convirtió Europa en una «sociedad persecutoria»?","positions":[{"school":"Persecución construida desde arriba (R. I. Moore, 1987)","argument":"Entre 1000 y 1250 se crearon categorías estables de excluidos —herejes, judíos, leprosos, sodomitas— e instituciones permanentes para identificarlos. El motor fue un poder letrado y burocrático que necesitaba definir sus fronteras, no el fanatismo espontáneo."},{"school":"Crítica","argument":"La tesis agrupa fenómenos muy distintos bajo una sola etiqueta e infravalora la hostilidad social previa y los conflictos locales concretos que precipitaron cada episodio."}],"state":"El marco de Moore se ha impuesto como punto de partida, con matices: hoy se estudia la interacción entre la iniciativa institucional y las tensiones locales, en vez de atribuir la persecución a una sola de las dos."}]},{"type":"timeline","items":[{"date":"1075","event":"*Dictatus papae* de Gregorio VII: comienza la querella de las investiduras."},{"date":"1077","event":"Enrique IV ante Gregorio VII en Canossa."},{"date":"1086","event":"Domesday Book: el censo inglés registra más de cinco mil quinientos molinos de agua."},{"date":"c. 1088","event":"Fecha convencional de la escuela de derecho de Bolonia, fijada en 1888."},{"date":"1122","event":"Concordato de Worms: se separan jurisdicción espiritual y temporal."},{"date":"c. 1140","event":"Graciano compone el *Decreto*, base del derecho canónico clásico."},{"date":"1155","event":"*Authentica Habita*: Federico I protege a los estudiantes en camino."},{"date":"Siglos XII–XIII","event":"Ciclo de las ferias de Champaña, bisagra entre Flandes e Italia."},{"date":"1209–1216","event":"Nacen franciscanos y dominicos, órdenes de predicación urbana."},{"date":"1209–1229","event":"Cruzada albigense contra los cátaros del Languedoc."},{"date":"1215","event":"IV Concilio de Letrán: confesión anual, transustanciación y signos distintivos para judíos y musulmanes."},{"date":"1231","event":"*Parens scientiarum*: Gregorio IX consagra los privilegios de la Universidad de París."},{"date":"1252","event":"Génova y Florencia acuñan de nuevo moneda de oro; Venecia lo hará en 1284."},{"date":"1277","event":"El obispo Tempier condena 219 proposiciones enseñadas en París."},{"date":"1290","event":"Expulsión de los judíos de Inglaterra; Francia hará lo propio en 1306."}]},{"type":"sources","items":[{"author":"Gregorio VII","title":"Dictatus papae","year":"1075","kind":"primaria","note":"Veintisiete proposiciones sobre la potestad papal, incluida la de deponer emperadores."},{"author":"Administración de Guillermo I","title":"Domesday Book","year":"1086","kind":"primaria","note":"Censo fiscal de Inglaterra. Base cuantitativa para la economía rural y los molinos."},{"author":"Pedro Abelardo","title":"Sic et non","year":"c. 1120","kind":"primaria","note":"Ciento cincuenta y ocho cuestiones con autoridades contradictorias. Fija el método de la disputa escolástica."},{"author":"Graciano","title":"Concordia discordantium canonum (Decreto)","year":"c. 1140","kind":"primaria","note":"Aplica el método escolástico al derecho de la Iglesia. Base del derecho canónico clásico."},{"author":"Federico I","title":"Authentica Habita","year":"1155","kind":"primaria","note":"Protege a los estudiantes en viaje y los sustrae al tribunal local."},{"author":"Luis VII","title":"Carta de franquicia de Lorris","year":"c. 1155","kind":"primaria","note":"Modelo de fuero urbano copiado por centenares de localidades francesas."},{"author":"IV Concilio de Letrán","title":"Cánones","year":"1215","kind":"primaria","note":"Confesión anual, transustanciación y signos distintivos para judíos y musulmanes."},{"author":"Gregorio IX","title":"Parens scientiarum","year":"1231","kind":"primaria","note":"Reconoce a la Universidad de París estatutos propios tras dos años de huelga."},{"author":"Esteban Tempier","title":"Condena de 219 proposiciones","year":"1277","kind":"primaria","note":"Muestra el conflicto interno de la universidad sobre los límites entre razón y fe."},{"author":"Documentos de la Gueniza de El Cairo","title":"Correspondencia y contratos mercantiles","year":"s. XI–XIII","kind":"primaria","note":"Archivo accidental de una comunidad judía. Fuente central sobre el comercio mediterráneo islámico."},{"author":"Francesco Balducci Pegolotti","title":"La pratica della mercatura","year":"c. 1340","kind":"primaria","note":"Manual de un factor de los Bardi: pesos, monedas, aranceles y rutas hasta China."},{"author":"Henri Pirenne","title":"Las ciudades de la Edad Media","year":"1927","kind":"estudio","note":"Sitúa el origen urbano en el comercio de larga distancia. Secuencia hoy invertida, enfoque conservado."},{"author":"Lynn White Jr.","title":"Medieval Technology and Social Change","year":"1962","kind":"estudio","note":"Atribuye la transformación social a la técnica. Criticado por su cronología y su determinismo."},{"author":"Jacques Le Goff","title":"Los intelectuales en la Edad Media","year":"1957","kind":"estudio","note":"El maestro universitario como trabajador urbano y profesional del pensamiento."},{"author":"S. D. Goitein","title":"A Mediterranean Society","year":"1967-1993","kind":"estudio","note":"Reconstrucción del mundo mercantil islámico y judío a partir de la Gueniza."},{"author":"Robert S. Lopez","title":"The Commercial Revolution of the Middle Ages","year":"1971","kind":"estudio","note":"Formula la idea de revolución comercial entre los siglos X y XIII."},{"author":"Georges Duby","title":"Guerreros y campesinos","year":"1973","kind":"estudio","note":"El despegue agrario como base material de todo el proceso."},{"author":"Harold J. Berman","title":"Law and Revolution","year":"1983","kind":"estudio","note":"La querella de las investiduras como origen de la tradición jurídica occidental."},{"author":"R. I. Moore","title":"The Formation of a Persecuting Society","year":"1987","kind":"estudio","note":"La persecución sistemática como producto de un poder letrado y burocrático."}]}]'::jsonb, 0, true
from public.topics where slug = 'plena-edad-media'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Prehistoria y neolitización', '[{"type":"section","title":"Qué es la prehistoria y con qué se estudia","text":"La prehistoria es el periodo anterior a la escritura, y por tanto una categoría relativa: termina en momentos distintos según la región. Mesopotamia sale de ella hacia 3300 a. C.; buena parte del África subsahariana o de Oceanía, milenios después. Esa relatividad ha sido criticada porque hace del alfabetismo el criterio de entrada en la historia, con una carga eurocéntrica evidente. Muchos autores prefieren hoy hablar de «sociedades sin escritura» o usar directamente las secuencias arqueológicas.\n\nLa disciplina se apoya en fuentes materiales y en técnicas de laboratorio. La datación por radiocarbono, desarrollada por Willard Libby en 1949, permitió por primera vez fechar en términos absolutos hasta unos 50.000 años; la termoluminiscencia, el uranio-torio y el potasio-argón cubren horizontes más antiguos. La paleoecología reconstruye climas mediante polen, isótopos de oxígeno y sondeos de hielo.\n\nLa transformación más importante de las últimas dos décadas ha sido la paleogenética. Desde que Svante Pääbo secuenció el genoma neandertal en 2010, el ADN antiguo ha reescrito la historia de las migraciones humanas: ha demostrado el mestizaje entre sapiens y neandertales, ha identificado a los denisovanos a partir de un fragmento de falange, y ha revelado que la Europa actual resulta de al menos tres oleadas superpuestas —cazadores-recolectores locales, agricultores anatolios y pastores esteparios.\n\nConviene una advertencia metodológica: la conservación diferencial sesga lo que vemos. La piedra y el hueso perduran; la madera, la fibra, la piel y el discurso, no. Cualquier reconstrucción de la vida prehistórica trabaja sobre un registro incompleto y sistemáticamente inclinado hacia lo duradero.","callout":"La calibración del radiocarbono corrige la variación del C-14 atmosférico. Por eso las fechas se expresan «cal BP» o «cal a. C.»: una fecha sin calibrar y otra calibrada no son comparables."},{"type":"section","title":"Evolución humana: un arbusto, no una escalera","text":"La imagen popular de una progresión lineal de simio a humano es incorrecta. La evidencia fósil dibuja un arbusto ramificado en el que varias especies de homínidos coexistieron durante largos periodos: australopitecos, parántropos, Homo habilis, Homo erectus, Homo naledi, Homo floresiensis, neandertales, denisovanos y sapiens.\n\nLos rasgos que asociamos a lo humano no aparecieron a la vez. El bipedismo es muy antiguo —las huellas de Laetoli tienen 3,6 millones de años—, mientras que el gran encefalización llegó mucho después. Las herramientas de Lomekwi, de 3,3 millones de años, son anteriores al género Homo, lo que rompe la ecuación entre fabricar útiles y ser humano.\n\nEl control del fuego fue decisivo. Richard Wrangham ha defendido en *Catching Fire* (2009) que la cocción, al externalizar parte de la digestión, permitió reducir el aparato digestivo y sostener un cerebro metabólicamente caro. La cronología exacta se discute: hay indicios en Wonderwerk hacia 1 millón de años, pero el uso sistemático solo está bien documentado desde hace unos 400.000.\n\nEl yacimiento de Atapuerca ha sido central en este debate. La Sima de los Huesos ha entregado más de 6.500 fósiles de al menos 28 individuos, un conjunto sin equivalente, y su análisis genético los sitúa en el linaje neandertal. La Gran Dolina aportó los restos de *Homo antecessor*, con marcas de corte que documentan canibalismo, probablemente de tipo nutricional.\n\nSobre los neandertales, la revisión ha sido drástica. Enterraban a sus muertos, cuidaban de individuos con lesiones incapacitantes, usaban pigmentos, fabricaban adhesivos de brea —un proceso que exige control térmico en ausencia de oxígeno— y construyeron estructuras de espeleotemas en la cueva de Bruniquel hace 176.000 años. Su desaparición como población diferenciada no fue una extinción total: entre el 1 % y el 2 % del genoma de los humanos no africanos actuales es neandertal.","callout":null},{"type":"section","title":"Sociedades cazadoras-recolectoras del Paleolítico","text":"Durante casi toda la prehistoria, los humanos vivieron en grupos móviles de tamaño reducido que explotaban recursos estacionales. Esa movilidad no implica precariedad permanente. Los estudios etnográficos de sociedades cazadoras-recolectoras recientes, sintetizados en el influyente simposio *Man the Hunter* (1968), estimaron dedicaciones de subsistencia de entre tres y cinco horas diarias, lo que llevó a Marshall Sahlins a hablar de «la sociedad opulenta original».\n\nEsa formulación se ha matizado mucho: las poblaciones estudiadas en el siglo XX ocupaban ambientes marginales y no son análogos directos de las paleolíticas. Aun así, la evidencia paleopatológica apunta en la misma dirección: los primeros agricultores presentan, respecto a los cazadores-recolectores previos, menor estatura, más caries, más anemia y más marcadores de estrés nutricional.\n\nLa organización social era probablemente igualitaria en lo económico, con fuertes mecanismos de reparto y de nivelación. Pero el registro funerario muestra excepciones llamativas: los enterramientos de Sunguir (Rusia, c. 34.000 a. C.) incluyen individuos cubiertos con miles de cuentas de marfil que representan miles de horas de trabajo. La desigualdad no espera a la agricultura.\n\nLa división sexual del trabajo tampoco fue tan rígida como se asumió. Los análisis de restos de Wilamaya Patjxa (Perú) y las revisiones de ajuares de caza en las Américas han identificado mujeres enterradas con equipo cinegético, y el estudio de marcadores óseos de actividad muestra patrones menos dicotómicos de lo esperado.","callout":"La recolección aportaba probablemente la mayor parte de las calorías en muchos entornos. La etiqueta «cazadores-recolectores» invierte, en ese sentido, el peso real de cada actividad."},{"type":"section","title":"Arte, símbolo y pensamiento","text":"El arte paleolítico europeo —Chauvet, Lascaux, Altamira, El Castillo, Tito Bustillo— constituye el corpus simbólico más antiguo conservado a gran escala. Sus temas dominantes son animales, signos geométricos y manos en negativo; las figuras humanas son escasas y a menudo esquemáticas.\n\nLas interpretaciones han cambiado con las modas teóricas. La «magia de caza» de Breuil, que veía en las pinturas un ritual propiciatorio, fue sustituida por el estructuralismo de Leroi-Gourhan, que buscaba oposiciones binarias en la distribución de las figuras, y después por lecturas chamánicas como la de David Lewis-Williams en *La mente en la caverna* (2002), basadas en la neuropsicología de los estados alterados de conciencia. Ninguna se impone hoy de forma concluyente.\n\nLa datación por uranio-torio de costras calcáreas ha alterado el marco cronológico: algunas manifestaciones de La Pasiega, Maltravieso y Ardales superarían los 64.000 años, lo que las situaría antes de la llegada de sapiens a Europa y las atribuiría a neandertales. La propuesta sigue siendo discutida metodológicamente, pero, de confirmarse, elimina el último rasgo que se reservaba en exclusiva a nuestra especie.\n\nFuera de Europa el registro es igual de antiguo: las figuras de Sulawesi y Borneo superan los 40.000 años, y en Blombos (Sudáfrica) hay grabados geométricos en ocre de hace 73.000 años. El foco europeo de los manuales refleja la historia de la investigación, no la distribución real del fenómeno.","callout":null},{"type":"section","title":"La neolitización: cómo y por qué","text":"Hacia el final del Pleistoceno, varias poblaciones del suroeste asiático empezaron a cultivar y a domesticar animales. El proceso fue lento —siglos de manipulación previa a la domesticación morfológica— e independiente en al menos siete focos mundiales: Creciente Fértil, China (mijo y arroz), Mesoamérica (maíz), Andes (patata, quinoa), Nueva Guinea (taro), África occidental (sorgo) y este de Norteamérica.\n\nSobre las causas se han propuesto tres grandes familias de explicación. Gordon Childe defendió en los años treinta la «hipótesis del oasis»: la desecación posglacial habría concentrado a humanos, plantas y animales en torno a los puntos de agua. Lewis Binford y Kent Flannery reformularon el problema en clave demográfica: la presión de población en zonas marginales habría obligado a intensificar la producción. Una tercera línea, de Jacques Cauvin en *Naissance des divinités, naissance de l''agriculture* (1994), invierte la causalidad y sitúa primero un cambio simbólico y religioso.\n\nGöbekli Tepe, excavado por Klaus Schmidt desde 1995, es la pieza que más ha forzado la revisión. Sus recintos con pilares en T de hasta cinco metros y relieves de animales datan de c. 9500 a. C. y fueron levantados por poblaciones que aún no practicaban agricultura plena. La construcción monumental precede, aquí, a la economía agrícola, y no al revés.\n\nLas consecuencias de la neolitización fueron ambivalentes. Aumentó la capacidad de carga demográfica y permitió el excedente, el almacenamiento y, con el tiempo, la desigualdad institucionalizada y el Estado. Al mismo tiempo empeoró la dieta media, aumentó la carga de trabajo, favoreció las zoonosis por convivencia con el ganado y aumentó la vulnerabilidad a las malas cosechas. Jared Diamond la llamó provocativamente «el peor error de la historia de la especie humana».\n\nEn Europa el proceso fue sobre todo migratorio, no de difusión de ideas. La paleogenética muestra que los agricultores anatolios se expandieron físicamente por el continente entre 7000 y 5500 a. C., mezclándose en proporciones variables con los cazadores-recolectores locales, y que un tercer componente —los pastores de la estepa póntica asociados a la cultura Yamnaya— llegó hacia 3000 a. C. y transformó de nuevo el paisaje genético y probablemente lingüístico de Europa.","callout":"La domesticación deja huellas morfológicas: espigas que no se disgregan solas, semillas más grandes, cuernos reducidos. Esos cambios tardan siglos en fijarse, así que la frontera entre recolectar y cultivar es un gradiente, no una línea."},{"type":"section","title":"Megalitismo, metalurgia y el umbral de la historia","text":"Entre el V y el III milenio a. C., la fachada atlántica europea levantó dólmenes, menhires, alineamientos y grandes tumbas de corredor. Newgrange, Stonehenge y el conjunto de Antequera implican planificación, movilización de trabajo y conocimientos astronómicos aplicados: varios monumentos están orientados a los solsticios.\n\nLa datación por radiocarbono desmontó la explicación difusionista clásica, que hacía derivar el megalitismo europeo del Mediterráneo oriental. Colin Renfrew mostró en *Before Civilization* (1973) que los megalitos atlánticos son anteriores a las pirámides egipcias, lo que obligó a reconocer desarrollos autónomos y a abandonar el modelo de una civilización que irradia hacia periferias pasivas.\n\nLa metalurgia introdujo un factor nuevo. El cobre primero y el bronce después —aleación con estaño, escaso y de distribución muy desigual— exigieron redes de intercambio de larga distancia y favorecieron a las élites que las controlaban. El ajuar del llamado «arquero de Amesbury», con origen isotópico centroeuropeo y enterrado cerca de Stonehenge, ilustra esa movilidad.\n\nEl final convencional de la prehistoria llega con la escritura, hacia 3300 a. C. en Uruk. Es un corte útil pero arbitrario: no cambia nada en la vida de la mayoría de la población, y a menudo separa artificialmente procesos continuos. Conviene tratarlo como una frontera documental, no como un salto civilizatorio.","callout":null},{"type":"concepts","items":[{"term":"Homínido","definition":"Miembro de la familia Hominidae. En uso corriente, los ancestros y parientes extintos del linaje humano."},{"term":"Industria lítica","definition":"Conjunto de útiles de piedra tallada característico de una tradición técnica (olduvayense, achelense, musteriense)."},{"term":"Calibración","definition":"Corrección de las fechas de radiocarbono según la variación del C-14 atmosférico. Fechas «cal BP» o «cal a. C.»."},{"term":"Paleogenética","definition":"Estudio del ADN antiguo. Ha reescrito la historia de las migraciones y demostrado el mestizaje entre especies humanas."},{"term":"Neolitización","definition":"Proceso de adopción de agricultura, ganadería, cerámica y sedentarismo. Gradual y con focos independientes."},{"term":"Domesticación","definition":"Modificación genética y morfológica de especies por selección humana sostenida durante generaciones."},{"term":"Creciente Fértil","definition":"Arco entre el Levante, Anatolia y Mesopotamia donde se documenta el primer foco de domesticación."},{"term":"Megalitismo","definition":"Tradición constructiva con grandes bloques de piedra en la Europa atlántica del V–III milenio a. C."},{"term":"Yamnaya","definition":"Cultura pastoril de la estepa póntica cuya expansión hacia 3000 a. C. transformó la genética y probablemente la lengua de Europa."},{"term":"Zoonosis","definition":"Enfermedad transmitida de animales a humanos. Su frecuencia aumentó con la convivencia ganadera del Neolítico."}]},{"type":"debates","items":[{"question":"¿Por qué se adoptó la agricultura si empeoró la salud de quienes la practicaban?","positions":[{"school":"Explicación climática (Childe, años 1930)","argument":"La desecación posglacial habría concentrado a humanos, plantas y animales en torno a oasis, forzando una convivencia que desembocó en domesticación. La agricultura sería una respuesta adaptativa a la escasez."},{"school":"Explicación demográfica (Binford, Flannery)","argument":"El crecimiento de población en zonas marginales, tras la ocupación de los mejores territorios, obligó a intensificar la obtención de alimento. La agricultura sería una salida forzada, no una mejora elegida."},{"school":"Explicación simbólica (Cauvin, 1994)","argument":"Un cambio previo en la mentalidad y en las prácticas rituales habría creado las condiciones sociales del sedentarismo. Göbekli Tepe, monumental y preagrícola, apoyaría esta secuencia."}],"state":"No hay una explicación única aceptada. La investigación actual tiende a modelos multicausales y regionales: el peso del clima, la demografía y la religión varía según el foco de domesticación, y el proceso se reconoce mucho más lento y reversible de lo que se creía."},{"question":"¿Se difundió la agricultura en Europa por migración o por adopción de ideas?","positions":[{"school":"Difusión cultural","argument":"Las poblaciones europeas de cazadores-recolectores habrían adoptado técnicas agrícolas por contacto e imitación, sin sustitución poblacional significativa."},{"school":"Difusión démica (Ammerman y Cavalli-Sforza; paleogenética)","argument":"La expansión fue de personas: agricultores procedentes de Anatolia se desplazaron por el continente entre 7000 y 5500 a. C. El ADN antiguo muestra un reemplazo poblacional sustancial, con mezcla variable según regiones."}],"state":"La paleogenética ha resuelto el debate mayoritariamente a favor de la migración, aunque con matices regionales importantes: en el Báltico y en zonas atlánticas la continuidad de los cazadores-recolectores locales fue mayor."},{"question":"¿Produjeron los neandertales arte simbólico?","positions":[{"school":"Atribución neandertal (Hoffmann et al., 2018)","argument":"Las dataciones por uranio-torio de costras sobre pinturas de La Pasiega, Maltravieso y Ardales superan los 64.000 años, antes de la llegada de sapiens a Europa. Sumadas a los pigmentos, adornos y estructuras de Bruniquel, indicarían capacidad simbólica plena."},{"school":"Escepticismo metodológico (White et al., 2020)","argument":"La datación de costras calcáreas puede sobrestimar la edad por contaminación y por sistemas abiertos al agua. Las fechas no datan el pigmento, sino el carbonato depositado sobre él."}],"state":"La discusión sigue abierta y es sobre todo técnica. La tendencia general de la disciplina, sin embargo, ha sido reducir la lista de capacidades exclusivamente sapiens: el debate ya no es si los neandertales eran simbólicos, sino en qué grado y con qué cronología."}]},{"type":"timeline","items":[{"date":"c. 3,3 M a. C.","event":"Herramientas líticas de Lomekwi (Kenia), anteriores al género Homo."},{"date":"c. 1,9 M a. C.","event":"Homo erectus: mayor capacidad craneal, bifaces achelenses y primeras salidas de África."},{"date":"c. 400.000 a. C.","event":"Uso controlado del fuego bien documentado; Sima de los Huesos (Atapuerca)."},{"date":"c. 300.000 a. C.","event":"Restos de Homo sapiens en Jebel Irhoud (Marruecos)."},{"date":"c. 45.000 a. C.","event":"Sapiens en Europa; coexistencia con neandertales durante milenios."},{"date":"c. 40.000 a. C.","event":"Arte figurativo en Chauvet, El Castillo y Sulawesi."},{"date":"c. 40.000 a. C.","event":"Extinción de los neandertales como población diferenciada."},{"date":"c. 11.600 a. C.","event":"Fin del Younger Dryas: comienza el Holoceno, cálido y estable."},{"date":"c. 9500 a. C.","event":"Göbekli Tepe: santuarios monumentales de sociedades aún no agrícolas."},{"date":"c. 8500 a. C.","event":"Domesticación de trigo, cebada, oveja y cabra en el Creciente Fértil."},{"date":"c. 7000 a. C.","event":"Çatalhöyük: gran poblado agrícola en Anatolia."},{"date":"c. 5600 a. C.","event":"La agricultura alcanza la península ibérica por vía mediterránea."},{"date":"c. 4500–2500 a. C.","event":"Megalitismo atlántico europeo: Stonehenge, Newgrange, Antequera."},{"date":"c. 3300 a. C.","event":"Metalurgia del bronce y primeras escrituras: fin convencional de la prehistoria."}]},{"type":"sources","items":[{"author":"V. Gordon Childe","title":"Man Makes Himself","year":"1936","kind":"estudio","note":"Formula la «revolución neolítica» y la hipótesis del oasis. Referencia histórica del debate."},{"author":"Richard B. Lee e Irven DeVore (eds.)","title":"Man the Hunter","year":"1968","kind":"estudio","note":"Simposio que reformuló la imagen de las sociedades cazadoras-recolectoras."},{"author":"Colin Renfrew","title":"Before Civilization: The Radiocarbon Revolution and Prehistoric Europe","year":"1973","kind":"estudio","note":"Demuestra la anterioridad del megalitismo atlántico y liquida el difusionismo clásico."},{"author":"Jacques Cauvin","title":"Naissance des divinités, naissance de l''agriculture","year":"1994","kind":"estudio","note":"Defiende la primacía del cambio simbólico sobre el económico."},{"author":"David Lewis-Williams","title":"The Mind in the Cave","year":"2002","kind":"estudio","note":"Interpretación neuropsicológica y chamánica del arte paleolítico."},{"author":"Richard Wrangham","title":"Catching Fire: How Cooking Made Us Human","year":"2009","kind":"estudio","note":"La cocción como motor de la encefalización."},{"author":"Svante Pääbo","title":"Neanderthal Man: In Search of Lost Genomes","year":"2014","kind":"estudio","note":"Relato de primera mano de la secuenciación del genoma neandertal."},{"author":"David Reich","title":"Who We Are and How We Got Here","year":"2018","kind":"estudio","note":"Síntesis del impacto del ADN antiguo sobre la historia de las migraciones."},{"author":"James C. Scott","title":"Against the Grain: A Deep History of the Earliest States","year":"2017","kind":"estudio","note":"Cuestiona el relato progresista de la neolitización y del Estado temprano."},{"author":"Klaus Schmidt","title":"Sie bauten die ersten Tempel","year":"2006","kind":"estudio","note":"Excavación e interpretación de Göbekli Tepe por su director."}]}]'::jsonb, 0, true
from public.topics where slug = 'prehistoria'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Renacimiento y Humanismo', '[{"type":"section","title":"«Renacimiento»: historia de una palabra","text":"El concepto no lo inventaron los historiadores: lo inventaron los interesados. Giorgio Vasari publicó en 1550, y ampliado en 1568, las *Vidas de los más excelentes arquitectos, pintores y escultores*, donde organizó tres siglos de arte italiano como una *rinascita*: un declive tras la Antigüedad, un despertar con Cimabue y Giotto, una madurez con Masaccio y Donatello y una perfección con Miguel Ángel. Vasari escribía desde Florencia, sobre artistas casi todos toscanos y con Miguel Ángel vivo como punto de llegada. La periodización que aún manejamos nació como propaganda cultural de una ciudad y de un gremio.\n\nLa palabra se convirtió en periodo histórico general en el siglo XIX. Jules Michelet tituló «La Renaissance» un volumen de su historia de Francia en 1855, y cinco años después Jacob Burckhardt publicó *La cultura del Renacimiento en Italia* (1860), el libro que fijó la imagen todavía dominante: el Estado italiano como obra de arte calculada, el descubrimiento del mundo y del hombre, el nacimiento del individuo frente a la conciencia corporativa medieval y una atmósfera paganizante y secular. Burckhardt no trabajaba con archivos, sino con textos literarios; construyó un retrato de época extraordinariamente influyente y muy poco verificable.\n\nLa réplica llegó desde el medievalismo. Charles Homer Haskins tituló provocadoramente *The Renaissance of the Twelfth Century* (1927) para demostrar que las universidades, la recuperación del derecho romano, la entrada de Aristóteles a través del árabe, la poesía latina y una nueva ciencia natural son fenómenos del siglo XII, no del XV. Antes ya se hablaba del renacimiento carolingio y del otoniano. Si «renacimiento» significa recuperación deliberada de la Antigüedad, la Edad Media tuvo varios.\n\nJohan Huizinga había atacado el mismo relato desde otro ángulo en *El otoño de la Edad Media* (1919). Estudiando los mismos siglos XIV y XV en Borgoña y Francia, encontró una cultura sobremadura, obsesionada con la muerte, el ceremonial y el simbolismo caballeresco: un final, no un comienzo. Los mismos años leídos desde Flandes o desde Florencia producen dos épocas distintas, lo que dice más del observador que del periodo.\n\nLa misma etiqueta «Edad Media» procede del bando humanista. Fueron ellos quienes describieron los siglos intermedios como *tenebrae* y como *media aetas*: un hueco sin valor propio entre la Antigüedad admirada y su propia obra restauradora. Los historiadores heredaron sin discutirla la periodización redactada por una de las partes en litigio.\n\nHoy el término sobrevive como convención cronológica útil, drenado de su contenido de ruptura. Nadie sostiene ya que Europa despertara de mil años de oscuridad, y la mayoría de los especialistas subraya la continuidad de instituciones, técnicas y formas de pensar entre el siglo XIII y el XVI. Lo que sigue discutiéndose es si una categoría acuñada por sus propios protagonistas con fines de autopromoción puede funcionar como herramienta analítica o solo como etiqueta de archivo.","callout":"La expresión «Edad Media» la acuñaron los humanistas para nombrar el hueco entre la Antigüedad y ellos mismos. Seguimos usando la periodización escrita por una de las partes en litigio."},{"type":"section","title":"El humanismo era un método, no una filosofía","text":"El humanismo no fue una doctrina sobre el hombre, sino un programa de estudios y una profesión. Los *studia humanitatis* comprendían cinco disciplinas concretas: gramática, retórica, poesía, historia y filosofía moral, todas basadas en la lectura directa de los autores griegos y latinos. Quedaban fuera la lógica, la filosofía natural, la metafísica, el derecho, la medicina y la teología, que siguieron enseñándose en las facultades universitarias sin apenas alteración.\n\nPaul Oskar Kristeller fue quien impuso esta definición sobria. Los humanistas, sostuvo, eran profesionales de esas disciplinas —maestros de gramática, secretarios de cancillería, cronistas de corte, editores— y no miembros de una escuela filosófica: los hubo platónicos, aristotélicos, escépticos, devotos y libertinos. Buscar una «filosofía humanista» unitaria es un error de categoría. Frente a él, Eugenio Garin defendió que el humanismo sí implicaba una concepción del hombre y de la historia, y Hans Baron formuló la tesis del humanismo cívico.\n\nLa herramienta que sí distingue al humanismo es la filología. El principio *ad fontes* —ir a las fuentes— exigía leer el texto en su lengua original, en la versión manuscrita más antigua disponible y depurado de los errores acumulados por siglos de copia. Petrarca es el caso fundacional: escribía cartas a Cicerón y a Livio como si estuvieran vivos, buscaba códices en bibliotecas catedralicias y, cuando encontró en Verona en 1345 las cartas privadas de Cicerón, descubrió a un político ambicioso e inseguro que arruinó la imagen que él mismo había construido. El método puede volverse contra quien lo aplica.\n\nLa demostración decisiva de su potencia la dio Lorenzo Valla en 1440. La Donación de Constantino era el documento con el que el papado justificaba su soberanía temporal sobre Roma y Occidente: en él, Constantino cedía el poder al papa Silvestre. Valla probó que era una falsificación posterior analizando su lengua. El texto usa vocabulario inexistente en el siglo IV, emplea términos como *satrapa* que no pertenecen a la administración romana, comete errores sobre instituciones de la época y escribe un latín tardío imposible en la cancillería constantiniana. Nació así la crítica textual moderna: un documento puede fecharse por cómo está escrito, con independencia de lo que afirme.\n\nLa filología tuvo consecuencias políticas inmediatas. En 1516 Erasmo publicó el *Novum Instrumentum*, primera edición impresa del Nuevo Testamento griego acompañada de una traducción latina nueva que corregía la Vulgata. Donde la Vulgata decía *poenitentiam agite* —«haced penitencia»—, el griego decía *metanoeite*, «cambiad de mentalidad», «arrepentíos». La base textual del sacramento de la penitencia quedaba en el aire, y Lutero abrió con exactamente ese argumento la primera de sus 95 tesis en 1517. Una corrección de traducción se convirtió en una fractura religiosa.\n\nEn la península ibérica el mismo impulso produjo la *Gramática de la lengua castellana* de Nebrija (1492), primera gramática de una lengua romance, y la Biblia Políglota Complutense (1514-1517), promovida por el cardenal Cisneros, que imprimió en columnas paralelas los textos hebreo, arameo, griego y latino. Ese programa se cerró con rapidez: el Índice de 1559 prohibió la obra completa de Erasmo, y el biblismo humanista quedó bajo sospecha permanente en España e Italia.","callout":"La refutación de Valla acabó incluida en el Índice de libros prohibidos. Su método, en cambio, se volvió imprescindible para la propia Iglesia: sin crítica textual no hay edición fiable de las Escrituras ni de los concilios."},{"type":"section","title":"Ciudades, guerra y mecenazgo: quién pagaba","text":"Italia no era un Estado, y esa fragmentación explica buena parte del fenómeno. Cinco potencias —Venecia, Milán, Florencia, los Estados Pontificios y Nápoles— más una constelación de señoríos menores competían entre sí, y tras la Paz de Lodi (1454) mantuvieron durante cuarenta años un equilibrio inestable basado en la diplomacia permanente y en ejércitos mercenarios mandados por condotieros. Las repúblicas comunales fueron derivando hacia señoríos personales: los Médicis gobernaron Florencia de hecho desde 1434 sin ocupar cargo formal, los Sforza tomaron Milán en 1450, los Montefeltro hicieron de Urbino una corte con el dinero de la guerra.\n\nEl dinero venía de la lana y la seda florentinas, de la banca —el banco Médicis manejaba las cuentas pontificias a través de una red de filiales— y del comercio veneciano con Levante, Egipto y el Imperio otomano. El otro gran pagador era el papado, que en el siglo XVI financió la nueva basílica de San Pedro y sus decoraciones con recursos ordinarios y con indulgencias predicadas por toda Europa. La cumbre artística del Renacimiento romano y el detonante de la Reforma comparten fuente de financiación.\n\nPor qué ese dinero fue a parar al arte es objeto de un debate económico clásico. Robert Lopez propuso la tesis de las «hard times»: tras la peste negra la riqueza por habitante subió, pero la rentabilidad de la inversión productiva cayó, y el capital se desplazó hacia el lujo, el prestigio y el consumo suntuario. El Renacimiento sería, en esa lectura, un síntoma de estancamiento económico. Richard Goldthwaite lo rebatió documentando lo contrario: una expansión real y sostenida de la demanda de bienes, una industria de la construcción enorme y una cultura del consumo doméstico que llenó las casas urbanas de objetos. La discusión sigue abierta y depende mucho de qué ciudad y qué décadas se midan.\n\nMichael Baxandall cambió la manera de mirar los cuadros en *Pintura y vida cotidiana en el Renacimiento* (1972). Los contratos de encargo conservados especifican el plazo de entrega, la calidad del azul de ultramar y la cantidad de oro, y con frecuencia exigen que determinadas figuras las pinte el maestro en persona y no el taller. Baxandall añadió la noción de «ojo de la época»: el público leía las pinturas con destrezas adquiridas fuera de ellas, la geometría de los mercaderes formados en escuelas de ábaco para calcular volúmenes de barriles, los repertorios de gestos de la predicación y las figuras de la danza. La pintura era una mercancía por encargo dirigida a un público entrenado, no una expresión libre.\n\nEl mecenazgo era además un instrumento político. Las capillas familiares, los retablos donados y las fachadas costeadas anunciaban jerarquía en el espacio público. Julio II movilizó a Bramante, Miguel Ángel y Rafael como programa de afirmación pontificia; Isabel de Este convirtió su *studiolo* de Mantua en un encargo intelectual documentado carta a carta; Ludovico Sforza retuvo a Leonardo en Milán casi veinte años, en buena medida como ingeniero militar y organizador de fiestas.\n\nLisa Jardine, en *Worldly Goods* (1996), y Jerry Brotton han insistido en un punto que el relato burckhardtiano ocultaba: el Renacimiento fue también una cultura de la adquisición, y sus objetos de deseo eran en gran parte orientales. Tapices flamencos, sedas, alfombras otomanas y mamelucas, papel, pigmentos y vidrio circulaban por las mismas rutas que las ideas. Mehmet II, el conquistador de Constantinopla, pidió a Venecia un retratista en 1479 y recibió a Gentile Bellini. La frontera cultural era mucho más porosa de lo que el mito de una Europa que redescubre sus raíces clásicas permite ver.\n\nEl ciclo italiano se cerró por la guerra. La invasión francesa de 1494 abrió cuarenta años de conflicto entre Francia y el Imperio con Italia como campo de batalla, y el saco de Roma de 1527 dispersó a artistas y humanistas. A partir de entonces los centros se multiplicaron: Venecia, Fontainebleau, Amberes, la corte imperial, Toledo. La difusión europea del Renacimiento fue en buena medida consecuencia de una derrota.","callout":"El contrato de la *Virgen de las rocas* (1483) fija plazos, materiales y qué figuras debía pintar Leonardo de su mano. El artista solitario y libre es una construcción romántica del siglo XIX proyectada hacia atrás."},{"type":"section","title":"Perspectiva, anatomía y el nuevo estatuto del artista","text":"Hacia 1413 Brunelleschi realizó en Florencia un experimento óptico con dos tablillas: pintó el Baptisterio en perspectiva, hizo un agujero en el punto de fuga y usó un espejo para que el espectador comparara imagen y edificio real. Alberti convirtió el hallazgo en método escrito en *De pictura* (1435), con la construcción de la pirámide visual y la pintura entendida como ventana. Masaccio ya lo había aplicado en la *Trinidad* de Santa Maria Novella hacia 1427. La perspectiva lineal no es un descubrimiento sobre la naturaleza, sino una convención geométrica: una manera de representar el espacio que resultó culturalmente triunfal, no la única posible.\n\nSu éxito tuvo una base social concreta. Las escuelas de ábaco formaban a los hijos de mercaderes en geometría práctica para medir mercancías y calcular capacidades, y esa alfabetización matemática hizo legible e incluso deseable la nueva pintura. Piero della Francesca escribió tanto un tratado de perspectiva como un manual de aritmética comercial: la misma cabeza para ambas cosas.\n\nLa anatomía siguió un camino paralelo. La disección de cadáveres humanos, autorizada en Bolonia y Padua desde el siglo XIV, se separó lentamente del comentario de Galeno. Leonardo realizó unas treinta disecciones y dejó láminas que no llegaron a publicarse. Quien completó la ruptura fue Andrés Vesalio en *De humani corporis fabrica* (1543): corrigió a Galeno mostrando que había descrito animales y no humanos, y presentó su argumento en forma de imágenes grabadas de altísima calidad. Solo la imprenta permitía que una lámina anatómica fuese idéntica para todos los lectores, y por tanto discutible: la reproducción exacta convirtió al dibujo en prueba.\n\nEl estatuto del artista cambió con ello. En 1400 el pintor era un artesano agremiado que compraba pigmentos y firmaba contratos; en 1560 Miguel Ángel tenía dos biografías publicadas en vida, correspondencia con papas y un funeral de Estado en Florencia. Alberti y Leonardo reivindicaron la pintura como actividad intelectual —el *paragone* discutía su superioridad sobre la escultura y la poesía—, y la fundación de la Accademia del Disegno en 1563, impulsada por Vasari, institucionalizó la separación entre artista y artesano. Fue una promoción de gremio conseguida, en buena parte, escribiendo la propia historia.\n\nTras 1527 la historiografía habló durante mucho tiempo de decadencia manierista: figuras alargadas, espacios inestables, colores ácidos en Pontormo, Rosso Fiorentino o Parmigianino. Walter Friedländer primero y John Shearman después revirtieron el juicio: el manierismo no es un fallo de la norma clásica, sino un arte de la *maniera*, deliberadamente refinado y dirigido a un público de conocedores capaz de apreciar la variación sobre modelos conocidos.\n\nConviene resistir la tentación de convertir todo esto en el arranque de la revolución científica. Copérnico publicó en 1543 un sistema heliocéntrico movido por una insatisfacción estética muy tradicional —quería recuperar el movimiento circular uniforme que Ptolomeo había abandonado— y con una precisión predictiva no superior a la del modelo anterior. La filosofía natural renacentista incluía además astrología, alquimia y magia natural sin percibir contradicción: Ficino escribió sobre talismanes planetarios, Pico integró la cábala en la apologética cristiana, Paracelso mezcló química y ocultismo. Frances Yates llegó a sostener que la tradición hermética fue el motor de la nueva ciencia; la tesis se considera exagerada, pero sirvió para desmontar la imagen de un Renacimiento racionalista avant la lettre.","callout":null},{"type":"section","title":"La imprenta: qué cambió y qué no","text":"Los tipos móviles no se inventaron en Europa. China los usaba desde el siglo XI con Bi Sheng y Corea imprimió con tipos metálicos el *Jikji* en 1377. La aportación específica de Gutenberg hacia 1450 fue un sistema industrial completo: un procedimiento de punzón y matriz para fundir en serie tipos metálicos idénticos y reutilizables, una aleación adecuada, una tinta grasa que se adhería al metal y una prensa adaptada del sector vinícola. Funcionó porque el alfabeto latino necesita pocos caracteres, algo que penalizaba a los sistemas de escritura asiáticos.\n\nLa escala del cambio es difícil de exagerar. Antes de 1501 se imprimieron unas 30.000 ediciones distintas —los incunables—, con tiradas medias de varios centenares de ejemplares: entre ocho y veinte millones de libros según las estimaciones, más de lo que todos los copistas europeos habían producido en el milenio anterior. Hacia 1500 funcionaban prensas en unas 250 ciudades, y Venecia era la capital editorial del continente. Allí Aldo Manuzio creó el formato en octavo y el tipo cursivo, es decir, el clásico portátil y barato: un cambio de objeto tan importante como el de tecnología.\n\nElizabeth Eisenstein defendió en *The Printing Press as an Agent of Change* (1979) que la imprenta fue el agente causal de la modernidad intelectual. Su argumento central es la fijeza: un texto impreso es idéntico en miles de copias, puede compararse edición con edición, permite acumular correcciones en lugar de acumular errores de copia y hace posible que los datos, las tablas y las láminas circulen sin degradarse. Sin esa estabilidad, sostuvo, no habría ni ciencia acumulativa ni Reforma.\n\nAdrian Johns replicó en *The Nature of the Book* (1998) que la fijeza no fue un efecto automático de la máquina. El siglo XVI y el XVII están llenos de ediciones piratas, textos mal compuestos, pies de imprenta falsificados y atribuciones fraudulentas; los propios autores se quejaban de no reconocer sus obras. La fiabilidad del libro impreso hubo que construirla socialmente, con gremios, privilegios, censura y reputaciones. El consenso actual sitúa la imprenta como condición necesaria pero no suficiente: sus efectos dependieron de instituciones, mercados y derecho.\n\nLa Reforma fue el primer acontecimiento mediático de masas. Entre 1517 y 1525 circularon miles de ediciones de opúsculos en alemán, muchos de Lutero, breves, baratos e ilustrados con grabados para quien no sabía leer. Pero la imprenta no difundió solo humanismo y crítica. El *Malleus maleficarum*, manual para identificar y perseguir brujas publicado en 1487, tuvo alrededor de treinta ediciones y acompañó la fase más dura de la caza de brujas; los almanaques astrológicos y las profecías fueron géneros de gran venta. La tecnología amplificó lo que ya circulaba, en todas direcciones.\n\nLa reacción llegó pronto. El primer Índice romano de libros prohibidos (1559) incluyó la obra completa de Erasmo y decenas de autores más; se generalizaron la licencia previa, el *imprimatur* y la vigilancia de las aduanas sobre los libros. En España e Italia la censura recortó la circulación de la filología bíblica y del pensamiento político durante generaciones, mientras los centros editoriales se desplazaban a Basilea, Ginebra, Amberes y más tarde Ámsterdam.\n\nHay que evitar además exagerar el alcance social. Las estimaciones de alfabetización dan porcentajes bajos y muy desiguales: minorías urbanas masculinas de entre el diez y el treinta por ciento en las ciudades más avanzadas, cifras mucho menores en el campo y entre las mujeres. La lectura en voz alta en talleres, tabernas y plazas, y el grabado como argumento visual, extendieron el efecto mucho más allá de quienes sabían leer, pero el libro siguió siendo un objeto minoritario.","callout":"La misma tecnología multiplicó la crítica filológica y el *Malleus maleficarum*. La imprenta no racionalizó Europa: amplificó lo que ya circulaba por ella."},{"type":"section","title":"Quién quedó fuera","text":"En 1977 Joan Kelly publicó un artículo con un título que reorganizó el campo: «¿Tuvieron las mujeres un Renacimiento?». Su respuesta fue que no, o no en el mismo sentido. En el paso de la sociedad feudal a los Estados y las cortes del Renacimiento, las mujeres de la nobleza perdieron funciones económicas y políticas que sí habían tenido antes; la dama del *Cortesano* de Castiglione existe para adornar la conversación del hombre; las dotes se dispararon y con ellas la reclusión de las hijas excedentes en conventos; la exigencia de castidad y obediencia se endureció. Una mujer instruida resultaba sospechosa: la elocuencia pública se consideraba incompatible con la virtud femenina.\n\nLa investigación posterior ha matizado la tesis sin desactivarla. Existieron humanistas como Isotta Nogarola, Laura Cereta y Cassandra Fedele, pintoras profesionales como Sofonisba Anguissola y Lavinia Fontana, y mecenas de primer orden como Isabel de Este. La *querella de las mujeres*, abierta en el siglo XV por Christine de Pizan, produjo hacia 1600 obras como *El mérito de las mujeres* de Moderata Fonte y la réplica de Lucrezia Marinella. La conclusión hoy dominante es que la respuesta depende de la clase, la ciudad y la década, pero que la pregunta de Kelly demostró algo más general: una periodización construida sobre la experiencia de una minoría masculina no describe automáticamente a toda la sociedad.\n\nLa Italia del Renacimiento tampoco era una sociedad sin esclavitud. Génova, Venecia y Florencia mantuvieron esclavitud doméstica documentada en contratos notariales, con personas tártaras, circasianas, griegas y balcánicas, y desde el siglo XV también subsaharianas. Esos años coinciden con la apertura del comercio atlántico portugués de esclavos a partir de 1444 y, tras 1492, con la encomienda y el trabajo forzado en América. La *Oración sobre la dignidad del hombre* de Pico y la controversia de Valladolid entre Sepúlveda y Las Casas (1550-1551) sobre la humanidad y los derechos de los indígenas pertenecen al mismo mundo intelectual.\n\nLas minorías religiosas europeas vivieron un endurecimiento simultáneo. Los decretos de 1492 en Castilla y Aragón y de 1497 en Portugal expulsaron o forzaron la conversión de las comunidades judías; en 1516 Venecia encerró a la suya en el barrio de las fundiciones, el *ghetto*, dando nombre a una institución que se extendió por Italia, incluida Roma en 1555. Y a la vez florecía el hebraísmo cristiano: Reuchlin defendió la conservación de los libros hebreos, Pico construyó una cábala cristiana y las prensas italianas imprimieron textos hebreos de referencia. Interés erudito por una cultura y persecución de quienes la encarnaban avanzaron juntos.\n\nConviene recordar además la escala. Entre el ochenta y cinco y el noventa por ciento de la población europea era rural y quedaba fuera de este circuito. La revolución de los precios del siglo XVI erosionó los salarios reales, y las hambrunas y epidemias siguieron marcando la demografía. Peter Burke, en un estudio prosopográfico de unos seiscientos creadores italianos del periodo, encontró un grupo abrumadoramente urbano, masculino, concentrado en el centro-norte de Italia y procedente de familias de artesanos y mercaderes: una élite pequeña y geográficamente muy concentrada.\n\nPor último, el mito de un Renacimiento secular no resiste el recuento. La inmensa mayoría de los encargos artísticos fueron religiosos; Ficino era sacerdote; Pico murió reconciliado con Savonarola, cuya república teocrática florentina de 1494-1498 es tan producto del Renacimiento como la corte de Lorenzo de Médicis; Bruno acabó en la hoguera en 1600 y Galileo sería juzgado en 1633. El individuo moderno y pagano de Burckhardt es en gran medida una proyección del siglo XIX sobre unas fuentes escogidas.\n\nLo que queda, retirado el mito, es sustancial: un método crítico para tratar los textos y los documentos, una tecnología que transformó la escala del saber, un régimen de imágenes basado en la perspectiva y en el grabado reproducible, y una autodescripción cultural —Europa como heredera legítima de la Antigüedad— que el continente seguiría empleando durante siglos para definirse frente a los demás.","callout":null},{"type":"concepts","items":[{"term":"Studia humanitatis","definition":"Programa de cinco disciplinas —gramática, retórica, poesía, historia y filosofía moral— basado en la lectura directa de los autores antiguos."},{"term":"Ad fontes","definition":"Principio de acudir a la fuente original, en su lengua y en el manuscrito más antiguo disponible, en lugar de a comentarios y traducciones."},{"term":"Filología crítica","definition":"Método para depurar y fechar textos por su lengua y sus anacronismos. Su acta de nacimiento es la refutación de la Donación de Constantino."},{"term":"Humanismo cívico","definition":"Tesis de Hans Baron según la cual el humanismo florentino nació como ideología de la libertad republicana frente a la amenaza de Milán."},{"term":"Mecenazgo","definition":"Financiación del arte y las letras por príncipes, papas, gremios y familias. Combinaba devoción, prestigio y afirmación política."},{"term":"Perspectiva lineal","definition":"Convención geométrica que representa el espacio mediante un punto de fuga único. Codificada por Alberti en 1435 tras el experimento de Brunelleschi."},{"term":"Ojo de la época","definition":"Concepto de Baxandall: destrezas visuales adquiridas fuera de la pintura —geometría mercantil, gesto predicatorio, danza— con las que el público leía las imágenes."},{"term":"Neoplatonismo florentino","definition":"Corriente impulsada por Ficino en torno a los Médicis, que tradujo a Platón y el *Corpus hermeticum* y unió filosofía, magia natural y teología."},{"term":"Incunable","definition":"Libro impreso antes de 1501. Se conservan unas 30.000 ediciones distintas."},{"term":"Signoria","definition":"Régimen de poder personal que sustituyó a las repúblicas comunales italianas. Los Médicis lo ejercieron en Florencia sin cargo formal desde 1434."},{"term":"Condotiero","definition":"Jefe mercenario contratado por un Estado italiano. Algunos, como los Montefeltro de Urbino, convirtieron el botín en corte humanista."},{"term":"Manierismo","definition":"Arte posterior a 1527 basado en la variación refinada sobre modelos clásicos. La historiografía dejó de leerlo como decadencia."},{"term":"Querella de las mujeres","definition":"Polémica europea sobre la capacidad y la dignidad femeninas, de Christine de Pizan a Moderata Fonte y Lucrezia Marinella."}]},{"type":"debates","items":[{"question":"¿Existió el Renacimiento como ruptura histórica?","positions":[{"school":"Ruptura (Burckhardt, 1860)","argument":"El siglo XV italiano inaugura la modernidad: el Estado como obra de arte calculada, el descubrimiento del mundo y del hombre, el nacimiento del individuo y una cultura secular frente a la conciencia corporativa medieval."},{"school":"Continuidad medieval (Haskins, 1927; Huizinga, 1919)","argument":"Las universidades, el derecho romano y la recuperación de Aristóteles son del siglo XII, y hubo antes un renacimiento carolingio. Leídos desde Borgoña, los mismos siglos XIV y XV son el otoño sobremaduro de la cultura medieval, no un amanecer."},{"school":"Categoría heredada de los propios protagonistas","argument":"La periodización procede de Vasari y de los humanistas, que acuñaron «Edad Media» para nombrar el hueco entre la Antigüedad y ellos mismos. Es una autodescripción interesada convertida sin filtro en categoría académica."}],"state":"Nadie defiende ya el despertar tras mil años de oscuridad. El término se conserva como convención cronológica, sin contenido de ruptura, y se discute si una etiqueta acuñada como propaganda puede funcionar como herramienta analítica o solo como marca de archivo."},{"question":"¿Qué era el humanismo: un programa de estudios o una filosofía?","positions":[{"school":"Programa profesional (Kristeller)","argument":"Los humanistas eran profesionales de cinco disciplinas concretas —gramática, retórica, poesía, historia y filosofía moral—, no una escuela de pensamiento. Los hubo platónicos, aristotélicos, escépticos y devotos: buscar una filosofía común es un error de categoría."},{"school":"Humanismo cívico (Baron, 1955; Garin)","argument":"El humanismo florentino nació como ideología política en la crisis de 1402 frente a Milán: una defensa de la vida activa, la ciudadanía y la libertad republicana frente al ideal contemplativo anterior."}],"state":"La definición de Kristeller es hoy la operativa. La cronología de los textos ha desmontado buena parte de la reconstrucción de Baron, y se ha señalado que su experiencia como exiliado de la Alemania nazi orientó la lectura. Aun así, la tesis obligó a estudiar el humanismo en su contexto político y no solo como erudición."},{"question":"¿Tuvieron las mujeres un Renacimiento?","positions":[{"school":"No (Joan Kelly, 1977)","argument":"Las mujeres de la nobleza perdieron funciones económicas y políticas que habían tenido en la sociedad feudal. Se endurecieron las normas de castidad y obediencia, se dispararon las dotes y creció la reclusión conventual: el periodo empeoró su posición mientras mejoraba la de los varones de su clase."},{"school":"Revisión documental","argument":"Están documentadas humanistas como Nogarola, Cereta y Fedele, pintoras profesionales como Anguissola y Fontana, mecenas como Isabel de Este y una querella de las mujeres con obras propias hacia 1600. La respuesta varía según clase, ciudad y década."}],"state":"La tesis se acepta con matices de clase y geografía. Su efecto duradero es metodológico: mostró que una periodización construida sobre la experiencia de una minoría masculina no describe por sí sola al conjunto de la sociedad."}]},{"type":"timeline","items":[{"date":"1341","event":"Petrarca es coronado poeta laureado en el Capitolio de Roma."},{"date":"1397","event":"Manuel Crisoloras empieza a enseñar griego en Florencia."},{"date":"1435","event":"Alberti codifica la perspectiva lineal en *De pictura*."},{"date":"1440","event":"Lorenzo Valla demuestra que la Donación de Constantino es una falsificación."},{"date":"c. 1450","event":"Gutenberg imprime con tipos móviles metálicos en Maguncia."},{"date":"1453","event":"Caída de Constantinopla; llegan a Italia eruditos y manuscritos griegos."},{"date":"1462","event":"Ficino traduce a Platón y el *Corpus hermeticum* para Cosme de Médici."},{"date":"1486","event":"Pico della Mirandola escribe la *Oración sobre la dignidad del hombre*."},{"date":"1494","event":"Invasión francesa de Italia: comienzan las guerras italianas."},{"date":"1508–1512","event":"Miguel Ángel pinta la bóveda de la Capilla Sixtina."},{"date":"1516","event":"Erasmo publica el Nuevo Testamento en griego con traducción latina nueva."},{"date":"1527","event":"Saco de Roma por las tropas imperiales."},{"date":"1543","event":"*De revolutionibus* de Copérnico y *De humani corporis fabrica* de Vesalio."},{"date":"1559","event":"Primer Índice romano de libros prohibidos: la obra completa de Erasmo entra en él."},{"date":"1600","event":"Giordano Bruno es quemado en el Campo dei Fiori de Roma."}]},{"type":"sources","items":[{"author":"Petrarca","title":"Cartas familiares","year":"c. 1350","kind":"primaria","note":"Incluye las cartas a autores muertos y el hallazgo en 1345 de la correspondencia privada de Cicerón."},{"author":"Leon Battista Alberti","title":"De pictura","year":"1435","kind":"primaria","note":"Primera formulación escrita de la perspectiva lineal como método."},{"author":"Lorenzo Valla","title":"Sobre la falsamente creída donación de Constantino","year":"1440","kind":"primaria","note":"Demuestra la falsificación por anacronismos de lengua. Acta de nacimiento de la crítica textual."},{"author":"Pico della Mirandola","title":"Oración sobre la dignidad del hombre","year":"1486","kind":"primaria","note":"Texto emblemático del periodo. Su autor era además cabalista cristiano y acabó cercano a Savonarola."},{"author":"Erasmo de Róterdam","title":"Novum Instrumentum","year":"1516","kind":"primaria","note":"Nuevo Testamento griego con traducción latina nueva. Corrige *poenitentiam agite* por *metanoeite*."},{"author":"Nicolás Maquiavelo","title":"El príncipe","year":"1513","kind":"primaria","note":"Escrito tras la caída de la república florentina; publicado en 1532. Analiza el poder por su eficacia, no por su legitimidad."},{"author":"Baltasar de Castiglione","title":"El cortesano","year":"1528","kind":"primaria","note":"Modelo europeo de conducta cortesana. Fuente central para el argumento de Joan Kelly."},{"author":"Andrés Vesalio","title":"De humani corporis fabrica","year":"1543","kind":"primaria","note":"Corrige a Galeno desde la disección directa. La lámina impresa convertida en prueba."},{"author":"Giorgio Vasari","title":"Vidas de los más excelentes pintores, escultores y arquitectos","year":"1550, ampliada en 1568","kind":"primaria","note":"Inventa el relato de la *rinascita* y su periodización, con Florencia en el centro."},{"author":"Moderata Fonte","title":"El mérito de las mujeres","year":"1600","kind":"primaria","note":"Diálogo veneciano de la querella de las mujeres, publicado póstumamente."},{"author":"Jacob Burckhardt","title":"La cultura del Renacimiento en Italia","year":"1860","kind":"estudio","note":"Fija la imagen del individuo moderno y del Estado como obra de arte. Aún es el punto de partida de toda discusión."},{"author":"Johan Huizinga","title":"El otoño de la Edad Media","year":"1919","kind":"estudio","note":"Lee los siglos XIV y XV desde Borgoña como final de una cultura, no como comienzo."},{"author":"Charles H. Haskins","title":"The Renaissance of the Twelfth Century","year":"1927","kind":"estudio","note":"Traslada al siglo XII las novedades atribuidas al XV: universidades, derecho romano, Aristóteles."},{"author":"Hans Baron","title":"The Crisis of the Early Italian Renaissance","year":"1955","kind":"estudio","note":"Formula el humanismo cívico a partir de la crisis florentina de 1402."},{"author":"Paul Oskar Kristeller","title":"Renaissance Thought","year":"1961","kind":"estudio","note":"Define el humanismo como programa de estudios profesional y no como filosofía. Definición hoy operativa."},{"author":"Michael Baxandall","title":"Pintura y vida cotidiana en el Renacimiento","year":"1972","kind":"estudio","note":"Los contratos de encargo y el «ojo de la época» como claves de lectura de la pintura."},{"author":"Joan Kelly","title":"¿Tuvieron las mujeres un Renacimiento?","year":"1977","kind":"estudio","note":"Reformula la periodización desde la historia de las mujeres."},{"author":"Elizabeth Eisenstein","title":"The Printing Press as an Agent of Change","year":"1979","kind":"estudio","note":"La fijeza del texto impreso como condición de la ciencia acumulativa y de la Reforma."},{"author":"Adrian Johns","title":"The Nature of the Book","year":"1998","kind":"estudio","note":"Réplica a Eisenstein: la fiabilidad del impreso se construyó socialmente, no la garantizó la máquina."},{"author":"Lisa Jardine","title":"Worldly Goods","year":"1996","kind":"estudio","note":"El Renacimiento como cultura del consumo y de la adquisición, con Oriente como proveedor."}]}]'::jsonb, 0, true
from public.topics where slug = 'renacimiento'
on conflict (topic_id, position) do update set
  title = excluded.title, body = excluded.body, published = excluded.published;

insert into public.lessons (topic_id, title, body, position, published)
select id, 'Liberalismo, nacionalismo y unificaciones', '[{"type":"section","title":"La Restauración: un orden nuevo con nombre antiguo","text":"El Congreso de Viena reunió entre septiembre de 1814 y junio de 1815 a las potencias vencedoras de Napoleón. Su vocabulario era de vuelta atrás —legitimidad dinástica, reparación del desorden revolucionario—, pero lo que construyó era inédito: un sistema de seguridad colectiva basado en el equilibrio entre cinco grandes potencias, en compensaciones territoriales calculadas y en congresos periódicos para resolver las crisis antes de que se convirtieran en guerra.\n\nPaul Schroeder ha sostenido que ese sistema fue una transformación real de la política internacional europea y no una simple reacción: sustituyó el equilibrio entendido como competencia armada por un orden pactado con reglas explícitas. El dato que suele citarse a su favor es que Europa no conoció una guerra general entre 1815 y 1914, y ninguna que enfrentase a todas las grandes potencias hasta ese último año.\n\nTampoco fue posible desmontar la herencia napoleónica. Los códigos civiles, la administración uniforme por departamentos o provincias, la propiedad plena de la tierra frente a los derechos señoriales, el registro civil y la carrera abierta al talento sobrevivieron en buena parte del continente porque resultaban útiles para gobernar. Los monarcas restaurados heredaron un aparato estatal mucho más eficaz que el de 1789, y lo conservaron.\n\nEl sistema de congresos se rompió por su propia lógica. Austria intervino en Nápoles y Piamonte en 1821, Francia en España en 1823 para liquidar el Trienio Liberal, pero cuando se trató de las colonias americanas Gran Bretaña se negó, y la independencia griega dividió a las potencias entre el principio de legitimidad y el interés estratégico en el Imperio otomano. Metternich pudo aplazar el problema; no pudo resolverlo.\n\nConviene retener que la Restauración no fue un paréntesis sin contenido. Fue el marco dentro del cual se formaron las culturas políticas del siglo: el legitimismo, el liberalismo constitucional, el republicanismo, el nacionalismo romántico y el socialismo utópico se definieron unos frente a otros en esas tres décadas.","callout":"El sistema de Viena suele contarse como pura reacción. Duró cuarenta años sin guerra general en Europa: bastante más que cualquier orden internacional posterior, incluida la paz de 1919."},{"type":"section","title":"Liberalismo: qué era y para quién","text":"Identificar liberalismo con democracia es un anacronismo. El liberalismo decimonónico defendía derechos individuales, división de poderes, imperio de la ley, libertad de prensa y de comercio y una constitución que limitara al monarca, pero desconfiaba abiertamente del sufragio universal, al que asociaba con el Terror de 1793 y con el gobierno de la muchedumbre. La condición para votar no era ser adulto, sino ser propietario.\n\nLas cifras dan la medida. En la Francia de Luis Felipe, tras rebajar el censo en 1830, el cuerpo electoral pasó de unos noventa mil a unos doscientos cuarenta mil votantes sobre más de treinta y cinco millones de habitantes: menos del uno por ciento. Cuando en 1843 Guizot resumió su respuesta a quien pedía el voto con un «enriqueceos», no estaba siendo cínico: describía con exactitud la lógica del régimen. La ciudadanía política era un premio a la acumulación.\n\nLa reflexión teórica acompañó esa posición. Benjamin Constant distinguió en 1819 entre la libertad de los antiguos —participar directamente en las decisiones colectivas— y la de los modernos —disfrutar sin interferencias de la vida privada, la propiedad y la opinión—, y concluyó que la segunda era la propia de las sociedades comerciales. Cuatro décadas después John Stuart Mill defendió en *Sobre la libertad* (1859) el principio del daño, pero dedicó páginas explícitas a temer la tiranía de la mayoría.\n\nBajo la etiqueta convivían familias enfrentadas. Los doctrinarios querían una monarquía constitucional con soberanía compartida entre rey y Cortes y sufragio censitario estrecho; los progresistas y radicales, soberanía nacional plena, milicia ciudadana y ampliación del censo; los demócratas y republicanos, sufragio masculino universal. En España esas diferencias organizaron la vida política entera del siglo, con constituciones alternándose según qué familia gobernara.\n\nEl liberalismo económico avanzó en paralelo y con menos resistencia: desamortizaciones que pusieron en el mercado tierras eclesiásticas y municipales, supresión de gremios, libertad de contratación, códigos de comercio. El resultado no fue una sociedad de pequeños propietarios sino, en buena parte del sur de Europa, una concentración de la tierra en manos de quienes ya tenían capital para pujar en las subastas.\n\nLa cuestión social apareció como el límite del programa. Cuando obreros y artesanos empezaron a exigir derecho de asociación, salario y voto, buena parte del liberalismo eligió el orden. Esa fractura, visible ya en el cartismo británico de 1838, será decisiva en 1848.","callout":null},{"type":"section","title":"La nación: ¿descubrimiento o construcción?","text":"El nacionalismo romántico presentó la nación como un hecho natural y antiguo: una comunidad con lengua, cultura y espíritu propios que había existido siempre y que ahora despertaba. Herder había situado el genio de cada pueblo en su lengua y su poesía popular; Fichte, en sus *Discursos a la nación alemana* (1808), convirtió esa idea en programa político bajo la ocupación napoleónica. Filólogos, folcloristas y compositores recopilaron cuentos, cantos y trajes, y en el proceso los seleccionaron, corrigieron y en ocasiones inventaron.\n\nLa historiografía del siglo XX invirtió el planteamiento. Ernest Gellner sostuvo en 1983 que es el nacionalismo el que crea las naciones y no al revés: la sociedad industrial necesita una población móvil, alfabetizada y culturalmente homogénea, y solo un sistema educativo estatal puede producirla. Benedict Anderson describió la nación como «comunidad imaginada» —sus miembros nunca se conocerán, pero se piensan como un nosotros simultáneo— y atribuyó un papel central al capitalismo impreso: el periódico y la novela en lengua vernácula enseñaron a millones de personas a imaginarse contemporáneas entre sí.\n\nEric Hobsbawm y Terence Ranger mostraron en *La invención de la tradición* (1983) cuántos rituales aparentemente inmemoriales —tartanes escoceses, ceremonial monárquico británico, fiestas cívicas— se diseñaron entre 1870 y 1914 para dar profundidad histórica a construcciones recientes. Frente a esta corriente modernista, Anthony D. Smith replicó que las naciones no se levantan sobre el vacío: se apoyan en *ethnies* previas con mitos de origen, memorias y símbolos compartidos que el nacionalismo reorganiza pero no inventa de la nada.\n\nLa formulación más citada es anterior a todas ellas. Ernest Renan, en la Sorbona en 1882, negó que la nación se defina por raza, lengua, religión o geografía, la definió como «un plebiscito de todos los días» y añadió una observación incómoda: el olvido, e incluso el error histórico, son factores esenciales en la creación de una nación. Cada nación necesita no recordar las violencias que la fundaron.\n\nEl caso francés lo documenta con precisión. Un informe oficial de 1863 calculaba que alrededor de la cuarta parte de la población de Francia no hablaba francés. Eugen Weber, en *Peasants into Frenchmen* (1976), reconstruyó cómo la escuela obligatoria, el servicio militar, el ferrocarril, la administración y el mercado nacional convirtieron a los campesinos en franceses entre 1870 y 1914, es decir, un siglo después de la Revolución hecha en su nombre. La frase atribuida a Massimo d Azeglio tras la unificación italiana —hecha Italia, falta hacer a los italianos— describe exactamente el mismo problema.","callout":"Renan definió la nación en 1882 como un plebiscito diario y añadió que exige olvidar. No es una paradoja retórica: toda nación se funda sobre conflictos internos que su relato oficial necesita no recordar."},{"type":"section","title":"Las oleadas: 1820, 1830 y 1848","text":"Las revoluciones del siglo XIX llegaron en oleadas que se propagaron por Europa en cuestión de semanas. La de 1820 fue mediterránea y militar, con pronunciamientos en España, Nápoles, Piamonte y Portugal, y tuvo un texto de referencia común: la Constitución de Cádiz de 1812, traducida y adoptada como modelo por revolucionarios que nunca habían pisado España. La de 1830 empezó en París con la caída de los Borbones, dio a Bélgica su independencia, fracasó en Polonia y consolidó regímenes liberales censitarios en Francia y Gran Bretaña.\n\n1848 fue de otra magnitud. En pocas semanas cayeron o cedieron gobiernos en Francia, los Estados alemanes, el Imperio austríaco y buena parte de Italia; Metternich huyó de Viena. Los ingredientes coincidieron: una crisis agraria y alimentaria en 1845-1847, paro artesanal, una red de prensa y sociedades políticas ya organizada y la certeza de que el ejemplo de una capital arrastraría a las demás. Fue el primer acontecimiento verdaderamente europeo desde Napoleón.\n\nTambién fracasó casi en todas partes en menos de dieciocho meses, y las razones son instructivas. La alianza inicial entre liberales moderados y radicales se rompió en cuanto apareció la cuestión social: en junio de 1848, en París, la Guardia Nacional y el ejército aplastaron a los obreros que defendían los Talleres Nacionales, con miles de muertos y deportaciones. Los conflictos nacionales enfrentaron a los propios revolucionarios: la asamblea de Fráncfort discutió si Posnania era alemana, y los húngaros que reclamaban su independencia se encontraron con croatas, rumanos y serbios que reclamaban la suya frente a ellos. Los campesinos, principal masa disponible, se desmovilizaron en cuanto obtuvieron la abolición de las cargas señoriales. Y los ejércitos permanecieron leales a sus soberanos.\n\nEl Parlamento de Fráncfort resume el problema. Elegido por un sufragio amplio, dedicó meses a debatir derechos fundamentales y fronteras, redactó una constitución razonable y en abril de 1849 ofreció la corona imperial a Federico Guillermo IV de Prusia, que la rechazó por proceder de una asamblea y no de los príncipes. Una constitución sin ejército ni administración detrás no obliga a nadie.\n\nDe ahí la sentencia célebre de G. M. Trevelyan: 1848 fue el punto de inflexión en el que la historia moderna no llegó a girar. La historiografía posterior, con Jonathan Sperber a la cabeza, la ha discutido. La abolición de la servidumbre y de las cargas señoriales en las tierras de los Habsburgo fue definitiva; el sufragio masculino universal se estrenó en Francia; el Estatuto Albertino de 1848 sobrevivió como constitución italiana hasta 1946; y la política de masas —partidos, prensa barata, mítines, asociaciones— quedó instalada de manera irreversible. 1848 no logró sus objetivos declarados y sin embargo cambió el terreno de juego.","callout":null},{"type":"section","title":"Unificaciones desde arriba: Italia y Alemania","text":"Las dos unificaciones que cierran el periodo no las hicieron las asambleas de 1848 sino dos Estados con ejército: el Piamonte y Prusia. La secuencia es en ambos casos diplomática y militar, y el ingrediente decisivo fue elegir bien las guerras.\n\nCavour, primer ministro piamontés, entendió que Austria no sería expulsada de Italia sin una gran potencia aliada. En Plombières, en 1858, pactó en secreto con Napoleón III una guerra contra Austria a cambio de Saboya y Niza; la guerra de 1859 dio Lombardía. Los plebiscitos en los ducados centrales y la expedición de los Mil de Garibaldi, que en 1860 derribó al reino de las Dos Sicilias, completaron un mapa que el Piamonte administró como anexión, no como federación. El Reino de Italia se proclamó en 1861; Venecia llegó en 1866 como premio por la alianza con Prusia, y Roma en 1870, cuando la guerra franco-prusiana obligó a retirar la guarnición francesa.\n\nBismarck operó con la misma lógica y más recursos. Nombrado en 1862 en plena crisis constitucional prusiana, anunció ante la cámara que las grandes cuestiones no se resolverían con discursos ni con votaciones de mayorías, sino con hierro y sangre, y gobernó cuatro años sin presupuesto aprobado. Después vinieron tres guerras breves y calculadas: contra Dinamarca en 1864 junto a Austria, contra Austria en 1866 para expulsarla de Alemania, y contra Francia en 1870-1871 tras manipular el despacho de Ems. El Imperio alemán se proclamó en enero de 1871 en la galería de los espejos de Versalles, en territorio enemigo ocupado.\n\nSobre las causas económicas hay discusión. El Zollverein, vigente desde 1834, creó un mercado alemán sin Austria y suele presentarse como preparación de la unidad política. La objeción es que una unión aduanera no produce por sí sola un Estado —hubo uniones aduaneras que no unificaron nada—, y que Austria quedó fuera por decisión prusiana antes de que existiera proyecto unificador alguno. Helmut Böhme y la historiografía social alemana han subrayado el peso de los intereses económicos; otros insisten en que sin las tres guerras no habría habido imperio.\n\nLa forma del resultado importa tanto como el hecho. Alemania se unificó en su versión *kleindeutsch*, sin Austria y bajo hegemonía prusiana, con un Reichstag elegido por sufragio masculino universal pero sin control sobre un canciller responsable solo ante el emperador, y con Prusia votando internamente por un sistema de tres clases censitarias. Italia nació como monarquía centralizada y censitaria: en las primeras elecciones votó alrededor del dos por ciento de la población.\n\nDe ahí la tesis del *Sonderweg*, el camino especial alemán, formulada por Hans-Ulrich Wehler: una modernización económica acelerada sin modernización política, con élites preindustriales intactas, que explicaría la fragilidad de Weimar y el ascenso del nazismo. David Blackbourn y Geoff Eley la desmontaron en *The Peculiarities of German History* (1984): el argumento presupone un camino normal —el británico o el francés— que ningún país recorrió realmente, e infravalora hasta qué punto la burguesía alemana sí conquistó posiciones sociales y culturales. El debate reorientó la historia alemana hacia lo específico de cada coyuntura y en contra de las explicaciones por destino nacional.","callout":"El Reichstag alemán se elegía desde 1871 por sufragio masculino universal, más amplio que el británico de la época. No controlaba al canciller. Sufragio amplio y poder parlamentario nulo podían convivir."},{"type":"section","title":"Quién quedó fuera","text":"La ciudadanía que el liberalismo consagró fue masculina y propietaria por definición legal, no por descuido. Las constituciones del periodo no excluyeron a las mujeres del voto: las excluyeron de la condición de sujeto político. En julio de 1848, mientras Europa se sublevaba, la convención de Seneca Falls aprobó en el estado de Nueva York una Declaración de Sentimientos calcada de la de Independencia que reclamaba el sufragio femenino; en Francia, las mujeres que habían sostenido los clubes revolucionarios vieron cómo el sufragio universal de ese mismo año se definía como masculino.\n\nLos trabajadores fueron la otra exclusión estructural. El cartismo británico reclamó desde 1838 sufragio masculino universal, voto secreto y sueldo para los diputados, y reunió millones de firmas sin obtener nada; las jornadas de junio de 1848 en París marcaron la ruptura definitiva entre liberalismo y movimiento obrero; la Asociación Internacional de Trabajadores se fundó en Londres en 1864; y la Comuna de París de 1871, aplastada en la semana sangrienta, se convirtió en el trauma fundacional de la política europea posterior. Las cifras de víctimas se discuten: la tradición hablaba de veinte o treinta mil fusilados y las estimaciones recientes las rebajan a varios miles, sin que eso altere el significado del episodio.\n\nDentro de los nuevos Estados nacionales quedaron minorías convertidas de golpe en problema. La Prusia unificadora aplicó políticas de germanización sobre sus súbditos polacos; la Italia unida se encontró con una insurrección en el sur, el llamado bandolerismo, que exigió años de campaña militar y decenas de miles de soldados, y con una cuestión meridional que atravesaría todo el siglo siguiente. El Estado nacional homogéneo era un proyecto, y su realización tuvo costes sobre quienes no encajaban en él.\n\nFuera de Europa, el mismo periodo es de expansión. Francia invadió Argelia en 1830, el año de su revolución liberal, y Gran Bretaña impuso a China los tratados desiguales tras la primera guerra del opio (1839-1842). Los principios de soberanía nacional y autodeterminación que legitimaban a griegos, belgas, italianos y alemanes no se consideraban aplicables a los pueblos colonizados, y esa asimetría no fue una contradicción inadvertida sino una jerarquía explícita, formulada en el lenguaje de la civilización y del progreso.\n\nLo que sí quedó fue el marco. En 1815 el Estado nacional era una excepción; en 1871 se había convertido en la forma política que se daba por descontada, hasta el punto de que los movimientos posteriores —incluidos los anticoloniales— tuvieron que formular sus demandas en ese idioma. Junto a él quedaron el constitucionalismo escrito, la política de masas y una idea de pertenencia que Europa exportaría al resto del mundo durante el siglo siguiente.","callout":null},{"type":"concepts","items":[{"term":"Legitimismo","definition":"Principio del Congreso de Viena según el cual el poder corresponde a las dinastías desplazadas por la Revolución y Napoleón."},{"term":"Sistema de congresos","definition":"Mecanismo de reuniones periódicas entre las grandes potencias para resolver crisis sin guerra general. Se rompió con Grecia y América."},{"term":"Sufragio censitario","definition":"Derecho de voto reservado a quienes superan un nivel de renta o propiedad. Norma del liberalismo europeo hasta finales del siglo XIX."},{"term":"Liberalismo doctrinario","definition":"Corriente que defiende la soberanía compartida entre rey y Cortes y un censo electoral estrecho, frente a la soberanía nacional plena."},{"term":"Soberanía nacional","definition":"Principio según el cual el poder reside en la nación y no en el monarca. Base de las constituciones progresistas del periodo."},{"term":"Desamortización","definition":"Venta en subasta pública de tierras eclesiásticas y municipales. Amplió el mercado de la tierra y concentró la propiedad."},{"term":"Comunidad imaginada","definition":"Definición de nación de Benedict Anderson: un colectivo cuyos miembros nunca se conocerán pero se piensan simultáneos, gracias al capitalismo impreso."},{"term":"Tradición inventada","definition":"Ritual o símbolo de apariencia inmemorial diseñado en época reciente para dar profundidad histórica a una construcción política."},{"term":"Primavera de los pueblos","definition":"Nombre de la oleada revolucionaria europea de 1848, la primera simultánea en casi todo el continente."},{"term":"Realpolitik","definition":"Política basada en el cálculo de fuerzas y no en principios ideológicos. Asociada a Cavour y sobre todo a Bismarck."},{"term":"Risorgimento","definition":"Proceso de unificación italiana. Culminó como anexión al Piamonte, no como federación de Estados iguales."},{"term":"Zollverein","definition":"Unión aduanera alemana vigente desde 1834, sin Austria. Su peso causal en la unificación política se discute."},{"term":"Kleindeutsch","definition":"Solución de una Alemania «pequeña» sin Austria y bajo hegemonía prusiana, frente a la alternativa *grossdeutsch*."},{"term":"Sonderweg","definition":"Tesis del «camino especial» alemán: modernización económica sin modernización política. Muy discutida desde 1984."}]},{"type":"debates","items":[{"question":"¿Son las naciones construcciones modernas o realidades antiguas?","positions":[{"school":"Modernismo (Gellner, Anderson, Hobsbawm)","argument":"Es el nacionalismo el que crea las naciones. La sociedad industrial exige una población homogénea y alfabetizada que solo la escuela estatal produce; el capitalismo impreso enseñó a millones a imaginarse simultáneos, y buena parte de las tradiciones nacionales se diseñó entre 1870 y 1914."},{"school":"Etnosimbolismo (Anthony D. Smith)","argument":"Las naciones modernas no surgen del vacío: se apoyan en *ethnies* anteriores con mitos de origen, memorias, lengua y símbolos compartidos. El nacionalismo reorganiza y politiza ese material, pero no lo inventa de la nada."}],"state":"El modernismo es la posición dominante y ha ganado el terreno metodológico, pero la objeción de Smith obligó a explicar por qué unas comunidades resultaron «nacionalizables» y otras no. El acuerdo práctico es estudiar cada caso: cuánto material previo había y cuánto aportaron escuela, ejército, prensa y mercado."},{"question":"¿Fracasó 1848?","positions":[{"school":"Fracaso (formulación clásica, Trevelyan)","argument":"En dieciocho meses cayeron todos los gobiernos revolucionarios. El punto de inflexión en que la historia moderna no llegó a girar: la alianza entre liberales y radicales se rompió con la cuestión social, los movimientos nacionales chocaron entre sí y los ejércitos siguieron leales."},{"school":"Revisión (Sperber y otros)","argument":"Los resultados fueron duraderos aunque no los declarados: abolición definitiva de la servidumbre y las cargas señoriales en las tierras de los Habsburgo, estreno del sufragio masculino universal en Francia, el Estatuto Albertino vigente hasta 1946 y la instalación irreversible de la política de masas."}],"state":"La lectura actual separa objetivos de efectos. 1848 no consiguió lo que pedía, pero cambió el terreno de juego: después de esa fecha ningún régimen europeo pudo gobernar ignorando la existencia de una opinión pública organizada."},{"question":"¿Existió un «camino especial» alemán?","positions":[{"school":"Sonderweg (Wehler y la escuela de Bielefeld)","argument":"Alemania se industrializó a gran velocidad sin democratizarse: las élites agrarias y militares prusianas conservaron el poder, la burguesía renunció a disputárselo y el Imperio de 1871 institucionalizó ese desequilibrio. De ahí la fragilidad de Weimar y el desenlace de 1933."},{"school":"Crítica (Blackbourn y Eley, 1984)","argument":"La tesis presupone un camino normal —el británico o el francés— que ningún país recorrió tal como se describe, e infravalora las posiciones sociales, jurídicas y culturales que la burguesía alemana sí conquistó. Explicar 1933 desde 1871 convierte la historia en destino."}],"state":"La versión fuerte del Sonderweg está abandonada. Persiste como descripción de un desajuste concreto —sufragio amplio para el Reichstag y canciller responsable solo ante el emperador—, no como explicación teleológica del siglo XX alemán."}]},{"type":"timeline","items":[{"date":"1814–1815","event":"Congreso de Viena: principio de legitimidad, equilibrio y compensaciones territoriales."},{"date":"1815","event":"Santa Alianza y Cuádruple Alianza: el sistema de congresos."},{"date":"1820","event":"Oleada revolucionaria: Trienio Liberal en España, Nápoles y Portugal, con la Constitución de Cádiz como modelo."},{"date":"1821–1830","event":"Guerra de independencia griega, primera secesión nacional reconocida por las potencias."},{"date":"1830","event":"Revolución de Julio en Francia; independencia de Bélgica; insurrección polaca."},{"date":"1834","event":"Entra en vigor el Zollverein, unión aduanera alemana sin Austria."},{"date":"1838","event":"Carta del Pueblo: el cartismo reclama sufragio masculino universal en Gran Bretaña."},{"date":"1848","event":"Primavera de los pueblos; *Manifiesto comunista*; Declaración de Seneca Falls."},{"date":"1848–1849","event":"Parlamento de Fráncfort; abolición de la servidumbre en el Imperio austríaco."},{"date":"1859–1861","event":"Guerra contra Austria, expedición de los Mil y proclamación del Reino de Italia."},{"date":"1862","event":"Discurso de Bismarck sobre el «hierro y la sangre» ante la cámara prusiana."},{"date":"1864, 1866, 1870–1871","event":"Guerras de Dinamarca, Austria y Francia: las tres etapas de la unificación alemana."},{"date":"1870","event":"Roma pasa a ser capital de Italia tras la retirada de la guarnición francesa."},{"date":"1871","event":"Proclamación del Imperio alemán en Versalles y Comuna de París."},{"date":"1882","event":"Renan define la nación como «un plebiscito de todos los días»."}]},{"type":"sources","items":[{"author":"Cortes de Cádiz","title":"Constitución política de la Monarquía española","year":"1812","kind":"primaria","note":"Modelo exportado a Nápoles, Piamonte y Portugal en la oleada de 1820."},{"author":"Potencias europeas","title":"Acta Final del Congreso de Viena","year":"1815","kind":"primaria","note":"Fija el mapa, el principio de legitimidad y el sistema de congresos."},{"author":"Benjamin Constant","title":"De la libertad de los antiguos comparada con la de los modernos","year":"1819","kind":"primaria","note":"Fundamenta el liberalismo de la vida privada frente a la participación directa."},{"author":"Convención de Seneca Falls","title":"Declaración de Sentimientos","year":"1848","kind":"primaria","note":"Reclama el sufragio femenino con la forma de la Declaración de Independencia."},{"author":"Karl Marx y Friedrich Engels","title":"Manifiesto del Partido Comunista","year":"1848","kind":"primaria","note":"Publicado semanas antes de la oleada revolucionaria; su influencia en ella fue escasa."},{"author":"John Stuart Mill","title":"Sobre la libertad","year":"1859","kind":"primaria","note":"Principio del daño y advertencia expresa contra la tiranía de la mayoría."},{"author":"Giuseppe Mazzini","title":"Los deberes del hombre","year":"1860","kind":"primaria","note":"Nacionalismo republicano y democrático, derrotado por la vía monárquica de Cavour."},{"author":"Otto von Bismarck","title":"Discurso sobre el hierro y la sangre","year":"1862","kind":"primaria","note":"Ante la comisión presupuestaria prusiana, en plena crisis constitucional."},{"author":"Ernest Renan","title":"¿Qué es una nación?","year":"1882","kind":"primaria","note":"La nación como plebiscito diario y como ejercicio de olvido compartido."},{"author":"Eric Hobsbawm","title":"La era de la revolución, 1789-1848","year":"1962","kind":"estudio","note":"Síntesis clásica de la doble revolución, política e industrial."},{"author":"Eugen Weber","title":"Peasants into Frenchmen","year":"1976","kind":"estudio","note":"Reconstruye la nacionalización de la Francia rural entre 1870 y 1914."},{"author":"Ernest Gellner","title":"Naciones y nacionalismo","year":"1983","kind":"estudio","note":"La homogeneidad cultural como exigencia funcional de la sociedad industrial."},{"author":"Benedict Anderson","title":"Comunidades imaginadas","year":"1983","kind":"estudio","note":"La nación como comunidad imaginada por el capitalismo impreso."},{"author":"Eric Hobsbawm y Terence Ranger","title":"La invención de la tradición","year":"1983","kind":"estudio","note":"Rituales nacionales aparentemente inmemoriales diseñados entre 1870 y 1914."},{"author":"David Blackbourn y Geoff Eley","title":"The Peculiarities of German History","year":"1984","kind":"estudio","note":"Desmonta el Sonderweg negando que exista un camino normal a la modernidad."},{"author":"Anthony D. Smith","title":"The Ethnic Origins of Nations","year":"1986","kind":"estudio","note":"Etnosimbolismo: las naciones se apoyan en comunidades étnicas previas."},{"author":"Jonathan Sperber","title":"The European Revolutions, 1848-1851","year":"1994","kind":"estudio","note":"Revisión de 1848 desde sus efectos duraderos y no desde sus objetivos."},{"author":"Paul W. Schroeder","title":"The Transformation of European Politics, 1763-1848","year":"1994","kind":"estudio","note":"El orden de Viena como innovación en política internacional, no como simple reacción."}]}]'::jsonb, 0, true
from public.topics where slug = 'revoluciones-liberales'
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
delete from public.questions where topic_id in (select id from public.topics where slug in ('andalus', 'bizancio', 'crisis-siglo-xiv', 'egipto', 'feudalismo', 'grecia', 'helenismo', 'islam', 'mesopotamia', 'plena-edad-media', 'prehistoria', 'renacimiento', 'revoluciones-liberales', 'roma-imperio', 'roma-republica'));

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
  select id, '¿En qué situación estaba Europa cuando llegó la peste en 1347?', 'La hambruna de 1315-1317 y la epizootia bovina de 1319-1320 habían dejado a la población debilitada antes de la epidemia.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En pleno auge demográfico y con excedentes acumulados', false, 0),
  ('Con el crecimiento agotado desde hacía medio siglo: tierras marginales, explotaciones fragmentadas y precios del grano al alza', true, 1),
  ('Recién recuperada de una guerra general europea', false, 2),
  ('Con la población en mínimos históricos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la objeción central de Brenner al modelo demográfico?', 'Para Brenner lo decisivo fue la relación de fuerzas entre señores y campesinos y la estructura del poder político en cada región.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la población no creció realmente antes de 1300', false, 0),
  ('Que la peste no tuvo efectos económicos apreciables', false, 1),
  ('Que describe la presión pero no explica los desenlaces: la misma demografía produjo resultados opuestos a uno y otro lado del Elba', true, 2),
  ('Que los registros señoriales no son fiables', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué mortalidad estima hoy la investigación para la primera oleada de peste?', 'La cifra tradicional de un tercio se ha revisado al alza con registros señoriales, censos fiscales y series de sustituciones de beneficios eclesiásticos.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Alrededor del diez por ciento', false, 0),
  ('Un tercio exacto de la población europea', false, 1),
  ('Entre el cuarenta y el sesenta por ciento, con grandes variaciones regionales', true, 2),
  ('Más del ochenta por ciento en toda Europa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se cerró la polémica sobre la identidad de la enfermedad?', 'Es uno de los casos más limpios de un debate histórico resuelto por evidencia biológica. Lo que sigue abierto es el mecanismo de transmisión.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Con el hallazgo de nuevos cronistas italianos', false, 0),
  ('Con la secuenciación de ADN antiguo en 2011, que identificó *Yersinia pestis* en esqueletos de Londres', true, 1),
  ('Con el análisis estadístico de los testamentos florentinos', false, 2),
  ('No se ha cerrado: sigue sin conocerse el agente', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué parte de la objeción de Cohn conserva vigencia?', 'El agente está identificado; su ecología de transmisión, no del todo.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el agente no era una bacteria', false, 0),
  ('Que la mortalidad fue mucho menor de lo calculado', false, 1),
  ('Que la velocidad de propagación encaja mal con el ciclo rata-pulga: hoy se apunta a ectoparásitos humanos y a la forma neumónica', true, 2),
  ('Que la epidemia no llegó al norte de Europa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto económico inmediato tuvo la mortalidad masiva?', 'Mejoró incluso la dieta: más carne y cerveza y menos pan de cereal secundario para quienes sobrevivieron.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El trabajo se volvió escaso y caro, y la tierra abundante y barata: subieron los salarios reales y cayeron las rentas', true, 0),
  ('Subieron a la vez rentas y salarios', false, 1),
  ('Se hundió el precio del trabajo por exceso de oferta', false, 2),
  ('No hubo efectos apreciables hasta el siglo XVI', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué pretendía el Estatuto de los Trabajadores inglés de 1351?', 'Fue la respuesta señorial a lo que el mercado de trabajo les quitaba. Se aplicó con desigual éxito y generó conflicto permanente.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Repartir las tierras abandonadas entre los campesinos', false, 0),
  ('Congelar los salarios en niveles anteriores a la peste y penar el abandono del señorío por mejor paga', true, 1),
  ('Abolir la servidumbre para atraer mano de obra', false, 2),
  ('Financiar la guerra de los Cien Años con un impuesto nuevo', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Quiénes fueron los Ciompi?', 'Su revuelta muestra que el conflicto no fue solo rural: también enfrentó a los oficios menores con el patriciado urbano.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los mercenarios de las compañías blancas en Italia', false, 0),
  ('Los flagelantes que recorrieron el Imperio en 1349', false, 1),
  ('Obreros del textil florentino sin gremio propio, que ocuparon el gobierno de la ciudad seis semanas en 1378', true, 2),
  ('Los campesinos catalanes sujetos a malos usos señoriales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Pese a ser aplastadas casi todas las revueltas, ¿por qué desapareció la servidumbre en Europa occidental?', 'El resultado a largo plazo favoreció a los campesinos occidentales por presión de mercado, no por concesión política.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque los reyes la abolieron por decreto general', false, 0),
  ('Porque retener por la fuerza a una mano de obra escasa resultaba caro e inaplicable cuando el señor vecino ofrecía mejores condiciones', true, 1),
  ('Porque la Iglesia la declaró pecado en Constanza', false, 2),
  ('Porque los campesinos compraron su libertad con oro americano', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue la «segunda servidumbre»?', 'Sobre la misma catástrofe demográfica, la nobleza de Prusia, Polonia, Bohemia y Hungría reforzó su control. Duró hasta el siglo XIX.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El retorno de la esclavitud doméstica a las ciudades italianas', false, 0),
  ('El endurecimiento de la servidumbre en Francia durante la guerra de los Cien Años', false, 1),
  ('La reimplantación de la servidumbre al este del Elba, ligada a la exportación cerealista por el Báltico', true, 2),
  ('Un impuesto personal aplicado a los siervos liberados', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia institucional tuvo financiar la guerra de los Cien Años?', 'En Inglaterra se consolidó la regla de que no hay impuesto sin aprobación parlamentaria; en Francia la *taille* acabó siendo permanente sin consentimiento periódico.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La desaparición de los parlamentos, sustituidos por consejos reales', false, 0),
  ('Impuestos regulares que hubo que negociar, lo que dio peso al Parlamento inglés y a los Estados Generales franceses', true, 1),
  ('La supresión de la nobleza como estamento fiscal', false, 2),
  ('La creación de un banco central en ambos reinos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué cambio militar erosionó la preeminencia social del caballero?', 'La hueste convocada por obligación vasallática deja paso al ejército contratado, y con ella pierde base el fundamento social de la nobleza militar.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La prohibición eclesiástica de los torneos', false, 0),
  ('La sustitución de la caballería por la marina de guerra', false, 1),
  ('El arco largo, las picas, la artillería de pólvora y sobre todo las compañías permanentes pagadas por la corona', true, 2),
  ('El encarecimiento del hierro tras la peste', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué doctrina permitió cerrar el Cisma de Occidente en Constanza?', 'El papado desactivó después la doctrina, pero el episodio dejó formulada una idea de soberanía representativa que reaparecería en la política laica.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El conciliarismo: el concilio general representa a la Iglesia y su autoridad supera a la del papa', true, 0),
  ('La infalibilidad pontificia', false, 1),
  ('El regalismo de las monarquías nacionales', false, 2),
  ('La teoría de las dos espadas de Bonifacio VIII', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es relevante el movimiento husita?', 'La ejecución de Hus en 1415, pese al salvoconducto imperial, desencadenó quince años de guerras en que ejércitos campesinos derrotaron a cruzadas imperiales.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque restauró la unidad de la Iglesia', false, 0),
  ('Porque fue el primer movimiento de reforma religiosa que se sostuvo militarmente y arrancó concesiones, un siglo antes de Lutero', true, 1),
  ('Porque implantó el luteranismo en Bohemia', false, 2),
  ('Porque acabó con la guerra de los Cien Años', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demuestra el caso de Estrasburgo en febrero de 1349?', 'Clemente VI publicó bulas desmintiendo la acusación de envenenar los pozos. Muchos supervivientes emigraron al este de Europa y redibujaron el mapa del judaísmo europeo.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la Iglesia alentó los pogromos desde Aviñón', false, 0),
  ('Que la comunidad judía fue quemada antes de que la peste llegara a la ciudad: la violencia se anticipó al contagio', true, 1),
  ('Que los pogromos solo se produjeron donde la mortalidad fue mayor', false, 2),
  ('Que las acusaciones de envenenamiento se probaron judicialmente', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se usa hoy con reservas la palabra «crisis» para este periodo?', 'El mismo siglo produjo la pintura al óleo, la carabela, el reloj mecánico público y, hacia 1450, la imprenta. No es una cultura agotada: es una cultura bajo presión.', 3, true
  from public.topics where slug = 'crisis-siglo-xiv'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque la mortalidad fue mucho menor de lo que se creía', false, 0),
  ('Porque no hubo guerras significativas', false, 1),
  ('Porque describe el trauma pero no la salida: los supervivientes del noroeste europeo alcanzaron salarios reales, dieta y libertad jurídica sin precedentes', true, 2),
  ('Porque el término es un anacronismo del siglo XX sin uso académico', false, 3)
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
  select id, '¿Cuál era la función de la falange de sarisas en el sistema militar macedonio?', 'Es un sistema de armas combinadas. La sarisa daba profundidad a costa de maniobrabilidad; la decisión venía del ala de caballería.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Decidir la batalla mediante la carga frontal', false, 0),
  ('Fijar al enemigo mientras la caballería de los compañeros daba el golpe decisivo', true, 1),
  ('Proteger el campamento durante los asedios', false, 2),
  ('Sustituir a la caballería, cuyo uso se abandonó', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué encontró Alejandro ya preparado al acceder al trono en 336 a. C.?', 'Filipo II había militarizado Macedonia durante veinticinco años, vencido en Queronea y enviado ya una avanzadilla a Asia Menor.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un imperio persa en descomposición interna', false, 0),
  ('Una alianza con Roma contra Persia', false, 1),
  ('El ejército reformado, la hegemonía sobre Grecia y la guerra contra Persia ya declarada por la Liga de Corinto', true, 2),
  ('Un tesoro real intacto y sin deudas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué financió la transformación de Macedonia bajo Filipo II?', 'Diodoro cifra su rendimiento en unos mil talentos anuales, que pagaron el ejército permanente y la corrupción de élites griegas.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las minas de oro del Pangeo', true, 0),
  ('Los tributos de las ciudades jonias', false, 1),
  ('El comercio de grano del mar Negro', false, 2),
  ('Los subsidios del rey persa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el problema central de las fuentes sobre Alejandro?', 'Calístenes, Ptolomeo, Aristóbulo y Nearco se perdieron. Arriano, Diodoro, Curcio, Plutarco y Justino trabajan sobre ese material ya filtrado.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que solo se conservan en traducción árabe', false, 0),
  ('Que ningún relato contemporáneo se ha conservado: los autores que leemos escriben entre tres y cinco siglos después', true, 1),
  ('Que todas fueron escritas por persas derrotados', false, 2),
  ('Que son exclusivamente inscripciones oficiales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostuvo William Tarn en 1948 y por qué se abandonó su lectura?', 'La posición actual, formulada por Bosworth, describe a un gobernante muy capaz y muy violento cuyo proyecto último las fuentes no permiten reconstruir.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Alejandro fue un mal general; se abandonó por las victorias documentadas', false, 0),
  ('Que Alejandro nunca llegó a la India; se abandonó por hallazgos arqueológicos', false, 1),
  ('Que Alejandro buscaba la hermandad de la humanidad; Badian mostró que la integración fue pragmática y que el registro incluye purgas y matanzas civiles', true, 2),
  ('Que Alejandro era persa de origen; se abandonó por razones filológicas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué batalla frustró definitivamente la reunificación del imperio de Alejandro?', 'Curupedio, en 281, terminó de fijar el mapa: tres grandes reinos y una periferia de monarquías menores.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Gaugamela (331 a. C.)', false, 0),
  ('Ipsos (301 a. C.), donde murió Antígono Monoftalmos', true, 1),
  ('Queronea (338 a. C.)', false, 2),
  ('Pidna (168 a. C.)', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se fundaba la legitimidad de la realeza helenística?', 'De ahí la necesidad permanente de victorias, el peso de la corte sobre cualquier órgano representativo y la difusión del culto al soberano.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En la elección por una asamblea de ciudadanos', false, 0),
  ('En la consagración por el oráculo de Delfos', false, 1),
  ('En la herencia dinástica reconocida por las poleis', false, 2),
  ('En la victoria militar: la tierra era *doríktetos chóra*, conquistada con la lanza', true, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el Egipto ptolemaico es el reino helenístico mejor documentado?', 'Los papiros muestran una maquinaria fiscal densa superpuesta a una estructura agraria y sacerdotal egipcia que siguió funcionando.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque el clima seco conservó decenas de miles de papiros de gestión, como el archivo de Zenón', true, 0),
  ('Porque sus reyes escribieron autobiografías', false, 1),
  ('Porque Roma conservó sus archivos en el Capitolio', false, 2),
  ('Porque fue el único con escritura propia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era la koiné?', 'En koiné se redactaron los contratos del Fayum, la traducción de los Setenta y, tres siglos después, el Nuevo Testamento.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La moneda común de los reinos helenísticos', false, 0),
  ('El griego común derivado del ático, lengua de administración y cultura del Adriático a Bactriana', true, 1),
  ('La asamblea federal de las ciudades griegas', false, 2),
  ('El tratado de paz entre los diádocos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con la polis bajo las monarquías helenísticas?', 'El relato de una decadencia general de la ciudad ha sido revisado. El gimnasio pasó a marcar la pertenencia al cuerpo cívico griego.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Desapareció como institución', false, 0),
  ('Fue sustituida por asambleas de campesinos', false, 1),
  ('Perdió autonomía exterior pero conservó asambleas, magistraturas y una vida cívica intensa, sostenida por el evergetismo', true, 2),
  ('Se convirtió en una entidad puramente religiosa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué disciplina nació en la Biblioteca de Alejandría?', 'Zenódoto, Aristófanes de Bizancio y Aristarco de Samotracia fijaron el método. Calímaco compuso los *Pínakes*, primer catálogo razonado.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La filología: establecimiento del texto de Homero, signos críticos, acentuación y puntuación', true, 0),
  ('La retórica judicial', false, 1),
  ('La historiografía política', false, 2),
  ('La lógica formal', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo conocemos la hipótesis heliocéntrica de Aristarco de Samos?', 'La ciencia helenística se lee en gran parte a través de sus huecos: obras perdidas conocidas por citas de terceros.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por el hallazgo de su tratado original en Herculano', false, 0),
  ('Porque Arquímedes la resume para discutirla; la obra de Aristarco se perdió', true, 1),
  ('Por una inscripción en el Museo de Alejandría', false, 2),
  ('Por su transmisión directa hasta Copérnico', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demuestra el cilindro de Antíoco I de Borsipa (268 a. C.)?', 'Junto con el decreto de Rosetta y los diarios astronómicos cuneiformes, es la base para sustituir la difusión por la negociación.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los seléucidas prohibieron las lenguas locales', false, 0),
  ('Que Babilonia había sido despoblada tras la conquista', false, 1),
  ('Que un rey seléucida se presentaba en acadio y con el formulario babilonio tradicional como restaurador del templo Ezida', true, 2),
  ('Que el griego era la única lengua de las inscripciones reales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'En el Egipto ptolemaico, ¿qué era ser «griego»?', 'Determinaba tribunal e impuestos. Hay egipcios documentados con dos nombres, uno griego y otro egipcio, según el contexto.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una condición estrictamente hereditaria y cerrada', false, 0),
  ('Una categoría jurídica y fiscal accesible por lengua, educación y servicio, aunque el mando siguió reservado a la minoría grecomacedonia', true, 1),
  ('Una designación religiosa vinculada al culto de Sarapis', false, 2),
  ('Un título concedido por el faraón a título individual', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo describe hoy la investigación la revuelta macabea?', 'Bickerman situó la iniciativa en la élite helenizante de Jerusalén y Hengel mostró que el judaísmo del siglo II a. C. estaba ya profundamente helenizado.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como una guerra civil judía con intervención real, y no como un choque entre helenismo y judaísmo', true, 0),
  ('Como una invasión romana de Judea', false, 1),
  ('Como una revuelta campesina sin contenido religioso', false, 2),
  ('Como el primer conflicto entre judíos y cristianos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el final político de los reinos helenísticos no es un final cultural?', 'Además, los textos científicos pasaron al siríaco y al árabe entre los siglos VIII y X y regresaron a Europa por vía latina desde el XII.', 3, true
  from public.topics where slug = 'helenismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque Roma prohibió el latín en Oriente', false, 0),
  ('Porque los reinos siguieron existiendo como protectorados hasta el siglo IV', false, 1),
  ('Porque el Mediterráneo oriental siguió funcionando en griego bajo Roma, y de ahí arrancan el Nuevo Testamento y el Imperio bizantino', true, 2),
  ('Porque la ciencia helenística se perdió íntegramente en 30 a. C.', false, 3)
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
  select id, '¿Qué ventaja añade la rotación trienal frente a la bienal, además de sembrar más superficie?', 'Un cambio de calendario agrícola es también un cambio de dieta: la leguminosa aporta proteína y devuelve fertilidad al suelo.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Elimina por completo la necesidad de barbecho', false, 0),
  ('La siembra de primavera introduce leguminosas, que fijan nitrógeno y mejoran la dieta', true, 1),
  ('Permite prescindir del arado pesado', false, 2),
  ('Duplica el rendimiento por semilla en un solo año', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué se le ha objetado a la tesis de Lynn White Jr. sobre la técnica medieval?', 'La técnica estaba disponible antes de generalizarse. La explicación apunta a la demanda, a la estabilidad tras las incursiones y a señores interesados en excedente comercializable.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las innovaciones que describe nunca existieron', false, 0),
  ('Que su cronología adelanta o comprime la difusión real y que el determinismo técnico no explica por qué se adoptó cuando se adoptó', true, 1),
  ('Que ignoró por completo la energía hidráulica', false, 2),
  ('Que confundió el arado pesado con el romano', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo debe manejarse el llamado «óptimo climático medieval»?', 'Es un factor favorable, no una explicación. El motor del crecimiento fue la roturación y la mejora técnica sostenidas durante tres siglos.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como la causa principal del crecimiento europeo', false, 0),
  ('Como un mito sin ninguna base en los datos', false, 1),
  ('Como un factor favorable pero moderado: las reconstrucciones muestran anomalías regionales, no un calentamiento global sincrónico', true, 2),
  ('Como un fenómeno limitado al Mediterráneo oriental', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'En la Edad Media, ¿qué define a una ciudad?', 'La mayoría de las localidades con estatuto urbano tenía entre dos mil y diez mil habitantes. Lo decisivo era el derecho, no el tamaño.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Su número de habitantes', false, 0),
  ('Su estatuto jurídico: una carta que concede tribunal propio, mercado, milicia y censo fijo en dinero', true, 1),
  ('La presencia de una catedral', false, 2),
  ('Estar rodeada de murallas de piedra', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era una comuna urbana?', 'Aparece en el norte de Italia a finales del siglo XI. Derivó en repúblicas urbanas con cónsules y después con *podestà* forasteros.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un impuesto sobre el comercio local', false, 0),
  ('Una asamblea convocada por el obispo para administrar limosnas', false, 1),
  ('El conjunto de tierras comunales de una villa', false, 2),
  ('Una asociación jurada de vecinos que negociaba o arrancaba a su señor el gobierno de la ciudad', true, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué las ciudades italianas contrataban un *podestà* forastero?', 'Era un magistrado contratado por un año. La imparcialidad se buscaba por diseño institucional, no por confianza personal.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque la ley imperial se lo imponía', false, 0),
  ('Precisamente para que no tuviera clientela ni familia en la ciudad que gobernaba', true, 1),
  ('Porque no había juristas formados en Italia', false, 2),
  ('Para evitar pagarle un salario', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función cumplían las ferias de Champaña?', 'Un ciclo de seis ferias anuales encadenadas en cuatro localidades, bajo protección condal, durante casi dos siglos.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Eran mercados exclusivamente agrícolas de ámbito comarcal', false, 0),
  ('Servían de puerto fluvial para la Hansa', false, 1),
  ('Funcionaban como cámara de compensación entre Flandes e Italia: allí se saldaban deudas y se cambiaban monedas, además de venderse mercancías', true, 2),
  ('Eran asambleas judiciales de los condes de Champaña', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué rasgos de la empresa moderna anticipa la *commenda*?', 'Es el antepasado directo de la sociedad en comandita. El reparto habitual daba tres cuartas partes del beneficio al capital.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La cotización en bolsa y el reparto de dividendos', false, 0),
  ('La separación entre capital y gestión y la limitación de la pérdida al capital aportado', true, 1),
  ('La responsabilidad ilimitada de todos los socios', false, 2),
  ('La contratación de trabajo asalariado permanente', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se convivió con la prohibición canónica de la usura?', 'Los teólogos afinaron excepciones como el *damnum emergens* y el *lucrum cessans*, y la práctica mercantil avanzó por ese hueco.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se suprimió el crédito en toda la cristiandad', false, 0),
  ('Se ignoró abiertamente sin consecuencias', false, 1),
  ('Se rodeó con técnica jurídica: el interés se ocultaba en el diferencial de cambio, en el reparto del riesgo o en penalizaciones pactadas', true, 2),
  ('Se autorizó expresamente en el IV Concilio de Letrán', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción plantean Goitein y Udovitch a la idea de «revolución comercial» europea?', 'Se acepta la magnitud del cambio europeo y se rechaza la invención desde cero: Europa sistematizó y llevó a escala lo que recibió.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el comercio europeo nunca alcanzó volumen relevante', false, 0),
  ('Que los documentos de la Gueniza muestran instrumentos equivalentes en uso antes en el mundo islámico: la *suftaya* y el *qirad*', true, 1),
  ('Que la partida doble se inventó en China', false, 2),
  ('Que las ferias de Champaña son una invención historiográfica', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué significaba originalmente *universitas*?', 'La universidad medieval es literalmente un gremio de la enseñanza, y ese origen corporativo explica sus privilegios y su autogobierno.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El conjunto de todas las ciencias', false, 0),
  ('El edificio donde se impartían las lecciones', false, 1),
  ('Corporación: un grupo asociado con personalidad jurídica, estatutos y jurisdicción propias', true, 2),
  ('La licencia concedida por el papa para fundar una escuela', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se diferenciaban los modelos de Bolonia y París?', 'De esos dos modelos derivan las dos familias europeas de gobierno universitario. La fecha de 1088 para Bolonia se fijó en 1888.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En Bolonia la corporación era de estudiantes, que contrataban y multaban a los profesores; en París, de maestros', true, 0),
  ('Bolonia enseñaba en romance y París en latín', false, 1),
  ('París admitía mujeres y Bolonia no', false, 2),
  ('Bolonia dependía del papa y París del emperador', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo consiguió la Universidad de París sus estatutos propios en 1231?', 'Gregorio IX cedió con *Parens scientiarum*. El derecho de autogobierno académico nació de un conflicto laboral.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por concesión espontánea del rey de Francia', false, 0),
  ('Comprándolos al canciller de la catedral', false, 1),
  ('Tras una huelga de dos años en la que los maestros suspendieron las clases y abandonaron la ciudad', true, 2),
  ('Por decisión del IV Concilio de Letrán', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra el método de *Sic et non* de Abelardo?', 'De ahí derivan la *quaestio* y la *disputatio*, ejercicio público de argumentos enfrentados ante un maestro que determina.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la teología debía basarse solo en la Biblia', false, 0),
  ('Que pensar consistía en organizar el desacuerdo: alinea cuestiones con autoridades contradictorias y deja la resolución al lector', true, 1),
  ('Que las autoridades antiguas debían rechazarse', false, 2),
  ('Que la lógica era incompatible con la fe', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Harold Berman, ¿qué consecuencia jurídica tuvo la querella de las investiduras?', 'Berman la llamó «revolución papal» y la sitúa en el origen de la tradición jurídica occidental.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La desaparición del derecho romano en Europa', false, 0),
  ('La sumisión completa del papado al emperador', false, 1),
  ('La unificación de los tribunales laicos y eclesiásticos', false, 2),
  ('Dos jurisdicciones que se reconocen mutuamente obligaron a delimitar competencias, y de ahí salieron el derecho canónico como sistema y la idea de un poder sometido a un derecho que no fabrica él mismo', true, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el núcleo de la tesis de R. I. Moore sobre la sociedad persecutoria?', 'Entre 1000 y 1250 se crearon categorías estables de excluidos e instituciones permanentes para identificarlos. La crítica matiza el peso de la hostilidad social previa.', 3, true
  from public.topics where slug = 'plena-edad-media'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la persecución fue obra de un poder letrado y burocrático que necesitaba definir sus fronteras, y no solo del fanatismo popular espontáneo', true, 0),
  ('Que no hubo persecuciones significativas antes de 1300', false, 1),
  ('Que la Inquisición fue una institución exclusivamente española', false, 2),
  ('Que las minorías perseguidas no existían realmente como grupos', false, 3)
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
  select id, '¿Quién construyó el relato de un «renacer» de las artes y su periodización en tres etapas?', 'Vasari escribió desde Florencia sobre artistas casi todos toscanos, con Miguel Ángel como punto de llegada. Michelet convirtió la palabra en periodo histórico en 1855 y Burckhardt fijó su contenido en 1860.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Petrarca en sus cartas a los autores antiguos', false, 0),
  ('Giorgio Vasari en las *Vidas* (1550, ampliadas en 1568)', true, 1),
  ('Jacob Burckhardt en 1860', false, 2),
  ('Lorenzo Valla al refutar la Donación de Constantino', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿De dónde procede la expresión «Edad Media»?', 'Los humanistas hablaron de *tenebrae* y de *media aetas*. La periodización que todavía usamos la redactó una de las partes en litigio.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('De las crónicas monásticas del siglo X', false, 0),
  ('Del Concilio de Trento, que necesitaba fechar la tradición', false, 1),
  ('De los propios humanistas, que llamaron así al hueco entre la Antigüedad y ellos mismos', true, 2),
  ('De la historiografía alemana del siglo XIX', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostuvo Charles H. Haskins en 1927?', 'Si «renacimiento» significa recuperación deliberada de la Antigüedad, la Edad Media tuvo varios: el carolingio, el otoniano y el del siglo XII.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el Renacimiento italiano empezó antes de lo que se creía, hacia 1300', false, 0),
  ('Que ya hubo un renacimiento en el siglo XII: universidades, derecho romano y Aristóteles recuperado a través del árabe', true, 1),
  ('Que el Renacimiento fue un fenómeno exclusivamente artístico', false, 2),
  ('Que la imprenta explica por sí sola el cambio cultural del siglo XV', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué disciplinas componían los *studia humanitatis*?', 'Quedaban fuera la lógica, la filosofía natural, la metafísica, el derecho, la medicina y la teología, que siguieron enseñándose en las facultades sin apenas cambios.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Teología, derecho, medicina y artes liberales', false, 0),
  ('Lógica, filosofía natural, metafísica y matemáticas', false, 1),
  ('Gramática, retórica, poesía, historia y filosofía moral', true, 2),
  ('Aritmética, geometría, música y astronomía', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la definición de humanismo que domina hoy la investigación?', 'Es la definición de Kristeller. Hubo humanistas platónicos, aristotélicos, escépticos y devotos: buscar una filosofía común es un error de categoría.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una filosofía unitaria sobre la dignidad del ser humano', false, 0),
  ('Un programa de estudios y una profesión, compatible con posiciones filosóficas y religiosas muy distintas', true, 1),
  ('Un movimiento antirreligioso de intelectuales laicos', false, 2),
  ('La ideología oficial de la república de Florencia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo demostró Valla en 1440 que la Donación de Constantino era falsa?', 'Nació así la crítica textual moderna: un documento puede fecharse por cómo está escrito, con independencia de lo que afirme.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Encontrando el original auténtico en los archivos vaticanos', false, 0),
  ('Analizando su lengua: vocabulario inexistente en el siglo IV, errores institucionales y latín tardío imposible en la cancillería constantiniana', true, 1),
  ('Comparándola con una copia griega conservada en Constantinopla', false, 2),
  ('Demostrando que Constantino nunca visitó Roma', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia tuvo que Erasmo tradujera en 1516 el griego *metanoeite* como «arrepentíos» y no como «haced penitencia»?', 'Una corrección filológica se convirtió en fractura religiosa. Erasmo nunca rompió con Roma, pero su obra completa acabó en el Índice de 1559.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: fue una discusión estrictamente académica', false, 0),
  ('Provocó su excomunión inmediata', false, 1),
  ('Dejó sin apoyo textual el sacramento de la penitencia, y Lutero abrió con ese argumento la primera de sus 95 tesis', true, 2),
  ('Obligó a reescribir la Vulgata por orden del papa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestran los contratos de encargo estudiados por Baxandall?', 'La pintura era una mercancía por encargo con especificaciones, dirigida a un público entrenado. El artista libre y solitario es una construcción romántica posterior.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los artistas trabajaban con total libertad temática', false, 0),
  ('Que fijaban plazos, la calidad del azul de ultramar, la cantidad de oro y qué figuras debía pintar el maestro en persona', true, 1),
  ('Que la Iglesia era el único cliente posible', false, 2),
  ('Que los precios se pactaban siempre después de entregar la obra', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consiste el debate entre Robert Lopez y Richard Goldthwaite?', 'Para Lopez el arte absorbió capital que ya no encontraba inversión rentable; para Goldthwaite hubo un auge genuino del consumo y de la construcción. La discusión sigue abierta.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En si el Renacimiento empezó en Florencia o en Venecia', false, 0),
  ('En si la perspectiva lineal se descubrió o se inventó', false, 1),
  ('En si la inversión en arte respondía a una caída de la rentabilidad productiva o a una expansión real de la demanda de bienes', true, 2),
  ('En si el mecenazgo era religioso o político', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué vínculo económico une la cumbre artística del Renacimiento romano con el estallido de la Reforma?', 'La basílica de Julio II y de León X y la protesta de Lutero de 1517 comparten fuente de financiación.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las obras de San Pedro se financiaron en parte con indulgencias predicadas por toda Europa', true, 0),
  ('Los banqueros alemanes retiraron sus depósitos del banco Médicis', false, 1),
  ('Miguel Ángel fue acusado de simonía por el papa León X', false, 2),
  ('Las guerras italianas arruinaron a los mecenas florentinos', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Quién codificó por escrito la perspectiva lineal como método?', 'Brunelleschi hizo el experimento óptico hacia 1413 y Masaccio lo aplicó hacia 1427; Alberti convirtió el hallazgo en método escrito con la pirámide visual y la pintura como ventana.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Masaccio en la *Trinidad* de Santa Maria Novella', false, 0),
  ('Brunelleschi en su experimento del Baptisterio', false, 1),
  ('Leonardo en sus cuadernos', false, 2),
  ('Alberti en *De pictura* (1435)', true, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo Vesalio en *De humani corporis fabrica* (1543)?', 'Galeno había descrito animales, no humanos. Solo la imprenta permitía que una lámina fuese idéntica para todos los lectores y, por tanto, discutible.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Descubrir la circulación de la sangre', false, 0),
  ('Corregir a Galeno desde la disección directa y presentar el argumento en láminas grabadas', true, 1),
  ('Traducir al latín los tratados médicos árabes', false, 2),
  ('Prohibir la disección de cadáveres humanos en Padua', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Dado que China y Corea imprimían con tipos móviles antes que Europa, ¿cuál fue la aportación específica de Gutenberg?', 'Funcionó porque el alfabeto latino necesita pocos caracteres, algo que penalizaba a los sistemas de escritura asiáticos.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Inventar el papel y la tinta de imprenta', false, 0),
  ('Aplicar por primera vez los tipos móviles a un texto religioso', false, 1),
  ('Un sistema de punzón y matriz para fundir en serie tipos metálicos idénticos, con tinta grasa y prensa adaptada', true, 2),
  ('Sustituir el pergamino por el papel en toda Europa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objetó Adrian Johns (1998) a la tesis de Eisenstein sobre la imprenta?', 'El consenso actual sitúa la imprenta como condición necesaria pero no suficiente: sus efectos dependieron de gremios, privilegios, censura y mercados.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la imprenta no se difundió realmente hasta el siglo XVII', false, 0),
  ('Que la fijeza del texto no fue automática: hubo piratería, ediciones defectuosas y pies de imprenta falsos, y la fiabilidad hubo que construirla socialmente', true, 1),
  ('Que los incunables eran demasiado caros para influir en nada', false, 2),
  ('Que la Reforma se habría producido igualmente sin libros', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra la difusión impresa del *Malleus maleficarum* (1487)?', 'El manual tuvo alrededor de treinta ediciones. Junto a los almanaques astrológicos y las profecías, fue uno de los géneros de mayor venta.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la imprenta amplificó todo lo que circulaba, no solo la crítica humanista', true, 0),
  ('Que la censura eclesiástica funcionó desde el primer momento', false, 1),
  ('Que los libros en latín no tenían público', false, 2),
  ('Que la caza de brujas fue anterior a la imprenta y no guarda relación con ella', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué respondió Joan Kelly en 1977 a su pregunta «¿Tuvieron las mujeres un Renacimiento?»?', 'La revisión posterior matiza la respuesta según clase, ciudad y década, pero mantiene el hallazgo metodológico: una periodización hecha sobre una minoría masculina no describe al conjunto de la sociedad.', 3, true
  from public.topics where slug = 'renacimiento'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que sí, gracias a las humanistas y pintoras documentadas del periodo', false, 0),
  ('Que la pregunta no puede responderse por falta de fuentes', false, 1),
  ('Que no, o no en el mismo sentido: las mujeres de la nobleza perdieron funciones y se endurecieron las normas de castidad, dote y reclusión', true, 2),
  ('Que el Renacimiento fue indiferente a la posición de las mujeres', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene Paul Schroeder sobre el orden salido del Congreso de Viena?', 'Europa no conoció una guerra general entre 1815 y 1914. El sistema sustituyó el equilibrio como competencia armada por un orden con congresos periódicos.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue una restauración literal del mapa anterior a 1789', false, 0),
  ('Que fue una transformación real de la política internacional, con reglas pactadas que evitaron una guerra general durante décadas', true, 1),
  ('Que careció de efectos porque se rompió en 1821', false, 2),
  ('Que su único objetivo era repartir las colonias americanas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué herencia napoleónica conservaron los regímenes de la Restauración?', 'Los monarcas restaurados heredaron un aparato estatal mucho más eficaz que el de 1789 y lo conservaron porque servía para gobernar.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El sufragio universal masculino', false, 0),
  ('La república como forma de gobierno', false, 1),
  ('Los códigos civiles, la administración uniforme, el registro civil y la propiedad plena de la tierra', true, 2),
  ('La libertad de prensa sin censura previa', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es anacrónico identificar liberalismo decimonónico con democracia?', 'En la Francia de Luis Felipe votaba menos del uno por ciento de la población. La ciudadanía política funcionaba como premio a la propiedad.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque el liberalismo rechazaba las constituciones escritas', false, 0),
  ('Porque defendía derechos y división de poderes, pero reservaba el voto a los propietarios y desconfiaba del sufragio universal', true, 1),
  ('Porque los liberales eran partidarios del absolutismo ilustrado', false, 2),
  ('Porque la democracia no existía como concepto en el siglo XIX', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinguió Benjamin Constant en 1819?', 'Constant concluyó que la libertad de los modernos era la propia de las sociedades comerciales, y que la participación directa resultaba impracticable en ellas.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La nación política de la nación cultural', false, 0),
  ('La libertad de los antiguos, participación directa en las decisiones colectivas, de la de los modernos, disfrute sin interferencias de la vida privada', true, 1),
  ('El liberalismo económico del liberalismo político', false, 2),
  ('La soberanía nacional de la soberanía compartida', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el efecto social predominante de las desamortizaciones en el sur de Europa?', 'La tierra salió al mercado en subasta pública, y solo pudo comprarla quien disponía de dinero líquido.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La creación de una sociedad de pequeños propietarios', false, 0),
  ('El reparto gratuito de tierras entre los jornaleros', false, 1),
  ('La concentración de la propiedad en manos de quienes ya tenían capital para pujar en las subastas', true, 2),
  ('La devolución de las tierras a los municipios', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Gellner, ¿cuál es la relación entre nación y nacionalismo?', 'Es la inversión modernista del planteamiento romántico. Anderson añadió el papel del capitalismo impreso en la imaginación de la simultaneidad.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La nación preexiste y el nacionalismo la despierta', false, 0),
  ('El nacionalismo crea las naciones: la sociedad industrial necesita una población homogénea y alfabetizada que solo la escuela estatal produce', true, 1),
  ('Ambos son fenómenos independientes entre sí', false, 2),
  ('El nacionalismo es una consecuencia tardía de las guerras napoleónicas', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción plantea Anthony D. Smith al modernismo?', 'La objeción obliga a explicar por qué unas comunidades resultaron nacionalizables y otras no, en lugar de suponer que cualquier material sirve.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las naciones son eternas e inmutables', false, 0),
  ('Que el nacionalismo no tuvo importancia política antes de 1914', false, 1),
  ('Que las naciones modernas se apoyan en *ethnies* previas con mitos, memorias y símbolos que el nacionalismo reorganiza pero no inventa de la nada', true, 2),
  ('Que la escuela y el ejército no influyeron en la formación nacional', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo definió Renan la nación en 1882?', 'Renan negó expresamente que raza, lengua, religión o geografía definan la nación, y señaló el olvido —e incluso el error histórico— como factor esencial.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por la raza y la lengua comunes', false, 0),
  ('Como un plebiscito de todos los días, que además exige olvidar los conflictos que la fundaron', true, 1),
  ('Como la comunidad de quienes comparten religión', false, 2),
  ('Como el territorio delimitado por fronteras naturales', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demuestra el informe francés de 1863 que cita Eugen Weber?', 'La nacionalización de la Francia rural la hicieron escuela, cuartel, ferrocarril y mercado entre 1870 y 1914, un siglo después de la Revolución hecha en su nombre.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la alfabetización era universal en Francia', false, 0),
  ('Que alrededor de la cuarta parte de la población de Francia no hablaba francés', true, 1),
  ('Que el servicio militar era voluntario', false, 2),
  ('Que la mayoría de los franceses votaba en las elecciones', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué texto sirvió de modelo común a los revolucionarios de la oleada de 1820?', 'Se tradujo y adoptó en Nápoles, Piamonte y Portugal por revolucionarios que nunca habían pisado España.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La Constitución de Cádiz de 1812', true, 0),
  ('La Declaración de Derechos del Hombre y del Ciudadano de 1789', false, 1),
  ('El Acta Final del Congreso de Viena', false, 2),
  ('La Carta Otorgada francesa de 1814', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál de estos factores NO explica el fracaso de las revoluciones de 1848?', 'No hubo intervención estadounidense. Los tres primeros factores, sumados a la lealtad de los ejércitos a sus soberanos, explican el desenlace.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ruptura entre liberales moderados y radicales al aparecer la cuestión social', false, 0),
  ('El choque entre movimientos nacionales rivales dentro del mismo territorio', false, 1),
  ('La desmovilización campesina tras obtener la abolición de las cargas señoriales', false, 2),
  ('La intervención militar de Estados Unidos en apoyo de los antiguos regímenes', true, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué rechazó Federico Guillermo IV la corona imperial que le ofreció el Parlamento de Fráncfort en 1849?', 'El episodio resume el problema de 1848: una constitución sin ejército ni administración detrás no obliga a nadie.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque prefería que la corona la ostentara Austria', false, 0),
  ('Porque procedía de una asamblea elegida y no de los príncipes alemanes', true, 1),
  ('Porque la constitución de Fráncfort abolía la monarquía', false, 2),
  ('Porque Rusia se lo prohibió expresamente', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Frente a la sentencia de Trevelyan sobre 1848, ¿qué resultados duraderos señala la revisión historiográfica?', '1848 no consiguió sus objetivos declarados, pero cambió el terreno de juego: después ningún régimen pudo gobernar ignorando a la opinión pública organizada.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La unificación inmediata de Alemania e Italia', false, 0),
  ('La abolición definitiva de la servidumbre en las tierras de los Habsburgo, el estreno del sufragio masculino universal en Francia y la instalación de la política de masas', true, 1),
  ('La disolución del Imperio austríaco', false, 2),
  ('La implantación del sufragio femenino en Europa central', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué pactó Cavour en Plombières en 1858?', 'La unificación italiana fue una operación diplomática y militar del Piamonte, que administró el resultado como anexión y no como federación.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La federación de los Estados italianos bajo el papado', false, 0),
  ('Una guerra contra Austria junto a Napoleón III a cambio de ceder Saboya y Niza', true, 1),
  ('La cesión de Venecia por parte de Austria sin guerra', false, 2),
  ('El apoyo británico a la expedición de Garibaldi', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué desajuste institucional caracterizó al Imperio alemán de 1871?', 'El sufragio del Reichstag era más amplio que el británico de la época. Sufragio amplio y poder parlamentario nulo podían convivir.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un Reichstag elegido por sufragio masculino universal que no controlaba a un canciller responsable solo ante el emperador', true, 0),
  ('Un parlamento con plenos poderes frente a un emperador simbólico', false, 1),
  ('La ausencia de cualquier cámara elegida', false, 2),
  ('El sufragio femenino aplicado solo en Prusia', false, 3)
) as opcion(label, is_correct, position);

with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la crítica de Blackbourn y Eley (1984) a la tesis del Sonderweg?', 'La versión fuerte del Sonderweg está abandonada; persiste como descripción de un desajuste concreto, no como explicación teleológica del siglo XX alemán.', 3, true
  from public.topics where slug = 'revoluciones-liberales'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Alemania se democratizó antes que Francia', false, 0),
  ('Que el Imperio alemán no llegó a industrializarse', false, 1),
  ('Que presupone un camino normal a la modernidad que ningún país recorrió, y convierte 1933 en destino inscrito en 1871', true, 2),
  ('Que las élites agrarias prusianas nunca tuvieron poder político', false, 3)
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
