import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/absolutismo.ts`. Aceeași formă: 6
   secțiuni în aceeași ordine, 12 date, 14 concepte, 3 dezbateri, 21 de surse, un
   document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const absolutismoRo: TopicTranslation = {
  title: 'Statul modern și absolutismul',
  description: 'Cum au clădit niște monarhii compuse și îndatorate administrație, armată și impozite fără a înceta să negocieze cu elitele.',
  years: '1576–1715',
  summary:
    'Niciun rege european din secolele al XVI-lea și al XVII-lea nu a cârmuit teritorii omogene și nici nu a poruncit unor supuși egali. Poruncea peste niște adunături de regate cu legi proprii, dobândite prin moștenire, căsătorie sau cucerire, în care fiecare provincie își negocia impozitele, iar fiecare tribunal își apăra jurisdicția. Pe acest material s-a clădit ce a numit istoriografia absolutism: mai multă armată, mai multe impozite, mai mulți slujbași și o teorie a suveranității care îl așeza pe monarh deasupra legii pozitive. Problema este că acest cuvânt făgăduiește o putere pe care niciun document de arhivă nu o confirmă. Discuția ultimelor decenii nu este dacă Ludovic al XIV-lea era puternic sau slab, ci ce fel de putere era a lui: una care creștea tocmai fiindcă cumpăra, cointeresa și împărțea foloase între elitele pe care spunea că le supune.',
  keyDates: [
    { date: '1576', event: 'Jean Bodin publică *Cele șase cărți ale Republicii* și definește suveranitatea drept putere veșnică și absolută.' },
    { date: '1624–1642', event: 'Ministerul lui Richelieu: rațiunea de stat, intendenții și intrarea în Războiul de Treizeci de Ani.' },
    { date: '1640', event: 'Răscoale în același timp în Catalonia și Portugalia, împotriva Monarhiei Hispanice.' },
    { date: '1648–1653', event: 'Fronda: parlamentari și mari seniori se ridică împotriva fiscalității de război.' },
    { date: '1651', event: 'Hobbes publică *Leviathan*: suveranitatea se naște dintr-un pact, nu din dreptul divin.' },
    { date: '1661', event: 'Moartea lui Mazarin. Ludovic al XIV-lea își asumă guvernarea personală și nu numește prim-ministru.' },
    { date: '1665–1683', event: 'Colbert în fruntea finanțelor: manufacturi regale, tarife și marină de război.' },
    { date: '1682', event: 'Curtea se așază la Versailles în chip statornic.' },
    { date: '1685', event: 'Edictul de la Fontainebleau: revocarea Edictului de la Nantes și emigrarea hughenoților.' },
    { date: '1688–1689', event: 'Revoluția Glorioasă și Bill of Rights: în Anglia, coroana ajunge sub Parlament.' },
    { date: '1700–1714', event: 'Războiul de Succesiune spaniolă; Decretele Noii Rânduieli desființează fuero-urile Coroanei Aragonului.' },
    { date: '1715', event: 'Moare Ludovic al XIV-lea, după cincizeci și patru de ani de guvernare personală și cu o vistierie ruinată.' },
  ],
  sections: [
    {
      title: 'Monarhii compuse, nu state',
      body: [
        'Unitatea politică proprie Europei moderne nu este statul național, ci ceea ce John Elliott a numit în 1992 monarhia compusă: un ansamblu de regate, principate și senioralități adunate sub același suveran, dar păstrându-și fiecare legile, cortesurile, monedele, vămile și privilegiile. Carol al V-lea domnea în Castilia, Aragon, Napoli, Țările de Jos și Imperiu cu titluri diferite și cu îndatoriri diferite în fiecare. Stuarții au moștenit în 1603 trei regate cu trei biserici diferite. Chiar și Franța, cea mai unită dintre toate, deosebea între țări de stări, care își negociau contribuția, și țări de alegere, unde coroana o fixa.',
        'Elliott a deosebit două forme de unire. Cea *aeque principaliter* păstra neatinse instituțiile teritoriului alipit, cum era Aragonul înăuntrul Monarhiei Hispanice. Unirea accesorie asimila teritoriul nucleului, cum a fost Țara Galilor la Anglia, în 1536. Prima cumpăra loialitate cu prețul neputinței fiscale; a doua câștiga resurse cu prețul împotrivirii. Aproape toate crizele secolului al XVII-lea se nasc din încercarea de a preface prima în a doua.',
        'Acea încercare are nume și dată în Monarhia Hispanică: Uniunea Armelor, propusă de contele-duce de Olivares în 1625, care cerea fiecărui regat să dea soldați și bani în proporție cu populația lui. S-a lovit de logica înțelegerii pactate din Catalonia și din Portugalia și a dus la cele două răscoale din 1640. Portugalia s-a desprins; Catalonia s-a întors în 1652 cu constituțiile ei păstrate formal neatinse.',
        'Concluzia istoriografică contează: a vorbi despre clădirea statului modern ca și cum un centru rânduitor ar fi biruit niște margini vechi descrie prost procesul. Ce a fost, în schimb, a fost o negociere neîntreruptă, în care centrul obținea resurse în schimbul confirmării privilegiilor, al împărțirii dregătoriilor și al respectării jurisdicțiilor. Când înceta să mai plătească acest preț, izbucneau răscoale.',
      ].join('\n\n'),
      callout:
        'Monarhia compusă nu era o ciudățenie pe drumul spre statul național: era forma obișnuită de a rândui puterea în Europa, între 1500 și 1700.',
    },
    {
      title: 'Războiul ca motor fiscal',
      body: [
        'Ce a împins creșterea aparatului de stat nu a fost o idee de ordine, ci o nevoie de bani, iar nevoia venea din război. Michael Roberts a formulat în 1955 teza revoluției militare: între 1560 și 1660, trecerea de la cavaleria grea la infanteria cu arme de foc, disciplina descărcărilor pe rânduri, creșterea mărimii armatelor și complexitatea logisticii au silit statele să strângă și să administreze cum nu o mai făcuseră până atunci.',
        'Geoffrey Parker a îndreptat teza în 1976 și în 1988, mutând greutatea spre fortificația bastionată, *trace italienne*, care a făcut asediile fără sfârșit și a înmulțit efectivele trebuincioase pentru a asedia și a păzi cetăți. Exemplul lui cel mai mare este armata din Flandra, care a trecut de la vreo zece mii de oameni la peste optzeci de mii. Jeremy Black a răspuns în 1991 că schimbările hotărâtoare au fost mai târzii, între 1660 și 1760, cu armatele permanente ale epocii lui Ludovic al XIV-lea.',
        'Oricare ar fi cronologia preferată, urmarea fiscală este aceeași. Veniturile coroanei franceze s-au înmulțit de peste trei ori între 1600 și 1660, iar cea mai mare parte s-a dus în război și în plata datoriei. Ca să strângă fără o administrație proprie, monarhiile au apelat la trei scurtături: arendarea impozitelor unor finanțiști particulari, vânzarea dregătoriilor publice cu caracter ereditar și îndatorarea prin renta de stat.',
        'Vânzarea dregătoriilor merită atenție, fiindcă explică limitele puterii regale. Vânzând o dregătorie, coroana încasa dinainte și crea, în același timp, un proprietar: dregătorul nu putea fi îndepărtat, își trecea funcția moștenitorilor și își apăra averea în fața regelui. Franța a ajuns să aibă zeci de mii de dregătorii vândute. Absolutismul francez s-a finanțat înstrăinându-și chiar puterea de a porunci propriilor administratori.',
        'Răspunsul la acest blocaj au fost comisarii revocabili și, mai ales, intendenții, trimiși în provincii cu puteri largi în justiție, poliție și vistierie, care puteau fi înlăturați fiindcă nu cumpăraseră dregătoria. Generalizarea lor de la Richelieu încoace și întărirea lor sub Colbert marchează deosebirea reală dintre administrația secolului al XVI-lea și cea a secolului al XVIII-lea.',
      ].join('\n\n'),
    },
    {
      title: 'Teoria: suveranitate, rațiune de stat și drept divin',
      body: [
        'Jean Bodin a scris *Cele șase cărți ale Republicii* în 1576, în plin război civil religios francez, iar țelul lui era practic: să găsească un principiu de autoritate pe care nicio facțiune să nu îl poată discuta. A definit suveranitatea drept puterea veșnică și absolută a unei republici, nedespărțită și nedelegată, a cărei însemn principal este să dea legea fără încuviințarea nimănui. Dar chiar Bodin îl supunea pe suveran legii divine și firești și legilor de temelie ale regatului și îi refuza dreptul de a confisca averea supușilor fără temei.',
        'Această nuanță este esențială: absolut însemna *legibus solutus*, eliberat de legea pozitivă dinainte, nu fără margini și nici arbitrar. Un rege absolut putea legifera fără Cortesuri, dar nu putea schimba legea de succesiune, nici impozita fără pricină dreaptă, nici dispune de domeniul coroanei.',
        'Rațiunea de stat, răspândită de Giovanni Botero în 1589, împotriva citirii scandaloase a lui Machiavelli, a oferit îndreptățirea practică: sunt fapte pe care morala privată le osândește și pe care păstrarea statului le cere. Richelieu a pus-o în practică aliindu-se cu prinții protestanți împotriva Habsburgilor catolici, în timp ce îi supunea pe hughenoții francezi.',
        'Formularea teologică cea mai deplină a venit târziu, cu Bossuet: puterea regală este sfântă, părintească, absolută și supusă rațiunii, iar regele răspunde numai în fața lui Dumnezeu. Se cuvine băgat de seamă că a fost publicată în 1709, când modelul intra în criză. Împotriva ei, Hobbes întemeiase deja în 1651 suveranitatea absolută pe un pact între indivizi temători, nu pe voința divină: o îndreptățire lumească, mult mai primejdioasă pe termen lung, fiindcă ce se întemeiază pe un pact poate fi discutat în termenii lui.',
      ].join('\n\n'),
      callout:
        'Absolut voia să spună eliberat de legea pozitivă dinainte, nu fără margini. Niciun gânditor al secolului al XVII-lea nu a apărat ideea că regele ar putea face pe de-a-ntregul ce voia.',
    },
    {
      title: 'Ludovic al XIV-lea: chipul, curtea și prețul',
      body: [
        'Ludovic al XIV-lea și-a asumat guvernarea personală în 1661, la moartea lui Mazarin, și nu a mai numit niciodată prim-ministru. A cârmuit cu consilii mici și cu secretari de stat ieșiți din familii de slujbă, nu din marea nobilime. Aceasta a fost hotărârea cea mai eficace a domniei lui: să despartă onoarea, rămasă în mâinile marilor seniori, de puterea efectivă, trecută în mâinile unor administratori atârnați de voința regală.',
        'Versailles a fost unealta acestei despărțiri. Norbert Elias a tâlcuit în *Societatea de curte* că eticheta o prefăcea pe nobilime într-un grup dependent, silit să cheltuiască pentru înfățișare și să se întreacă pentru semne de favoare pe care numai regele le împărțea. Această citire are o margine dovedită: nu toată nobilimea trăia la Versailles, multe case și-au păstrat neatinsă puterea provincială, iar curtea era și o piață de dregătorii și de pensii din care marii seniori ieșeau îmbogățiți.',
        'Peter Burke a arătat în 1992 că imaginea Regelui Soare a fost o făurire anume și rânduită: academii, medalii comemorative, portrete, baleturi, istoriografie oficială și o Petite Académie însărcinată să vegheze programul simbolic. A studia propaganda drept sursă nu înseamnă a dezvălui minciuna, ci a măsura efortul cu care s-a produs înfățișarea unei puteri fără crăpătură.',
        'Costul real a fost uriaș. Colbert a încercat să finanțeze mașinăria prin mercantilism: manufacturi regale, companii privilegiate, tarife protecționiste, marină de război și reguli amănunțite despre calitatea țesăturilor. A mers cât timp a fost o pace relativă; războaiele neîntrerupte din 1672 încoace au înghițit veniturile, au silit la crearea unor impozite noi care atingeau, pentru prima dată, și pe privilegiați, precum capitația din 1695 și dijma regală din 1710, și au lăsat o datorie pe care niciun urmaș nu a izbutit să o stingă.',
        'Revocarea Edictului de la Nantes, în 1685, rezumă modelul și hiba lui. Căuta un regat cu o singură credință, drept condiție a ascultării; a produs emigrarea a între două sute și trei sute de mii de hughenoți, mulți dintre ei meșteșugari și negustori pricepuți, care și-au dus meseriile și propaganda antifranceză în Olanda, Anglia, Brandenburg și Elveția. A fost o dovadă de forță plătită scump.',
      ].join('\n\n'),
    },
    {
      title: 'Dezbaterea: a existat oare absolutismul?',
      body: [
        'Discuția clasică i-a pus față în față, în anii patruzeci și cincizeci, pe Boris Porchnev și pe Roland Mousnier, în legătură cu răscoalele populare franceze dinainte de Frondă. Porchnev, dinspre marxismul sovietic, le-a citit ca luptă de clasă: statul absolut era unealta unei nobilimi feudale amenințate, iar răscoalele, împotrivirea populară față de fiscalitatea acelei nobilimi. Mousnier a răspuns că societatea Vechiului Regim nu se rânduia pe clase, ci pe stări și statuturi, și că răscoalele erau conduse de notabili locali și adunau pe verticală întreaga societate provincială împotriva agenților fiscali ai centrului.',
        'Perry Anderson a propus în 1974 o sinteză marxistă diferită: statul absolutist a fost un aparat de dominație feudală mutat și așezat din nou, un mecanism prin care se păstra scoaterea surplusului țărănesc atunci când iobăgia dispăruse în Occident. Modelul lui are meritul de a compara Răsăritul cu Apusul și cusurul de a deduce politica din structura economică.',
        'Cotitura revizionistă a venit cu studiile provinciale. William Beik a dovedit în 1985, studiind Languedocul, că monarhia nu a biruit elitele regionale: s-a aliat cu ele. Coroana a primit bani și ascultare; notabilii au primit dregătorii, scutiri, controlul cârmuirii locale și sprijin armat împotriva celor de jos. Beik a numit asta colaborare socială, iar formula a prins.',
        'Nicholas Henshall a dus argumentul la extrem, în 1992: absolutismul este un mit istoriografic clădit în secolul al XIX-lea. Contemporanii deosebeau monarhia absolută de monarhia despotică sau tiranică, și o înțelegeau pe prima ca o guvernare legitimă, care respectă proprietatea, religia și corpurile intermediare. Presupusa opoziție dintre un absolutism continental și un constituționalism englez ar fi o construcție retrospectivă.',
        'Starea de azi a chestiunii este nuanțată. Aproape nimeni nu mai susține că absolutismul ar fi fost o putere fără margini, iar termenul se folosește de obicei între ghilimele sau se înlocuiește cu stat fiscal-militar, urmându-l pe John Brewer. Dar a nega orice deosebire dintre Franța și Anglia, în 1700, este a exagera în sens contrar: Revoluția Glorioasă a produs un regim în care impozitele cereau aprobare parlamentară anuală, iar acea deosebire instituțională a avut urmări fiscale și de credit uriașe.',
      ].join('\n\n'),
      callout:
        'Paradoxul lui Brewer: Anglia parlamentară strângea, pe cap de locuitor, mai mult decât Franța absolută. Consimțământul s-a dovedit a fi o tehnologie fiscală mai bună decât porunca.',
    },
    {
      title: 'Alte căi europene',
      body: [
        'Anglia a mers pe un drum deosebit, din motive în bună parte fiscale. Stuarții au încercat să cârmuiască fără Parlament și să strângă bani prin mijloace discutate, precum ship money-ul lui Carol I; rezultatul a fost un război civil, o republică, o restaurație și, în cele din urmă, Revoluția Glorioasă din 1688-1689. Bill of Rights a interzis ținerea unei armate permanente pe timp de pace și strângerea impozitelor fără încuviințarea Parlamentului. Monarhia a pierdut din autonomie și a câștigat credit: întemeierea Băncii Angliei, în 1694, și datoria publică garantată de Parlament au îngăduit finanțarea războaielor la o dobândă pe care Franța nu o putea egala.',
        'Monarhia Hispanică a mers pe drumul invers. După Războiul de Succesiune, Decretele Noii Rânduieli au desființat, între 1707 și 1716, instituțiile proprii ale Aragonului, Valenciei, Mallorcăi și Cataloniei și au impus modelul castilian, cu căpitani generali, audiențe și intendenți. A fost prefacerea unei monarhii compuse într-o unire accesorie, făcută prin drept de cucerire.',
        'Republica nobiliară polono-lituaniană arată extremitatea opusă. Alegerea regelui de către nobilime, pactele conventa și liberum veto, care îngăduia unui singur deputat să anuleze dieta întreagă, au produs un stat incapabil să strângă bani și să țină o armată. Între 1772 și 1795, vecinii i-au împărțit teritoriul. Slăbiciunea instituțională nu a fost o cale liberală alternativă absolutismului: a fost condiția dinaintea dispariției.',
        'Rusia arată o a treia cale. Petru I a impus din 1698 o occidentalizare silnică: capitală nouă, o tablă a rangurilor care lega statutul nobiliar de slujba adusă statului, capitație, armată permanentă și supunerea Bisericii unui Sinod. Toate acestea peste o iobăgie țărănească înăsprită în același timp. Anderson a subliniat paradoxul: în Europa de Est, clădirea statului modern s-a petrecut odată cu întărirea, nu cu dispariția iobăgiei.',
        'Comparate, cele patru drumuri dezmint orice poveste a unei căi unice. Ce a hotărât rezultatul nu a fost voința regilor, ci legătura anume dintre coroană, elitele funciare, orașe și presiunea militară din afară, în fiecare teritoriu.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Monarhie compusă', definition: 'Ansamblu de regate cu legi și instituții proprii sub același suveran. Categorie a lui John Elliott pentru forma obișnuită a puterii moderne.' },
    { term: 'Aeque principaliter', definition: 'Unire ce păstrează neatinse instituțiile teritoriului alipit, spre deosebire de unirea accesorie, care îl asimilează nucleului.' },
    { term: 'Suveranitate', definition: 'La Bodin, puterea veșnică, absolută și nedespărțită de a da legea fără încuviințare. Supusă, totuși, legii divine, firești și de temelie.' },
    { term: 'Legibus solutus', definition: 'Eliberat de legea pozitivă dinainte. Înțelesul tehnic al lui „absolut”: nu înseamnă putere fără margini sau arbitrară.' },
    { term: 'Rațiune de stat', definition: 'Doctrină care îngăduie fapte potrivnice moralei private, dacă păstrarea statului o cere. Răspândită de Botero împotriva lui Machiavelli.' },
    { term: 'Vânzarea dregătoriilor', definition: 'Vânzarea funcțiilor publice ereditare. Finanța coroana pe termen scurt și crea slujbași proprietari, cu neputință de îndepărtat.' },
    { term: 'Intendent', definition: 'Comisar revocabil, trimis în provincie cu puteri de justiție, poliție și vistierie. Unealtă pentru a ocoli dregătorii vânduți.' },
    { term: 'Fronda', definition: 'Ciclu de răscoale franceze din 1648-1653, condus de parlamentari și de mari seniori împotriva fiscalității de război și a comisarilor.' },
    { term: 'Mercantilism', definition: 'Politică a balanței comerciale favorabile, prin tarife, manufacturi privilegiate și marină. În Franța, colbertism.' },
    { term: 'Societate de stări', definition: 'Model al lui Mousnier: ierarhia socială se rânduiește după statut și onoare recunoscute juridic, nu după poziția economică.' },
    { term: 'Colaborare socială', definition: 'Teza lui Beik: coroana nu a biruit elitele provinciale, ci a înțeles cu ele, împărțind dregătorii, scutiri și sprijin armat.' },
    { term: 'Stat fiscal-militar', definition: 'Concept al lui John Brewer: aparat de strângere de bani, de datorie și de birocrație, ridicat ca să susțină războiul neîntrerupt.' },
    { term: 'Trace italienne', definition: 'Fortificație bastionată cu ziduri joase și groase. Pentru Parker, cauza principală a creșterii mărimii armatelor.' },
    { term: 'Liberum veto', definition: 'Puterea unui singur deputat polonez de a anula dieta întreagă. A blocat fiscalitatea și armata până la împărțiri.' },
  ],
  debates: [
    {
      question: 'A existat cu adevărat absolutismul?',
      positions: [
        {
          school: 'Citire tradițională (Mousnier și istoriografia instituțională)',
          argument:
            'Între 1600 și 1715 s-a consolidat un tip de monarhie cu suveranitate nedespărțită, armată permanentă, fiscalitate proprie și administrație comisarială care a rupt cu guvernarea pactată medievală.',
        },
        {
          school: 'Revizionism (Nicholas Henshall, 1992)',
          argument:
            'Absolutismul este o etichetă a secolului al XIX-lea. Contemporanii opuneau monarhia absolută despotismului, nu constituționalismului, iar niciun rege nu a guvernat fără corpuri intermediare, privilegii sau negociere.',
        },
      ],
      state:
        'Predomină o poziție de mijloc: termenul se păstrează între ghilimele sau se înlocuiește cu stat fiscal-militar, dar se recunoaște că deosebirea instituțională dintre Franța anului 1700 și Anglia de după 1689 a fost reală și a avut urmări fiscale măsurabile.',
    },
    {
      question: 'Cui slujea statul absolut?',
      positions: [
        {
          school: 'Reacție feudală (Porchnev, 1948)',
          argument:
            'Statul absolut a fost unealta unei nobilimi feudale amenințate de dezvoltarea burgheză și de răscoalele populare, pe care le-a reprimat cu fiscalitate și cu armată.',
        },
        {
          school: 'Societate de stări (Mousnier)',
          argument:
            'Societatea nu se rânduia pe clase, ci pe statut și pe loialități verticale; răscoalele adunau întreaga societate provincială, condusă de notabili, împotriva agenților fiscali ai centrului.',
        },
        {
          school: 'Colaborare socială (Beik, 1985)',
          argument:
            'În Languedoc, coroana nu a biruit elitele: a înțeles cu ele. A primit bani și ascultare în schimbul dregătoriilor, al scutirilor și al sprijinului armat împotriva celor de jos.',
        },
      ],
      state:
        'Citirea lui Beik este astăzi cea mai primită ca descriere a funcționării de zi cu zi. I se obiectează că explică bine stabilitatea și mai prost momentele de ruptură, când colaborarea se rupe.',
    },
    {
      question: 'A existat o revoluție militară, și când?',
      positions: [
        {
          school: 'Roberts (1955)',
          argument:
            'Între 1560 și 1660, infanteria cu arme de foc, disciplina tactică și mărimea armatelor au schimbat războiul și au silit la clădirea unei administrații fiscale.',
        },
        {
          school: 'Parker (1976 și 1988)',
          argument:
            'Motorul a fost fortificația bastionată: asediile fără sfârșit au înmulțit efectivele trebuincioase. Procesul începe mai devreme, în Italia anului 1500, și se întinde pe cale navală și colonială.',
        },
        {
          school: 'Black (1991)',
          argument:
            'Schimbările hotărâtoare sunt de după 1660: armate permanente, uniforme, cazărmi și logistică de stat, în epoca lui Ludovic al XIV-lea și a războiului dinastic din secolul al XVIII-lea.',
        },
      ],
      state:
        'Conceptul rămâne o unealtă de gândire, cu cronologia deschisă. Există acord asupra urmării: oricare ar fi fost șirul faptelor, războiul a fost motorul principal al clădirii fiscale și administrative a statului.',
    },
  ],
  sources: [
    { author: 'Jean Bodin', title: 'Cele șase cărți ale Republicii', year: '1576', kind: 'primaria', note: 'Definește suveranitatea drept putere veșnică și absolută, dar supusă legii divine, firești și de temelie.' },
    { author: 'Giovanni Botero', title: 'Despre rațiunea de stat', year: '1589', kind: 'primaria', note: 'Răspândește rațiunea de stat într-o versiune primită de Contrareformă.' },
    { author: 'Cardinalul Richelieu', title: 'Testament politic', year: 'c. 1638', kind: 'primaria', note: 'Manual de guvernare: întâietatea interesului statului asupra conștiinței ministrului.' },
    { author: 'Thomas Hobbes', title: 'Leviathan', year: '1651', kind: 'primaria', note: 'Întemeiază suveranitatea absolută pe un pact între indivizi, nu pe dreptul divin.' },
    { author: 'Ludovic al XIV-lea', title: 'Memorii pentru învățătura delfinului', year: 'c. 1670', kind: 'primaria', note: 'Expunerea meseriei de rege, scrisă de monarh și de secretarii lui.' },
    { author: 'Coroana franceză', title: 'Edictul de la Fontainebleau', year: '1685', kind: 'primaria', note: 'Revocă Edictul de la Nantes. Pricinuiește emigrarea a între 200.000 și 300.000 de hughenoți.' },
    { author: 'Parlamentul englez', title: 'Bill of Rights', year: '1689', kind: 'primaria', note: 'Interzice armata permanentă pe timp de pace și impozitele fără încuviințarea Parlamentului.' },
    { author: 'John Locke', title: 'Al doilea tratat despre cârmuirea civilă', year: '1689', kind: 'primaria', note: 'Puterea politică întemeiată pe consimțământ și mărginită de proprietate; dreptul la împotrivire.' },
    { author: 'Ducele de Saint-Simon', title: 'Memorii', year: '1691-1723', kind: 'primaria', note: 'Portret dinăuntru al curții de la Versailles. Sursă neapărat trebuincioasă și foarte părtinitoare: autorul e plin de resentiment.' },
    { author: 'Jacques-Bénigne Bossuet', title: 'Politica scoasă din Sfintele Scripturi', year: '1709', kind: 'primaria', note: 'Formulare teologică a dreptului divin, publicată tocmai când modelul intra în criză.' },
    { author: 'Filip al V-lea', title: 'Decretele Noii Rânduieli', year: '1707-1716', kind: 'primaria', note: 'Desființează instituțiile Coroanei Aragonului prin drept de cucerire.' },
    { author: 'Boris Porchnev', title: 'Răscoalele populare din Franța dinainte de Frondă', year: '1948', kind: 'estudio', note: 'Citire de clasă: statul absolut ca unealtă a unei nobilimi feudale amenințate.' },
    { author: 'Roland Mousnier', title: 'Furii țărănești', year: '1967', kind: 'estudio', note: 'Răspuns dat lui Porchnev: societate de stări, loialități verticale și răscoale conduse de notabili.' },
    { author: 'Norbert Elias', title: 'Societatea de curte', year: '1969', kind: 'estudio', note: 'Eticheta ca mecanism de îmblânzire a nobilimii. Discutat de studiile provinciale.' },
    { author: 'Perry Anderson', title: 'Statul absolutist', year: '1974', kind: 'estudio', note: 'Aparat de dominație feudală mutat și așezat din nou; comparație sistematică între Apus și Răsărit.' },
    { author: 'William Beik', title: 'Absolutism and Society in Seventeenth-Century France', year: '1985', kind: 'estudio', note: 'Colaborarea socială dintre coroană și elitele din Languedoc, ca cheie a sistemului.' },
    { author: 'Geoffrey Parker', title: 'Revoluția militară', year: '1988', kind: 'estudio', note: 'Fortificația bastionată ca motor al creșterii armatelor și al fiscalității.' },
    { author: 'John Brewer', title: 'The Sinews of Power', year: '1989', kind: 'estudio', note: 'Statul fiscal-militar britanic: consimțământ parlamentar, datorie ieftină și întâietate la strângerea banilor.' },
    { author: 'John H. Elliott', title: 'A Europe of Composite Monarchies', year: '1992', kind: 'estudio', note: 'Formulează categoria de monarhie compusă și deosebește unirea aeque principaliter de cea accesorie.' },
    { author: 'Nicholas Henshall', title: 'The Myth of Absolutism', year: '1992', kind: 'estudio', note: 'Neagă opoziția dintre absolutismul continental și constituționalismul englez, ca retroproiecție.' },
    { author: 'Peter Burke', title: 'Făurirea lui Ludovic al XIV-lea', year: '1992', kind: 'estudio', note: 'Imaginea Regelui Soare ca program anume de producție simbolică.' },
  ],
  documents: [
    {
      section: 2,
      title: 'Bodin definește suveranitatea',
      text: [
        'Suveranitatea este puterea absolută și veșnică a unei Republici.',
        'Este neapărat ca cei care sunt suverani să nu fie în niciun fel supuși poruncii altcuiva și să poată da lege supușilor și să desființeze legile nefolositoare ca să facă altele.',
        'Dar în ce privește legile divine și firești, toți principii pământului le sunt supuși și nu stă în puterea lor să le calce, dacă nu vor să fie vinovați de lezmajestate divină.',
      ].join('\n\n'),
      source: 'Jean Bodin, Cele șase cărți ale Republicii, I, 8. Paris, 1576.',
      note: 'Versiune proprie după franceză.',
      question: 'Bodin spune absolută și, totodată, supusă legii divine și firești. Este o contradicție sau însemna altceva? Compar-o cu ce înțelegem azi prin putere absolută.',
    },
  ],
  images: [
    {
      alt: 'Portret în picior al lui Ludovic al XIV-lea, cu mantie de hermină și flori de crin, perucă lungă și sabie la șold',
      caption: 'Ludovic al XIV-lea, portretizat de Hyacinthe Rigaud în 1701.',
    },
    {
      alt: 'Pictură cu o sală în care două grupuri de delegați în haine negre au mâna ridicată deasupra unor documente',
      caption: 'Jurământul păcii de la Münster, de Gerard ter Borch (1648). Optzeci de ani de război se sfârșesc prin recunoașterea independenței olandeze.',
    },
    {
      alt: 'Gravură cu un uriaș încoronat care se ridică din spatele unor dealuri, ținând sabia și toiagul; trupul îi este alcătuit din sute de oameni mici',
      caption: 'Frontispiciul lucrării Leviathan a lui Hobbes (1651). Suveranul nu stă deasupra corpului politic: este făcut din el.',
    },
    {
      alt: 'Vedere aeriană pictată a unui palat cu grădini geometrice, alei și trăsuri sosind pe drumul principal',
      caption: 'Versailles în 1668, de Pierre Patel, încă înainte de marile lărgiri. Curtea slujește ca să fie ținută sub ochi nobilimea, și costă o avere.',
    },
  ],
  questions: [
    {
      question: 'Ce numește categoria de „monarhie compusă” a lui John Elliott?',
      options: [
        'O monarhie cârmuită împreună de mai mulți membri ai aceleiași dinastii',
        'Un ansamblu de regate și teritorii sub același suveran, fiecare cu legile, cortesurile și privilegiile lui',
        'O monarhie electivă supusă controlului unei diete nobiliare',
        'Unirea coroanei cu ierarhia bisericească într-un singur corp politic',
      ],
      explanation: 'Era forma obișnuită a puterii moderne, nu o ciudățenie. Carol al V-lea domnea cu titluri diferite și cu îndatoriri diferite în fiecare dintre teritoriile lui.',
    },
    {
      question: 'În vocabularul juridic al secolului al XVII-lea, ce însemna că un rege era „absolut”?',
      options: [
        'Că voința lui nu avea nicio margine și putea dispune slobod de viețile și de averile supușilor',
        'Că era eliberat de legea pozitivă dinainte, dar supus legii divine, firești și de temelie a regatului',
        'Că unea în persoana lui puterea civilă și preoția',
        'Că guverna fără miniștri și fără consilii',
      ],
      explanation: '*Legibus solutus*. Chiar Bodin îi refuza suveranului dreptul de a confisca averi fără temei sau de a schimba legea de succesiune.',
    },
    {
      question: 'Ce proiect al lui Olivares a dezlănțuit răscoalele din 1640?',
      options: [
        'Izgonirea moriscilor',
        'Uniunea Armelor, care cerea fiecărui regat oameni și bani în proporție cu populația lui',
        'Impunerea castilianei ca unică limbă administrativă',
        'Desființarea Cortesurilor Castiliei',
      ],
      explanation: 'S-a lovit de logica pactată a Cataloniei și a Portugaliei. Portugalia s-a desprins; Catalonia s-a întors în 1652 cu constituțiile ei păstrate formal neatinse.',
    },
    {
      question: 'De ce mărginea vânzarea dregătoriilor puterea regelui care o practica?',
      options: [
        'Fiindcă dregătoriile vândute erau scutite de impozite',
        'Fiindcă cumpărătorul devenea proprietar, cu neputință de îndepărtat, al dregătoriei și o trecea moștenitorilor lui',
        'Fiindcă dregătoriile se vindeau doar străinilor',
        'Fiindcă prețul dregătoriilor era fixat de parlamente',
      ],
      explanation: 'Coroana încasa dinainte și pierdea puterea de a porunci propriilor administratori. Intendenții revocabili s-au născut ca să ocolească acest blocaj.',
    },
    {
      question: 'În ce a mutat Geoffrey Parker teza revoluției militare a lui Michael Roberts?',
      options: [
        'A așezat motorul schimbării în fortificația bastionată și în asediile îndelungate',
        'A negat că ar fi existat vreo schimbare militară însemnată',
        'A pus prefacerea exclusiv pe seama artileriei de câmp franceze',
        'A întârziat tot procesul până în secolul al XVIII-lea',
      ],
      explanation: '*Trace italienne* a înmulțit efectivele trebuincioase pentru a asedia și a păzi. Armata din Flandra a trecut de la vreo zece mii de oameni la peste optzeci de mii.',
    },
    {
      question: 'Ce hotărâre a luat Ludovic al XIV-lea în 1661, la moartea lui Mazarin?',
      options: [
        'A convocat Stările Generale ca să își legitimeze guvernarea',
        'A cârmuit personal, fără să numească prim-ministru, sprijinindu-se pe secretari din familii de slujbă',
        'A lăsat guvernarea pe seama Parlamentului din Paris',
        'A mutat de îndată curtea la Versailles',
      ],
      explanation: 'A despărțit onoarea, lăsată marilor seniori, de puterea efectivă, pusă în mâinile unor administratori atârnați de voința lui. Versailles a venit în 1682.',
    },
    {
      question: 'Potrivit lui Norbert Elias, ce rol avea eticheta de la Versailles?',
      options: [
        'Să economisească cheltuielile de reprezentare ale coroanei',
        'Să o prefacă pe nobilime într-un grup dependent, care se întrecea pentru semne de favoare împărțite numai de rege',
        'Să înlocuiască administrația civilă cu cea casnică',
        'Să împiedice accesul burgheziei la funcțiile publice',
      ],
      explanation: 'Citirea are margini: nu toată nobilimea trăia la curte, multe case și-au păstrat puterea provincială, iar Versailles era și o piață de pensii.',
    },
    {
      question: 'Care a fost urmarea economică cel mai des pomenită a revocării Edictului de la Nantes, din 1685?',
      options: [
        'Falimentul imediat al Băncii Regale',
        'Emigrarea a între 200.000 și 300.000 de hughenoți, mulți meșteșugari și negustori pricepuți, către țări rivale',
        'Sfârșitul comerțului francez cu Levantul',
        'Devalorizarea livrei tourneze',
      ],
      explanation: 'Și-au dus meseriile și propaganda antifranceză în Olanda, Anglia, Brandenburg și Elveția. O dovadă de forță plătită scump.',
    },
    {
      question: 'Ce a susținut William Beik, pornind de la studiul Languedocului?',
      options: [
        'Că monarhia a distrus puterea elitelor provinciale',
        'Că coroana și notabilii locali au colaborat: bani și ascultare în schimbul dregătoriilor, al scutirilor și al sprijinului armat',
        'Că provinciile din sud au rămas pe dinafară fiscalității regale',
        'Că absolutismul francez a fost o copie a modelului spaniol',
      ],
      explanation: '„Colaborarea socială” explică bine stabilitatea sistemului. I se obiectează că explică mai prost momentele de ruptură.',
    },
    {
      question: 'Care este paradoxul fiscal pe care îl arată John Brewer, comparând Anglia cu Franța?',
      options: [
        'Franța strângea mai mult pe cap de locuitor, în ciuda dezordinii ei administrative',
        'Anglia parlamentară strângea mai mult pe cap de locuitor și se îndatora mai ieftin decât Franța absolută',
        'Niciunul dintre cele două state nu a izbutit să strângă destul cât să își susțină războaiele',
        'Anglia își finanța războaiele exclusiv din comerțul colonial',
      ],
      explanation: 'Consimțământul parlamentar și Banca Angliei din 1694 au făcut datoria credibilă. Consimțământul s-a dovedit o tehnologie fiscală mai bună decât porunca.',
    },
    {
      question: 'Ce au făcut Decretele Noii Rânduieli?',
      options: [
        'Au restabilit fuero-urile bască și navareză',
        'Au desființat instituțiile proprii ale Coroanei Aragonului și au impus modelul castilian prin drept de cucerire',
        'Au creat un parlament comun pentru toată Monarhia',
        'Au împărțit coloniile americane între regatele peninsulare',
      ],
      explanation: 'Au prefăcut o monarhie compusă într-o unire accesorie. Este excepția spaniolă de la regula negocierii cu marginile.',
    },
    {
      question: 'Ce era liberum veto al republicii polono-lituaniene?',
      options: [
        'Dreptul regelui de a bloca hotărârile dietei',
        'Puterea unui singur deputat de a anula dieta întreagă și hotărârile ei',
        'Scutirea fiscală universală a nobilimii',
        'Dreptul orașelor de a refuza recrutarea',
      ],
      explanation: 'A blocat fiscalitatea și armata permanentă. Între 1772 și 1795, vecinii au împărțit țara.',
    },
    {
      question: 'Ce paradox subliniază Perry Anderson despre absolutismul din Europa de Est?',
      options: [
        'Că a fost mai slab decât cel occidental, cu toate că avea mai mult teritoriu',
        'Că acolo clădirea statului modern s-a petrecut odată cu întărirea iobăgiei, nu cu dispariția ei',
        'Că s-a sprijinit pe orașe, nu pe nobilime',
        'Că a renunțat să țină armate permanente',
      ],
      explanation: 'Petru I a legat statutul nobiliar de slujba adusă statului, prin tabla rangurilor, în timp ce iobăgia țărănească se înăsprea.',
    },
    {
      question: 'Ce deosebire foloseau, după Henshall, chiar contemporanii?',
      options: [
        'Între monarhia absolută și monarhia constituțională',
        'Între monarhia absolută, legitimă și respectuoasă cu corpurile intermediare, și despotism sau tiranie',
        'Între monarhia ereditară și monarhia electivă',
        'Între monarhia națională și monarhia compusă',
      ],
      explanation: 'Opoziția dintre absolutismul continental și constituționalismul englez ar fi, în citirea lui, o construcție retrospectivă a secolului al XIX-lea.',
    },
    {
      question: 'Ce noutate fiscală au adus capitația din 1695 și dijma regală din 1710, în Franța?',
      options: [
        'Au desființat impozitele indirecte pe sare',
        'Atingeau, pentru prima dată, și grupurile privilegiate, nu doar starea a treia',
        'Treceau strângerea impozitelor doar în seama intendenților',
        'Înlocuiau plata în bani cu plata în natură',
      ],
      explanation: 'Războiul neîntrerupt din 1672 încoace a silit la atingerea privilegiului fiscal. Este primul semn al problemei care va exploda în 1789.',
    },
    {
      question: 'De ce s-a dovedit temelia teologică a puterii, pusă de Bossuet, mai puțin durabilă decât temelia pactată a lui Hobbes?',
      options: [
        'Fiindcă Bossuet a scris în latină și nu a fost citit',
        'Fiindcă ce se întemeiază pe un pact poate fi discutat în termenii lui, iar acea cale a rămas deschisă lui Locke și criticii iluministe',
        'Fiindcă Hobbes apăra monarhia mărginită',
        'Fiindcă Biserica a osândit lucrarea lui Bossuet',
      ],
      explanation: 'Hobbes îndreptățea o putere absolută cu argumente lumești. Locke a primit premisa pactului și a scos concluzia potrivnică, în 1689.',
    },
  ],
}
