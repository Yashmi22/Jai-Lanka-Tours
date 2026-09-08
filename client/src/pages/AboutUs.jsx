import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; 
import { FaLeaf, FaCompass, FaHeart, FaAward, FaGlobeAsia, FaEye, FaStar, FaQuoteLeft } from 'react-icons/fa';

// Assets - Local Images
import founderImg from '../assets/founder.jpg';
import businessImg from '../assets/business.jpg';
import weligamaImg from '../assets/weligama.jpg';
import achalaImg from '../assets/achala.jpg';
import disiniImg from '../assets/disini.jpg';
import yasmiImg from '../assets/yasmi.jpg';

const AboutUs = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Published TripAdvisor Reviews from Backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // api instance  Backend Call 
        const res = await api.get('/reviews/admin/all');
        
        // Console  Data 
        console.log("Fetched Reviews:", res.data);

        // Published  Reviews 
        const publishedReviews = res.data.filter(review => review.isPublished === true);
        
        setReviews(publishedReviews);
      } catch (err) {
        console.error("Error fetching TripAdvisor reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const topTeam = [
    {
      name: "Amin Sardar",
      role: "Business Development Manager",
      image: businessImg,
      bio: "Driving global strategy and sustainable growth while upholding luxury standards."
    },
    {
      name: "Chalana Diyon",
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
      
      {/* HERO HEADER SECTION */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[250px] sm:h-[350px] bg-amber-500/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-blue-600/10 blur-[80px] sm:blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-amber-400 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.35em] uppercase block mb-4 border-b border-amber-500/20 pb-2 w-max mx-auto">
            Welcome to Jai Lanka Tours
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-serif font-light text-white tracking-wide leading-tight mb-4 sm:mb-6">
            Crafting Authentic & <span className="italic font-normal text-amber-400">Eco-Friendly</span> Sri Lankan Journeys Since 2016
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-light px-2 sm:px-0">
            At Jai Lanka Tours, we believe that travel is all about creating lifelong memories, discovering rich local traditions, and protecting the beautiful nature that makes our island so special.
          </p>
        </div>
      </section>

      {/* EDITORIAL STORY & VISION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <FaCompass className="text-amber-400 text-lg sm:text-xl" />
            <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">Our Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-white mb-6 sm:mb-8 leading-tight">
            Our Story & Legacy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-slate-300 text-sm md:text-base leading-relaxed font-light">
            <p>
              Founded in <strong className="text-amber-400 font-semibold">2016</strong>, Jai Lanka Tours was built on a simple vision: to showcase the absolute best of Sri Lanka to travelers from all around the world. From our very first tour, we have been passionate about taking our guests on unforgettable sightseeing journeys from ancient heritage sites and bustling local markets to vibrant cultural dance shows and scenic viewpoints.
            </p>
            <p>
              At the same time, we have always been deeply committed to <strong className="text-amber-400 font-semibold">eco-tourism</strong>. Sri Lanka is home to delicate ecosystems, lush rainforests, and incredible wildlife. We take pride in guiding responsible travel that respects our environment, supports local communities, and preserves our natural landscapes for generations to come.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-6 sm:mt-8 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase">
              <FaLeaf className="text-emerald-400 text-xs sm:text-sm" /> 100% Eco Conscious
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase">
              <FaGlobeAsia className="text-amber-400 text-xs sm:text-sm" /> Global Guests
            </div>
          </div>
        </div>

        <div className="border-l-2 border-amber-400 pl-4 sm:pl-6 md:pl-10 py-2">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <FaEye className="text-amber-400 text-base sm:text-lg" />
            <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">Our Purpose</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-3 sm:mb-4">Our Vision</h3>
          <p className="text-amber-100/90 font-serif italic text-base sm:text-lg md:text-2xl leading-relaxed max-w-4xl">
            "To be the Sri Lanka’s most trusted eco-conscious travel partner inspiring travelers worldwide through authentic cultural experiences, incredible sightseeing, and sustainable travel practices that preserve our island for generations to come."
          </p>
        </div>
      </section>

      {/* MEET OUR FOUNDER SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase block mb-2">Leadership</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">Meet Our Founder</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-amber-400 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="bg-[#071328]/90 border border-amber-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 relative group overflow-hidden">
            <img 
              src={founderImg} 
              alt="Sahabandu Kodagoda" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="md:col-span-7 p-5 sm:p-8 md:p-12">
            <span className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] block mb-1 sm:mb-2">Founder & CEO</span>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-serif text-white mb-4 sm:mb-6">Sahabandu Kodagoda</h3>
            
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 font-light">
              Driven by a profound passion for Sri Lanka’s rich heritage and natural wonders, Sahabandu Kodagoda established Jai Lanka Tours in 2016. His goal was clear: to offer travelers authentic, high-end, and sustainable travel experiences that honor the culture and preserve the pristine beauty of the island.
            </p>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-light">
              Under his visionary leadership, Jai Lanka Tours has grown into a highly trusted luxury operator, delivering tailor-made journeys with personal attention, expert chauffeuring, and unyielding dedication to eco-friendly practices.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2.5 sm:p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg sm:rounded-xl">
                <FaAward className="text-amber-400 text-lg sm:text-xl" />
              </div>
              <div>
                <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">Visionary Leadership</h4>
                <p className="text-slate-400 text-[9px] sm:text-xs">Pioneering Eco-Tourism & Bespoke Journeys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase block mb-2">The Experts Behind Your Journey</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">Meet Our Team</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-amber-400 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {topTeam.map((member, index) => (
            <div 
              key={index} 
              className="bg-[#071328]/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-500 group shadow-xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0a1832]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md inline-block mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-white group-hover:text-amber-400 transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <div className="w-full h-[1px] bg-amber-500/10" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          {adminTeam.map((member, index) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-[#071328]/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/60 transition-all duration-500 group shadow-xl hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0a1832]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <span className="bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md inline-block mb-3">
                    {member.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-white group-hover:text-amber-400 transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <div className="w-full h-[1px] bg-amber-500/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRIPADVISOR REVIEWS SECTION */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="text-center mb-10 sm:mb-16">
          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase px-3 sm:px-4 py-1.5 rounded-full inline-block mb-3">
            Verified TripAdvisor Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">What Our Travelers Say</h2>
          <div className="w-12 sm:w-16 h-0.5 bg-amber-400 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {loading ? (
          <div className="text-center text-slate-400 text-[11px] sm:text-sm">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-slate-500 text-[11px] sm:text-sm">No reviews added yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((rev) => (
              <div 
                key={rev._id} 
                className="bg-[#071328]/80 border border-amber-500/20 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 shadow-xl relative group"
              >
                <FaQuoteLeft className="absolute top-5 sm:top-6 right-5 sm:right-6 text-amber-500/10 text-3xl sm:text-4xl group-hover:text-amber-500/20 transition-colors" />

                <div>
                  <div className="flex gap-1 text-amber-400 mb-3 sm:mb-4">
                    {[...Array(rev.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="text-[10px] sm:text-sm" />
                    ))}
                  </div>

                  <h3 className="text-base sm:text-lg font-serif text-white mb-2 sm:mb-3">{rev.reviewTitle}</h3>
                  <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm leading-relaxed font-light mb-4 sm:mb-6 italic">
                    "{rev.reviewText}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-semibold">{rev.authorName}</h4>
                    {rev.authorLocation && (
                      <p className="text-slate-400 text-[10px] sm:text-xs font-light">{rev.authorLocation}</p>
                    )}
                  </div>
                  {rev.reviewDate && (
                    <span className="text-amber-400/80 text-[9px] sm:text-[11px] font-medium">{rev.reviewDate}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section className="mt-8 sm:mt-12 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-amber-500/10 via-[#0a1832] to-amber-500/10 border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <FaHeart className="text-amber-500/10 text-7xl sm:text-9xl absolute -bottom-6 sm:-bottom-10 -right-6 sm:-right-10 pointer-events-none" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-3 sm:mb-4">Ready to Experience Sri Lanka With Us?</h2>
          <p className="text-slate-300 text-[11px] sm:text-xs md:text-sm max-w-xl mx-auto mb-6 sm:mb-8 font-light">
            Let our passionate team craft an eco-friendly, unforgettable itinerary tailored specifically for you.
          </p>
          <Link to="/plan-journey">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 w-full sm:w-auto">
              Start Planning Your Journey
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;