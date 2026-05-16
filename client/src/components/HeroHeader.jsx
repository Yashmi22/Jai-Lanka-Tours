import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import myLogo from '../assets/logo.png'; 

const HeroHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const itineraryLinks = [
    { name: "Adventure & Nature Based", path: "/itineraries/adventure" },
    { name: "Culture & Heritage", path: "/itineraries/culture" },
    { name: "North & East Coast", path: "/itineraries/north-east" },
    { name: "Romantic Tours", path: "/itineraries/romantic" },
    { name: "Ayurvedic & Wellness", path: "/itineraries/ayurvedic" },
    { name: "Differently Abled Tours", path: "/itineraries/differently-abled" },
    { name: "Wildlife Tours", path: "/itineraries/wildlife" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6 text-white">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-7xl mx-auto">
        <div></div>

        <div className="flex flex-col items-center justify-center text-center">
          <Link to="/" className="flex flex-col items-center group">
            <img src={myLogo} alt="Jai Lanka" className="w-20 h-20 object-contain" />
            <h1 className="text-2xl font-serif font-bold tracking-[0.2em] uppercase mt-2 whitespace-nowrap">
              JAI LANKA TRAVEL & TOURS
            </h1>
          </Link>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-1.5 px-6 shadow-lg mt-3">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/90">
              Experience the Art of Luxury Travel
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3">
          <a 
            href="https://wa.me/94770000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 transition-all text-white shadow-lg"
          >
            <FaWhatsapp size={20} />
          </a>
          
          <Link to="/enquiry">
            <button className="bg-[#00a2ff] px-4 py-2 rounded-sm text-xs text-white font-bold uppercase hover:bg-[#0088cc] transition-colors">
              Enquire
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full mt-6 border-t border-white/20 pt-6 flex justify-center relative">
        <nav className="flex gap-10 text-xs font-bold uppercase tracking-widest items-center">
          <Link to="/" className="hover:text-[#00a2ff] transition-all">Home</Link>

          {/* Itineraries Dropdown */}
          <div 
            className="relative group h-full py-2"
            onMouseEnter={() => setOpenDropdown('itineraries')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-[#00a2ff] transition-all flex items-center gap-1">
              ITINERARIES
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {openDropdown === 'itineraries' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white text-slate-900 border border-gray-200 rounded-md shadow-xl min-w-[280px] z-50 overflow-hidden py-1">
                <Link 
                  to="/itineraries" 
                  onClick={() => setOpenDropdown(null)}
                  className="block px-6 py-3.5 hover:bg-blue-50 hover:text-[#00a2ff] transition-colors text-[10px] font-bold uppercase tracking-wider border-b border-gray-50 bg-blue-50 text-[#00a2ff]"
                >
                  All Itineraries
                </Link>
                {itineraryLinks.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path} 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-6 py-3.5 hover:bg-blue-50 hover:text-[#00a2ff] transition-colors text-[10px] font-bold uppercase tracking-wider border-b border-gray-50 last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/discoversrilanka" className="hover:text-[#00a2ff] transition-all">Discover Sri Lanka</Link>
          <Link to="/our-story" className="hover:text-[#00a2ff] transition-all">Our Story</Link>
          <Link to="/plan-journey" className="hover:text-[#00a2ff] transition-all">Plan Journey</Link>
        </nav>
      </div>
    </header>
  );
};

export default HeroHeader;