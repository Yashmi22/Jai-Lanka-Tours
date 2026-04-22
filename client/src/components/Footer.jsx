import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white pt-24 pb-0 mt-auto">
      
      {/* 1. Background Image with Blur & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000" // ලස්සන Sigiriya/Sri Lanka ඡායාරූපයක්
          alt="Sri Lanka Background" 
          className="w-full h-full object-cover scale-125" // scale-125 is to avoid white edges during blur
        />
        {/* Dark Overlay with subtle blur for contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"></div>
      </div>

      {/* 2. Glassmorphism Footer Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* Logo & Description (Reference style matching) */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">JAI LANKA</h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Hallmark of Sri Lankan Travel. Specializing in bespoke luxury tours for the modern traveler.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-8 text-white/50">Quick Links</h5>
            <ul className="space-y-4 text-sm text-white/90">
              <li><Link to="/" className="hover:text-[#00a2ff] transition-all">Home</Link></li>
              <li><Link to="/day-tours" className="hover:text-[#00a2ff] transition-all">Day Tours</Link></li>
              <li><Link to="/our-story" className="hover:text-[#00a2ff] transition-all">Our Story</Link></li>
              <li><Link to="/plan-journey" className="hover:text-[#00a2ff] transition-all">Plan Journey</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-8 text-white/50">Experiences</h5>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="hover:text-[#00a2ff] cursor-pointer transition-all">Wildlife Safari</li>
              <li className="hover:text-[#00a2ff] cursor-pointer transition-all">Cultural Triangle</li>
              <li className="hover:text-[#00a2ff] cursor-pointer transition-all">Honeymoon Tours</li>
              <li className="hover:text-[#00a2ff] cursor-pointer transition-all">Wellness & Ayurveda</li>
            </ul>
          </div>

          {/* Contact (Reference style matching) */}
          <div className="md:pl-10">
            <h5 className="font-bold text-[11px] tracking-[0.2em] uppercase mb-8 text-white/50">Contact Us</h5>
            <ul className="space-y-5 text-sm text-white/90">
              <li>+94 11 234 5678</li>
              <li>hello@jailanka.com</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Reference style matching) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] text-white/40 uppercase tracking-widest">
            © 2026 Jai Lanka Tours. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] text-white/40 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition-all">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-all">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;