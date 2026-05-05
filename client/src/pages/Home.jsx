import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = ({ heroImages, currentImage }) => {
  const navigate = useNavigate();
  
  const initialItineraries = [
    { id: 'cultural-odyssey', title: 'THE CULTURAL ODYSSEY', category: 'CULTURAL TOURS', duration: '08 Nights & 09 Days', img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=600' },
    { id: 'wander-awaken', title: 'WANDER & AWAKEN', category: 'AYURVEDIC TOURS', duration: '10 Nights & 11 Days', img: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=600' },
    { id: 'adventure-love', title: 'ADVENTURE, CULTURE & LOVE', category: 'HONEYMOON TOURS', duration: '16 Nights & 17 Days', img: 'https://images.unsplash.com/photo-1620619076118-a1443d3b76bb?q=80&w=600' },
    { id: 'wildlife-expedition', title: 'WILDLIFE EXPEDITION', category: 'SAFARI TOURS', duration: '05 Nights & 06 Days', img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600' }
  ];

  const initialJournalStories = [
    { id: 'photography-tips', title: 'Best Places for Photography', category: 'Photography', img: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600' },
    { id: 'majestic-elephants', title: 'The Majestic Elephants', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600' },
    { id: 'adams-peak', title: 'Climbing Adam\'s Peak', category: 'Adventure', img: 'https://images.unsplash.com/photo-1563290240-422998399e52?q=80&w=600' },
    { id: 'coastal-bliss', title: 'Coastal Bliss', category: 'Relaxation', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600' }
  ];

  const [itineraries, setItineraries] = useState(initialItineraries);
  const [journalStories, setJournalStories] = useState(initialJournalStories);

  useEffect(() => {
    const interval = setInterval(() => {
      setItineraries((prev) => {
        const next = [...prev];
        const first = next.shift();
        next.push(first);
        return next;
      });
      setJournalStories((prev) => {
        const next = [...prev];
        const first = next.shift();
        next.push(first);
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
              <img src={img} alt="Hero" className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${index === currentImage ? "scale-110" : "scale-100"}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            </div>
          ))}
        </div>
        
        {/* Header එකට පහළින් content එක පෙන්වීමට pt-40 භාවිතා කළා */}
        <div className="relative z-8 max-w-screen-xl mx-auto px-6 w-full text-white text-center pt-60">
          <p className="text-lg md:text-2xl font-serif opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide">
            Curating bespoke journeys through the emerald landscapes and hidden gems of <span className="font-medium text-white">Ceylon</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => navigate('/plan-journey')}
              className="w-64 py-5 bg-[#00a2ff] text-white text-[12px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-2xl hover:-translate-y-1"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => scrollToSection('itineraries')}
              className="w-64 py-5 bg-transparent backdrop-blur-sm border-2 border-white/60 text-white text-[12px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Itineraries
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
                <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800" alt="Sri Lanka Heritage" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block w-12 h-[2px] bg-blue-500 mb-6"></div>
              <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-blue-500 mb-4">The Soul of Ceylon</p>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 text-slate-950 leading-tight">
                Magical Moments, <br />
                <span className="italic font-light">Unforgettable experiences</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
                Ceylon is a truly beautiful island. From its cascading waterfalls to its emerald-green tea plantations and ancient ruins, our guides take you beyond the guidebook to uncover the soul of Sri Lanka.
              </p>
              <button onClick={() => navigate('/our-story')} className="group flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.3em] text-slate-900">
                Discover Our Story 
                <span className="w-8 h-[1px] bg-slate-900 group-hover:w-12 transition-all"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ITINERARIES SECTION */}
      <section className="py-24 bg-slate-50" id="itineraries">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">Curated Itineraries</h2>
              <p className="text-slate-500 font-light">Handcrafted journeys designed to immerse you in the best of Sri Lanka's culture, nature, and luxury.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itineraries.map((item) => (
              <div key={item.id} onClick={() => navigate(`/itinerary/${item.id}`)} className="group cursor-pointer">
                <div className="relative h-[450px] overflow-hidden rounded-2xl mb-6 shadow-lg">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[9px] font-bold tracking-[0.3em] text-blue-400 uppercase mb-2">{item.category}</p>
                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BANNER SECTION */}
      <section className="py-24 relative overflow-hidden bg-slate-950 text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
           <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
             Looking for an <span className="italic">Exclusive</span> <br /> Customized Tour?
           </h2>
           <Link to="/plan-journey">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
        Start Planning Now
    </button>
</Link>
        </div>
      </section>

      {/* 5. JOURNAL SECTION */}
      <section className="py-24 bg-white" id="journal">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif text-slate-900 mb-16">The Travel Journal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {journalStories.slice(0, 3).map((story) => (
              <div key={story.id} onClick={() => navigate(`/tour/${story.id}`)} className="group cursor-pointer text-left">
                <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8 shadow-2xl transition-all group-hover:-translate-y-2">
                  <img src={story.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={story.title} />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{story.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;