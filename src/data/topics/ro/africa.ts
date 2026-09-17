import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/africa.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13 date, 14
   concepte, 3 dezbateri, 22 surse, un document comentat, 5 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const africaRo: TopicTranslation = {
  title: 'Regate africane: Mali, Songhay, Etiopia și Marele Zimbabwe',
  description: 'State, universități și rețele de negoț ale unui continent căruia istoriografia europeană i-a tăgăduit veacuri întregi dreptul de a avea istorie.',
  years: 'secolele IV–XVII',
  summary:
    'În 1830, Hegel a scris că Africa nu era o parte istorică a lumii. Acea frază, repetată un veac și jumătate, descrie o problemă de izvoare și de prejudecată, nu de trecut. Africa dinainte de colonizare a avut state cu administrație și fiscalitate, orașe cu zeci de mii de locuitori, universități cu biblioteci de manuscrise, rețele de negoț ce legau Mediterana de golful Guineei și Oceanul Indian de China, și o arhitectură uriașă în piatră ridicată fără nicio înrâurire din afară. A reface acea istorie cere îmbinarea arheologiei, a lingvisticii, a tradiției orale și a izvoarelor scrise în arabă, în ge\'ez, în portugheză și în swahili, și dărâmarea, pe deasupra, a două operațiuni ideologice: cea care a tăgăduit puterea africană de a clădi și cea care a redus continentul la rolul lui de furnizor de sclavi.',
  keyDates: [
    { date: 'secolul al IV-lea', event: 'Regele Ezana din Aksum trece la creștinism. Etiopia primește o credință pe care o va păstra șaisprezece veacuri.' },
    { date: 'secolele VIII–XI', event: 'Apogeul regatului Ghana, cel dintâi mare stat al Sahelului apusean, întemeiat pe negoțul cu aur și cu sare.' },
    { date: 'secolele IX–XV', event: 'Alcătuirea orașelor swahili de pe coasta răsăriteană: Kilwa, Mombasa, Zanzibar, Sofala.' },
    { date: 'c. 1235', event: 'Sundiata Keita biruie la Kirina și întemeiază imperiul Mali. Tradiția cartei de la Kurukan Fuga.' },
    { date: 'secolele XII–XIII', event: 'Bisericile săpate în stâncă de la Lalibela, în Etiopia dinastiei Zagwe.' },
    { date: '1324', event: 'Pelerinajul la Mecca al lui mansa Musa, ce scade prețul aurului la Cairo prin darurile lui.' },
    { date: '1352–1353', event: 'Ibn Battuta vizitează Mali și lasă singura descriere a unui martor din afară a imperiului la apogeul lui.' },
    { date: '1375', event: 'Atlasul catalan îl înfățișează pe mansa Musa cu o pepită de aur: Mali intră în cartografia europeană.' },
    { date: 'secolele XIII–XV', event: 'Avântul Marelui Zimbabwe, cu incinte de piatră fără mortar și negoț cu coasta Oceanului Indian.' },
    { date: '1464–1591', event: 'Imperiul Songhay: Sonni Ali și askia. Tombouctou și Gao ca centre de negoț și de știință.' },
    { date: '1493–1528', event: 'Domnia lui askia Muhammad. Administrație, pelerinaj și sprijin pentru învățătură.' },
    { date: '1591', event: 'O armată saadiană trece Sahara cu arme de foc și învinge Songhay la Tondibi.' },
    { date: 'secolele XVI–XVII', event: 'Întinderea negoțului atlantic și prefacerea economiilor politice ale Africii de vest și centrale.' },
  ],
  sections: [
    {
      title: 'Cum se cercetează Africa dinainte de colonizare',
      body: [
        'Problema dintâi a temei nu e trecutul african, ci arhiva. Cea mai mare parte a continentului nu a zămislit documentație scrisă neîntreruptă înainte de secolul al XIX-lea, iar unde a fost, în arabă, în ge\'ez sau în swahili, se păstrează neuniform și a fost mai puțin folosită decât merită. Asta nu înseamnă lipsă de izvoare: înseamnă că trebuie folosite altele și îmbinate cu metodă.',
        'Arheologia a prefăcut domeniul. Săpături ca cele de la Jenne-Jeno, în delta interioară a Nigerului, au dovedit că existau orașe de mii de locuitori încă din secolul al III-lea, adică orășenizare dinaintea venirii islamului și fără legătură cu îndemnuri din afară. Datarea prin radiocarbon, arheometalurgia și studiul ceramicii și al mărgelelor îngăduie refacerea cronologiilor și a drumurilor de negoț fără să atârne de niciun text.',
        'Lingvistica istorică aduce altă cale. Refacerea familiilor de limbi, și mai ales întinderea bantu din Africa de vest spre răsărit și spre sud de-a lungul mileniilor, îngăduie urmărirea migrațiilor, a răspândirii meșteșugurilor agricole și metalurgice și a legăturilor dintre popoare. Christopher Ehret a îmbinat aceste date cu arheologia ca să scrie istoria unor perioade fără documente.',
        'Tradiția orală e izvorul cel mai discutat și cel ce a dat naștere dezbaterii de metodă de căpetenie a africanisticii. Jan Vansina a dovedit în 1961 că tradițiile orale pot fi tratate ca izvoare istorice dacă li se aplică o critică asemănătoare cu cea a textelor: să fie identificate genul, lanțul de transmitere, rostul obștesc al povestirii și schimonosirile ei statornice. Griot-ii sau jeli din Africa de vest erau meșteri de meserie, cu pregătire și răspundere, nu povestitori de la sine.',
        'Izvoarele scrise din afară sunt prețioase și trebuie citite cu grijă. Geografii arabi, de la al-Bakri la Ibn Khaldun, descriu statele Sahelului cu asprime neuniformă și adesea din auzite; portughezii secolului al XVI-lea scriu din interes de negoț; iar toată documentația colonială de mai apoi poartă în ea o teorie despre neputința africană. A le încrucișa unele cu altele și cu arheologia e singurul fel de a lucra.',
      ].join('\n\n'),
      callout:
        'Jenne-Jeno dovedește că au fost orașe pe Nigerul mijlociu încă din secolul al III-lea, dinainte de islam și fără înrâurire din afară. Arheologia africană a dărâmat singură teza că statele au venit mereu din afară.',
    },
    {
      title: 'Aksum și Etiopia creștină',
      body: [
        'Regatul Aksum, în nordul de azi al Etiopiei și în Eritreea, a fost în secolele III-VI o putere de negoț pe care Mani a așezat-o printre cele patru mari imperii ale lumii, laolaltă cu Roma, Persia și China. Stăpânea negoțul Mării Roșii, a bătut monedă proprie în aur, în argint și în bronz, a dezvoltat un scris propriu, ge\'ez, și a ridicat stele monolitice de peste douăzeci de metri, printre pietrele cioplite cele mai mari ridicate vreodată.',
        'Pe la anul 340, regele Ezana a trecut la creștinism, cum documentează chiar inscripțiile și monedele lui, unde crucea înlocuiește semnele de mai înainte. Etiopia a ajuns astfel unul dintre cele dintâi state creștine din lume, înaintea celei mai mari părți a Europei, și și-a păstrat acea identitate șaisprezece veacuri, cu o biserică proprie, un canon biblic mai larg și o liturghie în ge\'ez.',
        'Ridicarea islamului a mutat drumurile Mării Roșii și a izolat în oarecare măsură regatul, care s-a mutat spre interiorul muntos. Sub dinastia Zagwe s-au săpat în secolele al XII-lea și al XIII-lea bisericile de la Lalibela, unsprezece temple cioplite în jos în stânca vie, cu ferestre, coloane și scurgeri, gândite ca un nou Ierusalim după căderea cetății pe mâna musulmanilor.',
        'Dinastia solomonică, din 1270 încoace, și-a îndreptățit puterea cu Kebra Nagast, text ce îi trage pe regii etiopieni din Solomon și din regina din Saba și așază Chivotul Legământului la Aksum. E o construcție de idee de întâia mărime, asemuibilă cu orice mit dinastic european, și a funcționat șapte sute de ani, până la doborârea ultimului împărat în 1974.',
        'Etiopia a ținut legături diplomatice cu Europa din secolul al XV-lea. Legenda Preotului Ioan, un rege creștin în Răsărit ce ar fi ajutat împotriva islamului, a îndreptat o parte din explorarea portugheză, iar când în secolul al XVI-lea sultanatul Adal a năvălit în țară cu sprijin otoman, un contingent portughez cu archebuze a luat parte la război. E o aducere-aminte de folos: Africa a fost cuprinsă în politica internațională cu mult înainte de colonizare.',
      ].join('\n\n'),
    },
    {
      title: 'Sahelul: Ghana și Mali',
      body: [
        'Geografia Sahelului îi lămurește istoria. La nord, deșertul cu minele de sare, o marfă de neocolit și rară; la sud, pădurea și bazinele fluviale cu zăcămintele de aur cele mai rodnice ale lumii medievale. Între ele, o fâșie unde statele s-au îmbogățit dând dări pe schimb. Negoțul transsaharian, prefăcut de folosirea cămilei încă din primele veacuri ale erei noastre, mișca aur, sare, aramă, piele, țesături, cărți și, de asemenea, oameni robiți.',
        'Regatul Ghana, fără legătură geografică cu țara de azi cu același nume, e cel dintâi documentat. Al-Bakri l-a descris în 1068 pornind de la martori: o capitală îndoită, cu un cartier regal și altul musulman cu douăsprezece moschei, o armată numeroasă, o dare pe fiecare încărcătură de sare ce intra și ieșea, și un monopol regal asupra pepitelor de aur ce chezășuia valoarea metalului măcinat ce circula ca monedă. Acest amănunt, un stat ce rânduiește oferta de bani, spune mai mult despre rafinarea lui decât orice adjectiv.',
        'Mali i-a urmat lui Ghana în secolul al XIII-lea. Întemeierea lui e pusă pe seama lui Sundiata Keita, biruitor la Kirina pe la 1235, iar epopeea lui Sundiata, transmisă oral de jeli opt veacuri, e deodată povestire de temelie și scrisoare politică: tradiția de la Kurukan Fuga strânge o adunare ce împarte slujbele între neamuri, rânduiește robia și statornicește îndatoririle cârmuitorului. Prețuirea ei ca document istoric întocmai e discutabilă; prețuirea ei ca izvor despre cultura politică a imperiului nu e.',
        'Mansa Musa a făcut în 1324 pelerinajul la Mecca cel mai vestit din istorie. A trecut Sahara cu o caravană uriașă și a împărțit atât de mult aur la Cairo, încât, potrivit cronicarilor egipteni, i-a scăzut prețul ani întregi. Urmarea asupra cunoașterii a fost trainică: în 1375, Atlasul catalan îl desenează așezat pe tron cu o pepită în mână, iar Mali intră în imaginația europeană ca sinonim al bogăției.',
        'Ibn Battuta a vizitat Mali între 1352 și 1353 și a lăsat singura descriere a unui martor din afară. A lăudat siguranța drumurilor, urâciunea nedreptății și grija cu care se împărțea dreptatea; s-a scandalizat de slobozenia femeilor și de obiceiuri de curte ce i s-au părut nepotrivite unor musulmani. Această privire îndoită e ce face izvorul prețios: nu idealizează, iar mustrările lui dau la iveală o societate ce primise islamul fără să se lepede de formele ei proprii.',
      ].join('\n\n'),
      callout:
        'Regatul Ghana scotea din circulație pepitele de aur și lăsa numai praful ca să țină valoarea. E politică monetară înadins gândită în secolul al XI-lea, într-un stat pe care istoriografia europeană l-a descris veacuri întregi ca trib.',
    },
    {
      title: 'Songhay, Tombouctou și știința scrisă',
      body: [
        'Imperiul Songhay, cu centrul la Gao, l-a înlocuit pe Mali ca putere a Nigerului în secolul al XV-lea. Sonni Ali a cucerit Tombouctou și Jenné și a rânduit o flotă fluvială; askia Muhammad, care a luat puterea în 1493, a clădit o administrație cu provincii, guvernatori numiți, un sistem fiscal și de greutăți și măsuri și o armată statornică. A făcut pelerinaj la Mecca și s-a întors cu titlul de calif al țărilor negrilor, o îndreptățire pe care a folosit-o politic.',
        'Tombouctou a fost în secolele al XV-lea și al XVI-lea unul dintre centrele de gândire ale lumii islamice. Moscheea și universitatea din Sankoré a strâns mii de studenți, cu învățătură de drept maliki, teologie, gramatică, astronomie și matematică, și o industrie a cărții ce copia, negustorea și aducea manuscrise. Leon Africanul a scris că la Tombouctou cărțile aduceau mai mult câștig decât orice altă marfă.',
        'Acele manuscrise există. Sute de mii se păstrează în biblioteci de familie și de instituții din Mali, multe încă necatalogate, iar salvarea lor în timpul conflictului din 2012 și din 2013 a fost o operațiune internațională. Cuprind cronici, drept, corespondență, contracte, medicină și astronomie, iar studiul lor rânduit rescrie istoria de gândire a Africii de vest.',
        'Din acel mediu au ieșit două cronici de temelie scrise în secolul al XVII-lea, Tarikh al-Sudan și Tarikh al-Fattash, ce povestesc istoria imperiilor Nigerului dinăuntru. Sunt izvoare dinăuntru, cu țelurile și cu tăcerile lor, dar rup de tot ideea unei Africi fără scris propriu despre propriul ei trecut.',
        'Songhay a căzut în 1591 dintr-odată. Sultanul saadian al Marocului a trimis o armată de vreo patru mii de oameni peste deșert, cu archebuze și tunuri, și a biruit la Tondibi o forță mult mai mare, dar fără arme de foc. Cucerirea nu a zămislit un imperiu statornic, ci fărâmițarea regiunii și decăderea marilor drumuri, într-o vreme când, pe deasupra, negoțul atlantic începea să mute osia economică spre coastă.',
      ].join('\n\n'),
    },
    {
      title: 'Coasta swahili și Marele Zimbabwe',
      body: [
        'Pe coasta răsăriteană, între Somalia și Mozambic, s-a alcătuit din secolul al IX-lea o civilizație orășenească vorbitoare de swahili, limbă bantu cu împrumuturi arabe și persane. Kilwa, Mombasa, Lamu, Zanzibar și Sofala erau cetăți-stat de negustori musulmani, cu case de corali, moschei, monedă proprie și un loc de căpetenie în negoțul Oceanului Indian: exportau aur, fildeș, lemn și sclavi, și aduceau ceramică chinezească, sticlă și țesături indiene.',
        'Această cultură a fost multă vreme tălmăcită ca o colonie arabă sau persană așezată peste populație africană. Arheologia și lingvistica au dovedit potrivnicul: e o civilizație africană ce a primit islamul și a luat parte la o rețea cosmopolită, cu continuitate materială de la așezările bantu de dinainte. Găsirile de porțelan Song și Ming pe coastă arată până unde ajungea acea rețea, iar o flotă chinezească a ajuns la Malindi în secolul al XV-lea.',
        'Mai spre interior, pe podișul dintre Zambezi și Limpopo, s-a ridicat Marele Zimbabwe între secolele al XIII-lea și al XV-lea: o mulțime de incinte de granit așezat fără mortar, cu ziduri de până la unsprezece metri și un turn conic, într-un oraș ce a putut adăposti între zece și douăzeci de mii de oameni. Bogăția lui venea din vite, din aur și din negoțul cu coasta, cum dovedesc găsirile de sticlă persană și de porțelan chinezesc din sit.',
        'Istoria tălmăcirii lui e un caz de manual despre ideologie și arheologie. Când europenii l-au documentat în secolul al XIX-lea, cea dintâi reacție a fost să-l pună pe seama fenicienilor, a arabilor sau a reginei din Saba, iar administrația colonială a Rhodesiei a susținut oficial acea variantă. În 1929, Gertrude Caton-Thompson a săpat situl cu metodă stratigrafică și a încheiat fără îndoială că era operă africană medievală; Peter Garlake a întărit-o mai apoi și a fost apăsat de regimul Rhodesiei pentru asta. Țara neatârnată a luat numele sitului în 1980.',
        'Marelui Zimbabwe i-au urmat statele Mutapa și Torwa, cu care au tratat portughezii din secolul al XVI-lea. Iar în Africa centrală, regatul Kongo a ținut din 1483 o legătură diplomatică cu Portugalia, cu solii, corespondență regală și un rege, Afonso I, ale cărui scrisori păstrate învinuiesc urmarea nimicitoare a negoțului cu sclavi asupra chiar regatului lui. E unul dintre glasurile africane din acea vreme cele mai însemnate ce se păstrează.',
      ].join('\n\n'),
      callout:
        'Că Marele Zimbabwe era operă africană s-a dovedit arheologic în 1929. Administrația colonială a continuat să tăgăduiască asta oficial încă o jumătate de veac, și i-a apăsat pe arheologii ce au susținut-o.',
    },
    {
      title: 'Negoțul cu sclavi și născocirea unui continent fără istorie',
      body: [
        'Negoțul atlantic a strămutat cu sila vreo doisprezece milioane și jumătate de oameni între secolele al XVI-lea și al XIX-lea, dintre care vreo zece milioane și jumătate au ajuns vii în America. Baza de date a călătoriilor de sclavi, clădită din registre de îmbarcare, a îngăduit socotirea ei cu o asprime pe care nu o avea acum treizeci de ani. La această cifră trebuie adăugate negoțul transsaharian și cel al Oceanului Indian, mai lungi în timp și mai rău documentate.',
        'Urmarea asupra Africii e ținta unei dezbateri însemnate. Walter Rodney a susținut în 1972 că negoțul și colonialismul de mai apoi au zămislit subdezvoltarea africană prin scoaterea populației la vârsta rodnică, prin militarizarea politicii și prin distrugerea producției meșteșugărești. Joseph Inikori a socotit pierderea demografică și urmarea ei de lungă durată, iar Nathan Nunn a arătat cu metode econometrice o legătură între cât de tare a lovit negoțul o regiune și treptele de azi de venit și de încredere obștească.',
        'John Thornton a nuanțat tabloul dintr-un alt unghi: africanii nu au fost supuși fără de voie, ci statele de pe coastă stăpâneau condițiile negoțului, fixau prețuri, impuneau vamă și hotărau cu cine să trateze, iar europenii nu au pătruns în interior decât în secolul al XIX-lea. Această constatare a hotărârii proprii nu e o micșorare morală: descrie cum a funcționat de fapt un sistem în care niște elite africane au luat parte, și din care cea mai mare parte a poporului a fost jertfă.',
        'Cealaltă moștenire e de gândire. Spusa lui Hegel că Africa nu avea istorie, și repetarea ei de istorici până bine în secolul XX, nu a fost o greșeală de informare: a fost o construcție ce a însoțit și a îndreptățit cucerirea. Când în 1963 un profesor de la Oxford a spus că nu era în Africa decât istoria europenilor de acolo, existau deja arheologia de la Jenne-Jeno, manuscrisele de la Tombouctou și săpăturile de la Marele Zimbabwe.',
        'Întorsătura a venit cu decolonizarea și cu o generație de istorici africani și africaniști ce au întemeiat catedre, reviste și proiecte ca Istoria generală a Africii a Unesco. Azi domeniul are dezbaterile lui dinăuntru, despre folosirea oralității, despre periodizare, despre asemuirea cu alte regiuni, și niciuna dintre ele nu mai stă în a dovedi că e ceva de cercetat.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Negoțul transsaharian', definition: 'Rețea de drumuri ce unea Mediterana de Sahel prin deșert, prefăcută de folosirea cămilei. Mișca aur, sare, aramă, cărți și oameni robiți.' },
    { term: 'Jeli sau griot', definition: 'Meșter de meserie în transmiterea genealogiilor, a istoriei și a dreptului în Africa de vest. Slujbă moștenită, cu pregătire și răspundere, nu povestire de la sine.' },
    { term: 'Mansa', definition: 'Titlul stăpânitorului din Mali. Cel mai cunoscut, Musa, a făcut în 1324 un pelerinaj ce a scăzut prețul aurului la Cairo.' },
    { term: 'Kurukan Fuga', definition: 'Adunare de temelie pusă pe seama imperiului Mali, transmisă oral, ce împarte slujbele între neamuri și fixează îndatoririle cârmuitorului.' },
    { term: 'Askia', definition: 'Titlul stăpânitorilor din Songhay din 1493 încoace. Askia Muhammad a rânduit provincii, fiscalitate, greutăți și măsuri și armată statornică.' },
    { term: 'Sankoré', definition: 'Moschee și centru de învățătură din Tombouctou. Miezul unei industrii a cărții ce copia, aducea și vindea manuscrise.' },
    { term: 'Ge\'ez', definition: 'Limbă și scris al Aksumului și al Bisericii etiopiene, încă liturgic. Unul dintre puținele scrisuri proprii ale Africii vechi.' },
    { term: 'Kebra Nagast', definition: 'Text ce îi trage pe regii etiopieni din Solomon și din regina din Saba. Îndreptățire dinastică în vigoare până în 1974.' },
    { term: 'Lalibela', definition: 'Mulțime de unsprezece biserici săpate în jos în stânca vie în secolele al XII-lea și al XIII-lea, gândite ca un nou Ierusalim.' },
    { term: 'Orașe swahili', definition: 'Cetăți-stat musulmane de pe coasta răsăriteană africană, de cultură bantu și limbă swahili, cuprinse în negoțul Oceanului Indian.' },
    { term: 'Dzimbahwe', definition: 'Casă de piatră în shona, obârșia numelui Zimbabwe. Numește incintele de granit fără mortar ale statelor de pe podiș.' },
    { term: 'Mutapa', definition: 'Stat urmaș al Marelui Zimbabwe pe podișul Zambeziului, cu care au tratat portughezii din secolul al XVI-lea.' },
    { term: 'Critica tradiției orale', definition: 'Metodă formulată de Vansina: identificarea genului, a lanțului de transmitere, a rostului obștesc și a schimonosirilor statornice ale povestirii înainte de a fi folosită ca izvor.' },
    { term: 'Negoțul atlantic cu sclavi', definition: 'Strămutarea cu sila a vreo doisprezece milioane și jumătate de oameni între secolele al XVI-lea și al XIX-lea, azi socotită prin registre de îmbarcare.' },
  ],
  debates: [
    {
      question: 'Poate fi folosită tradiția orală ca izvor istoric?',
      positions: [
        {
          school: 'Da, cu critică proprie (Vansina, 1961)',
          argument:
            'Tradițiile orale îngăduie o tratare critică asemănătoare cu cea a textelor: identificarea genului, a lanțului de transmitere, a rostului obștesc și a schimonosirilor statornice îngăduie scoaterea unei informații istorice de crezare.',
        },
        {
          school: 'Îndoială de metodă',
          argument:
            'Transmiterea orală se rânduiește din nou în fiecare generație după nevoile de-atunci, strânge cronologiile și contopește persoane, așa că prețuirea ei pentru a data întâmplări e foarte mărginită.',
        },
      ],
      state:
        'Metoda lui Vansina e azi de căpetenie și se aplică îmbinată cu arheologia și cu lingvistica. Discuția s-a mutat spre ce fel de informație dă fiecare gen oral, nu spre dacă slujește sau nu.',
    },
    {
      question: 'Cine a clădit Marele Zimbabwe?',
      positions: [
        {
          school: 'Obârșie din afară (arheologia colonială)',
          argument:
            'Cei dintâi europeni ce l-au documentat au pus incintele pe seama fenicienilor, a arabilor sau a reginei din Saba, iar administrația Rhodesiei a susținut oficial acea variantă zeci de ani.',
        },
        {
          school: 'Operă africană medievală (Caton-Thompson, 1931; Garlake)',
          argument:
            'Săpătura stratigrafică și datarea statornicesc fără îndoială o clădire shona din secolele al XIII-lea până în al XV-lea, cu o economie întemeiată pe vite, pe aur și pe negoțul cu coasta Oceanului Indian.',
        },
      ],
      state:
        'Rezolvată științific din 1929 și luptată politic încă o jumătate de veac. E pilda cea mai limpede despre cum un cadru ideologic poate supraviețui dovezii arheologice.',
    },
    {
      question: 'Ce urmare a avut negoțul atlantic asupra Africii?',
      positions: [
        {
          school: 'Subdezvoltare pricinuită (Rodney, 1972; Inikori)',
          argument:
            'Scoaterea populației la vârsta rodnică, militarizarea politicii și distrugerea producției meșteșugărești au oprit dezvoltarea africană și au zămislit nedreptatea de mai apoi.',
        },
        {
          school: 'Hotărâre proprie africană (Thornton, 1992)',
          argument:
            'Statele de pe coastă stăpâneau condițiile negoțului, fixau prețuri și vamă și hotărau cu cine să trateze. Europenii nu au pătruns în interior decât în secolul al XIX-lea.',
        },
        {
          school: 'Măsurarea urmărilor de lungă durată (Nunn, 2008)',
          argument:
            'Analiza cu cifre arată o legătură între cât de tare a lovit negoțul o regiune de obârșie și treptele de azi de venit și de încredere obștească între oameni.',
        },
      ],
      state:
        'Cele trei poziții se împacă dacă se deosebește cine hotăra de cine îndura. Recunoașterea participării unor elite africane descrie funcționarea sistemului și nu micșorează răspunderea celui ce cerea marfa.',
    },
  ],
  sources: [
    { author: 'Ezana din Aksum', title: 'Inscripții regale și monede', year: 'secolul al IV-lea', kind: 'primaria', note: 'Documentează trecerea la creștinism: crucea înlocuiește semnele de mai înainte pe monede.' },
    { author: 'Al-Bakri', title: 'Cartea drumurilor și a regatelor', year: '1068', kind: 'primaria', note: 'Descrierea regatului Ghana pornind de la martori: capitală îndoită, fiscalitate pe sare și monopol regal al aurului.' },
    { author: 'Al-Idrisi', title: 'Cartea lui Roger', year: '1154', kind: 'primaria', note: 'Geografie alcătuită în Sicilia cu informații despre drumurile și orașele Sahelului și ale coastei răsăritene.' },
    { author: 'Anonim etiopian', title: 'Kebra Nagast', year: 'secolul al XIV-lea', kind: 'primaria', note: 'Temelia de idee a dinastiei solomonice: obârșie din Solomon și mutarea Chivotului la Aksum.' },
    { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Singura descriere a unui martor din afară a imperiului Mali. Laudă dreptatea și se scandalizează de slobozenia femeilor.' },
    { author: 'Ibn Khaldun', title: 'Muqaddima și Kitab al-Ibar', year: 'c. 1377', kind: 'primaria', note: 'Informații despre dinastiile Sahelului și cadru teoretic despre alcătuirea statelor în zone de graniță.' },
    { author: 'Abraham Cresques', title: 'Atlasul catalan', year: '1375', kind: 'primaria', note: 'Îl înfățișează pe mansa Musa pe tron cu o pepită de aur. Intrarea lui Mali în cartografia europeană.' },
    { author: 'Afonso I al Kongo', title: 'Scrisori către regii Portugaliei', year: '1526', kind: 'primaria', note: 'Un stăpânitor african învinuiește în scris urmarea nimicitoare a negoțului cu sclavi asupra chiar regatului lui.' },
    { author: 'Leon Africanul', title: 'Descrierea Africii', year: '1550', kind: 'primaria', note: 'Povestirea unui diplomat din Granada ținut la Roma. Izvor despre Tombouctou și negoțul lui de cărți.' },
    { author: 'Francisco Álvares', title: 'Adevărată știre despre țările Preotului Ioan', year: '1540', kind: 'primaria', note: 'Cronica soliei portugheze în Etiopia, cu cea dintâi descriere europeană a Lalibelei.' },
    { author: 'Abd al-Rahman al-Sadi', title: 'Tarikh al-Sudan', year: 'c. 1655', kind: 'primaria', note: 'Cronică dinăuntru a imperiilor Nigerului scrisă la Tombouctou. Izvor african despre propriul trecut african.' },
    { author: 'Anonim', title: 'Tarikh al-Fattash', year: 'secolul al XVII-lea', kind: 'primaria', note: 'A doua mare cronică de la Tombouctou, cu material administrativ și genealogic despre Songhay.' },
    { author: 'Tradiție orală mandingă', title: 'Epopeea lui Sundiata', year: 'transmisă din secolul al XIII-lea', kind: 'primaria', note: 'Povestire de temelie recitată de jeli. Izvor despre cultura politică a imperiului mai mult decât despre fapte de datat.' },
    { author: 'Jan Vansina', title: 'Tradiția orală ca istorie', year: '1961', kind: 'estudio', note: 'Statornicește metoda critică ce a prefăcut oralitatea în izvor istoriografic recunoscut.' },
    { author: 'Gertrude Caton-Thompson', title: 'The Zimbabwe Culture', year: '1931', kind: 'estudio', note: 'Săpătură stratigrafică ce a dovedit obârșia africană medievală a Marelui Zimbabwe.' },
    { author: 'Basil Davidson', title: 'Mama neagră: Africa, anii de încercare', year: '1961', kind: 'estudio', note: 'Popularizare pionieră ce a dus la publicul larg existența unei istorii africane dinainte de colonizare.' },
    { author: 'Walter Rodney', title: 'Cum a subdezvoltat Europa Africa', year: '1972', kind: 'estudio', note: 'Formulează teza subdezvoltării pricinuite de negoț și de colonialism. Text de o mare înrâurire politică.' },
    { author: 'Nehemia Levtzion și J. F. P. Hopkins', title: 'Corpus of Early Arabic Sources for West African History', year: '1981', kind: 'estudio', note: 'Strângere și tălmăcire critică a izvoarelor arabe despre Sahel. Unealtă de temelie a domeniului.' },
    { author: 'John Thornton', title: 'Africa și africanii în alcătuirea lumii atlantice', year: '1992', kind: 'estudio', note: 'Documentează stăpânirea africană a condițiilor negoțului de pe coastă dinaintea secolului al XIX-lea.' },
    { author: 'Christopher Ehret', title: 'The Civilizations of Africa', year: '2002', kind: 'estudio', note: 'Istorie de lungă durată ce îmbină lingvistica istorică și arheologia pentru perioade fără documente.' },
    { author: 'Unesco', title: 'Istoria generală a Africii', year: '1980–1993', kind: 'estudio', note: 'Lucrare obștească în opt volume, îndrumată în cea mai mare parte de istorici africani.' },
    { author: 'François-Xavier Fauvelle', title: 'Rinocerul de aur', year: '2013', kind: 'estudio', note: 'Reface Evul Mediu african pornind de la fragmente documentare și arheologice, lămurind metoda.' },
    { author: 'Toby Green', title: 'O istorie dincolo de aur', year: '2019', kind: 'estudio', note: 'Istoria economică a Africii de vest și a monedei ei înainte și în timpul negoțului cu sclavi, cu izvoare locale.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Ibn Battuta vizitează imperiul Mali',
      text: [
        'Printre însușirile bune ale acestui popor e puținătatea nedreptății, căci sunt dintre toate popoarele cei mai depărtați de ea, iar sultanul lor nu iartă pe nimeni care face o asemenea faptă.',
        'Și mai e și siguranța de peste tot în țara lor, căci nici călătorul, nici cel așezat nu se teme de hoț sau de tâlhar.',
        'Și mai sunt și cu luare-aminte să învețe pe de rost Coranul cel înalt; le pun copiilor lanțuri dacă văd la ei lene în a-l învăța, și nu le scot până nu îl știu pe de rost.',
      ].join('\n\n'),
      source: 'Ibn Battuta, Povestirea călătoriei, despre șederea lui în Mali, 1352-1353.',
      note: 'Versiune proprie după arabă. Ibn Battuta era un jurist marocan ce a călătorit aproape treizeci de ani.',
      question: 'Un călător din secolul al XIV-lea descrie un stat cu dreptate, siguranță și școli. Cum se potrivește această mărturie cu ideea unei Africi fără istorie? Ține seama și că autorul nu era neutru: se lua după ce cunoștea el.',
    },
  ],
  images: [
    {
      alt: 'Detaliu de hartă nautică medievală cu un rege încoronat așezat pe tron, ținând o pepită de aur',
      caption: 'Mansa Musa în Atlasul catalan din 1375, cu o pepită de aur în mână.',
    },
    {
      alt: 'Ziduri curbe de blocuri de granit așezate fără mortar, de câțiva metri înălțime, printre vegetație',
      caption: 'Incintă a Marelui Zimbabwe. Că era operă africană medievală s-a dovedit arheologic în 1929.',
    },
    {
      alt: 'Stele mari de granit cioplite ca niște clădiri cu mai multe caturi, unele în picioare, altele căzute și rupte',
      caption: 'Câmpul de stele din Aksum, secolele III-IV. Aksum a bătut monedă proprie și a primit creștinismul pe la 330, înaintea celei mai mari părți a Europei.',
    },
    {
      alt: 'Moschee de chirpici cu ziduri înclinate, țepoase de grinzi de lemn ieșite în afară, și un minaret trunchi de piramidă',
      caption: 'Moscheea Djinguereber, din Tombouctou, ridicată în 1327. Grinzile ce ies afară sunt schela statornică pentru tencuirea de fiecare an.',
    },
    {
      alt: 'Pagini de manuscris cu text arab și diagrame geometrice și astronomice trasate cu cerneală',
      caption: 'Manuscrise de astronomie și de matematică din Tombouctou. Zeci de mii se păstrează în biblioteci de familie: Africa dinainte de colonizare scria și ea.',
    },
  ],
  questions: [
    {
      question: 'Ce a dovedit săpătura de la Jenne-Jeno, în delta interioară a Nigerului?',
      options: [
        'Că orășenizarea a ajuns în Sahel odată cu negoțul islamic',
        'Că existau orașe de mii de locuitori încă din secolul al III-lea, fără legătură cu îndemnuri din afară',
        'Că situl a fost clădit de negustori fenicieni',
        'Că regiunea a fost nelocuită până în secolul al XI-lea',
      ],
      explanation: 'Arheologia africană a dărâmat singură teza că statele și orașele au venit mereu din afară.',
    },
    {
      question: 'Ce metodă a propus Jan Vansina pentru lucrul cu tradiția orală?',
      options: [
        'Să fie lăsată deoparte, afară de când se potrivește cu izvoare scrise',
        'Să i se aplice o critică asemănătoare cu cea a textelor: gen, lanț de transmitere, rost obștesc și schimonosiri statornice',
        'Să fie însemnată fără amestec și publicată întocmai',
        'Să fie înlocuită cu refaceri lingvistice',
      ],
      explanation: 'Jeli sau griot-ii erau meșteri de meserie, cu pregătire și răspundere moștenită, nu povestitori de la sine.',
    },
    {
      question: 'Ce aparte a avut Aksum în secolul al IV-lea?',
      options: [
        'A fost cel dintâi stat african ce a primit islamul',
        'Regele lui Ezana a trecut la creștinism, înaintea celei mai mari părți a Europei, iar regatul a bătut monedă proprie',
        'A fost cucerit de imperiul roman',
        'A dus lipsă de scris propriu până în secolul al XII-lea',
      ],
      explanation: 'Mani l-a așezat printre cele patru mari imperii ale lumii, laolaltă cu Roma, Persia și China, iar stelele lui sunt printre pietrele cioplite cele mai mari ridicate vreodată.',
    },
    {
      question: 'Ce sunt bisericile de la Lalibela?',
      options: [
        'Bazilici clădite de misionari portughezi în secolul al XVI-lea',
        'Unsprezece temple cioplite în jos în stânca vie în secolele al XII-lea și al XIII-lea, gândite ca un nou Ierusalim',
        'Mănăstiri rupestre de obârșie coptă egipteană',
        'Moschei prefăcute după cucerirea creștină',
      ],
      explanation: 'Au fost cioplite sub dinastia Zagwe, după căderea Ierusalimului pe mâna musulmanilor, cu ferestre, coloane și sisteme de scurgere.',
    },
    {
      question: 'Ce slujbă împlinea Kebra Nagast în Etiopia?',
      options: [
        'Era un cod legal aplicat de judecătorii',
        'Îndreptățea dinastia solomonică, trăgând-o din Solomon și din regina din Saba',
        'Strângea liturghia Bisericii etiopiene',
        'Povestea cucerirea musulmană din secolul al XVI-lea',
      ],
      explanation: 'E o construcție de idee asemuibilă cu orice mit dinastic european, și a funcționat șapte sute de ani, până în 1974.',
    },
    {
      question: 'Ce mărfuri rânduiau negoțul transsaharian?',
      options: [
        'Cereale din nord și vite din sud',
        'Sare din deșert și aur din bazinele fluviale din sud, pe lângă aramă, țesături, cărți și oameni robiți',
        'Mirodenii din Oceanul Indian și porțelan chinezesc',
        'Fildeș și lemn din pădurea ecuatorială',
      ],
      explanation: 'Statele Sahelului s-au îmbogățit dând dări pe acel schimb, prefăcut de folosirea cămilei.',
    },
    {
      question: 'Ce măsură monetară descrie al-Bakri în regatul Ghana?',
      options: [
        'Baterea de monedă de aur cu numele regelui',
        'Monopolul regal asupra pepitelor, ce chezășuia valoarea prafului de aur ce circula ca monedă',
        'Oprirea folosirii aurului în negoțul dinăuntru',
        'Darea de bani de hârtie sprijiniți pe sare',
      ],
      explanation: 'E politică monetară înadins gândită în secolul al XI-lea, într-un stat pe care istoriografia europeană l-a descris veacuri întregi ca trib.',
    },
    {
      question: 'Ce preț are tradiția de la Kurukan Fuga?',
      options: [
        'E un document scris din chiar vremea întemeierii lui Mali',
        'E un izvor despre cultura politică a imperiului, cu împărțirea slujbelor între neamuri și îndatoririle cârmuitorului',
        'E o cronică portugheză din secolul al XVI-lea',
        'E un tratat de drept islamic maliki',
      ],
      explanation: 'Prețuirea ei ca document istoric întocmai e discutabilă; prețuirea ei ca izvor despre cum era gândită puterea nu e.',
    },
    {
      question: 'De ce e prețioasă descrierea lui Mali lăsată de Ibn Battuta?',
      options: [
        'Fiindcă idealizează imperiul și întărește tradiția orală',
        'Fiindcă nu idealizează: laudă siguranța și dreptatea și se scandalizează de obiceiuri ce i se păreau nepotrivite unor musulmani',
        'Fiindcă e singurul izvor scris african din acea perioadă',
        'Fiindcă descrie cu de-amănuntul minele de aur din sud',
      ],
      explanation: 'Mustrările lui dau la iveală o societate ce primise islamul fără să se lepede de formele ei proprii.',
    },
    {
      question: 'Ce a fost Tombouctou în secolele al XV-lea și al XVI-lea?',
      options: [
        'O cetate militară fără populație civilă',
        'Un centru de gândire al lumii islamice, cu învățătură înaltă și o industrie a cărții foarte rodnică',
        'Un port al coastei atlantice dedicat negoțului cu sclavi',
        'Capitala administrativă a imperiului Mali',
      ],
      explanation: 'Leon Africanul a scris că acolo cărțile aduceau mai mult câștig decât orice altă marfă. Sute de mii de manuscrise se păstrează azi în Mali.',
    },
    {
      question: 'Cum a căzut imperiul Songhay în 1591?',
      options: [
        'Printr-o răscoală dinăuntru a askia-lor',
        'Prin înfrângerea la Tondibi în fața unei armate saadiene ce a trecut deșertul cu arme de foc',
        'Prin cucerirea portugheză dinspre coasta atlantică',
        'Printr-o secetă lungă ce a depopulat Nigerul',
      ],
      explanation: 'Vreo patru mii de oameni cu archebuze și tunuri au biruit o forță mult mai mare fără arme de foc. Cucerirea nu a zămislit un imperiu statornic.',
    },
    {
      question: 'Ce au dovedit arheologia și lingvistica despre orașele swahili?',
      options: [
        'Că au fost colonii arabe și persane așezate peste populație africană',
        'Că sunt o civilizație africană ce a primit islamul, cu continuitate materială de la așezări bantu de dinainte',
        'Că s-au întemeiat după venirea portughezilor',
        'Că nu au avut legătură cu negoțul Oceanului Indian',
      ],
      explanation: 'Găsirile de porțelan Song și Ming arată întinderea acelei rețele, iar o flotă chinezească a ajuns la Malindi în secolul al XV-lea.',
    },
    {
      question: 'Ce era Marele Zimbabwe?',
      options: [
        'O cetate portugheză din secolul al XVI-lea',
        'Un oraș de până la douăzeci de mii de locuitori cu incinte de granit fără mortar, clădit între secolele al XIII-lea și al XV-lea',
        'Un sanctuar religios fără populație statornică',
        'Un port de negoț la vărsarea Zambeziului',
      ],
      explanation: 'Bogăția lui venea din vite, din aur și din negoțul cu coasta, cum dovedesc găsirile de sticlă persană și de porțelan chinezesc din sit.',
    },
    {
      question: 'Ce s-a întâmplat cu tălmăcirea obârșiei Marelui Zimbabwe?',
      options: [
        'S-a rezolvat pașnic în secolul al XIX-lea în folosul obârșiei africane',
        'Caton-Thompson a dovedit în 1929 că era operă africană medievală, iar administrația colonială a continuat s-o tăgăduiască o jumătate de veac',
        'Datarea prin radiocarbon s-a dovedit cu neputință din lipsă de materie organică',
        'A fost pusă pe seama portughezilor până la neatârnarea țării',
      ],
      explanation: 'Peter Garlake a întărit-o mai apoi și a fost apăsat de regimul Rhodesiei. Țara neatârnată a luat în 1980 numele sitului.',
    },
    {
      question: 'Ce aduce corespondența lui Afonso I al Kongo?',
      options: [
        'Cea dintâi descriere europeană a interiorului african',
        'Un glas african din chiar acea vreme ce învinuiește în scris urmarea nimicitoare a negoțului cu sclavi asupra chiar regatului lui',
        'Un tratat de negoț ce oprea negoțul cu sclavi',
        'Cronica oficială a trecerii regatului la creștinism',
      ],
      explanation: 'Kongo a ținut din 1483 o legătură diplomatică cu Portugalia, cu solii și corespondență regală păstrată.',
    },
    {
      question: 'Cum se leagă pozițiile lui Rodney și ale lui Thornton despre negoțul cu sclavi?',
      options: [
        'Se exclud: dacă a fost hotărâre proprie africană, nu a fost pagubă de structură',
        'Se împacă dacă se deosebește cine hotăra de cine îndura, iar recunoașterea participării elitelor nu micșorează răspunderea celui ce cerea marfa',
        'Amândouă tăgăduiesc urmări de lungă durată asupra economiilor africane',
        'Thornton susține că negoțul nu a existat la scară mare',
      ],
      explanation: 'Nunn a adăugat o măsurare econometrică ce leagă cât de tare a lovit negoțul o regiune de treptele de azi de venit și de încredere obștească.',
    },
  ],
}
