import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Pages Import
import DayTours from './pages/DayTours';
import TourDetails from './pages/TourDetails';
import DiscoverSriLanka from './pages/DiscoverSriLanka';
import OurStory from './pages/OurStory';
import Itineraries from './pages/iternaries';

// Images Import
import myLogo from './assets/logo.PNG';
import hero1 from './assets/hero 1.jpg';
import hero2 from './assets/hero 2.jpg';
import hero3 from './assets/hero 3.jpg';
import hero4 from './assets/hero 4.jpg';

// --- Home Component (Modern Elegant Version) ---
const Home = ({ heroImages, currentImage }) => {
  return (
    <>
      {/* 1. New Elegant Hero Section */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0">
    {heroImages.map((img, index) => (
      <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
        <img src={img} alt="Hero" className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${index === currentImage ? "scale-110" : "scale-100"}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
      </div>
    ))}
  </div>
  
  {/* Centered Content */}
  <div className="relative z-10 max-w-screen-xl mx-auto px-6 w-full text-white text-center">
    <div className="mb-6 inline-block py-1 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
       <p className="text-[10px] uppercase tracking-[0.5em] font-bold">Discover the Pearl of the Indian Ocean</p>
    </div>

    <h1 className="text-4xl md:text-7xl font-headline mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
      Beyond <span className="italic font-light">Expectations</span>
    </h1>
    
    <p className="text-lg md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto mb-12 drop-shadow-md">
      Curating unforgettable journeys through the hidden gems of Sri Lanka.
    </p>

    {/* Modern Call to Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button className="group relative bg-[#00a2ff] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 shadow-xl shadow-blue-500/20">
        <span className="relative z-10">Start Your Journey</span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>
      
      <button className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
        View Itineraries
      </button>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60">
       <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
       <span className="material-symbols-outlined">expand_more</span>
    </div>
  </div>
</section>

     
      {/* 3. Intro Section (Text + Floating Image) */}
      <section className="py-24 max-w-screen-xl mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-5/12">
           <img src="/images/sigiriya.jpg" alt="Sigiriya" className="w-full rounded-tl-full rounded-tr-full border-8 border-slate-50 shadow-xl" />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-headline text-slate-900 mb-6 leading-tight">
            Magical Memories, <br />
            <span className="italic font-light"> experiences</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
            Ceylon is a truly beautiful island. From its cascading waterfalls to its emerald-green tea plantations and ancient ruins, our guides take you beyond the guidebook to uncover the soul of Sri Lanka. 
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
            Whether you desire a thrilling wildlife safari, a serene wellness retreat, or a deep dive into our rich cultural heritage, we curate journeys that are as unique as you are.
          </p>
          <button className="bg-[#e6004c] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors">
            Read More About Us
          </button>
        </div>
      </section>

      {/* 4. Curated Itineraries */}
      <section className="py-24 bg-slate-50" id="itineraries">
        <div className="max-w-screen-xl mx-auto px-10 text-center">
          <h2 className="text-5xl font-headline text-slate-900 mb-16">Curated Itineraries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visit Dambulla Cave Temple', img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=600', desc: 'Indulge in romantic beach walks, sunset cruises, and private dinners.' },
              { title: 'Sri Lanka Wellness Tour', img: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=600', desc: 'Rejuvenate your mind and body with Ayurveda and Yoga.' },
              { title: 'Fascinating Sri Lanka', img: 'https://images.unsplash.com/photo-1620619076118-a1443d3b76bb?q=80&w=600', desc: 'A perfect blend of culture, wildlife, and breathtaking scenery.' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all p-4 border border-slate-100 group">
                <div className="overflow-hidden rounded-xl mb-6 h-64">
                   <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <h3 className="text-2xl font-headline mb-3 text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-500 font-light mb-6 px-4">{item.desc}</p>
                <button className="text-[10px] font-bold text-[#00a2ff] uppercase tracking-widest mb-4 hover:text-[#e6004c] transition-colors">
                  View More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Custom Tour Banner */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-10">
           <h2 className="text-3xl md:text-5xl font-headline text-slate-900 mb-4">
             Looking for an <br />
             <span className="italic font-bold">Exclusive Customized Tour?</span>
           </h2>
           <p className="text-xl font-headline italic text-slate-500 mb-8">No Problem</p>
           <button className="bg-[#e6004c] text-white px-10 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg shadow-red-500/30">
              Tailor Make It
           </button>
        </div>
      </section>

      {/* 6. Travel Journal / Blog */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-10 text-center">
          <h2 className="text-5xl font-headline text-slate-900 mb-16">Our Travel Journal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Best Places for Photography', img: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600' },
              { title: 'The Majestic Elephants', img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600' },
              { title: 'Climbing Adam\'s Peak', img: 'https://images.unsplash.com/photo-1563290240-422998399e52?q=80&w=600' }
            ].map((story, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
                  <img src={story.img} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" alt={story.title} />
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Travel Guide</p>
                <h3 className="text-xl font-headline font-bold text-slate-800 mb-4 hover:text-[#00a2ff] transition-colors">{story.title}</h3>
                <button className="text-[10px] font-bold text-[#00a2ff] uppercase tracking-widest">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- Main App Component ---
function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <Router>
      <div className="font-body bg-white text-slate-900">
        
        {/* Navigation Bar (Updated to look more transparent and clean) */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm transition-all duration-300">
          <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={myLogo} alt="Jai Lanka Logo" className="w-12 h-12 object-contain" />
            </Link>

            <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-600">
              <Link to="/" className="hover:text-[#00a2ff] transition-colors">Home</Link>
              <Link to="/itineraries" className="hover:text-[#00a2ff] transition-colors">Itineraries</Link>
              <Link to="/day-tours" className="hover:text-[#00a2ff] transition-colors">Day Tours</Link>
              <Link to="/discoversrilanka" className="hover:text-[#00a2ff] transition-colors">Discover Sri Lanka</Link>
              <Link to="/our-story" className="hover:text-[#00a2ff] transition-colors">Our Story</Link>
            </div>

            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-500 cursor-pointer hover:text-slate-900">search</span>
              <button className="bg-[#00a2ff] text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors">Enquire Now</button>
            </div>
          </div>
        </nav>

        {/* Content Routes */}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home heroImages={heroImages} currentImage={currentImage} />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/day-tours" element={<DayTours />} />
            <Route path="/tour/:id" element={<TourDetails />} />
            <Route path="/discoversrilanka" element={<DiscoverSriLanka />} />
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-[#0a1a2e] text-white pt-24 pb-12 mt-auto">
          <div className="max-w-screen-xl mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 text-left">
              <div>
                <img src={myLogo} alt="Logo" className="w-16 h-16 mb-6 grayscale brightness-200" />
                <p className="text-slate-400 text-sm leading-relaxed mb-6">Hallmark of Sri Lankan Travel. Specializing in bespoke luxury tours.</p>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center cursor-pointer hover:bg-slate-800"><span className="material-symbols-outlined text-sm">public</span></div>
                   <div className="w-8 h-8 rounded-full border border-slate-500 flex items-center justify-center cursor-pointer hover:bg-slate-800"><span className="material-symbols-outlined text-sm">mail</span></div>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-[10px] tracking-widest uppercase mb-8 text-slate-500">Quick Links</h5>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/day-tours" className="hover:text-white transition-colors">Day Tours</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[10px] tracking-widest uppercase mb-8 text-slate-500">Experiences</h5>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li>Wildlife Safari</li>
                  <li>Cultural Triangle</li>
                  <li>Honeymoon Tours</li>
                  <li>Wellness & Ayurveda</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-[10px] tracking-widest uppercase mb-8 text-slate-500">Contact</h5>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-[#00a2ff]">call</span> +94 11 234 5678</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-[#00a2ff]">mail</span> hello@jailanka.com</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-[#00a2ff]">location_on</span> Colombo, Sri Lanka</li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4 md:mb-0">© 2026 Jai Lanka Tours. All Rights Reserved.</p>
              <div className="flex justify-center gap-6 text-[10px] text-slate-500 uppercase tracking-widest">
                 <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                 <span className="hover:text-white cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;