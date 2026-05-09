import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import myLogo from '../assets/logo.png'; 

const Navbar = () => {
  const location = useLocation();

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
    <nav className="w-full px-10 py-5 flex justify-between items-center bg-white shadow-sm sticky top-0 z-[100]">
      <Link to="/" className="flex items-center gap-4 group">
        <img src={myLogo} alt="Logo" className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110" />
        <div className="flex flex-col">
          <span className="font-serif text-lg font-bold tracking-tighter text-slate-800 leading-none">JAI LANKA</span>
          <span className="text-[10px] tracking-[0.3em] text-cyan-600 font-bold uppercase">Travel & Tours</span>
        </div>
      </Link>
      
      <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`hover:text-cyan-500 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all ${location.pathname === link.path ? 'text-cyan-500 after:w-full' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button className="bg-cyan-500 px-7 py-2.5 rounded-full text-[10px] text-white font-black uppercase tracking-widest hover:bg-slate-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        Enquire Now
      </button>
    </nav>
  );
};

export default Navbar;