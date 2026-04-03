import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DayTours = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const tours = [
    {
      id: "sigiriya-rock-hike",
      title: "Sigiriya Rock Hike",
      category: "Most Popular",
      image: "/images/sigiriya.jpg",
      duration: "4 Hours",
      difficulty: "Moderate",
      price: "45",
      rating: 5,
      reviews: "153"
    },
    {
      id: "galle-fort-walk",
      title: "Galle Fort Heritage Walk",
      category: "Heritage",
      image: "/images/galle_fort.jpg",
      duration: "3 Hours",
      difficulty: "Easy",
      price: "30",
      rating: 4,
      reviews: "98"
    },
    {
      id: "udawalawe-safari",
      title: "Udawalawe Safari",
      category: "Wildlife",
      image: "images/udawalawe.jpg",
      duration: "5 Hours",
      difficulty: "Relaxed",
      price: "65",
      rating: 5,
      reviews: "210"
    }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-32 pb-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Sidebar - Filters (From image_a52ec8.jpg) */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-32">
              <div className="mb-8 bg-[#005483] text-white p-6 rounded-xl text-center">
                <p className="text-sm opacity-80 uppercase tracking-widest">Tours starting at</p>
                <h2 className="text-4xl font-headline font-bold">Rs.5000</h2>
              </div>

              {/* Search Box */}
              <div className="mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Where to go?</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search tours..." 
                    className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-lg text-sm focus:border-[#005483] outline-none"
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Filter Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Categories</h4>
                  {['Wildlife', 'Cultural', 'Adventure', 'Heritage'].map(cat => (
                    <label key={cat} className="flex items-center gap-3 text-sm text-slate-600 mb-3 cursor-pointer hover:text-[#005483]">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#005483]" /> {cat}
                    </label>
                  ))}
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">Star Rating</h4>
                  {[5, 4, 3].map(star => (
                    <label key={star} className="flex items-center gap-3 text-sm text-slate-600 mb-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 accent-[#005483]" />
                      <div className="flex text-amber-400">
                        {Array(star).fill().map((_, i) => <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>)}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Side - Tour Cards (From image_274405.jpg) */}
          <main className="lg:w-3/4">
            
            {/* Sort Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8 flex justify-between items-center">
              <p className="text-sm text-slate-500 font-medium">Showing {tours.length} Day Tours</p>
              <div className="flex gap-4">
                <select className="bg-slate-50 border-none text-xs font-bold py-2 px-4 rounded-lg outline-none">
                  <option>Sort By: Most Popular</option>
                  <option>Price: Low to High</option>
                </select>
                <div className="flex bg-slate-100 rounded-lg p-1">
                  <button className="bg-white p-1 rounded shadow-sm"><span className="material-symbols-outlined text-sm">grid_view</span></button>
                  <button className="p-1"><span className="material-symbols-outlined text-sm">list</span></button>
                </div>
              </div>
            </div>

            {/* Tour Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                  <div className="relative h-56 overflow-hidden">
                    <img src={tour.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[9px] font-bold text-[#005483] uppercase tracking-widest">{tour.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex text-amber-400">
                        {Array(tour.rating).fill().map((_, i) => <span key={i} className="material-symbols-outlined text-[14px] fill-current">star</span>)}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">({tour.reviews} Reviews)</span>
                    </div>

                    <h3 className="text-xl font-headline font-bold text-slate-900 mb-4 h-14 line-clamp-2">{tour.title}</h3>
                    
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {tour.duration}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">signal_cellular_alt</span> {tour.difficulty}</span>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-slate-50">
                      <div>
                        <p className="text-[8px] uppercase tracking-widest text-slate-400">From</p>
                        <p className="text-2xl font-bold text-[#005483]">${tour.price}</p>
                      </div>
                      <Link to={`/tour/${tour.id}`} className="bg-[#005483] text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

      </div>
    </div>
  );
};

export default DayTours;