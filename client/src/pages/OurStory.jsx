import React from 'react';

const OurStory = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfdfe] font-sans text-[#1a1c1e] antialiased">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 z-10">
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tighter leading-tight">
            The Heart <br /> of <span className="italic text-[#005483]">Ayubowan</span>
          </h1>
          <p className="max-w-md text-slate-500 font-medium leading-relaxed mb-8">
            More than a travel agency, we are curators of the Sri Lankan soul. Jai Lanka was born from a passion to share the quiet rhythms of our island home with the world.
          </p>
          <div className="p-6 bg-white/50 border-l-4 border-[#005483] backdrop-blur-sm italic text-sm text-slate-600 shadow-sm">
            "True Sri Lankan hospitality isn't a service, it's our nature."
            <span className="block mt-2 font-bold not-italic text-[10px] uppercase tracking-widest">— Founders of Jai Lanka</span>
          </div>
        </div>
        
        {/* Editorial Image with Multiple Overlays */}
        <div className="flex-1 relative">
          {/* Main Image Container */}
          <div className="w-full aspect-[4/5] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
             <img 
               src="/images/story-hero.jpg" 
               alt="Our Heritage" 
               className="w-full h-full object-cover"
             />
             
             {/* 1. Glass Square INSIDE Image (Bottom Right) */}
             <div className="absolute bottom-8 right-8 w-40 h-40 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl flex items-center justify-center p-6 text-center shadow-2xl z-10">
               <div>
                 <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/70 mb-2">Experience</p>
                 <h3 className="text-3xl font-serif text-white font-light">14+ Years</h3>
                 <p className="text-[10px] text-white/60 mt-2 tracking-widest uppercase">Expertise</p>
               </div>
             </div>
          </div>

          {/* 2. Glass Square OUTSIDE Image (Bottom Left) */}
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-6 text-center z-20">
             <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#005483]/60 mb-2">Established</span>
             <h3 className="text-4xl font-serif text-[#005483] italic">Since</h3>
             <h3 className="text-4xl font-serif text-[#005483] mt-1">2012</h3>
             <div className="w-8 h-[2px] bg-[#005483]/20 mt-4"></div>
          </div>
        </div>
      </section>

      {/* --- 2. A Decade of Discovery (Timeline) --- */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-serif mb-4 italic">A Decade of Discovery</h2>
             <div className="w-16 h-1 bg-[#005483] mx-auto opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-4xl font-serif text-slate-200 mb-4 group-hover:text-[#005483]">2012</h3>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4">The Humble Beginning</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Started with a single vintage jeep and a dream to show travelers the hidden waterfalls of Knuckles.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-[#005483]">
              <h3 className="text-4xl font-serif text-[#005483] mb-4">2018</h3>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Expanding Horizons</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Opened our first boutique office and curated over 100+ unique paths across the southern coast.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <h3 className="text-4xl font-serif text-slate-200 mb-4">2026</h3>
              <h4 className="font-bold text-xs uppercase tracking-widest mb-4">Today & Beyond</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Leading the way in sustainable luxury travel, ensuring 10% of our profits go back to reef restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Our Promise (Green Section) --- */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto bg-[#1a3a3a] rounded-[3.5rem] p-12 md:p-20 text-center text-white relative z-10 shadow-2xl">
          <div className="mb-8 inline-block p-4 bg-white/10 rounded-full">
             <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.172 6.757a3.002 3.002 0 114.242 4.243 3.002 3.002 0 01-4.242-4.243zm9.656 4.243a3.002 3.002 0 11-4.242-4.243 3.002 3.002 0 014.242 4.243z"/></svg>
          </div>
          <h2 className="text-4xl font-serif mb-6 italic tracking-tight">Our Promise to the Island</h2>
          <p className="text-sm md:text-lg opacity-80 font-light leading-relaxed mb-12">
            We believe that travel should be a force for good. Our mission is to preserve the delicate beauty of Sri Lanka for generations to come. Every journey booked with Jai Lanka directly supports local community growth.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">
             <span className="flex items-center gap-2">● Carbon Neutral</span>
             <span className="flex items-center gap-2">● Plastic Free</span>
             <span className="flex items-center gap-2">● Local First</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black opacity-[0.03] select-none pointer-events-none">
          SUSTAINABLE
        </div>
      </section>

      {/* --- 4. Meet Your Curators --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-400 block mb-2">The Minds Behind</span>
          <h2 className="text-5xl font-serif italic tracking-tighter">Meet Your Curators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 group relative overflow-hidden rounded-[2.5rem] bg-slate-100 h-[600px] shadow-sm">
            <img src="/images/team1.jpg" alt="CEO" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#005483]/90 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
              <h3 className="text-3xl font-serif mb-1">Arjun Perera</h3>
              <p className="text-xs tracking-[0.3em] uppercase opacity-70">Founder & Expedition Guide</p>
            </div>
          </div>

          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-slate-200 rounded-2xl mb-6 overflow-hidden">
                   <img src="/images/team2.jpg" alt="Team" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif">Ishini Silva</h4>
                <p className="text-[9px] font-bold tracking-widest uppercase text-[#005483] mt-2">Travel Designer</p>
             </div>
             <div className="bg-[#1a1c1e] text-white p-10 rounded-[2.5rem] shadow-xl">
                <div className="w-16 h-16 bg-slate-700 rounded-2xl mb-6 overflow-hidden">
                   <img src="/images/team3.jpg" alt="Team" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif">Ruwan Bandara</h4>
                <p className="text-[9px] font-bold tracking-widest uppercase text-blue-400 mt-2">Wildlife Specialist</p>
             </div>
             <div className="sm:col-span-2 bg-slate-100/50 p-10 rounded-[2.5rem] flex items-center gap-10 hover:bg-white hover:shadow-md transition-all">
                <div className="w-28 h-28 bg-slate-200 rounded-3xl overflow-hidden shrink-0 shadow-inner">
                    <img src="/images/team4.jpg" alt="Team" className="w-full h-full object-cover" />
                </div>
                <div>
                   <h4 className="text-2xl font-serif">Kavindya Perera</h4>
                   <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-2">Sustainability Lead</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 5. Final CTA --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-[#005483] rounded-[3.5rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight italic">Ready to start your <br /> Sri Lankan story?</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-white text-[#005483] px-12 py-5 rounded-full font-bold tracking-widest text-[10px] uppercase hover:scale-105 transition-all shadow-lg">Start Planning</button>
               <button className="border border-white/20 text-white px-12 py-5 rounded-full font-bold tracking-widest text-[10px] uppercase hover:bg-white/10 transition-all">Browse Itineraries</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </section>

      <footer className="py-16 text-center text-slate-400 text-[10px] tracking-[0.5em] uppercase">
        &copy; 2026 JAB TOUR — Crafted with Soul
      </footer>
    </div>
  );
};

export default OurStory;