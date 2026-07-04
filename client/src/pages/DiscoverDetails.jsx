import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import ArrowBack from '@mui/icons-material/ArrowBack';
import LocationOn from '@mui/icons-material/LocationOn';
import Star from '@mui/icons-material/Star';
import AccessTime from '@mui/icons-material/AccessTime';
import WbSunny from '@mui/icons-material/WbSunny';
import LocalMall from '@mui/icons-material/LocalMall';

const DiscoverDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  
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
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
        const res = await axios.get(`${apiBaseUrl}/discover/${id}`);
        setItem(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error loading details from Jai Lanka Database:", err);
        setItem(null);
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
    <div className="w-full min-h-screen bg-[#070a13] font-body text-slate-200 antialiased relative overflow-x-hidden pb-32">
      
      {/* 🌌 Background Glow Effect: Low-quality image එක Ultra-Blur කර පසුබිමට පමණක් යොදා ඇත */}
      <div 
        className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-cover bg-center rounded-full opacity-[0.08] blur-[160px] pointer-events-none transform -translate-y-1/3" 
        style={{ backgroundImage: `url(${normalizeImagePath(item.img)})` }}
      ></div>

      {/* Top Header Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 relative z-10">
        <button 
          onClick={() => navigate('/discover')}
          className="flex items-center gap-2 group text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-amber-400 transition-colors bg-slate-900/60 backdrop-blur-md border border-slate-800/60 px-5 py-3 rounded-full w-fit shadow-xl"
        >
          <ArrowBack fontSize="small" className="group-hover:-translate-x-1.5 transition-transform duration-300 text-amber-500" /> Back to Explorations
        </button>
      </div>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 mt-8 md:mt-12 relative z-10">
        
        {/* MAGAZINE-STYLE TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Image & Editorial Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 📸 Corrected Elegant & Small Image Section (No more blurriness!) */}
            <div className="max-w-xl relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/20 to-transparent rounded-[2rem] -z-10 blur-xl opacity-40"></div>
              
              <div className="w-full aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800/90 bg-slate-900 relative">
                <img 
                  src={normalizeImagePath(item.img)} 
                  alt={item.name} 
                  className="w-full h-full object-cover brightness-[95%] transition-transform duration-[1.5s] group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Floating Brand Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0b101f]/90 backdrop-blur-md shadow-lg px-4 py-2 rounded-xl border border-slate-700/30 flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <LocalMall style={{ fontSize: '12px' }} />
                  </div>
                  <div>
                    <p className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Signature Tour</p>
                    <p className="text-[10px] font-semibold text-white">Jai Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Category & Tag Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[9px] font-extrabold tracking-[0.2em] uppercase bg-amber-500 text-black px-4 py-1.5 rounded-lg font-mono shadow-md">
                {item.category}
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase bg-slate-900/80 border border-slate-800/80 text-slate-300 px-4 py-1.5 rounded-lg flex items-center gap-2">
                <LocationOn className="text-amber-400" style={{ fontSize: '14px' }} /> {item.type}
              </span>
            </div>

            {/* Destination Title & Tagline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tight uppercase leading-tight">
                {item.name}
              </h1>
              <p className="text-amber-400/90 font-serif italic text-lg md:text-xl tracking-wide border-l-4 border-amber-500 pl-5 py-1 bg-gradient-to-r from-amber-500/[0.02] to-transparent rounded-r-xl">
                "{item.tag}"
              </p>
            </div>

            <div className="w-24 h-[1px] bg-gradient-to-r from-amber-500 to-transparent my-6"></div>

            {/* Description Block */}
            <div className="text-slate-300 text-sm md:text-base font-light leading-relaxed tracking-wide space-y-6 text-justify">
              <p className="whitespace-pre-line first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                {item.content || item.desc}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphic Sticky Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-gradient-to-b from-slate-900/90 to-[#0e1629]/90 backdrop-blur-2xl rounded-3xl p-8 border border-slate-800/90 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
              
              <h3 className="text-white font-headline text-xs tracking-[0.25em] uppercase font-bold mb-6 text-slate-400 border-b border-slate-800 pb-4 flex items-center justify-between">
                <span>Voyage Overview</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </h3>

              {/* Metrics Rows */}
              <div className="space-y-5 mb-8">
                {/* 1. Duration Row */}
                <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-slate-800/40 hover:border-slate-700/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <AccessTime style={{ fontSize: '16px' }} />
                    </div>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">Optimal Duration</span>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{item.duration || "Flexible"}</span>
                </div>

                {/* 2. Rating Row */}
                <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-slate-800/40 hover:border-slate-700/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <Star style={{ fontSize: '16px' }} />
                    </div>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">Guest Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">{item.rating || "4.9"}</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">/ Elite</span>
                  </div>
                </div>

                {/* 3. Season Row */}
                <div className="flex items-center justify-between p-3.5 bg-slate-950/40 rounded-xl border border-slate-800/40 hover:border-slate-700/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                      <WbSunny style={{ fontSize: '16px' }} />
                    </div>
                    <span className="text-xs text-slate-400 font-medium tracking-wide">Best Time to Visit</span>
                  </div>
                  <span className="text-xs font-bold text-slate-200 tracking-wide">{item.bestTime || "All Year"}</span>
                </div>
              </div>

              {/* Premium Call to Action Button */}
              <button className="w-full py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black rounded-xl text-xs font-black tracking-[0.25em] uppercase hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] hover:brightness-110 active:scale-[0.98] transition-all duration-300 transform shadow-xl">
                Inquire About This Journey
              </button>
              
              <p className="text-center text-[9px] text-slate-500 uppercase tracking-widest mt-4 font-medium">
                Tailored Luxury By Jai Lanka Experts
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DiscoverDetail;