import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const DiscoverSriLanka = () => {
  // --- DATA ARRAYS ---
  const destinationsData = [
    { id: 1, name: "Sigiriya", tag: "Ancient Citadel", category: "Cultural", img: "/images/sigiriya.jpg", desc: "Climb the majestic Lion Rock and explore the intricate royal gardens." },
    { id: 2, name: "Ella", tag: "Misty Highlands", category: "Adventure", img: "/images/nine_arch.jpg", desc: "A charming village nestled in the tea mountains, home to iconic waterfalls." },
    { id: 3, name: "Galle Fort", tag: "Colonial Charm", category: "Cultural", img: "/images/galle_fort.jpg", desc: "A UNESCO World Heritage site with cobblestone streets and stunning ocean views." },
    { id: 4, name: "Kandy", tag: "Sacred City", category: "Cultural", img: "/images/Aluvihare.jpg", desc: "The home of the sacred Tooth Relic and rich traditional Kandyan art." },
    { id: 5, name: "Mirissa", tag: "Sun & Surf", category: "Beach", img: "/images/Ambuluwawa.jpg", desc: "Whale watching and golden sand beaches for relaxing and sunsets." },
    { id: 6, name: "Yala National Park", tag: "Into the Wild", category: "Adventure", img: "/images/temple_truth.jpg", desc: "Embark on a safari to spot leopards, elephants, and exotic wildlife." },
  ];

  const experiencesData = [
    { id: 101, name: "Traditional Cooking", tag: "Culinary Arts", category: "Cultural", img: "/images/cooking.jpg", desc: "Learn the secrets of authentic Sri Lankan spices and traditional recipes." },
    { id: 102, name: "Surfing in Weligama", tag: "Water Sports", category: "Adventure", img: "/images/surfing.jpg", desc: "Experience the thrill of riding the waves in the crystal clear Indian Ocean." },
    { id: 103, name: "Tea Plucking", tag: "Highland Life", category: "Adventure", img: "/images/tea_plucking.jpg", desc: "Join local pluckers in the lush green estates and learn the art of tea making." },
  ];

  const [activeTab, setActiveTab] = useState('destination');
  const [filter, setFilter] = useState('All');

  const currentData = activeTab === 'destination' ? destinationsData : experiencesData;
  const filteredItems = filter === 'All' ? currentData : currentData.filter(item => item.category === filter);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#fcfdfe] font-sans text-[#1a1c1e] antialiased">
      
      {/* --- Header Section --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#005483] mb-6 block">EXPLORE SRI LANKA</span>
        <h1 className="text-6xl md:text-8xl font-serif mb-8 italic tracking-tighter">A Tapestry of Terrains</h1>
        <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
          From the mist-shrouded highlands to the sun-kissed coasts, we have curated the most unforgettable journeys.
        </p>
      </section>

      {/* --- Primary Toggle (Big Buttons) --- */}
      <div className="flex justify-center gap-6 mb-12">
        <button 
          onClick={() => { setActiveTab('destination'); setFilter('All'); }}
          className={`px-10 py-4 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
            activeTab === 'destination' ? 'bg-[#005483] text-white shadow-2xl' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
          }`}
        >
          Destinations
        </button>
        <button 
          onClick={() => { setActiveTab('experience'); setFilter('All'); }}
          className={`px-10 py-4 rounded-xl text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
            activeTab === 'experience' ? 'bg-[#005483] text-white shadow-2xl' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
          }`}
        >
          Experience
        </button>
      </div>

      {/* --- NEW MODERN SUB-FILTER (Minimalist Line Style) --- */}
      <div className="flex justify-center items-center gap-8 md:gap-16 mb-24 border-b border-slate-100 max-w-fit mx-auto px-10">
        {['All', 'Cultural', 'Adventure', 'Beach'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 ${
              filter === cat ? 'text-[#005483]' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            {cat}
            {/* Active Line Animation */}
            {filter === cat && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#005483] animate-in fade-in slide-in-from-left-2 duration-500"></div>
            )}
          </button>
        ))}
      </div>

      {/* --- Cards Grid --- */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden bg-white rounded-[2rem] shadow-sm transition-all duration-700 hover:shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-white/95 backdrop-blur-sm p-8 translate-y-[62%] group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif">{item.name}</h3>
                    <span className="text-[8px] font-black tracking-widest uppercase border border-slate-200 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[9px] tracking-widest uppercase font-bold">{item.tag}</p>
                </div>
                
                <p className="text-xs text-slate-500 leading-relaxed font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.desc}
                </p>
                
                <button className="w-full py-4 bg-[#005483] text-white rounded-xl text-[10px] font-bold tracking-widest uppercase hover:invert transition-all">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-400 italic font-serif">
              No items found in this category.
            </div>
          )}
        </div>
      </section>

      <footer className="py-20 bg-slate-50 text-center text-slate-400 text-[9px] tracking-[0.5em] uppercase">
        &copy; 2026 JAB TOUR - Curated Experiences
      </footer>
      </div>
    </>
  );
};

export default DiscoverSriLanka;