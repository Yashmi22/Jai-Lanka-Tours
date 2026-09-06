import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

// home page logo logo1.png 
import myLogo from '../assets/logo1.png'; 

const Navbar = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileItinerariesOpen, setIsMobileItinerariesOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // Always solid if not home
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const itineraryLinks = [
    { name: "Off Road Adventure Tours ", path: "/itineraries/adventure" },
    { name: "Culture & Wildlife Tours", path: "/itineraries/culture" },
    { name: "North & East Coast Tours", path: "/itineraries/north-east" },
    { name: "Romantic Tours", path: "/itineraries/romantic" },
    { name: "Ayurvedic & Wellness Tours", path: "/itineraries/ayurvedic" },
    { name: "Differently Abled Tours", path: "/itineraries/differently-abled" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileItinerariesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full px-4 md:px-8 flex justify-between items-center transition-all duration-500 z-50 font-sans antialiased ${
      isScrolled 
        ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
    }`}>
      
      {/* BRAND LOGO AREA */}
      <Link to="/" className="flex items-center gap-3 group select-none" onClick={closeMobileMenu}>
        <img src={myLogo} alt="Jai Lanka Luxury Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-500 group-hover:scale-105" />
        <div className="flex flex-col text-left">
          <span className="block text-sm md:text-base font-serif font-bold tracking-[0.25em] text-white uppercase leading-tight">
            JAI LANKA <span className="text-amber-400">TOURS</span>
          </span>
          <span className="block text-[8px] md:text-[9px] tracking-[0.3em] text-amber-200/60 uppercase font-serif -mt-0.5">
            Experience The Art Of Luxury Travel
          </span>
        </div>
      </Link>
      
      {/* DESKTOP NAVIGATION LINKS */}
      <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[11px] font-medium uppercase tracking-[0.2em]">
        <Link to="/" className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap">Home</Link>
        
        {/* DROPDOWN FOR ITINERARIES */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className={`hover:text-amber-400 text-white transition-colors py-2 flex items-center gap-1 focus:outline-none whitespace-nowrap ${isOpen ? 'text-amber-400' : ''}`}
          >
            ITINERARIES
            <FaChevronDown className={`w-2.5 h-2.5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#0d121d]/95 backdrop-blur-xl border border-amber-500/20 rounded-xl shadow-2xl min-w-[260px] py-2 z-[100] overflow-hidden animate-fadeIn">
              <Link 
                to="/itineraries" 
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 hover:bg-amber-500 hover:text-black transition-all text-[9px] font-bold uppercase tracking-wider border-b border-white/5 bg-white/5 text-amber-400"
              >
                All Itineraries
              </Link>
              {itineraryLinks.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-slate-300 hover:bg-amber-500/20 hover:text-amber-300 transition-all text-[9px] uppercase tracking-wider border-b border-white/5 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/day-tours" className="text-white hover:text-amber-400 transition-colors whitespace-nowrap">Day Tours</Link>
        <Link to="/accommodation" className="text-white hover:text-amber-400 transition-colors whitespace-nowrap">Accommodation</Link>
        <Link to="/discoversrilanka" className="text-white hover:text-amber-400 transition-colors whitespace-nowrap">Discover Sri Lanka</Link>
        <Link to="/blog" className="text-white hover:text-amber-400 transition-colors whitespace-nowrap">Blog</Link>
        <Link to="/about-us" className="text-white hover:text-amber-400 transition-colors whitespace-nowrap">About Us</Link>
      </div>

      {/* ENQUIRE / PLAN JOURNEY BUTTON (DESKTOP) */}
      <div className="hidden sm:flex items-center">
        <Link to="/plan-journey">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20">
            Plan Journey
          </button>
        </Link>
      </div>

      {/* MOBILE HAMBURGER BUTTON */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl focus:outline-none p-2 text-amber-400"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#080b11]/95 backdrop-blur-xl border-b border-amber-500/20 py-6 px-6 shadow-2xl flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.2em] z-50">
          <Link to="/" onClick={closeMobileMenu} className="text-amber-400 py-1">
            Home
          </Link>

          {/* MOBILE ITINERARIES ACCORDION */}
          <div>
            <button
              onClick={() => setIsMobileItinerariesOpen(!isMobileItinerariesOpen)}
              className="w-full flex items-center justify-between text-white py-1 focus:outline-none"
            >
              <span>ITINERARIES</span>
              <FaChevronDown className={`w-3 h-3 text-amber-400 transition-transform duration-300 ${isMobileItinerariesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileItinerariesOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-2 border-l border-amber-500/30">
                <Link
                  to="/itineraries"
                  onClick={closeMobileMenu}
                  className="text-amber-400 py-1 text-[10px] font-bold"
                >
                  All Itineraries
                </Link>
                {itineraryLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="text-slate-300 hover:text-amber-300 py-1 text-[10px]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/day-tours" onClick={closeMobileMenu} className="text-white hover:text-amber-400 py-1">
            Day Tours
          </Link>
          <Link to="/accommodation" onClick={closeMobileMenu} className="text-white hover:text-amber-400 py-1">
            Accommodation
          </Link>
          <Link to="/discoversrilanka" onClick={closeMobileMenu} className="text-white hover:text-amber-400 py-1">
            Discover Sri Lanka
          </Link>
          <Link to="/blog" onClick={closeMobileMenu} className="text-white hover:text-amber-400 py-1">
            Blog
          </Link>
          <Link to="/about-us" onClick={closeMobileMenu} className="text-white hover:text-amber-400 py-1">
            About Us
          </Link>

          {/* PLAN JOURNEY BUTTON FOR MOBILE */}
          <div className="pt-2">
            <Link to="/plan-journey" onClick={closeMobileMenu}>
              <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] py-3 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20">
                Plan Journey
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;