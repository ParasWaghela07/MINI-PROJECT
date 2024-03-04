const desc = [
    {key:"Maharashtra",
   value:"Location: Western India. Capital: Mumbai, a global financial and cultural hub. Historical Legacy: Seat of the Maratha Empire, rich in historical significance. Geography: Diverse landscapes including coastal plains and the Western Ghats. Economy: Robust economy driven by finance, manufacturing, and IT sectors. Culture: Vibrant cultural scene, celebrated through festivals like Ganesh Chaturthi. Tourism: Iconic landmarks in Mumbai, UNESCO-listed Ajanta and Ellora Caves. Language: Marathi, though Mumbai is a melting pot of various cultures and languages. Education: Home to prestigious institutions like IIT Bombay and University of Mumbai. Research: Maharashtra houses research centers contributing to innovation in various fields"},
    {
      key: "GUJARAT",
      value: "Location: Western India. Capital: Gandhinagar; largest city: Ahmedabad. Legacy: Rich historical heritage, including the ancient Indus Valley Civilization sites. Geography: Varied, from the Rann of Kutch to fertile plains and forests. Economy: Strong industrial base in petrochemicals, pharmaceuticals, textiles, and diamond cutting. Culture: Vibrant festivals like Navratri and Uttarayan celebrated with enthusiasm. Tourism: Attractions include Dwarka, Somnath Temple, Gir National Park, and Rann of Kutch. Language: Official language is Gujarati, with widespread usage of Hindi and English. Education: Home to prestigious institutions like IIMA and NID. Development: Known for progressive development policies and rapid industrialization."
    },
    {
        key: "HARYANA",
        value: "Location: Northern India. Capital: Chandigarh (shared with Punjab). Legacy: Historical significance from ancient epics like the Mahabharata. Geography: Predominantly fertile plains. Economy: Diverse economy with agriculture, industry, and services. Culture: Rich heritage celebrated through festivals like Baisakhi. Tourism: Attractions include Kurukshetra and historical sites in Panipat. Language: Hindi and Haryanvi are widely spoken. Education: Developing educational infrastructure with institutions like Maharshi Dayanand University. Development: Rapid urbanization and industrial growth in cities like Gurugram."
        },
        {
        key: "PUNJAB",
        value: "Location: Northern India, sharing borders with Haryana, Himachal Pradesh, and Jammu and Kashmir. Capital: Chandigarh (also shared with Haryana). Legacy: Historical significance with a rich Sikh heritage. Geography: Fertile plains of the Indo-Gangetic plain. Economy: Agriculture-centric, known as the 'Granary of India,' with growing industrial sectors. Culture: Vibrant Sikh culture, celebrated through festivals like Baisakhi. Tourism: Attractions include the Golden Temple in Amritsar, Jallianwala Bagh, and Wagah Border. Language: Punjabi is the predominant language. Education: Home to educational institutions like Punjab University, Patiala. Development: Efforts towards industrialization and infrastructure growth, particularly in cities like Ludhiana and Jalandhar."
        },
        {
        key: "JAMMU AND KASHMIR",
        value: "Location: Northernmost region of India, bordered by Pakistan, and Himachal Pradesh. Capital: Srinagar (summer capital) and Jammu (winter capital). Legacy: Diverse cultural heritage with influences from Hindu, Buddhist, and Islamic traditions. Geography: Varied terrain including the Himalayas, fertile valleys, and picturesque lakes. Economy: Mainly dependent on agriculture, horticulture, and tourism. Culture: Rich tapestry of languages, art, and crafts, with festivals like Eid and Diwali celebrated. Tourism: Renowned for its natural beauty, with attractions like Dal Lake, Gulmarg, and Vaishno Devi Shrine. Language: Kashmiri, Dogri, and Urdu are widely spoken. Education: Home to institutions like the University of Jammu and the University of Kashmir. Security: Subject to heightened security measures due to its strategic location and historical tensions."
        },
        {
        key: "LADAKH",
        value: "Location: Northern Indian region bordered by Tibet and Pakistan. Capital: Leh. Geography: High-altitude desert with stunning mountain scenery. Culture: Influenced by Tibetan Buddhism. Economy: Relies on agriculture, animal husbandry, and tourism. Tourism: Known for monasteries, adventure activities, and Pangong Lake. Language: Ladakhi, Tibetan, Hindi. Education: Limited infrastructure, improving gradually. Infrastructure: Developing, especially in transportation. Environment: Rich biodiversity facing climate change challenges."
        },
        {
        key: "HIMACHAL PRADESH",
        value: "Location: Northern Indian state, nestled in the Himalayas. Capital: Shimla (Summer), Dharamshala (Winter). Geography: Mountainous terrain with lush valleys, forests, and rivers. Economy: Relies on tourism, agriculture, and hydroelectric power. Culture: Diverse, influenced by Hinduism and Tibetan Buddhism. Tourism: Famous for hill stations like Manali and Shimla, adventure activities, and religious sites like the Dalai Lama's residence in McLeod Ganj. Language: Hindi and Pahari are widely spoken. Education: Home to institutions like Himachal Pradesh University. Infrastructure: Developing, with a focus on improving connectivity. Environment: Known for its pristine environment and conservation efforts, although facing challenges from tourism and development."
        },
        {
        key: "UTTARAKHAND",
        value: "Location: Northern Indian state, bordered by Himachal Pradesh, Uttar Pradesh, Nepal, and Tibet. Capital: Dehradun. Geography: Varied terrain from the Himalayas to the Gangetic plains. Economy: Relies on tourism, agriculture, and hydroelectric power. Culture: Rich Hindu heritage with pilgrimage sites like Char Dham and Haridwar. Tourism: Famous for hill stations, trekking, and wildlife sanctuaries. Language: Hindi, Garhwali, and Kumaoni widely spoken. Education: Home to institutions like UPES. Infrastructure: Developing with a focus on connectivity and disaster management. Environment: Biodiverse region facing conservation challenges."
        },
        {
        key: "UTTAR PRADESH",
        value: "Location: Northern Indian state, sharing borders with multiple states. Capital: Lucknow. Geography: Diverse, from plains to the Himalayas. Economy: Agriculture-driven with emerging industrial sectors. Culture: Rich heritage with iconic cities like Agra and Varanasi. Tourism: Home to Taj Mahal, Varanasi's ghats, and religious centers. Language: Hindi predominantly spoken. Education: Houses prestigious universities like BHU and AMU. Infrastructure: Ongoing development for connectivity and urban facilities. Challenges: Population density and socio-economic disparities persist."
        },
        {
            key: "RAJASTHAN",
            value: "Location: Northwestern India. Capital: Jaipur. Legacy: Rich historical heritage with forts, palaces, and desert culture. Geography: Predominantly desert landscape, including the Thar Desert. Economy: Mainly agriculture, tourism, and mining. Culture: Colorful festivals like Pushkar Camel Fair and vibrant folk music and dance. Tourism: Attractions include Jaipur's Amber Fort, Udaipur's Lake Palace, and Jaisalmer's desert safaris. Language: Rajasthani, with Hindi as the official language. Education: Emerging educational hubs with institutions like IIT Jodhpur. Heritage: Home to UNESCO World Heritage Sites like Jantar Mantar and Hill Forts of Rajasthan."
          },
          {
            key: "BIHAR",
            value: "Location: Eastern Indian state, bordered by Uttar Pradesh, Jharkhand, West Bengal, and Nepal. Capital: Patna. Geography: Mostly fertile plains, crisscrossed by rivers like the Ganges. Economy: Primarily agricultural, with growing industrial and service sectors. Culture: Rich historical and cultural heritage, with sites like Bodh Gaya and Nalanda. Tourism: Attractions include religious sites, ancient ruins, and wildlife sanctuaries. Language: Hindi and Bhojpuri are widely spoken. Education: Home to historical centers of learning like Nalanda University. Infrastructure: Ongoing efforts to improve transportation and urban amenities. Challenges: Socio-economic development and governance issues remain significant challenges."
          },
          {
            key: "JHARKHAND",
            value: "Location: Eastern Indian state, bordered by Bihar, West Bengal, Odisha, Chhattisgarh, and Uttar Pradesh. Capital: Ranchi. Geography: Rich in forests and mineral resources, with hills and plateaus. Economy: Dominated by mining and industrial sectors, with agriculture also significant. Culture: Tribal heritage, reflected in festivals, dance forms, and handicrafts. Tourism: Attractions include natural wonders like waterfalls, national parks, and tribal villages. Language: Hindi is the official language, but tribal languages are also spoken. Education: Home to institutions like Indian School of Mines and National Institute of Technology, Jamshedpur. Infrastructure: Developing, with a focus on industrial growth and connectivity. Challenges: Addressing poverty, infrastructure development, and environmental conservation."
          },
          {
            key: "WEST BENGAL",
            value: "Location: Eastern Indian state, bordering Bihar, Jharkhand, Odisha, Assam, Sikkim, and Bangladesh. Capital: Kolkata. Geography: Diverse terrain with the Ganges delta, hills, and coastlines. Economy: Mixed economy with agriculture, industry, and services. Culture: Rich heritage with festivals like Durga Puja, and renowned for literature and music. Tourism: Attractions include Kolkata's historical sites, Darjeeling's tea gardens, and Sundarbans mangrove forest. Language: Bengali (Bangla) predominates. Education: Hosts prestigious institutions like Jadavpur University. Infrastructure: Developed urban facilities with ongoing improvements. Challenges: Addressing poverty and environmental concerns, particularly in the Sundarbans."
          },
          {
            key: "MEGHALAYA",
            value: "Location: Northeastern state, bordering Assam and Bangladesh. Capital: Shillong. Geography: Lush hills, abundant rainfall, earning the moniker 'Scotland of the East.' Economy: Primarily agrarian, with growing tourism and small-scale industries. Culture: Rich tribal heritage, vibrant festivals like Nongkrem Dance. Tourism: Cherrapunji's living root bridges, Mawsynram's waterfalls. Language: Khasi and English spoken. Education: Institutions like NEHU. Infrastructure: Developing, focus on connectivity. Challenges: Balancing development with environmental preservation, addressing socio-economic disparities."
          },
          {
            key: "ASSAM",
            value: "Location: Northeastern state, bordered by Bhutan, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, and West Bengal, along with Bangladesh. Capital: Dispur (Guwahati is the largest city). Geography: Lush landscapes, Brahmaputra River basin, and Kaziranga National Park. Economy: Mainly agricultural, with tea, oil, and tourism. Culture: Diverse, celebrated through festivals like Bihu. Tourism: Wildlife sanctuaries, tea gardens, river cruises on the Brahmaputra, and Kamakhya Temple. Language: Assamese is official, with tribal languages. Education: Institutions like Gauhati University and IIT Guwahati. Infrastructure: Developing, focusing on connectivity. Challenges: Managing floods, ethnic tensions, and insurgency while promoting sustainable development."
          },
          {
            key: "ARUNACHAL PRADESH",
            value: "Location: Northeastern state, bordered by Bhutan, Tibet, Myanmar, Assam, and Nagaland. Capital: Itanagar. Geography: Mountainous with dense forests and rivers. Economy: Mainly agrarian, with growing tourism and hydropower industries. Culture: Diverse tribal heritage, celebrated through festivals like Losar. Tourism: Pristine natural beauty, Buddhist monasteries, and adventure tourism. Language: Various tribal languages along with Hindi and English. Education: Limited infrastructure, efforts for improvement ongoing. Infrastructure: Developing, focus on road connectivity. Challenges: Remote accessibility, preserving indigenous cultures, and environmental conservation."
          },
          {
            key: "SIKKIM",
            value: "Location: Northeastern state, bordered by Bhutan, Tibet, and Nepal. Capital: Gangtok. Geography: Mountainous terrain with lush forests. Economy: Primarily agrarian, with growing tourism and hydropower. Culture: Blend of Nepali, Tibetan, and Sikkimese cultures, celebrated through festivals like Losar. Tourism: Scenic beauty, Buddhist monasteries, and trekking trails like Goechala. Language: Nepali is predominant, with other regional languages. Education: Limited infrastructure, emphasis on improvement. Infrastructure: Developing, focus on connectivity. Challenges: Preserving environment, managing tourism, and cultural identity."
          },
          {
            key: "NAGALAND",
            value: "Location: Northeastern state, bordered by Assam, Arunachal Pradesh, Manipur, and Myanmar. Capital: Kohima. Geography: Hilly terrain with dense forests. Economy: Mainly agrarian, with growing tourism and handicrafts. Culture: Rich tribal heritage, celebrated through festivals like Hornbill Festival. Tourism: Scenic beauty, wildlife sanctuaries, vibrant tribal culture. Language: English, Nagamese, tribal languages spoken. Education: Limited infrastructure, improvement efforts ongoing. Infrastructure: Developing, focus on connectivity. Challenges: Ensuring stability, economic growth, and preserving indigenous cultures."
          },
          {
            key: "MANIPUR",
            value: "Location: Northeastern Indian state, bordered by Nagaland, Mizoram, Assam, and Myanmar. Capital: Imphal. Geography: Diverse, with hills, valleys, and rivers. Economy: Agriculture-based, with handloom and handicraft industries growing. Culture: Rich cultural heritage, known for classical dance forms like Manipuri dance. Tourism: Attractions include Loktak Lake, Keibul Lamjao National Park, and historical sites like Kangla Fort. Language: Manipuri (Meiteilon) is the official language, with tribal languages also spoken. Education: Home to institutions like Manipur University. Infrastructure: Developing, with a focus on road connectivity and rural development. Challenges: Addressing insurgency, improving infrastructure, and economic development."
          },
          {
            key: "MIZORAM",
            value: "Location: Northeastern Indian state, bordered by Assam, Manipur, and Myanmar. Capital: Aizawl. Geography: Hilly terrain with lush forests and rivers. Economy: Predominantly agrarian, with handloom and handicraft industries. Culture: Rich Mizo heritage, celebrated through festivals like Chapchar Kut and Pawl Kut. Tourism: Known for its picturesque landscapes, traditional bamboo houses, and wildlife sanctuaries. Language: Mizo is the official language, with English also widely spoken. Education: Developing educational infrastructure with institutions like Mizoram University. Infrastructure: Focus on improving road connectivity and rural development. Challenges: Addressing economic development, preserving cultural identity, and managing ethnic diversity."
          },
          {
            key: "MADHYA PRADESH",
            value: "Location: Central Indian state, bordered by multiple states. Capital: Bhopal. Geography: Diverse, with plains, plateaus, and mountains. Economy: Mainly agrarian, with growing industries like manufacturing and mining. Culture: Rich heritage, with UNESCO sites like Khajuraho and Sanchi. Tourism: Wildlife sanctuaries, historical monuments, and pilgrimage sites. Language: Officially Hindi, with regional dialects. Education: Institutions like IIT Indore and IIM Indore. Infrastructure: Developing road and rail networks, urbanization projects. Challenges: Addressing poverty, healthcare, and environmental concerns."
          },
          {
            key: "CHATTISGARH",
            value: "Location: Central Indian state, bordered by multiple states. Capital: Raipur. Geography: Varied with plains, plateaus, and the Maikal Range. Economy: Mainly agrarian, with significant mineral resources. Culture: Rich tribal heritage, vibrant festivals like Bastar Dussehra. Tourism: Lush landscapes, wildlife sanctuaries, and ancient sites like Sirpur. Language: Chhattisgarhi and Hindi widely spoken. Education: Hosts institutions like NIT Raipur and Pt. Ravishankar Shukla University. Infrastructure: Developing road and rail networks, rural electrification. Challenges: Addressing poverty, healthcare, and promoting sustainable development."
          },
          {
            key: "ODISHA",
            value: "Location: Eastern state, bordered by multiple states and the Bay of Bengal. Capital: Bhubaneswar. Geography: Varied with coastlines, plains, and mountains. Economy: Diverse sectors including agriculture, fisheries, mining, and tourism. Culture: Rich heritage, known for Odissi dance and vibrant festivals. Tourism: Ancient temples, pristine beaches, and wildlife sanctuaries. Language: Odia is the official language. Education: Hosts institutions like IIT Bhubaneswar and NIT Rourkela. Infrastructure: Developing roads, railways, ports for connectivity. Challenges: Addressing poverty, healthcare, and natural disaster management."
          },
          {
            key: "GOA",
            value: "Location: Western Indian state, bordered by Maharashtra and the Arabian Sea. Capital: Panaji. Geography: Coastal region with sandy beaches, tropical forests, and inland hills. Economy: Relies heavily on tourism, with significant revenue from agriculture and mining. Culture: Rich blend of Portuguese and Indian influences, celebrated through festivals like Carnival and Christmas. Tourism: Famous for its beaches, nightlife, Portuguese architecture, and water sports. Language: Konkani is the official language, with English and Hindi widely spoken. Education: Home to institutions like Goa University and National Institute of Technology (NIT) Goa. Infrastructure: Well-developed road network, improving connectivity with airports and railways. Challenges: Balancing tourism development with environmental conservation, addressing drug-related issues, and diversifying the economy beyond tourism."
          },
          {
            key: "TELANGANA",
            value: "Location: Southern state, bordered by multiple states and the Bay of Bengal. Capital: Hyderabad. Geography: Predominantly plateau region with major rivers. Economy: Diverse sectors including agriculture, IT, and pharmaceuticals. Culture: Rich heritage, known for festivals like Bathukamma. Tourism: Historical sites, religious destinations, and natural attractions. Language: Telugu is the official language. Education: Hosts prestigious institutions like the University of Hyderabad. Infrastructure: Developing roads and urban facilities. Challenges: Addressing agricultural issues and managing urban growth."
          },
          {
            key: "ANDHRA PRADESH",
            value: "Location: Southern state, bordered by multiple states and the Bay of Bengal. Capital: Amaravati (proposed); Hyderabad currently serves as the de facto capital. Geography: Diverse with coastal plains, river deltas, and Eastern Ghats. Economy: Primarily agrarian, with contributions from pharmaceuticals, textiles, and IT. Culture: Rich heritage, known for classical dance like Kuchipudi and festivals like Ugadi. Tourism: Tirupati Temple, Araku Valley, and Visakhapatnam's coastal attractions. Language: Telugu is the official language. Education: Home to institutions like Andhra University and IIT Tirupati. Infrastructure: Developing roads, railways, and envisioned as a world-class capital. Challenges: Addressing agricultural issues, managing urban growth, and post-Telangana bifurcation reconstruction."
          },
          {
            key: "KARNATAKA",
            value: "Location: Southern state, bordered by multiple states. Capital: Bengaluru. Geography: Diverse with coast, hills, and plateau. Economy: Varied, with IT, agriculture, and manufacturing. Culture: Rich heritage, known for dance and music. Tourism: Mysore Palace, Hampi, Coorg, and coastal spots. Language: Kannada predominantly spoken. Education: Houses institutions like IISc and IIM Bangalore. Infrastructure: Well-connected with roads, rail, and air. Challenges: Urbanization, water management, and environmental concerns."
          },
          {
            key: "KERALA",
            value: "Location: Southwestern state, bordered by Karnataka, Tamil Nadu, and the Arabian Sea. Capital: Thiruvananthapuram. Geography: Coastal with mountains and backwaters. Economy: Varied, with tourism, remittances, and agriculture. Culture: Rich, known for Kathakali dance and vibrant festivals like Onam. Tourism: Backwaters, hill stations like Munnar, and beaches like Kovalam. Language: Malayalam spoken widely. Education: High literacy rate, with institutions like University of Kerala. Infrastructure: Well-developed, focusing on healthcare and education. Challenges: Addressing natural disasters and ensuring sustainable development."
          },
          {
            key: "TAMIL NADU",
            value: "Location: Southern state, bordered by Kerala, Karnataka, Andhra Pradesh, and the Bay of Bengal. Capital: Chennai. Geography: Diverse with plains, hills, and coast. Economy: Varied, with manufacturing, agriculture, and services. Culture: Rich heritage, known for dance, music, and temples. Tourism: Temples, hill stations, and beaches. Language: Tamil spoken widely. Education: Home to institutions like IIT Madras. Infrastructure: Well-developed transport networks. Challenges: Addressing water management and healthcare issues."
          },
          {
            key: "TRIPURA",
            value: "Location: Northeastern Indian state, bordered by Bangladesh, Assam, and Mizoram. Capital: Agartala. Geography: Mostly hilly terrain with plains in the west and river valleys. Economy: Primarily agrarian, with bamboo cultivation and tourism as emerging sectors. Culture: Rich cultural heritage, with influences from Bengali and tribal traditions, celebrated through festivals like Kharchi Puja and Garia Puja. Tourism: Attractions include ancient temples, wildlife sanctuaries like Sepahijala, and scenic spots like Unakoti. Language: Bengali and Kokborok are widely spoken. Education: Developing, with institutions like Tripura University. Infrastructure: Ongoing development of road and rail networks, with Agartala as a major transportation hub. Challenges: Addressing poverty, improving connectivity in remote areas, and managing ethnic tensions."
          }

];
  

// console.log("DESC KA SIZE=",desc.length);
const states=[
'Telangana','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chandigarh','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Jammu and Kashmir','Ladakh'
];

//delhi // andaman nicobar // 
// console.log("STATE KA SIZE=",states.length);
let p = document.getElementsByTagName('path')
let userAns;
let q;
let lives=3;
let score=0;
function load(){
    let random=Math.floor(Math.random()*states.length);
    q=states[random]
    console.log("Q ka value == ", q);
    document.getElementById('qst').innerText=q;
    states.splice(random, 1);
}
function addDesc(){
    let data;
    desc.forEach(e=>{
        if(e.key.toUpperCase()==q.toUpperCase()){
            data=e.value;
            return
        }
    })

    document.getElementById('descLoc').innerText=data;
}

// console.log(allinputs)

        document.getElementById('playAgain').addEventListener('click',function(){
            location.reload();
        })
        Array.from(p).forEach(element => {
            element.addEventListener('click',function(){
                if(lives==0){
                    return;
                }
                userAns=this.getAttribute('name');

                if(q.toUpperCase()===userAns.toUpperCase()){
                    score++;
                    document.getElementById('score').innerText='Score : '+ score;
                    this.style.fill='lightgreen';

                    addDesc();
                }
                else{
                    let h=document.getElementById('heart'+lives);
                    h.style.color='rgb(255, 204, 203)';
                    lives--;
                    this.style.fill='red';
                }

                if(lives==0){
                    document.getElementById('go').innerText="GAME OVER"
                    return;
                }


                    
        
            // console.log(q);
            // console.log(userAns);
            // console.log(this.getAttribute('name'));
            load();

            })

        });


    load();












