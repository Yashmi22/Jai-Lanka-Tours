import React, { useEffect } from "react";
import { Compass, Star } from "lucide-react";

// --- IMAGES IMPORT FROM ASSETS ---
import aliyaImg from "../assets/aliya_resort.jpg";
import sevenAngelsImg from "../assets/seven.jpg";
import accommodationImg from "../assets/accommodation.jpg";
import thema1Img from "../assets/thema1.jpg";
import thema2Img from "../assets/thema2.jpg";
import thema3Img from "../assets/thema3.jpg";

// --- PARTNER LOGO IMAGES ---
import A1 from "../assets/A1.png";
import A2 from "../assets/A2.png";
import A3 from "../assets/A3.png";
import A4 from "../assets/A4.png";
import A5 from "../assets/A5.png";
import A6 from "../assets/A6.png";

const Accommodation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased pb-20">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-8">
        <img 
          src={accommodationImg} 
          alt="Luxury Accommodation Sri Lanka" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        
        <div className="absolute inset-0 bg-slate-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 pt-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/60 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md shadow-lg">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Curated Stays & Sanctuaries
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white leading-none drop-shadow-2xl">
            Dream in or of <br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-emerald-200 to-amber-300">
              Sri Lanka
            </span>
          </h1>

          <p className="text-slate-200 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Handpicked luxury resorts, serene boutique retreats, and authentic stays curated thoughtfully for your journey.
          </p>

          <div className="pt-4 flex justify-center">
            <a 
              href="#explore" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105"
            >
              <Compass className="w-4 h-4" /> Discover Properties
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </div>

      {/* --- INTRO SECTION --- */}
      <div id="explore" className="max-w-5xl mx-auto px-4 md:px-8 mt-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-100 tracking-wide">
            Tailored Experiences, Exclusive Rates
          </h2>
          <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
            We don't restrict ourselves to a fixed list of partner hotels. Tell us your accommodation preferences, star rating, and nightly budget, and we'll craft a bespoke selection just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm space-y-3">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">STEP 01</span>
            <h3 className="text-lg font-serif font-semibold text-white">Share Your Vision</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Tell us your preferred hotel style, star rating, and nightly budget for your stay.
            </p>
          </div>

          <div className="p-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm space-y-3">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">STEP 02</span>
            <h3 className="text-lg font-serif font-semibold text-white">Curated Selection</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              We curate a list of 3–5 tailored properties per destination along with special rates.
            </p>
          </div>

          <div className="p-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-sm space-y-3">
            <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">STEP 03</span>
            <h3 className="text-lg font-serif font-semibold text-white">Your Choice</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Book seamlessly through us or directly on your own—complete flexibility for you.
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <span className="px-5 py-2 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-widest uppercase rounded-full border border-amber-500/20 inline-block animate-pulse">
            Curated Directory Coming Soon
          </span>
        </div>
      </div>

      {/* --- THEMA COLLECTION SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-28 space-y-8">
        <div className="border-l-2 border-emerald-500 pl-4 mb-8">
          <h2 className="text-3xl font-serif font-bold tracking-wide text-slate-100">
            Thema Collection
          </h2>
        </div>

        {/* ROW 1: Logo (Left) + Cultural Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="border border-slate-900 rounded-3xl overflow-hidden bg-slate-900/20 group flex flex-col justify-center items-center">
            <img 
              src={aliyaImg} 
              alt="Aliya Resort and Spa" 
              className="w-full h-full object-contain block group-hover:scale-105 transition-transform duration-500 min-h-[250px]"
            />
            <div className="p-3 w-full bg-slate-950/80 border-t border-slate-900 text-center">
              <p className="text-xs text-emerald-400 font-medium">Featured: Aliya Resort & Spa (Sigiriya)</p>
            </div>
          </div>

          <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60 flex flex-col justify-center">
            <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Cultural & Wellness Retreats</h4>
            <div className="space-y-4 divide-y divide-slate-900/60">
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Aliya Resort & Spa (Sigiriya):</strong> 
                An elephant-themed luxury resort with clear views of the iconic Sigiriya Rock Fortress.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Ayurvie Sigiriya (Sigiriya):</strong> 
                An eco-friendly, dedicated Ayurveda and holistic wellness retreat.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Amba Yaalu (Kandalama):</strong> 
                Sri Lanka's first hotel fully managed and staffed by women, themed around traditional culture and cinema.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: Horizontal 3 Images Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 group">
            <img 
              src={thema1Img} 
              alt="Thema Collection 1" 
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 group">
            <img 
              src={thema2Img} 
              alt="Thema Collection 2" 
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/30 group">
            <img 
              src={thema3Img} 
              alt="Thema Collection 3" 
              className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* ROW 3: Tea Country (Left) + Deep South (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60 h-full">
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
                Luxury tented camps hidden away in a UNESCO World Heritage-listed conservation forest.
              </p>
            </div>
          </div>

          <div className="space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60 h-full">
            <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">Deep South, Wildlife & Safaris</h4>
            <div className="space-y-4 divide-y divide-slate-900/60">
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Kithala Resort (Tissamaharama / Yala):</strong> 
                A peaceful resort popular with birdwatchers and safari-goers heading into Yala National Park.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Wild Glamping Gal Oya (Gal Oya):</strong> 
                An eco-luxury glamping property near Gal Oya National Park.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Waraka (Udawalawe):</strong> 
                An intimate eco-lodge built specifically for travelers wanting to experience Udawalawe wildlife.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Villa Blue Monk (Tissamaharama / Yala):</strong> 
                A mindful, eco-luxury boutique escape situated between ancient lakes and nature reserves.
              </p>
            </div>
          </div>
        </div>

        {/* ROW 4: Coastal & Beach Escapes (Centered Below) */}
        <div className="flex justify-center pt-2">
          <div className="w-full lg:w-2/3 space-y-4 bg-slate-900/20 p-6 rounded-2xl border border-slate-900/60">
            <h4 className="text-emerald-400 text-xs font-semibold uppercase tracking-wider text-center lg:text-left">Coastal & Beach Escapes</h4>
            <div className="space-y-4 divide-y divide-slate-900/60">
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-2">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Maalu Maalu Resort & Spa (Pasikuda):</strong> 
                A beachfront resort with chalets designed to mimic a traditional Sri Lankan fishing village.
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
                An intimate beachfront boutique villa situated in a prime area for whale watching.
              </p>
              <p className="text-sm text-slate-300 font-light leading-relaxed pt-4">
                <strong className="text-white font-semibold font-serif block text-base mb-1">Hikka House (Hikkaduwa):</strong> 
                A private holiday villa right in the center of Sri Lanka's vibrant surf town.
              </p>
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
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="bg-slate-900/30 p-6 md:p-8 rounded-3xl border border-slate-900 space-y-4">
              <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase">The Seven Angels Collection</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                These properties explicitly form the Seven Angels portfolio, offering exclusive boutique experiences:
              </p>
              
              <ul className="space-y-4 pt-2">
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Heritage Boutique by Seven Angels (Kandy)</strong> – A historic, colonial-style governor house conversion right next to the Temple of the Sacred Tooth Relic.
                </li>
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Castle Hill Bungalow (Kandy)</strong> – A centrally located luxury bungalow providing stunning hill views and quick access to Kandy Lake.
                </li>
                <li className="text-sm text-slate-300 font-light leading-relaxed pl-2 border-l border-emerald-500/30">
                  <strong className="text-white font-semibold font-serif">Liyya Water Villas (Dambulla)</strong> – A peaceful luxury resort en route to Cultural Triangle landmarks like Dambulla and Sigiriya.
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="border border-slate-900 rounded-3xl overflow-hidden bg-slate-900/20 group">
              <img 
                src={sevenAngelsImg} 
                alt="7 Angels Collection" 
                className="w-full h-auto object-contain block group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-slate-950/80 border-t border-slate-900 text-center">
                <p className="text-xs text-emerald-400 font-medium">The Seven Angels Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- OUR PARTNERS LOGO BAR --- */}
      <div className="mt-28 border-t border-b border-slate-900 bg-slate-900/60 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">
          
          {/* Title Box */}
          <div className="px-8 flex flex-col justify-center items-center md:items-start shrink-0 min-w-[200px]">
            <span className="text-xs text-slate-400 tracking-[0.2em] font-bold uppercase block text-center md:text-left">OUR</span>
            <span className="text-xl font-black font-sans tracking-[0.15em] text-white block">PARTNERS</span>
          </div>

          {/* Logos Row */}
          <div className="flex-1 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-around gap-8 md:gap-6 px-6 min-w-0 w-full">
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A1} alt="Partner 1" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A2} alt="Partner 2" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A3} alt="Partner 3" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A4} alt="Partner 4" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A5} alt="Partner 5" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="flex items-center justify-center h-20 opacity-90 hover:opacity-100 transition-opacity">
              <img src={A6} alt="Partner 6" className="h-16 md:h-20 w-auto object-contain filter brightness-110 contrast-125 hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Accommodation;