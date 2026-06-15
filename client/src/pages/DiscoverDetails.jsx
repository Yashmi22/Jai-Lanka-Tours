import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// 🎯 Safe Import Path එකකට Icons ටික මාරු කළා (Object/Undefined errors එන එක වළක්වන්න)
import ArrowBack from '@mui/icons-material/ArrowBack';
import LocationOn from '@mui/icons-material/LocationOn';
import Star from '@mui/icons-material/Star';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AccessTime from '@mui/icons-material/AccessTime';
import WbSunny from '@mui/icons-material/WbSunny';

const DiscoverDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 💡 Image path නිවැරදි කිරීමේ ලොජික් එක (Cloudinary සහ Local Images දෙකටම ගැලපේ)
  const normalizeImagePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const baseUrl = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL.replace('/api', '') : 'http://localhost:5000';
    return `${baseUrl}/${path.replace(/^\//, '')}`;
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // 🎯 FIX: සැබෑ Backend URL එකට ගැලපෙන ලෙස /packages කෑල්ල ඉවත් කරන ලදී
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
        const res = await axios.get(`${apiBaseUrl}/discover/${id}`);
        
        setItem(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading details from Jai Lanka Database:", err);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#070a13] font-serif italic text-xl text-amber-400/80 gap-4">
        <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-400 rounded-full animate-spin"></div>
        <span className="tracking-widest text-sm uppercase font-sans font-bold text-slate-500">Unveiling the essence of Ceylon...</span>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#070a13] px-4">
        <div className="bg-[#0e1424] border border-slate-800 p-8 rounded-3xl text-center max-w-md w-full shadow-2xl">
          <p className="text-slate-400 font-serif italic mb-6 text-lg">Destination not found.</p>
          <button 
            onClick={() => navigate('/discover')} 
            className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:brightness-110 transition-all shadow-lg shadow-amber-500/10"
          >
            Go Back to Explorations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#070a13] font-body text-slate-200 antialiased relative overflow-x-hidden pb-24">
      
      {/* Dynamic Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cover bg-center rounded-full opacity-[0.04] blur-[120px] pointer-events-none transform translate-x-1/4 -translate-y-1/4" style={{ backgroundImage: `url(${normalizeImagePath(item.img)})` }}></div>
      <div className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-amber-500 rounded-full opacity-[0.02] blur-[150px] pointer-events-none"></div>

      {/* Top Header Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-8 md:pt-12 relative z-10">
        <button 
          onClick={() => navigate('/discover')}
          className="flex items-center gap-2 group text-[10px] md:text-11px font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-amber-400 transition-colors bg-slate-900/40 backdrop-blur-md border border-slate-800/60 px-4 py-2.5 rounded-full w-fit shadow-lg"
        >
          <ArrowBack fontSize="small" className="group-hover:-translate-x-1.5 transition-transform duration-300 text-amber-500" /> Back to Explorations
        </button>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Side: Premium Editorial Details */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:sticky lg:top-12">
          
          {/* Category & Tag Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] font-extrabold tracking-[0.15em] uppercase bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-2 rounded-xl shadow-inner">
              {item.category}
            </span>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase bg-slate-900/60 border border-slate-800/80 text-slate-300 px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm">
              <LocationOn className="text-amber-400" style={{ fontSize: '13px' }} /> {item.type}
            </span>
          </div>

          {/* Destination Title */}
          <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-tight leading-[1.15] mb-5 uppercase drop-shadow-sm">
            {item.name}
          </h1>
          
          {/* Catchy Tagline */}
          <p className="text-amber-400 font-serif italic text-xl md:text-2xl mb-8 tracking-wide border-l-2 border-amber-500/30 pl-4 py-1">
            "{item.tag}"
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-amber-500/40 to-transparent mb-8"></div>

          {/* Description Block */}
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-10 tracking-wide whitespace-pre-line max-w-xl text-justify">
            {item.content || item.desc} 
          </p>

          {/* Glassmorphic Metrics Card Grid */}
          <div className="bg-gradient-to-br from-slate-900/80 to-[#0e1526]/80 backdrop-blur-xl rounded-2xl p-6 grid grid-cols-3 gap-2 border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            <div className="text-center border-r border-slate-800/80 flex flex-col items-center justify-center px-2">
              <AccessTime className="text-slate-500 mb-1.5" style={{ fontSize: '16px' }} />
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Duration</p>
              <p className="text-xs md:text-sm font-semibold text-slate-200">{item.duration || "Flexible"}</p>
            </div>
            
            <div className="text-center border-r border-slate-800/80 flex flex-col items-center justify-center px-2">
              <div className="flex items-center text-amber-400 gap-0.5 mb-1">
                <Star style={{ fontSize: '15px' }} />
                <span className="text-xs md:text-sm font-bold text-slate-200">4.9</span>
              </div>
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Rating</p>
              <p className="text-[10px] text-slate-400 font-medium">Verified</p>
            </div>
            
            <div className="text-center flex flex-col items-center justify-center px-2">
              <WbSunny className="text-slate-500 mb-1.5" style={{ fontSize: '16px' }} />
              <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Best Season</p>
              <p className="text-xs md:text-sm font-semibold text-slate-200">{item.bestTime || "All Year"}</p>
            </div>

          </div>

          {/* Premium Call to Action Button */}
          <button className="mt-8 w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl text-xs font-bold tracking-[0.2em] uppercase hover:shadow-2xl hover:shadow-amber-500/20 hover:brightness-110 active:scale-[0.99] transition-all duration-300 transform shadow-xl">
            Inquire About This Experience
          </button>
        </div>

        {/* Right Side: Immersive Visual Showcase */}
        <div className="lg:col-span-6 relative mt-6 lg:mt-0 w-full group">
          
          <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-[2.5rem] -z-10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-4 bg-slate-950/60 rounded-[2.2rem] -z-10 transform rotate-2 border border-slate-800/40 group-hover:rotate-1 transition-transform duration-500"></div>
          
          <div className="w-full aspect-[4/5] rounded-[2.2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-slate-800/80 bg-slate-900 relative">
            <img 
              src={normalizeImagePath(item.img)} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 brightness-[88%] group-hover:brightness-[95%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Verification Tag */}
          <div className="absolute -bottom-5 -left-4 md:-left-6 bg-gradient-to-r from-[#0e1424] to-[#151e33] shadow-[0_15px_35px_rgba(0,0,0,0.4)] px-5 py-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3.5 backdrop-blur-md">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
              <CalendarMonth style={{ fontSize: '18px' }} />
            </div>
            <div>
              <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.12em]">Curated Brand</p>
              <p className="text-xs font-bold text-slate-200 tracking-wide">Jai Lanka Travels</p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default DiscoverDetail;