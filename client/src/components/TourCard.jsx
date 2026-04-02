import React from 'react';

const TourCard = ({ image, title, category, duration, difficulty, price, isLarge }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl ${isLarge ? 'md:col-span-2 h-[400px]' : 'h-[400px]'}`}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <div className="absolute top-4 left-4">
        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/30">
          {category}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 p-8 w-full text-white">
        <h3 className={`${isLarge ? 'text-4xl' : 'text-2xl'} font-headline font-bold mb-3`}>{title}</h3>
        
        <div className="flex items-center gap-4 text-[11px] font-medium opacity-80 mb-5 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span> {duration}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span> {difficulty}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-[10px] uppercase opacity-60">Starting from</p>
            <p className="text-2xl font-bold">${price}<span className="text-sm font-normal">/pp</span></p>
          </div>
          <button className="bg-white text-[#005483] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#005483] hover:text-white transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;