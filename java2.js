
var  test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0,a=0;
var pos=Math.floor(Math.random() * 320) + 1; 
var pos=113;

var questions = [
            ["Which was the 1st non Test playing country to beat India in an international match?","Canada","Sri Lanka","Zimbabwe","East Africa","B"],

            ["Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?","Two","Three","Four","Eight","C"],
            
            ["Who is the first Indian woman to win an Asian Games gold in 400m    run?","M.L.Valsamma","P.T.Usha","KamaljitSandhu","K.Malleshwari","C"],
            ["When was Amateur Athletics Federation of India established?","1936","1946","1956","1966","B"], 
            ["In the match between India and Pakistan at Jaipur on 02-10-1983, Which new rule was introduced?","Limit of overs was reduced to 50 overs","The rule of field restriction was taken","Over throw runs were batsman's score",
            "No-balls & wides were debited to bowlers analysis","D"],
            
            ["India won its first Olympic hockey gold in...?","1928","1932","1936","1948","A"],
            
            
            ["Who won the 1993 King of the Ring","Owen Hart","Bret Hart","Edge","Mable","B"],
                
                
            ["What Major League Baseball player holds the record for all-time career high batting average?","Ty Cobb","Larry Walker","Jeff Bagwell","Frank Thomas","A"],
            
            
            ["Which player has scored the most runs in a single Test innings?","Graham Gooch","Matthew Hayden","Brian Lara","Agarkar","C"],
                
            ["Where did India play its 1st one day international match?","Lords","Headingley","Taunton","The Oval","B"],
            
             ["The Asian Games were held in Delhi for the first time in...?","1951","1963","1971","1982","A"],
            
            ["Which county did Sunil Gavaskar play for?","Somerset","Worcestershire","Warwickshire","Glamorgan","A"],
            
            ["In which Indian state did the game of Polo originate?","Meghalaya","Rajasthan","Manipur","West Bengal","C"],
            
            ["Which of the following is a Manipuri version of Hockey?","KhongKangjei","HiyangTanaba","YubiLakpi","None of above","A"],
            
            ["In which decade were the first successful diode and triode vacuum tubes invented?","1800s","880s","1890s","1900s","D"],
            
            ["Formatting a disk results in ","all the data beingSaved to the disk","Copied from the disk","Deleted from the disk","All of the above","C"],
            
            ["What type of web technology creates an online community where people can make statements and others can read and respond to those statements?",
            "I-Journal","Podcast","ASPBlog","D"],
            
            ["What is a common medium used for thieves to steal others’ identities?","Telephone","Pick pocketing","Burglary","Email","D"],
            
            ["Application softwareIs used to control the operating systemIs designed to help programmers","Performs specific task for computer",
            "users","Is used for making design only","C"],
            
            ["A set of instruction telling the computer what to do is called?","instructor","compiler","program","debugger","D"],
            
            ["In which decade was the American Institute of Electrical Engineers (AIEE) founded?","1850s","1880s","1880s","1950s","B"],
            
            ["What is part of a database that holds only one type of information?","Report","Field","Record","File","B"],
            
            ["Where is the headquarters of Intel located?","Redmond, Washington","Tucson, Arizona","Tucson, Arizona","Richmond, Virginia","C"],
            
            ["Who co-created the UNIX operating system in 1969 with Dennis Ritchie?","Bjorn Stroustruop","Steve Wozniak","Ken Thompson","NiklausWirth","C"],
            
            
            
                ["What is the name of the person that controls a football match?","A referee","An umpire","A spectator","A goalkeeper","A"],
            
                ["The Indian football team made its first appearance at Olympics in...?","1936","1948","1952","1956","B"],
            
            ["Which country won the Cricket World Cup in 1999?","Australia","South Africa"," Pakistan","England","A"],
            
                ["In what year was the first international cricket match held?","1892 between England and India","1869 between England and Australia","1883 between Australia ",
            "and Wales","1844 between Canada and the USA","D"],
                
            ["Who is the highest wicket taker in Test cricket?","Shane Warne","Brian Lara","Courtney Walsh","MuttiahMuralitharan","D"],
                
            
            ["Which county signed Yuvraj Singh to play for them in 2003?","Nottinghamshire","Lancashire","Hampshire","Yorkshire","D"],
            
            
            ["Who was the 1st president of BCCI (Board of Control for Cricket in India )?","R.E. Grant Govan","Dr.Maharajkumar Sir VijayaAnanda","SikandarHyat Khan","Anthony S. D'Mello","A"],
            
            [".In which sports is the participant called pugilist? ","Sprinter","Boxing","Wrestling","Javelin throw","B"],
            
            ["The term ‘Butterfly Stroke’ is referred to in which sport? ","Wrestling","Volleyball","Tennis","Swimming","D"],
            
            ["yder Cup is related with which sports? ","Cricket","Badminton","Golf","Football","C"],
            ["Free throw’ is associated with:","Basketball","Hockey","Volleyball","Football","A"],
            ["Which of the following awards is not associated with the field of sports?","Arjuna Award","Dronachatya Award","Dhyan Chand Award","Norman Borlaug Award","D"],
            
            ["Who is the first Indian cricketer to take a hat-trick of wickets in a Test? ","B.S. Bedi","B.S. Chandrasekhar","E.A.S. Prasanna","Harbhajan Singh","D"],
            
            ["The word Jump ball", "is associated with ","Softball","Basketball","Netball","Baseball","B"],
            
            ["Where did the game of Chess originate?","India","Persia","Arabia","Europe","A"],
            
            ["Who was the Captain of the Indian Hockey Team, which won the first Olympic Gold Medal in Amsterdam in 1928? ","KishanLal","Laebokhan","Jaipal Singh",
            "Dhyanchand","C"],
            
            ["Bull’s eyeis used in the game of ","Shooting","Boxing","Polo","Baseball","A"],
            
            ["What is width of goal post in the game of football? ","20 feet","22 feet","24 feet","26 feet","C"],
            
            ["What is the distance between the popping crease and the stumps on a cricket pitch?","2 ½ feet","3 feet","3 ½ feet","4 feet","D"],
            
            ["The distance of marathon race is ","24 miles 385 yard","26 miles 385 yard","25 miles 385 yard","28 miles 385 yard","B"],
            
            
            ["NarainKarthikeyan is the sportsman in the field of ","Golf","Chess","Shooting","Formula one car racing","D"],
            
            
            ["When were the first recorded Olympics held?","80 AD","320 BC","776 BC","826 BC","C"],
            
            ["Eden Garden (Kolkata) is associated with ","Cricket","Hockey","Football","Basketball","A"],
            
            ["The first women to swim across seven important seas is:","Chandini","Mridula Rajiv","BulaChoudhary","PriyaShanbhag","C"],
            
            
            ["Green park Stadium is in ","Kanpur","Dehradun","Bengaluru","Chandigarh","A"],
            
            
            ["Which Indian cricketer has written the book, ‘One Day Wonders’? ","KapilDev","Sunil Gavaskar","Ravi Shastri","Sachin Tendulkar","B"],
            
            ["Find the mismatch: ","Somdev Devvarman : Badminton","Ganga Narang : Shooting","ArjunAtwal : Golf","Anita Sood: Swimming","A"],
            
            ["Which of the following is not correct?","SaniaMirza (Tennis)","JeevMilkha Singh(Football)","SainaNehwal(Badminton)","VishwanathanAnand (Chess)","B"],
            
            ["Which batsman started his international cricketing career at the age of 16? ","KapilDev","Piyush Chawla","Rahul Dravid","Sachin Tendulkar","D"],
            
            
            ["Badminton is National game of which country? ","Russia","Japan","India","Malaysia","D"],
            
            
            ["The number of players on each side in baseball is –","Seven","Eight","Nine","Ten’","C"],
            
            ["Which boxer was known as Will O the Wisp","Willie Pep","Wilfredo Benitez","William Bennett","William Westover","A"],
            
            ["What do the five rings on the Olympic symbol represent?","The five oceans","The five continents","The five planets","Five Greek Gods","B"],
            
            ["Olympic games were held in ancient Greece in the honour of Greek God ________","Zeus","Uranus","Apollo","Jupiter","A"],
            
            ["At which of the following cities have the Olympic games NOT been held twice?","Athens","Paris","London","Atlanta","D"],
            
            ["What does the Olympic motto Citius, Altius, Fortius mean?","Character, Attitude, Fortitude","Faster, Higher, Deeper","Faster"," Higher, Stronger","Bigger, Stronger, Taller","C"],
            
            ["Which language other than English is the Official language of the International Olympic Committee?","Chinese","French","Spanish","German","B"],
            ["According to the Olympic charter, the duration of the competitions of the Olympic Games shall not exceed ","20 days","15 days","12 days","16 days","D"],
            
            ["Which of these sports has never been on the Commonwealth Games program?","Judo","Triathlon","Volleyball","Swimming","C"],
            
            ["Who won gold medal in women’s 48 kg weightlifting in Commonwealth Games 2018? ","Marie Ranaivosoa","Dinusha Gomes","SaikhomMirabaiChanu",
            "Thelma Toua","C"],
            
            ["Where were Commonwealth Games 2018 held?","Gold Coast","Hobart","Perth","Melbourne","A"],
            
            ["Ireland’s National sport is ","Golf","Hurling","Polo","Lacrosse","B"],
            ["NBA Basketball Court is _ feet long","94 feet","95 feet","96 feet","97 feet","A"],
            ["Famous Tennis player Stefan Edberg belongs to","U.K.","Norway ","Sweden","Italy","C"],
            ["The first man to swim across the Palk straits is","Roger Benister","Arthur Ashe","Milkha Singh","MihirSen","D"],
            ["National stadium is in","Kolkata","Bombay","Delhi","Patiala","B"],
            
            ["What is the middle name of SouravGanguly?","Chandidas","Mohandas","Chandradas","Tarwadi","A"],
            
            ["Against which team did Verendrasehwag make his one day international debte","Bangladesh","Pakistan","Sreelanka","New Zealand"],
            
            
            ["What is the duration of basketball match both before and after the break","25 min","35 min","45","20","A"],
            
            
            ["Who was the first Indian cricketer to wear a helmet during a match?","Mohinder Arnarnath","Kapildev","V V Slaxman","Sunil gavaskar","A"],
            
            ["JaspalRana is a distinguished athlete in which game? –","shooting","swimming","cycling","rowing","A"],
            
            ["How many medals did P.T. Usha win at the XthAsiad?","4","5","2","7","A"],
            
            
            ["Who has been appointed (in February 2018) as the first Independent female Director of the International Cricket Council (ICC) Board?",
            ,"Vinita Bali","ManishaGirotra","KalpanaMorparia","IndraNooyi","D"],
            
            
            
            
            ["2018 Asian Games was held at –","Indonesia","Thailand","Singapore","Maldives","A"],
            ["Bonus line is marked in which of the following sports? ","Rugby","Kho-Kho","Kabaddi","Judo","C"],
            
            
            ["The award given for outstanding performance in sports is –","Bharat Ratna","Padma Shri Award","Arjuna Award","Dronacharya Award","3"],
            
            ["President of the International Olympic Committee is elected for a term of –","5 yrs","6 yrs","8 yrs","10 yrs","C"],
            
            ["Who among the following has scored first double century in World Cup Cricket?","Sachin Tendulkar","Martin Guptill","AB de Villiers","Chris Gayle","4"],
            ["Who among the following is a Silver medal winner in Olympics?","SainaNehwal","Marry Kom","Sushil Kumar","Leander Paes","C"],
            ["___ has been named as the Flying Sikh of India","Ajit Pal Singh","Milkha Singh","Joginder Singh","Mohinder Singh","B"],
            ["Sardar Patel Stadium is located at –","Mumbai","Ahmadabad","Kolkata","Delhi","B"],
            ["Badminton is National game of which country? ","Malaysia","India","China","Russia","A"],
            
            ["Name the country that has won the Olympic Gold Medal in Football three times-","Brazil","Hungary","Italy","Germany","B"],
            
            ["The winner of ICC Women's World Cup held in February 2013, was –","Australia","England","New Zealand","‘West Indies","A"],
            
            ["Who was the first Bangladeshi Cricketer score double century in test cricket?","Mohammad Ashraful","MashrafeMortaza","NasirHossain","Mushfiqur", 
            "Rahim","D"],
            
            ["No. of players in a team of Water Polo is:","8","7","6","5","B"],
            
            ["The winner of Asia Cup Cricket 2012 is","India","Pakistan","Sri Lanka","Bangladesh","B"],
            
            ["Which of the following cricketer entitled Dazzle as his autobiography?","Adam Gilchrist","Darren Gough","Allen Border","Steve Waugh","B"],
            ["In which year Santhosh Trophy Football tournament started?","1948","1947","1941","1950","C"],
            ["First sports person nominated for RajyaSabha membership","Sachin tendulkkar","Milkha Singh","SunilGavaskar","Navajot S sidhu","A"],
            ["Libero is related to which game","Kabaddi","Kho-Kho","Basketball","Volleyball","D"],
            
            ["Against which country India played first official international football match in 1948 London Olympics","Brazil","France","England","Holland","B"],
            ["Who is the fastest indian/Asian women swimmer to cross English Channel","ShikhaTandon","KarnamMalleswari","Anita Sood","AratiSaha","C"],
            
            ["Who was the man of the series in 2007 t20cricket World Cup Series","ShahidAfridi","MS Dhoni","Chris Gayle","Umar Gul","A"],
            ["which game will be dropped from 2020 Olympic Games as declared by IOC recently","kabadi","Wrestling","Discus Throw","Archery","B"],
            ["National Sports Day is celebrated on","29th August","5th May","12th November","30th November","A"],
            
            
            ["Indian Sports Research Institute is located at","Ranchi","Delhi","Mohali","Patiala","D"],
            ["Who is known as the father of modern Olympic Games","Demetrius Vikelas","Avery Brundage","Henri Didon","Pierre de Coubartin","D"],
            ["Indian last win the World Hockey Cup in the year","1975","1979","2006","2010","A"]
            ["MCmaryKom belongs to which state","Mizoram","Manipur","Nagaland","Arunachal Pradesh","B"],
            ["India won the kabaddi world Championship in 2007 after defeating which country","Pakistan","Bangladesh","Srilanka","Iran","D"],
            ["First indian football player to play professional football for a European club","IM Vijayan","Baichungbhutia","MuhammedSali","None of the above","C"],
            
            
            
            ["BAT extension refers usually to what kind of file?","Compressed Archive file","System file","Audio file","Backup file","B"],
            
            ["Changing computer language of 1s and 0s to characters that a person can understand is","Highlight","Clip art","Decode","Execute","C"],
            ["Which programming language is much in vogue among users of microcomputers","ALGOL","ASP","LOGO","FORTH","D"],
            
            ["The first mechanical calculating machine was made by","William Ought red","Gottfried Leibnitz","Blaze Pascal","Charles Babbage","C"],
            
            ["How much power (roughly) a light-emitting diode can couple intoanopticalfiber","100microwatts","440microwatts","100picowatts","10milliwatts","A"],
            
             ["_________ is an interoperable transport card conceived by the Ministry of Urban Development in association with NPCI","Unified Payments Interface","Bharat Bill Payment System","Immediate Payment Service","National Common Mobility Card","D"],
            
            ["Which of the following is the Smartphone app built using UPI interface?","NFS","IMPS","BHIM","All of these’","C"],
            
            ["Which of the following is an integrated bill payment system in India offering inter operable and accessible bill payment service to customers?",
            "Unified  Payments Interface","Bharat Bill Payment System","Immediate Payment Service","National Common Mobility Card","B"],
            
            
            
            ["Which is the umbrella organization for all retail payment systems in India?","UPI","BBPS","NPCI","NCMC","C"],
            ["What is the single mobile application for accessing different bank accounts?","UPI","BBPS","NPCI","NFS","A"],
            
            ["A common QR code built for ease of payments is known as _______","UPI","BBPS","NPCI QR","Bharat QR","D"],
            
            ["All of the following are examples of real security and privacy risks EXCEPT:","hackers","spam","viruses","identity theft","B"],
            
            ["A process known as ____________ is used by large retailers to study trends.","Data mining","Data selection","POS","Data conversion","A"],
            
            ["____________terminals (formerly known as cash registers) are often connected to complex inventory and sales computer systems.","Data","oint-of-sale (POS)"
            ,"Sales","Query","B"],
            
            ["Which of the following is NOT one of the four major data processing functions of a computer","Gathering data","Processing data into information",
            "Analyzing the data or information storing the data or information","C"],
            
             ["Surgeons can perform delicate operations by manipulating devices through computers instead of manually. This technology is known as:","Robotics.","Computer forensicsSimulation","Forecasting","A"],
            
            ["Technology no longer protected by copyright, available to everyone is considered to be:","proprietary","open"," experimental","in the public domain","A"],
            
            ["____________ is the study of molecules and structures whose  Size ranges from 1 to 100 nanometers","Nano science","Microelectrodes","Computer forensics","Artificial intelligence","A"],
            
            ["____________ is the science that attempts to produce machines that display the same type of intelligence that humans do.","Nanoscience","Nanotechnology"," Simulation","Artificial intelligence","D"],
            
            ["____________ is data that has been organized or presented in a meaningful fashion.","A process","Software","Information","Storage","C"],
            
            ["The name for the way that computers manipulate data into information is called:","Programming","Processing","Storing","Organizing","B"],
            
            ["Computers gather data, which means that they allow users to____________data"]
            ["Present","Input","Output","Store","B"],
            
            ["After a picture has been taken with a digital camera and processed appropriately, the actual print of the picture is considered:","data","Output","Input",
            "The process","B"],
            
            ["Computers use the ____________ language to process data","Processing","Kilobyte","Binary","Representational","C"],
            
            ["Computers process data into information by working exclusivelywith:","multimedia","words","characters","numbers","D"],
            
            ["In the binary language each letter of the alphabet, each number and each special character is made up of a unique combination of:","Eight bytes",
            "Eight kilobytes","Eight characters","Eight Bits","D"],
            
            ["The term bit is short for:","Megabyte","Binary language","Binary digit","Binary number","C"],
            
            ["A string of eight 0s and 1s is called a:","Megabyte","Byte","Kilobyte","Gigabyte","B"],
            
            ["A ____________ is approximately one billion bytes.","Kilobyte","Bit","gigabyte","megabyte","C"],
            
            ["A ____________ is approximately a million bytes","Gigabyte","Kilobyte","megabyte","megabyte","C"],
            
            ["____________ is any part of the computer that you can physically touch","Hardware","A device","A peripheral","An application","A"],
            
            ["The components that process data are located in the:","Input Devices","output devices","system unit","storage component.","C"],
            
            ["All of the following are examples of input devices EXCEPT a:","printer"," keyboard","mouse.","scanner","A"],
            
            ["Which of the following is an example of an input device?","Scanner","Speaker","CD","Printer","A"],
            
            ["All of the following are examples of storage devices EXCEPT:","Hard disk drives","printers","floppy disk drives","CD drives.","B"],
            
            
            
            
            ["____________ is a set of computer programs used on a computer to help perform tasks.","An instruction","Software","Memory","A processor","B"],
            
            ["The term ‘Computer’ is derived from..........","Latin","German","French","Arabic","A"],
            
            ["Who is the father of personal computer","Edward Robert","Allen Turing","Charles Babbage","None of these","A"],
            
            ["IBM 1401 belongs to which generation","First Generation Computer","Second Generation Computer","Third Generation Computer","Fourth Generation Computer","B"],
            
            ["The capacity of 3.5 inch floppy disk is","1.40 MB","1.44 GB","140GB","1.44MB","D","Second Generation computers were developed during"," 1949 to 1955","1956 to 1965","1965 to 1970","1970 to 1990","B"],
            
            ["An error in software or hardware is called a bug. What is the alternative computer jargon for it?","Leech","Squid","Slug","Glitch","D"],
            
            ["Who has launched an electronic book reader called PRS-700?","Sony","Panasonic","Apple","Goggle","A"],
            
            ["Who gave the name ‘Computer Viruses?","Dr Fred Cohen","Alan Turing","Fred Brooks","Ken Thompson","A"],
            
            ["Which globally famous job-search portal’s trademarked tagline is `never settle’?","Monster.com","indiabix.com","linkedin.com","indeed.com","A"],
            
            ["Whose search technology is called Web Fountain?","IBM","Amazon","Google","Myntra","A"],
            
            ["Experience Change’ is the tagline of which company?","Videocon","Motorola","Redmi","Samsung","A"],
            
            ["Who is regarded as Father of Wi-Fi?","Alan Turing","Vic Hayes","Fred Brooks","Ken Thompson","B"],
            
            ["Amazon has Amazon Prime Flip kart has Flip kart Assured what is the name of Snapdeal's equivalent Service?","Snapdeal gold","Snapdeal silver","Snapdeal diamond","Snapdeal diamond","A"],
            
            ["Initially formed as ‘Tokyo tsushin kogyo’. Which company am I talking about?","Panasonic","Samsung","Nokia","Sony","D"],
            
            ["Which is India’s biggest online platform for Dogs, Cats, BirdsFish and some small pets","dogspot.in","petsite.com","takepet.com","animalspot.in","A"],
            
            ["Edge Verve Systems, a wholly-owned subsidiary of which company?","Infosys","Wipro","TCS","IBM","A"],
            
            ["Which company launched an AI based Chabot – MATTU & MITTU","Max value","koshamattom group","ESAF","muthoot group","A"],
            
            ["Who is the inventor of the #tag?","Shigetaka Kurita","Chris Messina","R. Stanton Avery","Steve Wilhite","B"],
            
            
             ["Who is the founder of Oyo rooms","Sunil Kant Munjal","Ritesh Agarwal","Vijay Shekhar Sharma","swathy Sharma","B"],
            
            
            ["One kilobyte is equal to:","1000 bytes","100 bytes","1024 bytes","1023 bytes","B"],
            
            
            
            
            ["Who makes the Reclaim and Blue Earth range of mobile phones?","Samsung","LG","Videocon","Redmi","A"],
            
            ["Epic is a web browser made by which country?","India","South Africa","Japan","Italy","A"],
            
            ["Which Web Site tells that Discover what’s happening right now?","YouTube","Twitter","face book","orkut","YouTube","A"],
            
            ["Charles Babbage known as Father of Computers, belongs to which country?","England","Mexico","America","Costarica","A"],
            
            ["Who founded apple computer","Stephen Hawking","Steve Jobs","Stephan fry","Bill Gates","B"],
            
            ["Which of the following is not one of the early? Protocols or ways to use the Internet","elnet","blogging","ftp","gopher","A"],
            
            ["Which of these products is not made by the Apple? Corporation?","IMAX","I Phone","IPod","Imac","A"],
            
            
            
            
            ["Which supercomputer is developed by the Indian Scientists?","Param","super301","Compaq Presario","CRAY YMP","A"],
            
            ["What kind of errors can be pointed out by the compiler?","Syntax error","Semantic error","Logical error","Internal error","A"],
            
             ["The two major types of computer chips are","External memory chip","Primary memory chip","Microprocessor chip","Both b and c","D"],
            
            ["Who invented punched cards?","Charles Babbage","Dr. Herman Hollerith","Howard Aikin","Joseph Jacquard","D"],
            
            
            ["LSI, VLSI & ULSI chips were used in which generation?","First","Second","Third","Fourth","D"],
            
            ["Seek time is","Time to position the head over proper sector","Time to position the head over proper track","Time to position the head over proper cylinder","None of the above","B"],
            
            ["Which computer support co-processors?","AT Computer","XT Computer","Both of this","None of the above","A"],
            
            
            ["Removing and replacing devices without turning off your computer is referred to as","Hot swapping","Plug-n-Play","Bay swap","USB swapping","B"],
            
             
            
            ["Which of the following is not telecommunication equipment?","Modem","Fax Machine","Tele-printer","HUB","A"],
            
            
            ["The first transistorized computer was built at ________________","Babylonia","Bell labs","University of Manchester","Germany","C"],
            
            
            
            ["Computer language used on Internet is","LOGO","JAVA","PASCAL","BASIC","B"],
            
            ["The first electronic computer ENIAC was able to do how many multiplications per","200","300","400","500","A"],
            
            ["The first Operating System that allows multi tasking with graphical user interface____________.","Windows NT 3.1","Windows 3.11","Windows 1.01","Windows 3.0","C"],
            
            
            ["In windows ME, What does M stand for?","Millennium","Micro","Macro","Multy","A"],
            
            
            ["In which chart, only one data series can be plotted?","Pie","Line","Bar","Column","A"],
            
            ["What is the term used for a half byte?","Bit","Nibble","Bug","Word","C"],
            
            ["X-MP is Models of:","Micro computer","Mini computer","Main frame computer","Super Computer","D"],
            ["A computer is a box full of electronic:","Switching devices","Chips","Circuits","Registers","C"],
 
            ["How many vacuum tubes was used in ENIAC?","8498","19,230","17,468","13621","C"],
            
            ["What type of computers are client computers (most of the time) in a client-server system?","PDA","Main frame","Micro computer","Mini computer","A"],
            
            ["Which of the following is the largest manufacturer of Hard Disk Drives","IBM","3M","Microsoft","Segate","D"],
            
            ["EPROM consists of:","Bipolar transistors","Diodes","Easily erasable","MOSFETs","A"],
            
            ["A microcomputer has primary memory of 640K.What is the exact number of bytes contained in this memory?","64 * 1000","640 * 100","640 * 1024","Either b or c","C"],
            
            ["The standard size reel of magnetic tape is:","120 feet in length","1200 feet in length","240 feet in length","2400 feet in length","2400 feet in length","D"],
            
            ["A type of semiconductor memory that usually has small capacity but very fast access is:","PROM","RAM","ROM","Scratchpad","D"],
            
            ["which is India’s first 3D printed expandable platform humanoid Robot ","Mitra","Manav","Indro robots","Sofia","B"],
            
            ["first indian sound film was","alam ara","raja harishchandra","kishan kanya","silent drama","A"],
            ["satyajit ray win oscar in the year","1992","1994","1986","1990","A"],
            
            ["filmfare awards started from the year","1964","1952","1954","1962","C"],
            
            ["from which year indian govt sponsored national film awards","1972","1973","1984","1980","B"],
            
            
            ["first indian to win an oscar award","Bhanu Athaiya","A R Rahman","Rasool pookutty","ram mohan","A"],
            ["First programme telecast on doordarshan is","krishi darshan","the peacock call","ramayan","mahabarat","A"],
            ["who was the first indian actress won best actress award in an international film festival","suchithra sen","Waheeda Rahman","Nutan","Nargis Dutt","A"],
            
            ["which bollywood film with heighst number of songs","Neel kamal","indrasabha","alam ara","kishan kanaya","B"],
            
            ["Who is the first indian movie star to be featured on the cover of  Time magazine","Zeenat Aman","Parveen Babi","Aiswarya rai","Amir khan","B"],
            
            ["which one is the longest film in india by running time","tavamai thavamirundhu","mera naam joker","LOC kargil","parthiban kanavu","A"],
             
            ["Lata Mangeshkar awarded with Bharat Ratna in the year","1998","2000","2001","2004","C"],
            
            ["Only indian movie that win palme d'Or award in cannes film festival","Bandit Queen","Mother India","Do Bhiga Zamin","Neecha Nagar","D"],
             
            ["first indian movie that premeird at USA"," mother india","Amar jyoti","Ram rajya","Awaara","C"],
            
            ["first tv show that completed 1000 episodes","kkusum","kahaani ghar ghar ki","kasauti zindagi kay","ek mahal ho sapno ka","D"],
            
            ["how many movies are made by dadasaheb phalke","72","57","95","101","C"],
            
            ["which one is the first film of satyajit ray","Aparaijito","Apur sansar","Kanchenjungha","Pather Panchali","D"],
            
            ["who is the latest indian actor that include in the time magazine 100 most influential people","Salman khan","Amitab Bachchan","Amir khan","Aishwarya Rai","C"],
            
             ["who wins the first dadasaheb phalke award","Devika Rani","Prithviraj Kapoor","Pankaj Mullick","Nitin Bose","A"],
            
            ["which one is the first bollywood film of sridevi","Julie","Himmatwala","Sadma","Solva sawan","D"],
            
            ["which one is the first film of amitab bachchan's career","Saat Hindustani","Parwaana","Anand","Guddi","A"],
            
            ["in which newspaper for the first time a film advertisment was given","Hindustan Times","The Hindu","Times of India","Buisness Line","C"],
            
            ["rasool pookutty nwins the oscar award in the category of","Music Direction","Art Direction","Film Editing","Sound Mixing","D"],
            [" who is known as 'the show man' of indian movie","Dev Anand","Raj Kapoor","Dilip Kumar","Rajesh Khanna","B"],
            
            ["Romancing with life' is the autobiography of","B R Chopra","Amitabh Bachchan","Dilip Kumar","Rajesh Khanna","D"],
        
            ["First indian sound film was","Alam Ara","Raja harishchandra","Kishan kanya","silent drama","A"],
            ["Satyajit ray win Oscar in the year","1992","1994","1986","1990","A"],
            
            ["Film fare awards started from the year","1964","1952","1954","1962","C"],
            
            ["From which year indian govt sponsored national film awards","1972","1973","1984","1980","B"],
            
            
            ["first indian to win an oscar award"," Bhanu Athaiya"," A R Rahman"," Rasool pookutty","ram mohan","A"],
            ["First programme telecast on doordarshan is"," krishi darshan","the peacock call","Ramayana","Mahabharata","A"],
            ["who was the first indian actress won best actress award in an international film festival","suchithra sen","Waheeda Rahman","Nutan","Nargis Dutt","A"],
            
            [" which bollywood film with heighst number of songs"," Neel kamal","indrasabha","alam ara","kishan kanaya","B"],
            
            [" Who is the first indian movie star to be featured on the cover of  Time magazine","Zeenat Aman","Parveen Babi","Aiswarya rai"," Amir khan","B"],
            
            ["which one is the longest film in india by running time","tavamai thavamirundhu","mera naam joker","LOC kargil","parthiban kanavu","A"],
             
            [" Lata Mangeshkar awarded with Bharat Ratna in the year ","1998","2000","2001","2004","C"],
            
            ["Only indian movie that win palme d'Or award in cannes film festival","Bandit Queen","Mother India","Do Bhiga Zamin","Neecha Nagar","D"],
             
            ["first indian movie that premeird at USA"," mother india"," Amar jyoti","Ram rajya","Awaara","C"],
            
            [" first tv show that completed 1000 episodes","kkusum","kahaani ghar ghar ki","kasauti zindagi kay","ek mahal ho sapno ka","D"],
            
            [" how many movies are made by dadasaheb phalke","72","57","95","101","C"],
            
            ["which one is the first film of satyajit ray","Aparaijito","Apur sansar","Kanchenjungha","Pather Panchali","D"],
            
            ["who is the latest indian actor that include in the time magazine 100 most influential people","Salman khan","Amitab Bachchan","Amir khan","Aishwarya Rai","C"],
            
             ["who wins the first dadasaheb phalke award","Devika Rani","Prithviraj Kapoor","Pankaj Mullick","Nitin Bose","A"],
            
            ["which one is the first bollywood film of sridevi","Julie"," Himmatwala","Sadma","Solva sawan","D"],
            
            [" which one is the first film of amitab bachchan's career","Saat Hindustani","Parwaana","Anand","Guddi","A"],
            
            [" in which newspaper for the first time a film advertisment was given","Hindustan Times","The Hindu","Times of India","Buisness Line","C"],
            
            ["rasool pookutty nwins the oscar award in the category of","Music Direction","Art Direction","Film Editing","Sound Mixing","D"],
            [" who is known as 'the show man' of indian movie","Dev Anand","Raj Kapoor","Dilip Kumar","Rajesh Khanna","B"],
            
            ["'Romancing with life' is the autobiography of","B R Chopra","Amitabh Bachchan","Dilip Kumar","Rajesh Khanna","D"],
            
            ["Where is Pushkar Fair held?","Jaipur","Udaipur","Jodhpur","Ajmer","D"],
            
             ["‘Kuchipudi’ dance originated in","Rajasthan","Andhra Pradesh","Karnataka","Punjab","B"],
            [ "Who amongst the following is renowned in the field of painting ?","Prof. T.N. Krishnan","Ram Kinkar","Raja Ravi Varma","Parveen Sultana","C"],
            [" In which of the following styles of dance the story/ theme is always taken from Mahabharata and Ramayana ?","Bharatanatyam","Mohiniattam","Odissi","Kuchipudi","A"],
            ["Where is Salar Jung Museum situated ?","Jaipur","Hyderabad","Mumbai","Lucknow","B"],
             ["Which of the following is not a stringed instrument ?","Trumpet","Guitar","Sitar","Violin","A"], 
             ["Le Corbusier, the architect of Chandigarh was a national of"]
             ["Portugal","U.K.","France","The Netherlands","C"], 
            [" Which among the following is the popular dance form of Maharashtra’s musical theatre ?","Gatha","Tamasha","Nautanki","Lavini","D"],
            ["Where is the Swami Narayan temple, Akshar-dham located ?","Mathura, Uttar Pradesh","Gandhinagar, Gujarat","Puri, Odisha","Dwaraka, Gujarat","B"], 
            ["Which of the following is called the storehouse of world-art collections ?","Salarjung Museum","National Archives of India","National Museum","National Modren Art Gallery","A"],
            ["Which Buddhist text describes the existence of painted figures in many royal buildings?","Vinayapitaka","Sut Pitaka","Abhidhamma Pitaka","None of the above","A"],
            
            [" Flowers, leaves and plants were depicted first time in the paintings of which period?","Mughal Sultanat","Gupta Period"," Delhi Sultanat","Maurya Period","C"],
            ["Persian and Arabic influence in the Paintings were seen in which period of history?","Mughal Sultanat","Delhi Sultanat ","Both A and B","Neither A nor B","B"],
            ["Miniature painting was developed in which part of India?","Northern India","North-West India","Eastern India","North-East India","C"],
            ["The Progressive Artists Group in Bombay in 1948 was developed under ...........","K.C.S Paniker","S .H. Raza","Francis Newton Souza","S.K. Bakre","C"],
            ["Which of the following belong to Madras School of Art?","Debi Prasad Roy Chowdhury","K.C.S Paniker","Both A and B","Neither A nor B","C"],
            ["The term theatre derived from which word:","Threatron","Theatron","Threatingon","Throtitleon"," B"],
            ["Which of the following caves is the most ancient evidence of theatre?","Sitabenga Cave and Jogimara Cave of Raigarh hill","Bhimbetka rock shelters","Ellora Caves","Borra Caves","A"],
            ["Which of the following is the most famous and ancient book of drama in India?","Natyamandap","Karpoor Manjari","Natyashastra of Bharata Muni Lord Brahma","None of the above","C"],
            ["Which of the following is not types of Natyamandap according to the Bharata Muni?","Vikrisht","Chaturasra","Trayashra","Vikramorvsaiyam","D"],
            ["Which of the following is the oldest theatre in India?","Laffed Faire","Athenaeeum and Chaurang Theatre","Athen Theatre","None of the above","A"],
            ["Who among the following is known as Shakespeare of Persian theatre?","Agha Hashar Kashmiri","Sheila Bhatia","Habib Tanvir","Both A and B","A"],
            [" Which is the first narrative feature film in India?","Pundalik","Raja Harishchandra","Alam Ara","Sant Tukaram","A"],
            
            [" Which is the first indigenous feature film in India?","Pundalik"," Alam Ara","Sant Tukaram","Raja Harishchandra","D"],
            
            [" Which is the first talkie film in India?","Pundalik"," Alam Ara","Sant Tukaram","Raja Harishchandra","B"],
            
            ["Which is the first golden jubilee film of India?","Pundalik","Alam Ara","Sant Tukaram","Raja Harishchandra","C"],
            
            
            ["Which is the first Sanskrit film?","Shankaracharya","Bhagavad Gita","Gunda","Margazhi Raagam","A"],
            
            [" Which is the first telefilm of India?","Sadgati","Pather Panchali","Pikoo","Bala","A"],
            
            
            [" Which is the first serialised animation film in India?","Ek Anek aur ekta","Ghayab Aya","Kittu","Motu Patlu","B"],
            
            [" _________ was the first Cinemascope Film?","Kagaz Ke Phool","Deewana","Darr","Bazigar","A"],
             ["Which was the first 3D Film of India?","Kagaz Ke Phool","Deewana","Darr","My Dear Kuttichathan","D"],
             ["Who is called the Father of Indian Cinema ?","AK Hangal","Dileep Kumar","Dada Saheb Phalke","Jatin Lalit","C"], 
            ["The first Dada Saheb Phalke award is won by?","Devika Rani","Dileep Kumar","Dada Saheb Phalke","Jatin Lalit","A"],
             ["Film & Television Institute of India is situated at ?","Delhi","Bangalore","Pune","Chennai","C"],
             ["Name the Indian film which has 71 songs ?","Indra Sabha","Chennai Express","Veer Zara","Khiladi 786","A"],
              ["Which famous actor is also known as ‘Jumping Jack’ for his dancing style?","Jeetendra","Dileep Kumar","Dada Saheb Phalke","Jatin Lalit","A"], 
             ["Which Indian actress was invited by Pervez Musharraf for dinner?","Rani Mukherji","Aishwarya Rai Bachchan","Karishma Kapoor","Katrina Kaif","A"],
             
             
            ["To commemorate 100 years of Indian cinema, the Filmfare Trophy be this year 	who	have__________ base?","Diamond","Glass","Golden","Silver","C"],
              ["Who was the recipient of the Cecil B. DeMille Award for lifetime achievement at the Golden Globe Awards?","Thalaiva","Dileep Kumar","Dada Saheb Phalke","Jatin Lalit","A"],
              ["Itna sannata kyun hai bhai? Who said this, now legendary words, in 'Sholay'?","AK Hangal","‘Thala’ Ajith","Arjun Sarja","Ashutosh Gawariker","A"],
              ["Who became the first Indian Director to shoot at NASA?","Ashutosh Gawariker(Film-Swadesh)","AK Hangal","‘Thala’ Ajith","Arjun Sarja","A"],
             ["Which upcoming Shah Rukh flick has the tagline ‘Ready Steady Po’?","Dil to pagal hai","Jab tak hai jaan","Chennai Express","Khiladi 786","C"],
            ["Which South Indian actor has helmed films like Jai Hind, Vedham and Madrasi?","Arjun Sarja","AK Hangal","‘Thala’ Ajith","Arjun Sarja","A"],
            ["In which creative art is Sonal Mansingh distinguished?","Dance","Vocal music (Hindustani)","Painting","Instrumental music","A"],
            
            ["Which of the following is a ‘classical’ dance form?","Kalaripayattu","Chhobia","Bhawai","KathakalI","D"],
            
            ["Which among the following is a martial dance?","Kathakali","Bamboo dance in Meghalaya","Chhau of Mayurbhanj","Bhangra of Punjab","C"],
            
            ["With which of the following dances Raja Reddy is associated with?","Bharatnatyam","Kuchipudi","Odissi","Kathakali","B"],
            
            ["Gidda is a popular folk dance from which state of India?","Punjab","Haryana","Uttar Pradesh","Uttarakhand","A"],
            
            ["Which from the following is a Classical dance form?","Bhangra","Bharatanatyam","Chhau","Wangala","D"],
            ["Chakyar Koothu is a performing art associated with which of the following states?","Manipur","Kerala","Mizoram","Himachal Pradesh","B"],
            ["Which of the following is a folk dance of Rajasthan?","Garba","Dandiya","Jhumar","Kathak","C"],
            
            [" Kuchipudi is a dance drama of which of the following States?","Andhra Pradesh","Kerala","Karnataka","Tamil Nadu","A"],
            
            ["Who amongst the following is renowned in Hindustani classical music (vocal)?","Shovana Narayan","M. S. Subbalakshmi","Pt. Jasraj","Hari Prasad Chaurasia","C"],
            
            ["Alla Rakha was an exponent of which of the following instruments?","Shehnai","Tabla","Sitar","Santoor","B"],
            
            ["Shambhu Maharaj excelled in :","Hindustani Classical Music","Instrumental Music","Urdu Poetry","Kathak Dancing","D"],
            
            ["Dr. M. S. Subbulakshmi has distinguished herself in the field of","Kathak","Bharatha Natyam","Playing Violin","Vocal Music","D"],
            
            
            
             ["Which of the following is not correctly matched?","Ravi Shankar – Sitarist","M. F. Hussain – Tabla","R. K. Narayan – Novelist","Kaifi Azmi – Poet","B"],
            
            [" With which of the following instruments is Anuradha Pal associated?","Sitar","Veena","Tabla","Mandolin","C"],
             
            ["The Mohini Attam dance form was developed in :","Andhra Pradesh","Karnataka","Kerala","Tamil Nadu","C"],
            
            ["The theory of classical music is discussed in :","Samaveda","Yajurveda","Rigveda","Atharvaveda","A"],
            
            [" Rukmini Devi Arundale was associated with which of the following forms of classical dances?","Bharat Natyam","Kuchipudi","Odissi","Kathak","A"],
            
            ["Kalbelia is a folk dance associated with which of the following states?","Rajasthan","Uttarakhand","Himachal Pradesh","Jammu & Kashmir","A"],
            
            
            ["Who was the composer of the classical composition ‘Moonlight Sonata’?","Ludwig Van Beethoven","Antonio Lucio Vivali","Arcangelo Corelli","George Handel","A"],
            
             ["Which of the following folk dances is associated with Jammu and Kashmir?","Jhora","Veedhi","Rauf","Suisini","C"],
            
            ["Which of the following is a percussion instrument?","Cymbal","Mandolin","Santoor","Accordion","A"],
            
            ["Who among the following is an accomplished vocalist?","Ronu Mazumdar","Shiv Kumar Sharma","Satish Gujral","Dinanath Mishra","D"],
            
             ["Raga Kameshwari was composed by –","Ustand Amjad Ali Khan","Uday Shankar","Pandit Ravi Shankar","None of the above","C"],
            
            
            ["In which decade were the first successful diode and triode vacuum tubes invented?","1800s","1880s","1890s","1900s","D"],
            
            ["Formatting a disk results in all the data being?","Saved to the disk","Copied from the disk","Deleted from the disk","All of the above","C"],
            
            ["What type of web technology creates an online community where people can make statements and others can read and respond to those statements?","I-Journal","Podcast","ASP","Blog","D"],
            
            ["What is a common medium used for thieves to steal others’ identities?","Telephone","Pick pocketing","Burglary","Email","D"],
            
            ["Application software","Is used to control the operating system","Is designed to help programmers","Performs specific task for computer users","Is used for making design only","C"],
            
            ["A set of instruction telling the computer what to do is called?","instructor","compiler","program","debugger","D"],
            
            ["In which decade was the American Institute of Electrical Engineers (AIEE) founded?","1850s","1880s","1880s","1950s","B"],
            
            ["What is part of a database that holds only one type of information?","Report","Field","Record","File","B"],
            
            ["Where is the headquarters of Intel located?","Redmond, Washington","Tucson, Arizona","Tucson, Arizona","Richmond, Virginia","C"],
            
            ["Who co-created the UNIX operating system in 1969 with Dennis Ritchie?","Bjorn Stroustruop","Steve Wozniak","Ken Thompson","NiklausWirth","C"],
            
            ["BAT' extension refers usually to what kind of file?","Compressed Archive file","System file","Audio file","Backup file","B"],
            
            ["Changing computer language of 1's and 0's to characters that a person can understand is","Highlight","Clip art","Decode","Execute","C"],
            ["Which programming language is much in vogue among users of microcomputers","ALGOL","ASP","LOGO","FORTH","D"],
            
            ["The first mechanical calculating machine was made by","William Ought red","Gottfried Leibnitz","Blaze Pascal","Charles Babbage","C"],
            
            ["How much power (roughly) a light-emitting diode can couple intoanopticalfiber","100microwatts","440microwatts","100picowatts","10milliwatts","A"],
            
            ["_________ is an interoperable transport card conceived by the Ministry of Urban Development in association with NPCI","Unified Payments Interface"," Bharat Bill Payment System "," Immediate Payment Service "," National Common Mobility Card "["D"],
            
            ["Which of the following is the Smartphone app built using UPI interface?"]
            ["NFS","IMPS","BHIM","All of these","C"],
            
            
            
            
           
            
            ["Which is the umbrella organization for all retail payment systems in India?","UPI","BBPS","NPCI","NCMC","C"],
            
            ["Network of shared automated teller machines in India is called"]
            ["UPI","BBPS","NPCI","NFS","D"],
            ["What is the single mobile application for accessing different bank accounts?","UPI","BBPS","NPCI","NFS","A"],
            
            ["A common QR code built for ease of payments is known as _______","UPI","BBPS","NPCI QR","Bharat QR","D"],
            
            ["All of the following are examples of real security and privacy risks EXCEPT:","hackers","spam","viruses","identity theft","B"],
            
            ["A process known as ____________ is used by large retailers to study trends.","Data mining","Data selection","POS","Data conversion","A"],
            
            ["____________terminals (formerly known as cash registers) are often connected to complex inventory and sales computer systems."]
            ["Data","Point-of-sale (POS)","Sales","Query","B"],
            
            ["Which of the following is NOT one of the four major data processing functions of a computer","Gathering data","Processing data into information","Analyzing the data or information storing the data or information","C"],
            
            ["Surgeons can perform delicate operations by manipulating devices  through computers instead of manually. This technology is known as:","Robotics.","Computer forensics","Simulation","Forecasting","A"],
            
            ["Technology no longer protected by copyright, available to everyone is considered to be:","proprietary","open"," experimental","in the public domain","A"],
            
            
            
            ["____________ is the science that attempts to produce machines that display the same type of intelligence that humans do.","Nanoscience","Nanotechnology","Simulation"," Artificial intelligence","D"],
            
            ["____________ is data that has been organized or presented in a meaningful fashion.","A process","Software","Information","Storage","C"],
            
            ["The name for the way that computers manipulate data into information is called:"]
            ["Programming","Processing","Storing","Organizing","B"],
            
            ["Computers gather data, which means that they allow users to ____________data"]
            ["Present","Input","Output","Store","B"],
            
            ["After a picture has been taken with a digital camera and processed appropriately, the actual print of the picture is considered:","data","Output","Input","The process","B"],
            
            ["Computers use the ____________ language to process data","Processing","Kilobyte","Binary","Representational","C"],
            
            ["Computers process data into information by working exclusively with:","multimedia","words"," characters","numbers","D"],
            
            ["In the binary language each letter of the alphabet, each number and each special character is made up of a unique combination of:","Eight bytes","Eight kilobytes","Eight characters","Eight  Bits","D"],
            
            ["The term bit is short for:","Megabyte","Binary language","Binary digit","Binary number","C"],
            
            ["A string of eight 0s and 1s is called a:","Megabyte","Byte","Kilobyte.","Gigabyte","B"],
            
            ["A ____________ is approximately one billion bytes.","Kilobyte","Bit"," gigabyte"," megabyte","C"],
            
            ["A ____________ is approximately a million bytes","Gigabyte"," Kilobyte","megabyte"," megabyte","C"],
            
            ["____________ is any part of the computer that you can physically     touch","Hardware","A device","A peripheral","An application","A"],
            
            ["The components that process data are located in the:","Input  Devices","output devices","system unit","storage component.","C"],
            
            ["All of the following are examples of input devices EXCEPT a:","printer"," keyboard"," mouse.","scanner","A"],
            
            ["Which of the following is an example of an input device?","Scanner","Speaker","CD","Printer","A"],
            
            ["All of the following are examples of storage devices EXCEPT:"," Hard disk drives","printers","floppy disk drives","CD drives.","B"],
            
            ["____________ is a set of computer programs used on a computer to help perform tasks.","An instruction","Software","Memory","A processor","B"],
            
            ["The term ‘Computer’ is derived from..........","Latin"," . German"," French"," . Arabic","A"],
            
            ["Who is the father of personal computer","Edward Robert","Allen Turing","Charles Babbage","None of these","A"],
            
            ["IBM 1401 belongs to which generation","First Generation Computer","Second Generation Computer","Third Generation Computer","Fourth Generation Computer","B"],
            
            ["The capacity of 3.5 inch floppy disk is","1.40 MB","1.44 GB","140GB"," . 1.44MB","D"],
            ["Second Generation computers were developed during","1949 to 1955","1956 to 1965","1965 to 1970","1970 to 1990","B"],
            
            ["An error in software or hardware is called a bug. What is the alternative computer jargon for it?","Leech","Squid","Slug","Glitch","D"],
            
            ["Who has launched an electronic book reader called PRS-700?","Sony","Panasonic","Apple","Goggle","A"],
            
            ["Who gave the name ‘Computer Viruses?","Dr Fred Cohen"]
            ["Alan Turing","Fred Brooks"," . Ken Thompson","A"],
            
            ["Which globally famous job-search portal’s trademarked tagline is `never settle’?","Monster.com","indiabix.com","linkedin.com"]
            ["indeed.com","A"],
            
            ["Whose search technology is called Web Fountain?","IBM","Amazon","Google","Myntra","A"],
            
            ["‘Experience Change’ is the tagline of which company?","Videocon","Motorola","Redmi","Samsung","A"],
            
            ["Who is regarded as Father of Wi-Fi?","Alan Turing","Vic Hayes"],
            ["Fred Brooks","Ken Thompson","B"],
            
            ["Who makes the Reclaim and Blue Earth range of mobile phones?"],
            ["Samsung","LG","Videocon","Redmi","A"],
            
            ["Epic is a web browser made by which country?","India","South Africa","Japan","Italy","A"],
            
            ["Which Web Site tells that Discover what’s happening right now","YouTube","Twitter","face book","orkut","YouTube","A"],
            
            ["Charles Babbage known as Father of Computers, belongs to which country?","England","Mexico","America","Costarica","A"],
            
            ["Who founded apple computer","Stephen Hawking","Steve Jobs"]
            ["Stephan fry","Bill Gates","B"],
            
            
            
            ["Which of these products is not made by the Apple?Corporation?","IMAX","I Phone","IPod","Imac","A"],
            
            ["Amazon has Amazon Prime Flip kart has Flip kart Assured what is the name of Snapdeal's equivalent Service?","Snapdeal gold","Snapdeal silver","Snapdeal diamond","Snapdeal diamond","A"],
            
            ["Initially formed as ‘Tokyo tsushin kogyo’. Which company am I talking about?","Panasonic","Samsung","Nokia","Sony","D"],
            
            ["Which is India’s biggest online platform for Dogs, Cats, Birds?Fish and some small pets","dogspot.in"," petsite.com"," takepet.com"," animalspot.in","A"],
            
            ["Edge Verve Systems, a wholly-owned subsidiary of which company?","Infosys","Wipro","TCS","IBM","A"],
            
            ["Which company launched an AI based Chabot – MATTU & MITTU","Max value","koshamattom group"," ESAF","muthoot group","A"],
            
            ["Who is the inventor of the #tag?","Shigetaka Kurita","Chris Messina","R. Stanton Avery","Steve Wilhite","B"],
            
            
             ["Who is the founder of Oyo rooms","Sunil Kant Munjal"]
            ["Ritesh Agarwal","Vijay Shekhar Sharma","swathy Sharma","B"],
            
            
            ["One kilobyte is equal to:","1000 bytes","100 bytes"," . 1024 bytes"," 1023 bytes","B"],
            
            
            ["Which supercomputer is developed by the Indian Scientists?","Param","super301","Compaq Presario"," . CRAY YMP","A"],
            
            ["What kind of errors can be pointed out by the compiler?","Syntax error","Semantic error"," Logical error"," Internal error","A"],
            
             ["The two major types of computer chips are","External memory chip","Primary memory chip","Microprocessor chip","Both b and c","D"],
            
            ["Who invented punched cards?","Charles Babbage","Dr. Herman Hollerith","Howard Aikin","Joseph Jacquard","D"],
            
            
            ["LSI, VLSI & ULSI chips were used in which generation?","First","Second","Third","Fourth","D"],
            
            ["Seek time is","Time to position the head over proper sector"]
            ["Time to position the head over proper track","Time to position the head over proper cylinder","None of the above","B"],
            
            ["Which computer support co-processors?","AT Computer","XT Computer","Both of this","None of the above","A"],
            
            
            ["Removing and replacing devices without turning off your computer is referred to as","Hot swapping","Plug-n-Play","Bay swap","USB swapping","B"],
            
            ["Which of the following is not telecommunication equipment?","Modem","Fax Machine","Tele-printer","HUB","A"],
            
            
            ["The first transistorized computer was built at ________________","Babylonia","Bell labs","University of Manchester","Germany","C"],
            
            
            
            ["Computer language used on Internet is","LOGO","JAVA","PASCAL","BASIC","B"],
            
            ["The first electronic computer ENIAC was able to do how many multiplications per","200","300","400","500","A"],
            
            ["The first Operating System that allows multi tasking with graphical user interface____________.","Windows NT 3.1","Windows 3.11","Windows 1.01","Windows 3.0","C"],
            
            
            ["In windows ME, What does M stand for?"]
            ["Millennium","Micro","Macro","Multy","A"],
            
            
            ["In which chart, only one data series can be plotted?","Pie","Line","Bar","Column","A"],
            
            ["What is the term used for a half byte?","Bit","Nibble","Bug","Word","C"],
            
            ["X-MP is Models of:","Micro computer","Mini computer","Main frame computer","Super Computer","D"],
            ["A computer is a box full of electronic:","Switching devices"]
            ["Chips","Circuits","Registers","C"],
            
            
            
            
            
            ["How many vacuum tubes was used in ENIAC?","8498","19,230"]
            ["17,468","13621","C"],
            
            ["What type of computers are client computers (most of the time) in a client-server system?","PDA","Main frame","Micro computer","Mini computer","A"],
            
            ["Which of the following is the largest manufacturer of Hard Disk Drives?","IBM","3M","Microsoft","Segate","D"],
            
            ["EPROM consists of:","Bipolar transistors","Diodes","Easily erasable","MOSFETs","A"],
            
            ["A microcomputer has primary memory of 640K.What is the exact number of bytes contained in this memory?","64 * 1000","640 * 100","640 * 1024","Either b or c","C"],
            
            ["The standard size reel of magnetic tape is:","120 feet in length","1200 feet in length","240 feet in length","2400 feet in length","2400 feet in length","D"],
            
            ["A type of semiconductor memory that usually has small capacity but very fast access is:","PROM","RAM","ROM"]
            ["Scratchpad","D"],
            
            ["which is India’s first 3D printed expandable platform humanoid Robot ","Mitra","Manav","Indro robots","Sofia","B"],
            
            ["Where is the Swiss Project for Cattle development in Kerala situated?","Vellayani","Mannuthi","Kunnamangalam","Mattuppetti","D"],
            
            ["Which is a disease caused by disorder of the respiratory system?","Hypertension","Jaundice","Imbalance of cholesterol","Pneumonia","D"],
            
            ["The freezer in a refrigerator is fitted near the top:"," to keep it away from the heat compressor which is near the bottom"," because of convenience","so that it can cool the whole interior by setting up convection currents"," without any specific purpose","C"],
            
            ["The disease causing germ of common cold is","bacteria","virus","Protozoa"," itchmite","B"],
            
            ["Which of the following is an excretory organ?","Kidney","Intestine","Liver","Stomach","A"],
            ["Which is the plant that uses insects as food?","Pitcher plant","Loranthus","Lotus","Orchid","A"],
            ["Which is the brightest planet?","Mercury","Venus","Earth","Mars","B"],
            
            ["Radio was invented by:","John L. Baird"," Charles Babbage"," Faraday"," Marconi","D"],
            
            
            
            
            ["Sodium is kept in ———— liquid"," kerosene"," water"," ammonia"," alcohol","A"],
            
            ["A seed dispersed with the help of hairs on it is:"," Drumstick"," Cotton"," Poppy"," Castor","B"],
            
            
            
            ["The most abundant alkaline earth metal in nature is:"," Beryllium"," Calcium"," Barium","Radium","B"],
            
            
            ["Which of the following creatures is not purely aquatic?","Shark","Whale","Crocodile","Octopus","C"],
            
            ["Which of the following organs is responsible for the removal of excess water, salts and waste products from blood?","Skin","Liver","Kidney","Heart","C"],
            
              
              
            
            ["Brass gets discoloured in air because of the presence of which of the following gases in air?"," Oxygen"," Hydrogen sulphide"," Carbon dioxide", "Nitrogen","B"]
            
            
            
            
            ["Which of the following is a non metal that remains liquid at room temperature?"," Phosphorous"," Bromine"," Chlorine"," Helium","B"],
            
            
            
            
            ["The gas usually filled in the electric bulb is","nitrogen","hydrogen","carbon dioxide","oxygen","A"],
            
            
            
            
            ["Washing soda is the common name for","Sodium carbonate","Calcium bicarbonate","Sodium bicarbonate","Calcium carbonate","A"],
            
            ["Quartz crystals normally used in quartz clocks etc. is chemically"," silicon dioxide"," germanium oxide"," a mixture of germanium oxide and silicon dioxide"," sodium silicate","A"]
            
            
            
             
            ["Bromine is a"," black solid"," red liquid"," colourless gas"," highly inflammable gas","B"],
            
            
            
            
            ["The hardest substance available on earth is","Gold"," Iron","Diamond"," Platinum","C"],
            
            
                 ["Which of the following is used as a lubricant?"," Graphite"," Silica"," Iron Oxide"," Diamond","A"],
            
            
            ["What is the unit for measuring the amplitude of a sound?"," Decibel"," Coulomb"," Hum"," Cycles","A"]
            
            
            
            
            ["Reading of a barometer going down is an indication of"," snow"," storm"," intense heat"," Rainfall","D"],
            
            ["Light year is a measurement of"," speed of aeroplanes"," speed of light"," Stellar distances"," speed of rockets","C"]
            ["One kilometre is equal to how many miles?"," 0.84"," 0.5"," 1.6"," 0.62","D"],
            
            ["kilohertz is a unit which measures"," power used by a current of one ampere"," electromagnetic radio wave frequencies"," voltage"," electric resistance","B"],
            
            
            ["'Bar' is the unit of"," temperature"," heat"," atmospheric pressure"," current","C"],
            
            
                 ["Kilowatt is a unit to measure"," work"," power"," electricity"," current","B"],
            
            
            
            ["A chronometer measures"," colour contrast"," sound waves"," time"," water waves","C"],
            
            
                 ["Knot is a unit of speed of which of the following?"," Aeroplane"," Light waves"," Ship"," Sound waves","C"],
            
            
            ["Who invented the BALLPOINT PEN?"," Biro Brothers"," Waterman Brothers","Bicc Brothers"," Write Brothers","A"],
            
            ["Which scientist discovered the radioactive element radium?"," Isaac Newton"," Albert Einstein"," Benjamin Franklin"," Marie Curie","D"]
            
            
            ["What Galileo invented?"," Barometer"," Pendulum clock"," Microscope"," Thermometer","D"],
            
            
            ["What James Watt invented?"," Diving bell"," Steam boat"," Hot air balloon"," Rotary steam engine","D"],
            
            
            
            ["What invention caused many deaths while testing it?"," Dynamite"," Ladders"," Race cars"," Parachute","D"],
            
            
            
            ["In which decade was the telephone invented?"," 1850s"," 1860s"," 1870s"," 1880s","C"],
            
            
                 ["What Benjamin Franklin invented?"," Bifocal spectacles"," Radio"," Barometer"," Hygrometer","A"],
            
            
                
            ["RDX is chemical compound. How is it used?"," As an composition"," As an reactor"," As an explosive"," As an nuclear weapon","C"],
            
            ["As a vegetable preservative poly______ form is used","Uthane","Uriathenes"," Urathanes"," Urethanes","D"],
            
            ["Where the Bio-chemical compounds are used?","SkinTreatments","Food preservatives","Cooking Oils","All of the above",""],
            
            ["Which is not used as an alkali?","Sodium hydroxide","Potassium hydroxide","Carbon hydroxide","Nitrogen hydroxide","D"],
            ["How many charges alpha-rays consist of?","Two unit positive charges","Unit negative charge","Unit positive charge","None of these","A"],
            ["Which of the following is not a radioactive element?","Astatine","Francium","Titanium","Zirconium","D"],
             ["Which of the following is the unit of radioactivity?","Curie","Becquerel","Rutherford","All of these","B"],
            ["Chromosome complement in Turner's syndrome is","47; XXY","45; XO","46; XX"," 47; XYY","B"],
            ["Which part of human body skin has greatest number Sweat glands?","Forehead","Forearm","Palm of the hand","Back","C"], 
            ["Which of the following corona virus that kills human?","AIDS"," FAIDS","SARS","HIV","C"],
            
            
            ["Hargobind Khorana's work relates to:","Synthesis of simple DNA","Understanding the genetic code","Reduction of mutation","Synthesis of RNA from bacterial cell","D"],
            ["Who among the following had started vaccination?","Jonas E. Salk","Paul Muller","Edward Jenner","Robert Frost","C"],
            ["An ancient book of 1000 B.C. deals with health, hygiene, longevity etc?","SushrutaSamhita"," Atatharvaveda","BhelaSamhita","CharakaSamhita",
            "B"],
            
            ["Name a concise and scientific exposition of Ayurveda in verse form. It is distinguished by its knowledge of chemical reactions and laboratory processes etc.","Vrdukunta","Vaghata","KasyapaSamhita","None of the above","B"],
            
            ["Name an ancient book which describes difficult surgical operations like opening of a brain etc.","Celsus","BhelaSamhita","Chivaravastu","AgnivesaSamhita","C"],
            
            ["Which ancient book of 600 B.C. deals with paediatrics?","KasyapaSamhita","AgnivesaSamhita","BhelaSamhita","None of the above","A"],
            ["kidney is made up of a large number of excretory units called:","Glomerulus","Bowman’s Capsule","Nephron","Blood capillaries","C"],
            ["In which of the following are the largest amounts of nitrogen excreted from a mammalian body?","Breath","Sweat","Urine","Faeces","C"],
            ["The best long term solution for kidney failure is:","Dialysis","Kidney transplant","Both A and B","Only B","B"],
            
            ["What types of nitrogenous wastes are excreted by living organisms?","Ammonia","Uric acid","Urea","All of the above","D"],
            ["After wound or cut in a body blood coagulates through:","WBC","RBC","Platelets"," Plasma","C"],
            
            ["When blood is forced into the artery, wave like expansion takes place is called:","Heart bea","Pulse","Flow","Ticking","B"],
            ["For which Diode is used ?","modulation","oscillation","amplification","purification","D"],
             ["Who among the following developed the technology of underground nuclear explosion","Dr. Horn J. Bhabha","Dr.Vikram Sarabhai","Dr. Raja Ramanna","Dr. P. K. Iyengar","A"],
             ["Which among the following types of coal produces most heat per unit?","Coal","Lignite","Anthracite","Pit","C"],
            ["among the following waves is used for communication by artificial satellites ? ","Microwaves","Radio waves","A. M. ","Frequency of 101 series","A"]
            
             ["What is found in frequency modulation?","Fixed frequency ","Fixed dimension ","Change In frequency and dimension","Change in dimension only ","A"],
             [" The dimension of which of the following is the same as that of impulse?"," Volume ","Momentum ","Torque","Change in the rate of momentum","B"],
            ["If the diameter of a capillary is doubled then the rise of water in it will be","two times","half","four times","no change","B"],
            ["Why the needle of iron swims on Water surface when it is kept gently ?","it will remain under the water when it will displace more water than its weight ","the density of needle is less than that of water","due to surface tension","due to its shape ","C"]
            
            ["The mass of a star is two times the mass of the Sun. How it will come to an end ? ","Neutron Star","Black hole","White Dwarf","Red Giant ","A"],
            
            ["Rain drops fall from great height. Which among the following statements is true regarding it?","they fall with that ultimate velocity which are different for different droplets ","they fall with same ultimate velocity (c) their velocity increases and they fall With different velocity on the earth"," their velocity increases and they fall with same velocity of the earth","B"],
            
             ["On which of the following techniques photo state machine works ? ","Magnetic Imager Making","Thermal Image Making ","Electrostatic Image Making ","Electromagnetic Image Making","C"],
            
            ["One Kilowatt hour is equal"," 6 Mega Joule","8 Mega Joule","2 Mega Joule","0 Mega Joule","A"],
            
            ["When the barometer reading dips suddenly it is an indication of","Hot weather"," Calm weather","Storm","Dry weather","C"], 
            ["Good conductor of electricity is","dry air","paper","kerosene","graphite","D"],
            
            
            
             ["Heat from the Sun reaches the Earth by","Reflection","Conduction","Radiation","Convection","B"],
            
            
             [" In which of the following cases kinetic energy is being used in performing work ? ","Paddling the bicycle to cover a distance","Driving a car to cover a distance","Wind mill grinding wheat grain","Rowing a boat in the lake ","B"],
            
            ["If the velocity time graph of a particle is represented by y = mt + c then the particle is moving with","constant speed","constant velocity","constant acceleration","varying acceleration","C"],
            
             ["Which of the following occurred first ? ","Albert Einstein propounded the General Theory of Relativity","Max Planck unveiled the Quantum Theory","Guglielmo Marconi sent out the first wireless signals","Wright Brothers successfully flew an aircraft","C"],
            
             ["A passenger standing In a bus is thrown outward when the bus takes a sudden turn happens due to","Outward pull on him","Inertia of motion","Change in momentum","Change in acceleration","C"],
            
            
            [" Longitudinal waves cannot travelthrough","Vacuum","Solid","Liquid","Gas","A"],
             ["Electrostatic precipitator is used to control the pollution of ","air","water","noise","thermal ","A"],
            [" The sky appears blue because of","Atmospheric water vapour","Scattering of light","Reflection on sea water","Emission of blue wavelength by the sun","B"], 
            ["Dynamo is a device for converting ","Heat energy into electrical energy","Mechanical energy into electrical energy","Magnetic energy into electrical energy","Chemical energy Into electrical energy","B"]
            ["Oil rises up the wick in a lamp because","Oil is very light","Of the diffusion of oil through the wick","Of the surface tension phenomenon","Of the capillary action phenomenon","D"],
             [" In the atmosphere ultraviolet rays are absorbed by ","Oxygen","Nitrogen","Ozone","Helium","A"],
            ["The sudden fall of atmospheric pressure indicates","fair weather"," storm ","rain","cold weather","B"],
            ["Magnetism in materials is due to","electrons at rest","circular motion of electrons","protons at rest","all neutrons at rest","B"],
            
            ["Short sight in human eye can be corrected by using proper ","convex lens","concave lens","cylindrical lens","bifocal lens","B"], 
            
            ["What is the reason for twinkling of stars ?"," Dispersion of light"," Total internal reflection ","Atmospheric reflection","Atmospheric refraction ","D"],
            
            ["The instrument for measuring intensity of earthquakes is called","Ideograph"," Pantograph ","Ergo graph"," Seismograph","D"], 
            
            
            ["A multimeter is used to measure","current","voltage","resistance","All of the above ","D"],
            
            
            ["Which of the following is used to split white light Into different colours ?","Glass slab","Convex lens","Concave lens","Prism","D"], 
            
            ["Nuclear reactors used to produce electricity are based on","nuclear fission","nuclear fusion","ColdFusion","superconductivity","A"],
            ["Which one of the following instruments is used to study dispersion of light ?","Microscope ","Telescope ","Spectrometer","Photometer","C"],
             ["A fountain pen Works on the principle of","flow of liquids from higher to lower potential ","capillary action","Bernoullis principle","Viscosity of liquids ","B"],
            ["Pycnometer is an instrument used to measure the","density","intensity of solar radiation","dintensity of earthquake","high temperatures","A"],
             ["Fibre optics work on the principle of ","scattering of light","total internal absorption","total internal reflection","optical rotation","C"],
             ["A decibel is","a musical instrument","the wavelength of noise"," a musical note","a measure of sound level","D"],
             ["Remote sensing device has an inbuilt source of","X-ray","gray","Ultraviolet ray","Infrared ray","D"],
            ["A device used for converting A.C. into D.C. is","Transformer","Rectifier","induction coil","Dynamo","B"],
             ["Energy of Ultraviolet rays is great than ","Infrared rays","Gamma rays","X-rays","Cosmic rays","A"],
            ["Therm is the unit of ","power","heat","light","distance","A"],
             ["Newton’s first law of motion gives the concept of ","Energy","Work","Momentum","Inertia","D"],
             
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                ]];  
                console.log(questions)
            function one(x){
                return document.getElementById(x); 
            }
            function  renderQuestion(){
                test = one("test");  
                if(a<=5){
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
                    window.location.href = "./quiz3.html";
               }
                if(a<=5)
                {
                one("test_status").innerHTML ="" +(a+1)+" ";
                question = questions[pos][0];
                chA = questions[pos][1];
                chB = questions[pos][2];
                chC = questions[pos][3];
                chD = questions[pos][4];
                test.innerHTML ="<h3>"+question+"</h3>";
                test.innerHTML += "<label class='three'><input type='radio' name='choices' onclick='checkAnswer()' value='A'> "+chA+"</label>"+"<br><br>";
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
                    alert("wrong answer");
                  window.location.href = "bln.html";

                
                }
                    clearTimeout(myVar);
                   /*  a=a+1;
                    pos++; */
                    //renderQuestion();
                    
            }




    window.addEventListener("load", renderQuestion, false);