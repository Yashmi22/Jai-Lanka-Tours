import React, { useState } from 'react';

// පින්තූර නිවැරදිව Import කරගැනීම (src/assets/)
import anuradhapuraImg from '../assets/anuradhapura.jpg';
import polonnaruwaImg from '../assets/polonnaruwa.jpg';
import colomboImg from '../assets/colombo.jpg';
import kandyImg from '../assets/kandy.jpg';
import ellaImg from '../assets/ella.jpg';
import sinharajaImg from '../assets/sinharaja.jpg';
import galleImg from '../assets/galle.jpg';
import kanneliyaImg from '../assets/kanneliya.jpg';
import udawalaweImg from '../assets/udawalawe.jpg';
import yalaImg from '../assets/yala.jpg';
import wilpattuImg from '../assets/wilpattu.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import kitulgalaImg from '../assets/kitulgala.jpg';
import bentotaImg from '../assets/bentota.jpg';

const DayTours = () => {
  // Customize Tour State
  const [customTour, setCustomTour] = useState({
    destinations: '',
    guests: '1',
    date: '',
    notes: ''
  });

  const allTours = [
    { id: "sigiriya-dambulla", title: "SIGIRIYA & DAMBULLA ROYAL HERITAGE", category: "Elite Heritage", image: sigiriyaImg, duration: "Full Day Private", type: "Chauffeur Driven" },
    { id: "ella", title: "ELLA ALPINE SCENIC ESCAPE", category: "Nature Luxury", image: ellaImg, duration: "Full Day Private", type: "Panoramic Journey" },
    { id: "yala", title: "YALA NATIONAL PARK EXCLUSIVE SAFARI", category: "Wildlife Elite", image: yalaImg, duration: "6 Hours Private", type: "4x4 Luxury Jeep" },
    { id: "galle", title: "GALLE FORT & COLONIAL COASTAL WALK", category: "Heritage & Leisure", image: galleImg, duration: "Full Day Private", type: "Curated Walking Tour" },
    { id: "anuradhapura", title: "ANURADAPURA SACRED SANCTUARY TOUR", category: "Archaeological Elite", image: anuradhapuraImg, duration: "Full Day Private", type: "Private Guide" },
    { id: "polonnaruwa-monkey", title: "POLONNARUWA KINGDOM & WILDLIFE PRIDOLOGY", category: "Culture & Wildlife", image: polonnaruwaImg, duration: "Full Day Private", type: "Exclusive Access" },
    { id: "colombo", title: "COLOMBO VINTAGE & MODERN CITY SOJOURN", category: "Urban Premium", image: colomboImg, duration: "Custom Hours", type: "Luxury Sedan" },
    { id: "kandy", title: "KANDY ROYAL KINGDOM & TEMPLE EXPERIENCE", category: "Cultural Elite", image: kandyImg, duration: "Full Day Private", type: "VIP Assistant" },
    { id: "sinharaja", title: "SINGHARAJA RAINFOREST PRIVATE TREK", category: "Eco Luxury", image: sinharajaImg, duration: "Full Day Private", type: "Expert Naturalist" },
    { id: "kanneliya", title: "KANNELIYA MYSTICAL RAINFOREST JOURNEY", category: "Eco Luxury", image: kanneliyaImg, duration: "Full Day Private", type: "Private Expedition" },
    { id: "udawalawe", title: "UDAWALAWA ELEPHANT SANCTUARY SAFARI", category: "Wildlife Private", image: udawalaweImg, duration: "5 Hours Private", type: "4x4 Premium Jeep" },
    { id: "wilpattu", title: "WILPATHTHU LEOPARD EMPIRE SAFARI", category: "Wildlife Private", image: wilpattuImg, duration: "Full Day Private", type: "Luxury Safari Cruiser" },
    { id: "kitulgala-rafting", title: "KITHULGALA WHITE WATER VIP ADVENTURE", category: "Luxury Adventure", image: kitulgalaImg, duration: "Full Day Private", type: "Premium Gear & Guide" },
    { id: "madu-river-bentota", title: "MADU RIVER EXCLUSIVE CRUISE & BENTOTA", category: "Coastal Premium", image: bentotaImg, duration: "Full Day Private", type: "Private Boat" }
  ];

  // Handling Customize Form Submission (WhatsApp Integration)
  const handleCustomizeSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Jai Lanka Travels! I want to customize a Luxury Day Tour.%0A%0A📍 Destinations: ${customTour.destinations}%0A👥 Guests: ${customTour.guests}%0A📅 Date: ${customTour.date}%0A📝 Special Notes: ${customTour.notes}`;
    window.open(`https://wa.me/94771234567?text=${message}`, '_blank'); // ඔයාගේ WhatsApp අංකය මෙතනට දාන්න
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen pb-24 text-slate-100 font-body antialiased">
      
      {/* 1. HIGH-END HERO BANNER */}
      <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden border-b border-yellow-600/20 bg-gradient-to-b from-[#060a13] via-[#0b1220] to-[#0b0f19]">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-950/40 border border-amber-600/30 px-5 py-2 rounded-full mb-6 inline-block">
            Bespoke Sri Lankan Journeys
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-wide mt-2 mb-6 uppercase">
            Privé <span className="font-serif italic text-amber-400">Day Excursions</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            Immerse yourself in unrivaled luxury. Seamless full-day private journeys crafted meticulously for the discerning traveler. No templates, no crowds—just pure, tailored discovery.
          </p>
        </div>
      </div>

      {/* 2. PREMIUM HERO PHOTO COLLAGE GRID (Navigation Bar එක සහ Cards අතර හිස්බව පිරවීමට) */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 -mt-6">
        <div className="grid grid-cols-12 gap-4 h-[350px] md:h-[450px]">
          <div className="col-span-6 md:col-span-4 h-full overflow-hidden rounded-2xl border border-white/5 relative group">
            <img src={sigiriyaImg} alt="Luxury Sigiriya" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"><p className="text-xs uppercase tracking-widest font-bold text-amber-400">Cultural Grandeur</p></div>
          </div>
          <div className="col-span-6 md:col-span-3 h-full overflow-hidden rounded-2xl border border-white/5 relative group">
            <img src={galleImg} alt="Luxury Galle" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"><p className="text-xs uppercase tracking-widest font-bold text-amber-400">Colonial Elegance</p></div>
          </div>
          <div className="hidden md:block md:col-span-3 h-full overflow-hidden rounded-2xl border border-white/5 relative group">
            <img src={yalaImg} alt="Luxury Yala" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"><p className="text-xs uppercase tracking-widest font-bold text-amber-400">Untamed Wilderness</p></div>
          </div>
          <div className="hidden md:block md:col-span-2 h-full overflow-hidden rounded-2xl border border-white/5 relative group">
            <img src={ellaImg} alt="Luxury Ella" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6"><p className="text-xs uppercase tracking-widest font-bold text-amber-400">Alpine Serenity</p></div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* SECTION TITLE */}
        <div className="border-b border-slate-800 pb-6 mb-12 flex justify-between items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Our Elite Portfolio</p>
            <h2 className="text-2xl md:text-3xl font-headline tracking-wide uppercase text-white">Signature Single-Day Itineraries</h2>
          </div>
          <p className="text-xs text-slate-500 tracking-wider hidden sm:block">All itineraries are fully flexible and 100% private</p>
        </div>

        {/* 3. DYNAMIC LUXURY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
          {allTours.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-[#111726] rounded-2xl overflow-hidden border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 group flex flex-col justify-between shadow-2xl relative"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[85%] group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent"></div>
                
                {/* Gold Styled Category Badge */}
                <div className="absolute top-4 left-4 bg-[#0b0f19]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-amber-500/20 shadow-lg">
                  <span className="text-[8px] font-bold text-amber-400 uppercase tracking-widest">{tour.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between -mt-4 relative z-10">
                <div>
                  {/* Subtle Premium Details */}
                  <div className="flex items-center gap-3 mb-3 text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                    <span>✨ {tour.duration}</span>
                    <span className="text-slate-600">•</span>
                    <span>🚗 {tour.type}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-headline font-bold text-white tracking-wide mb-6 group-hover:text-amber-400 transition-colors line-clamp-2 min-h-[3rem] leading-snug">
                    {tour.title}
                  </h3>
                </div>

                {/* Bottom Premium Call-To-Action (No $ Value) */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest text-slate-500 font-bold">Service Level</p>
                    <p className="text-xs font-semibold text-amber-400 tracking-wider uppercase">Ultra-Luxury</p>
                  </div>
                  <a 
                    href={`https://wa.me/94771234567?text=Hi, I am interested in the ${tour.title} private luxury experience.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-transparent text-white border border-slate-700 px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 shadow-sm"
                  >
                    Request Details
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 4. CUSTOMIZE YOUR LUXURY TOUR FORM SECTION */}
        <div className="bg-gradient-to-br from-[#12192c] to-[#0d1424] rounded-3xl p-8 md:p-12 border border-amber-500/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-amber-400">Tailor-Made Elegance</span>
            <h2 className="text-3xl font-headline text-white mt-2 mb-4 uppercase tracking-wide">Can't find your perfect journey?</h2>
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
              Let us sketch a completely customized luxury itinerary based entirely on your preferences. Choose your destination, vehicle type, and activities.
            </p>
          </div>

          <form onSubmit={handleCustomizeSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Where do you want to explore?</label>
              <input 
                type="text" 
                placeholder="e.g. Sigiriya, Galle, Tea Estates..." 
                className="bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-amber-500/50 transition-colors"
                value={customTour.destinations}
                onChange={(e) => setCustomTour({ ...customTour, destinations: e.target.value })}
                required
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Number of Aristocrats/Guests</label>
              <select 
                className="bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-amber-500/50 transition-colors cursor-pointer"
                value={customTour.guests}
                onChange={(e) => setCustomTour({ ...customTour, guests: e.target.value })}
              >
                <option value="1-2">1 - 2 Guests (Luxury Sedan)</option>
                <option value="3-4">3 - 4 Guests (Premium SUV)</option>
                <option value="5+">5+ Guests (Luxury Van)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Preferred Voyage Date</label>
              <input 
                type="date" 
                className="bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-amber-500/50 transition-colors cursor-pointer text-slate-400"
                value={customTour.date}
                onChange={(e) => setCustomTour({ ...customTour, date: e.target.value })}
                required
              />
            </div>

            <div className="md:col-span-3 flex flex-col gap-2 mt-2">
              <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Special Elite Requests / Preferences</label>
              <textarea 
                rows="2"
                placeholder="Share your desires (e.g., Helicopter transfers, Fine-dining reservations, Private historians...)" 
                className="bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3.5 text-xs text-white outline-none focus:border-amber-500/50 transition-colors resize-none"
                value={customTour.notes}
                onChange={(e) => setCustomTour({ ...customTour, notes: e.target.value })}
              />
            </div>

            <div className="md:col-span-3 text-center mt-4">
              <button 
                type="submit" 
                className="bg-amber-500 text-black px-10 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl hover:shadow-amber-500/10"
              >
                Design My Bespoke Tour
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DayTours;