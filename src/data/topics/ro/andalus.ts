import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/andalus.ts`. Aceeași formă: 6 secțiuni
   în aceeași ordine, 14 date, 12 concepte, 3 dezbateri, 12 surse, un document
   comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const andalusRo: TopicTranslation = {
  title: 'Al-Andalus și regatele creștine',
  description: 'Opt secole peninsulare: cucerire, califat, frontieră, expansiune creștină și 1492.',
  years: '711–1492',
  summary:
    'Istoria peninsulară dintre 711 și 1492 a fost, mai mult ca oricare alta, teren de ceartă identitară. Vreme de secole a fost povestită drept o „Reconquistă”: redobândirea legitimă a unei Spanii pierdute. Mai apoi a fost povestită drept o „conviețuire” model între trei culturi. Niciuna dintre cele două versiuni nu rezistă la cercetarea documentelor. Ce arată cercetarea este un spațiu fărâmițat, schimbător și adânc legat de Mediterana, unde războiul, înțelegerea, tributul și schimbul au funcționat în același timp, vreme de opt secole.',
  keyDates: [
    { date: '711', event: 'Debarcarea lui Tariq; înfrângerea lui Roderic la Guadalete.' },
    { date: '756', event: 'Abd al-Rahman I întemeiază emiratul de sine stătător al Cordobei.' },
    { date: '929', event: 'Abd al-Rahman al III-lea se proclamă calif.' },
    { date: '976–1002', event: 'Almanzor: dictatură militară și campanii împotriva regatelor din nord.' },
    { date: '1031', event: 'Sfârșitul califatului; fărâmițare în regate de taifas.' },
    { date: '1085', event: 'Alfons al VI-lea ia Toledo.' },
    { date: '1086–1147', event: 'Intervenția almoravidă, venită din Maghreb.' },
    { date: '1147–1212', event: 'Stăpânirea almohadă.' },
    { date: '1212', event: 'Las Navas de Tolosa: înfrângere almohadă hotărâtoare.' },
    { date: '1236–1248', event: 'Cucerirea Cordobei, a Valenciei și a Sevillei.' },
    { date: '1238', event: 'Întemeierea regatului nazarid din Granada, vasal tributar al Castiliei.' },
    { date: '1391', event: 'Pogromuri răspândite peste tot împotriva comunităților evreiești peninsulare.' },
    { date: '1478', event: 'Întemeierea Inchiziției castiliene.' },
    { date: '1492', event: 'Cucerirea Granadei și decretul de izgonire a evreilor.' },
  ],
  sections: [
    {
      title: '711: ce s-a întâmplat și ce nu',
      body: [
        'Regatul vizigot s-a prăbușit cu o iuțeală ce continuă să mire. Un corp de oaste inițial mic, condus de Tariq ibn Ziyad și alcătuit mai ales din berberi nord-africani, l-a înfrânt pe regele Roderic în 711, iar în doar șapte ani stăpânirea musulmană se întindea peste aproape toată peninsula.',
        'Explicația nu stă într-o întâietate militară covârșitoare, ci în șubrezenia statului vizigot: o monarhie electivă cu războaie de succesiune fără sfârșit, o aristocrație despicată în tabere, o fiscalitate apăsătoare și o populație evreiască prigonită prin legile ultimelor concilii de la Toledo. Mai multe pături nu aveau motive să apere regimul de atunci.',
        'Mecanismul de temelie al cuceririi a fost înțelegerea, nu bătălia. Tratatul lui Teodomiro (713), păstrat în surse arabe, este cel mai bine documentat exemplu: nobilul vizigot Teodomiro își păstrează teritoriile din sud-est, locuitorii lui își păstrează religia, bisericile și averile, iar în schimb plătesc un tribut anual fixat în bani și în natură. Acest model de capitulare s-a repetat prin toată peninsula.',
        'Despre firea cuceririi există o ceartă care se cuvine cunoscută. Ignacio Olagüe a susținut în anii șaptezeci că nu a existat năvălire, ci o revoluție religioasă dinăuntru; teza a fost readusă mai apoi de Emilio González Ferrín. Arheologia, numismatica — sunt monede bilingve bătute deja în 716 — și sursele latine și arabe din acea vreme o contrazic pe față, iar poziția este minoritară și respinsă de aproape toți arabiștii și medieviștii.',
      ].join('\n\n'),
      callout:
        'Numele „al-Andalus” apare pentru prima dată pe o monedă din 716. Obârșia lui rămâne discutată: s-a propus o legătură cu vandalii, cu goticul *landahlauts* („tragere la sorți a pământurilor”) și cu un nume de loc dinainte de romani.',
    },
    {
      title: 'Califatul Cordobei și societatea andaluză',
      body: [
        'Abd al-Rahman I, supraviețuitor omeiad al măcelului abasid, a întemeiat în 756 un emirat de sine stătător față de Bagdad. În 929, Abd al-Rahman al III-lea a făcut pasul hotărâtor, proclamându-se calif și cerând astfel autoritatea religioasă cea mai înaltă, în fața Bagdadului și a fatimizilor din Cairo. Cordoba a ajuns unul dintre cele mai mari orașe ale Europei — estimările merg între 100.000 și 250.000 de locuitori —, cu iluminat, canalizare, băi publice și o bibliotecă a palatului pe care sursele o socotesc la sute de mii de volume.',
        'Societatea andaluză era foarte amestecată. Conviețuiau arabi — minoritate stăpânitoare și despicată în tabere de trib —, berberi, muladíes (hispanici trecuți la islam, majoritatea populației musulmane), mozarabi (creștini care își păstrau religia sub stăpânire islamică) și evrei, a căror stare a fost în genere mult mai bună decât în Europa creștină din acea vreme: au ajuns să ocupe dregătorii înalte, precum Hasday ibn Shaprut, medic și diplomat al lui Abd al-Rahman al III-lea.',
        'Temelia economică îmbina o agricultură de irigație foarte roditoare — cu culturi noi, precum orezul, trestia de zahăr, bumbacul, citricele și vânăta, și cu tehnică hidraulică de noria și canale de udare —, un meșteșug orășenesc priceput la textile, piele și ceramică, și o legătură deplină cu rețelele comerciale ale Mediteranei și ale Saharei, care aduceau aur african.',
        'Producția de gândire a fost de prim rang. Averroes, comentator al lui Aristotel, a cărui operă a hotărât scolastica latină; Maimonide, filozof evreu, autor al *Călăuzei rătăciților*; Ibn Hazm, autorul *Colierului porumbiței*; Al-Zahrawi (Albucasis), al cărui tratat de chirurgie a fost folosit în Europa secole întregi; Ibn Tufayl și romanul lui filozofic. Este grăitor că atât Averroes, cât și Maimonide au suferit prigoană sau exil sub almohazi: strălucirea culturală nu a fost neîntreruptă și nici la fel de îngăduitoare peste tot.',
        'Califatul s-a prăbușit repede după moartea lui Almanzor. Fitna din 1009-1031 a pus capăt unității și a dat naștere regatelor de taifas: vreo treizeci de state care s-au întrecut între ele, au ținut curți strălucite din punct de vedere cultural și, ca să se apere unele de altele, au plătit tribute (parias) regatelor creștine din nord, finanțând astfel expansiunea propriilor dușmani.',
      ].join('\n\n'),
    },
    {
      title: 'Frontiera: război, înțelegere și tribut',
      body: [
        'Imaginea a două tabere unite, care se înfruntă din pricina credinței, nu se potrivește cu documentele. Frontiera peninsulară a fost secole întregi o zonă cu găuri, unde se îmbinau prădăciuni, armistiții, alianțe încrucișate, comerț și căsătorii politice.',
        'Alianțele dintre creștini și musulmani împotriva altor creștini sau musulmani au fost statornice, nu excepții. Cidul este exemplul cel mai limpede: surghiunit de Alfons al VI-lea, a slujit ca șef militar regelui musulman din Zaragoza, a luptat împotriva creștinilor și a sfârșit cârmuind Valencia. Personajul pe care tradiția l-a prefăcut în simbol al Reconquistei și-a petrecut o bună parte a vieții în slujba unui taifa.',
        'Sistemul parias este deosebit de grăitor. Regatele de taifas plăteau tribute anuale în aur Castiliei, Leónului, Navarrei sau Aragonului, în schimbul ocrotirii sau al neatacării. Acel aur a finanțat clădirea bisericilor romanice, Drumul Sfântului Iacob și armatele care aveau să cucerească mai apoi acele teritorii. Logica stăpânitoare nu era cruciada, ci scoaterea de resurse: un taifa viu și tributar valora mai mult decât unul cucerit.',
        'Intervenția almoravidă (1086) și cea almohadă (1147) au schimbat tonul. Amândouă mișcările, venite din Maghreb, au sosit chemate de andaluzi ca să oprească înaintarea creștină, dar au impus o asprime religioasă căreia elitele locale i s-au împotrivit, au înăsprit starea mozarabilor și a evreilor — au fost emigrări și treceri silite la islam — și au ridicat temperatura ideologică a conflictului.',
        'Și de partea creștină a crescut retorica religioasă. Înrâurirea Cluny-ului, aducerea idealului de cruciadă și bulele papale care puneau semnul egal între lupta peninsulară și cea din Țara Sfântă au dat acoperire ideologică la ceva ce fusese, până atunci, mai ales o expansiune teritorială. Las Navas de Tolosa (1212), rânduită ca o cruciadă cu luptători de dincolo de Pirinei, marchează statornicirea acestui cadru.',
      ].join('\n\n'),
      callout:
        'Mudéjarii — musulmani rămași sub stăpânire creștină după cucerire — au fost secole întregi mâna de lucru priceputa a Aragonului și a Valenciei. Arta lor, cea mudéjar, este dovada cea mai văzută că despărțirea dintre culturi nu a fost niciodată deplină.',
    },
    {
      title: 'Regatele creștine: expansiune și modele diferite',
      body: [
        'Nucleele creștine din nord s-au născut mici și împrăștiate: regatul Asturiei, apoi León; comitatul și apoi regatul Castiliei; Navarra; comitatele pirenaice care aveau să alcătuiască Aragonul și Catalonia. Expansiunea lor a fost inegală, cu întreruperi și, adesea, îndreptată mai mult împotriva vecinilor creștini decât împotriva Al-Andalusului.',
        'Motorul nu a fost doar militar. Repopularea a fost unealta hotărâtoare: fără coloniști care să ocupe, să lucreze și să apere teritoriul, cucerirea nu se statornicea. Modelele s-au deosebit, cu urmări sociale uriașe. În valea Duero s-a practicat presura, ocuparea liberă de către mici proprietari, ceea ce a dat naștere unei societăți de țărani relativ liberi. La sud de Tajo și în Extremadura s-a repopulat prin municipii cu fueros largi și cu întinderi mari. Iar în Andaluzia și în Extremadura, după cuceririle secolului al XIII-lea, s-a împărțit prin mari danii către nobilime și către ordinele militare, creând latifundiul care avea să rânduiască structura agrară a sudului până în secolul XX.',
        'Ordinele militare — Santiago, Calatrava, Alcántara — au fost o unealtă de temelie: îmbinau o funcție militară statornică, putința de a repopula și administrarea unor averi uriașe. Puterea lor a ajuns să neliniștească chiar monarhiile, care au sfârșit prin a-și lua în stăpânire marile lor dregătorii.',
        'Cultura regatelor creștine a absorbit din plin moștenirea andaluză. Școala de Traducători de la Toledo, lucrând după 1085 și rânduită sub Alfons al X-lea, a trecut în latină și apoi în castiliană opere științifice și filozofice arabe și grecești. Alfons al X-lea a mai sprijinit și scrierea în castiliană a lucrărilor juridice, istorice și științifice, și Cântecele Sfintei Maria, în galego-portugheză. Datoria lingvistică este uriașă: vreo patru mii de cuvinte din castiliana de azi vin din arabă.',
        'Structura politică ieșită de aici a fost în mai multe feluri. Coroana Aragonului a lucrat ca o confederație, cu instituții deosebite pentru Aragon, Catalonia, Valencia și Mallorca, cu Cortesuri puternice și cu pactismul drept principiu: regele guvernează cu încuviințarea regatului. Castilia a dezvoltat o monarhie mai centralizată, cu Cortesuri mai puțin în stare să îl îngrădească pe rege. Această deosebire avea să atârne secole întregi, până la decretele Noii Rânduieli din 1707-1716.',
      ].join('\n\n'),
    },
    {
      title: 'Conviețuire, coexistență sau conflict',
      body: [
        'Cuvântul „convivencia” l-a răspândit Américo Castro în *España en su historia* (1948), ca să descrie legătura roditoare dintre creștini, musulmani și evrei, și ca să susțină că identitatea spaniolă s-a format în acel contact. Claudio Sánchez-Albornoz i-a răspuns aspru, apărând o continuitate hispanică dinainte și o legătură mai ales potrivnică. Cearta, ținută decenii întregi din exilul amândurora, a rânduit dezbaterea o jumătate de secol.',
        'Cercetarea de mai apoi i-a îndreptat pe amândoi. A fost o legătură puternică — împrumuturi de limbă, tehnici împărtășite, traduceri, arhitectură amestecată, minorități cu statut juridic recunoscut — și, în același timp, a fost o ierarhie legală aspră, despărțire de locuit, violență din când în când și neîncredere. David Nirenberg a arătat în *Communities of Violence* (1996) că violența împotriva minorităților nu era o rupere a sistemului, ci parte din funcționarea lui de fiecare zi: episoade rituale și ținute sub control, care întăreau ierarhia fără să distrugă coexistența.',
        'Cuvântul preferat astăzi de mulți cercetători este „coexistență” sau „interes comun”: a conviețui fiindcă e de folos, nu din toleranță în înțelesul de azi. Nici Al-Andalus, nici regatele creștine nu gândeau egalitatea religioasă; amândouă rânduiau societatea în comunități inegale din punct de vedere juridic, sub o religie stăpânitoare.',
        'Secolul al XIV-lea a adus o înrăutățire limpede. Ciuma neagră, crizele economice și predicile care ațâțau au dus la pogromurile din 1391, care au nimicit comunități evreiești întregi și au pricinuit treceri în masă la creștinism. Apariția unui mare grup de convertiți a născut o problemă nouă: bănuiala asupra sincerității credinței lor, care a îndreptățit întemeierea Inchiziției castiliene în 1478 și răspândirea statutelor de curăție a sângelui, un criteriu de excludere întemeiat pe neam, nu pe credință.',
        'Decretul din 1492 i-a silit pe evrei să treacă la creștinism sau să părăsească regatele Castiliei și Aragonului. Cifrele se discută — estimările de azi merg între 50.000 și 100.000 de exilați, mult sub socotelile tradiționale —, dar efectul cultural a fost adânc: s-a născut diaspora sefardă, care a păstrat secole întregi ladino. Musulmanii din Granada, cărora capitulările din 1491 le garantau religia, au văzut că înțelegerea nu a fost ținută, în 1502.',
      ].join('\n\n'),
      callout:
        'Statutele de curăție a sângelui au mutat criteriul de excludere de la credință la neam. Un convertit sincer, la a treia generație, rămânea tot bănuit: este un precedent istoric grăitor al discriminării după obârșie.',
    },
    {
      title: 'Conceptul de Reconquistă și greutatea lui politică',
      body: [
        'Cuvântul „Reconquista” nu este medieval în înțelesul în care se folosește astăzi. Cronicarii secolelor IX-XI vorbesc despre restaurarea regatului got, despre expansiune, despre război; termenul se statornicește ca o categorie istoriografică în secolul al XIX-lea, în plin avânt al naționalismului, și capătă forma lui cea mai strânsă sub franchism, care l-a prefăcut în mit de temelie al unei Spanii catolice și unite.',
        'Obiecțiile la acest concept sunt mai multe. Presupune o continuitate națională între regatul vizigot și regatele medievale, pe care documentele nu o susțin. Strânge opt secole de procese deosebite într-un singur proiect, unitar, pe care nimeni nu l-a plănuit. Și numește „re-cucerire” ocuparea unor teritorii pe care niciunul dintre cuceritori nu le stăpânise vreodată.',
        'Discuția rămâne deschisă. Unii medieviști, precum Francisco García Fitz sau Martín Ríos Saloma, apără ideea că termenul își păstrează folosul dacă este golit de greutatea lui ideologică: a existat într-adevăr o îndreptățire religioasă a războiului, o idee de restaurare prezentă în cronici încă din secolul al IX-lea și o expansiune teritorială ținută și conștientă. Alții preferă să vorbească pur și simplu despre „expansiunea regatelor creștine”, ca să ocolească bagajul adunat.',
        'Ce se respinge în unanimitate este povestea unui război sfânt neîntrerupt de opt sute de ani. Au fost perioade lungi de statornicie la frontieră, alianțe încrucișate statornice, tribute care au finanțat ambele tabere și o mișcare necontenită de oameni, de tehnici și de cuvinte. Fazele de cucerire adevărată se strâng în momente anume: secolul al XI-lea, după fitna, al XIII-lea, după Las Navas, și 1482-1492, pentru Granada.',
        'Chestiunea contează dincolo de mediul academic. „Reconquista” este astăzi un termen activ în discursul politic european, folosit de mișcări identitare cu un înțeles limpede de azi. A cunoaște obârșia lui istoriografică este, în acest context, o unealtă critică, nu o curiozitate de cărturar.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Muladí', definition: 'Hispanic trecut la islam. Alcătuiau majoritatea populației musulmane din Al-Andalus.' },
    { term: 'Mozarab', definition: 'Creștin care își păstra religia sub stăpânire islamică, cu statut de dhimmi.' },
    { term: 'Mudéjar', definition: 'Musulman rămas sub stăpânire creștină după cucerire, păstrându-și religia.' },
    { term: 'Taifa', definition: 'Fiecare dintre regatele ivite din destrămarea califatului Cordobei, în 1031.' },
    { term: 'Parias', definition: 'Tribut în aur, plătit de taifas regatelor creștine, în schimbul ocrotirii sau al neatacării.' },
    { term: 'Fitna', definition: 'Război civil. Cel din 1009-1031 a pus capăt califatului Cordobei.' },
    { term: 'Presura', definition: 'Ocuparea liberă a pământurilor de către mici proprietari, model de repopulare al văii Duero.' },
    { term: 'Donadío', definition: 'Mare dăruire de pământ către nobilime și către ordinele militare. Obârșia latifundiului andaluz și extremenean.' },
    { term: 'Fuero', definition: 'Ansamblu de privilegii și de norme date unei localități, ca să atragă și să țină locuitori.' },
    { term: 'Convertit', definition: 'Evreu trecut la creștinism, mai ales după pogromurile din 1391. Ținut sub bănuială statornică.' },
    { term: 'Curăție a sângelui', definition: 'Statute care îi excludeau din dregătorii pe urmașii convertiților: criteriu de neam, nu de credință.' },
    { term: 'Pactism', definition: 'Principiul Coroanei Aragonului, după care regele guvernează cu încuviințarea regatului, în Cortesuri.' },
  ],
  debates: [
    {
      question: 'Este valabil conceptul de „Reconquistă”?',
      positions: [
        {
          school: 'Respingerea termenului',
          argument:
            'Este o categorie a secolului al XIX-lea, înăsprită sub franchism. Presupune o continuitate națională ce nu a existat, unește opt secole deosebite într-un singur proiect și numește „re-cucerire” ocuparea unor teritorii pe care cuceritorii nu le stăpâniseră niciodată.',
        },
        {
          school: 'Apărare critică (García Fitz, Ríos Saloma)',
          argument:
            'Golit de greutatea lui ideologică, termenul descrie ceva real: o îndreptățire religioasă a războiului, o idee de restaurare prezentă în cronici încă din secolul al IX-lea și o expansiune teritorială ținută și conștientă.',
        },
      ],
      state:
        'Nu este acord asupra cuvântului, dar da asupra fondului: se respinge în unanimitate povestea unui război sfânt neîntrerupt de opt sute de ani. Fazele de cucerire adevărată au fost anume și despărțite de perioade lungi de statornicie, de alianțe încrucișate și de tribute.',
    },
    {
      question: 'A existat „conviețuire” între cele trei culturi?',
      positions: [
        {
          school: 'Conviețuire (Américo Castro, 1948)',
          argument:
            'Identitatea spaniolă s-a format în legătura roditoare dintre creștini, musulmani și evrei. Ce este propriu spaniol se naște din acel contact, nu dintr-o fire dinainte.',
        },
        {
          school: 'Continuitate hispanică (Sánchez-Albornoz)',
          argument:
            'Exista un fond hispanic dinainte de islam, care a dăinuit; legătura dintre comunități a fost mai ales potrivnică, iar elementul islamic, o paranteză străină.',
        },
        {
          school: 'Coexistență ierarhizată (Nirenberg, 1996)',
          argument:
            'A fost o legătură puternică și, în același timp, o ierarhie legală aspră, despărțire și violență din când în când. Episoadele de violență nu rupeau sistemul: făceau parte din funcționarea lui și întăreau ierarhia.',
        },
      ],
      state:
        'Cearta Castro–Sánchez-Albornoz este socotită depășită în forma ei dintâi, amândoi fiind marcați de exil și de chestiunea identității naționale. Se preferă vorbirea despre „coexistență” sau „interes comun”: a conviețui fiindcă e de folos, fără toleranță în înțelesul de azi.',
    },
    {
      question: 'A existat cu adevărat o năvălire în 711?',
      positions: [
        {
          school: 'Negarea năvălirii (Olagüe, 1974; González Ferrín)',
          argument:
            'Nu ar fi existat cucerire militară, ci o schimbare religioasă dinăuntru a populației hispanice, spre forme de monoteism care au ajuns să se contopească cu islamul.',
        },
        {
          school: 'Poziția majoritară',
          argument:
            'Arheologia, numismatica — monede bilingve bătute deja în 716 —, cronicile latine din acea vreme și sursele arabe documentează cucerirea și înțelegerile ei de capitulare, precum Tratatul lui Teodomiro din 713.',
        },
      ],
      state:
        'Teza negării este respinsă de aproape toți arabiștii și medieviștii. Interesul ei este istoriografic: arată cum istoria peninsulară rămâne teren de ceartă identitară.',
    },
  ],
  sources: [
    { author: 'Anonim', title: 'Cronica mozarabă din 754', year: '754', kind: 'primaria', note: 'Sursa latină cea mai apropiată de cucerire. Scrisă sub stăpânire islamică.' },
    { author: 'Anonim', title: 'Tratatul lui Teodomiro', year: '713', kind: 'primaria', note: 'Înțelegere de capitulare, păstrată în surse arabe. Model al mecanismului cuceririi.' },
    { author: 'Ibn Hazm', title: 'Colierul porumbiței', year: 'c. 1022', kind: 'primaria', note: 'Tratat despre iubire și despre societatea cordobeză în ajunul fitnei.' },
    { author: 'Maimonide', title: 'Călăuza rătăciților', year: 'c. 1190', kind: 'primaria', note: 'Filozofie evreiască scrisă în arabă. Autorul ei a trebuit să se exileze din pricina presiunii almohade.' },
    { author: 'Averroes (Ibn Rushd)', title: 'Comentarii la Aristotel', year: 'c. 1180', kind: 'primaria', note: 'Au hotărât scolastica latină. A suferit și el prigoana almohadă.' },
    { author: 'Alfons al X-lea', title: 'Estoria de España; Cele Șapte Părți', year: 'c. 1270–1284', kind: 'primaria', note: 'Fixează castiliana ca limbă a istoriei și a dreptului, și rânduiesc statutul minorităților.' },
    { author: 'Américo Castro', title: 'España en su historia', year: '1948', kind: 'estudio', note: 'Formulează teza conviețuirii ca obârșie a identității spaniole.' },
    { author: 'Claudio Sánchez-Albornoz', title: 'España, un enigma histórico', year: '1956', kind: 'estudio', note: 'Răspuns dat lui Castro, dinspre teza continuității hispanice.' },
    { author: 'Pierre Guichard', title: 'Al-Andalus. Estructura antropológica de una sociedad islámica en Occidente', year: '1976', kind: 'estudio', note: 'Apără firea deplin islamică și răsăriteană a societății andaluze.' },
    { author: 'David Nirenberg', title: 'Communities of Violence', year: '1996', kind: 'estudio', note: 'Analizează violența împotriva minorităților ca parte funcțională a sistemului de coexistență.' },
    { author: 'Francisco García Fitz', title: 'La Reconquista', year: '2010', kind: 'estudio', note: 'Apărare critică a conceptului, golit de greutatea lui ideologică.' },
    { author: 'Eduardo Manzano Moreno', title: 'Conquistadores, emires y califas', year: '2006', kind: 'estudio', note: 'Sinteză de referință despre formarea statului andaluz.' },
  ],
  documents: [
    {
      section: 0,
      title: 'Înțelegerea lui Teodomiro',
      text: [
        'În numele lui Dumnezeu. Scrisoare a lui Abd al-Aziz către Teodomiro, fiul lui Gandaris, prin care primește pacea și dobândește făgăduința lui Dumnezeu și ocrotirea lui.',
        'Nu va fi dat jos, nici el, nici vreunul dintre ai lui, nu vor fi uciși, nici luați robi, nici despărțiți de femeile și de copiii lor, nu vor fi siliți în credința lor, nu le vor fi arse bisericile.',
        'Cu condiția să predea șapte orașe, să nu dea adăpost dușmanilor noștri și nici să le ascundă știrile, și ca fiecare bărbat liber să plătească un dinar, patru măsuri de grâu și patru de orz.',
      ].join('\n\n'),
      source: 'Tratatul lui Teodomiro, anul 713. Păstrat în cronici arabe.',
      note: 'Versiune proprie după arabă.',
      question: 'Un nobil vizigot își păstrează orașele, credința și oamenii, în schimbul unui tribut. Ce spune asta despre iuțeala cuceririi din 711? A fost o înlocuire de populație sau o schimbare a cui strânge tributul?',
    },
  ],
  images: [
    {
      alt: 'Fântâna Leilor din Alhambra, cu doisprezece lei de piatră ținând cupa centrală',
      caption: 'Curtea Leilor din Alhambra, din secolul al XIV-lea nazarid.',
    },
    {
      alt: 'Rămășițe săpate ale unui oraș-palat pe terase, cu arcade în potcoavă și ziduri din piatră cioplită',
      caption: 'Madinat al-Zahra, întemeiat de Abd al-Rahman al III-lea pe la 936. Un oraș întreg clădit ca să arate noul titlu de calif.',
    },
    {
      alt: 'Sală de primire cu arcuri în potcoavă pe coloane de marmură și panouri de piatră cioplită cu motive vegetale',
      caption: 'Salonul Bogat din Madinat al-Zahra. Aici erau primite solii creștine și nord-africane.',
    },
    {
      alt: 'Turn pătrat din cărămidă, cu panouri de romburi cioplite și un corp de clopote renascentist deasupra',
      caption: 'Giralda din Sevilla: minaret almohad din secolul al XII-lea, cu un turn de clopote creștin adăugat în secolul al XVI-lea. Orașul cucerit este refolosit, nu șters.',
    },
  ],
  questions: [
    {
      question: 'Ce explică mai bine iuțeala prăbușirii regatului vizigot, în 711?',
      options: [
        'Întâietatea tehnologică a armatelor musulmane',
        'Șubrezenia statului vizigot: monarhie electivă, războaie de succesiune, aristocrație despicată și minorități prigonite',
        'O epidemie dinainte, care a golit peninsula de oameni',
        'Lipsa deplină a unei armate vizigote',
      ],
      explanation: 'Mai multe pături nu aveau motive să apere regimul. Mecanismul de temelie al cuceririi a fost înțelegerea de capitulare, nu bătălia.',
    },
    {
      question: 'Ce stabilea Tratatul lui Teodomiro (713)?',
      options: [
        'Trecerea silită a vizigoților la islam',
        'Că un nobil vizigot își păstra teritoriile, iar oamenii lui, religia și averile, în schimbul unui tribut anual',
        'Izgonirea creștinilor din sud-estul peninsulei',
        'Alianța militară dintre vizigoți și bizantini',
      ],
      explanation: 'Este cel mai bine documentat exemplu al modelului de capitulare, repetat prin toată peninsula.',
    },
    {
      question: 'Ce dovadă contrazice teza după care nu ar fi fost năvălire în 711?',
      options: [
        'Lipsa surselor scrise',
        'Arheologia, monedele bilingve bătute deja în 716 și cronicile latine și arabe din acea vreme',
        'Statutele de curăție a sângelui',
        'Capitulările Granadei din 1491',
      ],
      explanation: 'Teza lui Olagüe și a lui González Ferrín este respinsă de aproape toți arabiștii și medieviștii.',
    },
    {
      question: 'Ce grup alcătuia majoritatea populației musulmane a Al-Andalusului?',
      options: ['Arabii', 'Muladíes, hispanici trecuți la islam', 'Berberii', 'Mozarabii'],
      explanation: 'Arabii au fost întotdeauna o minoritate stăpânitoare, pe deasupra despicată în tabere de trib. Trecerea populației locale la islam a fost treptată.',
    },
    {
      question: 'De ce a fost grăitor faptul că Abd al-Rahman al III-lea s-a proclamat calif, în 929?',
      options: [
        'Fiindcă a unificat toată peninsula',
        'Fiindcă cerea autoritatea religioasă cea mai înaltă, în fața Bagdadului și a fatimizilor din Cairo',
        'Fiindcă a desființat impozitul pentru creștini',
        'Fiindcă a mutat capitala la Sevilla',
      ],
      explanation: 'Titlul de calif nu era doar politic: însemna conducerea comunității credincioșilor, cerută până atunci dinspre Răsărit.',
    },
    {
      question: 'Ce erau parias și ce urmare au avut?',
      options: [
        'Impozite plătite de mozarabi emirului; finanțau moscheile',
        'Tribute în aur, plătite de taifas regatelor creștine; au finanțat biserici, Drumul Sfântului Iacob și armatele care aveau să le cucerească mai apoi',
        'Taxe comerciale ale portului Almería',
        'Rente senioriale ale mudéjarilor aragonezi',
      ],
      explanation: 'Logica stăpânitoare nu era cruciada, ci scoaterea de resurse: un taifa viu și tributar valora mai mult decât unul cucerit.',
    },
    {
      question: 'De ce este grăitor drumul Cidului?',
      options: [
        'Fiindcă nu a luptat niciodată împotriva musulmanilor',
        'Fiindcă, surghiunit de Alfons al VI-lea, a slujit regelui musulman din Zaragoza și a luptat împotriva creștinilor',
        'Fiindcă a fost cel dintâi rege al Valenciei',
        'Fiindcă a respins mereu alianțele cu taifas',
      ],
      explanation: 'Personajul prefăcut în simbol al Reconquistei și-a petrecut o bună parte a vieții în slujba unui taifa. Alianțele încrucișate erau regula, nu excepția.',
    },
    {
      question: 'Ce efect a avut intervenția almoravidă și cea almohadă?',
      options: [
        'A restabilit toleranța față de mozarabi și evrei',
        'A impus o asprime religioasă care a înăsprit starea minorităților și a ridicat temperatura ideologică a conflictului',
        'A unificat pe deplin Al-Andalus cu Maghrebul, fără împotrivire',
        'A pricinuit sfârșitul numaidecât al stăpânirii musulmane',
      ],
      explanation: 'Atât Averroes, cât și Maimonide au suferit prigoană sau exil sub almohazi: strălucirea culturală andaluză nu a fost neîntreruptă și nici la fel de îngăduitoare peste tot.',
    },
    {
      question: 'Ce urmare socială a avut modelul de repopulare prin donadíos, în Andaluzia și în Extremadura?',
      options: [
        'O societate de mici proprietari liberi',
        'Nașterea latifundiului, care avea să rânduiască structura agrară a sudului până în secolul XX',
        'Dispariția nobilimii',
        'Întâietatea municipiilor orășenești',
      ],
      explanation: 'În Duero, presura a dat naștere unei țărănimi libere; la sud de Tajo, municipii cu întinderi mari; în Andaluzia, mari danii către nobilime și către ordinele militare.',
    },
    {
      question: 'Ce deosebea din punct de vedere politic Coroana Aragonului de Castilia?',
      options: [
        'Aragonul nu avea Cortesuri',
        'Aragonul lucra ca o confederație, cu instituții deosebite și cu pactism: regele guvernează cu încuviințarea regatului',
        'Castilia era o republică',
        'Aragonul nu îl recunoștea pe rege drept autoritate',
      ],
      explanation: 'Castilia a dezvoltat o monarhie mai centralizată, cu Cortesuri mai puțin în stare să o îngrădească. Deosebirea a atârnat până la decretele Noii Rânduieli din 1707-1716.',
    },
    {
      question: 'Potrivit lui Nirenberg, ce rol avea violența împotriva minorităților?',
      options: [
        'Era o rupere de excepție a ordinii sociale',
        'Făcea parte din funcționarea de fiecare zi a sistemului și întărea ierarhia fără să distrugă coexistența',
        'Nu a existat până în 1492',
        'Se îndrepta doar împotriva mudéjarilor',
      ],
      explanation: 'De aceea se preferă astăzi „coexistență” sau „interes comun” în locul conviețuirii: a conviețui fiindcă e de folos, nu din toleranță în înțelesul de azi.',
    },
    {
      question: 'Ce problemă nouă au adus pogromurile din 1391?',
      options: [
        'Depopularea orașelor',
        'Apariția unui mare grup de convertiți, a căror sinceritate religioasă a fost ținută sub bănuială statornică',
        'Izgonirea numaidecât a evreilor',
        'Trecerea la creștinism a mudéjarilor',
      ],
      explanation: 'Acea bănuială a îndreptățit întemeierea Inchiziției castiliene în 1478 și răspândirea statutelor de curăție a sângelui.',
    },
    {
      question: 'Ce mutare presupun statutele de curăție a sângelui?',
      options: [
        'De la excluderea după neam la excluderea după credință',
        'De la excluderea după credință la excluderea după neam: un convertit sincer, la a treia generație, rămânea tot bănuit',
        'De la excluderea religioasă la excluderea economică',
        'De la excluderea legală la toleranță',
      ],
      explanation: 'Este un precedent istoric grăitor al discriminării după obârșie, deosebit de prigoana strict religioasă.',
    },
    {
      question: 'Care este obiecția istoriografică de temelie la termenul „Reconquistă”?',
      options: [
        'Că expansiunea creștină nu s-a petrecut niciodată',
        'Că presupune o continuitate națională ce nu a existat și unește opt secole deosebite într-un singur proiect, pe care nimeni nu l-a plănuit',
        'Că a fost născocit în secolul al XIII-lea',
        'Că nu apare în nicio cronică medievală',
      ],
      explanation: 'Pe deasupra, numește „re-cucerire” ocuparea unor teritorii pe care cuceritorii nu le stăpâniseră niciodată. Termenul se statornicește în secolul al XIX-lea și se înăsprește sub franchism.',
    },
    {
      question: 'În ce este acord, în ciuda neînțelegerii despre cuvântul „Reconquistă”?',
      options: [
        'Că a fost un război sfânt neîntrerupt de opt sute de ani',
        'În respingerea acelei povești: au fost perioade lungi de statornicie, alianțe încrucișate și tribute, cu faze de cucerire strânse în momente anume',
        'Că nu au existat cuceriri creștine',
        'Că întregul conflict a fost pur economic',
      ],
      explanation: 'Fazele adevărate se strâng în secolul al XI-lea, după fitna, în al XIII-lea, după Las Navas, și în 1482-1492, pentru Granada.',
    },
    {
      question: 'Ce s-a întâmplat cu ce se înțelesese prin capitulările Granadei din 1491?',
      options: [
        'A fost ținut întocmai până în 1609',
        'Le garantau musulmanilor din Granada religia, dar înțelegerea nu a fost ținută, în 1502',
        'Nu au cuprins niciodată garanții religioase',
        'Au fost anulate de papă în 1492',
      ],
      explanation: 'Chiar în 1492, decretul de izgonire i-a silit pe evrei să treacă la creștinism sau să plece; diaspora sefardă a păstrat secole întregi ladino.',
    },
  ],
}
