import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowBack, LocationOn, Star, CalendarMonth } from '@mui/icons-material';

const DiscoverDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Normalize image paths from absolute file:// URLs to relative URLs
  const normalizeImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('file://')) {
      // Extract path after /public/
      const match = path.match(/\/public(\/.*)/i);
      return match ? match[1] : path;
    }
    return path;
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // Backend එකෙන් තනි item එකක ID එකට අදාළ දත්ත ලබාගැනීම
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/packages/discover/${id}`);
        setItem(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading details:", err);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0f19] font-serif italic text-xl text-amber-400/70">
        Unveiling the essence of Ceylon...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f19]">
        <p className="text-slate-400 font-serif italic mb-4">Destination not found.</p>
        <button onClick={() => navigate('/discover')} className="text-sm font-bold text-amber-400 uppercase tracking-widest hover:text-white transition-colors">Go Back</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0b0f19] font-body text-slate-100 antialiased pb-30">
      
      {/* Floating Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <button 
          onClick={() => navigate('/discover')}
          className="flex items-center gap-2 group text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-amber-400 transition-colors"
        >
          <ArrowBack fontSize="small" className="group-hover:-translate-x-1 transition-transform" /> Back to Explorations
        </button>
      </div>

      {/* Main Luxury Layout */}
      <main className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Editorial Details (6 Columns) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-950/40 border border-amber-600/30 text-amber-400 px-3 py-1.5 rounded-md">
              {item.category}
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center gap-1">
              <LocationOn style={{ fontSize: '12px', color: '#fbbf24' }} /> {item.type}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-tight leading-tight mb-4 uppercase">
            {item.name}
          </h1>
          
          <p className="text-amber-400 font-serif italic text-xl md:text-2xl mb-8 tracking-wide">
            "{item.tag}"
          </p>

          <div className="w-20 h-[1px] bg-amber-500/20 mb-8"></div>

          {/* Full Rich Text Content */}
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-10 tracking-wide whitespace-pre-line">
            {item.content || item.desc} 
          </p>

          {/* Quick Package Highlights Card */}
          <div className="bg-[#111726] rounded-2xl p-6 grid grid-cols-3 gap-4 border border-slate-800/60 shadow-2xl">
            <div className="text-center border-r border-slate-800 last:border-0">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Duration</p>
              <p className="text-xs md:text-sm font-semibold text-slate-200">{item.duration || "Flexible"}</p>
            </div>
            <div className="text-center border-r border-slate-800 last:border-0">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Rating</p>
              <p className="text-xs md:text-sm font-semibold text-amber-400 flex items-center justify-center gap-1">
                4.9 <Star className="text-amber-400" style={{ fontSize: '14px' }} />
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Best Season</p>
              <p className="text-xs md:text-sm font-semibold text-slate-200">{item.bestTime || "All Year"}</p>
            </div>
          </div>

          {/* CTA Book Button */}
          <button className="mt-8 w-full py-4 bg-amber-500 text-black rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-white shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
            Inquire About This Experience
          </button>
        </div>

        {/* Right Side: Immersive Visuals (6 Columns) */}
        <div className="lg:col-span-6 relative">
          {/* Subtle Background Shape for Luxury Styling */}
          <div className="absolute -inset-4 bg-slate-900/40 rounded-[3rem] -z-10 transform rotate-1 border border-slate-800/50"></div>
          
          <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800/60">
            <img 
              src={normalizeImagePath(item.img)} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 brightness-[90%] hover:brightness-100"
            />
          </div>

          {/* Small Aesthetic Tag Floating below image */}
          <div className="absolute bottom-6 -left-6 bg-[#111726] shadow-2xl px-6 py-4 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-950/60 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <CalendarMonth style={{ fontSize: '16px' }} />
            </div>
            <div>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Curated By</p>
              <p className="text-xs font-bold text-slate-200">Jai Lanka Travels</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DiscoverDetail;