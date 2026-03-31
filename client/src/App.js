import React, { useState, useEffect } from 'react';
import './index.css';

// Images Import (පින්තූර නිවැරදිව assets folder එකේ තිබිය යුතුය)
import myLogo from './assets/logo.PNG';
import hero1 from './assets/hero1.avif';
import hero2 from './assets/hero2.avif';
import hero3 from './assets/hero3.webp';
import hero4 from './assets/hero4.avif';

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
    <div className="font-body bg-white text-slate-900">
      
      {/* 1. Transparent Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={myLogo} alt="Jai Lanka Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-headline font-bold text-[#005483] tracking-tight">Jai Lanka Travel & Tourism</span>
          </div>

          <div className="hidden lg:flex gap-10 text-[13px] font-semibold uppercase tracking-widest text-slate-600">
            <a href="#home" className="hover:text-[#005483] transition-colors border-b-2 border-[#005483]">Home</a>
            <a href="#itineraries" className="hover:text-[#005483] transition-colors">Itineraries</a>
            <a href="#tours" className="hover:text-[#005483] transition-colors">Experiences</a>
            <a href="#discover" className="hover:text-[#005483] transition-colors">Discover</a>
          </div>

          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-slate-500 cursor-pointer">search</span>
            <button className="bg-[#005483] text-white px-7 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-blue-900 transition-all">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section with Zoom Effect */}
      <section className="relative h-screen w-full flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
              <img src={img} alt="Hero" className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentImage ? "scale-110" : "scale-100"}`} />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-10 w-full text-white">
          <p className="text-sm uppercase tracking-[0.4em] mb-6 font-bold opacity-80">Sri Lanka Awaits</p>
          <h1 className="text-7xl md:text-8xl font-headline mb-8 leading-[1.1]">
            The Call of <br /><span className="italic font-light">the Wild</span>
          </h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-xl mb-10 leading-relaxed">
            Experience the untouched beauty of the Pearl of the Indian Ocean through a lens of curated luxury.
          </p>
          <div className="flex gap-5">
            <button className="bg-[#005483] text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#005483] transition-all">Plan Your Trip</button>
            <button className="border border-white text-white px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#005483] transition-all">Explore More</button>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 max-w-screen-2xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-gray-100">
        {[
          { icon: 'eco', title: 'Sustainability First', desc: 'Our journeys support local communities and preserve delicate ecosystems.' },
          { icon: 'diamond', title: 'Curated Excellence', desc: 'Every experience is personally vetted for luxury and authenticity standards.' },
          { icon: 'temple_hindu', title: 'Deep Heritage', desc: 'We connect you with the soul of Sri Lanka through expert guides.' }
        ].map((f, i) => (
          <div key={i} className="text-center md:text-left group">
            <span className="material-symbols-outlined text-4xl text-[#005483] mb-6 group-hover:scale-110 transition-transform block">{f.icon}</span>
            <h3 className="text-xl font-headline font-bold mb-4">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. Trending Itineraries (Grid from Image) */}
      <section className="py-24 max-w-screen-2xl mx-auto px-10" id="itineraries">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase mb-3">Curated Collections</p>
            <h2 className="text-5xl font-headline text-slate-900 font-bold">Trending Itineraries</h2>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-[#005483] pb-1 hover:text-[#005483]">View All Itineraries</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[600px]">
          {/* Main Card */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
            <img src="https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1200" alt="Beach" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <div className="flex gap-3 mb-4 font-bold text-[10px] uppercase tracking-widest">
                <span className="bg-[#005483] px-3 py-1">12 Days</span>
                <span className="bg-white/20 backdrop-blur-md px-3 py-1">Luxury Boutique</span>
              </div>
              <h3 className="text-5xl font-headline mb-4">The Royal & Azure Loop</h3>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest">Learn More</button>
            </div>
          </div>

          {/* Side Cards Stack */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {[
              { title: 'Wild Heart Safari', img: 'https://images.unsplash.com/photo-1620619076118-a1443d3b76bb?q=80&w=600', meta: '5 Days • Adventure' },
              { title: 'Mystic Mountains', img: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=600', meta: '7 Days • Wellness' }
            ].map((card, i) => (
              <div key={i} className="flex-1 relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-headline mb-2">{card.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{card.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stories from the Island (New Section) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="text-center mb-16">
             <h2 className="text-5xl font-headline mb-4">Stories from the Island</h2>
             <p className="text-slate-500 max-w-lg mx-auto">Insights, travel tips, and our latest finds from the untamed corners of Sri Lanka.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'The Architecture of Bliss', category: 'LIFESTYLE', img: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600' },
              { title: 'Spices and Soul', category: 'CULINARY', img: 'https://images.unsplash.com/photo-1596797052317-09d437149bc5?q=80&w=600' },
              { title: 'Chasing Southern Light', category: 'TRAVEL', img: 'https://images.unsplash.com/photo-1563290240-422998399e52?q=80&w=600' }
            ].map((story, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <img src={story.img} className="w-full h-64 object-cover" alt={story.title} />
                <div className="p-8">
                  <p className="text-[10px] font-bold text-amber-600 tracking-widest mb-3">{story.category}</p>
                  <h3 className="text-xl font-headline font-bold mb-4">{story.title}</h3>
                  <button className="text-xs font-bold border-b border-black pb-1 hover:text-[#005483] hover:border-[#005483]">Read Story</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial Quote */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-10">
          <span className="material-symbols-outlined text-5xl text-[#005483] opacity-20 mb-8 italic">format_quote</span>
          <p className="text-3xl md:text-4xl font-headline italic leading-relaxed text-slate-700 mb-10">
            "Our trip with Jai Lanka was nothing short of transformative. They managed to find the perfect balance between high-end luxury and raw, authentic experiences."
          </p>
          <div className="flex flex-col items-center gap-3">
             <img src="https://i.pravatar.cc/100?img=33" alt="Client" className="w-16 h-16 rounded-full border-4 border-slate-50" />
             <p className="font-bold uppercase tracking-widest text-xs">Julian Alexander</p>
             <p className="text-slate-400 text-[10px] uppercase tracking-widest">United Kingdom</p>
          </div>
        </div>
      </section>

      {/* 7. CTA - Footer Section */}
      <footer className="bg-[#0a1a2e] text-white pt-24 pb-12">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="md:col-span-1">
              <h4 className="text-2xl font-headline mb-6 text-[#005483]">Jai Lanka</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Pioneering sustainable luxury travel in the heart of the Indian Ocean.</p>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#005483] cursor-pointer transition-colors"><span className="material-symbols-outlined text-sm">facebook</span></div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#005483] cursor-pointer transition-colors"><span className="material-symbols-outlined text-sm">camera_alt</span></div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-[10px] tracking-[0.3em] uppercase mb-8 opacity-50">Explore</h5>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors">Cultural Triangle</li>
                <li className="hover:text-white cursor-pointer transition-colors">Tea Country</li>
                <li className="hover:text-white cursor-pointer transition-colors">Southern Coast</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[10px] tracking-[0.3em] uppercase mb-8 opacity-50">Support</h5>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[10px] tracking-[0.3em] uppercase mb-8 opacity-50">Newsletter</h5>
              <p className="text-xs text-slate-400 mb-6">Stay inspired with curated travel stories.</p>
              <div className="relative">
                <input type="text" placeholder="Your Email" className="bg-white/5 border border-white/10 px-4 py-3 rounded-sm w-full text-sm outline-none focus:border-[#005483]" />
                <button className="absolute right-2 top-2 bg-[#005483] p-1.5 rounded-sm"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">© 2026 Jai Lanka Travel & Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;