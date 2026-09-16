import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/revoluciones-liberales.ts`. Aceeași
   formă: 6 secțiuni în aceeași ordine, 15 date, 14 concepte, 3 dezbateri, 18 surse,
   un document comentat, 4 imagini și 16 întrebări cu opțiunile pe aceleași poziții. */
export const revolucionesLiberalesRo: TopicTranslation = {
  title: 'Liberalism, naționalism și unificări',
  description: 'De la Restaurație la statele naționale: constituții, valuri revoluționare și unificări.',
  years: '1815–1871',
  summary:
    'Între Congresul de la Viena și proclamarea Imperiului German, Europa a trecut de la o ordine a dinastiilor legitimate prin tradiție la una a unor state care spuneau că reprezintă națiuni. Povestea de manual înfățișează această trecere ca înaintarea de neoprit a libertății și ca trezirea popoarelor. Cercetarea o descrie altfel: liberalismul secolului al XIX-lea a fost, decenii la rând, un proiect al proprietarilor, care se temea deopotrivă de absolutism și de votul universal; națiunile nu s-au trezit, ci au fost construite cu școala, serviciul militar, calea ferată și presa; iar cele două unificări care închid perioada au fost făcute de armate și de cancelarii, nu de adunările din 1848.',
  keyDates: [
    { date: '1814–1815', event: 'Congresul de la Viena: principiul legitimității, echilibrul și compensațiile teritoriale.' },
    { date: '1815', event: 'Sfânta Alianță și Cvadrupla Alianță: sistemul congreselor.' },
    { date: '1820', event: 'Val revoluționar: Trienalul Liberal din Spania, Napoli și Portugalia, cu Constituția de la Cádiz drept model.' },
    { date: '1821–1830', event: 'Războiul de independență al Greciei, prima secesiune națională recunoscută de puteri.' },
    { date: '1830', event: 'Revoluția din Iulie în Franța; independența Belgiei; răscoala poloneză.' },
    { date: '1834', event: 'Intră în vigoare Zollvereinul, uniunea vamală germană fără Austria.' },
    { date: '1838', event: 'Carta Poporului: cartismul cere vot universal masculin în Marea Britanie.' },
    { date: '1848', event: 'Primăvara popoarelor; *Manifestul comunist*; Declarația de la Seneca Falls.' },
    { date: '1848–1849', event: 'Parlamentul de la Frankfurt; desființarea iobăgiei în Imperiul Austriac.' },
    { date: '1859–1861', event: 'Război împotriva Austriei, expediția celor O Mie și proclamarea Regatului Italiei.' },
    { date: '1862', event: 'Discursul lui Bismarck despre „fier și sânge” în fața camerei prusace.' },
    { date: '1864, 1866, 1870–1871', event: 'Războaiele cu Danemarca, Austria și Franța: cele trei etape ale unificării germane.' },
    { date: '1870', event: 'Roma devine capitala Italiei, după retragerea garnizoanei franceze.' },
    { date: '1871', event: 'Proclamarea Imperiului German la Versailles și Comuna din Paris.' },
    { date: '1882', event: 'Renan definește națiunea drept „un plebiscit de fiecare zi”.' },
  ],
  sections: [
    {
      title: 'Restaurația: o ordine nouă cu nume vechi',
      body: [
        'Congresul de la Viena a adunat, între septembrie 1814 și iunie 1815, puterile care îl învinseseră pe Napoleon. Vocabularul lui era al întoarcerii înapoi — legitimitate dinastică, îndreptarea dezordinii revoluționare —, dar ce a clădit era nemaivăzut: un sistem de securitate colectivă întemeiat pe echilibrul dintre cinci mari puteri, pe compensații teritoriale socotite cu grijă și pe congrese periodice, care să rezolve crizele înainte de a se preface în război.',
        'Paul Schroeder a susținut că acel sistem a fost o prefacere reală a politicii internaționale europene, nu o simplă reacțiune: a înlocuit echilibrul înțeles ca întrecere armată cu o ordine înțeleasă, cu reguli limpezi. Faptul pomenit de obicei în sprijinul lui este că Europa nu a cunoscut un război general între 1815 și 1914 și niciunul care să pună față în față toate marile puteri până în acel ultim an.',
        'Nici moștenirea napoleoniană nu a putut fi desfăcută. Codurile civile, administrația uniformă pe departamente sau provincii, proprietatea deplină asupra pământului în locul drepturilor senioriale, starea civilă și cariera deschisă talentului au dăinuit în bună parte din continent fiindcă erau folositoare la cârmuire. Monarhii restaurați au moștenit un aparat de stat mult mai bun decât cel din 1789 și l-au păstrat.',
        'Sistemul congreselor s-a rupt prin propria lui logică. Austria a intervenit în Napoli și în Piemont în 1821, Franța în Spania în 1823, ca să lichideze Trienalul Liberal, dar când a fost vorba de coloniile americane Marea Britanie a refuzat, iar independența Greciei a despicat puterile între principiul legitimității și interesul strategic față de Imperiul Otoman. Metternich a putut să amâne problema; nu a putut să o rezolve.',
        'Se cuvine ținut minte că Restaurația nu a fost o paranteză fără cuprins. A fost cadrul în care s-au format culturile politice ale secolului: legitimismul, liberalismul constituțional, republicanismul, naționalismul romantic și socialismul utopic s-au definit unele față de altele în acele trei decenii.',
      ].join('\n\n'),
      callout:
        'Sistemul de la Viena este povestit de obicei drept pură reacțiune. A ținut patruzeci de ani fără război general în Europa: binișor mai mult decât orice ordine internațională de mai târziu, inclusiv pacea din 1919.',
    },
    {
      title: 'Liberalismul: ce era și pentru cine',
      body: [
        'A pune semnul egal între liberalism și democrație este un anacronism. Liberalismul secolului al XIX-lea apăra drepturi individuale, separarea puterilor, domnia legii, libertatea presei și a comerțului și o constituție care să îl îngrădească pe monarh, dar se ferea pe față de votul universal, pe care îl lega de Teroarea din 1793 și de cârmuirea gloatei. Condiția de a vota nu era să fii adult, ci să fii proprietar.',
        'Cifrele dau măsura. În Franța lui Ludovic Filip, după coborârea cenzului în 1830, corpul electoral a trecut de la vreo nouăzeci de mii la vreo două sute patruzeci de mii de alegători, la peste treizeci și cinci de milioane de locuitori: mai puțin de unu la sută. Când, în 1843, Guizot și-a rezumat răspunsul dat celui care cerea votul printr-un „îmbogățiți-vă”, nu era cinic: descria întocmai logica regimului. Cetățenia politică era o răsplată pentru acumulare.',
        'Gândirea teoretică a însoțit această poziție. Benjamin Constant a deosebit în 1819 libertatea celor vechi — participarea de-a dreptul la deciziile obștești — de cea a modernilor — bucuria neîmpiedicată de viața privată, de proprietate și de opinie — și a conchis că a doua este proprie societăților comerciale. Patru decenii mai târziu, John Stuart Mill a apărat în *Despre libertate* (1859) principiul vătămării, dar a scris pagini limpezi despre teama lui de tirania majorității.',
        'Sub aceeași etichetă conviețuiau familii care se înfruntau. Doctrinarii voiau o monarhie constituțională, cu suveranitate împărțită între rege și Cortesuri, și un cens electoral îngust; progresiștii și radicalii, suveranitate națională deplină, gardă cetățenească și lărgirea censului; democrații și republicanii, vot universal masculin. În Spania, aceste deosebiri au rânduit viața politică a întregului secol, cu constituții care se schimbau după familia aflată la guvernare.',
        'Liberalismul economic a înaintat în paralel și cu mai puțină împotrivire: deposedări care au adus pe piață pământuri bisericești și comunale, desființarea breslelor, libertatea de a încheia contracte, coduri de comerț. Rezultatul nu a fost o societate de mici proprietari, ci, în bună parte din sudul Europei, o strângere a pământului în mâinile celor care aveau deja capital ca să liciteze.',
        'Chestiunea socială a apărut drept limita programului. Când muncitorii și meșteșugarii au început să ceară dreptul de asociere, salariu și vot, o bună parte a liberalismului a ales ordinea. Această ruptură, văzută deja în cartismul britanic din 1838, va fi hotărâtoare în 1848.',
      ].join('\n\n'),
    },
    {
      title: 'Națiunea: descoperire sau construcție?',
      body: [
        'Naționalismul romantic a înfățișat națiunea ca pe un fapt firesc și vechi: o comunitate cu limbă, cultură și duh propriu, care ar fi existat dintotdeauna și care acum se trezea. Herder așezase geniul fiecărui popor în limba și în poezia lui populară; Fichte, în *Cuvântări către națiunea germană* (1808), a prefăcut acea idee în program politic, sub ocupația napoleoniană. Filologi, folcloriști și compozitori au strâns povești, cântece și straie, iar pe drum le-au ales, le-au îndreptat și, uneori, le-au născocit.',
        'Istoriografia secolului XX a întors lucrurile pe dos. Ernest Gellner a susținut în 1983 că naționalismul creează națiunile, nu invers: societatea industrială are nevoie de o populație mișcătoare, știutoare de carte și omogenă cultural, iar numai un sistem de învățământ de stat o poate produce. Benedict Anderson a descris națiunea drept „comunitate imaginată” — membrii ei nu se vor cunoaște niciodată, dar se gândesc ca un noi în același timp — și a dat un rol central capitalismului tipografic: ziarul și romanul în limba locului au învățat milioane de oameni să se închipuie contemporani unii cu alții.',
        'Eric Hobsbawm și Terence Ranger au arătat în *Inventarea tradiției* (1983) câte ritualuri aparent străvechi — tartanele scoțiene, ceremonialul monarhic britanic, sărbătorile civice — au fost gândite între 1870 și 1914 ca să dea adâncime istorică unor construcții recente. Împotriva acestui curent modernist, Anthony D. Smith a replicat că națiunile nu se ridică pe gol: se sprijină pe *ethnii* dinainte, cu mituri de obârșie, amintiri și simboluri împărtășite, pe care naționalismul le reașază, dar nu le scoate din nimic.',
        'Formularea cea mai citată este mai veche decât toate acestea. Ernest Renan, la Sorbona, în 1882, a negat că națiunea s-ar defini prin rasă, limbă, religie sau geografie, a definit-o drept „un plebiscit de fiecare zi” și a adăugat o observație incomodă: uitarea, ba chiar greșeala istorică, sunt factori esențiali în crearea unei națiuni. Fiecare națiune are nevoie să nu își amintească violențele care au întemeiat-o.',
        'Cazul francez o dovedește cu precizie. Un raport oficial din 1863 socotea că în jur de un sfert din populația Franței nu vorbea franceza. Eugen Weber, în *Peasants into Frenchmen* (1976), a reconstituit cum școala obligatorie, serviciul militar, calea ferată, administrația și piața națională i-au prefăcut pe țărani în francezi, între 1870 și 1914, adică la un secol după Revoluția făcută în numele lor. Vorba pusă pe seama lui Massimo d Azeglio după unificarea Italiei — Italia e făcută, rămâne să îi facem pe italieni — descrie exact aceeași problemă.',
      ].join('\n\n'),
      callout:
        'Renan a definit națiunea, în 1882, drept un plebiscit zilnic și a adăugat că ea cere uitare. Nu este un paradox retoric: orice națiune se întemeiază pe conflicte interne pe care povestea ei oficială are nevoie să nu le țină minte.',
    },
    {
      title: 'Valurile: 1820, 1830 și 1848',
      body: [
        'Revoluțiile secolului al XIX-lea au venit în valuri care s-au răspândit prin Europa în câteva săptămâni. Cel din 1820 a fost mediteranean și militar, cu pronunciamentos în Spania, Napoli, Piemont și Portugalia, și a avut un text de referință comun: Constituția de la Cádiz din 1812, tradusă și primită drept model de revoluționari care nu călcaseră niciodată prin Spania. Cel din 1830 a început la Paris cu căderea Bourbonilor, a dat Belgiei independența, a dat greș în Polonia și a întărit regimuri liberale cenzitare în Franța și în Marea Britanie.',
        'Anul 1848 a fost de altă mărime. În câteva săptămâni au căzut sau au cedat guverne în Franța, în statele germane, în Imperiul Austriac și în bună parte din Italia; Metternich a fugit din Viena. Ingredientele s-au potrivit: o criză agrară și alimentară în 1845-1847, șomaj meșteșugăresc, o rețea de presă și de societăți politice deja organizată și certitudinea că pilda unei capitale le va trage după ea pe celelalte. A fost primul eveniment cu adevărat european de la Napoleon încoace.',
        'A și dat greș aproape peste tot în mai puțin de optsprezece luni, iar motivele sunt lămuritoare. Alianța de la început dintre liberalii moderați și radicali s-a rupt de îndată ce a apărut chestiunea socială: în iunie 1848, la Paris, Garda Națională și armata i-au zdrobit pe muncitorii care apărau Atelierele Naționale, cu mii de morți și cu deportări. Conflictele naționale i-au pus față în față chiar pe revoluționari: adunarea de la Frankfurt a dezbătut dacă Posnania este germană, iar ungurii care își cereau independența s-au trezit în fața croaților, românilor și sârbilor care și-o cereau pe a lor tocmai împotriva lor. Țăranii, principala masă la îndemână, s-au demobilizat de îndată ce au obținut desființarea sarcinilor senioriale. Iar armatele au rămas credincioase suveranilor lor.',
        'Parlamentul de la Frankfurt rezumă problema. Ales prin vot larg, a petrecut luni întregi dezbătând drepturi fundamentale și frontiere, a scris o constituție chibzuită și, în aprilie 1849, i-a oferit coroana imperială lui Frederic Wilhelm al IV-lea al Prusiei, care a refuzat-o fiindcă venea de la o adunare, nu de la principi. O constituție fără armată și fără administrație în spate nu obligă pe nimeni.',
        'De aici vestita vorbă a lui G. M. Trevelyan: 1848 a fost punctul de cotitură în care istoria modernă nu a ajuns să se întoarcă. Istoriografia de mai apoi, cu Jonathan Sperber în frunte, a discutat-o. Desființarea iobăgiei și a sarcinilor senioriale în ținuturile Habsburgilor a fost definitivă; votul universal masculin a fost încercat pentru prima dată în Franța; Statutul Albertin din 1848 a dăinuit ca lege fundamentală a Italiei până în 1946; iar politica de masă — partide, presă ieftină, întruniri, asociații — s-a așezat fără întoarcere. 1848 nu și-a atins țelurile declarate și, cu toate acestea, a schimbat terenul de joc.',
      ].join('\n\n'),
    },
    {
      title: 'Unificări de sus: Italia și Germania',
      body: [
        'Cele două unificări care închid perioada nu au fost făcute de adunările din 1848, ci de două state cu armată: Piemontul și Prusia. Șirul faptelor este, în ambele cazuri, diplomatic și militar, iar ingredientul hotărâtor a fost alegerea bună a războaielor.',
        'Cavour, prim-ministrul piemontez, a înțeles că Austria nu va fi scoasă din Italia fără o mare putere aliată. La Plombières, în 1858, a înțeles în secret cu Napoleon al III-lea un război împotriva Austriei, în schimbul Savoiei și al orașului Nisa; războiul din 1859 a adus Lombardia. Plebiscitele din ducatele centrale și expediția celor O Mie a lui Garibaldi, care în 1860 a doborât regatul celor Două Sicilii, au întregit o hartă pe care Piemontul a administrat-o ca anexare, nu ca federație. Regatul Italiei a fost proclamat în 1861; Veneția a venit în 1866, ca răsplată pentru alianța cu Prusia, iar Roma în 1870, când războiul franco-prusac a silit la retragerea garnizoanei franceze.',
        'Bismarck a lucrat după aceeași logică și cu mai multe mijloace. Numit în 1862, în plină criză constituțională prusacă, a spus în fața camerei că marile chestiuni nu se vor rezolva prin discursuri și nici prin voturi ale majorităților, ci prin fier și sânge, și a guvernat patru ani fără buget aprobat. Au urmat trei războaie scurte și socotite: împotriva Danemarcei în 1864, alături de Austria, împotriva Austriei în 1866, ca să o scoată din Germania, și împotriva Franței în 1870-1871, după măsluirea depeșei de la Ems. Imperiul German a fost proclamat în ianuarie 1871, în galeria oglinzilor de la Versailles, pe teritoriu dușman ocupat.',
        'Despre cauzele economice se discută. Zollvereinul, în vigoare din 1834, a creat o piață germană fără Austria și este înfățișat de obicei drept pregătire a unității politice. Obiecția este că o uniune vamală nu produce de la sine un stat — au fost uniuni vamale care nu au unificat nimic — și că Austria a rămas pe dinafară printr-o hotărâre prusacă, înainte să existe vreun proiect unificator. Helmut Böhme și istoriografia socială germană au subliniat greutatea intereselor economice; alții insistă că fără cele trei războaie nu ar fi fost niciun imperiu.',
        'Forma rezultatului contează la fel de mult ca faptul în sine. Germania s-a unificat în versiunea ei *kleindeutsch*, fără Austria și sub hegemonie prusacă, cu un Reichstag ales prin vot universal masculin, dar fără control asupra unui cancelar răspunzător doar în fața împăratului, și cu Prusia votând, la ea acasă, după un sistem de trei clase cenzitare. Italia s-a născut ca monarhie centralizată și cenzitară: la primele alegeri a votat în jur de două la sută din populație.',
        'De aici teza *Sonderweg*, drumul deosebit german, formulată de Hans-Ulrich Wehler: o modernizare economică grăbită, fără modernizare politică, cu elite preindustriale neatinse, care ar explica șubrezenia Weimarului și urcarea nazismului. David Blackbourn și Geoff Eley au demontat-o în *The Peculiarities of German History* (1984): argumentul presupune un drum normal — cel britanic sau cel francez — pe care nicio țară nu l-a străbătut cu adevărat și subevaluează cât de mult a cucerit totuși burghezia germană, în plan social și cultural. Dezbaterea a întors istoria germană spre ce are aparte fiecare împrejurare și împotriva explicațiilor prin destin național.',
      ].join('\n\n'),
      callout:
        'Reichstagul german era ales din 1871 prin vot universal masculin, mai larg decât cel britanic al vremii. Nu îl controla pe cancelar. Votul larg și puterea parlamentară nulă puteau conviețui.',
    },
    {
      title: 'Cine a rămas pe dinafară',
      body: [
        'Cetățenia consfințită de liberalism a fost bărbătească și proprietară prin însăși definiția legală, nu din scăpare. Constituțiile perioadei nu le-au scos pe femei din dreptul de vot: le-au scos din calitatea de subiect politic. În iulie 1848, în timp ce Europa se răscula, convenția de la Seneca Falls a adoptat, în statul New York, o Declarație a Sentimentelor calchiată după cea de Independență, care cerea votul femeilor; în Franța, femeile care susținuseră cluburile revoluționare au văzut cum votul universal din chiar acel an era definit drept masculin.',
        'Muncitorii au fost cealaltă excludere structurală. Cartismul britanic a cerut, din 1838, vot universal masculin, vot secret și leafă pentru deputați, și a strâns milioane de semnături fără să obțină nimic; zilele din iunie 1848, la Paris, au însemnat ruptura definitivă dintre liberalism și mișcarea muncitorească; Asociația Internațională a Muncitorilor a fost întemeiată la Londra în 1864; iar Comuna din Paris din 1871, zdrobită în săptămâna sângeroasă, a devenit trauma de temelie a politicii europene de mai apoi. Numărul victimelor se discută: tradiția vorbea de douăzeci sau treizeci de mii de împușcați, iar estimările recente îl coboară la câteva mii, fără ca asta să schimbe înțelesul episodului.',
        'Înăuntrul noilor state naționale au rămas minorități prefăcute dintr-odată în problemă. Prusia unificatoare a aplicat politici de germanizare asupra supușilor ei polonezi; Italia unită s-a trezit cu o răscoală în sud, așa-numitul brigandaj, care a cerut ani de campanie militară și zeci de mii de soldați, și cu o chestiune meridională ce avea să străbată tot secolul următor. Statul național omogen era un proiect, iar înfăptuirea lui a avut costuri pentru cei care nu încăpeau în el.',
        'În afara Europei, aceeași perioadă este una de expansiune. Franța a invadat Algeria în 1830, anul revoluției ei liberale, iar Marea Britanie i-a impus Chinei tratatele inegale după primul război al opiului (1839-1842). Principiile suveranității naționale și ale autodeterminării, care îi legitimau pe greci, pe belgieni, pe italieni și pe germani, nu erau socotite valabile pentru popoarele colonizate, iar această asimetrie nu a fost o contradicție nebăgată de seamă, ci o ierarhie limpede, spusă în limbajul civilizației și al progresului.',
        'Ce a rămas a fost cadrul. În 1815, statul național era o excepție; în 1871 devenise forma politică socotită de la sine înțeleasă, până într-atât încât mișcările de mai târziu — inclusiv cele anticoloniale — au trebuit să își formuleze cererile în acea limbă. Alături de el au rămas constituționalismul scris, politica de masă și o idee de apartenență pe care Europa avea să o exporte în restul lumii în secolul următor.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'Legitimism', definition: 'Principiul Congresului de la Viena, după care puterea se cuvine dinastiilor înlăturate de Revoluție și de Napoleon.' },
    { term: 'Sistemul congreselor', definition: 'Mecanism de întâlniri periodice între marile puteri, ca să rezolve crizele fără război general. S-a rupt odată cu Grecia și cu America.' },
    { term: 'Vot cenzitar', definition: 'Drept de vot păstrat celor care trec de un anumit nivel de venit sau de avere. Regula liberalismului european până spre sfârșitul secolului al XIX-lea.' },
    { term: 'Liberalism doctrinar', definition: 'Curent care apără suveranitatea împărțită între rege și Cortesuri și un cens electoral îngust, împotriva suveranității naționale depline.' },
    { term: 'Suveranitate națională', definition: 'Principiul după care puterea stă în națiune, nu în monarh. Temelia constituțiilor progresiste ale perioadei.' },
    { term: 'Deposedare', definition: 'Vânzarea la licitație publică a pământurilor bisericești și comunale. A lărgit piața pământului și a strâns proprietatea în puține mâini.' },
    { term: 'Comunitate imaginată', definition: 'Definiția națiunii la Benedict Anderson: un grup ai cărui membri nu se vor cunoaște niciodată, dar se gândesc ca fiind în același timp, datorită capitalismului tipografic.' },
    { term: 'Tradiție inventată', definition: 'Ritual sau simbol cu înfățișare străveche, gândit într-o vreme recentă ca să dea adâncime istorică unei construcții politice.' },
    { term: 'Primăvara popoarelor', definition: 'Numele valului revoluționar european din 1848, cel dintâi petrecut în același timp aproape în tot continentul.' },
    { term: 'Realpolitik', definition: 'Politică întemeiată pe socoteala forțelor, nu pe principii ideologice. Legată de Cavour și mai ales de Bismarck.' },
    { term: 'Risorgimento', definition: 'Procesul unificării Italiei. S-a sfârșit ca anexare la Piemont, nu ca federație de state egale.' },
    { term: 'Zollverein', definition: 'Uniune vamală germană, în vigoare din 1834, fără Austria. Greutatea ei cauzală în unificarea politică se discută.' },
    { term: 'Kleindeutsch', definition: 'Soluția unei Germanii „mici”, fără Austria și sub hegemonie prusacă, împotriva alternativei *grossdeutsch*.' },
    { term: 'Sonderweg', definition: 'Teza „drumului deosebit” german: modernizare economică fără modernizare politică. Mult discutată de la 1984 încoace.' },
  ],
  debates: [
    {
      question: 'Sunt națiunile construcții moderne sau realități vechi?',
      positions: [
        {
          school: 'Modernism (Gellner, Anderson, Hobsbawm)',
          argument:
            'Naționalismul creează națiunile. Societatea industrială cere o populație omogenă și știutoare de carte, pe care doar școala de stat o produce; capitalismul tipografic a învățat milioane de oameni să se închipuie în același timp, iar o bună parte din tradițiile naționale a fost gândită între 1870 și 1914.',
        },
        {
          school: 'Etnosimbolism (Anthony D. Smith)',
          argument:
            'Națiunile moderne nu se ivesc din gol: se sprijină pe *ethnii* de dinainte, cu mituri de obârșie, amintiri, limbă și simboluri împărtășite. Naționalismul reașază și politizează acel material, dar nu îl scoate din nimic.',
        },
      ],
      state:
        'Modernismul este poziția stăpânitoare și a câștigat terenul metodologic, dar obiecția lui Smith a silit la explicarea felului în care unele comunități au putut fi „naționalizate”, iar altele nu. Înțelegerea practică este să fie studiat fiecare caz: cât material dinainte era și cât au adus școala, armata, presa și piața.',
    },
    {
      question: 'A dat greș anul 1848?',
      positions: [
        {
          school: 'Eșec (formularea clasică, Trevelyan)',
          argument:
            'În optsprezece luni au căzut toate guvernele revoluționare. Punctul de cotitură în care istoria modernă nu a ajuns să se întoarcă: alianța dintre liberali și radicali s-a rupt odată cu chestiunea socială, mișcările naționale s-au ciocnit între ele, iar armatele au rămas credincioase.',
        },
        {
          school: 'Revizuire (Sperber și alții)',
          argument:
            'Rezultatele au fost durabile, deși nu cele declarate: desființarea definitivă a iobăgiei și a sarcinilor senioriale în ținuturile Habsburgilor, încercarea votului universal masculin în Franța, Statutul Albertin în vigoare până în 1946 și așezarea fără întoarcere a politicii de masă.',
        },
      ],
      state:
        'Citirea de azi desparte țelurile de efecte. 1848 nu a obținut ce cerea, dar a schimbat terenul de joc: după acea dată, niciun regim european nu a mai putut guverna trecând cu vederea existența unei opinii publice organizate.',
    },
    {
      question: 'A existat un „drum deosebit” german?',
      positions: [
        {
          school: 'Sonderweg (Wehler și școala de la Bielefeld)',
          argument:
            'Germania s-a industrializat cu mare iuțeală fără să se democratizeze: elitele agrare și militare prusace au păstrat puterea, burghezia a renunțat să le-o dispute, iar Imperiul din 1871 a instituționalizat acest dezechilibru. De aici șubrezenia Weimarului și deznodământul din 1933.',
        },
        {
          school: 'Critică (Blackbourn și Eley, 1984)',
          argument:
            'Teza presupune un drum normal — cel britanic sau cel francez — pe care nicio țară nu l-a străbătut așa cum este descris, și subevaluează pozițiile sociale, juridice și culturale pe care burghezia germană chiar le-a cucerit. A explica anul 1933 pornind de la 1871 preface istoria în destin.',
        },
      ],
      state:
        'Versiunea tare a Sonderwegului este părăsită. Dăinuie ca descriere a unui dezechilibru anume — vot larg pentru Reichstag și cancelar răspunzător doar în fața împăratului —, nu ca explicație teleologică a secolului XX german.',
    },
  ],
  sources: [
    { author: 'Cortesurile de la Cádiz', title: 'Constituția politică a Monarhiei spaniole', year: '1812', kind: 'primaria', note: 'Model exportat în Napoli, Piemont și Portugalia, în valul din 1820.' },
    { author: 'Puterile europene', title: 'Actul Final al Congresului de la Viena', year: '1815', kind: 'primaria', note: 'Fixează harta, principiul legitimității și sistemul congreselor.' },
    { author: 'Benjamin Constant', title: 'Despre libertatea celor vechi comparată cu cea a modernilor', year: '1819', kind: 'primaria', note: 'Întemeiază liberalismul vieții private împotriva participării de-a dreptul.' },
    { author: 'Convenția de la Seneca Falls', title: 'Declarația Sentimentelor', year: '1848', kind: 'primaria', note: 'Cere votul femeilor, în forma Declarației de Independență.' },
    { author: 'Karl Marx și Friedrich Engels', title: 'Manifestul Partidului Comunist', year: '1848', kind: 'primaria', note: 'Publicat cu câteva săptămâni înaintea valului revoluționar; înrâurirea lui asupra acestuia a fost mică.' },
    { author: 'John Stuart Mill', title: 'Despre libertate', year: '1859', kind: 'primaria', note: 'Principiul vătămării și avertismentul limpede împotriva tiraniei majorității.' },
    { author: 'Giuseppe Mazzini', title: 'Datoriile omului', year: '1860', kind: 'primaria', note: 'Naționalism republican și democratic, învins de calea monarhică a lui Cavour.' },
    { author: 'Otto von Bismarck', title: 'Discursul despre fier și sânge', year: '1862', kind: 'primaria', note: 'În fața comisiei de buget a Prusiei, în plină criză constituțională.' },
    { author: 'Ernest Renan', title: 'Ce este o națiune?', year: '1882', kind: 'primaria', note: 'Națiunea ca plebiscit zilnic și ca exercițiu de uitare împărtășită.' },
    { author: 'Eric Hobsbawm', title: 'Epoca revoluției, 1789-1848', year: '1962', kind: 'estudio', note: 'Sinteză clasică a dublei revoluții, politică și industrială.' },
    { author: 'Eugen Weber', title: 'Peasants into Frenchmen', year: '1976', kind: 'estudio', note: 'Reconstituie naționalizarea Franței rurale între 1870 și 1914.' },
    { author: 'Ernest Gellner', title: 'Națiuni și naționalism', year: '1983', kind: 'estudio', note: 'Omogenitatea culturală ca cerință funcțională a societății industriale.' },
    { author: 'Benedict Anderson', title: 'Comunități imaginate', year: '1983', kind: 'estudio', note: 'Națiunea ca o comunitate închipuită de capitalismul tipografic.' },
    { author: 'Eric Hobsbawm și Terence Ranger', title: 'Inventarea tradiției', year: '1983', kind: 'estudio', note: 'Ritualuri naționale aparent străvechi, gândite între 1870 și 1914.' },
    { author: 'David Blackbourn și Geoff Eley', title: 'The Peculiarities of German History', year: '1984', kind: 'estudio', note: 'Demontează Sonderwegul, negând că ar exista un drum normal spre modernitate.' },
    { author: 'Anthony D. Smith', title: 'The Ethnic Origins of Nations', year: '1986', kind: 'estudio', note: 'Etnosimbolism: națiunile se sprijină pe comunități etnice dinainte.' },
    { author: 'Jonathan Sperber', title: 'The European Revolutions, 1848-1851', year: '1994', kind: 'estudio', note: 'Revizuirea anului 1848 după efectele lui durabile, nu după țelurile lui.' },
    { author: 'Paul W. Schroeder', title: 'The Transformation of European Politics, 1763-1848', year: '1994', kind: 'estudio', note: 'Ordinea de la Viena ca inovație în politica internațională, nu ca simplă reacțiune.' },
  ],
  documents: [
    {
      section: 1,
      title: 'Suveranitatea în Constituția de la Cádiz',
      text: [
        'Articolul 1. Națiunea spaniolă este adunarea tuturor spaniolilor din amândouă emisferele.',
        'Articolul 2. Națiunea spaniolă este liberă și independentă și nu este și nici nu poate fi moștenirea vreunei familii sau persoane.',
        'Articolul 3. Suveranitatea stă în chip esențial în Națiune și, prin urmare, numai ei îi aparține dreptul de a-și așeza legile fundamentale.',
      ].join('\n\n'),
      source: 'Constituția politică a Monarhiei Spaniole, Cádiz, 19 martie 1812.',
      note: 'Versiune proprie după spaniolă.',
      question: 'Articolul 2 spune că națiunea nu este moștenirea vreunei familii. Împotriva cărei idei de monarhie este scris asta? Uită-te și la expresia din amândouă emisferele.',
    },
  ],
  images: [
    {
      alt: 'Libertatea întruchipată înaintează cu steagul tricolor și cu o pușcă, pe o baricadă acoperită de trupuri',
      caption: 'Libertatea conducând poporul, de Eugène Delacroix (1830), despre zilele din iulie ale acelui an.',
    },
    {
      alt: 'Gravură a unei săli cu numeroși diplomați, în picioare și așezați în jurul unei mese cu documente',
      caption: 'Congresul de la Viena (1814-1815). Restaurează dinastii, dar păstrează o bună parte din harta napoleoniană: întoarcerea înapoi nu a fost niciodată deplină.',
    },
    {
      alt: 'Gravură a unei străzi tăiate de o baricadă din pavaj și mobile, apărată de oameni înarmați, cu steaguri',
      caption: 'Baricadă la Paris, februarie 1848. În câteva săptămâni valul a ajuns la Viena, Berlin, Milano și Budapesta, iar în câteva luni era înfrânt aproape peste tot.',
    },
    {
      alt: 'Pictură a unei săli de palat pline de militari în uniformă, cu brațul sau sabia ridicată, în fața unui grup aflat pe estradă',
      caption: 'Proclamarea Imperiului German la Versailles, ianuarie 1871, de Anton von Werner. Unificarea se face de sus și pe teritoriu dușman.',
    },
  ],
  questions: [
    {
      question: 'Ce susține Paul Schroeder despre ordinea ieșită din Congresul de la Viena?',
      options: [
        'Că a fost o restaurare întocmai a hărții dinainte de 1789',
        'Că a fost o prefacere reală a politicii internaționale, cu reguli înțelese care au ferit Europa de un război general decenii la rând',
        'Că nu a avut efecte, fiindcă s-a rupt în 1821',
        'Că singurul ei țel era împărțirea coloniilor americane',
      ],
      explanation: 'Europa nu a cunoscut un război general între 1815 și 1914. Sistemul a înlocuit echilibrul ca întrecere armată cu o ordine cu congrese periodice.',
    },
    {
      question: 'Ce moștenire napoleoniană au păstrat regimurile Restaurației?',
      options: [
        'Votul universal masculin',
        'Republica drept formă de guvernare',
        'Codurile civile, administrația uniformă, starea civilă și proprietatea deplină asupra pământului',
        'Libertatea presei, fără cenzură prealabilă',
      ],
      explanation: 'Monarhii restaurați au moștenit un aparat de stat mult mai bun decât cel din 1789 și l-au păstrat fiindcă le folosea la cârmuire.',
    },
    {
      question: 'De ce este anacronic să pui semnul egal între liberalismul secolului al XIX-lea și democrație?',
      options: [
        'Fiindcă liberalismul respingea constituțiile scrise',
        'Fiindcă apăra drepturi și separarea puterilor, dar păstra votul pentru proprietari și se ferea de votul universal',
        'Fiindcă liberalii erau adepți ai absolutismului luminat',
        'Fiindcă democrația nu exista ca noțiune în secolul al XIX-lea',
      ],
      explanation: 'În Franța lui Ludovic Filip vota mai puțin de unu la sută din populație. Cetățenia politică lucra ca o răsplată pentru avere.',
    },
    {
      question: 'Ce a deosebit Benjamin Constant în 1819?',
      options: [
        'Națiunea politică de națiunea culturală',
        'Libertatea celor vechi, participarea de-a dreptul la deciziile obștești, de cea a modernilor, bucuria neîmpiedicată de viața privată',
        'Liberalismul economic de cel politic',
        'Suveranitatea națională de suveranitatea împărțită',
      ],
      explanation: 'Constant a conchis că libertatea modernilor este cea potrivită societăților comerciale și că participarea de-a dreptul nu este cu putință în ele.',
    },
    {
      question: 'Care a fost urmarea socială cea mai obișnuită a deposedărilor din sudul Europei?',
      options: [
        'Nașterea unei societăți de mici proprietari',
        'Împărțirea gratuită a pământurilor între zilieri',
        'Strângerea proprietății în mâinile celor care aveau deja capital ca să liciteze',
        'Întoarcerea pământurilor către comune',
      ],
      explanation: 'Pământul a ieșit pe piață la licitație publică și l-a putut cumpăra doar cine avea bani lichizi.',
    },
    {
      question: 'Potrivit lui Gellner, care este legătura dintre națiune și naționalism?',
      options: [
        'Națiunea există dinainte, iar naționalismul o trezește',
        'Naționalismul creează națiunile: societatea industrială are nevoie de o populație omogenă și știutoare de carte, pe care doar școala de stat o produce',
        'Amândouă sunt fenomene fără legătură între ele',
        'Naționalismul este o urmare târzie a războaielor napoleoniene',
      ],
      explanation: 'Este întoarcerea pe dos, modernistă, a gândirii romantice. Anderson a adăugat rolul capitalismului tipografic în închipuirea simultaneității.',
    },
    {
      question: 'Ce obiecție îi aduce Anthony D. Smith modernismului?',
      options: [
        'Că națiunile sunt veșnice și neschimbătoare',
        'Că naționalismul nu a avut însemnătate politică înainte de 1914',
        'Că națiunile moderne se sprijină pe *ethnii* dinainte, cu mituri, amintiri și simboluri pe care naționalismul le reașază, dar nu le scoate din nimic',
        'Că școala și armata nu au avut vreo înrâurire asupra formării naționale',
      ],
      explanation: 'Obiecția silește la explicarea felului în care unele comunități au putut fi naționalizate, iar altele nu, în loc să se presupună că orice material este bun.',
    },
    {
      question: 'Cum a definit Renan națiunea, în 1882?',
      options: [
        'Prin rasa și limba comune',
        'Ca pe un plebiscit de fiecare zi, care cere, pe deasupra, uitarea conflictelor ce au întemeiat-o',
        'Ca pe comunitatea celor care împărtășesc aceeași religie',
        'Ca pe teritoriul mărginit de frontiere naturale',
      ],
      explanation: 'Renan a negat limpede că rasa, limba, religia sau geografia ar defini națiunea și a arătat uitarea — ba chiar greșeala istorică — drept factor esențial.',
    },
    {
      question: 'Ce dovedește raportul francez din 1863 pe care îl citează Eugen Weber?',
      options: [
        'Că știința de carte era răspândită la toată populația Franței',
        'Că în jur de un sfert din populația Franței nu vorbea franceza',
        'Că serviciul militar era voluntar',
        'Că cei mai mulți francezi votau la alegeri',
      ],
      explanation: 'Naționalizarea Franței rurale a fost făcută de școală, cazarmă, cale ferată și piață între 1870 și 1914, la un secol după Revoluția făcută în numele ei.',
    },
    {
      question: 'Ce text a slujit drept model comun revoluționarilor din valul de la 1820?',
      options: [
        'Constituția de la Cádiz din 1812',
        'Declarația Drepturilor Omului și ale Cetățeanului din 1789',
        'Actul Final al Congresului de la Viena',
        'Carta dăruită franceză din 1814',
      ],
      explanation: 'A fost tradusă și primită la Napoli, în Piemont și în Portugalia de revoluționari care nu călcaseră niciodată prin Spania.',
    },
    {
      question: 'Care dintre acești factori NU explică eșecul revoluțiilor din 1848?',
      options: [
        'Ruptura dintre liberalii moderați și radicali, la apariția chestiunii sociale',
        'Ciocnirea dintre mișcări naționale rivale, în același teritoriu',
        'Demobilizarea țărănimii după obținerea desființării sarcinilor senioriale',
        'Intervenția militară a Statelor Unite în sprijinul vechilor regimuri',
      ],
      explanation: 'Nu a existat nicio intervenție americană. Primii trei factori, plus credința armatelor față de suveranii lor, explică deznodământul.',
    },
    {
      question: 'De ce a refuzat Frederic Wilhelm al IV-lea coroana imperială oferită de Parlamentul de la Frankfurt, în 1849?',
      options: [
        'Fiindcă ar fi vrut ca acea coroană să o poarte Austria',
        'Fiindcă venea de la o adunare aleasă, nu de la principii germani',
        'Fiindcă constituția de la Frankfurt desființa monarhia',
        'Fiindcă Rusia i-a interzis limpede acest lucru',
      ],
      explanation: 'Episodul rezumă problema anului 1848: o constituție fără armată și fără administrație în spate nu obligă pe nimeni.',
    },
    {
      question: 'Împotriva vorbei lui Trevelyan despre 1848, ce rezultate durabile arată revizuirea istoriografică?',
      options: [
        'Unificarea imediată a Germaniei și a Italiei',
        'Desființarea definitivă a iobăgiei în ținuturile Habsburgilor, încercarea votului universal masculin în Franța și așezarea politicii de masă',
        'Destrămarea Imperiului Austriac',
        'Introducerea votului femeilor în Europa Centrală',
      ],
      explanation: '1848 nu și-a atins țelurile declarate, dar a schimbat terenul de joc: după aceea, niciun regim nu a mai putut guverna trecând cu vederea opinia publică organizată.',
    },
    {
      question: 'Ce a înțeles Cavour la Plombières, în 1858?',
      options: [
        'Federația statelor italiene sub papă',
        'Un război împotriva Austriei alături de Napoleon al III-lea, în schimbul cedării Savoiei și a orașului Nisa',
        'Cedarea Veneției de către Austria, fără război',
        'Sprijinul britanic pentru expediția lui Garibaldi',
      ],
      explanation: 'Unificarea Italiei a fost o operațiune diplomatică și militară a Piemontului, care a administrat rezultatul ca anexare, nu ca federație.',
    },
    {
      question: 'Ce dezechilibru instituțional a caracterizat Imperiul German din 1871?',
      options: [
        'Un Reichstag ales prin vot universal masculin, care nu îl controla pe cancelarul răspunzător doar în fața împăratului',
        'Un parlament cu puteri depline, în fața unui împărat simbolic',
        'Lipsa oricărei camere alese',
        'Votul femeilor, aplicat doar în Prusia',
      ],
      explanation: 'Votul pentru Reichstag era mai larg decât cel britanic al vremii. Votul larg și puterea parlamentară nulă puteau conviețui.',
    },
    {
      question: 'Care este critica lui Blackbourn și Eley (1984) la adresa tezei Sonderweg?',
      options: [
        'Că Germania s-a democratizat înaintea Franței',
        'Că Imperiul German nu a ajuns să se industrializeze',
        'Că presupune un drum normal spre modernitate pe care nicio țară nu l-a străbătut și preface anul 1933 într-un destin scris în 1871',
        'Că elitele agrare prusace nu au avut niciodată putere politică',
      ],
      explanation: 'Versiunea tare a Sonderwegului este părăsită; dăinuie ca descriere a unui dezechilibru anume, nu ca explicație teleologică a secolului XX german.',
    },
  ],
}
