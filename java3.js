
var  test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0,a=0;
var pos=Math.floor(Math.random() * 190) + 1;
 //var pos=190; 


var questions = [
["Buddha died during the reign of which of the following Magadha Kings?","Ajatashatru","Bimbisara","Udayi","None of these","A"],

["Which one of the following communities of peasant revolted against the Pala rulers of Bengal?","Jats","Gurjaras","Kaivartas","Doms","C"],

["The famous colossal Jain image of Gomateswara at Sravanabelgola was constructed during the rule of the","Chalukyas","Hoysalas","Gangas","None of these","C"],

["Who was the last Mughal emperor of India?","Akbar II","Bahadur Shah II","Alamgir II","Shah Alam II","B"],

["The title of ‘Viceroy’ was added to the office of the Governor General of India for the first time in","1848 A.D","1856 A.D","1858 A.D","1862 A.D","C"],

["Who first propagated the Advaita School of Philosophy?","Shankaracharya","Ramanuja","Sree Narayana Guru","Madhavacharya","A"],

["All of the following rulers of the so-called Slave Dynasty were purchased as slaves in their early life, except","Balban","Iltutmish","Razia","Qutub - ud-din - Aibak","C"],

["The Rashtrakutas were the successor of the ","Chalukyas of Badami","Vakatakas","Pallavas of Kanchi","Chalukyas of Kalyani","A"],

["Where did the English East India Company set up its first factory in India during the reign of Jahangir?","Agra","Broach","Ahmedabad","Surat","D"],

["The term ‘Aryan’ denotes","An ethnic group","A nomadic people","A speech group","A superior race","D"],

["The first Tirthankara of the Jains was","Areistanemi","Parshvanath","Ajitnath","Rishabha","D"],
["Who, amongst the following, lost his kingdom in Hindustan but retrieved it after about 15 years in exile?","Ala-ud-din Khilji","Firoz Shah","Ghiyas-ud-din Tughlaq","Muhammad Humayun","D"],
["Mangalore, Parambakkam and Porto Novo were places where major battles took place during the","First Anglo-Mysore war","Second Anglo-Mysore war","Third Anglo-Mysore war","Fourth Anglo-Mysore war","B"],


["The Kalinga war was fought in","321 BC","301 BC","261 BC","241 BC","C"],

["The founding Charter of the English India Company was granted by","Henry VIII","Elizabeth I","James I","Charles I","B"],

["The founder of Chipko Movement:","VinobaBhave","Baba Amte","MedhaPatkar","SunderlalBahuguna","D"],

["Akbar’s Mausoleum is situated at","Agra","New Delhi","Sikandra","Sasram","C"],

["Fresco paintings of Ajanta Caves belong to the:","Mauryan Period","Harsha Period","Gupta Period","Mughal Period","C"],
["The Mughals had also a post of an Auditor General and the designation was"," Mir Tazak"," Mir Shariff","Mastaufi","Mir Arz","C"],

["Prayaga (modern Allahabad) was conquered by Ghori kings in "," 1194"," 1294"," 1394"," 1494","A"],

["In which year was the famous BulandDarwaza built by Akbar ? "," 1964"," 1965"," 1602"," 1631","C"],

["The last Mongol invasion of India during the reign of Ala-uddin was led by ","Saldi","IqbalNand","QutlughKhwaja"," KhwajaTash","B"],
["Who among the following Sultans of Delhi, declared himself as a lieutenant of the Caliph ? "," Balban"," Iltutmish"," FerozeshahTughlaq"," Muhammad-bin Tughlaq","D"],
["Jallianwala Bagh Massacre was in the year"," 1912"," 1914"," 1915"," 1919","D"],

["The capital of the ancient Virjian State was at "," Ayodhaya"," Pataliputra"," Vaishali"," Ujjain","C"],

["Who, amongst the following, is believed to have invited Babar to invade India ? "," Daulat Khan Lodi"," Ibrahim Lodi"," Sikandar Lodi"," None of these","A"],
["The title of ‘Viceroy’ was added to the office of the Governor General of India for the first time in "," 1848 A.D."," 1856 A.D."," 1858 A.D."," 1862 A.D","C"],
["Ala-ud-din Khilji became the Sultan of Delhi in 1296 AD after treacherously murdering his uncle and patron"," Jalal-ud-din Firuz"," Nasir-ud-din Kusrau Shah"," Ghiyas-ud-din Balban"," Qutab-ud-din Mubarak","A"],
["Which one among the following Hindu nobles in the court of Akbar refused to be a convert to Din-i-Ilahi ?"," Todar Mal"," Birbal"," Man Singh"," Bhagwandas","C"],

["The Untouchability Offence Act was passed by the Government of India in the"," 1954"," 1955"," 1948"," 1950","B"],
["The Iron Pillar at Mehrauli near Delhi is believed to record the achievements of "," Ashoka"," Chandragupta Maurya"," Samudragupta"," Chandragupta II","D"],
["All of the following kings of the Haryanka line in the sixth and fifth centruiesB.c. were parricides, except"," Ajatashatru"," Aniruddha"," Bimbisara"," Munda","C"],

["The term Khalisa in Mughal administration signified the "," Entire Imperial Establishment"," Land owned by the Emperor himself"," Religious land grants"," Land from where revenue was collected for the imperial treasury","B"],
["Who was the chief architect of PrarthanaSamaj ? "," Keshab Chandra Sen"," MahadevGobindRanade"," BalGangadharTilak"," R.G. Bhandarkar","B"],
["Dewan VeluThampi of Travancore organized the Revolt in "," 1800"," 1805"," 1809"," 1811","C"],
["Ashoka’sDhamma should be interpreted as "," An attitude of social responsibility"," A synonym for Buddhism"," Declarations of the kings as a lay Buddhist to the Buddhist Sangha"," Piety resulting from good deeds inspired by formal religious beliefs.","D"],
["Who among the following Sultans of Delhi, declared himself as a lieutenant of the Caliph ? "," Balban"," Iltutmish"," FerozeshahTughlaq"," Muhammad-bin Tughlaq","D"],
["Alezander fought Porus on the banks of the river"," Indus"," Jhelum"," Chenab"," Ravi","B"],
["The first woman judge of the Supreme Court belongs to ————"," West Bengal"," Kerala"," Tamil Nadu"," Andhra Pradesh","B"],
["The King was freed from his people and they from their king","Whose death did Badauni comment thus"," Balban"," Muhammad-bin-Tughlaq"," Ala-ud-din Khilji"," Feroz Shah Tughlaq","B"],
["In ancient times, the north-eastern region of India was known by the name of "," Cheras"," Pundravardhanabhukti"," Samtala"," Tamralipti","A"],
["Taxila is believed to have been founded by the "," Vedic Aryans"," Bactrians"," Kushanas"," Mauryas","C"],
["The introduction of Buddhism into China is traditionally attributed to "," KashyapaMatanga"," Nagarjuna"," Samprati"," None of these","A"],
["The last Buddhist empire in India was that of : "," Ashoka"," Harshavardhana"," Kanishka - II"," Chandragupta Maurya","B"],
["Which one of the following scripts of ancient India was written from right to left ?"," Brahmi"," Nandnagari"," Sharada"," Kharoshti","D"],
["Jaina Council was held in the fifth or sixth century A.D. which made a final collection of the scriptures and reduced them to writing. This council was held at "," Kundapura"," Nalanda"," Vatabhi"," Vaishali","C"],
["Bahadur Shah II, the last Mughal ruler, was exiled by the British and sent to "," Anaman and Nicobar"," Bangkok"," Lhasa"," Rangoon","D"],
["Who, amongst the following Acharyas, is regarded as having combated the absolute monism of Sankara in the 12th century ? "," Ramanuja"," Hemachandra"," Udyotaka"," None of these","A"],
["The Ajanta caves in Maharashtra dating from about 150 BC to AD 650, are the work of the "," Vakataka and early Chalukya kings"," Pallavas"," Satvahanas"," Guptas","A"],

["The characteristic Pallava or Dravidian type of Shikhara is found in the temples of "," Cambodia only"," Java and Vietnam"," Vietnam and Cambodia"," Cambodia, Java and Vietnam","D"],
["The Allhabad Pillar inscription is an important source of information about the reign of "," Ashoka"," Chandragupta II"," Kanishka"," Samudragupta","D"],
["Two of the great Mughals wrote their own memories. They were "," Babur and Humayun"," Humayun and Jahangir"," Babur and Jahangir"," Jahangir and Shahjahan.","C"],
["The Aryans domesticated the "," Cow"," Horse"," Sheep"," Goat","B"],
["The Treaty of Sreerangapatnam was between Tipu Sultan adn "," Cornwallis"," Clive"," Warren Hastings"," Wellesley","A"],
["During the Sultanate period, the accession of a king was traditionally done by "," Succession"," Nomination"," Battle between probable candidates"," None of the above","C"],
["Who, amongst the following personages of ancinet India, was not connected with the ancient system of medicine ? "," Bhaskaracharya"," Charaka"," Dhanvantari"," Susruta","A"],
["The region of which of the following is usually considered to have been the golden period of Mughal rule in India ?"," Akbar"," Aurangazeb"," Jahangir"," Shah Jahan","D"],
["The Caves and rock-cut temples at Ellora are "," Buddhist"," Buddhist and Jain"," Hindua and Jain"," Hindu, Buddhist and Jain","D"],
["The Gupta empire declined in the fifth century AD as a result of the invasion of "," Chalukyas"," Greeks"," Pallavas"," Huns","D"],
["The ruler who attempted to shift the capital of India is ———"," AllauddinKhilji"," Mohammed Bin Tughlak"," Qutub-ud-din-Aibak"," Mohammed of Ghori","B"],
["The Portuguese colonialism started in India in ————","1498 AD"," 1526 AD","1857 AD","1757 AD","A"],
["Who was the founder of the Sunga Dynasty which succeeded the Imperial Mauryas ? "," Agnimitra"," Divakaramitra"," Pushyamitra"," Vasumitra","C"],
["A person known as the 'Man of Destiny'?"," Joseph Stalin"," Napoleon Bonaparte"," Roosevelt"," Hitler","B"],
["Temples built during the medieval period by which of the following are known as ‘Seven Pagodas’?"," Cholas"," Chalukyas"," Hoysalas"," Pallavas","D"],
["Who conquered northern India during B.C. 1900?"," Babar"," Ashoka"," Alexander"," The Aryans","D"],
["The capital-seat Gangaikondacholapuram was founded by "," Rajendra I"," Rajaraja the Great"," Kulottunga I"," Parantaka","A"],
["The Iranian ruler who penetrated into north-west India and annexed Punjab in 516 B.C. was"," Xerxes"," Darius"," Cyrus II, the Great"," Nasar-ud-din Shah","B"],
["Who introduced the Mansabdarisystem ? "," Ibrahim Lodhi"," Humayun"," Sher Shah"," Akbar","D"],
["Mention the importance of the year 1858 in Indian History ?"," East India Company’s rule ended"," India got Indepdence"," Birth of Swami Vivekandanda"," Introduction of English in India","A"],
["Which one of the following works of Kalidasa has a Sunga king as its hero ?"," Malavikagnimitram"," Raghuvamsam"," Vikramorvasiyam"," Shakuntalam","A"],

["JallianwalaBagh Massacre was in the year"," 1912"," 1914"," 1915"," 1919","D"],
["Who was the Hindu king shown playing on the veena on ancient coins ? "," Shivaji"," Vikaraditya"," Samudragupta"," Ashoka","C"],
["Red Fort was built by emperor ————"," Akbar"," Jahangir"," Shajahan"," Aurangazeb","C"],
["Harshavardhana was defeated by ","Kirtivarman","Narasimhavarman"," Pulakesin I"," Pulakesin II","D"],
["The oldest incriptions deciphered so far are those : "," On the Harappan seals"," issued by Asoka in the Third Century B.C."," on the temples of the Vedic period"," of the Gupta period","A"],
["Who, amongst the following, came to India with Sultan Mahmud of Ghazni ? "," Alberuni"," IbnBatuta"," IbnHaugal"," Mis’udi","A"],
["Arranged in chronological order, which of the following events occured first?"," French Revolution"," American War of Independence"," Chinese Revolution"," Russian Revolution","B"],
["The Ashokan inscription which gives an account of the Kalinga War and its effects is"," Minor Rock Edict IV"," Minor Rock Edict III"," Minor Rock Edict XIII"," Girnar Rock Edict","C"],
["The capital of the Yadava rulers was","Dwarasamudra","Warangal","Kalyani","Devagiri","D"],
["Which of the following is regarded as an era of Brahmanicrevival ?","Kushan age","Maurya age","Gupta age","None of these","C"],
["The ancinet name of Bengal was"," Gauda","Kamarupa"," Matsya","Vatsa","A"],
["The Rajput States sacrificed their indepdence in the 19th century and accepted British Paramountcy. Who was the Governor - General of India during this period."," Cornwallis"," Hastings"," Minto"," William Bentinck.","B"],
["At which of the following battles was artillery used for the first time by one of the two parties to the battle ?"," First battle of Panipat"," Battle of Chandwar"," Second Battle of Panipat"," battle of Khanua","A"],
["Which Court ordered the christian women’s paternal property right?"," High Court of Kerala"," Supreme Court"," High Court of Karnataka"," None of these","B"],
["Who built the mausoleum of Jahangir and where ?"," NurJahan at Lahore"," Shahjahan at Agra"," NurJahan at FatehpurSikri"," Shajahan at Delhi","A"],
["Who among the following rulers built a chain of five fortresses collectively known as the fortress of Mankot ?"," Sikander Lodi"," Humayun"," ShershahSuri"," IslamshaSuri","B"],
["Vindhyashakti was founder of which of the following dynasties in ancient India? "," Vakataka","Kakatiya"," Kalachuri"," Chalukyas of Badami","A"],
["In stone age, the Microliths were most commonly found in which of the following ages?"," Paleolithic","Mesolithic","Neolithic","Chalcolithic","B"],
["Which of the following terms is not associated with a tool tradition of ancient India / World?"," Mousterian","Acheulean","Oldowan","Grotian","D"],
["Which was the largest Indian site of Indus Civilization ?","Mohenjodaro","Lothal","Chanhudaro","Dholavira","D"],
["Which veda is important for Indian Music ?","Sama Veda","Yajurveda","Atharva Veda","Rig Veda","A"],

["Which of following was not a varna of Society?","Shudra","Vaisya","Kshatriya","Vaiswik","D"],
["Gautama Buddha renounced home at the age of ?","26","27","28","29","D"],
["When was Mahaviraborn ?","530 BC","540 BC","550 BC","560 BC","B"],
["The Sarvodaya Movement was initiated by","Mahatma Gandhi","J P Narayan","VinobaBhave","Bhagat Singh","C"],
["When was Burma separated from India","1936","1937","1938","1939","B"],
["Who of the following Prime Ministers sent Cripps Mission to India ?","James Ramsay MacDonald","Stanley Baldwin","Neville Chamberlain","Winston Churchill","D"],
["Which one the following kingdoms was founded by Raja Odeyar ?","Tanjore","Jinji","Mysore","Madura","C"],
["Who put an end to the system of Dual Government in Bengal ?","Regulating Act","Clive","Warren Hastings","British Parliament","C"],




//lit

["The winner of the first EzhuthachanPuraskar"," BalamaniAmma"," Prof. S. Guptan Nair"," Dr. K. M. George"," Dr.SooranadKunjanPillai","D"],
["The head of the University of Nalanda was the great Bengali Scholar"," Nagarjuna"," Basubandhu"," Sheelabhadra"," ShreenjanAtisha","C"],

["Of these who got the SaraswatiSamman?"," MadhaviKutty"," LalithambikaAntharjanam"," Sugathakumari"," BalamaniAmma","D"],

["The famous work of Karl Marx is:"," Utopia"," Communist Manifesto"," Social contract"," Das Kapital","D"],

["The famous poet Amir Khusrau, surnamed the Parrot of India was the contemporary of all the following except "," Giyas - ud-din-Balban"," Ghiyas-ud-din Tughlaq"," Ala-ud-din Khilji"," Iltutmish","D"],

[" Which of the following Malayali writers did not receive the Jnanpith Award?"," M.T. Vasudevan Nair"," Thakazhi"," S.K. Pottakkad"," Uroob","D"],

["The poet Harisena was the courtier of "," Skandagupta"," Samudragupta"," Chandragupta"," Lakshmanasena","B"],

["Who was the author of the famous storybook 'Alice's Adventures in Wonderland'?","Rudyard Kipling"," John Keats"," Lewis Carroll"," H G Wells","C"],



["Who wrote the famous 1855 poem 'The Charge of the Light Brigade?"," Lord Alfred Tennyson"," Christopher Marlowe"," Johannes Gutenberg"," René Descartes","A"],


["Who wrote 'Where ignorance is bliss, it is folly to be wise?"," Browning"," Marx"," Shakespeare"," Kipling","C"],


["Name the book which opens with the line 'All children, except one grew up?","The Railway Children","Winnie the Poo"," Jungle book"," Peter Pan","D"],


["Which is the first Harry Potter book?","HP and the Goblet of Fire","HP and the Philosopher’s Stone","HP and the Chamber of Secrets","HP and the God of small Things","B"],


["In which century were Geoffrey Chaucer's Canterbury Tales written?"," 13th – 14th"," 14th – 15th"," 15th -16th"," 16th – 17th","A"],


["What was the nationality of Robert Louis Stevenson, writer of 'Treasure Island?","Scottish"," Welsh"," Irish"," French","A"],


["'Jane Eyre' was written by which Bronte sister?","Anne","Charlotte","Emily","None of the above","B"],

["What is the book 'Lord of the Flies' about?"," A round trip around the USA","A swarm of killer flies","Schoolboys on the desert island","None of the above","C"],
["In the book ‘the Lord of the Rings ‘, who or what is Bilbo?","Dwarf","Wizard","Hobbit","Troll","C"],

["'Chudalamuthu' and his son 'Mohanan' are characters in:","'NaaluKettu' by MT Vasudevan Nair","'Mucheettukalikkarantemakal' by Vaikkom Muhammad Basheer","'Thottiyudemakan' by ThakazhiSivasankaraPillai","'Aarachaar' by K R Meera","C"],

["'Mandan Muthappa' is a character created by:","Vaikkom Muhammad Basheer","Thakazhi","P Kesavadev","O.V Vijayan","A"],

["'Mandan Muthappa' is a character created in:"," Premalekhanam","Bhoomiyudeavakaasikal","baalyakaalasakhi","Mucheettukalikkaarantemakal","D"],

["Who wrote 'Uppu' which won Vayalar Award?","O N V Kuruppu","S K Pottekkattu","Uroob","Kovilan","A"],

["The 'Demon Seed' is the English translation of a novel written by:","M T vasudevan Nair","Vaikkom Mohammed Basheer","Mukundan","Thakazhi","A"],

["In which novel written by Malayattur Rama Krishnan, Raghu is a character?","Yakshi","Verukal","OdayilNinnu","Shabdangal","B"],

["Uroob is the pen name of: ","Kamala Das","P Kunjananthan Nair","K E Mathaayi","P C Kuttikrishnan","D"],

["Which Indian literature is a collection of 1028 hymns written in Vedic Sanskrit?","Rig Vedas","Sama Vedas","Brahaman","Aryankas","A"],

[" Which Ancient Indian literature deals with concepts about origin of universe, death and birth, material and spiritual world?","Rig Vedas","AtharvaVedas","Aryankas","Upanishad","D"],

["Birth place of William Shakespeare ","Stratford-upon-Avon","America","Queensland","Malabar","A"],
["Who wrote the poem Goodbye Party for Miss Pushpa T.S? ","Kamala Suraiya "," Nissim Ezekiel ","Maya Angelou ","Gabriel Okara","B"],
[" Among the following, who is an African poet?","David Malouf ","Robert Frost ","Gabriel Okara","Bertrand Russell","C"], 
["Autobiography of Maya Angelou ","Just Give Me a Cool Drink of Water ‘Fore I Die ","I Know Why the Caged Bird Sings ","And Still I Rise"," Poor Girl","B"],
["The first Indian poet to give importance to craft as much as subject matter","Kamala Suraiya","R.K.Narayan ","David Malouf"," Nissim Ezekiel ","D"],

["’Ode to a Nightingale’ is about"," Mortality and transience"," Parody of a farewell speech","Positive influence of the memories of a dear friend ","A male-centered world","A"],
 [" Which among these is the work of R.k Narayan?","A shadow ","Two gentleman of Verona ","The lottery ticket","Bores","A"],
["Who is the main character in the story ‘The Lottery Ticket ‘?","Ivan Dmitritch","Sambhu ","Varma","Bhatia","A"],
["Pulitzer Prize was first awarded in the year","1900 ","1909 ","1917 ","1942 ","C"],

["Which country awarded the Pulitzer Prize"," France ","USA "," England "," Italy ","B"],

[" Which one is the world's longest-running play","The Mousetrap ","Romeo and Juliet "," Othello ","Macbeth","A"], 

["Total number of plays written by Shakespeare","14 ","28 "," 38 ","52 ","C"],

[" Who Is known as the Father of English Poetry","William Shakespeare ","Geoffrey Chaucer ","John Milton ","William Wordsworth ","B"],

["Who is the writer of the book 'Robinson Crusoe'","Daniel Defoe ","John Keats "," Charles Dickens ","John Milton","A"], 

["Who wrote the famous book - 'We the people'?"," T.N.Kaul"," J.R.D. Tata"," Khushwant Singh"," NaniPalkhivala","D"],
["Who is the author of the book 'Nineteen Eighty Four'?"," Thomas Hardy"," Emile Zola"," George Orwell"," Walter Scott","C"],

["Which of the following is NOT written by MunshiPremchand?","Gaban","Godan","Guide","Manasorovar","C"],

["Who is the author of the book 'Forbidden Verses'?"," Salman RushDie"," Abu Nuwas"," Ms.TaslimaNasrin"," D.H. Lawrence","B"],

["Which of the following books has been written by Vikram Seth?"," My God Died Young"," Islamic Bomb"," Look Back in Anger"," A Suitable Boy","D"],

["Who wrote the line: ' A thing of beauty is a joy forever'?"," John Keats"," Robert Browing"," P.B.Shelley"," William Wordsworth","A"],
["Who has written the book 'My Frozen Turbulence in Kashmir'?"," Anees Jung"," Jagmohan"," M.J.Akbar"," Nissim Ezekiel","B"],
["The book 'To Live or Not Live' was written by"," V.S. Naipaul"," Alexandra Dumas"," George Elliot"," Nirad C. Chaudhuri","D"],
["In India the first television programme was broadcasted in","1959","1965","1976","1957","A"],

["'A Voice for Freedom' is a book written by"," Corazon Aquino"," Nayantara Sahgal"," Aung San SuuKyi"," Benazir Bhutto","B"],
["Who is the father of English Poetry?","Milton","Wordsworth","Chaucer","Charles Dickens","C"],

["The popular TV serial 'NeemkaPed' was written b","RahiMasoomRaza","Sharad Joshi"," Ashapurna Devi"," HarivanshRaiBachachan","A"],
["Who wrote 'War and Peace'?"," Leo Tolstoy"," Mahatma Gandhi","Charles Dickens"," Kipling","A"],

["Which of the book was written by Graham Greene?"," O' Jerusalem"," The Power and Glory"," Crisis in India"," Of Human Bondage","B"],

["George Bernard Shaw, the great dramatist, was"," a Welsh"," an Irishman"," a Soctsman"," an Englishman","B"],

["'Mirchchhakatika' was written by","Vikramaditya","Shudraka","Kalhana"," Banabhatta","B"],

["The famous book 'Anandmath' was authored by"," Sarojini Naidu"," Bankim Chandra Chottapadhya","Sri Aurobindo"," Rabindrnath Tagore","B"],

["'Nature never did betray the heart that loved her' is a quotation from"," W.Wordsworth"," J.Brayon"," P.B.Shelly"," J.Keats","A"],

["Who directed the film '1942: A love story'?"," Mahesh Bhatt"," VidhuVinod Chopra"," Yash Chopra"," Ketan Mehta","B"],

["Who is the author of famous statement: That Government is the best which governs least?"," Herbert Spencer"," Harold Laski"," Alexis De Tocqueville"," Henry David Thoreau","D"],

["Which of the following English films was the first one to be dubbed in Hindi?"," Aladdin"," Universal Soldier"," Speed"," Iron Man","A"],

["Who wrote the book 'Reminiscences of the Nehru Age'?"," C.D.Deshmukh"," Dr.P.C.Alexander"," M.O.Mathai"," S.C.Rajagopalachari","C"],

["Aurobindo was the author of"," Discovery of India"," Hindu view of life"," Yogashastra"," Savitri","D"],

["Who said God helps those who help themselves?"," Andre Maurois"," Andre Gide"," Algernon Sidney"," Swami Vivekananda","C"],

["Alice in Wonderland' the famous TV serial is based on a book written by"," Father Discoste"," Thomas Hardy"," Charles Dickens"," Lewis Caroll","D"],

["'The Gathering Storm' is written by"," Winston Churchill"," George Washington"," Voltaire"," Romain Rolland","A"],

["The television serial 'Charitraheen' is based on the famous novel of which of the following authors?"," Rabindranath Tagore"," Sarat Chandra Chattopadhaya"," Tara SankarBandhopadhya"," Bankim Chandra Chatterji","B"],

["Who is the author of the book 'My Experiments with Truth'?"," Mahatma Gandhi"," Michael Anderson"," Winston Churchill"," Jarnes Morris","A"],

["'The Naked Face', a very popular book is written by"," Dominique Lapierre"," Larry Collins"," Sidney Sheldon"," Juan Benet","C"],

["The first history book was written by"," Euclid"," Herodotus"," Aristotle"," Julius Caesar","B"],

["'A Secular Agenda' is a book written by"," ArunShourie"," Mani Shankar Aiyar"," Prem Shankar Jha"," M.J. Akbar","A"],

["In which language did 'Dr.MastiVenkateshIyengar' write?"," Malayalam"," Tamil"," Telugu"," Kannada","D"],

["The book named 'Three Decades in Parliament' is a collection of the speeches of"," A. B. Vajpayee"," SomnathChatterjee"," L. K. Advani"," N. G. Ranga","A"],

["'The General Happiness is the end of the state' who said this?"," Hegel"," Benthem"," Plato"," Green","B"],

["Who is the author of book 'We Indians'?"," Nirad C. Choudry"," SubramaniyaSwamy"," Khushwant Singh"," Muluk Raj Anand","C"],

["India of our Dreams' is a book written by"," Dr. S. Radhakrishnan"," Dr. C. Subramanian"," M.V. Kamath"," Dr.Rajendra Prasad","C"],

["Who is the author of the book - 'Preparing for the Twenty - First Century'?"," Larry Collins"," V.S. Naipul"," V.R. Krishna Iyer"," Paul Kennedy","D"],

["'Neela Chand' which won the VyasSamman for 1992 is written by"," Shiv Prasad Singh"," Subash Mukhopadhyay"," Ram Vilas Sharma"," Ramakant Rath","A"],

["The famous book 'Anna Karenina' written by ?"," Boris Pasternak"," Victor Hugo"," Lewis Carroll"," Leo Tolstoy","D"],

["Who is the author of famous book 'The Judgement'?"," Anthony Mascarenhasa"," R. Vankataraman"," KuldipNayar"," JanardhanTurkur","C"],

["'Gita Govinda' is written by","Valmiki","Jaya Dev","Tulsidas","Sharan Gupta","B"],

["Who is the author of 'Ashtadhyayi'?"," Sumitranandan"," Raj Anand"," Panini"," GittaPiramal","C"],

["Who directed the world famous film 'The Gandhi'?"," Ben Kingsley"," Satyajit Ray"," MrinalSen"," Richard Attenborough","D"],

["Who is the author of the book 'No Full Stops in India'?"," Raj Mohan Gandhi"," Shyamlal"," E.M. Forster"," Mark Tully","D"],

["Who has written the book 'Kashmir - Behind the Vale'?"," L. Ramdas"," Lt. Gen. Dipendra Singh"," M. J. Akbar"," Lt. Gen. S. C. Sardeshpande","C"],

["Who has written the book 'The Famished Road'"," Ian Austin"," V.S. Naipaul"," Ben Okri"," Zola Emile","C"],

["'Wings of Fire' was written by"," Dr.APJ Abdul Kalam","Sathyajit Ray"," P.B.Shelly"," J.Keats","A"],

["Who is the author of the book 'Freedom Behind Bars'?"," KiranBedi"," Jawaharlal Nehru"," Sheikh Abdullah"," Nelson Mandela","A"],

["The book 'A Farewell to Arms' was written by"," Charles Dickens"," Ernest Hemingway"," Thomas Hardy"," Huxley","B"],
["The book 'Satanic Verses' was written by"," Gunnar Myrdal"," William Golding"," Salman Rushdie"," Agatha Christie","C"],

["Who is the author of the novel 'Les Miserable'?"," Victor Hugo"," ALiumtofler"," G.Wynne"," Fedric","A"],

["Who has written the famous book 'Mankind and Mother Earth'?"," Arnold Toynbee"," Leo Tolstoy"," John Ruskin"," Bertrand Russel","A"],

["Who is the author of the book 'Naked Triangle'?"," R.K.Narayan"," Amrita Pritam"," BalwantGargi"," Khushwant Singh","C"],

["The book 'Gulliver's Travels' was written by"," Alexandra Dumas"," Charles Lamb"," Charles Dickens"," Jonathan Swift","D"],

["Who is the author of 'Tom Sawyer'?"," Leo Tolstoy"," Mark Twain"," John Ruskin","William Shakespeare","B"],

["Who is the author of the book 'The Future of Freedom'?"," Richard Wolfee"," Peter Hudson"," Tamara Lipper"," FareedZakaria","D"],

["The celebrated novel 'The Godfather' was authored by"," Harold Robbins"," John Milton"," Victor Hugo"," Mario Puzo","D"],


["Which of the following books is written by Rabindranath Tagore?"," RaktaKarabi"," Chidambara","Anand Math","DurgeshNandini","A"],


["The book 'The Man who knew Infinity' by Robert Kanigel is the biography of"," SrinivasaRamanujan"," Sir C. V. Raman"," HomiBhabha"," Vikram Sarabhai","A"],




            
            ];  
         console.log(questions)
            function one(x){
                return document.getElementById(x); 
            }
            function  renderQuestion(){
                test = one("test");  
                if(a<=10){
                myVar = setTimeout(function()
                {one("h").innerHTML = "Time out of question "+(a+1);checkAnswer();
                }, 100000,);}
                
                   if (a==5)
                {
                    clearTimeout(myVar);
                    var E;
                    if(correct==10){E="perfect"}
                    if(correct>5){E="Good"}
                    if(correct<5){E="Better luck next time"}
                    if(correct==0){E="Very bad"}
                    alert("congrass ready to play next level..?")
                    test.innerHTML = '<h3>You Got '+correct+' of 10 questions </h3>'+'<br><h3>'+E+'</h3>';
                    one("test_status").innerHTML = "Test Comleted!";
                    /* pos = 0;
                    correct = 0;
                    return false; */
                   // window.location.href = "quiz2.html";
               }
                if(a<=5)
                {
                one("test_status").innerHTML = " "+(pos)+" ";
                question = questions[pos][0];
                chA = questions[pos][1];
                chB = questions[pos][2];
                chC = questions[pos][3];
                chD = questions[pos][4];
                test.innerHTML ="<h3>"+question+"</h3>";
                test.innerHTML += "<label  class='three'><input type='radio' name='choices' onclick='checkAnswer()' value='A'> "+chA+"</label>"+"<br><br>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' onclick='checkAnswer()' value='B'> "+chB+"</label>"+"<br><br>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' onclick='checkAnswer()' value='C'> "+chC+"</label>"+"<br><br>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' onclick='checkAnswer()' value='D'> "+chD+"</label>"+"<br><br>";
                //test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer!</button>";
            }}



            function checkAnswer(){
                choices = document.getElementsByName("choices");
                for (var i=0; i<choices.length; i++){
                    if (choices[i].checked){
                        choice = choices[i].value;
                    }
                }
                if (choice == questions[pos][5]){
                    correct++; 
                    a=a+1;
                    pos++;
                    clearTimeout(myVar);
                    renderQuestion();}
                else
                { 
                    alert("oops wrong answer....")
                    window.location.href = 'bln.html';

                
                }
                    clearTimeout(myVar);
                   /*  a=a+1;
                    pos++; */
                    //renderQuestion();
                    
            }




    window.addEventListener("load", renderQuestion, false);
