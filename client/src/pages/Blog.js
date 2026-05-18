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
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            
            {/* Hero Section */}
            <header style={{ padding: '60px 8% 40px' }}>
                <span style={{ color: '#2b9348', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}>THE ISLAND JOURNAL</span>
                <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '10px 0', color: '#0f172a' }}>Whispers of <span style={{ color: '#0369a1' }}>Ceylon</span></h1>
                <p style={{ color: '#64748b', maxWidth: '500px', lineHeight: '1.6' }}>Curated stories from the heart of the Indian Ocean. From misty tea trails to coastal secrets.</p>
                
                <div style={{ position: 'relative', marginTop: '40px', borderRadius: '25px', overflow: 'hidden', height: '450px' }}>
                    <img src={heroImg} alt="Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '30px', left: '30px', backgroundColor: 'rgba(255,255,255,0.85)', padding: '25px', borderRadius: '20px', maxWidth: '400px', backdropFilter: 'blur(10px)' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#64748b' }}>HERITAGE  •  8 min read</span>
                        <h2 style={{ fontSize: '1.5rem', margin: '10px 0' }}>Beyond the Map: The Secret Waterfalls of Knuckles Range</h2>
                        <span style={{ color: '#0369a1', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>Read Full Story <ArrowForward fontSize="small" /></span>
                    </div>
                </div>
            </header>

            {/* Categories */}
            <div style={{ padding: '0 8% 20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
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

            {/* Footer */}
            <footer style={{ backgroundColor: '#f8fafc', padding: '60px 8% 30px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <img src={logo} alt="Jai Lanka" style={{ height: '30px', marginBottom: '15px', mixBlendMode: 'multiply' }} />
                        <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.6' }}>Crafting bespoke experiences across Sri Lanka since 2012.</p>
                        <div style={{ display: 'flex', gap: '12px', marginTop: '15px', color: '#0369a1' }}>
                            <Instagram fontSize="small" style={{ cursor: 'pointer' }} />
                            <Facebook fontSize="small" style={{ cursor: 'pointer' }} />
                            <Twitter fontSize="small" style={{ cursor: 'pointer' }} />
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