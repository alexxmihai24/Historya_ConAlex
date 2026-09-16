import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/espana-siglo-xx.ts`. Aceeași formă: 5
   secțiuni în aceeași ordine, 14 date, 14 concepte, 3 dezbateri, 23 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const espanaSigloXxRo: TopicTranslation = {
  title: 'Spania în secolul XX',
  description: 'De la Dezastrul din 1898 la intrarea în Europa: un secol cu două dictaturi, o republică, un război civil și o tranziție care se discută și azi.',
  years: '1898–1986',
  summary:
    'Spania a intrat în secolul XX pierzându-și ultimele colonii și cu un sistem politic care funcționa prin fraudă electorală organizată. Ce a urmat nu a fost o anomalie față de Europa, deși multă vreme așa s-a povestit: a fost o versiune deosebit de acută a acelorași conflicte europene, cu un element în plus, chestiunea religioasă și cea agrară, și cu un deznodământ, patruzeci de ani de dictatură, pe care cea mai mare parte a continentului l-a evitat. Secolul se ordonează în jurul a patru momente: descompunerea Restaurației, încercarea republicană de a reforma țara în cinci ani, războiul civil care a distrus-o și lunga dictatură care l-a câștigat, și o tranziție negociată care a produs o democrație stabilă și a lăsat deschisă socoteala cu trecutul.',
  keyDates: [
    { date: '1898', event: 'Înfrângerea în fața Statelor Unite și pierderea Cubei, a Puerto Rico și a Filipinelor. Criză de conștiință națională și regeneraționism.' },
    { date: '1909', event: 'Săptămâna Tragică din Barcelona: mobilizarea pentru Maroc se termină în revoltă și represiune.' },
    { date: '1917', event: 'Criză triplă: junte militare, adunarea parlamentarilor și grevă generală revoluționară.' },
    { date: '1921', event: 'Dezastrul de la Annual, în Maroc. Dosarul Picasso pune sub semnul întrebării armata și Coroana.' },
    { date: 'Septembrie 1923', event: 'Lovitura de stat a lui Primo de Rivera, acceptată de Alfonso al XIII-lea. Dictatură până în 1930.' },
    { date: '14 aprilie 1931', event: 'Proclamarea celei de-a Doua Republici, după alegerile municipale.' },
    { date: '1931–1933', event: 'Bienalul reformator: Constituție, reformă agrară, Statutul Cataloniei, vot pentru femei și reformă militară.' },
    { date: 'Octombrie 1934', event: 'Insurecție în Asturia și proclamarea Statului catalan. Represiune și radicalizare reciprocă.' },
    { date: '18 iulie 1936', event: 'Răscoala militară. Eșecul ei parțial deschide un război civil de aproape trei ani.' },
    { date: '1 aprilie 1939', event: 'Sfârșitul războiului. Începe o represiune sistematică, cu zeci de mii de execuții.' },
    { date: '1959', event: 'Planul de Stabilizare: sfârșitul autarhiei și începutul dezvoltării accelerate.' },
    { date: '20 noiembrie 1975', event: 'Moartea lui Franco. Juan Carlos I este proclamat rege două zile mai târziu.' },
    { date: '1977–1978', event: 'Alegeri libere, Legea Amnistiei și Constituția aprobată prin referendum.' },
    { date: '1981 și 1986', event: 'Lovitura de stat eșuată din 23 februarie și intrarea în Comunitatea Economică Europeană.' },
  ],
  sections: [
    {
      title: 'Restaurația și descompunerea ei',
      body: [
        'Sistemul Restaurației, gândit de Cánovas în 1876, se sprijinea pe două partide dinastice care se schimbau la guvernare printr-un mecanism numit rotativa pașnică: Coroana îl numea pe prim-ministru, acesta convoca alegerile și le câștiga. Instrumentul era cacicismul, o rețea de notabili locali care controla votul de la sate prin favoruri, datorii și constrângere. A funcționat douăzeci și cinci de ani fiindcă Spania era în mare parte agrară și fiindcă absenteismul era regula.',
        'Înfrângerea din 1898 în fața Statelor Unite a spulberat încrederea în acest aranjament. Pierderea Cubei, a Puerto Rico și a Filipinelor a fost un dezastru militar mic și o catastrofă simbolică: a lichidat imperiul, a ruinat sectoarele exportatoare și a produs regeneraționismul, un curent critic care merge de la Joaquín Costa, cu diagnosticul lui despre oligarhie și cacicism, până la scriitorii așa-numitei generații de la 1898. Toți erau de acord că țara are nevoie de o operație politică; se despărțeau la întrebarea cine să o facă.',
        'Sistemul nu s-a reformat, dar societatea s-a schimbat. A crescut o clasă muncitoare organizată în două familii, cea socialistă a UGT și cea anarhosindicalistă care a întemeiat CNT în 1910, cu o răspândire care în Spania a fost o excepție în contextul european. A crescut și catalanismul politic după criza din 1898, iar cu el prima revendicare serioasă a unei reorganizări teritoriale a statului. Conflictul a devenit structural: Săptămâna Tragică din 1909, pistolarii din Barcelona, grevele agrare din Andaluzia.',
        'Criza din 1917 a arătat că cele trei fracturi puteau să coincidă. Juntele militare de apărare au protestat pentru avansări și solde; o adunare a parlamentarilor, cu catalaniștii în frunte, a cerut Cortesuri constituante; iar UGT și CNT au chemat la o grevă generală pe care armata a reprimat-o. Fiecare piesă avea agenda ei și niciuna nu avea încredere în celelalte, așa că sistemul a supraviețuit fără să rezolve nimic.',
        'Marocul a fost lovitura de final. Războiul colonial din Rif era nepopular, scump și prost condus, iar dezastrul de la Annual din 1921, cu vreo zece mii de morți, a dus la un dosar parlamentar care arăta spre răspunderea comandanților și a Coroanei. Lovitura de stat a lui Primo de Rivera din septembrie 1923, acceptată de Alfonso al XIII-lea, a închis ancheta și a înlocuit criza sistemului cu o dictatură care s-a prezentat drept o paranteză regeneratoare. A ținut șapte ani, a făcut lucrări publice, a câștigat războiul din Maroc și, la cădere, a tras după ea monarhia care o ocrotise.',
      ].join('\n\n'),
      callout:
        'Rotativa nu era o democrație imperfectă care se îndrepta încet: era un sistem a cărui funcționare cerea ca alegerile să nu hotărască nimic. Când votul a început să conteze, în orașe, mecanismul nu a mai fost de folos.',
    },
    {
      title: 'A Doua Republică',
      body: [
        'Republica a fost proclamată la 14 aprilie 1931, după niște alegeri municipale pe care coaliția republicano-socialistă le-a câștigat în capitalele de provincie. Alfonso al XIII-lea a plecat fără să abdice și fără rezistență. Republica venea cu un sprijin popular uriaș și cu o agendă de reforme care în alte țări ocupase o jumătate de secol și care aici a fost încercată în doi ani: reformă agrară, separarea Bisericii de stat, autonomie catalană, reformă militară, învățământ public de masă și vot pentru femei, adoptat în 1931 mai ales datorită Clarei Campoamor.',
        'Bienalul reformator s-a lovit de toate deodată. Constituția din 1931 a desființat Compania lui Isus și a limitat învățământul religios, ceea ce a pus regimul în conflict cu Biserica și cu partea catolică a populației; reforma agrară a fost înceată și i-a dezamăgit deopotrivă pe zilierii care o așteptau și pe proprietarii care se temeau de ea; reforma militară a lui Azaña a jignit o parte a armatei; iar evenimentele de la Casas Viejas din 1933 au rupt încrederea stângii anarhiste în guvern.',
        'Alegerile din 1933, primele cu vot feminin, i-au dat majoritatea dreptei. Bienalul următor a oprit reformele și, când CEDA lui Gil Robles a intrat în guvern în octombrie 1934, stânga a răspuns cu o insurecție. În Asturia a fost o revoluție muncitorească reprimată de armata din Africa, cu peste o mie de morți; în Catalonia, o proclamare a Statului catalan care s-a terminat cu guvernul Generalitat la închisoare. A fost momentul în care fiecare tabără a început să socotească legitim ceea ce îi refuza celeilalte.',
        'Victoria Frontului Popular în februarie 1936 a dat guvernul înapoi stângii republicane și i-a eliberat pe deținuții din 1934. Primăvara lui 1936 a fost încordată, cu ocupări de moșii, greve, biserici arse și violență de stradă între falangiști și militanți de stânga, și cu o conspirație militară în lucru din martie. Asasinarea locotenentului Castillo și, drept răzbunare, cea a lui José Calvo Sotelo, la 13 iulie, au grăbit o lovitură de stat deja hotărâtă.',
        'Istoriografia discută cât de inevitabil era acest deznodământ. O poziție subliniază slăbiciunea structurală: o țară cu jumătate din populația activă la sate, o Biserică ce nu accepta secularizarea, o armată politizată și niște stângi împărțite între reformă și revoluție. Alta insistă că Republica a funcționat ca democrație timp de cinci ani, că distrugerea ei a cerut o lovitură de stat și că fără acea lovitură nu ar fi existat război. Amândouă sunt de acord într-o privință: 18 iulie nu a fost urmarea firească a primăverii lui 1936, ci o decizie.',
      ].join('\n\n'),
    },
    {
      title: 'Războiul Civil',
      body: [
        'Răscoala din 17 și 18 iulie 1936 a izbândit în jumătatea agrară și conservatoare a țării și a eșuat la Madrid, Barcelona, Valencia, Bilbao și în cea mai mare parte a industriei. Acest eșec parțial a produs războiul: nici răsculații nu s-au putut impune în câteva zile, nici guvernul nu a putut restabili ordinea, iar statul s-a descompus în două zone, cu două economii, două armate și două forme de violență.',
        'Internaționalizarea a fost imediată și inegală. Germania și Italia au trimis aviație, care a îngăduit trecerea armatei din Africa în Peninsulă, în primul pod aerian militar din istorie, iar apoi Legiunea Condor și zeci de mii de soldați italieni. Republica a primit armament sovietic în schimbul aurului Băncii Spaniei și Brigăzile Internaționale, vreo treizeci și cinci de mii de voluntari. Franța și Marea Britanie au impus un Comitet de Neintervenție pe care doar ele îl respectau și care a lipsit guvernul legitim de dreptul de a cumpăra arme.',
        'Violența din spatele frontului a fost masivă în ambele zone și de natură diferită. În cea republicană a izbucnit mai ales în primele luni, descentralizat, cu comitete, checa și execuții pe ascuns, cu vreo cincizeci de mii de victime, între care aproape șapte mii de fețe bisericești, iar guvernul și-a recăpătat treptat controlul judiciar. În cea răsculată a fost sistematică, ordonată de sus din prima zi ca instrument de curățare politică, s-a menținut tot războiul și a continuat și după: se socotesc în jur de o sută de mii de victime până în 1939 și încă vreo cincizeci de mii în anii de după.',
        'În interiorul Republicii a mai fost un al doilea război. Revoluția socială din 1936, cu colectivizări agrare și industriale mai ales în Catalonia și Aragon, s-a ciocnit de poziția guvernului și a PCE, care susțineau că mai întâi trebuie câștigat războiul, construind un stat și o armată regulată. Evenimentele din mai 1937 de la Barcelona, cu lupte armate între forțele guvernului și militanți ai POUM și ai CNT, au tranșat disputa în favoarea centralizării și au lăsat o rană pe care Orwell a povestit-o din interior.',
        'Militar, războiul s-a hotărât prin superioritatea de resurse și prin unitatea de comandă. Franco a fost numit generalisim și șef al statului în septembrie 1936, i-a unificat prin decret pe falangiști și pe carliști în 1937 și a condus un război deliberat lent, menit să ocupe teritoriu și să îl epureze. Republica a construit târziu o armată, a suferit din pricina dezbinării politice și a pierdut pe rând nordul industrial în 1937, Aragonul și Mediterana în 1938 și Catalonia în ianuarie 1939. Războiul s-a încheiat la 1 aprilie, cu o victorie fără condiții.',
      ].join('\n\n'),
      callout:
        'Neintervenția a fost factorul extern decisiv. Aplicată în timp ce Germania și Italia îi aprovizionau pe față pe răsculați, a funcționat ca o intervenție de fapt împotriva guvernului legitim.',
    },
    {
      title: 'Franchismul',
      body: [
        'Dictatura s-a clădit pe victorie și nu a renunțat niciodată la ea. Legea Răspunderilor Politice din 1939 avea efect retroactiv până în 1934, tribunalele militare i-au judecat pentru rebeliune pe cei care apăraseră legalitatea, iar sute de mii de oameni au trecut prin închisori, batalioane de muncă și lagăre de concentrare. O jumătate de milion de oameni au luat calea exilului, iar o bună parte din elita științifică, universitară și culturală a țării a dispărut din ea pentru totdeauna.',
        'Prima etapă a fost de autarhie și de foamete. Izolarea internațională de după 1945, raționalizarea până în 1952, piața neagră și o politică economică intervenționistă au produs așa-numiții ani ai foamei, cu un consum mai mic decât cel din 1935 până bine după 1950. Regimul s-a susținut cu sprijinul Bisericii, al armatei și al proprietarilor și cu un aparat de control care ajungea în fiecare sat.',
        'Războiul Rece l-a salvat. Acordurile cu Statele Unite din 1953, care au dat baze militare în schimbul ajutorului, și Concordatul cu Sfântul Scaun din același an au rupt izolarea. În 1959, Planul de Stabilizare, operă a unor tehnocrați legați de Opus Dei, a liberalizat în parte economia și a deschis etapa cu cea mai mare creștere a secolului: turism, bani trimiși acasă de aproape două milioane de emigranți din Europa, investiții străine și un exod rural care a golit satele și a umplut periferiile orașelor.',
        'Dezvoltarea accelerată a schimbat societatea fără să schimbe regimul, și aici stă contradicția ei. O populație mai urbană, mai educată și cu legături europene a produs comisii muncitorești în fabrici, mișcare studențească în universități, preoți-muncitori și o opoziție internă pe care regimul a combătut-o cu stări de excepție, tribunale de ordine publică și pedepse cu moartea până în septembrie 1975. Apariția ETA în 1959 și trecerea ei la arme au adăugat un conflict care avea să supraviețuiască dictaturii.',
        'Ce fel de regim a fost este o discuție clasică. Juan Linz a propus în 1964 conceptul de regim autoritar, cu pluralism limitat, mentalități în loc de ideologie și demobilizare politică, în opoziție cu modelul totalitar. Alți istorici, precum Ismael Saz sau Stanley Payne, subliniază faza fascistizată a anilor patruzeci, cu partid unic, salut roman și proiect imperial, și descriu o evoluție spre o dictatură conservatoare și catolică, pe măsură ce se schimba contextul internațional.',
      ].join('\n\n'),
    },
    {
      title: 'Tranziția și discuția din jurul ei',
      body: [
        'Franco a murit în patul lui, în noiembrie 1975, lăsând totul legat. Ce a urmat nu era scris nicăieri: a fost presiune de jos, cu o conflictualitate muncitorească și studențească foarte ridicată, și negociere de sus, cu o parte a regimului care a înțeles că menținerea lui era imposibilă. Adolfo Suárez, numit prim-ministru în 1976, a obținut ca înseși Cortesurile franchiste să aprobe Legea pentru Reforma Politică, ce deschidea drumul spre alegeri libere.',
        'Procesul a avut un preț limpede. Legea Amnistiei din 1977, cerută de opoziție ca să scoată deținuții politici, i-a acoperit și pe cei răspunzători de fapte săvârșite de la putere, iar odată cu ea s-a închis orice proces penal pentru represiune. Pactele de la Moncloa au împărțit costurile ajustării economice de după criza petrolului. Constituția din 1978, votată de optzeci și opt la sută dintre alegători, a stabilit o monarhie parlamentară, un stat neconfesional și un model autonomic lăsat dinadins deschis.',
        'Violența a însoțit tot procesul: atentate ale ETA și ale GRAPO, masacrarea avocaților din strada Atocha în 1977, extrema dreaptă activă și o armată care nu accepta direcția luată. Tentativa de lovitură de stat din 23 februarie 1981, cu parlamentul luat ostatic o noapte întreagă, a eșuat și a funcționat ca un vaccin. Venirea PSOE la guvernare în 1982, intrarea în NATO și intrarea în Comunitatea Economică Europeană în 1986 au închis ciclul.',
        'Vreme de douăzeci de ani, Tranziția a fost povestită ca un model de reconciliere, bun de exportat. Din anii nouăzeci, această lectură este discutată temeinic. O parte a istoriografiei subliniază că a fost o operațiune negociată între elite, care a lăsat neatinse administrația, magistratura și poliția franchismului, și că așa-numitul pact al uitării a împiedicat decenii la rând cercetarea crimelor și găsirea gropilor comune, lucru cu totul neobișnuit în tranzițiile de mai târziu.',
        'Replica este că termenul de comparație potrivit nu este un ideal, ci alternativele chiar existente în 1976, cu o armată neatinsă și fără nicio putere dispusă să intervină, și că rezultatul a fost o democrație stabilă într-o țară care nu avusese niciodată una durabilă. Legea Memoriei Istorice din 2007 și cea a Memoriei Democratice din 2022 au redeschis oficial subiectul. Este discuția istorică cea mai vie din țară și singura din această temă care este totodată o dezbatere politică în curs.',
      ].join('\n\n'),
      callout:
        'Spania este țara europeană cu cei mai mulți dispăruți neidentificați, după Cambodgia. Cifra aceasta, mai mult decât orice interpretare, explică de ce dezbaterea despre Tranziție rămâne deschisă.',
    },
  ],
  concepts: [
    { term: 'Rotativa pașnică', definition: 'Alternanță înțeleasă dinainte între cele două partide dinastice ale Restaurației. Alegerile se convocau după numirea guvernului și se câștigau de la guvernare.' },
    { term: 'Cacicism', definition: 'Rețea de notabili locali care controla votul de la sate prin favoruri, datorii și constrângere. Instrument neapărat trebuincios rotativei.' },
    { term: 'Regeneraționism', definition: 'Curent critic ivit din 1898, care diagnostica decăderea națională și cerea o reformă adâncă a statului și a învățământului.' },
    { term: 'Annual', definition: 'Dezastru militar din 1921, în Rif, cu vreo zece mii de morți. Ancheta parlamentară amenința armata și Coroana.' },
    { term: 'Bienalul reformator', definition: 'Etapa republicană din 1931 până în 1933: Constituție, reformă agrară, Statutul Cataloniei, reformă militară și învățământ public de masă.' },
    { term: 'Votul femeilor', definition: 'Adoptat în Cortesurile constituante din 1931, cu Clara Campoamor drept principală apărătoare. A fost exercitat întâia oară în 1933.' },
    { term: 'Frontul Popular', definition: 'Coaliție de stânga care a câștigat alegerile din februarie 1936 și a guvernat până la răscoala militară.' },
    { term: 'Neintervenție', definition: 'Comitet franco-britanic din 1936 care a interzis vânzarea de arme celor două tabere spaniole. L-au respectat doar democrațiile.' },
    { term: 'Colectivizări', definition: 'Confiscarea și administrarea în comun a pământurilor și fabricilor din zona republicană, din 1936, mai ales în Catalonia și Aragon.' },
    { term: 'Autarhie', definition: 'Politica economică de autosuficiență și de intervenție a primului franchism. A produs raționalizare, piață neagră și anii foamei.' },
    { term: 'Planul de Stabilizare', definition: 'Reforma din 1959, care a liberalizat în parte economia și a deschis dezvoltarea accelerată, cu turism, bani de la emigranți și investiții străine.' },
    { term: 'Regim autoritar', definition: 'Categorie propusă de Linz pentru franchism: pluralism limitat, mentalități în loc de ideologie și demobilizare politică.' },
    { term: 'Legea pentru Reforma Politică', definition: 'Norma din 1976, adoptată de înseși Cortesurile franchiste, care a deschis drumul spre alegeri libere. Reforma s-a făcut din interiorul legalității dinainte.' },
    { term: 'Pactul uitării', definition: 'Numele dat înțelegerii tacite de a nu revizui judiciar trecutul, după Legea Amnistiei din 1977. Miezul dezbaterii despre Tranziție.' },
  ],
  debates: [
    {
      question: 'Era a Doua Republică sortită pieirii?',
      positions: [
        {
          school: 'Fragilitate structurală',
          argument:
            'O țară cu jumătate din populația activă la sate, o Biserică ce nu accepta secularizarea, o armată politizată și niște stângi împărțite între reformă și revoluție făceau aproape imposibilă consolidarea unei democrații în cinci ani.',
        },
        {
          school: 'Democrație distrusă de o lovitură de stat (Casanova; Graham)',
          argument:
            'Republica a funcționat ca regim constituțional, cu alternanță reală în 1933 și 1936. A fost nevoie de o răscoală militară ca să i se pună capăt, iar fără ea nu ar fi existat război.',
        },
        {
          school: 'Răspunderi împărțite (Payne; Ranzato)',
          argument:
            'Insurecția din octombrie 1934 împotriva unui guvern legitim și violența primăverii lui 1936 arată o delegitimare reciprocă, în care niciuna dintre părți nu mai apăra legalitatea fără condiții.',
        },
      ],
      state:
        'Există consens academic că războiul a fost pornit de o lovitură de stat. Discuția continuă asupra greutății răspunderilor dinainte și asupra șanselor proiectului reformator în răstimpul în care a fost încercat.',
    },
    {
      question: 'A fost franchismul un regim fascist?',
      positions: [
        {
          school: 'Regim autoritar (Linz, 1964)',
          argument:
            'Nu a existat o ideologie închisă și nici mobilizare permanentă, ci pluralism limitat între familiile regimului, mentalități difuze și demobilizare deliberată a populației.',
        },
        {
          school: 'Dictatură fascistizată (Saz; Payne)',
          argument:
            'Anii patruzeci arată partid unic, salut roman, retorică imperială și alinierea cu Axa. Regimul s-a defascistizat din calcul internațional, nu din fire proprie.',
        },
      ],
      state:
        'Discuția s-a mutat de la etichetă la faze: aproape nimeni nu mai susține azi că regimul a fost omogen între 1939 și 1975, iar etapa fascistizată, cea național-catolică și cea tehnocratică se studiază separat.',
    },
    {
      question: 'A fost Tranziția un model sau un pact al uitării?',
      positions: [
        {
          school: 'Succes negociat (Tusell; Juliá)',
          argument:
            'În 1976 armata era neatinsă și nicio putere nu era dispusă să intervină. În aceste condiții s-a construit o democrație stabilă într-o țară fără tradiție democratică durabilă, iar asta nu era rezultatul previzibil.',
        },
        {
          school: 'Impunitate și continuitate (Espinosa; Gallego)',
          argument:
            'Legea Amnistiei a închis orice cale penală, administrația și magistratura franchiste au rămas pe loc, iar decenii la rând nu a existat nicio cercetare oficială a represiunii și nicio deschidere de gropi comune.',
        },
        {
          school: 'Presiunea de jos',
          argument:
            'Imaginea unei operațiuni înțelese doar între elite trece cu vederea conflictualitatea muncitorească, de cartier și studențească din 1975 și 1976, care a făcut imposibilă continuarea regimului.',
        },
      ],
      state:
        'Este cea mai vie dezbatere a istoriografiei spaniole și totodată o discuție politică în curs. Legislația memoriei din 2007 și 2022 a redeschis oficial chestiuni pe care Tranziția le amânase.',
    },
  ],
  sources: [
    { author: 'Joaquín Costa', title: 'Oligarhie și cacicism ca formă actuală de guvernare în Spania', year: '1901', kind: 'primaria', note: 'Diagnostic regeneraționist al felului în care funcționa cu adevărat sistemul Restaurației.' },
    { author: 'Comisia Picasso', title: 'Dosarul despre dezastrul de la Annual', year: '1922', kind: 'primaria', note: 'Anchetă militară ale cărei concluzii despre răspunderi au fost îngropate de lovitura de stat din 1923.' },
    { author: 'Cortesurile Constituante', title: 'Constituția Republicii Spaniole', year: '1931', kind: 'primaria', note: 'Vot universal, stat neconfesional, dreptul la divorț și autonomii. Textul central al proiectului republican.' },
    { author: 'Clara Campoamor', title: 'Votul femeilor și eu', year: '1936', kind: 'primaria', note: 'Relatare de primă mână a dezbaterii parlamentare din 1931 despre dreptul de vot al femeilor.' },
    { author: 'Manuel Azaña', title: 'Jurnale și Seara de la Benicarló', year: '1932–1937', kind: 'primaria', note: 'Scrierile principalului conducător republican, cu un diagnostic lucid și îndurerat al războiului.' },
    { author: 'Manuel Chaves Nogales', title: 'Prin foc și sabie', year: '1937', kind: 'primaria', note: 'Povestiri ale unui ziarist republican care denunță din exil violența ambelor tabere.' },
    { author: 'George Orwell', title: 'Omagiu Cataloniei', year: '1938', kind: 'primaria', note: 'Mărturie despre evenimentele din mai 1937 de la Barcelona, scrisă de un miliționar din POUM.' },
    { author: 'Statul spaniol', title: 'Legea Răspunderilor Politice', year: '1939', kind: 'primaria', note: 'Normă retroactivă până în 1934, care a făcut din apărarea legalității republicane o infracțiune.' },
    { author: 'Arturo Barea', title: 'Făurirea unui rebel', year: '1941–1946', kind: 'primaria', note: 'Trilogie autobiografică ce străbate Marocul, Restaurația, Republica și războiul văzute de jos.' },
    { author: 'Guvernul spaniol', title: 'Planul Național de Stabilizare Economică', year: '1959', kind: 'primaria', note: 'Documentul care lichidează autarhia și deschide etapa dezvoltării accelerate.' },
    { author: 'Cortesurile Generale', title: 'Legea Amnistiei', year: '1977', kind: 'primaria', note: 'Cerută de opoziție ca să elibereze deținuții politici, a acoperit și faptele săvârșite de la putere.' },
    { author: 'Cortesurile Generale', title: 'Constituția spaniolă', year: '1978', kind: 'primaria', note: 'Monarhie parlamentară, stat neconfesional și model autonomic lăsat dinadins deschis.' },
    { author: 'Juan José Linz', title: 'An Authoritarian Regime: Spain', year: '1964', kind: 'estudio', note: 'Introduce categoria de regim autoritar, aplicată mai apoi la numeroase dictaturi.' },
    { author: 'Raymond Carr', title: 'Spania 1808-1975', year: '1966', kind: 'estudio', note: 'Sinteză clasică, care a scos istoria contemporană spaniolă din tiparul excepționalității.' },
    { author: 'Gabriel Jackson', title: 'Republica spaniolă și Războiul Civil', year: '1965', kind: 'estudio', note: 'Prima mare sinteză academică din afară despre perioada republicană.' },
    { author: 'Paul Preston', title: 'Holocaustul spaniol', year: '2011', kind: 'estudio', note: 'Studiu comparat al represiunii din spatele ambelor fronturi și din anii de după război.' },
    { author: 'Julián Casanova', title: 'Republică și Război Civil', year: '2007', kind: 'estudio', note: 'Sinteză actuală a perioadei, atentă la violență, la Biserică și la mișcarea libertară.' },
    { author: 'Helen Graham', title: 'The Spanish Republic at War', year: '2002', kind: 'estudio', note: 'Analizează efortul republican de a construi un stat în plin război și conflictele interne pe care le-a stârnit.' },
    { author: 'Ángel Viñas', title: 'Singurătatea Republicii', year: '2006', kind: 'estudio', note: 'Reconstituie cu documente diplomatice și financiare efectul neintervenției și rolul aurului.' },
    { author: 'Ismael Saz', title: 'Fascism și franchism', year: '2004', kind: 'estudio', note: 'Analizează fazele regimului și relația lui schimbătoare cu fascismul european.' },
    { author: 'Santos Juliá', title: 'Tranziția', year: '2017', kind: 'estudio', note: 'Apără Tranziția ca proces politic cu logică proprie, împotriva lecturilor care văd doar continuitate.' },
    { author: 'Francisco Espinosa', title: 'Împotriva uitării', year: '2006', kind: 'estudio', note: 'Documentează represiunea franchistă și critică tăcerea instituțională de după 1977.' },
    { author: 'Borja de Riquer', title: 'Dictatura lui Franco', year: '2010', kind: 'estudio', note: 'Volum de sinteză despre regim, economia, societatea și opoziția lui.' },
  ],
  documents: [
    {
      section: 4,
      title: 'Articolul întâi al Constituției din 1978',
      text: [
        '1. Spania se constituie într-un stat social și democratic de drept, care proclamă ca valori supreme ale ordinii sale juridice libertatea, dreptatea, egalitatea și pluralismul politic.',
        '2. Suveranitatea națională aparține poporului spaniol, de la care emană puterile statului.',
        '3. Forma politică a statului spaniol este monarhia parlamentară.',
      ].join('\n\n'),
      source: 'Constituția spaniolă, articolul 1, aprobată prin referendum la 6 decembrie 1978.',
      note: 'Versiune proprie după spaniolă.',
      question: 'Alineatul 2 așază suveranitatea în popor, iar alineatul 3 păstrează monarhia, care venea din desemnarea făcută de Franco. Cum stau împreună aceste două lucruri? Ce îți spune asta despre caracterul negociat al Tranziției?',
    },
  ],
  images: [
    {
      alt: 'Stradă din Guernica prefăcută în moloz și fațade goale după bombardament',
      caption: 'Ruinele orașului Guernica după bombardamentul din 26 aprilie 1937.',
    },
    {
      alt: 'Fotografia unei mulțimi care umple o stradă largă, cu oameni cățărați pe un vehicul și steaguri ridicate',
      caption: 'Proclamarea celei de-a Doua Republici la Madrid, 14 aprilie 1931. A venit după niște alegeri municipale, nu după o revoluție.',
    },
    {
      alt: 'Fotografia unei tinere îngenuncheate, în pantaloni și espadrile, care țintește cu un pistol în poziție de instrucție',
      caption: 'Miliționară la instrucție lângă Barcelona, august 1936, de Gerda Taro. Taro a murit anul următor pe frontul de la Brunete.',
    },
    {
      alt: 'Portret oficial al unui militar în uniformă, cu decorații și eșarfă, pe jumătate de corp',
      caption: 'Portretul oficial al lui Franco. Regimul a ținut treizeci și șase de ani și s-a schimbat mult pe dinăuntru: autarhia anilor patruzeci și dezvoltarea accelerată a anilor șaizeci nu sunt același lucru.',
    },
  ],
  questions: [
    {
      question: 'Cum funcționa rotativa pașnică din timpul Restaurației?',
      options: [
        'Partidele se schimbau la putere după ce câștigau alegeri libere',
        'Coroana numea guvernul, iar acesta convoca și câștiga alegerile prin cacicism',
        'Parlamentul îl alegea pe prim-ministru prin vot secret',
        'Guvernele se trăgeau la sorți între provincii',
      ],
      explanation: 'Sistemul cerea ca alegerile să nu hotărască nimic. Când votul a început să conteze în orașe, mecanismul nu a mai fost de folos.',
    },
    {
      question: 'Ce efect a avut înfrângerea din 1898?',
      options: [
        'A provocat căderea imediată a monarhiei',
        'A lichidat imperiul și a produs regeneraționismul, un curent critic care cerea reformarea statului',
        'A silit Spania să intre în Primul Război Mondial',
        'A însemnat pierderea Marocului',
      ],
      explanation: 'A fost un dezastru militar mic și o catastrofă simbolică. Joaquín Costa a formulat diagnosticul despre oligarhie și cacicism.',
    },
    {
      question: 'Ce a arătat criza din 1917?',
      options: [
        'Că armata, catalanismul și mișcarea muncitorească puteau protesta în același timp fără să aibă încredere unele în altele',
        'Că sistemul Restaurației se democratizase',
        'Că Spania avea să intre în războiul european',
        'Că monarhia pierduse sprijinul armatei',
      ],
      explanation: 'Juntele militare, adunarea parlamentarilor și greva generală au coincis cu agende diferite, iar sistemul a supraviețuit fără să rezolve nimic.',
    },
    {
      question: 'Ce legătură a fost între dezastrul de la Annual și lovitura de stat din 1923?',
      options: [
        'Niciuna: lovitura a fost un răspuns la criza economică',
        'Dosarul despre Annual arăta spre răspunderi ale armatei și ale Coroanei, iar lovitura de stat a închis ancheta',
        'Lovitura a fost dată ca să fie reluat războiul din Maroc',
        'Primo de Rivera a fost principalul răspunzător militar de la Annual',
      ],
      explanation: 'Dictatura s-a prezentat drept o paranteză regeneratoare, a ținut șapte ani și, la cădere, a tras după ea monarhia care o ocrotise.',
    },
    {
      question: 'Ce reforme a început bienalul republican din 1931-1933?',
      options: [
        'Naționalizarea băncilor și colectivizarea agrară',
        'Reformă agrară, separarea Bisericii de stat, Statutul Cataloniei, reformă militară și vot pentru femei',
        'Reformă fiscală și intrarea în Liga Națiunilor',
        'Reformă electorală și desființarea armatei',
      ],
      explanation: 'S-a încercat în doi ani o agendă care în alte țări ocupase o jumătate de secol și care s-a lovit deodată de Biserică, de armată și de proprietari.',
    },
    {
      question: 'Ce s-a întâmplat în octombrie 1934?',
      options: [
        'A fost proclamat Frontul Popular',
        'O insurecție de stânga împotriva intrării CEDA în guvern, cu revoluție muncitorească în Asturia și proclamarea Statului catalan',
        'A fost adoptată Constituția republicană',
        'A avut loc răscoala militară împotriva Republicii',
      ],
      explanation: 'A fost momentul în care fiecare tabără a început să socotească legitim ceea ce îi refuza celeilalte.',
    },
    {
      question: 'De ce a dus răscoala din iulie 1936 la un război civil?',
      options: [
        'Fiindcă a izbândit în toată țara, iar rezistența a venit din afară',
        'Fiindcă a eșuat în marile orașe și în cea mai mare parte a industriei, fără ca vreuna dintre tabere să se poată impune',
        'Fiindcă au intervenit din prima zi Franța și Marea Britanie',
        'Fiindcă guvernul a declarat război Marocului',
      ],
      explanation: 'Statul s-a descompus în două zone, cu două economii, două armate și două forme de violență.',
    },
    {
      question: 'Prin ce s-a deosebit violența din spatele celor două fronturi?',
      options: [
        'Prin aceea că represiune a existat doar în zona răsculată',
        'Prin aceea că cea republicană a fost mai ales descentralizată și din primele luni, iar cea răsculată a fost sistematică, ordonată de sus, și a continuat după război',
        'Prin aceea că cea republicană i-a lovit doar pe militari',
        'Prin aceea că cea răsculată s-a oprit la sfârșitul conflictului',
      ],
      explanation: 'Se socotesc vreo cincizeci de mii de victime în zona republicană și în jur de o sută de mii în cea răsculată până în 1939, plus încă vreo cincizeci de mii în anii de după.',
    },
    {
      question: 'Ce s-a tranșat în evenimentele din mai 1937 de la Barcelona?',
      options: [
        'Intrarea Cataloniei în război',
        'Conflictul dintre revoluția socială și construirea unui stat și a unei armate regulate, rezolvat în favoarea centralizării',
        'Semnarea unei păci separate cu răsculații',
        'Împărțirea aurului Băncii Spaniei',
      ],
      explanation: 'A pus față în față forțele guvernului cu militanți ai POUM și ai CNT. Orwell a povestit totul din interior, în Omagiu Cataloniei.',
    },
    {
      question: 'Ce a caracterizat prima etapă economică a franchismului?',
      options: [
        'O integrare rapidă în comerțul internațional',
        'Autarhia: intervenție, raționalizare până în 1952, piață neagră și un consum mai mic decât cel din 1935',
        'Intrarea masivă a investițiilor străine',
        'Colectivizarea agriculturii',
      ],
      explanation: 'Așa-numiții ani ai foamei s-au prelungit până bine după 1950, când Războiul Rece a rupt izolarea regimului.',
    },
    {
      question: 'Ce a însemnat Planul de Stabilizare din 1959?',
      options: [
        'Întoarcerea la autarhie după criza internațională',
        'Liberalizarea parțială a economiei și începutul dezvoltării accelerate, cu turism, bani de la emigranți și investiții străine',
        'Naționalizarea băncilor spaniole',
        'Intrarea Spaniei în Comunitatea Economică Europeană',
      ],
      explanation: 'A fost opera unor tehnocrați legați de Opus Dei și a schimbat societatea fără să schimbe regimul, ceea ce este contradicția perioadei.',
    },
    {
      question: 'Ce a propus Juan Linz în 1964 despre natura franchismului?',
      options: [
        'Că era un regim totalitar, asemănător nazismului',
        'Că era un regim autoritar, cu pluralism limitat, mentalități în loc de ideologie și demobilizare politică',
        'Că era o monarhie constituțională suspendată',
        'Că era o dictatură militară fără bază socială',
      ],
      explanation: 'Alți istorici subliniază faza fascistizată a anilor patruzeci. Discuția s-a mutat de la etichetă la studiul fazelor.',
    },
    {
      question: 'Ce a fost Legea pentru Reforma Politică din 1976?',
      options: [
        'Legea care a legalizat partidele politice și sindicatele',
        'Norma adoptată de înseși Cortesurile franchiste, care a deschis drumul spre alegeri libere',
        'Textul care a instituit statul autonomiilor',
        'Legea care i-a amnistiat pe deținuții politici',
      ],
      explanation: 'Reforma s-a făcut din interiorul legalității dinainte, ceea ce a evitat ruptura și, totodată, a limitat întinderea schimbării.',
    },
    {
      question: 'Cât de departe a mers Legea Amnistiei din 1977?',
      options: [
        'A eliberat doar deținuții politici ai franchismului',
        'I-a eliberat pe deținuții politici și a acoperit și faptele săvârșite de la putere, închizând calea penală privitoare la represiune',
        'A anulat sentințele tribunalelor militare franchiste',
        'A înființat un tribunal special pentru judecarea crimelor dictaturii',
      ],
      explanation: 'A fost cerută de opoziție, iar cealaltă față a ei este miezul dezbaterii despre așa-numitul pact al uitării.',
    },
    {
      question: 'Ce argument aduc cei care apără procesul Tranziției?',
      options: [
        'Că nu a existat nicio continuitate cu aparatul franchist',
        'Că termenul de comparație potrivit nu este un ideal, ci alternativele existente în 1976, cu armata neatinsă și fără sprijin din afară',
        'Că represiunea franchistă a fost exagerată de istoriografie',
        'Că 23 februarie a dovedit loialitatea armatei față de democrație',
      ],
      explanation: 'Criticii lor răspund că administrația și magistratura au rămas neatinse și că decenii la rând nu a existat o cercetare oficială a represiunii.',
    },
    {
      question: 'Ce evenimente au închis ciclul Tranziției?',
      options: [
        'Moartea lui Franco și încoronarea regelui',
        'Eșecul loviturii de stat din 23 februarie 1981, venirea PSOE la guvernare în 1982 și intrarea în Comunitatea Economică Europeană în 1986',
        'Adoptarea Constituției și Pactele de la Moncloa',
        'Legalizarea PCE și primele alegeri municipale',
      ],
      explanation: 'Lovitura eșuată a funcționat ca un vaccin, iar integrarea europeană a consolidat noul regim în cadrul continental.',
    },
  ],
}
