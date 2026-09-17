import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/america-precolombina.ts`. Aceeași
   formă: 6 secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13
   date, 14 concepte, 3 dezbateri, 24 surse, un document comentat, 5 imagini
   și 16 întrebări cu opțiunile pe aceleași poziții. */
export const americaPrecolombinaRo: TopicTranslation = {
  title: 'Mesoamerica și Anzii',
  description: 'Două vetre de civilizație ce au născocit pe cont propriu agricultura, orașul, scrisul și statul, fără legătură cu restul lumii.',
  years: '3000 î.Hr.–1533',
  summary:
    'America e experimentul cel mai bine stăpânit din istoria omenirii. Populată din Asia acum cel puțin cincisprezece mii de ani și izolată apoi, a dezvoltat de sine stătător domesticirea plantelor, viața orășenească, rânduiala de stat, astronomia de fineță și, în cazul maya, un sistem de scris întreg. Faptul că a ajuns la rezultate asemănătoare pornind de la nimic e dovada cea mai bună la îndemână că acele născociri nu sunt o întâmplare culturală europeană. Cele două vetre ale ei, Mesoamerica și zona andină, au rezolvat probleme deosebite cu rezolvări deosebite: una cu porumb, piețe și scris; alta cu tuberculi, camelide, sfori cu noduri și o economie fără piață. Cucerirea le-a curmat într-un veac, iar dezbaterea despre câtă populație era și de ce a pierit rămâne una dintre cele mai aspre ale istoriografiei.',
  keyDates: [
    { date: 'c. 15000 î.Hr. sau mai devreme', event: 'Populația Americii venită din Asia. Monte Verde, în Chile, documentează ocupare mai veche decât cultura Clovis.' },
    { date: 'c. 7000–4000 î.Hr.', event: 'Domesticirea de sine stătătoare a porumbului în Mexic și a cartofului, a quinoei și a bumbacului în Anzi.' },
    { date: 'c. 3000–1800 î.Hr.', event: 'Caral și complexul Norte Chico pe coasta peruană: arhitectură uriașă, din aceeași vreme cu piramidele egiptene.' },
    { date: 'c. 1200–400 î.Hr.', event: 'Cultura olmecă pe coasta Golfului: capete uriașe, calendar și temeliile tradiției mesoamericane.' },
    { date: 'c. 100–550', event: 'Apogeul Teotihuacanului, cu peste o sută de mii de locuitori și un plan orășenesc gândit dinainte.' },
    { date: '250–900', event: 'Perioada clasică maya: cetăți-stat, scris glific întreg, socoteala lungă și astronomie de fineță.' },
    { date: 'c. 800–950', event: 'Părăsirea marilor orașe din sudul maya. Secete documentate și rânduire din nou spre nord.' },
    { date: 'c. 500–1000', event: 'Tiahuanaco și Wari în Anzi: primele state de întindere mare și premergătoare administrative ale celui incaș.' },
    { date: '1325', event: 'Întemeierea Tenochtitlanului pe o insulă a lacului Texcoco.' },
    { date: '1428', event: 'Tripla Alianță dintre Tenochtitlan, Texcoco și Tlacopan. Începe expansiunea mexica.' },
    { date: 'c. 1438–1471', event: 'Pachacútec preface Cuzco în capul Tahuantinsuyu-ului.' },
    { date: '1519–1521', event: 'Sosirea lui Cortés, război cu sprijinul a zeci de mii de aliați băștinași și căderea Tenochtitlanului.' },
    { date: '1532–1533', event: 'Prinderea și uciderea lui Atahualpa în plin război civil incaș. Ocuparea Cuzco.' },
  ],
  sections: [
    {
      title: 'Popularea și agricultura fără legătură',
      body: [
        'Popularea Americii s-a petrecut din nord-estul Asiei, prin Beringia, într-un proces pe care genetica și arheologia îl așază acum cel puțin cincisprezece mii de ani și probabil mai devreme. Situl Monte Verde, în sudul Chile, cu ocupare datată pe la 14500 î.Hr., a silit lăsarea modelului ce făcea din cultura Clovis pe cea dintâi a continentului și a deschis ipoteza unui drum de coastă pe Pacific dinaintea coridorului liber de gheață.',
        'Ce contează nu e data, ci izolarea de mai apoi. Vreme de milenii, populațiile americane s-au dezvoltat fără legătură cu Eurasia și cu Africa, așa că tot ce au născocit au născocit din nou. Asta preface continentul în cazul cel mai bun la îndemână ca să se întrebe ce e de neocolit și ce e de întâmplare în trecerea de la vânătoare și culegere la stat.',
        'Domesticirea agricolă e cea dintâi urmare. În Mesoamerica s-a prefăcut teosintele, o graminee cu știulete mărunt, în porumb, printr-un proces de alegere de mii de ani, una dintre isprăvile cele mai mari de inginerie genetică ale omenirii. S-au domesticit, pe deasupra, fasolea, dovleacul, ardeiul iute, roșia, cacaua și avocado. În Anzi, cartoful, cu mii de soiuri potrivite unor înălțimi deosebite, quinoa, bumbacul, coca și două animale, lama și alpaca, pe lângă cobai.',
        'Îmbinarea mesoamericană de porumb, fasole și dovleac, milpa, e din punct de vedere hrănitor întreagă și din punct de vedere agronomic trainică, fiindcă fasolea prinde azot, iar dovleacul acoperă solul. La ea s-a adăugat nixtamalizarea, fiertul porumbului cu var, ce slobozește niacina și fără de care o hrană întemeiată pe acel cereal zămislește pelagra. E o descoperire biochimică dobândită pe cale empirică, iar lipsa ei în Europa, când a fost primit porumbul, a pricinuit molime de pelagră veacuri întregi.',
        'A lipsit, în schimb, aproape tot pachetul de vite eurasiatic. Nu erau cai, boi, porci, nici oi, iar fără animale mari de tracțiune roata, cunoscută în jucării mesoamericane, nu avea folosire practică pe un teren, pe deasupra, foarte prăpăstios. Această lipsă a avut o urmare uriașă și nu la vedere: fără conviețuire strânsă cu vitele, populațiile americane nu au dezvoltat apărare împotriva bolilor de la animale pe care Eurasia le răbda de milenii.',
      ].join('\n\n'),
      callout:
        'Nixtamalizarea e o descoperire biochimică dobândită pe cale empirică. Europa a primit porumbul fără ea și a plătit greșeala cu molime de pelagră până în secolul XX.',
    },
    {
      title: 'Mesoamerica: de la olmeci la Teotihuacan',
      body: [
        'Mesoamerica funcționează ca o zonă culturală cu însușiri împărtășite de societăți foarte deosebite: calendarul îndoit de 260 și de 365 de zile, jocul de minge de rit, piramida în trepte, scrisul și socoteala în bază douăzeci, și un panteon cu zeități ce se recunosc de la un capăt la altul. Această unitate nu presupune un imperiu, nici o limbă comună: presupune veacuri de schimb, de război și de împrumut între popoare.',
        'Cultura olmecă, pe coasta Golfului între 1200 și 400 î.Hr., e cea dintâi cu arhitectură uriașă și artă la scară mare: capetele colosale de bazalt, de până la patruzeci de tone, purtate zeci de kilometri fără animale de tracțiune, nici roți. Decenii întregi s-a discutat dacă a fost cultura mamă a Mesoamericii sau una dintre mai multe surori; cercetarea de azi înclină spre a doua, fără să-i tăgăduiască rolul de născocitoare în iconografie și în rânduială politică.',
        'Teotihuacan, pe podișul central, a ajuns între secolele I și VI la peste o sută de mii de locuitori, ceea ce îl așază printre orașele cele mai mari ale lumii din vremea lui. Planul lui e gândit dinainte, în careuri, cu două piramide mari, o alee de rit și ansambluri de locuit cu mai multe apartamente unde trăiau grupuri de meșteșugari, unii veniți din alte regiuni, ca Oaxaca sau zona maya. Nu s-a găsit niciun portret al unui cârmuitor anume, ceea ce a dus la propunerea unor forme de cârmuire obștească rare în Antichitate.',
        'Mayașii perioadei clasice, între 250 și 900, nu au alcătuit un imperiu, ci un sistem de cetăți-stat potrivnice, cu Tikal, Calakmul, Palenque, Copán și zeci altele. Scrisul lor e singurul sistem întreg al continentului: logosilabic, în stare să însemneze orice rostire din limba lor, iar descifrarea lui treptată din anii cincizeci încoace, cu contribuții hotărâtoare de la Yuri Knorozov, Tatiana Proskuriakoff, Linda Schele și David Stuart, a prefăcut de tot cunoașterea acelei perioade.',
        'Urmarea acelei descifrări a fost nimicitoare pentru icoana de dinainte. Mayașii fuseseră descriși ca astronomi pașnici cârmuiți de preoți; textele au dat la iveală dinastii cu nume și cu date, războaie între orașe, alianțe, prinderi de regi rivali și jertfe. Astronomia și matematica lor rămân uimitoare: au folosit zeroul în chip pozițional, au socotit ciclul lui Venus cu o greșeală neînsemnată și au mânuit o socoteală lungă ce așază orice dată într-un ciclu de peste cinci mii de ani.',
      ].join('\n\n'),
    },
    {
      title: 'Postclasicul și mexicii',
      body: [
        'Marile orașe mayașe din sud au fost părăsite între secolele al IX-lea și al X-lea, un proces pe care popularizarea îl numește prăbușire și pe care cercetarea de azi îl descrie cu mai multe nuanțe. Studiile paleoclimatice au documentat secete lungi ce se potrivesc în timp; la asta se adaugă un război statornic tot mai mare, presiune de populație pe soluri fragile și o rânduială politică de regi dumnezeiești a căror îndreptățire atârna de chezășuirea ploii și a biruinței.',
        'A vorbi de prăbușire, oricum, ascunde faptul că civilizația maya nu a pierit: s-a rânduit din nou spre nord, cu Chichén Itzá și apoi Mayapán, iar la sosirea spaniolilor erau orașe maya lucrătoare și milioane de vorbitori de limbi maya, care mai există și azi. Lecția de metodă ține și pentru alte cazuri: ce se prăbușește e de obicei o formă politică anume, nu un popor, nici o cultură.',
        'În centrul Mexicului, după Teotihuacan și Tula, mexicii au sosit ca ultim grup al unui șir de migrații și au întemeiat Tenochtitlanul în 1325 pe o insulă a lacului Texcoco. În mai puțin de un veac au clădit, cu Tripla Alianță din 1428, un sistem de stăpânire peste o bună parte din Mesoamerica întemeiat nu pe administrarea directă, ci pe tribut: popoarele supuse își păstrau stăpânii și dădeau încărcături de porumb, pături, cacao, pene și muncă.',
        'Tenochtitlan avea la sosirea spaniolilor între o sută cincizeci și două sute de mii de locuitori, mai mulți decât orice oraș european al vremii, afară poate de Constantinopol. Era clădit pe chinampas, platforme de cultură câștigate lacului, de o rodnicie foarte mare, cu alei, apeduct de apă bună de băut, o piață în Tlatelolco ce i-a uimit pe cuceritori, școli silite pentru copii și o rânduială juridică proprie.',
        'Jertfa omenească a existat și a fost de căpetenie în religia mexica, fără să poată fi nici micșorată, nici prefăcută în lămurire deplină. Cifrele cronicilor spaniole sunt de propagandă, iar arheologia Templului Mare a îngăduit mărginirea lor; logica ei era cosmologică, hrănirea soarelui și ținerea lumii, și era legată de un război rânduit ca rit. A mai fost și argumentul ce a îndreptățit cucerirea, ceea ce silește cercetarea cu grijă a fiecărui izvor. Și se cuvine amintit că tributul și jertfa au zămislit o pică printre popoarele supuse ce s-a dovedit hotărâtoare în 1519.',
      ].join('\n\n'),
      callout:
        'Tenochtitlan avea apeduct, piață zilnică de zeci de mii de oameni și școli silite. Cuceritorii au scris despre asta cu uimire înainte de a-l distruge.',
    },
    {
      title: 'Anzii: o civilizație verticală',
      body: [
        'Zona andină a rezolvat o problemă geografică fără seamăn: un teritoriu unde în câteva zeci de kilometri se trece de la deșertul de coastă la patru mii de metri și de acolo la pădurea amazoniană. Răspunsul a fost ceea ce John Murra a numit stăpânire verticală a treptelor ecologice: obști ce țineau colonii statornice la mai multe înălțimi ca să aibă pește, porumb, tuberculi și coca fără să atârne de piețe.',
        'Vechimea civilizației andine a fost mult revizuită. Săpăturile Ruthei Shady la Caral și în complexul Norte Chico documentează arhitectură uriașă, piețe circulare afundate și plan orășenesc din mileniul al treilea î.Hr. încoace, din aceeași vreme cu piramidele Egiptului, și, lucru de seamă, fără ceramică și cu o temelie economică ce îmbina agricultura de bumbac cu pescuitul. Au urmat apoi Chaviń, cu centrul lui de rit cu înrâurire pan-andină, moche, cu metalurgia și ceramica lor de portret, nazca, Tiahuanaco pe Titicaca și Wari, ce a dat înainte o bună parte din administrația imperială de mai apoi.',
        'Tahuantinsuyu, cele patru regiuni unite, s-a clădit în mai puțin de un veac din Cuzco, mai ales de la Pachacútec încoace, pe la 1438. A ajuns să se întindă patru mii de kilometri de la nord la sud, din sudul Columbiei până în centrul Chile, cu între opt și doisprezece milioane de locuitori, zeci de limbi și o rețea de drumuri de vreo patruzeci de mii de kilometri, cu poduri suspendate, hambare și posturi de alergători.',
        'L-a cârmuit fără scris alfabetic, fără monedă, fără piețe dezvoltate și fără roată. În locul lor a folosit quipu, sfori cu noduri ce însemnau cantități în notație zecimală pozițională și probabil și alte informații fără cifre, care se cercetează și azi; o rânduire a populației în unități zecimale; și un sistem de muncă pe rând, mita, prin care obștile dădeau zile de muncă la lucrări publice, la mine sau la oaste în locul tributului în mărfuri.',
        'Principiul economic era răspunsul reciproc și redistribuirea, nu schimbul de piață. Statul cerea muncă și în schimb hrănea și îmbrăca pe cei ce o dădeau din ce era strâns în hambarele lui, și plătea sărbători unde mărinimia Incașului se făcea văzută. Unitatea obștească de temelie era ayllu, grup de rudenie cu pământuri comune, iar religia rânduia peisajul în huacas, locuri și obiecte sfinte cu cult și avuții rânduite. Spaniolii, deprinși cu altă economie, au avut nevoie de decenii ca să înțeleagă cum funcționa și au distrus sistemul de hambare în câțiva ani.',
      ].join('\n\n'),
    },
    {
      title: 'Cucerirea și prăbușirea demografică',
      body: [
        'Cucerirea celor două imperii de către cete de câteva sute de oameni e o faptă ce cere lămurire și pe care variantele tradiționale o lămuresc rău. Matthew Restall a dărâmat cu rânduială miturile adunate: superioritatea tehnică a existat, dar a fost mărginită, fiindcă archebuzele acelei vremi erau încete și puține; rolul alianțelor băștinașe a fost hotărâtor, cu zeci de mii de tlaxcaltec și alte popoare luptând împotriva Tenochtitlanului din pricini proprii; iar ideea că mexicii l-au luat pe Cortés drept zeu e o construcție de mai târziu.',
        'La asta s-au adăugat împrejurări anume: în Peru, spaniolii au sosit în plin război civil dintre Huáscar și Atahualpa, ce tocmai despărțise imperiul; în Mexic, prinderea cârmuitorului într-un sistem de comandă foarte strâns la centru a paralizat răspunsul. Iar în amândouă cazurile, molima a făcut restul.',
        'Vărsatul a ajuns în Mexic în 1520, între asediu și căderea Tenochtitlanului, și a ucis o parte uriașă din poporul apărător, urmașul lui Moctezuma inclus. Au urmat apoi pojarul, tifosul, gripa și, deja în secolul al XVII-lea, febra galbenă și malaria. Alfred Crosby a numit schimb columbian acea mișcare în amândouă sensurile de plante, de animale și de agenți de boală: America a primit grâu, trestie, vite și boli, și a dat porumb, cartof, roșie, cacao și tutun, cu urmări demografice uriașe în Europa, în Africa și în Asia.',
        'Mărimea prăbușirii e dezbaterea cea mai aspră a domeniului. Socotelile populației americane din 1492 merg de la vreo opt milioane, în cifrele mici din prima jumătate a secolului XX, până la peste o sută de milioane în propunerile cele mai mari ale școlii din Berkeley și ale lui Henry Dobyns. Înțelegerea de azi se așază într-un interval larg, în jur de patruzeci sau șaizeci de milioane, cu o scădere de până la nouăzeci la sută în veacul de după contact, mai mare pe insule și pe pământurile joase și calde.',
        'Despre pricini, poziția de căpetenie pune greutatea de căpetenie pe molime în fața unor populații fără apărare de dinainte, dar cercetarea de mai încoace stăruie că acea lămurire nu poate fi despărțită de cucerirea însăși. Războaiele, munca silită în mine, strămutarea obștilor, ruperea sistemelor agricole și destrămarea obștească au înmulțit ucigașia unor agenți de boală ce, într-o societate nesupusă, ar fi pricinuit mult mai puține morți. Molima lămurește mărimea; silnicia și rânduiala colonială lămuresc de ce nu a fost refacere.',
      ].join('\n\n'),
      callout:
        'A pune prăbușirea numai pe seama microbilor preface o urgie politică într-o întâmplare biologică. Molima lămurește mărimea; munca silită, războiul și ruperea sistemelor agrare lămuresc de ce populația nu și-a revenit.',
    },
  ],
  concepts: [
    { term: 'Beringia', definition: 'Punte de uscat între Asia și America în timpul ultimei glaciațiuni. Drumul de coastă pe Pacific se întrece azi cu coridorul dinăuntru ca șosea de căpetenie a populării.' },
    { term: 'Milpa', definition: 'Cultură laolaltă de porumb, fasole și dovleac. Întreagă din punct de vedere hrănitor și trainică agronomic, fiindcă fasolea prinde azot, iar dovleacul acoperă solul.' },
    { term: 'Nixtamalizare', definition: 'Fiertul porumbului cu var, ce slobozește niacina. Fără ea, o hrană întemeiată pe porumb zămislește pelagra, cum s-a întâmplat în Europa după ce a primit cerealul fără meșteșug.' },
    { term: 'Socoteala lungă', definition: 'Sistem calendaristic maya ce așază orice dată într-un ciclu de peste cinci mii de ani, cu notație pozițională și folosirea zeroului.' },
    { term: 'Scrisul glific maya', definition: 'Singurul sistem întreg al Americii: logosilabic și în stare să însemneze orice rostire. Descifrarea lui din anii cincizeci încoace a prefăcut domeniul.' },
    { term: 'Chinampa', definition: 'Platformă de cultură clădită pe lac cu mâl și verdeață. De o rodnicie foarte mare, a ținut populația Tenochtitlanului.' },
    { term: 'Tripla Alianță', definition: 'Legământ din 1428 dintre Tenochtitlan, Texcoco și Tlacopan. Temelia unui sistem de stăpânire prin tribut, nu de administrare directă a teritoriului.' },
    { term: 'Tributul mexica', definition: 'Darea din vreme în vreme de mărfuri și de muncă de către popoarele supuse, ce își păstrau stăpânii. Povara lui a zămislit pica pe care Cortés a folosit-o.' },
    { term: 'Stăpânire verticală', definition: 'Strategie andină descrisă de Murra: colonii statornice la mai multe trepte ecologice ca să fie dobândite mărfuri de la înălțimi deosebite fără să se apeleze la piețe.' },
    { term: 'Ayllu', definition: 'Grup de rudenie andin cu pământuri comune și îndatoriri reciproce. Unitate obștească de temelie pe care s-a sprijinit statul incaș.' },
    { term: 'Quipu', definition: 'Mulțime de sfori cu noduri folosite ca să însemneze cantități în notație zecimală pozițională și probabil și informații fără cifre.' },
    { term: 'Mita', definition: 'Muncă pe rând pe care obștile andine o datorau statului în lucrări, în mine sau în oaste. Înlocuia tributul în mărfuri și a fost apoi refolosită de spanioli.' },
    { term: 'Răspuns reciproc și redistribuire', definition: 'Principiu economic andin: statul cere muncă și dă înapoi hrană, îmbrăcăminte și sărbătoare din hambarele lui, fără piață, nici monedă.' },
    { term: 'Schimbul columbian', definition: 'Mișcare în amândouă sensurile de plante, de animale și de agenți de boală după 1492, descrisă de Crosby. A rânduit din nou demografia a patru continente.' },
  ],
  debates: [
    {
      question: 'Ce lămurește părăsirea orașelor mayașe din sud?',
      positions: [
        {
          school: 'Secetă documentată',
          argument:
            'Catastifele paleoclimatice din sedimente de lac și din speleoteme arată perioade de secetă lungă între secolele al IX-lea și al X-lea ce se potrivesc cu ultimele date săpate în orașele din sud.',
        },
        {
          school: 'Pricini politice și ecologice îmbinate',
          argument:
            'Războiul statornic tot mai mare, presiunea de populație pe soluri fragile și o îndreptățire regală întemeiată pe chezășuirea ploii și a biruinței au zămislit o criză a formei politice a regatului dumnezeiesc.',
        },
        {
          school: 'Critica noțiunii de prăbușire',
          argument:
            'Populația și cultura maya nu au pierit: s-au rânduit din nou spre nord și mai există. Ce s-a prăbușit a fost o formă politică anume, nu o civilizație.',
        },
      ],
      state:
        'Stăpânește lămurirea cu mai multe pricini, cu seceta drept prilej peste o structură deja încordată. Critica termenului de prăbușire s-a impus în literatura de specialitate.',
    },
    {
      question: 'Câtă populație era în America în 1492 și de ce a pierit?',
      positions: [
        {
          school: 'Cifre mici (Kroeber; Rosenblat)',
          argument:
            'Socotelile timpurii ale secolului XX, întemeiate pe desimi asemuite și pe neîncredere față de cifrele cronicarilor, așezau populația totală în jur de opt sau cincisprezece milioane.',
        },
        {
          school: 'Cifre mari (școala din Berkeley; Dobyns)',
          argument:
            'Refacerea pornind de la catastife de tribut, de putere agricolă și de trepte cunoscute de depopulare ridică cifra peste cincizeci de milioane și până la peste o sută în propunerile cele mai mari.',
        },
        {
          school: 'Molimă înăuntrul cuceririi (Cook; cercetarea de mai încoace)',
          argument:
            'Agenții de boală lămuresc mărimea morților, dar ucigașia lor s-a înmulțit prin război, prin muncă silită, prin strămutarea obștilor și prin ruperea sistemelor agrare.',
        },
      ],
      state:
        'Înțelegerea de azi mânuiește un interval de la patruzeci la șaizeci de milioane, cu scăderi de până la nouăzeci la sută. Discuția s-a mutat de la cifră spre greutatea potrivită a pricinilor biologice și politice.',
    },
    {
      question: 'Cum au putut câteva sute de oameni să doboare două imperii?',
      positions: [
        {
          school: 'Superioritate tehnică și militară',
          argument:
            'Oțelul, caii, archebuzele și câinii de război au dat o întâietate de tactică hotărâtoare în fața unor armate rânduite pentru alt fel de luptă și cu arme de piatră și de lemn.',
        },
        {
          school: 'Alianțe băștinașe și împrejurare (Restall, 2003)',
          argument:
            'Zeci de mii de tlaxcaltec și alte popoare au luptat împotriva Tenochtitlanului din pricini proprii; în Peru, spaniolii au sosit în plin război civil dintre Huáscar și Atahualpa. Cucerirea a fost în bună parte băștinașă.',
        },
      ],
      state:
        'A doua lămurire e azi de căpetenie. Restall a mai dărâmat și mituri statornicite, ca ideea că mexicii l-au luat pe Cortés drept zeu, care e o construcție de mai târziu.',
    },
  ],
  sources: [
    { author: 'Scribi maya', title: 'Inscripțiile de la Tikal, Palenque, Copán și Calakmul', year: 'secolele IV–IX', kind: 'primaria', note: 'Texte dinastice cu date întocmite. Descifrarea lor a schimbat icoana mayașilor ca societate pașnică de preoți.' },
    { author: 'Anonim maya', title: 'Codexul de la Dresda', year: 'secolele XI–XII', kind: 'primaria', note: 'Unul dintre cele patru codexuri maya păstrate. Cuprinde table ale lui Venus și ale eclipselor de o asprime de seamă.' },
    { author: 'Anonim quiché', title: 'Popol Vuh', year: 'c. 1550', kind: 'primaria', note: 'Povestire de facere și epopee a eroilor gemeni, scrisă în alfabet latin pornind de la o tradiție mai veche.' },
    { author: 'Scribi mexica', title: 'Codexul Mendoza', year: 'c. 1541', kind: 'primaria', note: 'Catastif zugrăvit al istoriei mexica, al listelor de tribut și al educației. Izvor de căpetenie despre economia imperială.' },
    { author: 'Hernán Cortés', title: 'Scrisori de dare de seamă', year: '1519–1526', kind: 'primaria', note: 'Rapoarte către împărat scrise ca să îndreptățească o faptă nelegiuită din punct de vedere juridic. Izvor de căpetenie și înadins părtinitor.' },
    { author: 'Bernardino de Sahagún și martori nahua', title: 'Codexul Florentin', year: '1577', kind: 'primaria', note: 'Enciclopedie în două limbi alcătuită cu martori băștinași. Izvorul etnografic cel mai mare despre lumea nahua, cu glas nahuatl propriu.' },
    { author: 'Bernal Díaz del Castillo', title: 'Istoria adevărată a cuceririi Noii Spanii', year: '1568', kind: 'primaria', note: 'Povestirea unui soldat scrisă decenii mai târziu, în ceartă cu cronicile oficiale.' },
    { author: 'Anale de la Tlatelolco și cântece nahua', title: 'Mărturii băștinașe ale cuceririi', year: '1528 și după', kind: 'primaria', note: 'Varianta celor învinși, strânsă de León-Portilla. Contrapondere de neocolit față de cronicile spaniole.' },
    { author: 'Bartolomé de las Casas', title: 'Scurtă dare de seamă a distrugerii Indiilor', year: '1552', kind: 'primaria', note: 'Învinuire scrisă ca să silească o schimbare de lege. Cifrele lui sunt de retorică, iar mărturia lui despre metode, de la fața locului.' },
    { author: 'Pedro Cieza de León', title: 'Cronica Perului', year: '1553', kind: 'primaria', note: 'Descrierea Tahuantinsuyu-ului strânsă de la martori andini la scurtă vreme după cucerire.' },
    { author: 'Inca Garcilaso de la Vega', title: 'Comentarii regale ale incașilor', year: '1609', kind: 'primaria', note: 'Istorie scrisă de un metis din Cuzco, din Spania. Izvor prețios și, în același timp, idealizare înadins a imperiului.' },
    { author: 'Felipe Guaman Poma de Ayala', title: 'Nouă cronică și bună cârmuire', year: 'c. 1615', kind: 'primaria', note: 'Scrisoare zugrăvită de aproape o mie două sute de pagini către regele Spaniei, învinuind rânduiala colonială dintr-o privire andină.' },
    { author: 'Titu Cusi Yupanqui', title: 'Îndrumare către licențiatul Lope García de Castro', year: '1570', kind: 'primaria', note: 'Povestirea cuceririi dictată de un inca din Vilcabamba, cu varianta taberei învinse.' },
    { author: 'Alfred Crosby', title: 'Schimbul columbian', year: '1972', kind: 'estudio', note: 'Formulează noțiunea ce a rânduit din nou cercetarea urmărilor biologice ale lui 1492.' },
    { author: 'John Murra', title: 'Rânduiala economică a statului incaș', year: '1955', kind: 'estudio', note: 'Propune stăpânirea verticală a treptelor ecologice și economia de răspuns reciproc fără piață.' },
    { author: 'María Rostworowski', title: 'Istoria Tahuantinsuyu-ului', year: '1988', kind: 'estudio', note: 'Sinteză andină de referință, sprijinită pe documentație colonială timpurie și pe etnoistorie.' },
    { author: 'Miguel León-Portilla', title: 'Privirea învinșilor', year: '1959', kind: 'estudio', note: 'Strângere și studiu al mărturiilor băștinașe ale cuceririi. A schimbat predarea temei în lumea hispanică.' },
    { author: 'Linda Schele și David Freidel', title: 'O pădure de regi', year: '1990', kind: 'estudio', note: 'Popularizarea descifrării glifice și a istoriei dinastice maya refăcute pornind de la ea.' },
    { author: 'Simon Martin și Nikolai Grube', title: 'Chronicle of the Maya Kings and Queens', year: '2000', kind: 'estudio', note: 'Refacerea dinastică oraș cu oraș pornind de la inscripții.' },
    { author: 'Noble David Cook', title: 'Cucerirea biologică', year: '1998', kind: 'estudio', note: 'Analizează prăbușirea demografică fără s-o despartă de contextul de război și de muncă silită.' },
    { author: 'Matthew Restall', title: 'Cele șapte mituri ale cuceririi spaniole', year: '2003', kind: 'estudio', note: 'Dărâmă lămuririle tradiționale și așază alianțele băștinașe în miezul procesului.' },
    { author: 'Charles C. Mann', title: '1491', year: '2005', kind: 'estudio', note: 'Sinteză de popularizare a schimbării de paradigmă despre demografie, agricultură și prefacerea peisajului american.' },
    { author: 'Terence DAltroy', title: 'The Incas', year: '2002', kind: 'estudio', note: 'Manual de azi despre rânduiala, economia și arheologia Tahuantinsuyu-ului.' },
    { author: 'Camilla Townsend', title: 'Al cincilea soare', year: '2019', kind: 'estudio', note: 'Istoria mexicilor scrisă pornind de la izvoare în nahuatl, din propria lor privire.' },
  ],
  documents: [
    {
      section: 4,
      title: 'Vărsatul povestit de martori nahua',
      text: [
        'Înainte ca spaniolii să apară printre noi, mai întâi s-a răspândit printre noi o mare molimă, o boală de obște.',
        'S-a răspândit peste popor o mare pieire. Mulți au murit din pricina ei. Nimeni nu mai putea umbla, nu mai erau decât culcați, întinși în patul lor.',
        'Și mulți au murit numai de foame: au fost morți din pricina foamei, nimeni nu mai avea grijă de nimeni, nimeni nu se mai îngrijea de altul.',
      ].join('\n\n'),
      source: 'Codexul Florentin, cartea a XII-a, strânsă de fratele Bernardino de Sahagún pe la 1577.',
      note: 'Versiune proprie după nahuatl. Sahagún a strâns mărturia unor bătrâni ce trăiseră cucerirea.',
      question: 'Textul așază molima înaintea asaltului de pe urmă asupra Tenochtitlanului. Cum schimbă asta povestirea obișnuită a cuceririi? Ia aminte și la ultima frază: nu descrie doar boala.',
    },
  ],
  images: [
    {
      alt: 'Vedere a lui Machu Picchu cu terasele lui în trepte și incintele de piatră pe creasta muntelui',
      caption: 'Machu Picchu, clădit în secolul al XV-lea sub Pachacútec.',
    },
    {
      alt: 'Piramida în trepte El Castillo de la Chichén Itzá, cu scara centrală și templul în vârf',
      caption: 'El Castillo de la Chichén Itzá, din perioada postclasică maya.',
    },
    {
      alt: 'Cap uriaș cioplit în bazalt cu coif strâns, buze groase și ochi deschiși, printre verdeață',
      caption: 'Cap colosal olmec de la La Venta, pe la 900 î.Hr. Bazaltul a fost adus din cariere de la zeci de kilometri, fără roată, nici animale de tracțiune.',
    },
    {
      alt: 'Pagină de codex cu figuri omenești, glife și obiecte așezate pe rânduri, cu însemnări în spaniolă alături',
      caption: 'Folio din Codexul Mendoza, pe la 1541. Zugrăvit de scribi băștinași și lămurit în spaniolă: însemnează tributul primit de Tenochtitlan.',
    },
    {
      alt: 'Zid în zigzag din blocuri de piatră uriașe și de forme neregulate, îmbinate fără mortar între ele',
      caption: 'Zidurile de la Sacsayhuamán, deasupra Cuzco. Blocurile, de până la o sută de tone, se îmbină fără mortar și au rezistat unor veacuri de cutremure.',
    },
  ],
  questions: [
    {
      question: 'De ce e socotită America un caz hotărâtor pentru istoria de asemuire?',
      options: [
        'Fiindcă popularea ei a fost cea mai nouă de pe planetă',
        'Fiindcă a dezvoltat de sine stătător agricultura, orașele, statul și scrisul, fără legătură cu Eurasia',
        'Fiindcă a păstrat economii de vânătoare și de culegere până în 1492',
        'Fiindcă a primit înrâuriri asiatice necurmate pe cale de mare',
      ],
      explanation: 'Faptul că a ajuns la rezultate asemănătoare pornind de la nimic dovedește că acele născociri nu sunt o întâmplare culturală europeană.',
    },
    {
      question: 'Ce însemnătate a avut situl Monte Verde, din Chile?',
      options: [
        'A întărit că cultura Clovis a fost cea dintâi a continentului',
        'A documentat o ocupare mai veche decât Clovis și a deschis ipoteza unui drum de coastă pe Pacific',
        'A dovedit obârșia africană a populării americane',
        'A datat domesticirea porumbului în sudul continentului',
      ],
      explanation: 'Datarea lui pe la 14500 î.Hr. a silit lăsarea modelului ce făcea din Clovis punctul de plecare.',
    },
    {
      question: 'De ce e de seamă milpa din punct de vedere hrănitor și agronomic?',
      options: [
        'Fiindcă îngăduie trei recolte pe an de porumb',
        'Fiindcă îmbină porumb, fasole și dovleac: fasolea prinde azot, dovleacul acoperă solul, iar întregul e hrănitor deplin',
        'Fiindcă nu cere irigare în nicio regiune',
        'Fiindcă înlocuiește creșterea vitelor ca izvor de proteină animală',
      ],
      explanation: 'La ea s-a adăugat nixtamalizarea, fără de care o hrană întemeiată pe porumb zămislește pelagra.',
    },
    {
      question: 'Ce urmare nu la vedere a avut lipsa animalelor mari de casă în America?',
      options: [
        'A oprit dezvoltarea agriculturii intensive',
        'A lăsat populațiile fără apărare împotriva bolilor de la animale pe care Eurasia le răbda de milenii',
        'A silit lăsarea vieții orășenești',
        'A întârziat domesticirea porumbului câteva milenii',
      ],
      explanation: 'A mai lăsat și fără folosire practică roata, cunoscută în jucării mesoamericane, pe un teren, pe deasupra, foarte prăpăstios.',
    },
    {
      question: 'Ce însușiri împart societățile din zona culturală mesoamericană?',
      options: [
        'O limbă comună și o cârmuire unită',
        'Calendarul îndoit de 260 și de 365 de zile, jocul de minge de rit, piramida în trepte și socoteala în bază douăzeci',
        'Lipsa scrisului și a astronomiei',
        'Economia întemeiată numai pe vânătoare',
      ],
      explanation: 'Această unitate nu presupune un imperiu: presupune veacuri de schimb, de război și de împrumut între popoare deosebite.',
    },
    {
      question: 'Ce aparte are Teotihuacan față de alte capitale vechi?',
      options: [
        'Că nu avea arhitectură uriașă',
        'Că nu s-a găsit niciun portret al unui cârmuitor anume, ceea ce a dus la propunerea unor forme de cârmuire obștească',
        'Că era locuit numai de preoți',
        'Că a fost întemeiat de mexici în secolul al XIV-lea',
      ],
      explanation: 'A trecut de o sută de mii de locuitori, cu plan în careuri și ansambluri de locuit unde trăiau meșteșugari din alte regiuni.',
    },
    {
      question: 'Ce a schimbat descifrarea scrisului maya?',
      options: [
        'A întărit icoana unei societăți pașnice cârmuite de astronomi',
        'A dat la iveală dinastii cu nume și cu date, războaie între orașe, alianțe și prinderi de regi rivali',
        'A dovedit că textele erau numai calendaristice',
        'A dovedit că scrisul era de obârșie olmecă',
      ],
      explanation: 'E singurul sistem întreg al continentului, logosilabic, iar descifrarea lui a înaintat din anii cincizeci cu Knorozov, Proskuriakoff, Schele și Stuart.',
    },
    {
      question: 'Ce obiecție se ridică azi termenului de prăbușire maya?',
      options: [
        'Că orașele din sud nu au fost niciodată părăsite',
        'Că populația și cultura nu au pierit: s-au rânduit din nou spre nord și mai există. Ce s-a prăbușit a fost o formă politică',
        'Că seceta nu e documentată în niciun catastif',
        'Că părăsirea s-a întâmplat după sosirea spaniolilor',
      ],
      explanation: 'Lămurirea de căpetenie îmbină seceta drept prilej cu războiul statornic și cu presiunea de populație pe soluri fragile.',
    },
    {
      question: 'Cum stăpâneau mexicii teritoriile supuse?',
      options: [
        'Prin administrare directă cu dregători numiți din Tenochtitlan',
        'Prin tribut: popoarele își păstrau stăpânii și dădeau mărfuri și muncă',
        'Prin colonizare cu populație venită din valea Mexicului',
        'Numai prin alianțe de căsătorie',
      ],
      explanation: 'Povara tributului și a jertfei a zămislit o pică printre popoarele supuse ce s-a dovedit hotărâtoare în 1519.',
    },
    {
      question: 'Ce caracteriza Tenochtitlanul în 1519?',
      options: [
        'O așezare răzlețită de vreo zece mii de locuitori',
        'Între o sută cincizeci și două sute de mii de locuitori, chinampas, apeduct de apă bună de băut, o mare piață și școli silite',
        'Un oraș cu ziduri, fără agricultură proprie',
        'O capitală fără negoț, ținută numai de tribut',
      ],
      explanation: 'Era mai mare decât orice oraș european al vremii, afară poate de Constantinopol, iar chinampas erau platforme de cultură de o rodnicie foarte mare.',
    },
    {
      question: 'Cum se cuvine tratată chestiunea jertfei omenești mexica?',
      options: [
        'Tăgăduindu-i existența, fiindcă ar fi propagandă spaniolă',
        'Recunoscând-o ca practică de căpetenie și, în același timp, mărginind cifrele cu arheologie, știind că a fost argumentul ce a îndreptățit cucerirea',
        'Socotind-o pricina unică a prăbușirii imperiului',
        'Punând-o numai pe seama popoarelor supuse',
      ],
      explanation: 'Logica ei era cosmologică și era legată de un război rânduit ca rit. Cifrele cronicilor sunt de propagandă, iar arheologia Templului Mare le-a mărginit.',
    },
    {
      question: 'În ce stă stăpânirea verticală descrisă de John Murra?',
      options: [
        'În ierarhia administrativă a statului incaș',
        'În ținerea unor colonii statornice la mai multe trepte ecologice ca să fie dobândite mărfuri de la înălțimi deosebite fără să se apeleze la piețe',
        'În clădirea unor terase de cultură pe povârnișuri',
        'În sistemul de drumuri ce unea coasta cu munții',
      ],
      explanation: 'E răspunsul andin la un teritoriu unde în câteva zeci de kilometri se trece de la deșertul de coastă la patru mii de metri.',
    },
    {
      question: 'Ce au dovedit săpăturile de la Caral și de la Norte Chico?',
      options: [
        'Că civilizația andină a început cu incașii',
        'Că a fost arhitectură uriașă și plan orășenesc din mileniul al treilea î.Hr. încoace, fără ceramică',
        'Că coasta peruană a fost nelocuită până în anul 1000',
        'Că Chaviń a fost cel dintâi centru de rit al continentului',
      ],
      explanation: 'Sunt din aceeași vreme cu piramidele Egiptului, iar economia lor îmbina agricultura de bumbac cu pescuitul.',
    },
    {
      question: 'Cu ce unelte a administrat Tahuantinsuyu milioane de oameni?',
      options: [
        'Scris alfabetic, monedă și piețe regionale',
        'Quipu de notație zecimală, rânduirea zecimală a populației și muncă pe rând prin mita',
        'Un sistem de tribut în aur și în argint',
        'O birocrație aleasă prin examen',
      ],
      explanation: 'Fără scris alfabetic, fără monedă, fără piețe dezvoltate și fără roată, cu o rețea de vreo patruzeci de mii de kilometri de drumuri.',
    },
    {
      question: 'Potrivit lui Matthew Restall, ce factor a fost hotărâtor în căderea Tenochtitlanului?',
      options: [
        'Superioritatea deplină a armelor de foc spaniole',
        'Alianțele băștinașe: zeci de mii de tlaxcaltec și alte popoare au luptat din pricini proprii',
        'Credința mexica că Cortés era zeu',
        'Superioritatea navală spaniolă pe lac',
      ],
      explanation: 'Ideea că mexicii l-au luat pe Cortés drept zeu e o construcție de mai târziu, iar archebuzele acelei vremi erau încete și puține.',
    },
    {
      question: 'Cum se lămurește azi prăbușirea demografică de după 1492?',
      options: [
        'Ca urmare exclusivă a molimelor, fără legătură cu cucerirea',
        'Agenții de boală lămuresc mărimea, dar ucigașia lor s-a înmulțit prin război, prin muncă silită și prin ruperea sistemelor agrare',
        'Ca urmare a unor migrații de bunăvoie spre interior',
        'Ca o scădere mică, în hotarul schimbării demografice obișnuite',
      ],
      explanation: 'Înțelegerea de azi mânuiește un interval de la patruzeci la șaizeci de milioane în 1492 și scăderi de până la nouăzeci la sută în veacul de după contact.',
    },
  ],
}
