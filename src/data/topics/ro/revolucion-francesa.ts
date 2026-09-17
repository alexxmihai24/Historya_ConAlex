import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/revolucion-francesa.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 12 date, 14 concepte, 3 dezbateri, 24 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const revolucionFrancesaRo: TopicTranslation = {
  title: 'Revoluția franceză și epoca napoleoniană',
  description: 'De la un faliment fiscal la inventarea politicii moderne, Teroarea și un imperiu care a exportat codul civil cu tunul.',
  years: '1789–1815',
  summary:
    'Franța nu era în 1789 o țară ruinată sau înapoiată: era prima putere demografică a Europei apusene, cu o economie în creștere și cu o administrație invidiată. Ce se rupsese era vistieria ei, incapabilă să impoziteze pe cei cu bani, fiindcă privilegiul fiscal era chiar forma juridică a societății. Din acea fundătură a ieșit, în patru luni din 1789, ceva pe care nimeni nu îl plănuise: afirmația că suveranitatea stă în națiune, nu în rege, și că drepturile sunt anterioare legii. În următorii douăzeci și șase de ani, acea afirmație a produs o constituție, o republică, un război european, Teroarea, o lovitură militară și un imperiu. A mai produs și vocabularul politic cu care Europa avea să discute secolul următor: stânga și dreapta, națiune, cetățenie, contrarevoluție.',
  keyDates: [
    { date: '1787–1788', event: 'Adunarea Notabililor respinge reforma fiscală și silește la convocarea Stărilor Generale.' },
    { date: '17-20 iunie 1789', event: 'Starea a treia se proclamă Adunare Națională și jură să nu se despartă fără a da o constituție.' },
    { date: '14 iulie 1789', event: 'Luarea Bastiliei; în săptămânile următoare, Marea Spaimă străbate satele.' },
    { date: '4 și 26 august 1789', event: 'Desființarea nocturnă a privilegiilor și Declarația Drepturilor Omului și ale Cetățeanului.' },
    { date: 'Iulie 1790', event: 'Constituția civilă a clerului: ruptura care rupe țara în două.' },
    { date: 'Iunie 1791', event: 'Fuga la Varennes. Regele nu mai este crezut ca monarh constituțional.' },
    { date: 'Aprilie-august 1792', event: 'Război împotriva Austriei și a Prusiei; asaltul asupra Tuileriilor și căderea monarhiei.' },
    { date: 'Ianuarie-martie 1793', event: 'Execuția lui Ludovic al XVI-lea, coaliția europeană și răscoala din Vendée.' },
    { date: 'Septembrie 1793 – iulie 1794', event: 'Guvernul revoluționar, Legea Suspecților și Teroarea, până la 9 Thermidor.' },
    { date: '9 noiembrie 1799', event: '18 Brumar: Bonaparte lichidează Directoratul.' },
    { date: '1801–1804', event: 'Concordatul, Banca Franței, Codul Civil și proclamarea Imperiului.' },
    { date: '1812–1815', event: 'Campania din Rusia, Leipzig, prima abdicare și Waterloo.' },
  ],
  sections: [
    {
      title: 'Un faliment, nu o decădere',
      body: [
        'Secolul al XVIII-lea francez a fost unul de creștere: populația a trecut de la vreo douăzeci și două la douăzeci și opt de milioane, comerțul atlantic s-a înmulțit, producția agrară a crescut, iar orașele s-au umplut de liber-profesioniști, funcționari și rentieri. A explica anul 1789 prin mizerie nu ține; conjunctura din 1788, cu o recoltă dezastruoasă și pâinea la prețuri de neîngăduit, a înrăutățit criza, dar nu a pricinuit-o.',
        'Ce era stricat era vistieria. Războaiele secolului, și mai ales sprijinul dat independenței celor treisprezece colonii, au lăsat o datorie a cărei plată înghițea în jur de jumătate din cheltuieli. Franța nu era săracă: strângea prost. Primele două stări și numeroase orașe, provincii și bresle se bucurau de scutiri, iar încercările de a impozita bogăția în chip general s-au lovit de parlamente, care se înfățișau drept apărători ai națiunii împotriva despotismului ministerial.',
        'Când Calonne a propus în 1787 o contribuție funciară fără scutiri, Adunarea Notabililor a răspuns că o asemenea reformă nu putea fi aprobată decât de națiunea adunată. Aristocrația a blocat înțelegerea fiscală în numele libertății și, prin asta, a deschis ușa Stărilor Generale, care nu se mai adunaseră din 1614. Georges Lefebvre a numit acel episod revoltă aristocratică; fără ea nu există 1789.',
        'Convocarea a adus două noutăți exploziile. S-a dublat reprezentarea stării a treia, fără a se garanta votul pe cap în loc de votul pe stare, iar tuturor circumscripțiilor li s-au cerut caiete de plângeri. Cahiers de doléances sunt cel mai mare sondaj de opinie al Vechiului Regim: mii de texte care critică privilegiul fiscal, justiția senioriale și dijmele și care, în covârșitoarea lor majoritate, nu cer desființarea monarhiei, ci îndreptarea ei.',
        'Pamfletul lui Sieyès din ianuarie 1789 a formulat argumentul hotărâtor prin trei întrebări: ce este starea a treia, totul; ce a fost până acum în ordinea politică, nimic; ce cere, să fie ceva. Națiunea este definită acolo drept ansamblul celor care muncesc și susțin societatea, iar privilegiul rămâne pe dinafară, prin însăși definiția.',
      ].join('\n\n'),
      callout:
        'Reforma fiscală a fost blocată de aristocrație, nu de popor. Fără revolta privilegiaților din 1787-1788, Stările Generale nu ar fi fost convocate.',
    },
    {
      title: '1789: patru luni care inventează un regim',
      body: [
        'Chestiunea votului pe cap a paralizat adunarea din mai. La 17 iunie, deputații stării a treia s-au proclamat Adunare Națională, iar la 20, găsindu-și sala încuiată, au jurat în sala Jocului de Palet să nu se despartă până nu vor da Franței o constituție. Este actul de temelie: un grup de reprezentanți hotărăște că suveranitatea stă în națiune și acționează în consecință.',
        'Luarea Bastiliei, la 14 iulie, a fost neînsemnată din punct de vedere militar — erau șapte deținuți — și hotărâtoare din punct de vedere politic: a arătat că Parisul se putea impune prin forță și că armata nu era de încredere. În săptămânile următoare, Marea Spaimă, studiată de Lefebvre în 1932, a răspândit prin sate zvonul unui complot aristocratic cu tâlhari plătiți; țăranii s-au înarmat, au atacat castele și au ars mai ales arhivele unde erau scrise obligațiile lor senioriale.',
        'În noaptea de 4 august, Adunarea a răspuns la această presiune printr-o renunțare colectivă la privilegii, care a desființat regimul senioriale, dijmele, vânzarea funcțiilor și scutirile. Litera mică a venit câteva zile mai târziu: drepturile socotite proprietate trebuiau răscumpărate prin plată, condiție pe care țărănimea a nesocotit-o și care a fost desființată fără despăgubire în 1793.',
        'La 26 august a fost adoptată Declarația Drepturilor Omului și ale Cetățeanului: oamenii se nasc și rămân liberi și egali în drepturi, suveranitatea stă în chip esențial în națiune, legea este expresia voinței generale, nimeni nu poate fi tulburat pentru opiniile lui și nici arestat fără o lege dinainte. Nu era un program social, ci o dărâmare juridică a ordinii pe stări, și așa a fost citită în toată Europa.',
        'În octombrie, femeile de la piețele pariziene au mărșăluit spre Versailles din pricina prețului pâinii și au adus familia regală la Paris. Puterea rămânea sub privirea fizică a capitalei, un fapt care va rândui tot ce urmează.',
      ].join('\n\n'),
    },
    {
      title: 'Reclădirea regatului și ruperea lui în două',
      body: [
        'Adunarea Constituantă a făcut, în doi ani, o lucrare administrativă uriașă: a împărțit Franța în departamente de mărime asemănătoare, a desființat vămile dinăuntrul țării, a unificat greutățile și măsurile cu sistemul metric, a desființat breslele, a declarat munca liberă, a reorganizat justiția cu judecători aleși și a creat juriul. O bună parte din acea clădire este în picioare și azi.',
        'A mai luat și hotărârea care avea să rupă înțelegerea. Ca să plătească datoria, a naționalizat averile Bisericii, a emis pe seama lor niște titluri, numite assignats, care au ajuns bancnote inflaționiste, și a reorganizat instituția bisericească prin Constituția civilă a clerului din iulie 1790: dieceze potrivite după departamente, episcopi și preoți parohi aleși de cetățeni și plătiți de stat. Cerând în noiembrie un jurământ de credință, țara s-a rupt: în jur de jumătate din cler l-a depus, iar cealaltă jumătate nu, cu o împărțire geografică foarte limpede.',
        'Timothy Tackett a dovedit că acel jurământ este cel mai bun semn teritorial al contrarevoluției de mai apoi. Revoluția a încetat să mai fie doar un conflict între privilegiu și națiune și a devenit și unul între două feluri de a înțelege viața religioasă a unor comunități întregi.',
        'Fuga regelui la Varennes, în iunie 1791, prins la câțiva kilometri de frontieră după ce lăsase un manifest care dezavua tot ce se făcuse, a distrus ficțiunea monarhului constituțional. Constituția din 1791 a fost adoptată oricum, cu vot cenzitar și cu deosebirea dintre cetățeni activi și pasivi, dar nimeni nu mai credea în putința ei de a rezista.',
        'Adunarea a mai legiferat și împotriva organizării muncitorești: legea Le Chapelier, din iunie 1791, a interzis coalițiile și asociațiile profesionale în numele libertății individuale și al unității națiunii. A rămas în vigoare până în 1864 și este dovada că egalitatea proclamată era juridică, nu socială.',
      ].join('\n\n'),
      callout:
        'Jurământul cerut clerului în 1790 a rupt Franța în jumătate și prezice, ținut cu ținut, unde va fi contrarevoluția trei ani mai târziu.',
    },
    {
      title: 'Război, republică și Teroare',
      body: [
        'Războiul declarat Austriei în aprilie 1792 a fost dorit de aproape toți: de girondini, care sperau să răspândească libertatea și să dea la iveală adevărata față a regelui; de curte, care spera înfrângerea; doar Robespierre a avertizat că nimeni nu iubește misionarii înarmați. Înfrângerile de la început și manifestul de la Brunswick, care amenința Parisul cu nimicirea, au dus la asaltul asupra Tuileriilor din 10 august și la sfârșitul monarhiei.',
        'În septembrie, cu prusacii înaintând, mulțimi au năvălit în închisorile pariziene și au executat peste o mie de deținuți. Masacrele din septembrie sunt primul episod de violență de masă care nu este spontan populară, ci îngăduită de autorități, și marchează climatul în care este aleasă Convenția. Aceasta proclamă Republica la 21 septembrie și îl judecă pe rege: executat la 21 ianuarie 1793.',
        'Primăvara lui 1793 adună catastrofe: coaliție europeană, trădarea lui Dumouriez, insurecție țărănească și catolică în Vendée, răscoale federaliste la Lyon, Marsilia, Bordeaux și Toulon, și foamete în orașe. Răspunsul a fost guvernul revoluționar: un Comitet al Salvării Publice cu puteri executive, reprezentanți în misiune cu autoritate deplină în provincii, tribunal revoluționar, rechiziții, controlul prețurilor prin maximum général, ridicarea în masă din august și Legea Suspecților din septembrie, care îngăduia arestarea pentru purtare, legături sau scrieri.',
        'Cifrele cunoscute ajută la măsurare. Tribunalele revoluționare au dat în jur de șaptesprezece mii de condamnări la moarte; victimele totale ale represiunii, cu tot cu execuții sumare și morți în închisoare, se socotesc între treizeci și patruzeci de mii; războiul din Vendée a pricinuit între o sută cincizeci de mii și două sute cincizeci de mii de morți în ambele tabere. Cea mai mare parte a violenței s-a strâns în zonele de război civil și de frontieră, nu la Paris.',
        'Teroarea a avut și o latură culturală: decreștinare, calendar republican, cultul Ființei Supreme, sărbători civice. Și s-a sfârșit prin implozie: după legea de la Prairial, care a desființat garanțiile de procedură și a grăbit execuțiile, chiar Convenția l-a doborât pe Robespierre la 9 Thermidor, temându-se că urmează pe listă.',
      ].join('\n\n'),
    },
    {
      title: 'Cum se explică Teroarea',
      body: [
        'Citirea clasică, de la Albert Mathiez la Albert Soboul, subliniază împrejurările: invazie din afară, război civil dinăuntru, foamete și complot regesc real. Guvernul revoluționar ar fi fost o dictatură de sănătate publică, trecătoare și eficace, care a salvat Republica și a cărei violență se explică prin presiunea maselor orășenești și prin urgență. Soboul a adăugat analiza socială a sans-culoților: meșteșugari, negustori și simbriași organizați pe secții, cu o cultură politică proprie, de democrație directă și preț drept.',
        'Critica revizionistă a întors legătura de la cauză la efect. Augustin Cochin arătase deja rolul societăților de gândire; François Furet a susținut în 1978 că Teroarea nu a fost un accident, ci o urmare a chiar limbajului revoluționar: dacă suveranitatea aparține unei voințe generale unice și nedespărțite, cel care nu este de acord nu este minoritate, ci dușman, și nu există niciun loc instituțional pentru opoziție. Revoluția s-ar explica prin propria ei mișcare a discursului mai mult decât prin situația militară.',
        'Timothy Tackett a propus o a treia cale, documentată cu sute de scrisori și jurnale: nici pură împrejurare, nici pură ideologie, ci un proces de radicalizare hrănit de frică, de trăirea reală a complotelor și a dezertărilor și de o învățare politică grăbită, la niște oameni care în 1789 nu erau revoluționari. Punctul lui tare este că explică de ce aceiași oameni își schimbă poziția în patru ani.',
        'Vendée naște o dezbatere a ei. Reynald Secher a susținut în 1986 că coloanele infernale au înfăptuit un genocid plănuit. Jean-Clément Martin a răspuns că represiunea a fost cumplită, dar descentralizată, fără plan de exterminare a unei populații definite ca atare, și că numărul victimelor a fost umflat; cea mai mare parte a istoriografiei academice respinge azi denumirea de genocid, fără să micșoreze mărimea măcelului.',
        'Rămâne întrebarea de fond: a fost Revoluția burgheză? Alfred Cobban a negat în 1964 că ar fi existat o burghezie capitalistă înfruntând o nobilime feudală: revoluționarii erau mai ales juriști și funcționari, iar nobilii și burghezii împărțeau investiții și fel de viață. Furet și Doyle au dus mai departe această critică, până au prefăcut Revoluția într-un eveniment mai întâi politic, apoi social. Istoriografia de azi, cu Peter McPhee sau William Sewell, s-a întors la latura socială fără să se întoarcă la tiparul claselor: studiază munca, genul, sclavia colonială și cultura materială.',
      ].join('\n\n'),
      callout:
        'Furet: dacă suveranitatea este o voință generală nedespărțită, cel care nu este de acord nu este adversar, ci dușman. Teroarea ar sta scrisă în gramatica lui 1789, nu doar în războiul din 1793.',
    },
    {
      title: 'Napoleon: moștenitor și lichidator',
      body: [
        'Directoratul a supraviețuit patru ani printre lovituri de mână împotriva regaliștilor și a iacobinilor, cu o economie fără credit și cu un război neîntrerupt care a dat generalilor o putere politică tot mai mare. La 18 Brumar 1799, Bonaparte, general cu faimă din Italia și publicist iscusit al campaniei lui din Egipt, a lichidat regimul cu sprijinul unei părți chiar din Directorat.',
        'Consulatul a păstrat ce voia să păstreze burghezia revoluționară și a desființat ce se temea. Concordat cu Roma în 1801, care recunoștea catolicismul ca religie a majorității fără să întoarcă averile naționalizate; Banca Franței și francul germinal; prefecți numiți de la Paris în fruntea departamentelor; licee și Universitate imperială; și mai ales Codul Civil din 1804, care a fixat egalitatea în fața legii, proprietatea absolută, libertatea contractuală, căsătoria civilă și secularizarea stării civile.',
        'Același cod a consfințit autoritatea soțului, incapacitatea juridică a femeii măritate și inegalitatea în divorț și în adulter. Iar în 1802, regimul a restabilit sclavia în colonii, revocând desființarea din 1794; în Saint-Domingue, expediția trimisă să o impună a fost înfrântă, iar colonia și-a proclamat independența ca Haiti, în 1804. Revoluția a produs prima desființare a sclaviei din istoria modernă și, tot ea, prima ei restaurare.',
        'Imperiul proclamat în 1804 a dus războiul în toată Europa. Austerlitz, în 1805, a marcat punctul culminant pe continent; Trafalgar, în același an, arăta neputința de a birui pe mare. Blocada continentală a încercat să sugrume economic Marea Britanie și a sfârșit prin a-i sugruma pe aliații Franței și prin a-l împinge pe Napoleon să intervină în Spania în 1808 și să invadeze Rusia în 1812. Din peste șase sute de mii de oameni ai Marii Armate s-au întors doar câteva zeci de mii.',
        'Bilanțul este dublu, și așa se predă. Napoleon a exportat în jumătate din Europa egalitatea în fața legii, desființarea regimului senioriale, starea civilă și codul, a desființat Sfântul Imperiu Roman și a stârnit, prin reacție, naționalismele german și spaniol. Și a făcut-o prin cucerire, cenzură, poliție politică și un război care a costat între trei și cinci milioane de vieți. Cele două fapte sunt același fapt.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Cahiers de doléances', definition: 'Caiete de plângeri scrise în 1789 de toate circumscripțiile. Cel mai mare sondaj de opinie al Vechiului Regim.' },
    { term: 'Vot pe cap', definition: 'Cererea stării a treia, împotriva votului pe stare, care anula dubla ei reprezentare. Obârșia blocajului din mai 1789.' },
    { term: 'Marea Spaimă', definition: 'Panică rurală din iulie-august 1789, în fața unui presupus complot aristocratic. Studiată de Lefebvre în 1932.' },
    { term: 'Noaptea de 4 august', definition: 'Renunțarea colectivă la privilegii, care a desființat regimul senioriale și dijmele, cu răscumpărare în bani desființată apoi în 1793.' },
    { term: 'Constituția civilă a clerului', definition: 'Lege din 1790 care reorganizează Biserica franceză și cere jurământ. Rupe țara în două și prevestește geografia contrarevoluției.' },
    { term: 'Assignat', definition: 'Titlu emis pe seama averilor naționalizate ale Bisericii. Prefăcut în bancnotă, a pricinuit o inflație năprasnică.' },
    { term: 'Legea Le Chapelier', definition: 'Normă din 1791 care interzice coalițiile și asociațiile profesionale. În vigoare până în 1864: egalitatea proclamată era juridică, nu socială.' },
    { term: 'Sans-culoți', definition: 'Meșteșugari, negustori și simbriași parizieni organizați pe secții. Democrație directă, preț drept și presiune înarmată asupra Convenției.' },
    { term: 'Comitetul Salvării Publice', definition: 'Organ executiv al guvernului revoluționar din 1793, cu puteri de război, poliție și administrație.' },
    { term: 'Legea Suspecților', definition: 'Normă din septembrie 1793 care îngăduie arestarea pentru purtare, legături sau scrieri. Temeiul juridic al Terorii.' },
    { term: 'Maximum général', definition: 'Controlul prețurilor și al salariilor impus în 1793 sub presiunea sans-culoților. Părăsit după Thermidor.' },
    { term: 'Thermidor', definition: 'Căderea lui Robespierre la 9 Thermidor din anul II (27 iulie 1794), din inițiativa chiar a Convenției.' },
    { term: 'Codul Civil', definition: 'Cod din 1804: egalitate în fața legii, proprietate absolută și libertate contractuală, alături de incapacitatea juridică a femeii măritate.' },
    { term: 'Blocada continentală', definition: 'Închiderea continentului comerțului britanic, din 1806. A ruinat aliații Franței și a târât Imperiul spre Spania și spre Rusia.' },
  ],
  debates: [
    {
      question: 'A fost o revoluție burgheză?',
      positions: [
        {
          school: 'Interpretarea clasică (Lefebvre, Soboul)',
          argument:
            'O burghezie în ascensiune a doborât ordinea feudală cu sprijin țărănesc și popular și a impus condițiile juridice ale capitalismului: proprietate liberă, piață unificată, desființarea privilegiului.',
        },
        {
          school: 'Revizionism (Cobban 1964, Furet, Doyle)',
          argument:
            'Nu era o burghezie capitalistă înfruntând o nobilime feudală: revoluționarii au fost juriști și funcționari, iar nobili și burghezi împărțeau venituri și investiții. Revoluția a fost mai întâi politică, apoi socială.',
        },
        {
          school: 'Noua istorie socială (McPhee, Sewell)',
          argument:
            'Se întoarce la latura socială fără tiparul claselor: munca, genul, țărănimea, sclavia colonială și cultura materială explică procesul mai bine decât lupta dintre două blocuri.',
        },
      ],
      state:
        'Modelul clasic al celor două clase este părăsit; la fel este și reducerea a totul la discurs politic. Sinteza de azi îmbină criza fiscală, cultura politică, conflictul rural și latura colonială.',
    },
    {
      question: 'Teroarea: împrejurări sau ideologie?',
      positions: [
        {
          school: 'Împrejurări (Mathiez, Soboul)',
          argument:
            'Invazie, război civil, foamete și complot explică o dictatură de sănătate publică trecătoare, care a salvat Republica și a răspuns presiunii populare.',
        },
        {
          school: 'Logica discursului (Furet, 1978)',
          argument:
            'O suveranitate gândită ca voință generală unică nu lasă loc instituțional opoziției: cel care nu este de acord devine dușman. Teroarea este potrivită cu limbajul lui 1789.',
        },
        {
          school: 'Radicalizare întâmplătoare (Tackett)',
          argument:
            'Scrisori și jurnale arată oameni care nu erau revoluționari în 1789 și care se radicalizează din frică, din complote reale și dintr-o învățare politică grăbită.',
        },
      ],
      state:
        'S-a impus o citire de proces: violența nu era scrisă în 1789 și nici nu se deduce doar din război. Este studiată ca rezultat al unor decizii înșiruite sub presiune, cu ideologia funcționând ca ramă de înțelegere a fricii.',
    },
    {
      question: 'A fost Vendée un genocid?',
      positions: [
        {
          school: 'Secher (1986)',
          argument:
            'Coloanele infernale au înfăptuit un plan de exterminare a unei populații definite prin teritoriul și credința ei: se cuvine denumirea juridică de genocid.',
        },
        {
          school: 'Martin și majoritatea istoriografiei academice',
          argument:
            'Represiunea a fost cumplită, dar descentralizată și fără plan de exterminare a populației; cifrele au fost umflate, iar cadrul războiului civil descrie mai bine ce s-a întâmplat.',
        },
      ],
      state:
        'Denumirea de genocid este minoritară în cercetarea academică și foarte prezentă în dezbaterea publică franceză. Există acord asupra mărimii măcelului: între 150.000 și 250.000 de morți în ambele tabere.',
    },
  ],
  sources: [
    { author: 'Emmanuel Sieyès', title: 'Ce este starea a treia?', year: '1789', kind: 'primaria', note: 'Totul, nimic, ceva. Definește națiunea excluzând privilegiul prin definiție.' },
    { author: 'Circumscripțiile franceze', title: 'Cahiers de doléances', year: '1789', kind: 'primaria', note: 'Mii de caiete de plângeri. Critică privilegiul fiscal fără să ceară desființarea monarhiei.' },
    { author: 'Adunarea Națională', title: 'Declarația Drepturilor Omului și ale Cetățeanului', year: '1789', kind: 'primaria', note: 'Suveranitate națională, egalitate în fața legii și drepturi anterioare statului.' },
    { author: 'Adunarea Națională', title: 'Constituția civilă a clerului', year: '1790', kind: 'primaria', note: 'Reorganizează Biserica și cere jurământ. Rupe înțelegerea din 1789.' },
    { author: 'Edmund Burke', title: 'Reflecții asupra Revoluției din Franța', year: '1790', kind: 'primaria', note: 'Prima mare formulare a conservatorismului modern, împotriva raționalismului constituant.' },
    { author: 'Adunarea Națională', title: 'Legea Le Chapelier', year: '1791', kind: 'primaria', note: 'Interzice coalițiile și asociațiile profesionale. În vigoare până în 1864.' },
    { author: 'Olympe de Gouges', title: 'Declarația drepturilor femeii și ale cetățencii', year: '1791', kind: 'primaria', note: 'Denunță faptul că cetățenia proclamată o exclude pe jumătate din populație.' },
    { author: 'Convenția Națională', title: 'Legea Suspecților', year: '1793', kind: 'primaria', note: 'Îngăduie arestarea pentru purtare, legături sau scrieri. Temeiul juridic al Terorii.' },
    { author: 'Maximilien Robespierre', title: 'Despre principiile moralei politice', year: '1794', kind: 'primaria', note: 'Virtutea și teroarea ca principii ale guvernării revoluționare pe timp de război.' },
    { author: 'Toussaint Louverture', title: 'Constituția din Saint-Domingue', year: '1801', kind: 'primaria', note: 'Autonomie colonială și desființarea sclaviei, înainte de expediția napoleoniană.' },
    { author: 'Statul francez', title: 'Codul Civil al francezilor', year: '1804', kind: 'primaria', note: 'Egalitate în fața legii și proprietate absolută, alături de incapacitatea juridică a femeii măritate.' },
    { author: 'Jules Michelet', title: 'Istoria Revoluției franceze', year: '1847-1853', kind: 'estudio', note: 'Poporul ca subiect colectiv. Temelie pentru tradiția republicană franceză.' },
    { author: 'Albert Mathiez', title: 'Revoluția franceză', year: '1922-1927', kind: 'estudio', note: 'Apărarea guvernului revoluționar ca dictatură de sănătate publică.' },
    { author: 'Georges Lefebvre', title: 'Marea Spaimă din 1789', year: '1932', kind: 'estudio', note: 'Reconstituie panica rurală și așază țărănimea ca actor de sine stătător.' },
    { author: 'Albert Soboul', title: 'Sans-culoții parizieni în anul II', year: '1958', kind: 'estudio', note: 'Analiza socială a mișcării pe secții și a culturii ei politice.' },
    { author: 'Alfred Cobban', title: 'The Social Interpretation of the French Revolution', year: '1964', kind: 'estudio', note: 'Deschide revizionismul: nu era o burghezie capitalistă împotriva unei nobilimi feudale.' },
    { author: 'François Furet', title: 'A gândi Revoluția franceză', year: '1978', kind: 'estudio', note: 'Teroarea ca urmare a logicii voinței generale nedespărțite.' },
    { author: 'Lynn Hunt', title: 'Politics, Culture, and Class in the French Revolution', year: '1984', kind: 'estudio', note: 'Cotitura culturală: simboluri, retorică și practici ca obiect central al analizei.' },
    { author: 'Reynald Secher', title: 'La Vendée-Vengé: le génocide franco-français', year: '1986', kind: 'estudio', note: 'Teza genocidului din Vendée, minoritară în mediul academic și foarte prezentă în dezbaterea publică.' },
    { author: 'William Doyle', title: 'The Oxford History of the French Revolution', year: '1989', kind: 'estudio', note: 'Sinteză revizionistă de referință în limba engleză.' },
    { author: 'Timothy Tackett', title: 'Becoming a Revolutionary', year: '1996', kind: 'estudio', note: 'Arată cu jurnale și scrisori cum unii deputați nerevoluționari se radicalizează.' },
    { author: 'Laurent Dubois', title: 'Avengers of the New World', year: '2004', kind: 'estudio', note: 'Revoluția haitiană ca parte de temelie, nu periferică, a ciclului revoluționar.' },
    { author: 'Jean-Clément Martin', title: 'La Vendée et la Révolution', year: '2007', kind: 'estudio', note: 'Respinge planul de exterminare și reconstituie o represiune descentralizată și cumplită.' },
    { author: 'Peter McPhee', title: 'Liberty or Death', year: '2016', kind: 'estudio', note: 'Sinteză recentă care aduce înapoi latura socială, rurală și colonială fără a se întoarce la tiparul claselor.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Declarația Drepturilor Omului și ale Cetățeanului',
      text: [
        'Articolul 1. Oamenii se nasc și rămân liberi și egali în drepturi. Deosebirile sociale nu se pot întemeia decât pe folosul obștesc.',
        'Articolul 3. Principiul oricărei suveranități stă în chip esențial în națiune. Niciun corp și nicio persoană nu poate exercita autoritate care să nu vină limpede de la ea.',
        'Articolul 17. Fiind proprietatea un drept nesupus și sacru, nimeni nu poate fi lipsit de ea decât atunci când necesitatea publică, dovedită legal, o cere în chip vădit, și cu condiția unei despăgubiri drepte și prealabile.',
      ].join('\n\n'),
      source: 'Adunarea Națională Constituantă, 26 august 1789.',
      note: 'Versiune proprie după franceză.',
      question: 'Articolul 1 proclamă egalitatea, iar 17 declară proprietatea nesupusă și sacră. Ce fel de societate iese din susținerea amândurora deodată? Cui îi folosește și cui nu?',
    },
  ],
  images: [
    {
      alt: 'Pictură cu asaltul asupra Bastiliei, cu fum de artilerie și mulțime înarmată în fața turnurilor cetății',
      caption: 'Luarea Bastiliei, 14 iulie 1789, de Jean-Pierre Houël.',
    },
    {
      alt: 'Desen cu o sală înțesată, cu bărbați ridicând brațul spre un grup aflat pe o masă, în centru',
      caption: 'Jurământul din sala Jocului de Palet, 20 iunie 1789, după David. Deputații jură să nu se despartă până nu vor da o constituție regatului.',
    },
    {
      alt: 'Planșă cu două table ale legii înrămate, cu textul articolelor și figuri alegorice pe laturi',
      caption: 'Declarația Drepturilor Omului și ale Cetățeanului, august 1789. Forma imită tablele legii: se înfățișează drept temelie, nu drept reformă.',
    },
    {
      alt: 'Pictură cu un general cu mantie fluturândă, călare pe un cal ridicat pe picioarele din spate, arătând spre vârful unui pas de munte',
      caption: 'Bonaparte trecând Alpii la Saint-Bernard, de David (1801). A trecut pasul pe catâr; tabloul este propagandă comandată, iar pe stâncă sunt săpate numele lui Hanibal și Carol cel Mare.',
    },
  ],
  questions: [
    {
      question: 'Care a fost cauza imediată a convocării Stărilor Generale, în 1789?',
      options: [
        'Foametea pricinuită de recolta proastă din 1788',
        'Blocarea reformei fiscale de către Adunarea Notabililor, care a trimis hotărârea către națiunea adunată',
        'Înfrângerea franceză din Războiul de Șapte Ani',
        'Presiunea filozofilor iluminiști asupra curții',
      ],
      explanation: 'Revolta aristocratică din 1787-1788 a deschis ușa. Aristocrația a blocat înțelegerea fiscală în numele libertății.',
    },
    {
      question: 'De ce nu ține explicarea anului 1789 prin sărăcirea Franței?',
      options: [
        'Fiindcă populația franceză scădea din 1750',
        'Fiindcă secolul al XVIII-lea a fost unul de creștere demografică, comercială și agrară: ce era stricat era vistieria, nu economia',
        'Fiindcă Franța nu avea datorie publică',
        'Fiindcă prețul pâinii a rămas neschimbat până în 1792',
      ],
      explanation: 'Franța strângea prost, nu era săracă. Recolta dezastruoasă din 1788 a înrăutățit criza, nu a pricinuit-o.',
    },
    {
      question: 'Ce faptă este socotită de temelie pentru noul regim?',
      options: [
        'Luarea Bastiliei, la 14 iulie',
        'Autoproclamarea stării a treia drept Adunare Națională, la 17 iunie, și jurământul din sala Jocului de Palet, din 20',
        'Marșul femeilor spre Versailles, în octombrie',
        'Execuția lui Ludovic al XVI-lea, în ianuarie 1793',
      ],
      explanation: 'Niște reprezentanți hotărăsc că suveranitatea stă în națiune și acționează în consecință. Tot restul se sprijină pe acel gest.',
    },
    {
      question: 'Ce distrugeau mai ales țăranii în timpul Marii Spaime?',
      options: [
        'Recoltele marilor proprietari',
        'Arhivele senioriale unde erau scrise obligațiile și dările lor',
        'Bisericile parohiale',
        'Morile și fierăriile',
      ],
      explanation: 'Ținta era titlul juridic, nu clădirea. Această presiune a silit la noaptea de 4 august.',
    },
    {
      question: 'Ce literă mică a avut desființarea drepturilor senioriale, din 4 august?',
      options: [
        'Intrarea ei în vigoare era amânată până în 1793',
        'Drepturile socotite proprietate trebuiau răscumpărate prin plată, condiție pe care țărănimea a nesocotit-o',
        'Atingea doar teritoriile din nord',
        'Cerea aprobarea prealabilă a regelui',
      ],
      explanation: 'Desființarea fără despăgubire a venit în 1793. Țărănimea a luat-o înaintea legii, prin fapte.',
    },
    {
      question: 'De ce a fost Constituția civilă a clerului o ruptură hotărâtoare?',
      options: [
        'Fiindcă a interzis cultul catolic',
        'Fiindcă jurământul cerut clerului a rupt țara în jumătate și prevestește geografia contrarevoluției',
        'Fiindcă a întors Bisericii averile naționalizate',
        'Fiindcă a întemeiat cultul Ființei Supreme',
      ],
      explanation: 'Tackett a dovedit că harta jurământului din 1790-1791 prezice, ținut cu ținut, harta împotrivirii de mai apoi.',
    },
    {
      question: 'Ce dovedește legea Le Chapelier din 1791 despre întinderea egalității revoluționare?',
      options: [
        'Că s-a extins la domeniul economic și de muncă',
        'Că era egalitate juridică, nu socială: a interzis coalițiile și asociațiile profesionale și a ținut până în 1864',
        'Că s-au recunoscut drepturile politice ale simbriașilor',
        'Că breslele au rămas neatinse',
      ],
      explanation: 'Organizarea muncitorească a fost interzisă în numele libertății individuale și al unității națiunii.',
    },
    {
      question: 'Cine s-a împotrivit declarării războiului, în 1792, și cu ce argument?',
      options: [
        'Girondinii, de teama unei înfrângeri militare',
        'Robespierre, cu argumentul că nimeni nu iubește misionarii înarmați',
        'Curtea, care se încredea în victoria revoluționară',
        'Danton, din lipsă de resurse financiare',
      ],
      explanation: 'Războiul îl voiau girondinii, ca să răspândească libertatea, și curtea, care spera înfrângerea. Amândoi, din motive potrivnice.',
    },
    {
      question: 'Câte condamnări la moarte au dat, în jur, tribunalele revoluționare?',
      options: [
        'În jur de 2.000',
        'În jur de 17.000, cu un total al victimelor represiunii socotit între 30.000 și 40.000',
        'Peste 300.000',
        'Mai puțin de 500',
      ],
      explanation: 'Cea mai mare parte a violenței s-a strâns în zonele de război civil și de frontieră, nu la Paris.',
    },
    {
      question: 'Cum s-a sfârșit Teroarea?',
      options: [
        'Printr-o invazie străină care a ocupat Parisul',
        'Prin implozie: chiar Convenția l-a doborât pe Robespierre la 9 Thermidor, temându-se că urmează pe listă',
        'Printr-un plebiscit popular',
        'Prin victoria electorală a girondinilor',
      ],
      explanation: 'Legea de la Prairial desființase garanțiile de procedură și grăbise execuțiile, între care și cele ale deputaților.',
    },
    {
      question: 'Care este argumentul lui Furet despre obârșia Terorii?',
      options: [
        'Că a fost un răspuns pe măsură la invazia străină',
        'Că o suveranitate gândită ca voință generală nedespărțită nu lasă loc opoziției: cel care nu este de acord devine dușman',
        'Că a fost impusă de sans-culoți împotriva voinței Convenției',
        'Că a fost opera exclusivă a lui Robespierre',
      ],
      explanation: 'Împotriva citirii prin împrejurări a lui Mathiez și Soboul. Tackett propune o a treia cale: radicalizare întâmplătoare, din frică și învățare politică.',
    },
    {
      question: 'Care este poziția majoritară a istoriografiei academice despre Vendée?',
      options: [
        'Că a existat un plan de stat pentru exterminarea populației din Vendée',
        'Că represiunea a fost cumplită, dar descentralizată și fără plan de exterminare a populației, într-un cadru de război civil',
        'Că victimele au fost mai puțin de zece mii',
        'Că nu a existat represiune însemnată',
      ],
      explanation: 'Denumirea de genocid, dată de Secher, este minoritară în mediul academic. Există acord asupra mărimii: între 150.000 și 250.000 de morți.',
    },
    {
      question: 'Ce a negat Alfred Cobban, în 1964?',
      options: [
        'Că ar fi existat violență revoluționară',
        'Că ar fi existat o burghezie capitalistă înfruntând o nobilime feudală: revoluționarii erau mai ales juriști și funcționari',
        'Că Declarația din 1789 ar fi avut efecte juridice',
        'Că Napoleon ar fi fost moștenitorul Revoluției',
      ],
      explanation: 'A deschis revizionismul. Istoriografia de azi s-a întors la latura socială fără a reface tiparul celor două clase.',
    },
    {
      question: 'Ce a făcut regimul napoleonean cu sclavia colonială?',
      options: [
        'A păstrat desființarea decretată în 1794',
        'A restabilit-o în 1802; expediția trimisă în Saint-Domingue a fost înfrântă, iar colonia și-a proclamat independența ca Haiti, în 1804',
        'A desființat-o pentru prima dată în 1804',
        'A lăsat hotărârea pe seama adunărilor coloniale',
      ],
      explanation: 'Ciclul revoluționar a produs prima desființare modernă a sclaviei și, tot el, prima ei restaurare.',
    },
    {
      question: 'Ce contradicție internă cuprinde Codul Civil din 1804?',
      options: [
        'Recunoaște deodată proprietatea colectivă și pe cea privată',
        'Proclamă egalitatea în fața legii și libertatea contractuală, în timp ce consfințește autoritatea soțului și incapacitatea juridică a femeii măritate',
        'Restabilește breslele desființate în 1791',
        'Întoarce jurisdicția senioriale foștilor proprietari',
      ],
      explanation: 'A fost exportat în jumătate din Europa cu ambele fețe deodată: egalitate civilă pentru bărbați, subordonare juridică pentru femei.',
    },
    {
      question: 'Ce urmare nedorită a avut blocada continentală, decretată în 1806?',
      options: [
        'A pricinuit falimentul imediat al Băncii Angliei',
        'A ruinat aliații și sateliții Franței și l-a împins pe Napoleon să intervină în Spania în 1808 și să invadeze Rusia în 1812',
        'A închis comerțul francez cu America',
        'A silit Marea Britanie să semneze pacea în 1807',
      ],
      explanation: 'Din peste șase sute de mii de oameni ai Marii Armate care au intrat în Rusia s-au întors doar câteva zeci de mii.',
    },
  ],
}
