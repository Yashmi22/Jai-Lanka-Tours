import React, { useState } from 'react';
import { 
    ArrowForward, 
    MailOutlineOutlined, 
    Instagram, 
    Facebook, 
    Twitter 
} from '@mui/icons-material';

// Assets Import
import foodImg from '../assets/food.jpg';
import cultureImg from '../assets/culture.jpg';
import trainImg from '../assets/train-ella.jpg';
import elephantImg from '../assets/elephant.jpg';
import bawaImg from '../assets/bawa.jpg';
import gemsImg from '../assets/gems.jpg';      
import dancingImg from '../assets/dancing.jpg';   
import logo from '../assets/logo.png';

// Gallery Images
import leopardImg from '../assets/leopard.jpg';
import waterfallImg from '../assets/waterfall.jpg';
import teaImg from '../assets/tea-estate.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import ellaMistImg from '../assets/ella-mist.jpg'; 
import flowersImg from '../assets/flowers.jpg';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All Stories');
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const categories = ['All Stories', 'Local Food', 'Travel Tips', 'Culture', 'Heritage', 'Gems'];

    const blogPosts = [
        {
            id: "galle-market",
            date: 'October 12, 2025',
            category: 'LOCAL FOOD',
            title: 'A Masterclass in Spices: Navigating Galle’s Morning Market',
            image: foodImg,
            desc: 'The smell of roasted cinnamon and fresh sea air marks the beginning of an aromatic journey through time...',
            readTime: '5 min read'
        },
        {
            id: "temple-etiquette",
            date: 'September 28, 2025',
            category: 'CULTURE',
            title: 'The Etiquette of the Sacred: A Guide to Temple Visits',
            image: cultureImg,
            desc: 'Understanding the nuances of respect, traditional attire, and silent mindfulness in Sri Lanka’s Buddhist temples...',
            readTime: '4 min read'
        },
        {
            id: "ella-train",
            date: 'September 15, 2025',
            category: 'TRAVEL TIPS',
            title: 'Slow Travel: Why You Should Take the Train to Ella',
            image: trainImg,
            desc: 'Forget the highway. The seven-hour colonial-era railway journey from Kandy to Ella weaves through emerald tea estates...',
            readTime: '7 min read'
        },
        {
            id: "ratnapura-sapphires",
            date: 'August 30, 2025',
            category: 'GEMS',
            title: 'The Emerald Eye: Discovering the Blue Sapphires of Ratnapura',
            image: gemsImg,
            desc: 'Step inside the artisanal mines where the world’s most flawless sapphires and star rubies are still unearthed by hand...',
            readTime: '8 min read'
        },
        {
            id: "kandyan-dance",
            date: 'August 24, 2025',
            category: 'CULTURE',
            title: 'Rhythms of the Gods: The Eternal Grace of Kandyan Dance',
            image: dancingImg,
            desc: 'An immersion into the powerful drumbeats, intricate silver costumes, and gravity-defying leaps that define this sacred traditional art...',
            readTime: '6 min read'
        },
        {
            id: "ethical-elephants",
            date: 'August 20, 2025',
            category: 'NATURE',
            title: 'Gentle Giants: Ethical Elephant Encounters',
            image: elephantImg,
            desc: 'Where to see these magnificent creatures responsibly and how your conscious travel choices support wildlife conservation...',
            readTime: '5 min read'
        },
        {
            id: "bawa-architecture",
            date: 'August 12, 2025',
            category: 'TRAVEL TIPS',
            title: 'Coastal Secrets: Sunset & Serenity at Mirissa’s Hidden Bays',
            image: bawaImg,
            desc: 'Escape the crowds to discover secluded golden arcs, luxury boutique hideaways, and the ultimate pristine spots for a private evening swim...',
            readTime: '5 min read'
        }
    ];

    const galleryImages = [leopardImg, waterfallImg, teaImg, sigiriyaImg, ellaMistImg, flowersImg];

    // Category Filter Logic
    const filteredPosts = activeCategory === 'All Stories' 
        ? blogPosts 
        : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <div className="bg-[#0b0f19] min-h-screen text-slate-100 font-body antialiased">
            
            {/* 1. LUXURY BALANCED HERO SECTION (CLEAN LOOK) */}
            <header className="relative w-full h-[600px] overflow-hidden bg-[#060a13] flex items-center justify-center">
                {/* Background Hero Image */}
                <img 
                    src={teaImg} 
                    alt="Ceylon Tea Estates" 
                    className="absolute inset-0 w-full h-full object-cover brightness-[45%] scale-101" 
                />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-black/30 to-black/50"></div>
                
                {/* Clean Centered Content */}
                <div className="relative max-w-3xl mx-auto text-center px-6 z-10 flex flex-col items-center">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-950/60 border border-amber-600/30 px-5 py-2 rounded-full mb-6 inline-block backdrop-blur-sm">
                        The Island Journal
                    </span>
                    
                    <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-wide mb-4 uppercase drop-shadow-lg">
                        Whispers of <span className="font-serif italic text-amber-400">Ceylon</span>
                    </h1>
                    
                    <p className="text-slate-300 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed tracking-wide drop-shadow mb-8">
                        Curating bespoke narratives through the emerald landscapes of Ceylon. From misty tea trails to ancient coastal secrets.
                    </p>

                    {/* Premium Call to Action Button instead of the floating card */}
                    <button 
                        onClick={() => window.scrollTo({ top: 620, behavior: 'smooth' })}
                        className="group bg-transparent border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/5"
                    >
                        Explore Stories 
                        <ArrowForward className="group-hover:translate-x-1 transition-transform" style={{ fontSize: '14px' }} />
                    </button>
                </div>
            </header>

            {/* 2. PREMIUM RHYTHMIC CATEGORIES MENU */}
            <div className="px-[8%] mt-16 mb-12 flex flex-wrap justify-center items-center gap-3 md:gap-4 border-b border-slate-800/60 pb-6">
                {categories.map((cat, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[10px] md:text-xs uppercase tracking-widest font-semibold py-2.5 px-5 rounded-full transition-all duration-300 ${
                            activeCategory === cat 
                                ? "bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/10" 
                                : "bg-transparent text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* 3. MAIN ASYMMETRIC STORY RHYTHMIC GRID */}
            <main className="px-[8%] pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
                {filteredPosts.map((post, index) => (
                    <div 
                        key={index} 
                        className={`bg-[#111726] rounded-2xl overflow-hidden border border-slate-800/60 hover:border-amber-500/20 transition-all duration-500 group flex flex-col justify-between shadow-xl cursor-pointer ${
                            index === 2 && activeCategory === 'All Stories' ? "md:col-span-2 lg:col-span-1 xl:col-span-2" : "" 
                        }`}
                    >
                        <div>
                            {/* Card Image Area */}
                            <div className="relative overflow-hidden h-56">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-[80%] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent"></div>
                                <span className="absolute top-4 left-4 bg-[#0b0f19]/90 backdrop-blur-md border border-amber-500/10 text-amber-400 px-3 py-1 rounded-md text-[8px] font-extrabold tracking-widest uppercase">{post.category}</span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 -mt-2">
                                <p className="text-[9px] text-slate-500 tracking-wider mb-2">{post.date}</p>
                                <h3 className="text-base font-headline font-bold text-white tracking-wide mb-3 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-slate-400 text-xs font-light leading-relaxed line-clamp-2">
                                    {post.desc}
                                </p>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="p-6 pt-0 mt-auto">
                            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[10px] uppercase tracking-widest">
                                <span className="text-slate-500 font-medium">{post.readTime || '5 min read'}</span>
                                <span className="text-amber-400 font-bold group-hover:text-white transition-colors flex items-center gap-1.5">
                                    Explore <ArrowForward style={{ fontSize: '11px' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* 4. ELITE NEWSLETTER BOX */}
                <div className="bg-gradient-to-br from-[#12192c] to-[#0d1424] rounded-2xl p-6 border border-amber-500/10 flex flex-col justify-center items-center text-center min-h-[320px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
                    <MailOutlineOutlined className="text-amber-400 mb-3" style={{ fontSize: '36px' }} />
                    <span className="text-[8px] font-bold tracking-[0.2em] text-amber-400 uppercase mb-1">The Insiders Circle</span>
                    <h3 className="text-lg font-headline font-bold text-white mb-2 uppercase tracking-wide">Island Insights</h3>
                    <p className="text-slate-400 text-xs font-light mb-5 max-w-[200px] leading-relaxed">Receive unpublicized luxury itineraries and seasonal stories.</p>
                    <input type="email" placeholder="Luxury email address" className="w-full bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-amber-500/40 transition-colors mb-3" />
                    <button className="w-full bg-amber-500 text-black py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">Subscribe</button>
                </div>
            </main>

            {/* 5. LUXURY FOOTER SECTION */}
            <footer className="bg-[#070a12] px-[8%] pt-20 pb-8 text-slate-300 border-t border-slate-900">
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
                    
                    {/* Brand & Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                        {/* Brand Info */}
                        <div className="lg:col-span-5">
                            <h2 className="text-2xl font-headline font-light text-white uppercase tracking-wide mb-4">
                                Whispers of <span className="font-serif italic text-amber-400">Ceylon</span>
                            </h2>
                            <p className="text-slate-400 text-xs font-light leading-relaxed max-w-sm">
                                Curating completely bespoke and private full-day voyages through the historic and majestic landscapes of Sri Lanka.
                            </p>
                            <div className="flex gap-4 mt-6 text-slate-400">
                                <Instagram className="hover:text-amber-400 cursor-pointer transition-colors" style={{ fontSize: '18px' }} />
                                <Facebook className="hover:text-amber-400 cursor-pointer transition-colors" style={{ fontSize: '18px' }} />
                                <Twitter className="hover:text-amber-400 cursor-pointer transition-colors" style={{ fontSize: '18px' }} />
                            </div>
                        </div>

                        <div className="hidden lg:block lg:col-span-3"></div>

                        {/* Explore Links */}
                        <div className="lg:col-span-4">
                            <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-4">Navigation</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
                                {categories.map((cat, i) => (
                                    <span key={i} onClick={() => { setActiveCategory(cat); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="hover:text-amber-400 cursor-pointer transition-colors py-1">
                                        • {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Full Width Large Gallery */}
                    <div className="border-t border-slate-900 pt-8">
                        <h4 className="text-xs uppercase tracking-widest text-white font-bold mb-6">Visual Chronicles (Instagram)</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {galleryImages.map((img, index) => {
                                const isHovered = hoveredIndex === index;
                                return (
                                    <div 
                                        key={index} 
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="relative rounded-xl overflow-hidden aspect-[1.5] bg-slate-900 cursor-pointer border border-slate-900 transition-all duration-500"
                                        style={{ 
                                            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                                            boxShadow: isHovered ? '0 12px 20px rgba(0, 0, 0, 0.6)' : 'none',
                                        }}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Gallery ${index}`} 
                                            className="w-full h-full object-cover transition-transform duration-500"
                                            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }} 
                                        />
                                        
                                        <div 
                                            className="absolute inset-0 flex justify-center items-center text-white font-light transition-all duration-300"
                                            style={{ 
                                                backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.25)' : 'rgba(0,0,0,0.3)',
                                                fontSize: isHovered ? '1.5rem' : '1.2rem'
                                            }}
                                        >
                                            +
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-center border-t border-slate-900/80 pt-8 mt-4 text-slate-500 text-[10px] tracking-wider uppercase">
                        Copyright © 2026 Jai Lanka Travels (Whispers Ceylon). All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Blog;