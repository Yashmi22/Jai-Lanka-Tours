import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={myLogo} alt="Jai Lanka Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
        </Link>

        {/* Navigation Links - Single Line */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-[9px] lg:text-[11px] font-bold uppercase tracking-widest text-slate-600 flex-1 justify-center">
          <Link to="/" className="hover:text-[#00a2ff] transition-colors whitespace-nowrap">Home</Link>
          <Link to="/itineraries" className="hover:text-[#00a2ff] transition-colors whitespace-nowrap">Itineraries</Link>
          <Link to="/day-tours" className="hover:text-[#00a2ff] transition-colors whitespace-nowrap">Day Tours</Link>
          <Link to="/discoversrilanka" className="hover:text-[#00a2ff] transition-colors whitespace-nowrap">Discover</Link>
          <Link to="/our-story" className="hover:text-[#00a2ff] transition-colors whitespace-nowrap">Our Story</Link>
        </div>

        {/* Right Side - Search & Button */}
        <div className="flex items-center gap-2 md:gap-4">
          <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-slate-900 text-xl md:text-2xl">search</span>
          <button className="bg-[#00a2ff] text-white px-3 md:px-6 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors whitespace-nowrap">
            Enquire
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
