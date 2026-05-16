import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCheck, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaStar, FaTimes } from 'react-icons/fa';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null); // Hotel Modal එක සඳහා

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/itineraries/${id}`);
        if (response.ok) {
          const data = await response.json();
          setDetails(data);
        }
      } catch (err) {
        console.error('Error fetching itinerary:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchItinerary();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-white">Loading...</div>;
  if (!details) return <div className="min-h-screen flex items-center justify-center bg-white">Itinerary Not Found</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <header className="max-w-screen-xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-blue-500 mb-6 flex items-center gap-2">
            <FaArrowLeft /> Back
          </button>
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase">{details.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">{details.title}</h1>
          <div className="flex gap-6 mb-8">
            <span className="flex items-center gap-2 text-slate-500"><FaCalendarAlt className="text-blue-500"/> {details.duration}</span>
            <span className="flex items-center gap-2 text-slate-500"><FaMapMarkerAlt className="text-blue-500"/> Sri Lanka</span>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">{details.description}</p>
        </div>
        <div className="w-full md:w-1/2 h-[400px]">
          <img src={details.imageUrl} className="w-full h-full object-cover rounded-[50px] shadow-2xl shadow-blue-100" alt="Hero" />
        </div>
      </header>

      {/* 2. Tour Plan Section (With Dashed Lines & Right Side Info) */}
      <main className="max-w-screen-lg mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center italic font-serif">
          7 Great Reasons to Travel with ToursLanka
        </h2>

        <div className="relative">
          {/* මැදින් යන තිත් ඉර - රවුම් එකිනෙක සම්බන්ධ කිරීමට */}
          <div className="absolute left-[50px] md:left-[100px] top-10 bottom-10 w-0 border-l-2 border-dashed border-slate-200 z-0"></div>

          <div className="space-y-32">
            {details.tourPlan.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 md:gap-16 z-10">
                
                {/* රවුම ඇතුළේ Image එක */}
                <div className="relative shrink-0">
                  <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-[6px] border-white shadow-xl ring-1 ring-slate-100">
                    <img src={item.images && item.images[0]} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  {/* දවසේ අංකය පෙන්වන පොඩි රවුම */}
                  <div className="absolute top-2 right-2 w-8 h-8 md:w-12 md:h-12 bg-[#2c4c64] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg border-4 border-white">
                    {item.day}
                  </div>
                </div>

                {/* දකුණු පස විස්තරය */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">{item.title}</h3>
                  <div className="space-y-4">
                    {item.activities.map((act, i) => (
                      <p key={i} className="text-slate-600 text-lg leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></span>
                        {act}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Luxury Accommodation Section */}
        {details.accommodation && details.accommodation.name && (
          <section className="mt-40">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold whitespace-nowrap">Luxury Accommodation</h2>
              <div className="h-px w-full bg-slate-100"></div>
            </div>
            <div className="bg-white rounded-[35px] overflow-hidden border border-slate-50 shadow-sm hover:shadow-xl transition-all group max-w-2xl mx-auto">
              <div className="h-56 overflow-hidden">
                <img src={details.accommodation.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-duration-700" alt={details.accommodation.name} />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{details.accommodation.name}</h4>
                <p className="text-slate-500 text-sm mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500"/> {details.accommodation.location}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-yellow-400 gap-1">
                    {[...Array(Math.floor(details.accommodation.rating))].map((_, i) => <FaStar key={i}/>)}
                  </div>
                  <span className="text-slate-600 font-semibold">{details.accommodation.rating} / 5</span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{details.accommodation.description}</p>
                <div className="mb-4">
                  <p className="font-bold text-slate-900 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(details.accommodation.amenities) 
                      ? details.accommodation.amenities.map((amenity, i) => (
                        <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{amenity}</span>
                      ))
                      : null
                    }
                  </div>
                </div>
                <p className="text-slate-900 text-lg font-bold mb-4">
                  ${details.accommodation.pricePerNight} <span className="text-slate-500 text-sm font-normal">per night</span>
                </p>
                <button 
                  onClick={() => setSelectedHotel(details.accommodation)}
                  className="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
                >
                  <FaHotel /> View Details
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 4. Route Map Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-10 text-center">Tour Route Map</h2>
          <div className="w-full h-[400px] md:h-[600px] rounded-[50px] overflow-hidden border-[12px] border-slate-50 shadow-inner">
            <img src={details.mapUrl} className="w-full h-full object-cover" alt="Map" />
          </div>
        </section>
      </main>

      {/* Hotel Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setSelectedHotel(null)} className="absolute top-6 right-6 z-10 bg-white/80 p-3 rounded-full hover:bg-white">
              <FaTimes />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full min-h-[300px]"><img src={selectedHotel.imageUrl || selectedHotel.img} className="w-full h-full object-cover" alt="Hotel" /></div>
              <div className="p-10 space-y-6 overflow-y-auto max-h-screen">
                <h2 className="text-3xl font-bold">{selectedHotel.name}</h2>
                <p className="text-slate-500 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500"/> {selectedHotel.location}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400 gap-1">
                    {[...Array(Math.floor(selectedHotel.rating))].map((_, i) => <FaStar key={i}/>)}
                  </div>
                  <span className="text-slate-600 font-semibold">{selectedHotel.rating} / 5</span>
                </div>
                <p className="text-slate-600 leading-relaxed">{selectedHotel.description || selectedHotel.longDesc || selectedHotel.desc}</p>
                {selectedHotel.amenities && selectedHotel.amenities.length > 0 && (
                  <div>
                    <p className="font-bold text-slate-900 mb-3">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(selectedHotel.amenities)
                        ? selectedHotel.amenities.map((amenity, i) => (
                          <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{amenity}</span>
                        ))
                        : null
                      }
                    </div>
                  </div>
                )}
                <p className="text-slate-900 text-2xl font-bold">
                  ${selectedHotel.pricePerNight || 'Contact for price'}
                  {selectedHotel.pricePerNight && <span className="text-slate-500 text-sm font-normal"> per night</span>}
                </p>
                <button onClick={() => setSelectedHotel(null)} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800">Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 text-center border-t border-slate-50 mt-20">
        <p className="text-slate-400 italic">Exploring Sri Lanka with Jai Lanka Travels</p>
      </footer>
    </div>
  );
};

export default ItineraryDetails;