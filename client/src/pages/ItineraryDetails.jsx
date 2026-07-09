import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaHotel, FaStar, FaTimes, FaSuitcaseRolling, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const normalizeImageList = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === 'string' ? item.trim() : ''))
      .filter(Boolean);
  }

  if (typeof value === 'string') {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const getItineraryGalleryImages = (itinerary) => {
  const collected = [];

  const addImage = (image) => {
    const normalized = typeof image === 'string' ? image.trim() : '';
    if (normalized && !collected.includes(normalized)) {
      collected.push(normalized);
    }
  };

  if (itinerary) {
    if (Array.isArray(itinerary.tourPlan)) {
      itinerary.tourPlan.forEach((day) => {
        normalizeImageList(day?.images || day?.imageUrl || day?.image || day?.img || day?.dayImage).forEach(addImage);
      });
    }

    normalizeImageList(itinerary.imageUrl || itinerary.images || itinerary.image).forEach(addImage);

    if (Array.isArray(itinerary.hotels)) {
      itinerary.hotels.forEach((hotel) => {
        normalizeImageList(hotel?.img || hotel?.hotelImage || hotel?.image).forEach(addImage);
      });
    }
  }

  return collected;
};

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Hero Section 
  const [currentHeroImageIdx, setCurrentHeroImageIdx] = useState(0);

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

  const heroImagesArray = getItineraryGalleryImages(details);

  // Hero Image Automatically changed
  useEffect(() => {
    if (heroImagesArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentHeroImageIdx((prevIdx) => (prevIdx + 1) % heroImagesArray.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [heroImagesArray.length]);

  // Manual Functions
  const nextSlide = () => {
    if (heroImagesArray.length > 0) {
      setCurrentHeroImageIdx((prev) => (prev + 1) % heroImagesArray.length);
    }
  };

  const prevSlide = () => {
    if (heroImagesArray.length > 0) {
      setCurrentHeroImageIdx((prev) => (prev - 1 + heroImagesArray.length) % heroImagesArray.length);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070a13] font-serif italic text-xl text-amber-400/80 tracking-widest animate-pulse">
        Loading...
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

  const activeHeroImage = heroImagesArray[currentHeroImageIdx] || '';
  
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

            <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed tracking-wide text-justify max-w-xl mx-auto lg:mx-0 whitespace-pre-line bg-slate-900/40 p-5 rounded-2xl border border-slate-800/60 break-words w-full shadow-inner">
              {details.description}
            </p>
          </div>

          {/* Right Floating Frame Image - සිනිදුවට මාරු වෙන Slider එකක් */}
          <div className="w-full lg:w-1/2 h-[320px] md:h-[450px] relative group mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[2rem] blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-800/80 shadow-2xl relative bg-slate-950">
              
              {activeHeroImage ? (
                <img 
                  key={currentHeroImageIdx} 
                  src={activeHeroImage} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-all duration-700 brightness-[90%] group-hover:brightness-95 animate-fadeIn" 
                  alt="Bespoke Ceylon Experience" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 italic text-sm">No Images Available</div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-transparent to-transparent"></div>
              
              {/* Manual navigation buttons  */}
              {heroImagesArray.length > 1 && (
                <>
                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 z-30 outline-none">
                    <FaChevronLeft size={14} />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 z-30 outline-none">
                    <FaChevronRight size={14} />
                  </button>
                </>
              )}

              {/* Slider Dots Indicator */}
              {heroImagesArray.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20">
                  {heroImagesArray.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentHeroImageIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 outline-none ${i === currentHeroImageIdx ? 'w-4 bg-amber-400' : 'w-1.5 bg-white/40'}`}
                    />
                  ))}
                </div>
              )}
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

        <div className="relative max-w-4xl mx-auto pl-8 md:pl-12">
          <div className="absolute left-2.5 md:left-4 top-4 bottom-4 w-px bg-gradient-to-b from-amber-500/50 via-slate-800 to-slate-900"></div>

          <div className="space-y-12">
            {details.tourPlan && details.tourPlan.map((item, idx) => {
              let imagesArray = [];
              if (item.images && Array.isArray(item.images) && item.images.length > 0) {
                imagesArray = item.images;
              } else {
                const singleImg = item.dayImage || item.imageUrl || item.image || item.img;
                if (singleImg) imagesArray.push(singleImg);
              }

              return (
                <div key={idx} className="relative z-10">
                  <div className="absolute -left-[27px] md:-left-[37px] top-6 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-[#070a13] shadow-lg shadow-amber-500/50"></div>

                  <div className="w-full">
                    <div className="bg-[#111625] rounded-2xl border border-slate-800/80 p-6 md:p-8 hover:border-amber-500/20 transition-all duration-300 shadow-xl relative group">
                      <span className="absolute -top-4 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1 rounded-full font-bold text-xs shadow-md tracking-wider">
                        {item.day || `Day ${item.dayNumber || idx + 1}`}
                      </span>

                      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-2">
                        <div className="w-full lg:flex-1 space-y-3 order-2 lg:order-1">
                          <h3 className="text-xl font-bold text-white tracking-wide uppercase group-hover:text-amber-400 transition-colors">
                            {item.title}
                          </h3>
                          <div className="w-full border-t border-slate-800/60 pt-3 text-left">
                            <p className="text-slate-400 text-sm leading-relaxed font-light break-words w-full whitespace-pre-line text-justify">
                              {Array.isArray(item.activities) ? item.activities.join('\n') : item.activities}
                            </p>
                          </div>
                        </div>

                        {imagesArray.length > 0 && (
                          <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap gap-4 order-1 lg:order-2 shrink-0 max-w-full">
                            {imagesArray.map((imgUrl, imgIdx) => (
                              <div key={imgIdx} className="w-[calc(50%-8px)] sm:w-44 md:w-48 h-32 sm:h-36 overflow-hidden rounded-xl border border-slate-800/80 relative shadow-md z-0 shrink-0">
                                <img src={imgUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-[90%] group-hover:brightness-100" alt={`${item.title || 'Day'} - Attachment ${imgIdx + 1}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111625]/30 to-transparent pointer-events-none"></div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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
              <h2 className="text-2xl md:text-4xl font-headline text-white font-light uppercase tracking-wide">Luxury Accommodations</h2>
              <div className="w-12 h-0.5 bg-emerald-500/40 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {details.hotels.map((hotel, index) => {
                const hotelDescription = hotel.desc || hotel.description || "Exclusive luxury suite curated for your comfort.";
                return (
                  <div key={index} className="bg-[#111625] rounded-[1.5rem] overflow-hidden border border-slate-800/80 shadow-xl group flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300">
                    <div>
                      <div className="h-44 overflow-hidden relative">
                        <img src={hotel.img || hotel.hotelImage} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[85%]" alt={hotel.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111625] via-transparent to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors tracking-wide uppercase truncate">{hotel.name}</h4>
                        <p className="text-slate-400 text-[11px] mb-3 flex items-center gap-1.5 font-light truncate">
                          <FaMapMarkerAlt className="text-emerald-400 shrink-0 text-xs" /> {hotel.location}
                        </p>
                        <div className="flex items-center gap-2 mb-3 bg-[#070a13]/40 w-fit px-2.5 py-0.5 rounded-md border border-slate-800/60">
                          <div className="flex text-amber-400 gap-0.5 text-[10px]">
                            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                          </div>
                          <span className="text-slate-300 font-bold text-[10px]">5.0 LUX</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed font-light text-xs line-clamp-3 italic">"{hotelDescription}"</p>
                      </div>
                    </div>
                    <div className="p-5 pt-0">
                      <button onClick={() => setSelectedHotel(hotel)} className="w-full bg-[#162035] hover:bg-emerald-500 text-slate-200 hover:text-black py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-800 hover:border-emerald-500">
                        <FaHotel /> Room Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* 5. HOTEL DETAILS MODAL VIEW */}
      {selectedHotel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          <div className="bg-[#111625] w-full max-w-4xl rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 relative">
            <button onClick={() => setSelectedHotel(null)} className="absolute top-5 right-5 z-10 bg-[#070a13]/90 border border-slate-800 text-slate-300 p-2.5 rounded-full hover:bg-amber-500 hover:text-black transition-colors duration-300 outline-none">
              <FaTimes className="text-sm" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-56 md:h-full min-h-[240px] relative">
                <img src={selectedHotel.img || selectedHotel.hotelImage} className="w-full h-full object-cover brightness-[88%]" alt={selectedHotel.name} />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#111625] via-transparent to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 space-y-5 overflow-y-auto max-h-[75vh] md:max-h-[85vh] text-left">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1 rounded">Luxury Elite Stay</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide pt-2">{selectedHotel.name}</h2>
                </div>
                <p className="text-slate-400 text-xs flex items-center gap-1.5 font-light">
                  <FaMapMarkerAlt className="text-emerald-400 shrink-0" /> {selectedHotel.location}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 gap-0.5 text-xs">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <span className="text-slate-400 text-xs font-semibold">5.0 / 5 Premium Quality</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-light text-xs md:text-sm bg-[#070a13]/30 p-4 rounded-xl border border-slate-800/60 italic">"{selectedHotel.desc || selectedHotel.description || "Exclusive luxury suite curated for your comfort."}"</p>
                <div className="pt-4 border-t border-slate-800/80">
                  <button onClick={() => setSelectedHotel(null)} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl text-xs font-bold uppercase tracking-widest hover:from-white hover:to-white shadow-xl transition-all duration-300">Return To Itinerary</button>
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