import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// හෝම් පේජ් එකේ පාවිච්චි කරපු අලුත් logo1.png එකම මෙතනටත් ගත්තා
import myLogo from '../assets/logo1.png'; 

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
    // මුළු Navbar එකම අභ්‍යන්තර පිටුවල පින්තූර උඩින් පාවෙන (Absolute) සහ Glassmorphism ලුක් එකකට හැදුවා
    <nav className="absolute top-0 left-0 w-full px-8 py-5 flex justify-between items-center bg-black/30 backdrop-blur-md border-b border-white/10 relative z-50 font-sans antialiased">
      
      {/* BRAND LOGO AREA */}
      <Link to="/" className="flex items-center gap-3 group select-none">
        <img src={myLogo} alt="Jai Lanka Luxury Logo" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-105" />
        <div className="flex flex-col">
          <span className="font-serif font-medium tracking-[0.2em] text-xs text-white uppercase">
            JAI LANKA
          </span>
          <span className="text-[8px] tracking-[0.3em] text-amber-400 uppercase font-light -mt-0.5">
            Travel & Tours
          </span>
        </div>
      </Link>
      
      {/* NAVIGATION LINKS */}
      <div className="hidden md:flex gap-x-8 text-[10px] font-medium uppercase tracking-[0.2em] items-center">
        <Link to="/" className="text-white hover:text-amber-400 transition-colors">Home</Link>
        
        {/* DROPDOWN FOR ITINERARIES */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className={`hover:text-amber-400 text-white transition-colors py-2 flex items-center gap-1 focus:outline-none ${isOpen ? 'text-amber-400' : ''}`}
          >
            ITINERARIES
            <svg className={`w-2.5 h-2.5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#090d16]/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl min-w-[260px] py-2 z-[100] overflow-hidden">
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
                  className="block px-6 py-3 hover:bg-amber-500 hover:text-black transition-all text-[9px] text-slate-300 font-medium uppercase tracking-wider border-b border-white/5 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/day-tours" className="text-white hover:text-amber-400 transition-colors">Day Tours</Link>
        
        {/* අලුතෙන් එකතු කළ Accommodation පිටුව */}
        <Link to="/accommodation" className="text-white hover:text-amber-400 transition-colors">Accommodation</Link>
        
        <Link to="/discoversrilanka" className="text-white hover:text-amber-400 transition-colors">Discover Sri Lanka</Link>
        <Link to="/blog" className="text-white hover:text-amber-400 transition-colors">Blog</Link>
        <Link to="/our-story" className="text-white hover:text-amber-400 transition-colors">Our Story</Link>
        <Link to="/plan-journey" className="text-white hover:text-amber-400 transition-colors">Plan Journey</Link>
       
        
      </div>

      {/* LUXURY ENQUIRE BUTTON */}
      <Link to="/enquiry" className="hidden sm:block">
        <button className="bg-transparent border border-white/20 text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] py-2.5 px-6 rounded-full transition-all duration-500 shadow-xl">
          Enquire
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;