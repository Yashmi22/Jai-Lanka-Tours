import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaStar, FaTimes, FaSuitcaseRolling } from 'react-icons/fa';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070a13] font-serif italic text-xl text-amber-400/80 tracking-widest animate-pulse">
        Unveiling your bespoke journey...
      </div>
    );
  }

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070a13] font-serif italic text-xl text-slate-400">
        Itinerary Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070a13] font-sans text-slate-100 antialiased selection:bg-amber-500/30">
      
      {/* 1. LUXURY HERO SECTION */}
      <header className="relative w-full overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0a0f1d] via-[#070a13] to-[#070a13] pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          
          {/* Left Hero Details */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <button 
              onClick={() => navigate(-1)} 
              className="text-slate-400 hover:text-amber-400 flex items-center gap-2 group text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 outline-none"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300 text-amber-500" /> Go Back
            </button>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/5 border border-amber-500/20 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-amber-400">{details.category}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight text-white uppercase font-headline text-center lg:text-left">
              {details.title}
            </h1>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 border-y border-slate-800/60 py-4 w-full my-4">
              <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm md:text-base">
                <FaCalendarAlt className="text-amber-400 shadow-sm" /> <span>{details.tag || details.duration || "Premium Expedition"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 font-medium text-sm md:text-base">
                <FaMapMarkerAlt className="text-amber-400 shadow-sm" /> <span>Sri Lanka Bound</span>
              </div>
            </div>
            
            <p className="text-slate-300 text-center text-base md:text-lg leading-relaxed font-light italic font-serif max-w-xl mx-auto lg:mx-0 whitespace-pre-line bg-slate-900/40 p-4 rounded-xl border border-slate-800/50 break-words w-full">
              "{details.description}"
            </p>
          </div>
          
          {/* Right Floating Frame Image */}
          <div className="w-full lg:w-1/2 h-[320px] md:h-[450px] relative group mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[2rem] blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-800/80 shadow-2xl relative">
              <img src={details.imageUrl} className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-all duration-700 brightness-[90%] group-hover:brightness-95" alt="Bespoke Ceylon Experience" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. DYNAMIC TIMELINE (TOUR PLAN) */}
      <main className="max-w-screen-xl mx-auto px-6 md:px-12 py-24">
        
        <div className="text-center max-w-2xl mx-auto mb-24 space-y-3">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-amber-400/80">Signature Tour Schedule</p>
          <h2 className="text-2xl md:text-4xl font-headline text-white font-light uppercase tracking-wide">
            Your Crafted <span className="font-serif italic text-amber-400 lowercase font-medium">itinerary</span> plan
          </h2>
          <div className="w-12 h-0.5 bg-amber-500/40 mx-auto mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-amber-500/40 via-slate-800 to-slate-900"></div>

          <div className="space-y-16">
            {details.tourPlan && details.tourPlan.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
             
              const tourPlanImage = (item.images && item.images.length > 0) ? item.images[0] : (item.dayImage || item.imageUrl || item.image);
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0 z-10`}>
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-[#070a13] shadow-lg shadow-amber-500/50"></div>

                  {/* Left or Right Content Card */}
                  <div className="w-full md:w-[45%] pl-14 md:pl-0">
                    <div className="bg-[#111625] rounded-2xl border border-slate-800/80 p-6 md:p-8 hover:border-amber-500/20 transition-all duration-300 shadow-xl relative group">
                      
                      {/* Day Counter Floating Tag */}
                      <span className="absolute -top-4 left-6 md:left-auto md:right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1 rounded-full font-bold text-xs shadow-md tracking-wider">
                        {item.day || `Day ${idx + 1}`}
                      </span>

                      {/* Tour Plan Image Display Framework */}
                      {tourPlanImage && (
                        <div className="w-full h-52 overflow-hidden rounded-xl mb-6 border border-slate-800 relative shadow-md z-0">
                          <img 
                            src={tourPlanImage} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[90%] group-hover:brightness-100" 
                            alt={item.title || `Day ${idx + 1} Image`} 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111625]/60 to-transparent pointer-events-none"></div>
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-white mb-4 tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>

                      <div className="space-y-3">
                        {item.activities && (Array.isArray(item.activities) ? item.activities : [item.activities]).map((act, i) => (
                          <p key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2.5 font-light break-words w-full justify-start text-left">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-amber-400/80 rounded-full shrink-0 shadow-sm"></span>
                            <span className="flex-1">{act}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout Spacers */}
                  <div className="hidden md:block w-[10%]"></div>
                  <div className="hidden md:block w-[45%]"></div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 3. LUXURY HOTELS CARDS */}
        {details.hotels && details.hotels.length > 0 && (
          <section className="mt-44 border-t border-slate-900 pt-24">
            
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-2">
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-emerald-400">Premium Stay</p>
              <h2 className="text-2xl md:text-4xl font-headline text-white font-light uppercase tracking-wide">
                Luxury Accommodations
              </h2>
              <div className="w-12 h-0.5 bg-emerald-500/40 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {details.hotels.map((hotel, index) => {
                const hotelDescription = hotel.description || hotel.desc || hotel.longDesc || "Exclusive luxury suite curated for your comfort.";

                return (
                  <div key={index} className="bg-[#111625] rounded-[1.5rem] overflow-hidden border border-slate-800/80 shadow-xl group flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
                    <div>
                      <div className="h-44 overflow-hidden relative">
                        <img src={hotel.img || hotel.image || hotel.imageUrl} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[85%]" alt={hotel.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111625] via-transparent to-transparent"></div>
                      </div>

                      <div className="p-5">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors tracking-wide uppercase truncate">{hotel.name}</h4>
                        <p className="text-slate-400 text-[11px] mb-3 flex items-center gap-1.5 font-light truncate">
                          <FaMapMarkerAlt className="text-emerald-400 shrink-0 text-xs"/> {hotel.location}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-3 bg-[#070a13]/40 w-fit px-2.5 py-0.5 rounded-md border border-slate-800/60">
                          <div className="flex text-amber-400 gap-0.5 text-[10px]">
                            {[...Array(5)].map((_, i) => <FaStar key={i}/>)}
                          </div>
                          <span className="text-slate-300 font-bold text-[10px]">5.0 LUX</span>
                        </div>

                        <p className="text-slate-400 leading-relaxed font-light text-xs line-clamp-3 italic">
                          "{hotelDescription}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-5 pt-0">
                      <button 
                        onClick={() => setSelectedHotel(hotel)}
                        className="w-full bg-[#162035] hover:bg-emerald-500 text-slate-200 hover:text-black py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-800 hover:border-emerald-500"
                      >
                        <FaHotel /> Room Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. IMMERSIVE ROUTE MAP FRAME */}
        {details.mapUrl && (
          <section className="mt-40 border-t border-slate-900 pt-24">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <h2 className="text-2xl md:text-4xl font-headline text-white font-light tracking-wide uppercase">Tour Route Expedition Map</h2>
              <div className="w-12 h-0.5 bg-amber-500/40 mx-auto mt-3"></div>
            </div>
            <div className="w-full h-[380px] md:h-[550px] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl relative bg-[#111625]">
              <img src={details.mapUrl} className="w-full h-full object-cover brightness-[82%]" alt="Expedition Route Track" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
            </div>
          </section>
        )}
      </main>

      {/* 5. HOTEL DETAILS MODAL VIEW */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-[#111625] w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 relative">
            
            <button 
              onClick={() => setSelectedHotel(null)} 
              className="absolute top-5 right-5 z-10 bg-[#070a13]/90 border border-slate-800 text-slate-300 p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-colors duration-300 outline-none"
            >
              <FaTimes className="text-sm" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-56 md:h-full min-h-[240px] relative">
                <img src={selectedHotel.img || selectedHotel.image || selectedHotel.imageUrl} className="w-full h-full object-cover brightness-[88%]" alt={selectedHotel.name} />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111625] via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-10 space-y-5 overflow-y-auto max-h-[75vh] md:max-h-[85vh] text-left">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded">Luxury Elite Stay</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide pt-2">{selectedHotel.name}</h2>
                </div>

                <p className="text-slate-400 text-xs flex items-center gap-1.5 font-light">
                  <FaMapMarkerAlt className="text-emerald-400 shrink-0"/> {selectedHotel.location}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 gap-0.5 text-xs">
                    {[...Array(5)].map((_, i) => <FaStar key={i}/>)}
                  </div>
                  <span className="text-slate-400 text-xs font-semibold">5.0 / 5 Premium Quality</span>
                </div>

                <p className="text-slate-300 leading-relaxed font-light text-xs md:text-sm bg-[#070a13]/30 p-4 rounded-xl border border-slate-800/60 italic">
                  "{selectedHotel.description || selectedHotel.desc || selectedHotel.longDesc || "Exclusive luxury suite curated for your comfort."}"
                </p>
                
                {selectedHotel.amenities && selectedHotel.amenities.length > 0 && (
                  <div className="space-y-2.5">
                    <p className="font-bold text-slate-200 text-[10px] uppercase tracking-widest">Premium Amenities Included:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedHotel.amenities.map((amenity, i) => (
                        <span key={i} className="bg-emerald-950/20 text-emerald-400 border border-emerald-500/10 px-3 py-1 rounded-md text-[11px] font-medium tracking-wide shadow-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t border-slate-800/80">
                  <button 
                    onClick={() => setSelectedHotel(null)} 
                    className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:from-white hover:to-white shadow-xl transition-all duration-300"
                  >
                    Return To Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-16 text-center border-t border-slate-900 mt-24 bg-gradient-to-t from-[#050810] to-transparent">
        <div className="flex items-center justify-center gap-2 text-amber-500/40 text-sm mb-2">
          <FaSuitcaseRolling />
        </div>
        <p className="text-slate-500 text-xs italic font-serif tracking-widest">Bespoke Ceylon Expeditions with Jai Lanka Travels</p>
      </footer>
    </div>
  );
};

export default ItineraryDetails;