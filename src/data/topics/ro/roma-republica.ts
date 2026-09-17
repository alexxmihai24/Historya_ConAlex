import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/roma-republica.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 16 date, 12 concepte, 3 dezbateri, 10 surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const romaRepublicaRo: TopicTranslation = {
  title: 'Roma: Republica',
  description: 'Instituții republicane, conflictul dintre patricieni și plebei, expansiunea mediteraneeană și criza finală.',
  years: '509–27 î.Hr.',
  summary:
    'Republica romană a fost o rânduială oligarhică cu mecanisme adevărate de participare populară, în stare să cucerească Mediterana și să fie nimicită tocmai de acea cucerire. A-i înțelege istoria înseamnă mai ales a lămuri două lucruri: cum a ținut o constituție nescrisă, făcută din obicei și din echilibre, cinci secole de expansiune; și de ce încordările stârnite de acea expansiune — pământ, armată, bani, clientele — au sfârșit prin a o desființa.',
  keyDates: [
    { date: '509 î.Hr.', event: 'Data tradițională a izgonirii ultimului rege și întemeierea Republicii.' },
    { date: '494 î.Hr.', event: 'Prima secesiune a plebei; întemeierea tribunatului.' },
    { date: '451–450 î.Hr.', event: 'Legea celor Douăsprezece Table: cel dintâi drept roman scris.' },
    { date: '367 î.Hr.', event: 'Legile Liciniene-Sextiene: accesul plebeilor la consulat.' },
    { date: '287 î.Hr.', event: 'Lex Hortensia: plebiscitele obligă tot poporul. Se încheie conflictul dintre ordine.' },
    { date: '264–241 î.Hr.', event: 'Primul război punic; Roma devine putere navală.' },
    { date: '218–201 î.Hr.', event: 'Al doilea război punic: Hanibal în Italia; victoria lui Scipio la Zama.' },
    { date: '146 î.Hr.', event: 'Distrugerea Cartaginei și a Corintului. Hegemonie mediteraneeană.' },
    { date: '133 î.Hr.', event: 'Tribunatul și uciderea lui Tiberius Gracchus. Începe criza.' },
    { date: '107–100 î.Hr.', event: 'Reforma militară a lui Marius: recrutarea proletarilor.' },
    { date: '91–88 î.Hr.', event: 'Războiul Aliaților; cetățenia se întinde la italici.' },
    { date: '82–79 î.Hr.', event: 'Dictatura lui Sulla și proscripțiile.' },
    { date: '60 î.Hr.', event: 'Primul triumvirat: Cezar, Pompei și Crassus.' },
    { date: '49–45 î.Hr.', event: 'Război civil; Cezar dictator.' },
    { date: '44 î.Hr.', event: 'Uciderea lui Cezar în idele lui martie.' },
    { date: '31–27 î.Hr.', event: 'Actium și întemeierea principatului lui Augustus.' },
  ],
  sections: [
    {
      title: 'Problema izvoarelor Romei arhaice',
      body: [
        'Aproape tot ce povestește tradiția despre obârșiile Romei — Romulus, cei șapte regi, izgonirea lui Tarquinius cel Trufaș în 509 î.Hr. — vine de la autori care scriu patru sau cinci veacuri mai târziu: Titus Livius și Dionisie din Halicarnas, amândoi din vremea lui Augustus. Nu sunt martori, ci strângători ai unei tradiții deja alcătuite.',
        'Acea tradiție a fost croită înapoi, în timp. Familiile aristocratice păstrau cuvântări de îngropăciune și liste de dregători ce tindeau să le umfle meritele și să vâre strămoși în întâmplări glorioase. Pe deasupra, povestirile despre monarhie și despre Republica timpurie sunt clădite cu categorii politice din secolul I î.Hr.: aruncă înapoi certuri și noțiuni ale vremii autorilor lor.',
        'Arheologia a îndreptat și, alteori, a întărit părți din povestire. Arată un nucleu orășenesc rânduit pe Palatin și în Forum încă din secolul al VII-lea î.Hr., cu o puternică înrâurire etruscă și grecească, ceea ce contrazice icoana unui sat de păstori. Dar nu îngăduie să fie verificate nume ori date anume.',
        'Urmarea de metodă e limpede: pentru vremea dinaintea secolului al IV-lea î.Hr. se cuvine citită tradiția ca memorie culturală — ce credeau romanii despre ei înșiși și ce le slujea să-și îndreptățească rânduiala politică — mai degrabă decât ca letopiseț. Faptul că e memorie, și nu letopiseț, nu o face fără de folos: lămurește cum se gândea Roma pe sine.',
      ].join('\n\n'),
      callout:
        'Povestea Lucreției și izgonirea regilor slujește unui rost anume: să întemeieze Republica pe lepădarea samavolniciei personale. Ura față de titlul de rex a ținut până la Cezar și a fost una dintre pricinile morții lui.',
    },
    {
      title: 'Constituția republicană: un echilibru fără text',
      body: [
        'Roma nu a avut o constituție scrisă. Sistemul ei era o strângere de instituții, legi și obiceiuri — mos maiorum, „obiceiul strămoșilor” — ce s-a rânduit prin adunare și precedent. Polibios, istoric grec ținut ostatic la Roma, a descris-o în cartea a VI-a a Istoriilor lui ca pe o constituție amestecată, ce îmbina monarhia (consulii), aristocrația (Senatul) și democrația (adunările), și a pus tocmai pe seama acestui echilibru statornicia romană.',
        'Dregătoriile erau obștești, anuale și fără plată. Doi consuli cârmuiau statul și armata, cu drept de veto unul asupra celuilalt; pretorii împărțeau dreptatea; questorii purtau de grijă banilor; edilii, orașului; iar cenzorii, la fiecare cinci ani, cercetau din nou listele cetățenilor și ale Senatului și vegheau asupra obiceiurilor. Cursus honorum fixa rânduiala și vârstele cele mai mici ale acestei cariere. La ceasuri de primejdie putea fi numit un dictator cu puteri depline pentru cel mult șase luni.',
        'Senatul, alcătuit din foști dregători și pe viață, nu făcea legi întocmai: dădea senatusconsulte, păreri cu o greutate morală și practică uriașă. Ținea de fapt sub stăpânire finanțele, politica din afară și împărțirea provinciilor și a comenzilor. Era organul de statornicie în fața dregătorilor ce se schimbau în fiecare an.',
        'Adunările votau legi și alegeau dregători, dar felul lor de a fi rânduite mărginea greutatea săracilor. Comițiile centuriate, rânduite pe clase de avere, împărțeau votul pe centurii, nu pe cap de om, iar centuriile celor mai bogați votau întâi: când se ajungea la majoritate, votul se oprea, iar clasele mai de jos adesea nici nu apucau să se rostească. Faptul că adunările erau, în teorie, suverane nu însemna că poporul hotăra în fapt.',
        'Adevăratul liant al sistemului era clientela: o legătură nepotrivită și moștenită între un patron, care dădea ocrotire juridică și ajutor material, și clienții lui, care îi datorau sprijin politic, însoțire în public și vot. Politica romană funcționa pe aceste rețele de oameni mult mai mult decât pe programe.',
      ].join('\n\n'),
    },
    {
      title: 'Conflictul dintre ordine',
      body: [
        'În cele dintâi două veacuri ale Republicii, plebea — mulțimea cetățenilor ce nu erau din familii patriciene — a luptat să ajungă la dregătorii, la preoție și la pământul obștesc, și să se apere de nedreptatea juridică și de îndatorare.',
        'Arma ei cea mai lucrătoare a fost secesiunea: retragerea în grup din oraș și refuzul de a lupta. Roma, aflată în război necurmat cu vecinii, nu se putea lipsi de soldații ei. Prima secesiune (494 î.Hr.) a smuls întemeierea tribunatului plebei, dregătorie cu două însușiri ieșite din comun: sacrosanctitas — cel ce lovea un tribun rămânea blestemat și putea fi omorât nepedepsit — și dreptul de intercessio, care îngăduia să fie pus veto oricărei fapte a unui dregător.',
        'Legea celor Douăsprezece Table (451-450 î.Hr.) a așternut dreptul în scris. Cuprinsul ei nu era prielnic plebei în multe privințe — păstra osânda asupra persoanei datornicului și oprea la început căsătoriile amestecate —, dar a înlăturat monopolul patrician asupra cunoașterii legii, tălmăcită până atunci pe cale orală de pontifi.',
        'Procesul s-a încheiat în trei trepte: legile Liciniene-Sextiene (367 î.Hr.) au deschis plebeilor consulatul; lex Poetelia (326 î.Hr.) a desființat nexum, robia pentru datorii; iar lex Hortensia (287 î.Hr.) a statornicit că plebiscitele — hotărârile adunării plebei — obligau tot poporul, patricieni incluși.',
        'Urmarea nu a fost egalitatea, ci înlocuirea unei elite cu alta mai largă. S-a alcătuit nobilitas patriciano-plebeiană: familii care ajunseseră la consulat și care au ținut monopolul dregătoriilor secole întregi. Un homo novus — cel dintâi din familia lui ajuns la consulat, cum a fost Cicero — era o raritate băgată în seamă. Deschiderea oficială a dregătoriilor a trăit laolaltă cu o închidere sociologică foarte aspră.',
      ].join('\n\n'),
      callout:
        'Sacrosanctitas tribunului era o garanție religioasă, nu juridică. Când, în 133 î.Hr., Tiberius Gracchus a fost ucis fiind tribun, s-a rupt o oprelișe care ținuse sistemul trei veacuri.',
    },
    {
      title: 'Expansiunea mediteraneeană și mecanismele ei',
      body: [
        'Roma a supus Italia între secolele al IV-lea și al III-lea î.Hr. printr-o îmbinare de război și de meșteșug juridic. În loc să-i prefacă pe cei învinși în supuși la fel unul cu altul, a zidit un mozaic de statute: colonii latine, municipii cu trepte deosebite de cetățenie, aliați (socii) datori să dea trupe, dar nu dări. Această mlădiere, care aducea elitele de la fața locului înăuntrul sistemului, lămurește rezistența romană în fața înfrângerilor: când Hanibal se aștepta ca Italia să se răscoale, cea mai mare parte a aliaților a rămas credincioasă.',
        'Războaiele punice au prefăcut Roma. Cel dintâi (264-241 î.Hr.) a silit-o să clădească o flotă de la nimic și i-a dat Sicilia, cea dintâi provincie a ei. Al doilea (218-201 î.Hr.) a fost o luptă de viață și de moarte: Hanibal a trecut Alpii, a nimicit trei armate consulare și a măcelărit la Cannae (216 î.Hr.) vreo 50.000 de romani într-o singură zi. Roma a supraviețuit prin puterea ei de a reface armate și prin strategia de istovire a lui Fabius Maximus, și a biruit când Scipio a mutat războiul în Africa.',
        'Din 200 î.Hr. înainte, expansiunea spre răsărit a fost iute: Macedonia, Grecia, Asia Mică. În 146 î.Hr. Roma a distrus Cartagina și Corintul în același an. Polibios, martor la căderea Cartaginei, și-a pus pe față întrebarea ce dă rost lucrării lui: cum, în mai puțin de cincizeci și trei de ani, aproape toată lumea cunoscută a ajuns sub stăpânire romană.',
        'Lămurirea imperialismului roman s-a discutat mult. Citirea de temelie, sprijinită pe izvoarele romane înseși, vorbea de un „imperialism de apărare”: Roma ar fi purtat războaie drepte, pricinuite mereu de alții. William Harris a arătat în War and Imperialism in Republican Rome (1979) că societatea romană avea îndemnuri din temelie spre război: faima militară era cerută pentru cariera politică, triumful și prada îmbogățeau generalii, iar campaniile de fiecare an erau rânduiala, nu abaterea de la ea.',
        'Urmările dinăuntru au fost zdruncinătoare. Cucerirea a adus sclavi cu grămada — sute de mii — care au înlocuit munca liberă; a îngăduit senatorilor să adune moșii uriașe lucrate de sclavi; a ruinat micii proprietari, plecați în campanii de ani întregi; și a zămislit o plebe orășenească fără pământ și fără slujbă statornică. Avuția provinciilor, purtată de grijă de guvernatori aproape nesupravegheați, a mai zămislit și o coruptare de o mărime nouă.',
      ].join('\n\n'),
    },
    {
      title: 'Criza: de la frații Gracchus la Sulla',
      body: [
        'În 133 î.Hr., tribunul Tiberius Gracchus a propus să se aplice o margine legală ce exista, dar nu se ținea, asupra ocupării pământului obștesc, și să se împartă prisosul între cetățenii fără pământ. Țelul era deopotrivă militar și obștesc: numai proprietarii puteau fi recrutați, așa că pieirea țărănimii primejduia recrutarea.',
        'Răspunsul Senatului a fost crud. Tiberius a fost ucis laolaltă cu sute de sprijinitori; fratele lui, Caius, cu un program mai larg, a murit în împrejurări asemănătoare în 121 î.Hr. Această întâmplare a deschis folosirea statornică a silniciei politice la Roma și a despărțit viața obștească între populares — cei ce căutau sprijin în adunări și în plebe — și optimates — cei ce apărau întâietatea Senatului. Se cuvine subliniat că nu erau partide, nici ideologii, ci metode de faptă politică.',
        'Caius Marius a deschis spărtura hotărâtoare. Recrutând proletari fără avere, a rezolvat lipsa de oameni, dar a zămislit o armată ai cărei soldați nu așteptau pământ de la stat, ci de la generalul lor. Credința oștească s-a personalizat. De aici înainte, cel ce comanda legiuni avea la îndemână o unealtă politică, iar războaiele civile au ajuns cu putință.',
        'Războiul Aliaților (91-88 î.Hr.) a pus Roma față în față cu aliații ei italici, care cereau cetățenia după veacuri de dat trupe. Roma a pierdut în mare parte lupta și a rezolvat cearta dând ceea ce i se cerea: cetățenia s-a întins la toată Italia de la sud de Pad. A fost o unire silită de război, nu o mărinimie.',
        'Sulla a dus logica până la capăt: în 88 î.Hr. a mărșăluit cu legiunile lui asupra Romei, ceva nemaigândit până atunci; în 82 î.Hr. s-a pus numit dictator fără margine de timp și a rânduit proscripțiile, liste publice de vrăjmași a căror moarte era răsplătită și ale căror avuții erau luate. A întărit Senatul și a mărginit tribunatul, apoi s-a retras. Precedentul lui — să iei puterea cu armele și să rânduiești din nou statul — s-a dovedit mai trainic decât reformele lui.',
      ].join('\n\n'),
      callout:
        'Populares și optimates nu erau partide cu program și înscriere statornică. Același aristocrat putea folosi metode populare la un ceas și apăra Senatul la altul: erau strategii, nu ideologii.',
    },
    {
      title: 'Prăbușirea finală și întrebarea de ce',
      body: [
        'Generația următoare lucra deja pe un sistem descompus. Pompei a căpătat comenzi ieșite din comun ca întindere; Crassus a adus o avere uriașă; Cezar a îmbinat ambiție, putere militară și sprijin popular. Înțelegerea privată a celor trei din 60 î.Hr. — așa-numitul prim triumvirat — nu a fost o instituție, ci un legământ ca să-și împartă stăpânirea alegerilor și a comenzilor, și arată cât de departe ajunseseră instituțiile de a mai hotărî ceva.',
        'Cucerirea Galiei i-a dat lui Cezar o clientelă militară, o faimă nemăsurată și o pradă uriașă. Când Senatul i-a cerut să-și lase trupele, a trecut Rubiconul (49 î.Hr.). După ce a biruit, a strâns dregătorii, s-a pus numit dictator pe viață și a primit cinstiri ce aduceau aminte de regalitate și de cultul zeiesc. A fost ucis în 44 î.Hr. de un grup de senatori care spuneau că restaurează Republica, și a căror lovitură nu a adus decât încă treisprezece ani de război civil.',
        'Înfrângerea lui Marcus Antonius și a Cleopatrei la Actium (31 î.Hr.) l-a lăsat pe Octavian singura putere. În 27 î.Hr. și-a înapoiat oficial puterile Senatului și a primit în schimb numele de Augustus și o poziție ce păstra toate înfățișările republicane: dregătorii tradiționale, Senat lucrător, lipsă de titlu regesc. Tacitus a rezumat fapta cu o frază nimicitoare: a păstrat numele lucrurilor și le-a schimbat firea.',
        'Despre pricinile prăbușirii sunt mai multe fire de lămurire. Unul subliniază factorii socio-economici: ruina țărănimii, sclavia în masă și strângerea pământului în puține mâini. Altul stăruie asupra nepotrivirii instituționale: instituții croite pentru o cetate-stat ce cârmuia un imperiu mediteraneean, fără administrație de meserie, fără stăpânire adevărată asupra guvernatorilor și cu dregătorii anuale nepotrivite cu războaie de ani întregi. Un al treilea, dezvoltat de Ronald Syme în The Roman Revolution (1939), analizează schimbarea ca înlocuire a unei oligarhii cu alta prin silnicie și clientelism, și dărâmă retorica restaurării lui Augustus.',
        'Citirea cea mai primită azi îmbină pe toate trei și adaugă un factor cultural: întrecerea aristocratică pentru cinste, care fusese motorul expansiunii, a încetat să aibă margini lucrătoare când răsplățile au ajuns fără măsură, iar armatele, personale. Republica nu a fost dărâmată de vrăjmași din afară, nici de o răscoală populară, ci de însăși clasa care o cârmuia.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Mos maiorum', definition: 'Obiceiul strămoșilor: strângerea de norme nescrise ce ținea loc de constituție romană.' },
    { term: 'Cursus honorum', definition: 'Rânduiala legală a dregătoriilor, cu vârste minime și pauze obligatorii între ele.' },
    { term: 'Imperium', definition: 'Puterea de comandă militară și de judecată pe care o purtau consulii, pretorii și dictatorii.' },
    { term: 'Intercessio', definition: 'Dreptul de veto al tribunilor plebei împotriva faptelor oricărui dregător.' },
    { term: 'Sacrosanctitas', definition: 'Neatingerea religioasă a tribunului plebei: a-l lovi însemna blestem și moarte nepedepsită.' },
    { term: 'Clientela', definition: 'Legătură nepotrivită și moștenită între patron și client. Temelia adevărată a politicii romane.' },
    { term: 'Nobilitas', definition: 'Elita patriciano-plebeiană alcătuită din familii care ajunseseră la consulat.' },
    { term: 'Homo novus', definition: 'Cel dintâi din familia lui ajuns la consulat. Caz ieșit din comun, precum Cicero.' },
    { term: 'Ager publicus', definition: 'Pământ obștesc cucerit, ținut de fapt de mari proprietari în ciuda marginilor legale.' },
    { term: 'Populares / optimates', definition: 'Metode de faptă politică — sprijin în adunări sau în Senat —, nu partide, nici ideologii.' },
    { term: 'Proscripție', definition: 'Listă publică de vrăjmași a căror moarte era răsplătită și ale căror avuții erau luate. Rânduită de Sulla.' },
    { term: 'Socii', definition: 'Aliați italici datori să dea trupe fără să fie cetățeni. Obârșia Războiului Aliaților.' },
  ],
  debates: [
    {
      question: 'A fost imperialismul roman de apărare sau agresiv din temelie?',
      positions: [
        {
          school: 'Imperialism de apărare (Mommsen; tradiția sprijinită pe izvoarele romane)',
          argument:
            'Roma ar fi intrat mereu în război pricinuită de alții, aplicând rânduiala bellum iustum și răspunzând la amenințări sau la cereri de la aliați. Expansiunea ar fi o urmare necăutată a unei politici de apărare.',
        },
        {
          school: 'Agresivitate din temelie (Harris, 1979)',
          argument:
            'Faima militară era cerută pentru urcarea politică, prada îmbogățea generali și soldați, iar războiul era treaba obișnuită aproape în fiecare an. Îndemnurile dinăuntru împingeau spre expansiune fără legătură cu pricinile din afară.',
        },
      ],
      state:
        'Teza lui Harris s-a impus în bună parte, la miezul ei: societatea romană era rânduită pentru război. Se discută cât de multă plănuire conștientă a fost și cât au cântărit interesele bănești față de cele de cinste aristocratică.',
    },
    {
      question: 'A fost Republica romană, în vreun sens, democratică?',
      positions: [
        {
          school: 'Elemente democratice adevărate (Millar, 1998)',
          argument:
            'Poporul strâns în adunare alegea dregători și primea legi; oamenii politici trebuiau să-l înduplece în contio. Politica romană se făcea în public, iar retorica populară avea urmări, ceea ce nu îngăduie s-o reducem la o simplă fațadă oligarhică.',
        },
        {
          school: 'Oligarhie cu învoire (Mouritsen; tradiția lui Gelzer și Syme)',
          argument:
            'Rânduiala votului pe centurii îi ținea partea celui bogat, prezența adevărată la adunări era mică, nu era nici dezbatere, nici îndreptare la vot, iar clientelele hotărau rezultatul dinainte. Poporul întărea hotărâri luate în altă parte.',
        },
      ],
      state:
        'Dezbaterea deschisă de Millar a înnoit domeniul. Poziția de căpetenie recunoaște o latură publică și de înduplecare a politicii romane, fără să admită că ar fi existat o suveranitate populară adevărată: se vorbește de „oligarhie ce avea nevoie de îndreptățire populară”.',
    },
    {
      question: 'De ce a căzut Republica?',
      positions: [
        {
          school: 'Lămurire socio-economică',
          argument:
            'Cucerirea a ruinat mica țărănime, a înlocuit munca liberă cu cea de sclavi și a strâns pământul în puține mâini. Fără proprietari nu era nici recrut, nici temelie obștească a rânduielii, iar cearta pentru pământ a ajuns de nerezolvat.',
        },
        {
          school: 'Nepotrivire instituțională',
          argument:
            'Instituții de cetate-stat cârmuiau un imperiu: dregătorii anuale față de războaie de ani întregi, fără administrație de meserie, nici stăpânire asupra guvernatorilor. Comenzile ieșite din comun erau singura rezolvare practică și, în același timp, unealta pieirii sistemului.',
        },
        {
          school: 'Revoluția clasei cârmuitoare (Syme, 1939)',
          argument:
            'Ce s-a întâmplat a fost înlocuirea unei oligarhii cu alta prin silnicie, clientelism și propagandă. „Restaurarea” lui Augustus a fost o operațiune de vorbe peste o schimbare de rânduială adevărată.',
        },
      ],
      state:
        'Azi se preferă lămuriri îmbinate. Se subliniază, pe deasupra, un factor cultural: întrecerea aristocratică pentru cinste și-a pierdut marginile când răsplățile au ajuns fără măsură, iar armatele, personale.',
    },
  ],
  sources: [
    { author: 'Polibios', title: 'Istorii, cartea a VI-a', year: 'c. 140 î.Hr.', kind: 'primaria', note: 'Cercetarea constituției amestecate romane de către un martor grec al vremii.' },
    { author: 'Titus Livius', title: 'Ab Urbe condita', year: 'c. 27 î.Hr.–17 d.Hr.', kind: 'primaria', note: 'Povestire uriașă de la obârșii încoace. Izvor de căpetenie și, în același timp, clădire ideologică din vremea lui Augustus.' },
    { author: 'Sallustius', title: 'Conjurația lui Catilina; Războiul cu Iugurta', year: 'c. 42–40 î.Hr.', kind: 'primaria', note: 'Cercetare a vremii asupra coruperii elitei republicane.' },
    { author: 'Cicero', title: 'Scrisori către Atticus; cuvântări', year: '68–43 î.Hr.', kind: 'primaria', note: 'Corespondență privată ieșită din comun: politica republicană privită dinăuntru și în timp real.' },
    { author: 'Plutarh', title: 'Vieți paralele', year: 'c. 100 d.Hr.', kind: 'primaria', note: 'Biografii ale fraților Gracchus, ale lui Marius, Sulla, Pompei și Cezar. Interes moral mai mult decât analitic.' },
    { author: 'Ronald Syme', title: 'The Roman Revolution', year: '1939', kind: 'estudio', note: 'Analizează ridicarea lui Augustus ca înlocuire de oligarhii. Lucrare de temelie a prosopografiei romane.' },
    { author: 'William V. Harris', title: 'War and Imperialism in Republican Rome, 327–70 BC', year: '1979', kind: 'estudio', note: 'Dărâmă teza imperialismului de apărare.' },
    { author: 'Fergus Millar', title: 'The Crowd in Rome in the Late Republic', year: '1998', kind: 'estudio', note: 'Redeschide dezbaterea despre elementele democratice ale Republicii.' },
    { author: 'Henrik Mouritsen', title: 'Plebs and Politics in the Late Roman Republic', year: '2001', kind: 'estudio', note: 'Răspuns critic la Millar despre participarea populară adevărată.' },
    { author: 'Mary Beard', title: 'SPQR: A History of Ancient Rome', year: '2015', kind: 'estudio', note: 'Sinteză recentă, foarte atentă la problemele de izvoare și la viața oamenilor de rând.' },
  ],
  documents: [
    {
      section: 1,
      title: 'Polibios lămurește de ce Roma nu are un singur stăpân',
      text: [
        'Cele trei puteri erau împărțite în așa fel încât niciun roman n-ar fi putut spune cu siguranță dacă rânduiala era aristocratică, democratică sau monarhică.',
        'Și era firesc: uitându-te la puterea consulilor, părea monarhică; la cea a senatului, aristocratică; iar dacă luai aminte la puterea poporului, părea limpede democratică.',
      ].join('\n\n'),
      source: 'Polibios, Istorii, VI, 11. Scris pe la 150 î.Hr.',
      note: 'Versiune proprie după greacă. Polibios era un ostatic grec la Roma și scria ca să le lămurească izbânda romană conaționalilor lui.',
      question: 'Polibios înfățișează echilibrul drept cheia izbânzii romane. Cu ce știi despre votul pe centurii, în ce măsură era adevărat elementul democratic? Și de ce îi era de folos unui grec să-l descrie așa?',
    },
  ],
  images: [
    {
      alt: 'Pictură din secolul al XIX-lea cu Cicero în picioare în fața Senatului roman, în timp ce Catilina apare singur pe o bancă',
      caption: 'Cicero îl învinuiește pe Catilina, după Cesare Maccari (1888). E o reconstituire din secolul al XIX-lea, nu un document vechi.',
    },
    {
      alt: 'Sculptură în bronz a unei lupoaice încordate, cu doi copii goi sugând sub pântecele ei',
      caption: 'Lupoaica Capitolină. Bronzul e medieval sau vechi, după analiza pe care o primești, iar gemenii sunt un adaos renascentist: chiar icoana de temelie a Romei e o problemă de izvoare.',
    },
    {
      alt: 'Ruine de coloane, arcuri și temelii de marmură răspândite pe o câmpie înconjurată de dealuri',
      caption: 'Forul Roman. Aici se strângeau comițiile, se împărțea dreptatea și i se vorbea poporului: constituția republicană era mai întâi un loc, apoi un text.',
    },
    {
      alt: 'Pictură cu un războinic pe cal aruncându-și armele în fața unui general roman așezat, înconjurat de statul lui major',
      caption: 'Vercingetorix se predă lui Cezar, după Lionel Royer (1899). E o scenă patriotică franceză din secolul al XIX-lea, nu un document vechi: așa se citea pe atunci cucerirea Galiei.',
    },
  ],
  questions: [
    {
      question: 'De ce se cuvine citită cu grijă povestirea tradițională despre obârșiile Romei?',
      options: [
        'Fiindcă nu există nicio dovadă arheologică despre Roma',
        'Fiindcă Livius și Dionisie scriu patru sau cinci veacuri mai târziu despre o tradiție deja alcătuită de familiile aristocratice',
        'Fiindcă a fost scrisă în greacă',
        'Fiindcă romanii nu cunoșteau scrisul',
      ],
      explanation: 'Cuvântările de îngropăciune și listele de familie umflau meritele, iar povestirea aruncă înapoi categorii politice din secolul I î.Hr. E memorie culturală, nu letopiseț.',
    },
    {
      question: 'Cum a descris Polibios constituția romană?',
      options: [
        'Ca pe o monarhie absolută',
        'Ca pe o constituție amestecată ce îmbina elemente monarhice, aristocratice și democratice',
        'Ca pe o democrație directă',
        'Ca pe o teocrație preoțească',
      ],
      explanation: 'Consulii, Senatul și adunările ar fi întrupat cele trei principii. Polibios punea pe seama acestui echilibru statornicia și izbânda expansivă a Romei.',
    },
    {
      question: 'Ce urmare avea rânduiala votului în comițiile centuriate?',
      options: [
        'Un cetățean, un vot',
        'Centuriile celor mai bogați votau întâi, iar votul se oprea la atingerea majorității',
        'Votau numai tribunii',
        'Votul era secret și cântărit după vârstă',
      ],
      explanation: 'Clasele mai de jos adesea nici nu apucau să se rostească. Faptul că adunările erau, în teorie, suverane nu însemna că poporul hotăra în fapt.',
    },
    {
      question: 'Care a fost arma cea mai lucrătoare a plebei în conflictul dintre ordine?',
      options: [
        'Uciderea consulilor',
        'Secesiunea: retragerea în grup și refuzul de a lupta',
        'Alianța cu Cartagina',
        'Greva dărilor',
      ],
      explanation: 'Roma era în război necurmat și nu se putea lipsi de soldații ei. Prima secesiune, din 494 î.Hr., a smuls întemeierea tribunatului.',
    },
    {
      question: 'Ce însemnătate a avut Legea celor Douăsprezece Table?',
      options: [
        'A dat cetățenia italicilor',
        'A înlăturat monopolul patrician asupra cunoașterii dreptului, tălmăcit până atunci pe cale orală de pontifi',
        'A desființat sclavia',
        'A întemeiat Senatul',
      ],
      explanation: 'Cuprinsul ei nu era mai ales prielnic plebei, dar publicitatea legii mărginea samavolnicia judecătorilor aristocrați.',
    },
    {
      question: 'Care a fost urmarea obștească a conflictului dintre ordine?',
      options: [
        'Egalitatea politică deplină între toți cetățenii',
        'Alcătuirea unei elite noi, patriciano-plebeiană, nobilitas, care a ținut monopolul dregătoriilor',
        'Desființarea Senatului',
        'Izgonirea patricienilor din Roma',
      ],
      explanation: 'Deschiderea oficială a dregătoriilor a trăit laolaltă cu o închidere sociologică foarte aspră. Un homo novus ca Cicero era o raritate băgată în seamă.',
    },
    {
      question: 'De ce nu a trecut cea mai mare parte a aliaților italici de partea lui Hanibal?',
      options: [
        'Fiindcă se temeau de cartaginezi mai mult decât de Roma',
        'Fiindcă Roma adusese elitele de la fața locului înăuntrul sistemului printr-un mozaic de statute juridice',
        'Fiindcă Hanibal nu a ajuns să intre în Italia',
        'Fiindcă erau fără arme',
      ],
      explanation: 'Coloniile latine, municipiile și aliații cu trepte deosebite de drepturi dădeau elitelor locale interese proprii înăuntrul sistemului roman.',
    },
    {
      question: 'Ce argumentează William Harris împotriva „imperialismului de apărare”?',
      options: [
        'Că Roma nu a fost niciodată atacată',
        'Că faima militară era cerută pentru urcarea politică și prada îmbogățea generali și soldați, ceea ce zămislea îndemnuri dinăuntru spre război',
        'Că războaiele le hotărau adunările populare',
        'Că Roma a luptat numai cu Cartagina',
      ],
      explanation: 'Războiul era treaba obișnuită aproape în fiecare an. Rânduiala de îndemnuri împingea spre expansiune fără legătură cu pricinile din afară.',
    },
    {
      question: 'Ce problemă militară căuta să rezolve reforma agrară a lui Tiberius Gracchus?',
      options: [
        'Lipsa de cavalerie',
        'Faptul că numai proprietarii puteau fi recrutați, iar țărănimea pierea',
        'Prisosul de soldați de bunăvoie',
        'Dezertarea aliaților greci',
      ],
      explanation: 'Reforma avea o latură militară pe lângă cea obștească: fără mici proprietari nu era temelie de recrutare pentru legiuni.',
    },
    {
      question: 'Ce urmare hotărâtoare a avut reforma militară a lui Marius?',
      options: [
        'A scăzut mărimea armatei',
        'Soldații fără avere așteptau pământ de la generalul lor, nu de la stat: credința oștească s-a personalizat',
        'A oprit recrutarea italicilor',
        'A înlocuit infanteria cu cavaleria',
      ],
      explanation: 'De aici înainte, cel ce comanda legiuni avea la îndemână o unealtă politică proprie, iar războaiele civile au ajuns cu putință.',
    },
    {
      question: 'Cum s-a încheiat Războiul Aliaților din 91-88 î.Hr.?',
      options: [
        'Cu izgonirea italicilor din Italia',
        'Cu darea cetățeniei Italiei de la sud de Pad, adică cedând ce cereau aliații',
        'Cu biruința deplină a Romei, fără nicio cedare',
        'Cu neatârnarea aliaților italici',
      ],
      explanation: 'Roma a pierdut în mare parte lupta și a rezolvat cearta unind prin puterea faptelor, nu din mărinimie.',
    },
    {
      question: 'Ce precedent a statornicit Sulla, mai trainic decât reformele lui?',
      options: [
        'Mărginirea tribunatului',
        'Luarea puterii mărșăluind cu legiunile asupra Romei și rânduirea din nou a statului pornind de la biruința militară',
        'Întărirea Senatului',
        'Întemeierea cursus honorum',
      ],
      explanation: 'A mărșălui asupra Romei cu o armată era de negândit înainte de 88 î.Hr. După aceea, a încetat să mai fie.',
    },
    {
      question: 'Ce erau, de fapt, populares și optimates?',
      options: [
        'Partide politice cu program și înscriere',
        'Metode de faptă politică: căutarea sprijinului în adunări sau în Senat',
        'Clase sociale rânduite prin lege',
        'Facțiuni religioase',
      ],
      explanation: 'Același aristocrat putea folosi metode populare la un ceas și apăra Senatul la altul. Erau strategii, nu ideologii.',
    },
    {
      question: 'Ce reprezintă legământul din 60 î.Hr. dintre Cezar, Pompei și Crassus?',
      options: [
        'O dregătorie întemeiată prin lege',
        'O înțelegere privată ca să-și împartă alegerile și comenzile, semn că instituțiile încetaseră să mai hotărască',
        'O alianță militară împotriva Cartaginei',
        'Un tratat cu Senatul',
      ],
      explanation: 'Așa-numitul prim triumvirat nu a fost o instituție. Chiar existența lui arată cât de departe ajunsese descompunerea sistemului republican.',
    },
    {
      question: 'Ce teză apără Ronald Syme în The Roman Revolution?',
      options: [
        'Că Augustus a restaurat cu adevărat Republica',
        'Că ce s-a întâmplat a fost înlocuirea unei oligarhii cu alta prin silnicie, clientelism și propagandă',
        'Că Republica a căzut din pricina unei năvăliri străine',
        'Că poporul roman a răsturnat aristocrația',
      ],
      explanation: 'Syme dărâmă retorica restaurării lui Augustus. Tacitus rezumase deja fapta: s-au păstrat numele și s-a schimbat firea.',
    },
    {
      question: 'În dezbaterea deschisă de Fergus Millar, ce susține poziția de căpetenie de azi?',
      options: [
        'Că Roma a fost o democrație deplină',
        'Că a fost o oligarhie ce avea nevoie de îndreptățire populară, cu politică publică și de înduplecare, dar fără o suveranitate populară adevărată',
        'Că poporul nu lua parte deloc',
        'Că adunările nu s-au întrunit niciodată',
      ],
      explanation: 'Se primește latura publică și retorică pe care a subliniat-o Millar, fără să se admită că adunarea hotăra cu adevărat: rânduiala votului și clientelele o împiedicau.',
    },
  ],
}
