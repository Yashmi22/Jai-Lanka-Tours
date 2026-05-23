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
        loading(false);
      }
    };
    fetchItinerary();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] font-serif italic text-xl text-amber-400/70">
        Unveiling your bespoke journey...
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] font-serif italic text-xl text-slate-400">
        Itinerary Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] font-body text-slate-100 antialiased">
      
      {/* 1. Hero Section */}
      <header className="max-w-screen-xl mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <button 
            onClick={() => navigate(-1)} 
            className="text-slate-400 hover:text-amber-400 mb-6 flex items-center gap-2 group text-[11px] font-bold uppercase tracking-[0.2em] transition-colors"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          
          <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase bg-amber-950/40 border border-amber-600/30 px-3 py-1.5 rounded-md inline-block mb-3">
            {details.category}
          </span>
          
          <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-tight leading-tight mt-2 mb-6 uppercase">
            {details.title}
          </h1>
          
          <div className="flex gap-6 mb-8 border-b border-slate-800/60 pb-6">
            <span className="flex items-center gap-2 text-slate-400 font-medium">
              <FaCalendarAlt className="text-amber-500"/> {details.duration}
            </span>
            <span className="flex items-center gap-2 text-slate-400 font-medium">
              <FaMapMarkerAlt className="text-amber-500"/> Sri Lanka
            </span>
          </div>
          
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light italic">
            "{details.description}"
          </p>
        </div>
        
        <div className="w-full md:w-1/2 h-[400px] relative">
          <div className="absolute -inset-4 bg-slate-900/40 rounded-[3rem] -z-10 transform rotate-1 border border-slate-800/50"></div>
          <img src={details.imageUrl} className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border border-slate-800/60 brightness-[90%]" alt="Hero" />
        </div>
      </header>

      {/* 2. Tour Plan Section */}
      <main className="max-w-screen-lg mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-headline text-white font-light tracking-wide mb-24 text-center uppercase">
          7 Great Reasons to Travel with <span className="font-serif italic text-amber-400 lowercase">ToursLanka</span>
        </h2>

        <div className="relative">
          {/* මැදින් යන තිත් ඉර - රවුම් එකිනෙක සම්බන්ධ කිරීමට */}
          <div className="absolute left-[50px] md:left-[100px] top-10 bottom-10 w-0 border-l-2 border-dashed border-amber-500/20 z-0"></div>

          <div className="space-y-32">
            {details.tourPlan.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 md:gap-16 z-10">
                
                {/* රවුම ඇතුළේ Image එක */}
                <div className="relative shrink-0">
                  <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-[6px] border-[#111726] shadow-2xl ring-1 ring-amber-500/20">
                    <img src={item.images && item.images[0]} className="w-full h-full object-cover brightness-[85%]" alt={item.title} />
                  </div>
                  {/* දවසේ අංකය පෙන්වන පොඩි රවුම */}
                  <div className="absolute top-2 right-2 w-8 h-8 md:w-12 md:h-12 bg-amber-500 text-black rounded-full flex items-center justify-center font-bold text-sm md:text-lg border-4 border-[#111726]">
                    {item.day}
                  </div>
                </div>

                {/* දකුණු පස විස්තරය */}
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-6 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <div className="space-y-4">
                    {item.activities.map((act, i) => (
                      <p key={i} className="text-slate-400 text-base md:text-lg leading-relaxed flex items-start gap-3 font-light">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0"></span>
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
              <h2 className="text-3xl font-headline text-white font-light tracking-widest uppercase whitespace-nowrap">Luxury Accommodation</h2>
              <div className="h-px w-full bg-slate-800/60"></div>
            </div>
            <div className="bg-[#111726] rounded-[2.5rem] overflow-hidden border border-slate-800/60 shadow-2xl group max-w-2xl mx-auto">
              <div className="h-64 overflow-hidden relative">
                <img src={details.accommodation.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[90%]" alt={details.accommodation.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-headline text-white mb-2">{details.accommodation.name}</h4>
                <p className="text-slate-400 text-sm mb-4 flex items-center gap-2 font-light">
                  <FaMapMarkerAlt className="text-amber-500"/> {details.accommodation.location}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(Math.floor(details.accommodation.rating))].map((_, i) => <FaStar key={i}/>)}
                  </div>
                  <span className="text-slate-300 font-semibold">{details.accommodation.rating} / 5</span>
                </div>
                <p className="text-slate-400 mb-6 leading-relaxed font-light text-sm md:text-base">{details.accommodation.description}</p>
                
                <div className="mb-6">
                  <p className="font-bold text-slate-200 mb-2 text-sm uppercase tracking-wider">Amenities:</p>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(details.accommodation.amenities) 
                      ? details.accommodation.amenities.map((amenity, i) => (
                        <span key={i} className="bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-medium">{amenity}</span>
                      ))
                      : null
                    }
                  </div>
                </div>
                
                <p className="text-white text-xl font-headline font-bold mb-6 border-t border-slate-800 pt-4">
                  ${details.accommodation.pricePerNight} <span className="text-slate-500 text-sm font-normal font-sans">per night</span>
                </p>
                
                <button 
                  onClick={() => setSelectedHotel(details.accommodation)}
                  className="w-full bg-amber-500 text-black py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaHotel /> View Details
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 4. Route Map Section */}
        <section className="mt-32">
          <h2 className="text-3xl font-headline text-white font-light tracking-widest text-center uppercase mb-10">Tour Route Map</h2>
          <div className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden border-[12px] border-[#111726] shadow-2xl relative">
            <img src={details.mapUrl} className="w-full h-full object-cover brightness-[85%]" alt="Map" />
          </div>
        </section>
      </main>

      {/* Hotel Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/70 backdrop-blur-md">
          <div className="bg-[#111726] w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 relative animate-in zoom-in duration-300">
            <button onClick={() => setSelectedHotel(null)} className="absolute top-6 right-6 z-10 bg-[#0b0f19]/80 border border-slate-800 text-slate-300 p-3 rounded-full hover:bg-amber-500 hover:text-black transition-colors">
              <FaTimes />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full min-h-[300px] relative">
                <img src={selectedHotel.imageUrl || selectedHotel.img} className="w-full h-full object-cover brightness-[90%]" alt="Hotel" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111726] via-transparent to-transparent"></div>
              </div>
              <div className="p-10 space-y-6 overflow-y-auto max-h-[85vh]">
                <h2 className="text-3xl font-headline text-white uppercase">{selectedHotel.name}</h2>
                <p className="text-slate-400 flex items-center gap-2 font-light">
                  <FaMapMarkerAlt className="text-amber-500"/> {selectedHotel.location}
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(Math.floor(selectedHotel.rating))].map((_, i) => <FaStar key={i}/>)}
                  </div>
                  <span className="text-slate-300 font-semibold">{selectedHotel.rating} / 5</span>
                </div>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{selectedHotel.description || selectedHotel.longDesc || selectedHotel.desc}</p>
                
                {selectedHotel.amenities && selectedHotel.amenities.length > 0 && (
                  <div>
                    <p className="font-bold text-slate-200 mb-3 text-xs uppercase tracking-wider">Amenities:</p>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(selectedHotel.amenities)
                        ? selectedHotel.amenities.map((amenity, i) => (
                          <span key={i} className="bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-medium">{amenity}</span>
                        ))
                        : null
                      }
                    </div>
                  </div>
                )}
                
                <p className="text-white text-2xl font-headline font-bold border-t border-slate-800 pt-4">
                  ${selectedHotel.pricePerNight || 'Contact for price'}
                  {selectedHotel.pricePerNight && <span className="text-slate-500 text-sm font-normal font-sans"> per night</span>}
                </p>
                <button onClick={() => setSelectedHotel(null)} className="w-full py-4 bg-amber-500 text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">Close Details</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 text-center border-t border-slate-800/60 mt-20">
        <p className="text-slate-500 italic font-serif">Exploring Sri Lanka with Jai Lanka Travels</p>
      </footer>
    </div>
  );
};

export default ItineraryDetails;