import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/gran-guerra.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 14 date, 14 concepte, 3 dezbateri, 24 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const granGuerraRo: TopicTranslation = {
  title: 'Primul Război Mondial',
  description: 'Cum s-a prefăcut o criză diplomatică de cinci săptămâni în patru ani de uzură industrială și a lichidat patru imperii.',
  years: '1914–1918',
  summary:
    'În iulie 1914, niciun guvern european nu voia războiul care a izbucnit în august. Aproape toate erau dispuse să îl riște. Această deosebire rânduiește un secol de discuție istoriografică despre răspunderi, de la teza lui Fritz Fischer despre premeditarea germană până la somnambulii lui Christopher Clark. Ce a urmat nu semăna cu niciun război de dinainte: puterea de foc industrială a anulat manevra, frontul a încremenit trei ani, iar statele au trebuit să mobilizeze economii întregi, nu doar armate. Au murit între nouă și zece milioane de combatanți și un număr asemănător de civili, socotind blocada, genocidul armenilor și epidemia de gripă. Patru imperii au dispărut, iar pacea semnată în 1919 a lăsat deschise aproape toate problemele care aveau să explodeze douăzeci de ani mai târziu.',
  keyDates: [
    { date: '28 iunie 1914', event: 'Gavrilo Princip îl asasinează la Sarajevo pe arhiducele Franz Ferdinand și pe soția lui.' },
    { date: '5 iulie 1914', event: 'Germania îi dă Austro-Ungariei așa-numitul cec în alb: sprijin necondiționat împotriva Serbiei.' },
    { date: '4 august 1914', event: 'Invadarea Belgiei duce Marea Britanie în război și preface un conflict balcanic într-unul european.' },
    { date: 'Septembrie 1914', event: 'Bătălia de pe Marna oprește înaintarea germană și lichidează războiul de mișcare în vest.' },
    { date: '22 aprilie 1915', event: 'Prima folosire în masă a clorului la Ypres. Începe războiul chimic.' },
    { date: '24 aprilie 1915', event: 'Arestarea intelectualilor armeni la Constantinopol: începutul convențional al genocidului armean.' },
    { date: '1916', event: 'Verdun și Somme: două bătălii de uzură, cu peste un milion de pierderi laolaltă.' },
    { date: 'Februarie 1917', event: 'Germania reia războiul submarin fără restricții și primește riscul intrării americane.' },
    { date: '6 aprilie 1917', event: 'Statele Unite declară război Germaniei, după telegrama Zimmermann.' },
    { date: 'Mai-iunie 1917', event: 'Revolte în armata franceză, după ofensiva de la Chemin des Dames.' },
    { date: '8 ianuarie 1918', event: 'Wilson prezintă Cele Paisprezece Puncte: autodeterminare, diplomație deschisă și o ligă a națiunilor.' },
    { date: '3 martie 1918', event: 'Brest-Litovsk: Rusia iese din război, iar Germania mută divizii pe frontul de vest.' },
    { date: 'August-noiembrie 1918', event: 'Ofensiva celor O Sută de Zile. Armistițiu la 11 noiembrie, cu frontul încă pe teritoriu ocupat.' },
    { date: '28 iunie 1919', event: 'Tratatul de la Versailles. Articolul 231 pune pe seama Germaniei răspunderea pentru pierderile aliate.' },
  ],
  sections: [
    {
      title: 'Iulie 1914 și problema răspunderii',
      body: [
        'Sistemul european se încorda de un deceniu: două blocuri de alianțe prefăcute în automatisme, o cursă navală anglo-germană, două crize marocane, două războaie balcanice și un Imperiu Austro-Ungar încredințat că naționalismul sârb îi amenință existența. Nimic din toate acestea nu făcea războiul de neocolit. L-a făcut probabil îmbinarea acestei încordări cu o criză prost gestionată în cinci săptămâni.',
        'Șirul faptelor este cunoscut. După atentatul de la Sarajevo, Viena a cerut și a primit, la 5 iulie, sprijinul necondiționat german, așa-numitul cec în alb. Ultimatumul din 23 iulie a fost scris ca să fie respins; Serbia a primit aproape totul, iar Viena a declarat război oricum. Mobilizarea rusă, generală de la 30 iulie, a pornit mecanismul german, care nu deosebea între a mobiliza și a ataca. La 4 august, invadarea Belgiei a dus Marea Britanie în conflict.',
        'Fritz Fischer a susținut în 1961 că Germania hotărâse conștient războiul ca să atingă obiective de mare putere, sprijinindu-se pe programul din septembrie 1914 al lui Bethmann Hollweg și pe consiliul de război din decembrie 1912. Teza lui a spart consensul german de după război despre alunecarea întâmplătoare și a stârnit cel mai mare conflict istoriografic din Republica Federală. Versiunea tare a premeditării a fost nuanțată; răspunderea principală a Berlinului și a Vienei în escaladare rămâne larg primită.',
        'Christopher Clark a propus în 2012 imaginea contrară: somnambuli care mergeau treji, dar orbi, fără să vadă prăpastia spre care se îndreptau. Împărțirea lui a răspunderilor este mai echilibrată și îi cuprinde și pe ruși, pe francezi și pe sârbi. I s-a obiectat că simetria diluează deosebirea dintre cine forțează criza și cine reacționează și că tratamentul aplicat Serbiei este aspru.',
        'A. J. P. Taylor a adăugat în 1969 un factor material: războiul după orar. Planurile de mobilizare, cu milioane de oameni și mii de trenuri socotite la minut, le impuneau guvernelor un răgaz de decizie de câteva ore. Ele nu țin locul politicii, dar explică de ce, în ultima săptămână din iulie, mașinăria a fost mai iute decât diplomația.',
      ].join('\n\n'),
      callout:
        'Nimeni nu voia exact acest război și aproape toți erau dispuși să îl riște. Discuția despre vină se învârte în jurul acestei deosebiri, nu al unui plan secret.',
    },
    {
      title: 'Eșecul planului și încremenirea frontului',
      body: [
        'Planul german, versiunea schimbată de Moltke cel Tânăr după proiectul lui Schlieffen, miza pe înfrângerea Franței în șase săptămâni, trecând prin Belgia, înainte ca Rusia să își desăvârșească mobilizarea. Era un pariu împotriva ceasului și a geografiei: cerea marșuri de treizeci de kilometri pe zi, atârna de căi ferate care rămâneau în urmă și presupunea că armata franceză se va lăsa învăluită.',
        'A dat greș pe Marna, în septembrie 1914, când aripa dreaptă germană a rămas descoperită, iar rezervele franceze și britanice au contraatacat. A urmat cursa spre mare și, până în decembrie, o linie neîntreruptă de tranșee de la Canalul Mânecii până în Elveția. În est, frontul era mult mai lung și mai mișcător, cu marea victorie germană de la Tannenberg, dar nici acolo nu s-a rezolvat nimic repede.',
        'Cauza adâncă a încremenirii a fost nepotrivirea dintre puterea de foc și mobilitate. Mitraliera, pușca cu repetiție, sârma ghimpată și mai ales artileria cu tragere rapidă făceau asaltul frontal foarte scump, în timp ce atacatorul înainta pe jos, iar apărătorul își aducea rezervele cu trenul. Apărarea avea toate avantajele până la apariția unui vehicul în stare să se miște sub foc, iar acel vehicul încă nu exista.',
        'Artileria a fost arma hotărâtoare a conflictului: a pricinuit în jur de șaptezeci la sută dintre pierderi și a înghițit producția industrială a unor țări întregi. Lipsa proiectilelor a doborât un guvern britanic în 1915 și a dus la crearea unui minister al munițiilor. Armatele au învățat să potrivească focul cu mișcarea prin cortine mobile, tragere corectată din avion și planuri de baterie socotite cu o precizie tot mai mare.',
        'Soluțiile tactice au venit târziu și toate deodată. Germanii au dezvoltat trupele de asalt, care se infiltrau prin punctele slabe în loc să atace în linie; britanicii și francezii au îmbinat tancurile, aviația, artileria tăcută și comunicațiile în ceea ce s-a numit sistemul armelor combinate din 1918. Rezultatul a fost că ultimul an de război a redevenit mișcător, cu înaintări de zeci de kilometri.',
      ].join('\n\n'),
    },
    {
      title: 'Uzura: Verdun, Somme și problema rezistenței',
      body: [
        'Falkenhayn a gândit Verdunul, în februarie 1916, ca pe o bătălie limpede de uzură: atacarea unui punct pe care Franța nu îl putea părăsi din motive de prestigiu și golirea ei de sânge cu artileria. Operațiunea a ținut zece luni, a costat în jur de trei sute de mii de morți de ambele părți și nu a mutat frontul în chip însemnat. Somme, început în iulie, a produs aproape șaizeci de mii de pierderi britanice în prima zi, ziua cea mai costisitoare din istoria armatei britanice.',
        'Acele cifre au dat naștere unei interpretări durabile, aceea a leilor conduși de măgari, care punea măcelul pe seama incompetenței unor generali rămași la cavalerie. Istoriografia militară de mai apoi a nuanțat-o mult. Armatele au învățat repede, în limitele tehnologice ale vremii, fără radio de campanie și fără transport de teren, iar curba de învățare britanică dintre 1916 și 1918 este astăzi un domeniu de studiu bine așezat. Altă chestiune este că acea învățare s-a plătit cu vieți.',
        'Întrebarea care preocupă cel mai mult istoria socială este de ce au continuat soldații să lupte. Un răspuns subliniază constrângerea: curți marțiale, execuții pilduitoare, disciplină și lipsa unei alternative. Altul subliniază consimțământul: Stéphane Audoin-Rouzeau și Annette Becker au apărat existența unei culturi de război, cu ură față de dușman, patriotism interiorizat și consimțământ larg, ceea ce ar explica dăinuirea fără a se face apel doar la frică.',
        'Între cele două stă negocierea tacită. Tony Ashworth a documentat sistemul trăiește și lasă să trăiască din sectoarele liniștite, cu bombardamente rituale la ore fixe și patrule care se ocoleau. Leonard Smith a arătat, în divizia franceză pe care a studiat-o, o negociere necontenită între comandament și trupă despre ce se putea cere. Revoltele franceze din 1917 se potrivesc aici: răsculații nu au părăsit tranșeele și nu au fraternizat, ci au refuzat să atace. A fost o grevă, nu o dezertare.',
        'Rezultatul uzurii nu a fost prăbușirea morală a unei tabere, ci ruina materială a coalițiilor mai slabe. Rusia s-a retras în 1917, după două revoluții, Austro-Ungaria s-a descompus pe naționalități, iar Germania și-a istovit rezervele de oameni după ofensiva eșuată din primăvara lui 1918, tocmai când în Franța soseau două sute de mii de americani pe lună.',
      ].join('\n\n'),
      callout:
        'Revoltele franceze din 1917 au fost o grevă, nu o dezertare: soldații au ținut linia și au refuzat să atace. Pétain a înțeles asta și a schimbat mai degrabă tacticile decât pedepsele.',
    },
    {
      title: 'Război total și frontul de acasă',
      body: [
        'Războiul a silit statele să facă ce niciun guvern liberal nu făcuse pe timp de pace: să fixeze prețuri, să rechiziționeze producție, să îndrume mâna de lucru, să raționalizeze alimentele și să controleze informația. Germania a creat un birou al materiilor prime, condus de Walther Rathenau, încă din august 1914; Marea Britanie a adoptat Defence of the Realm Act și un minister al munițiilor; Franța a adus sindicatele în administrarea producției. Statul secolului XX se naște în bună parte în acei patru ani.',
        'Mobilizarea mâinii de lucru a schimbat munca femeilor. Sute de mii de femei au intrat în industria munițiilor, în transporturi și în administrație. Se cuvine limpezit cât de departe a mers asta: multe lucrau și înainte, în slujbe casnice sau în textile, iar ce s-a schimbat au fost ramura, salariul și vizibilitatea, și o bună parte dintre acele locuri s-a pierdut în 1919. Cu toate acestea, legătura cu extinderea votului femeilor în Marea Britanie, în 1918, și în Germania, în 1919, este greu de trecut cu vederea.',
        'Blocada navală britanică a fost o armă esențială și puțin spectaculoasă. Tăind puterilor centrale importurile de alimente și de îngrășăminte, a produs iarna napilor din 1916-1917 și o subnutriție generalizată; estimările germane de după război vorbeau de câteva sute de mii de morți civili din pricina efectelor ei, cifră discutată, dar grăitoare. Blocada a fost, pe deasupra, ținută până la semnarea păcii, în 1919, ceea ce a atârnat greu în felul în care germanii au privit tratatul.',
        'Propaganda a fost, pentru prima dată, de stat și în masă. Atrocitățile germane din Belgia, din 1914, pe care John Horne și Alan Kramer le-au documentat în 2001 ca fiind reale, deși mult umflate în versiunea propagandistică, au hrănit o imagine a dușmanului care s-a întors apoi împotriva credibilității guvernelor: neîncrederea anilor treizeci în fața știrilor despre persecuții a avut aici un început.',
        'Costul financiar a fost acoperit mai mult cu datorie și inflație decât cu impozite. Toți beligeranții au părăsit convertibilitatea în aur, Europa a trecut de la a fi creditoare la a fi datoare Statelor Unite, iar de aici au ieșit inflația germană din 1923, problema datoriilor interaliate și șubrezenia monetară a anilor douăzeci.',
      ].join('\n\n'),
    },
    {
      title: 'Un război cu adevărat mondial',
      body: [
        'A-l numi mondial nu este o exagerare retorică. Imperiul Otoman a deschis fronturi în Caucaz, în Mesopotamia, în Palestina și la Dardanele; Japonia a ocupat poziții germane în Pacific și în China; au fost campanii în Africa de Est care au ținut și după armistițiu; iar metropolele au recrutat peste patru milioane de oameni din imperiile lor. Numai India a dat în jur de un milion trei sute de mii, iar Franța a mobilizat sute de mii de soldați și de muncitori africani și indochinezi.',
        'Dezastrul de la Gallipoli, în 1915, a însemnat pentru Australia și Noua Zeelandă un moment de întemeiere națională. Campania otomană din est a venit însoțită de genocidul armean, început convențional la 24 aprilie 1915, cu arestarea elitei intelectuale din Constantinopol: deportări, marșuri ale morții și masacre care au costat între opt sute de mii și un milion și jumătate de vieți. Este primul genocid larg documentat al secolului, iar negarea lui oficială de către Turcia rămâne o chestiune diplomatică deschisă.',
        'Războiul pe mare a avut mai puține bătălii decât se aștepta și mai multe urmări. Jutlanda, în 1916, a fost tactic nehotărâtă și strategic prielnică Marii Britanii, care a păstrat blocada. Germania a răspuns cu arma asimetrică: războiul submarin fără restricții, reluat în februarie 1917 cu socoteala de a îngenunchea Marea Britanie înainte ca Statele Unite să poată interveni cu adevărat. Socoteala a dat greș la mustață, iar sistemul de convoaie a micșorat pierderile în chip hotărât.',
        'Statele Unite au intrat în aprilie 1917, împinse de scufundări, de telegrama Zimmermann, care oferea Mexicului teritoriu american în schimbul unei alianțe, și de o expunere financiară uriașă la victoria aliaților. Greutatea lor imediată a fost economică și psihologică mai mult decât militară; greutatea militară a venit în 1918 și a fost hotărâtoare prin efectul asupra socotelii germane a rezervelor.',
        'Rusia a mers pe drumul invers. Revoluția din februarie 1917 l-a doborât pe țar fără a scoate țara din război, iar această continuare a prăbușit guvernul provizoriu. Bolșevicii au luat puterea în octombrie sub lozinca pace, pământ și pâine și au semnat în martie 1918 tratatul de la Brest-Litovsk, care dădea Germaniei teritorii imense. Acel tratat, mult mai aspru decât Versailles, este un reper folositor ca să judeci ce ar fi impus puterile centrale dacă ar fi câștigat.',
      ].join('\n\n'),
      callout:
        'Brest-Litovsk i-a luat Rusiei o treime din populație și cea mai mare parte a industriei. Este cel mai bun argument împotriva ideii că Versailles ar fi fost deosebit de aspru pentru măsura acelei vremi.',
    },
    {
      title: 'Pacea și ce a lăsat deschis',
      body: [
        'Armistițiul din 11 noiembrie 1918 a venit cu frontul pe teritoriu ocupat și fără trupe aliate în Germania. Această împrejurare a hrănit mitul înjunghierii pe la spate, după care armata neînvinsă ar fi fost trădată de cei de acasă, o poveste falsă și hotărâtoare politic în anii care au urmat.',
        'Conferința de la Paris a adunat interese incompatibile: programul lui Wilson, cu autodeterminarea și Liga Națiunilor, cererea franceză de securitate în fața unui vecin cu mai mulți oameni și mai multă industrie și interesul britanic pentru un continent echilibrat și pentru o piață germană refăcută. Versailles a impus pierderi teritoriale, dezarmare, ocuparea Renaniei și despăgubiri a căror sumă a fost lăsată pentru 1921, și a făcut asta după articolul 231 privitor la răspundere, scris drept temei juridic al despăgubirii și citit în Germania ca o osândă morală.',
        'Keynes a publicat în 1919 o pledoarie zdrobitoare despre neputința economică a tratatului, care a fixat opinia anglo-saxonă decenii la rând. Revizuirea de mai apoi, de la Étienne Mantoux la Sally Marks, a arătat că despăgubirile plătite efectiv au fost mult mai mici decât cele nominale, că Germania și-a păstrat neatinsă baza industrială și că problema a fost deopotrivă politică și economică. Formula care rezumă consensul de azi este că tratatul a fost prea aspru ca să împace și prea blând ca să scoată din joc.',
        'Patru imperii au dispărut: cel german, cel austro-ungar, cel rus și cel otoman. În locul lor s-au ivit state naționale în Europa Centrală și de Est, care cuprindeau minorități uriașe, ocrotite prin tratate pe care nimeni nu le-a pus în aplicare, și teritorii din Orientul Apropiat împărțite ca mandate, după linii negociate deja în acordul Sykes-Picot din 1916 și încurcate de declarația Balfour din 1917. Aproape toate conflictele de mai târziu din regiune pornesc de acolo.',
        'Bilanțul uman a fost de vreo nouă-zece milioane de militari morți și de un număr asemănător de civili, dacă se socotesc blocada, masacrele și epidemiile. Gripa numită spaniolă, din 1918 și 1919, a ucis mai mulți oameni decât războiul însuși. George Mosse a propus conceptul de brutalizare ca să explice violența politică de după război: o generație obișnuită cu lupta și-a mutat obiceiurile în stradă, în corpurile de voluntari germane sau în escadrismul italian. Teza se discută, fiindcă țări la fel de lovite, precum Marea Britanie sau Franța, nu au alunecat spre războiul civil, dar rămâne cel mai bun fel de a lega anul 1918 de ce a urmat.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Cec în alb', definition: 'Sprijinul necondiționat german pentru Austro-Ungaria, din 5 iulie 1914, împotriva Serbiei, fără a pune condiții răspunsului austriac.' },
    { term: 'Planul Schlieffen', definition: 'Proiect german de a înfrânge Franța în șase săptămâni, trecând prin Belgia, înainte ca Rusia să își desăvârșească mobilizarea.' },
    { term: 'Război după orar', definition: 'Teza lui A. J. P. Taylor: planurile de mobilizare feroviară micșorau răgazul deciziei politice la câteva ore și au grăbit escaladarea.' },
    { term: 'Război de uzură', definition: 'Strategie care urmărește istovirea resurselor umane și materiale ale dușmanului, în loc să îl învingă prin manevră. Verdunul este formularea ei limpede.' },
    { term: 'Cortină de foc mobilă', definition: 'Baraj de artilerie care înaintează înaintea infanteriei, într-un ritm socotit dinainte. Miezul tacticii aliate din 1917 încolo.' },
    { term: 'Trupe de asalt', definition: 'Unități germane de infiltrare, care căutau punctele slabe în loc să atace în linie. Temelia ofensivei din martie 1918.' },
    { term: 'Război total', definition: 'Mobilizarea economiei, a mâinii de lucru și a opiniei unei țări întregi, cu ștergerea graniței dintre front și spatele frontului.' },
    { term: 'Blocadă navală', definition: 'Tăierea britanică a importurilor puterilor centrale. A produs iarna napilor din 1916-1917 și a fost ținută până la semnarea păcii.' },
    { term: 'Război submarin fără restricții', definition: 'Scufundarea fără avertisment a oricărei nave din zona declarată. Reluat în 1917, primind riscul intrării americane.' },
    { term: 'Trăiește și lasă să trăiască', definition: 'Sistem de armistițiu tacit în sectoarele liniștite ale frontului, documentat de Tony Ashworth: bombardamente rituale și patrule care se ocoleau.' },
    { term: 'Cele Paisprezece Puncte', definition: 'Programul lui Wilson din ianuarie 1918: diplomație deschisă, autodeterminare, libertatea mărilor și o ligă a națiunilor.' },
    { term: 'Articolul 231', definition: 'Clauza de la Versailles care pune pe seama Germaniei răspunderea pentru pierderile aliate. Temei juridic al despăgubirilor, citit ca osândă morală.' },
    { term: 'Înjunghierea pe la spate', definition: 'Mit potrivit căruia armata germană neînvinsă ar fi fost trădată de cei de acasă. Fals și central în politica germană dintre războaie.' },
    { term: 'Brutalizare', definition: 'Concept al lui George Mosse: mutarea violenței și a obiceiurilor frontului în politica civilă de după război.' },
  ],
  debates: [
    {
      question: 'Cine a fost răspunzător de izbucnirea din 1914?',
      positions: [
        {
          school: 'Premeditare germană (Fischer, 1961)',
          argument:
            'Germania a căutat dinadins un război continental ca să atingă obiective de mare putere, așa cum arată consiliul de război din 1912 și programul de obiective din septembrie 1914.',
        },
        {
          school: 'Răspundere împărțită (Clark, 2012)',
          argument:
            'Nu a fost un vinovat, ci somnambuli: conducători treji și orbi totodată, într-un sistem în care Rusia, Franța și Serbia și-au asumat, la rândul lor, riscuri deliberate.',
        },
        {
          school: 'Sistem și orare (Taylor, 1969)',
          argument:
            'Alianțele prefăcute în automatisme și planurile de mobilizare feroviară au lăsat guvernele fără răgaz: mașinăria a fost mai iute decât diplomația.',
        },
      ],
      state:
        'Versiunea tare a lui Fischer nu se susține, dar miezul ei da: Berlinul și Viena au forțat escaladarea. Dezbaterea de azi se ocupă de felul în care se împarte restul răspunderii fără a șterge această asimetrie.',
    },
    {
      question: 'A fost Versailles un tratat prea aspru?',
      positions: [
        {
          school: 'Cartaginez și de neînfăptuit (Keynes, 1919)',
          argument:
            'Despăgubirile treceau peste putința de plată a Germaniei, ciuntirea teritorială și colonială îi ruina economia, iar rezultatul avea să fie instabilitate și revanșism în toată Europa.',
        },
        {
          school: 'Revizuire economică (Mantoux, 1946; Marks, 1978)',
          argument:
            'Germania a plătit o părticică din cifra nominală, și-a păstrat neatinse baza industrială și populația, iar criza ei monetară din 1923 a venit mai degrabă din decizii fiscale interne decât din tratat.',
        },
        {
          school: 'Eșec politic, nu economic',
          argument:
            'Problema nu a fost suma, ci îmbinarea dintre umilirea publică și lipsa unor mecanisme credibile de aplicare. Prea aspru ca să împace, prea blând ca să scoată din joc.',
        },
      ],
      state:
        'Consensul s-a mutat spre a treia poziție. Brest-Litovsk servește drept contrast: a fost mult mai sever, ceea ce relativizează caracterul excepțional al Versailles-ului pentru măsura acelei vremi.',
    },
    {
      question: 'De ce au continuat soldații să lupte patru ani?',
      positions: [
        {
          school: 'Consimțământ și cultură de război (Audoin-Rouzeau și Becker, 2000)',
          argument:
            'A existat o cultură de război interiorizată, cu ură față de dușman și simț al datoriei patriotice, care explică dăinuirea fără a se face apel mai ales la constrângere.',
        },
        {
          school: 'Constrângere și disciplină',
          argument:
            'Curțile marțiale, execuțiile pilduitoare, cenzura corespondenței și lipsa unei alternative realiste au atârnat mai greu decât orice adeziune ideologică.',
        },
        {
          school: 'Negociere tacită (Ashworth, 1980; Smith, 1994)',
          argument:
            'Între ascultare și răzvrătire a fost un spațiu larg: armistiții neoficiale, ritmuri înțelese ale violenței și limite negociate ale a ceea ce putea cere comandamentul.',
        },
      ],
      state:
        'Discuția rămâne vie și cu accent național: consimțământul a fost studiat mai ales în Franța, constrângerea în cazul italian și negocierea în cel britanic. Revoltele din 1917 sunt cazul de probă pentru toate trei.',
    },
  ],
  sources: [
    { author: 'Cancelariile europene', title: 'Documente diplomatice ale crizei din iulie', year: '1914', kind: 'primaria', note: 'Ultimatumul austriac, răspunsul sârb și telegramele de mobilizare. Publicate de guverne ca să se dezvinovățească.' },
    { author: 'Henri Barbusse', title: 'Focul', year: '1916', kind: 'primaria', note: 'Scrisă în timpul războiului de un combatant. Prima mare relatare demitizatoare publicată în plină încleștare.' },
    { author: 'Siegfried Sassoon', title: 'Declarația unui soldat', year: '1917', kind: 'primaria', note: 'Un ofițer decorat denunță prelungirea războiului. Armata a preferat să îl declare bolnav decât să îl judece.' },
    { author: 'Arthur Zimmermann', title: 'Telegramă către ambasada germană din Mexic', year: '1917', kind: 'primaria', note: 'Oferă Mexicului teritoriu american în schimbul unei alianțe. Interceptată și descifrată de britanici.' },
    { author: 'Woodrow Wilson', title: 'Cele Paisprezece Puncte', year: '1918', kind: 'primaria', note: 'Program de pace întemeiat pe autodeterminare și pe securitate colectivă. Fixează așteptările pe care Parisul le-a înșelat.' },
    { author: 'Henry Morgenthau', title: 'Ambassador Morgenthaus Story', year: '1918', kind: 'primaria', note: 'Mărturia ambasadorului american la Constantinopol despre deportările armenilor.' },
    { author: 'Tratatul de la Versailles', title: 'Textul tratatului, mai ales articolul 231', year: '1919', kind: 'primaria', note: 'Răspundere, dezarmare, despăgubiri și frontiere. Citirea lui întreagă dezminte multe versiuni răspândite.' },
    { author: 'John Maynard Keynes', title: 'Urmările economice ale păcii', year: '1919', kind: 'primaria', note: 'Pledoaria unui negociator care a demisionat. A fixat decenii la rând ideea unei păci cartagineze.' },
    { author: 'Ernst Jünger', title: 'Furtuni de oțel', year: '1920', kind: 'primaria', note: 'Războiul ca trăire formatoare și estetică. Contrapunct neapărat trebuincios relatării demitizatoare.' },
    { author: 'Erich Maria Remarque', title: 'Nimic nou pe frontul de vest', year: '1929', kind: 'primaria', note: 'Generația pierdută ca memorie colectivă. Succesul ei internațional a modelat imaginea populară a conflictului.' },
    { author: 'Vera Brittain', title: 'Testamentul tinereții', year: '1933', kind: 'primaria', note: 'Războiul văzut din infirmerie și din spatele frontului, cu doliul ca trăire centrală a unei generații.' },
    { author: 'Fritz Fischer', title: 'Obiectivele de război ale Germaniei imperiale', year: '1961', kind: 'estudio', note: 'Deschide cea mai mare controversă a istoriografiei germane din secolul XX despre răspunderea anului 1914.' },
    { author: 'A. J. P. Taylor', title: 'War by Timetable', year: '1969', kind: 'estudio', note: 'Planurile de mobilizare feroviară ca îngrădire hotărâtoare în ultima săptămână din iulie.' },
    { author: 'Paul Fussell', title: 'Marele Război și memoria modernă', year: '1975', kind: 'estudio', note: 'Cum a refăcut conflictul limbajul, ironia și sensibilitatea literară a secolului XX.' },
    { author: 'John Keegan', title: 'Chipul bătăliei', year: '1976', kind: 'estudio', note: 'Somme văzut din trăirea combatantului. Deschide o formă de istorie militară centrată pe soldat.' },
    { author: 'Sally Marks', title: 'The Myths of Reparations', year: '1978', kind: 'estudio', note: 'Arată distanța dintre cifrele nominale ale despăgubirilor și ce s-a plătit efectiv.' },
    { author: 'Tony Ashworth', title: 'Trench Warfare 1914-1918: The Live and Let Live System', year: '1980', kind: 'estudio', note: 'Sociologia armistițiilor neoficiale dintre unități aflate față în față.' },
    { author: 'George L. Mosse', title: 'Fallen Soldiers', year: '1990', kind: 'estudio', note: 'Mitul trăirii de război și brutalizarea politicii de după război.' },
    { author: 'Jay Winter', title: 'Doliul și memoria', year: '1995', kind: 'estudio', note: 'Monumente, doliu colectiv și forme tradiționale de mângâiere, în fața tezei rupturii moderniste.' },
    { author: 'Stéphane Audoin-Rouzeau și Annette Becker', title: '14-18: retrouver la guerre', year: '2000', kind: 'estudio', note: 'Cultura de război și consimțământul drept chei ale rezistenței combatanților.' },
    { author: 'John Horne și Alan Kramer', title: 'German Atrocities, 1914', year: '2001', kind: 'estudio', note: 'Stabilește ce s-a petrecut cu adevărat în Belgia și cum a deformat propaganda faptele, în ambele direcții.' },
    { author: 'Hew Strachan', title: 'The First World War, vol. I: To Arms', year: '2001', kind: 'estudio', note: 'Sinteză globală, care redă greutatea cuvenită fronturilor din afara Europei și economiei de război.' },
    { author: 'Christopher Clark', title: 'Somnambulii', year: '2012', kind: 'estudio', note: 'Reconstituirea crizei din iulie, cu o împărțire a răspunderilor mai largă decât cea a lui Fischer.' },
    { author: 'Adam Tooze', title: 'Potopul', year: '2014', kind: 'estudio', note: 'Mutarea centrului financiar al lumii în Statele Unite și noua ordine ieșită din 1918.' },
  ],
  documents: [
    {
      section: 5,
      title: 'Articolul 231 din Tratatul de la Versailles',
      text: [
        'Guvernele aliate și asociate declară, iar Germania recunoaște, că Germania și aliații ei sunt răspunzători, ca unii care le-au pricinuit, pentru toate pagubele și pierderile suferite de Guvernele aliate și asociate și de supușii lor ca urmare a războiului care le-a fost impus prin agresiunea Germaniei și a aliaților ei.',
      ].join('\n\n'),
      source: 'Tratatul de la Versailles, articolul 231, 28 iunie 1919.',
      note: 'Versiune proprie după franceză. În Germania a fost cunoscut drept articolul vinovăției de război.',
      question: 'Articolul a fost scris drept temei juridic pentru cererea de despăgubiri, nu ca verdict moral. De ce a fost citit în Germania altfel? Ce urmări a avut această citire în anii următori?',
    },
  ],
  images: [
    {
      alt: 'Soldați britanici într-o tranșee îngustă de pe Somme, unul de gardă cu pușca, ceilalți odihnindu-se rezemați de peretele de pământ',
      caption: 'Tranșee a Regimentului Cheshire pe Somme, 1916.',
    },
    {
      alt: 'Fotografia unor soldați cu cască trecând pe o punte de scânduri printre trunchiuri rupte și cratere pline cu apă',
      caption: 'Pădurea castelului, Ypres, 1917. Artileria a distrus drenajul Flandrei și a prefăcut câmpul într-o mlaștină.',
    },
    {
      alt: 'Pictură panoramică a unui șir de soldați cu ochii legați, înaintând în șir, fiecare cu mâna pe umărul celui din față, printre răniți întinși pe jos',
      caption: 'Gassed, de John Singer Sargent (1919). Pictată la comandă oficială, după o vizită pe front în 1918.',
    },
    {
      alt: 'Fotografia a patru bărbați de vârstă mijlocie, în costume închise la culoare, pozând împreună în aer liber',
      caption: 'Lloyd George, Orlando, Clemenceau și Wilson în 1919. Patru țări au hotărât o pace care reașeza harta a trei continente.',
    },
  ],
  questions: [
    {
      question: 'Ce a fost cecul în alb din iulie 1914?',
      options: [
        'Creditul cu care Marea Britanie și-a finanțat aliații de pe continent',
        'Sprijinul necondiționat german pentru Austro-Ungaria împotriva Serbiei, fără a pune condiții răspunsului ei',
        'Îngăduința rusă dată Serbiei de a respinge ultimatumul',
        'Angajamentul francez de a nu interveni într-un conflict balcanic',
      ],
      explanation: 'Dat la 5 iulie, i-a îngăduit Vienei să scrie un ultimatum gândit ca să fie respins. Este piesa centrală a tezei lui Fischer.',
    },
    {
      question: 'Ce susține Christopher Clark în Somnambulii?',
      options: [
        'Că Germania a planificat războiul încă de la consiliul din 1912',
        'Că războiul a fost un accident, fără vinovați de identificat',
        'Că răspunderea a fost împărțită de conducători treji și, totodată, orbi în fața urmărilor',
        'Că Serbia a fost singura putere care a căutat dinadins conflictul',
      ],
      explanation: 'I se obiectează că simetria diluează deosebirea dintre cine forțează criza și cine reacționează.',
    },
    {
      question: 'De ce a încremenit frontul de vest la sfârșitul lui 1914?',
      options: [
        'Fiindcă armatele și-au istovit rezervele de muniție chiar în acel an',
        'Fiindcă puterea de foc favoriza copleșitor apărarea, în timp ce atacatorul înainta pe jos',
        'Fiindcă comandamentele au hotărât să aștepte sosirea tancurilor',
        'Fiindcă terenul belgian împiedica orice manevră de învăluire',
      ],
      explanation: 'Apărătorul își aducea rezervele cu trenul, iar atacatorul mergea pe jos. Fără un vehicul în stare să se miște sub foc, asaltul frontal era de nesuportat.',
    },
    {
      question: 'Ce armă a pricinuit cele mai multe pierderi ale conflictului?',
      options: [
        'Mitraliera',
        'Gazul de luptă',
        'Pușca cu repetiție',
        'Artileria',
      ],
      explanation: 'În jur de șaptezeci la sută. Lipsa proiectilelor a ajuns să doboare un guvern britanic în 1915 și a dus la crearea unui minister al munițiilor.',
    },
    {
      question: 'Cum a gândit Falkenhayn bătălia de la Verdun?',
      options: [
        'Ca pe o rupere a frontului, ca să fie reluat războiul de mișcare',
        'Ca pe o operațiune de uzură asupra unui punct pe care Franța nu îl putea părăsi din prestigiu',
        'Ca pe o manevră de diversiune, ca să atace în est',
        'Ca pe o repetiție generală a tacticilor de infiltrare',
      ],
      explanation: 'A ținut zece luni, a costat vreo trei sute de mii de morți de ambele părți și nu a mutat frontul în chip însemnat.',
    },
    {
      question: 'Ce nuanțează istoriografia militară recentă despre leii conduși de măgari?',
      options: [
        'Că pierderile au fost mult mai mici decât cele socotite atunci',
        'Că generalii nu au avut nicio răspundere pentru pierderi',
        'Că armatele au învățat repede, în limitele tehnice ale vremii, chiar dacă acea învățare s-a plătit cu vieți',
        'Că ofensiva frontală era, de fapt, cea mai ieftină tactică la îndemână',
      ],
      explanation: 'Curba de învățare britanică dintre 1916 și 1918 este un domeniu de studiu așezat: fără radio de campanie și fără transport de teren, marja tactică era îngustă.',
    },
    {
      question: 'Ce a caracterizat revoltele franceze din 1917?',
      options: [
        'Dezertarea în masă și părăsirea tranșeelor',
        'Fraternizarea cu trupele germane din sector',
        'Refuzul de a ataca, fără a părăsi apărarea liniei',
        'Cererea unei păci separate cu puterile centrale',
      ],
      explanation: 'A fost o grevă, nu o dezertare. Pétain a răspuns schimbând tacticile și condițiile de trai, nu doar pedepsind.',
    },
    {
      question: 'Ce a documentat Tony Ashworth prin sistemul trăiește și lasă să trăiască?',
      options: [
        'Organizarea raționalizării în orașele britanice',
        'Armistițiile neoficiale dintre unități aflate față în față, cu bombardamente rituale și patrule care se ocoleau',
        'Împărțirea pământurilor către veteranii demobilizați',
        'Negocierea dintre sindicate și guverne privind producția de muniții',
      ],
      explanation: 'Între ascultare și răzvrătire a fost un spațiu larg de violență reglementată tacit chiar de trupe.',
    },
    {
      question: 'Ce efect a avut blocada navală britanică asupra puterilor centrale?',
      options: [
        'Niciunul însemnat, fiindcă Germania își ajungea sieși cu alimente',
        'A atins doar aprovizionarea cu materii prime militare',
        'A produs subnutriție generalizată și iarna napilor din 1916-1917 și a fost ținută până la semnarea păcii',
        'A fost ridicată numaidecât după armistițiul din noiembrie 1918',
      ],
      explanation: 'A tăiat alimentele și îngrășămintele. Ținerea ei în lunile de negociere a atârnat greu în felul în care germanii au privit tratatul.',
    },
    {
      question: 'De ce a reluat Germania războiul submarin fără restricții în 1917?',
      options: [
        'Fiindcă a socotit că poate îngenunchea Marea Britanie înainte ca Statele Unite să intervină cu adevărat',
        'Fiindcă Jutlanda îi dăduse controlul suprafeței Mării Nordului',
        'Fiindcă Statele Unite declaraseră deja război în 1916',
        'Fiindcă sistemul de convoaie se dovedise nefolositor',
      ],
      explanation: 'Socoteala a dat greș la mustață. Convoiul, adoptat chiar în acel an, a micșorat pierderile în chip hotărât.',
    },
    {
      question: 'Ce a fost telegrama Zimmermann?',
      options: [
        'Ordinul german de începere a ofensivei din martie 1918',
        'Propunerea germană făcută Mexicului, de alianță în schimbul unui teritoriu american, interceptată de britanici',
        'Comunicarea armistițiului către trupele germane',
        'Oferta de pace separată a Austro-Ungariei către aliați',
      ],
      explanation: 'Împreună cu scufundările și cu expunerea financiară la victoria aliaților, a împins Statele Unite în război, în aprilie 1917.',
    },
    {
      question: 'De ce este pomenit Brest-Litovsk în dezbaterea despre asprimea Versailles-ului?',
      options: [
        'Fiindcă a fost modelul de text copiat de negociatorii de la Paris',
        'Fiindcă a anulat toate despăgubirile cerute Rusiei',
        'Fiindcă acele condiții impuse de Germania Rusiei au fost mult mai aspre, ceea ce relativizează caracterul excepțional al Versailles-ului',
        'Fiindcă nu a ajuns niciodată să fie semnat și a rămas o amenințare',
      ],
      explanation: 'I-a luat Rusiei o treime din populație și cea mai mare parte a industriei. Arată ce ar fi impus puterile centrale dacă ar fi câștigat.',
    },
    {
      question: 'Ce stabilește articolul 231 din Tratatul de la Versailles?',
      options: [
        'Suma exactă a despăgubirilor germane',
        'Răspunderea Germaniei pentru pierderile aliate, ca temei juridic al despăgubirii',
        'Ocuparea pe termen nelimitat a Renaniei de trupe franceze',
        'Excluderea Germaniei din Liga Națiunilor',
      ],
      explanation: 'Suma a fost lăsată pentru 1921. Articolul a fost scris ca temei legal și a fost citit în Germania ca osândă morală.',
    },
    {
      question: 'Ce corectează Mantoux și Sally Marks în citirea lui Keynes despre despăgubiri?',
      options: [
        'Că cifrele nominale erau chiar mai mari decât socotise Keynes',
        'Că Germania a plătit o părticică din cifra nominală și și-a păstrat neatinsă baza industrială',
        'Că despăgubirile au fost încasate în întregime înainte de 1923',
        'Că Keynes nu a luat parte la conferința de pace',
      ],
      explanation: 'De aici formula care rezumă consensul: prea aspru ca să împace, prea blând ca să scoată din joc.',
    },
    {
      question: 'În ce constă mitul înjunghierii pe la spate?',
      options: [
        'În acuzația aliaților că Germania ar fi semnat armistițiul cu rea-credință',
        'În credința că armata germană neînvinsă a fost trădată de cei de acasă',
        'În versiunea austriacă a împărțirii răspunderilor anului 1914',
        'În plângerea soldaților francezi împotriva înaltului lor comandament',
      ],
      explanation: 'Armistițiul a venit cu frontul pe teritoriu ocupat și fără trupe aliate în Germania, împrejurare care a făcut verosimilă o poveste falsă și hotărâtoare.',
    },
    {
      question: 'Ce propune George Mosse prin conceptul de brutalizare?',
      options: [
        'Că propaganda de război a înăsprit tratamentul aplicat prizonierilor',
        'Că violența și obiceiurile frontului s-au mutat în politica civilă de după război',
        'Că armatele au părăsit convențiile despre tratamentul civililor încă din 1914',
        'Că amintirea conflictului a împiedicat orice reînarmare în anii douăzeci',
      ],
      explanation: 'Se discută, fiindcă țări la fel de lovite precum Marea Britanie sau Franța nu au alunecat spre violență politică, dar rămâne cea mai bună legătură dintre 1918 și ce a urmat.',
    },
  ],
}
