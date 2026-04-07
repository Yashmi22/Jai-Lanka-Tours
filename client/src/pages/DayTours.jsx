import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const DayTours = () => {
  // 1. States - Filter දත්ත තබා ගැනීමට
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [sortBy, setSortBy] = useState("Most Popular");

  // 2. Sample Data (මෙය පසුව Database එකට සම්බන්ධ කළ හැක)
  const allTours = [
    { id: "sigiriya", title: "Sigiriya Rock Hike", category: "Heritage", image: "/images/sigiriya.jpg", duration: "4 Hours", difficulty: "Moderate", price: 45, rating: 5, reviews: "153" },
    { id: "galle", title: "Galle Fort Walk", category: "Heritage", image: "/images/galle_fort.jpg", duration: "3 Hours", difficulty: "Easy", price: 30, rating: 4, reviews: "98" },
    { id: "udawalawe", title: "Udawalawe Safari", category: "Wildlife", image: "/images/udawalawe.jpg", duration: "5 Hours", difficulty: "Relaxed", price: 65, rating: 5, reviews: "210" },
    { id: "kandy", title: "Temple of Tooth", category: "Cultural", image: "/images/temple_truth.jpg", duration: "2 Hours", difficulty: "Easy", price: 25, rating: 4, reviews: "115" },
    { id: "kitulgala", title: "White Water Rafting", category: "Adventure", image: "/images/ambuluwawa.jpg", duration: "3 Hours", difficulty: "Hard", price: 55, rating: 5, reviews: "45" }
  ];

  // 3. Filter Logic - User තෝරන දේවල් අනුව Tours පෙරා ගැනීම
  const filteredTours = useMemo(() => {
    return allTours.filter(tour => {
      const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tour.category);
      const matchesStars = selectedStars.length === 0 || selectedStars.includes(tour.rating);
      return matchesSearch && matchesCategory && matchesStars;
    }).sort((a, b) => {
      if (sortBy === "Price: Low to High") return a.price - b.price;
      if (sortBy === "Price: High to Low") return b.price - a.price;
      return 0; // Most Popular (Default)
    });
  }, [searchQuery, selectedCategories, selectedStars, sortBy]);

  // Handle Checkbox Changes
  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]);
  };

  const handleStarChange = (star) => {
    setSelectedStars(prev => prev.includes(star) ? prev.filter(s => s !== star) : [...prev, star]);
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-32 pb-20 font-body">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-32">
            <h3 className="font-headline font-bold text-xl mb-6">Filter Tours</h3>

            {/* Search */}
            <div className="mb-8">
              <input 
                type="text" 
                placeholder="Search by name..." 
                className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-lg text-sm outline-none focus:border-[#005483]"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 mb-4 text-sm border-b pb-2 uppercase tracking-widest">Categories</h4>
              {['Wildlife', 'Cultural', 'Adventure', 'Heritage'].map(cat => (
                <label key={cat} className="flex items-center gap-3 text-sm text-slate-600 mb-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-[#005483]" 
                    onChange={() => handleCategoryChange(cat)}
                  /> 
                  <span className="group-hover:text-[#005483] transition-colors">{cat}</span>
                </label>
              ))}
            </div>

            {/* Star Rating */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm border-b pb-2 uppercase tracking-widest">Rating</h4>
              {[5, 4, 3].map(star => (
                <label key={star} className="flex items-center gap-3 text-sm text-slate-600 mb-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-[#005483]" 
                    onChange={() => handleStarChange(star)}
                  />
                  <div className="flex text-amber-400">
                    {Array(star).fill().map((_, i) => <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>)}
                  </div>
                </label>
              ))}
            </div>
            
            <button 
              onClick={() => {setSelectedCategories([]); setSelectedStars([]); setSearchQuery("");}}
              className="mt-8 w-full py-2 text-[10px] font-bold uppercase tracking-widest text-red-500 border border-red-100 rounded-lg hover:bg-red-50"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">
          <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl border border-slate-100">
            <p className="text-sm font-medium text-slate-500">{filteredTours.length} Tours Found</p>
            <select 
              className="text-xs font-bold bg-slate-50 border-none py-2 px-4 rounded-lg outline-none cursor-pointer"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-slate-50">
                <div className="relative h-52 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[9px] font-bold text-[#005483] uppercase tracking-widest">{tour.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-amber-400">
                      {Array(tour.rating).fill().map((_, i) => <span key={i} className="material-symbols-outlined text-sm fill-current">star</span>)}
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">({tour.reviews})</span>
                  </div>
                  <h3 className="text-lg font-headline font-bold mb-4 h-12 line-clamp-2 leading-tight">{tour.title}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-slate-400 font-bold">From</p>
                      <p className="text-xl font-bold text-[#005483]">Rs.{tour.price}</p>
                    </div>
                    <Link to={`/tour/Rs.{tour.id}`} className="bg-[#005483] text-white px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
              <span className="material-symbols-outlined text-5xl text-slate-200 mb-4">search_off</span>
              <p className="text-slate-500 font-medium">No tours found matching your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DayTours;