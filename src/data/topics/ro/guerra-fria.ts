import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/guerra-fria.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 13 date, 14 concepte, 3 dezbateri, 22 de surse, un
   document comentat, 5 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const guerraFriaRo: TopicTranslation = {
  title: 'Războiul Rece și decolonizarea',
  description: 'Patruzeci și cinci de ani de înfruntare între două superputeri care nu s-au luptat niciodată între ele și desfacerea, în același timp, a imperiilor coloniale europene.',
  years: '1945–1991',
  summary:
    'Războiul Rece a fost un conflict global care nu i-a pus niciodată față în față pe cei doi protagoniști ai săi. Statele Unite și Uniunea Sovietică și-au disputat ordinea mondială prin alianțe, ajutor economic, propagandă, servicii de informații și războaie purtate prin alții, sub umbra unui arsenal nuclear care făcea de negândit victoria militară. În paralel, și nu întâmplător, imperiile europene s-au destrămat: între 1945 și 1975 s-au născut peste șaptezeci de state, iar cea mai mare parte a planetei și-a schimbat statutul juridic. Cele două procese se încrucișează necontenit, fiindcă superputerile au încercat să captureze decolonizarea, iar noile state au încercat să folosească rivalitatea ca să câștige spațiu propriu. A povesti perioada doar de la Washington și de la Moscova înseamnă a lăsa pe dinafară cea mai mare parte a protagoniștilor ei.',
  keyDates: [
    { date: 'Februarie 1945', event: 'Conferința de la Ialta: înțelegeri despre lumea de după război, despre Polonia și despre intrarea sovietică în războiul din Pacific.' },
    { date: 'Martie 1947', event: 'Doctrina Truman: ajutor pentru Grecia și Turcia și formularea publică a îndiguirii.' },
    { date: '1947–1948', event: 'Planul Marshall, independența și împărțirea Indiei și lovitura de stat comunistă din Cehoslovacia.' },
    { date: '1948–1949', event: 'Blocada și podul aerian al Berlinului, crearea NATO și prima bombă atomică sovietică.' },
    { date: '1949', event: 'Victoria comuniștilor în China și proclamarea Republicii Populare.' },
    { date: '1950–1953', event: 'Războiul din Coreea: prima ciocnire armată la scară mare între blocuri, fără înfruntare directă între superputeri.' },
    { date: 'Aprilie 1955', event: 'Conferința de la Bandung: douăzeci și nouă de state asiatice și africane formulează o poziție proprie.' },
    { date: '1956', event: 'Discursul secret al lui Hrușciov, criza Suezului și zdrobirea revoluției din Ungaria.' },
    { date: 'Octombrie 1962', event: 'Criza rachetelor din Cuba: treisprezece zile pe marginea războiului nuclear.' },
    { date: '1960–1965', event: 'Independența celei mai mari părți a Africii subsahariene. Numai în 1960 se nasc șaptesprezece state.' },
    { date: '1975', event: 'Sfârșitul războiului din Vietnam, Revoluția Garoafelor și Actul Final de la Helsinki.' },
    { date: '1985–1989', event: 'Gorbaciov: perestroika, glasnost, retragerea din Afganistan și renunțarea la doctrina Brejnev.' },
    { date: '1989–1991', event: 'Căderea Zidului, revoluțiile din Europa de Est și destrămarea Uniunii Sovietice.' },
  ],
  sections: [
    {
      title: 'De la Marea Alianță la ruptură',
      body: [
        'Coaliția care a învins Germania era o alianță de conveniență între sisteme incompatibile, iar ruptura ei a început înainte de sfârșitul războiului. La Ialta și la Potsdam s-a convenit ce se putea conveni și s-a amânat restul, mai ales Germania și Polonia. Chestiunea poloneză este prima care se rupe: aliații occidentali cereau alegeri libere, iar Stalin pretindea un guvern prieten pe coridorul prin care Rusia fusese invadată de două ori în treizeci de ani.',
        'Felul în care se priveau unii pe alții s-a înăsprit repede. Telegrama lungă a lui George Kennan, trimisă de la Moscova în 1946, descria Uniunea Sovietică drept o putere expansivă din nesiguranță istorică, pe care trebuia să o îndigui cu fermitate răbdătoare, fără a fi nevoie de război. Răspunsul sovietic, telegrama lui Novikov, descria Statele Unite drept o putere care urmărea stăpânirea lumii, folosindu-se de monopolul atomic. Niciuna dintre cele două citiri nu era absurdă, pornind din propriul punct de plecare.',
        'În 1947 ruptura s-a oficializat. Doctrina Truman a transformat un ajutor concret pentru Grecia și Turcia într-o declarație generală de sprijin pentru popoarele care se împotriveau subjugării; Planul Marshall a oferit treisprezece miliarde de dolari Europei, cu o condiție de coordonare economică pe care URSS a înțeles-o, pe drept, drept un instrument de integrare occidentală, și le-a interzis sateliților săi să participe. Răspunsul a fost Kominformul și sovietizarea grăbită a Europei de Est, cu lovitura de la Praga din 1948 ca punct fără întoarcere.',
        'Germania a fost și problema, și soluția. Unificarea zonelor occidentale și reforma monetară au dus la blocada sovietică a Berlinului, în 1948, căreia i s-a răspuns cu un pod aerian de unsprezece luni, care a aprovizionat două milioane de oameni. Rezultatul a fost consolidarea a două state germane în 1949 și crearea NATO, prima alianță militară pe timp de pace din istoria Statelor Unite. Pactul de la Varșovia a venit în 1955, după intrarea Republicii Federale în NATO.',
        'Anul 1949 a schimbat scara conflictului. Uniunea Sovietică și-a detonat prima bombă atomică, mult mai devreme decât se aștepta la Washington, iar comuniștii au câștigat războiul civil din China. Documentul NSC-68 din 1950 a tradus această alarmă într-un program de reînarmare masivă și într-o citire a conflictului ca înfruntare globală între libertate și sclavie, adică într-un cadru în care orice loc de pe planetă putea fi un front.',
      ].join('\n\n'),
      callout:
        'Nici Washingtonul, nici Moscova nu plănuiau un război în 1947. Ce a fost a fost o spirală în care fiecare măsură defensivă a unei tabere se dovedea, citită din cealaltă, de nedeosebit de o pregătire ofensivă.',
    },
    {
      title: 'Blocuri, Coreea și echilibrul terorii',
      body: [
        'Războiul din Coreea, între 1950 și 1953, a fost prima ciocnire armată la scară mare a conflictului și i-a fixat regulile. O invadare a sudului de către nord, o intervenție americană sub steagul Națiunilor Unite, folosind absența sovietică din Consiliul de Securitate, o contraofensivă care a ajuns până la granița chineză și intrarea masivă a voluntarilor chinezi, care a împins frontul înapoi la paralela 38. Trei milioane de morți și nicio frontieră schimbată, dar și învățătura că escaladarea putea și trebuia oprită.',
        'Cursa înarmării și-a urmat propria logică. Statele Unite au încercat bomba cu hidrogen în 1952, URSS în 1953; au venit bombardierele strategice, apoi rachetele balistice intercontinentale, după Sputnikul din 1957, și în cele din urmă submarinele lansatoare de rachete, care făceau imposibilă distrugerea arsenalului inamic dintr-o primă lovitură. De aici a ieșit distrugerea reciproc asigurată: o situație în care a ataca însemna a te sinucide și în care, paradoxal, vulnerabilitatea reciprocă era temelia stabilității.',
        'Moartea lui Stalin, în 1953, a deschis o etapă diferită. Hrușciov a denunțat cultul personalității în 1956 și a formulat coexistența pașnică, adică competiția fără război între sisteme. Dar aceeași conducere a zdrobit revoluția din Ungaria în toamna aceluiași an, iar contradicția dintre destalinizare și controlul blocului a marcat toată perioada, până la Primăvara de la Praga din 1968 și la doctrina Brejnev care a justificat-o.',
        'Criza rachetelor din Cuba, în octombrie 1962, a fost momentul în care sistemul a fost cel mai aproape să dea greș. Desfășurarea rachetelor sovietice pe insulă răspundea inferiorității strategice și apărării unui aliat amenințat după Golful Porcilor; blocada americană și treisprezece zile de negociere pe muchie s-au încheiat cu retragerea rachetelor în schimbul angajamentului de a nu invada Cuba și al retragerii discrete a rachetelor Jupiter din Turcia. Documentele desecretizate au arătat că au existat incidente pe care niciunul dintre cele două guverne nu le controla, între care un submarin sovietic cu torpilă nucleară.',
        'Urmarea a fost o arhitectură de ținere sub control a riscurilor: telefonul roșu, tratatul de interzicere parțială a experiențelor nucleare din 1963 și tratatul de neproliferare din 1968. Și, totodată, certitudinea, în ambele capitale, că înfruntarea se va purta în alte locuri. Iar acele locuri se iviseră deja în Asia și în Africa.',
      ].join('\n\n'),
    },
    {
      title: 'Decolonizarea',
      body: [
        'În 1945 imperiile europene cârmuiau o treime din omenire; în 1975 nu mai rămăsese aproape nimic. Războiul fusese acceleratorul: a distrus prestigiul metropolelor, le-a silit să mobilizeze trupe și resurse coloniale promițând răsplată și a lăsat Marea Britanie și Franța ruinate în fața a două superputeri care, din motive diferite, erau retoric anticoloniale.',
        'Asia a fost cea dintâi. India și-a câștigat independența în 1947, după decenii de mobilizare a Congresului, cu o împărțire care a produs între unu și două milioane de morți și paisprezece milioane de strămutați și a cărei trasare grăbită naște conflicte și azi. Indonezia a smuls independența Țărilor de Jos în 1949, după patru ani de război. Indochina s-a prefăcut într-un război lung: Viet Minh a învins Franța la Dien Bien Phu în 1954, iar împărțirea provizorie a țării a deschis ușa intervenției americane.',
        'Africa și-a trăit decolonizarea mai ales între 1957 și 1965. Ghana lui Nkrumah a deschis drumul în 1957, iar numai în 1960 s-au născut șaptesprezece state. Acolo unde erau coloniști europeni așezați, procesul a fost violent: războiul din Algeria, între 1954 și 1962, a costat sute de mii de morți, a folosit tortura ca metodă și a doborât, pe deasupra, a Patra Republică franceză; Kenya, Angola, Mozambic și Rhodesia au urmat drumuri la fel de sângeroase. Portugalia și-a părăsit coloniile abia după revoluția din 1974, stârnită în bună parte de uzura acelor războaie.',
        'Independența politică nu a rezolvat dependența economică. Noile state au moștenit frontiere trasate la Berlin, economii rânduite ca să exporte una sau două materii prime, administrații firave și armate care au învățat repede să dea lovituri de stat. Kwame Nkrumah a numit neocolonialism această situație: suveranitate formală, cu deciziile economice luate în altă parte. Frantz Fanon, din războiul Algeriei, a scris despre violența colonială și despre riscul ca o burghezie națională să ia locul colonizatorului fără a schimba structura.',
        'Conferința de la Bandung din 1955 a adunat douăzeci și nouă de state asiatice și africane și a formulat o poziție proprie: anticolonialism, suveranitate, coexistență și dezvoltare. De acolo a ieșit Mișcarea de Nealiniere, cu Nehru, Nasser, Tito, Sukarno și Nkrumah. Nu a fost neutralitate, ci o încercare de a preface rivalitatea superputerilor în spațiu de manevră, și adesea a mers: Egiptul a finanțat barajul de la Assuan cu bani sovietici, după ce Statele Unite și-au retras oferta.',
      ].join('\n\n'),
      callout:
        'Decolonizarea nu a fost o îngăduință binevoitoare a metropolelor și nici un simplu efect al Războiului Rece: a fost rodul unor mobilizări anticoloniale organizate de decenii, care au folosit o conjunctură internațională prielnică.',
    },
    {
      title: 'Lumea a Treia ca teatru de război',
      body: [
        'Odd Arne Westad a propus citirea Războiului Rece dinspre sud, nu dinspre Europa, iar schimbarea de unghi este hotărâtoare. În Europa, linia din 1945 nu s-a mișcat și nu a fost război; în afara ei au fost intervenții, lovituri de stat și conflicte care au costat milioane de vieți. Iran în 1953, Guatemala în 1954, Congo în 1960 cu asasinarea lui Lumumba, Chile în 1973: lista guvernelor doborâte cu participarea serviciilor de informații occidentale este lungă, iar lista sovietică din propria sferă este și ea lungă.',
        'Vietnamul a fost cazul extrem. Statele Unite au moștenit conflictul de la Franța, au susținut un regim sud-vietnamez fără bază socială proprie, au escaladat până la peste jumătate de milion de soldați și au aruncat asupra Indochinei mai multe bombe decât toate cele din Al Doilea Război Mondial. Au pierdut cincizeci și opt de mii de oameni, au ucis între unu și trei milioane de vietnamezi și au ieșit învinse în 1975. Prețul intern a fost uriaș: fractură socială, criză de încredere în instituții și o limită politică durabilă pusă intervenției militare.',
        'Cuba arată cealaltă față: o revoluție națională proprie, aliniată la Moscova abia după aceea, nu dinainte, care a trimis trupe în Angola și în Etiopia cu o agendă internaționalistă ce nu se potrivea întotdeauna cu cea sovietică. Ideea că în sud conflictele erau simple marionete ale superputerilor nu rezistă la cercetarea arhivelor: actorii locali aveau proiecte proprii și adesea și-au tras după ei protectorii, mai degrabă decât invers.',
        'Orientul Mijlociu a îmbinat decolonizarea, conflictul arabo-israelian și petrolul. Suezul, în 1956, a dovedit că Marea Britanie și Franța nu mai puteau acționa fără încuviințarea Washingtonului; războaiele din 1967 și 1973 au reașezat regiunea și au produs criza petrolului, care a înmulțit de patru ori prețul țițeiului și a pus capăt lungii creșteri postbelice din Occident. Revoluția iraniană din 1979 a adus un actor care nu încăpea în niciunul dintre cele două blocuri.',
        'China merită un capitol aparte, fiindcă a spart bipolaritatea. Ruptura chino-sovietică, desăvârșită pe la 1960 din pricina unor deosebiri ideologice, de conducere și de frontieră, a ajuns să producă ciocniri armate în 1969. Și a deschis ușa călătoriei lui Nixon la Beijing, în 1972, una dintre cele mai pline de urmări manevre diplomatice ale secolului, care a prefăcut un conflict în doi într-un triunghi și a apăsat Moscova din două părți.',
      ].join('\n\n'),
    },
    {
      title: 'Destindere și al Doilea Război Rece',
      body: [
        'Destinderea anilor șaptezeci a fost o încercare de a administra rivalitatea, nu de a o înlătura. A cuprins acordurile SALT privind armele strategice, recunoașterea reciprocă a celor două Germanii, împinsă înainte de Ostpolitik-ul lui Brandt, și Actul Final de la Helsinki din 1975, care a consfințit frontierele europene în schimbul unui capitol despre drepturile omului, pe care Moscova l-a semnat crezând că e retoric.',
        'Acel capitol a avut urmări neprevăzute. Grupuri precum Carta 77 cehoslovacă sau comitetele Helsinki din URSS au folosit un text semnat de propriile lor guverne ca să ceară respectarea lui, ceea ce a dat disidenței un temei legal și o vizibilitate internațională pe care nu le avusese până atunci. Solidaritatea din Polonia, cu zece milioane de membri în 1980, a arătat ce putea crește în acea crăpătură, chiar dacă a fost zdrobită prin legea marțială în 1981.',
        'Destinderea s-a rupt la sfârșitul deceniului. Invadarea sovietică a Afganistanului, în decembrie 1979, a deschis un război de zece ani care a sfârșit prin a fi Vietnamul sovietic, cu o insurgență finanțată de Statele Unite, Arabia Saudită și Pakistan. Reagan a mărit cheltuielile militare, a lansat Inițiativa de Apărare Strategică și a ridicat tonul; desfășurarea euro-rachetelor a stârnit cele mai mari manifestații pacifiste din istoria Europei. În 1983 au fost cel puțin două incidente care au fost aproape să ducă la un răspuns nuclear din greșeală.',
        'Economia sovietică încetinea structural din anii șaptezeci: un sistem de planificare incapabil să asimileze revoluția informatică, o agricultură deficitară, o cheltuială militară care înghițea o parte disproporționată din producție și o dependență tot mai mare de exportul de țiței, al cărui preț s-a prăbușit în 1986. Nimic din toate acestea nu cerea de la sine o schimbare de regim, dar închidea putința de a merge mai departe la fel.',
        'Mihail Gorbaciov a venit în 1985 cu gândul de a salva socialismul reformându-l. Perestroika a căutat restructurarea economiei, glasnostul a deschis discuția publică, iar noua gândire în politica externă a renunțat la doctrina Brejnev. În 1987 a semnat cu Reagan tratatul INF, care a desființat o întreagă categorie de rachete; în 1989 a retras trupele din Afganistan și le-a spus limpede guvernelor din Europa de Est că nu vor mai fi tancuri sovietice care să le susțină.',
      ].join('\n\n'),
      callout:
        'Capitolul despre drepturile omului de la Helsinki, socotit de Moscova un preț mărunt, a ajuns instrumentul legal cu care disidența din Est le-a cerut socoteală propriilor guverne.',
    },
    {
      title: '1989, 1991 și bilanțul',
      body: [
        'Anul 1989 a fost un lanț de evenimente petrecute în câteva luni: alegeri semilibere în Polonia, cu victoria Solidarității, deschiderea frontierei ungare, manifestații uriașe la Leipzig și la Praga, căderea Zidului Berlinului la 9 noiembrie, dintr-o îmbinare de presiune populară și încurcătură administrativă, și executarea lui Ceaușescu în decembrie. Excepțional nu a fost că regimurile au căzut, ci că s-a întâmplat aproape fără sânge, iar asta a atârnat de o hotărâre luată dinainte: aceea de a nu interveni.',
        'Uniunea Sovietică s-a destrămat doi ani mai târziu, pe alt drum. Reformele au dezlănțuit forțe centrifuge în republicile baltice, în Caucaz și mai ales în Rusia, unde Elțîn a folosit suveranitatea rusă ca pârghie împotriva centrului. Lovitura de stat din august 1991, dată de o parte a aparatului, a eșuat în trei zile și a lichidat ce mai rămăsese din autoritatea partidului și a lui Gorbaciov însuși. În decembrie, conducătorii Rusiei, Ucrainei și Belarusului au desființat URSS.',
        'De ce s-a prăbușit este o discuție deschisă. O poziție pune deznodământul pe seama presiunii americane și a cheltuielii militare cu care URSS nu se putea măsura. Alta subliniază epuizarea structurală a modelului, încă din anii șaptezeci. A treia, apărată printre alții de Stephen Kotkin și de Archie Brown, arată spre voința lui Gorbaciov: hotărârea lui de a nu folosi forța a prefăcut o criză într-o destrămare pașnică, iar fără ea deznodământul ar fi fost cu totul altul.',
        'Decolonizarea a lăsat un bilanț la fel de încurcat. S-a pus capăt dominației formale și s-a născut un sistem internațional cu peste o sută cincizeci de state; au rămas însă frontiere artificiale, economii dependente, războaie civile hrănite din afară și o datorie care a apăsat dezvoltarea. Studiile postcoloniale, de la Edward Said încoace, au insistat pe deasupra asupra dăinuirii unor structuri culturale și de cunoaștere care au supraviețuit coborârii steagurilor.',
        'Războiul Rece a lăsat drept moștenire proliferarea nucleară, o rețea de alianțe încă în picioare, un continent european împărțit, care s-a recompus în decenii, și instalarea durabilă a ideii că ordinea internațională se hotărăște între puțini. Faptul că patruzeci și cinci de ani de înfruntare între puteri nucleare s-au încheiat fără un foc de armă între ele este un rezultat pe care nicio teorie nu îl prevedea și care încă cere o explicație.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Îndiguire', definition: 'Strategie formulată de Kennan în 1946: oprirea expansiunii sovietice cu fermitate răbdătoare, fără a căuta războiul, așteptând transformarea internă a adversarului.' },
    { term: 'Doctrina Truman', definition: 'Declarație din 1947 de sprijin american pentru popoarele care se împotrivesc subjugării. Preface un ajutor concret într-un angajament global.' },
    { term: 'Planul Marshall', definition: 'Program de ajutor economic pentru Europa, din 1948, condiționat de coordonarea între beneficiari. URSS l-a înțeles ca integrare occidentală și l-a interzis sateliților săi.' },
    { term: 'Distrugere reciproc asigurată', definition: 'Situație în care ambele tabere păstrează capacitatea de ripostă după o primă lovitură, astfel încât a ataca înseamnă a te sinucide.' },
    { term: 'Coexistență pașnică', definition: 'Doctrină formulată de Hrușciov în 1956: competiție între sisteme fără război direct, compatibilă cu ținerea în frâu, prin arme, a propriului bloc.' },
    { term: 'Doctrina Brejnev', definition: 'Justificarea intervenției în orice țară socialistă unde socialismul ar fi amenințat. Formulată după Primăvara de la Praga din 1968.' },
    { term: 'Război prin procură', definition: 'Conflict între terți înarmați și finanțați de superputeri, care evită ciocnirea directă dintre ele și mută costul în scena locală.' },
    { term: 'Bandung', definition: 'Conferința din 1955 a douăzeci și nouă de state asiatice și africane. Originea Mișcării de Nealiniere și a unei agende proprii a sudului.' },
    { term: 'Nealiniere', definition: 'Poziția de a nu intra în niciunul dintre cele două blocuri. Nu a fost neutralitate pasivă, ci un fel de a negocia spațiu față de amândouă.' },
    { term: 'Neocolonialism', definition: 'Termenul lui Nkrumah pentru suveranitatea formală însoțită de dependență economică și de decizii luate în afara țării.' },
    { term: 'Destindere', definition: 'Fază a anilor șaptezeci în care rivalitatea este administrată prin acorduri de control al armelor și prin recunoașterea reciprocă a statu-quoului european.' },
    { term: 'Actul de la Helsinki', definition: 'Acord din 1975 care a consfințit frontierele europene și a cuprins un capitol despre drepturile omului, folosit de disidența din Est drept temei legal.' },
    { term: 'Perestroika', definition: 'Restructurare economică și politică începută de Gorbaciov din 1985, ca să reformeze sistemul sovietic fără a-l părăsi.' },
    { term: 'Glasnost', definition: 'Deschidere informativă, care a îngăduit discutarea publică a istoriei și a problemelor țării. A erodat legitimitatea sistemului mai repede decât se prevedea.' },
  ],
  debates: [
    {
      question: 'Cine a provocat Războiul Rece?',
      positions: [
        {
          school: 'Ortodoxă (istoriografia americană a anilor cincizeci)',
          argument:
            'Expansiunea sovietică peste Europa de Est, impunerea unor regimuri satelit și lovitura de la Praga au silit Occidentul la un răspuns defensiv, pe care nu îl căutase.',
        },
        {
          school: 'Revizionistă (Williams, 1959; Kolko)',
          argument:
            'Statele Unite aveau nevoie de piețe deschise și de stabilitate capitalistă globală. Planul Marshall și monopolul atomic au fost instrumente ale unei expansiuni economice pe care Moscova a perceput-o corect ca amenințare.',
        },
        {
          school: 'Postrevizionistă și de arhivă (Gaddis; Leffler; Zubok și Pleshakov)',
          argument:
            'A fost o spirală de percepții, în care fiecare măsură defensivă se dovedea de nedeosebit de una ofensivă. Arhivele sovietice arată un Stalin prudent și, totodată, hotărât să își asigure o sferă de securitate.',
        },
      ],
      state:
        'Deschiderea arhivelor a mutat întrebarea de la vină la mecanisme: cum au clădit două puteri fără plan de război o înfruntare de patruzeci și cinci de ani.',
    },
    {
      question: 'Ce explică sfârșitul imperiilor coloniale?',
      positions: [
        {
          school: 'Presiunea de jos',
          argument:
            'Mișcările anticoloniale se organizau de decenii, au mobilizat milioane de oameni și au ridicat costul dominației până la a o face imposibilă. Independența a fost smulsă, nu dăruită.',
        },
        {
          school: 'Calculul metropolei (Darwin; Louis și Robinson)',
          argument:
            'Metropolele, ruinate și presate de Washington, au hotărât că imperiul formal nu mai merită și au căutat să păstreze influența economică, trecând altora costul administrativ.',
        },
        {
          school: 'Conjunctura internațională (Westad, 2005)',
          argument:
            'Războiul Rece a creat un spațiu în care mișcările anticoloniale au găsit protectori, foruri și legitimitate și, în același timp, le-a prefăcut țările în scene ale unei dispute străine.',
        },
      ],
      state:
        'Predomină o explicație combinată, care ține seama de inițiativa anticolonială fără a trece cu vederea contextul internațional și care studiază fiecare caz în parte, în loc să caute un tipar unic.',
    },
    {
      question: 'De ce s-a prăbușit Uniunea Sovietică?',
      positions: [
        {
          school: 'Victoria presiunii occidentale',
          argument:
            'Reînarmarea anilor optzeci și Inițiativa de Apărare Strategică i-au impus Moscovei o cursă pe care economia ei nu o putea susține și au silit-o la reforme care au scăpat sistemul de sub control.',
        },
        {
          school: 'Epuizare structurală',
          argument:
            'Modelul încetinea din anii șaptezeci: planificare incapabilă să asimileze informatica, agricultură deficitară și dependență de prețul țițeiului, care s-a prăbușit în 1986.',
        },
        {
          school: 'Voința lui Gorbaciov (Brown, 1996; Kotkin, 2001)',
          argument:
            'Criza nu impunea deznodământul. Hotărârea de a reforma și de a nu folosi forța, în bloc și în propria țară, a prefăcut un declin într-o destrămare pașnică.',
        },
      ],
      state:
        'Istoriografia tinde să îmbine declinul structural cu întâmplarea deciziilor din 1985-1991 și să respingă deopotrivă determinismul economic și povestea unei victorii planificate.',
    },
  ],
  sources: [
    { author: 'George Kennan', title: 'Telegrama lungă și articolul Izvoarele purtării sovietice', year: '1946–1947', kind: 'primaria', note: 'Formularea originală a îndiguirii, de către diplomatul care avea să critice apoi militarizarea ei.' },
    { author: 'Winston Churchill', title: 'Discursul despre cortina de fier, la Fulton', year: '1946', kind: 'primaria', note: 'Fixează în limbajul public imaginea unei Europe împărțite în două.' },
    { author: 'Harry Truman', title: 'Mesaj către Congres despre Grecia și Turcia', year: '1947', kind: 'primaria', note: 'Textul fondator al doctrinei Truman și al citirii globale a conflictului.' },
    { author: 'Consiliul Securității Naționale al Statelor Unite', title: 'NSC-68', year: '1950', kind: 'primaria', note: 'Document intern care propune reînarmarea masivă și definește conflictul în termeni morali absoluți.' },
    { author: 'Conferința Asiatico-Africană', title: 'Comunicatul final de la Bandung', year: '1955', kind: 'primaria', note: 'Zece principii de coexistență și anticolonialism, formulate de țările sudului însele.' },
    { author: 'Nikita Hrușciov', title: 'Discursul secret la Congresul al XX-lea', year: '1956', kind: 'primaria', note: 'Denunțarea cultului personalității. A deschis destalinizarea și a destabilizat blocul.' },
    { author: 'Frantz Fanon', title: 'Osândiții pământului', year: '1961', kind: 'primaria', note: 'Analiza violenței coloniale și avertisment despre o burghezie națională care ia locul colonizatorului fără a schimba structura.' },
    { author: 'Kwame Nkrumah', title: 'Neocolonialismul, ultima etapă a imperialismului', year: '1965', kind: 'primaria', note: 'Formulează conceptul de suveranitate formală cu dependență economică reală.' },
    { author: 'Conferința pentru Securitate și Cooperare în Europa', title: 'Actul Final de la Helsinki', year: '1975', kind: 'primaria', note: 'Frontiere în schimbul drepturilor omului. Al treilea coș al său a ajuns unealtă a disidenței.' },
    { author: 'Václav Havel', title: 'Puterea celor fără putere', year: '1978', kind: 'primaria', note: 'Eseu despre viața în minciună sub socialismul real și despre împotrivirea de fiecare zi.' },
    { author: 'Mihail Gorbaciov', title: 'Perestroika', year: '1987', kind: 'primaria', note: 'Expunerea programului reformator de către autorul lui, cu intenția declarată de a salva socialismul.' },
    { author: 'William Appleman Williams', title: 'Tragedia diplomației americane', year: '1959', kind: 'estudio', note: 'Originea curentului revizionist privitor la rolul economic al Statelor Unite în conflict.' },
    { author: 'Edward Said', title: 'Orientalism', year: '1978', kind: 'estudio', note: 'Analizează cum cunoașterea despre Orient a construit și a susținut dominația. Temelia studiilor postcoloniale.' },
    { author: 'John Lewis Gaddis', title: 'Statele Unite și originile Războiului Rece', year: '1972', kind: 'estudio', note: 'Sinteză postrevizionistă despre percepțiile reciproce și despre mecanica spiralei.' },
    { author: 'Melvyn Leffler', title: 'A Preponderance of Power', year: '1992', kind: 'estudio', note: 'Studiu al securității naționale americane, care reconstituie deciziile fără a le pune pe seama unei singure cauze.' },
    { author: 'Archie Brown', title: 'Factorul Gorbaciov', year: '1996', kind: 'estudio', note: 'Apără greutatea hotărâtoare a deciziilor ultimului conducător sovietic în deznodământul pașnic.' },
    { author: 'Vladislav Zubok și Constantine Pleshakov', title: 'Inside the Kremlins Cold War', year: '1996', kind: 'estudio', note: 'Reconstituirea politicii sovietice cu arhive deschise, de la Stalin la Hrușciov.' },
    { author: 'Stephen Kotkin', title: 'Armageddon Averted', year: '2001', kind: 'estudio', note: 'Explică destrămarea sovietică drept o prăbușire instituțională relativ ordonată, nu drept o revoluție.' },
    { author: 'Odd Arne Westad', title: 'Războiul Rece global', year: '2005', kind: 'estudio', note: 'Mută centrul povestirii în Lumea a Treia, unde conflictul a costat milioane de vieți.' },
    { author: 'Tony Judt', title: 'Epoca postbelică', year: '2005', kind: 'estudio', note: 'Istorie a Europei de după 1945, care integrează cele două jumătăți ale continentului într-o singură relatare.' },
    { author: 'Frederick Cooper', title: 'Africa since 1940', year: '2002', kind: 'estudio', note: 'Decolonizarea africană privită dinspre societățile africane, nu dinspre metropole.' },
    { author: 'Eric Hobsbawm', title: 'Istoria secolului XX', year: '1994', kind: 'estudio', note: 'Sinteză a secolului scurt, cu Războiul Rece și decolonizarea tratate ca procese ale aceleiași perioade.' },
  ],
  documents: [
    {
      section: 0,
      title: 'Churchill dă un nume cortinei de fier',
      text: [
        'De la Stettin, la Marea Baltică, până la Trieste, la Adriatica, s-a lăsat peste continent o cortină de fier.',
        'În spatele acelei linii se află toate capitalele vechilor state din Europa Centrală și de Est. Varșovia, Berlin, Praga, Viena, Budapesta, Belgrad, București și Sofia.',
        'Nu cred că Rusia sovietică dorește războiul. Ceea ce dorește sunt roadele războiului și întinderea nesfârșită a puterii și a doctrinelor sale.',
      ].join('\n\n'),
      source: 'Winston Churchill, discurs la Fulton, Missouri, 5 martie 1946.',
      note: 'Versiune proprie după engleză. Churchill nu mai era prim-ministru când l-a rostit.',
      question: 'Discursul este din 1946, înainte de doctrina Truman și de Planul Marshall. Descrie o situație sau ajută la crearea ei? Gândește-te cum a putut fi citit la Moscova.',
    },
  ],
  images: [
    {
      alt: 'Muncitori care ridică un zid din blocuri de beton pe o stradă din Berlin, sub paza soldaților',
      caption: 'Construirea Zidului Berlinului, noiembrie 1961.',
    },
    {
      alt: 'Oameni urcați pe Zidul Berlinului, în fața Porții Brandenburg, înconjurați de mulțime',
      caption: 'Zidul Berlinului în noaptea de 9 noiembrie 1989.',
    },
    {
      alt: 'Fotografia unui hidroavion cu patru motoare, ancorat pe un lac, cu orașul în fundal',
      caption: 'Podul aerian al Berlinului, 1948. Vreme de unsprezece luni, două milioane de oameni au fost aprovizionați pe calea aerului, în loc să fie forțată blocada pe uscat.',
    },
    {
      alt: 'Fotografia unui bărbat slab, în dhoti, mergând pe malul mării, însoțit de o mulțime',
      caption: 'Gandhi la Dandi, la capătul Marșului Sării, aprilie 1930. A strânge sare din mare încălca monopolul fiscal britanic: nesupunere civică gândită anume ca să fie fotografiată.',
    },
    {
      alt: 'Fotografie aeriană de recunoaștere, alb-negru, cu vehicule și structuri lunguiețe însemnate cu etichete',
      caption: 'Fotografie de recunoaștere deasupra Cubei, octombrie 1962. Treisprezece zile în care descurajarea nucleară a fost mai aproape ca oricând de a da greș.',
    },
  ],
  questions: [
    {
      question: 'În ce consta îndiguirea formulată de Kennan în 1946?',
      options: [
        'În atacarea preventivă a URSS, folosind monopolul atomic',
        'În oprirea expansiunii sovietice cu fermitate răbdătoare, fără a căuta războiul, așteptând transformarea ei internă',
        'În împărțirea Germaniei în patru zone de ocupație permanente',
        'În retragerea trupelor americane din Europa',
      ],
      explanation: 'Kennan însuși a criticat mai apoi militarizarea ideii sale în documente precum NSC-68.',
    },
    {
      question: 'De ce le-a interzis URSS sateliților săi să participe la Planul Marshall?',
      options: [
        'Fiindcă ajutorul era rezervat țărilor învingătoare',
        'Fiindcă cerința lui de coordonare economică funcționa ca instrument de integrare occidentală',
        'Fiindcă suma oferită era simbolică',
        'Fiindcă cerea desființarea prealabilă a partidelor comuniste',
      ],
      explanation: 'Răspunsul a fost Kominformul și sovietizarea grăbită a Europei de Est, cu lovitura de la Praga din 1948 ca punct fără întoarcere.',
    },
    {
      question: 'Ce evenimente din 1949 au schimbat scara conflictului?',
      options: [
        'Războiul din Coreea și crearea Pactului de la Varșovia',
        'Prima bombă atomică sovietică și victoria comuniștilor în China',
        'Criza Suezului și revoluția din Ungaria',
        'Lansarea Sputnikului și construirea Zidului',
      ],
      explanation: 'Acea alarmă s-a tradus în NSC-68, din 1950, care a definit conflictul ca global și a prefăcut orice loc de pe planetă într-un front cu putință.',
    },
    {
      question: 'Ce învățătură a lăsat războiul din Coreea despre mersul conflictului?',
      options: [
        'Că superputerile s-ar lupta direct de îndată ce s-ar ivi prilejul',
        'Că escaladarea putea și trebuia oprită: trei milioane de morți și nicio frontieră schimbată',
        'Că armele nucleare urmau să fie folosite în chip obișnuit',
        'Că Națiunile Unite erau în stare să impună pacea de unele singure',
      ],
      explanation: 'Intrarea voluntarilor chinezi a împins frontul înapoi la paralela 38 și a fixat regulile nescrise ale înfruntării.',
    },
    {
      question: 'Ce este distrugerea reciproc asigurată?',
      options: [
        'Planul de apărare civilă în fața unui atac nuclear',
        'Situația în care ambele tabere păstrează capacitatea de ripostă, astfel încât a ataca înseamnă a te sinucide',
        'Tratatul care a interzis experiențele nucleare în atmosferă',
        'Doctrina primei lovituri, adoptată de NATO în 1957',
      ],
      explanation: 'Vulnerabilitatea reciprocă, asigurată mai ales de submarinele lansatoare de rachete, a devenit, paradoxal, temelia stabilității.',
    },
    {
      question: 'Cum s-a rezolvat criza rachetelor din Cuba, în 1962?',
      options: [
        'Prin invadarea americană a insulei',
        'Prin retragerea rachetelor, în schimbul angajamentului de a nu invada Cuba și al retragerii discrete a rachetelor Jupiter din Turcia',
        'Prin trecerea Cubei sub administrarea Națiunilor Unite',
        'Printr-un ultimatum sovietic pe care Statele Unite l-au primit fără nimic în schimb',
      ],
      explanation: 'Documentele desecretizate arată incidente pe care niciun guvern nu le controla, între care un submarin sovietic cu torpilă nucleară.',
    },
    {
      question: 'Ce factor a grăbit decolonizarea după 1945?',
      options: [
        'Hotărârea Națiunilor Unite de a desființa imperiile prin vot',
        'Războiul, care a distrus prestigiul și resursele metropolelor și a mobilizat coloniile cu promisiuni de răsplată',
        'Retragerea de bunăvoie a Marii Britanii din toate posesiunile ei, în 1946',
        'Interzicerea comerțului colonial, impusă de Planul Marshall',
      ],
      explanation: 'La asta s-a adăugat faptul că cele două superputeri care se ridicau erau, din motive diferite, retoric anticoloniale.',
    },
    {
      question: 'Ce a caracterizat decolonizările cele mai violente?',
      options: [
        'Lipsa unor partide naționaliste organizate',
        'Prezența unor coloniști europeni așezați acolo, ca în Algeria, Kenya sau coloniile portugheze',
        'Lipsa de interes economic a metropolei',
        'Intervenția directă a Uniunii Sovietice',
      ],
      explanation: 'Războiul din Algeria a costat sute de mii de morți, a folosit tortura ca metodă și a doborât, pe deasupra, a Patra Republică franceză.',
    },
    {
      question: 'Ce înseamnă neocolonialismul, în formularea lui Nkrumah?',
      options: [
        'Recucerirea militară a fostelor colonii',
        'Suveranitatea formală însoțită de dependență economică și de decizii luate în afara țării',
        'Ocuparea Africii de către superputeri',
        'Întoarcerea administratorilor europeni ca experți tehnici',
      ],
      explanation: 'Noile state au moștenit frontiere trasate la Berlin, economii de una sau două materii prime și administrații firave.',
    },
    {
      question: 'Ce a fost Mișcarea de Nealiniere?',
      options: [
        'O alianță militară alternativă la NATO și la Pactul de la Varșovia',
        'O încercare de a preface rivalitatea superputerilor în spațiu propriu de manevră, ivită din Bandung',
        'O organizație a țărilor neutre europene',
        'Blocul țărilor care au respins ajutorul economic al ambelor tabere',
      ],
      explanation: 'Nu a fost neutralitate pasivă. Egiptul, de pildă, a finanțat barajul de la Assuan cu bani sovietici, după retragerea ofertei americane.',
    },
    {
      question: 'Ce aduce nou citirea Războiului Rece propusă de Westad?',
      options: [
        'Că întregul conflict s-a hotărât în Europa',
        'Că trebuie citit dinspre sud, unde au fost intervenții și războaie care au costat milioane de vieți, în timp ce linia europeană nu se mișca',
        'Că superputerile își controlau pe deplin aliații locali',
        'Că decolonizarea nu a avut legătură cu înfruntarea bipolară',
      ],
      explanation: 'Arhivele mai arată că actorii locali aveau proiecte proprii și adesea și-au tras după ei protectorii.',
    },
    {
      question: 'Ce urmare a avut ruptura chino-sovietică?',
      options: [
        'Intrarea Chinei în Pactul de la Varșovia',
        'Spargerea bipolarității, cu ciocniri armate în 1969 și călătoria lui Nixon la Beijing în 1972',
        'Unificarea partidelor comuniste asiatice',
        'Sfârșitul ajutorului sovietic pentru Vietnamul de Nord',
      ],
      explanation: 'A prefăcut un conflict în doi într-un triunghi și a îngăduit apăsarea Moscovei din două părți.',
    },
    {
      question: 'Ce efect neprevăzut a avut Actul Final de la Helsinki din 1975?',
      options: [
        'A dus la retragerea sovietică din Europa de Est',
        'Capitolul lui despre drepturile omului a dat disidenței un temei legal semnat de propriile ei guverne',
        'A silit la desființarea Pactului de la Varșovia',
        'A impus alegeri libere în Polonia',
      ],
      explanation: 'Carta 77 și comitetele Helsinki l-au folosit ca să ceară respectarea unui text pe care Moscova îl semnase crezându-l retoric.',
    },
    {
      question: 'Ce probleme economice ducea URSS în spate din anii șaptezeci?',
      options: [
        'O hiperinflație stârnită de cheltuiala pentru consum',
        'Planificare incapabilă să asimileze informatica, agricultură deficitară, cheltuială militară disproporționată și dependență de prețul țițeiului',
        'Pierderea tuturor piețelor externe',
        'Lipsa industriei grele',
      ],
      explanation: 'Prăbușirea prețului petrolului în 1986 a închis calea de a merge mai departe la fel, deși de una singură nu impunea o schimbare de regim.',
    },
    {
      question: 'Ce a făcut cu putință ca revoluțiile din 1989 să fie aproape fără vărsare de sânge?',
      options: [
        'Medierea Națiunilor Unite în fiecare țară',
        'Hotărârea luată dinainte de Gorbaciov de a nu susține cu trupe sovietice guvernele din Europa de Est',
        'Desființarea Pactului de la Varșovia în 1988',
        'Prezența trupelor NATO la graniță',
      ],
      explanation: 'Renunțarea la doctrina Brejnev a fost schimbarea hotărâtoare: excepțional nu a fost că regimurile au căzut, ci că s-a întâmplat fără sânge.',
    },
    {
      question: 'Ce susțin Archie Brown și Stephen Kotkin despre prăbușirea sovietică?',
      options: [
        'Că a fost urmarea de neocolit a cheltuielii militare impuse de Reagan',
        'Că criza nu impunea deznodământul și că hotărârea de a reforma și de a nu folosi forța a produs o destrămare pașnică',
        'Că lovitura de stat din august 1991 a fost pusă la cale din afară',
        'Că sistemul era viabil economic până în 1990',
      ],
      explanation: 'Istoriografia tinde să îmbine declinul structural cu întâmplarea, respingând deopotrivă determinismul economic și povestea unei victorii planificate.',
    },
  ],
}
