import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
    <nav className="w-full p-6 flex justify-between items-center bg-white border-b border-gray-200 relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={myLogo} alt="Logo" className="w-10 h-10" />
        <span className="font-bold tracking-widest uppercase text-sm md:text-base">
          JAI LANKA TRAVEL & TOURS
        </span>
      </Link>
      
      <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest items-center">
        <Link to="/" className="hover:text-[#00a2ff] transition-colors">Home</Link>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className={`hover:text-[#00a2ff] transition-colors py-2 flex items-center gap-1 ${isOpen ? 'text-[#00a2ff]' : ''}`}
          >
            ITINERARIES
            <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-lg shadow-2xl min-w-[280px] py-2 z-[100] animate-in fade-in zoom-in duration-200">
              <Link 
                to="/itineraries" 
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-blue-50 hover:text-[#00a2ff] transition-colors text-[10px] font-bold uppercase tracking-wider border-b border-gray-50 bg-blue-50 text-[#00a2ff]"
              >
                All Itineraries
              </Link>
              {itineraryLinks.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 hover:bg-blue-50 hover:text-[#00a2ff] transition-colors text-[10px] font-bold uppercase tracking-wider border-b border-gray-50 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/day-tours" className="hover:text-[#00a2ff] transition-colors">Day Tours</Link>
        <Link to="/discoversrilanka" className="hover:text-[#00a2ff] transition-colors">Discover Sri Lanka</Link>
        <Link to="/our-story" className="hover:text-[#00a2ff] transition-colors">Our Story</Link>
        <Link to="/plan-journey" className="hover:text-[#00a2ff] transition-colors">Plan Journey</Link>
      </div>

      <Link to="/enquiry">
        <button className="bg-[#00a2ff] px-6 py-2.5 rounded-sm text-xs text-white font-bold uppercase hover:bg-[#0088cc] transition-all shadow-md active:scale-95">
          Enquire
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;