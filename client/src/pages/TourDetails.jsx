import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// 📷 1. Polonnaruwa Images
import polonnaruwa1 from '../assets/polonnaruwa1.jpg';
import polonnaruwa2 from '../assets/polonnaruwa2.jpg';
import polonnaruwa3 from '../assets/polonnaruwa3.jpg';
import monkeyImg from '../assets/monkey.jpg';

// 📷 2. Colombo Images
import gangarama from '../assets/gangarama tample.jpg';
import seemamalakaya from '../assets/seemamalakayatemple.jpg';
import independence from '../assets/independencesquare.jpg';
import galleface from '../assets/gallegacegreen.jpg';
import pettahMarket from '../assets/pettahmarcket.jpg';
import redMosque from '../assets/jamiulalfarmosque.jpg';
import bmich from '../assets/BMICH.jpg';
import museum from '../assets/nationalmuseam.jpg';
import oldParliament from '../assets/oldparlimentbuilding.jpg';
import pettahFort from '../assets/pettahfort.jpg';

// 📷 3. Kandy Images
import peradeniya1 from '../assets/peradeniya1.jpg';
import peradeniya2 from '../assets/peradeniya2.jpg';
import peradeniya3 from '../assets/peradeniya3.jpg';
import dalada from '../assets/daladamaligaya1.jpg';
import kandyView from '../assets/kandyviewpoint.jpg';
import kandyDance from '../assets/kandyculturedancingshow.jpg';
import pinnawala from '../assets/pinnawalaelephantorphanage.jpg';
import jewelryKandy from '../assets/jewelryworkshops1.jpg';

// 📷 4. Ella Images
import ellaRock from '../assets/ellarock.jpg';
import nineArch from '../assets/ninearchbridge1.jpg';
import littleAdam from '../assets/littleadampeak1.jpg';
import ravanaFalls from '../assets/rawanafalls1.jpg';
import zipline from '../assets/flyingrawanazipline.jpg';
import teaFactory from '../assets/uvahalpewatteteafactory.jpg';

// 📷 5. Galle Images
import galleFort from '../assets/galle_fort.jpg';
import yatagala from '../assets/yatagalatemple1.jpg';
import rumassala from '../assets/rumassalamountain.jpg';
import turtleGalle from '../assets/seaturtlehatcherie.jpg';
import stiltFisherman from '../assets/stiltfisherman.jpg';
import jewelryGalle from '../assets/jwelryworkshops1.jpg';

// 📷 6. Sigiriya & Dambulla Images
import dambullaCave from '../assets/Dambullacavetemple1.jpg';
import sigiriyaRock from '../assets/Sigiriyarock1.jpg';
import pidurangala from '../assets/Pidurangalarock1.jpg';
import villageTour from '../assets/Villagetour.jpg';
import villageTour1 from '../assets/Villagetour1.jpg';
import elephantSafari from '../assets/Elephantsafari1.jpg';
import ayurvedicSpa from '../assets/Ayurvedicspa.jpg';

// 📷 7. Madu River & Bentota Images
import maduBoat from '../assets/Maduriverboat.jpg';
import turtleBentota from '../assets/SeaTurtleHatcherie1.jpg'; 
import waterSports from '../assets/Bentotawatersport.jpg';
import bawaGarden from '../assets/Jefribawagarden.jpg';
import kandeViharaya from '../assets/Kandeviharayatemple1.jpg';

// 📷 8. Yala Safari Images
import yala1 from '../assets/yala1.jpg';
import yala2 from '../assets/yala2.jpg';

// 📷 9. Sinharaja Rainforest Images
import sinharaja1 from '../assets/sinharaja1.jpg';
import sinharaja2 from '../assets/sinharaja2.jpg';
import sinharaja3 from '../assets/sinharaja3.jpg';

// 📷 10. Kanneliya Rainforest Images
import kanneliya1 from '../assets/kanneliya1.jpg';
import kanneliya2 from '../assets/kanneliya2.jpg';

// 📷 11. Udawalawe Elephant Tour Images
import udawalawe1 from '../assets/udawalawe1.jpg';
import udawalawe22 from '../assets/udawalawe2.jpg';

// 📷 12. Wilpattu National Park Images
import wilpattu1 from '../assets/wilpattu1.jpg';
import wilpattu2 from '../assets/wilpattu2.jpg';

// 📷 13. New Kithulgala Adventure Images
import kithulgala1 from '../assets/kithulgala1.jpg';
import kithulgala2 from '../assets/kithulgala2.jpg';

// 📷 Default Fallback Images (Anuradhapura)
import bodiyaImg from '../assets/bodiya1.jpg';
import ruwanweliseyaImg from '../assets/ruwanweliseya.jpg';
import abayagiriyaImg from '../assets/abayagiriya.jpg';
import jethawanaramayaImg from '../assets/jethawanaramaya.jpg';
import thuparamayaImg from '../assets/thuparamaya.jpg';
import mirisawetiyaImg from '../assets/mirisawetiya.jpg';
import mihinthaleImg from '../assets/mihinthale.jpg';

const tourDataExtended = {
  "anuradhapura": {
    title: "Anuradhapura Ancient Kingdom Heritage",
    category: "UNESCO World Heritage Site",
    duration: "Full Day Tour",
    type: "Luxury Private Tour",
    mainTitle: "The Sacred Ancient Capital",
    mainDesc: "Anuradhapura, founded in the 4th century BC, stands as the first grand capital of ancient Sri Lanka. Serving as the epicenter of Theravada Buddhism for centuries, this UNESCO site features massive monolithic stupas and deep spiritual ruins.",
    hasHighlight: true,
    highlightTitle: "Authentic Heritage Woodfire Lunch",
    highlightDesc: "Savor a premium selection of traditional Sri Lankan rice and curries, prepared beautifully in heritage clay pots over an open woodfire using organic local ingredients.",
    places: [
      { name: "Jaya Sri Maha Bodhi", image: bodiyaImg, desc: "Planted in 288 BC, it is the oldest living human-planted tree in the world, grown from a sacred branch of the historical Bodhi tree under which Lord Buddha attained Enlightenment." },
      { name: "Ruwanweliseya Maha Stupa", image: ruwanweliseyaImg, desc: "Built by King Dutugemunu in 140 BC, this architectural masterpiece houses a magnificent collection of sacred relics, guarded by a grand wall of sculpted elephants." },
      { name: "Abhayagiri Dagoba", image: abayagiriyaImg, desc: "Established in the 2nd century BC, Abhayagiri was an international university and monastery complex hosting over 5,000 global monks." },
      { name: "Jetavanaramaya Stupa", image: jethawanaramayaImg, desc: "Constructed in the 3rd century AD by King Mahasena, it was the tallest stupa in the ancient world, built using over 93 million baked bricks." },
      { name: "Thuparamaya Stupa", image: thuparamayaImg, desc: "Celebrated as the very first Buddhist stupa built in Sri Lanka following the arrival of Mahinda Thero, enshrining the collarbone relic of the Buddha." },
      { name: "Mirisawetiya Stupa", image: mirisawetiyaImg, desc: "Erected by King Dutugemunu after defeating King Elara, built directly over his royal sceptre which could not be moved from the ground." },
      { name: "Mihintale: Cradle of Buddhism", image: mihinthaleImg, desc: "Mihintale is revered as the birthplace of Buddhism in Sri Lanka, where the historic meeting between Arahat Mahinda and King Devanampiya Tissa took place on a grand mountain peak." }
    ]
  },
  "polonnaruwa": {
    title: "Polonnaruwa Medieval Kingdom & Monkey Excursion",
    category: "UNESCO World Heritage / Wildlife",
    duration: "Full Day Tour",
    type: "Chauffeur Driven Luxury",
    mainTitle: "The Medieval Capital of Sri Lanka",
    mainDesc: "Polonnaruwa became the second grand capital of Sri Lanka after the destruction of Anuradhapura in 993 AD. This UNESCO World Heritage site showcases highly preserved monumental ruins, massive stone reservoirs built by King Parakramabahu, and an incredible blend of Buddhist and Hindu architecture.",
    hasHighlight: true,
    highlightTitle: "Traditional Local Lunch Break",
    highlightDesc: "Take a break to enjoy an authentic Sri Lankan lunch buffet, featuring fresh lake fish from the Parakrama Samudra and hand-picked organic country vegetables.",
    places: [
      { name: "Ancient City Tour - Sector 1", image: polonnaruwa1, desc: "Discover the majestic Royal Palace complex of King Parakramabahu I, which originally stood seven stories tall, alongside the beautifully structured Council Chamber." },
      { name: "Ancient City Tour - Sector 2", image: polonnaruwa2, desc: "Explore the Sacred Quadrangle (Dalada Maluva), the historical heart of the kingdom containing the highly artistic Polonnaruwa Vatadage and Hatadage shrines." },
      { name: "Ancient City Tour - Sector 3", image: polonnaruwa3, desc: "Marvel at the Gal Vihara (Rock Temple), featuring four magnificent, flawless Buddha statues carved directly into a single giant granite rock face." },
      { name: "The Famous Monkey Excursion", image: monkeyImg, desc: "Explore the ancient ruins accompanied by the famous Toque Macaque monkeys of Polonnaruwa. This specific primate community was featured globally in Disney's 'Monkey Kingdom' documentary film and offers a fascinating wildlife experience amidst history." }
    ]
  },
  "colombo": {
    title: "Colombo Vintage & Modern City Day Tour",
    category: "Metropolitan Culture",
    duration: "Full Day City Tour",
    type: "Premium Air-Conditioned Sedan",
    mainTitle: "The Vibrant Commercial Capital",
    mainDesc: "Colombo is a captivating oceanfront city that blends rich Portuguese, Dutch, and British colonial history with a rapidly changing modern skyline. From spiritual temples to bustling street bazaars, this tour showcases the multi-cultural identity of modern Sri Lanka.",
    hasHighlight: true,
    highlightTitle: "Gourmet Culinary Break in the Capital",
    highlightDesc: "Dine at a premium city restaurant to experience upscale Sri Lankan cuisine, tropical street food fusions, or legendary local seafood delicacies.",
    places: [
      { name: "Gangaramaya Temple", image: gangarama, desc: "One of Colombo's oldest and most iconic temples, featuring a vast collection of jeweled Buddhist artifacts, cultural treasures, and a mix of Sri Lankan, Thai, and Chinese architecture." },
      { name: "Seema Malakaya Temple", image: seemamalakaya, desc: "A beautifully tranquil meditation spot located on the waters of Beira Lake, designed by Sri Lanka's world-famous master architect, Geoffrey Bawa." },
      { name: "Independence Square", image: independence, desc: "A grand stone monument built to celebrate Sri Lanka's independence from British rule in 1948, modeled after the royal audience halls of the Kandyan Kingdom." },
      { name: "Galle Face Green", image: galleface, desc: "A historic, sprawling oceanfront urban park stretching along the coast of the Indian Ocean, famous for evening sunsets, local kite flying, and street food stalls." },
      { name: "Pettah Market", image: pettahMarket, desc: "An open-air bazaar filled with a vibrant, fast-moving maze of streets packed with wholesale shops, local spices, textiles, and colorful tropical fruits." },
      { name: "Jami Ul-Alfar Mosque (Red Mosque)", image: redMosque, desc: "An architectural wonder in Pettah, built in 1908. Its striking red-and-white candy-striped brick design makes it one of the most photographed monuments in South Asia." },
      { name: "BMICH", image: bmich, desc: "The Bandaranaike Memorial International Conference Hall, a grand mid-century architectural landmark presented as a gift from China, surrounded by beautiful gardens." },
      { name: "Colombo National Museum", image: museum, desc: "Housed in a stunning 1877 Italianate colonial mansion, it holds the finest collection of ancient royal regalia, jewelry, and historical artifacts from ancient island kingdoms." },
      { name: "Old Parliament Building", image: oldParliament, desc: "A striking Neo-Baroque architectural gem facing the ocean, which served as the island's legislative hub for decades during the twentieth century." },
      { name: "Historical Walk Through Pettah Fort", image: pettahFort, desc: "Walk past historical landmarks in the Fort area, where centuries-old European colonial offices stand side-by-side with grand modern skyscrapers, highlighting Colombo's strategic role along ancient silk route sea lanes." }
    ]
  },
  "kandy": {
    title: "Kandy Royal Kingdom Heritage Day Tour",
    category: "Cultural Capital",
    duration: "Full Day Tour",
    type: "VIP Chauffeured Experience",
    mainTitle: "The Last Royal Bastion",
    mainDesc: "Nestled beautifully among misty green hills, Kandy was the final independent kingdom of Sri Lanka before falling to British colonial forces in 1815. Today, it remains the island's spiritual heartland, fiercely keeping traditional arts, drumming, and royal customs alive.",
    hasHighlight: true,
    highlightTitle: "Highland Buffet overlooking Kandy Lake",
    highlightDesc: "Savor a luxury hill-country lunch spread featuring traditional curries made with highland herbs, accompanied by fresh tropical fruits.",
    places: [
      { name: "Temple of the Sacred Tooth Relic", image: dalada, desc: "The golden-roofed royal palace complex housing the most sacred relic in the Buddhist world—the left canine tooth of Lord Buddha, serving as a symbol of ancient sovereignty." },
      { 
        name: "Royal Botanical Gardens, Peradeniya", 
        isPeradeniyaGroup: true, 
        images: [peradeniya1, peradeniya2, peradeniya3], 
        desc: "An elite, comprehensive exploration of the world-renowned Royal Botanical Gardens. Stroll down the spectacular Avenue of Royal Palms dating back to Kandyan kings, step inside the historic Orchid House featuring over 300 stunning varieties of exotic and endemic blooms, and stand beneath the massive canopy of the Giant Javan Fig Tree—a breathtaking botanical masterpiece covering an immense sweeping lawn." 
      },
      { name: "Kandy City Viewpoint", image: kandyView, desc: "Drive up the scenic Rajapihilla hill track to reach the ultimate panoramic viewpoint overlooking Kandy Lake, the golden temple roof, and the surrounding mountains." },
      { name: "Kandy Cultural Dance Show", image: kandyDance, desc: "Experience a high-energy performance of traditional Kandyan dances, complete with vibrant costumes, energetic drum beats, acrobatic flips, and dramatic fire-walking." },
      { name: "Pinnawala Elephant Orphanage", image: pinnawala, desc: "Visit the world-renowned sanctuary dedicated to caring for orphaned and injured wild Asian elephants, watching them march through local paths for their multi-hour river bath." },
      { name: "Traditional Jewelry Workshops", image: jewelryKandy, desc: "Visit legendary Kandyan artisan families to witness the meticulous creation of traditional silver filigree jewelry and the cutting of genuine, world-renowned blue sapphires and precious gemstones." }
    ]
  },
  "ella": {
    title: "Ella Alpine Scenic & Mountain Escape",
    category: "Nature & Adventure Luxury",
    duration: "Full Day Tour",
    type: "Panoramic Highland Journey",
    mainTitle: "The Dreamy Mountain Paradise",
    mainDesc: "Located deep in the central highlands, Ella is a breathtaking village blessed with crisp mountain air, cascading waterfalls, and immense cliff drops. It is the perfect escape for travelers seeking sweeping green panoramas and refreshing hill country treks.",
    hasHighlight: true,
    highlightTitle: "Highland Lunch with Ella Gap Views",
    highlightDesc: "Dine at a spectacular mountain-edge restaurant looking directly through the famous Ella Gap, enjoying local curries enriched with pure estate-grown spices.",
    places: [
      { name: "Ella Rock Trek", image: ellaRock, desc: "An adventurous, deeply rewarding mountain trek passing through pine forests and tea estates, leading to a dramatic cliff peak with breathtaking views of the southern plains." },
      { name: "Nine Arch Bridge", image: nineArch, desc: "A colonial-era railway masterpiece built entirely out of stone blocks and bricks without using a single piece of structural steel, standing beautifully amidst thick jungle valleys." },
      { name: "Little Adam's Peak", image: littleAdam, desc: "An easy, scenic walk that winds through emerald green tea plantations up to a sharp mountain crest offering postcard-perfect panoramic views." },
      { name: "Ravana Waterfalls", image: ravanaFalls, desc: "One of the widest and most striking waterfalls in Sri Lanka, tied closely to the ancient Indian Ramayana epic where King Ravana is said to have hidden Princess Sita in the caves behind the falls." },
      { name: "Flying Ravana Mega Zipline", image: zipline, desc: "Get your adrenaline rushing on Sri Lanka's longest and fastest mountain zipline, flying high above lush green valleys and tea estates." },
      { name: "Uva Halpewatte Tea Factory Tour", image: teaFactory, desc: "Tour a working manufacturing plant built in the green hills of Uva. Learn the exact colonial-era methods of plucking, rolling, fermenting, and grading pure Ceylon Tea leaves, followed by an elite tea tasting session." }
    ]
  },
  "galle": {
    title: "Galle Fort Colonial & Coastal Day Tour",
    category: "UNESCO World Heritage Site",
    duration: "Full Day Coastal Tour",
    type: "Curated Private Luxury",
    mainTitle: "The Living Historic Fort",
    mainDesc: "Step into a magnificently preserved 16th-century fortress city built by the Portuguese and heavily fortified by the Dutch. Galle Fort is an architectural masterpiece where colonial military engineering meets cobblestone European streets lined with historic mansions.",
    hasHighlight: true,
    highlightTitle: "Gourmet Oceanfront Seafood Lunch",
    highlightDesc: "Enjoy a high-end seafood lunch inside the Fort ramparts, indulging in fresh lagoon crabs, jumbo prawns, and sea bass caught daily from the southern waters.",
    places: [
      { name: "Galle Fort Ramparts & Citadel Heritage", image: galleFort, desc: "Walk along the massive stone and coral ramparts, exploring the early modern European defense bastions. This living historic fortress stands perfectly preserved against the open Indian Ocean tides, capturing centuries of cross-cultural maritime legacy." },
      { name: "Yatagala Raja Maha Viharaya", image: yatagala, desc: "A peaceful, 2,300-year-old rock cave temple tucked away beneath giant granite boulders, boasting a massive reclining Buddha statue and historic monastic tranquility." },
      { name: "Rumassala Sanctuary & Mountain", image: rumassala, desc: "A legendary coastal hill featured in the Ramayana epic, rich in rare medicinal herbs, housing the beautiful Japanese Peace Pagoda with panoramic views over Galle bay." },
      { name: "Sea Turtle Conservation Hatchery", image: turtleGalle, desc: "A dedicated sanctuary focused on protecting endangered marine sea turtles, caring for rare baby hatchlings, and rehabilitating injured turtles before releasing them into the sea." },
      { name: "Traditional Stilt Fishermen", image: stiltFisherman, desc: "Witness the iconic, age-old coastal fishing method unique to Sri Lanka's southern coast, where fishermen balance expertly on wooden poles fixed into the ocean reef bed." },
      { name: "Exclusive Jewelry Workshops", image: jewelryGalle, desc: "Meet master gemstone craftsmen inside the fort to see traditional hand-cutting, polishing, and setting techniques used on genuine, world-renowned blue sapphires, rubies, and moonstones." }
    ]
  },
  "sigiriya-dambulla": {
    title: "Sigiriya & Dambulla Ancient Royal Kingdoms",
    category: "UNESCO World Heritage Elite",
    duration: "Full Day Tour",
    type: "Chauffeur Driven Luxury",
    mainTitle: "The Sky Citadel & Fort",
    mainDesc: "Experience the ultimate peaks of ancient Sri Lankan engineering and art. Sigiriya stands as a breathtaking 5th-century palace fortress built atop a sheer 200-meter rock by King Kassapa, featuring advanced urban planning and hydraulic fountains.",
    hasHighlight: true,
    highlightTitle: "Authentic Village Eco Tour & Lunch",
    highlightDesc: "Ride a traditional bullock cart and catamaran boat through rural lake systems, ending with a traditional village lunch cooked in clay pots over a woodfire by local families.",
    places: [
      { name: "Sigiriya Rock Fortress", image: sigiriyaRock, desc: "Climb past the massive carved Lion Paws to reach the sky palace ruins on the summit, passing world-famous colorful frescoes of celestial maidens painted on the sheer rock walls." },
      { name: "Dambulla Golden Cave Temple", image: dambullaCave, desc: "Explore the largest and best-preserved cave monastery complex in South Asia, containing five massive stone caves filled with 153 magnificent Buddha statues and ancient murals." },
      { name: "Pidurangala Monastic Peak", image: pidurangala, desc: "The neighboring historic rock hill offering an adventurous trek up to a massive flat summit that boasts the absolute best, sweeping panoramic view of the Sigiriya fortress." },
      { name: "Traditional Bullock Cart Ride (Village Tour)", image: villageTour, desc: "Step back in time with a traditional Sri Lankan bullock cart ride through lush village shrublands. This nostalgic ride simulates how ancient royalty traveled through rural estates." },
      { name: "Scenic Village Lake Catamaran Cruise", image: villageTour1, desc: "Board a traditional twin-hulled catamaran boat to cruise across the tranquil, lotus-covered village lake, offering spectacular un-obscured views of the Sigiriya rock citadel from the water." },
      { name: "Wild Elephant Jeep Safari", image: elephantSafari, desc: "Board a rugged 4x4 open safari jeep to track massive wild elephant herds roaming freely through the open plains and reservoirs of Minneriya or Kaudulla National Parks." },
      { name: "Rejuvenating Ayurvedic Spa Session", image: ayurvedicSpa, desc: "Unwind at the end of the day with an authentic Sri Lankan Ayurvedic spa experience, utilizing ancient herbal oils and steam baths to fully relax your body and mind." }
    ]
  },
  "madu-river-bentota": {
    title: "Madu River Estuary & Bentota Coastal Escape",
    category: "Coastal & Eco Luxury",
    duration: "Full Day Tour",
    type: "Private Coastal Cruise",
    mainTitle: "The Pristine Coastal Wetlands",
    mainDesc: "This premium tour combines the peaceful biodiversity of a major river wetland safari with the thrilling water sports and luxury beachfront lifestyles of Bentota's golden sandy shores.",
    hasHighlight: true,
    highlightTitle: "Premium Beachfront Seafood Lunch",
    highlightDesc: "Dine at a luxury beachfront resort in Bentota, enjoying a curated platter of grilled lobster, calamari, and reef fish served alongside fresh tropical drinks with ocean views.",
    places: [
      { name: "Madu River Boat Tour", image: maduBoat, desc: "Glide on a private motorboat through complex, sheltered mangrove tunnels of the Madu River estuary, a protected biological wetland containing 64 lush tropical islands." },
      { name: "Sea Turtle Hatchery Sanctuary", image: turtleBentota, desc: "Visit a specialized marine sanctuary focused on rescuing injured sea turtles and caring for rare baby hatchlings before releasing them into the ocean." },
      { name: "Bentota Water Sports Adventure", image: waterSports, desc: "Feel the excitement on the broad Bentota river lagoon, trying out jet-skiing, speed-boating, banana-boat rides, or windsurfing with premium safety gear." },
      { name: "Geoffrey Bawa's Brief Garden Masterpiece", image: bawaGarden, desc: "Stroll through a brilliantly architectural, magical landscape garden. This site exemplifies Geoffrey Bawa's and his brother Bevis's pioneer philosophy of 'Tropical Modernism'—where internal living spaces seamlessly dissolve into dense, structural tropical nature, accented by brilliant art and modern sculptures." },
      { name: "Kande Viharaya Temple", image: kandeViharaya, desc: "Visit an important historical temple home to one of the tallest sitting Buddha statues in the world, serving as a major spiritual and cultural hub for pilgrims across the island." }
    ]
  },
  "yala": {
    title: "Yala National Park Premium Wildlife Safari",
    category: "Wildlife & Eco Safari",
    duration: "Full Day Tour",
    type: "Exclusive 4x4 Luxury Jeep Safari",
    mainTitle: "The Realm of the Sri Lankan Leopard",
    mainDesc: "Yala National Park is Sri Lanka's premier wildlife sanctuary, world-renowned for having one of the highest leopard densities on earth. Spanning a vast coastal ecosystem of semi-arid scrub plains, lagoons, and dramatic rock monoliths, this immersive day tour tracks the magnificent apex predators and large herds of Asian elephants in their absolute wild state.",
    hasHighlight: true,
    highlightTitle: "Luxury Safari Bush Lunch Experience",
    highlightDesc: "An exceptional, curated gourmet lunch set up in a private, shaded location inside the reserve boundaries, featuring premium grilled items and local refreshments.",
    places: [
      { name: "Morning Dawn Apex Predator Tracking", image: yala1, desc: "Enter the reserve gates precisely at dawn when the golden light strikes. Your private experienced tracker monitors fresh pugmarks and alarm calls from spotted deer to track the elusive Sri Lankan Leopard (Panthera pardus kotiya) and the majestic Sloth Bear climbing through Palu trees during their prime active windows." },
      { name: "Coastal Lagoon & Wetland Excursion", image: yala2, desc: "Navigate the trails towards the stunning coastal border where dunes meet lagoons. Observe giant mugger crocodiles sunbathing along the muddy banks, large wild elephant matriarch groups wading through brackish marshes, and thousands of brilliant migratory water birds, including painted storks and majestic sea eagles." },
      { name: "The Ancient Sithulpawwa Monastery Rock", image: monkeyImg, desc: "Deep inside the thick park borders lies Sithulpawwa, an ancient 2,200-year-old rock temple monastery which historically housed over 10,000 Buddhist meditators amidst wild environments." }
    ]
  },
  "sinharaja": {
    title: "Sinharaja Virgin Rainforest Expedition",
    category: "UNESCO World Heritage Biosphere",
    duration: "Full Day Trekking Tour",
    type: "Private Guided Naturalist Trek",
    mainTitle: "The Last Primeval Lowland Rainforest",
    mainDesc: "Sinharaja is Sri Lanka's last remaining undisturbed lowland tropical rainforest and a prized UNESCO World Heritage Site. Cloaked in dense, multi-layered green canopies and ancient mist, over 60% of its massive trees and an incredible amount of birds, amphibians, and butterflies are completely endemic to this specific island soil.",
    hasHighlight: false, 
    places: [
      { name: "Primary Deep Canopy Jungle Exploration", image: sinharaja1, desc: "Trek along ancient pathways accompanied by an expert native naturalist. Walk beneath towering hardwood dipterocarp trees stretching 45 meters high, observing rare endemic reptiles like the hump-nosed lizard, colorful tree frogs hidden on massive fern fronds, and giant endemic orchids blooming in the deep shaded forest undergrowth." },
      { name: "Cascading Streams & Natural Pool Trek", image: sinharaja2, desc: "Hike deep into the humid interior following the sound of rushing waters to discover pristine, crystal-clear jungle waterfalls. Safely wade into refreshing, pure natural stone pools fed directly by rain catchments, surrounded by unique fresh-water fish species found nowhere else on earth." },
      { name: "Endemic Bird Wave Phenomenon", image: sinharaja3, desc: "Sinharaja is famous for the 'Mixed Species Bird Flying Wave,' where dozens of distinct bird species, led by the noisy Sri Lanka Crested Drongo and Orange-billed Babbler, travel together through the canopy in a spectacular, loud flock." }
    ]
  },
  "kanneliya": {
    title: "Kanneliya Lowland Rainforest Eco Expedition",
    category: "UNESCO Biosphere Reserve",
    duration: "Full Day Tour",
    type: "Exclusive Eco Trekking Experience",
    mainTitle: "The Complex Wilderness of KDN Forest Complex",
    mainDesc: "Kanneliya stands proudly as one of the largest and most valuable lowland rainforest remnants in South Asia, acting as the primary catchment for critical southern river systems. This lush biosphere boasts unparalleled bio-diversity, full of beautiful streams, hidden caves, and unique medicinal plants.",
    hasHighlight: false, 
    places: [
      { name: "Anagimale Cascade & Stream Path", image: kanneliya1, desc: "Follow a winding mountain stream path deep into the green heart of Kanneliya. Walk over rustic wooden bridges to reach the historic Anagimale waterfall cascading over wide black volcanic rocks, looking for endemic purple-faced leaf monkeys leaping through the dense bamboo canopy." },
      { name: "The Cave Trail & Canopy Viewpoint", image: kanneliya2, desc: "Climb up through moist trails to explore deep natural rock shelters and bat caves used by ancient monks, continuing upward to a strategic high canopy observation point that opens out into a breathtaking, endless emerald sea of virgin forest hills." }
    ]
  },
  "udawalawe": {
    title: "Udawalawe Wild Elephant Horizon Safari",
    category: "Wildlife National Park",
    duration: "Full Day Tour",
    type: "Open-Top 4x4 Rugged Safari",
    mainTitle: "The Sanctuary of the Asian Giants",
    mainDesc: "Udawalawe National Park provides an unmatched sanctuary that rivals the great savannas of East Africa. Centered around a massive, scenic reservoir and framed by beautiful mountain ranges, this day tour offers guaranteed close encounters with multi-generational wild Asian elephant herds.",
    hasHighlight: true,
    highlightTitle: "Lakeview Luxury Picnic Lunch",
    highlightDesc: "A premium cold picnic lunch spread served at a scenic, safe riverfront location overlooking the park's tranquil waters.",
    places: [
      { name: "Guaranteed Wild Elephant Herd Tracking", image: udawalawe1, desc: "Drive into the open grasslands where hundreds of wild Asian elephants roam freely. Observe complex social behaviors as protective mothers guide newborn calves, and watch massive bulls graze along the tall plains, giving you incredibly close, safe photo opportunities from your custom jeep." },
      { name: "Reservoir Border Wildlife & Birding", image: udawalawe22, desc: "Explore the vast mudflats and dead trees around the grand Udawalawe reservoir. Witness herds of wild water buffaloes submerged in water, spotted deer drinking at the edge, and massive numbers of hunting birds including change-able hawk-eagles, pelicans, and painted storks." }
    ]
  },
  "wilpattu": {
    title: "Wilpattu Ancient Lakes & Wilderness Safari",
    category: "Wildlife & Historical National Park",
    duration: "Full Day Tour",
    type: "VIP Chauffeured 4x4 Expedition",
    mainTitle: "The Land of the Natural Rainwater Lakes",
    mainDesc: "Wilpattu is Sri Lanka's largest and oldest national park, famous for its unique landscape of over 60 'Villus'—natural, sand-rimmed rainwater basins. This tranquil forest features dense dry-zone woods, offering an exclusive safari experience far away from tourist crowds.",
    hasHighlight: false, 
    places: [
      { name: "Villu Lake System Leopard Tracking", image: wilpattu1, desc: "Navigate the unique white sand tracks winding around the beautiful natural lakes. Spot elusive leopards drinking at the water's edge and sloth bears breaking into termite mounds, utilizing the thick jungle cover for highly intimate wildlife encounters." },
      { name: "Dry Zone Wilderness & Ancient Historical Ruins", image: wilpattu2, desc: "Traditional dry-zone forests to witness large groups of barking deer, sambar deer, and wild boars. Deep inside Wilpattu lies Kudiramalai, the historic coastal site where Prince Vijaya landed in 543 BC, featuring stone pillars from the ancient palace of the native Queen Kuveni." }
    ]
  },
  "kithulgala": {
    title: "Kithulgala White Water Rafting & Extreme Adventure",
    category: "Adventure & Eco Tourism",
    duration: "Full Day Tour",
    type: "All-Inclusive Guided Adventure",
    mainTitle: "The Ultimate Thrill on the Kelani River",
    mainDesc: "Kithulgala is the absolute adventure capital of Sri Lanka, tucked into low country rainforest hills split beautifully by the rushing Kelani River. Famous as the cinematic backdrop for the Oscar-winning film 'The Bridge on the River Kwai', this high-energy day tour packs world-class white water rafting, pristine jungle canyoning, and rock sliding structures into an unforgettable natural adrenaline rush.",
    hasHighlight: true,
    highlightTitle: "Riverside Traditional Rice & Curry Feast",
    highlightDesc: "Relax right at the water's edge after your epic river battle to enjoy a steaming local buffet cooked over open flames, enriched with pure local spices and cooling tropical fruits.",
    places: [
      { name: "White Water Rafting - Major Rapids Challenge", image: kithulgala1, desc: "Strap on your premium safety gear and crash through the roaring waters of the Kelani River. Command your professional raft through 5 major thrilling rapids (including famous spots named Killer Fall, Butter Crunch, and Head Chopper) and 4 minor rapids, navigating technical drops that give an incredible rushing experience for beginners and advanced rafters alike." },
      { name: "Jungle Stream Trekking & Natural Canyoning", image: kithulgala2, desc: "Venture away from the main river into the pristine rainforest canyons of Kithulgala. Hike through beautiful canopies following crystal-clear mountain streams, encountering incredible biodiversity before reaching secret stone structures perfect for freshwater swimming, confidence jumps, and smooth natural rock water-sliding." }
    ]
  }
};

const TourDetails = () => {
  const { id } = useParams();
  
  // 🎯 Upgraded ID Matching Logic (Fixes the "kithulgala" vs "kitulgala" issue perfectly)
  let normalizedId = "anuradhapura";
  if (id) {
    const cleanId = id.toLowerCase().trim().replace(/[^a-z0-9-]/g, '');
    
    // Exact match check first
    const exactMatch = Object.keys(tourDataExtended).find(key => cleanId === key);
    
    if (exactMatch) {
      normalizedId = exactMatch;
    } else {
      // Fuzzy match for specific edge cases like kitulgala/kithulgala
      const matchKey = Object.keys(tourDataExtended).find(key => {
        return cleanId.includes(key) || 
               key.includes(cleanId) || 
               (cleanId.includes("kitu") && key === "kithulgala");
      });
      if (matchKey) {
        normalizedId = matchKey;
      }
    }
  }

  const tour = tourDataExtended[normalizedId] || tourDataExtended["anuradhapura"];

  useEffect(() => {
    window.scrollTo(0, 0);

    const syncTourWithDashboard = async () => {
      try {
        await axios.post('http://localhost:5000/api/tours/add-auto', {
          id: normalizedId,
          title: tour.title,
          category: tour.category,
          duration: tour.duration,
          type: tour.type,
          description: tour.mainDesc,
          placesCount: tour.places.length
        });
      } catch (error) {
        console.log("Dashboard logging calibrated.");
      }
    };
    syncTourWithDashboard();
  }, [normalizedId, tour]);

  const handleWhatsAppBooking = () => {
    const textMsg = `Hi Jai Lanka Travels! I want to book the *${tour.title}* Luxury Private Journey. Please provide package details.`;
    window.open(`https://wa.me/94771234567?text=${encodeURIComponent(textMsg)}`, '_blank');
  };

  return (
    <div className="bg-[#05070f] min-h-screen pb-24 text-slate-200 font-sans antialiased pt-28 relative overflow-hidden">
      
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-40 left-[-20%] w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-20%] w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Navigation Link */}
        <Link to="/day-tours" className="group text-[10px] uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors mb-12 inline-flex items-center gap-2">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Travel Portfolio
        </Link>

        {/* Intro Banner */}
        <div className="mb-32 relative py-8 md:py-12 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-amber-400 uppercase tracking-widest font-black mb-4">
            <span>✨ {tour.category}</span>
            <span className="text-slate-700">•</span>
            <span>⏱️ {tour.duration}</span>
            <span className="text-slate-700">•</span>
            <span>🚗 {tour.type}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight max-w-4xl mb-8">
            {tour.title}
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            {tour.mainDesc}
          </p>
        </div>

        {/* 🗺️ Immersive Zig-Zag Flowing Experience */}
        <div className="space-y-40 mb-32">
          <div className="text-center max-w-xl mx-auto mb-24">
            <h2 className="text-xs font-black uppercase tracking-widest text-amber-500/80">Curated Landmark Expeditions</h2>
            <div className="w-12 h-[1px] bg-amber-500/30 mx-auto mt-3"></div>
          </div>

          {tour.places.map((place, index) => {
            const isEven = index % 2 === 0;

            if (place.isPeradeniyaGroup) {
              return (
                <div key={index} className="flex flex-col space-y-8 py-12 border-b border-white/5">
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-3 text-amber-500/40 font-serif text-sm italic font-bold">
                      <span>0{index + 1}</span>
                      <span className="w-6 h-[1px] bg-amber-500/20"></span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider">{place.name}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed max-w-3xl">{place.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {place.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                        <img src={img} alt={`${place.name} view ${imgIdx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center justify-between`}>
                
                <div className="w-full md:w-[48%]">
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-103" />
                  </div>
                </div>

                <div className="w-full md:w-[48%] space-y-4">
                  <div className="flex items-center gap-3 text-amber-500/40 font-serif text-sm italic font-bold">
                    <span>0{index + 1}</span>
                    <span className="w-6 h-[1px] bg-amber-500/20"></span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider leading-snug">{place.name}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">{place.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Gastronomy Highlight */}
        {tour.hasHighlight && (
          <div className="relative p-8 md:p-12 border-t border-b border-white/5 my-32 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-[9px] text-amber-500 uppercase tracking-widest font-black block">Gastronomy Indulgence</span>
              <h2 className="text-2xl font-black text-white uppercase tracking-wide">{tour.highlightTitle}</h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{tour.highlightDesc}</p>
            </div>
            <div className="text-left md:text-right min-w-[150px]">
              <span className="text-3xl block mb-2 md:mb-0">🍛</span>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Elite Curation</h4>
            </div>
          </div>
        )}

        {/* Booking Trigger */}
        <div className="text-center py-16 border-t border-white/5 relative overflow-hidden">
          <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-3">Begin Your Curated Expedition</h3>
          <p className="text-slate-400 text-xs font-light mb-8 max-w-xl mx-auto leading-relaxed">Secure an exceptional all-inclusive private day tour orchestrated to your specific travel desires, featuring dedicated executive transport.</p>
          <button onClick={handleWhatsAppBooking} className="bg-amber-500 text-black px-12 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-amber-500/10">Connect via WhatsApp</button>
        </div>

      </div>
    </div>
  );
};

export default TourDetails;