import React from 'react';
import { Link } from 'react-router-dom';
import { MailOutlined, Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-slate-200 pt-24 pb-12 mt-auto border-t border-slate-900 bg-[#070a13]">
      
      {/* Main Footer Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* Logo, Description & Social Media Icons */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-headline font-light text-white tracking-widest uppercase">
                JAI <span className="text-amber-400 font-normal">LANKA</span>
              </h2>
              <p className="text-[10px] text-amber-500/60 uppercase tracking-[0.2em] mt-1">Tours</p>
            </div>
            
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm text-justify">
              Hallmark of Sri Lankan Travel. Specializing in bespoke luxury tours and curated exotic experiences for the modern traveler.
            </p>

            {/* 🌐 Modern Social Media Icons Wrapper with Official Brand Hover Colors */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com/your-page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/20 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="https://instagram.com/your-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:shadow-lg hover:shadow-[#ee2a7b]/20 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="https://wa.me/94740966449" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/20 flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsApp style={{ fontSize: '20px' }} />
              </a>

              <a 
                href="mailto:jailankatours@gmail.com" 
                className="w-10 h-10 rounded-xl bg-slate-900/40 border border-slate-800/80 text-slate-400 hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335] hover:shadow-lg hover:shadow-[#EA4335]/20 flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <MailOutlined style={{ fontSize: '20px' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Quick Links</h5>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Home</Link></li>
              <li><Link to="/day-tours" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Day Tours</Link></li>
              <li><Link to="/itineraries" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Itineraries</Link></li>
              <li><Link to="/discoversrilanka" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Discover Sri Lanka</Link></li>
              <li><Link to="/accommodation" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Accommodation</Link></li>
              <li><Link to="/about-us" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">About Us</Link></li>
              <li><Link to="/plan-journey" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Plan Journey</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Experiences</h5>
            <ul className="space-y-4 text-sm font-light text-slate-400">
              <li><Link to="/itineraries/ayurvedic" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Ayurvedic & Wellness</Link></li>
              <li><Link to="/itineraries/adventure" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Off Road Adventure Tour</Link></li>
              <li><Link to="/itineraries/culture" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Culture & Wildlife Tours</Link></li>
              <li><Link to="/itineraries/differently-abled" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Differently Abled Tours</Link></li>
              <li><Link to="/itineraries/romantic" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">Romantic Tours</Link></li>
              <li><Link to="/itineraries/north-east" className="hover:text-amber-400 hover:pl-1 transition-all duration-300 block">North & East Coast</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:pl-6">
            <h5 className="font-bold text-[11px] tracking-[0.25em] uppercase mb-8 text-slate-500">Contact Us</h5>
            <ul className="space-y-5 text-sm font-light text-slate-400">
              <li className="flex flex-col gap-0.5">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Hotline</span>
                <a href="tel:+94740966449" className="text-slate-300 hover:text-amber-400 transition-colors">+9474 096 6449</a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span><Link to="/enquiry" className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Inquiries</Link></span>
                <a href="mailto:jailankatours@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">jailankatours@gmail.com</a>
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
            <Link to="/privacy-policy" className="hover:text-amber-400 cursor-pointer transition-all duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-amber-400 cursor-pointer transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;  