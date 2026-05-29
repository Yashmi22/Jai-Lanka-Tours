import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accommodation = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Beach & Ocean', 'Heritage & Boutique', 'Eco & Wellness'];

  const properties = [
    {
      name: "Amanwella",
      category: "Beach & Ocean",
      location: "Tangalle, Sri Lanka",
      tagline: "Pure Minimalist Beachfront Luxury",
      description: "A beachside sanctuary among coconut groves, featuring private plunge pools and floor-to-ceiling windows overlooking the Indian Ocean.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
      price: "$$$"
    },
    {
      name: "Amangalla",
      category: "Heritage & Boutique",
      location: "Galle Fort, Sri Lanka",
      tagline: "Stately Splendor in a Living Historic Fort",
      description: "Steeped in history, this direct link to the Dutch colonial era offers period furniture, high ceilings, and a world-class restorative spa.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      price: "$$$"
    },
    {
      name: "Santani Wellness Resort",
      category: "Eco & Wellness",
      location: "Kandy, Sri Lanka",
      tagline: "Intelligent Luxury Amidst Misty Mountains",
      description: "An award-winning eco-sanctuary designed for visual silence, helping you hit pause and rejuvenate with world-class Ayurveda treatments.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
      price: "$$$"
    }
  ];

  const filteredProperties = activeCategory === 'All' 
    ? properties 
    : properties.filter(prop => prop.category === activeCategory);

  return (
    // Navbar එකට යටින් පිටුව පටන් ගන්න block එකක් කරලා, පැහැදිලි Padding එකක් (pt-32) දුන්නා
    <div className="block w-full min-h-screen bg-gray-50 text-gray-900 font-sans antialiased pt-32 pb-16 relative z-30">
      
      {/* 1. HERO TITLE SECTION */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-bold block mb-2">Curated Sanctuaries</span>
        <h1 className="text-3xl md:text-5xl font-serif font-light tracking-[0.1em] uppercase text-gray-900 leading-tight">
          The Art of Premium Living
        </h1>
        <div className="w-16 h-[1px] bg-amber-500/50 mx-auto mt-4 mb-4"></div>
        <p className="text-xs md:text-sm tracking-wide text-gray-500 font-light max-w-xl mx-auto italic font-serif">
          A handpicked collection of Sri Lanka's most exclusive boutique villas and ultra-luxury resorts.
        </p>
      </div>

      {/* 2. CATEGORY FILTER CONTROLS */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center items-center gap-2 bg-white border border-gray-200 p-2 rounded-full max-w-2xl mx-auto shadow-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-gray-900 text-white shadow-sm' 
                  : 'bg-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PROPERTY GRID */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((hotel, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border border-gray-200/60 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl shadow-sm"
            >
              {/* Image Container */}
              <div className="w-full h-64 overflow-hidden relative bg-gray-200">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600" }} // Image fail වුණොත් fallback එකක්
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[9px] uppercase tracking-widest text-amber-400 font-bold">{hotel.price} Ultra-Lux</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-gray-400 font-semibold">
                    <span>{hotel.category}</span>
                    <span className="w-1 h-1 rounded-full bg-amber-500" />
                    <span className="text-gray-500">📍 {hotel.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-serif font-light mt-2 text-gray-900 tracking-wide">{hotel.name}</h3>
                  <p className="text-[11px] text-amber-600 font-serif italic mt-0.5">{hotel.tagline}</p>
                  
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed font-light">
                    {hotel.description}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400">Bespoke Living</span>
                  <Link to="/enquiry">
                    <button className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-[10px] font-bold uppercase tracking-[0.15em] py-2 px-4 rounded-full transition-all duration-300">
                      Inquire Stay
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CONCIERGE VIP BANNER */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-2xl bg-gray-900 p-8 md:p-12 text-center shadow-lg text-white">
          <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400 font-bold bg-white/10 px-3 py-1 rounded-full">Tailored Just For You</span>
          <h2 className="text-xl md:text-2xl font-serif font-light tracking-wide mt-4 uppercase">
            Bespoke Accommodation Planning
          </h2>
          <p className="text-xs text-gray-300 mt-2 max-w-xl mx-auto font-light">
            Do you have a specific villa in mind? Our travel experts enjoy direct access to unlisted luxury private estates across Ceylon.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://wa.me/94770000000" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-600 hover:bg-green-700 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-full transition-all duration-300">
                WhatsApp Concierge
              </button>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Accommodation;