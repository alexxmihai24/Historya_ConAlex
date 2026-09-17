import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/revolucion-cientifica.ts`. Aceeași
   formă: 6 secțiuni în aceeași ordine, 12 date, 14 concepte, 3 dezbateri, 23 de
   surse, un document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași
   poziții. */
export const revolucionCientificaRo: TopicTranslation = {
  title: 'Revoluția științifică',
  description: 'De la prăbușirea cosmosului aristotelic la *Principia*: cum s-a schimbat ce socotea Europa drept cunoaștere de încredere.',
  years: '1543–1687',
  summary:
    'Între publicarea, după moarte, a lucrării lui Copernic, în 1543, și *Principia* lui Newton, din 1687, Europa a încetat să explice lumea prin scopuri, calități și ierarhii firești și a început să o explice prin materie, mișcare și legi matematice. Ce s-a schimbat nu a fost doar cuprinsul teoriilor: s-a schimbat cine avea dreptul să hotărască ce trece drept dovadă, unde se producea cunoașterea și cum se făcea publică. De aceea eticheta „revoluție științifică” continuă să se discute. A existat o continuitate tehnică cu astronomia medievală latină și islamică, au fost încercări, fundături și multă alchimie. Și totuși, un european cult din 1700 trăia într-un univers pe care unul din 1500 nu l-ar fi recunoscut.',
  keyDates: [
    { date: '1543', event: 'Copernic publică *De revolutionibus*, iar Vesalius *De humani corporis fabrica*.' },
    { date: '1572 și 1577', event: 'Tycho Brahe observă o novă și o cometă deasupra Lunii: cerurile se schimbă.' },
    { date: '1600', event: 'Giordano Bruno este ars pe rug la Roma; Gilbert publică *De magnete*.' },
    { date: '1609–1619', event: 'Kepler formulează cele trei legi ale mișcării planetare, pornind de la datele lui Tycho.' },
    { date: '1610', event: '*Sidereus nuncius*: Galilei publică ce vede cu luneta.' },
    { date: '1620', event: 'Bacon publică *Novum Organum* și propune o metodă inductivă și obștească.' },
    { date: '1628', event: 'Harvey dovedește circulația sângelui, în *De motu cordis*.' },
    { date: '1632–1633', event: '*Dialogul* lui Galilei și osândirea lui de către Sfântul Oficiu.' },
    { date: '1637', event: 'Descartes publică *Discurs asupra metodei*, cu *Geometria* ca anexă.' },
    { date: '1660–1666', event: 'Se întemeiază Royal Society din Londra și Académie des Sciences din Paris.' },
    { date: '1665', event: 'Apare *Philosophical Transactions*, prima revistă științifică periodică.' },
    { date: '1687', event: 'Newton publică *Principia*: o singură lege explică deopotrivă căderea corpurilor și orbitele.' },
  ],
  sections: [
    {
      title: 'Cosmosul care trebuia spart',
      body: [
        'Modelul moștenit nu era o superstiție naivă: era un sistem coerent, sprijinit pe observație și rafinat de-a lungul secolelor. Pământul ocupa centrul fiindcă trupurile grele cad spre el; cerurile erau dintr-o materie deosebită, nesupusă stricăciunii, și se mișcau în cercuri fiindcă cercul este mișcarea desăvârșită și fără început. Fizica lui Aristotel explica lumea de sub Lună prin tendințe firești ale celor patru elemente, iar astronomia lui Ptolemeu salva fenomenele cu epicicluri, deferenți și echanți.',
        'Acest sistem funcționa. Prevedea eclipsele cu o precizie rezonabilă și se potrivea cu trăirea de zi cu zi: nu simțim că Pământul se mișcă, iar dacă s-ar învârti, un lucru aruncat în sus ar trebui să rămână în urmă. Obiecția nu era proastă; a o răsturna a cerut o fizică nouă, nu doar o astronomie nouă.',
        'Sistemul mai avea și greutăți cunoscute. Adunarea de cercuri făcea modelul greoi, echantul călca principiul mișcării circulare uniforme pe care se presupunea că îl apără, iar calendarul iulian aduna o rămânere în urmă vădită, pe care Biserica voia să o îndrepte. Copernic a lucrat tocmai în acest context de reformă a calendarului.',
        'Se cuvine, pe deasupra, să fie desfăcută ideea unui gol științific dinainte. Astronomia școlii de la Maragheh, în secolul al XIII-lea, dezvoltase modele geometrice — perechea lui Tusi, modelele lui Ibn al-Shatir — matematic la fel cu cele folosite de Copernic. George Saliba a documentat această potrivire și susține că a fost transmitere, nu născocire deosebită. Chestiunea drumului exact rămâne deschisă.',
      ].join('\n\n'),
      callout:
        'Modelele lunare și planetare ale lui Ibn al-Shatir (secolul al XIV-lea) sunt matematic identice cu cele ale lui Copernic. Discuția nu este dacă seamănă, ci pe ce cale au ajuns la Cracovia.',
    },
    {
      title: 'Copernic, Tycho, Kepler',
      body: [
        '*De revolutionibus orbium coelestium* a fost publicată în 1543, anul morții autorului ei. Copernic punea Soarele în centru ca să redea puritatea mișcării circulare uniforme, nu ca să rupă cu tradiția: sistemul lui avea încă nevoie de cercuri ajutătoare și nu era cu mult mai exact decât cel al lui Ptolemeu. Andreas Osiander a adăugat fără voie o prefață anonimă care înfățișa ipoteza doar ca pe un mijloc de calcul, ceea ce a domolit reacția vreme de decenii.',
        'Obiecția cea mai serioasă bazată pe observație era lipsa paralaxei stelare: dacă Pământul se mișcă, stelele ar trebui să pară că se mută de-a lungul anului. Nu se vedea așa ceva. Copernicienii au răspuns că stelele sunt de neînchipuit de departe, lucru adevărat, dar în acea vreme de nedeosebit de o scuză. Prima măsurare a paralaxei a venit în 1838.',
        'Tycho Brahe a adus ce lipsea: date. De la observatorul din Uraniborg a măsurat pozițiile planetelor cu o precizie fără lunetă de vreun minut de arc, de zece ori mai bună decât în tradiție. Observațiile lui asupra novei din 1572 și ale cometei din 1577 au arătat fenomene schimbătoare dincolo de Lună și, prin urmare, falsitatea sferelor cristaline nesupuse stricăciunii. Modelul lui însuși era mixt: planetele se învârt în jurul Soarelui, iar întregul, în jurul unui Pământ neclintit.',
        'Johannes Kepler a moștenit acele date și le-a luat în serios până la capăt. Nepotrivirea de opt minute de arc din orbita lui Marte, pe care oricine altcineva ar fi pus-o pe seama unei greșeli de observație, l-a dus la părăsirea cercului. În 1609 a publicat că orbitele sunt elipse cu Soarele într-unul din focare și că raza vectoare mătură arii egale în timpuri egale; în 1619 a adăugat legătura dintre perioadă și distanță. Odată cu asta, a dispărut nevoia de epicicluri.',
        'Kepler nu era un om modern în halat de laborator. Căuta armoniile muzicale ale cosmosului și a potrivit orbitele în solide platonice. Revoluția științifică a fost făcută de oameni ale căror mobiluri ne par astăzi ciudate, iar această nepotrivire face parte din chiar obiectul de studiu.',
      ].join('\n\n'),
    },
    {
      title: 'Galilei: unealta și conflictul',
      body: [
        'În 1609, Galilei și-a construit propria lunetă, iar în martie 1610 a publicat *Sidereus nuncius*: munți pe Lună, nenumărate stele nevăzute cu ochiul liber și patru sateliți învârtindu-se în jurul lui Jupiter, pe care i-a botezat aștrii medicei, într-o mișcare de căutare a protecției la fel de eficace pe cât de socotită. Fazele lui Venus, observate puțin după aceea, respingeau modelul ptolemeic curat, dar nu și pe cel al lui Tycho.',
        'Aportul lui hotărâtor a fost fizic, nu astronomic: legea căderii corpurilor grele, principiul inerției în forma lui de la început și relativitatea mișcării uniforme, care răspundea vechii obiecții cu piatra ce cade la piciorul catargului unei corăbii în mers. Fără această fizică, heliocentrismul nu putea fi apărat.',
        'Conflictul cu Roma a fost povestit un veac și jumătate ca o ciocnire dintre știință și religie, după schema lui Draper și White din secolul al XIX-lea. Cercetarea de azi a complicat lucrurile. În 1616, Sfântul Oficiu a declarat doctrina heliocentrică formal eretică, iar Bellarmin l-a avertizat pe Galilei; ideea rostită era că, fără o dovadă hotărâtoare, nu se cuvenea să fie recitită Scriptura. În 1632, Galilei a publicat, cu îngăduință, *Dialogul despre cele două mari sisteme*, dar a pus argumentele papei Urban al VIII-lea în gura personajului numit Simplicio.',
        'Au atârnat felul literar ales, toscana de rând în loc de latină, ruperea unei protecții personale, presiunea asupra unui papă acuzat de moliciune în plin Război de Treizeci de Ani și dușmănia aristotelicilor universitari, care își pierdeau autoritatea. Nimic din toate acestea nu preface osândirea într-un episod mărunt, dar explică mai bine decât formula „știință împotriva credinței” de ce s-a întâmplat în 1633 și nu mai devreme.',
      ].join('\n\n'),
      callout:
        'Osândirea din 1633 nu a fost ciocnirea a două tabere. A fost un conflict de jurisdicție asupra cine tălmăcește Scriptura, înrăutățit de protecția ruptă și de războiul din Germania.',
    },
    {
      title: 'Metode, unelte și fapte publice',
      body: [
        'Francis Bacon a propus în *Novum Organum*, din 1620, o alternativă la silogism: să fie strânse istorii naturale, să fie rânduite tabele de prezență și absență și să se urce prin inducție spre axiome tot mai generale. Modelul lui era obștesc și de colaborare, iar imaginea lui despre Casa lui Solomon avea să îi inspire pe întemeietorii Royal Society. Nu a făcut niciodată o descoperire însemnată, dar a definit o instituție.',
        'Descartes a mers în sens contrar: siguranță prin deducție, pornind de la principii limpezi, lumea redusă la întindere și mișcare, animalele ca mașini. Mecanicismul cartezian a scos din natură calitățile ascunse și cauzele finale; fizica lui s-a dovedit falsă aproape în întregime, dar a fixat totuși vocabularul în care s-a discutat un veac întreg.',
        'Ce a fost hotărâtor, în practică, au fost uneltele și procedurile. Luneta, microscopul lui Hooke și al lui Leeuwenhoek, barometrul lui Torricelli, ceasul cu pendul al lui Huygens și pompa de vid a lui Boyle și a lui Hooke au creat fenomene pe care nimeni nu le mai văzuse și care cereau un fel nou de a le da crezare.',
        'Steven Shapin și Simon Schaffer au analizat în 1985 această operațiune. Pompa de vid producea fapte doar dacă un public priceput le vedea cu ochii lui, dacă proza le descria cu atâta amănunt încât cititorul devenea martor virtual și dacă se primea să se discute despre efecte observate fără a se urca până la cauzele din urmă. Hobbes a obiectat că acest consens experimental era șubred și arbitrar și a apărat demonstrația prin deducție. A câștigat Boyle, și odată cu el o formă de autoritate întemeiată pe mărturia obștească.',
        'Revistele au închis cercul. *Philosophical Transactions*, din 1665 încoace, dădeau data întâietății, supuneau textele judecății altor membri și creau o arhivă care se aduna. Odată cu tiparul, pe care Elizabeth Eisenstein l-a așezat în centrul procesului, cunoașterea a devenit reproductibilă, de comparat și de îndreptat de către alții.',
      ].join('\n\n'),
    },
    {
      title: 'Newton și sinteza',
      body: [
        '*Principia mathematica philosophiae naturalis*, din 1687, au rezolvat problema deschisă de Kepler: de ce urmează planetele acele orbite. Newton a dovedit că o forță de atracție invers proporțională cu pătratul distanței produce cele trei legi ale lui Kepler și explică în același timp căderea unei pietre, mareele și traiectoria cometelor. O singură fizică pentru cer și pentru pământ.',
        'Prețul a fost de gândire. Gravitația lucra la distanță, fără atingere sau mecanism văzut, ceea ce cartezienilor li s-a părut o cădere înapoi la calitățile ascunse medievale. Newton a răspuns, în scoliul general din 1713, cu formula *hypotheses non fingo*: nu născocesc ipoteze despre cauza gravitației, îmi ajunge că efectele ei se deduc matematic și se verifică. Este o mutare a ceea ce se socotește o explicație mulțumitoare.',
        '*Optica* lui, din 1704, scrisă în engleză și rânduită ca șir de experimente cu prisme și întrebări deschise, a avut o înrâurire la fel de mare ca *Principia* și a dat modelul experimental urmat de secolul al XVIII-lea.',
        'Chipul primului om de știință modern se izbește de arhive. John Maynard Keynes, după ce a cumpărat în 1936 manuscrisele nepublicate, a scris că Newton nu a fost cel dintâi al epocii rațiunii, ci ultimul dintre magi: a dat mai multe pagini alchimiei și cronologiei biblice decât fizicii. Revoluția științifică nu a constat în faptul că niște oameni moderni i-au biruit pe niște vechi, ci în faptul că anumite practici — matematice, experimentale, publice — au fost alese dintr-un ansamblu de interese mult mai larg.',
      ].join('\n\n'),
    },
    {
      title: 'Revoluție? Dezbaterea istoriografică',
      body: [
        'Pierre Duhem a susținut, la începutul secolului XX, că știința modernă se naște în Evul Mediu, cu osândirea de la Paris din 1277, cu teoria impetusului a lui Buridan și cu calculatorii de la Merton College. Alistair Crombie a dus mai departe linia, subliniind tradiția experimentală medievală. De acolo, anul 1543 nu deschide nimic: încheie.',
        'Alexandre Koyré a apărat contrariul, în 1939: ce s-a întâmplat a fost o schimbare de gândire, trecerea de la un cosmos închis și ierarhizat la un univers fără sfârșit și la fel peste tot, și matematizarea a ceea ce este real. Herbert Butterfield a răspândit în 1949 expresia revoluție științifică și a numit-o eveniment fără seamăn de la apariția creștinismului încoace. Thomas Kuhn a dat în 1962 vocabularul pe care încă îl folosim — paradigmă, știință obișnuită, incomensurabilitate — și, odată cu el, ideea că schimbările adânci nu sunt cumulative.',
        'Axa dinăuntru-dinafară străbate această discuție. Boris Hessen a susținut în 1931 că *Principia* răspund unor probleme tehnice ale mineritului, ale balisticii și ale navigației. Edgar Zilsel a pus nașterea metodei pe seama unirii dintre știința de mână a meșteșugarilor, a inginerilor și a marinarilor și pregătirea matematică a universitarilor. Robert Merton a legat în 1938 puritanismul de activitatea științifică în Anglia secolului al XVII-lea. Koyré a răspuns că ideile se schimbă după propria lor logică. Astăzi aproape nimeni nu mai susține vreuna dintre cele două poziții în stare curată.',
        'Formularea cea mai radicală a dat-o Steven Shapin, în 1996, deschizându-și cartea cu afirmația că nu a existat un asemenea lucru ca revoluția științifică și că tocmai despre asta era vorba în carte. Argumentul lui: nu a fost o metodă unică, nici un moment unic, nici o comunitate unificată, ci practici felurite adunate mai apoi din comoditate narativă.',
        'Starea de azi este un echilibru. Se păstrează eticheta ca o periodizare folositoare, se respinge povestea eroică a unor genii care biruie superstiția, se subliniază continuitatea tehnică cu tradițiile latină și islamică și se primește rezultatul: pe la 1700 se schimbase pentru multă vreme ce se accepta drept dovadă, cine putea să o producă și unde era făcută publică.',
      ].join('\n\n'),
      callout:
        'Shapin își deschide cartea cu „nu a existat un asemenea lucru ca revoluția științifică, iar cartea de față este despre ea”. Provocarea rezumă consensul: eticheta ține de periodizare, nu de explicație.',
    },
  ],
  concepts: [
    { term: 'Echant', definition: 'Punct ptolemeic din care mișcarea pare uniformă. Călca principiul circular pe care spunea că îl apără: unul dintre motivele lui Copernic.' },
    { term: 'Paralaxă stelară', definition: 'Mutarea aparentă a stelelor din pricina mișcării Pământului. Lipsa ei a fost obiecția cea mai puternică la heliocentrism, până în 1838.' },
    { term: 'Școala de la Maragheh', definition: 'Tradiție astronomică islamică din secolele XIII-XIV. Modelele ei, precum perechea lui Tusi, sunt echivalente cu cele folosite de Copernic.' },
    { term: 'Orbită eliptică', definition: 'Prima lege a lui Kepler (1609): planetele descriu elipse cu Soarele într-unul dintre focare. Înlătură nevoia de epicicluri.' },
    { term: 'Legea ariilor', definition: 'A doua lege a lui Kepler: raza vectoare mătură arii egale în timpuri egale. Planetele nu se mișcă cu viteză constantă.' },
    { term: 'Principiul inerției', definition: 'Un corp își păstrează mișcarea uniformă dacă nimic nu îl schimbă. Fără el, obiecția pietrei și a catargului făcea heliocentrismul de neapărat.' },
    { term: 'Mecanicism', definition: 'Explicarea lumii firești doar prin materie, formă și mișcare, fără cauze finale sau calități ascunse. Program cartezian.' },
    { term: 'Inducție baconiană', definition: 'Urcarea de la istorii naturale și tabele de prezență și absență spre axiome generale. Model obștesc, nu individual.' },
    { term: 'Martor virtual', definition: 'Concept al lui Shapin și Schaffer: proza experimentală amănunțită îl preface pe cititorul absent în martor al faptului.' },
    { term: 'Hypotheses non fingo', definition: 'Formulă a lui Newton (1713): descrie matematic efectele gravitației fără să presupună cauza ei. Redefinește ce înseamnă a explica.' },
    { term: 'Philosophical Transactions', definition: 'Revista Royal Society, din 1665 încoace. Fixează întâietatea, supune textele judecății colegilor și creează o arhivă care se adună.' },
    { term: 'Teza lui Zilsel', definition: 'Metoda experimentală se naște din unirea dintre știința de mână a meșteșugarilor și a inginerilor și pregătirea matematică universitară.' },
    { term: 'Teza lui Merton', definition: 'Legătura dintre etica puritană și activitatea științifică în Anglia secolului al XVII-lea. Mult discutată în privința mecanismului cauzal.' },
    { term: 'Paradigmă', definition: 'La Kuhn (1962), ansamblul de presupuneri, probleme și modele care definește știința obișnuită. Schimbările de paradigmă nu sunt cumulative.' },
  ],
  debates: [
    {
      question: 'Ruptură revoluționară sau continuitate cu Evul Mediu?',
      positions: [
        {
          school: 'Continuitate (Duhem, Crombie)',
          argument:
            'Osândirea din 1277, teoria impetusului, calculatorii de la Merton College și optica medievală cuprind deja esențialul: 1543 încheie un proces lung, nu îl deschide.',
        },
        {
          school: 'Schimbare de gândire (Koyré, Butterfield, Kuhn)',
          argument:
            'Ce s-a întâmplat a fost o schimbare de lume: de la cosmosul închis și ierarhic la universul fără sfârșit și la fel peste tot, cu matematizarea a ceea ce este real și cu incomensurabilitate între cadre.',
        },
        {
          school: 'Desființare (Shapin, 1996)',
          argument:
            'Nu a fost o metodă unică, nici un moment unic, nici o comunitate unificată. Revoluția științifică este o adunare retrospectivă a unor practici felurite.',
        },
      ],
      state:
        'Se păstrează eticheta ca o periodizare folositoare și se lasă deoparte povestea eroică. Există acord asupra continuității tehnice cu tradițiile latină și islamică și asupra faptului că pe la 1700 se schimbase pentru multă vreme ce trecea drept dovadă.',
    },
    {
      question: 'Cauze dinăuntru sau sociale?',
      positions: [
        {
          school: 'Externalism (Hessen 1931, Zilsel 1942, Merton 1938)',
          argument:
            'Problemele veneau din minerit, din balistică și din navigație; metoda s-a născut din legătura dintre meșteșugari și universitari, iar anumite confesiuni au înlesnit practica științifică.',
        },
        {
          school: 'Internalism (Koyré)',
          argument:
            'Ideile se schimbă după propria lor logică. Nici tehnica, nici religia nu explică de ce a fost părăsit cercul desăvârșit sau de ce a fost matematizată mișcarea.',
        },
      ],
      state:
        'Nimeni nu mai susține astăzi vreo poziție curată. Sunt studiate laolaltă practicile materiale, protecția, circulația tipărită și gândirea teoretică, fără a le reduce una la alta.',
    },
    {
      question: 'Cazul Galilei: știință împotriva religiei?',
      positions: [
        {
          school: 'Teza conflictului (Draper 1874, White 1896)',
          argument:
            'Osândirea din 1633 arată opoziția de structură dintre cercetarea liberă și o autoritate religioasă care apără dogma împotriva dovezii.',
        },
        {
          school: 'Citire contextuală (Blackwell, Fantoli, Biagioli)',
          argument:
            'Au atârnat jurisdicția asupra tălmăcirii Scripturii, protecția ruptă cu Urban al VIII-lea, alegerea toscanei de rând, Războiul de Treizeci de Ani și interesele aristotelicilor universitari.',
        },
      ],
      state:
        'Teza conflictului este părăsită ca ramă generală. Citirea contextuală predomină, fără ca asta să micșoreze gravitatea osândirii sau să prefacă episodul într-o simplă neînțelegere personală.',
    },
  ],
  sources: [
    { author: 'Nicolaus Copernic', title: 'De revolutionibus orbium coelestium', year: '1543', kind: 'primaria', note: 'Cu prefața anonimă a lui Osiander, care înfățișează heliocentrismul drept mijloc de calcul.' },
    { author: 'Andreas Vesalius', title: 'De humani corporis fabrica', year: '1543', kind: 'primaria', note: 'Anatomie întemeiată pe disecție proprie, împotriva autorității lui Galen.' },
    { author: 'William Gilbert', title: 'De magnete', year: '1600', kind: 'primaria', note: 'Pământul ca magnet. Lucrare experimentală timpurie, mult citată de Galilei și de Kepler.' },
    { author: 'Johannes Kepler', title: 'Astronomia nova', year: '1609', kind: 'primaria', note: 'Orbite eliptice și legea ariilor, deduse din datele lui Tycho Brahe despre Marte.' },
    { author: 'Galileo Galilei', title: 'Sidereus nuncius', year: '1610', kind: 'primaria', note: 'Munți pe Lună și sateliți ai lui Jupiter, dedicați familiei Medici ca operațiune de căutare a protecției.' },
    { author: 'Francis Bacon', title: 'Novum Organum', year: '1620', kind: 'primaria', note: 'Metodă inductivă, critica idolilor și program de cercetare obștească.' },
    { author: 'William Harvey', title: 'De motu cordis', year: '1628', kind: 'primaria', note: 'Circulația sângelui dovedită prin măsurarea volumului scos din inimă.' },
    { author: 'Galileo Galilei', title: 'Dialog despre cele două mari sisteme ale lumii', year: '1632', kind: 'primaria', note: 'În toscană și cu îngăduință. Argumentul lui Urban al VIII-lea îl rostește personajul Simplicio.' },
    { author: 'Sfântul Oficiu', title: 'Sentința și lepădarea lui Galilei', year: '1633', kind: 'primaria', note: 'Document central pentru reconstituirea acuzelor reale și a rolului preceptului din 1616.' },
    { author: 'René Descartes', title: 'Discurs asupra metodei', year: '1637', kind: 'primaria', note: 'Îndoiala metodică și mecanicismul. Cuprinde *Geometria*, care unește algebra cu geometria.' },
    { author: 'Robert Boyle', title: 'New Experiments Physico-Mechanical', year: '1660', kind: 'primaria', note: 'Experimente cu pompa de vid și procedura mărturiei publice a faptului.' },
    { author: 'Robert Hooke', title: 'Micrographia', year: '1665', kind: 'primaria', note: 'Microscopul ca producător de fenomene noi. Inventează termenul celulă.' },
    { author: 'Isaac Newton', title: 'Philosophiae naturalis principia mathematica', year: '1687', kind: 'primaria', note: 'Gravitația universală: o singură lege pentru căderea corpurilor și pentru orbitele planetelor.' },
    { author: 'Isaac Newton', title: 'Optica', year: '1704', kind: 'primaria', note: 'În engleză și rânduită ca șir de experimente. Model pentru știința experimentală a secolului al XVIII-lea.' },
    { author: 'Boris Hessen', title: 'Rădăcinile socio-economice ale mecanicii lui Newton', year: '1931', kind: 'estudio', note: 'Manifest externalist prezentat la Londra, în 1931.' },
    { author: 'Robert K. Merton', title: 'Știință, tehnologie și societate în Anglia secolului al XVII-lea', year: '1938', kind: 'estudio', note: 'Legătura dintre puritanism și practica științifică.' },
    { author: 'Alexandre Koyré', title: 'Studii galileiene', year: '1939', kind: 'estudio', note: 'Revoluția ca schimbare de gândire și ca matematizare a ceea ce este real.' },
    { author: 'Herbert Butterfield', title: 'Obârșiile științei moderne', year: '1949', kind: 'estudio', note: 'Răspândește expresia „revoluție științifică” și prețuirea ei cea mai mare.' },
    { author: 'Thomas S. Kuhn', title: 'Structura revoluțiilor științifice', year: '1962', kind: 'estudio', note: 'Paradigmă, știință obișnuită și incomensurabilitate. Schimbă vocabularul întregii discipline.' },
    { author: 'Elizabeth Eisenstein', title: 'Tiparul ca agent al schimbării', year: '1979', kind: 'estudio', note: 'Fixitate tipografică, reproducerea tabelelor și a planșelor, adunare și îndreptare publică.' },
    { author: 'Steven Shapin și Simon Schaffer', title: 'Leviatanul și pompa de vid', year: '1985', kind: 'estudio', note: 'Boyle împotriva lui Hobbes: cum se face un fapt experimental și cine poate mărturisi pentru el.' },
    { author: 'Steven Shapin', title: 'Revoluția științifică', year: '1996', kind: 'estudio', note: 'Neagă existența unei metode și a unui moment unice și reconstituie practici felurite.' },
    { author: 'George Saliba', title: 'Islamic Science and the Making of the European Renaissance', year: '2007', kind: 'estudio', note: 'Documentează echivalența dintre modelele de la Maragheh și cele ale lui Copernic.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Galilei despre cum trebuie citite Biblia și natura',
      text: [
        'Fiind Sfânta Scriptură, în multe locuri, adevărată în feluri ce se pot tălmăci altfel decât sună cuvintele întocmai, iar natura fiind neînduplecată și neschimbată și fără nicio grijă dacă rațiunile ei ascunse pot fi sau nu înțelese de oameni,',
        'mi se pare că nicio judecată firească pe care ne-o pune experiența în față nu trebuie pusă la îndoială, și cu atât mai puțin osândită, de locuri ale Scripturii care pot avea o mie de înțelesuri diferite.',
      ].join('\n\n'),
      source: 'Galileo Galilei, Scrisoare către Cristina de Lorena, 1615.',
      note: 'Versiune proprie după italiană.',
      question: 'Galilei nu tăgăduiește Scriptura: discută cine are autoritatea să o tălmăcească în chestiuni firești. De ce era acea mișcare mai riscantă pentru el decât apărarea heliocentrismului ca simplă ipoteză?',
    },
  ],
  images: [
    {
      alt: 'Portretul lui Galileo Galilei bătrân, din trei sferturi, cu barbă albă și guler închis la culoare',
      caption: 'Galilei portretizat de Justus Sustermans în 1636, deja osândit și aflat sub arest la domiciliu.',
    },
    {
      alt: 'Diagramă tipărită cu cercuri concentrice, cu Soarele în centru și planetele numite în latină pe orbite succesive',
      caption: 'Schema heliocentrică din De revolutionibus (1543). Copernic păstrează orbitele circulare: sistemul încă nu era mai exact decât cel al lui Ptolemeu.',
    },
    {
      alt: 'Desene în tuș ale Lunii, în diferite faze, cu marginea luminată neregulată și cratere umbrite',
      caption: 'Lunile lui Galilei în Sidereus Nuncius (1610). O suprafață cu munți și văi spulbera ideea unor ceruri desăvârșite și nesupuse stricăciunii.',
    },
    {
      alt: 'Copertă tipărită în latină, cu titlul Philosophiae Naturalis Principia Mathematica, numele autorului și sigiliul Royal Society',
      caption: 'Coperta lucrării Principia a lui Newton (1687). O singură lege dă seamă deopotrivă de căderea corpurilor și de mișcarea planetelor.',
    },
  ],
  questions: [
    {
      question: 'Care era obiecția cea mai serioasă, bazată pe observație, împotriva heliocentrismului, în secolul al XVI-lea?',
      options: [
        'Că mareele nu puteau fi explicate fără un Pământ neclintit',
        'Că nu se vedea paralaxa stelară: stelele nu păreau să se mute de-a lungul anului',
        'Că modelul lui Copernic nu îngăduia prevederea eclipselor',
        'Că se împotrivea observațiilor lui Tycho Brahe despre comete',
      ],
      explanation: 'Răspunsul copernician — stelele sunt de neînchipuit de departe — era adevărat, dar pe atunci de nedeosebit de o scuză. Paralaxa nu a fost măsurată până în 1838.',
    },
    {
      question: 'Ce a făcut Andreas Osiander cu cartea lui Copernic?',
      options: [
        'I-a amânat publicarea până după Conciliul de la Trento',
        'A adăugat, fără voie, o prefață anonimă care înfățișa heliocentrismul drept un simplu mijloc de calcul',
        'A tradus opera în germană, pentru marele public',
        'A scos capitolele dedicate mișcării Pământului',
      ],
      explanation: 'Prefața a domolit reacția vreme de decenii. Opera nu a intrat pe Index până în 1616.',
    },
    {
      question: 'Ce au dovedit observațiile lui Tycho Brahe asupra novei din 1572 și a cometei din 1577?',
      options: [
        'Că Pământul se învârte în jurul Soarelui',
        'Că erau fenomene schimbătoare dincolo de Lună, împotriva nestricăciunii cerurilor',
        'Că orbitele planetare sunt eliptice',
        'Că există sateliți în jurul lui Jupiter',
      ],
      explanation: 'Au căzut sferele cristaline nesupuse stricăciunii. Tycho, totuși, a păstrat un model mixt, cu Pământul neclintit în centru.',
    },
    {
      question: 'Ce l-a dus pe Kepler să părăsească orbita circulară?',
      options: [
        'O nepotrivire de opt minute de arc în datele despre Marte, pe care a refuzat să o pună pe seama unei greșeli de observație',
        'Citirea lucrării *Sidereus nuncius* a lui Galilei',
        'Măsurarea paralaxei stelare',
        'Calculul perioadei orbitale a sateliților lui Jupiter',
      ],
      explanation: 'Precizia lui Tycho, de vreun minut de arc, făcea acea nepotrivire de neprimit. Luarea în serios a datelor a produs elipsa.',
    },
    {
      question: 'De ce era neapărat trebuincioasă contribuția fizică a lui Galilei pentru heliocentrism?',
      options: [
        'Fiindcă îngăduia socotirea orbitelor cu mai multă precizie decât Kepler',
        'Fiindcă principiul inerției și relativitatea mișcării uniforme răspundeau obiecției că un corp aruncat ar rămâne în urmă',
        'Fiindcă dovedea matematic gravitația universală',
        'Fiindcă dovedea existența vidului',
      ],
      explanation: 'Fără o fizică nouă, heliocentrismul se lovea de trăirea de zi cu zi. Astronomia singură nu ajungea.',
    },
    {
      question: 'Ce respingeau fazele lui Venus, observate de Galilei?',
      options: [
        'Sistemul lui Tycho Brahe',
        'Modelul ptolemeic curat, dar nu modelul mixt al lui Tycho',
        'Legile lui Kepler',
        'Teoria medievală a impetusului',
      ],
      explanation: 'Precizare importantă: dovada de care se dispunea în 1613 nu îngăduia alegerea între Copernic și Tycho, doar înlăturarea lui Ptolemeu.',
    },
    {
      question: 'Ce factori, pe lângă cuprinsul astronomic, explică osândirea lui Galilei din 1633?',
      options: [
        'Doar literalitatea biblică apărată de Sfântul Oficiu',
        'Genul dialogat și folosirea toscanei, protecția ruptă cu Urban al VIII-lea, presiunea războiului și interesele aristotelicilor universitari',
        'Refuzul lui de a publica la Royal Society',
        'Interzicerea generală a folosirii lunetelor în Statele Papale',
      ],
      explanation: 'A pune argumentul papei în gura lui Simplicio a fost o greșeală politică. Teza conflictului dintre știință și credință este părăsită ca ramă generală.',
    },
    {
      question: 'Ce propunea metoda lui Bacon din *Novum Organum*?',
      options: [
        'Deducerea fizicii pornind de la principii limpezi prin ele însele',
        'Strângerea de istorii naturale și urcarea prin inducție spre axiome generale, prin muncă obștească',
        'Reducerea întregii naturi la întindere și mișcare',
        'Supunerea oricărei ipoteze unui experiment hotărâtor matematic',
      ],
      explanation: 'Bacon nu a făcut descoperiri, dar Casa lui Solomon a lui a inspirat Royal Society. A definit mai degrabă o instituție decât o tehnică.',
    },
    {
      question: 'Ce este un „martor virtual”, potrivit lui Shapin și Schaffer?',
      options: [
        'Un membru al Royal Society care asistă la experiment fără să intervină',
        'Cititorul pe care proza experimentală, amănunțită cu grijă, îl preface în martor al unui fapt la care nu a fost de față',
        'O unealtă care înregistrează automat rezultatele',
        'Un aristotelic invitat să respingă experimentul',
      ],
      explanation: 'Autoritatea faptului experimental se sprijină pe mărturia obștească. Hobbes a obiectat că acel consens era șubred și prefera demonstrația.',
    },
    {
      question: 'Ce rol au avut *Philosophical Transactions*, din 1665 încoace?',
      options: [
        'Să înlocuiască cărțile drept unicul format primit',
        'Să dea data întâietății descoperirilor, să supună textele judecății altor membri și să creeze o arhivă care se aduna',
        'Să finanțeze experimentele Royal Society',
        'Să traducă în engleză operele latine de pe continent',
      ],
      explanation: 'Împreună cu tiparul, au făcut cunoașterea reproductibilă, de comparat și de îndreptat de către alții.',
    },
    {
      question: 'Ce au unificat *Principia* din 1687?',
      options: [
        'Optica și acustica sub o teorie ondulatorie',
        'Căderea corpurilor pe Pământ și orbitele planetelor, sub aceeași lege a atracției invers proporționale cu pătratul distanței',
        'Chimia și alchimia, într-o singură disciplină',
        'Astronomia lui Ptolemeu și cea a lui Copernic, într-un model mixt',
      ],
      explanation: 'Din acea lege se deduc cele trei legi ale lui Kepler, mareele și traiectoriile cometelor. O singură fizică pentru cer și pentru pământ.',
    },
    {
      question: 'Ce a vrut Newton să spună prin *hypotheses non fingo*?',
      options: [
        'Că respingea folosirea matematicii în filozofia naturală',
        'Că nu propunea o cauză pentru gravitație și se mulțumea să deducă și să verifice efectele ei',
        'Că nega existența atracției la distanță',
        'Că rezultatele lui nu îngăduiau nicio discuție',
      ],
      explanation: 'Cartezienilor, acțiunea la distanță li s-a părut o calitate ascunsă. Newton a mutat ce se socotește o explicație mulțumitoare.',
    },
    {
      question: 'Ce a găsit Keynes studiind manuscrisele nepublicate ale lui Newton?',
      options: [
        'O dovadă timpurie a relativității',
        'Mai multe pagini dedicate alchimiei și cronologiei biblice decât fizicii',
        'Dovada că nu el a scris *Principia*',
        'Corespondență nepublicată cu Descartes',
      ],
      explanation: 'De aici vorba lui: nu cel dintâi al epocii rațiunii, ci ultimul dintre magi. Modernitatea științei a fost aleasă dintr-un ansamblu de interese mult mai larg.',
    },
    {
      question: 'Ce susține teza lui Zilsel despre obârșia metodei experimentale?',
      options: [
        'Că vine în întregime din universitățile scolastice',
        'Că se naște din legătura dintre știința de mână a meșteșugarilor, a inginerilor și a marinarilor și pregătirea matematică universitară',
        'Că este o urmare directă a Reformei protestante',
        'Că a fost adusă din lumea islamică odată cu astronomia',
      ],
      explanation: 'Este o poziție externalistă, ca și cea a lui Hessen. Koyré a răspuns dinspre internalism. Azi nu se mai susține niciuna în stare curată.',
    },
    {
      question: 'Ce documentează George Saliba despre astronomia islamică?',
      options: [
        'Că Copernic a tradus direct textele de la Maragheh în latină',
        'Că modelele școlii de la Maragheh, precum perechea lui Tusi, sunt matematic la fel cu cele folosite de Copernic',
        'Că heliocentrismul a fost formulat la Bagdad, în secolul IX',
        'Că astronomia islamică a respins sistemul ptolemeic în întregime',
      ],
      explanation: 'Potrivirea tehnică este stabilită și sugerează transmitere, nu născocire deosebită. Drumul exact până la Cracovia continuă să se discute.',
    },
    {
      question: 'Care este starea de azi a dezbaterii despre eticheta „revoluție științifică”?',
      options: [
        'A fost părăsită de tot, în favoarea „științei medievale târzii”',
        'Se păstrează ca o periodizare folositoare, se respinge povestea eroică și se primește că pe la 1700 se schimbase ce trecea drept dovadă și cine putea să o producă',
        'A fost lărgită ca să cuprindă de la 1200 la 1900',
        'Se rezervă exclusiv pentru opera lui Newton',
      ],
      explanation: 'Echilibru între Koyré și Shapin: eticheta slujește la rânduirea povestirii, nu la explicarea de una singură a ceea ce s-a întâmplat.',
    },
  ],
}
