import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/revolucion-rusa.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 14 date, 14 concepte, 3 dezbateri, 24 de surse, un
   document comentat, 5 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const revolucionRusaRo: TopicTranslation = {
  title: 'Revoluția rusă și URSS',
  description: 'De la prăbușirea țarismului la statul stalinist: cum a luat puterea un partid minoritar și ce a clădit cu ea.',
  years: '1905–1953',
  summary:
    'În februarie 1917, regimul care cârmuise Rusia vreme de trei secole s-a prăbușit în cinci zile, fără ca vreun partid să îl doboare. În octombrie, un partid care în ianuarie abia număra douăzeci și patru de mii de membri a luat puterea în capitală și a păstrat-o șaptezeci și patru de ani. Între cele două date sunt o criză de război, o putere dublă care nu guverna și o radicalizare socială pe care bolșevicii au citit-o mai bine decât oricine. Ce a urmat nu era scris nicăieri: război civil, teroare, o cotitură în 1928 care a colectivizat satul cu forța și o industrializare care a prefăcut o țară agrară în puterea ce a oprit Wehrmachtul, cu prețul a milioane de morți. Deschiderea arhivelor sovietice după 1991 nu a închis dezbaterea, dar a schimbat cifrele și a mutat întrebările.',
  keyDates: [
    { date: '9 ianuarie 1905', event: 'Duminica sângeroasă: garda trage într-o manifestație pașnică ce ducea o petiție către țar.' },
    { date: 'Octombrie 1905', event: 'Grevă generală, primul soviet din Petersburg și Manifestul din Octombrie, cu făgăduiala unei Dume.' },
    { date: '1906–1911', event: 'Reformele agrare ale lui Stolîpin: proprietate individuală țărănească în locul comunei sătești.' },
    { date: 'Februarie 1917', event: 'Manifestații pentru pâine la Petrograd, răscoala garnizoanei și abdicarea lui Nicolae al II-lea.' },
    { date: 'Aprilie 1917', event: 'Tezele din aprilie: Lenin refuză să sprijine guvernul provizoriu și cere toată puterea sovietelor.' },
    { date: '25 octombrie 1917', event: 'Comitetul Militar Revoluționar ocupă punctele-cheie din Petrograd. Decretele despre pace și despre pământ.' },
    { date: 'Ianuarie 1918', event: 'Desființarea cu forța a Adunării Constituante, unde socialiștii revoluționari aveau majoritatea.' },
    { date: '1918–1921', event: 'Război civil, comunism de război, teroare roșie și intervenție străină.' },
    { date: 'Martie 1921', event: 'Răscoala de la Kronstadt și cotitura spre Noua Politică Economică.' },
    { date: 'Decembrie 1922', event: 'Întemeierea Uniunii Republicilor Sovietice Socialiste.' },
    { date: '1928–1932', event: 'Primul plan cincinal, colectivizarea forțată și dekulakizarea.' },
    { date: '1932–1933', event: 'Foamete în Ucraina, Kazahstan și pe Volga. Între cinci și șapte milioane de morți.' },
    { date: '1936–1938', event: 'Marea Teroare: procesele de la Moscova, operațiunile de masă și aproape șapte sute de mii de execuții.' },
    { date: '1941–1945', event: 'Război împotriva Germaniei. URSS suferă vreo douăzeci și șapte de milioane de morți și iese superputere.' },
  ],
  sections: [
    {
      title: 'Țarismul și repetiția din 1905',
      body: [
        'La începutul secolului XX, Rusia era o autocrație fără parlament, cu o poliție politică, o Biserică de stat și un țar care cârmuia prin drept divin. Era totodată al cincilea producător industrial al lumii, cu fabrici uriașe și moderne, îngrămădite în câteva orașe, finanțate cu capital francez și belgian și ridicate printr-o politică anume a lui Serghei Witte. Această îmbinare de politică învechită și economie grăbită este punctul de plecare al tuturor celorlalte.',
        'Satul era problema cea mare. Dezrobirea din 1861 îi eliberase pe iobagi îndatorându-i cu plăți de răscumpărare și lăsând pământul în mâinile comunei, mirul, care împărțea loturile și împiedica orice îmbunătățire. Cu o populație care creștea repede, dorința țărănească era simplă și fără rest: tot pământul celui care îl lucrează. Niciun guvern nu i-a dat ascultare până când a făcut-o un decret din 1917, care s-a mărginit să legalizeze ce făceau deja țăranii.',
        'Înfrângerea în fața Japoniei, în 1905, a dezlănțuit prima revoluție. Duminica sângeroasă din ianuarie a rupt legătura simbolică dintre țar și popor; au urmat greve, răscoale, un consiliu muncitoresc la Petersburg, care a inventat forma sovietului, și o grevă generală în octombrie. Nicolae al II-lea a cedat prin Manifestul din Octombrie, care făgăduia libertăți și o Dumă aleasă, și și-a luat înapoi terenul de îndată ce a trecut primejdia: legile fundamentale din 1906 îi păstrau țarului guvernarea, iar legea electorală din 1907 a ciuntit dreptul de vot.',
        'Piotr Stolîpin a îmbinat represiunea cu reforma. Pariul lui agrar urmărea crearea unei clase de proprietari țărani care să sprijine regimul, desființând comuna și înlesnind lotul individual. Avea nevoie, cum a spus el însuși, de douăzeci de ani de liniște. A avut șapte și un asasinat, în 1911. În 1914, procesul era la jumătate și produsese deopotrivă proprietari noi și resentiment comunal.',
        'Războiul a făcut restul. Cincisprezece milioane de mobilizați, un transport feroviar prăbușit, o inflație care înghițea salariile, orașe fără pâine deși era grâu la țară și o curte discreditată de Rasputin și de hotărârea țarului de a lua el însuși comanda armatei, care l-a făcut răspunzător direct de fiecare înfrângere.',
      ].join('\n\n'),
      callout:
        'Sovietul nu l-a inventat niciun partid: a apărut în 1905 ca un comitet de grevă ales în fabrici. În 1917 era deja o formă la îndemână, pe care oamenii știau să o folosească.',
    },
    {
      title: 'Februarie: un regim care cade singur',
      body: [
        'Revoluția din februarie 1917 a început ca un protest pentru pâine la Petrograd, la 23 februarie pe stil vechi, ziua internațională a femeii muncitoare. În patru zile grevele s-au generalizat, iar faptul hotărâtor a fost că garnizoana capitalei, alcătuită din recruți care se temeau să nu fie trimiși pe front, a refuzat să tragă și a trecut de partea manifestanților. Fără o armată ascultătoare, autocrația a încetat să existe. Nicolae al II-lea a abdicat la 2 martie, fratele lui a refuzat coroana, iar trei secole de dinastie s-au încheiat fără ca vreun partid revoluționar să fi condus ceva.',
        'Ce s-a ivit a fost o putere dublă. Pe de o parte guvernul provizoriu, alcătuit din deputați liberali ai Dumei, cu legitimitate legală și fără niciun control asupra străzii. Pe de alta, sovietul din Petrograd, ales în fabrici și în regimente, cu autoritate reală și cu o conducere menșevică și socialistă revoluționară care nu voia să guverneze, din convingere teoretică: socotea că unei revoluții burgheze îi este pe potrivă un guvern burghez.',
        'Ordinul numărul 1 al sovietului, din martie, arată această împărțire: le cerea unităților să asculte de guvern doar dacă ordinele lui nu se împotriveau celor ale sovietului și să aleagă comitete de soldați. A fost cel mai mare transfer de autoritate al anului și a desființat disciplina armatei de jos în sus.',
        'Guvernul provizoriu a adunat hotărâri amânate și una care nu putea fi amânată: continuarea războiului. A ținut angajamentele față de aliați, a pornit ofensiva din iunie, care a eșuat, și a trimis la o viitoare Adunare Constituantă reforma agrară pe care țăranii o făceau deja pe socoteala lor. Fiecare amânare îi rodea temelia.',
        'Încercarea de lovitură de stat a generalului Kornilov, în august, a lichidat ce mai rămăsese. Kerenski a trebuit să îi înarmeze pe muncitorii din Petrograd și să elibereze bolșevici închiși ca să o oprească; lovitura s-a destrămat prin împotrivirea ceferiștilor și a telegrafiștilor, dar guvernul a rămas complice în ochii stângii și trădător în ochii dreptei. În septembrie, bolșevicii aveau majoritatea în sovietele din Petrograd și din Moscova.',
      ].join('\n\n'),
    },
    {
      title: 'Octombrie și întrebarea despre natura lui',
      body: [
        'Lenin s-a întors din exil în aprilie și a rupt cu linia propriului partid, prin Tezele din aprilie: niciun sprijin pentru guvernul provizoriu, toată puterea sovietelor, pace imediată, pământ țăranilor și control muncitoresc. Lozinca era simplă, se potrivea cu ce cereau oamenii și îi așeza pe bolșevici drept singura forță care nu împărțea răspunderea guvernării.',
        'Luarea puterii, la 25 octombrie, a fost înfăptuită de Comitetul Militar Revoluționar al sovietului din Petrograd, condus de Troțki, cu unități care au ocupat gări, centrale telefonice, poduri și, în cele din urmă, Palatul de Iarnă. Au fost puțini morți și puțină împotrivire. Congresul Sovietelor, adunat în acea noapte, a întărit faptul împlinit și a adoptat decretele despre pace și despre pământ, în timp ce menșevicii și socialiștii revoluționari de dreapta părăseau sala.',
        'De aici pornește cea mai veche dezbatere a temei. Richard Pipes a susținut că a fost o lovitură de stat a unei minorități conspirative, dusă la capăt cu măiestrie tehnică și fără mandat popular, și că violența de mai apoi era cuprinsă în acea lipsă de legitimitate de la obârșie. Alexander Rabinowitch a răspuns cu un studiu amănunțit al organizațiilor bolșevice de bază din Petrograd, care arată un partid mai puțin monolitic și mult mai primitor față de presiunea membrilor săi și a comitetelor de fabrică.',
        'Istoriografia socială a întărit a doua citire fără să o nege pe prima. Steve Smith și Diane Koenker au documentat radicalizarea de sine stătătoare a muncitorilor și a soldaților de-a lungul anului 1917: bolșevicii au crescut fiindcă programul lor s-a potrivit cu niște cereri care existau deja. Orlando Figes împacă ambele planuri: a fost o revoluție socială adâncă și a fost, înăuntrul ei, o luare minoritară a puterii, care s-a impus celorlalte forțe socialiste.',
        'Dovada a venit în ianuarie 1918. Alegerile pentru Adunarea Constituantă, singurele cu adevărat libere din Rusia modernă, le-au dat socialiștilor revoluționari în jur de patruzeci la sută și bolșevicilor vreo douăzeci și patru. Adunarea s-a întrunit o zi și a fost desființată de gardă. Acel act definește regimul care se clădea mai bine decât orice declarație de principii.',
      ].join('\n\n'),
      callout:
        'Bolșevicii au câștigat sovietele din orașe și au pierdut alegerile generale: satul a votat socialist revoluționar. Desființarea Adunării a fost urmarea logică a acestei nepotriviri.',
    },
    {
      title: 'Război civil, teroare și retragerea NEP',
      body: [
        'Războiul civil din 1918-1921 a pus față în față Armata Roșie, organizată de Troțki cu ofițeri țariști supravegheați de comisari, și niște armate albe dezbinate, sprijinite de paisprezece puteri străine și fără vreun program agrar de oferit țărănimii. Au mai fost și armate verzi țărănești, care s-au luptat cu amândouă. Roșii au câștigat prin controlul centrului industrial și feroviar, prin unitatea de comandă și fiindcă întoarcerea pământului la moșieri, adică tocmai ce reprezentau albii, era de neprimit pentru cei mai mulți săteni.',
        'Teroarea a fost un instrument limpede. Ceka, creată în decembrie 1917, a primit, după atentatul împotriva lui Lenin din 1918, ordinul unei terori roșii sistematice, cu ostatici, execuții sumare și lagăre de concentrare. Teroarea albă a fost la fel de brutală și a adăugat pogromuri care au ucis zeci de mii de evrei în Ucraina. Deosebirea hotărâtoare nu a fost cruzimea, ci faptul că una dintre tabere a instituționalizat-o pe a ei și a păstrat-o după ce a câștigat.',
        'Comunismul de război a naționalizat industria, a desființat piața, a militarizat munca și a rechiziționat grâul țărănesc prin detașamente înarmate. Îmbinat cu seceta, a produs foametea din 1921 și 1922, cu vreo cinci milioane de morți și cu o acțiune internațională de ajutorare condusă de Herbert Hoover. Țăranii au răspuns semănând mai puțin și răsculându-se: Tambovul a fost un război în toată regula.',
        'Răscoala de la Kronstadt, în martie 1921, a fost avertismentul de pe urmă, fiindcă au făcut-o marinari care fuseseră mândria anului 1917 și care cereau soviete fără bolșevici. A fost zdrobită pe gheață și, totodată, primită în fond: același congres al partidului a adoptat Noua Politică Economică, care a înlocuit rechiziția cu un impozit în natură și a dat înapoi pieței comerțul cu amănuntul și industria mică.',
        'NEP a mers din punct de vedere economic și a creat o contradicție politică. Producția agrară și-a revenit, au apărut negustori particulari și țărani înstăriți, iar o parte a partidului a văzut în asta o restaurație capitalistă. Același congres care a adoptat-o a interzis fracțiunile în partid, așa încât dezbaterea internă s-a închis tocmai când era mai multă nevoie de ea. Această îmbinare explică o bună parte din ce s-a petrecut după moartea lui Lenin, în 1924.',
      ].join('\n\n'),
    },
    {
      title: 'Marea cotitură: colectivizare, planuri și teroare',
      body: [
        'Stalin a ajuns la putere din postul de secretar general, o funcție administrativă care ținea numirile, și a câștigat succesiunea aliindu-se pe rând cu unii și cu alții: mai întâi împotriva lui Troțki, cu doctrina socialismului într-o singură țară, apoi împotriva lui Zinoviev și Kamenev și, în cele din urmă, împotriva lui Buharin și a celor care voiau prelungirea NEP. Chestiunea de fond era de unde aveau să vină resursele pentru industrializarea unei țări agrare și înconjurate de dușmani.',
        'Răspunsul a fost marea cotitură din 1928. Primul plan cincinal a fixat obiective industriale nemăsurate, iar colectivizarea forțată a satului trebuia să asigure grâul pentru hrănirea orașelor și pentru export. Între 1929 și 1933, aproape toată țărănimea a fost băgată în colhozuri, iar dekulakizarea a deportat milioane de oameni socotiți țărani înstăriți. Lynne Viola a documentat împotrivirea uriașă pe care a stârnit-o: sabotaje, tăierea vitelor, răzmerițe și răscoale ale femeilor.',
        'Rezultatul imediat a fost o foamete, în 1932 și 1933, cu între cinci și șapte milioane de morți în Ucraina, Kazahstan, pe Volga și în Caucazul de Nord. Dacă aceea a fost un genocid îndreptat împotriva ucrainenilor, Holodomorul, este una dintre cele mai încărcate discuții ale istoriografiei. Robert Conquest, Anne Applebaum și Timothy Snyder subliniază măsurile luate anume împotriva Ucrainei, precum închiderea frontierelor pentru țăranii înfometați și listele negre de sate. R. W. Davies și Stephen Wheatcroft, lucrând pe arhivele de planificare, susțin că a fost rezultatul catastrofal al unei politici de rechiziții aplicate cu brutalitate în toată țara. Ambele tabere sunt de acord că putea fi evitată și că deciziile care au înrăutățit-o sunt documentate.',
        'Industrializarea și-a atins, în schimb, o bună parte din obiective. S-au ridicat complexe întregi, precum Magnitogorsk, producția de oțel, cărbune și mașini s-a înmulțit, șomajul a dispărut, iar milioane de țărani au devenit muncitori la oraș, cu acces la alfabetizare și la promovare. Stephen Kotkin a descris acea trăire drept o civilizație cu limbajul și cu felurile ei de viață, în care oamenii învățau să vorbească bolșevic ca să se poată mișca în sistem, fără ca asta să însemne nici adeziune, nici simplă prefăcătorie.',
        'Marea Teroare, între 1936 și 1938, a îmbinat procesele publice împotriva vechii gărzi bolșevice cu operațiuni de masă mult mai puțin cunoscute și mult mai ucigătoare, duse pe cote împotriva foștilor culaci, a clericilor, a infractorilor și a minorităților naționale, mai ales polonezi și germani. Arhivele dau o cifră de vreo șase sute optzeci de mii de execuții în doi ani și de circa un milion trei sute de mii de condamnări. Gulagul a ajuns să adăpostească peste două milioane de deținuți deodată, cu o mortalitate care a sărit în sus în timpul războiului.',
      ].join('\n\n'),
      callout:
        'Procesele de la Moscova au fost partea văzută. Operațiunile de masă pe cote, îndreptate împotriva unor categorii întregi de populație, au ucis mult mai mulți oameni și nu au fost cunoscute până la deschiderea arhivelor.',
    },
    {
      title: 'Bilanțul unui experiment',
      body: [
        'Deschiderea arhivelor de după 1991 a lămurit unele chestiuni și a deschis altele. A lămurit cifrele: estimările maxime din Războiul Rece, care ajungeau să vorbească de douăzeci de milioane de morți numai în Gulag, nu se susțin, iar cifrele documentate rămân uriașe. A deschis, în schimb, problema felului în care funcționa cu adevărat sistemul, cu denunțuri între vecini, inițiativă locală, cote regionale depășite și o implicare socială mult mai largă decât cea a unei simple mașinării de sus în jos.',
        'De aici discuția dintre modelul totalitar clasic, care explică stalinismul prin voința unui aparat și a unui dictator, și curentul revizionist al Sheilei Fitzpatrick și al lui J. Arch Getty, care studiază societatea sovietică de jos în sus, cu conflictele, prilejurile și strategiile ei de supraviețuire. Caricatura după care revizioniștii ar micșora represiunea nu rezistă la citirea cărților lor; aportul lor a fost să arate că un regim poate fi deodată extrem de violent și înrădăcinat social.',
        'Cealaltă întrebare lungă este cea a continuității. Pentru Pipes și Martin Malia, stalinismul era cuprins în leninism: partid unic, teroare instituționalizată, desființarea opoziției socialiste și a pluralismului din partid. Pentru Moshe Lewin și Stephen Cohen a fost o ruptură ivită din războiul civil, din înapoierea satului și din înfrângerea alternativei lui Buharin. Discuția rămâne deschisă fiindcă amândouă descriu bucăți diferite ale aceluiași drum.',
        'Bilanțul material este contradictoriu și trebuie ținute amândouă jumătățile. URSS a trecut de la o țară agrară la a doua putere industrială, a alfabetizat aproape toată populația, a întins sănătatea publică, a promovat milioane de oameni de obârșie țărănească și a dat femeilor acces în masă la învățătură și la muncă calificată, fără a atinge însă împărțirea treburilor casnice. Cu această temelie a câștigat războiul pe frontul care a hotărât conflictul în Europa, cu douăzeci și șapte de milioane de morți.',
        'Și toate acestea s-au făcut cu un preț pe care niciun bilanț nu îl poate compensa aritmetic: milioane de morți de foame, deportări de popoare întregi, un arhipelag de lagăre, uciderea celor mai mulți dintre revoluționarii lui 1917 și închiderea oricărei dezbateri. Modelul a fost exportat mai apoi în jumătate de Europă și în China, iar discreditarea lui de mai târziu explică o bună parte din politica secolului XX. Discursul secret al lui Hrușciov, din 1956, a deschis prima crăpătură din interior, iar odată cu ea a început altă istorie.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Autocrație', definition: 'Sistemul țarist, fără parlament și fără răspundere ministerială. Duma din 1906 l-a îngrădit pe hârtie și foarte puțin în fapt.' },
    { term: 'Mir', definition: 'Comuna țărănească, ce împărțea din când în când pământul între membrii ei. Stolîpin a încercat să o desființeze ca să creeze proprietari individuali.' },
    { term: 'Soviet', definition: 'Consiliu ales în fabrici, regimente și sate. Apare în 1905 ca un comitet de grevă, iar în 1917 este forma de organizare aflată la îndemână.' },
    { term: 'Putere dublă', definition: 'Conviețuirea, între februarie și octombrie 1917, a guvernului provizoriu, cu legitimitate legală, și a sovietului din Petrograd, cu autoritate reală.' },
    { term: 'Ordinul numărul 1', definition: 'Dispoziția sovietului din martie 1917: ascultare față de guvern doar dacă nu se împotrivește sovietului și alegerea unor comitete de soldați.' },
    { term: 'Tezele din aprilie', definition: 'Programul lui Lenin din 1917: niciun sprijin pentru guvernul provizoriu, toată puterea sovietelor, pace, pământ și control muncitoresc.' },
    { term: 'Adunarea Constituantă', definition: 'Parlament ales în singurele alegeri libere din Rusia modernă, cu majoritate socialistă revoluționară. Desființat cu forța în ianuarie 1918.' },
    { term: 'Comunism de război', definition: 'Naționalizare totală, desființarea pieței, militarizarea muncii și rechiziționarea grâului, între 1918 și 1921.' },
    { term: 'Ceka', definition: 'Poliția politică înființată în decembrie 1917. A dus la capăt teroarea roșie, cu ostatici, execuții sumare și primele lagăre.' },
    { term: 'NEP', definition: 'Noua Politică Economică din 1921: impozit în natură în loc de rechiziție și întoarcerea pieței în comerțul cu amănuntul și în industria mică.' },
    { term: 'Socialismul într-o singură țară', definition: 'Doctrină apărată de Stalin împotriva revoluției permanente a lui Troțki: clădirea socialismului în URSS fără a aștepta revoluția mondială.' },
    { term: 'Dekulakizare', definition: 'Deportarea și deposedarea țăranilor socotiți înstăriți, în timpul colectivizării din 1929-1933.' },
    { term: 'Holodomor', definition: 'Numele ucrainean al foametei din 1932-1933. Socotirea ei drept genocid îndreptat împotriva Ucrainei este obiect de dezbatere istoriografică și politică.' },
    { term: 'Operațiuni de masă', definition: 'Faza mai puțin văzută și mai ucigătoare a Marii Terori: arestări și execuții pe cote, împotriva unor categorii sociale și minorități naționale întregi.' },
  ],
  debates: [
    {
      question: 'A fost Octombrie o revoluție sau o lovitură de stat?',
      positions: [
        {
          school: 'Lovitură a unei minorități (Pipes, 1990)',
          argument:
            'O organizație conspirativă a luat puterea cu precizie tehnică și fără mandat popular, așa cum o dovedește desființarea Adunării Constituante de îndată ce a pierdut alegerile.',
        },
        {
          school: 'Revoluție de jos (Rabinowitch, 1976; Smith)',
          argument:
            'Bolșevicii au crescut fiindcă programul lor se potrivea cu cereri deja existente ale muncitorilor și ale soldaților, iar partidul era mult mai puțin monolitic și mai permeabil la baza lui decât lasă să se creadă imaginea conspirativă.',
        },
        {
          school: 'Amândouă (Figes, 1996)',
          argument:
            'A fost o revoluție socială adâncă, la sate și în fabrici, iar înăuntrul ei o luare minoritară a puterii, care s-a impus celorlalte forțe socialiste.',
        },
      ],
      state:
        'Istoriografia socială a împins deoparte versiunea pur conspirativă, fără a șterge faptul că puterea a fost luată și păstrată împotriva rezultatului de la urne.',
    },
    {
      question: 'Era stalinismul cuprins în leninism?',
      positions: [
        {
          school: 'Continuitate (Pipes, Malia)',
          argument:
            'Partidul unic, teroarea instituționalizată, desființarea celorlalte partide socialiste și interzicerea fracțiunilor interne în 1921 sunt opera lui Lenin. Stalin a dezvoltat un aparat care exista deja.',
        },
        {
          school: 'Ruptură din împrejurări (Lewin, Cohen)',
          argument:
            'Războiul civil, înapoierea satului și izolarea internațională au deformat proiectul. Alternativa lui Buharin, treptată și întemeiată pe NEP, era cu putință și a fost înfrântă politic.',
        },
        {
          school: 'Civilizație și practică (Kotkin, 1995)',
          argument:
            'Întrebarea genealogică contează mai puțin decât înțelegerea felului în care se trăia și se vorbea înăuntrul sistemului: stalinismul a fost un fel de viață, cu limbajul și cu regulile lui de urcare.',
        },
      ],
      state:
        'Rămâne deschisă fiindcă fiecare poziție descrie o bucată diferită a aceluiași proces. Arhivele au întărit atenția dată practicii de zi cu zi, mai mult decât genealogiei doctrinare.',
    },
    {
      question: 'A fost foametea din 1932-1933 un genocid?',
      positions: [
        {
          school: 'Genocid național (Conquest, 1986; Applebaum, 2017; Snyder, 2010)',
          argument:
            'Au fost măsuri luate anume împotriva Ucrainei: închiderea frontierelor pentru țăranii care fugeau, liste negre de sate, rechiziții înăsprite și represiune, în același timp, a elitei culturale ucrainene.',
        },
        {
          school: 'Catastrofa unei politici generale (Davies și Wheatcroft, 2004)',
          argument:
            'Arhivele de planificare arată o politică de rechiziții aplicată cu brutalitate pe tot teritoriul, cu foamete și în Kazahstan și pe Volga, și fără un plan documentat de exterminare națională.',
        },
      ],
      state:
        'Ambele poziții sunt de acord că putea fi evitată și că deciziile care au înrăutățit-o sunt documentate. Neînțelegerea este despre intenție și despre aplicarea categoriei juridice de genocid și are, pe deasupra, o dimensiune politică de azi.',
    },
  ],
  sources: [
    { author: 'Nicolae al II-lea', title: 'Manifestul din Octombrie', year: '1905', kind: 'primaria', note: 'Libertăți și o Dumă, date sub presiunea grevei generale. Ciuntite de îndată ce a trecut primejdia.' },
    { author: 'Sovietul din Petrograd', title: 'Ordinul numărul 1', year: '1917', kind: 'primaria', note: 'Comitete de soldați și ascultare condiționată față de guvern. Cel mai mare transfer de autoritate din 1917.' },
    { author: 'V. I. Lenin', title: 'Tezele din aprilie', year: '1917', kind: 'primaria', note: 'Ruptura cu linia propriului partid și programul care definește poziția bolșevică până în octombrie.' },
    { author: 'Congresul Sovietelor', title: 'Decretul despre pace și decretul despre pământ', year: '1917', kind: 'primaria', note: 'Decretul agrar a legalizat împărțirea pe care țăranii o făceau deja pe socoteala lor.' },
    { author: 'John Reed', title: 'Zece zile care au zguduit lumea', year: '1919', kind: 'primaria', note: 'Cronica unui martor implicat. Sursă vie și părtinitoare, folositoare dacă este citită ca atare.' },
    { author: 'V. I. Lenin', title: 'Scrisoare către congres, numită testamentul', year: '1922–1923', kind: 'primaria', note: 'Portrete critice ale posibililor săi urmași și cererea de a-l scoate pe Stalin din secretariatul general.' },
    { author: 'Emma Goldman', title: 'My Disillusionment in Russia', year: '1923', kind: 'primaria', note: 'Critică anarhistă scrisă din interior, după Kronstadt. Contrapunct revoluționar la adresa regimului.' },
    { author: 'Lev Troțki', title: 'Istoria Revoluției ruse', year: '1930', kind: 'primaria', note: 'Relatarea principalului organizator al lui Octombrie, scrisă deja în exil și împotriva lui Stalin.' },
    { author: 'URSS', title: 'Constituția din 1936', year: '1936', kind: 'primaria', note: 'Text formal plin de garanții, adoptat în ajunul Marii Terori. Document esențial despre distanța dintre normă și practică.' },
    { author: 'Nikita Hrușciov', title: 'Discursul secret la Congresul al XX-lea', year: '1956', kind: 'primaria', note: 'Prima denunțare oficială a cultului personalității și a represiunii, din chiar interiorul sistemului.' },
    { author: 'Nadejda Mandelștam', title: 'Fără speranță', year: '1970', kind: 'primaria', note: 'Amintirea terorii din viața de zi cu zi a unei familii persecutate.' },
    { author: 'Aleksandr Soljenițîn', title: 'Arhipelagul Gulag', year: '1973', kind: 'primaria', note: 'Reconstituirea sistemului de lagăre din mărturii. Document moral hotărâtor, nu o statistică de încredere.' },
    { author: 'Robert Conquest', title: 'Marea Teroare', year: '1968', kind: 'estudio', note: 'Prima sinteză a represiunii anilor treizeci, fără acces la arhive. Cifrele lui maxime au fost îndreptate; tabloul lui general a rezistat.' },
    { author: 'Alexander Rabinowitch', title: 'The Bolsheviks Come to Power', year: '1976', kind: 'estudio', note: 'Studiu al organizațiilor bolșevice din Petrograd, care demontează imaginea unui partid monolitic.' },
    { author: 'Sheila Fitzpatrick', title: 'Revoluția rusă', year: '1982', kind: 'estudio', note: 'Sinteză revizionistă care tratează anii 1917-1938 ca un singur proces și ia în seamă mobilitatea socială.' },
    { author: 'Robert Conquest', title: 'The Harvest of Sorrow', year: '1986', kind: 'estudio', note: 'Formulează teza foametei ca armă îndreptată împotriva țărănimii ucrainene.' },
    { author: 'Richard Pipes', title: 'Revoluția rusă', year: '1990', kind: 'estudio', note: 'Interpretarea lui Octombrie ca lovitură minoritară și a terorii ca urmare a acelei lipse de legitimitate de la obârșie.' },
    { author: 'Stephen Kotkin', title: 'Magnetic Mountain', year: '1995', kind: 'estudio', note: 'Magnitogorsk ca microcosmos: stalinismul ca civilizație și ca limbaj care trebuia învățat.' },
    { author: 'Orlando Figes', title: 'Revoluția rusă: tragedia unui popor', year: '1996', kind: 'estudio', note: 'Narațiune largă, care îmbină revoluția socială cu luarea minoritară a puterii.' },
    { author: 'Lynne Viola', title: 'Peasant Rebels under Stalin', year: '1996', kind: 'estudio', note: 'Documentează împotrivirea uriașă a țăranilor față de colectivizare, inclusiv răscoalele femeilor.' },
    { author: 'J. Arch Getty și Oleg Naumov', title: 'The Road to Terror', year: '1999', kind: 'estudio', note: 'Documente interne ale partidului despre mecanica represiunii și despre dinamica ei birocratică.' },
    { author: 'R. W. Davies și Stephen Wheatcroft', title: 'The Years of Hunger', year: '2004', kind: 'estudio', note: 'Reconstituire de arhivă a foametei, pornind de la datele de planificare și de colectare.' },
    { author: 'Timothy Snyder', title: 'Tărâmul morții', year: '2010', kind: 'estudio', note: 'Așază foametea și teroarea în cadrul comun al violențelor de masă din Europa de Est.' },
    { author: 'S. A. Smith', title: 'Russia in Revolution', year: '2017', kind: 'estudio', note: 'Sinteză actuală a anilor 1890-1928, cu stadiul chestiunii după trei decenii de arhive deschise.' },
  ],
  documents: [
    {
      section: 1,
      title: 'Lenin fixează direcția la întoarcerea din exil',
      text: [
        'Nicio concesie apărării revoluționare. A încheia războiul cu o pace cu adevărat democratică este cu neputință fără răsturnarea capitalului.',
        'Particularitatea clipei de față în Rusia stă în trecerea de la prima etapă a revoluției, care a dat puterea burgheziei, la a doua ei etapă, care trebuie să pună puterea în mâinile proletariatului și ale țăranilor săraci.',
        'Nu o republică parlamentară, ci o republică a Sovietelor de deputați muncitori, argați și țărani, în toată țara, de jos în sus.',
      ].join('\n\n'),
      source: 'V. I. Lenin, Tezele din aprilie, publicate în Pravda la 7 aprilie 1917.',
      note: 'Versiune proprie și prescurtată după rusă.',
      question: 'Lenin rupe cu poziția aproape întregii stângi ruse a acelui moment, care sprijinea Guvernul Provizoriu. Ce avantaj îi dă programul lui într-o țară în război și flămândă?',
    },
  ],
  images: [
    {
      alt: 'Mulțime împrăștiindu-se în goană pe un bulevard larg în timp ce se aud focuri de armă, cu trupuri și obiecte pe caldarâm',
      caption: 'Împrăștierea cu focuri de armă a unei manifestații pe bulevardul Nevski din Petrograd, iulie 1917.',
    },
    {
      alt: 'Lenin în picioare pe o tribună de lemn, aplecat înainte, vorbind unei mulțimi',
      caption: 'Lenin la Moscova, 1920. Fotografia a fost retușată mai apoi, ca să fie șters Troțki de la piciorul tribunei.',
    },
    {
      alt: 'Pictură a unui om uriaș cu un steag roșu imens, înaintând pe deasupra acoperișurilor unui oraș plin de lume',
      caption: 'Bolșevicul, de Boris Kustodiev (1920). Pictat din interiorul revoluției și cu o ambiguitate care a dat mult de discutat.',
    },
    {
      alt: 'Portret fotografic al unui bărbat cu ochelari rotunzi, barbișon și tunică militară',
      caption: 'Troțki, organizatorul Armatei Roșii. A pierdut lupta pentru succesiune, a fost exclus în 1929 și asasinat în 1940; chipul lui a fost șters din fotografiile oficiale.',
    },
    {
      alt: 'Portret fotografic al unui bărbat cu mustață groasă și tunică militară încheiată, pe jumătate de corp',
      caption: 'Stalin. Cotitura din 1928-1929 a industrializat URSS cu o iuțeală fără precedent și a costat milioane de morți, prin foamete și represiune.',
    },
  ],
  questions: [
    {
      question: 'Ce a fost mirul în Rusia dinainte de 1917?',
      options: [
        'Parlamentul ales, dat în 1905',
        'Comuna țărănească, ce împărțea din când în când pământul între membrii ei',
        'Poliția politică a regimului țarist',
        'Sindicatul muncitorilor metalurgiști din Petrograd',
      ],
      explanation: 'Împiedica orice îmbunătățire individuală și susținea dorința colectivă de pământ. Stolîpin a încercat să îl desființeze ca să creeze proprietari care să sprijine regimul.',
    },
    {
      question: 'Care a fost noutatea de organizare ivită în revoluția din 1905?',
      options: [
        'Partidul bolșevic',
        'Duma imperială',
        'Sovietul, consiliu ales în fabrici',
        'Colhozul agricol',
      ],
      explanation: 'S-a născut ca un comitet de grevă la Petersburg. În 1917 era deja o formă la îndemână, pe care muncitorii și soldații știau să o folosească fără ca cineva să le-o impună.',
    },
    {
      question: 'Ce fapt s-a dovedit hotărâtor pentru izbânda revoluției din februarie 1917?',
      options: [
        'Sosirea lui Lenin la Petrograd',
        'Refuzul garnizoanei din Petrograd de a trage în manifestanți',
        'Înfrângerea militară din ofensiva de la iunie',
        'Desființarea Dumei de către țar',
      ],
      explanation: 'Fără o armată ascultătoare, autocrația a încetat să existe. Niciun partid revoluționar nu a condus acele zile.',
    },
    {
      question: 'În ce consta puterea dublă dintre februarie și octombrie 1917?',
      options: [
        'În împărțirea atribuțiilor între țar și Dumă',
        'În conviețuirea guvernului provizoriu, cu legitimitate legală, și a sovietului din Petrograd, cu autoritate reală',
        'În împărțirea țării între zone roșii și albe',
        'În guvernarea împreună a bolșevicilor și a menșevicilor',
      ],
      explanation: 'Conducerea menșevică și socialistă revoluționară a sovietului nu voia să guverneze: susținea că unei revoluții burgheze îi este pe potrivă un guvern burghez.',
    },
    {
      question: 'Ce stabilea Ordinul numărul 1 al sovietului din Petrograd?',
      options: [
        'Naționalizarea imediată a băncilor',
        'Ieșirea Rusiei din război, fără condiții',
        'Ascultarea față de guvern doar dacă nu se împotrivea sovietului, și alegerea unor comitete de soldați',
        'Convocarea imediată a Adunării Constituante',
      ],
      explanation: 'A fost cel mai mare transfer de autoritate al anului: a desființat disciplina armatei de jos în sus.',
    },
    {
      question: 'Ce propunea Lenin în Tezele din aprilie?',
      options: [
        'Sprijin critic pentru guvernul provizoriu până la Adunarea Constituantă',
        'Niciun sprijin pentru guvern, toată puterea sovietelor, pace, pământ și control muncitoresc',
        'Colectivizarea imediată a agriculturii',
        'O coaliție a tuturor partidelor socialiste',
      ],
      explanation: 'Rupea cu linia propriului partid și îi lăsa pe bolșevici drept singura forță fără răspundere de guvernare.',
    },
    {
      question: 'Ce urmare a avut încercarea de lovitură de stat a lui Kornilov, în august 1917?',
      options: [
        'L-a întărit pe Kerenski ca arbitru între dreapta și stânga',
        'A silit la înarmarea muncitorilor din Petrograd și a lăsat guvernul discreditat în ochii ambelor tabere',
        'A dus la ieșirea imediată a Rusiei din război',
        'A restabilit disciplina în armata de pe front',
      ],
      explanation: 'În septembrie, bolșevicii aveau deja majoritatea în sovietele din Petrograd și din Moscova.',
    },
    {
      question: 'Ce rezultat au dat alegerile pentru Adunarea Constituantă din noiembrie 1917?',
      options: [
        'Majoritate absolută bolșevică',
        'Egalitate între bolșevici și menșevici',
        'Majoritate socialistă revoluționară, cu bolșevicii la vreo un sfert din voturi',
        'Majoritate a partidelor liberale',
      ],
      explanation: 'Au fost singurele alegeri cu adevărat libere din Rusia modernă. Adunarea s-a întrunit o zi și a fost desființată de gardă.',
    },
    {
      question: 'De ce au câștigat roșii războiul civil?',
      options: [
        'Prin superioritatea lor numerică și de armament, încă din prima clipă',
        'Prin sprijinul militar al puterilor occidentale',
        'Prin controlul centrului industrial și feroviar, prin unitatea de comandă și fiindcă albii nu ofereau nimic țărănimii',
        'Fiindcă armatele verzi țărănești au luptat alături de ei',
      ],
      explanation: 'Întoarcerea pământului la moșieri, adică tocmai ce reprezentau albii, era de neprimit pentru cei mai mulți săteni.',
    },
    {
      question: 'Ce a caracterizat comunismul de război din 1918-1921?',
      options: [
        'Înlocuirea rechiziției cu un impozit în natură',
        'Naționalizarea totală, desființarea pieței și rechiziționarea cu arma a grâului',
        'Deschiderea către capitalul străin pentru refacerea industriei',
        'Predarea fabricilor unor cooperative muncitorești autonome',
      ],
      explanation: 'Îmbinat cu seceta, a produs foametea din 1921 și 1922, cu vreo cinci milioane de morți.',
    },
    {
      question: 'Ce legătură a fost între Kronstadt și NEP, în 1921?',
      options: [
        'Răscoala a fost zdrobită și, totodată, primită în fond: același congres a adoptat cotitura economică',
        'NEP a fost adoptată ca răsplată pentru loialitatea marinarilor din Kronstadt',
        'Răscoala a izbândit și a impus sfârșitul partidului unic',
        'Nu a fost nicio legătură între cele două fapte',
      ],
      explanation: 'Marinarii cereau soviete fără bolșevici. Același congres a interzis, pe deasupra, fracțiunile în partid.',
    },
    {
      question: 'Din ce poziție și-a clădit Stalin puterea?',
      options: [
        'De la comanda Armatei Roșii',
        'De la conducerea Internaționalei Comuniste',
        'De la secretariatul general, o funcție administrativă care ținea numirile',
        'De la președinția sovietului din Moscova',
      ],
      explanation: 'A câștigat succesiunea aliindu-se pe rând împotriva lui Troțki, apoi împotriva lui Zinoviev și Kamenev și, la urmă, împotriva lui Buharin.',
    },
    {
      question: 'Ce a fost marea cotitură din 1928?',
      options: [
        'Semnarea pactului germano-sovietic',
        'Părăsirea NEP pentru planul cincinal și colectivizarea forțată a satului',
        'Desființarea Internaționalei Comuniste',
        'Adoptarea Constituției din 1936',
      ],
      explanation: 'Chestiunea de fond era de unde aveau să vină resursele pentru industrializarea unei țări agrare și izolate. Răspunsul a fost grâul țărănesc.',
    },
    {
      question: 'În ce sunt de acord cele două poziții din dezbaterea despre foametea din 1932-1933?',
      options: [
        'În aceea că a fost urmarea exclusivă a secetei',
        'În aceea că putea fi evitată și că deciziile care au înrăutățit-o sunt documentate',
        'În aceea că a atins doar Ucraina',
        'În aceea că numărul morților este cu neputință de estimat',
      ],
      explanation: 'Neînțelegerea dintre Conquest sau Applebaum și Davies sau Wheatcroft este despre intenție și despre aplicarea categoriei de genocid.',
    },
    {
      question: 'Ce a dat la iveală deschiderea arhivelor despre Marea Teroare din 1936-1938?',
      options: [
        'Că procesele de la Moscova au fost grosul represiunii',
        'Că operațiunile de masă pe cote, împotriva unor categorii sociale și naționale întregi, au ucis mult mai mulți oameni decât procesele publice',
        'Că nu au fost execuții sistematice în afara armatei',
        'Că cifrele din Războiul Rece au fost mult prea mici',
      ],
      explanation: 'Arhivele dau vreo șase sute optzeci de mii de execuții în doi ani. Operațiunile de masă nu au fost cunoscute până în 1991.',
    },
    {
      question: 'Ce a adus curentul revizionist al lui Fitzpatrick și Getty în studiul stalinismului?',
      options: [
        'Dovada că represiunea a fost mult mai mică decât s-a denunțat',
        'Studiul societății de jos în sus, arătând că un regim poate fi deodată extrem de violent și înrădăcinat social',
        'Teza că Stalin nu controla aparatul partidului',
        'Punerea terorii exclusiv pe seama autorităților locale',
      ],
      explanation: 'Denunțurile între vecini, inițiativa locală și cotele regionale depășite explică o implicare socială mult mai largă decât cea a unei mașinării pur descendente.',
    },
  ],
}
