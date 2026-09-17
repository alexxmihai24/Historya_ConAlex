import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/grecia.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 15 date, 12
   concepte, 3 dezbateri, 11 surse, un document comentat, 4 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const greciaRo: TopicTranslation = {
  title: 'Grecia arhaică și clasică',
  description: 'Polisul, născocirea politicii, democrația ateniană și marginile ei.',
  years: 'c. 800–323 î.Hr.',
  summary:
    'Grecia nu a fost niciodată un stat. A fost un arhipelag de sute de obști politice de sine stătătoare ce împărtășeau limbă, panteon și sanctuare, și care se întreceau și se războiau între ele necurmat. Această fărâmițare nu e o lipsă de lămurit, ci starea din care a ieșit contribuția ei cea mai aparte: ideea că puterea poate fi supusă unei dezbateri publice între oameni deopotrivă, și că regulile obștii sunt o făcătură omenească, nu o poruncă dumnezeiască.',
  keyDates: [
    { date: 'c. 1200–1100 î.Hr.', event: 'Prăbușirea lumii miceniene; începe așa-numita Epocă Întunecată.' },
    { date: 'c. 800 î.Hr.', event: 'Primirea alfabetului fenician și alcătuirea polisului; poemele homerice.' },
    { date: 'c. 750–550 î.Hr.', event: 'Marea colonizare: întemeieri de la Marea Neagră până în Iberia.' },
    { date: '621 î.Hr.', event: 'Legile lui Dracon la Atena.' },
    { date: '594 î.Hr.', event: 'Reformele lui Solon: desființarea sclaviei pentru datorii.' },
    { date: '561–510 î.Hr.', event: 'Tirania Pisistratizilor la Atena.' },
    { date: '508/507 î.Hr.', event: 'Reformele lui Clistene: se naște democrația ateniană.' },
    { date: '490 î.Hr.', event: 'Maraton: înfrângerea primei debarcări persane.' },
    { date: '480–479 î.Hr.', event: 'Termopile, Salamina și Platea; sfârșitul năvălirii lui Xerxes.' },
    { date: '478 î.Hr.', event: 'Întemeierea Ligii de la Delos, mai apoi imperiul atenian.' },
    { date: '461–429 î.Hr.', event: 'Hegemonia politică a lui Pericle; clădirea Partenonului din 447.' },
    { date: '431–404 î.Hr.', event: 'Războiul peloponesiac; înfrângerea finală a Atenei.' },
    { date: '399 î.Hr.', event: 'Judecarea și osândirea lui Socrate.' },
    { date: '338 î.Hr.', event: 'Chaeroneea: Filip al II-lea al Macedoniei își impune hegemonia.' },
    { date: '323 î.Hr.', event: 'Moartea lui Alexandru cel Mare; sfârșitul convențional al perioadei clasice.' },
  ],
  sections: [
    {
      title: 'De la prăbușirea miceniană la polis',
      body: [
        'Pe la 1200 î.Hr. s-au surpat palatele miceniene, cu scrierea lor silabică (Linear B), cu birocrația lor de redistribuire și cu economia lor rânduită din centru. Prăbușirea a fost parte din surparea generală a Epocii Bronzului Târziu în Mediterana răsăriteană. Grecia a pierdut scrisul vreo patru veacuri, și odată cu el, administrația de palat: nu sunt arhive, nici lucrări mari, nici comerț pe distanțe lungi asemănător.',
        'Din acea neîntrerupere a ieșit ceva deosebit. Când obștile s-au rânduit din nou, nu au clădit iarăși palate: au clădit poleis. Un polis nu e pur și simplu un oraș; e o obște de cetățeni — un trup politic — cu teritoriul lui (chora), cu agora lui, cu cultele și instituțiile lui. Aristotel a spus-o limpede: polisul e o obște de cetățeni, nu un loc. De aceea grecii spuneau „atenienii”, și nu „Atena”, când vorbeau despre hotărâri politice.',
        'Recăpătarea scrisului a fost tot atât de grăitoare. Grecii au primit alfabetul fenician pe la secolul IX-VIII î.Hr., dar au adus o schimbare hotărâtoare: au dat semne vocalelor. Urmarea a fost un sistem de vreo douăzeci și patru de litere, învățat în săptămâni și nu în ani, spre deosebire de suta bună de semne ale cuneiformei sau ale hieroglifelor. Această ieftinire a alfabetizării a avut urmări politice: legile puteau fi puse în scris și cercetate de oricine.',
        'Marea colonizare (c. 750-550 î.Hr.) a dus întemeieri grecești de la Marea Neagră până în sudul Franței și pe coasta iberică — Emporion, actuala Empúries, printre ele. Pricinile ei au fost mai ales agrare: lipsă de pământ de arat (stenochoria), apăsare demografică și certuri dinăuntru. Fiecare colonie era, chiar de la întemeiere, un polis de sine stătător, nu o stăpânire a metropolei: o însușire ce o deosebește din temelie de colonialismul modern.',
      ].join('\n\n'),
      callout:
        'Aristotel îl definește pe om ca zoon politikon: viețuitorul ce trăiește în polis. Tălmăcirea „animal politic” pierde nuanța: nu înseamnă îndrăgostit de politică, ci neputincios să se împlinească în afara unei obști de cetățeni.',
    },
    {
      title: 'Criza arhaică: hopliți, datorii și legiuitori',
      body: [
        'Secolele al VII-lea și al VI-lea î.Hr. au fost de încordare obștească aspră. Strângerea pământului în mâini aristocratice și obiceiul împrumutului cu garanție personală au zămislit o mulțime de țărani îndatorați ce puteau sfârși robiți chiar de creditorii lor. Criza e mărturisită de poemele lui Solon și de Hesiod, ale cărui Munci și zile descriu de jos asprimea țărănimii și părtinirea „regilor mâncători de daruri”.',
        'Deodată s-a prefăcut și războiul. Falanga hoplitică — rânduială închisă de pedestrași cu scut rotund, suliță și platoșă — a înlocuit lupta de unul singur a campionilor aristocrați. Puterea ei atârna de strânsoare: fiecare om apăra cu scutul lui flancul drept al vecinului. Hopliții își plăteau singuri uneltele, ceea ce îi așeza într-o pătură cu stare, dar nu aristocrată.',
        'Așa-numita „teză hoplitică”, formulată de Aristotel și dezvoltată de istorici moderni, susține că cei ce luptau în falangă au sfârșit prin a cere parte politică pe măsura contribuției lor militare. Critica de mai încoace — Hans van Wees și Kurt Raaflaub — a pus la îndoială deopotrivă cronologia și legătura ei ca de la sine: falanga s-a alcătuit treptat, iar multe poleis cu armată hoplitică au rămas oligarhii.',
        'Răspunsul la criză au fost legiuitorii și tiranii. Dracon (621 î.Hr.) a pus legile în scris, și deși asprimea lui a făcut proverbial adjectivul „draconic”, chiar simpla dare pe față a legii mărginea samavolnicia judecătorilor aristocrați. Solon (594 î.Hr.) a mers mai departe: a șters datoriile de-atunci (seisachtheia), a oprit robirea pentru datorii a cetățenilor atenieni, și a rânduit partea politică după venitul agrar, nu după naștere. A fost o reformă după avere, nu democratică, dar a rupt monopolul neamului.',
        'Tirania greacă arhaică nu se potrivește cu înțelesul modern al cuvântului. Tiranii erau de obicei aristocrați ce luau puterea în afara legii, sprijinindu-se pe nemulțumirea poporului. Pisistratizii de la Atena au încurajat sărbători obștești, lucrări publice și culte cetățenești ce, în chip ciudat, au slăbit rețelele clientelare ale nobilimii și au pregătit terenul pentru democrație.',
      ].join('\n\n'),
    },
    {
      title: 'Democrația ateniană: mecanica și întinderea ei',
      body: [
        'Reformele lui Clistene din 508/507 î.Hr. au rânduit din nou trupul cetățenesc pe o temelie înadins meșteșugită. A înlocuit cele patru triburi tradiționale de rudenie cu zece triburi noi, fiecare alcătuită din demoi din trei zone deosebite ale Aticii — țărm, oraș și interior. Țelul era să rupă credințele regionale și clientelare: unitatea politică a ajuns demosul de reședință, iar cetățenii au început să se numească după demoticul lor, nu după neamul lor.',
        'Sistemul ieșit de-aici se sprijinea pe trei organe. Ekklesia, adunarea deschisă tuturor cetățenilor bărbați, se întrunea vreo patruzeci de ori pe an pe Pnyx și hotăra legi, război, pace și finanțe. Boulé, sfat de cinci sute de membri aleși prin tragere la sorți, pregătea ordinea de zi și purta de grijă administrației de fiecare zi. Judecătoriile poporului (Heliea), cu juri de sute de cetățeni de asemenea traseri la sorți, judecau fără judecători de meserie.',
        'Însușirea cea mai străină de simțirea noastră e tragerea la sorți. Pentru greci, alegerea era o rânduială aristocratică — o alegi pe cei mai buni sau pe cei mai cunoscuți — pe când tragerea la sorți era rânduiala democratică, fiindcă asigura o egalitate adevărată a accesului la dregătorie. Numai locurile ce cereau meșteșug tehnic, ca și comanda oștii (strategii), se ocupau prin alegere; și nu e o întâmplare că tocmai strategia a fost dregătoria de unde a cârmuit Pericle de fapt zeci de ani.',
        'De la Pericle încolo s-a rânduit misthophoria, o plată pentru purtarea dregătoriilor și pentru mersul la judecătorii. Măsura e hotărâtoare: fără plată, numai cei cu stare își puteau îngădui să dea zile politicii. Aristotel arată tocmai asta ca pe mecanismul ce a făcut adevărată, și nu doar de formă, participarea săracilor.',
        'Marginile sistemului sunt tot atât de însemnate ca și mecanismele lui. Cetățenia îi lăsa afară pe femei, pe meteci (străini cu reședință, mulți dintre ei bogați și așezați de generații) și pe sclavi. Socotelile cele mai primite pentru Atena secolului al V-lea dau între 30.000 și 60.000 de cetățeni bărbați dintr-o populație totală de între 250.000 și 300.000 de suflete: între 10% și 20% din total. Iar legea cetățeniei a lui Pericle (451 î.Hr.), care cerea mamă și tată atenieni, a mărginit și mai mult accesul.',
      ].join('\n\n'),
      callout:
        'Ostracismul îngăduia surghiunirea zece ani a unui cetățean fără să fie învinuit de vreo faptă, printr-un vot cu cioburi de lut ars. Era un mecanism de preîntâmpinare împotriva strângerii puterii, nu o pedeapsă: surghiunitul își păstra avuția.',
    },
    {
      title: 'Sparta: neobișnuirea ce a fermecat tradiția',
      body: [
        'Sparta a fost, încă din Antichitate, ținta unei idealizări statornice pe care istoricii o numesc „mirajul spartan”. Icoana unei obști aspre, deopotrivă și desăvârșit de statornică vine în bună parte de la autori admiratori și din afară — Xenofon, Plutarh scriind veacuri mai târziu — și din lipsa izvoarelor spartane proprii, fiindcă orașul nu a zămislit aproape nicio literatură, nici documente.',
        'Aparta ei adevărată era din temelie. Sparta a supus Mesenia vecină și a prefăcut poporul ei în iloți: o mulțime robită legată de pământ, avuție obștească a statului, nu a unor persoane anume. Iloții îi întreceau cu mult la număr pe spartiați, și țineau cu munca lor dedicarea militară deplină a acestora. Sistemul cerea o asuprire necurmată: eforii vesteau oficial război iloților în fiecare an, iar kryptéia trimitea tineri spartiați să-i ucidă pe alese pe iloții cei mai de seamă.',
        'Educația de stat (agogé) îi lua pe copii de la familiile lor la șapte ani și îi supunea unei pregătiri obștești de rezistență, de disciplină și de ascultare. Rânduiala politică îmbina doi regi din moștenire, un sfat de bătrâni (gerusía), o adunare cu puțină putere de a porni ceva și cinci efori cu puteri largi de control anual.',
        'Femeile spartane se bucurau de o poziție neobișnuită în lumea greacă: primeau pregătire fizică, puteau avea și moșteni pământuri, iar în vremea elenistică Aristotel socotea că stăpâneau aproape două cincimi din teritoriu. Aristotel îl socotea o lipsă a rânduielii; pentru istoric, e o știre despre urmările unui sistem în care bărbații trăiau aproape în cazarmă.',
        'Punctul orb al idealizării e cel demografic. Egalitatea aspră a loturilor de pământ s-a roasă prin moșteniri și strângere, iar numărul spartiaților cu drepturi depline s-a prăbușit: de la vreo 8.000 în războaiele medice la puțin peste o mie în secolul al IV-lea. Înfrângerea în fața Tebei la Leuctra (371 î.Hr.) și eliberarea Meseniei ce a urmat au lichidat temelia economică a sistemului. Sparta nu a căzut din decădere morală, ci din istovirea trupului ei de cetățeni.',
      ].join('\n\n'),
    },
    {
      title: 'Războaiele medice, imperiul și războiul peloponesiac',
      body: [
        'Războaiele medice au pus față în față o mulțime de poleis cu Imperiul persan ahemenid între 490 și 479 î.Hr. Biruința greacă — Maraton, Salamina, Platea — a avut o urmare de identitate uriașă: a întărit împotrivirea de idee dintre „greci” și „barbari”, care mai înainte era mult mai puțin limpede, și i-a dat Atenei o faimă și o flotă hotărâtoare.',
        'Din acea flotă s-a născut Liga de la Delos (478 î.Hr.), alianță de apărare cu vistierie comună pe insula Delos. Prefacerea ei e unul dintre procesele cel mai bine documentate de schimbare a unei alianțe într-un imperiu: Atena a mutat vistieria pe Acropole în 454 î.Hr., a impus phoros drept tribut, a înăbușit cu armata secesiunile (Naxos, Thasos, Samos), a așezat garnizoane și coloniști, și i-a silit pe aliați să se judece în judecătorii ateniene. Tucidide o spune fără înconjur: era o tiranie.',
        'Plata Partenonului din banii Ligii arată bine încordarea. Marile lucrări de clădire ale lui Pericle, pe care azi le citim ca vârf al artei clasice, au fost plătite în parte din tributul cetăților aliate și criticate atunci tocmai pentru asta.',
        'Războiul peloponesiac (431-404 î.Hr.) a pus față în față Atena maritimă și democratică cu Sparta de uscat și oligarhică. Tucidide dă o lămurire a pricinilor ce rămâne un model de cercetare: pricina adevărată a fost creșterea puterii ateniene și frica pe care a stârnit-o la Sparta, pe când întâmplările de la Corcira și Potideea au fost doar prilejuri. Deosebirea dintre pricina adâncă și prilejul de îndată e una dintre contribuțiile de temelie ale metodei istoriografiei.',
        'Războiul a fost nimicitor. Ciuma din 430-426 î.Hr. a omorât poate o treime din poporul atenian, Pericle inclus. Dialogul din Melos, unde atenienii îndreptățesc nimicirea unui oraș nepărtinitor cu argumentul că „cei tari fac ce pot, iar cei slabi rabdă ce trebuie”, e textul cel mai citat despre logica puterii goale. Expediția în Sicilia (415-413 î.Hr.) a nimicit flota și armata ateniană. Înfrângerea din urmă, în 404 î.Hr., a adus scurta tiranie a Celor Treizeci și, după restaurarea democrației, judecarea lui Socrate în 399 î.Hr.',
      ].join('\n\n'),
      callout:
        'Tucidide spune că scrie „o avuție pentru totdeauna”, nu o piesă de întrecere. Lepădarea lui de lămurirea supranaturală și luarea lui aminte la interese și la frică îl fac întemeietorul cercetării politice.',
    },
    {
      title: 'Gândire, teatru și moștenirea discutabilă',
      body: [
        'Filozofia greacă s-a născut în coloniile ionice cu o întrebare cosmologică: din ce e făcută lumea și de ce se schimbă. Thales, Anaximandru și Heraclit au căutat principii firești fără să apeleze la zei. Întorsătura hotărâtoare a venit cu sofiștii și cu Socrate, care au mutat întrebarea spre cele omenești: dreptatea, virtutea, legea, cea mai bună rânduială.',
        'Sofiștii au fost dascăli călători ce învățau retorica pe bani, lucru fără de care nu se putea în societăți unde puterea se exercita vorbind în adunare și în judecătorii. Protagoras a formulat relativismul cel mai citat al Antichității — „omul e măsura tuturor lucrurilor” —, iar deosebirea dintre physis (fire) și nomos (înțelegere) a îngăduit pentru întâia oară să se întrebe dacă legile de-atunci erau firești sau doar învoite. Faima proastă a sofiștilor vine în bună parte de la Platon, parte cu interes în dezbatere.',
        'Teatrul atenian era o instituție cetățenească plătită de cetățeni bogați prin coregie, cu prezență mare și cuprins vădit politic. Tragedia punea pe scenă certuri de nerezolvat între datorii legiuite — Antigona lui Sofocle pune față în față legea cetății și datoria religioasă de familie —, iar comedia lui Aristofan îi lovea pe nume pe oameni politici vii, pe generali și pe însuși Socrate. Faptul că o democrație plătea critica cea mai aprigă a ei înseși e o știre de seamă.',
        'Moștenirea greacă trebuie mânuită cu grijă. E obișnuit ca Grecia să fie înfățișată drept „leagănul Occidentului” pe o linie neîntreruptă până la democrația modernă. Acea genealogie e în bună parte o construcție a secolului al XIX-lea: democrația ateniană era directă, nu de reprezentare; se întemeia pe tragerea la sorți, pe care azi nu o folosim; îi lăsa afară pe cei mai mulți din popor; și trăia laolaltă cu sclavia, cu imperialismul și cu supunerea aspră a femeilor. Pe deasupra, transmiterea textelor grecești către Europa a trecut hotărâtor prin tălmăcirea și comentariul arab și prin Bizanț, un drum pe care povestirea continuității directe îl trece de obicei cu vederea.',
        'A recunoaște asta nu micșorează contribuția greacă, o lămurește. Ce a fost cu adevărat fără seamăn nu a fost o mulțime de instituții de exportat, ci o deprindere: supunerea regulilor vieții de obște unei dezbateri publice și temeinice, și socotirea lor drept schimbabile. Acea idee, și nu Partenonul, e ce rămâne în folosință.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Polis', definition: 'Obște de cetățeni cu teritoriu, cult și instituții proprii. Nu înseamnă „oraș”: e un trup politic.' },
    { term: 'Hoplit', definition: 'Pedestraș greu ce lupta în falangă închisă și își plătea singur uneltele.' },
    { term: 'Seisachtheia', definition: '„Scuturarea poverilor”: ștergerea datoriilor de către Solon și oprirea robirii pentru datorii.' },
    { term: 'Ekklesia', definition: 'Adunarea tuturor cetățenilor atenieni; organ suveran în legi, război și finanțe.' },
    { term: 'Boulé', definition: 'Sfat de 500 de membri traseri la sorți ce pregătea ordinea de zi a adunării.' },
    { term: 'Misthophoria', definition: 'Plată pentru purtarea dregătoriilor sau pentru a face parte din jurii. A făcut cu putință participarea săracilor.' },
    { term: 'Ostracism', definition: 'Surghiunire de preîntâmpinare de zece ani hotărâtă prin vot, fără vină și fără pierderea avuției.' },
    { term: 'Metec', definition: 'Străin cu reședință la Atena: liber, cu îndatoriri fiscale și militare, dar fără drepturi politice.' },
    { term: 'Ilot', definition: 'Popor robit mesenian legat de pământ, avuție obștească a statului spartan.' },
    { term: 'Agogé', definition: 'Educația de stat spartană, obștească și militarizată, de la șapte ani.' },
    { term: 'Physis / nomos', definition: 'Firea față de învoire. Deosebire sofistică ce a îngăduit punerea la îndoială a îndreptățirii legilor.' },
    { term: 'Phoros', definition: 'Tribut plătit de aliați Ligii de la Delos, prefăcut de fapt în dare imperială ateniană.' },
  ],
  debates: [
    {
      question: 'A pricinuit falanga hoplitică lărgirea participării politice?',
      positions: [
        {
          school: 'Teza hoplitică clasică (Aristotel; Andrewes, Cartledge)',
          argument:
            'Cei ce țineau apărarea obștii și își plăteau singuri armele ar fi cerut drepturi pe măsura acelei contribuții. Trecerea de la lupta aristocratică la falangă ar lămuri deschiderea rânduielilor arhaice.',
        },
        {
          school: 'Revizuire treptată (van Wees, Raaflaub)',
          argument:
            'Falanga s-a alcătuit încet și nu marchează o ruptură militară limpede. Pe deasupra, multe poleis cu armată hoplitică au rămas oligarhice: legătura dintre felul de a lupta și felul de a cârmui nu ține.',
        },
      ],
      state:
        'Varianta tare a tezei e discreditată. Se primește că participarea militară a fost un argument politic la îndemână, dar nu un mecanism de la sine: rezultatul a atârnat de luptele dinăuntru ale fiecărui polis.',
    },
    {
      question: 'A fost Liga de la Delos o alianță sau un imperiu?',
      positions: [
        {
          school: 'Citire de apărare',
          argument:
            'S-a născut ca alianță de bunăvoie împotriva Persiei, cu vistierie comună și adunare de aliați. Atena aducea flota și dădea o siguranță adevărată în Egee, pe lângă înăbușirea pirateriei.',
        },
        {
          school: 'Citire imperială (Tucidide; Meiggs)',
          argument:
            'Mutarea vistieriei la Atena în 454, prefacerea contribuției în tribut, înăbușirea cu arma a secesiunilor, garnizoanele, cleruchiile și silirea de a se judeca la Atena alcătuiesc o stăpânire. Chiar Tucidide o numește tiranie.',
        },
      ],
      state:
        'E o înțelegere că alianța a ajuns imperiu; se discută ritmul și în ce măsură aliații primeau înapoi ceva adevărat (siguranță pe mare, sprijin pentru taberele democratice locale) ce ar lămuri puținătatea răscoalelor.',
    },
    {
      question: 'A fost sclavia temelia materială a democrației ateniene?',
      positions: [
        {
          school: 'Atârnare din temelie (Finley; Ste. Croix)',
          argument:
            'Răgazul de trebuință pentru participarea politică intensivă se sprijinea pe munca de sclav. Atena a fost o „societate a sclaviei” în sens deplin: sclavia nu era la margine, ci temelia producției și a venitului claselor proprietare.',
        },
        {
          school: 'Nuanțare (Wood)',
          argument:
            'Țărănimea ateniană liberă își lucra pământul ei propriu și alcătuia grosul trupului cetățenesc. Democrația s-ar fi sprijinit mai mult pe existența unor mici producători liberi ocrotiți de îndatorare decât pe prisosul de sclavi.',
        },
      ],
      state:
        'Nimeni nu pune la îndoială locul de căpetenie al sclaviei — socotelile merg de la 60.000 la 100.000 de sclavi în Attica —, dar da, rolul ei exact ca pricină. Dezbaterea se întretaie cu discuția mai largă despre firea economiei vechi.',
    },
  ],
  sources: [
    { author: 'Homer', title: 'Iliada și Odiseea', year: 'c. s. VIII î.Hr.', kind: 'primaria', note: 'Izvor despre valorile aristocratice; oglindește o societate de după cea miceniană pe care o descrie.' },
    { author: 'Hesiod', title: 'Munci și zile', year: 'c. 700 î.Hr.', kind: 'primaria', note: 'Privire țărănească asupra crizei agrare arhaice și a dreptății părtinitoare a celor puternici.' },
    { author: 'Herodot', title: 'Istorii', year: 'c. 430 î.Hr.', kind: 'primaria', note: 'Povestirea războaielor medice și etnografia lumii cunoscute. Interes pentru pricini și pentru celălalt.' },
    { author: 'Tucidide', title: 'Istoria războiului peloponesiac', year: 'c. 400 î.Hr.', kind: 'primaria', note: 'Deosebește pricina adâncă de prilej. Dialogul din Melos și cuvântarea de îngropăciune a lui Pericle.' },
    { author: 'Aristotel (sau școala lui)', title: 'Constituția atenienilor', year: 'c. 330 î.Hr.', kind: 'primaria', note: 'Descrierea funcționării instituționale ateniene. Redescoperită pe papirus în 1879.' },
    { author: 'Aristofan', title: 'Norii, Cavalerii, Lisistrata', year: '423–411 î.Hr.', kind: 'primaria', note: 'Comedie politică ce îi lovește pe nume pe conducători vii și pe însuși Socrate.' },
    { author: 'Moses I. Finley', title: 'The Ancient Economy', year: '1973', kind: 'estudio', note: 'Model substantivist al economiei vechi; de căpetenie în dezbaterea despre sclavie și piață.' },
    { author: 'Russell Meiggs', title: 'The Athenian Empire', year: '1972', kind: 'estudio', note: 'Studiu de referință despre prefacerea Ligii de la Delos în imperiu.' },
    { author: 'Paul Cartledge', title: 'The Spartans', year: '2002', kind: 'estudio', note: 'Revizuire critică a „mirajului spartan”.' },
    { author: 'Josiah Ober', title: 'Mass and Elite in Democratic Athens', year: '1989', kind: 'estudio', note: 'Analizează cum mijlocea retorica legătura dintre elită și demos.' },
    { author: 'Hans van Wees', title: 'Greek Warfare: Myths and Realities', year: '2004', kind: 'estudio', note: 'Revizuirea de căpetenie a tezei hoplitice.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Pericle descrie democrația ateniană',
      text: [
        'Rânduiala noastră se numește democrație fiindcă cârmuirea nu atârnă de puțini, ci de cei mulți.',
        'În ce privește treburile de fiecare, legea dă tuturor egalitate; dar în ce privește cinstea obștească, fiecare e ales nu fiindcă ține de o clasă anume, ci pentru meritul lui.',
        'Și nici sărăcia nu e o piedică: cel ce poate face un bine cetății nu e oprit de întunecimea stării lui.',
      ].join('\n\n'),
      source: 'Tucidide, Istoria războiului peloponesiac, II, 37. Cuvântarea de îngropăciune a lui Pericle, 431 î.Hr.',
      note: 'Versiune proprie după greacă. Tucidide arată că reface cuvântările, nu le scrie întocmai.',
      question: 'Pericle spune că sărăcia nu oprește participarea. Pe cine lasă afară acest tablou, fără să-i pomenească măcar? Compară asta cu ce spune apartamentul despre cine era cetățean.',
    },
  ],
  images: [
    {
      alt: 'Partenonul văzut dinspre apus, cu coloanele dorice ale fațadei lui în picioare',
      caption: 'Partenonul, clădit pe Acropolea Atenei între 447 și 432 î.Hr.',
    },
    {
      alt: 'Bust de marmură al unui bărbat cu barbă, cu coif corintic dat pe spate, pe frunte',
      caption: 'Portretul lui Pericle, copie romană după un original grecesc. Coiful îl înfățișează ca strateg, singura dregătorie la care era realeas prin vot.',
    },
    {
      alt: 'Fragment de ceramică cu un nume grecesc zgâriat cu mâna pe suprafață',
      caption: 'Ostracon cu numele lui Temistocle. În fiecare an adunarea putea surghiuni zece ani un cetățean scriindu-i numele pe un ciob.',
    },
    {
      alt: 'Teatru grecesc cu trepte semicirculare de piatră încastrate în coastă, cu orchestra circulară în mijloc',
      caption: 'Teatrul din Epidaur, din secolul al IV-lea î.Hr. Încăpeau vreo paisprezece mii de spectatori: teatrul era o faptă cetățenească, nu un spectacol pentru puțini.',
    },
  ],
  questions: [
    {
      question: 'Ce e, mai exact, un polis?',
      options: [
        'Un oraș mare, cu ziduri',
        'O obște de cetățeni cu teritoriu, culte și instituții proprii',
        'O provincie a Imperiului persan',
        'O alianță militară între sate',
      ],
      explanation: 'Aristotel stăruie că polisul e un trup politic, nu un loc. De aceea izvoarele spun „atenienii”, nu „Atena”, când vorbesc despre hotărâri.',
    },
    {
      question: 'Care a fost contribuția greacă la alfabetul fenician?',
      options: [
        'Reducerea lui la douăsprezece semne',
        'Darea de semne vocalelor, ceea ce a ieftinit foarte mult alfabetizarea',
        'Scrierea lui pe lut',
        'Adăugarea de determinative de sens',
      ],
      explanation: 'Un sistem de vreo douăzeci și patru de litere se învață în săptămâni. Asta a îngăduit ca legile să fie puse în scris și verificate de oricine.',
    },
    {
      question: 'Cu ce se deosebeau coloniile grecești de colonialismul modern?',
      options: [
        'Cu faptul că nu făceau negoț cu metropola',
        'Cu faptul că fiecare colonie era, chiar de la întemeiere, un polis de sine stătător, nu o stăpânire',
        'Cu faptul că erau cârmuite de Persia',
        'Cu faptul că s-au întemeiat doar în Asia Mică',
      ],
      explanation: 'Colonia ținea legături religioase și de simțire cu metropola ei, dar nu atârnare politică. Pricina ei de căpetenie a fost lipsa de pământ de arat.',
    },
    {
      question: 'Ce a statornicit seisachtheia lui Solon?',
      options: [
        'Tragerea la sorți a dregătoriilor',
        'Ștergerea datoriilor și oprirea robirii cetățenilor atenieni pentru datorii',
        'Izgonirea metecilor',
        'Întemeierea Ligii de la Delos',
      ],
      explanation: 'A fost o reformă după avere, nu democratică: a rânduit participarea după venitul agrar. Dar a rupt monopolul politic al neamului.',
    },
    {
      question: 'Care a fost țelul rânduirii în zece triburi a lui Clistene?',
      options: [
        'Înlesnirea recrutării pe mare',
        'Ruperea credințelor de rudenie și regionale, amestecând demoi din zone deosebite',
        'Micșorarea numărului de cetățeni',
        'Împărțirea pământului deopotrivă',
      ],
      explanation: 'Fiecare trib îmbina demoi de la țărm, din oraș și din interior. Unitatea politică a ajuns demosul de reședință, iar cetățenii se numeau după demoticul lor.',
    },
    {
      question: 'De ce socoteau grecii tragerea la sorți mai democratică decât alegerea?',
      options: [
        'Fiindcă era mai ieftin de rânduit',
        'Fiindcă asigura o egalitate adevărată a accesului, pe când alegerea îi ține partea celui de vază',
        'Fiindcă o cereau oracolele',
        'Fiindcă oprea realegerea',
      ],
      explanation: 'Alegerea era văzută ca rânduială aristocratică. Numai dregătoriile tehnice, ca strategia militară, se ocupau prin vot; și de-acolo a cârmuit Pericle.',
    },
    {
      question: 'Ce parte aproximativă din poporul Aticii avea drepturi politice?',
      options: ['Cam 50%', 'Între 10% și 20%', 'Peste 70%', 'Mai puțin de 1%'],
      explanation: 'Între 30.000 și 60.000 de cetățeni bărbați dintr-o populație de 250.000-300.000 de locuitori. Rămâneau afară femeile, metecii și sclavii.',
    },
    {
      question: 'Ce urmare a avut misthophoria adusă de Pericle?',
      options: [
        'A mărginit dregătoriile la proprietari',
        'A făcut cu putință ca cetățenii săraci să poarte dregătorii și să fie jurați',
        'A înlocuit tragerea la sorți cu alegerea',
        'A plătit clădirea Partenonului',
      ],
      explanation: 'Fără plată, numai cei cu stare își puteau îngădui zile pentru politică. Aristotel arată această măsură drept cea care a făcut adevărată participarea poporului.',
    },
    {
      question: 'Ce era ostracismul?',
      options: [
        'O pedeapsă cu moartea pentru trădare',
        'O surghiunire de preîntâmpinare de zece ani, fără vină și fără pierderea avuției',
        'Luarea averii metecilor',
        'Izgonirea unui polis din Liga de la Delos',
      ],
      explanation: 'Funcționa ca o supapă împotriva strângerii puterii peste o singură persoană. Se vota cu cioburi de ceramică, ostraka.',
    },
    {
      question: 'Ce era kryptéia spartană?',
      options: [
        'O școală de retorică',
        'Trimiterea unor tineri spartiați să-i înlăture pe alese pe iloții de seamă',
        'Adunarea eforilor',
        'Un praznic religios anual',
      ],
      explanation: 'Iloții îi întreceau cu mult la număr pe spartiați. Sistemul cerea o asuprire necurmată; eforii le vesteau oficial război în fiecare an.',
    },
    {
      question: 'Ce pricină adâncă a decăderii spartane arată istoricii?',
      options: [
        'Coruperea morală a regilor ei',
        'Prăbușirea demografică a spartiaților cu drepturi depline, de la vreo 8.000 la puțin peste o mie',
        'Pierderea flotei ei la Salamina',
        'Trecerea la cultul Atenei',
      ],
      explanation: 'Strângerea loturilor de pământ a micșorat trupul cetățenesc. Leuctra (371 î.Hr.) și eliberarea Meseniei ce a urmat i-au lichidat apoi temelia economică.',
    },
    {
      question: 'Ce deosebire de metodă aduce Tucidide lămurind războiul peloponesiac?',
      options: [
        'Între izvoare scrise și orale',
        'Între pricina adâncă — creșterea puterii ateniene și frica spartană — și prilejurile de îndată',
        'Între istorie sfântă și lumească',
        'Între război drept și nedrept',
      ],
      explanation: 'E una dintre contribuțiile de temelie ale istoriografiei: despărțirea a ceea ce dezlănțuie un conflict de ceea ce îl face probabil.',
    },
    {
      question: 'Ce argument pun atenienii în dialogul din Melos?',
      options: [
        'Că războiul trebuie să urmeze reguli religioase',
        'Că cei tari fac ce pot, iar cei slabi rabdă ce trebuie',
        'Că nepărtinirea trebuie respectată mereu',
        'Că Sparta era adevărata pornitoare de război',
      ],
      explanation: 'E textul clasic despre logica puterii goale, și vine înaintea nimicirii unui oraș ce cerea doar să rămână nepărtinitor.',
    },
    {
      question: 'Ce a îngăduit punerea la îndoială prin deosebirea sofistică dintre physis și nomos?',
      options: [
        'Dacă zeii există',
        'Dacă legile de-atunci sunt firești sau doar învoieli omenești schimbabile',
        'Dacă pământul era rotund',
        'Dacă războiul era de neînlăturat',
      ],
      explanation: 'Acea deosebire a deschis putința de a critica rânduiala așezată drept învoire, nu drept ordine firească. Protagoras a dus-o până la relativism.',
    },
    {
      question: 'De ce e socotită discutabilă genealogia „Grecia, leagănul democrației occidentale”?',
      options: [
        'Fiindcă Atena nu a avut niciodată instituții democratice',
        'Fiindcă democrația ateniană era directă, cu sorți, care lăsa afară pe mulți și trăia din sclavie, iar continuitatea e o construcție a secolului al XIX-lea',
        'Fiindcă textele grecești s-au pierdut de tot',
        'Fiindcă Grecia nu a înrâurit Roma',
      ],
      explanation: 'Pe deasupra, transmiterea textelor grecești a trecut hotărâtor prin arabă și prin Bizanț. Ce a fost cu adevărat fără seamăn a fost deprinderea de a dezbate public reguli schimbabile.',
    },
    {
      question: 'Ce dă în vileag faptul că Atena plătea comedii ce îi loveau pe proprii conducători?',
      options: [
        'Că teatrul era privat și ascuns',
        'Că critica politică ținea de o instituție cetățenească plătită de cetățeni bogați',
        'Că Aristofan era străin',
        'Că democrația fusese desființată',
      ],
      explanation: 'Coregia îi silea pe bogați să plătească reprezentațiile. Faptul că o democrație își plătea propria critică, cea mai aprigă, e o știre de seamă despre sistem.',
    },
  ],
}
