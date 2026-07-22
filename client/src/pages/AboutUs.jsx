import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaCompass, FaHeart, FaAward, FaGlobeAsia, FaEye } from 'react-icons/fa';

// Assets - Local Images from src/assets folder
import founderImg from '../assets/founder.jpg';
import businessImg from '../assets/business.jpg';
import weligamaImg from '../assets/weligama.jpg';
import achalaImg from '../assets/achala.jpg';
import disiniImg from '../assets/disini.jpg';
import yasmiImg from '../assets/yasmi.jpg';

const AboutUs = () => {
  const topTeam = [
    {
      name: "hjd djd",
      role: "Business Director",
      image: businessImg,
      bio: "Driving global strategy and sustainable growth while upholding luxury standards."
    },
    {
      name: "Chalina Deon",
      role: "Sales Manager",
      image: weligamaImg,
      bio: "Crafting bespoke travel packages and ensuring seamless client satisfaction."
    },
    {
      name: "Achala Munaweera",
      role: "Transport Manager",
      image: achalaImg,
      bio: "Managing our elite fleet and private chauffeurs with absolute precision."
    }
  ];

  const adminTeam = [
    {
      name: "Disini Dehipitiya",
      role: "Admin",
      image: disiniImg,
      bio: "Coordinating operational excellence and personalized guest hospitality."
    },
    {
      name: "Yasmi Nirasha",
      role: "Admin",
      image: yasmiImg,
      bio: "Ensuring flawless booking management and 24/7 client support."
    }
  ];

  return (
    <div className="w-full bg-[#030914] text-slate-100 font-sans antialiased min-h-screen pt-24 pb-20 overflow-x-hidden">
      
      {/* ----------------- HERO HEADER SECTION ----------------- */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-amber-400 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase block mb-4 border-b border-amber-500/20 pb-2 w-max mx-auto">
            Welcome to Jai Lanka Tours
          </span>
          <h1 className="text-3xl md:text-6xl font-serif font-light text-white tracking-wide leading-tight mb-6">
            Crafting Authentic & <span className="italic font-normal text-amber-400">Eco-Friendly</span> Sri Lankan Journeys Since 2016
          </h1>
          <p className="text-slate-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-light">
            At Jai Lanka Tours, we believe that travel is all about creating lifelong memories, discovering rich local traditions, and protecting the beautiful nature that makes our island so special.
          </p>
        </div>
      </section>

      {/* ----------------- EDITORIAL STORY & VISION ----------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        
        {/* Story Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <FaCompass className="text-amber-400 text-xl" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">Our Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Our Story & Legacy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 text-sm md:text-base leading-relaxed font-light">
            <p>
              Founded in <strong className="text-amber-400 font-semibold">2016</strong>, Jai Lanka Tours was built on a simple vision: to showcase the absolute best of Sri Lanka to travelers from all around the world. From our very first tour, we have been passionate about taking our guests on unforgettable sightseeing journeys from ancient heritage sites and bustling local markets to vibrant cultural dance shows and scenic viewpoints.
            </p>
            <p>
              At the same time, we have always been deeply committed to <strong className="text-amber-400 font-semibold">eco-tourism</strong>. Sri Lanka is home to delicate ecosystems, lush rainforests, and incredible wildlife. We take pride in guiding responsible travel that respects our environment, supports local communities, and preserves our natural landscapes for generations to come.
            </p>
          </div>

          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-xs text-slate-400 tracking-wider uppercase">
              <FaLeaf className="text-emerald-400 text-sm" /> 100% Eco Conscious
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 tracking-wider uppercase">
              <FaGlobeAsia className="text-amber-400 text-sm" /> Global Guests
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="border-l-2 border-amber-400 pl-6 md:pl-10 py-2">
          <div className="flex items-center gap-3 mb-3">
            <FaEye className="text-amber-400 text-lg" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em]">Our Purpose</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">Our Vision</h3>
          <p className="text-amber-100/90 font-serif italic text-lg md:text-2xl leading-relaxed max-w-4xl">
            "To be Sri Lanka’s most trusted eco-conscious travel partner inspiring travelers worldwide through authentic cultural experiences, incredible sightseeing, and sustainable travel practices that preserve our island for generations to come."
          </p>
        </div>

      </section>

      {/* ----------------- MEET OUR FOUNDER SECTION ----------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.35em] uppercase block mb-2">Leadership</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Meet Our Founder</h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="bg-[#071328]/90 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* Founder Image */}
          <div className="md:col-span-5 relative group overflow-hidden">
            <img 
              src={founderImg} 
              alt="Sahabandu Kodagoda" 
              className="w-full h-[400px] md:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Founder Info */}
          <div className="md:col-span-7 p-8 md:p-12">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] block mb-2">Founder & CEO</span>
            <h3 className="text-2xl md:text-4xl font-serif text-white mb-6">Sahabandu Kodagoda</h3>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
              Driven by a profound passion for Sri Lanka’s rich heritage and natural wonders, Sahabandu Kodagoda established Jai Lanka Tours in 2016. His goal was clear: to offer travelers authentic, high-end, and sustainable travel experiences that honor the culture and preserve the pristine beauty of the island.
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-light">
              Under his visionary leadership, Jai Lanka Tours has grown into a highly trusted luxury operator, delivering tailor-made journeys with personal attention, expert chauffeuring, and unyielding dedication to eco-friendly practices.
            </p>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <FaAward className="text-amber-400 text-xl" />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Visionary Leadership</h4>
                <p className="text-slate-400 text-xs">Pioneering Eco-Tourism & Bespoke Journeys</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- OUR TEAM SECTION ----------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-[0.35em] uppercase block mb-2">The Experts Behind Your Journey</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Meet Our Team</h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Row 1: Top 3 Directors & Managers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {topTeam.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#071328]/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-500 group shadow-xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-[#0a1832]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md inline-block mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-serif text-white group-hover:text-amber-400 transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="w-full h-[1px] bg-amber-500/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Admin Cards - CENTERED & CLEAN */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {adminTeam.map((member, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-[#071328]/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-500 group shadow-xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-[#0a1832]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md inline-block mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-serif text-white group-hover:text-amber-400 transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="w-full h-[1px] bg-amber-500/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- CALL TO ACTION ----------------- */}
      <section className="mt-12 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-amber-500/10 via-[#0a1832] to-amber-500/10 border border-amber-500/30 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <FaHeart className="text-amber-500/10 text-9xl absolute -bottom-10 -right-10 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Ready to Experience Sri Lanka With Us?</h2>
          <p className="text-slate-300 text-xs md:text-sm max-w-xl mx-auto mb-8 font-light">
            Let our passionate team craft an eco-friendly, unforgettable itinerary tailored specifically for you.
          </p>
          <Link to="/plan-journey">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-[0.25em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20">
              Start Planning Your Journey
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;