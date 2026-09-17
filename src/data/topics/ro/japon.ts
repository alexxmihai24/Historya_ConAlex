import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/japon.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13 date, 14
   concepte, 3 dezbateri, 21 surse, un document comentat, 4 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const japonRo: TopicTranslation = {
  title: 'Japonia: de la Heian la Meiji',
  description: 'O mie de ani între o curte aristocratică și o putere industrială: arhipelagul ce a primit modele străine fără să fie vreodată cucerit.',
  years: '794–1912',
  summary:
    'Japonia e cazul ce silește la revizuirea aproape a tuturor generalizărilor despre istoria mondială. A primit din China scrisul, budismul și un model de stat, și le-a prefăcut până le-a făcut de nerecunoscut. A dezvoltat șase sute de ani o rânduială de putere războinică cu un împărat ce domnea fără să cârmuiască, o formulă pe care nicio altă societate nu a repetat-o. A trecut două veacuri și jumătate sub o rânduială ce a mărginit aspru legăturile din afară și care, departe de a sta pe loc, a ajuns la trepte de alfabetizare, de orășenizare și de negoț dinăuntru asemănătoare cu cele europene. Iar când presiunea occidentală a venit în 1853, în loc să fie colonizată, a înfăptuit în trei decenii prefacerea cea mai iute cunoscută, până a ajunge ea însăși putere imperială. A lămuri cum s-a întâmplat asta e una dintre întrebările cele mai rodnice ale istoriei mondiale.',
  keyDates: [
    { date: '794', event: 'Curtea se mută la Heian, azi Kyoto. Începe perioada clasică aristocratică.' },
    { date: 'secolele X–XI', event: 'Stăpânirea familiei Fujiwara asupra curții prin regențe și alianțe de căsătorie.' },
    { date: 'c. 1008', event: 'Murasaki Shikibu scrie Genji monogatari, unul dintre cele dintâi romane psihologice din lume.' },
    { date: '1185–1192', event: 'Biruința Minamoto și întemeierea shogunatului de la Kamakura. Puterea adevărată trece la războinici.' },
    { date: '1274 și 1281', event: 'Două năvăliri mongole dau greș, în parte din pricina unor taifunuri pe care tradiția le va numi vânturi divine.' },
    { date: '1467–1477', event: 'Războiul Onin. Kyoto e distrus și începe veacul statelor în război.' },
    { date: '1543 și 1549', event: 'Sosirea armelor de foc portugheze și a misiunii iezuite a lui Francisc Xavier.' },
    { date: '1582–1600', event: 'Unirea prin Oda Nobunaga, Toyotomi Hideyoshi și Tokugawa Ieyasu, biruitor la Sekigahara.' },
    { date: '1603–1639', event: 'Shogunatul Tokugawa, oprirea creștinismului și edicte ce mărginesc legăturile din afară.' },
    { date: '1720–1850', event: 'Studiile olandeze, avântul editorial și alfabetizare largă sub o pace de două veacuri și jumătate.' },
    { date: '1853–1854', event: 'Sosirea escadrei lui Perry și Tratatul de la Kanagawa. Începe bakumatsu.' },
    { date: '1868', event: 'Restaurarea Meiji: căderea shogunatului și Carta Jurământului celor Cinci Articole.' },
    { date: '1889–1905', event: 'Constituția Meiji, biruința asupra Chinei în 1895 și asupra Rusiei în 1905.' },
  ],
  sections: [
    {
      title: 'Heian: o curte și un stat ce se destramă',
      body: [
        'Statul japonez al secolului al VIII-lea s-a clădit copiind modelul chinezesc Tang: coduri de legi numite ritsuryō, o birocrație de ranguri, un catastif ce dădea pământ țăranilor și un budism sprijinit de curte. Copierea a fost înadins și aleasă. Două elemente de căpetenie ale modelului chinezesc nu au fost aduse: examenele ca poartă spre dregătorie, ce în Japonia au rămas supuse neamului, și mandatul cerului, ce ar fi îngăduit doborârea dinastiei. Împăratul japonez nu cârmuiește prin virtute, ci prin obârșie dumnezeiască, și de aceea nicio altă dinastie nu l-a înlocuit.',
        'Mutarea capitalei la Heian în 794 a deschis patru veacuri de stăpânire aristocratică. În practică, statul ritsuryō s-a desfăcut pe dinăuntru: pământurile obștești s-au prefăcut în shōen, moșii particulare scutite de dări, legate de temple și de familii nobile, iar puterea adevărată a trecut la familia Fujiwara, care a cârmuit prin regențe și prin măritarea fiicelor ei cu împărați unul după altul. Împăratul a rămas izvorul de îndreptățire în timp ce alții purtau puterea: formula avea să se repete o mie de ani cu alți jucători.',
        'Cultura acelei curți e una dintre clipele cele mai aparte ale istoriei literare. Femeile aristocrației, lăsate afară din scrisul chinezesc pe care bărbații îl foloseau pentru treburile serioase, au scris în silabica kana și au zămislit lucrarea de căpetenie a acelei vremi: Genji monogatari al lui Murasaki Shikibu, un roman de peste o mie de pagini despre firea omenească, dorință și trecerea timpului, și Cartea pernei a lui Sei Shōnagon.',
        'Pe când curtea își rafina simțul frumosului, în provincii creștea altceva. Proprietarii de shōen aveau nevoie de oameni înarmați ca să le apere pământurile și să le strângă dările, și de acolo au ieșit grupurile războinice pe care izvoarele le numesc bushi. Nu erau o castă închisă, nici o roadă a curții, ci o elită provincială înarmată ce a tot adunat putere militară pe măsură ce capitala înceta să mai aibă armată proprie.',
        'Deznodământul a venit la sfârșitul secolului al XII-lea cu războiul Genpei dintre clanurile Taira și Minamoto, povestit în Heike monogatari cu un ton de mâhnire budistă despre căderea celor puternici. Biruința lui Minamoto no Yoritomo din 1185 și numirea lui ca shōgun în 1192 au zămislit o putere militară cu sediul la Kamakura, departe de Kyoto, ce cârmuia în numele unui împărat ce-și păstra tronul. Acest sistem îndoit e cheia instituțională a istoriei japoneze.',
      ].join('\n\n'),
      callout:
        'Japonia a adus din China scrisul, budismul și modelul de stat, și a lăsat afară tocmai cele două bucăți ce ar fi îngăduit schimbarea dinastiei: examenele și mandatul cerului.',
    },
    {
      title: 'Șase veacuri de putere războinică',
      body: [
        'Shogunatul de la Kamakura a cârmuit prin vasali, răsplăți în pământ și un drept propriu, codul Jōei din 1232, ce aplica temeiuri practice în locul codurilor de curte. Proba lui cea mai mare au fost cele două năvăliri mongole din 1274 și din 1281, respinse cu întărituri de coastă uriașe și cu ajutorul a două taifunuri pe care tradiția de mai apoi le-a numit vânturi divine. Biruința a ruinat rânduiala: nu au fost pământuri cucerite cu care să fie plătiți vasalii chemați la oaste.',
        'Shogunatul Ashikaga, din 1336 încoace, cu sediul în cartierul Muromachi din Kyoto, a fost mult mai slab, dar hotărâtor din punct de vedere cultural. În vremea lui s-au alcătuit teatrul nō, ceremonia ceaiului, grădina uscată, pictura în cerneală și budismul zen ca simț al frumosului de elită, în bună parte prin legătura cu China Ming. A mai fost și vremea când puterea adevărată s-a mutat la guvernatorii provinciali.',
        'Războiul Onin, între 1467 și 1477, a distrus Kyoto și a deschis sengoku, veacul statelor în război. Țara s-a fărâmițat în moșii cârmuite de daimyō ce dădeau legi, strângeau dări, clădeau cetăți și se întreceau militar. A fost o vreme de distrugere și, în același timp, de creștere: daimyō încurajau desțeleniri, mine, piețe și drumuri ca să-și plătească armatele, iar au apărut orașe libere de negustori, ca Sakai.',
        'Sosirea portughezilor în 1543 a adus archeubuza, pe care atelierele japoneze au copiat-o și au produs-o în masă cu o iuțeală ieșită din comun, iar în 1549, misiunea iezuită a lui Francisc Xavier. Creștinismul a ajuns să aibă câteva sute de mii de credincioși și sprijinul unor daimyō din sud, interesați și de negoț. Oprirea lui de mai apoi nu a fost o respingere culturală fără trup: unificatorii au văzut în el o credință din afară nepotrivită cu rânduiala pe care o clădeau.',
        'Unirea au înfăptuit-o trei oameni într-o jumătate de veac. Oda Nobunaga a rupt puterea mănăstirilor înarmate și a folosit infanteria cu arme de foc la scară mare; Toyotomi Hideyoshi, de obârșie țărănească, a încheiat cucerirea, a despărțit prin poruncă războinicii de țărani prin luarea armelor și a poruncit un catastif de țară; Tokugawa Ieyasu a biruit la Sekigahara în 1600 și a primit titlul de shōgun în 1603. Cele două năvăliri asupra Coreei purtate de Hideyoshi în anii 1590 au fost un dezastru și cea din urmă aventură din afară a Japoniei vreme de două veacuri și jumătate.',
      ].join('\n\n'),
    },
    {
      title: 'Rânduiala Tokugawa',
      body: [
        'Rânduiala Tokugawa a rânduit țara în vreo două sute șaizeci de moșii sau han, cu daimyō ce cârmuiau dinăuntru și un shogunat ce stăpânea orașele de căpetenie, moneda, politica din afară și legăturile dintre moșii. Bucata cea mai lucrătoare de stăpânire a fost sankin-kōtai: îndatorirea ca fiecare daimyō să locuiască pe rând, ani întregi, la Edo, lăsându-și acolo familia. Sistemul funcționa ca un ostatic rânduit în instituție și, pe deasupra, a zămislit o rețea de drumuri, hanuri și cheltuială orășenească ce a unit economia întregii țări.',
        'Societatea s-a rânduit în teorie în patru trepte, războinici, țărani, meșteșugari și negustori, cu neoconfucianismul ca temei de îndreptățire. Practica s-a depărtat curând de acest tipar. Samuraii, fără războaie de purtat, au ajuns dregători plătiți și adesea îndatorați; negustorii din Osaka, așezați pe treapta cea mai de jos, au adunat o avuție ce plătea moșiile; iar în orașe a înflorit o cultură proprie, cu teatrul kabuki, romanul de rând și gravura ukiyo-e.',
        'Edo a ajuns să treacă de un milion de locuitori pe la 1720 și era probabil orașul cel mai mare din lume. Alfabetizarea a crescut cu o rețea de școli de templu, iar la începutul secolului al XIX-lea o parte mare de bărbați și o parte însemnată de femei știau să citească, cu o industrie de editare și de împrumut de cărți fără seamăn în afara Europei apusene. Agricultura s-a întărit cu îngrășăminte de negoț și culturi de piață, iar populația s-a statornicit în jur de treizeci de milioane prin mecanisme de rânduire a nașterilor înăuntrul familiei.',
        'Politica de sakoku, țara închisă, s-a statornicit între 1633 și 1639 după răscoala de la Shimabara: oprirea creștinismului, izgonirea portughezilor, oprirea japonezilor de a ieși din țară sub pedeapsa cu moartea. Ronald Toby a dovedit că eticheta înșală: arhipelagul a ținut patru porți deschise și rânduite, cu olandezii la Dejima, chinezii la Nagasaki, Coreea prin Tsushima, iar ainu și Ryukyu prin alte moșii. Nu a fost izolare, ci monopol de stat asupra legăturilor din afară.',
        'Prin crăpătura Dejimei au intrat studiile olandeze, sau rangaku. Doctori japonezi au tălmăcit manuale de anatomie europene și le-au verificat întocmirea prin disecții; s-au studiat astronomia, cartografia, botanica și balistica. Când au venit corăbiile americane, era în Japonia un grup mic, dar adevărat, de oameni ce știau ce se întâmpla în lume, iar acea pregătire dinainte face parte din lămurirea a ceea ce a urmat.',
      ].join('\n\n'),
      callout:
        'Cuvântul sakoku nu apare până în 1801, în tălmăcirea unui text european. Rânduiala nu se socotea pe sine închisă, ci singura stăpână a unor legături din afară aspru rânduite.',
    },
    {
      title: 'Criza bakumatsu și Restaurarea',
      body: [
        'Escadra comodorului Perry a venit în 1853 cu vase cu aburi și cerința de a deschide porturi. Shogunatul, fără puterea militară de a refuza, a semnat Tratatul de la Kanagawa în 1854 și apoi învoieli de negoț ce cuprindeau vamă fixată din afară și extrateritorialitate pentru străini, adică același tipar impus Chinei. Deosebirea a stat în răspunsul dinăuntru.',
        'Criza a dezlănțuit cincisprezece ani de conflict cunoscuți ca bakumatsu. Împotriva umilinței s-a alcătuit o mișcare cu lozinca de a cinsti împăratul și a izgoni barbarii, hrănită de școala de studii naționale kokugaku, ce cerea de decenii o tradiție japoneză mai veche decât înrâurirea chinezească. Moșiile Satsuma și Chōshū, în sud-vest, după ce au văzut în luptă directă superioritatea navală occidentală, și-au schimbat strategia: au încetat să mai vrea izgonirea străinilor și au hotărât să le capete tehnica ca să le poată sta împotrivă.',
        'În 1868, o unire a acelor moșii a doborât shogunatul într-un război civil scurt și a proclamat restaurarea cârmuirii directe a împăratului Meiji, un adolescent. Cuvântul restaurare e întocmai în forma lui și înșelător în miezul lui: s-a înfățișat ca o întoarcere la o rânduială veche și a fost o revoluție purtată de sus de samurai de rang de mijloc ce și-au desfăcut propria clasă.',
        'Programul a fost vestit în Carta Jurământului celor Cinci Articole și a fost înfăptuit cu o iuțeală uimitoare. În 1871 moșiile au fost desființate și înlocuite cu prefecturi; simbriile samurailor s-au prefăcut în obligațiuni și apoi s-au lichidat; s-a statornicit slujba militară silită, care a pus capăt monopolului războinic; s-a impus o dare pe pământ plătită în bani, învățământul primar deopotrivă pentru toți în 1872 și un sistem bancar și poștal. Răscoala de la Satsuma din 1877, înăbușită de o armată de recruți țărani, a încheiat împotrivirea samurailor.',
        'Lozinca era să îmbogățească țara și să întărească armata. Statul a zidit industrii de pildă și apoi le-a vândut unor grupuri particulare ce aveau să ajungă zaibatsu; a trimis misiuni în străinătate, ca misiunea Iwakura, ca să studieze sisteme de învățământ, juridice și militare; a angajat experți străini cu porunca pe față de a pregăti înlocuitori japonezi. Constituția din 1889, întemeiată pe modelul prusac, a statornicit o dietă aleasă cu puteri mărginite și un împărat sfânt și de neatins, iar Rescriptul asupra Educației din 1890 a formulat o ideologie de credință predată în toate școlile.',
      ].join('\n\n'),
    },
    {
      title: 'Ce lămurește cazul japonez',
      body: [
        'Urmările au venit repede și au fost cu două fețe. Japonia a învins China în 1895 și a anexat Taiwanul, a biruit Rusia în 1905, cea dintâi înfrângere a unei puteri europene de către un stat asiatic în vremea modernă, a anexat Coreea în 1910 și a dobândit sfârșitul tratatelor nedrepte în 1911. A ajuns model pentru naționaliști din toată Asia și, în același timp, putere colonială cu aceleași obiceiuri pe care le suferise.',
        'Întrebarea de ce a izbutit Japonia și alții nu, primește mai multe răspunsuri ce se împlinesc unul pe altul. Unul e instituțional: țara avea deja un stat strâns la centru cu putere fiscală, o rețea de legături, o elită cărturărească și o încercare de cârmuire în moșii ce s-a prefăcut în administrație de țară. Altul e economic: agricultura de negoț, alfabetizarea și piețele dinăuntru din vremea Tokugawa au dat o temelie ce nu trebuia zidită de la nimic. Thomas Smith a documentat această continuitate în fața ideii că Meiji a pornit de la nimic.',
        'A treia e geopolitică și de vreme: Japonia s-a deschis când puterile erau ocupate în China și în alte locuri, ducea lipsă de avuții ce ar fi îndreptățit o cucerire costisitoare și a avut la îndemână două decenii de răgaz. Iar a patra e de hotărâre politică: elita ce a luat puterea în 1868 a ales să prefacă țara în loc să-și apere locul înăuntrul rânduielii vechi, ceea ce cerea desfacerea chiar a treptei din care ea însăși venea.',
        'Istoriografia discută cum se cuvine numit 1868. Tradiția marxistă japoneză l-a tratat ca pe o revoluție burgheză neîntreagă ce a lăsat neatinse elemente feudale; alții l-au descris ca pe o revoluție de sus asemănătoare cu unirea germană; iar sunt cei ce subliniază continuitatea cu tendințele de mai târziu ale perioadei Tokugawa și tăgăduiesc ruptura. Discuția contează fiindcă de ea atârnă cum se lămurește militarismul de mai apoi.',
        'Se discută și vocabularul însuși. A numi feudală Japonia a fost multă vreme o asemuire cu Europa pe care Marc Bloch a primit-o și pe care mai apoi a fost nuanțată: legătura de vasalitate, folosința pământului și fărâmițarea puterii au existat, dar rolul împăratului, lipsa unei Biserici de sine stătătoare și puterea birocrației războinice fac din cazul japonez ceva deosebit. Iar bushidō ca un cod încheiat de cinste războinică e în bună parte o construcție a vremii Tokugawa și mai ales Meiji, când nu mai era niciun război de purtat.',
      ].join('\n\n'),
      callout:
        'Bushidō, citat ca firea de neamintit a samuraiului, s-a codificat pe când samuraii nu mai luptaseră de veacuri, și s-a răspândit în afara Japoniei printr-o carte scrisă în engleză în 1900 pentru un public occidental.',
    },
  ],
  concepts: [
    { term: 'Ritsuryō', definition: 'Sistem de coduri legale și administrative din secolul al VIII-lea, copiat după modelul Tang. S-a desfăcut pe dinăuntru odată cu prefacerea pământurilor în proprietate particulară.' },
    { term: 'Shōen', definition: 'Moșie particulară scutită de dări, legată de temple sau de familii nobile. Întinderea ei a golit de avuții statul central de la Heian.' },
    { term: 'Bushi', definition: 'Războinici de obârșie provincială, ivit din nevoia de a apăra și de a strânge dările de la shōen. Nu au fost o zămislire a curții.' },
    { term: 'Shogunat', definition: 'Cârmuire militară ce poartă puterea adevărată în numele unui împărat ce-și păstrează îndreptățirea. Formulă instituțională proprie Japoniei.' },
    { term: 'Sengoku', definition: 'Veacul statelor în război, între 1467 și 1600: fărâmițare în moșii, cetăți și întrecere militară, cu creștere economică deodată.' },
    { term: 'Daimyō', definition: 'Stăpân al unei moșii cu putere de a da legi, de a strânge dări și de a ține armată proprie, sub autoritatea de ansamblu a shogunatului.' },
    { term: 'Despărțirea treptelor', definition: 'Măsura lui Hideyoshi ce a luat armele țăranilor și a fixat granița dintre războinici și producători, temelia rânduielii obștești Tokugawa.' },
    { term: 'Sankin-kōtai', definition: 'Îndatorirea daimyō de a locui pe rând la Edo, lăsându-și acolo familia. Stăpânire politică ce a mai și unit economia întregii țări.' },
    { term: 'Sakoku', definition: 'Politică de mărginire a legăturilor din afară din 1639 încoace. Mai mult decât izolare, a fost un monopol de stat asupra unor legături din afară rânduite.' },
    { term: 'Rangaku', definition: 'Studii olandeze: medicină, astronomie, cartografie și balistică europeană, învățate prin crăpătura de negoț de la Dejima.' },
    { term: 'Kokugaku', definition: 'Școală de studii naționale ce cerea o tradiție japoneză mai veche decât înrâurirea chinezească. Temelie de gândire a mișcării imperiale din 1868.' },
    { term: 'Bakumatsu', definition: 'Cei din urmă cincisprezece ani ai shogunatului, între 1853 și 1868: tratate nedrepte, conflict dinăuntru și schimbarea de strategie a moșiilor din sud-vest.' },
    { term: 'Fukoku kyōhei', definition: 'Lozinca Meiji de a îmbogăți țara și a întări armata. Rezumă programul de prefacere purtat de stat.' },
    { term: 'Zaibatsu', definition: 'Mari grupuri de negoț de familie, alcătuite prin cumpărarea de la stat a industriilor de pildă zidite în cei dintâi ani Meiji.' },
  ],
  debates: [
    {
      question: 'Are rost să fie numită feudală Japonia medievală?',
      positions: [
        {
          school: 'Asemuire potrivită (Bloch; Hall)',
          argument:
            'Au existat vasalitate personală, dare de pământ în schimbul slujbei militare și fărâmițarea autorității obștești, care sunt însușirile ce definesc modelul european.',
        },
        {
          school: 'Categorie înșelătoare (Friday și alții)',
          argument:
            'Împăratul nu a fost niciodată dat la o parte, nu a fost o Biserică cu putere de sine stătătoare, iar administrația războinică a fost mult mai birocratică decât lasă să se creadă asemuirea. Termenul aduce un cadru european ce ascunde ce e propriu cazului.',
        },
      ],
      state:
        'Se folosește azi cu grijă și între ghilimele. Discuția s-a dovedit de folos mai ales ca să revizuiască însuși conceptul de feudalism în Europa.',
    },
    {
      question: 'A fost Japonia cu adevărat izolată între 1639 și 1853?',
      positions: [
        {
          school: 'Izolare (citirea tradițională)',
          argument:
            'Oprirea creștinismului, izgonirea europenilor și pedeapsa cu moartea pentru cine ieșea din țară au tăiat legătura din afară vreme de două veacuri și lămuresc rămânerea în urmă tehnică față de Occident.',
        },
        {
          school: 'Patru porți rânduite (Toby, 1984)',
          argument:
            'Olandezii la Dejima, chinezii la Nagasaki, Coreea prin Tsushima, iar ainu și Ryukyu prin alte moșii au ținut negoț, cunoștințe și diplomație. A fost monopol de stat asupra legăturilor din afară, nu lipsa lor.',
        },
      ],
      state:
        'Revizuirea lui Toby e azi poziția de căpetenie. Cuvântul sakoku nici măcar nu se folosea în acea vreme: apare în 1801 tălmăcind un text european.',
    },
    {
      question: 'A fost 1868 o restaurare, o revoluție sau o continuitate?',
      positions: [
        {
          school: 'Revoluție de sus',
          argument:
            'O elită de samurai de rang de mijloc a desființat moșiile, a lichidat simbriile propriei ei clase, a statornicit slujba militară silită și a rânduit din nou statul în mai puțin de un deceniu.',
        },
        {
          school: 'Revoluție burgheză neîntreagă (istoriografia marxistă japoneză)',
          argument:
            'Schimbarea nu a înlăturat structurile agrare, nici puterea vechilor elite, iar Constituția din 1889 a statornicit un autoritarism ce lămurește mersul militarist de mai apoi.',
        },
        {
          school: 'Continuitate Tokugawa (Smith; Totman)',
          argument:
            'Alfabetizarea, agricultura de negoț, piețele dinăuntru și puterea administrativă existau deja. Meiji nu a pornit de la nimic: a grăbit și a îndreptat din nou tendințe deja pornite.',
        },
      ],
      state:
        'Stăpânește o citire ce îmbină continuitatea temeliilor materiale cu firea înadins revoluționară a hotărârilor politice din 1868 până în 1877.',
    },
  ],
  sources: [
    { author: 'Murasaki Shikibu', title: 'Povestea lui Genji', year: 'c. 1008', kind: 'primaria', note: 'Roman al curții de la Heian scris în kana de o doamnă în slujba împărătesei. Tablou dinăuntru al unei elite.' },
    { author: 'Sei Shōnagon', title: 'Cartea pernei', year: 'c. 1002', kind: 'primaria', note: 'Însemnări, liste și judecăți ale unei doamne de curte. Izvor de neînlocuit despre simțire și viață de fiecare zi aristocratică.' },
    { author: 'Anonim', title: 'Heike monogatari', year: 'secolul al XIII-lea', kind: 'primaria', note: 'Epopee recitată despre războiul Genpei, cu căderea celor puternici ca temă budistă de căpetenie.' },
    { author: 'Shogunatul de la Kamakura', title: 'Codul Jōei', year: '1232', kind: 'primaria', note: 'Drept propriu al războinicilor, cu temeiuri practice în fața codurilor de curte.' },
    { author: 'Toyotomi Hideyoshi', title: 'Edictul luării săbiilor', year: '1588', kind: 'primaria', note: 'Despărțirea juridică a războinicilor de țărani, temelia rânduielii obștești a celor două veacuri următoare.' },
    { author: 'Shogunatul Tokugawa', title: 'Buke shohatto', year: '1615', kind: 'primaria', note: 'Legi pentru casele războinice: stăpânirea cetăților, a căsătoriilor și a purtării daimyō.' },
    { author: 'Sugita Genpaku', title: 'Kaitai shinsho și amintiri ale rangaku', year: '1774 și 1815', kind: 'primaria', note: 'Tălmăcirea unui manual de anatomie olandez și povestirea procesului. Document al legăturii științifice din timpul sakoku.' },
    { author: 'Yamamoto Tsunetomo', title: 'Hagakure', year: 'c. 1716', kind: 'primaria', note: 'Cugetările unui samurai fără război despre moarte și slujbă. Izvor despre codificarea târzie a idealului războinic.' },
    { author: 'Japonia și Statele Unite', title: 'Tratatul de la Kanagawa', year: '1854', kind: 'primaria', note: 'Cea dintâi învoială impusă după sosirea lui Perry. Începutul șirului de tratate nedrepte.' },
    { author: 'Guvernul Meiji', title: 'Carta Jurământului celor Cinci Articole', year: '1868', kind: 'primaria', note: 'Programul de la început al noii rânduieli: adunări de dezbatere și căutarea cunoașterii în toată lumea.' },
    { author: 'Fukuzawa Yukichi', title: 'Autobiografie și Îndemn la învățătură', year: '1872–1899', kind: 'primaria', note: 'Glasul celui mai de seamă răspânditor al gândirii occidentale în Japonia și întemeietor de universitate.' },
    { author: 'Imperiul Japoniei', title: 'Constituția Meiji', year: '1889', kind: 'primaria', note: 'Model prusac: dietă aleasă cu puteri mărginite și împărat sfânt și de neatins ca izvor de suveranitate.' },
    { author: 'Guvernul Meiji', title: 'Rescriptul Imperial asupra Educației', year: '1890', kind: 'primaria', note: 'Text de credință și evlavie de familie citit în toate școlile. Miezul ideologiei oficiale până în 1945.' },
    { author: 'Nitobe Inazō', title: 'Bushido, sufletul Japoniei', year: '1900', kind: 'primaria', note: 'Scris în engleză pentru cititori occidentali. Izvorul icoanei internaționale a samuraiului, nu descriere istorică.' },
    { author: 'John Whitney Hall', title: 'Imperiul japonez', year: '1968', kind: 'estudio', note: 'Sinteză clasică ce a statornicit cadrul istoriografiei occidentale despre Japonia.' },
    { author: 'Thomas C. Smith', title: 'The Agrarian Origins of Modern Japan', year: '1959', kind: 'estudio', note: 'Documentează agricultura de negoț și temelia economică Tokugawa pe care s-a clădit Meiji.' },
    { author: 'Ronald Toby', title: 'State and Diplomacy in Early Modern Japan', year: '1984', kind: 'estudio', note: 'Dărâmă ideea izolării depline și descrie cele patru căi rânduite de legătură din afară.' },
    { author: 'Conrad Totman', title: 'A History of Japan', year: '2000', kind: 'estudio', note: 'Istorie generală cu luare-aminte la mediu, la avuții și la demografie.' },
    { author: 'Eiko Ikegami', title: 'The Taming of the Samurai', year: '1995', kind: 'estudio', note: 'Sociologie istorică a prefacerii războinicului în dregător și a zidirii cinstei.' },
    { author: 'Marius Jansen', title: 'The Making of Modern Japan', year: '2000', kind: 'estudio', note: 'Sinteză de referință despre vremea ce merge de la Tokugawa la secolul XX.' },
    { author: 'Andrew Gordon', title: 'A Modern History of Japan', year: '2003', kind: 'estudio', note: 'Manual de azi de la bakumatsu încoace, cu luare-aminte la muncă, gen și viață de fiecare zi.' },
    { author: 'Carol Gluck', title: 'Japans Modern Myths', year: '1985', kind: 'estudio', note: 'Analizează zidirea înadins a ideologiei naționale în ultima perioadă Meiji.' },
  ],
  documents: [
    {
      section: 3,
      title: 'Carta Jurământului lui Meiji',
      text: [
        'Se vor statornici adunări de dezbatere și toate treburile se vor hotărî prin discuție publică.',
        'Toate treptele, sus-puse și de jos, se vor uni ca să poarte cu putere administrarea treburilor statului.',
        'Se vor lăsa obiceiurile rele din trecut, iar totul se va întemeia pe legile drepte ale firii.',
        'Se va căuta cunoașterea prin toată lumea, ca să se întărească temeliile puterii imperiale.',
      ].join('\n\n'),
      source: 'Carta Jurământului în cinci articole, împăratul Meiji, aprilie 1868.',
      note: 'Versiune proprie și prescurtată după japoneză.',
      question: 'Textul se înfățișează ca restaurare a puterii imperiale și, în același timp, propune căutarea cunoașterii prin toată lumea. Cum poate un apel la tradiție să slujească la îndreptățirea schimbării celei mai iuți din istoria Japoniei?',
    },
  ],
  images: [
    {
      alt: 'Gravură japoneză cu un val uriaș cu creastă spumoasă gata să se spargă peste trei bărci, cu Fuji în fundal',
      caption: 'Marele val de la Kanagawa, de Katsushika Hokusai, pe la 1831.',
    },
    {
      alt: 'Pictură orizontală a unui interior de palat văzut de sus, fără acoperiș, cu figuri cu chip simplificat printre paravane',
      caption: 'Sul ilustrat al Genji monogatari, secolul al XII-lea. Romanul l-a scris Murasaki Shikibu, doamnă a curții de la Heian, pe la anul 1000.',
    },
    {
      alt: 'Armură japoneză întreagă expusă pe un suport, cu coif cu coarne, mască de față și plăci lăcuite legate cu șnur',
      caption: 'Armură de samurai din perioada Edo. Plăcile sunt cusute cu șnur de mătase: apără și, în același timp, arată culoarea clanului.',
    },
    {
      alt: 'Portret fotografic al unui bărbat tânăr în uniformă militară occidentală, cu epoleți și sabie',
      caption: 'Împăratul Meiji în uniformă europeană. Restaurarea s-a înfățișat ca întoarcere a puterii imperiale și a funcționat ca modernizarea cea mai iute a secolului al XIX-lea.',
    },
  ],
  questions: [
    {
      question: 'Ce două elemente ale modelului chinezesc nu le-a adus Japonia?',
      options: [
        'Scrisul și budismul',
        'Examenele ca poartă spre dregătorie și mandatul cerului',
        'Catastiful și codurile de legi',
        'Birocrația de ranguri și sprijinul religios',
      ],
      explanation: 'Fără mandatul cerului nu e nicio doctrină ce îngăduie înlocuirea dinastiei: împăratul japonez domnește prin obârșie dumnezeiască și nicio altă casă nu l-a înlocuit.',
    },
    {
      question: 'Ce erau shōen și ce urmare au avut?',
      options: [
        'Garnizoane militare provinciale ce au întărit puterea centrală',
        'Moșii particulare scutite de dări ce au golit de avuții statul de la Heian',
        'Școli de pregătire a dregătorilor',
        'Porturi deschise negoțului cu China',
      ],
      explanation: 'Proprietarii lor aveau nevoie de oameni înarmați ca să le apere și să strângă dările, și de acolo au ieșit grupurile războinice ce au sfârșit prin a cârmui.',
    },
    {
      question: 'De ce au scris în kana autoarele curții de la Heian?',
      options: [
        'Fiindcă kana era scrisul oficial al statului',
        'Fiindcă erau lăsate afară din scrisul chinezesc, rezervat treburilor serioase ale bărbaților',
        'Fiindcă chineza nu îngăduia poezie',
        'Fiindcă așa poruncise familia Fujiwara',
      ],
      explanation: 'Din acea lăsare afară au ieșit Genji monogatari și Cartea pernei, lucrările de căpetenie ale acelei vremi.',
    },
    {
      question: 'De ce a ruinat shogunatul de la Kamakura biruința asupra mongolilor?',
      options: [
        'Fiindcă întăriturile de coastă s-au distrus în taifunuri',
        'Fiindcă nu au fost pământuri cucerite cu care să fie răsplătiți vasalii chemați la oaste',
        'Fiindcă a pierdut sprijinul împăratului',
        'Fiindcă mongolii au impus un tribut anual',
      ],
      explanation: 'Sistemul se sprijinea pe darea de pământ în schimbul slujbei, iar un război de apărare nu zămislește pradă de teritoriu.',
    },
    {
      question: 'Ce a caracterizat perioada sengoku?',
      options: [
        'O închidere deplină a țării negoțului din afară',
        'Fărâmițare în moșii în război și, în același timp, creștere economică pornită de daimyō ca să-și plătească armatele',
        'Restaurarea cârmuirii directe a împăratului',
        'Stăpânirea mănăstirilor budiste asupra întregului teritoriu',
      ],
      explanation: 'Au fost desțeleniri, mine, piețe, cetăți și orașe libere de negustori, ca Sakai.',
    },
    {
      question: 'De ce au oprit unificatorii creștinismul?',
      options: [
        'Din pricina nepotrivirii de doctrină cu budismul zen',
        'Fiindcă vedeau în el o credință din afară nepotrivită cu rânduiala politică pe care o clădeau',
        'Fiindcă misionarii refuzau să facă negoț',
        'Fiindcă o cereau negustorii olandezi',
      ],
      explanation: 'Creștinismul a ajuns să aibă câteva sute de mii de credincioși și sprijinul unor daimyō din sud, interesați și de negoț.',
    },
    {
      question: 'Ce a făcut Hideyoshi prin luarea armelor din 1588?',
      options: [
        'A dezarmat daimyō rivali',
        'A despărțit juridic războinicii de țărani, fixând temelia rânduielii obștești Tokugawa',
        'A oprit facerea armelor de foc',
        'A zidit o armată de țară de recruți',
      ],
      explanation: 'A mai poruncit un catastif de țară. Cele două năvăliri ale lui asupra Coreei din anii 1590 au fost un dezastru și cea din urmă aventură din afară vreme de veacuri.',
    },
    {
      question: 'Ce slujbă avea sankin-kōtai?',
      options: [
        'Strângerea dării pe pământ în moșii',
        'Silirea daimyō să locuiască pe rând la Edo, lăsându-și acolo familia, ca stăpânire politică',
        'Rotirea guvernatorilor orașelor shogunatului',
        'Rânduirea negoțului cu olandezii',
      ],
      explanation: 'Funcționa ca un ostatic rânduit în instituție și, pe deasupra, a zămislit o rețea de drumuri, hanuri și cheltuială orășenească ce a unit economia întregii țări.',
    },
    {
      question: 'Ce s-a întâmplat cu rânduiala de trepte din teorie în perioada Tokugawa?',
      options: [
        'S-a aplicat cu asprime deplină două veacuri și jumătate',
        'S-a depărtat curând de practică: samurai prefăcuți în dregători îndatorați și negustori din Osaka cu avuție mare',
        'A pierit după răscoala de la Shimabara',
        'A fost înlocuită cu un sistem de caste moștenite închise',
      ],
      explanation: 'În orașe a mai și înflorit o cultură proprie cu kabuki, roman de rând și gravură ukiyo-e.',
    },
    {
      question: 'Ce a dovedit Ronald Toby despre politica de sakoku?',
      options: [
        'Că izolarea a fost și mai aspră decât se credea',
        'Că au fost patru căi rânduite de legătură și că a fost un monopol de stat asupra legăturilor din afară, nu lipsa lor',
        'Că negoțul cu Europa a continuat fără margini',
        'Că oprirea nu a ajuns niciodată să fie aplicată',
      ],
      explanation: 'Olandezii la Dejima, chinezii la Nagasaki, Coreea prin Tsushima, iar ainu și Ryukyu prin alte moșii. Cuvântul sakoku nici măcar nu se folosea atunci.',
    },
    {
      question: 'Ce era rangaku și de ce contează?',
      options: [
        'O școală de arte marțiale pentru samurai fără război',
        'Studiile olandeze de medicină, astronomie și balistică, ce au lăsat un grup de japonezi înștiințați despre lume dinainte de 1853',
        'Doctrina neoconfucianistă oficială a shogunatului',
        'Sistemul de școli de templu pentru alfabetizarea de rând',
      ],
      explanation: 'Doctori japonezi au tălmăcit manuale de anatomie europene și le-au verificat întocmirea prin disecții.',
    },
    {
      question: 'Cum s-a schimbat strategia Satsuma și Chōshū în timpul bakumatsu?',
      options: [
        'Au trecut de la sprijinirea shogunatului la apărarea lui militară',
        'Au trecut de la a vrea izgonirea străinilor la a le lua tehnica ca să le poată sta împotrivă',
        'Au renunțat la restaurarea imperială',
        'S-au aliat cu Rusia împotriva Statelor Unite',
      ],
      explanation: 'Schimbarea s-a petrecut după ce au văzut în luptă directă superioritatea navală occidentală.',
    },
    {
      question: 'De ce e înșelător să fie numit restaurare ce s-a întâmplat în 1868?',
      options: [
        'Fiindcă împăratul nu a ajuns să recapete tronul',
        'Fiindcă s-a înfățișat ca întoarcere la o rânduială veche și a fost o revoluție purtată de sus de samurai ce și-au desfăcut propria clasă',
        'Fiindcă shogunatul a continuat să cârmuiască până în 1877',
        'Fiindcă nu a schimbat structura administrativă a țării',
      ],
      explanation: 'Într-un deceniu s-au desființat moșiile, s-au lichidat simbriile samurailor și s-a statornicit slujba militară silită.',
    },
    {
      question: 'Ce model a urmat Constituția Meiji din 1889?',
      options: [
        'Cel britanic, cu un guvern răspunzător în fața Parlamentului',
        'Cel prusac: dietă aleasă cu puteri mărginite și împărat sfânt și de neatins',
        'Cel american, cu despărțire aspră a puterilor',
        'Cel francez al celei de-a Treia Republici',
      ],
      explanation: 'Rescriptul asupra Educației din 1890 a încheiat cadrul cu o ideologie de credință predată în toate școlile.',
    },
    {
      question: 'Potrivit lui Thomas Smith, ce temelie a moștenit Japonia Meiji de la perioada Tokugawa?',
      options: [
        'O armată modernă deja rânduită',
        'Agricultură de negoț, alfabetizare largă, piețe dinăuntru și putere administrativă',
        'O industrie grea în funcțiune',
        'Un sistem bancar de credit internațional',
      ],
      explanation: 'Meiji nu a pornit de la nimic: a grăbit și a îndreptat din nou tendințe ce mergeau de un veac.',
    },
    {
      question: 'Ce se cuvine avut în vedere când e folosit termenul bushidō?',
      options: [
        'Că e un cod scris din secolul al XII-lea păstrat întreg',
        'Că s-a codificat pe când samuraii nu mai luptaseră de veacuri și s-a răspândit cu o carte scrisă în engleză în 1900',
        'Că a fost o născocire a misionarilor iezuiți',
        'Că se aplica numai daimyō, nu și vasalilor lor',
      ],
      explanation: 'Ca noțiune de analiză, cere aceeași grijă ca a numi feudală Japonia: amândouă aduc cadre ce ascund ce e propriu cazului.',
    },
  ],
}
