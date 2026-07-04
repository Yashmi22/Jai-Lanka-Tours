const Tour = require('../models/Tour');

const seedAnuradhapuraTour = async () => {
  try {
    // දැනටමත් මේ ටුවර් එක database එකේ තියෙනවාද බලනවා (Duplicate නොවෙන්න)
    const existingTour = await Tour.findOne({ tourId: 'anuradhapura' });
    
    if (!existingTour) {
      const anuradhapuraData = {
        tourId: "anuradhapura",
        title: "ANURADHAPURA ANCIENT KINGDOM & ROYAL HERITAGE",
        category: "UNESCO World Heritage",
        duration: "Full Day Private Tour",
        type: "Chauffeur Driven Luxury",
        
        kingdomTitle: "The Sacred Ancient Capital",
        kingdomDesc: "Anuradhapura, founded in the 4th century BC, stands as one of the oldest continuously inhabited cities in the world and the first grand capital of ancient Sri Lanka. Serving as the epicenter of Theravada Buddhism for centuries, this UNESCO World Heritage site is a sprawling marvel of ancient urban planning, massive monolithic stupas, advanced hydraulic engineering, and deep spiritual ruins.",

        lunchTitle: "Authentic Local Lunch at a Heritage Restaurant",
        lunchDesc: "Take a delightful midday break at a traditional, rustic local restaurant to savor an authentic Sri Lankan culinary experience. You will be served a premium selection of heritage red rice, freshly caught tank fish prepared with local spices, and an array of organic curries made from locally sourced vegetables like lotus root and ash-plantain. Prepared in traditional clay pots over a woodfire.",

        mihintaleTitle: "Mihintale: The Cradle of Buddhism",
        mihintaleImage: "mihinthale.jpg",
        mihintaleDesc: "Mihintale is revered as the birthplace of Buddhism in Sri Lanka, where the historic meeting between Arahat Mahinda and King Devanampiya Tissa took place. Rising majestically as a mountain peak, a flight of 1,840 grand granite steps leads you to the summit. Climbing Mihintale offers breathtaking panoramic views of the surrounding lakes and forests.",

        places: [
          {
            name: "Jaya Sri Maha Bodhi",
            image: "bodiya.jpg",
            desc: "Planted in 288 BC, the Jaya Sri Maha Bodhi is the oldest living human-planted tree in the world with a known planting date. Brought from India by the Buddhist nun Sanghamitta Maha Theri, it remains the spiritual heart of Anuradhapura, surrounded by protective golden railings."
          },
          {
            name: "Ruwanweliseya Maha Stupa",
            image: "ruwanweliseya.jpg",
            desc: "Built by King Dutugemunu in 140 BC, the Ruwanweli Maha Seya is an architectural masterpiece housing the largest collection of the Buddha's relics enshrined anywhere on earth, guarded by a magnificent wall of sculpted elephants."
          },
          {
            name: "Abhayagiri Dagoba",
            image: "abayagiriya.jpg",
            desc: "Established in the 2nd century BC by King Valagamba, Abhayagiri was an international university and monastery complex hosting over 5,000 global monks, standing nearly 115 meters tall in its glory days."
          },
          {
            name: "Jetavanaramaya Stupa",
            image: "jethawanaramaya.jpg",
            desc: "Constructed by King Mahasena in the 3rd century AD, Jetavanaramaya is an engineering wonder built using over 93 million baked bricks, originally standing as the third tallest structure in the ancient world."
          },
          {
            name: "Thuparamaya Stupa",
            image: "thuparamaya.jpg",
            desc: "Dating back to the reign of King Devanampiya Tissa, Thuparamaya is celebrated as the very first Buddhist stupa built in Sri Lanka, enshrining the sacred right collarbone relic of the Buddha."
          },
          {
            name: "Mirisawetiya Stupa",
            image: "mirisawetiya.jpg",
            desc: "The Mirisaweti Stupa was erected by King Dutugemunu after unifying the island. Legend says the King placed his royal sceptre on the ground, and when it could not be moved, he built this stupa over it."
          }
        ]
      };

      await Tour.create(anuradhapuraData);
      console.log("✅ Anuradhapura Tour Data successfully seeded to Database!");
    } else {
      console.log("ℹ️ Anuradhapura tour already exists in database.");
    }
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

module.exports = seedAnuradhapuraTour;