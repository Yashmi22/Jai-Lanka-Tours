import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaGem, FaHotel, FaCarAlt, FaMapMarkerAlt, FaStar, FaChevronDown } from 'react-icons/fa';

// logo1.png
import myLogo from '../assets/logo1.png'; 

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Luxury Background Images
  const slideshowImages = [
    "/images/home6.jpg",
    "/images/home77.jpg",
    "/images/home7.jpg",
    "/images/home9.jpg"
  ];

  // Itinerary Links
  const itineraryLinks = [
    { name: "Off Road Adventure", path: "/itineraries/adventure" },
    { name: "Culture & Wildlife", path: "/itineraries/culture" },
    { name: "North & East Coast", path: "/itineraries/north-east" },
    { name: "Romantic Tours", path: "/itineraries/romantic" },
    { name: "Ayurvedic & Wellness", path: "/itineraries/ayurvedic" },
    { name: "Differently Abled", path: "/itineraries/differently-abled" },
  ];

  // Featured Luxury Tours
  const featuredTours = [
    {
      title: "Royal Heritage & Tea Country",
      duration: "08 Days / 07 Nights",
      image: "/images/home1.jpg",
      highlights: "Sigiriya, Kandy, Nuwara Eliya Tea Estates",
      tag: "Bestseller"
    },
    {
      title: "Wild Sri Lanka & Coastal Bliss",
      duration: "10 Days / 09 Nights",
      image: "/images/home2.jpg",
      highlights: "Yala Safari, Mirissa, Luxury Beach Resort",
      tag: "Exclusive"
    },
    {
      title: "Romantic Island Escape",
      duration: "07 Days / 06 Nights",
      image: "/images/home3.jpg",
      highlights: "Bentota Private Villa, Galle Fort, Sunset Cruise",
      tag: "Honeymoon Special"
    }
  ];

  // Featured Day Tours
  const featuredDayTours = [
    {
      title: "Anuradhapura Sacred City Tour",
      duration: "Full Day Excursion",
      image: "/images/anuradhapura.jpg",
      highlights: "Ancient Stupas, Ruwanwelisaya, Bodhi Tree",
      tag: "Heritage"
    },
    {
      title: "Kandy Cultural & Temple Tour",
      duration: "Full Day Excursion",
      image: "/images/kandy.jpg",
      highlights: "Temple of the Tooth, Botanical Gardens, Cultural Show",
      tag: "Culture"
    },
    {
      title: "Sinharaja Rainforest Trek",
      duration: "Full Day Excursion",
      image: "/images/sinharaja.jpg",
      highlights: "Endemic Flora & Fauna, Waterfalls, Nature Walk",
      tag: "Eco Adventure"
    }
  ];

  // Featured Blog Posts
  const featuredBlogs = [
    {
      title: "Encountering the Gentle Giants of Sri Lanka",
      date: "Travel Guide",
      image: "/images/elephant.jpg",
      excerpt: "Discover the best places and seasons to witness wild elephant gatherings across the island's national parks."
    },
    {
      title: "The Magic of Traditional Kandyan Dance",
      date: "Culture & Art",
      image: "/images/dancing.jpg",
      excerpt: "Immerse yourself in the rhythm, vibrant costumes, and rich history of Sri Lanka's traditional dance heritage."
    },
    {
      title: "Unveiling the Secrets Behind Sri Lankan Ritual Masks",
      date: "Heritage",
      image: "/images/masks.jpg",
      excerpt: "Learn about the craftsmanship, ancient folklore, and spiritual significance of hand-carved traditional wooden masks."
    }
  ];

  // Handle Navbar Background Change on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Slideshow Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  return (
    <div className="w-full bg-[#080b11] text-white font-sans antialiased overflow-x-hidden">
      
      {/* ----------------- FIXED LUXURY NAVBAR ----------------- */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#080b11]/90 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-2xl' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}>
        <div className="w-full px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name (Far Left Corner) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={myLogo} 
                alt="Jai Lanka Logo" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-105" 
              />
              <div className="text-left">
                <span className="block text-sm md:text-base font-serif font-bold tracking-[0.25em] text-white uppercase leading-tight">
                  JAI LANKA <span className="text-amber-400">TOURS</span>
                </span>
                <span className="block text-[8px] md:text-[9px] tracking-[0.3em] text-amber-200/60 uppercase font-serif">
                  Experience The Art Of  Luxury Travel
                </span>
              </div>
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[11px] font-medium uppercase tracking-[0.2em]">
            <Link to="/" className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap">Home</Link>

            {/* Itineraries Dropdown */}
            <div 
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setOpenDropdown('itineraries')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="hover:text-amber-400 transition-colors flex items-center gap-1 focus:outline-none whitespace-nowrap">
                ITINERARIES
                <FaChevronDown className="w-2.5 h-2.5 text-amber-400/80" />
              </button>
              
              {openDropdown === 'itineraries' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-[#0d121d]/95 backdrop-blur-xl border border-amber-500/20 rounded-xl shadow-2xl min-w-[240px] z-50 overflow-hidden py-2 animate-fadeIn">
                  <Link 
                    to="/itineraries" 
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-3 hover:bg-amber-500 hover:text-black transition-all text-[10px] font-bold uppercase tracking-wider border-b border-white/5 bg-white/5 text-amber-400"
                  >
                    All Itineraries
                  </Link>
                  {itineraryLinks.map((item, index) => (
                    <Link 
                      key={index}
                      to={item.path} 
                      onClick={() => setOpenDropdown(null)}
                      className="block px-5 py-3 text-slate-300 hover:bg-amber-500/20 hover:text-amber-300 transition-all text-[10px] uppercase tracking-wider border-b border-white/5 last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/day-tours" className="hover:text-amber-400 transition-colors whitespace-nowrap">Day Tours</Link>
            <Link to="/accommodation" className="hover:text-amber-400 transition-colors whitespace-nowrap">Accommodation</Link>
            <Link to="/discoversrilanka" className="hover:text-amber-400 transition-colors whitespace-nowrap">Discover Sri Lanka</Link>
            <Link to="/blog" className="hover:text-amber-400 transition-colors whitespace-nowrap">Blog</Link>
            <Link to="/our-story" className="hover:text-amber-400 transition-colors whitespace-nowrap">Our Story</Link>
          </nav>

          {/* Far Right Action Button */}
          <div className="flex items-center">
            <Link to="/plan-journey">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20">
                Plan Journey
              </button>
            </Link>
          </div>

        </div>
      </header>

      {/* ----------------- HERO SLIDESHOW SECTION ----------------- */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Images */}
        {slideshowImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            <img 
              src={img} 
              alt={`Sri Lanka Luxury ${index + 1}`} 
              className="w-full h-full object-cover brightness-[60%]" 
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-black/50 z-20" />

        {/* Hero Content */}
        <div className="relative z-30 max-w-4xl mx-auto text-center px-4 mt-12">
          <img 
            src={myLogo} 
            alt="Jai Lanka Logo Hero" 
            className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4 filter drop-shadow-2xl animate-pulse" 
          />
          <h1 className="text-3xl md:text-6xl font-serif font-light tracking-[0.2em] uppercase text-white mb-4">
            JAI LANKA <span className="italic font-normal text-amber-400">TOURS</span>
          </h1>
          <p className="text-xs md:text-base font-serif italic tracking-[0.3em] text-amber-200/80 mb-8 max-w-xl mx-auto">
            Experience The Art Of  Luxury Travel 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/itineraries">
              <button className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-[0.25em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-amber-500/20 w-full sm:w-auto">
                Explore Itineraries
              </button>
            </Link>
            <Link to="/plan-journey">
              <button className="border border-white/30 hover:border-amber-400 text-white hover:text-amber-400 text-xs font-semibold uppercase tracking-[0.25em] px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-xs w-full sm:w-auto">
                Tailor-Made Tour
              </button>
            </Link>
          </div>
        </div>

        {/* Slideshow Lines */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slideshowImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all duration-500 ${idx === currentSlide ? "w-10 bg-amber-400" : "w-4 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* ----------------- WELCOME / ESSENCE OF SRI LANKA ----------------- */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Welcome to Jai Lanka Tours</span>
        <h2 className="text-2xl md:text-4xl font-serif font-light text-white mb-6">
          Unveil The Pearl Of The Indian Ocean In Unrivaled Comfort
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-light">
          We curate ultra-private, tailor-made luxury journeys designed for discerning travelers. From private helicopter transfers above misty tea mountains to exclusive safari glamping in wild sanctuaries, we turn your Sri Lankan dream into a golden memory.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#0f1523]/50 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
            <FaGem className="text-amber-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-lg text-white mb-2">Bespoke itineraries</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Crafted exclusively around your preferences, pace, and passions.</p>
          </div>
          <div className="bg-[#0f1523]/50 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
            <FaCarAlt className="text-amber-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-lg text-white mb-2">VIP Chauffeur Fleet</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Travel in ultimate luxury with modern, luxury vehicles and English speaking guides.</p>
          </div>
          <div className="bg-[#0f1523]/50 p-8 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
            <FaHotel className="text-amber-400 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-lg text-white mb-2">Handpicked Luxury Stays</h3>
            <p className="text-xs text-slate-400 leading-relaxed">5-Star luxury villas, heritage tea bungalows, and elite beachfront resorts.</p>
          </div>
        </div>
      </section>

      {/* ----------------- FEATURED LUXURY ITINERARIES ----------------- */}
      <section className="py-20 bg-[#06090e] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-2">Curated Experiences</span>
              <h2 className="text-2xl md:text-4xl font-serif text-white">Popular Signature Journeys</h2>
            </div>
            <Link to="/itineraries" className="text-amber-400 hover:text-amber-300 text-xs font-semibold tracking-widest uppercase mt-4 md:mt-0 flex items-center gap-2">
              View All Journeys &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour, idx) => (
              <div key={idx} className="bg-[#0f1523] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 right-4 bg-amber-400 text-black text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {tour.tag}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-amber-400/80 text-[10px] font-medium tracking-widest uppercase block mb-1">{tour.duration}</span>
                  <h3 className="text-lg font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">{tour.title}</h3>
                  <p className="text-slate-400 text-xs mb-6 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-amber-400" /> {tour.highlights}
                  </p>
                  <Link to="/plan-journey">
                    <button className="w-full bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl transition-all duration-300">
                      Request Itinerary
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- FEATURED DAY TOURS ----------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-2">Short Excursions</span>
            <h2 className="text-2xl md:text-4xl font-serif text-white">Popular Day Tours</h2>
          </div>
          <Link to="/day-tours" className="text-amber-400 hover:text-amber-300 text-xs font-semibold tracking-widest uppercase mt-4 md:mt-0 flex items-center gap-2">
            View All Day Tours &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDayTours.map((tour, idx) => (
            <div key={idx} className="bg-[#0f1523] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
              <div className="relative h-64 overflow-hidden">
                <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 right-4 bg-amber-400 text-black text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {tour.tag}
                </span>
              </div>
              <div className="p-6">
                <span className="text-amber-400/80 text-[10px] font-medium tracking-widest uppercase block mb-1">{tour.duration}</span>
                <h3 className="text-lg font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">{tour.title}</h3>
                <p className="text-slate-400 text-xs mb-6 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-amber-400" /> {tour.highlights}
                </p>
                <Link to="/day-tours">
                  <button className="w-full bg-white/5 hover:bg-amber-400 hover:text-black border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl transition-all duration-300">
                    Explore Day Tour
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- LATEST BLOG & ARTICLES ----------------- */}
      <section className="py-20 bg-[#06090e] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-2">Travel Journal</span>
              <h2 className="text-2xl md:text-4xl font-serif text-white">Latest From Our Blog</h2>
            </div>
            <Link to="/blog" className="text-amber-400 hover:text-amber-300 text-xs font-semibold tracking-widest uppercase mt-4 md:mt-0 flex items-center gap-2">
              View All Posts &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog, idx) => (
              <div key={idx} className="bg-[#0f1523] rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-500 group flex flex-col justify-between">
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <span className="text-amber-400/80 text-[10px] font-medium tracking-widest uppercase block mb-2">{blog.date}</span>
                    <h3 className="text-lg font-serif text-white mb-3 group-hover:text-amber-400 transition-colors">{blog.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link to="/blog" className="text-amber-400 hover:text-amber-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                    Read Story &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- TESTIMONIALS ----------------- */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <span className="text-amber-400 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Guest Experiences</span>
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-12">What Our Luxury Travelers Say</h2>

        <div className="bg-[#0f1523]/80 border border-white/10 p-8 md:p-12 rounded-3xl relative">
          <div className="flex justify-center text-amber-400 gap-1 mb-6">
            {[...Array(5)].map((_, i) => <FaStar key={i} size={16} />)}
          </div>
          <blockquote className="text-slate-300 font-serif italic text-base md:text-lg leading-relaxed mb-6">
            "Jai Lanka Tours crafted the most unforgettable 10 days in Sri Lanka for our honeymoon. From private tea tasting in Nuwara Eliya to seamless chauffeur service in a luxury SUV, every single detail was world-class!"
          </blockquote>
          <cite className="not-italic text-xs font-bold text-amber-400 tracking-widest uppercase block">
            — Alexander & Elena (United Kingdom)
          </cite>
        </div>
      </section>

      {/* ----------------- FOOTER SECTION ----------------- */}
      <footer className="bg-[#040609] border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={myLogo} alt="Jai Lanka Logo" className="w-10 h-10 object-contain" />
              <span className="font-serif font-bold text-white text-sm tracking-widest">JAI LANKA TOURS</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your premier luxury travel partner in Sri Lanka. Creating timeless, bespoke island memories.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link to="/itineraries" className="hover:text-amber-400">Tailor-Made Itineraries</Link></li>
              <li><Link to="/day-tours" className="hover:text-amber-400">Day Excursions</Link></li>
              <li><Link to="/accommodation" className="hover:text-amber-400">Luxury Resorts</Link></li>
              <li><Link to="/our-story" className="hover:text-amber-400">About Our Agency</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Contact Concierge</h4>
            <p className="text-xs text-slate-400 mb-2">Email: info@jailankatours.com</p>
            <p className="text-xs text-slate-400 mb-2">Hotline: +94 74 096 6449</p>
            <p className="text-xs text-slate-400">Location: Colombo & Galle, Sri Lanka</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">Official Recognition</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              SLTDA Approved Tourist Chauffeur & Tour Operator in Sri Lanka.
            </p>
            <Link to="/plan-journey">
              <button className="bg-amber-400 hover:bg-amber-300 text-black text-[10px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg w-full">
                Contact Travel Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500">
          <p>© {new Date().getFullYear()} Jai Lanka Tours. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with Luxury Excellence</p>
        </div>
      </footer>

      {/* ----------------- FLOATING WHATSAPP BUTTON ----------------- */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/94740966449" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 transition-all text-white shadow-2xl hover:scale-110 duration-300 border-2 border-white/20"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>

    </div>
  );
};

export default Home;