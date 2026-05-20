import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowForward, MailOutlineOutlined, Instagram, Facebook, Twitter } from '@mui/icons-material';

import heroImg from '../assets/blog-hero.jpg';
import logo from '../assets/logo.png';

const Blog = () => {
    const navigate = useNavigate();
    const [blogPosts, setBlogPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Stories');
    const categories = ['All Stories', 'Local Food', 'Travel Tips', 'Culture', 'Heritage', 'Nature'];

    // Database එකෙන් Blogs කියවා ගැනීම
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/packages/blog`);
                setBlogPosts(res.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlogs();
    }, []);

    // Category එක අනුව ෆිල්ටර් කිරීම
    const filteredPosts = selectedCategory === 'All Stories' 
        ? blogPosts 
        : blogPosts.filter(post => post.category.toUpperCase() === selectedCategory.toUpperCase());

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
                    <button 
                        key={index} 
                        onClick={() => setSelectedCategory(cat)}
                        style={{ 
                            padding: '8px 18px', borderRadius: '8px', border: 'none', 
                            backgroundColor: selectedCategory === cat ? '#0369a1' : '#f1f5f9', 
                            color: selectedCategory === cat ? 'white' : '#475569', 
                            fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <main style={{ 
                padding: '20px 8% 60px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px' 
            }}>
                {filteredPosts.map((post) => (
                    <div key={post._id} onClick={() => navigate(`/blog/${post._id}`)} style={{ cursor: 'pointer' }}>
                        <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', height: '240px' }}>
                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <span style={{ position: 'absolute', top: '15px', left: '15px', backgroundColor: 'white', padding: '4px 12px', borderRadius: '5px', fontSize: '0.65rem', fontWeight: 'bold' }}>{post.category}</span>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '15px', marginBottom: '5px' }}>
                            {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', lineHeight: '1.3', color: '#0f172a' }}>{post.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.desc}</p>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0369a1', fontWeight: 'bold', marginTop: '10px', fontSize: '0.85rem' }}>Read More <ArrowForward style={{ fontSize: '14px' }} /></span>
                    </div>
                ))}

                {/* Newsletter Box */}
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
                </div>
                <div style={{ textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '20px', color: '#94a3b8', fontSize: '0.7rem' }}>
                    © 2026 Jai Lanka Travel & Tourism. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Blog;