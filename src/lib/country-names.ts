import { ISO_CODES } from './country-codes.ts'

/* Nombres en español de los países de Natural Earth 110m.
   Tabla del diseño del cliente (design/historya-data.js). La clave es el
   `properties.name` del atlas; si un país no está aquí se muestra en inglés. */
export const ES_NAMES: Record<string, string> = {
  Spain: 'España', France: 'Francia', Italy: 'Italia', Greece: 'Grecia', Portugal: 'Portugal',
  Germany: 'Alemania', 'United Kingdom': 'Reino Unido', Ireland: 'Irlanda', Netherlands: 'Países Bajos',
  Belgium: 'Bélgica', Switzerland: 'Suiza', Austria: 'Austria', Poland: 'Polonia', Czechia: 'Chequia',
  Hungary: 'Hungría', Romania: 'Rumanía', Bulgaria: 'Bulgaria', Serbia: 'Serbia', Croatia: 'Croacia',
  Albania: 'Albania', Sweden: 'Suecia', Norway: 'Noruega', Denmark: 'Dinamarca', Finland: 'Finlandia',
  Iceland: 'Islandia', Russia: 'Rusia', Ukraine: 'Ucrania', Belarus: 'Bielorrusia', Turkey: 'Turquía',
  Greenland: 'Groenlandia', Egypt: 'Egipto', Libya: 'Libia', Tunisia: 'Túnez', Algeria: 'Argelia',
  Morocco: 'Marruecos', 'W. Sahara': 'Sáhara Occidental', Mauritania: 'Mauritania', Mali: 'Malí',
  Niger: 'Níger', Chad: 'Chad', Sudan: 'Sudán', 'S. Sudan': 'Sudán del Sur', Ethiopia: 'Etiopía',
  Eritrea: 'Eritrea', Somalia: 'Somalia', Kenya: 'Kenia', Uganda: 'Uganda', Tanzania: 'Tanzania',
  Nigeria: 'Nigeria', Ghana: 'Ghana', Senegal: 'Senegal', Cameroon: 'Camerún', 'Dem. Rep. Congo': 'Rep. Dem. del Congo',
  Angola: 'Angola', Zambia: 'Zambia', Zimbabwe: 'Zimbabue', Mozambique: 'Mozambique', Madagascar: 'Madagascar',
  'South Africa': 'Sudáfrica', Namibia: 'Namibia', Botswana: 'Botsuana', Iraq: 'Irak', Iran: 'Irán',
  'Saudi Arabia': 'Arabia Saudí', Yemen: 'Yemen', Oman: 'Omán', Jordan: 'Jordania', Israel: 'Israel',
  Palestine: 'Palestina', Lebanon: 'Líbano', Syria: 'Siria', Kuwait: 'Kuwait', Qatar: 'Catar',
  'United Arab Emirates': 'Emiratos Árabes Unidos', Afghanistan: 'Afganistán', Pakistan: 'Pakistán',
  India: 'India', Nepal: 'Nepal', Bhutan: 'Bután', Bangladesh: 'Bangladés', 'Sri Lanka': 'Sri Lanka',
  China: 'China', Mongolia: 'Mongolia', 'North Korea': 'Corea del Norte', 'South Korea': 'Corea del Sur',
  Japan: 'Japón', Taiwan: 'Taiwán', Vietnam: 'Vietnam', Laos: 'Laos', Cambodia: 'Camboya',
  Thailand: 'Tailandia', Myanmar: 'Birmania', Malaysia: 'Malasia', Indonesia: 'Indonesia',
  Philippines: 'Filipinas', Kazakhstan: 'Kazajistán', Uzbekistan: 'Uzbekistán', Turkmenistan: 'Turkmenistán',
  Kyrgyzstan: 'Kirguistán', Tajikistan: 'Tayikistán', Azerbaijan: 'Azerbaiyán', Armenia: 'Armenia',
  Georgia: 'Georgia', Australia: 'Australia', 'New Zealand': 'Nueva Zelanda', 'Papua New Guinea': 'Papúa Nueva Guinea',
  'United States of America': 'Estados Unidos', Canada: 'Canadá', Mexico: 'México', Guatemala: 'Guatemala',
  Honduras: 'Honduras', 'El Salvador': 'El Salvador', Nicaragua: 'Nicaragua', 'Costa Rica': 'Costa Rica',
  Panama: 'Panamá', Cuba: 'Cuba', 'Dominican Rep.': 'Rep. Dominicana', Haiti: 'Haití', Jamaica: 'Jamaica',
  Colombia: 'Colombia', Venezuela: 'Venezuela', Ecuador: 'Ecuador', Peru: 'Perú', Bolivia: 'Bolivia',
  Chile: 'Chile', Argentina: 'Argentina', Uruguay: 'Uruguay', Paraguay: 'Paraguay', Brazil: 'Brasil',
  Guyana: 'Guyana', Suriname: 'Surinam', Cyprus: 'Chipre', Slovakia: 'Eslovaquia', Slovenia: 'Eslovenia',
  'Bosnia and Herz.': 'Bosnia y Herzegovina', Montenegro: 'Montenegro', 'North Macedonia': 'Macedonia del Norte',
  Moldova: 'Moldavia', Lithuania: 'Lituania', Latvia: 'Letonia', Estonia: 'Estonia', Luxembourg: 'Luxemburgo'
};

/* La búsqueda de bandera por nombre en español vive aquí y no en
   `country-codes.ts` porque necesita ES_NAMES, y aquel archivo tiene que poder
   cargarse desde Node sin importar nada (lo usa `scripts/copy-flags.mjs`). */
const A2_BY_ES = new Map<string, string>()
for (const [englishName, code] of Object.entries(ISO_CODES)) {
  const spanishName = ES_NAMES[englishName]
  if (spanishName) A2_BY_ES.set(spanishName, code.a2)
}

/** Alfa-2 de un país por su nombre en español, para nombrar su archivo de bandera.
 *  Devuelve null si no es un país del atlas: «Europa», «Mundo» y las regiones
 *  históricas no tienen bandera, y eso no es un error. */
export function flagCode(spanishName: string): string | null {
  return A2_BY_ES.get(spanishName) ?? null
}
