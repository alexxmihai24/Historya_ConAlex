import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/ilustracion.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 12 date, 14 concepte, 3 dezbateri, 25 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const ilustracionRo: TopicTranslation = {
  title: 'Iluminismul',
  description: 'Mai degrabă o practică de critică publică decât un sistem de idei: cafenele, enciclopedii, toleranță și propriile ei puncte oarbe.',
  years: '1689–1789',
  summary:
    'Când Kant a răspuns, în 1784, la întrebarea ce este Iluminismul, nu a descris o doctrină, ci o operațiune: ieșirea din minoratul de care ești singur vinovat, curajul de a-ți folosi propria minte și de a o face în public. Această definiție ajută, fiindcă secolul al XVIII-lea nu împărtășește un corp unic de teze. Voltaire admira monarhii puternici, iar Rousseau se temea de ei; unii erau deiști, alții atei și mulți creștini convinși; economia politică scoțiană și fiziocrația franceză se contrazic. Ce împărtășesc, în schimb, este o practică: supunerea autorităților moștenite unei cercetări publice, cu încrederea că discuția tipărită dă hotărâri mai bune decât obiceiul. De aici a ieșit vocabularul politic cu care Occidentul discută și astăzi, inclusiv argumentele cu care se critică azi limitele Iluminismului însuși.',
  keyDates: [
    { date: '1689', event: 'Locke publică *Scrisoarea despre toleranță* și *Al doilea tratat despre cârmuirea civilă*.' },
    { date: '1721', event: '*Scrisori persane* ale lui Montesquieu: privirea străinului ca tehnică de critică.' },
    { date: '1726–1740', event: 'Feijoo publică *Teatro crítico universal* și deschide Iluminismul spaniol.' },
    { date: '1734', event: 'Voltaire răspândește, în *Scrisori filozofice*, modelul englez de toleranță și libertate.' },
    { date: '1748', event: '*Despre spiritul legilor*: separarea puterilor și relativism instituțional.' },
    { date: '1751–1772', event: 'Este publicată *Encyclopédie* a lui Diderot și D\'Alembert, în 28 de volume.' },
    { date: '1755', event: 'Cutremurul de la Lisabona pornește dezbaterea despre providență și rău.' },
    { date: '1762', event: '*Contractul social* și *Emil*; execuția lui Jean Calas și campania lui Voltaire.' },
    { date: '1764', event: 'Beccaria publică *Despre infracțiuni și pedepse*, împotriva torturii și a pedepsei cu moartea.' },
    { date: '1776', event: '*Avuția națiunilor* și Declarația de Independență a Statelor Unite.' },
    { date: '1784', event: 'Kant răspunde: *sapere aude*, îndrăznește să știi.' },
    { date: '1791–1792', event: 'Olympe de Gouges și Mary Wollstonecraft cer drepturile refuzate femeilor.' },
  ],
  sections: [
    {
      title: 'O practică, nu un sistem',
      body: [
        'Răspunsul lui Kant din *Berlinische Monatsschrift* definește Iluminismul ca ieșirea dintr-un minorat de care ești singur vinovat: nu lipsește mintea, lipsește hotărârea de a o folosi fără călăuza altuia. Deviza este *sapere aude*. Și adaugă o precizare hotărâtoare: ce trebuie ca să te luminezi este libertatea de a-ți folosi în public mintea în toate chestiunile, deși în folosirea privată, adică în exercitarea unei funcții, se cuvine ascultare.',
        'Această deosebire explică de ce Iluminismul a putut conviețui cu monarhiile absolute. Funcționarul ascultă porunca, iar cetățeanul care scrie o critică. Kant numește vremea lui epocă a luminării, nu epocă luminată: un proces în mers, nu o stare atinsă.',
        'A-l defini ca practică ferește de greșeala de a căuta un canon coerent. Cei luminați se deosebesc aproape în tot: Voltaire disprețuiește democrația, iar Rousseau o întemeiază; Hume este sceptic, iar Condorcet crede în progresul fără sfârșit; Smith apără piața, iar fiziocrații întâietatea agrară. Ce împărtășesc este gestul de a supune unei cercetări publice autoritatea moștenită, fie ea a textului sfânt, a privilegiului sau a obiceiului.',
        'Acest gest are condiții materiale. Fără tipar ieftin, fără poștă regulată, fără cafenele, fără academii și fără un public în stare să plătească pentru cărți, critica nu circulă. De aceea istoriografia recentă studiază mai puțin ideile în sine și mai mult mijloacele prin care au călătorit.',
      ].join('\n\n'),
      callout:
        'Kant numește vremea lui „epocă a luminării”, nu „epocă luminată”. Deosebirea este teza întreagă: un proces deschis, nu un rezultat.',
    },
    {
      title: 'Spațiul public și locurile lui',
      body: [
        'Jürgen Habermas a propus în 1962 conceptul care rânduiește astăzi cercetarea: între stat și viața privată s-a format, în secolul al XVIII-lea, un spațiu public burghez, un loc în care particularii cugetă asupra treburilor obștești și unde, măcar ca principiu, contează argumentul cel mai bun, nu rangul celui care îl rostește.',
        'Locurile lui sunt anume. Cafenelele londoneze, unde pentru un penny intrai și citeai gazetele; saloanele pariziene, conduse de femei care alegeau invitații și îndrumau conversația și al căror rol Dena Goodman l-a așezat în centrul sociabilității luminate, împotriva citirilor care le tratează drept decor; lojile masonice, cu egalitatea lor rituală între nobili și burghezi; societățile economice de prieteni ai țării din Spania, dedicate agriculturii, învățământului tehnic și statisticii; academiile provinciale franceze, cu concursurile lor de memorii.',
        'S-a schimbat și felul de a citi. Rolf Engelsing a vorbit despre o revoluție a lecturii: de la felul intensiv, recitirea câtorva cărți venerate, la cel extensiv, consumarea multor titluri diferite și lepădarea lor. Au crescut gazetele, foile și cabinetele de lectură prin abonament.',
        'Spațiul public avea hotare și se cuvine să nu fie idealizat. Îi excludea pe analfabeți, care erau majoritatea, și pe femei din reprezentarea politică; chiar Habermas a recunoscut că modelul lui descria mai bine o minoritate cultă decât un spațiu deschis. Cu toate acestea, faptul hotărâtor este instituțional: pentru prima dată exista o instanță de critică ce nu atârna nici de curte, nici de Biserică și căreia guvernele au început să îi răspundă.',
      ].join('\n\n'),
    },
    {
      title: 'Enciclopedia și afacerea luminilor',
      body: [
        '*Encyclopédie ou Dictionnaire raisonné des sciences, des arts et des métiers*, condusă de Denis Diderot și Jean le Rond D\'Alembert între 1751 și 1772, a adunat 28 de volume cu peste șaptezeci de mii de articole și unsprezece tomuri de planșe. Noutatea ei nu a fost strângerea de informații, ci rânduirea lor: discursul preliminar clasifică cunoașterea după facultățile omenești — memorie, rațiune, imaginație — și nu după ierarhia teologică, iar sistemul trimiterilor îngăduia să spui într-un articol nesupravegheat ce nu puteai spune într-unul păzit.',
        'Demnificarea meseriilor manuale este la fel de grăitoare. Planșele descriu cu de-amănuntul ateliere, unelte și procedee, iar mai multe articole susțin că știința meșteșugarilor merită același respect ca cea a învățaților. Este o operațiune culturală cu urmări sociale.',
        'Robert Darnton a studiat în 1979 întreprinderea pornind de la contabilitate și de la arhivele editorilor. *Encyclopédie* a fost o afacere mare, străbătută de privilegii revocate, ediții în format mic și mai ieftine, contrabandă dinspre Neuchâtel, alianțe cu cenzori îngăduitori și abonați între care erau și clerici, și funcționari regali. Cenzura Vechiului Regim nu era un zid: era un sistem cu găuri, cu care se negocia.',
        'Darnton a mai arătat și cealaltă față. Alături de numele mari era o lume de dedesubt de scriitori nereușiți, care trăiau din pamflete, din libeluri împotriva curții și din pornografie politică, cele *livres philosophiques* pe care librarii clandestini le puneau în aceeași categorie. Acel material a discreditat monarhia în ochii publicului mult mai mult decât tratatele de teorie politică.',
      ].join('\n\n'),
      callout:
        'În catalogele clandestine, „cărți filozofice” numea deodată pe Rousseau, libelurile împotriva curții și pornografia. Categoria este a secolului al XVIII-lea însuși, nu o născocire a istoricului.',
    },
    {
      title: 'Politică, drept și economie',
      body: [
        'Locke fixase încă din 1689 două piese pe care secolul le va dezvolta: puterea politică se naște din încuviințare și există ca să ocrotească viața, libertatea și averea, așa încât abuzul ei îngăduie împotrivirea; iar constrângerea nu poate produce credință sinceră, de aceea magistratul trebuie să se abțină în chestiuni religioase. Toleranța lui îi excludea încă pe atei și pe catolici, o limită pe care continentul avea să o lărgească.',
        'Montesquieu a adus în 1748 două idei durabile. Prima este comparativă: legile trebuie potrivite cu clima, întinderea, religia și obiceiurile fiecărui popor, ceea ce relativizează orice pretenție de model unic. A doua este instituțională: ca puterea să nu fie folosită abuziv, trebuie rânduită astfel încât puterea să oprească puterea. Citirea lui a constituției engleze era în parte închipuită, și totuși a întemeiat constituționalismul modern.',
        'Rousseau a rupt cu optimismul comercial al contemporanilor lui. În *Discursul despre inegalitate*, din 1755, a susținut că proprietatea și societatea civilă au stricat o ființă omenească inițial fără violență, iar în *Contractul social*, din 1762, a propus o ieșire: numai legea pe care ți-o dai singur, ca membru al unui corp politic, este legitimă, iar suveranitatea stă într-o voință generală neînstrăinabilă și nedelegabilă. De aici vine deopotrivă democrația modernă și bănuiala, formulată deja în secolul XX, că voința generală poate fi folosită ca să reducă la tăcere minoritatea.',
        'Reforma penală a fost terenul pe care Iluminismul a câștigat cel mai repede. Cesare Beccaria a susținut în 1764 că pedeapsa trebuie să fie proporțională, publică, grabnică și necesară, că tortura scoate mărturisiri false și pedepsește înainte de judecată și că puterea de descurajare atârnă de siguranța pedepsei, nu de cruzimea ei. Mai multe state au desființat tortura în deceniile următoare.',
        'În economie au conviețuit două programe. Fiziocrații francezi așezau în agricultură singurul izvor de produs net și cereau libertatea circulației grânelor; Adam Smith a publicat în 1776 o analiză a diviziunii muncii, a pieței și a prețurilor, care a întemeiat economia politică și care cuprinde, alături de vestita metaforă a mâinii nevăzute, avertismente aspre împotriva înțelegerilor dintre negustori și a efectelor care înăspresc mintea într-o muncă întruna aceeași.',
      ].join('\n\n'),
    },
    {
      title: 'Limitele: sclavia, femeile și coloniile',
      body: [
        'Aceeași cultură care a proclamat egalitatea firească a susținut un sistem sclavagist atlantic în plină creștere. *Codul Negru* francez rămânea în vigoare, iar câștigurile din Saint-Domingue erau esențiale pentru economia porturilor. Louis Sala-Molins i-a reproșat Iluminismului francez distanța dintre retorica lui și tăcerea lui practică; împotriva lui se amintește că *Istoria celor două Indii*, a lui Raynal și Diderot, un mare succes de librărie european, a denunțat cu asprime cucerirea și sclavia și a ajuns să vestească un răzbunător negru, text care a circulat printre revoluționarii haitieni.',
        'Chestiunea rasială are o urmare mai incomodă. Hume a adăugat în 1753 o notă care declara negrii firesc inferiori; Kant a scris texte despre rasele omenești care susțin ierarhii; Buffon și Linné au fixat clasificări pe care știința secolului XIX le-a înăsprit. Rasismul modern nu este o rămășiță premodernă: se formulează cu vocabularul istoriei naturale luminate.',
        'Cu femeile se întâmplă ceva asemănător. Poullain de la Barre argumentase deja în 1673 că mintea nu are sex; saloanele le dădeau unor femei un rol intelectual real; și totuși *Emil* al lui Rousseau prescrie pentru Sofia o educație subordonată, iar adunările revoluționare aveau să le refuze cetățencelor drepturile politice. Olympe de Gouges a publicat în 1791 o *Declarație a drepturilor femeii și ale cetățencii*, calchiată după cea din 1789, și a fost ghilotinată în 1793; Mary Wollstonecraft a răspuns în 1792 cu o *Revendicare a drepturilor femeii*, care cerea, mai presus de toate, educație egală.',
        'Aceste limite hrănesc critica cea mai influentă a secolului XX. Max Horkheimer și Theodor Adorno au scris în 1944 că rațiunea luminată, prefăcându-se în stăpânire instrumentală a naturii, se întoarce împotriva ființelor omenești și pregătește barbaria modernă. Răspunsul obișnuit este că uneltele cu care se denunță astăzi sclavia, patriarhatul și colonialismul sunt, în bună măsură, luminate, și că a părăsi critica publică nu îl ocrotește pe nimeni.',
      ].join('\n\n'),
    },
    {
      title: 'Despotismul luminat și bilanțul istoriografic',
      body: [
        'Mai mulți monarhi au primit vocabularul reformator fără să cedeze din suveranitate: Frederic al II-lea al Prusiei, Ecaterina a II-a a Rusiei, Iosif al II-lea în teritoriile habsburgice și Carol al III-lea în Spania. Politicile lor au un aer de familie: coduri legale, toleranță mărginită, deposedare parțială a averilor bisericești, izgonirea iezuiților, lucrări publice, reformă agrară discutată, sprijinirea învățământului tehnic și regalism, adică controlul statului asupra Bisericii naționale.',
        'Vorba „totul pentru popor, dar fără popor” este o sinteză de mai târziu, nu un citat, și descrie bine limita: niciuna dintre aceste reforme nu îngăduia participare politică. Iosif al II-lea a fost, pe deasupra, cazul extrem de reformă impusă de sus și fără sprijin, iar o bună parte din decretele lui a trebuit retrasă înainte de moartea lui, din 1790.',
        'Istoriografia a mutat treptat privirea. Ernst Cassirer a descris în 1932 o filozofie unitară; Franco Venturi a studiat rețelele reformatorilor europeni; Daniel Roche și Robert Darnton au trecut la practici, la meseriile cărții și la publicuri; Roy Porter și Mikuláš Teich au propus în 1981 să se vorbească despre Iluminisme la plural, cu contexte naționale foarte diferite, iar David Sorkin a documentat un Iluminism religios, catolic, protestant și evreiesc, care a fost majoritar în multe teritorii.',
        'Jonathan Israel a apărat din 2001 teza opusă acestei împrăștieri: ar fi existat un nucleu radical, de obârșie spinozistă — egalitate, democrație, materialism, respingerea revelației —, care ar fi fost adevăratul motor al schimbării, împotriva unui Iluminism moderat care căuta să împace rațiunea cu religia. I se obiectează că reduce procesul la circulația textelor filozofice și că trece cu vederea practicile sociale.',
        'Rămâne, în cele din urmă, legătura cu anul 1789. Daniel Mornet a reconstituit în 1933 obârșiile intelectuale ale Revoluției; Roger Chartier a răsturnat formula în 1990, susținând că Revoluția a fost cea care a construit Iluminismul ca obârșie a ei, alegând și consacrând autori ca să se legitimeze. Răspunsul chibzuit este că nici cărțile nu fac revoluții de una singure, dar dau limbajul în care o criză fiscală și politică poate fi pusă ca problemă de suveranitate și de drepturi.',
      ].join('\n\n'),
      callout:
        'Chartier răstoarnă întrebarea: poate nu Iluminismul l-a făcut pe Revoluție, ci Revoluția și-a făurit un Iluminism drept strămoș care să o legitimeze.',
    },
  ],
  concepts: [
    { term: 'Sapere aude', definition: 'Îndrăznește să știi. Deviza cu care Kant rezumă în 1784 ieșirea din minoratul de care ești singur vinovat.' },
    { term: 'Folosirea publică a rațiunii', definition: 'Deosebire kantiană: funcționarul ascultă în funcția lui, dar ca autor în fața unui public poate critica fără limită.' },
    { term: 'Spațiu public', definition: 'Concept al lui Habermas: loc între stat și viața privată unde particularii cugetă asupra treburilor obștești și ar trebui să conteze argumentul cel mai bun.' },
    { term: 'Republica literelor', definition: 'Rețea europeană de corespondență, recenzii și academii care lucra peste frontiere și confesiuni.' },
    { term: 'Revoluția lecturii', definition: 'Teza lui Engelsing: trecerea de la lectura intensivă a puținelor cărți venerate la cea extensivă a multor titluri.' },
    { term: 'Trimitere enciclopedică', definition: 'Procedeu al *Encyclopédie*: a spune într-un articol păzit ce era dezvoltat într-unul aparent nesupravegheat.' },
    { term: 'Livres philosophiques', definition: 'Categorie a librarilor clandestini care aduna filozofia interzisă, libelurile împotriva curții și pornografia politică.' },
    { term: 'Toleranță', definition: 'Renunțarea puterii civile de a impune credințe. La Locke îi excludea încă pe atei și pe catolici; continentul a lărgit-o.' },
    { term: 'Separarea puterilor', definition: 'Principiul lui Montesquieu: a rândui instituțiile astfel încât puterea să oprească puterea, ca să fie evitat abuzul.' },
    { term: 'Voința generală', definition: 'La Rousseau, suveranitatea neînstrăinabilă a corpului politic. Temelia democrației moderne și miezul criticii despre minoritate.' },
    { term: 'Fiziocrație', definition: 'Școală franceză care așază în agricultură singurul izvor de produs net și cere libera circulație a grânelor.' },
    { term: 'Regalism', definition: 'Controlul statului asupra Bisericii naționale: numiri, venituri și jurisdicție. Piesă centrală a reformismului bourbon.' },
    { term: 'Despotism luminat', definition: 'Reforme administrative, juridice și economice pornite de sus, fără a ceda din suveranitate și fără a îngădui participare politică.' },
    { term: 'Iluminism radical', definition: 'Categorie a lui Jonathan Israel: curent de rădăcină spinozistă, partizan al egalității, al democrației și al respingerii revelației.' },
  ],
  debates: [
    {
      question: 'Un singur Iluminism sau mai multe?',
      positions: [
        {
          school: 'Unitate filozofică (Cassirer, 1932)',
          argument:
            'Sub varietatea autorilor stă un singur fel de a gândi: analiza, critica autorității, încrederea în rațiune și în reformă.',
        },
        {
          school: 'Iluminisme la plural (Porter și Teich, 1981; Sorkin, 2008)',
          argument:
            'Contextele naționale sunt hotărâtoare, iar Iluminismul religios a fost majoritar ca număr: catolic, protestant și evreiesc, potrivit cu credința.',
        },
        {
          school: 'Nucleu radical (Jonathan Israel, 2001)',
          argument:
            'Ce a produs schimbarea a fost un curent minoritar, de obârșie spinozistă — egalitate, democrație, materialism —, împotriva unui Iluminism moderat, împăciuitor.',
        },
      ],
      state:
        'Domină citirea plurală și legată de context. Teza lui Israel este prețuită fiindcă redă gândirea radicală și i se obiectează că reduce procesul la circulația textelor filozofice.',
    },
    {
      question: 'A pricinuit Iluminismul Revoluția franceză?',
      positions: [
        {
          school: 'Obârșii intelectuale (Mornet, 1933)',
          argument:
            'Decenii de critică răspândită prin cărți, academii, loji și presă au ros legitimitatea Vechiului Regim și au pregătit vocabularul din 1789.',
        },
        {
          school: 'Răsturnare (Chartier, 1990)',
          argument:
            'Revoluția a fost cea care a clădit Iluminismul ca obârșie a ei, alegând și consacrând autori ca să se legitimeze retrospectiv.',
        },
        {
          school: 'Circulație clandestină (Darnton)',
          argument:
            'Ce a discreditat monarhia în ochii publicului nu au fost tratatele, ci libelurile, cronicile scandaloase și pornografia politică din Grub Street.',
        },
      ],
      state:
        'Legătura de cauzalitate directă este respinsă. Formularea primită este că textele nu fac revoluții, dar dau limbajul în care o criză fiscală poate fi pusă ca problemă de suveranitate și de drepturi.',
    },
    {
      question: 'Eliberare sau stăpânire?',
      positions: [
        {
          school: 'Dialectica Luminilor (Horkheimer și Adorno, 1944)',
          argument:
            'Rațiunea care stăpânește natura sfârșește prin a stăpâni și ființele omenești: proiectul luminat poartă în el sămânța barbariei tehnice a secolului XX.',
        },
        {
          school: 'Critica postcolonială și feministă',
          argument:
            'Egalitatea proclamată a conviețuit cu sclavia atlantică, cu clasificări rasiale de obârșie naturalistă și cu excluderea politică a femeilor.',
        },
        {
          school: 'Apărare critică (Israel, Pagden, Outram)',
          argument:
            'Uneltele cu care se denunță astăzi acele limite — drepturi universale, critică publică, egalitate firească — sunt luminate; leacul nu este să fie părăsite, ci să fie aplicate.',
        },
      ],
      state:
        'Istoriografia documentează deopotrivă puterea eliberatoare și punctele oarbe și se ferește atât de sărbătorire, cât și de judecată aspră. Rasismul științific este studiat astăzi ca produs al secolului al XVIII-lea, nu ca rămășiță dinainte.',
    },
  ],
  sources: [
    { author: 'John Locke', title: 'Scrisoare despre toleranță', year: '1689', kind: 'primaria', note: 'Constrângerea nu produce credință sinceră. Îi exclude încă pe atei și pe catolici.' },
    { author: 'Montesquieu', title: 'Scrisori persane', year: '1721', kind: 'primaria', note: 'Privirea străinului închipuit ca tehnică de a face ciudată propria societate.' },
    { author: 'Benito Jerónimo Feijoo', title: 'Teatro crítico universal', year: '1726-1740', kind: 'primaria', note: 'Critica superstițiilor și a falselor minuni, din interiorul catolicismului spaniol.' },
    { author: 'Voltaire', title: 'Scrisori filozofice', year: '1734', kind: 'primaria', note: 'Anglia ca oglindă: toleranță, comerț, Newton și libertatea presei.' },
    { author: 'Montesquieu', title: 'Despre spiritul legilor', year: '1748', kind: 'primaria', note: 'Relativism instituțional și separarea puterilor. Anglia lui este în parte închipuită.' },
    { author: 'Diderot și D\'Alembert', title: 'Encyclopédie', year: '1751-1772', kind: 'primaria', note: '28 de volume. Clasificarea cunoașterii după facultățile omenești și demnificarea meseriilor.' },
    { author: 'Jean-Jacques Rousseau', title: 'Discurs despre obârșia inegalității', year: '1755', kind: 'primaria', note: 'Proprietatea și societatea civilă ca obârșie a stricăciunii și a inegalității.' },
    { author: 'Jean-Jacques Rousseau', title: 'Contractul social', year: '1762', kind: 'primaria', note: 'Suveranitatea voinței generale, neînstrăinabilă și nedelegabilă.' },
    { author: 'Voltaire', title: 'Tratat despre toleranță', year: '1763', kind: 'primaria', note: 'Scris după execuția lui Jean Calas. Campanie publică ce i-a obținut reabilitarea.' },
    { author: 'Cesare Beccaria', title: 'Despre infracțiuni și pedepse', year: '1764', kind: 'primaria', note: 'Împotriva torturii și a pedepsei cu moartea: contează siguranța pedepsei, nu cruzimea ei.' },
    { author: 'Guillaume-Thomas Raynal și Denis Diderot', title: 'Istoria celor două Indii', year: '1770-1780', kind: 'primaria', note: 'Mare succes de librărie european, împotriva cuceririi și a sclaviei. Vestește un răzbunător negru.' },
    { author: 'Adam Smith', title: 'Avuția națiunilor', year: '1776', kind: 'primaria', note: 'Diviziunea muncii și piața, cu avertismente despre înțelegerile negustorești și munca ce înăsprește mintea.' },
    { author: 'Immanuel Kant', title: 'Răspuns la întrebarea: ce este Iluminismul?', year: '1784', kind: 'primaria', note: 'Minorat de care ești singur vinovat, *sapere aude* și deosebirea dintre folosirea publică și cea privată a rațiunii.' },
    { author: 'Olympe de Gouges', title: 'Declarația drepturilor femeii și ale cetățencii', year: '1791', kind: 'primaria', note: 'Calc anume al textului din 1789. Autoarea ei a fost ghilotinată în 1793.' },
    { author: 'Mary Wollstonecraft', title: 'Revendicarea drepturilor femeii', year: '1792', kind: 'primaria', note: 'Răspuns la Rousseau: fără educație egală nu este cu putință nici virtute, nici cetățenie.' },
    { author: 'Gaspar Melchor de Jovellanos', title: 'Raport asupra legii agrare', year: '1795', kind: 'primaria', note: 'Diagnostic luminat al piedicilor juridice puse productivității agrare spaniole.' },
    { author: 'Ernst Cassirer', title: 'Filozofia Iluminismului', year: '1932', kind: 'estudio', note: 'Citire unitară: un singur fel de a gândi, sub varietatea autorilor.' },
    { author: 'Daniel Mornet', title: 'Obârșiile intelectuale ale Revoluției franceze', year: '1933', kind: 'estudio', note: 'Reconstituie răspândirea cărților și a sociabilităților dinainte de 1789.' },
    { author: 'Max Horkheimer și Theodor Adorno', title: 'Dialectica Luminilor', year: '1944', kind: 'estudio', note: 'Rațiunea instrumentală ca stăpânire ce se întoarce împotriva ființelor omenești.' },
    { author: 'Jürgen Habermas', title: 'Istoria și critica opiniei publice', year: '1962', kind: 'estudio', note: 'Formulează conceptul de spațiu public burghez și decăderea lui de mai apoi.' },
    { author: 'Robert Darnton', title: 'The Business of Enlightenment', year: '1979', kind: 'estudio', note: '*Encyclopédie* ca întreprindere editorială: costuri, contrabandă, abonați și cenzură negociată.' },
    { author: 'Roy Porter și Mikuláš Teich', title: 'The Enlightenment in National Context', year: '1981', kind: 'estudio', note: 'Propune să se vorbească despre Iluminisme la plural, după contexte naționale.' },
    { author: 'Dena Goodman', title: 'The Republic of Letters', year: '1994', kind: 'estudio', note: 'Așază gazdele de salon în centrul sociabilității luminate, nu în decorul ei.' },
    { author: 'Jonathan Israel', title: 'Radical Enlightenment', year: '2001', kind: 'estudio', note: 'Nucleu spinozist ca motor al schimbării, împotriva Iluminismului moderat.' },
    { author: 'David Sorkin', title: 'The Religious Enlightenment', year: '2008', kind: 'estudio', note: 'Documentează Iluminismul catolic, protestant și evreiesc, potrivit cu credința.' },
  ],
  documents: [
    {
      section: 0,
      title: 'Kant răspunde ce este Iluminismul',
      text: [
        'Iluminismul este ieșirea omului din minoratul de care el însuși este vinovat.',
        'Minorat este neputința de a te folosi de propria minte fără călăuza altuia. Ești singur vinovat de el atunci când pricina lui nu stă în lipsa minții, ci în lipsa hotărârii și a curajului de a te folosi de ea fără călăuza altuia.',
        'Ai curajul de a te folosi de propria minte: iată deviza Iluminismului.',
      ].join('\n\n'),
      source: 'Immanuel Kant, Răspuns la întrebarea: ce este Iluminismul?, Berlin, 1784.',
      note: 'Versiune proprie după germană.',
      question: 'Kant spune că vina este a individului însuși, nu a celui care îl tutelează. Ți se pare dreaptă această mustrare? Ce ar trebui, pe lângă curaj, ca să gândești pe cont propriu în 1784?',
    },
  ],
  images: [
    {
      alt: 'Gravură alegorică cu Adevărul înconjurat de figuri care înfățișează rațiunea, filozofia și artele',
      caption: 'Frontispiciul lucrării Encyclopédie a lui Diderot și D\'Alembert, gravat de Bonaventure-Louis Prévost.',
    },
    {
      alt: 'Pictură cu o adunare numeroasă într-un salon din secolul al XVIII-lea, ascultând un cititor, cu un bust pe un piedestal în fundal',
      caption: 'Lectură în salonul doamnei Geoffrin, de Lemonnier (1812). Este o reconstituire de mai târziu, dar redă bine unde se petrecea Iluminismul: în saloane, în cafenele și în academii.',
    },
    {
      alt: 'Copertă tipografică din secolul al XVIII-lea cu titlul Encyclopédie și o lungă înșiruire de cuprinsuri',
      caption: 'Coperta lucrării Encyclopédie (1751). Douăzeci și opt de volume, peste patru mii de abonați și o afacere editorială: și luminile se vindeau.',
    },
    {
      alt: 'Portretul unui bărbat de vârstă mijlocie, cu căciulă de blană și haină închisă la culoare, privind drept spre privitor',
      caption: 'Rousseau, portretizat de Allan Ramsay (1766). Tezele lui despre suveranitatea populară îi tulburau deopotrivă pe despoții luminați și pe enciclopediștii înșiși.',
    },
  ],
  questions: [
    {
      question: 'Cum definește Kant Iluminismul, în 1784?',
      options: [
        'Ca izbânda definitivă a rațiunii asupra superstiției',
        'Ca ieșirea ființei omenești dintr-un minorat de care este ea însăși vinovată',
        'Ca ansamblul doctrinelor cuprinse în *Encyclopédie*',
        'Ca înlocuirea monarhiei cu republica',
      ],
      explanation: 'Nu lipsește mintea, lipsește hotărârea de a o folosi fără călăuza altuia. Iar Kant numește vremea lui epocă a luminării, nu epocă luminată.',
    },
    {
      question: 'Ce deosebește Kant între folosirea publică și cea privată a rațiunii?',
      options: [
        'Folosirea publică se face la curte, iar cea privată la universitate',
        'Folosirea publică este a autorului în fața unui public cititor, unde critica nu are limită; cea privată este a funcționarului în funcția lui, unde se cuvine ascultare',
        'Folosirea publică le aparține celor luminați, iar cea privată clericilor',
        'Folosirea publică cere îngăduința cenzorului, iar cea privată nu',
      ],
      explanation: 'Această deosebire explică cum a putut Iluminismul să conviețuiască cu monarhiile absolute: se ascultă porunca și se critică norma.',
    },
    {
      question: 'Ce numește „spațiul public” al lui Habermas?',
      options: [
        'Ansamblul instituțiilor de stat însărcinate cu învățământul',
        'Un loc între stat și viața privată, unde particularii cugetă asupra treburilor obștești și, ca principiu, contează argumentul cel mai bun',
        'Rețeaua academiilor regale finanțate de monarhi',
        'Piața cărții clandestine',
      ],
      explanation: 'Locurile lui sunt cafenelele, saloanele, lojile, societățile economice și presa. Îi excludea pe analfabeți și pe femei din reprezentarea politică.',
    },
    {
      question: 'Care a fost noutatea de organizare a lucrării *Encyclopédie*?',
      options: [
        'Să fie prima operă tipărită cu planșe gravate',
        'Clasificarea cunoașterii după facultățile omenești — memorie, rațiune, imaginație — și folosirea trimiterilor ca să ocolească cenzura',
        'Publicarea ei întreagă fără privilegiu regal',
        'A fi scrisă de un singur autor',
      ],
      explanation: 'Clasificarea nu este teologică. Iar articolul nesupravegheat trimitea la ce nu se putea spune în cel păzit.',
    },
    {
      question: 'Ce a arătat Robert Darnton, studiind *Encyclopédie* din arhivele editorilor ei?',
      options: [
        'Că a fost un eșec comercial susținut de mecenați',
        'Că a fost o afacere mare, străbătută de ediții ieftine, contrabandă, cenzori îngăduitori și abonați clerici și funcționari',
        'Că cele mai multe articole erau plagiate după opere englezești',
        'Că a fost răspândită doar la Paris',
      ],
      explanation: 'Cenzura Vechiului Regim nu era un zid, ci un sistem cu găuri, cu care se negocia.',
    },
    {
      question: 'Ce adunau librarii clandestini sub eticheta *livres philosophiques*?',
      options: [
        'Doar tratatele de metafizică interzise de Sorbona',
        'Filozofia interzisă, libelurile împotriva curții și pornografia politică, în aceeași categorie comercială',
        'Operele autorilor străini netraduse',
        'Manualele academiilor provinciale',
      ],
      explanation: 'Categoria este a secolului al XVIII-lea însuși. Pentru Darnton, acel material a discreditat monarhia mai mult decât tratatele de teorie politică.',
    },
    {
      question: 'Ce două idei durabile aduce *Despre spiritul legilor*?',
      options: [
        'Voința generală și dreptul la împotrivire',
        'Potrivirea legilor cu condițiile fiecărui popor și rânduiala instituțională prin care puterea oprește puterea',
        'Desființarea torturii și proporționalitatea pedepselor',
        'Libera circulație a grânelor și produsul net agrar',
      ],
      explanation: 'Citirea lui a constituției engleze era în parte închipuită și, cu toate acestea, a întemeiat constituționalismul modern.',
    },
    {
      question: 'În *Contractul social*, unde stă suveranitatea?',
      options: [
        'La monarh, ca reprezentant al poporului',
        'În voința generală a corpului politic, neînstrăinabilă și nedelegabilă',
        'În adunarea proprietarilor',
        'În constituția scrisă',
      ],
      explanation: 'De aici vine democrația modernă și, tot de aici, bănuiala formulată în secolul XX că voința generală poate reduce la tăcere minoritatea.',
    },
    {
      question: 'Care este argumentul de temelie al lui Beccaria împotriva torturii?',
      options: [
        'Că este potrivnică milei creștine',
        'Că scoate mărturisiri false și pedepsește înainte de judecată; puterea de descurajare atârnă de siguranța pedepsei, nu de cruzimea ei',
        'Că este prea costisitoare pentru vistierie',
        'Că ar trebui aplicată doar infracțiunilor împotriva statului',
      ],
      explanation: 'Mai multe state au desființat tortura în cele două decenii următoare. A fost izbânda cea mai rapidă a Iluminismului.',
    },
    {
      question: 'Ce se uită de obicei despre *Avuția națiunilor* a lui Adam Smith?',
      options: [
        'Că apără monopolul companiilor privilegiate',
        'Că avertizează împotriva înțelegerilor dintre negustori și a efectelor care înăspresc mintea într-o muncă întruna aceeași',
        'Că respinge diviziunea muncii',
        'Că a fost scrisă înaintea operei fiziocraților',
      ],
      explanation: 'Metafora mâinii nevăzute apare o singură dată și conviețuiește cu o critică limpede la adresa intereselor negustorilor.',
    },
    {
      question: 'Ce text luminat a denunțat cucerirea și sclavia și a ajuns să vestească un răzbunător negru?',
      options: [
        '*Emil* al lui Rousseau',
        '*Istoria celor două Indii* a lui Raynal și Diderot',
        '*Tratatul despre toleranță* al lui Voltaire',
        '*Raportul asupra legii agrare* al lui Jovellanos',
      ],
      explanation: 'A fost un mare succes de librărie european și a circulat printre revoluționarii haitieni. Nuanțează, fără să îl șteargă, reproșul lui Sala-Molins la adresa Iluminismului francez.',
    },
    {
      question: 'De ce se susține că rasismul modern nu este o rămășiță premodernă?',
      options: [
        'Fiindcă nu a existat înainte de secolul al XIX-lea',
        'Fiindcă se formulează cu vocabularul clasificator al istoriei naturale luminate, la Linné, la Buffon și în texte ale lui Hume și ale lui Kant',
        'Fiindcă l-au născocit aboliționiștii ca să îl combată',
        'Fiindcă vine numai din teologia medievală',
      ],
      explanation: 'Ierarhia rasială este rostită cu limbaj științific, nu cu limbaj biblic. Este unul dintre punctele oarbe cel mai bine documentate ale secolului.',
    },
    {
      question: 'Ce cerea Mary Wollstonecraft, mai presus de toate, în 1792?',
      options: [
        'Votul femeilor, de îndată',
        'Educație egală pentru femei, fără de care nu este cu putință nici virtute, nici cetățenie',
        'Desființarea căsătoriei',
        'Egalitate de salarii în meserii',
      ],
      explanation: 'Răspundea lui *Emil*, care prescria pentru Sofia o educație subordonată. Olympe de Gouges calchiase deja, în 1791, Declarația din 1789.',
    },
    {
      question: 'Care este teza din *Dialectica Luminilor* a lui Horkheimer și Adorno?',
      options: [
        'Că Iluminismul a fost prea puțin rațional',
        'Că rațiunea prefăcută în stăpânire instrumentală a naturii sfârșește prin a se întoarce împotriva ființelor omenești',
        'Că Iluminismul a fost un fenomen exclusiv francez',
        'Că progresul tehnic garantează progresul moral',
      ],
      explanation: 'Scrisă în 1944. Răspunsul obișnuit: uneltele cu care se denunță sclavia, patriarhatul și colonialismul sunt, în bună măsură, luminate.',
    },
    {
      question: 'Ce caracterizează despotismul luminat?',
      options: [
        'Convocarea unor adunări reprezentative care să aprobe reformele',
        'Reforme administrative, juridice și economice pornite de sus, fără a ceda din suveranitate și fără a îngădui participare politică',
        'Renunțarea monarhilor la controlul asupra Bisericii naționale',
        'Desființarea nobilimii ca stare',
      ],
      explanation: 'Coduri, regalism, izgonirea iezuiților, lucrări publice și învățământ tehnic. Vorba „totul pentru popor, fără popor” este o sinteză de mai târziu, nu un citat.',
    },
    {
      question: 'Ce susține Roger Chartier despre legătura dintre Iluminism și Revoluția franceză?',
      options: [
        'Că Revoluția a fost urmarea directă și de prevăzut a răspândirii cărților filozofice',
        'Că Revoluția a fost cea care a construit Iluminismul ca obârșie a ei, alegând și consacrând autori ca să se legitimeze',
        'Că Iluminismul a fost, de fapt, contrarevoluționar',
        'Că cele două procese nu au avut nicio legătură',
      ],
      explanation: 'Răstoarnă teza lui Mornet. Formularea primită: textele nu fac revoluții, dar dau limbajul pentru ca o criză să fie pusă ca problemă de suveranitate.',
    },
  ],
}
