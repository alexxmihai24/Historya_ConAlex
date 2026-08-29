/* Códigos ISO 3166-1 de los países de Natural Earth 110m.
 *
 * Existe por dos motivos:
 *   1. `feature.id` del atlas es el código NUMÉRICO en cadena («724» = España),
 *      y el archivo de una bandera se nombra por el código ALFA-2 («es.svg»).
 *   2. La interfaz casi siempre tiene a mano el nombre en español, no el inglés
 *      del atlas, así que hace falta el camino de vuelta.
 *
 * La clave es la misma que en `country-names.ts`: el `properties.name` del atlas.
 * Mantener los dos archivos con las mismas claves; `npm run flags` avisa si una
 * bandera no existe en la colección.
 *
 * Este archivo no importa nada a propósito: `scripts/copy-flags.mjs` lo carga
 * desde Node, que sin extensión no resuelve un import relativo. La búsqueda por
 * nombre en español, que sí necesita ES_NAMES, vive en `country-names.ts`. */

/** `n` es el ISO numérico como cadena (con ceros a la izquierda, igual que el atlas). */
export const ISO_CODES: Record<string, { n: string; a2: string }> = {
  Spain: { n: '724', a2: 'es' }, France: { n: '250', a2: 'fr' }, Italy: { n: '380', a2: 'it' },
  Greece: { n: '300', a2: 'gr' }, Portugal: { n: '620', a2: 'pt' }, Germany: { n: '276', a2: 'de' },
  'United Kingdom': { n: '826', a2: 'gb' }, Ireland: { n: '372', a2: 'ie' }, Netherlands: { n: '528', a2: 'nl' },
  Belgium: { n: '056', a2: 'be' }, Switzerland: { n: '756', a2: 'ch' }, Austria: { n: '040', a2: 'at' },
  Poland: { n: '616', a2: 'pl' }, Czechia: { n: '203', a2: 'cz' }, Hungary: { n: '348', a2: 'hu' },
  Romania: { n: '642', a2: 'ro' }, Bulgaria: { n: '100', a2: 'bg' }, Serbia: { n: '688', a2: 'rs' },
  Croatia: { n: '191', a2: 'hr' }, Albania: { n: '008', a2: 'al' }, Sweden: { n: '752', a2: 'se' },
  Norway: { n: '578', a2: 'no' }, Denmark: { n: '208', a2: 'dk' }, Finland: { n: '246', a2: 'fi' },
  Iceland: { n: '352', a2: 'is' }, Russia: { n: '643', a2: 'ru' }, Ukraine: { n: '804', a2: 'ua' },
  Belarus: { n: '112', a2: 'by' }, Turkey: { n: '792', a2: 'tr' }, Greenland: { n: '304', a2: 'gl' },
  Egypt: { n: '818', a2: 'eg' }, Libya: { n: '434', a2: 'ly' }, Tunisia: { n: '788', a2: 'tn' },
  Algeria: { n: '012', a2: 'dz' }, Morocco: { n: '504', a2: 'ma' }, 'W. Sahara': { n: '732', a2: 'eh' },
  Mauritania: { n: '478', a2: 'mr' }, Mali: { n: '466', a2: 'ml' }, Niger: { n: '562', a2: 'ne' },
  Chad: { n: '148', a2: 'td' }, Sudan: { n: '729', a2: 'sd' }, 'S. Sudan': { n: '728', a2: 'ss' },
  Ethiopia: { n: '231', a2: 'et' }, Eritrea: { n: '232', a2: 'er' }, Somalia: { n: '706', a2: 'so' },
  Kenya: { n: '404', a2: 'ke' }, Uganda: { n: '800', a2: 'ug' }, Tanzania: { n: '834', a2: 'tz' },
  Nigeria: { n: '566', a2: 'ng' }, Ghana: { n: '288', a2: 'gh' }, Senegal: { n: '686', a2: 'sn' },
  Cameroon: { n: '120', a2: 'cm' }, 'Dem. Rep. Congo': { n: '180', a2: 'cd' }, Angola: { n: '024', a2: 'ao' },
  Zambia: { n: '894', a2: 'zm' }, Zimbabwe: { n: '716', a2: 'zw' }, Mozambique: { n: '508', a2: 'mz' },
  Madagascar: { n: '450', a2: 'mg' }, 'South Africa': { n: '710', a2: 'za' }, Namibia: { n: '516', a2: 'na' },
  Botswana: { n: '072', a2: 'bw' }, Iraq: { n: '368', a2: 'iq' }, Iran: { n: '364', a2: 'ir' },
  'Saudi Arabia': { n: '682', a2: 'sa' }, Yemen: { n: '887', a2: 'ye' }, Oman: { n: '512', a2: 'om' },
  Jordan: { n: '400', a2: 'jo' }, Israel: { n: '376', a2: 'il' }, Palestine: { n: '275', a2: 'ps' },
  Lebanon: { n: '422', a2: 'lb' }, Syria: { n: '760', a2: 'sy' }, Kuwait: { n: '414', a2: 'kw' },
  Qatar: { n: '634', a2: 'qa' }, 'United Arab Emirates': { n: '784', a2: 'ae' }, Afghanistan: { n: '004', a2: 'af' },
  Pakistan: { n: '586', a2: 'pk' }, India: { n: '356', a2: 'in' }, Nepal: { n: '524', a2: 'np' },
  Bhutan: { n: '064', a2: 'bt' }, Bangladesh: { n: '050', a2: 'bd' }, 'Sri Lanka': { n: '144', a2: 'lk' },
  China: { n: '156', a2: 'cn' }, Mongolia: { n: '496', a2: 'mn' }, 'North Korea': { n: '408', a2: 'kp' },
  'South Korea': { n: '410', a2: 'kr' }, Japan: { n: '392', a2: 'jp' }, Taiwan: { n: '158', a2: 'tw' },
  Vietnam: { n: '704', a2: 'vn' }, Laos: { n: '418', a2: 'la' }, Cambodia: { n: '116', a2: 'kh' },
  Thailand: { n: '764', a2: 'th' }, Myanmar: { n: '104', a2: 'mm' }, Malaysia: { n: '458', a2: 'my' },
  Indonesia: { n: '360', a2: 'id' }, Philippines: { n: '608', a2: 'ph' }, Kazakhstan: { n: '398', a2: 'kz' },
  Uzbekistan: { n: '860', a2: 'uz' }, Turkmenistan: { n: '795', a2: 'tm' }, Kyrgyzstan: { n: '417', a2: 'kg' },
  Tajikistan: { n: '762', a2: 'tj' }, Azerbaijan: { n: '031', a2: 'az' }, Armenia: { n: '051', a2: 'am' },
  Georgia: { n: '268', a2: 'ge' }, Australia: { n: '036', a2: 'au' }, 'New Zealand': { n: '554', a2: 'nz' },
  'Papua New Guinea': { n: '598', a2: 'pg' }, 'United States of America': { n: '840', a2: 'us' },
  Canada: { n: '124', a2: 'ca' }, Mexico: { n: '484', a2: 'mx' }, Guatemala: { n: '320', a2: 'gt' },
  Honduras: { n: '340', a2: 'hn' }, 'El Salvador': { n: '222', a2: 'sv' }, Nicaragua: { n: '558', a2: 'ni' },
  'Costa Rica': { n: '188', a2: 'cr' }, Panama: { n: '591', a2: 'pa' }, Cuba: { n: '192', a2: 'cu' },
  'Dominican Rep.': { n: '214', a2: 'do' }, Haiti: { n: '332', a2: 'ht' }, Jamaica: { n: '388', a2: 'jm' },
  Colombia: { n: '170', a2: 'co' }, Venezuela: { n: '862', a2: 've' }, Ecuador: { n: '218', a2: 'ec' },
  Peru: { n: '604', a2: 'pe' }, Bolivia: { n: '068', a2: 'bo' }, Chile: { n: '152', a2: 'cl' },
  Argentina: { n: '032', a2: 'ar' }, Uruguay: { n: '858', a2: 'uy' }, Paraguay: { n: '600', a2: 'py' },
  Brazil: { n: '076', a2: 'br' }, Guyana: { n: '328', a2: 'gy' }, Suriname: { n: '740', a2: 'sr' },
  Cyprus: { n: '196', a2: 'cy' }, Slovakia: { n: '703', a2: 'sk' }, Slovenia: { n: '705', a2: 'si' },
  'Bosnia and Herz.': { n: '070', a2: 'ba' }, Montenegro: { n: '499', a2: 'me' },
  'North Macedonia': { n: '807', a2: 'mk' }, Moldova: { n: '498', a2: 'md' }, Lithuania: { n: '440', a2: 'lt' },
  Latvia: { n: '428', a2: 'lv' }, Estonia: { n: '233', a2: 'ee' }, Luxembourg: { n: '442', a2: 'lu' },
}

/** Los códigos que `npm run flags` tiene que copiar. */
export const FLAG_CODES = [...new Set(Object.values(ISO_CODES).map((code) => code.a2))].sort()

const BY_NUMERIC = new Map(Object.values(ISO_CODES).map((code) => [code.n, code.a2]))

/** Alfa-2 a partir del `feature.id` numérico del atlas («724» → «es»). */
export function flagCodeByNumericId(numericId: string): string | null {
  return BY_NUMERIC.get(String(numericId).padStart(3, '0')) ?? null
}
