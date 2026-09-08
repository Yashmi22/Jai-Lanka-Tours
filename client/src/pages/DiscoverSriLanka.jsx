import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaRegCalendarAlt, FaStar } from 'react-icons/fa'; 
import api, { API_BASE_URL } from '../api';

const DiscoverSriLanka = () => {
  const navigate = useNavigate();
  
  const normalizeImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path; 
    }
    const baseUrl = API_BASE_URL.replace('/api', '');
    return `${baseUrl}/${path.replace(/^\//, '')}`;
  };

  const [destinationsData, setDestinationsData] = useState([]);
  const [experiencesData, setExperiencesData] = useState([]);
  const [activeTab, setActiveTab] = useState('destination');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get('/discover');
        const allData = Array.isArray(res.data) ? res.data : [];
        setDestinationsData(allData.filter(item => item.type === 'destination'));
        setExperiencesData(allData.filter(item => item.type === 'experience'));
      } catch (err) {
        console.log("Error fetching data from Jai Lanka Database:", err);
      }
    };
    loadData();
  }, []);

  const currentData = activeTab === 'destination' ? destinationsData : experiencesData;
  const filteredItems = filter === 'All' 
    ? currentData 
    : currentData.filter(item => item.category === filter);

  return (
    <div className="bg-[#0b0f19] min-h-screen pb-16 md:pb-24 text-slate-100 font-body antialiased">
      
      {/* --- 1. HERO BANNER --- */}
      <div className="relative pt-24 sm:pt-32 pb-10 sm:pb-20 px-4 sm:px-6 text-center overflow-hidden border-b border-yellow-600/20 bg-gradient-to-b from-[#060a13] via-[#0b1220] to-[#0b0f19]">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-amber-400 bg-amber-950/40 border border-amber-600/30 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 whitespace-nowrap w-fit mx-auto inline-flex items-center justify-center">
            Bespoke Sri Lankan Wonders
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-light text-white tracking-wide mt-2 mb-3 sm:mb-6 uppercase leading-tight">
            A Tapestry of <span className="font-serif italic text-amber-400">Terrains</span>
          </h1>
          <p className="text-slate-400 text-[11px] sm:text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed tracking-wide px-2">
            From the mist-shrouded highlands to the sun-kissed coasts, we have curated the most unforgettable journeys and iconic ceylon experiences.
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 mt-6 sm:mt-12">
        
        {/* --- 2. PRIMARY TOGGLE --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-6 sm:mb-12 max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={() => { setActiveTab('destination'); setFilter('All'); }}
            className={`w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
              activeTab === 'destination' ? 'bg-amber-500 text-black shadow-2xl font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Destinations
          </button>
          <button 
            onClick={() => { setActiveTab('experience'); setFilter('All'); }}
            className={`w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 ${
              activeTab === 'experience' ? 'bg-amber-500 text-black shadow-2xl font-bold' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Experience
          </button>
        </div>

        {/* --- 3. MODERN SUB-FILTER (HORIZONTALLY SCROLLABLE ON MOBILE) --- */}
        <div className="w-full overflow-x-auto no-scrollbar mb-8 sm:mb-24 border-b border-slate-800">
          <div className="flex justify-start sm:justify-center items-center gap-4 sm:gap-8 md:gap-12 min-w-max mx-auto px-4 sm:px-10 pb-1">
            {['All', 'Cultural', 'Adventure', 'Wellness', 'Romantic', 'Beach'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative py-3 sm:py-4 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all duration-300 whitespace-nowrap ${
                  filter === cat ? 'text-amber-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {cat}
                {filter === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 animate-in fade-in slide-in-from-left-2 duration-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- SECTION TITLE --- */}
        <div className="border-b border-slate-800 pb-3 sm:pb-6 mb-6 sm:mb-12 flex justify-between items-end">
          <div>
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-widest text-amber-400 font-bold mb-1">Our Elite Discoveries</p>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-headline tracking-wide uppercase text-white">
              {activeTab === 'destination' ? 'Curated Destinations' : 'Curated Experiences'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 tracking-wider hidden sm:block">Handpicked luxury essences of Ceylon</p>
        </div>

        {/* --- 4. CARDS GRID --- */}
        <section className="pb-20 sm:pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item._id} 
                className="bg-[#111726] rounded-2xl overflow-hidden border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 group flex flex-col justify-between shadow-2xl relative"
              >
                {/* Image Container */}
                <div className="relative h-60 sm:h-72 overflow-hidden">
                  <img 
                    src={normalizeImagePath(item.img)} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[100%] group-hover:brightness-[110%]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111726]/20 via-transparent to-transparent"></div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0b0f19]/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md border border-amber-500/20 shadow-lg">
                    <span className="text-[8px] font-bold text-amber-400 uppercase tracking-widest">{item.category}</span>
                  </div>

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-500 text-black px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold flex items-center gap-1 shadow-lg">
                    <FaStar className="text-[9px]" />
                    <span>{item.rating || '4.9'}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between -mt-4 relative z-10">
                  <div>
                    <p className="text-amber-400/80 text-[8px] sm:text-[9px] tracking-widest uppercase font-bold mb-1.5 sm:mb-2">
                      {item.tag || "Exclusive Voyage"}
                    </p>
                    <h3 className="text-sm sm:text-base font-headline font-bold text-white tracking-wide mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] leading-snug">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-slate-400 text-[10px] sm:text-[11px] font-medium">
                      <div className="flex items-center gap-1.5">
                        <FaRegClock className="text-amber-400/70" />
                        <span>{item.duration || 'Flexible'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaRegCalendarAlt className="text-amber-400/70" />
                        <span>{item.bestTime || 'All Year'}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-xs font-light leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom Section */}
                  <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-[7px] sm:text-[8px] uppercase tracking-widest text-slate-500 font-bold">Service Level</p>
                      <p className="text-[11px] sm:text-xs font-semibold text-amber-400 tracking-wider uppercase">Ultra-Luxury</p>
                    </div>
                    <button 
                      onClick={() => navigate(`/discover/${item._id}`)}
                      className="bg-transparent text-white border border-slate-700 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[8px] sm:text-[9px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 shadow-sm"
                    >
                      Explore Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="col-span-full py-16 sm:py-24 text-center text-slate-500 italic font-serif">
              No items found in this premium category.
            </div>
          )}
        </section>

        <footer className="py-8 sm:py-12 border-t border-slate-900 text-center text-slate-600 text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">
          &copy; 2026 JAI LANKA TOURS - Curated Experiences
        </footer>
      </div>
    </div>
  );
};

export default DiscoverSriLanka;