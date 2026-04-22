import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa'; // react-icons install කර තිබිය යුතුය

const PlanYourJourney = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelers: '2',
    date: '',
    interest: 'Cultural Triangle',
    message: ''
  });

  // ඔබේ Social Media Links මෙතනට දාන්න
  const socialLinks = {
    whatsapp: 'https://wa.me/94771234567', // ඔබේ අංකය ජාත්‍යන්තර ක්‍රමයට (94...)
    instagram: 'https://www.instagram.com/jailankatours/',
    facebook: 'https://www.facebook.com/jailankatours/',
    email: 'mailto:hello@jailanka.com'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! Your inquiry has been sent. We will get back to you within 24 hours.');
  };

  // Modern Input Styling Wrapper
  const InputWrapper = ({ children }) => (
    <div className="relative group">
      {children}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#00a2ff] group-focus-within:w-full transition-all duration-500 ease-out"></div>
    </div>
  );

  const inputClass = "w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 outline-none focus:bg-white/10 transition-all duration-300";

  return (
    <div className="relative min-h-screen font-body overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000" // ලස්සන සිගිරිය/තේ වත්තක රූපයක්
          alt="Sri Lanka Background" 
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-24 w-full grid grid-cols-1 md:grid-cols-[1fr,1.5fr] gap-16 items-center">
        
        {/* Left Side: Text and Social Links */}
        <div className="text-white">
          <div className="mb-6 inline-block py-1 px-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
             <p className="text-[10px] uppercase tracking-[0.4em] font-bold">bespoke luxury travel</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline leading-tight mb-6 drop-shadow-xl">
            Let's Craft Your <br /> Perfect <span className="italic font-light">Journey</span>
          </h1>
          <p className="text-lg text-white/80 max-w-md leading-relaxed mb-12 drop-shadow-md">
            Tell us your dreams, and our experts will curate a personalized Sri Lankan itinerary just for you.
          </p>
          
          {/* Interactive Social Icons */}
          <div className="pt-8 border-t border-white/10 max-w-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-6">Or Connect Instantly</p>
            <div className="flex gap-6">
              {[
                { icon: FaWhatsapp, link: socialLinks.whatsapp, color: 'hover:bg-[#25D366]' },
                { icon: FaInstagram, link: socialLinks.instagram, color: 'hover:bg-[#E4405F]' },
                { icon: FaFacebookF, link: socialLinks.facebook, color: 'hover:bg-[#1877F2]' },
                { icon: FaEnvelope, link: socialLinks.email, color: 'hover:bg-[#00a2ff]' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg ${item.color} group`}
                >
                  <item.icon className="text-2xl text-white/80 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="bg-white/5 backdrop-blur-lg p-10 md:p-14 rounded-[40px] shadow-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-10 font-headline tracking-wide">Enter Your Details</h3>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputWrapper>
                <input type="text" placeholder="Full Name" className={inputClass} required onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </InputWrapper>
              <InputWrapper>
                <input type="email" placeholder="Email Address" className={inputClass} required onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </InputWrapper>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputWrapper>
                <input type="number" placeholder="No. of Travelers" className={inputClass} min="1" onChange={(e) => setFormData({...formData, travelers: e.target.value})} />
              </InputWrapper>
              <InputWrapper>
                <input type="date" className={`${inputClass} text-white/50 focus:text-white`} onChange={(e) => setFormData({...formData, date: e.target.value})} />
              </InputWrapper>
            </div>

            <InputWrapper>
              <select className={`${inputClass} text-white/70 focus:text-white`} onChange={(e) => setFormData({...formData, interest: e.target.value})}>
                <option>Cultural Triangle</option>
                <option>Wellness & Ayurveda</option>
                <option>Honeymoon Special</option>
                <option>Wildlife Safari</option>
                <option>Adventure Tours</option>
              </select>
            </InputWrapper>

            <InputWrapper>
              <textarea placeholder="Your preferences (e.g., preferred destinations, budget...)" className={`${inputClass} h-32 resize-none`} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </InputWrapper>

            {/* Highlighting Submit Button */}
            <button type="submit" className="group relative w-full bg-[#00a2ff] text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm overflow-hidden transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20">
              <span className="relative z-10">Submit Inquiry</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300"> →</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default PlanYourJourney;