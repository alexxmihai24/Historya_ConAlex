import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/egipto.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, cu notă destacată la 0, 2 și 5; 14 date, 10
   concepte, 3 dezbateri, 11 surse, un document comentat, 4 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const egiptoRo: TopicTranslation = {
  title: 'Egiptul faraonilor',
  description: 'Stat, ecologie fluvială, ideologie regală și religie funerară în trei milenii de istorie egipteană.',
  years: 'c. 3100–30 î.Hr.',
  summary:
    'Vreme de peste trei mii de ani, obștile din valea Nilului au ținut unul dintre statele cele mai trainice cunoscute. Trăinicia lui nu se lămurește printr-o superioritate militară, ci prin legătura dintre o ecologie fluvială neobișnuit de statornică, o administrație în stare să măsoare și să împartă din nou prisosul agrar, și o ideologie regală ce îl făcea pe faraon chezașul rânduielii cosmice. Această lecție străbate aceste trei osii și înfățișează dezbaterile deschise despre cum să fie tălmăcite.',
  keyDates: [
    { date: 'c. 5000–4000 î.Hr.', event: 'Culturi predinastice (Badari, Nagada I) în Egiptul de Sus.' },
    { date: 'c. 3100 î.Hr.', event: 'Unirea Egiptului de Sus și de Jos; începe perioada dinastică.' },
    { date: 'c. 2686–2160 î.Hr.', event: 'Regatul Vechi: stat piramidal, complexele din Giza și avântul cultului solar.' },
    { date: 'c. 2160–2055 î.Hr.', event: 'Prima Perioadă Intermediară: fărâmițare și literatură pesimistă.' },
    { date: 'c. 2055–1650 î.Hr.', event: 'Regatul Mijlociu: reunire tebană, colonizarea Nubiei, clasicism literar.' },
    { date: 'c. 1650–1550 î.Hr.', event: 'A doua Perioadă Intermediară: stăpânire hicsosă în deltă.' },
    { date: 'c. 1550–1070 î.Hr.', event: 'Regatul Nou: Egiptul ca putere imperială în Siria-Palestina și în Nubia.' },
    { date: 'c. 1479–1458 î.Hr.', event: 'Domnia lui Hatșepsut; expediția la Punt și programul de clădiri de la Deir el-Bahari.' },
    { date: 'c. 1353–1336 î.Hr.', event: 'Domnia lui Akhenaton: reforma atonistă și noua capitală de la Amarna.' },
    { date: 'c. 1274 î.Hr.', event: 'Bătălia de la Kadesh; pe la 1259 î.Hr., tratatul egipteano-hitit păstrat în amândouă variantele.' },
    { date: 'c. 1155 î.Hr.', event: 'Greva lucrătorilor de la Deir el-Medina sub Ramses al III-lea.' },
    { date: '525 î.Hr.', event: 'Cucerirea persană ahemenidă (dinastia XXVII).' },
    { date: '332 î.Hr.', event: 'Alexandru cel Mare ia Egiptul; apoi, dinastia ptolemaică.' },
    { date: '30 î.Hr.', event: 'Moartea Cleopatrei a VII-a; Egiptul devine provincie romană.' },
  ],
  sections: [
    {
      title: 'Ecologia fluvială: de ce Nilul hotărăște statul',
      body: [
        'Egiptul e, din punct de vedere geografic, o fâșie de pământ de arat cu lățime foarte schimbătoare — de la câteva sute de metri la câteva zeci de kilometri — încastrată în deșert. Populația de-a lungul istoriei s-a strâns aproape întreagă pe acea fâșie și în deltă, ceea ce dă o desime de oameni mare pe o suprafață folositoare mică: o rânduială ce înlesnește stăpânirea administrativă și militară a teritoriului.',
        'Rânduiala apelor vine din musonul etiopian, care hrănește Nilul Albastru și Atbara. Revărsarea ajungea la Assuan între iunie și iulie, atingea vârful în septembrie și scădea în octombrie, lăsând mâl aluvial pe câmpuri. Egiptenii deosebeau Kemet, „pământul negru” al mâlului, de Deshret, „pământul roșu” al deșertului, și și-au rânduit calendarul agricol în trei anotimpuri: akhet (revărsare), peret (semănat și creștere) și shemu (seceriș).',
        'Ce hotărăște nu e rodnicia, ci putința de a fi prevăzut dinainte. Spre deosebire de rânduiala bruscă și neregulată a Tigrului și a Eufratului, revărsarea Nilului urma un calendar destul de statornic, ceea ce îngăduia să fie prevăzut secerișul, socotită povara fiscală și plănuită strângerea mâinii de lucru. Karl Butzer, în Early Hydraulic Civilization in Egypt (1976), a dovedit, pe deasupra, că irigația egipteană a fost multă vreme de bazin și de purtare de grijă locală, nu un sistem rânduit din centru la scară de țară: statul a tras folos din râu, dar nu s-a născut din nevoia de a-l cârmui.',
        'Această nuanțare contează fiindcă dărâmă o lămurire foarte răspândită. Teza „despotismului hidraulic” a lui Karl Wittfogel susținea că marile state vechi ar fi ieșit din nevoia de a purta de grijă unor sisteme de irigație la scară mare. Dovezile egiptene nu o susțin: lucrările hidraulice documentate sunt locale și de mai târziu față de alcătuirea statului.',
      ].join('\n\n'),
      callout:
        'Herodot a numit Egiptul „un dar al Nilului” (Istorii II, 5). Fraza descrie bine atârnarea de ecologie, dar ascunde munca obștească — diguri, canale de bazin, hambare, catastife — ce a prefăcut acea atârnare în prisos.',
    },
    {
      title: 'Alcătuirea statului și aparatul administrativ',
      body: [
        'Unirea de pe la 3100 î.Hr. nu a fost o singură întâmplare, ci deznodământul unui proces de câteva veacuri de întrecere între centre ale Egiptului de Sus — Hierakonpolis, Nagada, Abydos — documentat de arheologia predinastică. Paleta lui Narmer, cu icoana ei a buzduganului ridicat asupra dușmanului, e un document de idee al acelui proces, nu neapărat dovada unei fapte anume.',
        'Unealta ce a dat trăinicie statului a fost scrisul administrativ. Scribii măsurau revărsarea cu nilometre, socoteau rodul așteptat și fixau povara fiscală înainte de seceriș; țineau catastif de pământuri, de turme, de rații și de expediții spre carierele din deșert și spre minele din Sinai. Papirusurile de la Wadi al-Jarf, găsite în 2013 și datate în domnia lui Keops, cuprind jurnalul unui oarecare Merer, șef al unei echipe ce ducea blocuri de calcar de la Tura la Giza: e documentația administrativă cea mai veche păstrată în Egipt și întărește funcționarea logistică a statului piramidal.',
        'Administrarea teritoriului era rânduită în nomuri, în fruntea cărora stăteau nomarhi. Legătura dintre puterea centrală și aceste elite provinciale e un semn bun al ciclului politic egiptean: când nomarhii ajung moștenitori și își clădesc morminte uriașe în provinciile lor — cum se întâmplă spre sfârșitul Regatului Vechi —, puterea centrală se retrage.',
        'A fi scrib însemna o cale adevărată de urcare obștească. Satira meseriilor (Învățătura lui Khety), text de școală din Regatul Mijlociu, descrie cu de-amănuntul asprimea meseriilor manuale ca să încheie că numai scribul scapă de ea. E o propagandă de breaslă, dar arată că alfabetizarea era o avuție rară și de preț: se socotește că mai puțin de 1% din popor știa să scrie și să citească.',
      ].join('\n\n'),
    },
    {
      title: 'Ideologia regală: maat ca program de cârmuire',
      body: [
        'Faraonul nu era doar deținătorul puterii politice. Teologia regală îl așeza mijlocitor între zei și oameni, întrupare a lui Horus în viață și asemuit lui Osiris după moarte. Slujba lui declarată era să țină maat — rânduială, adevăr, dreptate, echilibru — în fața lui isfet, haosul.',
        'Asta avea urmări de fapt. Îndreptățirea regelui se măsura prin rezultate ce se puteau verifica: revărsări de ajuns, hambare pline, granițe sigure, temple în clădire. Jan Assmann a stăruit că maat funcționa și ca un principiu de răspuns reciproc obștesc — datoria de a răspunde celuilalt, de a face dreptate celui slab — nu doar ca o cosmologie fără de trup.',
        'Textele din Prima Perioadă Intermediară arată ce se întâmpla când acea făgăduință nu se ținea. Admonestările lui Ipuwer descriu o lume întoarsă pe dos: săracii poartă in fin, râul e sânge, morții rămân neîngropați. Deși textul e literar și data lui se discută, oglindește conștiința egipteană că ruperea rânduielii era o cădere a regelui, nu o întâmplare fără vină.',
        'Puterea regală se sprijinea pe trei trupuri: administrația civilă, în fruntea căreia stătea vizirul; clerul marilor temple; și, mai ales din Regatul Nou, armata de meserie. Încordarea dintre ele lămurește o bună parte din istoria politică egipteană: templul lui Amon de la Karnak a ajuns să stăpânească, potrivit papirusului Harris I, o parte foarte însemnată din pământul de arat al țării, până a ajuns o putere potrivnică adevărată.',
      ].join('\n\n'),
      callout:
        'Maat era deodată zeiță, principiu și faptă. La judecata lui Osiris, inima celui răposat era cântărită în fața penei lui: etica omului era cuprinsă în cosmologia statului.',
    },
    {
      title: 'Structură obștească, muncă și condiții de trai',
      body: [
        'Cea mai mare parte a poporului era țărănească. Lucra pământuri ale coroanei, ale templelor sau ale marilor proprietari, dădea o parte din seceriș și era supusă corveei: muncă silită la lucrări publice, strânsă în lunile de revărsare, când câmpul rămânea sub apă, iar mâna de lucru era slobodă.',
        'Această așezare pe anotimpuri lămurește în bună parte cu putința marilor lucrări. Săpăturile lui Mark Lehner și ale lui Zahi Hawass în așezarea constructorilor de la sud de Giza au documentat brutării, berării, ateliere, dormitoare obștești și depozite de rămășițe de vite în cantitate de ajuns ca să hrănească mii de lucrători. Icoana herodotică a mulțimilor de sclavi biciuiți nu ține: erau muncitori egipteni rânduiți pe echipe, ținuți de stat și cu o oarecare deprindere tehnică.',
        'Satul Deir el-Medina, locuit de meșteșugarii ce săpau și zugrăveau mormintele din Valea Regilor, e situl ce documentează cel mai bine viața de fiecare zi a Egiptului vechi. Miile lui de ostraca păstrează liste de rații, contracte, împrumuturi, procese, bilete de lipsă din pricină de boală, scrisori private și chiar certuri de vecini. În anul 29 al lui Ramses al III-lea, pe la 1155 î.Hr., întârzierea în darea rațiilor a pricinuit prima grevă documentată din istorie: lucrătorii au lăsat munca și s-au așezat în fața templelor funerare cerând grâul cuvenit.',
        'Poziția juridică a femeilor egiptene era de seamă în cadrul Mediteranei vechi: puteau avea și moșteni avuții pe numele lor, puteau încheia contracte, puteau merge la judecată și puteau divorța păstrând o parte din avere. Asta nu înseamnă egalitate. Dregătoriile administrative și preoțești de rang înalt au fost în cea mai mare parte bărbătești, iar puținele femei ce au cârmuit — Hatșepsut, Tausert, Cleopatra a VII-a — au făcut-o luând sau schimbând o titulatură gândită la genul bărbătesc.',
      ].join('\n\n'),
    },
    {
      title: 'Religia funerară: economie, ritual și credință',
      body: [
        'Spusa că egiptenii erau „stăpâniți de gândul morții” e o părere zămislită de izvoarele noastre: necropolele, clădite în piatră în deșert, se păstrează mult mai bine decât locuințele de chirpici din valea ce se revarsă. Ce arată documentația nu e o obsesie, ci o punere statornică a puterilor în continuarea persoanei după moarte.',
        'Acea continuare cerea trei condiții: păstrarea trupului prin mumificare; ținerea numelui și a darurilor de jertfă, chezășuită de fundații funerare cu pământuri date; și trecerea judecății dinaintea lui Osiris. Corpusurile funerare s-au schimbat și s-au răspândit la mai mulți: Textele Piramidelor (Regatul Vechi) erau numai regale; Textele Sicrielor (Regatul Mijlociu) s-au întins la elită; iar așa-numita Carte a Morților (Regatul Nou) umbla în copii de cumpărat, cu locuri goale pentru numele cumpărătorului.',
        'Religia egipteană era politeistă și limpede prisositoare: zeitățile se contopeau (Amon-Ra, Ptah-Sokar-Osiris), își schimbau însemnătatea după orașul de frunte al vremii și îngăduiau teologii locale în același timp, fără nevoia de a le rezolva. Această mlădiere lămurește cât de deosebită a fost reforma lui Akhenaton, care a mărginit cultul numai la discul solar Aton, a închis temple și a mutat curtea la o capitală nouă. Urmașii lui au întors reforma pe dos, au dărâmat Amarna și i-au trecut numele cu vederea din listele regale.',
        'Se cuvine ferite două citiri anacronice. Cea dintâi e citirea atonismului ca pe un monoteism premergător iudaismului, teză pe care Sigmund Freud a răspândit-o în Moise și religia monoteistă (1939) și pe care egiptologia a respins-o în cea mai mare parte din lipsă de continuitate documentată. A doua e citirea practicilor funerare ca superstiție: erau o tehnologie rituală potrivită cu o cosmologie limpede și cu o economie de fundații, de preoții și de ateliere.',
      ].join('\n\n'),
    },
    {
      title: 'Scris, știință tehnică și transmitere',
      body: [
        'Sistemul de scriere egiptean îmbina semne logografice, foneme consonantice și determinative de sens. S-a folosit în trei forme, după rost: hieroglifică, pentru inscripții pe monumente; hieratică, cursivă pe papirus, pentru administrație și literatură; și demotică, dezvoltată în a Treia Perioadă Intermediară, mai iute și mai depărtată de semnul dintâi.',
        'Știința egipteană era mai degrabă lucrătoare decât gânditoare. Geometria răspundea nevoii de a reface hotarele după revărsare și de a socoti volume de hambare și de rampe: papirusul Rhind, copiat pe la 1550 î.Hr., strânge probleme de suprafețe, de fracții și de povârnișuri. Calendarul de rând, de 365 de zile, cu douăsprezece luni de treizeci de zile și cinci zile adăugate, trecea cu vederea sfertul de zi rămas, ceea ce zămislea o abatere ce se aduna, pe care înșiși egiptenii o cunoșteau și pe care reforma iuliană a îndreptat-o veacuri mai târziu.',
        'În medicină, papirusul Edwin Smith înfățișează patruzeci și opt de cazuri de răniri rânduite de la cap la picioare, fiecare cu cercetare, cu diagnostic și cu prevestire, inclusiv formula „o suferință pe care n-o voi trata”. Alături de acea evidență clinică trăiau fără ceartă și descântecele: deosebirea modernă dintre medicină și magie nu era la lucru pentru autorii lor.',
        'Cunoașterea sistemului s-a pierdut după închiderea templelor în vremea romană târzie; ultima inscripție hieroglifică datată vine de la File, din 394 d.Hr. Recăpătarea a venit cu găsirea pietrei de la Rosetta în 1799 și cu descifrarea lui Jean-François Champollion, vestită în Lettre à M. Dacier a lui (1822), care a statornicit că semnele înregistrau deodată sunete și înțelesuri, spre deosebire de tălmăcirea pur simbolică ce stăpânea de la Horapollo încoace.',
      ].join('\n\n'),
      callout:
        'Piatra de la Rosetta repetă un decret preoțesc din 196 î.Hr. în hieroglife, în demotică și în greacă. Faptul că era în mai multe limbi, și nu cuprinsul lui, a fost ce a deschis sistemul.',
    },
    {
      title: 'Imperiu, criză și sfârșitul neatârnării',
      body: [
        'Odată cu Regatul Nou, Egiptul a trecut de la un model de pază a granițelor la o politică imperială lucrătoare în Siria-Palestina și în Nubia, sprijinită de o armată statornică cu care de luptă și arcași. Scrisorile de la Amarna, corespondență diplomatică în akkadiană între curtea egipteană și regii Babilonului, ai statului Mitanni, ai Hatti-ului și prinții vasali canaaniți, documentează un sistem internațional cu rânduieli, căsătorii dinastice și schimb rânduit de daruri.',
        'Bătălia de la Kadesh, pe la 1274 î.Hr., arată deopotrivă marginile militare și puterea de propagandă a statului: Ramses al II-lea a înfățișat-o pe templele lui ca pe o biruință personală, pe când deznodământul adevărat a fost o egalitate strategică ce a dus, pe la 1259 î.Hr., la tratatul cu Hattusili al III-lea, păstrat în varianta egipteană și pe table hitite de la Hattusa.',
        'Prăbușirea Epocii Bronzului Târziu, pe la 1200-1150 î.Hr., a lovit toată Mediterana răsăriteană. Egiptul a supraviețuit ca stat — Ramses al III-lea a respins năvălirile așa-numitor Popoare ale Mării —, dar a ieșit slăbit: pierderea stăpânirilor asiatice, scumpire a grânelor documentată în arhive, și o tot mai mare de sine stătătoare a preoției lui Amon, care a sfârșit cârmuind de fapt sudul țării.',
        'Din întâiul mileniu încoace, Egiptul a fost cârmuit pe rând de dinastii libiene, de dinastia kușită venită de la Napata, de asirieni, de perșii ahemenizi și, din 332 î.Hr., de macedoneni. Ptolemeii au ținut un stat egiptean cu curte grecească la Alexandria și o îndreptățire faraonică spre interior. Înfrângerea Cleopatrei a VII-a și a lui Marcus Antonius la Actium (31 î.Hr.) și anexarea de către Octavian în 30 î.Hr. încheie neatârnarea politică: Egiptul a ajuns o provincie de statut aparte, cârmuită direct de împărat, și a rămas veacuri întregi grânarul Romei.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Maat', definition: 'Rânduială, adevăr și dreptate cosmică și obștească pe care faraonul trebuia s-o țină în fața lui isfet (haosul).' },
    { term: 'Kemet / Deshret', definition: '„Pământul negru” al mâlului de arat față de „pământul roșu” al deșertului: deosebirea de temelie a spațiului egiptean.' },
    { term: 'Akhet, peret, shemu', definition: 'Cele trei anotimpuri ale calendarului agricol: revărsare, semănat și seceriș.' },
    { term: 'Nom', definition: 'Circumscripție administrativă provincială, cârmuită de un nomarh. Moștenirea ei arată slăbirea puterii centrale.' },
    { term: 'Corvee', definition: 'Muncă silită la lucrări publice cerută poporului țărănesc, strânsă în anotimpul revărsării.' },
    { term: 'Ostracon', definition: 'Fragment de ceramică sau de calcar folosit ca suport ieftin de scris. Temelia documentară a satului Deir el-Medina.' },
    { term: 'Sincretism', definition: 'Contopirea zeităților (Amon-Ra, Ptah-Sokar-Osiris) fără să dispară cultele dinainte.' },
    { term: 'Perioadă Intermediară', definition: 'Etapă de fărâmițare a puterii centrale între două Regate, cu dinastii deodată și potrivnice.' },
    { term: 'Zile adăugate', definition: 'Cele cinci zile puse la sfârșitul calendarului de rând de 360 de zile ca să întregească anul de 365.' },
    { term: 'Damnatio memoriae', definition: 'Ștergerea înadins a numelui și a icoanei unui cârmuitor, aplicată lui Akhenaton și lui Hatșepsut.' },
  ],
  debates: [
    {
      question: 'S-a născut statul egiptean din nevoia de a purta de grijă irigației la scară mare?',
      positions: [
        {
          school: 'Teza hidraulică (Wittfogel, 1957)',
          argument:
            'Marile state vechi ar fi ieșit din stăpânirea rânduită din centru a sistemelor de irigație uriașe, ce ar fi cerut o birocrație silitoare. Egiptul ar fi cazul de temei al acestui „despotism răsăritean”.',
        },
        {
          school: 'Critică ecologică și arheologică (Butzer, 1976)',
          argument:
            'Irigația egipteană a fost de bazin, ținută la fața locului, iar marile lucrări hidraulice documentate sunt de mai târziu față de alcătuirea statului. Legătura de la cauză la urmare se răstoarnă: statul deja existent a lărgit apoi irigația, nu invers.',
        },
      ],
      state:
        'Teza lui Wittfogel e azi în cea mai mare parte respinsă ca lămurire de cauză. Dezbaterea s-a mutat spre rolul întrecerii dintre centrele predinastice, spre stăpânirea comerțului pe distanțe lungi și spre ideologia regală ca pricini ale alcătuirii statului.',
    },
    {
      question: 'Cine a clădit piramidele și în ce condiții?',
      positions: [
        {
          school: 'Povestirea clasică (Herodot, s. V î.Hr.)',
          argument:
            'O sută de mii de oameni lucrând în schimburi sub silă, douăzeci de ani, într-o lucrare descrisă ca o tiranie ce a închis templele și a ruinat țara.',
        },
        {
          school: 'Arheologia așezării (Lehner și Hawass, din 1988)',
          argument:
            'Satul constructorilor din Giza dă la iveală brutării, berării, dormitoare și un consum de carne mare, pe măsura unor echipe rotative de muncitori egipteni ținuți de stat, cu ierarhii tehnice și îngrijire medicală documentată în rămășițele de oase.',
        },
      ],
      state:
        'Înțelegerea de azi înlătură sclavia în masă și așază lucrarea în sistemul corveei de anotimp. Rămâne discutată mărimea exactă a forței de muncă statornice față de cea de anotimp și costul adevărat al lucrării pentru economia agrară.',
    },
    {
      question: 'A fost reforma lui Akhenaton un monoteism?',
      positions: [
        {
          school: 'Citire monoteistă (Breasted; Freud, 1939)',
          argument:
            'Atonismul ar fi fost cea dintâi religie monoteistă din istorie și un izvor cu putință al monoteismului israelit, având în vedere închiderea celorlalte culte și imnurile ce îi pun pe seama lui Aton facerea lumii întregi.',
        },
        {
          school: 'Citire de context (Assmann; Hornung)',
          argument:
            'Ar fi mai degrabă un henoteism regal și fără loc pentru altceva: însuși Akhenaton rămânea obiect de cult, iar accesul la Aton trecea prin el. Nu e nicio continuitate documentată ce leagă Amarna de Israel.',
        },
      ],
      state:
        'Egiptologia de azi descrie reforma drept un caz aparte de exclusivism de cult impus de la coroană, fără urmași religioși direcți. Asemănarea cu monoteismul biblic e socotită greu de susținut din lipsă de verigi documentare.',
    },
  ],
  sources: [
    { author: 'Herodot', title: 'Istorii, cartea a II-a', year: 's. V î.Hr.', kind: 'primaria', note: 'Descriere grecească a Egiptului: prețioasă ca mărturie a primirii lui, puțin de crezare în cronologie și în povestea piramidelor.' },
    { author: 'Anonim', title: 'Învățătura lui Khety (Satira meseriilor)', year: 'Regatul Mijlociu', kind: 'primaria', note: 'Text de școală ce înalță starea scribului față de meseriile manuale.' },
    { author: 'Anonim', title: 'Admonestările lui Ipuwer', year: 'Regatul Mijlociu (dată discutată)', kind: 'primaria', note: 'Plângere pentru o rânduială obștească întoarsă pe dos; folosit cu grijă ca izvor al Primei Perioade Intermediare.' },
    { author: 'Diverși autori', title: 'Scrisorile de la Amarna', year: 'c. 1360–1330 î.Hr.', kind: 'primaria', note: 'Corespondență diplomatică în akkadiană între Egipt și curțile Orientului Apropiat.' },
    { author: 'Merer', title: 'Papirusurile de la Wadi al-Jarf', year: 'c. 2560 î.Hr.', kind: 'primaria', note: 'Jurnal logistic al transportului de calcar la Giza. Documentația administrativă cea mai veche păstrată.' },
    { author: 'Karl W. Butzer', title: 'Early Hydraulic Civilization in Egypt: A Study in Cultural Ecology', year: '1976', kind: 'estudio', note: 'Dărâmarea ecologică a tezei despotismului hidraulic.' },
    { author: 'Jan Assmann', title: 'Maat: Gerechtigkeit und Unsterblichkeit im Alten Ägypten', year: '1990', kind: 'estudio', note: 'Maat ca principiu de răspuns reciproc obștesc, nu doar cosmologic.' },
    { author: 'Barry J. Kemp', title: 'Ancient Egypt: Anatomy of a Civilization', year: '1989 (ed. a 3-a, 2018)', kind: 'estudio', note: 'Sinteză de referință despre stat, ideologie și economie egipteană.' },
    { author: 'Mark Lehner', title: 'The Complete Pyramids', year: '1997', kind: 'estudio', note: 'Arheologia clădirii și a așezării muncitorilor din Giza.' },
    { author: 'Toby A. H. Wilkinson', title: 'The Rise and Fall of Ancient Egypt', year: '2010', kind: 'estudio', note: 'Povestire generală ce subliniază firea silitoare a statului faraonic.' },
    { author: 'Erik Hornung', title: 'Akhenaten and the Religion of Light', year: '1995 (trad. 1999)', kind: 'estudio', note: 'Analiza reformei atoniste în fața citirilor monoteiste.' },
  ],
  documents: [
    {
      section: 3,
      title: 'Cea dintâi grevă documentată',
      text: [
        'Azi sunt douăzeci de zile din lună și nu am primit rațiile. Am trecut peste zidurile incintei.',
        'Și am spus: ne e foame. Au trecut optsprezece zile din această lună. Ne așezăm aici și nu ne întoarcem la muncă.',
        'Să i se spună faraonului, bunul nostru stăpân, și vizirului, mai-marele nostru, ca să ni se dea din ce să trăim.',
      ].join('\n\n'),
      source: 'Papirusul grevei de la Deir el-Medina, domnia lui Ramses al III-lea, pe la 1155 î.Hr.',
      note: 'Versiune proprie după hieratică. Papirusul se păstrează la Muzeul Egiptean din Torino.',
      question: 'Muncitorii nu cer libertate, nici simbrie: cer să li se dea grânele făgăduite, și se îndreaptă spre faraon. Ce dă asta la iveală despre cum funcționa de fapt economia egipteană?',
    },
  ],
  images: [
    {
      alt: 'Cele trei mari piramide din Giza aliniate pe nisipul deșertului, la asfințit',
      caption: 'Necropola din Giza, ridicată în timpul dinastiei a IV-a.',
    },
    {
      alt: 'Mare sfinx de piatră cu trup de leu și cap omenesc purtând nemesul, săpat în stâncă',
      caption: 'Marele Sfinx din Giza, pus pe seama domniei lui Khafra. E cioplit chiar în stânca băncii carierei.',
    },
    {
      alt: 'Vinietă de papirus cu o balanță ce cântărește o inimă în fața unei pene, un scrib zeiesc însemnând și un monstru așteptând',
      caption: 'Cântărirea inimii în papirusul lui Hunefer, pe la 1275 î.Hr. Rezultatul judecății se însemnează ca o socoteală oarecare.',
    },
    {
      alt: 'Statuie a unui bărbat șezând cu picioarele încrucișate, cu un sul de papirus deschis pe genunchi și ochii încrustați',
      caption: 'Scribul șezând, de la Saqqara, pe la 2500 î.Hr. A ști să scrii scutea de munca fizică și deschidea calea spre administrație.',
    },
  ],
  questions: [
    {
      question: 'Ce însușire a rânduielii Nilului a fost mai hotărâtoare pentru alcătuirea statului egiptean?',
      options: ['Debitul lui întreg', 'Putința de a fi prevăzut pe anotimpuri', 'Navigabilitatea lui până la mare', 'Bogăția lui de pește'],
      explanation: 'Statornicia ciclului îngăduia prevederea secerișului, fixarea dărilor înainte de a le strânge și plănuirea corveei. Tigrul și Eufratul, mai neregulați, nu dădeau acea temelie.',
    },
    {
      question: 'Ce susține critica lui Karl Butzer la teza „despotismului hidraulic” a lui Wittfogel?',
      options: [
        'Că Egiptul nu a avut deloc irigație',
        'Că irigația a fost de bazin și locală, iar marile lucrări sunt de după alcătuirea statului',
        'Că irigația era ținută numai de temple',
        'Că revărsarea făcea de prisos orice lucrare hidraulică',
      ],
      explanation: 'Butzer răstoarnă legătura de la cauză la urmare: nu irigația a zămislit statul, ci un stat deja alcătuit a lărgit apoi sistemele hidraulice.',
    },
    {
      question: 'Ce documentează papirusurile de la Wadi al-Jarf?',
      options: [
        'Ritualul de încoronare a lui Keops',
        'Jurnalul logistic al transportului de calcar la Giza',
        'Tratatul cu hitiții',
        'Recensământul preoților lui Amon',
      ],
      explanation: 'Jurnalul inspectorului Merer, găsit în 2013, însemnează călătoriile echipei lui de la carierele din Tura. E documentația administrativă cea mai veche păstrată în Egipt.',
    },
    {
      question: 'Moștenirea dregătoriilor de nomarh și clădirea uriașă a mormintelor lor provinciale arată, mai ales…',
      options: ['O creștere a puterii faraonice', 'O retragere a puterii centrale', 'Venirea unor dinastii străine', 'O reformă religioasă'],
      explanation: 'Când elitele provinciale se statornicesc din tată-n fiu și se îngroapă cu lux în nomurile lor, ele prind avuții ce mai înainte curgeau spre centru. E un semn clasic de descentralizare.',
    },
    {
      question: 'Ce lămurește strângerea corveei în lunile de revărsare?',
      options: [
        'Că arșița oprea munca în restul anului',
        'Că câmpul era sub apă și mâna de lucru agrară rămânea slobodă',
        'Că templele opreau munca la semănat',
        'Că era numai carierele erau la îndemână cu râul scăzut',
      ],
      explanation: 'Așezarea pe anotimpuri a muncii agrare slobozea forța de lucru tocmai când transportul pe apă al blocurilor era, pe deasupra, mai ușor. Sistemul se folosea de amândoi factorii.',
    },
    {
      question: 'Ce arată dovada arheologică a satului constructorilor din Giza?',
      options: [
        'Barăci de sclavi străini',
        'Brutării, berării și un consum de carne pe măsura unor muncitori ținuți de stat',
        'Că piramida s-a clădit cu mână de lucru militară prinsă',
        'Că satul a fost părăsit înainte de a se termina lucrarea',
      ],
      explanation: 'Săpăturile lui Lehner și ale lui Hawass documentează infrastructură de aprovizionare, ierarhii tehnice și îngrijire medicală în rămășițele de oase: echipe rânduite, nu sclavie în masă.',
    },
    {
      question: 'De ce e Deir el-Medina un sit ieșit din comun?',
      options: [
        'Fiindcă păstrează singurul templu solar întreg',
        'Fiindcă ostraca lui documentează viața de fiecare zi: rații, procese, boli și o grevă',
        'Fiindcă cuprinde mormântul neatins al unui faraon',
        'Fiindcă acolo s-a găsit piatra de la Rosetta',
      ],
      explanation: 'Obștea de meșteșugari din Valea Regilor a lăsat mii de texte obișnuite. În anul 29 al lui Ramses al III-lea, întârzierea rațiilor a pricinuit prima grevă documentată.',
    },
    {
      question: 'Ce proces oglindesc Textele Piramidelor, Textele Sicrielor și Cartea Morților?',
      options: [
        'Înlocuirea politeismului cu monoteismul',
        'Întinderea treptată a accesului la viața de apoi de la rege la elită și la oricine putea plăti',
        'Părăsirea mumificării',
        'Strângerea cultului la Karnak',
      ],
      explanation: 'E așa-numita „democratizare a lumii de apoi”: ce în Regatul Vechi era numai al regelui ajunge să circule în copii de cumpărat, cu loc pentru numele cumpărătorului.',
    },
    {
      question: 'Cum descrie azi egiptologia de căpetenie reforma lui Akhenaton?',
      options: [
        'Ca pe cel dintâi monoteism, obârșie directă a iudaismului',
        'Ca pe un exclusivism de cult impus de la coroană, fără continuitate documentată mai apoi',
        'Ca pe o restaurare a cultului tradițional al lui Amon',
        'Ca pe o născocire a istoriografiei secolului al XIX-lea',
      ],
      explanation: 'Assmann și Hornung subliniază că accesul la Aton trecea prin însuși regele, obiect de cult, și că nu sunt verigi documentare ce leagă Amarna de monoteismul israelit.',
    },
    {
      question: 'Papirusul Edwin Smith se deosebește fiindcă…',
      options: [
        'Cuprinde numai descântece magice',
        'Rânduiește patruzeci și opt de cazuri de răniri, cu cercetare, diagnostic și prevestire',
        'Strânge calendarul revărsărilor',
        'Descrie procesul întreg al mumificării',
      ],
      explanation: 'Rânduiala lui e clinică și ajunge să admită cazuri fără leac. Magia trăia laolaltă cu acea evidență fără ca autorii ei să simtă vreo contrazicere.',
    },
    {
      question: 'Ce abatere zămislea calendarul de rând egiptean, de 365 de zile?',
      options: [
        'Niciuna: era întocmai',
        'O mutare ce se aduna, din pricina trecerii cu vederea a sfertului de zi rămas',
        'O grăbire de o lună pe veac, din pricina numărării a 13 luni',
        'O întârziere pricinuită de cele cinci zile adăugate',
      ],
      explanation: 'Neintercalând ziua bisectă, anul de rând se muta față de anul solar. Chiar egiptenii știau de această abatere.',
    },
    {
      question: 'Ce a adus Champollion în Lettre à M. Dacier a lui (1822)?',
      options: [
        'Că hieroglifele erau semne pur de idee',
        'Că sistemul înregistra deodată sunete și înțelesuri',
        'Că egipteana venea din greacă',
        'Că piatra de la Rosetta era o falsificare',
      ],
      explanation: 'În fața tradiției simboliste moștenite de la Horapollo, Champollion a dovedit firea amestecată — fonetică și de sens — a scrisului.',
    },
    {
      question: 'Ce dau la iveală scrisorile de la Amarna despre sistemul internațional al Bronzului Târziu?',
      options: [
        'Că Egiptul nu ținea legături din afară',
        'Că era o diplomație rânduită în akkadiană, cu căsătorii dinastice și schimb de daruri',
        'Că hitiții erau vasali ai Egiptului',
        'Că negoțul se făcea numai pe mare',
      ],
      explanation: 'Corespondența cu Babilonul, cu Mitanni, cu Hatti și cu prinții canaaniți arată rânduieli statornice între „regi mari” și o rețea de vasalitate în Siria-Palestina.',
    },
    {
      question: 'Care a fost rezultatul adevărat al bătăliei de la Kadesh?',
      options: [
        'Biruință egipteană hotărâtoare, cum spun basoreliefurile lui Ramses al II-lea',
        'O egalitate strategică ce a dus la un tratat cu Hattusili al III-lea',
        'Cucerirea hitită a deltei',
        'Pierderea Nubiei de către Egipt',
      ],
      explanation: 'Propaganda de pe monumente a lui Ramses al II-lea înfățișează o biruință personală, dar deznodământul a fost un echilibru ce pe la 1259 î.Hr. s-a oficializat într-un tratat păstrat în amândouă variantele.',
    },
    {
      question: 'Ce urmare dinăuntru a avut pentru Egipt prăbușirea Bronzului Târziu?',
      options: [
        'Pieirea numaidecât a statului egiptean',
        'Pierderea stăpânirilor asiatice și de sine stătătoarea tot mai mare a preoției lui Amon',
        'Primirea alfabetului fenician ca scriere oficială',
        'Mutarea de tot a capitalei la Alexandria',
      ],
      explanation: 'Egiptul a rezistat năvălirilor Popoarelor Mării, dar a ieșit slăbit: scumpire a grânelor documentată și un cler teban ce a sfârșit cârmuind de fapt sudul.',
    },
    {
      question: 'Ce statut a avut Egiptul după anexarea din 30 î.Hr.?',
      options: [
        'Provincie senatorială obișnuită',
        'Provincie de statut aparte, cârmuită direct de împărat',
        'Regat clientelar cu dinastie proprie',
        'Teritoriu scutit de dări',
      ],
      explanation: 'Din pricina prețuirii lui strategice ca grânar, Augustus a ținut-o sub stăpânirea lui personală printr-un prefect de rang ecvestru, și a oprit accesul senatorilor fără voie imperială.',
    },
  ],
}
