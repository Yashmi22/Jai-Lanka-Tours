import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ heroImages, currentImage }) => {
  const navigate = useNavigate();
  
  // Itinerary Data - ID එක සමඟ
  const initialItineraries = [
    { id: 'cultural-odyssey', title: 'THE CULTURAL ODYSSEY', category: 'CULTURAL TOURS', duration: '08 Nights & 09 Days', img: 'https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=600' },
    { id: 'wander-awaken', title: 'WANDER & AWAKEN', category: 'AYURVEDIC TOURS', duration: '10 Nights & 11 Days', img: 'https://images.unsplash.com/photo-1558694440-03ade9215d7b?q=80&w=600' },
    { id: 'adventure-love', title: 'ADVENTURE, CULTURE & LOVE', category: 'HONEYMOON TOURS', duration: '16 Nights & 17 Days', img: 'https://images.unsplash.com/photo-1620619076118-a1443d3b76bb?q=80&w=600' },
    { id: 'wildlife-expedition', title: 'WILDLIFE EXPEDITION', category: 'SAFARI TOURS', duration: '05 Nights & 06 Days', img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600' }
  ];

  // Journal Data - ID එක සමඟ
  const initialJournalStories = [
    { id: 'photography-tips', title: 'Best Places for Photography', category: 'Photography', img: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600' },
    { id: 'majestic-elephants', title: 'The Majestic Elephants', category: 'Wildlife', img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=600' },
    { id: 'adams-peak', title: 'Climbing Adam\'s Peak', category: 'Adventure', img: 'https://images.unsplash.com/photo-1563290240-422998399e52?q=80&w=600' },
    { id: 'coastal-bliss', title: 'Coastal Bliss', category: 'Relaxation', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600' }
  ];

  const [itineraries, setItineraries] = useState(initialItineraries);
  const [journalStories, setJournalStories] = useState(initialJournalStories);

  // Auto-rotating logic
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
              <img src={img} alt="Hero" className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${index === currentImage ? "scale-110" : "scale-100"}`} />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 w-full text-white text-center pt-32">
          <div className="mb-6 inline-block py-0 px-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
             <p className="text-[10px] uppercase tracking-[0.5em] font-bold">Discover the Pearl of the Indian Ocean</p>
          </div>
          <h1 className="text-4xl md:text-7xl font-headline mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
            Beyond <span className="italic font-light">Expectations</span>
          </h1>
          <p className="text-lg md:text-2xl font-light italic opacity-90 max-w-2xl mx-auto mb-12 drop-shadow-md">
            Curating unforgettable journeys through the hidden gems of Sri Lanka.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => navigate('/plan-journey')}
              className="group relative bg-[#00a2ff] text-black px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('itineraries')}
              className="bg-white/10 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              View Itineraries
            </button>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
            
            {/* --- LEFT SIDE: IMAGE SECTION (Modern Asymmetric) --- */}
            <div className="w-full md:w-1/2 relative z-10">
              {/* Decorative Offset Box (යටින් තියෙන ලා පැහැති කොටුව) */}
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#f8fafc] rounded-tr-[100px] rounded-bl-[100px] z-0"></div>
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-2xl border-4 border-white z-10 group aspect-[4/5]">
                <img 
                  src="/images/sigiriya.jpg" 
                  alt="Sigiriya Rock Fortress" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                {/* Image Overlay (පින්තූරය උඩින් යන ලා පැහැති තීරය) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Small Decorative Badge (පින්තූරය උඩ තියෙන කුඩා බැජ් එක) */}
              <div className="absolute top-10 -right-10 bg-[#00a2ff] text-white p-6 rounded-full shadow-2xl z-20 animate-pulse hidden md:block">
                  <p className="text-[10px] font-black tracking-widest uppercase">UNESCO</p>
                  <p className="text-xs font-serif italic">Site</p>
              </div>
            </div>

            {/* --- RIGHT SIDE: TEXT CONTENT (Elegant Typography) --- */}
            <div className="w-full md:w-1/2 text-center md:text-left relative z-20">
              {/* Section Tagline */}
              <div className="inline-flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-10 bg-[#e6004c]/30"></span>
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#e6004c]">The Soul of Ceylon</span>
              </div>
              
              {/* Main Headline */}
              <h2 className="text-5xl md:text-7xl font-serif mb-10 tracking-tighter leading-[1.05] text-slate-950">
                Magical Moments, <br />
                Unforgettable <span className="italic font-light text-[#00a2ff]">experiences</span>
              </h2>
              
              {/* Paragraphs (Light & Clean) */}
              <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light max-w-xl mx-auto md:mx-0">
                  <p>
                      Ceylon is a truly beautiful island. From its cascading waterfalls to its emerald-green tea plantations and ancient ruins, our guides take you beyond the guidebook to uncover the soul of Sri Lanka.
                  </p>
                  <p className="opacity-80">
                      Whether you desire a thrilling wildlife safari, a serene wellness retreat, or a deep dive into our rich cultural heritage, we curate journeys that are as unique as you are.
                  </p>
              </div>
              
              {/* Modern luxury style button */}
              <div className="mt-16 relative inline-block group">
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-slate-900 rounded-full translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-300"></div>

                 
                  <button 
                  onClick={() => navigate('/our-story')}
                  className="relative bg-[#e6004c] text-white px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 active:scale-95 shadow-lg shadow-red-500/30">
                      Discover Our Story
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Itineraries Section */}
      <section className="relative py-24 overflow-hidden" id="itineraries">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=2000" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <h2 className="text-5xl font-headline text-white mb-16 text-center">Curated Itineraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itineraries.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/itinerary/${item.id}`)}
                className="group relative h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 transition-all duration-500"
              >
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/70 mb-2">{item.category}</p>
                  <h3 className="text-2xl font-headline font-bold mb-2">{item.title}</h3>
                  <p className="text-sm font-light text-white/90 mb-4">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Custom Tour Banner */}
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

      {/* 5. Travel Journal Section */}
      <section className="py-24 bg-slate-50" id="journal">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
             <p className="text-[10px] uppercase tracking-[0.3em] text-[#00a2ff] font-bold mb-4">Latest Stories</p>
             <h2 className="text-5xl font-headline text-slate-900">Our Travel Journal</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalStories.slice(0, 3).map((story) => (
              <div 
                key={story.id} 
                onClick={() => navigate(`/tour/${story.id}`)}
                className="group cursor-pointer relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
              >
                <img src={story.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={story.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#00a2ff] mb-2">{story.category}</p>
                  <h3 className="text-2xl font-headline font-bold mb-4">{story.title}</h3>
                  <div className="text-[10px] font-bold uppercase tracking-widest border-b border-white w-fit pb-1 group-hover:border-[#00a2ff] group-hover:text-[#00a2ff] transition-all">
                    Read More →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;