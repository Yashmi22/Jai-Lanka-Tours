import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowBack, AccessTime, CalendarMonth } from '@mui/icons-material';

const BlogPostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/packages/blog/${id}`);
                setPost(res.data);
            } catch (err) {
                console.error("Error loading blog post details", err);
            }
        };
        fetchPostDetails();
    }, [id]);

    if (!post) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Inter, sans-serif', color: '#64748b' }}>
                Loading Story...
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: '#fdfdfd', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: '#0f172a' }}>
            
            {/* Top Navigation */}
            <div style={{ padding: '30px 8% 10px' }}>
                <button 
                    onClick={() => navigate('/blog')} 
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', backgroundColor: 'transparent', color: '#0369a1', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                    <ArrowBack fontSize="small" /> Back to Journal
                </button>
            </div>

            {/* Main Content Layout */}
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 20px 100px' }}>
                
                {/* Meta tags */}
                <span style={{ backgroundColor: '#cfe4f2', color: '#0369a1', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 'bold', trackingLetter: '1px' }}>
                    {post.category}
                </span>

                <h1 style={{ fontSize: '3rem', fontWeight: '800', marginTop: '20px', marginBottom: '20px', lineHeight: '1.2', trackingLetter: '-0.5px' }}>
                    {post.title}
                </h1>

                {/* Date & Time Row */}
                <div style={{ display: 'flex', gap: '20px', color: '#64748b', fontSize: '0.85rem', marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <CalendarMonth style={{ fontSize: '16px' }} /> 
                        {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <AccessTime style={{ fontSize: '16px' }} /> {post.readTime || '5 min read'}
                    </span>
                </div>

                {/* Big Banner Image */}
                <div style={{ width: '100%', height: '450px', borderRadius: '24px', overflow: 'hidden', marginBottom: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Main Article Body Text */}
                <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', whiteSpace: 'pre-line' }}>
                    {post.content}
                </div>

            </article>
        </div>
    );
};

export default BlogPostDetail;