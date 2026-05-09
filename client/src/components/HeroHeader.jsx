import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import myLogo from '../assets/logo.png'; 

const HeroHeader = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Itineraries', path: '/itineraries' },
    { name: 'Day Tours', path: '/day-tours' },
    { name: 'Discover Sri Lanka', path: '/discoversrilanka' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Plan Journey', path: '/plan-journey' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="w-full px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={myLogo} alt="Jai Lanka" className="w-16 h-16 object-contain drop-shadow-lg" />
          <div className="hidden md:block text-white">
            <h1 className="text-xl font-serif font-black tracking-widest leading-none">JAI LANKA</h1>
            <p className="text-[9px] tracking-[0.4em] text-cyan-400 font-bold uppercase mt-1">Travel & Tours</p>
          </div>
        </Link>

        {/* Center: Menu */}
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-white text-[11px] font-bold uppercase tracking-widest hover:text-cyan-400 transition-all">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <a href="https://wa.me/94770000000" className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg"><FaWhatsapp size={20} /></a>
          <button className="bg-cyan-500 px-6 py-2.5 rounded-full text-[10px] text-white font-black uppercase tracking-widest">Enquire Now</button>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader;