
var  test, test_status, question, choice, choices, chA, chB, chC,chD, correct = 0,a=0;
var pos=Math.floor(Math.random() * 91) + 1;
 


           var questions = [
            ["The early Vedic period was noted for","Urban development","Building of great temples","Agricultural civilization","Commercial activities","C"],
	
            ["Who was the author of Aithihyamala?","Sanjayan","Kottarathil Sankunni","Kunhikuttan Thampuran","Poonthanam","B"],
            
            ["The biggest epic in the world is the","Ramayana","Odyssey","Iliad","Mahabharata","D"],
            
            ["Which of the following is known to be the most ancient civilization?","Indus Valley Civilization","Vedic Civilization","Buddhist Civilization","Islamic CivilizationA"],
            
            ["Arjuna award is associated with","Literature","Film","Peace","Sports","D"],
            
            ["HTTP stands for __________","Hyper Text Transport Protocol","Hyper Text Transfer Protocol","Hyper Text Transmission Protocol","Hyper Text Transaction Protocol","B"],
            
            ["In which Computer Generation Vacuum Tubes are used?","First Generation Computer","Second Generation Computer","Third Generation Computer","Fourth Generation Computer","A"],
            
            ["“Saffron’ is obtained from which among the following parts of the plant?","Stigma","Anther","Stamen","Pollen","A"],
            
            
            ["Which protocol is used on the internet to transfer file?","FTP","HTTP","TFTP","TCP/IP","A"],
            
            ["Which is not an Input Device?","BIO Metric Device","Touch Pad","Speaker","Mouse","C"],
            
            
            
            ["FTP stands for __________","File Transmission Protocol","File Transfer Permissions","File Transfer Protocol","File Transaction Process","C"],
            
            ["Where is RAM located ?","Expansion Board","External Drive","Mother Board","All of above","C"],
            
             ["If a computer has more than one processor then it is known as ?","Uniprocess","Multiprocessor","Multithreaded","Multiprogramming","B"],
            
             ["What was the name of first computer designed by Charlse Babbage?","Analytical Engine","Difference Engine","Colossus","ENIAC","B"],
            
            ["EDVAC stands for __________","Electronic Discrete Variable Automatic Calculator","Electronic Discrete Variable Automatic Computer","Electronic Data Variable Automatic Calculator","Electronic Data ","Variable Automatic Computer","B"],
            
            
             ["ChakyarKoothu is a performing art associated with which of the following states?"," Manipur","Kerala","Mizoram","Himachal Pradesh","B"],
            
             ["Kuchipudi is a dance drama of which of the following States?","Andhra Pradesh","Kerala","Karnataka","Tamil Nadu","A"],
            
             
            
             ["Which of the following are components of Central Processing Unit (CPU) ?","Arithmetic logic unit, Mouse","Arithmetic logic unit, Control unit","Arithmetic logic unit", "Integrated Circuits","Control Unit, Monitor","B"],
            
            ["Which among following first generation of computers had ?","Vaccum Tubes and Magnetic Drum","Integrated Circuits","Magnetic Tape and Transistors","All of above","A"],
            
            ["Koodiyattam is a","traditional dance of Kerala","special food prepared in Tamilnadu","boat race of Kerala","dress worn in Karnataka","A"],
            
            ["Which of the following geographical term related with the piece of sub-continental land that is surrounded by water","Peninsula","Gulf","Strait","Island","D"],
            
           
            
            ["The MohiniAttam dance form was developed in :"," Andhra Pradesh","Karnataka","Kerala","Tamil Nadu","C"],
            
            ["Which is a wind instrument?","Sitar","Shehnai","Pakhawaj","Mridangam","B"],
            
            
            ["Yakshagana is a dance form of –","Andhra Pradesh","Karnataka","Tamil Nadu","Maharashtra","B"],
            
            
            ["Which of the following National Park is not in Kerala?","Silent Valley National Park","Eravikulam National Park","Pambadum Shola National Park",
            "Madhav National Park","D"],
            
            ["Which of the following dance is not a major one in Kerala?","Kathakali","Mohiniattam","Thullal","Yakshagana","D"],
            
             ["Who was the First Chief Minister of Kerala?","C AchuthaMenon","K Karunakaran","Pattom A. ThanuPillai","EMS Namboodiripad","D"],
            
             ["Name the martial art which is regarded as the mother of all martial arts in the world?","Silambam","VarmaKalai","Kalaripayattu","Malyutham","C"],
            
             ["What is the shortest highway in the Indian Highway Network?","NH 22A","NH 47A","NH 13B","NH 11J","B"],
            
             ["World’s Only Teak Museum is in _________","Manjeri","Trivandrum","Nilambur","Kozhikode","C"],
            
            ["The Nehru Trophy Boat Race is a held in _________ Lake","Punnamada","Vembanad","Ashtamudi","Kayamakulam","A"],
            
             ["Vaikom Muhammad Basheer is fondly remembered as the","Palakkad Sultan","Malapuram Sultan","Beypore Sultan","Wayanadu Sultan","C"]
            
            
            ["Ram was the son of Dhasharatha and","Kausalya","Kunti","Sumitra","Kaikeyi","A"],
            
            ["During which festival does Santa come to visit?","Christmas","onam","diwali","easter","A"],
            
            ["who is the current president of india","prathibapatel","Ram nathkovind","Pranb Mukherjee","KummanamRajashekaran","B"],
            
            ["Kerala is ________ largest state by population.","Tenth","Eleventh","Thirteenth","Seventeenth","C"],
            
            ["The dynasty of _______ was the first prominent kingdom based on Kerala.","Chola","Pandya","Mughal","Chera","D"],
            
             ["The highest populated district of Kerala is _______.","Malappuram","Kozhikode","Wayanadu","Kannur","A"],
            
             ["The largest district in Kerala is _______.","Palakkad","Malappuram","Wayanadu","Alappuzha","Palakkad","D"],
            
            
            ["Which one of the following is a Main Character in the Novel Chemmeen by Thakazhi:","Narayani","Karuthamma","Hakkeem","Sumangala","B"],
            
            ["Majeed and Suhara are characters in:","Prema lekhanam","Odayil Ninnu","Ummaachu","Baalyakaala sakhi","D"],
            
            ["Which one of the novels written by MT Vasudevan Nair has a character named 'Appunni'?","Randamoozham","Kaalam","Naalukettu","Asuravithu","C"],
            
            ["Which one of the following novels depicts jail life before Indian independence?","Adhikaram","Delhi","Aarachaar","Mathilukal","D"],
            
            ["Who among the following is famous for his travelogues?","P Kesavadev","M T vasudevan Nair","S K Pottekkattu","Kakkanadan","C"],
            
            ["Vaikkom Mohammed Basheer was born at:","Beypore","Thalayolapparambu","Sultan Battery","Thalasseri","B"],
            
            ["The pen name of P KesavaPillai is","P KesavaDev","Uroob","Kovilan","Parapurath","A"],
            ["Kamala Surayya is daughter of:","SugathaKumari","Madhavikkutti","Balamaniyamma","R Leela Devi","C"],
            
            ["The Jataka stories are related to the previous lives of whom","Krishna","Mahabir","Budha","Guru Nanak ","C"],
            
            ["Who among the following wrote the Kural, which deals with many aspects of life and religion?","Thiruvalluvar","Ayaikar","Shankracharya","Rishi Agasta","A"],
            ["Who is the William Shakespeare?","Singer","Dramatist","Dancer","Artist","B"],
            
            [" Which of the following was most probably the first metal to be used in India? ","Iron","Copper","Gold","Silver","B"],
            
            
            ["The early Vedic period was noted for","Urban development","Building of great temples","Agricultural civilization","Commercial activities","C"],
            
            ["Who was the author of Aithihyamala?","Sanjayan","Kottarathil Sankunni","Kunhikuttan Thampuran","Poonthanam","B"],
            
            ["The biggest epic in the world is the","Ramayana","Odyssey","Iliad","Mahabharata","D"],
            
            ["Which of the following is known to be the most ancient civilization?","Indus Valley Civilization","Vedic Civilization","Buddhist Civilization","Islamic Civilization","A"],
            
            ["Arjuna award is associated with","Literature","Film","Peace","Sports","D"],
            
            ["Sugar in the urine is a symptom of","diabetes","cholera","high pressure","typhoid","A"],
            
            ["To which of the following does petroleum belong","Nitrate","Oxide","Fat","Hydrocarbon","D"],
            
            ["Which branch of science was sir C.V.Raman awarded for with the Nobel Prize?","Chemistry","Physics","Biology","Botany","B"],
            
            ["Lions are protected at the -----sanctuary","Gir","Corbett National park","Vedanthangal","Wynad Wild Life","A"],
            
            ["The longest river in India is the","Mahanadi","Godavari","Ganga","Brahmaputra","C"],
            
            ["Which of the following is not a part of an atom?","lon","Electron","proton","Neutron","A"],
            
            ["Taj Mahal is on the banks of river","Yamuna","Indus","Ganga","Brahmaputra","A"],
            
            ["Wisdom teeth normally appear in the age group of ","1-6 years","8-12 years","17-30 years","35-60 years","C"],
            
            ["A wonderful and inspiring example for “Gurubhakti” mentioned in Mahabharata was -----","Arjuna","Karna","Ekalavya","Yudhishtira","C"],
            
            ["Which one is a communicable disease?","Asthma","Cancer","Smallpox","Arthritis","C"],
            
            ["The holiest lake in the word","Caspian sea","Manasarovar","Dal Lake","Amritsar","B"],
            
            ["An instrument which does the functions of human brain is ","Radar","Radio","Computer","chronometer","C"],
            
            ["The biggest Public Sector Bank in India is the","Reserve Bank of India","State Bank of India","Syndicate Bank","None of these","B"],
            
            
            
            ["Which Bank serves as the banker’s Bank in India?","Reserve Bank of India","State Bank of India","Central Bank of India","Bank of India","A"],
            
            ["Which is the stranger among the following","Earth","Moon","Mars","Venus","B"],
            
            ["The gas used in fire extinguishers is","Carbon monoxide","Carbon dioxide","sulphur dioxide","Chlorine","B"],
            
            ["Which of the following is a non-vertebrate?","Snake","Fish","Cockroach","Frog","C"],
            
        
            
            ["The India who attended the parliament of religions at Chicago in 1893","Raja Ram Mohan Roy","Dayananda Saraswathi","Vivekananda","Gandhiji","C"],
            
            ["Animals that creep are called:","Insects","Reptiles","Fish","Ant","B"],
            ["The first living being launched into space was a ","Man","Bird","Monkey","Dog","D"],
            ["The spherical shape of a raindrop is due to","Density of the liquid","Surface tension","Atmospheric pressure","Gravity","B"],
            
            ["Which of the following creatures does not have ears?","Snake","Fish","Owl","Frog","A"],
            
            ["The sun’s heat and light energy reaches earth by:","Conduction","Radiation","Refraction","Convection","B"],
            
            ["What is meant by dialysis?","Giving additional blood","Removing impure blood and providing fresh blood","Washing kidneys to remove impurities","Giving artificial respiration","B"],
            
            ["Diabetes is caused due to the deficiency of ———","Calcium","Vitamin B","Vitamin C","Insulin","D"],
            
            ["The most abundant substance on Earth is","soil","carbon","water","metals","C"],
            
            ["The person who is said to be the “Iron man” of India is:","Subhash Chandra Bose","Bhagat Singh","V.K. Krishna Menon","Sardar Vallabhbhai Patel","D"],
            
            ["Which of the following fish varieties is not generally used for food?","Gold fish","Shark","Cutla","Gourami","A"],
            
            ["The rotation of the earth about its axis causes","Change in seasons","Day and night","Rainfall","Earthquake","B"],
            
            ["Which of the following is a mammal?","Crocodile","Tortoise","Bat","Snake","C"],
            
            ["The Pyramids are found on the banks of the river ————","Congo","Nile","Niger","Zambezi","B"],
            
            ["The world’s first artificial satellite:","Luna - 3","Sputnik","Aryabhatta","Explorer - I","B"],
            
            ["In which district is the Malampuzha garden?","Idukki","Malappuram","Palakkad","Thrissur","C"],
            
            ["The metal in the liquid state is:","Zinc","Mercury","Iron","Silver","B"],
            
            ["The device used to convert sound waves into electric waves","Micro phone","Loud speaker","Motor","Amplifier","A"],
            
            ];  
         
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
                    window.location.href = "quiz2.html";
               }
                if(a<=5)
                {
                one("test_status").innerHTML = " "+(a+1)+" ";
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
                    window.location.href = '/bln.html';

                
                }
                    clearTimeout(myVar);
                   /*  a=a+1;
                    pos++; */
                    //renderQuestion();
                    
            }




    window.addEventListener("load", renderQuestion, false);