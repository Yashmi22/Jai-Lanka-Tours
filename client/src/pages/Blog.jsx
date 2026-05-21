import React from 'react';
import { 
    ArrowForward, 
    ArrowBack, 
    MailOutlineOutlined, 
    Instagram, 
    Facebook, 
    Twitter 
} from '@mui/icons-material';

// Assets import කිරීම
import heroImg from '../assets/blog-hero.jpg';
import foodImg from '../assets/food.jpg';
import cultureImg from '../assets/culture.jpg';
import trainImg from '../assets/train-ella.jpg';
import elephantImg from '../assets/elephant.jpg';
import bawaImg from '../assets/bawa.jpg';
import logo from '../assets/logo.png';

// Gallery Images
import leopardImg from '../assets/leopard.jpg';
import waterfallImg from '../assets/waterfall.jpg';
import teaImg from '../assets/tea-estate.jpg';
import sigiriyaImg from '../assets/sigiriya.jpg';
import ellaMistImg from '../assets/ella-mist.jpg'; 
import flowersImg from '../assets/flowers.jpg';

const Blog = () => {
    const categories = ['All Stories', 'Local Food', 'Travel Tips', 'Culture', 'Heritage', 'Nature'];

    const blogPosts = [
        {
            date: 'October 12, 2025',
            category: 'LOCAL FOOD',
            title: 'A Masterclass in Spices: Navigating Galle’s Morning Market',
            image: foodImg,
            desc: 'The smell of roasted cinnamon and fresh sea air marks the beginning...'
        },
        {
            date: 'September 28, 2025',
            category: 'CULTURE',
            title: 'The Etiquette of the Sacred: A Guide to Temple Visits',
            image: cultureImg,
            desc: 'Understanding the nuances of respect in Sri Lanka’s Buddhist temples...'
        },
        {
            date: 'September 15, 2025',
            category: 'TRAVEL TIPS',
            title: 'Slow Travel: Why You Should Take the Train to Ella',
            image: trainImg,
            desc: 'Forget the highway. The seven-hour journey from Kandy to Ella...'
        },
        {
            date: 'August 20, 2025',
            category: 'NATURE',
            title: 'Gentle Giants: Ethical Elephant Encounters',
            image: elephantImg,
            desc: 'Where to see these magnificent creatures responsibly and how your tourism...'
        },
        {
            date: 'August 12, 2025',
            category: 'ACCOMMODATION',
            title: 'Tropical Modernism: Geoffrey Bawa’s Living Legacy',
            image: bawaImg,
            desc: 'A tour through the most iconic architectural masterpieces where the boundaries...'
        }
    ];

    return (
        <div className="bg-[#0b0f19] min-h-screen text-slate-100 font-body antialiased">
            
            {/* 1. LUXURY HERO SECTION */}
            <header className="pt-32 pb-12 px-6 md:px-[8%] text-center bg-gradient-to-b from-[#060a13] to-[#0b0f19]">
                <div className="max-w-3xl mx-auto">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 bg-amber-950/40 border border-amber-600/30 px-5 py-2 rounded-full mb-5 inline-block">
                        The Island Journal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-headline font-light text-white tracking-wide mt-2 mb-4 uppercase">
                        Whispers of <span className="font-serif italic text-amber-400">Ceylon</span>
                    </h1>
                    <p className="text-slate-400 text-xs md:text-sm font-light max-w-xl mx-auto leading-relaxed tracking-wide">
                        Curating bespoke narratives through the emerald landscapes of Ceylon. From misty tea trails to ancient coastal secrets.
                    </p>
                </div>

                {/* FEATURED SPOTLIGHT CARD (පිටුවේ ආරම්භක රිද්මය) */}
                <div className="relative mt-12 rounded-3xl overflow-hidden h-[450px] border border-slate-800 shadow-2xl group cursor-pointer max-w-screen-2xl mx-auto">
                    <img src={heroImg} alt="Knuckles Range" className="w-full h-full object-cover brightness-[75%] group-hover:scale-102 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-6 md:left-12 bg-[#111726]/90 backdrop-blur-md p-6 md:p-8 rounded-2xl max-w-md border border-amber-500/10 text-left transition-all duration-300 group-hover:border-amber-500/30">
                        <span className="text-[9px] font-extrabold text-amber-400 tracking-widest uppercase block mb-2">HERITAGE • 8 MIN READ</span>
                        <h2 className="text-lg md:text-2xl font-headline font-bold text-white mb-4 leading-snug uppercase">Beyond the Map: The Secret Waterfalls of Knuckles Range</h2>
                        <span className="text-white group-hover:text-amber-400 font-bold flex items-center gap-2 text-xs uppercase tracking-widest transition-colors">
                            Read Full Story <ArrowForward style={{ fontSize: '14px' }} />
                        </span>
                    </div>
                </div>
            </header>

            {/* 2. PREMIUM RHYTHMIC CATEGORIES MENU */}
            <div className="px-[8%] mb-12 flex flex-wrap justify-center items-center gap-3 md:gap-4 border-b border-slate-800/60 pb-6">
                {categories.map((cat, index) => (
                    <button key={index} style={{ padding: '8px 18px', borderRadius: '8px', border: 'none', backgroundColor: index === 0 ? '#0369a1' : '#f1f5f9', color: index === 0 ? 'white' : '#475569', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer' }}>{cat}</button>
                ))}
            </div>

            {/* Blog Grid - එක පේළියකට 3ක් එන සේ සකසා ඇත */}
            <main style={{ 
                padding: '20px 8% 60px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // මෙතන 300px කිරීමෙන් පේළියකට 3ක් ලැබේ
                gap: '30px' 
            }}>
                {blogPosts.map((post, index) => (
                    <div key={index} style={{ cursor: 'pointer' }}>
                        <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '240px' }}> {/* Image height එක අඩු කළා */}
                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'white', padding: '4px 12px', borderRadius: '5px', fontSize: '0.65rem', fontWeight: 'bold' }}>{post.category}</span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '15px', marginBottom: '5px' }}>{post.date}</p>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', lineHeight: '1.3', color: '#0f172a' }}>{post.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.desc}</p>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0369a1', fontWeight: 'bold', marginTop: '10px', fontSize: '0.85rem' }}>Read More <ArrowForward style={{ fontSize: '14px' }} /></span>
                    </div>
                ))}

                {/* Newsletter Box - මෙයත් Card එකක් ලෙස පේළියට එකතු වේ */}
                <div style={{ backgroundColor: '#cfe4f2', borderRadius: '15px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <MailOutlineOutlined style={{ fontSize: '30px', color: '#0369a1', marginBottom: '10px' }} />
                    <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0' }}>Island Updates</h3>
                    <p style={{ fontSize: '0.8rem', color: '#475569', marginBottom: '15px' }}>Get travel tips and exclusive itinerary offers.</p>
                    <input type="email" placeholder="Email address" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #94a3b8', marginBottom: '10px', fontSize: '0.85rem' }} />
                    <button style={{ width: '100%', backgroundColor: '#0369a1', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}>Subscribe</button>
                </div>
            </main>

            {/* 5. LUXURY FOOTER SECTION WITH IMPROVED GALLERY HOVER */}
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
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '15px', fontSize: '1rem' }}>Explore</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#64748b' }}>
                            <span style={{ cursor: 'pointer' }}>Destinations</span>
                            <span style={{ cursor: 'pointer' }}>Experiences</span>
                            <span style={{ cursor: 'pointer' }}>Custom Tours</span>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '15px', fontSize: '1rem' }}>Gallery</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
                            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{ aspectRatio: '1', backgroundColor: '#e2e8f0', borderRadius: '4px' }}></div>)}
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '20px', color: '#94a3b8', fontSize: '0.7rem' }}>
                    © 2026 Jai Lanka Travel & Tourism. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Blog;