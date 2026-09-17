import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/plena-edad-media.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 15 date, 15 concepte, 3 dezbateri, 19 surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const plenaEdadMediaRo: TopicTranslation = {
  title: 'Orașe, comerț și universități',
  description: 'Avântul secolelor de mijloc: sat, piață, comună, credit și corporație universitară.',
  years: 'c. 1000–1300',
  summary:
    'Între anul o mie și 1300, populația europeană s-a dublat cu prisosință, au fost desțelenite păduri și mlaștini, orașele au reapărut ca subiecte de drept, s-a bătut din nou monedă de aur și s-au născut două instituții încă în picioare: universitatea și societatea negustorească. A o povesti drept trezirea unei Europe adormite ar însemna repetarea greșelii umaniștilor. Ce s-a întâmplat este mai anume și mai interesant: un surplus agrar ținut trei secole a îngăduit ca o parte tot mai mare a populației să nu mai producă hrană, iar acei oameni au clădit piețe, tribunale, școli și credite. Au clădit, de asemenea, cu aceleași unelte juridice și birocratice, mecanismele cu care Europa a învățat să își prigonească în chip sistematic minoritățile.',
  keyDates: [
    { date: '1075', event: '*Dictatus papae* al lui Grigore al VII-lea: începe cearta investiturilor.' },
    { date: '1077', event: 'Henric al IV-lea în fața lui Grigore al VII-lea, la Canossa.' },
    { date: '1086', event: 'Domesday Book: recensământul englez înregistrează peste cinci mii cinci sute de mori de apă.' },
    { date: 'c. 1088', event: 'Data convențională a școlii de drept de la Bologna, fixată în 1888.' },
    { date: '1122', event: 'Concordatul de la Worms: se despart jurisdicția spirituală și cea vremelnică.' },
    { date: 'c. 1140', event: 'Gratian alcătuiește *Decretul*, temelia dreptului canonic clasic.' },
    { date: '1155', event: '*Authentica Habita*: Frederic I îi ocrotește pe studenții aflați pe drum.' },
    { date: 'Secolele XII–XIII', event: 'Ciclul târgurilor din Champagne, balama între Flandra și Italia.' },
    { date: '1209–1216', event: 'Se nasc franciscanii și dominicanii, ordine de predică orășenească.' },
    { date: '1209–1229', event: 'Cruciada albigenzilor împotriva catarilor din Languedoc.' },
    { date: '1215', event: 'Al IV-lea Conciliu de la Lateran: spovedanie anuală, transsubstanțiere și semne deosebitoare pentru evrei și musulmani.' },
    { date: '1231', event: '*Parens scientiarum*: Grigore al IX-lea sfințește privilegiile Universității din Paris.' },
    { date: '1252', event: 'Genova și Florența bat din nou monedă de aur; Veneția o va face în 1284.' },
    { date: '1277', event: 'Episcopul Tempier osândește 219 propoziții predate la Paris.' },
    { date: '1290', event: 'Izgonirea evreilor din Anglia; Franța va face la fel în 1306.' },
  ],
  sections: [
    {
      title: 'Avântul anului o mie',
      body: [
        'Tot restul atârnă de asta: între secolul al X-lea și al XIV-lea, populația europeană a trecut de la vreo treizeci și cinci sau patruzeci de milioane la vreo șaptezeci sau optzeci. Cifrele sunt estimări clădite pe recensăminte fiscale parțiale și pe registre senioriale, cu margini largi, dar direcția nu se discută. Această creștere a cerut mai multă hrană, iar hrana a venit din desțelenire și din producerea mai bună.',
        'Desțelenirea a fost motorul cel mai puțin văzut și cel mai hotărâtor: au fost tăiate păduri, secate mlaștini, câștigat pământ de la mare în Flandra și colonizat spre estul Elbei. În paralel s-au răspândit o serie de tehnici care nu erau noi, dar care acum s-au îmbinat: plugul greu cu cormană, în stare să întoarcă solurile umede și lutoase din nord, hamul rigid, care îngăduie tragerea calului fără să îl sugrume, potcoava, înhămarea în șir și rotația trienală, care lasă pârloagă o treime din pământ în loc de jumătate și adaugă o semănătură de primăvară cu leguminoase, cu efectul suplimentar de a fixa azotul și de a îmbunătăți hrana.',
        'Energia hidraulică s-a generalizat. Domesday Book, din 1086, înregistrează în Anglia peste cinci mii cinci sute de mori de apă pentru o populație de vreun milion sau două de locuitori: o moară la fiecare câteva sute de oameni. Morile nu măcinau doar grâu; erau folosite la piuă pentru postav, la ferăstrău, la ciocanul de fierărie și la foaie.',
        'Lynn White Jr. a susținut în 1962 că aceste noutăți tehnice explică de una singură prefacerea socială a Europei. Critica de mai apoi i-a îndreptat cronologia — plugul greu și scara apar mai devreme și se răspândesc mai încet decât presupunea el — și s-a ferit de determinism: tehnica era la îndemână cu mult înainte de a se generaliza, așa că trebuie explicat de ce a fost primită tocmai atunci. Răspunsul arată spre cerere, spre stabilitatea relativă de după sfârșitul incursiunilor vikinge, maghiare și sarazine, și spre seniori interesați de un surplus de vândut.',
        'Se obișnuiește să fie adăugat un factor de climă, așa-numitul optim medieval al secolelor X-XIII. Se cuvine folosit cu grijă: reconstituirile globale arată că nu a fost o încălzire în același timp pe toată planeta, ci abateri regionale, și că în Europa apuseană efectul a fost real, dar potolit. Este un factor prielnic, nu o explicație.',
      ].join('\n\n'),
      callout:
        'Rotația trienală nu doar mărește suprafața semănată de la jumătate la două treimi: semănătura de primăvară aduce leguminoase, care fixează azotul și dau proteină. O schimbare a calendarului agricol este și o schimbare de hrană.',
    },
    {
      title: 'Orașul: un statut juridic mai înainte de a fi o mărime',
      body: [
        'În Evul Mediu, un oraș nu se definește prin numărul de locuitori, ci prin drept. Ce desparte târgul de sat este o cartă — fuero, cartă de franchiză, privilegiu — care înlocuiește îndatoririle senioriale cu un cens fix în bani, recunoaște un tribunal propriu, o gardă, o piață și, adesea, libertatea persoanei celui care locuiește acolo un timp. Vorba germană care rezumă practica, „aerul orașului te face liber după un an și o zi”, este o formulare de mai târziu a unui obicei real: iobagul fugit, dacă nu era cerut înapoi în acel răstimp, rămânea liber.',
        'Forma cea mai îndrăzneață a fost comuna: o asociere jurată a locuitorilor, care se leagă unii față de alții și negociază, cumpără sau smulge prin forță guvernarea orașului de la seniorul sau episcopul lui. Apare în nordul Italiei, la sfârșitul secolului al XI-lea, și se întinde prin Flandra, Renania și nordul Franței. În Italia a dus la republici orășenești cu consuli și apoi cu *podestà*, un dregător străin de oraș, tocmit pe un an tocmai ca să nu aibă clientelă locală.',
        'Înăuntrul orașului, viața economică era rânduită în bresle. Rostul lor declarat era să asigure calitatea, să pregătească ucenici și să susțină văduvele și bolnavii; rostul lor real cuprindea fixarea prețurilor, mărginirea concurenței și controlul asupra cui putea exercita o meserie. Au fost deodată școală tehnică, asigurare socială și monopol, iar încordările lor dinăuntru — maiștrii împotriva calfelor, meseriile mari împotriva celor mici — au hrănit conflictele orășenești ale secolului al XIV-lea.',
        'Se cuvin ținute minte mărimile, ca să nu fie exagerate. Pe la 1300, Parisul putea să se apropie de două sute de mii de locuitori, iar Milano, Veneția și Florența de vreo sută de mii; dar covârșitoarea majoritate a localităților cu statut orășenesc aveau între două mii și zece mii, iar peste optzeci la sută din populația Europei continua să trăiască la sat. Orașul a fost hotărâtor prin ce aduna — capital, drept, scris, informație —, nu prin greutatea lui demografică.',
        'Explicația clasică a renașterii orășenești a dat-o Henri Pirenne: orașele s-ar fi născut din comerțul pe distanțe lungi, în jurul unor negustori umblători care se așezau lângă cetăți și mănăstiri. Cercetarea de mai apoi a răsturnat o bună parte a argumentului. Multe orașe au crescut pe scaune episcopale care nu au dispărut niciodată de tot, motorul de la început a fost surplusul agrar și piața ținutală, iar comerțul internațional a venit adesea mai apoi. Ce rezistă din aportul lui Pirenne este că a pus lumina pe oraș ca subiect istoric cu mișcare proprie, nu ca anexă a lumii senioriale.',
      ].join('\n\n'),
    },
    {
      title: 'Comerțul: drumuri, credit și unelte',
      body: [
        'Axul comerțului european a unit doi poli de manufactură: Flandra, care țesea postavuri din lână englezească, și Italia, care le desăvârșea, le vopsea și le răspândea mai departe, și care ținea sub control accesul la mirodenii, la mătase și la alaunul din Mediterana răsăriteană. Între cele două s-au așezat târgurile din Champagne, un ciclu de șase târguri anuale înșiruite în patru localități, care a funcționat aproape două secole ca o casă de compensare a Europei: acolo nu doar se cumpărau mărfuri, ci se stingeau datorii și se schimbau monede sub ocrotirea conților.',
        'În nord, Hansa a rânduit Baltica și Marea Nordului de la Lübeck, cu factorii statornice la Novgorod, la Bergen, la Bruges și la Londra, și cu un comerț de mărfuri cu volum: cereale, lemn, pește sărat, ceară, blănuri. În sud, Veneția și Genova s-au întrecut pentru drumurile Levantului și pentru colonii la Marea Neagră; cea de-a patra cruciadă, abătută în 1204 împotriva Constantinopolului, se explică mult mai bine ca operațiune comercială venețiană decât ca întreprindere religioasă.',
        'Ce a făcut cu putință acel volum a fost o mulțime de unelte juridice și de contabilitate. *Commenda* îl asocia pe cel care punea capitalul cu cel care călătorea și muncea, împărțind câștigul — de obicei trei sferturi pentru capital — și mărginind pierderea la capitalul pus: este strămoșul direct al societății în comandită. Cambia a îngăduit plata într-o piață și încasarea în alta, în altă monedă, fără mutarea metalului. Contabilitatea în partidă dublă apare în registrele italiene la începutul secolului al XIV-lea, cu mult înainte ca Luca Pacioli să o codifice în 1494. Iar în secolul al XIV-lea este deja documentată asigurarea maritimă ca un contract de sine stătător.',
        'Toate acestea se loveau de interzicerea canonică a cametei, înțeleasă ca luarea a orice peste principal. Răspunsul nu a fost trecerea peste normă, ci ocolirea ei prin tehnică juridică: dobânda se ascundea în diferența de schimb dintre două monede și două piețe, în împărțirea riscului sau în penalizări pentru întârziere înțelese dinainte. Teologii au rafinat excepțiile — *damnum emergens*, *lucrum cessans* —, iar practica negustorească a înaintat prin acea gaură. Evreilor, excluși din bresle și din proprietatea pământului în multe teritorii, li s-a dat rolul de cămătari, iar apoi li s-a reproșat că îl exercitau.',
        'Semnul cel mai limpede al schimbării de scară este cel monetar. Europa nu mai bătuse aur în chip statornic de secole; în 1252, Genova și Florența au emis genovinul și florinul, iar Veneția ducatul, în 1284. Florinul a devenit monedă de referință internațională timp de două secole.',
        'Robert Lopez a numit acest ansamblu „revoluție comercială”, iar eticheta a prins. Are o hibă de perspectivă: documentele din Gueniza cairoteană, studiate de Shelomo Goitein, arată că lumea islamică folosea cu mult înainte unelte la fel — *suftaja*, asemănătoare cambiei, și *qirad*, foarte apropiat de *commenda* —, iar Abraham Udovitch a susținut că transmiterea a fost directă. Europa nu a inventat pe atât cât a răspândit, a rânduit și a dus la scară.',
      ].join('\n\n'),
      callout:
        '*Commenda* mărginește pierderea investitorului la capitalul pus și împarte câștigul cu cel care călătorește. Răspundere mărginită și despărțirea dintre capital și conducere: două trăsături ale întreprinderii moderne, documentate la Veneția în secolul al XI-lea.',
    },
    {
      title: 'Universitatea: o corporație cu privilegii',
      body: [
        '*Universitas* nu însemna universitate, ci corporație: ansamblul de persoane asociate pentru un scop, cu personalitate juridică, statute și jurisdicție. Universitatea medievală este, literalmente, o breaslă a învățământului, iar această obârșie explică aproape tot restul.',
        'S-au născut cu două modele potrivnice. La Bologna, corporația era a studenților: îi tocmeau pe profesori, le fixau programa și îi amendau dacă săreau peste o lecție sau nu terminau materia. La Paris, corporația era a maeștrilor, adunați pe facultăți și pe națiuni, cu cancelarul catedralei ca greutate pe cealaltă talere. De acolo vin cele două familii europene de cârmuire universitară. Data de 1088 pentru Bologna nu vine din niciun document: a fost fixată în 1888, când orașul și-a organizat a opta sută de aniversare.',
        'Unealta hotărâtoare au fost privilegiile. *Authentica Habita* a lui Frederic I, din 1155, i-a ocrotit pe studenții aflați pe drum și le-a îngăduit să fie judecați de maestrul lor sau de episcop, nu de tribunalul local. Papii au dat mai apoi *licentia ubique docendi*, îngăduința de a preda oriunde în creștinătate, care este obârșia recunoașterii internaționale a diplomelor. Iar corporațiile și-au descoperit repede arma: greva și împrăștierea. După răscoala și represiunea din 1229, maeștrii de la Paris au oprit lecțiile și au plecat din oraș doi ani; în 1231, Grigore al IX-lea a cedat prin *Parens scientiarum*, care i-a recunoscut universității dreptul de a-și da statute proprii și de a suspenda învățământul.',
        'Metoda era la fel de anume ca și cuprinsul. *Lectio* comenta un text primit ca autoritate; *quaestio* scotea din el o problemă; *disputatio* punea față în față, în public, argumente și contraargumente, în fața unui maestru care hotăra la urmă. Abelard fixase procedura în *Sic et non*, așezând o sută cincizeci și opt de întrebări cu autorități care se contraziceau asupra fiecăreia și lăsând cititorului sarcina de a le rezolva. A gândi însemna a rândui neînțelegerea, nu a o ocoli.',
        'Combustibilul a venit din afară. Între secolele al XII-lea și al XIII-lea a fost tradus în latină, mai ales din arabă la Toledo și din greacă în Sicilia, corpusul întreg al lui Aristotel, împreună cu comentariile lui Avicenna și ale lui Averroes și cu medicina și matematica grecești și arabe. Primirea a fost cu ceartă: predarea fizicii și a metafizicii aristotelice a fost interzisă la Paris în 1210, iar osândirile din 1270 și din 1277 — aceasta din urmă cu două sute nouăsprezece propoziții — arată cât de mult se discuta instituția cu ea însăși despre hotarele dintre rațiune și credință.',
        'Se cuvine să nu fie idealizată. Se studia în latină, se intra pe cale clericală, costa bani, iar femeile erau excluse cu totul. A fost o instituție a unei minorități foarte mici. Însemnătatea ei stă în altă parte: a creat un corp de meserie de intelectuali orășenești plătiți — Jacques Le Goff i-a numit intelectualii Evului Mediu — și o formă corporativă de sine stătătoare, care a supraviețuit opt secole.',
      ].join('\n\n'),
      callout:
        'Greva de la Paris din 1229 a ținut doi ani și s-a sfârșit cu papa dându-i universității statute proprii. Dreptul de autoguvernare academică s-a născut dintr-un conflict de muncă.',
    },
    {
      title: 'Reformă, drept și prigoană',
      body: [
        'Prefacerea de instituție cea mai adâncă a perioadei a început înăuntrul Bisericii. Reforma gregoriană a vrut să elibereze clerul de sub controlul puterilor lumești: interzicerea simoniei, celibatul obligatoriu, alegerea episcopilor fără amestec din afară. *Dictatus papae*, din 1075, a dus pretenția până la a afirma puterea papei de a-i detrona pe împărați, iar cearta investiturilor care a urmat, cu episodul de la Canossa, din 1077, s-a sfârșit prin înțelegerea de la Worms, din 1122: împăratul renunță la investitura cu semnele spirituale și o păstrează pe cea vremelnică.',
        'Harold Berman a propus citirea acelui conflict ca o „revoluție papală” întemeietoare a tradiției juridice occidentale. Argumentul lui este că despărțirea dintre două jurisdicții care se recunosc reciproc drept competente a silit la definirea cu precizie a domeniului fiecăreia, iar de acolo au ieșit dreptul canonic ca sistem, redobândirea dreptului roman și ideea, rar întâlnită în istorie, că puterea este supusă unui drept pe care nu îl face ea însăși.',
        'Materialele au ținut pasul. Pe la 1140, Gratian a alcătuit *Armonia canoanelor discordante*, care a aplicat dreptului Bisericii aceeași metodă scolastică de a împăca autoritățile aflate în ceartă. La Bologna, glosatorii au reconstituit *Corpus iuris civilis* iustinian și au format generații de juriști pe care monarhiile i-au tocmit numaidecât: juristul de meserie este o figură a acestei perioade, iar creșterea statului în secolele următoare se sprijină pe el.',
        'Aceeași putere de organizare s-a aplicat definirii și prigonirii dizidenței. Al IV-lea Conciliu de la Lateran, din 1215, a impus spovedania anuală și împărtășania de Paști, a definit transsubstanțierea și a poruncit semne deosebitoare pentru evrei și musulmani. Catarii din Languedoc au fost luptați cu o cruciadă dinăuntru, între 1209 și 1229, iar din anii treizeci ai secolului al XIII-lea s-a generalizat *inquisitio*, o procedură judiciară în care tribunalul cercetează din oficiu, fără nevoie de acuzator, cu scriere și arhivă: o noutate de procedură cu urmări îndelungate, primită apoi și de justiția civilă europeană.',
        'R. I. Moore a rezumat această alunecare în 1987, cu o teză discutată și foarte rodnică: între 1000 și 1250, Europa a devenit o „societate prigonitoare”, care a clădit categorii statornice de oameni excluși — eretici, evrei, leproși, sodomiți — și a dezvoltat instituții statornice ca să îi găsească și să îi pedepsească. Punctul lui hotărâtor este că prigoana nu a fost revărsarea de la sine a fanatismului popular, ci rodul unei puteri tot mai știutoare de carte și birocratice, care avea nevoie să își definească hotarele. Critica i-a reproșat că adună fenomene deosebite și că micșorează greutatea vrăjmășiei sociale de dinainte; cadrul, cu toate acestea, s-a impus. Anglia i-a izgonit pe evreii ei în 1290, iar Franța în 1306.',
        'În același timp, evlavia orășenească a dat răspunsuri pe care Biserica a izbutit să le primească în sânul ei. Franciscanii și dominicanii, întemeiați între 1209 și 1216, predicau prin orașe, trăiau din milostenie și au ocupat repede catedrele universitare. Toma din Aquino și Bonaventura au fost călugări cerșetori și profesori la Paris: ordinul născut ca să predice săracilor a ajuns să administreze cultura de sus.',
      ].join('\n\n'),
    },
    {
      title: 'Hotarele creșterii',
      body: [
        'Pe la 1270, modelul a început să se istovească. Desțelenirea ajunsese la pământuri de margine, cu rod mic, moștenirile fărâmițau gospodăriile, raportul dintre populație și suprafața de arat se înrăutățea, iar prețul grâului urca în termeni reali. Marea foamete din nordul Europei, din 1315-1317, pricinuită de mai mulți ani de ploi pustiitoare, a găsit o populație deja la hotar. Ciuma neagră din 1348 avea să vină după aceea, peste acest teren.',
        'Se cuvine, pe deasupra, să fie așezat episodul la scara lui reală. În timp ce Europa redescoperea moneda de aur, China dinastiei Song avea orașe cu peste un milion de locuitori, tipar cu litere mobile din secolul al XI-lea și bani de hârtie emiși de stat; lumea islamică folosea de mai înainte uneltele de credit pe care Italia le-a primit; iar comerțul din Oceanul Indian mișca volume pe care Mediterana nu le atingea. Ce deosebește Europa acestor secole nu este o întâietate tehnică sau economică, ci o formă juridică anume: înmulțirea corporațiilor de sine stătătoare, cu personalitate proprie — comune, bresle, universități, ordine —, în stare să încheie contracte, să se judece și să dăinuie dincolo de membrii lor. Este un argument de instituție, nu o ierarhie de civilizații.',
        'Au rămas pe dinafara împărțirii și cei dintotdeauna. Starea țăranului s-a îmbunătățit ca libertate juridică, dar nu neapărat ca nivel de trai; femeile munceau în meseriile orășenești și, în unele cazuri, alcătuiau bresle proprii, precum cele ale mătăsii de la Paris, dar au rămas excluse din universitate, din dregătorii și din cele mai multe maiestrii; iar minoritățile religioase au trecut de la o toleranță interesată la izgonire, în ceva mai mult de un secol.',
        'Bilanțul, cu toate acestea, este cel al unei prefaceri de fond. În anul o mie, Europa era o lume rurală, de schimb local și cultură mănăstirească; în 1300 avea orașe cu drept propriu, o rețea negustorească ce lega Novgorodul de Alexandria, unelte de credit refolosibile, un corp de juriști de meserie și douăzeci de universități. Niciunul dintre aceste lucruri nu a dispărut odată cu criza secolului al XIV-lea: a fost cadrul înăuntrul căruia a fost înfruntată.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Desțelenire', definition: 'Punerea sub lucrare a pădurilor, a mlaștinilor și a pământurilor pustii. Izvorul de temelie al hranei în plus, între secolele al XI-lea și al XIII-lea.' },
    { term: 'Rotație trienală', definition: 'Ciclu care lasă pârloagă o treime din pământ în loc de jumătate și aduce o semănătură de primăvară cu leguminoase.' },
    { term: 'Carruca', definition: 'Plug greu cu cormană și roți, în stare să întoarcă solurile umede și lutoase din nordul Europei.' },
    { term: 'Cartă de franchiză', definition: 'Document care dă unei localități libertăți, tribunal și piață, în schimbul unui cens fix. Definește juridic orașul.' },
    { term: 'Comună', definition: 'Asociere jurată a locuitorilor, care smulge sau negociază guvernarea orașului de la seniorul lui. Obârșia republicilor orășenești italiene.' },
    { term: 'Podestà', definition: 'Dregător străin de oraș, tocmit pe un an în orașele italiene, tocmai ca să nu aibă clientelă locală.' },
    { term: 'Breaslă', definition: 'Corporație de meserie. Deodată școală tehnică, asigurare socială și monopol: controla calitatea, pregătirea, prețurile și accesul.' },
    { term: 'Târgurile din Champagne', definition: 'Ciclu de șase târguri anuale, care a funcționat ca o casă de compensare între Flandra și Italia aproape două secole.' },
    { term: 'Commenda', definition: 'Contract care asociază capitalul cu munca celui care călătorește, împarte câștigul și mărginește pierderea la capitalul pus.' },
    { term: 'Cambie', definition: 'Unealtă pentru plata într-o piață și încasarea în alta, în altă monedă. Îngăduia, pe deasupra, ascunderea dobânzii în cursul de schimb.' },
    { term: 'Camătă', definition: 'Luarea a orice sumă peste principal, interzisă de dreptul canonic. A fost ocolită prin tehnică juridică, nu desființată.' },
    { term: 'Universitas', definition: 'Corporație cu personalitate juridică, statute și jurisdicție proprii. Universitatea este, literalmente, o breaslă a învățământului.' },
    { term: 'Licentia ubique docendi', definition: 'Îngăduința papală de a preda oriunde în creștinătate. Obârșia recunoașterii internaționale a diplomelor.' },
    { term: 'Disputatio', definition: 'Exercițiu public de argumente puse față în față, în fața unui maestru care hotărăște. Metoda scolastică rânduiește neînțelegerea, nu o ocolește.' },
    { term: 'Inquisitio', definition: 'Procedură în care tribunalul cercetează din oficiu, fără acuzator, cu scriere și arhivă. Noutate de procedură primită apoi de justiția civilă.' },
  ],
  debates: [
    {
      question: 'Ce explică renașterea orășenească europeană?',
      positions: [
        {
          school: 'Comerț pe distanțe lungi (Pirenne)',
          argument:
            'Orașele s-au născut din comerț: negustori umblători care se așază lângă cetăți și mănăstiri și sfârșesc prin a forma un nucleu cu drept propriu. Burghezia este un produs al schimbului internațional.',
        },
        {
          school: 'Creștere agrară și piață ținutală',
          argument:
            'Mai întâi a fost surplus rural și piețe locale; comerțul internațional a venit după. Multe orașe au crescut pe scaune episcopale care nu au dispărut niciodată de tot, așa încât continuitatea atârnă mai greu decât întemeierea din nou.',
        },
      ],
      state:
        'Șirul lui Pirenne este răsturnat de cercetarea de mai apoi: motorul de la început a fost agrar și local. Ce se păstrează din aportul lui este să fi tratat orașul ca subiect istoric cu logica lui proprie, nu ca anexă a lumii senioriale.',
    },
    {
      question: 'A existat o „revoluție comercială” europeană?',
      positions: [
        {
          school: 'Revoluție comercială (Robert S. Lopez)',
          argument:
            'Între secolele al XI-lea și al XIII-lea, Europa a creat societatea negustorească, cambia, contabilitatea în partidă dublă, asigurarea și banca, și a bătut din nou aur. O schimbare de fire, nu de treaptă.',
        },
        {
          school: 'Răspândire dinspre Mediterana islamică (Goitein, Udovitch)',
          argument:
            'Documentele din Gueniza cairoteană arată unelte la fel, folosite cu mult înainte: *suftaja*, asemănătoare cambiei, și *qirad*, foarte apropiat de *commenda*. Europa a rânduit și a dus la scară ce a primit.',
        },
      ],
      state:
        'Se primește mărimea schimbării europene și se respinge ideea de născocire de la zero. Discuția deschisă este cât de directă a fost transmiterea sau dacă au fost dezvoltări paralele, pornind dintr-un fond mediteranean comun.',
    },
    {
      question: 'A devenit Europa o „societate prigonitoare”?',
      positions: [
        {
          school: 'Prigoană clădită de sus (R. I. Moore, 1987)',
          argument:
            'Între 1000 și 1250 s-au creat categorii statornice de oameni excluși — eretici, evrei, leproși, sodomiți — și instituții statornice ca să îi găsească. Motorul a fost o putere știutoare de carte și birocratică, ce avea nevoie să își definească hotarele, nu fanatismul de la sine.',
        },
        {
          school: 'Critică',
          argument:
            'Teza adună fenomene foarte diferite sub o singură etichetă și micșorează vrăjmășia socială dinainte și conflictele locale anume care au grăbit fiecare episod.',
        },
      ],
      state:
        'Cadrul lui Moore s-a impus ca punct de plecare, cu nuanțe: astăzi se studiază legătura dintre inițiativa de instituție și încordările locale, în loc să fie pusă prigoana doar pe seama uneia dintre cele două.',
    },
  ],
  sources: [
    { author: 'Grigore al VII-lea', title: 'Dictatus papae', year: '1075', kind: 'primaria', note: 'Douăzeci și șapte de propoziții despre puterea papală, inclusiv cea de a-i detrona pe împărați.' },
    { author: 'Administrația lui Wilhelm I', title: 'Domesday Book', year: '1086', kind: 'primaria', note: 'Recensământ fiscal al Angliei. Temelie de numere pentru economia rurală și pentru mori.' },
    { author: 'Petru Abelard', title: 'Sic et non', year: 'c. 1120', kind: 'primaria', note: 'O sută cincizeci și opt de întrebări cu autorități care se contrazic. Fixează metoda disputei scolastice.' },
    { author: 'Gratian', title: 'Concordia discordantium canonum (Decretul)', year: 'c. 1140', kind: 'primaria', note: 'Aplică metoda scolastică dreptului Bisericii. Temelia dreptului canonic clasic.' },
    { author: 'Frederic I', title: 'Authentica Habita', year: '1155', kind: 'primaria', note: 'Îi ocrotește pe studenții aflați pe drum și îi scoate de sub tribunalul local.' },
    { author: 'Ludovic al VII-lea', title: 'Carta de franchiză a orașului Lorris', year: 'c. 1155', kind: 'primaria', note: 'Model de fuero orășenesc, copiat de sute de localități franceze.' },
    { author: 'Al IV-lea Conciliu de la Lateran', title: 'Canoane', year: '1215', kind: 'primaria', note: 'Spovedanie anuală, transsubstanțiere și semne deosebitoare pentru evrei și musulmani.' },
    { author: 'Grigore al IX-lea', title: 'Parens scientiarum', year: '1231', kind: 'primaria', note: 'Îi recunoaște Universității din Paris statute proprii, după doi ani de grevă.' },
    { author: 'Étienne Tempier', title: 'Osândirea a 219 propoziții', year: '1277', kind: 'primaria', note: 'Arată conflictul dinăuntrul universității despre hotarele dintre rațiune și credință.' },
    { author: 'Documentele din Gueniza cairoteană', title: 'Corespondență și contracte negustorești', year: 's. XI–XIII', kind: 'primaria', note: 'Arhivă întâmplătoare a unei comunități evreiești. Sursă centrală despre comerțul mediteranean islamic.' },
    { author: 'Francesco Balducci Pegolotti', title: 'La pratica della mercatura', year: 'c. 1340', kind: 'primaria', note: 'Manual al unui factor al familiei Bardi: greutăți, monede, tarife și drumuri până în China.' },
    { author: 'Henri Pirenne', title: 'Orașele Evului Mediu', year: '1927', kind: 'estudio', note: 'Așază obârșia orășenească în comerțul pe distanțe lungi. Șir răsturnat astăzi, privire păstrată.' },
    { author: 'Lynn White Jr.', title: 'Medieval Technology and Social Change', year: '1962', kind: 'estudio', note: 'Pune prefacerea socială pe seama tehnicii. Criticat pentru cronologie și pentru determinism.' },
    { author: 'Jacques Le Goff', title: 'Intelectualii în Evul Mediu', year: '1957', kind: 'estudio', note: 'Maestrul universitar ca muncitor orășenesc și om de meserie al gândirii.' },
    { author: 'S. D. Goitein', title: 'A Mediterranean Society', year: '1967-1993', kind: 'estudio', note: 'Reconstituirea lumii negustorești islamice și evreiești, pornind de la Gueniza.' },
    { author: 'Robert S. Lopez', title: 'The Commercial Revolution of the Middle Ages', year: '1971', kind: 'estudio', note: 'Formulează ideea de revoluție comercială între secolele al X-lea și al XIII-lea.' },
    { author: 'Georges Duby', title: 'Războinici și țărani', year: '1973', kind: 'estudio', note: 'Avântul agrar ca temelie materială a întregului proces.' },
    { author: 'Harold J. Berman', title: 'Law and Revolution', year: '1983', kind: 'estudio', note: 'Cearta investiturilor ca obârșie a tradiției juridice occidentale.' },
    { author: 'R. I. Moore', title: 'The Formation of a Persecuting Society', year: '1987', kind: 'estudio', note: 'Prigoana sistematică drept rod al unei puteri știutoare de carte și birocratice.' },
  ],
  documents: [
    {
      section: 3,
      title: 'Împăratul îi ocrotește pe studenți',
      text: [
        'Le îngăduim tuturor celor care călătoresc din pricina studiilor, și mai ales profesorilor legilor divine și sacre, ca ei și trimișii lor să poată merge și locui în siguranță în locurile unde se fac studiile de litere.',
        'Ne mișcă mila față de cei care, din dragoste pentru știință, se fac surghiuniți, sărăcesc și își pun viața în primejdie, și sunt adesea nedreptățiți în averile lor de oameni de rând.',
      ].join('\n\n'),
      source: 'Authentica Habita, privilegiu al lui Frederic I Barbarossa, 1155.',
      note: 'Versiune proprie după latină. Este unul dintre cele dintâi texte care recunosc un statut juridic propriu universitarilor.',
      question: 'Împăratul nu întemeiază universitatea: recunoaște un privilegiu celor care deja studiază. Ce câștigă el cu asta? Uită-te la ce disciplină pomenește întâi.',
    },
  ],
  images: [
    {
      alt: 'Miniatură a unei clase universitare medievale: un maestru citește de la o catedră ridicată, în fața unor elevi așezați pe bănci',
      caption: 'Curs la Universitatea din Bologna, miniatură de Laurentius de Voltolina, secolul al XIV-lea.',
    },
    {
      alt: 'Poartă orășenească din cărămidă, cu două turnuri cilindrice gemene și un fronton în trepte între ele',
      caption: 'Holstentor din Lübeck, capul Hansei. Poarta este plătită de oraș, nu de un senior: statutul juridic este ce definește orașul medieval.',
    },
    {
      alt: 'Miniatură medievală a unei caravane de călăreți și cămile înaintând printr-un peisaj schematic',
      caption: 'Caravana lui Marco Polo, într-un manuscris al Cărții minunilor, pe la 1400. Drumul pe uscat spre Asia a fost deschis cât a ținut pacea mongolă.',
    },
    {
      alt: 'Fațadă de catedrală gotică cu două turnuri neegale, un mare vitraliu rotund în centru și trei porți cu statui-coloană',
      caption: 'Fațada apuseană a catedralei din Chartres. Catedrala gotică este o lucrare a mai multor generații, finanțată de capitlu, de oraș și de pelerinaje.',
    },
  ],
  questions: [
    {
      question: 'Ce avantaj adaugă rotația trienală față de cea bienală, pe lângă semănarea unei suprafețe mai mari?',
      options: [
        'Înlătură cu totul nevoia de pârloagă',
        'Semănătura de primăvară aduce leguminoase, care fixează azotul și îmbunătățesc hrana',
        'Îngăduie renunțarea la plugul greu',
        'Dublează randamentul pe sămânță într-un singur an',
      ],
      explanation: 'O schimbare a calendarului agricol este și o schimbare de hrană: leguminoasa dă proteină și întoarce rodnicie solului.',
    },
    {
      question: 'Ce i s-a obiectat tezei lui Lynn White Jr. despre tehnica medievală?',
      options: [
        'Că noutățile pe care le descrie nu au existat niciodată',
        'Că cronologia lui grăbește sau strânge răspândirea reală și că determinismul tehnic nu explică de ce a fost primită tehnica tocmai atunci',
        'Că a trecut cu totul cu vederea energia hidraulică',
        'Că a încurcat plugul greu cu cel roman',
      ],
      explanation: 'Tehnica era la îndemână înainte de a se generaliza. Explicația arată spre cerere, spre stabilitatea de după incursiuni și spre seniori interesați de surplus de vândut.',
    },
    {
      question: 'Cum trebuie privit așa-numitul „optim climatic medieval”?',
      options: [
        'Ca pricina principală a creșterii europene',
        'Ca un mit fără niciun temei în date',
        'Ca un factor prielnic, dar potolit: reconstituirile arată abateri regionale, nu o încălzire globală în același timp',
        'Ca un fenomen mărginit la Mediterana răsăriteană',
      ],
      explanation: 'Este un factor prielnic, nu o explicație. Motorul creșterii a fost desțelenirea și îmbunătățirea tehnică, ținute trei secole.',
    },
    {
      question: 'În Evul Mediu, ce definește un oraș?',
      options: [
        'Numărul lui de locuitori',
        'Statutul lui juridic: o cartă care dă tribunal propriu, piață, gardă și cens fix în bani',
        'Prezența unei catedrale',
        'A fi înconjurat de ziduri de piatră',
      ],
      explanation: 'Cele mai multe localități cu statut orășenesc aveau între două mii și zece mii de locuitori. Ce era hotărâtor era dreptul, nu mărimea.',
    },
    {
      question: 'Ce era o comună orășenească?',
      options: [
        'Un impozit pe comerțul local',
        'O adunare chemată de episcop ca să administreze milostenia',
        'Ansamblul de pământuri obștești ale unui târg',
        'O asociere jurată a locuitorilor, care negocia sau smulgea de la seniorul lor guvernarea orașului',
      ],
      explanation: 'Apare în nordul Italiei, la sfârșitul secolului al XI-lea. A dus la republici orășenești cu consuli și apoi cu *podestà* străini de oraș.',
    },
    {
      question: 'De ce tocmeau orașele italiene un *podestà* străin de oraș?',
      options: [
        'Fiindcă legea imperială îl impunea',
        'Tocmai ca să nu aibă clientelă sau familie în orașul pe care îl cârmuia',
        'Fiindcă nu erau juriști pregătiți în Italia',
        'Ca să nu îi fie plătit un salariu',
      ],
      explanation: 'Era un dregător tocmit pe un an. Nepărtinirea era căutată prin rânduiala instituției, nu prin încredere personală.',
    },
    {
      question: 'Ce rol aveau târgurile din Champagne?',
      options: [
        'Erau piețe exclusiv agricole, de întindere ținutală',
        'Slujeau drept port fluvial pentru Hansa',
        'Funcționau ca o casă de compensare între Flandra și Italia: acolo se stingeau datorii și se schimbau monede, pe lângă vânzarea de mărfuri',
        'Erau adunări judecătorești ale conților de Champagne',
      ],
      explanation: 'Un ciclu de șase târguri anuale, înșiruite în patru localități, sub ocrotirea conților, aproape două secole.',
    },
    {
      question: 'Ce trăsături ale întreprinderii moderne prevestește *commenda*?',
      options: [
        'Cotarea la bursă și împărțirea dividendelor',
        'Despărțirea dintre capital și conducere și mărginirea pierderii la capitalul pus',
        'Răspunderea nemărginită a tuturor asociaților',
        'Tocmirea unei munci plătite statornice',
      ],
      explanation: 'Este strămoșul direct al societății în comandită. Împărțirea obișnuită dădea trei sferturi din câștig capitalului.',
    },
    {
      question: 'Cum s-a conviețuit cu interzicerea canonică a cametei?',
      options: [
        'Creditul a fost desființat în toată creștinătatea',
        'A fost trecută cu vederea, pe față, fără urmări',
        'A fost ocolită prin tehnică juridică: dobânda se ascundea în diferența de schimb, în împărțirea riscului sau în penalizări înțelese dinainte',
        'A fost îngăduită pe față la al IV-lea Conciliu de la Lateran',
      ],
      explanation: 'Teologii au rafinat excepții precum *damnum emergens* și *lucrum cessans*, iar practica negustorească a înaintat prin acea gaură.',
    },
    {
      question: 'Ce obiecție aduc Goitein și Udovitch ideii de „revoluție comercială” europeană?',
      options: [
        'Că, la comerțul european, nu a ajuns niciodată un volum însemnat',
        'Că documentele din Gueniza arată unelte la fel, folosite mai devreme în lumea islamică: *suftaja* și *qirad*',
        'Că partida dublă a fost inventată în China',
        'Că târgurile din Champagne sunt o născocire istoriografică',
      ],
      explanation: 'Se primește mărimea schimbării europene și se respinge născocirea de la zero: Europa a rânduit și a dus la scară ce a primit.',
    },
    {
      question: 'Ce însemna la început *universitas*?',
      options: [
        'Ansamblul tuturor științelor',
        'Clădirea unde se țineau lecțiile',
        'Corporație: un grup asociat, cu personalitate juridică, statute și jurisdicție proprii',
        'Îngăduința dată de papă pentru întemeierea unei școli',
      ],
      explanation: 'Universitatea medievală este literalmente o breaslă a învățământului, iar această obârșie corporativă explică privilegiile și autoguvernarea ei.',
    },
    {
      question: 'În ce se deosebeau modelele de la Bologna și de la Paris?',
      options: [
        'La Bologna, corporația era a studenților, care îi tocmeau și îi amendau pe profesori; la Paris, a maeștrilor',
        'Bologna preda în limba de rând, iar Parisul în latină',
        'Parisul primea femei, iar Bologna nu',
        'Bologna atârna de papă, iar Parisul de împărat',
      ],
      explanation: 'Din aceste două modele vin cele două familii europene de cârmuire universitară. Data de 1088 pentru Bologna a fost fixată în 1888.',
    },
    {
      question: 'Cum și-a câștigat Universitatea din Paris statutele proprii, în 1231?',
      options: [
        'Printr-o dăruire de bunăvoie a regelui Franței',
        'Cumpărându-le de la cancelarul catedralei',
        'După o grevă de doi ani, în care maeștrii au oprit lecțiile și au părăsit orașul',
        'Printr-o hotărâre a celui de-al IV-lea Conciliu de la Lateran',
      ],
      explanation: 'Grigore al IX-lea a cedat prin *Parens scientiarum*. Dreptul de autoguvernare academică s-a născut dintr-un conflict de muncă.',
    },
    {
      question: 'Ce arată metoda *Sic et non* a lui Abelard?',
      options: [
        'Că teologia trebuia întemeiată doar pe Biblie',
        'Că a gândi însemna a rândui neînțelegerea: așază întrebări cu autorități ce se contrazic și lasă cititorului rezolvarea',
        'Că autoritățile vechi trebuiau respinse',
        'Că logica era potrivnică credinței',
      ],
      explanation: 'De acolo vin *quaestio* și *disputatio*, exercițiu public de argumente puse față în față, în fața unui maestru care hotărăște.',
    },
    {
      question: 'Potrivit lui Harold Berman, ce urmare juridică a avut cearta investiturilor?',
      options: [
        'Dispariția dreptului roman din Europa',
        'Supunerea deplină a papalității față de împărat',
        'Unificarea tribunalelor lumești și bisericești',
        'Două jurisdicții care se recunosc reciproc au silit la despărțirea competențelor, iar de acolo au ieșit dreptul canonic ca sistem și ideea unei puteri supuse unui drept pe care nu îl face ea însăși',
      ],
      explanation: 'Berman a numit-o „revoluție papală” și o așază la obârșia tradiției juridice occidentale.',
    },
    {
      question: 'Care este miezul tezei lui R. I. Moore despre societatea prigonitoare?',
      options: [
        'Că prigoana a fost opera unei puteri știutoare de carte și birocratice, care avea nevoie să își definească hotarele, nu doar a fanatismului popular de la sine',
        'Că nu au existat prigoane însemnate înainte de 1300',
        'Că Inchiziția a fost o instituție exclusiv spaniolă',
        'Că minoritățile prigonite nu existau cu adevărat ca grupuri',
      ],
      explanation: 'Între 1000 și 1250 s-au creat categorii statornice de oameni excluși și instituții statornice ca să îi găsească. Critica nuanțează greutatea vrăjmășiei sociale dinainte.',
    },
  ],
}
