-- Historya con Alex · contenido publicable — parte 01 de 7 (catalogo)
--
-- ARCHIVO GENERADO. No editar a mano: los cambios se pierden.
-- Fuente: src/data/topics/ y src/data/topic-images.ts. Regenerar con `npm run seed`.
--
-- Ejecutar EN ORDEN NUMÉRICO en el SQL Editor, después de las migraciones de
-- supabase/migrations/. Está partido porque el editor rechaza las consultas
-- grandes con «Query is too large to be run via the SQL Editor».
-- Cada archivo es una transacción propia e idempotente: repetirlo no duplica.
-- Contenido completo: 35 temas y 555 preguntas.

begin;

do $$ begin
  if not exists (select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'topics' and column_name = 'period_label') then
    raise exception 'Falta la migración 20260827_content_metadata_and_answer_check.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';
  end if;
  if not exists (select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'topics' and column_name = 'cover_image') then
    raise exception 'Falta la migración 20260829_topic_cover_image.sql. Ejecuta las migraciones de supabase/migrations/ en orden antes que este seed.';
  end if;
end $$;

-- Épocas
insert into public.eras (slug, title, sort_order, start_year, end_year, published) values
  ('antiguedad', 'Antigüedad', 0, -3500, 476, true),
  ('edad-media', 'Edad Media', 1, 476, 1453, true),
  ('edad-moderna', 'Edad Moderna', 2, 1453, 1789, true),
  ('edad-contemporanea', 'Edad Contemporánea', 3, 1789, null, true)
on conflict (slug) do update set
  title = excluded.title, sort_order = excluded.sort_order,
  start_year = excluded.start_year, end_year = excluded.end_year, published = excluded.published;

-- Países
insert into public.countries (slug, title, published) values
  ('europa', 'Europa', true),
  ('africa', 'África', true),
  ('america', 'América', true),
  ('peninsula-iberica', 'Península ibérica', true),
  ('turquia', 'Turquía', true),
  ('china', 'China', true),
  ('mundo', 'Mundo', true),
  ('egipto', 'Egipto', true),
  ('espana', 'España', true),
  ('grecia', 'Grecia', true),
  ('mediterraneo-oriental', 'Mediterráneo oriental', true),
  ('india', 'India', true),
  ('reino-unido', 'Reino Unido', true),
  ('arabia', 'Arabia', true),
  ('japon', 'Japón', true),
  ('irak', 'Irak', true),
  ('francia', 'Francia', true),
  ('rusia', 'Rusia', true),
  ('italia', 'Italia', true)
on conflict (slug) do update set title = excluded.title, published = excluded.published;

-- Tema: absolutismo
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'absolutismo',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'El Estado moderno y el absolutismo', 'Cómo unas monarquías compuestas y endeudadas construyeron administración, ejército e impuestos sin dejar de negociar con las élites.', 'universidad',
  55, '1576–1715', '⚜', 'blue', '{"src":"/img/absolutismo/portada.jpg","alt":"Retrato de cuerpo entero de Luis XIV con manto de armiño y flores de lis, peluca larga y espada al costado","width":1200,"height":1705,"role":"portada","caption":"Luis XIV retratado por Hyacinthe Rigaud en 1701.","author":"Hyacinthe Rigaud","title":"Portrait de Louis XIV en costume de sacre Portrait of Louis XIV","year":"1701","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Louis_XIV_of_France.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: africa
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'africa',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'africa'),
  'Reinos africanos: Malí, Songhay, Etiopía y Gran Zimbabue', 'Estados, universidades y redes comerciales de un continente al que la historiografía europea negó durante siglos el derecho a tener historia.', 'universidad',
  55, 'siglos IV–XVII', '◈', 'green', '{"src":"/img/africa/portada.jpg","alt":"Detalle de carta náutica medieval con un rey coronado sentado en su trono sosteniendo una pepita de oro","width":1200,"height":856,"role":"portada","caption":"El mansa Musa en el Atlas catalán de 1375, con una pepita de oro en la mano.","author":"attributed to Abraham Cresques","title":"Detail from the Catalan Atlas Sheet 6 showing Mansa Musa","year":"1375","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Catalan_Atlas_BNF_Sheet_6_Mansa_Musa.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: america-precolombina
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'america-precolombina',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'america'),
  'Mesoamérica y los Andes', 'Dos focos civilizatorios que inventaron por su cuenta la agricultura, la ciudad, la escritura y el Estado, sin contacto con el resto del mundo.', 'universidad',
  60, '3000 a. C.–1533', '☀', 'terracotta', '{"src":"/img/america-precolombina/portada.jpg","alt":"Vista de Machu Picchu con sus terrazas escalonadas y recintos de piedra sobre la cresta de la montaña","width":1200,"height":800,"role":"portada","caption":"Machu Picchu, construido en el siglo XV bajo Pachacútec.","author":"Pedro Szekely at https://www.flickr.com/photos/pedrosz/","title":"Machu Picchu, Peru","year":"2007","source":"Wikimedia Commons","license":"CC BY-SA 2.0","url":"https://commons.wikimedia.org/wiki/File:Machu_Picchu%2C_Peru.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: andalus
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'andalus',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'peninsula-iberica'),
  'Al-Ándalus y los reinos cristianos', 'Ocho siglos peninsulares: conquista, califato, frontera, expansión cristiana y 1492.', 'universidad',
  55, '711–1492', '⌁', 'green', '{"src":"/img/andalus/portada.jpg","alt":"Fuente de los Leones de la Alhambra, con doce leones de piedra sosteniendo la taza central","width":1200,"height":850,"role":"portada","caption":"El patio de los Leones de la Alhambra, del siglo XIV nazarí.","author":"Jebulon","title":"Fountain patio de los Leones Alhambra Granada Spain","year":"2012","source":"Wikimedia Commons","license":"CC0","url":"https://commons.wikimedia.org/wiki/File:Fountain_patio_de_los_Leones_Alhambra_Granada_Spain.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: bizancio
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'bizancio',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'turquia'),
  'El Imperio bizantino', 'Mil años de continuidad romana en Oriente: derecho, ortodoxia, iconoclasia y caída.', 'universidad',
  45, '330–1453', '☨', 'plum', '{"src":"/img/bizancio/portada.jpg","alt":"Santa Sofía de Estambul con su gran cúpula central y los minaretes añadidos en época otomana","width":1200,"height":801,"role":"portada","caption":"Santa Sofía, terminada en 537 bajo Justiniano.","author":"Arild Vågen","title":"Hagia Sophia Mars 2013","year":"2013","source":"Wikimedia Commons","license":"CC BY-SA 3.0","url":"https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: china-imperial
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'china-imperial',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'china'),
  'China imperial', 'Dos mil años de un Estado burocrático que se reconstruyó una y otra vez, fue la economía más avanzada del mundo y perdió esa posición en el siglo XIX.', 'universidad',
  60, '221 a. C.–1912', '龍', 'red', '{"src":"/img/china-imperial/portada.jpg","alt":"Detalle de rollo pintado con un puente de madera abarrotado, barcazas en el río y puestos de mercado","width":1200,"height":600,"role":"portada","caption":"Detalle de A lo largo del río durante el festival Qingming, de Zhang Zeduan, época Song.","author":"Zhang Zeduan","title":"Along the River During the Qingming Festival","year":"1085","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: crisis-siglo-xiv
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'crisis-siglo-xiv',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'Peste negra y crisis bajomedieval', 'Hambre, peste, guerra y cisma: qué se hundió, qué salió reforzado y quién ganó con ello.', 'universidad',
  55, 'c. 1300–1450', '⌛', 'blue', '{"src":"/img/crisis-siglo-xiv/portada.jpg","alt":"Pintura de un paisaje devastado en el que ejércitos de esqueletos arrasan a hombres y mujeres de toda condición","width":1200,"height":856,"role":"portada","caption":"El triunfo de la Muerte, de Pieter Brueghel el Viejo (hacia 1562). Es muy posterior a la peste negra y recoge su memoria.","author":"Pieter Brueghel the Elder","title":"De triomf van de Doods The Triumph of Death","year":"1562","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:The_Triumph_of_Death_by_Pieter_Bruegel_the_Elder.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: descubrimientos
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'descubrimientos',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'mundo'),
  'Expansión atlántica y conquista de América', 'Navegación, conquista, colapso demográfico y la primera economía de escala planetaria.', 'universidad',
  55, '1415–1600', '⚓', 'gold', '{"src":"/img/descubrimientos/portada.jpg","alt":"Carta náutica manuscrita de 1502 con las costas conocidas, banderas y líneas de rumbo trazadas sobre pergamino","width":1200,"height":564,"role":"portada","caption":"El planisferio de Cantino (1502), sacado clandestinamente de Portugal.","author":"anonymous Portuguese (1502)","title":"Cantino planisphere (1502)","year":"1502","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Cantino_planisphere_(1502).jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: egipto
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'egipto',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'egipto'),
  'El Egipto de los faraones', 'Estado, ecología fluvial, ideología real y religión funeraria en tres milenios de historia egipcia.', 'universidad',
  45, 'c. 3100–30 a. C.', '☥', 'gold', '{"src":"/img/egipto/portada.jpg","alt":"Las tres grandes pirámides de Guiza alineadas sobre la arena del desierto al atardecer","width":1200,"height":798,"role":"portada","caption":"La necrópolis de Guiza, levantada durante la IV dinastía.","author":"Ricardo Liberato","title":"All Gizah Pyramids","year":"2006","source":"Wikimedia Commons","license":"CC BY-SA 2.0","url":"https://commons.wikimedia.org/wiki/File:All_Gizah_Pyramids.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: entreguerras
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'entreguerras',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'europa'),
  'Crisis de 1929 y fascismos', 'Veinte años entre dos guerras: una paz que no estabilizó nada, un hundimiento económico global y una respuesta política que destruyó las democracias por dentro.', 'universidad',
  55, '1919–1939', '↯', 'plum', '{"src":"/img/entreguerras/portada.jpg","alt":"Multitud de hombres con sombrero agolpada en la calle frente al edificio de la Bolsa de Nueva York","width":1200,"height":1711,"role":"portada","caption":"Concentración frente a la Bolsa de Nueva York tras el hundimiento de octubre de 1929.","author":"US-gov","title":"Crowd outside nyse","year":"1929","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Crowd_outside_nyse.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: espana-siglo-xx
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'espana-siglo-xx',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'espana'),
  'España en el siglo XX', 'Del Desastre del 98 a la entrada en Europa: un siglo con dos dictaduras, una república, una guerra civil y una transición que sigue discutiéndose.', 'universidad',
  60, '1898–1986', '✶', 'terracotta', '{"src":"/img/espana-siglo-xx/portada.jpg","alt":"Calle de Guernica reducida a escombros y fachadas vacías tras el bombardeo","width":1200,"height":878,"role":"portada","caption":"Ruinas de Guernica tras el bombardeo del 26 de abril de 1937.","author":"Unknown author Unknown author","title":"Guernica, Ruinen","year":"1937","source":"Wikimedia Commons","license":"CC BY-SA 3.0 de","url":"https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-H25224%2C_Guernica%2C_Ruinen.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: feudalismo
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'feudalismo',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'La Europa feudal', 'Vasallaje, señorío, campesinado y la discusión sobre si el feudalismo existió.', 'universidad',
  45, 'c. 800–1200', '⚔', 'red', '{"src":"/img/feudalismo/portada.jpg","alt":"Miniatura medieval con campesinos segando y agavillando heno frente a una ciudad amurallada","width":1200,"height":1937,"role":"portada","caption":"El mes de junio en las Très Riches Heures del duque de Berry, hacia 1412-1416.","author":"Limbourg brothers / Barthélemy d''Eyck / Jean Colombe","title":"Très Riches Heures du duc de Berry Folio 6, verso : June","year":"1412","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_juin.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: gran-guerra
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'gran-guerra',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'europa'),
  'Primera Guerra Mundial', 'Cómo una crisis diplomática de cinco semanas se convirtió en cuatro años de desgaste industrial y liquidó cuatro imperios.', 'universidad',
  55, '1914–1918', '✚', 'green', '{"src":"/img/gran-guerra/portada.jpg","alt":"Soldados británicos en una trinchera estrecha del Somme, uno de guardia con el fusil y el resto descansando contra la pared de tierra","width":1200,"height":916,"role":"portada","caption":"Trinchera del Regimiento de Cheshire en el Somme, 1916.","author":"John Warwick Brooke","title":"Cheshire Regiment trench Somme 1916","year":"1916","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Cheshire_Regiment_trench_Somme_1916.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: grecia
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'grecia',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'grecia'),
  'Grecia arcaica y clásica', 'La polis, la invención de la política, la democracia ateniense y sus límites.', 'universidad',
  50, 'c. 800–323 a. C.', '⌂', 'blue', '{"src":"/img/grecia/portada.jpg","alt":"El Partenón visto desde el oeste, con las columnas dóricas de su fachada en pie","width":1200,"height":843,"role":"portada","caption":"El Partenón, construido en la Acrópolis de Atenas entre 447 y 432 a. C.","author":"Steve Swayne","title":"The Parthenon in Athens","year":"1978","source":"Wikimedia Commons","license":"CC BY 2.0","url":"https://commons.wikimedia.org/wiki/File:The_Parthenon_in_Athens.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: guerra-fria
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'guerra-fria',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'mundo'),
  'Guerra Fría y descolonización', 'Cuarenta y cinco años de enfrentamiento entre dos superpotencias que nunca combatieron entre sí, y el desmantelamiento simultáneo de los imperios coloniales europeos.', 'universidad',
  60, '1945–1991', '☢', 'gold', '{"src":"/img/guerra-fria/portada.jpg","alt":"Obreros levantando un muro de bloques de hormigón en una calle de Berlín, vigilados por soldados","width":1200,"height":832,"role":"portada","caption":"Construcción del Muro de Berlín, noviembre de 1961.","author":"National Archives","title":"Berlin Wall 1961-11-20","year":"1961","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Berlin_Wall_1961-11-20.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: helenismo
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'helenismo',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'mediterraneo-oriental'),
  'Alejandro y el mundo helenístico', 'De la Macedonia de Filipo a los reinos helenísticos: conquista, koiné y negociación cultural.', 'universidad',
  55, '359–30 a. C.', 'Ω', 'gold', '{"src":"/img/helenismo/portada.jpg","alt":"Detalle de mosaico romano con Alejandro Magno a caballo, coraza y lanza, cargando en la batalla","width":1200,"height":828,"role":"portada","caption":"Alejandro en el mosaico de Issos, copia romana de una pintura helenística.","author":"Ruthven ( talk · contribs )","title":"BattleofIssus333BC-mosaic-detail1","year":"2005","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:BattleofIssus333BC-mosaic-detail1.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: ilustracion
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'ilustracion',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'La Ilustración', 'Una práctica de crítica pública más que un sistema de ideas: cafés, enciclopedias, tolerancia y sus propios puntos ciegos.', 'universidad',
  55, '1689–1789', '✷', 'gold', '{"src":"/img/ilustracion/portada.jpg","alt":"Grabado alegórico con la Verdad rodeada de figuras que representan la razón, la filosofía y las artes","width":1200,"height":1891,"role":"portada","caption":"Frontispicio de la Encyclopédie de Diderot y D''Alembert, grabado por Bonaventure-Louis Prévost.","author":"Benoît-Louis Prévost / Charles-Nicolas Cochin","title":"Encyclopedie frontispice full","year":"1764","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Encyclopedie_frontispice_full.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: imperialismo
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'imperialismo',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'mundo'),
  'Imperialismo y colonialismo', 'Cómo un puñado de Estados europeos pasó a administrar una cuarta parte del planeta en cuarenta años, con qué medios y con qué coartada.', 'universidad',
  55, '1870–1914', '⊕', 'blue', '{"src":"/img/imperialismo/portada.png","alt":"Caricatura de Cecil Rhodes representado como un coloso a horcajadas sobre África, de El Cairo a Ciudad del Cabo","width":1200,"height":1555,"role":"portada","caption":"El coloso de Rodas, caricatura de Edward Linley Sambourne para Punch, 10 de diciembre de 1892.","author":"Edward Linley Sambourne","title":"Punch Rhodes Colossus","year":"1892","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Punch_Rhodes_Colossus.png"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: india
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'india',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'india'),
  'India: de los Mauryas a los mogoles', 'Dos mil años de imperios, religiones y comercio en un subcontinente que casi nunca estuvo unificado y que sin embargo produjo una civilización reconocible.', 'universidad',
  60, '322 a. C.–1707', '☸', 'gold', '{"src":"/img/india/portada.jpg","alt":"El Taj Mahal de mármol blanco con su cúpula bulbosa y los cuatro minaretes, reflejado en el estanque del jardín","width":1200,"height":989,"role":"portada","caption":"El Taj Mahal, mausoleo mogol construido entre 1632 y 1653.","author":"Dhirad , picture edited by J. A. Knudsen","title":"Taj Mahal in March 2004","year":"2004","source":"Wikimedia Commons","license":"CC BY-SA 3.0","url":"https://commons.wikimedia.org/wiki/File:Taj_Mahal_in_March_2004.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: industrializacion
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'industrializacion',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'reino-unido'),
  'La revolución industrial', 'Por qué empezó en una isla del Atlántico norte, qué costó vivirla y cuándo empezó realmente a notarse en el bolsillo.', 'universidad',
  55, '1760–1914', '⚙', 'terracotta', '{"src":"/img/industrializacion/portada.jpg","alt":"Paisaje nocturno con las llamas y el humo rojizo de unos altos hornos iluminando el valle","width":1200,"height":767,"role":"portada","caption":"Coalbrookdale de noche, de Philip James de Loutherbourg (1801).","author":"Philip James de Loutherbourg","title":"Coalbrookdale by Night","year":"1801","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Philipp_Jakob_Loutherbourg_d._J._002.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: islam
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'islam',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'arabia'),
  'Nacimiento y expansión del islam', 'De Arabia al Atlántico: revelación, califato, ciencia y fragmentación política.', 'universidad',
  50, '610–1258', '☾', 'green', '{"src":"/img/islam/portada.jpg","alt":"Bosque de columnas y arcos de dovelas rojas y blancas en el interior de la mezquita de Córdoba","width":1200,"height":743,"role":"portada","caption":"Los arcos bicolores de la mezquita de Córdoba, iniciada en 786.","author":"James (Jim) Gordon","title":"Mosque of Cordoba","year":"2007","source":"Wikimedia Commons","license":"CC BY 2.0","url":"https://commons.wikimedia.org/wiki/File:Mosque_of_Cordoba.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: japon
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'japon',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'japon'),
  'Japón: de Heian a Meiji', 'Mil años entre una corte aristocrática y una potencia industrial: el archipiélago que adoptó modelos ajenos sin ser conquistado nunca.', 'universidad',
  55, '794–1912', '⛩', 'plum', '{"src":"/img/japon/portada.jpg","alt":"Estampa japonesa con una ola enorme de cresta espumosa a punto de romper sobre tres barcas, y el Fuji al fondo","width":1200,"height":828,"role":"portada","caption":"La gran ola de Kanagawa, de Katsushika Hokusai, hacia 1831.","author":"After Katsushika Hokusai","title":"The Great Wave off Kanagawa","year":"1930","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:The_Great_Wave_off_Kanagawa.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: mesopotamia
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'mesopotamia',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'irak'),
  'Mesopotamia y el nacimiento del Estado', 'Urbanización, escritura, derecho y los primeros imperios entre el Tigris y el Éufrates.', 'universidad',
  45, 'c. 4000–539 a. C.', '𒀭', 'blue', '{"src":"/img/mesopotamia/portada.jpg","alt":"Panel de mosaico con incrustaciones de concha y lapislázuli en tres registros con carros, soldados y prisioneros","width":1200,"height":525,"role":"portada","caption":"Cara de la guerra del Estandarte de Ur, hacia 2600 a. C.","author":"Unknown author Unknown author","title":"Standard of Ur - War","year":"2600","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Standard_of_Ur_-_War.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: mundo-actual
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'mundo-actual',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'mundo'),
  'El mundo desde 1991', 'Del momento unipolar y la globalización acelerada al retorno de la geopolítica: tres décadas que exigen historia y no solo actualidad.', 'universidad',
  55, '1991–hoy', '⊛', 'green', '{"src":"/img/mundo-actual/portada.jpg","alt":"Representación gráfica de las conexiones de internet como una maraña radial de líneas de colores sobre fondo negro","width":1200,"height":1200,"role":"portada","caption":"Mapa parcial de internet trazado a partir de rutas de red. Ilustración de datos, no una fotografía.","author":"The Opte Project","title":"Internet map 1024","year":"2005","source":"Wikimedia Commons","license":"CC BY 2.5","url":"https://commons.wikimedia.org/wiki/File:Internet_map_1024.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: plena-edad-media
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'plena-edad-media',
  (select id from public.eras where slug = 'edad-media'),
  (select id from public.countries where slug = 'europa'),
  'Ciudades, comercio y universidades', 'El despegue de los siglos centrales: campo, mercado, comuna, crédito y corporación universitaria.', 'universidad',
  55, 'c. 1000–1300', '⚖', 'terracotta', '{"src":"/img/plena-edad-media/portada.jpg","alt":"Miniatura de una clase universitaria medieval: un maestro lee desde una cátedra elevada ante alumnos sentados en bancos","width":1200,"height":969,"role":"portada","caption":"Clase en la Universidad de Bolonia, miniatura de Laurentius de Voltolina, siglo XIV.","author":"Laurentius de Voltolina","title":"Liber ethicorum des Henricus de Alemannia , single sheet. Scena: Henricus de Alemannia con i suoi studenti","year":"571","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Laurentius_de_Voltolina_001.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: prehistoria
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'prehistoria',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'mundo'),
  'Prehistoria y neolitización', 'Evolución humana, cazadores-recolectores, arte paleolítico y la adopción de la agricultura.', 'universidad',
  45, 'c. 3,3 M–3500 a. C.', '⋔', 'terracotta', '{"src":"/img/prehistoria/portada.jpg","alt":"Pintura rupestre de Lascaux con caballos y bóvidos trazados en ocre y negro sobre la roca","width":1200,"height":787,"role":"portada","caption":"Las pinturas de Lascaux, en la Dordoña, tienen unos 17.000 años.","author":"EU","title":"Lascaux painting","year":"2006","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Lascaux_painting.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: reforma
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'reforma',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'Reforma, Contrarreforma y guerras de religión', 'De una disputa universitaria sobre indulgencias a la partición confesional del continente.', 'universidad',
  55, '1517–1648', '☩', 'red', '{"src":"/img/reforma/portada.jpg","alt":"Retrato de medio cuerpo de Martín Lutero con hábito oscuro sobre fondo azul","width":1200,"height":1286,"role":"portada","caption":"Martín Lutero retratado por Lucas Cranach el Viejo en 1529.","author":"Lucas Cranach the Elder","title":"Martin Luther","year":"1529","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Martin_Luther%2C_1529.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: renacimiento
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'renacimiento',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'Renacimiento y Humanismo', 'Un método filológico, un mercado del arte y un concepto historiográfico en disputa.', 'universidad',
  55, 'c. 1350–1600', '✦', 'plum', '{"src":"/img/renacimiento/portada.jpg","alt":"Venus emerge del mar de pie sobre una concha, con vientos a su izquierda y una figura que le ofrece un manto a su derecha","width":1200,"height":754,"role":"portada","caption":"El nacimiento de Venus, de Sandro Botticelli (hacia 1485).","author":"Sandro Botticelli","title":"Narodziny Wenus The Birth of Venus","year":"1485","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: revolucion-cientifica
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'revolucion-cientifica',
  (select id from public.eras where slug = 'edad-moderna'),
  (select id from public.countries where slug = 'europa'),
  'La revolución científica', 'De la caída del cosmos aristotélico a los Principia: cómo cambió lo que Europa consideraba un conocimiento fiable.', 'universidad',
  55, '1543–1687', '☉', 'green', '{"src":"/img/revolucion-cientifica/portada.jpg","alt":"Retrato de Galileo Galilei anciano, de tres cuartos, con barba blanca y gola oscura","width":1200,"height":1524,"role":"portada","caption":"Galileo retratado por Justus Sustermans en 1636, ya condenado y bajo arresto domiciliario.","author":"Justus Sustermans","title":"Portrait of Galileo Galilei","year":"1636","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: revolucion-francesa
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'revolucion-francesa',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'francia'),
  'Revolución francesa y era napoleónica', 'De una quiebra fiscal a la invención de la política moderna, el Terror y un imperio que exportó el código civil a cañonazos.', 'universidad',
  60, '1789–1815', '⚑', 'red', '{"src":"/img/revolucion-francesa/portada.jpg","alt":"Pintura del asalto a la Bastilla, con humo de artillería y multitud armada frente a las torres de la fortaleza","width":1200,"height":912,"role":"portada","caption":"La toma de la Bastilla, 14 de julio de 1789, por Jean-Pierre Houël.","author":"Jean-Pierre Houël","title":"Prise de la Bastille","year":"1789","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Prise_de_la_Bastille.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: revolucion-rusa
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'revolucion-rusa',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'rusia'),
  'Revolución rusa y URSS', 'Del hundimiento del zarismo al Estado estalinista: cómo un partido minoritario tomó el poder y qué construyó con él.', 'universidad',
  55, '1905–1953', '☭', 'red', '{"src":"/img/revolucion-rusa/portada.jpg","alt":"Multitud dispersándose en desbandada por una avenida amplia mientras suenan los disparos, con cuerpos y objetos en el suelo","width":1200,"height":780,"role":"portada","caption":"Dispersión a tiros de una manifestación en la avenida Nevski de Petrogrado, julio de 1917.","author":"Viktor Bulla","title":"19170704 Riot on Nevsky prosp Petrograd","year":"1917","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:19170704_Riot_on_Nevsky_prosp_Petrograd.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: revoluciones-liberales
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'revoluciones-liberales',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'europa'),
  'Liberalismo, nacionalismo y unificaciones', 'De la Restauración a los Estados nacionales: constituciones, oleadas revolucionarias y unificaciones.', 'universidad',
  55, '1815–1871', '✺', 'red', '{"src":"/img/revoluciones-liberales/portada.jpg","alt":"La Libertad personificada avanza con la bandera tricolor y un fusil sobre una barricada cubierta de cadáveres","width":1200,"height":950,"role":"portada","caption":"La Libertad guiando al pueblo, de Eugène Delacroix (1830), sobre las jornadas de julio de ese año.","author":"Eugène Delacroix","title":"Liberty Leading the People","year":"1830","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: roma-imperio
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'roma-imperio',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'italia'),
  'El Imperio romano y su transformación', 'Principado, romanización, crisis del siglo III, cristianización y el debate sobre la caída.', 'universidad',
  50, '27 a. C.–476 d. C.', '⚵', 'gold', '{"src":"/img/roma-imperio/portada.jpg","alt":"El Coliseo de Roma visto desde el exterior, con sus arcadas superpuestas y la fachada parcialmente derruida","width":1200,"height":704,"role":"portada","caption":"El anfiteatro Flavio, inaugurado en el año 80.","author":"Diliff","title":"Colosseum in Rome, Italy - April 2007","year":"2007","source":"Wikimedia Commons","license":"CC BY-SA 2.5","url":"https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome%2C_Italy_-_April_2007.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: roma-republica
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'roma-republica',
  (select id from public.eras where slug = 'antiguedad'),
  (select id from public.countries where slug = 'italia'),
  'Roma: la República', 'Instituciones republicanas, conflicto patricio-plebeyo, expansión mediterránea y crisis final.', 'universidad',
  50, '509–27 a. C.', 'SPQR', 'terracotta', '{"src":"/img/roma-republica/portada.jpg","alt":"Pintura del siglo XIX con Cicerón de pie ante el Senado romano mientras Catilina aparece aislado en un banco","width":1200,"height":748,"role":"portada","caption":"Cicerón denuncia a Catilina, según Cesare Maccari (1888). Es una reconstrucción del XIX, no un documento antiguo.","author":"Cesare Maccari","title":"Cicerone denuncia Catilina Cicero Denounces Catiline","year":"1889","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Maccari-Cicero.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Tema: segunda-guerra
insert into public.topics (slug, era_id, country_id, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color, cover_image, published)
select 'segunda-guerra',
  (select id from public.eras where slug = 'edad-contemporanea'),
  (select id from public.countries where slug = 'mundo'),
  'Segunda Guerra Mundial y Holocausto', 'La guerra más letal de la historia y el genocidio que se cometió dentro de ella: dos procesos entrelazados que hay que estudiar juntos y distinguir con precisión.', 'universidad',
  60, '1939–1945', '✠', 'blue', '{"src":"/img/segunda-guerra/portada.jpg","alt":"Soldados desembarcando desde una lancha con la rampa abierta y avanzando con el agua por la cintura hacia la playa","width":1200,"height":966,"role":"portada","caption":"Desembarco en la playa de Omaha, 6 de junio de 1944, fotografiado por Robert F. Sargent.","author":"Chief Photographer''s Mate (CPHoM) Robert F. Sargent","title":"Second World War: Europe; \" Into the Jaws of Death — U.S. Troops wading through water and Nazi gunfire”, circa 1944-06-0","year":"1944","source":"Wikimedia Commons","license":"Public domain","url":"https://commons.wikimedia.org/wiki/File:Into_the_Jaws_of_Death_23-0455M_edit.jpg"}'::jsonb, true
on conflict (slug) do update set
  era_id = excluded.era_id, country_id = excluded.country_id, title = excluded.title,
  summary = excluded.summary, education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes, period_label = excluded.period_label,
  glyph = excluded.glyph, accent_color = excluded.accent_color,
  cover_image = excluded.cover_image, published = excluded.published;

-- Temas retirados. Los insert de arriba solo actualizan: un tema renombrado o
-- eliminado del repositorio seguiría publicado. Se despublica en lugar de
-- borrarlo para no perder el progreso de quien ya lo hubiera leído.
update public.topics set published = false where slug not in ('absolutismo', 'africa', 'america-precolombina', 'andalus', 'bizancio', 'china-imperial', 'crisis-siglo-xiv', 'descubrimientos', 'egipto', 'entreguerras', 'espana-siglo-xx', 'feudalismo', 'gran-guerra', 'grecia', 'guerra-fria', 'helenismo', 'ilustracion', 'imperialismo', 'india', 'industrializacion', 'islam', 'japon', 'mesopotamia', 'mundo-actual', 'plena-edad-media', 'prehistoria', 'reforma', 'renacimiento', 'revolucion-cientifica', 'revolucion-francesa', 'revolucion-rusa', 'revoluciones-liberales', 'roma-imperio', 'roma-republica', 'segunda-guerra');

commit;
