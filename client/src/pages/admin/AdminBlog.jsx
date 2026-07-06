import React, { useState } from 'react';
import axios from 'axios';

const AdminBlog = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        category: 'LOCAL FOOD',
        image: '',
        desc: '',
        content: '',
        readTime: '5 min read'
    });

    const categories = ['LOCAL FOOD', 'TRAVEL TIPS', 'CULTURE', 'HERITAGE', 'NATURE', 'ACCOMMODATION'];

    const handleChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
await axios.post(`${process.env.REACT_APP_API_BASE_URL}/packages/blog/add`, blogData);
            alert('Blog Post Added Successfully');
            setBlogData({ title: '', category: 'LOCAL FOOD', image: '', desc: '', content: '', readTime: '5 min read' });
        } catch (err) {
            console.error(err);
            alert('Error: Blog post could not be added.');
        }
    };

    return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '50px 8%', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <span style={{ color: '#0369a1', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}>JAI LANKA PORTAL</span>
                <h2 style={{ fontSize: '2rem', margin: '10px 0 30px', color: '#0f172a' }}>Create New Blog Post</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Blog Title</label>
                            <input type="text" name="title" value={blogData.title} onChange={handleChange} required style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1' }} placeholder="e.g. Navigating Galle's Morning Market" />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Category</label>
                            <select name="category" value={blogData.category} onChange={handleChange} style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white' }}>
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Image Path/URL</label>
                            <input type="text" name="image" value={blogData.image} onChange={handleChange} required style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1' }} placeholder="/images/blog/food.jpg" />
                        </div>
                        <div>
                            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Read Time</label>
                            <input type="text" name="readTime" value={blogData.readTime} onChange={handleChange} required style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1' }} placeholder="e.g. 8 min read" />
                        </div>
                    </div>

                    <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Short Description (Card preview text)</label>
                        <input type="text" name="desc" value={blogData.desc} onChange={handleChange} required style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1' }} placeholder="The smell of roasted cinnamon and fresh sea air..." />
                    </div>

                    <div>
                        <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#475569' }}>Full Blog Content</label>
                        <textarea name="content" value={blogData.content} onChange={handleChange} required style={{ width: '100%', padding: '12px', marginTop: '5px', borderRadius: '8px', border: '1px solid #cbd5e1', height: '200px', resize: 'vertical' }} placeholder="Write the complete story here..." />
                    </div>

                    <button type="submit" style={{ backgroundColor: '#0369a1', color: 'white', border: 'none', padding: '15px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', fontSize: '1rem' }}>
                        Publish Blog Article
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminBlog;