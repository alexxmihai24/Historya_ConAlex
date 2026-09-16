import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/segunda-guerra.ts`. Aceeași formă: 7
   secțiuni în aceeași ordine, 19 date, 14 concepte, 3 dezbateri, 23 de surse, un
   document comentat, 4 imagini și 19 întrebări cu opțiunile pe aceleași poziții. */
export const segundaGuerraRo: TopicTranslation = {
  title: 'Al Doilea Război Mondial și Holocaustul',
  description: 'Cel mai ucigător război din istorie și genocidul săvârșit înăuntrul lui: două procese împletite, care trebuie studiate împreună și deosebite cu precizie.',
  years: '1939–1945',
  summary:
    'Între 1939 și 1945 au murit între cincizeci și șaptezeci de milioane de oameni, iar pentru prima dată în istoria europeană cei mai mulți au fost civili. Războiul a avut două naturi suprapuse. A fost un conflict între state pentru stăpânirea Europei și a Pacificului, hotărât în cele din urmă de capacitatea industrială și de frontul de est, unde s-a purtat în jur de optzeci la sută din lupta terestră împotriva Germaniei. Și a fost un război de exterminare cu un program ideologic propriu, care în est a planificat înfometarea a zeci de milioane de slavi și a executat uciderea sistematică a aproape șase milioane de evrei europeni. Despărțirea celor două planuri fără a le deconecta este problema centrală a temei: Holocaustul nu a fost un efect colateral al războiului, dar nici nu ar fi putut fi executat fără el.',
  keyDates: [
    { date: '28 iunie 1919', event: 'Tratatul de la Versailles: Germania pierde teritoriu, colonii și armată și acceptă vina pentru război.' },
    { date: '30 ianuarie 1933', event: 'Hitler este numit cancelar. În câteva luni transformă republica în dictatură.' },
    { date: 'Martie 1936', event: 'Remilitarizarea Renaniei, împotriva Versailles-ului. Nimeni nu reacționează.' },
    { date: 'Martie 1938', event: 'Anschluss: Germania anexează Austria.' },
    { date: '29-30 septembrie 1938', event: 'Conferința de la München: Marea Britanie și Franța îi predau lui Hitler regiunea sudetă.' },
    { date: '23 august 1939', event: 'Pactul germano-sovietic (Ribbentrop-Molotov), cu o împărțire secretă a Poloniei.' },
    { date: '1 septembrie 1939', event: 'Invadarea Poloniei de către Germania. Două zile mai târziu, Marea Britanie și Franța declară război.' },
    { date: 'Mai și iunie 1940', event: 'Campania din vest: înfrângerea Franței în șase săptămâni, evacuarea de la Dunkerque și armistițiul cu regimul de la Vichy.' },
    { date: 'Iulie-octombrie 1940', event: 'Bătălia Angliei. Prima înfrângere strategică germană și amânarea pe termen nedefinit a invaziei.' },
    { date: '22 iunie 1941', event: 'Operațiunea Barbarossa: trei milioane de soldați invadează URSS. Războiul de exterminare începe aici.' },
    { date: '7 decembrie 1941', event: 'Atacul japonez asupra Pearl Harbor. Statele Unite intră în război, iar Germania le declară război patru zile mai târziu.' },
    { date: '20 ianuarie 1942', event: 'Conferința de la Wannsee: coordonarea administrativă a Soluției Finale, deja în desfășurare.' },
    { date: 'Iunie 1942', event: 'Midway. Marina japoneză pierde patru portavioane și inițiativa în Pacific.' },
    { date: 'Noiembrie 1942 - februarie 1943', event: 'Stalingrad: încercuirea și capitularea Armatei a 6-a germane. Punctul de cotitură al frontului de est.' },
    { date: 'Iulie 1943', event: 'Kursk, cea mai mare bătălie de blindate din istorie, și debarcarea aliată în Sicilia.' },
    { date: '6 iunie 1944', event: 'Debarcarea din Normandia. Deschiderea frontului de vest în Europa.' },
    { date: 'Ianuarie 1945', event: 'Eliberarea lagărului Auschwitz de către Armata Roșie.' },
    { date: '8 mai 1945', event: 'Capitularea necondiționată a Germaniei.' },
    { date: '6 și 9 august 1945', event: 'Bombele atomice asupra Hiroshimei și Nagasakiului. Japonia capitulează la 15 august.' },
  ],
  sections: [
    {
      title: 'Cum și de ce a început: de la Versailles la Danzig',
      body: [
        'Al Doilea Război Mondial nu a izbucnit prin surprindere: a fost capătul unui drum de douăzeci de ani. Punctul lui de plecare este Tratatul de la Versailles din 1919. Germania a pierdut treisprezece la sută din teritoriu, toate coloniile și cea mai mare parte a armatei; a trebuit să plătească despăgubiri uriașe și să accepte, prin articolul 231, răspunderea pentru război. Aproape niciun german, de stânga sau de dreapta, nu a considerat acel tratat drept just, iar cuvântul „Diktat” a devenit un argument politic permanent. Versailles nu făcea inevitabil un nou război, dar lăsa cea mai mare putere a continentului umilită și cu motive să ceară schimbarea hărții.',
        'A doua cauză este criza din 1929. Marea Depresiune a prăbușit economia germană, care depindea de creditele americane: în 1932 erau șase milioane de șomeri. Șomajul și teama de comunism au împins milioane de alegători spre partidul nazist, care a trecut de la 2,6 % din voturi în 1928 la 37 % în iulie 1932. În ianuarie 1933, Hitler a fost numit cancelar de către președintele Hindenburg și în câteva luni a transformat republica în dictatură. Programul său, scris în Mein Kampf, era explicit: ruperea Versailles-ului, adunarea tuturor germanilor într-un singur stat și cucerirea unui „spațiu vital” în est, pe seama Poloniei și a Uniunii Sovietice.',
        'Între 1935 și 1939, Hitler a demontat Versailles pas cu pas și nimeni nu l-a oprit. În 1935 a restabilit serviciul militar obligatoriu; în 1936 a remilitarizat Renania; în martie 1938 a anexat Austria, Anschluss-ul; în septembrie 1938 a cerut regiunea sudetă a Cehoslovaciei. Răspunsul Marii Britanii și al Franței a fost politica de conciliere: să cedeze în ceea ce părea negociabil, ca să evite un nou măcel precum cel din 1914-1918, pe care opinia lor publică nu voia să îl repete. La conferința de la München, Chamberlain și Daladier i-au predat lui Hitler regiunea sudetă fără să consulte Cehoslovacia, iar Chamberlain s-a întors la Londra anunțând „pace pentru vremea noastră”.',
        'Nu a fost doar treaba Germaniei. Italia lui Mussolini invadase Etiopia în 1935, iar Japonia ocupa Manciuria din 1931 și a atacat China în 1937. Liga Națiunilor, creată ca să împiedice războaiele, s-a dovedit incapabilă să oprească vreunul dintre cei trei: nu avea armată, Statele Unite nu făceau parte din ea, iar sancțiunile ei erau simbolice. În Spania, între 1936 și 1939, Germania și Italia l-au sprijinit pe Franco cu avioane și trupe, iar Legiunea Condor a încercat la Guernica bombardarea orașelor. Cele trei țări s-au grupat în Axa Roma-Berlin-Tokyo.',
        'În martie 1939, Hitler a ocupat ce mai rămăsese din Cehoslovacia, un teritoriu care nu mai era german. Asta a pus capăt concilierii: Marea Britanie și Franța au garantat atunci frontierele Poloniei, ținta următoare, fiindcă Hitler revendica orașul liber Danzig și coridorul polonez. Piesa care lipsea a venit la 23 august 1939, odată cu pactul germano-sovietic, semnat de miniștrii Ribbentrop și Molotov. Cei doi dușmani ideologici se angajau să nu se atace și, într-un protocol secret, își împărțeau Polonia și estul Europei. Cu Uniunea Sovietică neutră, Hitler nu se mai temea de un război pe două fronturi.',
        'La 1 septembrie 1939, Germania a invadat Polonia sub pretextul unui fals atac polonez înscenat de SS la postul de radio din Gleiwitz. La 3 septembrie, Marea Britanie și Franța au declarat război. La 17, Armata Roșie a intrat în Polonia dinspre est. Cauzele se pot așadar rezuma la patru: un tratat de pace pe care Germania nu l-a acceptat, o criză economică ce a dus la putere un regim care voia războiul, niște democrații care au cedat prea multă vreme de teama repetării lui 1914 și un pact între Hitler și Stalin care i-a lăsat mâinile libere.',
      ].join('\n\n'),
      callout:
        'Istoricii sunt de acord că răspunderea principală îi revine lui Hitler: spre deosebire de 1914, nimeni nu a „alunecat” în război. Discuția este dacă democrațiile l-ar fi putut opri mai devreme, de pildă în Renania, în 1936, când armata germană era încă slabă.',
    },
    {
      title: 'De la Polonia la Barbarossa',
      body: [
        'Invadarea Poloniei în septembrie 1939 a inaugurat o formă de luptă pe care presa a botezat-o război-fulger: concentrarea blindatelor într-un punct, sprijin aerian tactic și rupere în adâncime în locul frontului continuu din 1914. Eticheta a îmbătrânit prost. Istoricii militari au arătat că nu exista o doctrină numită Blitzkrieg în manualele germane, că o bună parte din armată se deplasa încă pe jos și cu tracțiune animală și că succesul din 1939 și 1940 a depins la fel de mult de greșelile adversarului ca de inovația proprie.',
        'Căderea Franței în șase săptămâni a fost evenimentul care i-a nedumerit cel mai tare pe contemporani. Franța avea mai multe tancuri decât Germania și mai bine blindate, dar le ținea împrăștiate prin diviziile de infanterie, cu o comandă lentă și o doctrină defensivă moștenită din Marele Război. Lovitura prin Ardeni a rupt în două dispozitivul aliat și a produs mai degrabă o prăbușire a comenzii decât o înfrângere materială. Marc Bloch, istoric și ofițer, a scris asta chiar pe teren, într-un text care rămâne cea mai bună autopsie a dezastrului.',
        'Marea Britanie a rămas singură și nu a cedat. Bătălia Angliei, în vara lui 1940, a fost prima înfrângere strategică germană: Luftwaffe nu a obținut superioritatea aeriană necesară invaziei, iar sistemul britanic de radar și de dirijare a vânătorii a dovedit că o apărare aeriană integrată poate compensa inferioritatea numerică. Bombardarea orașelor care a urmat, Blitz-ul, a ucis peste patruzeci de mii de civili fără să frângă moralul, un fapt pe care planificatorii aliați nu l-au aplicat mai târziu propriilor campanii.',
        'Hotărârea de a invada Uniunea Sovietică în iunie 1941 nu a fost o cotitură oportunistă, ci obiectivul declarat încă din Mein Kampf: spațiu vital în est, distrugerea bolșevismului și exploatarea resurselor agrare ale Ucrainei. Planul Foametei, elaborat de Backe, prevedea devierea alimentelor ucrainene către Germania, asumând moartea prin înfometare a zeci de milioane de oameni. Ordinul Comisarilor cerea împușcarea comisarilor politici capturați, adică anula în scris dreptul războiului înainte de primul foc de armă.',
        'Barbarossa a fost cea mai mare desfășurare militară din istorie: circa trei milioane de soldați ai Axei pe un front de trei mii de kilometri. Primele luni au produs încercuiri uriașe și milioane de prizonieri sovietici, dintre care peste trei milioane au murit de foame și de frig în captivitate. Dar ofensiva s-a oprit în fața Moscovei, în decembrie, cu liniile de aprovizionare rupte, iar contraofensiva sovietică a arătat că războiul scurt de care Germania avea nevoie nu mai era cu putință.',
      ].join('\n\n'),
      callout:
        'Planul Foametei și Ordinul Comisarilor sunt din mai și iunie 1941, anterioare invaziei. Războiul din est a fost criminal prin proiect, nu printr-o degradare ulterioară.',
    },
    {
      title: 'Războiul devine mondial',
      body: [
        'Pacificul avea propria cronologie. Japonia era în război din 1937 în China, unde masacrul de la Nanjing arătase deja natura ocupației sale, iar din 1940 înainta asupra Indochinei. Embargoul american asupra petrolului și fierului vechi din 1941 a pus Tokyo în fața alegerii: fie retragerea din China, fie luarea cu forța a resurselor Asiei de Sud-Est. Pearl Harbor, în decembrie 1941, a fost un succes tactic și un dezastru strategic: nu a prins portavioanele și a făcut din Statele Unite un beligerant.',
        'Declararea războiului de către Germania Statelor Unite, patru zile mai târziu, este una dintre cele mai greu de explicat decizii ale conflictului și a pecetluit formarea Marii Alianțe. Statele Unite, Marea Britanie și Uniunea Sovietică erau parteneri incomozi, uniți doar de un dușman comun, iar cooperarea lor s-a sprijinit pe două instrumente: Legea Împrumutului și Închirierii, care i-a aprovizionat pe britanici și pe sovietici cu camioane, avioane, alimente și material industrial, și o serie de conferințe care au împărțit efortul și, totodată, lumea de după război.',
        'Bătălia Atlanticului a fost cea mai lungă campanie a războiului și singura care, în cuvintele lui Churchill, i-a răpit somnul. Supraviețuirea Marii Britanii depindea de convoaie, iar războiul submarin german a fost aproape să le taie în 1942. A fost câștigată printr-o combinație de escorte, aviație cu rază lungă, radar centimetric și, mai ales, citirea sistematică a comunicațiilor cifrate germane, materialul Ultra obținut la Bletchley Park pe temelia muncii anterioare a criptografilor polonezi.',
        'Superioritatea materială aliată a ajuns să fie copleșitoare, dar nu era automată: a trebuit organizată. Richard Overy a subliniat că victoria a depins de decizii de management industrial, de o mobilizare masivă a femeilor și de capacitatea de a transforma resursele în arme utile și duse la locul potrivit. Statele Unite au produs aproape trei sute de mii de avioane; URSS a mutat la est de Urali peste o mie cinci sute de fabrici întregi în 1941 și a continuat să fabrice tancuri T-34 în timp ce se retrăgea.',
        'Războiul din Pacific a avut un caracter aparte, cu salturi din insulă în insulă, luptă amfibie și o brutalitate reciprocă hrănită de rasismul ambelor tabere, pe care John Dower a documentat-o într-o carte clasică. Midway, în iunie 1942, a răsturnat raportul de forțe navale; au urmat Guadalcanal, Filipinele și o campanie americană de submarine care a sugrumat traficul maritim japonez și a lăsat insula fără petrol înainte de orice bombardament.',
      ].join('\n\n'),
    },
    {
      title: 'Frontul de est decide războiul în Europa',
      body: [
        'Între 1941 și 1945, Wehrmacht a ținut în est între două treimi și trei sferturi din divizii și acolo a suferit în jur de optzeci la sută din pierderile mortale. Orice relatare care așază centrul de greutate al războiului european în Normandia falsifică scara. Uniunea Sovietică a plătit acest rol cu circa douăzeci și șapte de milioane de morți, în majoritate civili, și cu distrugerea sistematică a regiunilor ei apusene.',
        'Stalingradul, între noiembrie 1942 și februarie 1943, a combinat o bătălie urbană de uzură cu o manevră sovietică de dublă învăluire care a închis Armata a 6-a. Capitularea a nouăzeci de mii de soldați, dintre care s-au întors doar câteva mii, a avut un efect moral imens în toată Europa. Kursk, în iulie 1943, a fost ultima ofensivă strategică germană din est: apărarea sovietică era pregătită, informată și eșalonată în adâncime, iar de atunci inițiativa nu a mai schimbat tabăra.',
        'Operațiunea Bagration, în vara lui 1944, a distrus Grupul de Armate Centru și a fost, din punct de vedere militar, un dezastru german mai mare decât Stalingradul, deși este mult mai puțin cunoscută în Occident. A fost pusă intenționat în același timp cu Normandia și a dovedit maturitatea artei operative sovietice, cu inducere strategică în eroare, concentrare masivă de artilerie și exploatare în adâncime. David Glantz a reconstituit acele campanii pornind de la arhivele sovietice și a corectat o bună parte din relatarea întemeiată doar pe memoriile generalilor germani.',
        'Acele memorii, scrise după război de ofițeri care căutau să se dezvinovățească, au creat mitul unui Wehrmacht curat, care ar fi luptat cu profesionalism, în afara crimelor SS. Cercetarea de după anii optzeci l-a demontat: armata regulată a participat la foametea planificată, la tratamentul criminal al prizonierilor, la represaliile împotriva populației civile și, în multe zone, la sprijinul logistic pentru împușcările în masă.',
        'Contribuția occidentală a fost hotărâtoare în alte feluri: campania de bombardament a silit Germania să devieze tunuri, muniție și avioane de vânătoare spre apărarea teritoriului, Mediterana a deschis un front care a scos Italia din război în 1943, iar Împrumutul și Închirierea a dat Armatei Roșii mobilitatea pe care fabricile ei nu o produceau. A discuta care a fost factorul decisiv are mai puțin sens decât a înțelege că această coaliție a funcționat ca o împărțire a sarcinilor.',
      ].join('\n\n'),
      callout:
        'Pentru fiecare soldat german mort în vest au murit aproape patru în est. Cifra nu împarte merite morale, dar fixează unde s-a hotărât militar războiul european.',
    },
    {
      title: 'Ocupație, colaborare și rezistență',
      body: [
        'Europa ocupată nu a avut un regim unic. Danemarca și-a păstrat ani la rând guvernul și parlamentul; Franța a fost împărțită între ocupație directă și un stat propriu la Vichy, care a legiferat din proprie inițiativă împotriva evreilor înainte să i se ceară; Polonia și vestul Uniunii Sovietice au fost supuse unei ocupații de exterminare, cu eliminarea deliberată a elitelor poloneze încă din 1939. Amploarea violenței depindea direct de locul pe care rasismul nazist îl atribuia fiecărei populații.',
        'Colaborarea a fost mult mai răspândită decât a recunoscut memoria națională de după război vreme de decenii. A existat colaborare de stat, de administrație și de vecini, iar fără ea mașinăria de ocupație nu ar fi putut funcționa cu trupele disponibile. Robert Paxton a arătat în 1972, lucrând cu arhive germane, că Vichy nu a fost un scut protector, ci un proiect politic cu agendă proprie, iar cartea lui a obligat la rescrierea relatării franceze despre război.',
        'Rezistența a fost reală, minoritară și foarte diversă. A cuprins de la rețele de evadare și presă clandestină până la partizani în stare să imobilizeze divizii întregi, precum partizanii iugoslavi ai lui Tito sau cei sovietici din Bielorusia. A fost aproape întotdeauna politică, nu doar patriotică, iar în mai multe țări lupta împotriva ocupantului s-a suprapus peste un război civil intern, cu urmări care au ajuns până în Grecia sau Iugoslavia de după război.',
        'Represaliile împotriva civililor au fost răspunsul sistematic: Lidice, Oradour, Fosele Ardeatine și sute de sate arse în Bielorusia și Ucraina. În est, logica represivă s-a contopit cu cea ideologică, astfel încât lupta antipartizani a servit și drept acoperire pentru masacrarea evreilor și a populației slave fără nicio legătură cu rezistența.',
        'A existat, în sfârșit, și o rezistență în interiorul Germaniei, mult mai slabă, dar nu inexistentă: Trandafirul Alb al fraților Scholl, rețele socialiste și comuniste, cercuri bisericești care au denunțat eutanasia forțată și atentatul din iulie 1944 al unui grup de ofițeri conservatori, venit târziu și din motive în parte diferite de cele ale rezistenței civile.',
      ].join('\n\n'),
    },
    {
      title: 'Holocaustul',
      body: [
        'Uciderea a aproape șase milioane de evrei europeni nu a fost un episod al războiului, ci un program cu logica lui proprie, executat sub acoperirea războiului. Pregătirea lui dura de ani: excludere legală din 1933, legile de la Nürnberg în 1935, jaf și violență deschisă în Noaptea de Cristal din 1938 și ghetouri în Polonia din 1939, cu foamete și epidemii care ucideau deja prin ele însele.',
        'Trecerea la uciderea în masă s-a produs odată cu Barbarossa. Einsatzgruppen, unități mobile ale SS și ale poliției sprijinite de batalioane de poliție de ordine și de auxiliari locali, au împușcat peste un milion și jumătate de oameni în gropi, sat cu sat, între 1941 și 1942. Babi Yar, cu peste treizeci și trei de mii de uciși în două zile lângă Kiev, este cazul cel mai cunoscut al unei metode pe care Timothy Snyder a numit-o Holocaustul gloanțelor și care precedă camerele de gazare.',
        'Centrele de exterminare ale operațiunii Reinhard, Belzec, Sobibor și Treblinka, au funcționat în 1942 și 1943 cu un singur scop: uciderea deportaților la sosire. Auschwitz-Birkenau a combinat lagărul de concentrare, complexul industrial de muncă sclavă și centrul de exterminare și de aceea a devenit simbolul întregului, deși la Treblinka au fost ucise aproape tot atâtea persoane în mult mai puțin timp. Conferința de la Wannsee din ianuarie 1942 nu a hotărât genocidul: a coordonat administrativ ceva ce era deja în curs.',
        'Discuția despre felul în care s-a ajuns la acea decizie a structurat istoriografia. Intenționaliștii subliniau un plan deductibil din ideologie și din declarațiile lui Hitler; funcționaliștii au descris o radicalizare cumulativă, produsă de concurența dintre instituții, de eșecul planurilor de deportare și de inițiativele comandanților de pe teren. Christopher Browning a propus o sinteză astăzi majoritară: decizii luate între vara și toamna lui 1941, în euforia victoriei așteptate în est, cu impuls de sus și propuneri de jos.',
        'A doua mare discuție privește executanții. Browning a studiat un batalion de poliție din Hamburg, format din bărbați de vârstă mijlocie fără fanatism deosebit, și a conchis că presiunea grupului, ascultarea și dezumanizarea au fost de ajuns ca să îi transforme în ucigași, deși aveau posibilitatea reală de a refuza. Daniel Goldhagen a răspuns că hotărâtor a fost un antisemitism eliminaționist specific german. Critica academică a demontat în bună măsură a doua teză, dar dezbaterea a fixat întrebarea cea mai incomodă a temei: cine ucide și de ce.',
        'Holocaustul nu a fost singurul genocid al perioadei. Naziștii au ucis între două sute de mii și cinci sute de mii de romi, au executat programul de eutanasie împotriva persoanelor cu dizabilități, i-au persecutat pe homosexuali și pe martorii lui Iehova și au planificat pentru după victorie moartea sau strămutarea a zeci de milioane de slavi. A recunoaște specificul exterminării evreilor și a o așeza în acest ansamblu nu sunt operațiuni incompatibile.',
      ].join('\n\n'),
      callout:
        'Peste jumătate dintre victimele evreiești au murit în afara camerelor de gazare: împușcate în gropi, moarte de foame în ghetouri sau ucise în marșurile de evacuare. Imaginea unui genocid pur industrial este incompletă.',
    },
    {
      title: 'Sfârșitul și bilanțul',
      body: [
        'Campania de bombardament strategic asupra Germaniei a ucis circa patru sute de mii de civili și a deschis de atunci o dezbatere morală și una despre eficacitate. Producția de război germană a continuat să crească până în 1944, ceea ce s-a folosit ca argument împotriva utilității ei; dar a deviat spre apărarea antiaeriană o parte uriașă din artileria și din industria germană și a distrus producția de combustibil sintetic, ceea ce a paralizat în cele din urmă Luftwaffe și blindatele. Dresda, în februarie 1945, cu un oraș plin de refugiați și fără obiective militare limpezi, este cazul în care se concentrează discuția etică.',
        'În Pacific, bombardamentul incendiar asupra orașului Tokyo, din martie 1945, a ucis circa o sută de mii de oameni într-o singură noapte, mai mulți decât oricare dintre cele două bombe atomice. Invadarea prevăzută a insulelor japoneze era socotită extrem de costisitoare, iar Japonia, deși înfrântă material, nu accepta capitularea necondiționată. În acest context au fost lansate bombele asupra Hiroshimei și Nagasakiului, cu circa două sute de mii de morți, socotind efectele radiațiilor.',
        'Justificarea tradițională, formulată de Stimson, susține că bomba a evitat o invazie cu sute de mii de pierderi aliate. Gar Alperovitz a replicat că Japonia era pe punctul de a capitula și că scopul real era condiționarea Uniunii Sovietice în lumea de după război. Tsuyoshi Hasegawa, lucrând cu surse japoneze, sovietice și americane, a susținut că factorul decisiv în hotărârea japoneză a fost intrarea sovietică în război la 8 august, care a închis ultima speranță a unei medieri negociate.',
        'Bilanțul final este greu de susținut cu cifre, fiindcă cifrele sunt de necuprins. Între cincizeci și șaptezeci de milioane de morți, în majoritate civili; Uniunea Sovietică cu douăzeci și șapte de milioane, China cu între cincisprezece și douăzeci, Polonia cu aproape a șasea parte din populație; zeci de milioane de strămutați; orașe întregi distruse și o curățare etnică de după război care a alungat douăsprezece milioane de germani din Europa Răsăriteană.',
        'Din război au ieșit ordinea bipolară, decolonizarea accelerată de discreditarea și epuizarea metropolelor, Organizația Națiunilor Unite și un drept internațional nou. Procesele de la Nürnberg și de la Tokyo au stabilit răspunderea penală individuală pentru crime de război, crime împotriva umanității și război de agresiune, iar pentru prima dată ascultarea de ordine a încetat să mai fie o apărare valabilă. Convenția privind genocidul din 1948 și Declarația Universală a Drepturilor Omului din același an sunt produse directe ale a ceea ce s-a descoperit la deschiderea lagărelor.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Război-fulger', definition: 'Etichetă gazetărească pentru combinația de blindate și aviație tactică din 1939 și 1940. Nu a fost o doctrină scrisă și nici nu descrie bine o armată cu tracțiune animală.' },
    { term: 'Spațiu vital', definition: 'Obiectivul expansionist nazist de a cuceri teritoriu agrar în estul Europei pentru colonizare germană, expus încă din Mein Kampf.' },
    { term: 'Planul Foametei', definition: 'Plan din 1941 pentru devierea alimentelor sovietice către Germania, asumând moartea prin înfometare a zeci de milioane de oameni.' },
    { term: 'Ordinul Comisarilor', definition: 'Directivă din iunie 1941 care cerea împușcarea comisarilor politici sovietici capturați. Anula în scris dreptul războiului.' },
    { term: 'Împrumut și Închiriere', definition: 'Program american de aprovizionare a aliaților fără plată imediată. A dat Armatei Roșii mobilitatea și alimentele pe care fabricile ei nu le produceau.' },
    { term: 'Ultra', definition: 'Informațiile obținute din citirea cifrurilor germane la Bletchley Park, pe temelia muncii anterioare a polonezilor. Decisive în bătălia Atlanticului.' },
    { term: 'Einsatzgruppen', definition: 'Unități mobile ale SS și ale poliției care au împușcat peste un milion și jumătate de oameni în est, între 1941 și 1942.' },
    { term: 'Operațiunea Reinhard', definition: 'Program de exterminare la Belzec, Sobibor și Treblinka, lagăre fără altă funcție decât uciderea deportaților la sosire.' },
    { term: 'Conferința de la Wannsee', definition: 'Reuniune din ianuarie 1942 care a coordonat administrativ Soluția Finală. Nu a hotărât genocidul, care era deja în execuție.' },
    { term: 'Soluția Finală', definition: 'Eufemism administrativ nazist pentru uciderea evreilor europeni. Folosirea lui arată limbajul birocratic cu care a fost gestionată exterminarea.' },
    { term: 'Colaboraționism', definition: 'Cooperarea guvernelor, a administrațiilor și a persoanelor cu ocupația. Fără ea, mașinăria germană nu ar fi funcționat cu trupele disponibile.' },
    { term: 'Bombardament strategic', definition: 'Atac aerian sistematic asupra spatelui frontului inamic. Discutat deopotrivă pentru eficacitatea militară și pentru moralitatea lui.' },
    { term: 'Capitulare necondiționată', definition: 'Cerință aliată formulată la Casablanca în 1943. A împiedicat o pace separată și a prelungit rezistența celor învinși.' },
    { term: 'Crimă împotriva umanității', definition: 'Categorie juridică consolidată la Nürnberg pentru fapte împotriva populației civile, dincolo de starea de război. Temelia dreptului penal internațional de mai târziu.' },
  ],
  debates: [
    {
      question: 'Cum s-a ajuns la decizia de a-i extermina pe evreii europeni?',
      positions: [
        {
          school: 'Intenționalism (Dawidowicz, 1975)',
          argument:
            'Exterminarea era conținută în ideologia nazistă de la bun început, iar declarațiile lui Hitler din 1919 încoace îngăduie reconstituirea unui scop continuu, care aștepta doar condițiile de a fi executat.',
        },
        {
          school: 'Funcționalism (Broszat, 1977; Mommsen)',
          argument:
            'Nu există ordin scris. Genocidul a rezultat dintr-o radicalizare cumulativă: concurență între instituții, eșecul planurilor de deportare și inițiative ale comandanților locali pe care Berlinul le-a ratificat ulterior.',
        },
        {
          school: 'Sinteză (Browning, 2004)',
          argument:
            'Deciziile au fost luate între vara și toamna lui 1941, în euforia victoriei așteptate în est, cu impuls de sus și propuneri de jos, care s-au întărit reciproc.',
        },
      ],
      state:
        'Sinteza lui Browning este astăzi majoritară. Discuția s-a mutat de la data deciziei la rolul periferiilor, al auxiliarilor locali și al administrațiilor ocupate.',
    },
    {
      question: 'Ce transformă un om obișnuit în executant al unui genocid?',
      positions: [
        {
          school: 'Situație și grup (Browning, 1992)',
          argument:
            'Batalionul 101 al poliției din Hamburg era format din bărbați de vârstă mijlocie fără fanatism deosebit, cu posibilitatea reală de a refuza. Presiunea grupului, ascultarea și dezumanizarea au fost de ajuns.',
        },
        {
          school: 'Cultură antisemită specifică (Goldhagen, 1996)',
          argument:
            'Hotărâtor a fost un antisemitism eliminaționist înrădăcinat în societatea germană de-a lungul mai multor generații, care a făcut din executanți voluntari convinși, nu simple rotițe.',
        },
      ],
      state:
        'Teza lui Goldhagen a fost larg criticată pentru selecția surselor și pentru că nu explică participarea auxiliarilor non-germani. Linia situaționistă predomină, nuanțată de studii despre motivația ideologică individuală.',
    },
    {
      question: 'A fost bomba atomică necesară pentru a încheia războiul din Pacific?',
      positions: [
        {
          school: 'Necesitate militară (Stimson, 1947)',
          argument:
            'Invadarea insulelor japoneze era estimată la sute de mii de pierderi aliate și la mult mai multe japoneze. Bomba a fost alternativa cea mai puțin costisitoare în vieți pentru a forța o capitulare pe care Japonia o respingea.',
        },
        {
          school: 'Diplomație atomică (Alperovitz, 1965)',
          argument:
            'Japonia era înfrântă material și căuta o mediere. Scopul real al lansării a fost condiționarea Uniunii Sovietice în lumea de după război, arătându-i noua armă.',
        },
        {
          school: 'Intrarea sovietică (Hasegawa, 2005)',
          argument:
            'Sursele japoneze arată că hotărâtoare în consiliul imperial a fost declarația de război sovietică din 8 august, care a închis ultima cale de negociere, mai mult decât efectul bombelor.',
        },
      ],
      state:
        'Cercetarea recentă tinde să explice capitularea prin combinarea celor două lovituri în trei zile. Discuția morală despre atacul deliberat asupra populației civile este independentă de cea militară și rămâne deschisă.',
    },
  ],
  sources: [
    { author: 'Roosevelt și Churchill', title: 'Carta Atlanticului', year: '1941', kind: 'primaria', note: 'Principiile lumii de după război, formulate înainte de intrarea americană în conflict. Temelia ideologică a Organizației Națiunilor Unite.' },
    { author: 'Înaltul Comandament german', title: 'Directive privind tratamentul comisarilor politici', year: '1941', kind: 'primaria', note: 'Caracterul criminal al războiului din est, ordonat în scris înainte de primul foc de armă.' },
    { author: 'Reinhard Heydrich și alții', title: 'Protocolul conferinței de la Wannsee', year: '1942', kind: 'primaria', note: 'Coordonarea administrativă a exterminării, cu recensământul populației evreiești din toată Europa, inclusiv cea neutră.' },
    { author: 'Emanuel Ringelblum și arhiva Oneg Shabat', title: 'Cronica ghetoului din Varșovia', year: '1940–1943', kind: 'primaria', note: 'Arhivă clandestină îngropată în bidoane de lapte. Documentație produsă de victime chiar în timp ce se petrecea.' },
    { author: 'Jan Karski', title: 'Povestea unui stat clandestin', year: '1944', kind: 'primaria', note: 'Raportul unui curier al rezistenței poloneze care a intrat în ghetou și a dus vestea la Londra și la Washington.' },
    { author: 'Marc Bloch', title: 'Ciudata înfrângere', year: '1946', kind: 'primaria', note: 'Analiza prăbușirii franceze din 1940, scrisă de un istoric care a fost ofițer și care a fost mai târziu împușcat de Gestapo.' },
    { author: 'Primo Levi', title: 'Mai este oare acesta un om?', year: '1947', kind: 'primaria', note: 'Mărturie de la Auschwitz și reflecție asupra zonei gri dintre victime și executanți.' },
    { author: 'Anne Frank', title: 'Jurnalul', year: '1947', kind: 'primaria', note: 'Persecuția văzută din ascunzătoarea unei adolescente din Amsterdam. Document personal și nereprezentativ, și tocmai de aceea prețios.' },
    { author: 'Tribunalul Militar Internațional', title: 'Actele procesului de la Nürnberg', year: '1945–1946', kind: 'primaria', note: 'Sursă masivă despre mașinăria regimului și actul de naștere al dreptului penal internațional modern.' },
    { author: 'Vasili Grossman', title: 'Caiete de război și Viață și destin', year: '1945 și 1960', kind: 'primaria', note: 'Corespondent la Stalingrad și primul ziarist care a descris un lagăr de exterminare. Romanul său a fost confiscat de KGB.' },
    { author: 'Organizația Națiunilor Unite', title: 'Convenția pentru prevenirea și reprimarea crimei de genocid', year: '1948', kind: 'primaria', note: 'Categorie juridică formulată de Raphael Lemkin pornind de la ce s-a petrecut între 1939 și 1945.' },
    { author: 'Raul Hilberg', title: 'Distrugerea evreilor europeni', year: '1961', kind: 'estudio', note: 'Operă fondatoare: reconstituie procesul birocratic al exterminării pornind de la documentația germană.' },
    { author: 'Gar Alperovitz', title: 'Atomic Diplomacy', year: '1965', kind: 'estudio', note: 'Formulează teza revizionistă despre motivele diplomatice ale lansării bombelor.' },
    { author: 'Robert Paxton', title: 'Franța de la Vichy', year: '1972', kind: 'estudio', note: 'Demonstrează cu arhive germane că Vichy a avut inițiativă proprie. A obligat la rescrierea memoriei franceze a războiului.' },
    { author: 'John Dower', title: 'War Without Mercy', year: '1986', kind: 'estudio', note: 'Rasismul reciproc din războiul Pacificului și efectul lui asupra purtării ambelor tabere.' },
    { author: 'Christopher Browning', title: 'Oameni obișnuiți', year: '1992', kind: 'estudio', note: 'Studiu al Batalionului 101 de poliție: cum au devenit executanți niște oameni obișnuiți care aveau posibilitatea de a refuza.' },
    { author: 'Omer Bartov', title: 'Hitlers Wehrmacht', year: '1991', kind: 'estudio', note: 'Demontează mitul Wehrmachtului curat, arătând implicarea lui în războiul ideologic din est.' },
    { author: 'Richard Overy', title: 'De ce au câștigat aliații', year: '1995', kind: 'estudio', note: 'Susține că victoria nu a fost automată prin superioritate materială: a trebuit organizată și transformată în forță utilă.' },
    { author: 'David Glantz și Jonathan House', title: 'Ciocnirea titanilor', year: '1995', kind: 'estudio', note: 'Reconstituirea frontului de est cu arhive sovietice, împotriva relatării bazate pe memoriile generalilor germani.' },
    { author: 'Tsuyoshi Hasegawa', title: 'Racing the Enemy', year: '2005', kind: 'estudio', note: 'Lucrează cu surse japoneze, sovietice și americane și pune greutatea decisivă pe intrarea sovietică din august 1945.' },
    { author: 'Timothy Snyder', title: 'Tărâmul morții', year: '2010', kind: 'estudio', note: 'Așază Holocaustul în spațiul unde s-au suprapus politicile de exterminare germană și sovietică.' },
    { author: 'Antony Beevor', title: 'Al Doilea Război Mondial', year: '2012', kind: 'estudio', note: 'Sinteză narativă globală, care integrează teatrul european și cel asiatic într-o singură relatare.' },
    { author: 'Saul Friedländer', title: 'Al Treilea Reich și evreii', year: '1997–2007', kind: 'estudio', note: 'Istorie integrată, care îmbină documentația făptașilor cu vocile victimelor.' },
  ],
  documents: [
    {
      section: 5,
      title: 'Procesul-verbal al conferinței de la Wannsee',
      text: [
        'În locul emigrării a apărut acum, cu aprobarea prealabilă a Führerului, ca altă soluție posibilă, evacuarea evreilor către Est.',
        'În cursul soluției finale, evreii vor fi duși la muncă în Est, în coloane despărțite pe sexe. O mare parte dintre ei va dispărea prin scădere naturală.',
        'Restul, care va alcătui fără îndoială partea cea mai rezistentă, va trebui tratat în consecință, fiindcă reprezintă o selecție naturală și ar putea deveni, dacă ar fi eliberat, sămânța unei noi reconstrucții evreiești.',
      ].join('\n\n'),
      source: 'Procesul-verbal al Conferinței de la Wannsee, Berlin, 20 ianuarie 1942.',
      note: 'Versiune proprie după germană. A supraviețuit una dintre cele treizeci de copii, găsită în 1947.',
      question: 'Documentul este administrativ și nu pomenește cuvântul ucidere. Ce rol are acest limbaj? Uită-te la cine participă la ședință: nu sunt militari, sunt funcționari și juriști.',
    },
  ],
  images: [
    {
      alt: 'Soldați care coboară dintr-o barcă cu rampa deschisă și înaintează cu apa până la brâu spre plajă',
      caption: 'Debarcarea pe plaja Omaha, 6 iunie 1944, fotografiată de Robert F. Sargent.',
    },
    {
      alt: 'Fotografia unui oraș ras de pe fața pământului: fațade goale, moloz pe străzi și nicio clădire intactă',
      caption: 'Stalingradul după bătălie, 1943. Frontul de est a concentrat cea mai mare parte a pierderilor militare germane din tot războiul.',
    },
    {
      alt: 'Fotografia unui peron cu sute de oameni tocmai coborâți dintr-un tren, despărțiți de gardieni în două rânduri',
      caption: 'Selecția pe rampa de la Auschwitz-Birkenau, 1944, din așa-numitul Album de la Auschwitz. Sunt fotografii făcute de SS: aproape toată mărturia vizuală a exterminării vine de la autorii ei.',
    },
    {
      alt: 'Fotografie aeriană a unei coloane de fum în formă de ciupercă, ridicându-se mult deasupra stratului de nori',
      caption: 'Norul de deasupra Hiroshimei, 6 august 1945. Dacă bombele au fost necesare pentru a încheia războiul rămâne obiect de discuție istoriografică.',
    },
  ],
  questions: [
    {
      question: 'De ce se îndoiesc astăzi istoricii militari de termenul război-fulger?',
      options: [
        'Fiindcă, în realitate, campaniile din 1939 și 1940 au fost foarte lente',
        'Fiindcă o asemenea doctrină nu exista în manualele germane, iar o bună parte din armată se deplasa pe jos și cu tracțiune animală',
        'Fiindcă a fost inventat de sovietici în 1943',
        'Fiindcă s-a aplicat doar pe frontul din Pacific',
      ],
      explanation: 'Eticheta a fost gazetărească. Succesul inițial a depins la fel de mult de greșelile adversarului ca de inovația proprie.',
    },
    {
      question: 'Ce explică mai bine înfrângerea franceză din 1940?',
      options: [
        'Inferioritatea numerică și calitativă a tancurilor franceze',
        'O prăbușire a comenzii: tancuri împrăștiate prin diviziile de infanterie, doctrină defensivă și ruperea frontului prin Ardeni',
        'Lipsa sprijinului militar britanic pe continent',
        'Capitularea imediată a armatei după declararea războiului',
      ],
      explanation: 'Franța avea mai multe tancuri decât Germania și mai bine blindate. Marc Bloch, ofițer și istoric, a lăsat cea mai bună autopsie a dezastrului.',
    },
    {
      question: 'Ce prevedea Planul Foametei, elaborat în 1941?',
      options: [
        'Raționalizarea alimentelor în orașele germane',
        'Devierea alimentelor sovietice către Germania, asumând moartea prin înfometare a zeci de milioane de oameni',
        'Cumpărarea de grâu din Statele Unite prin Împrumut și Închiriere',
        'Blocada navală a porturilor britanice',
      ],
      explanation: 'Este anterior invaziei, la fel ca Ordinul Comisarilor: războiul din est a fost criminal prin proiect.',
    },
    {
      question: 'Care a fost urmarea strategică a atacului asupra Pearl Harbor?',
      options: [
        'Distrugerea portavioanelor americane din Pacific',
        'Un succes tactic care nu a prins portavioanele și a făcut din Statele Unite un beligerant',
        'Cucerirea imediată a Hawaiului de către Japonia',
        'Semnarea unui armistițiu între Japonia și Statele Unite',
      ],
      explanation: 'Germania a declarat război Statelor Unite patru zile mai târziu, ceea ce a pecetluit formarea Marii Alianțe.',
    },
    {
      question: 'Ce rol a avut Ultra în bătălia Atlanticului?',
      options: [
        'A fost numele de cod al programului de construcție a escortelor',
        'A fost informația obținută din citirea cifrurilor germane, decisivă pentru devierea convoaielor',
        'A fost radarul de suprafață montat pe submarinele germane',
        'A fost planul de bombardare a bazelor de submarine din Franța',
      ],
      explanation: 'A fost obținută la Bletchley Park pornind de la munca anterioară a criptografilor polonezi și s-a combinat cu escorte, aviație cu rază lungă și radar.',
    },
    {
      question: 'Ce parte din pierderile sale mortale a suferit Wehrmacht pe frontul de est?',
      options: [
        'În jur de un sfert',
        'În jur de jumătate',
        'În jur de optzeci la sută',
        'Practic niciuna până în 1944',
      ],
      explanation: 'Orice relatare care așază centrul de greutate al războiului european în Normandia falsifică scara efortului militar.',
    },
    {
      question: 'Ce a fost operațiunea Bagration din 1944?',
      options: [
        'Debarcarea aliată din sudul Franței',
        'Ofensiva sovietică ce a distrus Grupul de Armate Centru, un dezastru german mai mare decât Stalingradul',
        'Planul german de contraatac din Ardeni',
        'Campania de bombardare a rafinăriilor românești',
      ],
      explanation: 'A fost pusă intenționat în același timp cu Normandia și a arătat maturitatea artei operative sovietice, cu inducere strategică în eroare și exploatare în adâncime.',
    },
    {
      question: 'Ce susține așa-numitul mit al Wehrmachtului curat și de ce a fost demontat?',
      options: [
        'Că armata germană nu a luptat în est, ceea ce contrazic pierderile',
        'Că armata regulată a acționat în afara crimelor SS, când de fapt a participat la foametea planificată, la tratamentul criminal al prizonierilor și la represalii',
        'Că Wehrmacht i s-a împotrivit lui Hitler din 1938',
        'Că generalii lui au plănuit atentatul din iulie 1944',
      ],
      explanation: 'Mitul a fost creat de memorii de după război, scrise de ofițeri care căutau să se dezvinovățească. Cercetarea de după anii optzeci l-a desființat.',
    },
    {
      question: 'Ce a demonstrat Robert Paxton despre regimul de la Vichy?',
      options: [
        'Că a fost un scut care a apărat Franța de o ocupație mai rea',
        'Că a avut inițiativă politică proprie și a legiferat împotriva evreilor înainte să i se ceară',
        'Că nu a avut nicio autoritate efectivă asupra teritoriului',
        'Că a colaborat doar în chestiuni economice',
      ],
      explanation: 'A lucrat cu arhive germane în 1972, iar cartea lui a obligat la rescrierea memoriei franceze a războiului.',
    },
    {
      question: 'Ce au fost Einsatzgruppen?',
      options: [
        'Unitățile de propagandă ale armatei germane',
        'Unități mobile ale SS și ale poliției care au împușcat peste un milion și jumătate de oameni în est',
        'Batalioanele de muncă forțată din lagărele de concentrare',
        'Brigăzile antipartizani create în 1944',
      ],
      explanation: 'Au acționat sat cu sat între 1941 și 1942, sprijinite de batalioane de poliție și de auxiliari locali. Babi Yar este cazul cel mai cunoscut.',
    },
    {
      question: 'Ce a hotărât cu adevărat conferința de la Wannsee din ianuarie 1942?',
      options: [
        'A ordonat pentru prima dată exterminarea evreilor europeni',
        'A coordonat administrativ, între instituții, un proces de exterminare deja în curs',
        'A aprobat mutarea evreilor germani în Madagascar',
        'A instituit sistemul de ghetouri din Polonia',
      ],
      explanation: 'Împușcările în masă din est se executau deja de o jumătate de an. Wannsee este o ședință de coordonare birocratică, nu de decizie.',
    },
    {
      question: 'Care este astăzi explicația majoritară privind decizia de exterminare?',
      options: [
        'Un plan scris și datat în 1933',
        'Decizii luate între vara și toamna lui 1941, cu impuls de sus și propuneri de jos',
        'Un ordin dat de Himmler fără știrea lui Hitler',
        'O improvizație de după înfrângerea de la Stalingrad',
      ],
      explanation: 'Este sinteza lui Browning între intenționaliști și funcționaliști, iar discuția s-a mutat spre rolul periferiilor și al auxiliarilor locali.',
    },
    {
      question: 'Ce a conchis Christopher Browning studiind Batalionul 101 de poliție?',
      options: [
        'Că membrii lui erau fanatici, aleși după trecutul lor în partid',
        'Că niște oameni obișnuiți, cu posibilitatea reală de a refuza, au devenit ucigași din presiunea grupului, ascultare și dezumanizare',
        'Că unitatea a refuzat în bloc să participe la împușcări',
        'Că au participat doar auxiliari non-germani',
      ],
      explanation: 'Goldhagen a răspuns punând totul pe seama unui antisemitism eliminaționist specific german, teză mult criticată pentru selecția surselor.',
    },
    {
      question: 'Ce efect militar a avut campania de bombardament strategic asupra Germaniei?',
      options: [
        'A oprit producția de război germană încă din 1942',
        'A deviat artilerie, avioane de vânătoare și industrie spre apărarea teritoriului și a distrus producția de combustibil sintetic',
        'Nu a avut niciun efect asupra efortului de război german',
        'A provocat prăbușirea imediată a moralului civil',
      ],
      explanation: 'Producția a continuat să crească până în 1944, dar lipsa de combustibil a fost cea care a paralizat în cele din urmă Luftwaffe și blindatele.',
    },
    {
      question: 'Potrivit lui Hasegawa, ce a cântărit mai mult în hotărârea Japoniei de a capitula?',
      options: [
        'Bombardamentul incendiar asupra orașului Tokyo din martie 1945',
        'Declarația de război sovietică din 8 august, care a închis calea unei medieri negociate',
        'Blocada submarină americană',
        'Pierderea Okinawei',
      ],
      explanation: 'Cercetarea recentă tinde să explice capitularea prin combinarea bombelor cu intrarea sovietică, în trei zile.',
    },
    {
      question: 'Ce principiu juridic a stabilit procesul de la Nürnberg?',
      options: [
        'Răspunderea colectivă a poporului german',
        'Răspunderea penală individuală pentru crime de război și împotriva umanității, fără ca ascultarea de ordine să fie o apărare',
        'Interzicerea bombardării orașelor',
        'Despăgubirea obligatorie a statelor ocupate',
      ],
      explanation: 'De aici derivă Convenția privind genocidul din 1948 și dreptul penal internațional de mai târziu.',
    },
    {
      question: 'Ce a fost politica de conciliere?',
      options: [
        'Alianța militară dintre Franța și URSS împotriva Germaniei, în 1935',
        'Strategia britanică și franceză de a ceda în fața cerințelor lui Hitler ca să evite un nou război',
        'Dezarmarea voluntară a Germaniei după Versailles',
        'Neutralitatea Statelor Unite în războiul din Spania',
      ],
      explanation: 'Momentul ei culminant a fost München, în 1938, când Chamberlain și Daladier i-au predat lui Hitler regiunea sudetă. S-a încheiat când Germania a ocupat restul Cehoslovaciei, în martie 1939.',
    },
    {
      question: 'De ce a fost decisiv pactul germano-sovietic din august 1939?',
      options: [
        'Fiindcă Stalin a promis că trimite trupe împotriva Franței',
        'Fiindcă a silit Italia să intre în război',
        'Fiindcă, neutralizând URSS și împărțind Polonia în secret, Hitler nu se mai temea de un război pe două fronturi',
        'Fiindcă a pus capăt războiului civil din Spania',
      ],
      explanation: 'Semnat de Ribbentrop și Molotov la 23 august, a precedat cu nouă zile invadarea Poloniei. La 17 septembrie, Armata Roșie a ocupat partea de răsărit a țării.',
    },
    {
      question: 'Ce rol a avut criza din 1929 pe drumul către război?',
      options: [
        'Niciunul: Germania a ieșit din criză înaintea tuturor',
        'A prăbușit economia germană, a aruncat în sus șomajul și a dat naziștilor voturile care i-au adus la putere',
        'A silit Marea Britanie să se reînarmeze imediat',
        'A provocat căderea lui Mussolini',
      ],
      explanation: 'Cu șase milioane de șomeri în 1932, partidul nazist a trecut de la 2,6 % din voturi în 1928 la 37 % în iulie 1932. Hitler a fost numit cancelar în ianuarie 1933.',
    },
  ],
}
