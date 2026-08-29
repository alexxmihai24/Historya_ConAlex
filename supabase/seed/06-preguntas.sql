-- Historya con Alex · contenido publicable — parte 06 de 7 (preguntas)
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

-- questions no tiene clave natural única, así que se borran y se reinsertan
-- por tema. question_options cae en cascada por su clave foránea.
--
-- OJO: este borrado va al principio de las preguntas. Si los archivos se
-- ejecutan desordenados, las preguntas insertadas antes de esta línea se
-- pierden. Ejecútalos en orden numérico.
delete from public.questions where topic_id in (select id from public.topics where slug in ('absolutismo', 'africa', 'america-precolombina', 'andalus', 'bizancio', 'china-imperial', 'crisis-siglo-xiv', 'descubrimientos', 'egipto', 'entreguerras', 'espana-siglo-xx', 'feudalismo', 'gran-guerra', 'grecia', 'guerra-fria', 'helenismo', 'ilustracion', 'imperialismo', 'india', 'industrializacion', 'islam', 'japon', 'mesopotamia', 'mundo-actual', 'plena-edad-media', 'prehistoria', 'reforma', 'renacimiento', 'revolucion-cientifica', 'revolucion-francesa', 'revolucion-rusa', 'revoluciones-liberales', 'roma-imperio', 'roma-republica', 'segunda-guerra'));

-- Pregunta: absolutismo-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa la categoría de «monarquía compuesta» de John Elliott?', 'Era la forma normal del poder moderno, no una anomalía. Carlos V reinaba con títulos distintos y obligaciones distintas en cada uno de sus territorios.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una monarquía gobernada conjuntamente por varios miembros de la misma dinastía', false, 0),
  ('Un agregado de reinos y territorios bajo un mismo soberano, cada uno con sus leyes, cortes y privilegios propios', true, 1),
  ('Una monarquía electiva sometida al control de una dieta nobiliaria', false, 2),
  ('La unión de la corona con la jerarquía eclesiástica en un solo cuerpo político', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'En el vocabulario jurídico del siglo XVII, ¿qué significaba que un rey fuese «absoluto»?', '*Legibus solutus*. El propio Bodin negaba al soberano el derecho de confiscar bienes sin causa o alterar la ley de sucesión.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que su voluntad no tenía ningún límite y podía disponer libremente de vidas y bienes', false, 0),
  ('Que estaba liberado de la ley positiva anterior, pero sujeto a la ley divina, natural y fundamental del reino', true, 1),
  ('Que reunía en su persona el poder civil y el sacerdocio', false, 2),
  ('Que gobernaba sin ministros ni consejos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué proyecto de Olivares desencadenó las rebeliones de 1640?', 'Chocó con la lógica pactista de Cataluña y Portugal. Portugal se independizó; Cataluña volvió en 1652 con sus constituciones formalmente intactas.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La expulsión de los moriscos', false, 0),
  ('La Unión de Armas, que exigía a cada reino hombres y dinero en proporción a su población', true, 1),
  ('La imposición del castellano como lengua administrativa única', false, 2),
  ('La supresión de las Cortes de Castilla', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la venalidad de oficios limitaba el poder del rey que la practicaba?', 'La corona cobraba por adelantado y perdía capacidad de mandar sobre sus propios administradores. Los intendentes revocables nacieron para sortear ese bloqueo.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque los cargos vendidos quedaban exentos de impuestos', false, 0),
  ('Porque el comprador se convertía en propietario inamovible del cargo y lo transmitía a sus herederos', true, 1),
  ('Porque los oficios se vendían solo a extranjeros', false, 2),
  ('Porque el precio de los cargos estaba fijado por los parlamentos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué desplazó Geoffrey Parker la tesis de la revolución militar de Michael Roberts?', 'La *trace italienne* multiplicó los efectivos necesarios para sitiar y guarnecer. El ejército de Flandes pasó de unos diez mil hombres a más de ochenta mil.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Situó el motor del cambio en la fortificación abaluartada y en los asedios prolongados', true, 0),
  ('Negó que hubiera existido ningún cambio militar significativo', false, 1),
  ('Atribuyó la transformación exclusivamente a la artillería de campaña francesa', false, 2),
  ('Retrasó todo el proceso al siglo XVIII', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué decisión tomó Luis XIV en 1661 a la muerte de Mazarino?', 'Separó el honor, que dejó a los grandes, del poder efectivo, que puso en manos de administradores dependientes de su voluntad. Versalles llegó en 1682.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Convocó los Estados Generales para legitimar su gobierno', false, 0),
  ('Gobernó personalmente, sin nombrar primer ministro, apoyándose en secretarios de familias de servicio', true, 1),
  ('Delegó el gobierno en el Parlamento de París', false, 2),
  ('Trasladó de inmediato la corte a Versalles', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Norbert Elias, ¿qué función cumplía la etiqueta de Versalles?', 'La lectura tiene límites: no toda la nobleza vivía en la corte, muchas casas conservaron poder provincial y Versalles era también un mercado de pensiones.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ahorrar gastos de representación a la corona', false, 0),
  ('Convertir a la nobleza en un grupo dependiente que competía por signos de favor distribuidos solo por el rey', true, 1),
  ('Sustituir la administración civil por la doméstica', false, 2),
  ('Impedir el acceso de la burguesía a los cargos públicos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la consecuencia económica más citada de la revocación del Edicto de Nantes en 1685?', 'Llevaron sus oficios y su propaganda antifrancesa a Holanda, Inglaterra, Brandeburgo y Suiza. Una demostración de fuerza que salió cara.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La quiebra inmediata del Banco Real', false, 0),
  ('La emigración de entre 200.000 y 300.000 hugonotes, muchos artesanos y comerciantes cualificados, a países rivales', true, 1),
  ('El fin del comercio francés con el Levante', false, 2),
  ('La devaluación de la libra tornesa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostuvo William Beik a partir del estudio del Languedoc?', 'La «colaboración social» explica bien la estabilidad del sistema. Se le objeta que explica peor los momentos de ruptura.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la monarquía destruyó el poder de las élites provinciales', false, 0),
  ('Que la corona y los notables locales colaboraron: dinero y obediencia a cambio de cargos, exenciones y respaldo armado', true, 1),
  ('Que las provincias del sur permanecieron al margen de la fiscalidad real', false, 2),
  ('Que el absolutismo francés fue una copia del modelo español', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la paradoja fiscal que señala John Brewer al comparar Inglaterra y Francia?', 'El consentimiento parlamentario y el Banco de Inglaterra de 1694 hicieron creíble la deuda. El consentimiento resultó ser una tecnología fiscal superior a la orden.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Francia recaudaba más per cápita pese a su desorden administrativo', false, 0),
  ('La Inglaterra parlamentaria recaudaba más per cápita y se endeudaba más barato que la Francia absoluta', true, 1),
  ('Ninguno de los dos Estados logró recaudar lo suficiente para sostener sus guerras', false, 2),
  ('Inglaterra financiaba sus guerras exclusivamente con el comercio colonial', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hicieron los Decretos de Nueva Planta?', 'Convirtieron una monarquía compuesta en una unión accesoria. Es la excepción española a la regla de negociación con las periferias.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Restablecieron los fueros vascos y navarros', false, 0),
  ('Suprimieron las instituciones propias de la Corona de Aragón e impusieron el modelo castellano por derecho de conquista', true, 1),
  ('Crearon un parlamento común para toda la Monarquía', false, 2),
  ('Repartieron las colonias americanas entre los reinos peninsulares', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era el liberum veto de la república polaco-lituana?', 'Bloqueó la fiscalidad y el ejército permanente. Entre 1772 y 1795 los vecinos se repartieron el país.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El derecho del rey a vetar los acuerdos de la dieta', false, 0),
  ('La facultad de un solo diputado de anular la dieta entera y sus acuerdos', true, 1),
  ('La exención fiscal universal de la nobleza', false, 2),
  ('El derecho de las ciudades a rechazar el reclutamiento', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué paradoja subraya Perry Anderson sobre el absolutismo de Europa oriental?', 'Pedro I ligó el estatus nobiliario al servicio del Estado mediante la tabla de rangos mientras la servidumbre campesina se agravaba.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue más débil que el occidental pese a disponer de más territorio', false, 0),
  ('Que la construcción del Estado moderno coincidió allí con el endurecimiento de la servidumbre, no con su desaparición', true, 1),
  ('Que se apoyó en las ciudades y no en la nobleza', false, 2),
  ('Que renunció a mantener ejércitos permanentes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distinción manejaban, según Henshall, los propios contemporáneos?', 'La oposición entre absolutismo continental y constitucionalismo inglés sería, en su lectura, una construcción retrospectiva del siglo XIX.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Entre monarquía absoluta y monarquía constitucional', false, 0),
  ('Entre monarquía absoluta, legítima y respetuosa con los cuerpos intermedios, y despotismo o tiranía', true, 1),
  ('Entre monarquía hereditaria y monarquía electiva', false, 2),
  ('Entre monarquía nacional y monarquía compuesta', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué novedad fiscal introdujeron la capitación de 1695 y el diezmo real de 1710 en Francia?', 'La guerra continua desde 1672 obligó a tocar el privilegio fiscal. Es el primer aviso del problema que estallará en 1789.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Suprimieron los impuestos indirectos sobre la sal', false, 0),
  ('Alcanzaban por primera vez a los grupos privilegiados, no solo al tercer estado', true, 1),
  ('Transferían la recaudación a los intendentes en exclusiva', false, 2),
  ('Sustituían el pago en dinero por el pago en especie', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: absolutismo-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la fundación teológica del poder por Bossuet resultó menos duradera que la fundación pactista de Hobbes?', 'Hobbes justificaba un poder absoluto con argumentos laicos. Locke aceptó la premisa del pacto y extrajo la conclusión contraria en 1689.', 3, true
  from public.topics where slug = 'absolutismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque Bossuet escribió en latín y no fue leído', false, 0),
  ('Porque lo que se funda en un pacto puede discutirse en sus términos, y esa vía quedó abierta a Locke y a la crítica ilustrada', true, 1),
  ('Porque Hobbes defendía la monarquía limitada', false, 2),
  ('Porque la Iglesia condenó la obra de Bossuet', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró la excavación de Jenne-Jeno en el delta interior del Níger?', 'La arqueología africana ha refutado por sí sola la tesis de que los Estados y las ciudades llegaron siempre de fuera.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la urbanización llegó al Sahel con el comercio islámico', false, 0),
  ('Que existían ciudades de miles de habitantes desde el siglo III, sin relación con estímulos externos', true, 1),
  ('Que el yacimiento fue construido por comerciantes fenicios', false, 2),
  ('Que la región estuvo despoblada hasta el siglo XI', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué método propuso Jan Vansina para trabajar con tradición oral?', 'Los jeli o griots eran especialistas profesionales con formación y responsabilidad hereditaria, no narradores espontáneos.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Descartarla salvo cuando coincida con fuentes escritas', false, 0),
  ('Aplicar una crítica análoga a la textual: género, cadena de transmisión, función social y deformaciones sistemáticas', true, 1),
  ('Registrarla sin intervención y publicarla literalmente', false, 2),
  ('Sustituirla por reconstrucciones lingüísticas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué singularidad tuvo Aksum en el siglo IV?', 'Mani lo situó entre los cuatro grandes imperios del mundo, junto a Roma, Persia y China, y sus estelas están entre las mayores piedras talladas jamás erigidas.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue el primer Estado africano en adoptar el islam', false, 0),
  ('Su rey Ezana se convirtió al cristianismo, antes que la mayoría de Europa, y el reino acuñó moneda propia', true, 1),
  ('Fue conquistado por el imperio romano', false, 2),
  ('Careció de escritura propia hasta el siglo XII', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué son las iglesias de Lalibela?', 'Se tallaron bajo la dinastía Zagüe, tras la caída de Jerusalén en manos musulmanas, con ventanas, columnas y sistemas de drenaje.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Basílicas construidas por misioneros portugueses en el siglo XVI', false, 0),
  ('Once templos excavados hacia abajo en la roca viva en los siglos XII y XIII, concebidos como una nueva Jerusalén', true, 1),
  ('Monasterios rupestres de origen copto egipcio', false, 2),
  ('Mezquitas reconvertidas tras la conquista cristiana', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué función cumplía el Kebra Nagast en Etiopía?', 'Es una construcción ideológica comparable a cualquier mito dinástico europeo, y funcionó durante setecientos años, hasta 1974.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Era un código legal aplicado por los tribunales', false, 0),
  ('Legitimaba a la dinastía salomónica haciéndola descender de Salomón y la reina de Saba', true, 1),
  ('Recogía la liturgia de la Iglesia etíope', false, 2),
  ('Narraba la conquista musulmana del siglo XVI', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué productos articulaban el comercio transahariano?', 'Los Estados del Sahel se enriquecieron gravando ese intercambio, transformado por el uso del camello.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Cereales del norte y ganado del sur', false, 0),
  ('Sal del desierto y oro de las cuencas fluviales del sur, además de cobre, tejidos, libros y personas esclavizadas', true, 1),
  ('Especias índicas y porcelana china', false, 2),
  ('Marfil y madera de la selva ecuatorial', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué medida monetaria describe al-Bakri en el reino de Ghana?', 'Es política monetaria deliberada en el siglo XI, en un Estado que la historiografía europea describió durante siglos como tribal.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La acuñación de moneda de oro con el nombre del rey', false, 0),
  ('El monopolio real sobre las pepitas, que garantizaba el valor del polvo de oro que circulaba como moneda', true, 1),
  ('La prohibición del uso del oro en el comercio interior', false, 2),
  ('La emisión de papel moneda respaldado por sal', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué valor tiene la tradición de Kurukan Fuga?', 'Su valor como documento histórico literal es discutible; su valor como fuente sobre cómo se concebía el poder no lo es.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Es un documento escrito contemporáneo de la fundación de Malí', false, 0),
  ('Es una fuente sobre la cultura política del imperio, con reparto de funciones entre linajes y obligaciones del gobernante', true, 1),
  ('Es una crónica portuguesa del siglo XVI', false, 2),
  ('Es un tratado de derecho islámico maliki', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es valiosa la descripción de Malí que dejó Ibn Battuta?', 'Sus reproches revelan una sociedad que había integrado el islam sin renunciar a sus propias formas.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque idealiza el imperio y confirma la tradición oral', false, 0),
  ('Porque no idealiza: elogia la seguridad y la justicia y se escandaliza de prácticas que le parecían impropias de musulmanes', true, 1),
  ('Porque es la única fuente escrita africana del período', false, 2),
  ('Porque describe con detalle las minas de oro del sur', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue Tombuctú en los siglos XV y XVI?', 'León el Africano escribió que allí los libros dejaban más beneficio que ninguna otra mercancía. Cientos de miles de manuscritos se conservan hoy en Malí.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una fortaleza militar sin población civil', false, 0),
  ('Un centro intelectual del mundo islámico con enseñanza superior y una industria del libro muy rentable', true, 1),
  ('Un puerto de la costa atlántica dedicado a la trata', false, 2),
  ('La capital administrativa del imperio de Malí', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo cayó el imperio Songhay en 1591?', 'Unos cuatro mil hombres con arcabuces y cañones vencieron a una fuerza mucho mayor sin armas de fuego. La conquista no produjo un imperio estable.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Por una revuelta interna de los askias', false, 0),
  ('Por la derrota en Tondibi ante un ejército saadí que cruzó el desierto con armas de fuego', true, 1),
  ('Por la conquista portuguesa desde la costa atlántica', false, 2),
  ('Por una sequía prolongada que despobló el Níger', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué han demostrado la arqueología y la lingüística sobre las ciudades swahilis?', 'Los hallazgos de porcelana Song y Ming muestran el alcance de esa red, y una flota china llegó a Malindi en el siglo XV.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fueron colonias árabes y persas implantadas sobre población africana', false, 0),
  ('Que son una civilización africana que adoptó el islam, con continuidad material desde asentamientos bantúes anteriores', true, 1),
  ('Que se fundaron tras la llegada de los portugueses', false, 2),
  ('Que no tuvieron relación con el comercio del índico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era Gran Zimbabue?', 'Su riqueza venía del ganado, del oro y del comercio con la costa, como prueban los hallazgos de vidrio persa y porcelana china en el yacimiento.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una fortaleza portuguesa del siglo XVI', false, 0),
  ('Una ciudad de hasta veinte mil habitantes con recintos de granito sin argamasa, construida entre los siglos XIII y XV', true, 1),
  ('Un santuario religioso sin población estable', false, 2),
  ('Un puerto comercial en la desembocadura del Zambeze', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con la interpretación del origen de Gran Zimbabue?', 'Peter Garlake lo confirmó después y fue presionado por el régimen de Rodesia. El país independiente tomó en 1980 el nombre del yacimiento.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se resolvió pacíficamente en el siglo XIX a favor del origen africano', false, 0),
  ('Caton-Thompson demostró en 1929 que era obra africana medieval y la administración colonial siguió negándolo durante medio siglo', true, 1),
  ('La datación por radiocarbono resultó imposible por falta de materia orgánica', false, 2),
  ('Se atribuyó a los portugueses hasta la independencia del país', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aporta la correspondencia de Afonso I del Kongo?', 'El Kongo mantuvo desde 1483 una relación diplomática con Portugal, con embajadas y correspondencia real conservada.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La primera descripción europea del interior africano', false, 0),
  ('Una voz africana contemporánea que denuncia por escrito el efecto destructivo del comercio de esclavos sobre su propio reino', true, 1),
  ('Un tratado comercial que prohibía la trata', false, 2),
  ('La crónica oficial de la conversión del reino al cristianismo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: africa-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se relacionan las posiciones de Rodney y de Thornton sobre la trata?', 'Nunn ha añadido una medición econométrica que correlaciona la intensidad de la trata por región con niveles actuales de renta y confianza social.', 3, true
  from public.topics where slug = 'africa'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se excluyen: si hubo agencia africana no hubo daño estructural', false, 0),
  ('Son compatibles si se distingue entre quién decidía y quién sufría, y constatar la participación de élites no atenúa la responsabilidad de quien demandaba', true, 1),
  ('Ambas niegan efectos de largo plazo sobre las economías africanas', false, 2),
  ('Thornton sostiene que la trata no existió a gran escala', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se considera América un caso decisivo para la historia comparada?', 'Que llegara a resultados comparables partiendo de cero prueba que esas invenciones no son un accidente cultural europeo.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque su poblamiento fue el más reciente del planeta', false, 0),
  ('Porque desarrolló agricultura, ciudades, Estado y escritura de forma independiente, sin contacto con Eurasia', true, 1),
  ('Porque conservó economías de caza y recolección hasta 1492', false, 2),
  ('Porque recibió influencias asiáticas continuas por vía marítima', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué importancia tuvo el yacimiento de Monte Verde, en Chile?', 'Su datación en torno al 14500 a. C. obligó a abandonar el modelo que hacía de Clovis el punto de partida.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Confirmó que la cultura Clovis fue la primera del continente', false, 0),
  ('Documentó una ocupación anterior a Clovis y abrió la hipótesis de una ruta costera del Pacífico', true, 1),
  ('Demostró el origen africano del poblamiento americano', false, 2),
  ('Fechó la domesticación del maíz en el sur del continente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es nutricional y agronómicamente notable la milpa?', 'A ella se añadió la nixtamalización, sin la cual una dieta basada en maíz produce pelagra.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque permite tres cosechas anuales de maíz', false, 0),
  ('Porque combina maíz, frijol y calabaza: el frijol fija nitrógeno, la calabaza cubre el suelo y el conjunto es nutricionalmente completo', true, 1),
  ('Porque no requiere riego en ninguna región', false, 2),
  ('Porque sustituye a la ganadería como fuente de proteína animal', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia no evidente tuvo la ausencia de grandes animales domésticos en América?', 'También dejó sin aplicación práctica a la rueda, conocida en juguetes mesoamericanos, en un terreno además muy accidentado.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Impidió el desarrollo de la agricultura intensiva', false, 0),
  ('Dejó a las poblaciones sin inmunidad frente a las enfermedades zoonóticas que Eurasia llevaba milenios padeciendo', true, 1),
  ('Obligó a abandonar la vida urbana', false, 2),
  ('Retrasó la domesticación del maíz varios milenios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué rasgos comparten las sociedades del área cultural mesoamericana?', 'Esa unidad no implica un imperio: implica siglos de intercambio, guerra y préstamo entre pueblos distintos.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una lengua común y un gobierno unificado', false, 0),
  ('El calendario doble de 260 y 365 días, el juego de pelota ritual, la pirámide escalonada y el cómputo con base veinte', true, 1),
  ('La ausencia de escritura y de astronomía', false, 2),
  ('La economía basada exclusivamente en la caza', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué particularidad presenta Teotihuacán respecto de otras capitales antiguas?', 'Superó los cien mil habitantes, con traza en cuadrícula y conjuntos residenciales donde vivían artesanos de otras regiones.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que carecía de arquitectura monumental', false, 0),
  ('Que no se ha identificado un retrato de gobernante individual, lo que ha llevado a proponer formas de gobierno colectivo', true, 1),
  ('Que estaba habitada solo por sacerdotes', false, 2),
  ('Que fue fundada por los mexicas en el siglo XIV', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué cambió el desciframiento de la escritura maya?', 'Es el único sistema completo del continente, logosilábico, y su desciframiento avanzó desde los años cincuenta con Knórozov, Proskuriakoff, Schele y Stuart.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Confirmó la imagen de una sociedad pacífica gobernada por astrónomos', false, 0),
  ('Reveló dinastías con nombres y fechas, guerras entre ciudades, alianzas y capturas de reyes rivales', true, 1),
  ('Demostró que los textos eran solo calendáricos', false, 2),
  ('Probó que la escritura era de origen olmeca', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objeción se hace hoy al término colapso maya?', 'La explicación predominante combina sequía como detonante con guerra endémica y presión demográfica sobre suelos frágiles.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las ciudades del sur nunca fueron abandonadas', false, 0),
  ('Que la población y la cultura no desaparecieron: se reorganizaron hacia el norte y siguen existiendo. Lo que colapsó fue una forma política', true, 1),
  ('Que la sequía no está documentada en ningún registro', false, 2),
  ('Que el abandono ocurrió tras la llegada de los españoles', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo dominaban los mexicas los territorios sometidos?', 'El peso del tributo y del sacrificio generó un resentimiento entre los pueblos sometidos que resultó decisivo en 1519.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Mediante administración directa con funcionarios nombrados desde Tenochtitlan', false, 0),
  ('Mediante tributo: los pueblos conservaban a sus señores y entregaban bienes y trabajo', true, 1),
  ('Mediante colonización con población procedente del valle de México', false, 2),
  ('Mediante alianzas matrimoniales exclusivamente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizaba a Tenochtitlan en 1519?', 'Era mayor que cualquier ciudad europea del momento salvo quizá Constantinopla, y las chinampas eran plataformas de cultivo de altísima productividad.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un asentamiento disperso de unos diez mil habitantes', false, 0),
  ('Entre ciento cincuenta y doscientos mil habitantes, chinampas, acueducto de agua potable, un gran mercado y escuelas obligatorias', true, 1),
  ('Una ciudad amurallada sin agricultura propia', false, 2),
  ('Una capital sin comercio, sostenida solo por el tributo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo debe tratarse la cuestión del sacrificio humano mexica?', 'Su lógica era cosmológica y estaba ligada a una guerra ritualizada. Las cifras de las crónicas son propagandísticas y la arqueología del Templo Mayor las ha acotado.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Negando su existencia por tratarse de propaganda española', false, 0),
  ('Reconociéndolo como práctica central y a la vez acotando las cifras con arqueología, sabiendo que fue el argumento que legitimó la conquista', true, 1),
  ('Considerándolo la causa única del hundimiento del imperio', false, 2),
  ('Atribuyéndolo exclusivamente a los pueblos sometidos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consiste el control vertical descrito por John Murra?', 'Es la respuesta andina a un territorio donde en pocas decenas de kilómetros se pasa del desierto costero a los cuatro mil metros.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En la jerarquía administrativa del Estado inca', false, 0),
  ('En mantener colonias permanentes en varios pisos ecológicos para obtener productos de distintas altitudes sin recurrir a mercados', true, 1),
  ('En la construcción de terrazas de cultivo en las laderas', false, 2),
  ('En el sistema de caminos que unía la costa con la sierra', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué han demostrado las excavaciones de Caral y Norte Chico?', 'Son contemporáneas de las pirámides de Egipto y su economía combinaba agricultura de algodón y pesca.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la civilización andina comenzó con los incas', false, 0),
  ('Que hubo arquitectura monumental y planificación urbana desde el tercer milenio antes de nuestra era, sin cerámica', true, 1),
  ('Que la costa peruana estuvo deshabitada hasta el año 1000', false, 2),
  ('Que Chavín fue el primer centro ceremonial del continente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Con qué instrumentos administró el Tahuantinsuyu a millones de personas?', 'Sin escritura alfabética, sin moneda, sin mercados desarrollados y sin rueda, con una red de unos cuarenta mil kilómetros de caminos.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Escritura alfabética, moneda y mercados regionales', false, 0),
  ('Quipus de notación decimal, organización decimal de la población y trabajo por turnos mediante la mita', true, 1),
  ('Un sistema de tributo en oro y plata', false, 2),
  ('Una burocracia reclutada por examen', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Matthew Restall, ¿qué factor fue decisivo en la caída de Tenochtitlan?', 'La idea de que los mexicas tomaron a Cortés por un dios es una construcción posterior, y los arcabuces de la época eran lentos y escasos.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La superioridad absoluta del armamento de fuego español', false, 0),
  ('Las alianzas indígenas: decenas de miles de tlaxcaltecas y otros pueblos combatieron por sus propios motivos', true, 1),
  ('La creencia mexica de que Cortés era un dios', false, 2),
  ('La superioridad naval española en el lago', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: america-precolombina-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se explica hoy el desplome demográfico posterior a 1492?', 'El consenso maneja un rango de cuarenta a sesenta millones en 1492 y caídas de hasta el noventa por ciento en el siglo posterior al contacto.', 3, true
  from public.topics where slug = 'america-precolombina'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como resultado exclusivo de las epidemias, sin relación con la conquista', false, 0),
  ('Los patógenos explican la escala, pero su letalidad se multiplicó por la guerra, el trabajo forzoso y la ruptura de los sistemas agrarios', true, 1),
  ('Como consecuencia de migraciones voluntarias hacia el interior', false, 2),
  ('Como un descenso menor, dentro de la variación demográfica normal', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: andalus-1
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

-- Pregunta: andalus-2
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

-- Pregunta: andalus-3
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

-- Pregunta: andalus-4
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

-- Pregunta: andalus-5
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

-- Pregunta: andalus-6
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

-- Pregunta: andalus-7
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

-- Pregunta: andalus-8
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

-- Pregunta: andalus-9
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

-- Pregunta: andalus-10
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

-- Pregunta: andalus-11
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

-- Pregunta: andalus-12
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

-- Pregunta: andalus-13
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

-- Pregunta: andalus-14
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

-- Pregunta: andalus-15
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

-- Pregunta: andalus-16
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

-- Pregunta: bizancio-1
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

-- Pregunta: bizancio-2
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

-- Pregunta: bizancio-3
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

-- Pregunta: bizancio-4
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

-- Pregunta: bizancio-5
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

-- Pregunta: bizancio-6
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

-- Pregunta: bizancio-7
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

-- Pregunta: bizancio-8
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

-- Pregunta: bizancio-9
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

-- Pregunta: bizancio-10
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

-- Pregunta: bizancio-11
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

-- Pregunta: bizancio-12
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

-- Pregunta: bizancio-13
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

-- Pregunta: bizancio-14
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

-- Pregunta: bizancio-15
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

-- Pregunta: china-imperial-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué doctrina permitió a Qin unificar China en 221 a. C.?', 'El imperio Qin duró quince años y su maquinaria administrativa, dos milenios. Los Han le añadieron la legitimación confuciana.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El confucianismo de Estado', false, 0),
  ('El legismo: leyes uniformes, castigos severos y recompensa por mérito medible', true, 1),
  ('El budismo llegado de Asia central', false, 2),
  ('El neoconfucianismo de Zhu Xi', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué doble función cumple el mandato del Cielo?', 'Es una teoría del poder que incorpora su propia cláusula de revolución: permite que un campesino victorioso funde una dinastía legítima.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Legitima al emperador y prohíbe expresamente la rebelión', false, 0),
  ('Legitima a la dinastía mientras gobierne con justicia y autoriza a derribarla cuando la pierde', true, 1),
  ('Establece la sucesión hereditaria por primogenitura', false, 2),
  ('Concede la autoridad a los funcionarios y no al emperador', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué transformación religiosa se produjo entre los siglos III y VI?', 'La síntesis cultural china posterior es resultado de esa mezcla, no su punto de partida.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La adopción del cristianismo nestoriano como religión de Estado', false, 0),
  ('La llegada del budismo desde Asia central, su traducción a un vocabulario chino y la organización del taoísmo como iglesia', true, 1),
  ('La prohibición de todas las religiones extranjeras', false, 2),
  ('La imposición del confucianismo como culto obligatorio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema resolvió el Gran Canal construido bajo los Sui?', 'Costó una movilización de trabajo forzoso enorme, contribuyó a derribar a la dinastía que lo construyó y sostuvo a todas las siguientes.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La defensa de la frontera norte frente a los pueblos esteparios', false, 0),
  ('La logística de llevar el arroz del Yangtsé a las capitales y los ejércitos del norte', true, 1),
  ('El riego de las llanuras del sur', false, 2),
  ('La comunicación con las rutas de la seda', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué tipo de élite produjo el sistema de exámenes?', 'No existía nada equivalente en ningún otro imperio de la época, aunque el acceso real estaba condicionado por la riqueza familiar.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una meritocracia plenamente igualitaria abierta a todas las clases', false, 0),
  ('Una élite de gobierno definida por la cultura letrada y no por la sangre, aunque preparar a un candidato exigía ocio y maestros costosos', true, 1),
  ('Una aristocracia hereditaria con acceso reservado', false, 2),
  ('Un cuerpo de funcionarios de origen exclusivamente militar', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué innovaciones se generalizaron en China bajo la dinastía Song?', 'Todas son anteriores al año 1300. La pregunta histórica no es por qué China no innovó, sino por qué esa innovación tuvo otro desenlace.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La rueda hidráulica y el arado de vertedera', false, 0),
  ('Papel moneda, brújula náutica, pólvora militar e imprenta de tipos móviles', true, 1),
  ('La máquina de vapor y el telar mecánico', false, 2),
  ('El vidrio óptico y el telescopio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene la trampa del alto nivel de equilibrio de Mark Elvin?', 'Otras explicaciones señalan la pérdida del norte en 1127 y la reorientación de los recursos hacia la defensa.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la población china era demasiado escasa para sostener la industrialización', false, 0),
  ('Que una agricultura muy productiva y mano de obra barata eliminaron el incentivo para sustituir trabajo por máquinas', true, 1),
  ('Que el Estado prohibió las innovaciones técnicas', false, 2),
  ('Que faltaban materias primas en el territorio chino', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era el propósito de las expediciones de Zheng He?', 'Sus flotas eran mucho mayores que cualquier cosa que Europa botara hasta el siglo XIX, pero no eran viajes de conquista ni de exploración comercial.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Conquistar territorios en África oriental', false, 0),
  ('Desplegar prestigio para integrar Estados en el sistema tributario chino', true, 1),
  ('Buscar una ruta comercial hacia Europa', false, 2),
  ('Establecer colonias de poblamiento en el índico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué explicación predomina hoy sobre el abandono de las expediciones navales?', 'Las prohibiciones marítimas posteriores no cerraron el comercio: lo empujaron a manos privadas y a menudo ilegales.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un rechazo cultural chino a todo contacto exterior', false, 0),
  ('Su coste sin ingresos, la lucha entre eunucos y burocracia por el tesoro y el retorno de la amenaza mongola en el norte', true, 1),
  ('La derrota de la flota china en el océano Índico', false, 2),
  ('La prohibición impuesta por comerciantes portugueses', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvo la plata americana en la China Ming del siglo XVI?', 'Llegaba por Manila desde 1571 y por el comercio portugués. La China Ming estaba plenamente integrada en la primera economía global.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno: el imperio estaba cerrado al comercio exterior', false, 0),
  ('Entró en cantidades enormes porque China la valoraba más que ningún otro mercado, y el Estado pasó a cobrar impuestos en plata', true, 1),
  ('Se prohibió su circulación por decreto imperial', false, 2),
  ('Se usó exclusivamente para acuñar moneda de prestigio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo gobernaron los Qing un imperio multiétnico?', 'Traían una experiencia de gobierno sobre poblaciones mixtas y una organización militar y social propia, los estandartes.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Imponiendo la lengua y las costumbres manchúes a toda la población', false, 0),
  ('Presentándose como emperadores confucianos ante los han, kanes ante los mongoles y protectores del budismo tibetano', true, 1),
  ('Delegando el gobierno en administradores europeos', false, 2),
  ('Dividiendo el imperio en Estados independientes tributarios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ha aportado la New Qing History?', 'Ho Ping-ti defendió la centralidad de la sinización, y la polémica conserva resonancia política actual.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La demostración de que los Qing se sinizaron por completo', false, 0),
  ('El uso de fuentes en manchú para mostrar una identidad conservada y un carácter multiétnico deliberado del imperio', true, 1),
  ('La datación exacta de la conquista de Pekín', false, 2),
  ('La revisión a la baja de las cifras de población del siglo XVIII', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué estableció el Tratado de Nankín de 1842?', 'Fue el primero de una serie de acuerdos que la historiografía china llama tratados desiguales.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La apertura de puertos, la cesión de Hong Kong, aranceles fijados desde fuera y la extraterritorialidad', true, 0),
  ('La prohibición definitiva del comercio del opio', false, 1),
  ('La entrada de China en el sistema de las potencias europeas en pie de igualdad', false, 2),
  ('La devolución de Taiwán al imperio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué magnitud tuvo la rebelión Taiping?', 'La dirigió un letrado fracasado que se proclamó hermano menor de Jesucristo y llegó a controlar el valle del Yangtsé.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una revuelta local sofocada en meses', false, 0),
  ('Una guerra civil de catorce años con entre veinte y treinta millones de muertos, la más letal del siglo XIX', true, 1),
  ('Un golpe palaciego sin consecuencias sociales', false, 2),
  ('Una guerra fronteriza contra los mongoles', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué fue significativa la abolición de los exámenes en 1905?', 'El imperio cayó siete años después, en la revolución de 1911 y la abdicación de 1912.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque permitió el acceso de las mujeres a la administración', false, 0),
  ('Porque rompió el vínculo entre el estudio de los clásicos y el poder, y la élite letrada dejó de tener motivos para sostener la dinastía', true, 1),
  ('Porque implantó un sistema electoral', false, 2),
  ('Porque obligó a formar a los funcionarios en Japón', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: china-imperial-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene Kenneth Pomeranz sobre la Gran Divergencia?', 'El debate ha desplazado definitivamente la explicación por superioridad europea de largo plazo, y con ella la vieja tesis del despotismo oriental.', 3, true
  from public.topics where slug = 'china-imperial'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Europa fue superior a Asia desde el siglo XV', false, 0),
  ('Que hasta mediados del XVIII las regiones más avanzadas eran comparables y la diferencia la marcaron el carbón accesible y los recursos coloniales', true, 1),
  ('Que China nunca alcanzó niveles de vida europeos', false, 2),
  ('Que la divergencia se debió a la superioridad militar europea', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: crisis-siglo-xiv-1
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

-- Pregunta: crisis-siglo-xiv-2
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

-- Pregunta: crisis-siglo-xiv-3
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

-- Pregunta: crisis-siglo-xiv-4
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

-- Pregunta: crisis-siglo-xiv-5
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

-- Pregunta: crisis-siglo-xiv-6
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

-- Pregunta: crisis-siglo-xiv-7
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

-- Pregunta: crisis-siglo-xiv-8
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

-- Pregunta: crisis-siglo-xiv-9
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

-- Pregunta: crisis-siglo-xiv-10
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

-- Pregunta: crisis-siglo-xiv-11
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

-- Pregunta: crisis-siglo-xiv-12
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

-- Pregunta: crisis-siglo-xiv-13
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

-- Pregunta: crisis-siglo-xiv-14
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

-- Pregunta: crisis-siglo-xiv-15
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

-- Pregunta: crisis-siglo-xiv-16
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

-- Pregunta: descubrimientos-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué no se sostiene que la expansión portuguesa se debiera al corte turco de la ruta de las especias?', 'Los motivos fueron la continuidad de la guerra en el norte de África, el acceso directo al oro sudanés y el azúcar de las islas atlánticas.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque los turcos nunca controlaron el Mediterráneo oriental', false, 0),
  ('Porque las especias siguieron llegando a Venecia por Alejandría durante todo el siglo XV y XVI', true, 1),
  ('Porque Portugal no comerciaba con especias', false, 2),
  ('Porque la ruta terrestre era más barata que la marítima', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel tuvieron Madeira, Azores y Santo Tomé en la historia atlántica?', 'El modelo estaba probado décadas antes de que Colón zarpara. La plantación americana no se improvisó.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fueron simples escalas de aguada en la ruta a la India', false, 0),
  ('Sirvieron de bases militares contra los otomanos', false, 1),
  ('Funcionaron como laboratorio del complejo de plantación: monocultivo de azúcar, mano de obra esclava africana y capital genovés y flamenco', true, 2),
  ('Fueron colonias de poblamiento libre sin producción de exportación', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era la *volta do mar* y por qué fue decisiva?', 'No fue un instrumento sino un patrón de navegación. Con él, navegar dejó de ser costear.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un tipo de vela triangular que permitía ceñir el viento', false, 0),
  ('Comprender que para regresar hay que alejarse de la costa y describir un arco por el océano abierto aprovechando los vientos del oeste', true, 1),
  ('Un impuesto sobre el comercio de retorno', false, 2),
  ('La técnica de cálculo de la longitud mediante relojes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué objetó realmente la junta de Salamanca al proyecto de Colón?', 'La esfericidad de la Tierra no se discutía desde la Antigüedad. El mito del Colón visionario procede de una biografía novelada de 1828.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la Tierra era plana y se caería por el borde', false, 0),
  ('Que sus cálculos de distancia eran erróneos: situaba Japón a unos 3.700 km de Canarias cuando la distancia real ronda los 20.000', true, 1),
  ('Que el papa había concedido esas aguas a Portugal', false, 2),
  ('Que no existían barcos capaces de cruzar un océano', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo llegó a llamarse «América» el nuevo continente?', 'Colón murió en 1506 sosteniendo que había llegado a Asia. Fueron los relatos de Vespucio los que difundieron la idea de un continente desconocido.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Colón lo bautizó así en su tercer viaje', false, 0),
  ('Es un topónimo indígena adoptado por los cronistas', false, 1),
  ('Lo impuso el Tratado de Tordesillas', false, 2),
  ('El cartógrafo Waldseemüller lo imprimió en su mapa de 1507 a partir de los relatos atribuidos a Vespucio', true, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistía el modelo imperial portugués en Asia?', 'Un imperio de peajes sostenido por artillería naval, con muy poca población detrás.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Conquista territorial y poblamiento masivo', false, 0),
  ('Una red de factorías fortificadas en puntos de paso y un sistema de licencias, el *cartaz*, que cobraba peaje a la navegación local', true, 1),
  ('Alianzas matrimoniales con las dinastías locales', false, 2),
  ('Concesión de encomiendas a los colonos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el factor humano decisivo en la caída de Tenochtitlan?', 'Desde la perspectiva local no fue una invasión extranjera contra un imperio, sino una guerra interna en la que un actor nuevo se alió con los descontentos.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La superioridad numérica del ejército español', false, 0),
  ('La rendición voluntaria de Moctezuma', false, 1),
  ('Las decenas de miles de guerreros tlaxcaltecas y de otros pueblos sometidos al tributo mexica que combatieron del lado de Cortés', true, 2),
  ('El bloqueo naval del golfo de México', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué situación encontró Pizarro al llegar a Cajamarca en 1532?', 'La enfermedad llegó antes que los conquistadores y desarticuló la sucesión. Se conquistó un Estado recién salido de una guerra dinástica.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un imperio en su apogeo y plenamente unificado', false, 0),
  ('Un imperio que salía de una guerra civil entre Huáscar y Atahualpa, desencadenada tras una epidemia que se había adelantado a los españoles', true, 1),
  ('Un territorio despoblado por la sequía', false, 2),
  ('Una alianza inca-mexica ya formada contra los europeos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué es un artificio fechar el final de la conquista en 1521 y 1533?', 'Los chichimecas sostuvieron cuarenta años de guerra y amplias zonas de Amazonía y Chaco quedaron fuera de todo control colonial efectivo.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque las fechas correctas son 1519 y 1532', false, 0),
  ('Porque la conquista fue un proceso de siglos e incompleto: el Petén maya resistió hasta 1697 y los mapuches nunca fueron sometidos al sur del Biobío', true, 1),
  ('Porque los imperios mexica e inca se restauraron después', false, 2),
  ('Porque la corona no reconoció esas conquistas hasta el siglo XVIII', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema plantea explicar el colapso demográfico americano solo por las epidemias?', 'Minas, plantaciones, traslados forzosos y destrucción de cosechas multiplicaron la letalidad. Enfermedad y explotación no son causas alternativas.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las epidemias están mal documentadas', false, 0),
  ('Que convierte una catástrofe histórica en un accidente biológico sin responsables, cuando la mortalidad fue mayor donde el régimen de trabajo era más duro', true, 1),
  ('Que las enfermedades europeas no eran contagiosas en América', false, 2),
  ('Que la población indígena tenía inmunidad previa a la viruela', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según la base de datos de referencia, ¿cuál fue la magnitud del comercio atlántico de esclavos?', 'Cerca de cinco millones fueron a Brasil, algo más de millón y medio a la América española y unos cuatrocientos mil a Norteamérica.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Unos dos millones de personas embarcadas', false, 0),
  ('Unos doce millones y medio embarcadas y unos diez millones y medio desembarcadas vivas', true, 1),
  ('Unos cincuenta millones embarcadas', false, 2),
  ('No existen cifras reconstruibles', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué era la mita reorganizada por el virrey Toledo en 1573?', 'Junto con la amalgamación con mercurio de Huancavelica, hizo de Potosí una de las mayores ciudades del mundo a comienzos del siglo XVII.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un impuesto sobre la plata extraída', false, 0),
  ('Un turno de trabajo obligatorio que forzaba a las comunidades andinas a enviar parte de sus hombres a las minas', true, 1),
  ('La licencia para comerciar con Filipinas', false, 2),
  ('El reparto de tierras entre los encomenderos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué acabó gran parte de la plata americana en China?', 'El galeón de Manila la llevaba desde Acapulco entre 1565 y 1815. Es el primer circuito comercial planetario, y funcionó por arbitraje de precios.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque España pagaba con ella la seda de Europa', false, 0),
  ('Porque China había monetizado su fiscalidad en plata y pagaba por ella mucho más que el mercado europeo', true, 1),
  ('Porque el papa lo estableció en el Tratado de Zaragoza', false, 2),
  ('Porque Portugal controlaba la ruta del Cabo y la desviaba', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostuvo Francisco de Vitoria en 1539?', 'Su formulación se considera un antecedente del derecho internacional. Se discutió en Valladolid en 1550-1551 entre Sepúlveda y Las Casas.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la donación papal legitimaba plenamente la conquista', false, 0),
  ('Que los indígenas carecían de capacidad jurídica', false, 1),
  ('Que ni la donación papal ni el derecho de conquista eran títulos válidos, y propuso un derecho de gentes común a todos los pueblos', true, 2),
  ('Que la evangelización justificaba cualquier medio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué fallan tanto la leyenda negra como su reverso apologético?', 'La leyenda negra atribuye a España una crueldad singular ignorando a las demás potencias; la apologética usa a Vitoria y Las Casas para tapar la práctica.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque ambas exageran el número de víctimas', false, 0),
  ('Porque la discusión jurídica existió y las atrocidades también, y las leyes protectoras se incumplieron donde estorbaban a la extracción', true, 1),
  ('Porque ninguna se basa en fuentes escritas', false, 2),
  ('Porque las dos fueron construidas en el siglo XX', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: descubrimientos-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue el mayor efecto demográfico del intercambio colombino sobre el Viejo Mundo?', 'El efecto llegó tarde: dos siglos después del contacto. Maíz y boniato permitieron cultivar laderas antes improductivas en China.', 3, true
  from public.topics where slug = 'descubrimientos'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La llegada del caballo, que transformó la agricultura europea', false, 0),
  ('La introducción del café y del té en la dieta popular', false, 1),
  ('Patata, maíz y mandioca, que sostuvieron el crecimiento de Europa, China y África central desde el siglo XVIII', true, 2),
  ('La desaparición de las hambrunas en el siglo XVI', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: egipto-1
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

-- Pregunta: egipto-2
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

-- Pregunta: egipto-3
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

-- Pregunta: egipto-4
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

-- Pregunta: egipto-5
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

-- Pregunta: egipto-6
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

-- Pregunta: egipto-7
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

-- Pregunta: egipto-8
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

-- Pregunta: egipto-9
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

-- Pregunta: egipto-10
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

-- Pregunta: egipto-11
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

-- Pregunta: egipto-12
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

-- Pregunta: egipto-13
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

-- Pregunta: egipto-14
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

-- Pregunta: egipto-15
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

-- Pregunta: egipto-16
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

-- Pregunta: entreguerras-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué establecía el artículo 231 del Tratado de Versalles?', 'Era el fundamento jurídico de las reparaciones, pero se leyó en Alemania como una condena moral y alimentó la propaganda contra el tratado.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El desarme total de la marina alemana', false, 0),
  ('La atribución a Alemania y sus aliados de la responsabilidad de las pérdidas de la guerra', true, 1),
  ('La creación de la Sociedad de Naciones', false, 2),
  ('La cifra exacta de las reparaciones que Alemania debía pagar', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la debilidad estructural más grave del orden de Versalles?', 'El tratado resultó demasiado severo para reconciliar y demasiado blando para incapacitar, y ninguna potencia quedó dispuesta a hacerlo cumplir.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las reparaciones fueron impagables desde el primer día', false, 0),
  ('Que nació sin garante: Estados Unidos no lo ratificó y Gran Bretaña dejó de sostenerlo', true, 1),
  ('Que dividió Alemania en cuatro zonas de ocupación', false, 2),
  ('Que excluyó a Francia de las negociaciones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistía el circuito financiero que sostuvo la estabilización de 1924 a 1929?', 'Todo dependía del crédito norteamericano, que empezó a retirarse en 1928 hacia la especulación bursátil interna, antes incluso del crac.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Alemania financiaba la reconstrucción soviética a cambio de materias primas', false, 0),
  ('Estados Unidos prestaba a Alemania, Alemania pagaba reparaciones y los aliados devolvían sus deudas a Estados Unidos', true, 1),
  ('La Sociedad de Naciones emitía deuda común europea', false, 2),
  ('Gran Bretaña garantizaba la moneda alemana con sus reservas coloniales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Eichengreen, ¿qué relación hay entre el patrón oro y la duración de la Depresión?', 'Gran Bretaña salió en 1931, Estados Unidos en 1933 y Francia solo en 1936, y las curvas de recuperación siguen ese orden.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los países que abandonaron antes el patrón oro se recuperaron antes', true, 0),
  ('El patrón oro protegió a las economías que lo mantuvieron', false, 1),
  ('No hubo relación observable entre ambos factores', false, 2),
  ('Solo afectó a las economías agrarias de Europa oriental', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto político tuvo la Gran Depresión sobre el voto nazi?', 'La Depresión no creó el fascismo, que existía desde 1919, pero convirtió a los partidos antisistema en fuerzas de masas.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno: el NSDAP ya era el primer partido alemán en 1928', false, 0),
  ('Lo hizo pasar del dos coma seis por ciento en 1928 al treinta y siete por ciento en julio de 1932', true, 1),
  ('Lo redujo a la mitad al desplazar el voto obrero al KPD', false, 2),
  ('Lo estabilizó en torno al veinte por ciento durante toda la crisis', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el escuadrismo en la Italia de 1920 y 1921?', 'Actuaba con tolerancia policial y financiación de los agrarios del valle del Po, y fue la base de fuerza sobre la que creció el movimiento.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La milicia oficial del Estado fascista ya constituido', false, 0),
  ('La violencia organizada de bandas de excombatientes contra sindicatos y ayuntamientos socialistas', true, 1),
  ('El sistema de encuadramiento de obreros en corporaciones', false, 2),
  ('La organización juvenil del Partido Nacional Fascista', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo llegó Mussolini a la jefatura del gobierno en octubre de 1922?', 'La marcha sobre Roma fue más teatro que asalto. El acceso al poder fue legal y con apoyo de la derecha liberal, que creía poder domesticarlo.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Tras un asalto armado que tomó los ministerios de Roma', false, 0),
  ('Por nombramiento del rey, que se negó a firmar el estado de sitio contra los camisas negras', true, 1),
  ('Tras ganar unas elecciones generales con mayoría absoluta', false, 2),
  ('Mediante un referéndum convocado por el Parlamento', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consiguió Mussolini con los Pactos de Letrán de 1929?', 'El acuerdo con el Vaticano dio al fascismo un aval social que ningún decreto podía proporcionarle.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La incorporación de Etiopía al imperio italiano', false, 0),
  ('La paz con la Iglesia y una legitimidad interna decisiva para el régimen', true, 1),
  ('La disolución del Parlamento y la implantación del partido único', false, 2),
  ('El reconocimiento internacional de la conquista de Albania', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué permitía el artículo 48 de la Constitución de Weimar?', 'Desde 1930 sustituyó de hecho al Parlamento: Brüning y sus sucesores gobernaron con decretos firmados por Hindenburg.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Disolver el Parlamento por votación de dos tercios', false, 0),
  ('Gobernar por decreto presidencial de emergencia', true, 1),
  ('Prohibir partidos declarados anticonstitucionales', false, 2),
  ('Convocar referendos vinculantes de iniciativa popular', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Kershaw, ¿qué explica el nombramiento de Hitler como canciller en enero de 1933?', 'El NSDAP había perdido dos millones de votos en noviembre de 1932 y estaba endeudado. La clave fue una decisión política, no un ascenso irresistible.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una victoria electoral por mayoría absoluta del NSDAP', false, 0),
  ('El cálculo erróneo de un grupo reducido de conservadores que creían poder controlarlo', true, 1),
  ('Un golpe militar apoyado por la Reichswehr', false, 2),
  ('La renuncia de Hindenburg a la presidencia', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue la Ley de Plenos Poderes de marzo de 1933?', 'Se aprobó con los votos del Zentrum y con la oposición comunista ya detenida. La legalidad se destruyó por procedimientos legales.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El decreto que suspendió los derechos fundamentales tras el incendio del Reichstag', false, 0),
  ('La norma que transfirió al gobierno la potestad legislativa y liquidó legalmente la República de Weimar', true, 1),
  ('La ley que expulsó a los judíos de la función pública', false, 2),
  ('El texto que unificó los cargos de presidente y canciller', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa el término Gleichschaltung?', 'Se ejecutó entre 1933 y 1934 e incluyó la disolución de partidos y sindicatos y la depuración de la función pública.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El plan de rearme acelerado de la industria alemana', false, 0),
  ('El alineamiento forzoso de partidos, sindicatos, administración y asociaciones con el Estado nazi', true, 1),
  ('La política de anexión de territorios de población alemana', false, 2),
  ('El sistema de propaganda dirigido por Goebbels', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo la política de no intervención en la Guerra Civil española?', 'Aplicada de forma asimétrica, funcionó como una intervención de hecho a favor de un bando. La URSS abasteció a la República a cambio de las reservas de oro.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Frenó la llegada de armas a los dos bandos por igual', false, 0),
  ('Perjudicó al gobierno legítimo mientras Alemania e Italia abastecían abiertamente a los sublevados', true, 1),
  ('Obligó a la retirada de las Brigadas Internacionales en 1936', false, 2),
  ('Impidió la intervención soviética a favor de la República', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué razones explican la política británica de apaciguamiento?', 'Reducirla a cobardía impide entenderla. Fue una política razonada que se rompió cuando la ocupación de Praga demostró que no se trataba solo de alemanes.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La convicción de que Alemania no tenía capacidad militar alguna', false, 0),
  ('Un imperio que defender, el rearme retrasado, la memoria de la Gran Guerra y la creencia de que parte de las reclamaciones alemanas era legítima', true, 1),
  ('Un tratado de alianza firmado con Alemania en 1935', false, 2),
  ('La presión de la Sociedad de Naciones para no aplicar sanciones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué contenía el protocolo secreto del pacto germano-soviético de agosto de 1939?', 'Su existencia se negó oficialmente hasta 1989. Una semana después de la firma empezó la invasión de Polonia.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una alianza militar ofensiva contra Francia', false, 0),
  ('El reparto de Polonia, los países bálticos y Besarabia entre ambas potencias', true, 1),
  ('La entrega de tecnología aeronáutica alemana a la URSS', false, 2),
  ('El compromiso soviético de entrar en el Eje', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: entreguerras-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué propone Robert Paxton frente a las definiciones doctrinales del fascismo?', 'La propuesta desplaza la pregunta de qué decía el fascismo a la de qué hizo y cómo llegó, que es donde los casos italiano y alemán se parecen de verdad.', 3, true
  from public.topics where slug = 'entreguerras'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Negar que exista un fascismo genérico comparable entre países', false, 0),
  ('Estudiar las etapas del proceso: creación del movimiento, arraigo, llegada al poder con aliados conservadores y radicalización', true, 1),
  ('Definirlo exclusivamente por su política económica corporativa', false, 2),
  ('Considerarlo una variante del bonapartismo del siglo XIX', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo funcionaba el turno pacífico de la Restauración?', 'El sistema requería que las elecciones no decidieran nada. Cuando el voto empezó a importar en las ciudades, el mecanismo dejó de servir.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Los partidos alternaban tras ganar elecciones libres', false, 0),
  ('La Corona nombraba gobierno y este convocaba y ganaba las elecciones mediante el caciquismo', true, 1),
  ('El Parlamento elegía al presidente por votación secreta', false, 2),
  ('Los gobiernos se sorteaban entre las provincias', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo la derrota de 1898?', 'Fue un desastre militar menor y una catástrofe simbólica. Joaquín Costa formuló el diagnóstico de oligarquía y caciquismo.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Provocó la caída inmediata de la monarquía', false, 0),
  ('Liquidó el imperio y produjo el regeneracionismo, una corriente crítica que exigía reformar el Estado', true, 1),
  ('Obligó a España a entrar en la Primera Guerra Mundial', false, 2),
  ('Supuso la pérdida de Marruecos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué mostró la crisis de 1917?', 'Juntas militares, asamblea de parlamentarios y huelga general coincidieron con agendas distintas, y el sistema sobrevivió sin resolver nada.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el ejército, el catalanismo y el movimiento obrero podían protestar a la vez sin confiar unos en otros', true, 0),
  ('Que el sistema de la Restauración se había democratizado', false, 1),
  ('Que España entraría en la guerra europea', false, 2),
  ('Que la monarquía había perdido el apoyo del ejército', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué relación hubo entre el desastre de Annual y el golpe de 1923?', 'La dictadura se presentó como paréntesis regenerador, duró siete años y al caer arrastró a la monarquía que la había amparado.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguna: el golpe respondió a la crisis económica', false, 0),
  ('El expediente sobre Annual apuntaba a responsabilidades del ejército y de la Corona, y el golpe cerró la investigación', true, 1),
  ('El golpe se dio para reanudar la guerra de Marruecos', false, 2),
  ('Primo de Rivera fue el principal responsable militar de Annual', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué reformas emprendió el bienio republicano de 1931 a 1933?', 'Se intentó en dos años una agenda que en otros países había ocupado medio siglo, y chocó simultáneamente con la Iglesia, el ejército y los propietarios.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Nacionalización de la banca y colectivización agraria', false, 0),
  ('Reforma agraria, separación de Iglesia y Estado, Estatuto catalán, reforma militar y sufragio femenino', true, 1),
  ('Reforma fiscal y entrada en la Sociedad de Naciones', false, 2),
  ('Reforma electoral y abolición del ejército', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió en octubre de 1934?', 'Fue el momento en que ambos bandos empezaron a considerar legítimo lo que negaban al contrario.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se proclamó el Frente Popular', false, 0),
  ('Una insurrección de izquierda contra la entrada de la CEDA en el gobierno, con revolución obrera en Asturias y proclamación del Estado catalán', true, 1),
  ('Se aprobó la Constitución republicana', false, 2),
  ('Se produjo la sublevación militar contra la República', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la sublevación de julio de 1936 produjo una guerra civil?', 'El Estado se descompuso en dos zonas con dos economías, dos ejércitos y dos formas de violencia.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque triunfó en todo el país y la resistencia fue exterior', false, 0),
  ('Porque fracasó en las grandes ciudades y en la mayor parte de la industria, sin que ninguno de los dos bandos pudiera imponerse', true, 1),
  ('Porque intervinieron desde el primer día Francia y Gran Bretaña', false, 2),
  ('Porque el gobierno declaró la guerra a Marruecos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué se diferenció la violencia en las dos retaguardias?', 'Se calculan unas cincuenta mil víctimas en la zona republicana y alrededor de cien mil en la sublevada hasta 1939, más otras cincuenta mil en la posguerra.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En que solo hubo represión en la zona sublevada', false, 0),
  ('En que la republicana fue sobre todo descentralizada y de los primeros meses, y la sublevada fue sistemática, ordenada desde arriba y continuó tras la guerra', true, 1),
  ('En que la republicana afectó únicamente a militares', false, 2),
  ('En que la sublevada se detuvo al terminar el conflicto', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué se dirimió en los hechos de mayo de 1937 en Barcelona?', 'Enfrentó a fuerzas del gobierno con militantes del POUM y la CNT. Orwell lo contó desde dentro en Homenaje a Cataluña.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La entrada de Cataluña en la guerra', false, 0),
  ('El conflicto entre revolución social y construcción de un Estado y un ejército regular, resuelto a favor de la centralización', true, 1),
  ('La firma de una paz separada con los sublevados', false, 2),
  ('El reparto del oro del Banco de España', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó la primera etapa económica del franquismo?', 'Los llamados años del hambre se prolongaron hasta bien entrados los cincuenta, cuando la Guerra Fría rompió el aislamiento del régimen.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una rápida integración en el comercio internacional', false, 0),
  ('La autarquía: intervención, racionamiento hasta 1952, mercado negro y consumo inferior al de 1935', true, 1),
  ('La entrada masiva de inversión extranjera', false, 2),
  ('La colectivización de la agricultura', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué supuso el Plan de Estabilización de 1959?', 'Fue obra de tecnócratas vinculados al Opus Dei y cambió la sociedad sin cambiar el régimen, que es la contradicción del período.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El regreso a la autarquía tras la crisis internacional', false, 0),
  ('La liberalización parcial de la economía y el arranque del desarrollismo con turismo, remesas e inversión extranjera', true, 1),
  ('La nacionalización de la banca española', false, 2),
  ('El ingreso de España en la Comunidad Económica Europea', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué propuso Juan Linz en 1964 sobre la naturaleza del franquismo?', 'Otros historiadores subrayan la fase fascistizada de los años cuarenta. La discusión se ha desplazado de la etiqueta al estudio de las fases.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que era un régimen totalitario equiparable al nazismo', false, 0),
  ('Que era un régimen autoritario, con pluralismo limitado, mentalidades en vez de ideología y desmovilización política', true, 1),
  ('Que era una monarquía constitucional en suspenso', false, 2),
  ('Que era una dictadura militar sin base social', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue la Ley para la Reforma Política de 1976?', 'La reforma se hizo desde la legalidad anterior, lo que evitó la ruptura y condicionó a la vez el alcance del cambio.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ley que legalizó los partidos políticos y los sindicatos', false, 0),
  ('La norma aprobada por las propias Cortes franquistas que abrió el paso a elecciones libres', true, 1),
  ('El texto que estableció el Estado de las autonomías', false, 2),
  ('La ley que amnistió a los presos políticos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué alcance tuvo la Ley de Amnistía de 1977?', 'Fue reclamada por la oposición, y su segunda cara es el núcleo del debate sobre el llamado pacto del olvido.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Solo liberó a los presos políticos del franquismo', false, 0),
  ('Liberó a los presos políticos y cubrió también los delitos cometidos desde el poder, cerrando la vía penal sobre la represión', true, 1),
  ('Anuló las sentencias de los tribunales militares franquistas', false, 2),
  ('Estableció un tribunal especial para juzgar los crímenes de la dictadura', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué argumento sostienen quienes defienden el proceso de la Transición?', 'Sus críticos responden que quedaron intactas la administración y la judicatura y que durante décadas no hubo investigación oficial de la represión.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que no hubo continuidad alguna con el aparato franquista', false, 0),
  ('Que la comparación relevante no es con un ideal sino con las alternativas disponibles en 1976, con el ejército intacto y sin apoyo exterior', true, 1),
  ('Que la represión franquista fue exagerada por la historiografía', false, 2),
  ('Que el 23-F demostró la lealtad del ejército a la democracia', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: espana-siglo-xx-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué acontecimientos cerraron el ciclo de la Transición?', 'El golpe fallido funcionó como vacuna, y la integración europea consolidó el nuevo régimen dentro del marco continental.', 3, true
  from public.topics where slug = 'espana-siglo-xx'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La muerte de Franco y la coronación del rey', false, 0),
  ('El fracaso del golpe del 23-F en 1981, la llegada del PSOE al gobierno en 1982 y el ingreso en la Comunidad Económica Europea en 1986', true, 1),
  ('La aprobación de la Constitución y los Pactos de la Moncloa', false, 2),
  ('La legalización del PCE y las primeras elecciones municipales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: feudalismo-1
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

-- Pregunta: feudalismo-2
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

-- Pregunta: feudalismo-3
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

-- Pregunta: feudalismo-4
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

-- Pregunta: feudalismo-5
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

-- Pregunta: feudalismo-6
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

-- Pregunta: feudalismo-7
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

-- Pregunta: feudalismo-8
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

-- Pregunta: feudalismo-9
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

-- Pregunta: feudalismo-10
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

-- Pregunta: feudalismo-11
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

-- Pregunta: feudalismo-12
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

-- Pregunta: feudalismo-13
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

-- Pregunta: feudalismo-14
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

-- Pregunta: feudalismo-15
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

-- Pregunta: gran-guerra-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el cheque en blanco de julio de 1914?', 'Dado el 5 de julio, permitió a Viena redactar un ultimátum pensado para ser rechazado. Es la pieza central de la tesis de Fischer.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El crédito con que Gran Bretaña financió a sus aliados continentales', false, 0),
  ('El apoyo incondicional alemán a Austria-Hungría frente a Serbia, sin condicionar su respuesta', true, 1),
  ('La autorización rusa a Serbia para rechazar el ultimátum', false, 2),
  ('El compromiso francés de no intervenir en un conflicto balcánico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene Christopher Clark en Sonámbulos?', 'Se le objeta que la simetría diluye la diferencia entre quien fuerza la crisis y quien reacciona.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que Alemania planificó la guerra desde el consejo de 1912', false, 0),
  ('Que la guerra fue un accidente sin responsables identificables', false, 1),
  ('Que la responsabilidad fue compartida por dirigentes vigilantes y a la vez ciegos ante las consecuencias', true, 2),
  ('Que Serbia fue la única potencia que buscó deliberadamente el conflicto', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el frente occidental se inmovilizó a finales de 1914?', 'El defensor traía reservas en tren y el atacante caminaba. Sin un vehículo capaz de moverse bajo fuego, el asalto frontal era insostenible.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque los ejércitos agotaron sus reservas de munición ese mismo año', false, 0),
  ('Porque la potencia de fuego favorecía abrumadoramente a la defensa mientras el atacante avanzaba a pie', true, 1),
  ('Porque los mandos decidieron esperar a la llegada de los carros de combate', false, 2),
  ('Porque el terreno belga impedía cualquier maniobra de flanqueo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué arma causó la mayoría de las bajas del conflicto?', 'En torno al setenta por ciento. La escasez de proyectiles llegó a derribar un gobierno británico en 1915 y obligó a crear un ministerio de municiones.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ametralladora', false, 0),
  ('El gas de combate', false, 1),
  ('El fusil de repetición', false, 2),
  ('La artillería', true, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo planteó Falkenhayn la batalla de Verdún?', 'Duró diez meses, costó unos trescientos mil muertos entre los dos bandos y no desplazó el frente de forma significativa.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como una ruptura del frente para retomar la guerra de movimiento', false, 0),
  ('Como una operación de desgaste sobre un punto que Francia no podría abandonar por prestigio', true, 1),
  ('Como una maniobra de distracción para atacar en el este', false, 2),
  ('Como un ensayo general de las tácticas de infiltración', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué matiza la historiografía militar reciente sobre los leones dirigidos por burros?', 'La curva de aprendizaje británica entre 1916 y 1918 es un campo de estudio establecido: sin radio de campaña ni transporte todoterreno, el margen táctico era estrecho.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las bajas fueron muy inferiores a las contabilizadas en su momento', false, 0),
  ('Que los generales no tuvieron ninguna responsabilidad en las pérdidas', false, 1),
  ('Que los ejércitos aprendieron con rapidez dentro de las restricciones técnicas de la época, aunque ese aprendizaje se pagara con vidas', true, 2),
  ('Que la ofensiva frontal era en realidad la táctica más económica disponible', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó a los motines franceses de 1917?', 'Fue una huelga, no una deserción. Pétain respondió cambiando las tácticas y las condiciones de vida además de castigar.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La deserción masiva y el abandono de las trincheras', false, 0),
  ('La fraternización con las tropas alemanas del sector', false, 1),
  ('La negativa a atacar sin abandonar la defensa de la línea', true, 2),
  ('La exigencia de una paz separada con las potencias centrales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué documentó Tony Ashworth con el sistema de vivir y dejar vivir?', 'Entre la obediencia y la rebelión hubo un espacio amplio de violencia regulada tácitamente por las propias tropas.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La organización del racionamiento en las ciudades británicas', false, 0),
  ('Las treguas informales entre unidades enfrentadas, con bombardeos rituales y patrullas que se evitaban', true, 1),
  ('El reparto de tierras a los veteranos desmovilizados', false, 2),
  ('La negociación entre sindicatos y gobiernos sobre la producción de municiones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto tuvo el bloqueo naval británico sobre las potencias centrales?', 'Cortó alimentos y fertilizantes. Su mantenimiento durante los meses de negociación pesó en la percepción alemana del tratado.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ninguno relevante, porque Alemania era autosuficiente en alimentos', false, 0),
  ('Solo afectó al suministro de materias primas militares', false, 1),
  ('Provocó desnutrición generalizada y el invierno del nabo de 1916-1917, y se mantuvo hasta la firma de la paz', true, 2),
  ('Fue levantado inmediatamente tras el armisticio de noviembre de 1918', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué reanudó Alemania la guerra submarina sin restricciones en 1917?', 'El cálculo falló por poco. El convoy, adoptado ese mismo año, redujo las pérdidas de forma drástica.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque calculó que podía rendir a Gran Bretaña antes de que Estados Unidos interviniera de forma efectiva', true, 0),
  ('Porque Jutlandia le había dado el control de la superficie del mar del Norte', false, 1),
  ('Porque Estados Unidos ya había declarado la guerra en 1916', false, 2),
  ('Porque el sistema de convoyes había demostrado ser ineficaz', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el telegrama Zimmermann?', 'Junto con los hundimientos y la exposición financiera a la victoria aliada, empujó a Estados Unidos a la guerra en abril de 1917.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La orden alemana de iniciar la ofensiva de marzo de 1918', false, 0),
  ('La propuesta alemana a México de una alianza a cambio de territorio estadounidense, interceptada por los británicos', true, 1),
  ('La comunicación del armisticio a las tropas alemanas', false, 2),
  ('La oferta de paz separada de Austria-Hungría a los aliados', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se cita Brest-Litovsk en el debate sobre la dureza de Versalles?', 'Arrebató a Rusia un tercio de su población y la mayor parte de su industria. Indica qué habrían impuesto las potencias centrales de haber ganado.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque fue el modelo textual que copiaron los negociadores de París', false, 0),
  ('Porque anuló todas las reparaciones exigidas a Rusia', false, 1),
  ('Porque las condiciones impuestas por Alemania a Rusia fueron mucho más severas, lo que relativiza la excepcionalidad de Versalles', true, 2),
  ('Porque nunca llegó a firmarse y quedó como una amenaza', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué establece el artículo 231 del Tratado de Versalles?', 'La cifra se dejó para 1921. El artículo se redactó como fundamento legal y se leyó en Alemania como condena moral.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La cifra exacta de las reparaciones alemanas', false, 0),
  ('La responsabilidad de Alemania por las pérdidas aliadas, como base jurídica de la indemnización', true, 1),
  ('La ocupación indefinida de Renania por tropas francesas', false, 2),
  ('La expulsión de Alemania de la Sociedad de Naciones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué corrigen Mantoux y Sally Marks en la lectura de Keynes sobre las reparaciones?', 'De ahí la fórmula que resume el consenso: demasiado duro para conciliar, demasiado blando para incapacitar.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las cifras nominales eran aún mayores de lo que Keynes calculó', false, 0),
  ('Que Alemania pagó una fracción de lo nominal y conservó intacta su base industrial', true, 1),
  ('Que las reparaciones se cobraron íntegramente antes de 1923', false, 2),
  ('Que Keynes no participó en la conferencia de paz', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consiste el mito de la puñalada por la espalda?', 'El armisticio llegó con el frente en territorio ocupado y sin tropas aliadas en Alemania, circunstancia que hizo verosímil un relato falso y decisivo.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En la acusación aliada de que Alemania firmó el armisticio de mala fe', false, 0),
  ('En la creencia de que el ejército alemán invicto fue traicionado por la retaguardia', true, 1),
  ('En la versión austríaca del reparto de responsabilidades de 1914', false, 2),
  ('En la denuncia de los soldados franceses contra su alto mando', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: gran-guerra-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué propone George Mosse con el concepto de brutalización?', 'Se discute porque países igualmente golpeados como Gran Bretaña o Francia no derivaron hacia la violencia política, pero sigue siendo el mejor vínculo entre 1918 y lo que vino después.', 3, true
  from public.topics where slug = 'gran-guerra'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la propaganda de guerra endureció el trato a los prisioneros', false, 0),
  ('Que la violencia y los hábitos del frente se trasladaron a la política civil de posguerra', true, 1),
  ('Que los ejércitos abandonaron las convenciones sobre trato a civiles desde 1914', false, 2),
  ('Que la memoria del conflicto impidió cualquier rearme en los años veinte', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: grecia-1
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

-- Pregunta: grecia-2
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

-- Pregunta: grecia-3
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

-- Pregunta: grecia-4
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

-- Pregunta: grecia-5
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

-- Pregunta: grecia-6
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

-- Pregunta: grecia-7
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

-- Pregunta: grecia-8
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

-- Pregunta: grecia-9
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

-- Pregunta: grecia-10
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

-- Pregunta: grecia-11
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

-- Pregunta: grecia-12
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

-- Pregunta: grecia-13
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

-- Pregunta: grecia-14
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

-- Pregunta: grecia-15
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

-- Pregunta: grecia-16
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

-- Pregunta: guerra-fria-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistía la contención formulada por Kennan en 1946?', 'El propio Kennan criticó después la militarización de su idea en documentos como el NSC-68.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En atacar preventivamente a la URSS aprovechando el monopolio atómico', false, 0),
  ('En frenar con firmeza paciente la expansión soviética sin buscar la guerra, esperando su transformación interna', true, 1),
  ('En dividir Alemania en cuatro zonas de ocupación permanentes', false, 2),
  ('En retirar las tropas estadounidenses de Europa', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué prohibió la URSS a sus satélites participar en el Plan Marshall?', 'La respuesta fue el Kominform y la sovietización acelerada de Europa oriental, con el golpe de Praga de 1948 como punto de no retorno.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque la ayuda estaba reservada a los países vencedores', false, 0),
  ('Porque su condición de coordinación económica funcionaba como instrumento de integración occidental', true, 1),
  ('Porque la cantidad ofrecida era simbólica', false, 2),
  ('Porque exigía la disolución previa de los partidos comunistas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué acontecimientos de 1949 cambiaron la escala del conflicto?', 'Esa alarma se tradujo en el NSC-68 de 1950, que definió el conflicto como global y convirtió cualquier lugar del planeta en un frente posible.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La guerra de Corea y la creación del Pacto de Varsovia', false, 0),
  ('La primera bomba atómica soviética y la victoria comunista en China', true, 1),
  ('La crisis de Suez y la revolución húngara', false, 2),
  ('El lanzamiento del Sputnik y la construcción del Muro', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué lección dejó la guerra de Corea sobre la dinámica del conflicto?', 'La entrada de voluntarios chinos devolvió el frente al paralelo 38 y fijó las reglas implícitas del enfrentamiento.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que las superpotencias combatirían directamente en cuanto se presentara la ocasión', false, 0),
  ('Que la escalada podía y debía detenerse: tres millones de muertos y ninguna frontera cambiada', true, 1),
  ('Que las armas nucleares se usarían de forma rutinaria', false, 2),
  ('Que Naciones Unidas era capaz de imponer la paz por sí sola', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué es la destrucción mutua asegurada?', 'La vulnerabilidad recíproca, garantizada sobre todo por los submarinos lanzamisiles, se convirtió paradójicamente en fundamento de la estabilidad.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El plan de defensa civil ante un ataque nuclear', false, 0),
  ('La situación en la que ambos bandos conservan capacidad de represalia, de modo que atacar equivale a suicidarse', true, 1),
  ('El tratado que prohibió los ensayos nucleares en la atmósfera', false, 2),
  ('La doctrina de primer golpe adoptada por la OTAN en 1957', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se resolvió la crisis de los misiles de Cuba de 1962?', 'Los documentos desclasificados muestran incidentes que ningún gobierno controlaba, incluido un submarino soviético con torpedo nuclear.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Con la invasión estadounidense de la isla', false, 0),
  ('Con la retirada de los misiles a cambio del compromiso de no invadir Cuba y de la retirada discreta de los Júpiter de Turquía', true, 1),
  ('Con la entrega de Cuba a la administración de Naciones Unidas', false, 2),
  ('Con un ultimátum soviético que Estados Unidos aceptó sin contrapartidas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué factor aceleró la descolonización tras 1945?', 'A eso se sumó que las dos superpotencias emergentes eran, por motivos distintos, retóricamente anticoloniales.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La decisión de las Naciones Unidas de disolver los imperios por votación', false, 0),
  ('La guerra, que destruyó el prestigio y los recursos de las metrópolis y movilizó a las colonias con promesas de contrapartidas', true, 1),
  ('La retirada voluntaria de Gran Bretaña de todas sus posesiones en 1946', false, 2),
  ('La prohibición del comercio colonial impuesta por el Plan Marshall', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó a las descolonizaciones más violentas?', 'La guerra de Argelia costó cientos de miles de muertos, empleó la tortura como método y derribó de paso a la Cuarta República francesa.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La ausencia de partidos nacionalistas organizados', false, 0),
  ('La presencia de colonos europeos instalados, como en Argelia, Kenia o las colonias portuguesas', true, 1),
  ('La falta de interés económico de la metrópoli', false, 2),
  ('La intervención directa de la Unión Soviética', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa el neocolonialismo en la formulación de Nkrumah?', 'Los nuevos Estados heredaron fronteras trazadas en Berlín, economías de una o dos materias primas y administraciones escasas.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La reconquista militar de las antiguas colonias', false, 0),
  ('La soberanía formal acompañada de dependencia económica y decisiones tomadas fuera del país', true, 1),
  ('La ocupación de África por las superpotencias', false, 2),
  ('El regreso de administradores europeos como asesores técnicos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué fue el Movimiento de Países No Alineados?', 'No fue neutralidad pasiva. Egipto, por ejemplo, financió la presa de Asuán con dinero soviético tras la retirada de la oferta estadounidense.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una alianza militar alternativa a la OTAN y al Pacto de Varsovia', false, 0),
  ('Un intento de convertir la rivalidad de las superpotencias en margen de maniobra propio, surgido de Bandung', true, 1),
  ('Una organización de países neutrales europeos', false, 2),
  ('El bloque de países que rechazaron la ayuda económica de ambos bandos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aporta la lectura de la Guerra Fría propuesta por Westad?', 'Los archivos muestran además que los actores locales tenían proyectos propios y con frecuencia arrastraron a sus patrocinadores.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el conflicto se decidió íntegramente en Europa', false, 0),
  ('Que hay que leerlo desde el sur, donde hubo intervenciones y guerras que costaron millones de vidas mientras la línea europea no se movía', true, 1),
  ('Que las superpotencias controlaban por completo a sus aliados locales', false, 2),
  ('Que la descolonización fue independiente del enfrentamiento bipolar', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué consecuencia tuvo la ruptura chino-soviética?', 'Convirtió un conflicto de dos en un triángulo y permitió presionar a Moscú por dos flancos.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La entrada de China en el Pacto de Varsovia', false, 0),
  ('La quiebra de la bipolaridad, con choques armados en 1969 y el viaje de Nixon a Pekín en 1972', true, 1),
  ('La unificación de los partidos comunistas asiáticos', false, 2),
  ('El fin de la ayuda soviética a Vietnam del Norte', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué efecto imprevisto tuvo el Acta Final de Helsinki de 1975?', 'La Carta 77 y los comités de Helsinki lo usaron para exigir el cumplimiento de un texto que Moscú había firmado creyéndolo retórico.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Provocó la retirada soviética de Europa oriental', false, 0),
  ('Su capítulo de derechos humanos dio a la disidencia una base legal firmada por sus propios gobiernos', true, 1),
  ('Obligó a disolver el Pacto de Varsovia', false, 2),
  ('Impuso elecciones libres en Polonia', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problemas económicos arrastraba la URSS desde los años setenta?', 'El hundimiento del precio del petróleo en 1986 cerró la vía de seguir igual, aunque por sí solo no imponía un cambio de régimen.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una hiperinflación provocada por el gasto en consumo', false, 0),
  ('Planificación incapaz de asimilar la informática, agricultura deficitaria, gasto militar desproporcionado y dependencia del precio del crudo', true, 1),
  ('La pérdida de todos sus mercados exteriores', false, 2),
  ('La ausencia de industria pesada', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo posible que las revoluciones de 1989 fueran casi incruentas?', 'La renuncia a la doctrina Brézhnev fue el cambio decisivo: lo excepcional no fue la caída de los regímenes sino que ocurriera sin sangre.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La mediación de Naciones Unidas en cada país', false, 0),
  ('La decisión previa de Gorbachov de no sostener con tropas soviéticas a los gobiernos de Europa oriental', true, 1),
  ('La disolución del Pacto de Varsovia en 1988', false, 2),
  ('La presencia de tropas de la OTAN en la frontera', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: guerra-fria-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué defienden Archie Brown y Stephen Kotkin sobre el hundimiento soviético?', 'La historiografía tiende a combinar declive estructural y contingencia, rechazando tanto el determinismo económico como el relato de una victoria planificada.', 3, true
  from public.topics where slug = 'guerra-fria'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue consecuencia inevitable del gasto militar impuesto por Reagan', false, 0),
  ('Que la crisis no imponía el desenlace y fue la decisión de reformar y de no usar la fuerza lo que produjo una disolución pacífica', true, 1),
  ('Que el golpe de agosto de 1991 fue orquestado desde el exterior', false, 2),
  ('Que el sistema era económicamente viable hasta 1990', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: helenismo-1
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

-- Pregunta: helenismo-2
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

-- Pregunta: helenismo-3
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

-- Pregunta: helenismo-4
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

-- Pregunta: helenismo-5
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

-- Pregunta: helenismo-6
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

-- Pregunta: helenismo-7
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

-- Pregunta: helenismo-8
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

-- Pregunta: helenismo-9
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

-- Pregunta: helenismo-10
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

-- Pregunta: helenismo-11
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

-- Pregunta: helenismo-12
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

-- Pregunta: helenismo-13
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

-- Pregunta: helenismo-14
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

-- Pregunta: helenismo-15
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

-- Pregunta: helenismo-16
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

-- Pregunta: ilustracion-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo define Kant la Ilustración en 1784?', 'No falta entendimiento, falta decisión para usarlo sin guía ajena. Y Kant llama a su tiempo época de ilustración, no época ilustrada.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como el triunfo definitivo de la razón sobre la superstición', false, 0),
  ('Como la salida del ser humano de una minoría de edad de la que él mismo es culpable', true, 1),
  ('Como el conjunto de doctrinas contenidas en la *Encyclopédie*', false, 2),
  ('Como la sustitución de la monarquía por la república', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué distingue Kant entre uso público y uso privado de la razón?', 'Esa distinción explica cómo la Ilustración pudo convivir con monarquías absolutas: se obedece la orden y se critica la norma.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El uso público se hace en la corte y el privado en la universidad', false, 0),
  ('El uso público es el del autor ante un público lector, donde la crítica no tiene límite; el privado es el del funcionario en su cargo, donde debe obediencia', true, 1),
  ('El uso público corresponde a los ilustrados y el privado a los eclesiásticos', false, 2),
  ('El uso público requiere permiso del censor y el privado no', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa la «esfera pública» de Habermas?', 'Sus lugares son cafés, salones, logias, sociedades económicas y prensa. Excluía a los analfabetos y a las mujeres de la representación política.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El conjunto de instituciones estatales encargadas de la instrucción', false, 0),
  ('Un espacio entre el Estado y la vida privada donde particulares razonan sobre asuntos comunes y, en principio, vale el mejor argumento', true, 1),
  ('La red de academias reales financiadas por los monarcas', false, 2),
  ('El mercado del libro clandestino', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la novedad organizativa de la *Encyclopédie*?', 'La clasificación no es teológica. Y el artículo inocuo remitía al que decía lo que no podía decirse en el vigilado.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ser la primera obra impresa con láminas grabadas', false, 0),
  ('Clasificar el saber según las facultades humanas —memoria, razón, imaginación— y usar reenvíos para sortear la censura', true, 1),
  ('Publicarse íntegramente sin privilegio real', false, 2),
  ('Estar escrita por un solo autor', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué mostró Robert Darnton al estudiar la *Encyclopédie* desde los archivos de sus editores?', 'La censura del Antiguo Régimen no era un muro, sino un sistema poroso con el que se negociaba.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue un fracaso comercial sostenido por mecenas', false, 0),
  ('Que fue un gran negocio atravesado por ediciones baratas, contrabando, censores tolerantes y suscriptores clérigos y funcionarios', true, 1),
  ('Que la mayoría de los artículos eran plagios de obras inglesas', false, 2),
  ('Que se distribuyó solo en París', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué agrupaban los libreros clandestinos bajo la etiqueta *livres philosophiques*?', 'La categoría es del propio siglo XVIII. Para Darnton, ese material desprestigió a la monarquía más que los tratados de teoría política.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Solo los tratados de metafísica prohibidos por la Sorbona', false, 0),
  ('Filosofía prohibida, libelos contra la corte y pornografía política, en una misma categoría comercial', true, 1),
  ('Las obras de autores extranjeros no traducidas', false, 2),
  ('Los manuales de las academias provinciales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué dos ideas duraderas aporta *Del espíritu de las leyes*?', 'Su lectura de la constitución inglesa era en parte imaginaria y, aun así, fundó el constitucionalismo moderno.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La voluntad general y el derecho de resistencia', false, 0),
  ('La adecuación de las leyes a las condiciones de cada pueblo y la disposición institucional para que el poder frene al poder', true, 1),
  ('La abolición de la tortura y la proporcionalidad de las penas', false, 2),
  ('La libre circulación de granos y el producto neto agrario', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'En el *Contrato social*, ¿dónde reside la soberanía?', 'De ahí procede la democracia moderna y también la sospecha, formulada en el siglo XX, de que la voluntad general puede silenciar a la minoría.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En el monarca, como representante del pueblo', false, 0),
  ('En la voluntad general del cuerpo político, inalienable e indelegable', true, 1),
  ('En la asamblea de propietarios', false, 2),
  ('En la constitución escrita', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el argumento central de Beccaria contra la tortura?', 'Varios Estados abolieron el tormento en las dos décadas siguientes. Fue la victoria más rápida de la Ilustración.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que es contraria a la caridad cristiana', false, 0),
  ('Que produce confesiones falsas y castiga antes de juzgar; la disuasión depende de la certeza del castigo, no de su crueldad', true, 1),
  ('Que resulta demasiado costosa para el erario', false, 2),
  ('Que solo debería aplicarse a los delitos contra el Estado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué se suele olvidar de *La riqueza de las naciones* de Adam Smith?', 'La metáfora de la mano invisible aparece una vez y convive con una crítica explícita a los intereses de los mercaderes.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que defiende el monopolio de las compañías privilegiadas', false, 0),
  ('Que advierte contra la colusión de los comerciantes y contra los efectos embrutecedores del trabajo repetitivo', true, 1),
  ('Que rechaza la división del trabajo', false, 2),
  ('Que fue escrita antes que la obra de los fisiócratas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué texto ilustrado denunció la conquista y la esclavitud y llegó a anunciar un vengador negro?', 'Fue un superventas europeo y circuló entre los revolucionarios haitianos. Matiza, sin anularlo, el reproche de Sala-Molins a la Ilustración francesa.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El *Emilio* de Rousseau', false, 0),
  ('La *Historia de las dos Indias* de Raynal y Diderot', true, 1),
  ('El *Tratado sobre la tolerancia* de Voltaire', false, 2),
  ('El *Informe sobre la ley agraria* de Jovellanos', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué se sostiene que el racismo moderno no es un residuo premoderno?', 'La jerarquía racial se articula con lenguaje científico, no con lenguaje bíblico. Es uno de los puntos ciegos mejor documentados del siglo.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque no existió antes del siglo XIX', false, 0),
  ('Porque se formula con el vocabulario clasificatorio de la historia natural ilustrada, en Linneo, Buffon y en textos de Hume y Kant', true, 1),
  ('Porque lo inventaron los abolicionistas para combatirlo', false, 2),
  ('Porque procede exclusivamente de la teología medieval', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué reclamaba sobre todo Mary Wollstonecraft en 1792?', 'Respondía al *Emilio*, que prescribía para Sofía una educación subordinada. Olympe de Gouges había calcado en 1791 la Declaración de 1789.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El voto femenino inmediato', false, 0),
  ('Educación igual para las mujeres, sin la cual no hay virtud ni ciudadanía posibles', true, 1),
  ('La abolición del matrimonio', false, 2),
  ('La igualdad salarial en los oficios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es la tesis de *Dialéctica de la Ilustración* de Horkheimer y Adorno?', 'Escrito en 1944. La réplica habitual: las herramientas para denunciar esclavitud, patriarcado y colonialismo son en buena medida ilustradas.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la Ilustración fue insuficientemente racional', false, 0),
  ('Que la razón convertida en dominio instrumental de la naturaleza acaba volviéndose contra los seres humanos', true, 1),
  ('Que la Ilustración fue un fenómeno exclusivamente francés', false, 2),
  ('Que el progreso técnico garantiza el progreso moral', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracteriza al despotismo ilustrado?', 'Códigos, regalismo, expulsión de los jesuitas, obras públicas y enseñanza técnica. La frase «todo para el pueblo, sin el pueblo» es una síntesis posterior, no una cita.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La convocatoria de asambleas representativas para aprobar las reformas', false, 0),
  ('Reformas administrativas, jurídicas y económicas impulsadas desde arriba sin ceder soberanía ni admitir participación política', true, 1),
  ('La renuncia de los monarcas al control sobre la Iglesia nacional', false, 2),
  ('La supresión de la nobleza como estamento', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: ilustracion-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene Roger Chartier sobre la relación entre Ilustración y Revolución francesa?', 'Invierte la tesis de Mornet. La formulación aceptada: los textos no hacen revoluciones, pero dan el lenguaje para plantear la crisis como problema de soberanía.', 3, true
  from public.topics where slug = 'ilustracion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la Revolución fue consecuencia directa y previsible de la difusión de los libros filosóficos', false, 0),
  ('Que fue la Revolución la que construyó a la Ilustración como su origen, seleccionando y canonizando autores para legitimarse', true, 1),
  ('Que la Ilustración fue en realidad contrarrevolucionaria', false, 2),
  ('Que los dos procesos no tuvieron relación alguna', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué designa el imperialismo del librecambio de Gallagher y Robinson?', 'Su regla resume la lógica: comercio informal si es posible, gobierno formal si es necesario. Lo que cambia hacia 1870 es que lo informal deja de garantizar el acceso.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La política arancelaria británica posterior a 1870', false, 0),
  ('El dominio informal mediante tratados, deuda y presión naval sin administrar el territorio', true, 1),
  ('El reparto pactado de África en la Conferencia de Berlín', false, 2),
  ('La apertura de los mercados europeos a los productos coloniales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué estableció realmente la Conferencia de Berlín de 1884-1885?', 'Al exigir presencia administrativa real para reconocer una reclamación, convirtió el mapa en una carrera de puestos militares y tratados con jefes locales.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Las reglas del reparto, con el principio de ocupación efectiva y la libertad de navegación fluvial', true, 0),
  ('El reparto territorial concreto de África entre las potencias', false, 1),
  ('La independencia de los Estados africanos bajo tutela europea', false, 2),
  ('La creación de una administración internacional conjunta del continente', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Headrick, ¿qué factor sanitario hizo posible la penetración europea en el interior africano?', 'Antes de la quinina profiláctica moría más de la mitad de los europeos que entraban en el primer año. Sin resolver eso, la ocupación del interior era inviable.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La vacuna contra la viruela', false, 0),
  ('La producción industrial de quinina y su uso profiláctico sistemático', true, 1),
  ('El descubrimiento del vector de la malaria por Ross en 1897', false, 2),
  ('La potabilización del agua en los puestos coloniales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál era el estatuto jurídico del Estado Libre del Congo entre 1885 y 1908?', 'Leopoldo lo obtuvo presentándolo como empresa filantrópica y antiesclavista. Bélgica solo lo anexionó en 1908, tras el escándalo del caucho.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Colonia del Reino de Bélgica administrada por su parlamento', false, 0),
  ('Propiedad personal de Leopoldo II reconocida internacionalmente', true, 1),
  ('Protectorado conjunto de Bélgica, Francia y Portugal', false, 2),
  ('Territorio bajo mandato de la Conferencia de Berlín', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué se discute hoy sobre la cifra de diez millones de muertos en el Congo leopoldino?', 'Vansina y otros demógrafos insisten en que la estimación deriva de censos muy posteriores. El sistema está documentado por los propios administradores.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el sistema de cuotas del caucho no llegó a aplicarse', false, 0),
  ('El método y la magnitud, no la existencia del sistema: es una caída poblacional acumulada por violencia, hambre y enfermedad, difícil de cuantificar sin censos', true, 1),
  ('Que las mutilaciones fueron una invención de la propaganda británica', false, 2),
  ('Que la mortalidad fue muy superior a la estimada por Hochschild', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió en Adua en 1896?', 'Menelik II había comprado armamento moderno, centralizado el país y explotado las rivalidades europeas. Demuestra que la ventaja técnica era transferible.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Francia y Gran Bretaña estuvieron a punto de entrar en guerra por el alto Nilo', false, 0),
  ('Alemania inició la represión de los herero', false, 1),
  ('Etiopía derrotó a Italia y preservó su independencia', true, 2),
  ('Los bóxers sitiaron el barrio de las legaciones', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostiene la tesis del drenaje de Dadabhai Naoroji?', 'La cuantificación se discute. Menos discutible es la caída de la participación india en la manufactura mundial y el estancamiento de la renta por habitante.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la India perdió población por la emigración forzada a otras colonias', false, 0),
  ('Que la India transfería a Gran Bretaña una renta neta permanente mediante home charges, deuda y superávit comercial', true, 1),
  ('Que el algodón indio se agotó por la sobreexplotación del suelo', false, 2),
  ('Que el Raj gastaba más de lo que ingresaba y arruinaba al contribuyente británico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracteriza a China como semicolonia frente a la India colonial?', 'Ninguna potencia gobernaba China, pero los aranceles se fijaban desde fuera y las indemnizaciones hipotecaban durante décadas los ingresos aduaneros.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que no sufrió intervención militar extranjera en ningún momento', false, 0),
  ('Que fue administrada conjuntamente por las ocho potencias desde 1900', false, 1),
  ('Que mantuvo el control de sus aranceles y de sus aduanas', false, 2),
  ('Que conservó la soberanía formal mientras perdía su contenido mediante tratados desiguales, extraterritorialidad y esferas de influencia', true, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué el ascenso de Japón tuvo un efecto ideológico tan grande en Asia?', 'La victoria sobre Rusia en 1905 fue la primera de una potencia asiática sobre una europea en guerra abierta, y resonó desde Estambul hasta Calcuta.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque renunció a expandirse y ofreció un modelo pacífico', false, 0),
  ('Porque demostró que la industrialización defensiva era posible y que el imperialismo no era una propiedad racial europea', true, 1),
  ('Porque fue el único país asiático que adoptó el cristianismo', false, 2),
  ('Porque logró la independencia sin transformar su Estado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué añade Mike Davis a la explicación de las hambrunas de 1876-1902?', 'El marco de Amartya Sen apoya el argumento: una hambruna depende del acceso a los alimentos, no solo de su disponibilidad física.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que la sequía por sí sola basta para explicar la mortalidad', false, 0),
  ('Que la escala dependió de la exportación de grano en plena carestía, la no interferencia en los precios y la fiscalidad rígida', true, 1),
  ('Que las hambrunas fueron menores de lo que indicaban los informes coloniales', false, 2),
  ('Que el ferrocarril agravó la carestía en todos los casos documentados', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué explicación del reparto propusieron Robinson y Gallagher en 1961?', 'La ocupación de Egipto en 1882, disparada por la revuelta de Urabi y por la seguridad de la ruta a la India, es su caso demostrativo.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La crisis en la periferia y el cálculo estratégico de la mente oficial, no la presión de los inversores', true, 0),
  ('La exportación de capital excedente desde las metrópolis', false, 1),
  ('El atavismo de élites aristocráticas sin función económica', false, 2),
  ('La necesidad de desactivar el conflicto de clase en la metrópoli', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué concluyeron Davis y Huttenback en 1986 sobre la rentabilidad del imperio británico?', 'La defensa imperial se pagaba con impuestos generales. El imperio funcionó como transferencia interna: coste socializado, beneficio concentrado.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que enriqueció por igual a todas las clases británicas', false, 0),
  ('Que no compensó al contribuyente medio pero sí a una élite con capital colocado en ultramar', true, 1),
  ('Que fue ruinoso para todos los grupos sociales implicados', false, 2),
  ('Que la mayor parte de la inversión británica se dirigió a las colonias tropicales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué propone Edward Said con el concepto de orientalismo?', 'Ha sido discutido por su selección de fuentes y por atribuir demasiada coherencia a un campo diverso, y aun así reorganizó los estudios poscoloniales.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Un método filológico para editar textos árabes y persas', false, 0),
  ('Que el saber occidental sobre Oriente construyó un objeto esencializado e inmóvil, inseparable del poder que lo financiaba', true, 1),
  ('Que la literatura de viajes fue el único vehículo del prejuicio colonial', false, 2),
  ('Que Oriente y Occidente son categorías geográficas objetivas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué papel cumplió la colaboración local en el dominio colonial?', 'Mamdani analizó la contrapartida: la administración inventó autoridades tradicionales que quedaron como estructura de poder heredada tras la independencia.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Fue marginal: la administración europea gobernaba directamente cada aldea', false, 0),
  ('Se limitó a la recaudación de impuestos en las ciudades portuarias', false, 1),
  ('Fue estructural: unos pocos miles de europeos solo podían gobernar millones de personas con príncipes, jefes y élites locales integrados', true, 2),
  ('Solo existió en la India y no en el África subsahariana', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con los herero y los nama entre 1904 y 1908?', 'Se calcula que murió en torno al ochenta por ciento de los herero. La orden de von Trotha es uno de los documentos coloniales más explícitos que se conservan.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Firmaron un protectorado negociado con la administración alemana', false, 0),
  ('Fueron objeto de una guerra de exterminio con órdenes explícitas, empuje al desierto y campos de trabajo, reconocida por Alemania como genocidio en 2021', true, 1),
  ('Emigraron en masa a la colonia británica de El Cabo', false, 2),
  ('Derrotaron a las tropas alemanas y conservaron su territorio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: imperialismo-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué relación estableció el imperialismo con la guerra de 1914?', 'Las crisis marroquíes de 1905 y 1911 se resolvieron sin guerra. El efecto fue acumulativo, no un detonante único.', 3, true
  from public.topics where slug = 'imperialismo'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La causó directamente: las crisis coloniales desembocaron en combate entre potencias', false, 0),
  ('La preparó indirectamente: normalizó la carrera naval, cimentó los bloques de alianzas y habituó a la opinión pública a un lenguaje de lucha entre razas y naciones', true, 1),
  ('La retrasó, porque el reparto africano canalizó todas las tensiones hasta 1939', false, 2),
  ('No tuvo ninguna relación: fueron procesos independientes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué son excepcionales los edictos de Ashoka como fuente?', 'Se descifraron en 1837. Hasta entonces el rey más citado de los textos budistas carecía de pruebas materiales.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque están escritos en sánscrito clásico', false, 0),
  ('Porque son la única voz directa de un gobernante de la Antigüedad india, grabada en varias lenguas', true, 1),
  ('Porque los redactaron embajadores griegos', false, 2),
  ('Porque describen la vida cotidiana campesina', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué defiende Romila Thapar sobre el dharma de Ashoka?', 'Ashoka patrocinó al budismo y financió misiones a Sri Lanka y Asia central, sin las cuales su expansión posterior habría sido distinta.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fue budismo convertido en religión oficial del imperio', false, 0),
  ('Que fue una ética cívica pensada para cohesionar un imperio de enorme diversidad lingüística y religiosa', true, 1),
  ('Que fue un código penal aplicado por los funcionarios', false, 2),
  ('Que fue una doctrina inventada por la historiografía nacionalista', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo hay que leer textos como las leyes de Manu?', 'Las cuatro varnas rituales se articularon en la práctica en miles de jatis con reglas variables por región y por oficio.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como descripción fiel de la sociedad de su tiempo', false, 0),
  ('Como prescripciones de letrados brahmánicos, frente a las cuales la historia social muestra más movilidad y variación regional', true, 1),
  ('Como recopilaciones de derecho consuetudinario local', false, 2),
  ('Como falsificaciones de época colonial', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la transferencia técnica india de mayor alcance mundial?', 'Aryabhata trabajó con notación posicional en 499 y Brahmagupta formuló en el siglo VII reglas para el cero y los números negativos.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La metalurgia del acero de Damasco', false, 0),
  ('El sistema decimal posicional con cero, transmitido al mundo islámico y de ahí a Europa', true, 1),
  ('La navegación con vela latina', false, 2),
  ('El cultivo del algodón', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracterizó al movimiento bhakti?', 'Es el mejor argumento contra la imagen de una sociedad india estática y jerárquica sin fisuras.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La restauración del ritual védico en sánscrito', false, 0),
  ('La devoción personal expresada en lenguas vernáculas, con poetas mujeres y de castas bajas', true, 1),
  ('La organización de monasterios budistas en el sur', false, 2),
  ('La codificación jurídica de las obligaciones de casta', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué hizo insólito al imperio Chola en la historia india?', 'Mantuvo además relaciones diplomáticas con la China Song, y sus templos y bronces están entre las obras mayores del arte mundial.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Unificó todo el subcontinente por primera vez', false, 0),
  ('Proyectó poder naval, con expediciones a Sri Lanka, las Maldivas y Sumatra', true, 1),
  ('Abolió el sistema de castas en su territorio', false, 2),
  ('Adoptó el islam como religión de Estado', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se difundió la influencia india por el sudeste asiático?', 'Angkor y Borobudur son los ejemplos mayores. La India no exportó imperio: exportó modelos.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Mediante campañas de conquista de los Guptas', false, 0),
  ('Sin conquista militar, por adopción local de formas políticas, religiosas y artísticas', true, 1),
  ('Por la migración masiva de población desde Bengala', false, 2),
  ('Por imposición de los comerciantes portugueses', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué novedad introdujeron los portugueses en el comercio del índico?', 'No dominaron el comercio índico, cuyo volumen los superaba con mucho, pero impusieron una violencia armada que no era la práctica del océano.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El uso de la brújula y de cartas náuticas', false, 0),
  ('La disposición a usar artillería naval para monopolizar rutas y un sistema de permisos', true, 1),
  ('El comercio de textiles de algodón', false, 2),
  ('La creación de las primeras redes de comerciantes armenios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Richard Eaton, ¿por qué las zonas de mayoría musulmana acabaron siendo Bengala oriental y el noroeste?', 'La conversión fue lenta, desigual y periférica, y no coincidió con los centros del poder político musulmán.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque allí se concentraron las guarniciones del sultanato', false, 0),
  ('Porque eran regiones de frontera agraria donde el islam llegó con la roturación de tierras y las órdenes sufíes', true, 1),
  ('Porque fueron las primeras conquistadas en 711', false, 2),
  ('Porque el sultanato impuso allí la conversión obligatoria', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué lógica tenía en buena parte la destrucción de templos por gobernantes musulmanes?', 'La destrucción está documentada y no debe minimizarse, pero reducir siglos de historia a un conflicto religioso continuo proyecta hacia atrás categorías del siglo XX.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Una campaña sistemática de conversión religiosa', false, 0),
  ('Una lógica política: los templos reales eran depósitos de riqueza y símbolos de soberanía, y reyes hindúes también saqueaban los de sus rivales', true, 1),
  ('La necesidad de materiales de construcción', false, 2),
  ('La prohibición coránica de las imágenes', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Con qué instrumentos construyó Akbar el sistema imperial mogol?', 'El zabt de Todar Mal se basaba en medir la tierra, clasificar suelos y calcular el impuesto sobre promedios de precios.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Ejército mercenario europeo, monopolio del comercio y expulsión de las élites locales', false, 0),
  ('Rangos numéricos mansabdari, sistema fiscal zabt e integración de las élites rajputas en el gobierno', true, 1),
  ('Administración eclesiástica y tribunales religiosos únicos', false, 2),
  ('Delegación del gobierno en gobernadores hereditarios', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué significaba el principio de sulh-i kull?', 'Akbar suprimió el impuesto a los no musulmanes, patrocinó traducciones del sánscrito al persa y organizó debates entre teólogos de todas las religiones.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La igualdad jurídica de todos los súbditos', false, 0),
  ('Una doctrina de soberanía situada por encima de las comunidades religiosas, y no una tolerancia en sentido moderno', true, 1),
  ('La obligación de convertirse al islam para servir en la administración', false, 2),
  ('La separación entre poder religioso y poder político', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué peso económico tenía el subcontinente en el siglo XVII?', 'El imperio absorbía plata americana y japonesa para pagar esos textiles. La imagen de una India premoderna pobre es un efecto del siglo XIX.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Marginal en el comercio mundial', false, 0),
  ('En torno a la cuarta parte del producto mundial, con textiles que se vendían de Japón a México', true, 1),
  ('Similar al de las colonias americanas', false, 2),
  ('Dependiente por completo de las importaciones europeas', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo leen historiadores como Truschke y Richards el reinado de Aurangzeb?', 'Restableció el impuesto a los no musulmanes y ordenó destrucciones de templos, y a la vez llevó el imperio a su máxima extensión con una guerra ruinosa en el Decán.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como una política religiosa coherente de persecución sistemática', false, 0),
  ('Situando sus decisiones en su contexto político: también patrocinó templos hindúes y empleó a más nobles hindúes que ningún predecesor', true, 1),
  ('Como un período sin cambios respecto de Akbar', false, 2),
  ('Como una etapa de retirada militar del imperio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra la historiografía reciente sobre el siglo XVIII indio?', 'Marathas, Awadh, Bengala y Haidarabad tenían capacidad fiscal y militar. El colonialismo se construyó sobre esas estructuras, no sobre su ausencia.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que hubo un vacío de poder que los británicos ocuparon sin resistencia', false, 0),
  ('Que hubo regionalización con Estados sucesores dinámicos y financieros potentes, en cuyo sistema competitivo intervino la Compañía', true, 1),
  ('Que la economía india se hundió tras la muerte de Aurangzeb', false, 2),
  ('Que el imperio mogol conservó intacto su poder hasta 1857', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: india-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué problema plantea la periodización propuesta por James Mill en 1817?', 'Dividir el pasado en épocas hindú, musulmana y británica sugiere además que el gobierno musulmán fue una ocupación extranjera permanente.', 3, true
  from public.topics where slug = 'india'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que sitúa mal las fechas de las dinastías', false, 0),
  ('Que convierte la religión en criterio organizador de mil años de historia y sirvió de base a las lecturas comunalistas', true, 1),
  ('Que ignora por completo el sur del subcontinente', false, 2),
  ('Que exagera la importancia del comercio índico', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-1
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué muestra Pomeranz al comparar el delta del Yangtsé con Inglaterra hacia 1750?', 'Su explicación de la divergencia es contingente: carbón accesible y acres fantasma coloniales, no superioridad europea previa.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que China llevaba tres siglos de atraso técnico', false, 0),
  ('Que ambas regiones tenían niveles de vida, mercados y sofisticación comercial comparables', true, 1),
  ('Que Inglaterra tenía ya el doble de renta por habitante', false, 2),
  ('Que China carecía de mercados de tierra y de trabajo', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-2
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, 'Según Robert Allen, ¿por qué se mecanizó primero Gran Bretaña?', 'La spinning jenny era rentable en Lancashire y ruinosa en Bengala. La diferencia estaba en los precios relativos, no en el ingenio.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque disponía de mejores ingenieros que el continente', false, 0),
  ('Porque el trabajo era caro y la energía barata, lo que hacía rentable sustituir mano de obra por máquinas', true, 1),
  ('Porque protegió sus inventos con patentes más estrictas', false, 2),
  ('Porque tenía un mercado interior mayor que el francés', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-3
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Por qué la water frame de Arkwright obligó a crear la fábrica?', 'La jenny todavía se usaba en el taller doméstico. La fábrica nace de la máquina que no cabe en una casa.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Porque requería obreros con formación universitaria', false, 0),
  ('Porque necesitaba energía hidráulica y no cabía en una casa, lo que impuso edificio, horario y vigilancia', true, 1),
  ('Porque el Parlamento prohibió el hilado doméstico', false, 2),
  ('Porque su patente exigía instalarla en ciudades', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-4
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué aportó el condensador separado de Watt?', 'La máquina de Newcomen ya funcionaba desde 1712, pero solo era viable donde el carbón no costaba nada: la propia mina.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Permitió por primera vez achicar agua en las minas', false, 0),
  ('Redujo el consumo de carbón lo suficiente para sacar el vapor de la bocamina y llevarlo a la fábrica', true, 1),
  ('Sustituyó el hierro por el acero en las calderas', false, 2),
  ('Hizo innecesaria la energía hidráulica en la siderurgia', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-5
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué encontraron Crafts y Harley al recalcular el crecimiento británico?', 'Transformador a escala de siglo, modesto a escala de década. En 1830 la mayoría de los trabajadores no estaba en fábricas mecanizadas.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Tasas explosivas superiores al cinco por ciento anual', false, 0),
  ('Un crecimiento del producto por habitante de en torno al uno por ciento anual entre 1780 y 1830', true, 1),
  ('Un estancamiento absoluto hasta 1850', false, 2),
  ('Un crecimiento concentrado exclusivamente en la agricultura', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-6
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿En qué consistió el cambio que E. P. Thompson analizó en 1967?', 'Multas por retraso, fin del San Lunes y sincronización de cientos de personas con un reloj controlado a menudo por el patrón.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('En la sustitución del salario por el pago en especie', false, 0),
  ('En el paso de un trabajo orientado por tareas a una disciplina del tiempo medido y remunerado por horas', true, 1),
  ('En la prohibición del trabajo nocturno', false, 2),
  ('En la generalización del contrato indefinido', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-7
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál fue la novedad más eficaz de la Factory Act de 1833?', 'Sin inspección, las normas anteriores eran papel mojado. La ley de las diez horas llegó en 1847.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La prohibición total del trabajo infantil', false, 0),
  ('La creación de un cuerpo de inspectores capaz de hacer cumplir la ley', true, 1),
  ('La jornada de ocho horas', false, 2),
  ('La obligación de pagar salario igual a hombres y mujeres', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-8
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cómo se interpreta hoy el movimiento ludita?', 'Hobsbawm lo llamó negociación colectiva por otros medios. Las Combination Acts prohibían la vía legal y el Parlamento respondió con pena capital.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Como rechazo irracional de la técnica por parte de trabajadores sin cualificación', false, 0),
  ('Como destrucción selectiva de las máquinas que degradaban el producto y rompían las costumbres del oficio, en ausencia de derecho a coaligarse', true, 1),
  ('Como una revuelta campesina contra el cercamiento de tierras', false, 2),
  ('Como una campaña organizada por los fabricantes rivales', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-9
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué es la «penalización urbana»?', 'En los años treinta y cuarenta la esperanza de vida al nacer en las grandes ciudades industriales podía quedar en torno a los treinta años.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El impuesto municipal sobre las fábricas contaminantes', false, 0),
  ('El exceso de mortalidad de las ciudades industriales respecto al campo antes del saneamiento', true, 1),
  ('La multa a los obreros que llegaban tarde', false, 2),
  ('El sobreprecio del alquiler en los barrios fabriles', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-10
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué demostró John Snow en 1854?', 'Su tesis tardó años en aceptarse. El informe Chadwick de 1842 y la Public Health Act de 1848 se movían todavía en el marco miasmático.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que el cólera era hereditario', false, 0),
  ('Que el cólera se transmitía por el agua, cartografiando los casos alrededor de la bomba de Broad Street', true, 1),
  ('Que los miasmas del aire eran la causa de la epidemia', false, 2),
  ('Que la vacunación prevenía el cólera', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-11
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué sostienen OBrien y Keyder sobre la industrialización francesa?', 'Medir todas las trayectorias con la vara británica produce falsos fracasos. Alemania y Estados Unidos también siguieron caminos propios.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Que fracasó por falta de carbón', false, 0),
  ('Que fue una vía alternativa, con más peso de la pequeña propiedad y los productos de calidad, y rentas per cápita comparables a largo plazo', true, 1),
  ('Que copió exactamente el modelo británico con medio siglo de retraso', false, 2),
  ('Que dependió íntegramente de la inversión extranjera', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-12
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué ocurrió con la industria textil de la India entre 1810 y 1860?', 'Se discute el peso relativo de la técnica y de la política comercial. El hecho está establecido: la industrialización de unos coincidió con la desindustrialización de otros.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se mecanizó antes que la británica', false, 0),
  ('Se hundió frente al hilado mecánico británico, en un contexto de aranceles asimétricos y dominio político', true, 1),
  ('Se mantuvo estable gracias a la demanda interna', false, 2),
  ('Se reconvirtió a la producción de acero', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-13
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué dato antropométrico complica la lectura optimista del nivel de vida?', 'La estatura resume nutrición neta y enfermedad en la infancia. Es el argumento más difícil de rebatir del bando pesimista.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El aumento de la natalidad urbana', false, 0),
  ('El descenso de la estatura media de los varones nacidos entre 1820 y 1850', true, 1),
  ('La caída del consumo de carbón doméstico', false, 2),
  ('El aumento del número de horas de ocio', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-14
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué describe la «pausa de Engels»?', 'El excedente fue a beneficios e inversión. Concilia a pesimistas y optimistas: tienen razón sobre generaciones distintas.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('El paréntesis entre las dos revoluciones industriales', false, 0),
  ('El periodo de 1790 a 1840 en el que crece la producción por trabajador mientras los salarios reales apenas se mueven', true, 1),
  ('La interrupción del comercio por el bloqueo continental', false, 2),
  ('El retraso alemán en industrializarse', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-15
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Cuál es el estado actual del debate sobre la tesis de Eric Williams?', 'Beckert recuperó la conexión por otra vía: el algodón esclavista del sur de Estados Unidos abastecía a Lancashire.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('Se acepta íntegramente: la trata financió directamente la industrialización', false, 0),
  ('Se rechaza la versión fuerte sobre la financiación directa y se acepta la interdependencia estructural entre economía atlántica esclavista e industria textil', true, 1),
  ('Se ha demostrado que no hubo relación alguna entre esclavitud e industria', false, 2),
  ('Se considera que la abolición retrasó la industrialización británica', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: industrializacion-16
with nueva as (
  insert into public.questions (topic_id, prompt, explanation, difficulty, published)
  select id, '¿Qué caracteriza a la segunda revolución industrial de 1870-1914?', 'Las industrias basadas en la ciencia exigían laboratorios de empresa y escuelas técnicas. Gran Bretaña perdió ahí el liderazgo tecnológico.', 3, true
  from public.topics where slug = 'industrializacion'
  returning id
)
insert into public.question_options (question_id, label, is_correct, position)
select nueva.id, opcion.label, opcion.is_correct, opcion.position from nueva, (values
  ('La generalización del vapor y del hierro dulce', false, 0),
  ('Acero, química orgánica, electricidad y motor de explosión, con investigación institucionalizada y liderazgo alemán y estadounidense', true, 1),
  ('La vuelta al taller artesanal', false, 2),
  ('La sustitución del carbón por la energía hidráulica', false, 3)
) as opcion(label, is_correct, position);

-- Pregunta: islam-1
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

commit;
