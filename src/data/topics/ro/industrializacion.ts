import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/industrializacion.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 12 date, 14 concepte, 3 dezbateri, 23 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const industrializacionRo: TopicTranslation = {
  title: 'Revoluția industrială',
  description: 'De ce a început pe o insulă din Atlanticul de Nord, cât a costat să o trăiești și când a început cu adevărat să se simtă în buzunar.',
  years: '1760–1914',
  summary:
    'Mii de ani, producția pe cap de om a crescut atât de încet, încât nicio generație nu băga de seamă deosebirea. Din vreun moment aflat între 1760 și 1830, într-o parte a nord-vestului Europei, lucrurile au încetat să mai stea așa: energia fosilă a luat locul mușchiului, fabrica a luat locul atelierului de acasă, iar creșterea a devenit cumulativă. Cuvântul revoluție înșală, fiindcă cifrele de ansamblu cresc încet, iar o bună parte a țării a rămas agrară zeci de ani. Dar schimbarea de structură a fost radicală, iar întrebarea care rânduiește azi cercetarea nu este cum s-a petrecut, lucru bine documentat, ci de ce s-a petrecut acolo și atunci, când China, India sau Țările de Jos aveau piețe, tehnică și capital asemănătoare.',
  keyDates: [
    { date: '1709', event: 'Abraham Darby topește fier cu cocs la Coalbrookdale și scapă siderurgia de mangal.' },
    { date: '1712', event: 'Mașina atmosferică a lui Newcomen scoate apa din minele de cărbune.' },
    { date: '1764–1779', event: 'Spinning jenny, water frame și mule înmulțesc productivitatea torsului bumbacului.' },
    { date: '1776', event: 'Watt pune în vânzare mașina cu condensator separat; Smith publică *Avuția națiunilor*.' },
    { date: '1784', event: 'Cort patentează pudlarea și laminarea: fier moale în cantitate industrială.' },
    { date: '1811–1816', event: 'Mișcarea ludistă din nordul Angliei; Parlamentul pedepsește cu moartea spargerea mașinilor.' },
    { date: '1825–1830', event: 'Stockton-Darlington și Liverpool-Manchester deschid calea ferată cu abur.' },
    { date: '1832–1833', event: 'Comisia Sadler și prima Factory Act, cu inspectori care să o pună în aplicare.' },
    { date: '1842', event: 'Raportul Chadwick despre condițiile sanitare și Mines Act împotriva muncii în subteran a femeilor și a copiilor.' },
    { date: '1845', event: 'Engels publică *Situația clasei muncitoare din Anglia*.' },
    { date: '1851', event: 'Marea Expoziție de la Londra: Regatul Unit produce în jur de jumătate din fierul lumii.' },
    { date: '1870–1914', event: 'A doua revoluție industrială: oțel, chimie, electricitate și motor cu explozie, cu Germania și Statele Unite în frunte.' },
  ],
  sections: [
    {
      title: 'De ce acolo și de ce atunci?',
      body: [
        'Întrebarea are rost fiindcă în 1700 avantajul european nu era limpede. Kenneth Pomeranz a arătat în 2000 că regiunile cele mai înaintate ale Chinei, precum delta Yangzi, aveau niveluri de trai, speranță de viață, piețe de pământ și de muncă și rafinament comercial asemănătoare cu cele din Anglia. Explicația lui pentru marea divergență este dublă și ține de întâmplare: cărbunele britanic era aproape de suprafață și de centrele de consum, iar coloniile americane au adus ceea ce el numește pogoane fantomă, pământuri care dădeau bumbac, zahăr și lemn fără să consume sol european.',
        'Robert Allen a oferit în 2009 o explicație economică mai precisă. Marea Britanie era o economie cu salarii mari și energie ieftină: plata unui muncitor costa mult, iar arderea cărbunelui costa puțin, așa încât mașinile care înlocuiau munca prin energie erau rentabile acolo, dar nu și în Franța, în India sau în China, unde mâna de lucru era ieftină. Spinning jenny s-a răspândit în Lancashire și nu în Bengal fiindcă socoteala economică era alta, nu fiindcă ar fi lipsit iscusința.',
        'Joel Mokyr subliniază un al treilea factor: Iluminismul industrial. În Marea Britanie exista o cultură a cunoașterii folositoare, care lega filozofi ai naturii, ingineri și meșteri prin societăți precum Lunar Society, prin publicații ieftine, prin patente și printr-o atitudine prielnică îmbunătățirii practice. Fără acea circulație nu se explică de ce mașinile s-au desăvârșit cumulativ vreme de un secol.',
        'La asta se adaugă argumentul instituțional al lui Douglass North și Barry Weingast: după 1688, angajamentul credibil al Parlamentului privind impozitele și datoria, împreună cu siguranța proprietății, a micșorat riscul investiției pe termen lung. I se obiectează că multe dintre instituțiile pomenite existau și înainte, sau și în alte părți.',
        'Istoriografia de azi îmbină cei patru factori în loc să aleagă unul: resurse și geografie, prețuri relative, cultură tehnică și instituții. Și mai adaugă unul, al cincilea, mai incomod, despre care se va vorbi la sfârșit: economia atlantică a zahărului, a bumbacului și a sclaviei.',
      ].join('\n\n'),
      callout:
        'Allen: mecanizarea a fost primită acolo unde munca era scumpă și energia ieftină. Spinning jenny era rentabilă în Lancashire și ruinătoare în Bengal.',
    },
    {
      title: 'Mașinile și ritmurile lor',
      body: [
        'Bumbacul a fost ramura-pilot fiindcă pornea aproape de la zero, nu avea bresle care să îl ocrotească, iar materia lui primă venea din Atlantic. Suveica zburătoare a grăbit țesutul și a creat un gât de sticlă la tors; l-au rezolvat jenny a lui Hargreaves, potrivită muncii de acasă, water frame a lui Arkwright, care cerea energie hidraulică și, prin urmare, clădire, program și supraveghere, și mule a lui Crompton, care îmbina finețea cu rezistența. Fabrica se naște din mașina care nu încape într-o casă.',
        'Energia a mers pe drumul ei. Mașina atmosferică a lui Newcomen, din 1712, era neeconomică, dar folosea la scoaterea apei chiar la gura minei, unde cărbunele nu costa nimic. Condensatorul separat al lui Watt, patentat în 1769 și pus în vânzare din 1776, a micșorat consumul destul cât să scoată aburul din mină și să îl ducă în fabrică; mișcarea de rotație a făcut restul. Presiunea înaltă, deja în secolul al XIX-lea, a îngăduit transportul.',
        'Siderurgia s-a scăpat de pădure prin cocsul lui Darby și și-a înmulțit producția prin pudlarea și laminarea lui Cort, care dădeau fier moale în cantitate. Cu fier ieftin și abur de înaltă presiune a venit calea ferată: Stockton-Darlington în 1825, Liverpool-Manchester în 1830, iar de acolo o febră a investițiilor care a reorganizat piețe, fusuri orare și finanțe.',
        'Se cuvine măsurată viteza reală. Nicholas Crafts și Knick Harley au recalculat seriile și au găsit o creștere a producției pe locuitor de vreun unu la sută pe an, între 1780 și 1830. Este transformator la scara unui secol și modest la scara unui deceniu. În 1830, cei mai mulți muncitori britanici nu erau în fabrici mecanizate, ci în agricultură, în slujbe casnice și în ateliere meșteșugărești.',
        'De aici consensul de azi: revoluție în structură, gradualism în cifrele de ansamblu. S-a schimbat ce se producea, unde, cu ce energie și sub ce disciplină, cu mult înainte ca cifrele produsului național să se schimbe în chip izbitor.',
      ].join('\n\n'),
    },
    {
      title: 'Fabrica, ceasul și împotrivirea',
      body: [
        'Edward P. Thompson a descris în 1967 prefacerea cea mai adâncă și cea mai puțin văzută: trecerea de la o rânduială după sarcini, proprie muncii agrare și meșteșugărești, la o disciplină a timpului măsurat. În fabrică se plătește la oră, se amendează întârzierea, se interzice Sfânta Luni și se potrivesc sute de oameni după un ceas pe care adesea îl ține patronul. Școala, predica și manualul de bună purtare au învățat această nouă legătură cu timpul.',
        'Munca copiilor nu a fost inventată de fabrică; fabrica a făcut-o vizibilă, a strâns-o la un loc și a supus-o unui program. Comisia Sadler din 1832 a strâns mărturii despre zile de lucru de douăsprezece până la șaisprezece ore, despre pedepse trupești și despre diformități osoase. Factory Act din 1833 a interzis folosirea copiilor sub nouă ani în industria textilă, a limitat ziua de lucru pe grupe de vârstă și a creat ceva hotărâtor: un corp de inspectori. Mines Act din 1842 a interzis munca în subteran a femeilor și a copiilor sub zece ani, iar legea celor zece ore a venit în 1847.',
        'Ludismul este înțeles greșit ca ură fără noimă față de tehnică. Ludiștii din 1811-1816 erau muncitori calificați care distrugeau alese pe sprânceană mașinile folosite ca să ieftinească produsul, stricându-i calitatea și călcând peste obiceiurile meseriei, într-o vreme în care asocierile muncitorești erau interzise prin Combination Acts și nu exista nicio cale legală de negociere. Spargerea mașinilor era, cum a scris Eric Hobsbawm, negociere colectivă prin alte mijloace. Parlamentul a răspuns cu pedeapsa cu moartea.',
        'Thompson a susținut în 1963 că clasa muncitoare nu a fost un produs automat al mașinilor, ci o identitate clădită în acea trăire: societăți de ajutor reciproc, presă radicală, capele disidente, cartism. Este formularea care a împins deoparte determinismul economic din istoria socială britanică.',
      ].join('\n\n'),
      callout:
        'Ludiștii nu se năpusteau asupra mașinilor în general: le distrugeau pe acelea care stricau produsul și călcau obiceiurile meseriei. Cu asocierile interzise, era singura negociere la îndemână.',
    },
    {
      title: 'Orașul industrial',
      body: [
        'Manchesterul a trecut de la vreo douăzeci și cinci de mii de locuitori, la mijlocul secolului al XVIII-lea, la peste trei sute de mii un secol mai târziu. Acea creștere s-a produs fără canalizare, fără apă curentă și fără reglementarea locuințelor, cu case spate în spate, pivnițe locuite și latrine împărțite de zeci de familii.',
        'Rezultatul a fost ceea ce demografii numesc penalizarea urbană: în marile orașe industriale din anii treizeci și patruzeci, speranța de viață la naștere putea să rămână în jur de treizeci de ani, mult sub cea de la țară, iar mortalitatea infantilă o întrecea binișor pe cea rurală. Tifosul, tuberculoza și mai ales holera, venită în 1831 și din nou în 1848, au lovit aceste populații.',
        'Răspunsul a venit pe calea statisticii. Edwin Chadwick a publicat în 1842 un raport care lega între ele mortalitatea, înghesuiala și salubritatea și care apăra, cu argumente utilitariste de cost public, intervenția statului în apă și canalizare; de acolo a ieșit Public Health Act din 1848. John Snow a dovedit în 1854, cartografiind cazurile din jurul pompei din Broad Street, că holera se transmite prin apă, nu prin miasme, deși teza lui a fost primită abia după ani.',
        'Poluarea a fost celălalt cost. Cărbunele care mișca fabricile a umplut orașele de fum și de funingine, iar cețurile ucigătoare au ținut până bine în secolul XX. Industrializarea britanică este totodată începutul documentat al emisiei masive de dioxid de carbon, fapt pe care istoriografia mediului l-a adus în bilanț.',
        'Cu timpul, orașul industrial și-a produs propriile soluții: parcuri publice, aducțiuni de apă, spitale, transport urban, școli și o legislație municipală care, spre sfârșitul secolului, micșorase mortalitatea în chip hotărât. Dar acel rezultat a venit la două generații după cei care au plătit costul dintâi.',
      ].join('\n\n'),
    },
    {
      title: 'Răspândire inegală',
      body: [
        'Belgia s-a industrializat devreme, datorită cărbunelui și siderurgiei ei; Franța a mers pe alt drum, cu mai multă greutate a micii proprietăți agrare, a produselor de calitate și a unei tranziții demografice timpurii. Patrick OBrien și Çağlar Keyder au argumentat că acel drum nu a fost un eșec față de modelul britanic, ci o cale alternativă, cu venituri pe locuitor asemănătoare pe termen lung.',
        'Germania a pornit după 1850 și a făcut-o cu trăsături proprii: bănci universale care finanțau pe termen lung, carteluri, școli tehnice și politehnice și industrii întemeiate pe știință, precum chimia coloranților și electrotehnica. Statele Unite au dezvoltat așa-numitul sistem american de manufacturi, cu piese interschimbabile și mașini specializate, înlesnit de puținătatea mâinii de lucru și de belșugul de resurse.',
        'În afara Occidentului, Japonia este cazul industrializării conduse de stat după Restaurația Meiji din 1868: trimiterea de studenți, angajarea de ingineri străini, întreprinderi publice vândute apoi unor grupuri private și un efort uriaș în învățământ.',
        'Cealaltă față este dezindustrializarea colonială. În secolul al XVIII-lea, India producea o parte foarte mare din textilele lumii; între 1810 și 1860, acea industrie s-a prăbușit în fața torsului mecanic britanic, într-o vreme cu tarife inegale și cu stăpânire politică. Se discută cât a atârnat tehnica și cât politica comercială, dar faptul este stabilit: industrializarea unora s-a petrecut odată cu dezindustrializarea altora.',
        'De după 1870 vine a doua revoluție industrială: oțel Bessemer și Siemens-Martin, chimie organică, electricitate, motor cu ardere internă, taylorism și producție pe bandă. Întâietatea tehnologică se mută din Marea Britanie în Germania și în Statele Unite, iar cercetarea se instituționalizează în laboratoare de întreprindere și în universități tehnice.',
      ].join('\n\n'),
    },
    {
      title: 'Marile dezbateri',
      body: [
        'Prima este cea a nivelului de trai. Optimiștii, cu Peter Lindert și Jeffrey Williamson, au socotit că salariile reale aproape s-au dublat între 1820 și 1850. Pesimiștii, pe urmele lui Charles Feinstein, obțin îmbunătățiri mult mai mici până la mijlocul secolului. Antropometria a adăugat un fapt greu de răsturnat: înălțimea medie a bărbaților britanici a scăzut la generațiile născute între 1820 și 1850, semn de hrănire netă mai proastă și de mai multă boală în copilărie.',
        'Robert Allen a rezumat discuția prin expresia pauza lui Engels: între 1790 și 1840, producția pe muncitor a crescut, iar salariile reale abia, așa încât surplusul s-a dus în profit și în investiții. Îmbunătățirea generală vine de după 1850. Adică pesimiștii au dreptate pentru prima generație, iar optimiștii pentru a doua.',
        'A doua dezbatere este cea a marii divergențe. Împotriva lui Pomeranz, Robert Allen și Stephen Broadberry susțin că Europa de Nord-Vest avea deja avans înainte de 1750, cu salarii și productivitate agrară mai mari încă de la criza secolului al XIV-lea. Discuția se tranșează astăzi cu serii de salarii, prețuri și producție refăcute pentru China, India, Japonia și Europa, iar punctul divergenței tinde să fie așezat mai devreme decât propunea Pomeranz, fără a se întoarce la explicațiile culturale ale secolului al XIX-lea.',
        'A treia este rolul sclaviei și al imperiului. Eric Williams a susținut în 1944 că profiturile din comerțul cu sclavi și din zahăr au finanțat industrializarea britanică și că abolirea a răspuns unor interese economice, nu doar moralei. Decenii de critică au micșorat greutatea cantitativă directă a acelor profituri; cercetări recente, precum cele ale lui Sven Beckert despre capitalismul bumbacului, au recăpătat legătura pe altă cale: bumbacul produs de sclavii din sudul Statelor Unite a hrănit Lancashire, iar imperiul a dat piețe protejate și materii prime.',
        'A patra este chiar cuvântul. De la Toynbee și Ashton s-a vorbit de revoluție; gradualismul cantitativ al lui Crafts și Harley a părut să o dezmintă. Ieșirea primită de cei mai mulți deosebește niveluri: la ratele de creștere de ansamblu, procesul a fost lent; la structura producției, la izvoarele de energie, la organizarea muncii și la efectele asupra planetei, a fost o ruptură fără precedent de la Neolitic încoace.',
      ].join('\n\n'),
      callout:
        'Pauza lui Engels: între 1790 și 1840 producția pe muncitor urcă, iar salariile reale nu. Pesimiștii au dreptate despre prima generație, optimiștii despre a doua.',
    },
  ],
  concepts: [
    { term: 'Sistemul de acasă', definition: 'Organizarea dinaintea fabricii: negustorul împarte materia primă unor familii care lucrează acasă, în acord.' },
    { term: 'Water frame', definition: 'Mașina de tors a lui Arkwright, mișcată de apă. Neîncăpând într-o casă, silește la ridicarea fabricii, cu program și supraveghere.' },
    { term: 'Condensator separat', definition: 'Îmbunătățirea lui Watt, care micșorează consumul de cărbune destul cât să scoată aburul de la gura minei și să îl ducă în fabrică.' },
    { term: 'Pudlare', definition: 'Procedeul lui Cort pentru obținerea fierului moale în cantități mari, fără mangal. Temelia căii ferate și a construcțiilor metalice.' },
    { term: 'Pogoane fantomă', definition: 'Concept al lui Pomeranz: pământuri coloniale care dau bumbac, zahăr și lemn fără să consume sol european.' },
    { term: 'Economie cu salarii mari', definition: 'Teza lui Allen: munca scumpă și energia ieftină fac mecanizarea rentabilă în Marea Britanie și nu în Asia.' },
    { term: 'Iluminism industrial', definition: 'Concept al lui Mokyr: cultură a cunoașterii folositoare, care leagă filozofi ai naturii, ingineri și meșteri.' },
    { term: 'Disciplina timpului', definition: 'Trecerea de la rânduiala după sarcini la timpul măsurat și plătit la oră. Analizată de E. P. Thompson în 1967.' },
    { term: 'Ludism', definition: 'Distrugerea aleasă a mașinilor de către muncitori calificați, între 1811 și 1816, cu asocierile muncitorești interzise prin lege.' },
    { term: 'Factory Acts', definition: 'Legile fabricilor din Marea Britanie, de la 1833 încolo. Noutatea hotărâtoare nu a fost limita de vârstă, ci corpul de inspectori.' },
    { term: 'Penalizare urbană', definition: 'Mortalitatea în plus a orașelor industriale față de sate, înainte de lucrările de salubritate din a doua jumătate a secolului.' },
    { term: 'Pauza lui Engels', definition: 'Perioada 1790-1840, în care crește producția pe muncitor, dar nu și salariile reale. Formulare a lui Allen.' },
    { term: 'Marea divergență', definition: 'Despărțirea nivelurilor de venit dintre Europa de Nord-Vest și Asia. Data și cauzele ei sunt marea dezbatere deschisă.' },
    { term: 'A doua revoluție industrială', definition: 'Ciclul 1870-1914: oțel, chimie, electricitate și motor cu explozie, cu cercetare instituționalizată în laboratoare.' },
  ],
  debates: [
    {
      question: 'De ce în Marea Britanie și nu în China sau în India?',
      positions: [
        {
          school: 'Întâmplare ecologică (Pomeranz, 2000)',
          argument:
            'Delta Yangzi era asemănătoare Angliei în 1750. Deosebirea a fost făcută de cărbunele ușor de ajuns și de pogoanele fantomă din Atlantic, nu de o superioritate europeană dinainte.',
        },
        {
          school: 'Prețuri relative (Allen, 2009)',
          argument:
            'Doar acolo unde munca era scumpă și energia ieftină era rentabil să inventezi și să primești mașini care economisesc mână de lucru.',
        },
        {
          school: 'Cultura cunoașterii folositoare (Mokyr) și instituțiile (North și Weingast)',
          argument:
            'Circulația dintre știință și atelier, patentele și angajamentul credibil al Parlamentului de după 1688 au susținut o îmbunătățire tehnică cumulativă vreme de un secol.',
        },
      ],
      state:
        'Factorii se îmbină, în loc să fie ales doar unul. Cronologia divergenței tinde să fie mutată mai devreme decât la Pomeranz, fără a readuce explicațiile culturale din secolul al XIX-lea despre presupusa neclintire asiatică.',
    },
    {
      question: 'S-a îmbunătățit nivelul de trai al muncitorilor?',
      positions: [
        {
          school: 'Optimiștii (Lindert și Williamson)',
          argument:
            'Salariile reale aproape s-au dublat între 1820 și 1850; consumul de bunuri de bază și oferta de locuri de muncă au crescut.',
        },
        {
          school: 'Pesimiștii (Feinstein și antropometria)',
          argument:
            'Creșterile de salarii au fost mici până la mijlocul secolului, iar înălțimea medie a scăzut la generațiile născute între 1820 și 1850: hrănire netă mai proastă și mai multă boală în copilărie.',
        },
      ],
      state:
        'Pauza lui Engels împacă ambele seturi de date: creștere fără împărțire între 1790 și 1840 și îmbunătățire generală de după 1850. Discuția s-a mutat spre sănătate, mortalitate și timp de muncă, nu doar spre salariu.',
    },
    {
      question: 'Cât au atârnat sclavia și imperiul?',
      positions: [
        {
          school: 'Teza lui Williams (1944)',
          argument:
            'Profiturile din comerțul cu sclavi și din zahăr au finanțat industrializarea, iar abolirea a răspuns declinului economic al sistemului sclavagist, nu doar conștiinței morale.',
        },
        {
          school: 'Critica cantitativă',
          argument:
            'Profiturile directe din comerțul cu sclavi au fost o părticică din investiția britanică totală; economisirea internă și agricultura explică cea mai mare parte a capitalului.',
        },
        {
          school: 'Noua istorie a capitalismului (Beckert, 2014)',
          argument:
            'Legătura este structurală, mai degrabă decât contabilă: bumbacul produs de sclavii din sudul Statelor Unite a aprovizionat Lancashire, iar imperiul a adus piețe protejate și materii prime.',
        },
      ],
      state:
        'Se respinge versiunea tare a lui Williams despre finanțarea directă și se primește interdependența structurală dintre economia atlantică sclavagistă și industria textilă britanică.',
    },
  ],
  sources: [
    { author: 'Adam Smith', title: 'Avuția națiunilor', year: '1776', kind: 'primaria', note: 'Fabrica de ace, ca analiză de pionierat a diviziunii muncii și a efectului ei asupra productivității.' },
    { author: 'Comisia Sadler', title: 'Raport despre munca copiilor în fabrici', year: '1832', kind: 'primaria', note: 'Mărturii despre zile de lucru de douăsprezece până la șaisprezece ore, pedepse trupești și diformități osoase.' },
    { author: 'Parlamentul britanic', title: 'Factory Act', year: '1833', kind: 'primaria', note: 'Limite de vârstă și de program în industria textilă și, mai ales, înființarea inspectorilor.' },
    { author: 'Andrew Ure', title: 'The Philosophy of Manufactures', year: '1835', kind: 'primaria', note: 'Apărare entuziastă a sistemului de fabrică și a disciplinei pe care o impune. Contrapunct neapărat trebuincios lui Engels.' },
    { author: 'Edwin Chadwick', title: 'Raport despre condițiile sanitare ale populației muncitoare', year: '1842', kind: 'primaria', note: 'Leagă între ele mortalitatea, înghesuiala și salubritatea, cu argumente de cost public.' },
    { author: 'Friedrich Engels', title: 'Situația clasei muncitoare din Anglia', year: '1845', kind: 'primaria', note: 'Observație directă a Manchesterului. Sursă și, totodată, pledoarie: trebuie citită ca amândouă.' },
    { author: 'Charles Dickens', title: 'Timpuri grele', year: '1854', kind: 'primaria', note: 'Coketown ca portret literar al utilitarismului industrial și al orașului fumului.' },
    { author: 'John Snow', title: 'Despre modul de transmitere a holerei', year: '1855', kind: 'primaria', note: 'Cartografierea cazurilor din Broad Street, împotriva teoriei miasmelor, care era cea stăpânitoare.' },
    { author: 'Karl Marx', title: 'Capitalul, cartea I', year: '1867', kind: 'primaria', note: 'Ziua de muncă, mașinismul și marea industrie, pornind de la rapoartele inspectorilor de fabrici.' },
    { author: 'Arnold Toynbee', title: 'Lectures on the Industrial Revolution', year: '1884', kind: 'primaria', note: 'Răspândește termenul și fixează imaginea de ruptură catastrofală pe care secolul XX o va discuta.' },
    { author: 'T. S. Ashton', title: 'Revoluția industrială', year: '1948', kind: 'estudio', note: 'Sinteză optimistă clasică: fără industrializare, populația care creștea ar fi trăit mai rău.' },
    { author: 'Eric Williams', title: 'Capitalism și sclavie', year: '1944', kind: 'estudio', note: 'Leagă comerțul cu sclavi, zahărul, acumularea britanică și abolirea. Mult discutată și niciodată lipsită de rost.' },
    { author: 'E. P. Thompson', title: 'Formarea clasei muncitoare engleze', year: '1963', kind: 'estudio', note: 'Clasa ca trăire și construcție culturală, nu ca efect automat al mașinilor.' },
    { author: 'E. P. Thompson', title: 'Timp, disciplina muncii și capitalism industrial', year: '1967', kind: 'estudio', note: 'De la munca rânduită după sarcini la timpul măsurat și plătit la oră.' },
    { author: 'Eric Hobsbawm', title: 'Industrie și imperiu', year: '1968', kind: 'estudio', note: 'Interpretează ludismul ca negociere colectivă prin alte mijloace, în lipsa unor drepturi sindicale.' },
    { author: 'David Landes', title: 'Prometeu dezlănțuit', year: '1969', kind: 'estudio', note: 'Istorie tehnică comparată a schimbării industriale din Europa apuseană.' },
    { author: 'Peter Lindert și Jeffrey Williamson', title: 'English Workers Living Standards during the Industrial Revolution', year: '1983', kind: 'estudio', note: 'Revizuire optimistă a salariilor reale dintre 1820 și 1850.' },
    { author: 'Nicholas Crafts', title: 'British Economic Growth during the Industrial Revolution', year: '1985', kind: 'estudio', note: 'Recalculează seriile și obține o creștere de ansamblu mult mai lentă decât se credea.' },
    { author: 'Charles Feinstein', title: 'Pessimism Perpetuated', year: '1998', kind: 'estudio', note: 'Replică pesimistă: creșteri mici de salarii până pe la mijlocul secolului al XIX-lea.' },
    { author: 'Kenneth Pomeranz', title: 'Marea divergență', year: '2000', kind: 'estudio', note: 'Compară delta Yangzi cu Anglia și explică despărțirea prin cărbune și colonii.' },
    { author: 'Robert C. Allen', title: 'The British Industrial Revolution in Global Perspective', year: '2009', kind: 'estudio', note: 'Salarii mari, energie ieftină și pauza lui Engels drept chei ale procesului.' },
    { author: 'Joel Mokyr', title: 'The Enlightened Economy', year: '2009', kind: 'estudio', note: 'Iluminismul industrial și circulația cunoașterii folositoare ca motor al îmbunătățirii cumulative.' },
    { author: 'Sven Beckert', title: 'Imperiul bumbacului', year: '2014', kind: 'estudio', note: 'Lanțul global al bumbacului: sclavie, imperiu și fabrică, ca un singur sistem.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Interogatoriul unui muncitor despre munca copiilor',
      text: [
        'La ce vârstă ați început să lucrați într-o fabrică? La șase ani.',
        'Care era programul în vremurile cu mult de lucru? De la cinci dimineața până la nouă seara.',
        'Ce odihnă vi se dădea? Un sfert de oră pentru micul dejun, o jumătate de oră pentru masă și încă un sfert ca să bem apă.',
        'Aveați destul timp să mâncați? Nu, trebuia să lăsăm mâncarea sau să o luăm cu noi la lucru.',
        'Ce făceau ca să vă țină treji? Ne loveau când ne fura somnul.',
      ].join('\n\n'),
      source: 'Mărturie în fața Comitetului Sadler, Parlamentul britanic, 1832.',
      note: 'Versiune proprie și prescurtată după procesul-verbal oficial în engleză.',
      question: 'Această mărturie a fost strânsă în Parlament și publicată. De ce crezi că statul a avut nevoie să documenteze astfel ceva ce era deja la vedere, ca să poată legifera?',
    },
  ],
  images: [
    {
      alt: 'Peisaj de noapte, cu flăcările și fumul roșiatic ale unor furnale luminând valea',
      caption: 'Coalbrookdale noaptea, de Philip James de Loutherbourg (1801).',
    },
    {
      alt: 'Gravură a unei mașini de lemn, cu un cadru de fuse verticale și o roată laterală învârtită cu mâna',
      caption: 'Spinning jenny a lui Hargreaves, pe la 1764. Înmulțea de opt ori cât torcea un om și încă lucra înăuntrul unei case.',
    },
    {
      alt: 'Gravură din interiorul unei fabrici, cu șiruri de războaie mecanice, femei care le supraveghează și axe de transmisie în tavan',
      caption: 'Sală de războaie mecanice, 1835. Axul din tavan dă ritmul tuturor deodată: fabrica vinde disciplină orară mai înainte de a vinde mașini.',
    },
    {
      alt: 'Gravură cu curți din spatele unor locuințe muncitorești înghesuite lângă un viaduct de cale ferată, cu rufe întinse și hornuri',
      caption: 'Londra văzută de Gustave Doré în London: a Pilgrimage (1872). Orașul industrial a crescut mai repede decât canalizarea lui.',
    },
  ],
  questions: [
    {
      question: 'Ce arată Pomeranz comparând delta Yangzi cu Anglia pe la 1750?',
      options: [
        'Că China avea trei secole de întârziere tehnică',
        'Că ambele regiuni aveau niveluri de trai, piețe și rafinament comercial asemănătoare',
        'Că Anglia avea deja de două ori venitul pe locuitor',
        'Că în China lipseau piețele de pământ și de muncă',
      ],
      explanation: 'Explicația lui pentru divergență ține de întâmplare: cărbune ușor de ajuns și pogoane fantomă coloniale, nu o superioritate europeană dinainte.',
    },
    {
      question: 'Potrivit lui Robert Allen, de ce s-a mecanizat mai întâi Marea Britanie?',
      options: [
        'Fiindcă avea ingineri mai buni decât continentul',
        'Fiindcă munca era scumpă și energia ieftină, ceea ce făcea rentabilă înlocuirea mâinii de lucru cu mașini',
        'Fiindcă și-a ocrotit invențiile cu patente mai aspre',
        'Fiindcă avea o piață internă mai mare decât cea franceză',
      ],
      explanation: 'Spinning jenny era rentabilă în Lancashire și ruinătoare în Bengal. Deosebirea stătea în prețurile relative, nu în iscusință.',
    },
    {
      question: 'De ce a silit water frame a lui Arkwright la crearea fabricii?',
      options: [
        'Fiindcă cerea muncitori cu studii universitare',
        'Fiindcă avea nevoie de energie hidraulică și nu încăpea într-o casă, ceea ce a impus clădire, program și supraveghere',
        'Fiindcă Parlamentul a interzis torsul de acasă',
        'Fiindcă patentul ei cerea instalarea în orașe',
      ],
      explanation: 'Jenny se mai folosea încă în atelierul de acasă. Fabrica se naște din mașina care nu încape într-o casă.',
    },
    {
      question: 'Ce a adus condensatorul separat al lui Watt?',
      options: [
        'A îngăduit pentru prima dată scoaterea apei din mine',
        'A micșorat consumul de cărbune destul cât să scoată aburul de la gura minei și să îl ducă în fabrică',
        'A înlocuit fierul cu oțelul la cazane',
        'A făcut de prisos energia hidraulică în siderurgie',
      ],
      explanation: 'Mașina lui Newcomen funcționa deja din 1712, dar era cu putință doar acolo unde cărbunele nu costa nimic: chiar în mină.',
    },
    {
      question: 'Ce au găsit Crafts și Harley recalculând creșterea britanică?',
      options: [
        'Rate explozive, de peste cinci la sută pe an',
        'O creștere a producției pe locuitor de vreun unu la sută pe an, între 1780 și 1830',
        'O stagnare deplină până în 1850',
        'O creștere strânsă doar în agricultură',
      ],
      explanation: 'Transformator la scara unui secol, modest la scara unui deceniu. În 1830, cei mai mulți muncitori nu erau în fabrici mecanizate.',
    },
    {
      question: 'În ce a constat schimbarea pe care E. P. Thompson a analizat-o în 1967?',
      options: [
        'În înlocuirea salariului cu plata în natură',
        'În trecerea de la o muncă rânduită după sarcini la o disciplină a timpului măsurat și plătit la oră',
        'În interzicerea muncii de noapte',
        'În generalizarea contractului pe durată nedeterminată',
      ],
      explanation: 'Amenzi pentru întârziere, sfârșitul Sfintei Luni și potrivirea a sute de oameni după un ceas ținut adesea de patron.',
    },
    {
      question: 'Care a fost noutatea cea mai eficace a legii Factory Act din 1833?',
      options: [
        'Interzicerea deplină a muncii copiilor',
        'Înființarea unui corp de inspectori în stare să facă legea respectată',
        'Ziua de lucru de opt ore',
        'Obligația de a plăti salariu egal bărbaților și femeilor',
      ],
      explanation: 'Fără inspecție, normele de dinainte erau vorbe goale. Legea celor zece ore a venit în 1847.',
    },
    {
      question: 'Cum este înțeleasă astăzi mișcarea ludistă?',
      options: [
        'Ca respingere fără noimă a tehnicii, din partea unor muncitori necalificați',
        'Ca distrugere aleasă a mașinilor care stricau produsul și călcau obiceiurile meseriei, în lipsa dreptului de a se asocia',
        'Ca o răscoală țărănească împotriva îngrădirii pământurilor',
        'Ca o campanie pusă la cale de fabricanții rivali',
      ],
      explanation: 'Hobsbawm a numit-o negociere colectivă prin alte mijloace. Combination Acts închideau calea legală, iar Parlamentul a răspuns cu pedeapsa cu moartea.',
    },
    {
      question: 'Ce este „penalizarea urbană”?',
      options: [
        'Impozitul municipal pe fabricile poluante',
        'Mortalitatea în plus a orașelor industriale față de sate, înainte de lucrările de salubritate',
        'Amenda dată muncitorilor care veneau târziu',
        'Suprapreț la chiria din cartierele fabricilor',
      ],
      explanation: 'În anii treizeci și patruzeci, speranța de viață la naștere în marile orașe industriale putea să rămână în jur de treizeci de ani.',
    },
    {
      question: 'Ce a dovedit John Snow în 1854?',
      options: [
        'Că holera era moștenită',
        'Că holera se transmitea prin apă, cartografiind cazurile din jurul pompei din Broad Street',
        'Că miasmele din aer erau cauza epidemiei',
        'Că vaccinarea împiedica holera',
      ],
      explanation: 'Teza lui a fost primită abia după ani. Raportul Chadwick din 1842 și Public Health Act din 1848 se mișcau încă în cadrul miasmelor.',
    },
    {
      question: 'Ce susțin OBrien și Keyder despre industrializarea franceză?',
      options: [
        'Că a dat greș din lipsă de cărbune',
        'Că a fost o cale alternativă, cu mai multă greutate a micii proprietăți și a produselor de calitate, și cu venituri pe locuitor asemănătoare pe termen lung',
        'Că a copiat întocmai modelul britanic, cu o jumătate de secol întârziere',
        'Că a atârnat în întregime de investiția străină',
      ],
      explanation: 'Măsurarea tuturor drumurilor cu cotul britanic produce eșecuri închipuite. Și Germania, și Statele Unite au mers pe drumuri proprii.',
    },
    {
      question: 'Ce s-a petrecut cu industria textilă a Indiei între 1810 și 1860?',
      options: [
        'S-a mecanizat înaintea celei britanice',
        'S-a prăbușit în fața torsului mecanic britanic, într-o vreme cu tarife inegale și cu stăpânire politică',
        'S-a păstrat neschimbată datorită cererii interne',
        'S-a mutat pe producția de oțel',
      ],
      explanation: 'Se discută cât a atârnat tehnica și cât politica comercială. Faptul este stabilit: industrializarea unora s-a petrecut odată cu dezindustrializarea altora.',
    },
    {
      question: 'Ce fapt antropometric încurcă citirea optimistă a nivelului de trai?',
      options: [
        'Creșterea natalității la oraș',
        'Scăderea înălțimii medii a bărbaților născuți între 1820 și 1850',
        'Scăderea consumului de cărbune în gospodării',
        'Creșterea numărului de ore de răgaz',
      ],
      explanation: 'Înălțimea rezumă hrănirea netă și boala din copilărie. Este argumentul cel mai greu de răsturnat al taberei pesimiste.',
    },
    {
      question: 'Ce descrie „pauza lui Engels”?',
      options: [
        'Răgazul dintre cele două revoluții industriale',
        'Perioada 1790-1840, în care producția pe muncitor crește, iar salariile reale abia se mișcă',
        'Întreruperea comerțului din pricina blocadei continentale',
        'Întârzierea Germaniei la industrializare',
      ],
      explanation: 'Surplusul s-a dus în profit și în investiții. Împacă pesimiștii și optimiștii: au dreptate despre generații diferite.',
    },
    {
      question: 'Care este starea de azi a dezbaterii despre teza lui Eric Williams?',
      options: [
        'Este primită întru totul: comerțul cu sclavi a finanțat direct industrializarea',
        'Se respinge versiunea tare despre finanțarea directă și se primește interdependența structurală dintre economia atlantică sclavagistă și industria textilă',
        'S-a dovedit că nu a fost nicio legătură între sclavie și industrie',
        'Se socotește că abolirea a întârziat industrializarea britanică',
      ],
      explanation: 'Beckert a recăpătat legătura pe altă cale: bumbacul produs de sclavii din sudul Statelor Unite aproviziona Lancashire.',
    },
    {
      question: 'Ce caracterizează a doua revoluție industrială, din 1870-1914?',
      options: [
        'Generalizarea aburului și a fierului moale',
        'Oțel, chimie organică, electricitate și motor cu explozie, cu cercetare instituționalizată și cu Germania și Statele Unite în frunte',
        'Întoarcerea la atelierul meșteșugăresc',
        'Înlocuirea cărbunelui cu energia hidraulică',
      ],
      explanation: 'Industriile întemeiate pe știință cereau laboratoare de întreprindere și școli tehnice. Acolo a pierdut Marea Britanie întâietatea tehnologică.',
    },
  ],
}
