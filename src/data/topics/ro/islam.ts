import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/islam.ts`. Aceeași formă: 6 secțiuni
   în aceeași ordine, 15 date, 11 concepte, 3 dezbateri, 11 surse, un document
   comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const islamRo: TopicTranslation = {
  title: 'Nașterea și expansiunea islamului',
  description: 'De la Arabia la Atlantic: revelație, califat, știință și fărâmițare politică.',
  years: '610–1258',
  summary:
    'În ceva mai mult de un secol, o mișcare născută într-o regiune de margine a Arabiei a dat naștere celui mai întins stat existent până atunci, de la Atlantic la Indus, și unei civilizații care secole întregi a strâns producția științifică și filozofică cea mai înaintată din lume. A explica această expansiune fără să te sprijini nici pe apologetică, nici pe locul comun al fanatismului este una dintre problemele cele mai interesante ale istoriei medievale.',
  keyDates: [
    { date: 'c. 570', event: 'Nașterea lui Muhammad la Mecca.' },
    { date: '610', event: 'Începutul revelației coranice, potrivit tradiției islamice.' },
    { date: '622', event: 'Hegira: emigrarea la Yathrib (Medina). Anul 1 al calendarului islamic.' },
    { date: '630', event: 'Luarea Meccăi.' },
    { date: '632', event: 'Moartea lui Muhammad; începe califatul Rashidun.' },
    { date: '636–642', event: 'Cucerirea Siriei, a Mesopotamiei, a Egiptului și a Imperiului sasanid.' },
    { date: '656–661', event: 'Prima fitna: război civil și obârșia despărțirii dintre suniți și șiiți.' },
    { date: '661–750', event: 'Califatul omeiad, cu capitala la Damasc.' },
    { date: '711', event: 'Debarcarea în peninsula iberică; începutul Al-Andalusului.' },
    { date: '732', event: 'Bătălia de la Poitiers, în fața lui Carol Martel.' },
    { date: '750', event: 'Revoluția abasidă; mutarea puterii spre Irak.' },
    { date: '762', event: 'Întemeierea Bagdadului.' },
    { date: 'c. 820–1000', event: 'Mișcarea de traducere și strălucirea științifică abasidă.' },
    { date: '929', event: 'Abd al-Rahman al III-lea proclamă califatul Cordobei.' },
    { date: '1258', event: 'Mongolii distrug Bagdadul; sfârșitul califatului abasid.' },
  ],
  sections: [
    {
      title: 'Arabia dinainte de islam: nu un gol',
      body: [
        'Tradiția islamică numește jahiliyya — „neștiință” — perioada dinainte de islam, iar această etichetă a hrănit ideea unei Arabii izolate și primitive. Cercetarea recentă dă o altă imagine: o peninsulă legată de circuitele comerciale și politice ale vremii ei, cu regate rânduite în sud (Yemen), federații de triburi supuse Bizanțului și Persiei în nord, și o prezență însemnată de comunități evreiești și creștine.',
        'Mecca era un centru de pelerinaj în jurul Kaabei și un nod comercial a cărui însemnătate se discută. Patricia Crone a pus la îndoială în *Meccan Trade and the Rise of Islam* (1987) imaginea unui mare oraș negustoresc, mijlocitor al comerțului cu mirodenii, arătând că sursele din acea vreme abia dacă îl pomenesc.',
        'Contextul geopolitic este hotărâtor. Războiul dintre Bizanț și Persia sasanidă, din 602-628, i-a lăsat pe amândoi împărații istoviți, îndatorați și cu sistemele lor de apărare și de clientelă din nordul Arabiei dezarticulate. Când au sosit armatele arabe, s-au lovit de două puteri în cel mai rău moment al lor din tot secolul.',
        'Societatea arabă era de trib și fără stat. Loialitatea se rânduia pe neamuri, dreptatea se făcea prin răzbunarea sângelui, iar ocrotirea atârna de grup. Aportul politic al islamului a fost tocmai înlocuirea acestei legături cu alta: umma, comunitatea credincioșilor, care trece dincolo de rudenie.',
      ].join('\n\n'),
      callout:
        'Hegira din 622 nu prăznuiește revelația, ci întemeierea unei comunități politice la Medina. Faptul că acolo începe calendarul islamic, și nu în 610, spune mult despre ce a fost socotit evenimentul de temelie.',
    },
    {
      title: 'Muhammad, Coranul și problema surselor',
      body: [
        'Potrivit tradiției, Muhammad a început să primească revelații pe la 610 și a predicat la Mecca un mesaj de monoteism strict, judecată de pe urmă și dreptate socială, care l-a pus în conflict cu elita orașului. În 622 a emigrat la Yathrib, care a ajuns să se numească Medina, unde a lucrat ca arbitru între clanuri aflate în ceartă și a rânduit o comunitate cu dimensiune politică, militară și juridică.',
        'În islam, Coranul este socotit cuvânt divin, întocmai și necreat, transmis în arabă. Este rânduit în 114 sure, așezate cam după lungime, nu după timp, ceea ce îngreunează citirea lui istorică. Tradiția așază fixarea lui în scris sub califul Uthman, pe la 650.',
        'Problema de metodă cea mai importantă este că sursele povestitoare despre viața lui Muhammad — sira lui Ibn Ishaq, transmisă prin Ibn Hisham, și marile culegeri de hadithuri — au fost alcătuite între un secol și jumătate și două secole după fapte. Chiar tradiția islamică a dezvoltat o știință critică pentru a le cerceta, studiul isnadului, adică lanțul celor care au transmis, cu criterii aspre de încredere.',
        'Critica occidentală a mers mai departe. Școala revizionistă a anilor șaptezeci — John Wansbrough, Patricia Crone și Michael Cook, în *Hagarism* (1977) — a propus că întregul islamic s-ar fi format mai târziu și în afara Arabiei. Tezele lor cele mai radicale nu s-au susținut: manuscrisele de la Sanaa, găsite în 1972, și datările prin radiocarbon ale unor foi coranice foarte timpurii, precum cea de la Birmingham, arată spre o fixare a textului timpurie și statornică.',
        'Poziția majoritară de azi este de mijloc: Coranul, ca text, este foarte vechi și potrivit cu sine, în timp ce povestirile biografice de mai târziu trebuie tratate cu aceeași grijă critică pe care o ceri oricărei hagiografii de mai târziu.',
      ].join('\n\n'),
    },
    {
      title: 'Expansiunea: cum să o explicăm',
      body: [
        'Între 634 și 711, armatele arabe au luat Siria, Mesopotamia, Egiptul, Persia întreagă, nordul Africii și peninsula iberică. Este una dintre expansiunile cele mai rapide din istorie și a primit explicații foarte diferite.',
        'Explicația religioasă, de una singură, nu ajunge: nu explică de ce nu s-a întâmplat mai devreme și nici de ce cuceririle s-au oprit unde s-au oprit. Explicația prin fanatism, obișnuită în istoriografia europeană a secolului al XIX-lea, este mai ales o prejudecată: cuceririle au urmat tipare militare și politice obișnuite, cu tratate, cu înțelegeri de capitulare și cu negociere cu elitele locale.',
        'Factorii pe care îi cântărește cercetarea de azi sunt mai mulți. Istovirea de amândouă părțile, a Bizanțului și a Persiei, după douăzeci și șase de ani de război, i-a lăsat pe amândoi fără rezerve și fără frontiere apărate. Populațiile Siriei și ale Egiptului, majoritar creștine monofizite, prigonite de ortodoxia imperială, nu aveau motive puternice să apere Constantinopolul. Iar structura tributară nouă a fost, cel puțin la început, mai ușoară decât cea bizantină sau cea sasanidă.',
        'La asta se adaugă un factor dinăuntru: unirea triburilor arabe sub umma a îndreptat spre afară o energie militară care mai înainte se cheltuia în conflicte dinăuntru, iar împărțirea prăzii a dat un stimulent bănesc necontenit.',
        'Trecerile la islam au fost lente. Richard Bulliet a socotit, pornind de la schimbarea numelor de persoane, că populațiile cucerite nu au ajuns la majoritate musulmană decât în secolele al IX-lea sau al X-lea, la două sau trei sute de ani după cucerire. Statutul de dhimmi — ocrotit — le recunoștea evreilor și creștinilor libertatea cultului și autonomia juridică, în schimbul impozitului pe cap de locuitor (jizya), într-un regim de supunere legală, dar cu o toleranță practică mult mai mare decât cea din Europa acelei vremi. De fapt, trecerea în masă la islam micșora veniturile fiscale, ceea ce, decenii întregi, i-a făcut pe stăpânitorii omeiazi să nu o încurajeze.',
      ].join('\n\n'),
      callout:
        'Bătălia de la Poitiers (732) a fost umflată de istoriografia franceză a secolului al XIX-lea drept salvarea Europei. A fost, mai degrabă, înfrângerea unei expediții de pradă; retragerea musulmană din sudul Franței a răspuns mai mult unor probleme dinăuntru decât acelei înfrângeri.',
    },
    {
      title: 'Prima fitna și despărțirea suniți-șiiți',
      body: [
        'Muhammad a murit în 632 fără să numească un urmaș fără îndoială și fără să lase o rânduială statornicită. Chestiunea cine trebuia să conducă comunitatea a produs cea mai îndelungată despărțire a islamului.',
        'Cei dintâi patru califi — Abu Bakr, Umar, Uthman și Ali — poartă în tradiția sunnită numele de Rashidun, „bine călăuziți”. Dar trei dintre cei patru au fost uciși, iar conflictul dintre Ali, vărul și ginerele Profetului, și Muawiya, guvernatorul Siriei, a dus la primul război civil (656-661).',
        'Din acel conflict au ieșit trei poziții. Adepții lui Ali (shiat Ali, de unde „șiiți”) susțineau că întâietatea se cuvenea urmașilor Profetului prin Ali și Fatima, și dădeau imamului o autoritate duhovnicească. Cei care aveau să se numească mai apoi suniți au primit legitimitatea califilor de fapt și întâietatea sunnei, purtarea Profetului. Kharijiții, a treia poziție, susțineau că întâietatea se cuvenea celui mai evlavios, fără să conteze neamul lui, și au ajuns să îl socotească apostat pe cel care nu le împărtășea asprimea.',
        'Moartea lui Husayn, fiul lui Ali, la Kerbala, în 680, de mâna trupelor omeiade, a prefăcut cearta politică în identitate religioasă. Prăznuirea ei anuală, Ashura, rămâne miezul de simțire al șiismului.',
        'Este important să fie evitate două greșeli des întâlnite. Prima, înfățișarea despărțirii ca pe un război teologic statornic: perioade lungi întregi, suniții și șiiții au conviețuit fără conflict pe față, iar deosebirile de doctrină sunt mai mici decât cele care despart confesiunile creștine. A doua, proiectarea asupra trecutului a taberelor de sectă de azi, care răspund în bună parte politicii secolului XX.',
      ].join('\n\n'),
    },
    {
      title: 'Califatul abasid și epoca de aur a științei',
      body: [
        'Revoluția abasidă din 750 i-a înlăturat pe omeiazi și a mutat centrul de greutate de la Damasc la Irak, cu întemeierea Bagdadului în 762. Schimbarea a fost și socială: noul regim i-a primit pe mawali — musulmani nearabi, mai ales persani —, a căror marginalizare fusese una dintre pricinile răscoalei. Administrația a primit modele persane, iar statul s-a birocratizat.',
        'Între secolele al IX-lea și al XI-lea s-a petrecut așa-numita mișcare de traducere, fără seamăn în istorie până atunci. Sub protecția califilor și a unor elite particulare, au fost trecute în arabă operele științifice și filozofice grecești, persane și indiene: Aristotel, Galen, Ptolemeu, Euclid, Dioscorides. Dimitri Gutas a subliniat că nu a fost un fenomen de la sine, nici o simplă curiozitate de cărturar, ci o politică de stat ținută două secole și sprijinită de o cerere socială adevărată.',
        'Aportul nu a fost doar de păstrare. Al-Khwarizmi a rânduit algebra — cuvântul vine din tratatul lui — și a adus numerația poziționale indiene, cu tot cu zero, care avea să ajungă în Europa drept „cifre arabe”. Ibn al-Haytham (Alhazen) a răsturnat teoria vederii prin emisie și a statornicit o metodă experimentală riguroasă în optică. Ibn Sina (Avicenna) a scris *Canonul medicinei*, manual universitar european până în secolul al XVII-lea. Al-Razi a descris clinic variola și pojarul. Ibn Khaldun, deja în secolul al XIV-lea, a propus în *Muqaddima* a lui o explicație a formării și a decăderii statelor, întemeiată pe asabiyya, adică unitatea de grup, pe care mulți o socotesc primul tratat de sociologie istorică.',
        'Expresia „epocă de aur” cere nuanțe. Producția științifică nu a fost la fel în tot timpul și în tot spațiul, și nu toată a fost opera musulmanilor: creștini nestorieni, evrei și zoroastrieni au luat parte în chip central, începând cu traducătorii. Nici nu a existat o „știință islamică” unitară: au fost încordări care se repetau între filozofia de obârșie grecească (falsafa) și teologie, arătate de pildă în critica lui al-Ghazali la adresa filozofilor și în răspunsul lui Averroes.',
        'Teza unei decăderi pricinuite de al-Ghazali și de așa-numita „închidere a porților ijtihadului” se repetă mult și este discreditată: producția științifică a continuat secole întregi după, cu școala astronomică de la Maragheh, în secolul al XIII-lea, ale cărei modele matematice apar mai apoi la Copernic, și cu observația otomană și mogolă în Epoca Modernă.',
      ].join('\n\n'),
      callout:
        'Transmiterea nu a fost doar de texte grecești. Hârtia a venit din China după bătălia de la Talas (751), iar răspândirea ei a ieftinit foarte mult producția de cărți în lumea islamică, secole înaintea Europei.',
    },
    {
      title: 'Fărâmițare politică și transmitere spre Europa',
      body: [
        'Unitatea politică a califatului a ținut puțin. Încă din 756, un omeiad supraviețuitor a întemeiat un emirat de sine stătător la Cordoba, care avea să devină califat în 929. Fatimizii șiiți au întemeiat un califat rival în Egipt, în 909, și au clădit Cairo. Din secolul al X-lea, puterea de fapt din Bagdad a trecut în mâinile unor dinastii militare — buyizi, apoi selgiucizi turci —, în timp ce califul își păstra o autoritate de fațadă.',
        'Lovitura de pe urmă a venit odată cu mongolii: în 1258, Hulagu a luat Bagdadul, l-a ucis pe ultimul calif abasid și a distrus orașul, inclusiv bibliotecile lui și o bună parte din sistemul lui de irigație. Numărul victimelor dat de surse este probabil umflat, dar sfârșitul califatului ca instituție universală este un fapt.',
        'Transmiterea cunoașterii arabe către Europa a fost uriașă și este bine documentată. Centrele au fost mai ales Toledo, după 1085, și Sicilia. La Toledo, traducători precum Gerard din Cremona au trecut în latină, adesea prin mijlocitori evrei și mozarabi, sute de opere: *Almagest*-ul lui Ptolemeu, corpusul aristotelic cu comentariile lui Averroes, medicina lui Avicenna, algebra și optica.',
        'Urmarea a fost de structură. Redobândirea lui Aristotel a rânduit din nou filozofia scolastică și l-a silit pe Toma din Aquino la o sinteză între rațiune și credință; medicina arabă a întemeiat programele de la Montpellier, de la Bologna și de la Salerno; numerația poziționale a schimbat contabilitatea și comerțul. Vocabularul castilian păstrează urma: álgebra, algoritmo, cifra, azúcar, alcohol, alquimia, almanaque, cenit, azimut.',
        'Povestea obișnuită a unei Europe care „redescoperă” Antichitatea clasică în Renaștere trece cu vederea această verigă. Textele grecești nu au reapărut de la sine: au ajuns traduse, comentate și lărgite de o tradiție de gândire care lucrase asupra lor cinci secole.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Umma', definition: 'Comunitatea credincioșilor, care înlocuiește rudenia de trib ca legătură politică de temelie.' },
    { term: 'Hegira', definition: 'Emigrarea la Medina, în 622. Marchează anul 1 al calendarului islamic, lunar și de 354 de zile.' },
    { term: 'Calif', definition: '„Urmaș”: căpetenia politică a comunității. Nu este profet și nu are autoritate să dea revelații.' },
    { term: 'Sunna', definition: 'Purtarea și vorbele Profetului, transmise prin hadithuri. Al doilea izvor al dreptului, după Coran.' },
    { term: 'Isnad', definition: 'Lanțul celor care au transmis un hadith. Cercetarea lui este știința critică dezvoltată de tradiția islamică.' },
    { term: 'Fitna', definition: 'Război civil sau învrăjbire dinăuntrul comunității musulmane.' },
    { term: 'Dhimmi', definition: 'Ocrotit: evreu sau creștin cu libertate a cultului și autonomie juridică, în schimbul impozitului pe cap de locuitor.' },
    { term: 'Jizya', definition: 'Impozit personal plătit de nemusulmani. Mărimea lui a descurajat decenii întregi trecerile la islam.' },
    { term: 'Mawali', definition: 'Musulmani nearabi, mai ales persani. Marginalizarea lor sub omeiazi a hrănit revoluția abasidă.' },
    { term: 'Falsafa', definition: 'Filozofia de obârșie grecească din lumea islamică, în încordare statornică cu teologia.' },
    { term: 'Asabiyya', definition: 'Unitatea de grup. Concept central al lui Ibn Khaldun, ca să explice ridicarea și căderea statelor.' },
  ],
  debates: [
    {
      question: 'Ce explică iuțeala expansiunii islamice?',
      positions: [
        {
          school: 'Explicația religioasă sau a „fanatismului” (istoriografia europeană a secolului al XIX-lea)',
          argument:
            'Avântul unei credințe noi și luptătoare i-ar fi aruncat pe arabi într-un război sfânt neîntrerupt împotriva lumii din jur, fără altă socoteală decât trecerea la islam sau supunerea.',
        },
        {
          school: 'Explicație de conjunctură și de structură (Donner, Kennedy)',
          argument:
            'Bizanțul și Persia erau istovite după douăzeci și șase de ani de război; populațiile monofizite ale Siriei și ale Egiptului nu aveau motive să apere Constantinopolul; fiscalitatea de la început a fost mai ușoară; iar unirea triburilor a îndreptat spre afară o energie militară cheltuită mai înainte dinăuntru.',
        },
      ],
      state:
        'Se respinge explicația prin fanatism: cuceririle au urmat tipare militare obișnuite, cu tratate și cu înțelegeri de capitulare. Se discută cât a atârnat mobilul religios față de pradă și de logica de stat, și se subliniază că trecerile la islam au fost lente: nu a fost majoritate musulmană decât în secolele IX-X.',
    },
    {
      question: 'Când a fost fixat textul coranic?',
      positions: [
        {
          school: 'Revizionism radical (Wansbrough; Crone și Cook, 1977)',
          argument:
            'Întregul islamic s-ar fi format între unu și două secole mai târziu, în afara Arabiei, ca o construcție retrospectivă. Puținătatea surselor din afară, contemporane, ar îndreptăți bănuiala.',
        },
        {
          school: 'Fixare timpurie (paleografie și radiocarbon)',
          argument:
            'Manuscrisele de la Sanaa (1972) și datările unor foi precum cea de la Birmingham arată spre un text statornic foarte timpuriu, potrivit cu tradiția care îl așază sub Uthman, pe la 650.',
        },
      ],
      state:
        'Tezele revizioniste radicale nu s-au susținut în fața dovezilor manuscrise. Poziția majoritară deosebește Coranul, text vechi și statornic, de povestirile biografice de mai târziu, care cer aceeași grijă critică ca orice hagiografie de mai târziu.',
    },
    {
      question: 'A existat un „declin” al științei islamice și de ce?',
      positions: [
        {
          school: 'Teza închiderii religioase',
          argument:
            'Critica lui al-Ghazali la adresa filozofilor și așa-numita „închidere a porților ijtihadului” ar fi înăbușit cercetarea rațională, pricinuind o stagnare de prin secolul al XII-lea încolo.',
        },
        {
          school: 'Critica tezei (Saliba, Gutas)',
          argument:
            'Producția științifică a continuat secole întregi: școala astronomică de la Maragheh, în secolul al XIII-lea, a dezvoltat modele matematice ce reapar la Copernic, iar în lumea otomană și mogolă a fost o activitate însemnată. „Declinul” ar fi, mai degrabă, o mutare relativă, de după revoluția științifică europeană.',
        },
      ],
      state:
        'Teza închiderii religioase este discreditată printre cercetători, deși rămâne foarte răspândită. Se cercetează astăzi de ce știința islamică nu a făcut pasul de instituție pe care l-a făcut Europa în secolul al XVII-lea, cu explicații care țin mai mult de finanțare, de universități și de tipar decât de teologie.',
    },
  ],
  sources: [
    { author: 'Anonim (tradiție)', title: 'Coranul', year: 'fixat c. 650', kind: 'primaria', note: '114 sure, așezate după lungime, nu după timp. Cel dintâi izvor al dreptului și al doctrinei.' },
    { author: 'Ibn Ishaq / Ibn Hisham', title: 'Sirat Rasul Allah', year: 'c. 760 / c. 830', kind: 'primaria', note: 'Biografia canonică a Profetului, păstrată în versiunea de mai târziu a lui Ibn Hisham.' },
    { author: 'Al-Tabari', title: 'Istoria profeților și a regilor', year: 'c. 915', kind: 'primaria', note: 'Mare culegere istorică, ce păstrează versiuni deosebite, cu lanțurile lor de transmitere.' },
    { author: 'Ibn Khaldun', title: 'Muqaddima', year: '1377', kind: 'primaria', note: 'Teoria asabiyyei și a ciclului statelor. Socotit un premergător al sociologiei istorice.' },
    { author: 'Averroes (Ibn Rushd)', title: 'Tahafut al-Tahafut', year: 'c. 1180', kind: 'primaria', note: 'Răspuns dat lui al-Ghazali, în apărarea filozofiei. Comentariile lui la Aristotel au marcat scolastica latină.' },
    { author: 'Patricia Crone și Michael Cook', title: 'Hagarism: The Making of the Islamic World', year: '1977', kind: 'estudio', note: 'Manifest revizionist. Tezele lui tari nu se susțin, dar a înnoit discuția de metodă.' },
    { author: 'Richard W. Bulliet', title: 'Conversion to Islam in the Medieval Period', year: '1979', kind: 'estudio', note: 'Reconstituie ritmul lent al trecerilor la islam, pornind de la numele de persoane.' },
    { author: 'Fred M. Donner', title: 'The Early Islamic Conquests', year: '1981', kind: 'estudio', note: 'Analiza factorilor militari, de trib și de stat ai expansiunii.' },
    { author: 'Dimitri Gutas', title: 'Greek Thought, Arabic Culture', year: '1998', kind: 'estudio', note: 'Dovedește că mișcarea de traducere a fost o politică de stat ținută, nu un accident de cărturari.' },
    { author: 'George Saliba', title: 'Islamic Science and the Making of the European Renaissance', year: '2007', kind: 'estudio', note: 'Respinge teza declinului din pricini religioase și documentează continuitatea științifică.' },
    { author: 'Hugh Kennedy', title: 'The Great Arab Conquests', year: '2007', kind: 'estudio', note: 'Sinteză povestitoare și critică a expansiunii, atentă la problemele de surse.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Condițiile predării Ierusalimului',
      text: [
        'În numele lui Dumnezeu, cel milostiv și îndurător. Aceasta este garanția de siguranță pe care robul lui Dumnezeu, Umar, cârmuitorul credincioșilor, o dă locuitorilor Ierusalimului.',
        'Le dă siguranță pentru viețile și averile lor, pentru bisericile și crucile lor, pentru bolnavi și pentru sănătoși și pentru toată obștea lor.',
        'Bisericile lor nu vor fi luate și nici dărâmate, nici întinderea lor nu va fi micșorată, nici crucile și nici averile lor nu vor fi atinse. Nu vor fi siliți în credința lor și niciunuia dintre ei nu i se va face rău.',
      ].join('\n\n'),
      source: 'Capitularea Ierusalimului, pusă pe seama califului Umar, anul 638, adunată de al-Tabari.',
      note: 'Versiune proprie după arabă. Textul se transmite prin cronici mult mai târzii, iar întocmirea lui întocmai se discută.',
      question: 'Documentul garantează cult și avere în schimbul supunerii și al tributului. De ce înlesnește această formulă o cucerire rapidă? Și cu ce se deosebește de toleranța așa cum o înțelegem astăzi?',
    },
  ],
  images: [
    {
      alt: 'Pădure de coloane și arcuri din voute roșii și albe în interiorul moscheii din Cordoba',
      caption: 'Arcurile bicolore ale moscheii din Cordoba, începută în 786.',
    },
    {
      alt: 'Clădire cubică acoperită cu un văl negru brodat cu aur, înconjurată de o mulțime care se învârte în jurul ei',
      caption: 'Kaaba din Mecca. Era deja sanctuar și centru de pelerinaj în Arabia dinainte de islam: islamul reorientează un cult existent, nu ajunge într-un gol.',
    },
    {
      alt: 'Pagină de pergament vopsit într-un albastru intens, cu rânduri de scriere arabă cufică, cu aur',
      caption: 'Folie din Coranul albastru, pusă pe seama Kairuanului sau a Al-Andalusului, secolele IX-X. Pergamentul vopsit și cerneala de aur îl prefac într-un obiect de stat.',
    },
    {
      alt: 'Disc de alamă cu inele gradate, o rețea străpunsă cu vârfuri ce arată stele și o alidadă rotitoare',
      caption: 'Astrolab planisferic persan, datat în 984. Slujea la ora zilei, la latitudine și la direcția rugăciunii: unealtă deopotrivă științifică și religioasă.',
    },
  ],
  questions: [
    {
      question: 'Ce eveniment marchează anul 1 al calendarului islamic, și de ce?',
      options: [
        'Începutul revelației, în 610, prin firea lui de temelie religioasă',
        'Hegira din 622, fiindcă marchează întemeierea unei comunități politice la Medina',
        'Luarea Meccăi, în 630',
        'Moartea lui Muhammad, în 632',
      ],
      explanation: 'Faptul că este calendarul începe cu hegira, și nu cu prima revelație, arată ce a fost socotit evenimentul de temelie: alcătuirea ummei ca o comunitate politică.',
    },
    {
      question: 'Ce context geopolitic a înlesnit expansiunea arabă?',
      options: [
        'Alianța dintre Bizanț și Persia',
        'Istovirea de amândouă părțile, a Bizanțului și a Persiei, după războiul din 602-628',
        'Lipsa armatelor în Orientul Apropiat',
        'Sprijinul militar chinez',
      ],
      explanation: 'Douăzeci și șase de ani de război i-au lăsat pe amândoi împărații fără rezerve și cu sistemele lor de clientelă din nordul Arabiei dezarticulate.',
    },
    {
      question: 'Care a fost aportul politic al islamului la societatea de trib arabă?',
      options: [
        'Crearea unei monarhii ereditare',
        'Înlocuirea legăturii de rudenie cu umma, comunitatea credincioșilor',
        'Desființarea comerțului',
        'Impunerea aramaicei ca limbă comună',
      ],
      explanation: 'Loialitatea a încetat să se rânduiască doar pe neamuri. Această unire a îndreptat spre afară o energie militară cheltuită mai înainte dinăuntru.',
    },
    {
      question: 'Ce problemă de metodă ridică sursele despre viața lui Muhammad?',
      options: [
        'Că sunt scrise în persană',
        'Că sira și hadithurile au fost alcătuite între un secol și jumătate și două secole după fapte',
        'Că nu există nicio sursă scrisă',
        'Că au fost scrise în secolul al XIX-lea',
      ],
      explanation: 'Chiar tradiția islamică a dezvoltat cercetarea isnadului, lanțul celor care au transmis, ca știință critică pentru a-i cerceta încrederea.',
    },
    {
      question: 'Ce dovadă a slăbit tezele revizioniste radicale despre formarea târzie a Coranului?',
      options: [
        'Cronicile bizantine',
        'Manuscrisele de la Sanaa și datările prin radiocarbon ale unor foi coranice foarte timpurii',
        'Inscripțiile Kaabei',
        'Arhivele otomane',
      ],
      explanation: 'Arată spre un text statornic foarte timpuriu. Astăzi se deosebește Coranul, vechi și potrivit cu sine, de povestirile biografice de mai târziu, care cer grijă.',
    },
    {
      question: 'Potrivit lui Bulliet, când au ajuns populațiile cucerite la majoritate musulmană?',
      options: [
        'Numaidecât după cucerire',
        'În secolele al IX-lea sau al X-lea, la două sau trei sute de ani mai târziu',
        'Nu au ajuns niciodată',
        'În secolul al XV-lea',
      ],
      explanation: 'Reconstituirea din numele de persoane arată treceri lente. Pe deasupra, trecerea micșora veniturile din jizya, așa că omeiazii nu au încurajat-o.',
    },
    {
      question: 'Ce presupunea statutul de dhimmi?',
      options: [
        'Trecerea silită la islam',
        'Libertatea cultului și autonomia juridică, în schimbul impozitului pe cap de locuitor, într-un regim de supunere legală',
        'Izgonirea de pe teritoriu',
        'Egalitatea deplină cu musulmanii',
      ],
      explanation: 'Era supunere juridică, nu egalitate, dar presupunea o toleranță practică mult mai mare decât cea din Europa creștină a acelei vremi.',
    },
    {
      question: 'Cum socotește astăzi istoriografia bătălia de la Poitiers, din 732?',
      options: [
        'Drept bătălia care a salvat Europa de islam',
        'Probabil drept înfrângerea unei expediții de pradă, umflată de istoriografia franceză a secolului al XIX-lea',
        'Drept o victorie musulmană',
        'Drept un episod născocit',
      ],
      explanation: 'Retragerea musulmană din sudul Franței a răspuns mai mult unor probleme dinăuntru — revoluția abasidă se apropia — decât acelei înfrângeri anume.',
    },
    {
      question: 'Care a fost obârșia despărțirii dintre suniți și șiiți?',
      options: [
        'O ceartă despre textul Coranului',
        'Chestiunea cine trebuia să conducă comunitatea după moartea Profetului',
        'Neînțelegerea asupra datei Ramadanului',
        'Năvălirea mongolă',
      ],
      explanation: 'Muhammad nu a lăsat o rânduială de succesiune statornicită. Adepții lui Ali apărau linia de familie a Profetului; suniții, legitimitatea califilor de fapt.',
    },
    {
      question: 'Ce a prefăcut cearta de succesiune într-o identitate religioasă durabilă?',
      options: [
        'Întemeierea Bagdadului',
        'Moartea lui Husayn la Kerbala, în 680, prăznuită în fiecare an de Ashura',
        'Cucerirea Al-Andalusului',
        'Traducerea lui Aristotel',
      ],
      explanation: 'Kerbala este miezul de simțire al șiismului. Se cuvine să nu fie proiectate asupra trecutului taberele de sectă de azi, care răspund politicii secolului XX.',
    },
    {
      question: 'Ce schimbare socială a adus revoluția abasidă din 750?',
      options: [
        'Izgonirea persanilor din administrație',
        'Primirea mawali-lor, musulmani nearabi, a căror marginalizare sub omeiazi hrănise răscoala',
        'Desființarea califatului',
        'Întoarcerea capitalei la Mecca',
      ],
      explanation: 'Administrația a primit modele persane, iar statul s-a birocratizat. Capitala a trecut de la Damasc la Bagdad, întemeiat în 762.',
    },
    {
      question: 'Potrivit lui Dimitri Gutas, ce a fost mișcarea de traducere abasidă?',
      options: [
        'O inițiativă particulară a unor cărturari izolați',
        'O politică de stat ținută două secole, cu cerere socială adevărată',
        'O urmare întâmplătoare a cuceririi Egiptului',
        'Un proiect exclusiv religios',
      ],
      explanation: 'Creștini nestorieni, evrei și zoroastrieni au luat parte în chip central, ca traducători. Nu a fost păstrare pasivă, ci lărgire critică.',
    },
    {
      question: 'Ce a adus Ibn al-Haytham (Alhazen)?',
      options: [
        'Rânduirea algebrei',
        'Răsturnarea teoriei vederii prin emisie și o metodă experimentală riguroasă în optică',
        'Canonul medicinei',
        'Teoria asabiyyei',
      ],
      explanation: 'Al-Khwarizmi a rânduit algebra, Avicenna a scris Canonul, iar Ibn Khaldun a formulat asabiyya. Alhazen a statornicit temeliile experimentale ale opticii.',
    },
    {
      question: 'De ce este discreditată teza după care al-Ghazali ar fi pricinuit declinul științific islamic?',
      options: [
        'Fiindcă al-Ghazali nu i-a criticat niciodată pe filozofi',
        'Fiindcă producția științifică a continuat secole întregi: Maragheh, în secolul al XIII-lea, a dezvoltat modele care reapar la Copernic',
        'Fiindcă nu a existat știință islamică înainte de secolul al XIII-lea',
        'Fiindcă ijtihadul nu s-a închis niciodată în nicio școală',
      ],
      explanation: 'Astăzi se cercetează de ce nu s-a făcut pasul de instituție european din secolul al XVII-lea, cu explicații ce țin de finanțare, de universități și de tipar.',
    },
    {
      question: 'Ce rol a avut Toledo, după 1085, în istoria de gândire europeană?',
      options: [
        'A fost capitala califatului Cordobei',
        'A fost centrul principal de traducere din arabă în latină: Ptolemeu, Aristotel cu Averroes, Avicenna, algebră și optică',
        'Acolo s-a întemeiat prima universitate europeană',
        'A fost portul comerțului cu mirodenii',
      ],
      explanation: 'Gerard din Cremona și alții au lucrat adesea prin mijlocitori evrei și mozarabi. Povestea „redescoperirii” renascentiste trece de obicei cu vederea această verigă.',
    },
    {
      question: 'Ce tehnologie a ajuns în lumea islamică după bătălia de la Talas (751)?',
      options: ['Praful de pușcă', 'Hârtia', 'Tiparul cu litere mobile', 'Busola'],
      explanation: 'Răspândirea ei a ieftinit foarte mult producția de cărți în lumea islamică, secole înainte ca același lucru să se întâmple în Europa.',
    },
  ],
}
