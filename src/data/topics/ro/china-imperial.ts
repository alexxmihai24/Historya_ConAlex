import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/china-imperial.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13 date, 14
   concepte, 3 dezbateri, 22 surse, un document comentat, 4 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const chinaImperialRo: TopicTranslation = {
  title: 'China imperială',
  description: 'Două mii de ani ale unui stat birocratic ce s-a refăcut iarăși și iarăși, a fost economia cea mai înaintată din lume și a pierdut acel loc în secolul al XIX-lea.',
  years: '221 î.Hr.–1912',
  summary:
    'Niciun alt stat din lume nu a ținut atâta și nu s-a refăcut de atâtea ori pe aceleași temelii. De la unirea lui Qin în 221 î.Hr. până la abdicarea ultimului împărat în 1912, China a ținut o formulă ușor de recunoscut: un împărat cu mandatul cerului, o birocrație aleasă prin examen, un sistem fiscal pe spatele țărănimii și o ideologie de stat cu rădăcină confuciană. Înăuntrul acelei neîntreruperi au fost prefaceri uriașe: revoluția economică a vremii Song, cu bani de hârtie, siderurgie în masă și tipar cu patru veacuri înaintea lui Gutenberg; primirea în imperiu a unor cuceritori de stepă ce l-au cârmuit fără să se topească în el; și o criză a secolului al XIX-lea ce nu a fost o simplă decădere dinăuntru, ci ciocnirea dintre un sistem agrar de mărime uriașă și niște puteri industriale ce i-au impus condițiile prin silă.',
  keyDates: [
    { date: '221 î.Hr.', event: 'Qin Shi Huang unește Regatele Combatante: scris, greutăți, măsuri și osii de care rânduite la fel.' },
    { date: '206 î.Hr.–220 d.Hr.', event: 'Dinastia Han. Confucianismul ca ideologie de stat și deschiderea drumurilor mătăsii.' },
    { date: '220–589', event: 'Fărâmițarea celor Șase Regate și răspândirea budismului venit din Asia centrală.' },
    { date: '589–618', event: 'Reunirea sub Sui. Clădirea Marelui Canal ce leagă Yangtze de nord.' },
    { date: '618–907', event: 'Dinastia Tang: apogeu cosmopolit, sistem de examene statornicit și capitala Chang\'an, cu un milion de locuitori.' },
    { date: '960–1279', event: 'Dinastia Song: bani de hârtie, busolă, praf de pușcă, tipar cu litere mobile și o economie orășenească fără seamăn în lume.' },
    { date: '1279–1368', event: 'Dinastia Yuan mongolă. China cuprinsă într-un imperiu eurasiatic și vizitată de călători ca Marco Polo.' },
    { date: '1368–1644', event: 'Dinastia Ming: restaurare han, Orașul Interzis și expedițiile navale ale lui Zheng He, între 1405 și 1433.' },
    { date: '1644', event: 'Manciurienii iau Beijing și întemeiază dinastia Qing, ultima a imperiului.' },
    { date: '1683–1799', event: 'Qing de sus: populația se dublează, expansiune până în Asia centrală și belșug sub Kangxi și Qianlong.' },
    { date: '1839–1842', event: 'Primul Război al Opiului și Tratatul de la Nanjing: încep tratatele nedrepte.' },
    { date: '1850–1864', event: 'Răscoala Taiping, războiul civil cel mai ucigător al secolului al XIX-lea, cu între douăzeci și treizeci de milioane de morți.' },
    { date: '1911–1912', event: 'Revoluția Xinhai, abdicarea lui Puyi și proclamarea Republicii.' },
  ],
  sections: [
    {
      title: 'Născocirea imperiului: Qin și Han',
      body: [
        'Statul Qin a câștigat războiul Regatelor Combatante aplicând o doctrină numită azi legism: legi publice și la fel pentru toți, pedepse aspre, răsplată după merit militar și agricol, și neîncredere pe față în morală ca temelie a cârmuirii. Shang Yang și Han Feizi sunt cei ce au formulat-o. Pe această temelie, Qin Shi Huang a unit în 221 î.Hr. scrisul, greutățile, măsurile și chiar lățimea osiilor de care, și a înlocuit stăpânirile moștenite cu comandanțe cârmuite de dregători numiți.',
        'Imperiul Qin a ținut cincisprezece ani, iar modelul, două milenii. Dinastia Han, care i-a urmat, a păstrat mașinăria administrativă legistă și i-a adăugat o îndreptățire confuciană: cârmuitorul trebuia să dea pildă morală, riturile rânduiau societatea, iar studiul clasicilor pregătea slujitorii statului. Această îmbinare, pe care un istoric a numit-o confucianism pe dinafară și legism pe dinăuntru, e formula chineză de cârmuire.',
        'Bucata de idee de căpetenie e mandatul cerului, mai vechi decât Qin, dar statornicit atunci. Cerul dă autoritatea unei dinastii cât timp aceasta cârmuiește cu dreptate și o retrage când nu o face; potopurile, foametea și răscoalele se citesc ca semne ale acelei retrageri. E o doctrină de îndreptățire și, în același timp, de îndreptățire a răscoalei: îngăduie unui țăran biruitor să întemeieze o dinastie legiuită, cum s-a întâmplat cu Han și cu Ming.',
        'Statul Han a clădit instituțiile trainice: recensământ de populație și catastif pentru strângerea dărilor, monopoluri de stat asupra sării și fierului, academie imperială pentru pregătirea dregătorilor și expansiune militară spre Asia centrală ce a deschis ceea ce avea să se numească drumul mătăsii. Sima Qian a scris în acel context Însemnările istorice, ce au statornicit modelul de istoriografie dinastică ce avea să fie urmat două mii de ani.',
        'Căderea lui Han în 220 a deschis aproape patru veacuri de împărțire, năvăliri de stepă și regate scurte. A fost și vremea prefacerii religioase celei mai mari: budismul a venit din Asia centrală, a fost tălmăcit într-un vocabular chinezesc și a prins rădăcini în toate păturile obștii, în timp ce taoismul se rânduia ca biserică. Ideea că China e un spațiu cultural la fel peste tot se dovedește falsă chiar aici: sinteza de mai apoi e urmarea acelui amestec, nu punctul ei de plecare.',
      ].join('\n\n'),
      callout:
        'Mandatul cerului funcționează în amândouă sensurile: îndreptățește pe cel ce cârmuiește și îngăduie doborârea lui. E o teorie a puterii ce cuprinde propria ei clauză de răscoală.',
    },
    {
      title: 'Sui, Tang și statul examenelor',
      body: [
        'Reunirea sub Sui, la sfârșitul secolului al VI-lea, s-a sprijinit pe o lucrare de temelie: Marele Canal, ce a legat orezul din Yangtze de capitalele și de armatele din nord și a rezolvat problema logistică de a cârmui un teritoriu continental. A costat o strângere de muncă silită uriașă, a ajutat la doborârea dinastiei ce l-a clădit și a ținut toate cele următoare.',
        'Dinastia Tang, între 618 și 907, a fost vremea cea mai cosmopolită din istoria chineză. Chang\'an, capitala, cu aproape un milion de locuitori, adăpostea obști sogdiene, persane, turcice, coreene și japoneze, temple nestoriene, zoroastriene și maniheiste, și un negoț ce venea pe uscat și pe mare. Poezia lui Li Bai și a lui Du Fu, ceramica și pictura din acea vreme au ajuns canonul clasic. O femeie, Wu Zetian, a cârmuit ca împărăteasă cu drept propriu, caz fără seamăn.',
        'Sistemul de examene, început sub Sui și statornicit în vremea Tang și mai ales Song, e instituția cea mai proprie a statului chinez. Alegea dregători prin probe scrise asupra clasicilor confucianiști, deschise din capul locului oricărui bărbat liber. Nu a zămislit o meritocrație deopotrivă pentru toți, fiindcă pregătirea unui candidat cerea ani de răgaz și dascăli scumpi, dar da o elită de cârmuire hotărâtă de cultura scrisă și nu de sânge, ceva ce nu era în niciun alt imperiu al vremii.',
        'Răscoala lui An Lushan, din 755 încoace, a ucis sau a strămutat milioane de oameni și a frânt sistemul fiscal și militar Tang. Imperiul a supraviețuit un veac și jumătate mai mult cu o putere tot mai lăsată pe seama guvernatorilor militari regionali, iar căderea lui din 907 a zămislit o altă vreme scurtă de împărțire. Lecția din temelie avea să se repete: echilibrul dintre centrul birocratic și comenzile militare de graniță a fost mereu punctul slab al sistemului.',
        'Acea vreme a mai lăsat moștenire o rânduială religioasă și culturală ce s-a răspândit prin Asia răsăriteană. Japonia, Coreea și Vietnamul au primit scrisul chinezesc, modelul administrativ, budismul în varianta lui sinizată și canonul confucianist, zămislind un spațiu cultural comun ce lămurește o bună parte din istoria de mai târziu a regiunii.',
      ].join('\n\n'),
    },
    {
      title: 'Revoluția economică Song',
      body: [
        'Între secolele al X-lea și al XIII-lea, sub dinastia Song, China a trăit o prefacere economică fără seamăn în acea vreme în nicio altă parte a lumii. Populația a trecut de o sută de milioane, orezul cu ciclu scurt adus din Champa a îngăduit două recolte pe an în sud, producția de fier a ajuns la trepte pe care Europa nu avea să le egaleze până în secolul al XVIII-lea, iar o rețea de canale și de piețe a unit regiuni întregi într-o economie de negoț.',
        'Noutățile tehnice ale acelei vremi sunt cele pe care Joseph Needham le-a catalogat în lucrarea lui uriașă: busolă magnetică pusă la navigație, praf de pușcă cu folos militar, tipar cu litere mobile cu patru veacuri înaintea lui Gutenberg, ecluze de canal, ceasuri astronomice cu mecanism, bani de hârtie dați de stat. Orașele Song, cu Kaifeng și apoi Hangzhou peste un milion de locuitori, aveau bresle, cârciumi, teatre și piețe de noapte ce uimeau călătorii străini.',
        'Rânduiala politică a ținut pasul cu această schimbare. Song au întărit cârmuirea civilă asupra celei militare, au lărgit sistemul de examene până a-l face calea de căpetenie spre putere și au tipărit clasicii, ceea ce a înmulțit numărul cărturarilor. Neoconfucianismul lui Zhu Xi a rânduit din nou doctrina ca pe o filozofie întreagă, cu metafizică și program de studiu, iar varianta lui a clasicilor a ajuns programul oficial al examenelor până în 1905.',
        'Întrebarea firească e de ce acea economie nu a zămislit o revoluție industrială. Mark Elvin a propus capcana echilibrului de nivel înalt: o agricultură atât de rodnică și o mână de lucru atât de din belșug și de ieftină, încât nu era niciun îndemn să se înlocuiască munca cu mașinile. Alții arată pierderea nordului în mâinile jurchenilor în 1127, presiunea militară necurmată și îndreptarea din nou a avuțiilor spre apărare. Discuția rămâne vie și e nedespărțită de dezbaterea despre Marea Divergență.',
        'Song au căzut în fața mongolilor în 1279, după zeci de ani de împotrivire. Dinastia Yuan a cuprins China în cel mai mare imperiu de uscat din istorie, a redeschis drumurile eurasiatice, a adus dregători străini și a oprit zeci de ani examenele, dând la margine elita cărturărească. A fost și China pe care au descris-o călători ca Marco Polo sau Ibn Battuta, și poarta prin care tehnica chinezească a ajuns în Occident.',
      ].join('\n\n'),
      callout:
        'Tiparul cu litere mobile, busola, praful de pușcă și banii de hârtie sunt toate dinaintea anului 1300, în China. Întrebarea istorică nu e de ce nu a născocit China, ci de ce acea născocire nu a avut aceeași urmare ca în Europa cinci sute de ani mai târziu.',
    },
    {
      title: 'Ming: restaurare, flote și închidere',
      body: [
        'Dinastia Ming s-a întemeiat în 1368, după izgonirea mongolilor de către un fost țăran și călugăr, Zhu Yuanzhang, și s-a arătat ca o restaurare a unei rânduieli han adevărate. A refăcut sistemul de examene, a întărit stăpânirea asupra satului prin catastife fiscale și de muncă, a mutat capitala la Beijing și a clădit acolo Orașul Interzis. A prefăcut și Marele Zid în lucrarea de apărare uriașă ce se vizitează azi, mult mai nouă decât porțiunile din vremea Qin.',
        'Între 1405 și 1433, eunucul Zheng He a condus șapte expediții navale prin sud-estul Asiei, India, Golful Persic și coasta răsăriteană a Africii, cu flote de sute de corăbii și zeci de mii de oameni, și cu vase mult mai mari decât orice a lansat Europa până în secolul al XIX-lea. Nu au fost călătorii de cucerire, nici de căutare de negoț, ci arătări de faimă menite să aducă state în sistemul tributar chinezesc.',
        'Oprirea acelor expediții a fost adesea folosită ca dovadă a unei respingeri chinezești a deschiderii, dar lămurirea e mai anume. Costau o avere, nu aduceau venituri, slujeau tabăra eunucilor în fața birocrației cărturărești ce ținea vistieria, iar prioritatea strategică s-a întors spre nord când amenințarea mongolă s-a trezit din nou, cu împăratul prins în luptă în 1449. Nici opririle de pe mare de mai apoi nu au închis negoțul: l-au împins spre mâini particulare și adesea nelegiuite.',
        'De fapt, China Ming din secolul al XVI-lea era legată adânc de cea dintâi economie mondială. Argintul american, venit prin Manila din 1571 și prin negoțul portughez, a intrat în cantități uriașe fiindcă China îl prețuia mai mult decât orice altă piață, iar statul a sfârșit prefăcând dările în plată în argint. Timothy Brook a descris acea societate de negoț, de lux și de neliniște morală într-o carte ce se citește ca un tablou al vremii.',
        'Ming au căzut în 1644 printr-o îmbinare clasică: criză fiscală, răcire climatică cu foamete, molime, răscoale țărănești ce au luat Beijing și o graniță de nord pe care un general a deschis-o manciurienilor ca să lupte împotriva răsculaților. Ultimul împărat Ming s-a spânzurat în palat, iar o dinastie străină a ocupat tronul a doua oară.',
      ].join('\n\n'),
    },
    {
      title: 'Qing: apogeu și criză',
      body: [
        'Manciurienii erau o confederație de la granița de nord-est ce clădise un stat înainte de a cuceri China, cu scrisul lor propriu, cu rânduiala lor militară pe steaguri și cu o încercare de cârmuire a unor popoare amestecate. Au cârmuit imperiul aproape trei veacuri printr-o formulă îndoită: s-au arătat ca împărați confucianiști în fața hanilor și, deodată, ca hani în fața mongolilor și ocrotitori ai budismului tibetan, într-un imperiu cu multe neamuri, cârmuit în mai multe limbi.',
        'Vremea numită Qing de sus, de la sfârșitul secolului al XVII-lea la sfârșitul celui de-al XVIII-lea, a fost de expansiune și de belșug. Populația s-a dublat cu prisosință, ajungând la vreo trei sute de milioane, datorită păcii, unor culturi noi venite din America precum porumbul și cartoful dulce, și desțelenirii unor pământuri de margine. Imperiul a cuprins Taiwanul, Mongolia, Tibetul și Xinjiangul, ajungând la întinderea cea mai mare din istoria lui. Peter Perdue a arătat că acea expansiune spre Asia centrală a fost un proces de cucerire asemănător cu cel al puterilor europene din același timp.',
        'Așa-numita New Qing History, din anii nouăzeci încoace, a îndreptat din nou studiul acelei vremi. În fața ideii tradiționale că manciurienii s-au sinizat până au pierit din punct de vedere cultural, Evelyn Rawski și alții au folosit izvoare în manciuriană ca să arate că au ținut o identitate deosebită și că firea multi-etnică a imperiului a fost o strategie de cârmuire înadins aleasă. Ho Ping-ti a răspuns apărând locul de căpetenie al sinizării, iar cearta ține și azi, pe deasupra, ecou politic de azi.',
        'Secolul al XIX-lea a rupt echilibrul. Negoțul cu opiu, adus de negustori britanici ca să îndrepte pierderea lor de negoț cu China, a pricinuit o criză obștească și o ieșire de argint pe care statul a încercat s-o oprească. Răspunsul britanic a fost un război, între 1839 și 1842, pe care China l-a pierdut din pricina slăbiciunii ei desăvârșite pe mare și în tunuri. Tratatul de la Nanjing a deschis porturi, a cedat Hong Kongul, a fixat vamă și a statornicit extrateritorialitatea: a fost cel dintâi dintr-un șir de învoieli pe care istoriografia chineză le numește tratate nedrepte.',
        'În același timp, imperiul se surpa pe dinăuntru. Răscoala Taiping, între 1850 și 1864, condusă de un cărturar ratat ce s-a proclamat fratele mai mic al lui Isus Hristos, a stăpânit valea Yangtzeului și a pricinuit între douăzeci și treizeci de milioane de morți, războiul civil cel mai ucigător al secolului al XIX-lea de oriunde din lume. Încercările de îndreptare, mișcarea de întărire de sine și apoi reforma celor O Sută de Zile din 1898, s-au izbit de curte și de interesele provinciilor. După răscoala boxerilor și înfrângerea ei de opt puteri în 1900, imperiul a desființat examenele în 1905 și a căzut în 1912.',
      ].join('\n\n'),
      callout:
        'Sistemul de examene s-a desființat în 1905, cu șapte ani înaintea imperiului. Când a pierit calea ce lega studiul clasicilor de putere, elita cărturărească a încetat să mai aibă pricini să țină dinastia.',
    },
    {
      title: 'Marea Divergență',
      body: [
        'Întrebarea ce rânduiește azi istoria Chinei în lume e cea a Marii Divergențe: de ce revoluția industrială s-a întâmplat în nord-vestul Europei și nu în delta Yangtzeului, care în 1750 avea niveluri de trai, speranță de viață, piețe de pământ și de muncă și o rafinare de negoț asemănătoare.',
        'Kenneth Pomeranz a susținut în 2000 că până la mijlocul secolului al XVIII-lea regiunile cele mai înaintate de la cele două capete ale Eurasiei erau asemănătoare și că deosebirea au făcut-o doi factori întâmplători: cărbunele la îndemână aproape de centrele industriale britanice și avuțiile coloniilor americane, ce au slobozit Europa de mărginirea de pământ pe care China nu o putea trece. Divergența ar fi fost târzie și de împrejurare, nu urmarea unor veacuri de superioritate europeană.',
        'Poziția potrivnică, apărată printre alții de David Landes și cu nuanțe de Joel Mokyr, subliniază factori instituționali și culturali de lungă durată: drepturi de proprietate, întrecere între statele europene, o cultură de cercetare obștească ce a legat știința de tehnică, și brevete. Alții, ca Bin Wong și Philip Huang, discută datele lui Pomeranz sau propun alte asemuiri, iar discuția a ajuns una dintre dezbaterile cele mai rodnice ale istoriei economice mondiale.',
        'Ce a lămurit discuția e ce nu mai poate fi susținut: ideea unui Răsărit nemișcat și despotic, formulată în secolul al XVIII-lea de autori europeni și rânduită în sistem de Karl Wittfogel în 1957 ca despotism hidraulic, nu rezistă la cercetarea izvoarelor. China a avut piețe de pământ și de muncă, mișcare obștească prin examen, revoluții tehnice și cicluri de expansiune și de criză ca orice altă societate cu multe fețe.',
        'Căderea imperiului în 1912 nu a încheiat istoria acelor structuri. Statul birocratic strâns la centru, îndreptățirea prin buna cârmuire mai mult decât prin rânduială, locul de căpetenie al examenului ca poartă spre slujba obștească și amintirea veacului de umilință dintre 1839 și 1949 sunt elemente pe care politica chineză de mai apoi le-a folosit din nou. A cerceta imperiul nu înseamnă a cerceta doar trecutul Chinei: înseamnă a înțelege vorbele cu care încă își discută prezentul.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Mandatul cerului', definition: 'Doctrină ce îndreptățește dinastia cât timp cârmuiește cu dreptate și îngăduie doborârea ei când pierde acea virtute. Cuprinde propria ei clauză de răscoală.' },
    { term: 'Legism', definition: 'Doctrina lui Shang Yang și a lui Han Feizi: legi la fel pentru toți, pedepse aspre, merit ce se poate măsura și neîncredere în morală ca temelie de cârmuire. Scheletul administrativ al imperiului.' },
    { term: 'Confucianism de stat', definition: 'Îndreptățirea morală a puterii, primită de Han: pilda cârmuitorului, riturile și studiul clasicilor ca pregătire a slujitorilor obștești.' },
    { term: 'Sistem de examene', definition: 'Alegerea dregătorilor prin probe scrise asupra clasicilor. A zămislit o elită hotărâtă de cultura scrisă, nu de sânge. Desființat în 1905.' },
    { term: 'Marele Canal', definition: 'Cale de navigație clădită sub Sui ce leagă orezul din Yangtze de nord. A rezolvat problema logistică de a cârmui un teritoriu continental.' },
    { term: 'Neoconfucianism', definition: 'Reformularea lui Zhu Xi din vremea Song, cu metafizică și program de studiu. Varianta lui a clasicilor a fost programul oficial al examenelor veacuri întregi.' },
    { term: 'Capcana echilibrului de nivel înalt', definition: 'Ipoteza lui Elvin: o agricultură foarte rodnică și o mână de lucru ieftină au înlăturat îndemnul de a înlocui munca cu mașinile.' },
    { term: 'Sistem tributar', definition: 'Cadru de legături din afară în care alte state recunoșteau întâietatea chineză prin solii și daruri, în schimbul negoțului și al faimei.' },
    { term: 'Expedițiile lui Zheng He', definition: 'Șapte călătorii navale între 1405 și 1433 până în răsăritul Africii, cu flote uriașe. Arătări de faimă, nu de cucerire, nici de căutare de negoț.' },
    { term: 'Steagurile manciuriene', definition: 'Rânduiala militară și obștească a Qing, temelia armatei lor și a identității lor deosebite înăuntrul unui imperiu cu multe neamuri.' },
    { term: 'New Qing History', definition: 'Curent ce folosește izvoare în manciuriană ca să arate că Qing au ținut o identitate proprie și au cârmuit un imperiu cu multe neamuri, în fața tezei sinizării depline.' },
    { term: 'Tratate nedrepte', definition: 'Învoieli impuse din 1842 încoace, cu porturi deschise, vamă fixată din afară și extrateritorialitate pentru străini.' },
    { term: 'Răscoala Taiping', definition: 'Război civil din 1850 până în 1864, cu temelie religioasă amestecată și între douăzeci și treizeci de milioane de morți. Conflictul cel mai ucigător al secolului al XIX-lea.' },
    { term: 'Marea Divergență', definition: 'Dezbaterea despre de ce industrializarea s-a întâmplat în nord-vestul Europei și nu în regiunile cele mai bogate ale Asiei, cu niveluri de trai asemănătoare în 1750.' },
  ],
  debates: [
    {
      question: 'De ce s-a industrializat Europa și nu China?',
      positions: [
        {
          school: 'Divergență târzie și de împrejurare (Pomeranz, 2000)',
          argument:
            'Până la mijlocul secolului al XVIII-lea delta Yangtzeului și nord-vestul Europei erau asemănătoare. Deosebirea au făcut-o cărbunele la îndemână și avuțiile coloniale, ce au slobozit Europa de mărginirea de pământ.',
        },
        {
          school: 'Instituții și cultură (Landes; Mokyr)',
          argument:
            'Drepturile de proprietate, întrecerea dintre statele europene și o cultură ce a legat știința de tehnică au zămislit un mediu de născocire ce se aduna, mediu ce nu era într-un imperiu unit.',
        },
        {
          school: 'Echilibru agrar (Elvin, 1973)',
          argument:
            'O agricultură foarte rodnică, cu mână de lucru din belșug și ieftină, a înlăturat îndemnul spre mecanizare. China nu a dus lipsă de putere tehnică, ci de pricini economice s-o folosească în acea direcție.',
        },
      ],
      state:
        'Dezbaterea a lăsat deoparte de tot lămurirea prin superioritate europeană de lungă durată. Se ceartă azi asupra datei divergenței și asupra greutății potrivite dintre avuții și instituții.',
    },
    {
      question: 'S-au sinizat manciurienii sau au cârmuit ca imperiu cu multe neamuri?',
      positions: [
        {
          school: 'Sinizare (Ho Ping-ti, 1967)',
          argument:
            'Izbânda Qing se lămurește prin primirea culturii, a administrației și a ideologiei chinezești. Au cârmuit fiindcă au ajuns încă o dinastie chinezească.',
        },
        {
          school: 'Imperiu cu multe neamuri (Rawski, 1996; Perdue; Crossley)',
          argument:
            'Izvoarele în manciuriană arată o identitate ținută și o strategie înadins aleasă: împărați confucianiști în fața hanilor, hani în fața mongolilor și ocrotitori ai budismului tibetan.',
        },
      ],
      state:
        'New Qing History a îndreptat din nou domeniul, iar discuția are, pe deasupra, ecou politic de azi prin ce spune despre legătura dintre statul chinez și regiunile lui de graniță.',
    },
    {
      question: 'De ce au fost lăsate deoparte expedițiile lui Zheng He?',
      positions: [
        {
          school: 'Respingere culturală a deschiderii',
          argument:
            'O elită cărturărească cu privirea la rânduiala agrară și încredințată de ajungerea de sine a imperiului ar fi socotit călătoriile o risipă fără folos și ar fi închis chemarea de pe mare a statului.',
        },
        {
          school: 'Priorități fiscale și strategice',
          argument:
            'Costau o avere fără să aducă venituri, slujeau tabăra eunucilor în fața birocrației ce ținea vistieria, iar amenințarea mongolă din nord a cerut avuțiile după prinderea împăratului în 1449.',
        },
      ],
      state:
        'A doua lămurire e cea de căpetenie. Nici opririle de pe mare nu au închis negoțul: l-au împins spre mâini particulare, iar China Ming din secolul al XVI-lea era legată deplin de economia mondială a argintului.',
    },
  ],
  sources: [
    { author: 'Confucius și ucenicii', title: 'Analectele', year: 'secolul al V-lea î.Hr.', kind: 'primaria', note: 'Temelia canonului ce a rânduit învățătura și alegerea slujitorilor statului timp de două mii de ani.' },
    { author: 'Han Feizi', title: 'Han Feizi', year: 'secolul al III-lea î.Hr.', kind: 'primaria', note: 'Formularea cea mai întreagă a legismului: cârmuire prin lege, pedeapsă și control, fără încredere în virtute.' },
    { author: 'Sima Qian', title: 'Însemnările istorice', year: 'c. 94 î.Hr.', kind: 'primaria', note: 'Statornicește modelul de istoriografie dinastică chinezească, cu anale, tratate și biografii.' },
    { author: 'Xuanzang', title: 'Cronica regiunilor apusene', year: '646', kind: 'primaria', note: 'Povestirea călătoriei unui călugăr în India, în căutare de texte budiste. Izvor despre Asia centrală și India secolului al VII-lea.' },
    { author: 'Zhu Xi', title: 'Comentarii la cele Patru Cărți', year: 'secolul al XII-lea', kind: 'primaria', note: 'Varianta neoconfucianistă a clasicilor, ajunsă programul oficial al examenelor.' },
    { author: 'Marco Polo', title: 'Cartea minunilor', year: 'c. 1300', kind: 'primaria', note: 'Descrierea Chinei Yuan. Izvor discutat în litera lui și hotărâtor pentru icoana europeană a Asiei.' },
    { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Călător maghrebian ce a descris porturile chinezești ale secolului al XIV-lea dintr-o privire ne-europeană.' },
    { author: 'Ma Huan', title: 'Vederi minunate ale țărmurilor oceanului', year: '1433', kind: 'primaria', note: 'Cronica unui tălmaci ce l-a însoțit pe Zheng He. Izvor direct despre expediții.' },
    { author: 'Matteo Ricci', title: 'Jurnale ale misiunii din China', year: 'c. 1610', kind: 'primaria', note: 'Iezuit ce a lucrat la curtea Ming. Document de căpetenie al celei dintâi întâlniri de idei ținute cu Europa.' },
    { author: 'Împăratul Qianlong', title: 'Edict către George al III-lea', year: '1793', kind: 'primaria', note: 'Răspuns la misiunea Macartney. Document de căpetenie despre felul chinezesc de a înțelege legăturile din afară.' },
    { author: 'Lin Zexu', title: 'Scrisoare către regina Victoria', year: '1839', kind: 'primaria', note: 'Argument moral și juridic împotriva negoțului cu opiu, scris de comisarul ce l-a oprit.' },
    { author: 'Imperiul Qing și Regatul Unit', title: 'Tratatul de la Nanjing', year: '1842', kind: 'primaria', note: 'Cel dintâi dintre tratatele nedrepte: porturi deschise, cedarea Hong Kongului și vamă fixată din afară.' },
    { author: 'Karl Wittfogel', title: 'Despotismul oriental', year: '1957', kind: 'estudio', note: 'Teza despotismului hidraulic, respinsă azi, dar de neocolit pentru înțelegerea dezbaterii de mai apoi.' },
    { author: 'Joseph Needham', title: 'Știință și civilizație în China', year: '1954–2008', kind: 'estudio', note: 'Catalog uriaș al tehnicii chinezești și formularea întrebării despre de ce nu a fost revoluție științifică.' },
    { author: 'Jacques Gernet', title: 'Lumea chineză', year: '1972', kind: 'estudio', note: 'Sinteză generală de referință despre istoria chineză de la obârșii încoace.' },
    { author: 'Mark Elvin', title: 'The Pattern of the Chinese Past', year: '1973', kind: 'estudio', note: 'Formulează capcana echilibrului de nivel înalt ca să lămurească lipsa industrializării.' },
    { author: 'Evelyn Rawski', title: 'Presenting the Qing', year: '1996', kind: 'estudio', note: 'Text de temelie al New Qing History și al certei cu Ho Ping-ti despre sinizare.' },
    { author: 'Timothy Brook', title: 'Pălăria lui Vermeer', year: '2008', kind: 'estudio', note: 'China Ming înăuntrul celei dintâi economii mondiale, povestită pornind de la obiecte și de la argintul american.' },
    { author: 'Kenneth Pomeranz', title: 'Marea divergență', year: '2000', kind: 'estudio', note: 'Asemuiește delta Yangtzeului cu Anglia și așază divergența în secolul al XVIII-lea prin cărbune și colonii.' },
    { author: 'Peter Perdue', title: 'China Marches West', year: '2005', kind: 'estudio', note: 'Expansiunea Qing spre Asia centrală ca cucerire imperială asemănătoare cu cea europeană.' },
    { author: 'William Rowe', title: 'China cea din urmă: marea dinastie Qing', year: '2009', kind: 'estudio', note: 'Sinteză de azi a perioadei Qing cu starea discuției despre firea ei imperială.' },
    { author: 'Valerie Hansen', title: 'The Open Empire', year: '2000', kind: 'estudio', note: 'Istoria Chinei până în 1600, cu privirea la legătura ei necurmată cu din afară.' },
  ],
  documents: [
    {
      section: 3,
      title: 'Qianlong îi răspunde regelui Angliei',
      text: [
        'Tu, o, Rege, trăiești dincolo de hotarele multor mări și, cu toate acestea, mișcat de dorința smerită de a lua parte la foloasele civilizației noastre, ai trimis o solie ce aduce cu cinste memoriul tău.',
        'Cât despre cererea ta de a trimite pe unul dintre supușii tăi să locuiască la Curtea mea și să vegheze negoțul țării tale, e potrivnică tuturor obiceiurilor dinastiei mele și nu poate fi îngăduită.',
        'Cum poate vedea singur Solul tău, avem de toate. Nu dau preț lucrurilor străine și meșteșugite și nu am nicio nevoie de mărfurile țării tale.',
      ].join('\n\n'),
      source: 'Edictul împăratului Qianlong către George al III-lea, misiunea Macartney, 1793.',
      note: 'Versiune proprie și prescurtată după tălmăcirea din chineză.',
      question: 'Mai puțin de cincizeci de ani mai târziu, primul Război al Opiului a impus Chinei tocmai condițiile respinse aici. A fost acest răspuns trufie, o socoteală chibzuită cu ce se știa în 1793, sau amândouă?',
    },
  ],
  images: [
    {
      alt: 'Detaliu de sul pictat cu un pod de lemn plin de lume, luntre pe râu și tarabe de piață',
      caption: 'Detaliu din De-a lungul râului în timpul sărbătorii Qingming, de Zhang Zeduan, vremea Song.',
    },
    {
      alt: 'Groapă săpată cu șiruri de statui de soldați de teracotă la mărime naturală, aliniate pe culoare',
      caption: 'Armata de teracotă a lui Qin Shi Huang, pe la 210 î.Hr. Mii de figuri făcute în serie, cu piese ce se pot schimba între ele: imperiul ca mașinărie administrativă.',
    },
    {
      alt: 'Șiruri de chilii de cărămidă deschise și mici de tot, una lângă alta, fiecare cu două scânduri',
      caption: 'Chiliile de examen din Nanjing. Candidații rămâneau închiși zile întregi: accesul la administrație se hotăra prin scris și prin întrecere.',
    },
    {
      alt: 'Gravură colorată a unei nave cu abur, cu roată, trăgând cu tunul în mai multe joncuri cu vele, ce sar în bucăți',
      caption: 'Vaporul Nemesis distruge joncuri chinezești, 1841. Primul Război al Opiului a deschis veacul tratatelor nedrepte.',
    },
  ],
  questions: [
    {
      question: 'Ce doctrină a îngăduit lui Qin să unească China în 221 î.Hr.?',
      options: [
        'Confucianismul de stat',
        'Legismul: legi la fel pentru toți, pedepse aspre și răsplată după merit ce se poate măsura',
        'Budismul venit din Asia centrală',
        'Neoconfucianismul lui Zhu Xi',
      ],
      explanation: 'Imperiul Qin a ținut cincisprezece ani, iar mașinăria lui administrativă, două milenii. Han i-au adăugat îndreptățirea confuciană.',
    },
    {
      question: 'Ce slujbă îndoită împlinește mandatul cerului?',
      options: [
        'Îndreptățește împăratul și oprește pe față răscoala',
        'Îndreptățește dinastia cât timp cârmuiește cu dreptate și îngăduie doborârea ei când o pierde',
        'Statornicește succesiunea moștenită după întâiul născut',
        'Dă autoritatea dregătorilor, și nu împăratului',
      ],
      explanation: 'E o teorie a puterii ce cuprinde propria ei clauză de răscoală: îngăduie unui țăran biruitor să întemeieze o dinastie legiuită.',
    },
    {
      question: 'Ce prefacere religioasă s-a petrecut între secolele al III-lea și al VI-lea?',
      options: [
        'Primirea creștinismului nestorian ca religie de stat',
        'Venirea budismului din Asia centrală, tălmăcirea lui într-un vocabular chinezesc și rânduirea taoismului ca biserică',
        'Oprirea tuturor religiilor străine',
        'Impunerea confucianismului ca cult silit',
      ],
      explanation: 'Sinteza culturală chineză de mai apoi e urmarea acelui amestec, nu punctul ei de plecare.',
    },
    {
      question: 'Ce problemă a rezolvat Marele Canal clădit sub Sui?',
      options: [
        'Apărarea graniței de nord în fața popoarelor de stepă',
        'Logistica de a duce orezul din Yangtze la capitalele și armatele din nord',
        'Irigarea câmpiilor din sud',
        'Legătura cu drumurile mătăsii',
      ],
      explanation: 'A costat o strângere de muncă silită uriașă, a ajutat la doborârea dinastiei ce l-a clădit și a ținut toate cele următoare.',
    },
    {
      question: 'Ce fel de elită a zămislit sistemul de examene?',
      options: [
        'O meritocrație deopotrivă pentru toți, deschisă tuturor claselor',
        'O elită de cârmuire hotărâtă de cultura scrisă și nu de sânge, deși pregătirea unui candidat cerea răgaz și dascăli scumpi',
        'O aristocrație moștenită cu acces păzit',
        'Un corp de dregători numai de obârșie militară',
      ],
      explanation: 'Nu era nimic asemănător în niciun alt imperiu al vremii, deși accesul adevărat atârna de avuția familiei.',
    },
    {
      question: 'Ce noutăți s-au răspândit în China sub dinastia Song?',
      options: [
        'Roata de apă și plugul cu cormană',
        'Bani de hârtie, busolă de navigație, praf de pușcă cu folos militar și tipar cu litere mobile',
        'Mașina cu aburi și războiul de țesut mecanic',
        'Sticla optică și telescopul',
      ],
      explanation: 'Toate sunt dinaintea anului 1300. Întrebarea istorică nu e de ce nu a născocit China, ci de ce acea născocire a avut altă urmare.',
    },
    {
      question: 'Ce susține capcana echilibrului de nivel înalt a lui Mark Elvin?',
      options: [
        'Că populația chineză era prea mică ca să țină industrializarea',
        'Că o agricultură foarte rodnică și o mână de lucru ieftină au înlăturat îndemnul de a înlocui munca cu mașinile',
        'Că statul a oprit născocirile tehnice',
        'Că lipseau materiile dintâi pe teritoriul chinezesc',
      ],
      explanation: 'Alte lămuriri arată pierderea nordului în 1127 și îndreptarea din nou a avuțiilor spre apărare.',
    },
    {
      question: 'Care era rostul expedițiilor lui Zheng He?',
      options: [
        'Cucerirea unor teritorii în răsăritul Africii',
        'Arătarea faimei ca să aducă state în sistemul tributar chinezesc',
        'Căutarea unui drum de negoț spre Europa',
        'Întemeierea de colonii de așezare în Oceanul Indian',
      ],
      explanation: 'Flotele lui erau mult mai mari decât orice a lansat Europa până în secolul al XIX-lea, dar nu erau călătorii de cucerire, nici de căutare de negoț.',
    },
    {
      question: 'Ce lămurire e de căpetenie azi despre lăsarea deoparte a expedițiilor navale?',
      options: [
        'O respingere culturală chinezească a oricărei legături din afară',
        'Costul lor fără venituri, cearta dintre eunuci și birocrație pentru vistierie și întoarcerea amenințării mongole din nord',
        'Înfrângerea flotei chinezești în Oceanul Indian',
        'Oprirea impusă de negustori portughezi',
      ],
      explanation: 'Opririle de pe mare de mai apoi nu au închis negoțul: l-au împins spre mâini particulare și adesea nelegiuite.',
    },
    {
      question: 'Ce rol a avut argintul american în China Ming a secolului al XVI-lea?',
      options: [
        'Niciunul: imperiul era închis negoțului din afară',
        'A intrat în cantități uriașe fiindcă China îl prețuia mai mult decât orice altă piață, iar statul a trecut la strângerea dărilor în argint',
        'I s-a oprit circulația prin poruncă imperială',
        'S-a folosit numai la baterea de monedă de faimă',
      ],
      explanation: 'Venea prin Manila din 1571 și prin negoțul portughez. China Ming era cuprinsă deplin în cea dintâi economie mondială.',
    },
    {
      question: 'Cum au cârmuit Qing un imperiu cu multe neamuri?',
      options: [
        'Impunând limba și obiceiurile manciuriene întregii populații',
        'Arătându-se ca împărați confucianiști în fața hanilor, hani în fața mongolilor și ocrotitori ai budismului tibetan',
        'Lăsând cârmuirea pe seama unor dregători europeni',
        'Împărțind imperiul în state de sine stătătoare tributare',
      ],
      explanation: 'Aduceau o încercare de cârmuire a unor popoare amestecate și o rânduială militară și obștească proprie, steagurile.',
    },
    {
      question: 'Ce a adus New Qing History?',
      options: [
        'Dovada că Qing s-au sinizat deplin',
        'Folosirea izvoarelor în manciuriană ca să arate o identitate ținută și o fire multi-etnică înadins aleasă a imperiului',
        'Datarea exactă a cuceririi Beijingului',
        'Scăderea cifrelor de populație ale secolului al XVIII-lea',
      ],
      explanation: 'Ho Ping-ti a apărat locul de căpetenie al sinizării, iar cearta ține și azi ecou politic.',
    },
    {
      question: 'Ce a statornicit Tratatul de la Nanjing din 1842?',
      options: [
        'Deschiderea de porturi, cedarea Hong Kongului, vamă fixată din afară și extrateritorialitate',
        'Oprirea de tot a negoțului cu opiu',
        'Intrarea Chinei în rândul puterilor europene, deopotrivă cu ele',
        'Înapoierea Taiwanului către imperiu',
      ],
      explanation: 'A fost cel dintâi dintr-un șir de învoieli pe care istoriografia chineză le numește tratate nedrepte.',
    },
    {
      question: 'Ce mărime a avut răscoala Taiping?',
      options: [
        'O răscoală locală înăbușită în câteva luni',
        'Un război civil de paisprezece ani cu între douăzeci și treizeci de milioane de morți, cel mai ucigător al secolului al XIX-lea',
        'O lovitură de palat fără urmări obștești',
        'Un război de graniță împotriva mongolilor',
      ],
      explanation: 'A condus-o un cărturar ratat ce s-a proclamat fratele mai mic al lui Isus Hristos și a ajuns să stăpânească valea Yangtzeului.',
    },
    {
      question: 'De ce a fost însemnată desființarea examenelor în 1905?',
      options: [
        'Fiindcă a îngăduit femeilor accesul la administrație',
        'Fiindcă a rupt legătura dintre studiul clasicilor și putere, iar elita cărturărească a încetat să mai aibă pricini să țină dinastia',
        'Fiindcă a pus în loc un sistem de alegeri',
        'Fiindcă a silit pregătirea dregătorilor în Japonia',
      ],
      explanation: 'Imperiul a căzut șapte ani mai târziu, în revoluția din 1911 și abdicarea din 1912.',
    },
    {
      question: 'Ce susține Kenneth Pomeranz despre Marea Divergență?',
      options: [
        'Că Europa a fost mai presus de Asia din secolul al XV-lea',
        'Că până la mijlocul secolului al XVIII-lea regiunile cele mai înaintate erau asemănătoare și deosebirea au făcut-o cărbunele la îndemână și avuțiile coloniale',
        'Că China nu a ajuns niciodată la niveluri de trai europene',
        'Că divergența s-a datorat superiorității militare europene',
      ],
      explanation: 'Dezbaterea a lăsat deoparte de tot lămurirea prin superioritate europeană de lungă durată, și cu ea vechea teză a despotismului oriental.',
    },
  ],
}
