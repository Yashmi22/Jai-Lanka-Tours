import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-200 pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-xs text-amber-500 font-bold uppercase tracking-[0.3em]">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-wide uppercase">
            The Essence of <span className="text-amber-400 font-normal">Jai Lanka</span>
          </h1>
          <div className="w-16 h-[2px] bg-amber-500/50 mx-auto mt-4"></div>
          <p className="text-slate-400 text-base font-light leading-relaxed pt-2">
            Crafting bespoke luxury journeys and curated exotic experiences across the teardrop isle for the modern global traveler.
          </p>
        </div>

        {/* 2. Content & Image Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Visual Grid Elements */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent blur-2xl -z-10 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800" 
              alt="Sri Lanka Cultural Heritage" 
              className="w-full h-64 object-cover rounded-2xl border border-slate-800/80 shadow-2xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800" 
              alt="Sri Lanka Wildlife Safari" 
              className="w-full h-64 object-cover rounded-2xl border border-slate-800/80 shadow-2xl mt-8"
            />
          </div>

          {/* Narrative Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-white uppercase tracking-wider">
              Who We <span className="text-amber-400 font-normal">Are</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed text-justify font-light">
              Founded on a deep-rooted passion for island hospitality, Jai Lanka stands as a hallmark of premium travel in Sri Lanka. We don't just offer standard itineraries; we design unforgettable narratives tailored to your exact pacing, curiosities, and comforts.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed text-justify font-light">
              From the mist-shrouded tea plantations of Nuwara Eliya to the untouched wilderness of Yala and the ancient ruins of Polonnaruwa, our local expertise unlocks exclusive access to the true soul of Ceylon.
            </p>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link 
                to="/plan-journey" 
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-amber-500/10"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Core Values / Pillars Section */}
        <div className="border-t border-slate-900 pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-slate-900/30 border border-slate-800/40 p-8 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
              <span className="text-3xl text-amber-400 block mb-4 group-hover:scale-110 transition-transform duration-300">✦</span>
              <h4 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">Bespoke Luxury</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Every itinerary is a blank canvas crafted exclusively around your personal luxury standards and expectations.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-900/30 border border-slate-800/40 p-8 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
              <span className="text-3xl text-amber-400 block mb-4 group-hover:scale-110 transition-transform duration-300">✦</span>
              <h4 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">Local Expertise</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Our handpicked local guides offer deep contextual insights and show you hidden gems skipped by mainstream tourism.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-900/30 border border-slate-800/40 p-8 rounded-2xl hover:border-amber-500/30 transition-all duration-300 group">
              <span className="text-3xl text-amber-400 block mb-4 group-hover:scale-110 transition-transform duration-300">✦</span>
              <h4 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">Sustainable Travel</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                We are fiercely committed to eco-friendly practices that support local communities and protect our island's biodiversity.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;