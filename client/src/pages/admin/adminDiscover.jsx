import React, { useState } from 'react';
import axios from 'axios';
import { FaMapMarkerAlt, FaHiking, FaCloudUploadAlt, FaTrash } from 'react-icons/fa';

const DiscoverAdmin = () => {
    const [formData, setFormData] = useState({
        name: '',
        tag: '',
        category: 'Cultural',
        type: 'destination', // destination හෝ experience තෝරන්න
        img: '',
        desc: ''
    });

    const categories = ['Cultural', 'Adventure', 'Wellness', 'Romantic', 'Beach'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // මෙතනදී අපි කලින් හදාගත්තු /api/discover වගේ endpoint එකකට data යවනවා
            const response = await axios.post('http://localhost:5000/api/packages/discover/add', formData);
            alert(`${formData.type.toUpperCase()} Added Successfully!`);
            
            // Form එක reset කිරීම
            setFormData({ name: '', tag: '', category: 'Cultural', type: 'destination', img: '', desc: '' });
        } catch (err) {
            console.error(err);
            alert('Error adding data. Make sure backend is running.');
        }
    };

    return (
        <div className="min-h-screen bg-[#fcfdfe] p-6 md:p-16 font-sans text-[#1a1c1e]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#005483] block mb-2">Admin Portal</span>
                    <h1 className="text-5xl font-serif italic">Manage Discoveries</h1>
                </header>

                <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
                    
                    {/* Select Type (Destination or Experience) */}
                    <div className="flex gap-4 p-2 bg-slate-50 rounded-2xl w-fit">
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, type: 'destination'})}
                            className={`px-8 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${formData.type === 'destination' ? 'bg-[#005483] text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Destination
                        </button>
                        <button 
                            type="button"
                            onClick={() => setFormData({...formData, type: 'experience'})}
                            className={`px-8 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${formData.type === 'experience' ? 'bg-[#005483] text-white shadow-lg' : 'text-slate-400'}`}
                        >
                            Experience
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Location Name</label>
                            <input 
                                name="name" value={formData.name} onChange={handleChange} required
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none transition-all"
                                placeholder="e.g. Sigiriya"
                            />
                        </div>

                        {/* Tag */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Short Tagline</label>
                            <input 
                                name="tag" value={formData.tag} onChange={handleChange} required
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none"
                                placeholder="e.g. Ancient Citadel"
                            />
                        </div>

                        {/* Category */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Category</label>
                            <select 
                                name="category" value={formData.category} onChange={handleChange}
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none appearance-none"
                            >
                                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>

                        {/* Image URL */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Image URL</label>
                            <input 
                                name="img" value={formData.img} onChange={handleChange} required
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none"
                                placeholder="/images/location.jpg"
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2 flex flex-col gap-2">
                            <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400 ml-2">Detailed Description</label>
                            <textarea 
                                name="desc" value={formData.desc} onChange={handleChange} required
                                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#005483] outline-none h-32"
                                placeholder="Describe the magic of this place..."
                            />
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-5 bg-[#005483] text-white rounded-2xl text-[11px] font-bold tracking-[0.3em] uppercase hover:shadow-2xl hover:scale-[1.01] transition-all duration-500"
                    >
                        Publish to Discover Page
                    </button>
                </form>

                <p className="mt-12 text-center text-slate-300 text-[9px] tracking-widest uppercase">
                    &copy; 2026 Jai Lanka Admin System
                </p>
            </div>
        </div>
    );
};

export default DiscoverAdmin;