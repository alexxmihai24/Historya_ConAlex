import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/crisis-siglo-xiv.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 15 date, 14 concepte, 3 dezbateri, 16 surse, un
   document comentat, 3 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const crisisSigloXivRo: TopicTranslation = {
  title: 'Ciuma neagră și criza de la sfârșitul Evului Mediu',
  description: 'Foamete, ciumă, război și schismă: ce s-a prăbușit, ce a ieșit mai puternic și cine a câștigat din asta.',
  years: 'c. 1300–1450',
  summary:
    'Secolul al XIV-lea european este de obicei povestit ca o catastrofă: foamete, ciumă, Războiul de o Sută de Ani și schisma Bisericii. Descrierea este exactă și, totodată, neîndestulătoare. Mortalitatea a avut o mărime fără seamăn în istoria europeană — între o treime și jumătate din populație în patru ani —, dar ce îl interesează pe istoric este ce s-a întâmplat după, iar acolo rezultatul nu a fost la fel peste tot: aceleași fapte au produs sfârșitul iobăgiei la vest de Elba și reintroducerea ei la est, salarii reale foarte mari în Anglia și o represiune senioriale biruitoare în Polonia. Învățătura perioadei este că un șoc din afară nu hotărăște de unul singur deznodământul: îl hotărăște raportul de forțe peste care cade.',
  keyDates: [
    { date: '1315–1317', event: 'Marea foamete din nordul Europei, după mai mulți ani de ploi pustiitoare.' },
    { date: '1337', event: 'Începe Războiul de o Sută de Ani dintre Franța și Anglia.' },
    { date: '1347', event: 'Ciuma ajunge la Messina, venind de la Marea Neagră.' },
    { date: '1348–1351', event: 'Primul val prin toată Europa: moare între o treime și jumătate din populație.' },
    { date: '1348–1350', event: 'Pogromuri împotriva comunităților evreiești, acuzate de otrăvirea fântânilor; Clement al VI-lea le osândește printr-o bulă.' },
    { date: '1349–1351', event: 'Ordonanța și Statutul Muncitorilor din Anglia: se încearcă înghețarea salariilor prin lege.' },
    { date: '1358', event: 'Jacquerie în nordul Franței.' },
    { date: '1378', event: 'Răscoala Ciompilor la Florența; începe Marea Schismă a Apusului.' },
    { date: '1381', event: 'Răscoala țărănească engleză; Wat Tyler moare în fața regelui, la Smithfield.' },
    { date: '1415', event: 'Jan Hus este ars pe rug la Konstanz, în ciuda salvconductului imperial.' },
    { date: '1414–1418', event: 'Conciliul de la Konstanz: conciliarismul închide schisma.' },
    { date: '1419–1434', event: 'Războaiele husite din Boemia.' },
    { date: '1453', event: 'Sfârșitul Războiului de o Sută de Ani și căderea Constantinopolului.' },
    { date: '1486', event: 'Sentința de la Guadalupe: sfârșitul iobăgiei remensa în Catalonia.' },
    { date: '2011', event: 'Secvențierea ADN-ului vechi confirmă *Yersinia pestis* la victimele din Londra.' },
  ],
  sections: [
    {
      title: 'Înainte de ciumă: o creștere care se istovise',
      body: [
        'Ciuma nu a ajuns la o Europă înfloritoare. A ajuns la o Europă care de o jumătate de secol se lovea de propriile hotare. Pe la 1270, desțelenirea ajunsese la pământuri de margine, cu rod mic, moștenirile fărâmițau gospodăriile până le făceau neputincioase, raportul dintre populație și suprafața de arat se înrăutățea, iar prețul real al grâului urca.',
        'Marea foamete din 1315-1317 a fost cea dintâi înștiințare serioasă. Mai mulți ani la rând de ploi neobișnuite au distrus recoltele și secerișul în tot nordul Europei; estimările de mortalitate pentru orașe precum Ypres se apropie de zece sau cincisprezece la sută din populație, în câteva luni. La asta s-a adăugat o epizootie a vitelor, pe la 1319-1320, care a secerat animalele de tracțiune și de lapte, cu urmări îndelungate asupra putinței de a ara.',
        'Citirea clasică a acestei istoviri este neomalthusiană. Michael Postan a susținut că populația trecuse peste capacitatea de hrănire a agriculturii de la îndemână și că îndreptarea demografică era, în acest sens, de neocolit. Emmanuel Le Roy Ladurie a descris ciclul agrar al Vechiului Regim ca pe o respirație lungă, de creștere și de prăbușire.',
        'Robert Brenner a deschis în 1976 cearta care a rânduit din nou dezbaterea. Obiecția lui este că modelul demografic descrie presiunea, dar nu explică deznodămintele: dacă populația și pământul ar fi singurele mărimi, regiuni cu aceeași demografie ar fi trebuit să sfârșească la fel, și nu au sfârșit. Ce a fost hotărâtor, a susținut el, a fost raportul de forțe dintre seniori și țărani și puterea acestora de a se organiza, împreună cu structura puterii politice din fiecare teritoriu. Discuția, publicată mai apoi drept „dezbaterea Brenner”, rămâne cadrul prin care trece orice explicare a perioadei.',
        'O a treia cale, cea a modelului comercial, subliniază că pe la 1300 o bună parte a economiei europene era deja legată de piețe: țăranii vindeau și cumpărau, se îndatorau și se specializau, așa încât soarta lor atârna deopotrivă de prețuri și de recoltă. Iar Bruce Campbell a readus, cu date climatice și epidemiologice, un factor de mediu: răcirea secolului al XIV-lea și schimbările ecologice care au înlesnit răspândirea bolii.',
      ].join('\n\n'),
    },
    {
      title: 'Ciuma neagră: ce a fost, cât a ucis',
      body: [
        'Epidemia a intrat prin Mediterana în 1347, venind de la Marea Neagră și purtată de drumurile comerciale genoveze; povestea asediului de la Caffa, unde asediatorii ar fi catapultat cadavre bolnave, vine dintr-o singură sursă și este citată mai mult decât îngăduie încrederea în ea. De la Messina și Genova a înaintat prin Italia și sudul Franței în 1348, a ajuns în peninsula iberică, în Anglia și în Imperiu chiar în acel an, și în nordul continentului în 1349-1351.',
        'Cifrele au fost îndreptate în sus. Decenii la rând s-a repetat că a murit o treime din populație, urmând estimări vechi; cercetarea sistematică a registrelor senioriale, a recensămintelor fiscale și a seriilor de înlocuiri de beneficii bisericești a dus la a se vorbi astăzi de între patruzeci și șaizeci la sută în primul val, cu deosebiri regionale uriașe. Și nu a fost un singur episod: revenirile din 1361, 1374 și cele următoare au împiedicat refacerea demografică mai bine de un secol. Europa nu s-a întors la nivelurile de populație din 1300 decât în secolul al XVI-lea.',
        'Despre firea bolii a fost o ceartă lungă. Graham Twigg în 1984 și, mai ales, Samuel Cohn în 2002 au argumentat că simptomele descrise de cronicari, iuțeala răspândirii și sezonalitatea nu se potriveau cu ciuma bubonică purtată de puricii de șobolan și au propus un alt agent. Discuția s-a închis pe cale materială: în 2011, secvențierea ADN-ului vechi, scos din scheletele cimitirului East Smithfield, din Londra, a identificat *Yersinia pestis* și i-a reconstituit genomul. Este unul dintre cele mai limpezi cazuri ale unei dezbateri istorice rezolvate prin dovezi biologice.',
        'Ce rămâne deschis este mecanismul de transmitere. Obiecția lui Cohn despre iuțeală își păstrează greutatea, iar mai multe modele recente susțin că răspândirea se explică mai bine prin ectoparaziți omenești — purici și păduchi — și prin molipsire directă în forma pneumonică decât prin ciclul clasic șobolan-purice-om. Agentul este identificat; ecologia lui nu, cu totul.',
        'Nici mortalitatea nu a fost oarbă. Studiile pe rămășițele osoase arată că a lovit mai mult pe cei care duceau deja lipsuri de hrană sau boală dinainte, adică pe săraci, ceea ce se potrivește cu o populație slăbită de patru decenii de criză alimentară.',
      ].join('\n\n'),
      callout:
        'Discuția dacă ciuma neagră a fost într-adevăr ciumă bubonică a ținut treizeci de ani și s-a închis în 2011, cu secvențierea *Yersinia pestis* în schelete din Londra. O dezbatere istorică rezolvată de un laborator.',
    },
    {
      title: 'După: lipsă de brațe și reacție senioriale',
      body: [
        'Urmarea economică numaidecât ivită a fost o răsturnare cumplită a raportului dintre pământ și muncă. Cu populația scăzută la jumătate și pământul neatins, munca a devenit rară și scumpă, iar pământul mult și ieftin. Salariile reale au urcat puternic, rentele au scăzut, loturile mai proaste au fost părăsite și hrana s-a îmbunătățit: mai multă carne, mai multă bere, mai puțină pâine din cereale de rând. Unii istorici au vorbit despre o epocă de aur a muncii plătite, cu avertismentul limpede că a fost plătită cu moartea a jumătate din populație.',
        'Seniorii au răspuns încercând să înghețe prin lege ce le lua piața. În Anglia, Ordonanța din 1349 și Statutul Muncitorilor din 1351 au fixat salariile la nivelurile dinainte de ciumă, au interzis primirea unei plăți mai mari și au pedepsit părăsirea moșiei în căutarea unei plăți mai bune. Măsuri asemănătoare s-au luat în Castilia, în Franța și în orașele italiene. S-au aplicat cu izbândă inegală și au stârnit un conflict statornic între seniori și lucrători.',
        'De acolo au ieșit marile răscoale. Jacquerie din nordul Franței (1358) a izbucnit în plin război, cu nobilimea discreditată după înfrângerea de la Poitiers; Ciompii de la Florența (1378) au fost muncitori din textile, fără breaslă proprie, care au ajuns să ocupe guvernarea orașului șase săptămâni; răscoala engleză din 1381, pornită de un impozit pe cap de locuitor, i-a dus pe țărani la Londra cu un program ce cuprindea desființarea iobăgiei, și s-a sfârșit cu Wat Tyler mort în fața regelui. Remensa catalani au dus un conflict de decenii împotriva obiceiurilor rele senioriale, care s-a închis abia cu Sentința de la Guadalupe, din 1486, iar irmandiños galicieni au dărâmat cetăți în 1467.',
        'Aproape toate au fost zdrobite, și totuși rezultatul pe termen lung le-a fost prielnic în Europa apuseană. Iobăgia s-a destrămat în Anglia, în Franța și într-o bună parte a peninsulei de-a lungul secolelor al XIV-lea și al XV-lea, nu prin îngăduință, ci fiindcă a ține cu forța o mână de lucru rară costa scump și nu se putea aplica atunci când seniorul vecin oferea condiții mai bune.',
        'La est de Elba s-a întâmplat contrariul. Peste aceeași catastrofă demografică, nobilimea Prusiei, a Poloniei, a Boemiei și a Ungariei și-a întărit controlul: i-a legat pe țărani de pământ, a lărgit rezerva senioriale și a rânduit o producție de cereale pentru export spre Occident, pe Baltica. Este așa-numita a doua iobăgie, care avea să dăinuiască până în secolul al XIX-lea. Deosebirea dintre cele două jumătăți ale continentului, ieșită din același șoc, este argumentul central al lui Brenner: ce se deosebea nu era demografia, ci puterea de organizare țărănească, deasa așezare a comunităților rurale și existența sau nu a unei puteri politice în stare să arbitreze.',
      ].join('\n\n'),
      callout:
        'Aceeași prăbușire demografică a desființat iobăgia la vest de Elba și a reintrodus-o la est. Un șoc din afară nu fixează deznodământul: îl fixează raportul de forțe peste care cade.',
    },
    {
      title: 'Război, impozit și stat',
      body: [
        'Războiul de o Sută de Ani (1337-1453) nu a fost un război neîntrerupt, ci o înșiruire de campanii și de armistiții pentru succesiunea la tronul francez și pentru stăpânirile engleze de pe continent. Interesul lui istoric stă mai puțin în bătălii și mai mult în ce a silit să fie clădit.',
        'Finanțarea armatelor vreme de generații a cerut impozite obișnuite, iar impozitele obișnuite au cerut să fie negociate: Stările Generale franceze și Parlamentul englez au câștigat greutate tocmai ca organe ale încuviințării fiscale. În Anglia, regula după care nu există impozit fără aprobarea parlamentului s-a statornicit în această perioadă; în Franța, după criza de la mijlocul secolului, monarhia a izbutit să prefacă *taille* într-un impozit statornic, fără încuviințare periodică, ceea ce arată deja spre două drumuri politice diferite.',
        'S-a schimbat și războiul însuși. Arcul lung galez, la Crécy (1346) și la Azincourt (1415), infanteria cu sulițe, artileria cu praf de pușcă, ce la mijlocul secolului al XV-lea dărâma ziduri care rezistaseră secole, și mai ales trupele statornice, plătite de coroană, în locul oștirii feudale chemate din datorie de vasal. Cavalerul încetează să mai fie axul sistemului militar, iar odată cu el pierde greutate temeiul social al întâietății lui.',
        'Biserica a trecut prin propria ei criză de instituție. Mutarea curții papale la Avignon (1309-1377) a legat-o de sfera franceză și a înmulțit criticile la adresa fiscalității ei; Marea Schismă a Apusului, începută în 1378, a ajuns să pună față în față trei papi în același timp, cu ascultare împărțită pe regate. Ieșirea nu a venit de la papalitate, ci de la o teorie: conciliarismul, potrivit căruia un conciliu general reprezintă Biserica întreagă, iar autoritatea lui stă mai presus de cea a papei. Conciliul de la Konstanz (1414-1418) a închis schisma aplicând acest principiu, iar deși papalitatea l-a scos apoi din uz, episodul a lăsat formulată o doctrină a suveranității reprezentative, care avea să reapară în politica lumească.',
        'Konstanz a mai făcut și altceva: l-a ars pe Jan Hus, în 1415, în ciuda salvconductului imperial care îl ocrotea. Hus prelua tezele lui John Wyclif despre autoritatea Scripturii, critica bogăției bisericești și împărtășania sub cele două forme. Execuția lui a dezlănțuit războaiele husite din Boemia, unde armate țărănești au învins de mai multe ori cruciade imperiale, vreme de cincisprezece ani. Este cea dintâi mișcare de reformă religioasă care izbutește să reziste militar și să smulgă concesii, cu un secol înaintea lui Luther.',
      ].join('\n\n'),
    },
    {
      title: 'Cultura catastrofei și victimele ei',
      body: [
        'Răspunsul cultural a fost numaidecât și ușor de recunoscut. Dansul morții, pictat pe pereții mănăstirilor și ai cimitirelor, îi așază la rând pe papă, pe împărat, pe negustor și pe țăran, mânați de schelete: moartea ca lucru ce îi face pe toți egali este un motiv nou, răspândit odată cu epidemia. Manualele de *ars moriendi* învățau cum să mori bine, atunci când preotul putea să nu ajungă la timp. Procesiunile de flagelanți au străbătut continentul, oferind pocăință obștească drept leac, până când papalitatea le-a interzis, văzând că scapă de sub orice control bisericesc.',
        'Violența și-a căutat vinovați. Între 1348 și 1350 s-a răspândit acuzația că evreii otrăvesc fântânile, iar sute de comunități din Imperiu, din Franța și din Catalonia au fost atacate și nimicite; la Strasbourg, în februarie 1349, câteva sute de evrei au fost arși chiar înainte ca ciuma să ajungă în oraș. Clement al VI-lea a dat două bule prin care dezmințea acuzația și amintea că evreii mureau la fel ca și creștinii; au ajutat la puțin. Mulți supraviețuitori au emigrat spre estul Europei, o mutare care a redesenat harta iudaismului european pentru următoarele cinci secole.',
        'Johan Huizinga a citit acest ansamblu în 1919 ca amurgul Evului Mediu: o cultură încărcată peste măsură de simboluri, stăpânită de gândul morții și de ceremonial, cu neputință de a se mai înnoi. Imaginea este puternică și a îmbătrânit inegal, fiindcă aceeași perioadă a produs pictura în ulei flamandă, polifonia, caravela, ceasul mecanic public, contabilitatea desăvârșită și, pe la 1450, tiparul. Nu este o cultură istovită: este o cultură care lucrează sub presiune.',
        'Se cuvine, pe deasupra, să nu fie amestecată criza cu obârșia vânătorii de vrăjitoare. Marile procese sunt de mai târziu, mai ales din secolul al XVI-lea și al XVII-lea; ce aduce secolul al XIV-lea este statornicirea unei proceduri judiciare inchizitoriale și a unui repertoriu de categorii de oameni dați afară din obște, care vor fi aplicate mai apoi acelui fenomen.',
      ].join('\n\n'),
      callout:
        'La Strasbourg, în februarie 1349, comunitatea evreiască a fost arsă înainte ca ciuma să ajungă în oraș. Violența nu a fost un răspuns la molipsire: a venit înaintea ei.',
    },
    {
      title: 'Criză sau trecere?',
      body: [
        'Numele dat perioadei atârnă de explicația primită. Pentru tradiția neomalthusiană a fost o criză de subzistență, rezolvată prin mortalitate: o îndreptare dureroasă înăuntrul unui ciclu agrar care se repetă. Pentru istoriografia marxistă a fost o criză a modului de producție feudal — Guy Bois a vorbit despre criza feudalismului, iar Rodney Hilton a studiat răscoalele ca răspuns conștient al țăranilor —, adică faza de pe urmă a unui sistem care nu mai putea scoate surplus fără să își distrugă propria temelie. Pentru Brenner, niciuna dintre cele două: deznodămintele se explică prin raportul de forțe de clasă și prin structura puterii politice din fiecare regiune, și de aceea se deosebesc.',
        'Cele trei cadre au lăsat urmă. Astăzi se primește că a existat un plafon real de subzistență pe la 1300, că mortalitatea a schimbat din temelie prețurile relative ale pământului și ale muncii și că rezultatul de instituție a atârnat de mărimi politice locale. Cuvântul „criză” se folosește cu rezerve, fiindcă descrie trauma, dar nu și ieșirea.',
        'Iar ieșirea a fost, în mai multe privințe, o îmbunătățire pentru cei rămași în viață. Salariile reale atinse în nord-vestul Europei în secolul al XV-lea nu aveau să fie egalate din nou timp de secole; hrana s-a îmbunătățit; mișcarea oamenilor a crescut; țărănimea engleză și olandeză a rămas liberă din punct de vedere juridic. Robert Allen și alții au legat acele salarii mari de drumul economic de mai târziu al nord-vestului european, într-un argument care leagă secolul al XIV-lea de industrializare, mult mai târziu. Este o ipoteză discutată, nu un fapt statornicit, dar arată de ce perioada nu poate fi citită doar ca dezastru.',
        'Ce a dispărut cu adevărat a fost o lume de instituții. În 1300, Europa avea iobăgie răspândită peste tot, oștiri feudale, o papalitate necontestată și o economie fără stat fiscal. În 1450 avea armate plătite, impozite statornice, parlamente care le negociau, o papalitate care avusese nevoie de un conciliu ca să dăinuie și o jumătate a continentului fără iobagi, iar cealaltă jumătate legându-i din nou. Epoca Modernă începe cu această împărțire deja făcută.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Marea foamete', definition: 'Criză alimentară din 1315-1317, în nordul Europei, din pricina unor ploi pustiitoare. Cea dintâi înștiințare că expansiunea atinsese un plafon.' },
    { term: 'Plafon malthusian', definition: 'Limita de populație pe care o poate ține o agricultură dată. Explică presiunea de pe la 1300, nu deznodămintele de mai apoi.' },
    { term: '*Yersinia pestis*', definition: 'Bacteria pricinuitoare a ciumei, identificată în 2011 prin secvențierea ADN-ului vechi din victime ale Londrei.' },
    { term: 'Statutul Muncitorilor', definition: 'Lege engleză din 1351, care înghețase salariile la nivelurile dinainte de ciumă și pedepsea părăsirea moșiei pentru o plată mai bună.' },
    { term: 'Reacție senioriale', definition: 'Încercarea nobilimii de a recăpăta pe cale legală și silnică rentele pe care lipsa mâinii de lucru i le lua.' },
    { term: 'A doua iobăgie', definition: 'Reintroducerea iobăgiei la est de Elba, după ciumă, legată de exportul de cereale pe Baltica.' },
    { term: 'Remensa', definition: 'Țăran catalan supus obiceiurilor rele senioriale. Conflictul lui s-a închis cu Sentința de la Guadalupe, din 1486.' },
    { term: 'Jacquerie', definition: 'Răscoală țărănească din nordul Franței, din 1358, în plin război și cu nobilimea discreditată după Poitiers.' },
    { term: 'Ciompi', definition: 'Muncitori din textilele florentine, fără breaslă proprie. Au ocupat guvernarea orașului șase săptămâni, în 1378.' },
    { term: 'Marea Schismă a Apusului', definition: 'Împărțirea papalității din 1378 încoace, cu ascultare împărțită pe regate și cu până la trei papi în același timp.' },
    { term: 'Conciliarism', definition: 'Doctrină după care conciliul general reprezintă Biserica, iar autoritatea lui trece peste cea a papei. A închis schisma la Konstanz.' },
    { term: 'Dansul morții', definition: 'Motiv iconografic răspândit odată cu epidemia: moartea îi mână la rând, deopotrivă, pe papi, pe regi, pe negustori și pe țărani.' },
    { term: 'Ars moriendi', definition: 'Manuale pentru o moarte bună, folositoare atunci când preotul putea să nu ajungă la timp. Gen născut din mortalitatea în masă.' },
    { term: 'Criza feudalismului', definition: 'Citire marxistă a perioadei: faza de pe urmă a unui sistem incapabil să scoată surplus fără să își distrugă propria temelie.' },
  ],
  debates: [
    {
      question: 'A fost ciuma neagră cu adevărat ciumă bubonică?',
      positions: [
        {
          school: 'Un alt agent (Twigg, 1984; Cohn, 2002)',
          argument:
            'Simptomele descrise de cronicari, iuțeala răspândirii și sezonalitatea nu se potriveau cu ciuma bubonică purtată de puricii de șobolan. Trebuia să fie vorba de o altă boală, dispărută sau de nerecunoscut astăzi.',
        },
        {
          school: 'Confirmare prin ADN vechi (2011)',
          argument:
            'Secvențierea rămășițelor din cimitirul East Smithfield, din Londra, a identificat *Yersinia pestis* și i-a reconstituit genomul. Agentul este stabilit.',
        },
      ],
      state:
        'Dezbaterea despre identitatea agentului patogen este închisă. Rămâne deschis mecanismul de transmitere: obiecția despre iuțeală își păstrează greutatea, iar mai multe modele arată spre ectoparaziți omenești și spre molipsirea directă pe cale pneumonică, mai mult decât spre ciclul șobolan-purice.',
    },
    {
      question: 'De ce s-au despărțit estul și vestul Europei după ciumă?',
      positions: [
        {
          school: 'Model demografic (Postan, Le Roy Ladurie)',
          argument:
            'Populația trecuse peste capacitatea de hrănire a agriculturii. Mortalitatea a îndreptat raportul dintre pământ și muncă, iar de acolo au ieșit salarii mari și rente mici.',
        },
        {
          school: 'Raportul de forțe de clasă (Brenner, 1976)',
          argument:
            'Demografia era aceeași de o parte și de alta a Elbei, iar rezultatul a fost contrariul. Ce a fost hotărâtor a fost puterea de organizare a comunităților țărănești și structura puterii politice, în stare sau nu să arbitreze.',
        },
      ],
      state:
        '„Dezbaterea Brenner” rămâne cadrul de neocolit. Se primește plafonul demografic de pe la 1300 și se primește că nu ajunge ca să explice deznodămintele: mărimea politică este neapărat trebuincioasă.',
    },
    {
      question: 'Criză sau trecere?',
      positions: [
        {
          school: 'Criza feudalismului (Bois, Hilton)',
          argument:
            'Faza de pe urmă a unui mod de producție care nu mai putea scoate surplus fără să își ruineze temelia productivă. Răscoalele sunt răspunsul conștient al țăranilor la acea istovire.',
        },
        {
          school: 'Îndreptare ciclică (neomalthusieni)',
          argument:
            'Încă un episod din respirația lungă a ciclului agrar dinaintea industrializării: creștere până la plafonul de subzistență, îndreptare prin mortalitate, creștere nouă.',
        },
      ],
      state:
        '„Criză” se folosește cu rezerve: descrie trauma, dar nu și ieșirea. Pentru cei rămași în viață în nord-vestul european, bilanțul a fost salarii reale foarte mari, hrană mai bună și libertate juridică, iar unii leagă acel nivel salarial de drumul economic de mai apoi al regiunii.',
    },
  ],
  sources: [
    { author: 'Giovanni Boccaccio', title: 'Decameronul (introducere)', year: '1348-1353', kind: 'primaria', note: 'Descrierea ciumei la Florența și a ruperii legăturilor sociale și familiale.' },
    { author: 'Agnolo di Tura del Grasso', title: 'Cronica Sienei', year: 'c. 1350', kind: 'primaria', note: 'Mărturie directă: și-a îngropat cei cinci copii cu mâinile lui.' },
    { author: 'Clement al VI-lea', title: 'Bulele Quamvis perfidiam', year: '1348', kind: 'primaria', note: 'Dezmint acuzația de otrăvire a fântânilor și interzic atacurile asupra comunităților evreiești.' },
    { author: 'Coroana engleză', title: 'Ordonanța și Statutul Muncitorilor', year: '1349-1351', kind: 'primaria', note: 'Înghețau salariile și interziceau părăsirea moșiei pentru o plată mai bună.' },
    { author: 'Guy de Chauliac', title: 'Chirurgia magna', year: '1363', kind: 'primaria', note: 'Descrierea medicală a formelor bubonică și pneumonică, făcută de chirurgul papei de la Avignon.' },
    { author: 'Jean Froissart', title: 'Cronici', year: 's. XIV', kind: 'primaria', note: 'Povestire cavalerească a Războiului de o Sută de Ani și a Jacqueriei, din punctul de vedere al nobilimii.' },
    { author: 'Thomas Walsingham', title: 'Historia Anglicana', year: 'c. 1390', kind: 'primaria', note: 'Sursă de temelie, și potrivnică, despre răscoala engleză din 1381.' },
    { author: 'Ferdinand al II-lea al Aragonului', title: 'Sentința Arbitrală de la Guadalupe', year: '1486', kind: 'primaria', note: 'Desființarea obiceiurilor rele și a remensei în Catalonia, după decenii de conflict.' },
    { author: 'Michael M. Postan', title: 'The Medieval Economy and Society', year: '1972', kind: 'estudio', note: 'Formularea clasică a modelului demografic neomalthusian.' },
    { author: 'Rodney Hilton', title: 'Bond Men Made Free', year: '1973', kind: 'estudio', note: 'Răscoalele țărănești ca răspuns organizat, nu ca izbucnire fără noimă.' },
    { author: 'Guy Bois', title: 'Crise du féodalisme', year: '1976', kind: 'estudio', note: 'Criza modului de producție feudal, pornind de la cazul normand.' },
    { author: 'Robert Brenner și alții', title: 'Dezbaterea Brenner', year: '1976-1985', kind: 'estudio', note: 'Așază raportul de forțe de clasă și puterea politică în centrul explicației.' },
    { author: 'David Herlihy', title: 'The Black Death and the Transformation of the West', year: '1997', kind: 'estudio', note: 'Epidemia ca accelerator al schimbărilor de instituție și de tehnică.' },
    { author: 'Ole J. Benedictow', title: 'The Black Death 1346-1353', year: '2004', kind: 'estudio', note: 'Îndreptarea în sus a mortalității, pornind de la registre locale.' },
    { author: 'Kirsten Bos și alții', title: 'A draft genome of Yersinia pestis from victims of the Black Death', year: '2011', kind: 'estudio', note: 'Închide pe cale genetică dezbaterea despre identitatea agentului patogen.' },
    { author: 'Bruce M. S. Campbell', title: 'The Great Transition', year: '2016', kind: 'estudio', note: 'Adună clima, ecologia și epidemiologia în explicarea secolului al XIV-lea.' },
  ],
  documents: [
    {
      section: 1,
      title: 'Boccaccio descrie ciuma la Florența',
      text: [
        'Și era atât de mare mulțimea celor care mureau în fiecare zi și în fiecare loc, încât era o uimire să o auzi spusă și cu atât mai mult să o vezi.',
        'De aceea s-au născut aproape din nevoie, între cei care mai rămăseseră în viață, obiceiuri potrivnice celor de dinainte. Nu mai era femeie care să plângă mortul, nici vecini care să însoțească trupul.',
        'Și mulți mureau noaptea și mulți ziua, iar nimeni nu avea altă grijă decât să îi scoată din casă și să îi pună în fața ușii.',
      ].join('\n\n'),
      source: 'Giovanni Boccaccio, Decameronul, introducerea la prima zi. Scris pe la 1350.',
      note: 'Versiune proprie după italiană. Boccaccio a trăit epidemia la Florența.',
      question: 'Boccaccio nu descrie morți: descrie ruperea riturilor. De ce poate fi asta la fel de pustiitor pentru o societate ca mortalitatea însăși?',
    },
  ],
  images: [
    {
      alt: 'Pictură a unui peisaj pustiit, în care armate de schelete nimicesc bărbați și femei de orice stare',
      caption: 'Triumful morții, de Pieter Brueghel cel Bătrân (pe la 1562). Este mult de după ciuma neagră și îi păstrează amintirea.',
    },
    {
      alt: 'Gravură a unei figuri cu haină lungă, pălărie, mănuși, un baston în mână și o mască cu cioc lung de pasăre',
      caption: 'Medicul ciumei, gravură de Paul Fürst, pe la 1656. Este cu trei secole de după ciuma neagră: costumul cu cioc aparține secolului al XVII-lea, nu anului 1348.',
    },
    {
      alt: 'Miniatură medievală cu cavaleri înarmați năvălind asupra unor țărani neînarmați, lângă un pod',
      caption: 'Înăbușirea Jacqueriei la Meaux, 1358, într-un manuscris al lui Froissart. După ciumă, lipsa de brațe a făcut reacția senioriale mai aspră.',
    },
    {
      alt: 'Miniatură a două armate față în față: de o parte arbaletieri, de cealaltă arcași cu arcuri lungi, printre steaguri',
      caption: 'Crécy, 1346, după Froissart. Arcul lung englez împotriva arbaletei genoveze: războiul lung silește la fiscalitate statornică, iar acea fiscalitate clădește statul.',
    },
  ],
  questions: [
    {
      question: 'În ce stare era Europa când a ajuns ciuma, în 1347?',
      options: [
        'În plin avânt demografic, cu prisosuri adunate',
        'Cu creșterea istovită de o jumătate de secol: pământuri de margine, gospodării fărâmițate și prețul grâului urcând',
        'De curând refăcută după un război general european',
        'Cu populația la cel mai scăzut nivel din istorie',
      ],
      explanation: 'Foametea din 1315-1317 și epizootia vitelor din 1319-1320 lăsaseră populația slăbită înainte de epidemie.',
    },
    {
      question: 'Care este obiecția de temelie a lui Brenner la modelul demografic?',
      options: [
        'Că populația nu a crescut cu adevărat înainte de 1300',
        'Că ciuma nu a avut urmări economice de luat în seamă',
        'Că descrie presiunea, dar nu explică deznodămintele: aceeași demografie a produs rezultate contrare de o parte și de alta a Elbei',
        'Că registrele senioriale nu sunt de încredere',
      ],
      explanation: 'Pentru Brenner, ce a fost hotărâtor a fost raportul de forțe dintre seniori și țărani și structura puterii politice din fiecare regiune.',
    },
    {
      question: 'Ce mortalitate socotește astăzi cercetarea pentru primul val de ciumă?',
      options: [
        'În jur de zece la sută',
        'Exact o treime din populația europeană',
        'Între patruzeci și șaizeci la sută, cu deosebiri regionale mari',
        'Peste optzeci la sută în toată Europa',
      ],
      explanation: 'Cifra tradițională de o treime a fost îndreptată în sus prin registre senioriale, recensăminte fiscale și serii de înlocuiri de beneficii bisericești.',
    },
    {
      question: 'Cum s-a închis cearta despre identitatea bolii?',
      options: [
        'Cu găsirea unor cronicari italieni noi',
        'Cu secvențierea ADN-ului vechi, în 2011, care a identificat *Yersinia pestis* în schelete din Londra',
        'Cu analiza statistică a testamentelor florentine',
        'Nu s-a închis: agentul rămâne necunoscut',
      ],
      explanation: 'Este unul dintre cele mai limpezi cazuri ale unei dezbateri istorice rezolvate prin dovezi biologice. Ce rămâne deschis este mecanismul de transmitere.',
    },
    {
      question: 'Ce parte din obiecția lui Cohn își păstrează valabilitatea?',
      options: [
        'Că agentul nu era o bacterie',
        'Că mortalitatea a fost mult mai mică decât s-a socotit',
        'Că iuțeala răspândirii se potrivește prost cu ciclul șobolan-purice: astăzi se arată spre ectoparaziți omenești și spre forma pneumonică',
        'Că epidemia nu a ajuns în nordul Europei',
      ],
      explanation: 'Agentul este identificat; ecologia lui de transmitere, nu cu totul.',
    },
    {
      question: 'Ce efect economic numaidecât a avut mortalitatea în masă?',
      options: [
        'Munca a devenit rară și scumpă, iar pământul mult și ieftin: au urcat salariile reale și au scăzut rentele',
        'Au urcat deodată rentele și salariile',
        'Prețul muncii s-a prăbușit din pricina prea multei oferte',
        'Nu au fost urmări de luat în seamă până în secolul al XVI-lea',
      ],
      explanation: 'S-a îmbunătățit chiar și hrana: mai multă carne și bere și mai puțină pâine din cereale de rând, pentru cei rămași în viață.',
    },
    {
      question: 'Ce urmărea Statutul Muncitorilor englez din 1351?',
      options: [
        'Împărțirea pământurilor părăsite între țărani',
        'Înghețarea salariilor la nivelurile dinainte de ciumă și pedepsirea părăsirii moșiei pentru o plată mai bună',
        'Desființarea iobăgiei, ca să atragă mână de lucru',
        'Finanțarea Războiului de o Sută de Ani printr-un impozit nou',
      ],
      explanation: 'A fost răspunsul senioriale la ce le lua piața muncii. S-a aplicat cu izbândă inegală și a stârnit conflict statornic.',
    },
    {
      question: 'Cine au fost Ciompii?',
      options: [
        'Mercenarii companiilor albe din Italia',
        'Flagelanții care au străbătut Imperiul în 1349',
        'Muncitori din textilele florentine, fără breaslă proprie, care au ocupat guvernarea orașului șase săptămâni, în 1378',
        'Țăranii catalani supuși obiceiurilor rele senioriale',
      ],
      explanation: 'Răscoala lor arată că neînțelegerea nu a fost doar la sate: i-a pus față în față și pe meseriașii mărunți cu patriciatul orășenesc.',
    },
    {
      question: 'Deși aproape toate răscoalele au fost zdrobite, de ce a dispărut iobăgia în Europa apuseană?',
      options: [
        'Fiindcă regii au desființat-o printr-un decret general',
        'Fiindcă a ține cu forța o mână de lucru rară costa scump și nu se putea aplica atunci când seniorul vecin oferea condiții mai bune',
        'Fiindcă Biserica a declarat-o păcat, la Konstanz',
        'Fiindcă țăranii și-au cumpărat libertatea cu aur american',
      ],
      explanation: 'Rezultatul pe termen lung i-a favorizat pe țăranii apuseni prin presiunea pieței, nu prin îngăduință politică.',
    },
    {
      question: 'Ce a fost „a doua iobăgie”?',
      options: [
        'Întoarcerea sclaviei casnice în orașele italiene',
        'Înăsprirea iobăgiei în Franța, în timpul Războiului de o Sută de Ani',
        'Reintroducerea iobăgiei la est de Elba, legată de exportul de cereale pe Baltica',
        'Un impozit personal aplicat foștilor iobagi eliberați',
      ],
      explanation: 'Peste aceeași catastrofă demografică, nobilimea Prusiei, a Poloniei, a Boemiei și a Ungariei și-a întărit controlul. A ținut până în secolul al XIX-lea.',
    },
    {
      question: 'Ce urmare de instituție a avut finanțarea Războiului de o Sută de Ani?',
      options: [
        'Dispariția parlamentelor, înlocuite de consilii regale',
        'Impozite obișnuite care au trebuit negociate, ceea ce a dat greutate Parlamentului englez și Stărilor Generale franceze',
        'Desființarea nobilimii ca stare fiscală',
        'Crearea unei bănci centrale în ambele regate',
      ],
      explanation: 'În Anglia s-a statornicit regula după care nu există impozit fără aprobarea parlamentului; în Franța, *taille* a ajuns statornică, fără încuviințare periodică.',
    },
    {
      question: 'Ce schimbare militară a slăbit întâietatea socială a cavalerului?',
      options: [
        'Interzicerea bisericească a turnirurilor',
        'Înlocuirea cavaleriei cu marina de război',
        'Arcul lung, sulițele, artileria cu praf de pușcă și, mai ales, trupele statornice, plătite de coroană',
        'Scumpirea fierului după ciumă',
      ],
      explanation: 'Oștirea chemată din datorie de vasal lasă loc armatei tocmite, iar odată cu ea își pierde temelia rostul social al nobilimii militare.',
    },
    {
      question: 'Ce doctrină a îngăduit închiderea Marii Schisme a Apusului, la Konstanz?',
      options: [
        'Conciliarismul: conciliul general reprezintă Biserica, iar autoritatea lui trece peste cea a papei',
        'Infailibilitatea papală',
        'Regalismul monarhiilor naționale',
        'Teoria celor două săbii a lui Bonifaciu al VIII-lea',
      ],
      explanation: 'Papalitatea a scos apoi din uz doctrina, dar episodul a lăsat formulată o idee de suveranitate reprezentativă, care avea să reapară în politica lumească.',
    },
    {
      question: 'De ce este de seamă mișcarea husită?',
      options: [
        'Fiindcă a restabilit unitatea Bisericii',
        'Fiindcă a fost cea dintâi mișcare de reformă religioasă care a rezistat militar și a smuls concesii, cu un secol înaintea lui Luther',
        'Fiindcă a adus luteranismul în Boemia',
        'Fiindcă a pus capăt Războiului de o Sută de Ani',
      ],
      explanation: 'Execuția lui Hus, în 1415, în ciuda salvconductului imperial, a dezlănțuit cincisprezece ani de războaie în care armate țărănești au învins cruciade imperiale.',
    },
    {
      question: 'Ce dovedește cazul de la Strasbourg, din februarie 1349?',
      options: [
        'Că Biserica a îndemnat pogromurile de la Avignon',
        'Că a fost arsă comunitatea evreiască înainte ca ciuma să ajungă în oraș: violența a venit înaintea molipsirii',
        'Că pogromurile s-au petrecut numai unde mortalitatea a fost mai mare',
        'Că acuzațiile de otrăvire au fost dovedite judecătorește',
      ],
      explanation: 'Clement al VI-lea a dat bule prin care dezmințea acuzația de otrăvire a fântânilor. Mulți supraviețuitori au emigrat spre estul Europei și au redesenat harta iudaismului european.',
    },
    {
      question: 'De ce se folosește astăzi cu rezerve cuvântul „criză” pentru această perioadă?',
      options: [
        'Fiindcă mortalitatea a fost mult mai mică decât se credea',
        'Fiindcă nu au fost războaie de luat în seamă',
        'Fiindcă descrie trauma, dar nu și ieșirea: cei rămași în viață în nord-vestul european au atins salarii reale, hrană și libertate juridică fără seamăn',
        'Fiindcă termenul este un anacronism din secolul XX, fără folosire academică',
      ],
      explanation: 'Același secol a produs pictura în ulei, caravela, ceasul mecanic public și, pe la 1450, tiparul. Nu este o cultură istovită: este o cultură sub presiune.',
    },
  ],
}
