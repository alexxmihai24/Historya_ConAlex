-- Historya con Alex · contenido publicable — parte 07 de 7 (preguntas)
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
  if not exists (select 1 from public.topics) then
    raise exception 'La tabla topics está vacía. Ejecuta antes la parte 01-catalogo.sql.';
  end if;
end $$;

-- Pregunta: islam-2
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

-- Pregunta: islam-3
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

-- Pregunta: islam-4
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

-- Pregunta: islam-5
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

-- Pregunta: islam-6
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

-- Pregunta: islam-7
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

-- Pregunta: islam-8
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

-- Pregunta: islam-9
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

-- Pregunta: islam-10
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

-- Pregunta: islam-11
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

-- Pregunta: islam-12
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

-- Pregunta: islam-13
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

-- Pregunta: islam-14
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

-- Pregunta: islam-15
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

-- Pregunta: islam-16
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

-- Pregunta: japon-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué dos elementos del modelo chino no importó Japón?', 'Sin mandato del Cielo no hay doctrina que autorice a sustituir a la dinastía: el emperador japonés reina por descendencia divina y ninguna otra casa lo ha reemplazado.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La escritura y el budismo', false, 0),
  ('Los exámenes como vía de acceso al cargo y el mandato del Cielo', true, 1),
  ('El catastro y los códigos legales', false, 2),
  ('La burocracia de rangos y el patrocinio religioso', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fueron los shōen y qué efecto tuvieron?', 'Sus propietarios necesitaban hombres armados para protegerlos y cobrar rentas, y de ahí salieron los grupos guerreros que acabaron gobernando.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Guarniciones militares provinciales que reforzaron el poder central', false, 0),
  ('Dominios privados exentos de impuestos que vaciaron de recursos al Estado de Heian', true, 1),
  ('Escuelas de formación de funcionarios', false, 2),
  ('Puertos abiertos al comercio con China', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué escribieron en kana las autoras de la corte de Heian?', 'De esa exclusión salieron el Genji monogatari y el Libro de la almohada, las obras mayores del período.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque el kana era la escritura oficial del Estado', false, 0),
  ('Porque estaban excluidas de la escritura china, reservada a los asuntos serios de los hombres', true, 1),
  ('Porque el chino no permitía expresar poesía', false, 2),
  ('Porque lo ordenó la familia Fujiwara', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué arruinó al shogunato de Kamakura la victoria sobre los mongoles?', 'El sistema se sostenía sobre la concesión de tierra a cambio de servicio, y una guerra defensiva no genera botín territorial.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque las fortificaciones costeras se destruyeron en los tifones', false, 0),
  ('Porque no hubo tierras conquistadas con las que recompensar a los vasallos movilizados', true, 1),
  ('Porque perdió el apoyo del emperador', false, 2),
  ('Porque los mongoles impusieron un tributo anual', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó al período sengoku?', 'Hubo roturaciones, minas, mercados, castillos y ciudades libres de comerciantes como Sakai.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un cierre completo del país al comercio exterior', false, 0),
  ('Fragmentación en dominios en guerra y, a la vez, crecimiento económico impulsado por los daimyō para financiar sus ejércitos', true, 1),
  ('La restauración del gobierno directo del emperador', false, 2),
  ('El dominio de los monasterios budistas sobre todo el territorio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué prohibieron los unificadores el cristianismo?', 'El cristianismo llegó a tener varios cientos de miles de fieles y el apoyo de daimyō del sur interesados también en el comercio.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por incompatibilidad doctrinal con el budismo zen', false, 0),
  ('Porque veían en él una lealtad exterior incompatible con el orden político que estaban construyendo', true, 1),
  ('Porque los misioneros se negaban a comerciar', false, 2),
  ('Porque lo exigieron los comerciantes neerlandeses', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo Hideyoshi con la requisa de armas de 1588?', 'Ordenó además un catastro nacional. Sus dos invasiones de Corea en la década de 1590 fueron un desastre y la última aventura exterior en siglos.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Desarmó a los daimyō rivales', false, 0),
  ('Separó jurídicamente a guerreros y campesinos, fijando la base del orden social Tokugawa', true, 1),
  ('Prohibió la fabricación de armas de fuego', false, 2),
  ('Creó un ejército nacional de reclutas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función tenía el sankin-kōtai?', 'Funcionaba como rehén institucionalizado y, de paso, creó una red de carreteras, posadas y consumo urbano que integró la economía nacional.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Recaudar el impuesto sobre la tierra en los dominios', false, 0),
  ('Obligar a los daimyō a residir en años alternos en Edo dejando allí a su familia, como control político', true, 1),
  ('Rotar a los gobernadores de las ciudades del shogunato', false, 2),
  ('Organizar el comercio con los neerlandeses', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con el orden estamental teórico durante el período Tokugawa?', 'En las ciudades floreció además una cultura urbana propia con kabuki, novela popular y estampa ukiyo-e.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se aplicó con rigidez completa durante dos siglos y medio', false, 0),
  ('Se apartó pronto de la práctica: samuráis convertidos en funcionarios endeudados y comerciantes de Osaka con gran riqueza', true, 1),
  ('Desapareció tras la rebelión de Shimabara', false, 2),
  ('Se sustituyó por un sistema de castas hereditarias cerradas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró Ronald Toby sobre la política de sakoku?', 'Neerlandeses en Deshima, chinos en Nagasaki, Corea vía Tsushima y los ainu y Ryukyu por otros dominios. La palabra sakoku ni siquiera se usaba entonces.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el aislamiento fue aún más estricto de lo que se creía', false, 0),
  ('Que hubo cuatro vías reguladas de contacto y que se trató de un monopolio estatal de las relaciones exteriores, no de su ausencia', true, 1),
  ('Que el comercio con Europa continuó sin restricciones', false, 2),
  ('Que la prohibición nunca llegó a aplicarse', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el rangaku y por qué importa?', 'Médicos japoneses tradujeron manuales de anatomía europeos y comprobaron su exactitud con disecciones.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una escuela de artes marciales para samuráis sin guerra', false, 0),
  ('Los estudios holandeses de medicina, astronomía y balística, que dejaron un grupo de japoneses informados sobre el mundo antes de 1853', true, 1),
  ('La doctrina neoconfuciana oficial del shogunato', false, 2),
  ('El sistema de escuelas de templo para la alfabetización popular', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo cambió la estrategia de Satsuma y Chōshū durante el bakumatsu?', 'El cambio se produjo tras comprobar en combate directo la superioridad naval occidental.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Pasaron de apoyar al shogunato a defenderlo militarmente', false, 0),
  ('Pasaron de querer expulsar a los extranjeros a adquirir su tecnología para poder resistirlos', true, 1),
  ('Renunciaron a la restauración imperial', false, 2),
  ('Se aliaron con Rusia contra Estados Unidos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es engañoso llamar restauración a lo ocurrido en 1868?', 'En una década se abolieron los dominios, se liquidaron los estipendios samuráis y se implantó el servicio militar obligatorio.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque el emperador no llegó a recuperar el trono', false, 0),
  ('Porque se presentó como retorno a un orden antiguo y fue una revolución dirigida desde arriba por samuráis que desmontaron su propia clase', true, 1),
  ('Porque el shogunato siguió gobernando hasta 1877', false, 2),
  ('Porque no cambió la estructura administrativa del país', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué modelo siguió la Constitución Meiji de 1889?', 'El Rescripto sobre la Educación de 1890 completó el marco con una ideología de lealtad enseñada en todas las escuelas.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El británico, con un gabinete responsable ante el Parlamento', false, 0),
  ('El prusiano: dieta electa con poderes limitados y emperador sagrado e inviolable', true, 1),
  ('El estadounidense, con separación estricta de poderes', false, 2),
  ('El francés de la Tercera República', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Thomas Smith, ¿qué base heredó el Japón Meiji del período Tokugawa?', 'Meiji no partió de cero: aceleró y reorientó tendencias que llevaban un siglo en marcha.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un ejército moderno ya organizado', false, 0),
  ('Agricultura comercial, alfabetización amplia, mercados internos y capacidad administrativa', true, 1),
  ('Una industria pesada en funcionamiento', false, 2),
  ('Un sistema bancario de crédito internacional', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: japon-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hay que tener en cuenta al usar el término bushidō?', 'Como categoría de análisis exige la misma cautela que llamar feudal a Japón: ambas importan marcos que ocultan lo específico del caso.', 3, true
  from public.topics where slug = 'japon'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que es un código escrito del siglo XII conservado íntegramente', false, 0),
  ('Que se codificó cuando los samuráis llevaban siglos sin combatir y se popularizó con un libro escrito en inglés en 1900', true, 1),
  ('Que fue una invención de los misioneros jesuitas', false, 2),
  ('Que solo se aplicaba a los daimyō y no a sus vasallos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mesopotamia-1
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

-- Pregunta: mesopotamia-2
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

-- Pregunta: mesopotamia-3
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

-- Pregunta: mesopotamia-4
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

-- Pregunta: mesopotamia-5
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

-- Pregunta: mesopotamia-6
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

-- Pregunta: mesopotamia-7
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

-- Pregunta: mesopotamia-8
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

-- Pregunta: mesopotamia-9
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

-- Pregunta: mesopotamia-10
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

-- Pregunta: mesopotamia-11
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

-- Pregunta: mesopotamia-12
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

-- Pregunta: mesopotamia-13
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

-- Pregunta: mesopotamia-14
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

-- Pregunta: mesopotamia-15
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

-- Pregunta: mundo-actual-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué afirmaba realmente la tesis del fin de la historia de Fukuyama?', 'La tesis se cita casi siempre en su versión caricaturizada. Huntington respondió en 1993 con el marco alternativo del choque de civilizaciones.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que dejarían de producirse acontecimientos relevantes', false, 0),
  ('Que no quedaban alternativas sistémicas con pretensión universal frente a la democracia liberal y el mercado', true, 1),
  ('Que las guerras futuras serían entre civilizaciones', false, 2),
  ('Que Estados Unidos gobernaría el mundo indefinidamente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué medidas componían el llamado Consenso de Washington?', 'Se aplicó como condición de préstamos internacionales con resultados muy desiguales: hundimiento en Rusia, crecimiento en países asiáticos que no lo siguieron.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Planificación central, control de precios y política industrial', false, 0),
  ('Disciplina fiscal, liberalización comercial y financiera, privatizaciones y desregulación', true, 1),
  ('Ayuda al desarrollo sin condiciones y condonación de deuda', false, 2),
  ('Proteccionismo selectivo y sustitución de importaciones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué apuesta institucional hizo el Tratado de Maastricht?', 'La crisis de la eurozona en 2010 mostró el coste de esa asimetría: Estados que no emitían en una moneda propia y sin prestamista de última instancia.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Unificar la política exterior antes que la economía', false, 0),
  ('Unificar la moneda sin unificar la política fiscal, confiando en que la integración monetaria arrastrase al resto', true, 1),
  ('Crear un ejército europeo común', false, 2),
  ('Establecer una constitución federal para Europa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué concluyó el informe Chilcot sobre la invasión de Irak?', 'La desintegración posterior de Irak y la disolución de su ejército generaron el caos del que salió la organización que proclamó un califato en 2014.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las armas de destrucción masiva existían pero fueron trasladadas', false, 0),
  ('Que la acción militar no fue el último recurso y que la inteligencia se presentó con una certeza injustificada', true, 1),
  ('Que la invasión contó con autorización expresa del Consejo de Seguridad', false, 2),
  ('Que la ocupación se planificó con detalle antes de la guerra', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el balance a medio plazo de las revueltas árabes de 2011?', 'Produjeron además la mayor crisis de refugiados desde 1945. El papel de las redes sociales fue instrumental y se exageró después.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Democratización generalizada en toda la región', false, 0),
  ('Consolidación frágil solo en Túnez, restauración autoritaria en Egipto y guerras prolongadas en Libia, Siria y Yemen', true, 1),
  ('Restauración de las monarquías derribadas', false, 2),
  ('Intervención militar de Naciones Unidas en todos los países afectados', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra Adam Tooze sobre la crisis de 2008?', 'La eurozona convirtió después una crisis bancaria en una crisis de deuda soberana por carecer de prestamista de última instancia hasta 2012.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue un problema exclusivamente estadounidense', false, 0),
  ('Que fue profundamente transatlántica: los bancos europeos sobrevivieron gracias a líneas de dólares de la Reserva Federal', true, 1),
  ('Que la causó el endeudamiento público de los países del sur de Europa', false, 2),
  ('Que se resolvió sin intervención pública', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué dimensión política tuvo el debate sobre la austeridad europea?', 'Al debate técnico sobre si el ajuste era necesario o excesivo se sumó otro sobre quién había decidido y con qué legitimidad.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: fue una discusión exclusivamente técnica', false, 0),
  ('Los programas los negociaban instituciones sin responsabilidad electoral ante las poblaciones afectadas', true, 1),
  ('Se aprobaron en referéndum en cada país afectado', false, 2),
  ('Los decidió el Parlamento Europeo por mayoría cualificada', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué apuesta occidental sobre China no se cumplió?', 'El sistema se consolidó como Estado de partido único con economía mixta, planificación a largo plazo y un aparato de vigilancia tecnológica sin precedentes.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que su economía crecería con rapidez', false, 0),
  ('Que la integración económica produciría convergencia política', true, 1),
  ('Que se integraría en las cadenas globales de valor', false, 2),
  ('Que reduciría la pobreza extrema', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se describe mejor la reacción comercial estadounidense frente a China desde 2018?', 'Incluyó aranceles, restricciones a la exportación de semiconductores avanzados y política de reindustrialización, sin llegar a una separación total.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una desconexión económica completa entre ambos países', false, 0),
  ('Una fragmentación selectiva de las cadenas de suministro con costes crecientes y terceros países evitando alinearse', true, 1),
  ('Un acuerdo de libre comercio bilateral', false, 2),
  ('La expulsión de China de la Organización Mundial del Comercio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracteriza al sistema internacional actual según el tema?', 'India, Brasil, Indonesia, Turquía, los Estados del Golfo y varios países africanos actúan en una posición que recuerda al No Alineamiento sin su vocabulario.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un orden bipolar entre Estados Unidos y China', false, 0),
  ('Un sistema ni unipolar ni bipolar, con potencias medias que actúan con autonomía y rechazan alinearse automáticamente', true, 1),
  ('Una hegemonía europea sobre las instituciones multilaterales', false, 2),
  ('Un vacío de poder sin actores relevantes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa Shoshana Zuboff como capitalismo de vigilancia?', 'Otros análisis subrayan más los efectos de red y la lógica de monopolio natural, pero coinciden en el diagnóstico de concentración.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El control estatal de las comunicaciones privadas', false, 0),
  ('Un modelo de negocio basado en extraer datos de comportamiento para predecir y orientar la conducta futura', true, 1),
  ('La venta directa de datos personales entre empresas', false, 2),
  ('El uso de reconocimiento facial en espacios públicos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué importa históricamente el hundimiento económico del periodismo profesional?', 'A la vez que las plataformas desintermediaban el acceso a la información, abarataban hasta lo trivial la producción de desinformación.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque redujo el número de empleos cualificados', false, 0),
  ('Porque era el principal actor que producía verificación de manera sistemática', true, 1),
  ('Porque impidió el acceso a internet en zonas rurales', false, 2),
  ('Porque provocó la concentración de las plataformas digitales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se diferencia el Acuerdo de París del Protocolo de Kioto?', 'El coste de las renovables se ha hundido más rápido de lo previsto, lo que ha hecho viable una transición que hace veinte años parecía inasumible.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('París es vinculante y Kioto era voluntario', false, 0),
  ('París tiene participación casi universal con compromisos nacionales voluntarios; Kioto era vinculante y parcial, sin Estados Unidos', true, 1),
  ('París solo afecta a los países desarrollados', false, 2),
  ('Kioto incluía objetivos de adaptación y París no', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra la curva del elefante de Milanovic?', 'La desigualdad entre países se redujo por primera vez desde la revolución industrial, mientras crecía dentro de la mayoría de los países ricos.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que todos los grupos de renta mundiales mejoraron por igual entre 1988 y 2008', false, 0),
  ('Que ganaron sobre todo las clases medias asiáticas y el uno por ciento global, mientras se estancaban los trabajadores industriales de Occidente', true, 1),
  ('Que la desigualdad global aumentó de forma continua', false, 2),
  ('Que la pobreza extrema no se redujo pese al crecimiento', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proponen Levitsky y Ziblatt como factor crítico de la erosión democrática?', 'Su explicación compite y se combina con las económicas de Rodrik y las culturales de Norris e Inglehart.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La intervención militar extranjera', false, 0),
  ('La erosión de las normas no escritas de la competencia democrática y el pacto de partidos establecidos con fuerzas que no aceptan las reglas', true, 1),
  ('La ausencia de constituciones escritas', false, 2),
  ('El aumento del gasto público', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: mundo-actual-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué dificultades específicas tiene escribir la historia de este período?', 'La abundancia de datos no equivale a disponibilidad, y la única defensa frente a la falta de distancia es describir con precisión y desconfiar de las conclusiones redondas.', 3, true
  from public.topics where slug = 'mundo-actual'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La escasez de acontecimientos relevantes', false, 0),
  ('Fuentes clasificadas, dispersas o en formatos degradables, y falta de perspectiva para saber qué resultará decisivo', true, 1),
  ('La imposibilidad de acceder a datos económicos', false, 2),
  ('La ausencia de debate historiográfico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: plena-edad-media-1
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

-- Pregunta: plena-edad-media-2
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

-- Pregunta: plena-edad-media-3
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

-- Pregunta: plena-edad-media-4
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

-- Pregunta: plena-edad-media-5
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

-- Pregunta: plena-edad-media-6
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

-- Pregunta: plena-edad-media-7
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

-- Pregunta: plena-edad-media-8
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

-- Pregunta: plena-edad-media-9
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

-- Pregunta: plena-edad-media-10
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

-- Pregunta: plena-edad-media-11
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

-- Pregunta: plena-edad-media-12
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

-- Pregunta: plena-edad-media-13
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

-- Pregunta: plena-edad-media-14
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

-- Pregunta: plena-edad-media-15
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

-- Pregunta: plena-edad-media-16
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

-- Pregunta: prehistoria-1
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

-- Pregunta: prehistoria-2
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

-- Pregunta: prehistoria-3
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

-- Pregunta: prehistoria-4
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

-- Pregunta: prehistoria-5
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

-- Pregunta: prehistoria-6
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

-- Pregunta: prehistoria-7
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

-- Pregunta: prehistoria-8
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

-- Pregunta: prehistoria-9
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

-- Pregunta: prehistoria-10
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

-- Pregunta: prehistoria-11
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

-- Pregunta: prehistoria-12
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

-- Pregunta: prehistoria-13
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

-- Pregunta: prehistoria-14
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

-- Pregunta: reforma-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué operación financiera está detrás de la predicación de indulgencias de 1517?', 'La otra mitad iba a las obras de San Pedro. La cumbre artística del Renacimiento romano y la protesta de Lutero comparten fuente de financiación.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La financiación de la guerra contra los turcos', false, 0),
  ('La deuda de Alberto de Brandeburgo con los Fugger para acumular el arzobispado de Maguncia, saldada con la mitad de lo recaudado', true, 1),
  ('La compra de la corona imperial por Carlos V', false, 2),
  ('El rescate de Francisco I tras Pavía', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué se sabe con certeza sobre las 95 tesis?', 'Las tesis no niegan el purgatorio ni la autoridad papal: sostienen que la indulgencia no sustituye al arrepentimiento. Lutero pedía una disputa académica.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Lutero las clavó en la puerta de la iglesia del castillo el 31 de octubre de 1517', false, 0),
  ('Que se conserva la carta con la que Lutero las envió al arzobispo de Maguncia; el clavado lo relata Melanchthon en 1546', true, 1),
  ('Que fueron redactadas en alemán para el gran público', false, 2),
  ('Que negaban desde el principio la autoridad del papa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué admitió Lutero en la disputa de Leipzig de 1519 y por qué fue decisivo?', 'De ahí salen los tratados de 1520 y la ruptura. La radicalización llegó por el propio proceso de disputa, no estaba en las tesis iniciales.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los concilios también podían errar, lo que dejaba a la Escritura como única autoridad final', true, 0),
  ('Que la venta de indulgencias era legítima si el papa la autorizaba', false, 1),
  ('Que aceptaba la transustanciación sin reservas', false, 2),
  ('Que renunciaba a publicar en alemán', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué prendió Lutero donde Hus había fracasado un siglo antes?', 'A eso se sumaron la fragmentación política del Imperio, los agravios fiscales de los príncipes y una tradición urbana de autogobierno comunal.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque contaba con apoyo militar otomano', false, 0),
  ('Porque el papado había perdido toda autoridad tras el cisma', false, 1),
  ('Porque escribió en alemán, breve y barato: cerca de un tercio de todo lo impreso en alemán entre 1518 y 1525 salió de su pluma', true, 2),
  ('Porque sus tesis eran teológicamente más moderadas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué incentivo material tenían los príncipes alemanes para apoyar la Reforma?', 'Federico el Sabio protegió a Lutero sin compartir del todo sus tesis. Carlos V, que sí quería reprimirlo, estuvo ocupado con Francia y con el avance otomano.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El monopolio del comercio báltico', false, 0),
  ('La secularización de los bienes eclesiásticos de sus territorios y el recorte de la jurisdicción y la fiscalidad romanas', true, 1),
  ('Las subvenciones de Carlos V a los territorios reformados', false, 2),
  ('La exención de participar en la defensa contra los turcos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué reclamaban los Doce Artículos de Memmingen de 1525?', 'Argumentaban con citas bíblicas. Es uno de los primeros textos europeos que formula derechos colectivos, y se imprimió en unas veinticinco ediciones en dos meses.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La restauración del emperador como única autoridad religiosa', false, 0),
  ('La expulsión de los judíos de los territorios imperiales', false, 1),
  ('La supresión de los gremios urbanos', false, 2),
  ('Elegir al párroco, suprimir el diezmo menor, abolir la servidumbre porque Cristo redimió a todos y recuperar bosques y aguas comunales', true, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia tuvo la guerra de los campesinos para el rumbo de la Reforma?', 'Lutero llamó a reprimir sin misericordia en *Contra las hordas asesinas*. La represión causó entre setenta mil y cien mil muertos.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Consolidó la vía comunal como modelo dominante', false, 0),
  ('Dejó de ser un movimiento comunal y pasó a ser asunto de príncipes y magistrados, con la autoridad civil al frente de la iglesia territorial', true, 1),
  ('Provocó la reconciliación con Roma', false, 2),
  ('Llevó a Lutero a apoyar la abolición de la servidumbre', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el coloquio de Marburgo de 1529 es significativo?', 'Si la Escritura es la única autoridad, no hay instancia que zanje las lecturas divergentes. La fragmentación es estructural, no accidental.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque unificó a luteranos y católicos', false, 0),
  ('Porque Lutero y Zuinglio acordaron catorce de quince artículos y rompieron por la eucaristía: la Reforma nació incapaz de unificarse', true, 1),
  ('Porque estableció la paz religiosa en el Imperio', false, 2),
  ('Porque condenó formalmente al anabaptismo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo del calvinismo el protestantismo más exportable?', 'Esa autonomía organizativa explica su papel en las guerras civiles francesas y en la revuelta neerlandesa. La ejecución de Servet en 1553 muestra que la tolerancia no estaba en el programa.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Su alianza permanente con las monarquías', false, 0),
  ('Su rechazo de toda organización eclesiástica', false, 1),
  ('Un sistema teológico completo y una estructura de sínodos y consistorios capaz de funcionar sin el príncipe e incluso contra él', true, 2),
  ('Su tolerancia hacia otras confesiones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó la ruptura inglesa de 1534?', 'El contenido doctrinal llegó con Eduardo VI, se revirtió con María I y se estabilizó en 1559 en una fórmula deliberadamente ambigua.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue jurisdiccional y dinástica antes que teológica, y la disolución de monasterios creó un grupo con interés material en que no se revirtiera', true, 0),
  ('Fue una reforma doctrinal calvinista desde el primer momento', false, 1),
  ('La impuso el Parlamento contra la voluntad del rey', false, 2),
  ('Se produjo tras una guerra civil religiosa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinción propuso Hubert Jedin en 1946?', 'La distinción se ha impuesto, con la advertencia de que ambos procesos se entrelazan y que separarlos es un recurso analítico.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Entre reforma alemana y reforma suiza', false, 0),
  ('Entre una reforma católica de impulso interno anterior a 1517 y una contrarreforma de combate contra el protestantismo', true, 1),
  ('Entre Trento y el Vaticano I', false, 2),
  ('Entre religiosidad popular y religiosidad de élite', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Además de cerrar la doctrina, ¿qué innovación disciplinar aportó Trento?', 'Ese aparato administrativo es tan característico del periodo como la polémica doctrinal, y encaja con la tesis de la confesionalización.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La elección de los obispos por los fieles', false, 0),
  ('La supresión de las órdenes religiosas', false, 1),
  ('Residencia obligatoria de los obispos, seminarios para formar al clero y registro sistemático de bautismos y matrimonios', true, 2),
  ('La traducción oficial de la Biblia a las lenguas vulgares', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué estableció la paz de Augsburgo de 1555 y cuál fue su defecto?', 'Fue una tregua con fecha de caducidad incorporada. Westfalia añadiría el calvinismo en 1648.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Libertad individual de conciencia; falló por falta de aplicación', false, 0),
  ('Que cada príncipe fijaba la confesión de su territorio, pero reconocía solo catolicismo y luteranismo, dejando fuera al calvinismo, que seguía creciendo', true, 1),
  ('La unificación religiosa del Imperio bajo el catolicismo', false, 2),
  ('La supresión de los principados eclesiásticos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra que la guerra de los Treinta Años dejó de ser un conflicto confesional?', 'Acabó siendo una guerra europea de hegemonía. El Imperio perdió en torno al veinte por ciento de su población, con regiones por encima del cincuenta.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el papa la condenó desde el principio', false, 0),
  ('Que los ejércitos eran mercenarios', false, 1),
  ('Que la Francia católica financió y después combatió junto a los príncipes protestantes contra los Habsburgo', true, 2),
  ('Que terminó sin tratado de paz', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es un mito que Westfalia fundara la soberanía estatal moderna?', 'Lo que sí consagró Westfalia fue la práctica de resolver los conflictos europeos en congresos multilaterales.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque los tratados no llegaron a firmarse', false, 0),
  ('Porque solo participaron potencias protestantes', false, 1),
  ('Porque Osiander mostró en 2001 que esa lectura es una construcción del siglo XIX: los tratados no contienen doctrina de soberanía ni de no injerencia', true, 2),
  ('Porque la soberanía ya estaba definida en Augsburgo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: reforma-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción plantearon Becker y Woessmann a la tesis de Weber?', 'Midieron la distancia de cada comarca prusiana a Wittenberg. La correlación entre confesión y desarrollo se mantiene; el mecanismo cambia.', 3, true
  from public.topics where slug = 'reforma'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el capitalismo es anterior a la Reforma', false, 0),
  ('Que la ventaja económica protestante desaparece al controlar por alfabetización: lo decisivo fue leer la Biblia, no una ética específica', true, 1),
  ('Que Weber nunca estudió datos alemanes', false, 2),
  ('Que el calvinismo prohibía el préstamo con interés', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: renacimiento-1
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

-- Pregunta: renacimiento-2
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

-- Pregunta: renacimiento-3
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

-- Pregunta: renacimiento-4
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

-- Pregunta: renacimiento-5
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

-- Pregunta: renacimiento-6
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

-- Pregunta: renacimiento-7
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

-- Pregunta: renacimiento-8
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

-- Pregunta: renacimiento-9
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

-- Pregunta: renacimiento-10
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

-- Pregunta: renacimiento-11
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

-- Pregunta: renacimiento-12
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

-- Pregunta: renacimiento-13
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

-- Pregunta: renacimiento-14
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

-- Pregunta: renacimiento-15
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

-- Pregunta: renacimiento-16
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

-- Pregunta: revolucion-cientifica-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era la objeción empírica más seria contra el heliocentrismo en el siglo XVI?', 'La respuesta copernicana —las estrellas están lejísimos— era cierta, pero indistinguible entonces de una excusa. El paralaje no se midió hasta 1838.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las mareas no podían explicarse sin una Tierra inmóvil', false, 0),
  ('Que no se observaba paralaje estelar: las estrellas no parecían desplazarse a lo largo del año', true, 1),
  ('Que el modelo de Copérnico no permitía predecir eclipses', false, 2),
  ('Que contradecía las observaciones de Tycho Brahe sobre los cometas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo Andreas Osiander con el libro de Copérnico?', 'El prefacio amortiguó la reacción durante décadas. La obra no entró en el Índice hasta 1616.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Retrasó su publicación hasta después del Concilio de Trento', false, 0),
  ('Añadió sin permiso un prefacio anónimo que presentaba el heliocentrismo como simple recurso de cálculo', true, 1),
  ('Tradujo la obra al alemán para el gran público', false, 2),
  ('Suprimió los capítulos dedicados al movimiento de la Tierra', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostraron las observaciones de Tycho Brahe de la nova de 1572 y el cometa de 1577?', 'Cayeron las esferas cristalinas incorruptibles. Tycho, sin embargo, mantuvo un modelo híbrido con la Tierra inmóvil en el centro.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la Tierra gira alrededor del Sol', false, 0),
  ('Que había fenómenos cambiantes más allá de la Luna, contra la incorruptibilidad de los cielos', true, 1),
  ('Que las órbitas planetarias son elípticas', false, 2),
  ('Que existen satélites alrededor de Júpiter', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué llevó a Kepler a abandonar la órbita circular?', 'La precisión de Tycho, de alrededor de un minuto de arco, hacía inaceptable ese desajuste. Tomarse los datos en serio produjo la elipse.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una discrepancia de ocho minutos de arco en los datos de Marte que se negó a atribuir a error de observación', true, 0),
  ('La lectura del *Sidereus nuncius* de Galileo', false, 1),
  ('La medición del paralaje estelar', false, 2),
  ('El cálculo del periodo orbital de los satélites de Júpiter', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la aportación física de Galileo era imprescindible para el heliocentrismo?', 'Sin física nueva, el heliocentrismo chocaba con la experiencia cotidiana. La astronomía sola no bastaba.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque permitía calcular las órbitas con mayor precisión que Kepler', false, 0),
  ('Porque el principio de inercia y la relatividad del movimiento uniforme respondían a la objeción de que un cuerpo lanzado quedaría atrás', true, 1),
  ('Porque demostraba matemáticamente la gravitación universal', false, 2),
  ('Porque probaba la existencia del vacío', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué refutaban las fases de Venus observadas por Galileo?', 'Precisión importante: la evidencia disponible en 1613 no permitía elegir entre Copérnico y Tycho, solo descartar a Ptolomeo.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El sistema de Tycho Brahe', false, 0),
  ('El modelo ptolemaico puro, aunque no el modelo híbrido de Tycho', true, 1),
  ('Las leyes de Kepler', false, 2),
  ('La teoría del ímpetus medieval', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué factores, además del contenido astronómico, explican la condena de Galileo en 1633?', 'Poner el argumento del papa en boca de Simplicio fue un error político. La tesis del conflicto entre ciencia y fe está abandonada como marco general.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Únicamente la literalidad bíblica defendida por el Santo Oficio', false, 0),
  ('El género dialogado y el uso del toscano, el mecenazgo roto con Urbano VIII, la presión de la guerra y los intereses de los aristotélicos universitarios', true, 1),
  ('Su negativa a publicar en la Royal Society', false, 2),
  ('La prohibición general de usar telescopios en los Estados Pontificios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proponía el método de Bacon en el *Novum Organum*?', 'Bacon no hizo descubrimientos, pero su Casa de Salomón inspiró la Royal Society. Definió una institución más que una técnica.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Deducir la física a partir de principios evidentes por sí mismos', false, 0),
  ('Recoger historias naturales y ascender por inducción a axiomas generales, mediante trabajo colectivo', true, 1),
  ('Reducir toda la naturaleza a extensión y movimiento', false, 2),
  ('Someter toda hipótesis a experimento crucial matemático', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué es un «testigo virtual» según Shapin y Schaffer?', 'La autoridad del hecho experimental se apoya en el testimonio colectivo. Hobbes objetó que ese consenso era frágil y prefería la demostración.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un miembro de la Royal Society que asiste al experimento sin intervenir', false, 0),
  ('El lector al que la prosa experimental, minuciosamente detallada, convierte en testigo de un hecho al que no asistió', true, 1),
  ('Un instrumento que registra automáticamente los resultados', false, 2),
  ('Un aristotélico invitado a refutar el experimento', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función cumplieron las *Philosophical Transactions* desde 1665?', 'Junto con la imprenta, hicieron el conocimiento reproducible, comparable y corregible por terceros.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Sustituir a los libros como único formato aceptado', false, 0),
  ('Fechar la prioridad de los hallazgos, someter los textos al juicio de otros miembros y crear un archivo acumulativo', true, 1),
  ('Financiar los experimentos de la Royal Society', false, 2),
  ('Traducir al inglés las obras latinas del continente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué unificaron los *Principia* de 1687?', 'De esa ley se deducen las tres leyes de Kepler, las mareas y las trayectorias cometarias. Una sola física para el cielo y la tierra.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La óptica y la acústica bajo una teoría ondulatoria', false, 0),
  ('La caída de los cuerpos en la Tierra y las órbitas planetarias bajo una misma ley de atracción inversa al cuadrado de la distancia', true, 1),
  ('La química y la alquimia en una sola disciplina', false, 2),
  ('La astronomía de Ptolomeo y la de Copérnico en un modelo mixto', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué quiso decir Newton con *hypotheses non fingo*?', 'A los cartesianos la acción a distancia les pareció una cualidad oculta. Newton desplazó lo que se considera una explicación satisfactoria.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que rechazaba el uso de las matemáticas en la filosofía natural', false, 0),
  ('Que no proponía una causa para la gravedad y se limitaba a deducir y verificar sus efectos', true, 1),
  ('Que negaba la existencia de la atracción a distancia', false, 2),
  ('Que sus resultados no admitían discusión', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué encontró Keynes al estudiar los manuscritos inéditos de Newton?', 'De ahí su frase: no el primero de la edad de la razón, sino el último de los magos. La modernidad de la ciencia se seleccionó dentro de intereses mucho más amplios.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una demostración temprana de la relatividad', false, 0),
  ('Más páginas dedicadas a la alquimia y a la cronología bíblica que a la física', true, 1),
  ('La prueba de que no escribió los *Principia*', false, 2),
  ('Correspondencia inédita con Descartes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene la tesis de Zilsel sobre el origen del método experimental?', 'Es una posición externalista, como la de Hessen. Koyré replicó desde el internalismo. Hoy no se sostiene ninguna en estado puro.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que procede íntegramente de las universidades escolásticas', false, 0),
  ('Que nace del contacto entre el saber manual de artesanos, ingenieros y navegantes y la formación matemática universitaria', true, 1),
  ('Que es una consecuencia directa de la Reforma protestante', false, 2),
  ('Que fue importado del mundo islámico junto con la astronomía', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué documenta George Saliba sobre la astronomía islámica?', 'La coincidencia técnica está establecida y sugiere transmisión, no invención paralela. La ruta exacta hasta Cracovia sigue discutiéndose.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Copérnico tradujo directamente los textos de Maraga al latín', false, 0),
  ('Que los modelos de la escuela de Maraga, como el par de Tusi, son matemáticamente equivalentes a los que empleó Copérnico', true, 1),
  ('Que el heliocentrismo se formuló en Bagdad en el siglo IX', false, 2),
  ('Que la astronomía islámica rechazó el sistema ptolemaico en bloque', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-cientifica-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el estado actual del debate sobre la etiqueta «revolución científica»?', 'Equilibrio entre Koyré y Shapin: la etiqueta sirve para ordenar el relato, no para explicar por sí sola lo ocurrido.', 3, true
  from public.topics where slug = 'revolucion-cientifica'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se ha abandonado por completo en favor de «ciencia medieval tardía»', false, 0),
  ('Se conserva como periodización útil, se rechaza el relato heroico y se admite que hacia 1700 había cambiado qué contaba como prueba y quién podía producirla', true, 1),
  ('Se ha ampliado hasta abarcar de 1200 a 1900', false, 2),
  ('Se reserva exclusivamente para la obra de Newton', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la causa inmediata de la convocatoria de los Estados Generales en 1789?', 'La revuelta aristocrática de 1787-1788 abrió la puerta. La aristocracia bloqueó el arreglo fiscal en nombre de la libertad.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El hambre provocada por la mala cosecha de 1788', false, 0),
  ('El bloqueo de la reforma fiscal por la Asamblea de Notables, que remitió la decisión a la nación reunida', true, 1),
  ('La derrota francesa en la guerra de los Siete Años', false, 2),
  ('La presión de los filósofos ilustrados sobre la corte', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué no funciona explicar 1789 por el empobrecimiento de Francia?', 'Francia recaudaba mal, no era pobre. La cosecha desastrosa de 1788 agravó la crisis, no la causó.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque la población francesa disminuía desde 1750', false, 0),
  ('Porque el siglo XVIII fue de crecimiento demográfico, comercial y agrario: lo que estaba roto era la hacienda, no la economía', true, 1),
  ('Porque Francia carecía de deuda pública', false, 2),
  ('Porque el precio del pan se mantuvo estable hasta 1792', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué acto se considera fundacional del nuevo régimen?', 'Unos representantes deciden que la soberanía reside en la nación y actúan en consecuencia. Todo lo demás se apoya en ese gesto.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La toma de la Bastilla el 14 de julio', false, 0),
  ('La autoproclamación del tercer estado como Asamblea Nacional el 17 de junio y el juramento del Juego de Pelota del 20', true, 1),
  ('La marcha de las mujeres a Versalles en octubre', false, 2),
  ('La ejecución de Luis XVI en enero de 1793', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué destruían preferentemente los campesinos durante el Gran Miedo?', 'El objetivo era el título jurídico, no el edificio. Esa presión forzó la noche del 4 de agosto.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las cosechas de los grandes propietarios', false, 0),
  ('Los archivos señoriales donde constaban sus obligaciones y rentas', true, 1),
  ('Las iglesias parroquiales', false, 2),
  ('Los molinos y las herrerías', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué letra pequeña tuvo la abolición de los derechos señoriales del 4 de agosto?', 'La supresión sin indemnización llegó en 1793. El campesinado se anticipó a la ley por la vía de los hechos.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se aplazaba su entrada en vigor hasta 1793', false, 0),
  ('Los derechos considerados propiedad debían rescatarse mediante pago, condición que el campesinado ignoró', true, 1),
  ('Solo afectaba a los territorios del norte', false, 2),
  ('Exigía la aprobación previa del rey', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la Constitución civil del clero fue una ruptura decisiva?', 'Tackett demostró que el mapa del juramento de 1790-1791 predice comarca a comarca el de la resistencia posterior.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque prohibió el culto católico', false, 0),
  ('Porque el juramento exigido al clero dividió al país por la mitad y anticipa la geografía de la contrarrevolución', true, 1),
  ('Porque devolvió a la Iglesia los bienes nacionalizados', false, 2),
  ('Porque instauró el culto del Ser Supremo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué prueba la ley Le Chapelier de 1791 sobre el alcance de la igualdad revolucionaria?', 'Se prohibió la organización obrera en nombre de la libertad individual y de la unidad de la nación.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que se extendió al ámbito económico y laboral', false, 0),
  ('Que era igualdad jurídica y no social: prohibió coaliciones y asociaciones profesionales, y estuvo vigente hasta 1864', true, 1),
  ('Que se reconocieron los derechos políticos de los asalariados', false, 2),
  ('Que los gremios se mantuvieron intactos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Quién se opuso a declarar la guerra en 1792 y con qué argumento?', 'La guerra la querían los girondinos, para propagar la libertad, y la corte, que esperaba la derrota. Ambos por motivos opuestos.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los girondinos, por temor a la derrota militar', false, 0),
  ('Robespierre, con el argumento de que nadie ama a los misioneros armados', true, 1),
  ('La corte, que confiaba en la victoria revolucionaria', false, 2),
  ('Danton, por falta de recursos financieros', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuántas condenas a muerte dictaron aproximadamente los tribunales revolucionarios?', 'La mayor parte de la violencia se concentró en zonas de guerra civil y de frontera, no en París.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Alrededor de 2.000', false, 0),
  ('Alrededor de 17.000, con un total de víctimas de la represión estimado entre 30.000 y 40.000', true, 1),
  ('Más de 300.000', false, 2),
  ('Menos de 500', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo terminó el Terror?', 'La ley de Pradial había suprimido las garantías procesales y acelerado las ejecuciones, incluidas las de diputados.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Con una invasión extranjera que ocupó París', false, 0),
  ('Por implosión: la propia Convención derribó a Robespierre el 9 de Termidor temiendo ser la siguiente en la lista', true, 1),
  ('Con un plebiscito popular', false, 2),
  ('Con la victoria electoral de los girondinos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el argumento de Furet sobre el origen del Terror?', 'Frente a la lectura circunstancial de Mathiez y Soboul. Tackett propone una tercera vía: radicalización contingente por miedo y aprendizaje político.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue una respuesta proporcionada a la invasión extranjera', false, 0),
  ('Que una soberanía concebida como voluntad general indivisible no deja lugar a la oposición: el que discrepa se convierte en enemigo', true, 1),
  ('Que lo impusieron los sans-culottes contra la voluntad de la Convención', false, 2),
  ('Que fue obra exclusiva de Robespierre', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la posición mayoritaria de la historiografía académica sobre la Vendée?', 'La calificación de genocidio de Secher es minoritaria en la academia. Hay acuerdo en la magnitud: entre 150.000 y 250.000 muertos.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que hubo un plan estatal de exterminio de la población vendeana', false, 0),
  ('Que la represión fue atroz pero descentralizada y sin plan de exterminio poblacional, en un marco de guerra civil', true, 1),
  ('Que las víctimas fueron menos de diez mil', false, 2),
  ('Que no hubo represión significativa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué negó Alfred Cobban en 1964?', 'Abrió el revisionismo. La historiografía actual ha vuelto a lo social sin recuperar el esquema de dos clases.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que hubiera existido violencia revolucionaria', false, 0),
  ('Que existiera una burguesía capitalista enfrentada a una nobleza feudal: los revolucionarios eran sobre todo juristas y funcionarios', true, 1),
  ('Que la Declaración de 1789 tuviera efectos jurídicos', false, 2),
  ('Que Napoleón fuera heredero de la Revolución', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo el régimen napoleónico con la esclavitud colonial?', 'El ciclo revolucionario produjo la primera abolición moderna de la esclavitud y también su primera restauración.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Mantuvo la abolición decretada en 1794', false, 0),
  ('La restableció en 1802; la expedición enviada a Saint-Domingue fue derrotada y la colonia proclamó su independencia como Haití en 1804', true, 1),
  ('La abolió por primera vez en 1804', false, 2),
  ('Delegó la decisión en las asambleas coloniales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué contradicción interna contiene el Código Civil de 1804?', 'Fue exportado a media Europa con las dos caras a la vez: igualdad civil para los varones, subordinación jurídica para las mujeres.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Reconoce la propiedad colectiva y la privada al mismo tiempo', false, 0),
  ('Proclama la igualdad ante la ley y la libertad contractual mientras consagra la autoridad marital y la incapacidad jurídica de la mujer casada', true, 1),
  ('Restablece los gremios suprimidos en 1791', false, 2),
  ('Devuelve la jurisdicción señorial a los antiguos propietarios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-francesa-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto no buscado tuvo el bloqueo continental decretado en 1806?', 'De los más de seiscientos mil hombres de la Grande Armée que entraron en Rusia regresaron unas pocas decenas de miles.', 3, true
  from public.topics where slug = 'revolucion-francesa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Provocó la quiebra inmediata del Banco de Inglaterra', false, 0),
  ('Arruinó a los aliados y satélites de Francia y empujó al Imperio a intervenir en España en 1808 y a invadir Rusia en 1812', true, 1),
  ('Cerró el comercio francés con América', false, 2),
  ('Obligó a Gran Bretaña a firmar la paz en 1807', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el mir en la Rusia anterior a 1917?', 'Bloqueaba la mejora individual y sostenía la aspiración colectiva a la tierra. Stolypin trató de disolverla para crear propietarios que apoyaran al régimen.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El parlamento electivo concedido en 1905', false, 0),
  ('La comuna campesina que repartía periódicamente la tierra entre sus miembros', true, 1),
  ('La policía política del régimen zarista', false, 2),
  ('El sindicato de los obreros metalúrgicos de Petrogrado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la novedad organizativa aparecida en la revolución de 1905?', 'Nació como comité de huelga en Petersburgo. En 1917 ya era una forma disponible que obreros y soldados sabían usar sin que nadie la impusiera.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El partido bolchevique', false, 0),
  ('La Duma imperial', false, 1),
  ('El sóviet, consejo elegido en las fábricas', true, 2),
  ('El koljós agrícola', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hecho resultó decisivo para el triunfo de la revolución de febrero de 1917?', 'Sin ejército obediente la autocracia dejó de existir. Ningún partido revolucionario dirigió esas jornadas.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La llegada de Lenin a Petrogrado', false, 0),
  ('La negativa de la guarnición de Petrogrado a disparar contra los manifestantes', true, 1),
  ('La derrota militar en la ofensiva de junio', false, 2),
  ('La disolución de la Duma por el zar', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistía el doble poder entre febrero y octubre de 1917?', 'La dirección menchevique y socialista revolucionaria del sóviet no quería gobernar: sostenía que a una revolución burguesa le tocaba un gobierno burgués.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En el reparto de competencias entre el zar y la Duma', false, 0),
  ('En la coexistencia del gobierno provisional, con legitimidad legal, y el sóviet de Petrogrado, con autoridad real', true, 1),
  ('En la división del país entre zonas rojas y blancas', false, 2),
  ('En el gobierno conjunto de bolcheviques y mencheviques', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué establecía la Orden número 1 del sóviet de Petrogrado?', 'Fue la mayor transferencia de autoridad del año: desmontó la disciplina del ejército desde abajo.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La nacionalización inmediata de la banca', false, 0),
  ('La salida de Rusia de la guerra sin condiciones', false, 1),
  ('La obediencia al gobierno solo si no contradecía al sóviet, y la elección de comités de soldados', true, 2),
  ('La convocatoria inmediata de la Asamblea Constituyente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proponía Lenin en las Tesis de Abril?', 'Rompía con la línea de su propio partido y dejaba a los bolcheviques como la única fuerza sin responsabilidad de gobierno.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Apoyo crítico al gobierno provisional hasta la Asamblea Constituyente', false, 0),
  ('Ningún apoyo al gobierno, todo el poder a los sóviets, paz, tierra y control obrero', true, 1),
  ('La colectivización inmediata de la agricultura', false, 2),
  ('Una coalición de todos los partidos socialistas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia tuvo el intento de golpe de Kornílov en agosto de 1917?', 'En septiembre los bolcheviques ya tenían mayoría en los sóviets de Petrogrado y Moscú.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Consolidó a Kerenski como árbitro entre la derecha y la izquierda', false, 0),
  ('Obligó a armar a los obreros de Petrogrado y dejó al gobierno desacreditado ante ambos lados', true, 1),
  ('Provocó la salida inmediata de Rusia de la guerra', false, 2),
  ('Restauró la disciplina en el ejército del frente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué resultado dieron las elecciones a la Asamblea Constituyente de noviembre de 1917?', 'Fueron las únicas elecciones verdaderamente libres de la Rusia moderna. La Asamblea se reunió un día y fue disuelta por la guardia.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Mayoría absoluta bolchevique', false, 0),
  ('Empate entre bolcheviques y mencheviques', false, 1),
  ('Mayoría socialista revolucionaria, con los bolcheviques en torno a la cuarta parte de los votos', true, 2),
  ('Mayoría de los partidos liberales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué ganaron los rojos la guerra civil?', 'Devolver la tierra a los terratenientes, que era lo que los blancos representaban, resultaba inaceptable para la mayoría rural.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por su superioridad numérica y armamentística desde el primer momento', false, 0),
  ('Por el apoyo militar de las potencias occidentales', false, 1),
  ('Por controlar el centro industrial y ferroviario, tener unidad de mando y porque los blancos no ofrecían nada al campesinado', true, 2),
  ('Porque los ejércitos verdes campesinos combatieron a su lado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó al comunismo de guerra de 1918-1921?', 'Combinado con la sequía produjo la hambruna de 1921 y 1922, con unos cinco millones de muertos.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La sustitución de la requisa por un impuesto en especie', false, 0),
  ('La nacionalización total, la supresión del mercado y la requisa armada del grano', true, 1),
  ('La apertura al capital extranjero para reconstruir la industria', false, 2),
  ('La entrega de las fábricas a cooperativas obreras autónomas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué relación hubo entre Kronstadt y la NEP en 1921?', 'Los marinos pedían sóviets sin bolcheviques. Ese mismo congreso prohibió además las fracciones dentro del partido.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La rebelión fue aplastada y a la vez aceptada en sustancia: el mismo congreso aprobó el giro económico', true, 0),
  ('La NEP se aprobó para premiar la lealtad de los marinos de Kronstadt', false, 1),
  ('La rebelión triunfó e impuso el fin del partido único', false, 2),
  ('No hubo ninguna relación entre ambos hechos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Desde qué posición construyó Stalin su poder?', 'Ganó la sucesión aliándose sucesivamente contra Trotski, después contra Zinóviev y Kámenev y por último contra Bujarin.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Desde el mando del Ejército Rojo', false, 0),
  ('Desde la dirección de la Internacional Comunista', false, 1),
  ('Desde la secretaría general, un cargo administrativo que controlaba los nombramientos', true, 2),
  ('Desde la presidencia del sóviet de Moscú', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el gran giro de 1928?', 'La cuestión de fondo era de dónde saldrían los recursos para industrializar un país agrario y aislado. La respuesta fue el grano campesino.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La firma del pacto germano-soviético', false, 0),
  ('El abandono de la NEP por el plan quinquenal y la colectivización forzosa del campo', true, 1),
  ('La disolución de la Internacional Comunista', false, 2),
  ('La adopción de la Constitución de 1936', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué coinciden las dos posiciones del debate sobre la hambruna de 1932-1933?', 'La discrepancia entre Conquest o Applebaum y Davies o Wheatcroft es sobre la intención y sobre la aplicación de la categoría de genocidio.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En que fue consecuencia exclusiva de la sequía', false, 0),
  ('En que fue evitable y en que las decisiones que la agravaron están documentadas', true, 1),
  ('En que afectó solo a Ucrania', false, 2),
  ('En que las cifras de muertos son imposibles de estimar', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué reveló la apertura de los archivos sobre el Gran Terror de 1936-1938?', 'Los archivos dan en torno a seiscientas ochenta mil ejecuciones en dos años. Las operaciones de masas no se conocieron hasta 1991.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que los procesos de Moscú fueron el grueso de la represión', false, 0),
  ('Que las operaciones de masas por cuotas contra categorías sociales y nacionales enteras mataron a mucha más gente que los procesos públicos', true, 1),
  ('Que no hubo ejecuciones sistemáticas fuera del ejército', false, 2),
  ('Que las cifras de la guerra fría se quedaron muy cortas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revolucion-rusa-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aportó la corriente revisionista de Fitzpatrick y Getty al estudio del estalinismo?', 'Denuncias vecinales, iniciativa local y cuotas regionales sobrecumplidas explican una implicación social mucho más amplia que la de una maquinaria puramente descendente.', 3, true
  from public.topics where slug = 'revolucion-rusa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La demostración de que la represión fue muy inferior a lo denunciado', false, 0),
  ('El estudio de la sociedad desde abajo, mostrando que un régimen puede ser a la vez extremadamente violento y socialmente enraizado', true, 1),
  ('La tesis de que Stalin no controlaba el aparato del partido', false, 2),
  ('La atribución del terror exclusivamente a las autoridades locales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: revoluciones-liberales-1
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

-- Pregunta: revoluciones-liberales-2
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

-- Pregunta: revoluciones-liberales-3
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

-- Pregunta: revoluciones-liberales-4
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

-- Pregunta: revoluciones-liberales-5
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

-- Pregunta: revoluciones-liberales-6
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

-- Pregunta: revoluciones-liberales-7
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

-- Pregunta: revoluciones-liberales-8
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

-- Pregunta: revoluciones-liberales-9
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

-- Pregunta: revoluciones-liberales-10
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

-- Pregunta: revoluciones-liberales-11
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

-- Pregunta: revoluciones-liberales-12
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

-- Pregunta: revoluciones-liberales-13
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

-- Pregunta: revoluciones-liberales-14
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

-- Pregunta: revoluciones-liberales-15
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

-- Pregunta: revoluciones-liberales-16
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

-- Pregunta: roma-imperio-1
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

-- Pregunta: roma-imperio-2
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

-- Pregunta: roma-imperio-3
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

-- Pregunta: roma-imperio-4
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

-- Pregunta: roma-imperio-5
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

-- Pregunta: roma-imperio-6
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

-- Pregunta: roma-imperio-7
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

-- Pregunta: roma-imperio-8
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

-- Pregunta: roma-imperio-9
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

-- Pregunta: roma-imperio-10
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

-- Pregunta: roma-imperio-11
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

-- Pregunta: roma-imperio-12
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

-- Pregunta: roma-imperio-13
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

-- Pregunta: roma-imperio-14
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

-- Pregunta: roma-imperio-15
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

-- Pregunta: roma-imperio-16
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

-- Pregunta: roma-republica-1
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

-- Pregunta: roma-republica-2
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

-- Pregunta: roma-republica-3
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

-- Pregunta: roma-republica-4
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

-- Pregunta: roma-republica-5
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

-- Pregunta: roma-republica-6
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

-- Pregunta: roma-republica-7
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

-- Pregunta: roma-republica-8
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

-- Pregunta: roma-republica-9
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

-- Pregunta: roma-republica-10
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

-- Pregunta: roma-republica-11
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

-- Pregunta: roma-republica-12
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

-- Pregunta: roma-republica-13
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

-- Pregunta: roma-republica-14
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

-- Pregunta: roma-republica-15
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

-- Pregunta: roma-republica-16
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

-- Pregunta: segunda-guerra-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué los historiadores militares desconfían hoy del término guerra relámpago?', 'La etiqueta fue periodística. El éxito inicial dependió tanto de los errores del adversario como de la innovación propia.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque las campañas de 1939 y 1940 fueron en realidad muy lentas', false, 0),
  ('Porque no existía tal doctrina en los manuales alemanes y buena parte del ejército se movía a pie y con tracción animal', true, 1),
  ('Porque la inventaron los soviéticos en 1943', false, 2),
  ('Porque solo se aplicó en el frente del Pacífico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué explica mejor la derrota francesa de 1940?', 'Francia tenía más carros que Alemania y de mejor blindaje. Marc Bloch, oficial e historiador, dejó la mejor autopsia del desastre.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La inferioridad numérica y de calidad de los carros franceses', false, 0),
  ('Un colapso de mando: carros dispersos entre divisiones de infantería, doctrina defensiva y ruptura por las Ardenas', true, 1),
  ('La falta de apoyo militar británico en el continente', false, 2),
  ('La rendición inmediata del ejército tras la declaración de guerra', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué preveía el Plan del Hambre elaborado en 1941?', 'Es anterior a la invasión, igual que la Orden de los Comisarios: la guerra en el este fue criminal por diseño.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El racionamiento de alimentos en las ciudades alemanas', false, 0),
  ('Desviar los alimentos soviéticos a Alemania asumiendo la muerte por inanición de decenas de millones de personas', true, 1),
  ('La compra de trigo a Estados Unidos mediante Préstamo y Arriendo', false, 2),
  ('El bloqueo naval de los puertos británicos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la consecuencia estratégica del ataque a Pearl Harbor?', 'Alemania declaró la guerra a Estados Unidos cuatro días después, lo que selló la formación de la Gran Alianza.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La destrucción de los portaaviones estadounidenses del Pacífico', false, 0),
  ('Un éxito táctico que no alcanzó a los portaaviones y convirtió a Estados Unidos en beligerante', true, 1),
  ('La conquista inmediata de Hawái por Japón', false, 2),
  ('La firma de un armisticio entre Japón y Estados Unidos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvo Ultra en la batalla del Atlántico?', 'Se obtuvo en Bletchley Park a partir del trabajo previo de los criptógrafos polacos y se combinó con escoltas, aviación de largo alcance y radar.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue el nombre en clave del programa de construcción de escoltas', false, 0),
  ('Fue la inteligencia obtenida al leer los cifrados alemanes, decisiva para desviar los convoyes', true, 1),
  ('Fue el radar de superficie instalado en los submarinos alemanes', false, 2),
  ('Fue el plan de bombardeo de las bases submarinas francesas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proporción de sus bajas mortales sufrió la Wehrmacht en el frente oriental?', 'Cualquier relato que sitúe el centro de gravedad de la guerra europea en Normandía falsea la escala del esfuerzo militar.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Alrededor de una cuarta parte', false, 0),
  ('Alrededor de la mitad', false, 1),
  ('Alrededor del ochenta por ciento', true, 2),
  ('Prácticamente ninguna hasta 1944', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue la operación Bagration de 1944?', 'Coincidió deliberadamente con Normandía y mostró la madurez del arte operativo soviético, con engaño estratégico y explotación en profundidad.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El desembarco aliado en el sur de Francia', false, 0),
  ('La ofensiva soviética que destruyó el Grupo de Ejércitos Centro, un desastre alemán mayor que Stalingrado', true, 1),
  ('El plan alemán de contraataque en las Ardenas', false, 2),
  ('La campaña de bombardeo sobre las refinerías rumanas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene el llamado mito de la Wehrmacht limpia y por qué se ha desmontado?', 'El mito lo crearon memorias de posguerra escritas por oficiales que buscaban exculparse. La investigación desde los años ochenta lo ha desarmado.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el ejército alemán no combatió en el este, lo que contradicen las bajas', false, 0),
  ('Que el ejército regular actuó al margen de los crímenes de las SS, cuando participó en el hambre planificada, en el trato criminal a prisioneros y en represalias', true, 1),
  ('Que la Wehrmacht se opuso a Hitler desde 1938', false, 2),
  ('Que sus generales planificaron el atentado de julio de 1944', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró Robert Paxton sobre el régimen de Vichy?', 'Trabajó con archivos alemanes en 1972 y su libro obligó a reescribir la memoria francesa de la guerra.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue un escudo que protegió a Francia de una ocupación peor', false, 0),
  ('Que tuvo iniciativa política propia y legisló contra los judíos antes de que se lo exigieran', true, 1),
  ('Que careció de toda autoridad efectiva sobre el territorio', false, 2),
  ('Que colaboró únicamente en materia económica', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fueron los Einsatzgruppen?', 'Actuaron aldea por aldea entre 1941 y 1942 con apoyo de batallones de policía y auxiliares locales. Babi Yar es el caso más conocido.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las unidades de propaganda del ejército alemán', false, 0),
  ('Unidades móviles de las SS y la policía que fusilaron a más de un millón y medio de personas en el este', true, 1),
  ('Los batallones de trabajo forzoso de los campos de concentración', false, 2),
  ('Las brigadas antipartisanas creadas en 1944', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué decidió realmente la conferencia de Wannsee de enero de 1942?', 'Los fusilamientos masivos en el este llevaban medio año ejecutándose. Wannsee es una reunión de coordinación burocrática, no de decisión.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ordenó por primera vez el exterminio de los judíos europeos', false, 0),
  ('Coordinó administrativamente entre organismos un proceso de exterminio ya en marcha', true, 1),
  ('Aprobó el traslado de los judíos alemanes a Madagascar', false, 2),
  ('Estableció el sistema de guetos en Polonia', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es hoy la explicación mayoritaria sobre la decisión de exterminio?', 'Es la síntesis de Browning entre intencionalistas y funcionalistas, y la discusión se ha desplazado al papel de periferias y auxiliares locales.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un plan escrito y fechado en 1933', false, 0),
  ('Decisiones tomadas entre el verano y el otoño de 1941, con impulso desde arriba y propuestas desde abajo', true, 1),
  ('Una orden dictada por Himmler sin conocimiento de Hitler', false, 2),
  ('Una improvisación posterior a la derrota de Stalingrado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué concluyó Christopher Browning al estudiar el Batallón 101 de policía?', 'Goldhagen respondió atribuyéndolo a un antisemitismo eliminacionista específicamente alemán, tesis muy criticada por su selección de fuentes.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que sus miembros eran fanáticos seleccionados por su historial en el partido', false, 0),
  ('Que hombres corrientes con posibilidad real de negarse se convirtieron en asesinos por presión de grupo, obediencia y deshumanización', true, 1),
  ('Que la unidad se negó en bloque a participar en los fusilamientos', false, 2),
  ('Que solo participaron auxiliares no alemanes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto militar tuvo la campaña de bombardeo estratégico sobre Alemania?', 'La producción siguió creciendo hasta 1944, pero la falta de combustible fue lo que finalmente paralizó a la Luftwaffe y a los blindados.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Detuvo la producción bélica alemana ya en 1942', false, 0),
  ('Desvió artillería, cazas e industria a la defensa del territorio y destruyó la producción de combustible sintético', true, 1),
  ('No tuvo ningún efecto sobre el esfuerzo de guerra alemán', false, 2),
  ('Provocó el hundimiento inmediato de la moral civil', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Hasegawa, ¿qué pesó más en la decisión japonesa de rendirse?', 'La investigación reciente tiende a explicar la rendición por la combinación de las bombas y la entrada soviética en tres días.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El bombardeo incendiario de Tokio de marzo de 1945', false, 0),
  ('La declaración de guerra soviética del 8 de agosto, que cerró la vía de una mediación negociada', true, 1),
  ('El bloqueo submarino estadounidense', false, 2),
  ('La pérdida de Okinawa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: segunda-guerra-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué principio jurídico estableció el proceso de Núremberg?', 'De ahí derivan la Convención sobre el Genocidio de 1948 y el derecho penal internacional posterior.', 3, true
  from public.topics where slug = 'segunda-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La responsabilidad colectiva del pueblo alemán', false, 0),
  ('La responsabilidad penal individual por crímenes de guerra y contra la humanidad, sin que valga la obediencia debida', true, 1),
  ('La prohibición del bombardeo de ciudades', false, 2),
  ('La indemnización obligatoria a los Estados ocupados', false, 3)
) as opcion(label, is_correct, position);

commit;
