import React from 'react';
import { Link } from 'react-router-dom';
import { MailOutline } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-slate-200 pt-24 pb-12 mt-auto border-t border-slate-900">
      
      {/* 1. Background Image with Blur & Deep Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000" 
          alt="Sri Lanka Background" 
          className="w-full h-full object-cover scale-110 brightness-[35%]" 
        />
        {/* Dark Slate Overlay with glass blur for premium separation */}
        <div className="absolute inset-0 bg-[#070a13]/85 backdrop-blur-[8px]"></div>
      </div>

      {/* 2. Glassmorphic Footer Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* Logo, Description & Social Media Icons */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-headline font-light text-white tracking-widest uppercase">
                JAI <span className="text-amber-400 font-normal">LANKA</span>
              </h2>
              <p className="text-[10px] text-amber-500/60 uppercase tracking-[0.2em] mt-1">Travel & Tours</p>
            </div>
            
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm text-justify">
              Hallmark of Sri Lankan Travel. Specializing in bespoke luxury tours and curated exotic experiences for the modern traveler.
            </p>

            {/* 🌐 Modern Social Media Icons Wrapper */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com/your-page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="https://instagram.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="https://wa.me/94740966449" // ඔයාගේ WhatsApp නම්බර් එක මෙතනට දාන්න (+ ලකුණ නැතුව)
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="mailto:hello@jailanka.com" 
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-amber-400 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <MailOutline style={{ fontSize: '20px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Quick Links</h5>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Home</Link></li>
              <li><Link to="/day-tours" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Day Tours</Link></li>
              <li><Link to="/our-story" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Our Story</Link></li>
              <li><Link to="/plan-journey" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Plan Journey</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Experiences</h5>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li className="hover:text-amber-400 hover:pl-1 cursor-pointer transition-all duration-300 block">Wildlife Safari</li>
              <li className="hover:text-amber-400 hover:pl-1 cursor-pointer transition-all duration-300 block">Cultural Triangle</li>
              <li className="hover:text-amber-400 hover:pl-1 cursor-pointer transition-all duration-300 block">Honeymoon Tours</li>
              <li className="hover:text-amber-400 hover:pl-1 cursor-pointer transition-all duration-300 block">Wellness & Ayurveda</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:pl-6">
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Contact Us</h5>
            <ul className="space-y-5 text-sm font-light text-slate-400">
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Hotline</span>
                <span className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">+94 11 234 5678</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Inquiries</span>
                <span className="text-slate-300 hover:text-amber-400 transition-colors cursor-pointer">hello@jailanka.com</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Head Office</span>
                <span className="text-slate-300">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">
            © 2026 Jai Lanka Tours. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-medium">
            <span className="hover:text-amber-400 cursor-pointer transition-all duration-300">Privacy Policy</span>
            <span className="hover:text-amber-400 cursor-pointer transition-all duration-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;