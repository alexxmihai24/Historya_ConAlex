import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/feudalismo.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 11 date, 11 concepte, 3 dezbateri, 11 surse, un
   document comentat, 4 imagini și 15 întrebări cu opțiunile pe aceleași poziții. */
export const feudalismoRo: TopicTranslation = {
  title: 'Europa feudală',
  description: 'Vasalitate, senioralitate, țărănime și discuția dacă feudalismul a existat.',
  years: 'c. 800–1200',
  summary:
    'Între secolele al IX-lea și al XII-lea, Europa apuseană a funcționat fără state în stare să asigure justiție, apărare și fiscalitate în chip centralizat. Ce a umplut acel gol a fost o țesătură de legături personale de dependență și de puteri locale asupra pământului și asupra oamenilor. A numi această țesătură „feudalism” este comod, dar chiar cuvântul a fost obiectul uneia dintre cele mai aspre certuri ale istoriografiei secolului XX.',
  keyDates: [
    { date: '800', event: 'Încoronarea imperială a lui Carol cel Mare, la Roma.' },
    { date: '843', event: 'Tratatul de la Verdun: împărțirea Imperiului carolingian.' },
    { date: 'c. 850–950', event: 'Incursiuni vikinge, maghiare și sarazine; fărâmițarea puterii.' },
    { date: '910', event: 'Întemeierea Cluny-ului; reformă monahală și scutire de puterile lumești.' },
    { date: 'c. 989–1030', event: 'Conciliile Păcii și Armistițiului lui Dumnezeu.' },
    { date: '1066', event: 'Cucerirea normandă a Angliei.' },
    { date: '1075–1122', event: 'Cearta Investiturilor; Concordatul de la Worms.' },
    { date: '1086', event: 'Domesday Book: recensământ senioriale al Angliei.' },
    { date: '1095', event: 'Urban al II-lea predică Prima Cruciadă, la Clermont.' },
    { date: 'c. 1100–1200', event: 'Desțeleniri, creștere demografică și renaștere orășenească.' },
    { date: '1215', event: 'Magna Carta: hotare contractuale puse puterii regale engleze.' },
  ],
  sections: [
    {
      title: 'Golul de stat și privatizarea puterii',
      body: [
        'Imperiul carolingian încercase să reclădească o autoritate publică la scara continentului: conți numiți de rege, inspectori umblători (missi dominici), legiuiri capitulare, monedă ținută sub control. Acel proiect s-a destrămat în două generații. Împărțirea de la Verdun (843), luptele dinastice și incursiunile vikinge, maghiare și sarazine au lăsat populațiile fără apărare adevărată, venită de sus.',
        'Ce s-a întâmplat atunci a fost o privatizare a funcțiilor publice. Dregătoriile pe care le dădea regele — comitatul, castelania — au devenit ereditare; dreptul de a judeca, de a bate monedă, de a lua taxe de trecere și de a cere slujbe militare a trecut în mâinile celui ce ținea o cetate. Cuvântul de temelie este ban: puterea de a porunci, de a judeca și de a pedepsi, care în teorie venea de la rege și pe care, în fapt, o exercita fiecare senior pe teritoriul lui.',
        'Cetatea este obiectul material care rezumă procesul. Între secolele al X-lea și al XI-lea s-au înmulțit prin Europa apuseană fortificații particulare — la început din lemn, pe movile ridicate cu mâna, apoi din piatră — care nu apărau un regat, ci mărgineau un domeniu de stăpânire. Georges Duby a studiat acest fenomen în regiunea Mâconnais și l-a numit „împânzire cu cetăți”.',
        'Biserica a încercat să pună hotare acestei violențe prin mișcările Păcii și Armistițiului lui Dumnezeu, din sfârșitul secolului al X-lea: interzicerea atacării clericilor, a țăranilor, a femeilor și a negustorilor, și oprirea războiului în anumite zile. A fost un răspuns al societății la lipsa unei justiții publice, și totodată o încercare a Bisericii de a îndruma aristocrația războinică, ceea ce avea să ducă mai apoi la cruciadă.',
      ].join('\n\n'),
      callout:
        '„Feudalismul” nu a fost un sistem gândit dinainte, ci rodul nedorit al unei prăbușiri de instituție. Nimeni nu l-a născocit și nici nu l-a proclamat: s-a format prin adunarea unor soluții locale la aceeași problemă.',
    },
    {
      title: 'Vasalitate și feudă: legătura dintre puternici',
      body: [
        'Legătura vasalică unea doi oameni liberi, de poziție inegală. Viitorul vasal își punea mâinile între mâinile seniorului (immixtio manuum) și depunea jurământ de credință; seniorul îi dădea în schimb un beneficiu, de obicei pământ cu locuitorii și veniturile lui, care a ajuns să se numească feudă. Ceremonia se numea omagiu și crea îndatoriri de ambele părți.',
        'Vasalul îi datora auxilium și consilium: ajutor militar — un număr hotărât de zile pe an, de obicei patruzeci — și sfat, adică prezența la curtea seniorului și luarea parte la judecățile lui. Pe deasupra, contribuia bănește în cazuri anume: răscumpărarea seniorului luat prizonier, înarmarea fiului lui mai mare, măritișul fiicei lui mai mari. Seniorul îi datora ocrotire și dreptate.',
        'Sistemul avea o hibă de structură: mulțimea de legături. Același nobil putea fi vasal a mai multor seniori deodată, chiar și seniori aflați în ceartă unii cu alții. Ca să fie rezolvată asta, s-a născocit omagiul de căpetenie, care stabilea care era credința de căpătâi; dar problema nu a fost niciodată rezolvată de tot și a produs situații atât de fără noimă precum aceea în care regele Angliei era vasal al regelui Franței pentru stăpânirile lui de pe continent, ceea ce stă la obârșia Războiului de o Sută de Ani.',
        'Se cuvine desfăcută imaginea unei „piramide feudale” rânduite, cu regele în vârf și trepte succesive până la țăran. Acea înfățișare vine din manualele secolului al XIX-lea, nu din documentele medievale. Legăturile reale erau multe, contrazicătoare, negociate și adesea nerespectate; regele, vreme îndelungată, a fost un senior printre alții, adesea mai puțin puternic decât cei pe care îi socotea vasalii lui.',
      ].join('\n\n'),
    },
    {
      title: 'Senioralitatea și viața țăranului',
      body: [
        'Structura care ținea toată clădirea în picioare era senioralitatea, și atingea covârșitoarea majoritate a populației. Se deosebesc două forme de putere senioriale. Senioralitatea funciară îi dădea seniorului proprietatea pământului și dreptul de a primi venituri de la cei care îl lucrau. Senioralitatea de jurisdicție îi dădea banul: să judece, să amendeze, să ceară slujbe și să silească la folosirea instalațiilor lui.',
        'Gospodărirea se împărțea în rezervă — partea pe care seniorul o cârmuia direct și pe care țăranii o lucrau fără plată, prin claca — și mansuri, loturi date unor familii țărănești în schimbul unei plăți în natură, în bani sau în muncă. La toate acestea se adăugau monopolurile senioriale, numite și bănălii: obligația de a măcina la moara seniorului, de a coace la cuptorul lui și de a stoarce la teascul lui, plătind mereu.',
        'Starea juridică a țăranilor era felurită și schimbătoare. Iobagii erau legați de pământ: nu puteau să îl părăsească, aveau nevoie de îngăduință ca să se căsătorească în afara moșiei (formariage) și plăteau un drept la moștenire (mainmorte). Țăranii liberi aveau îndatoriri mai puțin apăsătoare, dar rămâneau supuși jurisdicției senioriale. Sclavia veche a dispărut treptat, înlocuită de aceste forme de dependență.',
        'Imaginea unei țărănimi supuse fără vlagă este mincinoasă. Documentele înregistrează împotriviri statornice: procese la curtea senioriale, negocierea în comun a cărților de franchiză, fuga spre pământuri care aveau nevoie de repopulatori și răscoale pe față, precum cea a țăranilor normanzi din 996. Comunitățile rurale aveau adunări proprii, gospodăreau bunuri obștești — pășuni, păduri, ape — și negociau cu seniorul ca un tot.',
        'Din secolul al XI-lea, un ciclu de creștere a schimbat lucrurile. Îmbunătățiri tehnice — plugul greu cu cormană, hamul rigid, care înmulțea puterea de tracțiune a calului, rotația trienală, morile de apă și apoi cele de vânt — au sporit randamentele. Populația a crescut, au fost desțelenite păduri și mlaștini, și au apărut orașe noi. Această creștere a fost cea care a început să roadă rânduiala senioriale, dând țărănimii alternative: aerul orașului, spunea vorba germană, te face liber.',
      ].join('\n\n'),
      callout:
        'Bănăliile sunt un semn bun al firii puterii senioriale: nu doar strângerea rentei pentru pământ, ci monopolizarea unor slujbe neapărat trebuincioase și plata pentru folosirea lor obligatorie.',
    },
    {
      title: 'Societatea celor trei stări și Biserica',
      body: [
        'Pe la anul 1000, episcopii Adalbero de Laon și Gerard de Cambrai au formulat o schemă hărăzită unei vieți lungi: societatea se împarte în cei care se roagă (oratores), cei care luptă (bellatores) și cei care muncesc (laboratores). Fiecare stare împlinește o îndatorire trebuincioasă, iar ansamblul alcătuiește un trup armonios, voit de Dumnezeu.',
        'Georges Duby a analizat această schemă în *Les trois ordres ou l\'imaginaire du féodalisme* (1978) și a arătat că nu era o descriere, ci o armă ideologică: apare tocmai atunci când ordinea socială este pusă la îndoială, și slujește ca să îndreptățească faptul că unii muncesc ca alții să lupte și să se roage. Puterea ei a fost uriașă: s-a repetat opt sute de ani și încă rânduia discursul Vechiului Regim în 1789.',
        'Biserica nu era doar o instituție duhovnicească: era cel mai mare proprietar de pământ al Europei și o putere senioriale cu drepturi depline, cu episcopi care exercitau banul și cu abații care stăpâneau zeci de senioralități. Această dublă stare a născut încordări statornice.',
        'Cearta Investiturilor (1075-1122) a fost înfruntarea hotărâtoare. Papalitatea reformatoare, cu Grigore al VII-lea, a cerut ca numai Biserica să poată numi episcopi și stareți, împotriva obiceiului după care îi numea împăratul. Conflictul a avut episoade răsunătoare — excomunicarea lui Henric al IV-lea și pocăința lui la Canossa, în 1077 — și s-a închis prin Concordatul de la Worms (1122), care a deosebit investitura spirituală, păstrată Bisericii, de cea vremelnică, dată de puterea lumească.',
        'Urmările au fost îndelungate. Despărțind pentru prima dată, pe față, sfera religioasă de cea politică, Cearta a creat condițiile pentru a gândi puterea lumească drept ceva de sine stătător. Mai mulți istorici ai dreptului o socotesc una dintre obârșiile îndepărtate ale despărțirii moderne dintre Biserică și stat.',
      ].join('\n\n'),
    },
    {
      title: 'A existat feudalismul? Marea ceartă',
      body: [
        'Cuvântul „feudalism” nu este medieval. A fost născocit în secolul al XVII-lea, pornind de la studiile de drept feudal, și s-a generalizat în secolul al XVIII-lea cu un înțeles peiorativ: Montesquieu, Voltaire și apoi revoluționarii francezi l-au folosit ca să numească ansamblul de privilegii care trebuiau desființate. Adică s-a născut ca o categorie de ceartă, mai înainte de a fi un concept de analiză.',
        'În secolul XX s-au statornicit două folosiri foarte diferite. Marc Bloch, în *Societatea feudală* (1939-1940), l-a descris drept un tip de societate întreg: dependență personală răspândită peste tot, fărâmițarea puterii, întâietatea războinicului, puțină bănime în circulație, legături puternice de rudenie. Pentru tradiția marxistă, în schimb, feudalismul era un mod de producție definit prin scoaterea surplusului de la țărănime prin constrângere din afara pieței, adică prin forță, nu prin piață.',
        'Punerea la îndoială a venit în 1974, când Elizabeth Brown a publicat „The Tyranny of a Construct”, și mai ales în 1994, cu *Fiefs and Vassals* al lui Susan Reynolds. Reynolds a susținut, pornind de la documente, că noțiunile de feudă și de vasalitate pe care le predau manualele au fost rânduite de juriștii secolului al XII-lea și proiectate apoi înapoi peste secole care funcționau altfel. Cuvântul „feudă” apare cu înțelesuri deosebite; omagiul nu presupune întotdeauna dăruirea unui pământ; iar legăturile documentate sunt mult mai felurite și mai locale decât lasă să se creadă modelul.',
        'Discuția s-a legat de alta: cea a „schimbării anului o mie” sau mutația feudală. Duby și Bonnassie au apărat o prefacere bruscă pe la anul 1000, cu prăbușirea justiției publice și apariția numaidecât a senioralității banale. Dominique Barthélemy a răspuns că schimbarea a fost mult mai treptată și că impresia de ruptură vine dintr-o schimbare a felului de documente păstrate, nu din realitatea pe care o descriu.',
        'Rezultatul practic al acestor dezbateri este o chemare la precizie. Cei mai mulți medieviști continuă să folosească „feudal” ca o prescurtare folositoare, dar arătând limpede despre ce vorbesc: legături vasalice între aristocrați, senioralitate asupra țăranilor sau un tip general de societate. A amesteca aceste trei planuri — ceea ce fac cele mai multe manuale — este ceea ce Reynolds socotește de neapărat.',
      ].join('\n\n'),
      callout:
        'În noaptea de 4 august 1789, Adunarea franceză a proclamat desființat „regimul feudal”. Ce desființa erau drepturi senioriale ale secolului al XVIII-lea, nu un sistem medieval: chiar cuvântul făcea treaba politică de a aduna sub o etichetă urâtă niște lucruri foarte diferite.',
    },
    {
      title: 'Comparație și sfârșitul ciclului',
      body: [
        'Folosirea termenului în afara Europei apusene a fost mult discutată. A fost aplicat Japoniei samurailor, cu legătura ei dintre daimyo și shogun, și Rusiei moderne. Marc Bloch primea comparația cu Japonia; cei mai mulți dintre cercetătorii de azi preferă să o mărginească, fiindcă asemănările de suprafață — războinici, credință personală, pământ — ascund deosebiri adânci în structura statului, a religiei și a dreptului.',
        'Chiar ciclul european s-a închis din interior. Creșterea economică a secolelor al XII-lea și al XIII-lea a înmulțit bănimea în circulație, ceea ce a îngăduit înlocuirea slujbei militare vasalice cu impozite și cu trupe mercenare; orașele au primit cărți de franchiză care le scoteau de sub jurisdicția senioriale; iar regii au reclădit administrații de meserie, tribunale de apel și o fiscalitate obișnuită.',
        'Redobândirea dreptului roman a fost hotărâtoare în acest proces. *Corpus Iuris Civilis*, studiat la Bologna din secolul al XI-lea, le oferea monarhilor un arsenal de gândire — suveranitate, lege generală, autoritate publică — cu care să lupte împotriva fărâmițării de jurisdicție. Juriștii pregătiți în universități au ajuns unealta statului aflat în clădire.',
        'Acest proces nu a fost drept și nici la fel peste tot. Anglia a dezvoltat repede o monarhie centralizată, cu drept comun și, în același timp, un parlament în stare să o îngrădească, într-un echilibru prevestit de Magna Carta din 1215. Franța a avut nevoie de secole ca să îi supună pe marii ei feudatari. În Sfântul Imperiu, fărâmițarea s-a statornicit până în secolul al XIX-lea. Iar în peninsula iberică, reconquista și repopularea au dat naștere unor regimuri de franchiză și unor municipii cu libertăți locale largi, greu de potrivit cu modelul clasic.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Ban', definition: 'Puterea de a porunci, de a judeca și de a pedepsi. Venea în teorie de la rege; în fapt, o exercita fiecare senior cu cetate.' },
    { term: 'Omagiu', definition: 'Ceremonie care crea legătura vasalică prin unirea mâinilor și jurământul de credință.' },
    { term: 'Feudă', definition: 'Beneficiu — de obicei pământ cu veniturile și locuitorii lui — dat de senior vasalului.' },
    { term: 'Auxilium și consilium', definition: 'Cele două îndatoriri de temelie ale vasalului: ajutor militar și sfat la curtea seniorului.' },
    { term: 'Omagiu de căpetenie', definition: 'Credință de căpătâi, născocită ca să rezolve conflictul legăturilor multiple dintre seniori aflați în ceartă.' },
    { term: 'Rezervă și mansuri', definition: 'Partea gospodăriei cârmuită de senior, față de loturile date unor familii țărănești.' },
    { term: 'Bănălii', definition: 'Monopoluri senioriale de moară, de cuptor și de teasc, de folosire obligatorie și cu plată.' },
    { term: 'Clacă', definition: 'Muncă fără plată, obligatorie, a țăranului pe pământurile de rezervă ale seniorului.' },
    { term: 'Iobăgie', definition: 'Legarea de pământ, cu îngrădiri la căsătorie (formariage) și la moștenire (mainmorte).' },
    { term: 'Cele trei stări', definition: 'Schemă ideologică — oratores, bellatores, laboratores — formulată pe la anul 1000, ca să îndreptățească ordinea socială.' },
    { term: 'Cartă de franchiză', definition: 'Document care recunoștea libertăți unei comunități rurale sau orășenești, scoțând-o de sub sarcinile senioriale.' },
  ],
  debates: [
    {
      question: 'Este „feudalism” un concept valabil sau o construcție a istoricilor?',
      positions: [
        {
          school: 'Feudalism ca tip de societate (Bloch, 1939)',
          argument:
            'Descrie un ansamblu întreg: dependență personală răspândită peste tot, fărâmițarea puterii, întâietatea războinicului, economie puțin bănească și legături de rudenie puternice. Este o unealtă de comparație folositoare.',
        },
        {
          school: 'Mod de producție (tradiția marxistă)',
          argument:
            'Ce definește este scoaterea surplusului de la țărănime prin constrângere din afara pieței. Vasalitatea dintre nobili ar fi ceva de rangul al doilea, față de legătura senior-țăran.',
        },
        {
          school: 'Punerea la îndoială a construcției (Brown, 1974; Reynolds, 1994)',
          argument:
            'Feuda și vasalitatea, așa cum se predau, au fost rânduite de juriștii secolului al XII-lea și proiectate înapoi. Documentele arată folosiri deosebite și legături mult mai locale și mai felurite decât modelul.',
        },
      ],
      state:
        'Critica lui Reynolds a silit la o precizie mai mare. Cei mai mulți medieviști continuă să folosească „feudal” ca prescurtare, dar deosebind legăturile vasalice, senioralitatea țărănească și tipul general de societate: a amesteca aceste trei planuri este ceea ce se socotește de neapărat.',
    },
    {
      question: 'A existat o „mutație feudală” bruscă pe la anul 1000?',
      positions: [
        {
          school: 'Mutație (Duby, Bonnassie, Poly-Bournazel)',
          argument:
            'Pe la anul 1000 se prăbușește justiția publică carolingiană și apare repede senioralitatea banală, cu împânzirea de cetăți, violență cavalerească și sarcini noi asupra țărănimii.',
        },
        {
          school: 'Continuitate (Barthélemy)',
          argument:
            'Schimbarea a fost mult mai treptată, iar impresia de ruptură vine dintr-o prefacere a felului de documente păstrate — de la acte publice la cartularii mănăstirești —, nu din realitatea socială pe care o descriu.',
        },
      ],
      state:
        'Versiunea tare a mutației a fost îndulcită. Se primește o prefacere reală a puterii locale, dar mai lentă, cu cronologii foarte diferite de la o regiune la alta și fără limpezimea pe care o sugera modelul dintâi.',
    },
    {
      question: 'Se poate vorbi de feudalism în afara Europei apusene?',
      positions: [
        {
          school: 'Folosire de comparație (Bloch)',
          argument:
            'Japonia medievală arată trăsături asemănătoare: războinici de meserie, credință personală, pământ în schimbul slujbei, fărâmițarea puterii centrale. Comparația luminează amândouă cazurile.',
        },
        {
          school: 'Mărginire (cei mai mulți cercetători de azi)',
          argument:
            'Asemănările de suprafață ascund deosebiri adânci în structura statului, în drept, în religie și în legătura cu țărănimea. A lărgi termenul îl golește de cuprins de analiză.',
        },
      ],
      state:
        'Predomină grija. Se primește comparația limpede și mărginită și se respinge folosirea lui „feudal” ca sinonim obștesc pentru „premodern” sau „înapoiat”, des întâlnită în afara disciplinei.',
    },
  ],
  sources: [
    { author: 'Fulbert de Chartres', title: 'Scrisoare către Guillaume al Aquitaniei', year: '1020', kind: 'primaria', note: 'Înșiră îndatoririle de ambele părți ale seniorului și ale vasalului. Text de școală clasic despre vasalitate.' },
    { author: 'Galbert de Bruges', title: 'De multro, traditione et occisione Karoli comitis Flandriarum', year: '1127–1128', kind: 'primaria', note: 'Descrie ceremonii de omagiu în chiar clipa lor. Sursă de excepție prin apropierea ei de fapte.' },
    { author: 'Adalbero de Laon', title: 'Carmen ad Robertum regem', year: 'c. 1025', kind: 'primaria', note: 'Formularea de temelie a schemei celor trei stări.' },
    { author: 'Trimișii lui Wilhelm I', title: 'Domesday Book', year: '1086', kind: 'primaria', note: 'Recensământ senioriale al Angliei: sursă de numere fără seamăn în Europa secolului al XI-lea.' },
    { author: 'Anonim', title: 'Magna Carta', year: '1215', kind: 'primaria', note: 'Hotare contractuale puse puterii regale engleze de către baroni.' },
    { author: 'Marc Bloch', title: 'La société féodale', year: '1939–1940', kind: 'estudio', note: 'Definește feudalismul ca tip de societate. Operă de temelie a școlii Annales în medievistică.' },
    { author: 'Georges Duby', title: 'Les trois ordres ou l\'imaginaire du féodalisme', year: '1978', kind: 'estudio', note: 'Analizează schema tristării ca ideologie, nu ca descriere.' },
    { author: 'Elizabeth A. R. Brown', title: '„The Tyranny of a Construct”, American Historical Review', year: '1974', kind: 'estudio', note: 'Primul atac pe față asupra valabilității conceptului de feudalism.' },
    { author: 'Susan Reynolds', title: 'Fiefs and Vassals: The Medieval Evidence Reinterpreted', year: '1994', kind: 'estudio', note: 'Dovedește că noțiunile clasice sunt o rânduire juridică a secolului al XII-lea.' },
    { author: 'Dominique Barthélemy', title: 'La mutation de l\'an mil a-t-elle eu lieu?', year: '1997', kind: 'estudio', note: 'Răspuns dat tezei mutației feudale, dinspre critica documentelor.' },
    { author: 'Chris Wickham', title: 'Medieval Europe', year: '2016', kind: 'estudio', note: 'Sinteză recentă, care adună dezbaterile și ocolește folosirea necritică a cuvântului „feudalism”.' },
  ],
  documents: [
    {
      section: 1,
      title: 'Cum se făcea un vasal',
      text: [
        'Contele l-a întrebat pe cel care avea să îi dea omagiu dacă voia să devină, fără nicio îndoială, omul lui, iar acesta a răspuns: vreau.',
        'Unindu-și atunci mâinile, le-a pus între mâinile contelui, și au rămas uniți printr-o sărutare.',
        'În al doilea rând, cel care dăduse omagiul și-a pus credința chezaș cu aceste cuvinte: făgăduiesc, pe credința mea, să îi fiu credincios de acum contelui Guillaume și să îi păstrez întreg omagiul meu împotriva tuturor, cu bună-credință și fără înșelăciune.',
      ].join('\n\n'),
      source: 'Galbert de Bruges, Istoria asasinării lui Carol cel Bun, 1127.',
      note: 'Versiune proprie după latină.',
      question: 'Toată legătura se face prin gesturi și cuvinte, în fața martorilor, fără a semna nimic. De ce contează gestul ca dovadă în această societate? Ce se întâmplă când cineva este vasal a doi seniori aflați în ceartă?',
    },
  ],
  images: [
    {
      alt: 'Miniatură medievală cu țărani secerând și legând snopi de fân în fața unui oraș zidit',
      caption: 'Luna iunie în Très Riches Heures a ducelui de Berry, pe la 1412-1416.',
    },
    {
      alt: 'Broderie medievală cu trei figuri așezate sub arcade, numite prin inscripții latine brodate deasupra',
      caption: 'Guillaume cu fratele lui vitreg Odon și cu Robert, pe tapiseria de la Bayeux, pe la 1077. Legătura ce ține întreprinderea este de rudenie și de credință personală.',
    },
    {
      alt: 'Miniatură cu țărani semănând și arând în fața unei cetăți albe, dincolo de râu, și o sperietoare de ciori pe câmp',
      caption: 'Luna octombrie în Très Riches Heures, pe la 1412-1416. Senioralitatea este aceasta: cetatea privește spre câmpul care o hrănește.',
    },
    {
      alt: 'Cetate de piatră cu incintă dublă de ziduri și turnuri rotunde pe un deal pleșuv',
      caption: 'Crac des Chevaliers, în Siria. Ordinele militare au exportat cetatea senioriale europeană în Răsărit și au desăvârșit-o acolo.',
    },
  ],
  questions: [
    {
      question: 'Ce proces descrie mai bine obârșia rânduielii feudale?',
      options: [
        'Un sistem gândit dinainte și proclamat de Carol cel Mare',
        'Privatizarea funcțiilor publice — justiție, monedă, taxe de trecere — după prăbușirea puterii carolingiene',
        'O impunere a Bisericii asupra regilor',
        'Primirea dreptului roman de către seniori',
      ],
      explanation: 'Nimeni nu a născocit-o: s-a format prin adunarea unor soluții locale la aceeași problemă, lipsa unei autorități în stare să asigure apărare și dreptate.',
    },
    {
      question: 'Ce era banul?',
      options: [
        'Un impozit pe comerț',
        'Puterea de a porunci, de a judeca și de a pedepsi, care în teorie venea de la rege, iar în fapt o exercita fiecare senior',
        'Ceremonia omagiului',
        'Jurământul cruciaților',
      ],
      explanation: 'Cetatea mărginea domeniul unde acea putere se exercita. Duby a numit „împânzire cu cetăți” înmulțirea fortificațiilor particulare din secolele al X-lea și al XI-lea.',
    },
    {
      question: 'Ce îi datora vasalul seniorului lui?',
      options: [
        'Doar plata unei rente anuale în bani',
        'Auxilium și consilium: ajutor militar și sfat, plus contribuții bănești în cazuri anume',
        'Muncă agricolă pe rezerva senioriale',
        'Ascultare religioasă',
      ],
      explanation: 'Contribuțiile anume cuprindeau răscumpărarea seniorului luat prizonier, înarmarea fiului lui mai mare și măritișul fiicei lui mai mari. Seniorul îi datora ocrotire și dreptate.',
    },
    {
      question: 'De ce a fost născocit omagiul de căpetenie?',
      options: [
        'Ca să le îngăduie femeilor să dea omagiu',
        'Ca să stabilească o credință de căpătâi, atunci când un nobil era vasal a mai multor seniori aflați în ceartă',
        'Ca să scutească de slujba militară',
        'Ca să lege direct țărănimea de rege',
      ],
      explanation: 'Problema nu a fost niciodată rezolvată de tot: faptul că regele Angliei era vasal al celui al Franței pentru pământurile lui de pe continent stă la obârșia Războiului de o Sută de Ani.',
    },
    {
      question: 'De ce este cu problemă imaginea „piramidei feudale”?',
      options: [
        'Fiindcă regele nu a existat în Evul Mediu',
        'Fiindcă vine din manualele secolului al XIX-lea: legăturile reale erau multe, contrazicătoare și adesea nerespectate',
        'Fiindcă țăranii ocupau vârful',
        'Fiindcă se aplica doar în Anglia',
      ],
      explanation: 'Vreme îndelungată, regele a fost un senior printre alții, adesea mai puțin puternic decât cei pe care îi socotea vasalii lui.',
    },
    {
      question: 'Ce erau bănăliile?',
      options: [
        'Impozite plătite de nobili regelui',
        'Monopoluri senioriale de moară, de cuptor și de teasc, de folosire obligatorie și cu plată',
        'Sărbători religioase ale calendarului agricol',
        'Pământuri obștești ale satului',
      ],
      explanation: 'Arată bine firea puterii senioriale: nu doar strângerea rentei pentru pământ, ci monopolizarea unor slujbe neapărat trebuincioase și plata pentru folosirea lor silnică.',
    },
    {
      question: 'Ce deosebea un iobag de un țăran liber?',
      options: [
        'Iobagul nu putea lucra pământul',
        'Iobagul era legat de pământ, cu îngrădiri la căsătorie și cu drepturi asupra moștenirii lui',
        'Țăranul liber nu plătea nicio rentă',
        'Iobagul era o proprietate personală de vânzare, ca sclavul vechi',
      ],
      explanation: 'Sclavia veche a dispărut treptat, înlocuită de aceste forme de dependență. Țăranul liber rămânea supus jurisdicției senioriale.',
    },
    {
      question: 'Ce dovadă contrazice imaginea unei țărănimi supuse fără vlagă?',
      options: [
        'Lipsa documentelor de la sate',
        'Procese la curtea senioriale, negocierea cărților de franchiză, fuga și răscoalele pe față',
        'Lipsa comunităților rurale',
        'Interzicerea bunurilor obștești',
      ],
      explanation: 'Comunitățile rurale aveau adunări, gospodăreau pășuni, păduri și ape, și negociau cu seniorul ca un tot.',
    },
    {
      question: 'Ce noutăți tehnice au împins creșterea agrară de după secolul al XI-lea?',
      options: [
        'Plugul roman și rotația bienală',
        'Plugul greu cu cormană, hamul rigid, rotația trienală și morile de apă',
        'Irigația prin revărsare și noria',
        'Semănatul aruncat și pârloaga statornică',
      ],
      explanation: 'Hamul rigid înmulțea puterea de tracțiune a calului fără să îl sugrume. Creșterea randamentelor a îngăduit creștere demografică, desțeleniri și orașe noi.',
    },
    {
      question: 'Potrivit lui Duby, ce rol avea schema celor trei stări?',
      options: [
        'Să descrie cu precizie societatea vremii lui',
        'Să îndreptățească ideologic faptul că unii muncesc ca alții să lupte și să se roage, tocmai atunci când ordinea este pusă la îndoială',
        'Să rânduiască administrația carolingiană',
        'Să reglementeze legăturile vasalice',
      ],
      explanation: 'S-a repetat opt sute de ani și încă rânduia discursul Vechiului Regim în 1789. Puterea ei a fost politică, nu descriptivă.',
    },
    {
      question: 'Ce urmare îndelungată a avut Cearta Investiturilor?',
      options: [
        'Dispariția papalității',
        'Despărțirea pe față a sferei religioase de cea politică, creând condiții pentru a gândi puterea lumească drept ceva de sine stătător',
        'Prefacerea regilor în episcopi',
        'Desființarea vasalității',
      ],
      explanation: 'Concordatul de la Worms (1122) a deosebit investitura spirituală de cea vremelnică. Mai mulți istorici ai dreptului o socotesc o obârșie îndepărtată a despărțirii dintre Biserică și stat.',
    },
    {
      question: 'Care este obârșia cuvântului „feudalism”?',
      options: [
        'Este un termen medieval, folosit de chiar seniori',
        'A fost născocit în secolul al XVII-lea și s-a generalizat în secolul al XVIII-lea cu înțeles peiorativ, ca să numească privilegii care trebuiau desființate',
        'Vine din dreptul roman iustinian',
        'L-a inventat Marc Bloch, în 1939',
      ],
      explanation: 'S-a născut ca o categorie de ceartă, mai înainte de a fi un concept de analiză. În 1789, Adunarea franceză a desființat „regimul feudal”, adunând sub acea etichetă lucruri foarte diferite.',
    },
    {
      question: 'Ce susține Susan Reynolds în Fiefs and Vassals?',
      options: [
        'Că feudalismul a fost mai aspru decât se credea',
        'Că noțiunile de feudă și de vasalitate au fost rânduite de juriștii secolului al XII-lea și proiectate înapoi',
        'Că vasalitatea nu a existat niciodată, sub nicio formă',
        'Că feudalismul s-a născut la Bizanț',
      ],
      explanation: 'Documentele arată folosiri deosebite ale cuvântului „feudă”, omagii fără dăruire de pământ și legături mult mai locale și mai felurite decât modelul din manuale.',
    },
    {
      question: 'Ce obiectează Barthélemy tezei „mutației anului o mie”?',
      options: [
        'Că schimbarea a fost și mai bruscă decât s-a descris',
        'Că impresia de ruptură vine din schimbarea felului de documente păstrate, nu din realitatea socială',
        'Că nu a fost nicio schimbare în puterea locală',
        'Că mutația s-a petrecut în secolul al XIII-lea',
      ],
      explanation: 'Se trece de la acte publice la cartularii mănăstirești. Astăzi se primește o prefacere reală, dar mai lentă și cu cronologii foarte diferite de la o regiune la alta.',
    },
    {
      question: 'Ce rol a avut redobândirea dreptului roman în sfârșitul rânduielii feudale?',
      options: [
        'A întărit fărâmițarea de jurisdicție',
        'Le-a dat monarhilor noțiuni — suveranitate, lege generală, autoritate publică — ca să lupte împotriva fărâmițării',
        'A interzis proprietatea pământului',
        'A desființat universitățile',
      ],
      explanation: 'Juriștii pregătiți la Bologna și în universități au ajuns unealta statului aflat în clădire, în fața puterilor senioriale.',
    },
  ],
}
