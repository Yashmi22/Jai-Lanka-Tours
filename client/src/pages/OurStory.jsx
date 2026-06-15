import React from 'react';

const OurStory = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-[#0b0f19] font-body text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
      
        {/* --- 1. HIGH-END LUXURY HERO SECTION --- */}
        <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 z-10 text-left">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-400 bg-amber-950/40 border border-amber-600/30 px-5 py-2 rounded-full mb-6 inline-block">
              The Genesis of Luxury
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-light text-white tracking-wide uppercase leading-tight mb-8">
              A New Era <br /> of <span className="font-serif italic text-amber-400 normal-case">Ceylon</span> Discovery
            </h1>
            <p className="max-w-xl text-slate-400 font-light leading-relaxed mb-10 text-sm md:text-base">
              Jai Lanka Travel & Tours was founded with a singular, unyielding vision: to redefine island exploration for the world's most discerning travelers. We don't believe in templates or crowded trails. We craft masterfully curated, 100% private single and multi-day voyages that transform Sri Lanka’s untamed beauty into your personal luxury sanctuary.
            </p>
            
            {/* 💡 Link වෙනුවට standard <a> tag එකක් දැම්මා */}
            <div className="mb-10">
              <a 
                href="/contact" 
                className="bg-amber-500 text-black px-8 py-4 rounded-xl text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-xl inline-block"
              >
                Plan Your Journey
              </a>
            </div>

            <div className="p-8 bg-[#111726] shadow-2xl border-l-4 border-amber-500 italic text-sm text-slate-300 rounded-r-2xl max-w-lg border border-y-slate-800/60 border-r-slate-800/60">
              "True luxury isn't just about premium stays; it's the absolute freedom of experiencing a destination entirely on your own terms, guided by passion."
              <span className="block mt-4 font-bold not-italic text-[10px] uppercase tracking-[0.3em] text-amber-400">
                — Founders of Jai Lanka
              </span>
            </div>
          </div>
          
          {/* --- HERO IMAGE CONTAINER --- */}
          <div className="flex-1 relative mt-12 md:mt-0 w-full">
            <div className="w-full aspect-[4/5] bg-slate-900 rounded-[3.5rem] overflow-hidden shadow-2xl relative border-[4px] border-slate-800/60">
               <img 
                 src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" 
                 alt="Sri Lanka Luxury Expedition" 
                 className="w-full h-full object-cover brightness-[75%] hover:brightness-95 transition-all duration-1000 scale-105 hover:scale-100"
               />
            </div>

            {/* Outside Glass Square */}
            <div className="absolute -bottom-10 -left-4 md:-left-10 w-40 h-40 md:w-48 md:h-48 bg-[#111726]/90 backdrop-blur-lg border border-slate-800 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex flex-col items-center justify-center p-6 text-center z-20">
               <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-2">Inception</span>
               <h3 className="text-4xl font-serif text-amber-400 italic">Established</h3>
               <h3 className="text-3xl font-headline text-white mt-1 uppercase tracking-widest">Brand New</h3>
            </div>
          </div>
        </section>

        {/* --- 2. VISION & PILLARS SECTION --- */}
        <section className="py-32 px-6 bg-[#060a13]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-400 block mb-2">Our Roadmap</span>
               <h2 className="text-4xl md:text-5xl font-headline font-light uppercase tracking-wide text-white">The Pillars <span className="font-serif italic text-amber-400 normal-case">of Our</span> Journey</h2>
               <div className="w-20 h-[1px] bg-amber-500 mx-auto mt-6 opacity-30"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "THE VISION", title: "Bespoke Architecture", desc: "We started with a blank canvas to eliminate mass commercial tourism. Every journey we build is hand-drawn, ensuring you avoid the crowds and templates.", active: false },
                { label: "THE EXPERIENCE", title: "Elite Fleet & Guides", desc: "Deploying premium chauffeur-driven vehicles and handpicked VIP specialists to elevate single-day excursions and cross-country expeditions alike.", active: true },
                { label: "THE PLEDGE", title: "Empowering Ceylon", desc: "Connecting our prestigious guests directly with local heritage custodians, unseen artisans, and eco-conservation sanctuaries.", active: false }
              ].map((item, index) => (
                <div key={index} className={`p-10 rounded-[3rem] transition-all duration-500 text-left border ${item.active ? 'bg-amber-500 text-black border-amber-500 shadow-2xl scale-105' : 'bg-[#111726] border-slate-800 text-slate-100 shadow-xl'}`}>
                  <span className={`text-[9px] font-bold tracking-widest uppercase block mb-6 ${item.active ? 'text-black/60' : 'text-amber-400'}`}>{item.label}</span>
                  <h4 className="font-headline font-bold text-xl uppercase tracking-wide mb-4">{item.title}</h4>
                  <p className={`text-sm leading-relaxed font-light ${item.active ? 'text-black/80 font-normal' : 'text-slate-400'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. THE PROMISE --- */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#12192c] to-[#0d1424] rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl border border-amber-500/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-400 mb-8 block">The Jai Lanka Promise</span>
              <h2 className="text-3xl md:text-6xl font-headline font-light uppercase tracking-wider mb-10 leading-tight">Preserving <span className="font-serif italic text-amber-400 normal-case">the Pristine</span> Paradise</h2>
              <p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                As a progressive and modern luxury travel brand, we deeply believe that exploration is a privilege that comes with responsibility. Jai Lanka commits a portion of its proceeds directly to local reef restoration and community-led historical preservation.
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400/90 border-t border-slate-800 pt-16">
                 <span className="flex items-center gap-2">● 100% Carbon Neutralized</span>
                 <span className="flex items-center gap-2">● Zero Single-Use Plastics</span>
                 <span className="flex items-center gap-2">● Community First Sourcing</span>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.01] select-none pointer-events-none font-headline">
              PRIVÉ
            </div>
          </div>
        </section>

        {/* --- 4. NEW MODERN MANIFESTO SECTION --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
             
             <div className="md:col-span-5 text-left">
                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-500 mb-4 block">The Elite Manifesto</span>
                <h2 className="text-4xl md:text-5xl font-headline font-light uppercase tracking-wide text-white leading-tight mb-6">
                   Our Mindset. <br />Your <span className="font-serif italic text-amber-400 normal-case">Masterpiece</span> Voyage.
                </h2>
                <p className="text-slate-400 font-light text-sm leading-relaxed mb-6">
                   At Jai Lanka, we bypass the conventional executive structure. We operate as a collective of premium travel designers, heritage curators, and ground specialists under the direction of Yashmika Perera. 
                </p>
                <div className="w-12 h-[1px] bg-amber-500 opacity-40"></div>
             </div>

             <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-8 bg-[#111726] border border-slate-800/80 rounded-[2.5rem] shadow-xl text-left hover:border-amber-500/30 transition-all duration-300">
                   <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">01 / CREATION</div>
                   <h3 className="text-lg font-headline font-semibold text-white uppercase tracking-wider mb-2">Tailored Architecture</h3>
                   <p className="text-slate-400 font-light text-xs leading-relaxed">No pre-packaged tours. Each itinerary is engineered from scratch around your physical pace, curiosity, and comfort.</p>
                </div>

                <div className="p-8 bg-[#060a13] border border-slate-900 rounded-[2.5rem] shadow-xl text-left hover:border-amber-500/30 transition-all duration-300">
                   <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">02 / STEWARDSHIP</div>
                   <h3 className="text-lg font-headline font-semibold text-white uppercase tracking-wider mb-2">White-Glove Support</h3>
                   <p className="text-slate-400 font-light text-xs leading-relaxed">From airport gate assistance to midnight route alterations, our discrete support team remains active 24/7.</p>
                </div>

                <div className="p-8 bg-[#060a13] border border-slate-900 rounded-[2.5rem] shadow-xl text-left hover:border-amber-500/30 transition-all duration-300">
                   <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-4">03 / ACCESS</div>
                   <h3 className="text-lg font-headline font-semibold text-white uppercase tracking-wider mb-2">Unseen Entrée</h3>
                   <p className="text-slate-400 font-light text-xs leading-relaxed">Unlock access to closed archaeological sites, private tea estates, and hidden villa properties across Ceylon.</p>
                </div>

                <div className="p-8 bg-gradient-to-br from-[#111726] to-[#0b0f19] border-2 border-dashed border-slate-800 rounded-[2.5rem] flex flex-col justify-center items-start text-left group">
                   <p className="text-slate-500 font-serif italic text-xs mb-2">Driven by Perfection</p>
                   <h3 className="text-base font-headline font-bold text-amber-400 uppercase tracking-widest">JAI LANKA ELITE</h3>
                   <div className="w-8 h-[1px] bg-amber-500/40 mt-3 group-hover:w-16 transition-all duration-500"></div>
                </div>

             </div>
          </div>
        </section>

        {/* --- FOOTER CTA --- */}
        <footer className="py-24 px-6 text-center border-t border-slate-900 bg-gradient-to-b from-transparent to-[#060a13]">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-headline font-light uppercase tracking-wide text-white mb-10 leading-tight">Every Journey is a <span className="font-serif italic text-amber-400 normal-case">Masterpiece</span>. <br /> Let's Write Yours.</h2>
              
              {/* 💡 Link වෙනුවට standard <a> tag එකක් දැම්මා */}
              <a 
                href="/contact" 
                className="bg-amber-500 text-black px-12 py-5 rounded-xl text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-2xl active:scale-95 inline-block"
              >
                  Plan Your Voyage Today
              </a>
              
              <p className="mt-24 text-slate-600 text-[9px] tracking-[0.6em] uppercase font-bold">© 2026 JAI LANKA TRAVEL & TOURS</p>
           </div>
        </footer>
      </div>
    </>
  );
};

export default OurStory;