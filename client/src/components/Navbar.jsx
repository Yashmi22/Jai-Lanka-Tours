import React from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="w-full p-6 flex justify-between items-center bg-white border-b border-gray-200">
      <Link to="/" className="flex items-center gap-2">
        <img src={myLogo} alt="Logo" className="w-10 h-10" />
        <span className="font-bold tracking-widest uppercase">JAI LANKA TRAVEL & TOURS</span>
      </Link>
      
      <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
        <Link to="/">Home</Link>
        <Link to="/itineraries">Itineraries</Link>
        <Link to="/day-tours">Day Tours</Link>
        <Link to="/discoversrilanka">Discover Sri Lanka</Link>
        <Link to="/our-story">Our Story</Link>
        <Link to="/plan-journey">Plan Journey</Link>
      </div>

      <button className="bg-[#00a2ff] px-4 py-2 rounded-sm text-xs text-white font-bold uppercase">
        Enquire
      </button>
    </nav>
  );
};

export default Navbar;