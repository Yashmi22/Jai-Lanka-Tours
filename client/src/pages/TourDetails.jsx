import React from 'react';
import { useNavigate } from 'react-router-dom';

const TourDetails = () => {
  const navigate = useNavigate();
  
  return (
    // මුළු පිටුවටම අදාළ ලා නිල්/අළු gradient පසුබිම
    <div className="w-full bg-gradient-to-b from-[#87b9df] via-[#dadbdb] to-[#f4f7f6] font-sans text-slate-800 min-h-screen">

      {/* --- 1. Hero Section --- */}
      <section className="relative h-[90vh] w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/images/anuradhapura imghero.webp" 
             alt="Anuradhapura Day Tour" 
             className="w-full h-full object-cover" 
           />
           {/* Dark overlay for text visibility */}
           <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Navigation */}
                          <nav className="absolute top-0 w-full p-8 flex justify-center items-center gap-6 md:gap-12 text-[10px] md:text-xs tracking-[0.2em] font-bold z-10 uppercase">       
           <span className="cursor-pointer hover:opacity-70 transition">About</span>
           <span className="cursor-pointer hover:opacity-70 transition">Package</span>
           <span className="text-2xl md:text-3xl font-serif normal-case mx-4 tracking-normal">JAB TOUR</span>
           <span className="cursor-pointer hover:opacity-70 transition">Stories</span>
           <span className="cursor-pointer hover:opacity-70 transition">Contact</span>
        </nav>

        {/* Center Content */}
        <div className="relative z-10 mt-10 px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.15em] mb-6 drop-shadow-2xl">
            WHERE NEXT ?
          </h1>
          <p className="tracking-[0.25em] text-[10px] md:text-sm uppercase opacity-90 mb-12 drop-shadow-md font-medium">
            Anuradhapura Tourist Visit
          </p>

          {/* --- BOOK TOUR BUTTON ADDED HERE --- */}
          
          <button
          onClick={() => navigate('/plan-journey')}
           className="bg-[#005483] hover:bg-white hover:text-[#005483] text-white px-10 py-4 rounded-full font-bold tracking-[0.2em] text-[10px] uppercase transition-all duration-500 shadow-2xl border-2 border-[#005483]">
            Book This Tour
          </button>
        </div>
      </section>


      {/* --- 2. Featured Section (Asymmetric Layout) --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Side: Large Image & Text */}
            <div>
               <img 
                 src="/images/anuradhapura img01.webp" 
                 alt="Anuradhapura" 
                 className="w-full h-[400px] object-cover shadow-2xl mb-8" 
               />
               <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-4 text-slate-900">
                 Historical Place
               </h2>
               <p className="text-sm md:text-base leading-relaxed text-slate-700 font-medium max-w-lg">
                 Step back in time to the foundation of Sri Lankan civilization. Anuradhapura offers a unique glimpse into ancient urban planning, massive hydraulic engineering, and deep-rooted spiritual traditions that have survived for millennia.
               </p>
            </div>

            {/* Right Side: Text & Smaller Image */}
            <div className="flex flex-col lg:pl-10">
               <div className="mb-10 lg:text-left">
                 <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3 text-slate-600">
                   How about go to
                 </p>
                 <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-4 text-slate-900">
                   Anuradhapura
                 </h2>
                 <p className="text-sm md:text-base leading-relaxed text-slate-700 font-medium max-w-sm">
                   A sacred city filled with towering stupas and serene monastery ruins, offering a peaceful escape into history.
                 </p>
               </div>
               <img 
                 src="/images/anuradhapura img02.webp" 
                 alt="Anuradhapura" 
                 className="w-full lg:w-4/5 h-[450px] object-cover shadow-2xl" 
               />
            </div>

         </div>
      </section>


      {/* --- 3. Discover Section (3 Column Grid) --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 mb-24 text-center">
        <h2 className="text-5xl md:text-6xl font-serif tracking-wide mb-3 text-slate-900">Discover</h2>
        <p className="text-sm text-slate-600 mb-16 font-medium tracking-widest uppercase">Select your destination</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
           
           {/* Card 1 */}
           <div className="group cursor-pointer">
             <div className="overflow-hidden mb-6 shadow-lg">
                <img src="/images/Anuradhapura img03.webp" alt="Ruwanwelisaya" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
             </div>
             <h3 className="text-base font-bold tracking-widest uppercase mb-3 text-slate-900">Ruwanwelisaya</h3>
             <p className="text-xs leading-relaxed text-slate-700 font-medium">
               The Great Stupa, built by King Dutugemunu, is one of the world's tallest ancient monuments and a masterpiece of Buddhist architecture.
             </p>
           </div>

           {/* Card 2 */}
           <div className="group cursor-pointer">
             <div className="overflow-hidden mb-6 shadow-lg">
                <img src="/images/anuradhapura img01.webp" alt="Sri Maha Bodhi" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
             </div>
             <h3 className="text-base font-bold tracking-widest uppercase mb-3 text-slate-900">Sri Maha Bodhi</h3>
             <p className="text-xs leading-relaxed text-slate-700 font-medium">
               A sacred fig tree that is the oldest human-planted tree in the world with a known planting date, living for over 2,300 years.
             </p>
           </div>

           {/* Card 3 */}
           <div className="group cursor-pointer">
             <div className="overflow-hidden mb-6 shadow-lg">
                <img src="/images/Anuradhapura img03.webp" alt="Abhayagiriya" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
             </div>
             <h3 className="text-base font-bold tracking-widest uppercase mb-3 text-slate-900">Abhayagiriya</h3>
             <p className="text-xs leading-relaxed text-slate-700 font-medium">
               An ancient monastic center that was once a global hub for Buddhist scholarship, featuring one of the largest stupas in the world.
             </p>
           </div>

        </div>
      </section>

      {/* --- 4. Why You Shouldn't Miss This Section (ADDED AT THE END) --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-24 border-t border-slate-300/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 italic">
            Why You Shouldn't Miss This Experience
          </h2>
          <div className="w-24 h-1 bg-[#005483] mx-auto opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Reason 1 */}
          <div className="p-10 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-slate-900">Living History</h3>
            <p className="text-xs leading-relaxed text-slate-600 font-medium">
              Anuradhapura is not just a museum; it is a living sacred city. Witness rituals and traditions that have been practiced continuously for over 2,500 years.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="p-10 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-slate-900">Spiritual Serenity</h3>
            <p className="text-xs leading-relaxed text-slate-600 font-medium">
              Find peace away from the modern world. The atmosphere around the sacred Bodhi tree and ancient stupas offers a spiritual tranquility found nowhere else.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="p-10 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4 text-slate-900">Hidden Gems</h3>
            <p className="text-xs leading-relaxed text-slate-600 font-medium">
              Beyond the main stupas, our curated path takes you to the serene twin ponds (Kuttam Pokuna) and intricate stone carvings that most travelers overlook.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
            <button 
            onClick={() => navigate('/plan-journey')}
            className="text-[10px] font-bold tracking-[0.4em] uppercase border-b-2 border-[#005483] pb-2 hover:text-[#005483] transition-all">
                Plan Your Journey Today
            </button>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 text-center opacity-50">
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-600">
            &copy; 2026 JAB TOUR - Ancient Kingdom Experiences
        </p>
      </footer>

    </div>
  );
};

export default TourDetails;