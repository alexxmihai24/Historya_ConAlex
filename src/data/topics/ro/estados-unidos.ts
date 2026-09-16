import type { TopicTranslation } from '../../types.ts'

/* Traducerea în română a `src/data/topics/estados-unidos.ts`. Aceeași formă:
   7 secțiuni, 18 date, 14 concepte, 3 dezbateri, 20 de surse, 6 imagini și 16
   întrebări cu opțiunile pe aceleași poziții. */
export const estadosUnidosRo: TopicTranslation = {
  title: 'Istoria Statelor Unite',
  description: 'De la treisprezece colonii britanice la prima putere a lumii: independența, expansiunea spre vest, sclavia și războiul civil, și secolul în care Statele Unite au devenit superputere.',
  years: '1607–azi',
  summary:
    'Statele Unite s-au născut în 1776 ca republică a treisprezece foste colonii britanice de pe coasta atlantică, cu vreo două milioane și jumătate de locuitori. Două secole mai târziu erau cea mai mare putere economică și militară a planetei. Istoria lor este străbătută de o contradicție pe care înșiși întemeietorii o cunoșteau: o națiune clădită pe ideea că „toți oamenii sunt creați egali”, care a păstrat sclavia până în 1865 și segregarea rasială legală până în 1964 și care s-a întins spre Pacific pe seama popoarelor indigene și a Mexicului. Ca să înțelegi Statele Unite trebuie să urmărești deopotrivă această promisiune a libertății și excluderile ei: independența și Constituția, cucerirea Vestului, Războiul de Secesiune, industrializarea și imigrația în masă, cele două războaie mondiale, Războiul Rece și mișcarea pentru drepturile civile, până la puterea divizată a secolului XXI.',
  keyDates: [
    { date: '1607', event: 'Întemeierea Jamestown (Virginia), prima colonie engleză permanentă.' },
    { date: '1619', event: 'Sosesc în Virginia primii africani înrobiți și se reunește prima adunare colonială.' },
    { date: '1620', event: 'Pelerinii de pe Mayflower întemeiază Plymouth, în Noua Anglie.' },
    { date: '1773', event: 'Partida de ceai de la Boston, împotriva impozitelor britanice.' },
    { date: '4 iulie 1776', event: 'Declarația de Independență.' },
    { date: '1783', event: 'Tratatul de la Paris: Marea Britanie recunoaște independența.' },
    { date: '1787-1791', event: 'Constituția federală și Declarația Drepturilor. George Washington, primul președinte, în 1789.' },
    { date: '1803', event: 'Cumpărarea Louisianei de la Franța: țara își dublează suprafața.' },
    { date: '1846-1848', event: 'Războiul cu Mexicul: Statele Unite anexează jumătate din teritoriul mexican.' },
    { date: '1861-1865', event: 'Războiul de Secesiune. Lincoln proclamă emanciparea în 1863. Abolirea sclaviei în 1865.' },
    { date: '1898', event: 'Războiul cu Spania: Cuba, Puerto Rico și Filipinele intră în sfera lor.' },
    { date: '1917', event: 'Intrarea în Primul Război Mondial.' },
    { date: '1929-1939', event: 'Marea Depresiune și New Deal-ul lui Franklin D. Roosevelt.' },
    { date: '7 decembrie 1941', event: 'Pearl Harbor: intrarea în al Doilea Război Mondial.' },
    { date: '1954-1968', event: 'Mișcarea pentru drepturile civile: de la Brown contra Consiliului de Educație la asasinarea lui Martin Luther King.' },
    { date: '1969', event: 'Apollo 11 duce primii oameni pe Lună.' },
    { date: '11 septembrie 2001', event: 'Atentatele Al-Qaida la New York și Washington.' },
    { date: '2008', event: 'Criza financiară și alegerea lui Barack Obama, primul președinte afro-american.' },
  ],
  sections: [
    {
      title: 'Popoarele native și cele treisprezece colonii',
      body: [
        'Înainte de europeni, America de Nord era locuită de sute de popoare cu limbi și moduri de viață foarte diferite: agricultori de porumb în est și în sud-vest, precum irochezii sau pueblo, vânători de bizoni în câmpii, pescari pe coasta Pacificului. Orașul Cahokia, lângă Mississippi, a ajuns să aibă în jurul anului 1100 peste zece mii de locuitori. Estimările populației de la nord de Mexic merg de la două la peste șapte milioane. Epidemiile aduse de europeni, împotriva cărora nu aveau apărare, au ucis majoritatea oamenilor chiar înainte ca multe popoare să vadă vreun colonist.',
        'Spania a ajuns prima: a întemeiat Saint Augustine, în Florida, în 1565, și Santa Fe, în New Mexico, în 1610. Dar teritoriile care aveau să formeze Statele Unite au fost colonizate mai ales de Anglia. În 1607, o companie comercială a întemeiat Jamestown, în Virginia, care a supraviețuit cu greu până când tutunul a făcut-o rentabilă. În 1619 au sosit primii africani înrobiți și s-a reunit prima adunare aleasă: libertatea politică și sclavia s-au născut în același an. În 1620, pelerinii de pe Mayflower, puritani care fugeau de Biserica anglicană, au întemeiat Plymouth, iar în 1630 alți puritani au întemeiat Bostonul și colonia Massachusetts.',
        'La mijlocul secolului al XVIII-lea existau treisprezece colonii pe coasta atlantică, foarte diferite între ele. Noua Anglie, în nord, era un ținut de ferme familiale, pescuit, comerț și congregații puritane care prețuiau știința de carte. Coloniile din centru, precum New York și Pennsylvania, întemeiată de quakerul William Penn, erau cele mai diverse ca religie și origine. Sudul, din Virginia până în Georgia, trăia din plantațiile de tutun, orez și indigo lucrate de sclavi: în 1770, unul din cinci locuitori ai coloniilor era sclav.',
        'Coloniile aveau ceva rar în imperiile vremii: se guvernau în bună măsură singure, prin adunări alese de proprietari, care votau impozitele. Marea Britanie, prinsă cu războaiele ei europene, practica ceea ce s-a numit „neglijență binefăcătoare”. Acest obicei al autoguvernării este cheia a ceea ce a urmat.',
      ].join('\n\n'),
    },
    {
      title: 'Independența și Constituția',
      body: [
        'Războiul de Șapte Ani (1756-1763) i-a adus Marii Britanii toată Canada franceză, dar a lăsat-o îndatorată. Ca să plătească apărarea coloniilor, Parlamentul de la Londra le-a impus taxe noi: Legea Timbrului în 1765, care taxa toate documentele tipărite, și apoi taxe vamale pe sticlă, hârtie sau ceai. Coloniștii au răspuns cu boicoturi și cu un principiu: „fără reprezentare nu există impozitare”. Nu alegeau deputați la Londra, deci acel Parlament nu putea să le ceară impozite. În decembrie 1773, la Partida de ceai de la Boston, un grup de coloniști deghizați în indieni a aruncat în port un transport de ceai al Companiei Indiilor de Est.',
        'Londra a răspuns închizând portul Bostonului și suspendând guvernul din Massachusetts. În aprilie 1775, primele focuri de la Lexington și Concord au deschis războiul. Al Doilea Congres Continental l-a numit comandant pe George Washington și, la 4 iulie 1776, a adoptat Declarația de Independență scrisă de Thomas Jefferson: „Considerăm ca adevăruri de la sine înțelese că toți oamenii sunt creați egali, că sunt înzestrați de Creator cu anumite drepturi inalienabile, printre care viața, libertatea și căutarea fericirii”. Jefferson a stăpânit peste șase sute de sclavi de-a lungul vieții.',
        'Războiul a durat opt ani. Armata lui Washington era mică și prost plătită, dar a evitat să fie distrusă. Victoria de la Saratoga din 1777 a convins Franța să intre în război, iar după ea au venit Spania și Olanda. Cu ajutorul flotei franceze, britanicii generalului Cornwallis s-au predat la Yorktown în 1781. Tratatul de la Paris din 1783 a recunoscut independența și a fixat granița pe Mississippi.',
        'Primii ani au fost ai unei confederații slabe, fără putere de a strânge impozite. În 1787, o convenție reunită la Philadelphia a scris o Constituție nouă, în vigoare și azi: un guvern federal cu trei puteri separate —un președinte, un Congres cu două camere și o Curte Supremă— care se controlează reciproc, și state care își păstrează largi competențe. Ca să obțină acordul sudului, fiecare sclav era socotit trei cincimi dintr-o persoană la calculul reprezentării. În 1791 s-au adăugat primele zece amendamente, Declarația Drepturilor, care garantează libertatea de exprimare, a presei și a religiei. George Washington a fost primul președinte, între 1789 și 1797, iar retrăgându-se după două mandate a impus un obicei care a durat până în 1940.',
      ].join('\n\n'),
      callout:
        'Revoluția americană a fost prima care a întemeiat o republică întinsă pe principiul suveranității poporului. A influențat direct Revoluția franceză din 1789 și independențele hispano-americane.',
    },
    {
      title: 'Expansiunea spre vest',
      body: [
        'În 1803, președintele Jefferson a cumpărat de la Napoleon Louisiana, imensul teritoriu dintre Mississippi și Munții Stâncoși, cu cincisprezece milioane de dolari: țara și-a dublat dintr-odată suprafața. Florida a fost cumpărată de la Spania în 1819. În 1823, Doctrina Monroe a avertizat puterile europene să nu intervină pe continentul american: „America pentru americani”.',
        'Expansiunea s-a făcut pe seama popoarelor indigene. Legea Strămutării Indienilor din 1830, impusă de președintele Andrew Jackson, i-a silit pe cei din sud-est —cherokezi, creek, choctaw, chickasaw și seminoli— să-și părăsească pământurile și să plece în actuala Oklahoma. Pe Drumul Lacrimilor din 1838-1839 au murit circa patru mii de cherokezi. Cherokezii adoptaseră o constituție scrisă, un alfabet propriu și un ziar, iar Curtea Supremă le dăduse dreptate; Jackson a ignorat sentința.',
        'În anii 1840 s-a răspândit ideea „destinului manifest”: convingerea că Statele Unite erau menite de Providență să ocupe continentul de la un ocean la altul. Texasul, care se desprinsese de Mexic în 1836, a fost anexat în 1845. Războiul cu Mexicul din 1846-1848 s-a încheiat cu Tratatul de la Guadalupe Hidalgo, prin care Mexicul a pierdut California, New Mexico, Arizona, Nevada, Utah și o parte din Colorado: mai mult de jumătate din teritoriul său. Chiar atunci s-a descoperit aur în California și, în câțiva ani, au sosit sute de mii de căutători.',
        'După războiul civil a urmat cucerirea definitivă a Vestului. Prima cale ferată transcontinentală s-a terminat în 1869. Coloniștii, sprijiniți de Legea Fermelor din 1862, au ocupat Marile Câmpii, iar armata a purtat războaiele indiene împotriva siucșilor, cheyenilor, apașilor și altor popoare, încheiate cu masacrul de la Wounded Knee în 1890. Exterminarea aproape completă a bizonilor a lipsit popoarele din câmpii de mijloacele de trai. În același an, biroul recensământului a declarat frontiera închisă: nu mai rămăsese pământ liber de colonizat.',
      ].join('\n\n'),
    },
    {
      title: 'Sclavie, Războiul de Secesiune și Reconstrucția',
      body: [
        'La începutul secolului al XIX-lea, nordul a abolit treptat sclavia, în timp ce sudul a întărit-o ca niciodată. Mașina de egrenat bumbac din 1793 a făcut din bumbac marea afacere a sudului și primul export al țării, iar numărul sclavilor a crescut de la 700.000 în 1790 la aproape patru milioane în 1860. De fiecare dată când se adăuga un teritoriu nou, apărea aceeași întrebare: va fi stat liber sau sclavagist? Compromisul din Missouri din 1820 și cel din 1850 au fost cârpeli. Aboliționiștii, precum Frederick Douglass, care fugise din sclavie, sau Harriet Beecher Stowe, autoarea Colibei unchiului Tom, câștigau adepți în nord. În 1857, Curtea Supremă, în cazul Dred Scott, a declarat că negrii nu sunt cetățeni și că Congresul nu poate interzice sclavia în teritorii.',
        'În 1860 a câștigat alegerile Abraham Lincoln, din noul Partid Republican, care se opunea extinderii sclaviei spre vest. Unsprezece state din sud s-au desprins și au format Statele Confederate ale Americii, cu Jefferson Davis președinte. Războiul a început în aprilie 1861 cu atacul confederat asupra fortului Sumter. Nordul avea mai multă populație, industrie și căi ferate; sudul, generali buni precum Robert E. Lee și avantajul luptei defensive. A fost primul război industrial: cale ferată, telegraf, puști cu repetiție și tranșee. Au murit circa 620.000 de soldați, poate 750.000, mai mulți decât în toate celelalte războaie ale Statelor Unite la un loc până în Vietnam.',
        'La 1 ianuarie 1863, Lincoln a proclamat emanciparea sclavilor din statele răzvrătite, iar aproape 200.000 de soldați negri s-au înrolat în armata Uniunii. În acel an, la Gettysburg, nordul a câștigat bătălia hotărâtoare, iar Lincoln a rostit un discurs de trei minute despre „guvernarea poporului, de către popor și pentru popor”. Generalul Lee s-a predat la Appomattox în aprilie 1865. Cinci zile mai târziu, Lincoln a fost asasinat într-un teatru din Washington.',
        'După război a venit Reconstrucția (1865-1877). Trei amendamente au schimbat Constituția: al 13-lea a abolit sclavia, al 14-lea i-a făcut cetățeni pe toți cei născuți în țară, cu protecție egală în fața legii, iar al 15-lea a interzis refuzarea dreptului de vot pe motive de rasă. Pentru prima dată au existat senatori și congresmeni negri. Dar albii din sud au răspuns cu violența Ku Klux Klanului, iar în 1877 trupele federale s-au retras. Statele din sud au adoptat atunci legile Jim Crow, care separau școlile, trenurile și restaurantele și îi lipseau pe negri de vot prin taxe și examene. În 1896, în cazul Plessy contra Ferguson, Curtea Supremă le-a declarat constituționale cu formula „separați, dar egali”. Segregarea legală avea să dureze aproape un secol.',
      ].join('\n\n'),
      callout:
        'Războiul de Secesiune a hotărât două lucruri deodată: că Uniunea este indivizibilă și că sclavia dispare. Egalitatea reală a foștilor sclavi și a urmașilor lor a rămas amânată până în anii șaizeci ai secolului următor.',
    },
    {
      title: 'Putere industrială și imperială: din 1877 până la New Deal',
      body: [
        'Între războiul civil și 1900, Statele Unite au devenit prima economie industrială a lumii. A fost „Epoca de Aur” a marilor magnați: Rockefeller în petrol, Carnegie în oțel, Vanderbilt în căi ferate, J. P. Morgan în bănci. Invenții precum telefonul lui Bell sau becul lui Edison și, mai târziu, linia de asamblare a lui Henry Ford, din 1913, au schimbat viața de zi cu zi. Au sosit circa douăzeci de milioane de imigranți între 1880 și 1920, mai ales din Italia, Irlanda, Germania, Imperiul Rus și Europa Centrală, care treceau prin insula Ellis, în fața New Yorkului, și munceau în fabrici cu ziua de douăsprezece ore. A existat și respingere: Legea de Excludere a Chinezilor din 1882 a fost prima care a interzis imigrarea unui popor întreg.',
        'La sfârșitul secolului, țara a ieșit în afară. În 1898, după explozia cuirasatului Maine în Havana, a declarat război Spaniei și în câteva luni i-a luat Cuba, Puerto Rico, Guam și Filipinele; în același an a anexat Hawaiul. În Filipine a purtat apoi un război împotriva independentiștilor care a făcut sute de mii de morți. Theodore Roosevelt a sprijinit independența Panamei ca să construiască acolo canalul, deschis în 1914, și a proclamat dreptul Statelor Unite de a interveni în Caraibe și în America Centrală, ceea ce au și făcut de multe ori în deceniile următoare.',
        'Statele Unite au intrat în Primul Război Mondial în 1917, provocate de războiul submarin german, iar sosirea lor a decis sfârșitul conflictului. Președintele Woodrow Wilson a propus cele Paisprezece Puncte și Liga Națiunilor, dar Senatul a respins participarea țării la ea. Anii douăzeci au fost ani de prosperitate, jazz, radio și film, dar și ai Prohibiției (1920-1933), care interzicea alcoolul și a îmbogățit mafiile. Femeile au obținut dreptul de vot în 1920.',
        'La 24 octombrie 1929, „joia neagră”, s-a prăbușit bursa din New York. A urmat Marea Depresiune: în 1933, unul din patru lucrători era șomer, mii de bănci au dat faliment, iar familii întregi au plecat din Vestul Mijlociu pustiit de secetă. Franklin D. Roosevelt, președinte din 1933, a lansat New Deal-ul: mari lucrări publice, reglementarea băncilor și a bursei, ajutor de șomaj, pensii publice prin Legea Securității Sociale din 1935 și dreptul muncitorilor de a se sindicaliza. Era prima dată când guvernul federal își asuma răspunderea pentru bunăstarea economică a cetățenilor.',
      ].join('\n\n'),
    },
    {
      title: 'Superputerea: al Doilea Război Mondial, Războiul Rece și drepturile civile',
      body: [
        'Statele Unite au rămas neutre la începutul celui de-al Doilea Război Mondial, deși din 1941 trimiteau arme Marii Britanii și URSS. Atacul japonez de la Pearl Harbor, din 7 decembrie 1941, le-a băgat în război. Industria lor a devenit „arsenalul democrației”, iar trupele au luptat în Pacific, în nordul Africii, în Italia și în Normandia. În interior, 120.000 de persoane de origine japoneză, cele mai multe cetățeni americani, au fost internate în lagăre. Războiul s-a încheiat în august 1945 cu bombele atomice de la Hiroshima și Nagasaki.',
        'În 1945, Statele Unite produceau jumătate din bogăția industrială a planetei și erau singura țară cu bomba atomică. În fața URSS și-au asumat conducerea blocului occidental: Planul Marshall din 1948 a ajutat la reconstrucția Europei Occidentale, NATO s-a născut în 1949, iar țara a luptat în Coreea (1950-1953). Teama de comunism a produs în interior „vânătoarea de vrăjitoare” a senatorului McCarthy. În anii cincizeci și șaizeci, clasa mijlocie a trăit o prosperitate fără precedent, cu automobile, televiziune și case în suburbii, în timp ce cursa spațială cu URSS culmina în 1969 cu Apollo 11 pe Lună.',
        'Această prosperitate îi excludea pe afro-americanii din sud, supuși segregării. În 1954, Curtea Supremă, în cazul Brown contra Consiliului de Educație, a declarat neconstituțională segregarea școlară. În 1955, la Montgomery, Rosa Parks a refuzat să-i cedeze locul din autobuz unui alb, iar tânărul pastor Martin Luther King a condus un boicot de un an. Mișcarea pentru drepturile civile, întemeiată pe nesupunerea civică nonviolentă, a umplut sudul de marșuri și proteste, în ciuda violenței poliției și a asasinatelor. În 1963, King a rostit la Washington discursul „Am un vis”. Legea Drepturilor Civile din 1964 a interzis segregarea, iar Legea Dreptului de Vot din 1965 a înlăturat piedicile din calea votului negrilor. King a fost asasinat în 1968.',
        'Anii șaizeci au fost și anii războiului din Vietnam, unde au ajuns să lupte peste jumătate de milion de soldați americani și au murit circa 58.000. Protestele împotriva războiului, mai ales în universități, s-au adăugat feminismului și contraculturii. Președintele John F. Kennedy a fost asasinat la Dallas în 1963. În 1974, președintele Richard Nixon a demisionat din cauza scandalului Watergate, spionarea rivalilor democrați, iar în 1975 Saigonul a căzut în mâinile comuniștilor. Pentru prima dată, Statele Unite pierduseră un război.',
      ].join('\n\n'),
    },
    {
      title: 'De la Reagan la secolul XXI',
      body: [
        'Ronald Reagan, președinte între 1981 și 1989, a redus impozitele și reglementările și a crescut mult cheltuielile militare în fața URSS. Când Uniunea Sovietică s-a destrămat în 1991, Statele Unite au rămas singura superputere. Anii nouăzeci, cu Bill Clinton, au fost ani de creștere, de naștere a internetului și de globalizare condusă de ei.',
        'La 11 septembrie 2001, teroriști Al-Qaida au deturnat patru avioane și le-au izbit de Turnurile Gemene din New York și de Pentagon; au murit aproape trei mii de oameni. Președintele George W. Bush a declarat „războiul împotriva terorii”: a invadat Afganistanul în 2001 și, în 2003, Irakul, cu argumentul unor arme de distrugere în masă care nu existau. Ambele războaie s-au prelungit ani la rând; cel din Afganistan s-a încheiat în 2021 cu retragerea trupelor și întoarcerea talibanilor la putere.',
        'În 2008 a izbucnit o criză financiară pornită de la creditele ipotecare cu risc ridicat, care a tras după ea economia mondială. În același an, Barack Obama a devenit primul președinte afro-american, ceva de neimaginat cu patruzeci de ani înainte, și a adoptat o reformă a sănătății care a extins asigurarea medicală la milioane de oameni. În 2016 a câștigat Donald Trump, un om de afaceri fără experiență politică, cu un discurs naționalist împotriva imigrației și a liberului schimb. În 2020 l-a învins Joe Biden; Trump nu a recunoscut rezultatul, iar la 6 ianuarie 2021 o mulțime de susținători ai săi a asaltat Capitoliul ca să împiedice validarea. Trump a câștigat din nou alegerile din 2024 și s-a întors la Casa Albă în ianuarie 2025.',
        'Statele Unite rămân prima economie și prima putere militară a lumii și centrul inovației tehnologice. Dar se confruntă cu concurența Chinei, cu o inegalitate în creștere și cu o polarizare politică ce împarte țara în privința imigrației, a avortului, a armelor sau a rasei. Sunt, în bună măsură, aceleași întrebări ca la întemeiere: cine aparține națiunii și până unde ajunge promisiunea egalității.',
      ].join('\n\n'),
    },
  ],
  concepts: [
    { term: 'cele treisprezece colonii', definition: 'Coloniile britanice de pe coasta atlantică, din New Hampshire până în Georgia, care și-au declarat independența în 1776.' },
    { term: 'fără reprezentare nu există impozitare', definition: 'Principiul coloniștilor: Parlamentul de la Londra, unde nu aveau deputați, nu le putea cere impozite.' },
    { term: 'Declarația de Independență', definition: 'Document adoptat la 4 iulie 1776, scris de Jefferson, care justifică ruptura cu Marea Britanie prin drepturile naturale ale oamenilor.' },
    { term: 'federalism', definition: 'Împărțirea puterii între un guvern central și state, fiecare cu competențe proprii. Temelia Constituției din 1787.' },
    { term: 'separația puterilor', definition: 'Împărțirea guvernării în puterea executivă, legislativă și judecătorească, care se controlează reciproc. În engleză, checks and balances.' },
    { term: 'Declarația Drepturilor', definition: 'Primele zece amendamente la Constituție, din 1791. Garantează libertăți precum cea de exprimare, a presei și a religiei.' },
    { term: 'destin manifest', definition: 'Credința din secolul al XIX-lea că Statele Unite erau menite să se întindă peste tot continentul nord-american.' },
    { term: 'Doctrina Monroe', definition: 'Declarație din 1823 care avertiza Europa să nu intervină în America. Rezumată drept „America pentru americani”.' },
    { term: 'Confederația', definition: 'Statele Confederate ale Americii, formate din unsprezece state din sud care s-au desprins în 1861 ca să păstreze sclavia.' },
    { term: 'Reconstrucția', definition: 'Perioada 1865-1877, în care guvernul federal a ocupat sudul și a încercat să garanteze drepturile foștilor sclavi.' },
    { term: 'Jim Crow', definition: 'Numele legilor de segregare rasială din statele sudice, în vigoare de la sfârșitul secolului al XIX-lea până în 1964.' },
    { term: 'New Deal', definition: 'Programul lui Franklin D. Roosevelt din 1933-1939 împotriva Marii Depresiuni: lucrări publice, reglementare financiară și securitate socială.' },
    { term: 'drepturile civile', definition: 'Mișcarea din anii cincizeci și șaizeci, condusă printre alții de Martin Luther King, care a pus capăt segregării rasiale legale.' },
    { term: 'excepționalism', definition: 'Ideea că Statele Unite sunt o națiune deosebită de celelalte prin originea, instituțiile și misiunea lor în lume.' },
  ],
  debates: [
    {
      question: 'A fost independența o revoluție radicală sau conservatoare?',
      positions: [
        { school: 'Școala progresistă', argument: 'Charles Beard a susținut în 1913 că, de fapt, Constituția a fost opera unor proprietari care voiau să-și apere interesele economice în fața datornicilor și a micilor fermieri. Independența ar fi fost și un conflict de clasă în interiorul coloniilor.' },
        { school: 'Școala ideologică', argument: 'Bernard Bailyn a arătat în 1967, pornind de la broșurile epocii, că oamenii credeau sincer că își apără libertatea în fața unei conspirații a corupției și a tiraniei. Gordon Wood a adăugat în 1992 că revoluția a fost radicală pentru că a distrus societatea ierarhică colonială și a creat o democrație a oamenilor de rând.' },
        { school: 'Istoria de jos și a celor excluși', argument: 'Istorici precum Gary Nash sau Alan Taylor subliniază că pentru sclavi, indigeni și femei independența nu a adus libertate, ba chiar a înrăutățit situația popoarelor indigene, lipsindu-le de protecția Coroanei.' },
      ],
      state: 'Astăzi se tinde spre integrarea celor trei perspective: o revoluție făcută în numele unor principii universale pe care societatea care a făcut-o nu le-a aplicat tuturor. Aniversarea a 250 de ani, în 2026, a reaprins discuția.',
    },
    {
      question: 'Care a fost cauza Războiului de Secesiune?',
      positions: [
        { school: '„Cauza pierdută”', argument: 'După înfrângere, foștii confederați au răspândit ideea că sudul a luptat pentru drepturile statelor și pentru modul lui de viață, nu pentru sclavie. Această versiune a dominat în sud și în bună parte din manuale până la mijlocul secolului XX.' },
        { school: 'Sclavia drept cauză centrală', argument: 'Istorici precum James McPherson sau Eric Foner, sprijiniți pe declarațiile de secesiune ale statelor sudice, arată că apărarea și extinderea sclaviei a fost motivul explicit al separării. „Drepturile statelor” însemnau, concret, dreptul de a avea sclavi.' },
        { school: 'Conflict economic', argument: 'Școala lui Beard a interpretat războiul ca pe o ciocnire între capitalismul industrial al nordului și economia agrară a sudului, cu sclavia ca element secundar.' },
      ],
      state: 'Există astăzi un larg consens academic că sclavia a fost cauza fundamentală. Dezbaterea rămâne vie în memoria publică, după cum arată polemicile despre statuile generalilor confederați.',
    },
    {
      question: 'Sunt Statele Unite un imperiu?',
      positions: [
        { school: 'Excepționalism', argument: 'Statele Unite ar fi o republică ce, în afară de paranteza din 1898, nu a căutat colonii și a răspândit în lume democrația și comerțul liber. Puterea lor s-ar sprijini mai degrabă pe atracția modelului decât pe cucerire.' },
        { school: 'Școala revizionistă', argument: 'William Appleman Williams a susținut în Tragedia diplomației americane (1959) că politica externă urmărea deschiderea de piețe pentru economia lor, ceea ce a dus la intervenții neîncetate în America Latină și în lume.' },
        { school: 'Imperiu informal', argument: 'Autori precum Niall Ferguson sau Daniel Immerwahr vorbesc despre un imperiu de tip nou, făcut din baze militare, teritorii precum Puerto Rico sau Guam și hegemonie economică, un imperiu care preferă să nu se numească astfel.' },
      ],
      state: 'Termenul rămâne discutat. Nimeni nu contestă hegemonia americană de după 1945; se discută dacă cuvântul imperiu o descrie mai bine decât cele de conducere sau hegemonie.',
    },
  ],
  sources: [
    { author: 'William Bradford', title: 'Of Plymouth Plantation', year: '1630-1651', kind: 'primaria', note: 'Cronica pelerinilor de pe Mayflower, scrisă de guvernatorul lor.' },
    { author: 'Thomas Paine', title: 'Bunul-simț', year: '1776', kind: 'primaria', note: 'Broșura care i-a convins pe mulți coloniști de independență. S-a vândut în sute de mii de exemplare.' },
    { author: 'Thomas Jefferson și Congresul Continental', title: 'Declarația de Independență', year: '1776', kind: 'primaria' },
    { author: 'Convenția de la Philadelphia', title: 'Constituția Statelor Unite', year: '1787', kind: 'primaria' },
    { author: 'Alexander Hamilton, James Madison și John Jay', title: 'Federalistul', year: '1787-1788', kind: 'primaria', note: 'Articole în apărarea noii Constituții. Cea mai bună explicație a felului în care a fost gândită.' },
    { author: 'Alexis de Tocqueville', title: 'Despre democrație în America', year: '1835-1840', kind: 'primaria', note: 'Analiza unui aristocrat francez asupra societății democratice americane.' },
    { author: 'Frederick Douglass', title: 'Viața unui sclav american povestită de el însuși', year: '1845', kind: 'primaria', note: 'Autobiografia unui sclav fugit care a devenit marele orator aboliționist.' },
    { author: 'Abraham Lincoln', title: 'Proclamația de Emancipare și Discursul de la Gettysburg', year: '1863', kind: 'primaria' },
    { author: 'Franklin D. Roosevelt', title: 'Discuțiile de la gura sobei', year: '1933-1944', kind: 'primaria', note: 'Discursuri radiofonice prin care a explicat New Deal-ul și războiul.' },
    { author: 'Martin Luther King', title: 'Scrisoare din închisoarea din Birmingham și „Am un vis”', year: '1963', kind: 'primaria' },
    { author: 'Charles Beard', title: 'O interpretare economică a Constituției', year: '1913', kind: 'estudio' },
    { author: 'William Appleman Williams', title: 'Tragedia diplomației americane', year: '1959', kind: 'estudio' },
    { author: 'Bernard Bailyn', title: 'Originile ideologice ale Revoluției americane', year: '1967', kind: 'estudio' },
    { author: 'Howard Zinn', title: 'Istoria poporului american', year: '1980', kind: 'estudio', note: 'Istorie povestită dinspre muncitori, femei, sclavi și indigeni. Foarte citită și foarte discutată.' },
    { author: 'James McPherson', title: 'Battle Cry of Freedom: războiul civil american', year: '1988', kind: 'estudio', note: 'Sinteza de referință despre Războiul de Secesiune.' },
    { author: 'Eric Foner', title: 'Reconstrucția', year: '1988', kind: 'estudio', note: 'Reinterpretare a Reconstrucției ca experiment democratic întrerupt.' },
    { author: 'Gordon Wood', title: 'Radicalismul Revoluției americane', year: '1992', kind: 'estudio' },
    { author: 'David M. Kennedy', title: 'Freedom from Fear', year: '1999', kind: 'estudio', note: 'Marea Depresiune, New Deal-ul și al Doilea Război Mondial.' },
    { author: 'Jill Lepore', title: 'Aceste adevăruri. O istorie a Statelor Unite', year: '2018', kind: 'estudio', note: 'Sinteză recentă într-un volum, construită în jurul promisiunilor Declarației de Independență.' },
    { author: 'Daniel Immerwahr', title: 'Cum să ascunzi un imperiu', year: '2019', kind: 'estudio', note: 'Istoria teritoriilor și a bazelor pe care Statele Unite le-au avut în afara continentului.' },
  ],
  images: [
    { alt: 'Pictură a unei săli cu zeci de bărbați în redingotă; cinci dintre ei înmânează un document unui om așezat', caption: 'Declarația de Independență, de John Trumbull (1819): comitetul de redactare prezintă textul Congresului Continental.' },
    { alt: 'Pictură a unei săli cu delegați în jurul unei mese, cu George Washington în picioare pe un podium', caption: 'Semnarea Constituției la Philadelphia, 1787, pictată de Howard Chandler Christy în 1940. Washington prezidează convenția.' },
    { alt: 'Pictură alegorică a unei femei uriașe în alb care plutește spre vest deasupra coloniștilor și a trenurilor, în timp ce indigenii și bizonii fug', caption: 'American Progress, de John Gast (1872): alegoria destinului manifest. Indigenii și bizonii fug spre întuneric în fața înaintării coloniștilor.' },
    { alt: 'Fotografie veche a unei mari mulțimi în aer liber; în centru, aproape neobservat, un bărbat fără pălărie', caption: 'Gettysburg, 19 noiembrie 1863: singura fotografie cunoscută în care apare Lincoln în ziua discursului său, în mijlocul mulțimii.' },
    { alt: 'Fotografie alb-negru a unei femei cu chipul îngrijorat, cu mâna la bărbie și doi copii sprijiniți de umerii ei', caption: 'Mamă migrantă, de Dorothea Lange (1936): o zilieră cu copiii ei în California, cea mai cunoscută imagine a Marii Depresiuni.' },
    { alt: 'Fotografie alb-negru a unui bărbat vorbind la mai multe microfoane, cu brațul ridicat', caption: 'Martin Luther King la Marșul asupra Washingtonului, 28 august 1963, ziua discursului „Am un vis”.' },
  ],
  questions: [
    {
      question: 'Care a fost prima colonie engleză permanentă din America de Nord?',
      options: ['Plymouth', 'Boston', 'Jamestown', 'New York'],
      explanation: 'Jamestown, în Virginia, a fost întemeiat în 1607. Plymouth, cel al pelerinilor de pe Mayflower, a venit în 1620.',
    },
    {
      question: 'Ce însemna lozinca „fără reprezentare nu există impozitare”?',
      options: [
        'Că locuitorii coloniilor refuzau să plătească orice impozit',
        'Că Parlamentul britanic, unde coloniștii nu aveau deputați, nu le putea cere impozite',
        'Că doar proprietarii de sclavi trebuiau să plătească impozite',
        'Că impozitele trebuiau votate de guvernatorii regali',
      ],
      explanation: 'Adunările coloniale își votau propriile impozite. Legile de la Londra de după 1763 au rupt acest obicei.',
    },
    {
      question: 'Cine a scris Declarația de Independență din 1776?',
      options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'Abraham Lincoln'],
      explanation: 'Jefferson a scris ciorna, pe care Congresul Continental a retușat-o și a adoptat-o la 4 iulie 1776.',
    },
    {
      question: 'Ce victorie a convins Franța să se alieze cu coloniștii?',
      options: ['Yorktown', 'Saratoga', 'Lexington', 'Gettysburg'],
      explanation: 'Saratoga, în 1777, a arătat că răsculații pot învinge. Yorktown, în 1781, a fost victoria finală, cu ajutor francez.',
    },
    {
      question: 'Ce este Declarația Drepturilor a Statelor Unite?',
      options: [
        'Declarația de Independență',
        'Primele zece amendamente la Constituție, adoptate în 1791',
        'Tratatul de pace cu Marea Britanie',
        'Legea care a abolit sclavia',
      ],
      explanation: 'Garantează, printre altele, libertatea de exprimare, a presei și a religiei.',
    },
    {
      question: 'De la cine au cumpărat Statele Unite Louisiana în 1803?',
      options: ['De la Spania', 'De la Marea Britanie', 'De la Franța lui Napoleon', 'De la Mexic'],
      explanation: 'Jefferson a plătit cincisprezece milioane de dolari, iar țara și-a dublat suprafața.',
    },
    {
      question: 'Ce a fost Drumul Lacrimilor?',
      options: [
        'Ruta sclavilor fugari spre Canada',
        'Deportarea forțată a cherokezilor și a altor popoare din sud-est spre vest',
        'Drumul căutătorilor de aur spre California',
        'Retragerea armatei confederate în 1865',
      ],
      explanation: 'A fost urmarea Legii Strămutării din 1830. În marșul din 1838-1839 au murit circa patru mii de cherokezi.',
    },
    {
      question: 'Ce a pierdut Mexicul în războiul din 1846-1848?',
      options: [
        'Doar Texasul',
        'Florida și Cuba',
        'Mai mult de jumătate din teritoriul său, inclusiv California și New Mexico',
        'Nimic, pentru că a câștigat războiul',
      ],
      explanation: 'Prin Tratatul de la Guadalupe Hidalgo, Mexicul a cedat California, New Mexico, Arizona, Nevada, Utah și o parte din Colorado.',
    },
    {
      question: 'Ce fapt a declanșat secesiunea statelor din sud?',
      options: [
        'Cumpărarea Alaskăi',
        'Victoria electorală a lui Abraham Lincoln în 1860',
        'Războiul cu Mexicul',
        'Asasinarea lui Lincoln',
      ],
      explanation: 'Lincoln și Partidul Republican se opuneau extinderii sclaviei spre vest. Unsprezece state s-au desprins și au format Confederația.',
    },
    {
      question: 'Ce a făcut al 13-lea amendament al Constituției, din 1865?',
      options: ['A dat dreptul de vot femeilor', 'A abolit sclavia', 'A interzis alcoolul', 'A creat impozitul pe venit'],
      explanation: 'Al 14-lea a dat cetățenia tuturor celor născuți în țară, iar al 15-lea a interzis refuzarea votului pe motive de rasă.',
    },
    {
      question: 'Ce stabilea sentința Plessy contra Ferguson din 1896?',
      options: [
        'Că segregarea rasială era constituțională dacă serviciile erau „separate, dar egale”',
        'Că sclavii fugiți trebuiau înapoiați stăpânilor',
        'Că segregarea școlară era neconstituțională',
        'Că indigenii erau cetățeni',
      ],
      explanation: 'A dat acoperire legală legilor Jim Crow. A fost anulată de sentința Brown contra Consiliului de Educație, în 1954.',
    },
    {
      question: 'Ce teritorii au obținut Statele Unite după războiul cu Spania din 1898?',
      options: [
        'Cuba, Puerto Rico, Guam și Filipinele',
        'Florida și Louisiana',
        'Hawaii și Alaska',
        'Panama și Nicaragua',
      ],
      explanation: 'Cuba a rămas protectorat și a devenit independentă în 1902; Puerto Rico și Guam sunt și azi teritorii americane.',
    },
    {
      question: 'Ce a fost New Deal-ul?',
      options: [
        'Tratatul de pace al Primului Război Mondial',
        'Programul lui Roosevelt împotriva Marii Depresiuni',
        'Ajutorul american pentru Europa după 1945',
        'Legea care a pus capăt segregării',
      ],
      explanation: 'A cuprins mari lucrări publice, reglementarea băncilor și a bursei, ajutor de șomaj și pensii publice.',
    },
    {
      question: 'Ce a făcut Rosa Parks la Montgomery, în 1955?',
      options: [
        'A câștigat alegerile pentru primărie',
        'A refuzat să-i cedeze locul din autobuz unui pasager alb',
        'A întemeiat Ku Klux Klanul',
        'A scris Coliba unchiului Tom',
      ],
      explanation: 'Arestarea ei a declanșat boicotul autobuzelor condus de Martin Luther King, punctul de plecare al mișcării pentru drepturile civile.',
    },
    {
      question: 'De ce a demisionat președintele Richard Nixon în 1974?',
      options: [
        'Pentru că a pierdut războiul din Vietnam',
        'Din cauza scandalului Watergate',
        'Din cauza unei boli grave',
        'Din cauza crizei petrolului',
      ],
      explanation: 'Echipa sa a spionat sediul Partidului Democrat, iar el a încercat să mușamalizeze fapta. Este singurul președinte care a demisionat.',
    },
    {
      question: 'Ce s-a întâmplat la 6 ianuarie 2021?',
      options: [
        'Învestirea lui Barack Obama',
        'Asaltul asupra Capitoliului de către susținătorii lui Trump, ca să împiedice validarea lui Biden',
        'Atentatele Al-Qaida',
        'Retragerea din Afganistan',
      ],
      explanation: 'Trump nu și-a recunoscut înfrângerea la alegerile din 2020. Asaltul a fost cel mai mare atac asupra sediului Congresului de la 1814 încoace.',
    },
  ],
}
