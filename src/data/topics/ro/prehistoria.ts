import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/prehistoria.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 14 date, 10
   concepte, 3 dezbateri, 10 surse, FĂRĂ document comentat (ca în original,
   fiindcă e perioada dinaintea scrisului), 4 imagini și 14 întrebări (nu 16)
   cu opțiunile pe aceleași poziții. */
export const prehistoriaRo: TopicTranslation = {
  title: 'Preistoria și neolitizarea',
  description: 'Evoluție umană, vânători-culegători, artă paleolitică și primirea agriculturii.',
  years: 'c. 3,3 mil.–3500 î.Hr.',
  summary:
    'Preistoria cuprinde peste 99% din timpul omenirii și se cercetează aproape fără texte: cu oase, pietre, sedimente, izotopi și ADN vechi. Problema ei de căpetenie nu e strângerea de date, ci lămurirea a două prefaceri: cum apare un hominid cu cultură ce se adună de la o generație la alta, și de ce, după sute de mii de ani de vânătoare și culegere, mai multe populații primesc în câteva milenii agricultura și viața statornică.',
  keyDates: [
    { date: 'c. 3,3 mil. î.Hr.', event: 'Unelte de piatră de la Lomekwi (Kenya), mai vechi decât genul Homo.' },
    { date: 'c. 1,9 mil. î.Hr.', event: 'Homo erectus: cutie craniană mai mare, bifațe acheuleene și primele ieșiri din Africa.' },
    { date: 'c. 400.000 î.Hr.', event: 'Folosirea stăpânită a focului bine documentată; Sima de los Huesos (Atapuerca).' },
    { date: 'c. 300.000 î.Hr.', event: 'Rămășițe de Homo sapiens la Jebel Irhoud (Maroc).' },
    { date: 'c. 45.000 î.Hr.', event: 'Sapiens în Europa; conviețuire cu neanderthalienii vreme de milenii.' },
    { date: 'c. 40.000 î.Hr.', event: 'Artă figurativă la Chauvet, El Castillo și Sulawesi.' },
    { date: 'c. 40.000 î.Hr.', event: 'Stingerea neanderthalienilor ca populație deosebită.' },
    { date: 'c. 11.600 î.Hr.', event: 'Sfârșitul Younger Dryas: începe Holocenul, cald și statornic.' },
    { date: 'c. 9500 î.Hr.', event: 'Göbekli Tepe: sanctuare uriașe ale unor societăți încă neagricole.' },
    { date: 'c. 8500 î.Hr.', event: 'Domesticirea grâului, a orzului, a oii și a caprei în Semiluna Fertilă.' },
    { date: 'c. 7000 î.Hr.', event: 'Çatalhöyük: mare așezare agricolă în Anatolia.' },
    { date: 'c. 5600 î.Hr.', event: 'Agricultura ajunge în peninsula iberică pe cale mediteraneeană.' },
    { date: 'c. 4500–2500 î.Hr.', event: 'Megalitismul atlantic european: Stonehenge, Newgrange, Antequera.' },
    { date: 'c. 3300 î.Hr.', event: 'Metalurgia bronzului și primele scrisuri: sfârșitul convențional al preistoriei.' },
  ],
  sections: [
    {
      title: 'Ce e preistoria și cu ce se cercetează',
      body: [
        'Preistoria e perioada dinaintea scrisului, și deci o categorie de raport: se sfârșește în vremuri deosebite după regiune. Mesopotamia iese din ea pe la 3300 î.Hr.; o bună parte din Africa subsahariană sau din Oceania, milenii mai târziu. Această relativitate a fost criticată fiindcă face din alfabetizare temeiul de intrare în istorie, cu o încărcătură eurocentrică vădită. Mulți autori preferă azi să vorbească de „societăți fără scris” sau să folosească direct șirurile arheologice.',
        'Disciplina se sprijină pe izvoare materiale și pe tehnici de laborator. Datarea prin radiocarbon, dezvoltată de Willard Libby în 1949, a îngăduit pentru întâia oară datarea în cifre absolute până la vreo 50.000 de ani; termoluminiscența, uraniu-toriul și potasiu-argonul acoperă orizonturi mai vechi. Paleoecologia reface climele prin polen, izotopi de oxigen și sondaje în gheață.',
        'Prefacerea cea mai însemnată a ultimelor două decenii a fost paleogenetica. De când Svante Pääbo a secvențiat genomul neanderthalian în 2010, ADN-ul vechi a rescris istoria migrațiilor omenești: a dovedit amestecul dintre sapiens și neanderthalieni, i-a identificat pe denisovani pornind de la un fragment de falangă, și a arătat că Europa de azi vine din cel puțin trei valuri suprapuse — vânători-culegători de la fața locului, agricultori anatolieni și păstori de stepă.',
        'Se cuvine o luare-aminte de metodă: păstrarea inegală înclină ce vedem. Piatra și osul dăinuie; lemnul, fibra, pielea și vorba, nu. Orice refacere a vieții preistorice lucrează pe o evidență neîntreagă și înclinată statornic spre ce ține mai mult.',
      ].join('\n\n'),
      callout:
        'Calibrarea radiocarbonului îndreaptă schimbarea C-14 din văzduh. De aceea datele se spun „cal BP” sau „cal î.Hr.”: o dată necalibrată și una calibrată nu se pot pune alături.',
    },
    {
      title: 'Evoluția omenească: un tufiș, nu o scară',
      body: [
        'Icoana de rând a unei înaintări dintr-o linie de la maimuță la om nu e adevărată. Dovada de fosile desenează un tufiș ramificat în care mai multe specii de hominizi au conviețuit vreme îndelungată: australopiteci, parantropi, Homo habilis, Homo erectus, Homo naledi, Homo floresiensis, neanderthalieni, denisovani și sapiens.',
        'Însușirile pe care le legăm de omenire nu au apărut deodată. Bipedismul e foarte vechi — urmele de la Laetoli au 3,6 milioane de ani —, pe când mărirea creierului a venit mult mai târziu. Uneltele de la Lomekwi, de 3,3 milioane de ani, sunt mai vechi decât genul Homo, ceea ce rupe legătura dintre a face unelte și a fi om.',
        'Stăpânirea focului a fost hotărâtoare. Richard Wrangham a susținut în Catching Fire (2009) că fiertul, scoțând în afara trupului o parte din mistuire, a îngăduit micșorarea aparatului digestiv și ținerea unui creier scump la energie. Cronologia exactă se discută: sunt semne la Wonderwerk pe la 1 milion de ani, dar folosirea rânduită e bine documentată abia de vreo 400.000 de ani.',
        'Situl Atapuerca a fost de căpetenie în această dezbatere. Sima de los Huesos a dat peste 6.500 de fosile de la cel puțin 28 de persoane, o mulțime fără seamăn, iar cercetarea lor genetică le așază în neamul neanderthalian. Gran Dolina a adus rămășițele lui Homo antecessor, cu urme de tăiere ce documentează canibalism, cel mai probabil de hrană.',
        'Despre neanderthalieni, revizuirea a fost mare. Își îngropau morții, purtau de grijă unor persoane cu răniri ce le opreau de la muncă, foloseau pigmenți, făceau lipici din smoală — un lucru ce cere stăpânire de căldură fără aer — și au clădit alcătuiri de speleoteme în peștera Bruniquel acum 176.000 de ani. Dispariția lor ca populație deosebită nu a fost o stingere deplină: între 1% și 2% din genomul oamenilor de azi din afara Africii e neanderthalian.',
      ].join('\n\n'),
    },
    {
      title: 'Societăți vânătoare-culegătoare ale Paleoliticului',
      body: [
        'Aproape toată preistoria, oamenii au trăit în grupuri mișcătoare, mici, ce foloseau avuții pe anotimpuri. Această mișcare nu înseamnă lipsă statornică. Cercetările etnografice ale unor societăți vânătoare-culegătoare de mai încoace, strânse în vestitul simpozion Man the Hunter (1968), au socotit o îndeletnicire de trai de trei până la cinci ceasuri pe zi, ceea ce l-a făcut pe Marshall Sahlins să vorbească de „societatea îmbelșugată dintâi”.',
        'Această formulare a fost mult nuanțată: populațiile cercetate în secolul XX trăiau în medii de margine și nu sunt asemuiri directe ale celor paleolitice. Cu toate acestea, dovada paleopatologică arată în același sens: cei dintâi agricultori au, față de vânătorii-culegători dinainte, statură mai mică, mai multe carii, mai multă anemie și mai multe semne de povară de hrană.',
        'Rânduiala obștească era probabil deopotrivă din punct de vedere economic, cu mecanisme puternice de împărțire și de nivelare. Dar evidența funerară arată abateri de seamă: îngropăciunile de la Sunguir (Rusia, c. 34.000 î.Hr.) cuprind persoane acoperite cu mii de mărgele de fildeș ce arată mii de ceasuri de muncă. Nedreptatea nu așteaptă agricultura.',
        'Nici împărțirea muncii după sex nu a fost atât de aspră cum se credea. Cercetările rămășițelor de la Wilamaya Patjxa (Peru) și revizuirile uneltelor de vânătoare din America au găsit femei îngropate cu unelte de vânat, iar cercetarea semnelor osoase de lucru arată tipare mai puțin împărțite în două decât se aștepta.',
      ].join('\n\n'),
      callout:
        'Culegerea aducea probabil cea mai mare parte a caloriilor în multe medii. Numele de „vânători-culegători” răstoarnă, în acest sens, greutatea adevărată a fiecărei îndeletniciri.',
    },
    {
      title: 'Artă, simbol și gândire',
      body: [
        'Arta paleolitică europeană — Chauvet, Lascaux, Altamira, El Castillo, Tito Bustillo — alcătuiește cel mai vechi corp de simboluri păstrat la scară mare. Temele ei de căpetenie sunt animale, semne geometrice și mâini în negativ; chipurile omenești sunt puține și adesea simplificate.',
        'Tălmăcirile s-au schimbat odată cu modele de gândire. „Magia de vânătoare” a lui Breuil, care vedea în picturi un ritual de îmbunare, a fost înlocuită de structuralismul lui Leroi-Gourhan, ce căuta împotriviri pe două tabere în așezarea chipurilor, și apoi de citiri șamanice ca cea a lui David Lewis-Williams în The Mind in the Cave (2002), întemeiate pe neuropsihologia stărilor schimbate ale minții. Niciuna nu se impune azi într-un chip hotărâtor.',
        'Datarea prin uraniu-toriu a crustelor de calcar a schimbat cadrul cronologic: unele urme de la La Pasiega, Maltravieso și Ardales ar trece de 64.000 de ani, ceea ce le-ar așeza înaintea venirii lui sapiens în Europa și le-ar pune pe seama neanderthalienilor. Propunerea rămâne discutată din punct de vedere al metodei, dar, dacă s-ar întări, înlătură ultima însușire rezervată numai speciei noastre.',
        'În afara Europei, evidența e la fel de veche: chipurile de la Sulawesi și din Borneo trec de 40.000 de ani, iar la Blombos (Africa de Sud) sunt gravuri geometrice în ocru de acum 73.000 de ani. Atenția pusă pe Europa în manuale oglindește istoria cercetării, nu răspândirea adevărată a fenomenului.',
      ].join('\n\n'),
    },
    {
      title: 'Neolitizarea: cum și de ce',
      body: [
        'Spre sfârșitul Pleistocenului, mai multe populații din sud-vestul Asiei au început să cultive și să domesticească animale. Procesul a fost lent — secole de mânuire dinaintea domesticirii de formă — și de sine stătător în cel puțin șapte vetre din lume: Semiluna Fertilă, China (mei și orez), Mesoamerica (porumb), Anzii (cartof, quinoa), Noua Guinee (taro), Africa de vest (sorg) și estul Americii de Nord.',
        'Despre pricini s-au propus trei mari familii de lămurire. Gordon Childe a apărat în anii treizeci „ipoteza oazei”: uscarea de după ghețari ar fi strâns oameni, plante și animale în jurul locurilor cu apă. Lewis Binford și Kent Flannery au reformulat problema pe cheie demografică: presiunea de populație în zone de margine ar fi silit sporirea producției. O a treia linie, a lui Jacques Cauvin în Naissance des divinités, naissance de l\'agriculture (1994), răstoarnă legătura de la cauză la urmare și pune întâi o schimbare de simbol și de religie.',
        'Göbekli Tepe, săpat de Klaus Schmidt din 1995, e piesa ce a silit cel mai mult revizuirea. Incintele lui cu stâlpi în formă de T de până la cinci metri și basoreliefuri de animale se datează pe la 9500 î.Hr. și au fost ridicate de populații ce încă nu practicau agricultura deplină. Clădirea uriașă vine, aici, înaintea economiei agricole, nu invers.',
        'Urmările neolitizării au fost cu două fețe. A crescut puterea de a ține mai mulți oameni și a îngăduit prisosul, păstrarea și, cu timpul, nedreptatea rânduită în instituții și statul. În același timp a înrăutățit hrana de rând, a mărit povara muncii, a înlesnit zoonozele prin conviețuirea cu vitele și a mărit slăbiciunea în fața recoltelor proaste. Jared Diamond a numit-o, cu tâlc, „cea mai rea greșeală din istoria speciei omenești”.',
        'În Europa, procesul a fost mai ales de strămutare, nu de răspândire de idei. Paleogenetica arată că agricultorii anatolieni s-au întins fizic prin continent între 7000 și 5500 î.Hr., amestecându-se în măsuri schimbătoare cu vânătorii-culegători locali, și că o a treia parte — păstorii din stepa pontică legați de cultura Yamnaya — a venit pe la 3000 î.Hr. și a prefăcut din nou peisajul genetic și probabil cel de limbă al Europei.',
      ].join('\n\n'),
      callout:
        'Domesticirea lasă urme de formă: spice ce nu se scutură singure, semințe mai mari, coarne micșorate. Acele schimbări durează secole până se statornicesc, așa că hotarul dintre culegere și cultivare e o trecere treptată, nu o linie.',
    },
    {
      title: 'Megalitism, metalurgie și pragul istoriei',
      body: [
        'Între mileniul al V-lea și al III-lea î.Hr., fațada atlantică europeană a ridicat dolmene, menhire, aliniamente și morminte mari cu coridor. Newgrange, Stonehenge și ansamblul de la Antequera cer plănuire, strângere de muncă și cunoștințe de astronomie puse în lucrare: mai multe monumente sunt îndreptate spre solstiții.',
        'Datarea prin radiocarbon a dărâmat lămurirea difuzionistă clasică, ce trăgea megalitismul european din Mediterana răsăriteană. Colin Renfrew a arătat în Before Civilization (1973) că megaliții atlantici sunt mai vechi decât piramidele egiptene, ceea ce a silit recunoașterea unor dezvoltări de sine stătătoare și lăsarea modelului unei civilizații ce se răspândește spre margini fără vlagă.',
        'Metalurgia a adus un factor nou. Arama întâi și bronzul apoi — aliaj cu staniu, rar și răspândit foarte neuniform — au cerut rețele de schimb pe distanțe lungi și au ținut partea elitelor ce le stăpâneau. Odoarele așa-numitului „arcaș de la Amesbury”, cu obârșie izotopică din centrul Europei și îngropat aproape de Stonehenge, arată bine acea mișcare.',
        'Sfârșitul convențional al preistoriei vine cu scrisul, pe la 3300 î.Hr. la Uruk. E un hotar de folos, dar arbitrar: nu schimbă nimic în viața celor mai mulți oameni, și adesea desparte în chip nefiresc procese neîntrerupte. Se cuvine tratat ca un hotar de documente, nu ca un salt de civilizație.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Hominid', definition: 'Membru al familiei Hominidae. În folosința de rând, strămoșii și rudele stinse ale neamului omenesc.' },
    { term: 'Industrie litică', definition: 'Mulțime de unelte de piatră cioplită proprie unei tradiții tehnice (olduvaiană, acheuleană, musteriană).' },
    { term: 'Calibrare', definition: 'Îndreptarea datelor de radiocarbon după schimbarea C-14 din văzduh. Date „cal BP” sau „cal î.Hr.”' },
    { term: 'Paleogenetică', definition: 'Studiul ADN-ului vechi. A rescris istoria migrațiilor și a dovedit amestecul dintre specii omenești.' },
    { term: 'Neolitizare', definition: 'Procesul de primire a agriculturii, a creșterii vitelor, a ceramicii și a vieții statornice. Treptat și cu vetre de sine stătătoare.' },
    { term: 'Domesticire', definition: 'Schimbare genetică și de formă a unor specii prin alegere omenească ținută vreme de generații.' },
    { term: 'Semiluna Fertilă', definition: 'Arc între Levant, Anatolia și Mesopotamia unde e documentată cea dintâi vatră de domesticire.' },
    { term: 'Megalitism', definition: 'Tradiție de clădire cu blocuri mari de piatră în Europa atlantică a mileniului V-III î.Hr.' },
    { term: 'Yamnaya', definition: 'Cultură păstorească din stepa pontică a cărei întindere pe la 3000 î.Hr. a prefăcut genetica și probabil limba Europei.' },
    { term: 'Zoonoză', definition: 'Boală trecută de la animale la oameni. Frecvența ei a crescut cu conviețuirea cu vitele din Neolitic.' },
  ],
  debates: [
    {
      question: 'De ce a fost primită agricultura dacă a înrăutățit sănătatea celor ce o practicau?',
      positions: [
        {
          school: 'Lămurire climatică (Childe, anii 1930)',
          argument:
            'Uscarea de după ghețari ar fi strâns oameni, plante și animale în jurul oazelor, silind o conviețuire ce a dus la domesticire. Agricultura ar fi un răspuns de adaptare la lipsă.',
        },
        {
          school: 'Lămurire demografică (Binford, Flannery)',
          argument:
            'Creșterea populației în zone de margine, după ocuparea celor mai bune teritorii, a silit sporirea căpătării hranei. Agricultura ar fi o ieșire silită, nu o îmbunătățire aleasă.',
        },
        {
          school: 'Lămurire simbolică (Cauvin, 1994)',
          argument:
            'O schimbare mai dinainte în felul de a gândi și în obiceiurile de rit ar fi zămislit condițiile obștești ale vieții statornice. Göbekli Tepe, uriaș și dinainte de agricultură, ar sprijini acest șir.',
        },
      ],
      state:
        'Nu e o singură lămurire primită. Cercetarea de azi se îndreaptă spre modele cu mai multe pricini și regionale: greutatea climei, a demografiei și a religiei se schimbă după vatra de domesticire, iar procesul se recunoaște mult mai lent și mai reversibil decât se credea.',
    },
    {
      question: 'S-a răspândit agricultura în Europa prin strămutare sau prin primirea de idei?',
      positions: [
        {
          school: 'Răspândire culturală',
          argument:
            'Populațiile europene de vânători-culegători ar fi primit tehnici agricole prin legătură și prin luare-aminte, fără o schimbare de populație de seamă.',
        },
        {
          school: 'Răspândire prin oameni (Ammerman și Cavalli-Sforza; paleogenetică)',
          argument:
            'Întinderea a fost de oameni: agricultori veniți din Anatolia s-au mutat prin continent între 7000 și 5500 î.Hr. ADN-ul vechi arată o înlocuire de populație însemnată, cu amestec schimbător după regiune.',
        },
      ],
      state:
        'Paleogenetica a rezolvat dezbaterea în cea mai mare parte în folosul strămutării, deși cu nuanțe regionale însemnate: în Baltica și în zonele atlantice, continuitatea vânătorilor-culegători locali a fost mai mare.',
    },
    {
      question: 'Au făcut neanderthalienii artă cu simboluri?',
      positions: [
        {
          school: 'Atribuire neanderthaliană (Hoffmann și colab., 2018)',
          argument:
            'Datările prin uraniu-toriu ale crustelor de pe picturile de la La Pasiega, Maltravieso și Ardales trec de 64.000 de ani, dinainte de venirea lui sapiens în Europa. Adăugate la pigmenți, podoabe și alcătuiri de la Bruniquel, ar arăta o putință deplină de simbol.',
        },
        {
          school: 'Îndoială de metodă (White și colab., 2020)',
          argument:
            'Datarea crustelor de calcar poate umfla vârsta din pricina contaminării și a sistemelor deschise apei. Datele nu spun vârsta pigmentului, ci a carbonatului așezat peste el.',
        },
      ],
      state:
        'Dezbaterea rămâne deschisă și e mai ales tehnică. Îndreptarea de fond a disciplinei, oricum, a fost să scurteze lista puterilor rezervate numai lui sapiens: dezbaterea nu mai e dacă neanderthalienii aveau simboluri, ci în ce măsură și cu ce cronologie.',
    },
  ],
  sources: [
    { author: 'V. Gordon Childe', title: 'Man Makes Himself', year: '1936', kind: 'estudio', note: 'Formulează „revoluția neolitică” și ipoteza oazei. Reper istoric al dezbaterii.' },
    { author: 'Richard B. Lee și Irven DeVore (ed.)', title: 'Man the Hunter', year: '1968', kind: 'estudio', note: 'Simpozion ce a reformulat icoana societăților vânătoare-culegătoare.' },
    { author: 'Colin Renfrew', title: 'Before Civilization: The Radiocarbon Revolution and Prehistoric Europe', year: '1973', kind: 'estudio', note: 'Dovedește vechimea mai mare a megalitismului atlantic și pune capăt difuzionismului clasic.' },
    { author: 'Jacques Cauvin', title: 'Naissance des divinités, naissance de l\'agriculture', year: '1994', kind: 'estudio', note: 'Apără întâietatea schimbării de simbol asupra celei economice.' },
    { author: 'David Lewis-Williams', title: 'The Mind in the Cave', year: '2002', kind: 'estudio', note: 'Tălmăcire neuropsihologică și șamanică a artei paleolitice.' },
    { author: 'Richard Wrangham', title: 'Catching Fire: How Cooking Made Us Human', year: '2009', kind: 'estudio', note: 'Fiertul ca motor al creșterii creierului.' },
    { author: 'Svante Pääbo', title: 'Neanderthal Man: In Search of Lost Genomes', year: '2014', kind: 'estudio', note: 'Povestire de martor direct a secvențierii genomului neanderthalian.' },
    { author: 'David Reich', title: 'Who We Are and How We Got Here', year: '2018', kind: 'estudio', note: 'Sinteză a urmării ADN-ului vechi asupra istoriei migrațiilor.' },
    { author: 'James C. Scott', title: 'Against the Grain: A Deep History of the Earliest States', year: '2017', kind: 'estudio', note: 'Pune la îndoială povestirea de înaintare a neolitizării și a statului timpuriu.' },
    { author: 'Klaus Schmidt', title: 'Sie bauten die ersten Tempel', year: '2006', kind: 'estudio', note: 'Săpătura și tălmăcirea Göbekli Tepe de către îndrumătorul ei.' },
  ],
  images: [
    {
      alt: 'Pictură rupestră de la Lascaux cu cai și bovine trasate în ocru și negru pe stâncă',
      caption: 'Picturile de la Lascaux, din Dordogne, au vreo 17.000 de ani.',
    },
    {
      alt: 'Schelet fosil parțial al unui hominid biped montat pe fond negru, cu bazinul și femurul întregi',
      caption: 'Refacerea scheletului lui Lucy, Australopithecus afarensis de acum 3,2 milioane de ani. Bazinul dovedește că mergea drept cu mult înainte ca creierul să crească.',
    },
    {
      alt: 'Bizon pictat în ocru roșu și negru pe stâncă, cu trupul strâns și folosind reliefurile firești ale pietrei',
      caption: 'Bizonul de pe tavanul din Altamira, în Cantabria. Pictorul a folosit umflăturile stâncii ca volum al animalului.',
    },
    {
      alt: 'Cerc de blocuri mari verticale de piatră cu grinzi orizontale deasupra, pe o câmpie de iarbă',
      caption: 'Stonehenge, ridicat în mai multe etape între 3000 și 1600 î.Hr. Mutarea blocurilor cerea rânduirea a sute de oameni de-a lungul mai multor generații.',
    },
  ],
  questions: [
    {
      question: 'De ce e criticat temeiul scrisului ca hotar al preistoriei?',
      options: [
        'Fiindcă scrisul nu poate fi datat',
        'Fiindcă e de raport și face din alfabetizare cerința ca să „intri în istorie”, cu o încărcătură eurocentrică',
        'Fiindcă nicio societate veche nu a scris',
        'Fiindcă arheologia nu cercetează texte',
      ],
      explanation: 'Preistoria se sfârșește la date foarte deosebite după regiune. Mulți autori preferă să vorbească de „societăți fără scris” sau să folosească direct șirurile arheologice.',
    },
    {
      question: 'Ce arată uneltele de la Lomekwi, de 3,3 milioane de ani?',
      options: [
        'Că Homo sapiens e mai vechi decât se credea',
        'Că facerea de unelte e mai veche decât genul Homo',
        'Că australopitecii foloseau focul',
        'Că bipedismul a apărut după cioplit',
      ],
      explanation: 'Rup legătura dintre a face unelte și a ține de genul Homo, și silesc despărțirea unor însușiri ce mai înainte se înfățișau ca un tot.',
    },
    {
      question: 'Ce parte din genomul oamenilor de azi din afara Africii e de obârșie neanderthaliană?',
      options: ['Niciuna', 'Între 1% și 2%', 'Cam 15%', 'Peste 30%'],
      explanation: 'Amestecul a fost dovedit prin secvențierea genomului neanderthalian în 2010. Neanderthalienii nu s-au stins fără să lase urmași genetici.',
    },
    {
      question: 'Ce arată paleopatologia comparând primii agricultori cu vânătorii-culegători dinainte?',
      options: [
        'Statură mai mare și dinți mai buni la agricultori',
        'Statură mai mică, mai multe carii, mai multă anemie și mai multe semne de povară la agricultori',
        'Nicio deosebire de luat în seamă',
        'Mortalitate mai mică la copii, la agricultori',
      ],
      explanation: 'Agricultura a crescut puterea de a ține mai mulți oameni, dar a înrăutățit hrana de rând și sănătatea fiecăruia. De aici tâlcul lui Diamond despre „cea mai rea greșeală” a speciei.',
    },
    {
      question: 'De ce a silit Göbekli Tepe revizuirea lămuririlor neolitizării?',
      options: [
        'Fiindcă e cea dintâi așezare agricolă cunoscută',
        'Fiindcă e uriaș și l-au ridicat populații ce încă nu practicau agricultura deplină',
        'Fiindcă cuprinde primele inscripții',
        'Fiindcă dovedește ipoteza oazei a lui Childe',
      ],
      explanation: 'Răstoarnă șirul așteptat: clădirea uriașă vine înaintea economiei agricole, ceea ce sprijină lămuririle ce dau întâietate schimbării de simbol.',
    },
    {
      question: 'Potrivit paleogeneticii, cum a ajuns agricultura în Europa?',
      options: [
        'Numai prin trecerea de idei între populații locale',
        'Prin strămutarea agricultorilor anatolieni ce s-au amestecat în măsură schimbătoare cu vânătorii-culegători',
        'Prin năvălire dinspre Egipt',
        'Prin dezvoltare de sine stătătoare în fiecare regiune europeană',
      ],
      explanation: 'ADN-ul vechi arată o înlocuire de populație însemnată între 7000 și 5500 î.Hr., cu mai multă continuitate locală în Baltica și în zonele atlantice.',
    },
    {
      question: 'Ce a dovedit Colin Renfrew despre megalitismul atlantic?',
      options: [
        'Că vine din piramidele egiptene',
        'Că e mai vechi decât piramidele egiptene, ceea ce dărâmă lămurirea difuzionistă',
        'Că e de după Imperiul Roman',
        'Că nu poate fi datat cu radiocarbon',
      ],
      explanation: 'Revoluția radiocarbonului calibrat a silit recunoașterea unor dezvoltări de sine stătătoare și lăsarea modelului unei civilizații răsăritene ce se răspândește spre margini fără vlagă.',
    },
    {
      question: 'Ce înclinare aduce păstrarea inegală în evidența preistorică?',
      options: [
        'Niciuna: totul se păstrează la fel',
        'Arată mai mult piatra și osul decât lemnul, fibra și pielea',
        'Arată mai mult obiectele organice',
        'Atinge numai siturile în aer liber',
      ],
      explanation: 'Ce ține mai mult supraviețuiește și ce piere dispare, așa că cultura materială pe care o cercetăm e înclinată statornic spre anumite materiale.',
    },
    {
      question: 'Ce a adus Sima de los Huesos de la Atapuerca?',
      options: [
        'Picturile rupestre cele mai vechi din Europa',
        'Peste 6.500 de fosile de la cel puțin 28 de persoane, așezate genetic în neamul neanderthalian',
        'Cea dintâi unealtă de bronz din peninsulă',
        'Mormântul megalitic cel mai vechi',
      ],
      explanation: 'E o mulțime fără seamăn prin mărimea ei. Gran Dolina, în același complex, a adus pe deasupra rămășițele lui Homo antecessor cu urme de canibalism.',
    },
    {
      question: 'Ce obiecție de metodă se ridică datărilor ce pun arta rupestră pe seama neanderthalienilor?',
      options: [
        'Că uraniu-toriul nu funcționează în peșteri',
        'Că se datează crusta de carbonat de pe pigment, nu pigmentul, iar sistemul poate fi deschis apei',
        'Că picturile sunt prea noi',
        'Că nu există pigmenți în acele situri',
      ],
      explanation: 'Critica lui White și a altora arată primejdia umflării vârstei din pricina contaminării și a sistemelor deschise. Dezbaterea e mai ales tehnică și rămâne deschisă.',
    },
    {
      question: 'Îngropăciunile de la Sunguir, cu mii de mărgele de fildeș, arată că…',
      options: [
        'Nedreptatea obștească apare numai cu agricultura',
        'Erau deja deosebiri de rang limpezi între vânătorii-culegători din Paleolitic',
        'Fildeșul nu avea preț',
        'Era o societate agricolă',
      ],
      explanation: 'Mărgelele arată mii de ceasuri de muncă date câtorva persoane. Nedreptatea nu așteaptă Neoliticul.',
    },
    {
      question: 'Ce populație a prefăcut genetica europeană pe la 3000 î.Hr., după agricultorii anatolieni?',
      options: ['Fenicienii', 'Păstorii de stepă ai culturii Yamnaya', 'Egiptenii', 'Etruscii'],
      explanation: 'Întinderea din stepa pontică a adus a treia parte genetică de căpetenie în Europa și se leagă de răspândirea limbilor indo-europene.',
    },
    {
      question: 'De ce a ținut bronzul partea puterii elitelor?',
      options: [
        'Fiindcă era din belșug în toată Europa',
        'Fiindcă staniul era rar și răspândit neuniform, ceea ce cerea stăpânirea unor rețele de schimb lungi',
        'Fiindcă slujea numai la obiecte de rit',
        'Fiindcă topirea lui nu cerea meșteri anume',
      ],
      explanation: 'Cine stăpânea drumurile staniului stăpânea facerea bronzului. Metalurgia a adus o atârnare pe distanțe lungi pe care arama de la fața locului nu o cerea.',
    },
    {
      question: 'Ce înseamnă că domesticirea lasă „urme de formă”?',
      options: [
        'Că apare dintr-odată, într-o generație',
        'Că zămislește schimbări ca spice ce nu se scutură singure sau coarne micșorate, statornicite de-a lungul secolelor',
        'Că atinge numai animalele',
        'Că nu se poate afla în evidența arheologică',
      ],
      explanation: 'De aceea hotarul dintre culegere și cultivare e o trecere treptată: au fost secole de mânuire omenească înainte ca schimbările de formă să se statornicească.',
    },
  ],
}
