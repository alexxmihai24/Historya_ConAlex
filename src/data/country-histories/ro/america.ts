import type { CountryHistory } from '../../types.ts'

/* Traducerea în română a `../america.ts` (America și Oceania). Aceleași chei
   (numele în spaniolă), aceleași paragrafe și același număr de date. */
export const AMERICA_RO: Record<string, CountryHistory> = {
  Argentina: {
    text: [
      'Înainte de europeni, nord-vestul făcea parte din periferia Imperiului Inca, iar în Pampa și Patagonia trăiau popoare de vânători. Pedro de Mendoza a întemeiat Buenos Aires în 1536, abandonat și reîntemeiat de Juan de Garay în 1580. Regiunea a depins de viceregatul Peru până când în 1776 s-a creat viceregatul Río de la Plata, cu capitala la Buenos Aires.',
      'Revoluția din Mai 1810 a deschis drumul independenței, declarată la Tucumán în 1816; José de San Martín a trecut Anzii pentru a elibera Chile și Peru. Au urmat decenii de războaie civile între unitari și federali și dictatura lui Juan Manuel de Rosas. După Constituția din 1853 au sosit milioane de imigranți, mai ales italieni și spanioli, iar în jurul anului 1900 Argentina a devenit una dintre cele mai bogate țări din lume datorită cărnii și grâului. „Cucerirea deșertului” din 1878-1885 a supus popoarele indigene din Patagonia.',
      'Secolul XX a alternat democrația cu lovituri militare. Juan Domingo Perón, președinte din 1946, împreună cu soția sa Eva, a creat o mișcare de masă care a marcat întreaga politică de după. Dictatura din 1976-1983 a făcut să dispară circa treizeci de mii de oameni și a pierdut Războiul Malvinelor cu Marea Britanie în 1982, ceea ce a adus democrația în 1983. Țara a trecut prin crize economice repetate, precum corralito din 2001.',
    ],
    dates: [['1580', 'Reîntemeierea orașului Buenos Aires.'], ['1816', 'Declarația de independență.'], ['1853', 'Constituția.'], ['1946', 'Perón, președinte.'], ['1976-1983', 'Dictatura militară.'], ['1982', 'Războiul Malvinelor.']],
  },
  Bolivia: {
    text: [
      'Lângă lacul Titicaca a înflorit între secolele al V-lea și al XI-lea civilizația Tiwanaku. În secolul al XV-lea, incașii au cucerit Altiplano. Spaniolii au sosit în anii 1530, iar în 1545 au descoperit muntele de argint de la Potosí, care a fost timp de un secol cea mai mare sursă de argint din lume; indigenii lucrau în minele sale prin sistemul forțat al mitei.',
      'Teritoriul, numit Peru de Sus, a depins de Lima și apoi de Buenos Aires. În 1780-1781, rebeliunile lui Túpac Amaru al II-lea și Túpac Katari au zguduit Anzii. După războiul de independență, Bolivia s-a născut în 1825 și și-a luat numele de la Simón Bolívar. Și-a pierdut coasta în fața Chile în Războiul Pacificului (1879-1884) și Chaco în fața Paraguayului în războiul din 1932-1935.',
      'Revoluția din 1952 a naționalizat minele, a făcut reforma agrară și le-a dat vot indigenilor. Au urmat ani de lovituri militare; în 1967, Che Guevara a fost capturat și executat în Bolivia. În 2006, Evo Morales a devenit primul președinte indigen, iar în 2009 o nouă constituție a declarat țara Stat Plurinațional.',
    ],
    dates: [['sec. V-XI', 'Civilizația Tiwanaku.'], ['1545', 'Descoperirea argintului de la Potosí.'], ['1825', 'Independența.'], ['1879-1884', 'Pierderea litoralului în Războiul Pacificului.'], ['1952', 'Revoluția națională.'], ['2006', 'Evo Morales, primul președinte indigen.']],
  },
  Brasil: {
    text: [
      'Brazilia era locuită de milioane de indigeni din popoare precum tupi și guarani când Pedro Álvares Cabral a sosit în 1500 și a revendicat-o pentru Portugalia. Prima afacere a fost lemnul de brazil, care a dat numele țării, iar apoi zahărul, cultivat în nord-est cu sclavi africani. Brazilia a fost cea mai mare destinație a comerțului atlantic cu sclavi: a primit circa patru milioane de africani. În secolul al XVIII-lea, aurul din Minas Gerais a mutat centrul coloniei spre sud.',
      'Fugind de Napoleon, curtea portugheză s-a instalat la Rio de Janeiro în 1808. În 1822, prințul Pedro a proclamat independența și a devenit împărat: Brazilia a fost monarhie până în 1889. A fost ultima țară din America care a abolit sclavia, în 1888, iar în anul următor s-a proclamat republica.',
      'În secolul XX, cafeaua, industria și imigrația europeană și japoneză au transformat țara. Getúlio Vargas a guvernat între 1930 și 1954 și a creat Estado Novo. În 1960 s-a inaugurat noua capitală, Brasília. După dictatura militară din 1964-1985, Brazilia a revenit la democrație. Astăzi este cea mai mare economie a Americii Latine.',
    ],
    dates: [['1500', 'Sosirea lui Cabral.'], ['1808', 'Curtea portugheză se instalează la Rio.'], ['1822', 'Independența.'], ['1888', 'Abolirea sclaviei.'], ['1889', 'Republica.'], ['1964-1985', 'Dictatura militară.']],
  },
  Chile: {
    text: [
      'Nordul Chile a făcut parte din Imperiul Inca, dar în sud mapuche au rezistat atât incașilor, cât și spaniolilor. Pedro de Valdivia a întemeiat Santiago în 1541. Războiul Arauco împotriva mapuche a durat peste trei secole, iar poemul La Araucana al lui Ercilla l-a cântat încă din secolul al XVI-lea.',
      'Chile și-a proclamat primul guvern propriu în 1810 și și-a câștigat independența după victoria de la Chacabuco din 1817, cu San Martín și Bernardo O’Higgins. A avut un stat stabil, consolidat devreme. A învins Peru și Bolivia în Războiul Pacificului (1879-1884) și a câștigat deșerturile din nord, bogate în salpetru și mai târziu în cupru. La sfârșitul secolului al XIX-lea a ocupat definitiv ținuturile mapuche.',
      'În 1970 a fost ales socialistul Salvador Allende. La 11 septembrie 1973, o lovitură militară condusă de Augusto Pinochet a bombardat palatul La Moneda, unde a murit Allende. Dictatura a ucis și a făcut să dispară mii de oameni și a aplicat reforme economice neoliberale. În plebiscitul din 1988, chilienii i-au spus nu lui Pinochet, iar în 1990 democrația a revenit.',
    ],
    dates: [['1541', 'Întemeierea orașului Santiago.'], ['1818', 'Proclamarea independenței.'], ['1879-1884', 'Războiul Pacificului.'], ['1973', 'Lovitura de stat a lui Pinochet.'], ['1988', 'Plebiscitul lui „nu”.'], ['1990', 'Revenirea la democrație.']],
  },
  Colombia: {
    text: [
      'Înainte de spanioli, muisca de pe podișul Bogotá erau faimoși pentru bijuteriile lor de aur, care au dat naștere legendei El Dorado, iar tayrona trăiau în Sierra Nevada de Santa Marta. Spaniolii au întemeiat Santa Marta în 1525, Cartagena de Indias în 1533 și Bogotá în 1538. Din 1739, regiunea a fost viceregatul Noua Granada.',
      'Strigătul de independență din 1810 a fost urmat de războaie până când Simón Bolívar a învins la Boyacá în 1819. S-a născut Marea Columbie, care includea Venezuela, Ecuador și Panama și s-a destrămat în 1830. Secolul al XIX-lea a fost marcat de războaiele dintre liberali și conservatori; Războiul de O Mie de Zile, din 1899-1902, a fost urmat de pierderea Panamei în 1903.',
      'Asasinarea liderului liberal Jorge Eliécer Gaitán în 1948 a declanșat Bogotazo și o perioadă de violență cu sute de mii de morți. Din anii șaizeci au apărut gherile precum FARC și ELN, iar în anii optzeci narcotraficul, cu Pablo Escobar, a aruncat țara în teroare. Acordul de pace cu FARC din 2016 a pus capăt celui mai lung conflict armat din America. Gabriel García Márquez, laureat Nobel în 1982, a povestit această țară în Un veac de singurătate.',
    ],
    dates: [['1538', 'Întemeierea orașului Bogotá.'], ['1819', 'Bătălia de la Boyacá.'], ['1903', 'Separarea Panamei.'], ['1948', 'Bogotazo.'], ['1964', 'Se nasc FARC.'], ['2016', 'Acordul de pace.']],
  },
  Ecuador: {
    text: [
      'Pe coasta Ecuadorului a înflorit cultura Valdivia, una dintre primele din America care au produs ceramică, în jurul anului 3500 î.Hr. Incașii au cucerit regiunea la sfârșitul secolului al XV-lea, iar Quito a fost a doua capitală a imperiului. Războiul dintre Atahualpa, care domnea de la Quito, și fratele său Huáscar a înlesnit cucerirea spaniolă din 1532-1534.',
      'Quito a fost sediul unei audiențe spaniole și un mare centru de artă colonială, Școala de la Quito. Primul strigăt de independență din America de Sud s-a dat la Quito în 1809. Sucre a învins în bătălia de la Pichincha în 1822, iar Ecuadorul a făcut parte din Marea Columbie până la separarea din 1830.',
      'Secolul al XIX-lea i-a opus pe conservatorii din munți, precum Gabriel García Moreno, liberalilor de pe coastă, precum Eloy Alfaro. Cacaoul, bananele și, din 1972, petrolul au susținut economia. Ecuadorul a pierdut o mare parte din Amazonia în fața Perului în 1942 și a semnat pacea definitivă în 1998. În 2000 a adoptat dolarul ca monedă. În 2008, constituția sa a fost prima care a recunoscut drepturi naturii.',
    ],
    dates: [['c. 3500 î.Hr.', 'Cultura Valdivia.'], ['1534', 'Cucerirea spaniolă a orașului Quito.'], ['1809', 'Primul strigăt de independență.'], ['1822', 'Bătălia de la Pichincha.'], ['1830', 'Separarea de Marea Columbie.'], ['2000', 'Dolarizarea.']],
  },
  Guyana: {
    text: [
      'Regiunea era locuită de popoare carib și arawak. Olandezii au întemeiat colonii în secolul al XVII-lea pe râurile Essequibo, Demerara și Berbice, cu plantații de zahăr lucrate de sclavi africani. Marea revoltă a sclavilor din Berbice, din 1763, a durat aproape un an.',
      'Marea Britanie a ocupat coloniile și le-a unit în 1831 sub numele de Guyana Britanică. După abolirea sclaviei în 1834, britanicii au adus sute de mii de muncitori din India, care sunt astăzi cel mai numeros grup al populației.',
      'Guyana și-a câștigat independența în 1966 și este singura țară din America de Sud cu engleza ca limbă oficială. Politica a fost marcată de rivalitatea dintre populația de origine indiană și cea de origine africană. Venezuela revendică teritoriul de la vest de Essequibo, două treimi din țară. Descoperirea petrolului în larg în 2015 a transformat Guyana într-una dintre economiile cu cea mai rapidă creștere din lume.',
    ],
    dates: [['1763', 'Revolta sclavilor din Berbice.'], ['1831', 'Guyana Britanică.'], ['1834', 'Abolirea sclaviei.'], ['1966', 'Independența.'], ['2015', 'Descoperirea petrolului.']],
  },
  Paraguay: {
    text: [
      'Regiunea era locuită de poporul guarani, a cărui limbă este și azi oficială și e vorbită de majoritatea paraguayenilor. Spaniolii au întemeiat Asunción în 1537, care a fost o vreme centrul colonizării din Río de la Plata. Între 1609 și 1767, iezuiții au creat reducțiile, sate misionare guarani cu mare autonomie, până la expulzarea lor.',
      'Paraguayul și-a câștigat independența în 1811, iar doctorul José Gaspar Rodríguez de Francia l-a condus ca dictator perpetuu până în 1840, izolându-l de exterior. Sub Francisco Solano López, țara s-a confruntat în Războiul Triplei Alianțe (1864-1870) cu Brazilia, Argentina și Uruguay: a murit poate mai mult de jumătate din populație și marea majoritate a bărbaților adulți.',
      'Paraguayul a câștigat Războiul Chaco împotriva Boliviei în 1932-1935. Alfredo Stroessner a guvernat ca dictator între 1954 și 1989, una dintre cele mai lungi dictaturi din America. De atunci este democrație. Marea sa bogăție este energia hidroelectrică a barajelor Itaipú și Yacyretá.',
    ],
    dates: [['1537', 'Întemeierea orașului Asunción.'], ['1609', 'Primele reducții iezuite.'], ['1811', 'Independența.'], ['1864-1870', 'Războiul Triplei Alianțe.'], ['1932-1935', 'Războiul Chaco.'], ['1954-1989', 'Dictatura lui Stroessner.']],
  },
  Perú: {
    text: [
      'Peru este unul dintre leagănele civilizației: orașul Caral are aproape cinci mii de ani. Au urmat Chavín, Paracas, Nazca cu liniile sale din deșert, moche, Wari și Chimú. Din secolul al XV-lea, Imperiul Inca, cu capitala la Cuzco, a dominat Anzii din Columbia până în Chile, cu o rețea de drumuri de mii de kilometri și orașe precum Machu Picchu.',
      'Francisco Pizarro l-a capturat pe incașul Atahualpa la Cajamarca în 1532 și a întemeiat Lima în 1535. Viceregatul Peru a fost timp de două secole centrul puterii spaniole în America de Sud, datorită argintului de la Potosí. Rebeliunea lui Túpac Amaru al II-lea din 1780 a fost zdrobită. San Martín a proclamat independența în 1821, iar victoria de la Ayacucho din 1824 a pus capăt dominației spaniole pe continent.',
      'Peru a pierdut teritoriu în fața Chile în Războiul Pacificului (1879-1884). Secolul XX a alternat guverne civile și militare. În anii optzeci, gherila maoistă Calea Luminoasă a declanșat un conflict care a făcut circa șaptezeci de mii de morți. Alberto Fujimori, președinte între 1990 și 2000, a învins Calea Luminoasă și a dat o autolovitură de stat în 1992; a fost condamnat pentru încălcări ale drepturilor omului.',
    ],
    dates: [['c. 2600 î.Hr.', 'Orașul Caral.'], ['1532', 'Capturarea lui Atahualpa la Cajamarca.'], ['1535', 'Întemeierea orașului Lima.'], ['1821', 'Proclamarea independenței.'], ['1824', 'Bătălia de la Ayacucho.'], ['1980-2000', 'Conflictul armat cu Calea Luminoasă.']],
  },
  Surinam: {
    text: [
      'Locuit de popoare arawak și carib, teritoriul a fost colonizat de englezi și, în 1667, cedat Țărilor de Jos în schimbul Noului Amsterdam, viitorul New York. Plantațiile de zahăr se bazau pe munca sclavilor africani; mulți au fugit în junglă și au format comunități libere, maronii, care există și azi.',
      'Țările de Jos au abolit sclavia în 1863. Apoi au adus muncitori din India, Java și China, ceea ce a făcut din Surinam una dintre cele mai diverse țări din lume. Bauxita a devenit în secolul XX principala sa bogăție.',
      'Surinamul și-a câștigat independența în 1975, iar mulți surinamezi au emigrat în Țările de Jos. În 1980, sergentul Desi Bouterse a dat o lovitură de stat, iar în 1982 regimul său a ucis cincisprezece opozanți în „crimele din decembrie”. După un război civil cu maronii, democrația a revenit în 1991. Bouterse a fost ales președinte în 2010 și condamnat pentru acele crime în 2019.',
    ],
    dates: [['1667', 'Trece la Țările de Jos.'], ['1863', 'Abolirea sclaviei.'], ['1975', 'Independența.'], ['1980', 'Lovitura de stat a lui Bouterse.'], ['1991', 'Revenirea la democrație.']],
  },
  Uruguay: {
    text: [
      'Banda Orientală a râului Uruguay era locuită de charrúa. Portughezii au întemeiat Colonia del Sacramento în 1680, iar spaniolii au răspuns întemeind Montevideo în 1724. Regiunea a fost disputată un secol între cele două coroane.',
      'José Gervasio Artigas a condus revoluția orientală din 1811, dar teritoriul a fost ocupat de Portugalia și apoi de Brazilia. După un război între Brazilia și Argentina, Uruguay s-a născut ca stat independent în 1828, în parte ca stat-tampon. Secolul al XIX-lea a fost marcat de războiul civil dintre blancos și colorados.',
      'José Batlle y Ordóñez, președinte la începutul secolului XX, a creat unul dintre primele state ale bunăstării din lume, cu divorț, ziua de lucru de opt ore și separarea Bisericii de stat; Uruguay a fost numit „Elveția Americii”. În 1930 a organizat și a câștigat primul Campionat Mondial de fotbal. După dictatura militară din 1973-1985 și-a recăpătat democrația și este astăzi una dintre cele mai stabile țări din regiune.',
    ],
    dates: [['1724', 'Întemeierea orașului Montevideo.'], ['1811', 'Revoluția lui Artigas.'], ['1828', 'Independența.'], ['1930', 'Primul Campionat Mondial de fotbal.'], ['1973-1985', 'Dictatura militară.']],
  },
  Venezuela: {
    text: [
      'Coasta era locuită de popoare carib și arawak. Columb a sosit în 1498, iar când au văzut casele pe piloni de pe lacul Maracaibo, spaniolii au numit-o Venezuela, „mica Veneție”. Caracas a fost întemeiat în 1567. În perioada colonială, cacaoul a fost principala sa bogăție.',
      'Venezuela și-a declarat independența la 5 iulie 1811, prima din America de Sud. Simón Bolívar, născut la Caracas, a condus războiul încheiat cu bătălia de la Carabobo din 1821. După ce a făcut parte din Marea Columbie, Venezuela s-a separat în 1830. Secolul al XIX-lea și începutul secolului XX au fost dominate de caudillos, precum Juan Vicente Gómez, care a guvernat între 1908 și 1935.',
      'Petrolul, exploatat din anii douăzeci, a transformat Venezuela într-un mare exportator. După căderea dictaturii lui Pérez Jiménez în 1958 au urmat patruzeci de ani de democrație. Hugo Chávez, ales în 1998, a impulsionat „revoluția bolivariană”. După moartea sa în 2013, sub Nicolás Maduro, țara a trecut printr-o gravă criză economică și politică, iar peste șapte milioane de venezueleni au emigrat.',
    ],
    dates: [['1567', 'Întemeierea orașului Caracas.'], ['1811', 'Declarația de independență.'], ['1821', 'Bătălia de la Carabobo.'], ['1958', 'Căderea lui Pérez Jiménez.'], ['1998', 'Alegerea lui Hugo Chávez.'], ['2013', 'Maduro ajunge la putere.']],
  },
  Canadá: {
    text: [
      'Canada era locuită de Primele Națiuni și de inuiți. Vikingii au ajuns în jurul anului 1000 în Terra Nova. Jacques Cartier a explorat fluviul Sfântul Laurențiu în 1534, iar Samuel de Champlain a întemeiat Québec în 1608, capitala Noii Franțe, care trăia din comerțul cu blănuri.',
      'După Războiul de Șapte Ani, Franța a cedat Canada Marii Britanii în 1763, dar populația francofonă și-a păstrat limba, religia catolică și legile civile. Mulți loialiști ai coroanei britanice au venit din Statele Unite după independența acestora. În 1867 s-a creat Confederația Canadiană, un dominion autonom al Imperiului Britanic, iar calea ferată transcontinentală a unit țara până la Pacific.',
      'Canada a luptat în ambele războaie mondiale și a obținut suveranitatea deplină prin Statutul de la Westminster din 1931 și prin repatrierea constituției în 1982. Québecul a trăit în anii șaizeci „Revoluția Liniștită” și a respins independența în referendumurile din 1980 și 1995. Canada a recunoscut abuzurile din internatele în care copiii indigeni erau despărțiți de familii.',
    ],
    dates: [['c. 1000', 'Așezarea vikingă din Terra Nova.'], ['1608', 'Întemeierea orașului Québec.'], ['1763', 'Trece la Marea Britanie.'], ['1867', 'Confederația Canadiană.'], ['1982', 'Constituția repatriată.'], ['1995', 'Referendumul din Québec.']],
  },
  'Costa Rica': {
    text: [
      'Regiunea era locuită de popoare indigene influențate de Mezoamerica și de culturile din America de Sud, care au lăsat mari sfere de piatră. Columb a sosit în 1502. Colonia, săracă și fără aur, a făcut parte din Căpitănia Generală a Guatemalei și a avut o societate de mici țărani.',
      'Costa Rica și-a câștigat independența împreună cu restul Americii Centrale în 1821, a făcut parte din Federația Centroamericană și s-a separat în 1838. Cafeaua, exportată din anii 1840, și apoi bananele au fost bogăția sa. În 1856, costaricanii l-au învins pe aventurierul american William Walker.',
      'După un scurt război civil în 1948, José Figueres a abolit armata, lucru unic în lume, și a dedicat acele resurse educației și sănătății. De atunci, Costa Rica este una dintre cele mai stabile democrații din America. Președintele Óscar Arias a primit Premiul Nobel pentru Pace în 1987 pentru planul său de pace pentru America Centrală.',
    ],
    dates: [['1502', 'Sosirea lui Columb.'], ['1821', 'Independența.'], ['1856', 'Victoria asupra lui William Walker.'], ['1948', 'Abolirea armatei.'], ['1987', 'Premiul Nobel pentru Pace pentru Óscar Arias.']],
  },
  Cuba: {
    text: [
      'Cuba era locuită de taino când Columb a sosit în 1492. Diego Velázquez a cucerit-o începând din 1511, iar populația indigenă a dispărut aproape complet. Havana a devenit portul unde se adunau flotele Indiilor. De la sfârșitul secolului al XVIII-lea, zahărul, lucrat de sute de mii de sclavi africani, a făcut din Cuba cea mai bogată colonie a Spaniei.',
      'Războiul de Zece Ani (1868-1878) a fost prima încercare de independență. Sclavia a fost abolită în 1886. În 1895, José Martí a început un nou război, iar în 1898 au intervenit Statele Unite, care au învins Spania. Cuba și-a câștigat independența în 1902, dar sub tutelă americană, care și-a păstrat baza de la Guantánamo.',
      'După dictatura lui Fulgencio Batista, revoluția lui Fidel Castro și Che Guevara a triumfat la 1 ianuarie 1959. Castro s-a aliat cu URSS și a creat un regim comunist cu partid unic. Statele Unite au impus un embargo și au sprijinit invazia eșuată din Golful Porcilor în 1961, iar în 1962 rachetele sovietice de pe insulă au provocat cea mai gravă criză a Războiului Rece. După căderea URSS, Cuba a trăit „perioada specială” de lipsuri.',
    ],
    dates: [['1492', 'Sosirea lui Columb.'], ['1868-1878', 'Războiul de Zece Ani.'], ['1898', 'Războiul hispano-american.'], ['1959', 'Revoluția lui Castro.'], ['1962', 'Criza rachetelor.'], ['1991', 'Începe perioada specială.']],
  },
  'El Salvador': {
    text: [
      'Teritoriul era locuit de pipil, de limbă nahuatl, și de lenca; satul maya Joya de Cerén, îngropat de o erupție în jurul anului 600, a fost numit Pompeiul Americii. Pedro de Alvarado l-a cucerit începând din 1524. În perioada colonială s-a cultivat indigoul.',
      'El Salvador și-a câștigat independența în 1821 împreună cu America Centrală și s-a separat de Federație în 1841. De la sfârșitul secolului al XIX-lea, cafeaua a concentrat pământul în mâinile câtorva familii. În 1932, o rebeliune țărănească și indigenă a fost zdrobită în „La Matanza”, cu mii de morți.',
      'După decenii de guverne militare a izbucnit un război civil între guvern și gherila FMLN (1980-1992), cu circa 75.000 de morți; arhiepiscopul Óscar Romero a fost asasinat în 1980 în timp ce oficia liturghia. Acordurile de pace din 1992 au adus democrația. Bandele violente numite maras au dominat țara până când președintele Nayib Bukele le-a combătut, din 2022, printr-un regim de excepție.',
    ],
    dates: [['1524', 'Cucerirea spaniolă.'], ['1821', 'Independența.'], ['1932', 'La Matanza.'], ['1980', 'Asasinarea lui Óscar Romero.'], ['1980-1992', 'Războiul civil.'], ['1992', 'Acordurile de pace.']],
  },
  'Estados Unidos': {
    text: [
      'America de Nord era locuită de sute de popoare indigene când au sosit europenii. Anglia a întemeiat Jamestown în 1607 și Plymouth în 1620, iar la mijlocul secolului al XVIII-lea existau treisprezece colonii pe coasta atlantică, cu sclavie în sud. Coloniile s-au răsculat împotriva taxelor britanice, și-au declarat independența la 4 iulie 1776 și au câștigat-o în 1783. Constituția din 1787 este încă în vigoare.',
      'În secolul al XIX-lea, țara s-a extins până la Pacific, cumpărând Louisiana de la Franța și luându-i Mexicului jumătate din teritoriu, pe seama popoarelor indigene. Chestiunea sclaviei a dus la Războiul de Secesiune (1861-1865), în care nordul lui Lincoln a învins sudul și sclavia a fost abolită. După război, Statele Unite au devenit prima putere industrială a lumii și au primit milioane de imigranți.',
      'Decisive în ambele războaie mondiale, în 1945 erau cea mai mare putere a planetei și au condus blocul occidental în Războiul Rece. Mișcarea pentru drepturi civile a lui Martin Luther King a pus capăt segregării în anii șaizeci. După căderea URSS au rămas singura superputere. Biblioteca are istoria lor completă.',
    ],
    dates: [['1607', 'Întemeierea orașului Jamestown.'], ['1776', 'Declarația de Independență.'], ['1787', 'Constituția.'], ['1861-1865', 'Războiul de Secesiune.'], ['1941', 'Intrarea în al Doilea Război Mondial.'], ['1964', 'Legea drepturilor civile.']],
  },
  Groenlandia: {
    text: [
      'Popoare paleoeschimose au ajuns în Groenlanda din America de Nord acum circa 4.500 de ani, iar strămoșii inuiților de azi, cultura Thule, în jurul secolului al XIII-lea. Vikingul Erik cel Roșu a întemeiat în 985 primele colonii nordice în sud-vest, care au dispărut misterios în secolul al XV-lea.',
      'În 1721, misionarul norvegian Hans Egede a restabilit contactul european, iar Groenlanda a devenit colonie a Danemarcei-Norvegiei și, din 1814, doar a Danemarcei. În al Doilea Război Mondial, cu Danemarca ocupată, Statele Unite au instalat baze militare, printre ele cea de la Thule.',
      'În 1953, Groenlanda a încetat să mai fie colonie și a devenit parte a regatului Danemarcei. A obținut autonomia în 1979, a părăsit Comunitatea Europeană în 1985, iar în 2009 și-a extins autoguvernarea, cu recunoașterea dreptului la independență. Majoritatea celor 56.000 de locuitori sunt inuiți.',
    ],
    dates: [['985', 'Colonia lui Erik cel Roșu.'], ['1721', 'Sosirea lui Hans Egede.'], ['1953', 'Încetează să fie colonie.'], ['1979', 'Autonomia.'], ['2009', 'Autoguvernare extinsă.']],
  },
  Guatemala: {
    text: [
      'Guatemala a fost unul dintre centrele civilizației maya, care a ridicat între secolele al III-lea și al IX-lea orașe precum Tikal, cu temple piramidale în plină junglă. După prăbușirea orașelor din zonele joase, regatele maya din zonele înalte, precum quiché, au continuat să prospere. Popol Vuh le păstrează mitologia.',
      'Pedro de Alvarado a cucerit regiunea începând din 1524. Căpitănia Generală a Guatemalei guverna toată America Centrală, cu capitala la Antigua. Guatemala și-a câștigat independența în 1821 și a făcut parte din Federația Centroamericană până în 1839. De la sfârșitul secolului al XIX-lea, cafeaua și compania americană United Fruit au dominat economia.',
      'Guvernele reformiste ale lui Arévalo și Árbenz (1944-1954) au încercat o reformă agrară, dar o lovitură de stat sprijinită de CIA l-a răsturnat pe Árbenz în 1954. A urmat un război civil de 36 de ani, până în 1996, cu circa 200.000 de morți, în majoritate indigeni maya; comisia adevărului a calificat drept genocid masacrele din anii optzeci. Liderul maya Rigoberta Menchú a primit Premiul Nobel pentru Pace în 1992.',
    ],
    dates: [['sec. III-IX', 'Apogeul orașului Tikal.'], ['1524', 'Cucerirea lui Alvarado.'], ['1821', 'Independența.'], ['1954', 'Lovitura de stat împotriva lui Árbenz.'], ['1960-1996', 'Războiul civil.'], ['1992', 'Premiul Nobel pentru Pace pentru Rigoberta Menchú.']],
  },
  Haití: {
    text: [
      'Insula Hispaniola era locuită de taino când a sosit Columb în 1492; în câteva decenii, populația indigenă aproape a dispărut. În 1697, Spania i-a cedat Franței partea de vest, Saint-Domingue, care a devenit cea mai bogată colonie din lume datorită zahărului și cafelei produse de aproape jumătate de milion de sclavi.',
      'În 1791, sclavii s-au răsculat, în singura revoluție a sclavilor victorioasă din istorie. Toussaint Louverture a condus-o până când a fost capturat de Napoleon, iar Jean-Jacques Dessalines i-a învins pe francezi și a proclamat independența Haitiului la 1 ianuarie 1804, prima republică neagră din lume și a doua țară independentă din America. Franța i-a cerut în 1825 o despăgubire uriașă care a îndatorat-o peste un secol.',
      'Haiti a trăit o mare instabilitate, o ocupație americană între 1915 și 1934 și dictatura familiei Duvalier, „Papa Doc” și „Baby Doc”, între 1957 și 1986. Este cea mai săracă țară din America. Cutremurul din 2010 a ucis peste două sute de mii de oameni, iar de la asasinarea președintelui în 2021, bandele armate controlează o mare parte a capitalei.',
    ],
    dates: [['1697', 'Saint-Domingue, colonie franceză.'], ['1791', 'Răscoala sclavilor.'], ['1804', 'Independența.'], ['1957-1986', 'Dictatura familiei Duvalier.'], ['2010', 'Cutremurul.']],
  },
  Honduras: {
    text: [
      'În vestul Hondurasului a înflorit orașul maya Copán, faimos pentru stelele sale și marea scară cu hieroglife, între secolele al V-lea și al IX-lea. Columb a ajuns pe coastă în 1502, în a patra sa călătorie. Cucerirea spaniolă a fost dură: căpetenia lenca Lempira, care dă numele monedei, a rezistat până la moartea sa în 1537.',
      'Hondurasul și-a câștigat independența în 1821 și a făcut parte din Federația Centroamericană, al cărei mare lider a fost hondurasianul Francisco Morazán. S-a separat în 1838. La începutul secolului XX, companiile bananiere americane au dominat țara într-atât încât pentru ea s-a inventat expresia „republică bananieră”.',
      'Hondurasul a trăit decenii de guverne militare, iar în 1969 un scurt război cu El Salvador, „războiul fotbalului”. În anii optzeci a servit drept bază pentru Contras nicaraguani sprijiniți de Statele Unite. A revenit la democrație în 1982. Uraganul Mitch a devastat țara în 1998, iar în 2009 o lovitură de stat l-a răsturnat pe președintele Manuel Zelaya.',
    ],
    dates: [['sec. V-IX', 'Strălucirea orașului Copán.'], ['1537', 'Moartea lui Lempira.'], ['1821', 'Independența.'], ['1969', 'Războiul cu El Salvador.'], ['1998', 'Uraganul Mitch.']],
  },
  Jamaica: {
    text: [
      'Jamaica era populată de taino când Columb a sosit în 1494. Spania a colonizat-o, dar populația indigenă a dispărut. În 1655 au cucerit-o englezii, iar Port Royal a fost o bază de pirați și bucanieri până când un cutremur l-a distrus în 1692.',
      'Jamaica a devenit o mare producătoare de zahăr lucrat de sclavi africani, care au ajuns să fie imensa majoritate a populației. Maronii, sclavi fugiți în munți, le-au rezistat britanicilor, iar rebeliunea din 1831 condusă de Samuel Sharpe a grăbit abolirea sclaviei în Imperiul Britanic în 1834.',
      'În secolul XX au apărut primele partide și sindicate, iar jamaicanul Marcus Garvey a creat o influentă mișcare panafricanistă. Jamaica și-a câștigat independența în 1962 în cadrul Commonwealth-ului. Cultura sa, mai ales reggae-ul lui Bob Marley și mișcarea rastafari, a avut o proiecție mondială.',
    ],
    dates: [['1494', 'Sosirea lui Columb.'], ['1655', 'Cucerirea engleză.'], ['1831', 'Rebeliunea lui Samuel Sharpe.'], ['1834', 'Abolirea sclaviei.'], ['1962', 'Independența.']],
  },
  México: {
    text: [
      'Mexicul a fost unul dintre marile leagăne ale civilizației: olmecii, Teotihuacan, maya, zapotecii și toltecii i-au precedat pe mexica, sau azteci, care au întemeiat Tenochtitlan în 1325 și au dominat centrul țării. Hernán Cortés le-a cucerit imperiul în 1519-1521 cu ajutorul a mii de aliați indigeni, dușmani ai mexica.',
      'Viceregatul Noua Spanie a fost timp de trei secole bijuteria imperiului spaniol, datorită argintului din Zacatecas și Guanajuato. În 1810, preotul Miguel Hidalgo a lansat strigătul de la Dolores, iar în 1821 Mexicul și-a câștigat independența. În războiul din 1846-1848 și-a pierdut jumătate din teritoriu în fața Statelor Unite. Benito Juárez, indigen zapotec, a impulsionat Reforma liberală și l-a învins pe împăratul Maximilian, impus de Franța, în 1867.',
      'După lunga dictatură a lui Porfirio Díaz, Revoluția mexicană din 1910-1920, cu Villa, Zapata și Carranza, a costat sute de mii de vieți și a dat Constituția din 1917. Lázaro Cárdenas a făcut reforma agrară și a naționalizat petrolul în 1938. Partidul Revoluționar Instituțional a guvernat peste șaptezeci de ani, până când a pierdut alegerile în anul 2000. În 2024, Claudia Sheinbaum a fost aleasă prima femeie președinte.',
    ],
    dates: [['1325', 'Întemeierea orașului Tenochtitlan.'], ['1521', 'Căderea orașului Tenochtitlan.'], ['1810', 'Strigătul de la Dolores.'], ['1846-1848', 'Războiul cu Statele Unite.'], ['1910', 'Revoluția mexicană.'], ['2000', 'Sfârșitul hegemoniei PRI.']],
  },
  Nicaragua: {
    text: [
      'Țara își ia numele de la căpetenia Nicarao, care conducea lângă lacul Nicaragua când au sosit spaniolii în 1522. Francisco Hernández de Córdoba a întemeiat León și Granada în 1524. Coasta caraibiană, locuită de miskito, a rămas sub influență britanică.',
      'Nicaragua și-a câștigat independența în 1821 și s-a separat de Federația Centroamericană în 1838. În 1856, aventurierul american William Walker s-a proclamat președinte, până când a fost alungat. Statele Unite au ocupat țara între 1912 și 1933, iar Augusto César Sandino a condus gherila împotriva pușcașilor marini. A fost asasinat în 1934 din ordinul lui Anastasio Somoza, a cărui familie a condus ca dictatură până în 1979.',
      'Revoluția sandinistă l-a răsturnat pe Somoza în 1979. În anii optzeci, guvernul sandinist al lui Daniel Ortega s-a luptat cu Contras, finanțați de Statele Unite. În 1990 a pierdut alegerile în fața Violetei Chamorro. Ortega a revenit la putere în 2007 și, după ce a reprimat protestele din 2018 cu sute de morți, guvernează autoritar.',
    ],
    dates: [['1524', 'Întemeierea orașelor León și Granada.'], ['1927-1933', 'Gherila lui Sandino.'], ['1936-1979', 'Dictatura familiei Somoza.'], ['1979', 'Revoluția sandinistă.'], ['1990', 'Alegerea Violetei Chamorro.'], ['2018', 'Represiunea protestelor.']],
  },
  Panamá: {
    text: [
      'Rodrigo de Bastidas a ajuns pe coastă în 1501, iar în 1513 Vasco Núñez de Balboa a traversat istmul și a fost primul european care a văzut Oceanul Pacific din America. Orașul Panama, întemeiat în 1519, a fost punctul de trecere al argintului din Peru spre Spania. Piratul Henry Morgan l-a jefuit în 1671.',
      'Panama și-a câștigat independența față de Spania în 1821 și s-a unit cu Marea Columbie, apoi cu Columbia. În 1855 s-a inaugurat calea ferată care traversa istmul. După eșecul francez al lui Ferdinand de Lesseps în construirea unui canal, Statele Unite au sprijinit în 1903 separarea Panamei de Columbia în schimbul zonei canalului.',
      'Canalul Panama s-a inaugurat în 1914, iar zona canalului a rămas sub suveranitate americană. Tratatele Torrijos-Carter din 1977 au stabilit returnarea ei, încheiată la 31 decembrie 1999. În 1989, Statele Unite au invadat Panama pentru a-l răsturna pe generalul Manuel Noriega.',
    ],
    dates: [['1513', 'Balboa vede Oceanul Pacific.'], ['1519', 'Întemeierea orașului Panama.'], ['1903', 'Separarea de Columbia.'], ['1914', 'Inaugurarea canalului.'], ['1989', 'Invazia americană.'], ['1999', 'Returnarea canalului.']],
  },
  'Rep. Dominicana': {
    text: [
      'Pe insula Hispaniola, populată de taino, a debarcat Columb în 1492, iar Santo Domingo, întemeiat în 1496, a fost primul oraș european din America, cu prima catedrală și prima universitate de pe continent. Populația indigenă a dispărut în câteva decenii, iar colonia și-a pierdut treptat importanța în fața Mexicului și a Perului.',
      'Spania a cedat partea de vest Franței în 1697, care a devenit Haiti. Haiti a ocupat toată insula între 1822 și 1844, an în care Juan Pablo Duarte și trinitarii au proclamat Republica Dominicană. Spania a anexat-o din nou între 1861 și 1865. Statele Unite au ocupat-o între 1916 și 1924.',
      'Rafael Leónidas Trujillo a guvernat ca dictator între 1930 și 1961 și a ordonat în 1937 masacrul a mii de haitieni la graniță. După asasinarea sa și un război civil, Statele Unite au intervenit din nou în 1965. Joaquín Balaguer a dominat politica decenii la rând. Din anii nouăzeci, țara a crescut datorită turismului și este o democrație.',
    ],
    dates: [['1496', 'Întemeierea orașului Santo Domingo.'], ['1844', 'Independența.'], ['1861-1865', 'Anexarea la Spania.'], ['1930-1961', 'Dictatura lui Trujillo.'], ['1965', 'Războiul civil și intervenția americană.']],
  },
  Australia: {
    text: [
      'Popoarele aborigene au ajuns în Australia acum cel puțin 50.000 de ani și au cea mai veche cultură continuă din lume, cu sute de limbi și o bogată tradiție de artă rupestră și povești ale „timpului visului”. Olandezii i-au explorat coastele în secolul al XVII-lea, iar James Cook a revendicat coasta de est pentru Marea Britanie în 1770.',
      'În 1788 a sosit la Sydney prima flotă britanică cu deținuți: Australia a fost decenii la rând o colonie penitenciară. Coloniștii s-au extins pe continent, iar aborigenii au fost deposedați de pământuri și au suferit masacre și epidemii. Goanele după aur din anii 1850 au atras sute de mii de imigranți. În 1901, cele șase colonii s-au unit în Commonwealth-ul Australiei, care a aplicat decenii la rând politica „Australiei albe”.',
      'Australia a luptat în ambele războaie mondiale; debarcarea de la Gallipoli din 1915 a devenit un mit național. După 1945 a primit milioane de imigranți europeni și, din anii șaptezeci, asiatici. Aborigenii au obținut drepturi depline începând din 1967, iar în 2008 guvernul și-a cerut iertare pentru „generațiile furate”, copiii despărțiți de familiile lor.',
    ],
    dates: [['c. 50.000 î.Hr.', 'Sosirea primilor locuitori.'], ['1788', 'Prima flotă britanică la Sydney.'], ['1851', 'Goana după aur.'], ['1901', 'Federația australiană.'], ['1915', 'Gallipoli.'], ['1967', 'Referendumul privind drepturile aborigenilor.']],
  },
  'Nueva Zelanda': {
    text: [
      'Noua Zeelandă a fost unul dintre ultimele mari ținuturi populate ale lumii: maorii, navigatori polinezieni, au sosit în jurul anului 1300. Olandezul Abel Tasman a zărit-o în 1642, iar James Cook a cartografiat-o în 1769.',
      'În 1840, căpeteniile maore și coroana britanică au semnat Tratatul de la Waitangi, a cărui interpretare este disputată până astăzi. Sosirea în masă a coloniștilor a provocat războaiele din Noua Zeelandă din 1845-1872, după care maorii și-au pierdut o mare parte din pământuri.',
      'Noua Zeelandă a fost pionieră în reforme sociale: în 1893 a fost prima țară din lume care a acordat vot femeilor. A devenit dominion autonom în 1907 și a luptat alături de Marea Britanie în ambele războaie mondiale. În 1953, neozeelandezul Edmund Hillary a urcat pe Everest. Din anii șaptezeci a recunoscut și a compensat nedreptățile față de maori, a căror limbă este oficială.',
    ],
    dates: [['c. 1300', 'Sosirea maorilor.'], ['1642', 'Sosirea lui Abel Tasman.'], ['1840', 'Tratatul de la Waitangi.'], ['1893', 'Prima țară cu vot feminin.'], ['1907', 'Dominion autonom.']],
  },
  'Papúa Nueva Guinea': {
    text: [
      'Insula Noua Guinee a fost populată acum peste 40.000 de ani, iar în podișurile sale înalte s-a dezvoltat acum circa 7.000 de ani una dintre primele agriculturi independente din lume. Este țara cu cele mai multe limbi de pe planetă: peste opt sute.',
      'Europenii au sosit în secolul al XVI-lea, dar nu au colonizat insula până la sfârșitul secolului al XIX-lea. În 1884, Germania a luat nord-estul, iar Marea Britanie sud-estul, care a trecut apoi la Australia. După Primul Război Mondial, Australia a administrat tot teritoriul. În al Doilea Război Mondial a fost teatrul unor lupte foarte dure între japonezi și aliați, precum campania de pe traseul Kokoda.',
      'Papua Noua Guinee și-a câștigat independența față de Australia în 1975. Între 1988 și 1998, un război civil pe insula Bougainville, în jurul unei mari mine de cupru, a făcut mii de morți; în 2019, locuitorii ei au votat pentru independență, încă neînfăptuită. Țara este foarte bogată în resurse naturale, dar majoritatea populației trăiește din agricultura tradițională.',
    ],
    dates: [['c. 7000 î.Hr.', 'Agricultura în podișurile înalte.'], ['1884', 'Împărțirea între Germania și Marea Britanie.'], ['1942-1943', 'Campania Kokoda.'], ['1975', 'Independența.'], ['1988-1998', 'Războiul din Bougainville.']],
  },
}
