import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/india.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 4; 13 date, 14
   concepte, 3 dezbateri, 23 surse, un document comentat, 4 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const indiaRo: TopicTranslation = {
  title: 'India: de la mauryași la mogoli',
  description: 'Două mii de ani de imperii, religii și negoț într-un subcontinent aproape niciodată unit, care totuși a zămislit o civilizație ușor de recunoscut.',
  years: '322 î.Hr.–1707',
  summary:
    'Istoria subcontinentului indian se povestește greșit când se caută în ea un șir de imperii unificatoare după chipul chinezesc. Ce e propriu ei e tocmai potrivnicul: perioade imperiale destul de scurte, mauryași, gupta, Delhi, mogoli, întretăiate de etape lungi de fărâmițare regională în care s-a zămislit o bună parte din zidirea culturală. Pe acest sol politic nestatornic s-a clădit o civilizație de o desime uriașă: budismul și jainismul, matematica zeroului și a sistemului zecimal, poezia sanscrită și literaturile de rând, arhitectura de temple din sud, întâlnirea cu islamul ce a zămislit de la sufismul indian până la Taj Mahal, și o economie ce în secolul al XVII-lea dădea în jur de un sfert din produsul mondial. A o cerceta cere, pe deasupra, dărâmarea a două moșteniri: periodizarea colonială pe vremuri hindusă, musulmană și britanică, și citirea castei ca instituție de neamintit și nemișcată.',
  keyDates: [
    { date: 'c. 322 î.Hr.', event: 'Chandragupta Maurya întemeiază cel dintâi imperiu ce stăpânește cea mai mare parte a subcontinentului.' },
    { date: 'c. 268–232 î.Hr.', event: 'Domnia lui Ashoka: edicte săpate în stâncă și răspândirea budismului după cucerirea Kalingăi.' },
    { date: '320–550', event: 'Imperiul Gupta. Vremea clasică a sanscritei, a astronomiei și a matematicii cu Aryabhata.' },
    { date: 'secolele VI–IX', event: 'Avântul evlaviei bhakti în sud și răspândirea templelor dravidiene.' },
    { date: '985–1044', event: 'Apogeul imperiului Chola: expediții navale spre sud-estul Asiei și negoț în Oceanul Indian.' },
    { date: '1206', event: 'Întemeierea Sultanatului de la Delhi. Islamul ajunge putere politică în nord.' },
    { date: '1336–1565', event: 'Imperiul Vijayanagara în sud, deopotrivă și potrivnic sultanatelor din Deccan.' },
    { date: '1498', event: 'Vasco da Gama ajunge la Calicut. Începe prezența europeană în negoțul din Oceanul Indian.' },
    { date: '1526', event: 'Babur biruie la Panipat și întemeiază dinastia mogolă.' },
    { date: '1556–1605', event: 'Domnia lui Akbar: sistemul fiscal zabt, mansabdari și politica de sulh-i kull, sau pace universală.' },
    { date: '1632–1653', event: 'Clădirea Taj Mahalului sub Shah Jahan, culme a sintezei arhitecturale indo-islamice.' },
    { date: '1658–1707', event: 'Domnia lui Aurangzeb: întinderea cea mai mare a mogolilor și istovire militară în Deccan.' },
    { date: '1757', event: 'Bătălia de la Plassey: Compania Britanică a Indiilor Răsăritene ia stăpânirea Bengalului.' },
  ],
  sections: [
    {
      title: 'Mauryașii și încercarea lui Ashoka',
      body: [
        'Imperiul Maurya, întemeiat de Chandragupta pe la 322 î.Hr. în golul lăsat de retragerea lui Alexandru, a fost cel dintâi stat ce a stăpânit cea mai mare parte a subcontinentului. Capitala lui, Pataliputra, l-a uimit pe solul seleucid Megasthenes, a cărui povestire o cunoaștem din citate de mai târziu. Rânduiala administrativă pe care o descrie Arthashastra, tratat pus pe seama lui Kautilya, e cea a unui stat ce se amestecă în toate, cu iscoade, monopoluri, catastif și o teorie a puterii lipsită de sentimentalism, asemuită cu Machiavelli.',
        'Ashoka, nepotul lui Chandragupta, e cârmuitorul cel mai bine documentat al Antichității indiene fiindcă și-a lăsat glasul lui propriu. Edictele lui, săpate pe coloane și pe stânci în tot imperiul, în prakrit și în alte limbi, inclusiv o variantă grecească și aramaică în nord-vest, vestesc o întorsătură după cucerirea Kalingăi: căință pentru măcel, primirea dharmei ca politică de stat, neviolență, cinstire a tuturor sectelor religioase, spitale și fântâni, și dregători puși să vegheze traiul bun al supușilor.',
        'Ce înseamnă mai exact acea dharma e o dezbatere deschisă. Romila Thapar a arătat că nu era pur și simplu budism prefăcut în religie oficială, ci o etică cetățenească gândită să lege laolaltă un imperiu de o mare felurime de limbi și de religii. Ce e limpede e că Ashoka a sprijinit budismul și a plătit misiuni ce l-au dus în Sri Lanka și în Asia centrală, și că fără acel sprijin răspândirea de mai apoi a religiei spre China și spre sud-estul Asiei ar fi fost cu totul alta.',
        'Imperiul s-a destrămat curând după moartea lui, pe la 185 î.Hr. I-au urmat regate regionale și un șir de dinastii de obârșie din afară în nord-vest, indo-grecești, scitice, parte și kushane, ce au bătut monedă, au sprijinit arta și au legat subcontinentul de Asia centrală și de negoțul mătăsii. Arta din Gandhara, cu Buddha cu falduri elenistice, e mărturia cea mai vădită a acelei încrucișări.',
        'Din acea vreme vin și marile zidiri ale societății indiene. Tratatele juridice, printre ele legile lui Manu, au codificat o rânduială de varne, cele patru categorii de rit, pe care practica obștească le-a împărțit în mii de jati, sau grupuri de naștere, cu reguli de căsătorie și de meserie. Se cuvine să nu fie citite acele texte ca descriere a realității: sunt porunci ale cărturarilor brahmani, iar istoria obștească arată mult mai multă mișcare și felurime regională decât admit ele.',
      ].join('\n\n'),
      callout:
        'Edictele lui Ashoka sunt singurul glas direct al unui cârmuitor din Antichitatea indiană, și au fost descifrate în 1837. Până atunci, regele cel mai citat din textele budiste era, pentru istoriografie, o făptură fără dovezi materiale.',
    },
    {
      title: 'Vremea clasică: gupta și zidirea de gânduri',
      body: [
        'Imperiul Gupta, între secolele al IV-lea și al VI-lea, a fost numit din vechime epoca de aur clasică, o etichetă pe care istoriografia de azi o nuanțează fiindcă vine în parte din naționalismul secolului XX. Ce s-a întâmplat cu adevărat a fost o strângere ieșită din comun de zidire de gânduri sub sprijin de curte: teatrul și poezia lui Kalidasa, statornicirea sanscritei ca limbă cultă pan-indiană, codificarea sistemelor filozofice și o sculptură și o pictură ce au rânduit canonul de mai apoi, cu Ajanta drept mărturie supraviețuitoare.',
        'Matematica acelei vremi a avut urmări mondiale. Aryabhata, în anul 499, a socotit o apropiere de pi, a propus rotirea Pământului și a lucrat cu un sistem pozițional zecimal; Brahmagupta, în secolul al VII-lea, a formulat reguli pentru lucrul cu zeroul și cu numerele negative. Acel sistem a trecut în lumea islamică, unde al-Khwarizmi l-a răspândit, și de acolo în Europa cu numele de cifre arabe. E probabil transferul tehnic cu urmările cele mai mari din istoria dinainte de vremea modernă.',
        'Viața religioasă s-a prefăcut deodată. Budismul, care fusese de căpetenie, a început o decădere lungă în țara lui de obârșie, în timp ce se statornicea în restul Asiei; jainismul a ținut obști trainice de negustori; iar tradițiile pe care azi le numim hinduism s-au rânduit din nou în jurul cultului lui Vishnu, al lui Shiva și al Zeiței, cu temple, pelerinaje și o legătură de evlavie directă cu divinitatea. Sheldon Pollock a descris răspândirea sanscritei prin Asia ca pe o cosmopolis culturală fără imperiu în spate.',
        'Evlavia bhakti, ivită în sudul tamil între secolele al VI-lea și al IX-lea și întinsă mai apoi la tot subcontinentul, a fost o mișcare de întindere obștească uriașă. Poeții ei scriau în limbi de rând, nu în sanscrită, puneau dăruirea de sine mai presus de rit și de neam, iar printre ei au fost femei și oameni din caste de jos a căror operă se mai cântă și azi. E argumentul cel mai bun împotriva icoanei unei societăți indiene nemișcate și ierarhice fără crăpături.',
        'Cealaltă mare pârghie a fost negoțul. Porturile de la apus făceau negoț cu lumea romană, cum documentează Periplul Mării Eritreea și cum întăresc găsirile de monedă romană din sud; cele de la răsărit legau cu sud-estul Asiei, unde formele politice, religioase și artistice indiene s-au primit fără nicio cucerire, de la Angkor la Borobudur. India nu a exportat imperiu: a exportat modele.',
      ].join('\n\n'),
    },
    {
      title: 'Sudul și Oceanul Indian',
      body: [
        'Istoria sudului subcontinentului urmează un ritm propriu și veacuri întregi a fost mai bogată și mai legată decât cea a nordului. Pallavii și apoi cholii au clădit state cu temelie agrară și hidraulică în țara tamilă, cu temple ce funcționau ca centre economice, școli și bănci, și cu adunări de sat ale căror rânduieli le cunoaștem din inscripții săpate în piatră.',
        'Imperiul Chola, la apogeul lui între secolele al X-lea și al XII-lea, a făcut ceva neobișnuit în istoria indiană: a aruncat putere pe mare. A trimis expediții spre Sri Lanka, spre Maldive și spre Srivijaya din Sumatra, și a ținut legături diplomatice cu China Song. Templele lui, ca cel al lui Brihadisvara din Thanjavur, și bronzurile lui de Shiva dansator sunt printre lucrările cele mai de seamă ale artei mondiale.',
        'Burton Stein a propus să fie citite acele state ca regate segmentare, cu o autoritate de rit puternică în centru și o stăpânire administrativă adevărată foarte mărginită la margine. Alți istorici au obiectat că inscripțiile arată o putere fiscală de seamă. Discuția contează fiindcă atinge felul cum înțelegem statul dinainte de vremea modernă în general: dacă măsurăm puterea după modelul statului european modern, aproape tot restul pare slab prin însăși firea lui.',
        'Negoțul din Oceanul Indian a fost veacuri întregi sistemul economic cel mai viu al lumii, iar India, centrul lui geografic și producător. Exporta țesături de bumbac, piper, zahăr, oțel și pietre scumpe spre golf, spre răsăritul Africii, spre sud-estul Asiei și spre China, și aducea cai, metale și argint. Obști de negustori arabi, evrei, armeni și din Gujarat lucrau în rețele ce funcționau fără state în spate, iar documentele Genizei din Cairo îngăduie refacerea acelor negoțuri cu de-amănuntul.',
        'Sosirea lui Vasco da Gama la Calicut în 1498 a adus un lucru nou: niște negustori gata să folosească tunuri pe mare ca să stăpânească singuri drumurile. Portughezii nu au stăpânit negoțul din Oceanul Indian, al cărui volum îi întrecea cu mult, dar au impus o rânduială de îngăduințe și o silnicie înarmată ce nu era obiceiul oceanului. Olandezii și englezii au aplicat mai apoi același principiu cu mai mulți bani și o rânduială mai bună.',
      ].join('\n\n'),
      callout:
        'Înrâurirea indiană în sud-estul Asiei, de la Angkor la Java, s-a răspândit fără cucerire militară. E unul dintre cazurile cele mai bine documentate de expansiune culturală fără imperiu.',
    },
    {
      title: 'Islamul și Sultanatul de la Delhi',
      body: [
        'Islamul a ajuns în subcontinent pe trei căi deosebite și nu deodată: negustori arabi pe țărmurile sudului din secolul al VII-lea, cucerirea Sindului în 711, și năvăliri și apoi cuceriri din Asia centrală din secolul al XI-lea încoace, cu Mahmud din Ghazni și mai apoi ghuridii. Întemeierea Sultanatului de la Delhi în 1206 a statornicit o putere musulmană trainică în nord, ce a ținut trei veacuri.',
        'Sultanatul a fost un stat militar și fiscal ce a adus forme administrative persane și islamice, sistemul iqta de dare a veniturilor în schimbul slujbei, monedă de argint și o arhitectură nouă de arcuri și de cupole. Sub Alauddin Khalji, la începutul secolului al XIV-lea, s-a încercat o stăpânire de prețuri și o reformă fiscală de seamă, iar sultanatul a rezistat năvălirilor mongole ce au pustiit restul lumii islamice, ceea ce a prefăcut Delhi într-un adăpost de înțelepți și de artiști.',
        'Icoana unei cuceriri islamice ce ar fi impus religia prin silă nu ține din punct de vedere demografic. Trecerea la islam a fost lentă, neuniformă și mai ales de margine: zonele cu majoritate musulmană au sfârșit prin a fi Bengalul răsăritean și nord-vestul, adică regiunile de graniță agrară unde islamul a venit odată cu desțelenirea pământurilor și cu ordinele sufite, nu centrele puterii politice. Richard Eaton a documentat acest proces în fața lămuririlor prin sabie sau prin sprijin de stat.',
        'A fost distrugere de temple, e documentată și nu se cuvine micșorată, dar logica ei era în bună parte politică: templele regale erau depozite de avuție și semne de suveranitate, iar jaful lor ținea de un repertoriu pe care îl practicau și regii hinduși împotriva templelor rivalilor lor. A reduce veacuri de istorie la un conflict religios necurmat înseamnă a arunca înapoi categoriile secolului XX.',
        'Ce a zămislit întâlnirea cu adevărat a fost o sinteză culturală de întâia mărime. Urdu ca limbă, muzica hindustani, arhitectura indo-islamică, sufismul ordinelor chishti cu sanctuare vizitate de hinduși și de musulmani, și mișcări ca cea a lui Kabir sau sikhismul întemeiat de Guru Nanak, ce respingeau pe față granița dintre cele două obști. La sud de Vindhya, între timp, Vijayanagara și sultanatele din Deccan țineau o rivalitate în care alianțele treceau adesea peste liniile religioase.',
      ].join('\n\n'),
    },
    {
      title: 'Imperiul mogol',
      body: [
        'Babur, urmaș al lui Timur și al lui Ginghis Han, a biruit la Panipat în 1526 cu tunuri și cu cavalerie mișcătoare și a întemeiat o dinastie ce avea să cârmuiască cea mai mare parte a subcontinentului aproape două veacuri. Nepotul lui, Akbar, între 1556 și 1605, a fost cel ce a clădit imperiul ca sistem, și a făcut-o cu trei unelte: o armată și o administrație rânduite pe ranguri numerice, mansabdari; un sistem fiscal pe pământ, zabt-ul lui Todar Mal, întemeiat pe măsurare, pe clasificarea solurilor și pe medii de prețuri; și o politică de primire a elitelor rajput și a altor obști în cârmuire.',
        'Akbar a desființat darea asupra celor ne-musulmani, a sprijinit tălmăciri din sanscrită în persană, a rânduit dezbateri între teologi ai tuturor religiilor în casa lui de cult și a formulat principiul sulh-i kull, pace sau înțelegere universală, ce nu era toleranță modernă, ci o doctrină de suveranitate mai presus de obștile religioase. Ain-i-Akbari al ministrului lui, Abul Fazl, e deodată un manual administrativ și o arătare a acelei ideologii imperiale.',
        'Economia mogolă a fost uriașă. Bengalul și Gujaratul zămisleau țesături de bumbac vândute din Japonia până în Mexic, iar imperiul sorbea argint american și japonez în cantități uriașe ca să le plătească. Socotelile așază subcontinentul la un sfert din produsul mondial în secolul al XVII-lea, cu un stat ce strângea o parte mare din prisosul agrar și îl cheltuia pe armată, pe curte și pe clădiri.',
        'Aurangzeb, care a domnit din 1658 până în 1707, e împăratul cel mai discutat. A refăcut darea asupra celor ne-musulmani, a poruncit distrugerea unor temple, a osândit la moarte pe al nouălea guru sikh și a dus imperiul la întinderea lui cea mai mare printr-un război fără sfârșit în Deccan. Istoriografia naționalistă și cea comunalistă l-au prefăcut în simbol, fiecare într-un sens. Audrey Truschke și John Richards au stăruit să-i fie citite hotărârile în contextul lor politic: a sprijinit și temple hinduse, a folosit mai mulți nobili hinduși decât orice înaintaș al lui și a lucrat prin socoteală de îndreptățire tot atât cât prin credință.',
        'Istovirea din Deccan, costul militar și încordările dintre taberele nobiliare au slăbit centrul după moartea lui. Multă vreme s-a povestit ca o decădere ce a lăsat un gol pe care britanicii l-au umplut. Istoriografia din anii optzeci încoace o vede altfel: ce a fost a fost o regionalizare, cu state urmașe vii, ca marathii, Awadh, Bengalul sau Hyderabadul, cu economii lucrătoare și putere militară. Compania Britanică nu a ocupat un gol: s-a amestecat într-un sistem de întrecere și a câștigat, începând cu Plassey în 1757.',
      ].join('\n\n'),
      callout:
        'În secolul al XVII-lea subcontinentul zămislea în jur de un sfert din produsul mondial, iar țesăturile lui se vindeau din Japonia până în Mexic. Icoana unei Indii sărace dinainte de vremea modernă e o urmare a secolului al XIX-lea, nu o statornicie istorică.',
    },
    {
      title: 'Moșteniri istoriografice',
      body: [
        'Felul în care se cercetează istoria indiană atârnă de două moșteniri ce se cuvin arătate. Cea dintâi e periodizarea pe care James Mill a propus-o în 1817, împărțind trecutul în vremuri hindusă, musulmană și britanică. Acea împărțire a prefăcut religia în temeiul de rânduire a o mie de ani de istorie, a dat de înțeles că stăpânirea musulmană a fost o ocupație străină statornică și a slujit ca temelie citirilor comunaliste ale secolelor XIX și XX. Niciuna dintre cele trei etichete nu descrie bine ce se întâmpla pe teritoriu.',
        'A doua e casta. Dregătorii coloniali au recensat, au clasificat și au așternut în scris categorii ce în practică erau mișcătoare, tocmite și schimbătoare după regiune și după meserie. Nicholas Dirks a susținut că casta așa cum se cunoaște azi e în bună parte o urmare a acelui proces de cârmuire; alți istorici răspund că ierarhiile existau limpede cu mult înainte și că argumentul poate ajunge să dezvinovățească. Poziția de căpetenie recunoaște rădăcini vechi și o asprime și o centralitate mult mărite de administrația colonială.',
        'O a treia dezbatere s-a dovedit deosebit de rodnică: cea despre secolul al XVIII-lea. În fața povestirii unei decăderi generale ce îndreptățea amestecul britanic, Christopher Bayly, Muzaffar Alam și Sanjay Subrahmanyam au arătat viață de negoț, alcătuire de state regionale lucrătoare și grupuri financiare indiene ce au fost, de fapt, tovarăși de nevoie ai expansiunii Companiei. Colonialismul s-a clădit pe acele structuri, nu pe lipsa lor.',
        'Urmarea de metodă ține pentru orice istorie ne-europeană. Izvoarele scrise de căpetenie sunt de elită, în sanscrită sau în persană, și trebuie întregite cu inscripții, arheologie, numismatică, documente de negoț și tradiții orale ca să se ajungă la viața celor mai mulți. Iar categoriile cu care se întreabă, stat, religie, națiune, imperiu, au o istorie europeană ce trebuie cercetată înainte de a fi aplicate.',
        'Nimic din toate acestea nu preface istoria indiană într-un caz aparte ce nu poate fi asemuit decât cu sine însuși. Dimpotrivă: chestiunile pe care le ridică, despre formele statului dinainte de vremea modernă, despre conviețuirea religioasă și marginile ei, despre negoțul pe distanțe lungi fără imperiu și despre pricinile divergenței economice, sunt aceleași ce rânduiesc azi istoria mondială.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Arthashastra', definition: 'Tratat de cârmuire pus pe seama lui Kautilya: stat ce se amestecă în toate, cu iscoade, monopoluri și catastif, și o teorie a puterii fără apel la morală.' },
    { term: 'Edictele lui Ashoka', definition: 'Inscripții pe stâncă și pe coloană, în mai multe limbi, cu politica de dharma a împăratului. Singurul glas direct al unui cârmuitor din Antichitatea indiană.' },
    { term: 'Varna și jati', definition: 'Cele patru categorii de rit din textele brahmane și cele mii de grupuri de naștere adevărate, cu reguli de căsătorie și de meserie, schimbătoare după regiune.' },
    { term: 'Sistem zecimal pozițional', definition: 'Notație cu zero dezvoltată în India clasică, transmisă lumii islamice și de acolo Europei ca cifre arabe.' },
    { term: 'Bhakti', definition: 'Evlavie personală față de divinitate, arătată în limbi de rând, cu poeți femei și din caste de jos. Mișcare obștească, nu doar religioasă.' },
    { term: 'Regat segmentar', definition: 'Model propus de Stein pentru statele din sud: autoritate de rit puternică în centru și stăpânire administrativă mărginită la margine.' },
    { term: 'Iqta', definition: 'Darea veniturilor unui teritoriu unui dregător în schimbul slujbei militare. Unealtă fiscală a Sultanatului de la Delhi.' },
    { term: 'Sultanatul de la Delhi', definition: 'Putere musulmană în nord între 1206 și 1526. A adus administrație persană, a rezistat mongolilor și a prefăcut arhitectura.' },
    { term: 'Mansabdari', definition: 'Sistem mogol de ranguri numerice ce fixa starea, leafa și cetele militare ale fiecărui dregător, primind elite din obști deosebite.' },
    { term: 'Zabt', definition: 'Sistem fiscal al lui Akbar, croit de Todar Mal: măsurarea pământului, clasificarea solurilor și socoteala dării pe medii de prețuri.' },
    { term: 'Sulh-i kull', definition: 'Principiul înțelegerii universale al lui Akbar. Nu e toleranță modernă, ci o doctrină de suveranitate așezată mai presus de obștile religioase.' },
    { term: 'Sikhism', definition: 'Tradiție întemeiată de Guru Nanak la începutul secolului al XVI-lea, ce respinge granița dintre hinduism și islam și ierarhia de rit a castei.' },
    { term: 'State urmașe', definition: 'Puteri regionale ce au înlocuit centrul mogol în secolul al XVIII-lea, ca marathii, Awadh sau Bengalul. Erau vii, nu un gol de putere.' },
    { term: 'Periodizarea lui Mill', definition: 'Împărțirea colonială a trecutului indian în vremuri hindusă, musulmană și britanică. A prefăcut religia în temei de rânduire a o mie de ani de istorie.' },
  ],
  debates: [
    {
      question: 'E casta o instituție de neamintit sau o construcție colonială?',
      positions: [
        {
          school: 'Construcție colonială (Dirks, 2001)',
          argument:
            'Recensămintele și clasificarea administrativă britanică au așternut în scris categorii mișcătoare și tocmite, și au prefăcut casta în principiul de rânduire al societății indiene așa cum se percepe azi.',
        },
        {
          school: 'Rădăcini vechi',
          argument:
            'Textele juridice, inscripțiile și obiceiurile de căsătorie în interiorul grupului documentează ierarhii de rit și de meserie cu mult dinaintea oricărei prezențe europene, iar argumentul colonial poate sfârși prin a dezvinovăți.',
        },
      ],
      state:
        'Poziția de căpetenie recunoaște rădăcini vechi și, în același timp, o asprime, o la-fel-pentru-toți și o centralitate politică mult mărite de administrația colonială.',
    },
    {
      question: 'Cum se cuvine tălmăcită cârmuirea mogolă în materie religioasă?',
      positions: [
        {
          school: 'Citire comunalistă',
          argument:
            'Distrugerea de temple, darea asupra celor ne-musulmani și osândirile la moarte ale unor conducători religioși arată o stăpânire străină de fire de credință asupra unui popor cu majoritate hindusă.',
        },
        {
          school: 'Context politic (Richards; Truschke; Eaton)',
          argument:
            'Templele regale erau depozite de avuție și semne de suveranitate, iar jaful lor era un repertoriu pe care îl practicau și regii hinduși. Aurangzeb a sprijinit temple și a folosit mai mulți nobili hinduși decât orice înaintaș.',
        },
      ],
      state:
        'Istoriografia academică respinge cadrul de fire de credință necurmat, fără să tăgăduiască întâmplări de silnicie religioasă documentate. Discuția are azi o încărcătură politică mare în India.',
    },
    {
      question: 'A fost secolul al XVIII-lea indian o decădere sau o regionalizare?',
      positions: [
        {
          school: 'Decăderea centrului (Athar Ali)',
          argument:
            'Criza sistemului mansabdari, lipsa de dări și istovirea militară din Deccan au descompus imperiul și au lăsat un gol de putere pe care Compania l-a ocupat.',
        },
        {
          school: 'State urmașe vii (Bayly; Alam; Subrahmanyam)',
          argument:
            'Marathii, Awadh, Bengalul și Hyderabadul aveau economii lucrătoare, putere fiscală și militară și grupuri financiare puternice. Compania s-a amestecat într-un sistem de întrecere și a câștigat, nu a umplut un gol.',
        },
      ],
      state:
        'A doua citire stăpânește de prin anii optzeci încoace și a schimbat lămurirea cuceririi britanice: s-a clădit pe structuri indiene existente, nu pe lipsa lor.',
    },
  ],
  sources: [
    { author: 'Kautilya', title: 'Arthashastra', year: 'secolele IV î.Hr.–II d.Hr.', kind: 'primaria', note: 'Manual de cârmuire și de strategie. Datarea lui e discutată, iar cuprinsul, un tablou al statului ideal mai mult decât al celui adevărat.' },
    { author: 'Ashoka', title: 'Edictele mari pe stâncă și pe coloană', year: 'secolul al III-lea î.Hr.', kind: 'primaria', note: 'Descifrate în 1837 de James Prinsep. Izvor direct al politicii de dharma imperială.' },
    { author: 'Anonim', title: 'Periplul Mării Eritreea', year: 'secolul I', kind: 'primaria', note: 'Ghid de negoț grecesc al porturilor din Oceanul Indian. Documentează negoțul dintre Roma și India.' },
    { author: 'Autori brahmani', title: 'Manusmriti sau legile lui Manu', year: 'secolele II î.Hr.–III d.Hr.', kind: 'primaria', note: 'Text de porunci despre rânduiala obștească. Nu descrie practica: propune un ideal de cărturari.' },
    { author: 'Faxian și Xuanzang', title: 'Povestiri ale unor pelerini chinezi', year: '399–414 și 629–645', kind: 'primaria', note: 'Descriere din afară a Indiei gupta și post-gupta de către călugări budiști în căutare de texte.' },
    { author: 'Al-Biruni', title: 'Tarikh al-Hind', year: 'c. 1030', kind: 'primaria', note: 'Studiul științei, al religiei și al societății indiene de către un înțelept horasmian. Etnografie de o asprime neobișnuită pentru vremea lui.' },
    { author: 'Ibn Battuta', title: 'Rihla', year: 'c. 1355', kind: 'primaria', note: 'Povestirea slujbei lui ca judecător în Sultanatul de la Delhi, sub Muhammad bin Tughluq.' },
    { author: 'Babur', title: 'Baburnama', year: 'c. 1530', kind: 'primaria', note: 'Amintirile întemeietorului dinastiei mogole. Autobiografie ieșită din comun prin sinceritatea și de-amănunțimea ei.' },
    { author: 'Abul Fazl', title: 'Ain-i-Akbari', year: 'c. 1590', kind: 'primaria', note: 'Manual administrativ și statistic al imperiului lui Akbar și arătare a ideologiei lui de suveranitate.' },
    { author: 'Guru Arjan și alții', title: 'Guru Granth Sahib', year: '1604', kind: 'primaria', note: 'Scriptura sikh ce strânge imnuri de autori sikhi, hinduși și musulmani din caste deosebite.' },
    { author: 'François Bernier', title: 'Călătorii prin imperiul mogol', year: '1670', kind: 'primaria', note: 'Povestirea unui doctor francez la curte. Izvor prețios și obârșia unor locuri comune europene despre despotismul oriental.' },
    { author: 'Documentele Genizei din Cairo', title: 'Scrisori ale negustorilor din Oceanul Indian', year: 'secolele XI–XIII', kind: 'primaria', note: 'Corespondență de negoț ce îngăduie refacerea comerțului dintre Egipt, Arabia și coasta Malabar.' },
    { author: 'James Mill', title: 'Istoria Indiei britanice', year: '1817', kind: 'estudio', note: 'Obârșia periodizării pe vremuri hindusă, musulmană și britanică ce a hotărât două veacuri de istoriografie.' },
    { author: 'Romila Thapar', title: 'India veche', year: '2002', kind: 'estudio', note: 'Sinteză de referință despre perioada veche și critică rânduită a citirilor naționaliste.' },
    { author: 'Burton Stein', title: 'Peasant State and Society in Medieval South India', year: '1980', kind: 'estudio', note: 'Propune modelul regatului segmentar pentru statele din sud.' },
    { author: 'Irfan Habib', title: 'The Agrarian System of Mughal India', year: '1963', kind: 'estudio', note: 'Studiu clasic al economiei agrare și fiscale a imperiului mogol.' },
    { author: 'Christopher Bayly', title: 'Rulers, Townsmen and Bazaars', year: '1983', kind: 'estudio', note: 'Arată viața de negoț indiană a secolului al XVIII-lea și rolul financiarilor locali în expansiunea britanică.' },
    { author: 'Richard Eaton', title: 'The Rise of Islam and the Bengal Frontier', year: '1993', kind: 'estudio', note: 'Lămurește trecerea la islam prin desțelenirea agrară de graniță, în fața tezelor prin sabie sau prin sprijin de stat.' },
    { author: 'John F. Richards', title: 'The Mughal Empire', year: '1993', kind: 'estudio', note: 'Sinteză de referință despre instituțiile și economia imperiului mogol.' },
    { author: 'Nicholas Dirks', title: 'Castes of Mind', year: '2001', kind: 'estudio', note: 'Susține că casta așa cum e cunoscută azi e în mare parte urmarea cârmuirii coloniale.' },
    { author: 'Sheldon Pollock', title: 'The Language of the Gods in the World of Men', year: '2006', kind: 'estudio', note: 'Analizează răspândirea sanscritei prin Asia ca pe o cosmopolis culturală fără imperiu în spate.' },
    { author: 'Audrey Truschke', title: 'Aurangzeb', year: '2017', kind: 'estudio', note: 'Recitirea împăratului celui mai discutat pornind de la izvoare persane, împotriva celor două folosiri politice de azi ale lui.' },
    { author: 'Upinder Singh', title: 'A History of Ancient and Early Medieval India', year: '2008', kind: 'estudio', note: 'Manual universitar ce îmbină arheologia, epigrafia și textele cu o metodă limpede.' },
  ],
  documents: [
    {
      section: 0,
      title: 'Ashoka se căiește de biruința lui',
      text: [
        'La opt ani de la încoronarea lui, regele a cucerit Kalinga. O sută cincizeci de mii de oameni au fost strămutați, o sută de mii au murit și mult mai mulți au pierit.',
        'Îndată după anexarea Kalingăi, regele s-a dat cu râvnă studiului dharmei, dragostei față de ea și învățăturii ei, fiindcă a simțit căință pentru cucerirea Kalingăi.',
        'Căci regele socotește că cea mai mare dintre toate cuceririle e cucerirea prin dharma, iar pe aceasta a dobândit-o aici și la toate granițele lui.',
      ].join('\n\n'),
      source: 'Edictul mare pe stâncă XIII al lui Ashoka, secolul al III-lea î.Hr.',
      note: 'Versiune proprie după tălmăcirile din prakrit. A fost săpat în tot imperiul.',
      question: 'Un rege poruncește să fie săpat în piatră numărul morților pe care i-a pricinuit și propria lui căință. E o faptă de sinceritate, o unealtă de cârmuire, sau amândouă? Ce câștigă un stat arătându-se așa?',
    },
  ],
  images: [
    {
      alt: 'Taj Mahalul de marmură albă, cu cupola lui bulboasă și cele patru minarete, oglindit în lacul din grădină',
      caption: 'Taj Mahal, mausoleu mogol clădit între 1632 și 1653.',
    },
    {
      alt: 'Capitel de piatră lustruită cu patru lei așezați spate în spate pe o abacă cu roți și animale',
      caption: 'Capitelul de la Sarnath, de pe stâlpul lui Ashoka, secolul al III-lea î.Hr. E azi emblema statului indian: roata abacei e pe steagul lui.',
    },
    {
      alt: 'Cupolă masivă de cărămidă și piatră înconjurată de un parapet circular, cu o poartă cioplită cu mai multe grinzi',
      caption: 'Marea stupa de la Sanchi. Începută sub Ashoka și lărgită mai apoi: budismul s-a răspândit cu sprijin regal și cu drumurile de negoț.',
    },
    {
      alt: 'Miniatură mogolă cu un călăreț stăpânind un elefant scăpat de sub control ce trece un pod de bărci, în timp ce lumea fuge',
      caption: 'Akbar îmblânzindu-l pe elefantul Hawai, din Akbarnama, pe la 1590. Pictura de curte mogolă amestecă meșteșug persan, temă indiană și perspectivă învățată din gravuri europene.',
    },
  ],
  questions: [
    {
      question: 'De ce sunt ieșite din comun edictele lui Ashoka ca izvor?',
      options: [
        'Fiindcă sunt scrise în sanscrită clasică',
        'Fiindcă sunt singurul glas direct al unui cârmuitor din Antichitatea indiană, săpat în mai multe limbi',
        'Fiindcă au fost scrise de soli greci',
        'Fiindcă descriu viața de fiecare zi a țăranilor',
      ],
      explanation: 'Au fost descifrate în 1837. Până atunci, regele cel mai citat din textele budiste nu avea dovezi materiale.',
    },
    {
      question: 'Ce apără Romila Thapar despre dharma lui Ashoka?',
      options: [
        'Că a fost budism prefăcut în religie oficială a imperiului',
        'Că a fost o etică cetățenească gândită să lege laolaltă un imperiu de o mare felurime de limbi și de religii',
        'Că a fost un cod penal aplicat de dregători',
        'Că a fost o doctrină născocită de istoriografia naționalistă',
      ],
      explanation: 'Ashoka a sprijinit budismul și a plătit misiuni în Sri Lanka și în Asia centrală, fără de care răspândirea lui de mai apoi ar fi fost cu totul alta.',
    },
    {
      question: 'Cum se cuvin citite texte ca legile lui Manu?',
      options: [
        'Ca o descriere credincioasă a societății din vremea lor',
        'Ca porunci ale cărturarilor brahmani, în fața cărora istoria obștească arată mai multă mișcare și felurime regională',
        'Ca strângeri de drept obișnuielnic local',
        'Ca falsificări din vremea colonială',
      ],
      explanation: 'Cele patru varne de rit s-au împărțit în practică în mii de jati cu reguli schimbătoare după regiune și după meserie.',
    },
    {
      question: 'Care a fost transferul tehnic indian cu întinderea cea mai mare în lume?',
      options: [
        'Metalurgia oțelului de Damasc',
        'Sistemul zecimal pozițional cu zero, transmis lumii islamice și de acolo Europei',
        'Navigația cu vela latină',
        'Cultivarea bumbacului',
      ],
      explanation: 'Aryabhata a lucrat cu notație pozițională în 499, iar Brahmagupta a formulat în secolul al VII-lea reguli pentru zero și pentru numerele negative.',
    },
    {
      question: 'Ce a caracterizat mișcarea bhakti?',
      options: [
        'Restaurarea ritului vedic în sanscrită',
        'Evlavia personală arătată în limbi de rând, cu poeți femei și din caste de jos',
        'Rânduirea de mănăstiri budiste în sud',
        'Codificarea juridică a îndatoririlor de castă',
      ],
      explanation: 'E argumentul cel mai bun împotriva icoanei unei societăți indiene nemișcate și ierarhice fără crăpături.',
    },
    {
      question: 'Ce a făcut neobișnuit imperiul Chola în istoria indiană?',
      options: [
        'A unit tot subcontinentul pentru întâia oară',
        'A aruncat putere pe mare, cu expediții spre Sri Lanka, Maldive și Sumatra',
        'A desființat sistemul de caste pe teritoriul lui',
        'A primit islamul ca religie de stat',
      ],
      explanation: 'A ținut, pe deasupra, legături diplomatice cu China Song, iar templele și bronzurile lui sunt printre lucrările mari ale artei mondiale.',
    },
    {
      question: 'Cum s-a răspândit înrâurirea indiană în sud-estul Asiei?',
      options: [
        'Prin campanii de cucerire ale gupta',
        'Fără cucerire militară, prin primirea locală a unor forme politice, religioase și artistice',
        'Prin strămutarea în masă a populației din Bengal',
        'Prin impunerea negustorilor portughezi',
      ],
      explanation: 'Angkor și Borobudur sunt cele mai mari pilde. India nu a exportat imperiu: a exportat modele.',
    },
    {
      question: 'Ce noutate au adus portughezii în negoțul din Oceanul Indian?',
      options: [
        'Folosirea busolei și a hărților de navigație',
        'Bunăvoința de a folosi tunuri pe mare ca să stăpânească singuri drumurile și un sistem de îngăduințe',
        'Negoțul cu țesături de bumbac',
        'Întemeierea celor dintâi rețele de negustori armeni',
      ],
      explanation: 'Nu au stăpânit negoțul din Oceanul Indian, al cărui volum îi întrecea cu mult, dar au impus o silnicie înarmată ce nu era obiceiul oceanului.',
    },
    {
      question: 'Potrivit lui Richard Eaton, de ce au sfârșit prin a fi Bengalul răsăritean și nord-vestul zonele cu majoritate musulmană?',
      options: [
        'Fiindcă acolo se strângeau garnizoanele sultanatului',
        'Fiindcă erau regiuni de graniță agrară unde islamul a venit odată cu desțelenirea pământurilor și cu ordinele sufite',
        'Fiindcă au fost cele dintâi cucerite, în 711',
        'Fiindcă sultanatul a impus acolo trecerea silită la islam',
      ],
      explanation: 'Trecerea a fost lentă, neuniformă și de margine, și nu s-a potrivit cu centrele puterii politice musulmane.',
    },
    {
      question: 'Ce logică avea în bună parte distrugerea de temple de către cârmuitori musulmani?',
      options: [
        'O campanie rânduită de trecere silită la religie',
        'O logică politică: templele regale erau depozite de avuție și semne de suveranitate, iar regii hinduși le jefuiau și ei pe cele ale rivalilor lor',
        'Nevoia de materiale de clădit',
        'Oprirea coranică a chipurilor',
      ],
      explanation: 'Distrugerea e documentată și nu se cuvine micșorată, dar reducerea unor veacuri de istorie la un conflict religios necurmat aruncă înapoi categorii ale secolului XX.',
    },
    {
      question: 'Cu ce unelte a clădit Akbar sistemul imperial mogol?',
      options: [
        'Armată mercenară europeană, monopol de negoț și izgonirea elitelor locale',
        'Ranguri numerice mansabdari, sistem fiscal zabt și primirea elitelor rajput în cârmuire',
        'Administrație bisericească și judecătorii religioase unice',
        'Lăsarea cârmuirii pe seama unor guvernatori moșteniți',
      ],
      explanation: 'Zabt-ul lui Todar Mal se întemeia pe măsurarea pământului, pe clasificarea solurilor și pe socoteala dării pe medii de prețuri.',
    },
    {
      question: 'Ce însemna principiul sulh-i kull?',
      options: [
        'Egalitatea juridică a tuturor supușilor',
        'O doctrină de suveranitate așezată mai presus de obștile religioase, nu o toleranță în sens modern',
        'Îndatorirea de a trece la islam ca să slujești în administrație',
        'Despărțirea dintre puterea religioasă și cea politică',
      ],
      explanation: 'Akbar a desființat darea asupra celor ne-musulmani, a sprijinit tălmăciri din sanscrită în persană și a rânduit dezbateri între teologi ai tuturor religiilor.',
    },
    {
      question: 'Ce greutate economică avea subcontinentul în secolul al XVII-lea?',
      options: [
        'Mică, în negoțul mondial',
        'În jur de un sfert din produsul mondial, cu țesături vândute din Japonia până în Mexic',
        'Asemănătoare cu cea a coloniilor americane',
        'Cu totul atârnătoare de importurile europene',
      ],
      explanation: 'Imperiul sorbea argint american și japonez ca să plătească acele țesături. Icoana unei Indii sărace dinainte de vremea modernă e o urmare a secolului al XIX-lea.',
    },
    {
      question: 'Cum citesc istorici ca Truschke și Richards domnia lui Aurangzeb?',
      options: [
        'Ca pe o politică religioasă statornică de prigoană rânduită',
        'Așezându-i hotărârile în contextul lor politic: a sprijinit și temple hinduse și a folosit mai mulți nobili hinduși decât orice înaintaș',
        'Ca pe o vreme fără schimbări față de Akbar',
        'Ca pe o etapă de retragere militară a imperiului',
      ],
      explanation: 'A refăcut darea asupra celor ne-musulmani și a poruncit distrugeri de temple, și totodată a dus imperiul la întinderea lui cea mai mare printr-un război ruinător în Deccan.',
    },
    {
      question: 'Ce arată istoriografia de mai încoace despre secolul al XVIII-lea indian?',
      options: [
        'Că a fost un gol de putere pe care britanicii l-au ocupat fără împotrivire',
        'Că a fost o regionalizare cu state urmașe vii și financiari puternici, în al cărui sistem de întrecere s-a amestecat Compania',
        'Că economia indiană s-a prăbușit după moartea lui Aurangzeb',
        'Că imperiul mogol și-a ținut puterea neatinsă până în 1857',
      ],
      explanation: 'Marathii, Awadh, Bengalul și Hyderabadul aveau putere fiscală și militară. Colonialismul s-a clădit pe acele structuri, nu pe lipsa lor.',
    },
    {
      question: 'Ce problemă ridică periodizarea propusă de James Mill în 1817?',
      options: [
        'Că așază greșit datele dinastiilor',
        'Că preface religia în temei de rânduire a o mie de ani de istorie și a slujit ca temelie citirilor comunaliste',
        'Că trece cu vederea de tot sudul subcontinentului',
        'Că umflă însemnătatea negoțului din Oceanul Indian',
      ],
      explanation: 'Împărțirea trecutului în vremuri hindusă, musulmană și britanică lasă, pe deasupra, să se înțeleagă că stăpânirea musulmană a fost o ocupație străină statornică.',
    },
  ],
}
