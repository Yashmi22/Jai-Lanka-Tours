import React from 'react';
import { Link } from 'react-router-dom';

// --- Premium Tour Card Component ---
const TourCard = ({ image, title, category, duration, difficulty, price, isLarge }) => {
  return (
    <div className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,84,131,0.25)] ${isLarge ? 'md:col-span-2 h-[500px]' : 'h-[500px]'}`}>
      {/* Image with subtle zoom on hover */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
      />
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2e]/90 via-[#0a1a2e]/20 to-transparent"></div>

      {/* Floating Category Tag */}
      <div className="absolute top-6 left-6">
        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
          {category}
        </span>
      </div>

      {/* Content Area */}
      <div className="absolute bottom-0 left-0 w-full p-10 text-white">
        <div className="flex items-center gap-2 mb-4 opacity-70">
          <span className="material-symbols-outlined text-[18px]">schedule</span>
          <span className="text-[11px] font-bold uppercase tracking-widest">{duration}</span>
          <span className="mx-2 opacity-30">|</span>
          <span className="material-symbols-outlined text-[18px]">tavel_explore</span>
          <span className="text-[11px] font-bold uppercase tracking-widest">{difficulty}</span>
        </div>

        <h3 className={`${isLarge ? 'text-5xl' : 'text-3xl'} font-headline font-bold mb-6 leading-tight transition-transform duration-500 group-hover:-translate-y-2`}>
          {title}
        </h3>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Price per person</p>
            <p className="text-3xl font-bold font-headline">Rs. {price}</p>
          </div>
          
         
<Link 
  to={`/tour/${title.toLowerCase().replace(/ /g, '-')}`} 
  className="bg-white text-[#005483] px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#005483] hover:text-white inline-block text-center"
>
  View Details
</Link>
        </div>
      </div>
    </div>
  );
};

// --- Main Day Tours Page ---
const DayTours = () => {
  const tours = [
    {
      title: "Sigiriya: The Lion Rock Fortress",
      category: "World Heritage",
      image: "/images/sigiriya.jpg",
      duration: "04 Hours",
      difficulty: "Moderate",
      price: "5000",
      isLarge: true
    },
    {
      title: "Galle Fort Colonial Walk",
      category: "Heritage",
      image: "/images/galle_fort.jpg",
      duration: "03 Hours",
      difficulty: "Easy",
      price: "3500",
      isLarge: false
    },
    {
      title: "Nine Arch Bridge & Ella Rock Hike",
      category: "Wildlife",
      image: "/images/nine_arch.jpg",
      duration: "06 Hours",
      difficulty: "Adventure",
      price: "8500",
      isLarge: false
    },
    {
      title: "Kandy: The Sacred City Tour",
      category: "Cultural",
      image: "/images/temple_truth.jpg",
      duration: "05 Hours",
      difficulty: "Relaxed",
      price: "4000",
      isLarge: true
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section with Extra Padding for Navbar */}
      <div className="pt-40 pb-24 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <p className="text-[#005483] font-bold text-[11px] uppercase tracking-[0.4em] mb-6">Unforgettable Moments</p>
            <h1 className="text-6xl md:text-7xl font-headline font-bold text-slate-900 mb-8 leading-[1.1]">
              Curated Day <span className="italic font-light text-[#005483]">Excursions</span>
            </h1>
            <div className="w-20 h-1 bg-[#005483] mb-8 rounded-full"></div>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Step beyond the ordinary. Our handpicked day tours are designed for the discerning traveler, blending cultural depth with unparalleled comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Modern Grid Layout */}
      <div className="max-w-screen-2xl mx-auto px-10 -mt-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>

      {/* Enhanced CTA / Contact Section */}
      <section className="max-w-screen-2xl mx-auto px-10 mb-32">
        <div className="relative rounded-[40px] overflow-hidden bg-[#0a1a2e] py-24 px-16 flex flex-col md:flex-row items-center justify-between border border-white/5">
          {/* Background subtle pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#005483_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          <div className="relative z-10 max-w-xl text-left">
            <h2 className="text-5xl font-headline text-white font-bold mb-6">Looking for a <span className="italic font-light">Custom Journey?</span></h2>
            <p className="text-slate-400 text-lg mb-10 font-light">Let our travel specialists craft a bespoke itinerary tailored exclusively to your preferences.</p>
            <button className="bg-white text-[#0a1a2e] px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#005483] hover:text-white transition-all shadow-xl">
              Inquire Now
            </button>
          </div>

          <div className="relative z-10 mt-16 md:mt-0">
            <div className="w-80 h-80 rounded-full border border-white/10 flex items-center justify-center p-4">
               <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/5">
                  <img src="https://images.unsplash.com/photo-1586902197503-e71026292412?q=80&w=600" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Specialist" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayTours;