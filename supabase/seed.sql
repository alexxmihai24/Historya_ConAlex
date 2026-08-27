-- Historia Con Alex · datos de contenido reales y publicables
-- Ejecutar en el SQL Editor DESPUÉS de 20260826_initial_schema.sql y
-- 20260827_content_metadata_and_answer_check.sql.
--
-- Idempotente: se puede ejecutar varias veces sin duplicar filas.
-- - eras / countries / topics tienen slug único → "on conflict (slug) do update".
-- - lessons tiene unique (topic_id, position) → "on conflict (...) do update".
-- - questions no tiene una clave natural única en el esquema inicial, así que
--   se borran y se vuelven a insertar por tema (question_options cae en
--   cascada por su FK). Resultado final idéntico en cada ejecución.
-- Ningún id se escribe a mano: todo se resuelve por slug con CTEs/subconsultas.

begin;

-- 1. Eras --------------------------------------------------------------------
insert into public.eras (slug, title, sort_order, start_year, end_year, published)
values
  ('antiguedad', 'Antigüedad', 0, -3500, 476, true),
  ('edad-media', 'Edad Media', 1, 476, 1453, true),
  ('edad-moderna', 'Edad Moderna', 2, 1453, 1789, true),
  ('edad-contemporanea', 'Edad Contemporánea', 3, 1789, null, true)
on conflict (slug) do update set
  title = excluded.title,
  sort_order = excluded.sort_order,
  start_year = excluded.start_year,
  end_year = excluded.end_year,
  published = excluded.published;

-- 2. Países --------------------------------------------------------------------
insert into public.countries (slug, title, published)
values
  ('egipto', 'Egipto', true),
  ('grecia', 'Grecia', true),
  ('italia', 'Italia', true),
  ('peninsula-iberica', 'Península ibérica', true),
  ('europa', 'Europa', true),
  ('europa-y-america', 'Europa y América', true)
on conflict (slug) do update set
  title = excluded.title,
  published = excluded.published;

-- 3. Temas --------------------------------------------------------------------
insert into public.topics (
  era_id, country_id, slug, title, summary, education_level,
  estimated_minutes, period_label, glyph, accent_color, published
)
select era.id, country.id, t.slug, t.title, t.summary, t.education_level::public.education_level,
  t.estimated_minutes, t.period_label, t.glyph, t.accent_color, true
from (values
  ('egipto', 'antiguedad', 'egipto', 'El Egipto de los faraones',
   'Durante más de tres milenios, las comunidades del valle del Nilo formaron uno de los estados más duraderos del mundo antiguo. Entender su geografía es entender la base de su sociedad.',
   'eso', 25, 'c. 3100–30 a. C.', '☥', 'gold'),
  ('grecia', 'antiguedad', 'grecia', 'La Grecia clásica',
   'La antigua Grecia no fue un estado unificado: estuvo formada por numerosas polis que compartían lengua, dioses y costumbres, pero competían entre sí.',
   'bachillerato', 35, 's. V–IV a. C.', '⌂', 'blue'),
  ('italia', 'antiguedad', 'roma', 'Roma: República e Imperio',
   'Roma transformó una ciudad del Lacio en un poder mediterráneo. Su expansión llevó consigo leyes, caminos, ciudades y también grandes desigualdades y conflictos.',
   'eso', 45, '509 a. C.–476 d. C.', 'SPQR', 'terracotta'),
  ('peninsula-iberica', 'edad-media', 'andalus', 'Al-Ándalus y los reinos cristianos',
   'La península ibérica medieval fue un espacio diverso. Al-Ándalus y los distintos reinos cristianos estuvieron conectados por la guerra, la diplomacia, el comercio y la cultura.',
   'eso', 40, '711–1492', '⌁', 'green'),
  ('europa', 'edad-moderna', 'renacimiento', 'Renacimiento y Humanismo',
   'El Renacimiento fue un movimiento cultural con centros diversos. La recuperación crítica de la Antigüedad convivió con profundas transformaciones políticas, religiosas y económicas.',
   'bachillerato', 30, 's. XV–XVI', '✦', 'plum'),
  ('europa-y-america', 'edad-contemporanea', 'revoluciones', 'Revoluciones e industrialización',
   'Entre finales del siglo XVIII y comienzos del XX, revoluciones políticas e industriales alteraron la manera de trabajar, gobernar y habitar las ciudades.',
   'bachillerato', 50, '1776–1914', '✺', 'red')
) as t(country_slug, era_slug, slug, title, summary, education_level, estimated_minutes, period_label, glyph, accent_color)
join public.eras era on era.slug = t.era_slug
join public.countries country on country.slug = t.country_slug
on conflict (slug) do update set
  era_id = excluded.era_id,
  country_id = excluded.country_id,
  title = excluded.title,
  summary = excluded.summary,
  education_level = excluded.education_level,
  estimated_minutes = excluded.estimated_minutes,
  period_label = excluded.period_label,
  glyph = excluded.glyph,
  accent_color = excluded.accent_color,
  published = excluded.published;

-- 4. Lecciones -----------------------------------------------------------------
insert into public.lessons (topic_id, title, body, position, published)
select topic.id, l.title, l.body::jsonb, 0, true
from (values

  ('egipto', 'El Egipto de los faraones', $$[
    {"type":"section","title":"El regalo del Nilo","text":"El Nilo atravesaba un territorio mayoritariamente desértico. Sus crecidas anuales depositaban limo fértil en las orillas y permitían una agricultura regular. El río servía además como vía de comunicación entre el norte y el sur.","callout":null},
    {"type":"section","title":"Un poder sagrado","text":"El faraón no era solo un gobernante: se le vinculaba con el orden divino y tenía la responsabilidad de conservar la maat, la armonía del universo. Funcionarios, sacerdotes y escribas ayudaban a administrar los recursos del reino.","callout":"Maat expresaba la idea egipcia de equilibrio, justicia y orden."},
    {"type":"section","title":"La vida después de la muerte","text":"La religión egipcia concedía gran importancia a la continuidad tras la muerte. Las tumbas, los rituales y la momificación buscaban preservar el cuerpo y acompañar al difunto en su viaje al más allá.","callout":null},
    {"type":"timeline","items":[
      {"date":"c. 3100 a. C.","event":"Unificación del Alto y Bajo Egipto."},
      {"date":"c. 2686 a. C.","event":"Comienzo del Imperio Antiguo."},
      {"date":"c. 1332 a. C.","event":"Tutankamón asciende al trono."},
      {"date":"30 a. C.","event":"Egipto pasa a ser provincia romana."}
    ]}
  ]$$),

  ('grecia', 'La Grecia clásica', $$[
    {"type":"section","title":"La polis","text":"Una polis era una comunidad de ciudadanos con instituciones, leyes y territorio propio. Atenas, Esparta, Tebas o Corinto desarrollaron modelos sociales y políticos diferentes.","callout":null},
    {"type":"section","title":"La experiencia ateniense","text":"En Atenas algunos ciudadanos varones participaban directamente en la Asamblea. Este sistema no incluía a mujeres, esclavos ni extranjeros residentes, pero dejó una referencia decisiva para la historia política.","callout":null},
    {"type":"section","title":"Un legado plural","text":"La filosofía, el teatro, la arquitectura y la historiografía griegas continúan influyendo en el vocabulario cultural y político de Europa y del Mediterráneo.","callout":null},
    {"type":"timeline","items":[
      {"date":"490 a. C.","event":"Batalla de Maratón."},
      {"date":"480 a. C.","event":"Batallas de las Termópilas y Salamina."},
      {"date":"447 a. C.","event":"Inicio del Partenón."},
      {"date":"338 a. C.","event":"Macedonia vence en Queronea."}
    ]}
  ]$$),

  ('roma', 'Roma: República e Imperio', $$[
    {"type":"section","title":"La República","text":"El Senado, las magistraturas y las asambleas organizaban la vida política romana. El sistema distribuía el poder, aunque la riqueza y el origen familiar marcaban fuertemente la participación.","callout":null},
    {"type":"section","title":"Un mar romano","text":"Las conquistas permitieron a Roma dominar amplios territorios. El Mediterráneo se convirtió en una red de circulación de personas, productos, lenguas e ideas.","callout":null},
    {"type":"section","title":"Del principado al Imperio","text":"Tras décadas de guerras civiles, Augusto inauguró un nuevo orden político. Se mantuvieron instituciones republicanas, pero el emperador concentró una autoridad extraordinaria.","callout":null},
    {"type":"timeline","items":[
      {"date":"509 a. C.","event":"Inicio tradicional de la República."},
      {"date":"264–146 a. C.","event":"Guerras púnicas contra Cartago."},
      {"date":"27 a. C.","event":"Octavio recibe el título de Augusto."},
      {"date":"476 d. C.","event":"Fin convencional del Imperio romano de Occidente."}
    ]}
  ]$$),

  ('andalus', 'Al-Ándalus y los reinos cristianos', $$[
    {"type":"section","title":"Un territorio de contactos","text":"Al-Ándalus se integró en redes políticas y comerciales del Mediterráneo islámico. Sus ciudades desarrollaron agricultura irrigada, artesanía, pensamiento y ciencia.","callout":null},
    {"type":"section","title":"Reinos y fronteras cambiantes","text":"Los reinos cristianos del norte se expandieron de forma desigual. Las fronteras no fueron líneas fijas: hubo pactos, tributos, migraciones y zonas de convivencia compleja.","callout":null},
    {"type":"section","title":"Una herencia compartida","text":"Palabras, técnicas agrícolas, edificios, textos y formas artísticas muestran la profundidad de los intercambios entre las comunidades peninsulares.","callout":null},
    {"type":"timeline","items":[
      {"date":"711","event":"Inicio de la conquista islámica de la península."},
      {"date":"929","event":"Abd al-Rahman III proclama el califato de Córdoba."},
      {"date":"1212","event":"Batalla de Las Navas de Tolosa."},
      {"date":"1492","event":"Conquista de Granada."}
    ]}
  ]$$),

  ('renacimiento', 'Renacimiento y Humanismo', $$[
    {"type":"section","title":"Mirar de nuevo los clásicos","text":"Los humanistas estudiaron las lenguas y textos de Grecia y Roma. Buscaban leerlos en sus versiones más fiables y aplicaban esas herramientas a la educación y la vida cívica.","callout":null},
    {"type":"section","title":"Arte, ciencia y patronazgo","text":"Las ciudades italianas financiaron artistas y arquitectos. La perspectiva, el estudio de la anatomía y la observación de la naturaleza ampliaron el lenguaje visual de la época.","callout":null},
    {"type":"section","title":"Europa y el mundo","text":"El periodo coincidió con rutas oceánicas, expansión colonial y contactos violentos entre continentes. Es importante estudiarlo junto a sus consecuencias sociales y culturales.","callout":null},
    {"type":"timeline","items":[
      {"date":"1450","event":"La imprenta de tipos móviles se extiende por Europa."},
      {"date":"1492","event":"Viaje de Colón al continente americano."},
      {"date":"1517","event":"Lutero publica sus 95 tesis."},
      {"date":"1543","event":"Copérnico publica su propuesta heliocéntrica."}
    ]}
  ]$$),

  ('revoluciones', 'Revoluciones e industrialización', $$[
    {"type":"section","title":"Revoluciones políticas","text":"Las revoluciones cuestionaron el absolutismo y difundieron ideas de ciudadanía, derechos, nación y soberanía popular. Su aplicación fue desigual y estuvo llena de conflictos.","callout":null},
    {"type":"section","title":"La fábrica y la ciudad","text":"La industrialización concentró trabajo y población en ciudades crecientes. Aumentó la producción, pero también generó condiciones laborales duras, desigualdad y contaminación.","callout":null},
    {"type":"section","title":"Nuevos movimientos sociales","text":"Obreros, mujeres, grupos nacionalistas y reformistas organizaron campañas por derechos y representación. Estos movimientos cambiaron de forma duradera el debate público.","callout":null},
    {"type":"timeline","items":[
      {"date":"1776","event":"Declaración de Independencia de Estados Unidos."},
      {"date":"1789","event":"Inicio de la Revolución francesa."},
      {"date":"1830–1848","event":"Oleadas revolucionarias en Europa."},
      {"date":"1914","event":"Comienzo de la Primera Guerra Mundial."}
    ]}
  ]$$)

) as l(topic_slug, title, body)
join public.topics topic on topic.slug = l.topic_slug
on conflict (topic_id, position) do update set
  title = excluded.title,
  body = excluded.body,
  published = excluded.published;

-- 5. Preguntas y opciones -------------------------------------------------------
-- Sin clave natural única: se borran las preguntas de estos 6 temas (las
-- opciones caen en cascada) y se insertan de nuevo. Repetible sin duplicar.
delete from public.questions
where topic_id in (
  select id from public.topics
  where slug in ('egipto', 'grecia', 'roma', 'andalus', 'renacimiento', 'revoluciones')
);

with q as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select topic.id, d.prompt, d.explanation, d.difficulty, true
  from (values
    -- Egipto (ESO, dificultad 1-2) --------------------------------------------
    ('egipto', 1, '¿Qué río fue esencial para el desarrollo del antiguo Egipto?',
     'Las crecidas del Nilo fertilizaban los campos y sostenían la vida del reino egipcio.', 1),
    ('egipto', 2, '¿Qué idea expresaba la maat en el antiguo Egipto?',
     'La maat vinculaba justicia, equilibrio y orden, y el faraón debía preservarla.', 1),
    ('egipto', 3, '¿Qué escritura utilizaban los antiguos egipcios en templos y monumentos?',
     'La escritura jeroglífica combinaba signos fonéticos e ideográficos y se usó sobre todo en contextos religiosos y monumentales.', 1),
    ('egipto', 4, '¿Cómo se llama la gran construcción funeraria asociada a los faraones del Imperio Antiguo?',
     'Las pirámides, como las de Guiza, eran monumentos funerarios construidos para los faraones del Imperio Antiguo.', 1),
    ('egipto', 5, '¿Qué práctica funeraria egipcia buscaba conservar el cuerpo del difunto?',
     'La momificación buscaba preservar el cuerpo para la vida después de la muerte, un elemento central de la religión egipcia.', 2),
    -- Grecia (Bachillerato, dificultad 2-3) ------------------------------------
    ('grecia', 1, '¿Cómo se llamaba la ciudad-estado independiente de la antigua Grecia?',
     'La polis era una comunidad política autónoma, como Atenas, Esparta o Corinto.', 2),
    ('grecia', 2, '¿Qué órgano reunía a los ciudadanos atenienses para votar las leyes?',
     'La Asamblea, o Eclesía, reunía a los ciudadanos atenienses con derecho a voto para decidir sobre leyes y políticas.', 2),
    ('grecia', 3, '¿Qué conflicto enfrentó a varias polis griegas contra el Imperio persa a comienzos del siglo V a. C.?',
     'Las guerras médicas enfrentaron a varias polis griegas, lideradas por Atenas y Esparta, contra el Imperio persa.', 2),
    ('grecia', 4, '¿Qué guerra enfrentó a Atenas y Esparta por la hegemonía en el mundo griego?',
     'La guerra del Peloponeso (431-404 a. C.) enfrentó a Atenas y sus aliados contra Esparta y terminó con la derrota ateniense.', 3),
    ('grecia', 5, '¿Qué templo de la Acrópolis de Atenas estaba dedicado a la diosa Atenea?',
     'El Partenón, construido en el siglo V a. C., era el templo principal dedicado a la diosa Atenea en la Acrópolis de Atenas.', 2),
    -- Roma (ESO, dificultad 1-2) ------------------------------------------------
    ('roma', 1, '¿Qué institución tuvo un papel central en la República romana?',
     'El Senado fue un órgano decisivo de la República, aunque las magistraturas y las asambleas también eran importantes.', 1),
    ('roma', 2, '¿Qué guerras enfrentaron a Roma con Cartago?',
     'Las tres guerras púnicas, entre los siglos III y II a. C., enfrentaron a Roma con Cartago por el control del Mediterráneo occidental.', 2),
    ('roma', 3, '¿Quién fue el primer emperador romano, tras recibir el título de Augusto?',
     'Octavio recibió el título de Augusto en el año 27 a. C. y se considera el primer emperador romano.', 2),
    ('roma', 4, '¿Qué construcción romana permitía transportar agua a las ciudades desde fuentes distantes?',
     'Los acueductos romanos empleaban la gravedad para conducir agua desde manantiales o ríos hasta las ciudades.', 1),
    ('roma', 5, '¿En qué año se sitúa convencionalmente el fin del Imperio romano de Occidente?',
     'En el año 476, la deposición del último emperador de Occidente, Rómulo Augústulo, marca el fin convencional del Imperio romano de Occidente.', 2),
    -- Al-Ándalus (ESO, dificultad 1-2) --------------------------------------------
    ('andalus', 1, '¿En qué año cayó el reino nazarí de Granada?',
     'En 1492 los Reyes Católicos incorporaron Granada, último reino andalusí, a la Corona de Castilla.', 1),
    ('andalus', 2, '¿En qué año comenzó la conquista musulmana de la península ibérica?',
     'En el año 711 un ejército musulmán cruzó el estrecho de Gibraltar e inició la conquista de la península ibérica.', 1),
    ('andalus', 3, '¿Qué título adoptó Abd al-Rahman III en el año 929?',
     'En 929 Abd al-Rahman III proclamó el califato de Córdoba, alcanzando así la máxima autonomía política y religiosa frente a Bagdad.', 2),
    ('andalus', 4, '¿Qué batalla de 1212 debilitó gravemente el poder almohade en la península?',
     'La batalla de las Navas de Tolosa, en 1212, debilitó gravemente el poder almohade y favoreció el avance cristiano posterior.', 2),
    ('andalus', 5, '¿Cómo denominan tradicionalmente los historiadores al proceso de expansión de los reinos cristianos sobre Al-Ándalus?',
     'Los historiadores llaman tradicionalmente Reconquista al proceso de expansión territorial de los reinos cristianos peninsulares entre los siglos VIII y XV.', 1),
    -- Renacimiento (Bachillerato, dificultad 2-3) --------------------------------
    ('renacimiento', 1, 'El Humanismo renacentista colocaba en el centro de su reflexión a…',
     'El Humanismo recuperó críticamente los clásicos y revalorizó las capacidades humanas.', 2),
    ('renacimiento', 2, '¿Qué invento, extendido en Europa desde mediados del siglo XV, facilitó la difusión de las ideas humanistas?',
     'La imprenta de tipos móviles, desarrollada por Gutenberg hacia 1450, abarató y aceleró la producción y difusión de libros en Europa.', 2),
    ('renacimiento', 3, '¿Qué propuesta astronómica defendió Nicolás Copérnico en el siglo XVI?',
     'Copérnico propuso en 1543 un modelo heliocéntrico, según el cual la Tierra y los demás planetas giran alrededor del Sol.', 2),
    ('renacimiento', 4, '¿En qué ciudades italianas se desarrolló con especial intensidad el arte y el pensamiento renacentistas?',
     'Florencia y Roma, junto a otras ciudades italianas, concentraron un intenso mecenazgo artístico que impulsó el arte renacentista.', 3),
    ('renacimiento', 5, '¿Qué técnica pictórica desarrollada en el Renacimiento permitía representar la profundidad en una superficie plana?',
     'La perspectiva lineal, sistematizada por artistas renacentistas, permitió representar el espacio y la profundidad de manera más realista.', 2),
    -- Revoluciones (Bachillerato, dificultad 2-3) --------------------------------
    ('revoluciones', 1, '¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?',
     'La toma de la Bastilla, el 14 de julio de 1789, se convirtió en uno de los símbolos de la Revolución.', 2),
    ('revoluciones', 2, '¿En qué año se firmó la Declaración de Independencia de Estados Unidos?',
     'La Declaración de Independencia de Estados Unidos se aprobó el 4 de julio de 1776.', 2),
    ('revoluciones', 3, '¿Qué invento se asocia especialmente con el impulso de la industrialización británica del siglo XVIII?',
     'La máquina de vapor, perfeccionada por James Watt, impulsó la mecanización de fábricas y transportes durante la primera industrialización.', 2),
    ('revoluciones', 4, '¿Qué nueva clase social creció con fuerza a raíz de la industrialización?',
     'La industrialización generó una numerosa clase de trabajadores asalariados en las fábricas, conocida como proletariado.', 2),
    ('revoluciones', 5, '¿En qué año estalló la Primera Guerra Mundial?',
     'La Primera Guerra Mundial comenzó en 1914 tras el asesinato del archiduque Francisco Fernando de Austria.', 3)
  ) as d(topic_slug, seq, prompt, explanation, difficulty)
  join public.topics topic on topic.slug = d.topic_slug
  returning id, topic_id, prompt
)
insert into public.question_options (question_id, label, position, is_correct)
select q.id, o.label, o.position, o.is_correct
from q
join (values
  -- Egipto ---------------------------------------------------------------------
  ('¿Qué río fue esencial para el desarrollo del antiguo Egipto?', 'Éufrates', 0, false),
  ('¿Qué río fue esencial para el desarrollo del antiguo Egipto?', 'Nilo', 1, true),
  ('¿Qué río fue esencial para el desarrollo del antiguo Egipto?', 'Tíber', 2, false),
  ('¿Qué río fue esencial para el desarrollo del antiguo Egipto?', 'Danubio', 3, false),

  ('¿Qué idea expresaba la maat en el antiguo Egipto?', 'El comercio marítimo', 0, false),
  ('¿Qué idea expresaba la maat en el antiguo Egipto?', 'El equilibrio y el orden', 1, true),
  ('¿Qué idea expresaba la maat en el antiguo Egipto?', 'El reclutamiento militar', 2, false),
  ('¿Qué idea expresaba la maat en el antiguo Egipto?', 'Una forma de escritura', 3, false),

  ('¿Qué escritura utilizaban los antiguos egipcios en templos y monumentos?', 'Cuneiforme', 0, false),
  ('¿Qué escritura utilizaban los antiguos egipcios en templos y monumentos?', 'Jeroglífica', 1, true),
  ('¿Qué escritura utilizaban los antiguos egipcios en templos y monumentos?', 'Alfabeto fenicio', 2, false),
  ('¿Qué escritura utilizaban los antiguos egipcios en templos y monumentos?', 'Runas', 3, false),

  ('¿Cómo se llama la gran construcción funeraria asociada a los faraones del Imperio Antiguo?', 'El zigurat', 0, false),
  ('¿Cómo se llama la gran construcción funeraria asociada a los faraones del Imperio Antiguo?', 'La pirámide', 1, true),
  ('¿Cómo se llama la gran construcción funeraria asociada a los faraones del Imperio Antiguo?', 'El anfiteatro', 2, false),
  ('¿Cómo se llama la gran construcción funeraria asociada a los faraones del Imperio Antiguo?', 'La estupa', 3, false),

  ('¿Qué práctica funeraria egipcia buscaba conservar el cuerpo del difunto?', 'La cremación', 0, false),
  ('¿Qué práctica funeraria egipcia buscaba conservar el cuerpo del difunto?', 'La momificación', 1, true),
  ('¿Qué práctica funeraria egipcia buscaba conservar el cuerpo del difunto?', 'El enterramiento en túmulos', 2, false),
  ('¿Qué práctica funeraria egipcia buscaba conservar el cuerpo del difunto?', 'La incineración colectiva', 3, false),

  -- Grecia -----------------------------------------------------------------------
  ('¿Cómo se llamaba la ciudad-estado independiente de la antigua Grecia?', 'Satrapía', 0, false),
  ('¿Cómo se llamaba la ciudad-estado independiente de la antigua Grecia?', 'Polis', 1, true),
  ('¿Cómo se llamaba la ciudad-estado independiente de la antigua Grecia?', 'Feudo', 2, false),
  ('¿Cómo se llamaba la ciudad-estado independiente de la antigua Grecia?', 'Provincia', 3, false),

  ('¿Qué órgano reunía a los ciudadanos atenienses para votar las leyes?', 'El Areópago', 0, false),
  ('¿Qué órgano reunía a los ciudadanos atenienses para votar las leyes?', 'La Asamblea (Eclesía)', 1, true),
  ('¿Qué órgano reunía a los ciudadanos atenienses para votar las leyes?', 'El Senado', 2, false),
  ('¿Qué órgano reunía a los ciudadanos atenienses para votar las leyes?', 'La Curia', 3, false),

  ('¿Qué conflicto enfrentó a varias polis griegas contra el Imperio persa a comienzos del siglo V a. C.?', 'Las guerras médicas', 0, true),
  ('¿Qué conflicto enfrentó a varias polis griegas contra el Imperio persa a comienzos del siglo V a. C.?', 'Las guerras púnicas', 1, false),
  ('¿Qué conflicto enfrentó a varias polis griegas contra el Imperio persa a comienzos del siglo V a. C.?', 'La guerra del Peloponeso', 2, false),
  ('¿Qué conflicto enfrentó a varias polis griegas contra el Imperio persa a comienzos del siglo V a. C.?', 'Las guerras itálicas', 3, false),

  ('¿Qué guerra enfrentó a Atenas y Esparta por la hegemonía en el mundo griego?', 'La guerra del Peloponeso', 0, true),
  ('¿Qué guerra enfrentó a Atenas y Esparta por la hegemonía en el mundo griego?', 'Las guerras médicas', 1, false),
  ('¿Qué guerra enfrentó a Atenas y Esparta por la hegemonía en el mundo griego?', 'La guerra de Troya', 2, false),
  ('¿Qué guerra enfrentó a Atenas y Esparta por la hegemonía en el mundo griego?', 'Las guerras samnitas', 3, false),

  ('¿Qué templo de la Acrópolis de Atenas estaba dedicado a la diosa Atenea?', 'El Partenón', 0, true),
  ('¿Qué templo de la Acrópolis de Atenas estaba dedicado a la diosa Atenea?', 'El Coliseo', 1, false),
  ('¿Qué templo de la Acrópolis de Atenas estaba dedicado a la diosa Atenea?', 'El Panteón', 2, false),
  ('¿Qué templo de la Acrópolis de Atenas estaba dedicado a la diosa Atenea?', 'La Estoa', 3, false),

  -- Roma ---------------------------------------------------------------------------
  ('¿Qué institución tuvo un papel central en la República romana?', 'El Senado', 0, true),
  ('¿Qué institución tuvo un papel central en la República romana?', 'El parlamento medieval', 1, false),
  ('¿Qué institución tuvo un papel central en la República romana?', 'Los gremios', 2, false),
  ('¿Qué institución tuvo un papel central en la República romana?', 'La Asamblea nacional', 3, false),

  ('¿Qué guerras enfrentaron a Roma con Cartago?', 'Las guerras púnicas', 0, true),
  ('¿Qué guerras enfrentaron a Roma con Cartago?', 'Las guerras médicas', 1, false),
  ('¿Qué guerras enfrentaron a Roma con Cartago?', 'Las guerras samnitas', 2, false),
  ('¿Qué guerras enfrentaron a Roma con Cartago?', 'Las guerras civiles', 3, false),

  ('¿Quién fue el primer emperador romano, tras recibir el título de Augusto?', 'Julio César', 0, false),
  ('¿Quién fue el primer emperador romano, tras recibir el título de Augusto?', 'Octavio', 1, true),
  ('¿Quién fue el primer emperador romano, tras recibir el título de Augusto?', 'Trajano', 2, false),
  ('¿Quién fue el primer emperador romano, tras recibir el título de Augusto?', 'Nerón', 3, false),

  ('¿Qué construcción romana permitía transportar agua a las ciudades desde fuentes distantes?', 'El acueducto', 0, true),
  ('¿Qué construcción romana permitía transportar agua a las ciudades desde fuentes distantes?', 'El zigurat', 1, false),
  ('¿Qué construcción romana permitía transportar agua a las ciudades desde fuentes distantes?', 'La pirámide', 2, false),
  ('¿Qué construcción romana permitía transportar agua a las ciudades desde fuentes distantes?', 'El anfiteatro', 3, false),

  ('¿En qué año se sitúa convencionalmente el fin del Imperio romano de Occidente?', '27 a. C.', 0, false),
  ('¿En qué año se sitúa convencionalmente el fin del Imperio romano de Occidente?', '313 d. C.', 1, false),
  ('¿En qué año se sitúa convencionalmente el fin del Imperio romano de Occidente?', '476 d. C.', 2, true),
  ('¿En qué año se sitúa convencionalmente el fin del Imperio romano de Occidente?', '1453 d. C.', 3, false),

  -- Al-Ándalus -----------------------------------------------------------------------
  ('¿En qué año cayó el reino nazarí de Granada?', '711', 0, false),
  ('¿En qué año cayó el reino nazarí de Granada?', '1212', 1, false),
  ('¿En qué año cayó el reino nazarí de Granada?', '1492', 2, true),
  ('¿En qué año cayó el reino nazarí de Granada?', '1517', 3, false),

  ('¿En qué año comenzó la conquista musulmana de la península ibérica?', '622', 0, false),
  ('¿En qué año comenzó la conquista musulmana de la península ibérica?', '711', 1, true),
  ('¿En qué año comenzó la conquista musulmana de la península ibérica?', '1085', 2, false),
  ('¿En qué año comenzó la conquista musulmana de la península ibérica?', '1212', 3, false),

  ('¿Qué título adoptó Abd al-Rahman III en el año 929?', 'Rey de Castilla', 0, false),
  ('¿Qué título adoptó Abd al-Rahman III en el año 929?', 'Califa de Córdoba', 1, true),
  ('¿Qué título adoptó Abd al-Rahman III en el año 929?', 'Sultán de Granada', 2, false),
  ('¿Qué título adoptó Abd al-Rahman III en el año 929?', 'Emir de Damasco', 3, false),

  ('¿Qué batalla de 1212 debilitó gravemente el poder almohade en la península?', 'Las Navas de Tolosa', 0, true),
  ('¿Qué batalla de 1212 debilitó gravemente el poder almohade en la península?', 'Covadonga', 1, false),
  ('¿Qué batalla de 1212 debilitó gravemente el poder almohade en la península?', 'Guadalete', 2, false),
  ('¿Qué batalla de 1212 debilitó gravemente el poder almohade en la península?', 'Alarcos', 3, false),

  ('¿Cómo denominan tradicionalmente los historiadores al proceso de expansión de los reinos cristianos sobre Al-Ándalus?', 'La Reconquista', 0, true),
  ('¿Cómo denominan tradicionalmente los historiadores al proceso de expansión de los reinos cristianos sobre Al-Ándalus?', 'La Reforma', 1, false),
  ('¿Cómo denominan tradicionalmente los historiadores al proceso de expansión de los reinos cristianos sobre Al-Ándalus?', 'El Renacimiento', 2, false),
  ('¿Cómo denominan tradicionalmente los historiadores al proceso de expansión de los reinos cristianos sobre Al-Ándalus?', 'La Ilustración', 3, false),

  -- Renacimiento -----------------------------------------------------------------------
  ('El Humanismo renacentista colocaba en el centro de su reflexión a…', 'La vida urbana exclusivamente', 0, false),
  ('El Humanismo renacentista colocaba en el centro de su reflexión a…', 'El ser humano y los textos clásicos', 1, true),
  ('El Humanismo renacentista colocaba en el centro de su reflexión a…', 'La expansión colonial', 2, false),
  ('El Humanismo renacentista colocaba en el centro de su reflexión a…', 'Los gremios medievales', 3, false),

  ('¿Qué invento, extendido en Europa desde mediados del siglo XV, facilitó la difusión de las ideas humanistas?', 'La brújula', 0, false),
  ('¿Qué invento, extendido en Europa desde mediados del siglo XV, facilitó la difusión de las ideas humanistas?', 'La imprenta de tipos móviles', 1, true),
  ('¿Qué invento, extendido en Europa desde mediados del siglo XV, facilitó la difusión de las ideas humanistas?', 'El telescopio', 2, false),
  ('¿Qué invento, extendido en Europa desde mediados del siglo XV, facilitó la difusión de las ideas humanistas?', 'La pólvora', 3, false),

  ('¿Qué propuesta astronómica defendió Nicolás Copérnico en el siglo XVI?', 'El geocentrismo', 0, false),
  ('¿Qué propuesta astronómica defendió Nicolás Copérnico en el siglo XVI?', 'El heliocentrismo', 1, true),
  ('¿Qué propuesta astronómica defendió Nicolás Copérnico en el siglo XVI?', 'La teoría atómica', 2, false),
  ('¿Qué propuesta astronómica defendió Nicolás Copérnico en el siglo XVI?', 'La gravitación universal', 3, false),

  ('¿En qué ciudades italianas se desarrolló con especial intensidad el arte y el pensamiento renacentistas?', 'Florencia y Roma', 0, true),
  ('¿En qué ciudades italianas se desarrolló con especial intensidad el arte y el pensamiento renacentistas?', 'Berlín y Viena', 1, false),
  ('¿En qué ciudades italianas se desarrolló con especial intensidad el arte y el pensamiento renacentistas?', 'Londres y Ámsterdam', 2, false),
  ('¿En qué ciudades italianas se desarrolló con especial intensidad el arte y el pensamiento renacentistas?', 'Moscú y Kiev', 3, false),

  ('¿Qué técnica pictórica desarrollada en el Renacimiento permitía representar la profundidad en una superficie plana?', 'La perspectiva', 0, true),
  ('¿Qué técnica pictórica desarrollada en el Renacimiento permitía representar la profundidad en una superficie plana?', 'El fresco', 1, false),
  ('¿Qué técnica pictórica desarrollada en el Renacimiento permitía representar la profundidad en una superficie plana?', 'El mosaico', 2, false),
  ('¿Qué técnica pictórica desarrollada en el Renacimiento permitía representar la profundidad en una superficie plana?', 'La miniatura', 3, false),

  -- Revoluciones -----------------------------------------------------------------------
  ('¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?', 'La toma de la Bastilla', 0, true),
  ('¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?', 'El Congreso de Viena', 1, false),
  ('¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?', 'La batalla de Waterloo', 2, false),
  ('¿Qué hecho se toma convencionalmente como inicio de la Revolución francesa?', 'La Comuna de París', 3, false),

  ('¿En qué año se firmó la Declaración de Independencia de Estados Unidos?', '1776', 0, true),
  ('¿En qué año se firmó la Declaración de Independencia de Estados Unidos?', '1789', 1, false),
  ('¿En qué año se firmó la Declaración de Independencia de Estados Unidos?', '1804', 2, false),
  ('¿En qué año se firmó la Declaración de Independencia de Estados Unidos?', '1848', 3, false),

  ('¿Qué invento se asocia especialmente con el impulso de la industrialización británica del siglo XVIII?', 'La máquina de vapor', 0, true),
  ('¿Qué invento se asocia especialmente con el impulso de la industrialización británica del siglo XVIII?', 'El motor de combustión interna', 1, false),
  ('¿Qué invento se asocia especialmente con el impulso de la industrialización británica del siglo XVIII?', 'La electricidad', 2, false),
  ('¿Qué invento se asocia especialmente con el impulso de la industrialización británica del siglo XVIII?', 'El automóvil', 3, false),

  ('¿Qué nueva clase social creció con fuerza a raíz de la industrialización?', 'El clero regular', 0, false),
  ('¿Qué nueva clase social creció con fuerza a raíz de la industrialización?', 'El proletariado obrero', 1, true),
  ('¿Qué nueva clase social creció con fuerza a raíz de la industrialización?', 'La nobleza feudal', 2, false),
  ('¿Qué nueva clase social creció con fuerza a raíz de la industrialización?', 'Los artesanos gremiales medievales', 3, false),

  ('¿En qué año estalló la Primera Guerra Mundial?', '1898', 0, false),
  ('¿En qué año estalló la Primera Guerra Mundial?', '1905', 1, false),
  ('¿En qué año estalló la Primera Guerra Mundial?', '1914', 2, true),
  ('¿En qué año estalló la Primera Guerra Mundial?', '1919', 3, false)
) as o(prompt, label, position, is_correct)
  on o.prompt = q.prompt;

commit;
