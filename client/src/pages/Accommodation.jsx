import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";

// --- IMAGES IMPORT FROM ASSETS ---
import aliyaImg from "../assets/aliya.jpg";
import sevenAngelsImg from "../assets/7angels.jpg";

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased pb-20">
      
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative py-24 px-4 md:px-8 border-b border-slate-900/60 overflow-hidden bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950">
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
            Dream in or of Sri Lanka
          </h1>
          
          <div className="space-y-4 text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-justify md:text-center">
            <p>
              When it comes to accommodation or hotels in Sri Lanka, the offering is as diverse as the island itself. 
              There's something for everyone, and we can help you find the best spot to rest your eyes each night.
            </p>
            <p>
              Because we want to help you find the best match and enjoy each hotel, we don't restrict ourselves to a set list of partner hotels. 
              With most hotels (and some guest houses) we can get preferential rates for you.
            </p>
          </div>

          {/* How It Works Card */}
          <div className="mt-10 p-6 md:p-8 bg-slate-900/40 border border-slate-900 rounded-2xl text-left backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-emerald-400 font-serif font-semibold text-lg mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> So how does it work?
            </h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              You can tell us what you have in mind for your accommodation needs and wishes: what type of hotel, what star rating and especially what budget range on average per night. 
              Based on this we will suggest per destination you'll be staying at, a list of probably 3-5 hotels for your review. 
              You can select the ones you like best and for those we will get our special rate and share this with you, transparently for each hotel. 
              You can then choose for us to book it for you, or we continue searching or if you prefer to book yourself, that's of course totally fine too.
            </p>
          </div>

          {/* Coming Soon Tag */}
          <div className="pt-4">
            <span className="px-4 py-1.5 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase rounded-full border border-amber-500/20 inline-block animate-pulse">
              COMING SOON
            </span>
            <p className="text-xs text-slate-500 max-w-xl mx-auto mt-3 font-light">
              By popular demand, we are working on putting together a list of properties that we can recommend (it's not a finished list and we continue to add more hotels and update based on our & our guest's experiences.)
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* --- THEMA COLLECTION SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <div className="border-l-2 border-emerald-500 pl-4 mb-8">
          <h2 className="text-3xl font-serif font-bold tracking-wide text-slate-100">
            Thema Collection
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Wrap fixed from assets */}
          <div className="lg:col-span-5 sticky top-6">
            <div className="border border-slate-900 rounded-3xl overflow-hidden bg-slate-900/20 group">
              <img 
                src={aliyaImg} 
                alt="Aliya Resort and Spa" 
                className="w-full h-auto object-contain block group-hover:scale-101 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-950/80 border-t border-slate-900 text-center">
                <p className="text-xs text-emerald-400 font-medium">Featured: Aliya Resort & Spa (Sigiriya)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hotel Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Cultural & Wellness */}
            <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60">
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Cultural & Wellness Retreats</h4>
              <div className="space-y-4 divide-y divide-slate-900/60">
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">aliya Resort & Spa (Sigiriya):</strong> 
                  An elephant-themed luxury resort with clear views of the iconic Sigiriya Rock Fortress.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Ayurvie Sigiriya (Sigiriya):</strong> 
                  An eco-friendly, dedicated Ayurveda and holistic wellness retreat.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Amba Yaalu (Kandalama):</strong> 
                  Sri Lanka's first hotel fully managed and staffed by women, themed around traditional culture and the golden age of Sri Lankan cinema.
                </p>
              </div>
            </div>

            {/* Tea Country & Hill Country */}
            <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60">
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Tea Country & Hill Country</h4>
              <div className="space-y-4 divide-y divide-slate-900/60">
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Mountbatten Bungalow (Kandy):</strong> 
                  A historic Victorian-style colonial bungalow with deep ties to Kandyan history.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Tea & Experience Factory (Mandaram Nuwara):</strong> 
                  An experiential resort built inside a real, converted operational tea factory.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Scottish Planter (Nuwara Eliya):</strong> 
                  A stone bungalow offering a cozy look into the traditional lives of early tea planters.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Wild Glamping Knuckles (Knuckles Mountain Range):</strong> 
                  Luxury tented camps hidden away in a rugged, UNESCO World Heritage-listed conservation forest.
                </p>
              </div>
            </div>

            {/* Deep South, Wildlife & Safaris */}
            <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60">
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Deep South, Wildlife & Safaris</h4>
              <div className="space-y-4 divide-y divide-slate-900/60">
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Kithala Resort (Tissamaharama / Yala):</strong> 
                  A peaceful resort popular with birdwatchers and safari-goers heading into Yala National Park.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Wild Glamping Gal Oya (Gal Oya):</strong> 
                  An eco-luxury glamping property that allows guests to immerse themselves in nature near Gal Oya.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Waraka (Udawalawe):</strong> 
                  An intimate eco-lodge built specifically for travelers wanting to experience the Udawalawe wildlife.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Villa Blue Monk (Tissamaharama / Yala):</strong> 
                  A mindful, eco-luxury boutique escape situated between ancient lakes and nature reserves.
                </p>
              </div>
            </div>

            {/* Coastal & Beach Escapes */}
            <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60">
              <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Coastal & Beach Escapes</h4>
              <div className="space-y-4 divide-y divide-slate-900/60">
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Maalu Maalu Resort & Spa (Pasikuda):</strong> 
                  A beachfront resort with chalets designed to mimic a traditional Sri Lankan Wadiya (fishing village).
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Ayurvie Weligama (Weligama):</strong> 
                  A southern beach resort focused entirely on authentic Ayurvedic medical packages and yoga.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Parangi Weligama Bay (Weligama):</strong> 
                  A chic, modern boutique property catering to coastal travelers and surfers.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Vis Ta Vie (Mirissa):</strong> 
                  An intimate beachfront boutique villa situated in a prime area for whale and turtle watching.
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                  <strong className="text-white font-semibold font-serif block text-base mb-1">Hikka House (Hikkaduwa):</strong> 
                  A private holiday villa right in the center of Sri Lanka's vibrant surf town.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- THE SEVEN ANGELS PROPERTY SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 pt-16 border-t border-slate-900/60">
        <div className="border-l-2 border-emerald-500 pl-4 mb-8">
          <h2 className="text-3xl font-serif font-bold tracking-wide text-slate-100">
            Our Ray 7 Angel Property
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="bg-slate-900/30 p-6 md:p-8 rounded-3xl border border-slate-900 space-y-4">
              <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase">The Seven Angels Collection</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                These properties explicitly form the Seven Angels portfolio, often offering exclusive boutique experiences:
              </p>
              
              <ul className="space-y-4 pt-2">
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Heritage Boutique by Seven Angels (Kandy)</strong> – A historic, colonial-style governor house conversion located right next to the Temple of the Sacred Tooth Relic.
                </li>
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Castle Hill Bungalow (Kandy)</strong> – A centrally located luxury bungalow providing stunning hill views and quick access to Kandy Lake.
                </li>
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Liyya Water Villas (Dambulla)</strong> – A peaceful luxury resort situated en route to the Cultural Triangle landmarks like the Dambulla Cave Temple and Sigiriya.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Image fixed from assets */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="border border-slate-900 rounded-3xl overflow-hidden bg-slate-900/20 group">
              <img 
                src={sevenAngelsImg} 
                alt="7 Angels Collection" 
                className="w-full h-auto object-contain block group-hover:scale-101 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-950/80 border-t border-slate-900 text-center">
                <p className="text-xs text-emerald-400 font-medium">The Seven Angels Portfolio</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- OUR PARTNERS LOGO BAR (Ref: image_17595e.png) --- */}
      <div className="mt-28 border-t border-b border-slate-900 bg-slate-900/20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
          
          {/* Label Area */}
          <div className="px-8 flex flex-col justify-center items-center md:items-start shrink-0 min-w-[220px]">
            <span className="text-xs text-slate-500 tracking-widest font-bold uppercase block">OUR</span>
            <span className="text-xl font-black font-sans tracking-widest text-white block">PARTNERS</span>
          </div>

          {/* Logo Content Grid Line - Higher & High-quality Vector SVGs representing original brands */}
          <div className="flex-1 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-around gap-12 px-8 min-w-0">
            
            {/* 1. AMAYA RESORTS LOGO (Golden Elegant Tree Motif) */}
            <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0">
              <svg className="w-10 h-10 text-amber-500 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22V10M12 10C14.5 7.5 17 9 19 6M12 10C9.5 7.5 7 9 5 6M12 6C14 3.5 16 5 18 2M12 6C10 3.5 8 5 6 2" strokeLinecap="round"/>
              </svg>
              <span className="text-xs font-serif font-black tracking-[0.3em] text-amber-500/90">AMAYA</span>
            </div>

            {/* 2. TAJ HOTELS LOGO (Classic Royal Emblem Typography) */}
            <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0">
              <span className="text-2xl font-serif font-extrabold tracking-[0.2em] text-yellow-500/90 leading-none">TAJ</span>
              <span className="text-[7px] tracking-[0.25em] text-yellow-600/60 uppercase font-sans mt-1">Hotels • Resorts</span>
            </div>

            {/* 3. JETWING HOTELS LOGO (Signature Script style with Brand Dot) */}
            <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0">
              <div className="flex items-baseline">
                <span className="text-xl font-serif font-black text-pink-500 tracking-wide italic">Jetwing</span>
                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full ml-0.5"></span>
              </div>
              <span className="text-[8px] text-slate-500 tracking-[0.3em] uppercase block mt-0.5">HOTELS</span>
            </div>

            {/* 4. GIRITALE HOTEL LOGO (Oceanic Crest/Teal Circular Icon) */}
            <div className="flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0">
              <svg className="w-9 h-9 text-sky-400 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3a9 9 0 0 0-9 9c0 2.5 1 4.8 2.6 6.4L12 12h9a9 9 0 0 0-9-9z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="3" fill="currentColor" className="text-emerald-400"/>
              </svg>
              <span className="text-[10px] font-sans font-bold tracking-[0.15em] text-sky-400">GIRITALE</span>
              <span className="text-[7px] text-slate-500 tracking-widest uppercase">HOTEL</span>
            </div>

            {/* 5. THEMA COLLECTION "𝜕" EMBLEM (Elegant Script Glyph) */}
            <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity shrink-0">
              <span className="text-4xl font-serif font-normal italic text-purple-500 transform -rotate-12">
                𝜕
              </span>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Accommodation;