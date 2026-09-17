import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/mesopotamia.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13 date, 10
   concepte, 3 dezbateri, 11 surse, un document comentat, 4 imagini și 15
   întrebări (nu 16) cu opțiunile pe aceleași poziții. */
export const mesopotamiaRo: TopicTranslation = {
  title: 'Mesopotamia și nașterea statului',
  description: 'Urbanizare, scris, drept și primele imperii dintre Tigru și Eufrat.',
  years: 'c. 4000–539 î.Hr.',
  summary:
    'Între Tigru și Eufrat au apărut, în mileniul al IV-lea î.Hr., cele dintâi orașe de mărime mare, cel dintâi scris și cele dintâi birocrații de stat cunoscute. Mesopotamia nu e doar leagănul cronologic al acestor fapte: e laboratorul unde se poate cerceta cel mai bine cum se leagă prisosul agrar, templul, palatul, socoteala și dreptul, fiindcă arhivele ei de lut se păstrează în sute de mii de tăblițe.',
  keyDates: [
    { date: 'c. 5500 î.Hr.', event: 'Cultura Ubaid: primele temple și agricultură irigată în sud.' },
    { date: 'c. 3500–3100 î.Hr.', event: 'Perioada Uruk: primul oraș mare, socoteală și scris protocuneiform.' },
    { date: 'c. 2900–2350 î.Hr.', event: 'Dinastic Arhaic: cetăți-stat sumeriene potrivnice (Ur, Lagash, Umma, Kish).' },
    { date: 'c. 2334 î.Hr.', event: 'Sargon din Akkad întemeiază primul imperiu teritorial cunoscut.' },
    { date: 'c. 2112–2004 î.Hr.', event: 'A treia dinastie de la Ur: birocrație de-a dreptul documentată și coduri de legi.' },
    { date: 'c. 1792–1750 î.Hr.', event: 'Domnia lui Hammurabi al Babilonului; stela legilor.' },
    { date: 'c. 1595 î.Hr.', event: 'Jaful hitit al Babilonului; apoi, stăpânirea casită.' },
    { date: 'c. 1350–1050 î.Hr.', event: 'Imperiul asirian mijlociu; expansiune de la Assur.' },
    { date: '883–627 î.Hr.', event: 'Imperiul neoasirian: strămutări rânduite și armată statornică.' },
    { date: '668–627 î.Hr.', event: 'Assurbanipal strânge la Ninive marea bibliotecă.' },
    { date: '612 î.Hr.', event: 'Căderea Ninivei în fața mezilor și a babilonienilor.' },
    { date: '605–562 î.Hr.', event: 'Nabucodonosor al II-lea: imperiul neobabilonian și strămutarea lui Iuda.' },
    { date: '539 î.Hr.', event: 'Cirus al II-lea al Persiei ia Babilonul; sfârșitul neatârnării mesopotamiene.' },
  ],
  sections: [
    {
      title: 'Un mediu greu: apă, sare și muncă',
      body: [
        'Câmpia aluvială din sudul Irakului nu are piatră, nici lemn de clădit, nici metale. Are, în schimb, soluri rodnice și două râuri. Dar rânduiala lor e cu bucluc: Tigrul și Eufratul cresc primăvara, când cerealele sunt deja pe câmp, nu înainte de semănat cum e Nilul, și o fac dintr-odată și fără de prevăzut. A ara acolo cere o stăpânire lucrătoare a apei: canale de abatere, diguri, stăvilare și scurgere.',
        'Acea trudă a avut un preț ecologic documentat. Irigația cu evaporare puternică lasă sare în sol. Arhivele administrative îngăduie urmărirea procesului: între 2400 și 1700 î.Hr., partea orzului — mai răbdător la sare — față de grâu a trecut de la o împărțire deopotrivă la o stăpânire aproape deplină, pe când roadele înregistrate scădeau. Thorkild Jacobsen și Robert Adams au descris această sărăturare treptată într-un articol de seamă din 1958 și au legat-o de mutarea centrului politic spre nord.',
        'Lipsa de materii dintâi lămurește o altă însușire din temelie: Mesopotamia a atârnat mereu de schimbul pe distanțe lungi. Lemnul venea din Liban și din Zagros, arama din Oman și din Anatolia, lapislazuli din Afganistan, cornalina din valea Indusului. Această atârnare a făcut din comerț și din stăpânirea drumurilor o treabă de stat, și lămurește o bună parte din politica ei din afară și cea militară.',
      ].join('\n\n'),
      callout:
        'Orzul nu era doar hrană: funcționa ca unitate de socoteală și mijloc de plată a simbriilor. Arhivele dau leafa în litri de orz și în greutăți de argint cu mult înainte să fi existat moneda bătută.',
    },
    {
      title: 'Revoluția orașului la Uruk',
      body: [
        'Pe la 3500 î.Hr., Uruk a ajuns la o întindere și o populație fără seamăn de-atunci — socotelile merg de la 20.000 la 50.000 de locuitori — și a dezvoltat o arhitectură uriașă de temple pe terase. Gordon Childe a numit acest proces „revoluția orașului” și l-a arătat prin zece însușiri: strângere de oameni, meșteșug deosebit, tribut, mărime uriașă, clase obștești, scris, știință de prevedere, artă ce înfățișează, comerț din afară și un stat cu teritoriu.',
        'Socoteala a venit înaintea scrisului. Denise Schmandt-Besserat a arătat că bucăți de lut cu forme rânduite (jetoane) se foloseau din mileniul al VIII-lea ca să numere cantități de mărfuri. Acele bucăți se țineau în bullae — sfere de lut pecetluite — și, ca să se știe ce cuprindeau fără să fie sparte, se întipăreau formele pe suprafață. Pasul următor a fost să se treacă cu vederea cuprinsul și să se păstreze numai semnele: tăblița.',
        'Cele dintâi tăblițe de la Uruk IV, pe la 3300 î.Hr., sunt documente economice: cantități de grâu, capete de vite, rații, liste de meserii. Nu e nici poezie, nici povestire. Scrisul se naște ca unealtă de gospodărire, nu de literatură; textele literare vin veacuri mai târziu.',
        'Rânduiala politică de căpetenie în vremea Dinasticului Arhaic a fost cetatea-stat: un nucleu orășenesc cu teritoriul lui agricol, cu zeul lui ocrotitor, cu templul lui și cu cârmuitorul lui — ensi sau lugal. Aceste cetăți se întreceau pentru apă și pentru pământ necurmat. Cearta dintre Lagash și Umma pentru hotarul de la Guedena e documentată peste un veac și a zămislit, în Stela Vulturilor, una dintre cele dintâi povestiri de război păstrate.',
      ].join('\n\n'),
    },
    {
      title: 'Scrisul cuneiform și cultura arhivei',
      body: [
        'Cuneiforma se scria întipărind o trestie tăiată în secțiune triunghiulară pe lut proaspăt. E un sistem amestecat: semne logografice ce valorează cât un cuvânt, semne silabice ce valorează cât un sunet și determinative ce rânduiesc după înțeles. S-a folosit peste trei milenii și a slujit unor limbi foarte deosebite — sumeriană, akkadiană, elamită, hitită, urarteană —, la fel cum alfabetul latin slujește azi unor limbi fără rudenie.',
        'Lutul e un suport norocos pentru istoric: când o clădire ardea, tăblițele se coceau și se păstrau mai bine. De aceea avem arhive întregi. Cele ale celei de-a treia dinastii de la Ur strâng peste o sută de mii de documente administrative și îngăduie refacerea economiei unui stat vechi cu o de-amănunțime de neatins la alte civilizații: roade pe parcelă, rații pe muncitor, catastife de vite, socoteli de ateliere de țesut cu sute de lucrătoare.',
        'Pregătirea scribilor se făcea în edubba, „casa tăblițelor”. Exercițiile lor — liste de cuvinte, copii de zicale, probleme de matematică, texte de ceartă între elevi — dau la iveală un curs statornic. Matematica mesopotamiană folosea un sistem în bază șaizeci a cărui moștenire o folosim și azi: șaizeci de minute, șaizeci de secunde, trei sute șaizeci de grade. Tăblița Plimpton 322 strânge triplete pitagoreice cu peste o mie de ani înaintea lui Pitagora.',
        'Descifrarea de azi se datorează mai ales lui Henry Rawlinson, care a copiat cu primejdie mare inscripția în trei limbi de la Behistun, poruncită de Darius I pe o stâncă. Varianta în persana veche, mai simplă, a slujit ca ușă de intrare spre elamită și spre akkadiană, la fel cum greaca a fost pentru hieroglife.',
      ].join('\n\n'),
      callout:
        'Epopeea lui Ghilgameș se cunoaște mai ales din varianta statornicită a bibliotecii lui Assurbanipal. Povestirea ei despre potop, cu un supraviețuitor înștiințat de un zeu, arată asemănări limpezi cu cea biblică și a stârnit o ceartă mare când George Smith a publicat-o în 1872.',
    },
    {
      title: 'Templu, palat și economie: dezbaterea despre cine cârmuiește',
      body: [
        'Rânduiala economică mesopotamiană a fost tălmăcită în chipuri foarte deosebite. La începutul secolului al XX-lea, Anton Deimel a propus, pornind de la arhivele din Lagash, modelul „cetății-templu”: sanctuarul ar fi stăpânit aproape tot pământul și ar fi rânduit toată producția, într-o economie de-a dreptul redistributivă, fără proprietate particulară de seamă.',
        'Revizuirea de mai apoi a dărâmat acea icoană. Igor Diakonoff a arătat că arhivele din Lagash țineau de un singur templu și nu înfățișau cetatea întreagă, și a documentat pământ obștesc de familii largi și proprietate particulară ce se putea transmite. Azi se primește un model amestecat: trăiau laolaltă sectorul templului, cel al palatului și un sector particular, în proporții schimbătoare după vreme și după cetate.',
        'Această dezbatere se întretaie cu alta mai largă, cea despre firea economiei vechi. Karl Polanyi a susținut că economiile dinainte de capitalism funcționau prin răspuns reciproc și prin redistribuire, cu „porturi de comerț” cârmuite, și nu prin piețe ce fac prețul. Asiriologii ce au studiat arhiva negustorilor asirieni de la Kanesh — scrisori particulare de negoț din secolul al XIX-lea î.Hr., cu tovărășii, credite, dobânzi și arbitraj de prețuri între Assur și Anatolia — au adus dovezi în sensul potrivnic.',
        'Chestiunea nu e doar de meșteșug: hotărăște dacă se poate vorbi de „capital”, de „piață” sau de „câștig” în lumea veche, sau dacă acele noțiuni aduc categorii moderne în societăți ce funcționau după altă logică. Poziția de căpetenie de azi e de mijloc și de fapte: au fost piețe și prețuri ce se schimbau, dar prinse în instituții — templu, palat, familie — ce le rânduiau hotărâtor.',
      ].join('\n\n'),
    },
    {
      title: 'Drept, judecată și problema Codului lui Hammurabi',
      body: [
        'Stela de diorit a lui Hammurabi, găsită la Susa în 1901, cuprinde un prolog, vreo 282 de rânduieli și un epilog. E textul juridic vechi cel mai cunoscut, deși nu cel mai vechi: îl întrec în vechime reformele lui Urukagina, codul lui Ur-Nammu și cel al lui Lipit-Ishtar.',
        'Rânduielile lui au formă de caz — „dacă un om face X, atunci Y” — și pun pedepse deosebite după starea celui vinovat. Societatea deosebește trei stări: awilum (om liber cu drepturi depline), mushkenum (dependent) și wardum (sclav). A lovi un awilum și a lovi un sclav au urmări deosebite; a ucide fiica unui om se poate pedepsi ucigând fiica vinovatului. Legea talionului trăiește laolaltă cu despăgubirea în bani, după cine e jertfa.',
        'Dezbaterea istoriografică de căpetenie e ce era, de fapt, acest text. Citirea tradițională îl înțelegea ca pe un cod în vigoare, aplicabil de judecătorii. Obiecția hotărâtoare e că miile de documente judiciare păstrate din acea vreme aproape niciodată nu îl citează, și că uneori hotărăsc într-alt sens decât cel poruncit de stelă. Jean Bottéro și F. R. Kraus au propus de aceea să fie citit ca pe un monument de idee: arătarea unui rege drept în fața zeilor și a urmașilor, poate și ca o culegere de pilde vrednice pentru pregătirea judecătorilor.',
        'Cu toate acestea, textul documentează bine structura obștească: prețuri maxime, simbrii, răspunderea de meserie a zidarului și a doctorului, rânduiala căsătoriei și a divorțului, datorii și robie pentru datorii. Și arată o grijă statornică în ideologia regală mesopotamiană: vestirea din vreme în vreme a misharum-ului, ștergeri generale de datorii menite să oprească îndatorarea de a lipsi statul de plătitori de dări și de soldați.',
      ].join('\n\n'),
      callout:
        'Prologul stelei spune că legea există „ca cel tare să nu-l asuprească pe cel slab”. E rostirea cea mai veche păstrată a dreptății ca margine a puterii, deși aplicarea ei adevărată era foarte nepotrivită.',
    },
    {
      title: 'De la cetatea-stat la imperiu',
      body: [
        'Sargon din Akkad, pe la 2334 î.Hr., a supus cetățile sumeriene și a clădit cea dintâi rânduială politică ce poate fi numită imperiu teritorial: guvernatori numiți, garnizoane, o limbă administrativă comună și o fiică așezată preoteasă la Ur — Enheduanna, autoare de imnuri și cea dintâi figură literară din istorie al cărei nume îl cunoaștem.',
        'A treia dinastie de la Ur a dus strângerea puterii la culme. Documentația ei îngăduie să fie văzut un stat ce stăpânește ateliere, împarte rații, măsoară munca în zile-om și pedepsește lipsurile de producție. Acest aparat s-a dovedit șubred: s-a surpat în câteva decenii din îmbinarea presiunii amoreene, a crizelor agrare și a asprimii fiscale.',
        'Imperiul neoasirian (secolele IX-VII î.Hr.) a fost clădirea cea mai trainică, și totodată cea mai crudă, dintre cele documentate. S-a sprijinit pe o armată statornică, pe folosirea rânduită a groazei ca unealtă de descurajare — basoreliefuri de palat ce arată trăgănire în țeapă și jupuire — și pe strămutarea în masă a unor popoare întregi, socotită la câteva milioane de suflete de-a lungul a trei veacuri. Politica avea o logică administrativă: dezrădăcinarea elitelor locale, ruperea solidarităților și strămutarea mâinii de lucru unde era nevoie.',
        'Căderea ei a fost iute. Unirea mezilor și a babilonienilor a luat Assur în 614 și Ninive în 612 î.Hr. Imperiul neobabilonian al lui Nabopolassar și al lui Nabucodonosor al II-lea a moștenit spațiul, a reclădit Babilonul cu poarta Ishtar și marea ziggurat, și a strămutat elitele lui Iuda, întâmplare pe care Biblia ebraică a prefăcut-o în trăire de temelie. În 539 î.Hr., Cirus al II-lea al Persiei a intrat în Babilon; Cilindrul lui Cirus înfățișează cucerirea ca restaurare a cultului lui Marduk în fața unui rege nelegiuit, într-o lucrare de propagandă îndreptată spre elita preoțească de la fața locului.',
        'Mesopotamia a încetat să fie un centru politic de sine stătător, dar cultura ei scrisă a ținut secole întregi: sunt tăblițe astronomice cuneiforme datate deja în vremea romană. Astronomia babiloniană, cu catastifele ei rânduite de poziții planetare, a hrănit direct pe cea grecească și, prin ea, pe cea modernă.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Cuneiformă', definition: 'Scris cu semne în formă de cui, întipărite pe lut. Sistem amestecat, folosit pentru mai multe limbi de-a lungul a trei milenii.' },
    { term: 'Ziggurat', definition: 'Templu în trepte pe terase suprapuse, centru de idee și economic al orașului mesopotamian.' },
    { term: 'Ensi / lugal', definition: 'Titluri ale cârmuitorului sumerian: „guvernator” al zeului cetății și „om mare” sau rege.' },
    { term: 'Cetate-stat', definition: 'Nucleu orășenesc cu teritoriu agricol, zeu ocrotitor și cârmuire proprie. Model politic al Dinasticului Arhaic.' },
    { term: 'Awilum / mushkenum / wardum', definition: 'Cele trei stări juridice ale Codului lui Hammurabi: liber deplin, dependent și sclav.' },
    { term: 'Misharum', definition: 'Ștergere generală de datorii vestită de rege ca să oprească ruina plătitorilor de dări.' },
    { term: 'Edubba', definition: '„Casa tăblițelor”: școală de scribi cu un curs statornic de liste, copii și matematică.' },
    { term: 'Bulla și jetoane', definition: 'Bucăți de lut de socoteală și învelișul lor pecetluit. Premergătorul direct al tăbliței scrise.' },
    { term: 'Sistem în bază șaizeci', definition: 'Sistem numeric mesopotamian în bază 60, obârșia minutelor, secundelor și gradelor noastre.' },
    { term: 'Sărăturare', definition: 'Adunarea de sare în soluri irigate cu evaporare puternică. Documentată în trecerea de la grâu la orz.' },
  ],
  debates: [
    {
      question: 'Era economia mesopotamiană una de templu, redistributivă, sau erau piețe?',
      positions: [
        {
          school: 'Cetatea-templu (Deimel, anii 1920-30)',
          argument:
            'Arhivele din Lagash ar arăta că templul stăpânea pământul și rânduia producția și împărțeala. Nu ar fi proprietate particulară de seamă, nici piață ce face prețul.',
        },
        {
          school: 'Revizuire amestecată (Diakonoff, Gelb)',
          argument:
            'Arhivele din Lagash țin de un singur templu, nu de cetatea întreagă. Erau pământ obștesc de familii largi și proprietate particulară de transmis, laolaltă cu sectoarele templului și ale palatului.',
        },
        {
          school: 'Substantivism (Polanyi) față de formalism',
          argument:
            'Polanyi tăgăduia piețe ce fac prețul în lumea veche. Arhivele negustorilor asirieni de la Kanesh, cu tovărășii, credite, dobânzi și arbitraj între piețe, au fost aduse ca dovadă potrivnică.',
        },
      ],
      state:
        'Stăpânește azi o poziție de mijloc: au fost prețuri ce se schimbau, credit și negoț particular, dar prinse în instituții (templu, palat, familie) ce le rânduiau hotărâtor. Dezbaterea rămâne vie despre cât cântărea fiecare sector și cum se schimbă după vreme și după regiune.',
    },
    {
      question: 'A fost Codul lui Hammurabi drept aplicat sau propagandă regală?',
      positions: [
        {
          school: 'Citire legalistă tradițională',
          argument:
            'Ar fi o codificare în vigoare, menită să unească dreptul regatului și să fie aplicată de judecătorii, cum sugerează forma ei rânduită și arătarea ei publică.',
        },
        {
          school: 'Citire de idee (Kraus, Bottéro)',
          argument:
            'Miile de documente judiciare păstrate aproape niciodată nu-l citează, iar câteodată hotărăsc într-alt sens. Ar fi un monument de îndreptățire de sine — regele drept în fața lui Shamash — și, poate, o culegere de pilde vrednice pentru învățătură.',
        },
      ],
      state:
        'Citirea de idee e azi de căpetenie, dar se recunoaște că textul oglindește reguli și obiceiuri adevărate. Se preferă a se vorbi de „culegere de hotărâri” mai degrabă decât de „cod” în sens modern.',
    },
    {
      question: 'De ce s-a mutat centrul de putere din sudul spre nordul Mesopotamiei?',
      positions: [
        {
          school: 'Înrăutățire ecologică (Jacobsen și Adams, 1958)',
          argument:
            'Sărăturarea treptată a solurilor irigate din sud a scăzut roadele, a silit înlocuirea grâului cu orzul și a subminat temelia agrară a puterii sumeriene.',
        },
        {
          school: 'Pricini politice și militare',
          argument:
            'Mutarea s-ar lămuri mai bine prin presiunea popoarelor amoreene și arameene, prin șubrezenia fiscală a unor state prea strânse la putere ca Ur III și prin stăpânirea drumurilor de negoț din nord.',
        },
      ],
      state:
        'Se primește sărăturarea ca proces adevărat și bine documentat, dar se respinge ca singură pricină. Lămurirea de căpetenie ține de mai mulți factori și subliniază legătura dintre povara ecologică, asprimea instituțională și presiunea din afară.',
    },
  ],
  sources: [
    { author: 'Anonim', title: 'Epopeea lui Ghilgameș (varianta statornicită)', year: 'c. s. XII î.Hr.', kind: 'primaria', note: 'Păstrată mai ales în biblioteca lui Assurbanipal. Cuprinde povestirea potopului.' },
    { author: 'Hammurabi', title: 'Stela legilor', year: 'c. 1750 î.Hr.', kind: 'primaria', note: 'Prolog, 282 de rânduieli de caz și epilog. Găsită la Susa în 1901.' },
    { author: 'Enheduanna', title: 'Imnuri către Inanna', year: 'c. 2280 î.Hr.', kind: 'primaria', note: 'Cea dintâi autoare literară cunoscută pe nume. Fiică a lui Sargon și preoteasă la Ur.' },
    { author: 'Darius I', title: 'Inscripția de la Behistun', year: 'c. 520 î.Hr.', kind: 'primaria', note: 'Text în trei limbi a cărui copiere de către Rawlinson a îngăduit descifrarea cuneiformei.' },
    { author: 'Anonim', title: 'Cilindrul lui Cirus', year: '539 î.Hr.', kind: 'primaria', note: 'Înfățișează cucerirea persană ca restaurare a cultului lui Marduk. Document de propagandă.' },
    { author: 'Thorkild Jacobsen și Robert Adams', title: '„Salt and Silt in Ancient Mesopotamian Agriculture”, Science', year: '1958', kind: 'estudio', note: 'Formulează teza sărăturării ca pricină a decăderii sudului.' },
    { author: 'Igor M. Diakonoff', title: 'Structure of Society and State in Early Dynastic Sumer', year: '1959', kind: 'estudio', note: 'Dărâmă modelul cetății-templu al lui Deimel.' },
    { author: 'Denise Schmandt-Besserat', title: 'Before Writing', year: '1992', kind: 'estudio', note: 'Urmărește obârșia de socoteală a scrisului, pornind de la bucățile de lut.' },
    { author: 'Jean Bottéro', title: 'Mésopotamie. L\'écriture, la raison et les dieux', year: '1987', kind: 'estudio', note: 'Recitește Codul lui Hammurabi și rațiunea mesopotamiană.' },
    { author: 'Marc Van De Mieroop', title: 'A History of the Ancient Near East', year: '2004 (ed. a 3-a, 2015)', kind: 'estudio', note: 'Manual de referință la zi despre întreg Orientul Apropiat vechi.' },
    { author: 'Amélie Kuhrt', title: 'The Ancient Near East, c. 3000–330 BC', year: '1995', kind: 'estudio', note: 'Sinteză critică de larg cuprins, atentă la problemele de izvoare.' },
  ],
  documents: [
    {
      section: 4,
      title: 'Din Codul lui Hammurabi',
      text: [
        'Dacă un om a distrus ochiul unui om liber, i se va distruge ochiul.',
        'Dacă a distrus ochiul unui supus sau a rupt osul unui supus, va plăti o mina de argint.',
        'Dacă a distrus ochiul sclavului unui om liber sau a rupt osul sclavului unui om liber, va plăti jumătate din prețul lui.',
      ].join('\n\n'),
      source: 'Codul lui Hammurabi, legile 196-199. Babilon, pe la 1750 î.Hr.',
      note: 'Versiune proprie după textul akkadian. Originalul e săpat pe stela de la Luvru.',
      question: 'Legea talionului sună a egalitate în fața legii. Citește iarăși cele trei hotărâri: de ce atârnă pedeapsa? Ce îți spune asta despre cine era deopotrivă cu cine în Babilon?',
    },
  ],
  images: [
    {
      alt: 'Panou de mozaic cu încrustații de scoică și lapislazuli în trei registre, cu care, soldați și prizonieri',
      caption: 'Fața de război a Stindardului de la Ur, pe la 2600 î.Hr.',
    },
    {
      alt: 'Vas înalt de alabastru cu basoreliefuri în fâșii suprapuse: plante, animale, bărbați goi cu daruri și o figură în fața unui templu',
      caption: 'Vasul de la Warka, din Uruk, pe la 3200 î.Hr. Fâșiile rânduiesc lumea de jos în sus: apă, plante, vite, oameni și templu.',
    },
    {
      alt: 'Tăbliță de lut acoperită cu semne cuneiforme în căsuțe, cu amprenta unui sigiliu cilindric',
      caption: 'Socoteală administrativă de împărțire a orzului, pe la 3100-2900 î.Hr. Scrisul se naște din socoteală, nu din literatură.',
    },
    {
      alt: 'Stelă de bazalt negru cu un basorelief în partea de sus și restul acoperit de scris cuneiform',
      caption: 'Stela Codului lui Hammurabi, pe la 1750 î.Hr. Sus, regele primește însemnele de la zeul Shamash; dedesubt, aproape trei sute de hotărâri.',
    },
  ],
  questions: [
    {
      question: 'De ce cerea agricultura mesopotamiană mai multă lucrare omenească decât cea egipteană?',
      options: [
        'Fiindcă nu ploua niciodată',
        'Fiindcă revărsarea era dintr-odată, fără de prevăzut, și venea cu cerealele deja pe câmp',
        'Fiindcă solurile erau seci',
        'Fiindcă nu aveau plug',
      ],
      explanation: 'Calendarul Tigrului și al Eufratului nu se potrivea cu ciclul cerealelor, așa că trebuiau canale, diguri și scurgere lucrătoare.',
    },
    {
      question: 'Ce dă la iveală trecerea de la grâu la orz în arhivele din sud, între 2400 și 1700 î.Hr.?',
      options: [
        'O schimbare de gusturi la mâncare',
        'O sărăturare treptată a solurilor irigate',
        'Sosirea unor culturi noi din India',
        'O oprire religioasă a grâului',
      ],
      explanation: 'Orzul rabdă mai bine sarea. Jacobsen și Adams au legat în 1958 această mutare și scăderea roadelor de înrăutățirea solului.',
    },
    {
      question: 'Potrivit lui Schmandt-Besserat, care a fost obârșia scrisului?',
      options: [
        'Nevoia de a însemna poeme religioase',
        'Socoteala: bucăți de lut ținute în bullae ale căror semne din afară au sfârșit prin a înlocui cuprinsul',
        'Corespondența diplomatică',
        'Nevoia de a scrie legi',
      ],
      explanation: 'Cele dintâi tăblițe de la Uruk sunt documente economice. Scrisul se naște ca unealtă de gospodărire; literatura vine veacuri mai târziu.',
    },
    {
      question: 'De ce avem arhive mesopotamiene atât de întregi?',
      options: [
        'Fiindcă se scriau pe pergament tratat',
        'Fiindcă lutul se cocea în incendii și se păstra mai bine',
        'Fiindcă au fost copiate în vremea romană',
        'Fiindcă se țineau în morminte pecetluite',
      ],
      explanation: 'Distrugerea prin foc, ruinătoare pentru clădire, a fost un noroc documentar: arhivele de la Ur III strâng peste o sută de mii de tăblițe.',
    },
    {
      question: 'Ce obiecție hotărâtoare se ridică la citirea Codului lui Hammurabi ca drept în vigoare?',
      options: [
        'Că stela e neîntreagă',
        'Că documentele judiciare din acea vreme aproape niciodată nu-l citează și câteodată hotărăsc într-alt sens',
        'Că a fost scris în sumeriană, limbă deja moartă',
        'Că a fost descoperit în afara Mesopotamiei',
      ],
      explanation: 'Kraus și Bottéro au propus de aceea să fie citit ca monument de idee și culegere de pilde vrednice, nu ca un cod aplicabil.',
    },
    {
      question: 'Ce erau vestirile de misharum?',
      options: [
        'Campanii militare anuale',
        'Ștergeri generale de datorii poruncite de rege',
        'Recensăminte de populație',
        'Sărbători de anul nou',
      ],
      explanation: 'Opreau ca îndatorarea și robia pentru datorii să lipsească statul de plătitori de dări și de recruți. Erau o măsură de statornicie fiscală, nu de milostenie.',
    },
    {
      question: 'Ce a dovedit Diakonoff împotriva modelului „cetății-templu” al lui Deimel?',
      options: [
        'Că templele nu existau',
        'Că arhivele din Lagash țineau de un singur templu și trăiau laolaltă pământ obștesc și proprietate particulară',
        'Că tot pământul era al regelui',
        'Că economia era pe de-a-ntregul capitalistă',
      ],
      explanation: 'Modelul primit azi e amestecat: templul, palatul și sectorul particular trăiesc laolaltă în proporții schimbătoare după vreme și după cetate.',
    },
    {
      question: 'Ce documentează arhiva negustorilor asirieni de la Kanesh?',
      options: [
        'Un sistem economic fără prețuri, nici credit',
        'Tovărășii de negoț, credite, dobânzi și arbitraj de prețuri între Assur și Anatolia',
        'Cucerirea Anatoliei de către Sargon',
        'Clădirea ziguratului de la Ur',
      ],
      explanation: 'E argumentul de fapte cel mai citat împotriva tezei substantiviste a lui Polanyi despre lipsa piețelor în lumea veche.',
    },
    {
      question: 'Ce noutate politică înfățișează imperiul lui Sargon din Akkad?',
      options: [
        'Cea dintâi cetate-stat',
        'Cel dintâi imperiu teritorial: guvernatori numiți, garnizoane și limbă administrativă comună',
        'Cea dintâi democrație',
        'Cea dintâi federație de temple',
      ],
      explanation: 'Sargon supune cetățile sumeriene și impune o rânduială mai presus de oraș. Fiica lui, Enheduanna, preoteasă la Ur, e cea dintâi autoare cunoscută pe nume.',
    },
    {
      question: 'Ce slujbă administrativă aveau strămutările neoasiriene?',
      options: [
        'Niciuna: erau pedepse fără socoteală',
        'Dezrădăcinarea elitelor locale, ruperea solidarităților și strămutarea mâinii de lucru unde era nevoie',
        'Repopularea deșertului',
        'Plata armatei prin răscumpărări',
      ],
      explanation: 'Politica a atins câteva milioane de suflete în trei veacuri și îmbina descurajarea prin groază cu o logică de gospodărire a oamenilor.',
    },
    {
      question: 'Ce moștenire numerică mesopotamiană folosim și azi?',
      options: [
        'Sistemul zecimal',
        'Sistemul în bază șaizeci: minute, secunde și grade',
        'Numerația romană',
        'Zeroul pozițional',
      ],
      explanation: 'Baza 60 supraviețuiește în măsura timpului și a unghiurilor. Tăblița Plimpton 322 mai strânge și triplete pitagoreice cu mult înaintea lui Pitagora.',
    },
    {
      question: 'Cum înfățișează Cilindrul lui Cirus cucerirea Babilonului în 539 î.Hr.?',
      options: [
        'Ca pe un măcel pildă',
        'Ca pe o restaurare a cultului lui Marduk în fața unui rege nelegiuit',
        'Ca pe o anexare tocmită cu Egiptul',
        'Ca pe o biruință a zeilor persani asupra babilonienilor',
      ],
      explanation: 'E propagandă îndreptată spre elita preoțească de la fața locului: îndreptățește cuceritorul înfățișându-l ca refăcător al rânduielii religioase de dinainte.',
    },
    {
      question: 'De ce a atârnat Mesopotamia din temelie de comerțul pe distanțe lungi?',
      options: [
        'Fiindcă populația ei era prea mare ca să se hrănească singură cu grâu',
        'Fiindcă câmpia aluvială nu are piatră, lemn, nici metale',
        'Fiindcă oprea meșteșugul de la fața locului',
        'Fiindcă moneda ei era primită doar în străinătate',
      ],
      explanation: 'Lemn din Liban, aramă din Oman, lapislazuli din Afganistan, cornalină din Indus: stăpânirea drumurilor a ajuns treabă de stat.',
    },
    {
      question: 'Ce rol a avut inscripția de la Behistun?',
      options: [
        'A fost cel dintâi cod de legi cunoscut',
        'Varianta ei în trei limbi a îngăduit descifrarea cuneiformei, așa cum piatra de la Rosetta a făcut-o cu hieroglifele',
        'Cuprinde Epopeea lui Ghilgameș',
        'Însemnează recensământul imperiului asirian',
      ],
      explanation: 'Rawlinson a copiat textul lui Darius I săpat pe o stâncă. Persana veche, mai simplă, a deschis calea spre elamită și spre akkadiană.',
    },
    {
      question: 'Ce deosebire obștească statornicește Codul lui Hammurabi?',
      options: [
        'Niciuna: toți erau deopotrivă în fața legii',
        'Awilum, mushkenum și wardum, cu pedepse deosebite după stare',
        'Numai între bărbați și femei',
        'Numai între preoți și mireni',
      ],
      explanation: 'Aceeași faptă are urmări deosebite după cui i se face. Talionul trăiește laolaltă cu despăgubirea în bani, după starea jertfei.',
    },
  ],
}
