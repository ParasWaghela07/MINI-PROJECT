// const desc = [
//     {key:"Maharashtra",
//    value:" located in western India, is renowned for its vibrant culture, bustling cities, and historical landmarks. Mumbai, the capital, is a global financial hub and home to Bollywood. Pune is known for its educational institutions. The state is famous for Ajanta and Ellora Caves, the majestic Western Ghats, and the ancient pilgrimage site of Shirdi. Additionally, Maharashtra is celebrated for its delectable cuisine, including the iconic street food of Mumbai."},
//     {
//       key: "GUJARAT",
//       value: "situated in western India, is famed for its rich cultural heritage and vibrant traditions. The state's commercial capital, Ahmedabad, is renowned for its textile industry and historic architecture, including the UNESCO-listed city of Champaner. Gujarat is famous for the Somnath and Dwarka temples, Gir National Park (home to Asiatic lions), and the white desert of Kutch. Additionally, it's celebrated for its mouthwatering cuisine, including dhokla and fafda."
//     },
//     {
//         key: "HARYANA",
//         value: "Location: Northern India. Capital: Chandigarh (shared with Punjab). Legacy: Historical significance from ancient epics like the Mahabharata. Geography: Predominantly fertile plains. Economy: Diverse economy with agriculture, industry, and services. Culture: Rich heritage celebrated through festivals like Baisakhi. Tourism: Attractions include Kurukshetra and historical sites in Panipat. Language: Hindi and Haryanvi are widely spoken. Education: Developing educational infrastructure with institutions like Maharshi Dayanand University. Development: Rapid urbanization and industrial growth in cities like Gurugram."
//         },
//         {
//         key: "PUNJAB",
//         value: "Location: Northern India, sharing borders with Haryana, Himachal Pradesh, and Jammu and Kashmir. Capital: Chandigarh (also shared with Haryana). Legacy: Historical significance with a rich Sikh heritage. Geography: Fertile plains of the Indo-Gangetic plain. Economy: Agriculture-centric, known as the 'Granary of India,' with growing industrial sectors. Culture: Vibrant Sikh culture, celebrated through festivals like Baisakhi. Tourism: Attractions include the Golden Temple in Amritsar, Jallianwala Bagh, and Wagah Border. Language: Punjabi is the predominant language. Education: Home to educational institutions like Punjab University, Patiala. Development: Efforts towards industrialization and infrastructure growth, particularly in cities like Ludhiana and Jalandhar."
//         },
//         {
//         key: "JAMMU AND KASHMIR",
//         value: "Location: Northernmost region of India, bordered by Pakistan, and Himachal Pradesh. Capital: Srinagar (summer capital) and Jammu (winter capital). Legacy: Diverse cultural heritage with influences from Hindu, Buddhist, and Islamic traditions. Geography: Varied terrain including the Himalayas, fertile valleys, and picturesque lakes. Economy: Mainly dependent on agriculture, horticulture, and tourism. Culture: Rich tapestry of languages, art, and crafts, with festivals like Eid and Diwali celebrated. Tourism: Renowned for its natural beauty, with attractions like Dal Lake, Gulmarg, and Vaishno Devi Shrine. Language: Kashmiri, Dogri, and Urdu are widely spoken. Education: Home to institutions like the University of Jammu and the University of Kashmir. Security: Subject to heightened security measures due to its strategic location and historical tensions."
//         },
//         {
//         key: "LADAKH",
//         value: "Location: Northern Indian region bordered by Tibet and Pakistan. Capital: Leh. Geography: High-altitude desert with stunning mountain scenery. Culture: Influenced by Tibetan Buddhism. Economy: Relies on agriculture, animal husbandry, and tourism. Tourism: Known for monasteries, adventure activities, and Pangong Lake. Language: Ladakhi, Tibetan, Hindi. Education: Limited infrastructure, improving gradually. Infrastructure: Developing, especially in transportation. Environment: Rich biodiversity facing climate change challenges."
//         },
//         {
//         key: "HIMACHAL PRADESH",
//         value: "Location: Northern Indian state, nestled in the Himalayas. Capital: Shimla (Summer), Dharamshala (Winter). Geography: Mountainous terrain with lush valleys, forests, and rivers. Economy: Relies on tourism, agriculture, and hydroelectric power. Culture: Diverse, influenced by Hinduism and Tibetan Buddhism. Tourism: Famous for hill stations like Manali and Shimla, adventure activities, and religious sites like the Dalai Lama's residence in McLeod Ganj. Language: Hindi and Pahari are widely spoken. Education: Home to institutions like Himachal Pradesh University. Infrastructure: Developing, with a focus on improving connectivity. Environment: Known for its pristine environment and conservation efforts, although facing challenges from tourism and development."
//         },
//         {
//         key: "UTTARAKHAND",
//         value: "Location: Northern Indian state, bordered by Himachal Pradesh, Uttar Pradesh, Nepal, and Tibet. Capital: Dehradun. Geography: Varied terrain from the Himalayas to the Gangetic plains. Economy: Relies on tourism, agriculture, and hydroelectric power. Culture: Rich Hindu heritage with pilgrimage sites like Char Dham and Haridwar. Tourism: Famous for hill stations, trekking, and wildlife sanctuaries. Language: Hindi, Garhwali, and Kumaoni widely spoken. Education: Home to institutions like UPES. Infrastructure: Developing with a focus on connectivity and disaster management. Environment: Biodiverse region facing conservation challenges."
//         },
//         {
//         key: "UTTAR PRADESH",
//         value: "Location: Northern Indian state, sharing borders with multiple states. Capital: Lucknow. Geography: Diverse, from plains to the Himalayas. Economy: Agriculture-driven with emerging industrial sectors. Culture: Rich heritage with iconic cities like Agra and Varanasi. Tourism: Home to Taj Mahal, Varanasi's ghats, and religious centers. Language: Hindi predominantly spoken. Education: Houses prestigious universities like BHU and AMU. Infrastructure: Ongoing development for connectivity and urban facilities. Challenges: Population density and socio-economic disparities persist."
//         },
//         {
//             key: "RAJASTHAN",
//             value: " located in northwestern India, is renowned for its majestic forts, palaces, and desert landscapes. The state's capital, Jaipur, is famous for its historic pink city and iconic Hawa Mahal. Rajasthan is home to UNESCO World Heritage Sites like the Amber Fort and Jaisalmer Fort. Additionally, it's celebrated for its vibrant culture, traditional folk music and dance, and colorful festivals such as Pushkar Camel Fair and Jaipur Literature Festival. "
//           },
//           {
//             key: "BIHAR",
//             value: "Location: Eastern Indian state, bordered by Uttar Pradesh, Jharkhand, West Bengal, and Nepal. Capital: Patna. Geography: Mostly fertile plains, crisscrossed by rivers like the Ganges. Economy: Primarily agricultural, with growing industrial and service sectors. Culture: Rich historical and cultural heritage, with sites like Bodh Gaya and Nalanda. Tourism: Attractions include religious sites, ancient ruins, and wildlife sanctuaries. Language: Hindi and Bhojpuri are widely spoken. Education: Home to historical centers of learning like Nalanda University. Infrastructure: Ongoing efforts to improve transportation and urban amenities. Challenges: Socio-economic development and governance issues remain significant challenges."
//           },
//           {
//             key: "JHARKHAND",
//             value: "Location: Eastern Indian state, bordered by Bihar, West Bengal, Odisha, Chhattisgarh, and Uttar Pradesh. Capital: Ranchi. Geography: Rich in forests and mineral resources, with hills and plateaus. Economy: Dominated by mining and industrial sectors, with agriculture also significant. Culture: Tribal heritage, reflected in festivals, dance forms, and handicrafts. Tourism: Attractions include natural wonders like waterfalls, national parks, and tribal villages. Language: Hindi is the official language, but tribal languages are also spoken. Education: Home to institutions like Indian School of Mines and National Institute of Technology, Jamshedpur. Infrastructure: Developing, with a focus on industrial growth and connectivity. Challenges: Addressing poverty, infrastructure development, and environmental conservation."
//           },
//           {
//             key: "WEST BENGAL",
//             value: "Location: Eastern Indian state, bordering Bihar, Jharkhand, Odisha, Assam, Sikkim, and Bangladesh. Capital: Kolkata. Geography: Diverse terrain with the Ganges delta, hills, and coastlines. Economy: Mixed economy with agriculture, industry, and services. Culture: Rich heritage with festivals like Durga Puja, and renowned for literature and music. Tourism: Attractions include Kolkata's historical sites, Darjeeling's tea gardens, and Sundarbans mangrove forest. Language: Bengali (Bangla) predominates. Education: Hosts prestigious institutions like Jadavpur University. Infrastructure: Developed urban facilities with ongoing improvements. Challenges: Addressing poverty and environmental concerns, particularly in the Sundarbans."
//           },
//           {
//             key: "MEGHALAYA",
//             value: "Location: Northeastern state, bordering Assam and Bangladesh. Capital: Shillong. Geography: Lush hills, abundant rainfall, earning the moniker 'Scotland of the East.' Economy: Primarily agrarian, with growing tourism and small-scale industries. Culture: Rich tribal heritage, vibrant festivals like Nongkrem Dance. Tourism: Cherrapunji's living root bridges, Mawsynram's waterfalls. Language: Khasi and English spoken. Education: Institutions like NEHU. Infrastructure: Developing, focus on connectivity. Challenges: Balancing development with environmental preservation, addressing socio-economic disparities."
//           },
//           {
//             key: "ASSAM",
//             value: "Location: Northeastern state, bordered by Bhutan, Arunachal Pradesh, Nagaland, Manipur, Mizoram, Tripura, Meghalaya, and West Bengal, along with Bangladesh. Capital: Dispur (Guwahati is the largest city). Geography: Lush landscapes, Brahmaputra River basin, and Kaziranga National Park. Economy: Mainly agricultural, with tea, oil, and tourism. Culture: Diverse, celebrated through festivals like Bihu. Tourism: Wildlife sanctuaries, tea gardens, river cruises on the Brahmaputra, and Kamakhya Temple. Language: Assamese is official, with tribal languages. Education: Institutions like Gauhati University and IIT Guwahati. Infrastructure: Developing, focusing on connectivity. Challenges: Managing floods, ethnic tensions, and insurgency while promoting sustainable development."
//           },
//           {
//             key: "ARUNACHAL PRADESH",
//             value: "Location: Northeastern state, bordered by Bhutan, Tibet, Myanmar, Assam, and Nagaland. Capital: Itanagar. Geography: Mountainous with dense forests and rivers. Economy: Mainly agrarian, with growing tourism and hydropower industries. Culture: Diverse tribal heritage, celebrated through festivals like Losar. Tourism: Pristine natural beauty, Buddhist monasteries, and adventure tourism. Language: Various tribal languages along with Hindi and English. Education: Limited infrastructure, efforts for improvement ongoing. Infrastructure: Developing, focus on road connectivity. Challenges: Remote accessibility, preserving indigenous cultures, and environmental conservation."
//           },
//           {
//             key: "SIKKIM",
//             value: "Location: Northeastern state, bordered by Bhutan, Tibet, and Nepal. Capital: Gangtok. Geography: Mountainous terrain with lush forests. Economy: Primarily agrarian, with growing tourism and hydropower. Culture: Blend of Nepali, Tibetan, and Sikkimese cultures, celebrated through festivals like Losar. Tourism: Scenic beauty, Buddhist monasteries, and trekking trails like Goechala. Language: Nepali is predominant, with other regional languages. Education: Limited infrastructure, emphasis on improvement. Infrastructure: Developing, focus on connectivity. Challenges: Preserving environment, managing tourism, and cultural identity."
//           },
//           {
//             key: "NAGALAND",
//             value: "Location: Northeastern state, bordered by Assam, Arunachal Pradesh, Manipur, and Myanmar. Capital: Kohima. Geography: Hilly terrain with dense forests. Economy: Mainly agrarian, with growing tourism and handicrafts. Culture: Rich tribal heritage, celebrated through festivals like Hornbill Festival. Tourism: Scenic beauty, wildlife sanctuaries, vibrant tribal culture. Language: English, Nagamese, tribal languages spoken. Education: Limited infrastructure, improvement efforts ongoing. Infrastructure: Developing, focus on connectivity. Challenges: Ensuring stability, economic growth, and preserving indigenous cultures."
//           },
//           {
//             key: "MANIPUR",
//             value: "Location: Northeastern Indian state, bordered by Nagaland, Mizoram, Assam, and Myanmar. Capital: Imphal. Geography: Diverse, with hills, valleys, and rivers. Economy: Agriculture-based, with handloom and handicraft industries growing. Culture: Rich cultural heritage, known for classical dance forms like Manipuri dance. Tourism: Attractions include Loktak Lake, Keibul Lamjao National Park, and historical sites like Kangla Fort. Language: Manipuri (Meiteilon) is the official language, with tribal languages also spoken. Education: Home to institutions like Manipur University. Infrastructure: Developing, with a focus on road connectivity and rural development. Challenges: Addressing insurgency, improving infrastructure, and economic development."
//           },
//           {
//             key: "MIZORAM",
//             value: "Location: Northeastern Indian state, bordered by Assam, Manipur, and Myanmar. Capital: Aizawl. Geography: Hilly terrain with lush forests and rivers. Economy: Predominantly agrarian, with handloom and handicraft industries. Culture: Rich Mizo heritage, celebrated through festivals like Chapchar Kut and Pawl Kut. Tourism: Known for its picturesque landscapes, traditional bamboo houses, and wildlife sanctuaries. Language: Mizo is the official language, with English also widely spoken. Education: Developing educational infrastructure with institutions like Mizoram University. Infrastructure: Focus on improving road connectivity and rural development. Challenges: Addressing economic development, preserving cultural identity, and managing ethnic diversity."
//           },
//           {
//             key: "MADHYA PRADESH",
//             value: "Location: Central Indian state, bordered by multiple states. Capital: Bhopal. Geography: Diverse, with plains, plateaus, and mountains. Economy: Mainly agrarian, with growing industries like manufacturing and mining. Culture: Rich heritage, with UNESCO sites like Khajuraho and Sanchi. Tourism: Wildlife sanctuaries, historical monuments, and pilgrimage sites. Language: Officially Hindi, with regional dialects. Education: Institutions like IIT Indore and IIM Indore. Infrastructure: Developing road and rail networks, urbanization projects. Challenges: Addressing poverty, healthcare, and environmental concerns."
//           },
//           {
//             key: "CHHATTISGARH",
//             value: "Location: Central Indian state, bordered by multiple states. Capital: Raipur. Geography: Varied with plains, plateaus, and the Maikal Range. Economy: Mainly agrarian, with significant mineral resources. Culture: Rich tribal heritage, vibrant festivals like Bastar Dussehra. Tourism: Lush landscapes, wildlife sanctuaries, and ancient sites like Sirpur. Language: Chhattisgarhi and Hindi widely spoken. Education: Hosts institutions like NIT Raipur and Pt. Ravishankar Shukla University. Infrastructure: Developing road and rail networks, rural electrification. Challenges: Addressing poverty, healthcare, and promoting sustainable development."
//           },
//           {
//             key: "ODISHA",
//             value: "Location: Eastern state, bordered by multiple states and the Bay of Bengal. Capital: Bhubaneswar. Geography: Varied with coastlines, plains, and mountains. Economy: Diverse sectors including agriculture, fisheries, mining, and tourism. Culture: Rich heritage, known for Odissi dance and vibrant festivals. Tourism: Ancient temples, pristine beaches, and wildlife sanctuaries. Language: Odia is the official language. Education: Hosts institutions like IIT Bhubaneswar and NIT Rourkela. Infrastructure: Developing roads, railways, ports for connectivity. Challenges: Addressing poverty, healthcare, and natural disaster management."
//           },
//           {
//             key: "GOA",
//             value: "Location: Western Indian state, bordered by Maharashtra and the Arabian Sea. Capital: Panaji. Geography: Coastal region with sandy beaches, tropical forests, and inland hills. Economy: Relies heavily on tourism, with significant revenue from agriculture and mining. Culture: Rich blend of Portuguese and Indian influences, celebrated through festivals like Carnival and Christmas. Tourism: Famous for its beaches, nightlife, Portuguese architecture, and water sports. Language: Konkani is the official language, with English and Hindi widely spoken. Education: Home to institutions like Goa University and National Institute of Technology (NIT) Goa. Infrastructure: Well-developed road network, improving connectivity with airports and railways. Challenges: Balancing tourism development with environmental conservation, addressing drug-related issues, and diversifying the economy beyond tourism."
//           },
//           {
//             key: "TELANGANA",
//             value: "Location: Southern state, bordered by multiple states and the Bay of Bengal. Capital: Hyderabad. Geography: Predominantly plateau region with major rivers. Economy: Diverse sectors including agriculture, IT, and pharmaceuticals. Culture: Rich heritage, known for festivals like Bathukamma. Tourism: Historical sites, religious destinations, and natural attractions. Language: Telugu is the official language. Education: Hosts prestigious institutions like the University of Hyderabad. Infrastructure: Developing roads and urban facilities. Challenges: Addressing agricultural issues and managing urban growth."
//           },
//           {
//             key: "ANDHRA PRADESH",
//             value: "Location: Southern state, bordered by multiple states and the Bay of Bengal. Capital: Amaravati (proposed); Hyderabad currently serves as the de facto capital. Geography: Diverse with coastal plains, river deltas, and Eastern Ghats. Economy: Primarily agrarian, with contributions from pharmaceuticals, textiles, and IT. Culture: Rich heritage, known for classical dance like Kuchipudi and festivals like Ugadi. Tourism: Tirupati Temple, Araku Valley, and Visakhapatnam's coastal attractions. Language: Telugu is the official language. Education: Home to institutions like Andhra University and IIT Tirupati. Infrastructure: Developing roads, railways, and envisioned as a world-class capital. Challenges: Addressing agricultural issues, managing urban growth, and post-Telangana bifurcation reconstruction."
//           },
//           {
//             key: "KARNATAKA",
//             value: "Location: Southern state, bordered by multiple states. Capital: Bengaluru. Geography: Diverse with coast, hills, and plateau. Economy: Varied, with IT, agriculture, and manufacturing. Culture: Rich heritage, known for dance and music. Tourism: Mysore Palace, Hampi, Coorg, and coastal spots. Language: Kannada predominantly spoken. Education: Houses institutions like IISc and IIM Bangalore. Infrastructure: Well-connected with roads, rail, and air. Challenges: Urbanization, water management, and environmental concerns."
//           },
//           {
//             key: "KERALA",
//             value: "Location: Southwestern state, bordered by Karnataka, Tamil Nadu, and the Arabian Sea. Capital: Thiruvananthapuram. Geography: Coastal with mountains and backwaters. Economy: Varied, with tourism, remittances, and agriculture. Culture: Rich, known for Kathakali dance and vibrant festivals like Onam. Tourism: Backwaters, hill stations like Munnar, and beaches like Kovalam. Language: Malayalam spoken widely. Education: High literacy rate, with institutions like University of Kerala. Infrastructure: Well-developed, focusing on healthcare and education. Challenges: Addressing natural disasters and ensuring sustainable development."
//           },
//           {
//             key: "TAMIL NADU",
//             value: "Location: Southern state, bordered by Kerala, Karnataka, Andhra Pradesh, and the Bay of Bengal. Capital: Chennai. Geography: Diverse with plains, hills, and coast. Economy: Varied, with manufacturing, agriculture, and services. Culture: Rich heritage, known for dance, music, and temples. Tourism: Temples, hill stations, and beaches. Language: Tamil spoken widely. Education: Home to institutions like IIT Madras. Infrastructure: Well-developed transport networks. Challenges: Addressing water management and healthcare issues."
//           },
//           {
//             key: "TRIPURA",
//             value: "Location: Northeastern Indian state, bordered by Bangladesh, Assam, and Mizoram. Capital: Agartala. Geography: Mostly hilly terrain with plains in the west and river valleys. Economy: Primarily agrarian, with bamboo cultivation and tourism as emerging sectors. Culture: Rich cultural heritage, with influences from Bengali and tribal traditions, celebrated through festivals like Kharchi Puja and Garia Puja. Tourism: Attractions include ancient temples, wildlife sanctuaries like Sepahijala, and scenic spots like Unakoti. Language: Bengali and Kokborok are widely spoken. Education: Developing, with institutions like Tripura University. Infrastructure: Ongoing development of road and rail networks, with Agartala as a major transportation hub. Challenges: Addressing poverty, improving connectivity in remote areas, and managing ethnic tensions."
//           }

// ];

const desc=
[
  {
    "state": "Maharashtra",
    "info": "Maharashtra, located in western India, is renowned for its vibrant culture, bustling cities, and historical landmarks. Mumbai, the capital, is a global financial hub and home to Bollywood. Pune is known for its educational institutions. The state is famous for Ajanta and Ellora Caves, the majestic Western Ghats, and the ancient pilgrimage site of Shirdi. Additionally, Maharashtra is celebrated for its delectable cuisine, including the iconic street food of Mumbai."
  },
  {
    "state": "Gujarat",
    "info": "Gujarat, situated in western India, is famed for its rich cultural heritage and vibrant traditions. The state's commercial capital, Ahmedabad, is renowned for its textile industry and historic architecture, including the UNESCO-listed city of Champaner. Gujarat is famous for the Somnath and Dwarka temples, Gir National Park (home to Asiatic lions), and the white desert of Kutch. Additionally, it's celebrated for its mouthwatering cuisine, including dhokla and fafda."
  },
  {
    "state": "Rajasthan",
    "info": "Rajasthan, located in northwestern India, is renowned for its majestic forts, palaces, and desert landscapes. The state's capital, Jaipur, is famous for its historic pink city and iconic Hawa Mahal. Rajasthan is home to UNESCO World Heritage Sites like the Amber Fort and Jaisalmer Fort. Additionally, it's celebrated for its vibrant culture, traditional folk music and dance, and colorful festivals such as Pushkar Camel Fair and Jaipur Literature Festival."
  },
  {
    "state": "Haryana",
    "info": "Haryana, situated in northern India, is known for its agricultural prosperity and rapid urbanization. The state's capital, Chandigarh, is a modern city renowned for its urban planning and architecture by Le Corbusier. Haryana is famous for its historical sites like Kurukshetra, a significant Hindu pilgrimage destination, and the Sultanpur Bird Sanctuary. Additionally, it's celebrated for its sports culture, producing many renowned athletes, and its rich cultural heritage reflected in festivals like Teej and Holi."
  },
  {
    "state": "Punjab",
    "info": "Punjab, located in northern India, is renowned for its fertile plains, vibrant culture, and rich history. The state's capital, Chandigarh, is known for its modern urban planning and architecture. Punjab is famous for its agricultural prosperity, producing a significant portion of India's food grains. Additionally, it's celebrated for its vibrant Bhangra music and dance, delicious cuisine including Punjabi cuisine, and historical sites such as the Golden Temple in Amritsar."
  },
  {
    "state": "Jammu & Kashmir",
    "info": "Jammu and Kashmir, situated in northern India, is famed for its breathtaking Himalayan landscapes, rich cultural heritage, and spiritual significance. The state's summer capital, Srinagar, is renowned for its picturesque Dal Lake and Mughal gardens. Jammu and Kashmir is famous for religious sites like the Vaishno Devi Temple and the Amarnath Cave Shrine. Additionally, it's celebrated for its vibrant handicrafts, including Pashmina shawls and Kashmiri carpets, and its delectable cuisine, notably Wazwan."
  },
  {
    "state": "Ladakh",
    "info": "Ladakh, located in northern India, is renowned for its awe-inspiring Himalayan landscapes, rugged terrain, and Tibetan Buddhist culture. The region's capital, Leh, is known for its ancient monasteries such as Thiksey and Hemis. Ladakh is famous for its high-altitude desert terrain, including the stunning Pangong Lake and Nubra Valley. Additionally, it's celebrated for its vibrant festivals like Hemis Festival and unique Ladakhi cuisine."
  },
  {
    "state": "Himachal Pradesh",
    "info": "Himachal Pradesh, nestled in the western Himalayas, is famed for its picturesque mountain landscapes, serene hill stations, and vibrant culture. The state's capital, Shimla, is renowned for its colonial architecture and Mall Road. Himachal Pradesh is famous for its lush green valleys, including Kullu and Manali, and adventure sports like trekking and skiing in places like Rohtang Pass. Additionally, it's celebrated for its rich cultural heritage, traditional festivals like Dussehra, and spiritual sites like the Hadimba Temple."
  },
  {
    "state": "Uttarakhand",
    "info": "Uttarakhand, situated in the Himalayan region of northern India, is renowned for its stunning mountain landscapes, spiritual significance, and adventure tourism. The state's capital, Dehradun, serves as a gateway to famous hill stations like Mussoorie and Nainital. Uttarakhand is famous for its holy sites like the Char Dham pilgrimage circuit and the yoga capital of the world, Rishikesh. Additionally, it's celebrated for its scenic beauty, including national parks like Jim Corbett and Valley of Flowers, and trekking destinations like Kedarnath and Badrinath."
  },
  {
    "state": "Uttar Pradesh",
    "info": "Uttar Pradesh, located in northern India, is famed for its rich historical heritage, spiritual significance, and cultural diversity. The state's capital, Lucknow, is renowned for its Nawabi culture and architectural marvels like the Bara Imambara. Uttar Pradesh is famous for religious sites like the Taj Mahal in Agra, the Kashi Vishwanath Temple in Varanasi, and the Krishna Janmabhoomi Temple in Mathura. Additionally, it's celebrated for its vibrant festivals like Diwali and Holi, and its culinary delights including Awadhi cuisine."
  },
  {
    "state": "Bihar",
    "info": "Bihar, situated in eastern India, is renowned for its ancient history, cultural heritage, and spiritual significance. The state's capital, Patna, is known for its rich archaeological sites such as Nalanda and Bodh Gaya, a UNESCO World Heritage Site where Buddha attained enlightenment. Bihar is famous for religious destinations like the Mahabodhi Temple, the birthplace of Lord Buddha, and the Vishnupad Temple in Gaya. Additionally, it's celebrated for its cultural festivals like Chhath Puja and its traditional cuisine, including Bihari specialties like litti chokha."
  },
  {
    "state": "Jharkhand",
    "info": "Jharkhand, located in eastern India, is renowned for its abundant mineral resources, dense forests, and tribal culture. The state's capital, Ranchi, is known for its scenic beauty and pleasant climate. Jharkhand is famous for its tribal heritage, celebrated through festivals like Sarhul and Sohrai. Additionally, it's celebrated for its natural attractions like Betla National Park and the majestic Hundru Falls. Jharkhand's traditional cuisine, including dishes like pitha and handia, also adds to its cultural charm."
  },
  {
    "state": "West Bengal",
    "info": "West Bengal, situated in eastern India, is renowned for its rich cultural heritage, literary legacy, and artistic traditions. The state's capital, Kolkata, is known as the 'City of Joy' and is celebrated for its colonial architecture, vibrant markets, and cultural festivals like Durga Puja. West Bengal is famous for its historical landmarks like the Victoria Memorial and Howrah Bridge, as well as its UNESCO World Heritage Site, the Sundarbans mangrove forest. Additionally, it's celebrated for its delectable cuisine, including Bengali sweets like rasgulla and sandesh."
  },
  {
    "state": "Meghalaya",
    "info": "Meghalaya, located in northeastern India, is renowned for its scenic beauty, rich tribal culture, and abundant rainfall. The state's capital, Shillong, is known as the 'Scotland of the East' for its picturesque landscapes and pleasant climate. Meghalaya is famous for its stunning natural attractions like the living root bridges of Cherrapunji and Mawlynnong, known as the cleanest village in Asia. Additionally, it's celebrated for its vibrant festivals like Nongkrem Dance Festival and its traditional cuisine, including dishes like Jadoh and Dohneiiong."
  },
  {
    "state": "Assam",
    "info": "Assam, situated in northeastern India, is renowned for its lush green landscapes, rich biodiversity, and vibrant cultural heritage. The state's capital, Dispur, is part of the larger city of Guwahati, known for its ancient temples and the mighty Brahmaputra River. Assam is famous for its tea gardens, producing some of the finest tea in the world. Additionally, it's celebrated for its diverse wildlife sanctuaries like Kaziranga National Park, home to the one-horned rhinoceros, and its traditional festivals like Bihu. The state's cuisine, including dishes like Assamese fish curry and pitha, also adds to its cultural charm."
  },
  {
    "state": "Arunachal Pradesh",
    "info": "Arunachal Pradesh, located in northeastern India, is renowned for its stunning Himalayan landscapes, rich cultural diversity, and pristine natural beauty. The state's capital, Itanagar, is known for its tranquil surroundings and the historic Ita Fort. Arunachal Pradesh is famous for its remote mountainous terrain, including peaks like Kangto and Gorichen, and its dense forests teeming with biodiversity. Additionally, it's celebrated for its vibrant tribal cultures, with festivals like Losar and Nyokum, and its traditional handicrafts such as bamboo and cane products."
  },
  {
    "state": "Sikkim",
    "info": "Sikkim, nestled in the Himalayas in northeastern India, is renowned for its breathtaking mountain landscapes, Buddhist monasteries, and rich cultural heritage. The state's capital, Gangtok, is known for its serene surroundings and the famous Rumtek Monastery. Sikkim is famous for its stunning natural beauty, including snow-capped peaks like Kanchenjunga, the third highest mountain in the world. Additionally, it's celebrated for its vibrant Tibetan Buddhist culture, with festivals like Losar and Saga Dawa, and its traditional cuisine, which includes dishes like momos and thukpa."
  },
  {
    "state": "Nagaland",
    "info": "Nagaland, situated in northeastern India, is renowned for its rich tribal heritage, vibrant festivals, and scenic beauty. The state's capital, Kohima, is known for its historic War Cemetery and the Hornbill Festival, a celebration of Naga culture. Nagaland is famous for its lush green hills, picturesque villages, and traditional handicrafts like woodcarvings and handlooms. Additionally, it's celebrated for its diverse tribal communities, each with its own unique customs and festivals."
  },
  {
    "state": "Manipur",
    "info": "Manipur, located in northeastern India, is renowned for its rich cultural heritage, stunning landscapes, and vibrant traditions. The state's capital, Imphal, is known for its historic Kangla Fort and the ancient Shree Govindajee Temple. Manipur is famous for its lush green valleys, scenic lakes like Loktak Lake with its floating islands, and the picturesque Shirui Lily. Additionally, it's celebrated for its traditional dance forms like Manipuri Ras Leela and its indigenous martial art form, Thang Ta. The state's cuisine, including dishes like Eromba and Chamthong, also adds to its cultural richness."
  },
  {
    "state": "Mizoram",
    "info": "Mizoram, nestled in northeastern India, is renowned for its scenic beauty, vibrant tribal culture, and rich biodiversity. The state's capital, Aizawl, is known for its picturesque hilltop views and the iconic Solomon's Temple. Mizoram is famous for its lush green landscapes, including Dampa Tiger Reserve and the stunning Vantawng Falls. Additionally, it's celebrated for its colorful festivals like Chapchar Kut and Mim Kut, showcasing the rich traditions of the Mizo people. The state's cuisine, including dishes like Bai and Misa Mach Poora, reflects its cultural diversity and culinary heritage."
  },
  {
    "state": "Madhya Pradesh",
    "info": "Madhya Pradesh, located in central India, is renowned for its rich historical heritage, diverse landscapes, and vibrant culture. The state's capital, Bhopal, is known for its historic landmarks like the majestic Taj-ul-Masajid and the scenic Upper Lake. Madhya Pradesh is famous for its ancient UNESCO World Heritage Sites like Khajuraho temples and Sanchi Stupa, reflecting its rich architectural and cultural heritage. Additionally, it's celebrated for its wildlife sanctuaries like Kanha and Bandhavgarh National Parks, home to the majestic Royal Bengal Tiger. The state's cuisine, including dishes like Poha and Bhutte ka Kees, also adds to its cultural charm."
  },
  {
    "state": "Chhattisgarh",
    "info": "Chhattisgarh, situated in central India, is renowned for its rich cultural heritage, lush green forests, and vibrant tribal traditions. The state's capital, Raipur, is known for its bustling markets and the historic Mahant Ghasidas Memorial Museum. Chhattisgarh is famous for its diverse landscapes, including the picturesque Chitrakoot Falls and the ancient rock paintings of Bhimbetka. Additionally, it's celebrated for its colorful festivals like Bastar Dussehra and its traditional dance forms like Raut Nacha. The state's cuisine, including dishes like Chila and Sabudana Khichdi, reflects its culinary diversity and cultural richness."
  },
  {
    "state": "Odisha",
    "info": "Odisha, located on the eastern coast of India, is renowned for its rich cultural heritage, ancient temples, and stunning beaches. The state's capital, Bhubaneswar, is known as the 'City of Temples' and is home to iconic landmarks like the Lingaraj Temple and the Udayagiri and Khandagiri Caves. Odisha is famous for its UNESCO World Heritage Sites like the Konark Sun Temple and the Jagannath Temple in Puri. Additionally, it's celebrated for its vibrant festivals like Rath Yatra and its traditional art forms like Pattachitra and Odissi dance. The state's cuisine, including dishes like Dalma and Chhena Poda, also adds to its cultural richness."
  },
  {
    "state": "Goa",
    "info": "Goa, situated on the southwestern coast of India, is renowned for its picturesque beaches, vibrant nightlife, and Portuguese colonial architecture. The state's capital, Panaji, is known for its historic churches like the Basilica of Bom Jesus and the vibrant Latin Quarter of Fontainhas. Goa is famous for its stunning beaches like Calangute, Baga, and Palolem, attracting tourists from around the world. Additionally, it's celebrated for its lively festivals like Carnaval and its traditional cuisine, including dishes like vindaloo and bebinca."
  },
  {
    "state": "Telangana",
    "info": "Telangana, located in southern India, is renowned for its rich cultural heritage, historic landmarks, and IT industry. The state's capital, Hyderabad, is known for its iconic Charminar monument and the historic Golconda Fort. Telangana is famous for its vibrant culture, with festivals like Bonalu and Bathukamma celebrated with great enthusiasm. Additionally, it's celebrated for its traditional cuisine, including dishes like Hyderabadi biryani and Mirchi ka Salan. The state's growing IT sector, centered around Hyderabad, also contributes significantly to its economic development and global recognition."
  },
  {
    "state": "Andhra Pradesh",
    "info": "Andhra Pradesh, situated in southern India, is renowned for its rich cultural heritage, historic monuments, and coastal beauty. The state's capital, Amaravati (proposed), is known for its ambitious development projects and the Amaravati Stupa. Andhra Pradesh is famous for its UNESCO World Heritage Site, the group of monuments at Hampi, and its picturesque coastal destinations like Visakhapatnam and Vizag. Additionally, it's celebrated for its vibrant festivals like Ugadi and its delectable cuisine, including dishes like Hyderabadi biryani and Pesarattu."
  },
  {
    "state": "Karnataka",
    "info": "Karnataka, situated in southern India, is renowned for its rich cultural heritage, historic landmarks, and IT industry. The state's capital, Bengaluru, is known as the 'Silicon Valley of India' and is home to iconic landmarks like the Vidhana Soudha and Lalbagh Botanical Garden. Karnataka is famous for its UNESCO World Heritage Sites like Hampi and Pattadakal, reflecting its rich architectural legacy. Additionally, it's celebrated for its vibrant festivals like Dasara and its diverse cuisine, including dishes like Bisi Bele Bath and Mysore Pak."
  },
  {
    "state": "Kerala",
    "info": "Kerala, nestled in southwestern India, is renowned for its lush green landscapes, serene backwaters, and vibrant culture. The state's capital, Thiruvananthapuram, is known for its historic landmarks like the Padmanabhaswamy Temple and the Napier Museum. Kerala is famous for its tranquil backwaters, including Alleppey and Kumarakom, and its picturesque hill stations like Munnar and Wayanad. Additionally, it's celebrated for its colorful festivals like Onam and its delectable cuisine, including dishes like appam and seafood delicacies."
  },
  {
    "state": "Tamil Nadu",
    "info": "Tamil Nadu, situated in southern India, is renowned for its rich cultural heritage, ancient temples, and classical arts. The state's capital, Chennai, is known for its vibrant music and dance scene, as well as iconic landmarks like the Marina Beach and Kapaleeshwarar Temple. Tamil Nadu is famous for its UNESCO World Heritage Sites like the Great Living Chola Temples and its pilgrimage destinations like Rameswaram and Madurai. Additionally, it's celebrated for its colorful festivals like Pongal and its delectable cuisine, including dishes like dosa, idli, and sambar."
  },
  {
    "state": "Tripura",
    "info": "Tripura, located in northeastern India, is renowned for its rich cultural heritage, lush green landscapes, and vibrant tribal traditions. The state's capital, Agartala, is known for its historic Ujjayanta Palace and the iconic Neermahal Palace. Tripura is famous for its scenic beauty, including places like Jampui Hills and Sepahijala Wildlife Sanctuary, which is home to a variety of flora and fauna. Additionally, it's celebrated for its colorful festivals like Tripuri New Year and Kharchi Puja, showcasing the rich cultural diversity of its tribal communities. The state's cuisine, including dishes like Mui Borok and Chakhwi, also adds to its cultural richness."
  }
]
console.log("size of desc==",desc.length);
  

// console.log("DESC KA SIZE=",desc.length);
const states=[
  'Telangana','Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttar Pradesh','Uttarakhand','West Bengal','Jammu and Kashmir','Ladakh','Delhi','Andaman and Nicobar'
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
    // console.log("Q ka value == ", q);
    document.getElementById('qst').innerText=q;
    states.splice(random, 1);
}
function addDesc(){
    let data;
    desc.forEach(e=>{
        if(e.state.toUpperCase()==q.toUpperCase()){
            data=e.info;
            return
        }
    })

    document.getElementById('descLoc').innerText=data;
}

        document.getElementById('playAgain').addEventListener('click',function(){
            location.reload();
        })
        Array.from(p).forEach(element => {
            element.addEventListener('click',function(){
                if(lives==0){
                    return;
                }
                userAns=this.getAttribute('name');
                console.log(this.getAttribute('name'))

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

                    if(lives==2)
                    document.getElementById('descLoc').innerText="WRONG ANSWER , DON'T WORRY YOU STILL HAVE 2 LIVES";
                    else if(lives==1)
                    document.getElementById('descLoc').innerText="WRONG ANSWER , BE CAREFUL IT'S YOUR LAST CHANCE !";
                    else
                    document.getElementById('descLoc').innerText="OOPS ! YOUR ALL LIVES ARE EXHAUSTED. \n YOU CAN TRY AGAIN !";
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












