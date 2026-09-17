import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/reforma.ts`. Aceeași formă: 6 secțiuni
   în aceeași ordine, 15 date, 14 concepte, 3 dezbateri, 17 surse, un document
   comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const reformaRo: TopicTranslation = {
  title: 'Reforma, Contrareforma și războaiele de religie',
  description: 'De la o dispută universitară despre indulgențe la împărțirea confesională a continentului.',
  years: '1517–1648',
  summary:
    'În 1517, un profesor de teologie de la o universitate mică a propus să se discute nouăzeci și cinci de teze despre indulgențe. Nu cerea ruperea de Roma și nici întemeierea unei biserici: cerea o dispută academică. O sută treizeci de ani mai târziu, Europa rămăsese împărțită pe confesiuni, pierduse în Imperiu în jur de o cincime din populație și clădise state care își înregistrau, își cercetau și își disciplinau supușii cu o amănunțime necunoscută până atunci. Înțelegerea perioadei cere lămurirea a două lucruri diferite: de ce protestul lui Luther nu s-a sfârșit ca cele ale lui Wyclif sau ale lui Hus și de ce conflictul religios s-a dovedit atât de rodnic pentru puterea politică a ambelor tabere.',
  keyDates: [
    { date: '1517', event: 'Luther îi trimite cele 95 de teze arhiepiscopului de Mainz.' },
    { date: '1520–1521', event: 'Excomunicarea și Dieta de la Worms: „nu pot și nu vreau să mă lepăd”.' },
    { date: '1522–1534', event: 'Traducerea Bibliei în germană, de la Noul Testament la opera întreagă.' },
    { date: '1524–1525', event: 'Războiul țărănesc: Cele Douăsprezece Articole de la Memmingen și represiune cu zeci de mii de morți.' },
    { date: '1529', event: 'Colocviul de la Marburg: Luther și Zwingli nu izbutesc să se înțeleagă asupra euharistiei.' },
    { date: '1534', event: 'Actul de Supremație în Anglia; regatul anabaptist de la Münster.' },
    { date: '1536–1541', event: 'Calvin publică *Instituția* și rânduiește Geneva.' },
    { date: '1540', event: 'Aprobarea Societății lui Iisus.' },
    { date: '1545–1563', event: 'Conciliul de la Trento, în trei etape.' },
    { date: '1555', event: 'Pacea de la Augsburg: fiecare principe fixează confesiunea teritoriului lui.' },
    { date: '1562–1598', event: 'Războaiele de religie din Franța; masacrul din noaptea Sfântului Bartolomeu, în 1572.' },
    { date: '1568–1648', event: 'Răscoala Țărilor de Jos împotriva monarhiei hispanice.' },
    { date: '1598', event: 'Edictul de la Nantes: toleranță mărginită pentru hughenoți.' },
    { date: '1618–1648', event: 'Războiul de Treizeci de Ani.' },
    { date: '1648', event: 'Pacea de la Westfalia: este recunoscut și calvinismul.' },
  ],
  sections: [
    {
      title: 'Ce cerea Luther și ce nu',
      body: [
        'Declanșatorul a fost o operațiune bănească. Albert de Brandenburg voia să adune arhiepiscopia de Mainz laolaltă cu alte scaune, ceea ce cerea o dispensă scumpă; s-a îndatorat la banca Fugger și a primit de la papă dreptul de a predica pe teritoriile lui o indulgență pentru bazilica Sfântul Petru, cu jumătate din bani meniți să îi stingă datoria. Dominicanul Johann Tetzel a predicat-o cu metode negustorești agresive. Luther, profesor de teologie la Wittenberg, a reacționat împotriva acelei predici.',
        'La 31 octombrie 1517 i-a trimis cele nouăzeci și cinci de teze chiar lui Albert, într-o scrisoare care se păstrează. Scena tezelor bătute în cuie pe ușa bisericii castelului nu apare în niciun text al lui Luther: o povestește Melanchthon în 1546, după moartea lui. S-ar putea să se fi întâmplat — era felul obișnuit de a chema la o dispută universitară — dar nu este dovedită documentar, iar gestul de temelie al Reformei este, după toate probabilitățile, o amintire de mai târziu.',
        'Cuprinsul de la început este blând. Tezele nu tăgăduiesc purgatoriul și nici autoritatea papei: susțin că indulgența nu poate ține locul căinței lăuntrice și că vânzarea iertării de pedepse îi înșală pe credincioși. Luther cerea o discuție academică, iar în scrisoarea lui către arhiepiscop pornea de la ideea că acesta nu știa de abuzurile predicatorilor lui.',
        'Radicalizarea a venit din chiar procesul discuției. La disputa de la Leipzig, din 1519, silit de Johann Eck, Luther a primit că și conciliile pot greși, ceea ce lăsa Scriptura drept unica autoritate de pe urmă. În 1520 a publicat trei tratate care erau, într-adevăr, revoluționare: *Către nobilimea creștină a națiunii germane* cerea principilor să reformeze Biserica și tăgăduia deosebirea dintre starea clericală și cea laică; *Robia babiloniană* micșora numărul sacramentelor și tăgăduia transsubstanțierea; *Libertatea creștinului* formula îndreptățirea prin credință. Tot în acel an a venit bula *Exsurge Domine*, iar în 1521, excomunicarea și înfățișarea în fața lui Carol al V-lea, la dieta de la Worms.',
        'Cele trei formule care rezumă teologia lui — numai credința, numai Scriptura, numai harul — au urmări instituționale numaidecât. Dacă mântuirea nu atârnă de fapte și nici de mijlocirea sacramentelor, prisosește o bună parte din aparatul bisericesc; dacă Scriptura este singura autoritate, e nevoie ca oamenii să o poată citi, și de aici traducerea în germană pe care Luther a început-o ascuns la Wartburg și care a fixat, în trecere, limba literară germană.',
      ].join('\n\n'),
      callout:
        'Scena tezelor bătute în cuie pe ușă o povestește Melanchthon în 1546, după moartea lui Luther. Ce este dovedit este scrisoarea către arhiepiscopul de Mainz. Gestul de temelie al Reformei este, după toate probabilitățile, o amintire de mai târziu.',
    },
    {
      title: 'De ce a prins: tiparul, principii și nemulțumirile',
      body: [
        'Wyclif și Hus susținuseră teze asemănătoare cu un secol înainte, iar al doilea a sfârșit pe rug. Deosebirea hotărâtoare ține de comunicare. Luther a scris în germană, scurt și înțepător, în broșuri de câteva foi și preț mic, cu gravuri pentru cine nu știa carte. Andrew Pettegree a socotit că în jur de o treime din tot ce s-a tipărit în germană între 1518 și 1525 a ieșit de sub pana lui: este cel dintâi autor de mare succes din istoria europeană și cea dintâi mișcare politică rânduită printr-o piață editorială.',
        'A doua condiție a fost politică. Imperiul nu era o monarhie centralizată, ci un mozaic de principi, orașe libere și episcopii cu interese proprii. Frederic cel Înțelept al Saxoniei l-a ocrotit pe Luther fără să îi împărtășească pe de-a-ntregul tezele, fiindcă un profesor vestit dădea faimă universității lui și fiindcă apelurile la Roma îi roadeau jurisdicția. Mulți principi aveau nemulțumiri adunate față de fiscalitatea papală, iar Reforma le oferea, pe deasupra, un stimulent bănesc numaidecât: secularizarea averilor bisericești din teritoriile lor. Carol al V-lea, care voia într-adevăr să o înăbușe, a fost ocupat decenii întregi cu Franța, cu Mediterana otomană și cu înaintarea turcilor spre Ungaria și Viena.',
        'A treia a fost orășenească. Bernd Moeller a arătat că Reforma a izbândit mai întâi în orașele libere ale Imperiului, unde se potrivea cu o tradiție de autoguvernare comunală: alegerea predicatorului de către obște, administrarea locală a milosteniei și controlul cetățenesc asupra clerului erau cereri dinainte de Luther, pe care teologia lui le îndreptățea. Peter Blickle a lărgit argumentul la sate și a vorbit despre o „reformă comunală”, purtată de comunități țărănești și orășenești care au citit evanghelia ca temei al drepturilor lor.',
        'Se cuvine, de aceea, să nu se dea crezare deplină poveștii călugărului singuratic. Reforma a prins fiindcă a legat o critică teologică de nemulțumiri fiscale, de ambiții teritoriale, de o tradiție de autoguvernare locală și de o tehnologie de răspândire pe care niciunul dintre înaintașii ei nu o avusese.',
      ].join('\n\n'),
    },
    {
      title: '1525: limita socială a Reformei',
      body: [
        'Reforma comunală a fost pusă la încercare în 1524-1525. Zeci de mii de țărani din sudul și din centrul Germaniei s-au ridicat împotriva sarcinilor senioriale, iar programul lor cel mai răspândit, Cele Douăsprezece Articole de la Memmingen, argumenta cu citate biblice: cerea alegerea preotului paroh, desființarea dijmei mici, desființarea iobăgiei fiindcă Hristos i-a răscumpărat pe toți deopotrivă, și întoarcerea folosirii pădurilor și a apelor comunale. A fost unul dintre primele texte europene care formulează drepturi colective și s-a tipărit în vreo douăzeci și cinci de ediții în două luni.',
        'Luther a răspuns întâi cu un îndemn la pace, care împărțea vina, iar apoi, când răscoala s-a întins, cu un pamflet de o violență cumplită, *Împotriva cetelor tâlhărești și ucigașe de țărani*, în care îi chema pe principi să ucidă fără milă. Represiunea a pricinuit între șaptezeci de mii și o sută de mii de morți.',
        'Urmările au fost hotărâtoare și de lungă durată. Reforma a încetat să mai fie o mișcare comunală și a devenit treaba principilor și a dregătorilor: așa-numita reformă magistrală, în care autoritatea civilă rânduiește biserica teritorială, numește pastorii și disciplinează credincioșii. Țărănimea germană a rămas nemișcată vreme de secole. Iar cei care au ținut la citirea radicală a evangheliei — botez doar al adulților, obște a bunurilor, despărțirea bisericii de stat, adesea refuzul de a jura și de a purta arme — au rămas în afara legii deopotrivă pentru catolici și pentru protestanți.',
        'Acei radicali, adunați sub eticheta obștească de anabaptiști, și-au dat în 1527 o mărturisire de credință proprie, la Schleitheim, care alegea despărțirea pașnică de lume. Episodul care le-a marcat imaginea a fost contrariul: în 1534-1535 un grup milenarist a luat Münsterul, a proclamat noul Ierusalim, a impus obștea bunurilor și poligamia și a rezistat unui asediu până a fost nimicit. Münsterul a slujit veacuri întregi ca argument pentru a îndreptăți prigonirea întregii mișcări, inclusiv a ramurilor ei pașnice, din care se trag mennoniții, huteriții și amișii.',
      ].join('\n\n'),
      callout:
        'Cele Douăsprezece Articole de la Memmingen cer desființarea iobăgiei fiindcă Hristos i-a răscumpărat pe toți deopotrivă. Reforma le-a dat țăranilor un limbaj pentru a formula drepturi; Luther s-a alăturat celor care i-au zdrobit.',
    },
    {
      title: 'Celelalte reforme',
      body: [
        'Protestantismul s-a fărâmițat de la bun început, și nu din întâmplare: dacă Scriptura este singura autoritate, nu există o instanță care să tranșeze citirile deosebite. La Zürich, Ulrich Zwingli a pornit din 1519 o reformă mai radicală în privința icoanelor și a cultului, sprijinită de sfatul orășenesc. Colocviul de la Marburg, din 1529, i-a adunat pe Luther și pe Zwingli ca să unească pozițiile în fața amenințării imperiale: s-au înțeles asupra a paisprezece din cele cincisprezece articole și s-au despărțit la al cincisprezecelea, prezența reală a lui Hristos în euharistie. Reforma s-a născut fără putința de a se uni.',
        'Jean Calvin a dat mișcării forma ei cea mai ușor de exportat. *Instituția religiei creștine*, publicată în 1536 și lărgită până în 1559, oferea un sistem teologic întreg și rânduit, cu predestinarea ca urmare firească a suveranității depline a lui Dumnezeu: mântuirea nu atârnă deloc de meritul omenesc. La Geneva a rânduit, din 1541, o biserică cu pastori, doctori, bătrâni și diaconi și un consistoriu care veghea purtarea cetățenilor. Execuția lui Michael Servet, în 1553, pentru că tăgăduia Treimea, a arătat că toleranța nu făcea parte din programul niciuneia dintre tabere.',
        'Calvinismul s-a răspândit în Franța, în Scoția, în Țările de Jos, în părți ale Germaniei și ale Ungariei, și cu el o structură bisericească de sinoade și consistorii care putea funcționa fără sprijinul principelui și chiar împotriva lui. Această autonomie de organizare explică rolul lui în războaiele civile franceze și în răscoala olandeză.',
        'Anglia a mers pe un drum diferit. Ruptura lui Henric al VIII-lea, din 1534, a fost mai întâi dinastică și de jurisdicție decât teologică: Actul de Supremație l-a făcut cap al Bisericii Angliei ca să își rezolve succesiunea, iar desființarea mănăstirilor, între 1536 și 1541, a trecut coroanei și nobilimii o avere uriașă, dând naștere unui grup social cu interes bănesc ca ruptura să nu fie întoarsă. Cuprinsul de doctrină a venit mai apoi, cu Eduard al VI-lea, a fost întors cu Maria I și s-a statornicit în 1559 într-o formulă anume de neclară, care a lăsat înăuntru sensibilități foarte diferite și în afară catolicii și puritanii.',
      ].join('\n\n'),
    },
    {
      title: 'Contrareformă sau reformă catolică?',
      body: [
        'Termenul „Contrareformă” l-a inventat istoriografia protestantă a secolului al XIX-lea și descrie răspunsul catolic ca pură reacție. Hubert Jedin a propus în 1946 să fie deosebite două procese: o reformă catolică cu pornire dinăuntru, cu rădăcini dinainte de 1517 — respectarea rânduielilor în ordinele religioase, umanismul creștin, reforma spaniolă a lui Cisneros, oratoriile italiene —, și o contrareformă în adevăratul înțeles al cuvântului, de luptă împotriva protestantismului. Deosebirea s-a impus, cu avertismentul că cele două procese se împletesc atât de mult încât despărțirea lor este un exercițiu de gândire, nu unul cronologic.',
        'Conciliul de la Trento, adunat în trei etape între 1545 și 1563, a făcut două lucruri. În doctrină a închis orice putință de înțelegere: a întărit din nou îndreptățirea prin credință și fapte, cele șapte sacramente, transsubstanțierea, purgatoriul, cultul sfinților, tradiția alături de Scriptură ca izvor al descoperirii dumnezeiești și Vulgata ca text oficial. În disciplină a fost mult mai înnoitor decât se ține de obicei minte: i-a silit pe episcopi să locuiască în diecezele lor, a întemeiat seminariile pentru pregătirea clerului, a impus înregistrarea sistematică a botezurilor și a căsătoriilor și a rânduit predica și catehismul.',
        'Acest aparat de disciplină avea nevoie de unelte. Inchiziția romană a fost reorganizată în 1542, cel dintâi Index al cărților interzise a fost publicat în 1559, iar cenzura prealabilă s-a generalizat în teritoriile catolice. Societatea lui Iisus, aprobată în 1540, a adus un ordin mișcător, fără cor sau veșmânt propriu, cu al patrulea jurământ de ascultare față de papă, priceput în învățământ și în misiune: colegiile ei au format elitele catolice europene vreme de două secole, iar misionarii ei au ajuns în India, în Japonia, în China și în America.',
        'Cultura a fost și ea o unealtă. Decretul tridentin despre icoane, din 1563, a întărit din nou valoarea lor de învățătură, împotriva iconoclasmului protestant, și a cerut cuviință și limpezime; de acolo pornește o bună parte din estetica barocă, gândită ca să miște și să convingă un public larg. Este o folosire anume propagandistică a artei, și lucrează.',
        'Alături de disciplină a fost și o înnoire duhovnicească adevărată: Tereza de Ávila și Ioan al Crucii, capucinii, ursulinele închinate educației fetelor, întinderea spovedaniei individuale și a îndrumării duhovnicești. A reduce tot catolicismul acelei vremi la represiune este la fel de strâmb ca a reduce Reforma la Luther.',
      ].join('\n\n'),
    },
    {
      title: 'Războaie, păci și confesionalizare',
      body: [
        'Prima soluție a fost teritorială. Pacea de la Augsburg din 1555 a stabilit că fiecare principe al Imperiului fixează confesiunea teritoriului lui și că supușii care nu erau de acord puteau să emigreze; principiul avea să fie rezumat mai apoi prin formula *cuius regio, eius religio*. Recunoștea numai catolicismul și confesiunea luterană de la Augsburg, lăsând pe dinafară calvinismul, care creștea. A fost un armistițiu cu data de expirare pusă chiar în el.',
        'Franța s-a măcinat în opt războaie civile între 1562 și 1598, cu masacrul din noaptea Sfântului Bartolomeu, din 1572 — câteva mii de hughenoți uciși la Paris și în provincii — drept episodul cel mai cunoscut. Conflictul s-a sfârșit când Henric de Navarra a trecut la catolicism ca să ajungă la tron și a dat, în 1598, Edictul de la Nantes, care le dădea protestanților libertate de conștiință, cult mărginit și cetăți de siguranță. A fost toleranță din istovire, nu din principiu, și avea să fie revocat în 1685.',
        'În Țările de Jos, răscoala împotriva lui Filip al II-lea a împletit din 1568 apărarea privilegiilor locale, fiscalitatea și calvinismul, și s-a sfârșit optzeci de ani mai târziu cu independența celor șapte provincii din nord. Iar Războiul de Treizeci de Ani, început în 1618 în Boemia ca un conflict confesional, a ajuns un război european de întâietate, în care Franța catolică a finanțat și apoi a luptat alături de principii protestanți împotriva Habsburgilor. Costul demografic în Imperiu a fost pustiitor: se socotește o pierdere de în jur de douăzeci la sută din populația totală, cu regiuni întregi trecând de cincizeci la sută.',
        'Pacea de la Westfalia, din 1648, a adăugat calvinismul confesiunilor recunoscute, a fixat anul 1624 drept an de referință pentru averile bisericești și a consfințit obiceiul de a rezolva conflictele europene prin congrese cu multe părți. Se cuvine, totuși, să nu fie crezută pe deplin povestea care o înfățișează ca act de naștere al suveranității statale moderne: Andreas Osiander a arătat în 2001 că acea citire este o construcție a secolului al XIX-lea proiectată înapoi și că tratatele nu cuprind nimic asemănător unei doctrine generale a suveranității sau a neamestecului.',
        'Efectul de fond este descris de teza confesionalizării, formulată de Wolfgang Reinhard și Heinz Schilling: clădirea unor identități confesionale limpezi și clădirea statului modern au fost unul și același proces. Catehism obligatoriu, școli, registre parohiale, vizite de cercetare, controlul moralei și al căsătoriei, izgonirea celor de altă credință: catolici, luterani și calviniști au făcut același lucru cu unelte aproape identice, iar în toate cazurile rezultatul a fost o populație mai știutoare de carte, mai supravegheată și mai încadrată.',
        'De aici pornește discuția economică cea mai vestită a perioadei. Max Weber a propus în 1904-1905 că etica calvinistă — chemarea profesională, ascetismul dus în chiar lume, neliniștea în fața nesiguranței mântuirii — a înlesnit acumularea capitalistă. Obiecția modernă cea mai puternică este a lui Sascha Becker și a lui Ludger Woessmann, care în 2009 au măsurat, cu date din Prusia secolului al XIX-lea, depărtarea fiecărui ținut de Wittenberg și au ajuns la concluzia că avantajul economic protestant se explică prin alfabetizarea ivită din obligația de a citi Biblia, nu printr-o etică anume. Legătura dintre religie și economie rămâne; mecanismul propus se schimbă.',
      ].join('\n\n'),
      callout:
        'Westfalia nu a inventat suveranitatea statului. Acea citire este o retroproiecție a secolului al XIX-lea: tratatele nu cuprind nicio doctrină a suveranității sau a neamestecului.',
    },
  ],
  concepts: [
    { term: 'Indulgență', definition: 'Iertarea pedepsei vremelnice pentru păcat. Predicarea ei negustorească, în 1517, a fost declanșatorul protestului lui Luther.' },
    { term: 'Sola scriptura', definition: 'Principiul potrivit căruia Scriptura este singura autoritate de pe urmă în credință. Neexistând un arbitru, face de neocolit fărâmițarea.' },
    { term: 'Îndreptățirea prin credință', definition: 'Mântuirea se primește prin har, prin credință, nu prin fapte. Lipsește de temei o bună parte din mijlocirea sacramentelor.' },
    { term: 'Flugschrift', definition: 'Broșură tipărită, scurtă și ieftină, adesea cu gravuri. Unealtă de răspândire care l-a făcut pe Luther cel dintâi autor de mare succes.' },
    { term: 'Reformă comunală', definition: 'Citire a lui Blickle: Reforma ca mișcare a unor comunități orășenești și țărănești care cer autoguvernare, înfrântă în 1525.' },
    { term: 'Reformă magistrală', definition: 'Model de după 1525, în care autoritatea civilă rânduiește biserica teritorială, numește pastorii și disciplinează credincioșii.' },
    { term: 'Anabaptism', definition: 'Curent radical, adept al botezului adulților și al despărțirii dintre biserică și stat. Prigonit deopotrivă de catolici și de protestanți.' },
    { term: 'Predestinare', definition: 'Doctrină calvinistă: mântuirea atârnă numai de hotărârea divină, nu de meritul omenesc. Urmare a suveranității depline a lui Dumnezeu.' },
    { term: 'Consistoriu', definition: 'Organ genevez alcătuit din pastori și bătrâni, însărcinat să vegheze purtarea cetățenilor. Model de disciplină bisericească calvinistă.' },
    { term: 'Actul de Supremație', definition: 'Lege din 1534 care îl face pe regele Angliei cap al bisericii lui. Ruptură de jurisdicție și dinastică, mai înainte de a fi teologică.' },
    { term: 'Conciliul de la Trento', definition: 'Adunare din 1545-1563. Închide doctrina în fața protestantismului și întemeiază seminariile, reședința episcopală și registrele parohiale.' },
    { term: 'Cuius regio, eius religio', definition: 'Principiul de la Augsburg (1555): principele fixează confesiunea teritoriului lui. Lăsa pe dinafară calvinismul, care continua să crească.' },
    { term: 'Confesionalizare', definition: 'Teza lui Reinhard și Schilling: clădirea identității confesionale și clădirea statului modern au fost unul și același proces de disciplinare.' },
    { term: 'An de referință', definition: 'Data fixată la Westfalia — 1624 — pentru a hotărî cui aparțineau averile bisericești în Imperiu.' },
  ],
  debates: [
    {
      question: 'Contrareformă sau reformă catolică?',
      positions: [
        {
          school: 'Contrareformă (istoriografia protestantă a secolului al XIX-lea)',
          argument:
            'Răspunsul catolic a fost, în chiar firea lui, o reacție: Trento, Inchiziția romană, Index-ul și Societatea lui Iisus se explică drept mecanism de luptă împotriva protestantismului.',
        },
        {
          school: 'Două procese (Hubert Jedin, 1946)',
          argument:
            'A existat o reformă catolică cu pornire dinăuntru, dinainte de 1517 — respectarea rânduielilor religioase, umanismul creștin, reforma spaniolă, oratoriile italiene —, peste care s-a suprapus mai apoi reacția antiprotestantă.',
        },
      ],
      state:
        'Deosebirea lui Jedin este astăzi norma, cu avertismentul că cele două procese se împletesc atât de mult încât despărțirea lor este un mijloc de gândire, nu o succesiune cronologică limpede.',
    },
    {
      question: 'A fost Reforma o mișcare a principilor sau a comunităților?',
      positions: [
        {
          school: 'Reformă comunală (Moeller, Blickle)',
          argument:
            'A izbândit mai întâi în orașe libere și în comunități rurale cu tradiție de autoguvernare, care cereau să își aleagă predicatorul și să administreze milostenia. Cele Douăsprezece Articole din 1525 sunt programul ei.',
        },
        {
          school: 'Reformă a principilor',
          argument:
            'Fără ocrotirea lui Frederic cel Înțelept și fără interesul principilor de a seculariza averile bisericești și de a scurta jurisdicția romană, mișcarea s-ar fi sfârșit ca cea a lui Hus.',
        },
      ],
      state:
        'Se primește că amândouă laturile au existat și că 1525 a fost balamaua: zdrobită răscoala țărănească, Reforma a rămas în mâinile principilor și ale dregătorilor, iar calea comunală a dispărut ca putință.',
    },
    {
      question: 'Explică etica protestantă avantajul economic al nordului Europei?',
      positions: [
        {
          school: 'Etica protestantă (Max Weber, 1904-1905)',
          argument:
            'Chemarea profesională, ascetismul dus în chiar lume și neliniștea în fața nesiguranței mântuirii au dat naștere unei porniri spre economisire, spre muncă rânduită cu grijă și spre reinvestire, care a înlesnit acumularea capitalistă.',
        },
        {
          school: 'Capital omenesc (Becker și Woessmann, 2009)',
          argument:
            'Măsurând depărtarea fiecărui ținut prusac de Wittenberg, avantajul economic protestant dispare când se ține seama de alfabetizare: ce a fost hotărâtor a fost obligația de a citi Biblia, nu o etică anume.',
        },
      ],
      state:
        'Legătura dintre confesiune și dezvoltare rămâne; mecanismul propus de Weber este mult discutat. Astăzi se explică mai ales prin educație și prin capital omenesc, și se subliniază că teza inițială descria afinități, nu o cauzalitate simplă.',
    },
  ],
  sources: [
    { author: 'Martin Luther', title: 'Nouăzeci și cinci de teze și scrisoare către Albert de Mainz', year: '1517', kind: 'primaria', note: 'Scrisoarea este dovedită; bătutul în cuie pe ușă îl povestește Melanchthon în 1546.' },
    { author: 'Martin Luther', title: 'Către nobilimea creștină a națiunii germane', year: '1520', kind: 'primaria', note: 'Cheamă principii să reformeze Biserica și tăgăduiește deosebirea dintre clerici și laici.' },
    { author: 'Comunități țărănești din Suabia', title: 'Cele Douăsprezece Articole de la Memmingen', year: '1525', kind: 'primaria', note: 'Program de drepturi colective întemeiat pe citate biblice. Douăzeci și cinci de ediții în două luni.' },
    { author: 'Martin Luther', title: 'Împotriva cetelor tâlhărești și ucigașe de țărani', year: '1525', kind: 'primaria', note: 'Îi cheamă pe principi să reprime fără milă. Document esențial al cotiturii magistrale.' },
    { author: 'Frăția de la Schleitheim', title: 'Mărturisirea de la Schleitheim', year: '1527', kind: 'primaria', note: 'Program anabaptist al despărțirii pașnice de lume, dinainte de episodul Münster.' },
    { author: 'Philipp Melanchthon', title: 'Mărturisirea de la Augsburg', year: '1530', kind: 'primaria', note: 'Expunerea oficială a doctrinei luterane, înfățișată în fața lui Carol al V-lea.' },
    { author: 'Parlamentul englez', title: 'Actul de Supremație', year: '1534', kind: 'primaria', note: 'Îl preface pe rege în capul Bisericii Angliei, din motive de succesiune și de jurisdicție.' },
    { author: 'Jean Calvin', title: 'Instituția religiei creștine', year: '1536-1559', kind: 'primaria', note: 'Sistem teologic întreg și ușor de exportat. Temelia de organizare a calvinismului internațional.' },
    { author: 'Conciliul de la Trento', title: 'Decrete și canoane', year: '1545-1563', kind: 'primaria', note: 'Doctrină închisă în fața protestantismului și reformă de disciplină a clerului și a parohiei.' },
    { author: 'Henric al IV-lea al Franței', title: 'Edictul de la Nantes', year: '1598', kind: 'primaria', note: 'Toleranță mărginită, din istovire, după opt războaie civile. Revocat în 1685.' },
    { author: 'Plenipotențiarii europeni', title: 'Tratatele de la Osnabrück și Münster', year: '1648', kind: 'primaria', note: 'Recunosc calvinismul și fixează anul 1624 ca an de referință. Nu cuprind vreo doctrină a suveranității.' },
    { author: 'Max Weber', title: 'Etica protestantă și spiritul capitalismului', year: '1904-1905', kind: 'estudio', note: 'Propune o afinitate între ascetismul calvinist și acumularea capitalistă.' },
    { author: 'Hubert Jedin', title: 'Katholische Reformation oder Gegenreformation?', year: '1946', kind: 'estudio', note: 'Deosebește reforma catolică dinăuntru de contrareforma antiprotestantă.' },
    { author: 'Peter Blickle', title: 'Revoluția omului de rând', year: '1975', kind: 'estudio', note: 'Reforma comunală și războiul țărănesc din 1525, ca mișcare cu program propriu.' },
    { author: 'Diarmaid MacCulloch', title: 'Reformation: Europe s House Divided', year: '2003', kind: 'estudio', note: 'Sinteză generală a perioadei, atentă la margini și la Reforma radicală.' },
    { author: 'Andreas Osiander', title: 'Sovereignty, International Relations and the Westphalian Myth', year: '2001', kind: 'estudio', note: 'Desface citirea anului 1648 ca act de naștere al suveranității statale.' },
    { author: 'Sascha Becker și Ludger Woessmann', title: 'Was Weber Wrong?', year: '2009', kind: 'estudio', note: 'Pune avantajul economic protestant pe seama alfabetizării, nu a eticii.' },
    { author: 'Andrew Pettegree', title: 'Brand Luther', year: '2015', kind: 'estudio', note: 'Reforma ca fenomen editorial, cu Wittenberg drept centru de tipar.' },
  ],
  documents: [
    {
      section: 0,
      title: 'Patru dintre cele nouăzeci și cinci de teze',
      text: [
        '21. Greșesc predicatorii indulgențelor când spun că, prin indulgențele papei, omul rămâne liber de orice pedeapsă și mântuit.',
        '27. Predică o învățătură omenească cei care spun că, îndată ce banul sună în cutie, sufletul zboară din purgatoriu.',
        '43. Trebuie învățați creștinii că cel care dă săracului sau împrumută pe cel nevoiaș face mai bine decât dacă ar cumpăra indulgențe.',
        '86. De ce papa, a cărui avere este astăzi mai mare decât a celor mai bogați, nu clădește bazilica Sfântul Petru cu banii lui, mai degrabă decât cu banii credincioșilor săraci?',
      ].join('\n\n'),
      source: 'Martin Luther, Dispută despre puterea indulgențelor, 31 octombrie 1517.',
      note: 'Versiune proprie după latină. Tezele au fost scrise pentru o dezbatere universitară, nu pentru popor.',
      question: 'Teza 86 nu este teologică, este economică și foarte directă. De ce crezi că un asemenea argument s-a răspândit mai repede decât cele de doctrină, când textul a fost tradus și tipărit în germană?',
    },
  ],
  images: [
    {
      alt: 'Portretul lui Martin Luther, din jumătate de corp, cu odăjdii închise la culoare pe fond albastru',
      caption: 'Martin Luther, portretizat de Lucas Cranach cel Bătrân în 1529.',
    },
    {
      alt: 'Tipăritură veche pe două coloane, în latină, cu cele nouăzeci și cinci de teze numerotate',
      caption: 'Tipărire timpurie a celor nouăzeci și cinci de teze. Răspândirea prin tipar este ce a prefăcut o dispută academică într-un conflict european.',
    },
    {
      alt: 'Portretul unui bărbat tânăr, cu chip slab, cu bonetă și robă neagră, ținând o carte închisă',
      caption: 'Jean Calvin. Geneva lui a fost modelul pe care l-au exportat hughenoții, presbiterienii și puritanii: Reforma nu a fost doar luterană.',
    },
    {
      alt: 'Pictură a unei mari adunări de clerici așezați pe trepte, într-o biserică, cu o alegorie feminină în prim-plan',
      caption: 'Conciliul de la Trento, după Pasquale Cati (1588). A ținut optsprezece ani, în trei etape, și a fixat doctrina și disciplina până în secolul XX.',
    },
    {
      alt: 'Pictură cu un masacru pe străzile unui oraș: trupuri îngrămădite, oameni aruncați pe ferestre și grupuri înarmate',
      caption: 'Masacrul din noaptea Sfântului Bartolomeu, 1572, pictat de François Dubois, hughenot fugit din Franța. Războiul de religie este mai întâi civil, apoi din afară.',
    },
  ],
  questions: [
    {
      question: 'Ce operațiune bănească stă în spatele predicării indulgențelor din 1517?',
      options: [
        'Finanțarea războiului împotriva turcilor',
        'Datoria lui Albert de Brandenburg la Fugger, făcută ca să adune arhiepiscopia de Mainz, plătită cu jumătate din banii strânși',
        'Cumpărarea coroanei imperiale de către Carol al V-lea',
        'Răscumpărarea lui Francisc I după Pavia',
      ],
      explanation: 'Cealaltă jumătate mergea la lucrările de la Sfântul Petru. Culmea artistică a Renașterii romane și protestul lui Luther împart aceeași sursă de finanțare.',
    },
    {
      question: 'Ce se știe cu siguranță despre cele 95 de teze?',
      options: [
        'Că Luther le-a bătut în cuie pe ușa bisericii castelului, la 31 octombrie 1517',
        'Că se păstrează scrisoarea cu care Luther le-a trimis arhiepiscopului de Mainz; bătutul în cuie îl povestește Melanchthon în 1546',
        'Că au fost scrise în germană, pentru marele public',
        'Că tăgăduiau, de la bun început, autoritatea papei',
      ],
      explanation: 'Tezele nu tăgăduiesc purgatoriul și nici autoritatea papală: susțin că indulgența nu ține locul căinței. Luther cerea o dispută academică.',
    },
    {
      question: 'Ce a admis Luther la disputa de la Leipzig, din 1519, și de ce a fost hotărâtor?',
      options: [
        'Că și conciliile pot greși, ceea ce lăsa Scriptura drept unica autoritate de pe urmă',
        'Că vânzarea indulgențelor era legitimă dacă papa o îngăduia',
        'Că primea transsubstanțierea fără nicio rezervă',
        'Că renunța să publice în germană',
      ],
      explanation: 'De acolo ies tratatele din 1520 și ruptura. Radicalizarea a venit din chiar procesul disputei, nu era în tezele de la început.',
    },
    {
      question: 'De ce a prins Luther acolo unde Hus dăduse greș cu un secol înainte?',
      options: [
        'Fiindcă avea sprijin militar otoman',
        'Fiindcă papalitatea își pierduse toată autoritatea după schismă',
        'Fiindcă a scris în germană, scurt și ieftin: în jur de o treime din tot ce s-a tipărit în germană între 1518 și 1525 a ieșit de sub pana lui',
        'Fiindcă tezele lui erau teologic mai domoale',
      ],
      explanation: 'La asta s-au adăugat fărâmițarea politică a Imperiului, nemulțumirile fiscale ale principilor și o tradiție orășenească de autoguvernare comunală.',
    },
    {
      question: 'Ce stimulent bănesc aveau principii germani ca să sprijine Reforma?',
      options: [
        'Monopolul comerțului baltic',
        'Secularizarea averilor bisericești din teritoriile lor și scurtarea jurisdicției și a fiscalității romane',
        'Subvențiile lui Carol al V-lea pentru teritoriile reformate',
        'Scutirea de a lua parte la apărarea împotriva turcilor',
      ],
      explanation: 'Frederic cel Înțelept l-a ocrotit pe Luther fără să îi împărtășească pe de-a-ntregul tezele. Carol al V-lea, care voia într-adevăr să îl înăbușe, a fost ocupat cu Franța și cu înaintarea otomană.',
    },
    {
      question: 'Ce cereau Cele Douăsprezece Articole de la Memmingen, din 1525?',
      options: [
        'Restaurarea împăratului ca unică autoritate religioasă',
        'Izgonirea evreilor din teritoriile imperiale',
        'Desființarea breslelor orășenești',
        'Alegerea preotului paroh, desființarea dijmei mici, desființarea iobăgiei fiindcă Hristos i-a răscumpărat pe toți, și întoarcerea pădurilor și a apelor comunale',
      ],
      explanation: 'Argumentau cu citate biblice. Este unul dintre primele texte europene care formulează drepturi colective și s-a tipărit în vreo douăzeci și cinci de ediții în două luni.',
    },
    {
      question: 'Ce urmare a avut războiul țărănesc pentru drumul Reformei?',
      options: [
        'A întărit calea comunală ca model stăpânitor',
        'A încetat să mai fie o mișcare comunală și a devenit treaba principilor și a dregătorilor, cu autoritatea civilă în fruntea bisericii teritoriale',
        'A adus împăcarea cu Roma',
        'L-a dus pe Luther să sprijine desființarea iobăgiei',
      ],
      explanation: 'Luther a chemat la represiune fără milă, în *Împotriva cetelor tâlhărești*. Represiunea a pricinuit între șaptezeci de mii și o sută de mii de morți.',
    },
    {
      question: 'De ce este însemnat colocviul de la Marburg, din 1529?',
      options: [
        'Fiindcă i-a unit pe luterani și pe catolici',
        'Fiindcă Luther și Zwingli s-au înțeles asupra a paisprezece din cincisprezece articole și s-au despărțit din pricina euharistiei: Reforma s-a născut fără putința de a se uni',
        'Fiindcă a stabilit pacea religioasă în Imperiu',
        'Fiindcă a osândit formal anabaptismul',
      ],
      explanation: 'Dacă Scriptura este singura autoritate, nu există o instanță care să tranșeze citirile deosebite. Fărâmițarea este de structură, nu întâmplătoare.',
    },
    {
      question: 'Ce a făcut din calvinism protestantismul cel mai ușor de exportat?',
      options: [
        'Alianța lui neîntreruptă cu monarhiile',
        'Respingerea oricărei organizări bisericești',
        'Un sistem teologic întreg și o structură de sinoade și consistorii în stare să funcționeze fără principe și chiar împotriva lui',
        'Toleranța lui față de alte confesiuni',
      ],
      explanation: 'Această autonomie de organizare explică rolul lui în războaiele civile franceze și în răscoala olandeză. Execuția lui Servet, în 1553, arată că toleranța nu era în program.',
    },
    {
      question: 'Ce a caracterizat ruptura engleză din 1534?',
      options: [
        'A fost mai întâi de jurisdicție și dinastică decât teologică, iar desființarea mănăstirilor a creat un grup cu interes bănesc ca ruptura să nu fie întoarsă',
        'A fost o reformă de doctrină calvinistă chiar de la început',
        'A impus-o Parlamentul împotriva voinței regelui',
        'S-a petrecut după un război civil religios',
      ],
      explanation: 'Cuprinsul de doctrină a venit cu Eduard al VI-lea, a fost întors cu Maria I și s-a statornicit în 1559 într-o formulă anume de neclară.',
    },
    {
      question: 'Ce deosebire a propus Hubert Jedin, în 1946?',
      options: [
        'Între reforma germană și reforma elvețiană',
        'Între o reformă catolică cu pornire dinăuntru, dinainte de 1517, și o contrareformă de luptă împotriva protestantismului',
        'Între Trento și Vatican I',
        'Între religiozitatea populară și cea a elitelor',
      ],
      explanation: 'Deosebirea s-a impus, cu avertismentul că cele două procese se împletesc și că despărțirea lor este un mijloc de gândire.',
    },
    {
      question: 'Pe lângă închiderea doctrinei, ce noutate de disciplină a adus Trento?',
      options: [
        'Alegerea episcopilor de către credincioși',
        'Desființarea ordinelor religioase',
        'Reședința obligatorie a episcopilor, seminarii pentru pregătirea clerului și înregistrarea sistematică a botezurilor și a căsătoriilor',
        'Traducerea oficială a Bibliei în limbile de rând',
      ],
      explanation: 'Acest aparat administrativ este la fel de propriu perioadei ca și disputa de doctrină și se potrivește cu teza confesionalizării.',
    },
    {
      question: 'Ce a stabilit pacea de la Augsburg din 1555 și care i-a fost cusurul?',
      options: [
        'Libertate individuală de conștiință; a dat greș din lipsă de aplicare',
        'Că fiecare principe fixa confesiunea teritoriului lui, dar recunoștea numai catolicismul și luteranismul, lăsând pe dinafară calvinismul, care continua să crească',
        'Unificarea religioasă a Imperiului sub catolicism',
        'Desființarea principatelor bisericești',
      ],
      explanation: 'A fost un armistițiu cu data de expirare pusă chiar în el. Westfalia avea să adauge calvinismul, în 1648.',
    },
    {
      question: 'Ce arată că Războiul de Treizeci de Ani a încetat să mai fie un conflict confesional?',
      options: [
        'Că papa l-a osândit de la început',
        'Că armatele erau alcătuite din mercenari',
        'Că Franța catolică a finanțat și apoi a luptat alături de principii protestanți împotriva Habsburgilor',
        'Că s-a sfârșit fără tratat de pace',
      ],
      explanation: 'A ajuns un război european de întâietate. Imperiul a pierdut în jur de douăzeci la sută din populație, cu regiuni trecând de cincizeci.',
    },
    {
      question: 'De ce este un mit că Westfalia ar fi întemeiat suveranitatea statală modernă?',
      options: [
        'Fiindcă tratatele nu au ajuns să fie semnate',
        'Fiindcă au luat parte doar puteri protestante',
        'Fiindcă Osiander a arătat în 2001 că acea citire este o construcție a secolului al XIX-lea: tratatele nu cuprind nicio doctrină a suveranității sau a neamestecului',
        'Fiindcă suveranitatea era deja definită la Augsburg',
      ],
      explanation: 'Ce a consfințit într-adevăr Westfalia a fost obiceiul de a rezolva conflictele europene prin congrese cu multe părți.',
    },
    {
      question: 'Ce obiecție au adus Becker și Woessmann tezei lui Weber?',
      options: [
        'Că economia capitalistă e dinainte de Reformă',
        'Că avantajul economic protestant dispare când se ține seama de alfabetizare: ce a fost hotărâtor a fost citirea Bibliei, nu o etică anume',
        'Că Weber nu a studiat niciodată date germane',
        'Că calvinismul interzicea împrumutul cu dobândă',
      ],
      explanation: 'Au măsurat depărtarea fiecărui ținut prusac de Wittenberg. Legătura dintre confesiune și dezvoltare rămâne; mecanismul se schimbă.',
    },
  ],
}
