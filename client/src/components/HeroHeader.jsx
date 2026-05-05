import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import myLogo from '../assets/logo.png'; 

const HeroHeader = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-6 text-white">
      
      {/* Grid Layout: [Left Empty] [Center Logo, Name & Text] [Right Buttons] */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full max-w-7xl mx-auto">
        
        {/* Left Column (Empty) */}
        <div></div>

        {/* Center Column: Stacked content */}
        <div className="flex flex-col items-center justify-center text-center">
          <Link to="/" className="flex flex-col items-center group">
            <img src={myLogo} alt="Jai Lanka" className="w-20 h-20 object-contain" />
            <h1 className="text-2xl font-serif font-bold tracking-[0.2em] uppercase mt-2 whitespace-nowrap">
              JAI LANKA TRAVEL & TOURS
            </h1>
          </Link>

          {/* Glassmorphism Subtext */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-1.5 px-6 shadow-lg mt-3">
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/90">
              Experience the Art of Luxury Travel
            </p>
          </div>
        </div>

        {/* Right Column: Buttons */}
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
    <button className="bg-[#00a2ff] px-4 py-2 rounded-sm text-xs text-white font-bold uppercase">
        Enquire
      </button>
</Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full mt-6 border-t border-white/20 pt-6 flex justify-center">
        <nav className="flex gap-10 text-xs font-bold uppercase tracking-widest">
          {['Home', 'Itineraries', 'Day Tours', 'Discover Sri Lanka', 'Our Story', 'Plan Journey'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
              className="hover:text-[#00a2ff] transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  );
};

export default HeroHeader;