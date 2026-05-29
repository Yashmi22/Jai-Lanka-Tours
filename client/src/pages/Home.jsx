import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// logo1.png එක Import කිරීම
import myLogo from '../assets/logo1.png'; 

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Luxury Background Images 4
  const slideshowImages = [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1600&auto=format&fit=crop"
  ];

  // Itinerary Links
  const itineraryLinks = [
    { name: "Adventure & Nature Based", path: "/itineraries/adventure" },
    { name: "Culture & Heritage", path: "/itineraries/culture" },
    { name: "North & East Coast", path: "/itineraries/north-east" },
    { name: "Romantic Tours", path: "/itineraries/romantic" },
    { name: "Ayurvedic & Wellness", path: "/itineraries/ayurvedic" },
    { name: "Differently Abled Tours", path: "/itineraries/differently-abled" },
    { name: "Wildlife Tours", path: "/itineraries/wildlife" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans antialiased">
      
      {/* BACKGROUND SLIDESHOW */}
      {slideshowImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img 
            src={img} 
            alt={`Luxury Vibe ${index + 1}`} 
            className="w-full h-full object-cover brightness-[35%]" 
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 z-20" />

      {/* MAIN CENTERED INTERFACE */}
      <div className="relative inset-0 w-full h-full flex flex-col items-center justify-center z-30 px-4">
        
        {/* --- BRAND BRANDING CONTAINER (Compact Brand Badge) --- */}
        <div className="flex flex-col items-center justify-center text-center select-none max-w-2xl mx-auto">
          {/* 1. logo1.png ලාංඡනය */}
          <img 
            src={myLogo} 
            alt="Jai Lanka Logo" 
            className="w-32 h-32 md:w-36 md:h-36 object-contain filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" 
          />
          
          {/* 2. JAI LANKA TRAVEL AND TOURS */}
          <h1 className="text-lg md:text-xl font-serif font-medium tracking-[0.35em] uppercase mt-5 text-white/95">
            JAI LANKA TRAVEL AND TOURS
          </h1>
          
          {/* 3. Experience the Art Of Luxury Travel */}
          <p className="text-[10px] md:text-xs tracking-[0.4em] text-white/70 font-light mt-2.5 font-serif italic">
            Experience the Art Of Luxury Travel
          </p>
        </div>

        {/* PREMIUM NAVIGATION BAR (දැන් 100% තනි පේළියක පමණි) */}
        <div className="w-full max-w-6xl mt-12 border-t border-b border-white/10 py-5 flex justify-center relative overflow-x-auto md:overflow-x-visible">
          <nav className="flex flex-nowrap justify-start md:justify-center items-center gap-x-8 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] whitespace-nowrap px-4 md:px-0">
            
            <Link to="/" className="hover:text-amber-400 transition-colors text-amber-400">Home</Link>

            {/* ITINERARIES DROPDOWN */}
            <div 
              className="relative group py-2 cursor-pointer"
              onMouseEnter={() => setOpenDropdown('itineraries')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="hover:text-amber-400 transition-colors flex items-center gap-1.5 focus:outline-none">
                ITINERARIES
                <svg className="w-3 h-3 text-white/60 group-hover:text-amber-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openDropdown === 'itineraries' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#090d16]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl min-w-[280px] z-50 overflow-hidden py-2">
                  <Link 
                    to="/itineraries" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-6 py-3 hover:bg-amber-500 hover:text-black transition-all text-[10px] font-bold uppercase tracking-wider border-b border-white/5 bg-white/5 text-amber-400"
                  >
                    All Itineraries
                  </Link>
                  {itineraryLinks.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.path} 
                      onClick={() => setOpenDropdown(null)}
                      className="block px-6 py-3.5 hover:bg-amber-500 hover:text-black transition-all text-[10px] text-slate-300 font-medium uppercase tracking-wider border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/day-tours" className="hover:text-amber-400 transition-colors">Day Tours</Link>
            <Link to="/accommodation" className="hover:text-amber-400 transition-colors">Accommodation</Link>
            <Link to="/discoversrilanka" className="hover:text-amber-400 transition-colors">Discover Sri Lanka</Link>
            <Link to="/blog" className="hover:text-[#f4ba3b] transition-colors">Blog</Link>
            <Link to="/our-story" className="hover:text-amber-400 transition-colors">Our Story</Link>
            <Link to="/plan-journey" className="hover:text-amber-400 transition-colors">Plan Journey</Link>
          </nav>
        </div>

        {/* MINIMALIST EXPLORE BUTTON */}
        <div className="mt-12">
          <Link to="/itineraries">
            <button className="bg-transparent border border-amber-500/30 text-amber-400 hover:bg-amber-500 hover:text-black text-[10px] font-bold uppercase tracking-[0.3em] py-3.5 px-10 rounded-full transition-all duration-500 shadow-2xl shadow-amber-500/5">
              Explore Experiences
            </button>
          </Link>
        </div>

      </div>

      {/* WHATSAPP FLOATER */}
      <div className="absolute bottom-8 right-8 z-40">
        <a 
          href="https://wa.me/94770000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-all text-white shadow-xl hover:scale-110 duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* SLIDESHOW LINES */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        {slideshowImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-[2px] transition-all duration-700 ${idx === currentSlide ? "w-12 bg-amber-400" : "w-6 bg-white/20"}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;