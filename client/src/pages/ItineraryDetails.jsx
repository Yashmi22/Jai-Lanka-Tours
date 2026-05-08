import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaRoute, FaTimes, FaStar, FaCheck } from 'react-icons/fa';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Modal සඳහා State එක
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/itineraries/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDetails(data);
        } else {
          setError('Itinerary not found');
          setDetails(null);
        }
      } catch (err) {
        console.error('Error fetching itinerary:', err);
        setError('Error loading itinerary');
      } finally {
        setLoading(false);
      }
    };
    fetchItinerary();
  }, [id]);

  const itineraryData = {
    'cultural-odyssey': {
      title: 'Cultural Photography Tour in Sri Lanka',
      category: 'CULTURAL TOURS',
      duration: '08 Nights & 09 Days',
      description: 'Capture the essence of Sri Lanka through your lens. This tour is specifically designed for photography enthusiasts and culture lovers alike.',
      img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=2000',
      mapUrl: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1012975.2933924707!2d79.48911043321523!3d7.361250269002237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae2593cf65a1e9d%3A0xe1304511bd4056c!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3afca0dfa7b54d17%3A0x63427400e5751f08!2sSigiriya!3m2!1d7.9570163!2d80.7602973!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk",

      tourPlan: [
        {
          day: '1',
          title: 'Arrival in Colombo to Sigiriya',
          activities: ['Airport Pickup', 'Transfer to Sigiriya', 'Evening Relaxation'],
          images: ['https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600', 'https://images.unsplash.com/photo-1588598116712-2323e449c25f?w=600']
        },
        {
          day: '2',
          title: 'Sigiriya Rock Fortress',
          activities: ['Climb Sigiriya Rock', 'Village Tour', 'Minneriya Safari'],
          images: ['https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600', 'https://images.unsplash.com/photo-1544085311-11a028465b03?w=600']
        }
      ],

      hotels: [
        {
          name: 'Vil Uyana Sigiriya',
          desc: 'A complete eco-friendly outstanding resort nestled within the reed beds and paddy fields. Experience luxury in the heart of nature.',
          longDesc: 'Jetwing Vil Uyana is situated among reed beds and paddy fields and over the first man-made wetland structure in Sri Lanka. It features 36 dwellings that combine rural charm with modern comforts. Guests can enjoy organic dining and a peaceful atmosphere perfect for relaxation.',
          img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800',
          tags: ['Eco-friendly', 'Mountain View'],
          amenities: ['Private Pool', 'Free Wi-Fi', 'Spa & Wellness', 'Organic Garden'],
          hotelMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.467475354964!2d80.7384353759364!3d7.962058403487107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0979a0b06b7%3A0xc3958cc5c97966f3!2sJetwing%20Vil%20Uyana!5e0!3m2!1sen!2slk!4v1714975000000!5m2!1sen!2slk"
        },
        {
          name: 'Santani Wellness Kandy',
          desc: 'A world-class wellness retreat focused on sustainable luxury and mindful living.',
          longDesc: 'Santani Wellness Resort and Spa is the first purpose-built wellness resort in Sri Lanka. Named after the Sanskrit word meaning "in harmony with," Santani offers a peaceful sanctuary with minimalist architecture that blends seamlessly with the surrounding mountains.',
          img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
          tags: ['Wellness', 'Luxury'],
          amenities: ['Yoga Pavilion', 'Infinity Pool', 'Ayurvedic Spa', 'Gourmet Health Food'],
          hotelMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.126487123456!2d80.7512345!3d7.3123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3673f36a53f0f%3A0x6a20d4400e95!2sSantani%20Wellness%20Retreat!5e0!3m2!1sen!2slk!4v1714976000000!5m2!1sen!2slk"
        },
        {
          name: 'Amaya Hills',
          desc: 'A luxury hotel in Kandy designed as a Kandyan palace, offering breathtaking mountain views.',
          longDesc: 'Nestled in the lush green hills of Hanthana, Amaya Hills Kandy offers a royal retreat inspired by the ancient architecture of the Kandyan Kingdom. Enjoy panoramic views of the city and the misty mountains while experiencing authentic Sri Lankan hospitality.',
          img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
          tags: ['Luxury', 'Fine-dining'],
          amenities: ['Swimming Pool', 'Bar & Lounge', 'Traditional Architecture', 'City View'],
          hotelMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d80.6!3d7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366255b555555%3A0x1234567890abcdef!2sAmaya%20Hills!5e0!3m2!1sen!2slk!4v1714977000000!5m2!1sen!2slk"
        }
      ]
    },
  };

  const displayDetails = details || itineraryData[id] || itineraryData['cultural-odyssey'];

  if (loading) {
    return <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center"><p>{error}</p></div>;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-[#00a2ff] mb-8 flex items-center gap-2">← Back</button>
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#00a2ff] text-xs font-bold tracking-widest uppercase rounded-md mb-4">{displayDetails.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{displayDetails.title}</h1>
            <div className="flex items-center gap-6 text-slate-500 mb-8">
              <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#00a2ff]"/> {displayDetails.duration}</span>
              <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#00a2ff]"/> Sri Lanka</span>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">{displayDetails.description}</p>
          </div>
          <div className="w-full md:w-1/2 h-[350px] md:h-[550px]">
            <img src={displayDetails.imageUrl || displayDetails.img} alt={displayDetails.title} className="w-full h-full object-cover rounded-[40px] shadow-xl" />
          </div>
        </div>
      </div>

      <main className="max-w-screen-lg mx-auto px-6 py-20 space-y-24">
        
        {/* 2. Route Map Section */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-3"><FaRoute className="text-[#00a2ff]" /> Tour Route Map</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          <div className="w-full h-[450px] rounded-[40px] overflow-hidden border-8 border-white shadow-lg">
            <iframe src={displayDetails.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </section>

        {/* 3. Detailed Tour Plan */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold">Detailed Tour Plan</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          <div className="space-y-12">
            {displayDetails.tourPlan.map((item, idx) => (
              <div key={idx} className="relative bg-white p-6 md:p-10 rounded-[35px] border border-slate-100 shadow-sm">
                <div className="absolute -left-5 top-8 w-14 h-14 bg-[#00a2ff] text-white rounded-full flex flex-col items-center justify-center font-bold border-4 border-white shadow-lg">
                  <span className="text-[10px] uppercase">Day</span>
                  <span className="text-lg">{item.day}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-7 pl-6 md:pl-10">
                    <h3 className="text-2xl font-bold mb-6 text-slate-800">{item.title}</h3>
                    <ul className="space-y-4">
                      {item.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-4 text-slate-600"><span className="mt-2 w-1.5 h-1.5 bg-[#00a2ff] rounded-full shrink-0"></span>{act}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5 flex gap-3">
                    {item.images.map((img, i) => (
                      <div key={i} className="flex-1 h-48 md:h-56 overflow-hidden rounded-2xl"><img src={img} className="w-full h-full object-cover" alt="Tour" /></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Accommodation Section */}
        <section>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold whitespace-nowrap">Places you will stay</h2>
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayDetails.hotels.map((hotel, idx) => (
              <div key={idx} className="bg-white rounded-[35px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="h-56 overflow-hidden">
                  <img src={hotel.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={hotel.name} />
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{hotel.name}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-6">{hotel.desc}</p>
                  <button 
                    onClick={() => setSelectedHotel(hotel)}
                    className="w-full bg-[#00a2ff] text-white py-3 rounded-2xl font-bold hover:bg-[#008de0] transition-colors flex items-center justify-center gap-2"
                  >
                    <FaHotel /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- HOTEL MODAL PAGE --- */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm transition-all">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[40px] shadow-2xl overflow-y-auto relative animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedHotel(null)}
              className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/40 text-white md:text-slate-900 md:bg-slate-100 md:hover:bg-slate-200 p-3 rounded-full transition-all"
            >
              <FaTimes size={20} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Hotel Image & Basic Info */}
              <div className="relative h-[300px] lg:h-full">
                <img src={selectedHotel.img} className="w-full h-full object-cover" alt={selectedHotel.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
                <div className="absolute bottom-8 left-8 text-white lg:hidden">
                  <h2 className="text-3xl font-bold">{selectedHotel.name}</h2>
                </div>
              </div>

              {/* Hotel Details Content */}
              <div className="p-8 md:p-12 space-y-8">
                <div className="hidden lg:block">
                  <div className="flex gap-2 mb-4">
                    {[1,2,3,4,5].map(s => <FaStar key={s} className="text-yellow-400" />)}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">{selectedHotel.name}</h2>
                  <p className="text-[#00a2ff] font-bold">Luxury Accommodation</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#00a2ff] pl-4 uppercase tracking-wider text-sm">About Hotel</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedHotel.longDesc}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#00a2ff] pl-4 uppercase tracking-wider text-sm">Top Amenities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedHotel.amenities.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                        <FaCheck className="text-green-500 text-xs" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hotel Location Map */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold border-l-4 border-[#00a2ff] pl-4 uppercase tracking-wider text-sm">Location</h3>
                  <div className="w-full h-48 rounded-3xl overflow-hidden border-4 border-slate-50">
                    <iframe src={selectedHotel.hotelMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedHotel(null)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-xs"
                >
                  Return to Itinerary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-white border-t border-slate-200 py-16 text-center">
        
      </footer>
    </div>
  );
};

export default ItineraryDetails;