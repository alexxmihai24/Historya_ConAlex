import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/bizancio.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 13 date, 10 concepte, 3 dezbateri, 10 surse, un
   document comentat, 4 imagini și 15 întrebări cu opțiunile pe aceleași poziții. */
export const bizancioRo: TopicTranslation = {
  title: 'Imperiul Bizantin',
  description: 'O mie de ani de continuitate romană în Răsărit: drept, ortodoxie, iconoclasm și cădere.',
  years: '330–1453',
  summary:
    'Bizanț este numele pe care erudiția modernă l-a dat unui stat care nu s-a numit niciodată așa: locuitorii lui se socoteau romani, iar statul lor era Imperiul Roman, fără întrerupere, până în 1453. Această neconcordanță dintre nume și lucru rezumă problema istoriografică a perioadei, tratată secole întregi ca o decădere răsăriteană de o mie de ani și recitită mai apoi ca una dintre construcțiile politice cele mai rezistente din istorie.',
  keyDates: [
    { date: '330', event: 'Constantin inaugurează Constantinopolul pe locul vechiului Bizanț.' },
    { date: '395', event: 'Împărțirea administrativă definitivă a imperiului după Teodosie.' },
    { date: '527–565', event: 'Iustinian: Corpus Iuris Civilis, Sfânta Sofia și recucerirea Occidentului.' },
    { date: '541–542', event: 'Ciuma lui Iustinian; mortalitate catastrofală în Mediterana.' },
    { date: '634–718', event: 'Cuceririle arabe: pierderea Siriei, a Egiptului și a Africii; două asedii ale Constantinopolului.' },
    { date: '726–843', event: 'Controversa iconoclastă, cu două faze și restaurarea finală a icoanelor.' },
    { date: '863', event: 'Misiunea lui Chiril și Metodie: evanghelizarea slavilor și alfabetul glagolitic.' },
    { date: '1014', event: 'Vasile al II-lea îl învinge definitiv pe țarul Bulgariei.' },
    { date: '1054', event: 'Schisma dintre Răsărit și Apus, între Roma și Constantinopol.' },
    { date: '1071', event: 'Manzikert: înfrângere în fața turcilor selgiucizi și pierderea Anatoliei interioare.' },
    { date: '1204', event: 'A Patra Cruciadă jefuiește Constantinopolul și întemeiază Imperiul latin.' },
    { date: '1261', event: 'Mihail al VIII-lea Paleologul recuperează Constantinopolul.' },
    { date: '1453', event: 'Mehmed al II-lea cucerește Constantinopolul; sfârșitul Imperiului.' },
  ],
  sections: [
    {
      title: 'Problema numelui și a disprețului',
      body: [
        'Termenul „bizantin” a fost născocit în 1557 de umanistul german Hieronymus Wolf, aproape un secol după căderea Imperiului. Locuitorii lui își spuneau rhomaioi — romani — iar statului lor, Basileia ton Rhomaion, Imperiul romanilor. Turcii numeau Rum Anatolia din același motiv. Nimeni la Constantinopol nu s-ar fi recunoscut drept „bizantin”.',
        'Numele nu a fost neutru. Slujea să îi tăgăduiască Constantinopolului continuitatea romană și să o rezerve Occidentului, unde Sfântul Imperiu Roman de Națiune Germană pretindea acest titlu. Din vremea Iluminismului, operațiunea s-a încheiat cu disprețul: Montesquieu și Gibbon au înfățișat o mie de ani de istorie ca pe o decădere neîntreruptă de intrigă de curte și ceartă teologică. De acolo vine folosirea adjectivului „bizantin” drept sinonim pentru discuție searbădă și încurcătură fără rost.',
        'Revizuirea acestei imagini a fost una dintre lucrările cele mai rodnice ale medievisticii secolului XX. Un stat care a supraviețuit islamului, slavilor, bulgarilor, normanzilor, cruciaților și turcilor timp de o mie de ani cu greu poate fi numit decadent. Ceea ce subliniază cercetarea de azi este uimitoarea lui putere de adaptare: a pierdut trei sferturi din teritoriu în secolul al VII-lea și s-a rânduit din nou cu totul ca să supraviețuiască.',
        'Se cuvine, de asemenea, lepădată ideea unui Ev Mediu pur occidental. Multă vreme, Constantinopolul a fost cel mai mare oraș al Europei, cu sute de mii de locuitori pe când Parisul sau Londra numărau doar câteva mii, iar nomisma bizantină a fost moneda de temelie a Mediteranei vreme de șapte veacuri: un dolar al Evului Mediu.',
      ].join('\n\n'),
      callout:
        'Continuitatea instituțională este întocmai: Bizanțul nu urmează Imperiului Roman, este Imperiul Roman. Deosebirea dintre „roman” și „bizantin” este o rânduială a istoricilor, folositoare, dar înșelătoare.',
    },
    {
      title: 'Iustinian: ultima încercare mediteraneeană',
      body: [
        'Domnia lui Iustinian (527-565) a fost încercarea cea mai îndrăzneață de a reface imperiul unit. Generalii lui, Belisarie și Narses, au recucerit Africa de la vandali, Italia de la ostrogoți și o parte a sud-estului iberic. Prețul a fost uriaș: războiul din Italia a ținut douăzeci de ani și a pustiit peninsula mult mai mult decât stăpânirea ostrogotă pe care voia s-o desfacă.',
        'Lucrarea lui cea mai trainică a fost cea juridică. Corpus Iuris Civilis — Codul, Digestele, Instituțiile și Novelele, alcătuite între 528 și 534 sub îndrumarea lui Tribonian — a strâns și a rânduit o mie de ani de jurisprudență romană. Digestele, mai cu seamă, au păstrat fragmente din juriști clasici a căror operă întreagă s-a pierdut. Redescoperirea lor la Bologna, în secolul al XI-lea, a întemeiat știința juridică europeană.',
        'Sfânta Sofia, ridicată în doar cinci ani de Antemios din Trales și Isidor din Milet, a rezolvat o problemă de arhitectură mare: acoperirea unui spațiu pătrat cu o cupolă uriașă prin pandantivi. Interiorul ei, cu cupola părând suspendată deasupra unei cununi de ferestre, urmărea dinadins un efect de nematerialitate. A fost cea mai mare biserică a creștinătății aproape o mie de ani.',
        'Răscoala Nika (532), născută din rivalitatea dintre taberele hipodromului — albaștrii și verzii — și din povara fiscală, a fost cât pe ce să îl răstoarne. Procopius povestește că Iustinian se pregătea de fugă, când împărăteasa Teodora l-a înduplecat să rămână; represiunea de după a costat zeci de mii de vieți chiar în hipodrom.',
        'Ciuma bubonică din 541-542, prima pandemie documentată de Yersinia pestis, a curmat proiectul. Estimările de mortalitate se ceartă mult — de la catastrofe de 25-50% până la revizuiri recente care le scad simțitor —, dar efectul laolaltă al războiului, al molimei și al poverii fiscale a lăsat imperiul istovit. Cuceririle apusene s-au pierdut în câteva decenii.',
      ].join('\n\n'),
    },
    {
      title: 'Secolul al VII-lea: să pierzi aproape totul și să supraviețuiești',
      body: [
        'Între 602 și 628, Bizanțul a dus un război total cu Persia sasanidă, care i-a lăsat pe amândoi împărații istoviți. Heraclius a izbutit în cele din urmă să învingă, dar la mai puțin de un deceniu, între 634 și 642, armatele arabe au smuls Bizanțului Siria, Palestina și Egiptul, iar în deceniile următoare, nordul Africii. Imperiul a pierdut provinciile lui cele mai bogate și aproape trei sferturi din venituri.',
        'Supraviețuirea a cerut o rezidire deplină. Sistemul de theme a rânduit teritoriul în circumscripții sub comandă militară, unde soldații primeau pământuri în schimbul unei slujbe ereditare. Asta a scăzut mult costul armatei, care a încetat să mai atârne de o soldă în bani, și a înrădăcinat apărarea în populația de la fața locului. Cronologia exactă a înfăptuirii lui se discută, dar efectul e limpede: un stat mult mai sărac a izbutit să țină o armată vrednică.',
        'Prefacerea a fost și una a orașelor, și una culturală. Orașele vechi, cu forurile, băile și sfaturile lor obștești, s-au strâns sau s-au prefăcut în cetăți (kastra). Greaca a înlocuit definitiv latina ca limbă a administrației. Cultura clasică s-a retras în cercuri strâmte, iar producția scrisă a scăzut la minimum aproape două secole, în ceea ce s-a numit „evul întunecat bizantin”.',
        'Apărarea Constantinopolului în asediile arabe din 674-678 și din 717-718 a fost probabil evenimentul cu urmările cele mai mari din istoria europeană timpurie. Zidurile teodosiene, lanțul de peste Cornul de Aur și focul grecesc — un amestec incendiar aruncat prin sifoane, a cărui rețetă exactă s-a pierdut — au îngăduit oprirea expansiunii islamice spre Europa răsăriteană vreme de secole.',
      ].join('\n\n'),
      callout:
        'Focul grecesc a rămas taină de stat: se transmitea unui număr mic de familii, iar alcătuirea lui nu a fost niciodată așternută în scris întreagă. E unul dintre puținele cazuri documentate de tehnologie militară pierdută din prea multă taină.',
    },
    {
      title: 'Iconoclasmul: o ceartă care nu era doar despre icoane',
      body: [
        'În 726, împăratul Leon al III-lea a poruncit scoaterea icoanelor din cultul public. Controversa iconoclastă s-a întins, cu o întrerupere, până în 843 și i-a pus față în față pe cei ce socoteau idolatrie venerarea icoanelor cu cei ce o apărau ca legiuită.',
        'Argumentul iconoclast se sprijinea pe porunca împotriva chipurilor cioplite și pe cu neputință de înfățișat firea dumnezeiască. Iconodulii, cu Ioan Damaschinul drept teoretician de căpetenie, au răspuns cu un argument hristologic: dacă Dumnezeu s-a făcut trup, tocmai acel trup se poate înfățișa, iar a tăgădui asta înseamnă a tăgădui Întruparea. Au adăugat o deosebire hotărâtoare între latrie, închinarea cuvenită numai lui Dumnezeu, și proskynesis, cinstirea îndreptată spre prototip prin icoană.',
        'Pricinile conflictului s-au discutat mult. S-a pomenit înrâurirea islamului și a iudaismului, amândouă potrivnice chipurilor, și înfrângerile militare tălmăcite ca pedeapsă dumnezeiască pentru idolatrie. Alte citiri subliniază pricini dinăuntru: încercarea imperială de a supune mănăstirile, mari stăpâne de pământuri, păstrătoare ale icoanelor celor mai venerate și scutite de slujbă militară și fiscală.',
        'Restaurarea definitivă a icoanelor în 843 se prăznuiește și azi drept „Triumful Ortodoxiei”. Urmările ei au ținut: icoana a rămas întemeiată teologic, cu reguli iconografice aspre care puneau credincioșia față de model înaintea noutății meșterului, iar monahismul a ieșit întărit în fața puterii imperiale.',
        'O urmare pe alături a fost pierderea de izvoare. Distrugerea icoanelor dinainte de 726 a lăsat un gol aproape deplin în arta bizantină timpurie, iar textele iconoclaste au fost la rândul lor înlăturate de învingători: le cunoaștem argumentele aproape numai din răspunsurile potrivnicilor lor, ceea ce cere o grijă necontenită.',
      ].join('\n\n'),
    },
    {
      title: 'Ortodoxie, slavi și schisma cu Roma',
      body: [
        'Misiunea lui Chiril și Metodie în Moravia, din 863, a statornicit tiparul bizantin de răspândire religioasă. Cei doi frați au întocmit un alfabet — glagoliticul, din care s-a tras chirilica — pentru a tălmăci Scripturile și liturghia în slavă. Spre deosebire de rânduiala latină, care impunea latina, Bizanțul a primit liturghia în limba de rând, ceea ce a înlesnit foarte mult evanghelizarea și a dat popoarelor slave o cultură scrisă a lor.',
        'Trecerea Bulgariei la creștinism în 864 și cea a Rusiei Kievene în 988, când Vladimir s-a botezat și s-a însurat cu o prințesă porfirogenetă, au adus aceste popoare în orbita culturală a Constantinopolului. Când Bizanțul a căzut în 1453, Moscova a cerut moștenirea și s-a proclamat „a treia Romă”: genealogia politică și ideologică a Rusiei trece pe acolo.',
        'Ruptura cu Roma a fost un proces lung, nu o întâmplare. Deosebirile s-au adunat de-a lungul secolelor: clauza Filioque adăugată de Apus la crez, celibatul silit al clerului latin, folosirea azimei și, mai presus de toate, chestiunea autorității. Roma pretindea o întâietate de jurisdicție asupra întregii Biserici; Constantinopolul susținea pentarhia, o cârmuire obștească a celor cinci patriarhii, în care Roma ar fi avut doar o întâietate de cinste.',
        'Anatemele reciproce din 1054 dintre legatul papal Humbert și patriarhul Mihail Cerularie au fost o întâmplare mică pe care istoriografia de mai târziu a prefăcut-o în dată de temelie. Ruptura s-a făcut cu neputință de întors mai târziu și din pricini mai puțin teologice: jefuirea Constantinopolului de către A Patra Cruciadă, în 1204, cu distrugere de biserici și pângărire de moaște, a stârnit o pică pe care încercările de unire de la Lyon (1274) și Florența (1439) nu au izbutit niciodată s-o depășească.',
        'Împotrivirea poporului față de aceste uniri a fost cumplită. Un înalt dregător bizantin a rezumat poziția majorității în preajma căderii cu o frază rămasă vestită: mai bine turbanul turcesc decât tiara papală. Se prefera stăpânirea otomană, care îngăduia păstrarea credinței, unei uniri cu Roma simțită ca supunere.',
      ].join('\n\n'),
    },
    {
      title: 'Decădere și cădere: 1204 înaintea lui 1453',
      body: [
        'Înfrângerea de la Manzikert din 1071, în fața turcilor selgiucizi, a deschis Anatolia — rezerva de căpetenie de recruți și de dări a imperiului — spre ocuparea turcă. Dinastia Comnenă a izbutit o refacere de seamă în secolul al XII-lea, sprijinindu-se pe înlesniri comerciale date Veneției și Genovei, care pe termen lung au scurs veniturile vamale ale statului spre republicile italiene.',
        'Lovitura hotărâtoare a venit în 1204. A Patra Cruciadă, abătută de la ținta ei egipteană printr-o îmbinare de datorii către Veneția, certuri dinastice bizantine și socoteală comercială, a luat și a jefuit Constantinopolul vreme de trei zile. S-au topit opere de artă vechi, s-au risipit moaște prin Europa — caii de bronz de la San Marco vin de acolo — și s-a întemeiat un Imperiu latin ce a ținut până în 1261.',
        'Imperiul refăcut de Paleologi nu și-a mai recăpătat niciodată temelia materială. Teritoriul lui s-a strâns treptat la Constantinopol, o parte din Tracia și despotatul Moreei; economia lui a ajuns pe mâna negustorilor italieni; iar războaiele civile din secolul al XIV-lea, în plină expansiune otomană, i-au mâncat cele din urmă puteri. În 1373, împăratul era deja vasal tributar al sultanului.',
        'Asediul de pe urmă, din 1453, a pus față în față vreo 7.000 de apărători cu o armată otomană de zeci de mii și cu artilerie de asediu în stare să dărâme zidurile teodosiene, care rezistaseră o mie de ani. Constantin al XI-lea a murit luptând. Mehmed al II-lea a prefăcut Sfânta Sofia în moschee și a rânduit Constantinopolul drept capitală otomană.',
        'Căderea a avut urmări ce trec dincolo de cele militare. Plecarea cărturarilor greci în Italia cu manuscrisele lor a hrănit umanismul renascentist; închiderea căilor de uscat spre Asia a stârnit căutarea drumurilor pe mare; iar Moscova și-a însușit moștenirea ideologică ortodoxă. E obișnuit ca 1453 să fie folosit ca dată de început a Epocii Moderne: ca orice hotar de acest fel, e mai mult o rânduială comodă decât o schimbare adevărată în viața cuiva.',
      ].join('\n\n'),
      callout:
        'Steven Runciman a numit jaful din 1204 o crimă fără seamăn împotriva civilizației. Occidentul a distrus cel mai mare oraș creștin al lumii cu două sute cincizeci de ani înainte s-o facă otomanii.',
    },
  ],
  concepts: [
    { term: 'Rhomaioi', definition: '„Romani”: așa se numeau pe ei înșiși bizantinii. „Bizantin” este un termen născocit în 1557.' },
    { term: 'Basileus', definition: 'Titlu imperial grecesc, primit oficial în secolul al VII-lea, în locul titulaturii latine.' },
    { term: 'Thema', definition: 'Circumscripție militară și administrativă unde soldații primeau pământuri în schimbul unei slujbe ereditare.' },
    { term: 'Focul grecesc', definition: 'Amestec incendiar aruncat prin sifoane, taină de stat a cărei rețetă s-a pierdut până la urmă.' },
    { term: 'Iconoclasm', definition: 'Mișcare de respingere a cultului icoanelor, în vigoare în două faze între 726 și 843.' },
    { term: 'Latrie / proskynesis', definition: 'Închinarea cuvenită numai lui Dumnezeu, față de cinstirea îndreptată spre prototip prin icoană.' },
    { term: 'Pentarhie', definition: 'Cârmuire obștească a celor cinci patriarhii: Roma, Constantinopol, Alexandria, Antiohia și Ierusalim.' },
    { term: 'Filioque', definition: 'Clauză adăugată în Apus la crez, unul dintre punctele de doctrină ale schismei.' },
    { term: 'Nomisma', definition: 'Monedă de aur bizantină, reper monetar al Mediteranei vreme de vreo șapte veacuri.' },
    { term: 'Porfirogenet', definition: '„Născut în purpură”: fiu al împăratului domnitor, cu legitimitate dinastică mai mare.' },
  ],
  debates: [
    {
      question: 'A fost Bizanțul o decădere de-o mie de ani sau un stat cu putere de adaptare ieșită din comun?',
      positions: [
        {
          school: 'Decădere (Montesquieu, Gibbon)',
          argument:
            'O mie de ani de intrigă de curte, ceartă teologică searbădă și pierdere treptată de teritoriu. Istoria bizantină ar fi lungul epilog al căderii Romei, fără vreo aducere aminte proprie de seamă.',
        },
        {
          school: 'Recitire modernă (Ostrogorsky, Kaldellis, Cameron)',
          argument:
            'A supraviețuit o mie de ani perșilor, arabilor, bulgarilor, normanzilor, cruciaților și turcilor, și s-a rânduit din nou cu totul după ce a pierdut trei sferturi din teritoriu în secolul al VII-lea. A păstrat dreptul roman și literatura greacă, și a evanghelizat lumea slavă.',
        },
      ],
      state:
        'Imaginea decăderii e lăsată deoparte în cercetarea de specialitate, deși ține încă în cultura obștească și în însăși folosirea peiorativă a adjectivului „bizantin”. Dezbaterea de azi se îndreaptă spre cum să fie descrisă firea statului bizantin, cu propuneri precum cea a lui Kaldellis, de a-l citi ca pe o republică romană cu legitimitate populară mai degrabă decât ca pe o autocrație teocratică.',
    },
    {
      question: 'Ce a pricinuit cu adevărat iconoclasmul?',
      positions: [
        {
          school: 'Înrâurire din afară',
          argument:
            'Legătura cu islamul și cu iudaismul, amândouă potrivnice chipurilor, și înfrângerile militare tălmăcite ca pedeapsă dumnezeiască pentru idolatrie i-ar fi împins pe împărați să curețe cultul.',
        },
        {
          school: 'Ceartă dinăuntru pentru putere',
          argument:
            'Ar fi fost o încercare imperială de a supune mănăstirile: mari stăpâne de pământuri, păstrătoare ale icoanelor celor mai venerate și scutite de dări și de slujbă militară. Teologia ar ascunde o ceartă pentru avuții.',
        },
      ],
      state:
        'Se admite îmbinarea pricinilor. Greutatea de căpetenie ține de izvoare: textele iconoclaste au fost distruse de învingători și se cunosc numai din răspunsurile potrivnicilor, ceea ce înclină dezbaterea într-o singură parte.',
    },
    {
      question: 'Când a căzut de fapt Bizanțul, în 1204 sau în 1453?',
      positions: [
        {
          school: '1453 ca dată canonică',
          argument:
            'Atunci dispare statul: moare ultimul împărat, capitala trece pe mâna otomanilor, iar Sfânta Sofia se preface în moschee.',
        },
        {
          school: '1204 ca ruptură hotărâtoare',
          argument:
            'Jaful Celei de-a Patra Cruciade a distrus temelia economică, a risipit avuția, a sfărâmat teritoriul și a curmat putința de refacere. Imperiul paleolog a fost un stat rămășiță încă de la restaurarea lui.',
        },
      ],
      state:
        'Predomină socotința lui 1204 drept lovitura fără întoarcere, fără să se lase folosirea lui 1453 ca dată oficială. Discuția se leagă de critica hotarelor cronologice obișnuite dintre Evul Mediu și Epoca Modernă.',
    },
  ],
  sources: [
    { author: 'Procopius din Cezareea', title: 'Istoria războaielor; Istoria secretă', year: 'c. 550', kind: 'primaria', note: 'Istoric oficial al lui Iustinian și autor al unui libel privat nimicitor împotriva lui. Contrast de izvoare ieșit din comun.' },
    { author: 'Iustinian (îndrumat de Tribonian)', title: 'Corpus Iuris Civilis', year: '528–534', kind: 'primaria', note: 'Codul, Digestele, Instituțiile și Novelele. Temelia dreptului continental european după redescoperirea de la Bologna.' },
    { author: 'Ioan Damaschinul', title: 'Cuvântări despre icoane', year: 'c. 730', kind: 'primaria', note: 'Întemeierea teologică de căpetenie a cultului icoanelor.' },
    { author: 'Ana Comnena', title: 'Alexiada', year: 'c. 1148', kind: 'primaria', note: 'Biografia tatălui ei, Alexie I, și privirea bizantină asupra Primei Cruciade. Prima mare femeie istoric cunoscută.' },
    { author: 'Nicetas Choniates', title: 'Istoria', year: 'c. 1207', kind: 'primaria', note: 'Mărturie directă a jafului Constantinopolului din 1204.' },
    { author: 'Georg Ostrogorsky', title: 'Istoria statului bizantin', year: '1940', kind: 'estudio', note: 'Manual clasic care a statornicit periodizarea modernă a imperiului.' },
    { author: 'Steven Runciman', title: 'The Fall of Constantinople 1453', year: '1965', kind: 'estudio', note: 'Povestirea de referință a asediului final; același autor a scris și o istorie critică a cruciadelor.' },
    { author: 'Averil Cameron', title: 'The Byzantines', year: '2006', kind: 'estudio', note: 'Sinteză scurtă, ținta ei fiind risipirea locurilor comune despre Bizanț.' },
    { author: 'Anthony Kaldellis', title: 'The Byzantine Republic', year: '2015', kind: 'estudio', note: 'Propune citirea Bizanțului ca republică romană cu legitimitate populară, nu ca autocrație teocratică.' },
    { author: 'Judith Herrin', title: 'Byzantium: The Surprising Life of a Medieval Empire', year: '2007', kind: 'estudio', note: 'Sinteză limpede și la zi, atentă la viața de fiecare zi și la rolul femeilor.' },
  ],
  documents: [
    {
      section: 1,
      title: 'De ce poruncește Iustinian să se adune dreptul',
      text: [
        'Am aflat că legile, purtate din vremea întemeierii cetății Romei, se aflau într-o încurcătură ce se întindea la nesfârșit și pe care nicio putere omenească nu o putea cuprinde.',
        'De aceea am hotărât să adunăm într-un singur trup ceea ce e de folos în toate acestea, să înlăturăm ce se repetă și ce se împotrivește unul altuia, și să dăm tuturor puterea unei singure legi.',
      ].join('\n\n'),
      source: 'Constituția Deo auctore, prefața Digestelor. Constantinopol, 530.',
      note: 'Versiune proprie după latină.',
      question: 'Problema pe care o zugrăvește Iustinian nu e lipsa legilor, ci prisosul și dezordinea lor. De ce e o strângere laolaltă a lor un act de putere politică, și nu doar o muncă de arhivă?',
    },
  ],
  images: [
    {
      alt: 'Sfânta Sofia din Istanbul cu marea ei cupolă centrală și minaretele adăugate în vremea otomană',
      caption: 'Sfânta Sofia, terminată în 537 sub Iustinian.',
    },
    {
      alt: 'Mozaic cu un împărat în mantie purpurie și nimb auriu, înconjurat de clerici, curteni și soldați, toți din față',
      caption: 'Iustinian și alaiul lui în San Vitale din Ravenna, pe la 547. Împăratul apare între episcop și armată: e capul celor două puteri.',
    },
    {
      alt: 'Miniatură medievală cu două corăbii față în față; dintr-una țâșnește un jet de flăcări spre cealaltă',
      caption: 'Focul grecesc în Cronica Skylitzes de la Madrid, secolul al XII-lea. Rețeta era taină de stat și s-a pierdut.',
    },
    {
      alt: 'Dublă linie de zid din cărămidă și piatră cu turnuri pătrate, în parte surpată, printre vegetație',
      caption: 'Zidurile teodosiene ale Constantinopolului, din secolul al V-lea. Au ținut o mie de ani; au cedat în 1204 în fața cruciaților mai înainte decât în 1453 în fața otomanilor.',
    },
  ],
  questions: [
    {
      question: 'Cum se numeau pe ei înșiși cei numiți azi bizantini?',
      options: ['Eleni', 'Rhomaioi, adică romani', 'Bizantini', 'Ortodocși'],
      explanation: 'Termenul „bizantin” l-a născocit Hieronymus Wolf în 1557. Statul lor era, fără întrerupere, Imperiul Roman, iar turcii numeau Rum Anatolia din acest motiv.',
    },
    {
      question: 'Ce rol politic a avut tăgăduirea numelui de „romană” pentru Constantinopol?',
      options: [
        'Înlesnirea comerțului cu Veneția',
        'Rezervarea continuității romane pentru Occident, unde Sfântul Imperiu pretindea acest titlu',
        'Deosebirea greacă de latină',
        'Îndreptățirea cuceririi otomane',
      ],
      explanation: 'Din vremea Iluminismului s-a adăugat disprețul lui Montesquieu și al lui Gibbon, de unde vine folosirea peiorativă a adjectivului „bizantin”.',
    },
    {
      question: 'Care a fost lucrarea cea mai trainică a domniei lui Iustinian?',
      options: [
        'Recucerirea Italiei',
        'Corpus Iuris Civilis, care a rânduit o mie de ani de jurisprudență romană',
        'Ridicarea zidului lui Anastasie',
        'Trecerea slavilor la creștinism',
      ],
      explanation: 'Digestele au păstrat fragmente din juriști clasici pierduți. Redescoperirea lor la Bologna, în secolul al XI-lea, a întemeiat știința juridică europeană.',
    },
    {
      question: 'Ce parte din venituri a pierdut Bizanțul cu cuceririle arabe din secolul al VII-lea?',
      options: ['O cincime', 'Aproape trei sferturi', 'Nimic de seamă', 'Exact jumătate'],
      explanation: 'A pierdut Siria, Palestina, Egiptul și nordul Africii, provinciile lui cele mai bogate. Supraviețuirea a cerut rezidirea deplină a statului.',
    },
    {
      question: 'În ce consta sistemul de theme?',
      options: [
        'Un impozit pe comerțul pe mare',
        'Circumscripții sub comandă militară unde soldații primeau pământuri în schimbul unei slujbe ereditare',
        'O ierarhie de mănăstiri imperiale',
        'Un sistem de alianțe cu slavii',
      ],
      explanation: 'A scăzut mult costul armatei prin înlăturarea legăturii cu solda în bani, și a înrădăcinat apărarea în populația de la fața locului.',
    },
    {
      question: 'De ce au fost hotărâtoare asediile arabe ale Constantinopolului din 674-678 și 717-718?',
      options: [
        'Fiindcă au pus capăt Imperiului Bizantin',
        'Fiindcă au oprit expansiunea islamică spre Europa răsăriteană vreme de secole',
        'Fiindcă au pricinuit schisma cu Roma',
        'Fiindcă au distrus Sfânta Sofia',
      ],
      explanation: 'Zidurile teodosiene, lanțul de peste Cornul de Aur și focul grecesc au îngăduit rezistența. E unul dintre evenimentele cu urmările cele mai mari din istoria europeană timpurie.',
    },
    {
      question: 'Care era argumentul hristologic al iconodulilor?',
      options: [
        'Că icoanele erau de folos pentru învățarea celor neștiutori de carte',
        'Că, dacă Dumnezeu s-a făcut trup, acel trup se poate înfățișa, iar a tăgădui asta înseamnă a tăgădui Întruparea',
        'Că icoanele aveau putere de minune proprie',
        'Că Biblia poruncea făurirea de chipuri',
      ],
      explanation: 'Ioan Damaschinul a adăugat deosebirea dintre latrie, închinarea cuvenită numai lui Dumnezeu, și proskynesis, cinstirea îndreptată spre prototip prin icoană.',
    },
    {
      question: 'Ce problemă de izvoare ridică studiul iconoclasmului?',
      options: [
        'Că nu s-a păstrat niciun text din acea vreme',
        'Că textele iconoclaste au fost distruse și se cunosc numai din răspunsurile potrivnicilor lor',
        'Că sunt scrise în latină',
        'Că au fost alcătuite în secolul al XIX-lea',
      ],
      explanation: 'Înclinarea e statornică: învingătorii și-au păstrat versiunea și au înlăturat-o pe cealaltă, ceea ce cere o grijă necontenită.',
    },
    {
      question: 'Cu ce s-a deosebit tiparul misionar bizantin de cel latin?',
      options: [
        'Cu faptul că nu tălmăcea Scripturile',
        'Cu faptul că a primit liturghia în limba de rând și a întocmit un alfabet pentru slavă',
        'Cu faptul că evangheliza cu sila',
        'Cu faptul că cerea celibat de la cei care treceau la creștinism',
      ],
      explanation: 'Chiril și Metodie au întocmit glagoliticul, din care s-a tras chirilica. Asta a dat popoarelor slave o cultură scrisă a lor.',
    },
    {
      question: 'Care era deosebirea de temelie dintre Roma și Constantinopol despre autoritatea bisericească?',
      options: [
        'Niciuna: se certau doar pe calendar',
        'Roma pretindea o întâietate de jurisdicție universală; Constantinopolul apăra pentarhia, cu Roma având doar întâietate de cinste',
        'Constantinopolul nu îl recunoștea pe papă drept episcop',
        'Roma respingea sinoadele',
      ],
      explanation: 'La asta se adăugau Filioque, celibatul clerului latin și azima. Anatemele din 1054 au fost o întâmplare mică, mărită mai apoi de istorie.',
    },
    {
      question: 'Ce a făcut cu neputință de întors ruptura dintre Bisericile de Răsărit și de Apus?',
      options: [
        'Anatemele reciproce din 1054',
        'Jefuirea Constantinopolului de către A Patra Cruciadă, în 1204',
        'Sinodul de la Niceea',
        'Trecerea Rusiei Kievene la creștinism',
      ],
      explanation: 'Distrugerea de biserici și pângărirea de moaște au stârnit o pică pe care încercările de unire de la Lyon (1274) și Florența (1439) nu au depășit-o niciodată.',
    },
    {
      question: 'Ce urmare a avut înfrângerea de la Manzikert din 1071?',
      options: [
        'Pierderea Egiptului',
        'Deschiderea Anatoliei, rezerva de căpetenie de recruți și de dări, spre ocuparea turcă',
        'Căderea numaidecât a Constantinopolului',
        'Sfârșitul dinastiei Comnene',
      ],
      explanation: 'Refacerea comnenă din secolul al XII-lea s-a sprijinit pe înlesniri comerciale date Veneției și Genovei, care pe termen lung au scurs veniturile vamale ale statului.',
    },
    {
      question: 'Ce înseamnă fraza pusă pe seama unui înalt dregător bizantin despre turban și tiară?',
      options: [
        'Că preferau alianța cu Veneția',
        'Că preferau stăpânirea otomană, care îngăduia păstrarea credinței, unirii cu Roma',
        'Că respingeau orice religie',
        'Că sprijineau trecerea la islam',
      ],
      explanation: 'Rezumă împotrivirea cumplită a poporului față de unirile bisericești, simțite mai degrabă ca supunere față de papalitate decât ca împăcare.',
    },
    {
      question: 'Ce le-a îngăduit otomanilor să dărâme în 1453 niște ziduri ce rezistaseră o mie de ani?',
      options: [
        'O trădare dinăuntru',
        'Artileria de asediu de calibru mare',
        'Un cutremur mai dinainte',
        'Retragerea flotei venețiene',
      ],
      explanation: 'Vreo 7.000 de apărători au înfruntat zeci de mii de asediatori cu tunuri în stare să bată zidurile teodosiene. Constantin al XI-lea a murit luptând.',
    },
    {
      question: 'Ce efect a avut căderea Constantinopolului asupra Renașterii?',
      options: [
        'Niciunul: au fost procese fără legătură',
        'Plecarea cărturarilor greci în Italia cu manuscrisele lor a hrănit umanismul',
        'A pricinuit închiderea universităților italiene',
        'A impus folosirea greacă în toată Europa',
      ],
      explanation: 'A mai stârnit și căutarea drumurilor pe mare spre Asia și i-a îngăduit Moscovei să ceară moștenirea ortodoxă drept „a treia Romă”.',
    },
  ],
}
