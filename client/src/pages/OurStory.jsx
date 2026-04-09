import React from 'react';

const OurStory = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfdfe] font-sans text-[#1a1c1e] antialiased">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 z-10">
          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#005483] mb-6 block">Our Legacy</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 tracking-tighter leading-tight">
            The Heart <br /> of <span className="italic text-[#005483]">Ayubowan</span>
          </h1>
          <p className="max-w-md text-slate-500 font-medium leading-relaxed mb-10 text-sm md:text-base">
            Born from a deep love for the island's hidden trails, Jai Lanka is more than a travel agency. We are the gatekeepers of authentic Sri Lankan soul, curating moments that stay with you forever.
          </p>
          <div className="p-8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-l-4 border-[#005483] italic text-sm text-slate-600 rounded-r-2xl max-w-md">
            "True Sri Lankan hospitality isn't just a service; it's a feeling of coming home."
            <span className="block mt-4 font-bold not-italic text-[10px] uppercase tracking-[0.3em] text-[#005483]">
              — Founders of Jai Lanka
            </span>
          </div>
        </div>
        
        {/* --- HERO IMAGE WITH DOUBLE GLASS OVERLAYS --- */}
        <div className="flex-1 relative mt-12 md:mt-0">
          {/* Main Image Container */}
          <div className="w-full aspect-[4/5] bg-slate-100 rounded-[3.5rem] overflow-hidden shadow-2xl relative border-[8px] border-white">
             <img 
               src="/images/story-hero.jpg" 
               alt="Sri Lanka Heritage" 
               className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
             />
             
             {/* 1. Inside Glass Square (Bottom Right) */}
             <div className="absolute bottom-6 right-6 w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl flex items-center justify-center p-6 text-center shadow-2xl z-10">
               <div>
                 <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/80 mb-2">Expertise</p>
                 <h3 className="text-2xl md:text-3xl font-serif text-white font-light">14+ Years</h3>
                 <div className="w-8 h-[1px] bg-white/30 mx-auto mt-3"></div>
               </div>
             </div>
          </div>

          {/* 2. Outside Glass Square (Floating Bottom Left) */}
          <div className="absolute -bottom-10 -left-6 md:-left-12 w-40 h-40 md:w-48 md:h-48 bg-white/70 backdrop-blur-lg border border-white/50 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-6 text-center z-20">
             <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-[#005483]/60 mb-2">Established</span>
             <h3 className="text-4xl md:text-5xl font-serif text-[#005483] italic">Since</h3>
             <h3 className="text-4xl md:text-5xl font-serif text-[#005483] mt-1">2012</h3>
          </div>
        </div>
      </section>

      {/* --- 2. TIMELINE SECTION (Modern Minimalist Cards) --- */}
      <section className="py-32 px-6 bg-[#f8fafc]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-5xl font-serif italic mb-6">A Decade of Discovery</h2>
             <div className="w-20 h-1 bg-[#005483] mx-auto rounded-full opacity-20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Timeline Cards */}
            {[
              { year: "2012", title: "THE GENESIS", desc: "Started with a single vintage Land Rover and a passion for showing travelers the 'unseen' Sri Lanka." },
              { year: "2018", title: "EXPANSION", desc: "Opened boutique hubs in Ella and Galle, curating over 200 unique local experiences.", active: true },
              { year: "2026", title: "THE FUTURE", desc: "Pioneering sustainable travel models and empowering local artisans through community-led tourism." }
            ].map((item, index) => (
              <div key={index} className={`p-12 rounded-[3rem] transition-all duration-700 ${item.active ? 'bg-[#005483] text-white shadow-2xl scale-105' : 'bg-white shadow-sm hover:shadow-xl text-slate-800'}`}>
                <h3 className={`text-5xl font-serif mb-8 ${item.active ? 'text-white/30' : 'text-slate-100'}`}>{item.year}</h3>
                <h4 className="font-bold text-[11px] tracking-[0.3em] uppercase mb-4">{item.title}</h4>
                <p className={`text-sm leading-relaxed ${item.active ? 'text-blue-100/80' : 'text-slate-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SUSTAINABILITY (The Promise) --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#1a302e] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-green-400 mb-10 block">Our Commitment</span>
            <h2 className="text-4xl md:text-7xl font-serif italic mb-10 leading-tight">Preserving the paradise <br /> we call home.</h2>
            <p className="text-lg opacity-70 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
              We believe travel is a privilege. That’s why 10% of our profits go directly to reef restoration and forest conservation.
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 text-[10px] font-bold tracking-[0.3em] uppercase opacity-80 border-t border-white/10 pt-16">
               <span className="flex items-center gap-3">● Carbon Neutral</span>
               <span className="flex items-center gap-3">● Zero Plastic</span>
               <span className="flex items-center gap-3">● Local First</span>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black opacity-[0.03] select-none pointer-events-none">
            PURE
          </div>
        </div>
      </section>

      {/* --- 4. THE TEAM (Clean Grid) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20">
           <div>
             <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-400 mb-2 block">The Minds Behind</span>
             <h2 className="text-5xl md:text-6xl font-serif italic">Meet Your Curators</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
           {/* Founder */}
           <div className="md:col-span-7 group relative h-[650px] rounded-[3.5rem] overflow-hidden shadow-lg">
              <img src="/images/team1.jpg" alt="Founder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005483]/90 via-transparent to-transparent p-12 flex flex-col justify-end text-white">
                 <h3 className="text-4xl font-serif mb-2">Arjun Perera</h3>
                 <p className="text-[10px] tracking-[0.4em] uppercase text-blue-300">Founder & Lead Explorer</p>
              </div>
           </div>

           {/* Team Members */}
           <div className="md:col-span-5 flex flex-col gap-10">
              {[
                { name: "Ishini Silva", role: "Experience Designer", img: "/images/team2.jpg", dark: false },
                { name: "Ruwan Bandara", role: "Wildlife Specialist", img: "/images/team3.jpg", dark: true }
              ].map((member, i) => (
                <div key={i} className={`p-10 rounded-[3rem] flex items-center gap-8 transition-all ${member.dark ? 'bg-[#1a1c1e] text-white shadow-2xl' : 'bg-white border border-slate-100 shadow-sm hover:shadow-xl'}`}>
                   <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0 shadow-md">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-serif">{member.name}</h4>
                      <p className={`text-[9px] font-bold tracking-widest uppercase mt-2 ${member.dark ? 'text-blue-400' : 'text-[#005483]'}`}>{member.role}</p>
                   </div>
                </div>
              ))}
              
              {/* Join Team Card */}
              <div className="flex-1 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center p-10 text-center group cursor-pointer hover:bg-white hover:border-[#005483] transition-all">
                 <p className="text-slate-400 font-serif italic mb-2">Want to join us?</p>
                 <span className="text-[10px] font-bold tracking-widest uppercase text-[#005483] group-hover:underline underline-offset-8">View Openings</span>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-32 px-6 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-10">Every journey is a story. <br /> Let's start yours today.</h2>
            <button className="bg-[#1a1c1e] text-white px-14 py-6 rounded-full text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#005483] transition-all duration-500 shadow-2xl hover:-translate-y-2">
               Plan Your Journey
            </button>
            <p className="mt-32 text-slate-300 text-[10px] tracking-[0.8em] uppercase">© 2026 JAI LANKA TRAVELS</p>
         </div>
      </footer>
    </div>
  );
};

export default OurStory;