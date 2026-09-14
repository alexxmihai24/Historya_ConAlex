/* Nombres en rumano de lo que en los datos se guarda en español: países del
   atlas, regiones de los temas, épocas y continentes. La clave es SIEMPRE el
   nombre en español, que es el identificador de rutas, banderas y datos; aquí
   solo se decide qué se pinta. Sin archivo de Vue para poder comprobarlo con
   `npm test`. */

export const COUNTRY_NAMES_RO: Record<string, string> = {
  Albania: 'Albania', Alemania: 'Germania', Austria: 'Austria', Bielorrusia: 'Belarus',
  'Bosnia y Herzegovina': 'Bosnia și Herțegovina', Bulgaria: 'Bulgaria', Bélgica: 'Belgia',
  Chequia: 'Cehia', Chipre: 'Cipru', Croacia: 'Croația', Dinamarca: 'Danemarca',
  Eslovaquia: 'Slovacia', Eslovenia: 'Slovenia', España: 'Spania', Estonia: 'Estonia',
  Finlandia: 'Finlanda', Francia: 'Franța', Georgia: 'Georgia', Grecia: 'Grecia',
  Hungría: 'Ungaria', Irlanda: 'Irlanda', Islandia: 'Islanda', Italia: 'Italia',
  Kazajistán: 'Kazahstan', Letonia: 'Letonia', Lituania: 'Lituania', Luxemburgo: 'Luxemburg',
  'Macedonia del Norte': 'Macedonia de Nord', Moldavia: 'Republica Moldova', Montenegro: 'Muntenegru',
  Noruega: 'Norvegia', 'Países Bajos': 'Țările de Jos', Polonia: 'Polonia', Portugal: 'Portugalia',
  'Reino Unido': 'Regatul Unit', Rumanía: 'România', Rusia: 'Rusia', Serbia: 'Serbia',
  Suecia: 'Suedia', Suiza: 'Elveția', Turquía: 'Turcia', Ucrania: 'Ucraina',

  Afganistán: 'Afganistan', 'Arabia Saudí': 'Arabia Saudită', Armenia: 'Armenia',
  Azerbaiyán: 'Azerbaidjan', Bangladés: 'Bangladesh', Birmania: 'Myanmar', Bután: 'Bhutan',
  Camboya: 'Cambodgia', Catar: 'Qatar', China: 'China', 'Corea del Norte': 'Coreea de Nord',
  'Corea del Sur': 'Coreea de Sud', 'Emiratos Árabes Unidos': 'Emiratele Arabe Unite',
  Filipinas: 'Filipine', India: 'India', Indonesia: 'Indonezia', Irak: 'Irak', Irán: 'Iran',
  Israel: 'Israel', Japón: 'Japonia', Jordania: 'Iordania', Kirguistán: 'Kârgâzstan',
  Kuwait: 'Kuweit', Laos: 'Laos', Líbano: 'Liban', Malasia: 'Malaezia', Mongolia: 'Mongolia',
  Nepal: 'Nepal', Omán: 'Oman', Pakistán: 'Pakistan', Palestina: 'Palestina', Siria: 'Siria',
  'Sri Lanka': 'Sri Lanka', Tailandia: 'Thailanda', Taiwán: 'Taiwan', Tayikistán: 'Tadjikistan',
  Turkmenistán: 'Turkmenistan', Uzbekistán: 'Uzbekistan', Vietnam: 'Vietnam', Yemen: 'Yemen',

  Angola: 'Angola', Argelia: 'Algeria', Botsuana: 'Botswana', Camerún: 'Camerun', Chad: 'Ciad',
  Egipto: 'Egipt', Eritrea: 'Eritreea', Etiopía: 'Etiopia', Ghana: 'Ghana', Kenia: 'Kenya',
  Libia: 'Libia', Madagascar: 'Madagascar', Malí: 'Mali', Marruecos: 'Maroc',
  Mauritania: 'Mauritania', Mozambique: 'Mozambic', Namibia: 'Namibia', Nigeria: 'Nigeria',
  Níger: 'Niger', 'Rep. Dem. del Congo': 'R. D. Congo', Senegal: 'Senegal', Somalia: 'Somalia',
  Sudáfrica: 'Africa de Sud', 'Sudán del Sur': 'Sudanul de Sud', Sudán: 'Sudan',
  'Sáhara Occidental': 'Sahara Occidentală', Tanzania: 'Tanzania', Túnez: 'Tunisia',
  Uganda: 'Uganda', Zambia: 'Zambia', Zimbabue: 'Zimbabwe',

  Argentina: 'Argentina', Bolivia: 'Bolivia', Brasil: 'Brazilia', Chile: 'Chile',
  Colombia: 'Columbia', Ecuador: 'Ecuador', Guyana: 'Guyana', Paraguay: 'Paraguay', Perú: 'Peru',
  Surinam: 'Surinam', Uruguay: 'Uruguay', Venezuela: 'Venezuela', Canadá: 'Canada',
  'Costa Rica': 'Costa Rica', Cuba: 'Cuba', 'El Salvador': 'El Salvador',
  'Estados Unidos': 'Statele Unite', Groenlandia: 'Groenlanda', Guatemala: 'Guatemala',
  Haití: 'Haiti', Honduras: 'Honduras', Jamaica: 'Jamaica', México: 'Mexic',
  Nicaragua: 'Nicaragua', Panamá: 'Panama', 'Rep. Dominicana': 'Republica Dominicană',
  Australia: 'Australia', 'Nueva Zelanda': 'Noua Zeelandă', 'Papúa Nueva Guinea': 'Papua Noua Guinee',

  // Regiones y ámbitos de los temas que no son países del atlas.
  Europa: 'Europa', Mundo: 'Lumea', 'Península ibérica': 'Peninsula Iberică',
  'Mediterráneo oriental': 'Mediterana de Est', Arabia: 'Arabia', América: 'America', África: 'Africa',
}

/* Capitales: Wikidata las da en español. Solo están las que cambian en rumano;
   las demás (Roma, Madrid, Kabul…) se escriben igual. La clave es el nombre
   español tal como viene en `src/data/country-facts.ts`. */
export const CAPITAL_NAMES_RO: Record<string, string> = {
  Berlín: 'Berlin', Argel: 'Alger', Ereván: 'Erevan', Bakú: 'Baku', Daca: 'Dhaka',
  Naipyidó: 'Naypyidaw', Brasilia: 'Brasília', Sofía: 'Sofia', Timbu: 'Thimphu',
  Bruselas: 'Bruxelles', 'Nom Pen': 'Phnom Penh', Yaundé: 'Yaoundé', Yamena: 'N’Djamena',
  Pekín: 'Beijing', Pionyang: 'Phenian', Seúl: 'Seul', 'La Habana': 'Havana',
  Copenhague: 'Copenhaga', 'El Cairo': 'Cairo', 'Washington D. C.': 'Washington',
  Liubliana: 'Ljubljana', Tallin: 'Tallinn', 'Adís Abeba': 'Addis Abeba', París: 'Paris',
  Tiflis: 'Tbilisi', Acra: 'Accra', Atenas: 'Atena', 'Puerto Príncipe': 'Port-au-Prince',
  'Nueva Delhi': 'New Delhi', Yakarta: 'Jakarta', Dublín: 'Dublin', Teherán: 'Teheran',
  Reikiavik: 'Reykjavík', Jerusalén: 'Ierusalim', Tokio: 'Tokyo', Amán: 'Amman',
  Astaná: 'Astana', Biskek: 'Bișkek', 'Ciudad de Kuwait': 'Kuweit', Vientián: 'Vientiane',
  Trípoli: 'Tripoli', Vilna: 'Vilnius', Skopie: 'Skopje', Nuakchot: 'Nouakchott',
  Chisináu: 'Chișinău', 'Ulán Bator': 'Ulan Bator', Katmandú: 'Kathmandu', Abuya: 'Abuja',
  Mascate: 'Muscat', Ramala: 'Ramallah', 'Ciudad de Panamá': 'Panama',
  'Puerto Moresby': 'Port Moresby', Ámsterdam: 'Amsterdam', Varsovia: 'Varșovia',
  Lisboa: 'Lisabona', Londres: 'Londra', Kinsasa: 'Kinshasa', Bucarest: 'București',
  Moscú: 'Moscova', Belgrado: 'Belgrad', Damasco: 'Damasc', Mogadiscio: 'Mogadishu',
  Yuba: 'Juba', Jartum: 'Khartoum', Estocolmo: 'Stockholm', Taipéi: 'Taipei',
  Dusambé: 'Dușanbe', Asjabad: 'Așgabat', Túnez: 'Tunis', Taskent: 'Tașkent',
  Hanói: 'Hanoi', Saná: 'Sanaa', Luxemburgo: 'Luxemburg', Viena: 'Viena',
}

export const ERA_NAMES_RO: Record<string, string> = {
  Antigüedad: 'Antichitatea',
  'Edad Media': 'Evul Mediu',
  'Edad Moderna': 'Epoca Modernă',
  'Edad Contemporánea': 'Epoca Contemporană',
}

export const CONTINENT_NAMES_RO: Record<string, string> = {
  Europa: 'Europa',
  Asia: 'Asia',
  África: 'Africa',
  'América del Norte': 'America de Nord',
  'América del Sur': 'America de Sud',
  Oceanía: 'Oceania',
}
