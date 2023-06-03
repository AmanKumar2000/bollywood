import React, {
  useState
} from 'react';
import Bw from './bw';
import Word from './word';
import Button from './btn';




const movieArray = ["A Wednesday", "Aa Ab Laut Chalen", "Aa Gale Lag Jaa", "Aabra Ka Daabra", "Aadat Se Majboor", "Aag Ka Gola", "Aakhree Raasta", "Aakhri Cheekh", "Aamdani Atthanni Kharcha Rupaiya", "Aamir  ", "Aamne Samne", "Aan – Men At Work", "Aandhi", "Aankhen", "Aankhen", "Aap Aye Bahaar Ayee", "Aap Kaa Surroor", "Aap Ki Kasam", "Aap Ki Khatir", "Aap Ki Parchhaiyan", "Aap Mujhe Achche Lagane Lage", "Aapko Pehle Bhi Kahin Dekha Hai", "Aashiq", "Aashiq Banaya Aapne", "Aashiqui", "Aasman Se Ooncha", "Aastha", "Aatish", "Ab Bas", "Ab Ke Baras", "Ab Tak Chhappan", "Abhimaan", "Achanak", "Adharm", "Aetbaar", "Aggar", "Ahista Ahista", "Aitraaz", "Ajay", "Ajnabee", "Ajnabee", "Ajooba", "Akele Hum Akele Tum", "Akhiyon Se Goli Maare", "Aksar", "Alag", "Allah Rakha", "Amaanat", "Amar Akbar Anthony", "Amar Akbar Anthony", "Amar Prem", "Amiri Garibi", "Amu", "An Evening In Paris", "Anamika", "Anamika", "Anand", "Anari", "Anari No. 1", "Andaaz  ", "Andar Baahar", "Andaz Apna Apna", "Andhaa Kaanoon", "Andolan", "Angoor", "Angrakshak", "Anjaam", "Anjaam Khuda Jaane", "Ankahee", "Ankhon Mein Tum Ho", "Ankur", "Anthony Kaun Hai?", "Anubhav", "Anupama", "Anuradha", "Anuranan", "Anwar  ", "Apaharan", "Apna Asmaan", "Apna Sapna Money Money", "Apne  ", "Apradhi", "Aradhana", "Ardh Satya", "Aryan  ", "Asambhav", "Ashaant", "Asoka", "Aunty No.1  ", "Avtaar", "Awaargi", "Awara Paagal Deewana", "Awarapan  ", "Awwal Number", "B", "Baabul", "Baadshah ", "Baaghi", "Baaghi", "Baap Numberi Beta Dus Numberi", "Baarish", "Baazi", "Baazigar", "Bachke Rehna Re Baba", "Badal", "Badhaai Ho Badhaai", "Baghban", "Bal Ganesh", "Bal Hanuman ", "Banaras", "Bandit Queen", "Bardaasht", "Barood", "Barsaat", "Barsaat  ", "Bas Ek Pal", "Being Cyrus", "Bekaraar", "Bekhudi", "Benaam Badshah", "Bend It Like Beckham", "Beta  ", "Betaab", "Bewafa", "Bewafaa  ", "Bhagam Bhag", "Bheja Fry", "Bhoonath", "Bhoot Bungla", "Bhoot  ", "Bhoot Uncle", "Bhram", "Bhumika – The Role", "Bichhoo", "Big Brother", "Biwi No.1", "Black Friday", "Black  ", "Blackmail  ", "Blue Umbrella", "Bluffmaster", "Bobby ", "Bold  ", "Bollywood Hollywood", "Bombai Ka Babu", "Bombay  ", "Bombay To Bangkok", "Bombay To Goa", "Boom  ", "Boot Polish", "Border  ", "Buddha Mil Gaya", "Bullet", "Bullet  ", "C", "C Kkompany", "Calcutta Mail", "Cash  ", "Chaahat", "Chaand Ka Tukdaa", "Chain Kulli Ki Main Kulii", "Chal Mere Bhai", "Chalo Ishq Ladaaye", "Chalte Chalte", "Chamatkar", "Chameli", "Chameli Ki Shaadi", "Chamku", "Chandni Bar", "Chandni Ki Kahani  ", "Chandramukhi  ", "Chashme Buddoor", "Chehraa", "Chhodon Naa Yaar", "Chhoti Si Baat", "Chicken Tikka Masala", "China Gate", "Chingaari", "Chitchor", "Chocolate  ", "Chokher Bali", "Chor Aur Chaand", "Chor Machaye Shor", "Chori Chori", "Chori Chori Chupke Chupke", "Chota Jadugar", "Chumban  ", "Chup Chup Ke", "Chupke Chupke", "Commando  ", "Company", "Contract  ", "Coolie", "Coolie No.1  ", "Corporate  ", "D", "Daava", "Dak Bangla", "Damini", "Dancer  ", "Dariya Dil", "Darling", "Darna Mana Hai", "Darwaza Bandh Rakho", "Dashavatar", "Daud  ", "De Taali", "Deadline Sirf 24 Ghante", "Deedar", "Deewaanapan", "Deewaar", "Deewana", "Deewana Mastana", "Deewane Huye Paagal", "Deewangee", "Delhi Heights", "Dev  ", "Devdas", "Dhaai Akshar Prem Ke", "Dhadkan  ", "Dhamaal", "Dhan Dhana Dhan Goal", "Dhara", "Dharm", "Dharma", "Dharmatma", "Dharti", "Dharti Kahe Pukar Ke", "Dhokha", "Dhol", "Dhoom Dadakka", "Dil 1990", "Dil Aashna Hai", "Dil Chahta Hai  ", "Dil Diya Hai", "Dil Dosti Etc", "Dil Hai Ki Manta Nahin", "Dil Hai Tumhara", "Dil  ", "Dil Ka Rishta", "Dil Ki Baazi", "Dil Maange More", "Dil Ne Jise Apna Kahaa", "Dil Ne Phir Yaad Kiya", "Dil Se", "Dil Tera Aashiq", "Diljale", "Dilwale –  ", "Dilwale Kabhi Na Hare", "Disco Dancer", "Diwana", "Do Aur Do Paanch", "Do Badan", "Do Dilon Ki Dastaan", "Do Ladke Dono Kadke", "Do Matwale", "Do Qaidi", "Do Raaste", "Dobara", "Doli Saja Ke Rakhna", "Don", "Don  ", "Don Muthu Swami", "Doodh Ka Karz", "Dor  ", "Dostana", "Dosti", "Double Cross – Ek Dhoka", "Dream Girl", "Dulha Dulhan", "Dulhan Hum Le Jayenge", "Dulhe Raja", "Dum  ", "Duplicate", "Dus  ", "Dus Kahaniyaan", "Dushman", "Dushmani – A Violent Love Story", "E", "Eight Surrender To The Power Of Shani", "Eik Dasttak", "Ek Ajnabee", "Ek Aur Ek Gyarah", "Ek Chalis Ki Last Local", "Ek Chhotisi Love Story", "Ek Chitthi Pyar Bhari", "Ek Hasina Thi", "Ek Ladka Ek Ladki", "Ek Pal Pyar Ka", "Ek Rishtaa – The Bond Of Love", "Ek Ruka Hua Faisla", "Ek Se Mera Kya Hoga", "Elaan", "Elaan", "English Babu Desi Mem", "F", "Fear  ", "Fida", "Fight Club", "Fire  ", "Fiza", "Flavors  ", "Fm – Fun Aur Masti", "Fool N Final", "Footpath  ", "Freaky Chakra", "Fun2shh", "Gadar", "Gaddar", "Game", "Gandhi – Independence Day Special", "Gandhi My Father", "Gangaajal", "Gangster  ", "Garam Masala", "Gardish", "Garv", "Gauri – The Unborn", "Gayab", "Geet Gaata Cha", "Geetaa Mera Naam", "Gehri Chaal", "Gharwali Baharwali", "Ghatak", "Ghatothkach  ", "Ghayal", "Ghazab", "Ghulam", "Ghulam E Mustafa", "Ghulami", "Ghutan  ", "Girlfriend  ", "Go", "God Tussi Great Ho", "Golmaal", "Golmaal", "Good Boy Bad Boy", "Good Luck", "Gopaal Krishna  ", "Gopi", "Gopi Kishan", "Guddi  ", "Gumnaam", "Gumrah", "Gunaah", "Gunda", "Gunga Jumna", "Gupt", "Guru", "Guru  ", "Guru Suleman Chela Pahelwan", "Haal-e-dil", "Haan Maine Bhi Pyaar Kiya", "Haasil  ", "Haathi Mere Saathi", "Haatim Tai", "Hadh Kardi Aapne", "Half Ticket", "Halla Bol", "Hamara Dil Aapke Paas Hai", "Hanste Khelte", "Hanuman Animated  ", "Hanuman Returns", "Har Dil Jo Pyar Karega", "Hastey Hastey", "Hat Trick", "Hatya Kaand", "Hawa", "Hawalaat", "Hawas", "Hazaaron Khwaishein Aisi", "Hello Brother  ", "Hera Pheri  ", "Hero", "Hero Hindustani", "Hero Hiralal", "Hero No. 1", "Hey Ram  ", "Hijack  ", "Himmat", "Hogi Pyar Ki Jeet", "Honeymoon Travels Pvt Ltd  ", "Hosh  ", "Hot Money  ", "Hum Aapke Dil Mein Rehte Hain", "Hum Aapke Hain Kaun  ", "Hum Dil De Chuke Sanam", "Hum Dono", "Hum Dum", "Hum Hain Kamaal Ke", "Hum Hain Rahi Pyar Ke", "Hum  ", "Hum Kaun Hain", "Hum Kisise Kum Nahin", "Hum Kisise Kum Nahin 2002", "Hum Saath Saath Hain", "Hum Se Hai Zamana", "Hum Tumhare Hain Sanam", "Humko Deewana Kar Gaye", "Humko Tumse Pyaar Hai", "Humraaz  ", "Humrahi", "Hungama  ", "Hyderabad Nawabs  ", "Hyderabadi Bakra", "Ijaazat", "Ilaaka", "Imaandar", "Indian  ", "Inteha", "Iqbal  ", "Iqraar By Chance", "Ishq", "Ishq Hai Tumse", "Ishq Vishq", "It’s Breaking News", "Jaadugar", "Jaan", "Jaan E Mann", "Jaanam Samjha Karo", "Jaanbaaz", "Jaane Bhi Do Yaaro", "Jaane Hoga Kya", "Jaane Tu Ya Jaane Na", "Jaani Dost", "Jab Pyar Kisise Hota Hai", "Jab We Met", "Jahan Jaayega Hamen Paayega", "Jai Mata Vaibhav Lakshmi", "Jajantaram Mamantaram", "Jallad", "Jalwa", "Janani  ", "Janasheen", "Jannat  ", "Jawani Diwani", "Jeena Marna Tere Sang", "Jeet", "Jeeva", "Jeevan Ek Sanghursh", "Jeevan Mrityu", "Jewel Thief", "Jhankaar Beats", "Jhooth Bole Kauwa Kaate", "Jigar", "Jimmy", "Jis Desh Mein Ganga Rehta Hain", "Jism", "Jo Bole So Nihaal", "Jo Jeeta Wohi Sikandar", "Jodhaa Akbar", "Johnny Gaddaar", "Johny Mera Naam", "Joru Ka Ghulam", "Josh", "Judaai", "Judaai  ", "Judwaa", "Julie", "Julie", "Junoon", "Jurm", "Jurm  ", "Just Married  ", "Kaafila", "Kaal  ", "Kaalia", "Kaante", "Kabhi Alvida Na Kehna  ", "Kabhi Haan Kabhi Naa", "Kabhi Kranti Kabhi Jung", "Kabhi Kushi Kabhi Gham", "Kabrastan", "Kachche Dhaage", "Kahan Hai Kanoon", "Kahani Gudiyaan Ki", "Kahin Pyaar Na Ho Jaaye", "Kaho Naa Pyar Hai", "Kaisay Kahein", "Kal Ho Naa Ho  ", "Kala Bazaar", "Kalapani", "Kalyug", "Kama Sutra  ", "Karam", "Karan Arjun", "Kareeb", "Kartoos", "Karz", "Kasauti", "Kash… Aap Hamare Hote", "Kasme Vaade", "Kasoor", "Katha", "Katilon Ke Kaatil", "Kaun  ", "Keemat", "Kehtaa Hai Dil Baar Baar", "Khakee", "Khal Nayak", "Khandala House", "Khatron Ke Khiladi", "Khauff", "Khel  ", "Khel Khel Mein", "Khiladi", "Khiladi 420", "Khilona", "Khoobsurat", "Khoon Ka Karz", "Khosla Ka Ghosla", "Khoya Khoya Chand", "Khubsoorat", "Khuda Gawah", "Khuda Kay Liye (paki", "Khushboo", "Khushboo", "Khushi  ", "King Uncle  ", "Kishen Kanhaiya", "Kismat Konnection", "Knock Knock, I’m Looking To Marry", "Kohram", "Koi Aap Sa", "Koi Mere Dil Mein Hai", "Koi Mil Gaya", "Kora Kagaz", "Koshish", "Koyla", "Krantiveer", "Krazzy 4  ", "Krodh", "Krrish  ", "Kuch Khatti Kuch Meethi", "Kuch Kuch Hotha Hai", "Kuch Meetha Ho Jaye", "Kuch Naa Kaho", "Kuch Tum Kaho Kuch Hum Kahein", "Kudiyon Ka Hai Zamaana", "Kurbaan", "Kya Kehna!", "Kya Love Story Hai", "Kya Yehi Pyaar Hai", "Kyaa Kool Hai Hum", "Kyo Kii… Main Jhuth Nahin Bolta", "Kyon Ki  ", "Kyun! Ho Gaya Na", "Laadla", "Laawaris", "Lagaan  ", "Laila Majnu", "Lajja  ", "Lakeer", "Lakshmanrekha  ", "Lakshya", "Lekin", "Life In Metro  ", "Life Mein Kabhi Kabhie", "Loha  ", "Lootere", "Lou – Ek Ehsaas", "Love Ke Liye Kuch Bhi Karega", "Love Love Love", "Love Story 2050", "Lovers", "Lovesongs – Yesterday, Today And Tomorrow", "Lucky – No Time For Love", "Maa Tujhhe Salaam", "Maachis", "Maan Gaye Mughal-e-azam", "Madhoshi", "Madhumati", "Mahaan", "Mahaanta", "Mahakaal", "Maharaja  ", "Main Awara Hoon", "Main Azaad Hoon", "Main Ek Din Laut Kay Aaoon Ga", "Main Hoon Na", "Main Intequam Loonga", "Main Khiladi Tu Anari", "Main Meri Patni Aur Woh", "Main Prem Ki Diwani Hoon", "Main Tere Ishq Mein", "Maine Dil Tujhko Diya", "Maine Pyaar Kyun Kiya", "Maine Pyar Kiya", "Majhdhaar", "Major Saab", "Malamaal Weekly", "Mandi  ", "Mangal Pandey  ", "Mann  ", "Mannat", "Manorama Six Feet Under", "Manzil", "Maqbool", "Mard  ", "Mardon Wali Baat", "Marigold", "Masoom", "Mast", "Mastaani", "Masti  ", "Matrubhoomi: A Nation Without Women 2003", "Maya Memsaab", "Meenaxi : Tale Of 3 Cities  ", "Mehbooba", "Mela", "Men Not Allowed  ", "Mera Gaon Mera Desh", "Mera Naam Joker", "Mera Saaya", "Mere Apne", "Mere Baap Pahle Aap", "Mere Jeevan Saathi", "Meri Biwi Ka Jawab Nahin", "Milan", "Mili", "Miss Anara", "Mission Istaanbul", "Mission Kashmir", "Mission Mumbai", "Mistress Of Spices", "Mithya", "Mitr, My Friend", "Mitr, My Friend  ", "Mixed Doubles", "Mohabbat", "Mohra  ", "Monsoon Wedding", "Morning Raga", "Mother India", "Mera Pehla Pehla Pyar", "Mr India", "Mr Ya Miss", "Mr. & Mrs. Khiladi", "Mr. Bechara", "Mrityudaata", "Mughal-e-azam", "Mujhe Kuch Kehna Hai", "Mujhse Shaadi Karogi", "Mukhbiir", "Mumbai Meri Jaan", "Mumbai Salsa", "Mumbai Se Aaya Mera Dost", "Munna Bhai Mbbs  ", "Muqabla", "Muqaddar Ka Sikandar", "Murder  ", "Musafir  ", "My Friend Ganesha", "My Friend Ganesha 2", "My Name Is Anthony Gonsalves", "My Wife’s Murder", "Na Tum Jaano Na Hum", "Naach  ", "Naam", "Naam O Nishan", "Nadiya Ke Paar", "Nagina", "Naksha", "Namak", "Namak Halaal", "Namak Haraam", "Namesake", "Naqaab  ", "Naram Garam", "Narasimha", "Naseeb", "Nauker", "Naya Daur", "Naya Daur", "Nayak : The Real Hero", "Nehle Pe Dehla", "Nishant", "Om – The Ultimate Power Of Love", "Om Jai Jagadish", "Om Shanti Om", "Omkara", "One 2 Ka 4", "One Two Three  ", "Paap  ", "Padosan", "Page 3  ", "Paheli", "Pakeezah", "Palletoori Bava", "Panga Naa Lo", "Pardes  ", "Pardesi Babu", "Parinda", "Parineeta", "Partition  ", "Parveen Bobby", "Parzania", "Pasand Apni Apni", "Pati Patni Aur Woh", "Patthar Ke Phool", "Phir Bhi Dil Hai Hindustani", "Phir Hera Pheri  ", "Phir Milenge", "Phir Tauba Tauba", "Phir Wahi Raat", "Phool Aur Kaante", "Phool Aur Patthar", "Phoonk", "Pinjar", "Pitaah", "Plan  ", "Pocketmaar", "Police Force – An Inside Story", "Pranali", "Pratigya", "Prem Kahani", "Prem Rog", "Professor", "Pukar", "Purab Aur Pachhim", "Purana Mandir", "Purani Haveli", "Pyaar Diwana Hota Hai", "Pyaar Ishq Aur Mohabbat", "Pyaar Kiya To Darna Kya", "Pyaar Koi Khel Nahin", "Pyaar To Hona Hi Tha", "Pyaasa", "Pyar Ka Mandir", "Pyar Kiya Hai Pyar Karenge", "Qayamat Se Qayamat Tak", "Qurbani", "Raaj Tilak", "Raath  ", "Raaz  ", "Race", "Rain  ", "Raincoat", "Raja  ", "Raja Hindustani", "Raja Jani", "Raju Ban Gaya Gentleman", "Raju Chacha", "Rakht", "Rakhwala", "Ram Aur Shyam", "Ram Gopal Varma Ki Aag", "Ram Jaane", "Rama Rama Kya Hai Dramaaa", "Ramayan Animated  ", "Ramji Londonwale  ", "Rang De Basanti", "Rangeela  ", "Raqeeb", "Ravan Raaj – A True Story", "Red -the Dark Side", "Red Rose", "Red Swastik  ", "Refugee", "Rehguzar", "Rehna Hai Tere Dil Mein", "Reshma Aur Shera", "Rishtey", "Risk  ", "Road  ", "Road To Ladakh", "Rock On!!", "Rocky: The Rebel", "Rog  ", "Roja  ", "Romance", "Roop Ki Rani Choron Ka Raja", "Roti Kapada Aur Makaan", "Rudraksh  ", "Rules (pyar Ka Superhit F", "Saagar", "Saajan", "Saajan Chale Sasural", "Saajan Ka Ghar", "Saawariya", "Saaya", "Sabse Bada Khiladi", "Sadak", "Sadma", "Safar", "Saheb", "Sahebzaade", "Sahibaan", "Sajna Ve Sajna", "Salaam Bacche", "Samay", "Sambar Salsa", "Sangdil Sanam", "Sangharsh", "Sardari Begum", "Sarfarosh", "Sarhad Paar", "Sarkar", "Sarkar Raj", "Satte Pe Satta", "Satya  ", "Satyam Shivam Sundaram", "Saudagar", "Say Salaam India", "Seeta Aur Geeta", "Sehar", "Shaadi No 1  ", "Shaadi Se Pehle", "Shaan", "Shabd", "Shahenshah", "Shakalaka Boom Boom", "Shakti  ", "Sharaabi", "Shararat", "Shart  ", "Shatranj Ke Khilari", "Shaurya", "Sheesha", "Shikhar", "Shirdi Ke Sai Baba", "Shiva 2006  ", "Sholay", "Shool", "Shootout At Lookhandwala", "Showbiz", "Shree 420", "Silsiilay", "Singh Is Kinng", "Sir  ", "Sirf – Life Looks Greener On The Other Side", "Sirf Tum", "Smile Please  ", "Socha Na Tha", "Soldier", "Sooryavansham", "Souten -the Other Woman 2006", "Speed  ", "Star  ", "Strangers", "Style", "Sultanat", "Summer 2007", "Suno Sasurjee", "Superstar", "Sur  ", "Suryavanshi", "Swades", "Swami  ", "Swarg  ", "Swarg Narak", "Taal", "Taare Zameen Par", "Taarzan -the Wonder Car", "Tadipaar", "Tahaan", "Tahqiqaat", "Talaash – The Hunt Begins", "Tales Of The Kamasutra – Perfumed Garden", "Tamanna  ", "Tango Charlie", "Tarazu", "Tathastu", "Tawaif", "Taxi No 9211", "Teesri Aankh -the Hidden Camera", "Tehzeeb", "Tere Mere Sapne", "Tere Naam  ", "Tezaab", "The Burning Train", "The Great Gambler", "The Jungle Book 2", "The Killer  ", "The Last Lear", "The Legend Of Bhagat Singh", "The Train  ", "The Warrior", "Tirangaa", "Tom Dick And Harry", "Traffic Signal", "Tridev", "Trishul", "Tu Chor Mein Sipahi", "Tulsi  ", "Tum Bin", "Tum Haseen Main Jawaan", "Tum  ", "Tum Mere Ho", "Tum Se Achcha Kaun Hai", "Tumko Na Bhool Paayenge", "Tumsa Nahin Dekha", "Tumse Achcha Kaun Hai", "Tumse Milke – Wrong Number", "U Me Aur Hum", "Ugly Aur Pagli", "Umrao Jaan", "Utsav", "Utthaan  ", "Vaada", "Vaah! Life Ho Toh Aisi", "Vaastav – The Reality", "Vaastu Shastra  ", "Valley Of Flowers", "Vardi", "Veerana", "Via Darjeeling", "Victoria No. 203", "Victoria No. 203", "Vijay  ", "Vikram Betal – Animated", "Virasat", "Vishwatma", "Vivah  ", "Wajahh", "Wanted", "Waqt", "Watan Ke Rakhwale", "Water  ", "Welcome  ", "Woh 7 Din", "Woh  ", "Woh Kaun Thi?", "Woh Lamhe  ", "Woodstock Villa", "Xcuse MeYaadein", "Yaadon Ki Baarat", "Yaarana", "Yaariyan  ", "Yahaan ", "Yalgaar", "Yateem", "Yatra", "Yeh Dil", "Yeh Hai Jalwa", "Yeh Teraa Ghar Yeh Meraa Ghar", "Yeh Vaada Raha", "Yes Boss", "Yun Hota Toh Kya Hota", "Yuva  ", "Zakhm", "Zamaana Deewana", "Zameen", "Zameen Aasmaan", "Zanjeer", "Zeher  ", "Ziddi", "Zinda", "Zinda Dil", "Zindagi Ek Juaa", "Zindagi Rocks", "Zubeidaa", "Zulm Ki Hukumat", "Zulmi", "100 Days  ", "15 Park Avenue", "1920", "1942 A Love Story", "1947 Earth  ", "26th July At Barista", "36 China Town", "36 Chowringhee Lane", "36 Ghante"];


var rand = Math.random() * movieArray.length;

const moviename = movieArray[Math.floor(rand)].toUpperCase().trim();

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


var fromBeggining = ["A", "E", "I", "O", "U", "0", "1", "2", "3", "4", "5", "'", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "]", "[", "|", "\\", "\"", "'", ":", ";", "<", ",", ">", "?", ".", "/"]

function App() {
  const [matchList, setMatchList] = useState(fromBeggining);
  const [keyList, setKeyList] = useState(fromBeggining);
  const [over, setOver] = useState(false);
  const [remainingKey, setRemainingKey] = useState(["M", "N", "B", "V", "C", "X", "Z", "S", "D", "F", "G", "H", "J", "K", "L", "P", "Y", "T", "R", "W", "Q"]);

  function handleClick(key) {

    if (moviename.lastIndexOf(key) !== -1) {
      setMatchList(prev => {
        return [...prev, key];
      });
    }


    if (keyList.findIndex((element) => element === key) === -1)
      setKeyList(prev => {
        return [...prev, key];
      });


    if (remainingKey.findIndex((element) => element === key) !== -1)
      setRemainingKey(prev => {

        return [...prev.filter(item => {
          return item !== key
        })];
      });

  }

  const handleKeyDown = (event) => {

    const key = event.key.toUpperCase();
    handleClick(key);

  };


  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  }, []);

  var unique = keyList.filter(onlyUnique);
  var uniqueMatch = matchList.filter(onlyUnique);

  if (unique.length - uniqueMatch.length >= 9)
    setTimeout(() => {
      window.location.reload();
    }, 3000)
  return ( <
    div className = "App" >
    <
    Bw count = {
      unique.length - uniqueMatch.length
    }
    over = {
      over
    }
    /> <
    Word movie = {
      moviename
    }
    countb = {
      unique.length - uniqueMatch.length
    }
    keys = {
      keyList
    }
    finish = {
      () => {
        setOver(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000)
      }
    }
    /> <
    Button remant = {
      remainingKey
    }
    onClick = {
      (a) => {
        handleClick(a)
      }
    } > < / Button> <
    /div >
  );
}

export default App;
