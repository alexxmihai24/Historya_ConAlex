import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/roma-imperio.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 16 date, 11 concepte, 3 dezbateri, 12 surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const romaImperioRo: TopicTranslation = {
  title: 'Imperiul Roman și transformarea lui',
  description: 'Principat, romanizare, criza secolului al III-lea, creștinare și dezbaterea despre cădere.',
  years: '27 î.Hr.–476 d.Hr.',
  summary:
    'Imperiul Roman a fost secole întregi cel mai mare stat care existase în Occident: vreo cincizeci de milioane de locuitori, patru milioane de kilometri pătrați și o unire economică și culturală fără seamăn până atunci. Istoria lui ridică două întrebări mari. Cum a izbutit să dăinuie atâta vreme un sistem care nu a rezolvat niciodată nici succesiunea, nici finanțarea; și ce înseamnă mai exact că „a căzut”, o expresie pe care cercetarea ultimelor decenii a supus-o unei revizuiri adânci.',
  keyDates: [
    { date: '27 î.Hr.', event: 'Octavian primește numele de Augustus: se naște principatul.' },
    { date: '9 d.Hr.', event: 'Dezastrul de la Teutoburg; Rinul rămâne graniță.' },
    { date: '69 d.Hr.', event: 'Anul celor patru împărați: armata hotărăște succesiunea.' },
    { date: '117 d.Hr.', event: 'Întinderea teritorială cea mai mare, sub Traian.' },
    { date: '122 d.Hr.', event: 'Începe zidul lui Hadrian: de la expansiune la consolidare.' },
    { date: '165–180 d.Hr.', event: 'Ciuma antonină; mortalitate estimată între 10% și 25%.' },
    { date: '212 d.Hr.', event: 'Constitutio Antoniniana: cetățenie pentru aproape toți locuitorii liberi.' },
    { date: '235–284 d.Hr.', event: 'Criza secolului al III-lea: anarhie militară, năvăliri și inflație.' },
    { date: '284–305 d.Hr.', event: 'Dioclețian: tetrarhia, reformă fiscală și administrativă.' },
    { date: '313 d.Hr.', event: 'Edictul de la Milano: toleranță pentru creștinism.' },
    { date: '325 d.Hr.', event: 'Sinodul de la Niceea.' },
    { date: '380 d.Hr.', event: 'Edictul de la Tesalonic: creștinismul niceean, religie oficială.' },
    { date: '378 d.Hr.', event: 'Adrianopol: înfrângere și moartea împăratului Valens în fața goților.' },
    { date: '395 d.Hr.', event: 'Împărțirea administrativă definitivă între Răsărit și Apus.' },
    { date: '410 d.Hr.', event: 'Jefuirea Romei de către Alaric.' },
    { date: '476 d.Hr.', event: 'Odoacru îl detronează pe Romulus Augustulus: sfârșitul convențional al Imperiului de Apus.' },
  ],
  sections: [
    {
      title: 'Principatul: o putere fără nume',
      body: [
        'Augustus a rezolvat problema care îl omorâse pe Cezar: cum să exerciți o putere monarhică într-o societate care ura titlul de rege. Soluția lui a fost să nu întemeieze nicio dregătorie nouă. A strâns puteri republicane deja existente — imperium proconsular asupra provinciilor cu armată, putere tribuniciană pe viață, marele pontificat — și și-a spus sieși princeps, „cel dintâi”, un termen fără conținut juridic.',
        'Urmarea a fost o rânduială înadins nedeslușită. Senatul continua să se întrunească, consulii continuau să fie aleși, formele republicane rămâneau neatinse. Augustus a spus în ale sale Res Gestae că a redat Republica și că nu îi întrecea pe ceilalți decât în auctoritas, faimă. Tacitus, un secol mai târziu, a descris fapta cu o limpezime crudă: numele dregătoriilor au rămas, firea lucrurilor s-a schimbat.',
        'Nedeslușirea avea un preț: nu exista o regulă a succesiunii. Augustus a încercat s-o rezolve prin înfiere înăuntrul familiei lui, dar sistemul a rămas nelămurit din temelii. Anul 69, cu patru împărați în douăsprezece luni, a dat pe față ceea ce Tacitus a numit „taina imperiului”: că împărat puteai fi proclamat și în afara Romei, și că hotărârea era a armatei.',
        'Cu toate acestea, sistemul a mers două veacuri cu o eficiență de seamă. Așa-numitul veac al Antoninilor (96-180 d.Hr.) a îmbinat înfierea unor urmași vrednici, pace înăuntru, expansiune mărginită și belșug negustoresc. Edward Gibbon l-a socotit vremea cea mai fericită a omenirii, judecată nuanțată azi prin amintirea că se sprijinea pe sclavie, pe o fiscalitate nedreaptă și pe o nemăsurată nepotrivire.',
      ].join('\n\n'),
      callout:
        'Res Gestae Divi Augusti, săpate în bronz și copiate în tot imperiul, sunt o autobiografie politică: trebuie citite ca o propagandă întocmită cu grijă, nu ca o mărturie de încredere.',
    },
    {
      title: 'Cum funcționa imperiul: fiscalitate, armată și orașe',
      body: [
        'Statul roman era, pentru mărimea lui, uimitor de ușor. Se socotește că administrația imperială avea doar câteva sute de înalți dregători pentru cincizeci de milioane de locuitori. Treaba de fiecare zi cădea în seama orașelor: strângerea dărilor, ordinea publică, lucrările, cultul. Imperiul funcționa fiindcă a cooptat elitele de la fața locului, care își asumau dregătorii costisitoare în schimbul rangului, iar pe credința lor se sprijinea toată clădirea.',
        'Cheltuiala de căpetenie era armata: între 300.000 și 400.000 de oameni, care mâncau cea mai mare parte a bugetului. Grosul veniturilor venea din dări pe pământ și pe cap de om în provincii. Italia a fost scutită de dare directă până la Dioclețian, o nepotrivire care dă pe față firea inițial extractivă a sistemului.',
        'Romanizarea a fost înțeleasă multă vreme ca răspândirea unei culturi superioare spre margini gata s-o primească. Această citire, formulată de Theodor Mommsen și rânduită în sistem de Francis Haverfield într-un veac al imperialismului britanic, a fost revizuită din temelii. Azi se preferă a se vorbi despre procese de tocmeală și amestecare: elitele provinciale au primit după plac limba, orașul rânduit și zeii romani fiindcă le dădeau acces la putere și la rang, iar în acest proces au zămislit forme amestecate — culte sincretice, nume duble, o arhitectură prefăcută — care nu sunt nici băștinașe, nici romane.',
        'Unirea economică a fost de seamă. Cercetările din carotele de gheață ale Groenlandei arată vârfuri de poluare cu plumb din vremea de sus a imperiului neatinse până la Revoluția Industrială; epavele mediteraneene ajung la cea mai mare frecvență a lor între secolul I î.Hr. și I d.Hr. Comerțul pe distanțe mari mișca grâu egiptean și african, ulei bétic, vin italic și galic, ceramică făcută în serie.',
        'Constitutio Antoniniana a lui Caracalla (212 d.Hr.) a dat cetățenia aproape tuturor locuitorilor liberi ai imperiului. S-a discutat dacă a fost o măsură de unire sau doar una fiscală — lărgirea bazei dărilor pe care le plăteau numai cetățenii. Probabil amândouă: a încheiat un proces de secole și a desființat deosebirea juridică ce rânduise lumea romană, înlocuită de alta nouă, între honestiores și humiliores, adică între cei cu stare și cei săraci.',
      ].join('\n\n'),
    },
    {
      title: 'Criza secolului al III-lea',
      body: [
        'Între 235 și 284 d.Hr. imperiul a fost aproape de prăbușire. Au fost peste douăzeci de împărați recunoscuți și mulți uzurpatori; aproape niciunul nu a murit de moarte firească. Legiunile proclamau candidați și îi detronau, iar războiul civil a ajuns necurmat.',
        'Presiunea din afară a crescut deodată pe două fronturi. Pe Rin și pe Dunăre, confederații germanice mai mari și mai bine rânduite — alamani, franci, goți — au luat locul triburilor răzlețe din vremea de sus a imperiului. În Răsărit, Imperiul sasanid, ivit în 224, era un potrivnic de stat de întâia mărime: în 260 l-a prins viu pe împăratul Valerian, o umilință fără seamăn până atunci.',
        'Peste toate s-a adăugat o criză monetară de manual. Ca să plătească armata, împărații au scăzut conținutul de argint al denarului, care a trecut de la 90% pe vremea lui Augustus la mai puțin de 5% pe la mijlocul secolului al III-lea. Urmarea a fost o inflație fără frâu, întoarcerea în parte la plata în natură și ruperea rețelelor negustorești. Ciuma lui Ciprian, pe la 249-262, a adus și ea mortalitate în masă.',
        'Imperiul a ajuns să se sfărâme: Imperiul galic (260-274) și regatul Palmirei sub Zenobia au funcționat ca state de sine stătătoare mai bine de un deceniu. Faptul că s-a reunit iarăși e la fel de grăitor ca faptul că se rupsese.',
        'Îndreptarea a venit cu Aurelian și, mai ales, cu Dioclețian. Acesta a împărțit puterea în tetrarhie — doi augusti și doi cezari, cu succesiune plănuită —, a înmulțit numărul provinciilor ca să scadă puterea fiecărui guvernator, a despărțit comanda militară de administrația civilă, a reformat fiscalitatea cu un sistem de unități de pământ și de muncă (iugatio-capitatio) și a încercat să oprească inflația printr-un edict de prețuri maxime care a dat greș. Statul ieșit de aici era mult mai mare, mai scump și mai apăsător decât cel de sus al imperiului.',
      ].join('\n\n'),
      callout:
        'Edictul Prețurilor Maxime din 301 fixa tarife pentru peste o mie de produse și slujbe, cu pedeapsa cu moartea pentru nesocotire. E izvorul cel mai bogat despre economia romană târzie și, în același timp, mărturia eșecului lui: mărfurile au pierit de pe piață.',
    },
    {
      title: 'Creștinarea: de la sectă prigonită la religie de stat',
      body: [
        'Creștinismul era, în secolul I, o mișcare iudaică de mică întindere. Răspândirea lui dintâi s-a sprijinit pe rețelele orășenești ale imperiului, pe greaca vorbită de toți și pe drumurile de negoț. Prigoanele au fost răzlețe și mai puține decât lasă să se creadă tradiția muceniciei: cea a lui Decius (250) și cea a lui Dioclețian (303-311) au fost singurele cu întindere și rânduială la scară imperială.',
        'Ceea ce este cu adevărat de seamă din punct de vedere istoric nu e prigoana, ci creșterea. Rodney Stark a socotit, pornind de la o rată de creștere statornică de vreo 3,4% pe an, că creștinii ar fi trecut de la câteva mii la începutul secolului al II-lea la câteva milioane la începutul celui de-al IV-lea: în jur de 10% din populație în preajma lui Constantin. Socoteala e un model discutat, dar mărimea de ordin e primită.',
        'Lămuririle izbânzii îmbină mai mulți factori: o obște cu ajutor reciproc lucrător — văduve, orfani, bolnavi, înmormântări —, o învățătură de mântuire pentru toți, fără cerințe de naștere sau de avere, o poziție bună față de femei, și o statornicie care, spre deosebire de cultele păgâne, nu îngăduia întoarcerea din drum.',
        'Trecerea lui Constantin la creștinism a schimbat măsura lucrurilor. Edictul de la Milano (313) a statornicit toleranța; împăratul a plătit bazilici, a dat privilegii fiscale clerului și a chemat Sinodul de la Niceea (325) ca să rezolve cearta ariană despre firea lui Hristos. Amestecul imperial în chestiuni de doctrină a deschis o legătură de atârnare reciprocă între Biserică și Imperiu care avea să dăinuie secole.',
        'Cu Edictul de la Tesalonic (380), Teodosie a făcut din creștinismul niceean religie oficială și, în deceniul următor, a oprit cultele de mai înainte. Legătura s-a răsturnat cu totul în mai puțin de un veac: religia prigonită a ajuns prigonitoare. Întâmplarea lui Ambrozie al Milanului, care l-a silit pe Teodosie la pocăință publică după măcelul de la Tesalonic (390), arată că Biserica ajunsese în stare să pună hotare puterii imperiale.',
      ].join('\n\n'),
    },
    {
      title: 'Secolul al V-lea în Apus: ce s-a întâmplat de fapt',
      body: [
        'Icoana unor gloate barbare dărâmând un imperiu nu rezistă la cercetare. Grupurile care au intrat în imperiu erau puține la număr — se socotește că vandalii care au trecut în Africa în 429 erau vreo 80.000 de suflete, femei și copii incluși —, erau în parte romanizați, căutau pământuri și rang înăuntrul sistemului și adesea slujeau ca trupe federate ale armatei romane înseși.',
        'Șirul întâmplărilor ține mai degrabă de o roadere fiscală. Fiecare teritoriu pierdut scădea veniturile; cu venituri mai mici era o armată mai mică; cu o armată mai mică se pierdeau mai multe teritorii. Pierderea Africii în 439, provincia cea mai bogată și grânarul Romei, a fost probabil lovitura hotărâtoare. Chris Wickham și Bryan Ward-Perkins au stăruit asupra acestui mecanism care se aduna tot mai mult.',
        'Politica dinăuntru a îngreunat lucrurile. Puterea de fapt a trecut pe mâna unor generali — Stilicho, Aetius, Ricimer —, adesea de neam barbar, care făceau și desfăceau împărați. Roma a încetat să mai fie capitală, înlocuită de Milano și apoi de Ravenna. Când în 476 Odoacru l-a detronat pe Romulus Augustulus, nu a proclamat un imperiu nou: a trimis însemnele imperiale la Constantinopol și a cârmuit Italia ca reprezentant cu numele al împăratului din Răsărit. Cei de atunci nu au simțit sfârșitul a nimic.',
        'Între timp, Imperiul de Răsărit a supraviețuit încă o mie de ani. Această nepotrivire e cea mai bună dovadă împotriva lămuririlor cuprinzătoare: orice pricină ar fi chemată — creștinismul, decăderea morală, plumbul din țevi, apăsarea barbară — ar trebui să lămurească și de ce a rezistat Răsăritul. Răsăritul avea granițe mai scurte și mai lesne de apărat, o temelie fiscală mai bogată — Egipt, Siria — și o capitală de necucerit.',
        'Urmările materiale în Apus au fost, într-adevăr, aspre. Ward-Perkins a documentat, pornind de la cultura materială, o cădere aspră în calitatea și răspândirea ceramicii, în mărimea vitelor, în circulația banilor și în folosirea țiglei: semne ale unei scăderi generale a nivelului de trai și a felului de a fi complex al economiei. Cartea lui, *Căderea Romei și sfârșitul civilizației* (2005), a răspuns înadins citirilor care înfățișează perioada ca pe o trecere blândă.',
      ].join('\n\n'),
      callout:
        'Chiar cuvântul „barbar” vine din greacă și îl numea așa pe cel ce nu vorbea grecește. Aplicat fără altă socoteală popoarelor secolului al V-lea, aduce cu sine o icoană de alteritate deplină pe care izvoarele arheologice nu o susțin.',
    },
    {
      title: 'Moștenirea: drept, limbă și o idee de imperiu',
      body: [
        'Aducerea romană cea mai trainică nu a fost politică, ci juridică. Dreptul roman a dezvoltat categorii — proprietate, contract, obligație, persoană juridică, bună-credință — cu o măsură de abstractizare pe care nicio altă tradiție veche nu a atins-o. Strângerea lui în Corpus Iuris Civilis al lui Iustinian (528-534) și redescoperirea lui la Bologna în secolul al XI-lea l-au făcut temelia sistemelor juridice continentale europene și latinoamericane.',
        'Urma lingvistică este la fel de temeinică. Latina de rând a provinciilor apusene a dat naștere limbilor romanice: castiliana, portugheza, catalana, galiciana, franceza, occitana, italiana, română. Iar latina cultă a rămas limba administrației, a Bisericii, a dreptului și a științei europene până în secolul al XVIII-lea.',
        'Ideea de imperiu ca rânduială universală legiuită a supraviețuit dispariției statului care o întrupase. A fost pretinsă în imperiul carolingian, în Sfântul Imperiu Roman de Națiune Germană, în Rusia care și-a spus sieși „a treia Romă”, și în icoana politică a monarhiilor moderne. Cuvântul kaiser și cuvântul țar se trag amândouă din Cezar.',
        'Se cuvine, totuși, să ne împotrivim ispitei de a citi Roma ca strămoașă directă a ceva anume. A fost o societate a sclaviei, în care poate între 10% și 20% din popor nu avea personalitate juridică; expansiunea ei a însemnat nimiciri documentate chiar de scriitorii ei, precum cea a Galiei povestită de Cezar; iar belșugul ei se sprijinea pe o extragere fiscală din provincii supuse. Interesul istoric al Romei nu stă în pilda ei, ci în faptul că e cazul cel mai bine documentat despre cum se clădește, se ține și se destramă un stat de mărime continentală.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Princeps', definition: '„Cel dintâi”: titlu fără conținut juridic cu care Augustus a ascuns o putere monarhică.' },
    { term: 'Auctoritas', definition: 'Faimă și greutate morală. Augustus a spus că nu îi întrece pe ceilalți decât în aceasta, nu în putere formală.' },
    { term: 'Puterea tribuniciană', definition: 'Putere pe viață de veto și de neatingere pe care împăratul o strângea fără să fie tribun.' },
    { term: 'Constitutio Antoniniana', definition: 'Edictul lui Caracalla (212) care a dat cetățenia aproape tuturor locuitorilor liberi ai imperiului.' },
    { term: 'Honestiores / humiliores', definition: 'Deosebire juridică nouă după 212: cei cu stare față de cei săraci, cu pedepse diferite pentru aceeași faptă.' },
    { term: 'Tetrarhia', definition: 'Sistemul lui Dioclețian cu doi augusti și doi cezari, ca să împartă cârmuirea și să plănuiască succesiunea.' },
    { term: 'Iugatio-capitatio', definition: 'Sistem fiscal roman târziu, întemeiat pe unități de pământ și de muncă.' },
    { term: 'Limes', definition: 'Sistem de graniță întărită, mai degrabă zonă de control și de contact decât zid neîntrerupt.' },
    { term: 'Foederati', definition: 'Popoare așezate înăuntrul imperiului, cu îndatorirea de a da trupe sub căpeteniile lor proprii.' },
    { term: 'Romanizare', definition: 'Odinioară, răspândire culturală într-un singur sens; azi se înțelege ca o tocmeală și o amestecare între Roma și elitele de la fața locului.' },
    { term: 'Corpus Iuris Civilis', definition: 'Culegere juridică a lui Iustinian (528-534), temelia dreptului continental european după redescoperirea lui medievală.' },
  ],
  debates: [
    {
      question: 'De ce a căzut Imperiul Roman de Apus?',
      positions: [
        {
          school: 'Decădere dinăuntru (Gibbon, 1776-1789)',
          argument:
            'Pierderea virtuții cetățenești, povara armatei plătite și, mai cu seamă, creștinismul, care ar fi întors puterile spre lumea de dincolo și ar fi slăbit duhul militar și credința față de stat.',
        },
        {
          school: 'Roadere fiscală și militară (Ward-Perkins, Heather)',
          argument:
            'Pierderea provinciilor a scăzut veniturile, ceea ce a scăzut armata, ceea ce a pricinuit noi pierderi. Căderea Africii în 439 a fost hotărâtoare. Presiunea din afară, adevărată și tot mai mare, a lucrat asupra unui stat sugrumat fiscal.',
        },
        {
          school: 'Transformare, nu cădere (Brown, Goffart)',
          argument:
            'Nu a fost o prăbușire, ci o lungă trecere: regatele germanice s-au așezat înăuntrul structurilor romane, au păstrat administrația, latina și Biserica, iar Antichitatea târzie a fost o vreme de zămislire religioasă și culturală proprie.',
        },
      ],
      state:
        'Modelul „transformării” a stăpânit anii optzeci și nouăzeci; Ward-Perkins și Heather au răspuns aducând dovezi materiale ale unei scăderi aspre a nivelului de trai în Apus. Azi se primește că a fost deopotrivă continuitate instituțională și o regresie economică adevărată, cu mare deosebire de la o regiune la alta. Supraviețuirea Răsăritului rămâne cea mai bună probă a oricărei lămuriri.',
    },
    {
      question: 'Ce a fost romanizarea?',
      positions: [
        {
          school: 'Răspândire culturală (Mommsen, Haverfield)',
          argument:
            'Roma ar fi adus orașul rânduit, dreptul, limba și civilizația unor popoare mai puțin înaintate, care le-ar fi primit din pricina superiorității lor vădite. Model formulat în plin avânt al imperialismului european.',
        },
        {
          school: 'Tocmeală și amestecare (Woolf, Mattingly)',
          argument:
            'Elitele provinciale au primit după plac elemente romane fiindcă dădeau acces la putere și la rang, zămislind forme amestecate. A fost și împotrivire, nepăsare și nedreptate: încercarea cuceririi a fost cu totul alta pentru o elită galică decât pentru un țăran sau un sclav.',
        },
      ],
      state:
        'Modelul difuzionist e lăsat deoparte ca temei de lămurire. Se preferă concepte ca „identități deosebite” (Mattingly), care recunosc încercări diferite înăuntrul aceleiași provincii.',
    },
    {
      question: 'A fost Constitutio Antoniniana o măsură de unire sau una fiscală?',
      positions: [
        {
          school: 'Motiv fiscal (Dio Cassius, martor al vremii)',
          argument:
            'Caracalla ar fi căutat să lărgească baza dărilor pe care le plăteau numai cetățenii, mai ales cea de moștenire. Un istoric al vremii i-o pune limpede pe seamă.',
        },
        {
          school: 'Încununare a unirii',
          argument:
            'Încheia un proces de veacuri de lărgire treptată a cetățeniei și răspundea faptului că deosebirea dintre cetățean și peregrin își pierduse rostul practic într-un imperiu de-acum omogen.',
        },
      ],
      state:
        'Se primesc amândouă pricinile ca fiind potrivite una cu alta. Ce contează mai mult e urmarea: cetățenia a încetat să fie un privilegiu aparte și a fost înlocuită cu împărțirea socio-economică dintre honestiores și humiliores.',
    },
  ],
  sources: [
    { author: 'Augustus', title: 'Res Gestae Divi Augusti', year: '14 d.Hr.', kind: 'primaria', note: 'Autobiografie politică săpată în bronz și copiată în tot imperiul. Propagandă, nu mărturie de încredere.' },
    { author: 'Tacitus', title: 'Anale; Istorii; Germania', year: 'c. 110–120 d.Hr.', kind: 'primaria', note: 'Cercetare critică a principatului din unghiul senatorial. Formulează „taina imperiului”.' },
    { author: 'Plinius cel Tânăr', title: 'Scrisori, cartea a X-a', year: 'c. 111 d.Hr.', kind: 'primaria', note: 'Corespondență cu Traian: administrarea provinciilor și cea dintâi mărturie oficială despre creștini.' },
    { author: 'Dioclețian', title: 'Edictul Prețurilor Maxime', year: '301 d.Hr.', kind: 'primaria', note: 'Tarife pentru peste o mie de mărfuri și slujbe. Izvor de căpetenie despre economia romană târzie.' },
    { author: 'Ammianus Marcellinus', title: 'Res Gestae', year: 'c. 390 d.Hr.', kind: 'primaria', note: 'Ultima mare istorie latină; povestește Adrianopolul ca martor apropiat.' },
    { author: 'Augustin de Hipona', title: 'Cetatea lui Dumnezeu', year: '413–426', kind: 'primaria', note: 'Răspuns la jaful din 410 și la învinuirea că ar fi adus creștinismul ruina Romei.' },
    { author: 'Edward Gibbon', title: 'The History of the Decline and Fall of the Roman Empire', year: '1776–1789', kind: 'estudio', note: 'Lucrare de temelie a dezbaterii; pune în parte răspunderea pe creștinism.' },
    { author: 'Peter Brown', title: 'The World of Late Antiquity', year: '1971', kind: 'estudio', note: 'Întemeiază modelul Antichității târzii ca transformare zămislitoare, nu ca decădere.' },
    { author: 'Bryan Ward-Perkins', title: 'The Fall of Rome and the End of Civilization', year: '2005', kind: 'estudio', note: 'Răspuns la modelul transformării, cu dovezi arheologice de regresie materială.' },
    { author: 'Peter Heather', title: 'The Fall of the Roman Empire: A New History', year: '2005', kind: 'estudio', note: 'Subliniază rolul adevărat al presiunii din afară asupra unui stat slăbit fiscal.' },
    { author: 'Greg Woolf', title: 'Becoming Roman: The Origins of Provincial Civilization in Gaul', year: '1998', kind: 'estudio', note: 'Model al romanizării ca tocmeală și amestecare.' },
    { author: 'Chris Wickham', title: 'Framing the Early Middle Ages', year: '2005', kind: 'estudio', note: 'Comparație regională statornică a trecerii dintre lumea romană și cea medievală.' },
  ],
  documents: [
    {
      section: 3,
      title: 'Un guvernator întreabă ce să facă cu creștinii',
      text: [
        'Am ținut această rânduială cu cei care îmi erau pârâți ca fiind creștini. Îi întrebam dacă sunt; pe cei care mărturiseau, îi întrebam a doua și a treia oară, amenințându-i cu chinul; pe cei ce stăruiau, porunceam să fie duși la moarte.',
        'Fiindcă nu mă îndoiam că, orice ar fi mărturisit, îndărătnicia și încăpățânarea lor de neînduplecat trebuiau pedepsite.',
        'Răspunsul lui Traian: nu trebuie căutați. Dacă sunt pârâți și se dovedesc vinovați, trebuie pedepsiți; dar în așa fel încât cel care tăgăduiește că e creștin și o dovedește prin fapte să capete iertare. Pârâle fără nume nu trebuie primite în nicio judecată.',
      ].join('\n\n'),
      source: 'Plinius cel Tânăr, Scrisori, X, 96 și 97. Bitinia, pe la anul 112.',
      note: 'Versiune proprie după latină.',
      question: 'Traian oprește căutarea creștinilor și oprește pârâle fără nume. Se potrivește asta cu ideea unei prigoane rânduite? Ce anume i se pare, de fapt, vrednic de pedeapsă lui Plinius?',
    },
  ],
  images: [
    {
      alt: 'Colosseumul din Roma văzut din afară, cu arcadele lui suprapuse și fațada în parte surpată',
      caption: 'Amfiteatrul Flavian, deschis în anul 80.',
    },
    {
      alt: 'Statuie de marmură a unui bărbat cu platoșă împodobită, brațul drept ridicat și un mic amoraș la picioare',
      caption: 'Augustus din Prima Porta. Se înfățișează ca general biruitor și urmaș al Venerei, niciodată ca rege: principatul e o putere adevărată fără nume legal.',
    },
    {
      alt: 'Apeduct roman cu trei rânduri de arcade de piatră trecând peste un râu între maluri împădurite',
      caption: 'Pont du Gard, în Galia Narbonensă, din secolul I. Apa cobora 17 metri pe 50 de kilometri: lucrarea publică e fața văzută a fiscalității imperiale.',
    },
    {
      alt: 'Arc de triumf cu trei deschideri, cu reliefuri și statui deasupra coloanelor, văzut din față',
      caption: 'Arcul lui Constantin, din 315. O bună parte din reliefurile lui au fost smulse din monumente mai vechi: Roma secolului al IV-lea se citează pe sine fiindcă nu se mai poate egala.',
    },
  ],
  questions: [
    {
      question: 'Cum a rezolvat Augustus problema exercitării unei puteri monarhice la Roma?',
      options: [
        'Proclamându-se rege cu sprijinul Senatului',
        'Strângând puteri republicane deja existente fără să întemeieze nicio dregătorie nouă și numindu-se princeps',
        'Desființând Senatul și dregătoriile',
        'Mutând capitala în afara Italiei',
      ],
      explanation: 'Imperium proconsular, puterea tribuniciană și marele pontificat îi dădeau puterea adevărată. Formele republicane rămâneau neatinse: Tacitus a spus că s-au schimbat lucrurile, nu numele.',
    },
    {
      question: 'Care era „taina imperiului” pe care a dat-o pe față anul 69, potrivit lui Tacitus?',
      options: [
        'Că împăratul putea fi detronat de Senat',
        'Că împărat puteai fi proclamat și în afara Romei, și că hotărârea era a armatei',
        'Că provinciile erau mai bogate decât Italia',
        'Că succesiunea era fixată prin lege',
      ],
      explanation: 'Principatul nu a rezolvat niciodată succesiunea. Patru împărați în douăsprezece luni au dat pe față cine avea puterea hotărâtoare.',
    },
    {
      question: 'Pe ce se sprijinea administrarea de fiecare zi a imperiului?',
      options: [
        'Pe o birocrație imperială de zeci de mii de dregători',
        'Pe orașe și pe elitele locale cooptate, cu foarte puțini înalți dregători imperiali',
        'Pe armată, care cârmuia fiecare provincie',
        'Pe Senat, care administra direct fiecare regiune',
      ],
      explanation: 'Doar câteva sute de înalți dregători pentru cincizeci de milioane de locuitori. Sistemul funcționa fiindcă elitele locale își asumau dregătorii costisitoare în schimbul rangului.',
    },
    {
      question: 'De ce a fost revizuit conceptul clasic de „romanizare”?',
      options: [
        'Fiindcă Roma nu a înrâurit provinciile',
        'Fiindcă înfățișa o răspândire într-un singur sens a unei culturi superioare, model formulat în plin imperialism european',
        'Fiindcă provinciile erau deja latine dinainte de cucerire',
        'Fiindcă nu există urme romane în afara Italiei',
      ],
      explanation: 'Azi se vorbește despre tocmeală și amestecare: elitele au primit după plac ce era romanesc din interes, iar încercarea a fost cu totul alta pentru un aristocrat galic decât pentru un țăran.',
    },
    {
      question: 'Ce dovadă materială arată puterea economică a imperiului de sus?',
      options: [
        'Lipsa monedei',
        'Vârfurile de plumb din carotele de gheață ale Groenlandei și frecvența cea mai mare a epavelor mediteraneene',
        'Dispariția ceramicii făcute în serie',
        'Părăsirea generală a orașelor',
      ],
      explanation: 'Nivelurile de poluare cu plumb nu au mai fost atinse până la Revoluția Industrială. Epavele sunt un bun semn ocolit al volumului de trafic pe mare.',
    },
    {
      question: 'Ce deosebire a luat locul celei dintre cetățean și peregrin după edictul din 212?',
      options: [
        'Patricieni și plebei',
        'Honestiores și humiliores: cei cu stare și cei săraci, cu pedepse diferite pentru aceeași faptă',
        'Italici și provinciali',
        'Creștini și păgâni',
      ],
      explanation: 'Odată răspândită la toți, cetățenia a încetat să mai fie un privilegiu aparte. Ierarhia juridică s-a sprijinit de-acum pe față pe poziția socio-economică.',
    },
    {
      question: 'Ce s-a întâmplat cu conținutul de argint al denarului în secolul al III-lea?',
      options: [
        'A rămas neschimbat',
        'A scăzut de la 90% pe vremea lui Augustus la mai puțin de 5%, cu inflație fără frâu',
        'A crescut prin cucerirea unor mine noi',
        'Denarul a fost înlocuit cu aur curat',
      ],
      explanation: 'Devalorizarea slujea la plata armatei. A pricinuit inflație, întoarcere în parte la plata în natură și ruperea rețelelor negustorești.',
    },
    {
      question: 'Ce potrivnic nou s-a ivit la granița răsăriteană în 224?',
      options: ['Regatul Palmirei', 'Imperiul sasanid', 'Alamanii', 'Regatul Armeniei'],
      explanation: 'Era un potrivnic de stat de întâia mărime, nu o confederație de triburi. În 260 l-a prins viu pe împăratul Valerian.',
    },
    {
      question: 'Ce urmărea tetrarhia lui Dioclețian?',
      options: [
        'Împărțirea imperiului în patru state de sine stătătoare',
        'Împărțirea cârmuirii între doi augusti și doi cezari și plănuirea succesiunii',
        'Înlocuirea armatei cu miliții provinciale',
        'Restaurarea Republicii',
      ],
      explanation: 'Împreună cu înmulțirea provinciilor și despărțirea comenzii militare de administrația civilă, urmărea să stabilească puterea după o jumătate de veac de anarhie militară.',
    },
    {
      question: 'Ce factori lămuresc mai bine răspândirea creștinismului înainte de Constantin?',
      options: [
        'Trecerea silită impusă de armată',
        'Ajutor reciproc lucrător, mântuire pentru toți fără cerințe de naștere, poziție bună față de femei și statornicie',
        'Sprijinul Senatului roman',
        'Oprirea cultelor de mai înainte',
      ],
      explanation: 'Prigoanele au fost răzlețe; doar cele ale lui Decius și Dioclețian au avut întindere la scară imperială. Ce e de seamă e creșterea statornică, nu asuprirea.',
    },
    {
      question: 'Ce a deschis chemarea Sinodului de la Niceea de către Constantin în 325?',
      options: [
        'Despărțirea dintre Biserică și Stat',
        'Amestecul imperial în chestiuni de doctrină și o atârnare reciprocă între Biserică și Imperiu',
        'Oprirea creștinismului',
        'Întemeierea papalității',
      ],
      explanation: 'Împăratul a chemat și a condus un sinod ca să rezolve cearta ariană. Legătura dintre puterea politică și autoritatea religioasă a rămas împletită secole întregi.',
    },
    {
      question: 'Ce mecanism care se aduna tot mai mult arată Ward-Perkins și Heather pentru secolul al V-lea?',
      options: [
        'Trecerea împăraților la creștinism',
        'Mai puțin teritoriu înseamnă mai puține venituri, mai puține venituri înseamnă o armată mai mică, iar o armată mai mică înseamnă pierderea a și mai mult teritoriu',
        'Depopularea prin plecarea spre Răsărit',
        'Epuizarea minelor de argint',
      ],
      explanation: 'Pierderea Africii în 439, provincia cea mai bogată și grânarul Romei, a fost probabil lovitura hotărâtoare a acestei spirale.',
    },
    {
      question: 'Ce a făcut Odoacru în 476 după ce l-a detronat pe Romulus Augustulus?',
      options: [
        'S-a proclamat împărat de Apus',
        'A trimis însemnele imperiale la Constantinopol și a cârmuit Italia ca reprezentant cu numele al împăratului de Răsărit',
        'A distrus orașul Roma',
        'A restaurat Republica romană',
      ],
      explanation: 'Cei de atunci nu au simțit sfârșitul a nimic. Data de 476 ca „cădere” e o construcție istoriografică de mai târziu.',
    },
    {
      question: 'De ce e supraviețuirea Imperiului de Răsărit o problemă pentru lămuririle cuprinzătoare ale căderii?',
      options: [
        'Fiindcă și Răsăritul a căzut în 476',
        'Fiindcă orice pricină ar fi chemată — creștinism, decădere, apăsare barbară — ar trebui să lămurească de ce a rezistat Răsăritul încă o mie de ani',
        'Fiindcă Răsăritul nu era creștin',
        'Fiindcă Răsăritul nu avea granițe',
      ],
      explanation: 'Răsăritul avea granițe mai scurte și mai lesne de apărat, o temelie fiscală mai bogată — Egipt și Siria — și o capitală de necucerit. E cea mai bună probă a oricărei ipoteze.',
    },
    {
      question: 'Ce susține modelul „Antichității târzii” al lui Peter Brown?',
      options: [
        'Că imperiul s-a prăbușit dintr-odată și catastrofal',
        'Că a fost o lungă transformare zămislitoare, cu continuitatea structurilor romane înăuntrul regatelor germanice',
        'Că barbarii au nimicit populația romană',
        'Că imperiul nu a existat niciodată ca unitate',
      ],
      explanation: 'Ward-Perkins a răspuns mai apoi aducând dovezi materiale ale unei regresii economice aspre în Apus. Azi se primește că au fost amândouă, cu mare deosebire de la o regiune la alta.',
    },
    {
      question: 'Care e moștenirea romană cea mai temeinică în Europa continentală de azi?',
      options: [
        'Rânduiala militară',
        'Dreptul roman, strâns de Iustinian și redescoperit la Bologna în secolul al XI-lea',
        'Sistemul de drumuri',
        'Religia păgână de odinioară',
      ],
      explanation: 'Categorii ca proprietatea, contractul, obligația sau persoana juridică sunt temelia sistemelor juridice continentale europene și latinoamericane.',
    },
  ],
}
