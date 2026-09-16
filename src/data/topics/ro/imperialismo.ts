import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/imperialismo.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 14 date, 14 concepte, 3 dezbateri, 23 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const imperialismoRo: TopicTranslation = {
  title: 'Imperialism și colonialism',
  description: 'Cum a ajuns un pumn de state europene să administreze un sfert din planetă în patruzeci de ani, cu ce mijloace și cu ce pretext.',
  years: '1870–1914',
  summary:
    'Între 1870 și 1914, puterile europene, împreună cu Statele Unite și cu Japonia, au adus sub stăpânire formală în jur de douăzeci și cinci de milioane de kilometri pătrați. Nu a fost prima expansiune europeană: existau imperii atlantice de patru secole. Nou au fost ritmul, scara și trecerea de la controlul indirect prin tratate comerciale la administrarea directă, cu drapel, funcționari și frontiere trasate în Europa. Explicarea acestui salt a ocupat istoriografia un secol, iar niciunul dintre răspunsurile clasice nu stă singur în picioare: nici surplusul de capital al lui Hobson și Lenin, nici criza de la periferie a lui Robinson și Gallagher, nici politica internă a lui Wehler. Ce nu se discută este bilanțul material, fiindcă este documentat: foamete care putea fi evitată, muncă silnică, războaie de exterminare și o geografie politică valabilă și astăzi.',
  keyDates: [
    { date: '1857–1858', event: 'Marea răscoală indiană pune capăt Companiei Indiilor de Est; Coroana ia guvernarea directă.' },
    { date: '1869', event: 'Se deschide canalul Suez, iar Egiptul devine o piesă strategică a drumului spre India.' },
    { date: '1882', event: 'Marea Britanie ocupă Egiptul după răscoala lui Urabi. A făgăduit să plece în câteva luni; a rămas șaptezeci de ani.' },
    { date: '1884–1885', event: 'Conferința de la Berlin: se fixează regulile împărțirii Africii, fără niciun african de față.' },
    { date: '1885', event: 'Leopold al II-lea primește Statul Liber Congo ca proprietate personală. Jules Ferry apără colonizarea în fața Camerei franceze.' },
    { date: '1896', event: 'Etiopia învinge Italia la Adua: singura victorie africană care păstrează un stat independent.' },
    { date: '1898', event: 'Omdurman și Fașoda. Războiul hispano-american: Cuba, Puerto Rico și Filipinele își schimbă stăpânul.' },
    { date: '1899–1902', event: 'Războiul anglo-bur. Lagăre de concentrare pentru populația civilă și uzura reputației imperiale britanice.' },
    { date: '1900', event: 'Răscoala boxerilor din China și expediția de pedepsire a opt puteri.' },
    { date: '1904', event: 'Raportul lui Roger Casement despre atrocitățile cauciucului din Congo.' },
    { date: '1904–1908', event: 'Război împotriva herero și nama în Africa de Sud-Vest germană, socotit astăzi genocid.' },
    { date: '1905', event: 'Japonia învinge Rusia la Tsushima: pentru prima oară o putere asiatică biruie una europeană în război deschis.' },
    { date: '1905–1907', event: 'Răscoala Maji Maji din Africa de Est germană, înăbușită prin foamete provocată.' },
    { date: '1908', event: 'Belgia anexează Congo și pune capăt stăpânirii personale a lui Leopold al II-lea.' },
  ],
  sections: [
    {
      title: 'Ce se schimbă pe la 1870',
      body: [
        'În 1800, Europa controla în jur de treizeci și cinci la sută din suprafața uscatului; în 1914 se apropia de optzeci și cinci la sută, dacă se socotesc coloniile, protectoratele și dominioanele. Grăbirea se strânge în patru decenii. Marea Britanie a adăugat vreo zece milioane de kilometri pătrați, Franța vreo nouă, iar puteri fără tradiție de peste mări, precum Germania, Italia și Belgia, au intrat aproape deodată în împărțeală.',
        'Hotărâtoare nu a fost doar întinderea, ci schimbarea felului de stăpânire. În bună parte a secolului al XIX-lea, Marea Britanie preferase ceea ce John Gallagher și Ronald Robinson au numit în 1953 imperialismul liberului schimb: stăpânire neoficială prin tratate inegale, împrumuturi, canoniere și negustori, fără a-și lua costul administrării. Regula formulată de ei este vestită: comerț neoficial dacă se poate, guvernare formală dacă trebuie. Ce se întâmplă după 1870 este că neoficialul nu mai ajunge.',
        'Nu mai ajunge din trei motive care se adună. Primul este competiția: când Germania, Franța și Belgia cer teritorii, Marea Britanie nu se mai poate bizui pe faptul că o piață deschisă va rămâne deschisă și mâine, așa că ocupă preventiv. Al doilea este protecționismul, care se generalizează după lunga scădere a prețurilor începută în 1873 și preface colonia în piață rezervată. Al treilea este instabilitatea chiar la periferie: societăți africane și asiatice schimbate de decenii de comerț inegal intră în criză, iar intervenția se justifică drept restabilire a ordinii.',
        'Se cuvine să te ferești de cuvântul împărțire, care lasă impresia unei mese la care se distribuie ceva deja cunoscut. În 1884, europenii nu știau aproape nimic despre interiorul Africii și au trasat frontiere pe hărți goale. O bună parte a ocupării reale a venit mai apoi, negociată sau impusă pe teren timp de douăzeci de ani, iar în multe locuri stăpânirea efectivă nu a existat până în secolul XX.',
      ].join('\n\n'),
      callout:
        'Regula lui Gallagher și Robinson: comerț neoficial dacă se poate, guvernare formală dacă trebuie. Ce se schimbă în 1870 nu este pofta europeană, ci faptul că neoficialul nu mai garantează accesul.',
    },
    {
      title: 'Uneltele stăpânirii',
      body: [
        'Daniel Headrick a argumentat în 1981 că cucerirea târzie a Africii se explică mai puțin printr-o schimbare de voință și mai mult printr-o schimbare de mijloace. Vreme de secole, interiorul african a fost de neatins pentru europeni dintr-un motiv sanitar: malaria și febra galbenă ucideau mai mult de jumătate dintre nou-veniți în primul an. Producția industrială de chinină, de după 1820, și folosirea ei sistematică pentru prevenire, încercată în expediția pe Niger din 1854, au micșorat acea mortalitate la o părticică.',
        'Aburul a făcut restul, la transport. Navele cu cocă de fier și pescaj mic urcau pe râuri pe care vasele oceanice nu le puteau străbate, iar canalul Suez, deschis în 1869, a scurtat cu săptămâni drumul spre Asia. Telegraful submarin, care lega Londra de Bombay din 1870 și de Cape Town din 1879, a îngăduit pentru prima dată ca un guvern din metropolă să dea ordine în câteva ore, nu în luni, ceea ce a centralizat decizia politică și a micșorat marja funcționarului de pe teren.',
        'Asimetria militară a devenit zdrobitoare în anii optzeci. Pușca cu încărcare pe la culată și cu cartuș metalic a înmulțit cadența și a îngăduit tragerea din poziție culcat; Maximul din 1884 a fost prima mitralieră cu adevărat automată. La Omdurman, în 1898, o armată anglo-egipteană a pierdut vreo patruzeci și opt de oameni față de peste zece mii de pierderi mahdiste, într-o singură dimineață. Hilaire Belloc a rezumat asta într-un vers cinic: noi avem Maximul, iar ei nu.',
        'Niciuna dintre aceste tehnologii nu explică singură expansiunea, iar Headrick nici nu a pretins asta. Ele explică de ce a fost cu putință și de ce a fost ieftină în vieți europene, ceea ce este o condiție politică hotărâtoare: o cucerire care aproape că nu costă soldați proprii întâmpină puțină împotrivire în parlamentul care o finanțează.',
        'Iar asimetria tehnică avea limitele ei. Etiopia a învins Italia la Adua în 1896 fiindcă Menelik al II-lea cumpărase puști moderne, unificase țara și se jucase cu rivalitățile europene. Japonia a făcut același lucru la o scară mai mare. Învățătura din amândouă cazurile este că tehnologia se putea transmite și că, acolo unde un stat a izbutit să se centralizeze și să se înarmeze la timp, cucerirea a dat greș.',
      ].join('\n\n'),
    },
    {
      title: 'Împărțirea Africii',
      body: [
        'Conferința de la Berlin, adunată între noiembrie 1884 și februarie 1885 din inițiativa lui Bismarck, nu a împărțit Africa, împotriva a ceea ce se spune de obicei. A fixat regulile împărțirii: libertatea navigației pe Congo și pe Niger, interzicerea formală a comerțului cu sclavi și, mai ales, principiul ocupării efective, care îl obliga pe cel ce cerea un teritoriu de coastă să dovedească o administrare reală și să le dea de știre celorlalți. Efectul practic a fost prefacerea cererii de pe hârtie într-o cursă de ridicat posturi, de arborat drapele și de semnat tratate cu șefi locali care rareori înțelegeau ce cedau.',
        'Cazul extrem a fost Statul Liber Congo. Leopold al II-lea al Belgiei a obținut în 1885 recunoașterea internațională a unui teritoriu de peste două milioane de kilometri pătrați ca proprietate personală, nu ca o colonie belgiană, înfățișându-l drept o întreprindere filantropică și antisclavagistă. Avântul cauciucului, după inventarea anvelopei, a prefăcut acea stăpânire într-un sistem de cote obligatorii, susținut de Force Publique, cu ostatici, mutilări și sate arse. Raportul consular al lui Roger Casement din 1904 și campania lui Edmund Morel au silit statul belgian să anexeze teritoriul în 1908.',
        'Cifrele mortalității din Congoul lui Leopold se discută. Adam Hochschild a răspândit în 1998 estimarea de zece milioane de morți, scoasă dintr-o comparație între recensăminte coloniale mult mai târzii. Demografi precum Jan Vansina au insistat că este vorba de o scădere a populației adunată din violență, foamete, strămutare și boală de-a lungul unor decenii, cu neputință de pus pe seama unei singure cauze și greu de măsurat cu recensăminte care nu existau. Discuția este despre mărime și metodă, nu despre existența sistemului, documentat chiar de administratorii lui.',
        'Violența nu a fost o ciudățenie belgiană. Germania i-a înăbușit pe herero și pe nama în Africa de Sud-Vest, între 1904 și 1908, cu ordine limpezi de exterminare date de Lothar von Trotha, cu împingerea lor în deșert și cu lagăre de muncă; se socotește că a murit în jur de optzeci la sută dintre herero. Germania a recunoscut oficial genocidul în 2021. În Africa de Est germană, înăbușirea răscoalei Maji Maji, între 1905 și 1907, a folosit distrugerea sistematică a recoltelor și a produs o foamete cu sute de mii de morți.',
        'Rivalitatea europeană a fost cât pe ce să spargă sistemul la Fașoda, în 1898, când o coloană franceză și una britanică s-au întâlnit pe Nilul de Sus. Franța a cedat, iar din acea umilire s-a ivit, în chip paradoxal, apropierea care a dus la Antanta Cordială din 1904. Împărțirea Africii a lucrat ca o supapă: a exportat pe alt continent tensiuni care în Europa ar fi însemnat război. Până când nu a mai fost teritoriu de împărțit.',
      ].join('\n\n'),
      callout:
        'Berlinul nu a împărțit Africa: a impus principiul ocupării efective. Cerând prezență reală ca să recunoască o pretenție, a prefăcut harta într-o cursă de posturi militare.',
    },
    {
      title: 'Asia: colonie, semicolonie și putere',
      body: [
        'India ilustrează modelul coloniei administrate. Răscoala din 1857 a lichidat Compania Indiilor de Est și a dus Coroana la guvernarea directă: vicerege, armată indiană sub comandă britanică, funcționărime proprie și, din 1877, titlul imperial al Victoriei. Rajul se sprijinea pe câteva mii de funcționari europeni, peste trei sute de milioane de locuitori, ceea ce era cu putință doar prin colaborare locală: prinți recunoscuți, moșieri, caste administrative și o armată recrutată dintre așa-numitele rase războinice.',
        'Bilanțul economic al stăpânirii indiene este obiectul unei discuții lungi. Teza drenajului, formulată de Dadabhai Naoroji în 1901, susține că India a transferat Marii Britanii un venit net permanent prin home charges, prin dobânzile datoriei și prin excedentul comercial sterilizat. Măsurarea se discută, dar există un fapt mai puțin discutabil: partea Indiei din producția manufacturieră mondială a scăzut de la vreun sfert, pe la mijlocul secolului al XVIII-lea, la două la sută în 1900, în timp ce venitul pe locuitor a stagnat aproape un secol.',
        'China înfățișează semicolonia. După cele două războaie ale opiului, tratatele inegale au impus porturi deschise, tarife fixate din afară, extrateritorialitate pentru străini și despăgubiri care puneau gaj veniturile vamale. Spre sfârșitul secolului, puterile își împărțiseră sfere de influență, cu concesiuni feroviare și miniere. Răscoala boxerilor, în 1900, s-a sfârșit cu o expediție de pedepsire a opt puteri și cu o despăgubire care a înghițit decenii la rând bugetul imperial. China și-a păstrat formal suveranitatea și i-a pierdut conținutul.',
        'Japonia este excepția care se preface în subiect. Restaurația Meiji din 1868 a început o prefacere anume a statului, a armatei, a școlii și a industriei, sub lozinca țară bogată, armată puternică. În 1895 a învins China și a anexat Taiwanul; în 1905 a biruit Rusia, iar în 1910 a anexat Coreea. Ridicarea ei a dovedit că industrializarea defensivă era cu putință și că imperialismul nu era o însușire rasială europeană, două concluzii care au răsunat în toată Asia.',
        'Foametele coloniale târzii închid acest tablou. Între 1876 și 1902, episoade de El Niño s-au potrivit cu politici de export al grâului, cu doctrina neamestecului în piețe și cu sisteme fiscale rigide în India, China și Brazilia. Mike Davis a socotit în 2001 între treizeci și șaizeci de milioane de morți și le-a numit holocausturile erei victoriene. Criticii lui obiectează că seceta ar fi ucis și fără colonialism și că uneori căile ferate au salvat vieți; ce a rezistat este că mortalitatea a atârnat de decizii politice ce pot fi numite, nu doar de ploaie.',
      ].join('\n\n'),
    },
    {
      title: 'Pretextul: rasă, știință și misiune',
      body: [
        'Niciun imperiu nu se ține doar cu puști: are nevoie de o justificare care să convingă metropola. Cea a imperialismului târziu a îmbinat trei discursuri. Primul a fost misiunea civilizatoare, formulată limpede de Jules Ferry în fața Camerei franceze în 1885: rasele superioare au datoria să le civilizeze pe cele inferioare. Al doilea a fost darwinismul social, care a mutat în politică o citire deformată a lui Darwin, cu Herbert Spencer și cu supraviețuirea celui mai potrivit drept formulă la modă. Al treilea a fost cel evanghelizator, care a adus școli, dispensare și, totodată, convingerea că salvează suflete.',
        'Antropologia fizică a vremii a dat înfățișare de știință acestei ierarhii: măsurători craniene, tipologii rasiale și expuneri de oameni în expozițiile universale și în grădinile zoologice umane care au străbătut Europa până bine în secolul XX. Privind înapoi, este ușor de văzut cercul vicios al raționamentului, care definea superioritatea prin puterea de a cuceri și apoi folosea cucerirea drept dovadă de superioritate.',
        'Edward Said a propus în 1978 citirea acestui aparat ca pe un sistem de cunoaștere, nu doar ca propagandă. Orientalismul, în formularea lui, este ansamblul de cunoștințe, imagini și categorii cu care Occidentul a construit un Orient esențializat, neclintit și având nevoie de tutelă, iar acea cunoaștere era de nedespărțit de puterea care o finanța. Teza a fost mult discutată, pentru felul selectiv în care își alege sursele și fiindcă atribuie prea multă coerență unui domeniu divers, și a reorganizat totodată studiile postcoloniale.',
        'Discursul imperial a fost și un discurs de gen. Colonia era gândită ca spațiu bărbătesc de aventură și de stăpânire de sine, iar starea femeilor colonizate a fost folosită ca argument de intervenție, în ceea ce Gayatri Spivak a rezumat prin bărbați albi care salvează femei brune de bărbați bruni. În același timp, administrația colonială a reglementat căsătoriile, sexualitatea și metisajul cu o minuțiozitate pe care Ann Laura Stoler a analizat-o ca miez al ordinii rasiale, nu ca margine a ei.',
        'Se cuvine consemnat că a existat critică a contemporanilor, nu doar judecată de mai târziu. Hobson a denunțat imperialismul în 1902 ca acaparare a statului de către interese financiare, Conrad a publicat Inima întunericului în 1899, campania despre Congo a mișcat opinia britanică, iar în Franța au fost deputați care au votat împotriva lui Ferry. Consensul imperial era larg, dar nu era unanim.',
      ].join('\n\n'),
      callout:
        'Raționamentul era circular: superioritatea se definea prin puterea de a cuceri, iar cucerirea era înfățișată apoi drept dovadă de superioritate.',
    },
    {
      title: 'Bilanț și moșteniri',
      body: [
        'Întrebarea dacă imperiul a fost rentabil are răspunsuri diferite, după cine este întrebat. Lance Davis și Robert Huttenback au conchis în 1986, după cercetarea a sute de firme, că pentru contribuabilul britanic coloniile nu au fost o afacere bună: apărarea imperială se plătea din impozite generale, iar câștigurile medii nu treceau peste cele ale investițiilor din țară. Au fost, în schimb, o afacere strălucită pentru anumite grupuri, mai ales pentru aristocrația cu bani plasați peste mări. Imperiul a lucrat ca un transfer intern de venit, socializând costul și privatizând câștigul.',
        'Asta desface versiunea mecanică a lui Hobson și Lenin, care făceau din surplusul de capital cauza suficientă a expansiunii. Fluxurile de investiții britanice s-au îndreptat mai ales spre Statele Unite, Argentina și dominioanele albe, nu spre coloniile tropicale abia cucerite. Dar nu desface observația lui Hobson despre acapararea statului de către interese organizate, care rămâne un instrument bun de analiză a unor decizii anume.',
        'În societățile colonizate, bilanțul material este mai limpede. Munca silnică, impozitul în bani, care silea la muncă pentru a-l putea plăti, specializarea în unul sau două produse de export și destrămarea manufacturilor locale au creat structuri care au supraviețuit independenței. Frontierele trasate la Berlin și în cancelarii au despărțit comunități și au unit altele fără vreo legătură dinainte, și sunt frontierele de azi. Mahmood Mamdani a analizat pe deasupra inventarea colonială a autorității tradiționale, cu șefi numiți de administrație, rămași apoi ca structură de putere moștenită.',
        'Răspunsul african și asiatic nu a fost pasiv în niciun moment. A fost împotrivire armată, de la Samori Ture și așanti până la Maji Maji și boxeri, și a fost însușire aleasă cu grijă: chiar școlile coloniale care au format funcționari i-au produs pe Gandhi, Nehru, Senghor, Ho Și Min și Nkrumah. Dreptul, națiunea și autodeterminarea au venit ca discurs imperial și s-au întors ca argument împotriva imperiului.',
        'Imperialismul a hrănit, în cele din urmă, războiul european. Nu l-a pricinuit direct, fiindcă crizele coloniale din Maroc, din 1905 și 1911, s-au rezolvat fără luptă, dar a făcut obișnuită cursa navală, a întărit blocurile de alianțe, a deprins opiniile publice cu un limbaj al luptei între rase și națiuni și a adus trupe coloniale pe fronturile din 1914. Aceiași soldați care au luptat în Europa au cerut mai apoi drepturi în țările lor, iar de acolo pornește firul care duce la decolonizare.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Imperialism neoficial', definition: 'Stăpânire prin tratate comerciale, datorie și presiune navală, fără administrarea teritoriului. Formulat de Gallagher și Robinson în 1953.' },
    { term: 'Ocupare efectivă', definition: 'Principiul Actului de la Berlin din 1885: se recunoaște doar pretenția celui care dovedește administrare reală și le dă de știre celorlalte puteri.' },
    { term: 'Statul Liber Congo', definition: 'Teritoriu de peste două milioane de kilometri pătrați, stăpânit personal de Leopold al II-lea între 1885 și 1908, nu ca o colonie belgiană.' },
    { term: 'Tratate inegale', definition: 'Înțelegeri impuse Chinei, Japoniei sau Siamului, cu porturi deschise, tarife fixate din afară și extrateritorialitate pentru străini.' },
    { term: 'Sferă de influență', definition: 'Zonă a unui stat formal suveran unde o putere își rezervă în exclusivitate concesiuni feroviare, miniere și comerciale.' },
    { term: 'Misiune civilizatoare', definition: 'Justificarea stăpânirii ca datorie a raselor superioare față de cele inferioare. Formularea ei canonică este discursul lui Jules Ferry din 1885.' },
    { term: 'Darwinism social', definition: 'Mutarea în politică a unei citiri deformate a selecției naturale, cu lupta dintre rase și națiuni drept lege a istoriei.' },
    { term: 'Teza lui Hobson și Lenin', definition: 'Explicația economică a imperialismului prin surplusul de capital care caută plasament în afară. Hobson în 1902, Lenin în 1916.' },
    { term: 'Mintea oficială', definition: 'Concept al lui Robinson și Gallagher: deciziile imperiale sunt luate de funcționari călăuziți de calcul strategic, nu de presiunea directă a investitorilor.' },
    { term: 'Colaborare', definition: 'Mecanismul de bază al stăpânirii coloniale: prinți, șefi și elite locale fără a căror cooperare câteva mii de europeni nu ar putea cârmui milioane de oameni.' },
    { term: 'Drenaj colonial', definition: 'Transfer net de venit din India către Marea Britanie prin home charges, datorie și excedent comercial. Formulat de Dadabhai Naoroji în 1901.' },
    { term: 'Holocausturile victoriene târzii', definition: 'Foametele din 1876-1902 din India, China și Brazilia, unde seceta s-a potrivit cu exportul de grâu și cu doctrina neamestecului. Termen al lui Mike Davis.' },
    { term: 'Orientalism', definition: 'Sistem de cunoștințe și de imagini cu care Occidentul a construit un Orient esențializat și având nevoie de tutelă. Analizat de Edward Said în 1978.' },
    { term: 'Genocidul herero și nama', definition: 'Exterminare ordonată de Lothar von Trotha în Africa de Sud-Vest germană, între 1904 și 1908. Recunoscută oficial de Germania în 2021.' },
  ],
  debates: [
    {
      question: 'De ce s-a produs împărțirea între 1870 și 1900?',
      positions: [
        {
          school: 'Explicația economică (Hobson, 1902; Lenin, 1916)',
          argument:
            'Subconsumul intern naște un surplus de capital care caută plasament rentabil în afară, iar statul se pune în slujba grupurilor financiare care îl exportă. Pentru Lenin este, pe deasupra, faza superioară și de pe urmă a capitalismului.',
        },
        {
          school: 'Criză la periferie și mintea oficială (Robinson și Gallagher, 1961)',
          argument:
            'Inițiativa nu vine din City, ci de la periferie. Crizele locale, precum răscoala lui Urabi din Egipt, în 1882, îi silesc să intervină pe niște funcționari care judecă strategic, nu după profit.',
        },
        {
          school: 'Politică internă (Schumpeter, 1919; Wehler, 1969)',
          argument:
            'Schumpeter vede un atavism al elitelor aristocratice și militare, rămase fără rost într-o economie capitalistă. Wehler vorbește de socialimperialism: expansiune în afară ca să fie dezamorsat conflictul de clasă de acasă, mai ales în Germania.',
        },
      ],
      state:
        'Nimeni nu mai susține o explicație unică. Se primește ideea că inițiativa de la periferie și competiția dintre puteri au atârnat mai greu decât exportul de capital în faza cuceririi și că presiunea economică a fost hotărâtoare în cazuri anume, precum Congoul cauciucului sau Africa de Sud.',
    },
    {
      question: 'A fost imperiul rentabil?',
      positions: [
        {
          school: 'Nu pentru contribuabil (Davis și Huttenback, 1986)',
          argument:
            'Apărarea imperială era plătită din impozite generale, iar câștigurile medii nu treceau peste cele ale investițiilor din țară. Imperiul a mutat venit de la contribuabilul de rând către o elită cu bani plasați peste mări.',
        },
        {
          school: 'Da, pentru economia metropolei (Patrick OBrien și alții)',
          argument:
            'Socoteala trebuie să cuprindă piețele protejate, materiile prime ieftine, serviciile financiare și de asigurări, banii trimiși acasă și rolul Indiei în echilibrarea balanței de plăți britanice.',
        },
        {
          school: 'Întrebarea este prost pusă (Naoroji, 1901; Utsa Patnaik)',
          argument:
            'A întreba dacă a meritat pentru Europa trece cu vederea cealaltă parte a bilanțului: transferul net dinspre colonii și distrugerea capacității productive locale sunt faptul central, indiferent dacă s-a scos profit în metropolă.',
        },
      ],
      state:
        'Se cade de acord că folosul a fost foarte inegal chiar în interiorul metropolei și că nu explică singur expansiunea. Măsurarea drenajului colonial rămâne deschisă, iar cifrele se deosebesc de câteva ori, după metodă.',
    },
    {
      question: 'Au fost foametele coloniale o nenorocire naturală sau o politică?',
      positions: [
        {
          school: 'Mortalitate politică (Davis, 2001)',
          argument:
            'Seceta a fost declanșatorul, dar scara a fost dată de exportul de grâu în plină lipsă, de doctrina neamestecului în prețuri, de fiscalitatea rigidă și de înlocuirea culturilor de subzistență cu unele comerciale.',
        },
        {
          school: 'Revizuire economică (Tirthankar Roy și alții)',
          argument:
            'Și foametele dinaintea colonizării au fost pustiitoare, puterea statului de a ajuta era foarte mică, cu tehnologia acelei vremi, iar calea ferată a micșorat mortalitatea episoadelor de mai târziu.',
        },
      ],
      state:
        'Cadrul lui Amartya Sen, după care foametea atârnă de accesul la hrană, nu doar de existența ei, s-a impus ca instrument de analiză. Discuția s-a mutat de la vină la măsura exactă a răspunderii administrative în fiecare episod.',
    },
  ],
  sources: [
    { author: 'Jules Ferry', title: 'Discurs în fața Camerei Deputaților', year: '1885', kind: 'primaria', note: 'Formularea canonică a misiunii civilizatoare și a argumentului economic, în fața unui parlament dezbinat.' },
    { author: 'Conferința de la Berlin', title: 'Actul General', year: '1885', kind: 'primaria', note: 'Libertatea navigației, interzicerea formală a comerțului cu sclavi și principiul ocupării efective.' },
    { author: 'Cecil Rhodes', title: 'Mărturisire de credință și declarații', year: '1877–1902', kind: 'primaria', note: 'Expansiunea britanică drept datorie rasială și drept ieșire din chestiunea socială. Imperialism fără pretext umanitar.' },
    { author: 'Rudyard Kipling', title: 'Povara omului alb', year: '1899', kind: 'primaria', note: 'Scrisă ca să le dea curaj americanilor să păstreze Filipinele. Tutela înfățișată ca jertfă.' },
    { author: 'Joseph Conrad', title: 'Inima întunericului', year: '1899', kind: 'primaria', note: 'Critică din interiorul întreprinderii coloniale congoleze și, totodată, scriere discutată pentru propria ei privire asupra Africii.' },
    { author: 'Dadabhai Naoroji', title: 'Poverty and Un-British Rule in India', year: '1901', kind: 'primaria', note: 'Prima formulare sistematică a teoriei drenajului, făcută de un parlamentar indian la Westminster.' },
    { author: 'John A. Hobson', title: 'Imperialism: A Study', year: '1902', kind: 'primaria', note: 'Imperialismul ca acaparare a statului de către interese financiare. Sursa directă a lui Lenin.' },
    { author: 'Roger Casement', title: 'Raport consular despre Statul Liber Congo', year: '1904', kind: 'primaria', note: 'Anchetă oficială britanică despre sistemul de cote al cauciucului, despre ostatici și despre mutilări.' },
    { author: 'Edmund D. Morel', title: 'Red Rubber', year: '1906', kind: 'primaria', note: 'Campanie de opinie care a dus la anexarea Congoului de către statul belgian, în 1908.' },
    { author: 'V. I. Lenin', title: 'Imperialismul, stadiul cel mai înalt al capitalismului', year: '1916', kind: 'primaria', note: 'Preface analiza lui Hobson în teorie a împărțirii lumii între monopoluri și a războiului interimperialist.' },
    { author: 'Joseph Schumpeter', title: 'Sociologia imperialismului', year: '1919', kind: 'primaria', note: 'Imperialismul ca atavism al unor elite precapitaliste, nu ca nevoie a capitalismului.' },
    { author: 'John Gallagher și Ronald Robinson', title: 'The Imperialism of Free Trade', year: '1953', kind: 'estudio', note: 'Introduce imperiul neoficial și continuitatea stăpânirii dinainte și de după împărțirea formală.' },
    { author: 'Ronald Robinson și John Gallagher', title: 'Africa and the Victorians', year: '1961', kind: 'estudio', note: 'Mintea oficială și criza de la periferie drept motoare ale ocupării Egiptului și ale împărțirii Africii.' },
    { author: 'Hans-Ulrich Wehler', title: 'Bismarck und der Imperialismus', year: '1969', kind: 'estudio', note: 'Socialimperialism: expansiunea externă ca instrument de stabilizare internă în Germania.' },
    { author: 'David K. Fieldhouse', title: 'Economics and Empire', year: '1973', kind: 'estudio', note: 'Desface potrivirea dintre fluxurile de investiții și teritoriile anexate, pe care teza lui Lenin ar cere-o.' },
    { author: 'Edward Said', title: 'Orientalism', year: '1978', kind: 'estudio', note: 'Cunoașterea despre Orient ca parte a mecanismului de dominație. Originea studiilor postcoloniale.' },
    { author: 'Daniel Headrick', title: 'The Tools of Empire', year: '1981', kind: 'estudio', note: 'Chinina, vaporul fluvial, telegraful și pușca cu încărcare pe la culată drept condiții materiale ale cuceririi târzii.' },
    { author: 'Lance Davis și Robert Huttenback', title: 'Mammon and the Pursuit of Empire', year: '1986', kind: 'estudio', note: 'Contabilitatea imperiului britanic: cost socializat, câștig strâns în mâinile unei elite investitoare.' },
    { author: 'Mahmood Mamdani', title: 'Citizen and Subject', year: '1996', kind: 'estudio', note: 'Despotismul descentralizat și inventarea colonială a autorității tradiționale ca moștenire postcolonială.' },
    { author: 'Adam Hochschild', title: 'Fantoma regelui Leopold', year: '1998', kind: 'estudio', note: 'Reconstituirea sistemului congolez și a primei campanii internaționale pentru drepturile omului.' },
    { author: 'Mike Davis', title: 'Holocausturile erei victoriene târzii', year: '2001', kind: 'estudio', note: 'El Niño, piața mondială și politica colonială drept cauze împletite ale marilor foamete.' },
    { author: 'Ann Laura Stoler', title: 'Carnal Knowledge and Imperial Power', year: '2002', kind: 'estudio', note: 'Reglementarea intimității, a căsătoriei și a metisajului ca miez al ordinii coloniale.' },
    { author: 'John Darwin', title: 'Visul imperiului', year: '2009', kind: 'estudio', note: 'Istorie comparată a imperiilor eurasiatice, care relativizează caracterul excepțional al cazului european.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Actul de la Berlin fixează regulile împărțirii',
      text: [
        'Articolul 34. Puterea care de acum înainte ia în stăpânire un teritoriu de pe coastele continentului african, aflat în afara posesiunilor ei de acum, va însoți actul respectiv cu o înștiințare adresată celorlalte puteri semnatare, ca să le pună în situația de a-și susține pretențiile.',
        'Articolul 35. Puterile semnatare recunosc obligația de a asigura, în teritoriile ocupate de ele pe coastele continentului african, existența unei autorități îndestulătoare pentru a face respectate drepturile dobândite.',
      ].join('\n\n'),
      source: 'Actul General al Conferinței de la Berlin, 26 februarie 1885.',
      note: 'Versiune proprie după franceză.',
      question: 'Cele două articole reglementează cine pe cine înștiințează. Cui i se adresează acest tratat și cine nu este pomenit niciodată? Ce efect are cerința ocupării efective pentru recunoașterea unei pretenții?',
    },
  ],
  images: [
    {
      alt: 'Caricatură cu Cecil Rhodes înfățișat ca un colos călare peste Africa, de la Cairo la Cape Town',
      caption: 'Colosul din Rodos, caricatură de Edward Linley Sambourne pentru Punch, 10 decembrie 1892.',
    },
    {
      alt: 'Mitralieră veche pe trepied, cu manta cilindrică de răcire și bandă de cartușe',
      caption: 'Maximul, prima mitralieră automată (1884). Împreună cu chinina și cu telegraful, explică de ce împărțirea colonială a fost atât de rapidă.',
    },
    {
      alt: 'Caricatură de epocă, cu mai mulți cârmuitori europeni împărțindu-și o prăjitură care înfățișează un teritoriu',
      caption: 'Caricatură despre Conferința de la Berlin (1884-1885). Niciun african nu a fost de față la împărțirea Africii.',
    },
    {
      alt: 'Fotografia unei mari procesiuni ceremoniale, cu elefanți împodobiți și mulțime pe margini',
      caption: 'Durbarul de la Delhi din 1903, care l-a proclamat pe Eduard al VII-lea împărat al Indiei. Ritualul mogul este refolosit ca să legitimeze stăpânirea britanică.',
    },
  ],
  questions: [
    {
      question: 'Ce înseamnă imperialismul liberului schimb al lui Gallagher și Robinson?',
      options: [
        'Politica vamală britanică de după 1870',
        'Stăpânirea neoficială prin tratate, datorie și presiune navală, fără administrarea teritoriului',
        'Împărțirea înțeleasă a Africii la Conferința de la Berlin',
        'Deschiderea piețelor europene pentru produsele coloniale',
      ],
      explanation: 'Regula lor rezumă logica: comerț neoficial dacă se poate, guvernare formală dacă trebuie. Ce se schimbă pe la 1870 este că neoficialul nu mai garantează accesul.',
    },
    {
      question: 'Ce a stabilit cu adevărat Conferința de la Berlin din 1884-1885?',
      options: [
        'Regulile împărțirii, cu principiul ocupării efective și cu libertatea navigației pe râuri',
        'Împărțirea teritorială concretă a Africii între puteri',
        'Independența statelor africane sub tutelă europeană',
        'Crearea unei administrații internaționale comune a continentului',
      ],
      explanation: 'Cerând prezență administrativă reală pentru recunoașterea unei pretenții, a prefăcut harta într-o cursă de posturi militare și de tratate cu șefi locali.',
    },
    {
      question: 'Potrivit lui Headrick, ce factor sanitar a făcut cu putință pătrunderea europeană în interiorul Africii?',
      options: [
        'Vaccinul împotriva variolei',
        'Producția industrială de chinină și folosirea ei sistematică pentru prevenire',
        'Descoperirea vectorului malariei de către Ross, în 1897',
        'Potabilizarea apei în posturile coloniale',
      ],
      explanation: 'Înainte de chinina preventivă murea mai mult de jumătate dintre europenii care intrau, chiar în primul an. Fără rezolvarea acestei probleme, ocuparea interiorului nu era cu putință.',
    },
    {
      question: 'Care era statutul juridic al Statului Liber Congo între 1885 și 1908?',
      options: [
        'Colonie a Regatului Belgiei, administrată de parlamentul ei',
        'Proprietate personală a lui Leopold al II-lea, recunoscută internațional',
        'Protectorat comun al Belgiei, Franței și Portugaliei',
        'Teritoriu sub mandatul Conferinței de la Berlin',
      ],
      explanation: 'Leopold l-a obținut înfățișându-l drept întreprindere filantropică și antisclavagistă. Belgia l-a anexat abia în 1908, după scandalul cauciucului.',
    },
    {
      question: 'Ce se discută astăzi despre cifra de zece milioane de morți din Congoul lui Leopold?',
      options: [
        'Că sistemul de cote al cauciucului nu a ajuns să fie aplicat',
        'Metoda și mărimea, nu existența sistemului: este o scădere de populație adunată din violență, foamete și boală, greu de măsurat fără recensăminte',
        'Că mutilările ar fi fost o născocire a propagandei britanice',
        'Că mortalitatea a fost cu mult mai mare decât a estimat Hochschild',
      ],
      explanation: 'Vansina și alți demografi insistă că estimarea vine din recensăminte mult mai târzii. Sistemul este documentat chiar de administratorii lui.',
    },
    {
      question: 'Ce s-a întâmplat la Adua, în 1896?',
      options: [
        'Franța și Marea Britanie au fost cât pe ce să intre în război pentru Nilul de Sus',
        'Germania a început înăbușirea răscoalei herero',
        'Etiopia a învins Italia și și-a păstrat independența',
        'Boxerii au asediat cartierul legațiilor',
      ],
      explanation: 'Menelik al II-lea cumpărase armament modern, centralizase țara și folosise rivalitățile europene. Dovedește că avantajul tehnic se putea transmite.',
    },
    {
      question: 'Ce susține teza drenajului a lui Dadabhai Naoroji?',
      options: [
        'Că India a pierdut populație prin emigrarea forțată spre alte colonii',
        'Că India transfera Marii Britanii un venit net permanent prin home charges, datorie și excedent comercial',
        'Că bumbacul indian s-a sfârșit prin istovirea solului',
        'Că Rajul cheltuia mai mult decât încasa și îl ruina pe contribuabilul britanic',
      ],
      explanation: 'Măsurarea se discută. Mai puțin discutabile sunt scăderea părții indiene din manufactura mondială și stagnarea venitului pe locuitor.',
    },
    {
      question: 'Ce deosebește China ca semicolonie de India colonială?',
      options: [
        'Că nu a suferit nicio intervenție militară străină',
        'Că a fost administrată împreună de cele opt puteri, din 1900',
        'Că și-a păstrat controlul asupra tarifelor și al vămilor',
        'Că și-a păstrat suveranitatea formală, pierzându-i conținutul prin tratate inegale, extrateritorialitate și sfere de influență',
      ],
      explanation: 'Nicio putere nu cârmuia China, dar tarifele erau fixate din afară, iar despăgubirile puneau gaj decenii la rând veniturile vamale.',
    },
    {
      question: 'De ce a avut ridicarea Japoniei un efect ideologic atât de mare în Asia?',
      options: [
        'Fiindcă a renunțat să se extindă și a oferit un model pașnic',
        'Fiindcă a dovedit că industrializarea defensivă era cu putință și că imperialismul nu era o însușire rasială europeană',
        'Fiindcă a fost singura țară asiatică ce a primit creștinismul',
        'Fiindcă a dobândit independența fără să își schimbe statul',
      ],
      explanation: 'Victoria asupra Rusiei, în 1905, a fost cea dintâi a unei puteri asiatice asupra uneia europene în război deschis și a răsunat de la Istanbul până la Calcutta.',
    },
    {
      question: 'Ce adaugă Mike Davis la explicarea foametelor din 1876-1902?',
      options: [
        'Că seceta singură ajunge ca să explice mortalitatea',
        'Că scara a atârnat de exportul de grâu în plină lipsă, de neamestecul în prețuri și de fiscalitatea rigidă',
        'Că foametele au fost mai mici decât arătau rapoartele coloniale',
        'Că, în toate cazurile documentate, calea ferată a înrăutățit lipsa',
      ],
      explanation: 'Cadrul lui Amartya Sen sprijină argumentul: o foamete atârnă de accesul la hrană, nu doar de existența ei fizică.',
    },
    {
      question: 'Ce explicație a împărțirii au propus Robinson și Gallagher în 1961?',
      options: [
        'Criza de la periferie și calculul strategic al minții oficiale, nu presiunea investitorilor',
        'Exportul de capital în surplus dinspre metropole',
        'Atavismul unor elite aristocratice fără rost economic',
        'Nevoia de a dezamorsa conflictul de clasă din metropolă',
      ],
      explanation: 'Ocuparea Egiptului, în 1882, pornită de răscoala lui Urabi și de siguranța drumului spre India, este cazul lor de demonstrație.',
    },
    {
      question: 'Ce au conchis Davis și Huttenback, în 1986, despre rentabilitatea imperiului britanic?',
      options: [
        'Că a îmbogățit deopotrivă toate clasele britanice',
        'Că nu l-a despăgubit pe contribuabilul de rând, dar a despăgubit o elită cu bani plasați peste mări',
        'Că a fost ruinător pentru toate grupurile sociale implicate',
        'Că cea mai mare parte a investiției britanice s-a îndreptat spre coloniile tropicale',
      ],
      explanation: 'Apărarea imperială se plătea din impozite generale. Imperiul a lucrat ca un transfer intern: cost socializat, câștig strâns la un loc.',
    },
    {
      question: 'Ce propune Edward Said prin conceptul de orientalism?',
      options: [
        'O metodă filologică de editare a textelor arabe și persane',
        'Că știința occidentală despre Orient a construit un obiect esențializat și neclintit, de nedespărțit de puterea care o finanța',
        'Că literatura de călătorie a fost singurul vehicul al prejudecății coloniale',
        'Că Orientul și Occidentul sunt categorii geografice obiective',
      ],
      explanation: 'A fost discutat pentru felul în care își alege sursele și fiindcă atribuie prea multă coerență unui domeniu divers, și totuși a reorganizat studiile postcoloniale.',
    },
    {
      question: 'Ce rol a avut colaborarea locală în stăpânirea colonială?',
      options: [
        'A fost neînsemnată: administrația europeană cârmuia direct fiecare sat',
        'S-a mărginit la strângerea impozitelor în orașele-port',
        'A fost structurală: câteva mii de europeni puteau cârmui milioane de oameni doar cu prinți, șefi și elite locale aduse înăuntru',
        'A existat doar în India, nu și în Africa subsahariană',
      ],
      explanation: 'Mamdani a analizat reversul: administrația a inventat autorități tradiționale, rămase ca structură de putere moștenită după independență.',
    },
    {
      question: 'Ce s-a petrecut cu herero și cu nama între 1904 și 1908?',
      options: [
        'Au semnat un protectorat negociat cu administrația germană',
        'Au fost ținta unui război de exterminare, cu ordine limpezi, împingere în deșert și lagăre de muncă, recunoscut de Germania drept genocid în 2021',
        'Au emigrat în masă în colonia britanică din Cape',
        'Au învins trupele germane și și-au păstrat teritoriul',
      ],
      explanation: 'Se socotește că a murit în jur de optzeci la sută dintre herero. Ordinul lui von Trotha este unul dintre cele mai limpezi documente coloniale păstrate.',
    },
    {
      question: 'Ce legătură a avut imperialismul cu războiul din 1914?',
      options: [
        'L-a pricinuit direct: crizele coloniale s-au sfârșit în luptă între puteri',
        'L-a pregătit indirect: a făcut obișnuită cursa navală, a întărit blocurile de alianțe și a deprins opinia publică cu un limbaj al luptei între rase și națiuni',
        'L-a întârziat, fiindcă împărțirea Africii a canalizat toate tensiunile până în 1939',
        'Nu a avut nicio legătură: au fost procese de sine stătătoare',
      ],
      explanation: 'Crizele marocane din 1905 și 1911 s-au rezolvat fără război. Efectul a fost cumulativ, nu un declanșator unic.',
    },
  ],
}
