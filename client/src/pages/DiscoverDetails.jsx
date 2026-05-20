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
      <div className="min-h-screen flex items-center justify-center bg-[#fcfdfe] font-serif italic text-xl text-slate-400">
        Unveiling the essence of Ceylon...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfdfe]">
        <p className="text-slate-500 font-serif italic mb-4">Destination not found.</p>
        <button onClick={() => navigate('/discover')} className="text-sm font-bold text-[#005483] uppercase tracking-widest">Go Back</button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#fcfdfe] font-sans text-[#1a1c1e] antialiased pb-30">
      
      {/* Floating Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <button 
          onClick={() => navigate('/discover')}
          className="flex items-center gap-2 group text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#005483] transition-colors"
        >
          <ArrowBack fontSize="small" className="group-hover:-translate-x-1 transition-transform" /> Back to Explorations
        </button>
      </div>

      {/* Main Luxury Layout */}
      <main className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Editorial Details (6 Columns) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black tracking-widest uppercase bg-slate-100 text-[#005483] px-3 py-1.5 rounded-md">
              {item.category}
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center gap-1">
              <LocationOn style={{ fontSize: '12px' }} /> {item.type}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-tight mb-4">
            {item.name}
          </h1>
          
          <p className="text-[#005483] font-serif italic text-xl md:text-2xl mb-8 tracking-wide">
            "{item.tag}"
          </p>

          <div className="w-20 h-[1px] bg-slate-200 mb-8"></div>

          {/* Full Rich Text Content */}
          <p className="text-slate-600 text-base font-light leading-relaxed mb-10 whitespace-pre-line">
            {item.content || item.desc} 
            {/* සටහන: Backend එකේ 'content' නැත්නම් පවතින 'desc' එකම පෙන්වයි */}
          </p>

          {/* Quick Package Highlights Card */}
          <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-3 gap-4 border border-slate-100">
            <div className="text-center border-r border-slate-200 last:border-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Duration</p>
              <p className="text-sm font-semibold text-slate-800">{item.duration || "Flexible"}</p>
            </div>
            <div className="text-center border-r border-slate-200 last:border-0">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Rating</p>
              <p className="text-sm font-semibold text-slate-800 flex items-center justify-center gap-1">
                4.9 <Star className="text-amber-400" style={{ fontSize: '14px' }} />
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Best Season</p>
              <p className="text-sm font-semibold text-slate-800">{item.bestTime || "All Year"}</p>
            </div>
          </div>

          {/* CTA Book Button */}
          <button className="mt-8 w-full py-5 bg-[#005483] text-white rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:bg-slate-900 shadow-xl transition-all duration-300">
            Inquire About This Experience
          </button>
        </div>

        {/* Right Side: Immersive Visuals (6 Columns) */}
        <div className="lg:col-span-6 relative">
          {/* Subtle Background Shape for Luxury Styling */}
          <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 transform rotate-1"></div>
          
          <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src={normalizeImagePath(item.img)} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>

          {/* Small Aesthetic Tag Floating below image */}
          <div className="absolute bottom-6 -left-6 bg-white shadow-xl px-6 py-4 rounded-2xl border border-slate-50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#cfe4f2] flex items-center justify-center text-[#005483]">
              <CalendarMonth style={{ fontSize: '16px' }} />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Curated By</p>
              <p className="text-xs font-bold text-slate-800">Jai Lanka Travels</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DiscoverDetail;