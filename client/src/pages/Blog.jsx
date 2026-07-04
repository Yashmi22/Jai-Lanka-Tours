import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
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
import masksImg from '../assets/masks.jpg'; 
import logo from '../assets/logo.png';

// Gallery Images
import leopardImg from '../assets/leopard.jpg';
import waterfallImg from '../assets/waterfall.jpg';
import teaImg from '../assets/tea-estate.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import ellaMistImg from '../assets/ella-mist.jpg'; 
import flowersImg from '../assets/flowers.jpg';

const Blog = () => {
    const navigate = useNavigate(); 
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
            category: 'NATURE',
            title: 'Coastal Secrets: Sunset & Serenity at Mirissa’s Hidden Bays',
            image: bawaImg,
            desc: 'Escape the crowds to discover secluded golden arcs, luxury boutique hideaways, and the ultimate pristine spots for a private evening swim...',
            readTime: '5 min read'
        },
        {
            id: "puppets-masks",
            date: 'August 05, 2025',
            category: 'HERITAGE',
            title: 'The Living Shadows: Tales of Ambalangoda Puppets & Masks',
            image: masksImg,
            desc: 'Unmasking the centuries-old folklore, vibrant devil-dancing rituals, and the masterful woodcarving artistry of Sri Lanka’s south coast...',
            readTime: '6 min read'
        }
    ];

    const galleryImages = [leopardImg, waterfallImg, teaImg, sigiriyaImg, ellaMistImg, flowersImg];

    const filteredPosts = activeCategory === 'All Stories' 
        ? blogPosts 
        : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

    const handleCardClick = (id) => {
        navigate(`/blog/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#0b0f19] min-h-screen text-slate-100 font-body antialiased">
            
            {/* 1. LUXURY HERO SECTION */}
            <header className="relative w-full h-[600px] overflow-hidden bg-[#060a13] flex items-center justify-center">
                <img 
                    src={teaImg} 
                    alt="Ceylon Tea Estates" 
                    className="absolute inset-0 w-full h-full object-cover brightness-[45%] scale-101" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-black/30 to-black/50"></div>
                
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

                    <button 
                        onClick={() => window.scrollTo({ top: 620, behavior: 'smooth' })}
                        className="group bg-transparent border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black font-semibold text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-500/5"
                    >
                        Explore Stories 
                        <ArrowForward className="group-hover:translate-x-1 transition-transform" style={{ fontSize: '14px' }} />
                    </button>
                </div>
            </header>

            {/* 2. PREMIUM CATEGORIES MENU */}
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

            {/* 3. MAIN STORY GRID */}
            <main className="px-[8%] pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
                {filteredPosts.map((post, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleCardClick(post.id)} 
                        className="bg-[#111726] rounded-2xl overflow-hidden border border-slate-800/60 hover:border-amber-500/40 transition-all duration-500 group flex flex-col justify-between shadow-xl cursor-pointer hover:-translate-y-1.5"
                    >
                        <div>
                            <div className="relative overflow-hidden h-48">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover brightness-[80%] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent"></div>
                                <span className="absolute top-4 left-4 bg-[#0b0f19]/90 backdrop-blur-md border border-amber-500/10 text-amber-400 px-3 py-1 rounded-md text-[8px] font-extrabold tracking-widest uppercase">{post.category}</span>
                            </div>

                            <div className="p-5">
                                <p className="text-[9px] text-slate-500 tracking-wider mb-2">{post.date}</p>
                                <h3 className="text-sm font-headline font-bold text-white tracking-wide mb-2 group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-slate-400 text-[11px] font-light leading-relaxed line-clamp-2">
                                    {post.desc}
                                </p>
                            </div>
                        </div>

                        <div className="p-5 pt-0 mt-auto">
                            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[9px] uppercase tracking-widest">
                                <span className="text-slate-500 font-medium">{post.readTime || '5 min read'}</span>
                                <span className="text-amber-400 font-bold group-hover:text-white transition-colors flex items-center gap-1">
                                    Explore <ArrowForward style={{ fontSize: '10px' }} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* 4. ELITE NEWSLETTER BANNER (ROW එක දිගේම FULL WIDTH යන විදිහට UPDATE කළා 🚀) */}
                <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 mt-6 bg-gradient-to-r from-[#12192c] via-[#0f1526] to-[#0d1424] rounded-2xl p-8 md:p-10 border border-amber-500/10 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-2xl relative overflow-hidden w-full">
                    
                    {/* Glowing Accent Blur effect */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    
                    {/* Left Content (Text & Icon) */}
                    <div className="flex items-center gap-4 text-center lg:text-left flex-col lg:flex-row max-w-xl">
                        <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 hidden sm:block">
                            <MailOutlineOutlined className="text-amber-400" style={{ fontSize: '32px' }} />
                        </div>
                        <div>
                            <span className="text-[8px] font-bold tracking-[0.25em] text-amber-400 uppercase block mb-1">The Insiders Circle</span>
                            <h3 className="text-xl font-headline font-bold text-white mb-1.5 uppercase tracking-wide">Island Insights</h3>
                            <p className="text-slate-400 text-xs font-light leading-relaxed">
                                Subscribe to receive unpublicized luxury itineraries, private island stories, and seasonal travel secrets directly to your inbox.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Content (Form Input & Button) */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-3 min-w-[320px] md:min-w-[400px]">
                        <input 
                            type="email" 
                            placeholder="Luxury email address" 
                            className="w-full sm:flex-1 bg-[#0b0f19] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-amber-500/40 transition-all placeholder:text-slate-600" 
                        />
                        <button className="w-full sm:w-auto bg-amber-500 text-black px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap shadow-lg shadow-amber-500/10">
                            Subscribe
                        </button>
                    </div>
                </div>
            </main>

            {/* 5. LUXURY FOOTER SECTION */}
            <footer className="bg-[#070a12] px-[8%] pt-20 pb-8 text-slate-300 border-t border-t-slate-900">
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
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

                    {/* Instagram Gallery */}
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

                    <div className="text-center border-t border-slate-900/80 pt-8 mt-4 text-slate-500 text-[10px] tracking-wider uppercase">
                        Copyright © 2026 Jai Lanka Travels (Whispers Ceylon). All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Blog;