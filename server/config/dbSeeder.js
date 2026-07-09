const Tour = require('../models/Tour');
const Itinerary = require('../models/Itinerary');

const seedAnuradhapuraTour = async () => {
  try {
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

const seedOffRoadAdventureItinerary = async () => {
  try {
    const existingItinerary = await Itinerary.findOne({ title: 'Off Road Adventure Tour' });

    if (!existingItinerary) {
      const itineraryData = {
        title: 'Off Road Adventure Tour',
        category: 'Off Road Adventure Tour',
        tag: '4 Days / 3 Nights',
        accommodation: 'Adventure Camp & Eco Stays',
        duration: '4 Days / 3 Nights',
        description: 'Experience the wild side of Sri Lanka with a thrilling off-road journey through rugged terrain, jungle tracks, mountain passes, and scenic villages.',
        imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d80.638!3d7.873!2m3!1f0!2f0!3f0!3m2!1m1!2s0x0%3A0x0!5e0!3m2!1sen!2slk!4v1710000000000',
        tourPlan: [
          {
            dayNumber: 1,
            title: 'Mountain Escape Begins',
            activities: ['Pickup from the city', 'Drive through tea country', 'Camp setup at a scenic ridge'],
            dayImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
          },
          {
            dayNumber: 2,
            title: 'Off Road Adventure Trails',
            activities: ['4x4 expedition through forest tracks', 'River crossing and jungle viewpoints', 'Local village lunch'],
            dayImage: 'https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80'
          },
          {
            dayNumber: 3,
            title: 'Waterfall and Wildlife Day',
            activities: ['Hike to a waterfall', 'Wildlife spotting', 'Campfire evening'],
            dayImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80'
          },
          {
            dayNumber: 4,
            title: 'Scenic Return',
            activities: ['Breakfast by the river', 'Visit a local market', 'Return to the city'],
            dayImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
          }
        ],
        hotels: [
          {
            name: 'Adventure Eco Lodge',
            location: 'Kandy Highlands',
            desc: 'A comfortable eco retreat with panoramic forest views.',
            longDesc: 'Relax in a sustainable lodge surrounded by nature after your adventurous day.',
            img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
            amenities: ['Breakfast', 'Private Balcony', 'Campfire Area'],
            hotelMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d80.638!3d7.873!2m3!1f0!2f0!3f0!3m2!1m1!2s0x0%3A0x0!5e0!3m2!1sen!2slk!4v1710000000000'
          }
        ]
      };

      await Itinerary.create(itineraryData);
      console.log('✅ Off Road Adventure Tour itinerary data successfully seeded to Database!');
    } else {
      console.log('ℹ️ Off Road Adventure Tour itinerary already exists in database.');
    }
  } catch (error) {
    console.error('❌ Error seeding Off Road Adventure Tour itinerary:', error);
  }
};

module.exports = {
  seedAnuradhapuraTour,
  seedOffRoadAdventureItinerary
};