import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/descubrimientos.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 15 date, 14 concepte, 3 dezbateri, 16 surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const descubrimientosRo: TopicTranslation = {
  title: 'Expansiunea atlantică și cucerirea Americii',
  description: 'Navigație, cucerire, prăbușire demografică și cea dintâi economie la scară planetară.',
  years: '1415–1600',
  summary:
    'Aceasta este, probabil, tema cu cele mai multe legende pe metru pătrat din tot cuprinsul: că Columb ar fi dovedit că Pământul e rotund, că un pumn de spanioli au învins două imperii datorită cailor și a prafului de pușcă, că cucerirea a fost un eveniment, nu un proces de secole. Niciuna dintre cele trei afirmații nu rezistă la cercetare. Ce s-a întâmplat cu adevărat este mai însemnat decât legenda: în mai puțin de un secol, toate continentele locuite au fost legate pentru prima dată în chip statornic, a murit între optzeci și nouăzeci la sută din populația americană, a fost pornită deportarea silnică a douăsprezece milioane și jumătate de africani, iar argintul unui munte andin a ajuns să finanțeze comerțul Chinei.',
  keyDates: [
    { date: '1415', event: 'Portugalia ia Ceuta: începe expansiunea atlantică iberică.' },
    { date: '1444–1460', event: 'Colonizarea Madeirei și a Azorelor; primele plantații de zahăr, cu muncă sclavagistă.' },
    { date: '1488', event: 'Bartolomeu Dias ocolește capul Bunei Speranțe.' },
    { date: '1492', event: 'Prima călătorie a lui Columb; cucerirea Granadei și izgonirea evreilor.' },
    { date: '1494', event: 'Tratatul de la Tordesillas: împărțirea Atlanticului la 370 de leghe vest de Capul Verde.' },
    { date: '1498', event: 'Vasco da Gama ajunge la Calicut, pe drumul Capului.' },
    { date: '1507', event: 'Harta lui Waldseemüller botează „America” noul continent.' },
    { date: '1511', event: 'Predica lui Montesinos în Insula Española, împotriva tratamentului aplicat băștinașilor.' },
    { date: '1519–1521', event: 'Căderea Tenochtitlanului; variola ajunge în oraș în 1520.' },
    { date: '1519–1522', event: 'Prima ocolire a lumii: Magellan și Elcano.' },
    { date: '1532', event: 'Prinderea lui Atahualpa la Cajamarca, la sfârșitul războiului civil incaș.' },
    { date: '1545', event: 'Descoperirea muntelui Potosí.' },
    { date: '1550–1551', event: 'Controversa de la Valladolid, dintre Sepúlveda și Las Casas.' },
    { date: '1565–1815', event: 'Galionul din Manila: argintul american intră direct pe piața chineză.' },
    { date: '1697', event: 'Căderea orașului Nojpetén, ultimul stat maya de sine stătător.' },
  ],
  sections: [
    {
      title: 'De ce Portugalia și de ce atunci',
      body: [
        'Explicația de manual — turcii ar fi tăiat drumul mirodeniilor, așa că a trebuit căutat altul — nu ține. Mirodeniile au continuat să ajungă la Veneția, prin Alexandria, în tot secolul al XV-lea și al XVI-lea; comerțul cu Levantul era rentabil și mergea bine. Motivele expansiunii portugheze au fost altele și sunt mai anume.',
        'Primul este continuarea războiului împotriva islamului în nordul Africii: luarea Ceutei în 1415 este o operațiune din acea logică, nu una de explorare. Al doilea este aurul: portughezii voiau să ajungă pe mare la minele din Sudanul apusean, ocolind caravanele transsahariene și mijlocitorii magrebieni. Al treilea, și cel mai grăitor, este zahărul. Madeira, Azorele și apoi Capul Verde și São Tomé au fost laboratoarele unde s-a încercat, cu decenii înainte de America, modelul care avea să hotărască soarta Atlanticului: insulă golită de oameni sau nelocuită, monocultură de export, muncă africană sclavagistă și capital genovez și flamand.',
        'Tehnica a ținut pasul. Caravela îmbina pânza latină cu cea pătrată, ceea ce îngăduia navigarea aproape de direcția vântului; cârma la etamboul din spate a dat o conducere de încredere; busola, astrolabul de navigație și cuadrantul au îngăduit socotirea latitudinii; iar hărțile portulane au strâns cunoștințe verificate. Dar descoperirea hotărâtoare nu a fost o unealtă, ci un tipar: *volta do mar*, adică înțelegerea că, la întoarcerea din sudul Africii, trebuie să te depărtezi de coastă spre nord-vest, să intri în vânturile de vest și să descrii un mare arc pe ocean deschis. Navigația a încetat să mai fie doar mers pe lângă țărm.',
        'Dias a ocolit capul Bunei Speranțe în 1488, iar Vasco da Gama a ajuns la Calicut în 1498. Modelul portughez în Asia nu a fost de cucerire teritorială, ci de rețea: cetăți-factorii pe punctele de trecere — Goa, Ormuz, Malacca — și un sistem de îngăduințe, *cartaz*, care silea corăbiile locale să plătească pentru dreptul de a naviga pe niște ape pe care Portugalia și le atribuia. Era un imperiu de vamă, sprijinit de artileria navală și cu foarte puțină populație în spate.',
      ].join('\n\n'),
      callout:
        'Zahărul din Madeira și din São Tomé, cu sclavi africani și capital genovez, a funcționat ca prototip al plantației americane. Modelul era încercat înainte ca Columb să pornească pe mare.',
    },
    {
      title: '1492: greșeala care a ieșit bine',
      body: [
        'Se cuvine lămurit mitul cel mai mare. Nimeni cu pregătire nu discuta, în 1492, dacă Pământul e rotund: se știa din Antichitate, Eratostene îi măsurase circumferința, iar tratatele universitare o socoteau de la sine înțeleasă. Povestea lui Columb vizionarul, împotriva înțelepților care se temeau să nu cadă peste marginea lumii, vine dintr-o biografie romanțată a lui Washington Irving, publicată în 1828, și din propaganda secolului al XIX-lea despre conflictul dintre știință și religie.',
        'Ce a obiectat comisia de la Salamanca a fost tocmai contrariul: că socotelile lui Columb erau greșite. Și chiar erau. Columb a luat o estimare a gradului pământesc dată în mile arabe și a tratat-o ca și cum ar fi fost mile italiene, mai scurte, și a mai primit și exagerarea lui Marinus din Tyr despre întinderea Asiei spre răsărit. Rezultatul a fost așezarea Japoniei la vreo trei mii șapte sute de kilometri vest de Canare, când distanța reală este de aproape douăzeci de mii. Cei pricepuți care i-au refuzat sprijinul aveau dreptate; dacă la mijloc nu ar fi fost un continent, expediția ar fi murit de sete.',
        'Capitulațiile de la Santa Fe i-au dat titluri și o parte din câștiguri fără măsură pentru ceea ce era, în fapt, o întreprindere cu risc și cu finanțare mixtă. Columb a făcut patru călătorii și a murit în 1506 susținând că ajunsese în Asia. Poveștile puse pe seama lui Amerigo Vespucci au fost cele care au răspândit ideea unui continent necunoscut, iar cartograful Waldseemüller a fost cel care, în 1507, a tipărit pe el numele „America”.',
        'Împărțirea s-a făcut între două coroane și cu arbitraj papal. Tratatul de la Tordesillas (1494) a tras o linie la 370 de leghe vest de Capul Verde: la est, Portugalia; la vest, Castilia. Urmarea cel mai bine cunoscută este Brazilia, rămasă de partea portugheză. Cel de la Zaragoza (1529) a încercat același lucru în Pacific, cu o nesiguranță de neocolit, fiindcă nu exista o metodă de măsurare a longitudinii. Prima ocolire a lumii, începută de Magellan și încheiată de Elcano în 1522, a dovedit unitatea oceanelor și prețul de a o dovedi: din două sute patruzeci de oameni s-au întors optsprezece.',
      ].join('\n\n'),
    },
    {
      title: 'Cucerirea: de ce au căzut Tenochtitlan și Cuzco',
      body: [
        'Imaginea câtorva sute de spanioli care au biruit imperii de milioane de oameni datorită superiorității tehnologice este, potrivit lui Matthew Restall, cea mai puternică dintre legendele cuceririi. Factorii reali au fost alții și au lucrat împreună.',
        'Cel dintâi sunt aliații băștinași. Cortés nu a învins cu cinci sute de oameni: a învins cu zeci de mii de războinici tlaxcaltechi, totonachi și din alte popoare supuse stăpânirii mexica, pentru care căderea Tenochtitlanului era un prilej de a scăpa de un tribut zdrobitor. În Peru s-a petrecut ceva asemănător cu cañarii și huancasii. Din privirea de aproape nu a fost o năvălire străină împotriva unui imperiu, ci un război dinăuntru, în care un actor nou s-a aliat cu cei nemulțumiți.',
        'Al doilea este boala. Variola a ajuns la Tenochtitlan în 1520, între primul asalt eșuat și asediul de pe urmă, și a ucis o parte uriașă a populației și a conducerii, inclusiv pe tlatoani Cuitláhuac. În Anzi, șirul faptelor a fost și mai hotărâtor: o epidemie a ajuns înaintea spaniolilor înșiși, a pricinuit probabil moartea lui Huayna Cápac și a dezlănțuit războiul civil dintre Huáscar și Atahualpa, care tocmai se sfârșise când Pizarro a ajuns la Cajamarca, în 1532. A fost cucerit un stat ieșit dintr-un război de succesiune.',
        'Al treilea este șubrezenia de structură a imperiilor cu tribut. Mexica și incașii cârmuiau popoare alipite prin forță, de curând, fără cetățenie comună și fără o integrare administrativă adâncă. Prinderea vârfului — Moctezuma, Atahualpa — dezarticula sistemul cu o iuțeală pe care un stat mai unit nu ar fi îngăduit-o.',
        'Tehnica a ajutat, dar nu a hotărât. Oțelul, calul și armele de foc au dat un avantaj tactic pe câmp deschis și o valoare psihologică la început, dar archebuzele acelei vremi erau înceate și nesigure, praful de pușcă lipsea des, iar armurile căptușite băștinașe s-au dovedit adesea mai practice decât cele de metal, în clime tropicale. Pe terenuri unde cavaleria nu folosea, avantajul dispărea.',
        'Și, mai presus de toate, cucerirea nu a fost un eveniment, ci un proces de secole, neîncheiat în întinse zone. Mayașii din Petén și-au păstrat un stat de sine stătător până în 1697; mapuche nu au fost niciodată supuși la sud de Biobío, iar coroana a sfârșit prin a semna tratate cu ei; chichimecii din nordul Mexicului au dus patruzeci de ani de război; iar regiuni întregi din Amazonia și din Chaco au rămas în afara oricărui control colonial adevărat. A socoti 1521 și 1533 drept sfârșit este un artificiu de manual.',
      ].join('\n\n'),
      callout:
        'Variola a ajuns la Tenochtitlan în 1520, între asaltul eșuat și asediul de pe urmă. În Anzi, epidemia a ajuns înaintea spaniolilor înșiși și a pricinuit războiul civil pe care Pizarro l-a găsit de curând încheiat.',
    },
    {
      title: 'Prăbușirea demografică',
      body: [
        'Câți oameni trăiau în America în 1492 este una dintre întrebările cele mai disputate ale demografiei istorice. Estimările au variat între cele opt milioane ale lui Kroeber și peste o sută ale lui Dobyns, după cum se reconstituie din recensăminte coloniale, din capacitatea agricolă sau din ratele de mortalitate din epidemii. Fâșia pe care o folosesc astăzi cei mai mulți dintre cercetători stă între patruzeci și șaizeci de milioane pentru tot continentul, cu margini foarte largi și multă schimbare de la o regiune la alta.',
        'Despre mărimea scăderii este mai mult acord: între optzeci și nouăzeci și cinci la sută în răstimp de un secol și jumătate, cu cazuri documentate de dispariție deplină în Antile. Este cea mai mare catastrofă demografică cunoscută.',
        'Cauza principală au fost bolile Lumii Vechi, în populații fără imunitate dinainte: variola, pojarul, tifosul, gripa, iar mai târziu febra galbenă și malaria în ținuturile joase. Dar a explica prăbușirea doar prin microbi are o hibă, pe care Massimo Livi Bacci și alții au arătat-o cu stăruință: preface o catastrofă istorică într-un accident biologic fără vinovați. Datele arată că mortalitatea a fost mai mare acolo unde rânduiala muncii era mai grea — mine, plantații, mutări silnice de populație —, unde războiul a distrus recoltele și unde comunitățile au fost adunate cu forța. Boala și exploatarea nu sunt cauze alternative: a doua a înmulțit uciderea pricinuită de prima.',
        'Scara a fost atât de mare încât a lăsat urmă în mediu. Un studiu din 2019 a propus legarea părăsirii în masă a pământurilor lucrate și a împăduririi lor de scăderea dioxidului de carbon din atmosferă, înregistrată în carotele de gheață pe la 1610, și chiar de răcirea micii epoci glaciare. Ipoteza se discută, iar mărimea efectului este obiect de dezbatere, dar dă măsura a ceea ce a însemnat golirea a două continente.',
        'Urmarea numaidecât ivită a fost o cerere de mână de lucru pe care chiar catastrofa o crease. De aici, și nu dintr-o teorie rasială dinainte, a ieșit amploarea comerțului atlantic cu sclavi: în jur de douăsprezece milioane și jumătate de africani îmbarcați și vreo zece milioane și jumătate debarcați vii, între secolul al XVI-lea și al XIX-lea, potrivit bazei de date de referință de azi. Aproape cinci milioane au ajuns în Brazilia, ceva mai mult de un milion și jumătate în America spaniolă și vreo patru sute de mii în America de Nord.',
      ].join('\n\n'),
    },
    {
      title: 'A cârmui, a scoate, a discuta',
      body: [
        'Coroana castiliană a clădit în America o administrație uriașă: două vicerealme la început, audiențe, primării, Casa de Contratación la Sevilla și Consiliul Indiilor. Munca băștinașă a fost rânduită prin encomiendă — loturi de băștinași date unui colonist în schimbul evanghelizării lor, cu drept la tribut și la muncă —, înlocuită treptat cu repartimiento și, în Peru, cu mita, reorganizată de viceregele Toledo în 1573, care silea comunitățile să trimită prin rotație o parte dintre bărbații lor la mine.',
        'Motorul economic a fost argintul. Potosí a fost descoperit în 1545, iar Zacatecas anul următor; procesul de amalgamare cu mercur, hrănit de mina de la Huancavelica, a înmulțit randamentul din anii șaizeci încolo. Potosí a ajuns unul dintre cele mai mari orașe ale lumii, cu peste o sută de mii de locuitori la începutul secolului al XVII-lea, pe un podiș la peste patru mii de metri.',
        'Acel argint nu a rămas în Europa. O parte însemnată a ajuns în China, care își monetizase fiscalitatea în argint și plătea pentru el mult mai mult decât piața europeană; galionul din Manila, în slujbă între 1565 și 1815, îl ducea direct din Acapulco. Este primul circuit comercial cu adevărat planetar și a funcționat printr-un arbitraj de prețuri între două capete ale lumii.',
        'În Europa, sosirea masivă de metal s-a potrivit cu o inflație îndelungată. Earl Hamilton a susținut în 1934 că argintul american explica revoluția prețurilor din secolul al XVI-lea. Critica de mai apoi a micșorat greutatea acelui factor: creșterea demografică, presiunea asupra producției de hrană și devalorizările monedei explică o bună parte din fenomen, iar cronologia nu se potrivește pe deplin. Legătura rămâne, nuanțată și cu alți factori în joc.',
        'Ce e neobișnuit la cazul spaniol este că toate acestea s-au discutat pe față și în scris. În 1511, Antonio de Montesinos a întrebat de la amvonul din Insula Española cu ce drept erau supuși băștinașii; rezultatul au fost Legile de la Burgos, din 1512, și, mai apoi, Requerimiento din 1513, un text citit în castiliană unor populații care nu îl înțelegeau, ca să dea acoperire juridică atacului. Francisco de Vitoria a tăgăduit în 1539 valabilitatea dăruirii papale și a dreptului de cucerire și a formulat în locul lor un drept al ginților comun tuturor popoarelor, socotit astăzi un început al dreptului internațional. Legile Noi din 1542 au încercat să desființeze encomienda și au stârnit o răscoală a encomenderilor în Peru. Iar în 1550-1551, la Valladolid, Sepúlveda a apărat robia firească a băștinașilor, împotriva lui Las Casas.',
        'Această discuție a fost folosită în amândouă direcțiile. Legenda neagră clădită de puterile rivale a înfățișat colonizarea spaniolă drept deosebit de crudă, trecând cu vederea că celelalte au fost la fel sau mai rele; răspunsul apologetic îi folosește pe Vitoria și pe Las Casas ca să susțină că a existat un imperiu cu scrupule juridice. Amândouă dau greș din același motiv: discuția a existat și atrocitățile la fel, iar legile ocrotitoare au fost călcate în chip sistematic acolo unde stăteau în calea scoaterii de bogății.',
      ].join('\n\n'),
      callout:
        'Requerimiento se citea în castiliană, uneori de pe o corabie, unor populații care nu îl puteau înțelege. Rostul lui nu era să înștiințeze: era să producă documentul care legitima atacul de îndată următor.',
    },
    {
      title: 'Schimbul columbian și prima globalizare',
      body: [
        'Alfred Crosby a propus în 1972 conceptul care rânduiește bilanțul: schimbul columbian. Legarea a două lumi vii despărțite din sfârșitul Pleistocenului a mutat specii în amândouă direcțiile și a schimbat agricultura și hrana planetei.',
        'Spre răsărit au călătorit porumbul, cartoful, manioca, roșia, cacao, tutunul, ardeiul iute, arahidele și chinina. Efectul lor demografic a fost uriaș și a venit târziu: cartoful a susținut creșterea nordului Europei în secolul al XVIII-lea, porumbul și cartoful dulce au îngăduit lucrarea unor coaste altfel neroditoare în China, iar manioca a făcut același lucru în Africa centrală. Spre apus au mers grâul, orezul, trestia de zahăr, cafeaua, citricele, vitele, oile, porcul și calul, pe lângă agenții bolilor. Calul a reașezat cu totul societățile câmpiilor nord-americane și ale pampei; vitele lăsate slobode au schimbat peisaje întregi.',
        'Urmarea de sistem este că din secolul al XVI-lea încoace există, pentru prima dată, o piață care leagă statornic America, Europa, Africa și Asia. Dennis Flynn și Arturo Giráldez au propus fixarea nașterii globalizării în 1571, odată cu întemeierea Manilei și închiderea ultimei bucăți a circuitului. Kevin O Rourke și Jeffrey Williamson au obiectat că globalizarea înseamnă apropierea prețurilor între piețe și că asta nu se întâmplă decât în secolul al XIX-lea, odată cu transportul cu aburi: ce a fost înainte ar fi comerț de lux și de arbitraj, nu o integrare adevărată. Deosebirea ține de definiție, iar amândouă părțile au dreptate în felul lor.',
        'Ce nu îngăduie nicio discuție este bilanțul costurilor. Prima economie la scară planetară s-a clădit pe cea mai mare prăbușire demografică documentată, pe deportarea silnică a douăsprezece milioane și jumătate de oameni și pe un sistem de plantație a cărui logică — monocultură, muncă silnică, export — avea să rânduiască lumea atlantică încă trei secole.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Volta do mar', definition: 'Manevra de depărtare de coastă, ca să fie folosite vânturile de vest la întoarcere. A prefăcut navigația de coastă în navigație oceanică.' },
    { term: 'Caravelă', definition: 'Navă cu cocă ușoară și pânze latine și pătrate îmbinate, în stare să meargă aproape de direcția vântului. Unealta tehnică a expansiunii atlantice.' },
    { term: 'Feitoria', definition: 'Cetate-factorie portugheză fortificată, așezată pe un punct de trecere comercial. Model de imperiu de rețea și de vamă, nu de ocupare a teritoriului.' },
    { term: 'Cartaz', definition: 'Îngăduință de navigație pe care Portugalia silea corăbiile asiatice să o cumpere, în apele Oceanului Indian, sub amenințarea capturării.' },
    { term: 'Tordesillas', definition: 'Tratat din 1494 care împarte Atlanticul la 370 de leghe vest de Capul Verde. De aici vine apartenența portugheză a Braziliei.' },
    { term: 'Encomienda', definition: 'Dare a unor băștinași unui colonist în schimbul evanghelizării lor, cu drept la tribut și la muncă. Legile Noi din 1542 au încercat să o desființeze.' },
    { term: 'Mita', definition: 'Rând de muncă obligatorie cerut comunităților andine, reorganizat de viceregele Toledo în 1573, ca să aprovizioneze Potosí.' },
    { term: 'Requerimiento', definition: 'Text din 1513, citit în castiliană unor populații care nu îl înțelegeau, ca să dea acoperire juridică atacului.' },
    { term: 'Titluri drepte', definition: 'Dezbaterea despre ce drept îndreptățea ocuparea. Vitoria a respins dăruirea papală și cucerirea și a propus un drept al ginților comun.' },
    { term: 'Schimb columbian', definition: 'Transfer reciproc de plante, animale și agenți patogeni între continente despărțite din Pleistocen. Concept al lui Alfred Crosby.' },
    { term: 'Galionul din Manila', definition: 'Linie între Acapulco și Filipine (1565-1815), care ducea argintul american direct pe piața chineză.' },
    { term: 'Revoluția prețurilor', definition: 'Inflație îndelungată a Europei secolului al XVI-lea. Hamilton a pus-o pe seama argintului american; azi se împarte cu demografia și cu devalorizările.' },
    { term: 'Legenda neagră', definition: 'Construcție de propagandă a puterilor rivale despre o cruzime spaniolă aparte. Reversul ei apologetic dă greș din același motiv.' },
    { term: 'Complex de plantație', definition: 'Monocultură de export cu muncă silnică, încercată la Madeira și la São Tomé înainte de a se muta în Atlanticul american.' },
  ],
  debates: [
    {
      question: 'Câtă populație era în America în 1492 și ce a ucis-o?',
      positions: [
        {
          school: 'Cifre mici și explicație epidemiologică',
          argument:
            'Estimările prudente pornesc de la recensăminte coloniale și dau totaluri modeste. Prăbușirea se explică prin bolile Lumii Vechi în populații fără imunitate dinainte: un fenomen biologic cu neputință de prevenit.',
        },
        {
          school: 'Cifre mari și explicație combinată (Borah și Cook, Livi Bacci)',
          argument:
            'Reconstituirea după capacitatea agricolă și după ratele epidemice ridică mult totalul. Iar mortalitatea a fost mai mare acolo unde rânduiala muncii era mai grea: exploatarea a înmulțit uciderea pricinuită de boală.',
        },
      ],
      state:
        'Fâșia de consens de azi stă între patruzeci și șaizeci de milioane pentru tot continentul, cu margini largi. Cât despre cauze, explicația doar prin microbi este lăsată deoparte, fiindcă scoate politica din proces: boala și rânduiala colonială au lucrat împreună.',
    },
    {
      question: 'Cum se explică prăbușirea imperiilor mexica și incaș?',
      positions: [
        {
          school: 'Superioritate tehnologică (povestea tradițională)',
          argument:
            'Oțelul, caii, armele de foc și o organizare militară mai bună au îngăduit câtorva sute de oameni să biruie state de milioane de locuitori.',
        },
        {
          school: 'Aliați, epidemii și ruptură dinăuntru (Restall, 2003)',
          argument:
            'Zeci de mii de războinici băștinași au luptat de partea spaniolilor împotriva imperiilor care le impuneau tribut; variola a ajuns înaintea sau în timpul asaltului; iar incașii ieșeau dintr-un război civil. Tehnica a dat un avantaj tactic, nu unul hotărâtor.',
        },
      ],
      state:
        'Explicația cu mai mulți factori este cea stăpânitoare. Se subliniază, pe deasupra, că cucerirea nu a fost un eveniment: mayașii din Petén au rezistat până în 1697, iar mapuche nu au fost niciodată supuși.',
    },
    {
      question: 'A început globalizarea în secolul al XVI-lea?',
      positions: [
        {
          school: 'Da, în 1571 (Flynn și Giráldez)',
          argument:
            'Odată cu întemeierea Manilei se închide circuitul: argintul american ajunge direct în China, iar pentru prima dată toate continentele locuite sunt legate printr-o piață statornică.',
        },
        {
          school: 'Nu până în secolul al XIX-lea (O Rourke și Williamson)',
          argument:
            'Globalizarea înseamnă apropierea prețurilor între piețe, iar asta nu se întâmplă până la transportul cu aburi. Ce e înainte este comerț de lux și de arbitraj între piețe care rămân despărțite.',
        },
      ],
      state:
        'Neînțelegerea ține mai mult de definiție decât de fapte. Se primește că circuitul planetar există din secolul al XVI-lea și că apropierea prețurilor vine mult mai târziu.',
    },
  ],
  sources: [
    { author: 'Cristofor Columb', title: 'Jurnalul primei călătorii', year: '1492-1493', kind: 'primaria', note: 'Păstrat în rezumatul lui Las Casas. Originalul s-a pierdut.' },
    { author: 'Castilia și Portugalia', title: 'Tratatul de la Tordesillas', year: '1494', kind: 'primaria', note: 'Împarte Atlanticul cu arbitraj papal, înainte de a se ști ce se împărțea.' },
    { author: 'Juan López de Palacios Rubios', title: 'Requerimiento', year: '1513', kind: 'primaria', note: 'Formulă juridică de supunere, citită în castiliană unor populații care nu o înțelegeau.' },
    { author: 'Hernán Cortés', title: 'Scrisori de relatare', year: '1519-1526', kind: 'primaria', note: 'Autoîndreptățire adresată împăratului de cel care nu ascultase de guvernatorul lui.' },
    { author: 'Antonio Pigafetta', title: 'Relatarea primei călătorii în jurul lumii', year: 'c. 1525', kind: 'primaria', note: 'Mărturie directă a ocolirii lumii: din două sute patruzeci de oameni s-au întors optsprezece.' },
    { author: 'Francisco de Vitoria', title: 'Relectio de indis', year: '1539', kind: 'primaria', note: 'Tăgăduiește dăruirea papală și dreptul de cucerire; formulează un drept al ginților comun tuturor popoarelor.' },
    { author: 'Bartolomé de las Casas', title: 'Foarte scurtă relatare a distrugerii Indiilor', year: '1552', kind: 'primaria', note: 'Denunțare cu voința de a avea urmări politice. Cifrele lui au fost folosite mai apoi ca muniție de propagandă.' },
    { author: 'Bernardino de Sahagún', title: 'Codex Florentinus, cartea a XII-a', year: 'c. 1577', kind: 'primaria', note: 'Povestirea cuceririi în nahuatl, strânsă de la martori băștinași. Contrapunct neapărat trebuincios cronicilor spaniole.' },
    { author: 'Felipe Guaman Poma de Ayala', title: 'Nueva corónica y buen gobierno', year: '1615', kind: 'primaria', note: 'O mie două sute de pagini și patru sute de desene: critica sistemului colonial din interiorul lumii andine.' },
    { author: 'Alfred W. Crosby', title: 'The Columbian Exchange', year: '1972', kind: 'estudio', note: 'Aduce privirea biologică și ecologică în istoria expansiunii.' },
    { author: 'Earl J. Hamilton', title: 'American Treasure and the Price Revolution in Spain', year: '1934', kind: 'estudio', note: 'Pune inflația secolului al XVI-lea pe seama argintului american. Teză nuanțată de cercetarea de mai apoi.' },
    { author: 'Dennis Flynn și Arturo Giráldez', title: 'Born with a Silver Spoon', year: '1995', kind: 'estudio', note: 'Fixează în 1571 nașterea globalizării, cu Manila drept balama.' },
    { author: 'Matthew Restall', title: 'Seven Myths of the Spanish Conquest', year: '2003', kind: 'estudio', note: 'Demontează povestea pumnului de cuceritori și redă rolul aliaților băștinași.' },
    { author: 'Massimo Livi Bacci', title: 'Conquista. Distrugerea indienilor americani', year: '2005', kind: 'estudio', note: 'Critică explicarea exclusiv epidemiologică a prăbușirii demografice.' },
    { author: 'John H. Elliott', title: 'Empires of the Atlantic World', year: '2006', kind: 'estudio', note: 'Comparație sistematică a colonizării spaniole cu cea britanică.' },
    { author: 'Baza de date Slave Voyages', title: 'Trans-Atlantic Slave Trade Database', year: 'în actualizare', kind: 'estudio', note: 'Reconstituire, expediție cu expediție, a comerțului atlantic cu sclavi.' },
  ],
  documents: [
    {
      section: 4,
      title: 'Predica lui Montesinos',
      text: [
        'Eu sunt glasul lui Hristos în pustia acestei insule, și de aceea se cuvine ca, luând aminte, nu oricum, ci din toată inima și din toate simțurile voastre, să o ascultați.',
        'Spuneți, cu ce drept și cu ce dreptate îi țineți pe acești indieni într-o robie atât de crudă și de groaznică? Cu ce autoritate ați purtat războaie atât de urâte împotriva acestor oameni care trăiau în pământurile lor, blânzi și pașnici?',
        'Aceștia nu sunt oameni? Nu au suflete cu judecată? Nu sunteți datori să-i iubiți ca pe voi înșivă?',
      ].join('\n\n'),
      source: 'Fray Antón de Montesinos, predică de Advent în Insula Española, decembrie 1511. Adunată de Bartolomé de las Casas.',
      note: 'Text în spaniolă. Ne vine prin Istoria Indiilor a lui Las Casas, care era de față.',
      question: 'Denunțarea vine din interiorul chiar al sistemului colonial și la abia douăzeci de ani după 1492. Ce spune asta despre ideea că, pe atunci, nimeni nu putea gândi altfel?',
    },
  ],
  images: [
    {
      alt: 'Hartă nautică manuscrisă din 1502, cu coastele cunoscute, steaguri și linii de drum trasate pe pergament',
      caption: 'Planisferul lui Cantino (1502), scos pe ascuns din Portugalia.',
    },
    {
      alt: 'Pictură pe lemn cu luptă între ambarcațiuni și războinici, într-un oraș înconjurat de apă și de drumuri ridicate',
      caption: 'Luarea Tenochtitlanului, tablou anonim din secolul al XVII-lea. Alături de castilieni luptă mii de aliați băștinași: cucerirea a fost și un război între popoarele mesoamericane.',
    },
    {
      alt: 'Desen băștinaș cu oameni întinși, cu trupul acoperit de pete, în timp ce altcineva îi îngrijește',
      caption: 'Variola în Codex Florentinus, pe la 1577, desenată de martori nahua. Prăbușirea demografică a fost pricinuită mai ales de epidemii.',
    },
    {
      alt: 'Munte conic de pământ roșiatic, străpuns de guri de mină, cu un oraș întins la poalele lui',
      caption: 'Cerro Rico din Potosí. Argintul lui a finanțat monarhia hispanică și a ajuns până în China, dar a fost scos prin mita, muncă silnică prin rotație.',
    },
  ],
  questions: [
    {
      question: 'De ce nu ține ideea că expansiunea portugheză s-ar fi datorat tăierii turcești a drumului mirodeniilor?',
      options: [
        'Fiindcă turcii nu au stăpânit niciodată Mediterana răsăriteană',
        'Fiindcă mirodeniile au continuat să ajungă la Veneția, prin Alexandria, în tot secolul al XV-lea și al XVI-lea',
        'Fiindcă Portugalia nu făcea comerț cu mirodenii',
        'Fiindcă drumul pe uscat era mai ieftin decât cel pe mare',
      ],
      explanation: 'Motivele au fost continuarea războiului din nordul Africii, accesul direct la aurul sudanez și zahărul insulelor atlantice.',
    },
    {
      question: 'Ce rol au avut Madeira, Azorele și São Tomé în istoria atlantică?',
      options: [
        'Au fost simple opriri de aprovizionare pe drumul spre India',
        'Au slujit drept baze militare împotriva otomanilor',
        'Au funcționat ca laborator al complexului de plantație: monocultură de zahăr, mână de lucru sclavagistă africană și capital genovez și flamand',
        'Au fost colonii de așezare liberă, fără producție de export',
      ],
      explanation: 'Modelul era încercat cu decenii înainte ca Columb să pornească pe mare. Plantația americană nu a fost improvizată.',
    },
    {
      question: 'Ce era *volta do mar* și de ce a fost hotărâtoare?',
      options: [
        'Un fel de pânză triunghiulară care îngăduia navigarea aproape de direcția vântului',
        'Înțelegerea că, la întoarcere, trebuie să te depărtezi de coastă și să descrii un arc pe ocean deschis, folosind vânturile de vest',
        'Un impozit pe comerțul de întoarcere',
        'Tehnica de socotire a longitudinii cu ceasuri',
      ],
      explanation: 'Nu a fost o unealtă, ci un tipar de navigație. Cu el, navigația a încetat să mai fie doar mers pe lângă țărm.',
    },
    {
      question: 'Ce a obiectat cu adevărat comisia de la Salamanca proiectului lui Columb?',
      options: [
        'Că Pământul era plat și s-ar fi căzut peste margine',
        'Că socotelile lui de distanță erau greșite: așeza Japonia la vreo 3.700 km de Canare, când distanța reală e de vreo 20.000',
        'Că papa dăduse acele ape Portugaliei',
        'Că nu existau corăbii în stare să treacă un ocean',
      ],
      explanation: 'Rotunjimea Pământului nu se discuta din Antichitate. Mitul lui Columb vizionarul vine dintr-o biografie romanțată din 1828.',
    },
    {
      question: 'Cum a ajuns să se numească „America” noul continent?',
      options: [
        'Columb l-a botezat astfel la a treia lui călătorie',
        'Este un nume băștinaș, primit de cronicari',
        'L-a impus Tratatul de la Tordesillas',
        'Cartograful Waldseemüller l-a tipărit pe harta lui din 1507, pornind de la poveștile puse pe seama lui Vespucci',
      ],
      explanation: 'Columb a murit în 1506 susținând că ajunsese în Asia. Poveștile lui Vespucci au fost cele care au răspândit ideea unui continent necunoscut.',
    },
    {
      question: 'În ce consta modelul imperial portughez în Asia?',
      options: [
        'Cucerire teritorială și așezare în masă',
        'O rețea de cetăți-factorii fortificate pe punctele de trecere și un sistem de îngăduințe, *cartaz*, care lua vamă navigației locale',
        'Alianțe prin căsătorie cu dinastiile locale',
        'Darea de encomiende coloniștilor',
      ],
      explanation: 'Un imperiu de vamă, sprijinit de artileria navală, cu foarte puțină populație în spate.',
    },
    {
      question: 'Care a fost factorul omenesc hotărâtor în căderea Tenochtitlanului?',
      options: [
        'Superioritatea numerică a armatei spaniole',
        'Predarea de bunăvoie a lui Moctezuma',
        'Zecile de mii de războinici tlaxcaltechi și din alte popoare supuse tributului mexica, care au luptat de partea lui Cortés',
        'Blocada navală a Golfului Mexic',
      ],
      explanation: 'Din privirea de aproape nu a fost o năvălire străină împotriva unui imperiu, ci un război dinăuntru, în care un actor nou s-a aliat cu cei nemulțumiți.',
    },
    {
      question: 'Ce situație a găsit Pizarro sosind la Cajamarca, în 1532?',
      options: [
        'Un imperiu în plină înflorire și deplin unit',
        'Un imperiu ieșit dintr-un război civil între Huáscar și Atahualpa, dezlănțuit după o epidemie ce ajunsese înaintea spaniolilor',
        'Un teritoriu golit de oameni din pricina secetei',
        'O alianță incașo-mexica deja formată împotriva europenilor',
      ],
      explanation: 'Boala a ajuns înaintea cuceritorilor și a dezarticulat succesiunea. A fost cucerit un stat de curând ieșit dintr-un război dinastic.',
    },
    {
      question: 'De ce este un artificiu fixarea sfârșitului cuceririi în 1521 și 1533?',
      options: [
        'Fiindcă datele corecte sunt 1519 și 1532',
        'Fiindcă cucerirea a fost un proces de secole și neîncheiat: Petén maya a rezistat până în 1697, iar mapuche nu au fost niciodată supuși la sud de Biobío',
        'Fiindcă imperiile mexica și incaș s-au restaurat mai apoi',
        'Fiindcă coroana nu a recunoscut acele cuceriri până în secolul al XVIII-lea',
      ],
      explanation: 'Chichimecii au dus patruzeci de ani de război, iar întinse zone din Amazonia și din Chaco au rămas în afara oricărui control colonial adevărat.',
    },
    {
      question: 'Ce problemă are explicarea prăbușirii demografice americane doar prin epidemii?',
      options: [
        'Că epidemiile sunt prost documentate',
        'Că preface o catastrofă istorică într-un accident biologic fără vinovați, când mortalitatea a fost mai mare acolo unde rânduiala muncii era mai grea',
        'Că bolile europene nu erau molipsitoare în America',
        'Că populația băștinașă avea imunitate dinainte la variolă',
      ],
      explanation: 'Minele, plantațiile, mutările silnice și distrugerea recoltelor au înmulțit uciderea. Boala și exploatarea nu sunt cauze alternative.',
    },
    {
      question: 'Potrivit bazei de date de referință, care a fost mărimea comerțului atlantic cu sclavi?',
      options: [
        'Vreo două milioane de oameni îmbarcați',
        'Vreo douăsprezece milioane și jumătate îmbarcați și vreo zece milioane și jumătate debarcați vii',
        'Vreo cincizeci de milioane îmbarcați',
        'Nu există cifre de reconstituit',
      ],
      explanation: 'Aproape cinci milioane au ajuns în Brazilia, ceva mai mult de un milion și jumătate în America spaniolă și vreo patru sute de mii în America de Nord.',
    },
    {
      question: 'Ce era mita reorganizată de viceregele Toledo, în 1573?',
      options: [
        'Un impozit pe argintul scos',
        'Un rând de muncă obligatorie, care silea comunitățile andine să trimită o parte dintre bărbații lor la mine',
        'Îngăduința de a face comerț cu Filipinele',
        'Împărțirea pământurilor între encomenderi',
      ],
      explanation: 'Împreună cu amalgamarea cu mercur de la Huancavelica, a făcut din Potosí unul dintre cele mai mari orașe ale lumii, la începutul secolului al XVII-lea.',
    },
    {
      question: 'De ce a ajuns o mare parte din argintul american în China?',
      options: [
        'Fiindcă Spania plătea cu el mătasea Europei',
        'Fiindcă China își monetizase fiscalitatea în argint și plătea pentru el mult mai mult decât piața europeană',
        'Fiindcă papa a stabilit asta prin Tratatul de la Zaragoza',
        'Fiindcă Portugalia controla drumul Capului și îl abătea',
      ],
      explanation: 'Galionul din Manila îl ducea din Acapulco, între 1565 și 1815. Este primul circuit comercial planetar și a funcționat prin arbitraj de prețuri.',
    },
    {
      question: 'Ce a susținut Francisco de Vitoria în 1539?',
      options: [
        'Că dăruirea papală îndreptățea pe deplin cucerirea',
        'Că băștinașii nu aveau capacitate juridică',
        'Că nici dăruirea papală, nici dreptul de cucerire nu erau titluri valabile, și a propus un drept al ginților comun tuturor popoarelor',
        'Că evanghelizarea îndreptățea orice mijloc',
      ],
      explanation: 'Formularea lui este socotită un început al dreptului internațional. S-a discutat la Valladolid, în 1550-1551, între Sepúlveda și Las Casas.',
    },
    {
      question: 'De ce dau greș deopotrivă legenda neagră și reversul ei apologetic?',
      options: [
        'Fiindcă amândouă umflă numărul victimelor',
        'Fiindcă discuția juridică a existat și atrocitățile la fel, iar legile ocrotitoare au fost călcate acolo unde stăteau în calea scoaterii de bogății',
        'Fiindcă niciuna nu se sprijină pe surse scrise',
        'Fiindcă amândouă au fost clădite în secolul XX',
      ],
      explanation: 'Legenda neagră pune pe seama Spaniei o cruzime aparte, trecând cu vederea celelalte puteri; cea apologetică îi folosește pe Vitoria și pe Las Casas ca să acopere practica.',
    },
    {
      question: 'Care a fost efectul demografic cel mai mare al schimbului columbian asupra Lumii Vechi?',
      options: [
        'Sosirea calului, care a schimbat agricultura europeană',
        'Introducerea cafelei și a ceaiului în hrana de rând',
        'Cartoful, porumbul și manioca, care au susținut creșterea Europei, a Chinei și a Africii centrale din secolul al XVIII-lea încoace',
        'Dispariția foametei în secolul al XVI-lea',
      ],
      explanation: 'Efectul a venit târziu: la două secole după contact. Porumbul și cartoful dulce au îngăduit lucrarea unor coaste altfel neroditoare în China.',
    },
  ],
}
