import React from 'react';
import { useNavigate } from 'react-router-dom';

const SigiriyaIntro = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
          
          {/* --- LEFT SIDE: IMAGE SECTION (Modern Asymmetric) --- */}
          <div className="w-full md:w-1/2 relative z-10">
            {/* Decorative Offset Box (යටින් තියෙන ලා පැහැති කොටුව) */}
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#f8fafc] rounded-tr-[100px] rounded-bl-[100px] z-0"></div>
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl border-4 border-white z-10 group aspect-[4/5]">
              <img 
                src="/images/sigiriya.jpg" 
                alt="Sigiriya Rock Fortress" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              {/* Image Overlay (පින්තූරය උඩින් යන ලා පැහැති තීරය) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            {/* Small Decorative Badge (පින්තූරය උඩ තියෙන කුඩා බැජ් එක) */}
            <div className="absolute top-10 -right-10 bg-[#00a2ff] text-white p-6 rounded-full shadow-2xl z-20 animate-pulse hidden md:block">
                <p className="text-[10px] font-black tracking-widest uppercase">UNESCO</p>
                <p className="text-xs font-serif italic">Site</p>
            </div>
          </div>

          {/* --- RIGHT SIDE: TEXT CONTENT (Elegant Typography) --- */}
          <div className="w-full md:w-1/2 text-center md:text-left relative z-20">
            {/* Section Tagline */}
            <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-[1px] w-10 bg-[#e6004c]/30"></span>
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#e6004c]">The Soul of Ceylon</span>
            </div>
            
            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter leading-[1.05] text-slate-950">
              Magical Moments, <br />
              Unforgettable <span className="italic font-light text-[#00a2ff]">experiences</span>
            </h2>
            
            {/* Paragraphs (Light & Clean) */}
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto md:mx-0">
                <p>
                    Ceylon is a truly beautiful island. From its cascading waterfalls to its emerald-green tea plantations and ancient ruins, our guides take you beyond the guidebook to uncover the soul of Sri Lanka.
                </p>
                <p className="opacity-80">
                    Whether you desire a thrilling wildlife safari, a serene wellness retreat, or a deep dive into our rich cultural heritage, we curate journeys that are as unique as you are.
                </p>
            </div>
            
            {/* Modern luxury style button */}
            <div className="mt-16 relative inline-block group">
                {/* Button background animation */}
                <div className="absolute inset-0 bg-slate-900 rounded-full translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300"></div>

               
                <button 
                onClick={() => navigate('/our-story')}
                className="relative bg-[#e6004c] text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 active:scale-95 shadow-lg shadow-red-500/30">
                    Discover Our Story
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigiriyaIntro;
